'use client'
import Image from 'next/image';
import { useRouter } from 'next/router';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useContext, useState } from 'react';
import RootLayout from '@/src/Layouts/RootLayout';
import RecomendationProduct from '@/src/Components/Shop/RecomendationProduct/RecomendationProduct';
import CopuonSlider from '@/src/Components/Shop/CopuonSlider/CopuonSlider';
import useBook from '@/src/Hooks/useBook';
import { addToCartUrl } from '@/src/Utils/Urls/BooksUrl';
import Swal from 'sweetalert2';
import { AuthContext } from '@/src/Context/UserContext';

const ProductDetails = () => {
  const { bookData } = useBook();
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const [showImg, setShowImg] = useState('https://firebasestorage.googleapis.com/v0/b/book-e-commerce-dfef2.appspot.com/o/images%2F1679235368340?alt=media&token=b5736d42-dcb3-4863-876f-1af70b31b53a')


  let mainBookData;

  const filterBookData = bookData?.filter((data) => {
    return data._id === id;
  });

  if (filterBookData && filterBookData.length > 0) {
    mainBookData = filterBookData[0];
  } else {
    console.error(`No data found for ID: ${id}`);
  }

  const {
    category,
    name,
    price,
    discountPercentage,
    description,
    language,
    level,
    cover,
    features,
    author,
    coupon,
    image,
    _id,
  } = mainBookData || {};

  // ====== Add to cart ======

  const addToCart = async (id) => {
    const convertPrice = parseInt(price);
    const res = await fetch(addToCartUrl(id), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        book: _id,
        quantity: 1,
        totalPrice: convertPrice,
        email: user?.email,
        status: "unpaid"
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Your book added to cart',
        showConfirmButton: false,
        timer: 1500,
      })
      router.push('/cart');
    }
  }

  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountedPrice, setDiscountedPrice] = useState(mainBookData?.price || 0);


  const applyCoupon = (couponCode) => {
    // Find the coupon with the given code
    const appliedCoupon = coupon.find((coupon) => coupon.code === couponCode);

    if (appliedCoupon) {
      // Calculate the discounted price
      const discountAmount = (parseInt(price) * appliedCoupon.discountPercentage) / 100;
      const newPrice = parseInt(price) - discountAmount;

      setAppliedCoupon(couponCode);
      setDiscountedPrice(newPrice);
    }
  };



  return (
    <RootLayout>
      <div className='pb-4 container h-full'>
        <div className="container mx-auto mt-3 flex justify-between items-center">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="">
              <div className="img-box shadow rounded bg-[#f1e8e8] p-2 flex justify-center">
                {image && image.length > 0 ? (
                  <img src={image[0]} alt={name}
                    className='cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-130'
                  />
                ) : (
                  <p>No image available</p>
                )}
              </div>
              <br />
              <div className='h-[10%]'>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[]}
                  className="mySwiper"
                >
                  {
                    image && image?.map((img, index) => {
                      return (
                        <SwiperSlide key={index} onClick={() => setShowImg(img)}>
                          <img
                            src={img}
                            className='bg-[#f1e8e8] border-2 border-[#3aa1b8] p-1 rounded cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100' />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>

              <div className="flex mt-5 items-center space-x-4">
                <button
                  onClick={() => addToCart(_id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded  hover:bg-blue-600 focus:outline-none cursor-pointer hover:animate-pulse transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-xl font-[500] md:w-[500px]">{name}</h1>
              <br />
              {/* <h2 className="text-xl">₹{price} <span className="text-[#FF764B]">({discountPercentage}% OFF)</span> </h2> */}
              {/* <h2 className="text-xl">
                ₹{price}{' '}
                <span className="text-[#FF764B]">({discountPercentage}% OFF)</span>
              </h2> */}
              <div className='flex items-center gap-4'>
                <h1 className="text-xl font-bold text-slate-900">
                  {
                   discountPercentage
                      ? `₹ ${price - (price * discountPercentage) / 100}`
                      : `₹ ${price}`
                  }
                </h1>
                <span className="text-sm text-slate-900 line-through mt-1">
                  ₹ {price}
                </span>
                <span className='text-[#eec75b]'>
                  {discountPercentage} % off
                </span>
              </div>


              <div className="flex  items-center gap-2 mt-2">
                <button className='bg-[#1db7ff] text-white px-12 py-2 rounded'>Buy</button>
              </div>
              <p className="text-gray-400 text-sm my-4">
                {description?.slice(0, 200)}...
              </p>
              <hr />
              <div className='my-4'>
                {
                  coupon && coupon?.map((coupon, index) => {
                    return (
                      <CopuonSlider
                        key={index}
                        coupon={coupon}
                        applyCoupon={applyCoupon} // Pass the applyCoupon function
                        appliedCoupon={appliedCoupon} // Pass the appliedCoupon state
                      />
                    )
                  })
                }
                <CopuonSlider />
              </div>
              <hr />
              <h4 className="text-lg mt-5 font-semibold capitalize">Product Description</h4>
              <p className="text-gray-700">
                {description}
              </p>
              <p className='text-lg mt-5 font-semibold capitalize'>Features</p>
              <div className="flex items-center gap-3 mt-2 text-sm">
                <ul className="">
                  {
                    features && features?.map((feature, index) => {
                      return (
                        <li key={index} className='relative after:w-[10px] mt-2 after:rounded-full after:top-0 after:bottom-0 after:my-auto after:h-[10px] after:bg-[#3d3c3c] after:absolute after:left-0 pl-4'>{feature}</li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 my-4">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <hr />
                      <table className="min-w-full text-left text-sm font-light">
                        <tbody>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Author :
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {author}
                            </td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Language :
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {language}
                            </td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Level :
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {level}
                            </td>
                          </tr>

                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Cover :
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {cover}
                            </td>
                          </tr>

                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Category :
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {category}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <hr
          className='my-4 bg-[#000] '
        />
        <div>
          <RecomendationProduct />
        </div>
      </div>
    </RootLayout>
  );
};

export default ProductDetails;