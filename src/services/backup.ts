import { type CardioDatabase, createDefaultProfile } from '../db';
import type {
  BackupEnvelope,
  CardiacDeviceType,
  ClinicalEvent,
  ClinicalEventType,
  DailyLog,
  DoseChangeEvent,
  FrenchAdminItemId,
  FrenchAdminProgress,
  ImagingExam,
  LabResult,
  Medication,
  MedicationIntakeLog,
  MedicationPillar,
  PatientProfile,
  PlainBackupPayload,
  QuestionTracking,
  ScheduleSlot,
  SleepApnoeaStatus,
} from '../types';
import {
  type EncryptedJsonEnvelope,
  decryptJson,
  encryptJson,
} from './crypto';

export type PlainBackupEnvelope = Extract<
  BackupEnvelope,
  { format: 'cardio-compagnon-plain-v1' }
>;

export type EncryptedBackupEnvelope = EncryptedJsonEnvelope;

export interface BackupSummary {
  schemaVersion: 1;
  exportedAt: string;
  profileDisplayName?: string;
  counts: {
    dailyLogs: number;
    medications: number;
    doseChanges: number;
    intakeLogs: number;
    labs: number;
    imaging: number;
    events: number;
    questionTracking: number;
    adminProgress: number;
    totalRecords: number;
  };
}

export interface ParsedBackupResult {
  payload: PlainBackupPayload;
  encrypted: boolean;
  summary: BackupSummary;
}

export type BackupValidationErrorCode =
  | 'INVALID_JSON'
  | 'UNSUPPORTED_FORMAT'
  | 'PASSWORD_REQUIRED'
  | 'INVALID_SCHEMA';

export class BackupValidationError extends Error {
  readonly code: BackupValidationErrorCode;

  constructor(code: BackupValidationErrorCode, message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'BackupValidationError';
    this.code = code;
  }
}

const VALID_SEX = new Set(['M', 'F']);
const VALID_HF_STAGE = new Set(['B', 'C', 'unknown']);
const VALID_ISCHAEMIC = new Set(['yes', 'uncertain', 'mixed']);
const VALID_DRIVING_GROUP = new Set(['group1', 'group2', 'none']);
const VALID_SLEEP_APNOEA = new Set<SleepApnoeaStatus>(['none', 'osa', 'csa', 'suspected']);
const VALID_DEVICE = new Set<CardiacDeviceType>([
  'none',
  'icd_primary',
  'icd_secondary',
  'crt_p',
  'crt_d',
]);
const VALID_DYSPNOEA = new Set(['none', 'exertion', 'rest_or_lying']);
const VALID_OEDEMA = new Set(['none', 'mild', 'worsening']);
const VALID_FATIGUE = new Set(['none', 'moderate', 'severe']);
const VALID_PILLARS = new Set<MedicationPillar>([
  'raas_arni',
  'beta_blocker',
  'mra',
  'sglt2i',
  'loop_diuretic',
  'lipid_lowering',
  'antiplatelet',
  'anticoagulant',
  'addon_hf',
  'other',
]);
const VALID_MED_STATUS = new Set(['active', 'titrating', 'at_target', 'paused', 'stopped']);
const VALID_SLOTS = new Set<ScheduleSlot>(['matin', 'midi', 'soir', 'coucher']);
const VALID_MODALITIES = new Set(['ett', 'irm']);
const VALID_EVENT_TYPES = new Set<ClinicalEventType>([
  'mi',
  'pci_stent',
  'cabg',
  'hf_hospitalisation',
  'icd_implant',
  'icd_shock_appropriate',
  'icd_shock_inappropriate',
  'iv_iron_infusion',
  'ecg_check',
  'sleep_study',
  'vaccine_flu',
  'vaccine_pneumo',
  'consultation',
]);
const VALID_QUESTION_STATUS = new Set(['open', 'asked', 'resolved', 'not_applicable']);
const VALID_ADMIN_ITEM_IDS = new Set<FrenchAdminItemId>([
  'ald_5_13',
  'smr_rehab',
  'prado_ic',
  'telesurveillance_ic',
  'arret_travail_ij',
  'visite_pre_reprise',
  'temps_partiel_therapeutique',
  'rqth_mdph',
  'pension_invalidite',
  'emprunt_aeras_lemoine',
  'permis_medecin_agree',
  'vaccinations_ic',
]);
const VALID_ADMIN_STATUS = new Set(['todo', 'in_progress', 'done', 'not_applicable']);

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const MS_PER_DAY = 86_400_000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function assertCondition(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new BackupValidationError('INVALID_SCHEMA', message);
  }
}

function isIsoDateString(value: unknown): value is string {
  return typeof value === 'string' && ISO_DATE_PATTERN.test(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateProfile(rawProfile: unknown): PatientProfile {
  assertCondition(isRecord(rawProfile), 'Le profil patient est absent ou invalide.');
  assertCondition(
    rawProfile.id === 'active',
    "L'identifiant du profil patient doit valoir « active ».",
  );
  assertCondition(
    typeof rawProfile.sex === 'string' && VALID_SEX.has(rawProfile.sex),
    'Le sexe du profil patient doit être « M » ou « F ».',
  );
  assertCondition(
    typeof rawProfile.hfStage === 'string' && VALID_HF_STAGE.has(rawProfile.hfStage),
    "Le stade d'insuffisance cardiaque (hfStage) est invalide.",
  );
  assertCondition(
    rawProfile.nyhaClass === null ||
      rawProfile.nyhaClass === 1 ||
      rawProfile.nyhaClass === 2 ||
      rawProfile.nyhaClass === 3 ||
      rawProfile.nyhaClass === 4,
    'La classe NYHA du profil patient est invalide.',
  );
  assertCondition(
    typeof rawProfile.ischaemicCauseConfirmed === 'string' &&
      VALID_ISCHAEMIC.has(rawProfile.ischaemicCauseConfirmed),
    'Le champ ischaemicCauseConfirmed du profil patient est invalide.',
  );
  assertCondition(
    typeof rawProfile.drivingGroup === 'string' && VALID_DRIVING_GROUP.has(rawProfile.drivingGroup),
    'Le groupe de permis de conduire (drivingGroup) est invalide.',
  );
  assertCondition(
    isNonEmptyString(rawProfile.updatedAt) && !Number.isNaN(Date.parse(rawProfile.updatedAt)),
    'La date de mise à jour du profil patient (updatedAt) est invalide.',
  );

  assertCondition(
    isRecord(rawProfile.modules),
    'Les modules cliniques du profil patient sont absents ou invalides.',
  );
  const modules = rawProfile.modules;
  const booleanModuleKeys = [
    'hfImpEf',
    'cto',
    'aorticStenosis',
    'lvThrombusOrAneurysm',
    'atrialFibrillation',
    'ckd',
    'diabetes',
    'lifeVest',
  ] as const;

  for (const key of booleanModuleKeys) {
    assertCondition(
      typeof modules[key] === 'boolean',
      `Le module clinique « ${key} » doit être un booléen.`,
    );
  }
  assertCondition(
    typeof modules.sleepApnoea === 'string' &&
      VALID_SLEEP_APNOEA.has(modules.sleepApnoea as SleepApnoeaStatus),
    "Le statut d'apnée du sommeil (modules.sleepApnoea) est invalide.",
  );
  assertCondition(
    typeof modules.device === 'string' &&
      VALID_DEVICE.has(modules.device as CardiacDeviceType),
    'Le type de dispositif cardiaque (modules.device) est invalide.',
  );

  assertCondition(
    isRecord(rawProfile.careTeam),
    'La section careTeam du profil patient est absente ou invalide.',
  );

  return rawProfile as unknown as PatientProfile;
}

function validateArrayField<T>(
  raw: Record<string, unknown>,
  fieldName: string,
  itemValidator: (item: unknown, index: number) => T,
): T[] {
  const arr = raw[fieldName];
  assertCondition(
    Array.isArray(arr),
    `La collection « ${fieldName} » est absente ou n'est pas un tableau.`,
  );
  return arr.map((item, index) => itemValidator(item, index));
}

function validateDailyLog(item: unknown, index: number): DailyLog {
  assertCondition(isRecord(item), `Le relevé quotidien #${index + 1} est invalide.`);
  assertCondition(
    isIsoDateString(item.date),
    `La date du relevé quotidien #${index + 1} doit être au format AAAA-MM-JJ.`,
  );
  assertCondition(
    isNonEmptyString(item.createdAt),
    `Le champ createdAt du relevé quotidien #${index + 1} est manquant.`,
  );
  assertCondition(
    isRecord(item.symptoms),
    `Les symptômes du relevé quotidien #${index + 1} sont absents ou invalides.`,
  );
  const s = item.symptoms;
  assertCondition(
    typeof s.dyspnoea === 'string' && VALID_DYSPNOEA.has(s.dyspnoea),
    `La valeur dyspnoea du relevé quotidien #${index + 1} est invalide.`,
  );
  assertCondition(
    typeof s.oedema === 'string' && VALID_OEDEMA.has(s.oedema),
    `La valeur oedema du relevé quotidien #${index + 1} est invalide.`,
  );
  assertCondition(
    typeof s.fatigue === 'string' && VALID_FATIGUE.has(s.fatigue),
    `La valeur fatigue du relevé quotidien #${index + 1} est invalide.`,
  );
  for (const boolKey of [
    'dizziness',
    'palpitations',
    'chestPain',
    'persistentCough',
    'appetiteLoss',
  ] as const) {
    assertCondition(
      typeof s[boolKey] === 'boolean',
      `Le symptôme « ${boolKey} » du relevé quotidien #${index + 1} doit être un booléen.`,
    );
  }
  return item as unknown as DailyLog;
}

function validateMedication(item: unknown, index: number): Medication {
  assertCondition(isRecord(item), `Le médicament #${index + 1} est invalide.`);
  assertCondition(
    typeof item.pillar === 'string' && VALID_PILLARS.has(item.pillar as MedicationPillar),
    `La classe (pillar) du médicament #${index + 1} est invalide.`,
  );
  assertCondition(
    isNonEmptyString(item.innName),
    `La DCI (innName) du médicament #${index + 1} est manquante.`,
  );
  assertCondition(
    typeof item.doseLabel === 'string',
    `Le libellé de dose (doseLabel) du médicament #${index + 1} est invalide.`,
  );
  assertCondition(
    typeof item.status === 'string' && VALID_MED_STATUS.has(item.status),
    `Le statut du médicament #${index + 1} est invalide.`,
  );
  return item as unknown as Medication;
}

function validateDoseChange(item: unknown, index: number): DoseChangeEvent {
  assertCondition(isRecord(item), `L'événement de titration #${index + 1} est invalide.`);
  assertCondition(
    typeof item.medicationId === 'number' && Number.isFinite(item.medicationId),
    `L'identifiant medicationId de la titration #${index + 1} est invalide.`,
  );
  assertCondition(
    isIsoDateString(item.date),
    `La date de la titration #${index + 1} doit être au format AAAA-MM-JJ.`,
  );
  assertCondition(
    isNonEmptyString(item.newDoseLabel),
    `Le libellé newDoseLabel de la titration #${index + 1} est manquant.`,
  );
  return item as unknown as DoseChangeEvent;
}

function validateIntakeLog(item: unknown, index: number): MedicationIntakeLog {
  assertCondition(isRecord(item), `Le journal de prise #${index + 1} est invalide.`);
  assertCondition(
    isIsoDateString(item.date),
    `La date du journal de prise #${index + 1} doit être au format AAAA-MM-JJ.`,
  );
  assertCondition(
    typeof item.medicationId === 'number' && Number.isFinite(item.medicationId),
    `L'identifiant medicationId du journal de prise #${index + 1} est invalide.`,
  );
  assertCondition(
    typeof item.slot === 'string' && VALID_SLOTS.has(item.slot as ScheduleSlot),
    `Le créneau (slot) du journal de prise #${index + 1} est invalide.`,
  );
  assertCondition(
    typeof item.taken === 'boolean',
    `Le champ taken du journal de prise #${index + 1} doit être un booléen.`,
  );
  return item as unknown as MedicationIntakeLog;
}

function validateLabResult(item: unknown, index: number): LabResult {
  assertCondition(isRecord(item), `Le résultat biologique #${index + 1} est invalide.`);
  assertCondition(
    isIsoDateString(item.date),
    `La date du résultat biologique #${index + 1} doit être au format AAAA-MM-JJ.`,
  );
  return item as unknown as LabResult;
}

function validateImagingExam(item: unknown, index: number): ImagingExam {
  assertCondition(isRecord(item), `L'examen d'imagerie #${index + 1} est invalide.`);
  assertCondition(
    isIsoDateString(item.date),
    `La date de l'examen d'imagerie #${index + 1} doit être au format AAAA-MM-JJ.`,
  );
  assertCondition(
    typeof item.modality === 'string' && VALID_MODALITIES.has(item.modality),
    `La modalité de l'examen d'imagerie #${index + 1} doit être « ett » ou « irm ».`,
  );
  return item as unknown as ImagingExam;
}

function validateClinicalEvent(item: unknown, index: number): ClinicalEvent {
  assertCondition(isRecord(item), `L'événement clinique #${index + 1} est invalide.`);
  assertCondition(
    isIsoDateString(item.date),
    `La date de l'événement clinique #${index + 1} doit être au format AAAA-MM-JJ.`,
  );
  assertCondition(
    typeof item.type === 'string' && VALID_EVENT_TYPES.has(item.type as ClinicalEventType),
    `Le type de l'événement clinique #${index + 1} est invalide.`,
  );
  assertCondition(
    isRecord(item.details),
    `Le champ details de l'événement clinique #${index + 1} doit être un objet.`,
  );
  return item as unknown as ClinicalEvent;
}

function validateQuestionTracking(item: unknown, index: number): QuestionTracking {
  assertCondition(isRecord(item), `Le suivi de question #${index + 1} est invalide.`);
  assertCondition(
    isNonEmptyString(item.questionId),
    `L'identifiant questionId du suivi #${index + 1} est manquant.`,
  );
  assertCondition(
    typeof item.selectedForNextVisit === 'boolean',
    `Le champ selectedForNextVisit du suivi #${index + 1} doit être un booléen.`,
  );
  assertCondition(
    typeof item.status === 'string' && VALID_QUESTION_STATUS.has(item.status),
    `Le statut du suivi de question #${index + 1} est invalide.`,
  );
  return item as unknown as QuestionTracking;
}

function validateAdminProgress(item: unknown, index: number): FrenchAdminProgress {
  assertCondition(isRecord(item), `La démarche administrative #${index + 1} est invalide.`);
  assertCondition(
    typeof item.itemId === 'string' && VALID_ADMIN_ITEM_IDS.has(item.itemId as FrenchAdminItemId),
    `L'identifiant de démarche « ${String(item.itemId)} » (#${index + 1}) est inconnu.`,
  );
  assertCondition(
    typeof item.status === 'string' && VALID_ADMIN_STATUS.has(item.status),
    `Le statut de la démarche #${index + 1} est invalide.`,
  );
  return item as unknown as FrenchAdminProgress;
}

export function validatePlainBackupPayload(raw: unknown): PlainBackupPayload {
  assertCondition(
    isRecord(raw),
    'Le contenu de la sauvegarde est invalide : un objet JSON est attendu.',
  );
  assertCondition(
    raw.schemaVersion === 1,
    `Version de schéma non prise en charge (${String(raw.schemaVersion)}). Seule la version 1 est prise en charge.`,
  );
  assertCondition(
    isNonEmptyString(raw.exportedAt) && !Number.isNaN(Date.parse(raw.exportedAt)),
    "La date d'exportation (exportedAt) est absente ou invalide.",
  );

  const profile = validateProfile(raw.profile);
  const dailyLogs = validateArrayField(raw, 'dailyLogs', validateDailyLog);
  const medications = validateArrayField(raw, 'medications', validateMedication);
  const doseChanges = validateArrayField(raw, 'doseChanges', validateDoseChange);
  const intakeLogs = validateArrayField(raw, 'intakeLogs', validateIntakeLog);
  const labs = validateArrayField(raw, 'labs', validateLabResult);
  const imaging = validateArrayField(raw, 'imaging', validateImagingExam);
  const events = validateArrayField(raw, 'events', validateClinicalEvent);
  const questionTracking = validateArrayField(raw, 'questionTracking', validateQuestionTracking);
  const adminProgress = validateArrayField(raw, 'adminProgress', validateAdminProgress);

  return {
    schemaVersion: 1,
    exportedAt: raw.exportedAt,
    profile,
    dailyLogs,
    medications,
    doseChanges,
    intakeLogs,
    labs,
    imaging,
    events,
    questionTracking,
    adminProgress,
  };
}

export function summarizeBackupPayload(payload: PlainBackupPayload): BackupSummary {
  const counts = {
    dailyLogs: payload.dailyLogs.length,
    medications: payload.medications.length,
    doseChanges: payload.doseChanges.length,
    intakeLogs: payload.intakeLogs.length,
    labs: payload.labs.length,
    imaging: payload.imaging.length,
    events: payload.events.length,
    questionTracking: payload.questionTracking.length,
    adminProgress: payload.adminProgress.length,
    totalRecords:
      1 +
      payload.dailyLogs.length +
      payload.medications.length +
      payload.doseChanges.length +
      payload.intakeLogs.length +
      payload.labs.length +
      payload.imaging.length +
      payload.events.length +
      payload.questionTracking.length +
      payload.adminProgress.length,
  };

  return {
    schemaVersion: payload.schemaVersion,
    exportedAt: payload.exportedAt,
    profileDisplayName: payload.profile.displayName,
    counts,
  };
}

/**
 * Exports all patient data from Dexie while strictly excluding `settings`
 * (and therefore any BYOK API key, PIN hash or PIN salt).
 */
export async function exportDatabasePayload(db: CardioDatabase): Promise<PlainBackupPayload> {
  const exportedAt = new Date().toISOString();

  const [
    profileRow,
    dailyLogs,
    medications,
    doseChanges,
    intakeLogs,
    labs,
    imaging,
    events,
    questionTracking,
    adminProgress,
  ] = await Promise.all([
    db.profile.get('active'),
    db.dailyLogs.toArray(),
    db.medications.toArray(),
    db.doseChanges.toArray(),
    db.intakeLogs.toArray(),
    db.labs.toArray(),
    db.imaging.toArray(),
    db.events.toArray(),
    db.questionTracking.toArray(),
    db.adminProgress.toArray(),
  ]);

  return {
    schemaVersion: 1,
    exportedAt,
    profile: profileRow ?? createDefaultProfile(exportedAt),
    dailyLogs,
    medications,
    doseChanges,
    intakeLogs,
    labs,
    imaging,
    events,
    questionTracking,
    adminProgress,
  };
}

export async function createPlainBackupEnvelope(db: CardioDatabase): Promise<PlainBackupEnvelope> {
  const payload = await exportDatabasePayload(db);
  return {
    format: 'cardio-compagnon-plain-v1',
    payload,
  };
}

export async function createEncryptedBackupEnvelope(
  db: CardioDatabase,
  password: string,
): Promise<EncryptedBackupEnvelope> {
  const payload = await exportDatabasePayload(db);
  return encryptJson(payload, password);
}

export async function parseBackupEnvelope(
  jsonString: string,
  password?: string,
): Promise<ParsedBackupResult> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonString);
  } catch (error) {
    throw new BackupValidationError(
      'INVALID_JSON',
      "Le fichier sélectionné n'est pas un fichier JSON valide.",
      { cause: error },
    );
  }

  if (!isRecord(parsed) || typeof parsed.format !== 'string') {
    throw new BackupValidationError(
      'UNSUPPORTED_FORMAT',
      'Format de sauvegarde non reconnu. Veuillez sélectionner un fichier .cardio.json ou .cardio.enc.json.',
    );
  }

  if (parsed.format === 'cardio-compagnon-plain-v1') {
    const payload = validatePlainBackupPayload(parsed.payload);
    return {
      payload,
      encrypted: false,
      summary: summarizeBackupPayload(payload),
    };
  }

  if (parsed.format === 'cardio-compagnon-enc-v1') {
    if (typeof password !== 'string' || password.length === 0) {
      throw new BackupValidationError(
        'PASSWORD_REQUIRED',
        "Cette sauvegarde est chiffrée. Veuillez saisir votre mot de passe pour l'ouvrir.",
      );
    }

    const decrypted = await decryptJson<unknown>(
      parsed as unknown as EncryptedJsonEnvelope,
      password,
    );
    const payload = validatePlainBackupPayload(decrypted);
    return {
      payload,
      encrypted: true,
      summary: summarizeBackupPayload(payload),
    };
  }

  throw new BackupValidationError(
    'UNSUPPORTED_FORMAT',
    `Format de sauvegarde inconnu : « ${parsed.format} ».`,
  );
}

/**
 * Replaces all patient tables atomically inside a single Dexie transaction
 * while strictly preserving the local `settings` table.
 */
export async function restoreBackupToDatabase(
  db: CardioDatabase,
  payload: PlainBackupPayload,
): Promise<void> {
  const validated = validatePlainBackupPayload(payload);

  await db.transaction(
    'rw',
    [
      db.profile,
      db.dailyLogs,
      db.medications,
      db.doseChanges,
      db.intakeLogs,
      db.labs,
      db.imaging,
      db.events,
      db.questionTracking,
      db.adminProgress,
    ],
    async () => {
      await Promise.all([
        db.profile.clear(),
        db.dailyLogs.clear(),
        db.medications.clear(),
        db.doseChanges.clear(),
        db.intakeLogs.clear(),
        db.labs.clear(),
        db.imaging.clear(),
        db.events.clear(),
        db.questionTracking.clear(),
        db.adminProgress.clear(),
      ]);

      await db.profile.put(validated.profile);

      if (validated.dailyLogs.length > 0) {
        await db.dailyLogs.bulkAdd(validated.dailyLogs);
      }
      if (validated.medications.length > 0) {
        await db.medications.bulkPut(validated.medications);
      }
      if (validated.doseChanges.length > 0) {
        await db.doseChanges.bulkPut(validated.doseChanges);
      }
      if (validated.intakeLogs.length > 0) {
        await db.intakeLogs.bulkPut(validated.intakeLogs);
      }
      if (validated.labs.length > 0) {
        await db.labs.bulkPut(validated.labs);
      }
      if (validated.imaging.length > 0) {
        await db.imaging.bulkPut(validated.imaging);
      }
      if (validated.events.length > 0) {
        await db.events.bulkPut(validated.events);
      }
      if (validated.questionTracking.length > 0) {
        await db.questionTracking.bulkPut(validated.questionTracking);
      }
      if (validated.adminProgress.length > 0) {
        await db.adminProgress.bulkPut(validated.adminProgress);
      }
    },
  );
}

function parseDateToUtcMs(input: string | Date): number {
  if (input instanceof Date) {
    return input.getTime();
  }
  const trimmed = input.trim();
  if (ISO_DATE_PATTERN.test(trimmed)) {
    return Date.parse(`${trimmed}T00:00:00.000Z`);
  }
  return Date.parse(trimmed);
}

/**
 * Returns true if no backup has ever been recorded or if elapsed time since
 * `lastBackupAt` exceeds `thresholdDays` (default: 14 days).
 */
export function isBackupOverdue(
  lastBackupAt: string | undefined | null,
  referenceDate: string | Date,
  thresholdDays = 14,
): boolean {
  if (!lastBackupAt || typeof lastBackupAt !== 'string') {
    return true;
  }

  const lastMs = parseDateToUtcMs(lastBackupAt);
  const refMs = parseDateToUtcMs(referenceDate);

  if (Number.isNaN(lastMs) || Number.isNaN(refMs)) {
    return true;
  }

  const elapsedDays = (refMs - lastMs) / MS_PER_DAY;
  return elapsedDays > thresholdDays;
}
