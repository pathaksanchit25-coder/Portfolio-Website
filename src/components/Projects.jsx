import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ timeline, pointRef, setPointerText }) => {
  const { contextSafe } = useGSAP();

  const pointerEnter = contextSafe(() => {
    gsap.to(pointRef.current, {
      width: 110,
      height: 45,
      borderRadius: 12,
      duration: 0.3,
      ease: "power2.out",
    });
    setPointerText("View More");
  });

  const pointerLeave = contextSafe(() => {
    gsap.to(pointRef.current, {
      width: 12,
      height: 12,
      borderRadius: "50%",
      duration: 0.3,
      ease: "power2.out"
    });
    setPointerText("");
  });

  return (
    <div className="text-white px-4 sm:px-6 md:px-10 py-10 w-full mt-8 md:mt-6 lg:mt-4">
      {/* Heading */}
      <div className="heading mb-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
          My Projects
        </h1>
      </div>

      {/* Card container */}
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center md:justify-between">
        <ProjectCard
          title="ShopOrbit"
          category="E-Commerce"
          description="ShopOrbit is a full‑stack e‑commerce platform built with React, Tailwind, Express, and MongoDB. It offers smooth product browsing, cart management, and secure checkout, all wrapped in a responsive design. With GSAP‑powered animations and premium branding, it delivers a cinematic shopping experience that’s fast, scalable, and accessible."
          link="https://github.com/yourusername/shoporbit"
          status="Completed"
          pointerEnter={pointerEnter}
          pointerLeave={pointerLeave}
        />
        <ProjectCard
          title="SongOrbit"
          category="Music Streaming"
          description="SongOrbit is a modern music streaming platform built with the MERN stack. It lets users explore tracks, stream seamlessly, and manage playlists with ease. Featuring GSAP‑powered transitions and a responsive design, it delivers a cinematic listening experience that feels smooth and immersive."
          link="https://github.com/yourusername/songorbit"
          status="Under Process"
          pointerEnter={pointerEnter}
          pointerLeave={pointerLeave}
        />
        <ProjectCard
          title="TasteOrbit"
          category="Food Discovery"
          description="TasteOrbit is a food and restaurant discovery app crafted with React, Express, Tailwind, and MongoDB. Users can explore cuisines, view menus, and discover trending spots nearby. With a clean interface and GSAP‑enhanced visuals, it makes food exploration engaging, responsive, and delightful."
          link="https://github.com/yourusername/tasteorbit"
          status="Under Process"
          pointerEnter={pointerEnter}
          pointerLeave={pointerLeave}
        />
        <ProjectCard
          title="WorkOrbit"
          category="Productivity Platform"
          description="WorkOrbit is a productivity and project management tool built with the MERN stack. It provides task tracking, team collaboration, and cinematic dashboards powered by GSAP animations. Designed for scalability and accessibility, it helps teams stay organized and efficient in a visually polished environment."
          link="https://github.com/yourusername/workorbit"
          status="Under Process"
          pointerEnter={pointerEnter}
          pointerLeave={pointerLeave}
        />
      </div>
    </div>
  );
};

export default Projects;