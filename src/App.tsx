import { ToastContainer } from 'react-toastify';
import './App.scss';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { ProductCard } from './components/product-card';
import products from '/public/api/products.json';

export const App = () => (
  <div className="App">
    <ToastContainer />
    <Header />
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
    <Footer />
  </div>
);
