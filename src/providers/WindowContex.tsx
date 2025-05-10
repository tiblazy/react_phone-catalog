import { createContext, ReactNode, useEffect, useState } from 'react';

type Props = {
  windowWidth: number;
};

export const WindowContext = createContext<Props>({
  windowWidth: window.innerWidth,
});

export const WindowProvider = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowWidth);

    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, []);

  return (
    <WindowContext.Provider value={{ windowWidth }}>
      {children}
    </WindowContext.Provider>
  );
};
