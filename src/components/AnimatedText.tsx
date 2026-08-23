import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  // Track scroll progress of this container with specified offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  // Split text into words to ensure whole words wrap properly without mid-word splits
  const words = text.split(' ');
  const totalLength = text.length;
  let runningCharCount = 0;

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap justify-center text-center select-none ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordStartOffset = runningCharCount;
        runningCharCount += word.length + 1; // +1 for the space

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.28em]">
            {word.split('').map((char, charIndex) => {
              const globalIndex = wordStartOffset + charIndex;
              const start = globalIndex / totalLength;
              const end = Math.min(1, (globalIndex + 6) / totalLength);

              return (
                <Character
                  key={charIndex}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  // Map container scroll progress to opacity between 0.2 and 1.0
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
};
