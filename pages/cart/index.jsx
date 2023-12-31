import { AuthContext } from '@/src/Context/UserContext';
import RootLayout from '@/src/Layouts/RootLayout';
import { getCartUrl, removeFromCartUrl, updateCartUrl, addToCartUrl } from '@/src/Utils/Urls/BooksUrl'; // Assuming you have addToCartUrl
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CartPage = () => {
    const { user } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (user) {
            const getCartData = async () => {
                const res = await fetch(getCartUrl(user?.email));
                const data = await res.json();
                setCartData(data?.data);
            };
            getCartData();
        }
    }, [user]);

    const removeFromCart = async (id) => {
        const res = await fetch(removeFromCartUrl(id), {
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);

        if (data?.success) {
            Swal.fire({
                icon: 'success',
                title: 'Your item has been removed',
                showConfirmButton: false,
                timer: 1500,
            });
            setCartData(cartData.filter((data) => data._id !== id));
        }
    };

    const addToCart = async (book) => {
        const res = await fetch(addToCartUrl(user?.email), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bookId: book._id,
                quantity: 1, // You can start with a quantity of 1
            }),
        });
        const data = await res.json();
        console.log(data);
        if (data?.success) {
            Swal.fire({
                icon: 'success',
                title: 'Item added to cart',
                showConfirmButton: false,
                timer: 1500,
            });
            // You may want to update the cartData here as well
        }
    };

    const updateCartItemQuantity = async (id, newQuantity) => {
        const res = await fetch(updateCartUrl(id), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: newQuantity,
            }),
        });
        const data = await res.json();
        console.log(data);
        if (data?.success) {
            // Update the cartData here
            const updatedCartData = cartData.map((item) => {
                if (item._id === id) {
                    return {
                        ...item,
                        quantity: newQuantity,
                    };
                }
                return item;
            });
            setCartData(updatedCartData);
        }
    };

    const calculateItemPrice = (bookPrice, itemQuantity) => {
        return bookPrice * itemQuantity;
    };

    const totalPrice = cartData?.reduce((acc, curr) => {
        return acc + calculateItemPrice(curr?.book?.price, curr?.quantity);
    }, 0);

    const totalQuantity = cartData?.reduce((acc, curr) => {
        return acc + curr?.quantity;
    }, 0);

    const subtotal = totalPrice - (totalPrice * 10) / 100;

    return (
        <RootLayout>
            <section className=" ">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                        <div className="bg-white shadow">
                            <div className="px-4 py-6 sm:px-8 sm:py-10">
                                <div className="flow-root">
                                    <ul className="-my-8 flex flex-col gap-4">
                                        {cartData &&
                                            cartData?.map((data) => {
                                                const { book, _id, image, quantity } = data;
                                                const itemPrice = book ? calculateItemPrice(book.price, quantity) : 0;


                                                return (
                                                    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                                        <div className="shrink-0">
                                                            <Image
                                                                width={100}
                                                                height={100} // Add this line to specify the height
                                                                className="h-24 w-24 max-w-full rounded-lg object-cover"
                                                                src={book?.image[0]}
                                                                alt={book?.name}
                                                            />
                                                        </div>
                                                        <div className="relative flex flex-1 flex-col justify-between">
                                                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2 flex flex-col">
                                                                <div className="pr-8 sm:pr-5">
                                                                    <p className="text-base font-semibold text-gray-900">
                                                                        {book?.name}
                                                                    </p>
                                                                </div>

                                                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start  sm:justify-end">
                                                                    <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                                                        <span className="text-xs font-normal text-gray-400">₹</span>{" "}
                                                                        {itemPrice}
                                                                    </p>
                                                                    <div className="sm:order-1">
                                                                        <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                            <button
                                                                                className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                                                                onClick={() => {
                                                                                    if (quantity > 1) {
                                                                                        updateCartItemQuantity(_id, quantity - 1);
                                                                                    }
                                                                                }}
                                                                            >
                                                                                -
                                                                            </button>
                                                                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                                                                {quantity}
                                                                            </div>
                                                                            <button
                                                                                className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                                                                onClick={() =>
                                                                                    updateCartItemQuantity(_id, quantity + 1)
                                                                                }
                                                                            >
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => removeFromCart(_id)}
                                                                    className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                                                >
                                                                    <svg
                                                                        className="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth={2}
                                                                            d="M6 18L18 6M6 6l12 12"
                                                                            className=""
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                                <div className="mt-6 border-t border-b py-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-400">Subtotal</p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            <span className="text-xs font-normal text-gray-400">₹</span>{" "}
                                            {subtotal}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Total</p>
                                    <p className="text-2xl font-semibold text-gray-900">
                                        <span className="text-xs font-normal text-gray-400">₹</span>{" "}
                                        {totalPrice}
                                    </p>
                                </div>
                                <div className="mt-6 text-center">
                                    <button
                                        type="button"
                                        className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                    >
                                        Checkout
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RootLayout>
    );
};

export default CartPage;
