import React, { useEffect, useState } from 'react';
import penguin from '../assets/Images/Penguin.png';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { FaGithub } from "react-icons/fa";
import gsap from 'gsap';

const Navbar = ({ timeline, pointRef }) => {
  const { contextSafe } = useGSAP();
  const [isOpen, setIsOpen] = useState(false);

  const pointerEnter = (text) => {
    gsap.to(pointRef.current, {
      width: 110,
      height: 45,
      borderRadius: 12,
      duration: 0.3,
      ease: "power2.out",
    });

    const pointerText = pointRef.current.querySelector('.pointerText');
    if (pointerText) {
      pointerText.innerHTML = text;
    }
  };

  const pointerLeave = () => {
    gsap.to(pointRef.current, {
      width: 12,
      height: 12,
      borderRadius: "50%",
      duration: 0.3,
      ease: "power2.inOut",
    });

    const pointerText = pointRef.current.querySelector('.pointerText');
    if (pointerText) {
      pointerText.innerHTML = '';
    }
  };

  const navAnimation = contextSafe(() => {
    timeline.from('.logo-name', {
      y: -300,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    });

    timeline.from('.links a', {
      y: -300,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
      stagger: 0.15,
    });

    timeline.from('.button', {
      y: -300,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    });
  });

  useEffect(() => {
    navAnimation();
  }, []);

  return (
    <div className="font-mono">
      <div className="main h-20 bg-[#111] text-white flex items-center px-4 sm:px-8 lg:px-10 justify-between ">
        {/* Logo */}
        <div className="logo-name flex items-center gap-2 sm:gap-4">
          <img src={penguin} alt="Logo" className="h-10 sm:h-12" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">DevOrbits</h1>
        </div>

        {/* Links (desktop) */}
        <div className="links hidden md:flex gap-6 lg:gap-20 text-sm sm:text-base">
          <Link
            to="/about"
            className="flex items-center gap-2"
            onMouseEnter={() => pointerEnter("More About me")}
            onMouseLeave={pointerLeave}
          >
            About
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2"
            onMouseEnter={() => pointerEnter("Our Services")}
            onMouseLeave={pointerLeave}
          >
            Services
          </Link>
          <Link
            to="/contacts"
            className="flex items-center gap-2"
            onMouseEnter={() => pointerEnter("Get in Touch")}
            onMouseLeave={pointerLeave}
          >
            Contacts
          </Link>
        </div>

        {/* Button (desktop) */}
        <div className="button hidden sm:block">
          <a
            href="https://github.com/pathaksanchit25-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center gap-2 border-2 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-sm sm:text-base mr-2 font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:text-black"
            >
              <FaGithub className="text-lg sm:text-xl" />
              GitHub Profile
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="bg-[#111] text-white px-4 py-4 flex flex-col gap-4 md:hidden">
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contacts" onClick={() => setIsOpen(false)}>Contacts</Link>
          <a
            href="https://github.com/pathaksanchit25-coder"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;