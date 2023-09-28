'use client'
import Image from 'next/image';
import { useRouter } from 'next/router';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactImageMagnify from 'react-image-magnify';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import RootLayout from '@/src/Layouts/RootLayout';
import RecomendationProduct from '@/src/Components/Shop/RecomendationProduct/RecomendationProduct';
import CopuonSlider from '@/src/Components/Shop/CopuonSlider/CopuonSlider';


const ProductDetails = () => {
  const router = useRouter();
  const [colorset, setColorSet] = useState('')
  const { id } = router.query;

  const [quantity, setQuantity] = useState(1);
  const [showImg, setShowImg] = useState('https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a');

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <RootLayout>
      <div className='pb-4 container h-full'>
        <div className="container mx-auto mt-3 flex justify-between items-center">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="">
              <div className="img-box shadow rounded bg-[#f1e8e8] p-2 flex justify-center">
                {/* <img
                             src={showImg}
                             className=''/> */}
                <ReactImageMagnify {...{
                  smallImage: {
                    alt: 'Description',
                    isFluidWidth: true,
                    src: showImg,
                    width: 1200,
                    height: 1800
                  },
                  largeImage: {
                    src: showImg,
                    width: 1200,
                    height: 1800

                  }
                }} />
              </div>
              <br />
              <div className='h-[15%]'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[]}
                  className="mySwiper"
                >
                  <SwiperSlide onClick={() => setShowImg('https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a')}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a"
                      className='bg-[#f1e8e8] border-2 border-[#3aa1b8] p-1 rounded' />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => setShowImg('https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a')}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a"
                      className='bg-[#f1e8e8] border-2 border-[#3aa1b8] p-1 rounded' />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => setShowImg('https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a')}>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a"
                      className='bg-[#f1e8e8] border-2 border-[#3aa1b8] p-1 rounded' />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="flex mt-5 items-center space-x-4">
                <div className="flex items-center gap-2 bg-[#ebeaea86]">
                  <button
                    onClick={decreaseQuantity}
                    className="px-2 py-1 border bg-gray-300 rounded focus:outline-none"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-2 py-1 border bg-gray-300 rounded focus:outline-none"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    console.log(`Added ${quantity} items to the cart`);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded  hover:bg-blue-600 focus:outline-none"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-xl font-[500] md:w-[500px]">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.</h1><br />
              <h2 className="text-xl">₹250 <span className="text-[#FF764B]">(10% OFF)</span> </h2>

              <div className="flex  items-center gap-2 mt-2">
                <button className='bg-[#1db7ff] text-white px-12 py-2 rounded'>Buy</button>
              </div>
              <p className="text-gray-400 text-sm my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni voluptatem soluta dicta vitae aspernatur, sint asperiores ipsam modi necessitatibus cum eius quod repudiandae adipisci recusandae veniam. Quos, facilis atque.
              </p>
              <hr />
              <div className='my-4'>
                <CopuonSlider />
              </div>
              <hr />
              <h4 className="text-lg mt-3 font-semibold">Author</h4>
              <p className='text-gray-600'>shahin</p>

              <h4 className="text-lg mt-3 font-semibold">Language</h4>
              <p className='text-gray-600'>English</p>

              <h4 className="text-lg mt-5 font-semibold capitalize">Product Description</h4>
              <p className="text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, cum temporibus! Ipsam accusantium voluptate enim alias dolorem, consectetur quis itaque dolores animi? Ducimus quidem cumque doloremque. Vitae quibusdam accusantium corrupti?</p><br />
              <hr />
              <p className='my-2'>Features</p>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <ul className="">
                  <li className='relative after:w-[10px] mt-2 after:rounded-full after:top-0 after:bottom-0 after:my-auto after:h-[10px] after:bg-[#3d3c3c] after:absolute after:left-0 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo?</li>

                  <li className='relative after:w-[10px] mt-2 after:rounded-full after:top-0 after:bottom-0 after:my-auto after:h-[10px] after:bg-[#3d3c3c] after:absolute after:left-0 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo?</li>

                  <li className='relative after:w-[10px] mt-2 after:rounded-full after:top-0 after:bottom-0 after:my-auto after:h-[10px] after:bg-[#3d3c3c] after:absolute after:left-0 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo?</li>

                  <li className='relative after:w-[10px] mt-2 after:rounded-full after:top-0 after:bottom-0 after:my-auto after:h-[10px] after:bg-[#3d3c3c] after:absolute after:left-0 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo?</li>
                  <li className='relative after:w-[10px] mt-2 after:rounded-full after:top-0 after:bottom-0 after:my-auto after:h-[10px] after:bg-[#3d3c3c] after:absolute after:left-0 pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quo?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <RecomendationProduct />
        </div>
      </div>
    </RootLayout>
  );
};

export default ProductDetails;