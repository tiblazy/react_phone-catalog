import { MouseEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';

type Props = {
  items: string[];
  navMode: 'navLink' | 'link';
  modifier: string;
};

export const ListItem = ({ items, navMode, modifier }: Props) => {
  const handleUnderConstruction = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('This page is under construction');
  };

  const navType = () => {
    switch (navMode) {
      case 'navLink':
        return items.map((item, index) => (
          <NavLink
            key={index}
            to={item === 'home' ? '/' : `/${item}`}
            className={({ isActive }) =>
              `list-item__item list-item__item--${modifier} list-item__item--animate
                ${isActive ? `list-item__item--${modifier} list-item__item--active` : ''}`
            }
          >
            {item.toUpperCase()}
          </NavLink>
        ));

      case 'link':
        return items.map(item => (
          <Link
            key={item}
            to={
              item === 'github'
                ? 'https://github.com/tiblazy'
                : '/under-construction'
            }
            target="_blank"
            className={`list-item__item list-item__item--${modifier}`}
            onClick={item !== 'github' ? handleUnderConstruction : undefined}
          >
            {item.toUpperCase()}
          </Link>
        ));

      default:
        return <li>No List</li>;
    }
  };

  return <ul className={`list-item list-item--${modifier}`}>{navType()}</ul>;
};
