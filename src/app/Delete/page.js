"use client";

import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Delete from "../../../components/Delete";

const Page = () => {
  const router = useRouter();
  const [showDelete, setShowDelete] = useState(false);

  const item = {
    image: "/src/assets/Group 89.png", // Correct path to your image
    name: "IPhone 12promax 256GB",
    price: "₦3,000",
  };

  const handleConfirm = () => {
    // Handle item deletion logic
    setShowDelete(false);
  };

  const handleCancel = () => {
    setShowDelete(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-[#004AAD] pt-4 w-full h-[15%]">
        <IoArrowBack
          color="white"
          className="mt-4 ml-3 cursor-pointer"
          size={30}
          onClick={() => router.back()}
        />
      </div>
      <div className="bg-white w-full h-[85%] rounded-tr-[50px] rounded-tl-[50px] mt-[15%] p-4 flex-grow">
        <button onClick={() => setShowDelete(true)} className="bg-red-500 text-white px-4 py-2 rounded">
          Delete Item
        </button>
        {showDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Delete item={item} onConfirm={handleConfirm} onCancel={handleCancel} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
