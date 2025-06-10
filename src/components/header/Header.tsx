import { useWindowWidth } from '../../hooks/useWindowWidth';
import { ListItem } from '../list-item';
import { Logo } from '../logo';
import { Toggle } from '../toggle';

export const Header = () => {
  const { windowHeaderModifier } = useWindowWidth();
  const items = ['home', 'phones', 'tablets', 'accessories'];

  return (
    <header className="header">
      <nav className="header__nav">
        <Logo modifier="header" viewport={windowHeaderModifier} />

        {windowHeaderModifier !== 'mobile' && (
          <ListItem items={items} navMode="navLink" modifier="header" />
        )}
      </nav>

      <Toggle />
    </header>
  );
};
