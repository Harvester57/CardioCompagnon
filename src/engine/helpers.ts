import type {
  ClinicalEvent,
  DailyLog,
  FrenchAdminItemId,
  FrenchAdminProgress,
  ImagingExam,
  LabResult,
  Medication,
} from '../types/domain';
import type { RuleCategory, RuleId, RuleOutput, RuleSeverity } from '../types/rules';
import type { ExpectedArticleSlug } from '../content/fr/expected-slugs';

export const FLOAT_EPSILON = 1e-9;

const MS_PER_DAY = 86_400_000;

/**
 * Analyse une date ISO (YYYY-MM-DD ou horodatage ISO complet) en millisecondes UTC à minuit.
 * Évite toute dérive liée aux fuseaux horaires ou au changement d'heure.
 */
export function parseIsoDateUtcMs(isoDate: string): number {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) {
    return Number.NaN;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  return Date.UTC(year, month - 1, day);
}

/**
 * Retourne le nombre exact de jours écoulés entre `earlierDate` et `laterDate`.
 * Positif lorsque `laterDate` est postérieure à `earlierDate`.
 */
export function daysBetween(earlierDate: string, laterDate: string): number {
  const start = parseIsoDateUtcMs(earlierDate);
  const end = parseIsoDateUtcMs(laterDate);
  if (Number.isNaN(start) || Number.isNaN(end)) {
    return Number.NaN;
  }
  return Math.round((end - start) / MS_PER_DAY);
}

/** Indique si `date` est antérieure ou égale à `referenceDate`. */
export function isOnOrBefore(date: string, referenceDate: string): boolean {
  const diff = daysBetween(date, referenceDate);
  return !Number.isNaN(diff) && diff >= 0;
}

/** Indique si `date` se situe dans les `maxDays` derniers jours avant `referenceDate` (inclus). */
export function isWithinLastDays(date: string, referenceDate: string, maxDays: number): boolean {
  const diff = daysBetween(date, referenceDate);
  return !Number.isNaN(diff) && diff >= 0 && diff <= maxDays;
}

/** Normalise une chaîne pour comparaison insensible à la casse et aux accents. */
export function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/** Indique si un médicament est actuellement pris (actif, en titration ou à dose cible). */
export function isMedicationActive(med: Medication): boolean {
  return med.status === 'active' || med.status === 'titrating' || med.status === 'at_target';
}

/** Trie par date croissante et exclut les entrées postérieures à `referenceDate`. */
export function filterAndSortByDate<T extends { date: string }>(
  items: readonly T[],
  referenceDate: string,
): T[] {
  return items
    .filter((item) => isOnOrBefore(item.date, referenceDate))
    .sort((a, b) => parseIsoDateUtcMs(a.date) - parseIsoDateUtcMs(b.date));
}

export function getSortedDailyLogs(logs: readonly DailyLog[], referenceDate: string): DailyLog[] {
  return filterAndSortByDate(logs, referenceDate);
}

export function getSortedLabs(labs: readonly LabResult[], referenceDate: string): LabResult[] {
  return filterAndSortByDate(labs, referenceDate);
}

export function getSortedImaging(imaging: readonly ImagingExam[], referenceDate: string): ImagingExam[] {
  return filterAndSortByDate(imaging, referenceDate);
}

export function getSortedEvents(events: readonly ClinicalEvent[], referenceDate: string): ClinicalEvent[] {
  return filterAndSortByDate(events, referenceDate);
}

/** Retourne la dernière FEVG enregistrée à ou avant `referenceDate`. */
export function getLatestLvef(
  imaging: readonly ImagingExam[],
  referenceDate: string,
): { value: number; exam: ImagingExam } | undefined {
  const sorted = getSortedImaging(imaging, referenceDate);
  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    const exam = sorted[i];
    if (typeof exam.lvefPercent === 'number' && !Number.isNaN(exam.lvefPercent)) {
      return { value: exam.lvefPercent, exam };
    }
  }
  return undefined;
}

export function getAdminItemStatus(
  adminProgress: readonly FrenchAdminProgress[],
  itemId: FrenchAdminItemId,
): FrenchAdminProgress['status'] | undefined {
  return adminProgress.find((item) => item.itemId === itemId)?.status;
}

/** Constructeur typé garantissant à la compilation que `articleSlug` appartient à EXPECTED_ARTICLE_SLUGS. */
export function createRuleOutput(params: {
  id: RuleId;
  severity: RuleSeverity;
  category: RuleCategory;
  titleFr: string;
  explanationFr: string;
  suggestedActionFr: string;
  evidenceGrade?: string;
  sources: string[];
  articleSlug: ExpectedArticleSlug;
  relatedQuestionIds?: string[];
}): RuleOutput {
  return params;
}
