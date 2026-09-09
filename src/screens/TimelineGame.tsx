import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClockIcon,
  CheckIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { SortableEraCard } from '../components/SortableEraCard';
import { Timeline } from '../components/Timeline';
import { ERAS_DATA } from '../data/gameData';
import type { EraItem } from '../types/game';

interface TimelineGameProps {
  onComplete: () => void;
}

export const TimelineGame: React.FC<TimelineGameProps> = ({ onComplete }) => {
  // Always shuffle initially so cards are not in correct order
  const [items, setItems] = useState<EraItem[]>(() => {
    const shuffled = [...ERAS_DATA];
    // Guaranteed non-sorted initial state with 6 eras
    return [shuffled[4], shuffled[0], shuffled[3], shuffled[5], shuffled[1], shuffled[2]];
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timelinePulseIndex, setTimelinePulseIndex] = useState(-1);
  const [canProceed, setCanProceed] = useState(false);

  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  // Setup sensors for mouse, laptop trackpad, and touchscreen
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (isSuccess) return;

    if (over && active.id !== over.id) {
      setItems((currentItems) => {
        const oldIndex = currentItems.findIndex((item) => item.id === active.id);
        const newIndex = currentItems.findIndex((item) => item.id === over.id);
        return arrayMove(currentItems, oldIndex, newIndex);
      });
      setSelectedCardId(null);
      // Clear error once user moves something
      if (hasError) {
        setHasError(false);
        setErrorMessage('');
      }
    }
  };

  const handleMoveLeft = (index: number) => {
    if (isSuccess || index <= 0) return;
    setItems((currentItems) => arrayMove(currentItems, index, index - 1));
    if (hasError) {
      setHasError(false);
      setErrorMessage('');
    }
  };

  const handleMoveRight = (index: number) => {
    if (isSuccess || index >= items.length - 1) return;
    setItems((currentItems) => arrayMove(currentItems, index, index + 1));
    if (hasError) {
      setHasError(false);
      setErrorMessage('');
    }
  };

  const handleCardClick = (eraId: string) => {
    if (isSuccess) return;

    if (!selectedCardId) {
      // First card tapped: select it
      setSelectedCardId(eraId);
    } else if (selectedCardId === eraId) {
      // Tapped same card: deselect
      setSelectedCardId(null);
    } else {
      // Second card tapped: swap places!
      setItems((currentItems) => {
        const oldIndex = currentItems.findIndex((item) => item.id === selectedCardId);
        const newIndex = currentItems.findIndex((item) => item.id === eraId);
        if (oldIndex !== -1 && newIndex !== -1) {
          const updated = [...currentItems];
          const temp = updated[oldIndex];
          updated[oldIndex] = updated[newIndex];
          updated[newIndex] = temp;
          return updated;
        }
        return currentItems;
      });
      setSelectedCardId(null);
      if (hasError) {
        setHasError(false);
        setErrorMessage('');
      }
    }
  };

  const handleCheck = () => {
    // Check if items order matches 1, 2, 3, 4, 5, 6
    const isCorrect = items.every((item, idx) => item.order === idx + 1);

    if (isCorrect) {
      setIsSuccess(true);
      setHasError(false);
      setErrorMessage('');
      setSelectedCardId(null);

      // Trigger 2-second sequential timeline pulse
      let step = 0;
      const interval = setInterval(() => {
        if (step < ERAS_DATA.length) {
          setTimelinePulseIndex(step);
          step++;
        } else {
          clearInterval(interval);
          setTimelinePulseIndex(ERAS_DATA.length - 1);
          setCanProceed(true);
        }
      }, 350);
    } else {
      setHasError(true);
      setErrorMessage('Реттілікті тағы бір рет тексер.');
      setTimeout(() => {
        setHasError(false);
      }, 1500);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-between max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-6">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-3 sm:mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-[#D6A84B] uppercase tracking-wider mb-2"
        >
          <ClockIcon className="w-3.5 h-3.5" aria-hidden="true" />
          <span>1-тапсырма • Хронология</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-1 sm:mb-2"
        >
          ӨРКЕНИЕТ ЖОЛЫН ҚҰРАСТЫР
        </motion.h2>

        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto">
          {selectedCardId
            ? 'Енді ауыстырғың келетін екінші карточканы бас!'
            : 'Карточкаларды сүйреп немесе кезекпен екі карточканы басып ауыстыр.'}
        </p>
      </div>

      {/* Main Sortable Area */}
      <div className="flex-1 flex flex-col items-center justify-center my-2 sm:my-4 w-full">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={items.map((it) => it.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 w-full max-w-6xl justify-items-stretch">
              {items.map((era, index) => (
                <SortableEraCard
                  key={era.id}
                  era={era}
                  orderIndex={index}
                  totalCards={items.length}
                  isSuccess={isSuccess}
                  hasError={hasError}
                  disabled={isSuccess}
                  isSelected={selectedCardId === era.id}
                  onCardClick={() => handleCardClick(era.id)}
                  onMoveLeft={() => handleMoveLeft(index)}
                  onMoveRight={() => handleMoveRight(index)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Status and Feedback messages */}
        <div className="min-h-[70px] mt-6 flex flex-col items-center justify-center text-center">
          <AnimatePresence mode="wait">
            {hasError && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FB7185]/15 border border-[#FB7185]/30 text-[#FB7185] text-sm font-medium shadow-sm"
              >
                <XMarkIcon className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {isSuccess && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399] text-sm font-bold shadow-sm">
                  <CheckCircleIcon className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                  <span>Дұрыс! Өркениет жолы қалпына келтірілді.</span>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl">
                  Адамзат қарапайым қауымнан күрделі өркениетке дейін ұзақ жолдан өтті.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Evolution timeline indicator and control buttons */}
      <div className="flex flex-col items-center gap-4 mt-2">
        {/* Animated timeline visualization */}
        <Timeline
          highlightedIndex={timelinePulseIndex}
          completedEras={isSuccess ? ERAS_DATA.map((e) => e.id) : []}
        />

        <div className="pt-2">
          {!isSuccess ? (
            <button
              type="button"
              onClick={handleCheck}
              className="px-8 h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8FAFC] text-[#080B12] font-semibold text-sm hover:bg-slate-200 active:scale-[0.98] transition-all shadow-md cursor-pointer"
            >
              <CheckIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              <span>Тексеру</span>
            </button>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: canProceed ? 1 : 0.6, y: 0 }}
              disabled={!canProceed}
              type="button"
              onClick={onComplete}
              className={`px-8 h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D6A84B] to-[#38BDF8] text-[#080B12] font-bold text-sm hover:opacity-95 active:scale-[0.98] transition-all shadow-lg ${
                canProceed ? 'cursor-pointer' : 'cursor-wait'
              }`}
            >
              <span>Келесі тапсырма</span>
              <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};
