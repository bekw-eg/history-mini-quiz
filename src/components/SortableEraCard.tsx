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
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolid } from '@heroicons/react/24/solid';

interface SortableEraCardProps {
  era: EraItem;
  orderIndex: number;
  totalCards: number;
  isSuccess: boolean;
  hasError: boolean;
  disabled?: boolean;
  isSelected?: boolean;
  onCardClick?: () => void;
  onMoveLeft?: () => void;
  onMoveRight?: () => void;
}

export const SortableEraCard: React.FC<SortableEraCardProps> = ({
  era,
  orderIndex,
  totalCards,
  isSuccess,
  hasError,
  disabled = false,
  isSelected = false,
  onCardClick,
  onMoveLeft,
  onMoveRight,
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
    zIndex: isDragging ? 50 : isSelected ? 30 : 1,
  };

  const renderIcon = () => {
    const iconClass = `w-5 h-5 sm:w-6 sm:h-6 ${
      isSuccess ? 'text-[#34D399]' : isSelected ? 'text-[#38BDF8]' : 'text-[#D6A84B]'
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
      onClick={() => {
        if (!disabled && onCardClick) {
          onCardClick();
        }
      }}
      className={`relative w-full h-[108px] sm:h-[125px] rounded-[18px] p-2.5 sm:p-3 flex flex-col justify-between select-none touch-none transition-all duration-200 ${
        disabled
          ? 'cursor-default'
          : isDragging
          ? 'cursor-grabbing scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-50'
          : 'cursor-pointer active:scale-[0.98] shadow-md'
      } ${
        isSuccess
          ? 'bg-[#34D399]/10 border-2 border-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.3)]'
          : isSelected
          ? 'bg-[#38BDF8]/20 border-2 border-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.5)] ring-2 ring-[#38BDF8]/50'
          : hasError
          ? 'bg-[#FB7185]/10 border border-[#FB7185]/60 animate-shake'
          : 'bg-white/[0.05] border border-white/[0.12] hover:border-white/[0.25]'
      }`}
    >
      {/* Top row: Icon, position number, and quick move arrows */}
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-1.5">
          <div
            className={`p-1.5 rounded-lg border ${
              isSuccess
                ? 'bg-[#34D399]/20 border-[#34D399]/40'
                : isSelected
                ? 'bg-[#38BDF8]/20 border-[#38BDF8]/40'
                : 'bg-white/[0.04] border-white/[0.08]'
            }`}
          >
            {renderIcon()}
          </div>
          {/* Position index badge */}
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/[0.08] text-[#94A3B8]">
            #{orderIndex + 1}
          </span>
        </div>

        {/* Status indicator or quick-shift buttons */}
        {isSuccess ? (
          <CheckCircleSolid className="w-5 h-5 text-[#34D399]" aria-hidden="true" />
        ) : (
          <div
            className="flex items-center gap-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            {onMoveLeft && orderIndex > 0 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onMoveLeft();
                }}
                title="Солға жылжыту"
                className="w-6 h-6 rounded-md bg-white/[0.06] hover:bg-white/[0.15] border border-white/[0.1] text-[#94A3B8] hover:text-[#F8FAFC] flex items-center justify-center cursor-pointer transition-colors active:scale-90"
              >
                <ChevronLeftIcon className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              </button>
            )}
            {onMoveRight && orderIndex < totalCards - 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onMoveRight();
                }}
                title="Оңға жылжыту"
                className="w-6 h-6 rounded-md bg-white/[0.06] hover:bg-white/[0.15] border border-white/[0.1] text-[#94A3B8] hover:text-[#F8FAFC] flex items-center justify-center cursor-pointer transition-colors active:scale-90"
              >
                <ChevronRightIcon className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Bottom title & description */}
      <div className="min-w-0">
        <h3 className="text-xs sm:text-sm font-bold text-[#F8FAFC] tracking-tight truncate leading-tight">
          {era.nameKz}
        </h3>
        <p className="text-[10px] sm:text-[11px] text-[#94A3B8] truncate leading-tight mt-0.5">
          {era.periodKz}
        </p>
      </div>
    </div>
  );
};
