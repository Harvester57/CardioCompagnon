import type { PatientState } from '../types/domain';
import type { EngineEvaluation, RuleOutput, RuleSeverity, TriageLevel } from '../types/rules';
import { evaluateDailyVitalsRules } from './rules/daily-vitals.rules';
import { evaluateDrivingRules } from './rules/driving.rules';
import { evaluateFrenchRightsRules } from './rules/french-rights.rules';
import { evaluateLabsImagingRules } from './rules/labs-imaging.rules';
import { evaluateMedicationRules } from './rules/medications.rules';

const SEVERITY_RANK: Record<RuleSeverity, number> = {
  urgent: 0,
  warning: 1,
  action: 2,
  info: 3,
};

function computeTriageLevel(outputs: readonly RuleOutput[]): TriageLevel {
  if (outputs.some((o) => o.severity === 'urgent')) {
    return 'urgent';
  }
  if (outputs.some((o) => o.severity === 'warning')) {
    return 'warning';
  }
  return 'stable';
}

function buildTriageSummaryFr(triageLevel: TriageLevel, outputs: readonly RuleOutput[]): string {
  if (triageLevel === 'urgent') {
    const urgentCount = outputs.filter((o) => o.severity === 'urgent').length;
    const prefix =
      urgentCount === 1
        ? "Un signal d'alarme aigu a été détecté."
        : `${urgentCount} signaux d'alarme aigus ont été détectés.`;
    return `${prefix} Appelez immédiatement le 15 (SAMU) ou le 112 (ou le 114 par SMS) ou contactez sans délai votre équipe médicale.`;
  }

  if (triageLevel === 'warning') {
    const warningCount = outputs.filter((o) => o.severity === 'warning').length;
    const prefix =
      warningCount === 1
        ? 'Un point de vigilance mérite un avis rapide.'
        : `${warningCount} points de vigilance méritent un avis rapide.`;
    return `${prefix} Contactez votre médecin traitant, votre infirmière insuffisance cardiaque / IPA ou votre cardiologue sans modifier seul vos traitements.`;
  }

  return "Aucun signal d'alerte aigu détecté à partir des données saisies. Poursuivez votre suivi habituel et préparez vos questions pour votre prochaine consultation.";
}

function collectPrioritizedQuestionIds(sortedOutputs: readonly RuleOutput[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const output of sortedOutputs) {
    if (!output.relatedQuestionIds) continue;
    for (const qId of output.relatedQuestionIds) {
      if (!seen.has(qId)) {
        seen.add(qId);
        result.push(qId);
      }
    }
  }

  return result;
}

/**
 * Évalue l'état complet du patient de manière 100 % pure et déterministe à partir de `state.referenceDate`.
 * Ne pose aucun diagnostic et ne recommande jamais d'auto-ajustement thérapeutique.
 */
export function evaluatePatientState(state: PatientState): EngineEvaluation {
  const rawOutputs: RuleOutput[] = [
    ...evaluateDailyVitalsRules(state),
    ...evaluateMedicationRules(state),
    ...evaluateLabsImagingRules(state),
    ...evaluateFrenchRightsRules(state),
    ...evaluateDrivingRules(state),
  ];

  // Tri stable par sévérité décroissante (urgent -> warning -> action -> info)
  const outputs = rawOutputs
    .map((output, index) => ({ output, index }))
    .sort((a, b) => {
      const rankDiff = SEVERITY_RANK[a.output.severity] - SEVERITY_RANK[b.output.severity];
      return rankDiff !== 0 ? rankDiff : a.index - b.index;
    })
    .map((entry) => entry.output);

  const triageLevel = computeTriageLevel(outputs);
  const triageSummaryFr = buildTriageSummaryFr(triageLevel, outputs);
  const prioritizedQuestionIds = collectPrioritizedQuestionIds(outputs);

  return {
    triageLevel,
    triageSummaryFr,
    outputs,
    prioritizedQuestionIds,
  };
}
