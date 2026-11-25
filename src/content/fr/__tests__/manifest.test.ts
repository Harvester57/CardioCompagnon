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

  it('definit exactement 85 slugs canoniques uniques dans EXPECTED_ARTICLE_SLUGS', () => {
    expect(EXPECTED_ARTICLE_SLUGS).toHaveLength(85);
    expect(expectedSlugSet.size).toBe(85);
  });

  it('charge exactement 85 articles conformes au contrat WikiArticle', () => {
    const articles = getAllArticles();
    expect(articles).toHaveLength(85);

    const seenSlugs = new Set<string>();
    for (const article of articles) {
      expect(expectedSlugSet.has(article.slug), `Slug inattendu: ${article.slug}`).toBe(true);
      expect(seenSlugs.has(article.slug), `Slug duplique: ${article.slug}`).toBe(false);
      seenSlugs.add(article.slug);

      expect(article.titleFr.trim().length, `titleFr vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.plainSummaryFr.trim().length, `plainSummaryFr vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.sections.length, `sections vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.sources.length, `sources vide sur ${article.slug}`).toBeGreaterThan(0);
      expect(article.asOf, `asOf invalide sur ${article.slug}`).toMatch(/^2026-11-(24|25)$/);

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

  it('verifie que les 5 catalogues structures sont non vides et pointent vers des articleSlug valides', () => {
    expect(MEDICATION_REFERENCES.length).toBeGreaterThan(0);
    for (const med of MEDICATION_REFERENCES) {
      expect(expectedSlugSet.has(med.articleSlug), `articleSlug invalide dans MEDICATION_REFERENCES: ${med.id}`).toBe(true);
    }

    expect(INTERACTIONS_CATALOG.length).toBeGreaterThan(0);
    for (const item of INTERACTIONS_CATALOG) {
      expect(expectedSlugSet.has(item.articleSlug), `articleSlug invalide dans INTERACTIONS_CATALOG: ${item.id}`).toBe(true);
    }

    expect(FRENCH_ADMIN_CATALOG.length).toBe(EXPECTED_ADMIN_ITEM_IDS.length);
    const adminIds = new Set(FRENCH_ADMIN_CATALOG.map((item) => item.id));
    for (const expectedId of EXPECTED_ADMIN_ITEM_IDS) {
      expect(adminIds.has(expectedId), `Demarche France manquante: ${expectedId}`).toBe(true);
    }
    for (const item of FRENCH_ADMIN_CATALOG) {
      expect(expectedSlugSet.has(item.articleSlug), `articleSlug invalide dans FRENCH_ADMIN_CATALOG: ${item.id}`).toBe(true);
    }

    expect(QUESTIONS_CATALOG.length).toBeGreaterThan(0);
    for (const q of QUESTIONS_CATALOG) {
      expect(expectedSlugSet.has(q.articleSlug), `articleSlug invalide dans QUESTIONS_CATALOG: ${q.id}`).toBe(true);
    }

    expect(GLOSSARY_TERMS.length).toBeGreaterThan(0);
    for (const term of GLOSSARY_TERMS) {
      if (term.articleSlug) {
        expect(expectedSlugSet.has(term.articleSlug), `articleSlug invalide dans GLOSSARY_TERMS: ${term.id}`).toBe(true);
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
