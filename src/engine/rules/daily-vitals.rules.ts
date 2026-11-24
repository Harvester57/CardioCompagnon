import type { DailyLog, PatientState } from '../../types/domain';
import type { RuleOutput } from '../../types/rules';
import {
  FLOAT_EPSILON,
  createRuleOutput,
  daysBetween,
  getLatestLvef,
  getSortedDailyLogs,
  isMedicationActive,
  isWithinLastDays,
  normalizeText,
} from '../helpers';
import { formatFrenchNumber, formatWeightKgFr } from '../units';

const ACUTE_MALAISE_REGEX =
  /\b(malaise|syncope|perte de connaissance|evanouissement|lipothymie|detresse respiratoire)\b/;

function getLatestRecentLog(
  sortedLogs: readonly DailyLog[],
  referenceDate: string,
  maxAgeDays = 3,
): DailyLog | undefined {
  const latest = sortedLogs[sortedLogs.length - 1];
  if (!latest) {
    return undefined;
  }
  return isWithinLastDays(latest.date, referenceDate, maxAgeDays) ? latest : undefined;
}

/**
 * Règles déterministes de suivi quotidien : poids, signes EPOF, tension artérielle et fréquence cardiaque.
 * 7 règles : WEIGHT_GAIN_3D, EPOF_RED_FLAG, EPOF_WORSENING, UNPLANNED_WEIGHT_LOSS,
 * LOW_BP_SYMPTOMATIC, LOW_BP_ASYMPTOMATIC, HR_IVABRADINE_DISCUSSION.
 */
export function evaluateDailyVitalsRules(state: PatientState): RuleOutput[] {
  const outputs: RuleOutput[] = [];
  const sortedLogs = getSortedDailyLogs(state.dailyLogs, state.referenceDate);
  const recentLatest = getLatestRecentLog(sortedLogs, state.referenceDate, 3);

  // 1. WEIGHT_GAIN_3D : Hausse >= 2,0 kg sur 3 jours glissants ou >= 2,0 kg au-dessus de dryWeightKg
  const weighedLogs = sortedLogs.filter((log) => typeof log.weightKg === 'number');
  const latestWeighed = weighedLogs[weighedLogs.length - 1];
  if (latestWeighed && typeof latestWeighed.weightKg === 'number') {
    const currentWeight = latestWeighed.weightKg;

    const deltaVsDry =
      typeof state.profile.dryWeightKg === 'number'
        ? currentWeight - state.profile.dryWeightKg
        : undefined;
    const aboveDryThreshold = deltaVsDry !== undefined && deltaVsDry >= 2.0 - FLOAT_EPSILON;

    const prior3dLogs = weighedLogs.filter((log) => {
      const diff = daysBetween(log.date, latestWeighed.date);
      return diff > 0 && diff <= 3 && typeof log.weightKg === 'number';
    });
    let maxGain3d: number | undefined;
    if (prior3dLogs.length > 0) {
      const minPrior3d = Math.min(...prior3dLogs.map((l) => l.weightKg as number));
      maxGain3d = currentWeight - minPrior3d;
    }
    const above3dThreshold = maxGain3d !== undefined && maxGain3d >= 2.0 - FLOAT_EPSILON;

    if (aboveDryThreshold || above3dThreshold) {
      const reasons: string[] = [];
      if (above3dThreshold && maxGain3d !== undefined) {
        reasons.push(`+${formatFrenchNumber(maxGain3d, 1)} kg sur les 3 derniers jours`);
      }
      if (aboveDryThreshold && deltaVsDry !== undefined && state.profile.dryWeightKg !== undefined) {
        reasons.push(
          `+${formatFrenchNumber(deltaVsDry, 1)} kg par rapport à votre poids de référence (${formatWeightKgFr(state.profile.dryWeightKg)})`,
        );
      }

      outputs.push(
        createRuleOutput({
          id: 'WEIGHT_GAIN_3D',
          severity: 'warning',
          category: 'daily',
          titleFr: "Prise de poids rapide (≥ 2,0 kg)",
          explanationFr: `Votre dernière pesée (${formatWeightKgFr(currentWeight)}) montre une hausse notable : ${reasons.join(' et ')}. Une augmentation rapide du poids peut traduire une rétention hydrosodée (accumulation d'eau et de sel).`,
          suggestedActionFr:
            "Contactez rapidement votre médecin traitant, votre infirmière insuffisance cardiaque / IPA ou votre cardiologue. Ne modifiez pas seul vos doses de médicaments en dehors d'un plan écrit convenu à l'avance.",
          evidenceGrade: 'ESC 2026 / BHF',
          sources: ['ESC 2026', 'BHF'],
          articleSlug: 'poids-obesite-et-denutrition',
          relatedQuestionIds: ['q_daily_weight_plan'],
        }),
      );
    }

    // 4. UNPLANNED_WEIGHT_LOSS : Baisse >= 5 % sur 90-180 jours par rapport au poids stable précédent
    const baselineWindowLogs = weighedLogs.filter((log) => {
      const diff = daysBetween(log.date, latestWeighed.date);
      return diff >= 90 && diff <= 180 && typeof log.weightKg === 'number';
    });
    if (baselineWindowLogs.length > 0) {
      const avgBaselineWeight =
        baselineWindowLogs.reduce((acc, log) => acc + (log.weightKg as number), 0) /
        baselineWindowLogs.length;
      if (avgBaselineWeight > 0) {
        const lossPercent = ((avgBaselineWeight - currentWeight) / avgBaselineWeight) * 100;
        if (lossPercent >= 5.0 - FLOAT_EPSILON) {
          outputs.push(
            createRuleOutput({
              id: 'UNPLANNED_WEIGHT_LOSS',
              severity: 'warning',
              category: 'daily',
              titleFr: "Perte de poids ≥ 5 % sur 3 à 6 mois",
              explanationFr: `Votre poids actuel (${formatWeightKgFr(currentWeight)}) est inférieur de ${formatFrenchNumber(lossPercent, 1)} % à votre poids moyen d'il y a 3 à 6 mois (${formatWeightKgFr(avgBaselineWeight)}). Si cette perte n'est pas volontaire ni liée à une décongestion diurétique attendue, elle peut signaler un risque de dénutrition ou de cachexie cardiaque.`,
              suggestedActionFr:
                "Signalez cette évolution à votre médecin traitant ou à votre cardiologue afin d'envisager une évaluation nutritionnelle et un bilan adapté.",
              evidenceGrade: 'EFFORT-HF / ESC 2026',
              sources: ['EFFORT-HF', 'ESC 2026'],
              articleSlug: 'poids-obesite-et-denutrition',
              relatedQuestionIds: ['q_nutrition_weight_loss'],
            }),
          );
        }
      }
    }
  }

  // 2. EPOF_RED_FLAG : chestPain ou dyspnoea === 'rest_or_lying' ou malaise aigu noté
  if (recentLatest) {
    const normalizedNotes = recentLatest.notes ? normalizeText(recentLatest.notes) : '';
    const hasAcuteMalaise = ACUTE_MALAISE_REGEX.test(normalizedNotes);
    const hasChestPain = recentLatest.symptoms.chestPain === true;
    const hasRestDyspnoea = recentLatest.symptoms.dyspnoea === 'rest_or_lying';

    if (hasChestPain || hasRestDyspnoea || hasAcuteMalaise) {
      const flags: string[] = [];
      if (hasChestPain) flags.push('douleur ou oppression thoracique');
      if (hasRestDyspnoea) flags.push('essoufflement au repos ou en position allongée');
      if (hasAcuteMalaise) flags.push('malaise aigu ou perte de connaissance mentionné dans vos notes');

      outputs.push(
        createRuleOutput({
          id: 'EPOF_RED_FLAG',
          severity: 'urgent',
          category: 'daily',
          titleFr: "Signes d'alarme aigus (urgence)",
          explanationFr: `Vous avez signalé un ou plusieurs signes d'alerte nécessitant une évaluation médicale immédiate : ${flags.join(', ')}.`,
          suggestedActionFr:
            "Appelez immédiatement le 15 (SAMU) ou le 112 (ou le 114 par SMS si vous êtes sourd ou malentendant). Ne conduisez pas vous-même aux urgences.",
          evidenceGrade: 'ESC 2026',
          sources: ['ESC 2026', 'Assurance Maladie (grille EPOF)'],
          articleSlug: 'vivre-avec-insuffisance-cardiaque',
          relatedQuestionIds: ['q_epof_red_flags'],
        }),
      );
    }

    // 3. EPOF_WORSENING : dyspnoea === 'exertion' nouveau/aggravé ou oedema === 'worsening' ou fatigue === 'severe'
    const previousLog = sortedLogs.length >= 2 ? sortedLogs[sortedLogs.length - 2] : undefined;
    const isNewExertionDyspnoea =
      recentLatest.symptoms.dyspnoea === 'exertion' &&
      (!previousLog || previousLog.symptoms.dyspnoea === 'none');
    const isWorseningOedema = recentLatest.symptoms.oedema === 'worsening';
    const isSevereFatigue = recentLatest.symptoms.fatigue === 'severe';

    if (isNewExertionDyspnoea || isWorseningOedema || isSevereFatigue) {
      const signs: string[] = [];
      if (isNewExertionDyspnoea) signs.push("essoufflement à l'effort nouveau ou en aggravation");
      if (isWorseningOedema) signs.push('œdèmes des jambes ou des chevilles en augmentation');
      if (isSevereFatigue) signs.push('fatigue importante inhabituelle');

      outputs.push(
        createRuleOutput({
          id: 'EPOF_WORSENING',
          severity: 'warning',
          category: 'daily',
          titleFr: "Aggravation de signes EPOF",
          explanationFr: `Votre journal récent indique une évolution de la grille EPOF (${signs.join(', ')}). Ces signes peuvent traduire une surcharge ou un déséquilibre débutant.`,
          suggestedActionFr:
            "Contactez votre médecin traitant, votre infirmière insuffisance cardiaque / IPA ou votre cardiologue sous 24 à 48 heures. En cas d'aggravation brutale, appelez le 15 ou le 112.",
          evidenceGrade: 'ESC 2026',
          sources: ['ESC 2026', 'Assurance Maladie (grille EPOF)'],
          articleSlug: 'vivre-avec-insuffisance-cardiaque',
          relatedQuestionIds: ['q_epof_worsening'],
        }),
      );
    }
  }

  // 5 & 6. LOW_BP_SYMPTOMATIC & LOW_BP_ASYMPTOMATIC
  const logsWithBp = sortedLogs.filter((log) => typeof log.systolicBp === 'number');
  const latestBpLog = logsWithBp[logsWithBp.length - 1];
  if (
    latestBpLog &&
    typeof latestBpLog.systolicBp === 'number' &&
    isWithinLastDays(latestBpLog.date, state.referenceDate, 3)
  ) {
    const sbp = latestBpLog.systolicBp;
    const dizzy = latestBpLog.symptoms.dizziness === true;

    if (sbp < 90 && dizzy) {
      outputs.push(
        createRuleOutput({
          id: 'LOW_BP_SYMPTOMATIC',
          severity: 'warning',
          category: 'daily',
          titleFr: "Tension artérielle basse avec vertiges",
          explanationFr: `Votre dernière tension systolique mesurée est de ${sbp} mmHg (< 90 mmHg) avec sensation de vertiges. L'hypotension symptomatique mérite une évaluation pour vérifier l'hydratation, le diurétique ou la répartition des prises.`,
          suggestedActionFr:
            "N'arrêtez pas seul vos traitements de fond. Levez-vous lentement et contactez rapidement votre médecin traitant, votre infirmière IC / IPA ou votre cardiologue (appelez le 15 ou le 112 en cas de malaise).",
          evidenceGrade: 'Skouri 2025 / Cautela 2020',
          sources: ['Skouri 2025', 'Cautela 2020', 'ESC 2026'],
          articleSlug: 'tension-arterielle-insuffisance-cardiaque',
          relatedQuestionIds: ['q_bp_low_meds'],
        }),
      );
    } else if (sbp < 100 && !dizzy) {
      outputs.push(
        createRuleOutput({
          id: 'LOW_BP_ASYMPTOMATIC',
          severity: 'info',
          category: 'daily',
          titleFr: "Tension basse bien tolérée (< 100 mmHg sans vertiges)",
          explanationFr: `Votre dernière tension systolique est de ${sbp} mmHg sans vertiges ni étourdissement signalés. En insuffisance cardiaque, une tension artérielle basse mais bien tolérée est fréquemment acceptée par les cardiologues afin de maintenir les 4 piliers du traitement de fond.`,
          suggestedActionFr:
            "Poursuivez votre surveillance habituelle sans modifier vos traitements et mentionnez vos relevés tensionnels lors de la prochaine consultation.",
          evidenceGrade: 'Cautela 2020 / ESC 2026',
          sources: ['Cautela 2020', 'ESC 2026'],
          articleSlug: 'tension-arterielle-insuffisance-cardiaque',
        }),
      );
    }
  }

  // 7. HR_IVABRADINE_DISCUSSION : !atrialFibrillation + dernière FEVG <= 35 % + BB at_target + FC moyenne repos > 70 bpm (> 75 AMM UE)
  const latestLvef = getLatestLvef(state.imaging, state.referenceDate);
  const hasBbAtTarget = state.medications.some(
    (med) =>
      (med.pillar === 'beta_blocker' || med.subClass === 'beta_blocker') &&
      med.status === 'at_target',
  );
  const alreadyOnIvabradine = state.medications.some(
    (med) =>
      isMedicationActive(med) &&
      (med.subClass === 'ivabradine' || normalizeText(med.innName).includes('ivabradine')),
  );

  if (
    !state.profile.modules.atrialFibrillation &&
    latestLvef !== undefined &&
    latestLvef.value <= 35 &&
    hasBbAtTarget &&
    !alreadyOnIvabradine
  ) {
    const logsWithHr = sortedLogs.filter((log) => typeof log.heartRateBpm === 'number');
    const recent14dHr = logsWithHr.filter((log) =>
      isWithinLastDays(log.date, state.referenceDate, 14),
    );
    const sampleLogs = recent14dHr.length > 0 ? recent14dHr.slice(-7) : logsWithHr.slice(-5);

    if (sampleLogs.length > 0) {
      const avgHr =
        sampleLogs.reduce((sum, log) => sum + (log.heartRateBpm as number), 0) / sampleLogs.length;

      if (avgHr > 70 + FLOAT_EPSILON) {
        const emaNote =
          avgHr >= 75
            ? "Elle atteint également le seuil de 75 bpm retenu par l'autorisation européenne (AMM EMA)."
            : "À noter que l'AMM européenne (EMA) retient le seuil de 75 bpm, tandis que les recommandations ESC et l'essai SHIFT discutent le seuil de 70 bpm.";

        outputs.push(
          createRuleOutput({
            id: 'HR_IVABRADINE_DISCUSSION',
            severity: 'action',
            category: 'daily',
            titleFr: "Fréquence cardiaque de repos > 70 bpm sous bêtabloquant à dose cible",
            explanationFr: `En rythme sinusal (sans fibrillation atriale déclarée), avec une FEVG ≤ 35 % (${latestLvef.value} %) et un bêtabloquant à dose cible, votre fréquence cardiaque moyenne de repos est de ${formatFrenchNumber(avgHr, 0)} bpm. ${emaNote}`,
            suggestedActionFr:
              "Lors de votre prochaine consultation, vous pouvez demander à votre cardiologue si l'ajout d'ivabradine (Procoralan) est pertinent dans votre situation.",
            evidenceGrade: 'ESC 2026 Classe IIa',
            sources: ['ESC 2026 Classe IIa', 'SHIFT', 'EMA (AMM UE)'],
            articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
            relatedQuestionIds: ['q_addon_ivabradine'],
          }),
        );
      }
    }
  }

  return outputs;
}
