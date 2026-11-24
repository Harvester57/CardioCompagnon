import type { BackupEnvelope } from '../types';

export const DEFAULT_PBKDF2_ITERATIONS = 100_000;
export const MIN_PBKDF2_ITERATIONS = 100_000;
export const MAX_PBKDF2_ITERATIONS = 5_000_000;
export const SALT_BYTE_LENGTH = 16;
export const IV_BYTE_LENGTH = 12;
export const AES_KEY_LENGTH_BITS = 256;

export type EncryptedJsonEnvelope = Extract<
  BackupEnvelope,
  { format: 'cardio-compagnon-enc-v1' }
>;

export type CryptoServiceErrorCode =
  | 'CRYPTO_UNAVAILABLE'
  | 'EMPTY_PASSWORD'
  | 'INVALID_BASE64'
  | 'INVALID_ENVELOPE'
  | 'INVALID_PASSWORD';

export class CryptoServiceError extends Error {
  readonly code: CryptoServiceErrorCode;

  constructor(code: CryptoServiceErrorCode, message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'CryptoServiceError';
    this.code = code;
  }
}

export function getWebCrypto(): Crypto {
  const cryptoApi = globalThis.crypto;
  if (!cryptoApi || !cryptoApi.subtle || typeof cryptoApi.getRandomValues !== 'function') {
    throw new CryptoServiceError(
      'CRYPTO_UNAVAILABLE',
      "L'API Web Crypto n'est pas disponible dans cet environnement.",
    );
  }
  return cryptoApi;
}

/**
 * Returns an ArrayBuffer copy suitable for SubtleCrypto across browser and jsdom/Node realms.
 */
export function toSubtleBuffer(bytes: Uint8Array): ArrayBuffer {
  const copy = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(copy).set(bytes);
  return copy;
}

export function generateRandomBytes(length: number): Uint8Array {
  const cryptoApi = getWebCrypto();
  const bytes = new Uint8Array(length);
  cryptoApi.getRandomValues(bytes);
  return bytes;
}

export function bytesToBase64(bytes: Uint8Array): string {
  if (typeof Buffer !== 'undefined' && typeof btoa !== 'function') {
    return Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength).toString('base64');
  }

  const chunkSize = 0x8000;
  let binary = '';
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const slice = bytes.subarray(offset, offset + chunkSize);
    binary += String.fromCharCode(...slice);
  }
  return btoa(binary);
}

export function base64ToBytes(base64: string): Uint8Array {
  if (typeof base64 !== 'string') {
    throw new CryptoServiceError('INVALID_BASE64', 'Chaîne base64 invalide.');
  }

  const trimmed = base64.trim();
  if (trimmed.length === 0) {
    return new Uint8Array(0);
  }

  if (trimmed.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(trimmed)) {
    throw new CryptoServiceError('INVALID_BASE64', 'Encodage base64 invalide ou corrompu.');
  }

  try {
    if (typeof atob === 'function') {
      const binary = atob(trimmed);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i += 1) {
        bytes[i] = binary.charCodeAt(i);
      }
      return bytes;
    }

    if (typeof Buffer !== 'undefined') {
      const buf = Buffer.from(trimmed, 'base64');
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
  } catch (error) {
    throw new CryptoServiceError(
      'INVALID_BASE64',
      'Impossible de décoder la chaîne base64.',
      { cause: error },
    );
  }

  throw new CryptoServiceError(
    'CRYPTO_UNAVAILABLE',
    "Aucun décodeur base64 n'est disponible dans cet environnement.",
  );
}

export function timingSafeEqualBytes(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a[i] ^ b[i];
  }
  return diff === 0;
}

export async function derivePbkdf2Bits(
  secret: string,
  salt: Uint8Array,
  iterations: number,
  bitLength: number,
): Promise<Uint8Array> {
  const cryptoApi = getWebCrypto();
  const encoder = new TextEncoder();
  const keyMaterial = await cryptoApi.subtle.importKey(
    'raw',
    toSubtleBuffer(encoder.encode(secret)),
    { name: 'PBKDF2' },
    false,
    ['deriveBits'],
  );

  const bits = await cryptoApi.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: toSubtleBuffer(salt),
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    bitLength,
  );

  return new Uint8Array(bits);
}

async function deriveAesGcmKey(
  password: string,
  salt: Uint8Array,
  iterations: number,
  usages: KeyUsage[],
): Promise<CryptoKey> {
  const cryptoApi = getWebCrypto();
  const encoder = new TextEncoder();
  const keyMaterial = await cryptoApi.subtle.importKey(
    'raw',
    toSubtleBuffer(encoder.encode(password)),
    { name: 'PBKDF2' },
    false,
    ['deriveKey'],
  );

  return cryptoApi.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: toSubtleBuffer(salt),
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    {
      name: 'AES-GCM',
      length: AES_KEY_LENGTH_BITS,
    },
    false,
    usages,
  );
}

export interface EncryptJsonOptions {
  iterations?: number;
}

export async function encryptJson<T>(
  data: T,
  password: string,
  options?: EncryptJsonOptions,
): Promise<EncryptedJsonEnvelope> {
  if (typeof password !== 'string' || password.length === 0) {
    throw new CryptoServiceError(
      'EMPTY_PASSWORD',
      'Veuillez saisir un mot de passe non vide pour chiffrer vos données.',
    );
  }

  const iterations = options?.iterations ?? DEFAULT_PBKDF2_ITERATIONS;
  if (
    !Number.isInteger(iterations) ||
    iterations < MIN_PBKDF2_ITERATIONS ||
    iterations > MAX_PBKDF2_ITERATIONS
  ) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      `Le nombre d'itérations PBKDF2 doit être compris entre ${MIN_PBKDF2_ITERATIONS} et ${MAX_PBKDF2_ITERATIONS}.`,
    );
  }

  const cryptoApi = getWebCrypto();
  const salt = generateRandomBytes(SALT_BYTE_LENGTH);
  const iv = generateRandomBytes(IV_BYTE_LENGTH);
  const aesKey = await deriveAesGcmKey(password, salt, iterations, ['encrypt']);

  const serialized = JSON.stringify(data);
  if (serialized === undefined) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      'Les données fournies ne peuvent pas être sérialisées en JSON.',
    );
  }

  const plaintext = new TextEncoder().encode(serialized);
  const encryptedBuffer = await cryptoApi.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: toSubtleBuffer(iv),
    },
    aesKey,
    toSubtleBuffer(plaintext),
  );

  return {
    format: 'cardio-compagnon-enc-v1',
    kdf: 'PBKDF2-SHA256',
    iterations,
    saltB64: bytesToBase64(salt),
    ivB64: bytesToBase64(iv),
    ciphertextB64: bytesToBase64(new Uint8Array(encryptedBuffer)),
  };
}

function assertValidEncryptedEnvelope(envelope: unknown): asserts envelope is EncryptedJsonEnvelope {
  if (!envelope || typeof envelope !== 'object') {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      'Enveloppe chiffrée invalide : objet attendu.',
    );
  }

  const candidate = envelope as Record<string, unknown>;
  if (candidate.format !== 'cardio-compagnon-enc-v1') {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      "Format d'enveloppe chiffrée non pris en charge.",
    );
  }
  if (candidate.kdf !== 'PBKDF2-SHA256') {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      'Algorithme de dérivation de clé non pris en charge.',
    );
  }
  if (
    typeof candidate.iterations !== 'number' ||
    !Number.isInteger(candidate.iterations) ||
    candidate.iterations < MIN_PBKDF2_ITERATIONS ||
    candidate.iterations > MAX_PBKDF2_ITERATIONS
  ) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      "Paramètre d'itérations PBKDF2 invalide dans l'enveloppe chiffrée.",
    );
  }
  if (
    typeof candidate.saltB64 !== 'string' ||
    typeof candidate.ivB64 !== 'string' ||
    typeof candidate.ciphertextB64 !== 'string' ||
    candidate.ciphertextB64.trim().length === 0
  ) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      "Champs cryptographiques manquants dans l'enveloppe chiffrée.",
    );
  }
}

export async function decryptJson<T = unknown>(
  envelope: EncryptedJsonEnvelope,
  password: string,
): Promise<T> {
  assertValidEncryptedEnvelope(envelope);

  if (typeof password !== 'string' || password.length === 0) {
    throw new CryptoServiceError(
      'EMPTY_PASSWORD',
      'Veuillez saisir votre mot de passe pour déchiffrer cette sauvegarde.',
    );
  }

  const salt = base64ToBytes(envelope.saltB64);
  const iv = base64ToBytes(envelope.ivB64);
  const ciphertext = base64ToBytes(envelope.ciphertextB64);

  if (salt.length !== SALT_BYTE_LENGTH) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      "Taille du sel cryptographique invalide dans l'enveloppe.",
    );
  }
  if (iv.length !== IV_BYTE_LENGTH) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      "Taille du vecteur d'initialisation (IV) invalide dans l'enveloppe.",
    );
  }
  if (ciphertext.length === 0) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      "Contenu chiffré vide dans l'enveloppe.",
    );
  }

  const cryptoApi = getWebCrypto();
  const aesKey = await deriveAesGcmKey(password, salt, envelope.iterations, ['decrypt']);

  let decryptedBuffer: ArrayBuffer;
  try {
    decryptedBuffer = await cryptoApi.subtle.decrypt(
      {
        name: 'AES-GCM',
        iv: toSubtleBuffer(iv),
      },
      aesKey,
      toSubtleBuffer(ciphertext),
    );
  } catch (error) {
    throw new CryptoServiceError(
      'INVALID_PASSWORD',
      'Mot de passe invalide ou fichier de sauvegarde corrompu. Veuillez vérifier votre mot de passe.',
      { cause: error },
    );
  }

  const jsonText = new TextDecoder().decode(new Uint8Array(decryptedBuffer));
  try {
    return JSON.parse(jsonText) as T;
  } catch (error) {
    throw new CryptoServiceError(
      'INVALID_ENVELOPE',
      "Le contenu déchiffré n'est pas un document JSON valide.",
      { cause: error },
    );
  }
}
