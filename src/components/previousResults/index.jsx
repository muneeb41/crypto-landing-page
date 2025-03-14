import React from "react";
import RegisterBtn from '../registerBtn/RegisterBtn.jsx'

const feedbackData = [
  {
    name: "Alfia khan",
    initials: "AK",
    color: "bg-red-400",
    time: "11 hours ago",
    review: "Exceeded My Expectations!",
    description:
      "The strategies in this program are next level! The framework provided is simple yet effective. My investments have grown faster than ever.",
    experienceDate: "August 31, 2024",
  },
  {
    name: "Rohit Sharma",
    initials: "RS",
    color: "bg-blue-400",
    time: "11 hours ago",
    review: "Life-Changing Crypto Advice!",
    description:
      "I’ve learned to maximize my crypto profits with this program. The secret frameworks helped me multiply my portfolio beyond expectations!",
    experienceDate: "September 01, 2024",
  },
  {
    name: "Aman Verma",
    initials: "AV",
    color: "bg-green-400",
    time: "4 days ago",
    review: "Game-Changer for Crypto Investors!",
    description:
      "This program changed how I invest in crypto. The frameworks are easy to follow, and I’ve already multiplied my profits.",
    experienceDate: "August 09, 2024",
  },
  {
    name: "Priya Gupta",
    initials: "PG",
    color: "bg-purple-400",
    time: "4 days ago",
    review: "Proven Strategies for Crypto Success!",
    description:
      "I’ve tried other crypto programs, but this one stands out. The simple frameworks helped me grow my portfolio with confidence.",
    experienceDate: "July 30, 2024",
  },
  {
    name: "Nisha Mehta",
    initials: "NM",
    color: "bg-yellow-400",
    time: "1 day ago",
    review: "Perfect for Crypto Success!",
    description:
      "I was skeptical at first, but this program delivers! The tools and frameworks gave me a huge boost in my portfolio.",
    experienceDate: "August 16, 2024",
  },
  {
    name: "Rohan Deshmukh",
    initials: "RD",
    color: "bg-pink-400",
    time: "2 days ago",
    review: "Incredible Crypto Knowledge!",
    description:
      "This course offers great value for both beginners and experienced traders. My profits have grown significantly!",
    experienceDate: "August 22, 2024",
  },
];

const PreviousResults = () => {
  return (
    <div className="bg-[#f5f5f5] pt-10 px-4 pb-3">
      <h2 className="text-center text-2xl font-bold mb-6">
        Have A Look At Our Previous Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-green-400 shadow-md"
          >
            <div className="flex items-center mb-3">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-white mr-3 ${feedback.color}`}
              >
                {feedback.initials}
              </div>
              <div>
                <h3 className="text-sm font-semibold">{feedback.name}</h3>
                <p className="text-xs text-gray-500">{feedback.time}</p>
              </div>
            </div>
            <div className="flex items-center text-yellow-400 text-sm mb-2">
              {"★★★★★"} <span className="ml-2 text-gray-500">Verified</span>
            </div>
            <h4 className="text-base font-semibold text-green-600 mb-1">
              {feedback.review}
            </h4>
            <p className="text-sm text-gray-600">{feedback.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              <strong>Date of experience:</strong> {feedback.experienceDate}
            </p>
          </div>
        ))}
      </div>
       <RegisterBtn />
    </div>
  );
};

export default PreviousResults;
