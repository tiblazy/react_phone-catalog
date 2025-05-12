import { getCategories } from '../../constants/navLinks';
import { useProductsContext } from '../../hooks/useProductsContext';
import { NavIcon } from '../icons';
import { Item, NavBar } from '../nav-bar';

export const Menu = () => {
  const { products, productsQuery } = useProductsContext();
  const categories = getCategories(products);
  const appLinks: Item[] = [{ name: 'home', route: '/' }, ...categories];

  return (
    <div className="menu">
      <div className="menu__container">
        <NavBar items={appLinks} modifier={'menu'} />
        <ul className="menu__icons">
          <NavIcon block={'menu'} modifier={'menu'} />
        </ul>
      </div>
    </div>
  );
};
