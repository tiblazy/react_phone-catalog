import { getCategories } from '../../constants/navLinks';
import { useProductsContext } from '../../hooks/useProductsContext';
import { NavIcon } from '../icons';
import { Logo } from '../logo';
import { MenuToggle } from '../menu-toggle/meu-toggle';
import { Item, NavBar } from '../nav-bar';
import { ThemeToggle } from '../theme-toggle';

export const Header = () => {
  const { products, productsQuery } = useProductsContext();
  const categories = getCategories(products);
  const appLinks: Item[] = [{ name: 'home', route: '/' }, ...categories];

  return (
    <header className="header" id="header">
      <nav className="nav-bar nav-bar--space-between">
        <div className="nav-bar">
          <Logo modifier={'header'} />
          <NavBar items={appLinks} modifier={'header'} />
        </div>

        <ThemeToggle />
        <MenuToggle />
        <ul className="nav-bar__links">
          <NavIcon modifier={'header'} />
        </ul>
      </nav>
    </header>
  );
};
