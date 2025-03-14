import React from "react";
import { MdCheck } from "react-icons/md";
import RegisterBtn from "../registerBtn/RegisterBtn";
import BonusLine from "../bonusLine/BonusLine";


const learningPoints = [
    {
        title: "How To Track Whale Wallets for Insider Moves",
        description: "Monitor the activities of big players in crypto and leverage their moves",
    },
    {
      title: "Find A Good Narrative To Invest Your Funds",
      description: "Get benefits from emerging trends to make a strong investment",
    },
    { title: "Find Free Airdrop", description: "Discover free airdrops and earn rewards without investment" },
    {
        title: "Identify Super Cycle Industries",
        description: "And learn how to invest in them for maximum profits",
    },
    {
        title: "Why Bitcoin’s Price Is Going To Increase To New Heights",
        description: "And how you can make huge money from it",
    },
  {
    title: "Why & How To Invest In ALT Coins",
    description: "Learn how to pick altcoins with the highest potential growth",
  },
  {
    title: "Plan Your Bull Run Strategy",
    description: "Develop a comprehensive plan to maximize your profits in the bull run",
  },
  {
    title: "Best Exchanges for Trading",
    description: "Learn about the best exchanges for buying and selling crypto safely",
  },
];

const LearningSection = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-8">What Will You Learn ?</h2>

      <div className="grid md:grid-cols-2  gap-6">
        {learningPoints.map((item, index) => (
          <div
            key={index}
            className="flex items-start border border-green-500 border-s-4 p-4 pl-2 rounded-lg shadow-md"
          >
            <span className="text-green-500 text-4xl mr-2 mt-1 font-bolder"><MdCheck /></span>
            <div className="text-left">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
       <RegisterBtn />
       <BonusLine  textColor="text-black"/>
    </div>
  );
};

export default LearningSection;
