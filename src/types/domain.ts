export type ClinicalModuleKey =
  | 'hfImpEf'
  | 'cto'
  | 'aorticStenosis'
  | 'lvThrombusOrAneurysm'
  | 'atrialFibrillation'
  | 'ckd'
  | 'diabetes'
  | 'sleepApnoea'
  | 'lifeVest'
  | 'device';

export type SleepApnoeaStatus = 'none' | 'osa' | 'csa' | 'suspected';
export type CardiacDeviceType = 'none' | 'icd_primary' | 'icd_secondary' | 'crt_p' | 'crt_d';

export interface CareContact {
  name: string;
  phone?: string;
  center?: string;
}

export interface PatientProfile {
  id: 'active';
  displayName?: string;
  sex: 'M' | 'F';
  birthYear?: number;
  diagnosisDate?: string;                 // YYYY-MM-DD
  hfStage: 'B' | 'C' | 'unknown';
  nyhaClass: 1 | 2 | 3 | 4 | null;
  ischaemicCauseConfirmed: 'yes' | 'uncertain' | 'mixed';
  dryWeightKg?: number;
  baselineLdlGL?: number;                 // LDL avant traitement hypolipemiant (g/L)
  fluidLimitMl?: number | null;           // null = selon la soif (FRESH-UP / HFA 2024)
  saltTargetG?: number;                   // defaut repere 5 g/j
  drivingGroup: 'group1' | 'group2' | 'none';
  onExtendedSickLeave?: boolean;          // Pour alerte reforme IJ octobre 2026
  modules: {
    hfImpEf: boolean;
    cto: boolean;
    aorticStenosis: boolean;
    lvThrombusOrAneurysm: boolean;
    atrialFibrillation: boolean;
    ckd: boolean;
    diabetes: boolean;
    sleepApnoea: SleepApnoeaStatus;
    lifeVest: boolean;
    device: CardiacDeviceType;
  };
  careTeam: {
    cardiologist?: CareContact;
    gp?: CareContact;
    hfNurse?: CareContact;
    pharmacist?: CareContact;
    trustedContact?: CareContact;
  };
  sickDayPlanNote?: string;
  allergies?: string;
  updatedAt: string;                      // ISO 8601
}

export interface DailyLog {
  id?: number;
  date: string;                           // YYYY-MM-DD (index unique)
  weightKg?: number;
  systolicBp?: number;
  diastolicBp?: number;
  heartRateBpm?: number;
  symptoms: {
    dyspnoea: 'none' | 'exertion' | 'rest_or_lying';
    oedema: 'none' | 'mild' | 'worsening';
    fatigue: 'none' | 'moderate' | 'severe';
    dizziness: boolean;
    palpitations: boolean;
    chestPain: boolean;
    persistentCough: boolean;
    appetiteLoss: boolean;
  };
  notes?: string;
  createdAt: string;
}

export type MedicationPillar =
  | 'raas_arni'
  | 'beta_blocker'
  | 'mra'
  | 'sglt2i'
  | 'loop_diuretic'
  | 'lipid_lowering'
  | 'antiplatelet'
  | 'anticoagulant'
  | 'addon_hf'
  | 'other';

export type MedicationSubClass =
  | 'ace_i'
  | 'arb'
  | 'arni'
  | 'beta_blocker'
  | 'steroidal_mra'
  | 'non_steroidal_mra'
  | 'sglt2i'
  | 'loop_diuretic'
  | 'statin'
  | 'ezetimibe'
  | 'pcsk9'
  | 'aspirin_p2y12'
  | 'colchicine'
  | 'anticoagulant'
  | 'ivabradine'
  | 'digoxin_digitoxin'
  | 'vericiguat'
  | 'potassium_binder'
  | 'other';

export type ScheduleSlot = 'matin' | 'midi' | 'soir' | 'coucher';

export interface Medication {
  id?: number;
  pillar: MedicationPillar;
  subClass?: MedicationSubClass;
  innName: string;                        // DCI (ex: "sacubitril/valsartan")
  frenchBrand?: string;                   // Ex: "Entresto"
  doseLabel: string;                      // Ex: "49/51 mg x 2/j"
  dosePercentOfTarget?: number;           // 0-100
  status: 'active' | 'titrating' | 'at_target' | 'paused' | 'stopped';
  notPrescribedReason?: string;           // Ex: "contre-indication renale", "intolerance"
  switchedFromAceIAt?: string;            // ISO date si passage IEC -> ARNI (regle 36 h)
  startedAt?: string;
  lastDoseChangeAt?: string;              // YYYY-MM-DD
  scheduleSlots?: ScheduleSlot[];
  sideEffectsNote?: string;
}

export interface DoseChangeEvent {
  id?: number;
  medicationId: number;
  date: string;                           // YYYY-MM-DD
  previousDoseLabel?: string;
  newDoseLabel: string;
  reason?: string;
}

export interface MedicationIntakeLog {
  id?: number;
  date: string;                           // YYYY-MM-DD
  medicationId: number;
  slot: ScheduleSlot;
  taken: boolean;
  takenAt?: string;
}

export interface LabResult {
  id?: number;
  date: string;                           // YYYY-MM-DD
  ntProBnpPgMl?: number;
  bnpPgMl?: number;
  creatinineUmolL?: number;
  egfrMlMin?: number;
  potassiumMmolL?: number;
  sodiumMmolL?: number;
  ferritinUgL?: number;
  tsatPercent?: number;                   // CST (%)
  ldlGL?: number;                         // g/L
  lpaValue?: number;
  lpaUnit?: 'nmol/L' | 'mg/dL';
  haemoglobinGDl?: number;
  hba1cPercent?: number;
  tshMiuL?: number;
  digoxinNgMl?: number;
  notes?: string;
}

export interface ImagingExam {
  id?: number;
  date: string;                           // YYYY-MM-DD
  modality: 'ett' | 'irm';
  lvefPercent?: number;
  lveddMm?: number;
  lvedviMlM2?: number;
  lvesviMlM2?: number;
  lgeScarPresent?: boolean;
  lgeScarPercent?: number;
  lgePattern?: 'subendocardial_transmural' | 'midwall' | 'epicardial' | 'mixed' | 'none';
  aorticValveAreaCm2?: number;
  aorticMeanGradientMmHg?: number;
  strokeVolumeIndexMlM2?: number;
  mitralRegurgitation?: 'none' | 'mild' | 'moderate' | 'severe';
  lvThrombus?: 'absent' | 'present' | 'uncertain';
  notes?: string;
}

export type ClinicalEventType =
  | 'mi'
  | 'pci_stent'
  | 'cabg'
  | 'hf_hospitalisation'
  | 'icd_implant'
  | 'icd_shock_appropriate'
  | 'icd_shock_inappropriate'
  | 'iv_iron_infusion'
  | 'ecg_check'
  | 'sleep_study'
  | 'vaccine_flu'
  | 'vaccine_pneumo'
  | 'consultation';

export interface ClinicalEvent {
  id?: number;
  date: string;                           // YYYY-MM-DD
  type: ClinicalEventType;
  details: Record<string, string | number | boolean>;
  notes?: string;
}

export interface QuestionTracking {
  questionId: string;                     // Cle primaire
  selectedForNextVisit: boolean;
  status: 'open' | 'asked' | 'resolved' | 'not_applicable';
  answerNote?: string;
  answeredAt?: string;
}

export type FrenchAdminItemId =
  | 'ald_5_13'
  | 'smr_rehab'
  | 'prado_ic'
  | 'telesurveillance_ic'
  | 'arret_travail_ij'
  | 'visite_pre_reprise'
  | 'temps_partiel_therapeutique'
  | 'rqth_mdph'
  | 'pension_invalidite'
  | 'emprunt_aeras_lemoine'
  | 'permis_medecin_agree'
  | 'vaccinations_ic';

export interface FrenchAdminProgress {
  itemId: FrenchAdminItemId;              // Cle primaire
  status: 'todo' | 'in_progress' | 'done' | 'not_applicable';
  renewalDate?: string;
  notes?: string;
}

export type ReminderType =
  | 'weight'
  | 'dailyCheckup'
  | 'medicationMorning'
  | 'medicationEvening';

export interface ReminderScheduleItem {
  enabled: boolean;
  time: string;                           // HH:MM (24h, heure locale)
}

export interface NotificationSettings {
  enabled: boolean;
  reminders: Record<ReminderType, ReminderScheduleItem>;
}

export interface AppSettings {
  id: 'settings';
  theme: 'light' | 'dark' | 'system';
  largeTextMode: boolean;
  enableDailyPillCheckin: boolean;
  notifications: NotificationSettings;
  pinHash?: string;
  pinSalt?: string;
  lastBackupAt?: string;
  aiHelper: {
    enabled: boolean;
    provider: 'gemini' | 'mistral' | 'openai_compatible' | 'ollama';
    endpointUrl?: string;
    modelName?: string;
    apiKey?: string;
  };
}

export interface PatientState {
  profile: PatientProfile;
  dailyLogs: DailyLog[];                  // Trie par date croissante
  medications: Medication[];
  doseChanges: DoseChangeEvent[];
  labs: LabResult[];                      // Trie par date croissante
  imaging: ImagingExam[];                 // Trie par date croissante
  events: ClinicalEvent[];                // Trie par date croissante
  adminProgress: FrenchAdminProgress[];
  referenceDate: string;                  // YYYY-MM-DD (injecte pour determinisme des tests)
}
