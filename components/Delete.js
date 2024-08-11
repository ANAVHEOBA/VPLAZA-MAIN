// components/Delete.js

import React from "react";
import Image from "next/image";
import itemImage from '../src/assets/Group 89.png';

const Delete = ({ item, onConfirm, onCancel }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white rounded shadow-lg flex flex-col items-center">
      <p className="text-lg font-semibold mb-4">Delete Item?</p>
      <div className="flex items-center mb-4">
        <Image
          src={itemImage}
          alt={item.name}
          width={50}
          height={50}
          className="rounded"
        />
        <div className="ml-4">
          <p className="font-bold">{item.name}</p>
          <p className="text-gray-500">{item.price}</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Yes
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Delete;

