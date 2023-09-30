// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// const CouponSlider = ({ coupon }) => {
//     const [copiedCoupon, setCopiedCoupon] = useState(null);

//     // Define your coupon data here
// const coupons = [
//     {
//         code: 'STEALDEAL20',
//         offer: '20% flat off on all rides within the city using HDFC Credit Card',
//         validTill: '20Dec, 2021',
//     },
//     {
//         code: 'STEALDEAL21',
//         offer: '20% flat off on all rides within the city using HDFC Credit Card',
//         validTill: '20Dec, 2021',
//     },
//     {
//         code: 'STEALDEAL22',
//         offer: '20% flat off on all rides within the city using HDFC Credit Card',
//         validTill: '20Dec, 2021',
//     },
//     {
//         code: 'STEALDEAL23',
//         offer: '20% flat off on all rides within the city using HDFC Credit Card',
//         validTill: '20Dec, 2021',
//     },
// ];

//     const handleCopyCoupon = (couponCode) => {
//         navigator.clipboard.writeText(couponCode)
//             .then(() => {
//                 setCopiedCoupon(couponCode);
//                 setTimeout(() => setCopiedCoupon(null), 2000); // Clear copied status after 2 seconds
//             })
//             .catch((err) => console.error('Failed to copy:', err));
//     };

//     return (
//         <section>
//             <div className="container mx-auto">
//                 <Swiper
//                     className="couponSwiper"
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     loop={true}
//                 >
//                     {coupons.map((coupon, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-6 px-6 rounded-lg shadow-md relative">
//                                 <h3 className="text-2xl font-semibold mb-4">
//                                     {coupon.offer}
//                                 </h3>
//                                 <div className="flex items-center justify-center md:flex-row gap-4 flex-col space-x-2 mb-6">
//                                     <span
//                                         id="cpnCode"
//                                         className="border-dashed border text-white px-4 py-2 rounded-l"
//                                     >
//                                         {coupon.code}
//                                     </span>
//                                     <span
//                                         id="cpnBtn"
//                                         className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer"
//                                         onClick={() => handleCopyCoupon(coupon.code)}
//                                     >
//                                         {copiedCoupon === coupon.code ? 'Copied!' : 'Copy Code'}
//                                     </span>
//                                 </div>
//                                 <p className="text-sm">Valid Till: {coupon.validTill}</p>
//                                 <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6" />
//                                 <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6" />
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </section>
//     );
// };

// export default CouponSlider;


import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const CouponSlider = ({ coupon, applyCoupon }) => {
    const [copiedCoupon, setCopiedCoupon] = useState(null);

    const handleCopyCoupon = (couponCode) => {
        navigator.clipboard.writeText(couponCode)
            .then(() => {
                setCopiedCoupon(couponCode);
                setTimeout(() => setCopiedCoupon(null), 2000); // Clear copied status after 2 seconds
                applyCoupon(couponCode); // Call the applyCoupon function with the coupon code
            })
            .catch((err) => console.error('Failed to copy:', err));
    };

    const coupons = [
        {
            code: 'STEALDEAL20',
            offer: '20% flat off on all book within the city using HDFC Credit Card',
            validTill: '20Dec, 2023',
        },
        {
            code: 'STEALDEAL21',
            offer: '20% flat off on all book within the city using HDFC Credit Card',
            validTill: '20Dec, 2023',
        },
        {
            code: 'STEALDEAL22',
            offer: '20% flat off on all book within the city using HDFC Credit Card',
            validTill: '20Dec, 2023',
        },
        {
            code: 'STEALDEAL23',
            offer: '20% flat off on all book within the city using HDFC Credit Card',
            validTill: '20Dec, 2023',
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
                                        onClick={() => handleCopyCoupon(coupon.code)}
                                    >
                                        {copiedCoupon === coupon.code ? 'Copied!' : 'Copy Code'}
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
