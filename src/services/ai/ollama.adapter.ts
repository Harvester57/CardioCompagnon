import type { AiProviderAdapter, AppSettings, ExtractionProposal, WikiQaResponse } from '../../types';
import {
  AiServiceError,
  EXTRACTION_SYSTEM_PROMPT_FR,
  WIKI_QA_SYSTEM_PROMPT_FR,
  type ExtractReportInput,
  type WikiContextSnippet,
  buildExtractionUserPromptFr,
  buildWikiQaUserPromptFr,
  extractJsonObjectFromText,
  normalizeExtractionProposal,
  normalizeWikiQaResponse,
  resolveFetch,
  stripBase64DataUrlPrefix,
} from './shared';

export const DEFAULT_OLLAMA_BASE_URL = 'http://localhost:11434';
export const DEFAULT_OLLAMA_MODEL = 'mistral';

interface OllamaMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
  images?: string[];
}

interface OllamaResponse {
  message?: {
    content?: string;
  };
  response?: string;
  error?: string;
}

function buildOllamaUrl(endpointUrl?: string): { url: string; mode: 'chat' | 'generate' } {
  const base = (endpointUrl?.trim() || DEFAULT_OLLAMA_BASE_URL).replace(/\/+$/, '');
  if (base.endsWith('/api/generate')) {
    return { url: base, mode: 'generate' };
  }
  if (base.endsWith('/api/chat')) {
    return { url: base, mode: 'chat' };
  }
  return { url: `${base}/api/chat`, mode: 'chat' };
}

export function createOllamaAdapter(
  config: AppSettings['aiHelper'],
  fetchImpl?: typeof fetch,
): AiProviderAdapter {
  const { url, mode } = buildOllamaUrl(config.endpointUrl);
  const modelName = config.modelName?.trim() || DEFAULT_OLLAMA_MODEL;
  const fetchFn = resolveFetch(fetchImpl);

  async function callOllama(
    systemPrompt: string,
    userPrompt: string,
    images?: string[],
  ): Promise<string> {
    const body =
      mode === 'generate'
        ? {
            model: modelName,
            system: systemPrompt,
            prompt: userPrompt,
            ...(images && images.length > 0 ? { images } : {}),
            format: 'json',
            stream: false,
            options: { temperature: 0.1 },
          }
        : {
            model: modelName,
            messages: [
              { role: 'system', content: systemPrompt } satisfies OllamaMessage,
              {
                role: 'user',
                content: userPrompt,
                ...(images && images.length > 0 ? { images } : {}),
              } satisfies OllamaMessage,
            ],
            format: 'json',
            stream: false,
            options: { temperature: 0.1 },
          };

    let response: Response;
    try {
      response = await fetchFn(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      throw new AiServiceError(
        'NETWORK_ERROR',
        "Impossible de joindre le serveur local Ollama. Veuillez vérifier qu'Ollama est démarré et autorise les requêtes CORS.",
        { cause: error },
      );
    }

    if (!response.ok) {
      let detail = '';
      try {
        const errBody = (await response.json()) as OllamaResponse;
        if (errBody.error) {
          detail = ` (${errBody.error})`;
        }
      } catch {
        // Ignore non-JSON error body.
      }
      throw new AiServiceError(
        'PROVIDER_ERROR',
        `Erreur du serveur local Ollama (HTTP ${response.status})${detail}.`,
        { status: response.status },
      );
    }

    let data: OllamaResponse;
    try {
      data = (await response.json()) as OllamaResponse;
    } catch (error) {
      throw new AiServiceError(
        'INVALID_RESPONSE',
        "La réponse du serveur local Ollama n'est pas un JSON valide.",
        { cause: error },
      );
    }

    const text = (data.message?.content ?? data.response ?? '').trim();
    if (!text) {
      throw new AiServiceError(
        'INVALID_RESPONSE',
        "Le serveur local Ollama n'a retourné aucun contenu exploitable.",
      );
    }

    return text;
  }

  return {
    async extractFromTextOrFile(input: ExtractReportInput): Promise<ExtractionProposal> {
      const hasText = Boolean(input.text && input.text.trim().length > 0);
      const hasFile = Boolean(input.fileBase64 && input.fileBase64.trim().length > 0);

      if (!hasText && !hasFile) {
        throw new AiServiceError(
          'EMPTY_INPUT',
          'Veuillez fournir un texte ou une image de compte-rendu à analyser.',
        );
      }

      let images: string[] | undefined;
      if (hasFile && input.fileBase64) {
        const mimeType = input.mimeType?.trim().toLowerCase() || '';
        if (mimeType.startsWith('image/')) {
          images = [stripBase64DataUrlPrefix(input.fileBase64)];
        } else if (!hasText) {
          throw new AiServiceError(
            'UNSUPPORTED_FILE',
            'Ollama local ne prend pas en charge les fichiers PDF bruts sans texte. Veuillez coller le texte du compte-rendu ou fournir une image.',
          );
        }
      }

      const rawText = await callOllama(
        EXTRACTION_SYSTEM_PROMPT_FR,
        buildExtractionUserPromptFr(input),
        images,
      );
      const parsed = extractJsonObjectFromText(rawText);
      return normalizeExtractionProposal(parsed);
    },

    async answerFromWikiContext(
      questionFr: string,
      contextSnippets: WikiContextSnippet[],
    ): Promise<WikiQaResponse> {
      const rawText = await callOllama(
        WIKI_QA_SYSTEM_PROMPT_FR,
        buildWikiQaUserPromptFr(questionFr, contextSnippets),
      );
      const parsed = extractJsonObjectFromText(rawText);
      return normalizeWikiQaResponse(parsed, contextSnippets);
    },
  };
}
