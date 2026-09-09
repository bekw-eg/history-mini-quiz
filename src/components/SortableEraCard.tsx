import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion, AnimatePresence } from 'framer-motion';
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

  const dndStyle: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: transition || 'transform 200ms ease',
    zIndex: isDragging ? 50 : isSelected ? 30 : 1,
    position: 'relative',
  };

  const renderIcon = () => {
    const iconClass = `w-5 h-5 sm:w-6 sm:h-6 ${
      isSuccess ? 'text-[#34D399]' : isSelected ? 'text-[#38BDF8]' : 'text-[#D6A84B]'
    } transition-colors duration-300`;

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
    <div ref={setNodeRef} style={dndStyle} {...attributes} {...listeners}>
      <motion.div
        onClick={() => {
          if (!disabled && onCardClick) onCardClick();
        }}
        /* Entrance animation */
        initial={{ opacity: 0, scale: 0.88, y: 12 }}
        animate={{
          opacity: 1,
          scale: isSelected ? 1.04 : 1,
          y: 0,
          boxShadow: isSelected
            ? '0 0 28px rgba(56, 189, 248, 0.55)'
            : isSuccess
            ? '0 0 22px rgba(52, 211, 153, 0.35)'
            : hasError
            ? '0 0 18px rgba(251, 113, 133, 0.35)'
            : '0 4px 14px rgba(0,0,0,0.25)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 380, damping: 22 },
          opacity: { duration: 0.25 },
          y: { type: 'spring', stiffness: 300, damping: 24 },
          boxShadow: { duration: 0.25 },
        }}
        whileTap={!disabled ? { scale: 0.95 } : undefined}
        /* Error shake */
        {...(hasError && !isDragging
          ? {
              animate: {
                opacity: 1,
                scale: 1,
                y: 0,
                x: [0, -7, 7, -5, 5, -3, 3, 0],
                boxShadow: '0 0 18px rgba(251, 113, 133, 0.35)',
              },
              transition: { x: { duration: 0.45, ease: 'easeInOut' } },
            }
          : {})}
        className={`relative w-full h-[108px] sm:h-[125px] rounded-[18px] p-2.5 sm:p-3 flex flex-col justify-between select-none touch-none cursor-pointer ${
          isDragging ? 'cursor-grabbing scale-105' : ''
        } ${
          isSuccess
            ? 'bg-[#34D399]/10 border-2 border-[#34D399]'
            : isSelected
            ? 'bg-[#38BDF8]/20 border-2 border-[#38BDF8] ring-2 ring-[#38BDF8]/50'
            : hasError
            ? 'bg-[#FB7185]/10 border border-[#FB7185]/60'
            : 'bg-white/[0.05] border border-white/[0.12] hover:border-white/[0.28]'
        }`}
      >
        {/* Selection glow pulse overlay */}
        <AnimatePresence>
          {isSelected && (
            <motion.div
              key="glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              exit={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-[18px] bg-[#38BDF8]/25 pointer-events-none"
            />
          )}
          {isSuccess && (
            <motion.div
              key="success-glow"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 rounded-[18px] bg-[#34D399]/10 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Top row: Icon, position badge, arrow buttons */}
        <div className="flex items-center justify-between gap-1 relative z-10">
          <div className="flex items-center gap-1.5">
            <motion.div
              animate={{
                backgroundColor: isSuccess
                  ? 'rgba(52, 211, 153, 0.2)'
                  : isSelected
                  ? 'rgba(56, 189, 248, 0.2)'
                  : 'rgba(255, 255, 255, 0.04)',
                borderColor: isSuccess
                  ? 'rgba(52, 211, 153, 0.4)'
                  : isSelected
                  ? 'rgba(56, 189, 248, 0.4)'
                  : 'rgba(255, 255, 255, 0.08)',
              }}
              transition={{ duration: 0.3 }}
              className="p-1.5 rounded-lg border"
            >
              {renderIcon()}
            </motion.div>

            {/* Position badge */}
            <motion.span
              animate={{
                color: isSelected ? '#38BDF8' : isSuccess ? '#34D399' : '#94A3B8',
              }}
              transition={{ duration: 0.3 }}
              className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/[0.08]"
            >
              #{orderIndex + 1}
            </motion.span>
          </div>

          {/* Status / arrow buttons */}
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.05 }}
            >
              <CheckCircleSolid className="w-5 h-5 text-[#34D399]" aria-hidden="true" />
            </motion.div>
          ) : (
            <div
              className="flex items-center gap-0.5"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false}>
                {onMoveLeft && orderIndex > 0 && (
                  <motion.button
                    key="left"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.18 }}
                    whileTap={{ scale: 0.8 }}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMoveLeft();
                    }}
                    title="Солға жылжыту"
                    className="w-6 h-6 rounded-md bg-white/[0.06] hover:bg-white/[0.18] border border-white/[0.1] text-[#94A3B8] hover:text-[#F8FAFC] flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <ChevronLeftIcon className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </motion.button>
                )}
              </AnimatePresence>
              <AnimatePresence initial={false}>
                {onMoveRight && orderIndex < totalCards - 1 && (
                  <motion.button
                    key="right"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.18 }}
                    whileTap={{ scale: 0.8 }}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMoveRight();
                    }}
                    title="Оңға жылжыту"
                    className="w-6 h-6 rounded-md bg-white/[0.06] hover:bg-white/[0.18] border border-white/[0.1] text-[#94A3B8] hover:text-[#F8FAFC] flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Bottom title */}
        <div className="min-w-0 relative z-10">
          <h3 className="text-xs sm:text-sm font-bold text-[#F8FAFC] tracking-tight truncate leading-tight">
            {era.nameKz}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-[#94A3B8] truncate leading-tight mt-0.5">
            {era.periodKz}
          </p>
        </div>
      </motion.div>
    </div>
  );
};


