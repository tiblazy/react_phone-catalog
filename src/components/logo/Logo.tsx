import { useNavigate } from 'react-router-dom';
import logoDark from '/img/logo-dark.png';
import logoLight from '/img/logo-light.png';

type Theme = 'light' | 'dark';
type Props = {
  modifier?: 'header' | 'footer';
};

export const Logo = ({ modifier }: Props) => {
  const theme: Theme = 'light';
  const themeBased: string = theme === 'light' ? logoLight : logoDark;
  const navigate = useNavigate();

  return (
    <button className={`logo logo--${modifier}`} onClick={() => navigate('/')}>
      <img className="logo__image" src={themeBased} alt={themeBased} />
    </button>
  );
};
