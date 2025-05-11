/* eslint-disable import/no-extraneous-dependencies */
import { RefObject, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Card } from '../components/card';
import { Section } from '../components/section';
import { SwiperNavigationButton } from '../components/swiper-navigation-button';
import { Typography } from '../components/typography';
import { ProductDto } from '../dtos/ProductDto';
import { useProductsContext } from '../hooks/useProductsContext';

export const HomePage = () => {
  const { products } = useProductsContext();

  const newests = products.sort((a, b) => b.year - a.year).slice(0, 10);

  const handleProductQuantity = (category: string) => {
    return products.reduce((acc, product) => {
      if (product.category === category) {
        // eslint-disable-next-line no-param-reassign
        acc += 1;
      }

      return acc;
    }, 0);
  };

  const swiperRefOne = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateSwiperState = (
    swiperRef: RefObject<SwiperCore>,
    swiperInstance: SwiperClass,
  ) => {
    swiperRef.current = swiperInstance;

    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);

    if (isBeginning) {
      setIsEnd(false);
    }

    if (isEnd) {
      setIsBeginning(false);
    }
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

  const hotPrices = () => {
    return [...products].sort(
      (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price),
    );
  };

  return (
    <>
      {/* <Hero /> */}
      <Section>
        <div className="section__header">
          <div className="section__title">
            <Typography modifier="h2" message={'Brand new models'} />
          </div>
          <div className="section__buttons">
            <SwiperNavigationButton
              navTo="prev"
              isBeginning={isBeginning}
              swiperRef={swiperRefOne}
              modifier="section"
            />
            <SwiperNavigationButton
              navTo="next"
              isEnd={isEnd}
              swiperRef={swiperRefOne}
              modifier="section"
            />
          </div>
        </div>

        <div className="section__carousel">
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            onSwiper={swiper => updateSwiperState(swiperRefOne, swiper)}
            onSlideChange={swiper => updateSwiperState(swiperRefOne, swiper)}
          >
            {newests.map((item: ProductDto) => (
              <SwiperSlide className="section__card-container" key={item.id}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>

      <section className="section">
        <div className="section__header">
          <div className="section__title section__title--by-category">
            <Typography modifier="h2" message="Shop by category" />
          </div>
        </div>
        <ul className="section__by-category section__by-category-list">
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
                <div className="section__by-category-detail">
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

      <Section>
        <div className="section__header">
          <div className="section__title">
            <Typography modifier="h2" message={'Hot prices'} />
          </div>
          <div className="section__buttons">
            <SwiperNavigationButton
              navTo="prev"
              isBeginning={isBeginning}
              swiperRef={swiperRefOne}
              modifier="section"
            />
            <SwiperNavigationButton
              navTo="next"
              isEnd={isEnd}
              swiperRef={swiperRefOne}
              modifier="section"
            />
          </div>
        </div>

        <div className="section__carousel">
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            onSwiper={swiper => updateSwiperState(swiperRefOne, swiper)}
            onSlideChange={swiper => updateSwiperState(swiperRefOne, swiper)}
          >
            {hotPrices()
              .slice(0, 10)
              .map((item: ProductDto) => (
                <SwiperSlide className="section__card-container" key={item.id}>
                  <Card item={item} showFullPrice={true} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Section>
    </>
  );
};
