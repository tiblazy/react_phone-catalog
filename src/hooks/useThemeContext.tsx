import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeContext';

export const useThemeContext = () => useContext(ThemeContext);
