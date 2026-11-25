import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  AlertTriangle,
  Calendar,
  Check,
  HeartPulse,
  RotateCcw,
  Save,
  Scale,
} from 'lucide-react';
import type { DailyLog } from '../../types';
import { upsertDailyLog, useActiveDb } from '../../db';
import { formatWeightKgFr } from '../../engine';
import { Card, DateInput } from '../../ui';
import {
  DYSPNOEA_OPTIONS,
  EXTRA_SYMPTOM_OPTIONS,
  FATIGUE_OPTIONS,
  OEDEMA_OPTIONS,
  computeWeightComparison,
  createEmptySymptoms,
  formatFullDateFr,
  formatSignedDeltaKgFr,
  formatWeightForInput,
  parseFrenchDecimalInput,
  parseIntegerInput,
  type ExtraSymptomKey,
} from './today-utils';

export interface DailyCheckinFormProps {
  targetDate: string;
  referenceDate: string;
  existingLog?: DailyLog;
  dailyLogs: readonly DailyLog[];
  dryWeightKg?: number;
  onTargetDateChange: (date: string) => void;
  onSaved: (date: string, wasUpdate: boolean) => void;
}

export function DailyCheckinForm({
  targetDate,
  referenceDate,
  existingLog,
  dailyLogs,
  dryWeightKg,
  onTargetDateChange,
  onSaved,
}: DailyCheckinFormProps) {
  const db = useActiveDb();

  const [weightInput, setWeightInput] = useState<string>(() =>
    formatWeightForInput(existingLog?.weightKg),
  );
  const [systolicInput, setSystolicInput] = useState<string>(() =>
    existingLog?.systolicBp !== undefined ? String(existingLog.systolicBp) : '',
  );
  const [diastolicInput, setDiastolicInput] = useState<string>(() =>
    existingLog?.diastolicBp !== undefined ? String(existingLog.diastolicBp) : '',
  );
  const [heartRateInput, setHeartRateInput] = useState<string>(() =>
    existingLog?.heartRateBpm !== undefined ? String(existingLog.heartRateBpm) : '',
  );
  const [symptoms, setSymptoms] = useState<DailyLog['symptoms']>(() =>
    existingLog ? { ...existingLog.symptoms } : createEmptySymptoms(),
  );
  const [notes, setNotes] = useState<string>(() => existingLog?.notes ?? '');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const parsedWeight = parseFrenchDecimalInput(weightInput);
  const validWeight =
    parsedWeight !== undefined && !Number.isNaN(parsedWeight) && parsedWeight > 0
      ? parsedWeight
      : undefined;

  const weightComparison = computeWeightComparison(validWeight, targetDate, dailyLogs, dryWeightKg);

  const isEditingPastDate = targetDate !== referenceDate;
  const isUpdatingExisting = existingLog !== undefined;

  function toggleExtraSymptom(key: ExtraSymptomKey) {
    setSymptoms((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMsg(null);

    const weightKg = parseFrenchDecimalInput(weightInput);
    if (Number.isNaN(weightKg) || (weightKg !== undefined && (weightKg < 25 || weightKg > 300))) {
      setErrorMsg('Veuillez saisir un poids valide en kilogrammes (ex. 78,5).');
      return;
    }

    const systolicBp = parseIntegerInput(systolicInput);
    if (
      Number.isNaN(systolicBp) ||
      (systolicBp !== undefined && (systolicBp < 50 || systolicBp > 260))
    ) {
      setErrorMsg('Veuillez saisir une tension systolique valide (entre 50 et 260 mmHg).');
      return;
    }

    const diastolicBp = parseIntegerInput(diastolicInput);
    if (
      Number.isNaN(diastolicBp) ||
      (diastolicBp !== undefined && (diastolicBp < 30 || diastolicBp > 160))
    ) {
      setErrorMsg('Veuillez saisir une tension diastolique valide (entre 30 et 160 mmHg).');
      return;
    }

    const heartRateBpm = parseIntegerInput(heartRateInput);
    if (
      Number.isNaN(heartRateBpm) ||
      (heartRateBpm !== undefined && (heartRateBpm < 30 || heartRateBpm > 220))
    ) {
      setErrorMsg('Veuillez saisir une fréquence cardiaque valide (entre 30 et 220 bpm).');
      return;
    }

    setIsSaving(true);
    try {
      await upsertDailyLog(db, {
        date: targetDate,
        weightKg,
        systolicBp,
        diastolicBp,
        heartRateBpm,
        symptoms,
        notes: notes.trim() !== '' ? notes.trim() : undefined,
      });
      onSaved(targetDate, isUpdatingExisting);
    } catch {
      setErrorMsg("Impossible d'enregistrer la saisie dans le stockage local.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Card
      title={
        isEditingPastDate
          ? `Modifier la saisie du ${formatFullDateFr(targetDate)}`
          : 'Saisie matinale rapide'
      }
      subtitle="Idéalement le matin à jeun, après avoir uriné, dans des vêtements légers."
      icon={<Scale className="h-5 w-5" />}
      headerAction={
        isEditingPastDate ? (
          <button
            type="button"
            onClick={() => onTargetDateChange(referenceDate)}
            className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--border-subtle)]"
          >
            <RotateCcw className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Revenir à aujourd&apos;hui</span>
          </button>
        ) : undefined
      }
    >
      <form onSubmit={(e) => void handleSubmit(e)} noValidate className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)]">
              <Calendar className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
              <label htmlFor="today-date-input">Date du relevé</label>
            </div>
            <DateInput
              id="today-date-input"
              value={targetDate}
              max={referenceDate}
              allowClear={false}
              onChange={(iso) => {
                if (iso) {
                  onTargetDateChange(iso);
                }
              }}
              className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3.5 py-2.5 text-base text-[var(--text-primary)] tabular-nums"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-[var(--text-primary)]">
              <Scale className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
              <label htmlFor="today-weight-input">Poids matinal (kg)</label>
            </div>
            <input
              id="today-weight-input"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              placeholder="ex. 78,5"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3.5 py-2.5 text-base font-semibold text-[var(--text-primary)] tabular-nums"
            />
          </div>
        </div>

        <div
          aria-live="polite"
          className="grid grid-cols-1 gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3 sm:grid-cols-2"
        >
          <div
            className={`rounded-lg border px-3 py-2 text-xs ${
              weightComparison.aboveDryThreshold
                ? 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)]'
            }`}
          >
            <div className="font-medium">Comparaison au poids de référence (sec)</div>
            {typeof dryWeightKg === 'number' ? (
              <div className="mt-0.5 flex flex-wrap items-baseline gap-1.5 tabular-nums">
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {weightComparison.deltaVsDryKg !== undefined
                    ? formatSignedDeltaKgFr(weightComparison.deltaVsDryKg)
                    : '—'}
                </span>
                <span>(repère : {formatWeightKgFr(dryWeightKg)})</span>
              </div>
            ) : (
              <div className="mt-0.5">
                Non défini —{' '}
                <Link to="/settings" className="font-semibold text-[var(--color-primary)] underline">
                  définir dans votre profil
                </Link>
              </div>
            )}
          </div>

          <div
            className={`rounded-lg border px-3 py-2 text-xs ${
              weightComparison.above3dThreshold
                ? 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)]'
            }`}
          >
            <div className="font-medium">Évolution sur 3 jours glissants</div>
            <div className="mt-0.5 flex flex-wrap items-baseline gap-1.5 tabular-nums">
              {weightComparison.delta3dKg !== undefined &&
              weightComparison.minPrior3dKg !== undefined ? (
                <>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {formatSignedDeltaKgFr(weightComparison.delta3dKg)}
                  </span>
                  <span>(min. 3 j : {formatWeightKgFr(weightComparison.minPrior3dKg)})</span>
                </>
              ) : (
                <span>Pas de pesée récente dans les 3 jours précédents</span>
              )}
            </div>
          </div>
        </div>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-2 block w-full p-0 text-sm font-semibold text-[var(--text-primary)]">
            <span className="inline-flex items-center gap-1.5">
              <HeartPulse
                className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
                aria-hidden="true"
              />
              <span>Tension artérielle et fréquence cardiaque</span>
            </span>
          </legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div>
              <label
                htmlFor="today-systolic-input"
                className="mb-1 block text-xs font-medium text-[var(--text-secondary)]"
              >
                TA systolique (mmHg)
              </label>
              <input
                id="today-systolic-input"
                type="text"
                inputMode="numeric"
                placeholder="ex. 110"
                value={systolicInput}
                onChange={(e) => setSystolicInput(e.target.value)}
                className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3.5 py-2.5 text-base text-[var(--text-primary)] tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="today-diastolic-input"
                className="mb-1 block text-xs font-medium text-[var(--text-secondary)]"
              >
                TA diastolique (mmHg)
              </label>
              <input
                id="today-diastolic-input"
                type="text"
                inputMode="numeric"
                placeholder="ex. 68"
                value={diastolicInput}
                onChange={(e) => setDiastolicInput(e.target.value)}
                className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3.5 py-2.5 text-base text-[var(--text-primary)] tabular-nums"
              />
            </div>

            <div>
              <label
                htmlFor="today-hr-input"
                className="mb-1 block text-xs font-medium text-[var(--text-secondary)]"
              >
                Fréquence cardiaque (bpm)
              </label>
              <input
                id="today-hr-input"
                type="text"
                inputMode="numeric"
                placeholder="ex. 64"
                value={heartRateInput}
                onChange={(e) => setHeartRateInput(e.target.value)}
                className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3.5 py-2.5 text-base text-[var(--text-primary)] tabular-nums"
              />
            </div>
          </div>
        </fieldset>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3.5">
          <fieldset className="min-w-0 border-0 p-0">
            <legend className="mb-3 block w-full p-0 text-sm font-semibold text-[var(--text-primary)]">
              <span className="inline-flex items-center gap-1.5">
                <Activity
                  className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
                  aria-hidden="true"
                />
                <span>Grille EPOF (Essoufflement, Prise de poids, Œdèmes, Fatigue)</span>
              </span>
            </legend>

            <div className="flex flex-col gap-3.5">

          <div>
            <p id="epof-dyspnoea-label" className="mb-1.5 text-xs font-semibold text-[var(--text-primary)]">
              E -- Essoufflement
            </p>
            <div
              role="group"
              aria-labelledby="epof-dyspnoea-label"
              className="grid grid-cols-1 gap-2 sm:grid-cols-3"
            >
              {DYSPNOEA_OPTIONS.map((opt) => {
                const selected = symptoms.dyspnoea === opt.value;
                const isUrgentOption = opt.value === 'rest_or_lying';
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSymptoms((prev) => ({ ...prev, dyspnoea: opt.value }))}
                    className={`touch-target flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                      selected
                        ? isUrgentOption
                          ? 'border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] text-[var(--status-urgent-text)]'
                          : 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                        : 'border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-app)]'
                    }`}
                  >
                    {selected && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2 text-xs text-[var(--text-secondary)]">
            <span className="font-semibold text-[var(--text-primary)]">P -- Prise de poids : </span>
            {weightComparison.above3dThreshold || weightComparison.aboveDryThreshold ? (
              <span className="font-semibold text-[var(--status-warning-text)]">
                Seuil de vigilance (≥ +2,0 kg) atteint sur votre saisie.
              </span>
            ) : validWeight !== undefined ? (
              <span>
                Poids saisi : <strong className="tabular-nums">{formatWeightKgFr(validWeight)}</strong>{' '}
                (en dessous du seuil d&apos;alerte de +2,0 kg).
              </span>
            ) : (
              <span>Saisissez votre poids matinal ci-dessus pour le suivi automatique (+2,0 kg).</span>
            )}
          </div>

          <div>
            <p id="epof-oedema-label" className="mb-1.5 text-xs font-semibold text-[var(--text-primary)]">
              O -- Œdèmes (jambes, chevilles)
            </p>
            <div
              role="group"
              aria-labelledby="epof-oedema-label"
              className="grid grid-cols-1 gap-2 sm:grid-cols-3"
            >
              {OEDEMA_OPTIONS.map((opt) => {
                const selected = symptoms.oedema === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSymptoms((prev) => ({ ...prev, oedema: opt.value }))}
                    className={`touch-target flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                      selected
                        ? opt.value === 'worsening'
                          ? 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                          : 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                        : 'border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-app)]'
                    }`}
                  >
                    {selected && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p id="epof-fatigue-label" className="mb-1.5 text-xs font-semibold text-[var(--text-primary)]">
              F -- Fatigue
            </p>
            <div
              role="group"
              aria-labelledby="epof-fatigue-label"
              className="grid grid-cols-1 gap-2 sm:grid-cols-3"
            >
              {FATIGUE_OPTIONS.map((opt) => {
                const selected = symptoms.fatigue === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSymptoms((prev) => ({ ...prev, fatigue: opt.value }))}
                    className={`touch-target flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                      selected
                        ? opt.value === 'severe'
                          ? 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                          : 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                        : 'border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-app)]'
                    }`}
                  >
                    {selected && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
            </div>
          </fieldset>
        </div>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-2 block w-full p-0 text-sm font-semibold text-[var(--text-primary)]">
            Signes complémentaires
          </legend>
          <div className="flex flex-wrap gap-2">
            {EXTRA_SYMPTOM_OPTIONS.map((opt) => {
              const checked = symptoms[opt.key];
              return (
                <button
                  key={opt.key}
                  type="button"
                  aria-pressed={checked}
                  onClick={() => toggleExtraSymptom(opt.key)}
                  className={`touch-target inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors ${
                    checked
                      ? opt.urgent
                        ? 'border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] text-[var(--status-urgent-text)]'
                        : 'border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                      : 'border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                  }`}
                >
                  {checked && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="today-notes-input"
            className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]"
          >
            Notes du jour (optionnel)
          </label>
          <textarea
            id="today-notes-input"
            rows={2}
            placeholder="Activité, contexte de la mesure, événement particulier..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] px-3.5 py-2.5 text-sm text-[var(--text-primary)]"
          />
        </div>

        {errorMsg && (
          <div
            role="alert"
            className="flex items-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3.5 py-2.5 text-sm text-[var(--status-urgent-text)]"
          >
            <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-secondary)]">
            {isUpdatingExisting
              ? `Une saisie existe déjà pour le ${formatFullDateFr(targetDate)} : l'enregistrement la mettra à jour.`
              : `Nouvelle saisie pour le ${formatFullDateFr(targetDate)}.`}
          </p>
          <button
            type="submit"
            disabled={isSaving}
            className="touch-target inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
          >
            <Save className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {isSaving
                ? 'Enregistrement...'
                : isUpdatingExisting
                  ? 'Mettre à jour la saisie'
                  : 'Enregistrer la saisie'}
            </span>
          </button>
        </div>
      </form>
    </Card>
  );
}
