import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, RefreshCw, CheckCircle, ChevronRight, BookOpen, PenTool, Brain } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Background3D } from './components/Background3D';
import ModulesMap from './components/ModulesMap';
import { LogicDojo } from './components/LogicDojo';
import { LEVELS } from './constants';
import { gradeUserSubmission } from './services/geminiService';
import { audio } from './services/audioService';
import { Level } from './types';

// HERO HOME PAGE
const Home: React.FC<{ start: () => void; darkMode: boolean }> = ({ start, darkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
    show: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -50, filter: 'blur(20px)', transition: { duration: 0.5 } }}
      className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative z-10"
    >
      <motion.div variants={item} className="mb-8">
        <span className="px-4 py-2 rounded-full border border-neon-primary/30 bg-neon-primary/5 text-neon-primary text-xs font-bold tracking-[0.3em] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(255,0,85,0.2)]">
           System Online
        </span>
      </motion.div>

      <motion.h1 variants={item} className="font-display text-6xl md:text-[8rem] font-black tracking-tighter mb-4 leading-[0.85] text-white mix-blend-screen select-none">
        IELTS<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary via-neon-secondary to-neon-blue animate-pulse-slow">
          MASTER
        </span>
      </motion.h1>

      <motion.div variants={item} className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent my-8"></motion.div>

      <motion.p variants={item} className="font-sans text-lg md:text-xl max-w-xl mb-12 text-gray-400 font-light leading-relaxed tracking-wide">
        Writing Task 2 mastery re-engineered. <br/>
        <strong className="text-white font-medium">Precision. Logic. Band 9.</strong>
      </motion.p>

      <motion.button
        variants={item}
        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,0,85,0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={start}
        className="group relative px-12 py-6 bg-white text-black font-display font-black text-xl tracking-widest rounded-full overflow-hidden transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <span className="relative z-10 flex items-center gap-3">
          INITIALIZE <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.button>
      
      <motion.div variants={item} className="absolute bottom-10 left-0 w-full text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em]">The Cullen Method v2.0</p>
      </motion.div>
    </motion.div>
  );
};

// HUD-STYLE ACTIVE LEVEL
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
        if (step < level.content.length) setStep(s => s + 1);
    };

    const handleSubmit = async () => {
        audio.playClick();
        setIsGrading(true);
        const res = await gradeUserSubmission(level.challengePrompt, submission, level.criteria);
        setResult(res);
        setIsGrading(false);
        if (res.score >= 6) audio.playSuccess();
    };

    const finish = () => {
        if (result?.score >= 6) onComplete(result?.score >= 7.5 ? 100 : 50);
    }

    const progress = ((step + 1) / (level.content.length + 1)) * 100;

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="min-h-screen pt-12 pb-24 px-4 flex flex-col items-center max-w-7xl mx-auto"
        >
            {/* HUD Header */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-white/10 pb-6 gap-6">
                <div className="flex items-center gap-6">
                    <button 
                        onClick={onBack} 
                        className="p-4 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-white/30 hover:scale-105"
                    >
                        <ArrowLeft />
                    </button>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                             <div className="h-px w-8 bg-current opacity-50" style={{ color: level.color }}></div>
                             <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-80" style={{ color: level.color }}>{level.criteria} Protocol</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tighter">{level.title}</h2>
                    </div>
                </div>
                <div className="w-full md:w-auto text-right">
                    <div className="flex justify-between md:justify-end items-baseline gap-4 mb-2">
                        <span className="text-xs font-mono opacity-50">SYNC STATUS</span>
                        <span className="font-mono font-bold text-neon-primary">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full shadow-[0_0_10px_currentColor]" 
                            style={{ backgroundColor: level.color, color: level.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Content Display */}
            <div className="w-full relative flex-1 flex items-center justify-center min-h-[60vh]">
                <AnimatePresence mode='wait'>
                    {step < level.content.length ? (
                        <motion.div
                            key={step}
                            initial={{ x: 50, opacity: 0, filter: 'blur(10px)' }}
                            animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                            exit={{ x: -50, opacity: 0, filter: 'blur(10px)' }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                            className="w-full max-w-5xl"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] glass-panel min-h-[400px]">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                
                                <div className="absolute top-8 left-10 flex items-center gap-3">
                                     <div className={`w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: level.color }}></div>
                                     <span className="text-xs font-mono font-bold tracking-widest opacity-50 uppercase">{level.content[step].type} DATA_PACKET</span>
                                </div>

                                <div className="p-10 md:p-20 flex flex-col gap-10">
                                    <div className="mt-8">
                                        {level.content[step].type === 'example' && (
                                            <div className="inline-flex p-3 rounded-2xl bg-white/5 mb-6 text-white/80">
                                                <BookOpen className="w-6 h-6" style={{ color: level.color }} />
                                            </div>
                                        )}
                                        <p className="font-sans text-2xl md:text-5xl leading-[1.3] font-light text-white tracking-tight">
                                            {level.content[step].text.split('*').map((part, i) => 
                                                i % 2 === 1 ? <span key={i} className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300" style={{ textShadow: `0 0 30px ${level.color}60` }}>{part}</span> : part
                                            )}
                                        </p>
                                    </div>

                                    <div className="flex justify-end pt-8">
                                        <button 
                                            onClick={handleNext}
                                            className="group flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                        >
                                            NEXT DATA <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="challenge"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-full max-w-4xl"
                        >
                            <div className="glass-panel rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: level.color }}></div>
                                
                                <h3 className="text-3xl font-display font-bold mb-4 text-white flex items-center gap-3">
                                    <PenTool className="w-8 h-8" /> FINAL PROTOCOL
                                </h3>
                                <p className="text-xl mb-8 opacity-80 text-gray-300 font-light border-l-2 border-white/20 pl-6 py-2">{level.challengePrompt}</p>
                                
                                {!result ? (
                                    <div className="space-y-6">
                                        <div className="relative">
                                            <textarea 
                                                value={submission}
                                                onChange={(e) => setSubmission(e.target.value)}
                                                className="w-full h-64 p-8 rounded-2xl bg-[#050505] border border-white/10 text-xl font-sans text-white resize-none focus:outline-none focus:border-neon-primary/50 focus:ring-1 focus:ring-neon-primary/50 transition-all placeholder:text-gray-800 shadow-inner"
                                                placeholder="Initialize response sequence..."
                                            />
                                            <div className="absolute bottom-4 right-4 text-xs text-gray-600 font-mono pointer-events-none">
                                                {submission.length} CHARS
                                            </div>
                                        </div>
                                        <button 
                                            onClick={handleSubmit}
                                            disabled={isGrading || submission.length < 10}
                                            className={`w-full py-6 rounded-2xl font-display font-bold text-xl tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                                                isGrading || submission.length < 10 
                                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                                                : `bg-gradient-to-r from-neon-primary to-neon-secondary text-black hover:brightness-110 shadow-[0_0_40px_${level.color}50]`
                                            }`}
                                        >
                                            {isGrading ? (
                                                <><RefreshCw className="animate-spin" /> ANALYZING PATTERNS...</>
                                            ) : (
                                                "SUBMIT FOR ANALYSIS"
                                            )}
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-white/5 rounded-2xl border border-white/10">
                                            <div className="relative group">
                                                <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full group-hover:bg-white/10 transition-colors"></div>
                                                <svg className="w-48 h-48 transform -rotate-90 relative z-10">
                                                    <circle cx="96" cy="96" r="80" stroke="#222" strokeWidth="12" fill="transparent" />
                                                    <circle cx="96" cy="96" r="80" stroke={result.score >= 7 ? '#00FF99' : '#FF0055'} strokeWidth="12" fill="transparent" strokeDasharray={502} strokeDashoffset={502 - (502 * (result.score / 9))} className="transition-all duration-1000 ease-out drop-shadow-[0_0_10px_currentColor]" strokeLinecap="round" />
                                                </svg>
                                                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
                                                    <span className="text-6xl font-black text-white">{result.score}</span>
                                                    <span className="text-xs font-bold opacity-50 uppercase tracking-widest">Band</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 text-center md:text-left space-y-2">
                                                <h4 className="text-3xl font-bold text-white">{result.score >= 6 ? "Proficiency Verified" : "Revision Required"}</h4>
                                                <p className="text-gray-400 font-light">{result.score >= 6 ? "Excellent work. Your argument structure aligns with Band 7+ descriptors." : "Your response needs refinement to meet the criteria."}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 gap-6">
                                            <div className="bg-[#050505] p-8 rounded-2xl border-l-2 border-neon-blue">
                                                <h4 className="font-bold mb-4 text-neon-blue text-xs uppercase tracking-widest flex items-center gap-2"><Brain size={14}/> Examiner Feedback</h4>
                                                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{result.feedback}</p>
                                            </div>
                                            
                                            {result.improvedVersion && (
                                                <div className="bg-[#050505] p-8 rounded-2xl border-l-2 border-neon-secondary">
                                                    <h4 className="font-bold mb-4 text-neon-secondary text-xs uppercase tracking-widest flex items-center gap-2"><RefreshCw size={14}/> Optimized Version</h4>
                                                    <p className="italic text-gray-400 font-serif text-lg">{result.improvedVersion}</p>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex gap-4 pt-4">
                                            {result.score < 6 && (
                                                <button onClick={() => setResult(null)} className="flex-1 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-colors tracking-widest">
                                                    RETRY
                                                </button>
                                            )}
                                            <button 
                                                onClick={finish}
                                                disabled={result.score < 6}
                                                className={`flex-1 py-5 font-bold rounded-2xl transition-all tracking-widest ${
                                                    result.score >= 6 ? 'bg-white text-black hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                                                }`}
                                            >
                                                COMPLETE MISSION
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
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
  const [xp, setXp] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const toggleSound = () => setSoundEnabled(!soundEnabled);
  const toggleDarkMode = () => setDarkMode(!darkMode);

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
        if ((completedModules.length + 1) % 2 === 0) setUserLevel(l => l + 1);
    }
    setRoute('modules');
    setActiveLevelId(null);
  };

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
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-dark-bg text-white' : 'bg-gray-100 text-black'} selection:bg-neon-primary selection:text-white overflow-hidden transition-colors duration-500`}>
      
      {/* 3D Background persistent across most routes */}
      {route !== 'logic-dojo' && <Background3D darkMode={darkMode} />}
      
      {/* Navigation */}
      {route !== 'home' && (
        <Navigation 
            xp={xp} 
            level={userLevel} 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            soundEnabled={soundEnabled}
            toggleSound={toggleSound}
            currentRoute={route}
            setRoute={setRoute}
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
                key="active"
                level={getActiveLevelData()!} 
                onComplete={handleLevelComplete}
                onBack={() => setRoute('modules')}
                darkMode={darkMode}
            />
        )}

        {route === 'logic-dojo' && (
            <LogicDojo 
                key="logic"
                onExit={() => setRoute('modules')}
                onComplete={handleLogicComplete}
            />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;