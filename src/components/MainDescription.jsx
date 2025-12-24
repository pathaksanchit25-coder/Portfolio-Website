import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react'

const MainDescription = ({ timeline }) => {

    const { contextSafe } = useGSAP();


    const descriptionAnimation = contextSafe(() => {
        timeline.from('.desc', {
            x: -300,
            opacity: 0,
            duration: 0.3
        })
    })


    useEffect(() => {
        descriptionAnimation();
    }, [])
    return (
        <div>
            <div className="desc w-full px-5">
                <h1 className='text-lg'>I’m Sanchit, the creator behind DevOrbits, where I bring together design and engineering to craft immersive web experiences. As a college student and full‑stack developer, I focus on building projects that balance reliability with creativity — from secure authentication flows and scalable backends to cinematic interfaces powered by GSAP animations.
                    My work emphasizes resilient UX, reusable components, and polished details that make applications feel alive. Whether it’s refining backend logic or designing glassmorphic layouts with subtle gradients, I believe every project should be both robust and visually engaging. Through DevOrbits, my goal is simple: to create web applications that inspire confidence and delight in equal measure
                </h1>
            </div>
        </div>
    )
}

export default MainDescription