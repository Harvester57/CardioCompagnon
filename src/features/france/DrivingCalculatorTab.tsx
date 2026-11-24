import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Car,
  CheckCircle2,
  Clock,
  Info,
  OctagonAlert,
  RotateCcw,
  Scale,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { evaluateFrenchDrivingFitness } from '../../engine';
import type {
  CardiacDeviceType,
  DrivingAssessmentInput,
  DrivingAssessmentResult,
  PatientState,
} from '../../types';
import { Card } from '../../ui';
import {
  DEVICE_OPTIONS,
  NYHA_OPTIONS,
  SHOCK_OPTIONS,
  deriveDrivingInputFromState,
  getDrivingStatusStyle,
} from './france-helpers';

export interface DrivingCalculatorTabProps {
  state: PatientState;
}

function parseOptionalNonNegativeInt(rawValue: string): number | undefined {
  const trimmed = rawValue.trim();
  if (trimmed === '') {
    return undefined;
  }
  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return undefined;
  }
  return Math.round(parsed);
}

function DrivingStatusIcon({ status }: { status: DrivingAssessmentResult['status'] }) {
  switch (status) {
    case 'compatible_after_clearance':
      return <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />;
    case 'specialist_assessment_required':
      return <Info className="h-5 w-5 shrink-0" aria-hidden="true" />;
    case 'temporarily_incompatible':
      return <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden="true" />;
    case 'permanently_incompatible':
      return <OctagonAlert className="h-5 w-5 shrink-0" aria-hidden="true" />;
  }
}

export function DrivingCalculatorTab({ state }: DrivingCalculatorTabProps) {
  const profileDefaults = useMemo(() => deriveDrivingInputFromState(state), [state]);
  const [simulatedInput, setSimulatedInput] = useState<DrivingAssessmentInput | null>(null);

  const currentInput = simulatedInput ?? profileDefaults;
  const isCustomSimulation = simulatedInput !== null;

  const result = useMemo(
    () => evaluateFrenchDrivingFitness(currentInput),
    [currentInput],
  );

  const statusStyle = getDrivingStatusStyle(result.status);
  const hasIcdSelected =
    currentInput.device === 'icd_primary' ||
    currentInput.device === 'icd_secondary' ||
    currentInput.device === 'crt_d';

  function updateInput(patch: Partial<DrivingAssessmentInput>) {
    setSimulatedInput((prev) => ({
      ...(prev ?? profileDefaults),
      ...patch,
    }));
  }

  return (
    <div className="space-y-5">
      {/* Resultat en temps reel en tete pour visibilite immediate */}
      <section
        aria-live="polite"
        aria-label="Résultat indicatif du calculateur permis de conduire"
      >
        <Card tone={statusStyle.tone} className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold ${statusStyle.badgeClasses}`}
            >
              <DrivingStatusIcon status={result.status} />
              <span>{statusStyle.badgeLabelFr}</span>
            </span>

            {result.minWaitWeeks !== undefined && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--status-warning-border)] bg-[var(--bg-card)] px-3 py-1 text-sm font-semibold text-[var(--status-warning-text)] tabular-nums">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  Délai minimal indicatif : {result.minWaitWeeks}{' '}
                  {result.minWaitWeeks > 1 ? 'semaines' : 'semaine'}
                </span>
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold leading-snug text-[var(--text-primary)] sm:text-lg">
              {result.headlineFr}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-primary)]">
              {result.explanationFr}
            </p>
          </div>

          <div className="flex items-start gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2.5 text-xs text-[var(--text-secondary)]">
            <Scale
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]"
              aria-hidden="true"
            />
            <div>
              <span className="font-semibold text-[var(--text-primary)]">Base légale : </span>
              <span>{result.legalBasisFr}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Démarches et conduites à tenir
            </h4>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--text-primary)]">
              {result.nextStepsFr.map((step, index) => (
                <li key={`driving-step-${index}`}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-[var(--border-subtle)] pt-3">
            <Link
              to="/library?article=regles-conduite-automobile"
              className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--bg-subtle)]"
            >
              <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Lire la fiche complète sur la conduite automobile</span>
            </Link>
            {currentInput.hasLifeVest && (
              <Link
                to="/library?article=gilet-defibrillateur-portable"
                className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--bg-subtle)]"
              >
                <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Lire la fiche sur le gilet LifeVest</span>
              </Link>
            )}
          </div>
        </Card>
      </section>

      {/* Formulaire de simulation */}
      <Card
        title="Paramètres de simulation — Permis de conduire (France)"
        subtitle="Pré-rempli à partir de votre profil actuel. Ajustez librement les paramètres pour tester différents scénarios sans modifier vos données médicales."
        icon={<Car className="h-5 w-5" />}
        headerAction={
          isCustomSimulation ? (
            <button
              type="button"
              onClick={() => setSimulatedInput(null)}
              className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-subtle)] px-3 py-2 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--color-primary-soft)]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Réinitialiser depuis mon profil</span>
            </button>
          ) : undefined
        }
      >
        {state.profile.drivingGroup === 'none' && !isCustomSimulation && (
          <div className="mb-4 rounded-xl border border-[var(--status-info-border)] bg-[var(--status-info-bg)] px-3.5 py-2.5 text-xs text-[var(--status-info-text)]">
            Votre profil indique actuellement que vous ne conduisez pas. Le simulateur est
            pré-positionné sur le groupe 1 afin de vous permettre d&apos;explorer les règles.
          </div>
        )}

        <form
          onSubmit={(event) => event.preventDefault()}
          className="space-y-5"
        >
          {/* Groupe de permis */}
          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold text-[var(--text-primary)]">
              Catégorie de permis de conduire
            </legend>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div
                className={`touch-target flex items-start gap-3 rounded-xl border p-3 transition-colors ${
                  currentInput.group === 'group1'
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <input
                  id="driving-group-1"
                  type="radio"
                  name="drivingGroup"
                  value="group1"
                  aria-describedby="driving-group-1-desc"
                  checked={currentInput.group === 'group1'}
                  onChange={() => updateInput({ group: 'group1' })}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                />
                <div className="text-sm">
                  <label
                    htmlFor="driving-group-1"
                    className="block cursor-pointer font-semibold text-[var(--text-primary)]"
                  >
                    Groupe 1 — Véhicules légers
                  </label>
                  <p id="driving-group-1-desc" className="text-xs text-[var(--text-secondary)]">
                    Voiture, moto (permis A, B, BE)
                  </p>
                </div>
              </div>

              <div
                className={`touch-target flex items-start gap-3 rounded-xl border p-3 transition-colors ${
                  currentInput.group === 'group2'
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)]'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <input
                  id="driving-group-2"
                  type="radio"
                  name="drivingGroup"
                  value="group2"
                  aria-describedby="driving-group-2-desc"
                  checked={currentInput.group === 'group2'}
                  onChange={() => updateInput({ group: 'group2' })}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
                />
                <div className="text-sm">
                  <label
                    htmlFor="driving-group-2"
                    className="block cursor-pointer font-semibold text-[var(--text-primary)]"
                  >
                    Groupe 2 — Lourds et professionnels
                  </label>
                  <p id="driving-group-2-desc" className="text-xs text-[var(--text-secondary)]">
                    Poids lourds, bus, taxi, VTC, ambulance (C, D, CE, DE)
                  </p>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Etat clinique : NYHA & FEVG */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="driving-nyha"
                className="block text-sm font-semibold text-[var(--text-primary)]"
              >
                Classe fonctionnelle NYHA
              </label>
              <select
                id="driving-nyha"
                value={currentInput.nyhaClass}
                onChange={(event) =>
                  updateInput({
                    nyhaClass: Number(event.target.value) as DrivingAssessmentInput['nyhaClass'],
                  })
                }
                className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
              >
                {NYHA_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.labelFr}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="driving-lvef"
                className="block text-sm font-semibold text-[var(--text-primary)]"
              >
                Dernière FEVG (%) — optionnelle
              </label>
              <input
                id="driving-lvef"
                type="number"
                min={5}
                max={85}
                step={1}
                placeholder="Ex. : 34"
                value={currentInput.lvefPercent ?? ''}
                onChange={(event) =>
                  updateInput({
                    lvefPercent: parseOptionalNonNegativeInt(event.target.value),
                  })
                }
                className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
              />
              <p className="text-xs text-[var(--text-secondary)]">
                Seuil réglementaire clé en groupe 2 : FEVG supérieure ou égale à 35 %.
              </p>
            </div>
          </div>

          {/* Dispositifs : LifeVest, DAI / CRT, choc recent */}
          <div className="space-y-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
              Dispositifs cardiaques
            </h4>

            <div className="touch-target flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3.5 py-2.5">
              <input
                id="driving-lifevest"
                type="checkbox"
                aria-describedby="driving-lifevest-desc"
                checked={currentInput.hasLifeVest}
                onChange={(event) => updateInput({ hasLifeVest: event.target.checked })}
                className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]"
              />
              <div className="text-sm">
                <label
                  htmlFor="driving-lifevest"
                  className="block cursor-pointer font-semibold text-[var(--text-primary)]"
                >
                  Port d&apos;un gilet défibrillateur portable (LifeVest)
                </label>
                <p id="driving-lifevest-desc" className="text-xs text-[var(--text-secondary)]">
                  Interdiction légale de conduire en France pendant toute la durée d&apos;indication
                  (Arrêté du 28 mars 2022, § 1.2.6).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="driving-device"
                  className="block text-sm font-semibold text-[var(--text-primary)]"
                >
                  Dispositif implanté (DAI / CRT)
                </label>
                <select
                  id="driving-device"
                  value={currentInput.device}
                  onChange={(event) =>
                    updateInput({
                      device: event.target.value as CardiacDeviceType,
                    })
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                >
                  {DEVICE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.labelFr}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="driving-shock"
                  className="block text-sm font-semibold text-[var(--text-primary)]"
                >
                  Choc récent du défibrillateur
                </label>
                <select
                  id="driving-shock"
                  value={currentInput.hadRecentShock ?? 'none'}
                  onChange={(event) =>
                    updateInput({
                      hadRecentShock: event.target.value as DrivingAssessmentInput['hadRecentShock'],
                    })
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                >
                  {SHOCK_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.labelFr}
                    </option>
                  ))}
                </select>
                {!hasIcdSelected && (
                  <p className="text-xs text-[var(--text-secondary)]">
                    Concerne les personnes porteuses d&apos;un DAI ou d&apos;un CRT-D.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Delais en jours depuis evenements */}
          <div className="space-y-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                Délais écoulés depuis un événement récent (en jours)
              </h4>
              <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                Laissez vide si vous n&apos;êtes pas concerné par l&apos;événement.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="driving-days-mi"
                  className="block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Jours depuis un infarctus du myocarde (IDM)
                </label>
                <input
                  id="driving-days-mi"
                  type="number"
                  min={0}
                  step={1}
                  placeholder="Vide si non concerné"
                  value={currentInput.daysSinceMi ?? ''}
                  onChange={(event) =>
                    updateInput({
                      daysSinceMi: parseOptionalNonNegativeInt(event.target.value),
                    })
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="driving-days-pci"
                  className="block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Jours depuis une angioplastie programmée (stent)
                </label>
                <input
                  id="driving-days-pci"
                  type="number"
                  min={0}
                  step={1}
                  placeholder="Vide si non concerné"
                  value={currentInput.daysSincePlannedPci ?? ''}
                  onChange={(event) =>
                    updateInput({
                      daysSincePlannedPci: parseOptionalNonNegativeInt(event.target.value),
                    })
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="driving-days-cabg"
                  className="block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Jours depuis un pontage aorto-coronarien
                </label>
                <input
                  id="driving-days-cabg"
                  type="number"
                  min={0}
                  step={1}
                  placeholder="Vide si non concerné"
                  value={currentInput.daysSinceCabg ?? ''}
                  onChange={(event) =>
                    updateInput({
                      daysSinceCabg: parseOptionalNonNegativeInt(event.target.value),
                    })
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="driving-days-icd"
                  className="block text-xs font-semibold text-[var(--text-primary)]"
                >
                  Jours depuis l&apos;implantation du DAI / CRT-D
                </label>
                <input
                  id="driving-days-icd"
                  type="number"
                  min={0}
                  step={1}
                  placeholder="Vide si non renseigné"
                  value={currentInput.daysSinceIcdImplant ?? ''}
                  onChange={(event) =>
                    updateInput({
                      daysSinceIcdImplant: parseOptionalNonNegativeInt(event.target.value),
                    })
                  }
                  className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                />
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}
