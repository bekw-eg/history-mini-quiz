import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { RevolutionEvent } from '../types/game';
import { SparklesIcon, Bars3Icon } from '@heroicons/react/24/outline';

interface DraggableEventCardProps {
  event: RevolutionEvent;
  isSelected?: boolean;
  onSelectClick?: () => void;
  disabled?: boolean;
}

export const DraggableEventCard: React.FC<DraggableEventCardProps> = ({
  event,
  isSelected = false,
  onSelectClick,
  disabled = false,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: event.id,
    disabled,
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 50 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onSelectClick}
      className={`relative p-3.5 rounded-2xl select-none transition-all duration-200 border flex items-center justify-between gap-3 text-left ${
        disabled
          ? 'opacity-40 pointer-events-none cursor-default'
          : isDragging
          ? 'cursor-grabbing scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-[#38BDF8] bg-white/[0.1]'
          : isSelected
          ? 'cursor-pointer border-[#38BDF8] bg-[#38BDF8]/15 shadow-[0_0_20px_rgba(56,189,248,0.3)] ring-1 ring-[#38BDF8]'
          : 'cursor-grab bg-white/[0.05] border-white/[0.12] hover:border-white/[0.25] hover:bg-white/[0.08] shadow-md'
      }`}
    >
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 p-1 rounded-lg bg-white/[0.06] text-[#D6A84B] shrink-0">
          <SparklesIcon className="w-4 h-4" aria-hidden="true" />
        </div>
        <p className="text-xs sm:text-sm font-semibold text-[#F8FAFC] leading-snug">
          {event.textKz}
        </p>
      </div>

      <div className="text-[#94A3B8]/60 shrink-0">
        <Bars3Icon className="w-4 h-4" aria-hidden="true" />
      </div>
    </div>
  );
};
