import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const currentProject = PROJECTS[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  return (
    <div 
      className="relative min-h-screen w-full bg-transparent md:overflow-hidden font-sans text-white select-none pt-24 overflow-x-hidden"
    >
      {/* Background Parallax Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
      </div>

      <div className="relative md:h-[calc(100vh-8rem)] min-h-[calc(100vh-8rem)] w-full py-12 md:py-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-[1300px] w-full">
            
            {/* Left: Image */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="relative group order-1"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 aspect-[16/10] max-h-[40vh] md:max-h-[80vh] mx-auto lg:mx-0">
                {/* Screenshot */}
                <div className="relative w-full h-full overflow-hidden">
                  <img 
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <div className="flex flex-col gap-4 md:gap-6 order-2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <h1 className="text-[25px] md:text-[30px] font-bold md:font-semibold tracking-tight mb-2 md:mb-4">
                  {currentProject.title}
                </h1>
                <p className="text-[14px] md:text-[16px] leading-relaxed max-w-lg mx-auto lg:mx-0 text-white/60">
                  {currentProject.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="flex flex-col gap-6 md:gap-8 items-center lg:items-start mt-2 md:mt-4"
              >
                <a 
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black h-[48px] md:h-auto px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg w-full md:w-auto"
                >
                  Voir le site <ExternalLink className="w-4 h-4" />
                </a>

                {/* Navigation Controls */}
                <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full">
                  {/* Arrows & Counter Row */}
                  <div className="flex items-center justify-center lg:justify-start gap-4 w-full">
                    <button 
                      onClick={prevSlide}
                      className="p-3 md:p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Projet précédent"
                    >
                      <ChevronLeft className="w-5 h-5 group-active:scale-90 transition-transform" />
                    </button>

                    <div className="text-white/40 font-mono text-xs md:text-sm tracking-widest min-w-[60px] text-center">
                      <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(PROJECTS.length).padStart(2, '0')}
                    </div>

                    <button 
                      onClick={nextSlide}
                      className="p-3 md:p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Projet suivant"
                    >
                      <ChevronRight className="w-5 h-5 group-active:scale-90 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}
