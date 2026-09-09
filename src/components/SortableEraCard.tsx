import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { EraItem } from '../types/game';
import {
  LightBulbIcon,
  HomeIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';

interface SortableEraCardProps {
  era: EraItem;
  isSuccess: boolean;
  hasError: boolean;
  disabled?: boolean;
}

export const SortableEraCard: React.FC<SortableEraCardProps> = ({
  era,
  isSuccess,
  hasError,
  disabled = false,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: era.id, disabled });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: transition || 'transform 200ms ease',
    zIndex: isDragging ? 50 : 1,
  };

  const renderIcon = () => {
    const iconClass = `w-6 h-6 sm:w-7 sm:h-7 ${
      isSuccess ? 'text-[#34D399]' : 'text-[#D6A84B]'
    } transition-colors`;

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
      style={style}
      {...attributes}
      {...listeners}
      className={`relative w-full sm:w-[150px] md:w-[165px] lg:w-[172px] h-[120px] sm:h-[132px] rounded-[20px] p-3.5 flex flex-col justify-between select-none touch-none transition-all duration-200 ${
        disabled
          ? 'cursor-default'
          : isDragging
          ? 'cursor-grabbing scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-50'
          : 'cursor-grab hover:-translate-y-1 shadow-lg'
      } ${
        isSuccess
          ? 'bg-[#34D399]/10 border-2 border-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.3)]'
          : hasError
          ? 'bg-[#FB7185]/10 border border-[#FB7185]/60 animate-shake'
          : 'bg-white/[0.05] border border-white/[0.12] hover:border-white/[0.25]'
      }`}
    >
      {/* Top row: Icon and indicator */}
      <div className="flex items-center justify-between">
        <div
          className={`p-2 rounded-xl border ${
            isSuccess ? 'bg-[#34D399]/20 border-[#34D399]/40' : 'bg-white/[0.04] border-white/[0.08]'
          }`}
        >
          {renderIcon()}
        </div>

        {isSuccess ? (
          <CheckCircleSolid className="w-5 h-5 text-[#34D399]" aria-hidden="true" />
        ) : (
          <div className="text-[#94A3B8]/50 group-hover:text-[#94A3B8]">
            <Bars3Icon className="w-4 h-4" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Bottom title */}
      <div>
        <h3 className="text-sm sm:text-base font-bold text-[#F8FAFC] tracking-tight truncate">
          {era.nameKz}
        </h3>
        <p className="text-[11px] text-[#94A3B8] truncate">
          {era.periodKz}
        </p>
      </div>
    </div>
  );
};
