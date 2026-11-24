import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter, Search, ShieldCheck, X } from 'lucide-react';
import { INTERACTIONS_CATALOG } from '../../content/fr';
import type { InteractionItem, Medication } from '../../types';
import { Card, EvidenceBadge } from '../../ui';
import {
  INTERACTION_VERDICT_META,
  PILLAR_META,
  filterInteractions,
  formatMedicationDisplayName,
  getActiveMedicationsByPillar,
  getActivePillars,
} from './medsHelpers';

export interface InteractionsCheckerProps {
  medications: Medication[];
}

type VerdictFilter = InteractionItem['verdict'] | 'all';

const VERDICT_ORDER: readonly VerdictFilter[] = [
  'all',
  'avoid',
  'worth_raising',
  'possible',
  'not_supported',
];

export function InteractionsChecker({ medications }: InteractionsCheckerProps) {
  const [query, setQuery] = useState('');
  const [verdict, setVerdict] = useState<VerdictFilter>('all');
  const [onlyActiveMeds, setOnlyActiveMeds] = useState(false);

  const activePillars = getActivePillars(medications);
  const activeMedsByPillar = getActiveMedicationsByPillar(medications);

  const filteredItems = filterInteractions(INTERACTIONS_CATALOG, {
    query,
    verdict,
    onlyActiveMeds,
    activePillars,
  });

  // Compteurs par verdict en tenant compte de la recherche et du filtre traitements actifs
  const baseForCounts = filterInteractions(INTERACTIONS_CATALOG, {
    query,
    verdict: 'all',
    onlyActiveMeds,
    activePillars,
  });

  const verdictCounts: Record<VerdictFilter, number> = {
    all: baseForCounts.length,
    avoid: baseForCounts.filter((i) => i.verdict === 'avoid').length,
    worth_raising: baseForCounts.filter((i) => i.verdict === 'worth_raising').length,
    possible: baseForCounts.filter((i) => i.verdict === 'possible').length,
    not_supported: baseForCounts.filter((i) => i.verdict === 'not_supported').length,
  };

  return (
    <div className="space-y-4">
      <Card
        title="Vérificateur Sécurité, Compléments & Interactions"
        subtitle={`Consultez les ${INTERACTIONS_CATALOG.length} fiches fondées sur les preuves (médicaments en vente libre, compléments alimentaires, plantes et aliments) et croisez-les avec vos traitements actifs.`}
        icon={<ShieldCheck className="h-5 w-5" />}
      >
        <div className="space-y-4">
          {/* Champ de recherche instantanee */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label
                htmlFor="interactions-search"
                className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
              >
                Rechercher un produit, une plante, un aliment ou un médicament sans ordonnance
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]"
                  aria-hidden="true"
                />
                <input
                  id="interactions-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ex. ibuprofène, pamplemousse, réglisse, oméga-3, millepertuis, sel au potassium..."
                  className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] py-2.5 pl-9 pr-9 text-sm text-[var(--text-primary)]"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Effacer la recherche"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            <div className="touch-target inline-flex items-center gap-2.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-subtle)] px-3.5 py-2.5 text-sm font-medium text-[var(--text-primary)]">
              <input
                id="interactions-active-only"
                type="checkbox"
                checked={onlyActiveMeds}
                onChange={(e) => setOnlyActiveMeds(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded"
              />
              <label htmlFor="interactions-active-only" className="cursor-pointer">
                Concerne mes traitements actifs
              </label>
            </div>
          </div>

          {/* Filtres par verdict */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)]">
              <Filter className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Filtrer par niveau de recommandation :</span>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtre par verdict">
              {VERDICT_ORDER.map((v) => {
                const isSelected = verdict === v;
                const label =
                  v === 'all' ? 'Tous les verdicts' : INTERACTION_VERDICT_META[v].labelFr;
                return (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setVerdict(v)}
                    className={`touch-target inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                        : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[11px] tabular-nums ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
                      }`}
                    >
                      {verdictCounts[v]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resume du filtrage */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3 text-xs text-[var(--text-secondary)]">
            <p className="m-0 tabular-nums">
              <strong className="font-semibold text-[var(--text-primary)]">
                {`${filteredItems.length} fiche${filteredItems.length > 1 ? 's' : ''} affichée${filteredItems.length > 1 ? 's' : ''} sur ${INTERACTIONS_CATALOG.length}`}
              </strong>
              {onlyActiveMeds && (
                <span>
                  {` · filtré sur vos ${activePillars.size} classe${activePillars.size > 1 ? 's' : ''} active${activePillars.size > 1 ? 's' : ''}`}
                </span>
              )}
            </p>
            {(query || verdict !== 'all' || onlyActiveMeds) && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setVerdict('all');
                  setOnlyActiveMeds(false);
                }}
                className="font-semibold text-[var(--color-primary)] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </Card>

      {/* Liste des fiches d'interactions */}
      {filteredItems.length === 0 ? (
        <Card tone="subtle">
          <p className="text-sm text-[var(--text-secondary)]">
            {onlyActiveMeds && activePillars.size === 0
              ? "Vous n'avez pas encore enregistré de traitement actif. Ajoutez vos traitements dans l'onglet « 4 piliers & Traitements » pour activer le croisement automatique."
              : 'Aucune fiche ne correspond à vos critères actuels. Essayez un autre mot-clé ou réinitialisez les filtres.'}
          </p>
        </Card>
      ) : (
        <ul className="m-0 grid list-none grid-cols-1 gap-3.5 p-0">
          {filteredItems.map((item) => {
            const verdictMeta = INTERACTION_VERDICT_META[item.verdict];
            const matchingMeds = item.affectedPillars.flatMap(
              (pillar) => activeMedsByPillar.get(pillar) ?? [],
            );

            return (
              <li key={item.id}>
                <Card tone={verdictMeta.cardTone} className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-[var(--text-primary)]">
                        {item.nameFr}
                      </h3>
                      {item.aliases.length > 0 && (
                        <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                          Aussi appelé : {item.aliases.join(', ')}
                        </p>
                      )}
                    </div>
                    <span
                      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${verdictMeta.badgeClasses}`}
                    >
                      {verdictMeta.labelFr}
                    </span>
                  </div>

                  {matchingMeds.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-xs">
                      <span className="font-semibold text-[var(--text-primary)]">
                        Concerne vos traitements actifs :
                      </span>
                      {matchingMeds.map((med) => (
                        <span
                          key={med.id ?? `${med.pillar}-${med.innName}`}
                          className="rounded-md bg-[var(--color-primary-soft)] px-2 py-0.5 font-medium text-[var(--color-primary)]"
                        >
                          {formatMedicationDisplayName(med)}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                    {item.summaryFr}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.mechanismOrCaveatFr}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-[var(--text-secondary)]">Classes concernées :</span>
                    {item.affectedPillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2 py-0.5 text-[var(--text-secondary)]"
                      >
                        {PILLAR_META[pillar].shortLabelFr}
                      </span>
                    ))}
                  </div>

                  {item.evidenceGrade && <EvidenceBadge grade={item.evidenceGrade} />}

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-2.5 text-xs text-[var(--text-secondary)]">
                    <span>Sources : {item.sources.join(' · ')}</span>
                    <Link
                      to={`/library?article=${encodeURIComponent(item.articleSlug)}`}
                      className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      <span>Lire la fiche scientifique</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
