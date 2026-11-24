import { useState } from 'react';
import { CalendarDays, Edit3, Trash2 } from 'lucide-react';
import type { DailyLog } from '../../types';
import { formatWeightKgFr } from '../../engine';
import { Card } from '../../ui';
import { formatFullDateFr, summarizeSymptomsFr } from './today-utils';

export interface RecentHistoryListProps {
  dailyLogs: readonly DailyLog[];
  selectedDate: string;
  onEditDate: (date: string) => void;
  onDeleteLog: (id: number, date: string) => Promise<void>;
}

const DEFAULT_VISIBLE_COUNT = 10;

export function RecentHistoryList({
  dailyLogs,
  selectedDate,
  onEditDate,
  onDeleteLog,
}: RecentHistoryListProps) {
  const [showAll, setShowAll] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const reversedLogs = [...dailyLogs].reverse();
  const visibleLogs = showAll ? reversedLogs : reversedLogs.slice(0, DEFAULT_VISIBLE_COUNT);

  async function handleConfirmDelete(log: DailyLog) {
    if (log.id === undefined) return;
    setDeletingId(log.id);
    try {
      await onDeleteLog(log.id, log.date);
      setConfirmDeleteId(null);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <Card
      title="Historique récent des saisies"
      subtitle={
        dailyLogs.length > 0
          ? `${dailyLogs.length} ${dailyLogs.length > 1 ? 'relevés enregistrés' : 'relevé enregistré'} localement.`
          : 'Vos relevés quotidiens apparaîtront ici.'
      }
      icon={<CalendarDays className="h-5 w-5" />}
    >
      {reversedLogs.length === 0 ? (
        <p className="m-0 rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)] p-4 text-sm text-[var(--text-secondary)]">
          Aucune saisie enregistrée pour le moment. Commencez par votre pesée matinale ci-dessus.
        </p>
      ) : (
        <div className="space-y-3">
          <ul className="m-0 list-none space-y-2.5 p-0">
            {visibleLogs.map((log) => {
              const symptomBadges = summarizeSymptomsFr(log.symptoms);
              const isSelected = log.date === selectedDate;
              const isConfirming = log.id !== undefined && confirmDeleteId === log.id;

              return (
                <li
                  key={log.id ?? log.date}
                  className={`rounded-xl border p-3.5 transition-colors ${
                    isSelected
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)]'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)]'
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm tabular-nums">
                        <span className="font-semibold text-[var(--text-primary)]">
                          {formatFullDateFr(log.date)}
                        </span>
                        {typeof log.weightKg === 'number' && (
                          <span className="font-semibold text-[var(--color-primary)]">
                            {formatWeightKgFr(log.weightKg)}
                          </span>
                        )}
                        {typeof log.systolicBp === 'number' && (
                          <span className="text-[var(--text-secondary)]">
                            TA {log.systolicBp}/{log.diastolicBp ?? '--'} mmHg
                          </span>
                        )}
                        {typeof log.heartRateBpm === 'number' && (
                          <span className="text-[var(--text-secondary)]">
                            FC {log.heartRateBpm} bpm
                          </span>
                        )}
                      </div>

                      {symptomBadges.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {symptomBadges.map((badge) => (
                            <span
                              key={badge}
                              className="inline-flex rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-primary)]"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="m-0 text-xs text-[var(--text-secondary)]">
                          Aucun symptôme signalé
                        </p>
                      )}

                      {log.notes && (
                        <p className="m-0 text-xs leading-relaxed text-[var(--text-secondary)]">
                          {log.notes}
                        </p>
                      )}
                    </div>

                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onEditDate(log.date)}
                        aria-label={`Modifier la saisie du ${formatFullDateFr(log.date)}`}
                        className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                      >
                        <Edit3 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Modifier</span>
                      </button>

                      {log.id !== undefined && !isConfirming && (
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(log.id ?? null)}
                          aria-label={`Supprimer la saisie du ${formatFullDateFr(log.date)}`}
                          className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-xs font-semibold text-[var(--status-urgent-text)] hover:border-[var(--status-urgent-border)] hover:bg-[var(--status-urgent-bg)]"
                        >
                          <Trash2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>Supprimer</span>
                        </button>
                      )}

                      {isConfirming && (
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={deletingId === log.id}
                            onClick={() => void handleConfirmDelete(log)}
                            className="touch-target inline-flex items-center rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3 py-2 text-xs font-semibold text-[var(--status-urgent-text)]"
                          >
                            Confirmer
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(null)}
                            className="touch-target inline-flex items-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)]"
                          >
                            Annuler
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {reversedLogs.length > DEFAULT_VISIBLE_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="touch-target w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-4 py-2.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--border-subtle)]"
            >
              {showAll
                ? 'Afficher uniquement les 10 dernières saisies'
                : `Afficher tout l'historique (${reversedLogs.length} saisies)`}
            </button>
          )}
        </div>
      )}
    </Card>
  );
}
