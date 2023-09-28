import ProductSlider from '@/src/Components/Home/Products/ProductSlider/ProductSlider';
import RootLayout from '@/src/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import bookImg from '@/public/banner 07.png'
const ProductPage = () => {
    const [show, setShow] = useState(false)
    const booksData = [
        {
            id : 0,
            name : 'commie #',
            img : bookImg,
            price : 400
        },
        {
            id : 1,
            name : 'commie 1',
            img : bookImg,
            price : 400
        },
        {
            id : 2,
            name : 'commie 2',
            img : bookImg,
            price : 900
        },
        {
            id : 3,
            name : 'commie 3',
            img : bookImg,
            price : 400
        },
        {
            id : 4,
            name : 'commie 4',
            img : bookImg,
            price : 300
        },
        {
            id : 5,
            name : 'commie 5',
            img : bookImg,
            price : 900
        },
        {
            id : 6,
            name : 'commie 6',
            img : bookImg,
            price : 470
        },
        {
            id : 7,
            name : 'commie 7',
            img : bookImg,
            price : 600
        },
        {
            id : 8,
            name : 'commie 8',
            img : bookImg,
            price : 300
        },
        {
            id : 9,
            name : 'commie 9',
            img : bookImg,
            price : 400
        },
        {
            id : 10,
            name : 'commie 10',
            img : bookImg,
            price : 400
        },
    ]
    return (
        <RootLayout>
        <ProductSlider /> <br />
        <div className='grid grid-cols-5 container'>
            <div className="bg-[#dee0e1] md:block hidden p-3">
                 <h2 className="text-lg font-bold">Sort Out : </h2>
                 <div class="flex items-center space-x-2 mt-3 ">
                    <input type="checkbox" id="electronic" class="form-checkbox h-5 w-5 text-blue-600" />
                    <label htmlFor="electronic" class="text-gray-700  cursor-pointer">Electronic</label>
                </div>
                 <div class="flex items-center space-x-2 mt-5 ">
                    <input type="checkbox" id="gadget" class="form-checkbox h-5 w-5 text-blue-600" />
                    <label htmlFor="gadget" class="text-gray-700  cursor-pointer">Gadget</label>
                </div>
                 <div class="flex items-center space-x-2 mt-5 ">
                    <input type="checkbox" id="books" class="form-checkbox h-5 w-5 text-blue-600" />
                    <label htmlFor="books" class="text-gray-700  cursor-pointer">Books</label>
                </div>
            </div>

            <div className="col-span-4 p-4 bg-[#e8eaeb00]  md:w-auto">
                  <div className="md:hidden relative flex w-full items-center justify-end">
                    <button onClick={()=> setShow(!show)} className='bg-[#4c667200] p-1 rounded-sm flex items-center gap-2'>
                         <h2 className="text-md font-semibold">Sort Out </h2><BsFilter className='text-3xl'/>
                    </button>
                    <div className={`${show ? 'block' : 'hidden'} bg-[#ffffff] w-[300px] p-3 border rounded shadow-xl absolute right-0 top-9 z-10`}>
                    <div class="flex items-center space-x-2 mt-3 ">
                        <input type="checkbox" id="electronic" class="form-checkbox h-5 w-5 text-blue-600" />
                        <label for="electronic" class="text-gray-700  cursor-pointer">Electronic</label>
                    </div>
                    <div class="flex items-center space-x-2 mt-5 ">
                        <input type="checkbox" id="gadget" class="form-checkbox h-5 w-5 text-blue-600" />
                        <label for="gadget" class="text-gray-700  cursor-pointer">Gadget</label>
                    </div>
                    <div class="flex items-center space-x-2 mt-5 ">
                        <input type="checkbox" id="books" class="form-checkbox h-5 w-5 text-blue-600" />
                        <label for="books" class="text-gray-700  cursor-pointer">Books</label>
                    </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-3  gap-3">
                    {
                        booksData?.map(book => (
                               <Link href={`/product/${book?.id}`}>
                                <div className="card bg-white px-3 pt-2 pb-[30px]  shadow-lg hover rounded">
                                <div className="bg-[#e1e6e9] ">
                                    <Image 
                                    src={book?.img}
                                    width={400}
                                    height={600}
                                    alt="Description"
                                    className='h-[290px] rounded'
                                    />
                                </div>

                                    <div className="">
                                        <h4 className="text-lg font-regular mt-3">{book?.name}</h4>
                                        <h4 className="text-xl font-semibold text-[#3aafbf]">${book?.price}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                
                </div>
                
            </div>
        </div>
        </RootLayout>
    );
};

export default ProductPage;