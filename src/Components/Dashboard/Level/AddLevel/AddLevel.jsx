import { Divider } from "@mui/material";
import React, { useState } from "react";
import ManageLevel from "../ManegLevel/ManegLevel";
import AddLevelModal from "@/src/Shared/Modal/Books/AddLavelModal";

const AddLevel = () => {
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  // === modal ===
  const showLevelModal = () => {
    setIsLevelModalOpen(true);
  };
  return (
    <section>
      <div className="lg:w-[100%] md:w-[100%] w-[90%]  px-[60px] py-[50px] xxs:px-[25px] xs:px-[30px] sm:px-[60px]  mx-auto bg-[#F7F7F7] shadow-md rounded-lg md:flex justify-center items-center gap-6 ">
        <button className="common-btn" onClick={showLevelModal}>Add Level</button>
      </div>

      <Divider className="my-4" />

      <section>
        <ManageLevel />
      </section>

      {/* === modal === */}
      <AddLevelModal isLevelModalOpen={isLevelModalOpen} setIsLevelModalOpen={setIsLevelModalOpen} />
    </section>
  );
};

export default AddLevel;