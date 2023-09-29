import Image from "next/image";
import React, { useCallback, useRef } from "react";
import bookImg from '@/public/banner 07.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import Link from "next/link";
import { NotFoundImage } from "@/src/Assets";
import useBook from "@/src/Hooks/useBook";

const RecomendationProduct = () => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const { bookData } = useBook()

    return (
        <section className=" mx-2 relative h-full">
            <div className="title my-6 flex justify-between items-center">
                <h2 className=" text-[1rem] md:text-[1.5rem] text-center md:text-left lg:text-3xl uppercase xxs:text-2xl  text-black font-bold">
                    Recomendation
                </h2>

                <div className="flex  items-center gap-10 top-0">
                    <button
                        className="prev-arrow cursor-pointer bg-[#ED1C24] p-3 rounded-full"
                        onClick={handlePrev}
                    >
                        <TbArrowBigLeft className="h-6 w-6 text-white" />
                    </button>
                    <button
                        className="next-arrow cursor-pointer bg-[#ED1C24] p-3 rounded-full"
                        onClick={handleNext}
                    >
                        <TbArrowBigRight className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>

            <div className="h-full">
                <Swiper
                    ref={sliderRef}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        360: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                >
                    <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {bookData &&
                            bookData.map((book) => {
                                return (
                                    <SwiperSlide className="cursor-grab" key={book._id}>
                                        <Link href={`/product/${book?._id}`}>
                                            <div className="card bg-white px-3 py-2 my-4 mx-2 shadow-lg hover rounded h-[430px]">
                                                <div className="bg-[#e1e6e9]  ">
                                                    <Image
                                                        src={book?.image[0] || NotFoundImage}
                                                        width={300}
                                                        height={400}
                                                        alt={book?.name}
                                                        className='md:h-[360px] h-[350px] rounded'
                                                    />
                                                </div>

                                                <div className="text-left">
                                                    <h4 className="text-lg font-regular mt-3">{book?.name}</h4>
                                                    <div>
                                                        <span className="text-3xl font-bold text-slate-900">₹ {book?.price}</span>
                                                        <span className="text-[1rem] text-slate-900 line-through mx-2">₹ {book?.discountPercentage}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                );
                            })}
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default RecomendationProduct;