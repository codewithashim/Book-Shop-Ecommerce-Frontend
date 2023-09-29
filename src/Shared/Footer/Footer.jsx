import useBook from '@/src/Hooks/useBook';
import { Facebook, LinkedIn, WhatsApp } from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import MainLogoSite from '@/src/Assets/Logo/ND_logo.png';
import Image from 'next/image';

const Footer = () => {
    const { categoryData } = useBook();


    return (
        <div className='bg-[#D9F3F4] text-[#000] px-4 py-16 grid md:grid-cols-5 gap-4'>
            <div className="">
                <Link href="/">
                    <Image src={MainLogoSite} 
                    width={150}
                    height={150}
                    alt="" className='w-[150px] cursor-pointer' />
                </Link>
            </div>
            <div className="md:mt-[0] mt-6">
                <ul>
                    <li className='font-semibold text-lg text-[#000]'>
                        <Link href="">Categories</Link>
                    </li>
                    {
                        categoryData?.slice(0, 6).map(itm => (
                            <li key={itm?.id} className='mt-3 font-[300]'>
                                <Link href={`/category_product?CategoryName=${itm?.category}`}>{itm?.category}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="md:mt-[0] mt-6">
                <ul>
                    <li className='font-semibold text-lg text-[#000]'>
                        <span>Contact Us</span>
                    </li>
                    <li className='mt-3 font-[300]'>
                        <span className="font-[400]">Address</span>
                        <br />
                        <small>J-2/16 (BASEMENT) Padam chand Marg, Daryaganj</small>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <span className="font-[400] ">Office / Mobile</span>
                        <br />
                        <small>9310406659 / 9910365713</small>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <span className="font-[400] ">Email</span>
                        <br />
                        <small>support@nldr.in / outreach@nldr.in</small>
                    </li>
                </ul>
            </div>

            <div className="md:mt-[0] mt-6">
                <ul>
                    <li className='font-semibold text-lg text-[#000000]'>
                        <Link href="">Follow Us</Link>
                    </li>
                    <li className='mt-3 font-[300]'>
                        <Link href="" className='flex items-center gap-2 '>
                            <Facebook className='text-2xl ' /> Facebook
                        </Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="" className='flex items-center gap-2 '>
                            <LinkedIn className='text-2xl ' /> LinkedIn
                        </Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="" className='flex items-center gap-2 '>
                            <FaDiscord className='text-2xl ' /> Discord
                        </Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="" className='flex items-center gap-2 '>
                            <WhatsApp className='text-2xl ' /> WhatsApp
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="md:mt-[0] mt-6">
                <ul>
                    <li className='font-semibold text-lg text-[#000]'>
                        <Link href="">Join Us</Link>
                    </li> <br />
                    <li className='mt-3 font-[300]'>
                        <h2 className='text-2lg font-[500] text-[#0a0606]'>Subscribe to our newsletters</h2>
                        <form className='flex items-center border border-[#4c5a5f] bg-[#73c3f58b] overflow-hidden rounded-md mt-3 g'>
                            <input type="text" className='w-full text-[#000] py-1 px-2 bg-[transparent]' placeholder='email...' /><button className='bg-[#1a7dae]  px-2 py-2'>Subscribe</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;