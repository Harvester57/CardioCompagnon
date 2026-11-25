import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import { EXPECTED_ARTICLE_SLUGS } from '../src/content/fr/expected-slugs';
import type { WikiArticle } from '../src/types';

const DEFAULT_WIKI_ROOT = path.join(os.homedir(), 'Documents', 'wiki', 'topics', 'ischaemic-cardiomyopathy');
const ALLOWED_SOURCE_PREFIXES = ['wiki/', 'output/'] as const;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

interface SyncCheckEntry {
  slug: string;
  sourceWikiPath: string;
  asOf: string;
  sourceDate?: string;
  sourceDateField?: string;
  status: 'ok' | 'stale' | 'mismatch' | 'missing_source' | 'missing_frontmatter_date' | 'forbidden_path';
  detail: string;
}

function isAllowedWikiRelativePath(relPath: string): boolean {
  const normalized = relPath.replace(/\\/g, '/').trim();
  if (normalized.includes('..') || path.isAbsolute(normalized)) {
    return false;
  }
  return ALLOWED_SOURCE_PREFIXES.some((prefix) => normalized.startsWith(prefix));
}

function extractFrontmatterDate(markdown: string): { date: string; field: string } | null {
  const frontmatterMatch = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) {
    return null;
  }

  const frontmatter = frontmatterMatch[1];
  const candidateFields = ['updated', 'generated', 'created'] as const;

  for (const field of candidateFields) {
    const fieldRegex = new RegExp(`^${field}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})["']?\\s*$`, 'm');
    const match = frontmatter.match(fieldRegex);
    if (match?.[1] && ISO_DATE_PATTERN.test(match[1])) {
      return { date: match[1], field };
    }
  }

  return null;
}

async function loadArticleModule(filePath: string): Promise<WikiArticle | null> {
  const mod = (await import(pathToFileURL(filePath).href)) as { article?: WikiArticle };
  return mod.article ?? null;
}

async function runWikiSyncCheck(): Promise<void> {
  const wikiRoot = process.env.WIKI_ROOT?.trim() || DEFAULT_WIKI_ROOT;
  const articlesDir = path.resolve(process.cwd(), 'src/content/fr/articles');

  if (!fs.existsSync(articlesDir)) {
    console.error(`Répertoire des articles introuvable : ${articlesDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(wikiRoot)) {
    console.error(`Répertoire du wiki source introuvable : ${wikiRoot}`);
    console.error("Définissez la variable d'environnement WIKI_ROOT si le wiki est situé ailleurs.");
    process.exit(1);
  }

  const diskFiles = fs
    .readdirSync(articlesDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.ts'))
    .map((entry) => entry.name)
    .sort();

  const expectedSet = new Set<string>(EXPECTED_ARTICLE_SLUGS);
  const foundSlugs = new Set<string>();
  const extraFiles: string[] = [];
  const invalidModules: string[] = [];
  const entries: SyncCheckEntry[] = [];

  for (const fileName of diskFiles) {
    const slugFromFile = fileName.replace(/\.ts$/, '');
    if (!expectedSet.has(slugFromFile)) {
      extraFiles.push(fileName);
    }

    const fullFilePath = path.join(articlesDir, fileName);
    const article = await loadArticleModule(fullFilePath);
    if (!article || typeof article.slug !== 'string' || typeof article.sourceWikiPath !== 'string') {
      invalidModules.push(fileName);
      continue;
    }

    foundSlugs.add(article.slug);

    if (!isAllowedWikiRelativePath(article.sourceWikiPath)) {
      entries.push({
        slug: article.slug,
        sourceWikiPath: article.sourceWikiPath,
        asOf: article.asOf,
        status: 'forbidden_path',
        detail: 'Chemin source hors périmètre autorisé (seuls wiki/ et output/ sont autorisés).',
      });
      continue;
    }

    const resolvedSource = path.resolve(wikiRoot, article.sourceWikiPath);
    const normalizedRoot = path.resolve(wikiRoot) + path.sep;
    if (!resolvedSource.startsWith(normalizedRoot)) {
      entries.push({
        slug: article.slug,
        sourceWikiPath: article.sourceWikiPath,
        asOf: article.asOf,
        status: 'forbidden_path',
        detail: 'Évasion de répertoire détectée hors de la racine du wiki.',
      });
      continue;
    }

    if (!fs.existsSync(resolvedSource)) {
      entries.push({
        slug: article.slug,
        sourceWikiPath: article.sourceWikiPath,
        asOf: article.asOf,
        status: 'missing_source',
        detail: `Fichier source introuvable : ${resolvedSource}`,
      });
      continue;
    }

    const markdown = fs.readFileSync(resolvedSource, 'utf8');
    const extracted = extractFrontmatterDate(markdown);

    if (!extracted) {
      entries.push({
        slug: article.slug,
        sourceWikiPath: article.sourceWikiPath,
        asOf: article.asOf,
        status: 'missing_frontmatter_date',
        detail: 'Date frontmatter YAML (updated/generated) absente ou invalide.',
      });
      continue;
    }

    if (extracted.date === article.asOf) {
      entries.push({
        slug: article.slug,
        sourceWikiPath: article.sourceWikiPath,
        asOf: article.asOf,
        sourceDate: extracted.date,
        sourceDateField: extracted.field,
        status: 'ok',
        detail: `À jour (${extracted.field}=${extracted.date})`,
      });
    } else if (extracted.date > article.asOf) {
      entries.push({
        slug: article.slug,
        sourceWikiPath: article.sourceWikiPath,
        asOf: article.asOf,
        sourceDate: extracted.date,
        sourceDateField: extracted.field,
        status: 'stale',
        detail: `Wiki plus récent (${extracted.field}=${extracted.date} > asOf=${article.asOf})`,
      });
    } else {
      entries.push({
        slug: article.slug,
        sourceWikiPath: article.sourceWikiPath,
        asOf: article.asOf,
        sourceDate: extracted.date,
        sourceDateField: extracted.field,
        status: 'mismatch',
        detail: `Écart de date (${extracted.field}=${extracted.date} != asOf=${article.asOf})`,
      });
    }
  }

  const missingSlugs = EXPECTED_ARTICLE_SLUGS.filter((slug) => !foundSlugs.has(slug));
  const okEntries = entries.filter((entry) => entry.status === 'ok');
  const errorEntries = entries.filter((entry) => entry.status !== 'ok');

  console.log('=== Rapport de synchronisation Wiki -> Articles français ===');
  console.log(`Racine wiki inspectée (wiki/ et output/ uniquement) : ${wikiRoot}`);
  console.log(
    `Articles attendus : ${EXPECTED_ARTICLE_SLUGS.length} | Fichiers trouvés : ${diskFiles.length} | À jour : ${okEntries.length}/${EXPECTED_ARTICLE_SLUGS.length}`,
  );

  if (missingSlugs.length > 0) {
    console.error(`Articles manquants (${missingSlugs.length}) : ${missingSlugs.join(', ')}`);
  }

  if (extraFiles.length > 0) {
    console.error(`Fichiers non référencés dans EXPECTED_ARTICLE_SLUGS (${extraFiles.length}) : ${extraFiles.join(', ')}`);
  }

  if (invalidModules.length > 0) {
    console.error(`Modules article invalides (${invalidModules.length}) : ${invalidModules.join(', ')}`);
  }

  if (errorEntries.length > 0) {
    console.error(`Écarts ou erreurs détectés (${errorEntries.length}) :`);
    for (const entry of errorEntries) {
      console.error(`  - [${entry.status}] ${entry.slug} (${entry.sourceWikiPath}) : ${entry.detail}`);
    }
  }

  const isSuccess =
    missingSlugs.length === 0 &&
    extraFiles.length === 0 &&
    invalidModules.length === 0 &&
    errorEntries.length === 0 &&
    okEntries.length === EXPECTED_ARTICLE_SLUGS.length;

  if (!isSuccess) {
    console.error('Synchronisation wiki EN ÉCHEC : mettez à jour les articles ou corrigez les écarts ci-dessus.');
    process.exit(1);
  }

  console.log(
    `Synchronisation wiki OK : ${okEntries.length}/${EXPECTED_ARTICLE_SLUGS.length} articles français à jour avec le wiki source.`,
  );
  process.exit(0);
}

void runWikiSyncCheck();
