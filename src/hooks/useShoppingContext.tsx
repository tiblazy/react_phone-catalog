import { useContext } from 'react';
import { ShoppingContext } from '../providers/ShoppingContext';

export const useShoppingContext = () => useContext(ShoppingContext);
