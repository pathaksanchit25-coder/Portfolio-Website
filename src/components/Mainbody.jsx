import React from 'react'
import MainTitle from './MainTitle'
import MainDescription from './MainDescription'
import MainLogo from './MainLogo'
import SocialMedia from './SocialMedia'

const Mainbody = ({ timeline }) => {
  return (
    <div className="text-white w-screen flex flex-col">
      {/* Upper Section */}
      <div className="upper-section flex flex-col md:flex-row w-full px-5 md:px-10">
        <div className="title-description w-full md:w-[60%]">
          <MainTitle timeline={timeline} />
          <MainDescription timeline={timeline} />
        </div>
        <div className="logo w-full md:w-[40%] flex items-center justify-center mt-6 md:mt-0">
          <MainLogo timeline={timeline} />
        </div>
      </div>

      {/* Lower Section */}
      <div className="lower-section w-full mt-8 md:mt-10 lg:mt-12">
        <SocialMedia timeline={timeline} />
      </div>
    </div>
  )
}

export default Mainbody