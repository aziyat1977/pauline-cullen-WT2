import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, X, ArrowRight, Brain } from 'lucide-react';
import { LogicBackground } from './LogicBackground';
import { LOGIC_COURSE_DATA } from '../data/logicData';
import { audio } from '../services/audioService';

interface LogicDojoProps {
    onExit: () => void;
    onComplete: (xp: number) => void;
}

export const LogicDojo: React.FC<LogicDojoProps> = ({ onExit, onComplete }) => {
    const [index, setIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [answers, setAnswers] = useState<boolean[]>([]); // Track correct answers

    const currentSlide = LOGIC_COURSE_DATA[index];
    // Safety check if slide doesn't exist
    if (!currentSlide) return <div className="text-white text-center p-20">Error loading logic module. <button onClick={onExit} className="underline">Return</button></div>;

    const progress = ((index + 1) / LOGIC_COURSE_DATA.length) * 100;

    const handleNext = () => {
        audio.playClick();
        if (index < LOGIC_COURSE_DATA.length - 1) {
            setIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            // Calculate XP based on correct answers
            const correctCount = answers.filter(a => a).length;
            const xp = correctCount * 20 + 50; // Bonus for completion
            onComplete(xp);
        }
    };

    const handlePrev = () => {
        audio.playClick();
        if (index > 0) {
            setIndex(prev => prev - 1);
            setSelectedOption(null);
            setIsAnswered(false);
        }
    };

    const handleOptionSelect = (optIndex: number) => {
        if (isAnswered) return;
        audio.playClick();
        setSelectedOption(optIndex);
        setIsAnswered(true);

        const isCorrect = currentSlide.options?.[optIndex].correct || false;
        
        // Track answer
        const newAnswers = [...answers];
        newAnswers[index] = isCorrect;
        setAnswers(newAnswers);

        if (isCorrect) {
            audio.playSuccess();
        }
    };

    return (
        <div className="relative min-h-screen text-white font-sans bg-[#050505]">
            <LogicBackground />

            {/* Header */}
            <div className="fixed top-0 left-0 w-full z-20 p-6 flex items-center justify-between border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
                <div className="flex items-center gap-6">
                    <button onClick={onExit} className="p-3 hover:bg-white/10 rounded-full transition-colors border border-white/10">
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="font-display font-bold text-xl tracking-[0.2em] text-neon-primary uppercase">
                            Logic & Structure <span className="text-xs opacity-50 ml-2 text-white">UNIT {index + 1}</span>
                        </h1>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-3 text-neon-secondary px-4 py-2 bg-neon-secondary/10 rounded-full border border-neon-secondary/20">
                    <Brain size={16} />
                    <span className="font-mono text-xs font-bold tracking-widest">CULLEN PROTOCOL</span>
                </div>
            </div>

            {/* Progress Bar Fixed */}
            <div className="fixed top-[81px] left-0 w-full h-1 bg-gray-900 z-20">
                <motion.div 
                    className="h-full bg-neon-primary shadow-[0_0_10px_#FF0055]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Content Area */}
            <div className="relative z-10 container mx-auto px-4 py-32 min-h-screen flex flex-col justify-center items-center">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
                        className="w-full max-w-4xl"
                    >
                        <div className="glass-panel p-8 md:p-16 rounded-[2rem] relative overflow-hidden">
                             {/* Decorative Corner */}
                             <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                                 <Brain size={120} />
                             </div>

                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-white relative z-10">
                                {currentSlide.title}
                            </h2>

                            {/* Lesson Type */}
                            {currentSlide.type === 'lesson' && (
                                <div className="prose prose-invert prose-lg max-w-none mb-10 text-gray-300 font-light">
                                    <div dangerouslySetInnerHTML={{ __html: currentSlide.content || '' }} />
                                </div>
                            )}

                            {/* Quiz Type */}
                            {currentSlide.type === 'quiz' && (
                                <div className="w-full relative z-10">
                                    <p className="text-2xl mb-10 leading-relaxed font-light border-l-4 border-neon-primary pl-6">
                                        {currentSlide.question}
                                    </p>
                                    <div className="grid grid-cols-1 gap-4">
                                        {currentSlide.options?.map((opt, i) => {
                                            let statusClass = "border-white/10 hover:border-white/30 hover:bg-white/5";
                                            if (isAnswered) {
                                                if (opt.correct) statusClass = "border-green-500 bg-green-500/10 text-white shadow-[0_0_20px_rgba(34,197,94,0.2)]";
                                                else if (selectedOption === i) statusClass = "border-red-500 bg-red-500/10 text-red-200";
                                                else statusClass = "border-white/5 opacity-40 grayscale";
                                            }

                                            return (
                                                <button
                                                    key={i}
                                                    disabled={isAnswered}
                                                    onClick={() => handleOptionSelect(i)}
                                                    className={`p-6 md:p-8 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${statusClass}`}
                                                >
                                                    <span className="relative z-10 font-bold text-lg">{opt.text}</span>
                                                    {isAnswered && opt.correct && <Check className="absolute right-6 top-1/2 -translate-y-1/2 text-green-500 w-6 h-6" />}
                                                    {isAnswered && selectedOption === i && !opt.correct && <X className="absolute right-6 top-1/2 -translate-y-1/2 text-red-500 w-6 h-6" />}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Feedback */}
                                    <AnimatePresence>
                                        {isAnswered && selectedOption !== null && (
                                            <motion.div 
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className={`mt-8 p-6 rounded-2xl border ${
                                                    currentSlide.options?.[selectedOption!].correct 
                                                    ? 'bg-green-500/5 border-green-500/30' 
                                                    : 'bg-red-500/5 border-red-500/30'
                                                }`}
                                            >
                                                <p className={`font-bold mb-2 uppercase tracking-widest text-xs ${
                                                    currentSlide.options?.[selectedOption!].correct ? "text-green-400" : "text-red-400"
                                                }`}>
                                                    {currentSlide.options?.[selectedOption!].correct ? "Analysis: Correct" : "Analysis: Incorrect"}
                                                </p>
                                                <p className="opacity-90 text-lg font-light">
                                                    {currentSlide.options?.[selectedOption!].feedback || 
                                                     (currentSlide.options?.[selectedOption!].correct ? "Excellent logic." : "Review the lesson parameters.")}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}

                            {/* Navigation Footer Inside Card */}
                            <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
                                <button 
                                    onClick={handlePrev} 
                                    disabled={index === 0}
                                    className={`px-6 py-3 rounded-xl font-bold transition-colors ${index === 0 ? 'opacity-0 pointer-events-none' : 'hover:bg-white/10 text-gray-400 hover:text-white'}`}
                                >
                                    PREVIOUS
                                </button>
                                
                                <button 
                                    onClick={handleNext}
                                    disabled={currentSlide.type === 'quiz' && !isAnswered}
                                    className={`px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all tracking-widest ${
                                        currentSlide.type === 'quiz' && !isAnswered
                                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                        : 'bg-white text-black hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    }`}
                                >
                                    {index === LOGIC_COURSE_DATA.length - 1 ? "FINISH UNIT" : "CONTINUE"} <ArrowRight size={20} />
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};