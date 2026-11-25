export const MONTHS_FR = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
] as const;

export const WEEKDAYS_FR = [
  { short: 'Lu', full: 'Lundi' },
  { short: 'Ma', full: 'Mardi' },
  { short: 'Me', full: 'Mercredi' },
  { short: 'Je', full: 'Jeudi' },
  { short: 'Ve', full: 'Vendredi' },
  { short: 'Sa', full: 'Samedi' },
  { short: 'Di', full: 'Dimanche' },
] as const;

export const ISO_DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const FR_DATE_RE = /^(\d{2})[/-](\d{2})[/-](\d{4})$/;

function isValidCalendarDate(year: number, month: number, day: number): boolean {
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  const dt = new Date(year, month - 1, day);
  return dt.getFullYear() === year && dt.getMonth() === month - 1 && dt.getDate() === day;
}

function toIsoDate(year: number, month: number, day: number): string {
  return `${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export function getLocalTodayIso(): string {
  const now = new Date();
  return toIsoDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

export function formatIsoToFrenchDate(iso: string): string {
  const match = ISO_DATE_RE.exec(iso.trim());
  if (!match) return '';
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!isValidCalendarDate(year, month, day)) return '';
  return `${match[3]}/${match[2]}/${match[1]}`;
}

export function parseFrenchOrIsoDate(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return '';

  const isoMatch = ISO_DATE_RE.exec(trimmed);
  if (isoMatch) {
    const year = Number(isoMatch[1]);
    const month = Number(isoMatch[2]);
    const day = Number(isoMatch[3]);
    return isValidCalendarDate(year, month, day) ? toIsoDate(year, month, day) : null;
  }

  const frMatch = FR_DATE_RE.exec(trimmed);
  if (frMatch) {
    const day = Number(frMatch[1]);
    const month = Number(frMatch[2]);
    const year = Number(frMatch[3]);
    return isValidCalendarDate(year, month, day) ? toIsoDate(year, month, day) : null;
  }

  return null;
}

export function isOutOfRange(iso: string, min?: string, max?: string): boolean {
  if (min && iso < min) return true;
  if (max && iso > max) return true;
  return false;
}

export function shiftIsoDays(iso: string, deltaDays: number): string {
  const match = ISO_DATE_RE.exec(iso);
  if (!match) return getLocalTodayIso();
  const dt = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]) + deltaDays);
  return toIsoDate(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
}

export function shiftIsoMonths(iso: string, deltaMonths: number): string {
  const match = ISO_DATE_RE.exec(iso);
  if (!match) return getLocalTodayIso();
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1 + deltaMonths;
  const day = Number(match[3]);
  const targetFirst = new Date(year, monthIndex, 1);
  const maxDay = new Date(targetFirst.getFullYear(), targetFirst.getMonth() + 1, 0).getDate();
  return toIsoDate(targetFirst.getFullYear(), targetFirst.getMonth() + 1, Math.min(day, maxDay));
}

export function formatFrenchAriaDate(iso: string): string {
  const match = ISO_DATE_RE.exec(iso);
  if (!match) return iso;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const dt = new Date(year, month - 1, day);
  const weekdayIdx = (dt.getDay() + 6) % 7;
  const dayLabel = day === 1 ? '1er' : String(day);
  return `${WEEKDAYS_FR[weekdayIdx].full} ${dayLabel} ${MONTHS_FR[month - 1]} ${year}`;
}

export interface CalendarCell {
  iso: string;
  day: number;
  inCurrentMonth: boolean;
}

export function buildCalendarWeeks(year: number, monthIndex: number): CalendarCell[][] {
  const firstOfMonth = new Date(year, monthIndex, 1);
  const leadingOffset = (firstOfMonth.getDay() + 6) % 7;
  const startDate = new Date(year, monthIndex, 1 - leadingOffset);

  const weeks: CalendarCell[][] = [];
  for (let w = 0; w < 6; w += 1) {
    const row: CalendarCell[] = [];
    for (let d = 0; d < 7; d += 1) {
      const cellDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + w * 7 + d,
      );
      row.push({
        iso: toIsoDate(cellDate.getFullYear(), cellDate.getMonth() + 1, cellDate.getDate()),
        day: cellDate.getDate(),
        inCurrentMonth: cellDate.getMonth() === monthIndex,
      });
    }
    weeks.push(row);
  }
  return weeks;
}
