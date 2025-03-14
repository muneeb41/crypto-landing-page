import React from 'react';
import maximizeProfits from '../../assets/images/benefits/maximizeProfits.webp';
import riskManagement from '../../assets/images/benefits/riskManagement.webp';
import smartAltcoin from '../../assets/images/benefits/smartAltcoin.webp';
import track from '../../assets/images/benefits/track.webp';
import RegisterBtn from '../registerBtn/RegisterBtn';
import BonusLine from '../bonusLine/BonusLine';

const benefitsData = [
  {
    img: maximizeProfits,
    title: 'Maximize Profits',
    description: 'Unlock Strategies To Boost Your Investment Returns.',
  },
  {
    img: track,
    title: 'Track Market Trends',
    description: 'Learn To Identify And Act On Emerging Trends.',
  },
  {
    img: smartAltcoin,
    title: 'Smart Altcoin Picks',
    description: 'Discover Which Altcoins Are Set For High Growth.',
  },
  {
    img: riskManagement,
    title: 'Effective Risk Management',
    description: 'Master Techniques To Protect And Grow Your Investments.',
  },
];

const Benefits = () => {
  return (
    <div className="text-center bg-[#f5f5f5] pb-10 px-4">
      <h2 className="text-3xl font-bold mb-6">
        Benefits From <span className="text-green-600">The Workshop</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center p-2 border-2 border-dotted border-green-500 rounded-lg shadow-md bg-white"
          >
            <img src={benefit.img} alt={benefit.title} className="w-16 h-16 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-green-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      <RegisterBtn />
      <BonusLine textColor='text-black' />
    </div>
  );
};

export default Benefits;