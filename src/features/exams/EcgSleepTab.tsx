import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  AlertTriangle,
  BookOpen,
  Edit3,
  Moon,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import { getTodayIsoDate, useActiveDb } from '../../db';
import { formatFrenchNumber } from '../../engine';
import type { ClinicalEvent } from '../../types';
import { Card, EvidenceBadge } from '../../ui';
import {
  ECG_RHYTHM_LABELS,
  SLEEP_APNOEA_TYPE_LABELS,
  SLEEP_TREATMENT_LABELS,
  formatInputDecimalFr,
  formatIsoDateFr,
  parseFrenchDecimal,
} from './constants';

export interface EcgSleepTabProps {
  events: ClinicalEvent[];
}

interface EcgFormState {
  date: string;
  rhythm: string;
  qrsMs: string;
  lbbb: boolean;
  notes: string;
}

interface SleepFormState {
  date: string;
  ahi: string;
  apnoeaType: string;
  treatment: string;
  cpapAdherenceHours: string;
  notes: string;
}

function createEmptyEcgForm(): EcgFormState {
  return {
    date: getTodayIsoDate(),
    rhythm: 'sinus',
    qrsMs: '',
    lbbb: false,
    notes: '',
  };
}

function createEmptySleepForm(): SleepFormState {
  return {
    date: getTodayIsoDate(),
    ahi: '',
    apnoeaType: 'osa',
    treatment: 'none',
    cpapAdherenceHours: '',
    notes: '',
  };
}

function readDetailNumber(value: string | number | boolean | undefined): number | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') return parseFrenchDecimal(value);
  return undefined;
}

export function EcgSleepTab({ events }: EcgSleepTabProps) {
  const db = useActiveDb();

  // ECG state
  const [ecgFormOpen, setEcgFormOpen] = useState(false);
  const [editingEcgId, setEditingEcgId] = useState<number | null>(null);
  const [ecgForm, setEcgForm] = useState<EcgFormState>(() => createEmptyEcgForm());
  const [ecgError, setEcgError] = useState<string | null>(null);
  const [savingEcg, setSavingEcg] = useState(false);

  // Sleep state
  const [sleepFormOpen, setSleepFormOpen] = useState(false);
  const [editingSleepId, setEditingSleepId] = useState<number | null>(null);
  const [sleepForm, setSleepForm] = useState<SleepFormState>(() => createEmptySleepForm());
  const [sleepError, setSleepError] = useState<string | null>(null);
  const [savingSleep, setSavingSleep] = useState(false);

  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const ecgEvents = useMemo(
    () => events.filter((ev) => ev.type === 'ecg_check').reverse(),
    [events],
  );
  const sleepEvents = useMemo(
    () => events.filter((ev) => ev.type === 'sleep_study').reverse(),
    [events],
  );

  function openNewEcg() {
    setEditingEcgId(null);
    setEcgForm(createEmptyEcgForm());
    setEcgError(null);
    setEcgFormOpen(true);
  }

  function openEditEcg(ev: ClinicalEvent) {
    if (ev.id === undefined) return;
    setEditingEcgId(ev.id);
    setEcgForm({
      date: ev.date,
      rhythm: typeof ev.details.rhythm === 'string' ? ev.details.rhythm : 'sinus',
      qrsMs: formatInputDecimalFr(readDetailNumber(ev.details.qrsMs)),
      lbbb: ev.details.lbbb === true,
      notes: ev.notes ?? '',
    });
    setEcgError(null);
    setEcgFormOpen(true);
  }

  async function handleSaveEcg(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEcgError(null);

    if (!ecgForm.date.trim()) {
      setEcgError("Veuillez renseigner la date de l'ECG.");
      return;
    }

    const qrs = parseFrenchDecimal(ecgForm.qrsMs);
    if (ecgForm.qrsMs.trim() !== '' && (qrs === undefined || qrs < 40 || qrs > 300)) {
      setEcgError('Veuillez saisir une durée QRS valide (entre 40 et 300 ms).');
      return;
    }

    const details: Record<string, string | number | boolean> = {
      rhythm: ecgForm.rhythm,
      lbbb: ecgForm.lbbb,
    };
    if (qrs !== undefined) {
      details.qrsMs = qrs;
    }

    const payload: Omit<ClinicalEvent, 'id'> = {
      date: ecgForm.date.trim(),
      type: 'ecg_check',
      details,
      notes: ecgForm.notes.trim() || undefined,
    };

    setSavingEcg(true);
    try {
      if (editingEcgId !== null) {
        await db.events.put({ ...payload, id: editingEcgId });
      } else {
        await db.events.add(payload);
      }
      setEcgFormOpen(false);
      setEditingEcgId(null);
    } catch {
      setEcgError("Impossible d'enregistrer cet ECG pour le moment.");
    } finally {
      setSavingEcg(false);
    }
  }

  function openNewSleep() {
    setEditingSleepId(null);
    setSleepForm(createEmptySleepForm());
    setSleepError(null);
    setSleepFormOpen(true);
  }

  function openEditSleep(ev: ClinicalEvent) {
    if (ev.id === undefined) return;
    setEditingSleepId(ev.id);
    setSleepForm({
      date: ev.date,
      ahi: formatInputDecimalFr(readDetailNumber(ev.details.ahi)),
      apnoeaType: typeof ev.details.apnoeaType === 'string' ? ev.details.apnoeaType : 'osa',
      treatment: typeof ev.details.treatment === 'string' ? ev.details.treatment : 'none',
      cpapAdherenceHours: formatInputDecimalFr(readDetailNumber(ev.details.cpapAdherenceHours)),
      notes: ev.notes ?? '',
    });
    setSleepError(null);
    setSleepFormOpen(true);
  }

  async function handleSaveSleep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSleepError(null);

    if (!sleepForm.date.trim()) {
      setSleepError("Veuillez renseigner la date de l'examen du sommeil.");
      return;
    }

    const ahi = parseFrenchDecimal(sleepForm.ahi);
    if (sleepForm.ahi.trim() !== '' && (ahi === undefined || ahi < 0 || ahi > 150)) {
      setSleepError('Veuillez saisir un IAH valide (entre 0 et 150 / heure).');
      return;
    }

    const adherence = parseFrenchDecimal(sleepForm.cpapAdherenceHours);

    const details: Record<string, string | number | boolean> = {
      apnoeaType: sleepForm.apnoeaType,
      treatment: sleepForm.treatment,
    };
    if (ahi !== undefined) {
      details.ahi = ahi;
    }
    if (adherence !== undefined) {
      details.cpapAdherenceHours = adherence;
    }

    const payload: Omit<ClinicalEvent, 'id'> = {
      date: sleepForm.date.trim(),
      type: 'sleep_study',
      details,
      notes: sleepForm.notes.trim() || undefined,
    };

    setSavingSleep(true);
    try {
      if (editingSleepId !== null) {
        await db.events.put({ ...payload, id: editingSleepId });
      } else {
        await db.events.add(payload);
      }
      setSleepFormOpen(false);
      setEditingSleepId(null);
    } catch {
      setSleepError("Impossible d'enregistrer ce bilan du sommeil pour le moment.");
    } finally {
      setSavingSleep(false);
    }
  }

  async function handleDeleteEvent(id: number) {
    await db.events.delete(id);
    setConfirmDeleteId(null);
  }

  const showAsvInlineAlert =
    sleepForm.apnoeaType === 'csa' ||
    sleepForm.apnoeaType === 'mixed' ||
    sleepForm.treatment === 'asv';

  return (
    <div className="space-y-6">
      {/* SECTION 1 : ECG */}
      <Card
        icon={<Activity className="h-5 w-5 text-[var(--color-primary)]" />}
        title="Électrocardiogramme (ECG)"
        subtitle="Suivi du rythme (sinusal ou fibrillation atriale), de la largeur du complexe QRS (ms) et d'un bloc de branche gauche (BBG / LBBB)."
        headerAction={
          !ecgFormOpen ? (
            <button
              type="button"
              onClick={openNewEcg}
              className="touch-target inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)]"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span>Ajouter un ECG</span>
            </button>
          ) : undefined
        }
      >
        <div className="mb-4 rounded-xl border border-[var(--status-info-border)] bg-[var(--status-info-bg)] p-3 text-xs leading-relaxed text-[var(--status-info-text)]">
          <strong className="font-semibold text-[var(--text-primary)]">
            Pourquoi suivre la largeur du QRS et le rythme ?
          </strong>{' '}
          Un complexe <strong className="text-[var(--text-primary)]">QRS &ge; 130 ms</strong>{' '}
          (surtout avec bloc de branche gauche — BBG) associé à une FEVG &le; 35 % fait discuter
          une resynchronisation cardiaque (CRT, ESC 2026). Une fibrillation atriale (FA) modifie
          également l&apos;interprétation du NT-proBNP et certains choix thérapeutiques.{' '}
          <Link
            to="/library?article=dispositifs-cardiaques-dai-crt"
            className="font-semibold text-[var(--color-primary)] hover:underline"
          >
            Fiche DAI / CRT
          </Link>
        </div>

        {ecgFormOpen && (
          <form
            onSubmit={(e) => void handleSaveEcg(e)}
            className="mb-5 space-y-4 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-subtle)]/50 p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                {editingEcgId !== null ? "Modifier l'ECG" : 'Nouvel ECG'}
              </h3>
              <button
                type="button"
                onClick={() => setEcgFormOpen(false)}
                aria-label="Fermer le formulaire ECG"
                className="touch-target rounded-lg p-1.5 text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {ecgError && (
              <div
                role="alert"
                className="flex items-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3 py-2 text-sm text-[var(--status-urgent-text)]"
              >
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{ecgError}</span>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="ecg-date"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Date de l&apos;ECG *
                </label>
                <input
                  id="ecg-date"
                  type="date"
                  required
                  value={ecgForm.date}
                  onChange={(e) => setEcgForm((prev) => ({ ...prev, date: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="ecg-rhythm"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Rythme cardiaque
                </label>
                <select
                  id="ecg-rhythm"
                  value={ecgForm.rhythm}
                  onChange={(e) => setEcgForm((prev) => ({ ...prev, rhythm: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                >
                  {Object.entries(ECG_RHYTHM_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="ecg-qrs"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Largeur QRS (ms)
                </label>
                <input
                  id="ecg-qrs"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 118 ou 142"
                  value={ecgForm.qrsMs}
                  onChange={(e) => setEcgForm((prev) => ({ ...prev, qrsMs: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="ecg-lbbb"
                type="checkbox"
                checked={ecgForm.lbbb}
                onChange={(e) => setEcgForm((prev) => ({ ...prev, lbbb: e.target.checked }))}
                className="h-4 w-4 accent-[var(--color-primary)]"
              />
              <label htmlFor="ecg-lbbb" className="text-sm font-medium text-[var(--text-primary)]">
                Bloc de branche gauche (BBG / LBBB) mentionné sur le compte-rendu
              </label>
            </div>

            <div>
              <label
                htmlFor="ecg-notes"
                className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
              >
                Notes ECG
              </label>
              <textarea
                id="ecg-notes"
                rows={2}
                value={ecgForm.notes}
                onChange={(e) => setEcgForm((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="ex. Ondes Q séquellaires en antérieur, FC 64 bpm..."
                className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
              />
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => setEcgFormOpen(false)}
                className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={savingEcg}
                className="touch-target rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
              >
                {savingEcg
                  ? 'Enregistrement...'
                  : editingEcgId !== null
                    ? 'Mettre à jour'
                    : "Enregistrer l'ECG"}
              </button>
            </div>
          </form>
        )}

        {ecgEvents.length === 0 ? (
          <p className="text-sm text-[var(--text-secondary)]">
            Aucun ECG enregistré pour le moment.
          </p>
        ) : (
          <ul className="m-0 list-none space-y-2.5 p-0">
            {ecgEvents.map((ev) => {
              const rhythmKey =
                typeof ev.details.rhythm === 'string' ? ev.details.rhythm : 'sinus';
              const qrsMs = readDetailNumber(ev.details.qrsMs);
              const lbbb = ev.details.lbbb === true;
              return (
                <li
                  key={ev.id ?? ev.date}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3.5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                        ECG du {formatIsoDateFr(ev.date)}
                      </span>
                      <span className="rounded-full bg-[var(--color-primary-soft)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
                        {ECG_RHYTHM_LABELS[rhythmKey] ?? rhythmKey}
                      </span>
                      {qrsMs !== undefined && (
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums ${
                            qrsMs >= 130
                              ? 'bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                              : 'bg-[var(--bg-card)] text-[var(--text-primary)]'
                          }`}
                        >
                          QRS : {formatFrenchNumber(qrsMs, 0)} ms
                        </span>
                      )}
                      {lbbb && (
                        <span className="rounded-full bg-[var(--status-action-bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--status-action-text)]">
                          BBG (LBBB)
                        </span>
                      )}
                    </div>

                    {ev.id !== undefined && (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEditEcg(ev)}
                          className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-primary)]"
                        >
                          <Edit3 className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Modifier</span>
                        </button>
                        {confirmDeleteId === ev.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => void handleDeleteEvent(ev.id as number)}
                              className="touch-target rounded-lg bg-[var(--status-urgent-text)] px-2.5 py-1.5 text-xs font-semibold text-white"
                            >
                              Confirmer
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteId(null)}
                              className="touch-target rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)]"
                            >
                              Annuler
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(ev.id as number)}
                            aria-label={`Supprimer l'ECG du ${formatIsoDateFr(ev.date)}`}
                            className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--status-urgent-text)]"
                          >
                            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Supprimer</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  {ev.notes && (
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {ev.notes}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      {/* SECTION 2 : SOMMEIL */}
      <Card
        icon={<Moon className="h-5 w-5 text-[var(--color-accent)]" />}
        title="Bilan du sommeil (polygraphie / polysomnographie)"
        subtitle="Suivi de l'IAH, du type d'apnée (SAOS ou SACS) et de l'appareillage nocturne (PPC)."
        headerAction={
          !sleepFormOpen ? (
            <button
              type="button"
              onClick={openNewSleep}
              className="touch-target inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-accent)] px-3.5 py-2 text-xs font-semibold text-white hover:opacity-90"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span>Ajouter un bilan sommeil</span>
            </button>
          ) : undefined
        }
      >
        {/* Rappel de sécurité SERVE-HF / ASV */}
        <div className="mb-4 rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-3.5 text-xs leading-relaxed text-[var(--status-warning-text)]">
          <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
            <strong className="flex items-center gap-1.5 font-semibold">
              <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Contre-indication de l&apos;ASV en cas de SACS + ICFER</span>
            </strong>
            <EvidenceBadge grade="ESC 2026 Classe III / SERVE-HF" />
          </div>
          <p className="m-0">
            En présence d&apos;une <strong>apnée centrale du sommeil (SACS)</strong> associée à une
            insuffisance cardiaque à FEVG réduite (&le; 45 %), la{' '}
            <strong>servo-ventilation adaptative (ASV)</strong> est contre-indiquée (surrisque de
            mortalité cardiovasculaire dans l&apos;essai SERVE-HF). En revanche, pour une apnée
            obstructive (SAOS), la <strong>PPC</strong> reste un traitement usuel (remboursement
            Assurance Maladie lié à une observance minimale, en pratique &ge; 4 h/nuit selon les
            repères HAS).
          </p>
          <div className="mt-2">
            <Link
              to="/library?article=apnee-du-sommeil-insuffisance-cardiaque"
              className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-primary)] hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Lire la fiche Apnée du sommeil et insuffisance cardiaque</span>
            </Link>
          </div>
        </div>

        {sleepFormOpen && (
          <form
            onSubmit={(e) => void handleSaveSleep(e)}
            className="mb-5 space-y-4 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-subtle)]/50 p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                {editingSleepId !== null ? 'Modifier le bilan du sommeil' : 'Nouveau bilan sommeil'}
              </h3>
              <button
                type="button"
                onClick={() => setSleepFormOpen(false)}
                aria-label="Fermer le formulaire sommeil"
                className="touch-target rounded-lg p-1.5 text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {sleepError && (
              <div
                role="alert"
                className="flex items-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3 py-2 text-sm text-[var(--status-urgent-text)]"
              >
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{sleepError}</span>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label
                  htmlFor="sleep-date"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Date du bilan *
                </label>
                <input
                  id="sleep-date"
                  type="date"
                  required
                  value={sleepForm.date}
                  onChange={(e) => setSleepForm((prev) => ({ ...prev, date: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="sleep-ahi"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  IAH (événements / heure)
                </label>
                <input
                  id="sleep-ahi"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 24,5"
                  value={sleepForm.ahi}
                  onChange={(e) => setSleepForm((prev) => ({ ...prev, ahi: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="sleep-type"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Type d&apos;apnée
                </label>
                <select
                  id="sleep-type"
                  value={sleepForm.apnoeaType}
                  onChange={(e) =>
                    setSleepForm((prev) => ({ ...prev, apnoeaType: e.target.value }))
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                >
                  {Object.entries(SLEEP_APNOEA_TYPE_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="sleep-treatment"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Traitement / appareillage
                </label>
                <select
                  id="sleep-treatment"
                  value={sleepForm.treatment}
                  onChange={(e) =>
                    setSleepForm((prev) => ({ ...prev, treatment: e.target.value }))
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                >
                  {Object.entries(SLEEP_TREATMENT_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {showAsvInlineAlert && (
              <div
                role="note"
                className="rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3 py-2 text-xs text-[var(--status-urgent-text)]"
              >
                <strong>Point de vigilance SACS / ASV :</strong> en cas d&apos;apnée centrale
                (SACS) avec FEVG &le; 45 %, confirmez impérativement avec votre cardiologue et votre
                spécialiste du sommeil que l&apos;appareillage n&apos;est pas une ASV (contre-indiquée
                selon SERVE-HF / ESC 2026 Classe III).
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="sleep-adherence"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Observance moyenne PPC (heures / nuit, optionnel)
                </label>
                <input
                  id="sleep-adherence"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 6,2"
                  value={sleepForm.cpapAdherenceHours}
                  onChange={(e) =>
                    setSleepForm((prev) => ({ ...prev, cpapAdherenceHours: e.target.value }))
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="sleep-notes"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Notes sommeil
                </label>
                <input
                  id="sleep-notes"
                  type="text"
                  value={sleepForm.notes}
                  onChange={(e) => setSleepForm((prev) => ({ ...prev, notes: e.target.value }))}
                  placeholder="ex. Polygraphie ventilatoire ambulatoire, contrôle pneumologue..."
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => setSleepFormOpen(false)}
                className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={savingSleep}
                className="touch-target rounded-xl bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
              >
                {savingSleep
                  ? 'Enregistrement...'
                  : editingSleepId !== null
                    ? 'Mettre à jour'
                    : 'Enregistrer le bilan sommeil'}
              </button>
            </div>
          </form>
        )}

        {sleepEvents.length === 0 ? (
          <p className="text-sm text-[var(--text-secondary)]">
            Aucun bilan du sommeil enregistré pour le moment.
          </p>
        ) : (
          <ul className="m-0 list-none space-y-2.5 p-0">
            {sleepEvents.map((ev) => {
              const ahi = readDetailNumber(ev.details.ahi);
              const apnoeaType =
                typeof ev.details.apnoeaType === 'string' ? ev.details.apnoeaType : 'osa';
              const treatment =
                typeof ev.details.treatment === 'string' ? ev.details.treatment : 'none';
              const adherence = readDetailNumber(ev.details.cpapAdherenceHours);

              return (
                <li
                  key={ev.id ?? ev.date}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3.5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                        Bilan sommeil du {formatIsoDateFr(ev.date)}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          apnoeaType === 'csa'
                            ? 'bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                            : 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                        }`}
                      >
                        {SLEEP_APNOEA_TYPE_LABELS[apnoeaType] ?? apnoeaType}
                      </span>
                      {ahi !== undefined && (
                        <span className="rounded-full bg-[var(--bg-card)] px-2.5 py-0.5 text-xs font-semibold text-[var(--text-primary)] tabular-nums">
                          IAH : {formatFrenchNumber(ahi, 1)} /h
                        </span>
                      )}
                      <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-0.5 text-xs text-[var(--text-secondary)]">
                        {SLEEP_TREATMENT_LABELS[treatment] ?? treatment}
                      </span>
                      {adherence !== undefined && (
                        <span className="text-xs text-[var(--text-secondary)] tabular-nums">
                          Observance : {formatFrenchNumber(adherence, 1)} h/nuit
                        </span>
                      )}
                    </div>

                    {ev.id !== undefined && (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEditSleep(ev)}
                          className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-primary)]"
                        >
                          <Edit3 className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Modifier</span>
                        </button>
                        {confirmDeleteId === ev.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => void handleDeleteEvent(ev.id as number)}
                              className="touch-target rounded-lg bg-[var(--status-urgent-text)] px-2.5 py-1.5 text-xs font-semibold text-white"
                            >
                              Confirmer
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteId(null)}
                              className="touch-target rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)]"
                            >
                              Annuler
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(ev.id as number)}
                            aria-label={`Supprimer le bilan sommeil du ${formatIsoDateFr(ev.date)}`}
                            className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--status-urgent-text)]"
                          >
                            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Supprimer</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  {ev.notes && (
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {ev.notes}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Card>
    </div>
  );
}
