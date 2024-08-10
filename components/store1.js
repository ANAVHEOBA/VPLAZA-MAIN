import Image from 'next/image';
import React from 'react';

// Importing images from the assets directory
import StoreLogo from '../src/assets/Rectangle 361.png';
import Product1 from '../src/assets/Group 177.png';
import Product2 from '../src/assets/Group 178.png';
import Product3 from '../src/assets/Group 179.png';

export default function Store1() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      {/* Store Header */}
      <div className="flex flex-col items-center mt-8 md:flex-row md:justify-between px-8 w-full">
        <div className="flex justify-center md:justify-start">
          <Image
            src={StoreLogo}
            alt="Store Logo"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>
        <div className="text-center mt-4 md:mt-0 md:text-left md:ml-8">
          <h1 className="text-2xl md:text-4xl font-semibold">Your Food Store</h1>
          <p className="text-lg md:text-2xl font-bold mt-2">Steralizer</p>
          <p className="text-sm md:text-lg text-gray-600">Bursting your head with delicious meal</p>
          <div className="flex justify-center space-x-2 mt-4 md:justify-start">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm md:text-base">
              Edit
            </button>
            <button className="bg-blue-200 text-blue-500 px-4 py-2 rounded-full text-sm md:text-base">
              Switch to product
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-grow mt-8 px-8 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">Foods</h2>
          <button className="flex items-center text-blue-500">
            <span className="mr-2 text-lg md:text-xl">+</span> 
            <span className="text-sm md:text-base">Add New Product</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {/* Product 1 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Image
              src={Product1}
              alt="Product 1"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm md:text-base font-medium">iPhone 12promax 256GB</h3>
              <p className="text-xs md:text-sm text-gray-500">4.3 ⭐ 16.2k</p>
              <p className="text-lg md:text-xl font-bold mt-1">₦3,000</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Image
              src={Product2}
              alt="Product 2"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm md:text-base font-medium">White Plastic Chair with arms</h3>
              <p className="text-xs md:text-sm text-gray-500">4.3 ⭐ 16.2k</p>
              <p className="text-lg md:text-xl font-bold mt-1">₦8,500</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <Image
              src={Product3}
              alt="Product 3"
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm md:text-base font-medium">White Plastic Chair with arms</h3>
              <p className="text-xs md:text-sm text-gray-500">4.3 ⭐ 16.2k</p>
              <p className="text-lg md:text-xl font-bold mt-1">₦8,500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-blue-600 py-4 flex justify-around items-center">
        <button className="text-white">
          <Image src="/path/to/home_icon.png" alt="Home" width={24} height={24} />
        </button>
        <button className="text-gray-500">
          <Image src="/path/to/profile_icon.png" alt="Profile" width={24} height={24} />
        </button>
        <button className="text-white">
          <Image src="/path/to/settings_icon.png" alt="Settings" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}


