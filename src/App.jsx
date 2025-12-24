import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import gsap from 'gsap'
import Mainbody from './components/Mainbody';
import Projects from './components/Projects';

const App = () => {
  const tl = gsap.timeline();

  useEffect(() => {
    tl.play();
  }, [])
  return (
    <div className='h-screen w-screen bg-[#111] font-mono overflow-x-hidden'>
      <Navbar timeline={tl} />
      <Mainbody timeline={tl} />
      <Projects timeline={tl} />
    </div>
  )
}

export default App