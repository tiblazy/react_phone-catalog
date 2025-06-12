import { createRoot } from 'react-dom/client';
import { MenuProvider } from './providers/Menu';
import { ProductProvider } from './providers/Product';
import { ThemeProvider } from './providers/Theme';
import { WindowWidthProvider } from './providers/WindowWidth';
import { AppRoute } from './routes/AppRoute';

createRoot(document.getElementById('root') as HTMLElement).render(
  <WindowWidthProvider>
    <ThemeProvider>
      <ProductProvider>
        <MenuProvider>
          <AppRoute />
        </MenuProvider>
      </ProductProvider>
    </ThemeProvider>
  </WindowWidthProvider>,
);
