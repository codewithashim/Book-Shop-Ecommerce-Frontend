import AddCategory from '@/src/Components/Dashboard/Category/AddCategory/AddCategory';
import DashboardLayout from '@/src/Layouts/DashboardLayout';
import React from 'react';

const CategoryPage = () => {
    return (
        <DashboardLayout>
            <section className='container'>
                <AddCategory />
            </section>
        </DashboardLayout>
    );
};

export default CategoryPage;