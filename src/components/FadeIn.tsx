import React from 'react';
import { motion } from 'framer-motion';

type MotionElementType = 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'section' | 'nav' | 'button';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: MotionElementType;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div'
}) => {
  // Use motion.create or the motion(tag) factory
  // Note: motion.create(as) is standard in newer versions of framer-motion.
  // We can also just index motion like motion[as] if it's a standard tag.
  const MotionComponent = motion(as as any);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
