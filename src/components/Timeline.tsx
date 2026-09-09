import React from 'react';
import type { EraId } from '../types/game';
import { ClockIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';
import { ERAS_DATA } from '../data/gameData';

interface TimelineProps {
  activeEraId?: EraId | null;
  highlightedIndex?: number;
  completedEras?: EraId[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  activeEraId,
  highlightedIndex = -1,
  completedEras = [],
  className = '',
}) => {
  return (
    <nav aria-label="Тарихи эволюция шкаласы" className={`w-full max-w-4xl mx-auto px-4 py-3 ${className}`}>
      <div className="flex items-center justify-between relative">
        {/* Continuous background connecting line */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-white/[0.08] z-0" />

        {ERAS_DATA.map((era, index) => {
          const isActive = activeEraId === era.id || highlightedIndex === index;
          const isCompleted = completedEras.includes(era.id) || (highlightedIndex !== -1 && index < highlightedIndex);

          return (
            <div
              key={era.id}
              className="relative z-10 flex flex-col items-center group cursor-default"
            >
              {/* Node indicator */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#38BDF8] border-[#38BDF8] text-[#080B12] shadow-[0_0_15px_rgba(56,189,248,0.6)] scale-110'
                    : isCompleted
                    ? 'bg-[#34D399]/20 border-[#34D399] text-[#34D399]'
                    : 'bg-[#0D111B] border-white/[0.15] text-[#94A3B8]'
                }`}
              >
                {isCompleted ? (
                  <CheckCircleSolid className="w-4 h-4" aria-hidden="true" />
                ) : isActive ? (
                  <ClockIcon className="w-4 h-4 animate-spin-slow stroke-[2.5]" aria-hidden="true" />
                ) : (
                  <span className="text-[10px] font-semibold tracking-tighter">{index + 1}</span>
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-1.5 text-[11px] sm:text-xs font-medium tracking-tight text-center whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-[#38BDF8] font-semibold'
                    : isCompleted
                    ? 'text-[#34D399]'
                    : 'text-[#94A3B8]'
                }`}
              >
                {era.nameKz}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
