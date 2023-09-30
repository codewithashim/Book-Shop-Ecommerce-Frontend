import banner from '@/public/lgbanner2.jpg';
import { NotFoundImage } from '@/src/Assets';
import useBook from '@/src/Hooks/useBook';
import RootLayout from '@/src/Layouts/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const category_product = () => {
    const { bookData } = useBook()
    const router = useRouter();
    const categoryName = router.query.CategoryName;
    const filterBookData = bookData?.filter((data) => {
        return data.category === categoryName;
    });

    return (
        <RootLayout>
            <div className="md:container">
                <Image src={banner} width={900} height={1000} className='w-full md:h-[500px] object-cover' />
                <br />
                <h3 className='font-semibold md:text-3xl text-lg'>Category {categoryName}</h3>
                <div className="grid md:grid-cols-4  md:gap-4 gap-2 mt-4">
                    {
                        filterBookData?.map(book => (
                            <Link href={`/product/${book?._id}`}>
                                <div className="card bg-white px-3 pt-2 pb-[20px]  shadow-lg rounded hover">
                                    <div className="bg-[#e1e6e9]">
                                        <Image
                                            src={book?.image[0] || NotFoundImage}
                                            width={400}
                                            height={350}
                                            alt="Description"
                                            className='md:h-[350px] h-full w-full rounded'
                                        />
                                    </div>

                                    <div className="pb-4 text-left">
                                        <h4 className='font-bold my-2'>
                                            {book.category}
                                        </h4>
                                        <h4 className="">{book?.name?.slice(0, 24) + ".."}</h4>
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
                <h3 className='font-semibold md:text-3xl text-lg mt-12'>Most Seal</h3>
                <div className="grid md:grid-cols-4  md:gap-4 gap-2 mt-8">
                    {
                        bookData && bookData?.slice(0, 12)?.map(book => (
                            <Link href={`/product/${book?._id}`}>
                                <div className="card bg-white px-3 pt-2 pb-[20px] md:h-[500px] shadow-lg rounded hover">
                                    <div className="bg-[#e1e6e9]">
                                        <Image
                                            src={book?.image[0] || NotFoundImage}
                                            width={400}
                                            height={350}
                                            alt="Description"
                                            className='md:h-[350px] h-full w-full rounded'
                                        />
                                    </div>

                                    <div className="pb-4 text-left">
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
                        ))
                    }
                </div>
            </div>
        </RootLayout>
    );
};

export default category_product;