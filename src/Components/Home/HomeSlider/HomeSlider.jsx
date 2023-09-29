import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import {
  BannerOneImage,
  BannerTowImage,
  BannerThreeImage,
  BannerFourImage,
  BannerFiveImage,
  BannerSixImage,
  BannerSevenImage
} from "@/src/Assets";

const HomeSliderData = [
  {
    id: 1,
    image: BannerOneImage,
  },
  {
    id: 2,
    image: BannerTowImage,
  },
  {
    id: 3,
    image: BannerThreeImage,
  },
  {
    id: 4,
    image: BannerFourImage,
  },
  {
    id: 5,
    image: BannerFiveImage,
  },
  {
    id: 6,
    image: BannerSixImage,
  },
  {
    id: 7,
    image: BannerSevenImage,
  },
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
          HomeSliderData?.map((slide) => {
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
