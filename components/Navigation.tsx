import React, { useState } from 'react';
import { Menu, X, Volume2, VolumeX, Sun, Moon, Home, Map, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { audio } from '../services/audioService';

interface NavigationProps {
    xp: number;
    level: number;
    darkMode: boolean;
    toggleDarkMode: () => void;
    soundEnabled: boolean;
    toggleSound: () => void;
    currentRoute: string;
    setRoute: (route: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  xp, level, darkMode, toggleDarkMode, soundEnabled, toggleSound, currentRoute, setRoute 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if(soundEnabled) audio.playClick();
    setIsOpen(!isOpen);
  };

  const handleNav = (route: string) => {
    if(soundEnabled) audio.playClick();
    setRoute(route);
    setIsOpen(false);
  }

  // Floating Dock Animation Variants
  const dockVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  return (
    <>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={dockVariants}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
      >
        {/* Menu Button */}
        <button 
            onClick={toggleOpen}
            className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-neon-primary text-white shadow-[0_0_15px_#FF0055]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
        >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="w-px h-8 bg-white/5 mx-1"></div>

        {/* Stats */}
        <div className="flex items-center gap-4 px-3">
            <div className="flex flex-col items-center leading-none">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">XP</span>
                <span className="font-display font-bold text-lg text-white">{xp}</span>
            </div>
            <div className="w-px h-6 bg-white/10"></div>
             <div className="flex flex-col items-center leading-none">
                <span className="text-[10px] font-bold text-neon-primary uppercase tracking-widest">LVL</span>
                <span className="font-display font-bold text-lg text-white">{level}</span>
            </div>
        </div>

        <div className="w-px h-8 bg-white/5 mx-1"></div>

         {/* Quick Actions */}
         <div className="flex items-center gap-1">
            <button onClick={() => toggleDarkMode()} className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all hover:scale-110">
                 {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => { if(soundEnabled) audio.playClick(); toggleSound(); }} className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all hover:scale-110">
                 {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
         </div>
      </motion.div>

      {/* Expanded Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Menu Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50, x: '-50%' }}
                animate={{ opacity: 1, scale: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, scale: 0.9, y: 50, x: '-50%' }}
                className="fixed bottom-28 left-1/2 z-50 w-80 md:w-96 rounded-3xl p-2 border border-white/10 bg-[#111]/90 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
                {/* Decorative glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-primary to-transparent opacity-50"></div>

                <nav className="flex flex-col gap-1 relative z-10">
                    <button onClick={() => handleNav('home')} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-neon-primary group-hover:text-black transition-colors shadow-lg">
                            <Home size={20} />
                        </div>
                        <div>
                            <span className="block font-display font-bold text-lg text-white group-hover:text-neon-primary transition-colors">Home Base</span>
                            <span className="text-xs text-gray-500 font-medium tracking-wide">RETURN TO START</span>
                        </div>
                    </button>

                    <button onClick={() => handleNav('modules')} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-neon-blue group-hover:text-black transition-colors shadow-lg">
                            <Map size={20} />
                        </div>
                        <div>
                            <span className="block font-display font-bold text-lg text-white group-hover:text-neon-blue transition-colors">Training Modules</span>
                            <span className="text-xs text-gray-500 font-medium tracking-wide">SELECT MISSION</span>
                        </div>
                    </button>
                    
                    <button onClick={() => handleNav('logic-dojo')} className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all text-left">
                        <div className="p-3 rounded-xl bg-white/5 group-hover:bg-neon-secondary group-hover:text-black transition-colors shadow-lg">
                            <Brain size={20} />
                        </div>
                        <div>
                            <span className="block font-display font-bold text-lg text-white group-hover:text-neon-secondary transition-colors">Logic Dojo</span>
                            <span className="text-xs text-gray-500 font-medium tracking-wide">VALIDITY TRAINING</span>
                        </div>
                    </button>
                </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
