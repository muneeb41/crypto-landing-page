import React, { useState, useEffect } from "react";
import { paymentUrl } from "../../utils/const.js";
import { Link } from "react-router-dom";


const FixedRegisterBtn = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-green-400 shadow-lg rounded-t-lg py-4 px-5 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white text-center md:text-left">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="font-semibold text-yellow-400 text-lg">Almost Full</span>
          <span >
            Only <span className="text-red-500 font-bold blink-text">15</span> <span className="blink-text">Seats Left</span> 
          </span>
          <span className="hidden md:inline-block">|</span>
          <span className="text-gray-400">
            Offer Will Expire In <span className="text-green-400 font-bold">{minutes}</span> Min{" "}
            <span className="text-green-400 font-bold">{seconds}</span> Sec
          </span>
        </div>

        {/* Right Section (Button) */}
         <a href="https://superprofile.bio/vp/67d41fd98a981f001365ac10">
        <button className="bg-green-700 animate-move hover:bg-green-600 transition-all duration-300 text-white font-bold py-2 px-6 rounded-lg shadow-md text-xl">
          Register Now
        </button>  
         </a>
      </div>

      {/* Blinking Animation */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .blink-text {
            animation: blink 0.8s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FixedRegisterBtn;
