import { createContext, ReactNode, useEffect, useState } from 'react';

type Props = {
  theme: string;
  handleToggleTheme: (theme: string) => void;
};
type ThemeOptions = 'light' | 'dark';

export const ThemeContext = createContext<Props>({
  theme: 'light',
  handleToggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeOptions>(() => {
    const currTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('#mate--catalog-phone!theme');

    return storedTheme
      ? (storedTheme as ThemeOptions)
      : currTheme
        ? 'dark'
        : 'light';
  });

  useEffect(() => {
    localStorage.setItem('#mate--catalog-phone!theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    localStorage.setItem('#mate--catalog-phone!theme', theme);

    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
