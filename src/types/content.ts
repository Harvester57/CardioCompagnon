import type {
  ClinicalModuleKey,
  FrenchAdminItemId,
  MedicationPillar,
  MedicationSubClass,
} from './domain';
import type { RuleId } from './rules';

export type ArticleCategory =
  | 'diagnostic'
  | 'traitements'
  | 'dispositifs'
  | 'comorbidites'
  | 'nutrition'
  | 'quotidien'
  | 'france'
  | 'references';

export interface ArticleSection {
  headingFr: string;
  bodyMarkdownFr: string;
}

export interface WikiArticle {
  slug: string;                           // Correspond a EXPECTED_ARTICLE_SLUGS
  sourceWikiPath: string;                 // Ex: "wiki/topics/living-with-heart-failure-in-france.md"
  titleFr: string;
  category: ArticleCategory;
  asOf: string;                           // "2026-11-24"
  confidence: 'high' | 'medium-high' | 'medium';
  volatility: 'hot' | 'warm' | 'stable';
  tags: string[];
  aliases: string[];
  linkedModules: (ClinicalModuleKey | 'core' | 'stageB')[];
  plainSummaryFr: string;                 // Encadre "En clair"
  sections: ArticleSection[];
  relatedArticleSlugs: string[];
  sources: { label: string; detail: string }[];
  disclaimerType: 'medical' | 'legal_france';
}

export type QuestionInterlocutor = 'cardiologist' | 'gp' | 'pharmacist' | 'occupational_doctor';

export interface QuestionCatalogItem {
  id: string;                             // Ex: "q_meds_four_pillars"
  interlocutor: QuestionInterlocutor;
  topicFr: string;
  questionFr: string;
  whyItMattersFr: string;
  sources: string[];
  articleSlug: string;
  relevantModules: (ClinicalModuleKey | 'core' | 'stageB')[];
  triggeredByRules?: RuleId[];
}

export interface InteractionItem {
  id: string;
  nameFr: string;
  aliases: string[];
  verdict: 'worth_raising' | 'possible' | 'not_supported' | 'avoid';
  summaryFr: string;
  mechanismOrCaveatFr: string;
  affectedPillars: MedicationPillar[];
  evidenceGrade?: string;
  sources: string[];
  articleSlug: string;
}

export interface MedicationReference {
  id: string;
  pillar: MedicationPillar;
  subClass: MedicationSubClass;
  innNameFr: string;
  frenchBrands: string[];
  startDoseFr?: string;
  targetDoseFr?: string;
  titrationIntervalFr?: string;
  monitoringFr: string;
  avoidInHfref?: boolean;
  articleSlug: string;
}

export interface FrenchAdminCatalogItem {
  id: FrenchAdminItemId;
  titleFr: string;
  category: 'couverture' | 'parcours_soins' | 'travail' | 'emprunt' | 'conduite' | 'prevention';
  summaryFr: string;
  stepsFr: string[];
  officialLinks: { label: string; url: string }[];
  asOf: string;
  articleSlug: string;
}

export interface GlossaryTerm {
  id: string;
  termFr: string;
  aliases: string[];
  shortDefinitionFr: string;
  articleSlug?: string;
}
