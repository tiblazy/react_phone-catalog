/* eslint-disable import/no-extraneous-dependencies */
import { IoClose, IoMenu } from 'react-icons/io5';
import { useMenuContext } from '../../hooks/useMenuContext';

export const MenuToggle = () => {
  const { shownMenuState, handleShownMenuState } = useMenuContext();

  return (
    <button
      className="icon icon--header icon--header-menu"
      onClick={handleShownMenuState}
    >
      {shownMenuState ? <IoClose /> : <IoMenu />}
    </button>
  );
};
