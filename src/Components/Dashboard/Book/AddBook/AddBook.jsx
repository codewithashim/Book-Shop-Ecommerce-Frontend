import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'antd';
const { TextArea } = Input;
import { Button } from 'antd';
import { AuthContext } from '@/src/Context/UserContext';
import { Select } from 'antd';
import AddCategoryModal from '../../../../Shared/Modal/Books/AddCategoryModal';
import AddLavelModal from '@/src/Shared/Modal/Books/AddLavelModal';
import Swal from "sweetalert2";
import { createBookUrl } from '@/src/Utils/Urls/BooksUrl';


const AddBook = () => {
  const { user } = useContext(AuthContext);
  const {  handleSubmit } = useForm();
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [coupon, setCoupon] = useState("");
  const [bookName, setBookName] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [cover , setCover] =  useState("");

  // === category ===
  const categoryOptions = [];
  for (let i = 10; i < 36; i++) {
    categoryOptions.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  // === level ===
  const levelOptions = [];
  for (let i = 10; i < 36; i++) {
    levelOptions.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const handleLevelChange = (value) => {
    setLevel(value);
  };

  // === coupon ===
  const couponOptions = [];
  for (let i = 10; i < 36; i++) {
    couponOptions.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  };
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
      file.uploadPreset = `${cloud_folder}/Books/${file.name}`;
      return file;
    });
    setImageFiles(updatedFiles);
  };


  const onSubmit = async () => {
    try {
      const uploadedUrls = [];
      for (const imageFile of imageFiles) {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', upload_preset);
        formData.append('cloud_name', cloud_name);
        formData.append('public_id', imageFile.uploadPreset);

        const imgRes = await fetch(cloud_api, {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
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
      console.log('Uploaded Image URLs:', uploadedUrls);

      // const bookData = {
      //   category:  category,
      //   name: bookName,
      //   price: price,
      //   quantity: quantity,
      //   discountPercentage: discountPercentage,
      //   description: description,
      //   language: language,
      //   level: level,
      //   cover: cover,
      //   features: features,
      //   author: author,
      //   coupon: coupon,
      //   image: uploadedImageUrls,
      // }

      // const res = await fetch(createBookUrl, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(bookData),
      // });
      // const dataRes = await res.json();
      // if (!dataRes) {
      //   Swal.fire({
      //     position: "center",
      //     timerProgressBar: true,
      //     title: "Somthing wento wrang !",
      //     iconColor: "#ED1C24",
      //     toast: true,
      //     icon: "error",
      //     showClass: {
      //       popup: "animate__animated animate__fadeInRight",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutRight",
      //     },
      //     showConfirmButton: false,
      //     timer: 3500,
      //   });
      // } else {
      //   Swal.fire({
      //     position: "center",
      //     timerProgressBar: true,
      //     title: "Successfully Product Added!",
      //     iconColor: "#ED1C24",
      //     toast: true,
      //     icon: "success",
      //     showClass: {
      //       popup: "animate__animated animate__fadeInRight",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutRight",
      //     },
      //     showConfirmButton: false,
      //     timer: 3500,
      //   });
      // }
      
    } catch (error) {
      console.error('Error uploading images to Cloudinary:', error);
    }
  };
  

  // === modal ===
  const showCategoryModal = () => {
    setIsCategoryModalOpen(true);
  };

  const showLevelModal = () => {
    setIsLevelModalOpen(true);
  };

  return (
    <section className="my-4">
      <div className="flex flex-col w-full gap-4 mx-auto add-book-form">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="add-book-form w-full md:w-[60%] mx-auto flex flex-col gap-4 "
        >
          <Input
            placeholder="Book Name"
            name="name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />

          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Category"
            onChange={handleCategoryChange}
            options={categoryOptions}
          />

          <Button type="default" onClick={showCategoryModal}>
            Add Category
          </Button>

          <Input
            placeholder="Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            placeholder="Discount Percentage"
            name="discountPercentage"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
          <Input
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Input
            placeholder="Cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />

          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Level"
            onChange={handleLevelChange}
            options={levelOptions}
          />

          <Button type="default" onClick={showLevelModal}>
            Add Level
          </Button>

          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Coupon"
            onChange={handleCouponChange}
            options={couponOptions}
          />

          <Input
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Input
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <TextArea
            rows={4}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextArea
            rows={4}
            placeholder="Features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />

          {/* <div>
          <div class="w-full h-full">
            <div class="rounded-lg shadow-xl bg-gray-50">
              <div class="p-4">
                <label class="inline-block mb-2 text-gray-500">
                  Upload Product Image
                </label>
                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewdiv="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Attach a file{" "}
                        <span className="text-red-500">
                          {" "}
                          (Max Uploading Size 300kb)*
                        </span>
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
          </div>
        </div> */}

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

          <Button type="default" htmlType="submit">
            Submit
          </Button>
        </form>
      </div>
      <AddCategoryModal
        isCategoryModalOpen={isCategoryModalOpen}
        setIsCategoryModalOpen={setIsCategoryModalOpen}
      />

      <AddLavelModal
        isLevelModalOpen={isLevelModalOpen}
        setIsLevelModalOpen={setIsLevelModalOpen}
      />
    </section>
  );
};

export default AddBook;
