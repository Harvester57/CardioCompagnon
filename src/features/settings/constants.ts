import {
  DEFAULT_GEMINI_BASE_URL,
  DEFAULT_GEMINI_MODEL,
  DEFAULT_MISTRAL_BASE_URL,
  DEFAULT_MISTRAL_MODEL,
  DEFAULT_OLLAMA_BASE_URL,
  DEFAULT_OLLAMA_MODEL,
  DEFAULT_OPENAI_BASE_URL,
  DEFAULT_OPENAI_MODEL,
} from '../../services';
import type {
  AppSettings,
  CardiacDeviceType,
  PatientProfile,
  SleepApnoeaStatus,
} from '../../types';

export type BooleanClinicalModuleKey =
  | 'hfImpEf'
  | 'cto'
  | 'aorticStenosis'
  | 'lvThrombusOrAneurysm'
  | 'atrialFibrillation'
  | 'ckd'
  | 'diabetes'
  | 'lifeVest';

export interface BooleanModuleOption {
  key: BooleanClinicalModuleKey;
  labelFr: string;
  effectFr: string;
}

export const BOOLEAN_CLINICAL_MODULES: readonly BooleanModuleOption[] = [
  {
    key: 'hfImpEf',
    labelFr: 'FEVG améliorée (HFimpEF, ≥ 40 % après ≤ 40 %)',
    effectFr:
      'Active le rappel ESC 2026 Classe I de poursuite des traitements de fond même après récupération de la FEVG.',
  },
  {
    key: 'cto',
    labelFr: 'Occlusion coronaire chronique (CTO)',
    effectFr:
      'Ajoute les questions dédiées sur la viabilité, l’ischémie, l’équipe pluridisciplinaire (Heart Team), les risques PROGRESS-CTO et les options de revascularisation.',
  },
  {
    key: 'aorticStenosis',
    labelFr: 'Rétrécissement aortique',
    effectFr:
      'Active le suivi de la surface valvulaire, du gradient moyen et du SVi, l’alerte bas débit et la surveillance annuelle.',
  },
  {
    key: 'lvThrombusOrAneurysm',
    labelFr: 'Thrombus VG ou anévrisme VG',
    effectFr:
      'Active le suivi de l’anticoagulation (3 à 6 mois) et le rappel d’imagerie de contrôle en distinguant ETT et IRM.',
  },
  {
    key: 'atrialFibrillation',
    labelFr: 'Fibrillation atriale (FA)',
    effectFr:
      'Intègre le score CHA2DS2-VA, la nuance d’interprétation du NT-proBNP (+50 à +100 %) et exclut l’ivabradine hors rythme sinusal.',
  },
  {
    key: 'ckd',
    labelFr: 'Maladie rénale chronique (DFGe < 60 mL/min)',
    effectFr:
      'Renforce le suivi créatinine, DFGe et potassium, adapte les seuils ARM/iSGLT2 et nuance l’interprétation du NT-proBNP.',
  },
  {
    key: 'diabetes',
    labelFr: 'Diabète',
    effectFr:
      'Ajoute le rappel sur l’acidocétose sous iSGLT2 en cas de maladie aiguë ou de jeûne, la vigilance sur les hypoglycémies sous bêtabloquant et la discussion autour de la finérénone en cas de MRC et de diabète de type 2.',
  },
  {
    key: 'lifeVest',
    labelFr: 'Gilet défibrillateur portable (LifeVest)',
    effectFr:
      'Active le suivi de durée de port, la réévaluation à 3-6 mois et l’alerte d’interdiction légale de conduire en France (Arrêté du 28 mars 2022, § 1.2.6).',
  },
] as const;

export const SLEEP_APNOEA_OPTIONS: readonly { value: SleepApnoeaStatus; labelFr: string }[] = [
  { value: 'none', labelFr: 'Aucune apnée du sommeil connue' },
  { value: 'osa', labelFr: 'Apnée obstructive du sommeil (SAOS)' },
  { value: 'csa', labelFr: 'Apnée centrale du sommeil (SACS)' },
  { value: 'suspected', labelFr: 'Suspectée / bilan du sommeil en cours' },
];

export const CARDIAC_DEVICE_OPTIONS: readonly { value: CardiacDeviceType; labelFr: string }[] = [
  { value: 'none', labelFr: 'Aucun dispositif implanté' },
  { value: 'icd_primary', labelFr: 'DAI en prévention primaire' },
  { value: 'icd_secondary', labelFr: 'DAI en prévention secondaire' },
  { value: 'crt_p', labelFr: 'CRT-P (resynchronisation seule)' },
  { value: 'crt_d', labelFr: 'CRT-D (resynchronisation + défibrillateur)' },
];

export type CareTeamKey = keyof PatientProfile['careTeam'];

export interface CareTeamRoleMeta {
  key: CareTeamKey;
  labelFr: string;
  namePlaceholder: string;
  centerLabelFr: string;
  centerPlaceholder: string;
}

export const CARE_TEAM_ROLES: readonly CareTeamRoleMeta[] = [
  {
    key: 'cardiologist',
    labelFr: 'Cardiologue',
    namePlaceholder: 'Ex. : Dr Claire Moreau',
    centerLabelFr: 'Service ou cabinet',
    centerPlaceholder: 'Ex. : Service de cardiologie — CHU',
  },
  {
    key: 'gp',
    labelFr: 'Médecin traitant',
    namePlaceholder: 'Ex. : Dr Laurent Bernard',
    centerLabelFr: 'Cabinet ou maison de santé',
    centerPlaceholder: 'Ex. : Maison de santé',
  },
  {
    key: 'hfNurse',
    labelFr: 'Infirmier ou infirmière insuffisance cardiaque / IPA',
    namePlaceholder: 'Ex. : Sophie Petit (IPA IC)',
    centerLabelFr: 'Unité ou réseau',
    centerPlaceholder: 'Ex. : Unité de suivi insuffisance cardiaque',
  },
  {
    key: 'pharmacist',
    labelFr: 'Pharmacien',
    namePlaceholder: 'Ex. : Pharmacie des Tilleuls',
    centerLabelFr: 'Officine / adresse',
    centerPlaceholder: 'Ex. : Quartier centre',
  },
  {
    key: 'trustedContact',
    labelFr: 'Personne de confiance',
    namePlaceholder: 'Ex. : Prénom et nom du proche',
    centerLabelFr: 'Lien ou précision',
    centerPlaceholder: 'Ex. : Conjoint, enfant, proche',
  },
];

export type AiProviderId = AppSettings['aiHelper']['provider'];

export interface AiProviderMeta {
  id: AiProviderId;
  labelFr: string;
  descriptionFr: string;
  defaultUrl: string;
  defaultModel: string;
  requiresApiKey: boolean;
}

export const AI_PROVIDERS: readonly AiProviderMeta[] = [
  {
    id: 'gemini',
    labelFr: 'Google Gemini',
    descriptionFr: 'Prend en charge le texte, les images et les PDF directement depuis le navigateur.',
    defaultUrl: DEFAULT_GEMINI_BASE_URL,
    defaultModel: DEFAULT_GEMINI_MODEL,
    requiresApiKey: true,
  },
  {
    id: 'mistral',
    labelFr: 'Mistral AI',
    descriptionFr: 'Fournisseur européen compatible OpenAI (texte et images).',
    defaultUrl: DEFAULT_MISTRAL_BASE_URL,
    defaultModel: DEFAULT_MISTRAL_MODEL,
    requiresApiKey: true,
  },
  {
    id: 'openai_compatible',
    labelFr: 'Serveur compatible OpenAI',
    descriptionFr: 'OpenAI ou tout serveur compatible /v1/chat/completions (cloud ou réseau local).',
    defaultUrl: DEFAULT_OPENAI_BASE_URL,
    defaultModel: DEFAULT_OPENAI_MODEL,
    requiresApiKey: true,
  },
  {
    id: 'ollama',
    labelFr: 'Ollama / LM Studio (local)',
    descriptionFr: 'Traitement 100 % local sur votre ordinateur ou réseau domestique, sans clé API.',
    defaultUrl: DEFAULT_OLLAMA_BASE_URL,
    defaultModel: DEFAULT_OLLAMA_MODEL,
    requiresApiKey: false,
  },
];

export const INPUT_CLASS =
  'w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/70 focus:border-[var(--color-primary)] focus:outline-none';

export const LABEL_CLASS = 'mb-1 block text-sm font-medium text-[var(--text-primary)]';

export const PRIMARY_BUTTON_CLASS =
  'touch-target inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60';

export const SECONDARY_BUTTON_CLASS =
  'touch-target inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-subtle)] disabled:cursor-not-allowed disabled:opacity-60';

export const DANGER_BUTTON_CLASS =
  'touch-target inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-4 py-2.5 text-sm font-semibold text-[var(--status-urgent-text)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60';

export function formatNumberFr(value: number | undefined | null): string {
  if (value === undefined || value === null || !Number.isFinite(value)) {
    return '';
  }
  return String(value).replace('.', ',');
}

export function parseOptionalDecimalFr(raw: string): { valid: boolean; value?: number } {
  const trimmed = raw.trim();
  if (trimmed.length === 0) {
    return { valid: true, value: undefined };
  }
  const normalized = trimmed.replace(/\s+/g, '').replace(',', '.');
  if (!/^\d+(?:\.\d+)?$/.test(normalized)) {
    return { valid: false };
  }
  const parsed = Number(normalized);
  if (!Number.isFinite(parsed)) {
    return { valid: false };
  }
  return { valid: true, value: parsed };
}

export function parseOptionalInteger(raw: string): { valid: boolean; value?: number } {
  const trimmed = raw.trim();
  if (trimmed.length === 0) {
    return { valid: true, value: undefined };
  }
  if (!/^\d+$/.test(trimmed)) {
    return { valid: false };
  }
  const parsed = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(parsed)) {
    return { valid: false };
  }
  return { valid: true, value: parsed };
}

export function formatIsoDateFr(iso: string | undefined): string {
  if (!iso) {
    return '';
  }
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) {
    return iso;
  }
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(parsed);
  } catch {
    return iso.slice(0, 10);
  }
}

export async function readFileAsText(file: File): Promise<string> {
  if (typeof file.text === 'function') {
    return file.text();
  }
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = () => reject(new Error('Impossible de lire le fichier sélectionné.'));
    reader.readAsText(file);
  });
}

export function triggerJsonFileDownload(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
