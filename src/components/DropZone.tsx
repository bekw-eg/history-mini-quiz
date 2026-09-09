import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { EraItem, RevolutionEvent } from '../types/game';
import {
  LightBulbIcon,
  HomeIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';

interface DropZoneProps {
  era: EraItem;
  matchedEvent?: RevolutionEvent;
  isSelectedForClick?: boolean;
  onSelectEraClick?: () => void;
}

export const DropZone: React.FC<DropZoneProps> = ({
  era,
  matchedEvent,
  isSelectedForClick = false,
  onSelectEraClick,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: era.id,
    disabled: !!matchedEvent,
  });

  const renderIcon = () => {
    const iconClass = `w-5 h-5 ${matchedEvent ? 'text-[#34D399]' : 'text-[#38BDF8]'}`;
    switch (era.iconName) {
      case 'LightBulbIcon':
        return <LightBulbIcon className={iconClass} aria-hidden="true" />;
      case 'HomeIcon':
        return <HomeIcon className={iconClass} aria-hidden="true" />;
      case 'BuildingLibraryIcon':
        return <BuildingLibraryIcon className={iconClass} aria-hidden="true" />;
      case 'Cog6ToothIcon':
        return <Cog6ToothIcon className={iconClass} aria-hidden="true" />;
      case 'BuildingOffice2Icon':
        return <BuildingOffice2Icon className={iconClass} aria-hidden="true" />;
      case 'GlobeAltIcon':
        return <GlobeAltIcon className={iconClass} aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      onClick={onSelectEraClick}
      className={`relative min-h-[110px] sm:min-h-[150px] rounded-[18px] sm:rounded-[22px] p-2 sm:p-3 flex flex-col justify-between transition-all duration-300 border ${
        matchedEvent
          ? 'bg-[#34D399]/10 border-[#34D399]/60 shadow-[0_0_20px_rgba(52,211,153,0.15)]'
          : isOver
          ? 'bg-[#38BDF8]/15 border-[#38BDF8] scale-[1.02] shadow-[0_0_25px_rgba(56,189,248,0.3)]'
          : isSelectedForClick
          ? 'bg-[#38BDF8]/10 border-[#38BDF8] ring-2 ring-[#38BDF8]/40'
          : 'bg-white/[0.04] border-white/[0.1] hover:border-white/[0.22] hover:bg-white/[0.06] cursor-pointer'
      }`}
    >
      {/* Zone Header: Icon and Era Title */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] shrink-0">
            {renderIcon()}
          </div>
          <div className="min-w-0 truncate">
            <h4 className="text-xs sm:text-sm font-bold text-[#F8FAFC] tracking-tight leading-none truncate">
              {era.nameKz}
            </h4>
            <span className="text-[9px] sm:text-[10px] text-[#94A3B8] block truncate">
              {era.periodKz}
            </span>
          </div>
        </div>

        {matchedEvent ? (
          <CheckCircleSolid className="w-4 h-4 sm:w-5 sm:h-5 text-[#34D399] shrink-0" aria-hidden="true" />
        ) : (
          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-md bg-white/[0.04] text-[#94A3B8] shrink-0">
            Бос
          </span>
        )}
      </div>

      {/* Zone Body: Matched Event or Drop Placeholder */}
      <div className="mt-2 flex-1 flex items-center justify-center text-center px-1">
        {matchedEvent ? (
          <div className="p-2 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 text-[11px] sm:text-xs font-semibold text-[#F8FAFC] leading-relaxed">
            {matchedEvent.textKz}
          </div>
        ) : (
          <div className="text-[10px] sm:text-[11px] text-[#94A3B8]/60 font-medium italic border border-dashed border-white/[0.12] rounded-xl w-full h-full min-h-[50px] flex items-center justify-center p-1.5">
            {isOver ? 'Осында тастаңыз' : 'Өзгерісті осында апарыңыз'}
          </div>
        )}
      </div>
    </div>
  );
};
