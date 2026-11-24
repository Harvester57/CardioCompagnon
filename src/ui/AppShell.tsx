import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Activity,
  BookOpen,
  ClipboardList,
  FlaskConical,
  HeartPulse,
  Landmark,
  PhoneCall,
  Pill,
  Settings,
  Stethoscope,
} from 'lucide-react';
import { useDemoMode } from '../db';

export interface AppShellProps {
  children: ReactNode;
}

interface NavItem {
  to: string;
  label: string;
  shortLabel: string;
  icon: typeof Activity;
  end?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: "Aujourd'hui", shortLabel: 'Suivi', icon: Activity, end: true },
  { to: '/meds', label: 'Traitements & Sécurité', shortLabel: 'Traitements', icon: Pill },
  { to: '/exams', label: 'Examens & Chiffres', shortLabel: 'Examens', icon: Stethoscope },
  { to: '/plan', label: 'Mon Plan & Visites', shortLabel: 'Plan', icon: ClipboardList },
  { to: '/france', label: 'Vie en France & Droits', shortLabel: 'France', icon: Landmark },
  { to: '/library', label: 'Bibliothèque', shortLabel: 'Savoirs', icon: BookOpen },
  { to: '/settings', label: 'Paramètres & Profil', shortLabel: 'Réglages', icon: Settings },
];

export function AppShell({ children }: AppShellProps) {
  const { isDemoMode, setDemoMode } = useDemoMode();

  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)]">
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu principal
      </a>

      {isDemoMode && (
        <div
          data-demo-banner
          role="status"
          className="no-print sticky top-0 z-40 border-b border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] px-4 py-2 text-sm text-[var(--status-warning-text)]"
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 font-medium">
              <FlaskConical className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                Mode découverte actif — données fictives isolées de votre profil personnel.
              </span>
            </div>
            <button
              type="button"
              onClick={() => void setDemoMode(false)}
              className="touch-target inline-flex items-center rounded-lg border border-[var(--status-warning-border)] bg-[var(--bg-card)] px-3 py-1 text-xs font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
            >
              Quitter le mode découverte
            </button>
          </div>
        </div>
      )}

      <header
        data-app-header
        className="no-print sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] lg:hidden"
      >
        <div className="flex h-14 items-center justify-between gap-2 px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold text-[var(--color-primary)]">
            <HeartPulse className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span className="truncate text-base">CardioCompagnon</span>
          </Link>
          <Link
            to="/plan?tab=urgence"
            className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3 py-2 text-xs font-semibold text-[var(--status-urgent-text)]"
          >
            <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Urgence / 15</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        <aside
          data-app-sidebar
          aria-label="Navigation principale"
          className="no-print hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:shrink-0 lg:flex-col lg:border-r lg:border-[var(--border-subtle)] lg:bg-[var(--bg-card)] lg:p-4"
        >
          <Link
            to="/"
            className="mb-5 flex items-center gap-2.5 rounded-xl px-2 py-2 font-semibold text-[var(--color-primary)]"
          >
            <HeartPulse className="h-7 w-7 shrink-0" aria-hidden="true" />
            <span className="truncate text-base">CardioCompagnon</span>
          </Link>

          <Link
            to="/plan?tab=urgence"
            className="touch-target mb-5 flex items-center justify-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-4 py-2.5 text-sm font-semibold text-[var(--status-urgent-text)] transition-opacity hover:opacity-90"
          >
            <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Urgence / 15</span>
          </Link>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Modules">
            {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `touch-target flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                  }`
                }
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <p className="mt-4 border-t border-[var(--border-subtle)] pt-3 text-xs leading-relaxed text-[var(--text-secondary)]">
            Données stockées exclusivement sur votre appareil. Outil non médical.
          </p>
        </aside>

        <main
          id="contenu-principal"
          className="min-w-0 flex-1 px-4 pb-24 pt-5 sm:px-6 lg:px-8 lg:pb-10 lg:pt-7"
        >
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>

      <nav
        data-app-nav
        aria-label="Navigation mobile"
        className="no-print fixed bottom-0 left-0 right-0 z-30 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] lg:hidden"
      >
        <ul className="m-0 grid list-none grid-cols-7 p-0">
          {NAV_ITEMS.map(({ to, shortLabel, label, icon: Icon, end }) => (
            <li key={to} className="min-w-0">
              <NavLink
                to={to}
                end={end}
                aria-label={label}
                className={({ isActive }) =>
                  `touch-target flex flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-[11px] font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--color-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`
                }
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="max-w-full truncate">{shortLabel}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
