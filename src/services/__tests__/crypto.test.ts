import { describe, expect, it } from 'vitest';
import {
  CryptoServiceError,
  DEFAULT_PBKDF2_ITERATIONS,
  IV_BYTE_LENGTH,
  SALT_BYTE_LENGTH,
  base64ToBytes,
  bytesToBase64,
  decryptJson,
  encryptJson,
} from '../crypto';

describe('crypto service (Web Crypto PBKDF2 + AES-GCM)', () => {
  it('encode et decode des octets en base64 y compris pour de gros tampons', () => {
    const sample = new Uint8Array(70_000);
    for (let i = 0; i < sample.length; i += 1) {
      sample[i] = i % 256;
    }

    const encoded = bytesToBase64(sample);
    const decoded = base64ToBytes(encoded);
    expect(decoded.length).toBe(sample.length);
    expect(decoded[0]).toBe(0);
    expect(decoded[255]).toBe(255);
    expect(decoded[69_999]).toBe(69_999 % 256);
  });

  it('rejette une chaine base64 malformee', () => {
    expect(() => base64ToBytes('%%%non-valide%%%')).toThrow(CryptoServiceError);
  });

  it('chiffre puis dechiffre un objet JSON avec accents francais en roundtrip AES-GCM 256 bits', async () => {
    const original = {
      patient: 'Profil de suivi',
      note: 'Controle NT-proBNP, creatinine a 112 umol/L, LDL a 0,52 g/L, echeance aout.',
      values: [78.4, 78.9, 79.1],
      nested: { active: true, empty: null },
    };

    const envelope = await encryptJson(original, 'MotDePasseSecurise!2026');

    expect(envelope.format).toBe('cardio-compagnon-enc-v1');
    expect(envelope.kdf).toBe('PBKDF2-SHA256');
    expect(envelope.iterations).toBeGreaterThanOrEqual(DEFAULT_PBKDF2_ITERATIONS);
    expect(base64ToBytes(envelope.saltB64).length).toBe(SALT_BYTE_LENGTH);
    expect(base64ToBytes(envelope.ivB64).length).toBe(IV_BYTE_LENGTH);
    expect(envelope.ciphertextB64.length).toBeGreaterThan(0);

    const decrypted = await decryptJson<typeof original>(envelope, 'MotDePasseSecurise!2026');
    expect(decrypted).toEqual(original);
  });

  it('genere un sel et un IV aleatoires differents a chaque chiffrement', async () => {
    const data = { test: 'identique' };
    const env1 = await encryptJson(data, 'Secret1234');
    const env2 = await encryptJson(data, 'Secret1234');

    expect(env1.saltB64).not.toBe(env2.saltB64);
    expect(env1.ivB64).not.toBe(env2.ivB64);
    expect(env1.ciphertextB64).not.toBe(env2.ciphertextB64);
  });

  it('rejette proprement un mauvais mot de passe avec CryptoServiceError INVALID_PASSWORD', async () => {
    const envelope = await encryptJson({ secret: 42 }, 'BonMotDePasse');

    await expect(decryptJson(envelope, 'MauvaisMotDePasse')).rejects.toMatchObject({
      name: 'CryptoServiceError',
      code: 'INVALID_PASSWORD',
    });
  });

  it('rejette un texte chiffre altere (integrite GCM)', async () => {
    const envelope = await encryptJson({ secret: 'integrite' }, 'CleRobuste');
    const cipherBytes = base64ToBytes(envelope.ciphertextB64);
    cipherBytes[0] ^= 0xff;
    const tampered = {
      ...envelope,
      ciphertextB64: bytesToBase64(cipherBytes),
    };

    await expect(decryptJson(tampered, 'CleRobuste')).rejects.toMatchObject({
      name: 'CryptoServiceError',
      code: 'INVALID_PASSWORD',
    });
  });

  it('rejette un mot de passe vide et une enveloppe avec trop peu d iterations', async () => {
    await expect(encryptJson({ a: 1 }, '')).rejects.toMatchObject({
      code: 'EMPTY_PASSWORD',
    });

    await expect(encryptJson({ a: 1 }, 'Valide123', { iterations: 1000 })).rejects.toMatchObject({
      code: 'INVALID_ENVELOPE',
    });

    const validEnvelope = await encryptJson({ a: 1 }, 'Valide123');
    await expect(
      decryptJson({ ...validEnvelope, iterations: 5000 }, 'Valide123'),
    ).rejects.toMatchObject({
      code: 'INVALID_ENVELOPE',
    });
  });
});
