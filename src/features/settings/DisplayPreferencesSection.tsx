import { useEffect, useState } from 'react';
import {
  AlertTriangle,
  Bell,
  BellOff,
  BellRing,
  CheckCircle2,
  Clock,
  Eye,
  Monitor,
  Moon,
  Pill,
  Sun,
} from 'lucide-react';
import { type AppSettingsPatch, useAppSettings } from '../../db';
import {
  REMINDER_DEFINITIONS,
  getNotificationPermission,
  isValidReminderTime,
  requestNotificationPermission,
  sendTestNotification,
  type NotificationPermissionStatus,
} from '../../services';
import type { AppSettings, ReminderType } from '../../types';
import { Card } from '../../ui';
import { SECONDARY_BUTTON_CLASS } from './constants';

const THEME_OPTIONS: readonly {
  value: AppSettings['theme'];
  labelFr: string;
  descriptionFr: string;
  icon: typeof Sun;
}[] = [
  {
    value: 'light',
    labelFr: 'Clair',
    descriptionFr: 'Fond clair apaisant',
    icon: Sun,
  },
  {
    value: 'dark',
    labelFr: 'Sombre',
    descriptionFr: 'Confort visuel nocturne',
    icon: Moon,
  },
  {
    value: 'system',
    labelFr: 'Système',
    descriptionFr: 'Suit le réglage de votre appareil',
    icon: Monitor,
  },
];

function renderPermissionBadge(permission: NotificationPermissionStatus) {
  switch (permission) {
    case 'granted':
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-stable-text)]">
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Autorisées</span>
        </span>
      );
    case 'denied':
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-urgent-text)]">
          <BellOff className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Bloquées</span>
        </span>
      );
    case 'unsupported':
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-[var(--status-info-border)] bg-[var(--status-info-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-info-text)]">
          <BellOff className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Non prises en charge</span>
        </span>
      );
    case 'default':
      return (
        <span className="inline-flex items-center gap-1 rounded-full border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-warning-text)]">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Autorisation requise</span>
        </span>
      );
  }
}

const REMINDER_TIME_SLOTS: readonly string[] = Array.from({ length: 24 * 4 }, (_, index) => {
  const hours = String(Math.floor(index / 4)).padStart(2, '0');
  const minutes = String((index % 4) * 15).padStart(2, '0');
  return `${hours}:${minutes}`;
});

function buildReminderTimeOptions(currentTime: string): string[] {
  if (!currentTime || REMINDER_TIME_SLOTS.includes(currentTime)) {
    return [...REMINDER_TIME_SLOTS];
  }
  return [...REMINDER_TIME_SLOTS, currentTime].sort();
}

export function DisplayPreferencesSection() {
  const { settings, updateSettings } = useAppSettings();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [permission, setPermission] = useState<NotificationPermissionStatus>(() =>
    getNotificationPermission(),
  );
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);
  const [isSendingTest, setIsSendingTest] = useState(false);

  useEffect(() => {
    const syncPermission = () => {
      setPermission(getNotificationPermission());
    };
    window.addEventListener('focus', syncPermission);
    document.addEventListener('visibilitychange', syncPermission);
    return () => {
      window.removeEventListener('focus', syncPermission);
      document.removeEventListener('visibilitychange', syncPermission);
    };
  }, []);

  async function applyPatch(patch: AppSettingsPatch, confirmationFr: string) {
    setErrorMessage(null);
    setStatusMessage(null);
    try {
      await updateSettings(patch);
      setStatusMessage(confirmationFr);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Impossible d’enregistrer vos préférences d’affichage.',
      );
    }
  }

  async function handleToggleNotifications(nextEnabled: boolean) {
    setErrorMessage(null);
    setStatusMessage(null);

    if (!nextEnabled) {
      await applyPatch(
        {
          notifications: {
            enabled: false,
          },
        },
        'Notifications de rappel désactivées.',
      );
      return;
    }

    const currentPermission = getNotificationPermission();
    setPermission(currentPermission);

    if (currentPermission === 'unsupported') {
      setErrorMessage(
        "Les notifications ne sont pas prises en charge par ce navigateur. Sur iPhone/iPad, installez d'abord l'application sur l'écran d'accueil.",
      );
      return;
    }

    if (currentPermission === 'denied') {
      setErrorMessage(
        'Les notifications sont bloquées par votre navigateur. Autorisez-les dans les paramètres du site pour activer les rappels.',
      );
      return;
    }

    let resolvedPermission: NotificationPermissionStatus = currentPermission;
    if (currentPermission === 'default') {
      setIsRequestingPermission(true);
      try {
        resolvedPermission = await requestNotificationPermission();
        setPermission(resolvedPermission);
      } finally {
        setIsRequestingPermission(false);
      }
    }

    if (resolvedPermission !== 'granted') {
      setErrorMessage(
        resolvedPermission === 'denied'
          ? 'Autorisation refusée. Vous pouvez la réactiver à tout moment dans les paramètres de votre navigateur.'
          : "Autorisation non accordée. Acceptez la demande du navigateur pour recevoir vos rappels.",
      );
      return;
    }

    await applyPatch(
      {
        notifications: {
          enabled: true,
        },
      },
      'Notifications de rappel activées.',
    );
  }

  async function handleRequestBrowserPermission() {
    setErrorMessage(null);
    setStatusMessage(null);
    setIsRequestingPermission(true);
    try {
      const nextPermission = await requestNotificationPermission();
      setPermission(nextPermission);
      if (nextPermission === 'granted') {
        setStatusMessage('Autorisation navigateur accordée. Vos rappels sont prêts.');
      } else if (nextPermission === 'denied') {
        setErrorMessage(
          'Les notifications sont bloquées dans votre navigateur. Modifiez les permissions du site pour les autoriser.',
        );
      } else {
        setErrorMessage("Autorisation non accordée. Réessayez pour activer les notifications.");
      }
    } finally {
      setIsRequestingPermission(false);
    }
  }

  async function handleReminderToggle(type: ReminderType, enabled: boolean, labelFr: string) {
    const current = settings.notifications.reminders[type];
    await applyPatch(
      {
        notifications: {
          reminders: {
            [type]: {
              enabled,
            },
          },
        },
      },
      enabled
        ? `Rappel « ${labelFr} » activé (${current.time}).`
        : `Rappel « ${labelFr} » désactivé.`,
    );
  }

  async function handleReminderTimeChange(type: ReminderType, nextTime: string, labelFr: string) {
    if (!isValidReminderTime(nextTime)) {
      setErrorMessage(`Veuillez sélectionner une heure valide pour « ${labelFr} ».`);
      return;
    }
    await applyPatch(
      {
        notifications: {
          reminders: {
            [type]: {
              time: nextTime,
            },
          },
        },
      },
      `Horaire du rappel « ${labelFr} » réglé sur ${nextTime}.`,
    );
  }

  async function handleSendTestNotification() {
    setErrorMessage(null);
    setStatusMessage(null);
    setIsSendingTest(true);
    try {
      const sent = await sendTestNotification();
      if (sent) {
        setStatusMessage('Notification de test envoyée.');
      } else {
        setErrorMessage(
          "Impossible d'afficher la notification de test. Vérifiez que les notifications sont autorisées pour ce site.",
        );
      }
    } finally {
      setIsSendingTest(false);
    }
  }

  const notificationsEnabled = settings.notifications.enabled;

  return (
    <Card
      title="Affichage et suivi quotidien"
      subtitle="Adaptez la lisibilité de l'interface et les options affichées sur votre écran d'accueil."
      icon={<Eye className="h-5 w-5" />}
    >
      <div className="space-y-5">
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-[var(--text-primary)]">
            Thème visuel
          </legend>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {THEME_OPTIONS.map(({ value, labelFr, descriptionFr, icon: Icon }) => {
              const selected = settings.theme === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    void applyPatch({ theme: value }, `Thème « ${labelFr} » activé.`)
                  }
                  className={`touch-target flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors ${
                    selected
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{labelFr}</span>
                    <span className="block text-xs text-[var(--text-secondary)]">
                      {descriptionFr}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="space-y-3 border-t border-[var(--border-subtle)] pt-4">
          <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-3.5">
            <input
              id="settings-large-text"
              name="largeTextMode"
              type="checkbox"
              aria-describedby="settings-large-text-desc"
              checked={settings.largeTextMode}
              onChange={(e) =>
                void applyPatch(
                  { largeTextMode: e.target.checked },
                  e.target.checked
                    ? 'Mode Texte agrandi activé (120 % et contrastes renforcés).'
                    : 'Mode Texte agrandi désactivé.',
                )
              }
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
            />
            <div className="text-sm">
              <label
                htmlFor="settings-large-text"
                className="block cursor-pointer font-medium text-[var(--text-primary)]"
              >
                Texte agrandi (confort de lecture)
              </label>
              <p
                id="settings-large-text-desc"
                className="mt-0.5 text-xs text-[var(--text-secondary)]"
              >
                Augmente la taille du texte à 120 % et renforce les contrastes dans toute
                l&apos;application.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-3.5">
            <input
              id="settings-daily-pill-checkin"
              name="enableDailyPillCheckin"
              type="checkbox"
              aria-describedby="settings-daily-pill-checkin-desc"
              checked={settings.enableDailyPillCheckin}
              onChange={(e) =>
                void applyPatch(
                  { enableDailyPillCheckin: e.target.checked },
                  e.target.checked
                    ? 'Suivi quotidien des prises médicamenteuses activé.'
                    : 'Suivi quotidien des prises médicamenteuses désactivé.',
                )
              }
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
            />
            <div className="text-sm">
              <div className="flex items-center gap-1.5">
                <Pill className="h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
                <label
                  htmlFor="settings-daily-pill-checkin"
                  className="cursor-pointer font-medium text-[var(--text-primary)]"
                >
                  Activer le suivi quotidien des prises médicamenteuses
                </label>
              </div>
              <p
                id="settings-daily-pill-checkin-desc"
                className="mt-0.5 text-xs text-[var(--text-secondary)]"
              >
                Affiche une liste à cocher par créneau (matin, midi, soir, coucher) dans l&apos;écran
                Aujourd&apos;hui pour vous aider à suivre vos prises.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-3.5">
            <div className="flex items-start gap-3">
              <input
                id="settings-notifications-enabled"
                name="notificationsEnabled"
                type="checkbox"
                aria-describedby="settings-notifications-enabled-desc"
                aria-controls="settings-notifications-panel"
                checked={notificationsEnabled}
                disabled={permission === 'unsupported' || isRequestingPermission}
                onChange={(e) => void handleToggleNotifications(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-50"
              />
              <div className="min-w-0 flex-1 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <Bell
                      className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
                      aria-hidden="true"
                    />
                    <label
                      htmlFor="settings-notifications-enabled"
                      className="cursor-pointer font-medium text-[var(--text-primary)]"
                    >
                      Activer les notifications de rappel
                    </label>
                  </div>
                  {renderPermissionBadge(permission)}
                </div>
                <p
                  id="settings-notifications-enabled-desc"
                  className="mt-0.5 text-xs text-[var(--text-secondary)]"
                >
                  Envoie des rappels locaux sur cet appareil pour la pesée matinale, le bilan
                  quotidien et vos prises médicamenteuses.
                </p>
              </div>
            </div>

            {permission === 'unsupported' && (
              <p className="mt-3 rounded-lg border border-[var(--status-info-border)] bg-[var(--status-info-bg)] px-3 py-2 text-xs text-[var(--status-info-text)]">
                Ce navigateur ne prend pas en charge l&apos;API Notifications. Sur iPhone ou iPad
                (iOS 16.4+), ajoutez d&apos;abord CardioCompagnon à l&apos;écran d&apos;accueil.
              </p>
            )}

            {permission === 'denied' && (
              <p className="mt-3 rounded-lg border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3 py-2 text-xs text-[var(--status-urgent-text)]">
                Les notifications sont bloquées dans les réglages de votre navigateur pour ce site.
                Autorisez-les puis revenez sur cette page pour activer vos rappels.
              </p>
            )}

            {notificationsEnabled && (
              <div
                id="settings-notifications-panel"
                className="mt-4 space-y-3 border-t border-[var(--border-subtle)] pt-4"
              >
                {permission === 'default' && (
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] px-3 py-2 text-xs text-[var(--status-warning-text)]">
                    <span>
                      Votre navigateur demande une nouvelle autorisation pour afficher les
                      notifications.
                    </span>
                    <button
                      type="button"
                      disabled={isRequestingPermission}
                      onClick={() => void handleRequestBrowserPermission()}
                      className="touch-target rounded-lg border border-[var(--status-warning-border)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                    >
                      Autoriser dans le navigateur
                    </button>
                  </div>
                )}

                <fieldset className="space-y-2.5">
                  <legend className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                    Rappels quotidiens et horaires
                  </legend>

                  {REMINDER_DEFINITIONS.map((def) => {
                    const schedule = settings.notifications.reminders[def.type];
                    const checkboxId = `reminder-enabled-${def.type}`;
                    const descId = `reminder-desc-${def.type}`;
                    const timeId = `reminder-time-${def.type}`;

                    return (
                      <div
                        key={def.type}
                        className="flex flex-col gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <input
                            id={checkboxId}
                            name={`reminderEnabled_${def.type}`}
                            type="checkbox"
                            aria-describedby={descId}
                            checked={schedule.enabled}
                            onChange={(e) =>
                              void handleReminderToggle(def.type, e.target.checked, def.labelFr)
                            }
                            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
                          />
                          <div className="min-w-0 text-sm">
                            <label
                              htmlFor={checkboxId}
                              className="block cursor-pointer font-medium text-[var(--text-primary)]"
                            >
                              {def.labelFr}
                            </label>
                            <p
                              id={descId}
                              className="mt-0.5 text-xs text-[var(--text-secondary)]"
                            >
                              {def.descriptionFr}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 pl-7 sm:pl-0">
                          <Clock
                            className="h-4 w-4 shrink-0 text-[var(--text-secondary)]"
                            aria-hidden="true"
                          />
                          <span
                            aria-hidden="true"
                            className="text-xs font-medium text-[var(--text-secondary)]"
                          >
                            Heure
                          </span>
                          <label htmlFor={timeId} className="sr-only">
                            {`Heure du rappel ${def.labelFr}`}
                          </label>
                          <select
                            id={timeId}
                            name={`reminderTime_${def.type}`}
                            value={schedule.time}
                            disabled={!schedule.enabled}
                            onChange={(e) =>
                              void handleReminderTimeChange(def.type, e.target.value, def.labelFr)
                            }
                            className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-[max(1rem,1em)] text-[var(--text-primary)] tabular-nums disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {buildReminderTimeOptions(schedule.time).map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    );
                  })}
                </fieldset>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    disabled={permission !== 'granted' || isSendingTest}
                    onClick={() => void handleSendTestNotification()}
                    className={SECONDARY_BUTTON_CLASS}
                  >
                    <BellRing className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>
                      {isSendingTest ? 'Envoi en cours…' : 'Envoyer une notification de test'}
                    </span>
                  </button>
                  <p className="m-0 max-w-md text-xs text-[var(--text-secondary)]">
                    Fonctionnement 100 % local sans serveur externe : les rappels se déclenchent
                    lorsque l&apos;application est ouverte ou en arrière-plan.
                  </p>
                </div>
              </div>
            )}
          </div>
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
