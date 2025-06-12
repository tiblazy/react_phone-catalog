import { ToastContainer } from 'react-toastify';
import './App.scss';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Menu } from './components/menu';
import { ProductCard } from './components/product-card';
import { useMenu } from './hooks/uesMenu';
import products from '/public/api/products.json';

export const App = () => {
  const { shownMenu } = useMenu();

  return (
    <div className="App">
      <ToastContainer />
      {shownMenu ? (
        <>
          <Header />
          <Menu />
        </>
      ) : (
        <>
          <Header />
          {products.slice(0, 5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
          <Footer />
        </>
      )}
    </div>
  );
};
