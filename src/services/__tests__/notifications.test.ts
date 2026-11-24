import 'fake-indexeddb/auto';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  CardioDatabase,
  createDefaultNotificationSettings,
  createDefaultSettings,
  ensureDbInitialized,
  upsertDailyLog,
} from '../../db';
import type { DailyLog, Medication, MedicationIntakeLog } from '../../types';
import {
  clearSentReminders,
  evaluateDueReminders,
  getNotificationPermission,
  isNotificationSupported,
  isValidReminderTime,
  markReminderSent,
  parseReminderTimeMinutes,
  readSentRemindersForDate,
  requestNotificationPermission,
  runNotificationCheck,
  sendTestNotification,
  showLocalNotification,
} from '../notifications';

interface MockNotificationConstructor {
  (title: string, options?: NotificationOptions): {
    title: string;
    options?: NotificationOptions;
    onclick: (() => void) | null;
    close: ReturnType<typeof vi.fn>;
  };
  permission: NotificationPermission;
  requestPermission: ReturnType<typeof vi.fn>;
}

function installMockNotification(
  permission: NotificationPermission = 'granted',
  requestResult: NotificationPermission = permission,
) {
  const instances: Array<{
    title: string;
    options?: NotificationOptions;
    onclick: (() => void) | null;
    close: ReturnType<typeof vi.fn>;
  }> = [];

  const MockNotification = vi.fn(function (title: string, options?: NotificationOptions) {
    const instance = {
      title,
      options,
      onclick: null as (() => void) | null,
      close: vi.fn(),
    };
    instances.push(instance);
    return instance;
  }) as unknown as MockNotificationConstructor;

  MockNotification.permission = permission;
  MockNotification.requestPermission = vi.fn(async () => {
    MockNotification.permission = requestResult;
    return requestResult;
  });

  Object.defineProperty(window, 'Notification', {
    configurable: true,
    writable: true,
    value: MockNotification,
  });

  return { MockNotification, instances };
}

function createEmptySymptoms(): DailyLog['symptoms'] {
  return {
    dyspnoea: 'none',
    oedema: 'none',
    fatigue: 'none',
    dizziness: false,
    palpitations: false,
    chestPain: false,
    persistentCough: false,
    appetiteLoss: false,
  };
}

describe('Service de notifications locales (notifications.ts)', () => {
  const originalNotification = window.Notification;
  const originalServiceWorker = navigator.serviceWorker;
  const testDbs: CardioDatabase[] = [];

  function createIsolatedDb(suffix: string): CardioDatabase {
    const db = new CardioDatabase(`CardioNotifTest_${suffix}_${Date.now()}_${Math.random()}`);
    testDbs.push(db);
    return db;
  }

  beforeEach(() => {
    window.localStorage.clear();
    clearSentReminders();
  });

  afterEach(async () => {
    Object.defineProperty(window, 'Notification', {
      configurable: true,
      writable: true,
      value: originalNotification,
    });
    Object.defineProperty(navigator, 'serviceWorker', {
      configurable: true,
      writable: true,
      value: originalServiceWorker,
    });
    vi.restoreAllMocks();
    for (const db of testDbs.splice(0, testDbs.length)) {
      db.close();
      await db.delete();
    }
  });

  it('valide et convertit correctement les horaires HH:MM', () => {
    expect(isValidReminderTime('07:30')).toBe(true);
    expect(isValidReminderTime('00:00')).toBe(true);
    expect(isValidReminderTime('23:59')).toBe(true);
    expect(isValidReminderTime('24:00')).toBe(false);
    expect(isValidReminderTime('7:30')).toBe(false);
    expect(isValidReminderTime('')).toBe(false);

    expect(parseReminderTimeMinutes('07:30')).toBe(450);
    expect(parseReminderTimeMinutes('20:15')).toBe(1215);
    expect(parseReminderTimeMinutes('invalid')).toBeNull();
  });

  it('detecte la prise en charge et gere les etats de permission', async () => {
    Object.defineProperty(window, 'Notification', {
      configurable: true,
      writable: true,
      value: undefined,
    });
    expect(isNotificationSupported()).toBe(false);
    expect(getNotificationPermission()).toBe('unsupported');
    expect(await requestNotificationPermission()).toBe('unsupported');

    const { MockNotification } = installMockNotification('default', 'granted');
    expect(isNotificationSupported()).toBe(true);
    expect(getNotificationPermission()).toBe('default');
    expect(await requestNotificationPermission()).toBe('granted');
    expect(MockNotification.requestPermission).toHaveBeenCalledTimes(1);
    expect(getNotificationPermission()).toBe('granted');
  });

  it('utilise ServiceWorkerRegistration.showNotification en priorite puis se replie sur new Notification', async () => {
    const { MockNotification, instances } = installMockNotification('granted');
    const showNotificationSpy = vi.fn().mockResolvedValue(undefined);

    Object.defineProperty(navigator, 'serviceWorker', {
      configurable: true,
      writable: true,
      value: {
        getRegistration: vi.fn().mockResolvedValue({
          active: {},
          showNotification: showNotificationSpy,
        }),
      },
    });

    const sentViaSw = await showLocalNotification({
      title: 'Rappel SW',
      body: 'Message via service worker',
      tag: 'test-sw',
    });
    expect(sentViaSw).toBe(true);
    expect(showNotificationSpy).toHaveBeenCalledTimes(1);
    expect(MockNotification).not.toHaveBeenCalled();

    // Sans enregistrement SW actif -> repli direct sur window.Notification
    Object.defineProperty(navigator, 'serviceWorker', {
      configurable: true,
      writable: true,
      value: {
        getRegistration: vi.fn().mockResolvedValue(undefined),
      },
    });

    const sentDirect = await sendTestNotification();
    expect(sentDirect).toBe(true);
    expect(instances).toHaveLength(1);
    expect(instances[0].title).toContain('Notification de test');
  });

  it('evalue les rappels dus et ignore ceux deja completes ou deja envoyes', () => {
    const notifications = createDefaultNotificationSettings();
    notifications.enabled = true;
    notifications.reminders.weight = { enabled: true, time: '07:30' };
    notifications.reminders.dailyCheckup = { enabled: true, time: '09:00' };
    notifications.reminders.medicationMorning = { enabled: true, time: '08:00' };
    notifications.reminders.medicationEvening = { enabled: true, time: '20:00' };

    const meds: Medication[] = [
      {
        id: 1,
        pillar: 'beta_blocker',
        innName: 'bisoprolol',
        doseLabel: '5 mg',
        status: 'active',
        scheduleSlots: ['matin'],
      },
      {
        id: 2,
        pillar: 'lipid_lowering',
        innName: 'atorvastatine',
        doseLabel: '40 mg',
        status: 'active',
        scheduleSlots: ['soir'],
      },
    ];

    // A 08:15 sans aucune saisie : weight (07:30) et medicationMorning (08:00) sont dus
    const dueAt0815 = evaluateDueReminders({
      notifications,
      now: new Date(2026, 10, 24, 8, 15),
      todayLog: undefined,
      medications: meds,
      todayIntakeLogs: [],
      alreadySent: new Set(),
    });
    expect(dueAt0815.map((r) => r.type)).toEqual(['weight', 'medicationMorning']);

    // Si le poids est deja saisi et la prise du matin cochee : plus rien n'est du a 09:30
    const logWithWeight: DailyLog = {
      id: 1,
      date: '2026-11-24',
      weightKg: 76.4,
      symptoms: createEmptySymptoms(),
      createdAt: '2026-11-24T07:20:00.000Z',
    };
    const morningTaken: MedicationIntakeLog[] = [
      {
        id: 1,
        date: '2026-11-24',
        medicationId: 1,
        slot: 'matin',
        taken: true,
        takenAt: '2026-11-24T07:45:00.000Z',
      },
    ];

    const dueAt0930 = evaluateDueReminders({
      notifications,
      now: new Date(2026, 10, 24, 9, 30),
      todayLog: logWithWeight,
      medications: meds,
      todayIntakeLogs: morningTaken,
      alreadySent: new Set(),
    });
    expect(dueAt0930).toEqual([]);

    // A 20:30 : seul medicationEvening est du (et ignore si deja marque envoye)
    const dueAt2030 = evaluateDueReminders({
      notifications,
      now: new Date(2026, 10, 24, 20, 30),
      todayLog: logWithWeight,
      medications: meds,
      todayIntakeLogs: morningTaken,
      alreadySent: new Set(),
    });
    expect(dueAt2030.map((r) => r.type)).toEqual(['medicationEvening']);

    const dueAfterAlreadySent = evaluateDueReminders({
      notifications,
      now: new Date(2026, 10, 24, 20, 35),
      todayLog: logWithWeight,
      medications: meds,
      todayIntakeLogs: morningTaken,
      alreadySent: new Set(['medicationEvening']),
    });
    expect(dueAfterAlreadySent).toEqual([]);
  });

  it('deduplique par jour dans localStorage et purge les dates precedentes', () => {
    markReminderSent('2026-11-23', 'weight', '2026-11-23T07:31:00.000Z');
    expect(readSentRemindersForDate('2026-11-23').has('weight')).toBe(true);

    markReminderSent('2026-11-24', 'dailyCheckup', '2026-11-24T09:01:00.000Z');
    expect(readSentRemindersForDate('2026-11-24').has('dailyCheckup')).toBe(true);
    expect(readSentRemindersForDate('2026-11-23').size).toBe(0);
  });

  it('declenche les rappels une seule fois via runNotificationCheck et respecte les donnees Dexie', async () => {
    const { instances } = installMockNotification('granted');
    Object.defineProperty(navigator, 'serviceWorker', {
      configurable: true,
      writable: true,
      value: undefined,
    });

    const db = createIsolatedDb('runcheck');
    await ensureDbInitialized(db);

    const settings = createDefaultSettings();
    settings.notifications.enabled = true;
    settings.notifications.reminders.weight = { enabled: true, time: '07:30' };
    settings.notifications.reminders.dailyCheckup = { enabled: true, time: '09:00' };

    const checkMorning = new Date(2026, 10, 24, 9, 15);
    const firstRun = await runNotificationCheck(db, settings, checkMorning);
    expect(firstRun).toEqual(['weight', 'dailyCheckup']);
    expect(instances).toHaveLength(2);

    // Un second controle le meme jour ne renvoie pas les memes notifications
    const secondRun = await runNotificationCheck(db, settings, new Date(2026, 10, 24, 9, 20));
    expect(secondRun).toEqual([]);
    expect(instances).toHaveLength(2);

    // Le lendemain, si un releve avec poids existe deja, aucun rappel n'est envoye
    await upsertDailyLog(db, {
      date: '2026-11-25',
      weightKg: 77.2,
      symptoms: createEmptySymptoms(),
    });
    const nextDayRun = await runNotificationCheck(db, settings, new Date(2026, 10, 25, 10, 0));
    expect(nextDayRun).toEqual([]);
    expect(instances).toHaveLength(2);
  });
});
