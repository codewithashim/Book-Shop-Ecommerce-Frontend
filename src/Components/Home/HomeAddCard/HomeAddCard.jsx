import Image from 'next/image';
import React from 'react';
import bookImg from '@/public/banner 07.png';
import { BsJournalBookmark } from 'react-icons/bs';
import Link from 'next/link';

const HomeAddCard = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold mt-12">Book of the year</h1>
            <p className="text-gray-600 md:w-[700px] mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex facilis quia eaque veniam similique necessitatibus ea rerum, optio expedita eum. Quaerat obcaecati quisquam similique nostrum dolores, vero incidunt hic suscipit.
            </p>
            <div className='grid md:grid-cols-2 grid-flow-cols-1 gap-6 py-8'>
                <div className="cart bg-[#faf0f2] rounded-2xl flex md:flex-row flex-col items-center gap-6 p-6 hover">
                    <Image src={bookImg} className='md:w-[180px] rounded-xl h-[230px]' width={300} height={400} />
                    <div className="info">
                        <div className="flex items-center gap-2">
                            <BsJournalBookmark className='text-3xl' />
                            <h3 className="text-lg font-semibold">
                                book name
                            </h3>
                        </div>
                        <h6 className=" font-semibold mt-2">Shahin</h6>
                        <small className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo id blanditiis maxime saepe quaerat necessitatibus fuga quis doloribus possimus magnam illum dignissimos vero dolores nihil, ipsam aperiam, eius dolore.</small>

                        <div className="flex items-center mt-8 justify-between">
                            <h2 className="text xl font-semibold">$500</h2>
                            <Link href="/product/s">
                                <button className='px-12 py-2 rounded-lg text-white bg-[#1e89d1]'>Buy</button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="cart bg-[#eff5f7] rounded-2xl flex md:flex-row flex-col gap-6 p-6 hover">
                    <Image src={bookImg} className='md:w-[180px] rounded-xl h-[230px]' width={300} height={400} />

                    <div className="info">
                        <div className="flex items-center gap-2">
                            <BsJournalBookmark className='text-3xl' />
                            <h3 className="text-lg font-semibold">
                                book name
                            </h3>
                        </div>
                        <h6 className=" font-semibold mt-2">Shahin</h6>
                        <small className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo id blanditiis maxime saepe quaerat necessitatibus fuga quis doloribus possimus magnam illum dignissimos vero dolores nihil, ipsam aperiam, eius dolore.</small>

                        <div className="flex items-center mt-8 justify-between">
                            <h2 className="text xl font-semibold">$500</h2>
                            <Link href="/product/s">
                                <button className='px-12 py-2 rounded-lg text-white bg-[#1e89d1]'>Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeAddCard;