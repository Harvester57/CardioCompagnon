import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Pill } from 'lucide-react';
import type { Medication, MedicationIntakeLog, ScheduleSlot } from '../../types';
import { useActiveDb } from '../../db';
import { Card } from '../../ui';
import {
  SLOT_LABELS,
  SLOT_ORDER,
  formatFullDateFr,
  getMedicationSlots,
  isActiveMedication,
} from './today-utils';

export interface DailyPillCheckinProps {
  date: string;
  medications: readonly Medication[];
  intakeLogs: readonly MedicationIntakeLog[];
}

export function DailyPillCheckin({ date, medications, intakeLogs }: DailyPillCheckinProps) {
  const db = useActiveDb();

  const activeMeds = medications.filter(
    (med): med is Medication & { id: number } =>
      isActiveMedication(med) && typeof med.id === 'number',
  );

  const takenLookup = new Set<string>();
  for (const log of intakeLogs) {
    if (log.taken) {
      takenLookup.add(`${log.medicationId}::${log.slot}`);
    }
  }

  const slotGroups = SLOT_ORDER.map((slot) => ({
    slot,
    label: SLOT_LABELS[slot],
    items: activeMeds.filter((med) => getMedicationSlots(med).includes(slot)),
  })).filter((group) => group.items.length > 0);

  const totalScheduled = slotGroups.reduce((acc, group) => acc + group.items.length, 0);
  const totalTaken = slotGroups.reduce(
    (acc, group) =>
      acc + group.items.filter((med) => takenLookup.has(`${med.id}::${group.slot}`)).length,
    0,
  );

  async function toggleIntake(medicationId: number, slot: ScheduleSlot) {
    const existing = await db.intakeLogs
      .where('[date+medicationId+slot]')
      .equals([date, medicationId, slot])
      .first();

    if (existing?.id !== undefined) {
      const nextTaken = !existing.taken;
      await db.intakeLogs.update(existing.id, {
        taken: nextTaken,
        takenAt: nextTaken ? new Date().toISOString() : undefined,
      });
      return;
    }

    await db.intakeLogs.add({
      date,
      medicationId,
      slot,
      taken: true,
      takenAt: new Date().toISOString(),
    });
  }

  return (
    <Card
      title="Prise médicamenteuse quotidienne"
      subtitle={`Suivi optionnel des prises pour le ${formatFullDateFr(date)} (activable dans Paramètres).`}
      icon={<Pill className="h-5 w-5" />}
      headerAction={
        totalScheduled > 0 ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)] tabular-nums">
            <CheckCircle2 className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
            <span>
              {totalTaken} / {totalScheduled} {totalScheduled > 1 ? 'prises' : 'prise'}
            </span>
          </span>
        ) : undefined
      }
    >
      {slotGroups.length === 0 ? (
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-4 text-sm text-[var(--text-secondary)]">
          <p className="m-0">
            Aucun traitement actif n&apos;est encore enregistré dans votre dossier.
          </p>
          <Link
            to="/meds"
            className="mt-2 inline-flex font-semibold text-[var(--color-primary)] hover:underline"
          >
            Configurer vos traitements
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {slotGroups.map((group) => (
            <div
              key={group.slot}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3"
            >
              <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                <Clock className="h-3.5 w-3.5 text-[var(--color-primary)]" aria-hidden="true" />
                <span>{group.label}</span>
              </h3>
              <ul className="m-0 list-none space-y-2 p-0">
                {group.items.map((med) => {
                  const key = `${med.id}::${group.slot}`;
                  const checked = takenLookup.has(key);
                  const inputId = `pill-${date}-${group.slot}-${med.id}`;
                  const displayName = med.frenchBrand
                    ? `${med.innName} (${med.frenchBrand})`
                    : med.innName;

                  return (
                    <li key={key}>
                      <div
                        className={`touch-target flex items-center gap-3 rounded-xl border px-3 py-2 transition-colors ${
                          checked
                            ? 'border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] text-[var(--status-stable-text)]'
                            : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--color-primary)]'
                        }`}
                      >
                        <input
                          id={inputId}
                          type="checkbox"
                          checked={checked}
                          onChange={() => void toggleIntake(med.id, group.slot)}
                          className="h-5 w-5 shrink-0 cursor-pointer accent-[var(--color-primary)]"
                        />
                        <div className="min-w-0 flex-1">
                          <label
                            htmlFor={inputId}
                            className="block cursor-pointer truncate text-sm font-medium"
                          >
                            {displayName}
                          </label>
                          <div className="text-xs text-[var(--text-secondary)] tabular-nums">
                            {med.doseLabel}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
