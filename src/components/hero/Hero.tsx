/* eslint-disable import/no-extraneous-dependencies */
import { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PaginationOptions, Swiper as SwiperClass } from 'swiper/types';
import { ProductDto } from '../../dtos/ProductDto';
import { useProductsContext } from '../../hooks/useProductsContext';
import { SwiperNavigationButton } from '../swiper-navigation-button';

export const Hero = () => {
  const { products } = useProductsContext();
  const swiperRef = useRef<SwiperCore | null>(null);
  const swiperPaginationRef = useRef<HTMLDivElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const tempProd = products.slice(0, 3);

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
    }
  };

  return (
    <div className="hero">
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
            {tempProd.map((temP: ProductDto) => (
              <SwiperSlide className="hero__item" key={temP.id}>
                <div className="card">{temP.name}</div>
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
