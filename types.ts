export const IELTSCriteria = {
  TR: 'Task Response',
  CC: 'Coherence & Cohesion',
  LR: 'Lexical Resource',
  GRA: 'Grammatical Range'
};

export interface LevelContent {
  type: string;
  text: string;
}

export interface Level {
  id: string;
  title: string;
  description: string;
  criteria: string;
  color: string;
  content: LevelContent[];
  challengePrompt: string;
}

export interface LogicOption {
  text: string;
  correct: boolean;
  feedback?: string;
}

export interface LogicSlide {
  type: 'lesson' | 'quiz';
  title: string;
  content?: string;
  question?: string;
  options?: LogicOption[];
}
