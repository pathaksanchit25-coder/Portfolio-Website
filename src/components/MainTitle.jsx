import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useEffect } from 'react'

const MainTitle = ({timeline}) => {

    const {contextSafe} = useGSAP();

    const titleAnimation = contextSafe(()=>{
        timeline.from('.name',{
            x:-300,
            opacity:0,
            duration:0.3
        })
    })

    useEffect(()=>{
        titleAnimation();
    },[])

    return (
        <div>
            <div className="name px-5 pt-5 w-full mb-8">
                <h1 className='text-4xl mb-2 font-extrabold'>DevOrbits</h1>
                <h1 className='text-4xl'>Building cinematic, reliable web experiences under DevOrbits.</h1>
            </div>
        </div>
    )
}

export default MainTitle