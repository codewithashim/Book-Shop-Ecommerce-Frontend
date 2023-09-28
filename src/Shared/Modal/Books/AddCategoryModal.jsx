import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { createCategoryUrl } from '@/src/Utils/Urls/BooksUrl';
import useBook from '@/src/Hooks/useBook';

const AddCategoryModal = ({ isCategoryModalOpen, setIsCategoryModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {refetchCategory} = useBook()

  const handleCancel = () => {
    setIsCategoryModalOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch(createCategoryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: data.category,
      }),
    });

    console.log(res);

    const dataRes = await res.json();
    console.log(dataRes);

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
      refetchCategory();
    }

  }


  return (
    <Modal title="Add Category" 
    open={isCategoryModalOpen} 
    onCancel={handleCancel}
    okButtonProps={{ style: { display: 'none' } }} 
    >
      <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <div className="w-full">
              <input
                type="text"
                className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                placeholder="Category Name"
                name="category"
                {...register("category")}
                required
              />
            </div>
          </div>

          <div className="">
            <button className="mb-5 common-btn">Create Category</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCategoryModal;