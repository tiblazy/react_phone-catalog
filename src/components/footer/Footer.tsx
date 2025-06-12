import { IoIosArrowUp } from 'react-icons/io';
import { Icon } from '../icon';
import { ListItem } from '../list-item';
import { Logo } from '../logo';

export const Footer = () => {
  const items = ['github', 'contacts', 'rights'];

  const handleToHeader = () => {
    document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Logo modifier="footer" viewport="mobile" />
        </div>

        <div className="footer__links">
          <ListItem items={items} navMode="link" modifier="footer" />
        </div>

        <div className="footer__back-to-top">
          <p className="footer__back-to-top-title">Back to top</p>
          <button className="icon icon--footer" onClick={handleToHeader}>
            <Icon IconElement={IoIosArrowUp} />
          </button>
        </div>
      </div>
    </footer>
  );
};
