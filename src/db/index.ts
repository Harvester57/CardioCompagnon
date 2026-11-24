export {
  ACTIVE_DB_NAME,
  DEMO_DB_NAME,
  CardioDatabase,
  activeDb,
  demoDb,
  createDefaultNotificationSettings,
  createDefaultProfile,
  createDefaultSettings,
  ensureDbInitialized,
  normalizeAppSettings,
} from './database';

export { DEMO_REFERENCE_DATE, seedDemoDatabase, resetDemoDatabase } from './demo-seed';

export {
  getTodayIsoDate,
  loadPatientState,
  saveProfile,
  saveAppSettings,
  upsertDailyLog,
  upsertAdminProgress,
  upsertQuestionTracking,
  clearPatientData,
  type AppSettingsPatch,
  type NotificationSettingsPatch,
} from './state-loader';

export { DbProvider, type DbProviderProps } from './context';
export type { DbContextValue } from './db-context';
export {
  useActiveDb,
  useDemoMode,
  useAppSettings,
  usePatientState,
  usePatientProfile,
  useDailyLogs,
  useMedications,
  useDoseChanges,
  useIntakeLogs,
  useLabs,
  useImaging,
  useClinicalEvents,
  useAdminProgress,
  useQuestionTracking,
} from './hooks';
