import React from "react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

const Footer = () => {
    return (
        
        <footer className="bg-[#111] text-white py-8 px-6 mt-12 border-t border-gray-700">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Branding */}
                <div className="text-center md:text-left">
                    <h1 className="text-xl font-bold tracking-wide">DevOrbits</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Crafting cinematic, reliable web experiences ✨
                    </p>
                </div>

                {/* Middle: Navigation */}
                <div className="flex gap-6 text-sm">
                    <a href="#projects" className="hover:text-amber-400 transition-colors">
                        Projects
                    </a>
                    <a href="#about" className="hover:text-amber-400 transition-colors">
                        About
                    </a>
                    <a href="#contact" className="hover:text-amber-400 transition-colors">
                        Contact
                    </a>
                </div>

                {/* Right: Social Links */}
                <div className="flex gap-4">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-400 transition-colors"
                    >
                        Instagram
                    </a>
                </div>
            </div>

            {/* Bottom line */}
            <div className="text-center text-gray-500 text-xs mt-6">
                © {new Date().getFullYear()} DevOrbits. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;