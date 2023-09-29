import React from 'react';
import Image from 'next/image';
import { BannerFiveImage } from '@/src/Assets';


const HomeAddBanner = () => {
    return (
        <div>
            <Image src={BannerFiveImage} className='w-full  h-[70vh]' width={900} height={800} />
        </div>
    );
};

export default HomeAddBanner;