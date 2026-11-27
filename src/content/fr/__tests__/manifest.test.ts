import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import type { FrenchAdminItemId } from '../../../types';
import {
  EXPECTED_ARTICLE_SLUGS,
  FRENCH_ADMIN_CATALOG,
  GLOSSARY_TERMS,
  INTERACTIONS_CATALOG,
  MEDICATION_REFERENCES,
  QUESTIONS_CATALOG,
  getAllArticles,
  getArticleBySlug,
} from '../index';

const EXPECTED_ADMIN_ITEM_IDS: FrenchAdminItemId[] = [
  'ald_5_13',
  'smr_rehab',
  'prado_ic',
  'telesurveillance_ic',
  'arret_travail_ij',
  'visite_pre_reprise',
  'temps_partiel_therapeutique',
  'rqth_mdph',
  'pension_invalidite',
  'emprunt_aeras_lemoine',
  'permis_medecin_agree',
  'vaccinations_ic',
];

const EMOJI_PATTERN = /\p{Extended_Pictographic}/u;
const VALID_READING_TIERS = new Set(['essential', 'deep_dive', 'reference']);
const VALID_SECTION_DEPTHS = new Set(['patient', 'evidence']);
const REFERENCE_PATH_PATIENT_ALLOWLIST = new Set(['wiki/references/driving-rules.md']);
const SPECIALIST_STATS_PATTERN =
  /\b(HR\s*0,|RR\s*0,|IC\s*95\s*%|p\s*[<=>]\s*0,|Knapp-Hartung|Hochberg|mITT|Verdict de l['’]enquête|Classe\s+[I1-3][ab]?\b)/i;
const SUMMARY_MAX_CHARS = 500;

function collectTypeScriptFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) {
    return results;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '__tests__') continue;
      results.push(...collectTypeScriptFiles(fullPath));
    } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

describe('Manifeste de completude du contenu francais (Porte 1)', () => {
  const expectedSlugSet = new Set<string>(EXPECTED_ARTICLE_SLUGS);

  it('definit exactement 111 slugs canoniques uniques dans EXPECTED_ARTICLE_SLUGS', () => {
    expect(EXPECTED_ARTICLE_SLUGS).toHaveLength(111);
    expect(expectedSlugSet.size).toBe(111);
  });

  it('charge exactement 111 articles conformes au contrat WikiArticle', () => {
    const articles = getAllArticles();
    expect(articles).toHaveLength(111);

    const seenSlugs = new Set<string>();
    for (const article of articles) {
      expect(expectedSlugSet.has(article.slug), `Slug inattendu: ${article.slug}`).toBe(true);
      expect(seenSlugs.has(article.slug), `Slug duplique: ${article.slug}`).toBe(false);
      seenSlugs.add(article.slug);

      expect(article.titleFr.trim().length, `titleFr vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.plainSummaryFr.trim().length, `plainSummaryFr vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.sections.length, `sections vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.sources.length, `sources vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.asOf, `asOf invalide sur ${article.slug}`).toMatch(/^2026-11-(24|25|26|27)$/);

      for (const relatedSlug of article.relatedArticleSlugs) {
        expect(
          expectedSlugSet.has(relatedSlug),
          `Lien interne invalide "${relatedSlug}" dans ${article.slug}`,
        ).toBe(true);
      }
    }

    for (const expectedSlug of EXPECTED_ARTICLE_SLUGS) {
      expect(getArticleBySlug(expectedSlug), `Article manquant: ${expectedSlug}`).toBeDefined();
    }
  });

  it('applique le contrat editorial de niveaux de lecture et de profondeur des sections', () => {
    const articles = getAllArticles();
    const tierCounts = { essential: 0, deep_dive: 0, reference: 0 };

    for (const article of articles) {
      expect(
        VALID_READING_TIERS.has(article.readingTier),
        `readingTier invalide sur ${article.slug}: ${String(article.readingTier)}`,
      ).toBe(true);
      tierCounts[article.readingTier] += 1;

      const normalizedSource = article.sourceWikiPath.replace(/\\/g, '/').trim();
      if (normalizedSource.startsWith('wiki/theses/')) {
        expect(
          article.readingTier,
          `Une these wiki (${article.slug}) doit rester en readingTier='reference'`,
        ).toBe('reference');
      }
      if (
        normalizedSource.startsWith('wiki/references/') &&
        !REFERENCE_PATH_PATIENT_ALLOWLIST.has(normalizedSource)
      ) {
        expect(
          article.readingTier,
          `Une fiche de reference (${article.slug}) doit rester en readingTier='reference'`,
        ).toBe('reference');
      }

      if (article.readingTier === 'essential' || article.readingTier === 'reference') {
        expect(
          article.plainSummaryFr.length,
          `plainSummaryFr trop long (> ${SUMMARY_MAX_CHARS} car.) sur ${article.slug} (${article.plainSummaryFr.length})`,
        ).toBeLessThanOrEqual(SUMMARY_MAX_CHARS);
        expect(
          SPECIALIST_STATS_PATTERN.test(article.plainSummaryFr),
          `Jargon statistique interdit dans plainSummaryFr sur ${article.slug}`,
        ).toBe(false);
      }

      if (article.readingTier === 'essential') {
        expect(
          article.keyTakeawaysFr,
          `keyTakeawaysFr obligatoire sur l'article essential ${article.slug}`,
        ).toBeDefined();
        const hasPatientSection = article.sections.some((s) => s.depth !== 'evidence');
        const hasEvidenceSection = article.sections.some((s) => s.depth === 'evidence');
        expect(hasPatientSection, `Section patient manquante sur ${article.slug}`).toBe(true);
        expect(hasEvidenceSection, `Section evidence depliable manquante sur ${article.slug}`).toBe(true);
      }

      if (article.keyTakeawaysFr !== undefined) {
        expect(
          article.keyTakeawaysFr.length,
          `keyTakeawaysFr doit contenir 2 a 6 points sur ${article.slug}`,
        ).toBeGreaterThanOrEqual(2);
        expect(article.keyTakeawaysFr.length).toBeLessThanOrEqual(6);
        for (const point of article.keyTakeawaysFr) {
          expect(point.trim().length, `Point cle vide sur ${article.slug}`).toBeGreaterThan(0);
          expect(point.length, `Point cle trop long (> 240 car.) sur ${article.slug}`).toBeLessThanOrEqual(240);
          expect(
            SPECIALIST_STATS_PATTERN.test(point),
            `Jargon statistique interdit dans keyTakeawaysFr sur ${article.slug}: ${point}`,
          ).toBe(false);
        }
      }

      for (const section of article.sections) {
        if (section.depth !== undefined) {
          expect(
            VALID_SECTION_DEPTHS.has(section.depth),
            `section.depth invalide sur ${article.slug}: ${String(section.depth)}`,
          ).toBe(true);
        }
      }
    }

    // Garde-fou de volume pour la vue par defaut "L'essentiel"
    expect(tierCounts.essential).toBeGreaterThanOrEqual(12);
    expect(tierCounts.essential).toBeLessThanOrEqual(24);
    expect(tierCounts.reference).toBeGreaterThanOrEqual(7);
  });

  it('verifie que les 5 catalogues structures sont non vides et pointent vers des articleSlug valides', () => {
    expect(MEDICATION_REFERENCES.length).toBeGreaterThan(0);
    for (const med of MEDICATION_REFERENCES) {
      expect(expectedSlugSet.has(med.articleSlug), `articleSlug invalide dans MEDICATION_REFERENCES: ${med.id}`).toBe(true);
      const monitoringWithoutDrugClass = med.monitoringFr.replace(/antiarythmiques\s+(?:de\s+)?classe\s+[I1-3][a-c]?/gi, '');
      expect(
        SPECIALIST_STATS_PATTERN.test(monitoringWithoutDrugClass),
        `Jargon statistique interdit dans MEDICATION_REFERENCES (${med.id})`,
      ).toBe(false);
    }

    expect(INTERACTIONS_CATALOG.length).toBeGreaterThan(0);
    for (const item of INTERACTIONS_CATALOG) {
      expect(expectedSlugSet.has(item.articleSlug), `articleSlug invalide dans INTERACTIONS_CATALOG: ${item.id}`).toBe(true);
      expect(
        SPECIALIST_STATS_PATTERN.test(item.summaryFr),
        `Jargon statistique interdit dans INTERACTIONS_CATALOG.summaryFr (${item.id})`,
      ).toBe(false);
      expect(
        SPECIALIST_STATS_PATTERN.test(item.mechanismOrCaveatFr),
        `Jargon statistique interdit dans INTERACTIONS_CATALOG.mechanismOrCaveatFr (${item.id})`,
      ).toBe(false);
    }

    expect(FRENCH_ADMIN_CATALOG.length).toBe(EXPECTED_ADMIN_ITEM_IDS.length);
    const adminIds = new Set(FRENCH_ADMIN_CATALOG.map((item) => item.id));
    for (const expectedId of EXPECTED_ADMIN_ITEM_IDS) {
      expect(adminIds.has(expectedId), `Demarche France manquante: ${expectedId}`).toBe(true);
    }
    for (const item of FRENCH_ADMIN_CATALOG) {
      expect(expectedSlugSet.has(item.articleSlug), `articleSlug invalide dans FRENCH_ADMIN_CATALOG: ${item.id}`).toBe(true);
      expect(
        SPECIALIST_STATS_PATTERN.test(item.summaryFr),
        `Jargon statistique interdit dans FRENCH_ADMIN_CATALOG.summaryFr (${item.id})`,
      ).toBe(false);
    }

    expect(QUESTIONS_CATALOG.length).toBeGreaterThan(0);
    for (const q of QUESTIONS_CATALOG) {
      expect(expectedSlugSet.has(q.articleSlug), `articleSlug invalide dans QUESTIONS_CATALOG: ${q.id}`).toBe(true);
      expect(
        SPECIALIST_STATS_PATTERN.test(q.questionFr),
        `Jargon statistique interdit dans questionFr sur ${q.id}`,
      ).toBe(false);
      expect(
        SPECIALIST_STATS_PATTERN.test(q.whyItMattersFr),
        `Jargon statistique interdit dans whyItMattersFr sur ${q.id}`,
      ).toBe(false);
    }

    expect(GLOSSARY_TERMS.length).toBeGreaterThan(0);
    const glossaryMetaAllowlist = new Set(['recommandation_classe', 'esc_niveaux_preuve', 'niveau_preuve_b1_b2_kccq']);
    for (const term of GLOSSARY_TERMS) {
      if (term.articleSlug) {
        expect(expectedSlugSet.has(term.articleSlug), `articleSlug invalide dans GLOSSARY_TERMS: ${term.id}`).toBe(true);
      }
      if (!glossaryMetaAllowlist.has(term.id)) {
        expect(
          SPECIALIST_STATS_PATTERN.test(term.shortDefinitionFr),
          `Jargon statistique interdit dans GLOSSARY_TERMS (${term.id})`,
        ).toBe(false);
      }
    }
  });

  it('garantit absence totale de emoji dans src/content/fr/', () => {
    const contentRoot = path.resolve(__dirname, '..');
    const files = collectTypeScriptFiles(contentRoot);
    expect(files.length).toBeGreaterThan(0);

    for (const filePath of files) {
      const text = fs.readFileSync(filePath, 'utf8');
      expect(EMOJI_PATTERN.test(text), `Emoji detecte dans ${filePath}`).toBe(false);
    }
  });
});
