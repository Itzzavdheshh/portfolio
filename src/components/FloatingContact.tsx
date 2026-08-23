import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, PhoneCall, Phone, Github, Linkedin, Instagram, Twitter, X } from 'lucide-react';

const DiscordIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    {
      label: 'Direct Phone Call',
      href: 'tel:+917690863039',
      bgColor: 'bg-[#10B981]',
      hoverColor: 'hover:bg-[#059669]',
      icon: Phone,
      isExternal: false
    },
    {
      label: 'Chat on WhatsApp',
      href: 'https://wa.me/917690863039?text=Hi%20Avdhesh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
      bgColor: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#20ba59]',
      icon: MessageSquare,
      isExternal: true
    },
    {
      label: 'Email Avdhesh',
      href: 'mailto:aavdhesh.dadhich@gmail.com?subject=Project%20Inquiry%20-%20Avdhesh%20Portfolio',
      bgColor: 'bg-[#6366F1]',
      hoverColor: 'hover:bg-[#4F46E5]',
      icon: Mail,
      isExternal: false
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aavdhesh',
      bgColor: 'bg-[#0A66C2]',
      hoverColor: 'hover:bg-[#084e96]',
      icon: Linkedin,
      isExternal: true
    },
    {
      label: 'GitHub',
      href: 'https://github.com/itzzavdheshh',
      bgColor: 'bg-[#24292F]',
      hoverColor: 'hover:bg-[#1b1f23]',
      icon: Github,
      isExternal: true
    },
    {
      label: 'X (Twitter)',
      href: 'https://x.com/Itzzavdheshh',
      bgColor: 'bg-[#14171A]',
      hoverColor: 'hover:bg-[#000000]',
      icon: Twitter,
      isExternal: true
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/itzzavdheshh?igsi=MTFkNTM5OGljOHV5aQ==',
      bgColor: 'bg-[#E1306C]',
      hoverColor: 'hover:bg-[#c1255b]',
      icon: Instagram,
      isExternal: true
    },
    {
      label: 'Discord',
      href: 'https://discord.com/users/1385290408698839223',
      bgColor: 'bg-[#5865F2]',
      hoverColor: 'hover:bg-[#4752C4]',
      icon: DiscordIcon,
      isExternal: true
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-2.5 items-end max-h-[70vh] overflow-y-auto pr-1 pb-1 scrollbar-none">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.8 }}
                  transition={{ duration: 0.18, delay: index * 0.03 }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 ${link.bgColor} ${link.hoverColor} text-white rounded-full shadow-xl hover:scale-105 transition-all text-xs font-semibold uppercase tracking-wider border border-white/10`}
                >
                  <span>{link.label}</span>
                  <div className="p-1 rounded-full bg-white/20 flex items-center justify-center">
                    <IconComponent size={14} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Primary Floating Action Button (Toggle) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl relative group border-2 border-white/20"
        style={{
          background: 'linear-gradient(135deg, #1e002e 0%, #b800a0 50%, #7d1fa0 100%)',
          boxShadow: '0 10px 25px -5px rgba(184, 0, 160, 0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        layout
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <PhoneCall size={22} className="group-hover:animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Glow halo */}
        <span className="absolute inset-0 rounded-full bg-[#b800a0]/30 blur-md -z-10 group-hover:scale-125 transition-transform duration-500" />
      </motion.button>
    </div>
  );
};

