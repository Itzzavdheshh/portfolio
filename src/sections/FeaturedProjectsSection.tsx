import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Globe, Cpu, Layers, CheckCircle2, Smartphone } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { BrowserFrame } from '../components/BrowserFrame';

// 3D Tilt Card Wrapper Component
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotX = -((y - height / 2) / (height / 2)) * 6; // Max 6deg tilt
    const rotY = ((x - width / 2) / (width / 2)) * 6;

    setRotateX(rotX);
    setRotateY(rotY);

    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(350px circle at ${x}px ${y}px, rgba(215, 226, 234, 0.08), transparent 40%)`,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-3xl bg-[#121216] border border-[#2d2d34] overflow-hidden transition-all duration-300 ease-out cursor-pointer hover:border-[#D7E2EA]/30 group ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        willChange: 'transform',
      }}
    >
      {/* Radial Hover Glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0" 
        style={glowStyle} 
      />
      {/* Floating Gradient Border */}
      <div className="absolute inset-0 -z-10 rounded-3xl p-[1.5px] bg-gradient-to-r from-transparent via-[#D7E2EA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 w-full h-full flex flex-col p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};

// Project Interface Definitions
interface WebProject {
  id: string;
  name: string;
  category: string;
  liveUrl: string;
  githubUrl?: string;
  description: string;
  techStack: string[];
  features: string[];
  challenge: string;
  solution: string;
  iframeBlocked?: boolean;
}

const projectsData: WebProject[] = [
  {
    id: 'nexora',
    name: 'NEXORA',
    category: 'EdTech / SaaS Platform',
    liveUrl: 'https://nexora-avdhesh.vercel.app/',
    githubUrl: 'https://github.com/Itzzavdheshh/NEXORA',
    description: "A structured mentorship and career-growth platform connecting students with verified mentors through real-time slot booking, role-based dashboards, automated notification workflows, and interactive engagement analytics.",
    techStack: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Framer Motion',
      'TanStack Query',
      'Resend'
    ],
    features: [
      'Role-Based Auth (Student, Mentor & Admin)',
      'Real-Time Slot Booking System',
      'Mentor Verification & Approval Workflow',
      'Availability & Schedule Management',
      'Automated Email Notifications (Resend API)',
      'Interactive Analytics & Dashboards',
      'Responsive Modern UI',
      'SEO Optimized'
    ],
    challenge: "Eliminating double-bookings and race conditions during concurrent session reservations while providing real-time UI updates, seamless onboarding, and scalable verification for institution-wide mentorship programs.",
    solution: "Architected a dual-layer synchronization engine using Supabase Realtime subscriptions paired with Express validation middleware, enhanced by optimistic UI states via TanStack Query, fluid Framer Motion transitions, and transactional emails via Resend.",
    iframeBlocked: false
  },
  {
  id: 'maison-de-rose-luxury-cafe',
  name: 'Maison De Rose Luxury Cafe',
  category: 'Restaurant & Event Platform',
  liveUrl: 'https://maison-de-rose-luxury-cafe-snowy.vercel.app/',
  githubUrl: 'https://github.com/Itzzavdheshh/maison-de-rose-luxury-cafe',
  description: "A state-of-the-art, editorial luxury web application engineered for a high-end Parisian floral bistro and celebration venue. Features interactive event configurators, automated WhatsApp reservations, particle physics, GSAP lighting effects, and an admin lead management console.",
  techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Lenis'],
  features: [
    'Interactive Celebration Configurator',
    'Instant WhatsApp Booking Pipeline',
    'Admin Lead Management Dashboard',
    'Falling Rose Petals Canvas Physics',
    'GSAP Cursor Spotlight',
    'Lenis Kinetic Smooth Scroll',
    'Gastronomy Suite & Item Favoriting',
    'SEO & JSON-LD Schema Architecture'
  ],
  challenge: "Translating the opulent, sensory experience of an upscale Parisian floral café into a modern digital platform while managing heavy visual FX—such as falling petal particle physics, dynamic lighting, and smooth scrolling—without compromising load performance or responsiveness.",
  solution: "Utilized Next.js App Router for high-performance server rendering and quick initial load times, integrated Lenis for inertia-based smooth scrolling, built custom HTML5 Canvas particle systems for rose petal dynamics, and connected an interactive celebration configurator directly to WhatsApp and an authenticated admin lead tracker.",
  iframeBlocked: false
  },
  {
    id: 'mgr-constructions',
    name: 'MGR Constructions',
    category: 'Construction Company Website',
    liveUrl: 'https://mgr-constructions.vercel.app/',
    githubUrl: 'https://github.com/',
    description: "A modern construction company website designed to establish trust through bold layouts, premium visuals, project showcases, service pages, and lead-generation-focused design.",
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'GSAP'],
    features: ['Hero Animation', 'Service Showcase', 'Project Gallery', 'Contact Form', 'Responsive Design', 'Modern UI', 'Performance Optimized'],
    challenge: "Conveying structural reliability, massive project sizes, and engineering scale through a web layout, ensuring client credentials stand out to commercial bidders.",
    solution: "Designed a bold grid-based interface with wide full-bleed project sections, heavy typography, and subtle sliding block entries (representing construction building blocks) optimized with GSAP animations.",
    iframeBlocked: false
  },
  {
    id: 'this-is-it-cafe',
    name: 'This Is It Cafe',
    category: 'Restaurant Website',
    liveUrl: 'https://this-is-it-cafe-website.vercel.app/',
    githubUrl: 'https://github.com/',
    description: "A stylish café website with modern branding, cinematic visuals, interactive menu sections, reservation experience, elegant typography, and immersive scrolling.",
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    features: ['Interactive Menu', 'Reservation CTA', 'Premium Animations', 'Responsive Design', 'Smooth Scroll', 'Gallery', 'SEO Optimized'],
    challenge: "Designing a trendy, young cafe UI that encourages quick food orders and weekend dinner reservations, keeping mobile-first booking at the forefront.",
    solution: "Crafted a gorgeous neon dark mode aesthetic with bold sans-serif headers, an interactive swipeable menu drawer, and direct integrations with maps and forms, wrapped in liquid Framer Motion transition hooks.",
    iframeBlocked: false
  },
  {
    id: 'noir-bean',
    name: 'Noir Bean',
    category: 'Full-Stack Restaurant App',
    liveUrl: 'https://noir-bean-delta.vercel.app/',
    githubUrl: 'https://github.com/Itzzavdheshh/noir-bean',
    description:
      "A full-stack premium café web app featuring a cinematic scroll experience, AI-powered chatbot, full authentication system, order management, favorites, admin dashboard, and a dark luxury brand identity — built entirely from scratch.",
    techStack: [
      'Next.js 13',
      'React',
      'Tailwind CSS',
      'GSAP',
      'Lenis',
      'MySQL',
      'shadcn/ui',
    ],
    features: [
      'Cinematic Scroll',
      'AI Chatbot',
      'Auth System',
      'Order Management',
      'Favorites',
      'Admin Dashboard',
      'Mobile Responsive',
      'SEO Optimized',
    ],
    challenge:
      "Building a full-stack café experience that doesn't just look premium — but actually works end-to-end. From a pixel-perfect cinematic landing page down to a secure session-based auth system, live orders, and an admin panel — all in a single Next.js codebase.",
    solution:
      "Architected a full-stack Next.js 13 app using App Router API routes as the backend, MySQL for relational data, and custom HMAC-signed session tokens for auth. GSAP ScrollTrigger and Lenis smooth scroll power the cinematic UI, while the admin dashboard provides real-time order and product management.",
    iframeBlocked: false,
  }
];

export const FeaturedProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<WebProject | null>(null);
  const getScreenshotUrl = (url: string) => {
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&waitUntil=networkidle0&waitForTimeout=500`;
  };

  return (
    <section 
      id="projects" 
      className="bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-24 sm:py-32 w-full relative z-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Header */}
        <FadeIn delay={0} y={40} className="mb-16 md:mb-24 text-center">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium font-mono mb-2 block">
            Featured Developments
          </span>
          <h2 className="hero-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight block">
            Featured Projects
          </h2>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-16">
          {/* Card 1: NEXORA (EdTech / SaaS Platform - Large, Spans 2 Cols) */}
          <FadeIn delay={0.1} y={30} className="md:col-span-2">
            <BentoCard onClick={() => setSelectedProject(projectsData[0])}>
              <div className="flex flex-col md:flex-row h-full justify-between gap-6">
                <div className="flex flex-col justify-start flex-1 max-w-lg">
                  <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest block mb-2">
                    {projectsData[0].category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3 text-white">
                    {projectsData[0].name}
                  </h3>
                  <p className="text-sm font-light text-[#D7E2EA]/70 mb-4 line-clamp-4">
                    {projectsData[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[0].techStack.slice(0, 6).map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-[#1a1a22] border border-[#2d2d34] rounded text-[11px] font-medium tracking-wide text-[#D7E2EA]/85">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden rounded-xl bg-[#0c0c0e] border border-[#23232b]">
                  <img
                    src={getScreenshotUrl(projectsData[0].liveUrl)}
                    alt={projectsData[0].name}
                    className="w-full h-48 md:h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* Card 2: La Vie En Rose Cafe (Normal Size) */}
          <FadeIn delay={0.2} y={30} className="md:col-span-1">
            <BentoCard onClick={() => setSelectedProject(projectsData[1])}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest block mb-2">
                    {projectsData[1].category}
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-3 text-white">
                    {projectsData[1].name}
                  </h3>
                  <p className="text-xs font-light text-[#D7E2EA]/70 mb-4 line-clamp-3">
                    {projectsData[1].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[1].techStack.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-[#1a1a22] border border-[#2d2d34] rounded text-[11px] font-medium tracking-wide text-[#D7E2EA]/85">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="my-4 overflow-hidden rounded-xl bg-[#0c0c0e] border border-[#23232b]">
                  <img
                    src={getScreenshotUrl(projectsData[1].liveUrl)}
                    alt={projectsData[1].name}
                    className="w-full h-32 object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* Card 3: MGR Constructions (Normal Size) */}
          <FadeIn delay={0.3} y={30} className="md:col-span-1">
            <BentoCard onClick={() => setSelectedProject(projectsData[2])}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest block mb-2">
                    {projectsData[2].category}
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-3 text-white">
                    {projectsData[2].name}
                  </h3>
                  <p className="text-xs font-light text-[#D7E2EA]/70 mb-4 line-clamp-3">
                    {projectsData[2].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[2].techStack.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-[#1a1a22] border border-[#2d2d34] rounded text-[11px] font-medium tracking-wide text-[#D7E2EA]/85">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="my-4 overflow-hidden rounded-xl bg-[#0c0c0e] border border-[#23232b]">
                  <img
                    src={getScreenshotUrl(projectsData[2].liveUrl)}
                    alt={projectsData[2].name}
                    className="w-full h-32 object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* Card 4: This Is It Cafe (Large, Spans 2 Cols) */}
          <FadeIn delay={0.4} y={30} className="md:col-span-2">
            <BentoCard onClick={() => setSelectedProject(projectsData[3])}>
              <div className="flex flex-col md:flex-row h-full justify-between gap-6">
                <div className="flex flex-col justify-start flex-1 max-w-sm">
                  <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest block mb-2">
                    {projectsData[3].category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3 text-white">
                    {projectsData[3].name}
                  </h3>
                  <p className="text-sm font-light text-[#D7E2EA]/70 mb-4 line-clamp-4">
                    {projectsData[3].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[3].techStack.slice(0, 5).map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-[#1a1a22] border border-[#2d2d34] rounded text-[11px] font-medium tracking-wide text-[#D7E2EA]/85">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden rounded-xl bg-[#0c0c0e] border border-[#23232b]">
                  <img
                    src={getScreenshotUrl(projectsData[3].liveUrl)}
                    alt={projectsData[3].name}
                    className="w-full h-48 md:h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </BentoCard>
          </FadeIn>

          {/* Card 5: Noir Bean (Full Width Feature Card) */}
          <FadeIn delay={0.5} y={30} className="md:col-span-3">
            <BentoCard onClick={() => setSelectedProject(projectsData[4])}>
              <div className="flex flex-col md:flex-row h-full justify-between gap-6">
                <div className="flex flex-col justify-start flex-1 max-w-lg">
                  <span className="text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-widest block mb-2">
                    {projectsData[4].category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3 text-white">
                    {projectsData[4].name}
                  </h3>
                  <p className="text-sm font-light text-[#D7E2EA]/70 mb-4 line-clamp-4">
                    {projectsData[4].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[4].techStack.slice(0, 6).map(tech => (
                      <span key={tech} className="px-2.5 py-1 bg-[#1a1a22] border border-[#2d2d34] rounded text-[11px] font-medium tracking-wide text-[#D7E2EA]/85">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden rounded-xl bg-[#0c0c0e] border border-[#23232b]">
                  <img
                    src={getScreenshotUrl(projectsData[4].liveUrl)}
                    alt={projectsData[4].name}
                    className="w-full h-48 md:h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </BentoCard>
          </FadeIn>
        </div>
      </div>

      {/* Fullscreen Project View Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-[#0C0C0C] z-50 overflow-y-auto px-4 py-8 md:p-12 flex flex-col items-center"
          >
            <div className="w-full max-w-6xl">
              {/* Back Navigation Bar */}
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center space-x-2 text-[#D7E2EA] hover:text-white mb-8 group cursor-pointer transition-colors"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="uppercase tracking-widest font-mono text-sm">Back to Portfolio</span>
              </button>

              {/* 1. Hero Banner */}
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-3xl overflow-hidden mb-8 border border-[#23232c] shadow-2xl flex flex-col justify-end p-6 sm:p-10 md:p-12">
                {/* Background Banner Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={getScreenshotUrl(selectedProject.liveUrl)}
                    alt=""
                    className="w-full h-full object-cover object-top filter blur-[2px] brightness-[0.4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-black/40" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <span className="text-xs sm:text-sm font-mono text-white/50 uppercase tracking-widest block mb-2">
                      {selectedProject.category}
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-none tracking-tight mb-4">
                      {selectedProject.name}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#D7E2EA] text-[#0C0C0C] rounded-full uppercase tracking-wider font-bold text-xs sm:text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={16} />
                    </a>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#23232c] hover:bg-[#343440] text-white rounded-full transition-colors border border-[#30303b]"
                        title="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* 2. Live Website Preview inside MacBook Frame */}
              <div className="w-full mb-12">
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider mb-6 text-white border-b border-[#2d2d34] pb-3">
                  Live Responsive Sandbox
                </h2>
                <BrowserFrame
                  url={selectedProject.liveUrl}
                  title={`${selectedProject.name} - ${selectedProject.category}`}
                  iframeBlockedByDefault={selectedProject.iframeBlocked}
                />
              </div>

              {/* 3. Detailed Contents: Overview, Challenge, Solution */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 text-white flex items-center space-x-2">
                      <Globe size={18} className="text-[#D7E2EA]/60" />
                      <span>Project Overview</span>
                    </h3>
                    <p className="text-[#D7E2EA]/80 font-light leading-relaxed text-base">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-[#131317] border border-[#23232c] p-6 rounded-2xl">
                      <h4 className="text-sm font-black uppercase text-red-400 tracking-wider mb-2">The Challenge</h4>
                      <p className="text-xs text-[#D7E2EA]/70 leading-relaxed font-light">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="bg-[#131317] border border-[#23232c] p-6 rounded-2xl">
                      <h4 className="text-sm font-black uppercase text-emerald-400 tracking-wider mb-2">The Solution</h4>
                      <p className="text-xs text-[#D7E2EA]/70 leading-relaxed font-light">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 text-white flex items-center space-x-2">
                      <Layers size={18} className="text-[#D7E2EA]/60" />
                      <span>Key Features</span>
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map(feat => (
                        <li key={feat} className="flex items-center space-x-2 text-[#D7E2EA]/85 text-sm font-light">
                          <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 text-white flex items-center space-x-2">
                      <Cpu size={18} className="text-[#D7E2EA]/60" />
                      <span>Technologies</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-2.5 py-1 bg-[#1a1a22] border border-[#2d2d34] rounded-lg text-xs font-mono text-[#D7E2EA]/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Mock Image Gallery */}
              <div className="w-full mb-16">
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider mb-6 text-white border-b border-[#2d2d34] pb-3">
                  Design Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="rounded-2xl border border-[#2d2d34] overflow-hidden bg-[#111115] aspect-video">
                    <img
                      src={getScreenshotUrl(selectedProject.liveUrl)}
                      alt="Desktop View Mockup"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl border border-[#2d2d34] overflow-hidden bg-[#111115] aspect-video flex items-center justify-center p-6 text-center">
                    <div>
                      <Smartphone size={32} className="mx-auto text-[#D7E2EA]/40 mb-3" />
                      <h4 className="text-sm font-semibold uppercase mb-1">Mobile Responsive</h4>
                      <p className="text-xs text-[#D7E2EA]/50 font-light">Fully responsive fluid grid systems optimized for smaller screen widths.</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#2d2d34] overflow-hidden bg-[#111115] aspect-video">
                    <img
                      src={getScreenshotUrl(selectedProject.liveUrl)}
                      alt="Subpage Mockup"
                      className="w-full h-full object-cover object-top filter saturate-50 brightness-75 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom CTA Card */}
              <div className="w-full bg-[#131317] border border-[#23232c] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 mb-8 text-center md:text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mb-2">
                    Liked this project?
                  </h3>
                  <p className="text-sm text-[#D7E2EA]/60 font-light max-w-lg">
                    Check out the live deployment or contact AVDHESH to build a similar premium visual experience tailored to your project.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#D7E2EA] text-[#0C0C0C] rounded-full uppercase tracking-widest font-black text-xs sm:text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-8 py-4 border border-[#D7E2EA] text-[#D7E2EA] rounded-full uppercase tracking-widest font-medium text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
                  >
                    Discuss Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
