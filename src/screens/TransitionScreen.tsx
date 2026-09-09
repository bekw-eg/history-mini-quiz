import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

interface TransitionScreenProps {
  onContinue: () => void;
}

export const TransitionScreen: React.FC<TransitionScreenProps> = ({ onContinue }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Step 0: Center user appears
    // Step 1: Floating surrounding icons appear (after 600ms)
    // Step 2: "Өркениет өзгерді." (after 1200ms)
    // Step 3: "Ал адамның өзін не қалыптастырады?" (after 2000ms)
    // Step 4: Button appears (after 2700ms)
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1200);
    const t3 = setTimeout(() => setStep(3), 2000);
    const t4 = setTimeout(() => setStep(4), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const surroundingIcons = [
    { Icon: HomeIcon, label: 'Отбасы', pos: '-top-14 sm:-top-20 left-1/2 -translate-x-1/2' },
    { Icon: AcademicCapIcon, label: 'Білім', pos: 'top-2 -right-12 sm:-right-20' },
    { Icon: DevicePhoneMobileIcon, label: 'БАҚ', pos: 'bottom-2 -right-12 sm:-right-20' },
    { Icon: BuildingLibraryIcon, label: 'Мемлекет', pos: '-bottom-14 sm:-bottom-20 left-1/2 -translate-x-1/2' },
    { Icon: UserGroupIcon, label: 'Қоғам', pos: 'bottom-2 -left-12 sm:-left-20' },
  ];

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 text-center select-none">
      {/* Background purple glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1.1 }}
        transition={{ duration: 1 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#A78BFA] blur-[160px] pointer-events-none"
      />

      {/* Central Figure and Floating Orbits */}
      <div className="relative mb-12 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
        {/* Orbital circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 rounded-full border border-dashed border-[#A78BFA]"
        />

        {/* Center User Silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/[0.06] border border-white/[0.15] flex flex-col items-center justify-center text-[#A78BFA] shadow-[0_0_40px_rgba(167,139,250,0.3)] z-10"
        >
          <UserIcon className="w-12 h-12 stroke-[1.5]" aria-hidden="true" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F8FAFC] mt-1">
            АДАМ
          </span>
        </motion.div>

        {/* Surrounding factors appearing */}
        <AnimatePresence>
          {step >= 1 &&
            surroundingIcons.map(({ Icon, label, pos }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`absolute ${pos} z-20 flex flex-col items-center`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0D111B] border border-white/[0.15] flex items-center justify-center text-[#38BDF8] shadow-lg">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[9px] font-semibold text-[#94A3B8] mt-1">
                  {label}
                </span>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Cinematic Narrative Question */}
      <div className="max-w-xl mx-auto space-y-3 min-h-[110px]">
        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-semibold text-[#94A3B8]"
          >
            Өркениет өзгерді.
          </motion.p>
        )}

        {step >= 3 && (
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight"
          >
            Ал адамның өзін не қалыптастырады?
          </motion.h2>
        )}
      </div>

      {/* Continue button */}
      <div className="mt-8 min-h-[50px]">
        {step >= 4 && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            type="button"
            onClick={onContinue}
            className="px-8 h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8FAFC] text-[#080B12] font-semibold text-sm hover:bg-slate-200 active:scale-[0.98] transition-all shadow-lg cursor-pointer"
          >
            <span>3-тапсырмаға өту</span>
            <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </motion.button>
        )}
      </div>
    </div>
  );
};
