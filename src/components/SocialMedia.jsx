import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const SocialMedia = ({ timeline }) => {
    const containerRef = useRef(null);
    const { contextSafe } = useGSAP();

    const socialAnimation = contextSafe(() => {
        if (timeline && containerRef.current) {
            const links = containerRef.current.querySelectorAll('a');
            timeline.fromTo(
                links,
                { y: 10, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.15,
                    ease: 'power1.out'
                }
            );
        }
    });

    useEffect(() => {
        socialAnimation();
    }, [timeline]);

    const links = [
        {
            href: 'https://github.com/pathaksanchit25-coder',
            label: 'GitHub',
            icon: <FaGithub className="text-2xl" />
        },
        {
            href: 'https://instagram.com/your_instagram_handle',
            label: 'Instagram',
            icon: <FaInstagram className="text-2xl" />
        },
        {
            href: 'https://youtube.com/@your_channel',
            label: 'YouTube',
            icon: <FaYoutube className="text-2xl" />
        },
        {
            href: 'https://www.linkedin.com/in/sanchit-pathak-1a5b72374/',
            label: 'LinkedIn',
            icon: <FaLinkedin className="text-2xl" />
        }
    ];

    return (
        <div className="flex h-full w-full">
            <div
                ref={containerRef}
                className="social flex items-center justify-between w-full h-full px-10"
            >
                {links.map(({ href, label, icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border-2 px-6 py-3 sm:px-7 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-110 hover:shadow-lg hover:text-black"
                    >
                        {icon}
                        {label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;