import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import gsap from 'gsap';
import Mainbody from './components/Mainbody';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  const tl = useRef(gsap.timeline()); // persistent GSAP timeline
  const pointRef = useRef(null);
  const [pointerText, setPointerText] = useState('');

  useEffect(() => {
    // Use quickTo for smoother pointer tracking
    const xTo = gsap.quickTo(pointRef.current, "x", { duration: 0.8, ease: "back.out(1.4)" });
    const yTo = gsap.quickTo(pointRef.current, "y", { duration: 0.8, ease: "back.out(1.4)" });

    const pointer = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    tl.current.play();
    window.addEventListener('mousemove', pointer);

    return () => {
      window.removeEventListener('mousemove', pointer);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-[#111] font-mono overflow-x-hidden relative">
      {/* Custom pointer */}
      <div
        ref={pointRef}
        className="scroll fixed top-0 left-0 h-3 w-3 bg-white rounded-full pointer-events-none z-50 flex items-center justify-center text-sm text-black"
      >
        <span className="pointerText whitespace-nowrap">{pointerText}</span>
      </div>

      {/* Components */}
      <Navbar timeline={tl.current} pointRef={pointRef} />
      <Mainbody timeline={tl.current} />

      {/* Shift Projects upward */}
      <div className="relative -mt-10 md:mt-16 lg:mt-8">
        <Projects timeline={tl.current} pointRef={pointRef} setPointerText={setPointerText} />
      </div>
      <div className="footer"><Footer/></div>
    </div>
  );
};

export default App;