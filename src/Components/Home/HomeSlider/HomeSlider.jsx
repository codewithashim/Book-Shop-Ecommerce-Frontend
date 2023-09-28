import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import {
  HomeSlider_1,
  HomeSlider_2,
  HomeSlider_3,
  HomeSlider_4
} from "@/src/Assets";

const HomeSliderData = [
  {
    id: 1,
    image: HomeSlider_1,
  },
  {
    id: 2,
    image: HomeSlider_2,
  },
  {
    id: 3,
    image: HomeSlider_3,
  },
  {
    id: 4,
    image: HomeSlider_4,
  }
];

const HeroSlider = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper heroSlider"
      >
        {HomeSliderData &&
          HomeSliderData.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <Image
                  src={slide.image}
                  alt="slider image"
                  layout="responsive"
                  width={750}
                  height={500}
                  className="w-[100%] h-[100%]"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
