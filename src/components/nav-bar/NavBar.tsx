import { NavLink } from 'react-router-dom';
import { useMenuContext } from '../../hooks/useMenuContext';

export type Item = { name: string; route: string };

type Props = {
  items: Item[];
  element?: string;
  modifier?: string;
};

export const NavBar = ({
  items,
  element = 'link',
  modifier = 'header',
}: Props) => {
  const { handleShownMenuState } = useMenuContext();

  return (
    <ul className={`nav-bar__${element}s nav-bar__${element}s--${modifier}`}>
      {items.map((item: Item) => (
        <li key={item.route}>
          {
            <NavLink
              to={item.route}
              onClick={modifier === 'menu' ? handleShownMenuState : undefined}
              className={({ isActive }) =>
                isActive
                  ? `nav-bar__${element} nav-bar__${element}--${modifier} nav-bar__${element}--selected grown grown--active`
                  : `nav-bar__${element} nav-bar__${element}--${modifier} grown`
              }
            >
              {item.name}
            </NavLink>
          }
        </li>
      ))}
    </ul>
  );
};
