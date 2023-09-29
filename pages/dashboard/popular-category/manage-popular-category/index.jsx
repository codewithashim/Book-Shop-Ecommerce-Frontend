import ManagePopularCategory from '@/src/Components/Dashboard/PopularCategory/ManagePopularCategory/ManagePopularCategory';
import DashboardLayout from '@/src/Layouts/DashboardLayout';
import React from 'react';

const ManagePopularCategoryPage = () => {
    return (
        <DashboardLayout>
            <section>
                <div className="container-fluid">
                    <ManagePopularCategory />
                </div>
            </section>
        </DashboardLayout>
    );
};

export default ManagePopularCategoryPage;