import React from 'react';
import banner from '@/public/lgbanner2.jpg';
import Image from 'next/image';

const HomeAddBanner = () => {
    return (
        <div>
            <Image src={banner} className='w-full md:h-[280px] h-[120px]' width={900} height={800} />
        </div>
    );
};

export default HomeAddBanner;