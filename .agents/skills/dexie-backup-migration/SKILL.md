---
name: dexie-backup-migration
description: Evolve the IndexedDB Dexie schema, Discovery Mode seed data, and plain/encrypted backup validation in lockstep without breaking existing user data or mixing active and demo databases.
---

# Dexie Schema, Demo Seed & Backup Migration

Use this skill whenever adding, renaming, or modifying persisted fields or tables in [src/types/domain.ts](../../../src/types/domain.ts), [src/db/database.ts](../../../src/db/database.ts), [src/db/demo-seed.ts](../../../src/db/demo-seed.ts), or [src/services/backup.ts](../../../src/services/backup.ts).

## 1. Coupled Files Checklist

Persisted data flows through five coupled locations. Inspect and update all affected layers together:
1. [src/types/domain.ts](../../../src/types/domain.ts) and [src/types/backup.ts](../../../src/types/backup.ts) -- TypeScript entity and backup payload contracts.
2. [src/db/database.ts](../../../src/db/database.ts) -- `CardioDatabase` Dexie tables, schema versions, and default builders (`createDefaultProfile`, `createDefaultSettings`, `createDefaultNotificationSettings`).
3. [src/db/state-loader.ts](../../../src/db/state-loader.ts) -- Reads IndexedDB tables into `PatientState` for the rules engine.
4. [src/db/demo-seed.ts](../../../src/db/demo-seed.ts) -- Anonymized fictional French dataset for Discovery Mode (`CardioCompagnonDemoDB`).
5. [src/services/backup.ts](../../../src/services/backup.ts) -- Export (`exportDatabasePayload`), schema validation (`validatePlainBackupPayload`), summary (`summarizeBackupPayload`), and transactional restore (`restoreBackupToDatabase`).

## 2. Database Isolation & Migration Rules

- **Never mix active and demo databases:** `activeDb` (`CardioCompagnonDB`) and `demoDb` (`CardioCompagnonDemoDB`) must remain strictly separated. All DB reads/writes in UI features must go through the database context/hooks in [src/db/](../../../src/db/index.ts).
- **Never mutate an existing Dexie version in place when indexed fields change:** Add a new `this.version(N).stores({ ... })` block in [src/db/database.ts](../../../src/db/database.ts) with an `.upgrade(tx => ...)` callback if existing records need backfill or transformation.
- **Additive non-indexed fields:** Optional properties on existing records do not require a Dexie index change, but default builders (`createDefaultProfile`, `createDefaultSettings`) and `validatePlainBackupPayload` must handle both legacy records (field absent) and new records cleanly.

## 3. Backup & Security Invariants

- **Backward compatibility:** Existing `.cardio.json` (`cardio-compagnon-plain-v1`) and `.cardio.enc.json` (`PBKDF2` + `AES-GCM`) backups must continue to validate and restore cleanly, or be upgraded explicitly during parsing.
- **Secret exclusion:** Backups must exclude BYOK AI API keys (`aiConfig.apiKey`) by default. Never weaken `PBKDF2` iterations, salt/IV generation, or validation checks in [src/services/crypto.ts](../../../src/services/crypto.ts) and [src/services/backup.ts](../../../src/services/backup.ts).
- **Atomic restore:** Keep `restoreBackupToDatabase` wrapped in a single Dexie readwrite transaction so a failed import cannot leave the database half-cleared.
- **Demo data hygiene:** Keep [src/db/demo-seed.ts](../../../src/db/demo-seed.ts) 100% fictional and anonymized (never real personal health data).

## 4. Verification Steps

1. Update unit tests in [src/db/__tests__/](../../../src/db/__tests__/) and [src/services/__tests__/backup.test.ts](../../../src/services/__tests__/backup.test.ts) covering:
   - Schema upgrade / default handling on `fake-indexeddb`.
   - Round-trip export and restore for both plain and password-encrypted backups.
   - Backward-compatible import of older backup payloads missing newly added optional fields.
   - Verification that BYOK API keys are stripped from exported backups.
2. Run `npm run check` and, if Settings or onboarding flows changed, run `npm run build && npm run test:e2e`.
