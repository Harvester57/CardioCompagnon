import { describe, expect, it } from 'vitest';
import type { DrivingAssessmentInput } from '../../types/rules';
import { evaluateFrenchDrivingFitness } from '../driving-calculator';

function makeInput(overrides: Partial<DrivingAssessmentInput> = {}): DrivingAssessmentInput {
  return {
    group: 'group1',
    nyhaClass: 2,
    lvefPercent: 35,
    hasLifeVest: false,
    device: 'none',
    hadRecentShock: 'none',
    ...overrides,
  };
}

describe('evaluateFrenchDrivingFitness -- Arrete du 28 mars 2022 & Directive UE 2016/1106', () => {
  it('interdit la conduite en groupe 1 pendant le port du gilet LifeVest (§1.2.6)', () => {
    const res = evaluateFrenchDrivingFitness(makeInput({ hasLifeVest: true, group: 'group1' }));
    expect(res.status).toBe('temporarily_incompatible');
    expect(res.legalBasisFr).toContain('28 mars 2022');
    expect(res.legalBasisFr).toContain('1.2.6');
    expect(res.nextStepsFr.join(' ')).toContain('médecin agréé');
  });

  it('declare une incompatibilite permanente en groupe 2 avec gilet LifeVest', () => {
    const res = evaluateFrenchDrivingFitness(makeInput({ hasLifeVest: true, group: 'group2' }));
    expect(res.status).toBe('permanently_incompatible');
    expect(res.legalBasisFr).toContain('1.2.6');
  });

  it('declare une incompatibilite permanente en stade NYHA IV (groupe 1 et groupe 2)', () => {
    const g1 = evaluateFrenchDrivingFitness(makeInput({ group: 'group1', nyhaClass: 4 }));
    const g2 = evaluateFrenchDrivingFitness(makeInput({ group: 'group2', nyhaClass: 4 }));
    expect(g1.status).toBe('permanently_incompatible');
    expect(g2.status).toBe('permanently_incompatible');
  });

  it('distingue NYHA III entre groupe 1 (temporaire) et groupe 2 (permanente)', () => {
    const g1 = evaluateFrenchDrivingFitness(makeInput({ group: 'group1', nyhaClass: 3 }));
    const g2 = evaluateFrenchDrivingFitness(makeInput({ group: 'group2', nyhaClass: 3 }));
    expect(g1.status).toBe('temporarily_incompatible');
    expect(g2.status).toBe('permanently_incompatible');
  });

  it('declare le groupe 2 incompatible avec un DAI (primaire, secondaire ou CRT-D)', () => {
    for (const device of ['icd_primary', 'icd_secondary', 'crt_d'] as const) {
      const res = evaluateFrenchDrivingFitness(
        makeInput({ group: 'group2', device, lvefPercent: 40 }),
      );
      expect(res.status).toBe('permanently_incompatible');
      expect(res.legalBasisFr).toContain('2016/1106');
    }
  });

  it('verifie le seuil de FEVG >= 35 % en groupe 2 (34 % incompatible vs 35 % compatible apres avis)', () => {
    const low = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group2', nyhaClass: 2, lvefPercent: 34 }),
    );
    const ok = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group2', nyhaClass: 2, lvefPercent: 35 }),
    );
    const unknown = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group2', nyhaClass: 2, lvefPercent: undefined }),
    );

    expect(low.status).toBe('temporarily_incompatible');
    expect(ok.status).toBe('compatible_after_clearance');
    expect(unknown.status).toBe('specialist_assessment_required');
  });

  it('applique le delai de 4 semaines apres DAI prevention primaire en groupe 1 (27 j vs 28 j)', () => {
    const waiting = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group1', device: 'icd_primary', daysSinceIcdImplant: 27 }),
    );
    const cleared = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group1', device: 'icd_primary', daysSinceIcdImplant: 28 }),
    );
    expect(waiting.status).toBe('temporarily_incompatible');
    expect(waiting.minWaitWeeks).toBe(4);
    expect(cleared.status).toBe('compatible_after_clearance');
  });

  it('applique le delai >= 12 semaines apres DAI prevention secondaire en groupe 1 (83 j vs 84 j)', () => {
    const waiting = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group1', device: 'icd_secondary', daysSinceIcdImplant: 83 }),
    );
    const cleared = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group1', device: 'icd_secondary', daysSinceIcdImplant: 84 }),
    );
    expect(waiting.status).toBe('temporarily_incompatible');
    expect(waiting.minWaitWeeks).toBe(12);
    expect(cleared.status).toBe('compatible_after_clearance');
  });

  it('distingue choc approprie (12 semaines) et choc inapproprie (avis specialise apres correction)', () => {
    const appropriate = evaluateFrenchDrivingFitness(
      makeInput({
        group: 'group1',
        device: 'icd_primary',
        daysSinceIcdImplant: 120,
        hadRecentShock: 'appropriate',
      }),
    );
    const inappropriate = evaluateFrenchDrivingFitness(
      makeInput({
        group: 'group1',
        device: 'icd_primary',
        daysSinceIcdImplant: 120,
        hadRecentShock: 'inappropriate',
      }),
    );
    expect(appropriate.status).toBe('temporarily_incompatible');
    expect(appropriate.minWaitWeeks).toBe(12);
    expect(inappropriate.status).toBe('specialist_assessment_required');
  });

  it('applique les delais post-IDM, post-angioplastie programmee et post-pontage en groupe 1 et 2', () => {
    const miG1Wait = evaluateFrenchDrivingFitness(makeInput({ group: 'group1', daysSinceMi: 20 }));
    const miG1Done = evaluateFrenchDrivingFitness(makeInput({ group: 'group1', daysSinceMi: 30 }));
    const pciG1Wait = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group1', daysSincePlannedPci: 14 }),
    );
    const cabgG1Wait = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group1', daysSinceCabg: 21 }),
    );
    const cabgG2Wait = evaluateFrenchDrivingFitness(
      makeInput({ group: 'group2', lvefPercent: 45, daysSinceCabg: 60 }),
    );

    expect(miG1Wait.status).toBe('temporarily_incompatible');
    expect(miG1Wait.minWaitWeeks).toBe(4);
    expect(miG1Done.status).toBe('compatible_after_clearance');
    expect(pciG1Wait.status).toBe('temporarily_incompatible');
    expect(pciG1Wait.minWaitWeeks).toBe(4);
    expect(cabgG1Wait.status).toBe('temporarily_incompatible');
    expect(cabgG1Wait.minWaitWeeks).toBe(4);
    expect(cabgG2Wait.status).toBe('temporarily_incompatible');
    expect(cabgG2Wait.minWaitWeeks).toBe(12);
  });

  it('retient le delai maximal quand plusieurs suspensions temporaires se cumulent et cite toujours le medecin agree distinct du medecin traitant', () => {
    const res = evaluateFrenchDrivingFitness(
      makeInput({
        group: 'group1',
        device: 'icd_primary',
        daysSinceIcdImplant: 10,
        hadRecentShock: 'appropriate',
        daysSinceMi: 15,
      }),
    );
    expect(res.status).toBe('temporarily_incompatible');
    expect(res.minWaitWeeks).toBe(12);
    expect(res.nextStepsFr.join(' ')).toContain('distinct de votre médecin traitant');
  });
});
