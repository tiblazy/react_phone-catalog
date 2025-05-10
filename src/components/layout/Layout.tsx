import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useMenuContext } from '../../hooks/useMenuContext';
import { useWindowContext } from '../../hooks/useWindowContext';
import { Footer } from '../footer';
import { Header } from '../header';
import { Menu } from '../menu';

export const Layout = () => {
  const { windowWidth } = useWindowContext();
  const { shownMenuState, handleShownMenuState } = useMenuContext();

  useEffect(() => {
    if (windowWidth > 639 && shownMenuState) {
      handleShownMenuState();
    }
  }, [windowWidth, shownMenuState, handleShownMenuState]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {shownMenuState && <Menu />}
    </>
  );
};
