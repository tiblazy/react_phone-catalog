import { useContext } from 'react';
import { MenuContext } from '../providers/Menu';

export const useMenu = () => useContext(MenuContext);
