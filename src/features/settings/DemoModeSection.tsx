import { useState } from 'react';
import { CheckCircle2, Database, FlaskConical, RotateCcw } from 'lucide-react';
import { ACTIVE_DB_NAME, DEMO_DB_NAME, useDemoMode } from '../../db';
import { Card } from '../../ui';
import { PRIMARY_BUTTON_CLASS, SECONDARY_BUTTON_CLASS } from './constants';

export function DemoModeSection() {
  const { isDemoMode, setDemoMode, resetDemo } = useDemoMode();
  const [isBusy, setIsBusy] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleToggleDemoMode() {
    setIsBusy(true);
    setStatusMessage(null);
    setErrorMessage(null);
    try {
      const next = !isDemoMode;
      await setDemoMode(next);
      setStatusMessage(
        next
          ? 'Mode découverte activé sur la base fictive dédiée.'
          : 'Retour sur votre base personnelle effectué.',
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Impossible de basculer le mode découverte.',
      );
    } finally {
      setIsBusy(false);
    }
  }

  async function handleResetDemo() {
    setIsBusy(true);
    setStatusMessage(null);
    setErrorMessage(null);
    try {
      await resetDemo();
      setStatusMessage('Le profil de démonstration a été réinitialisé à ses valeurs fictives initiales.');
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Impossible de réinitialiser le profil de démonstration.',
      );
    } finally {
      setIsBusy(false);
    }
  }

  return (
    <Card
      title="Mode découverte (base séparée)"
      subtitle="Explorez l'ensemble des graphiques, alertes et modules avec un dossier fictif réaliste."
      icon={<FlaskConical className="h-5 w-5" />}
      tone={isDemoMode ? 'warning' : 'default'}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3.5 text-sm">
          <Database className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
          <div className="space-y-1 text-[var(--text-secondary)]">
            <p className="m-0 font-medium text-[var(--text-primary)]">
              Base active :{' '}
              <span className="font-mono text-xs">
                {isDemoMode ? DEMO_DB_NAME : ACTIVE_DB_NAME}
              </span>{' '}
              ({isDemoMode ? 'mode découverte' : 'profil personnel'})
            </p>
            <p className="m-0 text-xs leading-relaxed">
              Votre base personnelle (<code>{ACTIVE_DB_NAME}</code>) et la base de démonstration (
              <code>{DEMO_DB_NAME}</code>) sont totalement isolées. Activer le mode découverte ou y
              effectuer des essais n&apos;écrase jamais vos données personnelles.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={isBusy}
            aria-pressed={isDemoMode}
            onClick={() => void handleToggleDemoMode()}
            className={isDemoMode ? SECONDARY_BUTTON_CLASS : PRIMARY_BUTTON_CLASS}
          >
            <FlaskConical className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {isDemoMode ? 'Revenir à mon profil personnel' : 'Activer le mode découverte'}
            </span>
          </button>

          {isDemoMode && (
            <button
              type="button"
              disabled={isBusy}
              onClick={() => void handleResetDemo()}
              className={SECONDARY_BUTTON_CLASS}
            >
              <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Réinitialiser le profil de démonstration</span>
            </button>
          )}
        </div>

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
