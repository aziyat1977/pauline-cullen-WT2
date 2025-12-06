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
        <div className="relative min-h-screen text-white font-sans overflow-hidden">
            <LogicBackground />

            {/* Header */}
            <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <button onClick={onExit} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft />
                    </button>
                    <div>
                        <h1 className="font-display font-bold text-xl tracking-widest text-neon-primary uppercase">
                            Logic & Structure <span className="text-xs opacity-50 ml-2">UNIT 2-3</span>
                        </h1>
                        <div className="w-48 h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                            <motion.div 
                                className="h-full bg-neon-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-neon-secondary">
                    <Brain size={20} />
                    <span className="font-mono text-sm">CULLEN METHODOLOGY</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 container mx-auto px-4 py-8 h-[80vh] flex flex-col justify-center items-center">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-3xl bg-[#1e1e28]/90 backdrop-blur-md border border-neon-primary/30 p-8 md:p-12 rounded-2xl shadow-2xl"
                    >
                        <h2 className="text-3xl font-display font-bold mb-6 border-l-4 border-neon-primary pl-4">
                            {currentSlide.title}
                        </h2>

                        {/* Lesson Type */}
                        {currentSlide.type === 'lesson' && (
                            <div className="prose prose-invert prose-lg max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: currentSlide.content || '' }} />
                            </div>
                        )}

                        {/* Quiz Type */}
                        {currentSlide.type === 'quiz' && (
                            <div className="w-full">
                                <p className="text-xl mb-8 leading-relaxed font-medium">
                                    {currentSlide.question}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {currentSlide.options?.map((opt, i) => {
                                        let statusClass = "border-white/20 hover:border-neon-primary hover:bg-neon-primary/10";
                                        if (isAnswered) {
                                            if (opt.correct) statusClass = "border-green-500 bg-green-500/20 text-white";
                                            else if (selectedOption === i) statusClass = "border-red-500 bg-red-500/20";
                                            else statusClass = "border-white/10 opacity-50";
                                        }

                                        return (
                                            <button
                                                key={i}
                                                disabled={isAnswered}
                                                onClick={() => handleOptionSelect(i)}
                                                className={`p-6 rounded-xl border text-left transition-all duration-300 relative overflow-hidden ${statusClass}`}
                                            >
                                                <span className="relative z-10 font-bold">{opt.text}</span>
                                                {isAnswered && opt.correct && <Check className="absolute right-4 top-4 text-green-500" />}
                                                {isAnswered && selectedOption === i && !opt.correct && <X className="absolute right-4 top-4 text-red-500" />}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Feedback */}
                                <AnimatePresence>
                                    {isAnswered && selectedOption !== null && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`mt-6 p-4 rounded-lg border-l-4 ${
                                                currentSlide.options?.[selectedOption].correct 
                                                ? 'bg-green-500/10 border-green-500' 
                                                : 'bg-red-500/10 border-red-500'
                                            }`}
                                        >
                                            <p className="font-bold mb-1">
                                                {currentSlide.options?.[selectedOption].correct ? "Correct" : "Incorrect"}
                                            </p>
                                            <p className="opacity-90 text-sm">
                                                {currentSlide.options?.[selectedOption].feedback || 
                                                 (currentSlide.options?.[selectedOption].correct ? "Well done." : "Review the logic rules.")}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        {/* Navigation Footer Inside Card */}
                        <div className="mt-10 flex justify-end gap-4 border-t border-white/10 pt-6">
                            {index > 0 && (
                                <button onClick={handlePrev} className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 font-bold transition-colors">
                                    Previous
                                </button>
                            )}
                            <button 
                                onClick={handleNext}
                                disabled={currentSlide.type === 'quiz' && !isAnswered}
                                className={`px-8 py-3 rounded-lg font-bold flex items-center gap-2 transition-all ${
                                    currentSlide.type === 'quiz' && !isAnswered
                                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    : 'bg-neon-primary text-white hover:bg-neon-primary/80 shadow-[0_0_15px_rgba(255,0,85,0.5)]'
                                }`}
                            >
                                {index === LOGIC_COURSE_DATA.length - 1 ? "Finish Unit" : "Next Step"} <ArrowRight size={18} />
                            </button>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
