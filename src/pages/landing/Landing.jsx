import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
import LearningSection from '../../components/learningSection/LearningSection.jsx'
import WorkshopForYou from '../../components/workshopForYou/index.jsx'
import PreviousResults from '../../components/previousResults/index.jsx'
import Benefits from '../../components/benefits/index.jsx'
import MeetYourHost from '../../components/meetYourHost/index.jsx'
import FreeBonus from '../../components/freeBonus/index.jsx'
import AskedQuestions from '../../components/AskedQuestions/index.jsx'
import FixedRegisterBtn from '../../components/fixedRegisterBtn/index.jsx'




const Landing = () => {
  return (
    <div>
         <HeroSection />
         <LearningSection />
         <WorkshopForYou />
         <PreviousResults />
         <Benefits />
         <MeetYourHost />
         <FreeBonus />
         <AskedQuestions />
         <FixedRegisterBtn />
    </div>
  )
}

export default Landing