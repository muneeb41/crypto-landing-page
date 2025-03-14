import React, { useState } from "react";
import RegisterBtn from "../registerBtn/RegisterBtn";
import BonusLine from "../bonusLine/BonusLine";



const askedQuestionsData = [
  {
    question: "How long is the workshop?",
    answer: "The Workshop Duration Is 3 Hours.",
  },
  {
    question: "What is the workshop about?",
    answer:
      "The workshop covers strategies to capitalize on the upcoming crypto bull run, including Bitcoin price trends, altcoin investments, whale tracking, and more.",
  },
  {
    question: "Who is the workshop for?",
    answer:
      "This workshop is for crypto enthusiasts, investors seeking growth, beginners and intermediate traders, those interested in altcoins, risk-averse investors, and tech-savvy individuals.",
  },
  {
    question: "How can I benefit from this workshop?",
    answer:
      "You’ll gain insights into Bitcoin’s potential, learn how to track and leverage whale activity, identify high-growth altcoins, and plan your investment strategy to maximize profits.",
  },
  {
    question: "Is there any prerequisite knowledge required?",
    answer:
      "No prior knowledge is required. The workshop is designed to be accessible for all levels, from beginners to experienced traders.",
  },
  {
    question: "Can I ask questions during the workshop?",
    answer: "Yes, there will be opportunities for Q&A after the workshop.",
  },
  {
    question: "Will there be a recording of the workshop?",
    answer:
      "No recording will be provided. Please attend the live session to get the most out of the workshop.",
  },
];

const AskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto py-12 px-6 bg-gradient-to-b from-[#020617] to-[#0a0f1f] rounded-lg shadow-lg pb-36">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        Frequently Asked <span className="text-green-400">Questions</span>
      </h2>
      <div className="space-y-4 lg:mx-60">
        {askedQuestionsData.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-300 bg-[#0a0f1f] shadow-md ${
              openIndex === index ? "border-green-500 border-2" : "border border-gray-700"
            } rounded-lg`}
          >
            <button
              className="w-full flex justify-between items-center p-5 text-lg font-medium text-white hover:bg-[#0d1424] transition-all duration-200 rounded-lg"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
              <span className="text-green-400 text-xl">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-5 text-gray-300 text-md animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <RegisterBtn />
      <BonusLine />
    </div>
  );
};

export default AskedQuestions;
