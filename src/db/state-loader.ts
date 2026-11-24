import type {
  AppSettings,
  DailyLog,
  FrenchAdminProgress,
  PatientProfile,
  PatientState,
  QuestionTracking,
  ReminderScheduleItem,
  ReminderType,
} from '../types';

export interface NotificationSettingsPatch {
  enabled?: boolean;
  reminders?: Partial<Record<ReminderType, Partial<ReminderScheduleItem>>>;
}

export type AppSettingsPatch = Partial<
  Omit<AppSettings, 'id' | 'notifications' | 'aiHelper'>
> & {
  notifications?: NotificationSettingsPatch;
  aiHelper?: Partial<AppSettings['aiHelper']>;
};
import {
  type CardioDatabase,
  createDefaultProfile,
  normalizeAppSettings,
} from './database';

export function getTodayIsoDate(now = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function compareByDateAsc<T extends { date: string; id?: number }>(a: T, b: T): number {
  const dateCompare = a.date.localeCompare(b.date);
  if (dateCompare !== 0) {
    return dateCompare;
  }
  return (a.id ?? 0) - (b.id ?? 0);
}

export async function loadPatientState(
  db: CardioDatabase,
  referenceDate: string = getTodayIsoDate(),
): Promise<PatientState> {
  const [
    profileRow,
    dailyLogs,
    medications,
    doseChanges,
    labs,
    imaging,
    events,
    adminProgress,
  ] = await Promise.all([
    db.profile.get('active'),
    db.dailyLogs.toArray(),
    db.medications.toArray(),
    db.doseChanges.toArray(),
    db.labs.toArray(),
    db.imaging.toArray(),
    db.events.toArray(),
    db.adminProgress.toArray(),
  ]);

  const profile = profileRow ?? createDefaultProfile();

  return {
    profile,
    dailyLogs: [...dailyLogs].sort(compareByDateAsc),
    medications,
    doseChanges: [...doseChanges].sort(compareByDateAsc),
    labs: [...labs].sort(compareByDateAsc),
    imaging: [...imaging].sort(compareByDateAsc),
    events: [...events].sort(compareByDateAsc),
    adminProgress,
    referenceDate,
  };
}

export async function saveProfile(
  db: CardioDatabase,
  patch: Partial<Omit<PatientProfile, 'id'>>,
): Promise<PatientProfile> {
  const existing = (await db.profile.get('active')) ?? createDefaultProfile();
  const next: PatientProfile = {
    ...existing,
    ...patch,
    modules: {
      ...existing.modules,
      ...(patch.modules ?? {}),
    },
    careTeam: {
      ...existing.careTeam,
      ...(patch.careTeam ?? {}),
    },
    id: 'active',
    updatedAt: new Date().toISOString(),
  };
  await db.profile.put(next);
  return next;
}

export async function saveAppSettings(
  db: CardioDatabase,
  patch: AppSettingsPatch,
): Promise<AppSettings> {
  return db.transaction('rw', db.settings, async () => {
    const existing = normalizeAppSettings(await db.settings.get('settings'));
    const next: AppSettings = {
      ...existing,
      ...patch,
      notifications: {
        enabled: patch.notifications?.enabled ?? existing.notifications.enabled,
        reminders: {
          weight: {
            ...existing.notifications.reminders.weight,
            ...(patch.notifications?.reminders?.weight ?? {}),
          },
          dailyCheckup: {
            ...existing.notifications.reminders.dailyCheckup,
            ...(patch.notifications?.reminders?.dailyCheckup ?? {}),
          },
          medicationMorning: {
            ...existing.notifications.reminders.medicationMorning,
            ...(patch.notifications?.reminders?.medicationMorning ?? {}),
          },
          medicationEvening: {
            ...existing.notifications.reminders.medicationEvening,
            ...(patch.notifications?.reminders?.medicationEvening ?? {}),
          },
        },
      },
      aiHelper: {
        ...existing.aiHelper,
        ...(patch.aiHelper ?? {}),
      },
      id: 'settings',
    };
    await db.settings.put(next);
    return next;
  });
}

export async function upsertDailyLog(
  db: CardioDatabase,
  log: Omit<DailyLog, 'id' | 'createdAt'> & { createdAt?: string },
): Promise<number> {
  const existing = await db.dailyLogs.where('date').equals(log.date).first();
  if (existing?.id !== undefined) {
    await db.dailyLogs.update(existing.id, {
      ...log,
      createdAt: existing.createdAt,
    });
    return existing.id;
  }
  return db.dailyLogs.add({
    ...log,
    createdAt: log.createdAt ?? new Date().toISOString(),
  });
}

export async function upsertAdminProgress(
  db: CardioDatabase,
  progress: FrenchAdminProgress,
): Promise<void> {
  await db.adminProgress.put(progress);
}

export async function upsertQuestionTracking(
  db: CardioDatabase,
  tracking: QuestionTracking,
): Promise<void> {
  await db.questionTracking.put(tracking);
}

export async function clearPatientData(db: CardioDatabase): Promise<void> {
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
      await db.profile.put(createDefaultProfile());
    },
  );
}
