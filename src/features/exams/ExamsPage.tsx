import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Activity, FlaskConical, HeartPulse, Sparkles, Stethoscope } from 'lucide-react';
import { usePatientState } from '../../db';
import { evaluatePatientState } from '../../engine';
import type { ExtractionProposal } from '../../types';
import { Card, DisclaimerBanner } from '../../ui';
import { AiImportModal } from './AiImportModal';
import { BiologyTab } from './BiologyTab';
import { EcgSleepTab } from './EcgSleepTab';
import { ExamAlertsHeader } from './ExamAlertsHeader';
import { ImagingTab } from './ImagingTab';

type ExamsTabKey = 'imaging' | 'biology' | 'ecg_sleep';

const TABS: {
  id: ExamsTabKey;
  label: string;
  icon: typeof HeartPulse;
}[] = [
  { id: 'imaging', label: 'Imagerie cardiaque (ETT / IRM)', icon: HeartPulse },
  { id: 'biology', label: 'Biologie', icon: FlaskConical },
  { id: 'ecg_sleep', label: 'ECG & Sommeil', icon: Activity },
];

function resolveInitialTab(param: string | null): ExamsTabKey {
  if (param === 'biology' || param === 'ecg_sleep' || param === 'imaging') {
    return param;
  }
  return 'imaging';
}

export function ExamsPage() {
  const { state, isLoading } = usePatientState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<ExamsTabKey>(() =>
    resolveInitialTab(searchParams.get('tab')),
  );
  const [aiModalOpen, setAiModalOpen] = useState(false);

  const evaluation = useMemo(
    () => (state ? evaluatePatientState(state) : null),
    [state],
  );

  function selectTab(tab: ExamsTabKey) {
    setActiveTab(tab);
    setSearchParams({ tab }, { replace: true });
  }

  function handleAiSaved(kind: ExtractionProposal['kind']) {
    if (kind === 'lab') {
      selectTab('biology');
    } else if (kind === 'imaging') {
      selectTab('imaging');
    }
  }

  return (
    <div className="space-y-5">
      <DisclaimerBanner variant="medical" />

      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-xl bg-[var(--color-primary-soft)] p-2.5 text-[var(--color-primary)]">
            <Stethoscope className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
              Examens &amp; Chiffres
            </h1>
            <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
              Suivez votre imagerie cardiaque (ETT et IRM strictement séparées), vos bilans
              biologiques, vos ECG et vos examens du sommeil.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setAiModalOpen(true)}
          className="touch-target inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary)] bg-[var(--bg-card)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
        >
          <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Import assisté par IA (optionnel)</span>
        </button>
      </header>

      {isLoading || !state || !evaluation ? (
        <Card title="Chargement de vos examens...">
          <p className="text-sm text-[var(--text-secondary)]">
            Lecture sécurisée de vos données locales en cours.
          </p>
        </Card>
      ) : (
        <>
          <ExamAlertsHeader evaluation={evaluation} />

          {/* Barre d'onglets accessible */}
          <div
            role="tablist"
            aria-label="Catégories d'examens"
            className="flex flex-wrap gap-2 border-b border-[var(--border-subtle)] pb-2"
          >
            {TABS.map(({ id, label, icon: Icon }) => {
              const isSelected = activeTab === id;
              return (
                <button
                  key={id}
                  id={`tab-${id}`}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`panel-${id}`}
                  onClick={() => selectTab(id)}
                  className={`touch-target inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    isSelected
                      ? 'bg-[var(--color-primary)] text-white shadow-xs'
                      : 'border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          <div
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
          >
            {activeTab === 'imaging' && (
              <ImagingTab imaging={state.imaging} profile={state.profile} />
            )}
            {activeTab === 'biology' && (
              <BiologyTab
                labs={state.labs}
                profile={state.profile}
                medications={state.medications}
              />
            )}
            {activeTab === 'ecg_sleep' && <EcgSleepTab events={state.events} />}
          </div>
        </>
      )}

      <AiImportModal
        open={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onSaved={handleAiSaved}
      />
    </div>
  );
}
