import type { AppSettings, ExtractionProposal } from '../../types';
import {
  AI_EXTRACTION_WARNING_FR,
  AiServiceError,
  type ExtractReportInput,
  createAiAdapter,
  normalizeExtractionProposal,
} from './adapter';

export async function extractReportWithAi(
  config: AppSettings['aiHelper'],
  input: ExtractReportInput,
  fetchImpl?: typeof fetch,
): Promise<ExtractionProposal> {
  const hasText = Boolean(input.text && input.text.trim().length > 0);
  const hasFile = Boolean(input.fileBase64 && input.fileBase64.trim().length > 0);

  if (!hasText && !hasFile) {
    throw new AiServiceError(
      'EMPTY_INPUT',
      "Veuillez fournir le texte ou un fichier de votre compte-rendu avant de lancer l'extraction.",
    );
  }

  const adapter = createAiAdapter(config, fetchImpl);
  const proposal = await adapter.extractFromTextOrFile(input);
  const normalized = normalizeExtractionProposal(proposal);

  if (!normalized.warningsFr.includes(AI_EXTRACTION_WARNING_FR)) {
    normalized.warningsFr.unshift(AI_EXTRACTION_WARNING_FR);
  }

  return normalized;
}
