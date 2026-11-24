export type RuleId =
  | 'WEIGHT_GAIN_3D'
  | 'EPOF_RED_FLAG'
  | 'EPOF_WORSENING'
  | 'UNPLANNED_WEIGHT_LOSS'
  | 'LOW_BP_SYMPTOMATIC'
  | 'LOW_BP_ASYMPTOMATIC'
  | 'HR_IVABRADINE_DISCUSSION'
  | 'GDMT_MISSING_PILLAR'
  | 'STAGE_B_CONTEXT'
  | 'HFIMPEF_CONTINUE'
  | 'POST_TITRATION_LABS'
  | 'ARNI_WASHOUT_INFO'
  | 'POTASSIUM_ALERT'
  | 'CREATININE_JUMP'
  | 'CONTRAINDICATED_DRUG'
  | 'SGLT2_KETO_REMINDER'
  | 'BNP_ON_ARNI_CAVEAT'
  | 'ETT_VS_IRM_DISCORDANCE'
  | 'IRON_DEFICIENCY_CHECK'
  | 'LDL_TARGET_GAP'
  | 'LPA_ONE_OFF'
  | 'ICD_REASSESSMENT_3M'
  | 'CRT_QRS_DISCUSSION'
  | 'AS_LOW_FLOW_CAVEAT'
  | 'CSA_ASV_CONTRAINDICATION'
  | 'FR_ALD_CHECK'
  | 'FR_SMR_REHAB'
  | 'FR_TELESURVEILLANCE'
  | 'FR_SICK_LEAVE_2026'
  | 'FR_DRIVING_LIFEVEST'
  | 'FR_DRIVING_ICD_OR_NYHA'
  | 'VACCINES_ANNUAL';

export type RuleSeverity = 'info' | 'action' | 'warning' | 'urgent';
export type TriageLevel = 'stable' | 'warning' | 'urgent';
export type RuleCategory = 'daily' | 'medications' | 'exams' | 'devices' | 'france';

export interface RuleOutput {
  id: RuleId;
  severity: RuleSeverity;
  category: RuleCategory;
  titleFr: string;
  explanationFr: string;
  suggestedActionFr: string;
  evidenceGrade?: string;                 // Ex: "ESC 2026 Classe I", "HAS 2024", "Arrete 28 mars 2022"
  sources: string[];
  articleSlug: string;                    // Doit appartenir a EXPECTED_ARTICLE_SLUGS
  relatedQuestionIds?: string[];
}

export interface EngineEvaluation {
  triageLevel: TriageLevel;
  triageSummaryFr: string;
  outputs: RuleOutput[];                  // Trie par severite decroissante (urgent -> warning -> action -> info)
  prioritizedQuestionIds: string[];
}

export interface DrivingAssessmentInput {
  group: 'group1' | 'group2';
  nyhaClass: 1 | 2 | 3 | 4;
  lvefPercent?: number;
  hasLifeVest: boolean;
  device: 'none' | 'icd_primary' | 'icd_secondary' | 'crt_p' | 'crt_d';
  daysSinceMi?: number;
  daysSincePlannedPci?: number;
  daysSinceCabg?: number;
  daysSinceIcdImplant?: number;
  hadRecentShock?: 'none' | 'appropriate' | 'inappropriate';
}

export interface DrivingAssessmentResult {
  status: 'compatible_after_clearance' | 'temporarily_incompatible' | 'permanently_incompatible' | 'specialist_assessment_required';
  minWaitWeeks?: number;
  headlineFr: string;
  explanationFr: string;
  legalBasisFr: string;                   // Arrete du 28 mars 2022 + Directive UE 2016/1106
  nextStepsFr: string[];
}
