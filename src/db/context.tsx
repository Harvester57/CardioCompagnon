import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import {
  activeDb,
  createDefaultSettings,
  demoDb,
  ensureDbInitialized,
  normalizeAppSettings,
} from './database';
import { DbContext, type DbContextValue } from './db-context';
import { resetDemoDatabase, seedDemoDatabase } from './demo-seed';

const DEMO_MODE_STORAGE_KEY = 'cardio_compagnon_demo_mode';

function readInitialDemoFlag(): boolean {
  try {
    return window.localStorage.getItem(DEMO_MODE_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function writeDemoFlag(enabled: boolean): void {
  try {
    window.localStorage.setItem(DEMO_MODE_STORAGE_KEY, enabled ? 'true' : 'false');
  } catch {
    // Stockage local indisponible (navigation privee stricte)
  }
}

export interface DbProviderProps {
  children: ReactNode;
  initialDemoMode?: boolean;
}

export function DbProvider({ children, initialDemoMode }: DbProviderProps) {
  const [isDemoMode, setIsDemoModeState] = useState<boolean>(
    () => initialDemoMode ?? readInitialDemoFlag(),
  );
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    async function init() {
      await ensureDbInitialized(activeDb);
      if (isDemoMode) {
        await seedDemoDatabase(demoDb);
      }
      if (!cancelled) {
        setIsReady(true);
      }
    }
    void init();
    return () => {
      cancelled = true;
    };
  }, [isDemoMode]);

  const setDemoMode = useCallback(async (enabled: boolean) => {
    if (enabled) {
      await seedDemoDatabase(demoDb);
    }
    writeDemoFlag(enabled);
    setIsDemoModeState(enabled);
  }, []);

  const toggleDemoMode = useCallback(async () => {
    await setDemoMode(!isDemoMode);
  }, [isDemoMode, setDemoMode]);

  const resetDemo = useCallback(async () => {
    await resetDemoDatabase(demoDb);
  }, []);

  const db = isDemoMode ? demoDb : activeDb;

  const settings = useLiveQuery(
    async () => normalizeAppSettings(await activeDb.settings.get('settings')),
    [],
  );

  useEffect(() => {
    const resolved = settings ?? createDefaultSettings();
    const root = document.documentElement;

    const applyTheme = () => {
      const prefersDark =
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark =
        resolved.theme === 'dark' || (resolved.theme === 'system' && prefersDark);
      root.classList.toggle('dark', shouldBeDark);
    };

    applyTheme();
    root.classList.toggle('large-text', Boolean(resolved.largeTextMode));

    if (resolved.theme === 'system' && typeof window.matchMedia === 'function') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => applyTheme();
      media.addEventListener('change', handler);
      return () => media.removeEventListener('change', handler);
    }
    return undefined;
  }, [settings]);

  const value = useMemo<DbContextValue>(
    () => ({
      db,
      isDemoMode,
      isReady,
      setDemoMode,
      toggleDemoMode,
      resetDemo,
    }),
    [db, isDemoMode, isReady, setDemoMode, toggleDemoMode, resetDemo],
  );

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
