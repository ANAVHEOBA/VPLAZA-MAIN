"use client";

import React from "react";
import HelpCentre from "../../../components/HelpCentre";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

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
      <div className="flex-grow">
        <HelpCentre />
      </div>
    </div>
  );
};

export default Page;
