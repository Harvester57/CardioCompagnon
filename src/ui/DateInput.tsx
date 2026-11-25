import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  ISO_DATE_RE,
  MONTHS_FR,
  WEEKDAYS_FR,
  buildCalendarWeeks,
  formatFrenchAriaDate,
  formatIsoToFrenchDate,
  getLocalTodayIso,
  isOutOfRange,
  parseFrenchOrIsoDate,
  shiftIsoDays,
  shiftIsoMonths,
} from './date-utils';

export interface DateInputProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (isoDate: string) => void;
  min?: string;
  max?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  allowClear?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  className?: string;
}

const DEFAULT_INPUT_CLASS =
  'touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums';

export function DateInput({
  id,
  name,
  value,
  onChange,
  min,
  max,
  required = false,
  disabled = false,
  placeholder = 'JJ/MM/AAAA',
  allowClear,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  className = DEFAULT_INPUT_CLASS,
}: DateInputProps) {
  const generatedId = useId();
  const popoverId = `${generatedId}-calendar`;
  const monthLabelId = `${generatedId}-month-label`;

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const todayIso = useMemo(() => getLocalTodayIso(), []);
  const formattedValue = useMemo(() => formatIsoToFrenchDate(value), [value]);

  const [draft, setDraft] = useState<string>(formattedValue);
  const [isEditingText, setIsEditingText] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const anchorIso = value && ISO_DATE_RE.test(value) ? value : todayIso;
  const [viewYear, setViewYear] = useState<number>(() => Number(anchorIso.slice(0, 4)));
  const [viewMonth, setViewMonth] = useState<number>(() => Number(anchorIso.slice(5, 7)) - 1);
  const [focusedIso, setFocusedIso] = useState<string>(anchorIso);
  const [popoverStyle, setPopoverStyle] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const canClear = allowClear ?? !required;
  const displayValue = isEditingText ? draft : formattedValue;

  const updatePopoverPosition = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const estimatedWidth = popoverRef.current?.offsetWidth || 304;
    const estimatedHeight = popoverRef.current?.offsetHeight || 348;
    const margin = 8;

    let top = rect.bottom + 6;
    if (top + estimatedHeight > window.innerHeight - margin && rect.top > estimatedHeight + margin) {
      top = rect.top - estimatedHeight - 6;
    }

    let left = rect.left;
    if (left + estimatedWidth > window.innerWidth - margin) {
      left = Math.max(margin, window.innerWidth - estimatedWidth - margin);
    }
    if (left < margin) {
      left = margin;
    }

    setPopoverStyle({ top, left });
  }, []);

  const openCalendar = useCallback(() => {
    if (disabled) return;
    const baseIso = value && ISO_DATE_RE.test(value) ? value : todayIso;
    setViewYear(Number(baseIso.slice(0, 4)));
    setViewMonth(Number(baseIso.slice(5, 7)) - 1);
    setFocusedIso(baseIso);
    updatePopoverPosition();
    setIsOpen(true);
  }, [disabled, todayIso, updatePopoverPosition, value]);

  const closeCalendar = useCallback((returnFocus: boolean) => {
    setIsOpen(false);
    if (returnFocus) {
      triggerRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updatePopoverPosition();

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (containerRef.current?.contains(target) || popoverRef.current?.contains(target)) {
        return;
      }
      closeCalendar(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeCalendar(true);
      }
    };

    const handleReposition = () => {
      updatePopoverPosition();
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
    };
  }, [closeCalendar, isOpen, updatePopoverPosition]);

  useEffect(() => {
    if (!isOpen) return;
    const frame = window.requestAnimationFrame(() => {
      const targetBtn = popoverRef.current?.querySelector<HTMLButtonElement>(
        `button[data-iso="${focusedIso}"]`,
      );
      targetBtn?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [focusedIso, isOpen, viewMonth, viewYear]);

  const handleTextChange = (raw: string) => {
    setIsEditingText(true);
    setDraft(raw);

    if (raw.trim() === '') {
      if (canClear) {
        onChange('');
      }
      return;
    }

    const parsed = parseFrenchOrIsoDate(raw);
    if (parsed && !isOutOfRange(parsed, min, max)) {
      onChange(parsed);
    }
  };

  const handleTextBlur = () => {
    setIsEditingText(false);
    const trimmed = draft.trim();
    if (trimmed === '') {
      if (canClear) {
        onChange('');
      }
      setDraft(canClear ? '' : formattedValue);
      return;
    }

    const parsed = parseFrenchOrIsoDate(trimmed);
    if (parsed && !isOutOfRange(parsed, min, max)) {
      onChange(parsed);
      setDraft(formatIsoToFrenchDate(parsed));
    } else {
      setDraft(formattedValue);
    }
  };

  const handleSelectDate = (iso: string) => {
    if (isOutOfRange(iso, min, max)) return;
    onChange(iso);
    setDraft(formatIsoToFrenchDate(iso));
    setIsEditingText(false);
    closeCalendar(true);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleGridKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, iso: string) => {
    let nextIso: string | null = null;
    if (event.key === 'ArrowRight') nextIso = shiftIsoDays(iso, 1);
    else if (event.key === 'ArrowLeft') nextIso = shiftIsoDays(iso, -1);
    else if (event.key === 'ArrowDown') nextIso = shiftIsoDays(iso, 7);
    else if (event.key === 'ArrowUp') nextIso = shiftIsoDays(iso, -7);
    else if (event.key === 'PageDown') nextIso = shiftIsoMonths(iso, 1);
    else if (event.key === 'PageUp') nextIso = shiftIsoMonths(iso, -1);

    if (!nextIso) return;
    event.preventDefault();
    setFocusedIso(nextIso);
    setViewYear(Number(nextIso.slice(0, 4)));
    setViewMonth(Number(nextIso.slice(5, 7)) - 1);
  };

  const weeks = useMemo(() => buildCalendarWeeks(viewYear, viewMonth), [viewYear, viewMonth]);

  const yearOptions = useMemo(() => {
    const currentYear = Number(todayIso.slice(0, 4));
    const minYear = min && ISO_DATE_RE.test(min) ? Number(min.slice(0, 4)) : 1920;
    const maxYear = max && ISO_DATE_RE.test(max) ? Number(max.slice(0, 4)) : currentYear + 15;
    const startYear = Math.min(minYear, viewYear, currentYear - 10);
    const endYear = Math.max(maxYear, viewYear, currentYear + 5);
    const years: number[] = [];
    for (let y = startYear; y <= endYear; y += 1) {
      years.push(y);
    }
    return years;
  }, [max, min, todayIso, viewYear]);

  const todayDisabled = isOutOfRange(todayIso, min, max);
  const currentMonthTitle = `${MONTHS_FR[viewMonth].charAt(0).toUpperCase()}${MONTHS_FR[viewMonth].slice(1)} ${viewYear}`;

  const popoverContent =
    isOpen && typeof document !== 'undefined'
      ? createPortal(
          <div
            ref={popoverRef}
            id={popoverId}
            role="dialog"
            aria-modal="false"
            aria-labelledby={monthLabelId}
            style={{ top: `${popoverStyle.top}px`, left: `${popoverStyle.left}px` }}
            className="fixed z-50 w-[19rem] max-w-[calc(100vw-1rem)] rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] p-3 shadow-xl"
          >
            <span id={monthLabelId} className="sr-only">
              Calendrier — {currentMonthTitle}
            </span>

            <div className="mb-2.5 flex items-center justify-between gap-1.5">
              <button
                type="button"
                onClick={handlePrevMonth}
                aria-label="Mois précédent"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)]"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
                <select
                  aria-label="Mois"
                  value={viewMonth}
                  onChange={(e) => setViewMonth(Number(e.target.value))}
                  className="min-w-0 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-app)] px-2 py-1.5 text-xs font-semibold capitalize text-[var(--text-primary)]"
                >
                  {MONTHS_FR.map((label, index) => (
                    <option key={label} value={index}>
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  aria-label="Année"
                  value={viewYear}
                  onChange={(e) => setViewYear(Number(e.target.value))}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-app)] px-2 py-1.5 text-xs font-semibold text-[var(--text-primary)] tabular-nums"
                >
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Mois suivant"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)]"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <table className="w-full border-collapse text-center">
              <thead>
                <tr>
                  {WEEKDAYS_FR.map((day) => (
                    <th
                      key={day.full}
                      scope="col"
                      abbr={day.full}
                      className="pb-1.5 text-[11px] font-semibold text-[var(--text-secondary)]"
                    >
                      {day.short}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weeks.map((week) => (
                  <tr key={week[0].iso}>
                    {week.map((cell) => {
                      const isSelected = value === cell.iso;
                      const isToday = todayIso === cell.iso;
                      const isCellDisabled = isOutOfRange(cell.iso, min, max);
                      const isTabTarget = focusedIso === cell.iso;

                      return (
                        <td key={cell.iso} className="p-0.5">
                          <button
                            type="button"
                            data-iso={cell.iso}
                            disabled={isCellDisabled}
                            tabIndex={isTabTarget ? 0 : -1}
                            aria-label={formatFrenchAriaDate(cell.iso)}
                            aria-pressed={isSelected}
                            aria-current={isToday ? 'date' : undefined}
                            onClick={() => handleSelectDate(cell.iso)}
                            onKeyDown={(e) => handleGridKeyDown(e, cell.iso)}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-medium tabular-nums transition-colors ${
                              isSelected
                                ? 'bg-[var(--color-primary)] font-semibold text-white'
                                : isToday
                                  ? 'border border-[var(--color-primary)] bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary)] hover:bg-[var(--border-subtle)]'
                                  : cell.inCurrentMonth
                                    ? 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                                    : 'text-[var(--text-secondary)] opacity-55 hover:bg-[var(--bg-subtle)]'
                            } disabled:cursor-not-allowed disabled:opacity-30`}
                          >
                            {cell.day}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-2.5 flex items-center justify-between border-t border-[var(--border-subtle)] pt-2">
              {canClear ? (
                <button
                  type="button"
                  onClick={() => {
                    onChange('');
                    setDraft('');
                    setIsEditingText(false);
                    closeCalendar(true);
                  }}
                  className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
                >
                  Effacer
                </button>
              ) : (
                <span />
              )}

              <button
                type="button"
                disabled={todayDisabled}
                onClick={() => handleSelectDate(todayIso)}
                className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Aujourd&apos;hui
              </button>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div ref={containerRef} className="relative flex w-full items-center">
      <input
        id={id}
        name={name}
        type="text"
        inputMode="numeric"
        autoComplete="off"
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        value={displayValue}
        onFocus={() => {
          setDraft(formattedValue);
          setIsEditingText(true);
        }}
        onChange={(e) => handleTextChange(e.target.value)}
        onBlur={handleTextBlur}
        className={`${className} pr-11`}
      />
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        aria-label={isOpen ? 'Fermer le calendrier' : 'Ouvrir le calendrier'}
        aria-expanded={isOpen}
        aria-controls={popoverId}
        onClick={() => {
          if (isOpen) {
            closeCalendar(false);
          } else {
            openCalendar();
          }
        }}
        className="absolute right-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Calendar className="h-4 w-4" aria-hidden="true" />
      </button>
      {popoverContent}
    </div>
  );
}
