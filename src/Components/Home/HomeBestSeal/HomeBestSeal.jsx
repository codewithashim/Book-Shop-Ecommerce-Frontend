import React from 'react';
import bookImg from '@/public/banner 07.png';
import Link from 'next/link';
import Image from 'next/image';
import useBook from '@/src/Hooks/useBook';

const HomeBestSeal = () => {
    const { bookData } = useBook();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {
                bookData && bookData?.slice(0, 8).map(book => (
                    <Link key={book?.id} href={`/product/${book?.id}`}>
                        <div className="card bg-white px-3 pt-2 pb-[30px] shadow-lg hover rounded">
                            <div className="bg-[#e1e6e9]">
                                <Image
                                    src={book?.image[0] || bookImg}
                                    width={400}
                                    height={600}
                                    alt="Description"
                                    className='md:h-[360px] h-[250px] rounded'
                                />
                            </div>

                            <div className="p-4">
                                <small className="text-[0.8rem] font-regular mt-3">{book?.name.slice(0, 30) + "..."}</small>
                                <div>
                                    <span className="text-2xl font-bold text-slate-900">₹ {book?.price}</span>
                                    <span className="text-[1rem] text-slate-900 line-through mx-2">₹ {book?.discountPercentage}</span>
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
