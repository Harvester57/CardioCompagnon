import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import App from '../app/App';
import { clearPinSessionUnlock, readUnlockedPinHash } from '../app/pin-session';
import {
  activeDb,
  clearPatientData,
  createDefaultSettings,
  demoDb,
  ensureDbInitialized,
  getTodayIsoDate,
  saveAppSettings,
  saveProfile,
  upsertDailyLog,
} from '../db';
import {
  createEncryptedBackupEnvelope,
  createPlainBackupEnvelope,
  hashPin,
  parseBackupEnvelope,
  restoreBackupToDatabase,
} from '../services';

function shiftIsoDate(isoDate: string, deltaDays: number): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + deltaDays));
  const year = dt.getUTCFullYear();
  const month = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const day = String(dt.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function emptySymptoms() {
  return {
    dyspnoea: 'none' as const,
    oedema: 'none' as const,
    fatigue: 'none' as const,
    dizziness: false,
    palpitations: false,
    chestPain: false,
    persistentCough: false,
    appetiteLoss: false,
  };
}

async function resetAllStorage() {
  window.localStorage.clear();
  clearPinSessionUnlock();
  window.location.hash = '#/';
  document.documentElement.classList.remove('dark', 'large-text');

  await ensureDbInitialized(activeDb);
  await clearPatientData(activeDb);
  await activeDb.settings.put(createDefaultSettings());

  await ensureDbInitialized(demoDb);
  await clearPatientData(demoDb);
  await demoDb.settings.put(createDefaultSettings());
}

beforeAll(() => {
  if (typeof globalThis.ResizeObserver === 'undefined') {
    class MockResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    globalThis.ResizeObserver = MockResizeObserver;
  }
});

beforeEach(async () => {
  await resetAllStorage();
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  document.documentElement.classList.remove('dark', 'large-text');
});

describe("Tests d'intégration multi-modules CardioCompagnon (W3)", () => {
  it("chaîne pesée matinale (+2,5 kg) -> persistance Dexie -> triage Aujourd'hui -> action Mon Plan -> article Bibliothèque", async () => {
    const today = getTodayIsoDate();
    const twoDaysAgo = shiftIsoDate(today, -2);

    await saveProfile(activeDb, {
      displayName: 'Claire Moreau',
      hfStage: 'C',
      nyhaClass: 2,
      dryWeightKg: 78.0,
    });
    await upsertDailyLog(activeDb, {
      date: twoDaysAgo,
      weightKg: 78.0,
      systolicBp: 114,
      diastolicBp: 70,
      heartRateBpm: 64,
      symptoms: emptySymptoms(),
    });

    render(<App />);

    // 1. Écran Aujourd'hui chargé (route lazy-loaded)
    expect(
      await screen.findByText('Saisie matinale rapide', undefined, { timeout: 10_000 }),
    ).toBeInTheDocument();

    // Saisie d'une prise de poids rapide (+2,5 kg vs poids sec et J-2) + œdèmes en aggravation
    fireEvent.change(screen.getByLabelText('Poids matinal (kg)'), {
      target: { value: '80,5' },
    });
    fireEvent.change(screen.getByLabelText('TA systolique (mmHg)'), {
      target: { value: '112' },
    });
    fireEvent.change(screen.getByLabelText('TA diastolique (mmHg)'), {
      target: { value: '68' },
    });
    fireEvent.change(screen.getByLabelText('Fréquence cardiaque (bpm)'), {
      target: { value: '66' },
    });

    const oedemaGroup = screen.getByRole('group', { name: 'O -- Œdèmes (jambes, chevilles)' });
    fireEvent.click(within(oedemaGroup).getByRole('button', { name: 'En aggravation' }));

    fireEvent.click(screen.getByRole('button', { name: 'Enregistrer la saisie' }));

    // 2. Persistance dans Dexie
    await waitFor(async () => {
      const saved = await activeDb.dailyLogs.where('date').equals(today).first();
      expect(saved).toBeDefined();
      expect(saved?.weightKg).toBe(80.5);
      expect(saved?.symptoms.oedema).toBe('worsening');
    });

    // 3. Mise à jour réactive du triage dans Aujourd'hui
    await waitFor(() => {
      expect(screen.getByText(/Prise de poids rapide/i)).toBeInTheDocument();
    });

    // 4. Navigation vers Mon Plan & Visites via la barre latérale
    const sidebar = screen.getByRole('navigation', { name: 'Modules' });
    fireEvent.click(within(sidebar).getByRole('link', { name: 'Mon Plan & Visites' }));

    expect(
      await screen.findByRole(
        'heading',
        { level: 1, name: /Mon Plan & Consultations/i },
        { timeout: 10_000 },
      ),
    ).toBeInTheDocument();

    const planList = await screen.findByRole('list', { name: 'Points prioritaires de votre plan' });
    expect(within(planList).getByText(/Prise de poids rapide/i)).toBeInTheDocument();

    // 5. Ouverture de l'article scientifique lié dans la Bibliothèque
    const firstArticleLink = within(planList).getAllByRole('link', {
      name: /Lire l'article scientifique/i,
    })[0];
    fireEvent.click(firstArticleLink);

    expect(
      await screen.findByRole('heading', { level: 2, name: 'En clair' }, { timeout: 10_000 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Retour à la bibliothèque/i }),
    ).toBeInTheDocument();
  }, 15_000);

  it('isole strictement le Mode découverte (CardioCompagnonDemoDB) des données personnelles (CardioCompagnonDB)', async () => {
    const today = getTodayIsoDate();
    await saveProfile(activeDb, {
      displayName: 'Profil Personnel Privé',
      dryWeightKg: 66.0,
    });
    await upsertDailyLog(activeDb, {
      date: today,
      weightKg: 66.4,
      systolicBp: 118,
      diastolicBp: 72,
      heartRateBpm: 62,
      symptoms: emptySymptoms(),
    });

    render(<App />);

    // Aller dans Paramètres & Profil
    const sidebar = await screen.findByRole('navigation', { name: 'Modules' });
    fireEvent.click(within(sidebar).getByRole('link', { name: 'Paramètres & Profil' }));

    const activateDemoButton = await screen.findByRole('button', {
      name: /Activer le mode découverte/i,
    });
    fireEvent.click(activateDemoButton);

    // Bandeau permanent visible
    await waitFor(() => {
      expect(
        screen.getByText(/Mode découverte actif — données fictives isolées/i),
      ).toBeInTheDocument();
    });

    // Aller sur Aujourd'hui et saisir un poids fictif élevé dans la base de démo
    fireEvent.click(within(sidebar).getByRole('link', { name: "Aujourd'hui" }));
    expect(await screen.findByText('Saisie matinale rapide')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Poids matinal (kg)'), {
      target: { value: '91,2' },
    });
    fireEvent.click(
      screen.getByRole('button', { name: /Mettre à jour la saisie|Enregistrer la saisie/i }),
    );

    await waitFor(async () => {
      const demoLogs = await demoDb.dailyLogs.toArray();
      expect(demoLogs.some((log) => log.weightKg === 91.2)).toBe(true);
    });

    // Quitter le mode découverte depuis le bandeau permanent
    fireEvent.click(screen.getByRole('button', { name: /Quitter le mode découverte/i }));

    await waitFor(() => {
      expect(
        screen.queryByText(/Mode découverte actif — données fictives isolées/i),
      ).not.toBeInTheDocument();
    });

    // La base personnelle est strictement intacte
    const personalProfile = await activeDb.profile.get('active');
    const personalLogs = await activeDb.dailyLogs.toArray();
    expect(personalProfile?.displayName).toBe('Profil Personnel Privé');
    expect(personalLogs).toHaveLength(1);
    expect(personalLogs[0]?.weightKg).toBe(66.4);
    expect(personalLogs.some((log) => log.weightKg === 91.2)).toBe(false);
  });

  it('applique thème/large-text, verrouille/déverrouille par PIN et effectue un roundtrip sauvegarde sans clé API BYOK', async () => {
    const today = getTodayIsoDate();
    const twentyDaysAgo = shiftIsoDate(today, -20);
    const hashed = await hashPin('2468');
    const secretApiKey = 'sk-byok-ne-jamais-exporter-778899';

    await saveProfile(activeDb, {
      displayName: 'Jean-Luc Martin',
      dryWeightKg: 75.5,
      hfStage: 'C',
    });
    await upsertDailyLog(activeDb, {
      date: today,
      weightKg: 75.8,
      systolicBp: 110,
      diastolicBp: 68,
      heartRateBpm: 60,
      symptoms: emptySymptoms(),
    });
    await saveAppSettings(activeDb, {
      theme: 'dark',
      largeTextMode: true,
      pinHash: hashed.hash,
      pinSalt: hashed.salt,
      lastBackupAt: `${twentyDaysAgo}T09:00:00.000Z`,
      aiHelper: {
        enabled: true,
        provider: 'mistral',
        apiKey: secretApiKey,
        modelName: 'mistral-small-latest',
      },
    });

    render(<App />);

    // 1. Écran de verrouillage PIN actif + classes dark & large-text appliquées réactivement
    expect(
      await screen.findByRole('heading', { level: 1, name: /Accès protégé par code PIN/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText('Saisie matinale rapide')).not.toBeInTheDocument();
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('large-text')).toBe(true);
    });

    // 2. Mauvais code PIN refusé
    const pinInput = screen.getByLabelText('Code PIN local');
    fireEvent.change(pinInput, { target: { value: '0000' } });
    fireEvent.click(screen.getByRole('button', { name: 'Déverrouiller' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(/Code PIN incorrect/i);
    expect(screen.queryByText('Saisie matinale rapide')).not.toBeInTheDocument();

    // 3. Bon code PIN déverrouille la session et affiche l'app + rappel sauvegarde > 14 j
    fireEvent.change(pinInput, { target: { value: '2468' } });
    fireEvent.click(screen.getByRole('button', { name: 'Déverrouiller' }));

    expect(await screen.findByText('Saisie matinale rapide')).toBeInTheDocument();
    expect(readUnlockedPinHash()).toBe(hashed.hash);
    expect(
      screen.getByText(/Votre dernière sauvegarde locale date de plus de 14 jours/i),
    ).toBeInTheDocument();

    // 4. Roundtrip sauvegarde/restauration (clair + chiffré) sans fuite de la clé API BYOK ni du PIN
    const plainEnvelope = await createPlainBackupEnvelope(activeDb);
    const plainSerialized = JSON.stringify(plainEnvelope);
    expect(plainSerialized).not.toContain(secretApiKey);
    expect(plainSerialized).not.toContain(hashed.hash);

    const encryptedEnvelope = await createEncryptedBackupEnvelope(
      activeDb,
      'PhraseSecreteCardio2026!',
    );
    const encryptedSerialized = JSON.stringify(encryptedEnvelope);
    expect(encryptedSerialized).not.toContain(secretApiKey);

    await clearPatientData(activeDb);
    expect(await activeDb.dailyLogs.count()).toBe(0);

    const parsedEncrypted = await parseBackupEnvelope(
      encryptedSerialized,
      'PhraseSecreteCardio2026!',
    );
    await restoreBackupToDatabase(activeDb, parsedEncrypted.payload);

    const restoredProfile = await activeDb.profile.get('active');
    const restoredLogs = await activeDb.dailyLogs.toArray();
    const preservedSettings = await activeDb.settings.get('settings');

    expect(restoredProfile?.displayName).toBe('Jean-Luc Martin');
    expect(restoredProfile?.dryWeightKg).toBe(75.5);
    expect(restoredLogs).toHaveLength(1);
    expect(restoredLogs[0]?.weightKg).toBe(75.8);
    expect(preservedSettings?.aiHelper.apiKey).toBe(secretApiKey);
    expect(preservedSettings?.pinHash).toBe(hashed.hash);
  });
});
