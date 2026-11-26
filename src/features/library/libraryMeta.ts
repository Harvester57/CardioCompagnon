import { normalizeFrenchText } from '../../content/fr';
import type {
  ArticleCategory,
  ArticleReadingTier,
  ClinicalModuleKey,
  GlossaryTerm,
  PatientProfile,
  WikiArticle,
} from '../../types';

export type LinkedModuleKey = ClinicalModuleKey | 'core' | 'stageB';
export type SpecificProfileModuleKey = ClinicalModuleKey | 'stageB';

export interface ReadingTierMeta {
  id: ArticleReadingTier;
  labelFr: string;
  shortLabelFr: string;
  descriptionFr: string;
}

export const READING_TIERS: readonly ReadingTierMeta[] = [
  {
    id: 'essential',
    labelFr: "L'essentiel",
    shortLabelFr: 'Essentiel',
    descriptionFr:
      'Les repères clés en langage clair pour comprendre le diagnostic, les traitements et le quotidien en France.',
  },
  {
    id: 'deep_dive',
    labelFr: 'Approfondir',
    shortLabelFr: 'Approfondir',
    descriptionFr:
      'Fiches détaillées sur des situations spécifiques, dispositifs, comorbidités et compléments.',
  },
  {
    id: 'reference',
    labelFr: 'Études & références',
    shortLabelFr: 'Étude & référence',
    descriptionFr:
      'Synthèses d’essais cliniques, thèses de recherche et comparaisons internationales de recommandations.',
  },
] as const;

export const READING_TIER_LABELS: Record<ArticleReadingTier, string> = {
  essential: 'Essentiel',
  deep_dive: 'Approfondir',
  reference: 'Étude & référence',
};

export interface CategoryMeta {
  id: ArticleCategory;
  labelFr: string;
  shortLabelFr: string;
  descriptionFr: string;
}

export const ARTICLE_CATEGORIES: readonly CategoryMeta[] = [
  {
    id: 'diagnostic',
    labelFr: 'Diagnostic & Examens',
    shortLabelFr: 'Diagnostic',
    descriptionFr: 'FEVG, imagerie (ETT et IRM), biologie et compréhension du diagnostic',
  },
  {
    id: 'traitements',
    labelFr: 'Traitements',
    shortLabelFr: 'Traitements',
    descriptionFr: 'Les 4 piliers ESC 2026, titration, effets secondaires et prévention secondaire',
  },
  {
    id: 'dispositifs',
    labelFr: 'Dispositifs & Interventions',
    shortLabelFr: 'Dispositifs',
    descriptionFr: 'DAI, CRT, gilet LifeVest, télésurveillance, revascularisation et CTO',
  },
  {
    id: 'comorbidites',
    labelFr: 'Comorbidités',
    shortLabelFr: 'Comorbidités',
    descriptionFr: 'Reins, diabète, apnée du sommeil, valve aortique et thrombus VG',
  },
  {
    id: 'nutrition',
    labelFr: 'Nutrition & Compléments',
    shortLabelFr: 'Nutrition',
    descriptionFr: 'Sel, liquides, alimentation, fer IV, compléments et interactions',
  },
  {
    id: 'quotidien',
    labelFr: 'Vie quotidienne',
    shortLabelFr: 'Quotidien',
    descriptionFr: 'Auto-suivi, réadaptation cardiaque, santé émotionnelle et anticipation',
  },
  {
    id: 'france',
    labelFr: 'Vie en France & Droits',
    shortLabelFr: 'France & Droits',
    descriptionFr: 'ALD 5/13, arrêt maladie, travail, emprunt et permis de conduire',
  },
  {
    id: 'references',
    labelFr: 'Références & Guides',
    shortLabelFr: 'Références',
    descriptionFr: 'Essais cliniques clés, recommandations comparées, questions et glossaire',
  },
] as const;

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  diagnostic: 'Diagnostic & Examens',
  traitements: 'Traitements',
  dispositifs: 'Dispositifs & Interventions',
  comorbidites: 'Comorbidités',
  nutrition: 'Nutrition & Compléments',
  quotidien: 'Vie quotidienne',
  france: 'Vie en France & Droits',
  references: 'Références & Guides',
};

export const MODULE_LABELS_FR: Record<LinkedModuleKey, string> = {
  core: 'Socle commun',
  stageB: 'Stade B asymptomatique',
  hfImpEf: 'FEVG améliorée (HFimpEF)',
  cto: 'Occlusion coronaire chronique (CTO)',
  aorticStenosis: 'Rétrécissement aortique',
  lvThrombusOrAneurysm: 'Thrombus / anévrisme VG',
  atrialFibrillation: 'Fibrillation atriale',
  ckd: 'Maladie rénale chronique',
  diabetes: 'Diabète',
  sleepApnoea: 'Apnée du sommeil',
  lifeVest: 'Gilet LifeVest',
  device: 'Dispositif implanté (DAI / CRT)',
};

export const AI_PROVIDER_LABELS_FR: Record<
  'gemini' | 'mistral' | 'openai_compatible' | 'ollama',
  string
> = {
  gemini: 'Google Gemini',
  mistral: 'Mistral AI',
  openai_compatible: 'Serveur compatible OpenAI',
  ollama: 'Ollama (exécution locale)',
};

export function getActiveSpecificModuleKeys(
  profile: PatientProfile,
): SpecificProfileModuleKey[] {
  const active: SpecificProfileModuleKey[] = [];

  if (profile.hfStage === 'B') {
    active.push('stageB');
  }
  if (profile.modules.hfImpEf) {
    active.push('hfImpEf');
  }
  if (profile.modules.cto) {
    active.push('cto');
  }
  if (profile.modules.aorticStenosis) {
    active.push('aorticStenosis');
  }
  if (profile.modules.lvThrombusOrAneurysm) {
    active.push('lvThrombusOrAneurysm');
  }
  if (profile.modules.atrialFibrillation) {
    active.push('atrialFibrillation');
  }
  if (profile.modules.ckd) {
    active.push('ckd');
  }
  if (profile.modules.diabetes) {
    active.push('diabetes');
  }
  if (profile.modules.sleepApnoea !== 'none') {
    active.push('sleepApnoea');
  }
  if (profile.modules.lifeVest) {
    active.push('lifeVest');
  }
  if (profile.modules.device !== 'none') {
    active.push('device');
  }

  return active;
}

export function getActiveProfileModules(profile: PatientProfile): Set<LinkedModuleKey> {
  return new Set<LinkedModuleKey>(['core', ...getActiveSpecificModuleKeys(profile)]);
}

export function isArticleRelevantToProfile(
  article: WikiArticle,
  profile: PatientProfile,
): boolean {
  const activeModules = getActiveProfileModules(profile);
  return article.linkedModules.some((mod) => activeModules.has(mod));
}

export function getMatchingProfileModules(
  article: WikiArticle,
  profile: PatientProfile,
): SpecificProfileModuleKey[] {
  const specific = new Set<SpecificProfileModuleKey>(getActiveSpecificModuleKeys(profile));
  return article.linkedModules.filter(
    (mod): mod is SpecificProfileModuleKey => mod !== 'core' && specific.has(mod),
  );
}

export function getGlossaryInitialLetter(termFr: string): string {
  const normalized = normalizeFrenchText(termFr).replace(/^[^a-z0-9]+/, '');
  if (!normalized) {
    return '#';
  }
  const first = normalized.charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
}

export function searchGlossaryTerms(query: string, terms: GlossaryTerm[]): GlossaryTerm[] {
  const normalizedQuery = normalizeFrenchText(query);
  if (!normalizedQuery) {
    return [...terms].sort((a, b) => a.termFr.localeCompare(b.termFr, 'fr'));
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) {
    return [...terms].sort((a, b) => a.termFr.localeCompare(b.termFr, 'fr'));
  }

  const scored: { term: GlossaryTerm; score: number }[] = [];

  for (const term of terms) {
    const termNorm = normalizeFrenchText(term.termFr);
    const aliasesNorm = term.aliases.map(normalizeFrenchText).join(' ');
    const defNorm = normalizeFrenchText(term.shortDefinitionFr);
    const combined = `${termNorm} ${aliasesNorm} ${defNorm}`;

    if (!tokens.every((token) => combined.includes(token))) {
      continue;
    }

    let score = 0;
    if (termNorm.startsWith(normalizedQuery)) {
      score += 30;
    } else if (termNorm.includes(normalizedQuery)) {
      score += 20;
    }
    for (const token of tokens) {
      if (termNorm.includes(token)) score += 10;
      if (aliasesNorm.includes(token)) score += 8;
      if (defNorm.includes(token)) score += 3;
    }

    scored.push({ term, score });
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.term.termFr.localeCompare(b.term.termFr, 'fr');
  });

  return scored.map((entry) => entry.term);
}

const FRENCH_MONTHS = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
];

export function formatFrenchIsoDate(isoDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!match) {
    return isoDate;
  }
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  const day = Number(match[3]);
  const monthLabel = FRENCH_MONTHS[monthIndex];
  if (!monthLabel || day < 1 || day > 31) {
    return isoDate;
  }
  const dayLabel = day === 1 ? '1er' : String(day);
  return `${dayLabel} ${monthLabel} ${year}`;
}
