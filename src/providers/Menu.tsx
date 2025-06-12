import { createContext, ReactNode, useEffect, useState } from 'react';
import { useWindowWidth } from '../hooks/useWindowWidth';

type Props = {
  shownMenu: boolean;
  handleToggleMenu: () => void;
};

export const MenuContext = createContext<Props>({
  shownMenu: false,
  handleToggleMenu: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const { windowWidth } = useWindowWidth();
  const [shownMenu, setShownMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShownMenu(!shownMenu);
  };

  useEffect(() => {
    if (windowWidth > 639) {
      setShownMenu(false);
    }
  }, [windowWidth]);

  return (
    <MenuContext.Provider value={{ shownMenu, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
