"use client";

import React, { useState } from 'react';

const PaymentI = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const totalAmount = 500;

    const handleApply = () => {
        alert(`Applied for ${selectedMonth} with a total amount of ₦${totalAmount}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-xs md:max-w-md lg:max-w-lg">
                <select
                    className="border border-gray-300 rounded p-2 mb-4 w-full text-base lg:text-lg"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="" disabled>Select Month(s)</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    {/* Add more months as needed */}
                </select>

                <div className="text-lg lg:text-xl font-medium mb-4">
                    Total: <span className="text-blue-600">₦{totalAmount}</span>
                </div>

                <button
                    onClick={handleApply}
                    className="bg-blue-600 text-white font-bold py-2 px-6 rounded w-full hover:bg-blue-700 transition-colors duration-200 text-base lg:text-lg"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default PaymentI;


