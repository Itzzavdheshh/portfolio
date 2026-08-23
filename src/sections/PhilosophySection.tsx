import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export const PhilosophySection: React.FC = () => {
  const checkList = [
    'Modern & Intentional Design',
    'Responsive on Every Device',
    'Detail-Oriented Craft',
    'SEO & Accessibility Ready',
    'Performance First',
    'Purposeful Motion',
    'Thoughtful UX',
    'Clean & Maintainable Code'
  ];

  return (
    <section 
      id="philosophy" 
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-28 w-full relative z-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Left Column: Design Philosophy (Spans 5 Columns) */}
        <div className="md:col-span-5 flex flex-col justify-center h-full">
          <FadeIn delay={0} y={30}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono mb-2 block">
              Core Beliefs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-6 leading-tight">
              Design Philosophy
            </h2>
            <div className="bg-[#111115] border border-[#2d2d34] p-6 sm:p-8 rounded-[32px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#B600A8]/20 to-transparent blur-2xl rounded-full" />
              <p className="text-sm sm:text-base font-light text-[#D7E2EA]/85 leading-relaxed relative z-10">
                I believe great digital products should do more than look beautiful—they should tell a story, create memorable experiences, help businesses grow, and solve real problems. Every animation, interaction, and design decision should have a purpose, balancing aesthetics, usability, performance, and business goals.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Why Choose Me (Spans 7 Columns) */}
        <div className="md:col-span-7">
          <FadeIn delay={0.1} y={30}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-mono mb-2 block">
              The Quality Ledger
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-6 leading-tight">
              Why Choose Me
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checkList.map((item) => (
                <div 
                  key={item} 
                  className="flex items-center space-x-3 bg-[#111115]/50 border border-[#2d2d34]/50 hover:border-[#D7E2EA]/20 hover:bg-[#111115] p-4 rounded-2xl transition-all duration-300 group select-none"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#D7E2EA]/90 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
