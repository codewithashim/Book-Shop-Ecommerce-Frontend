import AddCoupon from '@/src/Components/Dashboard/Coupon/AddCoupon/AddCoupon';
import DashboardLayout from '@/src/Layouts/DashboardLayout';
import React from 'react';

const CopuonPage = () => {
    return (
        <DashboardLayout>
            <section className='container'>
                <AddCoupon />
            </section>
        </DashboardLayout>
    );
};

export default CopuonPage;