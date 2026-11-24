import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DbProvider,
  activeDb,
  clearPatientData,
  createDefaultSettings,
  demoDb,
  ensureDbInitialized,
  saveAppSettings,
  saveProfile,
  seedDemoDatabase,
} from '../../../db';
import {
  createEncryptedBackupEnvelope,
  createPlainBackupEnvelope,
  verifyPin,
} from '../../../services';
import SettingsPage from '../index';

async function resetAllDbs() {
  window.localStorage.clear();
  await ensureDbInitialized(activeDb);
  await clearPatientData(activeDb);
  await activeDb.settings.put(createDefaultSettings());

  await ensureDbInitialized(demoDb);
  await clearPatientData(demoDb);
  await demoDb.settings.put(createDefaultSettings());
}

function renderSettings(initialDemoMode = false) {
  return render(
    <DbProvider initialDemoMode={initialDemoMode}>
      <SettingsPage />
    </DbProvider>,
  );
}

describe('SettingsPage (Module 7 -- Parametres & Profil)', () => {
  beforeEach(async () => {
    await resetAllDbs();
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('enregistre le profil clinique complet, les coordonnees equipe et les 10 modules conditionnels', async () => {
    renderSettings(false);

    await waitFor(() => {
      expect(screen.getByLabelText(/Nom ou prénom d'affichage/i)).toHaveValue('Mon profil');
    });

    fireEvent.change(screen.getByLabelText(/Nom ou prénom d'affichage/i), {
      target: { value: 'Camille Martin' },
    });
    fireEvent.change(screen.getByLabelText(/Sexe/i), { target: { value: 'F' } });
    fireEvent.change(screen.getByLabelText(/Année de naissance/i), { target: { value: '1968' } });
    fireEvent.change(screen.getByLabelText(/Date du diagnostic/i), {
      target: { value: '2026-01-15' },
    });
    fireEvent.change(screen.getByLabelText(/Stade d'insuffisance cardiaque/i), {
      target: { value: 'C' },
    });
    fireEvent.change(screen.getByLabelText(/Classe NYHA habituelle/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/Origine ischémique confirmée/i), {
      target: { value: 'yes' },
    });
    fireEvent.change(screen.getByLabelText(/Poids sec de référence/i), {
      target: { value: '68,5' },
    });
    fireEvent.change(screen.getByLabelText(/LDL-c de base avant traitement/i), {
      target: { value: '1,54' },
    });
    fireEvent.change(screen.getByLabelText(/Limite hydrique prescrite/i), {
      target: { value: '' },
    });
    fireEvent.change(screen.getByLabelText(/Repère d'apport en sel/i), {
      target: { value: '5' },
    });
    fireEvent.change(screen.getByLabelText(/Permis de conduire/i), {
      target: { value: 'group1' },
    });
    fireEvent.click(screen.getByLabelText(/Je suis actuellement en arrêt de travail prolongé/i));
    fireEvent.change(screen.getByLabelText(/Allergies ou intolérances connues/i), {
      target: { value: 'Produits iodés' },
    });

    fireEvent.click(screen.getByLabelText(/FEVG améliorée/i));
    fireEvent.click(screen.getByLabelText(/Occlusion coronaire chronique/i));
    fireEvent.click(screen.getByLabelText(/Fibrillation atriale/i));
    fireEvent.click(screen.getByLabelText(/Maladie rénale chronique/i));
    fireEvent.click(screen.getByLabelText(/Gilet défibrillateur portable/i));
    fireEvent.change(screen.getByLabelText(/Apnée du sommeil/i), { target: { value: 'osa' } });
    fireEvent.change(screen.getByLabelText(/Dispositif cardiaque implanté/i), {
      target: { value: 'icd_primary' },
    });

    const cardiologistGroup = screen
      .getByText('Cardiologue')
      .closest('fieldset') as HTMLFieldSetElement;
    fireEvent.change(within(cardiologistGroup).getByLabelText('Nom'), {
      target: { value: 'Dr Nadia Lefèvre' },
    });
    fireEvent.change(within(cardiologistGroup).getByLabelText('Téléphone'), {
      target: { value: '01 42 00 11 22' },
    });
    fireEvent.change(within(cardiologistGroup).getByLabelText(/Service ou cabinet/i), {
      target: { value: 'CHU Cardiologie' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enregistrer le profil clinique/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Votre profil clinique et vos modules ont été enregistrés/i),
      ).toBeInTheDocument();
    });

    const stored = await activeDb.profile.get('active');
    expect(stored?.displayName).toBe('Camille Martin');
    expect(stored?.sex).toBe('F');
    expect(stored?.birthYear).toBe(1968);
    expect(stored?.diagnosisDate).toBe('2026-01-15');
    expect(stored?.hfStage).toBe('C');
    expect(stored?.nyhaClass).toBe(2);
    expect(stored?.ischaemicCauseConfirmed).toBe('yes');
    expect(stored?.dryWeightKg).toBe(68.5);
    expect(stored?.baselineLdlGL).toBe(1.54);
    expect(stored?.fluidLimitMl).toBeNull();
    expect(stored?.saltTargetG).toBe(5);
    expect(stored?.drivingGroup).toBe('group1');
    expect(stored?.onExtendedSickLeave).toBe(true);
    expect(stored?.allergies).toBe('Produits iodés');
    expect(stored?.modules).toEqual({
      hfImpEf: true,
      cto: true,
      aorticStenosis: false,
      lvThrombusOrAneurysm: false,
      atrialFibrillation: true,
      ckd: true,
      diabetes: false,
      sleepApnoea: 'osa',
      lifeVest: true,
      device: 'icd_primary',
    });
    expect(stored?.careTeam.cardiologist).toEqual({
      name: 'Dr Nadia Lefèvre',
      phone: '01 42 00 11 22',
      center: 'CHU Cardiologie',
    });
  });

  it('bascule vers le Mode decouverte sans ecraser la base personnelle et permet de reinitialiser le profil demo', async () => {
    await saveProfile(activeDb, { displayName: 'Profil Personnel Réel', dryWeightKg: 72 });
    renderSettings(false);

    await waitFor(() => {
      expect(screen.getByLabelText(/Nom ou prénom d'affichage/i)).toHaveValue(
        'Profil Personnel Réel',
      );
    });

    expect(
      screen.queryByRole('button', { name: /Réinitialiser le profil de démonstration/i }),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Activer le mode découverte/i }));

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: /Réinitialiser le profil de démonstration/i }),
      ).toBeInTheDocument();
      expect(
        (screen.getByLabelText(/Nom ou prénom d'affichage/i) as HTMLInputElement).value,
      ).toMatch(/^Profil de d[eé]monstration$/);
    });

    await saveProfile(demoDb, { displayName: 'Demo Modifiée' });
    await waitFor(() => {
      expect(screen.getByLabelText(/Nom ou prénom d'affichage/i)).toHaveValue('Demo Modifiée');
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Réinitialiser le profil de démonstration/i }),
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Le profil de démonstration a été réinitialisé/i),
      ).toBeInTheDocument();
      expect(
        (screen.getByLabelText(/Nom ou prénom d'affichage/i) as HTMLInputElement).value,
      ).toMatch(/^Profil de d[eé]monstration$/);
    });

    const personalProfile = await activeDb.profile.get('active');
    expect(personalProfile?.displayName).toBe('Profil Personnel Réel');
    expect(personalProfile?.dryWeightKg).toBe(72);
  });

  it('gere l alerte sauvegarde, les exports clair/chiffre, l apercu d import et la restauration confirmee', async () => {
    await saveAppSettings(activeDb, {
      aiHelper: {
        enabled: true,
        provider: 'gemini',
        apiKey: 'SECRET-KEY-NEVER-EXPORTED',
      },
    });

    const downloadedContents: string[] = [];
    const createObjectUrlSpy = vi
      .spyOn(URL, 'createObjectURL')
      .mockImplementation((blob: Blob | MediaSource) => {
        if (blob instanceof Blob) {
          void blob.text().then((txt) => downloadedContents.push(txt));
        }
        return 'blob:mock-download';
      });
    const revokeObjectUrlSpy = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
    const anchorClickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(() => {});

    renderSettings(false);

    await waitFor(() => {
      expect(screen.getByText(/Aucune sauvegarde enregistrée/i)).toBeInTheDocument();
    });
    expect(
      screen.getByText(/votre clé API BYOK et votre code PIN local ne sont jamais exportés/i),
    ).toBeInTheDocument();

    // Export clair
    fireEvent.click(screen.getByRole('button', { name: /Exporter en JSON clair/i }));

    await waitFor(() => {
      expect(screen.getByText(/Sauvegarde JSON claire générée/i)).toBeInTheDocument();
    });
    expect(createObjectUrlSpy).toHaveBeenCalledTimes(1);
    expect(revokeObjectUrlSpy).toHaveBeenCalledTimes(1);
    expect(anchorClickSpy).toHaveBeenCalledTimes(1);

    const updatedSettingsAfterPlain = await activeDb.settings.get('settings');
    expect(updatedSettingsAfterPlain?.lastBackupAt).toBeTruthy();

    await waitFor(() => {
      expect(downloadedContents.length).toBeGreaterThanOrEqual(1);
    });
    expect(downloadedContents[0]).not.toContain('SECRET-KEY-NEVER-EXPORTED');

    // Export chiffre AES-GCM
    fireEvent.change(screen.getByLabelText(/^Mot de passe de chiffrement$/i), {
      target: { value: 'SecretCardio!2026' },
    });
    fireEvent.change(screen.getByLabelText(/^Confirmer le mot de passe$/i), {
      target: { value: 'SecretCardio!2026' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Exporter en JSON chiffré/i }));

    await waitFor(() => {
      expect(screen.getByText(/Sauvegarde chiffrée AES-GCM générée/i)).toBeInTheDocument();
    });

    // Preparer une sauvegarde chiffree provenant du jeu demo pour tester import + mot de passe + apercu + restauration
    await seedDemoDatabase(demoDb, true);
    const plainDemoEnvelope = await createPlainBackupEnvelope(demoDb);
    const encDemoEnvelope = await createEncryptedBackupEnvelope(demoDb, 'MotDePasseImport!2026');

    const fileInput = screen.getByLabelText(/Fichier de sauvegarde à importer/i);
    const encFile = new File([JSON.stringify(encDemoEnvelope)], 'sauvegarde.cardio.enc.json', {
      type: 'application/json',
    });

    fireEvent.change(fileInput, { target: { files: [encFile] } });

    await waitFor(() => {
      expect(screen.getByLabelText(/^Mot de passe de déchiffrement$/i)).toBeInTheDocument();
    });

    // Mauvais mot de passe
    fireEvent.change(screen.getByLabelText(/^Mot de passe de déchiffrement$/i), {
      target: { value: 'MauvaisMotDePasse' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Déchiffrer et prévisualiser/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/Mot de passe invalide/i);
    });

    // Bon mot de passe -> apercu avant confirmation
    fireEvent.change(screen.getByLabelText(/^Mot de passe de déchiffrement$/i), {
      target: { value: 'MotDePasseImport!2026' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Déchiffrer et prévisualiser/i }));

    await waitFor(() => {
      expect(
        screen.getByLabelText(/Aperçu de la sauvegarde avant restauration/i),
      ).toBeInTheDocument();
    });

    const previewBox = screen.getByLabelText(/Aperçu de la sauvegarde avant restauration/i);
    expect(within(previewBox).getByText(/^Profil de d[eé]monstration$/)).toBeInTheDocument();
    expect(
      within(previewBox).getByText(String(plainDemoEnvelope.payload.dailyLogs.length)),
    ).toBeInTheDocument();
    expect(
      within(previewBox).getByText(String(plainDemoEnvelope.payload.medications.length)),
    ).toBeInTheDocument();

    // Avant confirmation, la base active n'est pas encore ecrasee
    expect(await activeDb.dailyLogs.count()).toBe(0);

    // Confirmation explicite
    fireEvent.click(screen.getByRole('button', { name: /Confirmer la restauration/i }));

    await waitFor(() => {
      expect(screen.getByText(/Restauration terminée/i)).toBeInTheDocument();
    });

    expect(await activeDb.dailyLogs.count()).toBe(plainDemoEnvelope.payload.dailyLogs.length);
    expect(await activeDb.medications.count()).toBe(plainDemoEnvelope.payload.medications.length);
    const preservedSettings = await activeDb.settings.get('settings');
    expect(preservedSettings?.aiHelper.apiKey).toBe('SECRET-KEY-NEVER-EXPORTED');
  });

  it('permet d activer, modifier et desactiver le code PIN local hache par PBKDF2', async () => {
    renderSettings(false);

    await waitFor(() => {
      expect(screen.getByText('Code PIN désactivé')).toBeInTheDocument();
    });

    // Validation format PIN invalide
    fireEvent.change(screen.getByLabelText(/Nouveau code PIN/i), { target: { value: '12a' } });
    fireEvent.change(screen.getByLabelText(/Confirmer le code PIN/i), { target: { value: '12a' } });
    fireEvent.click(screen.getByRole('button', { name: /Activer le code PIN/i }));

    expect(screen.getByRole('alert')).toHaveTextContent(/4 à 8 chiffres/i);

    // Activation PIN valide
    fireEvent.change(screen.getByLabelText(/Nouveau code PIN/i), { target: { value: '2468' } });
    fireEvent.change(screen.getByLabelText(/Confirmer le code PIN/i), {
      target: { value: '2468' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Activer le code PIN/i }));

    await waitFor(() => {
      expect(screen.getByText('Code PIN actif')).toBeInTheDocument();
    });

    const afterEnable = await activeDb.settings.get('settings');
    expect(afterEnable?.pinHash).toBeTruthy();
    expect(afterEnable?.pinSalt).toBeTruthy();
    expect(
      await verifyPin('2468', afterEnable?.pinHash ?? '', afterEnable?.pinSalt ?? ''),
    ).toBe(true);

    // Modification du PIN
    fireEvent.change(screen.getByLabelText(/^Code PIN actuel$/i), { target: { value: '2468' } });
    fireEvent.change(screen.getByLabelText(/Nouveau code PIN/i), { target: { value: '135790' } });
    fireEvent.change(screen.getByLabelText(/Confirmer le nouveau PIN/i), {
      target: { value: '135790' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Enregistrer le nouveau code PIN/i }));

    await waitFor(() => {
      expect(screen.getByText(/Votre code PIN local a été modifié/i)).toBeInTheDocument();
    });

    const afterModify = await activeDb.settings.get('settings');
    expect(
      await verifyPin('135790', afterModify?.pinHash ?? '', afterModify?.pinSalt ?? ''),
    ).toBe(true);

    // Desactivation du PIN
    fireEvent.click(screen.getByRole('button', { name: /Désactiver le code PIN/i }));
    fireEvent.change(screen.getByLabelText(/Code PIN actuel pour confirmer/i), {
      target: { value: '135790' },
    });
    fireEvent.click(
      screen.getByRole('button', { name: /Confirmer la désactivation du code PIN/i }),
    );

    await waitFor(() => {
      expect(screen.getByText('Code PIN désactivé')).toBeInTheDocument();
    });

    const afterDisable = await activeDb.settings.get('settings');
    expect(afterDisable?.pinHash).toBeUndefined();
    expect(afterDisable?.pinSalt).toBeUndefined();
  });

  it('enregistre les preferences d affichage (theme, Texte agrandi) et le suivi quotidien des prises', async () => {
    renderSettings(false);

    const darkButton = screen.getByRole('button', { name: /Sombre/i });
    fireEvent.click(darkButton);

    await waitFor(() => {
      expect(darkButton).toHaveAttribute('aria-pressed', 'true');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    const largeTextCheckbox = screen.getByLabelText(/Texte agrandi/i);
    fireEvent.click(largeTextCheckbox);

    await waitFor(() => {
      expect(largeTextCheckbox).toBeChecked();
      expect(document.documentElement.classList.contains('large-text')).toBe(true);
    });

    const pillCheckinCheckbox = screen.getByLabelText(
      /Activer le suivi quotidien des prises médicamenteuses/i,
    );
    fireEvent.click(pillCheckinCheckbox);

    await waitFor(async () => {
      const saved = await activeDb.settings.get('settings');
      expect(saved?.theme).toBe('dark');
      expect(saved?.largeTextMode).toBe(true);
      expect(saved?.enableDailyPillCheckin).toBe(true);
    });
  });

  it('permet d activer les notifications de rappel, regler les horaires et envoyer une notification de test', async () => {
    const originalNotification = window.Notification;
    const originalServiceWorker = navigator.serviceWorker;
    const createdNotifications: Array<{ title: string; options?: NotificationOptions }> = [];

    const MockNotification = vi.fn(function (title: string, options?: NotificationOptions) {
      createdNotifications.push({ title, options });
      return { onclick: null, close: vi.fn() };
    }) as unknown as {
      (title: string, options?: NotificationOptions): { onclick: null; close: ReturnType<typeof vi.fn> };
      permission: NotificationPermission;
      requestPermission: ReturnType<typeof vi.fn>;
    };
    MockNotification.permission = 'default';
    MockNotification.requestPermission = vi.fn(async () => {
      MockNotification.permission = 'granted';
      return 'granted';
    });

    Object.defineProperty(window, 'Notification', {
      configurable: true,
      writable: true,
      value: MockNotification,
    });
    Object.defineProperty(navigator, 'serviceWorker', {
      configurable: true,
      writable: true,
      value: undefined,
    });

    try {
      renderSettings(false);

      const masterToggle = screen.getByLabelText(/Activer les notifications de rappel/i);
      expect(masterToggle).not.toBeChecked();

      fireEvent.click(masterToggle);

      await waitFor(() => {
        expect(MockNotification.requestPermission).toHaveBeenCalledTimes(1);
        expect(masterToggle).toBeChecked();
      });

      expect(screen.getByText('Autorisées')).toBeInTheDocument();

      const weightTimeInput = screen.getByLabelText(/Heure du rappel Pesée matinale/i);
      expect(weightTimeInput).toHaveValue('07:30');
      fireEvent.change(weightTimeInput, { target: { value: '07:45' } });

      const morningMedToggle = screen.getByRole('checkbox', {
        name: /^Prises médicamenteuses — matin$/i,
      });
      expect(morningMedToggle).not.toBeChecked();
      fireEvent.click(morningMedToggle);

      await waitFor(async () => {
        const saved = await activeDb.settings.get('settings');
        expect(saved?.notifications.enabled).toBe(true);
        expect(saved?.notifications.reminders.weight).toEqual({ enabled: true, time: '07:45' });
        expect(saved?.notifications.reminders.medicationMorning).toEqual({
          enabled: true,
          time: '08:00',
        });
      });

      fireEvent.click(screen.getByRole('button', { name: /Envoyer une notification de test/i }));

      await waitFor(() => {
        expect(screen.getByText(/Notification de test envoyée/i)).toBeInTheDocument();
      });
      expect(createdNotifications).toHaveLength(1);
      expect(createdNotifications[0].title).toContain('Notification de test');
    } finally {
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
    }
  });

  it('refuse proprement l activation des notifications lorsque la permission navigateur est bloquee', async () => {
    const originalNotification = window.Notification;
    const MockNotification = vi.fn() as unknown as {
      permission: NotificationPermission;
      requestPermission: ReturnType<typeof vi.fn>;
    };
    MockNotification.permission = 'denied';
    MockNotification.requestPermission = vi.fn(async () => 'denied');

    Object.defineProperty(window, 'Notification', {
      configurable: true,
      writable: true,
      value: MockNotification,
    });

    try {
      renderSettings(false);

      expect(screen.getByText('Bloquées')).toBeInTheDocument();
      const masterToggle = screen.getByLabelText(/Activer les notifications de rappel/i);
      fireEvent.click(masterToggle);

      await waitFor(() => {
        expect(screen.getByRole('alert')).toHaveTextContent(/bloquées par votre navigateur/i);
      });
      expect(masterToggle).not.toBeChecked();

      const saved = await activeDb.settings.get('settings');
      expect(saved?.notifications.enabled).toBe(false);
    } finally {
      Object.defineProperty(window, 'Notification', {
        configurable: true,
        writable: true,
        value: originalNotification,
      });
    }
  });

  it('configure l assistant IA optionnel (BYOK) desactive par defaut avec bandeau vie privee et cle masquee', async () => {
    renderSettings(false);

    const aiToggle = screen.getByLabelText(/Activer l'assistant IA optionnel/i);
    expect(aiToggle).not.toBeChecked();
    expect(screen.getByLabelText(/Nom du modèle/i)).toHaveAttribute(
      'placeholder',
      'gemini-4-hydrogen',
    );

    expect(screen.getByLabelText(/Avertissement vie privée assistant IA/i)).toHaveTextContent(
      /nom.*prénom.*numéro de sécurité sociale \(NIR\)/i,
    );

    fireEvent.click(aiToggle);

    await waitFor(() => {
      expect(aiToggle).toBeChecked();
    });

    fireEvent.change(screen.getByLabelText(/Fournisseur IA/i), { target: { value: 'mistral' } });
    fireEvent.change(screen.getByLabelText(/URL endpoint/i), {
      target: { value: 'https://api.mistral.ai/v1' },
    });
    fireEvent.change(screen.getByLabelText(/Nom du modèle/i), {
      target: { value: 'mistral-medium-latest' },
    });

    const apiKeyInput = screen.getByLabelText(/^Clé API \(stockée uniquement en local\)$/i);
    expect(apiKeyInput).toHaveAttribute('type', 'password');
    fireEvent.change(apiKeyInput, { target: { value: 'mistral-test-key-123' } });

    // Bascule afficher / masquer la cle API
    fireEvent.click(screen.getByRole('button', { name: /Afficher la clé API/i }));
    expect(apiKeyInput).toHaveAttribute('type', 'text');
    fireEvent.click(screen.getByRole('button', { name: /Masquer la clé API/i }));
    expect(apiKeyInput).toHaveAttribute('type', 'password');

    fireEvent.click(screen.getByRole('button', { name: /Enregistrer la configuration IA/i }));

    await waitFor(async () => {
      const saved = await activeDb.settings.get('settings');
      expect(saved?.aiHelper).toEqual({
        enabled: true,
        provider: 'mistral',
        endpointUrl: 'https://api.mistral.ai/v1',
        modelName: 'mistral-medium-latest',
        apiKey: 'mistral-test-key-123',
      });
    });
  });

  it('affiche un rappel discret lorsque la derniere sauvegarde depasse 14 jours', async () => {
    await saveAppSettings(activeDb, {
      lastBackupAt: '2025-01-01T10:00:00.000Z',
    });

    renderSettings(false);

    await waitFor(() => {
      expect(screen.getByText(/plus de 14 jours/i)).toBeInTheDocument();
    });
  });

  it('fait defiler vers une section via les boutons de navigation rapide sans modifier le hash', () => {
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;
    window.location.hash = '#/settings';

    renderSettings(false);

    const quickNav = screen.getByRole('navigation', {
      name: /Accès rapide aux sections des paramètres/i,
    });
    const pinButton = within(quickNav).getByRole('button', { name: 'Code PIN' });
    fireEvent.click(pinButton);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
    expect(window.location.hash).toBe('#/settings');
  });
});
