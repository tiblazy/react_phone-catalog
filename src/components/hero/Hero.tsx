/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useRef } from 'react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import { useProductsContext } from '../../hooks/useProductsContext';
import { useWindowContext } from '../../hooks/useWindowContext';
import { SwiperNavigationButton } from '../swiper-navigation-button';
import { Typography } from '../typography';

export const Hero = () => {
  const { windowWidth } = useWindowContext();
  const { productsQuery } = useProductsContext();
  const swiperRef = useRef<SwiperCore | null>(null);
  const swiperPaginationRef = useRef<HTMLDivElement | null>(null);

  const updateSwiperState = (swiperInstance: SwiperClass) => {
    swiperRef.current = swiperInstance;
  };

  useEffect(() => {
    if (swiperRef.current && swiperPaginationRef.current) {
      const swiperInstance = swiperRef.current;
      const paginationEl = swiperPaginationRef.current;

      if (
        typeof swiperInstance.params.pagination === 'object' &&
        swiperInstance.params.pagination !== null
      ) {
        swiperInstance.params.pagination.el = paginationEl;
        swiperInstance.pagination.destroy();
        swiperInstance.pagination.init();
        swiperInstance.pagination.render();
        swiperInstance.pagination.update();
      }
    }
  }, [productsQuery.isSuccess]);

  const heroImages = Array(3).fill({
    square: '/img/hero-square.png',
    banner: '/img/hero-banner.png',
  });

  return (
    <div className="hero">
      <Typography modifier="h1" message="Welcome to Nice Gadgets store!" />

      {!productsQuery.isLoading && (
        <div className="hero__container">
          <div className="hero__buttons">
            <SwiperNavigationButton
              navTo="prev"
              swiperRef={swiperRef}
              modifier="hero"
            />
          </div>
          <div className="hero__carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSlideChange={updateSwiperState}
              onSwiper={updateSwiperState}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
              loop={true}
            >
              {heroImages.map((heroImage, index) => (
                <SwiperSlide className="hero__item" key={index}>
                  <img
                    className="hero__banner"
                    src={
                      windowWidth < 640 ? heroImage.square : heroImage.banner
                    }
                    alt="banner"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hero__buttons">
            <SwiperNavigationButton
              navTo="next"
              swiperRef={swiperRef}
              modifier="hero"
            />
          </div>

          <div className="hero__bullets">
            <div
              ref={swiperPaginationRef}
              className="swiper-pagination swiper-pagination-clickable"
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
