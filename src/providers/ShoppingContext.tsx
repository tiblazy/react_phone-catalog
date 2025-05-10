import { createContext, ReactNode, useEffect, useState } from 'react';
import { ProductDto } from '../dtos/ProductDto';
import { useProductsContext } from '../hooks/useProductsContext';

type Props = {
  favorites: ProductDto[];
  itemsOnCart: ProductDto[];
};

export const ShoppingContext = createContext<Props>({
  favorites: [],
  itemsOnCart: [],
});

export const ShoppingProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ProductDto[]>(() => {
    const storedFavorites = localStorage.getItem(
      '#mate--catalog-phone!favorites',
    );

    return storedFavorites ? JSON.parse(storedFavorites) : 0;
  });
  const [itemsOnCart, setItemsOnCart] = useState<ProductDto[]>(() => {
    const storedItemsOnCart = localStorage.getItem('#mate--catalog-phone!cart');

    return storedItemsOnCart ? JSON.parse(storedItemsOnCart) : 0;
  });

  // const { products } = useProductsContext();
  // const handleErrorCommit = () => {
  //   setFavorites([...favorites, products[0]]);
  //   setItemsOnCart([...itemsOnCart, products[0]]);
  // };

  // handleErrorCommit();

  useEffect(() => {
    localStorage.setItem(
      '#mate--catalog-phone!favorites',
      JSON.stringify(favorites),
    );

    localStorage.setItem(
      '#mate--catalog-phone!cart',
      JSON.stringify(itemsOnCart),
    );
  }, [favorites, itemsOnCart]);

  return (
    <ShoppingContext.Provider value={{ favorites, itemsOnCart }}>
      {children}
    </ShoppingContext.Provider>
  );
};
