import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// Deterministic background particles to completely avoid hydration mismatches
const PARTICLES = Array.from({ length: 375 }).map((_, idx) => {
  const left = ((idx * 13) % 100); // 0% to 100%
  const top = ((idx * 17) % 100);  // 0% to 100%
  const size = (idx % 4) * 0.7 + 1.8; // 1.8px to 3.9px
  const duration = 15 + (idx % 20) * 5; // 15s to 110s float duration
  const delay = -(idx % 8) * 8;    // Negative delay
  const depth = (idx % 3) + 1;     // Layer depth: 1, 2, or 3
  // Vary opacity (visibility) randomly on a spectrum [0.08, 0.42]
  const opacity = 0.08 + ((idx * 11) % 10) * 0.038;
  // Vary blur (glow/depth) randomly on a spectrum [0, 1.5px]
  const blur = ((idx * 7) % 4) * 0.5; // 0px, 0.5px, 1.0px, 1.5px
  // Vary glow size (glow radius) randomly on a spectrum [2.5px, 9.5px] (50% higher than previous max of 3.0px)
  const glowRadius = 2.5 + ((idx * 23) % 11) * 0.7; // range: 2.5px to 9.5px
  return { id: idx, left, top, size, duration, delay, depth, opacity, blur, glowRadius };
});

export const BackgroundParticles: React.FC = () => {
  // Global window scroll progress
  const { scrollYProgress } = useScroll();

  // Scroll vertical transforms for depth layers (fixed container parallax)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <>
      {/* Subtle Moving Parallax Particle Background Layers (fixed container at z-[-10]) */}
      {/* Layer 1 (Depth 1 - Slowest Parallax) */}
      <motion.div 
        style={{ y: y1 }} 
        className="fixed inset-x-0 top-0 h-[150vh] pointer-events-none overflow-hidden z-[-10]"
      >
        {PARTICLES.filter(p => p.depth === 1).map(p => (
          <motion.div
            key={p.id}
            style={{ 
              left: `${p.left}%`, 
              top: `${p.top}%`,
              opacity: p.opacity,
              filter: p.blur > 0 ? `blur(${p.blur}px)` : 'none'
            }}
            animate={{ y: [0, -1200] }}
            transition={{
              duration: p.duration * 1.3,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
            className="absolute flex items-center justify-center"
          >
            <div 
              className="rounded-full bg-valo-green" 
              style={{ 
                width: p.size, 
                height: p.size,
                boxShadow: `0 0 ${p.glowRadius}px #16ff8d, 0 0 ${p.glowRadius * 1.5}px rgba(22, 255, 141, 0.6)`
              }} 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 2 (Depth 2 - Medium Parallax) */}
      <motion.div 
        style={{ y: y2 }} 
        className="fixed inset-x-0 top-0 h-[150vh] pointer-events-none overflow-hidden z-[-10]"
      >
        {PARTICLES.filter(p => p.depth === 2).map(p => (
          <motion.div
            key={p.id}
            style={{ 
              left: `${p.left}%`, 
              top: `${p.top}%`,
              opacity: p.opacity,
              filter: p.blur > 0 ? `blur(${p.blur}px)` : 'none'
            }}
            animate={{ y: [0, -1200] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
            className="absolute flex items-center justify-center"
          >
            <div 
              className="rounded-full bg-valo-green" 
              style={{ 
                width: p.size, 
                height: p.size,
                boxShadow: `0 0 ${p.glowRadius}px #16ff8d, 0 0 ${p.glowRadius * 1.5}px rgba(22, 255, 141, 0.6)`
              }} 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 3 (Depth 3 - Fastest Parallax) */}
      <motion.div 
        style={{ y: y3 }} 
        className="fixed inset-x-0 top-0 h-[150vh] pointer-events-none overflow-hidden z-[-10]"
      >
        {PARTICLES.filter(p => p.depth === 3).map(p => (
          <motion.div
            key={p.id}
            style={{ 
              left: `${p.left}%`, 
              top: `${p.top}%`,
              opacity: p.opacity,
              filter: p.blur > 0 ? `blur(${p.blur}px)` : 'none'
            }}
            animate={{ y: [0, -1200] }}
            transition={{
              duration: p.duration * 0.7,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            }}
            className="absolute flex items-center justify-center"
          >
            <div 
              className="rounded-full bg-valo-green" 
              style={{ 
                width: p.size, 
                height: p.size,
                boxShadow: `0 0 ${p.glowRadius}px #16ff8d, 0 0 ${p.glowRadius * 1.5}px rgba(22, 255, 141, 0.6)`
              }} 
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
