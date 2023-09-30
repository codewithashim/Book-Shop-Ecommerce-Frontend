import React from 'react';
import bookImg from '@/public/banner 07.png';
import Link from 'next/link';
import Image from 'next/image';
import useBook from '@/src/Hooks/useBook';
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component

const HomeBestSeal = () => {
    const { bookData, isLoading } = useBook(); // Assuming your hook provides an isLoading boolean

    return (
        <div className="grid md:grid-cols-4  gap-4 mt-4">
            {isLoading ? (
                // Render loading skeletons while data is loading
                <>
                    <Skeleton width={400} height={600} />
                    <Skeleton width={400} height={600} />
                    <Skeleton width={400} height={600} />
                    <Skeleton width={400} height={600} />
                    <Skeleton width={400} height={600} />
                    <Skeleton width={400} height={600} />
                    <Skeleton width={400} height={600} />
                    <Skeleton width={400} height={600} />
                </>
            ) : (
                // Render actual data when it's available
                bookData?.slice(0, 8).map((book) => (
                    <Link href={`/product/${book?.id}`} key={book?.id}>
                        <div className="card bg-white md:px-3 px-1 pt-2 md:pb-[30px] pb-[10px] shadow-lg hover rounded md:h-[520px] cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                            <div className="bg-[#e1e6e9]  ">
                                <Image
                                    src={book?.image[0] || bookImg}
                                    width={400}
                                    height={600}
                                    alt="Description"
                                    className='md:h-[360px] h-full rounded'
                                />
                            </div>

                            <div className="md:p-4 p-2"> {/* Adjust padding for mobile */}
                                <h4 className="md:font-bold font-semibold my-1 md:my-2 text-lg md:text-xl">
                                    {book.category}
                                </h4>
                                <h4 className="text-base md:text-[1rem] font-regular">
                                    {book?.name.slice(0, 20)}
                                </h4>
                                <div className="flex items-center md:flex-row gap-2 md:gap-4">
                                    <h1 className="text-lg md:text-xl font-bold text-slate-900">
                                        {book?.discountPercentage
                                            ? `₹ ${book?.price - (book?.price * book?.discountPercentage) / 100}`
                                            : `₹ ${book?.price}`}
                                    </h1>
                                    <span className="text-sm md:text-base text-slate-900 line-through mt-1">
                                        ₹ {book?.price}
                                    </span>
                                    <span className="text-[#eec75b] text-sm md:text-base">
                                        {book?.discountPercentage} % off
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            )}
        </div>
    );
};

export default HomeBestSeal;
