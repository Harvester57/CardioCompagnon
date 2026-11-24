import { Settings } from 'lucide-react';
import { DisclaimerBanner } from '../../ui';
import { AiHelperSection } from './AiHelperSection';
import { BackupRestoreSection } from './BackupRestoreSection';
import { DemoModeSection } from './DemoModeSection';
import { DisplayPreferencesSection } from './DisplayPreferencesSection';
import { PinLockSection } from './PinLockSection';
import { ProfileSection } from './ProfileSection';

const QUICK_SECTIONS = [
  { id: 'section-profil', label: 'Profil & Modules' },
  { id: 'section-demo', label: 'Mode découverte' },
  { id: 'section-sauvegarde', label: 'Sauvegarde' },
  { id: 'section-pin', label: 'Code PIN' },
  { id: 'section-affichage', label: 'Affichage' },
  { id: 'section-ia', label: 'Assistant IA' },
] as const;

export function SettingsPage() {
  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex items-start gap-3">
          <span
            className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
            aria-hidden="true"
          >
            <Settings className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
              Paramètres &amp; Profil
            </h1>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Personnalisez votre profil clinique, activez le mode découverte, gérez vos
              sauvegardes locales et réglez vos préférences d&apos;accessibilité.
            </p>
          </div>
        </div>

        <nav aria-label="Accès rapide aux sections des paramètres" className="no-print">
          <ul className="m-0 flex flex-wrap gap-2 list-none p-0">
            {QUICK_SECTIONS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="inline-flex min-h-[36px] cursor-pointer items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <DisclaimerBanner variant="medical" compact />
      </header>

      <div id="section-profil" className="scroll-mt-6">
        <ProfileSection />
      </div>

      <div id="section-demo" className="scroll-mt-6">
        <DemoModeSection />
      </div>

      <div id="section-sauvegarde" className="scroll-mt-6">
        <BackupRestoreSection />
      </div>

      <div id="section-pin" className="scroll-mt-6">
        <PinLockSection />
      </div>

      <div id="section-affichage" className="scroll-mt-6">
        <DisplayPreferencesSection />
      </div>

      <div id="section-ia" className="scroll-mt-6">
        <AiHelperSection />
      </div>
    </div>
  );
}
