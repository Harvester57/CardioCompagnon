import { useCallback, useContext } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import type {
  ClinicalEvent,
  DailyLog,
  DoseChangeEvent,
  FrenchAdminProgress,
  ImagingExam,
  LabResult,
  Medication,
  MedicationIntakeLog,
  PatientProfile,
  PatientState,
  QuestionTracking,
} from '../types';
import {
  type CardioDatabase,
  activeDb,
  createDefaultProfile,
  createDefaultSettings,
  normalizeAppSettings,
} from './database';
import { DbContext, type DbContextValue } from './db-context';
import { DEMO_REFERENCE_DATE } from './demo-seed';
import {
  type AppSettingsPatch,
  getTodayIsoDate,
  loadPatientState,
  saveAppSettings,
} from './state-loader';

function useDbContextInternal(): DbContextValue {
  const ctx = useContext(DbContext);
  if (!ctx) {
    throw new Error('useActiveDb doit etre utilise a l interieur de DbProvider.');
  }
  return ctx;
}

export function useActiveDb(): CardioDatabase {
  return useDbContextInternal().db;
}

export function useDemoMode() {
  const { isDemoMode, isReady, setDemoMode, toggleDemoMode, resetDemo } = useDbContextInternal();
  return { isDemoMode, isReady, setDemoMode, toggleDemoMode, resetDemo };
}

export function useAppSettings() {
  const settings = useLiveQuery(async () => {
    const row = await activeDb.settings.get('settings');
    return normalizeAppSettings(row);
  }, []);

  const updateSettings = useCallback(async (patch: AppSettingsPatch) => {
    await saveAppSettings(activeDb, patch);
  }, []);

  return {
    settings: settings ?? createDefaultSettings(),
    isLoading: settings === undefined,
    updateSettings,
  };
}

export function usePatientState(referenceDate?: string): {
  state: PatientState | undefined;
  isLoading: boolean;
  reload: () => Promise<PatientState>;
} {
  const { db, isDemoMode } = useDbContextInternal();
  const effectiveReferenceDate =
    referenceDate ?? (isDemoMode ? DEMO_REFERENCE_DATE : getTodayIsoDate());

  const state = useLiveQuery(
    () => loadPatientState(db, effectiveReferenceDate),
    [db, effectiveReferenceDate],
  );

  const reload = useCallback(
    () => loadPatientState(db, effectiveReferenceDate),
    [db, effectiveReferenceDate],
  );

  return {
    state,
    isLoading: state === undefined,
    reload,
  };
}

export function usePatientProfile(): PatientProfile {
  const db = useActiveDb();
  const profile = useLiveQuery(async () => {
    return (await db.profile.get('active')) ?? createDefaultProfile();
  }, [db]);
  return profile ?? createDefaultProfile();
}

export function useDailyLogs(): DailyLog[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.dailyLogs.orderBy('date').toArray(), [db]) ?? [];
}

export function useMedications(): Medication[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.medications.toArray(), [db]) ?? [];
}

export function useDoseChanges(): DoseChangeEvent[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.doseChanges.orderBy('date').toArray(), [db]) ?? [];
}

export function useIntakeLogs(date?: string): MedicationIntakeLog[] {
  const db = useActiveDb();
  return (
    useLiveQuery(
      () => (date ? db.intakeLogs.where('date').equals(date).toArray() : db.intakeLogs.toArray()),
      [db, date],
    ) ?? []
  );
}

export function useLabs(): LabResult[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.labs.orderBy('date').toArray(), [db]) ?? [];
}

export function useImaging(): ImagingExam[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.imaging.orderBy('date').toArray(), [db]) ?? [];
}

export function useClinicalEvents(): ClinicalEvent[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.events.orderBy('date').toArray(), [db]) ?? [];
}

export function useAdminProgress(): FrenchAdminProgress[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.adminProgress.toArray(), [db]) ?? [];
}

export function useQuestionTracking(): QuestionTracking[] {
  const db = useActiveDb();
  return useLiveQuery(() => db.questionTracking.toArray(), [db]) ?? [];
}
