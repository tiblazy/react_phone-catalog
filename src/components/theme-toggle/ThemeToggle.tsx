/* eslint-disable import/no-extraneous-dependencies */
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useThemeContext } from '../../hooks/useThemeContext';

export const ThemeToggle = () => {
  const { theme, handleToggleTheme } = useThemeContext();

  return (
    <button className="icon icon--header" onClick={handleToggleTheme}>
      {theme === 'light' ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
};
