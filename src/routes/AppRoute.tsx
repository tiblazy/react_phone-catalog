import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/phones" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
