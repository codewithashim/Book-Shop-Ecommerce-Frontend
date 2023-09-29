import banner from '@/public/banner 05.png';
import banner1 from '@/public/banner 06.png';
import banner2 from '@/public/banner 08.png';
import useBook from '@/src/Hooks/useBook';
import Image from 'next/image';
import Link from 'next/link';
import {
    BookCategoryOne,
    BookCategoryTwo,
    BookCategoryThree,
    BookCategoryFour,
    BookCategoryFive,
    BookCategorySix,
} from '@/src/Assets';

const Category = () => {

    const category = [
        {
            id: 1,
            category: 'Speaking course',
            cover: BookCategoryOne,
        },
        {
            id: 2,
            category: 'English Grammar',
            cover: BookCategoryTwo,
        },
        {
            id: 3,
            category: 'Chaman Urdu Khushkhati ',
            cover: BookCategoryThree,
        },
        {
            id: 4,
            category: 'Essay and letters',
            cover: BookCategoryFour,
        },
        {
            id: 5,
            category: 'Translation',
            cover: BookCategoryFive,
        },
        {
            id: 6,
            category: 'Dictionary',
            cover: BookCategorySix,
        },

    ]

    return (
        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-2 mt-6 '>
            {
                category?.map(itm => (
                    <Link key={itm?.id} href={`/category_product?CategoryName=${itm?.category}`} className="c-card border border-[#80808057] pb-6 rounded  cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                        <Image src={itm?.cover} className='md:h-[500px] object-cover h-[200] w-full rounded' width={400} height={500} />
                        <div className="md:px-3 px-2 mt-3">
                            <h3 className="font-[600]  pb-2">{itm?.category?.slice(0, 50)}</h3>

                            <span className='sp-1 md:block hidden text-gray-500 md:text-md '>{itm?.category}</span>
                            <span className='sp-2 hidden cursor-pointer text-[#2c91af]  '>Shop Now</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Category;