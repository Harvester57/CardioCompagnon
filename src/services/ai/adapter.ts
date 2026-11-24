import type { AiProviderAdapter, AppSettings } from '../../types';
import { createGeminiAdapter } from './gemini.adapter';
import { createOllamaAdapter } from './ollama.adapter';
import { createOpenAiCompatAdapter } from './openai-compat.adapter';
import { AiServiceError } from './shared';

export {
  AI_EXTRACTION_WARNING_FR,
  AI_MEDICAL_DISCLAIMER_FR,
  AI_PRIVACY_REMINDER_FR,
  AiServiceError,
  EXTRACTION_SYSTEM_PROMPT_FR,
  WIKI_QA_SYSTEM_PROMPT_FR,
  buildExtractionUserPromptFr,
  buildWikiQaUserPromptFr,
  extractJsonObjectFromText,
  normalizeExtractionProposal,
  normalizeWikiQaResponse,
  type AiServiceErrorCode,
  type ExtractReportInput,
  type WikiContextSnippet,
} from './shared';

export function createAiAdapter(
  config: AppSettings['aiHelper'],
  fetchImpl?: typeof fetch,
): AiProviderAdapter {
  if (!config || !config.enabled) {
    throw new AiServiceError(
      'AI_DISABLED',
      "L'assistant IA optionnel est désactivé. Vous pouvez l'activer dans les Paramètres si vous souhaitez l'utiliser.",
    );
  }

  switch (config.provider) {
    case 'gemini':
      return createGeminiAdapter(config, fetchImpl);
    case 'mistral':
    case 'openai_compatible':
      return createOpenAiCompatAdapter(config, fetchImpl);
    case 'ollama':
      return createOllamaAdapter(config, fetchImpl);
    default: {
      const exhaustiveCheck: never = config.provider;
      throw new AiServiceError(
        'MISSING_CONFIG',
        `Fournisseur IA non pris en charge : « ${String(exhaustiveCheck)} ».`,
      );
    }
  }
}
