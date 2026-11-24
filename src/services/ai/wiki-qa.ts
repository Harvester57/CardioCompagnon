import type { AppSettings, WikiArticle, WikiQaResponse } from '../../types';
import {
  AI_MEDICAL_DISCLAIMER_FR,
  AiServiceError,
  type WikiContextSnippet,
  createAiAdapter,
} from './adapter';

export interface ScoredWikiSnippet extends WikiContextSnippet {
  score: number;
}

export interface AskWikiWithAiOptions {
  maxSnippets?: number;
  fetchImpl?: typeof fetch;
}

const FRENCH_STOPWORDS = new Set([
  'a',
  'ai',
  'aie',
  'aient',
  'aies',
  'ait',
  'alors',
  'apres',
  'as',
  'au',
  'aucun',
  'aucune',
  'aussi',
  'autre',
  'autres',
  'aux',
  'avait',
  'avant',
  'avec',
  'avez',
  'avoir',
  'avons',
  'c',
  'ca',
  'car',
  'ce',
  'ceci',
  'cela',
  'celle',
  'celles',
  'celui',
  'ces',
  'cet',
  'cette',
  'ceux',
  'chez',
  'combien',
  'comme',
  'comment',
  'd',
  'dans',
  'de',
  'des',
  'dois',
  'doit',
  'donc',
  'dont',
  'du',
  'elle',
  'elles',
  'en',
  'encore',
  'entre',
  'es',
  'est',
  'et',
  'etaient',
  'etais',
  'etait',
  'etant',
  'ete',
  'etes',
  'etre',
  'eu',
  'faut',
  'faire',
  'fait',
  'il',
  'ils',
  'j',
  'je',
  'l',
  'la',
  'le',
  'les',
  'leur',
  'leurs',
  'lui',
  'm',
  'ma',
  'mais',
  'me',
  'meme',
  'mes',
  'moi',
  'mon',
  'n',
  'ne',
  'nos',
  'notre',
  'nous',
  'on',
  'ont',
  'ou',
  'par',
  'parce',
  'pas',
  'pendant',
  'peut',
  'peux',
  'plus',
  'pour',
  'pourquoi',
  'puis',
  'qu',
  'quand',
  'que',
  'quel',
  'quelle',
  'quelles',
  'quels',
  'qui',
  'quoi',
  's',
  'sa',
  'sans',
  'se',
  'sera',
  'ses',
  'si',
  'son',
  'sont',
  'sous',
  'suis',
  'sur',
  't',
  'ta',
  'te',
  'tes',
  'toi',
  'ton',
  'tous',
  'tout',
  'toute',
  'toutes',
  'tu',
  'un',
  'une',
  'vos',
  'votre',
  'vous',
  'y',
]);

const SHORT_MEDICAL_TOKENS = new Set([
  'ic',
  'fa',
  'fe',
  'bb',
  'ta',
  'fc',
  'k',
  'na',
  'av',
  'iv',
  'ra',
  'ij',
  'vg',
]);

const MAX_EXCERPT_CHARS = 1400;

export function normalizeWikiSearchText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function tokenizeFrenchQuery(text: string): string[] {
  const normalized = normalizeWikiSearchText(text);
  const rawTokens = normalized.split(/[^a-z0-9]+/).filter(Boolean);
  const tokens: string[] = [];

  for (const token of rawTokens) {
    if (FRENCH_STOPWORDS.has(token)) {
      continue;
    }
    if (token.length < 2 && !SHORT_MEDICAL_TOKENS.has(token)) {
      continue;
    }
    if (token.length === 2 && !SHORT_MEDICAL_TOKENS.has(token) && !/^\d+$/.test(token)) {
      continue;
    }
    tokens.push(token);
  }

  return tokens;
}

function buildTokenFrequencies(text: string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const token of tokenizeFrenchQuery(text)) {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  }
  return counts;
}

function scoreTokenMap(
  queryTokens: string[],
  termFreqs: Map<string, number>,
  idfMap: Map<string, number>,
  weight: number,
): number {
  if (termFreqs.size === 0) {
    return 0;
  }

  let score = 0;
  for (const qToken of queryTokens) {
    const idf = idfMap.get(qToken) ?? 1;
    const exactFreq = termFreqs.get(qToken) ?? 0;
    if (exactFreq > 0) {
      // Sublinear TF weighting
      score += (1 + Math.log(exactFreq)) * idf * weight;
      continue;
    }

    // Light prefix match for French plurals/inflections (tokens >= 4 chars)
    if (qToken.length >= 4) {
      for (const [docToken, docFreq] of termFreqs.entries()) {
        if (docToken.startsWith(qToken) || qToken.startsWith(docToken) && docToken.length >= 4) {
          score += (1 + Math.log(docFreq)) * idf * weight * 0.65;
          break;
        }
      }
    }
  }

  return score;
}

function buildArticleExcerpt(
  article: WikiArticle,
  queryTokens: string[],
  idfMap: Map<string, number>,
): string {
  const rankedSections = article.sections
    .map((section, index) => {
      const headingFreqs = buildTokenFrequencies(section.headingFr);
      const bodyFreqs = buildTokenFrequencies(section.bodyMarkdownFr);
      const sectionScore =
        scoreTokenMap(queryTokens, headingFreqs, idfMap, 2.5) +
        scoreTokenMap(queryTokens, bodyFreqs, idfMap, 1.0);
      return { section, index, sectionScore };
    })
    .sort((a, b) => {
      if (b.sectionScore !== a.sectionScore) {
        return b.sectionScore - a.sectionScore;
      }
      return a.index - b.index;
    });

  const parts: string[] = [`En clair : ${article.plainSummaryFr.trim()}`];
  let currentLength = parts[0].length;

  for (const entry of rankedSections) {
    if (currentLength >= MAX_EXCERPT_CHARS) {
      break;
    }
    const block = `## ${entry.section.headingFr.trim()}\n${entry.section.bodyMarkdownFr.trim()}`;
    const remaining = MAX_EXCERPT_CHARS - currentLength - 2;
    if (remaining <= 80) {
      break;
    }
    if (block.length <= remaining) {
      parts.push(block);
      currentLength += block.length + 2;
    } else {
      parts.push(`${block.slice(0, remaining - 3).trimEnd()}...`);
      currentLength = MAX_EXCERPT_CHARS;
    }
  }

  return parts.join('\n\n');
}

export function selectRelevantWikiSnippets(
  questionFr: string,
  articles: WikiArticle[],
  maxSnippets = 4,
): ScoredWikiSnippet[] {
  if (!questionFr || articles.length === 0 || maxSnippets <= 0) {
    return [];
  }

  const queryTokens = Array.from(new Set(tokenizeFrenchQuery(questionFr)));
  if (queryTokens.length === 0) {
    return [];
  }

  const normalizedQuestion = normalizeWikiSearchText(questionFr);

  const indexedDocs = articles.map((article) => {
    const titleFreqs = buildTokenFrequencies(article.titleFr);
    const metaFreqs = buildTokenFrequencies(
      `${article.slug.replace(/-/g, ' ')} ${article.aliases.join(' ')} ${article.tags.join(' ')}`,
    );
    const summaryFreqs = buildTokenFrequencies(article.plainSummaryFr);
    const headingsFreqs = buildTokenFrequencies(
      article.sections.map((s) => s.headingFr).join(' '),
    );
    const bodyFreqs = buildTokenFrequencies(
      article.sections.map((s) => s.bodyMarkdownFr).join(' '),
    );

    const allTokens = new Set<string>([
      ...titleFreqs.keys(),
      ...metaFreqs.keys(),
      ...summaryFreqs.keys(),
      ...headingsFreqs.keys(),
      ...bodyFreqs.keys(),
    ]);

    return {
      article,
      titleFreqs,
      metaFreqs,
      summaryFreqs,
      headingsFreqs,
      bodyFreqs,
      allTokens,
    };
  });

  const docCount = indexedDocs.length;
  const idfMap = new Map<string, number>();

  for (const qToken of queryTokens) {
    let df = 0;
    for (const doc of indexedDocs) {
      if (doc.allTokens.has(qToken)) {
        df += 1;
      } else if (qToken.length >= 4) {
        for (const docToken of doc.allTokens) {
          if (docToken.startsWith(qToken) || (qToken.startsWith(docToken) && docToken.length >= 4)) {
            df += 1;
            break;
          }
        }
      }
    }
    idfMap.set(qToken, Math.log((docCount + 1) / (df + 1)) + 1);
  }

  const scored: ScoredWikiSnippet[] = [];

  for (const doc of indexedDocs) {
    let score =
      scoreTokenMap(queryTokens, doc.titleFreqs, idfMap, 4.0) +
      scoreTokenMap(queryTokens, doc.metaFreqs, idfMap, 3.5) +
      scoreTokenMap(queryTokens, doc.headingsFreqs, idfMap, 2.5) +
      scoreTokenMap(queryTokens, doc.summaryFreqs, idfMap, 2.0) +
      scoreTokenMap(queryTokens, doc.bodyFreqs, idfMap, 1.0);

    const normalizedTitle = normalizeWikiSearchText(doc.article.titleFr);
    if (normalizedTitle.length >= 4 && normalizedQuestion.includes(normalizedTitle)) {
      score += 8;
    }

    if (score <= 0) {
      continue;
    }

    scored.push({
      slug: doc.article.slug,
      titleFr: doc.article.titleFr,
      excerptFr: buildArticleExcerpt(doc.article, queryTokens, idfMap),
      score: Math.round(score * 1000) / 1000,
    });
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.titleFr.localeCompare(b.titleFr, 'fr');
  });

  return scored.slice(0, maxSnippets);
}

export async function askWikiWithAi(
  config: AppSettings['aiHelper'],
  questionFr: string,
  articles: WikiArticle[],
  options?: AskWikiWithAiOptions,
): Promise<WikiQaResponse> {
  const adapter = createAiAdapter(config, options?.fetchImpl);

  const trimmedQuestion = questionFr.trim();
  if (trimmedQuestion.length === 0) {
    throw new AiServiceError(
      'EMPTY_INPUT',
      "Veuillez saisir une question avant d'interroger la bibliothèque scientifique.",
    );
  }

  const maxSnippets = options?.maxSnippets ?? 4;
  const snippets = selectRelevantWikiSnippets(trimmedQuestion, articles, maxSnippets);

  if (snippets.length === 0) {
    return {
      answerFr:
        "Aucun article correspondant n'a été trouvé dans la bibliothèque scientifique locale pour cette question. Vous pouvez reformuler votre recherche avec des termes cliniques plus précis ou en discuter directement avec votre cardiologue ou votre médecin traitant.",
      citedArticles: [],
      disclaimerFr: AI_MEDICAL_DISCLAIMER_FR,
    };
  }

  const contextSnippets: WikiContextSnippet[] = snippets.map(({ slug, titleFr, excerptFr }) => ({
    slug,
    titleFr,
    excerptFr,
  }));

  const allowedBySlug = new Map<string, WikiContextSnippet>(
    contextSnippets.map((item) => [item.slug, item]),
  );

  const rawResponse = await adapter.answerFromWikiContext(trimmedQuestion, contextSnippets);

  const seenSlugs = new Set<string>();
  const boundedCitations: { slug: string; titleFr: string }[] = [];
  for (const cited of rawResponse.citedArticles) {
    const allowed = allowedBySlug.get(cited.slug);
    if (allowed && !seenSlugs.has(allowed.slug)) {
      seenSlugs.add(allowed.slug);
      boundedCitations.push({ slug: allowed.slug, titleFr: allowed.titleFr });
    }
  }

  return {
    answerFr: rawResponse.answerFr,
    citedArticles: boundedCitations,
    disclaimerFr: rawResponse.disclaimerFr?.trim() || AI_MEDICAL_DISCLAIMER_FR,
  };
}
