import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Icon } from '../icon';

export const Toggle = () => {
  const [toggleMode, setToggleMode] = useState<boolean>(false);

  return (
    <button onClick={() => setToggleMode(!toggleMode)}>
      {toggleMode ? (
        <Icon IconElement={IoMdClose} />
      ) : (
        <Icon IconElement={GiHamburgerMenu} />
      )}
    </button>
  );
};
