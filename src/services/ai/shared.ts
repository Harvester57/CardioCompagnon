import type { ExtractionProposal, WikiQaResponse } from '../../types';

export type AiServiceErrorCode =
  | 'AI_DISABLED'
  | 'MISSING_CONFIG'
  | 'EMPTY_INPUT'
  | 'UNSUPPORTED_FILE'
  | 'NETWORK_ERROR'
  | 'PROVIDER_ERROR'
  | 'INVALID_RESPONSE';

export class AiServiceError extends Error {
  readonly code: AiServiceErrorCode;
  readonly status?: number;

  constructor(
    code: AiServiceErrorCode,
    message: string,
    options?: ErrorOptions & { status?: number },
  ) {
    super(message, options);
    this.name = 'AiServiceError';
    this.code = code;
    this.status = options?.status;
  }
}

export interface ExtractReportInput {
  text?: string;
  fileBase64?: string;
  mimeType?: string;
}

export interface WikiContextSnippet {
  slug: string;
  titleFr: string;
  excerptFr: string;
}

export const AI_MEDICAL_DISCLAIMER_FR =
  "Information générée à titre documentaire uniquement à partir des extraits de la bibliothèque scientifique locale. Elle ne constitue ni un diagnostic, ni une prescription, et ne doit jamais vous conduire à arrêter ou modifier un traitement sans l'avis de votre médecin ou cardiologue. En cas d'urgence, appelez le 15 (SAMU), le 112 ou le 114 par SMS.";

export const AI_EXTRACTION_WARNING_FR =
  "Vérification humaine obligatoire : veuillez relire et confirmer chaque valeur (chiffres, unités et dates) sur votre compte-rendu original avant de l'enregistrer.";

export const AI_PRIVACY_REMINDER_FR =
  "Avant d'envoyer un document vers un fournisseur externe, veillez à masquer votre nom, votre prénom, votre adresse et votre numéro de sécurité sociale (NIR).";

export const EXTRACTION_SYSTEM_PROMPT_FR = [
  'Vous êtes un assistant strictement limité à la transcription structurée de comptes-rendus médicaux en français (biologie, imagerie cardiaque ETT ou IRM, ordonnance de médicaments).',
  'Règles absolues :',
  "1. Vous ne posez AUCUN diagnostic, ne prescrivez AUCUN traitement et ne recommandez JAMAIS de modifier ou d'arrêter un médicament.",
  '2. Vous répondez EXCLUSIVEMENT par un objet JSON valide, sans texte autour ni balise Markdown.',
  '3. Schéma JSON strict attendu :',
  '{',
  '  "kind": "lab" | "imaging" | "medication",',
  '  "extractedFields": { ... },',
  '  "warningsFr": ["..."],',
  '  "rawModelNote": "note courte facultative en français avec vouvoiement"',
  '}',
  '4. Clés autorisées selon "kind" :',
  '- Pour "lab" : date (AAAA-MM-JJ), ntProBnpPgMl, bnpPgMl, creatinineUmolL, egfrMlMin, potassiumMmolL, sodiumMmolL, ferritinUgL, tsatPercent, ldlGL (en g/L), lpaValue, lpaUnit ("nmol/L" ou "mg/dL"), haemoglobinGDl, hba1cPercent, tshMiuL, digoxinNgMl, notes.',
  '- Pour "imaging" : date (AAAA-MM-JJ), modality ("ett" ou "irm"), lvefPercent, lveddMm, lvedviMlM2, lvesviMlM2, lgeScarPresent (booléen), lgeScarPercent, lgePattern ("subendocardial_transmural"|"midwall"|"epicardial"|"mixed"|"none"), aorticValveAreaCm2, aorticMeanGradientMmHg, strokeVolumeIndexMlM2, mitralRegurgitation ("none"|"mild"|"moderate"|"severe"), lvThrombus ("absent"|"present"|"uncertain"), notes.',
  '- Pour "medication" : pillar, subClass, innName, frenchBrand, doseLabel, status, startedAt, notes.',
  '5. N\'inventez JAMAIS une valeur absente ou illisible : omettez le champ et ajoutez un avertissement explicite dans "warningsFr" (en français, avec vouvoiement, sans emoji).',
  '6. Si une unité a été convertie (par exemple LDL de mmol/L vers g/L ou créatinine de mg/L vers µmol/L), signalez-le dans "warningsFr".',
].join('\n');

export const WIKI_QA_SYSTEM_PROMPT_FR = [
  'Vous êtes un assistant documentaire médical répondant en français idiomatique avec vouvoiement, ton calme et factuel, sans aucun emoji.',
  'Règles absolues :',
  '1. Appuyez-vous EXCLUSIVEMENT sur les extraits de la bibliothèque scientifique fournis dans le message utilisateur.',
  "2. Ne posez JAMAIS de diagnostic personnel, ne prescrivez JAMAIS de traitement et ne conseillez JAMAIS d'arrêter ou de modifier une dose sans avis médical.",
  '3. Citez obligatoirement les identifiants exacts ("slug") des extraits utilisés. Ne citez JAMAIS un slug absent de la liste fournie.',
  "4. Si les extraits fournis ne permettent pas de répondre à la question, dites-le clairement en invitant l'utilisateur à en parler avec son cardiologue ou son médecin traitant.",
  '5. Répondez EXCLUSIVEMENT par un objet JSON valide au format strict :',
  '{',
  '  "answerFr": "réponse claire en français avec vouvoiement",',
  '  "citedSlugs": ["slug-1", "slug-2"]',
  '}',
].join('\n');

const NUMERIC_EXTRACTION_KEYS = new Set([
  'ntProBnpPgMl',
  'bnpPgMl',
  'creatinineUmolL',
  'egfrMlMin',
  'potassiumMmolL',
  'sodiumMmolL',
  'ferritinUgL',
  'tsatPercent',
  'ldlGL',
  'lpaValue',
  'haemoglobinGDl',
  'hba1cPercent',
  'tshMiuL',
  'digoxinNgMl',
  'lvefPercent',
  'lveddMm',
  'lvedviMlM2',
  'lvesviMlM2',
  'lgeScarPercent',
  'aorticValveAreaCm2',
  'aorticMeanGradientMmHg',
  'strokeVolumeIndexMlM2',
  'dosePercentOfTarget',
]);

const VALID_EXTRACTION_KINDS = new Set<ExtractionProposal['kind']>([
  'lab',
  'imaging',
  'medication',
]);

export function resolveFetch(fetchImpl?: typeof fetch): typeof fetch {
  const fn = fetchImpl ?? globalThis.fetch;
  if (typeof fn !== 'function') {
    throw new AiServiceError(
      'NETWORK_ERROR',
      "La fonction fetch n'est pas disponible dans cet environnement.",
    );
  }
  return fn;
}

export function isLocalhostUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname === 'localhost' ||
      parsed.hostname === '127.0.0.1' ||
      parsed.hostname === '[::1]'
    );
  } catch {
    return false;
  }
}

export function stripBase64DataUrlPrefix(base64: string): string {
  const trimmed = base64.trim();
  const match = /^data:[^;]+;base64,(.*)$/i.exec(trimmed);
  return match ? match[1] : trimmed;
}

export function buildExtractionUserPromptFr(input: ExtractReportInput): string {
  const parts: string[] = [
    'Extrayez les données structurées du document clinique suivant au format JSON strict demandé.',
  ];
  if (input.mimeType) {
    parts.push(`Type de fichier fourni : ${input.mimeType}.`);
  }
  if (input.text && input.text.trim().length > 0) {
    parts.push(`Texte du compte-rendu :\n${input.text.trim()}`);
  } else if (input.fileBase64) {
    parts.push('Analysez la pièce jointe fournie et extrayez uniquement les champs lisibles.');
  }
  return parts.join('\n\n');
}

export function buildWikiQaUserPromptFr(
  questionFr: string,
  contextSnippets: WikiContextSnippet[],
): string {
  const formattedSnippets = contextSnippets
    .map(
      (snippet, idx) =>
        `[Extrait ${idx + 1}] slug="${snippet.slug}" | titre="${snippet.titleFr}"\n${snippet.excerptFr}`,
    )
    .join('\n\n---\n\n');

  return [
    `Question de l'utilisateur : ${questionFr.trim()}`,
    'Extraits autorisés de la bibliothèque scientifique locale :',
    formattedSnippets,
    'Répondez uniquement en JSON strict {"answerFr": "...", "citedSlugs": [...]} en vous appuyant exclusivement sur ces extraits.',
  ].join('\n\n');
}

export function extractJsonObjectFromText(rawText: string): unknown {
  const trimmed = rawText.trim();
  if (trimmed.length === 0) {
    throw new AiServiceError(
      'INVALID_RESPONSE',
      'Le modèle IA a retourné une réponse vide.',
    );
  }

  try {
    return JSON.parse(trimmed);
  } catch {
    // Continue with fenced block or embedded JSON object extraction.
  }

  const fenceMatch = /```(?:json)?\s*([\s\S]*?)```/i.exec(trimmed);
  if (fenceMatch && fenceMatch[1]) {
    try {
      return JSON.parse(fenceMatch[1].trim());
    } catch {
      // Fall through to balanced brace scan.
    }
  }

  const firstBrace = trimmed.indexOf('{');
  const lastBrace = trimmed.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    const candidate = trimmed.slice(firstBrace, lastBrace + 1);
    try {
      return JSON.parse(candidate);
    } catch {
      // Fall through to error.
    }
  }

  throw new AiServiceError(
    'INVALID_RESPONSE',
    "Impossible d'interpréter la réponse du modèle IA au format JSON attendu.",
  );
}

function coerceFieldValue(
  key: string,
  value: unknown,
): string | number | boolean | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : undefined;
  }
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed.length === 0) {
      return undefined;
    }
    if (NUMERIC_EXTRACTION_KEYS.has(key)) {
      const normalizedNumber = trimmed.replace(/\s+/g, '').replace(',', '.');
      if (/^-?\d+(?:\.\d+)?$/.test(normalizedNumber)) {
        const parsed = Number(normalizedNumber);
        if (Number.isFinite(parsed)) {
          return parsed;
        }
      }
    }
    return trimmed;
  }
  return undefined;
}

export function normalizeExtractionProposal(raw: unknown): ExtractionProposal {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new AiServiceError(
      'INVALID_RESPONSE',
      "La proposition d'extraction IA n'est pas un objet JSON valide.",
    );
  }

  const obj = raw as Record<string, unknown>;
  const rawKind = obj.kind;
  if (
    typeof rawKind !== 'string' ||
    !VALID_EXTRACTION_KINDS.has(rawKind as ExtractionProposal['kind'])
  ) {
    throw new AiServiceError(
      'INVALID_RESPONSE',
      'Le type de document extrait (« kind ») est invalide ou manquant (attendu : lab, imaging ou medication).',
    );
  }

  const rawFields = obj.extractedFields;
  if (!rawFields || typeof rawFields !== 'object' || Array.isArray(rawFields)) {
    throw new AiServiceError(
      'INVALID_RESPONSE',
      'Le champ « extractedFields » est absent ou invalide dans la réponse IA.',
    );
  }

  const extractedFields: Record<string, string | number | boolean | undefined> = {};
  for (const [key, value] of Object.entries(rawFields as Record<string, unknown>)) {
    const coerced = coerceFieldValue(key, value);
    if (coerced !== undefined) {
      extractedFields[key] = coerced;
    }
  }

  const warningsSet = new Set<string>([AI_EXTRACTION_WARNING_FR]);
  if (Array.isArray(obj.warningsFr)) {
    for (const warning of obj.warningsFr) {
      if (typeof warning === 'string' && warning.trim().length > 0) {
        warningsSet.add(warning.trim());
      }
    }
  }

  if (Object.keys(extractedFields).length === 0) {
    warningsSet.add(
      "Aucun champ clinique exploitable n'a pu être extrait automatiquement. Veuillez saisir vos données manuellement.",
    );
  }

  const rawModelNote =
    typeof obj.rawModelNote === 'string' && obj.rawModelNote.trim().length > 0
      ? obj.rawModelNote.trim()
      : undefined;

  return {
    kind: rawKind as ExtractionProposal['kind'],
    extractedFields,
    warningsFr: Array.from(warningsSet),
    ...(rawModelNote !== undefined ? { rawModelNote } : {}),
  };
}

export function normalizeWikiQaResponse(
  raw: unknown,
  allowedSnippets: WikiContextSnippet[],
): WikiQaResponse {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    throw new AiServiceError(
      'INVALID_RESPONSE',
      "La réponse Q&A du modèle IA n'est pas un objet JSON valide.",
    );
  }

  const obj = raw as Record<string, unknown>;
  const answerFr = typeof obj.answerFr === 'string' ? obj.answerFr.trim() : '';
  if (answerFr.length === 0) {
    throw new AiServiceError(
      'INVALID_RESPONSE',
      'La réponse Q&A du modèle IA ne contient pas de texte exploitable.',
    );
  }

  const allowedBySlug = new Map<string, WikiContextSnippet>(
    allowedSnippets.map((snippet) => [snippet.slug, snippet]),
  );

  const requestedSlugs: string[] = [];
  if (Array.isArray(obj.citedSlugs)) {
    for (const entry of obj.citedSlugs) {
      if (typeof entry === 'string') {
        requestedSlugs.push(entry.trim());
      }
    }
  } else if (Array.isArray(obj.citedArticles)) {
    for (const entry of obj.citedArticles) {
      if (entry && typeof entry === 'object' && typeof (entry as { slug?: unknown }).slug === 'string') {
        requestedSlugs.push(((entry as { slug: string }).slug).trim());
      }
    }
  }

  const seenSlugs = new Set<string>();
  const citedArticles: { slug: string; titleFr: string }[] = [];

  for (const slug of requestedSlugs) {
    if (seenSlugs.has(slug)) {
      continue;
    }
    const matched = allowedBySlug.get(slug);
    if (matched) {
      seenSlugs.add(slug);
      citedArticles.push({ slug: matched.slug, titleFr: matched.titleFr });
    }
  }

  return {
    answerFr,
    citedArticles,
    disclaimerFr: AI_MEDICAL_DISCLAIMER_FR,
  };
}
