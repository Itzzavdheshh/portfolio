import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

interface StackingCard {
  num: string;
  category: string;
  name: string;
  liveUrl: string;
  img1: string;
  img2: string;
  img3: string;
}

const getScreenshotUrl = (url: string, type: 'desktop' | 'mobile' | 'wide') => {
  const baseUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&waitUntil=networkidle0&waitForTimeout=500`;
  if (type === 'mobile') {
    return `${baseUrl}&viewport.width=375&viewport.height=812`;
  }
  if (type === 'wide') {
    return `${baseUrl}&viewport.width=1440&viewport.height=900`;
  }
  return baseUrl;
};

const projects: StackingCard[] = [
  {
    num: '01',
    category: 'EdTech / SaaS Platform',
    name: 'NEXORA',
    liveUrl: 'https://nexora-avdhesh.vercel.app/',
    img1: getScreenshotUrl('https://nexora-avdhesh.vercel.app/', 'desktop'),
    img2: getScreenshotUrl('https://nexora-avdhesh.vercel.app/', 'mobile'),
    img3: getScreenshotUrl('https://nexora-avdhesh.vercel.app/', 'wide'),
  },
  {
    num: '02',
    category: 'Assistive AI Platform',
    name: 'VoiceForge',
    liveUrl: 'https://voice-forge-client.vercel.app/',
    img1: getScreenshotUrl('https://voice-forge-client.vercel.app/', 'desktop'),
    img2: getScreenshotUrl('https://voice-forge-client.vercel.app/', 'mobile'),
    img3: getScreenshotUrl('https://voice-forge-client.vercel.app/', 'wide'),
  },
  {
    num: '03',
    category: 'Full-Stack Restaurant App',
    name: 'Noir Bean',
    liveUrl: 'https://noir-bean-delta.vercel.app/',
    img1: getScreenshotUrl('https://noir-bean-delta.vercel.app/', 'desktop'),
    img2: getScreenshotUrl('https://noir-bean-delta.vercel.app/', 'mobile'),
    img3: getScreenshotUrl('https://noir-bean-delta.vercel.app/', 'wide'),
  },
  {
    num: '04',
    category: 'Luxury Real Estate App',
    name: 'REsite',
    liveUrl: 'https://resite-blue.vercel.app/',
    img1: getScreenshotUrl('https://resite-blue.vercel.app/', 'desktop'),
    img2: getScreenshotUrl('https://resite-blue.vercel.app/', 'mobile'),
    img3: getScreenshotUrl('https://resite-blue.vercel.app/', 'wide'),
  },
  {
    num: '05',
    category: 'Restaurant & Event Platform',
    name: 'Maison De Rose Luxury Cafe',
    liveUrl: 'https://maison-de-rose-luxury-cafe-snowy.vercel.app/',
    img1: getScreenshotUrl('https://maison-de-rose-luxury-cafe-snowy.vercel.app/', 'desktop'),
    img2: getScreenshotUrl('https://maison-de-rose-luxury-cafe-snowy.vercel.app/', 'mobile'),
    img3: getScreenshotUrl('https://maison-de-rose-luxury-cafe-snowy.vercel.app/', 'wide'),
  },
];

interface CardProps {
  card: StackingCard;
  index: number;
}

const Card: React.FC<CardProps> = ({ card, index }) => {
  return (
    <div
      className="h-screen w-full sticky flex items-start justify-center px-4 sm:px-8 md:px-10 pointer-events-none"
      style={{
        top: `calc(75px + ${index * 32}px)`,
        zIndex: index + 1,
      }}
    >
      <div
        className="w-full max-w-5xl rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-5 md:p-7 flex flex-col justify-between shadow-[0_-15px_35px_rgba(0,0,0,0.95)] overflow-hidden pointer-events-auto transition-transform h-[68vh] min-h-[440px] max-h-[640px]"
      >
        {/* ── Top Row: Number, Category, Name & Live Project Button ── */}
        <div className="flex justify-between items-center w-full mb-3 sm:mb-4 shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#D7E2EA] select-none leading-none font-mono">
              {card.num}
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60 font-semibold block mb-0.5 sm:mb-1">
                {card.category}
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                {card.name}
              </h3>
            </div>
          </div>
          <a href={card.liveUrl} target="_blank" rel="noopener noreferrer">
            <LiveProjectButton />
          </a>
        </div>

        {/* ── Bottom Row: Two-Column Image Grid ── */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0 overflow-hidden w-full">
          {/* Left Column (5 cols): 2 stacked images with rounded corners */}
          <div className="col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-5 h-full min-h-0">
            <div className="w-full overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[28px] border border-[#2d2d34] flex-1 min-h-0 bg-[#151518]">
              <img
                src={card.img1}
                alt={`${card.name} preview 1`}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="w-full overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[28px] border border-[#2d2d34] flex-1 min-h-0 bg-[#151518]">
              <img
                src={card.img2}
                alt={`${card.name} preview 2`}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (7 cols): 1 large image with rounded corners */}
          <div className="col-span-7 h-full min-h-0 overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[28px] border border-[#2d2d34] bg-[#151518]">
            <img
              src={card.img3}
              alt={`${card.name} hero mockup`}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 w-full">
      {/* ── Section Heading ── */}
      <div className="pt-24 pb-8 flex flex-col items-center px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40} className="text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight block"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* ── Stacking Cards ── */}
      <div className="relative pb-24">
        {projects.map((card, index) => (
          <Card key={card.num} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};
