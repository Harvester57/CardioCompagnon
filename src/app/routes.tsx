import { Component, Suspense, lazy, type ErrorInfo, type ReactNode } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell, Card } from '../ui';
import { BackupReminderBanner } from './BackupReminderBanner';
import { NotificationScheduler } from './NotificationScheduler';

const TodayPage = lazy(() => import('../features/today'));
const MedsPage = lazy(() => import('../features/meds'));
const ExamsPage = lazy(() => import('../features/exams'));
const PlanPage = lazy(() => import('../features/plan'));
const FrancePage = lazy(() => import('../features/france'));
const LibraryPage = lazy(() => import('../features/library'));
const SettingsPage = lazy(() => import('../features/settings'));

interface ErrorBoundaryState {
  hasError: boolean;
}

class RouteErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Erreur interceptée par la frontière de route
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card
          tone="warning"
          title="Un module n'a pas pu s'afficher"
          subtitle="Rechargez la page ou revenez à l'écran d'accueil."
        >
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="touch-target rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)]"
          >
            Réessayer
          </button>
        </Card>
      );
    }
    return this.props.children;
  }
}

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-40 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 text-sm text-[var(--text-secondary)]"
    >
      Chargement du module en cours…
    </div>
  );
}

export function AppRoutes() {
  return (
    <HashRouter>
      <AppShell>
        <NotificationScheduler />
        <BackupReminderBanner />
        <RouteErrorBoundary>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<TodayPage />} />
              <Route path="/meds" element={<MedsPage />} />
              <Route path="/exams" element={<ExamsPage />} />
              <Route path="/plan" element={<PlanPage />} />
              <Route path="/france" element={<FrancePage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </AppShell>
    </HashRouter>
  );
}
