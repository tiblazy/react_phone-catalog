import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AppProvider } from './providers';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
