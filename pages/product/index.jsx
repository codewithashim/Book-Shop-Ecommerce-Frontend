import ProductSlider from '@/src/Components/Home/Products/ProductSlider/ProductSlider';
import RootLayout from '@/src/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import useBook from '@/src/Hooks/useBook';
const ProductPage = () => {
    const [show, setShow] = useState(false)
    const { bookData } = useBook()

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
                        <button onClick={() => setShow(!show)} className='bg-[#4c667200] p-1 rounded-sm flex items-center gap-2'>
                            <h2 className="text-md font-semibold">Sort Out </h2><BsFilter className='text-3xl' />
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

                    <div className="grid md:grid-cols-3 items-center justify-center  gap-3">
                        {
                            bookData?.map(book => (
                                <Link href={`/product/${book?.id}`}>
                                    <div className="card bg-white px-3 pt-2 w-[90%] md:h-[430px] shadow-lg hover rounded">
                                        <div className="bg-[#ebeef0] ">
                                            <Image
                                                src={book?.img}
                                                width={400}
                                                height={600}
                                                alt={book?.name}
                                                className='h-[290px] rounded'
                                            />
                                        </div>

                                        <div className="pb-4">
                                            <h4 className=" text[1rem] mt-3">{book?.name}</h4>
                                            <div>
                                                <span className="text-[1.3rem] font-bold text-slate-900">₹ {book?.price}</span>
                                                <span className="text-[1rem] text-slate-900 line-through mx-2">₹ {book?.discountPercentage}</span>
                                            </div>
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