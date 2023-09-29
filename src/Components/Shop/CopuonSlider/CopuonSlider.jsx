import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const CouponSlider = () => {
    // Define your coupon data here
    const coupons = [
        {
            code: 'STEALDEAL20',
            offer: '20% flat off on all rides within the city using HDFC Credit Card',
            validTill: '20Dec, 2021',
        },
        {
            code: 'STEALDEAL20',
            offer: '20% flat off on all rides within the city using HDFC Credit Card',
            validTill: '20Dec, 2021',
        },
        {
            code: 'STEALDEAL20',
            offer: '20% flat off on all rides within the city using HDFC Credit Card',
            validTill: '20Dec, 2021',
        },
        {
            code: 'STEALDEAL20',
            offer: '20% flat off on all rides within the city using HDFC Credit Card',
            validTill: '20Dec, 2021',
        },
    ];

    return (
        <section>
            <div className="container mx-auto">
                <Swiper
                    className="couponSwiper"
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                >
                    {coupons.map((coupon, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-6 px-6 rounded-lg shadow-md relative">
                                <h3 className="text-2xl font-semibold mb-4">
                                    {coupon.offer}
                                </h3>
                                <div className="flex items-center justify-center md:flex-row gap-4 flex-col space-x-2 mb-6">
                                    <span
                                        id="cpnCode"
                                        className="border-dashed border text-white px-4 py-2 rounded-l"
                                    >
                                        {coupon.code}
                                    </span>
                                    <span
                                        id="cpnBtn"
                                        className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
                                    >
                                        Copy Code
                                    </span>
                                </div>
                                <p className="text-sm">Valid Till: {coupon.validTill}</p>
                                <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6" />
                                <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CouponSlider;
