import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XMarkIcon,
  BookOpenIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  HomeIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  UserIcon,
  HeartIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { GLOSSARY_DATA } from '../data/glossaryData';
import type { GlossaryItem } from '../types/game';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'civilization' | 'personality'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredTerms = GLOSSARY_DATA.filter((item: GlossaryItem) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.termKz.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.simpleExplanationKz.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderIcon = (iconName: string) => {
    const cls = 'w-5 h-5 text-[#D6A84B]';
    switch (iconName) {
      case 'LightBulbIcon':
        return <LightBulbIcon className={cls} aria-hidden="true" />;
      case 'HomeIcon':
        return <HomeIcon className={cls} aria-hidden="true" />;
      case 'BuildingLibraryIcon':
        return <BuildingLibraryIcon className={cls} aria-hidden="true" />;
      case 'Cog6ToothIcon':
        return <Cog6ToothIcon className={cls} aria-hidden="true" />;
      case 'BuildingOffice2Icon':
        return <BuildingOffice2Icon className={cls} aria-hidden="true" />;
      case 'GlobeAltIcon':
        return <GlobeAltIcon className={cls} aria-hidden="true" />;
      case 'UserIcon':
        return <UserIcon className={cls} aria-hidden="true" />;
      case 'HeartIcon':
        return <HeartIcon className={cls} aria-hidden="true" />;
      case 'CheckCircleIcon':
        return <CheckCircleIcon className={cls} aria-hidden="true" />;
      case 'SparklesIcon':
      default:
        return <SparklesIcon className={cls} aria-hidden="true" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080B12]/80 backdrop-blur-md z-40 cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-50 w-full max-w-4xl bg-[#0D111B] border border-white/[0.12] rounded-[24px] shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#D6A84B]">
                <BookOpenIcon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#F8FAFC] tracking-tight">
                  ТЕРМИНДЕР ГЛОССАРИЙІ
                </h3>
                <p className="text-xs text-[#94A3B8] flex items-center gap-1.5 mt-0.5">
                  <SparklesIcon className="w-3.5 h-3.5 text-[#D6A84B]" aria-hidden="true" />
                  <span>5 жастағы балаға түсіндіргендей (өте қарапайым тілмен)</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Жабу"
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              <XMarkIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="p-4 sm:px-6 border-b border-white/[0.06] bg-white/[0.01] flex flex-col sm:flex-row items-center gap-3 justify-between">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#F8FAFC] text-[#080B12] shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                Барлығы ({GLOSSARY_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('civilization')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'civilization'
                    ? 'bg-[#38BDF8] text-[#080B12] shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                Өркениет
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('personality')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'personality'
                    ? 'bg-[#A78BFA] text-[#080B12] shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                Тұлға
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <MagnifyingGlassIcon className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Терминді іздеу..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#38BDF8] transition-colors"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 custom-scrollbar">
            {filteredTerms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredTerms.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between gap-3 shadow-md"
                  >
                    {/* Card Top: Icon & Title */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                          {renderIcon(item.iconName)}
                        </div>
                        <h4 className="text-base font-bold text-[#F8FAFC] tracking-tight">
                          {item.termKz}
                        </h4>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          item.category === 'civilization'
                            ? 'bg-[#38BDF8]/15 border-[#38BDF8]/30 text-[#38BDF8]'
                            : 'bg-[#A78BFA]/15 border-[#A78BFA]/30 text-[#A78BFA]'
                        }`}
                      >
                        {item.category === 'civilization' ? 'Өркениет' : 'Тұлға'}
                      </span>
                    </div>

                    {/* Simple explanation (5-year-old style) */}
                    <div className="p-3 rounded-xl bg-[#D6A84B]/10 border border-[#D6A84B]/20 text-xs leading-relaxed text-[#F8FAFC]">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#D6A84B] uppercase tracking-wider mb-1">
                        <SparklesIcon className="w-3 h-3" aria-hidden="true" />
                        <span>Қарапайым тілмен:</span>
                      </div>
                      <p className="text-[#F8FAFC]/90">
                        {item.simpleExplanationKz}
                      </p>
                    </div>

                    {/* Academic definition */}
                    <div className="text-[11px] text-[#94A3B8] leading-snug pl-1 border-l-2 border-white/[0.15]">
                      <span className="text-[#94A3B8]/60 font-medium">Анықтамасы: </span>
                      {item.academicExplanationKz}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-[#94A3B8]">
                <BookOpenIcon className="w-10 h-10 mx-auto mb-2 opacity-40" aria-hidden="true" />
                <p className="text-sm font-medium">Термин табылмады.</p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-3.5 sm:px-6 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between text-xs text-[#94A3B8]">
            <span>Барлығы: {filteredTerms.length} термин</span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-[#F8FAFC] font-semibold transition-colors cursor-pointer"
            >
              Жабу
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
