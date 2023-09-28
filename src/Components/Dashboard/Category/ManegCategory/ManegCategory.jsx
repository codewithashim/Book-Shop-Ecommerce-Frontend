import useBook from "@/src/Hooks/useBook";
import useCategory from "@/src/Hooks/useCategory";
import Paginetion from "@/src/Shared/Pagination/Pagination";
import React from "react";

const ManageCategory = () => {
  const { handelCategoryDelete, refetchCategory,categoryData } = useBook();


  return (
    <section>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="  overflow-x-auto sm:-mx-6 ">
            <div className="inline-block w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
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
                        Category Name
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
                    {categoryData &&
                      categoryData?.map((category, Index) => {
                        return (
                          <tr key={Index}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <span>{Index + 1}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {category?.category}
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button
                                  className="text-red-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                  onClick={() =>
                                    handelCategoryDelete(category?._id)
                                  }
                                >
                                  Delete
                                </button>
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
      </section>
    </section>
  );
};

export default ManageCategory;