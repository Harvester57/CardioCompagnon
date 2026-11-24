import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  HeartPulse,
  OctagonAlert,
  PhoneCall,
  Pill,
  Printer,
  Settings,
  ShieldAlert,
  Users,
} from 'lucide-react';
import { formatFrenchNumber } from '../../engine';
import type { CareContact, PatientState } from '../../types';
import { Card } from '../../ui';
import {
  MEDICATION_STATUS_LABELS,
  PILLAR_LABELS,
  formatDateFr,
  formatDeviceFr,
  formatDiagnosisOriginFr,
  formatHfStageFr,
  formatNyhaFr,
  formatPhoneHref,
  getLatestImagingByModality,
} from './plan-helpers';

export interface EmergencyCardTabProps {
  state: PatientState;
}

interface CareContactRowProps {
  roleLabel: string;
  contact?: CareContact;
  emphasized?: boolean;
}

function CareContactRow({ roleLabel, contact, emphasized = false }: CareContactRowProps) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        emphasized
          ? 'border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)]/40'
          : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50'
      }`}
    >
      <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
        {roleLabel}
      </span>
      {contact && contact.name ? (
        <div className="mt-1 space-y-0.5 text-sm">
          <div className="font-semibold text-[var(--text-primary)]">{contact.name}</div>
          {contact.center && (
            <div className="text-xs text-[var(--text-secondary)]">{contact.center}</div>
          )}
          {contact.phone && (
            <div className="pt-0.5">
              <a
                href={formatPhoneHref(contact.phone)}
                className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-primary)] tabular-nums hover:underline"
              >
                <PhoneCall className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>{contact.phone}</span>
              </a>
            </div>
          )}
        </div>
      ) : (
        <p className="mt-1 mb-0 text-xs italic text-[var(--text-secondary)]">
          Non renseigné (modifiable dans Paramètres &amp; Profil)
        </p>
      )}
    </div>
  );
}

export function EmergencyCardTab({ state }: EmergencyCardTabProps) {
  const { profile, imaging, medications, referenceDate } = state;

  const { latestEtt, latestIrm } = useMemo(
    () => getLatestImagingByModality(imaging),
    [imaging],
  );

  const activeMeds = useMemo(
    () => medications.filter((m) => m.status !== 'stopped'),
    [medications],
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      <Card
        tone="urgent"
        title="Carte de suivi et d'urgence (100 % hors ligne)"
        subtitle={`Accessible sans connexion · Mise à jour le ${formatDateFr(referenceDate)}`}
        icon={<OctagonAlert className="h-5 w-5 text-[var(--status-urgent-text)]" />}
        headerAction={
          <button
            type="button"
            onClick={handlePrint}
            className="no-print touch-target inline-flex items-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
          >
            <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Imprimer la carte</span>
          </button>
        }
        className="print-avoid-break"
      >
        <div
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          aria-label="Numéros d'urgence en France"
        >
          <a
            href="tel:15"
            className="touch-target flex flex-col justify-between rounded-xl border-2 border-[var(--status-urgent-border)] bg-[var(--bg-card)] p-3.5 text-left transition-colors hover:bg-[var(--status-urgent-bg)]"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--status-urgent-text)]">
              SAMU — Urgence médicale
            </span>
            <span className="mt-1 text-3xl font-extrabold text-[var(--status-urgent-text)] tabular-nums">
              15
            </span>
            <span className="mt-1 text-xs text-[var(--text-secondary)]">
              En France, en cas de signe d&apos;alarme aigu
            </span>
          </a>

          <a
            href="tel:112"
            className="touch-target flex flex-col justify-between rounded-xl border-2 border-[var(--status-urgent-border)] bg-[var(--bg-card)] p-3.5 text-left transition-colors hover:bg-[var(--status-urgent-bg)]"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--status-urgent-text)]">
              Urgences Europe
            </span>
            <span className="mt-1 text-3xl font-extrabold text-[var(--status-urgent-text)] tabular-nums">
              112
            </span>
            <span className="mt-1 text-xs text-[var(--text-secondary)]">
              Numéro d&apos;urgence européen (y compris depuis un mobile)
            </span>
          </a>

          <a
            href="sms:114"
            className="touch-target flex flex-col justify-between rounded-xl border-2 border-[var(--border-strong)] bg-[var(--bg-card)] p-3.5 text-left transition-colors hover:bg-[var(--bg-subtle)]"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              Urgences par SMS
            </span>
            <span className="mt-1 text-3xl font-extrabold text-[var(--color-primary)] tabular-nums">
              114
            </span>
            <span className="mt-1 text-xs text-[var(--text-secondary)]">
              Personnes sourdes, malentendantes ou ne pouvant parler
            </span>
          </a>
        </div>
      </Card>

      <Card
        tone="warning"
        title="Signes d'alarme EPOF justifiant un appel immédiat"
        icon={<AlertTriangle className="h-5 w-5 text-[var(--status-warning-text)]" />}
        className="print-avoid-break"
      >
        <div className="space-y-3 text-sm">
          <div>
            <p className="mt-0 mb-1.5 font-semibold text-[var(--status-urgent-text)]">
              Appelez immédiatement le 15 (SAMU) ou le 112 si vous présentez :
            </p>
            <ul className="m-0 list-disc space-y-1 pl-5 text-[var(--text-primary)]">
              <li>
                <strong>Douleur thoracique</strong>, oppression, serrement ou brûlure dans la
                poitrine (pouvant irradier vers le bras, la mâchoire ou le dos).
              </li>
              <li>
                <strong>Essoufflement brutal ou au repos</strong>, ou impossibilité de rester
                allongé à plat (orthopnée aiguë).
              </li>
              <li>
                <strong>Malaise, perte de connaissance (syncope)</strong>, palpitations rapides
                mal tolérées ou <strong>choc délivré par votre DAI / LifeVest</strong>.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--bg-card)] p-3 text-xs leading-relaxed text-[var(--text-primary)]">
            <strong className="font-semibold">
              Signes d&apos;alerte EPOF à signaler rapidement (sous 24 à 48 h) à votre médecin ou
              infirmière IC :
            </strong>{' '}
            <strong>E</strong>ssoufflement qui s&apos;aggrave à l&apos;effort, <strong>P</strong>
            rise de poids rapide (≥ 2,0 kg en 3 jours ou par rapport à votre poids sec),{' '}
            <strong>Œ</strong>dèmes des chevilles ou des jambes qui augmentent, <strong>F</strong>
            atigue inhabituelle et marquée. Ne modifiez jamais vos traitements sans avis médical.
          </div>
        </div>
      </Card>

      <Card
        title="Résumé vital à montrer aux secours"
        icon={<HeartPulse className="h-5 w-5" />}
        className="print-avoid-break"
      >
        <dl className="m-0 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Identité &amp; diagnostic
            </dt>
            <dd className="mt-1 m-0 space-y-0.5 text-[var(--text-primary)]">
              <div className="font-semibold">
                {profile.displayName || 'Patient'} ({profile.sex === 'F' ? 'Femme' : 'Homme'}
                {profile.birthYear ? `, né(e) en ${profile.birthYear}` : ''})
              </div>
              <div className="text-xs">{formatDiagnosisOriginFr(profile.ischaemicCauseConfirmed)}</div>
              <div className="text-xs">
                {formatHfStageFr(profile.hfStage)} · NYHA : {formatNyhaFr(profile.nyhaClass)}
              </div>
            </dd>
          </div>

          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Dernière FEVG (ETT / IRM séparées)
            </dt>
            <dd className="mt-1 m-0 space-y-1 text-xs text-[var(--text-primary)] tabular-nums">
              <div>
                <strong>ETT :</strong>{' '}
                {latestEtt?.lvefPercent !== undefined
                  ? `${formatFrenchNumber(latestEtt.lvefPercent, 0)} % (${formatDateFr(latestEtt.date)})`
                  : 'Non renseignée'}
              </div>
              <div>
                <strong>IRM cardiaque :</strong>{' '}
                {latestIrm?.lvefPercent !== undefined
                  ? `${formatFrenchNumber(latestIrm.lvefPercent, 0)} % (${formatDateFr(latestIrm.date)})`
                  : 'Non renseignée'}
              </div>
            </dd>
          </div>

          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Dispositif implanté / LifeVest
            </dt>
            <dd className="mt-1 m-0 space-y-1 text-xs text-[var(--text-primary)]">
              <div className="font-semibold">{formatDeviceFr(profile.modules.device)}</div>
              <div>
                Gilet défibrillateur portable (LifeVest) :{' '}
                <strong>{profile.modules.lifeVest ? 'Oui (port actif)' : 'Non'}</strong>
              </div>
            </dd>
          </div>

          <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)]/40 p-3">
            <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--status-warning-text)]">
              <ShieldAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Allergies connues</span>
            </dt>
            <dd className="mt-1 m-0 text-sm font-semibold text-[var(--text-primary)]">
              {profile.allergies || 'Non renseigné — à vérifier'}
            </dd>
          </div>
        </dl>

        {profile.sickDayPlanNote && (
          <div className="mt-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50 p-3 text-xs leading-relaxed text-[var(--text-primary)]">
            <strong className="font-semibold">Consignes « jours de maladie » :</strong>{' '}
            {profile.sickDayPlanNote}
          </div>
        )}
      </Card>

      <Card
        title={`Traitements actifs (${activeMeds.length})`}
        subtitle="Liste en DCI (dénomination commune internationale) et posologie actuelle"
        icon={<Pill className="h-5 w-5" />}
        className="print-avoid-break"
      >
        {activeMeds.length === 0 ? (
          <p className="m-0 text-sm text-[var(--text-secondary)]">
            Aucun traitement actif renseigné dans votre profil.
          </p>
        ) : (
          <ul className="m-0 list-none divide-y divide-[var(--border-subtle)] p-0 text-sm">
            {activeMeds.map((med) => (
              <li
                key={med.id ?? `${med.pillar}-${med.innName}`}
                className="flex flex-wrap items-baseline justify-between gap-2 py-2 first:pt-0 last:pb-0"
              >
                <div>
                  <span className="font-semibold text-[var(--text-primary)]">{med.innName}</span>
                  {med.frenchBrand && (
                    <span className="ml-1.5 text-xs text-[var(--text-secondary)]">
                      ({med.frenchBrand})
                    </span>
                  )}
                  <span className="ml-2 rounded bg-[var(--bg-subtle)] px-1.5 py-0.5 text-xs text-[var(--text-secondary)]">
                    {PILLAR_LABELS[med.pillar]}
                  </span>
                </div>
                <div className="text-right tabular-nums">
                  <span className="font-semibold text-[var(--color-primary)]">{med.doseLabel}</span>
                  <span className="ml-2 text-xs text-[var(--text-secondary)]">
                    {MEDICATION_STATUS_LABELS[med.status]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card
        title="Équipe de soins et personne de confiance"
        icon={<Users className="h-5 w-5" />}
        headerAction={
          <Link
            to="/settings"
            className="no-print touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--bg-subtle)]"
          >
            <Settings className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Modifier les contacts</span>
          </Link>
        }
        className="print-avoid-break"
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <CareContactRow
            roleLabel="Personne de confiance"
            contact={profile.careTeam.trustedContact}
            emphasized
          />
          <CareContactRow roleLabel="Cardiologue" contact={profile.careTeam.cardiologist} />
          <CareContactRow roleLabel="Médecin traitant" contact={profile.careTeam.gp} />
          <CareContactRow
            roleLabel="Infirmière IC / IPA"
            contact={profile.careTeam.hfNurse}
          />
          <CareContactRow roleLabel="Pharmacien" contact={profile.careTeam.pharmacist} />
        </div>
      </Card>
    </div>
  );
}
