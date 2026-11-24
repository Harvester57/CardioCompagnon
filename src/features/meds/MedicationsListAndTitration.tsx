import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  History,
  Pencil,
  Pill,
  Plus,
  Trash2,
  TrendingUp,
} from 'lucide-react';
import type { DoseChangeEvent, Medication } from '../../types';
import { Card } from '../../ui';
import {
  MEDICATION_GROUPS,
  MEDICATION_STATUS_META,
  PILLAR_META,
  SCHEDULE_SLOTS,
  SUBCLASS_LABELS,
  clampPercent,
  findMedicationReference,
  formatIsoDateFr,
  formatMedicationDisplayName,
} from './medsHelpers';

export interface MedicationsListAndTitrationProps {
  medications: Medication[];
  doseChanges: DoseChangeEvent[];
  onAddMedication: () => void;
  onEditMedication: (medication: Medication) => void;
  onDeleteMedication: (medicationId: number) => Promise<void>;
  onOpenDoseChange: (medication: Medication) => void;
  onDeleteDoseChange: (eventId: number) => Promise<void>;
}

const SLOT_LABEL_MAP = new Map(SCHEDULE_SLOTS.map((s) => [s.key, s.labelFr]));

export function MedicationsListAndTitration({
  medications,
  doseChanges,
  onAddMedication,
  onEditMedication,
  onDeleteMedication,
  onOpenDoseChange,
  onDeleteDoseChange,
}: MedicationsListAndTitrationProps) {
  const [confirmDeleteMedId, setConfirmDeleteMedId] = useState<number | null>(null);
  const [historyMedFilter, setHistoryMedFilter] = useState<string>('all');

  const medById = new Map<number, Medication>();
  for (const med of medications) {
    if (med.id !== undefined) {
      medById.set(med.id, med);
    }
  }

  const sortedDoseChanges = [...doseChanges]
    .filter((dc) => historyMedFilter === 'all' || String(dc.medicationId) === historyMedFilter)
    .sort((a, b) => {
      const dateCmp = b.date.localeCompare(a.date);
      if (dateCmp !== 0) return dateCmp;
      return (b.id ?? 0) - (a.id ?? 0);
    });

  return (
    <div className="space-y-5">
      {/* Liste complete des traitements */}
      <Card
        title="Liste complète de vos traitements"
        subtitle="4 piliers de fond, diurétiques de l'anse, prévention secondaire coronaire, traitements additionnels et autres médicaments."
        icon={<Pill className="h-5 w-5" />}
        headerAction={
          <button
            type="button"
            onClick={onAddMedication}
            className="touch-target inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)]"
          >
            <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Ajouter un traitement</span>
          </button>
        }
      >
        {medications.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)] p-6 text-center">
            <p className="text-sm text-[var(--text-secondary)]">
              Aucun traitement enregistré pour le moment. Commencez par ajouter vos médicaments
              prescrits à partir de votre ordonnance.
            </p>
            <button
              type="button"
              onClick={onAddMedication}
              className="touch-target mt-3 inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)]"
            >
              <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Ajouter mon premier traitement</span>
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {MEDICATION_GROUPS.map((group) => {
              const groupMeds = medications.filter((m) => group.pillars.includes(m.pillar));
              if (groupMeds.length === 0) return null;

              return (
                <section key={group.id} aria-label={group.titleFr} className="space-y-2.5">
                  <div className="flex items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-1.5">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {group.titleFr}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)]">{group.subtitleFr}</p>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-secondary)] tabular-nums">
                      {groupMeds.length}
                    </span>
                  </div>

                  <ul className="m-0 list-none space-y-2.5 p-0">
                    {groupMeds.map((med) => {
                      const ref = findMedicationReference(med);
                      const percent = clampPercent(med.dosePercentOfTarget);
                      const isConfirmingDelete =
                        med.id !== undefined && confirmDeleteMedId === med.id;

                      return (
                        <li
                          key={med.id ?? `${med.pillar}-${med.innName}`}
                          className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-app)] p-3.5"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="min-w-0 space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-semibold text-[var(--text-primary)]">
                                  {formatMedicationDisplayName(med)}
                                </span>
                                <span
                                  className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${MEDICATION_STATUS_META[med.status].badgeClasses}`}
                                >
                                  {MEDICATION_STATUS_META[med.status].labelFr}
                                </span>
                                <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">
                                  {med.subClass
                                    ? SUBCLASS_LABELS[med.subClass]
                                    : PILLAR_META[med.pillar].shortLabelFr}
                                </span>
                              </div>

                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--text-secondary)]">
                                <span className="font-medium text-[var(--text-primary)] tabular-nums">
                                  Dose : {med.doseLabel}
                                </span>
                                {percent !== undefined && (
                                  <span className="tabular-nums">Cible : {percent} %</span>
                                )}
                                {med.scheduleSlots && med.scheduleSlots.length > 0 && (
                                  <span>
                                    Prises :{' '}
                                    {med.scheduleSlots
                                      .map((slot) => SLOT_LABEL_MAP.get(slot) ?? slot)
                                      .join(', ')}
                                  </span>
                                )}
                                {med.lastDoseChangeAt && (
                                  <span className="tabular-nums">
                                    Dernier palier : {formatIsoDateFr(med.lastDoseChangeAt)}
                                  </span>
                                )}
                              </div>

                              {med.notPrescribedReason && (
                                <p className="text-xs text-[var(--text-secondary)]">
                                  <strong className="text-[var(--text-primary)]">
                                    Raison documentée :
                                  </strong>{' '}
                                  {med.notPrescribedReason}
                                </p>
                              )}

                              {med.sideEffectsNote && (
                                <p className="text-xs text-[var(--text-secondary)]">
                                  <strong className="text-[var(--text-primary)]">
                                    Note de tolérance :
                                  </strong>{' '}
                                  {med.sideEffectsNote}
                                </p>
                              )}

                              {ref && (
                                <Link
                                  to={`/library?article=${encodeURIComponent(ref.articleSlug)}`}
                                  className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-primary)] hover:underline"
                                >
                                  <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                  <span>Fiche scientifique ({ref.innNameFr})</span>
                                </Link>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-1.5">
                              {med.id !== undefined && (
                                <button
                                  type="button"
                                  onClick={() => onOpenDoseChange(med)}
                                  className="touch-target inline-flex items-center gap-1 rounded-lg bg-[var(--color-primary-soft)] px-2.5 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:opacity-90"
                                >
                                  <TrendingUp className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                  <span>Nouveau palier de dose</span>
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => onEditMedication(med)}
                                aria-label={`Modifier ${med.innName}`}
                                className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                              >
                                <Pencil className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                <span>Modifier</span>
                              </button>

                              {med.id !== undefined && !isConfirmingDelete && (
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteMedId(med.id ?? null)}
                                  aria-label={`Supprimer ${med.innName}`}
                                  className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--status-urgent-text)] hover:bg-[var(--status-urgent-bg)]"
                                >
                                  <Trash2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                                  <span>Supprimer</span>
                                </button>
                              )}

                              {med.id !== undefined && isConfirmingDelete && (
                                <div className="flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const idToDelete = med.id;
                                      setConfirmDeleteMedId(null);
                                      if (idToDelete !== undefined) {
                                        void onDeleteMedication(idToDelete);
                                      }
                                    }}
                                    className="touch-target rounded-lg bg-[var(--status-urgent-text)] px-2.5 py-1.5 text-xs font-semibold text-white"
                                  >
                                    Confirmer
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setConfirmDeleteMedId(null)}
                                    className="touch-target rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-primary)]"
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
                </section>
              );
            })}
          </div>
        )}
      </Card>

      {/* Journal chronologique des titrations */}
      <Card
        title="Journal chronologique des titrations"
        subtitle="Historique des changements de palier de dose pour suivre la progression avec votre cardiologue et préparer vos bilans."
        icon={<History className="h-5 w-5" />}
        headerAction={
          medications.length > 0 ? (
            <div className="flex items-center gap-2">
              <label htmlFor="titration-history-filter" className="sr-only">
                Filtrer le journal par médicament
              </label>
              <select
                id="titration-history-filter"
                value={historyMedFilter}
                onChange={(e) => setHistoryMedFilter(e.target.value)}
                className="rounded-lg border border-[var(--border-strong)] bg-[var(--bg-app)] px-2.5 py-1.5 text-xs text-[var(--text-primary)]"
              >
                <option value="all">Tous les traitements ({doseChanges.length})</option>
                {medications
                  .filter((m) => m.id !== undefined)
                  .map((m) => (
                    <option key={m.id} value={String(m.id)}>
                      {formatMedicationDisplayName(m)}
                    </option>
                  ))}
              </select>
            </div>
          ) : undefined
        }
      >
        {sortedDoseChanges.length === 0 ? (
          <p className="text-sm text-[var(--text-secondary)]">
            Aucun changement de palier enregistré pour ce filtre. Utilisez le bouton « Nouveau
            palier de dose » sur un traitement pour consigner chaque étape de titration.
          </p>
        ) : (
          <ol className="m-0 list-none space-y-3 p-0">
            {sortedDoseChanges.map((event) => {
              const med = medById.get(event.medicationId);
              const medName = med
                ? formatMedicationDisplayName(med)
                : `Traitement #${event.medicationId}`;
              const needsRenalReminder =
                med !== undefined && (med.pillar === 'raas_arni' || med.pillar === 'mra');

              return (
                <li
                  key={event.id ?? `${event.medicationId}-${event.date}-${event.newDoseLabel}`}
                  className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-app)] p-3.5"
                >
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <time
                        dateTime={event.date}
                        className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-0.5 text-xs font-semibold text-[var(--text-primary)] tabular-nums"
                      >
                        {formatIsoDateFr(event.date)}
                      </time>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {medName}
                      </span>
                      {needsRenalReminder && (
                        <span className="rounded-md border border-[var(--status-action-border)] bg-[var(--status-action-bg)] px-2 py-0.5 text-[11px] font-medium text-[var(--status-action-text)]">
                          Bilan créatinine / K+ à 1–2 sem.
                        </span>
                      )}
                    </div>

                    <p className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--text-primary)] tabular-nums">
                      {event.previousDoseLabel ? (
                        <>
                          <span className="text-[var(--text-secondary)]">
                            {event.previousDoseLabel}
                          </span>
                          <ArrowRight
                            className="h-3.5 w-3.5 shrink-0 text-[var(--color-primary)]"
                            aria-hidden="true"
                          />
                          <strong className="font-semibold">{event.newDoseLabel}</strong>
                        </>
                      ) : (
                        <strong className="font-semibold">{event.newDoseLabel}</strong>
                      )}
                    </p>

                    {event.reason && (
                      <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                        {event.reason}
                      </p>
                    )}
                  </div>

                  {event.id !== undefined && (
                    <button
                      type="button"
                      onClick={() => void onDeleteDoseChange(event.id as number)}
                      aria-label={`Supprimer l'entrée de titration du ${formatIsoDateFr(event.date)}`}
                      className="touch-target inline-flex items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] p-2 text-[var(--text-secondary)] hover:text-[var(--status-urgent-text)]"
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  )}
                </li>
              );
            })}
          </ol>
        )}
      </Card>
    </div>
  );
}
