import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ScreenType } from './types/game';
import { BackgroundFX } from './components/BackgroundFX';
import { Header } from './components/Header';
import { KeyModalTransition } from './components/KeyModalTransition';
import { GlossaryModal } from './components/GlossaryModal';
import { IntroScreen } from './screens/IntroScreen';
import { TimelineGame } from './screens/TimelineGame';
import { RevolutionGame } from './screens/RevolutionGame';
import { TransitionScreen } from './screens/TransitionScreen';
import { PersonalityGame } from './screens/PersonalityGame';
import { FinalScreen } from './screens/FinalScreen';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('intro');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

  const restartGame = () => {
    setCurrentScreen('intro');
  };

  // Determine current step index for header (1, 2, 3)
  const getStepNumber = (): number => {
    switch (currentScreen) {
      case 'game1':
      case 'key1':
        return 1;
      case 'game2':
      case 'key2':
        return 2;
      case 'bridge':
      case 'key3':
      case 'game3':
        return 3;
      case 'final':
        return 3;
      default:
        return 1;
    }
  };

  const showHeader = !['intro', 'final'].includes(currentScreen);

  return (
    <div className="relative min-h-screen w-full bg-[#080B12] text-[#F8FAFC] flex flex-col justify-between overflow-x-hidden select-none">
      {/* Ambient background glows */}
      <BackgroundFX />

      {/* Persistent top minimal header with Glossary button */}
      {showHeader && (
        <Header
          currentStep={getStepNumber()}
          totalSteps={3}
          showProgress={true}
          onOpenGlossary={() => setIsGlossaryOpen(true)}
        />
      )}

      {/* Main Screen Views with Animated Transitions */}
      <main className="relative z-10 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {currentScreen === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <IntroScreen onStart={() => setCurrentScreen('key1')} />
            </motion.div>
          )}

          {currentScreen === 'key1' && (
            <motion.div
              key="key1"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <KeyModalTransition
                keyNumber={1}
                partTitleKz="1-БӨЛІМ: Өркениет жолы"
                partSubtitleKz="Адамзат тарихының даму кезеңдерін ретке келтіру кілті"
                onProceed={() => setCurrentScreen('game1')}
              />
            </motion.div>
          )}

          {currentScreen === 'game1' && (
            <motion.div
              key="game1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <TimelineGame onComplete={() => setCurrentScreen('key2')} />
            </motion.div>
          )}

          {currentScreen === 'key2' && (
            <motion.div
              key="key2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <KeyModalTransition
                keyNumber={2}
                partTitleKz="2-БӨЛІМ: Өзгерісті тап"
                partSubtitleKz="Әр дәуірдің адамзат өміріне әкелген төңкерістік өзгерістерін тану кілті"
                onProceed={() => setCurrentScreen('game2')}
              />
            </motion.div>
          )}

          {currentScreen === 'game2' && (
            <motion.div
              key="game2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <RevolutionGame onComplete={() => setCurrentScreen('bridge')} />
            </motion.div>
          )}

          {currentScreen === 'bridge' && (
            <motion.div
              key="bridge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TransitionScreen onContinue={() => setCurrentScreen('key3')} />
            </motion.div>
          )}

          {currentScreen === 'key3' && (
            <motion.div
              key="key3"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <KeyModalTransition
                keyNumber={3}
                partTitleKz="3-БӨЛІМ: Тұлғаны қалыптастыр"
                partSubtitleKz="Қоғамдық факторлар мен тұлғаның дүниетанымдық мәдениетін ашу кілті"
                onProceed={() => setCurrentScreen('game3')}
              />
            </motion.div>
          )}

          {currentScreen === 'game3' && (
            <motion.div
              key="game3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <PersonalityGame onComplete={() => setCurrentScreen('final')} />
            </motion.div>
          )}

          {currentScreen === 'final' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <FinalScreen
                onRestart={restartGame}
                onOpenGlossary={() => setIsGlossaryOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Interactive Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
    </div>
  );
};

export default App;
