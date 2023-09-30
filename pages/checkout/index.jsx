import RootLayout from '@/src/Layouts/RootLayout';
import React from 'react';

const CheckoutPage = () => {
    return (
        <RootLayout>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center my-8">Checkout</h1>

                <div className='text-red font-bold '>
                    {
                        "Under construction"
                    }
                </div>
            </div>
        </RootLayout>
    );
};

export default CheckoutPage;