// components/ImageUploader.js

import React, { useState } from "react";

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState("");
  const [state, setState] = useState("New");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleImageUpload = (event) => {
    if (event.target.files && images.length < 5) {
      setImages([...images, URL.createObjectURL(event.target.files[0])]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-lg">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload" className="cursor-pointer">
            <div className="flex flex-col items-center">
              {images.length === 0 && (
                <>
                  <span className="text-gray-500">Click to add a picture</span>
                  <div className="flex space-x-2 mt-2">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 bg-gray-300 flex items-center justify-center"
                      >
                        <span className="text-white text-2xl">+</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {images.length > 0 && (
                <div className="flex space-x-2">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`uploaded-${index}`}
                      className="w-20 h-20 object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          </label>
        </div>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product name"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <div className="flex items-center mb-4">
          <span className="mr-2">Select State:</span>
          <label className="mr-4">
            <input
              type="radio"
              value="New"
              checked={state === "New"}
              onChange={(e) => setState(e.target.value)}
            />
            <span className="ml-1">New</span>
          </label>
          <label>
            <input
              type="radio"
              value="Used"
              checked={state === "Used"}
              onChange={(e) => setState(e.target.value)}
            />
            <span className="ml-1">Used</span>
          </label>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        >
          <option value="" disabled>
            Categories
          </option>
          {/* Add your categories here */}
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          {/* More categories */}
        </select>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <button className="px-4 py-2 text-white bg-blue-600 rounded w-full">
          Add
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;

