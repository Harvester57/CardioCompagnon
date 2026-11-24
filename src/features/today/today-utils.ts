import type { DailyLog, Medication, RuleOutput, ScheduleSlot } from '../../types';
import { formatFrenchNumber, formatWeightKgFr } from '../../engine';

export type TrendPeriodDays = 7 | 30 | 90;

export const TREND_PERIODS: readonly TrendPeriodDays[] = [7, 30, 90];

export const SLOT_ORDER: readonly ScheduleSlot[] = ['matin', 'midi', 'soir', 'coucher'];

export const SLOT_LABELS: Record<ScheduleSlot, string> = {
  matin: 'Matin',
  midi: 'Midi',
  soir: 'Soir',
  coucher: 'Coucher',
};

export interface SelectOption<T extends string> {
  value: T;
  label: string;
  hint?: string;
}

export const DYSPNOEA_OPTIONS: readonly SelectOption<DailyLog['symptoms']['dyspnoea']>[] = [
  { value: 'none', label: 'Aucun' },
  { value: 'exertion', label: "À l'effort" },
  { value: 'rest_or_lying', label: 'Au repos ou allongé', hint: 'Signe urgent' },
];

export const OEDEMA_OPTIONS: readonly SelectOption<DailyLog['symptoms']['oedema']>[] = [
  { value: 'none', label: 'Aucun' },
  { value: 'mild', label: 'Légers (chevilles)' },
  { value: 'worsening', label: 'En aggravation' },
];

export const FATIGUE_OPTIONS: readonly SelectOption<DailyLog['symptoms']['fatigue']>[] = [
  { value: 'none', label: 'Aucune' },
  { value: 'moderate', label: 'Modérée' },
  { value: 'severe', label: 'Importante' },
];

export type ExtraSymptomKey =
  | 'dizziness'
  | 'palpitations'
  | 'chestPain'
  | 'persistentCough'
  | 'appetiteLoss';

export interface ExtraSymptomOption {
  key: ExtraSymptomKey;
  label: string;
  urgent?: boolean;
}

export const EXTRA_SYMPTOM_OPTIONS: readonly ExtraSymptomOption[] = [
  { key: 'dizziness', label: 'Vertiges / étourdissements' },
  { key: 'palpitations', label: 'Palpitations' },
  { key: 'chestPain', label: 'Douleur ou oppression thoracique', urgent: true },
  { key: 'persistentCough', label: 'Toux persistante ou nocturne' },
  { key: 'appetiteLoss', label: "Perte d'appétit" },
];

const MS_PER_DAY = 86_400_000;
const WEIGHT_ALERT_THRESHOLD_KG = 2.0;
const FLOAT_EPSILON = 1e-9;

const SHORT_MONTHS_FR = [
  'janv.',
  'févr.',
  'mars',
  'avr.',
  'mai',
  'juin',
  'juil.',
  'août',
  'sept.',
  'oct.',
  'nov.',
  'déc.',
];

export function parseIsoDateUtcMs(isoDate: string): number {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) {
    return Number.NaN;
  }
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

export function daysBetween(earlierDate: string, laterDate: string): number {
  const start = parseIsoDateUtcMs(earlierDate);
  const end = parseIsoDateUtcMs(laterDate);
  if (Number.isNaN(start) || Number.isNaN(end)) {
    return Number.NaN;
  }
  return Math.round((end - start) / MS_PER_DAY);
}

export function formatShortDateFr(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) {
    return isoDate;
  }
  const day = Number(match[3]);
  const monthIdx = Number(match[2]) - 1;
  const monthLabel = SHORT_MONTHS_FR[monthIdx] ?? match[2];
  return `${day} ${monthLabel}`;
}

export function formatFullDateFr(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) {
    return isoDate;
  }
  return `${match[3]}/${match[2]}/${match[1]}`;
}

export function parseFrenchDecimalInput(raw: string): number | undefined {
  const cleaned = raw.trim().replace(/\s+/g, '').replace(',', '.');
  if (cleaned === '') {
    return undefined;
  }
  if (!/^-?\d+(?:\.\d+)?$/.test(cleaned)) {
    return Number.NaN;
  }
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

export function parseIntegerInput(raw: string): number | undefined {
  const cleaned = raw.trim().replace(/\s+/g, '');
  if (cleaned === '') {
    return undefined;
  }
  if (!/^\d+$/.test(cleaned)) {
    return Number.NaN;
  }
  const parsed = Number.parseInt(cleaned, 10);
  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

export function formatSignedDeltaKgFr(deltaKg: number): string {
  const rounded = Math.round((deltaKg + Number.EPSILON) * 10) / 10;
  const normalized = Object.is(rounded, -0) ? 0 : rounded;
  const sign = normalized > 0 ? '+' : '';
  return `${sign}${formatFrenchNumber(normalized, 1)} kg`;
}

export function createEmptySymptoms(): DailyLog['symptoms'] {
  return {
    dyspnoea: 'none',
    oedema: 'none',
    fatigue: 'none',
    dizziness: false,
    palpitations: false,
    chestPain: false,
    persistentCough: false,
    appetiteLoss: false,
  };
}

export interface WeightComparison {
  deltaVsDryKg?: number;
  aboveDryThreshold: boolean;
  delta3dKg?: number;
  minPrior3dKg?: number;
  above3dThreshold: boolean;
}

export function computeWeightComparison(
  candidateWeightKg: number | undefined,
  targetDate: string,
  dailyLogs: readonly DailyLog[],
  dryWeightKg?: number,
): WeightComparison {
  if (candidateWeightKg === undefined || Number.isNaN(candidateWeightKg)) {
    return {
      aboveDryThreshold: false,
      above3dThreshold: false,
    };
  }

  const deltaVsDryKg =
    typeof dryWeightKg === 'number' ? candidateWeightKg - dryWeightKg : undefined;
  const aboveDryThreshold =
    deltaVsDryKg !== undefined && deltaVsDryKg >= WEIGHT_ALERT_THRESHOLD_KG - FLOAT_EPSILON;

  const prior3dWeights: number[] = [];
  for (const log of dailyLogs) {
    if (typeof log.weightKg !== 'number') continue;
    const diff = daysBetween(log.date, targetDate);
    if (diff > 0 && diff <= 3) {
      prior3dWeights.push(log.weightKg);
    }
  }

  let minPrior3dKg: number | undefined;
  let delta3dKg: number | undefined;
  if (prior3dWeights.length > 0) {
    minPrior3dKg = Math.min(...prior3dWeights);
    delta3dKg = candidateWeightKg - minPrior3dKg;
  }

  const above3dThreshold =
    delta3dKg !== undefined && delta3dKg >= WEIGHT_ALERT_THRESHOLD_KG - FLOAT_EPSILON;

  return {
    deltaVsDryKg,
    aboveDryThreshold,
    delta3dKg,
    minPrior3dKg,
    above3dThreshold,
  };
}

export interface TrendDataPoint {
  date: string;
  label: string;
  weightKg?: number;
  systolicBp?: number;
  diastolicBp?: number;
  heartRateBpm?: number;
}

export interface TrendSummary {
  points: TrendDataPoint[];
  weightCount: number;
  latestWeightKg?: number;
  minWeightKg?: number;
  maxWeightKg?: number;
  bpHrCount: number;
  avgSystolicBp?: number;
  avgDiastolicBp?: number;
  avgHeartRateBpm?: number;
}

export function buildTrendSeries(
  dailyLogs: readonly DailyLog[],
  referenceDate: string,
  periodDays: TrendPeriodDays,
): TrendSummary {
  const filtered = dailyLogs
    .filter((log) => {
      const diff = daysBetween(log.date, referenceDate);
      return !Number.isNaN(diff) && diff >= 0 && diff <= periodDays;
    })
    .sort((a, b) => parseIsoDateUtcMs(a.date) - parseIsoDateUtcMs(b.date));

  const points: TrendDataPoint[] = filtered.map((log) => ({
    date: log.date,
    label: formatShortDateFr(log.date),
    weightKg: log.weightKg,
    systolicBp: log.systolicBp,
    diastolicBp: log.diastolicBp,
    heartRateBpm: log.heartRateBpm,
  }));

  const weights = points
    .map((p) => p.weightKg)
    .filter((v): v is number => typeof v === 'number' && Number.isFinite(v));

  const systolics = points
    .map((p) => p.systolicBp)
    .filter((v): v is number => typeof v === 'number' && Number.isFinite(v));

  const diastolics = points
    .map((p) => p.diastolicBp)
    .filter((v): v is number => typeof v === 'number' && Number.isFinite(v));

  const heartRates = points
    .map((p) => p.heartRateBpm)
    .filter((v): v is number => typeof v === 'number' && Number.isFinite(v));

  const bpHrCount = points.filter(
    (p) =>
      typeof p.systolicBp === 'number' ||
      typeof p.diastolicBp === 'number' ||
      typeof p.heartRateBpm === 'number',
  ).length;

  const average = (values: number[]): number | undefined =>
    values.length > 0 ? values.reduce((acc, n) => acc + n, 0) / values.length : undefined;

  return {
    points,
    weightCount: weights.length,
    latestWeightKg: weights.length > 0 ? weights[weights.length - 1] : undefined,
    minWeightKg: weights.length > 0 ? Math.min(...weights) : undefined,
    maxWeightKg: weights.length > 0 ? Math.max(...weights) : undefined,
    bpHrCount,
    avgSystolicBp: average(systolics),
    avgDiastolicBp: average(diastolics),
    avgHeartRateBpm: average(heartRates),
  };
}

export function isActiveMedication(med: Medication): boolean {
  return med.status === 'active' || med.status === 'titrating' || med.status === 'at_target';
}

export function getMedicationSlots(med: Medication): ScheduleSlot[] {
  if (med.scheduleSlots && med.scheduleSlots.length > 0) {
    return med.scheduleSlots;
  }
  return ['matin'];
}

export function partitionTodayAlerts(outputs: readonly RuleOutput[]): {
  priorityAlerts: RuleOutput[];
  otherWarnings: RuleOutput[];
} {
  const priorityAlerts: RuleOutput[] = [];
  const otherWarnings: RuleOutput[] = [];

  for (const output of outputs) {
    if (output.severity === 'urgent' || output.category === 'daily') {
      priorityAlerts.push(output);
    } else if (output.severity === 'warning') {
      otherWarnings.push(output);
    }
  }

  return { priorityAlerts, otherWarnings };
}

export function summarizeSymptomsFr(symptoms: DailyLog['symptoms']): string[] {
  const badges: string[] = [];

  if (symptoms.dyspnoea === 'rest_or_lying') {
    badges.push('Essoufflement au repos / allongé');
  } else if (symptoms.dyspnoea === 'exertion') {
    badges.push("Essoufflement à l'effort");
  }

  if (symptoms.oedema === 'worsening') {
    badges.push('Œdèmes en aggravation');
  } else if (symptoms.oedema === 'mild') {
    badges.push('Œdèmes légers');
  }

  if (symptoms.fatigue === 'severe') {
    badges.push('Fatigue importante');
  } else if (symptoms.fatigue === 'moderate') {
    badges.push('Fatigue modérée');
  }

  if (symptoms.chestPain) badges.push('Douleur thoracique');
  if (symptoms.dizziness) badges.push('Vertiges');
  if (symptoms.palpitations) badges.push('Palpitations');
  if (symptoms.persistentCough) badges.push('Toux persistante');
  if (symptoms.appetiteLoss) badges.push("Perte d'appétit");

  return badges;
}

export function formatWeightForInput(weightKg?: number): string {
  if (typeof weightKg !== 'number' || Number.isNaN(weightKg)) {
    return '';
  }
  return formatFrenchNumber(weightKg, 1);
}

export function formatWeightDryHint(dryWeightKg?: number): string {
  if (typeof dryWeightKg !== 'number') {
    return 'Poids sec non défini';
  }
  return `Poids sec : ${formatWeightKgFr(dryWeightKg)}`;
}
