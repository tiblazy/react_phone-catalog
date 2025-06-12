import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { ListItem } from '../list-item';
import { Logo } from '../logo';
import { Toggle } from '../toggle';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const { windowHeaderModifier } = useWindowWidth();
  const items = ['home', 'phones', 'tablets', 'accessories'];

  const iconRoutes = [
    {
      to: '/fav',
      icon: <FaRegHeart />,
    },

    {
      to: '/cart',
      icon: <FiShoppingBag />,
    },
  ].map(item => (
    <NavLink
      key={item.to}
      to={item.to}
      className={({ isActive }) =>
        `icon icon--animate icon--header icon--header-desktop
                ${isActive ? `icon--active` : ''}`
      }
    >
      {item.icon}
    </NavLink>
  ));

  return (
    <header className="header" id="header">
      <nav className="header__nav">
        <Logo modifier="header" viewport={windowHeaderModifier} />

        {windowHeaderModifier !== 'mobile' && (
          <ListItem items={items} navMode="navLink" modifier="header" />
        )}
      </nav>

      <div className="header__icons">
        <div className="icon icon--header icon--header-mobile">
          <Toggle />
        </div>

        {iconRoutes}
      </div>
    </header>
  );
};
