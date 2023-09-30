import Image from 'next/image';
import Link from 'next/link';
import usePopularCategory from '@/src/Hooks/usePopularCategory';

const Category = () => {
    const { popularCategoryData } = usePopularCategory();

    return (
        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-2 mt-6 '>
            {
              popularCategoryData &&  popularCategoryData?.slice(0,6)?.map(itm => (
                    <Link key={itm?._id} href={`/category_product?CategoryName=${itm?.popularCategory}`} className="c-card border border-[#80808057] pb-6 rounded  cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                        <Image src={itm?.popularCategoryImage} className='md:h-[500px] object-cover h-[200] w-full rounded' width={400} height={500} />
                        <div className="md:px-3 px-2 mt-3">
                            <h3 className="font-[600]  pb-2">{itm?.popularCategory?.slice(0, 50)}</h3>
                            <span className='sp-1 md:block hidden text-gray-500 md:text-md '>{itm?.popularCategoryDetail.slice(0, 70)+"..."}</span>
                            <span className='sp-2 hidden cursor-pointer text-[#2c91af]  '>Shop Now</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Category;