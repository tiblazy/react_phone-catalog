import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  modifier: string;
  viewport: string;
};

export const Logo = ({ modifier, viewport }: Props) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate('/')}>
      <img
        className={`logo__image--${modifier}-${viewport}`}
        src={`/img/logo-${theme === 'light' ? 'light' : 'dark'}.png`}
        alt="nice-gadgets"
      />
    </div>
  );
};
