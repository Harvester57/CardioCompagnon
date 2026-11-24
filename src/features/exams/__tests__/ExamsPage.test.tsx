import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DbProvider,
  activeDb,
  createDefaultProfile,
  createDefaultSettings,
  demoDb,
  ensureDbInitialized,
  resetDemoDatabase,
} from '../../../db';
import * as services from '../../../services';
import type { ExtractionProposal } from '../../../types';
import { buildSeparatedLvefSeries } from '../constants';
import ExamsPage from '../index';

vi.mock('../../../services', async (importOriginal) => {
  const actual = await importOriginal<typeof services>();
  return {
    ...actual,
    extractReportWithAi: vi.fn(),
  };
});

const mockedExtractReportWithAi = vi.mocked(services.extractReportWithAi);

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  globalThis.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver;
});

async function clearActiveTables() {
  await ensureDbInitialized(activeDb);
  await Promise.all([
    activeDb.dailyLogs.clear(),
    activeDb.medications.clear(),
    activeDb.doseChanges.clear(),
    activeDb.intakeLogs.clear(),
    activeDb.labs.clear(),
    activeDb.imaging.clear(),
    activeDb.events.clear(),
    activeDb.adminProgress.clear(),
    activeDb.questionTracking.clear(),
  ]);
  await activeDb.profile.put(createDefaultProfile('2026-11-24T08:00:00.000Z'));
  await activeDb.settings.put(createDefaultSettings());
}

function renderExamsPage(options?: { initialDemoMode?: boolean; initialRoute?: string }) {
  return render(
    <MemoryRouter initialEntries={[options?.initialRoute ?? '/exams']}>
      <DbProvider initialDemoMode={options?.initialDemoMode ?? false}>
        <ExamsPage />
      </DbProvider>
    </MemoryRouter>,
  );
}

describe('Module Examens & Chiffres (W2-UI-Exams)', () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    window.localStorage.clear();
    await clearActiveTables();
  });

  afterEach(() => {
    cleanup();
  });

  it('separe strictement les points ETT et IRM dans buildSeparatedLvefSeries', () => {
    const series = buildSeparatedLvefSeries([
      { date: '2025-11-12', modality: 'ett', lvefPercent: 30 },
      { date: '2026-03-20', modality: 'irm', lvefPercent: 26 },
      { date: '2026-09-15', modality: 'ett', lvefPercent: 35 },
    ]);

    expect(series).toHaveLength(3);
    expect(series[0]).toMatchObject({ date: '2025-11-12', ettLvef: 30 });
    expect(series[0].irmLvef).toBeUndefined();
    expect(series[1]).toMatchObject({ date: '2026-03-20', irmLvef: 26 });
    expect(series[1].ettLvef).toBeUndefined();
    expect(series[2]).toMatchObject({ date: '2026-09-15', ettLvef: 35 });
    expect(series[2].irmLvef).toBeUndefined();
  });

  it('affiche le bandeau medical, les alertes examens/dispositifs avec liens bibliotheque et separe ETT vs IRM', async () => {
    await resetDemoDatabase(demoDb);
    renderExamsPage({ initialDemoMode: true });

    await waitFor(() => {
      expect(screen.getByText(/Points d'attention examens et dispositifs/i)).toBeInTheDocument();
    });

    // Bandeau DisclaimerBanner medical
    expect(screen.getByRole('note', { name: /Avertissement médical/i })).toBeInTheDocument();

    // Regles exams & devices declenchees sur le profil demo
    expect(
      screen.getByText(/ETT et IRM cardiaque : ne pas comparer les chiffres directement/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Carence martiale \(CST < 20 %\)/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Objectif cholestérol LDL coronaire non encore atteint/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Réévaluation de la FEVG à ≥ 3 mois et discussion DAI/i),
    ).toBeInTheDocument();

    // Liens vers /library?article=<slug>
    const libraryLinks = screen.getAllByRole('link', { name: /Lire la fiche/i });
    expect(libraryLinks.length).toBeGreaterThanOrEqual(4);
    expect(libraryLinks.some((a) => a.getAttribute('href') === '/library?article=fraction-dejection')).toBe(
      true,
    );

    // Encadre explicatif ETT vs IRM (~5,5 points) et cartes separees
    expect(screen.getAllByText(/5,5 points plus bas/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/Dernière ETT \(échocardiographie\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Dernière IRM cardiaque/i)).toBeInTheDocument();
    expect(screen.getByTestId('lvef-separated-chart')).toBeInTheDocument();
    expect(screen.getByText(/Série ETT : 2 mesure\(s\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Série IRM cardiaque : 1 mesure\(s\)/i)).toBeInTheDocument();

    // Normes de volumes adaptees au sexe Homme (profil demo)
    expect(screen.getByText(/34 - 74 mL\/m²/i)).toBeInTheDocument();
    expect(screen.getByText(/50 - 108 mL\/m²/i)).toBeInTheDocument();
  });

  it('adapte les normes de volumes VTDi/VTSi pour le sexe Femme et permet ajout/suppression imagerie', async () => {
    await activeDb.profile.put({
      ...createDefaultProfile('2026-11-24T08:00:00.000Z'),
      sex: 'F',
    });

    renderExamsPage({ initialDemoMode: false });

    await waitFor(() => {
      expect(screen.getByText(/adaptées à votre profil \(Femme\)/i)).toBeInTheDocument();
    });

    // Normes Femme ETT (29-61) et IRM (50-96)
    expect(screen.getByText(/29 - 61 mL\/m²/i)).toBeInTheDocument();
    expect(screen.getByText(/50 - 96 mL\/m²/i)).toBeInTheDocument();

    // Ajouter une IRM cardiaque avec cicatrice LGE
    fireEvent.click(screen.getByRole('button', { name: /Ajouter IRM/i }));

    fireEvent.change(screen.getByLabelText(/Date de l'examen/i), {
      target: { value: '2026-11-20' },
    });
    fireEvent.change(screen.getByLabelText(/FEVG \(%\)/i), {
      target: { value: '31' },
    });
    fireEvent.change(screen.getByLabelText(/VTDi \(mL\/m²\)/i), {
      target: { value: '94' },
    });
    fireEvent.click(screen.getByLabelText(/Cicatrice LGE présente/i));
    fireEvent.change(screen.getByLabelText(/Étendue de la cicatrice/i), {
      target: { value: '15' },
    });
    fireEvent.change(screen.getByLabelText(/Répartition LGE/i), {
      target: { value: 'subendocardial_transmural' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enregistrer l'examen/i }));

    await waitFor(async () => {
      const saved = await activeDb.imaging.toArray();
      expect(saved).toHaveLength(1);
      expect(saved[0].modality).toBe('irm');
      expect(saved[0].lvefPercent).toBe(31);
      expect(saved[0].lvedviMlM2).toBe(94);
      expect(saved[0].lgeScarPresent).toBe(true);
      expect(saved[0].lgeScarPercent).toBe(15);
    });

    // Supprimer l'examen cree
    const deleteBtn = await screen.findByRole('button', {
      name: /Supprimer l'examen IRM du 20\/11\/2026/i,
    });
    fireEvent.click(deleteBtn);
    fireEvent.click(screen.getByRole('button', { name: /^Confirmer$/i }));

    await waitFor(async () => {
      expect(await activeDb.imaging.count()).toBe(0);
    });
  });

  it('convertit les unites LDL (mmol/L -> g/L) et creatinine (mg/L -> umol/L) lors de la saisie biologique', async () => {
    await activeDb.profile.put({
      ...createDefaultProfile('2026-11-24T08:00:00.000Z'),
      baselineLdlGL: 1.5,
    });
    await activeDb.medications.add({
      pillar: 'raas_arni',
      subClass: 'arni',
      innName: 'sacubitril/valsartan',
      frenchBrand: 'Entresto',
      doseLabel: '49/51 mg x 2/j',
      status: 'active',
    });

    renderExamsPage({ initialDemoMode: false, initialRoute: '/exams?tab=biology' });

    await waitFor(() => {
      expect(screen.getByText(/Peptides natriurétiques/i)).toBeInTheDocument();
    });

    // Avertissement ARNI actif
    expect(screen.getByText(/Traitement ARNI actif/i)).toBeInTheDocument();

    // Ouvrir le formulaire biologique
    fireEvent.click(screen.getByRole('button', { name: /Ajouter un bilan/i }));

    fireEvent.change(screen.getByLabelText(/Date du prélèvement/i), {
      target: { value: '2026-11-22' },
    });
    fireEvent.change(screen.getByLabelText(/NT-proBNP \(pg\/mL\)/i), {
      target: { value: '520' },
    });

    // Basculer creatinine en mg/L et saisir 12,0 -> doit convertir en 106 µmol/L
    fireEvent.click(
      screen.getByRole('button', { name: /Basculer l'unité de créatinine/i }),
    );
    fireEvent.change(screen.getByLabelText(/Créatinine \(mg\/L\)/i), {
      target: { value: '12,0' },
    });
    expect(screen.getByTestId('creatinine-conversion-preview')).toHaveTextContent('106 µmol/L');

    // Basculer LDL en mmol/L et saisir 1,42 -> doit convertir en 0,55 g/L
    fireEvent.click(screen.getByRole('button', { name: /Basculer l'unité de LDL/i }));
    fireEvent.change(screen.getByLabelText(/LDL-c \(mmol\/L\)/i), {
      target: { value: '1,42' },
    });
    expect(screen.getByTestId('ldl-conversion-preview')).toHaveTextContent('0,55 g/L');

    fireEvent.change(screen.getByLabelText(/Potassium K\+/i), {
      target: { value: '4,8' },
    });
    fireEvent.change(screen.getByLabelText(/CST \(%\)/i), {
      target: { value: '19' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enregistrer le bilan/i }));

    await waitFor(async () => {
      const savedLabs = await activeDb.labs.toArray();
      expect(savedLabs).toHaveLength(1);
      expect(savedLabs[0].ntProBnpPgMl).toBe(520);
      expect(savedLabs[0].creatinineUmolL).toBe(106);
      expect(savedLabs[0].ldlGL).toBe(0.55);
      expect(savedLabs[0].potassiumMmolL).toBe(4.8);
      expect(savedLabs[0].tsatPercent).toBe(19);
    });

    // Verification de l'affichage des biomarqueurs en virgules francaises (cartes + historique)
    await waitFor(() => {
      expect(screen.getAllByText(/0,55 g\/L \(1,42 mmol\/L\)/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/106 µmol\/L \(12,0 mg\/L\)/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/4,8 mmol\/L/i).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('permet d ajouter un ECG (QRS >= 130 ms + BBG) et un bilan sommeil (SACS + alerte ASV)', async () => {
    await activeDb.imaging.add({
      date: '2026-10-01',
      modality: 'ett',
      lvefPercent: 32,
    });

    renderExamsPage({ initialDemoMode: false, initialRoute: '/exams?tab=ecg_sleep' });

    await waitFor(() => {
      expect(screen.getByText(/Électrocardiogramme \(ECG\)/i)).toBeInTheDocument();
    });

    // Rappel contre-indication ASV visible dans l'onglet Sommeil
    expect(
      screen.getByText(/Contre-indication de l'ASV en cas de SACS \+ ICFER/i),
    ).toBeInTheDocument();

    // 1. Ajouter un ECG avec QRS = 142 ms et BBG
    fireEvent.click(screen.getByRole('button', { name: /Ajouter un ECG/i }));
    fireEvent.change(screen.getByLabelText(/Date de l'ECG/i), {
      target: { value: '2026-11-21' },
    });
    fireEvent.change(screen.getByLabelText(/Largeur QRS \(ms\)/i), {
      target: { value: '142' },
    });
    fireEvent.click(screen.getByLabelText(/Bloc de branche gauche/i));
    fireEvent.click(screen.getByRole('button', { name: /Enregistrer l'ECG/i }));

    await waitFor(async () => {
      const ecgList = await activeDb.events.where('type').equals('ecg_check').toArray();
      expect(ecgList).toHaveLength(1);
      expect(ecgList[0].details.qrsMs).toBe(142);
      expect(ecgList[0].details.lbbb).toBe(true);
    });

    // La regle CRT_QRS_DISCUSSION doit apparaitre automatiquement dans les alertes en tete
    await waitFor(() => {
      expect(screen.getByText(/QRS élargi \(142 ms\)/i)).toBeInTheDocument();
    });

    // 2. Ajouter un bilan sommeil de type SACS
    fireEvent.click(screen.getByRole('button', { name: /Ajouter un bilan sommeil/i }));
    fireEvent.change(screen.getByLabelText(/Date du bilan/i), {
      target: { value: '2026-11-18' },
    });
    fireEvent.change(screen.getByLabelText(/IAH \(événements \/ heure\)/i), {
      target: { value: '27,5' },
    });
    fireEvent.change(screen.getByLabelText(/Type d'apnée/i), {
      target: { value: 'csa' },
    });
    fireEvent.change(screen.getByLabelText(/Traitement \/ appareillage/i), {
      target: { value: 'cpap' },
    });

    // Alerte inline SACS/ASV affichee lors de la selection SACS
    expect(screen.getByText(/Point de vigilance SACS \/ ASV/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Enregistrer le bilan sommeil/i }));

    await waitFor(async () => {
      const sleepList = await activeDb.events.where('type').equals('sleep_study').toArray();
      expect(sleepList).toHaveLength(1);
      expect(sleepList[0].details.ahi).toBe(27.5);
      expect(sleepList[0].details.apnoeaType).toBe('csa');
      expect(sleepList[0].details.treatment).toBe('cpap');
    });
  });

  it('explique que l import IA est desactive par defaut puis gere le flux complet de verification humaine quand active', async () => {
    // 1. Etat par defaut : IA desactivee
    renderExamsPage({ initialDemoMode: false });

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Import assisté par IA \(optionnel\)/i }),
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /Import assisté par IA \(optionnel\)/i }));

    const dialog = screen.getByRole('dialog');
    expect(
      within(dialog).getByText(/Option désactivée par défaut pour protéger votre vie privée/i),
    ).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: /Activer dans Paramètres/i })).toHaveAttribute(
      'href',
      '/settings',
    );

    // 2. Activer l'assistant IA dans les parametres locaux
    await act(async () => {
      await activeDb.settings.put({
        ...createDefaultSettings(),
        aiHelper: {
          enabled: true,
          provider: 'gemini',
          apiKey: 'test-key-local',
        },
      });
    });

    const mockProposal: ExtractionProposal = {
      kind: 'lab',
      extractedFields: {
        date: '2026-11-23',
        ntProBnpPgMl: 485,
        ldlGL: 0.49,
        potassiumMmolL: 4.5,
        creatinineUmolL: 96,
      },
      warningsFr: [
        'Verification humaine obligatoire : veuillez relire et confirmer chaque valeur.',
        'LDL converti de mmol/L vers g/L : verifiez l unite sur votre compte-rendu.',
      ],
      rawModelNote: 'Extraction realisee a partir du texte colle.',
    };
    mockedExtractReportWithAi.mockResolvedValueOnce(mockProposal);

    await waitFor(() => {
      expect(within(dialog).getByText(/Garde-fou vie privée avant envoi/i)).toBeInTheDocument();
    });

    // Tenter d'analyser sans cocher le consentement vie privee -> bloque
    fireEvent.change(within(dialog).getByLabelText(/Coller le texte anonymisé/i), {
      target: { value: 'NT-proBNP 485 pg/mL, LDL 0,49 g/L, K+ 4,5 mmol/L' },
    });
    fireEvent.click(within(dialog).getByRole('button', { name: /Analyser le compte-rendu/i }));

    expect(
      within(dialog).getByText(/Veuillez confirmer que les informations personnelles/i),
    ).toBeInTheDocument();
    expect(mockedExtractReportWithAi).not.toHaveBeenCalled();

    // Cocher le consentement et lancer l'analyse
    fireEvent.click(within(dialog).getByLabelText(/Je confirme avoir retiré mon nom/i));
    fireEvent.click(within(dialog).getByRole('button', { name: /Analyser le compte-rendu/i }));

    await waitFor(() => {
      expect(mockedExtractReportWithAi).toHaveBeenCalledTimes(1);
      expect(
        within(dialog).getByText(/LDL converti de mmol\/L vers g\/L/i),
      ).toBeInTheDocument();
    });

    // Aucune ecriture en base avant validation humaine explicite
    expect(await activeDb.labs.count()).toBe(0);

    // L'utilisateur verifie et ajuste un champ avant enregistrement
    const ldlReviewInput = within(dialog).getByLabelText(/LDL-c \(g\/L\)/i);
    expect(ldlReviewInput).toHaveValue('0,49');
    fireEvent.change(ldlReviewInput, { target: { value: '0,51' } });

    // Validation humaine explicite -> ecriture dans Dexie
    fireEvent.click(
      within(dialog).getByRole('button', { name: /Valider et enregistrer dans mon dossier/i }),
    );

    await waitFor(async () => {
      const savedLabs = await activeDb.labs.toArray();
      expect(savedLabs).toHaveLength(1);
      expect(savedLabs[0].date).toBe('2026-11-23');
      expect(savedLabs[0].ntProBnpPgMl).toBe(485);
      expect(savedLabs[0].ldlGL).toBe(0.51);
      expect(savedLabs[0].potassiumMmolL).toBe(4.5);
      expect(savedLabs[0].creatinineUmolL).toBe(96);
    });
  });
});
