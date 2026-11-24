import { useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  BookOpen,
  ListTree,
  UserCheck,
} from 'lucide-react';
import { findArticleSlugByTitle, getArticleBySlug } from '../../content/fr';
import type { WikiArticle } from '../../types';
import { Card, DisclaimerBanner, EvidenceBadge } from '../../ui';
import {
  CATEGORY_LABELS,
  MODULE_LABELS_FR,
  type SpecificProfileModuleKey,
  formatFrenchIsoDate,
} from './libraryMeta';
import { SafeMarkdown } from './SafeMarkdown';

export interface ArticleReaderProps {
  article: WikiArticle;
  onBack: () => void;
  onOpenArticle: (slug: string) => void;
  matchingProfileModules?: SpecificProfileModuleKey[];
}

export function ArticleReader({
  article,
  onBack,
  onOpenArticle,
  matchingProfileModules = [],
}: ArticleReaderProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [article.slug]);

  const relatedArticles = useMemo(
    () =>
      article.relatedArticleSlugs
        .map((slug) => getArticleBySlug(slug))
        .filter((item): item is WikiArticle => Boolean(item)),
    [article.relatedArticleSlugs],
  );

  const resolveArticleHref = useMemo(
    () => (label: string) => {
      const slug = findArticleSlugByTitle(label);
      if (!slug || slug === article.slug) {
        return undefined;
      }
      return `/library?article=${slug}`;
    },
    [article.slug],
  );

  const handleScrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target && typeof target.scrollIntoView === 'function') {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="touch-target inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-subtle)]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
          <span>Retour à la bibliothèque</span>
        </button>

        <span className="text-xs text-[var(--text-secondary)] tabular-nums">
          Mise à jour : {formatFrenchIsoDate(article.asOf)}
        </span>
      </div>

      <article className="space-y-5" aria-labelledby="article-reader-title">
        <header className="space-y-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-xs sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-lg border border-[var(--status-action-border)] bg-[var(--status-action-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--status-action-text)]">
              {CATEGORY_LABELS[article.category]}
            </span>

            {matchingProfileModules.map((mod) => (
              <span
                key={mod}
                className="inline-flex items-center gap-1 rounded-lg border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-2.5 py-1 text-xs font-medium text-[var(--status-stable-text)]"
              >
                <UserCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Profil : {MODULE_LABELS_FR[mod]}</span>
              </span>
            ))}
          </div>

          <h1
            id="article-reader-title"
            className="text-2xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl"
          >
            {article.titleFr}
          </h1>

          <EvidenceBadge
            confidence={article.confidence}
            volatility={article.volatility}
            asOf={article.asOf}
          />

          <DisclaimerBanner
            variant={article.disclaimerType === 'legal_france' ? 'legal' : 'medical'}
          />
        </header>

        <section
          aria-labelledby="article-plain-summary-heading"
          className="rounded-2xl border border-[var(--status-action-border)] border-l-4 border-l-[var(--color-primary)] bg-[var(--color-primary-soft)] p-5"
        >
          <div className="mb-2 flex items-center gap-2 text-[var(--color-primary)]">
            <BookOpen className="h-5 w-5 shrink-0" aria-hidden="true" />
            <h2 id="article-plain-summary-heading" className="text-base font-semibold">
              En clair
            </h2>
          </div>
          <p className="m-0 text-sm leading-relaxed text-[var(--text-primary)] sm:text-base">
            {article.plainSummaryFr}
          </p>
        </section>

        {article.sections.length >= 2 && (
          <Card
            tone="subtle"
            title="Sommaire de la fiche"
            icon={<ListTree className="h-5 w-5" />}
          >
            <ol className="m-0 grid list-none gap-1.5 p-0 sm:grid-cols-2">
              {article.sections.map((section, index) => {
                const sectionId = `section-${article.slug}-${index}`;
                return (
                  <li key={sectionId}>
                    <button
                      type="button"
                      onClick={() => handleScrollToSection(sectionId)}
                      className="touch-target flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm text-[var(--color-primary)] transition-colors hover:bg-[var(--bg-card)]"
                    >
                      <span className="shrink-0 font-mono text-xs text-[var(--text-secondary)] tabular-nums">
                        {index + 1}.
                      </span>
                      <span className="font-medium leading-snug">{section.headingFr}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Card>
        )}

        <div className="space-y-4">
          {article.sections.map((section, index) => {
            const sectionId = `section-${article.slug}-${index}`;
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-20 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-xs sm:p-6"
              >
                <h2 className="mb-3 border-b border-[var(--border-subtle)] pb-2.5 text-lg font-semibold leading-snug text-[var(--text-primary)] sm:text-xl">
                  {section.headingFr}
                </h2>
                <SafeMarkdown
                  content={section.bodyMarkdownFr}
                  baseHeadingLevel={3}
                  resolveArticleHref={resolveArticleHref}
                />
              </section>
            );
          })}
        </div>

        {relatedArticles.length > 0 && (
          <Card
            title="Pour approfondir (fiches liées)"
            subtitle="Navigation interne hors ligne vers les sujets associés."
            icon={<ArrowRight className="h-5 w-5" />}
          >
            <ul className="m-0 grid list-none gap-2.5 p-0 sm:grid-cols-2">
              {relatedArticles.map((related) => (
                <li key={related.slug}>
                  <button
                    type="button"
                    onClick={() => onOpenArticle(related.slug)}
                    className="touch-target flex h-full w-full items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-3.5 text-left transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]/50"
                  >
                    <div className="min-w-0">
                      <span className="block text-xs font-medium text-[var(--text-secondary)]">
                        {CATEGORY_LABELS[related.category]}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold leading-snug text-[var(--text-primary)]">
                        {related.titleFr}
                      </span>
                    </div>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {article.sources.length > 0 && (
          <Card
            title="Sources scientifiques"
            subtitle="Recommandations, essais cliniques et textes officiels sur lesquels s'appuie cette fiche."
            icon={<BookMarked className="h-5 w-5" />}
          >
            <ul className="m-0 space-y-2.5 pl-5 text-sm leading-relaxed text-[var(--text-primary)]">
              {article.sources.map((source, index) => (
                <li key={`${source.label}-${index}`}>
                  <strong className="font-semibold text-[var(--text-primary)]">
                    {source.label} :
                  </strong>{' '}
                  <span className="text-[var(--text-secondary)]">{source.detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </article>
    </div>
  );
}
