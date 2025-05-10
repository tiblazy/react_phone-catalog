import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MenuProvider } from './MenuContext';
import { ProductProvider } from './ProductContext';
import { ThemeProvider } from './ThemeContext';
import { WindowProvider } from './WindowContex';
import { ShoppingProvider } from './ShoppingContext';

const queryClient = new QueryClient();

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WindowProvider>
        <ThemeProvider>
          <ShoppingProvider>
            <ProductProvider>
              <MenuProvider>{children}</MenuProvider>
            </ProductProvider>
          </ShoppingProvider>
        </ThemeProvider>
      </WindowProvider>
    </QueryClientProvider>
  );
};
