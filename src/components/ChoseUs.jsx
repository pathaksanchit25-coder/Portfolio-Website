import React from 'react';

const ChoseUs = () => {
  return (
    <section className="chose-us text-white px-8 py-16 bg-[#111]">
      {/* Heading */}
      <div className="heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-6 text-center">
        <h1>Why Choose Us</h1>
      </div>

      {/* Intro */}
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
        At <span className="font-semibold text-blue-400">DevOrbits</span>, we go beyond building websites.  
        We deliver cinematic, reliable, and scalable digital experiences that combine technical precision 
        with creative polish. Here’s what sets us apart:
      </p>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="highlight bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-3">🚀 Performance First</h2>
          <p className="text-gray-300">
            Every project is optimized for speed, accessibility, and responsiveness — ensuring smooth experiences across all devices.
          </p>
        </div>

        {/* Card 2 */}
        <div className="highlight bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-3">🎬 Cinematic Motion & Visuals</h2>
          <p className="text-gray-300">
            From smooth interface transitions to immersive 3D experiences, we integrate modern animation libraries 
            to deliver premium, engaging visuals that stand out.
          </p>
        </div>

        {/* Card 3 */}
        <div className="highlight bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-3">⚡ Scalable Solutions</h2>
          <p className="text-gray-300">
            From small apps to enterprise platforms, our full-stack expertise ensures your product grows seamlessly with your needs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="highlight bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-3">🤝 Reliability & Trust</h2>
          <p className="text-gray-300">
            We value clean code, maintainability, and long-term support — so your project stays reliable and future-ready.
          </p>
        </div>

        {/* Card 5 */}
        <div className="highlight bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-3">🛠 Modern Tech Stack</h2>
          <p className="text-gray-300">
            Leveraging React, Node.js, MongoDB, Tailwind, and advanced animation frameworks, we build with the latest tools 
            for performance and innovation.
          </p>
        </div>

        {/* Card 6 */}
        <div className="highlight bg-[#1a1a1a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-3">💡 Developer Dedication</h2>
          <p className="text-gray-300">
            Every detail is refined with passion and precision — because DevOrbits is built to inspire confidence and delight.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ChoseUs;