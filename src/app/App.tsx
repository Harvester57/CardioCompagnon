import { DbProvider } from '../db';
import { PinLockGate } from './PinLockGate';
import { AppRoutes } from './routes';

export function App() {
  return (
    <DbProvider>
      <PinLockGate>
        <AppRoutes />
      </PinLockGate>
    </DbProvider>
  );
}

export default App;
