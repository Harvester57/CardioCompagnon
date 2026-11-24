import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ClipboardList,
  ExternalLink,
  Filter,
  PhoneCall,
  Printer,
  Sparkles,
} from 'lucide-react';
import type { EngineEvaluation, RuleCategory, RuleOutput } from '../../types';
import { Card, EvidenceBadge, TriageBadge } from '../../ui';
import {
  RULE_CATEGORY_LABELS,
  RULE_CATEGORY_ORDER,
  type PlanTabId,
} from './plan-helpers';

export interface LivingPlanTabProps {
  evaluation: EngineEvaluation;
  referenceDate: string;
  onSelectTab: (tab: PlanTabId) => void;
}

function getCardToneForSeverity(
  severity: RuleOutput['severity'],
): 'urgent' | 'warning' | 'default' {
  if (severity === 'urgent') return 'urgent';
  if (severity === 'warning') return 'warning';
  return 'default';
}

export function LivingPlanTab({
  evaluation,
  referenceDate,
  onSelectTab,
}: LivingPlanTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | RuleCategory>('all');

  const countsBySeverity = useMemo(() => {
    const counts = { urgent: 0, warning: 0, action: 0, info: 0 };
    for (const item of evaluation.outputs) {
      counts[item.severity] += 1;
    }
    return counts;
  }, [evaluation.outputs]);

  const countsByCategory = useMemo(() => {
    const counts: Record<RuleCategory, number> = {
      daily: 0,
      medications: 0,
      exams: 0,
      devices: 0,
      france: 0,
    };
    for (const item of evaluation.outputs) {
      counts[item.category] += 1;
    }
    return counts;
  }, [evaluation.outputs]);

  const filteredOutputs = useMemo(() => {
    if (selectedCategory === 'all') {
      return evaluation.outputs;
    }
    return evaluation.outputs.filter((item) => item.category === selectedCategory);
  }, [evaluation.outputs, selectedCategory]);

  const triageTone =
    evaluation.triageLevel === 'urgent'
      ? 'urgent'
      : evaluation.triageLevel === 'warning'
        ? 'warning'
        : 'stable';

  return (
    <div className="space-y-4">
      <Card
        tone={triageTone}
        title="Synthèse de votre plan vivant"
        subtitle={`Évaluation déterministe hors ligne au ${referenceDate.split('-').reverse().join('/')}`}
        icon={<Sparkles className="h-5 w-5" />}
        headerAction={<TriageBadge level={evaluation.triageLevel} />}
      >
        <p className="m-0 text-sm leading-relaxed text-[var(--text-primary)]">
          {evaluation.triageSummaryFr}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-xl border border-[var(--status-urgent-border)] bg-[var(--bg-card)] px-3 py-2">
            <span className="block text-xs text-[var(--text-secondary)]">Urgences</span>
            <span className="text-lg font-bold text-[var(--status-urgent-text)] tabular-nums">
              {countsBySeverity.urgent}
            </span>
          </div>
          <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--bg-card)] px-3 py-2">
            <span className="block text-xs text-[var(--text-secondary)]">Vigilances</span>
            <span className="text-lg font-bold text-[var(--status-warning-text)] tabular-nums">
              {countsBySeverity.warning}
            </span>
          </div>
          <div className="rounded-xl border border-[var(--status-action-border)] bg-[var(--bg-card)] px-3 py-2">
            <span className="block text-xs text-[var(--text-secondary)]">À discuter</span>
            <span className="text-lg font-bold text-[var(--status-action-text)] tabular-nums">
              {countsBySeverity.action}
            </span>
          </div>
          <div className="rounded-xl border border-[var(--status-info-border)] bg-[var(--bg-card)] px-3 py-2">
            <span className="block text-xs text-[var(--text-secondary)]">Repères</span>
            <span className="text-lg font-bold text-[var(--status-info-text)] tabular-nums">
              {countsBySeverity.info}
            </span>
          </div>
        </div>

        <div className="no-print mt-4 flex flex-wrap gap-2">
          {evaluation.triageLevel === 'urgent' && (
            <button
              type="button"
              onClick={() => onSelectTab('urgence')}
              className="touch-target inline-flex items-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-text)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Ouvrir la carte d&apos;urgence (15 / 112)</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => onSelectTab('consult')}
            className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <ClipboardList className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Préparer vos questions de consultation</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectTab('synthese')}
            className="touch-target inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-subtle)]"
          >
            <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Fiche de synthèse A4</span>
          </button>
        </div>
      </Card>

      <Card
        title="Filtrer par domaine"
        icon={<Filter className="h-5 w-5" />}
        className="no-print"
      >
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtres par catégorie du plan vivant"
        >
          <button
            type="button"
            aria-pressed={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`touch-target inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
            }`}
          >
            <span>Toutes</span>
            <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-xs tabular-nums">
              {evaluation.outputs.length}
            </span>
          </button>

          {RULE_CATEGORY_ORDER.map((category) => {
            const isSelected = selectedCategory === category;
            const count = countsByCategory[category];
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`touch-target inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isSelected
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                }`}
              >
                <span>{RULE_CATEGORY_LABELS[category]}</span>
                <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-xs tabular-nums">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Card>

      {filteredOutputs.length === 0 ? (
        <Card tone="subtle">
          <p className="m-0 text-sm text-[var(--text-secondary)]">
            Aucun élément actif dans cette catégorie à partir de vos données actuelles.
          </p>
        </Card>
      ) : (
        <ol className="m-0 list-none space-y-3 p-0" aria-label="Points prioritaires de votre plan">
          {filteredOutputs.map((output) => (
            <li key={`${output.id}-${output.titleFr}`}>
              <Card tone={getCardToneForSeverity(output.severity)}>
                <div className="flex flex-wrap items-center gap-2">
                  <TriageBadge level={output.severity} size="sm" />
                  <span className="inline-flex items-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
                    {RULE_CATEGORY_LABELS[output.category]}
                  </span>
                  {output.evidenceGrade && <EvidenceBadge grade={output.evidenceGrade} />}
                </div>

                <h3 className="mt-2.5 text-base font-semibold text-[var(--text-primary)]">
                  {output.titleFr}
                </h3>

                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {output.explanationFr}
                </p>

                <div className="mt-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/90 p-3">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    Action suggérée
                  </span>
                  <p className="mt-1 mb-0 text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                    {output.suggestedActionFr}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-3 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5 text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Sources :</span>
                    <span>{output.sources.join(' · ')}</span>
                  </div>

                  <Link
                    to={`/library?article=${encodeURIComponent(output.articleSlug)}`}
                    className="touch-target inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-soft)]"
                  >
                    <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>Lire l&apos;article scientifique</span>
                    <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
