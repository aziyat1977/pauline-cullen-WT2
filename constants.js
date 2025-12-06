import { IELTSCriteria } from './types.js';

export const LEVELS = [
  {
    id: 'lvl1',
    title: 'The Architect',
    description: 'Task Response: Perspective & Clarity',
    criteria: IELTSCriteria.TR,
    color: '#FF0055',
    content: [
      { type: 'text', text: "Fact vs Opinion: In Task 2, you are discussing an argument, not verifying facts. There is no 'right' answer, only a clear position supported by explanation." },
      { type: 'myth', text: "Myth: 'Eating fruit makes people unwell.' (Too absolute - suggests it is true for everyone)" },
      { type: 'tip', text: "Fact: Use modals to be accurate. Better: 'Eating fruit *can* make *some* people unwell'. This avoids over-generalizing." },
      { type: 'text', text: "Perspective Matters: Your ideas reflect your context. Contextualize them: 'The traffic *in my city* is chaotic...' or 'From a global perspective...'." }
    ],
    challengePrompt: "Write a sentence about 'Public Transport' that clearly shows your perspective (e.g., using 'In my country...' or 'In many large cities...')."
  },
  {
    id: 'lvl2',
    title: 'The Bridge Builder',
    description: 'Coherence: The Referencing Problem',
    criteria: IELTSCriteria.CC,
    color: '#00CCFF',
    content: [
      { type: 'text', text: "The Referencing Problem: Band 6 students often use 'It' or 'This' vaguely. A pronoun must refer to the specific noun immediately before it." },
      { type: 'example', text: "Bad: '...causes homelessness. In addition, *it* means house prices rise.' (What is 'it'?)\nGood: 'In addition, *a lack of accommodation* means house prices rise.'" },
      { type: 'text', text: "Paraphrasing links ideas. Instead of just adding a new idea, use a synonym of the previous problem to bridge the gap." },
      { type: 'tip', text: "Planning Symbols: Use arrows (→) for cause/effect and equals (=) for explanations in your plan." }
    ],
    challengePrompt: "Rewrite this to fix the referencing: 'Pollution is increasing. As a result, it causes health problems.' (Replace 'it' with a specific noun phrase)."
  },
  {
    id: 'lvl3',
    title: 'The Wordsmith',
    description: 'Lexical Resource: Precision & Clarification',
    criteria: IELTSCriteria.LR,
    color: '#00FF99',
    content: [
      { type: 'text', text: "Clarifying Phrases: Use specific phrases to explain complex ideas simply." },
      { type: 'example', text: "1. 'This means that...' (To explain a consequence)\n2. 'In other words...' (To simplify or restate)" },
      { type: 'text', text: "Reversing Ideas: Avoid repetition by flipping your sentence structure." },
      { type: 'example', text: "A: 'Eating junk food causes obesity.'\nB: 'Obesity is the result of eating junk food.'\nC: 'Eating junk food can lead to obesity.'" }
    ],
    challengePrompt: "Write 3 sentences linking 'Technology' and 'Isolation' using the 3 different structures (Causes, Result of, Leads to)."
  },
  {
    id: 'lvl4',
    title: 'The Surgeon',
    description: 'Grammar: Complex Arguments & Contrast',
    criteria: IELTSCriteria.GRA,
    color: '#FFE600',
    content: [
      { type: 'text', text: "Arguing by Contrast: Support an idea by asking 'What would happen if we didn't have/do this?'" },
      { type: 'example', text: "Positive: 'The government should help.'\nContrast: 'If the government *does not* step in, then this *can* put even more stress on charities.'" },
      { type: 'tip', text: "Use Modals for Certainty: Band 9 writers use 'could', 'may', or 'might' to show probability, rather than claiming 'this WILL happen'." }
    ],
    challengePrompt: "Write a 'Contrast' argument about 'Online Learning'. Start with: 'If schools do not embrace technology...'"
  }
];