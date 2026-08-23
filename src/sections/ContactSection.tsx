import React from 'react';
import { Mail, Github, Linkedin, Instagram, Twitter, MessageCircle, ArrowUp } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const DiscordIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    const topEl = document.getElementById('root');
    if (topEl) {
      topEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-[#0C0C0C] border-t border-[#1d1d24] text-[#D7E2EA] px-6 sm:px-10 py-16 md:py-24 w-full relative z-30 overflow-hidden flex flex-col items-center"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        {/* Left column: Branding & CTA */}
        <div className="flex flex-col text-center md:text-left max-w-lg">
          <FadeIn delay={0} y={20}>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-mono mb-2 block">
              Final CTA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4 text-white leading-tight">
              Let&apos;s build something extraordinary together.
            </h2>
            <p className="text-sm font-light text-[#D7E2EA]/60 leading-relaxed mb-6">
              Whether you&apos;re launching a startup, growing your business, or creating a premium digital experience, I&apos;m ready to turn your vision into a high-performance website that stands out.
            </p>
          </FadeIn>

          {/* Social Icons */}
          <FadeIn delay={0.2} y={20} className="flex flex-wrap justify-center md:justify-start gap-3">
            <a 
              href="mailto:aavdhesh.dadhich@gmail.com" 
              className="p-3 bg-[#131317] hover:bg-[#25252e] rounded-full text-[#D7E2EA] border border-[#23232c] hover:text-white transition-all cursor-pointer"
              title="Send Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com/itzzavdheshh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#131317] hover:bg-[#25252e] rounded-full text-[#D7E2EA] border border-[#23232c] hover:text-white transition-all cursor-pointer"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aavdhesh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#131317] hover:bg-[#25252e] rounded-full text-[#D7E2EA] border border-[#23232c] hover:text-white transition-all cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://x.com/Itzzavdheshh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#131317] hover:bg-[#25252e] rounded-full text-[#D7E2EA] border border-[#23232c] hover:text-white transition-all cursor-pointer"
              title="X (Twitter)"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://www.instagram.com/itzzavdheshh?igsi=MTFkNTM5OGljOHV5aQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#131317] hover:bg-[#25252e] rounded-full text-[#D7E2EA] border border-[#23232c] hover:text-white transition-all cursor-pointer"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://discord.com/users/1385290408698839223" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#131317] hover:bg-[#25252e] rounded-full text-[#D7E2EA] border border-[#23232c] hover:text-[#5865F2] transition-all cursor-pointer"
              title="Discord"
            >
              <DiscordIcon size={18} />
            </a>
            <a 
              href="https://wa.me/917690863039?text=Hi%20Avdhesh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#131317] hover:bg-[#25252e] rounded-full text-[#D7E2EA] border border-[#23232c] hover:text-[#25D366] transition-all cursor-pointer"
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </FadeIn>
        </div>

        {/* Right column: Stylized Information Card */}
        <FadeIn delay={0.1} y={20} className="w-full max-w-md bg-[#111115] border border-[#2d2d34] rounded-3xl p-6 sm:p-8 relative">
          <div className="absolute top-4 right-4 flex items-center space-x-1.5 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">Available for Work</span>
          </div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-[#2d2d34] pb-2 font-mono">
            Contact Ledger
          </h3>

          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono text-[#D7E2EA]/40 uppercase tracking-wider block">Full Name</span>
              <span className="text-sm sm:text-base font-bold text-white block">
                Avdhesh Kumar Dadhich
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#D7E2EA]/40 uppercase tracking-wider block">Direct Email</span>
              <a href="mailto:aavdhesh.dadhich@gmail.com" className="text-sm sm:text-base font-medium hover:underline text-[#D7E2EA]">
                aavdhesh.dadhich@gmail.com
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#D7E2EA]/40 uppercase tracking-wider block">Phone / WhatsApp</span>
              <a 
                href="https://wa.me/917690863039?text=Hi%20Avdhesh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm sm:text-base text-emerald-400 font-medium hover:underline block"
              >
                +91 76908 63039 (Chat Live)
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#D7E2EA]/40 uppercase tracking-wider block mb-1.5">Social Profiles</span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <a href="mailto:aavdhesh.dadhich@gmail.com" className="px-2.5 py-1 bg-[#1a1a20] border border-[#2c2c36] rounded hover:border-[#D7E2EA]/50 text-[#D7E2EA]">
                  Email
                </a>
                <a href="https://wa.me/917690863039?text=Hi%20Avdhesh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-[#1a1a20] border border-[#2c2c36] rounded hover:border-[#D7E2EA]/50 text-[#25D366]">
                  WhatsApp
                </a>
                <a href="https://github.com/itzzavdheshh" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-[#1a1a20] border border-[#2c2c36] rounded hover:border-[#D7E2EA]/50 text-[#D7E2EA]">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/aavdhesh" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-[#1a1a20] border border-[#2c2c36] rounded hover:border-[#D7E2EA]/50 text-[#D7E2EA]">
                  LinkedIn
                </a>
                <a href="https://x.com/Itzzavdheshh" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-[#1a1a20] border border-[#2c2c36] rounded hover:border-[#D7E2EA]/50 text-[#D7E2EA]">
                  X (Twitter)
                </a>
                <a href="https://www.instagram.com/itzzavdheshh?igsi=MTFkNTM5OGljOHV5aQ==" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-[#1a1a20] border border-[#2c2c36] rounded hover:border-[#D7E2EA]/50 text-[#D7E2EA]">
                  Instagram
                </a>
                <a href="https://discord.com/users/1385290408698839223" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 bg-[#1a1a20] border border-[#2c2c36] rounded hover:border-[#D7E2EA]/50 text-[#5865F2]">
                  Discord
                </a>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#D7E2EA]/40 uppercase tracking-wider block">Availability Scope</span>
              <span className="text-xs text-emerald-400/90 font-light block leading-relaxed mt-1">
                Available for Freelance Projects • Remote Opportunities • Full-Time Roles
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer copyright bar */}
      <div className="max-w-5xl w-full flex flex-col sm:flex-row justify-between items-center mt-16 md:mt-24 pt-8 border-t border-[#1a1a22] text-xs text-[#D7E2EA]/40 gap-4 font-mono">
        <div>
          &copy; {currentYear} AVDHESH KUMAR DADHICH. All Rights Reserved.
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={handleScrollToTop} 
            className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};
