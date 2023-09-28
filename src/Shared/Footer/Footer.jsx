import { Facebook, LinkedIn, WhatsApp } from '@material-ui/icons';
import Link from 'next/link';
import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#D9F3F4] text-[#000] px-4 py-16 grid md:grid-cols-5 gap-4'>
            <div className="">
                <h2 className="text-3xl font-bold ">LOGO</h2><br />
                <small className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi dolor reprehenderit quos aperiam, excepturi facere pariatur!</small>
            </div>
            <div className="md:mt-[0] mt-6">
                <ul>
                    <li className='font-semibold text-lg text-[#000]'>
                        <Link href="">Fiction</Link>
                    </li> <br />
                    <li className='mt-3 font-[300]'>
                        <Link href="">novel</Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="">comic</Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="">upsc</Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="">epics</Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="">ncert</Link>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <Link href="">encyclopedia</Link>
                    </li>
                </ul>
            </div>
            <div className="md:mt-[0] mt-6">
                <ul>
                    <li className='font-semibold text-lg text-[#000]'>
                        <span>Address</span>
                    </li> <br />
                    <li className='mt-3 font-[300]'>
                        <span className="font-[400]">Address</span><br />
                        <small>123 STREET NAME, CITY, ENGLAND</small>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <span className="font-[400] ">Phone</span><br />
                        <small>+8801111111111</small>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <span className="font-[400] ">Email</span><br />
                        <small>MAIL@EXAMPLE.COM</small>
                    </li>
                    <li className='mt-6 font-[300]'>
                        <span className="font-[400] ">Working Days/Hours</span><br />
                        <small>MON - SUN / 9:00AM - 8:00PM</small>
                    </li>

                </ul>
            </div>

            <div className="md:mt-[0] mt-6">
                <ul>
                    <li className='font-semibold text-lg text-[#000000]'>
                        <Link href="">Follow Us</Link>
                    </li> <br />
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