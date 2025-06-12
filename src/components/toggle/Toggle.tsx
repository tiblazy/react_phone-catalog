import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useMenu } from '../../hooks/uesMenu';
import { Icon } from '../icon';

export const Toggle = () => {
  const { shownMenu, handleToggleMenu } = useMenu();

  return (
    <button onClick={handleToggleMenu} className="icon icon--header">
      {shownMenu ? (
        <Icon IconElement={IoMdClose} />
      ) : (
        <Icon IconElement={GiHamburgerMenu} />
      )}
    </button>
  );
};
