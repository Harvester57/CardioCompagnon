import type { ArticleCategory, WikiArticle } from '../../types';
import { EXPECTED_ARTICLE_SLUGS } from './expected-slugs';

interface ArticleModule {
  article?: WikiArticle;
  default?: WikiArticle;
}

const articleModules = import.meta.glob<ArticleModule>('./articles/*.ts', {
  eager: true,
});

const slugOrder = new Map<string, number>(
  EXPECTED_ARTICLE_SLUGS.map((slug, index) => [slug, index]),
);

const allArticles: WikiArticle[] = Object.values(articleModules)
  .map((mod) => mod.article ?? mod.default)
  .filter((item): item is WikiArticle => Boolean(item && typeof item.slug === 'string'))
  .sort((a, b) => {
    const idxA = slugOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const idxB = slugOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    if (idxA !== idxB) {
      return idxA - idxB;
    }
    return a.titleFr.localeCompare(b.titleFr, 'fr');
  });

const articlesBySlug = new Map<string, WikiArticle>(
  allArticles.map((article) => [article.slug, article]),
);

export function normalizeFrenchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘]/g, "'")
    .toLowerCase()
    .trim();
}

const articleSlugByTitle = (() => {
  const map = new Map<string, string>();
  for (const article of allArticles) {
    map.set(normalizeFrenchText(article.titleFr), article.slug);
  }
  // Register unambiguous short-title prefixes (before ':', '(' or ',') used in cross-references
  const prefixCandidates = new Map<string, string | null>();
  for (const article of allArticles) {
    const prefixes = [
      article.titleFr.split(/\s*:\s*/)[0]?.trim(),
      article.titleFr.split(/\s*\(/)[0]?.trim(),
      article.titleFr.split(/\s*,\s*/)[0]?.trim(),
    ];
    for (const rawPrefix of prefixes) {
      if (!rawPrefix || rawPrefix.length < 15) continue;
      const key = normalizeFrenchText(rawPrefix);
      if (map.has(key)) continue;
      if (!prefixCandidates.has(key)) {
        prefixCandidates.set(key, article.slug);
      } else if (prefixCandidates.get(key) !== article.slug) {
        prefixCandidates.set(key, null);
      }
    }
  }
  for (const [key, slug] of prefixCandidates) {
    if (slug) {
      map.set(key, slug);
    }
  }
  return map;
})();

export function findArticleSlugByTitle(label: string): string | undefined {
  const normalized = normalizeFrenchText(label);
  if (!normalized) {
    return undefined;
  }
  return articleSlugByTitle.get(normalized);
}

export function getAllArticles(): WikiArticle[] {
  return allArticles;
}

export function getArticleBySlug(slug: string): WikiArticle | undefined {
  return articlesBySlug.get(slug);
}

export function getArticlesByCategory(category: ArticleCategory): WikiArticle[] {
  return allArticles.filter((article) => article.category === category);
}

export function searchArticles(query: string): WikiArticle[] {
  const normalizedQuery = normalizeFrenchText(query);
  if (!normalizedQuery) {
    return allArticles;
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) {
    return allArticles;
  }

  const scored: { article: WikiArticle; score: number }[] = [];

  for (const article of allArticles) {
    const titleNorm = normalizeFrenchText(article.titleFr);
    const slugNorm = normalizeFrenchText(article.slug.replace(/-/g, ' '));
    const aliasesNorm = article.aliases.map(normalizeFrenchText).join(' ');
    const tagsNorm = article.tags.map(normalizeFrenchText).join(' ');
    const summaryNorm = normalizeFrenchText(article.plainSummaryFr);
    const sectionsHeadingNorm = article.sections
      .map((section) => normalizeFrenchText(section.headingFr))
      .join(' ');
    const sectionsBodyNorm = article.sections
      .map((section) => normalizeFrenchText(section.bodyMarkdownFr))
      .join(' ');

    const combined = `${titleNorm} ${slugNorm} ${aliasesNorm} ${tagsNorm} ${summaryNorm} ${sectionsHeadingNorm} ${sectionsBodyNorm}`;
    const allTokensMatch = tokens.every((token) => combined.includes(token));
    if (!allTokensMatch) {
      continue;
    }

    let score = 0;
    if (titleNorm.includes(normalizedQuery)) {
      score += 40;
    }
    for (const token of tokens) {
      if (titleNorm.includes(token)) score += 12;
      if (aliasesNorm.includes(token)) score += 10;
      if (tagsNorm.includes(token)) score += 8;
      if (summaryNorm.includes(token)) score += 6;
      if (sectionsHeadingNorm.includes(token)) score += 4;
      if (sectionsBodyNorm.includes(token)) score += 2;
    }

    scored.push({ article, score });
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.article.titleFr.localeCompare(b.article.titleFr, 'fr');
  });

  return scored.map((entry) => entry.article);
}

export { EXPECTED_ARTICLE_SLUGS, type ExpectedArticleSlug } from './expected-slugs';
export { MEDICATION_REFERENCES } from './catalogs/medications-reference';
export { INTERACTIONS_CATALOG } from './catalogs/interactions-catalog';
export { FRENCH_ADMIN_CATALOG } from './catalogs/french-admin-catalog';
export { QUESTIONS_CATALOG } from './catalogs/questions-catalog';
export { GLOSSARY_TERMS } from './catalogs/glossary';
