import type {
  ClinicalEvent,
  DailyLog,
  DoseChangeEvent,
  FrenchAdminProgress,
  ImagingExam,
  LabResult,
  Medication,
  MedicationIntakeLog,
  PatientProfile,
  QuestionTracking,
} from './domain';

export interface PlainBackupPayload {
  schemaVersion: 1;
  exportedAt: string;
  profile: PatientProfile;
  dailyLogs: DailyLog[];
  medications: Medication[];
  doseChanges: DoseChangeEvent[];
  intakeLogs: MedicationIntakeLog[];
  labs: LabResult[];
  imaging: ImagingExam[];
  events: ClinicalEvent[];
  questionTracking: QuestionTracking[];
  adminProgress: FrenchAdminProgress[];
}

export type BackupEnvelope =
  | { format: 'cardio-compagnon-plain-v1'; payload: PlainBackupPayload }
  | { format: 'cardio-compagnon-enc-v1'; kdf: 'PBKDF2-SHA256'; iterations: number; saltB64: string; ivB64: string; ciphertextB64: string };
