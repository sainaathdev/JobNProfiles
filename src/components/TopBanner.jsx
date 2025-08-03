import React, { useState } from "react";
import { FaStar, FaTrophy } from "react-icons/fa";

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-orange-500 text-white px-4 py-2 text-center relative">
      <span className="font-bold text-xl mr-2">
        🎁
        <FaTrophy className="inline-block text-2xl" /> SPECIAL OFFER: 90 Day
        Money Back Guarantee!
      </span>
      <span className="bg-white p-1 text-orange-500 rounded-full px-2 font-semibold">
        47,240 Happy Customers
      </span>
      <FaStar className="inline-block text-3xl text-yellow-400 ml-2 " />
      <button
        className="absolute right-4 top-2 text-white text-lg"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
      <p className="mt-4 text-md">
        Limited time offer for first 50,000 customers - Join now!
      </p>
    </div>
  );
};

export default TopBanner;
