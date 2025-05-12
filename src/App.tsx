// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-loading-skeleton/dist/skeleton.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.scss';
import { AppRoute } from './routes/AppRoute';

export const App = () => {
  return <AppRoute />;
};
