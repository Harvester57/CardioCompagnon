import { type FormEvent, type ReactNode, useState } from 'react';
import { Eye, EyeOff, HeartPulse, Lock, PhoneCall } from 'lucide-react';
import { useAppSettings } from '../db';
import { PIN_MIN_LENGTH, verifyPin } from '../services';
import { readUnlockedPinHash, writeUnlockedPinHash } from './pin-session';

export interface PinLockGateProps {
  children: ReactNode;
}

export function PinLockGate({ children }: PinLockGateProps) {
  const { settings, isLoading } = useAppSettings();
  const [unlockedHash, setUnlockedHash] = useState<string | null>(() => readUnlockedPinHash());
  const [pinInput, setPinInput] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (isLoading) {
    return (
      <main
        id="contenu-principal"
        className="flex min-h-screen items-center justify-center bg-[var(--bg-app)] p-6 text-[var(--text-primary)]"
      >
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-6 py-4 text-sm text-[var(--text-secondary)]"
        >
          Chargement de votre espace CardioCompagnon…
        </div>
      </main>
    );
  }

  const configuredHash = settings.pinHash;
  const configuredSalt = settings.pinSalt;
  const requiresUnlock =
    Boolean(configuredHash && configuredSalt) && unlockedHash !== configuredHash;

  if (!requiresUnlock) {
    return <>{children}</>;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    if (!configuredHash || !configuredSalt) {
      return;
    }

    const trimmed = pinInput.trim();
    if (trimmed.length < PIN_MIN_LENGTH) {
      setErrorMessage(
        `Veuillez saisir votre code PIN (au moins ${PIN_MIN_LENGTH} chiffres).`,
      );
      return;
    }

    setIsVerifying(true);
    try {
      const valid = await verifyPin(trimmed, configuredHash, configuredSalt);
      if (!valid) {
        setErrorMessage('Code PIN incorrect. Veuillez réessayer.');
        return;
      }
      writeUnlockedPinHash(configuredHash);
      setUnlockedHash(configuredHash);
      setPinInput('');
    } catch {
      setErrorMessage('Impossible de vérifier le code PIN. Veuillez réessayer.');
    } finally {
      setIsVerifying(false);
    }
  }

  return (
    <main
      id="contenu-principal"
      aria-labelledby="pin-lock-heading"
      className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-app)] px-4 py-8 text-[var(--text-primary)]"
    >
      <div className="w-full max-w-md space-y-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
            <Lock className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="mb-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
            <HeartPulse className="h-4 w-4" aria-hidden="true" />
            <span>CardioCompagnon</span>
          </div>
          <h1
            id="pin-lock-heading"
            className="m-0 text-xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            Accès protégé par code PIN
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
            Veuillez saisir votre code PIN local pour ouvrir votre espace de suivi sur cet appareil.
          </p>
        </div>

        <form onSubmit={(event) => void handleSubmit(event)} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="pin-unlock-input"
              className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]"
            >
              Code PIN local
            </label>
            <div className="flex items-center gap-2">
              <input
                id="pin-unlock-input"
                type={showPin ? 'text' : 'password'}
                inputMode="numeric"
                autoComplete="current-password"
                maxLength={8}
                value={pinInput}
                onChange={(event) => {
                  setPinInput(event.target.value);
                  if (errorMessage) {
                    setErrorMessage(null);
                  }
                }}
                aria-invalid={Boolean(errorMessage)}
                aria-describedby={errorMessage ? 'pin-unlock-error' : 'pin-unlock-help'}
                placeholder="Saisissez votre code PIN"
                className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3.5 py-2.5 text-base tabular-nums text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
              />
              <button
                type="button"
                onClick={() => setShowPin((prev) => !prev)}
                aria-label={showPin ? 'Masquer le code PIN' : 'Afficher le code PIN'}
                className="touch-target inline-flex shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-subtle)] px-3 py-2 text-[var(--text-primary)] hover:bg-[var(--bg-card)]"
              >
                {showPin ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <p id="pin-unlock-help" className="mt-1.5 text-xs text-[var(--text-secondary)]">
              Le déverrouillage reste actif pendant votre session courante sur cet onglet.
            </p>
          </div>

          {errorMessage && (
            <p
              id="pin-unlock-error"
              role="alert"
              className="rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3.5 py-2.5 text-sm font-medium text-[var(--status-urgent-text)]"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isVerifying}
            className="touch-target inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
          >
            <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{isVerifying ? 'Vérification en cours…' : 'Déverrouiller'}</span>
          </button>
        </form>

        <div className="rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3.5 py-2.5 text-xs leading-relaxed text-[var(--status-urgent-text)]">
          <div className="flex items-start gap-2">
            <PhoneCall className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p className="m-0">
              En cas d&apos;urgence médicale (douleur thoracique, essoufflement au repos, malaise),
              appelez immédiatement le <strong>15 (SAMU)</strong>, le <strong>112</strong> ou le{' '}
              <strong>114</strong> (SMS).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
