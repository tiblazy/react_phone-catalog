/* eslint-disable import/no-extraneous-dependencies */
import { RefObject } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Swiper as SwiperType } from 'swiper';

type Props = {
  navTo: 'prev' | 'next';
  swiperRef: RefObject<SwiperType>;
  isBeginning?: boolean;
  isEnd?: boolean;
  modifier?: string;
};

export const SwiperNavigationButton = ({
  navTo,
  swiperRef,
  isBeginning = false,
  isEnd = false,
  modifier,
}: Props) => {
  const handleSwiperNavigationClick = () => {
    if (!swiperRef.current) {
      return;
    }

    return navTo === 'prev'
      ? swiperRef.current.slidePrev()
      : swiperRef.current.slideNext();
  };

  const isDisabled =
    (navTo === 'prev' && isBeginning) || (navTo === 'next' && isEnd);

  return (
    <button
      className={`${isDisabled ? `swiper-button swiper-button--disabled swiper-button--${modifier}` : `swiper-button swiper-button--${modifier}`}`}
      onClick={handleSwiperNavigationClick}
    >
      {navTo === 'prev' ? <FaAngleLeft /> : <FaAngleRight />}
    </button>
  );
};
