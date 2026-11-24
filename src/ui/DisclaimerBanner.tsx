import { Info, Scale } from 'lucide-react';

export interface DisclaimerBannerProps {
  variant: 'medical' | 'legal';
  compact?: boolean;
  className?: string;
}

export function DisclaimerBanner({
  variant,
  compact = false,
  className = '',
}: DisclaimerBannerProps) {
  const isMedical = variant === 'medical';

  return (
    <aside
      role="note"
      aria-label={isMedical ? 'Avertissement médical' : 'Avertissement réglementaire'}
      className={`flex items-start gap-3 rounded-xl border border-[var(--status-info-border)] bg-[var(--status-info-bg)] text-[var(--status-info-text)] ${
        compact ? 'px-3.5 py-2.5 text-xs' : 'px-4 py-3 text-sm'
      } ${className}`.trim()}
    >
      {isMedical ? (
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
      ) : (
        <Scale className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
      )}
      <p className="m-0 leading-relaxed">
        {isMedical ? (
          <>
            <strong className="font-semibold text-[var(--text-primary)]">
              Information et suivi personnel :
            </strong>{' '}
            cet outil ne pose pas de diagnostic, ne remplace pas une consultation et ne vous invite
            jamais à arrêter ni modifier une dose de médicament sans l&apos;avis de votre
            cardiologue ou de votre médecin traitant. En cas de signe d&apos;alarme, appelez le{' '}
            <strong className="font-semibold text-[var(--text-primary)]">15 (SAMU)</strong> ou le{' '}
            <strong className="font-semibold text-[var(--text-primary)]">112</strong> (ou{' '}
            <strong className="font-semibold text-[var(--text-primary)]">114</strong> par SMS).
          </>
        ) : (
          <>
            <strong className="font-semibold text-[var(--text-primary)]">
              Repères administratifs France (indicatifs) :
            </strong>{' '}
            ces informations synthétisent les textes officiels en vigueur à la date indiquée (Ameli,
            HAS, Service-Public, Arrêté du 28 mars 2022). Vérifiez toujours votre situation
            individuelle auprès de votre CPAM, de votre médecin traitant, du médecin du travail ou
            d&apos;un médecin agréé.
          </>
        )}
      </p>
    </aside>
  );
}
