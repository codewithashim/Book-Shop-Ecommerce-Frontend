import { Button, Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ManageCoupon from "../ManegCoupon/ManegCoupon";
import { createCouponUrl } from "@/src/Utils/Urls/BooksUrl";
import useBook from "@/src/Hooks/useBook";

const AddCoupon = () => {
  const { register, handleSubmit } = useForm();

  const { refetchCoupon } = useBook();

  const onSubmit = async (data) => {
    const copuonData = {
      coupon: data.coupon,
      couponPricePercentage: data.couponPricePercentage,
      couponText: data.couponText,
    };

    const res = await fetch(createCouponUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(copuonData),
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
        title: "Successfully Category Added!",
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
  };

  return (
    <section>
      <div className="p-4  mx-auto bg-[#F7F7F7] shadow-md rounded-lg flex flex-col gap-4 justify-center items-center ">
        <input
          id="outlined-coupon-input"
          placeholder="Coupon"
          type="text"
          className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
          {...register("coupon")}
        />
        <input
          id="outlined- couponPricePercentage-input"
          placeholder="Coupon Price Percentage"
          type="text"
          className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
          {...register("couponPricePercentage")}
        />
        <input
          id="outlined-couponText-input"
          placeholder="Coupon Text"
          type="text"
          className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
          {...register("couponText")}
        />
        <div>
          <Button
            variant="contained"
            className="common-btn m-4"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </div>
      </div>

      <Divider className="my-4" />

      <section>
        <ManageCoupon />
      </section>
    </section>
  );
};

export default AddCoupon;