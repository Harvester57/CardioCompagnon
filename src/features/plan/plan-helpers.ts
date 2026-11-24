import {
  formatCreatinineFr,
  formatFrenchNumber,
  formatLdlFr,
  formatPotassiumFr,
  formatWeightKgFr,
} from '../../engine';
import type {
  CardiacDeviceType,
  ClinicalModuleKey,
  FrenchAdminProgress,
  ImagingExam,
  LabResult,
  Medication,
  MedicationPillar,
  PatientProfile,
  PatientState,
  QuestionCatalogItem,
  QuestionInterlocutor,
  QuestionTracking,
  RuleCategory,
  RuleId,
  RuleOutput,
  RuleSeverity,
  SleepApnoeaStatus,
} from '../../types';

export type PlanTabId = 'plan' | 'consult' | 'synthese' | 'urgence';

export const VALID_PLAN_TABS: readonly PlanTabId[] = ['plan', 'consult', 'synthese', 'urgence'];

export function parsePlanTab(raw: string | null): PlanTabId {
  if (raw === 'plan' || raw === 'consult' || raw === 'synthese' || raw === 'urgence') {
    return raw;
  }
  return 'plan';
}

export const RULE_CATEGORY_LABELS: Record<RuleCategory, string> = {
  daily: 'Suivi quotidien',
  medications: 'Traitements',
  exams: 'Examens & biologie',
  devices: 'Dispositifs',
  france: 'France & droits',
};

export const RULE_CATEGORY_ORDER: readonly RuleCategory[] = [
  'daily',
  'medications',
  'exams',
  'devices',
  'france',
];

export const INTERLOCUTOR_LABELS: Record<QuestionInterlocutor, string> = {
  cardiologist: 'Cardiologue',
  gp: 'Médecin traitant',
  pharmacist: 'Pharmacien',
  occupational_doctor: 'Médecin du travail',
};

export const INTERLOCUTOR_ORDER: readonly QuestionInterlocutor[] = [
  'cardiologist',
  'gp',
  'pharmacist',
  'occupational_doctor',
];

export const QUESTION_STATUS_LABELS: Record<QuestionTracking['status'], string> = {
  open: 'À poser',
  asked: 'Posée',
  resolved: 'Réponse obtenue',
  not_applicable: 'Non concerné',
};

export const FOUR_PILLARS_ORDER: readonly MedicationPillar[] = [
  'raas_arni',
  'beta_blocker',
  'mra',
  'sglt2i',
];

export const PILLAR_LABELS: Record<MedicationPillar, string> = {
  raas_arni: 'IEC / ARA2 / ARNI',
  beta_blocker: 'Bêtabloquant',
  mra: 'ARM (antagoniste minéralocorticoïde)',
  sglt2i: 'iSGLT2 (gliflozine)',
  loop_diuretic: "Diurétique de l'anse",
  lipid_lowering: 'Hypolipémiant',
  antiplatelet: 'Antiagrégant plaquettaire',
  anticoagulant: 'Anticoagulant',
  addon_hf: 'Traitement complémentaire IC',
  other: 'Autre traitement',
};

export const MEDICATION_STATUS_LABELS: Record<Medication['status'], string> = {
  active: 'Actif',
  titrating: 'En titration',
  at_target: 'À la dose cible',
  paused: 'En pause',
  stopped: 'Arrêté',
};

export const ADMIN_STATUS_LABELS: Record<FrenchAdminProgress['status'], string> = {
  todo: 'À faire',
  in_progress: 'En cours',
  done: 'Obtenu / Fait',
  not_applicable: 'Non concerné',
};

export const MODULE_LABELS: Record<ClinicalModuleKey | 'stageB', string> = {
  hfImpEf: 'FEVG améliorée (HFimpEF)',
  cto: 'Occlusion coronaire chronique (CTO)',
  aorticStenosis: 'Rétrécissement aortique',
  lvThrombusOrAneurysm: 'Thrombus / anévrisme VG',
  atrialFibrillation: 'Fibrillation atriale (FA)',
  ckd: 'Maladie rénale chronique (MRC)',
  diabetes: 'Diabète',
  sleepApnoea: 'Apnée du sommeil',
  lifeVest: 'Gilet défibrillateur LifeVest',
  device: 'Dispositif cardiaque implantable',
  stageB: 'Stade B asymptomatique',
};

export function formatDateFr(isoDate?: string): string {
  if (!isoDate) return 'Non renseignée';
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) return isoDate;
  return `${match[3]}/${match[2]}/${match[1]}`;
}

export function formatHfStageFr(stage: PatientProfile['hfStage']): string {
  switch (stage) {
    case 'B':
      return 'Stade B (dysfonction VG asymptomatique)';
    case 'C':
      return 'Stade C (insuffisance cardiaque symptomatique)';
    default:
      return 'Stade non renseigné';
  }
}

export function formatNyhaFr(nyhaClass: PatientProfile['nyhaClass']): string {
  switch (nyhaClass) {
    case 1:
      return 'Classe I (sans gêne à l’effort habituel)';
    case 2:
      return 'Classe II (gêne légère à l’effort soutenu)';
    case 3:
      return 'Classe III (gêne pour les efforts courants)';
    case 4:
      return 'Classe IV (gêne au repos ou au moindre effort)';
    default:
      return 'Non renseignée';
  }
}

export function formatDiagnosisOriginFr(
  origin: PatientProfile['ischaemicCauseConfirmed'],
): string {
  switch (origin) {
    case 'yes':
      return 'Cardiomyopathie ischémique confirmée';
    case 'mixed':
      return 'Cardiomyopathie d’origine mixte (ischémique et associée)';
    default:
      return 'Origine ischémique à préciser avec le cardiologue';
  }
}

export function formatDeviceFr(device: CardiacDeviceType): string {
  switch (device) {
    case 'icd_primary':
      return 'DAI (défibrillateur — prévention primaire)';
    case 'icd_secondary':
      return 'DAI (défibrillateur — prévention secondaire)';
    case 'crt_p':
      return 'CRT-P (resynchronisation cardiaque)';
    case 'crt_d':
      return 'CRT-D (resynchronisation + défibrillateur)';
    default:
      return 'Aucun dispositif implanté';
  }
}

export function formatSleepApnoeaFr(status: SleepApnoeaStatus): string {
  switch (status) {
    case 'osa':
      return 'Apnée obstructive du sommeil (SAOS)';
    case 'csa':
      return 'Apnée centrale du sommeil (SACS)';
    case 'suspected':
      return 'Apnée du sommeil suspectée (à explorer)';
    default:
      return 'Aucune';
  }
}

export function getActiveModulesList(
  profile: PatientProfile,
): { key: ClinicalModuleKey; label: string }[] {
  const active: { key: ClinicalModuleKey; label: string }[] = [];
  const m = profile.modules;

  if (m.hfImpEf) active.push({ key: 'hfImpEf', label: MODULE_LABELS.hfImpEf });
  if (m.cto) active.push({ key: 'cto', label: MODULE_LABELS.cto });
  if (m.aorticStenosis) active.push({ key: 'aorticStenosis', label: MODULE_LABELS.aorticStenosis });
  if (m.lvThrombusOrAneurysm) {
    active.push({ key: 'lvThrombusOrAneurysm', label: MODULE_LABELS.lvThrombusOrAneurysm });
  }
  if (m.atrialFibrillation) {
    active.push({ key: 'atrialFibrillation', label: MODULE_LABELS.atrialFibrillation });
  }
  if (m.ckd) active.push({ key: 'ckd', label: MODULE_LABELS.ckd });
  if (m.diabetes) active.push({ key: 'diabetes', label: MODULE_LABELS.diabetes });
  if (m.sleepApnoea !== 'none') {
    active.push({ key: 'sleepApnoea', label: formatSleepApnoeaFr(m.sleepApnoea) });
  }
  if (m.lifeVest) active.push({ key: 'lifeVest', label: MODULE_LABELS.lifeVest });
  if (m.device !== 'none') {
    active.push({ key: 'device', label: formatDeviceFr(m.device) });
  }

  return active;
}

export function getActiveOptionalModuleKeys(
  profile: PatientProfile,
): Set<ClinicalModuleKey | 'stageB'> {
  const keys = new Set<ClinicalModuleKey | 'stageB'>();
  for (const mod of getActiveModulesList(profile)) {
    keys.add(mod.key);
  }
  if (profile.hfStage === 'B') {
    keys.add('stageB');
  }
  return keys;
}

export function getLatestImagingByModality(imaging: readonly ImagingExam[]): {
  latestEtt?: ImagingExam;
  latestIrm?: ImagingExam;
} {
  let latestEtt: ImagingExam | undefined;
  let latestIrm: ImagingExam | undefined;

  for (const exam of imaging) {
    if (exam.modality === 'ett') {
      if (!latestEtt || exam.date.localeCompare(latestEtt.date) >= 0) {
        latestEtt = exam;
      }
    } else if (exam.modality === 'irm') {
      if (!latestIrm || exam.date.localeCompare(latestIrm.date) >= 0) {
        latestIrm = exam;
      }
    }
  }

  return { latestEtt, latestIrm };
}

export interface LatestLabSnapshotItem {
  key: string;
  label: string;
  valueFr: string;
  date?: string;
  note?: string;
}

function findLatestNumericLab(
  labs: readonly LabResult[],
  selector: (lab: LabResult) => number | undefined,
): { value: number; date: string } | undefined {
  for (let i = labs.length - 1; i >= 0; i -= 1) {
    const lab = labs[i];
    if (!lab) continue;
    const val = selector(lab);
    if (val !== undefined && Number.isFinite(val)) {
      return { value: val, date: lab.date };
    }
  }
  return undefined;
}

export function buildLatestLabSnapshot(
  labs: readonly LabResult[],
  profile: PatientProfile,
): LatestLabSnapshotItem[] {
  const items: LatestLabSnapshotItem[] = [];

  const ntProBnp = findLatestNumericLab(labs, (l) => l.ntProBnpPgMl);
  items.push({
    key: 'ntProBnp',
    label: 'NT-proBNP',
    valueFr: ntProBnp ? `${formatFrenchNumber(ntProBnp.value, 0)} pg/mL` : 'Non renseigné',
    date: ntProBnp?.date,
  });

  const bnp = findLatestNumericLab(labs, (l) => l.bnpPgMl);
  if (bnp) {
    items.push({
      key: 'bnp',
      label: 'BNP',
      valueFr: `${formatFrenchNumber(bnp.value, 0)} pg/mL`,
      date: bnp.date,
      note: 'Sous ARNI, le NT-proBNP reste la référence.',
    });
  }

  const creat = findLatestNumericLab(labs, (l) => l.creatinineUmolL);
  const egfr = findLatestNumericLab(labs, (l) => l.egfrMlMin);
  items.push({
    key: 'renal',
    label: 'Créatinine / DFGe',
    valueFr:
      creat || egfr
        ? [
            creat ? formatCreatinineFr(creat.value) : null,
            egfr ? `DFGe ${formatFrenchNumber(egfr.value, 0)} mL/min/1,73 m²` : null,
          ]
            .filter(Boolean)
            .join(' — ')
        : 'Non renseigné',
    date: creat?.date ?? egfr?.date,
  });

  const potassium = findLatestNumericLab(labs, (l) => l.potassiumMmolL);
  items.push({
    key: 'potassium',
    label: 'Potassium (K+)',
    valueFr: potassium ? formatPotassiumFr(potassium.value) : 'Non renseigné',
    date: potassium?.date,
  });

  const ldl = findLatestNumericLab(labs, (l) => l.ldlGL);
  let ldlNote: string | undefined;
  if (ldl && profile.baselineLdlGL && profile.baselineLdlGL > 0) {
    const dropPct = ((profile.baselineLdlGL - ldl.value) / profile.baselineLdlGL) * 100;
    ldlNote = `Variation par rapport à la valeur initiale (${formatFrenchNumber(profile.baselineLdlGL, 2)} g/L) : ${
      dropPct >= 0 ? '-' : '+'
    }${formatFrenchNumber(Math.abs(dropPct), 0)} % (cible ESC < 0,55 g/L et -50 %)`;
  }
  items.push({
    key: 'ldl',
    label: 'LDL-cholestérol',
    valueFr: ldl ? formatLdlFr(ldl.value) : 'Non renseigné',
    date: ldl?.date,
    note: ldlNote,
  });

  const ferritin = findLatestNumericLab(labs, (l) => l.ferritinUgL);
  const tsat = findLatestNumericLab(labs, (l) => l.tsatPercent);
  items.push({
    key: 'iron',
    label: 'Ferritine / CST',
    valueFr:
      ferritin || tsat
        ? [
            ferritin ? `Ferritine ${formatFrenchNumber(ferritin.value, 0)} µg/L` : null,
            tsat ? `CST ${formatFrenchNumber(tsat.value, 0)} %` : null,
          ]
            .filter(Boolean)
            .join(' — ')
        : 'Non renseigné',
    date: tsat?.date ?? ferritin?.date,
  });

  const hb = findLatestNumericLab(labs, (l) => l.haemoglobinGDl);
  if (hb) {
    items.push({
      key: 'hb',
      label: 'Hémoglobine',
      valueFr: `${formatFrenchNumber(hb.value, 1)} g/dL`,
      date: hb.date,
    });
  }

  const hba1c = findLatestNumericLab(labs, (l) => l.hba1cPercent);
  if (hba1c) {
    items.push({
      key: 'hba1c',
      label: 'HbA1c',
      valueFr: `${formatFrenchNumber(hba1c.value, 1)} %`,
      date: hba1c.date,
    });
  }

  return items;
}

export function getLatestVitalsSummary(state: PatientState): {
  date?: string;
  weightFr?: string;
  weightDiffFromDryFr?: string;
  bpFr?: string;
  hrFr?: string;
} {
  const latest = state.dailyLogs[state.dailyLogs.length - 1];
  if (!latest) return {};

  let weightDiffFromDryFr: string | undefined;
  if (latest.weightKg !== undefined && state.profile.dryWeightKg !== undefined) {
    const diff = latest.weightKg - state.profile.dryWeightKg;
    const sign = diff > 0 ? '+' : diff < 0 ? '-' : '';
    weightDiffFromDryFr = `${sign}${formatFrenchNumber(Math.abs(diff), 1)} kg par rapport au poids sec`;
  }

  return {
    date: latest.date,
    weightFr: latest.weightKg !== undefined ? formatWeightKgFr(latest.weightKg) : undefined,
    weightDiffFromDryFr,
    bpFr:
      latest.systolicBp !== undefined && latest.diastolicBp !== undefined
        ? `${formatFrenchNumber(latest.systolicBp, 0)}/${formatFrenchNumber(latest.diastolicBp, 0)} mmHg`
        : undefined,
    hrFr:
      latest.heartRateBpm !== undefined
        ? `${formatFrenchNumber(latest.heartRateBpm, 0)} bpm`
        : undefined,
  };
}

export interface PrioritizedQuestionEntry {
  question: QuestionCatalogItem;
  triggeredByOutputs: RuleOutput[];
  matchedModuleLabels: string[];
  isRuleTriggered: boolean;
  isModuleMatched: boolean;
  highestRuleSeverity?: RuleSeverity;
  tracking?: QuestionTracking;
}

const SEVERITY_WEIGHT: Record<RuleSeverity, number> = {
  urgent: 0,
  warning: 1,
  action: 2,
  info: 3,
};

export function buildPrioritizedQuestions(
  catalog: readonly QuestionCatalogItem[],
  outputs: readonly RuleOutput[],
  prioritizedQuestionIds: readonly string[],
  profile: PatientProfile,
  trackingList: readonly QuestionTracking[],
): PrioritizedQuestionEntry[] {
  const outputsByRuleId = new Map<RuleId, RuleOutput[]>();
  const outputIndexByRuleId = new Map<RuleId, number>();

  outputs.forEach((output, idx) => {
    const list = outputsByRuleId.get(output.id) ?? [];
    list.push(output);
    outputsByRuleId.set(output.id, list);
    if (!outputIndexByRuleId.has(output.id)) {
      outputIndexByRuleId.set(output.id, idx);
    }
  });

  const prioritizedIdSet = new Set<string>(prioritizedQuestionIds);
  const activeOptionalModules = getActiveOptionalModuleKeys(profile);
  const trackingById = new Map<string, QuestionTracking>(
    trackingList.map((item) => [item.questionId, item]),
  );

  const enriched = catalog.map((question, catalogIndex) => {
    const triggeredByOutputs: RuleOutput[] = [];
    let earliestOutputIdx = Number.MAX_SAFE_INTEGER;

    if (question.triggeredByRules) {
      for (const ruleId of question.triggeredByRules) {
        const matched = outputsByRuleId.get(ruleId);
        if (matched) {
          triggeredByOutputs.push(...matched);
          const idx = outputIndexByRuleId.get(ruleId) ?? Number.MAX_SAFE_INTEGER;
          if (idx < earliestOutputIdx) {
            earliestOutputIdx = idx;
          }
        }
      }
    }

    const isRuleTriggered = triggeredByOutputs.length > 0 || prioritizedIdSet.has(question.id);

    const matchedModuleLabels: string[] = [];
    for (const mod of question.relevantModules) {
      if (mod !== 'core' && activeOptionalModules.has(mod)) {
        matchedModuleLabels.push(MODULE_LABELS[mod]);
      }
    }
    const isModuleMatched = matchedModuleLabels.length > 0;

    let highestRuleSeverity: RuleSeverity | undefined;
    for (const out of triggeredByOutputs) {
      if (
        !highestRuleSeverity ||
        SEVERITY_WEIGHT[out.severity] < SEVERITY_WEIGHT[highestRuleSeverity]
      ) {
        highestRuleSeverity = out.severity;
      }
    }

    return {
      entry: {
        question,
        triggeredByOutputs,
        matchedModuleLabels,
        isRuleTriggered,
        isModuleMatched,
        highestRuleSeverity,
        tracking: trackingById.get(question.id),
      },
      earliestOutputIdx,
      catalogIndex,
    };
  });

  enriched.sort((a, b) => {
    if (a.entry.isRuleTriggered !== b.entry.isRuleTriggered) {
      return a.entry.isRuleTriggered ? -1 : 1;
    }
    if (a.entry.isRuleTriggered && b.entry.isRuleTriggered) {
      if (a.earliestOutputIdx !== b.earliestOutputIdx) {
        return a.earliestOutputIdx - b.earliestOutputIdx;
      }
    }
    if (a.entry.isModuleMatched !== b.entry.isModuleMatched) {
      return a.entry.isModuleMatched ? -1 : 1;
    }
    return a.catalogIndex - b.catalogIndex;
  });

  return enriched.map((item) => item.entry);
}

export function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}
