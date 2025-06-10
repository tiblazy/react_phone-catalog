import { createContext, ReactNode, useEffect, useState } from 'react';

type Props = {
  windowWidth: number;
  windowHeaderModifier: string;
};

export const WindowWidthContext = createContext<Props>({
  windowWidth: 0,
  windowHeaderModifier: 'mobile',
});

export const WindowWidthProvider = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeaderModifier, setWindowHeaderModifier] =
    useState<string>('mobile');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      switch (true) {
        case windowWidth >= 640 && windowWidth < 1200:
          return setWindowHeaderModifier('tablet');
        case windowWidth > 1199:
          return setWindowHeaderModifier('desktop');
        default:
          return setWindowHeaderModifier('mobile');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <WindowWidthContext.Provider value={{ windowWidth, windowHeaderModifier }}>
      {children}
    </WindowWidthContext.Provider>
  );
};
