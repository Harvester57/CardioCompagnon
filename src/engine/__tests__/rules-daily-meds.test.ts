import { describe, expect, it } from 'vitest';
import type { DailyLog, Medication, PatientState } from '../../types/domain';
import { evaluateDailyVitalsRules } from '../rules/daily-vitals.rules';
import { evaluateMedicationRules } from '../rules/medications.rules';

const REF_DATE = '2026-11-24';

function makeLog(date: string, overrides: Partial<DailyLog> = {}): DailyLog {
  return {
    date,
    weightKg: 78.0,
    systolicBp: 112,
    diastolicBp: 68,
    heartRateBpm: 64,
    symptoms: {
      dyspnoea: 'none',
      oedema: 'none',
      fatigue: 'none',
      dizziness: false,
      palpitations: false,
      chestPain: false,
      persistentCough: false,
      appetiteLoss: false,
      ...(overrides.symptoms ?? {}),
    },
    notes: overrides.notes,
    createdAt: `${date}T08:00:00.000Z`,
    ...(overrides.weightKg !== undefined ? { weightKg: overrides.weightKg } : {}),
    ...(overrides.systolicBp !== undefined ? { systolicBp: overrides.systolicBp } : {}),
    ...(overrides.diastolicBp !== undefined ? { diastolicBp: overrides.diastolicBp } : {}),
    ...(overrides.heartRateBpm !== undefined ? { heartRateBpm: overrides.heartRateBpm } : {}),
  };
}

function makeFourPillars(): Medication[] {
  return [
    {
      id: 1,
      pillar: 'raas_arni',
      subClass: 'arni',
      innName: 'sacubitril/valsartan',
      frenchBrand: 'Entresto',
      doseLabel: '97/103 mg x 2/j',
      status: 'at_target',
      lastDoseChangeAt: '2026-06-01',
    },
    {
      id: 2,
      pillar: 'beta_blocker',
      subClass: 'beta_blocker',
      innName: 'bisoprolol',
      frenchBrand: 'Cardensiel',
      doseLabel: '10 mg/j',
      status: 'at_target',
      lastDoseChangeAt: '2026-06-01',
    },
    {
      id: 3,
      pillar: 'mra',
      subClass: 'steroidal_mra',
      innName: 'eplerenone',
      frenchBrand: 'Inspra',
      doseLabel: '50 mg/j',
      status: 'at_target',
      lastDoseChangeAt: '2026-06-01',
    },
    {
      id: 4,
      pillar: 'sglt2i',
      subClass: 'sglt2i',
      innName: 'dapagliflozine',
      frenchBrand: 'Forxiga',
      doseLabel: '10 mg/j',
      status: 'at_target',
      lastDoseChangeAt: '2026-06-01',
    },
  ];
}

function makeBaseState(overrides: Partial<PatientState> = {}): PatientState {
  return {
    profile: {
      id: 'active',
      sex: 'M',
      hfStage: 'C',
      nyhaClass: 2,
      ischaemicCauseConfirmed: 'yes',
      dryWeightKg: 78.0,
      baselineLdlGL: 1.5,
      drivingGroup: 'group1',
      onExtendedSickLeave: false,
      modules: {
        hfImpEf: false,
        cto: false,
        aorticStenosis: false,
        lvThrombusOrAneurysm: false,
        atrialFibrillation: false,
        ckd: false,
        diabetes: false,
        sleepApnoea: 'none',
        lifeVest: false,
        device: 'none',
      },
      careTeam: {},
      updatedAt: '2026-11-24T08:00:00.000Z',
    },
    dailyLogs: [makeLog(REF_DATE)],
    medications: makeFourPillars(),
    doseChanges: [],
    labs: [],
    imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 32 }],
    events: [],
    adminProgress: [],
    referenceDate: REF_DATE,
    ...overrides,
  };
}

describe('daily-vitals.rules.ts -- 7 regles et bornes exactes', () => {
  it('WEIGHT_GAIN_3D : ne declenche pas a +1,9 kg sur 3 jours, declenche a +2,0 kg', () => {
    const state19 = makeBaseState({
      profile: { ...makeBaseState().profile, dryWeightKg: undefined },
      dailyLogs: [
        makeLog('2026-11-21', { weightKg: 78.0 }),
        makeLog('2026-11-24', { weightKg: 79.9 }),
      ],
    });
    const state20 = makeBaseState({
      profile: { ...makeBaseState().profile, dryWeightKg: undefined },
      dailyLogs: [
        makeLog('2026-11-21', { weightKg: 78.0 }),
        makeLog('2026-11-24', { weightKg: 80.0 }),
      ],
    });

    expect(evaluateDailyVitalsRules(state19).some((r) => r.id === 'WEIGHT_GAIN_3D')).toBe(false);
    const res20 = evaluateDailyVitalsRules(state20).find((r) => r.id === 'WEIGHT_GAIN_3D');
    expect(res20?.severity).toBe('warning');
    expect(res20?.explanationFr).toContain('+2,0 kg');
  });

  it('WEIGHT_GAIN_3D : borne exacte vs poids sec (+1,9 kg vs +2,0 kg)', () => {
    const stateDry19 = makeBaseState({
      dailyLogs: [makeLog(REF_DATE, { weightKg: 79.9 })],
    });
    const stateDry20 = makeBaseState({
      dailyLogs: [makeLog(REF_DATE, { weightKg: 80.0 })],
    });

    expect(evaluateDailyVitalsRules(stateDry19).some((r) => r.id === 'WEIGHT_GAIN_3D')).toBe(false);
    expect(evaluateDailyVitalsRules(stateDry20).some((r) => r.id === 'WEIGHT_GAIN_3D')).toBe(true);
  });

  it('WEIGHT_GAIN_3D : ne declenche pas la fenetre 3 jours si le gain s etale sur 4 jours sans depasser le poids sec', () => {
    const state4d = makeBaseState({
      profile: { ...makeBaseState().profile, dryWeightKg: undefined },
      dailyLogs: [
        makeLog('2026-11-20', { weightKg: 78.0 }),
        makeLog('2026-11-24', { weightKg: 80.2 }),
      ],
    });
    expect(evaluateDailyVitalsRules(state4d).some((r) => r.id === 'WEIGHT_GAIN_3D')).toBe(false);
  });

  it('EPOF_RED_FLAG : declenche urgent pour douleur thoracique, dyspnee de repos ou malaise aigu note', () => {
    const chestPain = makeBaseState({
      dailyLogs: [makeLog(REF_DATE, { symptoms: { ...makeLog(REF_DATE).symptoms, chestPain: true } })],
    });
    const restDyspnoea = makeBaseState({
      dailyLogs: [
        makeLog(REF_DATE, {
          symptoms: { ...makeLog(REF_DATE).symptoms, dyspnoea: 'rest_or_lying' },
        }),
      ],
    });
    const acuteMalaise = makeBaseState({
      dailyLogs: [makeLog(REF_DATE, { notes: 'Episode de syncope ce matin au lever' })],
    });

    for (const s of [chestPain, restDyspnoea, acuteMalaise]) {
      const rule = evaluateDailyVitalsRules(s).find((r) => r.id === 'EPOF_RED_FLAG');
      expect(rule?.severity).toBe('urgent');
      expect(rule?.suggestedActionFr).toContain('15');
      expect(rule?.suggestedActionFr).toContain('112');
    }
  });

  it('EPOF_WORSENING : declenche pour dyspnee effort nouvelle, oedemes aggravants ou fatigue severe, mais pas dyspnee chronique inchangee', () => {
    const newDyspnoea = makeBaseState({
      dailyLogs: [
        makeLog('2026-11-23', { symptoms: { ...makeLog(REF_DATE).symptoms, dyspnoea: 'none' } }),
        makeLog('2026-11-24', { symptoms: { ...makeLog(REF_DATE).symptoms, dyspnoea: 'exertion' } }),
      ],
    });
    const unchangedDyspnoea = makeBaseState({
      dailyLogs: [
        makeLog('2026-11-23', { symptoms: { ...makeLog(REF_DATE).symptoms, dyspnoea: 'exertion' } }),
        makeLog('2026-11-24', { symptoms: { ...makeLog(REF_DATE).symptoms, dyspnoea: 'exertion' } }),
      ],
    });
    const oedemaWorse = makeBaseState({
      dailyLogs: [
        makeLog(REF_DATE, { symptoms: { ...makeLog(REF_DATE).symptoms, oedema: 'worsening' } }),
      ],
    });
    const fatigueSevere = makeBaseState({
      dailyLogs: [
        makeLog(REF_DATE, { symptoms: { ...makeLog(REF_DATE).symptoms, fatigue: 'severe' } }),
      ],
    });

    expect(evaluateDailyVitalsRules(newDyspnoea).some((r) => r.id === 'EPOF_WORSENING')).toBe(true);
    expect(evaluateDailyVitalsRules(unchangedDyspnoea).some((r) => r.id === 'EPOF_WORSENING')).toBe(
      false,
    );
    expect(evaluateDailyVitalsRules(oedemaWorse).some((r) => r.id === 'EPOF_WORSENING')).toBe(true);
    expect(evaluateDailyVitalsRules(fatigueSevere).some((r) => r.id === 'EPOF_WORSENING')).toBe(
      true,
    );
  });

  it('UNPLANNED_WEIGHT_LOSS : borne exacte -4,9 % vs -5,0 % sur fenetre 90-180 jours', () => {
    // 2026-07-27 est a 120 jours avant 2026-11-24
    const loss49 = makeBaseState({
      dailyLogs: [
        makeLog('2026-07-27', { weightKg: 80.0 }),
        makeLog('2026-11-24', { weightKg: 76.1 }), // -4,875 %
      ],
    });
    const loss50 = makeBaseState({
      dailyLogs: [
        makeLog('2026-07-27', { weightKg: 80.0 }),
        makeLog('2026-11-24', { weightKg: 76.0 }), // -5,0 %
      ],
    });
    const tooRecent = makeBaseState({
      dailyLogs: [
        makeLog('2026-10-01', { weightKg: 80.0 }), // 54 jours (< 90)
        makeLog('2026-11-24', { weightKg: 74.0 }),
      ],
    });

    expect(evaluateDailyVitalsRules(loss49).some((r) => r.id === 'UNPLANNED_WEIGHT_LOSS')).toBe(
      false,
    );
    expect(evaluateDailyVitalsRules(loss50).some((r) => r.id === 'UNPLANNED_WEIGHT_LOSS')).toBe(
      true,
    );
    expect(evaluateDailyVitalsRules(tooRecent).some((r) => r.id === 'UNPLANNED_WEIGHT_LOSS')).toBe(
      false,
    );
  });

  it('LOW_BP_SYMPTOMATIC (< 90 + vertiges) vs LOW_BP_ASYMPTOMATIC (< 100 sans vertiges)', () => {
    const symp89 = makeBaseState({
      dailyLogs: [
        makeLog(REF_DATE, {
          systolicBp: 89,
          symptoms: { ...makeLog(REF_DATE).symptoms, dizziness: true },
        }),
      ],
    });
    const asymp95 = makeBaseState({
      dailyLogs: [
        makeLog(REF_DATE, {
          systolicBp: 95,
          symptoms: { ...makeLog(REF_DATE).symptoms, dizziness: false },
        }),
      ],
    });
    const normal100 = makeBaseState({
      dailyLogs: [makeLog(REF_DATE, { systolicBp: 100 })],
    });

    const r1 = evaluateDailyVitalsRules(symp89);
    expect(r1.find((r) => r.id === 'LOW_BP_SYMPTOMATIC')?.severity).toBe('warning');
    expect(r1.some((r) => r.id === 'LOW_BP_ASYMPTOMATIC')).toBe(false);

    const r2 = evaluateDailyVitalsRules(asymp95);
    expect(r2.find((r) => r.id === 'LOW_BP_ASYMPTOMATIC')?.severity).toBe('info');
    expect(r2.some((r) => r.id === 'LOW_BP_SYMPTOMATIC')).toBe(false);

    const r3 = evaluateDailyVitalsRules(normal100);
    expect(r3.some((r) => r.id === 'LOW_BP_SYMPTOMATIC' || r.id === 'LOW_BP_ASYMPTOMATIC')).toBe(
      false,
    );
  });

  it('HR_IVABRADINE_DISCUSSION : rythme sinusal + FEVG <= 35 % + BB cible + FC > 70 bpm (vs 70 bpm ou FA)', () => {
    const hr70 = makeBaseState({
      dailyLogs: [makeLog(REF_DATE, { heartRateBpm: 70 })],
    });
    const hr72 = makeBaseState({
      dailyLogs: [
        makeLog('2026-11-22', { heartRateBpm: 72 }),
        makeLog('2026-11-24', { heartRateBpm: 74 }),
      ],
    });
    const withAf = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        modules: { ...makeBaseState().profile.modules, atrialFibrillation: true },
      },
      dailyLogs: [makeLog(REF_DATE, { heartRateBpm: 78 })],
    });

    expect(evaluateDailyVitalsRules(hr70).some((r) => r.id === 'HR_IVABRADINE_DISCUSSION')).toBe(
      false,
    );
    expect(
      evaluateDailyVitalsRules(hr72).find((r) => r.id === 'HR_IVABRADINE_DISCUSSION')?.severity,
    ).toBe('action');
    expect(evaluateDailyVitalsRules(withAf).some((r) => r.id === 'HR_IVABRADINE_DISCUSSION')).toBe(
      false,
    );
  });
});

describe('medications.rules.ts -- 9 regles et bornes exactes', () => {
  it('GDMT_MISSING_PILLAR : declenche en stade C si un pilier manque sans raison, pas si raison documentee', () => {
    const missingMra = makeBaseState({
      medications: makeFourPillars().filter((m) => m.pillar !== 'mra'),
    });
    const documentedReason = makeBaseState({
      medications: makeFourPillars().map((m) =>
        m.pillar === 'mra'
          ? { ...m, status: 'stopped' as const, notPrescribedReason: 'Hyperkaliemie persistante' }
          : m,
      ),
    });

    expect(evaluateMedicationRules(missingMra).some((r) => r.id === 'GDMT_MISSING_PILLAR')).toBe(
      true,
    );
    expect(
      evaluateMedicationRules(documentedReason).some((r) => r.id === 'GDMT_MISSING_PILLAR'),
    ).toBe(false);
    expect(
      evaluateMedicationRules(makeBaseState()).some((r) => r.id === 'GDMT_MISSING_PILLAR'),
    ).toBe(false);
  });

  it('STAGE_B_CONTEXT et HFIMPEF_CONTINUE : declenchent exactement sur hfStage B et modules.hfImpEf', () => {
    const stageB = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        hfStage: 'B',
        modules: { ...makeBaseState().profile.modules, hfImpEf: true },
      },
    });
    const rules = evaluateMedicationRules(stageB);
    expect(rules.find((r) => r.id === 'STAGE_B_CONTEXT')?.severity).toBe('info');
    expect(rules.find((r) => r.id === 'HFIMPEF_CONTINUE')?.severity).toBe('info');
    expect(rules.some((r) => r.id === 'GDMT_MISSING_PILLAR')).toBe(false);
  });

  it('POST_TITRATION_LABS : declenche si changement <= 14 j sur RAAS/MRA sans bilan ulterieur (creat + K+)', () => {
    const medsChanged = makeFourPillars().map((m) =>
      m.pillar === 'raas_arni' ? { ...m, lastDoseChangeAt: '2026-11-15' } : m,
    );
    const noPostLab = makeBaseState({
      medications: medsChanged,
      labs: [{ date: '2026-11-14', creatinineUmolL: 95, potassiumMmolL: 4.5 }],
    });
    const withPostLab = makeBaseState({
      medications: medsChanged,
      labs: [{ date: '2026-11-22', creatinineUmolL: 98, potassiumMmolL: 4.6 }],
    });
    const tooOldChange = makeBaseState({
      medications: makeFourPillars().map((m) =>
        m.pillar === 'raas_arni' ? { ...m, lastDoseChangeAt: '2026-11-09' } : m, // 15 jours
      ),
    });

    expect(evaluateMedicationRules(noPostLab).some((r) => r.id === 'POST_TITRATION_LABS')).toBe(
      true,
    );
    expect(evaluateMedicationRules(withPostLab).some((r) => r.id === 'POST_TITRATION_LABS')).toBe(
      false,
    );
    expect(evaluateMedicationRules(tooOldChange).some((r) => r.id === 'POST_TITRATION_LABS')).toBe(
      false,
    );
  });

  it('ARNI_WASHOUT_INFO : declenche dans les 30 jours apres relais IEC -> ARNI (30 j vs 31 j)', () => {
    const within30 = makeBaseState({
      medications: makeFourPillars().map((m) =>
        m.pillar === 'raas_arni' ? { ...m, switchedFromAceIAt: '2026-10-25' } : m, // 30 jours
      ),
    });
    const beyond30 = makeBaseState({
      medications: makeFourPillars().map((m) =>
        m.pillar === 'raas_arni' ? { ...m, switchedFromAceIAt: '2026-10-24' } : m, // 31 jours
      ),
    });

    expect(evaluateMedicationRules(within30).find((r) => r.id === 'ARNI_WASHOUT_INFO')?.severity).toBe(
      'warning',
    );
    expect(evaluateMedicationRules(beyond30).some((r) => r.id === 'ARNI_WASHOUT_INFO')).toBe(false);
  });

  it('POTASSIUM_ALERT : bornes K+ 5,4 (aucune) / 5,5-5,6 (warning) / 6,0-6,1 (urgent)', () => {
    const k54 = makeBaseState({ labs: [{ date: REF_DATE, potassiumMmolL: 5.4 }] });
    const k55 = makeBaseState({ labs: [{ date: REF_DATE, potassiumMmolL: 5.5 }] });
    const k56 = makeBaseState({ labs: [{ date: REF_DATE, potassiumMmolL: 5.6 }] });
    const k60 = makeBaseState({ labs: [{ date: REF_DATE, potassiumMmolL: 6.0 }] });
    const k61 = makeBaseState({ labs: [{ date: REF_DATE, potassiumMmolL: 6.1 }] });

    expect(evaluateMedicationRules(k54).some((r) => r.id === 'POTASSIUM_ALERT')).toBe(false);
    expect(evaluateMedicationRules(k55).find((r) => r.id === 'POTASSIUM_ALERT')?.severity).toBe(
      'warning',
    );
    expect(evaluateMedicationRules(k56).find((r) => r.id === 'POTASSIUM_ALERT')?.severity).toBe(
      'warning',
    );
    expect(evaluateMedicationRules(k60).find((r) => r.id === 'POTASSIUM_ALERT')?.severity).toBe(
      'urgent',
    );
    expect(evaluateMedicationRules(k61).find((r) => r.id === 'POTASSIUM_ALERT')?.severity).toBe(
      'urgent',
    );
  });

  it('CREATININE_JUMP : bornes +25 % et +30 % (aucune) vs +35 % (warning)', () => {
    const jump25 = makeBaseState({
      labs: [
        { date: '2026-11-01', creatinineUmolL: 100 },
        { date: '2026-11-20', creatinineUmolL: 125 },
      ],
    });
    const jump30 = makeBaseState({
      labs: [
        { date: '2026-11-01', creatinineUmolL: 100 },
        { date: '2026-11-20', creatinineUmolL: 130 },
      ],
    });
    const jump35 = makeBaseState({
      labs: [
        { date: '2026-11-01', creatinineUmolL: 100 },
        { date: '2026-11-20', creatinineUmolL: 135 },
      ],
    });

    expect(evaluateMedicationRules(jump25).some((r) => r.id === 'CREATININE_JUMP')).toBe(false);
    expect(evaluateMedicationRules(jump30).some((r) => r.id === 'CREATININE_JUMP')).toBe(false);
    expect(evaluateMedicationRules(jump35).find((r) => r.id === 'CREATININE_JUMP')?.severity).toBe(
      'warning',
    );
  });

  it('CONTRAINDICATED_DRUG : detecte AINS, verapamil, diltiazem, moxonidine actifs mais ignore aspirine faible dose ou arret', () => {
    for (const drug of [
      { innName: 'ibuprofene', frenchBrand: 'Advil' },
      { innName: 'verapamil', frenchBrand: 'Isoptine' },
      { innName: 'diltiazem', frenchBrand: 'Tildiem' },
      { innName: 'moxonidine', frenchBrand: 'Physiotens' },
    ]) {
      const state = makeBaseState({
        medications: [
          ...makeFourPillars(),
          { pillar: 'other', innName: drug.innName, frenchBrand: drug.frenchBrand, doseLabel: '1/j', status: 'active' },
        ],
      });
      expect(evaluateMedicationRules(state).find((r) => r.id === 'CONTRAINDICATED_DRUG')?.severity).toBe(
        'warning',
      );
    }

    const safeState = makeBaseState({
      medications: [
        ...makeFourPillars(),
        {
          pillar: 'antiplatelet',
          subClass: 'aspirin_p2y12',
          innName: 'acide acetylsalicylique',
          frenchBrand: 'Kardegic',
          doseLabel: '75 mg/j',
          status: 'active',
        },
        {
          pillar: 'other',
          innName: 'ibuprofene',
          doseLabel: '400 mg',
          status: 'stopped',
        },
      ],
    });
    expect(evaluateMedicationRules(safeState).some((r) => r.id === 'CONTRAINDICATED_DRUG')).toBe(
      false,
    );
  });

  it('SGLT2_KETO_REMINDER : declenche quand un iSGLT2 est actif et s adapte si diabete actif', () => {
    const withSglt2Diabetes = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        modules: { ...makeBaseState().profile.modules, diabetes: true },
      },
    });
    const withoutSglt2 = makeBaseState({
      medications: makeFourPillars().filter((m) => m.pillar !== 'sglt2i'),
    });

    const rule = evaluateMedicationRules(withSglt2Diabetes).find(
      (r) => r.id === 'SGLT2_KETO_REMINDER',
    );
    expect(rule?.severity).toBe('info');
    expect(rule?.explanationFr).toContain('acidocétose');
    expect(evaluateMedicationRules(withoutSglt2).some((r) => r.id === 'SGLT2_KETO_REMINDER')).toBe(
      false,
    );
  });
});
