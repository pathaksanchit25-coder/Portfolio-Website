import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Mainbody from './components/Mainbody';
import Projects from './components/Projects';
import Services from './components/Services';
import ChoseUs from './components/ChoseUs';
import Footer from './components/Footer';
import About from './pages/About';

const App = () => {
  const tl = useRef(gsap.timeline());
  const pointRef = useRef(null);
  const [pointerText, setPointerText] = useState('');

  useEffect(() => {
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
    <div className="min-h-screen w-screen bg-[#111] font-mono overflow-x-hidden relative">
      {/* Custom pointer */}
      <div
        ref={pointRef}
        className="scroll fixed top-0 left-0 h-3 w-3 bg-white rounded-full pointer-events-none z-50 flex items-center justify-center text-sm text-black"
      >
        <span className="pointerText whitespace-nowrap">{pointerText}</span>
      </div>

      {/* Navbar always visible */}
      <Navbar timeline={tl.current} pointRef={pointRef} />

      {/* Routes control page content */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mainbody timeline={tl.current} />
              <div className="relative -mt-10 md:mt-16 lg:mt-8">
                <Projects timeline={tl.current} pointRef={pointRef} setPointerText={setPointerText} />
              </div>
              <Services />
              <ChoseUs />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default App;