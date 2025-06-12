import { useContext } from 'react';
import { ProductContext } from '../providers/Product';

export const useProducts = () => useContext(ProductContext);
