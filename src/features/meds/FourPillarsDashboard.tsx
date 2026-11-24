import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ClipboardPen,
  Info,
  Pencil,
  Plus,
  ShieldAlert,
  TrendingUp,
} from 'lucide-react';
import type { Medication, PatientProfile, RuleOutput } from '../../types';
import { Card, EvidenceBadge, TriageBadge } from '../../ui';
import {
  FOUR_PILLAR_KEYS,
  MEDICATION_STATUS_META,
  PILLAR_META,
  clampPercent,
  findMedicationReference,
  formatIsoDateFr,
  getPillarDashboardSummary,
  type FoundationalPillarKey,
} from './medsHelpers';

export interface FourPillarsDashboardProps {
  profile: PatientProfile;
  medications: Medication[];
  medicationAlerts: RuleOutput[];
  onAddMedicationForPillar: (pillar: FoundationalPillarKey) => void;
  onEditMedication: (medication: Medication) => void;
  onOpenDoseChange: (medication: Medication) => void;
  onSaveNotPrescribedReason: (
    pillar: FoundationalPillarKey,
    reason: string,
    existingMedication?: Medication,
  ) => Promise<void>;
}

export function FourPillarsDashboard({
  profile,
  medications,
  medicationAlerts,
  onAddMedicationForPillar,
  onEditMedication,
  onOpenDoseChange,
  onSaveNotPrescribedReason,
}: FourPillarsDashboardProps) {
  const [editingReasonPillar, setEditingReasonPillar] = useState<FoundationalPillarKey | null>(
    null,
  );
  const [reasonDraft, setReasonDraft] = useState('');
  const [savingReason, setSavingReason] = useState(false);

  const pillarSummaries = FOUR_PILLAR_KEYS.map((pillar) =>
    getPillarDashboardSummary(pillar, medications),
  );
  const activeCount = pillarSummaries.filter((s) => s.activeMeds.length > 0).length;

  function openReasonEditor(pillar: FoundationalPillarKey, currentReason?: string) {
    setEditingReasonPillar(pillar);
    setReasonDraft(currentReason ?? '');
  }

  async function handleSubmitReason(
    event: FormEvent,
    pillar: FoundationalPillarKey,
    existingMed?: Medication,
  ) {
    event.preventDefault();
    const cleaned = reasonDraft.trim();
    if (!cleaned) return;
    setSavingReason(true);
    try {
      await onSaveNotPrescribedReason(pillar, cleaned, existingMed);
      setEditingReasonPillar(null);
      setReasonDraft('');
    } finally {
      setSavingReason(false);
    }
  }

  return (
    <div className="space-y-5">
      {/* Contextes cliniques specifiques : Stade B et HFimpEF */}
      {profile.hfStage === 'B' && (
        <Card
          tone="subtle"
          title="Contexte Stade B -- Dysfonction ventriculaire gauche asymptomatique"
          icon={<Info className="h-5 w-5" />}
        >
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            En dysfonction VG asymptomatique (stade B), les preuves les plus établies selon
            l&apos;ESC 2026 portent sur les <strong className="text-[var(--text-primary)]">IEC</strong>{' '}
            (ou ARA2 si intolérance) et les{' '}
            <strong className="text-[var(--text-primary)]">bêtabloquants</strong>, avec discussion
            de l&apos;éplérénone en post-infarctus selon l&apos;évaluation de votre cardiologue. Tous
            les 4 piliers ne sont donc pas systématiquement requis au stade B.
          </p>
          <Link
            to="/library?article=dysfonction-vg-asymptomatique-stade-b"
            className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Lire la fiche sur le stade B asymptomatique</span>
          </Link>
        </Card>
      )}

      {profile.modules.hfImpEf && (
        <Card
          tone="stable"
          title="FEVG améliorée (HFimpEF) -- Poursuite des traitements de fond"
          icon={<CheckCircle2 className="h-5 w-5" />}
        >
          <div className="mb-2">
            <EvidenceBadge grade="ESC 2026 Classe I" />
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-primary)]">
            Même lorsque la fraction d&apos;éjection s&apos;améliore au-dessus de 40 %, les
            recommandations ESC 2026 préconisent de poursuivre les traitements de fond au long cours
            (essai TRED-HF : risque élevé de rechute en cas d&apos;arrêt). N&apos;interrompez aucun
            traitement sans validation explicite de votre cardiologue.
          </p>
          <Link
            to="/library?article=insuffisance-cardiaque-fevg-amelioree"
            className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Lire la fiche sur la FEVG améliorée (HFimpEF)</span>
          </Link>
        </Card>
      )}

      {/* Tableau de bord des 4 piliers ESC 2026 */}
      <Card
        title="Tableau de bord des 4 piliers ESC 2026"
        subtitle="Suivi des quatre classes de fond recommandées dans l'ICFER, de leur posologie actuelle et de la progression vers la dose cible."
        headerAction={
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1 text-sm font-semibold text-[var(--text-primary)] tabular-nums"
            aria-label={`${activeCount} piliers actifs sur 4`}
          >
            <span>{activeCount} / 4 actifs</span>
          </span>
        }
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pillarSummaries.map((summary) => {
            const meta = PILLAR_META[summary.pillar];
            const primaryMed = summary.activeMeds[0];
            const ref = primaryMed ? findMedicationReference(primaryMed) : undefined;
            const percent = primaryMed ? clampPercent(primaryMed.dosePercentOfTarget) : undefined;
            const isEditingReason = editingReasonPillar === summary.pillar;

            return (
              <article
                key={summary.pillar}
                aria-label={meta.labelFr}
                className="flex flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-app)] p-4"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        {meta.labelFr}
                      </h3>
                      <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                        {meta.shortLabelFr}
                      </p>
                    </div>
                    {primaryMed ? (
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${MEDICATION_STATUS_META[primaryMed.status].badgeClasses}`}
                      >
                        {MEDICATION_STATUS_META[primaryMed.status].labelFr}
                      </span>
                    ) : summary.state === 'documented_not_prescribed' ? (
                      <span className="inline-flex items-center rounded-full border border-[var(--status-info-border)] bg-[var(--status-info-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-info-text)]">
                        Non prescrit (documenté)
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-[var(--status-action-border)] bg-[var(--status-action-bg)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-action-text)]">
                        {profile.hfStage === 'B' ? 'Selon avis (stade B)' : 'À vérifier'}
                      </span>
                    )}
                  </div>

                  {summary.activeMeds.length > 0 && primaryMed ? (
                    <div className="space-y-2.5">
                      <div>
                        <p className="text-base font-semibold text-[var(--text-primary)]">
                          {primaryMed.innName}
                          {primaryMed.frenchBrand && (
                            <span className="ml-1.5 font-normal text-[var(--text-secondary)]">
                              ({primaryMed.frenchBrand})
                            </span>
                          )}
                        </p>
                        <dl className="mt-1.5 grid grid-cols-1 gap-1 text-xs sm:grid-cols-2">
                          <div>
                            <dt className="text-[var(--text-secondary)]">Dose actuelle</dt>
                            <dd className="font-semibold text-[var(--text-primary)] tabular-nums">
                              {primaryMed.doseLabel}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-[var(--text-secondary)]">Dose cible (repère ESC)</dt>
                            <dd className="font-medium text-[var(--text-primary)] tabular-nums">
                              {ref?.targetDoseFr ?? 'Selon tolérance et avis cardiologique'}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {percent !== undefined && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[var(--text-secondary)]">
                              Progression vers la dose cible
                            </span>
                            <span className="font-semibold text-[var(--text-primary)] tabular-nums">
                              {percent} %
                            </span>
                          </div>
                          <div
                            role="progressbar"
                            aria-label={`Progression ${meta.shortLabelFr} vers la dose cible`}
                            aria-valuenow={percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className="h-2.5 w-full overflow-hidden rounded-full bg-[var(--border-subtle)]"
                          >
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${percent}%`,
                                backgroundColor:
                                  percent >= 100
                                    ? 'var(--color-accent)'
                                    : 'var(--color-primary)',
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {primaryMed.lastDoseChangeAt && (
                        <p className="text-xs text-[var(--text-secondary)] tabular-nums">
                          Dernier palier enregistré : {formatIsoDateFr(primaryMed.lastDoseChangeAt)}
                        </p>
                      )}

                      {summary.activeMeds.length > 1 && (
                        <p className="text-xs text-[var(--text-secondary)]">
                          +{summary.activeMeds.length - 1} autre(s) traitement(s) actif(s) dans ce
                          pilier (voir la liste complète ci-dessous).
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                        {meta.descriptionFr}
                      </p>
                      {summary.documentedReasonMed?.notPrescribedReason ? (
                        <div className="rounded-lg border border-[var(--status-info-border)] bg-[var(--status-info-bg)] p-2.5 text-xs text-[var(--status-info-text)]">
                          <span className="font-semibold text-[var(--text-primary)]">
                            Raison médicale documentée :
                          </span>{' '}
                          {summary.documentedReasonMed.notPrescribedReason}
                        </div>
                      ) : (
                        <p className="text-xs text-[var(--text-secondary)]">
                          Aucun médicament actif enregistré pour ce pilier. Vous pouvez ajouter un
                          traitement ou noter la raison médicale si ce pilier n&apos;est pas prescrit.
                        </p>
                      )}
                    </div>
                  )}

                  {isEditingReason && (
                    <form
                      onSubmit={(e) =>
                        void handleSubmitReason(e, summary.pillar, summary.documentedReasonMed)
                      }
                      className="space-y-2 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-card)] p-3"
                    >
                      <label
                        htmlFor={`reason-${summary.pillar}`}
                        className="block text-xs font-semibold text-[var(--text-primary)]"
                      >
                        Raison médicale de non-prescription ({meta.shortLabelFr})
                      </label>
                      <input
                        id={`reason-${summary.pillar}`}
                        type="text"
                        required
                        value={reasonDraft}
                        onChange={(e) => setReasonDraft(e.target.value)}
                        placeholder="Ex. contre-indication rénale, hyperkaliémie, introduction prévue..."
                        className="w-full rounded-lg border border-[var(--border-strong)] bg-[var(--bg-app)] px-3 py-2 text-sm text-[var(--text-primary)]"
                      />
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="submit"
                          disabled={savingReason || reasonDraft.trim().length === 0}
                          className="touch-target rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
                        >
                          {savingReason ? 'Enregistrement...' : 'Enregistrer la raison'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingReasonPillar(null)}
                          className="touch-target rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)]"
                        >
                          Annuler
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[var(--border-subtle)] pt-3">
                  {primaryMed ? (
                    <>
                      <button
                        type="button"
                        onClick={() => onOpenDoseChange(primaryMed)}
                        className="touch-target inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)]"
                      >
                        <TrendingUp className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Nouveau palier de dose</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onEditMedication(primaryMed)}
                        className="touch-target inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                      >
                        <Pencil className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Modifier</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => onAddMedicationForPillar(summary.pillar)}
                        className="touch-target inline-flex items-center gap-1.5 rounded-lg bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)]"
                      >
                        <Plus className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Ajouter ce pilier</span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          openReasonEditor(
                            summary.pillar,
                            summary.documentedReasonMed?.notPrescribedReason,
                          )
                        }
                        className="touch-target inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                      >
                        <ClipboardPen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>
                          {summary.documentedReasonMed?.notPrescribedReason
                            ? 'Modifier la raison'
                            : 'Documenter une raison'}
                        </span>
                      </button>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Card>

      {/* Alertes et reperes issus du moteur deterministe (evaluatePatientState) */}
      <Card
        title="Points de vigilance et suivi des traitements"
        subtitle="Générés localement à partir de vos traitements, de vos derniers paliers et de vos bilans biologiques."
        icon={<ShieldAlert className="h-5 w-5" />}
        headerAction={
          <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2.5 py-0.5 text-xs font-semibold text-[var(--text-secondary)] tabular-nums">
            {medicationAlerts.length} repère{medicationAlerts.length > 1 ? 's' : ''}
          </span>
        }
      >
        {medicationAlerts.length === 0 ? (
          <p className="text-sm text-[var(--text-secondary)]">
            Aucune alerte médicamenteuse active pour le moment au vu des données enregistrées.
          </p>
        ) : (
          <ul className="m-0 list-none space-y-3 p-0">
            {medicationAlerts.map((alert) => {
              const borderClass =
                alert.severity === 'urgent'
                  ? 'border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)]'
                  : alert.severity === 'warning'
                    ? 'border-[var(--status-warning-border)] bg-[var(--status-warning-bg)]'
                    : alert.severity === 'action'
                      ? 'border-[var(--status-action-border)] bg-[var(--status-action-bg)]'
                      : 'border-[var(--status-info-border)] bg-[var(--status-info-bg)]';

              return (
                <li
                  key={alert.id}
                  className={`rounded-xl border p-4 ${borderClass}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <TriageBadge level={alert.severity} size="sm" />
                      {alert.evidenceGrade && <EvidenceBadge grade={alert.evidenceGrade} />}
                    </div>
                    {(alert.severity === 'warning' || alert.severity === 'urgent') && (
                      <AlertTriangle
                        className="h-4 w-4 shrink-0 text-[var(--text-primary)]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                    {alert.titleFr}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-primary)]">
                    {alert.explanationFr}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text-primary)]">
                    Repère d&apos;échange : {alert.suggestedActionFr}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-secondary)]">
                    <span>Sources : {alert.sources.join(' · ')}</span>
                    <Link
                      to={`/library?article=${encodeURIComponent(alert.articleSlug)}`}
                      className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      <span>Lire la fiche</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Card>
    </div>
  );
}
