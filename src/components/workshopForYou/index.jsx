import React from "react";
import BeginnerTrader from "../../assets/images/workshopForYou/Beginner-or-Intermediate-Trader.webp";
import CryptoEnthusiast from "../../assets/images/workshopForYou/Crypto-Enthusiast.webp";
import InterestedInAltcoins from "../../assets/images/workshopForYou/Interested-in-Altcoins.webp";
import InvestorSeekingGrowth from "../../assets/images/workshopForYou/Investor-Seeking-Growth.webp";
import RiskAverse from "../../assets/images/workshopForYou/Risk-averse.webp";
import TechSavvy from "../../assets/images/workshopForYou/Tech-savvy.webp";
import RegisterBtn from "../registerBtn/RegisterBtn";
import BonusLine from "../bonusLine/BonusLine";


const workshopData = [
  {
    image: CryptoEnthusiast,
    heading: "Crypto Enthusiast",
    description:
      "Passionate About Cryptocurrency And Eager To Expand Your Knowledge",
  },
  {
    image: RiskAverse,
    heading: "Risk-averse",
    description:
      "Who Want To Discover Strategies To Protect Their Investments And Manage Risks",
  },
  {
    image: TechSavvy,
    heading: "Tech-savvy",
    description:
      "Who Want To Learn Cutting-Edge Tools And Strategies For Crypto Trading",
  },
  {
    image: InvestorSeekingGrowth,
    heading: "Investor Seeking Growth",
    description: "Who Want To Maximize Your Profits During The Upcoming Bull Run",
  },
  {
    image: BeginnerTrader,
    heading: "Beginner or Intermediate Trader",
    description:
      "Who Wants Some Experience Or Refine Your Existing Strategy In Trading",
  },
  {
    image: InterestedInAltcoins,
    heading: "Interested in Altcoins",
    description:
      "Who Want To Learn How To Select And Invest In Promising Altcoins Coins",
  },
];

const WorkshopForYou = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-10">
        This Workshop Is For You... If You're A
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {workshopData.map((item, index) => (
          <div
            key={index}
            className=" bg-[#0D1B2A]  p-4 rounded-lg border-2 border-green-500  text-center flex flex-col items-center"
          >
            <img src={item.image} alt={item.heading} className="w-32 h-32 mb-4" />
            <h3 className="text-green-500 text-xl font-semibold mb-2">
              {item.heading}
            </h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
      <RegisterBtn />
      <BonusLine />
    </div>
  );
};

export default WorkshopForYou;
