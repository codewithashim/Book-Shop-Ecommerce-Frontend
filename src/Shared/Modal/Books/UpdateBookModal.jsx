import { Modal } from "antd";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { Select } from 'antd';
import Swal from "sweetalert2";
import { updateBooksUrl } from '@/src/Utils/Urls/BooksUrl';
import useBook from '@/src/Hooks/useBook';


const UpdateBookModal = ({ setIsUpdateBookModalOpen, isUpdateBookModalOpen, bookData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleCancel = () => {
        setIsUpdateBookModalOpen(false);
    };
    const { categoryData, levelData, couponData } = useBook()
    const [coupon, setCoupon] = useState("");
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(false);

    // === coupon ===
    const couponOptions = couponData?.map((coupon) => ({
        value: coupon._id,
        label: coupon.coupon,
    }));
    const handleCouponChange = (value) => {
        setCoupon(value);
    };

    // ==== Cloudinary ==== 
    const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const cloud_api = process.env.NEXT_PUBLIC_CLOUDINARY_API;
    const cloud_folder = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_FOLDER;

    const [imageFiles, setImageFiles] = useState([]);
    const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const updatedFiles = selectedFiles.map((file) => {
            const publicId = `${cloud_folder}/${file.name.replace(/\s+/g, '_')}`;
            file.uploadPreset = publicId;
            return file;
        });
        setImageFiles(updatedFiles);
    };

    const onSubmit = async (valueData) => {
        try {
            setLoading(true);
            const uploadedUrls = [];
            for (const imageFile of imageFiles) {
                const formData = new FormData();
                formData.append('file', imageFile);
                formData.append('upload_preset', upload_preset);
                formData.append('cloud_name', cloud_name);

                const imgRes = await fetch(cloud_api, {
                    method: 'POST',
                    body: formData,
                });

                if (!imgRes.ok) {
                    const errorResponse = await imgRes.text();
                    throw new Error(`Error uploading image: ${imgRes.status} - ${imgRes.statusText}\n${errorResponse}`);
                }

                const imgdata = await imgRes.json();
                const imgurl = imgdata?.secure_url;
                if (imgurl) {
                    uploadedUrls.push(imgurl);
                } else {
                    throw new Error('Failed to retrieve the image URL from Cloudinary response.');
                }
            }
            setUploadedImageUrls(uploadedUrls);
            const featuresArray = typeof features === 'string' ? features.split(',') : [];
            const bookUpdateData = {
                category: valueData.category,
                name: valueData.bookName,
                price: valueData.price,
                quantity: valueData.quantity,
                discountPercentage: valueData.discountPercentage,
                description: valueData.description,
                language: valueData.language,
                level: valueData.level,
                cover: valueData.cover,
                features: featuresArray,
                author: valueData.author,
                coupon: coupon,
                image: uploadedUrls,
            }

            const res = await fetch(updateBooksUrl(bookData?._id), {
                method: 'patch',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookUpdateData),
            });
            const dataRes = await res.json();
            if (!dataRes) {
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
                    title: "Successfully Updated",
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
            console.error('Error uploading images to Cloudinary:', error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <Modal title="Update Book" open={isUpdateBookModalOpen} okButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}
            footer={null}
            width={800}
        >
            <section className="my-4">
                <div className="flex flex-col w-full gap-4 mx-auto add-book-form">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="add-book-form w-full md:w-[60%] mx-auto flex flex-col gap-4 "
                    >
                        <input
                            placeholder="Book Name"
                            name="name"
                            type="text"
                            className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                            defaultValue={bookData?.name}
                            {...register("name")}
                        />
                        <select name="category" id="category"
                            className='border-2 border-gray-300 rounded-md p-2'
                            defaultValue={bookData?.category}
                            {...register("category")}
                        >
                            <option value="category">Category</option>
                            <hr />

                            {categoryData?.map((category) => () => {
                                return (
                                    <option value={category.category}
                                        className='border-2 border-gray-300 rounded-md p-4 my-2'
                                    >{category.category}</option>
                                )
                            })}
                        </select>

                        <input
                            placeholder="Price"
                            name="price"
                            type="text"
                            className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                            defaultValue={bookData?.price}
                            {...register("price")}
                        />
                        <input
                            placeholder="Discount Percentage"
                            name="discountPercentage"
                            className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                            type="text"
                            defaultValue={bookData?.discountPercentage}
                            {...register("discountPercentage")}
                        />
                        <input
                            placeholder="Author"
                            type="text"
                            name="author"
                            className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                            defaultValue={bookData?.author}
                            {...register("author")}
                        />
                        <input
                            placeholder="Cover"
                            className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                            type="text"
                            name="cover"
                            defaultValue={bookData?.cover}
                            {...register("cover")}
                        />

                        <select name="level" id="level"
                            className='border-2 border-gray-300 rounded-md p-2'
                            defaultValue={bookData?.level}
                            {...register("level")}
                        >
                            <option value="level">Level</option>
                            <hr />

                            {levelData?.map((level) => () => {
                                return (
                                    <option value={level.level}
                                        className='border-2 border-gray-300 rounded-md p-4 my-2'
                                    >{level.level}</option>
                                )
                            })}
                        </select>
                        <Select
                            mode="tags"
                            style={{
                                width: '100%',
                            }}
                            placeholder="Coupon"
                            defaultValue={bookData?.coupon}
                            onChange={handleCouponChange}
                            options={couponOptions}
                        />

                        <input
                            placeholder="Quantity"
                            className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                            type="text"
                            name="quantity"
                            defaultValue={bookData?.quantity}
                            {...register("quantity")}
                        />
                        <input
                            placeholder="Language"
                            className=" border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                            type="text"
                            name="language"
                            defaultValue={bookData?.language}
                            {...register("language")}
                        />
                        <textarea id="txtid" name="txtname" rows="4" cols="50" maxlength="200"
                            placeholder="Description"
                            defaultValue={bookData?.description}
                            {...register("description")}
                            className="border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                        >
                        </textarea>
                        <textarea name="txtname" rows="4" cols="50" maxlength="200"
                            placeholder="Features"
                            defaultValue={bookData?.features}
                            onChange={
                                (e) => {
                                    const featuresArray = e.target.value.split(',');
                                    setFeatures(featuresArray);
                                }
                            }
                            className="border-[2px] border-[#000] text-[15px] font-[500] text-gray-700 outline-none w-full rounded-lg shadow-md pl-10 pr-2.5 py-3"
                        >
                        </textarea>
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
                                            multiple
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <Button type="default" htmlType="submit" style={{
                            marginTop: '20px',
                        }}>
                            {
                                loading ? 'Loading...' : 'Update Book'
                            }
                        </Button>
                    </form>
                </div>
            </section>
        </Modal>
    );
};

export default UpdateBookModal;