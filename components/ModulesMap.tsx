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
            className="min-h-screen flex flex-col items-center pt-24 pb-40 px-4"
        >
            <div className="mb-20 text-center">
                <span className="text-neon-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Training Grounds</span>
                <h2 className={`font-display text-5xl md:text-7xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>MISSION SELECT</h2>
            </div>

            <div className="flex flex-col gap-12 w-full max-w-5xl relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:left-1/2 md:-ml-px" />
                
                {/* Logic Dojo Node (Special) */}
                 <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 mb-8"
                >
                    <div className="hidden md:flex justify-end order-1 w-full">
                         <motion.button
                            onClick={onSelectLogic}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full text-left p-8 rounded-[2rem] border border-neon-primary/30 backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,85,0.1)] bg-gradient-to-br from-[#111] to-[#050505] hover:border-neon-primary/60 transition-all group"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-neon-primary mb-3 block group-hover:text-white transition-colors">Special Unit</span>
                            <h3 className="text-3xl font-display font-bold mb-3 text-white">Logic & Structure</h3>
                            <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">Master the "Validity Check" and prevent Band 6 logic traps.</p>
                        </motion.button>
                    </div>
                    
                    <div className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-neon-primary bg-neon-primary text-white z-10 shrink-0 md:mx-auto order-none md:order-2 shadow-[0_0_50px_#FF0055] animate-pulse-slow">
                        <Brain size={32} />
                    </div>

                    <div className="flex-1 md:flex-none md:flex md:justify-start md:order-3 md:hidden">
                        <motion.button
                            onClick={onSelectLogic}
                            className="w-full text-left p-8 rounded-[2rem] border border-neon-primary/30 backdrop-blur-xl bg-[#111] shadow-[0_0_30px_rgba(255,0,85,0.1)]"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-neon-primary mb-3 block">Special Unit</span>
                            <h3 className="text-3xl font-display font-bold mb-3 text-white">Logic & Structure</h3>
                             <p className="font-sans text-sm text-gray-400 font-light">Master the "Validity Check".</p>
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
                            whileHover={!isLocked ? { scale: 1.02, x: index % 2 === 0 ? -5 : 5 } : {}}
                            whileTap={!isLocked ? { scale: 0.98 } : {}}
                            className={`
                                w-full text-left p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-300 relative overflow-hidden
                                ${isLocked 
                                    ? 'bg-white/5 border-white/5 opacity-40 cursor-not-allowed grayscale' 
                                    : 'bg-[#0A0A0A]/80 border-white/10 hover:bg-[#151515] hover:border-white/20 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]'
                                }
                            `}
                        >
                            {!isLocked && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>}
                            
                            <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3 block" style={{color: isLocked ? '#666' : lvl.color}}>{lvl.criteria}</span>
                            <h3 className="text-3xl font-display font-bold mb-3 text-white">{lvl.title}</h3>
                            <p className="font-sans text-lg text-gray-400 font-light leading-relaxed">{lvl.description}</p>
                        </motion.button>
                    );

                    return (
                        <motion.div 
                            key={lvl.id}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8"
                        >
                            {/* Desktop Left Side */}
                            <div className="hidden md:flex justify-end order-1">
                                {index % 2 === 0 && <Card />}
                            </div>

                            {/* Node (Center) */}
                            <div className={`
                                w-20 h-20 rounded-full flex items-center justify-center border-4 z-10 shrink-0
                                md:mx-auto order-none md:order-2 transition-all duration-500
                                ${isLocked ? 'bg-[#111] border-[#222] text-gray-700' : 
                                  isCompleted ? 'bg-neon-secondary border-neon-secondary text-black shadow-[0_0_40px_#00FF99]' : 
                                  'bg-neon-blue border-neon-blue text-black animate-pulse shadow-[0_0_40px_#00CCFF]'}
                            `}>
                                {isCompleted ? <CheckCircle size={32} /> : isLocked ? <Lock size={24} /> : <Zap size={32} />}
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