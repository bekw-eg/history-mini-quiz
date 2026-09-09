import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ArrowPathIcon,
  InformationCircleIcon,
  SparklesIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import { TrophyIcon as TrophyIconSolid } from '@heroicons/react/24/solid';

interface FinalScreenProps {
  onRestart: () => void;
  onOpenGlossary?: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ onRestart, onOpenGlossary }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    // Staggered reveal of culmination elements:
    // Phase 1: Header and trophy (immediate)
    // Phase 2: Formula elements (staggered)
    // Phase 3: Culmination quotes
    // Phase 4: Discussion question and restart button
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => setPhase(4), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const formulaItems = [
    { text: 'АДАМ', color: 'from-[#D6A84B] to-[#F59E0B]' },
    { text: 'ҚОҒАМ', color: 'from-[#38BDF8] to-[#2563EB]' },
    { text: 'ӨРКЕНИЕТ', color: 'from-[#60A5FA] to-[#818CF8]' },
    { text: 'ТҰЛҒА', color: 'from-[#A78BFA] to-[#C084FC]' },
  ];

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between items-center px-4 sm:px-8 py-8 text-center max-w-5xl mx-auto select-none">
      {/* Background celebration radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1.2 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#D6A84B]/30 via-[#38BDF8]/20 to-[#A78BFA]/30 blur-[150px]"
        />
      </div>

      {/* Top Header: Badge and Trophy */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.12] text-xs font-bold tracking-widest text-[#D6A84B] uppercase mb-4"
        >
          <SparklesIcon className="w-4 h-4" aria-hidden="true" />
          <span>САЯХАТ АЯҚТАЛДЫ</span>
        </motion.div>

        {/* Large Trophy Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#D6A84B]/25 to-[#D6A84B]/5 border-2 border-[#D6A84B] flex items-center justify-center text-[#D6A84B] shadow-[0_0_50px_rgba(214,168,75,0.4)] mb-4"
        >
          <TrophyIconSolid className="w-11 h-11 sm:w-13 sm:h-13 drop-shadow-md" aria-hidden="true" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-tight"
        >
          ӨРКЕНИЕТ ЗЕРТТЕУШІСІ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm font-semibold text-[#34D399] mt-1"
        >
          3 / 3 тапсырма сәтті орындалды
        </motion.p>
      </div>

      {/* Middle: The Great Formula (АДАМ → ҚОҒАМ → ӨРКЕНИЕТ → ТҰЛҒА) */}
      <div className="relative z-10 my-8 w-full max-w-4xl">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
          {formulaItems.map((item, idx) => (
            <React.Fragment key={item.text}>
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 15 }}
                animate={phase >= 1 ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-2xl glass-panel border border-white/[0.14] shadow-xl"
              >
                <span
                  className={`text-base sm:text-xl md:text-2xl font-black tracking-wider bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.text}
                </span>
              </motion.div>

              {idx < formulaItems.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={phase >= 1 ? { opacity: 0.6, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.2 + 0.1 }}
                >
                  <ArrowRightIcon className="w-5 h-5 text-white/50 stroke-[2.5]" aria-hidden="true" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* The Climax Statements */}
        <div className="mt-8 space-y-3">
          {phase >= 2 && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight"
            >
              ӨРКЕНИЕТ ҚОҒАМДЫ ӨЗГЕРТЕДІ.
            </motion.h2>
          )}

          {phase >= 3 && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D6A84B] via-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent tracking-tight"
            >
              ҚҰНДЫЛЫҚ АДАМДЫ ҚАЛЫПТАСТЫРАДЫ.
            </motion.h2>
          )}
        </div>
      </div>

      {/* Discussion prompt for the classroom & Restart button */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-6">
        {phase >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full glass-panel p-5 sm:p-6 border border-[#38BDF8]/25 shadow-xl text-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-2">
              <InformationCircleIcon className="w-4 h-4" aria-hidden="true" />
              <span>Қорытынды ой толғау</span>
            </div>

            <p className="text-base sm:text-lg font-bold text-[#F8FAFC] mb-1.5">
              Ал сенің дүниетанымыңа ең көп әсер еткен не?
            </p>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Отбасы ма? Білім бе? Қоғам ба? Әлде цифрлық орта ма?
            </p>
          </motion.div>
        )}

        {/* Action buttons: Glossary & Restart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {onOpenGlossary && (
            <button
              type="button"
              onClick={onOpenGlossary}
              className="px-6 h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#D6A84B]/15 hover:bg-[#D6A84B]/25 border border-[#D6A84B]/40 text-[#D6A84B] hover:text-[#fbbf24] text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md"
            >
              <BookOpenIcon className="w-4 h-4 stroke-[2]" aria-hidden="true" />
              <span>Терминдер глоссарийі (Қарапайым тілмен)</span>
            </button>
          )}

          <button
            type="button"
            onClick={onRestart}
            className="px-6 h-12 inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] text-[#F8FAFC] text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md"
          >
            <ArrowPathIcon className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            <span>Қайта бастау</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
