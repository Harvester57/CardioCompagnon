import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, X } from 'lucide-react';
import { GLOSSARY_TERMS, normalizeFrenchText } from '../content/fr';

export interface GlossaryTooltipProps {
  term: string;
  definition?: string;
  articleSlug?: string;
  children?: ReactNode;
  className?: string;
}

export function GlossaryTooltip({
  term,
  definition,
  articleSlug,
  children,
  className = '',
}: GlossaryTooltipProps) {
  const [open, setOpen] = useState(false);
  const popoverId = useId();
  const containerRef = useRef<HTMLSpanElement | null>(null);

  const normalizedTerm = normalizeFrenchText(term);
  const catalogEntry = GLOSSARY_TERMS.find(
    (entry) =>
      normalizeFrenchText(entry.termFr) === normalizedTerm ||
      entry.aliases.some((alias) => normalizeFrenchText(alias) === normalizedTerm),
  );

  const resolvedDefinition =
    definition ??
    catalogEntry?.shortDefinitionFr ??
    'Consultez le glossaire de la bibliothèque pour la définition complète de ce terme.';
  const resolvedSlug = articleSlug ?? catalogEntry?.articleSlug;

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <span ref={containerRef} className={`relative inline-block ${className}`.trim()}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={popoverId}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1 rounded border-b border-dashed border-[var(--color-primary)] px-0.5 text-left font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
      >
        <span>{children ?? term}</span>
        <HelpCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      </button>

      {open && (
        <span
          id={popoverId}
          role="dialog"
          aria-label={`Définition : ${term}`}
          className="no-print absolute left-0 top-full z-40 mt-1.5 block w-72 max-w-[85vw] rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] p-3.5 text-sm text-[var(--text-primary)] shadow-lg"
        >
          <span className="mb-1.5 flex items-start justify-between gap-2">
            <strong className="font-semibold text-[var(--color-primary)]">{term}</strong>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer la définition"
              className="rounded p-1 text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </span>
          <span className="block leading-relaxed text-[var(--text-secondary)]">
            {resolvedDefinition}
          </span>
          {resolvedSlug && (
            <Link
              to={`/library?article=${encodeURIComponent(resolvedSlug)}`}
              onClick={() => setOpen(false)}
              className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] underline-offset-2 hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Lire la fiche associée</span>
            </Link>
          )}
        </span>
      )}
    </span>
  );
}
