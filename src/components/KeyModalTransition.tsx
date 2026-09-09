import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { KeyIcon, LockOpenIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { LockOpenIcon as LockOpenSolid } from '@heroicons/react/24/solid';

interface KeyModalTransitionProps {
  keyNumber: 1 | 2 | 3;
  partTitleKz: string;
  partSubtitleKz: string;
  onProceed: () => void;
}

export const KeyModalTransition: React.FC<KeyModalTransitionProps> = ({
  keyNumber,
  partTitleKz,
  partSubtitleKz,
  onProceed,
}) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Cinematic unlocking effect after 600ms
    const timer = setTimeout(() => {
      setIsUnlocked(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center px-4 py-8">
      {/* Radial backlight beam */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isUnlocked ? 0.35 : 0.15, scale: isUnlocked ? 1.2 : 1 }}
        transition={{ duration: 0.8 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#D6A84B] blur-[150px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-lg w-full text-center glass-panel p-8 sm:p-10 border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        {/* Animated Key/Lock icon badge */}
        <div className="relative mx-auto mb-6 w-20 h-20 flex items-center justify-center">
          <motion.div
            animate={{
              scale: isUnlocked ? [1, 1.25, 1.1] : 1,
              rotate: isUnlocked ? [0, -10, 0] : 0,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`w-20 h-20 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
              isUnlocked
                ? 'bg-[#D6A84B]/20 border-[#D6A84B] text-[#D6A84B] shadow-[0_0_30px_rgba(214,168,75,0.4)]'
                : 'bg-white/[0.05] border-white/[0.15] text-[#94A3B8]'
            }`}
          >
            {isUnlocked ? (
              <LockOpenSolid className="w-10 h-10" aria-hidden="true" />
            ) : (
              <KeyIcon className="w-10 h-10 animate-pulse" aria-hidden="true" />
            )}
          </motion.div>
        </div>

        {/* Key Badge tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-semibold tracking-wider text-[#D6A84B] uppercase mb-4"
        >
          {isUnlocked ? (
            <>
              <LockOpenIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{keyNumber}-кілт ашылды</span>
            </>
          ) : (
            <>
              <KeyIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{keyNumber}-кілтті ашу</span>
            </>
          )}
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-2"
        >
          {partTitleKz}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-sm mx-auto mb-8"
        >
          {partSubtitleKz}
        </motion.p>

        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            type="button"
            onClick={onProceed}
            className="w-full sm:w-auto px-8 h-12 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#F8FAFC] text-[#080B12] font-semibold text-sm hover:bg-slate-200 active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer"
          >
            <span>Тапсырманы бастау</span>
            <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
