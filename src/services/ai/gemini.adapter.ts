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

export const DEFAULT_GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';
export const DEFAULT_GEMINI_MODEL = 'gemini-4-hydrogen';

interface GeminiPart {
  text?: string;
  inlineData?: {
    mimeType: string;
    data: string;
  };
}

interface GeminiGenerateContentResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
  error?: {
    message?: string;
  };
}

function buildGeminiUrl(endpointUrl: string | undefined, modelName: string): string {
  const base = (endpointUrl?.trim() || DEFAULT_GEMINI_BASE_URL).replace(/\/+$/, '');
  if (base.endsWith(':generateContent')) {
    return base;
  }
  return `${base}/models/${encodeURIComponent(modelName)}:generateContent`;
}

export function createGeminiAdapter(
  config: AppSettings['aiHelper'],
  fetchImpl?: typeof fetch,
): AiProviderAdapter {
  const apiKey = config.apiKey?.trim();
  if (!apiKey) {
    throw new AiServiceError(
      'MISSING_CONFIG',
      'Veuillez renseigner votre clé API Gemini dans les Paramètres avant de lancer une analyse.',
    );
  }

  const modelName = config.modelName?.trim() || DEFAULT_GEMINI_MODEL;
  const url = buildGeminiUrl(config.endpointUrl, modelName);
  const fetchFn = resolveFetch(fetchImpl);

  async function callGenerateContent(
    systemPrompt: string,
    userParts: GeminiPart[],
  ): Promise<string> {
    let response: Response;
    try {
      response = await fetchFn(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey!,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }],
          },
          contents: [
            {
              role: 'user',
              parts: userParts,
            },
          ],
          generationConfig: {
            temperature: 0.1,
            responseMimeType: 'application/json',
          },
        }),
      });
    } catch (error) {
      throw new AiServiceError(
        'NETWORK_ERROR',
        "Impossible de joindre l'API Gemini. Veuillez vérifier votre connexion Internet.",
        { cause: error },
      );
    }

    if (!response.ok) {
      let providerDetail = '';
      try {
        const errJson = (await response.json()) as GeminiGenerateContentResponse;
        if (errJson.error?.message) {
          providerDetail = ` (${errJson.error.message})`;
        }
      } catch {
        // Ignore non-JSON error body.
      }
      throw new AiServiceError(
        'PROVIDER_ERROR',
        `Erreur de l'API Gemini (HTTP ${response.status})${providerDetail}.`,
        { status: response.status },
      );
    }

    let data: GeminiGenerateContentResponse;
    try {
      data = (await response.json()) as GeminiGenerateContentResponse;
    } catch (error) {
      throw new AiServiceError(
        'INVALID_RESPONSE',
        "La réponse de l'API Gemini n'est pas un document JSON valide.",
        { cause: error },
      );
    }

    const text = (data.candidates?.[0]?.content?.parts ?? [])
      .map((part) => part.text ?? '')
      .join('')
      .trim();

    if (!text) {
      throw new AiServiceError(
        'INVALID_RESPONSE',
        "L'API Gemini n'a retourné aucun contenu exploitable.",
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
          'Veuillez fournir un texte ou un fichier (PDF ou image) à analyser.',
        );
      }

      const parts: GeminiPart[] = [{ text: buildExtractionUserPromptFr(input) }];

      if (hasFile && input.fileBase64) {
        const mimeType = input.mimeType?.trim() || 'application/pdf';
        parts.push({
          inlineData: {
            mimeType,
            data: stripBase64DataUrlPrefix(input.fileBase64),
          },
        });
      }

      const rawText = await callGenerateContent(EXTRACTION_SYSTEM_PROMPT_FR, parts);
      const parsed = extractJsonObjectFromText(rawText);
      return normalizeExtractionProposal(parsed);
    },

    async answerFromWikiContext(
      questionFr: string,
      contextSnippets: WikiContextSnippet[],
    ): Promise<WikiQaResponse> {
      const prompt = buildWikiQaUserPromptFr(questionFr, contextSnippets);
      const rawText = await callGenerateContent(WIKI_QA_SYSTEM_PROMPT_FR, [{ text: prompt }]);
      const parsed = extractJsonObjectFromText(rawText);
      return normalizeWikiQaResponse(parsed, contextSnippets);
    },
  };
}
