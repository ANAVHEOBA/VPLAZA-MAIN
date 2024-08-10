"use client";

import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

const HelpCentre = () => {
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
      <div className="bg-white w-full flex-grow rounded-tr-[50px] rounded-tl-[50px] mt-[10%] p-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-500">No FAQs available</p>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 w-full z-50">
        <div className="bg-blue-900 text-white py-4 px-6 rounded-tl-full rounded-tr-full max-w-md mx-auto flex justify-between items-center">
          <p className="text-sm">Wish to discuss with customer service?</p>
          <button className="bg-white text-blue-900 rounded-full p-2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h6m-6 4h6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCentre;
