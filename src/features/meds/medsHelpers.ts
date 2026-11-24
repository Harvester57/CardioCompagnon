import { normalizeFrenchText, MEDICATION_REFERENCES } from '../../content/fr';
import type {
  InteractionItem,
  Medication,
  MedicationPillar,
  MedicationReference,
  MedicationSubClass,
  ScheduleSlot,
} from '../../types';

export type FoundationalPillarKey = 'raas_arni' | 'beta_blocker' | 'mra' | 'sglt2i';

export const FOUR_PILLAR_KEYS: readonly FoundationalPillarKey[] = [
  'raas_arni',
  'beta_blocker',
  'mra',
  'sglt2i',
];

export interface PillarMeta {
  key: MedicationPillar;
  shortLabelFr: string;
  labelFr: string;
  descriptionFr: string;
  group: 'four_pillars' | 'loop_diuretic' | 'secondary_prevention' | 'addons_other';
}

export const PILLAR_META: Record<MedicationPillar, PillarMeta> = {
  raas_arni: {
    key: 'raas_arni',
    shortLabelFr: 'IEC / ARA2 / ARNI',
    labelFr: 'Pilier 1 -- IEC, ARA2 ou ARNI',
    descriptionFr:
      'Sacubitril/valsartan (Entresto), IEC (ramipril, périndopril, énalapril, lisinopril) ou ARA2 si intolérance.',
    group: 'four_pillars',
  },
  beta_blocker: {
    key: 'beta_blocker',
    shortLabelFr: 'Bêtabloquant',
    labelFr: 'Pilier 2 -- Bêtabloquant',
    descriptionFr:
      'Bisoprolol (Cardensiel), carvédilol (Kredex), nébivolol (Temerit) ou métoprolol succinate (Selozok).',
    group: 'four_pillars',
  },
  mra: {
    key: 'mra',
    shortLabelFr: 'ARM',
    labelFr: 'Pilier 3 -- Antagoniste des récepteurs minéralocorticoïdes (ARM)',
    descriptionFr:
      'Spironolactone (Aldactone) ou éplérénone (Inspra) ; suivi régulier de la kaliémie et du DFGe.',
    group: 'four_pillars',
  },
  sglt2i: {
    key: 'sglt2i',
    shortLabelFr: 'iSGLT2',
    labelFr: 'Pilier 4 -- Inhibiteur du SGLT2 (gliflozine)',
    descriptionFr:
      'Dapagliflozine (Forxiga) ou empagliflozine (Jardiance) : dose de départ égale à la dose cible (10 mg/j).',
    group: 'four_pillars',
  },
  loop_diuretic: {
    key: 'loop_diuretic',
    shortLabelFr: "Diurétique de l'anse",
    labelFr: "Diurétique de l'anse",
    descriptionFr: 'Furosémide (Lasilix) ou bumétanide (Burinex) pour soulager la congestion.',
    group: 'loop_diuretic',
  },
  lipid_lowering: {
    key: 'lipid_lowering',
    shortLabelFr: 'Hypolipémiant',
    labelFr: 'Hypolipémiant (prévention coronaire)',
    descriptionFr: 'Statine, ézétimibe ou anti-PCSK9 (objectif coronaire LDL < 0,55 g/L et -50 %).',
    group: 'secondary_prevention',
  },
  antiplatelet: {
    key: 'antiplatelet',
    shortLabelFr: 'Antiagrégant',
    labelFr: 'Antiagrégant plaquettaire',
    descriptionFr: 'Aspirine faible dose (Kardégic) ou clopidogrel (Plavix).',
    group: 'secondary_prevention',
  },
  anticoagulant: {
    key: 'anticoagulant',
    shortLabelFr: 'Anticoagulant',
    labelFr: 'Anticoagulant oral',
    descriptionFr: 'AOD ou AVK en cas de fibrillation atriale ou de thrombus ventriculaire gauche.',
    group: 'secondary_prevention',
  },
  addon_hf: {
    key: 'addon_hf',
    shortLabelFr: 'Traitement additionnel IC',
    labelFr: 'Traitement additionnel ICFER',
    descriptionFr: 'Ivabradine, digoxine, vériciguat, fer IV ou chélateur de potassium.',
    group: 'addons_other',
  },
  other: {
    key: 'other',
    shortLabelFr: 'Autre traitement',
    labelFr: 'Autre médicament ou traitement associé',
    descriptionFr: 'Colchicine faible dose ou autre traitement de fond / ponctuel à déclarer.',
    group: 'addons_other',
  },
};

export const MEDICATION_GROUPS: readonly {
  id: PillarMeta['group'];
  titleFr: string;
  subtitleFr: string;
  pillars: readonly MedicationPillar[];
}[] = [
  {
    id: 'four_pillars',
    titleFr: 'Les 4 piliers du traitement de fond (ESC 2026)',
    subtitleFr: 'IEC/ARA2/ARNI, bêtabloquants, ARM et iSGLT2.',
    pillars: ['raas_arni', 'beta_blocker', 'mra', 'sglt2i'],
  },
  {
    id: 'loop_diuretic',
    titleFr: "Diurétiques de l'anse",
    subtitleFr: 'Gestion de la congestion et du poids sec.',
    pillars: ['loop_diuretic'],
  },
  {
    id: 'secondary_prevention',
    titleFr: 'Prévention secondaire coronaire & antithrombotiques',
    subtitleFr: 'Hypolipémiants, antiagrégants plaquettaires et anticoagulants.',
    pillars: ['lipid_lowering', 'antiplatelet', 'anticoagulant'],
  },
  {
    id: 'addons_other',
    titleFr: 'Traitements additionnels ICFER & autres traitements',
    subtitleFr: 'Ivabradine, digoxine, vériciguat, chélateurs de potassium, fer IV et autres médicaments.',
    pillars: ['addon_hf', 'other'],
  },
];

export const SUBCLASS_LABELS: Record<MedicationSubClass, string> = {
  ace_i: 'IEC',
  arb: 'ARA2',
  arni: 'ARNI',
  beta_blocker: 'Bêtabloquant',
  steroidal_mra: 'ARM stéroïdien',
  non_steroidal_mra: 'ARM non stéroïdien',
  sglt2i: 'iSGLT2',
  loop_diuretic: "Diurétique de l'anse",
  statin: 'Statine',
  ezetimibe: 'Ézétimibe',
  pcsk9: 'Anti-PCSK9',
  aspirin_p2y12: 'Aspirine / anti-P2Y12',
  colchicine: 'Colchicine',
  anticoagulant: 'Anticoagulant',
  ivabradine: 'Ivabradine',
  digoxin_digitoxin: 'Digoxine / digitoxine',
  vericiguat: 'Vériciguat',
  potassium_binder: 'Chélateur de potassium',
  other: 'Autre',
};

export const MEDICATION_STATUS_META: Record<
  Medication['status'],
  { labelFr: string; badgeClasses: string }
> = {
  at_target: {
    labelFr: 'À la dose cible',
    badgeClasses:
      'bg-[var(--status-stable-bg)] border-[var(--status-stable-border)] text-[var(--status-stable-text)]',
  },
  titrating: {
    labelFr: 'En cours de titration',
    badgeClasses:
      'bg-[var(--status-action-bg)] border-[var(--status-action-border)] text-[var(--status-action-text)]',
  },
  active: {
    labelFr: 'Actif',
    badgeClasses:
      'bg-[var(--status-stable-bg)] border-[var(--status-stable-border)] text-[var(--status-stable-text)]',
  },
  paused: {
    labelFr: 'Suspendu temporairement',
    badgeClasses:
      'bg-[var(--status-warning-bg)] border-[var(--status-warning-border)] text-[var(--status-warning-text)]',
  },
  stopped: {
    labelFr: 'Arrêté / non prescrit',
    badgeClasses:
      'bg-[var(--status-info-bg)] border-[var(--status-info-border)] text-[var(--status-info-text)]',
  },
};

export const SCHEDULE_SLOTS: readonly { key: ScheduleSlot; labelFr: string }[] = [
  { key: 'matin', labelFr: 'Matin' },
  { key: 'midi', labelFr: 'Midi' },
  { key: 'soir', labelFr: 'Soir' },
  { key: 'coucher', labelFr: 'Coucher' },
];

export const INTERACTION_VERDICT_META: Record<
  InteractionItem['verdict'],
  {
    labelFr: string;
    shortLabelFr: string;
    badgeClasses: string;
    cardTone: 'stable' | 'default' | 'subtle' | 'urgent';
  }
> = {
  worth_raising: {
    labelFr: "À aborder avec l'équipe",
    shortLabelFr: 'À aborder',
    badgeClasses:
      'bg-[var(--status-stable-bg)] border-[var(--status-stable-border)] text-[var(--status-stable-text)]',
    cardTone: 'stable',
  },
  possible: {
    labelFr: "Possible, à discuter d'abord",
    shortLabelFr: 'Possible',
    badgeClasses:
      'bg-[var(--status-action-bg)] border-[var(--status-action-border)] text-[var(--status-action-text)]',
    cardTone: 'default',
  },
  not_supported: {
    labelFr: 'Non étayé par les preuves',
    shortLabelFr: 'Non étayé',
    badgeClasses:
      'bg-[var(--status-info-bg)] border-[var(--status-info-border)] text-[var(--status-info-text)]',
    cardTone: 'subtle',
  },
  avoid: {
    labelFr: 'À éviter en automédication',
    shortLabelFr: 'À éviter',
    badgeClasses:
      'bg-[var(--status-urgent-bg)] border-[var(--status-urgent-border)] text-[var(--status-urgent-text)]',
    cardTone: 'urgent',
  },
};

export function isMedicationActive(med: Medication): boolean {
  return med.status === 'active' || med.status === 'titrating' || med.status === 'at_target';
}

export function formatIsoDateFr(isoDate?: string): string {
  if (!isoDate) {
    return '--';
  }
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) {
    return isoDate;
  }
  return `${match[3]}/${match[2]}/${match[1]}`;
}

export function clampPercent(value: number | undefined): number | undefined {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return undefined;
  }
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function findMedicationReference(
  med: Pick<Medication, 'innName' | 'frenchBrand' | 'pillar' | 'subClass'>,
): MedicationReference | undefined {
  const innNorm = normalizeFrenchText(med.innName);
  const brandNorm = med.frenchBrand ? normalizeFrenchText(med.frenchBrand) : '';

  if (innNorm) {
    const exactInn = MEDICATION_REFERENCES.find(
      (ref) => normalizeFrenchText(ref.innNameFr) === innNorm,
    );
    if (exactInn) {
      return exactInn;
    }

    const partialInn = MEDICATION_REFERENCES.find((ref) => {
      const refInn = normalizeFrenchText(ref.innNameFr);
      return refInn.includes(innNorm) || innNorm.includes(refInn);
    });
    if (partialInn) {
      return partialInn;
    }
  }

  if (brandNorm) {
    const byBrand = MEDICATION_REFERENCES.find((ref) =>
      ref.frenchBrands.some((brand) => {
        const refBrandNorm = normalizeFrenchText(brand);
        return (
          refBrandNorm !== 'generiques' &&
          (refBrandNorm === brandNorm ||
            refBrandNorm.includes(brandNorm) ||
            brandNorm.includes(refBrandNorm))
        );
      }),
    );
    if (byBrand) {
      return byBrand;
    }
  }

  return undefined;
}

export function getActivePillars(medications: readonly Medication[]): Set<MedicationPillar> {
  const set = new Set<MedicationPillar>();
  for (const med of medications) {
    if (isMedicationActive(med)) {
      set.add(med.pillar);
    }
  }
  return set;
}

export function getActiveMedicationsByPillar(
  medications: readonly Medication[],
): Map<MedicationPillar, Medication[]> {
  const map = new Map<MedicationPillar, Medication[]>();
  for (const med of medications) {
    if (!isMedicationActive(med)) continue;
    const list = map.get(med.pillar) ?? [];
    list.push(med);
    map.set(med.pillar, list);
  }
  return map;
}

export interface PillarDashboardSummary {
  pillar: FoundationalPillarKey;
  activeMeds: Medication[];
  documentedReasonMed?: Medication;
  inactiveMeds: Medication[];
  state: 'at_target' | 'titrating' | 'active' | 'documented_not_prescribed' | 'missing';
}

export function getPillarDashboardSummary(
  pillar: FoundationalPillarKey,
  medications: readonly Medication[],
): PillarDashboardSummary {
  const medsForPillar = medications.filter((m) => m.pillar === pillar);
  const activeMeds = medsForPillar.filter(isMedicationActive);
  const inactiveMeds = medsForPillar.filter((m) => !isMedicationActive(m));
  const documentedReasonMed = medsForPillar.find(
    (m) => typeof m.notPrescribedReason === 'string' && m.notPrescribedReason.trim().length > 0,
  );

  if (activeMeds.length > 0) {
    if (activeMeds.some((m) => m.status === 'at_target')) {
      return { pillar, activeMeds, documentedReasonMed, inactiveMeds, state: 'at_target' };
    }
    if (activeMeds.some((m) => m.status === 'titrating')) {
      return { pillar, activeMeds, documentedReasonMed, inactiveMeds, state: 'titrating' };
    }
    return { pillar, activeMeds, documentedReasonMed, inactiveMeds, state: 'active' };
  }

  if (documentedReasonMed) {
    return {
      pillar,
      activeMeds,
      documentedReasonMed,
      inactiveMeds,
      state: 'documented_not_prescribed',
    };
  }

  return { pillar, activeMeds, documentedReasonMed, inactiveMeds, state: 'missing' };
}

export interface InteractionFilterOptions {
  query: string;
  verdict: InteractionItem['verdict'] | 'all';
  onlyActiveMeds: boolean;
  activePillars: Set<MedicationPillar>;
}

export function filterInteractions(
  items: readonly InteractionItem[],
  options: InteractionFilterOptions,
): InteractionItem[] {
  const normalizedQuery = normalizeFrenchText(options.query);
  const tokens = normalizedQuery ? normalizedQuery.split(/\s+/).filter(Boolean) : [];

  return items.filter((item) => {
    if (options.verdict !== 'all' && item.verdict !== options.verdict) {
      return false;
    }

    if (options.onlyActiveMeds) {
      const touchesActive = item.affectedPillars.some((pillar) => options.activePillars.has(pillar));
      if (!touchesActive) {
        return false;
      }
    }

    if (tokens.length > 0) {
      const searchable = normalizeFrenchText(
        [
          item.nameFr,
          ...item.aliases,
          item.summaryFr,
          item.mechanismOrCaveatFr,
          ...item.sources,
        ].join(' '),
      );
      if (!tokens.every((token) => searchable.includes(token))) {
        return false;
      }
    }

    return true;
  });
}

export function formatMedicationDisplayName(med: Pick<Medication, 'innName' | 'frenchBrand'>): string {
  return med.frenchBrand ? `${med.innName} (${med.frenchBrand})` : med.innName;
}
