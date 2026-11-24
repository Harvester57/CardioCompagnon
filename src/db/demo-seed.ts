import type {
  ClinicalEvent,
  DailyLog,
  DoseChangeEvent,
  FrenchAdminProgress,
  ImagingExam,
  LabResult,
  Medication,
  MedicationIntakeLog,
  PatientProfile,
  QuestionTracking,
} from '../types';
import { type CardioDatabase, createDefaultSettings, demoDb } from './database';

export const DEMO_REFERENCE_DATE = '2026-11-24';

function buildDemoProfile(): PatientProfile {
  return {
    id: 'active',
    displayName: 'Profil de démonstration',
    sex: 'M',
    birthYear: 1964,
    diagnosisDate: '2025-11-10',
    hfStage: 'C',
    nyhaClass: 2,
    ischaemicCauseConfirmed: 'yes',
    dryWeightKg: 78.5,
    baselineLdlGL: 1.62,
    fluidLimitMl: null,
    saltTargetG: 5,
    drivingGroup: 'group1',
    onExtendedSickLeave: false,
    modules: {
      hfImpEf: false,
      cto: true,
      aorticStenosis: false,
      lvThrombusOrAneurysm: false,
      atrialFibrillation: false,
      ckd: false,
      diabetes: false,
      sleepApnoea: 'suspected',
      lifeVest: false,
      device: 'none',
    },
    careTeam: {
      cardiologist: {
        name: 'Dr Claire Moreau',
        phone: '01 40 00 01 02',
        center: 'Service de cardiologie — Hôpital de démonstration',
      },
      gp: {
        name: 'Dr Laurent Bernard',
        phone: '01 40 00 03 04',
        center: 'Maison de santé de démonstration',
      },
      hfNurse: {
        name: 'Sophie Petit (IPA IC)',
        phone: '01 40 00 05 06',
        center: 'Unité de suivi insuffisance cardiaque',
      },
      pharmacist: {
        name: 'Pharmacie des Tilleuls',
        phone: '01 40 00 07 08',
      },
      trustedContact: {
        name: 'Personne de confiance (fictive)',
        phone: '06 00 00 00 01',
      },
    },
    sickDayPlanNote:
      "En cas de fièvre élevée, de vomissements ou de diarrhées empêchant de boire normalement : contacter le médecin traitant ou le cardiologue avant toute modification du diurétique, de l'ARNI ou de l'iSGLT2.",
    allergies: 'Aucune allergie médicamenteuse connue',
    updatedAt: '2026-11-24T08:00:00.000Z',
  };
}

function buildDemoDailyLogs(): Omit<DailyLog, 'id'>[] {
  const entries: {
    date: string;
    weightKg: number;
    systolicBp: number;
    diastolicBp: number;
    heartRateBpm: number;
    dyspnoea?: DailyLog['symptoms']['dyspnoea'];
    oedema?: DailyLog['symptoms']['oedema'];
    fatigue?: DailyLog['symptoms']['fatigue'];
    dizziness?: boolean;
    notes?: string;
  }[] = [
    { date: '2026-11-09', weightKg: 78.6, systolicBp: 112, diastolicBp: 68, heartRateBpm: 64 },
    { date: '2026-11-10', weightKg: 78.5, systolicBp: 110, diastolicBp: 66, heartRateBpm: 63 },
    { date: '2026-11-11', weightKg: 78.7, systolicBp: 108, diastolicBp: 65, heartRateBpm: 65 },
    { date: '2026-11-12', weightKg: 78.6, systolicBp: 106, diastolicBp: 64, heartRateBpm: 62 },
    {
      date: '2026-11-13',
      weightKg: 78.4,
      systolicBp: 104,
      diastolicBp: 64,
      heartRateBpm: 64,
      notes: 'Marche de 30 minutes bien tolérée',
    },
    { date: '2026-11-14', weightKg: 78.5, systolicBp: 108, diastolicBp: 66, heartRateBpm: 63 },
    { date: '2026-11-15', weightKg: 78.6, systolicBp: 110, diastolicBp: 67, heartRateBpm: 66 },
    { date: '2026-11-16', weightKg: 78.8, systolicBp: 105, diastolicBp: 64, heartRateBpm: 64 },
    {
      date: '2026-11-17',
      weightKg: 78.7,
      systolicBp: 102,
      diastolicBp: 62,
      heartRateBpm: 62,
      notes: 'Palier sacubitril/valsartan 49/51 mg débuté',
    },
    { date: '2026-11-18', weightKg: 78.6, systolicBp: 100, diastolicBp: 62, heartRateBpm: 63 },
    { date: '2026-11-19', weightKg: 78.8, systolicBp: 101, diastolicBp: 63, heartRateBpm: 64 },
    { date: '2026-11-20', weightKg: 78.9, systolicBp: 104, diastolicBp: 64, heartRateBpm: 65 },
    {
      date: '2026-11-21',
      weightKg: 79.1,
      systolicBp: 106,
      diastolicBp: 65,
      heartRateBpm: 66,
      dyspnoea: 'exertion',
      notes: 'Légère gêne en côte rapide',
    },
    { date: '2026-11-22', weightKg: 79.2, systolicBp: 105, diastolicBp: 64, heartRateBpm: 65 },
    {
      date: '2026-11-23',
      weightKg: 79.4,
      systolicBp: 104,
      diastolicBp: 64,
      heartRateBpm: 67,
      oedema: 'mild',
      fatigue: 'moderate',
      notes: 'Chevilles légèrement marquées en fin de journée',
    },
    {
      date: '2026-11-24',
      weightKg: 79.3,
      systolicBp: 106,
      diastolicBp: 65,
      heartRateBpm: 66,
      oedema: 'mild',
      notes: 'Pesée matinale après miction, état stable',
    },
  ];

  return entries.map((entry) => ({
    date: entry.date,
    weightKg: entry.weightKg,
    systolicBp: entry.systolicBp,
    diastolicBp: entry.diastolicBp,
    heartRateBpm: entry.heartRateBpm,
    symptoms: {
      dyspnoea: entry.dyspnoea ?? 'none',
      oedema: entry.oedema ?? 'none',
      fatigue: entry.fatigue ?? 'none',
      dizziness: entry.dizziness ?? false,
      palpitations: false,
      chestPain: false,
      persistentCough: false,
      appetiteLoss: false,
    },
    notes: entry.notes,
    createdAt: `${entry.date}T07:30:00.000Z`,
  }));
}

function buildDemoMedications(): Omit<Medication, 'id'>[] {
  return [
    {
      pillar: 'raas_arni',
      subClass: 'arni',
      innName: 'sacubitril/valsartan',
      frenchBrand: 'Entresto',
      doseLabel: '49/51 mg x 2/j',
      dosePercentOfTarget: 50,
      status: 'titrating',
      startedAt: '2026-01-15',
      lastDoseChangeAt: '2026-11-17',
      scheduleSlots: ['matin', 'soir'],
      sideEffectsNote: "Bonne tolérance tensionnelle jusqu'à présent",
    },
    {
      pillar: 'beta_blocker',
      subClass: 'beta_blocker',
      innName: 'bisoprolol',
      frenchBrand: 'Cardensiel',
      doseLabel: '10 mg/j',
      dosePercentOfTarget: 100,
      status: 'at_target',
      startedAt: '2025-11-12',
      lastDoseChangeAt: '2026-03-10',
      scheduleSlots: ['matin'],
    },
    {
      pillar: 'mra',
      subClass: 'steroidal_mra',
      innName: 'éplérénone',
      frenchBrand: 'Inspra',
      doseLabel: '25 mg/j',
      dosePercentOfTarget: 50,
      status: 'titrating',
      startedAt: '2025-11-15',
      lastDoseChangeAt: '2025-11-15',
      scheduleSlots: ['matin'],
    },
    {
      pillar: 'sglt2i',
      subClass: 'sglt2i',
      innName: 'dapagliflozine',
      frenchBrand: 'Forxiga',
      doseLabel: '10 mg/j',
      dosePercentOfTarget: 100,
      status: 'at_target',
      startedAt: '2025-11-20',
      lastDoseChangeAt: '2025-11-20',
      scheduleSlots: ['matin'],
    },
    {
      pillar: 'loop_diuretic',
      subClass: 'loop_diuretic',
      innName: 'furosémide',
      frenchBrand: 'Lasilix',
      doseLabel: '40 mg/j',
      status: 'active',
      startedAt: '2025-11-08',
      lastDoseChangeAt: '2026-02-01',
      scheduleSlots: ['matin'],
    },
    {
      pillar: 'lipid_lowering',
      subClass: 'statin',
      innName: 'rosuvastatine',
      frenchBrand: 'Crestor',
      doseLabel: '20 mg/j',
      status: 'active',
      startedAt: '2025-11-08',
      scheduleSlots: ['soir'],
    },
    {
      pillar: 'antiplatelet',
      subClass: 'aspirin_p2y12',
      innName: 'acide acétylsalicylique',
      frenchBrand: 'Kardégic',
      doseLabel: '75 mg/j',
      status: 'active',
      startedAt: '2025-11-08',
      scheduleSlots: ['midi'],
    },
  ];
}

function buildDemoLabs(): Omit<LabResult, 'id'>[] {
  return [
    {
      date: '2025-12-10',
      ntProBnpPgMl: 2450,
      creatinineUmolL: 92,
      egfrMlMin: 74,
      potassiumMmolL: 4.3,
      sodiumMmolL: 139,
      ferritinUgL: 95,
      tsatPercent: 21,
      ldlGL: 0.72,
      haemoglobinGDl: 13.8,
      hba1cPercent: 5.7,
      tshMiuL: 2.1,
      notes: 'Bilan post-hospitalisation',
    },
    {
      date: '2026-02-18',
      ntProBnpPgMl: 1320,
      creatinineUmolL: 102,
      egfrMlMin: 66,
      potassiumMmolL: 4.6,
      sodiumMmolL: 140,
      ldlGL: 0.64,
      haemoglobinGDl: 13.7,
      notes: 'Contrôle après passage au sacubitril/valsartan 24/26 mg',
    },
    {
      date: '2026-06-15',
      ntProBnpPgMl: 780,
      creatinineUmolL: 98,
      egfrMlMin: 69,
      potassiumMmolL: 4.5,
      sodiumMmolL: 140,
      ferritinUgL: 78,
      tsatPercent: 18,
      ldlGL: 0.59,
      haemoglobinGDl: 13.4,
      hba1cPercent: 5.8,
      notes: 'CST < 20 % : carence martiale à discuter en consultation',
    },
    {
      date: '2026-10-28',
      ntProBnpPgMl: 610,
      creatinineUmolL: 101,
      egfrMlMin: 67,
      potassiumMmolL: 4.7,
      sodiumMmolL: 141,
      ferritinUgL: 72,
      tsatPercent: 18,
      ldlGL: 0.58,
      haemoglobinGDl: 13.5,
      tshMiuL: 1.9,
      notes: 'Bilan avant palier 49/51 mg ; LDL proche mais ≥ 0,55 g/L',
    },
  ];
}

function buildDemoImaging(): Omit<ImagingExam, 'id'>[] {
  return [
    {
      date: '2025-11-12',
      modality: 'ett',
      lvefPercent: 30,
      lveddMm: 61,
      lvedviMlM2: 88,
      lvesviMlM2: 62,
      mitralRegurgitation: 'mild',
      lvThrombus: 'absent',
      notes: 'ETT initiale post-IDM antérieur',
    },
    {
      date: '2026-03-20',
      modality: 'irm',
      lvefPercent: 29,
      lvedviMlM2: 118,
      lvesviMlM2: 84,
      lgeScarPresent: true,
      lgeScarPercent: 18,
      lgePattern: 'subendocardial_transmural',
      lvThrombus: 'absent',
      notes: 'IRM cardiaque : cicatrice ischémique antéroseptale, viabilité résiduelle partielle, absence de thrombus VG',
    },
    {
      date: '2026-09-15',
      modality: 'ett',
      lvefPercent: 34,
      lveddMm: 59,
      lvedviMlM2: 82,
      lvesviMlM2: 54,
      mitralRegurgitation: 'mild',
      lvThrombus: 'absent',
      notes: 'ETT de contrôle sous quadrithérapie en cours de titration',
    },
  ];
}

function buildDemoEvents(): Omit<ClinicalEvent, 'id'>[] {
  return [
    {
      date: '2025-11-08',
      type: 'mi',
      details: { territory: 'antérieur', stentPlaced: true },
      notes: 'Infarctus du myocarde inaugural',
    },
    {
      date: '2025-11-08',
      type: 'pci_stent',
      details: { vessel: 'IVA proximale', ctoResidual: true },
      notes: 'Angioplastie primaire IVA + découverte CTO coronaire droite',
    },
    {
      date: '2025-11-08',
      type: 'hf_hospitalisation',
      details: { durationDays: 6 },
      notes: 'Hospitalisation initiale et initiation du traitement de fond',
    },
    {
      date: '2026-09-15',
      type: 'ecg_check',
      details: { rhythm: 'sinus', qrsMs: 118, lbbb: false },
      notes: 'Rythme sinusal régulier, QRS fin (118 ms)',
    },
    {
      date: '2026-10-20',
      type: 'vaccine_flu',
      details: { season: '2026-2027' },
      notes: 'Vaccination antigrippale annuelle réalisée en pharmacie',
    },
  ];
}

function buildDemoAdminProgress(): FrenchAdminProgress[] {
  return [
    {
      itemId: 'ald_5_13',
      status: 'done',
      renewalDate: '2030-11-15',
      notes: 'Protocole de soins ALD 5 validé par le médecin conseil',
    },
    {
      itemId: 'smr_rehab',
      status: 'done',
      notes: 'Programme SMR cardiovasculaire ambulatoire terminé en février 2026',
    },
    {
      itemId: 'prado_ic',
      status: 'done',
      notes: "Suivi PRADO réalisé à la sortie d'hospitalisation",
    },
    {
      itemId: 'telesurveillance_ic',
      status: 'in_progress',
      notes: "Dossier en cours d'activation avec l'équipe d'insuffisance cardiaque",
    },
    {
      itemId: 'vaccinations_ic',
      status: 'in_progress',
      notes: 'Grippe à jour ; vérifier le vaccin pneumocoque auprès du médecin traitant',
    },
    {
      itemId: 'visite_pre_reprise',
      status: 'todo',
      notes: 'À planifier si aménagement de poste nécessaire',
    },
  ];
}

function buildDemoQuestionTracking(): QuestionTracking[] {
  return [
    {
      questionId: 'q_meds_four_pillars',
      selectedForNextVisit: true,
      status: 'open',
    },
    {
      questionId: 'q_iron_iv_check',
      selectedForNextVisit: true,
      status: 'open',
    },
    {
      questionId: 'q_ldl_target',
      selectedForNextVisit: false,
      status: 'asked',
      answerNote: "Ajout d'ézétimibe envisagé si le LDL reste ≥ 0,55 g/L au prochain bilan.",
      answeredAt: '2026-10-28',
    },
  ];
}

export async function seedDemoDatabase(
  db: CardioDatabase = demoDb,
  force = false,
): Promise<boolean> {
  const existingLogsCount = await db.dailyLogs.count();
  if (existingLogsCount > 0 && !force) {
    return false;
  }

  await db.transaction(
    'rw',
    [
      db.profile,
      db.dailyLogs,
      db.medications,
      db.doseChanges,
      db.intakeLogs,
      db.labs,
      db.imaging,
      db.events,
      db.questionTracking,
      db.adminProgress,
      db.settings,
    ],
    async () => {
      await Promise.all([
        db.profile.clear(),
        db.dailyLogs.clear(),
        db.medications.clear(),
        db.doseChanges.clear(),
        db.intakeLogs.clear(),
        db.labs.clear(),
        db.imaging.clear(),
        db.events.clear(),
        db.questionTracking.clear(),
        db.adminProgress.clear(),
      ]);

      await db.profile.put(buildDemoProfile());
      const existingSettings = await db.settings.get('settings');
      if (!existingSettings) {
        await db.settings.put(createDefaultSettings());
      }

      await db.dailyLogs.bulkAdd(buildDemoDailyLogs());

      const medIds = await db.medications.bulkAdd(buildDemoMedications(), { allKeys: true });
      const arniId = medIds[0];
      const bbId = medIds[1];

      const doseChanges: Omit<DoseChangeEvent, 'id'>[] = [];
      if (typeof arniId === 'number') {
        doseChanges.push(
          {
            medicationId: arniId,
            date: '2026-01-15',
            previousDoseLabel: 'ramipril 5 mg/j',
            newDoseLabel: '24/26 mg x 2/j',
            reason: 'Relais IEC vers ARNI après délai de 36 h',
          },
          {
            medicationId: arniId,
            date: '2026-11-17',
            previousDoseLabel: '24/26 mg x 2/j',
            newDoseLabel: '49/51 mg x 2/j',
            reason: 'Titration progressive — bilan rénal/K+ prévu à 1–2 semaines',
          },
        );
      }
      if (typeof bbId === 'number') {
        doseChanges.push({
          medicationId: bbId,
          date: '2026-03-10',
          previousDoseLabel: '5 mg/j',
          newDoseLabel: '10 mg/j',
          reason: 'Atteinte de la dose cible bêtabloquant',
        });
      }
      if (doseChanges.length > 0) {
        await db.doseChanges.bulkAdd(doseChanges);
      }

      const intakeLogs: Omit<MedicationIntakeLog, 'id'>[] = [];
      if (typeof arniId === 'number' && typeof bbId === 'number') {
        intakeLogs.push(
          {
            date: DEMO_REFERENCE_DATE,
            medicationId: arniId,
            slot: 'matin',
            taken: true,
            takenAt: `${DEMO_REFERENCE_DATE}T08:05:00.000Z`,
          },
          {
            date: DEMO_REFERENCE_DATE,
            medicationId: bbId,
            slot: 'matin',
            taken: true,
            takenAt: `${DEMO_REFERENCE_DATE}T08:05:00.000Z`,
          },
        );
      }
      if (intakeLogs.length > 0) {
        await db.intakeLogs.bulkAdd(intakeLogs);
      }

      await db.labs.bulkAdd(buildDemoLabs());
      await db.imaging.bulkAdd(buildDemoImaging());
      await db.events.bulkAdd(buildDemoEvents());
      await db.adminProgress.bulkPut(buildDemoAdminProgress());
      await db.questionTracking.bulkPut(buildDemoQuestionTracking());
    },
  );

  return true;
}

export async function resetDemoDatabase(db: CardioDatabase = demoDb): Promise<void> {
  await seedDemoDatabase(db, true);
}
