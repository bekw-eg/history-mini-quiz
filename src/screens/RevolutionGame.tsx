import React, { useState } from 'react';
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SparklesIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { DropZone } from '../components/DropZone';
import { DraggableEventCard } from '../components/DraggableEventCard';
import { Timeline } from '../components/Timeline';
import { ERAS_DATA, REVOLUTION_EVENTS } from '../data/gameData';
import type { EraId, RevolutionEvent } from '../types/game';

interface RevolutionGameProps {
  onComplete: () => void;
}

export const RevolutionGame: React.FC<RevolutionGameProps> = ({ onComplete }) => {
  // Matched map: eraId -> RevolutionEvent
  const [matches, setMatches] = useState<Partial<Record<EraId, RevolutionEvent>>>({});
  // Selected event for click-to-match mode
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const [feedback, setFeedback] = useState<{ type: 'error' | 'success'; message: string } | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    })
  );

  // Remaining events not yet matched
  const remainingEvents = REVOLUTION_EVENTS.filter(
    (ev) => !Object.values(matches).some((m) => m?.id === ev.id)
  );

  const isAllComplete = Object.keys(matches).length === ERAS_DATA.length;

  const handleMatchAttempt = (eventId: string, targetEraId: EraId) => {
    const event = REVOLUTION_EVENTS.find((e) => e.id === eventId);
    if (!event) return;

    if (event.correctEra === targetEraId) {
      // Correct match!
      setMatches((prev) => ({
        ...prev,
        [targetEraId]: event,
      }));
      setSelectedEventId(null);
      setFeedback({
        type: 'success',
        message: 'Дұрыс байланыс!',
      });
      setTimeout(() => setFeedback(null), 1200);
    } else {
      // Incorrect match
      setFeedback({
        type: 'error',
        message: 'Бұл өзгеріс басқа кезеңге жатады.',
      });
      setTimeout(() => setFeedback(null), 1800);
    }
  };

  const handleDragEnd = (dragEvent: DragEndEvent) => {
    const { active, over } = dragEvent;
    if (!over) return;

    const eventId = String(active.id);
    const targetEraId = String(over.id) as EraId;

    handleMatchAttempt(eventId, targetEraId);
  };

  const handleEventClick = (eventId: string) => {
    if (selectedEventId === eventId) {
      setSelectedEventId(null);
    } else {
      setSelectedEventId(eventId);
    }
  };

  const handleZoneClick = (eraId: EraId) => {
    if (!selectedEventId) return;
    if (matches[eraId]) return; // already matched

    handleMatchAttempt(selectedEventId, eraId);
  };

  return (
    <div className="relative min-h-[82vh] flex flex-col justify-between max-w-6xl mx-auto px-4 py-6">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto mb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-2.5"
        >
          <SparklesIcon className="w-3.5 h-3.5" aria-hidden="true" />
          <span>2-тапсырма • Тарихи өзгерістер</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-2"
        >
          ӨЗГЕРІСТІ ТАП
        </motion.h2>

        <p className="text-sm text-[#94A3B8]">
          Әр өзгерісті сәйкес тарихи кезеңмен байланыстыр (сүйреп апар немесе басу арқылы таңда).
        </p>
      </div>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {/* Top: 6 Era Drop Zones */}
        <div className="w-full mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 w-full">
            {ERAS_DATA.map((era) => (
              <DropZone
                key={era.id}
                era={era}
                matchedEvent={matches[era.id]}
                isSelectedForClick={!!selectedEventId}
                onSelectEraClick={() => handleZoneClick(era.id)}
              />
            ))}
          </div>
        </div>

        {/* Feedback Alert Bar */}
        <div className="min-h-[44px] flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            {feedback?.type === 'error' && (
              <motion.div
                key="err"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#FB7185]/15 border border-[#FB7185]/30 text-[#FB7185] text-xs sm:text-sm font-medium shadow-sm"
              >
                <XMarkIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>{feedback.message}</span>
              </motion.div>
            )}
            {feedback?.type === 'success' && (
              <motion.div
                key="succ"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 text-[#34D399] text-xs sm:text-sm font-semibold shadow-sm"
              >
                <CheckCircleIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>{feedback.message}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom: Available Event Cards to Match */}
        {!isAllComplete ? (
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                Таңдалатын өзгерістер ({remainingEvents.length})
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {remainingEvents.map((event) => (
                <DraggableEventCard
                  key={event.id}
                  event={event}
                  isSelected={selectedEventId === event.id}
                  onSelectClick={() => handleEventClick(event.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center text-center p-6 glass-panel border border-[#34D399]/40 max-w-xl mx-auto shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-[#34D399]/20 flex items-center justify-center text-[#34D399] mb-3">
              <CheckCircleIcon className="w-7 h-7 stroke-[2.5]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">
              Тамаша! Барлық өзгерістер сәйкестендірілді.
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mb-6 leading-relaxed">
              Әр тарихи кезең адамның өмір салтын, қоғамын және технологиясын түбегейлі өзгертті.
            </p>

            <button
              type="button"
              onClick={onComplete}
              className="px-8 h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F8FAFC] text-[#080B12] font-bold text-sm hover:bg-slate-200 active:scale-[0.98] transition-all shadow-lg cursor-pointer"
            >
              <span>Тұлғаға өтейік</span>
              <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </DndContext>

      {/* Global Evolution Timeline */}
      <div className="mt-6 pt-2">
        <Timeline
          activeEraId={null}
          completedEras={Object.keys(matches) as EraId[]}
        />
      </div>
    </div>
  );
};
