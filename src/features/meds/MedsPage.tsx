import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pill, ShieldCheck, Thermometer } from 'lucide-react';
import { INTERACTIONS_CATALOG } from '../../content/fr';
import { saveProfile, useActiveDb, usePatientState } from '../../db';
import { evaluatePatientState } from '../../engine';
import type { Medication, MedicationPillar } from '../../types';
import { Card, DisclaimerBanner } from '../../ui';
import { DoseChangeModal, type DoseChangeSubmission } from './DoseChangeModal';
import { FourPillarsDashboard } from './FourPillarsDashboard';
import { InteractionsChecker } from './InteractionsChecker';
import { MedicationFormModal } from './MedicationFormModal';
import { MedicationsListAndTitration } from './MedicationsListAndTitration';
import { SickDayPlanSection } from './SickDayPlanSection';
import {
  FOUR_PILLAR_KEYS,
  PILLAR_META,
  getPillarDashboardSummary,
  isMedicationActive,
  type FoundationalPillarKey,
} from './medsHelpers';

type MedsTab = 'treatments' | 'interactions' | 'sickday';

function resolveTab(rawTab: string | null): MedsTab {
  if (rawTab === 'interactions') return 'interactions';
  if (rawTab === 'sickday' || rawTab === 'maladie') return 'sickday';
  return 'treatments';
}

export function MedsPage() {
  const db = useActiveDb();
  const { state, isLoading } = usePatientState();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = resolveTab(searchParams.get('tab'));

  const [formState, setFormState] = useState<
    | { mode: 'closed' }
    | { mode: 'add'; defaultPillar?: MedicationPillar }
    | { mode: 'edit'; medication: Medication }
  >({ mode: 'closed' });

  const [doseChangeTarget, setDoseChangeTarget] = useState<Medication | null>(null);

  const evaluation = useMemo(() => {
    if (!state) return null;
    return evaluatePatientState(state);
  }, [state]);

  const medicationAlerts = useMemo(() => {
    if (!evaluation) return [];
    return evaluation.outputs.filter((output) => output.category === 'medications');
  }, [evaluation]);

  function selectTab(nextTab: MedsTab) {
    if (nextTab === 'treatments') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ tab: nextTab }, { replace: true });
    }
  }

  async function handleSaveMedication(payload: Omit<Medication, 'id'>, existingId?: number) {
    if (existingId !== undefined) {
      await db.medications.update(existingId, payload);
    } else {
      await db.medications.add(payload);
    }
    setFormState({ mode: 'closed' });
  }

  async function handleDeleteMedication(medicationId: number) {
    await db.transaction('rw', [db.medications, db.doseChanges, db.intakeLogs], async () => {
      await db.medications.delete(medicationId);
      await db.doseChanges.where('medicationId').equals(medicationId).delete();
      await db.intakeLogs.where('medicationId').equals(medicationId).delete();
    });
    if (doseChangeTarget?.id === medicationId) {
      setDoseChangeTarget(null);
    }
  }

  async function handleSubmitDoseChange(submission: DoseChangeSubmission) {
    await db.transaction('rw', [db.medications, db.doseChanges], async () => {
      await db.doseChanges.add({
        medicationId: submission.medicationId,
        date: submission.date,
        previousDoseLabel: submission.previousDoseLabel,
        newDoseLabel: submission.newDoseLabel,
        reason: submission.reason,
      });

      await db.medications.update(submission.medicationId, {
        doseLabel: submission.newDoseLabel,
        lastDoseChangeAt: submission.date,
        status: submission.status,
        ...(submission.dosePercentOfTarget !== undefined
          ? { dosePercentOfTarget: submission.dosePercentOfTarget }
          : {}),
      });
    });
    setDoseChangeTarget(null);
  }

  async function handleDeleteDoseChange(eventId: number) {
    await db.doseChanges.delete(eventId);
  }

  async function handleSaveNotPrescribedReason(
    pillar: FoundationalPillarKey,
    reason: string,
    existingMedication?: Medication,
  ) {
    if (existingMedication?.id !== undefined) {
      await db.medications.update(existingMedication.id, {
        notPrescribedReason: reason,
        status: 'stopped',
      });
    } else {
      await db.medications.add({
        pillar,
        innName: `${PILLAR_META[pillar].shortLabelFr} (non prescrit)`,
        doseLabel: 'Non prescrit',
        status: 'stopped',
        notPrescribedReason: reason,
      });
    }
  }

  async function handleSaveSickDayNote(note: string) {
    await saveProfile(db, { sickDayPlanNote: note });
  }

  if (isLoading || !state) {
    return (
      <div className="space-y-4">
        <DisclaimerBanner variant="medical" />
        <div
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 text-sm text-[var(--text-secondary)]"
        >
          Chargement de vos traitements en cours...
        </div>
      </div>
    );
  }

  const activePillarsCount = FOUR_PILLAR_KEYS.filter(
    (pillar) => getPillarDashboardSummary(pillar, state.medications).activeMeds.length > 0,
  ).length;
  const activeMedsCount = state.medications.filter(isMedicationActive).length;

  return (
    <div className="space-y-5">
      <DisclaimerBanner variant="medical" />

      {/* En-tete du module */}
      <Card>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Traitements &amp; Sécurité
            </h1>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Suivez vos 4 piliers ESC 2026, votre journal de titration, les interactions
              documentées et votre fiche personnalisée « jours de maladie ».
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs tabular-nums">
            <span className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1.5 font-semibold text-[var(--text-primary)]">
              {activePillarsCount} / 4 piliers actifs
            </span>
            <span className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1.5 font-semibold text-[var(--text-primary)]">
              {activeMedsCount} traitement{activeMedsCount > 1 ? 's' : ''} actif
              {activeMedsCount > 1 ? 's' : ''}
            </span>
            <span className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1.5 font-semibold text-[var(--text-primary)]">
              {state.doseChanges.length} palier{state.doseChanges.length > 1 ? 's' : ''} consigné
              {state.doseChanges.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Barre d'onglets */}
        <div
          role="tablist"
          aria-label="Sections du module Traitements et Sécurité"
          className="mt-4 flex flex-wrap gap-2 border-t border-[var(--border-subtle)] pt-3"
        >
          <button
            type="button"
            role="tab"
            id="tab-treatments"
            aria-selected={activeTab === 'treatments'}
            aria-controls="panel-treatments"
            onClick={() => selectTab('treatments')}
            className={`touch-target inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
              activeTab === 'treatments'
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <Pill className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>4 piliers &amp; Traitements</span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-interactions"
            aria-selected={activeTab === 'interactions'}
            aria-controls="panel-interactions"
            onClick={() => selectTab('interactions')}
            className={`touch-target inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
              activeTab === 'interactions'
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Sécurité &amp; Interactions</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs tabular-nums ${
                activeTab === 'interactions'
                  ? 'bg-white/20 text-white'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)]'
              }`}
            >
              {INTERACTIONS_CATALOG.length}
            </span>
          </button>

          <button
            type="button"
            role="tab"
            id="tab-sickday"
            aria-selected={activeTab === 'sickday'}
            aria-controls="panel-sickday"
            onClick={() => selectTab('sickday')}
            className={`touch-target inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
              activeTab === 'sickday'
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
            }`}
          >
            <Thermometer className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Jours de maladie</span>
          </button>
        </div>
      </Card>

      {/* Onglet 1 : 4 piliers, alertes, gestion des traitements & journal de titration */}
      {activeTab === 'treatments' && (
        <div
          role="tabpanel"
          id="panel-treatments"
          aria-labelledby="tab-treatments"
          className="space-y-5"
        >
          {formState.mode !== 'closed' && (
            <MedicationFormModal
              initialMedication={formState.mode === 'edit' ? formState.medication : undefined}
              defaultPillar={formState.mode === 'add' ? formState.defaultPillar : undefined}
              referenceDate={state.referenceDate}
              onSave={handleSaveMedication}
              onCancel={() => setFormState({ mode: 'closed' })}
            />
          )}

          {doseChangeTarget && (
            <DoseChangeModal
              medication={doseChangeTarget}
              referenceDate={state.referenceDate}
              onSubmit={handleSubmitDoseChange}
              onCancel={() => setDoseChangeTarget(null)}
            />
          )}

          <FourPillarsDashboard
            profile={state.profile}
            medications={state.medications}
            medicationAlerts={medicationAlerts}
            onAddMedicationForPillar={(pillar) => {
              setDoseChangeTarget(null);
              setFormState({ mode: 'add', defaultPillar: pillar });
            }}
            onEditMedication={(medication) => {
              setDoseChangeTarget(null);
              setFormState({ mode: 'edit', medication });
            }}
            onOpenDoseChange={(medication) => {
              setFormState({ mode: 'closed' });
              setDoseChangeTarget(medication);
            }}
            onSaveNotPrescribedReason={handleSaveNotPrescribedReason}
          />

          <MedicationsListAndTitration
            medications={state.medications}
            doseChanges={state.doseChanges}
            onAddMedication={() => {
              setDoseChangeTarget(null);
              setFormState({ mode: 'add' });
            }}
            onEditMedication={(medication) => {
              setDoseChangeTarget(null);
              setFormState({ mode: 'edit', medication });
            }}
            onDeleteMedication={handleDeleteMedication}
            onOpenDoseChange={(medication) => {
              setFormState({ mode: 'closed' });
              setDoseChangeTarget(medication);
            }}
            onDeleteDoseChange={handleDeleteDoseChange}
          />
        </div>
      )}

      {/* Onglet 2 : Verificateur interactions & complements */}
      {activeTab === 'interactions' && (
        <div
          role="tabpanel"
          id="panel-interactions"
          aria-labelledby="tab-interactions"
        >
          <InteractionsChecker medications={state.medications} />
        </div>
      )}

      {/* Onglet 3 : Fiche personnalisable Jours de maladie */}
      {activeTab === 'sickday' && (
        <div
          role="tabpanel"
          id="panel-sickday"
          aria-labelledby="tab-sickday"
        >
          <SickDayPlanSection
            profile={state.profile}
            medications={state.medications}
            onSaveSickDayNote={handleSaveSickDayNote}
          />
        </div>
      )}
    </div>
  );
}
