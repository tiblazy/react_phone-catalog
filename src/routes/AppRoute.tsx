import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { CategoryPage, HomePage, NotFoundPage, ProductPage } from '../modules';

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:name" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
