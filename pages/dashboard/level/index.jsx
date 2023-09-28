import AddLevel from '@/src/Components/Dashboard/Level/AddLevel/AddLevel';
import DashboardLayout from '@/src/Layouts/DashboardLayout';
import React from 'react';

const LevelPage = () => {
    return (
        <DashboardLayout>
            <section>
                <AddLevel />
            </section>
        </DashboardLayout>
    );
};

export default LevelPage;