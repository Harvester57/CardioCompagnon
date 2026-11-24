import { useMemo } from 'react';
import {
  Activity,
  ClipboardList,
  FileText,
  Landmark,
  Pill,
  Printer,
  Stethoscope,
  User,
} from 'lucide-react';
import { FRENCH_ADMIN_CATALOG, QUESTIONS_CATALOG } from '../../content/fr';
import { formatFrenchNumber, formatWeightKgFr } from '../../engine';
import type {
  EngineEvaluation,
  ImagingExam,
  Medication,
  PatientState,
  QuestionTracking,
} from '../../types';
import { Card, TriageBadge } from '../../ui';
import {
  ADMIN_STATUS_LABELS,
  FOUR_PILLARS_ORDER,
  INTERLOCUTOR_LABELS,
  MEDICATION_STATUS_LABELS,
  PILLAR_LABELS,
  buildLatestLabSnapshot,
  formatDateFr,
  formatDiagnosisOriginFr,
  formatHfStageFr,
  formatNyhaFr,
  getActiveModulesList,
  getLatestImagingByModality,
  getLatestVitalsSummary,
  type PlanTabId,
} from './plan-helpers';

export interface SummarySheetA4TabProps {
  state: PatientState;
  evaluation: EngineEvaluation;
  trackingList: QuestionTracking[];
  onSelectTab: (tab: PlanTabId) => void;
}

function ImagingModalityBlock({
  title,
  exam,
}: {
  title: string;
  exam?: ImagingExam;
}) {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="m-0 text-sm font-semibold text-[var(--text-primary)]">{title}</h3>
        <span className="text-xs text-[var(--text-secondary)] tabular-nums">
          {exam ? formatDateFr(exam.date) : 'Aucun examen'}
        </span>
      </div>

      {!exam ? (
        <p className="mt-2 mb-0 text-xs text-[var(--text-secondary)]">
          Aucun compte-rendu enregistré pour cette modalité.
        </p>
      ) : (
        <dl className="mt-2 mb-0 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
          <div>
            <dt className="text-[var(--text-secondary)]">FEVG</dt>
            <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
              {exam.lvefPercent !== undefined
                ? `${formatFrenchNumber(exam.lvefPercent, 0)} %`
                : 'Non renseignée'}
            </dd>
          </div>
          {exam.lveddMm !== undefined && (
            <div>
              <dt className="text-[var(--text-secondary)]">DTDVG</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
                {formatFrenchNumber(exam.lveddMm, 0)} mm
              </dd>
            </div>
          )}
          {exam.lvedviMlM2 !== undefined && (
            <div>
              <dt className="text-[var(--text-secondary)]">VTDi</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
                {formatFrenchNumber(exam.lvedviMlM2, 0)} mL/m²
              </dd>
            </div>
          )}
          {exam.lvesviMlM2 !== undefined && (
            <div>
              <dt className="text-[var(--text-secondary)]">VTSi</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
                {formatFrenchNumber(exam.lvesviMlM2, 0)} mL/m²
              </dd>
            </div>
          )}
          {exam.modality === 'irm' && exam.lgeScarPresent !== undefined && (
            <div className="col-span-2">
              <dt className="text-[var(--text-secondary)]">Cicatrice (LGE)</dt>
              <dd className="m-0 font-medium text-[var(--text-primary)] tabular-nums">
                {exam.lgeScarPresent
                  ? `Présente${
                      exam.lgeScarPercent !== undefined
                        ? ` (${formatFrenchNumber(exam.lgeScarPercent, 0)} %)`
                        : ''
                    }`
                  : 'Absente'}
              </dd>
            </div>
          )}
          {exam.aorticValveAreaCm2 !== undefined && (
            <div>
              <dt className="text-[var(--text-secondary)]">Surface aortique</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
                {formatFrenchNumber(exam.aorticValveAreaCm2, 2)} cm²
              </dd>
            </div>
          )}
          {exam.aorticMeanGradientMmHg !== undefined && (
            <div>
              <dt className="text-[var(--text-secondary)]">Gradient moyen aortique</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
                {formatFrenchNumber(exam.aorticMeanGradientMmHg, 0)} mmHg
              </dd>
            </div>
          )}
          {exam.lvThrombus && (
            <div>
              <dt className="text-[var(--text-secondary)]">Thrombus VG</dt>
              <dd className="m-0 font-medium text-[var(--text-primary)]">
                {exam.lvThrombus === 'present'
                  ? 'Présent'
                  : exam.lvThrombus === 'uncertain'
                    ? 'Incertain'
                    : 'Absent'}
              </dd>
            </div>
          )}
          {exam.notes && (
            <div className="col-span-2 mt-1 border-t border-[var(--border-subtle)] pt-1 text-[var(--text-secondary)]">
              {exam.notes}
            </div>
          )}
        </dl>
      )}
    </div>
  );
}

export function SummarySheetA4Tab({
  state,
  evaluation,
  trackingList,
  onSelectTab,
}: SummarySheetA4TabProps) {
  const { profile, medications, labs, imaging, adminProgress, referenceDate } = state;

  const activeModules = useMemo(() => getActiveModulesList(profile), [profile]);
  const vitals = useMemo(() => getLatestVitalsSummary(state), [state]);
  const { latestEtt, latestIrm } = useMemo(
    () => getLatestImagingByModality(imaging),
    [imaging],
  );
  const labSnapshot = useMemo(
    () => buildLatestLabSnapshot(labs, profile),
    [labs, profile],
  );

  const activeMeds = useMemo(
    () => medications.filter((m) => m.status !== 'stopped'),
    [medications],
  );

  const fourPillarRows = useMemo(() => {
    return FOUR_PILLARS_ORDER.map((pillar) => {
      const medsForPillar = activeMeds.filter((m) => m.pillar === pillar);
      return {
        pillar,
        label: PILLAR_LABELS[pillar],
        meds: medsForPillar,
      };
    });
  }, [activeMeds]);

  const otherActiveMeds: Medication[] = useMemo(
    () => activeMeds.filter((m) => !FOUR_PILLARS_ORDER.includes(m.pillar)),
    [activeMeds],
  );

  const priorityAlerts = useMemo(
    () => evaluation.outputs.filter((out) => out.severity !== 'info'),
    [evaluation.outputs],
  );

  const adminSummaryRows = useMemo(() => {
    const progressMap = new Map(adminProgress.map((item) => [item.itemId, item]));
    return FRENCH_ADMIN_CATALOG.map((catalogItem) => {
      const progress = progressMap.get(catalogItem.id);
      return {
        id: catalogItem.id,
        titleFr: catalogItem.titleFr,
        status: progress?.status ?? 'todo',
        renewalDate: progress?.renewalDate,
        notes: progress?.notes,
        hasExplicitRecord: Boolean(progress),
      };
    }).filter((row) => row.hasExplicitRecord && row.status !== 'not_applicable');
  }, [adminProgress]);

  const selectedQuestions = useMemo(() => {
    const selectedIds = new Set(
      trackingList.filter((t) => t.selectedForNextVisit).map((t) => t.questionId),
    );
    const trackingById = new Map(trackingList.map((t) => [t.questionId, t]));
    return QUESTIONS_CATALOG.filter((q) => selectedIds.has(q.id)).map((q) => ({
      question: q,
      tracking: trackingById.get(q.id),
    }));
  }, [trackingList]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      <Card
        tone="subtle"
        className="no-print"
        title="Fiche de synthèse cardiologique (format A4)"
        subtitle="Conçue pour s'imprimer proprement sur 1 à 2 pages A4 ou être enregistrée en PDF depuis votre navigateur."
        icon={<FileText className="h-5 w-5" />}
        headerAction={
          <button
            type="button"
            onClick={handlePrint}
            className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Imprimer / PDF (A4)</span>
          </button>
        }
      >
        <p className="m-0 text-xs leading-relaxed text-[var(--text-secondary)]">
          Astuce : dans la fenêtre d&apos;impression, sélectionnez le format A4 portrait et
          « Enregistrer au format PDF » si vous souhaitez transmettre ce document lors de votre
          consultation. Les menus de navigation sont masqués automatiquement à l&apos;impression.
        </p>
      </Card>

      <article
        aria-label="Fiche de synthèse cardiologique A4"
        className="space-y-3 print:space-y-2.5"
      >
        <header className="card-surface print-avoid-break rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="m-0 text-lg font-bold text-[var(--color-primary)]">
                Fiche de synthèse cardiologique
              </h2>
              <p className="mt-0.5 mb-0 text-xs text-[var(--text-secondary)]">
                Compagnon personnel de suivi — Document d&apos;auto-suivi non médical
              </p>
            </div>
            <div className="text-right text-xs text-[var(--text-secondary)] tabular-nums">
              <div className="font-semibold text-[var(--text-primary)]">
                Éditée le {formatDateFr(referenceDate)}
              </div>
              {profile.displayName && <div>{profile.displayName}</div>}
            </div>
          </div>
        </header>

        <Card
          title="1. Identité et profil clinique"
          icon={<User className="h-4 w-4" />}
          className="print-avoid-break"
        >
          <dl className="m-0 grid grid-cols-1 gap-x-4 gap-y-2 text-xs sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="text-[var(--text-secondary)]">Patient</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)]">
                {profile.displayName || 'Non renseigné'} ({profile.sex === 'F' ? 'Femme' : 'Homme'}
                {profile.birthYear ? `, né(e) en ${profile.birthYear}` : ''})
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Diagnostic et origine</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)]">
                {formatDiagnosisOriginFr(profile.ischaemicCauseConfirmed)}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Date de diagnostic</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
                {formatDateFr(profile.diagnosisDate)}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Stade IC</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)]">
                {formatHfStageFr(profile.hfStage)}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Classe NYHA</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)]">
                {formatNyhaFr(profile.nyhaClass)}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Poids sec de référence</dt>
              <dd className="m-0 font-semibold text-[var(--text-primary)] tabular-nums">
                {profile.dryWeightKg !== undefined
                  ? formatWeightKgFr(profile.dryWeightKg)
                  : 'Non renseigné'}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Dernières constantes</dt>
              <dd className="m-0 font-medium text-[var(--text-primary)] tabular-nums">
                {vitals.date ? (
                  <>
                    {formatDateFr(vitals.date)} :{' '}
                    {[vitals.weightFr, vitals.bpFr, vitals.hrFr].filter(Boolean).join(' · ') ||
                      'Aucune mesure'}
                    {vitals.weightDiffFromDryFr ? ` (${vitals.weightDiffFromDryFr})` : ''}
                  </>
                ) : (
                  'Aucun relevé quotidien'
                )}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Allergies connues</dt>
              <dd className="m-0 font-medium text-[var(--text-primary)]">
                {profile.allergies || 'Non renseigné'}
              </dd>
            </div>
            <div>
              <dt className="text-[var(--text-secondary)]">Modules cliniques actifs</dt>
              <dd className="m-0 font-medium text-[var(--text-primary)]">
                {activeModules.length > 0
                  ? activeModules.map((m) => m.label).join(' ; ')
                  : 'Aucun module additionnel activé'}
              </dd>
            </div>
          </dl>
        </Card>

        <Card
          title="2. Bilan de triage et alertes prioritaires"
          icon={<Activity className="h-4 w-4" />}
          headerAction={<TriageBadge level={evaluation.triageLevel} size="sm" />}
          className="print-avoid-break"
        >
          <p className="mt-0 mb-2 text-xs leading-relaxed text-[var(--text-primary)]">
            {evaluation.triageSummaryFr}
          </p>
          {priorityAlerts.length === 0 ? (
            <p className="m-0 text-xs text-[var(--text-secondary)]">
              Aucune alerte ou action prioritaire active à la date du bilan.
            </p>
          ) : (
            <ul className="m-0 list-none space-y-1.5 p-0 text-xs">
              {priorityAlerts.map((alert) => (
                <li
                  key={`${alert.id}-${alert.titleFr}`}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 px-2.5 py-1.5"
                >
                  <div className="flex flex-wrap items-center gap-1.5">
                    <TriageBadge level={alert.severity} size="sm" />
                    <strong className="font-semibold text-[var(--text-primary)]">
                      {alert.titleFr}
                    </strong>
                  </div>
                  <p className="mt-1 mb-0 text-[var(--text-secondary)]">
                    {alert.suggestedActionFr}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card
          title="3. Traitements actifs (4 piliers ESC 2026 et autres traitements)"
          icon={<Pill className="h-4 w-4" />}
          className="print-avoid-break"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--border-strong)] text-[var(--text-secondary)]">
                  <th className="py-1.5 pr-3 font-semibold">Classe / Pilier</th>
                  <th className="py-1.5 pr-3 font-semibold">DCI (Spécialité FR)</th>
                  <th className="py-1.5 pr-3 font-semibold">Posologie</th>
                  <th className="py-1.5 pr-3 font-semibold">% cible</th>
                  <th className="py-1.5 font-semibold">Statut / Palier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {fourPillarRows.map((row) =>
                  row.meds.length > 0 ? (
                    row.meds.map((med) => (
                      <tr key={med.id ?? `${row.pillar}-${med.innName}`}>
                        <td className="py-1.5 pr-3 font-semibold text-[var(--color-primary)]">
                          {row.label}
                        </td>
                        <td className="py-1.5 pr-3 font-medium text-[var(--text-primary)]">
                          {med.innName}
                          {med.frenchBrand ? ` (${med.frenchBrand})` : ''}
                        </td>
                        <td className="py-1.5 pr-3 tabular-nums">{med.doseLabel}</td>
                        <td className="py-1.5 pr-3 tabular-nums">
                          {med.dosePercentOfTarget !== undefined
                            ? `${formatFrenchNumber(med.dosePercentOfTarget, 0)} %`
                            : '—'}
                        </td>
                        <td className="py-1.5 tabular-nums">
                          {MEDICATION_STATUS_LABELS[med.status]}
                          {med.lastDoseChangeAt
                            ? ` (palier ${formatDateFr(med.lastDoseChangeAt)})`
                            : ''}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr key={row.pillar}>
                      <td className="py-1.5 pr-3 font-semibold text-[var(--color-primary)]">
                        {row.label}
                      </td>
                      <td
                        colSpan={4}
                        className="py-1.5 italic text-[var(--text-secondary)]"
                      >
                        Non renseigné dans les traitements actifs
                      </td>
                    </tr>
                  ),
                )}

                {otherActiveMeds.map((med) => (
                  <tr key={med.id ?? `${med.pillar}-${med.innName}`}>
                    <td className="py-1.5 pr-3 text-[var(--text-secondary)]">
                      {PILLAR_LABELS[med.pillar]}
                    </td>
                    <td className="py-1.5 pr-3 font-medium text-[var(--text-primary)]">
                      {med.innName}
                      {med.frenchBrand ? ` (${med.frenchBrand})` : ''}
                    </td>
                    <td className="py-1.5 pr-3 tabular-nums">{med.doseLabel}</td>
                    <td className="py-1.5 pr-3 tabular-nums">
                      {med.dosePercentOfTarget !== undefined
                        ? `${formatFrenchNumber(med.dosePercentOfTarget, 0)} %`
                        : '—'}
                    </td>
                    <td className="py-1.5 tabular-nums">
                      {MEDICATION_STATUS_LABELS[med.status]}
                      {med.lastDoseChangeAt
                        ? ` (${formatDateFr(med.lastDoseChangeAt)})`
                        : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card
          title="4. Derniers examens d'imagerie (ETT et IRM strictement séparées)"
          icon={<Stethoscope className="h-4 w-4" />}
          className="print-avoid-break"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ImagingModalityBlock title="Dernière ETT (échocardiographie)" exam={latestEtt} />
            <ImagingModalityBlock title="Dernière IRM cardiaque" exam={latestIrm} />
          </div>
          <p className="mt-2 mb-0 text-[11px] text-[var(--text-secondary)]">
            Repère méthodologique : ne pas comparer directement une FEVG d&apos;ETT et une FEVG
            d&apos;IRM cardiaque (l&apos;IRM mesure en moyenne environ 5,5 points plus bas et
            possède ses propres normes de volumes).
          </p>
        </Card>

        <Card
          title="5. Dernière biologie clé"
          icon={<Activity className="h-4 w-4" />}
          className="print-avoid-break"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--border-strong)] text-[var(--text-secondary)]">
                  <th className="py-1.5 pr-3 font-semibold">Paramètre</th>
                  <th className="py-1.5 pr-3 font-semibold">Dernière valeur</th>
                  <th className="py-1.5 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                {labSnapshot.map((item) => (
                  <tr key={item.key}>
                    <td className="py-1.5 pr-3 font-medium text-[var(--text-primary)]">
                      {item.label}
                    </td>
                    <td className="py-1.5 pr-3 tabular-nums">
                      <span className="font-semibold text-[var(--text-primary)]">
                        {item.valueFr}
                      </span>
                      {item.note && (
                        <span className="block text-[11px] text-[var(--text-secondary)]">
                          {item.note}
                        </span>
                      )}
                    </td>
                    <td className="py-1.5 text-[var(--text-secondary)] tabular-nums">
                      {item.date ? formatDateFr(item.date) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card
          title="6. Démarches administratives et parcours France"
          icon={<Landmark className="h-4 w-4" />}
          className="print-avoid-break"
        >
          {adminSummaryRows.length === 0 ? (
            <p className="m-0 text-xs text-[var(--text-secondary)]">
              Aucune démarche renseignée pour le moment (consultez le module Vie en France &amp;
              Droits).
            </p>
          ) : (
            <ul className="m-0 list-none space-y-1.5 p-0 text-xs">
              {adminSummaryRows.map((row) => (
                <li
                  key={row.id}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border-subtle)] pb-1.5 last:border-b-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <span className="font-semibold text-[var(--text-primary)]">
                      {row.titleFr}
                    </span>
                    {row.notes && (
                      <span className="block text-[var(--text-secondary)]">{row.notes}</span>
                    )}
                  </div>
                  <div className="shrink-0 text-right tabular-nums">
                    <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-0.5 font-medium text-[var(--text-primary)]">
                      {ADMIN_STATUS_LABELS[row.status]}
                    </span>
                    {row.renewalDate && (
                      <span className="block mt-0.5 text-[11px] text-[var(--text-secondary)]">
                        Échéance : {formatDateFr(row.renewalDate)}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card
          title={`7. Questions sélectionnées pour la consultation (${selectedQuestions.length})`}
          icon={<ClipboardList className="h-4 w-4" />}
          className="print-avoid-break"
        >
          {selectedQuestions.length === 0 ? (
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
              <span>Aucune question sélectionnée pour la prochaine visite.</span>
              <button
                type="button"
                onClick={() => onSelectTab('consult')}
                className="no-print touch-target rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-1 font-semibold text-[var(--color-primary)] hover:bg-[var(--bg-subtle)]"
              >
                Sélectionner des questions
              </button>
            </div>
          ) : (
            <ol className="m-0 space-y-2 pl-4 text-xs">
              {selectedQuestions.map(({ question, tracking }) => (
                <li key={question.id} className="leading-relaxed text-[var(--text-primary)]">
                  <span className="mr-1.5 rounded bg-[var(--bg-subtle)] px-1.5 py-0.5 text-[11px] font-semibold text-[var(--color-primary)]">
                    {INTERLOCUTOR_LABELS[question.interlocutor]}
                  </span>
                  <span className="font-medium">{question.questionFr}</span>
                  {tracking?.answerNote && (
                    <p className="mt-1 mb-0 text-[var(--text-secondary)]">
                      Note ({tracking.answeredAt ? formatDateFr(tracking.answeredAt) : 'brouillon'}) :{' '}
                      {tracking.answerNote}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          )}
        </Card>
      </article>
    </div>
  );
}
