import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { QUESTIONS_CATALOG } from '../../../content/fr';
import { DbProvider, DEMO_REFERENCE_DATE, demoDb, seedDemoDatabase } from '../../../db';
import PlanPage from '../index';

function renderPlanPage(initialEntry = '/plan') {
  return render(
    <DbProvider initialDemoMode>
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes>
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/library" element={<div>Bibliotheque cible</div>} />
          <Route path="/settings" element={<div>Parametres cible</div>} />
        </Routes>
      </MemoryRouter>
    </DbProvider>,
  );
}

describe('Module Plan & Consultations (PlanPage)', () => {
  beforeEach(async () => {
    await seedDemoDatabase(demoDb, true);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('affiche le bandeau medical, le triage deterministe, les regles priorisees, les filtres et les liens articles', async () => {
    await demoDb.dailyLogs.where('date').equals(DEMO_REFERENCE_DATE).modify({
      symptoms: {
        dyspnoea: 'none',
        oedema: 'mild',
        fatigue: 'none',
        dizziness: false,
        palpitations: false,
        chestPain: true,
        persistentCough: false,
        appetiteLoss: false,
      },
    });

    renderPlanPage('/plan');

    expect(screen.getByRole('note', { name: /Avertissement médical/i })).toBeInTheDocument();

    const planList = await screen.findByRole('list', {
      name: /Points prioritaires de votre plan/i,
    });
    const listItems = within(planList).getAllByRole('listitem');
    expect(listItems.length).toBeGreaterThanOrEqual(4);

    // Le premier element doit correspondre a l alerte urgente EPOF (douleur thoracique)
    expect(within(listItems[0]).getByText(/Urgence — appeler le 15 \/ 112/i)).toBeInTheDocument();
    expect(within(listItems[0]).getByText(/Action suggérée/i)).toBeInTheDocument();

    const articleLinks = within(planList).getAllByRole('link', {
      name: /Lire l'article scientifique/i,
    });
    expect(articleLinks.length).toBe(listItems.length);
    expect(articleLinks[0]).toHaveAttribute('href', expect.stringMatching(/^\/library\?article=/));

    // Filtrage par categorie "Examens & biologie"
    const categoryGroup = screen.getByRole('group', {
      name: /Filtres par catégorie du plan vivant/i,
    });
    const examsFilterBtn = within(categoryGroup).getByRole('button', {
      name: /Examens & biologie/i,
    });
    fireEvent.click(examsFilterBtn);

    await waitFor(() => {
      const filteredItems = within(
        screen.getByRole('list', { name: /Points prioritaires de votre plan/i }),
      ).getAllByRole('listitem');
      expect(filteredItems.length).toBeGreaterThan(0);
      expect(filteredItems.length).toBeLessThan(listItems.length);
      for (const item of filteredItems) {
        expect(within(item).getByText('Examens & biologie')).toBeInTheDocument();
      }
    });
  });

  it('permet de filtrer les 70 questions, met en avant les regles actives et persiste selection, statut et note dans Dexie', async () => {
    renderPlanPage('/plan?tab=consult');

    const consultTab = screen.getByRole('tab', { name: /Préparer ma consultation/i });
    expect(consultTab).toHaveAttribute('aria-selected', 'true');

    await screen.findByText(new RegExp(`^${QUESTIONS_CATALOG.length} questions affichées$`));

    // Au moins une question declenchee par les regles actives est mise en avant
    const triggeredBadges = screen.getAllByText('Déclenchée par votre suivi');
    expect(triggeredBadges.length).toBeGreaterThan(0);

    // Filtrage par interlocuteur Pharmacien
    const interlocutorGroup = screen.getByRole('group', { name: /Filtrer par interlocuteur/i });
    fireEvent.click(within(interlocutorGroup).getByRole('button', { name: /Pharmacien/i }));

    await waitFor(() => {
      const countText = screen.getByText(/questions? affichées?$/);
      expect(countText.textContent).not.toContain(`${QUESTIONS_CATALOG.length} questions`);
    });

    // Retour sur Tous + recherche sur "ferritine"
    fireEvent.click(within(interlocutorGroup).getByRole('button', { name: /^Tous/i }));
    const searchInput = screen.getByRole('searchbox', { name: /Rechercher une question/i });
    fireEvent.change(searchInput, { target: { value: 'ferritine' } });

    const ironHeading = await screen.findByRole('heading', {
      name: /Ma ferritine et mon coefficient de saturation de la transferrine/i,
    });
    const questionCard = ironHeading.closest('section');
    expect(questionCard).not.toBeNull();
    if (!questionCard) return;

    const selectBtn = within(questionCard).getByRole('button', {
      name: /Sélectionner pour la prochaine consultation/i,
    });
    fireEvent.click(selectBtn);

    await waitFor(async () => {
      const stored = await demoDb.questionTracking.get('q_meds_iron_check');
      expect(stored?.selectedForNextVisit).toBe(true);
    });

    const statusSelect = within(questionCard).getByLabelText(/Statut/i);
    fireEvent.change(statusSelect, { target: { value: 'asked' } });

    const noteTextarea = within(questionCard).getByLabelText(
      /Notes et réponse de votre praticien/i,
    );
    fireEvent.change(noteTextarea, {
      target: { value: 'Bilan martial recontrole avant perfusion de fer IV.' },
    });
    fireEvent.click(within(questionCard).getByRole('button', { name: /Enregistrer la note/i }));

    await waitFor(async () => {
      const stored = await demoDb.questionTracking.get('q_meds_iron_check');
      expect(stored?.selectedForNextVisit).toBe(true);
      expect(stored?.status).toBe('asked');
      expect(stored?.answerNote).toBe('Bilan martial recontrole avant perfusion de fer IV.');
      expect(stored?.answeredAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it('ouvre directement la carte de suivi / urgence via ?tab=urgence avec 15/112/114, EPOF, resume vital et careTeam', async () => {
    renderPlanPage('/plan?tab=urgence');

    const urgencyTab = screen.getByRole('tab', { name: /Carte de suivi \/ Urgence/i });
    expect(urgencyTab).toHaveAttribute('aria-selected', 'true');

    await screen.findByRole('heading', {
      name: /Carte de suivi et d'urgence \(100 % hors ligne\)/i,
    });

    expect(screen.getByRole('link', { name: /SAMU — Urgence médicale.*15/i })).toHaveAttribute(
      'href',
      'tel:15',
    );
    expect(screen.getByRole('link', { name: /Urgences Europe.*112/i })).toHaveAttribute(
      'href',
      'tel:112',
    );
    expect(screen.getByRole('link', { name: /Urgences par SMS.*114/i })).toHaveAttribute(
      'href',
      'sms:114',
    );

    // Signes d alarme EPOF
    expect(screen.getByText(/Signes d'alarme EPOF justifiant un appel immédiat/i)).toBeInTheDocument();
    expect(screen.getByText(/Douleur thoracique/i)).toBeInTheDocument();

    // Resume vital : FEVG ETT (34 %) et IRM (29 %) separees, dispositif, allergies, traitements DCI, careTeam
    expect(screen.getByText(/34 % \(15\/09\/2026\)/)).toBeInTheDocument();
    expect(screen.getByText(/29 % \(20\/03\/2026\)/)).toBeInTheDocument();
    expect(screen.getByText(/Aucun dispositif implanté/i)).toBeInTheDocument();
    expect(screen.getByText(/Aucune allergie médicamenteuse connue/i)).toBeInTheDocument();
    expect(screen.getByText('sacubitril/valsartan')).toBeInTheDocument();
    expect(screen.getByText('49/51 mg x 2/j')).toBeInTheDocument();
    expect(screen.getByText('Dr Claire Moreau')).toBeInTheDocument();
    expect(screen.getByText('Personne de confiance (fictive)')).toBeInTheDocument();
  });

  it('rend la fiche de synthese A4 complete et declenche window.print() au clic sur le bouton impression', async () => {
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    renderPlanPage('/plan?tab=synthese');

    const syntheseTab = screen.getByRole('tab', { name: /Fiche de synthèse A4/i });
    expect(syntheseTab).toHaveAttribute('aria-selected', 'true');

    const sheet = await screen.findByRole('article', {
      name: /Fiche de synthèse cardiologique A4/i,
    });

    // Identite / profil
    expect(within(sheet).getAllByText(/Profil de démonstration/i).length).toBeGreaterThanOrEqual(1);
    expect(within(sheet).getByText(/78,5 kg/)).toBeInTheDocument();
    expect(within(sheet).getByText(/Occlusion coronaire chronique \(CTO\)/i)).toBeInTheDocument();

    // Traitements (4 piliers + autres)
    expect(within(sheet).getByText(/sacubitril\/valsartan/i)).toBeInTheDocument();
    expect(within(sheet).getByText(/bisoprolol/i)).toBeInTheDocument();
    expect(within(sheet).getByText(/éplérénone/i)).toBeInTheDocument();
    expect(within(sheet).getByText(/dapagliflozine/i)).toBeInTheDocument();
    expect(within(sheet).getByText(/rosuvastatine/i)).toBeInTheDocument();

    // ETT et IRM separes
    expect(within(sheet).getByText(/Dernière ETT \(échocardiographie\)/i)).toBeInTheDocument();
    expect(within(sheet).getByText(/Dernière IRM cardiaque/i)).toBeInTheDocument();
    expect(within(sheet).getByText(/34 %/)).toBeInTheDocument();
    expect(within(sheet).getByText(/29 %/)).toBeInTheDocument();

    // Derniere biologie en unites francaises
    expect(within(sheet).getByText(/610 pg\/mL/)).toBeInTheDocument();
    expect(within(sheet).getByText(/101 µmol\/L/)).toBeInTheDocument();
    expect(within(sheet).getByText(/4,7 mmol\/L/)).toBeInTheDocument();
    expect(within(sheet).getByText(/0,58 g\/L/)).toBeInTheDocument();
    expect(within(sheet).getByText(/CST 18 %/)).toBeInTheDocument();

    // Demarches France & questions selectionnees
    expect(
      within(sheet).getByText(/Télésurveillance médicale de l’insuffisance cardiaque/i),
    ).toBeInTheDocument();
    expect(
      within(sheet).getByText(/Est-ce que je prends bien les quatre classes du traitement de fond/i),
    ).toBeInTheDocument();

    const printButton = screen.getByRole('button', { name: /Imprimer \/ PDF \(A4\)/i });
    fireEvent.click(printButton);
    expect(printSpy).toHaveBeenCalledTimes(1);
  });
});
