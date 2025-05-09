import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { HomePage, NotFoundPage } from '../modules';

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
