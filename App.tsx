import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lock, CheckCircle, Zap, RefreshCw } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Background3D } from './components/Background3D';
import ModulesMap from './components/ModulesMap';
import { LogicDojo } from './components/LogicDojo';
import { LEVELS } from './constants';
import { gradeUserSubmission } from './services/geminiService';
import { audio } from './services/audioService';
import { Level } from './types';

// --- Sub-Components ---

// HOME PAGE
const Home: React.FC<{ start: () => void; darkMode: boolean }> = ({ start, darkMode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -50 }}
    className="min-h-screen flex flex-col justify-center items-center text-center p-8"
  >
    <h1 className={`font-display text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none ${darkMode ? 'text-white' : 'text-black'}`}>
      IELTS<br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary via-neon-yellow to-neon-blue">
        MASTER
      </span>
    </h1>
    <p className={`font-sans text-xl md:text-2xl max-w-2xl mb-12 opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      The Pauline Cullen Method. Reimagined.<br />
      Master Writing Task 2 through gamified, interactive levels.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={start}
      className="group relative px-12 py-6 bg-neon-primary text-white font-display font-bold text-2xl tracking-wider rounded-full overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-4">
        START TRAINING <ArrowRight />
      </span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
    </motion.button>
  </motion.div>
);

// ACTIVE LEVEL (Standard)
const ActiveLevel: React.FC<{
    level: Level;
    onComplete: (xp: number) => void;
    onBack: () => void;
    darkMode: boolean;
}> = ({ level, onComplete, onBack, darkMode }) => {
    const [step, setStep] = useState(0);
    const [submission, setSubmission] = useState("");
    const [isGrading, setIsGrading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleNext = () => {
        audio.playClick();
        if (step < level.content.length) {
            setStep(s => s + 1);
        }
    };

    const handleSubmit = async () => {
        audio.playClick();
        setIsGrading(true);
        const res = await gradeUserSubmission(level.challengePrompt, submission, level.criteria);
        setResult(res);
        setIsGrading(false);
        if (res.score >= 6) {
            audio.playSuccess();
        }
    };

    const handleRetry = () => {
        audio.playClick();
        setResult(null);
    }

    const finish = () => {
        // Enforce passing score logic
        if (result?.score >= 6) {
             onComplete(result?.score >= 7.5 ? 100 : 50);
        }
    }

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="min-h-screen pt-24 px-4 flex flex-col items-center max-w-5xl mx-auto"
        >
            <div className="w-full flex justify-between items-center mb-8">
                <button onClick={onBack} className={`font-bold hover:underline ${darkMode ? 'text-white' : 'text-black'}`}>← ABORT MISSION</button>
                <div className="text-xl font-display font-bold" style={{ color: level.color }}>{level.title}</div>
            </div>

            {/* Content Cards */}
            <div className="w-full relative min-h-[50vh]">
                <AnimatePresence mode='wait'>
                    {step < level.content.length ? (
                        <motion.div
                            key={step}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            className={`w-full p-10 md:p-16 rounded-[3rem] border backdrop-blur-xl ${
                                darkMode ? 'bg-black/60 border-white/10' : 'bg-white/80 border-black/10'
                            }`}
                        >
                            <span className="text-sm font-bold opacity-50 uppercase tracking-widest mb-4 block">
                                {level.content[step].type}
                            </span>
                            <p className={`font-sans text-2xl md:text-4xl leading-relaxed ${
                                darkMode ? 'text-white' : 'text-black'
                            }`}>
                                {level.content[step].text}
                            </p>
                            <div className="mt-12 flex justify-end">
                                <button 
                                    onClick={handleNext}
                                    className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                                >
                                    CONTINUE
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="challenge"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`w-full p-8 md:p-12 rounded-[3rem] border backdrop-blur-xl ${
                                darkMode ? 'bg-black/80 border-white/10' : 'bg-white/90 border-black/10'
                            }`}
                        >
                            <h3 className={`text-3xl font-display font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>FINAL CHALLENGE</h3>
                            <p className="text-xl mb-6 opacity-80" style={{ color: level.color }}>{level.challengePrompt}</p>
                            
                            {!result ? (
                                <div className="space-y-6">
                                    <textarea 
                                        value={submission}
                                        onChange={(e) => setSubmission(e.target.value)}
                                        className={`w-full h-64 p-6 rounded-2xl text-xl font-sans resize-none focus:outline-none ring-2 focus:ring-neon-primary transition-all ${
                                            darkMode ? 'bg-white/5 text-white ring-white/10' : 'bg-black/5 text-black ring-black/10'
                                        }`}
                                        placeholder="Type your answer here..."
                                    />
                                    <button 
                                        onClick={handleSubmit}
                                        disabled={isGrading || submission.length < 10}
                                        className={`w-full py-6 rounded-2xl font-display font-bold text-2xl tracking-widest transition-all ${
                                            isGrading || submission.length < 10 
                                            ? 'bg-gray-500 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-neon-primary to-neon-yellow text-black hover:scale-[1.01]'
                                        }`}
                                    >
                                        {isGrading ? "AI EXAMINER ANALYZING..." : "SUBMIT FOR GRADING"}
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                                    <div className="flex items-center gap-4">
                                        <div className={`text-6xl font-black ${result.score >= 7 ? 'text-neon-secondary' : 'text-neon-primary'}`}>
                                            {result.score}
                                        </div>
                                        <div>
                                            <div className="text-sm opacity-50 uppercase">Estimated Band Score</div>
                                            <div className="font-bold text-xl">{result.score >= 6 ? "Good job!" : "Try Again"}</div>
                                        </div>
                                    </div>
                                    <div className={`p-6 rounded-xl ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
                                        <h4 className="font-bold mb-2">Examiner Feedback:</h4>
                                        <p className="opacity-80 whitespace-pre-wrap">{result.feedback}</p>
                                        {result.improvedVersion && (
                                            <div className="mt-4 pt-4 border-t border-white/10">
                                                <h4 className="font-bold mb-2 text-neon-blue">Better Version:</h4>
                                                <p className="italic opacity-80">{result.improvedVersion}</p>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex gap-4">
                                        {result.score < 6 && (
                                            <button 
                                                onClick={handleRetry}
                                                className="flex-1 py-6 bg-white/10 text-white font-bold text-xl rounded-2xl hover:bg-white/20 flex items-center justify-center gap-2"
                                            >
                                                <RefreshCw size={24} /> RETRY
                                            </button>
                                        )}
                                        <button 
                                            onClick={finish}
                                            disabled={result.score < 6}
                                            className={`flex-1 py-6 font-bold text-xl rounded-2xl transition-all ${
                                                result.score >= 6 
                                                ? 'bg-neon-secondary text-black hover:brightness-110' 
                                                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                            }`}
                                        >
                                            COMPLETE LEVEL & COLLECT XP
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// MAIN APP
const App = () => {
  const [route, setRoute] = useState('home');
  const [activeLevelId, setActiveLevelId] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // User State
  const [xp, setXp] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  // Sound Effect Wrapper
  const toggleSound = () => setSoundEnabled(!soundEnabled);
  
  // Navigation
  const startTraining = () => {
    if(soundEnabled) audio.playClick();
    setRoute('modules');
  };

  const handleLevelSelect = (id: string) => {
    if(soundEnabled) audio.playClick();
    setActiveLevelId(id);
    setRoute('active-level');
  };

  const handleLevelComplete = (gainedXp: number) => {
    setXp(prev => prev + gainedXp);
    if (activeLevelId && !completedModules.includes(activeLevelId)) {
        setCompletedModules(prev => [...prev, activeLevelId]);
        // Simple Level Up logic
        if ((completedModules.length + 1) % 2 === 0) {
            setUserLevel(l => l + 1);
        }
    }
    setRoute('modules');
    setActiveLevelId(null);
  };

  // Logic Dojo Handlers
  const handleLogicSelect = () => {
      if(soundEnabled) audio.playClick();
      setRoute('logic-dojo');
  };

  const handleLogicComplete = (gainedXp: number) => {
      setXp(prev => prev + gainedXp);
      setRoute('modules');
  };

  const getActiveLevelData = () => LEVELS.find(l => l.id === activeLevelId);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans overflow-hidden ${darkMode ? 'text-white' : 'text-black'}`}>
      
      {/* Background is conditional based on route to optimize performance */}
      {route !== 'logic-dojo' && <Background3D darkMode={darkMode} />}
      
      {/* Navigation is hidden in Logic Dojo to focus attention */}
      {route !== 'logic-dojo' && (
        <Navigation 
            xp={xp}
            level={userLevel}
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
            soundEnabled={soundEnabled}
            toggleSound={toggleSound}
            currentRoute={route}
            setRoute={(r) => { setRoute(r); setActiveLevelId(null); }}
        />
      )}

      <AnimatePresence mode='wait'>
        {route === 'home' && (
          <Home key="home" start={startTraining} darkMode={darkMode} />
        )}
        
        {route === 'modules' && (
          <ModulesMap 
            key="modules" 
            levels={LEVELS} 
            completed={completedModules} 
            onSelect={handleLevelSelect} 
            onSelectLogic={handleLogicSelect}
            darkMode={darkMode}
          />
        )}

        {route === 'active-level' && activeLevelId && (
            <ActiveLevel 
                key="level"
                level={getActiveLevelData()!}
                onComplete={handleLevelComplete}
                onBack={() => setRoute('modules')}
                darkMode={darkMode}
            />
        )}

        {route === 'logic-dojo' && (
            <motion.div
                key="logic-dojo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-[#0b0b10]"
            >
                <LogicDojo 
                    onExit={() => setRoute('modules')} 
                    onComplete={handleLogicComplete}
                />
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
