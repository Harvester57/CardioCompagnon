import { useState, type FormEvent } from 'react';
import { Info, TrendingUp, X } from 'lucide-react';
import type { Medication } from '../../types';
import { Card } from '../../ui';
import {
  MEDICATION_STATUS_META,
  clampPercent,
  findMedicationReference,
  formatMedicationDisplayName,
} from './medsHelpers';

export interface DoseChangeSubmission {
  medicationId: number;
  date: string;
  previousDoseLabel?: string;
  newDoseLabel: string;
  reason?: string;
  dosePercentOfTarget?: number;
  status: Medication['status'];
}

export interface DoseChangeModalProps {
  medication: Medication;
  referenceDate: string;
  onSubmit: (submission: DoseChangeSubmission) => Promise<void>;
  onCancel: () => void;
}

export function DoseChangeModal({
  medication,
  referenceDate,
  onSubmit,
  onCancel,
}: DoseChangeModalProps) {
  const [date, setDate] = useState(referenceDate);
  const [newDoseLabel, setNewDoseLabel] = useState('');
  const [dosePercentText, setDosePercentText] = useState(
    medication.dosePercentOfTarget !== undefined ? String(medication.dosePercentOfTarget) : '',
  );
  const [status, setStatus] = useState<Medication['status']>(
    medication.status === 'active' ? 'titrating' : medication.status,
  );
  const [reason, setReason] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const reference = findMedicationReference(medication);
  const requiresRenalKControl =
    medication.pillar === 'raas_arni' || medication.pillar === 'mra';

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setErrorMessage(null);

    if (medication.id === undefined) {
      setErrorMessage('Identifiant du médicament introuvable.');
      return;
    }

    const trimmedDose = newDoseLabel.trim();
    if (!trimmedDose) {
      setErrorMessage('Veuillez renseigner la nouvelle posologie prescrite.');
      return;
    }

    if (!date.trim()) {
      setErrorMessage('Veuillez indiquer la date du changement de palier.');
      return;
    }

    let parsedPercent: number | undefined;
    if (dosePercentText.trim() !== '') {
      const numeric = Number(dosePercentText);
      if (Number.isNaN(numeric) || numeric < 0 || numeric > 100) {
        setErrorMessage('Le pourcentage de la dose cible doit être compris entre 0 et 100.');
        return;
      }
      parsedPercent = clampPercent(numeric);
    }

    setIsSaving(true);
    try {
      await onSubmit({
        medicationId: medication.id,
        date: date.trim(),
        previousDoseLabel: medication.doseLabel,
        newDoseLabel: trimmedDose,
        reason: reason.trim() || undefined,
        dosePercentOfTarget: parsedPercent,
        status,
      });
    } catch {
      setErrorMessage("Impossible d'enregistrer ce palier de dose. Veuillez réessayer.");
      setIsSaving(false);
    }
  }

  return (
    <Card
      title={`Nouveau palier de dose -- ${formatMedicationDisplayName(medication)}`}
      subtitle={`Posologie précédente : ${medication.doseLabel}${reference?.targetDoseFr ? ` · Dose cible de référence : ${reference.targetDoseFr}` : ''}`}
      icon={<TrendingUp className="h-5 w-5" />}
      headerAction={
        <button
          type="button"
          onClick={onCancel}
          aria-label="Fermer le formulaire de nouveau palier de dose"
          className="touch-target inline-flex items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      }
    >
      <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
        {errorMessage && (
          <div
            role="alert"
            className="rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3.5 py-2.5 text-sm text-[var(--status-urgent-text)]"
          >
            {errorMessage}
          </div>
        )}

        {requiresRenalKControl && (
          <div className="flex items-start gap-2.5 rounded-xl border border-[var(--status-action-border)] bg-[var(--status-action-bg)] p-3 text-xs leading-relaxed text-[var(--status-action-text)]">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p className="m-0">
              Après un changement de palier sur un IEC/ARA2/ARNI ou un ARM, un bilan biologique de
              contrôle (<strong>créatinine / DFGe et potassium</strong>) est habituellement prévu{' '}
              <strong>1 à 2 semaines</strong> plus tard. Enregistrez uniquement les modifications
              prescrites par votre médecin.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="dose-change-date"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Date du palier *
            </label>
            <input
              id="dose-change-date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)] tabular-nums"
            />
          </div>

          <div>
            <label
              htmlFor="dose-change-new-label"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Nouvelle posologie *
            </label>
            <input
              id="dose-change-new-label"
              type="text"
              required
              value={newDoseLabel}
              onChange={(e) => setNewDoseLabel(e.target.value)}
              placeholder="Ex. 97/103 mg x 2/j"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)] tabular-nums"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="dose-change-percent"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Nouveau % de la dose cible (0–100)
            </label>
            <input
              id="dose-change-percent"
              type="number"
              min={0}
              max={100}
              step={1}
              value={dosePercentText}
              onChange={(e) => setDosePercentText(e.target.value)}
              placeholder="Ex. 100"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)] tabular-nums"
            />
          </div>

          <div>
            <label
              htmlFor="dose-change-status"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Statut après ce palier
            </label>
            <select
              id="dose-change-status"
              value={status}
              onChange={(e) => setStatus(e.target.value as Medication['status'])}
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)]"
            >
              {(Object.keys(MEDICATION_STATUS_META) as Medication['status'][]).map((st) => (
                <option key={st} value={st}>
                  {MEDICATION_STATUS_META[st].labelFr}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="dose-change-reason"
            className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
          >
            Motif ou note de consultation (optionnel)
          </label>
          <input
            id="dose-change-reason"
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Ex. Palier prescrit en consultation, bilan créatinine/K+ prévu à J+10"
            className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[var(--border-subtle)] pt-3">
          <button
            type="button"
            onClick={onCancel}
            className="touch-target rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="touch-target rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
          >
            {isSaving ? 'Enregistrement...' : 'Enregistrer ce palier'}
          </button>
        </div>
      </form>
    </Card>
  );
}
