import { ArrowRight, BookOpen, Car, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { RuleOutput } from '../../types';
import { Card, EvidenceBadge, TriageBadge, type CardTone } from '../../ui';

export interface FranceAlertsSectionProps {
  rules: readonly RuleOutput[];
  onOpenDrivingCalculator: () => void;
}

function ruleSeverityToTone(severity: RuleOutput['severity']): CardTone {
  switch (severity) {
    case 'urgent':
      return 'urgent';
    case 'warning':
      return 'warning';
    case 'action':
      return 'default';
    case 'info':
      return 'subtle';
  }
}

export function FranceAlertsSection({
  rules,
  onOpenDrivingCalculator,
}: FranceAlertsSectionProps) {
  if (rules.length === 0) {
    return (
      <Card
        tone="stable"
        title="Alertes et rappels France"
        subtitle="Aucun rappel prioritaire actif selon votre profil actuel."
        icon={<CheckCircle2 className="h-5 w-5 text-[var(--status-stable-text)]" />}
      >
        <p className="text-sm text-[var(--status-stable-text)]">
          Vos principales démarches (ALD 5/13, réadaptation cardiaque en SMR, conduite et
          vaccinations) ne déclenchent aucun point de vigilance immédiat.
        </p>
      </Card>
    );
  }

  return (
    <section aria-labelledby="france-alerts-heading" className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldAlert
            className="h-5 w-5 shrink-0 text-[var(--color-primary)]"
            aria-hidden="true"
          />
          <h2
            id="france-alerts-heading"
            className="text-base font-semibold text-[var(--text-primary)]"
          >
            Alertes et rappels France actifs
          </h2>
        </div>
        <span className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)] tabular-nums">
          {rules.length} {rules.length > 1 ? 'rappels actifs' : 'rappel actif'}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {rules.map((rule) => {
          const isDrivingRule =
            rule.id === 'FR_DRIVING_LIFEVEST' || rule.id === 'FR_DRIVING_ICD_OR_NYHA';

          return (
            <Card
              key={rule.id}
              tone={ruleSeverityToTone(rule.severity)}
              className="space-y-2.5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <TriageBadge level={rule.severity} size="sm" />
                  <EvidenceBadge grade={rule.evidenceGrade} />
                </div>
              </div>

              <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)] sm:text-base">
                {rule.titleFr}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {rule.explanationFr}
              </p>

              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2.5 text-sm text-[var(--text-primary)]">
                <span className="font-semibold text-[var(--color-primary)]">
                  Piste recommandée :{' '}
                </span>
                <span>{rule.suggestedActionFr}</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-[var(--text-secondary)]">
                <span>Sources : {rule.sources.join(' · ')}</span>
                <div className="flex flex-wrap items-center gap-2">
                  {isDrivingRule && (
                    <button
                      type="button"
                      onClick={onOpenDrivingCalculator}
                      className="touch-target inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                    >
                      <Car className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Ouvrir le calculateur de permis</span>
                    </button>
                  )}
                  <Link
                    to={`/library?article=${rule.articleSlug}`}
                    className="touch-target inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--bg-subtle)]"
                  >
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Lire la fiche</span>
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
