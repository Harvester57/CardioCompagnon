import {
  AlertTriangle,
  ArrowRightCircle,
  CheckCircle2,
  Info,
  OctagonAlert,
} from 'lucide-react';
import type { RuleSeverity, TriageLevel } from '../types';

export type BadgeLevel = TriageLevel | RuleSeverity;

export interface TriageBadgeProps {
  level: BadgeLevel;
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

const LEVEL_CONFIG: Record<
  BadgeLevel,
  {
    defaultLabel: string;
    classes: string;
    Icon: typeof CheckCircle2;
  }
> = {
  stable: {
    defaultLabel: 'Suivi habituel',
    classes:
      'bg-[var(--status-stable-bg)] border-[var(--status-stable-border)] text-[var(--status-stable-text)]',
    Icon: CheckCircle2,
  },
  warning: {
    defaultLabel: "Vigilance — contacter l'équipe",
    classes:
      'bg-[var(--status-warning-bg)] border-[var(--status-warning-border)] text-[var(--status-warning-text)]',
    Icon: AlertTriangle,
  },
  urgent: {
    defaultLabel: 'Urgence — appeler le 15 / 112',
    classes:
      'bg-[var(--status-urgent-bg)] border-[var(--status-urgent-border)] text-[var(--status-urgent-text)]',
    Icon: OctagonAlert,
  },
  action: {
    defaultLabel: 'À discuter en consultation',
    classes:
      'bg-[var(--status-action-bg)] border-[var(--status-action-border)] text-[var(--status-action-text)]',
    Icon: ArrowRightCircle,
  },
  info: {
    defaultLabel: 'Repère scientifique',
    classes:
      'bg-[var(--status-info-bg)] border-[var(--status-info-border)] text-[var(--status-info-text)]',
    Icon: Info,
  },
};

export function TriageBadge({ level, label, size = 'md', className = '' }: TriageBadgeProps) {
  const { defaultLabel, classes, Icon } = LEVEL_CONFIG[level];
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs gap-1.5' : 'px-3 py-1 text-sm gap-2';

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium leading-tight ${classes} ${sizeClasses} ${className}`.trim()}
    >
      <Icon className={size === 'sm' ? 'h-3.5 w-3.5 shrink-0' : 'h-4 w-4 shrink-0'} aria-hidden="true" />
      <span>{label ?? defaultLabel}</span>
    </span>
  );
}
