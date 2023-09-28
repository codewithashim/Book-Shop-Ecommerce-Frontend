import { AuthContext } from "@/src/Context/UserContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaQuestionCircle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { AuthBannerImage } from "@/src/Assets";
import RootLayout from "@/src/Layouts/RootLayout";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const { signIn,handleGoogleSingnIn } = useContext(AuthContext);
  const router = useRouter();

  const redirect = router.query.redirect;

  const onSubmit = async (data) => {
    try {
      signIn(data.email, data.password).then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: "Successfully Login Done !",
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

        if (redirect) {
          router.push(`/${redirect}`);
        } else {
          router.push("/");
        }
      })
      .catch((err)=>{
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: err.message,
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
      });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        timerProgressBar: true,
        title: error.message,
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
    }
  };

  return (
    <RootLayout>
        <div className="my-6 container">
          <div className="w-full bg-white md:py-20 md:px-16  flex justify-center items-center md:flex-row flex-col gap-6">
              <div className="items-center justify-center  lg:flex hidden md:block">
              <Image className="" src={AuthBannerImage} alt="userLogin"
                width={800} height={600}
               />
              </div>
              <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 md:w-[80%]">
                <div className="my-3 ">
                  <div className="w-4/5 pt-5 mx-auto">
                    <h2 className="py-5 text-[#5E5E5E] text-xl font-bold text-center">
                      Sign In
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative mb-6">
                      <span className="text-[#ddd] text-[20px] absolute  top-[15px] inset-y-0 left-0 pl-3 flex">
                        <FaUser />
                      </span>
                      <div className="w-full">
                        <input
                          type="email"
                          className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                          placeholder="Email"
                          name="email"
                          {...register("email")}
                          required
                        />
                      </div>
                      <span className="text-[#6B7280] text-[20px] absolute top-[15px] inset-y-0 right-0 pr-3 flex">
                        <FaQuestionCircle />
                      </span>
                    </div>
                    <div className="relative mb-6">
                      <span className="text-[#ddd] text-[20px] absolute top-[15px] inset-y-0 left-0 pl-3 flex">
                        <FaLock />
                      </span>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className=" border-[1px] border-[#ddd] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3 "
                        placeholder="Password"
                        name="password"
                        {...register("password")}
                      />

                      <span
                        className="text-[#6B7280] text-[20px] absolute  top-[15px] inset-y-0 right-0 pr-3 flex"
                        onClick={passwordVisible}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center mb-4 md:flex-row xxs:flex-col xxs:justify-center md:justify-between ">
                      <div className="flex items-center ">
                        <div className="mr-2">
                          <input id="remember" type="checkbox" />
                        </div>{" "}
                        <label htmlFor="remember">Remember me</label>
                      </div>
                    </div>
                    <div className="">
                      <div className="py-3 xs:flex-row xxs:flex-col xs:block xxs:flex xxs:text-center xs:text-left">
                        <span className="text-[15px] text-[#676767]">
                          You don't have account
                          <Link href="/auth/signup" className="font-bold">
                            {" "}
                            Signup Now
                          </Link>
                        </span>
                      </div>
                      <button className="mb-5 common-btn">Sign In</button>
                    </div>
                  </form>
                  <div className="social-login">
                  <div
                    className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={()=>handleGoogleSingnIn()}
                  >
                    <div className="px-4 py-2">
                      <svg className="w-10 h-10" viewBox="0 0 40 40">
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#1976D2"
                        />
                      </svg>
                    </div>
                    <span className="w-5/6 px-4 py-3 font-bold text-center">
                      Sign in with Google
                    </span>
                  </div>

                  </div>
                </div>
              </div>
          </div>
        </div>
    </RootLayout>
  );
};

export default LoginPage;
