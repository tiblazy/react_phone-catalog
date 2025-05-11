/* eslint-disable import/no-extraneous-dependencies */
import { FiShoppingBag } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useMenuContext } from '../../hooks/useMenuContext';
import { useShoppingContext } from '../../hooks/useShoppingContext';

type Props = { block?: string; modifier?: string };

export const NavIcon = ({ block, modifier }: Props) => {
  const { handleShownMenuState } = useMenuContext();
  const { favorites, itemsOnCart } = useShoppingContext();

  const links = [
    { icon: <MdFavoriteBorder />, route: 'favorites' },
    { icon: <FiShoppingBag />, route: 'bag' },
  ];

  return links.map(link => (
    <li className={`${block}__icon`} key={link.route}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `icon icon--${modifier} icon--${modifier}-navigation grown grown--active`
            : `icon icon--${modifier} icon--${modifier}-navigation grown`
        }
        to={`/${link.route}`}
        onClick={modifier === 'menu' ? handleShownMenuState : undefined}
      >
        {link.icon}
        {favorites.length > 0 && link.route === 'favorites' && (
          <span className={`icon__counter icon__counter--${modifier}`}>
            {favorites.length}
          </span>
        )}

        {itemsOnCart.length > 0 && link.route === 'bag' && (
          <span className={`icon__counter icon__counter--${modifier}`}>
            {itemsOnCart.length}
          </span>
        )}
      </NavLink>
    </li>
  ));
};
