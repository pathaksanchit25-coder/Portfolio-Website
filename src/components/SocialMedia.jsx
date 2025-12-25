import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

const SocialMedia = ({ timeline }) => {
  const containerRef = useRef(null)
  const { contextSafe } = useGSAP()

  const socialAnimation = contextSafe(() => {
    if (timeline && containerRef.current) {
      const links = containerRef.current.querySelectorAll('a')
      gsap.set(links, { autoAlpha: 0, y: 10 })
      timeline.to(links, {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: 'power1.out'
      })
    }
  })

  useEffect(() => {
    socialAnimation()
  }, [timeline])

  const links = [
    {
      href: 'https://github.com/pathaksanchit25-coder',
      label: 'GitHub',
      icon: <FaGithub className="text-xl sm:text-2xl" />
    },
    {
      href: 'https://instagram.com/your_instagram_handle',
      label: 'Instagram',
      icon: <FaInstagram className="text-xl sm:text-2xl" />
    },
    {
      href: 'https://youtube.com/@your_channel',
      label: 'YouTube',
      icon: <FaYoutube className="text-xl sm:text-2xl" />
    },
    {
      href: 'https://www.linkedin.com/in/sanchit-pathak-1a5b72374/',
      label: 'LinkedIn',
      icon: <FaLinkedin className="text-xl sm:text-2xl" />
    }
  ]

  return (
    <div className="flex w-full">
      <div
        ref={containerRef}
        className="social flex flex-wrap justify-center md:justify-between w-full px-5 md:px-11 gap-4 md:gap-0"
      >
        {links.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 border-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:text-black"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia