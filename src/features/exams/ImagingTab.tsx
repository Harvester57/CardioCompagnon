import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  AlertTriangle,
  BookOpen,
  Edit3,
  HeartPulse,
  Info,
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
import { formatFrenchNumber } from '../../engine';
import type { ImagingExam, PatientProfile } from '../../types';
import { Card, EvidenceBadge, GlossaryTooltip } from '../../ui';
import {
  LGE_PATTERN_LABELS,
  LV_NORMS,
  LV_THROMBUS_LABELS,
  MITRAL_REGURGITATION_LABELS,
  buildSeparatedLvefSeries,
  evaluateNormStatus,
  formatInputDecimalFr,
  formatIsoDateFr,
  parseFrenchDecimal,
} from './constants';

export interface ImagingTabProps {
  imaging: ImagingExam[];
  profile: PatientProfile;
}

interface ImagingFormState {
  date: string;
  modality: 'ett' | 'irm';
  lvefPercent: string;
  lveddMm: string;
  lvedviMlM2: string;
  lvesviMlM2: string;
  lgeScarPresent: boolean;
  lgeScarPercent: string;
  lgePattern: NonNullable<ImagingExam['lgePattern']> | '';
  aorticValveAreaCm2: string;
  aorticMeanGradientMmHg: string;
  strokeVolumeIndexMlM2: string;
  mitralRegurgitation: NonNullable<ImagingExam['mitralRegurgitation']> | '';
  lvThrombus: NonNullable<ImagingExam['lvThrombus']> | '';
  notes: string;
}

function createEmptyImagingForm(): ImagingFormState {
  return {
    date: getTodayIsoDate(),
    modality: 'ett',
    lvefPercent: '',
    lveddMm: '',
    lvedviMlM2: '',
    lvesviMlM2: '',
    lgeScarPresent: false,
    lgeScarPercent: '',
    lgePattern: '',
    aorticValveAreaCm2: '',
    aorticMeanGradientMmHg: '',
    strokeVolumeIndexMlM2: '',
    mitralRegurgitation: '',
    lvThrombus: '',
    notes: '',
  };
}

function examToFormState(exam: ImagingExam): ImagingFormState {
  return {
    date: exam.date,
    modality: exam.modality,
    lvefPercent: formatInputDecimalFr(exam.lvefPercent),
    lveddMm: formatInputDecimalFr(exam.lveddMm),
    lvedviMlM2: formatInputDecimalFr(exam.lvedviMlM2),
    lvesviMlM2: formatInputDecimalFr(exam.lvesviMlM2),
    lgeScarPresent: Boolean(exam.lgeScarPresent),
    lgeScarPercent: formatInputDecimalFr(exam.lgeScarPercent),
    lgePattern: exam.lgePattern ?? '',
    aorticValveAreaCm2: formatInputDecimalFr(exam.aorticValveAreaCm2),
    aorticMeanGradientMmHg: formatInputDecimalFr(exam.aorticMeanGradientMmHg),
    strokeVolumeIndexMlM2: formatInputDecimalFr(exam.strokeVolumeIndexMlM2),
    mitralRegurgitation: exam.mitralRegurgitation ?? '',
    lvThrombus: exam.lvThrombus ?? '',
    notes: exam.notes ?? '',
  };
}

function NormBadge({
  value,
  range,
}: {
  value: number;
  range: { min: number; max: number; unit: string };
}) {
  const status = evaluateNormStatus(value, range);
  if (status === 'above') {
    return (
      <span className="inline-flex items-center rounded-full border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] px-2 py-0.5 text-xs font-medium text-[var(--status-warning-text)]">
        Au-dessus de la norme ({range.min}-{range.max} {range.unit})
      </span>
    );
  }
  if (status === 'below') {
    return (
      <span className="inline-flex items-center rounded-full border border-[var(--status-info-border)] bg-[var(--status-info-bg)] px-2 py-0.5 text-xs font-medium text-[var(--status-info-text)]">
        En dessous ({range.min}-{range.max} {range.unit})
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-2 py-0.5 text-xs font-medium text-[var(--status-stable-text)]">
      Dans la norme ({range.min}-{range.max} {range.unit})
    </span>
  );
}

export function ImagingTab({ imaging, profile }: ImagingTabProps) {
  const db = useActiveDb();
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<ImagingFormState>(() => createEmptyImagingForm());
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [modalityFilter, setModalityFilter] = useState<'all' | 'ett' | 'irm'>('all');
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const sexLabel = profile.sex === 'F' ? 'Femme' : 'Homme';
  const ettNorms = LV_NORMS.ett[profile.sex];
  const irmNorms = LV_NORMS.irm[profile.sex];
  const activeFormNorms = LV_NORMS[form.modality][profile.sex];

  const ettExams = useMemo(
    () => imaging.filter((exam) => exam.modality === 'ett'),
    [imaging],
  );
  const irmExams = useMemo(
    () => imaging.filter((exam) => exam.modality === 'irm'),
    [imaging],
  );

  const latestEtt = ettExams[ettExams.length - 1];
  const latestIrm = irmExams[irmExams.length - 1];

  const chartData = useMemo(() => buildSeparatedLvefSeries(imaging), [imaging]);

  const filteredExams = useMemo(() => {
    const base =
      modalityFilter === 'all'
        ? imaging
        : imaging.filter((exam) => exam.modality === modalityFilter);
    return [...base].reverse();
  }, [imaging, modalityFilter]);

  function openNewForm(defaultModality: 'ett' | 'irm' = 'ett') {
    setEditingId(null);
    setForm({ ...createEmptyImagingForm(), modality: defaultModality });
    setFormError(null);
    setFormOpen(true);
  }

  function openEditForm(exam: ImagingExam) {
    if (exam.id === undefined) return;
    setEditingId(exam.id);
    setForm(examToFormState(exam));
    setFormError(null);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditingId(null);
    setFormError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (!form.date.trim()) {
      setFormError("Veuillez renseigner la date de l'examen.");
      return;
    }

    const lvef = parseFrenchDecimal(form.lvefPercent);
    if (form.lvefPercent.trim() !== '' && (lvef === undefined || lvef < 5 || lvef > 90)) {
      setFormError('Veuillez saisir une FEVG valide comprise entre 5 et 90 %.');
      return;
    }

    const payload: Omit<ImagingExam, 'id'> = {
      date: form.date.trim(),
      modality: form.modality,
      lvefPercent: lvef,
      lveddMm: parseFrenchDecimal(form.lveddMm),
      lvedviMlM2: parseFrenchDecimal(form.lvedviMlM2),
      lvesviMlM2: parseFrenchDecimal(form.lvesviMlM2),
      lgeScarPresent: form.modality === 'irm' ? form.lgeScarPresent : undefined,
      lgeScarPercent:
        form.modality === 'irm' && form.lgeScarPresent
          ? parseFrenchDecimal(form.lgeScarPercent)
          : undefined,
      lgePattern:
        form.modality === 'irm' && form.lgePattern !== ''
          ? form.lgePattern
          : undefined,
      aorticValveAreaCm2: parseFrenchDecimal(form.aorticValveAreaCm2),
      aorticMeanGradientMmHg: parseFrenchDecimal(form.aorticMeanGradientMmHg),
      strokeVolumeIndexMlM2: parseFrenchDecimal(form.strokeVolumeIndexMlM2),
      mitralRegurgitation:
        form.mitralRegurgitation !== '' ? form.mitralRegurgitation : undefined,
      lvThrombus: form.lvThrombus !== '' ? form.lvThrombus : undefined,
      notes: form.notes.trim() || undefined,
    };

    setSaving(true);
    try {
      if (editingId !== null) {
        await db.imaging.put({ ...payload, id: editingId });
      } else {
        await db.imaging.add(payload);
      }
      closeForm();
    } catch {
      setFormError("Impossible d'enregistrer cet examen pour le moment.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    await db.imaging.delete(id);
    setConfirmDeleteId(null);
  }

  return (
    <div className="space-y-5">
      {/* Encadré explicatif strict ETT vs IRM */}
      <Card
        tone="subtle"
        icon={<Info className="h-5 w-5 text-[var(--color-primary)]" />}
        title="Séparation stricte : ETT et IRM cardiaque ne se comparent pas directement"
        headerAction={<EvidenceBadge grade="REVIVED-BCIS2 / Kawel-Boehm 2020" />}
      >
        <div className="space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p>
            Dans la cardiomyopathie ischémique, l&apos;
            <strong className="font-semibold text-[var(--text-primary)]">IRM cardiaque</strong>{' '}
            mesure en moyenne la <GlossaryTooltip term="FEVG" /> environ{' '}
            <strong className="font-semibold text-[var(--text-primary)] tabular-nums">
              5,5 points plus bas
            </strong>{' '}
            que l&apos;
            <strong className="font-semibold text-[var(--text-primary)]">
              échocardiographie transthoracique (ETT)
            </strong>{' '}
            et utilise des normes de volumes ventriculaires (
            <GlossaryTooltip term="VTDi" />, <GlossaryTooltip term="VTSi" />) nettement plus
            larges. Les deux courbes ci-dessous restent donc strictement séparées : comparez
            toujours ETT avec ETT et IRM avec IRM.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/library?article=fraction-dejection"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Comprendre la FEVG (ETT vs IRM)</span>
            </Link>
            <Link
              to="/library?article=examens-et-chiffres"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Volumes du VG et cicatrice LGE</span>
            </Link>
          </div>
        </div>
      </Card>

      {/* Deux cartes synthetiques distinctes : Derniere ETT vs Derniere IRM */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card
          icon={<HeartPulse className="h-5 w-5 text-[var(--color-primary)]" />}
          title="Dernière ETT (échocardiographie)"
          subtitle={
            latestEtt
              ? `Réalisée le ${formatIsoDateFr(latestEtt.date)} — ${ettExams.length} examen${ettExams.length > 1 ? 's' : ''} ETT`
              : 'Aucune ETT enregistrée'
          }
          headerAction={
            <button
              type="button"
              onClick={() => openNewForm('ett')}
              className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--bg-subtle)]"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span>Ajouter ETT</span>
            </button>
          }
        >
          {latestEtt ? (
            <dl className="space-y-2.5 text-sm">
              <div className="flex items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                <dt className="text-[var(--text-secondary)]">FEVG (ETT)</dt>
                {latestEtt.lvefPercent !== undefined ? (
                  <dd className="text-xl font-bold text-[var(--color-primary)] tabular-nums">
                    {`${formatFrenchNumber(latestEtt.lvefPercent, 0)} %`}
                  </dd>
                ) : (
                  <dd className="text-sm font-medium text-[var(--text-secondary)]">
                    Non renseignée
                  </dd>
                )}
              </div>
              {latestEtt.lveddMm !== undefined && ettNorms.lveddMm && (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <dt className="text-[var(--text-secondary)]">DTDVG (diamètre)</dt>
                  <dd className="flex flex-wrap items-center gap-2 tabular-nums">
                    <span className="font-semibold text-[var(--text-primary)]">
                      {formatFrenchNumber(latestEtt.lveddMm, 0)} mm
                    </span>
                    <NormBadge value={latestEtt.lveddMm} range={ettNorms.lveddMm} />
                  </dd>
                </div>
              )}
              {latestEtt.lvedviMlM2 !== undefined && (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <dt className="text-[var(--text-secondary)]">VTDi (ETT, {sexLabel})</dt>
                  <dd className="flex flex-wrap items-center gap-2 tabular-nums">
                    <span className="font-semibold text-[var(--text-primary)]">
                      {formatFrenchNumber(latestEtt.lvedviMlM2, 0)} mL/m²
                    </span>
                    <NormBadge value={latestEtt.lvedviMlM2} range={ettNorms.lvedviMlM2} />
                  </dd>
                </div>
              )}
              {latestEtt.lvesviMlM2 !== undefined && (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <dt className="text-[var(--text-secondary)]">VTSi (ETT, {sexLabel})</dt>
                  <dd className="flex flex-wrap items-center gap-2 tabular-nums">
                    <span className="font-semibold text-[var(--text-primary)]">
                      {formatFrenchNumber(latestEtt.lvesviMlM2, 0)} mL/m²
                    </span>
                    <NormBadge value={latestEtt.lvesviMlM2} range={ettNorms.lvesviMlM2} />
                  </dd>
                </div>
              )}
              {(latestEtt.aorticValveAreaCm2 !== undefined ||
                latestEtt.aorticMeanGradientMmHg !== undefined ||
                latestEtt.strokeVolumeIndexMlM2 !== undefined) && (
                <div className="rounded-lg bg-[var(--bg-subtle)] p-2.5 text-xs">
                  <span className="font-semibold text-[var(--text-primary)]">Valve aortique : </span>
                  <span className="text-[var(--text-secondary)] tabular-nums">
                    {latestEtt.aorticValveAreaCm2 !== undefined
                      ? `Surface ${formatFrenchNumber(latestEtt.aorticValveAreaCm2, 2)} cm²`
                      : ''}
                    {latestEtt.aorticMeanGradientMmHg !== undefined
                      ? ` · Gradient moyen ${formatFrenchNumber(latestEtt.aorticMeanGradientMmHg, 0)} mmHg`
                      : ''}
                    {latestEtt.strokeVolumeIndexMlM2 !== undefined
                      ? ` · SVi ${formatFrenchNumber(latestEtt.strokeVolumeIndexMlM2, 0)} mL/m²`
                      : ''}
                  </span>
                </div>
              )}
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-[var(--text-secondary)]">
                {latestEtt.mitralRegurgitation && (
                  <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-1">
                    Fuite mitrale : {MITRAL_REGURGITATION_LABELS[latestEtt.mitralRegurgitation]}
                  </span>
                )}
                {latestEtt.lvThrombus && (
                  <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-1">
                    Thrombus VG : {LV_THROMBUS_LABELS[latestEtt.lvThrombus]}
                  </span>
                )}
              </div>
            </dl>
          ) : (
            <p className="text-sm text-[var(--text-secondary)]">
              Enregistrez votre dernière échocardiographie pour suivre votre FEVG et vos volumes
              selon les normes ETT ({sexLabel}).
            </p>
          )}
        </Card>

        <Card
          icon={<Activity className="h-5 w-5 text-[var(--color-accent)]" />}
          title="Dernière IRM cardiaque"
          subtitle={
            latestIrm
              ? `Réalisée le ${formatIsoDateFr(latestIrm.date)} — ${irmExams.length} examen${irmExams.length > 1 ? 's' : ''} IRM`
              : 'Aucune IRM cardiaque enregistrée'
          }
          headerAction={
            <button
              type="button"
              onClick={() => openNewForm('irm')}
              className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-[var(--color-accent)] hover:bg-[var(--bg-subtle)]"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span>Ajouter IRM</span>
            </button>
          }
        >
          {latestIrm ? (
            <dl className="space-y-2.5 text-sm">
              <div className="flex items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-2">
                <dt className="text-[var(--text-secondary)]">FEVG (IRM)</dt>
                {latestIrm.lvefPercent !== undefined ? (
                  <dd className="text-xl font-bold text-[var(--color-accent)] tabular-nums">
                    {`${formatFrenchNumber(latestIrm.lvefPercent, 0)} %`}
                  </dd>
                ) : (
                  <dd className="text-sm font-medium text-[var(--text-secondary)]">
                    Non renseignée
                  </dd>
                )}
              </div>
              {latestIrm.lvedviMlM2 !== undefined && (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <dt className="text-[var(--text-secondary)]">VTDi (IRM, {sexLabel})</dt>
                  <dd className="flex flex-wrap items-center gap-2 tabular-nums">
                    <span className="font-semibold text-[var(--text-primary)]">
                      {formatFrenchNumber(latestIrm.lvedviMlM2, 0)} mL/m²
                    </span>
                    <NormBadge value={latestIrm.lvedviMlM2} range={irmNorms.lvedviMlM2} />
                  </dd>
                </div>
              )}
              {latestIrm.lvesviMlM2 !== undefined && (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <dt className="text-[var(--text-secondary)]">VTSi (IRM, {sexLabel})</dt>
                  <dd className="flex flex-wrap items-center gap-2 tabular-nums">
                    <span className="font-semibold text-[var(--text-primary)]">
                      {formatFrenchNumber(latestIrm.lvesviMlM2, 0)} mL/m²
                    </span>
                    <NormBadge value={latestIrm.lvesviMlM2} range={irmNorms.lvesviMlM2} />
                  </dd>
                </div>
              )}
              <div className="rounded-lg bg-[var(--bg-subtle)] p-2.5 text-xs">
                <span className="font-semibold text-[var(--text-primary)]">
                  Cicatrice myocardique (LGE) :{' '}
                </span>
                {latestIrm.lgeScarPresent === true ? (
                  <span className="text-[var(--text-secondary)] tabular-nums">
                    Présente
                    {latestIrm.lgeScarPercent !== undefined
                      ? ` (${formatFrenchNumber(latestIrm.lgeScarPercent, 0)} % de la masse VG)`
                      : ''}
                    {latestIrm.lgePattern ? ` · ${LGE_PATTERN_LABELS[latestIrm.lgePattern]}` : ''}
                  </span>
                ) : latestIrm.lgeScarPresent === false ? (
                  <span className="text-[var(--status-stable-text)]">Absente</span>
                ) : (
                  <span className="text-[var(--text-secondary)]">Non renseignée</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 pt-1 text-xs text-[var(--text-secondary)]">
                {latestIrm.lvThrombus && (
                  <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-1">
                    Thrombus VG : {LV_THROMBUS_LABELS[latestIrm.lvThrombus]}
                  </span>
                )}
                {latestIrm.mitralRegurgitation && (
                  <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-1">
                    Fuite mitrale : {MITRAL_REGURGITATION_LABELS[latestIrm.mitralRegurgitation]}
                  </span>
                )}
              </div>
            </dl>
          ) : (
            <p className="text-sm text-[var(--text-secondary)]">
              Si vous avez passé une IRM cardiaque, renseignez-la ici pour suivre séparément la
              FEVG IRM, les volumes (normes Kawel-Boehm 2020) et la cicatrice LGE.
            </p>
          )}
        </Card>
      </div>

      {/* Graphique FEVG à deux courbes strictement séparées (ETT vs IRM) */}
      <Card
        title="Évolution de la FEVG — deux séries distinctes (ETT vs IRM)"
        subtitle="Les points ETT et IRM ne sont jamais reliés entre eux afin d'éviter toute confusion liée à l'écart de mesure (~5,5 points)."
      >
        {chartData.length > 0 ? (
          <div className="space-y-3" data-testid="lvef-separated-chart">
            <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)] tabular-nums">
              <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-primary)]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#144A68]" aria-hidden="true" />
                Série ETT : {ettExams.filter((e) => typeof e.lvefPercent === 'number').length} mesure(s)
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-accent)]">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#0F766E]" aria-hidden="true" />
                Série IRM cardiaque : {irmExams.filter((e) => typeof e.lvefPercent === 'number').length} mesure(s)
              </span>
              <span>Repères : 35 % (DAI/CRT) et 50 % (seuil ESC 2026)</span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={240}>
                <LineChart data={chartData} margin={{ top: 12, right: 20, left: 0, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
                  <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="var(--text-secondary)" />
                  <YAxis
                    domain={[10, 70]}
                    unit=" %"
                    tick={{ fontSize: 12 }}
                    stroke="var(--text-secondary)"
                  />
                  <Tooltip
                    formatter={(value, name) => [
                      typeof value === 'number' ? `${formatFrenchNumber(value, 0)} %` : String(value ?? ''),
                      String(name),
                    ]}
                  />
                  <Legend />
                  <ReferenceLine
                    y={35}
                    stroke="#B45309"
                    strokeDasharray="4 4"
                    label={{ value: '35 %', position: 'right', fill: '#B45309', fontSize: 11 }}
                  />
                  <ReferenceLine
                    y={50}
                    stroke="#065F46"
                    strokeDasharray="4 4"
                    label={{ value: '50 %', position: 'right', fill: '#065F46', fontSize: 11 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ettLvef"
                    name="FEVG — ETT (%)"
                    stroke="#144A68"
                    strokeWidth={2.5}
                    dot={{ r: 5, fill: '#144A68' }}
                    connectNulls
                  />
                  <Line
                    type="monotone"
                    dataKey="irmLvef"
                    name="FEVG — IRM cardiaque (%)"
                    stroke="#0F766E"
                    strokeWidth={2.5}
                    strokeDasharray="6 3"
                    dot={{ r: 5, fill: '#0F766E' }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <p className="text-sm text-[var(--text-secondary)]">
            Ajoutez au moins une ETT ou une IRM avec FEVG pour afficher les deux courbes distinctes.
          </p>
        )}
      </Card>

      {/* Tableau comparatif des normes de volumes adaptées au sexe du profil */}
      <Card
        title={`Normes de volumes ventriculaires adaptées à votre profil (${sexLabel})`}
        subtitle="Valeurs normales adultes de référence : un volume hors norme ETT peut se situer dans la norme IRM."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-subtle)] text-xs uppercase text-[var(--text-secondary)]">
                <th className="py-2 pr-4 font-semibold">Mesure</th>
                <th className="py-2 pr-4 font-semibold">Norme ETT ({ettNorms.sourceLabel})</th>
                <th className="py-2 font-semibold">Norme IRM ({irmNorms.sourceLabel})</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)] tabular-nums">
              <tr>
                <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">
                  VTDi (volume télédiastolique indexé)
                </td>
                <td className="py-2.5 pr-4 text-[var(--text-secondary)]">
                  {ettNorms.lvedviMlM2.min} - {ettNorms.lvedviMlM2.max} mL/m²
                </td>
                <td className="py-2.5 text-[var(--text-secondary)]">
                  {irmNorms.lvedviMlM2.min} - {irmNorms.lvedviMlM2.max} mL/m²
                </td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">
                  VTSi (volume télésystolique indexé)
                </td>
                <td className="py-2.5 pr-4 text-[var(--text-secondary)]">
                  {ettNorms.lvesviMlM2.min} - {ettNorms.lvesviMlM2.max} mL/m²
                </td>
                <td className="py-2.5 text-[var(--text-secondary)]">
                  {irmNorms.lvesviMlM2.min} - {irmNorms.lvesviMlM2.max} mL/m²
                </td>
              </tr>
              {ettNorms.lveddMm && (
                <tr>
                  <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">
                    DTDVG (diamètre télédiastolique)
                  </td>
                  <td className="py-2.5 pr-4 text-[var(--text-secondary)]">
                    {ettNorms.lveddMm.min} - {ettNorms.lveddMm.max} mm
                  </td>
                  <td className="py-2.5 text-[var(--text-secondary)]">
                    Volumes indexés privilégiés en IRM
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Formulaire ajout / édition d'un examen d'imagerie */}
      {formOpen && (
        <Card
          title={editingId !== null ? "Modifier l'examen d'imagerie" : "Ajouter un examen d'imagerie"}
          subtitle="Renseignez uniquement les mesures figurant sur votre compte-rendu (ETT ou IRM)."
          headerAction={
            <button
              type="button"
              onClick={closeForm}
              aria-label="Fermer le formulaire d'imagerie"
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
                  htmlFor="img-date"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Date de l&apos;examen *
                </label>
                <input
                  id="img-date"
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="img-modality"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Modalité *
                </label>
                <select
                  id="img-modality"
                  value={form.modality}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, modality: e.target.value as 'ett' | 'irm' }))
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                >
                  <option value="ett">ETT (échocardiographie transthoracique)</option>
                  <option value="irm">IRM cardiaque</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="img-lvef"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  FEVG (%)
                </label>
                <input
                  id="img-lvef"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 35"
                  value={form.lvefPercent}
                  onChange={(e) => setForm((prev) => ({ ...prev, lvefPercent: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="img-lvedvi"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  VTDi (mL/m²)
                </label>
                <input
                  id="img-lvedvi"
                  type="text"
                  inputMode="decimal"
                  placeholder={`Norme ${activeFormNorms.lvedviMlM2.min}-${activeFormNorms.lvedviMlM2.max}`}
                  value={form.lvedviMlM2}
                  onChange={(e) => setForm((prev) => ({ ...prev, lvedviMlM2: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Norme {form.modality.toUpperCase()} ({sexLabel}) : {activeFormNorms.lvedviMlM2.min}
                  -{activeFormNorms.lvedviMlM2.max} mL/m²
                </p>
              </div>

              <div>
                <label
                  htmlFor="img-lvesvi"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  VTSi (mL/m²)
                </label>
                <input
                  id="img-lvesvi"
                  type="text"
                  inputMode="decimal"
                  placeholder={`Norme ${activeFormNorms.lvesviMlM2.min}-${activeFormNorms.lvesviMlM2.max}`}
                  value={form.lvesviMlM2}
                  onChange={(e) => setForm((prev) => ({ ...prev, lvesviMlM2: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Norme {form.modality.toUpperCase()} ({sexLabel}) : {activeFormNorms.lvesviMlM2.min}
                  -{activeFormNorms.lvesviMlM2.max} mL/m²
                </p>
              </div>

              <div>
                <label
                  htmlFor="img-lvedd"
                  className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                >
                  DTDVG / LVEDD (mm)
                </label>
                <input
                  id="img-lvedd"
                  type="text"
                  inputMode="decimal"
                  placeholder="ex. 58"
                  value={form.lveddMm}
                  onChange={(e) => setForm((prev) => ({ ...prev, lveddMm: e.target.value }))}
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>
            </div>

            {form.modality === 'irm' && (
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3.5">
                <fieldset className="min-w-0 border-0 p-0">
                  <legend className="mb-2.5 block w-full p-0 text-xs font-semibold text-[var(--text-primary)]">
                    Cicatrice myocardique (rehaussement tardif LGE — IRM)
                  </legend>
                  <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <input
                      id="img-lge-present"
                      type="checkbox"
                      checked={form.lgeScarPresent}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, lgeScarPresent: e.target.checked }))
                      }
                      className="h-4 w-4 accent-[var(--color-primary)]"
                    />
                    <label
                      htmlFor="img-lge-present"
                      className="text-sm font-medium text-[var(--text-primary)]"
                    >
                      Cicatrice LGE présente
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="img-lge-percent"
                      className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                    >
                      Étendue de la cicatrice (% masse VG)
                    </label>
                    <input
                      id="img-lge-percent"
                      type="text"
                      inputMode="decimal"
                      disabled={!form.lgeScarPresent}
                      placeholder="ex. 18"
                      value={form.lgeScarPercent}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, lgeScarPercent: e.target.value }))
                      }
                      className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] disabled:opacity-50 tabular-nums"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="img-lge-pattern"
                      className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                    >
                      Répartition LGE
                    </label>
                    <select
                      id="img-lge-pattern"
                      value={form.lgePattern}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          lgePattern: e.target.value as ImagingFormState['lgePattern'],
                        }))
                      }
                      className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                    >
                      <option value="">Non précisée</option>
                      {Object.entries(LGE_PATTERN_LABELS).map(([key, label]) => (
                        <option key={key} value={key}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                </fieldset>
              </div>
            )}

            <div className="rounded-xl border border-[var(--border-subtle)] p-3.5">
              <fieldset className="min-w-0 border-0 p-0">
                <legend className="mb-2.5 block w-full p-0 text-xs font-semibold text-[var(--text-primary)]">
                  Valve aortique, fuite mitrale et thrombus VG (optionnel)
                </legend>
                <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="img-ava"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Surface aortique (cm²)
                  </label>
                  <input
                    id="img-ava"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 1,1"
                    value={form.aorticValveAreaCm2}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, aorticValveAreaCm2: e.target.value }))
                    }
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>
                <div>
                  <label
                    htmlFor="img-aortic-grad"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Gradient moyen aortique (mmHg)
                  </label>
                  <input
                    id="img-aortic-grad"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 28"
                    value={form.aorticMeanGradientMmHg}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, aorticMeanGradientMmHg: e.target.value }))
                    }
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>
                <div>
                  <label
                    htmlFor="img-svi"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Volume d&apos;éjection indexé SVi (mL/m²)
                  </label>
                  <input
                    id="img-svi"
                    type="text"
                    inputMode="decimal"
                    placeholder="ex. 32"
                    value={form.strokeVolumeIndexMlM2}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, strokeVolumeIndexMlM2: e.target.value }))
                    }
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="img-mr"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Fuite mitrale
                  </label>
                  <select
                    id="img-mr"
                    value={form.mitralRegurgitation}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        mitralRegurgitation: e.target.value as ImagingFormState['mitralRegurgitation'],
                      }))
                    }
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                  >
                    <option value="">Non précisée</option>
                    {Object.entries(MITRAL_REGURGITATION_LABELS).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="img-thrombus"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Thrombus du ventricule gauche (VG)
                  </label>
                  <select
                    id="img-thrombus"
                    value={form.lvThrombus}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        lvThrombus: e.target.value as ImagingFormState['lvThrombus'],
                      }))
                    }
                    className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                  >
                    <option value="">Non précisé</option>
                    {Object.entries(LV_THROMBUS_LABELS).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              </fieldset>
            </div>

            <div>
              <label
                htmlFor="img-notes"
                className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
              >
                Notes ou conclusion du compte-rendu
              </label>
              <textarea
                id="img-notes"
                rows={2}
                value={form.notes}
                onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
                placeholder="ex. Viabilité résiduelle antérieure, contrôle prévu à 6 mois..."
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
                    : "Enregistrer l'examen"}
              </button>
            </div>
          </form>
        </Card>
      )}

      {/* Historique d'imagerie */}
      <Card
        title="Historique d'imagerie cardiaque"
        subtitle="Filtrez par modalité pour comparer ETT avec ETT ou IRM avec IRM."
        headerAction={
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-0.5 text-xs">
              {(
                [
                  { id: 'all', label: 'Toutes' },
                  { id: 'ett', label: `ETT (${ettExams.length})` },
                  { id: 'irm', label: `IRM (${irmExams.length})` },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setModalityFilter(opt.id)}
                  className={`rounded-lg px-2.5 py-1.5 font-medium transition-colors ${
                    modalityFilter === opt.id
                      ? 'bg-[var(--bg-card)] text-[var(--color-primary)] shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {!formOpen && (
              <button
                type="button"
                onClick={() => openNewForm(modalityFilter === 'irm' ? 'irm' : 'ett')}
                className="touch-target inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)]"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                <span>Nouvel examen</span>
              </button>
            )}
          </div>
        }
      >
        {filteredExams.length === 0 ? (
          <p className="text-sm text-[var(--text-secondary)]">
            Aucun examen enregistré dans cette catégorie.
          </p>
        ) : (
          <ul className="m-0 list-none space-y-3 p-0">
            {filteredExams.map((exam) => {
              const norms = LV_NORMS[exam.modality][profile.sex];
              const isIrm = exam.modality === 'irm';
              return (
                <li
                  key={exam.id ?? `${exam.date}-${exam.modality}`}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3.5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          isIrm
                            ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                            : 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                        }`}
                      >
                        {isIrm ? 'IRM cardiaque' : 'ETT'}
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)] tabular-nums">
                        {formatIsoDateFr(exam.date)}
                      </span>
                      {exam.lvefPercent !== undefined && (
                        <span className="rounded-md bg-[var(--bg-card)] px-2 py-0.5 text-sm font-bold text-[var(--text-primary)] tabular-nums">
                          FEVG : {formatFrenchNumber(exam.lvefPercent, 0)} %
                        </span>
                      )}
                    </div>

                    {exam.id !== undefined && (
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEditForm(exam)}
                          className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                        >
                          <Edit3 className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Modifier</span>
                        </button>
                        {confirmDeleteId === exam.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => void handleDelete(exam.id as number)}
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
                            onClick={() => setConfirmDeleteId(exam.id as number)}
                            aria-label={`Supprimer l'examen ${exam.modality.toUpperCase()} du ${formatIsoDateFr(exam.date)}`}
                            className="touch-target inline-flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 py-1.5 text-xs font-medium text-[var(--status-urgent-text)] hover:bg-[var(--status-urgent-bg)]"
                          >
                            <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Supprimer</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[var(--text-secondary)] tabular-nums">
                    {exam.lvedviMlM2 !== undefined && (
                      <span>
                        VTDi : <strong className="text-[var(--text-primary)]">{formatFrenchNumber(exam.lvedviMlM2, 0)} mL/m²</strong>{' '}
                        (norme {norms.lvedviMlM2.min}-{norms.lvedviMlM2.max})
                      </span>
                    )}
                    {exam.lvesviMlM2 !== undefined && (
                      <span>
                        VTSi : <strong className="text-[var(--text-primary)]">{formatFrenchNumber(exam.lvesviMlM2, 0)} mL/m²</strong>{' '}
                        (norme {norms.lvesviMlM2.min}-{norms.lvesviMlM2.max})
                      </span>
                    )}
                    {exam.lveddMm !== undefined && (
                      <span>
                        DTDVG : <strong className="text-[var(--text-primary)]">{formatFrenchNumber(exam.lveddMm, 0)} mm</strong>
                      </span>
                    )}
                    {exam.lgeScarPresent !== undefined && (
                      <span>
                        LGE :{' '}
                        <strong className="text-[var(--text-primary)]">
                          {exam.lgeScarPresent
                            ? `Oui${exam.lgeScarPercent !== undefined ? ` (${formatFrenchNumber(exam.lgeScarPercent, 0)} %)` : ''}`
                            : 'Non'}
                        </strong>
                        {exam.lgePattern ? ` · ${LGE_PATTERN_LABELS[exam.lgePattern]}` : ''}
                      </span>
                    )}
                    {exam.aorticValveAreaCm2 !== undefined && (
                      <span>
                        Surface aortique :{' '}
                        <strong className="text-[var(--text-primary)]">
                          {formatFrenchNumber(exam.aorticValveAreaCm2, 2)} cm²
                        </strong>
                      </span>
                    )}
                    {exam.aorticMeanGradientMmHg !== undefined && (
                      <span>
                        Gradient aortique :{' '}
                        <strong className="text-[var(--text-primary)]">
                          {formatFrenchNumber(exam.aorticMeanGradientMmHg, 0)} mmHg
                        </strong>
                      </span>
                    )}
                    {exam.strokeVolumeIndexMlM2 !== undefined && (
                      <span>
                        SVi :{' '}
                        <strong className="text-[var(--text-primary)]">
                          {formatFrenchNumber(exam.strokeVolumeIndexMlM2, 0)} mL/m²
                        </strong>
                      </span>
                    )}
                    {exam.mitralRegurgitation && (
                      <span>
                        Fuite mitrale : {MITRAL_REGURGITATION_LABELS[exam.mitralRegurgitation]}
                      </span>
                    )}
                    {exam.lvThrombus && (
                      <span>Thrombus VG : {LV_THROMBUS_LABELS[exam.lvThrombus]}</span>
                    )}
                  </div>

                  {exam.notes && (
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {exam.notes}
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
