'use client'; // Add this line at the top

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeftIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid'; // Ensure correct import from Heroicons

// Import images from the assets folder
import img1 from '../src/assets/ad.png';
import img2 from '../src/assets/ac.png';
import img3 from '../src/assets/Rectangle 38.png';
import img4 from '../src/assets/Rectangle 39.png';
import img5 from '../src/assets/Rectangle 40.png';
import img6 from '../src/assets/Rectangle 41.png';

const ProductCard = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-4">
            <div className="relative">
                <Image
                    src={images[currentImage]}
                    alt="Product Image"
                    className="rounded-lg"
                    width={500}
                    height={500}
                />
                <button className="absolute top-2 left-2 bg-blue-500 text-white rounded-full p-2">
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-2">
                    <PencilIcon className="h-6 w-6" />
                </button>
                <button className="absolute bottom-2 right-2 bg-blue-500 text-white rounded-full p-2">
                    <TrashIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="flex space-x-2 mt-4">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 ${idx === currentImage ? 'border-blue-500' : 'border-transparent'}`}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                            width={48}
                            height={48}
                        />
                    </button>
                ))}
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">Bolonese Spaghetti and Meat Balls</h2>
                <div className="flex items-center text-yellow-500 mt-1">
                    <span className="mr-2">4.3</span>
                    <span className="bg-gray-200 text-xs px-2 py-1 rounded">Seller</span>
                </div>
                <p className="text-lg text-blue-500 font-bold mt-2">
                    <span className="text-blue-500">₦</span>8,500
                </p>
                <p className="text-gray-600 mt-2">Spicy spaghetti with garnished meatballs, flavored nicely.</p>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800">Reviews on seller (425)</h3>
                    <div className="mt-2 space-y-4">
                        <div className="flex items-start space-x-2">
                            <div className="w-10 h-10 rounded-full bg-gray-300">
                                <Image
                                    src="/images/emmanuel.jpg"
                                    alt="Emmanuel Ikechukwu"
                                    className="rounded-full"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Emmanuel Ikechukwu</h4>
                                <p className="text-gray-600">The food was very nice, I had to order again because I really enjoyed it.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div className="w-10 h-10 rounded-full bg-gray-300">
                                <Image
                                    src="/images/emily.jpg"
                                    alt="Emily Osadolor"
                                    className="rounded-full"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Emily Osadolor</h4>
                                <p className="text-gray-600">I didn’t like her attitude when she brought my package.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div className="w-10 h-10 rounded-full bg-gray-300">
                                <Image
                                    src="/images/emmanuel.jpg"
                                    alt="Emmanuel Ikechukwu"
                                    className="rounded-full"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800">Emmanuel Ikechukwu</h4>
                                <p className="text-gray-600">The seller is really nice. I got a cargo pant from him, and he delivered exactly what I wanted.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="mt-4 text-blue-500 hover:underline">View More</button>
        </div>
    );
};

export default ProductCard;




