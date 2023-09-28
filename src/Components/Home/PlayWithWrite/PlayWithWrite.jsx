import Image from "next/image";
import React, { useCallback, useRef } from "react";
import bookImg from '@/public/banner 07.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbArrowBigLeft, TbArrowBigRight } from "react-icons/tb";
import Link from "next/link";

const bestSeal = [
    {
        id: 0,
        category: "story books",
        name: "story books 1",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
    {
        id: 1,
        category: "story books",
        name: "story books 2",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
    {
        id: 2,
        category: "story books",
        name: "story books 3",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
    {
        id: 3,
        category: "story books",
        name: "story books 4",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
    {
        id: 4,
        category: "story books",
        name: "story books 5",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
    {
        id: 5,
        category: "story books",
        name: "story books 6",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
    {
        id: 7,
        category: "story books7",
        name: "story books 5",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
    {
        id: 8,
        category: "story books7",
        name: "story books 5",
        price: 200,
        quantity: 1,
        discountPercentage: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ab hic unde nesciunt ex, quo ea, quidem suscipit eum sit inventore dignissimos repellat ut doloribus. Qui veritatis laudantium aliquid mollitia?",
        language: "english",
        lavel: "",
        cover: bookImg,
        features: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        ],
        author: "shahin",
        coupon: [
            "",
            ""
        ],
        image: [
            "",
            "",
            ""
        ]
    },
]

const PlayWithWrite = () => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section className=" mx-2 relative h-full">
            <div className="title my-6 flex justify-between items-center">
                <h2 className=" text-[1rem] md:text-[1.5rem] text-center md:text-left lg:text-3xl xxs:text-2xl  text-black font-bold">
                    PlayWay Writing
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
                        {bestSeal &&
                            bestSeal.map((book) => {
                                return (
                                    <SwiperSlide className="cursor-grab" key={book.id}>
                                        <Link href={`/product/${book?.id}`}>
                                            <div className="card bg-white px-3 py-2 my-4 mx-2 shadow-lg hover rounded">
                                                <div className="bg-[#e1e6e9]  ">
                                                    <Image
                                                        src={book?.cover}
                                                        width={400}
                                                        height={600}
                                                        alt="Description"
                                                        className='md:h-[360px] h-[180px] rounded'
                                                    />
                                                </div>

                                                <div className="text-left">
                                                    <h4 className="text-lg font-regular mt-3">{book?.name}</h4>
                                                    <h4 className="text-xl font-semibold text-[#3aafbf]">${book?.price}</h4>
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

export default PlayWithWrite;
