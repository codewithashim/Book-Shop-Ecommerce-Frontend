import useBook from '@/src/Hooks/useBook';
import { addPopularCategoryUrl } from '@/src/Utils/Urls/CategoryUrl';
import { Button } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddPopularCategory = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { categoryData } = useBook();
    const [loading, setLoading] = useState(false);

    // ==== Cloudinary ==== 
    const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
    const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

    const [imageFile, setImageFile] = useState("");

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const imageUploadData = new FormData();
            imageUploadData.append("file", imageFile);
            imageUploadData.append(
                "public_id",
                `${cloud_folder}/${imageFile?.name}`
            );
            imageUploadData.append("upload_preset", `${upload_preset}`);
            imageUploadData.append("cloud_name", `${cloud_name}`);
            const imgRes = await fetch(`${cloud_api}`, {
                method: "POST",
                body: imageUploadData,
            });
            const imgdata = await imgRes.json();
            const imgurl = imgdata?.secure_url;

            const { popularCategory, popularCategoryDetail } = data;

            const popularCategoryData = {
                popularCategory,
                popularCategoryDetail,
                popularCategoryImage: imgurl,
            }

            const res = await fetch(addPopularCategoryUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(popularCategoryData),
            });
            if (!res) {
                Swal.fire({
                    position: "center",
                    timerProgressBar: true,
                    title: "Something went wrong!",
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
                    title: "Successfully Added!",
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
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section>
            <div>
                <div className='flex justify-center items-center flex-col gap-4 mb-4'>
                    <h1 className="text-3xl font-semibold text-center">Add Popular Category</h1>
                    <Link href={'/dashboard/popular-category/manage-popular-category'} className='common-btn hover'>
                        Update Popular Category
                    </Link>
                </div>
            </div>

            <div className="flex flex-col w-full gap-4 mx-auto md:w-[80%] bg-slate-50 p-6 rounded">
                <form action=""
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 w-full mx-auto"
                >
                    <select
                        {...register("popularCategory")}
                        className='border-2 border-gray-300 rounded-md p-2'
                    >
                        <option value="">Select Category</option>
                        {categoryData && categoryData.map((categoryResponse) => {
                            const { _id, category } = categoryResponse;
                            return (
                                <option value={category}
                                    className='border-2 border-gray-300 rounded-md p-4 my-2'
                                    key={_id}
                                >{category}</option>
                            )
                        })}
                    </select>
                    <div>
                        <textarea id="txtid" name="txtname" rows="4" cols="50" maxlength="200"
                            placeholder="Description"
                            {...register("popularCategoryDetail")}
                            className="border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                        />
                    </div>
                    <div className="w-full h-full">
                        <div className="rounded-lg shadow-xl bg-gray-50 p-4">
                            <label className="inline-block mb-2 text-gray-500">Upload Product Image</label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col w-full max-w-xs md:max-w-md h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                    <div className="flex flex-col items-center justify-center pt-7">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            />
                                        </svg>
                                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Attach file{' '}
                                        </p>
                                    </div>
                                    <input
                                        type="file"
                                        className="px-4 pb-4"
                                        name="images"
                                        accept="image/*"
                                        onChange={(e) => setImageFile(e.target.files[0])}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className='my-4'>
                            {
                                imageFile && (
                                    <img src={imageFile ? URL.createObjectURL(imageFile) : ''} alt="" className="w-40 h-40" />
                                )
                            }
                        </div>
                    </div>

                    <Button type="default" htmlType="submit" style={{
                        marginTop: '20px',
                    }}>
                        {
                            loading ? 'Loading...' : 'Add Category'
                        }
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default AddPopularCategory;