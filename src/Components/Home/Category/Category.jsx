import banner from '@/public/banner 05.png';
import banner1 from '@/public/banner 06.png';
import banner2 from '@/public/banner 08.png';
import Image from 'next/image';
import Link from 'next/link';
const Category = () => {
    const category = [
        {
            id: 0,
            categoryId: 'story_book',
            name: 'Lorem, ipsum dolor. hjgjhg jhgjhk h gu uyghjkhgjh jh gy',
            cover: banner1,
            title: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            id: 1,
            categoryId: 'story_book',
            name: 'Lorem, ipsum dolor.',
            cover: banner2,
            title: 'Lorem ipsum dolor sit amet consectetur.'
        },
        {
            id: 2,
            categoryId: 'story_book',
            name: 'Lorem, ipsum dolor.',
            cover: banner,
            title: 'Lorem ipsum dolor sit amet consectetur.'
        },
    ]
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-12 gap-2 mt-6 '>
            {
                category?.map(itm => (
                    <Link key={itm?.id} href={`/category_product?paramName=${itm?.categoryId}`} className="c-card border border-[#80808057] pb-6 rounded  hover shadow">
                        <Image src={itm?.cover} className='md:h-[400px] h-[200] w-full rounded' width={400} height={500} />
                        <div className="md:px-3 px-2 mt-3">
                            <h3 className="font-[600]  pb-2">{itm?.name.slice(0, 50)}</h3>

                            <span className='sp-1 md:hidden block text-gray-500 md:text-md '>{itm?.title.slice(0, 19)}</span>
                            <span className='sp-1 md:block hidden text-gray-500 md:text-md '>{itm?.title}</span>
                            <span className='sp-2 hidden cursor-pointer text-[#2c91af]  '>Shop Now</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Category;