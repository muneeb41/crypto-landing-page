import React from "react";
import bonus1 from "../../assets/images/bonus/bonus1.webp";
import bonus2 from "../../assets/images/bonus/bonus2.webp";
import bonus3 from "../../assets/images/bonus/bonus3.webp";
import RegisterBtn from "../registerBtn/RegisterBtn";
import BonusLine from "../bonusLine/BonusLine";


// Bonus Data Array
const bonusData = [
  {
    id: 1,
    title: "How To Find Next 100X Coin",
    description: "Gain Insider Techniques To Uncover Potential 100X Investments.",
    price: "₹1,999/-",
    image: bonus1,
  },
  {
    id: 2,
    title: "How To Identify Early Trends",
    description: "Discover Methods To Identify & Capitalize On Emerging Crypto Trends.",
    price: "₹1,499/-",
    image: bonus2,
  },
  {
    id: 3,
    title: "How To Track Whales Wallet",
    description: "Access Exclusive Strategies For Tracking And Using Whale Wallet Activities.",
    price: "₹2,999/-",
    image: bonus3,
  },
];

const FreeBonus = () => {
  return (
    <div className="text-black py-8 px-4 bg-[#f5f5f5]">
      {/* Header Section */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
        FREE BONUSES <span className="text-green-500">AWAITING FOR YOU!!!</span>
      </h2>
      <p className="text-center text-gray-600 mt-1 text-sm sm:text-base">
        Get 3 Amazing Bonuses Worth <span className="font-bold">₹6,497</span> For Absolutely <span className="text-red-500 font-semibold">FREE!!!</span>
      </p>

      {/* Bonus Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 max-w-5xl mx-auto">
        {bonusData.map((bonus) => (
          <div
            key={bonus.id}
            className="border border-green-500 rounded-lg p-5 pb-1 text-center shadow-lg bg-white relative"
          >
            {/* Gift Icon */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white p-1">
              <span className="text-3xl bg-transparent">🎁</span>
            </div>

            {/* Bonus Title */}
            <h3 className="text-lg font-bold text-green-600">
              <span className="text-green-700 font-semibold">Bonus #{bonus.id}:</span> {bonus.title}
            </h3>

            {/* Bonus Image (Fixed Size) */}
            <div className="w-full flex justify-center">
              <img
                src={bonus.image}
                alt={bonus.title}
                className="w-[220px] h-[150px] object-cover my-4 rounded-md"
              />
            </div>

            {/* Bonus Description */}
            <p className="text-gray-700 text-sm leading-relaxed">{bonus.description}</p>

            {/* Bonus Price */}
            <p className="text-red-500 font-bold mt-2 text-lg ">Priced: {bonus.price}</p>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="text-center mt-8">
        <p className="text-2xl font-bold text-red-600">Total Value Of Bonuses: ₹6,497</p>
        <p className="text-lg font-semibold text-gray-700 ">Normal Workshop Ticket Price: <span className="line-through">₹497</span></p>
        <p className="text-2xl font-bold text-green-600 mt-2">Buy Today At Just ₹9</p>
        <RegisterBtn />
        <BonusLine textColor="text-black" />
      </div>
    </div>
  );
};

export default FreeBonus;
