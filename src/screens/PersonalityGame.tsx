import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
  CheckCircleIcon,
  XMarkIcon,
  TrophyIcon,
  ArrowRightIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';
import { PERSONALITY_FACTORS, INTERNAL_QUALITIES } from '../data/gameData';
import type { PersonalityFactor } from '../types/game';

interface PersonalityGameProps {
  onComplete: () => void;
}

export const PersonalityGame: React.FC<PersonalityGameProps> = ({ onComplete }) => {
  // Selected factor IDs
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const correctFactors = PERSONALITY_FACTORS.filter((f) => f.isCorrect);
  const isFullyFormed = correctFactors.every((f) => selectedIds.includes(f.id));

  const handleSelectFactor = (factor: PersonalityFactor) => {
    if (isFullyFormed) return;

    if (selectedIds.includes(factor.id)) {
      return; // Already selected
    }

    if (factor.isCorrect) {
      setErrorMessage(null);
      setSelectedIds((prev) => [...prev, factor.id]);
    } else {
      setErrorMessage(
        'Бұл фактор тұлғаның дүниетанымын тікелей қалыптастыратын негізгі әлеуметтік фактор емес.'
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 2500);
    }
  };

  const renderIcon = (iconName?: string) => {
    const cls = 'w-6 h-6 stroke-[1.8]';
    switch (iconName) {
      case 'HomeIcon':
        return <HomeIcon className={cls} aria-hidden="true" />;
      case 'AcademicCapIcon':
        return <AcademicCapIcon className={cls} aria-hidden="true" />;
      case 'UserGroupIcon':
        return <UserGroupIcon className={cls} aria-hidden="true" />;
      case 'BuildingLibraryIcon':
        return <BuildingLibraryIcon className={cls} aria-hidden="true" />;
      case 'DevicePhoneMobileIcon':
        return <DevicePhoneMobileIcon className={cls} aria-hidden="true" />;
      case 'HeartIcon':
        return <HeartIcon className={cls} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between max-w-6xl mx-auto px-4 py-4">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-2"
        >
          <SparklesIcon className="w-3.5 h-3.5" aria-hidden="true" />
          <span>3-тапсырма • Дүниетанымдық мәдениет</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-1"
        >
          ТҰЛҒАНЫ ҚАЛЫПТАСТЫР
        </motion.h2>

        <p className="text-xs sm:text-sm text-[#94A3B8]">
          Адамның дүниетанымына әсер ететін негізгі факторларды таңда.
        </p>
      </div>

      {/* Main Interactive Stage: Central Figure + Surrounding Factor Cards */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 my-2">
        {/* Left column factors (3 factors) */}
        <div className="flex flex-col gap-2.5 w-full sm:w-64 order-2 lg:order-1">
          {PERSONALITY_FACTORS.slice(0, 4).map((factor) => {
            const isSelected = selectedIds.includes(factor.id);
            return (
              <button
                key={factor.id}
                type="button"
                onClick={() => handleSelectFactor(factor)}
                className={`p-3 rounded-2xl flex items-center justify-between gap-3 text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#A78BFA]/20 border-[#A78BFA] text-[#F8FAFC] shadow-[0_0_20px_rgba(167,139,250,0.3)] translate-x-1'
                    : 'bg-white/[0.05] border-white/[0.1] text-[#94A3B8] hover:border-white/[0.25] hover:bg-white/[0.08]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`p-1.5 rounded-xl border ${
                      isSelected
                        ? 'bg-[#A78BFA]/30 border-[#A78BFA] text-[#A78BFA]'
                        : 'bg-white/[0.04] border-white/[0.08] text-[#94A3B8]'
                    }`}
                  >
                    {renderIcon(factor.iconName)}
                  </div>
                  <div className="truncate">
                    <span className="text-sm font-bold text-[#F8FAFC] block truncate">
                      {factor.nameKz}
                    </span>
                    <span className="text-[10px] text-[#94A3B8] block truncate">
                      {factor.descKz}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  {isSelected ? (
                    <CheckCircleSolid className="w-5 h-5 text-[#A78BFA]" aria-hidden="true" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-white/[0.2]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Center: Silhouette of "ТҰЛҒА" with glowing orbit and internal qualities */}
        <div className="relative flex flex-col items-center justify-center p-6 order-1 lg:order-2">
          {/* Orbital circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className={`absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed transition-colors duration-500 pointer-events-none ${
              isFullyFormed ? 'border-[#A78BFA]/60 shadow-[0_0_50px_rgba(167,139,250,0.3)]' : 'border-white/[0.12]'
            }`}
          />

          {/* Central Silhouette Card */}
          <div
            className={`relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-[28px] p-5 flex flex-col items-center justify-center text-center transition-all duration-500 border ${
              isFullyFormed
                ? 'bg-[#A78BFA]/20 border-[#A78BFA] shadow-[0_0_60px_rgba(167,139,250,0.5)] scale-105'
                : 'bg-white/[0.06] border-white/[0.15] shadow-2xl'
            }`}
          >
            <div
              className={`p-3 rounded-2xl mb-1.5 transition-colors ${
                isFullyFormed ? 'bg-[#A78BFA]/30 text-[#A78BFA]' : 'bg-white/[0.05] text-[#94A3B8]'
              }`}
            >
              <UserIcon className="w-12 h-12 stroke-[1.5]" aria-hidden="true" />
            </div>
            <span className="text-base font-extrabold text-[#F8FAFC] tracking-wider">
              ТҰЛҒА
            </span>
            <span className="text-[11px] text-[#A78BFA] font-medium mt-0.5">
              {selectedIds.length} / {correctFactors.length} фактор
            </span>
          </div>

          {/* Internal qualities revealed when all 6 factors connected */}
          <div className="mt-4 min-h-[70px] w-full max-w-sm flex flex-col items-center">
            <AnimatePresence>
              {isFullyFormed && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full flex flex-col items-center gap-2"
                >
                  <div className="grid grid-cols-2 gap-1.5 w-full">
                    {INTERNAL_QUALITIES.map((q, idx) => (
                      <motion.div
                        key={q.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.15, duration: 0.3 }}
                        className="px-2.5 py-1.5 rounded-lg bg-[#A78BFA]/15 border border-[#A78BFA]/30 text-center"
                      >
                        <span className="text-xs font-bold text-[#F8FAFC] block">
                          {q.titleKz}
                        </span>
                        <span className="text-[9px] text-[#94A3B8] block truncate">
                          {q.subtitleKz}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs font-medium text-[#D6A84B] text-center italic mt-1"
                  >
                    «Тұлға қоғамнан әсер алады, бірақ өз таңдауын өзі жасайды.»
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right column factors (remaining 4 factors including 2 distractors) */}
        <div className="flex flex-col gap-2.5 w-full sm:w-64 order-3">
          {PERSONALITY_FACTORS.slice(4).map((factor) => {
            const isSelected = selectedIds.includes(factor.id);
            return (
              <button
                key={factor.id}
                type="button"
                onClick={() => handleSelectFactor(factor)}
                className={`p-3 rounded-2xl flex items-center justify-between gap-3 text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#A78BFA]/20 border-[#A78BFA] text-[#F8FAFC] shadow-[0_0_20px_rgba(167,139,250,0.3)] -translate-x-1'
                    : 'bg-white/[0.05] border-white/[0.1] text-[#94A3B8] hover:border-white/[0.25] hover:bg-white/[0.08]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`p-1.5 rounded-xl border ${
                      isSelected
                        ? 'bg-[#A78BFA]/30 border-[#A78BFA] text-[#A78BFA]'
                        : 'bg-white/[0.04] border-white/[0.08] text-[#94A3B8]'
                    }`}
                  >
                    {factor.iconName ? (
                      renderIcon(factor.iconName)
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center text-xs font-bold text-[#94A3B8]/60">
                        ?
                      </div>
                    )}
                  </div>
                  <div className="truncate">
                    <span className="text-sm font-bold text-[#F8FAFC] block truncate">
                      {factor.nameKz}
                    </span>
                    <span className="text-[10px] text-[#94A3B8] block truncate">
                      {factor.descKz}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  {isSelected ? (
                    <CheckCircleSolid className="w-5 h-5 text-[#A78BFA]" aria-hidden="true" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-white/[0.2]" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Bar / Distractor error message */}
      <div className="min-h-[44px] flex items-center justify-center my-2">
        <AnimatePresence mode="wait">
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FB7185]/15 border border-[#FB7185]/30 text-[#FB7185] text-xs sm:text-sm font-medium shadow-sm max-w-xl text-center"
            >
              <XMarkIcon className="w-4 h-4 shrink-0 stroke-[2.5]" aria-hidden="true" />
              <span>{errorMessage}</span>
            </motion.div>
          )}

          {isFullyFormed && !errorMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#34D399]/15 border border-[#34D399]/30 text-[#34D399] text-xs sm:text-sm font-bold"
            >
              <CheckCircleIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              <span>Тұлға қалыптасты! Барлық негізгі факторлар қосылды.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Completion Action */}
      <div className="flex justify-center pb-2">
        {isFullyFormed && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            type="button"
            onClick={onComplete}
            className="px-9 h-12 inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#A78BFA] via-[#60A5FA] to-[#38BDF8] text-[#080B12] font-extrabold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(167,139,250,0.3)] cursor-pointer"
          >
            <TrophyIcon className="w-5 h-5" aria-hidden="true" />
            <span>Нәтижені көру</span>
            <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          </motion.button>
        )}
      </div>
    </div>
  );
};
