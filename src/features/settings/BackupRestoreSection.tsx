import { type ChangeEvent, type FormEvent, useRef, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  EyeOff,
  FileUp,
  HardDriveDownload,
  Lock,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { getTodayIsoDate, useActiveDb, useAppSettings, useDemoMode } from '../../db';
import {
  BackupValidationError,
  CryptoServiceError,
  type ParsedBackupResult,
  createEncryptedBackupEnvelope,
  createPlainBackupEnvelope,
  isBackupOverdue,
  parseBackupEnvelope,
  restoreBackupToDatabase,
} from '../../services';
import { Card } from '../../ui';
import {
  DANGER_BUTTON_CLASS,
  INPUT_CLASS,
  LABEL_CLASS,
  PRIMARY_BUTTON_CLASS,
  SECONDARY_BUTTON_CLASS,
  formatIsoDateFr,
  readFileAsText,
  triggerJsonFileDownload,
} from './constants';

export function BackupRestoreSection() {
  const db = useActiveDb();
  const { isDemoMode } = useDemoMode();
  const { settings, updateSettings } = useAppSettings();

  const [exportPassword, setExportPassword] = useState('');
  const [exportPasswordConfirm, setExportPasswordConfirm] = useState('');
  const [showExportPassword, setShowExportPassword] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<string | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [pendingEncryptedRaw, setPendingEncryptedRaw] = useState<string | null>(null);
  const [importPassword, setImportPassword] = useState('');
  const [showImportPassword, setShowImportPassword] = useState(false);
  const [parsedPreview, setParsedPreview] = useState<ParsedBackupResult | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [importError, setImportError] = useState<string | null>(null);

  const todayIso = getTodayIsoDate();
  const backupOverdue = isBackupOverdue(settings.lastBackupAt, todayIso);
  const hasNeverBackedUp = !settings.lastBackupAt;

  function resetImportFlow() {
    setSelectedFileName(null);
    setPendingEncryptedRaw(null);
    setImportPassword('');
    setParsedPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  async function handlePlainExport() {
    setExportError(null);
    setExportStatus(null);
    setIsExporting(true);
    try {
      const envelope = await createPlainBackupEnvelope(db);
      const serialized = JSON.stringify(envelope, null, 2);
      const filename = `cardio-compagnon-${todayIso}.cardio.json`;
      triggerJsonFileDownload(filename, serialized);
      await updateSettings({ lastBackupAt: envelope.payload.exportedAt });
      setExportStatus(`Sauvegarde JSON claire générée (${filename}).`);
    } catch (error) {
      setExportError(
        error instanceof Error
          ? error.message
          : 'Impossible de créer la sauvegarde JSON claire.',
      );
    } finally {
      setIsExporting(false);
    }
  }

  async function handleEncryptedExport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setExportError(null);
    setExportStatus(null);

    if (exportPassword.length < 6) {
      setExportError(
        'Veuillez choisir un mot de passe d’au moins 6 caractères pour chiffrer votre sauvegarde.',
      );
      return;
    }
    if (exportPassword !== exportPasswordConfirm) {
      setExportError('La confirmation du mot de passe ne correspond pas.');
      return;
    }

    setIsExporting(true);
    try {
      const envelope = await createEncryptedBackupEnvelope(db, exportPassword);
      const serialized = JSON.stringify(envelope, null, 2);
      const filename = `cardio-compagnon-${todayIso}.cardio.enc.json`;
      triggerJsonFileDownload(filename, serialized);
      await updateSettings({ lastBackupAt: new Date().toISOString() });
      setExportPassword('');
      setExportPasswordConfirm('');
      setExportStatus(`Sauvegarde chiffrée AES-GCM générée (${filename}).`);
    } catch (error) {
      setExportError(
        error instanceof Error
          ? error.message
          : 'Impossible de créer la sauvegarde chiffrée.',
      );
    } finally {
      setIsExporting(false);
    }
  }

  async function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    setImportError(null);
    setImportStatus(null);
    setParsedPreview(null);
    setPendingEncryptedRaw(null);
    setImportPassword('');

    const file = event.target.files?.[0];
    if (!file) {
      setSelectedFileName(null);
      return;
    }

    setSelectedFileName(file.name);
    setIsImporting(true);
    try {
      const rawText = await readFileAsText(file);
      try {
        const parsed = await parseBackupEnvelope(rawText);
        setParsedPreview(parsed);
      } catch (error) {
        if (error instanceof BackupValidationError && error.code === 'PASSWORD_REQUIRED') {
          setPendingEncryptedRaw(rawText);
        } else {
          throw error;
        }
      }
    } catch (error) {
      setImportError(
        error instanceof Error
          ? error.message
          : 'Impossible de lire ou valider ce fichier de sauvegarde.',
      );
    } finally {
      setIsImporting(false);
    }
  }

  async function handleDecryptPreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!pendingEncryptedRaw) {
      return;
    }
    setImportError(null);
    setImportStatus(null);

    if (importPassword.length === 0) {
      setImportError('Veuillez saisir le mot de passe de cette sauvegarde chiffrée.');
      return;
    }

    setIsImporting(true);
    try {
      const parsed = await parseBackupEnvelope(pendingEncryptedRaw, importPassword);
      setParsedPreview(parsed);
      setPendingEncryptedRaw(null);
      setImportPassword('');
    } catch (error) {
      if (error instanceof CryptoServiceError || error instanceof BackupValidationError) {
        setImportError(error.message);
      } else {
        setImportError('Mot de passe incorrect ou fichier de sauvegarde invalide.');
      }
    } finally {
      setIsImporting(false);
    }
  }

  async function handleConfirmRestore() {
    if (!parsedPreview) {
      return;
    }
    setImportError(null);
    setImportStatus(null);
    setIsImporting(true);
    try {
      await restoreBackupToDatabase(db, parsedPreview.payload);
      const count = parsedPreview.summary.counts.totalRecords;
      resetImportFlow();
      setImportStatus(
        `Restauration terminée (${count} éléments importés). Vos réglages locaux (thème, code PIN et clé API) ont été préservés.`,
      );
    } catch (error) {
      setImportError(
        error instanceof Error
          ? error.message
          : 'Échec de la restauration : vos données précédentes ont été conservées intactes.',
      );
    } finally {
      setIsImporting(false);
    }
  }

  return (
    <Card
      title="Sauvegarde et restauration"
      subtitle="Exportez vos données de santé au format JSON clair ou chiffré AES-GCM, et restaurez-les sur un autre appareil."
      icon={<HardDriveDownload className="h-5 w-5" />}
    >
      <div className="space-y-5">
        {backupOverdue ? (
          <div
            role="status"
            className="flex items-start gap-3 rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-3.5 text-sm text-[var(--status-warning-text)]"
          >
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p className="m-0 leading-relaxed">
              {hasNeverBackedUp ? (
                <>
                  <strong className="font-semibold">Aucune sauvegarde enregistrée :</strong> vos
                  données vivent uniquement dans ce navigateur. Pensez à créer une première
                  sauvegarde locale.
                </>
              ) : (
                <>
                  <strong className="font-semibold">Rappel de sauvegarde :</strong> votre dernière
                  sauvegarde date du {formatIsoDateFr(settings.lastBackupAt)} (plus de 14 jours).
                  Nous vous conseillons d&apos;en exporter une nouvelle copie.
                </>
              )}
            </p>
          </div>
        ) : (
          <div
            role="status"
            className="flex items-center gap-2.5 rounded-xl border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-3.5 py-2.5 text-sm text-[var(--status-stable-text)]"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Dernière sauvegarde effectuée le{' '}
              <strong className="font-semibold">{formatIsoDateFr(settings.lastBackupAt)}</strong>.
            </span>
          </div>
        )}

        <div className="flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-xs text-[var(--text-secondary)]">
          <ShieldCheck
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]"
            aria-hidden="true"
          />
          <p className="m-0 leading-relaxed">
            Par sécurité,{' '}
            <strong className="font-semibold text-[var(--text-primary)]">
              votre clé API BYOK et votre code PIN local ne sont jamais exportés
            </strong>{' '}
            dans les fichiers de sauvegarde.{' '}
            {isDemoMode
              ? 'Attention : le mode découverte est actif, les opérations ci-dessous portent sur la base de démonstration.'
              : 'Les opérations ci-dessous portent sur votre base personnelle.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40 p-4">
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Export JSON clair (.cardio.json)
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Fichier lisible en un clic, pratique pour archiver dans un espace personnel déjà
                protégé (coffre-fort local ou clé USB personnelle).
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                disabled={isExporting}
                onClick={() => void handlePlainExport()}
                className={`${SECONDARY_BUTTON_CLASS} w-full`}
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Exporter en JSON clair (.cardio.json)</span>
              </button>
            </div>
          </div>

          <form
            onSubmit={(e) => void handleEncryptedExport(e)}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40 p-4"
            noValidate
          >
            <h3 className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
              <Lock className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
              <span>Export chiffré AES-GCM (.cardio.enc.json)</span>
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
              Protégé localement par PBKDF2-SHA256 et AES-256-GCM. Conservez ce mot de passe : il
              est indispensable pour restaurer le fichier.
            </p>

            <div className="mt-3 space-y-2.5">
              <div>
                <label htmlFor="backup-export-password" className={LABEL_CLASS}>
                  Mot de passe de chiffrement
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="backup-export-password"
                    type={showExportPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={exportPassword}
                    onChange={(e) => setExportPassword(e.target.value)}
                    placeholder="Au moins 6 caractères"
                    className={INPUT_CLASS}
                  />
                  <button
                    type="button"
                    onClick={() => setShowExportPassword((prev) => !prev)}
                    aria-label={
                      showExportPassword
                        ? 'Masquer le mot de passe de chiffrement'
                        : 'Afficher le mot de passe de chiffrement'
                    }
                    className={SECONDARY_BUTTON_CLASS}
                  >
                    {showExportPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="backup-export-password-confirm" className={LABEL_CLASS}>
                  Confirmer le mot de passe
                </label>
                <input
                  id="backup-export-password-confirm"
                  type={showExportPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={exportPasswordConfirm}
                  onChange={(e) => setExportPasswordConfirm(e.target.value)}
                  placeholder="Répétez le mot de passe"
                  className={INPUT_CLASS}
                />
              </div>

              <button
                type="submit"
                disabled={isExporting}
                className={`${PRIMARY_BUTTON_CLASS} w-full`}
              >
                <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Exporter en JSON chiffré (.cardio.enc.json)</span>
              </button>
            </div>
          </form>
        </div>

        {exportError && (
          <p role="alert" className="text-sm font-medium text-[var(--status-urgent-text)]">
            {exportError}
          </p>
        )}
        {exportStatus && (
          <p
            role="status"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--status-stable-text)]"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{exportStatus}</span>
          </p>
        )}

        <div className="space-y-4 border-t border-[var(--border-subtle)] pt-4">
          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
              <FileUp className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
              <span>Restaurer depuis un fichier de sauvegarde</span>
            </h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Sélectionnez un fichier <code>.cardio.json</code> ou <code>.cardio.enc.json</code>. Un
              aperçu complet vous est présenté avant toute écriture.
            </p>
          </div>

          <div>
            <label htmlFor="backup-import-file" className={LABEL_CLASS}>
              Fichier de sauvegarde à importer
            </label>
            <input
              ref={fileInputRef}
              id="backup-import-file"
              type="file"
              accept=".json,.cardio.json,.cardio.enc.json,application/json"
              disabled={isImporting}
              onChange={(e) => void handleFileSelected(e)}
              className="block w-full cursor-pointer rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] file:mr-3 file:rounded-lg file:border-0 file:bg-[var(--color-primary-soft)] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[var(--color-primary)]"
            />
          </div>

          {pendingEncryptedRaw && (
            <form
              onSubmit={(e) => void handleDecryptPreview(e)}
              className="space-y-3 rounded-xl border border-[var(--status-action-border)] bg-[var(--status-action-bg)] p-4"
              noValidate
            >
              <p className="m-0 text-sm font-medium text-[var(--text-primary)]">
                Sauvegarde chiffrée détectée ({selectedFileName}) : veuillez saisir votre mot de
                passe pour afficher l&apos;aperçu.
              </p>
              <div>
                <label htmlFor="backup-import-password" className={LABEL_CLASS}>
                  Mot de passe de déchiffrement
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="backup-import-password"
                    type={showImportPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={importPassword}
                    onChange={(e) => setImportPassword(e.target.value)}
                    placeholder="Saisissez le mot de passe utilisé à l'export"
                    className={INPUT_CLASS}
                  />
                  <button
                    type="button"
                    onClick={() => setShowImportPassword((prev) => !prev)}
                    aria-label={
                      showImportPassword
                        ? 'Masquer le mot de passe de déchiffrement'
                        : 'Afficher le mot de passe de déchiffrement'
                    }
                    className={SECONDARY_BUTTON_CLASS}
                  >
                    {showImportPassword ? (
                      <EyeOff className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="submit" disabled={isImporting} className={PRIMARY_BUTTON_CLASS}>
                  <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Déchiffrer et prévisualiser</span>
                </button>
                <button
                  type="button"
                  disabled={isImporting}
                  onClick={resetImportFlow}
                  className={SECONDARY_BUTTON_CLASS}
                >
                  Annuler
                </button>
              </div>
            </form>
          )}

          {parsedPreview && (
            <div
              aria-label="Aperçu de la sauvegarde avant restauration"
              className="space-y-3 rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-4"
            >
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  Aperçu de la sauvegarde ({parsedPreview.encrypted ? 'chiffrée AES-GCM' : 'JSON clair'})
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Profil :{' '}
                  <strong className="text-[var(--text-primary)]">
                    {parsedPreview.summary.profileDisplayName || 'Mon profil'}
                  </strong>{' '}
                  — Exportée le {formatIsoDateFr(parsedPreview.summary.exportedAt)}
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5">
                  <dt className="text-xs text-[var(--text-secondary)]">Saisies quotidiennes</dt>
                  <dd className="mt-0.5 text-base font-semibold tabular-nums text-[var(--text-primary)]">
                    {parsedPreview.summary.counts.dailyLogs}
                  </dd>
                </div>
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5">
                  <dt className="text-xs text-[var(--text-secondary)]">Traitements</dt>
                  <dd className="mt-0.5 text-base font-semibold tabular-nums text-[var(--text-primary)]">
                    {parsedPreview.summary.counts.medications}
                  </dd>
                </div>
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5">
                  <dt className="text-xs text-[var(--text-secondary)]">Bilans biologiques</dt>
                  <dd className="mt-0.5 text-base font-semibold tabular-nums text-[var(--text-primary)]">
                    {parsedPreview.summary.counts.labs}
                  </dd>
                </div>
                <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2.5">
                  <dt className="text-xs text-[var(--text-secondary)]">Examens d&apos;imagerie</dt>
                  <dd className="mt-0.5 text-base font-semibold tabular-nums text-[var(--text-primary)]">
                    {parsedPreview.summary.counts.imaging}
                  </dd>
                </div>
              </dl>

              <p className="text-xs text-[var(--text-secondary)]">
                Autres éléments inclus : {parsedPreview.summary.counts.events} événement(s) clinique(s),{' '}
                {parsedPreview.summary.counts.doseChanges} changement(s) de dose,{' '}
                {parsedPreview.summary.counts.adminProgress} démarche(s) France,{' '}
                {parsedPreview.summary.counts.questionTracking} question(s) suivie(s).
              </p>

              <p className="text-xs font-medium text-[var(--status-warning-text)]">
                Confirmer cette restauration remplacera les données actuelles de la base active. Vos
                réglages locaux (thème, code PIN et clé API BYOK) seront conservés.
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  disabled={isImporting}
                  onClick={() => void handleConfirmRestore()}
                  className={DANGER_BUTTON_CLASS}
                >
                  <Upload className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Confirmer la restauration</span>
                </button>
                <button
                  type="button"
                  disabled={isImporting}
                  onClick={resetImportFlow}
                  className={SECONDARY_BUTTON_CLASS}
                >
                  Annuler
                </button>
              </div>
            </div>
          )}

          {importError && (
            <p role="alert" className="text-sm font-medium text-[var(--status-urgent-text)]">
              {importError}
            </p>
          )}
          {importStatus && (
            <p
              role="status"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--status-stable-text)]"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{importStatus}</span>
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
