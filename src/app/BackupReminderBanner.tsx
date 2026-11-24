import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardDriveDownload, X } from 'lucide-react';
import { getTodayIsoDate, useAppSettings, useDemoMode } from '../db';
import { isBackupOverdue } from '../services';

export function BackupReminderBanner() {
  const { pathname } = useLocation();
  const { isDemoMode } = useDemoMode();
  const { settings, isLoading } = useAppSettings();
  const [dismissed, setDismissed] = useState(false);

  if (isLoading || isDemoMode || dismissed || pathname === '/settings') {
    return null;
  }

  if (!settings.lastBackupAt) {
    return null;
  }

  const overdue = isBackupOverdue(settings.lastBackupAt, getTodayIsoDate(), 14);
  if (!overdue) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="no-print mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] px-3.5 py-2.5 text-xs text-[var(--status-warning-text)]"
    >
      <div className="flex items-center gap-2">
        <HardDriveDownload className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          Votre dernière sauvegarde locale date de plus de 14 jours. Pensez à exporter une nouvelle
          copie de vos données.
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to="/settings"
          className="inline-flex min-h-[36px] items-center rounded-lg border border-[var(--status-warning-border)] bg-[var(--bg-card)] px-3 py-1 font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
        >
          Sauvegarder
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Fermer le rappel de sauvegarde"
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-[var(--status-warning-text)] hover:bg-[var(--bg-card)]/60"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
