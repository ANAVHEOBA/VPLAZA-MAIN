"use client";

import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import ImageUploader from "../../../components/ImageUploader"; // Adjust the import path as necessary

const Page = () => {
  const router = useRouter();

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
        <ImageUploader />
      </div>
    </div>
  );
};

export default Page;
