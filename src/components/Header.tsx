import React from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentStep: number; // 1, 2, or 3
  totalSteps?: number;
  showProgress?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  totalSteps = 3,
  showProgress = true,
}) => {
  const progressPercent = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <header className="relative z-30 w-full border-b border-white/[0.08] bg-[#080B12]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Left branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.12] flex items-center justify-center text-[#D6A84B] shadow-inner">
            <GlobeAltIcon className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-wider text-[#F8FAFC]">
              CIVILIZATION QUEST
            </span>
            <span className="text-[10px] text-[#94A3B8] font-medium tracking-wide">
              Интерактивті тарих саяхаты
            </span>
          </div>
        </div>

        {/* Right progress tracker */}
        {showProgress && (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-[#94A3B8] font-medium mr-1.5">Тапсырма:</span>
              <span className="text-sm font-semibold text-[#F8FAFC]">
                {currentStep} <span className="text-[#94A3B8]/60 font-normal">/</span> {totalSteps}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar: 4px line with gradient from gold to cyan */}
      {showProgress && (
        <div className="w-full h-[3px] bg-white/[0.06] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-[#D6A84B] via-[#60A5FA] to-[#38BDF8]"
          />
        </div>
      )}
    </header>
  );
};
