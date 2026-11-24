export {
  AES_KEY_LENGTH_BITS,
  CryptoServiceError,
  DEFAULT_PBKDF2_ITERATIONS,
  IV_BYTE_LENGTH,
  MAX_PBKDF2_ITERATIONS,
  MIN_PBKDF2_ITERATIONS,
  SALT_BYTE_LENGTH,
  base64ToBytes,
  bytesToBase64,
  decryptJson,
  derivePbkdf2Bits,
  encryptJson,
  generateRandomBytes,
  getWebCrypto,
  timingSafeEqualBytes,
  toSubtleBuffer,
  type CryptoServiceErrorCode,
  type EncryptJsonOptions,
  type EncryptedJsonEnvelope,
} from './crypto';

export {
  PIN_HASH_BIT_LENGTH,
  PIN_MIN_LENGTH,
  PIN_PBKDF2_ITERATIONS,
  hashPin,
  isValidNumericPin,
  verifyPin,
  type HashedPin,
} from './pin-lock';

export {
  BackupValidationError,
  createEncryptedBackupEnvelope,
  createPlainBackupEnvelope,
  exportDatabasePayload,
  isBackupOverdue,
  parseBackupEnvelope,
  restoreBackupToDatabase,
  summarizeBackupPayload,
  validatePlainBackupPayload,
  type BackupSummary,
  type BackupValidationErrorCode,
  type EncryptedBackupEnvelope,
  type ParsedBackupResult,
  type PlainBackupEnvelope,
} from './backup';

export {
  NOTIFICATIONS_SENT_STORAGE_KEY,
  REMINDER_DEFINITIONS,
  REMINDER_DEFINITION_MAP,
  clearSentReminders,
  evaluateDueReminders,
  getNotificationPermission,
  isNotificationSupported,
  isValidReminderTime,
  markReminderSent,
  parseReminderTimeMinutes,
  readSentRemindersForDate,
  requestNotificationPermission,
  runNotificationCheck,
  sendTestNotification,
  showLocalNotification,
  type EvaluateDueRemindersInput,
  type LocalNotificationPayload,
  type NotificationPermissionStatus,
  type ReminderDefinition,
} from './notifications';

export {
  AI_EXTRACTION_WARNING_FR,
  AI_MEDICAL_DISCLAIMER_FR,
  AI_PRIVACY_REMINDER_FR,
  AiServiceError,
  EXTRACTION_SYSTEM_PROMPT_FR,
  WIKI_QA_SYSTEM_PROMPT_FR,
  buildExtractionUserPromptFr,
  buildWikiQaUserPromptFr,
  createAiAdapter,
  extractJsonObjectFromText,
  normalizeExtractionProposal,
  normalizeWikiQaResponse,
  type AiServiceErrorCode,
  type ExtractReportInput,
  type WikiContextSnippet,
} from './ai/adapter';

export {
  DEFAULT_GEMINI_BASE_URL,
  DEFAULT_GEMINI_MODEL,
  createGeminiAdapter,
} from './ai/gemini.adapter';

export {
  DEFAULT_MISTRAL_BASE_URL,
  DEFAULT_MISTRAL_MODEL,
  DEFAULT_OPENAI_BASE_URL,
  DEFAULT_OPENAI_MODEL,
  createOpenAiCompatAdapter,
} from './ai/openai-compat.adapter';

export {
  DEFAULT_OLLAMA_BASE_URL,
  DEFAULT_OLLAMA_MODEL,
  createOllamaAdapter,
} from './ai/ollama.adapter';

export { extractReportWithAi } from './ai/extract-report';

export {
  askWikiWithAi,
  normalizeWikiSearchText,
  selectRelevantWikiSnippets,
  tokenizeFrenchQuery,
  type AskWikiWithAiOptions,
  type ScoredWikiSnippet,
} from './ai/wiki-qa';
