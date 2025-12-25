import { useGSAP } from '@gsap/react'
import React, { useEffect } from 'react'

const MainTitle = ({ timeline }) => {
  const { contextSafe } = useGSAP()

  const titleAnimation = contextSafe(() => {
    timeline.from('.name', {
      x: -300,
      opacity: 0,
      duration: 0.3
    })
  })

  useEffect(() => {
    titleAnimation()
  }, [])

  return (
    <div className="name px-5 pt-5 w-full mb-6">
      <h1 className="text-3xl sm:text-4xl mb-2 font-extrabold">DevOrbits</h1>
      <h1 className="text-xl sm:text-2xl md:text-3xl">
        Building cinematic, reliable web experiences under DevOrbits.
      </h1>
    </div>
  )
}

export default MainTitle