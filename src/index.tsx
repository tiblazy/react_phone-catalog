import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './providers/Theme';
import { WindowWidthProvider } from './providers/WindowWidth';
import { AppRoute } from './routes/AppRoute';

createRoot(document.getElementById('root') as HTMLElement).render(
  <WindowWidthProvider>
    <ThemeProvider>
      <AppRoute />
    </ThemeProvider>
  </WindowWidthProvider>,
);
