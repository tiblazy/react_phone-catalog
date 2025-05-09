import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../hooks/useThemeContext';
import logoDark from '/img/logo-dark.png';
import logoLight from '/img/logo-light.png';

type Props = {
  modifier?: 'header' | 'footer';
};

export const Logo = ({ modifier }: Props) => {
  const { theme } = useThemeContext();

  const navigate = useNavigate();

  return (
    <button className={`logo logo--${modifier}`} onClick={() => navigate('/')}>
      <img
        className="logo__image"
        src={theme === 'light' ? logoLight : logoDark}
        alt={theme === 'light' ? logoLight : logoDark}
      />
    </button>
  );
};
