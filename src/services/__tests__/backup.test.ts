import 'fake-indexeddb/auto';
import { afterEach, describe, expect, it } from 'vitest';
import {
  CardioDatabase,
  ensureDbInitialized,
  saveAppSettings,
  saveProfile,
  seedDemoDatabase,
} from '../../db';
import {
  BackupValidationError,
  createEncryptedBackupEnvelope,
  createPlainBackupEnvelope,
  exportDatabasePayload,
  isBackupOverdue,
  parseBackupEnvelope,
  restoreBackupToDatabase,
  validatePlainBackupPayload,
} from '../backup';
import { CryptoServiceError } from '../crypto';

describe('backup service (export clair & chiffre, validation schema, restauration atomique)', () => {
  const testDbs: CardioDatabase[] = [];

  function createIsolatedDb(suffix: string): CardioDatabase {
    const db = new CardioDatabase(`CardioBackupTest_${suffix}_${Date.now()}_${Math.random()}`);
    testDbs.push(db);
    return db;
  }

  afterEach(async () => {
    for (const db of testDbs.splice(0, testDbs.length)) {
      db.close();
      await db.delete();
    }
  });

  it('exporte les donnees patient en excluant strictement settings et toute cle API BYOK', async () => {
    const db = createIsolatedDb('exclude_settings');
    await seedDemoDatabase(db);
    await saveAppSettings(db, {
      theme: 'dark',
      largeTextMode: true,
      pinHash: 'SENSITIVE_PIN_HASH_VALUE',
      pinSalt: 'SENSITIVE_PIN_SALT_VALUE',
      aiHelper: {
        enabled: true,
        provider: 'gemini',
        apiKey: 'SUPER_SECRET_BYOK_KEY_999',
      },
    });

    const payload = await exportDatabasePayload(db);
    const envelope = await createPlainBackupEnvelope(db);
    const serialized = JSON.stringify(envelope);

    expect(payload.schemaVersion).toBe(1);
    expect(payload.profile.id).toBe('active');
    expect(payload.dailyLogs.length).toBeGreaterThanOrEqual(14);
    expect(payload.medications.length).toBeGreaterThan(0);

    expect(serialized).not.toContain('SUPER_SECRET_BYOK_KEY_999');
    expect(serialized).not.toContain('SENSITIVE_PIN_HASH_VALUE');
    expect(serialized).not.toContain('SENSITIVE_PIN_SALT_VALUE');
    expect('settings' in (payload as unknown as Record<string, unknown>)).toBe(false);
  });

  it('realise un roundtrip sauvegarde claire avec apercu du nombre d enregistrements', async () => {
    const db = createIsolatedDb('plain_roundtrip');
    await seedDemoDatabase(db);

    const envelope = await createPlainBackupEnvelope(db);
    expect(envelope.format).toBe('cardio-compagnon-plain-v1');

    const parsed = await parseBackupEnvelope(JSON.stringify(envelope));
    expect(parsed.encrypted).toBe(false);
    expect(parsed.summary.schemaVersion).toBe(1);
    expect(parsed.summary.profileDisplayName).toBe('Profil de démonstration');
    expect(parsed.summary.counts.dailyLogs).toBe(envelope.payload.dailyLogs.length);
    expect(parsed.summary.counts.medications).toBe(envelope.payload.medications.length);
    expect(parsed.summary.counts.totalRecords).toBeGreaterThan(15);
  });

  it('realise un roundtrip sauvegarde chiffree et gere mot de passe manquant ou invalide', async () => {
    const db = createIsolatedDb('enc_roundtrip');
    await seedDemoDatabase(db);

    const encEnvelope = await createEncryptedBackupEnvelope(db, 'MonSecretCardio!2026');
    expect(encEnvelope.format).toBe('cardio-compagnon-enc-v1');
    const serialized = JSON.stringify(encEnvelope);
    expect(serialized).not.toContain('Profil de démonstration');

    await expect(parseBackupEnvelope(serialized)).rejects.toMatchObject({
      name: 'BackupValidationError',
      code: 'PASSWORD_REQUIRED',
    });

    await expect(parseBackupEnvelope(serialized, 'MauvaisMotDePasse')).rejects.toBeInstanceOf(
      CryptoServiceError,
    );

    const parsed = await parseBackupEnvelope(serialized, 'MonSecretCardio!2026');
    expect(parsed.encrypted).toBe(true);
    expect(parsed.payload.profile.displayName).toBe('Profil de démonstration');
    expect(parsed.summary.counts.labs).toBeGreaterThanOrEqual(3);
  });

  it('rejette les schemas invalides avec des messages explicites en francais', () => {
    expect(() => validatePlainBackupPayload(null)).toThrow(BackupValidationError);
    expect(() => validatePlainBackupPayload({ schemaVersion: 2 })).toThrow(/Version de schéma/);

    const badPayload = {
      schemaVersion: 1,
      exportedAt: '2026-11-24T10:00:00.000Z',
      profile: {
        id: 'active',
        sex: 'M',
        hfStage: 'C',
        nyhaClass: 2,
        ischaemicCauseConfirmed: 'yes',
        drivingGroup: 'group1',
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
        updatedAt: '2026-11-24T10:00:00.000Z',
      },
      dailyLogs: [],
      medications: [],
      doseChanges: [],
      intakeLogs: [],
      labs: [],
      imaging: [{ date: '2026-11-01', modality: 'scanner' }],
      events: [],
      questionTracking: [],
      adminProgress: [],
    };

    expect(() => validatePlainBackupPayload(badPayload)).toThrow(/ett.*irm/);
  });

  it('restaure les donnees patient de maniere atomique tout en preservant settings', async () => {
    const sourceDb = createIsolatedDb('source');
    const targetDb = createIsolatedDb('target');

    await seedDemoDatabase(sourceDb);
    const exported = await exportDatabasePayload(sourceDb);

    await ensureDbInitialized(targetDb);
    await saveProfile(targetDb, { displayName: 'Ancien profil', dryWeightKg: 65 });
    await saveAppSettings(targetDb, {
      theme: 'dark',
      largeTextMode: true,
      pinHash: 'PRESERVED_PIN_HASH',
      pinSalt: 'PRESERVED_PIN_SALT',
      aiHelper: {
        enabled: true,
        provider: 'mistral',
        apiKey: 'PRESERVED_API_KEY',
      },
    });

    await restoreBackupToDatabase(targetDb, exported);

    const restoredProfile = await targetDb.profile.get('active');
    const preservedSettings = await targetDb.settings.get('settings');

    expect(restoredProfile?.displayName).toBe('Profil de démonstration');
    expect(await targetDb.dailyLogs.count()).toBe(exported.dailyLogs.length);
    expect(await targetDb.medications.count()).toBe(exported.medications.length);
    expect(await targetDb.imaging.count()).toBe(exported.imaging.length);

    expect(preservedSettings?.theme).toBe('dark');
    expect(preservedSettings?.largeTextMode).toBe(true);
    expect(preservedSettings?.pinHash).toBe('PRESERVED_PIN_HASH');
    expect(preservedSettings?.aiHelper.apiKey).toBe('PRESERVED_API_KEY');
  });

  it('annule toute la restauration en cas d echec transactionnel (atomicite Dexie)', async () => {
    const db = createIsolatedDb('atomic_rollback');
    await ensureDbInitialized(db);
    await saveProfile(db, { displayName: 'Profil initial intact', dryWeightKg: 74 });

    const existingPayload = await exportDatabasePayload(db);
    const conflictingPayload = {
      ...existingPayload,
      profile: { ...existingPayload.profile, displayName: 'Profil corrompu' },
      dailyLogs: [
        {
          date: '2026-11-20',
          weightKg: 75,
          symptoms: {
            dyspnoea: 'none' as const,
            oedema: 'none' as const,
            fatigue: 'none' as const,
            dizziness: false,
            palpitations: false,
            chestPain: false,
            persistentCough: false,
            appetiteLoss: false,
          },
          createdAt: '2026-11-20T07:00:00.000Z',
        },
        {
          date: '2026-11-20', // Doublon sur index unique &date
          weightKg: 76,
          symptoms: {
            dyspnoea: 'none' as const,
            oedema: 'none' as const,
            fatigue: 'none' as const,
            dizziness: false,
            palpitations: false,
            chestPain: false,
            persistentCough: false,
            appetiteLoss: false,
          },
          createdAt: '2026-11-20T08:00:00.000Z',
        },
      ],
    };

    await expect(restoreBackupToDatabase(db, conflictingPayload)).rejects.toThrow();

    const afterFailureProfile = await db.profile.get('active');
    expect(afterFailureProfile?.displayName).toBe('Profil initial intact');
    expect(await db.dailyLogs.count()).toBe(0);
  });

  it('calcule correctement isBackupOverdue selon le seuil de 14 jours', () => {
    expect(isBackupOverdue(undefined, '2026-11-24')).toBe(true);
    expect(isBackupOverdue('', '2026-11-24')).toBe(true);
    expect(isBackupOverdue('date-invalide', '2026-11-24')).toBe(true);
    expect(isBackupOverdue('2026-11-24T08:00:00.000Z', '2026-11-24T12:00:00.000Z')).toBe(false);
    expect(isBackupOverdue('2026-11-11', '2026-11-24')).toBe(false); // 13 jours
    expect(isBackupOverdue('2026-11-10', '2026-11-24')).toBe(false); // 14 jours exacts
    expect(isBackupOverdue('2026-11-09', '2026-11-24')).toBe(true);  // 15 jours
    expect(isBackupOverdue('2026-11-16', '2026-11-24', 7)).toBe(true); // 8 jours > 7
  });
});
