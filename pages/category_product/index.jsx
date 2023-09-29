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
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 mt-4">
                    {
                        filterBookData?.map(book => (
                            <Link href={`/product/${book?._id}`}>
                                <div className="card bg-white px-3 pt-2  md:h-[500px] h-[330px] pb-[20px]  shadow-lg rounded hover">
                                    <div className="bg-[#e1e6e9]">
                                        <Image
                                            src={book?.image[0] || NotFoundImage}
                                            width={400}
                                            height={350}
                                            alt="Description"
                                            className='md:h-[350px] h-[170px] rounded'
                                        />
                                    </div>

                                    <div className="md:p-4">
                                        <h4 className="md:text-[1rem] text-sm font-regular mt-3">{book?.name?.slice(0, 56)} {book?.name?.length}</h4>
                                        <div className='flex items-center gap-2 mt-3'>
                                            <span className="md:text-3xl text-md font-bold text-slate-900">₹ {book?.price}</span>
                                            <span className="md:text-[1rem] text-sm text-slate-900 line-through mx-2">₹ {book?.discountPercentage}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <h3 className='font-semibold md:text-3xl text-lg mt-12'>Most Seal</h3>
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2 mt-8">
                    {
                        bookData && bookData?.slice(0, 12)?.map(book => (
                                <Link href={`/product/${book?._id}`}>
                                <div className="card bg-white px-3 pt-2 pb-[20px] md:h-[500px] h-[330px] shadow-lg rounded hover">
                                    <div className="bg-[#e1e6e9]">
                                        <Image
                                            src={book?.image[0] || NotFoundImage}
                                            width={400}
                                            height={350}
                                            alt="Description"
                                            className='md:h-[350px] h-[170px] rounded'
                                        />
                                    </div>

                                    <div className="md:p-4">
                                        <h4 className="md:text-[1rem] text-sm font-regular mt-3">{book?.name?.slice(0, 90)}</h4>
                                        <div className='flex items-center gap-2 mt-3'>
                                            <span className="md:text-3xl text-md font-bold text-slate-900">₹ {book?.price}</span>
                                            <span className="md:text-[1rem] text-sm text-slate-900 line-through mx-2">₹ {book?.discountPercentage}</span>
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