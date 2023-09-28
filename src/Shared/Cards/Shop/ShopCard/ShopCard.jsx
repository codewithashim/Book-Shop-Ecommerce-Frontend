import Image from 'next/image';
import Link from 'next/link';

const ShopCard = ({book}) => {
    return (
        <Link href={`/product/${book?.id}`}>
        <div className="card bg-white p-3 rounded-md shadow-lg ">
        <div className="bg-[#e1e6e9] p-3 rounded-lg">
            <Image 
            src="https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a"
            className='w-full h-[250px]'
            width={100}
            height={100}
            alt="Description"/>
        </div>

            <div className="">
                <h4 className="text-lg font-regular mt-3">{book?.name}</h4>
                <h4 className="text-xl font-semibold text-[#3aafbf]">${book?.price}</h4>
            </div>
        </div>
    </Link>
    );
};

export default ShopCard;