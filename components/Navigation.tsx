import React, { useState } from 'react';
import { Menu, X, Trophy, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { audio } from '../services/audioService';

interface NavProps {
  xp: number;
  level: number;
  darkMode: boolean;
  toggleDarkMode: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  currentRoute: string;
  setRoute: (r: string) => void;
}

export const Navigation: React.FC<NavProps> = ({ 
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

  return (
    <div className="fixed top-0 left-0 z-50 p-6 flex items-start gap-4">
      {/* Menu Trigger */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleOpen}
        className={`p-4 rounded-full shadow-2xl backdrop-blur-md border ${
            darkMode ? 'bg-white/10 border-white/20 text-white' : 'bg-black/10 border-black/20 text-black'
        } transition-colors`}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </motion.button>

      {/* Stats Pill (Always Visible) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`hidden md:flex items-center gap-4 px-6 py-4 rounded-full backdrop-blur-md border ${
            darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
        }`}
      >
        <div className="flex items-center gap-2">
            <Trophy className="text-yellow-400" />
            <span className="font-display font-bold text-xl">{xp} XP</span>
        </div>
        <div className="w-px h-6 bg-current opacity-20"></div>
        <span className="font-display font-bold">LVL {level}</span>
      </motion.div>

      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className={`absolute top-24 left-6 w-64 rounded-3xl p-6 backdrop-blur-xl border shadow-2xl flex flex-col gap-4 ${
                darkMode ? 'bg-black/80 border-white/10 text-white' : 'bg-white/80 border-black/10 text-black'
            }`}
          >
            <nav className="flex flex-col gap-2">
                <button onClick={() => handleNav('home')} className="text-left p-3 hover:bg-current/10 rounded-xl font-display font-bold text-lg transition-colors">Home Base</button>
                <button onClick={() => handleNav('modules')} className="text-left p-3 hover:bg-current/10 rounded-xl font-display font-bold text-lg transition-colors">Training Modules</button>
            </nav>

            <div className="h-px bg-current opacity-10 my-2"></div>

            <div className="flex justify-between items-center">
                <button onClick={() => { if(soundEnabled) audio.playClick(); toggleDarkMode(); }} className="p-3 hover:bg-current/10 rounded-full transition-colors">
                    {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                <button onClick={() => { audio.playClick(); toggleSound(); }} className="p-3 hover:bg-current/10 rounded-full transition-colors">
                    {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};