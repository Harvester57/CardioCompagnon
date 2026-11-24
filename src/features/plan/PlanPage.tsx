import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ClipboardList, FileText, PhoneCall, Sparkles } from 'lucide-react';
import { usePatientState, useQuestionTracking } from '../../db';
import { evaluatePatientState } from '../../engine';
import { Card, DisclaimerBanner } from '../../ui';
import { ConsultationPrepTab } from './ConsultationPrepTab';
import { EmergencyCardTab } from './EmergencyCardTab';
import { LivingPlanTab } from './LivingPlanTab';
import { SummarySheetA4Tab } from './SummarySheetA4Tab';
import { parsePlanTab, type PlanTabId } from './plan-helpers';

interface TabDefinition {
  id: PlanTabId;
  label: string;
  shortLabel: string;
  icon: typeof Sparkles;
  urgentStyle?: boolean;
}

const TABS: readonly TabDefinition[] = [
  { id: 'plan', label: 'Mon Plan vivant', shortLabel: 'Plan vivant', icon: Sparkles },
  {
    id: 'consult',
    label: 'Préparer ma consultation',
    shortLabel: 'Consultation',
    icon: ClipboardList,
  },
  {
    id: 'synthese',
    label: 'Fiche de synthèse A4',
    shortLabel: 'Synthèse A4',
    icon: FileText,
  },
  {
    id: 'urgence',
    label: 'Carte de suivi / Urgence',
    shortLabel: 'Urgence / 15',
    icon: PhoneCall,
    urgentStyle: true,
  },
];

export function PlanPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = parsePlanTab(searchParams.get('tab'));

  const { state, isLoading } = usePatientState();
  const trackingList = useQuestionTracking();

  const evaluation = useMemo(
    () => (state ? evaluatePatientState(state) : null),
    [state],
  );

  const handleSelectTab = useCallback(
    (nextTab: PlanTabId) => {
      setSearchParams({ tab: nextTab });
    },
    [setSearchParams],
  );

  return (
    <div className="space-y-4">
      <header className="no-print space-y-1">
        <h1 className="m-0 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
          Mon Plan &amp; Consultations
        </h1>
        <p className="m-0 text-sm text-[var(--text-secondary)]">
          Suivez vos priorités personnalisées, préparez vos questions, imprimez votre fiche A4 et
          gardez votre carte d&apos;urgence hors ligne à portée de main.
        </p>
      </header>

      <DisclaimerBanner variant="medical" />

      <div
        role="tablist"
        aria-label="Sections de Mon Plan et Consultations"
        className="no-print grid grid-cols-2 gap-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-1.5 sm:grid-cols-4"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          const activeClasses = tab.urgentStyle
            ? 'bg-[var(--status-urgent-text)] text-white shadow-xs'
            : 'bg-[var(--color-primary)] text-white shadow-xs';

          const inactiveClasses = tab.urgentStyle
            ? 'text-[var(--status-urgent-text)] hover:bg-[var(--status-urgent-bg)]'
            : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]';

          return (
            <button
              key={tab.id}
              id={`plan-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`plan-panel-${tab.id}`}
              onClick={() => handleSelectTab(tab.id)}
              className={`touch-target flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-center text-xs font-semibold transition-colors sm:text-sm ${
                isActive ? activeClasses : inactiveClasses
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate sm:hidden">{tab.shortLabel}</span>
              <span className="hidden truncate sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {isLoading || !state || !evaluation ? (
        <Card>
          <p role="status" aria-live="polite" className="m-0 text-sm text-[var(--text-secondary)]">
            Chargement de votre plan de suivi...
          </p>
        </Card>
      ) : (
        <div
          id={`plan-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`plan-tab-${activeTab}`}
        >
          {activeTab === 'plan' && (
            <LivingPlanTab
              evaluation={evaluation}
              referenceDate={state.referenceDate}
              onSelectTab={handleSelectTab}
            />
          )}

          {activeTab === 'consult' && (
            <ConsultationPrepTab
              profile={state.profile}
              evaluation={evaluation}
              trackingList={trackingList}
              onSelectTab={handleSelectTab}
            />
          )}

          {activeTab === 'synthese' && (
            <SummarySheetA4Tab
              state={state}
              evaluation={evaluation}
              trackingList={trackingList}
              onSelectTab={handleSelectTab}
            />
          )}

          {activeTab === 'urgence' && <EmergencyCardTab state={state} />}
        </div>
      )}
    </div>
  );
}

export default PlanPage;
