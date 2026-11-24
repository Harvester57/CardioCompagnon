import { Award, CalendarClock, ShieldCheck } from 'lucide-react';
import type { WikiArticle } from '../types';

export interface EvidenceBadgeProps {
  grade?: string;
  confidence?: WikiArticle['confidence'];
  volatility?: WikiArticle['volatility'];
  asOf?: string;
  className?: string;
}

const CONFIDENCE_LABELS: Record<WikiArticle['confidence'], string> = {
  high: 'Confiance élevée',
  'medium-high': 'Confiance moyenne à élevée',
  medium: 'Confiance modérée',
};

const VOLATILITY_LABELS: Record<WikiArticle['volatility'], string> = {
  hot: 'Domaine évolutif',
  warm: 'Mise à jour régulière',
  stable: 'Socle établi',
};

export function EvidenceBadge({
  grade,
  confidence,
  volatility,
  asOf,
  className = '',
}: EvidenceBadgeProps) {
  if (!grade && !confidence && !volatility && !asOf) {
    return null;
  }

  return (
    <div className={`inline-flex flex-wrap items-center gap-1.5 ${className}`.trim()}>
      {grade && (
        <span className="inline-flex items-center gap-1 rounded-md border border-[var(--status-action-border)] bg-[var(--status-action-bg)] px-2 py-0.5 text-xs font-medium text-[var(--status-action-text)]">
          <Award className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{grade}</span>
        </span>
      )}
      {confidence && (
        <span className="inline-flex items-center gap-1 rounded-md border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-2 py-0.5 text-xs font-medium text-[var(--status-stable-text)]">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{CONFIDENCE_LABELS[confidence]}</span>
        </span>
      )}
      {volatility && (
        <span className="inline-flex items-center gap-1 rounded-md border border-[var(--status-info-border)] bg-[var(--status-info-bg)] px-2 py-0.5 text-xs font-medium text-[var(--status-info-text)]">
          <span>{VOLATILITY_LABELS[volatility]}</span>
        </span>
      )}
      {asOf && (
        <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-0.5 text-xs text-[var(--text-secondary)] tabular-nums">
          <CalendarClock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>À jour : {asOf}</span>
        </span>
      )}
    </div>
  );
}
