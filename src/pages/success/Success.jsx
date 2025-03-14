import React from "react";
import { getNextSunday ,getTime, whatsappUrl} from "../../utils/const.js";


const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-6">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg text-center w-full max-w-lg">
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-400">Congratulations For Registering!</h2>
        <p className="mt-4 text-lg">
          <span className="font-semibold">Be Ready For The Workshop On</span>
          <br />
          <span className="text-green-400 text-xl font-bold">{getNextSunday()} at {getTime()}</span>
        </p>
        <p className="mt-6 text-sm">Join The WhatsApp Group For Support & Updates</p>
        <a href={whatsappUrl} target="_blank">
        <button className="mt-4 bg-green-500  text-white py-2 px-2 text-center sm:px-6 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600">
          📱 WhatsApp Group
        </button>
        </a>
      </div>
    </div>
  );
};

export default Success;
