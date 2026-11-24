import { useMemo, useState } from 'react';
import { ArrowRight, BookA, Search, X } from 'lucide-react';
import { GLOSSARY_TERMS, getArticleBySlug } from '../../content/fr';
import { Card } from '../../ui';
import { getGlossaryInitialLetter, searchGlossaryTerms } from './libraryMeta';

export interface GlossaryPanelProps {
  onOpenArticle: (slug: string) => void;
  initialSearch?: string;
}

export function GlossaryPanel({ onOpenArticle, initialSearch = '' }: GlossaryPanelProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');

  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    for (const term of GLOSSARY_TERMS) {
      letters.add(getGlossaryInitialLetter(term.termFr));
    }
    return Array.from(letters).sort((a, b) => a.localeCompare(b, 'fr'));
  }, []);

  const filteredTerms = useMemo(() => {
    const matchingSearch = searchGlossaryTerms(searchQuery, GLOSSARY_TERMS);
    if (selectedLetter === 'ALL') {
      return matchingSearch;
    }
    return matchingSearch.filter(
      (term) => getGlossaryInitialLetter(term.termFr) === selectedLetter,
    );
  }, [searchQuery, selectedLetter]);

  const hasFilters = searchQuery.trim().length > 0 || selectedLetter !== 'ALL';

  return (
    <div className="space-y-4">
      <Card
        title="Glossaire médical et administratif"
        subtitle={`${GLOSSARY_TERMS.length} termes clés définis en français clair, accessibles 100 % hors ligne.`}
        icon={<BookA className="h-5 w-5" />}
      >
        <div className="space-y-4">
          <div>
            <label
              htmlFor="library-glossary-search"
              className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]"
            >
              Rechercher un terme ou un acronyme (avec ou sans accents)
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]"
                aria-hidden="true"
              />
              <input
                id="library-glossary-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Ex. : FEVG, NT-proBNP, ALD 5, EPOF, iSGLT2, LifeVest..."
                className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] py-2.5 pl-10 pr-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Effacer la recherche dans le glossaire"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div
            role="group"
            aria-label="Filtrer le glossaire par lettre"
            className="flex flex-wrap gap-1.5"
          >
            <button
              type="button"
              onClick={() => setSelectedLetter('ALL')}
              aria-pressed={selectedLetter === 'ALL'}
              className={`touch-target rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                selectedLetter === 'ALL'
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--color-primary)]'
              }`}
            >
              Tous
            </button>
            {availableLetters.map((letter) => (
              <button
                key={letter}
                type="button"
                onClick={() =>
                  setSelectedLetter((current) => (current === letter ? 'ALL' : letter))
                }
                aria-pressed={selectedLetter === letter}
                className={`touch-target min-w-[44px] rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  selectedLetter === letter
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--text-secondary)] tabular-nums">
            <span>
              {filteredTerms.length} terme{filteredTerms.length > 1 ? 's' : ''} affiché
              {filteredTerms.length > 1 ? 's' : ''} sur {GLOSSARY_TERMS.length}
            </span>
            {hasFilters && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLetter('ALL');
                }}
                className="font-semibold text-[var(--color-primary)] underline underline-offset-2"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </Card>

      {filteredTerms.length === 0 ? (
        <Card tone="subtle">
          <p className="m-0 text-sm text-[var(--text-secondary)]">
            Aucun terme du glossaire ne correspond à votre recherche. Vous pouvez essayer un
            acronyme plus court ou réinitialiser le filtre alphabétique.
          </p>
        </Card>
      ) : (
        <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
          {filteredTerms.map((term) => {
            const linkedArticle = term.articleSlug ? getArticleBySlug(term.articleSlug) : undefined;
            return (
              <li
                key={term.id}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 shadow-xs"
              >
                <div className="space-y-2">
                  <h3 className="m-0 text-base font-semibold leading-snug text-[var(--text-primary)]">
                    {term.termFr}
                  </h3>

                  {term.aliases.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {term.aliases.slice(0, 4).map((alias) => (
                        <span
                          key={`${term.id}-${alias}`}
                          className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-0.5 text-xs text-[var(--text-secondary)]"
                        >
                          {alias}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="m-0 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {term.shortDefinitionFr}
                  </p>
                </div>

                {linkedArticle && (
                  <div className="border-t border-[var(--border-subtle)] pt-2.5">
                    <button
                      type="button"
                      onClick={() => onOpenArticle(linkedArticle.slug)}
                      className="touch-target inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-left text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-soft)]"
                    >
                      <span>Lire la fiche : {linkedArticle.titleFr}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
