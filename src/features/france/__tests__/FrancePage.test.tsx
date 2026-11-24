import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { FRENCH_ADMIN_CATALOG } from '../../../content/fr';
import {
  DbProvider,
  activeDb,
  clearPatientData,
  ensureDbInitialized,
  saveProfile,
  upsertAdminProgress,
} from '../../../db';
import FrancePage from '../index';

function renderFrancePage(initialEntries: string[] = ['/france']) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <DbProvider initialDemoMode={false}>
        <FrancePage />
      </DbProvider>
    </MemoryRouter>,
  );
}

describe('Module Vie en France & Droits (FrancePage)', () => {
  beforeEach(async () => {
    window.localStorage.clear();
    await ensureDbInitialized(activeDb);
    await clearPatientData(activeDb);
  });

  afterEach(async () => {
    cleanup();
    await clearPatientData(activeDb);
  });

  it('affiche le bandeau legal et les alertes France issues de evaluatePatientState', async () => {
    await saveProfile(activeDb, {
      onExtendedSickLeave: true,
      drivingGroup: 'group1',
      nyhaClass: 2,
      modules: {
        hfImpEf: false,
        cto: false,
        aorticStenosis: false,
        lvThrombusOrAneurysm: false,
        atrialFibrillation: false,
        ckd: false,
        diabetes: false,
        sleepApnoea: 'none',
        lifeVest: true,
        device: 'none',
      },
    });

    renderFrancePage();

    expect(
      await screen.findByRole('note', { name: /Avertissement réglementaire/i }),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/Alertes et rappels France actifs/i),
    ).toBeInTheDocument();

    // Regles actives attendues : ALD, SMR, Reforme IJ oct 2026 hors ALD, LifeVest, Vaccinations
    expect(screen.getByText(/V[eé]rifier votre demande d'ALD 5 \/ ALD 13/i)).toBeInTheDocument();
    expect(
      screen.getByText(/R[eé]adaptation cardiaque \(SMR cardiovasculaire\) recommand[eé]e/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Arr[eê]t de travail prolong[eé] : vigilance r[eé]forme IJ octobre 2026 hors ALD/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Conduite interdite en France pendant le port du gilet LifeVest/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Vaccinations recommand[eé]es [aà] v[eé]rifier \(grippe \/ pneumocoque\)/i),
    ).toBeInTheDocument();
  });

  it('affiche les 12 demarches, persiste le statut, la date de renouvellement et les notes dans Dexie', async () => {
    await saveProfile(activeDb, { onExtendedSickLeave: true });

    renderFrancePage();

    // Verifie que les 12 demarches du catalogue sont presentes
    const aldItem = FRENCH_ADMIN_CATALOG.find((item) => item.id === 'ald_5_13');
    expect(aldItem).toBeDefined();

    expect(await screen.findByText(aldItem!.titleFr)).toBeInTheDocument();

    const statusSelects = screen.getAllByRole('combobox', { name: /Statut —/i });
    expect(statusSelects).toHaveLength(12);

    // Progression initiale : 0 / 12 (0 %)
    const progressBar = screen.getByRole('progressbar', {
      name: /Progression globale des démarches administratives en France/i,
    });
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');

    // Mise a jour du statut ALD 5/13 vers "Obtenu" (done)
    const aldSelect = screen.getByLabelText(`Statut — ${aldItem!.titleFr}`);
    fireEvent.change(aldSelect, { target: { value: 'done' } });

    await waitFor(async () => {
      const saved = await activeDb.adminProgress.get('ald_5_13');
      expect(saved?.status).toBe('done');
    });

    // Mise a jour de la date de renouvellement
    const renewalInput = screen.getByLabelText(`Date de renouvellement — ${aldItem!.titleFr}`);
    fireEvent.change(renewalInput, { target: { value: '2035-06-15' } });

    await waitFor(async () => {
      const saved = await activeDb.adminProgress.get('ald_5_13');
      expect(saved?.renewalDate).toBe('2035-06-15');
    });

    // Saisie et sauvegarde des notes personnelles
    const notesTextarea = screen.getByLabelText(`Notes personnelles — ${aldItem!.titleFr}`);
    fireEvent.change(notesTextarea, { target: { value: 'Protocole signe et visible sur Ameli' } });
    fireEvent.blur(notesTextarea);

    await waitFor(async () => {
      const saved = await activeDb.adminProgress.get('ald_5_13');
      expect(saved?.notes).toBe('Protocole signe et visible sur Ameli');
      expect(saved?.status).toBe('done');
      expect(saved?.renewalDate).toBe('2035-06-15');
    });

    // La barre de progression et les alertes se mettent a jour en direct (FR_ALD_CHECK et FR_SICK_LEAVE_2026 disparaissent)
    await waitFor(() => {
      expect(progressBar).toHaveAttribute('aria-valuenow', '8');
      expect(
        screen.queryByText(/V[eé]rifier votre demande d'ALD 5 \/ ALD 13/i),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/Arr[eê]t de travail prolong[eé] : vigilance r[eé]forme IJ octobre 2026 hors ALD/i),
      ).not.toBeInTheDocument();
    });

    // Verification des liens officiels securises, de la date asOf et du lien bibliotheque
    const ameliLink = screen.getByRole('link', {
      name: /ameli\.fr — Qu’est-ce qu’une affection de longue durée/i,
    });
    expect(ameliLink).toHaveAttribute('target', '_blank');
    expect(ameliLink).toHaveAttribute('rel', 'noopener noreferrer');

    const libraryLinks = screen.getAllByRole('link', {
      name: /Lire l'article dans la bibliothèque/i,
    });
    expect(libraryLinks.length).toBe(12);
    expect(libraryLinks[0]).toHaveAttribute(
      'href',
      `/library?article=${FRENCH_ADMIN_CATALOG[0].articleSlug}`,
    );
  });

  it('filtre les 12 demarches par categorie', async () => {
    renderFrancePage();

    expect(await screen.findAllByRole('combobox', { name: /Statut —/i })).toHaveLength(12);

    // Filtre "Travail & maintien" (5 demarches)
    const travailBtn = screen.getByRole('button', { name: /Travail & maintien/i });
    fireEvent.click(travailBtn);
    expect(travailBtn).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByRole('combobox', { name: /Statut —/i })).toHaveLength(5);
    expect(
      screen.getByText(/Arrêt de travail long et indemnités journalières/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Assurance emprunteur : Loi Lemoine et convention AERAS/i),
    ).not.toBeInTheDocument();

    // Filtre "Emprunt" (1 demarche)
    const empruntBtn = screen.getByRole('button', { name: /Emprunt/i });
    fireEvent.click(empruntBtn);
    expect(screen.getAllByRole('combobox', { name: /Statut —/i })).toHaveLength(1);
    expect(
      screen.getByText(/Assurance emprunteur : Loi Lemoine et convention AERAS/i),
    ).toBeInTheDocument();

    // Filtre "Conduite" (1 demarche)
    const conduiteBtn = screen.getByRole('button', { name: /^Conduite/i });
    fireEvent.click(conduiteBtn);
    expect(screen.getAllByRole('combobox', { name: /Statut —/i })).toHaveLength(1);
    expect(
      screen.getByText(/Permis de conduire : contrôle d’aptitude par un médecin agréé/i),
    ).toBeInTheDocument();

    // Retour a "Toutes" (12 demarches)
    const allBtn = screen.getByRole('button', { name: /Toutes/i });
    fireEvent.click(allBtn);
    expect(screen.getAllByRole('combobox', { name: /Statut —/i })).toHaveLength(12);
  });

  it('simule le calculateur permis : LifeVest interdit, DAI primaire Groupe 1 vs Groupe 2 inapte', async () => {
    await saveProfile(activeDb, {
      drivingGroup: 'group1',
      nyhaClass: 2,
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
    });
    await activeDb.imaging.add({
      date: '2026-10-15',
      modality: 'ett',
      lvefPercent: 32,
    });
    await upsertAdminProgress(activeDb, { itemId: 'ald_5_13', status: 'done' });

    renderFrancePage();

    const drivingTab = await screen.findByRole('tab', {
      name: /Calculateur Permis de conduire \(France\)/i,
    });
    fireEvent.click(drivingTab);

    // Pre-remplissage depuis le profil (FEVG 32 %, Groupe 1, NYHA 2)
    const lvefInput = await screen.findByLabelText(/Dernière FEVG/i);
    expect(lvefInput).toHaveValue(32);

    const resultRegion = screen.getByRole('region', {
      name: /Résultat indicatif du calculateur permis de conduire/i,
    });
    expect(resultRegion).toHaveTextContent(
      /Conduite catégorie légère \(groupe 1\) compatible si l'état clinique est stable/i,
    );
    expect(resultRegion).toHaveTextContent(/Arrêté du 28 mars 2022/i);
    expect(resultRegion).toHaveTextContent(/médecin agréé/i);
    expect(resultRegion).toHaveTextContent(/distinct de votre médecin traitant/i);

    // Scenario 1 : Port d'un gilet LifeVest -> conduite interdite en France
    const lifeVestCheckbox = screen.getByLabelText(
      /Port d'un gilet défibrillateur portable \(LifeVest\)/i,
    );
    fireEvent.click(lifeVestCheckbox);

    expect(resultRegion).toHaveTextContent(/Incompatibilité temporaire/i);
    expect(resultRegion).toHaveTextContent(
      /Conduite interdite en France pendant le port du gilet LifeVest/i,
    );
    expect(resultRegion).toHaveTextContent(/§\s*1\.2\.6/i);

    // Desactivation LifeVest pour tester le DAI primaire
    fireEvent.click(lifeVestCheckbox);

    // Scenario 2 : DAI prevention primaire en Groupe 1 (< 28 jours -> delai 4 semaines)
    const deviceSelect = screen.getByLabelText(/Dispositif implanté \(DAI \/ CRT\)/i);
    fireEvent.change(deviceSelect, { target: { value: 'icd_primary' } });

    const daysSinceIcdInput = screen.getByLabelText(
      /Jours depuis l'implantation du DAI \/ CRT-D/i,
    );
    fireEvent.change(daysSinceIcdInput, { target: { value: '14' } });

    expect(resultRegion).toHaveTextContent(/Incompatibilité temporaire/i);
    expect(resultRegion).toHaveTextContent(/4 semaines/i);

    // Apres 30 jours (>= 28 j) en Groupe 1 : compatibilite temporaire envisageable apres avis medical
    fireEvent.change(daysSinceIcdInput, { target: { value: '30' } });
    expect(resultRegion).toHaveTextContent(/Compatible après avis médical/i);
    expect(resultRegion).toHaveTextContent(
      /Conduite groupe 1 envisageable \(compatibilité temporaire\)/i,
    );

    // Scenario 3 : Meme DAI primaire en Groupe 2 (lourd / pro) -> incompatibilite permanente
    const group2Radio = screen.getByLabelText(/Groupe 2 — Lourds et professionnels/i);
    fireEvent.click(group2Radio);

    expect(resultRegion).toHaveTextContent(/Incompatibilité permanente/i);
    expect(resultRegion).toHaveTextContent(
      /Conduite professionnelle \(groupe 2\) incompatible avec un DAI ou CRT-D/i,
    );

    // Reinitialisation depuis le profil restaure Groupe 1 et dispositif 'none'
    const resetBtn = screen.getByRole('button', { name: /Réinitialiser depuis mon profil/i });
    fireEvent.click(resetBtn);
    expect(screen.getByLabelText(/Groupe 1 — Véhicules légers/i)).toBeChecked();
    expect(deviceSelect).toHaveValue('none');
  });
});
