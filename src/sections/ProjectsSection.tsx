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

const projects: StackingCard[] = [
  {
    num: '01',
    category: 'CLIENT',
    name: 'Nextlevel Studio',
    liveUrl: '#',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    num: '02',
    category: 'PERSONAL',
    name: 'Aura Brand Identity',
    liveUrl: '#',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    num: '03',
    category: 'CLIENT',
    name: 'Solaris Digital',
    liveUrl: '#',
    img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    img3: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface CardProps {
  card: StackingCard;
  index: number;
}

const Card: React.FC<CardProps> = ({ card, index }) => {
  return (
    <div
      className="h-screen w-full sticky flex items-center justify-center px-5 sm:px-8 md:px-10 pointer-events-none"
      style={{
        top: `calc(8vh + ${index * 24}px)`,
        zIndex: index + 1,
      }}
    >
      <div
        className="w-full max-w-5xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col justify-between shadow-[0_-15px_35px_rgba(0,0,0,0.85)] overflow-hidden pointer-events-auto transition-transform"
        style={{ height: '72vh' }}
      >
        {/* ── Top Row: Number, Category, Name & Live Project Button ── */}
        <div className="flex justify-between items-center w-full mb-4 sm:mb-6">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#D7E2EA] select-none leading-none font-mono">
              {card.num}
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60 font-semibold block mb-1">
                {card.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-white tracking-wide">
                {card.name}
              </h3>
            </div>
          </div>
          <a href={card.liveUrl} target="_blank" rel="noopener noreferrer">
            <LiveProjectButton />
          </a>
        </div>

        {/* ── Bottom Row: Two-Column Image Grid ── */}
        <div className="grid grid-cols-10 gap-3 sm:gap-5 flex-1 min-h-0 overflow-hidden w-full">
          {/* Left Column (40% width / 4 cols): 2 stacked images with rounded corners */}
          <div className="col-span-4 flex flex-col gap-3 sm:gap-5 h-full">
            <div className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#2d2d34] flex-1 bg-[#151518]">
              <img
                src={card.img1}
                alt={`${card.name} preview 1`}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#2d2d34] bg-[#151518]"
              style={{ flex: '1.3' }}
            >
              <img
                src={card.img2}
                alt={`${card.name} preview 2`}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (60% width / 6 cols): 1 large image with rounded corners */}
          <div className="col-span-6 h-full overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#2d2d34] bg-[#151518]">
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
