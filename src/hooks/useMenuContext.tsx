import { useContext } from 'react';
import { MenuContext } from '../providers/MenuContext';

export const useMenuContext = () => useContext(MenuContext);
