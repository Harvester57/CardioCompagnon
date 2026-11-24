import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  BookA,
  BookOpen,
  Filter,
  MessageSquareText,
  Search,
  UserCheck,
  X,
} from 'lucide-react';
import {
  GLOSSARY_TERMS,
  getAllArticles,
  getArticleBySlug,
  searchArticles,
} from '../../content/fr';
import { usePatientProfile } from '../../db';
import type { ArticleCategory } from '../../types';
import { Card, DisclaimerBanner, EvidenceBadge } from '../../ui';
import { ArticleReader } from './ArticleReader';
import { GlossaryPanel } from './GlossaryPanel';
import {
  ARTICLE_CATEGORIES,
  CATEGORY_LABELS,
  MODULE_LABELS_FR,
  getActiveSpecificModuleKeys,
  getMatchingProfileModules,
  isArticleRelevantToProfile,
  searchGlossaryTerms,
} from './libraryMeta';
import { WikiQaPanel } from './WikiQaPanel';

type LibraryTab = 'articles' | 'glossary' | 'qa';

function parseTabParam(rawTab: string | null): LibraryTab {
  if (rawTab === 'glossary' || rawTab === 'qa') {
    return rawTab;
  }
  return 'articles';
}

export function LibraryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const profile = usePatientProfile();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');
  const [profileOnly, setProfileOnly] = useState(false);

  const allArticles = useMemo(() => getAllArticles(), []);
  const articleSlugParam = searchParams.get('article');
  const activeTab = parseTabParam(searchParams.get('tab'));

  const selectedArticle = useMemo(
    () => (articleSlugParam ? getArticleBySlug(articleSlugParam) : undefined),
    [articleSlugParam],
  );

  const activeSpecificModules = useMemo(
    () => getActiveSpecificModuleKeys(profile),
    [profile],
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<ArticleCategory, number> = {
      diagnostic: 0,
      traitements: 0,
      dispositifs: 0,
      comorbidites: 0,
      nutrition: 0,
      quotidien: 0,
      france: 0,
      references: 0,
    };
    for (const article of allArticles) {
      counts[article.category] += 1;
    }
    return counts;
  }, [allArticles]);

  const profileRelevantCount = useMemo(
    () => allArticles.filter((article) => isArticleRelevantToProfile(article, profile)).length,
    [allArticles, profile],
  );

  const filteredArticles = useMemo(() => {
    const searched = searchQuery.trim() ? searchArticles(searchQuery) : allArticles;
    return searched.filter((article) => {
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }
      if (profileOnly && !isArticleRelevantToProfile(article, profile)) {
        return false;
      }
      return true;
    });
  }, [allArticles, profile, profileOnly, searchQuery, selectedCategory]);

  const glossaryMatches = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    return searchGlossaryTerms(searchQuery, GLOSSARY_TERMS);
  }, [searchQuery]);

  const handleOpenArticle = (slug: string) => {
    setSearchParams({ article: slug });
  };

  const handleCloseArticle = () => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete('article');
      return next;
    });
  };

  const handleSelectTab = (tab: LibraryTab) => {
    if (tab === 'articles') {
      setSearchParams({});
    } else {
      setSearchParams({ tab });
    }
  };

  if (articleSlugParam) {
    if (selectedArticle) {
      return (
        <ArticleReader
          article={selectedArticle}
          onBack={handleCloseArticle}
          onOpenArticle={handleOpenArticle}
          matchingProfileModules={getMatchingProfileModules(selectedArticle, profile)}
        />
      );
    }

    return (
      <div className="space-y-4">
        <DisclaimerBanner variant="medical" compact />
        <Card
          tone="warning"
          title="Fiche scientifique introuvable"
          subtitle={`Aucune fiche ne correspond à l’identifiant « ${articleSlugParam} ».`}
        >
          <button
            type="button"
            onClick={handleCloseArticle}
            className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)]"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Revenir au catalogue des {allArticles.length} fiches</span>
          </button>
        </Card>
      </div>
    );
  }

  const hasActiveFilters =
    searchQuery.trim().length > 0 || selectedCategory !== 'all' || profileOnly;

  return (
    <div className="space-y-5">
      <header className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="m-0 text-2xl font-bold leading-tight text-[var(--text-primary)]">
              Bibliothèque scientifique
            </h1>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {allArticles.length} fiches scientifiques en français, {GLOSSARY_TERMS.length} termes
              de glossaire et recherche instantanée 100 % hors ligne.
            </p>
          </div>
        </div>

        <DisclaimerBanner variant="medical" compact />
      </header>

      <div
        role="tablist"
        aria-label="Sections de la bibliothèque scientifique"
        className="grid grid-cols-1 gap-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-1.5 sm:grid-cols-3"
      >
        <button
          id="library-tab-articles"
          type="button"
          role="tab"
          aria-selected={activeTab === 'articles'}
          aria-controls="library-panel-articles"
          onClick={() => handleSelectTab('articles')}
          className={`touch-target flex items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
            activeTab === 'articles'
              ? 'bg-[var(--color-primary)] text-white'
              : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
          }`}
        >
          <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="tabular-nums">Fiches ({allArticles.length})</span>
        </button>

        <button
          id="library-tab-glossary"
          type="button"
          role="tab"
          aria-selected={activeTab === 'glossary'}
          aria-controls="library-panel-glossary"
          onClick={() => handleSelectTab('glossary')}
          className={`touch-target flex items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
            activeTab === 'glossary'
              ? 'bg-[var(--color-primary)] text-white'
              : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
          }`}
        >
          <BookA className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="tabular-nums">Glossaire ({GLOSSARY_TERMS.length})</span>
        </button>

        <button
          id="library-tab-qa"
          type="button"
          role="tab"
          aria-selected={activeTab === 'qa'}
          aria-controls="library-panel-qa"
          onClick={() => handleSelectTab('qa')}
          className={`touch-target flex items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
            activeTab === 'qa'
              ? 'bg-[var(--color-primary)] text-white'
              : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
          }`}
        >
          <MessageSquareText className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Questions IA (optionnel)</span>
        </button>
      </div>

      {activeTab === 'articles' && (
        <div
          id="library-panel-articles"
          role="tabpanel"
          aria-labelledby="library-tab-articles"
          className="space-y-4"
        >
          <Card>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="library-articles-search"
                  className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Recherche plein texte hors ligne (fiches et glossaire)
                </label>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]"
                    aria-hidden="true"
                  />
                  <input
                    id="library-articles-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Ex. : fraction d'éjection, ALD 5, fer intraveineux, réglisse, permis..."
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] py-2.5 pl-10 pr-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Effacer la recherche"
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/70 p-3">
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      aria-pressed={profileOnly}
                      onClick={() => setProfileOnly((current) => !current)}
                      className={`touch-target inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
                        profileOnly
                          ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                          : 'border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--color-primary)]'
                      }`}
                    >
                      <UserCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="tabular-nums">
                        Pertinent pour mon profil ({profileRelevantCount})
                      </span>
                    </button>
                  </div>
                  <p className="m-0 text-xs text-[var(--text-secondary)]">
                    {activeSpecificModules.length > 0 ? (
                      <>
                        Modules actifs de votre profil :{' '}
                        <strong className="font-medium text-[var(--text-primary)]">
                          {activeSpecificModules.map((mod) => MODULE_LABELS_FR[mod]).join(', ')}
                        </strong>
                        .
                      </>
                    ) : (
                      <>
                        Votre profil utilise actuellement le socle commun. Vous pouvez activer des
                        situations cliniques spécifiques dans les{' '}
                        <Link
                          to="/settings"
                          className="font-medium text-[var(--color-primary)] underline"
                        >
                          Paramètres
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                  <Filter className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>Filtrer par catégorie</span>
                </div>
                <div
                  role="group"
                  aria-label="Catégories d'articles"
                  className="flex flex-wrap gap-2"
                >
                  <button
                    type="button"
                    aria-pressed={selectedCategory === 'all'}
                    onClick={() => setSelectedCategory('all')}
                    className={`touch-target rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors tabular-nums ${
                      selectedCategory === 'all'
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--color-primary)]'
                    }`}
                  >
                    Toutes ({allArticles.length})
                  </button>

                  {ARTICLE_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      type="button"
                      aria-pressed={selectedCategory === category.id}
                      onClick={() =>
                        setSelectedCategory((current) =>
                          current === category.id ? 'all' : category.id,
                        )
                      }
                      className={`touch-target rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors tabular-nums ${
                        selectedCategory === category.id
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                          : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--color-primary)]'
                      }`}
                    >
                      {category.shortLabelFr} ({categoryCounts[category.id]})
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--text-secondary)] tabular-nums">
                <span>
                  {filteredArticles.length} fiche{filteredArticles.length > 1 ? 's' : ''} affichée
                  {filteredArticles.length > 1 ? 's' : ''} sur {allArticles.length}
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setProfileOnly(false);
                    }}
                    className="font-semibold text-[var(--color-primary)] underline underline-offset-2"
                  >
                    Réinitialiser tous les filtres
                  </button>
                )}
              </div>
            </div>
          </Card>

          {glossaryMatches.length > 0 && (
            <Card
              tone="subtle"
              title={`Correspondances dans le glossaire (${glossaryMatches.length})`}
              icon={<BookA className="h-5 w-5" />}
              headerAction={
                <button
                  type="button"
                  onClick={() => handleSelectTab('glossary')}
                  className="text-xs font-semibold text-[var(--color-primary)] underline underline-offset-2"
                >
                  Ouvrir le glossaire
                </button>
              }
            >
              <ul className="m-0 space-y-2.5 list-none p-0">
                {glossaryMatches.slice(0, 4).map((term) => {
                  const linked = term.articleSlug ? getArticleBySlug(term.articleSlug) : undefined;
                  return (
                    <li
                      key={term.id}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="m-0 text-sm font-semibold text-[var(--text-primary)]">
                            {term.termFr}
                          </p>
                          <p className="mt-1 mb-0 text-xs leading-relaxed text-[var(--text-secondary)]">
                            {term.shortDefinitionFr}
                          </p>
                        </div>
                        {linked && (
                          <button
                            type="button"
                            onClick={() => handleOpenArticle(linked.slug)}
                            className="touch-target inline-flex shrink-0 items-center gap-1 rounded-lg border border-[var(--status-action-border)] bg-[var(--status-action-bg)] px-2.5 py-1.5 text-xs font-semibold text-[var(--status-action-text)]"
                          >
                            <span>Fiche liée</span>
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}

          {filteredArticles.length === 0 ? (
            <Card tone="subtle">
              <p className="m-0 text-sm text-[var(--text-secondary)]">
                Aucune fiche ne correspond à ces critères. Essayez un mot-clé plus général ou
                désactivez un filtre de catégorie ou de profil.
              </p>
            </Card>
          ) : (
            <ul
              aria-label="Liste des fiches scientifiques"
              className="m-0 grid list-none gap-3.5 p-0 sm:grid-cols-2"
            >
              {filteredArticles.map((article) => {
                const matchedModules = getMatchingProfileModules(article, profile);
                return (
                  <li key={article.slug} className="flex">
                    <button
                      type="button"
                      onClick={() => handleOpenArticle(article.slug)}
                      className="group flex w-full flex-col justify-between gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 text-left shadow-xs transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]/30 sm:p-5"
                    >
                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="rounded-md border border-[var(--status-action-border)] bg-[var(--status-action-bg)] px-2 py-0.5 text-xs font-semibold text-[var(--status-action-text)]">
                            {CATEGORY_LABELS[article.category]}
                          </span>
                          {matchedModules.map((mod) => (
                            <span
                              key={`${article.slug}-${mod}`}
                              className="inline-flex items-center gap-1 rounded-md border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-2 py-0.5 text-xs font-medium text-[var(--status-stable-text)]"
                            >
                              <UserCheck className="h-3 w-3 shrink-0" aria-hidden="true" />
                              <span>{MODULE_LABELS_FR[mod]}</span>
                            </span>
                          ))}
                        </div>

                        <h2 className="m-0 text-base font-semibold leading-snug text-[var(--text-primary)] group-hover:text-[var(--color-primary)]">
                          {article.titleFr}
                        </h2>

                        <p className="m-0 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {article.plainSummaryFr}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3">
                        <EvidenceBadge confidence={article.confidence} asOf={article.asOf} />
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]">
                          <span>Lire la fiche</span>
                          <ArrowRight
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}

      {activeTab === 'glossary' && (
        <div
          id="library-panel-glossary"
          role="tabpanel"
          aria-labelledby="library-tab-glossary"
        >
          <GlossaryPanel onOpenArticle={handleOpenArticle} initialSearch={searchQuery} />
        </div>
      )}

      {activeTab === 'qa' && (
        <div id="library-panel-qa" role="tabpanel" aria-labelledby="library-tab-qa">
          <WikiQaPanel onOpenArticle={handleOpenArticle} />
        </div>
      )}
    </div>
  );
}
