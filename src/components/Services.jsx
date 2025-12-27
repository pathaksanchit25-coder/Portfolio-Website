import React from 'react';

const Services = () => {
  return (
    <div className="main text-white px-8 py-16 bg-[#111]">
      {/* Heading */}
      <div className="heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-6 text-center">
        <h1>Services Provided</h1>
      </div>

      {/* Intro */}
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
        At <span className="font-semibold text-blue-400">DevOrbits</span>, I specialize in crafting 
        cinematic, reliable, and scalable web experiences. From backend logic to frontend polish, 
        every detail is refined for performance, accessibility, and immersive interaction.
      </p>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Full-Stack Development */}
        <div className="service-card bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Full‑Stack Web Development</h2>
          <p className="text-gray-300 mb-4">
            Building scalable, responsive, and cinematic web applications using React, Node.js, Express, and MongoDB. 
            Every project is crafted with performance, accessibility, and reliability at its core.
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
            <li>Custom APIs & backend logic</li>
            <li>Secure authentication & user management</li>
            <li>Database design & optimization</li>
            <li>Responsive layouts across devices</li>
          </ul>
          <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>

        {/* Card 2: Cinematic Motion & Performance */}
        <div className="service-card bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Cinematic Motion & Performance (Frontend)</h2>
          <p className="text-gray-300 mb-4">
            Delivering immersive experiences with modern animation frameworks, custom pointer effects, and optimized performance. 
            DevOrbits ensures smooth motion, responsive layouts, and a premium feel across all devices.
          </p>
          <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
            <li>Scroll & timeline animations</li>
            <li>Custom cursor & pointer interactions</li>
            <li>Performance tuning & accessibility</li>
            <li>Reusable, modular frontend components</li>
          </ul>
          <button className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;