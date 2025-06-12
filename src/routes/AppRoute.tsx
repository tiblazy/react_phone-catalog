import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/phones" element={<App />} />
        <Route path="/cart" element={<App />} />
        <Route path="/fav" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
