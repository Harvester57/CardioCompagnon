import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  PhoneCall,
  Save,
  Thermometer,
} from 'lucide-react';
import type { Medication, PatientProfile } from '../../types';
import { Card } from '../../ui';
import { PILLAR_META, formatMedicationDisplayName, isMedicationActive } from './medsHelpers';

export interface SickDayPlanSectionProps {
  profile: PatientProfile;
  medications: Medication[];
  onSaveSickDayNote: (note: string) => Promise<void>;
}

const SICK_DAY_RELEVANT_PILLARS = new Set([
  'sglt2i',
  'loop_diuretic',
  'raas_arni',
  'mra',
  'beta_blocker',
]);

export function SickDayPlanSection({
  profile,
  medications,
  onSaveSickDayNote,
}: SickDayPlanSectionProps) {
  const [draftNote, setDraftNote] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState<string | null>(null);
  const [errorFeedback, setErrorFeedback] = useState<string | null>(null);

  const savedNote = profile.sickDayPlanNote ?? '';
  const note = draftNote ?? savedNote;

  const activeRelevantMeds = medications.filter(
    (m) => isMedicationActive(m) && SICK_DAY_RELEVANT_PILLARS.has(m.pillar),
  );
  const hasActiveSglt2i = medications.some(
    (m) => isMedicationActive(m) && (m.pillar === 'sglt2i' || m.subClass === 'sglt2i'),
  );

  const hasUnsavedChanges = note.trim() !== savedNote.trim();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsSaving(true);
    setSavedFeedback(null);
    setErrorFeedback(null);
    try {
      await onSaveSickDayNote(note.trim());
      setDraftNote(null);
      setSavedFeedback('Vos consignes « jours de maladie » ont été enregistrées sur cet appareil.');
    } catch {
      setErrorFeedback("Impossible d'enregistrer vos consignes. Veuillez réessayer.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="space-y-5">
      {/* Explications scientifiques */}
      <Card
        title="Comprendre les « jours de maladie » en insuffisance cardiaque"
        subtitle="Repères scientifiques en cas de fièvre, gastro-entérite, vomissements, diarrhées ou déshydratation."
        icon={<Thermometer className="h-5 w-5" />}
      >
        <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p className="m-0 text-[var(--text-primary)]">
            Lors d&apos;une maladie aiguë entraînant une perte de liquides (
            <strong>fièvre élevée, gastro-entérite, vomissements, diarrhées répétées</strong> ou
            impossibilité de boire normalement), la déshydratation peut abaisser la tension
            artérielle et fragiliser temporairement les reins.
          </p>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-3.5 text-[var(--status-warning-text)]">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Vigilance spécifique sous iSGLT2 (acidocétose)
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed">
                Les inhibiteurs du SGLT2 (dapagliflozine, empagliflozine) exposent à un risque rare
                d&apos;<strong>acidocétose</strong> (parfois avec une glycémie normale), surtout en
                cas de <strong>diabète</strong>, de déshydratation sévère, de jeûne prolongé ou
                d&apos;infection aiguë. Signes d&apos;alerte : nausées, vomissements, douleurs
                abdominales, soif intense, respiration rapide ou fatigue brutale.
              </p>
              {hasActiveSglt2i && (
                <p className="mt-2 text-xs font-semibold text-[var(--text-primary)]">
                  Un iSGLT2 figure dans vos traitements actifs : demandez un protocole écrit précis à
                  votre équipe.
                </p>
              )}
            </div>

            <div className="rounded-xl border border-[var(--status-info-border)] bg-[var(--status-info-bg)] p-3.5 text-[var(--status-info-text)]">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Nuance scientifique sur les bloqueurs du SRAA et diurétiques
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed">
                Certains livrets patients (ex. Guy&apos;s &amp; St Thomas&apos; 2026) mentionnent la
                mise en pause temporaire de l&apos;iSGLT2 et un avis rapide pour les diurétiques en
                cas de vomissements ou diarrhées. À l&apos;inverse, le consensus britannique Clark et
                al. (2019) souligne qu&apos;aucune preuve ne justifie une suspension systématique
                des IEC/ARA2/ARNI/ARM lors d&apos;une infection bénigne, en raison du risque de non-reprise.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] p-3.5 text-xs text-[var(--status-urgent-text)]">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p className="m-0 leading-relaxed">
              <strong className="text-[var(--text-primary)]">Règle de sécurité :</strong> ne
              suspendez et ne modifiez jamais de vous-même un médicament de fond (en particulier
              votre bêtabloquant, qui ne doit jamais être interrompu brutalement). Contactez votre
              médecin traitant, votre infirmière insuffisance cardiaque / IPA ou votre cardiologue,
              ou appliquez uniquement le plan personnalisé validé ci-dessous. En cas de signes de
              gravité (malaise, essoufflement au repos, impossibilité de garder les liquides,
              confusion), appelez le <strong>15 (SAMU)</strong> ou le <strong>112</strong> (
              <strong>114</strong> par SMS).
            </p>
          </div>

          <Link
            to="/library?article=medicaments-effets-secondaires-suivi"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Lire la fiche détaillée sur les effets secondaires et jours de maladie</span>
          </Link>
        </div>
      </Card>

      {/* Traitements actifs a passer en revue avec le medecin */}
      {activeRelevantMeds.length > 0 && (
        <Card
          tone="subtle"
          title="Vos traitements actifs à aborder pour établir votre plan"
          subtitle="Présentez cette liste à votre cardiologue ou votre médecin traitant afin de noter des consignes précises."
        >
          <ul className="m-0 grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2">
            {activeRelevantMeds.map((med) => (
              <li
                key={med.id ?? `${med.pillar}-${med.innName}`}
                className="flex items-center justify-between gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-2 text-xs"
              >
                <span className="font-semibold text-[var(--text-primary)]">
                  {formatMedicationDisplayName(med)}
                </span>
                <span className="text-[var(--text-secondary)]">
                  {PILLAR_META[med.pillar].shortLabelFr}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Zone editable profile.sickDayPlanNote */}
      <Card
        title="Mon plan personnalisé « Jours de maladie »"
        subtitle="Notez ici les consignes exactes validées par votre cardiologue ou votre médecin traitant."
      >
        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
          <div>
            <label
              htmlFor="sick-day-plan-note"
              className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]"
            >
              Consignes validées par votre équipe médicale
            </label>
            <textarea
              id="sick-day-plan-note"
              rows={5}
              value={note}
              onChange={(e) => {
                setDraftNote(e.target.value);
                if (savedFeedback) setSavedFeedback(null);
              }}
              placeholder="Exemple : En cas de fièvre > 38,5 °C, vomissements ou diarrhées pendant plus de 24 h : appeler le cabinet du Dr ... ; ne jamais arrêter le bisoprolol ; conduite validée pour le diurétique et l'iSGLT2 : ... ; reprendre dès reprise normale de l'hydratation après accord médical."
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] p-3.5 text-sm leading-relaxed text-[var(--text-primary)]"
            />
          </div>

          {savedFeedback && (
            <div
              role="status"
              aria-live="polite"
              className="flex items-center gap-2 rounded-xl border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-3.5 py-2.5 text-sm font-medium text-[var(--status-stable-text)]"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{savedFeedback}</span>
            </div>
          )}

          {errorFeedback && (
            <div
              role="alert"
              className="rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3.5 py-2.5 text-sm text-[var(--status-urgent-text)]"
            >
              {errorFeedback}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-[var(--text-secondary)]">
              {hasUnsavedChanges
                ? 'Modifications non enregistrées.'
                : 'Stocké localement sur votre appareil.'}
            </span>
            <button
              type="submit"
              disabled={isSaving}
              className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-50"
            >
              <Save className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{isSaving ? 'Enregistrement...' : 'Enregistrer mes consignes'}</span>
            </button>
          </div>
        </form>
      </Card>

      {/* Contacts de l'equipe de soins + urgences */}
      <Card
        tone="subtle"
        title="Contacts rapides en cas de maladie aiguë"
        icon={<PhoneCall className="h-5 w-5" />}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {profile.careTeam.cardiologist?.name && (
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-xs">
              <p className="font-semibold text-[var(--text-primary)]">Cardiologue</p>
              <p className="mt-0.5 text-[var(--text-secondary)]">
                {profile.careTeam.cardiologist.name}
              </p>
              {profile.careTeam.cardiologist.phone && (
                <p className="mt-0.5 font-medium text-[var(--color-primary)] tabular-nums">
                  {profile.careTeam.cardiologist.phone}
                </p>
              )}
            </div>
          )}
          {profile.careTeam.gp?.name && (
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-xs">
              <p className="font-semibold text-[var(--text-primary)]">Médecin traitant</p>
              <p className="mt-0.5 text-[var(--text-secondary)]">{profile.careTeam.gp.name}</p>
              {profile.careTeam.gp.phone && (
                <p className="mt-0.5 font-medium text-[var(--color-primary)] tabular-nums">
                  {profile.careTeam.gp.phone}
                </p>
              )}
            </div>
          )}
          {profile.careTeam.hfNurse?.name && (
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 text-xs">
              <p className="font-semibold text-[var(--text-primary)]">
                Infirmière IC / IPA
              </p>
              <p className="mt-0.5 text-[var(--text-secondary)]">
                {profile.careTeam.hfNurse.name}
              </p>
              {profile.careTeam.hfNurse.phone && (
                <p className="mt-0.5 font-medium text-[var(--color-primary)] tabular-nums">
                  {profile.careTeam.hfNurse.phone}
                </p>
              )}
            </div>
          )}
          <div className="rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] p-3 text-xs text-[var(--status-urgent-text)]">
            <p className="font-semibold text-[var(--text-primary)]">Urgences France</p>
            <p className="mt-0.5 tabular-nums">
              SAMU : <strong>15</strong> · Urgences Europe : <strong>112</strong> · SMS sourds /
              malentendants : <strong>114</strong>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
