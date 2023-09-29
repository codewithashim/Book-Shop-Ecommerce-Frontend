import usePopularCategory from '@/src/Hooks/usePopularCategory';
import PopularCategoryUpdateModal from '@/src/Shared/Modal/PopularCategoryUpdateModal/PopularCategoryUpdateModal';
import { Button } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

const ManagePopularCategory = () => {
    const { popularCategoryData, handelPopularCategoryDelete } = usePopularCategory()
    const [isPopularCategoryModalOpen, setIsPopularCategoryModalOpen] = useState(false);
    const [selectedPopularCategory, setSelectedPopularCategory] = useState(null); // Store the selected PopularCategory data

    const showPopularCategoryModal = (PopularCategory) => {
        setSelectedPopularCategory(PopularCategory);
        setIsPopularCategoryModalOpen(true);
    }

    return (
        <section>
            <div>
                <div className='flex justify-center items-center flex-col gap-4 mb-4'>
                    <h1 className="text-3xl font-semibold text-center">Add Popular Category</h1>
                    <Link href={'/dashboard/popular-category/add-popular-category'} className='common-btn hover'>
                        Add Popular Category
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 ">
                    <div className="inline-block w-full py-2 align-middle md:px-6 lg:px-8 ">
                        <div className=" border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800 ">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            S No.
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            Image
                                        </th>


                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            Category Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            Details
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {popularCategoryData &&
                                        popularCategoryData?.map((category, Index) => {
                                            return (
                                                <tr key={Index}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            <span>{Index + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {category?.popularCategoryImage && <img src={category?.popularCategoryImage} alt="category" className="w-20 h-20" />}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {category?.popularCategory}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {category?.popularCategoryDetail}
                                                    </td>

                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <button
                                                                className="text-red-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                                onClick={() =>
                                                                    handelPopularCategoryDelete(category?._id)
                                                                }
                                                            >
                                                                Delete
                                                            </button>

                                                            <Button type="default" onClick={() => showPopularCategoryModal(category)}>
                                                                Update
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {selectedPopularCategory && (
                <PopularCategoryUpdateModal
                    isPopularCategoryModalOpen={isPopularCategoryModalOpen}
                    setIsPopularCategoryModalOpen={setIsPopularCategoryModalOpen}
                    selectedPopularCategory={selectedPopularCategory}
                />
            )}

        </section>
    );
};

export default ManagePopularCategory;