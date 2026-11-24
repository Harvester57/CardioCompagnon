export const PIN_SESSION_STORAGE_KEY = 'cardio_compagnon_pin_unlocked_hash';

export function readUnlockedPinHash(): string | null {
  try {
    return window.sessionStorage.getItem(PIN_SESSION_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function writeUnlockedPinHash(pinHash: string): void {
  try {
    window.sessionStorage.setItem(PIN_SESSION_STORAGE_KEY, pinHash);
  } catch {
    // Stockage de session indisponible (navigation privee stricte)
  }
}

export function clearPinSessionUnlock(): void {
  try {
    window.sessionStorage.removeItem(PIN_SESSION_STORAGE_KEY);
  } catch {
    // Stockage de session indisponible
  }
}
