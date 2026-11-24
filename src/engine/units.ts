/**
 * Conversions d'unités biologiques et formatage français (virgule décimale).
 * Fonctions 100 % pures, sans dépendance à la locale système.
 */

export const LDL_GL_TO_MMOLL_FACTOR = 2.586;
export const CREATININE_MGL_TO_UMOLL_FACTOR = 8.84;

function roundTo(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}

/** Convertit le cholestérol LDL de g/L vers mmol/L (facteur 2,586). */
export function ldlGlToMmolL(gL: number, decimals = 2): number {
  return roundTo(gL * LDL_GL_TO_MMOLL_FACTOR, decimals);
}

/** Convertit le cholestérol LDL de mmol/L vers g/L (facteur 2,586). */
export function ldlMmolLToGl(mmolL: number, decimals = 2): number {
  return roundTo(mmolL / LDL_GL_TO_MMOLL_FACTOR, decimals);
}

/** Convertit la créatinine de µmol/L vers mg/L (facteur 8,84). */
export function creatinineUmolLToMgL(umolL: number, decimals = 1): number {
  return roundTo(umolL / CREATININE_MGL_TO_UMOLL_FACTOR, decimals);
}

/** Convertit la créatinine de mg/L vers µmol/L (facteur 8,84). */
export function creatinineMgLToUmolL(mgL: number, decimals = 0): number {
  return roundTo(mgL * CREATININE_MGL_TO_UMOLL_FACTOR, decimals);
}

/** Formate un nombre avec une virgule décimale française (ex. 0,55 ou 2,0). */
export function formatFrenchNumber(value: number, decimals = 1): string {
  const normalized = Object.is(roundTo(value, decimals), -0) ? 0 : roundTo(value, decimals);
  return normalized.toFixed(decimals).replace('.', ',');
}

/** Formate un LDL en g/L avec équivalence secondaire en mmol/L (ex. « 0,55 g/L (1,42 mmol/L) »). */
export function formatLdlFr(gL: number): string {
  const glStr = formatFrenchNumber(gL, 2);
  const mmolStr = formatFrenchNumber(ldlGlToMmolL(gL, 2), 2);
  return `${glStr} g/L (${mmolStr} mmol/L)`;
}

/** Formate une créatinine en µmol/L avec équivalence en mg/L (ex. « 106 µmol/L (12,0 mg/L) »). */
export function formatCreatinineFr(umolL: number): string {
  const umolStr = formatFrenchNumber(umolL, 0);
  const mgStr = formatFrenchNumber(creatinineUmolLToMgL(umolL, 1), 1);
  return `${umolStr} µmol/L (${mgStr} mg/L)`;
}

/** Formate un poids en kilogrammes avec virgule décimale (ex. « 78,5 kg »). */
export function formatWeightKgFr(weightKg: number): string {
  return `${formatFrenchNumber(weightKg, 1)} kg`;
}

/** Formate une kaliémie en mmol/L avec virgule décimale (ex. « 5,6 mmol/L »). */
export function formatPotassiumFr(potassiumMmolL: number): string {
  return `${formatFrenchNumber(potassiumMmolL, 1)} mmol/L`;
}
