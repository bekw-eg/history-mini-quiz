import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundFX: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep base background */}
      <div className="absolute inset-0 bg-[#080B12]" />

      {/* Ambient gold glow - top left (ancient eras) */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#D6A84B] blur-[140px]"
      />

      {/* Ambient cyan glow - bottom right (modernity/digital) */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 -right-32 w-[580px] h-[580px] rounded-full bg-[#38BDF8] blur-[160px]"
      />

      {/* Subtle purple accent glow - center bottom (personality / values) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#A78BFA] blur-[180px]"
      />

      {/* Subtle radial vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,11,18,0.75)_100%)]" />

      {/* Subtle digital grid pattern with very low opacity */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
};
