import { useCallback, useMemo } from 'react';
import { Car, ClipboardCheck, Landmark } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { FRENCH_ADMIN_CATALOG } from '../../content/fr';
import { upsertAdminProgress, useActiveDb, usePatientState } from '../../db';
import { evaluatePatientState } from '../../engine';
import type { FrenchAdminProgress } from '../../types';
import { Card, DisclaimerBanner } from '../../ui';
import { AdminChecklistTab } from './AdminChecklistTab';
import { DrivingCalculatorTab } from './DrivingCalculatorTab';
import { FranceAlertsSection } from './FranceAlertsSection';

type FranceTabId = 'checklists' | 'driving';

export function FrancePage() {
  const db = useActiveDb();
  const { state, isLoading } = usePatientState();
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get('tab');
  const activeTab: FranceTabId =
    tabParam === 'driving' || tabParam === 'permis' ? 'driving' : 'checklists';

  const setActiveTab = useCallback(
    (tab: FranceTabId) => {
      const next = new URLSearchParams(searchParams);
      if (tab === 'checklists') {
        next.delete('tab');
      } else {
        next.set('tab', 'driving');
      }
      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  const franceRules = useMemo(() => {
    if (!state) return [];
    const evaluation = evaluatePatientState(state);
    return evaluation.outputs.filter((rule) => rule.category === 'france');
  }, [state]);

  const handlePatchProgress = useCallback(
    async (
      itemId: FrenchAdminProgress['itemId'],
      patch: {
        status?: FrenchAdminProgress['status'];
        renewalDate?: string | null;
        notes?: string | null;
      },
    ) => {
      const existing = await db.adminProgress.get(itemId);
      const nextStatus = patch.status ?? existing?.status ?? 'todo';
      const nextRenewalDate =
        patch.renewalDate !== undefined ? (patch.renewalDate ?? undefined) : existing?.renewalDate;
      const nextNotes =
        patch.notes !== undefined ? (patch.notes ?? undefined) : existing?.notes;

      const merged: FrenchAdminProgress = {
        itemId,
        status: nextStatus,
        ...(nextRenewalDate ? { renewalDate: nextRenewalDate } : {}),
        ...(nextNotes && nextNotes.trim().length > 0 ? { notes: nextNotes } : {}),
      };

      await upsertAdminProgress(db, merged);
    },
    [db],
  );

  if (isLoading || !state) {
    return (
      <div className="space-y-4">
        <DisclaimerBanner variant="legal" />
        <Card title="Vie en France & Droits">
          <p
            role="status"
            aria-live="polite"
            className="text-sm text-[var(--text-secondary)]"
          >
            Chargement de vos démarches et repères administratifs en France...
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <div className="flex items-center gap-2.5">
          <Landmark className="h-6 w-6 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
          <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Vie en France &amp; Droits
          </h1>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          Suivez vos démarches administratives (ALD 5/13, réadaptation cardiaque en SMR, travail,
          emprunt, vaccinations) et simulez les règles françaises du permis de conduire.
        </p>
      </header>

      <DisclaimerBanner variant="legal" />

      <FranceAlertsSection
        rules={franceRules}
        onOpenDrivingCalculator={() => setActiveTab('driving')}
      />

      {/* Onglets principaux */}
      <div className="space-y-4">
        <div
          role="tablist"
          aria-label="Sections Vie en France et Droits"
          className="grid grid-cols-1 gap-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-1.5 sm:grid-cols-2"
        >
          <button
            id="france-tab-checklists"
            type="button"
            role="tab"
            aria-selected={activeTab === 'checklists'}
            aria-controls="france-panel-checklists"
            onClick={() => setActiveTab('checklists')}
            className={`touch-target inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === 'checklists'
                ? 'bg-[var(--bg-card)] text-[var(--color-primary)] shadow-xs border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <ClipboardCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Mes démarches en France</span>
            <span className="rounded-full bg-[var(--bg-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)] tabular-nums">
              {FRENCH_ADMIN_CATALOG.length}
            </span>
          </button>

          <button
            id="france-tab-driving"
            type="button"
            role="tab"
            aria-selected={activeTab === 'driving'}
            aria-controls="france-panel-driving"
            onClick={() => setActiveTab('driving')}
            className={`touch-target inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === 'driving'
                ? 'bg-[var(--bg-card)] text-[var(--color-primary)] shadow-xs border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Car className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Calculateur permis de conduire (France)</span>
          </button>
        </div>

        <div
          id="france-panel-checklists"
          role="tabpanel"
          aria-labelledby="france-tab-checklists"
          hidden={activeTab !== 'checklists'}
        >
          {activeTab === 'checklists' && (
            <AdminChecklistTab
              adminProgress={state.adminProgress}
              onPatchProgress={handlePatchProgress}
            />
          )}
        </div>

        <div
          id="france-panel-driving"
          role="tabpanel"
          aria-labelledby="france-tab-driving"
          hidden={activeTab !== 'driving'}
        >
          {activeTab === 'driving' && <DrivingCalculatorTab state={state} />}
        </div>
      </div>
    </div>
  );
}
