import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import Link from "next/link";
import useBook from "@/src/Hooks/useBook";
import bookImg from '@/public/banner 07.png';


const AllInOneCategory = () => {
    const { bookData } = useBook();
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const filterBookData = bookData?.filter((data) => {
        return data.category === "ALL in One";
    });



    return (
        <section className=" mx-2 relative h-full">
            <div className="title my-6 flex justify-between items-center">
                <h2 className=" text-[1rem] md:text-[1.5rem] text-center md:text-left lg:text-3xl xxs:text-2xl  text-black font-bold">
                    All In One (KINDERGARTEN)
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
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
                >
                    <div className="grid grid-cols-1 justify-center items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filterBookData &&
                            filterBookData.map((book) => {
                                return (
                                    <SwiperSlide className="cursor-grab" key={book.id}>
                                        <Link href={`/product/${book?.id}`}>
                                            <div className="card bg-white  pt-2 px-2 pb-6 my-4 mx-2 shadow-lg cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 rounded">
                                                <div className="bg-[#e1e6e9]  ">
                                                    <Image
                                                        src={book?.image[0] || bookImg}
                                                        width={400}
                                                        height={600}
                                                        alt="Description"
                                                        className='md:h-[360px] h-[180px] rounded'
                                                    />
                                                </div>

                                                <div className="text-left">
                                                    <h4 className="text-lg font-regular mt-3">{book?.name}</h4>
                                                    <h4 className="text-xl font-semibold text-[#000000]">₹ {book?.price}</h4>
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

export default AllInOneCategory;
