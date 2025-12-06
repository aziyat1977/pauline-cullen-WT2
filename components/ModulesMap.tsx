import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Zap, Brain } from 'lucide-react';
import { Level } from '../types';

const ModulesMap: React.FC<{ 
    levels: Level[]; 
    completed: string[]; 
    onSelect: (id: string) => void;
    onSelectLogic: () => void;
    darkMode: boolean;
}> = ({ levels, completed, onSelect, onSelectLogic, darkMode }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="min-h-screen flex flex-col items-center pt-32 pb-20 px-4"
        >
            <h2 className={`font-display text-5xl font-bold mb-16 ${darkMode ? 'text-white' : 'text-black'}`}>MISSION SELECT</h2>
            <div className="flex flex-col gap-8 w-full max-w-5xl relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-10 bottom-10 w-1 bg-gray-500/20 md:left-1/2 md:-ml-0.5" />
                
                {/* New Logic Dojo Node - Placed at the top as a prerequisite or specialized training */}
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 mb-8"
                >
                    <div className="hidden md:flex justify-end order-1 w-full">
                         <motion.button
                            onClick={onSelectLogic}
                            whileHover={{ scale: 1.02 }}
                            className={`w-full text-left p-6 rounded-3xl border border-neon-primary/50 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,85,0.2)] ${
                                darkMode ? 'bg-black/80 hover:bg-black/60' : 'bg-white/80'
                            }`}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-neon-primary mb-2 block">Special Unit</span>
                            <h3 className={`text-2xl font-display font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Logic & Structure</h3>
                            <p className={`font-sans text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Master the "Validity Check" and prevent Band 6 logic traps.</p>
                        </motion.button>
                    </div>
                    
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-neon-primary bg-neon-primary text-white z-10 shrink-0 md:mx-auto order-none md:order-2 shadow-[0_0_30px_#FF0055]">
                        <Brain />
                    </div>

                    <div className="flex-1 md:flex-none md:flex md:justify-start md:order-3 md:hidden">
                        <motion.button
                            onClick={onSelectLogic}
                            className={`w-full text-left p-6 rounded-3xl border border-neon-primary/50 backdrop-blur-md ${
                                darkMode ? 'bg-black/80' : 'bg-white/80'
                            }`}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-neon-primary mb-2 block">Special Unit</span>
                            <h3 className={`text-2xl font-display font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Logic & Structure</h3>
                             <p className={`font-sans text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Master the "Validity Check" and prevent Band 6 logic traps.</p>
                        </motion.button>
                    </div>
                </motion.div>


                {levels.map((lvl, index) => {
                    const isLocked = index > 0 && !completed.includes(levels[index - 1].id);
                    const isCompleted = completed.includes(lvl.id);
                    
                    // Card Component for reuse
                    const Card = () => (
                        <motion.button
                            disabled={isLocked}
                            onClick={() => !isLocked && onSelect(lvl.id)}
                            whileHover={!isLocked ? { scale: 1.02 } : {}}
                            className={`
                                w-full text-left p-8 rounded-3xl border backdrop-blur-md transition-all
                                ${isLocked 
                                    ? 'bg-gray-900/50 border-gray-800 opacity-50 cursor-not-allowed' 
                                    : darkMode 
                                        ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30' 
                                        : 'bg-white/60 border-black/10 hover:bg-white/80 hover:border-black/20'
                                }
                            `}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2 block" style={{color: lvl.color}}>{lvl.criteria}</span>
                            <h3 className={`text-3xl font-display font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{lvl.title}</h3>
                            <p className={`font-sans text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{lvl.description}</p>
                        </motion.button>
                    );

                    return (
                        <motion.div 
                            key={lvl.id}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8"
                        >
                            {/* Desktop Left Side */}
                            <div className="hidden md:flex justify-end order-1">
                                {index % 2 === 0 && <Card />}
                            </div>

                            {/* Node (Center) */}
                            <div className={`
                                w-16 h-16 rounded-full flex items-center justify-center border-4 z-10 shrink-0
                                md:mx-auto order-none md:order-2
                                ${isLocked ? 'bg-gray-800 border-gray-700 text-gray-500' : 
                                  isCompleted ? 'bg-neon-secondary border-neon-secondary text-black shadow-[0_0_30px_#00FF99]' : 
                                  'bg-neon-blue border-neon-blue text-black animate-pulse'}
                            `}>
                                {isCompleted ? <CheckCircle /> : isLocked ? <Lock /> : <Zap />}
                            </div>

                            {/* Mobile Content / Desktop Right Side */}
                            <div className="flex-1 md:flex-none md:flex md:justify-start md:order-3">
                                <div className="md:hidden w-full">
                                    <Card />
                                </div>
                                <div className="hidden md:block w-full">
                                    {index % 2 !== 0 && <Card />}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};
export default ModulesMap;
