import type {
  ImagingExam,
  LabResult,
  Medication,
  PatientProfile,
} from '../../types';

export interface NormRange {
  min: number;
  max: number;
  unit: string;
}

export interface ModalityVolumeNorms {
  lveddMm?: NormRange;
  lvedviMlM2: NormRange;
  lvesviMlM2: NormRange;
  sourceLabel: string;
}

export const LV_NORMS: Record<'ett' | 'irm', Record<PatientProfile['sex'], ModalityVolumeNorms>> = {
  ett: {
    M: {
      lveddMm: { min: 42, max: 58, unit: 'mm' },
      lvedviMlM2: { min: 34, max: 74, unit: 'mL/m²' },
      lvesviMlM2: { min: 11, max: 31, unit: 'mL/m²' },
      sourceLabel: 'ASE/EACVI 2015 (ETT 2D)',
    },
    F: {
      lveddMm: { min: 38, max: 52, unit: 'mm' },
      lvedviMlM2: { min: 29, max: 61, unit: 'mL/m²' },
      lvesviMlM2: { min: 8, max: 24, unit: 'mL/m²' },
      sourceLabel: 'ASE/EACVI 2015 (ETT 2D)',
    },
  },
  irm: {
    M: {
      lvedviMlM2: { min: 50, max: 108, unit: 'mL/m²' },
      lvesviMlM2: { min: 11, max: 47, unit: 'mL/m²' },
      sourceLabel: 'Kawel-Boehm 2020 (IRM cardiaque)',
    },
    F: {
      lvedviMlM2: { min: 50, max: 96, unit: 'mL/m²' },
      lvesviMlM2: { min: 10, max: 40, unit: 'mL/m²' },
      sourceLabel: 'Kawel-Boehm 2020 (IRM cardiaque)',
    },
  },
};

export const LGE_PATTERN_LABELS: Record<NonNullable<ImagingExam['lgePattern']>, string> = {
  subendocardial_transmural: 'Sous-endocardique / transmural (profil ischémique)',
  midwall: 'Médio-mural (plutôt non ischémique)',
  epicardial: 'Sous-épicardique',
  mixed: 'Mixte',
  none: 'Aucune cicatrice LGE',
};

export const MITRAL_REGURGITATION_LABELS: Record<
  NonNullable<ImagingExam['mitralRegurgitation']>,
  string
> = {
  none: 'Absente',
  mild: 'Minime / grade 1',
  moderate: 'Modérée / grade 2–3',
  severe: 'Sévère / grade 4',
};

export const LV_THROMBUS_LABELS: Record<NonNullable<ImagingExam['lvThrombus']>, string> = {
  absent: 'Absent',
  present: 'Présent',
  uncertain: 'Incertain / à contrôler',
};

export const ECG_RHYTHM_LABELS: Record<string, string> = {
  sinus: 'Rythme sinusal',
  af: 'Fibrillation atriale (FA)',
  paced: 'Rythme stimulé (pacemaker / CRT)',
  other: 'Autre rythme',
};

export const SLEEP_APNOEA_TYPE_LABELS: Record<string, string> = {
  osa: 'SAOS (apnée obstructive)',
  csa: 'SACS (apnée centrale)',
  mixed: 'Mixte (SAOS + SACS)',
  none: "Absence d'apnée significative",
};

export const SLEEP_TREATMENT_LABELS: Record<string, string> = {
  none: 'Aucun appareillage',
  cpap: 'PPC (pression positive continue)',
  asv: 'ASV (servo-ventilation adaptative — alerte ICFER)',
  mandibular: "Orthèse d'avancée mandibulaire",
  other: 'Autre prise en charge',
};

export function parseFrenchDecimal(raw: string): number | undefined {
  const cleaned = raw.trim().replace(/\s+/g, '').replace(',', '.');
  if (cleaned.length === 0) {
    return undefined;
  }
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : undefined;
}

export function formatInputDecimalFr(value: number | undefined): string {
  if (value === undefined || !Number.isFinite(value)) {
    return '';
  }
  return String(value).replace('.', ',');
}

export function formatIsoDateFr(isoDate: string): string {
  const parts = isoDate.split('-');
  if (parts.length !== 3) {
    return isoDate;
  }
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function formatShortDateFr(isoDate: string): string {
  const parts = isoDate.split('-');
  if (parts.length !== 3) {
    return isoDate;
  }
  return `${parts[2]}/${parts[1]}/${parts[0].slice(2)}`;
}

export function evaluateNormStatus(
  value: number,
  range: NormRange,
): 'normal' | 'above' | 'below' {
  if (value > range.max) {
    return 'above';
  }
  if (value < range.min) {
    return 'below';
  }
  return 'normal';
}

export function computeLdlReductionPercent(
  currentLdlGL: number,
  baselineLdlGL?: number,
): number | undefined {
  if (typeof baselineLdlGL !== 'number' || baselineLdlGL <= 0) {
    return undefined;
  }
  return ((baselineLdlGL - currentLdlGL) / baselineLdlGL) * 100;
}

export function computeCreatinineDeltaPercent(
  labs: readonly LabResult[],
): { previous: LabResult; current: LabResult; deltaPct: number } | undefined {
  const withCreat = labs.filter(
    (lab) => typeof lab.creatinineUmolL === 'number' && lab.creatinineUmolL > 0,
  );
  if (withCreat.length < 2) {
    return undefined;
  }
  const previous = withCreat[withCreat.length - 2];
  const current = withCreat[withCreat.length - 1];
  const prevVal = previous.creatinineUmolL as number;
  const currVal = current.creatinineUmolL as number;
  const deltaPct = ((currVal - prevVal) / prevVal) * 100;
  return { previous, current, deltaPct };
}

export function hasActiveArniMedication(medications: readonly Medication[]): boolean {
  return medications.some((med) => {
    const active = med.status === 'active' || med.status === 'titrating' || med.status === 'at_target';
    if (!active) return false;
    const normalizedInn = med.innName.toLowerCase();
    return med.subClass === 'arni' || normalizedInn.includes('sacubitril');
  });
}

export function buildSeparatedLvefSeries(imaging: readonly ImagingExam[]): {
  date: string;
  label: string;
  ettLvef?: number;
  irmLvef?: number;
}[] {
  const sorted = [...imaging]
    .filter((exam) => typeof exam.lvefPercent === 'number')
    .sort((a, b) => a.date.localeCompare(b.date));

  const byDate = new Map<
    string,
    { date: string; label: string; ettLvef?: number; irmLvef?: number }
  >();

  for (const exam of sorted) {
    const existing = byDate.get(exam.date) ?? {
      date: exam.date,
      label: formatShortDateFr(exam.date),
    };
    if (exam.modality === 'ett') {
      existing.ettLvef = exam.lvefPercent;
    } else {
      existing.irmLvef = exam.lvefPercent;
    }
    byDate.set(exam.date, existing);
  }

  return Array.from(byDate.values());
}
