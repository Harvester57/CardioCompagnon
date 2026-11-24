import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import './ui/theme.css';
import { App } from './app/App';

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  registerSW({ immediate: true });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Element racine #root introuvable.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
