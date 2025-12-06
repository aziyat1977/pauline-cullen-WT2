import { IELTSCriteria, Level } from './types';

export const LEVELS: Level[] = [
  {
    id: 'lvl1',
    title: 'The Architect',
    description: 'Mastering Task Response & Planning',
    criteria: IELTSCriteria.TR,
    color: '#FF0055',
    content: [
      { type: 'myth', text: "Myth: You need to write a very long introduction to impress the examiner." },
      { type: 'tip', text: "Fact: Your introduction should be efficient. Paraphrase the question and state your position clearly. Don't waste time." },
      { type: 'text', text: "Pauline's Rule: Address ALL parts of the task. If the question asks for 'advantages and disadvantages', you must cover both equally. Missing one limits you to Band 6." },
      { type: 'example', text: "Bad: 'This essay will discuss things.' \nGood: 'This essay will argue that the benefits of remote work outweigh the drawbacks due to increased productivity.'" }
    ],
    challengePrompt: "Write an introduction for this topic: 'Some people believe that video games cause violence in young people. To what extent do you agree or disagree?'"
  },
  {
    id: 'lvl2',
    title: 'The Bridge Builder',
    description: 'Coherence & Cohesion flow',
    criteria: IELTSCriteria.CC,
    color: '#00CCFF',
    content: [
      { type: 'myth', text: "Myth: Use 'Moreover', 'Furthermore', and 'However' in every single sentence." },
      { type: 'tip', text: "Fact: Overusing linkers is mechanical. Use 'referencing' instead (this, that, these, those) to link ideas naturally." },
      { type: 'text', text: "One Idea Per Paragraph. The topic sentence is king. The rest of the paragraph must support that one sentence." },
    ],
    challengePrompt: "Write a body paragraph explaining one reason why video games might NOT cause violence."
  },
  {
    id: 'lvl3',
    title: 'The Wordsmith',
    description: 'Lexical Resource & Collocations',
    criteria: IELTSCriteria.LR,
    color: '#00FF99',
    content: [
      { type: 'text', text: "Don't just memorize 'big words'. Examiner looks for 'collocations' – words that naturally go together." },
      { type: 'example', text: "Instead of 'make a crime', use 'commit a crime'. Instead of 'big problem', use 'pressing issue'." },
      { type: 'tip', text: "Topic Specific Vocabulary > General Academic Vocabulary. If the topic is environment, I expect 'carbon footprint', not just 'bad things'." }
    ],
    challengePrompt: "List 5 collocations related to 'Education' and use them in a sentence."
  },
  {
    id: 'lvl4',
    title: 'The Surgeon',
    description: 'Grammatical Range & Accuracy',
    criteria: IELTSCriteria.GRA,
    color: '#FFE600',
    content: [
      { type: 'text', text: "Accuracy is more important than complexity initially. A sentence with 3 clauses and 5 errors is worse than a simple, correct sentence." },
      { type: 'tip', text: "Variety is key. Mix simple, compound, and complex sentences. Don't start every sentence with 'The'." },
    ],
    challengePrompt: "Write a complex sentence starting with 'Although' about the topic of 'Online Learning'."
  }
];