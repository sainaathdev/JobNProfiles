import React, { useState } from "react";
import { FaStar, FaTrophy } from "react-icons/fa";

const TopBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-orange-500 text-white px-4 py-3 relative">
      {/* Dismiss Button */}
      <button
        className="absolute right-3 top-3 text-white text-2xl font-bold"
        onClick={() => setVisible(false)}
      >
        ×
      </button>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
        <span className="font-bold text-lg sm:text-xl flex items-center justify-center gap-1">
          🎁 <FaTrophy className="text-xl sm:text-2xl" />
          SPECIAL OFFER: 90 Day Money Back Guarantee!
        </span>

        <span className="bg-white text-orange-500 font-semibold rounded-full px-3 py-1 text-sm sm:text-base">
          47,240 Happy Customers
        </span>

        <FaStar className="text-yellow-400 text-xl sm:text-2xl" />
      </div>

      {/* Offer Text */}
      <p className="mt-2 text-sm sm:text-base text-center">
        Limited time offer for first 50,000 customers - Join now!
      </p>
    </div>
  );
};

export default TopBanner;
