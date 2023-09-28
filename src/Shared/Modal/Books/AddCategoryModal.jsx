import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';

const AddCategoryModal = ({ isCategoryModalOpen, setIsCategoryModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOk = () => {
    setIsCategoryModalOpen(false);
  };
  const handleCancel = () => {
    setIsCategoryModalOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
  }


  return (
    <Modal title="Add Category" open={isCategoryModalOpen} onCancel={handleCancel}>
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