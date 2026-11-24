import { type FormEvent, useState } from 'react';
import { CheckCircle2, KeyRound, Lock, ShieldOff } from 'lucide-react';
import { useAppSettings } from '../../db';
import { hashPin, isValidNumericPin, verifyPin } from '../../services';
import { Card } from '../../ui';
import {
  DANGER_BUTTON_CLASS,
  INPUT_CLASS,
  LABEL_CLASS,
  PRIMARY_BUTTON_CLASS,
  SECONDARY_BUTTON_CLASS,
} from './constants';

export function PinLockSection() {
  const { settings, updateSettings } = useAppSettings();
  const isPinConfigured = Boolean(settings.pinHash && settings.pinSalt);

  const [mode, setMode] = useState<'change' | 'disable'>('change');
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [isBusy, setIsBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function clearFields() {
    setCurrentPin('');
    setNewPin('');
    setConfirmPin('');
  }

  async function handleEnablePin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setStatusMessage(null);

    if (!isValidNumericPin(newPin, 4, 8)) {
      setErrorMessage('Veuillez saisir un code PIN numérique composé de 4 à 8 chiffres.');
      return;
    }
    if (newPin !== confirmPin) {
      setErrorMessage('La confirmation du code PIN ne correspond pas.');
      return;
    }

    setIsBusy(true);
    try {
      const hashed = await hashPin(newPin);
      await updateSettings({
        pinHash: hashed.hash,
        pinSalt: hashed.salt,
      });
      clearFields();
      setStatusMessage('Le verrouillage local par code PIN est maintenant activé.');
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Impossible d’activer le code PIN.',
      );
    } finally {
      setIsBusy(false);
    }
  }

  async function handleModifyPin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setStatusMessage(null);

    if (!settings.pinHash || !settings.pinSalt) {
      return;
    }
    if (!isValidNumericPin(newPin, 4, 8)) {
      setErrorMessage('Le nouveau code PIN doit contenir entre 4 et 8 chiffres.');
      return;
    }
    if (newPin !== confirmPin) {
      setErrorMessage('La confirmation du nouveau code PIN ne correspond pas.');
      return;
    }

    setIsBusy(true);
    try {
      const matchesCurrent = await verifyPin(currentPin, settings.pinHash, settings.pinSalt);
      if (!matchesCurrent) {
        setErrorMessage('Le code PIN actuel est incorrect.');
        return;
      }

      const hashed = await hashPin(newPin);
      await updateSettings({
        pinHash: hashed.hash,
        pinSalt: hashed.salt,
      });
      clearFields();
      setStatusMessage('Votre code PIN local a été modifié.');
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Impossible de modifier le code PIN.',
      );
    } finally {
      setIsBusy(false);
    }
  }

  async function handleDisablePin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setStatusMessage(null);

    if (!settings.pinHash || !settings.pinSalt) {
      return;
    }

    setIsBusy(true);
    try {
      const matchesCurrent = await verifyPin(currentPin, settings.pinHash, settings.pinSalt);
      if (!matchesCurrent) {
        setErrorMessage('Le code PIN actuel est incorrect.');
        return;
      }

      await updateSettings({
        pinHash: undefined,
        pinSalt: undefined,
      });
      clearFields();
      setMode('change');
      setStatusMessage('Le verrouillage local par code PIN a été désactivé.');
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Impossible de désactiver le code PIN.',
      );
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <Card
      title="Verrouillage local par code PIN"
      subtitle="Protégez l'accès sur cet appareil à l'aide d'un code numérique de 4 à 8 chiffres haché localement (PBKDF2-SHA256)."
      icon={<Lock className="h-5 w-5" />}
    >
      <div className="space-y-4">
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
            isPinConfigured
              ? 'border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] text-[var(--status-stable-text)]'
              : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
          }`}
        >
          <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{isPinConfigured ? 'Code PIN actif' : 'Code PIN désactivé'}</span>
        </div>

        {!isPinConfigured ? (
          <form onSubmit={(e) => void handleEnablePin(e)} className="space-y-3" noValidate>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="pin-new" className={LABEL_CLASS}>
                  Nouveau code PIN (4 à 8 chiffres)
                </label>
                <input
                  id="pin-new"
                  type="password"
                  inputMode="numeric"
                  autoComplete="new-password"
                  maxLength={8}
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="Ex. : 2468"
                  className={`${INPUT_CLASS} tabular-nums`}
                />
              </div>
              <div>
                <label htmlFor="pin-confirm" className={LABEL_CLASS}>
                  Confirmer le code PIN
                </label>
                <input
                  id="pin-confirm"
                  type="password"
                  inputMode="numeric"
                  autoComplete="new-password"
                  maxLength={8}
                  value={confirmPin}
                  onChange={(e) => setConfirmPin(e.target.value)}
                  placeholder="Répétez le code PIN"
                  className={`${INPUT_CLASS} tabular-nums`}
                />
              </div>
            </div>

            <button type="submit" disabled={isBusy} className={PRIMARY_BUTTON_CLASS}>
              <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Activer le code PIN</span>
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={mode === 'change'}
                onClick={() => {
                  setMode('change');
                  setErrorMessage(null);
                  setStatusMessage(null);
                  clearFields();
                }}
                className={mode === 'change' ? PRIMARY_BUTTON_CLASS : SECONDARY_BUTTON_CLASS}
              >
                <KeyRound className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Modifier le code PIN</span>
              </button>
              <button
                type="button"
                aria-pressed={mode === 'disable'}
                onClick={() => {
                  setMode('disable');
                  setErrorMessage(null);
                  setStatusMessage(null);
                  clearFields();
                }}
                className={mode === 'disable' ? DANGER_BUTTON_CLASS : SECONDARY_BUTTON_CLASS}
              >
                <ShieldOff className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Désactiver le code PIN</span>
              </button>
            </div>

            {mode === 'change' ? (
              <form onSubmit={(e) => void handleModifyPin(e)} className="space-y-3" noValidate>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div>
                    <label htmlFor="pin-current-change" className={LABEL_CLASS}>
                      Code PIN actuel
                    </label>
                    <input
                      id="pin-current-change"
                      type="password"
                      inputMode="numeric"
                      autoComplete="current-password"
                      maxLength={8}
                      value={currentPin}
                      onChange={(e) => setCurrentPin(e.target.value)}
                      className={`${INPUT_CLASS} tabular-nums`}
                    />
                  </div>
                  <div>
                    <label htmlFor="pin-new-change" className={LABEL_CLASS}>
                      Nouveau code PIN (4 à 8 chiffres)
                    </label>
                    <input
                      id="pin-new-change"
                      type="password"
                      inputMode="numeric"
                      autoComplete="new-password"
                      maxLength={8}
                      value={newPin}
                      onChange={(e) => setNewPin(e.target.value)}
                      className={`${INPUT_CLASS} tabular-nums`}
                    />
                  </div>
                  <div>
                    <label htmlFor="pin-confirm-change" className={LABEL_CLASS}>
                      Confirmer le nouveau PIN
                    </label>
                    <input
                      id="pin-confirm-change"
                      type="password"
                      inputMode="numeric"
                      autoComplete="new-password"
                      maxLength={8}
                      value={confirmPin}
                      onChange={(e) => setConfirmPin(e.target.value)}
                      className={`${INPUT_CLASS} tabular-nums`}
                    />
                  </div>
                </div>
                <button type="submit" disabled={isBusy} className={PRIMARY_BUTTON_CLASS}>
                  <KeyRound className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Enregistrer le nouveau code PIN</span>
                </button>
              </form>
            ) : (
              <form onSubmit={(e) => void handleDisablePin(e)} className="space-y-3" noValidate>
                <div className="max-w-xs">
                  <label htmlFor="pin-current-disable" className={LABEL_CLASS}>
                    Code PIN actuel pour confirmer
                  </label>
                  <input
                    id="pin-current-disable"
                    type="password"
                    inputMode="numeric"
                    autoComplete="current-password"
                    maxLength={8}
                    value={currentPin}
                    onChange={(e) => setCurrentPin(e.target.value)}
                    className={`${INPUT_CLASS} tabular-nums`}
                  />
                </div>
                <button type="submit" disabled={isBusy} className={DANGER_BUTTON_CLASS}>
                  <ShieldOff className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Confirmer la désactivation du code PIN</span>
                </button>
              </form>
            )}
          </div>
        )}

        {errorMessage && (
          <p role="alert" className="text-sm font-medium text-[var(--status-urgent-text)]">
            {errorMessage}
          </p>
        )}
        {statusMessage && (
          <p
            role="status"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--status-stable-text)]"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{statusMessage}</span>
          </p>
        )}
      </div>
    </Card>
  );
}
