import useBook from '@/src/Hooks/useBook';
import { updateCouponUrl } from '@/src/Utils/Urls/BooksUrl';
import { Modal } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const UpdateCouponModal = ({ isCouponModalOpen, setIsCouponModalOpen, couponData }) => {
    const { _id, couponText, couponPricePercentage, coupon } = couponData
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { refetchCoupon } = useBook()
    const handleCancel = () => {
        setIsCouponModalOpen(false);
    };
    const onSubmit = async (data) => {
        console.log(data);
        const res = await fetch(updateCouponUrl(_id), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                coupon: data.coupon,
                couponPricePercentage: data.couponPricePercentage,
                couponText: data.couponText,
            }),
        });
        const dataRes = await res.json();
        if (!dataRes) {
            Swal.fire({
                position: "center",
                timerProgressBar: true,
                title: "Somthing wento wrang !",
                iconColor: "#ED1C24",
                toast: true,
                icon: "error",
                showClass: {
                    popup: "animate__animated animate__fadeInRight",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutRight",
                },
                showConfirmButton: false,
                timer: 3500,
            });
        } else {
            Swal.fire({
                position: "center",
                timerProgressBar: true,
                title: "Successfully Product Added!",
                iconColor: "#ED1C24",
                toast: true,
                icon: "success",
                showClass: {
                    popup: "animate__animated animate__fadeInRight",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutRight",
                },
                showConfirmButton: false,
                timer: 3500,
            });
            refetchCoupon();
        }

    }

    return (
        <div>
            <Modal title="Update Coupon" open={isCouponModalOpen} okButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>
                <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <div className="w-full flex flex-col gap-4">
                                <input
                                    id="outlined-coupon-input"
                                    placeholder="Coupon"
                                    type="text"
                                    defaultValue={coupon}
                                    className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                                    {...register("coupon")}
                                />
                                <input
                                    id="outlined- couponPricePercentage-input"
                                    placeholder="Coupon Price Percentage"
                                    type="text"
                                    defaultValue={couponPricePercentage}
                                    className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                                    {...register("couponPricePercentage")}
                                />
                                <input
                                    id="outlined-couponText-input"
                                    placeholder="Coupon Text"
                                    type="text"
                                    defaultValue={couponText}
                                    className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                                    {...register("couponText")}
                                />
                            </div>
                        </div>

                        <div className="">
                            <button className="mb-5 common-btn">Update Cupon</button>

                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default UpdateCouponModal;