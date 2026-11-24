import type { ReactNode } from 'react';

export type CardTone = 'default' | 'subtle' | 'stable' | 'warning' | 'urgent';

export interface CardProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  headerAction?: ReactNode;
  tone?: CardTone;
  padded?: boolean;
  className?: string;
  children?: ReactNode;
}

const TONE_STYLES: Record<CardTone, string> = {
  default: 'bg-[var(--bg-card)] border-[var(--border-subtle)]',
  subtle: 'bg-[var(--bg-subtle)] border-[var(--border-subtle)]',
  stable: 'bg-[var(--status-stable-bg)] border-[var(--status-stable-border)]',
  warning: 'bg-[var(--status-warning-bg)] border-[var(--status-warning-border)]',
  urgent: 'bg-[var(--status-urgent-bg)] border-[var(--status-urgent-border)]',
};

export function Card({
  title,
  subtitle,
  icon,
  headerAction,
  tone = 'default',
  padded = true,
  className = '',
  children,
}: CardProps) {
  return (
    <section
      className={`card-surface rounded-2xl border shadow-xs transition-colors ${TONE_STYLES[tone]} ${
        padded ? 'p-4 sm:p-5' : ''
      } ${className}`.trim()}
    >
      {(title || subtitle || icon || headerAction) && (
        <header className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5 min-w-0">
            {icon && (
              <span className="mt-0.5 shrink-0 text-[var(--color-primary)]" aria-hidden="true">
                {icon}
              </span>
            )}
            <div className="min-w-0">
              {title && (
                <h2 className="text-base font-semibold leading-snug text-[var(--text-primary)]">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-0.5 text-sm text-[var(--text-secondary)]">{subtitle}</p>
              )}
            </div>
          </div>
          {headerAction && <div className="shrink-0">{headerAction}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
