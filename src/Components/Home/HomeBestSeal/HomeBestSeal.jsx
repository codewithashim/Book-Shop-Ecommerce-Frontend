import React from 'react';
import bookImg from '@/public/banner 07.png';
import Link from 'next/link';
import Image from 'next/image';
import useBook from '@/src/Hooks/useBook';

const HomeBestSeal = () => {
    const { bookData } = useBook();

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-4">
            {
                bookData?.slice(0, 8).map(book => (
                    <Link href={`/product/${book?.id}`}>
                        <div className="card bg-white md:px-3 px-1 pt-2 md:pb-[30px] pb-[10px] shadow-lg hover rounded md:h-[520px] cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                            <div className="bg-[#e1e6e9]  ">
                                <Image
                                    src={book?.image[0] || bookImg}
                                    width={400}
                                    height={600}
                                    alt="Description"
                                    className='md:h-[360px] h-[200px] rounded'
                                />
                            </div>

                            <div className="md:p-4">
                                <h4 className='font-bold my-2'>
                                    {book.category}
                                </h4>
                                <h4 className="text-[1rem] font-regular">{book?.name.slice(0, 20)}</h4>
                                <div className='flex items-center gap-4'>
                                    <h1 className="text-xl font-bold text-slate-900">
                                        {
                                            book?.discountPercentage
                                                ? `₹ ${book?.price - (book?.price * book?.discountPercentage) / 100}`
                                                : `₹ ${book?.price}`
                                        }
                                    </h1>
                                    <span className="text-sm text-slate-900 line-through mt-1">
                                        ₹ {book?.price}
                                    </span>
                                    <span className='text-[#eec75b]'>
                                        {book?.discountPercentage} % off
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default HomeBestSeal;