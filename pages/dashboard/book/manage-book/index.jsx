import ManageBook from '@/src/Components/Dashboard/Book/ManageBook/ManageBook';
import DashboardLayout from '@/src/Layouts/DashboardLayout';

const ManageBookPage = () => {
    return (
        <DashboardLayout>
          <div className='manage-book-title my-2'>
            <h2>Update Books</h2>
          </div>

           <div className='manage-book-section'>
                <ManageBook/>
           </div> 
        </DashboardLayout>
    );
};

export default ManageBookPage;