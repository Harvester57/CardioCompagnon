---
name: wiki-article-sync
description: Author, update, or synchronize the 44 French scientific articles and 5 structured catalogs in src/content/fr/ from allowed wiki/ and output/ sources while preserving clinical fidelity, French localization, and manifest integrity.
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
- Required non-empty fields: `titleFr`, `plainSummaryFr` (the "En clair" box), `sections` (`headingFr`, `bodyMarkdownFr`), `sources` (`label`, `detail`), `asOf` (`YYYY-MM-DD`), `confidence`, `volatility`, `disclaimerType` (`'medical'` or `'legal_france'`).
- Keep `asOf` aligned with the YAML frontmatter date (`updated`, `generated`, or `created`) of the source file. If you update `asOf` globally, also check the expected date assertion in [manifest.test.ts](../../../src/content/fr/__tests__/manifest.test.ts).

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

## 4. Structured Catalog Synchronization

When updating content, check whether any of the 5 structured catalogs in [src/content/fr/catalogs/](../../../src/content/fr/catalogs/) also need updates:
- [medications-reference.ts](../../../src/content/fr/catalogs/medications-reference.ts) -- 4 pillars, starting/target doses, titration intervals, contraindicated classes.
- [interactions-catalog.ts](../../../src/content/fr/catalogs/interactions-catalog.ts) -- Food, supplement, and drug interactions (`verdict`, affected classes).
- [french-admin-catalog.ts](../../../src/content/fr/catalogs/french-admin-catalog.ts) -- 12 French administrative items (`FrenchAdminItemId`).
- [questions-catalog.ts](../../../src/content/fr/catalogs/questions-catalog.ts) -- Consultation questions linked to `articleSlug`, `relevantModules`, and `triggeredByRules`.
- [glossary.ts](../../../src/content/fr/catalogs/glossary.ts) -- Cardiology terms used by `GlossaryTooltip`.

## 5. Verification Steps

After editing articles or catalogs:
1. Run `npm run test -- src/content/fr/__tests__/manifest.test.ts` to verify completeness, valid slugs, related links, catalogs, and zero emojis.
2. Run `npm run check` (`typecheck`, `lint`, `static-check`, `test`, `audit:prod`).
3. When a local wiki checkout is available, run `npm run check:wiki-sync` (set `WIKI_ROOT` if the wiki is outside the default path).
