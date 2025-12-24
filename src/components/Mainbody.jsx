import React from 'react'
import MainTitle from './MainTitle'
import MainDescription from './MainDescription'
import MainLogo from './MainLogo'
import SocialMedia from './SocialMedia'

const Mainbody = ({ timeline }) => {
    return (
        <div className='text-white h-[80%] w-screen '>
            <div className="upper-section">
                <div className="main h-full flex px-5 w-full ">
                    <div className="title-description w-[60%] h-full">
                        <MainTitle timeline={timeline} />
                        <MainDescription timeline={timeline} />
                    </div>
                    <div className="logo w-[40%] flex items-center justify-center">
                        <MainLogo timeline={timeline} />
                    </div>
                </div>
            </div>
            <div className="lower-section h-[20%] flex items-center w-full">
                <SocialMedia timeline={timeline} />
            </div>
        </div>
    )
}

export default Mainbody