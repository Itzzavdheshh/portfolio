import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      
      const mx = e.clientX;
      const my = e.clientY;

      // Distance from mouse to center
      const dx = mx - cx;
      const dy = my - cy;

      // Proximity check: Is mouse within bounding box expanded by padding?
      const inRangeX = mx >= rect.left - padding && mx <= rect.right + padding;
      const inRangeY = my >= rect.top - padding && my <= rect.bottom + padding;

      if (inRangeX && inRangeY) {
        // Magnet is active: pull towards cursor divided by strength
        const tx = dx / strength;
        const ty = dy / strength;
        setTransform(`translate3d(${tx}px, ${ty}px, 0px)`);
        setTransition(activeTransition);
      } else {
        // Magnet is inactive: animate back to center
        setTransform('translate3d(0px, 0px, 0px)');
        setTransition(inactiveTransition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};
