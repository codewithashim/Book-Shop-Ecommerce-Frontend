import ProductSlider from '@/src/Components/Home/Products/ProductSlider/ProductSlider';
import RootLayout from '@/src/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import useBook from '@/src/Hooks/useBook';

const ProductPage = () => {
    const [show, setShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { bookData, categoryData } = useBook();
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [isCloups, setIsCloups] = useState(true);

    const filteredBooks = selectedCategory
        ? bookData.filter((book) => book.category === selectedCategory)
        : bookData;

    const clearFilter = () => {
        setSelectedCategory(null);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentBooks = filteredBooks?.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredBooks?.length / itemsPerPage);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <RootLayout>
            <ProductSlider /> <br />
            <div className="flex md:flex-row flex-col gap-2 md:container">
                <div className="md:block hidden p-3 bg-slate-200 rounded h-[75%]">
                    <div>
                        <h2 className="text-lg font-bold"
                        >Sort Out :</h2>
                        {
                            isCloups && <div className="flex flex-col gap-2">
                                {categoryData && categoryData?.map((categoryresult) => (
                                    <div
                                        className="flex items-center space-x-2 mt-3 cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                                        key={categoryresult?._id}
                                    >
                                        <input
                                            type="checkbox"
                                            id={categoryresult?.category}
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            value={categoryresult?.category}
                                            onChange={() => setSelectedCategory(categoryresult?.category)}
                                        />
                                        <label
                                            htmlFor={categoryresult?.category}
                                            className="text-gray-700  cursor-pointer"
                                        >
                                            {categoryresult?.category}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        }
                        <button
                            onClick={() => selectedCategory && clearFilter()}
                            className="bg-red-500 text-white mt-4 p-2 rounded-md hover:bg-red-600"
                        >
                            Clear Filter
                        </button>

                    </div>
                </div>

                <div className="col-span-4 p-4 bg-[#e8eaeb00]">
                    <div className="md:hidden relative flex w-full items-center justify-end">
                        <button
                            onClick={() => setShow(!show)}
                            className="bg-[#4c667200] p-1 rounded-sm flex items-center gap-2"
                        >
                            <h2 className="text-md font-semibold">Sort Out </h2>
                            <BsFilter className="text-3xl" />
                        </button>
                        <div
                            className={`${show ? 'block' : 'hidden'} bg-[#ffffff] w-[300px] p-3 border rounded shadow-xl absolute right-0 top-9 z-10`}
                        >
                            {categoryData?.map((category) => (
                                <div
                                    className="flex items-center space-x-2 mt-3"
                                    key={category?.id}
                                >
                                    <input
                                        type="checkbox"
                                        id={category?.category}
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                        value={category?.category}
                                        onChange={() => setSelectedCategory(category?.category)}
                                    />
                                    <label
                                        htmlFor={category?.category}
                                        className="text-gray-700  cursor-pointer"
                                    >
                                        {category?.category}
                                    </label>
                                </div>
                            ))}
                            <button
                                onClick={() => selectedCategory && clearFilter()}
                                className="bg-red-500 text-white mt-4 p-2 rounded-md hover:bg-red-600"
                            >
                                Clear Filter
                            </button>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                        {currentBooks && currentBooks.map((book) => {
                            return (
                                <Link key={book?.id} href={`/product/${book?.id}`}>
                                    <div className="card w-full bg-white px-3 pt-2 shadow-lg cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 rounded">
                                        <div className="bg-[#ebeef0]">
                                            <Image
                                                src={book?.image[0]}
                                                width={400}
                                                height={500}
                                                alt={book?.name}
                                                className=" rounded w-full h-full"
                                            />
                                        </div>

                                        <div className="pb-4">
                                            <h4 className='font-bold my-2'>
                                                {book.category}
                                            </h4>
                                            <h4 className="text-lg">{book?.name?.slice(0, 28) + ".."}</h4>
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
                            )
                        })}
                    </div>

                    {/* Responsive Pagination */}
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => changePage(i + 1)}
                                className={`mx-2 px-4 py-2 rounded-md ${currentPage === i + 1
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};

export default ProductPage;
