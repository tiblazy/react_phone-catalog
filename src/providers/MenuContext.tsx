import { createContext, ReactNode, useState } from 'react';

type Props = {
  shownMenuState: boolean;
  handleShownMenuState: () => void;
};

export const MenuContext = createContext<Props>({
  shownMenuState: false,
  handleShownMenuState: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [shownMenuState, setShownMenuState] = useState<boolean>(false);

  const handleShownMenuState = () => {
    setShownMenuState(!shownMenuState);
  };

  return (
    <MenuContext.Provider value={{ shownMenuState, handleShownMenuState }}>
      {children}
    </MenuContext.Provider>
  );
};
