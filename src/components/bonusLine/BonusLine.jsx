import React from "react";
import { getNextSunday } from "../../utils/const.js";




const BonusLine = ({ textColor = "text-white" }) => {
  return (
    <div className={`font-bold text-center sm:text-xl ${textColor}`}>
      Register Before{" "}
      <span className="text-green-500">{getNextSunday()}</span> To Unlock Bonuses Worth{" "}
      <span className="text-green-500">₹6,497/-</span>
    </div>
  );
};

export default BonusLine;
