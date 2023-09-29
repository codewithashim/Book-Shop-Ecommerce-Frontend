import React, { useEffect, useState } from "react";
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
  BannerSevenImage,
  MobileBannerOneImage,
  MobileBannerTowImage,
  MobileBannerThreeImage,
  MobileBannerFourImage,
  MobileBannerFiveImage,
  MobileBannerSixImage,
  MobileBannerSevenImage,
} from "@/src/Assets";

const HomeSliderData = [
  {
    id: 1,
    desktopImage: BannerOneImage,
    mobileImage: MobileBannerOneImage, // Add mobile image for slide 1
  },
  {
    id: 2,
    desktopImage: BannerTowImage,
    mobileImage: MobileBannerTowImage, // Add mobile image for slide 2
  },
  {
    id: 3,
    desktopImage: BannerThreeImage,
    mobileImage: MobileBannerThreeImage, // Add mobile image for slide 3
  },
  {
    id: 4,
    desktopImage: BannerFourImage,
    mobileImage: MobileBannerFourImage, // Add mobile image for slide 4
  },
  {
    id: 5,
    desktopImage: BannerFiveImage,
    mobileImage: MobileBannerFiveImage, // Add mobile image for slide 5
  },
  {
    id: 6,
    desktopImage: BannerSixImage,
    mobileImage: MobileBannerSixImage, // Add mobile image for slide 6
  },
  {
    id: 7,
    desktopImage: BannerSevenImage,
    mobileImage: MobileBannerSevenImage, // Add mobile image for slide 7
  },
];

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define your mobile breakpoint
    };

    handleResize(); // Check the initial screen width
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Remove the event listener when the component unmounts
    };
  }, []);

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
              <SwiperSlide key={slide?.id}>
                <div className="slider-images">
                  <Image
                    src={isMobile ? slide?.mobileImage : slide?.desktopImage}
                    alt="Banner Image"
                    className="w-full h-full"
                    width={isMobile ? 768 : 1920}
                    height={isMobile ? 768 : 500}
                  />


                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
