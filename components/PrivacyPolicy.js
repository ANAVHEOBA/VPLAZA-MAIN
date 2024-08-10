"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="w-3/4 max-w-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="my-4 text-sm">
            this is it
          </p>
        </div>
      </div>
      <div className="flex justify-around w-full py-4 bg-blue-600 text-white">
        <button className="flex flex-col items-center">
          <span className="icon-store"></span> {/* Add your icon here */}
          Store
        </button>
        <button className="flex flex-col items-center">
          <span className="icon-home"></span> {/* Add your icon here */}
          Home
        </button>
        <button className="flex flex-col items-center">
          <span className="icon-profile"></span> {/* Add your icon here */}
          Profile
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
