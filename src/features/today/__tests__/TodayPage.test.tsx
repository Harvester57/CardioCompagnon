import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {
  DbProvider,
  activeDb,
  clearPatientData,
  createDefaultSettings,
  ensureDbInitialized,
  getTodayIsoDate,
  saveAppSettings,
  saveProfile,
  upsertDailyLog,
} from '../../../db';
import TodayPage from '../index';

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

function renderTodayPage() {
  return render(
    <DbProvider initialDemoMode={false}>
      <MemoryRouter initialEntries={['/']}>
        <TodayPage />
      </MemoryRouter>
    </DbProvider>,
  );
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
  await ensureDbInitialized(activeDb);
  await clearPatientData(activeDb);
  await activeDb.settings.put(createDefaultSettings());
});

afterEach(() => {
  cleanup();
});

describe("Module Aujourd'hui (TodayPage)", () => {
  it('enregistre une saisie poids + EPOF dans Dexie et met a jour le bandeau triage (warning puis urgent)', async () => {
    const today = getTodayIsoDate();
    const twoDaysAgo = shiftIsoDate(today, -2);

    await saveProfile(activeDb, { dryWeightKg: 78.0 });
    await upsertDailyLog(activeDb, {
      date: twoDaysAgo,
      weightKg: 78.2,
      systolicBp: 112,
      diastolicBp: 68,
      heartRateBpm: 64,
      symptoms: emptySymptoms(),
    });

    renderTodayPage();

    expect(await screen.findByText('Saisie matinale rapide')).toBeInTheDocument();
    expect(screen.getByText('Suivi habituel')).toBeInTheDocument();
    expect(screen.getByRole('note', { name: 'Avertissement médical' })).toBeInTheDocument();

    const weightInput = screen.getByLabelText('Poids matinal (kg)');
    fireEvent.change(weightInput, { target: { value: '80,5' } });
    fireEvent.change(screen.getByLabelText('TA systolique (mmHg)'), { target: { value: '108' } });
    fireEvent.change(screen.getByLabelText('TA diastolique (mmHg)'), { target: { value: '66' } });
    fireEvent.change(screen.getByLabelText('Fréquence cardiaque (bpm)'), {
      target: { value: '65' },
    });

    // Comparaison en direct au poids sec (+2,5 kg) et aux 3 jours glissants (+2,3 kg)
    expect(screen.getByText('+2,5 kg')).toBeInTheDocument();
    expect(screen.getByText('+2,3 kg')).toBeInTheDocument();

    // Grille EPOF : oedemes en aggravation
    const oedemaGroup = screen.getByRole('group', { name: 'O -- Œdèmes (jambes, chevilles)' });
    fireEvent.click(within(oedemaGroup).getByRole('button', { name: 'En aggravation' }));

    fireEvent.click(screen.getByRole('button', { name: 'Enregistrer la saisie' }));

    await waitFor(async () => {
      const saved = await activeDb.dailyLogs.where('date').equals(today).first();
      expect(saved).toBeDefined();
      expect(saved?.weightKg).toBe(80.5);
      expect(saved?.systolicBp).toBe(108);
      expect(saved?.diastolicBp).toBe(66);
      expect(saved?.heartRateBpm).toBe(65);
      expect(saved?.symptoms.oedema).toBe('worsening');
    });

    // Alertes triage niveau warning + liens bibliotheque
    expect(await screen.findByText(/Prise de poids rapide/i)).toBeInTheDocument();
    expect(screen.getByText('Aggravation de signes EPOF')).toBeInTheDocument();

    const articleLinks = screen.getAllByRole('link', { name: /Consulter l'article associé/i });
    expect(articleLinks.length).toBeGreaterThanOrEqual(2);
    expect(articleLinks[0].getAttribute('href')).toMatch(/^\/library\?article=/);

    // Ajout d'un signe rouge (douleur thoracique) -> passage au niveau urgent + rappel 15 / 112 / 114
    fireEvent.click(screen.getByRole('button', { name: 'Douleur ou oppression thoracique' }));
    fireEvent.click(screen.getByRole('button', { name: 'Mettre à jour la saisie' }));

    expect(await screen.findByText("Signes d'alarme aigus (urgence)")).toBeInTheDocument();
    expect(
      screen.getByText(/Rappel urgences France : 15 \(SAMU\) \/ 112 \/ 114/i),
    ).toBeInTheDocument();
  });

  it('filtre correctement les courbes de tendances entre 7 j, 30 j et 90 j', async () => {
    const today = getTodayIsoDate();
    await saveProfile(activeDb, { dryWeightKg: 78.5 });

    await upsertDailyLog(activeDb, {
      date: shiftIsoDate(today, -2),
      weightKg: 78.5,
      systolicBp: 110,
      diastolicBp: 68,
      heartRateBpm: 62,
      symptoms: emptySymptoms(),
    });
    await upsertDailyLog(activeDb, {
      date: shiftIsoDate(today, -15),
      weightKg: 79.1,
      systolicBp: 114,
      diastolicBp: 70,
      heartRateBpm: 66,
      symptoms: emptySymptoms(),
    });
    await upsertDailyLog(activeDb, {
      date: shiftIsoDate(today, -60),
      weightKg: 80.2,
      systolicBp: 118,
      diastolicBp: 72,
      heartRateBpm: 70,
      symptoms: emptySymptoms(),
    });

    renderTodayPage();

    expect(await screen.findByText('Tendances et courbes')).toBeInTheDocument();

    const periodGroup = screen.getByRole('group', { name: 'Période des graphiques' });
    const btn7 = within(periodGroup).getByRole('button', { name: '7 j' });
    const btn30 = within(periodGroup).getByRole('button', { name: '30 j' });
    const btn90 = within(periodGroup).getByRole('button', { name: '90 j' });

    // Par defaut : 30 j -> 2 pesees (J-2 et J-15)
    expect(btn30).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('2 pesées sur 30 j')).toBeInTheDocument();

    // Passage a 7 j -> 1 pesee (J-2 uniquement)
    fireEvent.click(btn7);
    expect(btn7).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('1 pesée sur 7 j')).toBeInTheDocument();

    // Passage a 90 j -> 3 pesees (J-2, J-15, J-60)
    fireEvent.click(btn90);
    expect(btn90).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('3 pesées sur 90 j')).toBeInTheDocument();
  });

  it('affiche et persiste le check-in medicaments uniquement lorsque enableDailyPillCheckin est actif', async () => {
    const today = getTodayIsoDate();

    const medIds = await activeDb.medications.bulkAdd(
      [
        {
          pillar: 'beta_blocker',
          subClass: 'beta_blocker',
          innName: 'bisoprolol',
          frenchBrand: 'Cardensiel',
          doseLabel: '10 mg/j',
          status: 'at_target',
          scheduleSlots: ['matin'],
        },
        {
          pillar: 'lipid_lowering',
          subClass: 'statin',
          innName: 'rosuvastatine',
          frenchBrand: 'Crestor',
          doseLabel: '20 mg/j',
          status: 'active',
          scheduleSlots: ['soir'],
        },
        {
          pillar: 'loop_diuretic',
          subClass: 'loop_diuretic',
          innName: 'furosemide',
          frenchBrand: 'Lasilix',
          doseLabel: '40 mg/j',
          status: 'stopped',
          scheduleSlots: ['matin'],
        },
      ],
      { allKeys: true },
    );
    const bisoprololId = medIds[0] as number;

    renderTodayPage();
    expect(await screen.findByText('Saisie matinale rapide')).toBeInTheDocument();
    expect(screen.queryByText('Prise médicamenteuse quotidienne')).not.toBeInTheDocument();

    // Activation de l'option dans AppSettings
    await saveAppSettings(activeDb, { enableDailyPillCheckin: true });

    expect(await screen.findByText('Prise médicamenteuse quotidienne')).toBeInTheDocument();
    expect(screen.getByText('0 / 2 prises')).toBeInTheDocument();
    expect(screen.queryByText(/furosemide/i)).not.toBeInTheDocument();

    const bisoCheckbox = screen.getByRole('checkbox', { name: /bisoprolol \(Cardensiel\)/i });
    expect(bisoCheckbox).not.toBeChecked();

    fireEvent.click(bisoCheckbox);

    await waitFor(async () => {
      const intake = await activeDb.intakeLogs
        .where('[date+medicationId+slot]')
        .equals([today, bisoprololId, 'matin'])
        .first();
      expect(intake?.taken).toBe(true);
    });
    expect(await screen.findByText('1 / 2 prises')).toBeInTheDocument();

    // Decochage
    fireEvent.click(bisoCheckbox);
    await waitFor(async () => {
      const intake = await activeDb.intakeLogs
        .where('[date+medicationId+slot]')
        .equals([today, bisoprololId, 'matin'])
        .first();
      expect(intake?.taken).toBe(false);
    });
    expect(await screen.findByText('0 / 2 prises')).toBeInTheDocument();
  });

  it("permet de modifier et supprimer une saisie depuis l'historique recent", async () => {
    const today = getTodayIsoDate();
    const olderDate = shiftIsoDate(today, -3);

    await upsertDailyLog(activeDb, {
      date: olderDate,
      weightKg: 77.4,
      symptoms: emptySymptoms(),
      notes: 'Ancien releve',
    });
    await upsertDailyLog(activeDb, {
      date: today,
      weightKg: 78.0,
      symptoms: emptySymptoms(),
    });

    renderTodayPage();
    expect(await screen.findByText('Historique récent des saisies')).toBeInTheDocument();
    expect(screen.getByText('Ancien releve')).toBeInTheDocument();

    const [y, m, d] = olderDate.split('-');
    const olderDateFr = `${d}/${m}/${y}`;

    // Modification d'une saisie passee
    fireEvent.click(screen.getByRole('button', { name: `Modifier la saisie du ${olderDateFr}` }));
    const weightInput = screen.getByLabelText('Poids matinal (kg)');
    expect(weightInput).toHaveValue('77,4');

    fireEvent.change(weightInput, { target: { value: '77,9' } });
    fireEvent.click(screen.getByRole('button', { name: 'Mettre à jour la saisie' }));

    await waitFor(async () => {
      const updated = await activeDb.dailyLogs.where('date').equals(olderDate).first();
      expect(updated?.weightKg).toBe(77.9);
    });

    // Suppression avec confirmation en 2 temps
    fireEvent.click(screen.getByRole('button', { name: `Supprimer la saisie du ${olderDateFr}` }));
    fireEvent.click(screen.getByRole('button', { name: 'Confirmer' }));

    await waitFor(async () => {
      const deleted = await activeDb.dailyLogs.where('date').equals(olderDate).first();
      expect(deleted).toBeUndefined();
    });
  });

  it('affiche des etats vides propres et valide les saisies numeriques invalides', async () => {
    renderTodayPage();

    expect(await screen.findByText('Saisie matinale rapide')).toBeInTheDocument();
    expect(
      screen.getByText(/Aucune pesée enregistrée sur les 30 derniers jours/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Aucune saisie enregistrée pour le moment/i),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Poids matinal (kg)'), { target: { value: 'abc' } });
    fireEvent.click(screen.getByRole('button', { name: 'Enregistrer la saisie' }));

    expect(
      await screen.findByText(/Veuillez saisir un poids valide en kilogrammes/i),
    ).toBeInTheDocument();
    expect(await activeDb.dailyLogs.count()).toBe(0);
  });

  it('pre-remplit automatiquement la saisie du jour en mode decouverte', async () => {
    render(
      <DbProvider initialDemoMode={true}>
        <MemoryRouter initialEntries={['/']}>
          <TodayPage />
        </MemoryRouter>
      </DbProvider>,
    );

    expect(await screen.findByText('Date de référence : 24/11/2026')).toBeInTheDocument();
    const weightInput = await screen.findByLabelText('Poids matinal (kg)');
    await waitFor(() => {
      expect(weightInput).toHaveValue('79,3');
    });
    expect(screen.getByText('+0,8 kg')).toBeInTheDocument();
  });
});
