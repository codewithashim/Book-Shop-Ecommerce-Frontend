import useBook from '@/src/Hooks/useBook';
import { createLevelUrl } from '@/src/Utils/Urls/BooksUrl';
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const AddLavelModal = ({ setIsLevelModalOpen, isLevelModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { refetchLevel } = useBook()

  const handleCancel = () => {
    setIsLevelModalOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch(createLevelUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level: data.level,
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
      refetchLevel();
    }

  }


  return (
    <div>
      <Modal title="Add Level" open={isLevelModalOpen} okButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>
        <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <div className="w-full">
                <input
                  type="text"
                  className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                  placeholder="Level"
                  name="level"
                  {...register("level")}
                  required
                />
              </div>
            </div>

            <div className="">
              <button className="mb-5 common-btn">Create Level</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddLavelModal;