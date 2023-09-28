import { Divider } from "@mui/material";
import React, { useState } from "react";
import ManageCategory from "../ManegCategory/ManegCategory";
import AddCategoryModal from "@/src/Shared/Modal/Books/AddCategoryModal";

const AddCategory = () => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  // === modal ===
  const showCategoryModal = () => {
    setIsCategoryModalOpen(true);
  };
  return (
    <section>
      <div className="lg:w-[100%] md:w-[100%] w-[90%]  px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg md:flex justify-center items-center gap-6 ">
        <button className="common-btn" onClick={showCategoryModal}>Add Category</button>
      </div>

      <Divider className="my-4" />

      <section>
        <ManageCategory />
      </section>

      {/* === modal === */}
      <AddCategoryModal isCategoryModalOpen={isCategoryModalOpen} setIsCategoryModalOpen={setIsCategoryModalOpen} />
    </section>
  );
};

export default AddCategory;