import { Link } from 'react-router-dom';
import { Typography } from '../components/typography';
import { useProductsContext } from '../hooks/useProductsContext';

export const HomePage = () => {
  const { products } = useProductsContext();

  const handleProductQuantity = (category: string) => {
    return products.reduce((acc, product) => {
      if (product.category === category) {
        acc += 1;
      }

      return acc;
    }, 0);
  };

  const squareCategory = [
    {
      image: '/img/category-phones.png',
      route: 'phones',
      quantity: handleProductQuantity('phones'),
      category: 'Mobile phones',
    },
    {
      image: '/img/category-tablets.png',
      route: 'tablets',
      quantity: handleProductQuantity('tablets'),
      category: 'Tablets',
    },
    {
      image: '/img/category-accessories.png',
      route: 'accessories',
      quantity: handleProductQuantity('accessories'),
      category: 'Accessories',
    },
  ];

  return (
    <>
      {/* <Hero /> */}
      {/* <Section title="Brand new models">
        <Swiper>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </Section> */}

      <section className="section__by-category">
        <div className="section__title">
          <Typography modifier="h2" message="Shop by category" />
        </div>
        <ul className="section__by-category-list">
          {squareCategory.map(item => (
            <li className="section__by-category-item" key={item.category}>
              <Link className="section__by-category-item" to={`/${item.route}`}>
                <div
                  className={`section__by-category-container section__by-category-container--${item.route}`}
                >
                  <img
                    className={`section__by-category-image section__by-category-image--${item.route}`}
                    src={item.image}
                    alt={item.category}
                  />
                </div>
                <div className='section__by-category-detail'>
                  <Typography modifier="h4" message={item.category} />
                  <Typography
                    modifier="body"
                    message={`${item.quantity} models`}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* <Section title="Hot prices">
        <Swiper>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </Section> */}
    </>
  );
};
