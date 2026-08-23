import React, { useRef, useEffect } from 'react';

const row1Images = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const row2Images = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Triple for seamless scroll wrap-around
  const row1 = [...row1Images, ...row1Images, ...row1Images];
  const row2 = [...row2Images, ...row2Images, ...row2Images];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Scroll offset formula provided in requirements
      const offset = (scrollY - sectionTop + windowHeight) * 0.3;

      // Update translate transforms directly on DOM to prevent component re-renders
      row1Ref.current.style.transform = `translate3d(${offset - 200}px, 0px, 0px)`;
      row2Ref.current.style.transform = `translate3d(${-(offset - 200)}px, 0px, 0px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call to align positions

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves Right on Scroll */}
        <div className="overflow-hidden w-full flex">
          <div 
            ref={row1Ref} 
            className="flex gap-3 will-change-transform"
            style={{ willChange: 'transform' }}
          >
            {row1.map((url, i) => (
              <img
                key={`r1-${i}`}
                src={url}
                alt={`mockup-row1-${i}`}
                loading="lazy"
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Left on Scroll */}
        <div className="overflow-hidden w-full flex">
          <div 
            ref={row2Ref} 
            className="flex gap-3 will-change-transform"
            style={{ willChange: 'transform' }}
          >
            {row2.map((url, i) => (
              <img
                key={`r2-${i}`}
                src={url}
                alt={`mockup-row2-${i}`}
                loading="lazy"
                className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
