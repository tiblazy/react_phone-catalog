import { useProductsContext } from '../../hooks/useProductsContext';
import { Logo } from '../logo';
import { Item, NavBar } from '../nav-bar';

// eslint-disable-next-line import/no-extraneous-dependencies
import { FiShoppingBag } from 'react-icons/fi';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdFavoriteBorder } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ProductDto } from '../../dtos/ProductDto';
import { MenuToggle } from '../menu-toggle/meu-toggle';
import { ThemeToggle } from '../theme-toggle';

export const Header = () => {
  const counter = 2;
  const { products } = useProductsContext();

  const categories = [
    ...new Set(products.map((product: ProductDto) => product.category)),
  ].map(category => {
    return { name: category, route: category };
  });

  const headerRouteLinks: Item[] = [
    { name: 'home', route: '/' },
    ...categories,
  ];

  const headerIconLinks = [
    { icon: <MdFavoriteBorder size={20} />, route: 'favorites' },
    { icon: <FiShoppingBag size={20} />, route: 'bag' },
  ];

  return (
    <header className="header" id="header">
      <nav className="nav-bar nav-bar--space-between">
        <div className="nav-bar">
          <Logo modifier={'header'} />
          <NavBar items={headerRouteLinks} modifier={'header'} />
        </div>

        <ThemeToggle />
        <MenuToggle />
        <ul className="nav-bar__links">
          {headerIconLinks.map(headerIconLink => (
            <li key={headerIconLink.route}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'icon icon--header icon--navigation grown grown--active'
                    : 'icon icon--header icon--navigation grown'
                }
                to={`/${headerIconLink.route}`}
              >
                {headerIconLink.icon}
                {counter > 0 && <span className="icon__counter">10</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
