import {
  DEFAULT_PBKDF2_ITERATIONS,
  SALT_BYTE_LENGTH,
  base64ToBytes,
  bytesToBase64,
  derivePbkdf2Bits,
  generateRandomBytes,
  timingSafeEqualBytes,
} from './crypto';

export const PIN_PBKDF2_ITERATIONS = DEFAULT_PBKDF2_ITERATIONS;
export const PIN_HASH_BIT_LENGTH = 256;
export const PIN_MIN_LENGTH = 4;

export interface HashedPin {
  hash: string;
  salt: string;
}

export function isValidNumericPin(pin: string, minDigits = 4, maxDigits = 8): boolean {
  if (typeof pin !== 'string') {
    return false;
  }
  const pattern = new RegExp(`^\\d{${minDigits},${maxDigits}}$`);
  return pattern.test(pin);
}

export async function hashPin(pin: string, existingSalt?: string): Promise<HashedPin> {
  if (typeof pin !== 'string' || pin.trim().length < PIN_MIN_LENGTH) {
    throw new Error(
      `Veuillez saisir un code PIN contenant au moins ${PIN_MIN_LENGTH} caractères.`,
    );
  }

  let saltBytes: Uint8Array;
  let saltB64: string;

  if (existingSalt !== undefined) {
    if (typeof existingSalt !== 'string' || existingSalt.trim().length === 0) {
      throw new Error('Le sel cryptographique fourni pour le code PIN est invalide.');
    }
    saltBytes = base64ToBytes(existingSalt);
    if (saltBytes.length === 0) {
      throw new Error('Le sel cryptographique fourni pour le code PIN est vide.');
    }
    saltB64 = existingSalt.trim();
  } else {
    saltBytes = generateRandomBytes(SALT_BYTE_LENGTH);
    saltB64 = bytesToBase64(saltBytes);
  }

  const derivedBytes = await derivePbkdf2Bits(
    pin,
    saltBytes,
    PIN_PBKDF2_ITERATIONS,
    PIN_HASH_BIT_LENGTH,
  );

  return {
    hash: bytesToBase64(derivedBytes),
    salt: saltB64,
  };
}

export async function verifyPin(pin: string, hash: string, salt: string): Promise<boolean> {
  if (
    typeof pin !== 'string' ||
    pin.trim().length < PIN_MIN_LENGTH ||
    typeof hash !== 'string' ||
    hash.trim().length === 0 ||
    typeof salt !== 'string' ||
    salt.trim().length === 0
  ) {
    return false;
  }

  try {
    const expectedHashBytes = base64ToBytes(hash);
    if (expectedHashBytes.length !== PIN_HASH_BIT_LENGTH / 8) {
      return false;
    }

    const computed = await hashPin(pin, salt);
    const computedHashBytes = base64ToBytes(computed.hash);
    return timingSafeEqualBytes(computedHashBytes, expectedHashBytes);
  } catch {
    return false;
  }
}
