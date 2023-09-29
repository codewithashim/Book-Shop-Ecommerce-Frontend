import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';
import { BannerSevenImage, BannerFiveImage, BannerThreeImage, BannerOneImage, } from '@/src/Assets';


const HomeBestSealSlider = () => {
  const HomeSliderData = [
    {
      id: 1,
      image: BannerSevenImage,
    },
    {
      id: 2,
      image: BannerFiveImage,
    },
    {
      id: 3,
      image: BannerThreeImage,
    },
    {
      id: 4,
      image: BannerOneImage,
    },
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
        className="best-product-swiper">
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

export default HomeBestSealSlider;