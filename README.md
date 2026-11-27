# CardioCompagnon

Private, local-first, offline-capable **Progressive Web App (PWA)** in French designed to support daily self-tracking, scientific education, medical visit preparation, and French healthcare navigation for people living with **ischaemic cardiomyopathy** (HFrEF, Stage B asymptomatic LV dysfunction, and HFimpEF).

> **Medical Notice:** CardioCompagnon is an educational and personal self-tracking tool, **not** a medical device. It does not diagnose conditions, prescribe treatments, or advise changing medication doses without medical supervision. In a medical emergency in France, call **15 (SAMU)**, **112**, or **114** (SMS for deaf or hard-of-hearing individuals).

## Features

### 6 Clinical & Daily-Life Modules (+ Settings)
- **Aujourd'hui** ([src/features/today/](./src/features/today/TodayPage.tsx)) -- Fast morning weight logging (comparison against dry weight and 3-day rolling trend), blood pressure, heart rate, EPOF symptom checklist, 3-tier deterministic triage banner, optional pill intake check-in, and 7/30/90-day trend charts.
- **Traitements & Securite** ([src/features/meds/](./src/features/meds/MedsPage.tsx)) -- ESC 2026 four-pillar tracker vs target doses, titration history (`DoseChangeEvent`) with 1-2 week renal/potassium lab reminders, secondary prevention and add-on medications, interactive food/supplement/drug interaction checker, and customizable sick-day rules card.
- **Examens & Chiffres** ([src/features/exams/](./src/features/exams/ExamsPage.tsx)) -- Cardiac imaging with strict separation of echocardiography (`ETT`) and cardiac MRI (`IRM`), lab tracking (NT-proBNP/BNP, creatinine/eGFR/K+, ferritin/TSAT, LDL-c in `g/L` and `mmol/L`, Lp(a), HbA1c, CBC, TSH, digoxin), ECG, sleep apnoea (AHI), and optional AI-assisted report extraction with manual verification.
- **Mon Plan & Consultations** ([src/features/plan/](./src/features/plan/PlanPage.tsx)) -- Prioritized deterministic follow-up plan, consultation question planner filtered by clinician role (cardiologist, GP, pharmacist, occupational physician), printable A4 cardiology summary (`@media print`), and 1-click emergency/care card.
- **Vie en France & Droits** ([src/features/france/](./src/features/france/FrancePage.tsx)) -- Interactive checklists for French pathways (ALD 5/13, SMR cardiac rehabilitation, PRADO, HF telemonitoring, sick leave and return-to-work schemes, RQTH, AERAS / Loi Lemoine, vaccinations) plus an interactive French driving fitness calculator based on the *Arrete du 28 mars 2022*.
- **Bibliotheque Scientifique** ([src/features/library/](./src/features/library/LibraryPage.tsx)) -- 111 offline French scientific articles with evidence classes, volatility badges, and reference dates (`asOf`), interactive cardiology glossary, full-text offline search, and optional grounded BYOK Q&A.
- **Parametres** ([src/features/settings/](./src/features/settings/SettingsPage.tsx)) -- Clinical profile and dynamic modules (HFimpEF, CTO, aortic stenosis, LV thrombus/aneurysm, atrial fibrillation, CKD, diabetes, sleep apnoea, LifeVest, ICD/CRT), isolated Discovery Mode (`CardioCompagnonDemoDB`), light/dark theme, large-text mode, local notifications, optional PIN lock, encrypted backup/restore, and optional BYOK AI configuration.

### Privacy & Offline-First Design
- **Zero backend:** All user data stays locally in IndexedDB via Dexie.js (`CardioCompagnonDB`).
- **Isolated Discovery Mode:** Pre-populated with fictional anonymized French data in a separate IndexedDB database (`CardioCompagnonDemoDB`) so real records are never overwritten.
- **Local security & portability:** Optional numeric PIN lock (`PBKDF2`) and one-click plain (`.cardio.json`) or password-encrypted (`PBKDF2` + `AES-GCM`, `.cardio.enc.json`) backups, excluding BYOK API keys by default.
- **Optional BYOK AI (disabled by default):** Supports Gemini, Mistral / OpenAI-compatible endpoints, and local Ollama / LM Studio instances, with explicit privacy consent before any external call. Deterministic alerts, rules, and follow-up plans never rely on AI.

## Tech Stack

| Layer | Technology |
|---|---|
| UI & Language | React 19, TypeScript 6 (`strict`), React Router 7 (`HashRouter`) |
| Build & PWA | Vite 8, Tailwind CSS v4, `vite-plugin-pwa` (Workbox) |
| Local Storage | Dexie.js 4 (IndexedDB), `dexie-react-hooks` |
| Charts & Icons | Recharts, `lucide-react` |
| Security | Native Web Crypto API (`PBKDF2`, `AES-GCM`) |
| Testing | Vitest 5, Testing Library, `fake-indexeddb`, Playwright (Chromium) |

## Getting Started

### Prerequisites
- **Node.js 24+** and **npm**

### Install & Run Locally

```bash
npm ci
npm run dev
```

### Build & Preview Production PWA

```bash
npm run build
npm run preview
```

To build for a subpath (such as GitHub Pages), set `VITE_BASE_PATH`:

```bash
VITE_BASE_PATH=/cardio-app/ npm run build
```

## Available Scripts

All scripts are defined in [package.json](./package.json):

| Command | Description |
|---|---|
| `npm run dev` | Start local Vite development server |
| `npm run build` | Run TypeScript check and build production PWA bundle |
| `npm run preview` | Serve the built `dist/` bundle locally |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run lint` | Run ESLint (TypeScript, React Hooks, `jsx-a11y`) |
| `npm run static-check` | Run [static-checks.ts](./scripts/static-checks.ts) (no emojis, no private refs, test hygiene) |
| `npm run test` | Run Vitest unit and integration tests |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:e2e` | Run Playwright E2E tests (requires a production build and Chromium) |
| `npm run audit:prod` | Audit production dependencies (`npm audit --omit=dev`) |
| `npm run check` | Run full verification suite (`typecheck`, `lint`, `static-check`, `test`, `audit:prod`) |
| `npm run check:wiki-sync` | Verify the 111 articles against a local wiki source via [check-wiki-sync.ts](./scripts/check-wiki-sync.ts) (`WIKI_ROOT`) |

To install the Playwright browser binary for E2E tests:

```bash
npx playwright install chromium
```

## Project Structure

```text
cardio-app/
├── .github/workflows/          # CI verification and GitHub Pages deployment
├── docs/                       # Architecture spec and wiki sharding manifest
├── e2e/                        # Playwright smoke and user-journey tests
├── public/                     # Static PWA icons, offline fallback, notification SW
├── scripts/                    # Static checks and wiki synchronization verifier
└── src/
    ├── app/                    # App shell wiring, routes, PIN gate, banners, reminders
    ├── content/fr/             # 111 French articles (import.meta.glob) + 5 structured catalogs
    ├── db/                     # Dexie schema, active/demo databases, hooks, demo seed
    ├── engine/                 # Pure deterministic clinical & French driving rules + unit helpers
    ├── features/               # Lazy-loaded feature modules (today, meds, exams, plan, france, library, settings)
    ├── services/               # Web Crypto, PIN lock, backup/restore, notifications, BYOK AI adapters
    ├── types/                  # Canonical TypeScript contracts
    └── ui/                     # Shared components and theme/print stylesheet
```

Key entry points:
- [src/app/routes.tsx](./src/app/routes.tsx) -- Application routes and error/suspense boundaries
- [src/db/database.ts](./src/db/database.ts) -- Dexie IndexedDB schema
- [src/engine/evaluate.ts](./src/engine/evaluate.ts) -- Deterministic patient state evaluator
- [src/services/index.ts](./src/services/index.ts) -- Security, backup, notification, and AI service exports
- [src/content/fr/expected-slugs.ts](./src/content/fr/expected-slugs.ts) -- Canonical list of the 111 French library articles

## CI/CD & Deployment

- **Pull Request & Manual CI:** [ci.yml](./.github/workflows/ci.yml) runs `typecheck`, `lint`, `static-check`, `test`, `audit:prod`, production `build`, and Playwright E2E tests on Node.js 24.
- **GitHub Pages Deployment:** [deploy-pages.yml](./.github/workflows/deploy-pages.yml) runs the CI workflow first, builds the bundle with `VITE_BASE_PATH` from `actions/configure-pages`, and deploys `dist/` to GitHub Pages on pushes to `main`.

## Documentation

- [AGENTS.md](./AGENTS.md) -- Engineering rules, invariants, and verification workflow for coding agents
- [Design & Architecture Specification](./docs/design-spec.md) -- Detailed product vision, contracts, and module specifications (French)
- [Wiki Sharding Manifest](./docs/wiki-sharding-manifest.md) -- Source-to-article mapping and French clinical glossary (French)
