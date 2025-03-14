import React from "react";

import host from '../../assets/images/host/host.png'
import DateTimeSection from "./DateTimeSection.jsx";
import CountdownTimer from "./CountdownTimer.jsx";
import RegisterBtn from "../registerBtn/RegisterBtn.jsx";
import BonusLine from "../bonusLine/BonusLine.jsx";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col hero-background pb-6">
      <p className="bg-green-500 w-full rounded-b-2xl py-2 sm:text-xl sm:w-8/12 px-2 text-center text-white font-bold">
        Are You Ready for the Next Big Crypto Opportunity?
      </p>
      <p className="font-bold text-3xl text-center pt-5  text-white sm:text-4xl sm:mx-4">
        LEARN HOW TO
        <span className="text-green-700"> MULTIPLY YOUR PROFITS BY 10X-20X</span> <span>OR EVEN </span>
        <span className="underline">MORE IN THE NEXT CRYPTO BULL RUN</span>
      </p>
      <p className="text-white text-lg italic pt-3 text-center">
      Boost Your Portfolio & <span className="underline">Maximize Your Profits With My Secret</span> Crypto Frameworks
      </p>
      <div className="mt-4 lg:flex lg:gap-14 lg:mt-10">
        <div>
        <img className="w-60 mx-auto"
         src={host} alt="" />
         <p className="text-green-500 text-center text-lg font-bold pb-2"><span className="text-white">Host :</span> Muneeb Ansari</p>
        </div>
        <div className="lg:mt-7">
        <DateTimeSection />
        <CountdownTimer />
        </div>
      </div>
         <RegisterBtn />
         <BonusLine />

    </div>
  );
};

export default HeroSection;
