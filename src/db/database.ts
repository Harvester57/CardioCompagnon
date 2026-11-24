import Dexie, { type Table } from 'dexie';
import type {
  AppSettings,
  ClinicalEvent,
  DailyLog,
  DoseChangeEvent,
  FrenchAdminItemId,
  FrenchAdminProgress,
  ImagingExam,
  LabResult,
  Medication,
  MedicationIntakeLog,
  NotificationSettings,
  PatientProfile,
  QuestionTracking,
} from '../types';

export const ACTIVE_DB_NAME = 'CardioCompagnonDB';
export const DEMO_DB_NAME = 'CardioCompagnonDemoDB';

export class CardioDatabase extends Dexie {
  profile!: Table<PatientProfile, 'active'>;
  dailyLogs!: Table<DailyLog, number>;
  medications!: Table<Medication, number>;
  doseChanges!: Table<DoseChangeEvent, number>;
  intakeLogs!: Table<MedicationIntakeLog, number>;
  labs!: Table<LabResult, number>;
  imaging!: Table<ImagingExam, number>;
  events!: Table<ClinicalEvent, number>;
  questionTracking!: Table<QuestionTracking, string>;
  adminProgress!: Table<FrenchAdminProgress, FrenchAdminItemId>;
  settings!: Table<AppSettings, 'settings'>;

  constructor(name: string) {
    super(name);
    this.version(1).stores({
      profile: 'id',
      dailyLogs: '++id, &date',
      medications: '++id, pillar, status',
      doseChanges: '++id, medicationId, date',
      intakeLogs: '++id, date, medicationId, [date+medicationId+slot]',
      labs: '++id, date',
      imaging: '++id, date, modality',
      events: '++id, date, type',
      questionTracking: '&questionId, status, selectedForNextVisit',
      adminProgress: '&itemId, status',
      settings: 'id',
    });
  }
}

export const activeDb = new CardioDatabase(ACTIVE_DB_NAME);
export const demoDb = new CardioDatabase(DEMO_DB_NAME);

export function createDefaultProfile(nowIso = new Date().toISOString()): PatientProfile {
  return {
    id: 'active',
    displayName: 'Mon profil',
    sex: 'M',
    hfStage: 'unknown',
    nyhaClass: null,
    ischaemicCauseConfirmed: 'uncertain',
    fluidLimitMl: null,
    saltTargetG: 5,
    drivingGroup: 'group1',
    onExtendedSickLeave: false,
    modules: {
      hfImpEf: false,
      cto: false,
      aorticStenosis: false,
      lvThrombusOrAneurysm: false,
      atrialFibrillation: false,
      ckd: false,
      diabetes: false,
      sleepApnoea: 'none',
      lifeVest: false,
      device: 'none',
    },
    careTeam: {},
    updatedAt: nowIso,
  };
}

export function createDefaultNotificationSettings(): NotificationSettings {
  return {
    enabled: false,
    reminders: {
      weight: { enabled: true, time: '07:30' },
      dailyCheckup: { enabled: true, time: '09:00' },
      medicationMorning: { enabled: false, time: '08:00' },
      medicationEvening: { enabled: false, time: '20:00' },
    },
  };
}

export function createDefaultSettings(): AppSettings {
  return {
    id: 'settings',
    theme: 'system',
    largeTextMode: false,
    enableDailyPillCheckin: false,
    notifications: createDefaultNotificationSettings(),
    aiHelper: {
      enabled: false,
      provider: 'gemini',
    },
  };
}

export function normalizeAppSettings(raw?: Partial<AppSettings> | null): AppSettings {
  const defaults = createDefaultSettings();
  if (!raw) {
    return defaults;
  }

  const rawNotifications = raw.notifications;
  const rawReminders = rawNotifications?.reminders;

  return {
    ...defaults,
    ...raw,
    id: 'settings',
    notifications: {
      enabled: rawNotifications?.enabled ?? defaults.notifications.enabled,
      reminders: {
        weight: {
          ...defaults.notifications.reminders.weight,
          ...(rawReminders?.weight ?? {}),
        },
        dailyCheckup: {
          ...defaults.notifications.reminders.dailyCheckup,
          ...(rawReminders?.dailyCheckup ?? {}),
        },
        medicationMorning: {
          ...defaults.notifications.reminders.medicationMorning,
          ...(rawReminders?.medicationMorning ?? {}),
        },
        medicationEvening: {
          ...defaults.notifications.reminders.medicationEvening,
          ...(rawReminders?.medicationEvening ?? {}),
        },
      },
    },
    aiHelper: {
      ...defaults.aiHelper,
      ...(raw.aiHelper ?? {}),
    },
  };
}

export async function ensureDbInitialized(db: CardioDatabase): Promise<void> {
  await db.transaction('rw', [db.profile, db.settings], async () => {
    const existingProfile = await db.profile.get('active');
    if (!existingProfile) {
      await db.profile.put(createDefaultProfile());
    }
    const existingSettings = await db.settings.get('settings');
    if (!existingSettings) {
      await db.settings.put(createDefaultSettings());
    }
  });
}
