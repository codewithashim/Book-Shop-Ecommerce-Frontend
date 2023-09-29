import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { BannerSixImage, BannerFourImage, MobileBannerSixImage, MobileBannerFourImage } from "@/src/Assets";

const HomeAddBanner = () => {
    const HomeSliderData = [
        {
            id: 1,
            desktopImage: BannerSixImage,
            mobileImage: MobileBannerSixImage, // Add mobile image for slide 1
        },
        {
            id: 2,
            desktopImage: BannerFourImage,
            mobileImage: MobileBannerFourImage, // Add mobile image for slide 2
        },
    ];

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
                className="best-product-swiper"
            >
                {HomeSliderData &&
                    HomeSliderData.map((slide) => {
                        return (
                            <SwiperSlide key={slide.id}>
                                <div className="slider-images">
                                    <Image
                                        src={isMobile ? slide.mobileImage : slide.desktopImage}
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
        </div>
    );
};

export default HomeAddBanner;
