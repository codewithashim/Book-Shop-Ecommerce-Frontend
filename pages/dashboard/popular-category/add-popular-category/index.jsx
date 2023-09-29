import AddPopularCategory from '@/src/Components/Dashboard/PopularCategory/AddPopularCategory/AddPopularCategory';
import DashboardLayout from '@/src/Layouts/DashboardLayout';
import React from 'react';

const AddPopularCatgoryPage = () => {
    return (
        <DashboardLayout>
            <section className='container-fluid'>
                <AddPopularCategory />
            </section>
        </DashboardLayout>
    );
};

export default AddPopularCatgoryPage;