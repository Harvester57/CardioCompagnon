import type { MedicationPillar, PatientState } from '../../types/domain';
import type { RuleOutput } from '../../types/rules';
import {
  FLOAT_EPSILON,
  createRuleOutput,
  daysBetween,
  getSortedLabs,
  isMedicationActive,
  isOnOrBefore,
  isWithinLastDays,
  normalizeText,
  parseIsoDateUtcMs,
} from '../helpers';
import { formatCreatinineFr, formatFrenchNumber, formatPotassiumFr } from '../units';

const FOUNDATIONAL_PILLARS: readonly { pillar: MedicationPillar; labelFr: string }[] = [
  { pillar: 'raas_arni', labelFr: 'IEC / ARA2 / ARNI' },
  { pillar: 'beta_blocker', labelFr: 'bêtabloquant' },
  { pillar: 'mra', labelFr: 'ARM (spironolactone / éplérénone)' },
  { pillar: 'sglt2i', labelFr: 'iSGLT2 (gliflozine)' },
];

const CONTRAINDICATED_KEYWORDS: readonly { keyword: string; classLabel: string }[] = [
  { keyword: 'ains', classLabel: 'AINS' },
  { keyword: 'ibuprofen', classLabel: 'AINS (ibuprofène)' },
  { keyword: 'ibuprofene', classLabel: 'AINS (ibuprofène)' },
  { keyword: 'advil', classLabel: 'AINS (ibuprofène)' },
  { keyword: 'nurofen', classLabel: 'AINS (ibuprofène)' },
  { keyword: 'spifen', classLabel: 'AINS (ibuprofène)' },
  { keyword: 'ketoprofen', classLabel: 'AINS (kétoprofène)' },
  { keyword: 'ketoprofene', classLabel: 'AINS (kétoprofène)' },
  { keyword: 'profenid', classLabel: 'AINS (kétoprofène)' },
  { keyword: 'diclofenac', classLabel: 'AINS (diclofénac)' },
  { keyword: 'voltarene', classLabel: 'AINS (diclofénac)' },
  { keyword: 'naproxen', classLabel: 'AINS (naproxène)' },
  { keyword: 'naproxene', classLabel: 'AINS (naproxène)' },
  { keyword: 'apranax', classLabel: 'AINS (naproxène)' },
  { keyword: 'antadys', classLabel: 'AINS (flurbiprofène)' },
  { keyword: 'flurbiprofene', classLabel: 'AINS (flurbiprofène)' },
  { keyword: 'piroxicam', classLabel: 'AINS (piroxicam)' },
  { keyword: 'meloxicam', classLabel: 'AINS (méloxicam)' },
  { keyword: 'celecoxib', classLabel: 'AINS (célécoxib)' },
  { keyword: 'etoricoxib', classLabel: 'AINS (étoricoxib)' },
  { keyword: 'indometacine', classLabel: 'AINS (indométacine)' },
  { keyword: 'nifluril', classLabel: 'AINS (acide niflumique)' },
  { keyword: 'acide niflumique', classLabel: 'AINS (acide niflumique)' },
  { keyword: 'verapamil', classLabel: 'inhibiteur calcique non-DHP (vérapamil)' },
  { keyword: 'isoptine', classLabel: 'inhibiteur calcique non-DHP (vérapamil)' },
  { keyword: 'diltiazem', classLabel: 'inhibiteur calcique non-DHP (diltiazem)' },
  { keyword: 'tildiem', classLabel: 'inhibiteur calcique non-DHP (diltiazem)' },
  { keyword: 'diacor', classLabel: 'inhibiteur calcique non-DHP (diltiazem)' },
  { keyword: 'moxonidine', classLabel: 'antihypertenseur central (moxonidine)' },
  { keyword: 'physiotens', classLabel: 'antihypertenseur central (moxonidine)' },
];

function matchContraindicatedClass(text: string): string | undefined {
  const normalized = normalizeText(text);
  for (const entry of CONTRAINDICATED_KEYWORDS) {
    if (normalized.includes(entry.keyword)) {
      return entry.classLabel;
    }
  }
  return undefined;
}

/**
 * Règles déterministes sur les traitements de fond, la titration et la sécurité biologique.
 * 9 règles : GDMT_MISSING_PILLAR, STAGE_B_CONTEXT, HFIMPEF_CONTINUE, POST_TITRATION_LABS,
 * ARNI_WASHOUT_INFO, POTASSIUM_ALERT, CREATININE_JUMP, CONTRAINDICATED_DRUG, SGLT2_KETO_REMINDER.
 */
export function evaluateMedicationRules(state: PatientState): RuleOutput[] {
  const outputs: RuleOutput[] = [];
  const sortedLabs = getSortedLabs(state.labs, state.referenceDate);

  // 8. GDMT_MISSING_PILLAR : hfStage === 'C' + pilier manquant sans notPrescribedReason
  if (state.profile.hfStage === 'C') {
    const missingPillars = FOUNDATIONAL_PILLARS.filter(({ pillar }) => {
      const medsForPillar = state.medications.filter((m) => m.pillar === pillar);
      const hasActive = medsForPillar.some((m) => isMedicationActive(m));
      const hasDocumentedReason = medsForPillar.some(
        (m) => typeof m.notPrescribedReason === 'string' && m.notPrescribedReason.trim().length > 0,
      );
      return !hasActive && !hasDocumentedReason;
    });

    if (missingPillars.length > 0) {
      const names = missingPillars.map((p) => p.labelFr).join(', ');
      outputs.push(
        createRuleOutput({
          id: 'GDMT_MISSING_PILLAR',
          severity: 'action',
          category: 'medications',
          titleFr: "Pilier(s) du traitement de fond à vérifier en consultation",
          explanationFr: `En insuffisance cardiaque symptomatique (stade C), les recommandations européennes reposent sur 4 piliers complémentaires. Les classes suivantes ne figurent pas comme actives sans raison renseignée : ${names}.`,
          suggestedActionFr:
            "Préparez la question pour votre cardiologue : « Suis-je sous les 4 piliers recommandés, ou existe-t-il une raison médicale (tension, rein, potassium, calendrier de titration) de ne pas introduire cette classe ? »",
          evidenceGrade: 'ESC 2026 Classe I',
          sources: ['ESC 2026 Classe I'],
          articleSlug: 'medicaments-insuffisance-cardiaque',
          relatedQuestionIds: ['q_meds_four_pillars'],
        }),
      );
    }
  }

  // 9. STAGE_B_CONTEXT : hfStage === 'B'
  if (state.profile.hfStage === 'B') {
    outputs.push(
      createRuleOutput({
        id: 'STAGE_B_CONTEXT',
        severity: 'info',
        category: 'medications',
        titleFr: "Contexte stade B (dysfonction VG asymptomatique)",
        explanationFr:
          "En dysfonction ventriculaire gauche asymptomatique (stade B), les preuves les plus établies concernent les IEC (ou ARA2 en cas d'intolérance) et les bêtabloquants, ainsi que l'éplérénone dans certains contextes post-infarctus selon l'évaluation cardiologique.",
        suggestedActionFr:
          "Demandez à votre cardiologue quels traitements de fond s'appliquent spécifiquement à votre profil asymptomatique et à quel rythme contrôler votre FEVG.",
        evidenceGrade: 'ESC 2026',
        sources: ['ESC 2026'],
        articleSlug: 'dysfonction-vg-asymptomatique-stade-b',
        relatedQuestionIds: ['q_stage_b_treatment'],
      }),
    );
  }

  // 10. HFIMPEF_CONTINUE : modules.hfImpEf === true
  if (state.profile.modules.hfImpEf) {
    outputs.push(
      createRuleOutput({
        id: 'HFIMPEF_CONTINUE',
        severity: 'info',
        category: 'medications',
        titleFr: "FEVG améliorée (HFimpEF) : poursuite des traitements de fond",
        explanationFr:
          "Même lorsque la fraction d'éjection s'améliore nettement, l'arrêt des traitements de fond s'accompagne d'un risque élevé de rechute. Les recommandations européennes préconisent fortement leur maintien au long cours.",
        suggestedActionFr:
          "N'interrompez aucun traitement même si vous vous sentez pleinement rétabli ; discutez de toute adaptation uniquement avec votre cardiologue.",
        evidenceGrade: 'ESC 2026 Classe I',
        sources: ['ESC 2026 Classe I', 'TRED-HF'],
        articleSlug: 'insuffisance-cardiaque-fevg-amelioree',
        relatedQuestionIds: ['q_hfimpef_continue'],
      }),
    );
  }

  // 11. POST_TITRATION_LABS : lastDoseChangeAt <= 14 j sur raas_arni ou mra sans LabResult (créatinine + K+) ultérieur
  const titrationMedsNeedingLab: string[] = [];
  for (const med of state.medications) {
    if (!isMedicationActive(med)) continue;
    if (med.pillar !== 'raas_arni' && med.pillar !== 'mra') continue;

    const candidateDates: string[] = [];
    if (med.lastDoseChangeAt && isOnOrBefore(med.lastDoseChangeAt, state.referenceDate)) {
      candidateDates.push(med.lastDoseChangeAt);
    }
    if (med.id !== undefined) {
      for (const dc of state.doseChanges) {
        if (dc.medicationId === med.id && isOnOrBefore(dc.date, state.referenceDate)) {
          candidateDates.push(dc.date);
        }
      }
    }

    if (candidateDates.length === 0) continue;
    candidateDates.sort((a, b) => parseIsoDateUtcMs(a) - parseIsoDateUtcMs(b));
    const latestChangeDate = candidateDates[candidateDates.length - 1];

    if (!isWithinLastDays(latestChangeDate, state.referenceDate, 14)) continue;

    const hasSubsequentRenalKLab = sortedLabs.some((lab) => {
      const diff = daysBetween(latestChangeDate, lab.date);
      return (
        diff > 0 &&
        typeof lab.creatinineUmolL === 'number' &&
        typeof lab.potassiumMmolL === 'number'
      );
    });

    if (!hasSubsequentRenalKLab) {
      const label = med.frenchBrand ? `${med.innName} (${med.frenchBrand})` : med.innName;
      titrationMedsNeedingLab.push(label);
    }
  }

  if (titrationMedsNeedingLab.length > 0) {
    outputs.push(
      createRuleOutput({
        id: 'POST_TITRATION_LABS',
        severity: 'action',
        category: 'medications',
        titleFr: "Contrôle biologique post-titration (créatinine et potassium)",
        explanationFr: `Un changement de palier récent (≤ 14 jours) a été enregistré sur ${titrationMedsNeedingLab.join(', ')} sans bilan rénal et kaliémique ultérieur saisi. Un contrôle de la créatinine (DFGe) et du potassium est habituellement réalisé 1 à 2 semaines après chaque palier d'IEC/ARA2/ARNI ou d'ARM.`,
        suggestedActionFr:
          "Vérifiez si une ordonnance de prise de sang de contrôle vous a été remise et transmettez les résultats à votre médecin traitant, votre IPA ou votre cardiologue.",
        evidenceGrade: 'Volterrani 2024 / NICE 2025',
        sources: ['Volterrani 2024', 'NICE NG106 2025', 'ESC 2026'],
        articleSlug: 'medicaments-effets-secondaires-suivi',
        relatedQuestionIds: ['q_meds_post_titration_labs'],
      }),
    );
  }

  // 12. ARNI_WASHOUT_INFO : switchedFromAceIAt renseigné dans les 30 derniers jours
  const recentArniSwitch = state.medications.some(
    (med) =>
      typeof med.switchedFromAceIAt === 'string' &&
      isWithinLastDays(med.switchedFromAceIAt, state.referenceDate, 30),
  );
  if (recentArniSwitch) {
    outputs.push(
      createRuleOutput({
        id: 'ARNI_WASHOUT_INFO',
        severity: 'warning',
        category: 'medications',
        titleFr: "Relais IEC vers ARNI : rappel du délai de 36 heures",
        explanationFr:
          "Un passage récent d'un IEC vers le sacubitril/valsartan (Entresto) est enregistré. Un intervalle obligatoire d'au moins 36 heures sans traitement entre la dernière prise d'IEC et la première prise d'ARNI est requis pour prévenir le risque d'angio-œdème ; les deux classes ne doivent jamais être associées.",
        suggestedActionFr:
          "Assurez-vous auprès de votre pharmacien ou de votre médecin que l'ancien IEC a bien été retiré de votre pilulier. En cas de gonflement du visage, des lèvres ou de la langue, appelez immédiatement le 15 ou le 112.",
        evidenceGrade: 'RCP Entresto / Sécurité',
        sources: ['RCP Entresto (sacubitril/valsartan)', 'ESC 2026'],
        articleSlug: 'medicaments-effets-secondaires-suivi',
        relatedQuestionIds: ['q_meds_arni_switch'],
      }),
    );
  }

  // 13. POTASSIUM_ALERT : Dernier potassiumMmolL >= 6,0 (urgent) ou 5,5-5,9 (warning)
  const labsWithK = sortedLabs.filter((lab) => typeof lab.potassiumMmolL === 'number');
  const latestKLab = labsWithK[labsWithK.length - 1];
  if (latestKLab && typeof latestKLab.potassiumMmolL === 'number') {
    const kVal = latestKLab.potassiumMmolL;
    if (kVal >= 6.0 - FLOAT_EPSILON) {
      outputs.push(
        createRuleOutput({
          id: 'POTASSIUM_ALERT',
          severity: 'urgent',
          category: 'medications',
          titleFr: `Hyperkaliémie sévère (${formatPotassiumFr(kVal)})`,
          explanationFr: `Votre dernier dosage de potassium est de ${formatPotassiumFr(kVal)} (≥ 6,0 mmol/L). Un taux de potassium aussi élevé expose à un trouble du rythme cardiaque et nécessite un avis médical sans délai.`,
          suggestedActionFr:
            "Contactez immédiatement votre médecin traitant ou votre cardiologue (ou appelez le 15 ou le 112 en cas de faiblesse musculaire, palpitations ou malaise, ou si vous ne joignez pas votre médecin). Évitez strictement les sels de régime au potassium et les AINS ; n'ajustez pas seul vos médicaments sans consigne médicale.",
          evidenceGrade: 'Clark 2019 / Volterrani 2024',
          sources: ['Clark 2019', 'Volterrani 2024', 'ESC 2026'],
          articleSlug: 'medicaments-effets-secondaires-suivi',
          relatedQuestionIds: ['q_labs_potassium'],
        }),
      );
    } else if (kVal >= 5.5 - FLOAT_EPSILON) {
      outputs.push(
        createRuleOutput({
          id: 'POTASSIUM_ALERT',
          severity: 'warning',
          category: 'medications',
          titleFr: `Potassium élevé (${formatPotassiumFr(kVal)})`,
          explanationFr: `Votre dernier dosage de potassium est de ${formatPotassiumFr(kVal)} (entre 5,5 et 5,9 mmol/L). Ce repère justifie une transmission rapide à votre équipe médicale pour vérifier le dosage (exclusion d'une hémolyse) et adapter si besoin le suivi ou les traitements.`,
          suggestedActionFr:
            "Transmettez rapidement ce résultat à votre médecin traitant, votre IPA ou votre cardiologue. Évitez les substituts de sel riches en potassium et les AINS, sans arrêter seul votre traitement de fond.",
          evidenceGrade: 'Clark 2019 / Volterrani 2024',
          sources: ['Clark 2019', 'Volterrani 2024', 'ESC 2026'],
          articleSlug: 'medicaments-effets-secondaires-suivi',
          relatedQuestionIds: ['q_labs_potassium'],
        }),
      );
    }
  }

  // 14. CREATININE_JUMP : Hausse > 30 % entre deux dosages consécutifs de creatinineUmolL
  const labsWithCreat = sortedLabs.filter(
    (lab) => typeof lab.creatinineUmolL === 'number' && lab.creatinineUmolL > 0,
  );
  if (labsWithCreat.length >= 2) {
    const prevLab = labsWithCreat[labsWithCreat.length - 2];
    const currLab = labsWithCreat[labsWithCreat.length - 1];
    const prevVal = prevLab.creatinineUmolL as number;
    const currVal = currLab.creatinineUmolL as number;
    const pctIncrease = ((currVal - prevVal) / prevVal) * 100;

    if (pctIncrease > 30 + FLOAT_EPSILON) {
      outputs.push(
        createRuleOutput({
          id: 'CREATININE_JUMP',
          severity: 'warning',
          category: 'medications',
          titleFr: `Hausse notable de la créatinine (+${formatFrenchNumber(pctIncrease, 0)} %)`,
          explanationFr: `La créatinine est passée de ${formatCreatinineFr(prevVal)} à ${formatCreatinineFr(currVal)}, soit une hausse de +${formatFrenchNumber(pctIncrease, 1)} % (> 30 %). Si une augmentation modérée (≤ 30 %) est souvent attendue à l'initiation d'un bloqueur du SRAA, d'un ARNI ou d'un iSGLT2, une élévation supérieure à 30 % doit être évaluée par votre médecin.`,
          suggestedActionFr:
            "Transmettez ce bilan rapidement à votre médecin traitant ou à votre cardiologue et signalez tout épisode récent de déshydratation, fièvre ou prise d'AINS. Ne modifiez pas seul vos doses sans avis médical.",
          evidenceGrade: 'Clark 2019 / Beldhuis 2022',
          sources: ['Clark 2019', 'Beldhuis 2022', 'ESC 2026'],
          articleSlug: 'medicaments-effets-secondaires-suivi',
          relatedQuestionIds: ['q_labs_creatinine'],
        }),
      );
    }
  }

  // 15. CONTRAINDICATED_DRUG : Médicament actif contenant AINS, vérapamil, diltiazem ou moxonidine
  const flaggedDrugs: string[] = [];
  for (const med of state.medications) {
    if (!isMedicationActive(med)) continue;
    const matched =
      matchContraindicatedClass(med.innName) ??
      (med.frenchBrand ? matchContraindicatedClass(med.frenchBrand) : undefined);
    if (matched) {
      const display = med.frenchBrand ? `${med.innName} (${med.frenchBrand})` : med.innName;
      flaggedDrugs.push(`${display} [${matched}]`);
    }
  }

  if (flaggedDrugs.length > 0) {
    outputs.push(
      createRuleOutput({
        id: 'CONTRAINDICATED_DRUG',
        severity: 'warning',
        category: 'medications',
        titleFr: "Médicament déconseillé ou contre-indiqué en ICFER détecté",
        explanationFr: `Un ou plusieurs médicaments actifs appartiennent à une classe déconseillée ou contre-indiquée en insuffisance cardiaque à FEVG réduite selon les recommandations ESC 2026 (Classe III) : ${flaggedDrugs.join(', ')}.`,
        suggestedActionFr:
          "Ne cessez pas brutalement un traitement prescrit de votre propre initiative ; vérifiez rapidement la pertinence de cette prescription avec votre cardiologue, votre médecin traitant ou votre pharmacien.",
        evidenceGrade: 'ESC 2026 Classe III',
        sources: ['ESC 2026 Classe III'],
        articleSlug: 'interactions-complements-aliments-medicaments',
        relatedQuestionIds: ['q_meds_interactions'],
      }),
    );
  }

  // 16. SGLT2_KETO_REMINDER : sglt2i actif
  const hasActiveSglt2i = state.medications.some(
    (med) => isMedicationActive(med) && (med.pillar === 'sglt2i' || med.subClass === 'sglt2i'),
  );
  if (hasActiveSglt2i) {
    const diabetesNote = state.profile.modules.diabetes
      ? " En présence de diabète, une vigilance particulière s'applique vis-à-vis du risque rare d'acidocétose euglycémique."
      : '';
    outputs.push(
      createRuleOutput({
        id: 'SGLT2_KETO_REMINDER',
        severity: 'info',
        category: 'medications',
        titleFr: "Rappel de sécurité sous iSGLT2 (jours de maladie et alimentation)",
        explanationFr: `Vous prenez un inhibiteur du SGLT2 (dapagliflozine ou empagliflozine). Les régimes cétogènes stricts et les jeûnes prolongés sont déconseillés sous cette classe.${diabetesNote} En cas de maladie aiguë déshydratante (fièvre élevée, vomissements, diarrhées) ou avant une chirurgie programmée, un protocole « jours de maladie » doit être défini à l'avance avec votre équipe.`,
        suggestedActionFr:
          "Validez avec votre médecin traitant ou votre cardiologue la conduite à tenir écrite en cas de maladie aiguë ou d'intervention chirurgicale (ne suspendez jamais le traitement sans avis ou plan médical).",
        evidenceGrade: 'RCP dapagliflozine / empagliflozine',
        sources: ['RCP dapagliflozine / empagliflozine', 'ESC 2026'],
        articleSlug: 'medicaments-effets-secondaires-suivi',
        relatedQuestionIds: ['q_meds_sick_day_plan'],
      }),
    );
  }

  return outputs;
}
