import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { EraItem, RevolutionEvent } from '../types/game';
import {
  LightBulbIcon,
  HomeIcon,
  MapIcon,
  Cog6ToothIcon,
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
      case 'MapIcon':
        return <MapIcon className={iconClass} aria-hidden="true" />;
      case 'Cog6ToothIcon':
        return <Cog6ToothIcon className={iconClass} aria-hidden="true" />;
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
      className={`relative min-h-[145px] sm:min-h-[160px] rounded-[22px] p-3.5 flex flex-col justify-between transition-all duration-300 border ${
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
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
            {renderIcon()}
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#F8FAFC] tracking-tight leading-none">
              {era.nameKz}
            </h4>
            <span className="text-[10px] text-[#94A3B8]">{era.periodKz}</span>
          </div>
        </div>

        {matchedEvent ? (
          <CheckCircleSolid className="w-5 h-5 text-[#34D399]" aria-hidden="true" />
        ) : (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-[#94A3B8]">
            Бос
          </span>
        )}
      </div>

      {/* Zone Body: Matched Event or Drop Placeholder */}
      <div className="mt-2 flex-1 flex items-center justify-center text-center px-1">
        {matchedEvent ? (
          <div className="p-2.5 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 text-xs font-semibold text-[#F8FAFC] leading-relaxed">
            {matchedEvent.textKz}
          </div>
        ) : (
          <div className="text-[11px] text-[#94A3B8]/60 font-medium italic border border-dashed border-white/[0.12] rounded-xl w-full h-full min-h-[60px] flex items-center justify-center p-2">
            {isOver ? 'Осында тастаңыз' : 'Өзгерісті осында апарыңыз'}
          </div>
        )}
      </div>
    </div>
  );
};
