import { LogicSlide } from '../types';

export const LOGIC_COURSE_DATA: LogicSlide[] = [
    {
        type: "lesson",
        title: "Lesson 1: The Invalid Argument",
        content: `
            <p class="mb-4"><strong class="text-neon-primary">The Band 6 Trap:</strong> Many students write confusing arguments. A common error is providing a "reason" that is actually just an invented fact.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary mb-4">
                <p class="font-bold mb-2">The "BBC" Fallacy:</p>
                <p class="italic opacity-80">"The government should encourage fruit. For example, a BBC documentary showed that 85% of people eat fruit."</p>
            </div>
            <p class="mb-4">This is INVALID. The statistic (even if true) does not explain <strong>WHY</strong> the government should act. It adds no logical support.</p>
            <span class="text-xs text-gray-500 block mb-6 font-mono">[Source: Page 1, citing 9-11]</span>
            
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary mb-4">
                <p class="font-bold mb-2">The "Logical Leap":</p>
                <p class="italic opacity-80">"Students' results increase if they have a peaceful place."</p>
            </div>
            <p>This assumes too much. You must explain the connection: "If there is too much noise, it is difficult to concentrate."</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Page 3, citing 55-57]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 1: Logic Check",
        question: "Evaluate this argument: 'The government should encourage fruit because it contains Vitamin C, which keeps us healthy.'",
        options: [
            { text: "Valid Argument", correct: true, feedback: "Correct. The reason (Vitamin C/Health) logically supports the conclusion (Government should encourage it). [Source: Page 1, cite: 12]" },
            { text: "Invalid - Invented Fact", correct: false, feedback: "Incorrect. This is a valid logical chain." },
            { text: "Invalid - Logical Leap", correct: false }
        ]
    },
    {
        type: "quiz",
        title: "Drill 2: Logic Check",
        question: "Evaluate this argument: 'Robots will replace humans. However, there are many jobs robots can never do.'",
        options: [
            { text: "Valid Argument", correct: false },
            { text: "Invalid - Contradictory", correct: true, feedback: "Correct. You cannot argue that robots will replace humans AND that they can't do most jobs in the same breath without careful qualification. [Source: Page 3, cite: 46-48]" }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 2: Language Validity",
        content: `
            <p class="mb-4"><strong class="text-neon-primary">The "Catastrophe" Trap:</strong> Vocabulary choice affects argument validity. Students often use extreme words to show off, destroying their logic.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary mb-4">
                <p class="font-bold mb-2">Example:</p>
                <p class="italic opacity-80">"If people buy the same products, the results may be catastrophic."</p>
            </div>
            <p class="mb-4">A "catastrophe" is a sudden disaster. Standardized shopping is NOT a disaster. Using this word makes your argument illogical, regardless of your grammar score.</p>
            <span class="text-xs text-gray-500 block mb-6 font-mono">[Source: Page 4, citing 72-74]</span>
            <p class="font-bold text-xl text-center text-neon-secondary">Rule: Task Response is more important than showing off vocabulary.</p>
            <span class="text-xs text-gray-500 block mt-2 text-center font-mono">[Source: Page 5, citing 87]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 3: Vocabulary Validity",
        question: "Which sentence is logically valid for an essay about 'globalisation of culture'?",
        options: [
            { text: "It is calamitous that we all wear jeans.", correct: false, feedback: "Incorrect. 'Calamitous' is too extreme for fashion trends. [Source: Page 5, cite: 86]" },
            { text: "It is concerning that local traditions may be lost.", correct: true, feedback: "Correct. 'Concerning' is an appropriate, measured level of emotion for this topic." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 3: Three Ways to Build Arguments",
        content: `
            <p class="mb-6">Your ideas determine your structure. Do not force a template.</p>
            
            <div class="grid gap-4">
                <div class="bg-white/5 p-4 rounded-xl border-l-2 border-neon-blue">
                    <p class="font-bold text-neon-blue">1. Adding Information (+)</p>
                    <p class="text-sm opacity-80 mb-2">Structure: <em>Firstly... Secondly... Finally...</em></p>
                    <p>Used when adding multiple reasons that lead to one conclusion.</p>
                </div>
                
                <div class="bg-white/5 p-4 rounded-xl border-l-2 border-neon-secondary">
                    <p class="font-bold text-neon-secondary">2. Cause & Effect (→)</p>
                    <p class="text-sm opacity-80 mb-2">Structure: <em>This means that... This causes... As a result...</em></p>
                    <p>Used for the 'Domino Effect'. A leads to B, which leads to C.</p>
                </div>

                <div class="bg-white/5 p-4 rounded-xl border-l-2 border-neon-yellow">
                    <p class="font-bold text-neon-yellow">3. Prediction (If/When)</p>
                    <p class="text-sm opacity-80 mb-2">Structure: <em>If the government does X, then Y will happen.</em></p>
                    <p>You must use the correct modal verb (will/could/may) to show your certainty.</p>
                </div>
            </div>
        `
    },
    {
        type: "quiz",
        title: "Drill 4: Argument Structure",
        question: "Identify the structure: 'Lack of housing puts pressure on charities, who then have to find food for the homeless.'",
        options: [
            { text: "Adding Information (+)", correct: false },
            { text: "Cause & Effect / Domino (→)", correct: true, feedback: "Correct. Lack of housing -> Pressure on charities -> Need for food. It is a chain reaction. [Source: Page 9, cite: 173-174]" },
            { text: "Contrast", correct: false }
        ]
    },
    {
        type: "quiz",
        title: "Drill 5: Argument Structure",
        question: "Identify the structure: 'The money builds roads. Secondly, schools are repaired. Finally, salaries are paid.'",
        options: [
            { text: "Adding Information (+)", correct: true, feedback: "Correct. These are three separate reasons added together to support taxes. [Source: Page 6, cite: 101-103]" },
            { text: "Cause & Effect (→)", correct: false }
        ]
    },
    {
        type: "quiz",
        title: "Drill 6: Certainty & Prediction",
        question: "Which sentence shows the writer is 100% sure of the result?",
        options: [
            { text: "If the government helps, this will solve all problems.", correct: true, feedback: "Correct. 'Will' implies 100% certainty (often too strong for IELTS). [Source: Page 10, cite: 193/204]" },
            { text: "If the government helps, this could improve the situation.", correct: false, feedback: "Incorrect. 'Could' implies possibility (50%), not certainty." }
        ]
    },
    {
        type: "quiz",
        title: "Drill 7: Certainty & Prediction",
        question: "Which is the safer, Band 7+ way to predict a result?",
        options: [
            { text: "If taxes are raised, it will definitely fix the economy.", correct: false, feedback: "Incorrect. This is an over-generalization and likely untrue." },
            { text: "If taxes are raised, it could help improve the economy.", correct: true, feedback: "Correct. This uses cautious language (speculation). [Source: Page 10, cite: 195]" }
        ]
    },
    {
        type: "quiz",
        title: "Drill 8: Style & Cohesion",
        question: "Compare these two styles. Which is better for a learner to ensure coherence?",
        options: [
            { text: "Style A: 'Money builds roads. Schools are repaired. Salaries are paid.'", correct: false, feedback: "Incorrect. This 'News Report' style forces the reader to work too hard to find connections. [Source: Page 8, cite: 151-152]" },
            { text: "Style B: 'Firstly, money builds roads. Secondly, schools are repaired.'", correct: true, feedback: "Correct. Clear signposting makes life easier for the reader/examiner. [Source: Page 8, cite: 158]" }
        ]
    },
    {
        type: "quiz",
        title: "Drill 9: Complexity",
        question: "How should you achieve 'complexity' in your writing?",
        options: [
            { text: "By using very long sentences and obscure words.", correct: false },
            { text: "By explaining complex ideas (like cause/effect chains) clearly.", correct: true, feedback: "Correct. 'Explaining complex ideas in a clear and simple way will raise your chances of achieving band 7.' [Source: Page 9, cite: 183]" }
        ]
    },
    {
        type: "quiz",
        title: "Drill 10: Grammar & Meaning",
        question: "Analyze: 'Hence, it is convenient for them to influence people for any service.'",
        options: [
            { text: "The grammar obscures the meaning.", correct: true, feedback: "Correct. The language problems interfere with the argument. The reader cannot understand the point. [Source: Page 4, cite: 67-68]" },
            { text: "The meaning is clear despite grammar.", correct: false }
        ]
    },
    {
        type: "lesson",
        title: "Unit Complete",
        content: `
            <p class="mb-4"><strong>Summary:</strong> You have mastered the validity check (no invented facts, no contradictions) and the three main argument structures.</p>
            <p class="mb-6"><strong>Next Step:</strong> Review your old essays. Search for 'If', 'When', and 'Will'. Ask yourself: <em>"Am I 100% sure this will happen? Or should I change 'will' to 'could'?"</em></p>
            <span class="text-xs text-gray-500 block font-mono">[Source: Page 11, citing 214-215]</span>
        `
    }
];
