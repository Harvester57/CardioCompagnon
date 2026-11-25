# AGENTS.md

Instructions and engineering guardrails for AI coding agents working in `cardio-compagnon-pwa` (**CardioCompagnon**).

## 1. Project Overview

CardioCompagnon is a private, local-first, offline-capable **Progressive Web App (PWA)** in French for daily self-tracking, scientific education, and French healthcare/administrative navigation for people living with **ischaemic cardiomyopathy** (HFrEF / Stage B asymptomatic LV dysfunction / HFimpEF).

For full architectural contracts, data models, and content mapping, read:
- [Design & Architecture Specification](./docs/design-spec.md)
- [Wiki Sharding Manifest & French Glossary](./docs/wiki-sharding-manifest.md)

## 2. Tech Stack & Commands

- **Runtime & Tooling:** Node.js 24, TypeScript 6 (`strict: true`), Vite 8, ESLint 10 (`typescript-eslint`, `react-hooks`, `jsx-a11y-x`)
- **UI & Styling:** React 19, React Router 7 (`HashRouter`), Tailwind CSS v4, Recharts, `lucide-react`
- **Local Storage & PWA:** Dexie.js 4 (IndexedDB), `dexie-react-hooks`, `vite-plugin-pwa` (Workbox)
- **Security & AI:** Native Web Crypto API (`PBKDF2` + `AES-GCM`), optional client-side BYOK AI adapters (Gemini, OpenAI-compatible/Mistral, Ollama)
- **Testing:** Vitest 5 + Testing Library + `fake-indexeddb` + jsdom (unit/integration), Playwright (Chromium, `fr-FR` locale, E2E)

Key commands defined in [package.json](./package.json):

```bash
npm run dev              # Start Vite dev server
npm run build            # Typecheck (tsc --noEmit) + production Vite/PWA build
npm run preview          # Preview production build locally
npm run typecheck        # TypeScript strict check
npm run lint             # ESLint across src, scripts, e2e, and config files
npm run static-check     # Custom static checks (no emojis, no private refs, test hygiene)
npm run test             # Run Vitest unit and integration suite once
npm run test:watch       # Run Vitest in watch mode
npm run test:e2e         # Run Playwright E2E tests against built preview
npm run audit:prod       # Check production dependencies for vulnerabilities
npm run check            # Full verification gate: typecheck + lint + static-check + test + audit:prod
npm run check:wiki-sync  # Verify 44 French articles match local wiki frontmatter dates (uses WIKI_ROOT)
```

## 3. Architecture & Directory Boundaries

Keep changes scoped to the appropriate architectural layer:

- [src/types/index.ts](./src/types/index.ts) -- Canonical TypeScript contracts (`domain.ts`, `rules.ts`, `content.ts`, `ai.ts`, `backup.ts`). Changes here affect all layers; update tests and consumers together.
- [src/db/index.ts](./src/db/index.ts) -- Dexie schema (`CardioCompagnonDB` for active user data and `CardioCompagnonDemoDB` for isolated Discovery Mode), React hooks, demo seed, and `state-loader.ts`. Never mix active and demo databases. When changing indexed fields in [database.ts](./src/db/database.ts), add a new Dexie schema version instead of mutating version 1 in place.
- [src/engine/index.ts](./src/engine/index.ts) -- Pure, deterministic, offline clinical and regulatory rules engine (`evaluatePatientState`, `evaluateFrenchDrivingFitness`, unit conversions in [units.ts](./src/engine/units.ts), and rule modules in [daily-vitals.rules.ts](./src/engine/rules/daily-vitals.rules.ts), [medications.rules.ts](./src/engine/rules/medications.rules.ts), [labs-imaging.rules.ts](./src/engine/rules/labs-imaging.rules.ts), [french-rights.rules.ts](./src/engine/rules/french-rights.rules.ts), [driving.rules.ts](./src/engine/rules/driving.rules.ts)). Must never depend on network calls, browser globals, or AI.
- [src/services/index.ts](./src/services/index.ts) -- Web Crypto (`crypto.ts`), PIN lock (`pin-lock.ts`), JSON and encrypted backup/restore (`backup.ts`), local notifications (`notifications.ts`), and optional BYOK AI (`ai/`). Backups must exclude BYOK API keys by default.
- [src/content/fr/index.ts](./src/content/fr/index.ts) -- Auto-discovers all 44 French scientific articles via `import.meta.glob('./articles/*.ts', { eager: true })`. Slugs must stay in sync with [expected-slugs.ts](./src/content/fr/expected-slugs.ts) and the 5 structured catalogs (`medications-reference.ts`, `interactions-catalog.ts`, `french-admin-catalog.ts`, `questions-catalog.ts`, `glossary.ts`).
- [src/ui/index.ts](./src/ui/index.ts) -- Shared design system ([theme.css](./src/ui/theme.css) with light default, dark mode, large text mode, and `@media print` A4 rules), `AppShell`, `DisclaimerBanner`, `TriageBadge`, `EvidenceBadge`, `GlossaryTooltip`, and `Card`.
- [src/app/routes.tsx](./src/app/routes.tsx) -- Lazy-loaded routes for the 7 feature modules (`today`, `meds`, `exams`, `plan`, `france`, `library`, `settings`) wrapped in `HashRouter`, `RouteErrorBoundary`, `PinLockGate`, `NotificationScheduler`, and `BackupReminderBanner`.

## 4. Non-Negotiable Invariants

### 4.1 Privacy & Source Hygiene
- **Zero backend by default:** No health data may leave the browser unless the user explicitly configures a BYOK AI provider and confirms the consent banner.
- **Strict source boundary:** Never read, index, cite, or copy personal documents or private directories outside `wiki/` and `output/`. Do not commit personal medical information; Discovery Mode uses fictional anonymized French data only.
- Enforced automatically by [static-checks.ts](./scripts/static-checks.ts) and [check-wiki-sync.ts](./scripts/check-wiki-sync.ts).

### 4.2 Non-Medical-Device Posture
- The application is an educational and self-tracking companion, **not** a medical device.
- Never diagnose, prescribe, or instruct a user to stop or adjust medication doses without medical advice.
- Clinical thresholds (potassium, creatinine/eGFR, NT-proBNP, weight gain, blood pressure) must be framed as reference points to discuss with the care team.
- Every clinical or legal screen must display `<DisclaimerBanner variant="medical" | "legal" />`.
- Triage levels follow the French 3-tier model: `stable` (green), `warning` (orange: contact GP / HF nurse / IPA / cardiologist), `urgent` (red: call **15** SAMU, **112**, or **114** SMS).

### 4.3 French Localization & Clinical Formatting
- All user-facing UI copy, alerts, questions, and library articles must be in idiomatic French using systematic **vouvoiement** (`vous`, `votre cardiologue`) with a calm, factual, non-alarmist tone.
- Use French decimal commas in displayed values (`0,55 g/L`, `2,0 kg`).
- Display LDL-c in `g/L` first (`mmol/L` secondary), creatinine in `umol/L` (with `mg/L` conversion aid), weight in `kg`, BP in `mmHg`, HR in `bpm`.
- Keep echocardiography (`ETT`) and cardiac MRI (`IRM`) LVEF/volumes strictly separated in data entry, charts, and rules.
- Reference French healthcare pathways (`ALD 5 / 13`, `SMR`, `PRADO`, `ameli.fr`, `service-public.fr`, `HAS`, `Arrete du 28 mars 2022`). Use DCI + French brand name on first mention for medications.

### 4.4 Code, Accessibility & Static-Check Rules
- **Zero emojis** anywhere in code, UI, tests, articles, or documentation (enforced by [static-checks.ts](./scripts/static-checks.ts)). Use `lucide-react` icons exclusively.
- **Test hygiene:** Never commit `.only()`, `.skip()`, or ESLint disable comments in test files (enforced by [static-checks.ts](./scripts/static-checks.ts)).
- **Accessibility:** Respect `eslint-plugin-jsx-a11y-x` in [eslint.config.js](./eslint.config.js), keyboard navigation, ARIA live regions for status/alerts, touch target sizes, large-text mode, and light/dark contrast.
- **Parallel subagents for multi-file updates:** For multi-article wiki syncs or broad cross-module updates, delegate disjoint file sets to dedicated parallel subagents (keeping shared manifests, tests, UI counts, and final verification owned by the coordinator). Follow the lot-sharding workflow in [wiki-article-sync](./.agents/skills/wiki-article-sync/SKILL.md).
- **Static hosting compatibility:** Preserve `VITE_BASE_PATH` handling in [vite.config.ts](./vite.config.ts), relative asset paths in [index.html](./index.html), and `HashRouter` in [routes.tsx](./src/app/routes.tsx) so GitHub Pages subpath deployments work cleanly.

## 5. Installed Agent Skills

This repository includes local skills under `.agents/skills/`:

**External skills** (tracked in [skills-lock.json](./skills-lock.json)):
- [progressive-web-app](./.agents/skills/progressive-web-app/SKILL.md) -- Service workers, Workbox caching, manifest, and offline UX.
- [react-patterns](./.agents/skills/react-patterns/SKILL.md) -- React 19 hooks, boundaries, state management, and composition.
- [vitest](./.agents/skills/vitest/SKILL.md) -- Vitest configuration, mocking, and test patterns.
- [web-component-design](./.agents/skills/web-component-design/SKILL.md) -- Accessible component APIs and styling patterns.

**Custom project skills:**
- [wiki-article-sync](./.agents/skills/wiki-article-sync/SKILL.md) -- Authoring/syncing the 44 French articles and 5 structured catalogs from `wiki/` and `output/`.
- [clinical-rules-engine](./.agents/skills/clinical-rules-engine/SKILL.md) -- Deterministic rules, non-medical-device wording, French 3-tier triage, and ETT/IRM separation.
- [dexie-backup-migration](./.agents/skills/dexie-backup-migration/SKILL.md) -- Safe Dexie schema migrations, Discovery Mode isolation, and backup/restore compatibility.

Read the relevant `SKILL.md` before making substantive changes in those areas.

## 6. Verification Checklist

Before finishing any code change:
1. Run `npm run check` (`typecheck`, `lint`, `static-check`, `test`, `audit:prod`) and ensure zero errors.
2. If you modified UI flows, routing, styling, build configuration, or PWA assets, also run `npm run build` followed by `npm run test:e2e`.
3. If you added or updated French library articles, verify [manifest.test.ts](./src/content/fr/__tests__/manifest.test.ts) passes (and run `npm run check:wiki-sync` when a local `WIKI_ROOT` is available).
