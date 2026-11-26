import type { PatientState } from '../../types/domain';
import type { RuleOutput } from '../../types/rules';
import {
  FLOAT_EPSILON,
  createRuleOutput,
  daysBetween,
  getLatestLvef,
  getSortedEvents,
  getSortedImaging,
  getSortedLabs,
  isMedicationActive,
  normalizeText,
} from '../helpers';
import { formatFrenchNumber, formatLdlFr } from '../units';

function extractNumericDetail(value: string | number | boolean | undefined): number | undefined {
  if (typeof value === 'number' && !Number.isNaN(value)) {
    return value;
  }
  if (typeof value === 'string') {
    const parsed = Number(value.replace(',', '.'));
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }
  return undefined;
}

/**
 * Règles déterministes sur la biologie, l'imagerie, l'ECG, les dispositifs et le sommeil.
 * 9 règles : BNP_ON_ARNI_CAVEAT, ETT_VS_IRM_DISCORDANCE, IRON_DEFICIENCY_CHECK,
 * LDL_TARGET_GAP, LPA_ONE_OFF, ICD_REASSESSMENT_3M, CRT_QRS_DISCUSSION,
 * AS_LOW_FLOW_CAVEAT, CSA_ASV_CONTRAINDICATION.
 */
export function evaluateLabsImagingRules(state: PatientState): RuleOutput[] {
  const outputs: RuleOutput[] = [];
  const sortedLabs = getSortedLabs(state.labs, state.referenceDate);
  const sortedImaging = getSortedImaging(state.imaging, state.referenceDate);
  const sortedEvents = getSortedEvents(state.events, state.referenceDate);
  const latestLvef = getLatestLvef(sortedImaging, state.referenceDate);

  // 17. BNP_ON_ARNI_CAVEAT : bnpPgMl saisi alors qu'un arni est actif
  const hasActiveArni = state.medications.some(
    (med) =>
      isMedicationActive(med) &&
      (med.subClass === 'arni' || normalizeText(med.innName).includes('sacubitril')),
  );
  const hasBnpLab = sortedLabs.some((lab) => typeof lab.bnpPgMl === 'number');
  if (hasActiveArni && hasBnpLab) {
    outputs.push(
      createRuleOutput({
        id: 'BNP_ON_ARNI_CAVEAT',
        severity: 'info',
        category: 'exams',
        titleFr: "BNP sous sacubitril/valsartan (ARNI) : préférer le NT-proBNP",
        explanationFr:
          "Un dosage de BNP a été enregistré alors que vous prenez du sacubitril/valsartan (Entresto). Ce médicament freine la dégradation du BNP et peut l'élever même lorsque votre état cardiaque s'améliore ; le NT-proBNP n'est pas affecté par ce mécanisme et constitue le marqueur de référence.",
        suggestedActionFr:
          "Lors de vos prochains bilans biologiques, vérifiez avec votre médecin ou votre laboratoire que le dosage porte bien sur le NT-proBNP plutôt que sur le BNP.",
        evidenceGrade: 'ESC 2026 / HFA 2019',
        sources: ['ESC 2026', 'HFA 2019'],
        articleSlug: 'examens-et-chiffres',
        relatedQuestionIds: ['q_labs_ntprobnp_vs_bnp'],
      }),
    );
  }

  // 18. ETT_VS_IRM_DISCORDANCE : Présence d'au moins 1 examen ett et 1 examen irm
  const hasEtt = sortedImaging.some((exam) => exam.modality === 'ett');
  const hasIrm = sortedImaging.some((exam) => exam.modality === 'irm');
  if (hasEtt && hasIrm) {
    outputs.push(
      createRuleOutput({
        id: 'ETT_VS_IRM_DISCORDANCE',
        severity: 'info',
        category: 'exams',
        titleFr: "ETT et IRM cardiaque : ne pas comparer les chiffres directement",
        explanationFr:
          "Votre dossier comporte à la fois une échocardiographie transthoracique (ETT) et une IRM cardiaque. L'IRM lit en moyenne la FEVG environ 5,5 points plus bas que l'ETT et utilise des normes de volumes ventriculaires (VTDi, VTSi) plus larges : un écart entre les deux techniques ne signifie pas nécessairement une aggravation.",
        suggestedActionFr:
          "Suivez l'évolution de votre FEVG et de vos volumes en comparant ETT avec ETT et IRM avec IRM, et demandez à votre cardiologue quelle modalité sert de référence pour votre suivi.",
        evidenceGrade: 'REVIVED-BCIS2 / Kawel-Boehm 2020',
        sources: ['REVIVED-BCIS2', 'Kawel-Boehm 2020', 'ESC 2026'],
        articleSlug: 'fraction-dejection',
        relatedQuestionIds: ['q_imaging_ett_vs_irm'],
      }),
    );
  }

  // 19. IRON_DEFICIENCY_CHECK : Aucun bilan martial depuis > 365 j ou tsatPercent < 20
  const ironLabs = sortedLabs.filter(
    (lab) => typeof lab.tsatPercent === 'number' || typeof lab.ferritinUgL === 'number',
  );
  const latestIronLab = ironLabs[ironLabs.length - 1];
  const tsatLabs = sortedLabs.filter((lab) => typeof lab.tsatPercent === 'number');
  const latestTsatLab = tsatLabs[tsatLabs.length - 1];

  const isIronStaleOrMissing =
    !latestIronLab || daysBetween(latestIronLab.date, state.referenceDate) > 365;
  const isTsatLow =
    latestTsatLab !== undefined &&
    typeof latestTsatLab.tsatPercent === 'number' &&
    latestTsatLab.tsatPercent < 20 - FLOAT_EPSILON;

  if (isIronStaleOrMissing || isTsatLow) {
    const detailFr = isTsatLow
      ? `Votre dernier coefficient de saturation de la transferrine (CST) est de ${formatFrenchNumber(latestTsatLab!.tsatPercent as number, 0)} % (< 20 %), ce qui correspond à un critère de carence martiale en insuffisance cardiaque.`
      : "Aucun bilan martial complet (ferritine et coefficient de saturation de la transferrine — CST) n'a été enregistré au cours des 12 derniers mois.";

    outputs.push(
      createRuleOutput({
        id: 'IRON_DEFICIENCY_CHECK',
        severity: 'action',
        category: 'exams',
        titleFr: isTsatLow
          ? "Carence martiale (CST < 20 %) : discuter le fer intraveineux"
          : "Bilan martial (ferritine + CST) à prévoir (> 12 mois)",
        explanationFr: `${detailFr} Les recommandations européennes préconisent le dépistage périodique et, en cas de carence en fer avérée dans l'ICFER, une perfusion de fer intraveineux ; le fer en comprimés ne s'est pas montré efficace dans cette situation.`,
        suggestedActionFr:
          "Lors de votre prochaine consultation, demandez à votre cardiologue ou à votre médecin traitant un bilan martial (ferritine + CST) et, si la carence est confirmée, si une perfusion de fer intraveineux est indiquée.",
        evidenceGrade: 'ESC 2026 Classe I/IIa',
        sources: ['ESC 2026 Classe I/IIa', 'IRONMAN', 'IRONOUT-HF'],
        articleSlug: 'carence-martiale-et-fer-iv',
        relatedQuestionIds: ['q_iron_iv_check'],
      }),
    );
  }

  // 20. LDL_TARGET_GAP : Dernier ldlGL >= 0.55 ou baisse < 50 % vs baselineLdlGL
  const ldlLabs = sortedLabs.filter((lab) => typeof lab.ldlGL === 'number');
  const latestLdlLab = ldlLabs[ldlLabs.length - 1];
  if (latestLdlLab && typeof latestLdlLab.ldlGL === 'number') {
    const currentLdl = latestLdlLab.ldlGL;
    const aboveAbsoluteTarget = currentLdl >= 0.55 - FLOAT_EPSILON;

    let reductionPercent: number | undefined;
    let belowRelativeReduction = false;
    if (typeof state.profile.baselineLdlGL === 'number' && state.profile.baselineLdlGL > 0) {
      reductionPercent = ((state.profile.baselineLdlGL - currentLdl) / state.profile.baselineLdlGL) * 100;
      belowRelativeReduction = reductionPercent < 50 - FLOAT_EPSILON;
    }

    if (aboveAbsoluteTarget || belowRelativeReduction) {
      const gapDetails: string[] = [];
      if (aboveAbsoluteTarget) {
        gapDetails.push(`LDL actuel à ${formatLdlFr(currentLdl)} (cible < 0,55 g/L)`);
      }
      if (belowRelativeReduction && reductionPercent !== undefined) {
        gapDetails.push(
          `baisse de ${formatFrenchNumber(reductionPercent, 0)} % par rapport au LDL initial (${formatLdlFr(state.profile.baselineLdlGL as number)}, objectif ≥ 50 %)`,
        );
      }

      outputs.push(
        createRuleOutput({
          id: 'LDL_TARGET_GAP',
          severity: 'action',
          category: 'exams',
          titleFr: "Objectif cholestérol LDL coronaire non encore atteint",
          explanationFr: `En cardiomyopathie ischémique (très haut risque cardiovasculaire), les recommandations ESC 2024 visent un LDL-cholestérol inférieur à 0,55 g/L (1,42 mmol/L) ET une baisse d'au moins 50 % par rapport à la valeur initiale. Situation actuelle : ${gapDetails.join(' ; ')}.`,
          suggestedActionFr:
            "Discutez avec votre cardiologue ou votre médecin traitant d'une optimisation du traitement hypolipémiant (statine à dose optimale, ajout d'ézétimibe ou, selon les critères de remboursement, d'un anti-PCSK9).",
          evidenceGrade: 'ESC 2024 Classe I',
          sources: ['ESC 2024 CCS', 'ESC/EAS Dyslipidemias'],
          articleSlug: 'cholesterol-et-prevention-secondaire',
          relatedQuestionIds: ['q_ldl_target'],
        }),
      );
    }
  }

  // 21. LPA_ONE_OFF : Aucun lpaValue jamais enregistré
  const hasLpa = sortedLabs.some((lab) => typeof lab.lpaValue === 'number');
  if (!hasLpa) {
    outputs.push(
      createRuleOutput({
        id: 'LPA_ONE_OFF',
        severity: 'info',
        category: 'exams',
        titleFr: "Dosage unique de la lipoprotéine(a) — Lp(a)",
        explanationFr:
          "Aucun dosage de la lipoprotéine(a) — Lp(a) — n'est enregistré dans votre dossier. Les recommandations européennes ESC/EAS suggèrent de la mesurer au moins une fois dans la vie pour affiner l'évaluation du risque cardiovasculaire d'origine génétique.",
        suggestedActionFr:
          "Lors d'une prochaine prise de sang, vous pouvez demander à votre cardiologue ou à votre médecin traitant si un dosage unique de la Lp(a) est pertinent.",
        evidenceGrade: 'ESC/EAS 2019 & 2025',
        sources: ['ESC/EAS 2019 & 2025'],
        articleSlug: 'cholesterol-et-prevention-secondaire',
        relatedQuestionIds: ['q_labs_lpa'],
      }),
    );
  }

  // 22. ICD_REASSESSMENT_3M : Dernière FEVG <= 35 % + device === 'none'
  if (latestLvef !== undefined && latestLvef.value <= 35 && state.profile.modules.device === 'none') {
    outputs.push(
      createRuleOutput({
        id: 'ICD_REASSESSMENT_3M',
        severity: 'action',
        category: 'devices',
        titleFr: "Réévaluation de la FEVG à ≥ 3 mois et discussion DAI",
        explanationFr: `Votre dernière FEVG mesurée est de ${latestLvef.value} % (≤ 35 %) sans dispositif implanté. Avant toute décision de défibrillateur automatique implantable (DAI) en prévention primaire, les recommandations ESC 2026 prévoient une réévaluation de la FEVG après au moins 3 mois de traitement de fond optimal (et au moins 40 jours après un infarctus du myocarde).`,
        suggestedActionFr:
          "Vérifiez avec votre cardiologue la date prévue de votre prochaine imagerie de réévaluation et demandez si la question d'un DAI se pose dans votre cas.",
        evidenceGrade: 'ESC 2026',
        sources: ['ESC 2026', 'ESC 2022 Ventricular Arrhythmias'],
        articleSlug: 'dispositifs-cardiaques-dai-crt',
        relatedQuestionIds: ['q_device_icd_timing'],
      }),
    );
  }

  // 23. CRT_QRS_DISCUSSION : Dernière FEVG <= 35 % + événement ecg_check avec qrsMs >= 130 et pas de CRT
  const hasCrt =
    state.profile.modules.device === 'crt_p' || state.profile.modules.device === 'crt_d';
  if (latestLvef !== undefined && latestLvef.value <= 35 && !hasCrt) {
    const ecgEvents = sortedEvents.filter((ev) => ev.type === 'ecg_check');
    const latestEcg = ecgEvents[ecgEvents.length - 1];
    const qrsMs = latestEcg ? extractNumericDetail(latestEcg.details.qrsMs) : undefined;

    if (qrsMs !== undefined && qrsMs >= 130) {
      const hasLbbb = latestEcg?.details.lbbb === true;
      const lbbbText = hasLbbb
        ? " avec bloc de branche gauche (BBG) signalé, situation où le bénéfice de la resynchronisation est le plus établi"
        : '';

      outputs.push(
        createRuleOutput({
          id: 'CRT_QRS_DISCUSSION',
          severity: 'action',
          category: 'devices',
          titleFr: `QRS élargi (${qrsMs} ms) : évoquer la resynchronisation (CRT)`,
          explanationFr: `Avec une FEVG ≤ 35 % (${latestLvef.value} %) et une durée du complexe QRS de ${qrsMs} ms (≥ 130 ms) sur votre dernier ECG${lbbbText}, une thérapie de resynchronisation cardiaque (CRT-P ou CRT-D) peut être discutée selon la morphologie de l'ECG et les symptômes.`,
          suggestedActionFr:
            "Demandez à votre cardiologue ou rythmologue si une resynchronisation cardiaque (CRT) s'applique à votre profil.",
          evidenceGrade: 'ESC 2026 Classe I/IIa',
          sources: ['ESC 2026'],
          articleSlug: 'dispositifs-cardiaques-dai-crt',
          relatedQuestionIds: ['q_device_crt'],
        }),
      );
    }
  }

  // 24. AS_LOW_FLOW_CAVEAT : modules.aorticStenosis + dernière FEVG <= 40 %
  if (state.profile.modules.aorticStenosis && latestLvef !== undefined && latestLvef.value <= 40) {
    outputs.push(
      createRuleOutput({
        id: 'AS_LOW_FLOW_CAVEAT',
        severity: 'info',
        category: 'exams',
        titleFr: "Rétrécissement aortique à FEVG réduite : vigilance bas débit",
        explanationFr: `Avec un rétrécissement aortique associé à une FEVG ≤ 40 % (${latestLvef.value} %), le gradient moyen mesuré à l'échocardiographie peut sous-estimer la sévérité réelle de la sténose (profil « bas débit, bas gradient »).`,
        suggestedActionFr:
          "Lors de vos échographies, demandez à votre cardiologue de préciser la surface valvulaire aortique, le ratio de vélocité (DVI), le volume d'éjection indexé (SVi) et, si nécessaire, l'intérêt d'un score calcique valvulaire ou d'une échographie de stress.",
        evidenceGrade: 'ESC/EACTS 2025',
        sources: ['ESC/EACTS 2025'],
        articleSlug: 'stenose-aortique-fevg-reduite',
        relatedQuestionIds: ['q_as_low_flow'],
      }),
    );
  }

  // 25. CSA_ASV_CONTRAINDICATION : modules.sleepApnoea === 'csa' + FEVG <= 45 %
  if (
    state.profile.modules.sleepApnoea === 'csa' &&
    latestLvef !== undefined &&
    latestLvef.value <= 45
  ) {
    outputs.push(
      createRuleOutput({
        id: 'CSA_ASV_CONTRAINDICATION',
        severity: 'warning',
        category: 'exams',
        titleFr: "Apnée centrale du sommeil (SACS) : contre-indication de l'ASV",
        explanationFr: `En présence d'une apnée centrale du sommeil (SACS) prédominante et d'une FEVG ≤ 45 % (${latestLvef.value} %), la servo-ventilation adaptative (ASV) est contre-indiquée en raison d'un surrisque de mortalité cardiovasculaire montré par l'essai SERVE-HF (recommandation ESC 2026 Classe III).`,
        suggestedActionFr:
          "Vérifiez avec votre cardiologue et votre pneumologue ou spécialiste du sommeil le type exact d'appareillage nocturne proposé ; la prise en charge de l'apnée centrale passe avant tout par l'optimisation du traitement de l'insuffisance cardiaque.",
        evidenceGrade: 'ESC 2026 Classe III',
        sources: ['SERVE-HF', 'ESC 2026 Classe III'],
        articleSlug: 'apnee-du-sommeil-insuffisance-cardiaque',
        relatedQuestionIds: ['q_sleep_apnoea_asv'],
      }),
    );
  }

  return outputs;
}
