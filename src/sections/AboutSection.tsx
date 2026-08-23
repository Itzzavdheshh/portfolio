import React from 'react';
import { GraduationCap, Cpu, Layers, Sparkles } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';

export const AboutSection: React.FC = () => {
  const bioText = "I’m Avdhesh Kumar Dadhich — a Software Engineer, builder, and occasional professional overthinker. As a Computer Science & Engineering student at JIET, Jodhpur, I build modern, scalable digital products across web, mobile, and AI with React, TypeScript, Node.js, Flutter, PostgreSQL, Firebase, and AI APIs. From SaaS platforms to open-source developer tools, I focus on clean engineering, intuitive UX, and turning ideas into fast, accessible, and genuinely useful software. Build with purpose. Design with intent. Ship with confidence.";

  const specializations = [
    'Frontend Web Development (React & Next.js)',
    'Mobile Apps (Flutter & Jetpack Compose)',
    'Backend & REST API Development',
    'Authentication & Security (JWT)',
    'Database Design (SQL & NoSQL)',
    'Cloud & BaaS (Firebase & Supabase)',
    'CI/CD & Containerization (Docker)',
    'Cross-Platform Development'
  ];

  const techStack = [
    { category: 'Languages & Core', items: ['Java', 'Kotlin', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3'] },
    { category: 'Frontend & Mobile', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Vite', 'React Flow', 'Flutter', 'Android (Jetpack Compose)', 'Figma'] },
    { category: 'Backend & Cloud', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'PostgreSQL', 'MongoDB', 'Supabase', 'MySQL', 'Firebase'] },
    { category: 'Dev Tools & Workflow', items: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Docker', 'Postman', 'VS Code', 'Vercel', 'Render'] }
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen w-full relative flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 overflow-hidden"
    >
      {/* Absolute Decorative 3D Corner & Flank Images (Floating beside heading & narrative) */}
      {/* Top Left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[2%] sm:left-[3%] md:left-[4%] z-10 w-[90px] sm:w-[130px] md:w-[170px] pointer-events-none select-none opacity-60 md:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Decor"
          className="w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Mid Left: 3D Smiley / Object (Floats beside narrative text) */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[28%] left-[2%] sm:left-[3%] md:left-[5%] lg:left-[8%] z-10 w-[95px] sm:w-[130px] md:w-[160px] pointer-events-none select-none opacity-60 md:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shape Decor"
          className="w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Top Right: Lego Icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[2%] sm:right-[3%] md:right-[4%] z-10 w-[90px] sm:w-[130px] md:w-[170px] pointer-events-none select-none opacity-60 md:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Decor"
          className="w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Mid Right: 3D Cursor / Group (Floats beside narrative text) */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[28%] right-[2%] sm:right-[3%] md:right-[5%] lg:right-[8%] z-10 w-[105px] sm:w-[140px] md:w-[175px] pointer-events-none select-none opacity-60 md:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Group Decor"
          className="w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
        />
      </FadeIn>

      {/* Content Wrapper */}
      <div className="flex flex-col items-center z-20 max-w-5xl w-full text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight block"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Scroll Reveal Unified Text Block */}
        <div 
          className="max-w-[760px] w-full mb-16 sm:mb-20 md:mb-24 px-4 text-center"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
        >
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium leading-relaxed"
          />
        </div>

        {/* Grid: Education, Specializations, and Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left mt-4">
          {/* Card 1: Education & Specialization */}
          <FadeIn delay={0.2} y={30} className="flex flex-col gap-8">
            {/* Education Subcard */}
            <div className="bg-[#111115] border border-[#2d2d34] p-6 sm:p-8 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-[#2d2d34] pb-2 font-mono flex items-center gap-2">
                  <GraduationCap size={16} className="text-[#D7E2EA]/60" />
                  <span>Education Ledger</span>
                </h3>
                <h4 className="text-lg sm:text-xl font-bold uppercase text-[#D7E2EA]">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-sm text-emerald-400 font-medium mt-1">
                  Computer Science & Engineering
                </p>
              </div>
              <div className="mt-6 border-t border-[#2d2d34]/60 pt-4">
                <p className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest font-mono">Institution</p>
                <p className="text-sm sm:text-base font-semibold text-white">JIET</p>
                <p className="text-xs text-[#D7E2EA]/60 font-light">Jodhpur, Rajasthan, India</p>
              </div>
            </div>

            {/* Specializations Subcard */}
            <div className="bg-[#111115] border border-[#2d2d34] p-6 sm:p-8 rounded-3xl flex-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-[#2d2d34] pb-2 font-mono flex items-center gap-2">
                <Layers size={16} className="text-[#D7E2EA]/60" />
                <span>Core Capabilities</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <span 
                    key={spec}
                    className="px-3 py-1.5 bg-[#17171f] border border-[#26262d] rounded-full text-xs font-light text-[#D7E2EA]/80 hover:border-[#D7E2EA]/30 hover:text-white transition-colors select-none"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Tech Stack Dashboard */}
          <FadeIn delay={0.3} y={30} className="bg-[#111115] border border-[#2d2d34] p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-[#2d2d34] pb-2 font-mono flex items-center gap-2">
                <Cpu size={16} className="text-[#D7E2EA]/60" />
                <span>Tech Stack Matrix</span>
              </h3>
              
              <div className="space-y-5">
                {techStack.map((category) => (
                  <div key={category.category}>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-[#D7E2EA]/40 mb-2">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 bg-[#1a1a22] border border-[#2d2d34]/60 rounded text-xs font-medium tracking-wide text-[#D7E2EA]/85 hover:bg-[#D7E2EA]/10 hover:text-white transition-colors select-none"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 border-t border-[#2d2d34]/60 pt-4 flex items-center gap-2 text-xs text-[#D7E2EA]/50 font-mono uppercase">
              <Sparkles size={12} className="text-emerald-400" />
              <span>Building with purpose & shipping with confidence</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
