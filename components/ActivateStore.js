import React from 'react';
import Image from 'next/image';
import activateImg from '../src/assets/ACTIV.png';

const ActivateStore = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="w-3/4 max-w-lg text-center">
          <Image src={activateImg} alt="Activate Store" width={250} height={250} />
          <p className="my-4 text-sm">
            Activate your store for just <span className="font-bold">#500</span> and enjoy a month-long selling spree! With Metor, post unlimited goods for sale until the same date next month. Don't miss out on this opportunity to showcase your items to your university community!
          </p>
          <button className="px-4 py-2 mt-4 text-white bg-blue-600 rounded">
            Activate
          </button>
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

export default ActivateStore;


