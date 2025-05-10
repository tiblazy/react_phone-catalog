import { useContext } from 'react';
import { WindowContext } from '../providers/WindowContex';

export const useWindowContext = () => useContext(WindowContext);
