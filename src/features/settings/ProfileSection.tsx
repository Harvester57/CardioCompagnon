import { type FormEvent, useState } from 'react';
import { CheckCircle2, Save, SlidersHorizontal, UserRound, Users } from 'lucide-react';
import {
  type CardioDatabase,
  saveProfile,
  useActiveDb,
  useDemoMode,
  usePatientProfile,
} from '../../db';
import type {
  CardiacDeviceType,
  CareContact,
  PatientProfile,
  SleepApnoeaStatus,
} from '../../types';
import { Card, DateInput } from '../../ui';
import {
  BOOLEAN_CLINICAL_MODULES,
  CARDIAC_DEVICE_OPTIONS,
  CARE_TEAM_ROLES,
  type CareTeamKey,
  INPUT_CLASS,
  LABEL_CLASS,
  PRIMARY_BUTTON_CLASS,
  SLEEP_APNOEA_OPTIONS,
  formatNumberFr,
  parseOptionalDecimalFr,
  parseOptionalInteger,
} from './constants';

interface CareContactDraft {
  name: string;
  phone: string;
  center: string;
}

interface ProfileFormState {
  displayName: string;
  sex: 'M' | 'F';
  birthYear: string;
  diagnosisDate: string;
  hfStage: 'B' | 'C' | 'unknown';
  nyhaClass: '' | '1' | '2' | '3' | '4';
  ischaemicCauseConfirmed: 'yes' | 'uncertain' | 'mixed';
  dryWeightKg: string;
  baselineLdlGL: string;
  fluidLimitMl: string;
  saltTargetG: string;
  drivingGroup: 'group1' | 'group2' | 'none';
  onExtendedSickLeave: boolean;
  allergies: string;
  modules: PatientProfile['modules'];
  careTeam: Record<CareTeamKey, CareContactDraft>;
}

function contactToDraft(contact?: CareContact): CareContactDraft {
  return {
    name: contact?.name ?? '',
    phone: contact?.phone ?? '',
    center: contact?.center ?? '',
  };
}

function draftToContact(draft: CareContactDraft): CareContact | undefined {
  const name = draft.name.trim();
  const phone = draft.phone.trim();
  const center = draft.center.trim();
  if (!name && !phone && !center) {
    return undefined;
  }
  return {
    name: name || 'Contact renseigné',
    ...(phone ? { phone } : {}),
    ...(center ? { center } : {}),
  };
}

function profileToFormState(profile: PatientProfile): ProfileFormState {
  return {
    displayName: profile.displayName ?? '',
    sex: profile.sex,
    birthYear: profile.birthYear !== undefined ? String(profile.birthYear) : '',
    diagnosisDate: profile.diagnosisDate ?? '',
    hfStage: profile.hfStage,
    nyhaClass: profile.nyhaClass !== null ? (String(profile.nyhaClass) as '1' | '2' | '3' | '4') : '',
    ischaemicCauseConfirmed: profile.ischaemicCauseConfirmed,
    dryWeightKg: formatNumberFr(profile.dryWeightKg),
    baselineLdlGL: formatNumberFr(profile.baselineLdlGL),
    fluidLimitMl:
      profile.fluidLimitMl !== undefined && profile.fluidLimitMl !== null
        ? String(profile.fluidLimitMl)
        : '',
    saltTargetG: formatNumberFr(profile.saltTargetG ?? 5),
    drivingGroup: profile.drivingGroup,
    onExtendedSickLeave: Boolean(profile.onExtendedSickLeave),
    allergies: profile.allergies ?? '',
    modules: { ...profile.modules },
    careTeam: {
      cardiologist: contactToDraft(profile.careTeam.cardiologist),
      gp: contactToDraft(profile.careTeam.gp),
      hfNurse: contactToDraft(profile.careTeam.hfNurse),
      pharmacist: contactToDraft(profile.careTeam.pharmacist),
      trustedContact: contactToDraft(profile.careTeam.trustedContact),
    },
  };
}

interface ProfileFormProps {
  db: CardioDatabase;
  isDemoMode: boolean;
  initialProfile: PatientProfile;
  savedMessage: string | null;
  onSavedMessage: (message: string | null) => void;
}

export function ProfileSection() {
  const db = useActiveDb();
  const { isDemoMode } = useDemoMode();
  const profile = usePatientProfile();
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const formKey = `${isDemoMode ? 'demo' : 'active'}:${profile.updatedAt}:${profile.displayName ?? ''}`;

  return (
    <ProfileForm
      key={formKey}
      db={db}
      isDemoMode={isDemoMode}
      initialProfile={profile}
      savedMessage={savedMessage}
      onSavedMessage={setSavedMessage}
    />
  );
}

function ProfileForm({
  db,
  isDemoMode,
  initialProfile,
  savedMessage,
  onSavedMessage,
}: ProfileFormProps) {
  const [form, setForm] = useState<ProfileFormState>(() => profileToFormState(initialProfile));
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function updateContact(role: CareTeamKey, field: keyof CareContactDraft, value: string) {
    setForm((prev) => ({
      ...prev,
      careTeam: {
        ...prev.careTeam,
        [role]: {
          ...prev.careTeam[role],
          [field]: value,
        },
      },
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    onSavedMessage(null);

    const birthYearParsed = parseOptionalInteger(form.birthYear);
    if (
      !birthYearParsed.valid ||
      (birthYearParsed.value !== undefined &&
        (birthYearParsed.value < 1900 || birthYearParsed.value > 2100))
    ) {
      setErrorMessage('Veuillez saisir une année de naissance valide (4 chiffres, entre 1900 et 2100).');
      return;
    }

    const dryWeightParsed = parseOptionalDecimalFr(form.dryWeightKg);
    if (
      !dryWeightParsed.valid ||
      (dryWeightParsed.value !== undefined && (dryWeightParsed.value < 25 || dryWeightParsed.value > 300))
    ) {
      setErrorMessage('Veuillez saisir un poids sec valide en kg (par exemple 78,5).');
      return;
    }

    const baselineLdlParsed = parseOptionalDecimalFr(form.baselineLdlGL);
    if (
      !baselineLdlParsed.valid ||
      (baselineLdlParsed.value !== undefined &&
        (baselineLdlParsed.value <= 0 || baselineLdlParsed.value > 10))
    ) {
      setErrorMessage('Veuillez saisir un LDL-c de base valide en g/L (par exemple 1,62).');
      return;
    }

    const fluidLimitParsed = parseOptionalInteger(form.fluidLimitMl);
    if (
      !fluidLimitParsed.valid ||
      (fluidLimitParsed.value !== undefined &&
        (fluidLimitParsed.value < 500 || fluidLimitParsed.value > 5000))
    ) {
      setErrorMessage(
        'Veuillez saisir une limite hydrique en mL/j entre 500 et 5 000, ou laisser le champ vide pour suivre votre soif.',
      );
      return;
    }

    const saltTargetParsed = parseOptionalDecimalFr(form.saltTargetG);
    if (
      !saltTargetParsed.valid ||
      (saltTargetParsed.value !== undefined && (saltTargetParsed.value <= 0 || saltTargetParsed.value > 20))
    ) {
      setErrorMessage('Veuillez saisir un repère de sel valide en g/j (par exemple 5).');
      return;
    }

    const nyhaValue: PatientProfile['nyhaClass'] =
      form.nyhaClass === ''
        ? null
        : (Number.parseInt(form.nyhaClass, 10) as 1 | 2 | 3 | 4);

    setIsSaving(true);
    try {
      await saveProfile(db, {
        displayName: form.displayName.trim() || undefined,
        sex: form.sex,
        birthYear: birthYearParsed.value,
        diagnosisDate: form.diagnosisDate.trim() || undefined,
        hfStage: form.hfStage,
        nyhaClass: nyhaValue,
        ischaemicCauseConfirmed: form.ischaemicCauseConfirmed,
        dryWeightKg: dryWeightParsed.value,
        baselineLdlGL: baselineLdlParsed.value,
        fluidLimitMl: fluidLimitParsed.value ?? null,
        saltTargetG: saltTargetParsed.value ?? 5,
        drivingGroup: form.drivingGroup,
        onExtendedSickLeave: form.onExtendedSickLeave,
        allergies: form.allergies.trim() || undefined,
        modules: { ...form.modules },
        careTeam: {
          cardiologist: draftToContact(form.careTeam.cardiologist),
          gp: draftToContact(form.careTeam.gp),
          hfNurse: draftToContact(form.careTeam.hfNurse),
          pharmacist: draftToContact(form.careTeam.pharmacist),
          trustedContact: draftToContact(form.careTeam.trustedContact),
        },
      });
      onSavedMessage(
        isDemoMode
          ? 'Profil de démonstration enregistré (votre profil personnel reste intact).'
          : 'Votre profil clinique et vos modules ont été enregistrés.',
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Une erreur est survenue lors de l’enregistrement du profil.',
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={(e) => void handleSubmit(e)} className="space-y-6" noValidate>
      <Card
        title="Profil clinique"
        subtitle="Ces repères personnalisent vos alertes, vos objectifs de suivi et les questions préparées pour vos consultations."
        icon={<UserRound className="h-5 w-5" />}
      >
        {isDemoMode && (
          <p className="mb-4 rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] px-3.5 py-2.5 text-xs text-[var(--status-warning-text)]">
            Vous modifiez actuellement le profil de démonstration (CardioCompagnonDemoDB). Vos
            données personnelles ne sont pas modifiées.
          </p>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="profile-display-name" className={LABEL_CLASS}>
              Nom ou prénom d&apos;affichage
            </label>
            <input
              id="profile-display-name"
              type="text"
              value={form.displayName}
              onChange={(e) => setForm((prev) => ({ ...prev, displayName: e.target.value }))}
              placeholder="Ex. : Mon profil"
              className={INPUT_CLASS}
            />
          </div>

          <div>
            <label htmlFor="profile-sex" className={LABEL_CLASS}>
              Sexe (normes d&apos;imagerie VG)
            </label>
            <select
              id="profile-sex"
              value={form.sex}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, sex: e.target.value as 'M' | 'F' }))
              }
              className={INPUT_CLASS}
            >
              <option value="M">Homme</option>
              <option value="F">Femme</option>
            </select>
          </div>

          <div>
            <label htmlFor="profile-birth-year" className={LABEL_CLASS}>
              Année de naissance
            </label>
            <input
              id="profile-birth-year"
              type="text"
              inputMode="numeric"
              value={form.birthYear}
              onChange={(e) => setForm((prev) => ({ ...prev, birthYear: e.target.value }))}
              placeholder="Ex. : 1964"
              className={`${INPUT_CLASS} tabular-nums`}
            />
          </div>

          <div>
            <label htmlFor="profile-diagnosis-date" className={LABEL_CLASS}>
              Date du diagnostic
            </label>
            <DateInput
              id="profile-diagnosis-date"
              value={form.diagnosisDate}
              onChange={(iso) => setForm((prev) => ({ ...prev, diagnosisDate: iso }))}
              className={`${INPUT_CLASS} tabular-nums`}
            />
          </div>

          <div>
            <label htmlFor="profile-hf-stage" className={LABEL_CLASS}>
              Stade d&apos;insuffisance cardiaque
            </label>
            <select
              id="profile-hf-stage"
              value={form.hfStage}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  hfStage: e.target.value as PatientProfile['hfStage'],
                }))
              }
              className={INPUT_CLASS}
            >
              <option value="unknown">Non précisé</option>
              <option value="B">Stade B — Dysfonction VG asymptomatique</option>
              <option value="C">Stade C — Insuffisance cardiaque symptomatique</option>
            </select>
          </div>

          <div>
            <label htmlFor="profile-nyha" className={LABEL_CLASS}>
              Classe NYHA habituelle
            </label>
            <select
              id="profile-nyha"
              value={form.nyhaClass}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  nyhaClass: e.target.value as ProfileFormState['nyhaClass'],
                }))
              }
              className={INPUT_CLASS}
            >
              <option value="">Non renseignée</option>
              <option value="1">Classe I — Aucune gêne à l&apos;effort habituel</option>
              <option value="2">Classe II — Essoufflement à l&apos;effort soutenu</option>
              <option value="3">Classe III — Gêne aux efforts de la vie courante</option>
              <option value="4">Classe IV — Symptômes au repos ou au moindre effort</option>
            </select>
          </div>

          <div>
            <label htmlFor="profile-ischaemic-cause" className={LABEL_CLASS}>
              Origine ischémique confirmée
            </label>
            <select
              id="profile-ischaemic-cause"
              value={form.ischaemicCauseConfirmed}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  ischaemicCauseConfirmed: e.target
                    .value as PatientProfile['ischaemicCauseConfirmed'],
                }))
              }
              className={INPUT_CLASS}
            >
              <option value="yes">Confirmée</option>
              <option value="uncertain">Incertaine / bilan en cours</option>
              <option value="mixed">Mixte (ischémique + autre cause)</option>
            </select>
          </div>

          <div>
            <label htmlFor="profile-driving-group" className={LABEL_CLASS}>
              Permis de conduire (France)
            </label>
            <select
              id="profile-driving-group"
              value={form.drivingGroup}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  drivingGroup: e.target.value as PatientProfile['drivingGroup'],
                }))
              }
              className={INPUT_CLASS}
            >
              <option value="group1">Groupe 1 — Permis léger (voiture / moto)</option>
              <option value="group2">Groupe 2 — Poids lourd / transport professionnel</option>
              <option value="none">Je ne conduis pas</option>
            </select>
          </div>

          <div>
            <label htmlFor="profile-dry-weight" className={LABEL_CLASS}>
              Poids sec de référence (kg)
            </label>
            <input
              id="profile-dry-weight"
              type="text"
              inputMode="decimal"
              value={form.dryWeightKg}
              onChange={(e) => setForm((prev) => ({ ...prev, dryWeightKg: e.target.value }))}
              placeholder="Ex. : 78,5"
              className={`${INPUT_CLASS} tabular-nums`}
            />
          </div>

          <div>
            <label htmlFor="profile-baseline-ldl" className={LABEL_CLASS}>
              LDL-c de base avant traitement (g/L)
            </label>
            <input
              id="profile-baseline-ldl"
              type="text"
              inputMode="decimal"
              value={form.baselineLdlGL}
              onChange={(e) => setForm((prev) => ({ ...prev, baselineLdlGL: e.target.value }))}
              placeholder="Ex. : 1,62"
              className={`${INPUT_CLASS} tabular-nums`}
            />
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Permet de vérifier la cible ESC coronaire (&lt; 0,55 g/L et baisse ≥ 50 %).
            </p>
          </div>

          <div>
            <label htmlFor="profile-fluid-limit" className={LABEL_CLASS}>
              Limite hydrique prescrite (mL/j)
            </label>
            <input
              id="profile-fluid-limit"
              type="text"
              inputMode="numeric"
              value={form.fluidLimitMl}
              onChange={(e) => setForm((prev) => ({ ...prev, fluidLimitMl: e.target.value }))}
              placeholder="Vide = selon la soif (FRESH-UP)"
              className={`${INPUT_CLASS} tabular-nums`}
            />
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Laissez vide si votre cardiologue n&apos;a pas prescrit de restriction hydrique
              (repère FRESH-UP / HFA 2024 : boire selon votre soif).
            </p>
          </div>

          <div>
            <label htmlFor="profile-salt-target" className={LABEL_CLASS}>
              Repère d&apos;apport en sel (g/j)
            </label>
            <input
              id="profile-salt-target"
              type="text"
              inputMode="decimal"
              value={form.saltTargetG}
              onChange={(e) => setForm((prev) => ({ ...prev, saltTargetG: e.target.value }))}
              placeholder="5"
              className={`${INPUT_CLASS} tabular-nums`}
            />
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Repère habituel par défaut : 5 g/j (sans restriction excessive non prescrite).
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3.5">
            <input
              id="profile-sick-leave"
              type="checkbox"
              aria-describedby="profile-sick-leave-desc"
              checked={form.onExtendedSickLeave}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, onExtendedSickLeave: e.target.checked }))
              }
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
            />
            <div className="text-sm">
              <label
                htmlFor="profile-sick-leave"
                className="block cursor-pointer font-medium text-[var(--text-primary)]"
              >
                Je suis actuellement en arrêt de travail prolongé
              </label>
              <p id="profile-sick-leave-desc" className="mt-0.5 text-xs text-[var(--text-secondary)]">
                Active le repère spécifique sur la réforme des indemnités journalières d&apos;octobre
                2026 (plafond d&apos;un an hors ALD contre maintien jusqu&apos;à 3 ans avec ALD 5 / ALD 13).
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="profile-allergies" className={LABEL_CLASS}>
              Allergies ou intolérances connues
            </label>
            <textarea
              id="profile-allergies"
              rows={2}
              value={form.allergies}
              onChange={(e) => setForm((prev) => ({ ...prev, allergies: e.target.value }))}
              placeholder="Ex. : allergie aux produits de contraste iodés, intolérance à un médicament..."
              className={INPUT_CLASS}
            />
          </div>
        </div>
      </Card>

      <Card
        title="Modules cliniques conditionnels"
        subtitle="Activez uniquement les situations qui vous concernent afin d'adapter dynamiquement les alertes, examens et questions."
        icon={<SlidersHorizontal className="h-5 w-5" />}
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {BOOLEAN_CLINICAL_MODULES.map((mod) => {
            const inputId = `module-${mod.key}`;
            const descId = `module-${mod.key}-desc`;
            return (
              <div
                key={mod.key}
                className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-3.5 transition-colors hover:border-[var(--color-primary)]/50"
              >
                <input
                  id={inputId}
                  type="checkbox"
                  aria-describedby={descId}
                  checked={form.modules[mod.key]}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      modules: {
                        ...prev.modules,
                        [mod.key]: e.target.checked,
                      },
                    }))
                  }
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
                />
                <div className="min-w-0">
                  <label
                    htmlFor={inputId}
                    className="block cursor-pointer text-sm font-medium text-[var(--text-primary)]"
                  >
                    {mod.labelFr}
                  </label>
                  <p
                    id={descId}
                    className="mt-0.5 text-xs leading-relaxed text-[var(--text-secondary)]"
                  >
                    {mod.effectFr}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 border-t border-[var(--border-subtle)] pt-4 sm:grid-cols-2">
          <div>
            <label htmlFor="module-sleep-apnoea" className={LABEL_CLASS}>
              Apnée du sommeil
            </label>
            <select
              id="module-sleep-apnoea"
              value={form.modules.sleepApnoea}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  modules: {
                    ...prev.modules,
                    sleepApnoea: e.target.value as SleepApnoeaStatus,
                  },
                }))
              }
              className={INPUT_CLASS}
            >
              {SLEEP_APNOEA_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.labelFr}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
              Active le suivi de l&apos;IAH, les repères de remboursement de la PPC (HAS) et le
              rappel de contre-indication formelle de l&apos;ASV en cas de SACS avec ICFER
              (SERVE-HF).
            </p>
          </div>

          <div>
            <label htmlFor="module-device" className={LABEL_CLASS}>
              Dispositif cardiaque implanté (DAI / CRT)
            </label>
            <select
              id="module-device"
              value={form.modules.device}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  modules: {
                    ...prev.modules,
                    device: e.target.value as CardiacDeviceType,
                  },
                }))
              }
              className={INPUT_CLASS}
            >
              {CARDIAC_DEVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.labelFr}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)]">
              Active les règles françaises de conduite après implantation ou choc, la
              télésurveillance de prothèse et les questions de suivi adaptées.
            </p>
          </div>
        </div>
      </Card>

      <Card
        title="Équipe de soins et personne de confiance"
        subtitle="Ces coordonnées figurent sur votre carte de suivi d'urgence et votre fiche de synthèse imprimable."
        icon={<Users className="h-5 w-5" />}
      >
        <div className="space-y-4">
          {CARE_TEAM_ROLES.map((role) => {
            const draft = form.careTeam[role.key];
            return (
              <div
                key={role.key}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40 p-3.5"
              >
                <fieldset className="min-w-0 border-0 p-0">
                  <legend className="mb-2 block w-full p-0 text-sm font-semibold text-[var(--text-primary)]">
                    {role.labelFr}
                  </legend>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor={`care-${role.key}-name`}
                      className="mb-1 block text-xs font-medium text-[var(--text-secondary)]"
                    >
                      Nom
                    </label>
                    <input
                      id={`care-${role.key}-name`}
                      type="text"
                      value={draft.name}
                      onChange={(e) => updateContact(role.key, 'name', e.target.value)}
                      placeholder={role.namePlaceholder}
                      className={INPUT_CLASS}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`care-${role.key}-phone`}
                      className="mb-1 block text-xs font-medium text-[var(--text-secondary)]"
                    >
                      Téléphone
                    </label>
                    <input
                      id={`care-${role.key}-phone`}
                      type="tel"
                      value={draft.phone}
                      onChange={(e) => updateContact(role.key, 'phone', e.target.value)}
                      placeholder="Ex. : 01 40 00 00 00"
                      className={`${INPUT_CLASS} tabular-nums`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`care-${role.key}-center`}
                      className="mb-1 block text-xs font-medium text-[var(--text-secondary)]"
                    >
                      {role.centerLabelFr}
                    </label>
                    <input
                      id={`care-${role.key}-center`}
                      type="text"
                      value={draft.center}
                      onChange={(e) => updateContact(role.key, 'center', e.target.value)}
                      placeholder={role.centerPlaceholder}
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>
                </fieldset>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
          <div className="min-w-0 flex-1">
            {errorMessage && (
              <p role="alert" className="text-sm font-medium text-[var(--status-urgent-text)]">
                {errorMessage}
              </p>
            )}
            {savedMessage && (
              <p
                role="status"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--status-stable-text)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{savedMessage}</span>
              </p>
            )}
          </div>

          <button type="submit" disabled={isSaving} className={PRIMARY_BUTTON_CLASS}>
            <Save className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{isSaving ? 'Enregistrement...' : 'Enregistrer le profil clinique'}</span>
          </button>
        </div>
      </Card>
    </form>
  );
}
