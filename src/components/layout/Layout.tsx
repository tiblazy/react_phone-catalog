import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useMenuContext } from '../../hooks/useMenuContext';
import { useProductsContext } from '../../hooks/useProductsContext';
import { useWindowContext } from '../../hooks/useWindowContext';
import { Footer } from '../footer';
import { Header } from '../header';
import { Menu } from '../menu';
import { Spinner } from '../spinner';

export const Layout = () => {
  const { windowWidth } = useWindowContext();
  const { shownMenuState, handleShownMenuState } = useMenuContext();
  const { productsQuery } = useProductsContext();

  useEffect(() => {
    if (windowWidth > 639 && shownMenuState) {
      handleShownMenuState();
    }
  }, [windowWidth, shownMenuState, handleShownMenuState]);

  return (
    <>
      <Header />
      {productsQuery.isLoading && (
        <>
          <div className="page-spinner">
            <Spinner />
          </div>
          <Footer />
        </>
      )}
      {!productsQuery.isLoading && !shownMenuState && (
        <>
          <Outlet />
          <Footer />
        </>
      )}
      {shownMenuState && <Menu />}
    </>
  );
};
