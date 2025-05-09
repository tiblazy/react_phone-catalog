import { useContext } from 'react';
import { ProductContext } from '../providers/ProductContext';

export const useProductsContext = () => useContext(ProductContext);
