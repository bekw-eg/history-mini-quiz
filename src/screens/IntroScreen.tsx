import React from 'react';
import { motion } from 'framer-motion';
import {
  PlayIcon,
  ArrowRightIcon,
  ClockIcon,
  SparklesIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 sm:px-12 py-10 overflow-hidden text-center">
      {/* Visual background dual-atmosphere (ancient left, modern right) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        {/* Ancient era warm glow pillar - left */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#D6A84B]/25 to-transparent blur-[120px]" />

        {/* Digital modernity cool glow pillar - right */}
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-[#38BDF8]/25 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* 1. Label rises from below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-xs font-semibold tracking-wider text-[#D6A84B] uppercase mb-6 shadow-sm"
        >
          <SparklesIcon className="w-3.5 h-3.5" aria-hidden="true" />
          <span>ИНТЕРАКТИВТІ ТАРИХ САЯХАТЫ</span>
        </motion.div>

        {/* 2. Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.08] mb-4"
        >
          CIVILIZATION <br />
          <span className="bg-gradient-to-r from-[#D6A84B] via-[#60A5FA] to-[#38BDF8] bg-clip-text text-transparent">
            QUEST
          </span>
        </motion.h1>

        {/* 3. Subtitle: «Адам → Қоғам → Өркениет → Тұлға» */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg font-medium text-[#94A3B8] mb-8"
        >
          <span className="text-[#F8FAFC]">Адам</span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-[#D6A84B]" aria-hidden="true" />
          <span className="text-[#F8FAFC]">Қоғам</span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-[#60A5FA]" aria-hidden="true" />
          <span className="text-[#F8FAFC]">Өркениет</span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
          <span className="text-[#A78BFA] font-semibold">Тұлға</span>
        </motion.div>

        {/* 4. Narrative prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-2 mb-10 max-w-xl"
        >
          <p className="text-lg sm:text-xl font-semibold text-[#F8FAFC]">
            Адамзат тарихын қайта құра аласың ба?
          </p>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Үш тапсырмадан өтіп, өркениет пен тұлғаның қалыптасу жолын аш.
          </p>
        </motion.div>

        {/* 5. Main Action Button & Timing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          <button
            type="button"
            onClick={onStart}
            className="group px-9 h-14 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#F8FAFC] text-[#080B12] font-semibold text-base sm:text-lg hover:bg-slate-200 active:scale-[0.98] transition-all duration-200 shadow-[0_10px_30px_rgba(248,250,252,0.15)] cursor-pointer"
          >
            <PlayIcon className="w-5 h-5 text-[#080B12] group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span>Саяхатты бастау</span>
            <ArrowRightIcon className="w-5 h-5 stroke-[2.5] text-[#080B12] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>

          {/* Time info pill */}
          <div className="inline-flex items-center gap-2 text-xs text-[#94A3B8] font-medium tracking-wide">
            <ClockIcon className="w-4 h-4 text-[#D6A84B]" aria-hidden="true" />
            <span>3 тапсырма • 3–5 минут</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <GlobeAltIcon className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
            <span>Интерактивті веб-квест</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
