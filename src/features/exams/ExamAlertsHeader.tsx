import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, ShieldAlert } from 'lucide-react';
import type { EngineEvaluation, RuleOutput, RuleSeverity } from '../../types';
import { Card, EvidenceBadge, TriageBadge, type CardTone } from '../../ui';

export interface ExamAlertsHeaderProps {
  evaluation: EngineEvaluation;
}

const RELEVANT_LAB_RULE_IDS = new Set(['POTASSIUM_ALERT', 'CREATININE_JUMP']);

function mapSeverityToCardTone(severity: RuleSeverity): CardTone {
  switch (severity) {
    case 'urgent':
      return 'urgent';
    case 'warning':
      return 'warning';
    default:
      return 'default';
  }
}

function selectExamRuleOutputs(evaluation: EngineEvaluation): RuleOutput[] {
  return evaluation.outputs.filter(
    (rule) =>
      rule.category === 'exams' ||
      rule.category === 'devices' ||
      RELEVANT_LAB_RULE_IDS.has(rule.id),
  );
}

export function ExamAlertsHeader({ evaluation }: ExamAlertsHeaderProps) {
  const relevantRules = selectExamRuleOutputs(evaluation);

  if (relevantRules.length === 0) {
    return (
      <Card
        tone="stable"
        icon={<CheckCircle2 className="h-5 w-5 text-[var(--status-stable-text)]" />}
        title="Points d'attention examens et dispositifs"
        subtitle="Aucune alerte spécifique déclenchée à partir de vos examens enregistrés."
      >
        <p className="text-sm text-[var(--status-stable-text)]">
          Poursuivez le suivi convenu avec votre cardiologue et votre médecin traitant. Pensez à
          enregistrer vos nouveaux bilans biologiques, imageries (ETT ou IRM), ECG et bilans du
          sommeil au fil du temps.
        </p>
      </Card>
    );
  }

  return (
    <section aria-label="Alertes et repères examens" className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-[var(--color-primary)]" aria-hidden="true" />
          <h2 className="text-base font-semibold text-[var(--text-primary)]">
            Points d&apos;attention examens et dispositifs ({relevantRules.length})
          </h2>
        </div>
        <span className="text-xs text-[var(--text-secondary)]">
          Règles déterministes locales (ESC 2024–2026 / HFA)
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {relevantRules.map((rule) => (
          <Card
            key={rule.id}
            tone={mapSeverityToCardTone(rule.severity)}
            className="flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <TriageBadge level={rule.severity} size="sm" />
                {rule.evidenceGrade && <EvidenceBadge grade={rule.evidenceGrade} />}
              </div>

              <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)]">
                {rule.titleFr}
              </h3>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {rule.explanationFr}
              </p>

              <p className="rounded-lg bg-[var(--bg-subtle)] px-3 py-2 text-xs leading-relaxed text-[var(--text-primary)]">
                <strong className="font-semibold">À préparer : </strong>
                {rule.suggestedActionFr}
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-[var(--border-subtle)] pt-2.5">
              <span className="text-xs text-[var(--text-secondary)]">
                {rule.sources.slice(0, 2).join(' · ')}
              </span>
              <Link
                to={`/library?article=${encodeURIComponent(rule.articleSlug)}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
              >
                <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Lire la fiche</span>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
