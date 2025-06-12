import { createContext, ReactNode, useEffect, useState } from 'react';
import { ProductDTO } from '../dtos/product-dto';
import { toastInfo } from '../utils/toast';

type Props = {
  cart: ProductDTO[];
  handleSetCart: (product: ProductDTO) => void;
  fav: ProductDTO[];
  handleToggleFav: (index: ProductDTO) => void;
};

export const ProductContext = createContext<Props>({
  cart: [],
  handleSetCart: () => {},
  fav: [],
  handleToggleFav: () => {},
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductDTO[]>(() => {
    const storedCart = localStorage.getItem('mate-cart');

    try {
      if (storedCart) {
        return JSON.parse(storedCart);
      }
    } catch (error) {}

    localStorage.setItem('mate-cart', JSON.stringify([]));

    return [];
  });

  const [fav, setFav] = useState<ProductDTO[]>(() => {
    const storedFav = localStorage.getItem('mate-fav');

    try {
      if (storedFav) {
        return JSON.parse(storedFav);
      }
    } catch (error) {}

    localStorage.setItem('mate-fav', JSON.stringify([]));

    return [];
  });

  const handleSetCart = (product: ProductDTO) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (!existingProduct) {
      setCart(prevCart => [...prevCart, product]);

      return toastInfo('Product added to cart');
    }
  };

  const handleToggleFav = (product: ProductDTO) => {
    const existingProduct = fav.find(item => item.id === product.id);

    if (!existingProduct) {
      setFav(prevFav => [...prevFav, product]);

      return toastInfo('Product added to fav');
    } else {
      setFav(fav.filter((item: ProductDTO) => item.id !== product.id));

      return toastInfo('Product removed from fav');
    }
  };

  useEffect(() => {
    localStorage.setItem('mate-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('mate-fav', JSON.stringify(fav));
  }, [fav]);

  return (
    <ProductContext.Provider
      value={{
        cart,
        handleSetCart,
        fav,
        handleToggleFav,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
