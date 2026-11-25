import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { INTERACTIONS_CATALOG } from '../../../content/fr';
import {
  CardioDatabase,
  DEMO_REFERENCE_DATE,
  createDefaultProfile,
  ensureDbInitialized,
} from '../../../db';
import { DbContext, type DbContextValue } from '../../../db/db-context';
import MedsPage from '../index';

describe('Module W2-UI-Meds (Traitements & Securite)', () => {
  const createdDbs: CardioDatabase[] = [];

  async function createTestDb(suffix: string): Promise<CardioDatabase> {
    const db = new CardioDatabase(`CardioMedsTest_${suffix}_${Date.now()}_${Math.random()}`);
    createdDbs.push(db);
    await ensureDbInitialized(db);
    return db;
  }

  function renderMedsPage(db: CardioDatabase, initialEntries: string[] = ['/meds']) {
    const contextValue: DbContextValue = {
      db,
      isDemoMode: true,
      isReady: true,
      setDemoMode: async () => {},
      toggleDemoMode: async () => {},
      resetDemo: async () => {},
    };

    return render(
      <DbContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={initialEntries}>
          <MedsPage />
        </MemoryRouter>
      </DbContext.Provider>,
    );
  }

  afterEach(async () => {
    cleanup();
    for (const db of createdDbs.splice(0, createdDbs.length)) {
      db.close();
      await db.delete();
    }
  });

  it('affiche le bandeau medical, les 4 piliers ESC 2026 avec progression et les alertes du moteur', async () => {
    const db = await createTestDb('four-pillars');
    await db.profile.put({
      ...createDefaultProfile('2026-11-24T08:00:00.000Z'),
      hfStage: 'C',
      nyhaClass: 2,
    });

    await db.medications.bulkAdd([
      {
        pillar: 'raas_arni',
        subClass: 'arni',
        innName: 'sacubitril/valsartan',
        frenchBrand: 'Entresto',
        doseLabel: '49/51 mg x 2/j',
        dosePercentOfTarget: 50,
        status: 'titrating',
        lastDoseChangeAt: '2026-11-20',
        switchedFromAceIAt: '2026-11-18',
        scheduleSlots: ['matin', 'soir'],
      },
      {
        pillar: 'beta_blocker',
        subClass: 'beta_blocker',
        innName: 'bisoprolol',
        frenchBrand: 'Cardensiel',
        doseLabel: '10 mg/j',
        dosePercentOfTarget: 100,
        status: 'at_target',
        scheduleSlots: ['matin'],
      },
      {
        pillar: 'sglt2i',
        subClass: 'sglt2i',
        innName: 'dapagliflozine',
        frenchBrand: 'Forxiga',
        doseLabel: '10 mg/j',
        dosePercentOfTarget: 100,
        status: 'at_target',
        scheduleSlots: ['matin'],
      },
      {
        pillar: 'other',
        subClass: 'other',
        innName: 'ibuprofene',
        frenchBrand: 'Advil',
        doseLabel: '400 mg ponctuel',
        status: 'active',
      },
    ]);

    renderMedsPage(db);

    // Compteur 3 / 4 piliers actifs (attend la fin du chargement Dexie)
    expect(await screen.findByLabelText('3 piliers actifs sur 4')).toBeInTheDocument();

    // Bandeau medical obligatoire
    expect(screen.getByRole('note', { name: /Avertissement médical/i })).toBeInTheDocument();

    // Verification des 4 cartes piliers et barres de progression
    const raasCard = screen.getByRole('article', { name: /Pilier 1 -- IEC, ARA2 ou ARNI/i });
    expect(within(raasCard).getByText(/sacubitril\/valsartan/i)).toBeInTheDocument();
    expect(within(raasCard).getByText(/Entresto/i)).toBeInTheDocument();
    expect(within(raasCard).getByText('49/51 mg x 2/j')).toBeInTheDocument();
    expect(within(raasCard).getByText(/97\/103 mg × 2\/j/i)).toBeInTheDocument();
    expect(within(raasCard).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');

    const bbCard = screen.getByRole('article', { name: /Pilier 2 -- Bêtabloquant/i });
    expect(within(bbCard).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');

    const mraCard = screen.getByRole('article', {
      name: /Pilier 3 -- Antagoniste des récepteurs minéralocorticoïdes/i,
    });
    expect(within(mraCard).getByText(/À vérifier/i)).toBeInTheDocument();

    const sglt2Card = screen.getByRole('article', { name: /Pilier 4 -- Inhibiteur du SGLT2/i });
    expect(within(sglt2Card).getByText(/dapagliflozine/i)).toBeInTheDocument();

    // Alertes issues de evaluatePatientState
    expect(screen.getByText(/Relais IEC vers ARNI : rappel du délai de 36 heures/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Contrôle biologique post-titration \(créatinine et potassium\)/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Médicament déconseillé ou contre-indiqué en ICFER détecté/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Pilier\(s\) du traitement de fond à vérifier en consultation/i),
    ).toBeInTheDocument();
  });

  it('adapte le contexte Stade B / HFimpEF et enregistre une raison de non-prescription', async () => {
    const db = await createTestDb('stage-b-hfimpef');
    const baseProfile = createDefaultProfile('2026-11-24T08:00:00.000Z');
    await db.profile.put({
      ...baseProfile,
      hfStage: 'B',
      modules: {
        ...baseProfile.modules,
        hfImpEf: true,
      },
    });

    renderMedsPage(db);

    expect(
      await screen.findByText(/Contexte Stade B -- Dysfonction ventriculaire gauche asymptomatique/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/FEVG améliorée \(HFimpEF\) -- Poursuite des traitements de fond/i),
    ).toBeInTheDocument();

    // Documenter une raison de non-prescription sur le pilier ARM
    const mraCard = screen.getByRole('article', {
      name: /Pilier 3 -- Antagoniste des récepteurs minéralocorticoïdes/i,
    });
    fireEvent.click(within(mraCard).getByRole('button', { name: /Documenter une raison/i }));

    const reasonInput = within(mraCard).getByLabelText(/Raison médicale de non-prescription/i);
    fireEvent.change(reasonInput, { target: { value: 'Hyperkaliémie antérieure documentée' } });
    fireEvent.click(within(mraCard).getByRole('button', { name: /Enregistrer la raison/i }));

    await waitFor(() => {
      expect(within(mraCard).getByText(/Non prescrit \(documenté\)/i)).toBeInTheDocument();
      expect(
        within(mraCard).getByText(/Hyperkaliémie antérieure documentée/i),
      ).toBeInTheDocument();
    });

    const savedMeds = await db.medications.where('pillar').equals('mra').toArray();
    expect(savedMeds).toHaveLength(1);
    expect(savedMeds[0].notPrescribedReason).toBe('Hyperkaliémie antérieure documentée');
  });

  it('permet d ajouter un traitement depuis MEDICATION_REFERENCES et d enregistrer un nouveau palier avec DoseChangeEvent', async () => {
    const db = await createTestDb('add-and-titrate');
    await db.profile.put({
      ...createDefaultProfile('2026-11-24T08:00:00.000Z'),
      hfStage: 'C',
    });

    renderMedsPage(db);

    // Ouvrir le formulaire d'ajout
    const addButton = await screen.findByRole('button', { name: /Ajouter un traitement/i });
    fireEvent.click(addButton);

    // Choisir Eplerenone depuis l'aide MEDICATION_REFERENCES
    fireEvent.click(screen.getByLabelText(/Afficher toutes les classes/i));
    const refSelect = screen.getByLabelText(/Aide à la saisie/i);
    fireEvent.change(refSelect, { target: { value: 'eplerenone' } });

    expect(screen.getByLabelText(/Molécule \(DCI\)/i)).toHaveValue('Éplérénone');
    expect(screen.getByLabelText(/Nom de marque en France/i)).toHaveValue('Inspra');
    expect(screen.getByLabelText(/Posologie actuelle/i)).toHaveValue('25 mg × 1/j');

    fireEvent.change(screen.getByLabelText(/% de la dose cible/i), { target: { value: '50' } });
    fireEvent.change(screen.getByLabelText(/Statut du traitement/i), {
      target: { value: 'titrating' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Ajouter ce traitement/i }));

    await waitFor(async () => {
      expect(await db.medications.count()).toBe(1);
    });

    const mraCard = screen.getByRole('article', {
      name: /Pilier 3 -- Antagoniste des récepteurs minéralocorticoïdes/i,
    });
    expect(await within(mraCard).findByText('Éplérénone')).toBeInTheDocument();

    // Declencher "Nouveau palier de dose"
    fireEvent.click(within(mraCard).getByRole('button', { name: /Nouveau palier de dose/i }));

    expect(
      screen.getByText(/Nouveau palier de dose -- Éplérénone \(Inspra\)/i),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Nouvelle posologie/i), {
      target: { value: '50 mg x 1/j' },
    });
    fireEvent.change(screen.getByLabelText(/Nouveau % de la dose cible/i), {
      target: { value: '100' },
    });
    fireEvent.change(screen.getByLabelText(/Statut après ce palier/i), {
      target: { value: 'at_target' },
    });
    fireEvent.change(screen.getByLabelText(/Motif ou note de consultation/i), {
      target: { value: 'Atteinte dose cible validee ; bilan creatinine/K+ a J+10' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enregistrer ce palier/i }));

    await waitFor(async () => {
      const meds = await db.medications.toArray();
      const events = await db.doseChanges.toArray();
      expect(meds[0].doseLabel).toBe('50 mg x 1/j');
      expect(meds[0].lastDoseChangeAt).toBe(DEMO_REFERENCE_DATE);
      expect(meds[0].dosePercentOfTarget).toBe(100);
      expect(meds[0].status).toBe('at_target');
      expect(events).toHaveLength(1);
      expect(events[0].previousDoseLabel).toBe('25 mg × 1/j');
      expect(events[0].newDoseLabel).toBe('50 mg x 1/j');
      expect(events[0].date).toBe(DEMO_REFERENCE_DATE);
    });

    // Verification de l'affichage dans le journal chronologique et de l'alerte bilan post-titration
    expect(
      await screen.findByText(/Atteinte dose cible validee ; bilan creatinine\/K\+ a J\+10/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Contrôle biologique post-titration \(créatinine et potassium\)/i),
    ).toBeInTheDocument();
  });

  it('filtre le verificateur d interactions sur toutes les fiches, par verdict, par recherche et sur les piliers actifs', async () => {
    const db = await createTestDb('interactions');
    await db.medications.bulkAdd([
      {
        pillar: 'sglt2i',
        subClass: 'sglt2i',
        innName: 'dapagliflozine',
        frenchBrand: 'Forxiga',
        doseLabel: '10 mg/j',
        status: 'at_target',
      },
      {
        pillar: 'lipid_lowering',
        subClass: 'statin',
        innName: 'rosuvastatine',
        frenchBrand: 'Crestor',
        doseLabel: '20 mg/j',
        status: 'active',
      },
    ]);

    renderMedsPage(db);

    const interactionsTab = await screen.findByRole('tab', { name: /Sécurité & Interactions/i });
    fireEvent.click(interactionsTab);

    expect(
      screen.getByText(
        new RegExp(`${INTERACTIONS_CATALOG.length} fiches affichées sur ${INTERACTIONS_CATALOG.length}`),
      ),
    ).toBeInTheDocument();

    // Activer le filtre "Concerne mes traitements actifs"
    const activeOnlyCheckbox = screen.getByLabelText(/Concerne mes traitements actifs/i);
    fireEvent.click(activeOnlyCheckbox);

    // Un item concernant sglt2i reste affiche, un item uniquement anticoagulant (vitamine K) disparait
    expect(
      screen.getByText(/Régimes cétogènes, régimes très hypocaloriques et jeûnes prolongés sous iSGLT2/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Levure de riz rouge \(monacoline K\)/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Suppléments de vitamine K et variations brutales/i),
    ).not.toBeInTheDocument();

    // Filtrer par verdict "A eviter en automedication" et rechercher "levure"
    fireEvent.click(screen.getByRole('button', { name: /À éviter en automédication/i }));
    fireEvent.change(screen.getByLabelText(/Rechercher un produit/i), {
      target: { value: 'levure' },
    });

    expect(
      screen.getByText(new RegExp(`1 fiche affichée sur ${INTERACTIONS_CATALOG.length}`, 'i')),
    ).toBeInTheDocument();
    const articleLink = screen.getByRole('link', { name: /Lire la fiche scientifique/i });
    expect(articleLink).toHaveAttribute(
      'href',
      '/library?article=interactions-complements-aliments-medicaments',
    );
  });

  it('affiche les explications Jours de maladie et sauvegarde profile.sickDayPlanNote via saveProfile', async () => {
    const db = await createTestDb('sick-day-plan');
    await db.medications.add({
      pillar: 'sglt2i',
      subClass: 'sglt2i',
      innName: 'dapagliflozine',
      frenchBrand: 'Forxiga',
      doseLabel: '10 mg/j',
      status: 'at_target',
    });

    renderMedsPage(db);

    const sickDayTab = await screen.findByRole('tab', { name: /Jours de maladie/i });
    fireEvent.click(sickDayTab);

    expect(
      screen.getByText(/Comprendre les « jours de maladie » en insuffisance cardiaque/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Vigilance spécifique sous iSGLT2 \(acidocétose\)/i)).toBeInTheDocument();

    const textarea = screen.getByLabelText(/Consignes validées par votre équipe médicale/i);
    const customNote =
      'Plan valide par Dr Moreau : appeler le cabinet si vomissements > 24 h ; ne jamais arreter le bisoprolol.';
    fireEvent.change(textarea, { target: { value: customNote } });
    fireEvent.click(screen.getByRole('button', { name: /Enregistrer mes consignes/i }));

    expect(
      await screen.findByText(/Vos consignes « jours de maladie » ont été enregistrées/i),
    ).toBeInTheDocument();

    const updatedProfile = await db.profile.get('active');
    expect(updatedProfile?.sickDayPlanNote).toBe(customNote);
  });

  it('permet de modifier puis supprimer un traitement avec nettoyage de son historique de titration', async () => {
    const db = await createTestDb('edit-delete');
    const medId = await db.medications.add({
      pillar: 'loop_diuretic',
      subClass: 'loop_diuretic',
      innName: 'furosemide',
      frenchBrand: 'Lasilix',
      doseLabel: '40 mg/j',
      status: 'active',
    });
    await db.doseChanges.add({
      medicationId: medId,
      date: '2026-11-10',
      previousDoseLabel: '20 mg/j',
      newDoseLabel: '40 mg/j',
      reason: 'Ajustement initial',
    });

    renderMedsPage(db);

    const editBtn = await screen.findByRole('button', { name: /Modifier furosemide/i });
    fireEvent.click(editBtn);

    fireEvent.change(screen.getByLabelText(/Posologie actuelle/i), {
      target: { value: '20 mg/j' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Enregistrer les modifications/i }));

    await waitFor(async () => {
      const updated = await db.medications.get(medId);
      expect(updated?.doseLabel).toBe('20 mg/j');
    });

    const deleteBtn = screen.getByRole('button', { name: /Supprimer furosemide/i });
    fireEvent.click(deleteBtn);
    fireEvent.click(screen.getByRole('button', { name: /^Confirmer$/i }));

    await waitFor(async () => {
      expect(await db.medications.count()).toBe(0);
      expect(await db.doseChanges.count()).toBe(0);
    });
  });
});
