import { describe, expect, it } from 'vitest';
import {
  CREATININE_MGL_TO_UMOLL_FACTOR,
  LDL_GL_TO_MMOLL_FACTOR,
  creatinineMgLToUmolL,
  creatinineUmolLToMgL,
  formatCreatinineFr,
  formatFrenchNumber,
  formatLdlFr,
  formatPotassiumFr,
  formatWeightKgFr,
  ldlGlToMmolL,
  ldlMmolLToGl,
} from '../units';

describe('units -- conversions et formatage francais', () => {
  it('convertit le LDL de g/L vers mmol/L et inversement avec le facteur 2,586', () => {
    expect(LDL_GL_TO_MMOLL_FACTOR).toBe(2.586);
    expect(ldlGlToMmolL(0.55)).toBe(1.42);
    expect(ldlGlToMmolL(1.0)).toBe(2.59);
    expect(ldlMmolLToGl(1.42)).toBe(0.55);
    expect(ldlMmolLToGl(2.586)).toBe(1.0);
  });

  it('convertit la creatinine de umol/L vers mg/L et inversement avec le facteur 8,84', () => {
    expect(CREATININE_MGL_TO_UMOLL_FACTOR).toBe(8.84);
    expect(creatinineUmolLToMgL(88.4)).toBe(10.0);
    expect(creatinineUmolLToMgL(106)).toBe(12.0);
    expect(creatinineMgLToUmolL(10)).toBe(88);
    expect(creatinineMgLToUmolL(12)).toBe(106);
  });

  it('formate les nombres avec virgule decimale francaise', () => {
    expect(formatFrenchNumber(0.55, 2)).toBe('0,55');
    expect(formatFrenchNumber(2.0, 1)).toBe('2,0');
    expect(formatFrenchNumber(-0, 1)).toBe('0,0');
    expect(formatLdlFr(0.55)).toBe('0,55 g/L (1,42 mmol/L)');
    expect(formatCreatinineFr(106)).toBe('106 µmol/L (12,0 mg/L)');
    expect(formatWeightKgFr(78.5)).toBe('78,5 kg');
    expect(formatPotassiumFr(5.6)).toBe('5,6 mmol/L');
  });
});
