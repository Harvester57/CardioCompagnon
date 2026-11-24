import { createContext } from 'react';
import type { CardioDatabase } from './database';

export interface DbContextValue {
  db: CardioDatabase;
  isDemoMode: boolean;
  isReady: boolean;
  setDemoMode: (enabled: boolean) => Promise<void>;
  toggleDemoMode: () => Promise<void>;
  resetDemo: () => Promise<void>;
}

export const DbContext = createContext<DbContextValue | null>(null);
