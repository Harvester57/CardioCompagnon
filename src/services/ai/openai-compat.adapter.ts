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
  isLocalhostUrl,
  normalizeExtractionProposal,
  normalizeWikiQaResponse,
  resolveFetch,
  stripBase64DataUrlPrefix,
} from './shared';

export const DEFAULT_MISTRAL_BASE_URL = 'https://api.mistral.ai/v1';
export const DEFAULT_MISTRAL_MODEL = 'mistral-small-latest';
export const DEFAULT_OPENAI_BASE_URL = 'https://api.openai.com/v1';
export const DEFAULT_OPENAI_MODEL = 'gpt-4o-mini';

type OpenAiContentPart =
  | { type: 'text'; text: string }
  | { type: 'image_url'; image_url: { url: string } };

interface OpenAiChatResponse {
  choices?: Array<{
    message?: {
      content?: string | Array<{ type?: string; text?: string }>;
    };
  }>;
  error?: {
    message?: string;
  };
}

function buildChatCompletionsUrl(
  provider: 'mistral' | 'openai_compatible',
  endpointUrl?: string,
): string {
  const defaultBase =
    provider === 'mistral' ? DEFAULT_MISTRAL_BASE_URL : DEFAULT_OPENAI_BASE_URL;
  const base = (endpointUrl?.trim() || defaultBase).replace(/\/+$/, '');
  if (base.endsWith('/chat/completions')) {
    return base;
  }
  return `${base}/chat/completions`;
}

export function createOpenAiCompatAdapter(
  config: AppSettings['aiHelper'],
  fetchImpl?: typeof fetch,
): AiProviderAdapter {
  const provider = config.provider === 'mistral' ? 'mistral' : 'openai_compatible';
  const url = buildChatCompletionsUrl(provider, config.endpointUrl);
  const apiKey = config.apiKey?.trim();

  if (!apiKey && !isLocalhostUrl(url)) {
    throw new AiServiceError(
      'MISSING_CONFIG',
      provider === 'mistral'
        ? 'Veuillez renseigner votre clé API Mistral dans les Paramètres avant de lancer une analyse.'
        : 'Veuillez renseigner votre clé API pour ce fournisseur compatible OpenAI dans les Paramètres.',
    );
  }

  const defaultModel =
    provider === 'mistral' ? DEFAULT_MISTRAL_MODEL : DEFAULT_OPENAI_MODEL;
  const modelName = config.modelName?.trim() || defaultModel;
  const fetchFn = resolveFetch(fetchImpl);

  async function callChatCompletions(
    systemPrompt: string,
    userContent: string | OpenAiContentPart[],
  ): Promise<string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (apiKey) {
      headers.Authorization = `Bearer ${apiKey}`;
    }

    let response: Response;
    try {
      response = await fetchFn(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          model: modelName,
          temperature: 0.1,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userContent },
          ],
        }),
      });
    } catch (error) {
      throw new AiServiceError(
        'NETWORK_ERROR',
        "Impossible de joindre le fournisseur IA configuré. Veuillez vérifier votre connexion et l'adresse du serveur.",
        { cause: error },
      );
    }

    if (!response.ok) {
      let detail = '';
      try {
        const errBody = (await response.json()) as OpenAiChatResponse;
        if (errBody.error?.message) {
          detail = ` (${errBody.error.message})`;
        }
      } catch {
        // Ignore non-JSON error body.
      }
      throw new AiServiceError(
        'PROVIDER_ERROR',
        `Erreur du fournisseur IA (HTTP ${response.status})${detail}.`,
        { status: response.status },
      );
    }

    let data: OpenAiChatResponse;
    try {
      data = (await response.json()) as OpenAiChatResponse;
    } catch (error) {
      throw new AiServiceError(
        'INVALID_RESPONSE',
        "La réponse du fournisseur compatible OpenAI n'est pas un JSON valide.",
        { cause: error },
      );
    }

    const messageContent = data.choices?.[0]?.message?.content;
    let text = '';
    if (typeof messageContent === 'string') {
      text = messageContent.trim();
    } else if (Array.isArray(messageContent)) {
      text = messageContent
        .map((part) => (typeof part.text === 'string' ? part.text : ''))
        .join('')
        .trim();
    }

    if (!text) {
      throw new AiServiceError(
        'INVALID_RESPONSE',
        "Le fournisseur IA n'a retourné aucun texte exploitable.",
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

      const promptText = buildExtractionUserPromptFr(input);
      let userContent: string | OpenAiContentPart[] = promptText;

      if (hasFile && input.fileBase64) {
        const mimeType = input.mimeType?.trim().toLowerCase() || '';
        if (mimeType.startsWith('image/')) {
          const cleanBase64 = stripBase64DataUrlPrefix(input.fileBase64);
          userContent = [
            { type: 'text', text: promptText },
            {
              type: 'image_url',
              image_url: {
                url: `data:${mimeType};base64,${cleanBase64}`,
              },
            },
          ];
        } else if (!hasText) {
          throw new AiServiceError(
            'UNSUPPORTED_FILE',
            'Ce fournisseur compatible OpenAI ne prend pas en charge les fichiers PDF bruts sans texte. Veuillez coller le texte du compte-rendu, utiliser une image ou sélectionner Gemini.',
          );
        }
      }

      const rawText = await callChatCompletions(EXTRACTION_SYSTEM_PROMPT_FR, userContent);
      const parsed = extractJsonObjectFromText(rawText);
      return normalizeExtractionProposal(parsed);
    },

    async answerFromWikiContext(
      questionFr: string,
      contextSnippets: WikiContextSnippet[],
    ): Promise<WikiQaResponse> {
      const prompt = buildWikiQaUserPromptFr(questionFr, contextSnippets);
      const rawText = await callChatCompletions(WIKI_QA_SYSTEM_PROMPT_FR, prompt);
      const parsed = extractJsonObjectFromText(rawText);
      return normalizeWikiQaResponse(parsed, contextSnippets);
    },
  };
}
