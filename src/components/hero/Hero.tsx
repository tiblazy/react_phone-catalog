/* eslint-disable import/no-extraneous-dependencies */
import { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PaginationOptions, Swiper as SwiperClass } from 'swiper/types';
import { useWindowContext } from '../../hooks/useWindowContext';
import { SwiperNavigationButton } from '../swiper-navigation-button';
import { Typography } from '../typography';

export const Hero = () => {
  const { windowWidth } = useWindowContext();
  const swiperRef = useRef<SwiperCore | null>(null);
  const swiperPaginationRef = useRef<HTMLDivElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateSwiperState = (swiperInstance: SwiperClass) => {
    swiperRef.current = swiperInstance;

    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);

    if (isBeginning) {
      setIsEnd(false);
    }

    if (isEnd) {
      setIsBeginning(false);
    }

    const paginationEl = swiperPaginationRef.current;
    const current = swiperInstance.realIndex;
    const total = swiperInstance.slides.length;

    const bulletPosition =
      current === 0 ? 'start' : current === total - 1 ? 'end' : 'middle';

    if (
      paginationEl &&
      typeof swiperInstance.params.pagination === 'object' &&
      swiperInstance.params.pagination !== null
    ) {
      const newPagination: PaginationOptions = {
        ...swiperInstance.params.pagination,
        el: paginationEl,
      };

      // eslint-disable-next-line no-param-reassign
      swiperInstance.params.pagination = newPagination;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();

      if (bulletPosition === 'start') {
        setIsEnd(false);
        setIsBeginning(true);
      }

      if (bulletPosition === 'end') {
        setIsBeginning(false);
        setIsEnd(true);
      }
    }
  };

  const heroImages = Array(3).fill({
    square: '/img/hero-square.png',
    banner: '/img/hero-banner.png',
  });

  return (
    <div className="hero">
      <Typography modifier="h1" message="Welcome to Nice Gadgets store!" />
      <div className="hero__container">
        <div className="hero__buttons">
          <SwiperNavigationButton
            navTo="prev"
            swiperRef={swiperRef}
            isBeginning={isBeginning}
            modifier="hero"
          />
        </div>
        <div className="hero__carousel">
          <Swiper
            modules={[Navigation, Pagination]}
            onSlideChange={updateSwiperState}
            onSwiper={updateSwiperState}
            pagination={{
              el: swiperPaginationRef.current,
              clickable: true,
            }}
          >
            {heroImages.map((heroImage, index) => (
              <SwiperSlide className="hero__item" key={index}>
                <img
                  className="hero__banner"
                  src={windowWidth < 640 ? heroImage.square : heroImage.banner}
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
            isEnd={isEnd}
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
    </div>
  );
};
