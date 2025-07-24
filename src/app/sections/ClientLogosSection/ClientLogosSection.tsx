'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ClientLogosSection.module.scss';

const logos = [
  '/ALAIN AFFLELOU blanc.svg',
  '/DOUGLAS blanc.svg',
  '/RENAULT GROUP blanc.svg',
  '/SAINT GOBAIN blanc.svg',
  '/WALIBI blanc.svg',
  '/COMPAGNIE DES ALPES blanc.svg',
  '/MERCEDES BENZ blanc.svg',
  '/AREAS blanc.svg',
];

export const ClientLogosSection = () => {
  return (
    <div className='swiper-container w-full max-w-[1440px] mx-auto py-4'>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={78}
        slidesPerView={3}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className='!flex items-center'
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
        }}
      >
        {logos.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className='flex justify-center items-center h-[86.68px]'
          >
            <img
              src={src}
              alt={`Logo client ${idx + 1}`}
              className='h-full object-contain'
              style={{ maxHeight: '86.68px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
