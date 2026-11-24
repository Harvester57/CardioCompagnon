import type {
  CardiacDeviceType,
  DrivingAssessmentInput,
  DrivingAssessmentResult,
  FrenchAdminCatalogItem,
  FrenchAdminProgress,
  PatientState,
} from '../../types';
import type { CardTone } from '../../ui';

export type AdminCategoryFilter = 'all' | FrenchAdminCatalogItem['category'];
export type AdminStatus = FrenchAdminProgress['status'];

export interface AdminCategoryOption {
  value: AdminCategoryFilter;
  labelFr: string;
}

export const ADMIN_CATEGORY_OPTIONS: readonly AdminCategoryOption[] = [
  { value: 'all', labelFr: 'Toutes' },
  { value: 'couverture', labelFr: 'Couverture (ALD)' },
  { value: 'parcours_soins', labelFr: 'Parcours de soins' },
  { value: 'travail', labelFr: 'Travail & maintien' },
  { value: 'emprunt', labelFr: 'Emprunt' },
  { value: 'conduite', labelFr: 'Conduite' },
  { value: 'prevention', labelFr: 'Prévention' },
];

export const ADMIN_CATEGORY_LABELS: Record<FrenchAdminCatalogItem['category'], string> = {
  couverture: 'Couverture (ALD)',
  parcours_soins: 'Parcours de soins',
  travail: 'Travail & maintien',
  emprunt: 'Emprunt',
  conduite: 'Conduite',
  prevention: 'Prévention',
};

export interface AdminStatusMeta {
  value: AdminStatus;
  labelFr: string;
  badgeClasses: string;
}

export const ADMIN_STATUS_OPTIONS: readonly AdminStatusMeta[] = [
  {
    value: 'todo',
    labelFr: 'À faire',
    badgeClasses:
      'bg-[var(--status-info-bg)] border-[var(--status-info-border)] text-[var(--status-info-text)]',
  },
  {
    value: 'in_progress',
    labelFr: 'En cours',
    badgeClasses:
      'bg-[var(--status-warning-bg)] border-[var(--status-warning-border)] text-[var(--status-warning-text)]',
  },
  {
    value: 'done',
    labelFr: 'Obtenu',
    badgeClasses:
      'bg-[var(--status-stable-bg)] border-[var(--status-stable-border)] text-[var(--status-stable-text)]',
  },
  {
    value: 'not_applicable',
    labelFr: 'Non concerné',
    badgeClasses:
      'bg-[var(--bg-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)]',
  },
];

export function getAdminStatusMeta(status: AdminStatus): AdminStatusMeta {
  return (
    ADMIN_STATUS_OPTIONS.find((option) => option.value === status) ?? ADMIN_STATUS_OPTIONS[0]
  );
}

export interface AdminProgressStats {
  total: number;
  done: number;
  inProgress: number;
  todo: number;
  notApplicable: number;
  applicableTotal: number;
  completionPercent: number;
}

export function computeAdminProgressStats(
  catalog: readonly FrenchAdminCatalogItem[],
  progressList: readonly FrenchAdminProgress[],
): AdminProgressStats {
  const byId = new Map<FrenchAdminProgress['itemId'], FrenchAdminProgress>(
    progressList.map((entry) => [entry.itemId, entry]),
  );

  let done = 0;
  let inProgress = 0;
  let todo = 0;
  let notApplicable = 0;

  for (const item of catalog) {
    const status = byId.get(item.id)?.status ?? 'todo';
    if (status === 'done') done += 1;
    else if (status === 'in_progress') inProgress += 1;
    else if (status === 'not_applicable') notApplicable += 1;
    else todo += 1;
  }

  const applicableTotal = catalog.length - notApplicable;
  const completionPercent =
    applicableTotal > 0 ? Math.round((done / applicableTotal) * 100) : 100;

  return {
    total: catalog.length,
    done,
    inProgress,
    todo,
    notApplicable,
    applicableTotal,
    completionPercent,
  };
}

const MS_PER_DAY = 86_400_000;

function parseIsoDateUtcMs(isoDate: string): number {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) {
    return Number.NaN;
  }
  return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function daysSinceIsoDate(earlierDate: string, referenceDate: string): number | undefined {
  const start = parseIsoDateUtcMs(earlierDate);
  const end = parseIsoDateUtcMs(referenceDate);
  if (Number.isNaN(start) || Number.isNaN(end)) {
    return undefined;
  }
  const diff = Math.round((end - start) / MS_PER_DAY);
  return diff >= 0 ? diff : undefined;
}

export function formatIsoDateFr(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) {
    return isoDate;
  }
  return `${match[3]}/${match[2]}/${match[1]}`;
}

export function deriveDrivingInputFromState(state: PatientState): DrivingAssessmentInput {
  const { profile, imaging, events, referenceDate } = state;

  const group: DrivingAssessmentInput['group'] =
    profile.drivingGroup === 'group2' ? 'group2' : 'group1';

  const nyhaClass: DrivingAssessmentInput['nyhaClass'] =
    profile.nyhaClass ?? (profile.hfStage === 'B' ? 1 : 2);

  // Derniere FEVG valide a ou avant la date de reference
  let latestLvef: number | undefined;
  let latestLvefMs = Number.NEGATIVE_INFINITY;
  for (const exam of imaging) {
    if (typeof exam.lvefPercent !== 'number' || Number.isNaN(exam.lvefPercent)) {
      continue;
    }
    const diff = daysSinceIsoDate(exam.date, referenceDate);
    if (diff === undefined) continue;
    const examMs = parseIsoDateUtcMs(exam.date);
    if (examMs >= latestLvefMs) {
      latestLvefMs = examMs;
      latestLvef = exam.lvefPercent;
    }
  }

  function findDaysSinceLatestEvent(
    type: PatientState['events'][number]['type'],
  ): number | undefined {
    let minDays: number | undefined;
    for (const ev of events) {
      if (ev.type !== type) continue;
      const diff = daysSinceIsoDate(ev.date, referenceDate);
      if (diff === undefined) continue;
      if (minDays === undefined || diff < minDays) {
        minDays = diff;
      }
    }
    return minDays;
  }

  const daysSinceMi = findDaysSinceLatestEvent('mi');
  const daysSincePlannedPci = findDaysSinceLatestEvent('pci_stent');
  const daysSinceCabg = findDaysSinceLatestEvent('cabg');
  const daysSinceIcdImplant = findDaysSinceLatestEvent('icd_implant');

  // Choc recent dans les 84 derniers jours (12 semaines, aligne sur driving.rules.ts)
  let hadRecentShock: DrivingAssessmentInput['hadRecentShock'] = 'none';
  let latestShockDays = Number.POSITIVE_INFINITY;
  for (const ev of events) {
    if (ev.type !== 'icd_shock_appropriate' && ev.type !== 'icd_shock_inappropriate') {
      continue;
    }
    const diff = daysSinceIsoDate(ev.date, referenceDate);
    if (diff === undefined || diff > 84) continue;
    if (diff < latestShockDays) {
      latestShockDays = diff;
      hadRecentShock = ev.type === 'icd_shock_appropriate' ? 'appropriate' : 'inappropriate';
    }
  }

  return {
    group,
    nyhaClass,
    ...(latestLvef !== undefined ? { lvefPercent: latestLvef } : {}),
    hasLifeVest: profile.modules.lifeVest,
    device: profile.modules.device,
    ...(daysSinceMi !== undefined ? { daysSinceMi } : {}),
    ...(daysSincePlannedPci !== undefined ? { daysSincePlannedPci } : {}),
    ...(daysSinceCabg !== undefined ? { daysSinceCabg } : {}),
    ...(daysSinceIcdImplant !== undefined ? { daysSinceIcdImplant } : {}),
    hadRecentShock,
  };
}

export const DEVICE_OPTIONS: readonly { value: CardiacDeviceType; labelFr: string }[] = [
  { value: 'none', labelFr: 'Aucun dispositif implanté' },
  { value: 'icd_primary', labelFr: 'DAI — prévention primaire' },
  { value: 'icd_secondary', labelFr: 'DAI — prévention secondaire' },
  { value: 'crt_p', labelFr: 'Resynchronisation sans défibrillateur (CRT-P)' },
  { value: 'crt_d', labelFr: 'Resynchronisation avec défibrillateur (CRT-D)' },
];

export const NYHA_OPTIONS: readonly {
  value: 1 | 2 | 3 | 4;
  labelFr: string;
}[] = [
  { value: 1, labelFr: 'NYHA I — Aucune limitation aux activités courantes' },
  { value: 2, labelFr: 'NYHA II — Essoufflement aux efforts importants ou modérés' },
  { value: 3, labelFr: 'NYHA III — Essoufflement marqué aux efforts usuels' },
  { value: 4, labelFr: 'NYHA IV — Symptômes au repos ou au moindre effort' },
];

export const SHOCK_OPTIONS: readonly {
  value: NonNullable<DrivingAssessmentInput['hadRecentShock']>;
  labelFr: string;
}[] = [
  { value: 'none', labelFr: 'Aucun choc récent' },
  { value: 'appropriate', labelFr: 'Choc approprié récent' },
  { value: 'inappropriate', labelFr: 'Choc inapproprié récent' },
];

export interface DrivingStatusStyle {
  tone: CardTone;
  badgeLabelFr: string;
  badgeClasses: string;
}

export function getDrivingStatusStyle(
  status: DrivingAssessmentResult['status'],
): DrivingStatusStyle {
  switch (status) {
    case 'compatible_after_clearance':
      return {
        tone: 'stable',
        badgeLabelFr: 'Compatible après avis médical',
        badgeClasses:
          'bg-[var(--status-stable-bg)] border-[var(--status-stable-border)] text-[var(--status-stable-text)]',
      };
    case 'specialist_assessment_required':
      return {
        tone: 'warning',
        badgeLabelFr: 'Avis spécialisé requis',
        badgeClasses:
          'bg-[var(--status-action-bg)] border-[var(--status-action-border)] text-[var(--status-action-text)]',
      };
    case 'temporarily_incompatible':
      return {
        tone: 'warning',
        badgeLabelFr: 'Incompatibilité temporaire',
        badgeClasses:
          'bg-[var(--status-warning-bg)] border-[var(--status-warning-border)] text-[var(--status-warning-text)]',
      };
    case 'permanently_incompatible':
      return {
        tone: 'urgent',
        badgeLabelFr: 'Incompatibilité permanente',
        badgeClasses:
          'bg-[var(--status-urgent-bg)] border-[var(--status-urgent-border)] text-[var(--status-urgent-text)]',
      };
  }
}
