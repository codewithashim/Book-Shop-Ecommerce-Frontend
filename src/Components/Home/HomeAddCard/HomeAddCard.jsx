import Image from 'next/image';
import React from 'react';
import bookImg from '@/public/banner 07.png';
import { BsJournalBookmark } from 'react-icons/bs';
import Link from 'next/link';
import useBook from '@/src/Hooks/useBook';

const HomeAddCard = () => {
    const { bookData } = useBook();

    return (
        <>
            <h1 className="text-3xl font-semibold mt-12">Book of the year</h1>
            <p className="text-gray-600 md:w-[700px] mt-2">
                ND is a leading global provider of e-books for libraries and schools. Our mission is simple: to create the best content for our customers around the world. We are a team of passionate people who work hard, have fun, and are committed to helping our customers succeed.
            </p>
            <div className='grid md:grid-cols-2 grid-flow-cols-1 gap-6 py-8'>
                {
                    bookData && bookData.slice(0, 2).map(book => {
                        return (
                            <div className="cart bg-[#faf0f2] rounded-2xl flex md:flex-row flex-col items-center gap-6 p-6 cursor-pointer md:hover:animate-pulse md:transition md:duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-100 hover shadow">
                                <Image src={book?.image[0] || bookImg} className='md:w-[180px] rounded-xl md:h-[230px]' width={300} height={400} />
                                <div className="info">
                                    <div className="flex items-center gap-2">
                                        <BsJournalBookmark className='text-3xl' />
                                        <h3 className="text-lg font-semibold">
                                            {book?.name}
                                        </h3>
                                    </div>
                                    <h6 className=" font-semibold mt-2">
                                        {book?.author}
                                    </h6>
                                    <small className="mt-2 text-gray-600">
                                        {book?.description.slice(0, 300)}
                                    </small>

                                    <div className="flex items-center mt-8 justify-between">
                                        <h2 className="text xl font-semibold">₹ {book?.price}</h2>
                                        <Link href={`/product/${book?._id}`}>
                                            <button className='px-12 py-2 rounded-lg text-white bg-[#1e89d1]'>Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default HomeAddCard;