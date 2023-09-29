import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';
import { BannerFiveImage, BannerFourImage, BannerThreeImage } from '@/src/Assets';


const ProductSlider = () => {
  const HomeSliderData = [
    {
      id: 1,
      image: BannerFiveImage,
    },
    {
      id: 2,
      image: BannerThreeImage,
    },
    {
      id: 3,
      image: BannerFourImage,
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
                
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;