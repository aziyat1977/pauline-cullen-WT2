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
        type: "lesson",
        title: "Lesson 4: More Complex Arguments",
        content: `
            <p class="mb-4"><strong>Understanding Levels:</strong> Candidates at C1 and C2 (Bands 7-9) have mastered language skills. They know <em>when</em> and <em>how</em> to use language effectively. Complexity comes from the <strong>argument</strong> you make, not just the vocabulary you use.</p>
            
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-yellow mb-4">
                <p class="font-bold text-neon-yellow">Method: Arguing by Contrast</p>
                <p class="mb-2">To find extra ideas, ask yourself: <em>"What would happen if we didn't have/do this?"</em></p>
                <p class="italic opacity-80">"If the government <strong>does not step in</strong>... then this <strong>can put</strong> even more stress on community programmes..."</p>
            </div>
            
            <p><strong>Point to notice:</strong> High-level writers use modals (<span class="text-neon-blue">can, may</span>) to show certainty, rather than claiming "this WILL destroy society".</p>
        `
    },
    {
        type: "lesson",
        title: "4.2 The Referencing Problem",
        content: `
            <p class="mb-4">A major coherence killer (Band 6) is the unclear use of "It" or "This". A pronoun must refer back to the last noun mentioned.</p>
            
            <div class="bg-red-500/10 p-4 rounded-xl mb-4 border-l-4 border-red-500">
                <p class="font-bold text-red-400">The Confusion:</p>
                <p class="italic">"...causes homelessness to rise. In addition, <strong>it</strong> means that house prices remain very high."</p>
                <p class="text-xs mt-1 text-red-300">Does 'it' refer to homelessness? Or the population rise?</p>
            </div>
            
            <div class="bg-green-500/10 p-4 rounded-xl mb-4 border-l-4 border-green-500">
                <p class="font-bold text-green-400">The Solution (Paraphrasing):</p>
                <p class="italic">"In addition, <strong>a lack of accommodation</strong> means that house prices remain very high."</p>
            </div>
            <p>This paraphrase acts as a clear bridge between ideas.</p>
        `
    },
    {
        type: "quiz",
        title: "Drill 6: Logical Flow",
        question: "Which sentence logically concludes this paragraph about housing shortages?",
        options: [
            { text: "Thus, housing problems have an impact on everyone in the community.", correct: true, feedback: "Correct. This summarizes the broader impact of the previous points." },
            { text: "Thus, employment is also a very important issue.", correct: false, feedback: "Incorrect. This introduces a completely new topic abruptly." }
        ]
    },
    {
        type: "lesson",
        title: "4.3 Varying Sentence Length",
        content: `
            <p class="mb-4">High-level writers mix long complex sentences with shorter ones to create rhythm and clarity. Try reading your paragraph aloud to hear this variety.</p>
            
            <p class="mb-2"><strong>Planning Symbols:</strong></p>
            <div class="grid grid-cols-2 gap-4 font-mono text-sm mb-4">
                <div class="bg-white/5 p-2 rounded border border-white/10">∴ (therefore / thus)</div>
                <div class="bg-white/5 p-2 rounded border border-white/10">= (this means)</div>
                <div class="bg-white/5 p-2 rounded border border-white/10">↑ (rises / increases)</div>
                <div class="bg-white/5 p-2 rounded border border-white/10">↓ (falls / decreases)</div>
            </div>
        `
    },
    {
        type: "lesson",
        title: "4.4 Tracing Argument Development",
        content: `
            <p class="mb-4">Complex paragraphs follow a logical chain. You should be able to label every sentence function.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-blue text-sm font-mono space-y-2">
                <p><span class="text-neon-primary">[Claim/Cause]</span> Population exceeds housing.</p>
                <p class="pl-4">↓</p>
                <p><span class="text-neon-secondary">[Effect 1]</span> Many people have nowhere to live.</p>
                <p class="pl-4">↓</p>
                <p><span class="text-neon-yellow">[Effect 2]</span> Pressure on local charities.</p>
                <p class="pl-4">↓</p>
                <p><span class="text-white">[Conclusion]</span> Housing problems impact everyone.</p>
            </div>
            <p class="mt-4 text-sm opacity-80">The effects serve as supporting evidence. This complexity is hard to control, so planning with symbols is essential.</p>
        `
    },
    {
        type: "lesson",
        title: "Language Note: Cause & Result",
        content: `
            <p class="mb-4">Avoid repetitive language by reversing your sentence structures (A causes B vs B is result of A).</p>
            <ul class="space-y-3">
                <li class="flex items-center gap-2"><span class="text-neon-primary">A causes B</span> <span class="opacity-50">→</span> Eating junk food <strong>causes</strong> obesity.</li>
                <li class="flex items-center gap-2"><span class="text-neon-blue">B is the result of A</span> <span class="opacity-50">→</span> Obesity <strong>is the result of</strong> eating junk food.</li>
                <li class="flex items-center gap-2"><span class="text-neon-secondary">A can lead to B</span> <span class="opacity-50">→</span> Eating junk food <strong>can lead to</strong> obesity.</li>
            </ul>
        `
    },
    {
        type: "lesson",
        title: "Extra Practice Checklist",
        content: `
            <p class="mb-4">Scan your writing for these phrases. Is your position clear?</p>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/5 p-3 rounded-lg">
                    <p class="font-bold text-neon-primary">Conditionals</p>
                    <p class="text-sm opacity-70">If, When, Unless</p>
                </div>
                <div class="bg-white/5 p-3 rounded-lg">
                    <p class="font-bold text-neon-secondary">Results</p>
                    <p class="text-sm opacity-70">As a result, Result in, Causes</p>
                </div>
                <div class="bg-white/5 p-3 rounded-lg">
                    <p class="font-bold text-neon-yellow">Modals</p>
                    <p class="text-sm opacity-70">Will, Would, Could, Might</p>
                </div>
            </div>
            <div class="mt-6 text-center p-4 bg-neon-secondary/10 rounded-xl">
                <p class="font-bold text-neon-secondary">VISIT OUR TELEGRAM PAGE</p>
                <p class="font-mono text-sm">t.me/letscrackielts</p>
            </div>
        `
    },
    {
        type: "lesson",
        title: "Lesson 5: Explaining & Clarifying",
        content: `
            <p class="mb-4"><strong>Fact vs Opinion:</strong> In Task 2, you are discussing an argument (opinion), not verifying facts. There is no "right" answer, only a clear position.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary">
                <p class="font-bold">Avoid Absolutes:</p>
                <p class="italic text-red-300 line-through">"Eating fruit makes people feel unwell."</p>
                <p class="text-xs text-red-400 mb-2">Too strong/false. Suggests EVERYONE feels unwell.</p>
                <p class="italic text-green-400">"Eating fruit <strong>can make some people</strong> feel unwell."</p>
                <p class="text-xs text-green-300">Accurate usage of modals.</p>
            </div>
        `
    },
    {
        type: "lesson",
        title: "5.2 Perspective & Context",
        content: `
            <p class="mb-4">Your argument depends on your perspective (culture, location, experience). Contextualizing your ideas helps the examiner understand your viewpoint.</p>
            <p class="mb-4 font-mono text-neon-yellow"><strong>Clarifying Phrases:</strong></p>
            <div class="space-y-4">
                <div class="bg-white/5 p-4 rounded-xl">
                    <p class="font-bold text-neon-blue">"This means that..."</p>
                    <p class="italic text-sm mt-1">"Many cities have more people than houses. <strong>This means that</strong> many people do not have anywhere to live."</p>
                    <p class="text-xs opacity-60 mt-1">Function: Explaining a consequence.</p>
                </div>
                <div class="bg-white/5 p-4 rounded-xl">
                    <p class="font-bold text-neon-blue">"In other words..."</p>
                    <p class="italic text-sm mt-1">"The traffic in my city is chaotic. <strong>In other words</strong>, rules are rarely followed."</p>
                    <p class="text-xs opacity-60 mt-1">Function: Explaining a complex idea simply.</p>
                </div>
            </div>
        `
    },
    {
        type: "quiz",
        title: "Drill 7: Clarifying Ideas",
        question: "Identify the function: 'If you have a lot of money you can buy whatever you want, which means that food will never be a problem for you.'",
        options: [
            { text: "Explaining the meaning / Consequence", correct: true, feedback: "Correct. 'Which means that' connects the possession of money to the specific consequence regarding food." },
            { text: "Giving a counter-example", correct: false }
        ]
    },
    {
        type: "quiz",
        title: "Drill 8: Clarifying Ideas",
        question: "Identify the function: 'The possibility of finding the same shops... can be alarming. In other words, every country has its own culture...'",
        options: [
            { text: "Explaining/Simplifying a complex idea", correct: true, feedback: "Correct. 'In other words' signals a restatement of the previous point for clarity." },
            { text: "Adding a statistical fact", correct: false }
        ]
    },
    {
        type: "quiz",
        title: "Drill 9: Clarifying Ideas",
        question: "Identify the function: 'Sharing the cost of education... would prevent taking it for granted. This means that having to pay makes people more sincere.'",
        options: [
             { text: "Clarifying an idea", correct: true, feedback: "Correct. This explains the implication of the previous statement." },
             { text: "Stating a fact", correct: false }
        ]
    },
    {
        type: "quiz",
        title: "Drill 10: Result & Consequence",
        question: "Identify the function: 'Local businesses might suffer... This not only means a loss of jobs, but also a loss of traditional products.'",
        options: [
             { text: "Showing a result or consequence", correct: true, feedback: "Correct. This expands on the consequence of businesses suffering." },
             { text: "Defining a term", correct: false }
        ]
    },
    {
        type: "lesson",
        title: "Unit Complete",
        content: `
            <p class="mb-4"><strong>Summary:</strong> You have expanded your logic toolkit with Contrast, Referencing, and Clarification.</p>
            <p class="mb-6"><strong>Next Step:</strong> In your next essay, try to use "In other words" to simplify a complex point, and check your "It/This" references.</p>
            <div class="text-center">
                <p class="font-display font-bold text-2xl text-neon-secondary">MISSION ACCOMPLISHED</p>
            </div>
        `
    }
];
