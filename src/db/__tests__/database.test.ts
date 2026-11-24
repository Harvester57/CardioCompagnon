import 'fake-indexeddb/auto';
import { afterEach, describe, expect, it } from 'vitest';
import {
  ACTIVE_DB_NAME,
  CardioDatabase,
  DEMO_DB_NAME,
  DEMO_REFERENCE_DATE,
  activeDb,
  demoDb,
  ensureDbInitialized,
  loadPatientState,
  resetDemoDatabase,
  saveProfile,
  seedDemoDatabase,
  upsertDailyLog,
} from '../index';

describe('Couche Dexie locale (CardioCompagnonDB & CardioCompagnonDemoDB)', () => {
  const testDbs: CardioDatabase[] = [];

  function createIsolatedDb(suffix: string): CardioDatabase {
    const db = new CardioDatabase(`CardioTest_${suffix}_${Date.now()}_${Math.random()}`);
    testDbs.push(db);
    return db;
  }

  afterEach(async () => {
    for (const db of testDbs.splice(0, testDbs.length)) {
      db.close();
      await db.delete();
    }
  });

  it('expose deux instances distinctes CardioCompagnonDB et CardioCompagnonDemoDB avec les 11 tables', () => {
    expect(activeDb.name).toBe(ACTIVE_DB_NAME);
    expect(demoDb.name).toBe(DEMO_DB_NAME);
    expect(activeDb.name).not.toBe(demoDb.name);

    const tableNames = activeDb.tables.map((t) => t.name).sort();
    expect(tableNames).toEqual(
      [
        'adminProgress',
        'dailyLogs',
        'doseChanges',
        'events',
        'imaging',
        'intakeLogs',
        'labs',
        'medications',
        'profile',
        'questionTracking',
        'settings',
      ].sort(),
    );
  });

  it('initialise profil et parametres par defaut et isole strictement base active et base demo', async () => {
    const personal = createIsolatedDb('personal');
    const demo = createIsolatedDb('demo');

    await ensureDbInitialized(personal);
    await seedDemoDatabase(demo);

    await saveProfile(personal, { displayName: 'Profil personnel test', dryWeightKg: 72 });

    const personalProfile = await personal.profile.get('active');
    const demoProfile = await demo.profile.get('active');

    expect(personalProfile?.displayName).toBe('Profil personnel test');
    expect(personalProfile?.dryWeightKg).toBe(72);
    expect(demoProfile?.displayName).toBe('Profil de démonstration');
    expect(demoProfile?.dryWeightKg).toBe(78.5);

    expect(await personal.dailyLogs.count()).toBe(0);
    expect(await demo.dailyLogs.count()).toBeGreaterThanOrEqual(14);
  });

  it('peuple le jeu de donnees demo de maniere idempotente et couvre toutes les modalites cliniques', async () => {
    const demo = createIsolatedDb('seed');

    const firstSeed = await seedDemoDatabase(demo);
    expect(firstSeed).toBe(true);

    const secondSeed = await seedDemoDatabase(demo);
    expect(secondSeed).toBe(false);

    const state = await loadPatientState(demo, DEMO_REFERENCE_DATE);
    expect(state.profile.displayName).toBe('Profil de démonstration');
    expect(state.dailyLogs.length).toBeGreaterThanOrEqual(14);

    const pillars = new Set(state.medications.map((m) => m.pillar));
    expect(pillars.has('raas_arni')).toBe(true);
    expect(pillars.has('beta_blocker')).toBe(true);
    expect(pillars.has('mra')).toBe(true);
    expect(pillars.has('sglt2i')).toBe(true);
    expect(pillars.has('loop_diuretic')).toBe(true);
    expect(pillars.has('lipid_lowering')).toBe(true);

    const modalities = new Set(state.imaging.map((img) => img.modality));
    expect(modalities.has('ett')).toBe(true);
    expect(modalities.has('irm')).toBe(true);

    expect(state.labs.length).toBeGreaterThanOrEqual(3);
    expect(state.labs.some((l) => l.ntProBnpPgMl !== undefined && l.tsatPercent !== undefined)).toBe(
      true,
    );
    expect(state.events.some((e) => e.type === 'ecg_check')).toBe(true);
    expect(state.adminProgress.length).toBeGreaterThan(0);

    await resetDemoDatabase(demo);
    const afterReset = await loadPatientState(demo, DEMO_REFERENCE_DATE);
    expect(afterReset.dailyLogs.length).toBe(state.dailyLogs.length);
  });

  it('trie dailyLogs, labs, imaging et events par date croissante dans loadPatientState', async () => {
    const db = createIsolatedDb('sorting');
    await ensureDbInitialized(db);

    await db.dailyLogs.bulkAdd([
      {
        date: '2026-11-22',
        weightKg: 80.2,
        symptoms: {
          dyspnoea: 'none',
          oedema: 'none',
          fatigue: 'none',
          dizziness: false,
          palpitations: false,
          chestPain: false,
          persistentCough: false,
          appetiteLoss: false,
        },
        createdAt: '2026-11-22T07:00:00.000Z',
      },
      {
        date: '2026-11-20',
        weightKg: 79.8,
        symptoms: {
          dyspnoea: 'none',
          oedema: 'none',
          fatigue: 'none',
          dizziness: false,
          palpitations: false,
          chestPain: false,
          persistentCough: false,
          appetiteLoss: false,
        },
        createdAt: '2026-11-20T07:00:00.000Z',
      },
    ]);

    await db.labs.bulkAdd([
      { date: '2026-10-01', ldlGL: 0.6 },
      { date: '2026-05-01', ldlGL: 0.8 },
    ]);

    await db.imaging.bulkAdd([
      { date: '2026-09-01', modality: 'ett', lvefPercent: 35 },
      { date: '2026-02-01', modality: 'irm', lvefPercent: 31 },
    ]);

    await db.events.bulkAdd([
      { date: '2026-10-15', type: 'vaccine_flu', details: {} },
      { date: '2026-01-10', type: 'mi', details: {} },
    ]);

    const state = await loadPatientState(db, '2026-11-24');
    expect(state.referenceDate).toBe('2026-11-24');
    expect(state.dailyLogs.map((d) => d.date)).toEqual(['2026-11-20', '2026-11-22']);
    expect(state.labs.map((l) => l.date)).toEqual(['2026-05-01', '2026-10-01']);
    expect(state.imaging.map((i) => i.date)).toEqual(['2026-02-01', '2026-09-01']);
    expect(state.events.map((e) => e.date)).toEqual(['2026-01-10', '2026-10-15']);
  });

  it('met a jour un relevé existant via upsertDailyLog sans violer l index unique sur date', async () => {
    const db = createIsolatedDb('upsert');
    await ensureDbInitialized(db);

    const firstId = await upsertDailyLog(db, {
      date: '2026-11-24',
      weightKg: 78.5,
      symptoms: {
        dyspnoea: 'none',
        oedema: 'none',
        fatigue: 'none',
        dizziness: false,
        palpitations: false,
        chestPain: false,
        persistentCough: false,
        appetiteLoss: false,
      },
    });

    const secondId = await upsertDailyLog(db, {
      date: '2026-11-24',
      weightKg: 78.9,
      symptoms: {
        dyspnoea: 'exertion',
        oedema: 'none',
        fatigue: 'none',
        dizziness: false,
        palpitations: false,
        chestPain: false,
        persistentCough: false,
        appetiteLoss: false,
      },
    });

    expect(secondId).toBe(firstId);
    expect(await db.dailyLogs.count()).toBe(1);
    const saved = await db.dailyLogs.where('date').equals('2026-11-24').first();
    expect(saved?.weightKg).toBe(78.9);
    expect(saved?.symptoms.dyspnoea).toBe('exertion');
  });
});
