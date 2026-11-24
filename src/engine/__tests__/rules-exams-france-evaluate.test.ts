import { describe, expect, it } from 'vitest';
import { EXPECTED_ARTICLE_SLUGS } from '../../content/fr/expected-slugs';
import type { PatientState } from '../../types/domain';
import type { RuleId } from '../../types/rules';
import { evaluatePatientState } from '../evaluate';
import { evaluateDrivingRules } from '../rules/driving.rules';
import { evaluateFrenchRightsRules } from '../rules/french-rights.rules';
import { evaluateLabsImagingRules } from '../rules/labs-imaging.rules';

const REF_DATE = '2026-11-24';

const EMOJI_REGEX = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

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
    dailyLogs: [
      {
        date: REF_DATE,
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
        },
        createdAt: `${REF_DATE}T08:00:00.000Z`,
      },
    ],
    medications: [
      {
        id: 1,
        pillar: 'raas_arni',
        subClass: 'arni',
        innName: 'sacubitril/valsartan',
        frenchBrand: 'Entresto',
        doseLabel: '97/103 mg x 2/j',
        status: 'at_target',
      },
      {
        id: 2,
        pillar: 'beta_blocker',
        subClass: 'beta_blocker',
        innName: 'bisoprolol',
        doseLabel: '10 mg/j',
        status: 'at_target',
      },
      {
        id: 3,
        pillar: 'mra',
        subClass: 'steroidal_mra',
        innName: 'eplerenone',
        doseLabel: '50 mg/j',
        status: 'at_target',
      },
      {
        id: 4,
        pillar: 'sglt2i',
        subClass: 'sglt2i',
        innName: 'dapagliflozine',
        doseLabel: '10 mg/j',
        status: 'at_target',
      },
    ],
    doseChanges: [],
    labs: [
      {
        date: '2026-10-01',
        ntProBnpPgMl: 450,
        creatinineUmolL: 92,
        potassiumMmolL: 4.5,
        ferritinUgL: 120,
        tsatPercent: 25,
        ldlGL: 0.5,
        lpaValue: 45,
        lpaUnit: 'nmol/L',
      },
    ],
    imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 42 }],
    events: [
      { date: '2026-10-15', type: 'vaccine_flu', details: {} },
      { date: '2024-05-10', type: 'vaccine_pneumo', details: {} },
    ],
    adminProgress: [
      { itemId: 'ald_5_13', status: 'done' },
      { itemId: 'smr_rehab', status: 'done' },
    ],
    referenceDate: REF_DATE,
    ...overrides,
  };
}

describe('labs-imaging.rules.ts -- 9 regles et bornes exactes', () => {
  it('BNP_ON_ARNI_CAVEAT : declenche uniquement si BNP saisi sous ARNI actif', () => {
    const withBnp = makeBaseState({
      labs: [{ date: '2026-11-01', bnpPgMl: 210 }],
    });
    const withoutArni = makeBaseState({
      medications: makeBaseState().medications.map((m) =>
        m.pillar === 'raas_arni' ? { ...m, subClass: 'ace_i', innName: 'ramipril' } : m,
      ),
      labs: [{ date: '2026-11-01', bnpPgMl: 210 }],
    });

    expect(evaluateLabsImagingRules(withBnp).some((r) => r.id === 'BNP_ON_ARNI_CAVEAT')).toBe(true);
    expect(evaluateLabsImagingRules(withoutArni).some((r) => r.id === 'BNP_ON_ARNI_CAVEAT')).toBe(
      false,
    );
  });

  it('ETT_VS_IRM_DISCORDANCE : declenche si au moins 1 ETT et 1 IRM presents', () => {
    const both = makeBaseState({
      imaging: [
        { date: '2026-01-10', modality: 'ett', lvefPercent: 36 },
        { date: '2026-04-10', modality: 'irm', lvefPercent: 30 },
      ],
    });
    expect(evaluateLabsImagingRules(both).some((r) => r.id === 'ETT_VS_IRM_DISCORDANCE')).toBe(
      true,
    );
    expect(
      evaluateLabsImagingRules(makeBaseState()).some((r) => r.id === 'ETT_VS_IRM_DISCORDANCE'),
    ).toBe(false);
  });

  it('IRON_DEFICIENCY_CHECK : bornes CST < 20 % (19 % vs 20 %) et delai > 365 jours (365 j vs 366 j)', () => {
    const cst19 = makeBaseState({
      labs: [{ date: '2026-11-01', ferritinUgL: 110, tsatPercent: 19 }],
    });
    const cst20At365 = makeBaseState({
      labs: [{ date: '2025-11-24', ferritinUgL: 110, tsatPercent: 20 }], // exactement 365 jours
    });
    const cst25At366 = makeBaseState({
      labs: [{ date: '2025-11-23', ferritinUgL: 110, tsatPercent: 25 }], // 366 jours
    });

    expect(evaluateLabsImagingRules(cst19).some((r) => r.id === 'IRON_DEFICIENCY_CHECK')).toBe(
      true,
    );
    expect(evaluateLabsImagingRules(cst20At365).some((r) => r.id === 'IRON_DEFICIENCY_CHECK')).toBe(
      false,
    );
    expect(evaluateLabsImagingRules(cst25At366).some((r) => r.id === 'IRON_DEFICIENCY_CHECK')).toBe(
      true,
    );
  });

  it('LDL_TARGET_GAP : bornes LDL 0,54 vs 0,56 et baisse -48 % vs -52 %', () => {
    // Baseline 1,20 -> 0,54 = -55 % (cible atteinte)
    const ok54 = makeBaseState({
      profile: { ...makeBaseState().profile, baselineLdlGL: 1.2 },
      labs: [{ date: '2026-11-01', ldlGL: 0.54 }],
    });
    // Baseline 1,20 -> 0,56 = -53,3 % mais >= 0,55 g/L (cible non atteinte)
    const high56 = makeBaseState({
      profile: { ...makeBaseState().profile, baselineLdlGL: 1.2 },
      labs: [{ date: '2026-11-01', ldlGL: 0.56 }],
    });
    // Baseline 1,00 -> 0,52 = -48 % (< 50 % malgre < 0,55 g/L)
    const drop48 = makeBaseState({
      profile: { ...makeBaseState().profile, baselineLdlGL: 1.0 },
      labs: [{ date: '2026-11-01', ldlGL: 0.52 }],
    });
    // Baseline 1,00 -> 0,48 = -52 % (>= 50 % et < 0,55 g/L)
    const drop52 = makeBaseState({
      profile: { ...makeBaseState().profile, baselineLdlGL: 1.0 },
      labs: [{ date: '2026-11-01', ldlGL: 0.48 }],
    });

    expect(evaluateLabsImagingRules(ok54).some((r) => r.id === 'LDL_TARGET_GAP')).toBe(false);
    expect(evaluateLabsImagingRules(high56).some((r) => r.id === 'LDL_TARGET_GAP')).toBe(true);
    expect(evaluateLabsImagingRules(drop48).some((r) => r.id === 'LDL_TARGET_GAP')).toBe(true);
    expect(evaluateLabsImagingRules(drop52).some((r) => r.id === 'LDL_TARGET_GAP')).toBe(false);
  });

  it('LPA_ONE_OFF : declenche si aucun lpaValue enregistre', () => {
    const noLpa = makeBaseState({ labs: [{ date: '2026-10-01', ldlGL: 0.5 }] });
    expect(evaluateLabsImagingRules(noLpa).some((r) => r.id === 'LPA_ONE_OFF')).toBe(true);
    expect(evaluateLabsImagingRules(makeBaseState()).some((r) => r.id === 'LPA_ONE_OFF')).toBe(
      false,
    );
  });

  it('ICD_REASSESSMENT_3M et CRT_QRS_DISCUSSION : bornes FEVG <= 35 % et QRS >= 130 ms', () => {
    const qrs129 = makeBaseState({
      imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 35 }],
      events: [{ date: '2026-10-01', type: 'ecg_check', details: { qrsMs: 129, lbbb: false } }],
    });
    const qrs130 = makeBaseState({
      imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 35 }],
      events: [{ date: '2026-10-01', type: 'ecg_check', details: { qrsMs: 130, lbbb: true } }],
    });
    const alreadyCrt = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        modules: { ...makeBaseState().profile.modules, device: 'crt_d' },
      },
      imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 30 }],
      events: [{ date: '2026-10-01', type: 'ecg_check', details: { qrsMs: 150, lbbb: true } }],
    });

    const r129 = evaluateLabsImagingRules(qrs129);
    expect(r129.some((r) => r.id === 'ICD_REASSESSMENT_3M')).toBe(true);
    expect(r129.some((r) => r.id === 'CRT_QRS_DISCUSSION')).toBe(false);

    const r130 = evaluateLabsImagingRules(qrs130);
    expect(r130.some((r) => r.id === 'ICD_REASSESSMENT_3M')).toBe(true);
    expect(r130.some((r) => r.id === 'CRT_QRS_DISCUSSION')).toBe(true);

    const rCrt = evaluateLabsImagingRules(alreadyCrt);
    expect(rCrt.some((r) => r.id === 'ICD_REASSESSMENT_3M')).toBe(false);
    expect(rCrt.some((r) => r.id === 'CRT_QRS_DISCUSSION')).toBe(false);
  });

  it('AS_LOW_FLOW_CAVEAT (FEVG <= 40 %) et CSA_ASV_CONTRAINDICATION (SACS + FEVG <= 45 %)', () => {
    const activeBoth = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        modules: {
          ...makeBaseState().profile.modules,
          aorticStenosis: true,
          sleepApnoea: 'csa',
        },
      },
      imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 40 }],
    });
    const csaOnly45 = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        modules: {
          ...makeBaseState().profile.modules,
          aorticStenosis: true,
          sleepApnoea: 'csa',
        },
      },
      imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 45 }],
    });
    const osa40 = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        modules: { ...makeBaseState().profile.modules, sleepApnoea: 'osa' },
      },
      imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 40 }],
    });

    const r40 = evaluateLabsImagingRules(activeBoth);
    expect(r40.find((r) => r.id === 'AS_LOW_FLOW_CAVEAT')?.severity).toBe('info');
    expect(r40.find((r) => r.id === 'CSA_ASV_CONTRAINDICATION')?.severity).toBe('warning');

    const r45 = evaluateLabsImagingRules(csaOnly45);
    expect(r45.some((r) => r.id === 'AS_LOW_FLOW_CAVEAT')).toBe(false);
    expect(r45.find((r) => r.id === 'CSA_ASV_CONTRAINDICATION')?.severity).toBe('warning');

    expect(evaluateLabsImagingRules(osa40).some((r) => r.id === 'CSA_ASV_CONTRAINDICATION')).toBe(
      false,
    );
  });
});

describe('french-rights.rules.ts & driving.rules.ts -- 7 regles', () => {
  it('FR_ALD_CHECK et FR_SMR_REHAB : declenchent si absents ou todo, pas si done/in_progress', () => {
    const todo = makeBaseState({
      adminProgress: [
        { itemId: 'ald_5_13', status: 'todo' },
        { itemId: 'smr_rehab', status: 'todo' },
      ],
    });
    const inProgress = makeBaseState({
      adminProgress: [
        { itemId: 'ald_5_13', status: 'in_progress' },
        { itemId: 'smr_rehab', status: 'done' },
      ],
    });

    const rTodo = evaluateFrenchRightsRules(todo);
    expect(rTodo.some((r) => r.id === 'FR_ALD_CHECK')).toBe(true);
    expect(rTodo.some((r) => r.id === 'FR_SMR_REHAB')).toBe(true);

    const rProg = evaluateFrenchRightsRules(inProgress);
    expect(rProg.some((r) => r.id === 'FR_ALD_CHECK')).toBe(false);
    expect(rProg.some((r) => r.id === 'FR_SMR_REHAB')).toBe(false);
  });

  it('FR_TELESURVEILLANCE : declenche sur hospitalisation IC < 365 j ou NYHA >= 2 + NT-proBNP >= 1000', () => {
    const recentHosp = makeBaseState({
      events: [
        ...makeBaseState().events,
        { date: '2026-01-10', type: 'hf_hospitalisation', details: {} },
      ],
    });
    const highBnp = makeBaseState({
      labs: [{ date: '2026-11-01', ntProBnpPgMl: 1200 }],
    });
    const lowBnpNoHosp = makeBaseState({
      labs: [{ date: '2026-11-01', ntProBnpPgMl: 600 }],
    });

    expect(evaluateFrenchRightsRules(recentHosp).some((r) => r.id === 'FR_TELESURVEILLANCE')).toBe(
      true,
    );
    expect(evaluateFrenchRightsRules(highBnp).some((r) => r.id === 'FR_TELESURVEILLANCE')).toBe(
      true,
    );
    expect(evaluateFrenchRightsRules(lowBnpNoHosp).some((r) => r.id === 'FR_TELESURVEILLANCE')).toBe(
      false,
    );
  });

  it('FR_SICK_LEAVE_2026 : declenche sur arret prolonge sans ALD obtenue, pas avec ALD done', () => {
    const withoutAld = makeBaseState({
      profile: { ...makeBaseState().profile, onExtendedSickLeave: true },
      adminProgress: [{ itemId: 'ald_5_13', status: 'in_progress' }],
    });
    const withAldDone = makeBaseState({
      profile: { ...makeBaseState().profile, onExtendedSickLeave: true },
      adminProgress: [{ itemId: 'ald_5_13', status: 'done' }],
    });

    expect(
      evaluateFrenchRightsRules(withoutAld).find((r) => r.id === 'FR_SICK_LEAVE_2026')?.severity,
    ).toBe('warning');
    expect(evaluateFrenchRightsRules(withAldDone).some((r) => r.id === 'FR_SICK_LEAVE_2026')).toBe(
      false,
    );
  });

  it('VACCINES_ANNUAL : declenche si grippe > 365 j ou pneumocoque absent', () => {
    const ok = makeBaseState();
    const expiredFlu = makeBaseState({
      events: [
        { date: '2025-11-23', type: 'vaccine_flu', details: {} }, // 366 jours
        { date: '2024-05-10', type: 'vaccine_pneumo', details: {} },
      ],
    });
    const noPneumo = makeBaseState({
      events: [{ date: '2026-10-15', type: 'vaccine_flu', details: {} }],
    });

    expect(evaluateFrenchRightsRules(ok).some((r) => r.id === 'VACCINES_ANNUAL')).toBe(false);
    expect(evaluateFrenchRightsRules(expiredFlu).some((r) => r.id === 'VACCINES_ANNUAL')).toBe(
      true,
    );
    expect(evaluateFrenchRightsRules(noPneumo).some((r) => r.id === 'VACCINES_ANNUAL')).toBe(true);
  });

  it('FR_DRIVING_LIFEVEST et FR_DRIVING_ICD_OR_NYHA', () => {
    const lifeVest = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        modules: { ...makeBaseState().profile.modules, lifeVest: true },
      },
    });
    const group1Icd = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        drivingGroup: 'group1',
        modules: { ...makeBaseState().profile.modules, device: 'icd_primary' },
      },
    });
    const group2LowEf = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        drivingGroup: 'group2',
      },
      imaging: [{ date: '2026-10-01', modality: 'ett', lvefPercent: 30 }],
    });
    const noDriving = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        drivingGroup: 'none',
        nyhaClass: 3,
        modules: { ...makeBaseState().profile.modules, device: 'icd_secondary' },
      },
    });

    expect(evaluateDrivingRules(lifeVest).find((r) => r.id === 'FR_DRIVING_LIFEVEST')?.severity).toBe(
      'warning',
    );
    expect(
      evaluateDrivingRules(group1Icd).find((r) => r.id === 'FR_DRIVING_ICD_OR_NYHA')?.severity,
    ).toBe('action');
    expect(
      evaluateDrivingRules(group2LowEf).find((r) => r.id === 'FR_DRIVING_ICD_OR_NYHA')?.severity,
    ).toBe('warning');
    expect(evaluateDrivingRules(noDriving).some((r) => r.id === 'FR_DRIVING_ICD_OR_NYHA')).toBe(
      false,
    );
  });
});

describe('evaluatePatientState -- orchestrateur, tri, triage, deduplication et invariants globaux', () => {
  it('trie les outputs par severite decroissante (urgent -> warning -> action -> info) et deduplique prioritizedQuestionIds', () => {
    const complexState = makeBaseState({
      profile: {
        ...makeBaseState().profile,
        onExtendedSickLeave: true,
        modules: {
          ...makeBaseState().profile.modules,
          hfImpEf: true,
          lifeVest: true,
          device: 'icd_primary',
        },
      },
      dailyLogs: [
        {
          date: REF_DATE,
          weightKg: 81.0, // +3 kg vs dryWeight 78 -> warning
          systolicBp: 85,
          diastolicBp: 55,
          heartRateBpm: 72,
          symptoms: {
            dyspnoea: 'rest_or_lying', // urgent
            oedema: 'worsening', // warning
            fatigue: 'moderate',
            dizziness: true, // warning
            palpitations: false,
            chestPain: false,
            persistentCough: false,
            appetiteLoss: false,
          },
          createdAt: `${REF_DATE}T08:00:00.000Z`,
        },
      ],
      adminProgress: [], // FR_ALD_CHECK (action), FR_SMR_REHAB (action), FR_SICK_LEAVE_2026 (warning)
    });

    const result = evaluatePatientState(complexState);
    expect(result.triageLevel).toBe('urgent');
    expect(result.triageSummaryFr).toContain('15');

    const rank = { urgent: 0, warning: 1, action: 2, info: 3 };
    for (let i = 1; i < result.outputs.length; i += 1) {
      expect(rank[result.outputs[i - 1].severity]).toBeLessThanOrEqual(
        rank[result.outputs[i].severity],
      );
    }

    // Verification deduplication (q_driving_rules apparait sur FR_DRIVING_LIFEVEST et FR_DRIVING_ICD_OR_NYHA)
    const uniqueSet = new Set(result.prioritizedQuestionIds);
    expect(uniqueSet.size).toBe(result.prioritizedQuestionIds.length);
  });

  it('retourne triageLevel stable quand seules des regles action ou info sont presentes', () => {
    const result = evaluatePatientState(makeBaseState());
    expect(result.triageLevel).toBe('stable');
    expect(result.triageSummaryFr).toContain('Aucun signal');
  });

  it('est 100 % deterministe et ignore les donnees posterieures a referenceDate', () => {
    const state = makeBaseState({
      dailyLogs: [
        ...makeBaseState().dailyLogs,
        {
          date: '2026-11-26', // futur par rapport a 2026-11-24
          weightKg: 85.0,
          systolicBp: 70,
          symptoms: {
            dyspnoea: 'rest_or_lying',
            oedema: 'worsening',
            fatigue: 'severe',
            dizziness: true,
            palpitations: true,
            chestPain: true,
            persistentCough: false,
            appetiteLoss: false,
          },
          createdAt: '2026-11-26T08:00:00.000Z',
        },
      ],
    });

    const eval1 = evaluatePatientState(state);
    const eval2 = evaluatePatientState(state);
    expect(eval1).toEqual(eval2);
    expect(eval1.triageLevel).toBe('stable');
  });

  it('couvre les 32 RuleId, garantit que tous les articleSlug appartiennent a EXPECTED_ARTICLE_SLUGS et zero emoji', () => {
    const allowedSlugs = new Set<string>(EXPECTED_ARTICLE_SLUGS);
    const triggeredIds = new Set<RuleId>();

    const scenarios: PatientState[] = [
      // Scenario 1 : alertes aigues, poids, TA sympto, IVABRADINE, GDMT manquant, post-titration, washout, K+ urgent, creat jump, AINS, SGLT2, BNP+ARNI, ETT+IRM, CST<20, LDL haut, pas de Lp(a), ICD 3m, CRT QRS>=130, AS, SACS, ALD, SMR, Telesurv, IJ 2026, LifeVest, Permis, Vaccins
      {
        profile: {
          id: 'active',
          sex: 'M',
          hfStage: 'C',
          nyhaClass: 3,
          ischaemicCauseConfirmed: 'yes',
          dryWeightKg: 78.0,
          baselineLdlGL: 1.5,
          drivingGroup: 'group2',
          onExtendedSickLeave: true,
          modules: {
            hfImpEf: true,
            cto: false,
            aorticStenosis: true,
            lvThrombusOrAneurysm: false,
            atrialFibrillation: false,
            ckd: true,
            diabetes: true,
            sleepApnoea: 'csa',
            lifeVest: true,
            device: 'none',
          },
          careTeam: {},
          updatedAt: '2026-11-24T08:00:00.000Z',
        },
        dailyLogs: [
          {
            date: '2026-07-20',
            weightKg: 88.0,
            symptoms: {
              dyspnoea: 'none',
              oedema: 'none',
              fatigue: 'none',
              dizziness: false,
              palpitations: false,
              chestPain: false,
              persistentCough: false,
              appetiteLoss: false,
            },
            createdAt: '2026-07-20T08:00:00.000Z',
          },
          {
            date: '2026-11-22',
            weightKg: 78.0,
            heartRateBpm: 76,
            symptoms: {
              dyspnoea: 'none',
              oedema: 'none',
              fatigue: 'none',
              dizziness: false,
              palpitations: false,
              chestPain: false,
              persistentCough: false,
              appetiteLoss: false,
            },
            createdAt: '2026-11-22T08:00:00.000Z',
          },
          {
            date: '2026-11-24',
            weightKg: 81.0, // +3 kg en 2j ET -8 % vs 88 kg il y a 127 j
            systolicBp: 85,
            heartRateBpm: 78,
            symptoms: {
              dyspnoea: 'rest_or_lying',
              oedema: 'worsening',
              fatigue: 'severe',
              dizziness: true,
              palpitations: false,
              chestPain: true,
              persistentCough: false,
              appetiteLoss: false,
            },
            createdAt: '2026-11-24T08:00:00.000Z',
          },
        ],
        medications: [
          {
            id: 1,
            pillar: 'raas_arni',
            subClass: 'arni',
            innName: 'sacubitril/valsartan',
            doseLabel: '49/51 mg x 2/j',
            status: 'titrating',
            switchedFromAceIAt: '2026-11-10',
            lastDoseChangeAt: '2026-11-18',
          },
          {
            id: 2,
            pillar: 'beta_blocker',
            subClass: 'beta_blocker',
            innName: 'bisoprolol',
            doseLabel: '10 mg/j',
            status: 'at_target',
          },
          {
            id: 4,
            pillar: 'sglt2i',
            subClass: 'sglt2i',
            innName: 'dapagliflozine',
            doseLabel: '10 mg/j',
            status: 'active',
          },
          {
            id: 5,
            pillar: 'other',
            innName: 'ibuprofene',
            doseLabel: '400 mg',
            status: 'active',
          },
        ],
        doseChanges: [],
        labs: [
          { date: '2026-10-01', creatinineUmolL: 100, potassiumMmolL: 4.5 },
          {
            date: '2026-11-15',
            bnpPgMl: 300,
            ntProBnpPgMl: 1800,
            creatinineUmolL: 140,
            potassiumMmolL: 6.1,
            tsatPercent: 15,
            ldlGL: 0.7,
          },
        ],
        imaging: [
          { date: '2026-05-01', modality: 'irm', lvefPercent: 30 },
          { date: '2026-10-01', modality: 'ett', lvefPercent: 32 },
        ],
        events: [{ date: '2026-10-01', type: 'ecg_check', details: { qrsMs: 148, lbbb: true } }],
        adminProgress: [],
        referenceDate: REF_DATE,
      },
      // Scenario 2 : STAGE_B_CONTEXT + LOW_BP_ASYMPTOMATIC
      makeBaseState({
        profile: { ...makeBaseState().profile, hfStage: 'B' },
        dailyLogs: [
          {
            date: REF_DATE,
            weightKg: 78.0,
            systolicBp: 94,
            symptoms: {
              dyspnoea: 'none',
              oedema: 'none',
              fatigue: 'none',
              dizziness: false,
              palpitations: false,
              chestPain: false,
              persistentCough: false,
              appetiteLoss: false,
            },
            createdAt: `${REF_DATE}T08:00:00.000Z`,
          },
        ],
      }),
    ];

    for (const sc of scenarios) {
      const evalRes = evaluatePatientState(sc);
      expect(EMOJI_REGEX.test(evalRes.triageSummaryFr)).toBe(false);
      for (const out of evalRes.outputs) {
        triggeredIds.add(out.id);
        expect(allowedSlugs.has(out.articleSlug)).toBe(true);
        expect(EMOJI_REGEX.test(out.titleFr)).toBe(false);
        expect(EMOJI_REGEX.test(out.explanationFr)).toBe(false);
        expect(EMOJI_REGEX.test(out.suggestedActionFr)).toBe(false);
      }
    }

    expect(triggeredIds.size).toBe(32);
  });
});
