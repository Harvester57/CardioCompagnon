import { useState, type FormEvent } from 'react';
import { AlertTriangle, BookOpen, Check, Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MEDICATION_REFERENCES } from '../../content/fr';
import type {
  Medication,
  MedicationPillar,
  MedicationReference,
  MedicationSubClass,
  ScheduleSlot,
} from '../../types';
import { Card } from '../../ui';
import {
  MEDICATION_STATUS_META,
  PILLAR_META,
  SCHEDULE_SLOTS,
  SUBCLASS_LABELS,
  clampPercent,
} from './medsHelpers';

export interface MedicationFormModalProps {
  initialMedication?: Medication;
  defaultPillar?: MedicationPillar;
  referenceDate: string;
  onSave: (medication: Omit<Medication, 'id'>, existingId?: number) => Promise<void>;
  onCancel: () => void;
}

const ALL_PILLARS: MedicationPillar[] = [
  'raas_arni',
  'beta_blocker',
  'mra',
  'sglt2i',
  'loop_diuretic',
  'lipid_lowering',
  'antiplatelet',
  'anticoagulant',
  'addon_hf',
  'other',
];

const ALL_SUBCLASSES: MedicationSubClass[] = [
  'ace_i',
  'arb',
  'arni',
  'beta_blocker',
  'steroidal_mra',
  'non_steroidal_mra',
  'sglt2i',
  'loop_diuretic',
  'statin',
  'ezetimibe',
  'pcsk9',
  'aspirin_p2y12',
  'colchicine',
  'anticoagulant',
  'ivabradine',
  'digoxin_digitoxin',
  'vericiguat',
  'potassium_binder',
  'other',
];

const DEFAULT_SUBCLASS_BY_PILLAR: Record<MedicationPillar, MedicationSubClass> = {
  raas_arni: 'arni',
  beta_blocker: 'beta_blocker',
  mra: 'steroidal_mra',
  sglt2i: 'sglt2i',
  loop_diuretic: 'loop_diuretic',
  lipid_lowering: 'statin',
  antiplatelet: 'aspirin_p2y12',
  anticoagulant: 'anticoagulant',
  addon_hf: 'ivabradine',
  other: 'other',
};

export function MedicationFormModal({
  initialMedication,
  defaultPillar,
  referenceDate,
  onSave,
  onCancel,
}: MedicationFormModalProps) {
  const isEditing = initialMedication?.id !== undefined;

  const [pillar, setPillar] = useState<MedicationPillar>(
    initialMedication?.pillar ?? defaultPillar ?? 'raas_arni',
  );
  const [subClass, setSubClass] = useState<MedicationSubClass>(
    initialMedication?.subClass ?? DEFAULT_SUBCLASS_BY_PILLAR[initialMedication?.pillar ?? defaultPillar ?? 'raas_arni'],
  );
  const [selectedRefId, setSelectedRefId] = useState<string>('');
  const [showAllReferences, setShowAllReferences] = useState(false);
  const [innName, setInnName] = useState(initialMedication?.innName ?? '');
  const [frenchBrand, setFrenchBrand] = useState(initialMedication?.frenchBrand ?? '');
  const [doseLabel, setDoseLabel] = useState(initialMedication?.doseLabel ?? '');
  const [dosePercentText, setDosePercentText] = useState(
    initialMedication?.dosePercentOfTarget !== undefined
      ? String(initialMedication.dosePercentOfTarget)
      : '',
  );
  const [status, setStatus] = useState<Medication['status']>(
    initialMedication?.status ?? 'active',
  );
  const [scheduleSlots, setScheduleSlots] = useState<ScheduleSlot[]>(
    initialMedication?.scheduleSlots ?? ['matin'],
  );
  const [startedAt, setStartedAt] = useState(initialMedication?.startedAt ?? referenceDate);
  const [lastDoseChangeAt, setLastDoseChangeAt] = useState(
    initialMedication?.lastDoseChangeAt ?? '',
  );
  const [switchedFromAceIAt, setSwitchedFromAceIAt] = useState(
    initialMedication?.switchedFromAceIAt ?? '',
  );
  const [notPrescribedReason, setNotPrescribedReason] = useState(
    initialMedication?.notPrescribedReason ?? '',
  );
  const [sideEffectsNote, setSideEffectsNote] = useState(initialMedication?.sideEffectsNote ?? '');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const availableReferences = showAllReferences
    ? MEDICATION_REFERENCES
    : MEDICATION_REFERENCES.filter((ref) => ref.pillar === pillar || ref.avoidInHfref);

  const selectedRef: MedicationReference | undefined = MEDICATION_REFERENCES.find(
    (ref) => ref.id === selectedRefId,
  );

  function handlePillarChange(nextPillar: MedicationPillar) {
    setPillar(nextPillar);
    setSubClass(DEFAULT_SUBCLASS_BY_PILLAR[nextPillar]);
    setSelectedRefId('');
  }

  function handleApplyReference(refId: string) {
    setSelectedRefId(refId);
    const ref = MEDICATION_REFERENCES.find((item) => item.id === refId);
    if (!ref) return;

    setPillar(ref.pillar);
    setSubClass(ref.subClass);
    setInnName(ref.innNameFr);
    const firstRealBrand = ref.frenchBrands.find(
      (b) => b.toLowerCase() !== 'génériques' && b.toLowerCase() !== 'generiques',
    );
    setFrenchBrand(firstRealBrand ?? '');
    if (!doseLabel.trim() && ref.startDoseFr) {
      setDoseLabel(ref.startDoseFr);
    }
    if (ref.pillar === 'sglt2i') {
      setDosePercentText('100');
      setStatus('at_target');
    }
  }

  function toggleSlot(slot: ScheduleSlot) {
    setScheduleSlots((prev) =>
      prev.includes(slot) ? prev.filter((item) => item !== slot) : [...prev, slot],
    );
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setErrorMessage(null);

    const trimmedInn = innName.trim();
    const trimmedDose = doseLabel.trim();

    if (!trimmedInn) {
      setErrorMessage('Veuillez indiquer le nom de la molécule (DCI).');
      return;
    }

    if ((status === 'active' || status === 'titrating' || status === 'at_target') && !trimmedDose) {
      setErrorMessage('Veuillez renseigner la posologie actuelle (ex. 49/51 mg x 2/j).');
      return;
    }

    let parsedPercent: number | undefined;
    if (dosePercentText.trim() !== '') {
      const num = Number(dosePercentText);
      if (Number.isNaN(num) || num < 0 || num > 100) {
        setErrorMessage('Le pourcentage de la dose cible doit être compris entre 0 et 100.');
        return;
      }
      parsedPercent = clampPercent(num);
    }

    const payload: Omit<Medication, 'id'> = {
      pillar,
      subClass,
      innName: trimmedInn,
      frenchBrand: frenchBrand.trim() || undefined,
      doseLabel: trimmedDose || 'Non prescrit',
      dosePercentOfTarget: parsedPercent,
      status,
      notPrescribedReason: notPrescribedReason.trim() || undefined,
      switchedFromAceIAt:
        pillar === 'raas_arni' && subClass === 'arni' && switchedFromAceIAt.trim()
          ? switchedFromAceIAt.trim()
          : undefined,
      startedAt: startedAt.trim() || undefined,
      lastDoseChangeAt: lastDoseChangeAt.trim() || undefined,
      scheduleSlots: scheduleSlots.length > 0 ? scheduleSlots : undefined,
      sideEffectsNote: sideEffectsNote.trim() || undefined,
    };

    setIsSaving(true);
    try {
      await onSave(payload, initialMedication?.id);
    } catch {
      setErrorMessage("Impossible d'enregistrer ce traitement localement. Veuillez réessayer.");
      setIsSaving(false);
    }
  }

  return (
    <Card
      title={isEditing ? 'Modifier un traitement' : 'Ajouter un traitement'}
      subtitle="Utilisez le référentiel scientifique pour pré-remplir les molécules et repères de titration, sans jamais modifier votre ordonnance sans avis médical."
      headerAction={
        <button
          type="button"
          onClick={onCancel}
          aria-label="Fermer le formulaire de traitement"
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

        {/* Aide a la saisie depuis MEDICATION_REFERENCES */}
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3.5 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label
              htmlFor="med-reference-select"
              className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]"
            >
              Aide à la saisie (Référentiel médicaments ESC / France)
            </label>
            <div className="inline-flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <input
                id="med-show-all-refs"
                type="checkbox"
                checked={showAllReferences}
                onChange={(e) => setShowAllReferences(e.target.checked)}
                className="h-4 w-4 cursor-pointer rounded"
              />
              <label htmlFor="med-show-all-refs" className="cursor-pointer">
                Afficher toutes les classes ({MEDICATION_REFERENCES.length})
              </label>
            </div>
          </div>
          <select
            id="med-reference-select"
            value={selectedRefId}
            onChange={(e) => handleApplyReference(e.target.value)}
            className="w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
          >
            <option value="">-- Choisir une molécule de référence pour pré-remplir --</option>
            {availableReferences.map((ref) => (
              <option key={ref.id} value={ref.id}>
                {ref.innNameFr} ({ref.frenchBrands.join(', ')})
                {ref.avoidInHfref ? ' [Classe déconseillée en ICFER]' : ''}
              </option>
            ))}
          </select>

          {selectedRef && (
            <div
              className={`rounded-lg border p-3 text-xs leading-relaxed ${
                selectedRef.avoidInHfref
                  ? 'border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] text-[var(--status-urgent-text)]'
                  : 'border-[var(--status-info-border)] bg-[var(--bg-card)] text-[var(--text-secondary)]'
              }`}
            >
              {selectedRef.avoidInHfref && (
                <p className="mb-1.5 flex items-center gap-1.5 font-semibold">
                  <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Classe déconseillée / contre-indiquée en ICFER (ESC 2026 Classe III)</span>
                </p>
              )}
              {selectedRef.startDoseFr && (
                <p>
                  <strong className="text-[var(--text-primary)]">Dose initiale habituelle :</strong>{' '}
                  {selectedRef.startDoseFr}
                </p>
              )}
              {selectedRef.targetDoseFr && (
                <p className="mt-0.5">
                  <strong className="text-[var(--text-primary)]">Dose cible :</strong>{' '}
                  {selectedRef.targetDoseFr}
                </p>
              )}
              {selectedRef.titrationIntervalFr && (
                <p className="mt-0.5">
                  <strong className="text-[var(--text-primary)]">Rythme de titration :</strong>{' '}
                  {selectedRef.titrationIntervalFr}
                </p>
              )}
              <p className="mt-1">
                <strong className="text-[var(--text-primary)]">Surveillance :</strong>{' '}
                {selectedRef.monitoringFr}
              </p>
              <Link
                to={`/library?article=${encodeURIComponent(selectedRef.articleSlug)}`}
                className="mt-2 inline-flex items-center gap-1 font-semibold text-[var(--color-primary)] hover:underline"
              >
                <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Consulter la fiche scientifique associée</span>
              </Link>
            </div>
          )}
        </div>

        {/* Pilier + Sous-classe */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="med-pillar"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Catégorie / Pilier
            </label>
            <select
              id="med-pillar"
              value={pillar}
              onChange={(e) => handlePillarChange(e.target.value as MedicationPillar)}
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)]"
            >
              {ALL_PILLARS.map((key) => (
                <option key={key} value={key}>
                  {PILLAR_META[key].labelFr}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="med-subclass"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Sous-classe pharmacologique
            </label>
            <select
              id="med-subclass"
              value={subClass}
              onChange={(e) => setSubClass(e.target.value as MedicationSubClass)}
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)]"
            >
              {ALL_SUBCLASSES.map((sc) => (
                <option key={sc} value={sc}>
                  {SUBCLASS_LABELS[sc]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* DCI + Marque FR */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="med-inn"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Molécule (DCI) *
            </label>
            <input
              id="med-inn"
              type="text"
              required
              value={innName}
              onChange={(e) => setInnName(e.target.value)}
              placeholder="Ex. sacubitril/valsartan, bisoprolol..."
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)]"
            />
          </div>

          <div>
            <label
              htmlFor="med-brand"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Nom de marque en France (optionnel)
            </label>
            <input
              id="med-brand"
              type="text"
              value={frenchBrand}
              onChange={(e) => setFrenchBrand(e.target.value)}
              placeholder="Ex. Entresto, Cardensiel, Forxiga..."
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)]"
            />
          </div>
        </div>

        {/* Posologie + % dose cible + Statut */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="med-dose"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Posologie actuelle *
            </label>
            <input
              id="med-dose"
              type="text"
              value={doseLabel}
              onChange={(e) => setDoseLabel(e.target.value)}
              placeholder="Ex. 49/51 mg x 2/j"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)] tabular-nums"
            />
          </div>

          <div>
            <label
              htmlFor="med-percent"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              % de la dose cible (0–100)
            </label>
            <input
              id="med-percent"
              type="number"
              min={0}
              max={100}
              step={1}
              value={dosePercentText}
              onChange={(e) => setDosePercentText(e.target.value)}
              placeholder="Ex. 50"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)] tabular-nums"
            />
          </div>

          <div>
            <label
              htmlFor="med-status"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Statut du traitement
            </label>
            <select
              id="med-status"
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

        {/* Creneaux de prise */}
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium text-[var(--text-primary)]">
            Moments de prise habituels
          </legend>
          <div className="flex flex-wrap gap-2">
            {SCHEDULE_SLOTS.map((slot) => {
              const selected = scheduleSlots.includes(slot.key);
              return (
                <button
                  key={slot.key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleSlot(slot.key)}
                  className={`touch-target inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors ${
                    selected
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)]'
                  }`}
                >
                  {selected && <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />}
                  <span>{slot.labelFr}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Dates */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="med-started-at"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Date de début
            </label>
            <input
              id="med-started-at"
              type="date"
              value={startedAt}
              onChange={(e) => setStartedAt(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)] tabular-nums"
            />
          </div>

          <div>
            <label
              htmlFor="med-last-change"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Date du dernier palier de dose
            </label>
            <input
              id="med-last-change"
              type="date"
              value={lastDoseChangeAt}
              onChange={(e) => setLastDoseChangeAt(e.target.value)}
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)] tabular-nums"
            />
          </div>
        </div>

        {/* Relais IEC -> ARNI (regle 36 h) */}
        {pillar === 'raas_arni' && subClass === 'arni' && (
          <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-3.5 space-y-2">
            <div className="flex items-start gap-2 text-xs text-[var(--status-warning-text)]">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p className="m-0 leading-relaxed">
                En cas de relais depuis un IEC vers le sacubitril/valsartan (Entresto), un délai
                obligatoire de <strong>36 heures</strong> sans traitement est requis entre la
                dernière prise d&apos;IEC et la première prise d&apos;ARNI (risque d&apos;angiœdème).
              </p>
            </div>
            <div>
              <label
                htmlFor="med-arni-switch"
                className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
              >
                Date du passage depuis un IEC (optionnel)
              </label>
              <input
                id="med-arni-switch"
                type="date"
                value={switchedFromAceIAt}
                onChange={(e) => setSwitchedFromAceIAt(e.target.value)}
                className="w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums sm:w-60"
              />
            </div>
          </div>
        )}

        {/* Raison de non-prescription / arret */}
        {(status === 'stopped' || status === 'paused' || notPrescribedReason.trim().length > 0) && (
          <div>
            <label
              htmlFor="med-not-prescribed"
              className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
            >
              Raison de non-prescription, suspension ou arrêt (validée par le médecin)
            </label>
            <input
              id="med-not-prescribed"
              type="text"
              value={notPrescribedReason}
              onChange={(e) => setNotPrescribedReason(e.target.value)}
              placeholder="Ex. contre-indication rénale, hyperkaliémie, toux sous IEC..."
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2.5 text-sm text-[var(--text-primary)]"
            />
          </div>
        )}

        {/* Notes tolerance / effets indesirables */}
        <div>
          <label
            htmlFor="med-side-effects"
            className="mb-1 block text-sm font-medium text-[var(--text-primary)]"
          >
            Notes de tolérance ou effets ressentis (optionnel)
          </label>
          <textarea
            id="med-side-effects"
            rows={2}
            value={sideEffectsNote}
            onChange={(e) => setSideEffectsNote(e.target.value)}
            placeholder="Ex. bonne tolérance tensionnelle, légère fatigue les premiers jours..."
            className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2 text-sm text-[var(--text-primary)]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[var(--border-subtle)] pt-3">
          <button
            type="button"
            onClick={onCancel}
            className="touch-target rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:opacity-90"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="touch-target rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
          >
            {isSaving
              ? 'Enregistrement...'
              : isEditing
                ? 'Enregistrer les modifications'
                : 'Ajouter ce traitement'}
          </button>
        </div>
      </form>
    </Card>
  );
}
