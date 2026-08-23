import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  num: string;
  name: string;
  description: string;
}

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      num: '01',
      name: 'Premium Web Design',
      description: 'Designing polished, conversion-focused websites inspired by modern products from Apple, Stripe, and Vercel. Creating distinctive landing pages, portfolios, business websites, and digital experiences.'
    },
    {
      num: '02',
      name: 'Frontend Development',
      description: 'Building modern, responsive, high-performance interfaces using React, Next.js, TypeScript, and modern web technologies, with smooth animations and thoughtful interactions.'
    },
    {
      num: '03',
      name: 'FULL-STACK DEVELOPMENT',
      description: 'Building complete web applications from frontend to backend using React, Node.js, TypeScript, REST APIs, databases, and modern cloud technologies.'
    },
    {
      num: '04',
      name: 'AI-POWERED APPLICATIONS',
      description: 'Building practical AI-powered products by integrating intelligent APIs, automation, voice technologies, and modern AI capabilities into real-world applications.'
    },
    {
      num: '05',
      name: 'WEB APPLICATIONS & SAAS',
      description: 'Developing scalable web applications and SaaS platforms with secure authentication, databases, APIs, real-time features, and responsive experiences built for real users.'
    }
  ];

  return (
    <section 
      id="services" 
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2 
            className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight block"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            CRAFT
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {services.map((service, index) => (
            <FadeIn 
              key={service.num} 
              delay={index * 0.1} 
              y={30}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 flex flex-row items-center gap-6 sm:gap-10 md:gap-16 w-full text-left"
            >
              {/* Number Label */}
              <div 
                className="font-black text-[#0C0C0C] leading-none tracking-tight select-none min-w-[70px] sm:min-w-[100px] md:min-w-[140px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </div>

              {/* Text Area */}
              <div className="flex flex-col flex-1">
                <h3 
                  className="font-medium uppercase mb-2 tracking-wide text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p 
                  className="font-light leading-relaxed text-[#0c0c0c]/70 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
