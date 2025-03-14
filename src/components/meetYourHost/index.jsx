import React from "react";
import host from "../../assets/images/host/host.png";

const MeetYourHost = () => {
  return (
    <div className="bg-[#0a0f1e] text-white p-6  border border-gray-700 relative  mx-auto shadow-lg">
      {/* Header Badge */}
      <div className="absolute text-md  text-center -top-5 left-1/2 transform -translate-x-1/2 bg-green-600 px-2 py-1 sm:px-6 sm:py-2 rounded-lg font-bold sm:text-lg shadow-md">
  MEET YOUR HOST
</div>


      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 mt-6 lg:mx-36 ">
        {/* Host Image */}
        <img
          src={host}
          alt="Host"
          className="w-56 h-56 rounded-lg object-cover shadow-md"
        />

         {/* Host Information */}
         <div className="text-center md:text-left border border-gray-500 p-4 rounded-lg">
          <p className="text-md text-gray-300 leading-relaxed">
            <strong className="text-white text-base">Muneeb Ansari</strong> is a renowned crypto
            expert with extensive knowledge and hands-on experience in the
            digital currency market.{" "}
            <span className="text-green-400 underline cursor-pointer hover:text-blue-300 transition">
              He has mentored thousands of students
            </span>, guiding them to successful investments and significant financial gains.
          </p>

          <p className="mt-3 text-md text-gray-400 leading-relaxed">
            With a practical approach and deep market insights, Muneeb helps
            individuals navigate the complexities of crypto trading.
          </p>

          <p className="mt-3 text-md text-gray-400 leading-relaxed">
            Join him in{" "}
            <span className="text-green-400 font-semibold cursor-pointer hover:text-green-300 transition">
              This Workshop To Maximize Your Earnings
            </span>{" "}
            and make the most of the upcoming crypto bull run.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetYourHost;
