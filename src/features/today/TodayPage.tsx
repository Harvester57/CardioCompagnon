import { useMemo, useRef, useState } from 'react';
import { CalendarCheck2, CheckCircle2 } from 'lucide-react';
import {
  DEMO_REFERENCE_DATE,
  getTodayIsoDate,
  useActiveDb,
  useAppSettings,
  useDemoMode,
  useIntakeLogs,
  usePatientState,
} from '../../db';
import { evaluatePatientState } from '../../engine';
import { DisclaimerBanner } from '../../ui';
import { DailyCheckinForm } from './DailyCheckinForm';
import { DailyPillCheckin } from './DailyPillCheckin';
import { RecentHistoryList } from './RecentHistoryList';
import { TriageBanner } from './TriageBanner';
import { TrendsCharts } from './TrendsCharts';
import { formatFullDateFr } from './today-utils';

export function TodayPage() {
  const db = useActiveDb();
  const { isDemoMode, isReady } = useDemoMode();
  const { state, isLoading } = usePatientState();
  const { settings } = useAppSettings();

  const [editedDate, setEditedDate] = useState<string | null>(null);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);
  const formContainerRef = useRef<HTMLDivElement | null>(null);

  const effectiveReferenceDate =
    state?.referenceDate ?? (isDemoMode ? DEMO_REFERENCE_DATE : getTodayIsoDate());
  const activeDate = editedDate ?? effectiveReferenceDate;

  const intakeLogs = useIntakeLogs(activeDate);

  const evaluation = useMemo(() => (state ? evaluatePatientState(state) : undefined), [state]);

  if (!isReady || isLoading || !state || !evaluation) {
    return (
      <div className="space-y-4">
        <DisclaimerBanner variant="medical" />
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 text-sm text-[var(--text-secondary)]"
        >
          Chargement de votre suivi quotidien...
        </div>
      </div>
    );
  }

  const existingLog = state.dailyLogs.find((log) => log.date === activeDate);

  function handleTargetDateChange(nextDate: string) {
    setEditedDate(nextDate === effectiveReferenceDate ? null : nextDate);
    setSaveFeedback(null);
  }

  function handleEditFromHistory(date: string) {
    setEditedDate(date === effectiveReferenceDate ? null : date);
    setSaveFeedback(null);
    if (formContainerRef.current && typeof formContainerRef.current.scrollIntoView === 'function') {
      formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleSaved(date: string, wasUpdate: boolean) {
    setSaveFeedback(
      wasUpdate
        ? `Saisie du ${formatFullDateFr(date)} mise à jour dans votre journal local.`
        : `Saisie du ${formatFullDateFr(date)} enregistrée dans votre journal local.`,
    );
  }

  async function handleDeleteLog(id: number, date: string) {
    await db.dailyLogs.delete(id);
    if (editedDate === date) {
      setEditedDate(null);
    }
    setSaveFeedback(`Saisie du ${formatFullDateFr(date)} supprimée.`);
  }

  return (
    <div className="space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="m-0 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Aujourd&apos;hui
          </h1>
          <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
            Suivi matinal du poids, de la tension artérielle, de la fréquence cardiaque et des
            signes EPOF.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] tabular-nums">
          <CalendarCheck2 className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
          <span>Date de référence : {formatFullDateFr(effectiveReferenceDate)}</span>
        </div>
      </header>

      <TriageBanner evaluation={evaluation} />

      {saveFeedback && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 rounded-xl border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-4 py-3 text-sm font-medium text-[var(--status-stable-text)]"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{saveFeedback}</span>
        </div>
      )}

      <div ref={formContainerRef}>
        <DailyCheckinForm
          key={`${activeDate}-${existingLog?.id ?? 'new'}`}
          targetDate={activeDate}
          referenceDate={effectiveReferenceDate}
          existingLog={existingLog}
          dailyLogs={state.dailyLogs}
          dryWeightKg={state.profile.dryWeightKg}
          onTargetDateChange={handleTargetDateChange}
          onSaved={handleSaved}
        />
      </div>

      {settings.enableDailyPillCheckin && (
        <DailyPillCheckin
          date={activeDate}
          medications={state.medications}
          intakeLogs={intakeLogs}
        />
      )}

      <TrendsCharts
        dailyLogs={state.dailyLogs}
        referenceDate={effectiveReferenceDate}
        dryWeightKg={state.profile.dryWeightKg}
      />

      <RecentHistoryList
        dailyLogs={state.dailyLogs}
        selectedDate={activeDate}
        onEditDate={handleEditFromHistory}
        onDeleteLog={handleDeleteLog}
      />

      <DisclaimerBanner variant="medical" />
    </div>
  );
}

export default TodayPage;
