import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { ListItem } from '../list-item';

export const Menu = () => {
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
        `icon icon--animate icon--menu
                  ${isActive ? `icon--active` : ''}`
      }
    >
      {item.icon}
    </NavLink>
  ));

  return (
    <div className="menu">
      <ListItem items={items} navMode="navLink" modifier="menu" />

      <div className="menu__icons">{iconRoutes}</div>
    </div>
  );
};
