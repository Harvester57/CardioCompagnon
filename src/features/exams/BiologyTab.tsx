import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeftRight,
  BookOpen,
  CheckCircle2,
  Droplets,
  Edit3,
  FlaskConical,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { getTodayIsoDate, useActiveDb } from '../../db';
import {
  creatinineMgLToUmolL,
  creatinineUmolLToMgL,
  formatCreatinineFr,
  formatFrenchNumber,
  formatLdlFr,
  formatPotassiumFr,
  ldlGlToMmolL,
  ldlMmolLToGl,
} from '../../engine';
import type { LabResult, Medication, PatientProfile } from '../../types';
import { Card, EvidenceBadge, GlossaryTooltip } from '../../ui';
import {
  computeCreatinineDeltaPercent,
  computeLdlReductionPercent,
  formatInputDecimalFr,
  formatIsoDateFr,
  formatShortDateFr,
  hasActiveArniMedication,
  parseFrenchDecimal,
} from './constants';

export interface BiologyTabProps {
  labs: LabResult[];
  profile: PatientProfile;
  medications: Medication[];
}

interface LabFormState {
  date: string;
  ntProBnpPgMl: string;
  bnpPgMl: string;
  creatinineInput: string;
  creatinineUnit: 'umol/L' | 'mg/L';
  egfrMlMin: string;
  potassiumMmolL: string;
  sodiumMmolL: string;
  ferritinUgL: string;
  tsatPercent: string;
  ldlInput: string;
  ldlUnit: 'g/L' | 'mmol/L';
  lpaValue: string;
  lpaUnit: 'nmol/L' | 'mg/dL';
  haemoglobinGDl: string;
  hba1cPercent: string;
  tshMiuL: string;
  digoxinNgMl: string;
  notes: string;
}

function createEmptyLabForm(): LabFormState {
  return {
    date: getTodayIsoDate(),
    ntProBnpPgMl: '',
    bnpPgMl: '',
    creatinineInput: '',
    creatinineUnit: 'umol/L',
    egfrMlMin: '',
    potassiumMmolL: '',
    sodiumMmolL: '',
    ferritinUgL: '',
    tsatPercent: '',
    ldlInput: '',
    ldlUnit: 'g/L',
    lpaValue: '',
    lpaUnit: 'nmol/L',
    haemoglobinGDl: '',
    hba1cPercent: '',
    tshMiuL: '',
    digoxinNgMl: '',
    notes: '',
  };
}

function labToFormState(lab: LabResult): LabFormState {
  return {
    date: lab.date,
    ntProBnpPgMl: formatInputDecimalFr(lab.ntProBnpPgMl),
    bnpPgMl: formatInputDecimalFr(lab.bnpPgMl),
    creatinineInput: formatInputDecimalFr(lab.creatinineUmolL),
    creatinineUnit: 'umol/L',
    egfrMlMin: formatInputDecimalFr(lab.egfrMlMin),
    potassiumMmolL: formatInputDecimalFr(lab.potassiumMmolL),
    sodiumMmolL: formatInputDecimalFr(lab.sodiumMmolL),
    ferritinUgL: formatInputDecimalFr(lab.ferritinUgL),
    tsatPercent: formatInputDecimalFr(lab.tsatPercent),
    ldlInput: formatInputDecimalFr(lab.ldlGL),
    ldlUnit: 'g/L',
    lpaValue: formatInputDecimalFr(lab.lpaValue),
    lpaUnit: lab.lpaUnit ?? 'nmol/L',
    haemoglobinGDl: formatInputDecimalFr(lab.haemoglobinGDl),
    hba1cPercent: formatInputDecimalFr(lab.hba1cPercent),
    tshMiuL: formatInputDecimalFr(lab.tshMiuL),
    digoxinNgMl: formatInputDecimalFr(lab.digoxinNgMl),
    notes: lab.notes ?? '',
  };
}

function getLatestDefined<T>(
  labs: readonly LabResult[],
  selector: (lab: LabResult) => T | undefined,
): { lab: LabResult; value: T } | undefined {
  for (let i = labs.length - 1; i >= 0; i -= 1) {
    const val = selector(labs[i]);
    if (val !== undefined) {
      return { lab: labs[i], value: val };
    }
  }
  return undefined;
}

export function BiologyTab({ labs, profile, medications }: BiologyTabProps) {
  const db = useActiveDb();
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<LabFormState>(() => createEmptyLabForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const onArni = useMemo(() => hasActiveArniMedication(medications), [medications]);

  const latestNtProBnp = useMemo(() => getLatestDefined(labs, (l) => l.ntProBnpPgMl), [labs]);
  const latestBnp = useMemo(() => getLatestDefined(labs, (l) => l.bnpPgMl), [labs]);
  const latestCreat = useMemo(() => getLatestDefined(labs, (l) => l.creatinineUmolL), [labs]);
  const latestEgfr = useMemo(() => getLatestDefined(labs, (l) => l.egfrMlMin), [labs]);
  const latestK = useMemo(() => getLatestDefined(labs, (l) => l.potassiumMmolL), [labs]);
  const latestNa = useMemo(() => getLatestDefined(labs, (l) => l.sodiumMmolL), [labs]);
  const latestFerritin = useMemo(() => getLatestDefined(labs, (l) => l.ferritinUgL), [labs]);
  const latestTsat = useMemo(() => getLatestDefined(labs, (l) => l.tsatPercent), [labs]);
  const latestLdl = useMemo(() => getLatestDefined(labs, (l) => l.ldlGL), [labs]);
  const latestLpa = useMemo(() => getLatestDefined(labs, (l) => l.lpaValue), [labs]);
  const latestHb = useMemo(() => getLatestDefined(labs, (l) => l.haemoglobinGDl), [labs]);
  const latestHba1c = useMemo(() => getLatestDefined(labs, (l) => l.hba1cPercent), [labs]);
  const latestTsh = useMemo(() => getLatestDefined(labs, (l) => l.tshMiuL), [labs]);
  const latestDigoxin = useMemo(() => getLatestDefined(labs, (l) => l.digoxinNgMl), [labs]);

  const creatDelta = useMemo(() => computeCreatinineDeltaPercent(labs), [labs]);

  const ldlReductionPct = useMemo(() => {
    if (!latestLdl) return undefined;
    return computeLdlReductionPercent(latestLdl.value, profile.baselineLdlGL);
  }, [latestLdl, profile.baselineLdlGL]);

  const ntProBnpSeries = useMemo(
    () =>
      labs
        .filter((l) => typeof l.ntProBnpPgMl === 'number')
        .map((l) => ({
          date: l.date,
          label: formatShortDateFr(l.date),
          ntProBnp: l.ntProBnpPgMl,
        })),
    [labs],
  );

  const ldlSeries = useMemo(
    () =>
      labs
        .filter((l) => typeof l.ldlGL === 'number')
        .map((l) => ({
          date: l.date,
          label: formatShortDateFr(l.date),
          ldlGL: l.ldlGL,
        })),
    [labs],
  );

  const renalKSeries = useMemo(
    () =>
      labs
        .filter((l) => typeof l.creatinineUmolL === 'number' || typeof l.potassiumMmolL === 'number')
        .map((l) => ({
          date: l.date,
          label: formatShortDateFr(l.date),
          creatinine: l.creatinineUmolL,
          potassium: l.potassiumMmolL,
        })),
    [labs],
  );

  const parsedLdlPreview = useMemo(() => {
    const raw = parseFrenchDecimal(form.ldlInput);
    if (raw === undefined || raw <= 0) return null;
    if (form.ldlUnit === 'g/L') {
      return {
        canonicalGl: raw,
        convertedLabel: `${formatFrenchNumber(ldlGlToMmolL(raw, 2), 2)} mmol/L`,
      };
    }
    const gl = ldlMmolLToGl(raw, 2);
    return {
      canonicalGl: gl,
      convertedLabel: `${formatFrenchNumber(gl, 2)} g/L (enregistré en g/L)`,
    };
  }, [form.ldlInput, form.ldlUnit]);

  const parsedCreatPreview = useMemo(() => {
    const raw = parseFrenchDecimal(form.creatinineInput);
    if (raw === undefined || raw <= 0) return null;
    if (form.creatinineUnit === 'umol/L') {
      return {
        canonicalUmolL: raw,
        convertedLabel: `${formatFrenchNumber(creatinineUmolLToMgL(raw, 1), 1)} mg/L`,
      };
    }
    const umol = creatinineMgLToUmolL(raw, 0);
    return {
      canonicalUmolL: umol,
      convertedLabel: `${formatFrenchNumber(umol, 0)} µmol/L (enregistré en µmol/L)`,
    };
  }, [form.creatinineInput, form.creatinineUnit]);

  function openNewForm() {
    setEditingId(null);
    setForm(createEmptyLabForm());
    setFormError(null);
    setFormOpen(true);
  }

  function openEditForm(lab: LabResult) {
    if (lab.id === undefined) return;
    setEditingId(lab.id);
    setForm(labToFormState(lab));
    setFormError(null);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditingId(null);
    setFormError(null);
  }

  function handleToggleLdlUnit(nextUnit: 'g/L' | 'mmol/L') {
    if (nextUnit === form.ldlUnit) return;
    const currentVal = parseFrenchDecimal(form.ldlInput);
    if (currentVal !== undefined && currentVal > 0) {
      const converted =
        nextUnit === 'mmol/L' ? ldlGlToMmolL(currentVal, 2) : ldlMmolLToGl(currentVal, 2);
      setForm((prev) => ({
        ...prev,
        ldlUnit: nextUnit,
        ldlInput: formatInputDecimalFr(converted),
      }));
    } else {
      setForm((prev) => ({ ...prev, ldlUnit: nextUnit }));
    }
  }

  function handleToggleCreatUnit(nextUnit: 'umol/L' | 'mg/L') {
    if (nextUnit === form.creatinineUnit) return;
    const currentVal = parseFrenchDecimal(form.creatinineInput);
    if (currentVal !== undefined && currentVal > 0) {
      const converted =
        nextUnit === 'mg/L'
          ? creatinineUmolLToMgL(currentVal, 1)
          : creatinineMgLToUmolL(currentVal, 0);
      setForm((prev) => ({
        ...prev,
        creatinineUnit: nextUnit,
        creatinineInput: formatInputDecimalFr(converted),
      }));
    } else {
      setForm((prev) => ({ ...prev, creatinineUnit: nextUnit }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (!form.date.trim()) {
      setFormError('Veuillez renseigner la date du bilan biologique.');
      return;
    }

    const rawLdl = parseFrenchDecimal(form.ldlInput);
    const ldlGL =
      rawLdl !== undefined
        ? form.ldlUnit === 'g/L'
          ? rawLdl
          : ldlMmolLToGl(rawLdl, 2)
        : undefined;

    const rawCreat = parseFrenchDecimal(form.creatinineInput);
    const creatinineUmolL =
      rawCreat !== undefined
        ? form.creatinineUnit === 'umol/L'
          ? rawCreat
          : creatinineMgLToUmolL(rawCreat, 0)
        : undefined;

    const lpaValue = parseFrenchDecimal(form.lpaValue);

    const payload: Omit<LabResult, 'id'> = {
      date: form.date.trim(),
      ntProBnpPgMl: parseFrenchDecimal(form.ntProBnpPgMl),
      bnpPgMl: parseFrenchDecimal(form.bnpPgMl),
      creatinineUmolL,
      egfrMlMin: parseFrenchDecimal(form.egfrMlMin),
      potassiumMmolL: parseFrenchDecimal(form.potassiumMmolL),
      sodiumMmolL: parseFrenchDecimal(form.sodiumMmolL),
      ferritinUgL: parseFrenchDecimal(form.ferritinUgL),
      tsatPercent: parseFrenchDecimal(form.tsatPercent),
      ldlGL,
      lpaValue,
      lpaUnit: lpaValue !== undefined ? form.lpaUnit : undefined,
      haemoglobinGDl: parseFrenchDecimal(form.haemoglobinGDl),
      hba1cPercent: parseFrenchDecimal(form.hba1cPercent),
      tshMiuL: parseFrenchDecimal(form.tshMiuL),
      digoxinNgMl: parseFrenchDecimal(form.digoxinNgMl),
      notes: form.notes.trim() || undefined,
    };

    const hasAnyValue = Object.entries(payload).some(
      ([key, value]) => key !== 'date' && key !== 'lpaUnit' && value !== undefined,
    );
    if (!hasAnyValue) {
      setFormError("Veuillez renseigner au moins un paramètre biologique avant d'enregistrer.");
      return;
    }

    setSaving(true);
    try {
      if (editingId !== null) {
        await db.labs.put({ ...payload, id: editingId });
      } else {
        await db.labs.add(payload);
      }
      closeForm();
    } catch {
      setFormError("Impossible d'enregistrer ce bilan biologique pour le moment.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    await db.labs.delete(id);
    setConfirmDeleteId(null);
  }

  const ldlUnderTarget = latestLdl !== undefined && latestLdl.value < 0.55;
  const ldlDropOk = ldlReductionPct !== undefined && ldlReductionPct >= 50;

  return (
    <div className="space-y-5">
      {/* Cartes biomarqueurs cles */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* 1. NT-proBNP vs BNP */}
        <Card
          icon={<FlaskConical className="h-5 w-5 text-[var(--color-primary)]" />}
          title="Peptides natriurétiques (NT-proBNP / BNP)"
          subtitle="Comparez toujours le même dosage (NT-proBNP avec NT-proBNP)."
        >
          <div className="space-y-2.5 text-sm">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[var(--text-secondary)]">Dernier NT-proBNP</span>
              {latestNtProBnp ? (
                <span className="text-lg font-bold text-[var(--color-primary)] tabular-nums">
                  {`${formatFrenchNumber(latestNtProBnp.value, 0)} pg/mL`}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non renseigné
                </span>
              )}
            </div>
            {latestNtProBnp && (
              <p className="text-xs text-[var(--text-secondary)] tabular-nums">
                Date : {formatIsoDateFr(latestNtProBnp.lab.date)}
              </p>
            )}
            {latestBnp && (
              <div className="flex items-baseline justify-between gap-2 border-t border-[var(--border-subtle)] pt-2">
                <span className="text-[var(--text-secondary)]">Dernier BNP</span>
                <span className="font-semibold text-[var(--text-primary)] tabular-nums">
                  {formatFrenchNumber(latestBnp.value, 0)} pg/mL ({formatIsoDateFr(latestBnp.lab.date)})
                </span>
              </div>
            )}

            <div
              className={`rounded-xl border px-3 py-2 text-xs leading-relaxed ${
                onArni
                  ? 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                  : 'border-[var(--status-info-border)] bg-[var(--status-info-bg)] text-[var(--status-info-text)]'
              }`}
            >
              <strong className="font-semibold">
                {onArni
                  ? 'Traitement ARNI actif (sacubitril/valsartan) : '
                  : 'Repère ARNI (sacubitril/valsartan) : '}
              </strong>
              le sacubitril/valsartan peut élever artificiellement le BNP ; le{' '}
              <strong>NT-proBNP</strong> reste le marqueur préféré (ESC 2026 / HFA 2019).
            </div>
          </div>
        </Card>

        {/* 2. Fonction rénale & Potassium */}
        <Card
          icon={<Droplets className="h-5 w-5 text-[var(--color-primary)]" />}
          title="Fonction rénale et potassium (K+)"
          subtitle="Repères cliniques pour comprendre les ajustements médicaux."
        >
          <div className="space-y-2.5 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[var(--text-secondary)]">Créatinine</span>
              {latestCreat ? (
                <span className="font-semibold text-[var(--text-primary)] tabular-nums">
                  {formatCreatinineFr(latestCreat.value)}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non renseignée
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[var(--text-secondary)]">
                <GlossaryTooltip term="DFGe" />
              </span>
              {latestEgfr ? (
                <span className="font-semibold text-[var(--text-primary)] tabular-nums">
                  {`${formatFrenchNumber(latestEgfr.value, 0)} mL/min/1,73 m²`}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non renseigné
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[var(--text-secondary)]">Potassium (K+)</span>
              {latestK ? (
                <span
                  className={`tabular-nums ${
                    latestK.value >= 6.0
                      ? 'font-bold text-[var(--status-urgent-text)]'
                      : latestK.value >= 5.5
                        ? 'font-bold text-[var(--status-warning-text)]'
                        : 'font-semibold text-[var(--text-primary)]'
                  }`}
                >
                  {formatPotassiumFr(latestK.value)}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non renseigné
                </span>
              )}
            </div>

            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-2.5 text-xs leading-relaxed text-[var(--text-secondary)] tabular-nums">
              <p className="m-0">
                <strong className="text-[var(--text-primary)]">Repères K+ :</strong> vigilance à{' '}
                <strong>5,5 mmol/L</strong>, avis médical sans délai dès{' '}
                <strong>6,0 mmol/L</strong>.
              </p>
              <p className="mt-1 mb-0">
                <strong className="text-[var(--text-primary)]">Nuance pseudo-aggravation :</strong>{' '}
                une hausse de créatinine <strong>&le; 30 %</strong> après initiation ou titration
                d&apos;un bloqueur du SRAA, ARNI ou iSGLT2 est souvent attendue (Clark 2019 /
                Beldhuis 2022) ; au-delà de 30 %, montrez rapidement le bilan à votre médecin.
                {creatDelta && (
                  <span className="mt-1 block font-semibold text-[var(--text-primary)]">
                    Évolution récente ({formatIsoDateFr(creatDelta.previous.date)} vers{' '}
                    {formatIsoDateFr(creatDelta.current.date)}) :{' '}
                    {creatDelta.deltaPct >= 0 ? '+' : ''}
                    {formatFrenchNumber(creatDelta.deltaPct, 1)} %
                  </span>
                )}
              </p>
            </div>
          </div>
        </Card>

        {/* 3. Bilan martial (Ferritine / CST) */}
        <Card
          title="Bilan martial (ferritine et CST)"
          subtitle="Seuil de carence martiale en ICFER : CST < 20 %."
          headerAction={<EvidenceBadge grade="ESC 2026 I/IIa" />}
        >
          <div className="space-y-2.5 text-sm">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[var(--text-secondary)]">
                <GlossaryTooltip term="CST" /> (saturation transferrine)
              </span>
              {latestTsat ? (
                <span
                  className={`text-lg font-bold tabular-nums ${
                    latestTsat.value < 20
                      ? 'text-[var(--status-warning-text)]'
                      : 'text-[var(--color-primary)]'
                  }`}
                >
                  {`${formatFrenchNumber(latestTsat.value, 0)} %`}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non renseigné
                </span>
              )}
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[var(--text-secondary)]">Ferritine</span>
              {latestFerritin ? (
                <span className="font-semibold text-[var(--text-primary)] tabular-nums">
                  {`${formatFrenchNumber(latestFerritin.value, 0)} µg/L`}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non renseignée
                </span>
              )}
            </div>
            <p className="rounded-xl bg-[var(--bg-subtle)] px-3 py-2 text-xs leading-relaxed text-[var(--text-secondary)]">
              En cas de carence martiale (CST &lt; 20 %), les recommandations ESC 2026 orientent
              vers le <strong className="text-[var(--text-primary)]">fer intraveineux</strong> (le
              fer oral ne s&apos;est pas montré efficace dans IRONOUT-HF).{' '}
              <Link
                to="/library?article=carence-martiale-et-fer-iv"
                className="font-semibold text-[var(--color-primary)] hover:underline"
              >
                Lire la fiche
              </Link>
            </p>
          </div>
        </Card>

        {/* 4. Bilan lipidique (LDL-c & Lp(a)) */}
        <Card
          title="Cholestérol LDL et Lipoprotéine(a)"
          subtitle="Cible coronaire ESC 2024 : < 0,55 g/L et baisse ≥ 50 %."
          headerAction={<EvidenceBadge grade="ESC 2024 Classe I" />}
        >
          <div className="space-y-2.5 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[var(--text-secondary)]">Dernier LDL-c</span>
              {latestLdl ? (
                <span className="text-lg font-bold text-[var(--color-primary)] tabular-nums">
                  {formatLdlFr(latestLdl.value)}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non renseigné
                </span>
              )}
            </div>

            {latestLdl && (
              <div className="flex flex-wrap gap-2 text-xs tabular-nums">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-medium ${
                    ldlUnderTarget
                      ? 'border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] text-[var(--status-stable-text)]'
                      : 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                  }`}
                >
                  {ldlUnderTarget ? (
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  <span>
                    {ldlUnderTarget ? 'Cible < 0,55 g/L atteinte' : 'Au-dessus de 0,55 g/L'}
                  </span>
                </span>

                {ldlReductionPct !== undefined && profile.baselineLdlGL !== undefined && (
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-medium ${
                      ldlDropOk
                        ? 'border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] text-[var(--status-stable-text)]'
                        : 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]'
                    }`}
                  >
                    <span>
                      Baisse : {formatFrenchNumber(ldlReductionPct, 0)} % par rapport à la valeur
                      initiale ({formatFrenchNumber(profile.baselineLdlGL, 2)} g/L)
                    </span>
                  </span>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-[var(--border-subtle)] pt-2">
              <span className="text-[var(--text-secondary)]">Lipoprotéine(a) — Lp(a)</span>
              {latestLpa ? (
                <span className="font-semibold text-[var(--text-primary)] tabular-nums">
                  {`${formatFrenchNumber(latestLpa.value, 0)} ${latestLpa.lab.lpaUnit ?? 'nmol/L'}`}
                </span>
              ) : (
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  Non dosée (un dosage dans la vie est recommandé)
                </span>
              )}
            </div>

            <div className="pt-1">
              <Link
                to="/library?article=cholesterol-et-prevention-secondaire"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:underline"
              >
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Cholestérol LDL, Lp(a) et prévention secondaire</span>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* Autres biomarqueurs suivis */}
      <Card title="Autres biomarqueurs biologiques suivis">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            {
              label: 'Hémoglobine (Hb)',
              value: latestHb ? `${formatFrenchNumber(latestHb.value, 1)} g/dL` : '—',
            },
            {
              label: 'HbA1c',
              value: latestHba1c ? `${formatFrenchNumber(latestHba1c.value, 1)} %` : '—',
            },
            {
              label: 'TSH',
              value: latestTsh ? `${formatFrenchNumber(latestTsh.value, 2)} mUI/L` : '—',
            },
            {
              label: 'Sodium (Na+)',
              value: latestNa ? `${formatFrenchNumber(latestNa.value, 0)} mmol/L` : '—',
            },
            {
              label: 'Digoxinémie',
              value: latestDigoxin ? `${formatFrenchNumber(latestDigoxin.value, 2)} ng/mL` : '—',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-3"
            >
              <p className="m-0 text-xs text-[var(--text-secondary)]">{item.label}</p>
              <p className="mt-1 mb-0 text-sm font-bold text-[var(--text-primary)] tabular-nums">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Graphiques Recharts : NT-proBNP, LDL-c (cible 0,55 g/L), Créatinine / K+ */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card
          title="Évolution du NT-proBNP (pg/mL)"
          subtitle="Les fluctuations inférieures à 40 % peuvent relever de la variabilité biologique usuelle."
        >
          {ntProBnpSeries.length > 0 ? (
            <div className="h-56 w-full" data-testid="ntprobnp-chart">
              <ResponsiveContainer width="100%" height="100%" minWidth={220}>
                <LineChart data={ntProBnpSeries} margin={{ top: 10, right: 16, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
                  <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="var(--text-secondary)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="var(--text-secondary)" />
                  <Tooltip
                    formatter={(v) => [
                      typeof v === 'number' ? `${formatFrenchNumber(v, 0)} pg/mL` : String(v ?? ''),
                      'NT-proBNP',
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="ntProBnp"
                    name="NT-proBNP (pg/mL)"
                    stroke="#144A68"
                    strokeWidth={2.5}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-sm text-[var(--text-secondary)]">
              Enregistrez au moins un dosage de NT-proBNP pour afficher la courbe.
            </p>
          )}
        </Card>

        <Card
          title="Évolution du LDL-cholestérol (g/L)"
          subtitle="Ligne repère à 0,55 g/L (1,42 mmol/L — cible ESC 2024 très haut risque)."
        >
          {ldlSeries.length > 0 ? (
            <div className="h-56 w-full" data-testid="ldl-chart">
              <ResponsiveContainer width="100%" height="100%" minWidth={220}>
                <LineChart data={ldlSeries} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
                  <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="var(--text-secondary)" />
                  <YAxis domain={[0, 'auto']} tick={{ fontSize: 12 }} stroke="var(--text-secondary)" />
                  <Tooltip
                    formatter={(v) => [
                      typeof v === 'number' ? formatLdlFr(v) : String(v ?? ''),
                      'LDL-c',
                    ]}
                  />
                  <ReferenceLine
                    y={0.55}
                    stroke="#065F46"
                    strokeDasharray="4 4"
                    label={{ value: 'Cible 0,55 g/L', position: 'insideTopRight', fill: '#065F46', fontSize: 11 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ldlGL"
                    name="LDL-c (g/L)"
                    stroke="#0F766E"
                    strokeWidth={2.5}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-sm text-[var(--text-secondary)]">
              Enregistrez au moins un dosage de LDL-c pour suivre l&apos;atteinte de la cible.
            </p>
          )}
        </Card>
      </div>

      <Card
        title="Évolution créatinine (µmol/L) et potassium (mmol/L)"
        subtitle="Suivi conjoint utile lors des paliers de titration des traitements de fond."
      >
        {renalKSeries.length > 0 ? (
          <div className="h-60 w-full" data-testid="renal-k-chart">
            <ResponsiveContainer width="100%" height="100%" minWidth={240}>
              <LineChart data={renalKSeries} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
                <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="var(--text-secondary)" />
                <YAxis
                  yAxisId="creat"
                  orientation="left"
                  tick={{ fontSize: 12 }}
                  stroke="#144A68"
                />
                <YAxis
                  yAxisId="k"
                  orientation="right"
                  domain={[3, 6.5]}
                  tick={{ fontSize: 12 }}
                  stroke="#B45309"
                />
                <Tooltip
                  formatter={(v, name) => {
                    if (typeof v !== 'number') return [String(v ?? ''), String(name)];
                    if (String(name).includes('Potassium')) {
                      return [formatPotassiumFr(v), 'Potassium (K+)'];
                    }
                    return [formatCreatinineFr(v), 'Créatinine'];
                  }}
                />
                <Legend />
                <ReferenceLine
                  yAxisId="k"
                  y={5.5}
                  stroke="#B45309"
                  strokeDasharray="4 4"
                  label={{ value: 'K+ 5,5', position: 'insideRight', fill: '#B45309', fontSize: 11 }}
                />
                <ReferenceLine
                  yAxisId="k"
                  y={6.0}
                  stroke="#991B1B"
                  strokeDasharray="4 4"
                  label={{ value: 'K+ 6,0', position: 'insideRight', fill: '#991B1B', fontSize: 11 }}
                />
                <Line
                  yAxisId="creat"
                  type="monotone"
                  dataKey="creatinine"
                  name="Créatinine (µmol/L)"
                  stroke="#144A68"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  connectNulls
                />
                <Line
                  yAxisId="k"
                  type="monotone"
                  dataKey="potassium"
                  name="Potassium (mmol/L)"
                  stroke="#B45309"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-sm text-[var(--text-secondary)]">
            Enregistrez un bilan contenant la créatinine ou le potassium pour afficher la courbe.
          </p>
        )}
      </Card>

      {/* Formulaire de saisie / édition biologique avec convertisseurs intégrés */}
      {formOpen && (
        <Card
          title={
            editingId !== null ? 'Modifier le bilan biologique' : 'Saisir un bilan biologique'
          }
          subtitle="Utilisez les sélecteurs d'unités pour convertir automatiquement le LDL (g/L et mmol/L) et la créatinine (µmol/L et mg/L)."
          headerAction={
            <button
              type="button"
              onClick={closeForm}
              aria-label="Fermer le formulaire biologique"
              className="touch-target rounded-lg p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          }
        >
          <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
            {formError && (
              <div
                role="alert"
                className="flex items-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3 py-2 text-sm text-[var(--status-urgent-text)]"
              >
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{formError}</span>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="lab-date"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Date du prélèvement *
                </label>
                <input
                  id="lab-date"
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="lab-ntprobnp"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  NT-proBNP (pg/mL)
                </label>
                <input
                  id="lab-ntprobnp"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 610"
                  value={form.ntProBnpPgMl}
                  onChange={(e) => setForm((prev) => ({ ...prev, ntProBnpPgMl: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="lab-bnp"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  BNP (pg/mL)
                </label>
                <input
                  id="lab-bnp"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 120"
                  value={form.bnpPgMl}
                  onChange={(e) => setForm((prev) => ({ ...prev, bnpPgMl: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>
            </div>

            {/* Bloc conversion Créatinine + DFGe + K+ + Na+ */}
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3.5">
              <fieldset className="min-w-0 border-0 p-0">
                <legend className="mb-2.5 block w-full p-0 text-xs font-semibold text-[var(--text-primary)]">
                  Rein et ionogramme (conversion créatinine µmol/L et mg/L)
                </legend>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <label
                      htmlFor="lab-creatinine"
                      className="text-xs font-semibold text-[var(--text-primary)]"
                    >
                      Créatinine ({form.creatinineUnit === 'umol/L' ? 'µmol/L' : 'mg/L'})
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        handleToggleCreatUnit(
                          form.creatinineUnit === 'umol/L' ? 'mg/L' : 'umol/L',
                        )
                      }
                      aria-label="Basculer l'unité de créatinine entre µmol/L et mg/L"
                      className="inline-flex items-center gap-1 rounded-md border border-[var(--border-strong)] bg-[var(--bg-card)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
                    >
                      <ArrowLeftRight className="h-3 w-3" aria-hidden="true" />
                      <span>{form.creatinineUnit === 'umol/L' ? 'en mg/L' : 'en µmol/L'}</span>
                    </button>
                  </div>
                  <input
                    id="lab-creatinine"
                    type="text"
                    inputMode="decimal"
                    placeholder={form.creatinineUnit === 'umol/L' ? 'ex. 98' : 'ex. 11,1'}
                    value={form.creatinineInput}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, creatinineInput: e.target.value }))
                    }
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                  {parsedCreatPreview && (
                    <p
                      className="mt-1 text-xs text-[var(--color-primary)] tabular-nums"
                      data-testid="creatinine-conversion-preview"
                    >
                      Équivalence : {parsedCreatPreview.convertedLabel}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lab-egfr"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    DFGe (mL/min/1,73 m²)
                  </label>
                  <input
                    id="lab-egfr"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 68"
                    value={form.egfrMlMin}
                    onChange={(e) => setForm((prev) => ({ ...prev, egfrMlMin: e.target.value }))}
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lab-potassium"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Potassium K+ (mmol/L)
                  </label>
                  <input
                    id="lab-potassium"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 4,6"
                    value={form.potassiumMmolL}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, potassiumMmolL: e.target.value }))
                    }
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lab-sodium"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Sodium Na+ (mmol/L)
                  </label>
                  <input
                    id="lab-sodium"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 140"
                    value={form.sodiumMmolL}
                    onChange={(e) => setForm((prev) => ({ ...prev, sodiumMmolL: e.target.value }))}
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>
              </div>
              </fieldset>
            </div>

            {/* Bloc Lipides (LDL conversion g/L <-> mmol/L + Lp(a)) & Bilan martial */}
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3.5">
              <fieldset className="min-w-0 border-0 p-0">
                <legend className="mb-2.5 block w-full p-0 text-xs font-semibold text-[var(--text-primary)]">
                  Lipides (conversion LDL g/L et mmol/L) et bilan martial
                </legend>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <label
                      htmlFor="lab-ldl"
                      className="text-xs font-semibold text-[var(--text-primary)]"
                    >
                      LDL-c ({form.ldlUnit})
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        handleToggleLdlUnit(form.ldlUnit === 'g/L' ? 'mmol/L' : 'g/L')
                      }
                      aria-label="Basculer l'unité de LDL entre g/L et mmol/L"
                      className="inline-flex items-center gap-1 rounded-md border border-[var(--border-strong)] bg-[var(--bg-card)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
                    >
                      <ArrowLeftRight className="h-3 w-3" aria-hidden="true" />
                      <span>{form.ldlUnit === 'g/L' ? 'en mmol/L' : 'en g/L'}</span>
                    </button>
                  </div>
                  <input
                    id="lab-ldl"
                    type="text"
                    inputMode="decimal"
                    placeholder={form.ldlUnit === 'g/L' ? 'ex. 0,52' : 'ex. 1,34'}
                    value={form.ldlInput}
                    onChange={(e) => setForm((prev) => ({ ...prev, ldlInput: e.target.value }))}
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                  {parsedLdlPreview && (
                    <p
                      className="mt-1 text-xs text-[var(--color-primary)] tabular-nums"
                      data-testid="ldl-conversion-preview"
                    >
                      Équivalence : {parsedLdlPreview.convertedLabel}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lab-lpa"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Lp(a)
                  </label>
                  <div className="flex gap-1.5">
                    <input
                      id="lab-lpa"
                      type="text"
                      inputMode="decimal"
                      placeholder="ex. 45"
                      value={form.lpaValue}
                      onChange={(e) => setForm((prev) => ({ ...prev, lpaValue: e.target.value }))}
                      className="touch-target min-w-0 flex-1 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                    />
                    <select
                      aria-label="Unité Lp(a)"
                      value={form.lpaUnit}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          lpaUnit: e.target.value as 'nmol/L' | 'mg/dL',
                        }))
                      }
                      className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-2 py-2 text-xs text-[var(--text-primary)]"
                    >
                      <option value="nmol/L">nmol/L</option>
                      <option value="mg/dL">mg/dL</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lab-ferritin"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Ferritine (µg/L)
                  </label>
                  <input
                    id="lab-ferritin"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 85"
                    value={form.ferritinUgL}
                    onChange={(e) => setForm((prev) => ({ ...prev, ferritinUgL: e.target.value }))}
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lab-tsat"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    CST (%)
                  </label>
                  <input
                    id="lab-tsat"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 22"
                    value={form.tsatPercent}
                    onChange={(e) => setForm((prev) => ({ ...prev, tsatPercent: e.target.value }))}
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>
              </div>
              </fieldset>
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              <div>
                <label
                  htmlFor="lab-hb"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Hémoglobine (g/dL)
                </label>
                <input
                  id="lab-hb"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 13,5"
                  value={form.haemoglobinGDl}
                  onChange={(e) => setForm((prev) => ({ ...prev, haemoglobinGDl: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="lab-hba1c"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  HbA1c (%)
                </label>
                <input
                  id="lab-hba1c"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 5,8"
                  value={form.hba1cPercent}
                  onChange={(e) => setForm((prev) => ({ ...prev, hba1cPercent: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="lab-tsh"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  TSH (mUI/L)
                </label>
                <input
                  id="lab-tsh"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 1,9"
                  value={form.tshMiuL}
                  onChange={(e) => setForm((prev) => ({ ...prev, tshMiuL: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="lab-digoxin"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Digoxinémie (ng/mL)
                </label>
                <input
                  id="lab-digoxin"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 0,7"
                  value={form.digoxinNgMl}
                  onChange={(e) => setForm((prev) => ({ ...prev, digoxinNgMl: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lab-notes"
                className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
              >
                Notes (laboratoire, contexte de titration...)
              </label>
              <textarea
                id="lab-notes"
                rows={2}
                value={form.notes}
                onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="ex. Contrôle à 10 jours après palier de sacubitril/valsartan..."
                className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={closeForm}
                className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
              >
                Annuler
              </button>
              <button
                type="submit"
                disabled={saving}
                className="touch-target rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
              >
                {saving
                  ? 'Enregistrement...'
                  : editingId !== null
                    ? 'Mettre à jour'
                    : 'Enregistrer le bilan'}
              </button>
            </div>
          </form>
        </Card>
      )}

      {/* Historique des bilans biologiques */}
      <Card
        title="Historique des bilans biologiques"
        subtitle="Classés du plus récent au plus ancien."
        headerAction={
          !formOpen ? (
            <button
              type="button"
              onClick={openNewForm}
              className="touch-target inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)]"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span>Ajouter un bilan</span>
            </button>
          ) : undefined
        }
      >
        {labs.length === 0 ? (
          <p className="text-sm text-[var(--text-secondary)]">
            Aucun bilan biologique enregistré pour le moment.
          </p>
        ) : (
          <ul className="m-0 list-none space-y-3 p-0">
            {[...labs].reverse().map((lab) => (
              <li
                key={lab.id ?? lab.date}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3.5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span className="text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                    Bilan du {formatIsoDateFr(lab.date)}
                  </span>
                  {lab.id !== undefined && (
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => openEditForm(lab)}
                        className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                      >
                        <Edit3 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Modifier</span>
                      </button>
                      {confirmDeleteId === lab.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => void handleDelete(lab.id as number)}
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
                          onClick={() => setConfirmDeleteId(lab.id as number)}
                          aria-label={`Supprimer le bilan biologique du ${formatIsoDateFr(lab.date)}`}
                          className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--status-urgent-text)] hover:bg-[var(--status-urgent-bg)]"
                        >
                          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Supprimer</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[var(--text-secondary)] tabular-nums">
                  {lab.ntProBnpPgMl !== undefined && (
                    <span>
                      NT-proBNP :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.ntProBnpPgMl, 0)} pg/mL
                      </strong>
                    </span>
                  )}
                  {lab.bnpPgMl !== undefined && (
                    <span>
                      BNP :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.bnpPgMl, 0)} pg/mL
                      </strong>
                    </span>
                  )}
                  {lab.creatinineUmolL !== undefined && (
                    <span>
                      Créatinine :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatCreatinineFr(lab.creatinineUmolL)}
                      </strong>
                    </span>
                  )}
                  {lab.egfrMlMin !== undefined && (
                    <span>
                      DFGe :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.egfrMlMin, 0)} mL/min/1,73 m²
                      </strong>
                    </span>
                  )}
                  {lab.potassiumMmolL !== undefined && (
                    <span>
                      K+ :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatPotassiumFr(lab.potassiumMmolL)}
                      </strong>
                    </span>
                  )}
                  {lab.sodiumMmolL !== undefined && (
                    <span>
                      Na+ :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.sodiumMmolL, 0)} mmol/L
                      </strong>
                    </span>
                  )}
                  {lab.ldlGL !== undefined && (
                    <span>
                      LDL :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatLdlFr(lab.ldlGL)}
                      </strong>
                    </span>
                  )}
                  {lab.lpaValue !== undefined && (
                    <span>
                      Lp(a) :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.lpaValue, 0)} {lab.lpaUnit ?? 'nmol/L'}
                      </strong>
                    </span>
                  )}
                  {lab.ferritinUgL !== undefined && (
                    <span>
                      Ferritine :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.ferritinUgL, 0)} µg/L
                      </strong>
                    </span>
                  )}
                  {lab.tsatPercent !== undefined && (
                    <span>
                      CST :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.tsatPercent, 0)} %
                      </strong>
                    </span>
                  )}
                  {lab.haemoglobinGDl !== undefined && (
                    <span>
                      Hb :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.haemoglobinGDl, 1)} g/dL
                      </strong>
                    </span>
                  )}
                  {lab.hba1cPercent !== undefined && (
                    <span>
                      HbA1c :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.hba1cPercent, 1)} %
                      </strong>
                    </span>
                  )}
                  {lab.tshMiuL !== undefined && (
                    <span>
                      TSH :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.tshMiuL, 2)} mUI/L
                      </strong>
                    </span>
                  )}
                  {lab.digoxinNgMl !== undefined && (
                    <span>
                      Digoxine :{' '}
                      <strong className="text-[var(--text-primary)]">
                        {formatFrenchNumber(lab.digoxinNgMl, 2)} ng/mL
                      </strong>
                    </span>
                  )}
                </div>

                {lab.notes && (
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {lab.notes}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
