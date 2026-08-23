import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { LiveProjectButton } from '../components/LiveProjectButton';

export const HeroSection: React.FC = () => {
  const navLinks = [
    { label: 'About', targetId: 'about' },
    { label: 'Craft', targetId: 'services' },
    { label: 'Projects', targetId: 'projects' },
    { label: 'Contact', targetId: 'contact' }
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full relative flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-30">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          <div
            className="text-[#D7E2EA] font-black tracking-widest text-lg md:text-2xl font-mono cursor-pointer"
            onClick={() => handleScroll('root')}
          >
          </div>
          <div className="flex items-center space-x-6 md:space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.targetId)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* 2. Hero Portrait (Centered absolutely, Magnet effect) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Avdhesh Creative Representation"
            className="w-full object-contain pointer-events-none select-none drop-shadow-[0_25px_50px_rgba(215,226,234,0.15)]"
          />
        </Magnet>
      </FadeIn>

      {/* 3. Hero Heading */}
      <div className="w-full flex justify-center z-20 mt-6 sm:mt-4 md:-mt-5 px-6 md:px-10 overflow-hidden">
        <FadeIn delay={0.15} y={40} as="h1" className="w-full text-center">
          <span className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap block text-[9.5vw] sm:text-[10vw] md:text-[10.5vw] lg:text-[11vw]">
            Hi, i&apos;m avdhesh
          </span>
        </FadeIn>
      </div>

      {/* Spacer to push bottom bar to bottom */}
      <div className="flex-grow" />

      {/* 4. Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 w-full gap-6">
        {/* Left Side: Tagline Heading & Subheading */}
        <FadeIn delay={0.35} y={20} className="text-left max-w-xl">
          <h2 className="text-[#D7E2EA] font-bold uppercase tracking-wider text-sm sm:text-base md:text-lg mb-1.5 leading-snug">
            BUILDING DIGITAL PRODUCTS THAT PEOPLE REMEMBER.
          </h2>
          <p className="text-[#D7E2EA]/65 font-light text-xs sm:text-sm leading-relaxed [text-wrap:pretty]">
            I&apos;m Avdhesh Kumar Dadhich — a Software Engineer and builder focused on <span className="whitespace-nowrap">full-stack</span> development, <span className="whitespace-nowrap">AI-powered</span> applications, and premium digital experiences. I turn ideas into fast, scalable, and thoughtfully designed products for the web.
          </p>
        </FadeIn>

        {/* Right Side: CTA Buttons */}
        <FadeIn delay={0.5} y={20} className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto justify-start sm:justify-end">
          <LiveProjectButton
            onClick={() => handleScroll('projects')}
            label="View My Work"
            className="!px-6 !py-2.5 sm:!px-8 sm:!py-3 !text-xs sm:!text-sm"
          />
          <ContactButton
            onClick={() => handleScroll('contact')}
            className="!px-6 !py-2.5 sm:!px-8 sm:!py-3 !text-xs sm:!text-sm"
          />
        </FadeIn>
      </div>
    </section>
  );
};
