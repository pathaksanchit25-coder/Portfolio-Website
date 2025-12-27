import React from 'react';

const About = () => {
  return (
    <section className="about text-white px-8 py-20 bg-[#111]">
      {/* Hero Banner */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
          About Me
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Crafting cinematic, reliable, and scalable web experiences under the brand 
          <span className="text-blue-400 font-semibold"> DevOrbits</span>. 
          I merge technical precision with creative polish to deliver immersive digital journeys.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* My Journey */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">👨‍💻 My Journey</h2>
          <p className="text-gray-300 mb-4">
            I began my coding journey with a fascination for interactive, cinematic websites. 
            Over time, I mastered React, Node.js, MongoDB, and Tailwind CSS, while exploring 
            advanced animation frameworks. My focus has always been blending reliability with creativity.
          </p>
          <p className="text-gray-300">
            Currently, I’m expanding the <span className="text-blue-400">Orbit Suite</span> — 
            apps like ShopOrbit, SongOrbit, TasteOrbit, and WorkOrbit — each showcasing my 
            full‑stack skills and cinematic design philosophy.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">🛠 Skills & Expertise</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Frontend: React.js, Tailwind CSS, JavaScript (ES6+)</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Animations: GSAP, custom pointer/cursor effects, future Three.js integration</li>
            <li>Responsive & accessible design principles</li>
            <li>Modular component architecture</li>
            <li>Branding & copywriting for premium experiences</li>
          </ul>
        </div>

        {/* Values */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">🌟 My Values</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li><span className="text-blue-400 font-semibold">Reliability:</span> Clean, maintainable code that lasts.</li>
            <li><span className="text-blue-400 font-semibold">Creativity:</span> Cinematic visuals and immersive interactions.</li>
            <li><span className="text-blue-400 font-semibold">Scalability:</span> Apps designed to grow with user needs.</li>
            <li><span className="text-blue-400 font-semibold">Accessibility:</span> Inclusive design for all users.</li>
            <li><span className="text-blue-400 font-semibold">Collaboration:</span> Open to feedback and teamwork.</li>
          </ul>
        </div>

        {/* Fun Facts */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">🎯 Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>I love experimenting with cinematic animations and creative code solutions.</li>
            <li>My birthday is on <span className="text-blue-400">November 25th</span>.</li>
            <li>I enjoy expanding the Orbit‑themed apps as portfolio centerpieces.</li>
            <li>Outside coding, I’m passionate about branding and storytelling.</li>
          </ul>
        </div>

    

        {/* Tech Stack Showcase */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">⚡ Tech Stack</h2>
          <p className="text-gray-300 mb-4">
            I work with a modern stack that balances performance and creativity:
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-blue-600 rounded-lg">React</span>
            <span className="px-4 py-2 bg-green-600 rounded-lg">Node.js</span>
            <span className="px-4 py-2 bg-yellow-600 rounded-lg">JavaScript</span>
            <span className="px-4 py-2 bg-teal-600 rounded-lg">Tailwind CSS</span>
            <span className="px-4 py-2 bg-purple-600 rounded-lg">MongoDB</span>
            <span className="px-4 py-2 bg-pink-600 rounded-lg">GSAP</span>
            <span className="px-4 py-2 bg-indigo-600 rounded-lg">Three.js (future)</span>
          </div>
        </div>

        {/* Philosophy / Approach */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition md:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">💡 My Approach</h2>
          <p className="text-gray-300">
            I believe in iterative design — refining every detail until it feels cinematic and reliable. 
            My workflow combines prototyping, accessibility checks, and performance tuning. 
            I value collaboration and feedback, ensuring every project aligns with both technical standards 
            and creative vision.
          </p>
        </div>

      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">🚀 Let’s Build Together</h2>
        <p className="text-gray-400 mb-6">
          Interested in collaborating or exploring my work? Reach out and let’s craft something cinematic.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default About;