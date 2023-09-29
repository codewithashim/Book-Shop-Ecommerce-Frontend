import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import Link from 'next/link';
import { Grid } from '@material-ui/core';
import useBook from '@/src/Hooks/useBook';
const BottomNav = () => {
    const [on, setOn] = useState(true)
    const { categoryData } = useBook()
    return (
        <div className='bg-[#ff471e] text-[#fff] py-4 md:px-4 border-b md:h-[50px] flex items-center z-80'>
            <div className="container py-0 h-full mx-auto flex justify-between items-center">
                <ul className='md:flex h-full items-center gap-5'>
                    <div className="flex md:w-auto w-[100%] justify-between items-center gap-2 ">
                
                        <li className='text-sm flex items-center gap-2 dropdown relative'>
                            <h1 className='flex justify-center gap-4 items-center font-bold text-[1.2rem]'>  <BsFillGridFill /> ALL CATEGORY <FaAngleDown /></h1>

                            <div className="dropdown-menu hidden bg-[white] p-3 text-black absolute w-[300px] top-[20px] md:left-0 left-[-30px] shadow-lg rounded-sm duration-200 shadow-[#00000042] z-100">
                                <ul>
                                    {
                                        categoryData && categoryData.map((item, index) => {
                                            return (
                                                <Link href={`/category_product?CategoryName=${item?.category}`} key={index + "category"}>
                                                    <li className='p-2 rounded duration-200 hover:bg-[#80808024] text-[#000]' >
                                                        {item?.category}
                                                    </li>
                                                </Link>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </li>
                    </div>
                    {/* <div className={`${on ? 'md:flex  hidden' : ''} items-center gap-3`}>
                         <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Boy Fashion</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Gril Fashion</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Footwear</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Toys</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Feeding</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Health</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Health</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Boutiques</Link>
                    </li>
                    <li className='hover:bg-[#19343972] text-sm h-full flex items-center p-2 duration-200'>
                        <Link href="">Diapering</Link>
                    </li>
                    </div> */}
                </ul>
            </div>

        </div>
    );
};

export default BottomNav;