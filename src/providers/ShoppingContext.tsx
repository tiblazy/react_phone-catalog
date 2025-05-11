import { createContext, ReactNode, useEffect, useState } from 'react';
import { ProductDto } from '../dtos/ProductDto';

type Props = {
  favorites: ProductDto[];
  itemsOnCart: ProductDto[];
  handleAddToCart: (item: ProductDto) => void;
  handleToggleOnFavs: (item: ProductDto) => void;
};

export const ShoppingContext = createContext<Props>({
  favorites: [],
  itemsOnCart: [],
  handleAddToCart: () => {},
  handleToggleOnFavs: () => {},
});

export const ShoppingProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<ProductDto[]>(() => {
    const storedFavorites = localStorage.getItem(
      '#mate--catalog-phone!favorites',
    );

    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [itemsOnCart, setItemsOnCart] = useState<ProductDto[]>(() => {
    const storedItemsOnCart = localStorage.getItem('#mate--catalog-phone!cart');

    return storedItemsOnCart ? JSON.parse(storedItemsOnCart) : [];
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

  const handleAddToCart = (item: ProductDto) => {
    const hasAlreadyIn = itemsOnCart.find(itemOn => itemOn.id === item.id);

    if (!hasAlreadyIn) {
      setItemsOnCart([...itemsOnCart, item]);
    }
  };

  const handleToggleOnFavs = (item: ProductDto) => {
    const hasAlreadyIn = favorites.find(favorite => favorite.id === item.id);

    if (hasAlreadyIn) {
      const filterFavorites = favorites.filter(
        favorite => favorite.id !== item.id,
      );

      setFavorites(filterFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <ShoppingContext.Provider
      value={{ favorites, itemsOnCart, handleAddToCart, handleToggleOnFavs }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
