import React, { useEffect } from 'react';
import Logo from '../assets/Images/LOGO.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MainLogo = ({ timeline }) => {
    const { contextSafe } = useGSAP();


    const logoAnimation = contextSafe(() => {
        timeline.from('.logo', {
            x: 300,
            opacity: 0,
            duration: 0.4
        },'=-0.4')
    })


    useEffect(() => {
        logoAnimation();
    }, [])
    return (
        <div className="flex items-center justify-center  w-full">
            <div className="logo w-full  flex items-center justify-center ">
                <img
                    src={Logo}
                    alt="DevOrbits Logo"
                    className="w-[80%] h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default MainLogo;