export enum IELTSCriteria {
  TR = 'Task Response',
  CC = 'Coherence & Cohesion',
  LR = 'Lexical Resource',
  GRA = 'Grammatical Range'
}

export interface Level {
  id: string;
  title: string;
  description: string;
  criteria: IELTSCriteria;
  color: string;
  content: ContentBlock[];
  challengePrompt: string; // For Gemini Interaction
}

export interface ContentBlock {
  type: 'text' | 'tip' | 'myth' | 'example';
  text: string;
}

export interface UserState {
  xp: number;
  level: number;
  completedModules: string[];
  darkMode: boolean;
  soundEnabled: boolean;
}

export interface GradingResult {
  score: number;
  feedback: string;
  improvedVersion?: string;
}

// New Types for Logic Dojo
export interface LogicSlide {
  type: 'lesson' | 'quiz';
  title: string;
  content?: string; // HTML/Text content
  question?: string;
  options?: { text: string; correct: boolean; feedback?: string }[];
}
