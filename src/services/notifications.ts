import { type CardioDatabase, getTodayIsoDate } from '../db';
import type {
  AppSettings,
  DailyLog,
  Medication,
  MedicationIntakeLog,
  NotificationSettings,
  ReminderType,
  ScheduleSlot,
} from '../types';

export type NotificationPermissionStatus = NotificationPermission | 'unsupported';

export interface ReminderDefinition {
  type: ReminderType;
  labelFr: string;
  descriptionFr: string;
  notificationTitle: string;
  notificationBody: string;
  defaultTime: string;
  targetHash: string;
}

export const REMINDER_DEFINITIONS: readonly ReminderDefinition[] = [
  {
    type: 'weight',
    labelFr: 'Pesée matinale',
    descriptionFr:
      'Rappel pour noter votre poids du matin (à jeun, après les toilettes). Ignoré si votre poids du jour est déjà saisi.',
    notificationTitle: 'CardioCompagnon — Pesée matinale',
    notificationBody:
      'Pensez à vous peser ce matin et à noter votre poids dans votre suivi quotidien.',
    defaultTime: '07:30',
    targetHash: '#/',
  },
  {
    type: 'dailyCheckup',
    labelFr: 'Bilan quotidien (tension, pouls, symptômes EPOF)',
    descriptionFr:
      'Rappel pour renseigner vos constantes et signes EPOF du jour. Ignoré si votre bilan du jour est déjà enregistré.',
    notificationTitle: 'CardioCompagnon — Bilan quotidien',
    notificationBody:
      'Prenez un instant pour compléter votre tension, votre fréquence cardiaque et vos symptômes EPOF du jour.',
    defaultTime: '09:00',
    targetHash: '#/',
  },
  {
    type: 'medicationMorning',
    labelFr: 'Prises médicamenteuses — matin',
    descriptionFr:
      'Rappel pour vos traitements du matin. Ignoré si toutes vos prises matinales sont déjà cochées.',
    notificationTitle: 'CardioCompagnon — Traitements du matin',
    notificationBody:
      'Pensez à prendre vos traitements du matin et à les cocher dans votre suivi quotidien.',
    defaultTime: '08:00',
    targetHash: '#/',
  },
  {
    type: 'medicationEvening',
    labelFr: 'Prises médicamenteuses — soir',
    descriptionFr:
      'Rappel pour vos traitements du soir et du coucher. Ignoré si toutes vos prises du soir sont déjà cochées.',
    notificationTitle: 'CardioCompagnon — Traitements du soir',
    notificationBody: 'Pensez à prendre vos traitements du soir ou du coucher.',
    defaultTime: '20:00',
    targetHash: '#/',
  },
] as const;

export const REMINDER_DEFINITION_MAP: Record<ReminderType, ReminderDefinition> = {
  weight: REMINDER_DEFINITIONS[0],
  dailyCheckup: REMINDER_DEFINITIONS[1],
  medicationMorning: REMINDER_DEFINITIONS[2],
  medicationEvening: REMINDER_DEFINITIONS[3],
};

export const NOTIFICATIONS_SENT_STORAGE_KEY = 'cardio_compagnon_notifications_sent_v1';

const TIME_HH_MM_PATTERN = /^([01]\d|2[0-3]):([0-5]\d)$/;

export function isValidReminderTime(value: string): boolean {
  return TIME_HH_MM_PATTERN.test(value.trim());
}

export function parseReminderTimeMinutes(value: string): number | null {
  const match = TIME_HH_MM_PATTERN.exec(value.trim());
  if (!match) {
    return null;
  }
  const hours = Number.parseInt(match[1], 10);
  const minutes = Number.parseInt(match[2], 10);
  return hours * 60 + minutes;
}

export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && typeof window.Notification === 'function';
}

export function getNotificationPermission(): NotificationPermissionStatus {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  return window.Notification.permission;
}

export async function requestNotificationPermission(): Promise<NotificationPermissionStatus> {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  if (window.Notification.permission === 'granted') {
    return 'granted';
  }
  if (window.Notification.permission === 'denied') {
    return 'denied';
  }
  try {
    return await window.Notification.requestPermission();
  } catch {
    return getNotificationPermission();
  }
}

export interface LocalNotificationPayload {
  title: string;
  body: string;
  tag: string;
  targetHash?: string;
}

export async function showLocalNotification(payload: LocalNotificationPayload): Promise<boolean> {
  if (getNotificationPermission() !== 'granted') {
    return false;
  }

  const targetHash = payload.targetHash ?? '#/';
  const options: NotificationOptions = {
    body: payload.body,
    icon: './pwa-192x192.png',
    badge: './pwa-192x192.png',
    tag: payload.tag,
    lang: 'fr-FR',
    data: { url: `./${targetHash}` },
  };

  if (
    typeof navigator !== 'undefined' &&
    typeof navigator.serviceWorker?.getRegistration === 'function'
  ) {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration?.active && typeof registration.showNotification === 'function') {
        await registration.showNotification(payload.title, options);
        return true;
      }
    } catch {
      // Repli sur l'API Notification directe ci-dessous
    }
  }

  try {
    const notification = new window.Notification(payload.title, options);
    notification.onclick = () => {
      if (typeof window !== 'undefined') {
        window.focus();
        if (targetHash && window.location.hash !== targetHash) {
          window.location.hash = targetHash;
        }
      }
      notification.close();
    };
    return true;
  } catch {
    return false;
  }
}

export async function sendTestNotification(): Promise<boolean> {
  return showLocalNotification({
    title: 'CardioCompagnon — Notification de test',
    body: 'Les rappels locaux sont bien actifs sur cet appareil. Vos données restent strictement privées et locales.',
    tag: 'cardio-compagnon-test-notification',
    targetHash: '#/settings',
  });
}

type SentRemindersStore = Record<string, Partial<Record<ReminderType, string>>>;

function readSentStore(): SentRemindersStore {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const raw = window.localStorage.getItem(NOTIFICATIONS_SENT_STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      return {};
    }
    return parsed as SentRemindersStore;
  } catch {
    return {};
  }
}

function writeSentStore(store: SentRemindersStore): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(NOTIFICATIONS_SENT_STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Stockage local indisponible (navigation privee stricte)
  }
}

export function readSentRemindersForDate(dateIso: string): Set<ReminderType> {
  const store = readSentStore();
  const entry = store[dateIso];
  if (!entry || typeof entry !== 'object') {
    return new Set<ReminderType>();
  }
  const sent = new Set<ReminderType>();
  for (const def of REMINDER_DEFINITIONS) {
    if (typeof entry[def.type] === 'string') {
      sent.add(def.type);
    }
  }
  return sent;
}

export function markReminderSent(
  dateIso: string,
  type: ReminderType,
  sentAtIso = new Date().toISOString(),
): void {
  const store = readSentStore();
  const todayEntry = {
    ...(store[dateIso] ?? {}),
    [type]: sentAtIso,
  };
  // Ne conserve que la journee en cours pour garder localStorage minimal
  writeSentStore({ [dateIso]: todayEntry });
}

export function clearSentReminders(): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.removeItem(NOTIFICATIONS_SENT_STORAGE_KEY);
  } catch {
    // Ignore
  }
}

function isMedicationActive(med: Medication): boolean {
  return med.status === 'active' || med.status === 'titrating' || med.status === 'at_target';
}

function areAllSlotIntakesCompleted(
  medications: readonly Medication[],
  todayIntakeLogs: readonly MedicationIntakeLog[],
  targetSlots: readonly ScheduleSlot[],
): boolean {
  const expectedKeys: string[] = [];
  for (const med of medications) {
    if (!isMedicationActive(med) || typeof med.id !== 'number') {
      continue;
    }
    const slots = med.scheduleSlots ?? [];
    for (const slot of targetSlots) {
      if (slots.includes(slot)) {
        expectedKeys.push(`${med.id}::${slot}`);
      }
    }
  }

  if (expectedKeys.length === 0) {
    return false;
  }

  const takenKeys = new Set<string>();
  for (const log of todayIntakeLogs) {
    if (log.taken) {
      takenKeys.add(`${log.medicationId}::${log.slot}`);
    }
  }

  return expectedKeys.every((key) => takenKeys.has(key));
}

function isReminderAlreadyFulfilledToday(
  type: ReminderType,
  todayLog: DailyLog | undefined,
  medications: readonly Medication[],
  todayIntakeLogs: readonly MedicationIntakeLog[],
): boolean {
  switch (type) {
    case 'weight':
      return typeof todayLog?.weightKg === 'number' && Number.isFinite(todayLog.weightKg);
    case 'dailyCheckup':
      return todayLog !== undefined;
    case 'medicationMorning':
      return areAllSlotIntakesCompleted(medications, todayIntakeLogs, ['matin']);
    case 'medicationEvening':
      return areAllSlotIntakesCompleted(medications, todayIntakeLogs, ['soir', 'coucher']);
  }
}

export interface EvaluateDueRemindersInput {
  notifications: NotificationSettings;
  now: Date;
  todayLog: DailyLog | undefined;
  medications: readonly Medication[];
  todayIntakeLogs: readonly MedicationIntakeLog[];
  alreadySent: ReadonlySet<ReminderType>;
}

export function evaluateDueReminders({
  notifications,
  now,
  todayLog,
  medications,
  todayIntakeLogs,
  alreadySent,
}: EvaluateDueRemindersInput): ReminderDefinition[] {
  if (!notifications.enabled) {
    return [];
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const due: ReminderDefinition[] = [];

  for (const def of REMINDER_DEFINITIONS) {
    const schedule = notifications.reminders[def.type];
    if (!schedule?.enabled) {
      continue;
    }
    if (alreadySent.has(def.type)) {
      continue;
    }
    const scheduledMinutes = parseReminderTimeMinutes(schedule.time);
    if (scheduledMinutes === null || currentMinutes < scheduledMinutes) {
      continue;
    }
    if (isReminderAlreadyFulfilledToday(def.type, todayLog, medications, todayIntakeLogs)) {
      continue;
    }
    due.push(def);
  }

  return due;
}

export async function runNotificationCheck(
  db: CardioDatabase,
  settings: AppSettings,
  now = new Date(),
): Promise<ReminderType[]> {
  if (!settings.notifications.enabled || getNotificationPermission() !== 'granted') {
    return [];
  }

  const todayIso = getTodayIsoDate(now);
  const alreadySent = readSentRemindersForDate(todayIso);

  const [todayLog, medications, todayIntakeLogs] = await Promise.all([
    db.dailyLogs.where('date').equals(todayIso).first(),
    db.medications.toArray(),
    db.intakeLogs.where('date').equals(todayIso).toArray(),
  ]);

  const dueReminders = evaluateDueReminders({
    notifications: settings.notifications,
    now,
    todayLog,
    medications,
    todayIntakeLogs,
    alreadySent,
  });

  const delivered: ReminderType[] = [];
  for (const reminder of dueReminders) {
    const ok = await showLocalNotification({
      title: reminder.notificationTitle,
      body: reminder.notificationBody,
      tag: `cardio-reminder-${reminder.type}-${todayIso}`,
      targetHash: reminder.targetHash,
    });
    if (ok) {
      markReminderSent(todayIso, reminder.type, now.toISOString());
      delivered.push(reminder.type);
    }
  }

  return delivered;
}
