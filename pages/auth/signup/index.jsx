import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "@/src/Context/UserContext";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import RootLayout from "@/src/Layouts/RootLayout";
import { signupUrl } from "@/src/Utils/Urls/AuthUrl";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const passwordVisible = () => {
    setShowPassword(showPassword ? false : true);
  };
  const cPasswordVisible = () => {
    setShowCPassword(showCPassword ? false : true);
  };
  const { signUp, updateUserDetails, signInWithGoogle } =
    useContext(AuthContext);

  const saveUserDataToDatabase = async (userData) => {
    try {
      const response = await axios.post(signupUrl, userData);
      console.log(response.data);
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  };

  const handleGoogleSingnIn = () => {
    signInWithGoogle()
      .then(() => {
        router.push("/");
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: "Successfully Login!",
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
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          text: "User already registered!",
          confirmButtonColor: "#ED1C24",
        });
      });
  };

  const signUpHandler = async (dataValue) => {
    const role = "user";
    const { firstName, lastName, email, phone, password } = dataValue;
    signUp(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential?.user;

        const profileInfo = {
          displayName: firstName + lastName,
          phoneNumber: phone,
          role: role,
        };
        updateUserDetails(profileInfo)
          .then(async () => {
            try {
              await axios
                .post(signupUrl, {
                  name: firstName + lastName,
                  email: email,
                  phone: phone,
                  role: role,
                })
                .then((response) => {
                  console.log(response);
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
                  router.push("/auth/login");

                })
                .catch((error) => {
                  console.log("error", error);
                });
            } catch (error) {
              console.log("error", error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                confirmButtonColor: "#ED1C24",
                text: error.message,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          icon: "error",
          title: errorMessage,
          text: "User already registered!",
          confirmButtonColor: "#ED1C24",
        });
      });
  };

  return (
    <RootLayout>
      <div className="md:px-16 container">
        <div className="">
          <div className="w-full bg-white md:py-20 md:px-16  flex justify-center items-center md:flex-row flex-col gap-6">
            <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6  w-full p-4">
              <div className="xxs:px-[25px] xs:px-[30px] sm:px-[30px] md:px-[30px] lg:px-[28px] xl:px-[40px] py-10  bg-[#f7f7f7] shadow-md rounded-lg">
                <h4 className="xs:text-2xl xxs:text-md sm:text-3xl md:text-3xl">
                  Account details
                </h4>
                <p className="mt-4 text-[15px] text-[#676767] font-[400]">
                  You only need to answer a few straightforward questions.
                </p>
                <form onSubmit={handleSubmit(signUpHandler)}>
                  <div className="flex flex-col gap-4">
                    <div>
                      <input
                        text="text"
                        name="firstName"
                        placeholder="First name"
                        className="text-[15px] font-[500] shadow-md rounded-lg px-2.5 py-4 text-gray-700 leading-tight w-full focus:outline-none focus:shadow-outline"
                        {...register("firstName")}
                      />
                    </div>
                    <div>
                      <input
                        text="text"
                        name="lastName"
                        placeholder="Last name"
                        className="text-[15px] font-[500]  shadow-md rounded-lg px-2.5 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue=""
                        {...register("lastName")}
                      />
                    </div>
                    <div>
                      <input
                        text="text"
                        name="phone"
                        placeholder="Phone number"
                        className="text-[15px] w-full font-[500] shadow-md rounded-lg px-2.5 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register("phone")}
                      />
                    </div>
                    <input
                      text="email"
                      name="email"
                      placeholder="Email address"
                      className="text-[15px] font-[500] rounded-lg w-full px-2.5 py-4 text-gray-700 leading-tight focus:outline-none mb-4 shadow-md focus:shadow-outline"
                      {...register("email")}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="relative mb-6">
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md px-2.5 py-4 "
                        {...register("password")}
                      />
                      <span
                        className="text-[#6b7280] text-[20px] absolute  top-[18px] inset-y-0 right-0 pr-3 flex "
                        onClick={passwordVisible}
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                    </div>
                    <div className="relative mb-6">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm password"
                        className="text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md px-2.5 py-4 "
                        {...register("confirmPassword")}
                      />
                      <span
                        className="text-[#6b7280] text-[20px] absolute   top-[18px] inset-y-0 right-0 pr-3 flex "
                        onClick={cPasswordVisible}
                      >
                        {showCPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <div className="flex items-center mb-2 sm:col-span-6 xxs:col-span-12 sm:justify-start xxs:justify-center">
                      <p className="text-base text-normal">
                        Have already an account?{" "}
                        <Link href="/auth/login">
                          <b className="text-red-10">Login here</b>
                        </Link>
                      </p>
                    </div>
                    <div className="flex sm:col-span-6 xxs:col-span-12  xxs:justify-center">
                      <button className="uppercase common-btn ">
                        Sign up
                      </button>
                    </div>
                  </div>
                </form>

                <div className="social-login md:w-[50%] flex mx-auto">
                  <div
                    className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleGoogleSingnIn()}
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
      </div>
    </RootLayout>
  );
};

export default Index;