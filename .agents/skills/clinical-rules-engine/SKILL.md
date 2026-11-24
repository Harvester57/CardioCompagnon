---
name: clinical-rules-engine
description: Add, modify, or test deterministic clinical, medication, imaging, French rights, and driving fitness rules in src/engine/ while upholding non-medical-device safety, purity, and French 3-tier triage invariants.
---

# Deterministic Clinical & Regulatory Rules Engine

Use this skill whenever editing [src/engine/](../../../src/engine/index.ts), [src/types/rules.ts](../../../src/types/rules.ts), or unit conversions in [src/engine/units.ts](../../../src/engine/units.ts).

## 1. Architectural Invariants

- **100% pure and deterministic:** Every rule function accepts `PatientState` (which includes `state.referenceDate`) and returns `RuleOutput[]`. Never call `Date.now()`, `new Date()` without an explicit date input, `fetch`, `localStorage`, `window`, or any AI adapter.
- **Single orchestrator:** [src/engine/evaluate.ts](../../../src/engine/evaluate.ts) aggregates the 5 rule modules:
  - [daily-vitals.rules.ts](../../../src/engine/rules/daily-vitals.rules.ts)
  - [medications.rules.ts](../../../src/engine/rules/medications.rules.ts)
  - [labs-imaging.rules.ts](../../../src/engine/rules/labs-imaging.rules.ts)
  - [french-rights.rules.ts](../../../src/engine/rules/french-rights.rules.ts)
  - [driving.rules.ts](../../../src/engine/rules/driving.rules.ts)
- **Standalone calculator:** [driving-calculator.ts](../../../src/engine/driving-calculator.ts) implements `evaluateFrenchDrivingFitness(input)` based on the *Arrete du 28 mars 2022* and EU Directive 2016/1106.

## 2. Safety & Clinical Wording Rules

- **Non-medical-device posture:** Never diagnose a condition, prescribe a drug, or instruct the user to stop or change a dose. Phrase alerts as reference points to discuss with the care team (`sans modifier seul vos traitements`).
- **French 3-tier triage mapping:**
  - `urgent` severity triggers triage `urgent` (red): direct the user to call **15 (SAMU)**, **112**, or **114** (SMS).
  - `warning` severity triggers triage `warning` (orange): direct the user to contact their GP (*medecin traitant*), HF nurse / IPA, or cardiologist promptly.
  - `action` and `info` severities keep triage `stable` (green): follow-up items and educational reminders.
- **Strict modality separation:** Never mix or directly compare `ett` and `irm` LVEF/volume measurements as a single trend; flag `ETT_VS_IRM_DISCORDANCE` when modalities diverge instead of averaging them.
- **Units:** Use helpers from [src/engine/units.ts](../../../src/engine/units.ts) for LDL (`g/L` <-> `mmol/L`) and creatinine (`umol/L` <-> `mg/L`). Format displayed decimals with French commas.

## 3. Adding or Updating a Rule

1. **Register the ID:** If adding a new rule, add its literal ID to `RuleId` in [src/types/rules.ts](../../../src/types/rules.ts).
2. **Validate links:** Every `RuleOutput` must set:
   - `articleSlug` belonging to [expected-slugs.ts](../../../src/content/fr/expected-slugs.ts)
   - `sources` citing the exact guideline/law (e.g., `ESC 2026`, `HAS`, `Arrete du 28 mars 2022`)
   - `relatedQuestionIds` matching real IDs in [questions-catalog.ts](../../../src/content/fr/catalogs/questions-catalog.ts) when applicable
3. **Keep sorting stable:** `evaluatePatientState` stably sorts outputs by severity (`urgent` -> `warning` -> `action` -> `info`) and deduplicates `prioritizedQuestionIds` in priority order.

## 4. Required Testing Patterns

Add or update Vitest tests in [src/engine/__tests__/](../../../src/engine/__tests__/):
- Test exact threshold boundaries (just below, at, and just above each clinical cutoff).
- Test deterministic date calculations using fixed `referenceDate` values.
- Test negative/absent data cases (empty logs, missing optional labs, inactive clinical modules) so rules never throw or emit false positives.
- Verify no `.only()`, `.skip()`, or ESLint disable comments are present in test files.
- Run `npm run check` to validate typecheck, lint, static checks, and all unit tests.
