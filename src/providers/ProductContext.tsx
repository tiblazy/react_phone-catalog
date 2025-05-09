// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from '@tanstack/react-query';
import { createContext, ReactNode, useState } from 'react';
import { apiProducts } from '../api/productsApi';
import { ProductDto } from '../dtos/ProductDto';

type Props = {
  products: ProductDto[];
  productsQuery: {
    data: ProductDto[] | undefined;
    isLoading: boolean;
    isError: boolean;
  };
  productsByCategory: (category: string) => void;
};

export const ProductContext = createContext<Props>({
  products: [],
  productsQuery: {
    data: [],
    isLoading: false,
    isError: false,
  },
  productsByCategory: () => {},
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  const fetchProducts = async () => {
    const { data } = await apiProducts.get<ProductDto[]>('');

    setProducts(data);

    return data;
  };

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  const productsByCategory = (category: string) => {
    const byCategory = productsQuery.data?.filter(product =>
      product.category.includes(category),
    );

    return byCategory;
  };

  return (
    <ProductContext.Provider
      value={{ products, productsQuery, productsByCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
