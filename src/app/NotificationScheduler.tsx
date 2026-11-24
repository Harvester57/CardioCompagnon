import { useEffect } from 'react';
import { useActiveDb, useAppSettings, useDemoMode } from '../db';
import { runNotificationCheck } from '../services';

const CHECK_INTERVAL_MS = 30_000;

export function NotificationScheduler() {
  const db = useActiveDb();
  const { isDemoMode } = useDemoMode();
  const { settings, isLoading } = useAppSettings();

  useEffect(() => {
    if (isLoading || isDemoMode || !settings.notifications.enabled) {
      return undefined;
    }

    let inFlight = false;
    let disposed = false;

    const triggerCheck = () => {
      if (inFlight || disposed) {
        return;
      }
      inFlight = true;
      void runNotificationCheck(db, settings)
        .catch(() => {
          // Echec silencieux si l'API Notification ou IndexedDB est temporairement indisponible
        })
        .finally(() => {
          inFlight = false;
        });
    };

    triggerCheck();

    const intervalId = window.setInterval(triggerCheck, CHECK_INTERVAL_MS);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        triggerCheck();
      }
    };

    const handleFocus = () => {
      triggerCheck();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      disposed = true;
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [db, isDemoMode, isLoading, settings]);

  return null;
}
