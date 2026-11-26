---
name: wiki-article-sync
description: Author, update, or synchronize the 85 French scientific articles and 5 structured catalogs in src/content/fr/ from allowed wiki/ and output/ sources while preserving clinical fidelity, French localization, and manifest integrity.
---

# Wiki Article Sync & French Content Authoring

Use this skill whenever adding, updating, or auditing French scientific articles in [src/content/fr/articles/](../../../src/content/fr/articles/) or structured catalogs in [src/content/fr/catalogs/](../../../src/content/fr/catalogs/).

## 1. Non-Negotiable Source Boundary

- **Allowed sources only:** `sourceWikiPath` must be a relative path starting with `wiki/` or `output/` (enforced by [check-wiki-sync.ts](../../../scripts/check-wiki-sync.ts) and [static-checks.ts](../../../scripts/static-checks.ts)).
- **Forbidden sources:** Never read, reference, index, or copy any private document or directory outside `wiki/` and `output/`. Never embed personal medical records.

## 2. Article Module Contract

Each article lives in its own file `src/content/fr/articles/<slug>.ts` and is auto-discovered by [src/content/fr/index.ts](../../../src/content/fr/index.ts) via `import.meta.glob('./articles/*.ts', { eager: true })`.

- Export name must be `export const article: WikiArticle = { ... }` matching [src/types/content.ts](../../../src/types/content.ts).
- `slug` must match the filename (without `.ts`) and exist in [expected-slugs.ts](../../../src/content/fr/expected-slugs.ts).
- Every slug in `relatedArticleSlugs` must also exist in `EXPECTED_ARTICLE_SLUGS`.
- Required non-empty fields: `titleFr`, `readingTier` (`'essential' | 'deep_dive' | 'reference'`), `plainSummaryFr` (the "En clair" box), `sections` (`headingFr`, `bodyMarkdownFr`, optional `depth: 'patient' | 'evidence'`), `sources` (`label`, `detail`), `asOf` (`YYYY-MM-DD`), `confidence`, `volatility`, `disclaimerType` (`'medical'` or `'legal_france'`).
- Keep `asOf` aligned with the YAML frontmatter date (`updated`, `generated`, or `created`) of the source file. If you update `asOf` globally, also check the expected date assertion in [manifest.test.ts](../../../src/content/fr/__tests__/manifest.test.ts).

## 2.1 Editorial Import & Non-Specialist Readability Contract

Never translate specialist `llm-wiki` files verbatim into patient-facing cards. Every imported or updated article must be triaged and shaped according to its `readingTier`:

- **`essential` (budget: 12 to 24 articles, shown by default):** Core patient guides in plain French.
  - Keep `plainSummaryFr` concise (3 to 4 plain sentences) with zero statistical notation (`HR`, `RR`, `IC 95 %`, `p = ...`) or dense trial-name lists.
  - Include `keyTakeawaysFr` (3 to 5 short, actionable bullets, <= 240 chars each, no statistical jargon).
  - Put practical explanations in standard sections (`depth: 'patient'`, default) and move trial data, ESC/AHA/NICE class tables, and study debates into collapsible `depth: 'evidence'` sections.
- **`deep_dive` (topic/concept/playbook articles):** Surfaced via search, category, profile modules, or the *"Approfondir"* filter. Start with a plain-French summary and practical guidance; place detailed trial comparisons in `depth: 'evidence'` sections.
- **`reference` (all `wiki/theses/*` and `wiki/references/*` except `wiki/references/driving-rules.md`):** Enforced automatically by [check-wiki-sync.ts](../../../scripts/check-wiki-sync.ts) and [manifest.test.ts](../../../src/content/fr/__tests__/manifest.test.ts). Full scientific fidelity is welcome in the body, but `plainSummaryFr` must still explain in plain French what the study/reference covers and why a patient might discuss it with their cardiologist.
- **New upstream wiki files:** When `npm run check:wiki-sync` reports newly added files in `wiki/` or `output/`, decide whether to import them as `reference`/`deep_dive` or fold their findings into an existing article's `depth: 'evidence'` section rather than inflating the `essential` tier.

## 3. French Clinical Localization Rules

Follow the glossary and conventions in [wiki-sharding-manifest.md](../../../docs/wiki-sharding-manifest.md):

- **Tone and voice:** Idiomatic French with systematic *vouvoiement* (`vous`, `votre cardiologue`), calm, factual, and non-alarmist.
- **Non-medical-device posture:** Preserve exact numbers, trial names, ESC recommendation classes (`ESC 2026 Classe I`, `IIa`, `IIb`, `III`), and uncertainties. Never turn a clinical threshold into an instruction to stop or adjust medication doses without medical advice.
- **Units and formatting:**
  - French decimal commas in displayed prose (`0,55 g/L`, `2,0 kg`).
  - LDL-c in `g/L` first, with `mmol/L` in parentheses.
  - Creatinine in `umol/L` with `mg/L` conversion helper.
  - Strictly distinguish `ETT` (echocardiography) and `IRM` (cardiac MRI).
- **Medications:** French DCI + common French brand name in parentheses on first mention.
- **French healthcare references:** Use `15 (SAMU)`, `112`, `114` (SMS), `medecin traitant`, `cardiologue`, `infirmiere IC / IPA`, `medecin agree`, `ameli.fr`, `service-public.fr`, and `HAS`. Keep UK/US references only in explicit comparative sections.
- **Zero emojis:** Never include Unicode emojis in articles, catalogs, or comments.

## 4. Multi-Article Update Workflow (Dedicated Parallel Subagents)

Whenever a wiki update touches more than 2-3 articles or multiple clinical domains, use **dedicated parallel subagents** instead of editing everything sequentially in the main conversation:

1. **Audit first (coordinator):**
   - Run `npm run check:wiki-sync` and inspect `wiki/_index.md` plus `wiki/` and `output/` timestamps to detect stale articles, newly added clinical articles, and affected catalogs.
   - Exclude wiki maintenance pages (for example `uncompiled-source-coverage.md`, which lists private source paths).
   - If new clinical articles are being added, add their slugs to [expected-slugs.ts](../../../src/content/fr/expected-slugs.ts) upfront so all subagents can cross-link them safely.
2. **Partition into disjoint lots (1 dedicated subagent per lot):**
   - Split work by clinical domain and file size so no subagent is overloaded:
     - **Lot 1:** Diagnostic, numbers, Stage B, HFimpEF, comorbidities (`src/content/fr/articles/*`)
     - **Lot 2:** Foundational/add-on medications, lipids, IV iron + [medications-reference.ts](../../../src/content/fr/catalogs/medications-reference.ts)
     - **Lots 3 & 5:** Devices, telemonitoring, revascularisation, daily life, rehab, mood, France/driving + [french-admin-catalog.ts](../../../src/content/fr/catalogs/french-admin-catalog.ts)
     - **Lot 4:** Nutrition, supplements, interactions, new nutrition articles + [interactions-catalog.ts](../../../src/content/fr/catalogs/interactions-catalog.ts)
     - **Lot 6A:** Large evidence references (`essais-cliniques-cles.ts`, `recommandations-comparees-esc-us-nice.ts`)
     - **Lot 6B:** Large patient references (`questions-equipe-cardiologie.ts`, `glossaire-cardiologie.ts`) + [questions-catalog.ts](../../../src/content/fr/catalogs/questions-catalog.ts) and [glossary.ts](../../../src/content/fr/catalogs/glossary.ts)
   - Enforce **strict disjoint file ownership**: subagents edit only their assigned article/catalog files and never touch `expected-slugs.ts`, `index.ts`, tests, UI components, or docs.
   - Require every subagent to read both the full source `.md` and existing `.ts` file before editing, preserve canonical `titleFr` and existing catalog IDs, preserve test-asserted strings/links (for example in [LibraryPage.test.tsx](../../../src/features/library/__tests__/LibraryPage.test.tsx)), and match each article's `asOf` to the source YAML frontmatter date.
3. **Consolidate and verify (coordinator):**
   - After all subagents report back, update shared manifest assertions, docs, and E2E/unit article counts if the total article count changed.
   - Run the verification steps below in one pass.

## 5. Structured Catalog Synchronization

When updating content, check whether any of the 5 structured catalogs in [src/content/fr/catalogs/](../../../src/content/fr/catalogs/) also need updates:
- [medications-reference.ts](../../../src/content/fr/catalogs/medications-reference.ts) -- 4 pillars, starting/target doses, titration intervals, contraindicated classes.
- [interactions-catalog.ts](../../../src/content/fr/catalogs/interactions-catalog.ts) -- Food, supplement, and drug interactions (`verdict`, affected classes).
- [french-admin-catalog.ts](../../../src/content/fr/catalogs/french-admin-catalog.ts) -- 12 French administrative items (`FrenchAdminItemId`).
- [questions-catalog.ts](../../../src/content/fr/catalogs/questions-catalog.ts) -- Consultation questions linked to `articleSlug`, `relevantModules`, and `triggeredByRules`. Keep `questionFr` and `whyItMattersFr` in plain French with zero statistical/guideline jargon (`HR`, `RR`, `IC 95 %`, `p =`, `Classe I/IIa/IIb` — place study citations in `sources` instead; enforced by [manifest.test.ts](../../../src/content/fr/__tests__/manifest.test.ts)).
- [glossary.ts](../../../src/content/fr/catalogs/glossary.ts) -- Cardiology terms used by `GlossaryTooltip`.

## 6. Verification Steps

After editing articles or catalogs:
1. Run `npm run check:wiki-sync` (set `WIKI_ROOT` if the wiki is outside the default path) to confirm 100% frontmatter alignment.
2. Run `npm run check` (`typecheck`, `lint`, `static-check`, `test`, `audit:prod`).
3. If article counts, UI copy, or routing changed, also run `npm run build` followed by `npm run test:e2e`.
