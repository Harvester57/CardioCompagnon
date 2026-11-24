import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, PhoneCall, ShieldAlert } from 'lucide-react';
import type { EngineEvaluation, RuleOutput } from '../../types';
import { Card, EvidenceBadge, TriageBadge } from '../../ui';
import { partitionTodayAlerts } from './today-utils';

export interface TriageBannerProps {
  evaluation: EngineEvaluation;
}

function AlertRow({ alert }: { alert: RuleOutput }) {
  const isUrgent = alert.severity === 'urgent';
  const isWarning = alert.severity === 'warning';

  const containerClasses = isUrgent
    ? 'border-[var(--status-urgent-border)] bg-[var(--bg-card)]'
    : isWarning
      ? 'border-[var(--status-warning-border)] bg-[var(--bg-card)]'
      : 'border-[var(--border-subtle)] bg-[var(--bg-card)]';

  return (
    <li className={`rounded-xl border p-3.5 ${containerClasses}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <TriageBadge level={alert.severity} size="sm" />
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">{alert.titleFr}</h3>
        </div>
        {alert.evidenceGrade && <EvidenceBadge grade={alert.evidenceGrade} />}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-[var(--text-primary)]">
        {alert.explanationFr}
      </p>
      <p className="mt-1.5 text-sm font-medium leading-relaxed text-[var(--text-secondary)]">
        {alert.suggestedActionFr}
      </p>

      <div className="mt-2.5 flex flex-wrap items-center gap-3">
        <Link
          to={`/library?article=${encodeURIComponent(alert.articleSlug)}`}
          className="touch-target inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
        >
          <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Consulter l&apos;article associé</span>
          <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        </Link>
        {alert.sources.length > 0 && (
          <span className="text-xs text-[var(--text-secondary)]">
            Sources : {alert.sources.join(', ')}
          </span>
        )}
      </div>
    </li>
  );
}

export function TriageBanner({ evaluation }: TriageBannerProps) {
  const { priorityAlerts, otherWarnings } = partitionTodayAlerts(evaluation.outputs);
  const hasUrgent =
    evaluation.triageLevel === 'urgent' ||
    priorityAlerts.some((alert) => alert.severity === 'urgent');

  return (
    <Card
      tone={evaluation.triageLevel}
      title="Triage du jour"
      icon={<ShieldAlert className="h-5 w-5" />}
      headerAction={<TriageBadge level={evaluation.triageLevel} />}
    >
      <div role="status" aria-live="polite" className="space-y-3">
        <p className="text-sm leading-relaxed text-[var(--text-primary)]">
          {evaluation.triageSummaryFr}
        </p>

        {hasUrgent && (
          <div
            role="alert"
            className="flex flex-col gap-3 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--bg-card)] p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-2.5">
              <PhoneCall
                className="mt-0.5 h-5 w-5 shrink-0 text-[var(--status-urgent-text)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-[var(--status-urgent-text)]">
                  Rappel urgences France : 15 (SAMU) / 112 / 114 (SMS)
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                  En cas de douleur thoracique, d&apos;essoufflement au repos ou de malaise, appelez
                  immédiatement les secours et ne conduisez pas vous-même.
                </p>
              </div>
            </div>
            <Link
              to="/plan?tab=urgence"
              className="touch-target inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3.5 py-2 text-xs font-semibold text-[var(--status-urgent-text)] hover:opacity-90"
            >
              <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Carte d&apos;urgence</span>
            </Link>
          </div>
        )}

        {priorityAlerts.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Alertes et repères du jour ({priorityAlerts.length})
            </p>
            <ul className="m-0 list-none space-y-2.5 p-0">
              {priorityAlerts.map((alert) => (
                <AlertRow key={alert.id} alert={alert} />
              ))}
            </ul>
          </div>
        )}

        {otherWarnings.length > 0 && (
          <details className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3">
            <summary className="touch-target flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <span>
                Autres points de vigilance dans votre dossier ({otherWarnings.length})
              </span>
              <span className="text-[var(--color-primary)]">Afficher</span>
            </summary>
            <ul className="m-0 mt-3 list-none space-y-2.5 p-0">
              {otherWarnings.map((alert) => (
                <AlertRow key={alert.id} alert={alert} />
              ))}
            </ul>
            <div className="mt-3">
              <Link
                to="/plan"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] hover:underline"
              >
                <span>Voir tout votre plan de suivi</span>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </details>
        )}
      </div>
    </Card>
  );
}
