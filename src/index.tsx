// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { MenuProvider } from './providers/MenuContext';
import { ProductProvider } from './providers/ProductContext';
import { ThemeProvider } from './providers/ThemeContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ProductProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </ProductProvider>
    </ThemeProvider>
  </QueryClientProvider>,
);
