import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '@/public/lgBanner1.jpg';
import banner2 from '@/public/lgBanner2.jpg';
import banner3 from '@/public/lgBanner3.jpg';
import Image from 'next/image';
const ProductSlider = () => {
  const HomeSliderData = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    }
  ];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="product-swiper">
        {HomeSliderData &&
          HomeSliderData.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <Image
                  src={slide.image}
                  alt="slider image"
                  layout="responsive"
                  width={750}
                  height={300}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;