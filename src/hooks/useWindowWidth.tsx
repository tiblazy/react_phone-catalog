import { useContext } from 'react';
import { WindowWidthContext } from '../providers/WindowWidth';

export const useWindowWidth = () => useContext(WindowWidthContext);
