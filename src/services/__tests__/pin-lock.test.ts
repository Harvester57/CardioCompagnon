import { describe, expect, it } from 'vitest';
import { hashPin, isValidNumericPin, verifyPin } from '../pin-lock';

describe('pin-lock service (PBKDF2 SHA-256 sale)', () => {
  it('hache un code PIN avec un sel aleatoire et ne contient jamais le PIN en clair', async () => {
    const pin = '2468';
    const first = await hashPin(pin);
    const second = await hashPin(pin);

    expect(first.hash.length).toBeGreaterThan(20);
    expect(first.salt.length).toBeGreaterThan(10);
    expect(first.hash).not.toContain(pin);
    expect(first.salt).not.toContain(pin);

    expect(first.salt).not.toBe(second.salt);
    expect(first.hash).not.toBe(second.hash);
  });

  it('produit un hachage deterministe lorsqu un sel existant est fourni', async () => {
    const first = await hashPin('135790');
    const recomputed = await hashPin('135790', first.salt);

    expect(recomputed.salt).toBe(first.salt);
    expect(recomputed.hash).toBe(first.hash);
  });

  it('verifie correctement un PIN valide et rejette un mauvais PIN ou des parametres corrompus', async () => {
    const { hash, salt } = await hashPin('4826');

    expect(await verifyPin('4826', hash, salt)).toBe(true);
    expect(await verifyPin('4827', hash, salt)).toBe(false);
    expect(await verifyPin('', hash, salt)).toBe(false);
    expect(await verifyPin('4826', 'hash-invalide', salt)).toBe(false);
    expect(await verifyPin('4826', hash, 'sel-invalide!')).toBe(false);
  });

  it('rejette un PIN trop court lors du hachage et valide le format numerique', async () => {
    await expect(hashPin('123')).rejects.toThrow(/au moins 4/);
    expect(isValidNumericPin('1234')).toBe(true);
    expect(isValidNumericPin('123456')).toBe(true);
    expect(isValidNumericPin('123')).toBe(false);
    expect(isValidNumericPin('12ab')).toBe(false);
  });
});
