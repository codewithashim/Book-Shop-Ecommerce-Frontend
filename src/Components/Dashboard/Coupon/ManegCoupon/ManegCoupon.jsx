import useBook from "@/src/Hooks/useBook";
import UpdateCouponModal from "@/src/Shared/Modal/Coupon/UpdateCouponModal";
import { Button } from "antd";
import { useState } from "react";

const ManageCoupon = () => {
    const { couponData, handelCouponDelete } = useBook();
    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState(null); // Store the selected coupon data

    const showCouponModal = (coupon) => {
        setSelectedCoupon(coupon); // Set the selected coupon data
        setIsCouponModalOpen(true);
    }

    return (
        <section>
            <section className="px-4 mx-auto">
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
                                                Coupon Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Coupon Price Percentage
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Coupon Text
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
                                        {couponData &&
                                            couponData?.map((coupon, Index) => {
                                                return (
                                                    <tr key={Index}>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">
                                                                <span>{Index + 1}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            {coupon?.coupon}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            {coupon?.couponPricePercentage}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            {coupon?.couponText}
                                                        </td>

                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <button
                                                                    className="text-red-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                                    onClick={() =>
                                                                        handelCouponDelete(coupon?._id)
                                                                    }
                                                                >
                                                                    Delete
                                                                </button>

                                                                <Button type="default" onClick={() => showCouponModal(coupon)}>
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
                {selectedCoupon && (
                    <UpdateCouponModal
                        isCouponModalOpen={isCouponModalOpen}
                        setIsCouponModalOpen={setIsCouponModalOpen}
                        couponData={selectedCoupon}
                    />
                )}
            </section>
        </section>
    );
};

export default ManageCoupon;