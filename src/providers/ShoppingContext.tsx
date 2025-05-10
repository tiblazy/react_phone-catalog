import { createContext, ReactNode, useEffect, useState } from 'react';
import { ProductDto } from '../dtos/ProductDto';

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

    // console.log(JSON.parse(storedItemsOnCart));

    return storedItemsOnCart ? JSON.parse(storedItemsOnCart) : 0;
  });

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
