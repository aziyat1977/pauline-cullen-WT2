
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
        title: "5.3 Jumping to Conclusions",
        content: `
            <p class="mb-4"><strong class="text-neon-primary">The Speed Trap:</strong> When candidates don't allow time for critical thinking, they jump to conclusions that seem illogical to the reader.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary mb-4">
                <p class="font-bold mb-2">The 'John' Example:</p>
                <p class="italic opacity-80">"John has arrived late for work every day. <span class="text-red-400">Clearly, he is not committed to his job.</span>"</p>
            </div>
            <p class="mb-4"><strong>Reality Check:</strong> The first part is a fact (late). The second is an assumption (attitude). He might have transport issues or a sick child. The conclusion is not valid without more evidence.</p>
            <span class="text-xs text-gray-500 block mb-2 font-mono">[Source: Page 1]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 11: Valid Conclusions",
        question: "Fact: 'Many people are spending more time travelling to work.' What is a valid conclusion?",
        options: [
            { text: "Clearly, they love driving.", correct: false, feedback: "Incorrect. This is an assumption about their feelings." },
            { text: "This suggests that traffic congestion is increasing.", correct: true, feedback: "Correct. This is a logical inference based on the time delay." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 6: Supporting Evidence",
        content: `
            <p class="mb-4"><strong>Band 7 Requirement:</strong> Ideas must be "fully extended and well-supported".</p>
            <p class="mb-4"><strong class="text-neon-yellow">Problem 1: Invented Statistics.</strong> Many students invent statistics to "prove" a point.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-yellow mb-4">
                <p class="font-bold mb-2">The 'Tesla' Error:</p>
                <p class="italic opacity-80">"For example, a similar initiative resulted in Tesla's taxes reducing by 35%."</p>
            </div>
            <p>This looks like an example, but it doesn't support the logic. It just throws a random number at the reader. <strong>Do not use invented statistics.</strong></p>
            <span class="text-xs text-gray-500 block mb-2 font-mono">[Source: Page 5-6]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 12: Supporting Evidence",
        question: "Which offers better support for: 'Remote work benefits employees.'",
        options: [
            { text: "For example, a study shows 95% of people are happier.", correct: false, feedback: "Avoid invented statistics. They don't explain 'Why'." },
            { text: "For example, they save time and money by not commuting.", correct: true, feedback: "Correct. This explains the specific mechanism of the benefit." }
        ]
    },
    {
        type: "lesson",
        title: "6.2 Circular Examples",
        content: `
            <p class="mb-4"><strong class="text-neon-secondary">Problem 2: Examples that aren't examples.</strong></p>
            <p class="mb-2">Examples must provide evidence, not just repeat the claim.</p>
            <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="bg-red-500/10 p-3 rounded border border-red-500/30">
                    <p class="text-red-400 font-bold">The Loop:</p>
                    <p class="italic text-sm">"Public transport is good. For example, people use it to go to work."</p>
                </div>
                <div class="bg-green-500/10 p-3 rounded border border-green-500/30">
                    <p class="text-green-400 font-bold">The Specific Noun:</p>
                    <p class="italic text-sm">"Public transport is efficient. For example, <strong>cities like London and Tokyo</strong> have excellent underground trains."</p>
                </div>
            </div>
            <p><strong>Rule:</strong> If you can't name a specific place or object, your example might be too vague.</p>
            <span class="text-xs text-gray-500 block mb-2 font-mono">[Source: Page 7]</span>
        `
    },
    {
        type: "lesson",
        title: "6.3 Trivial vs Extreme",
        content: `
            <p class="mb-4"><strong>Problem 3: The 'Zara Handbag' Fallacy.</strong></p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary mb-4">
                <p class="font-bold mb-2">The Argument:</p>
                <p class="italic opacity-80 mb-2">"Cheap air travel is good because we can buy Zara handbags. If this stops, the global economy will collapse."</p>
                <p class="text-sm">Buying a handbag (Trivial) -> Economy Collapse (Extreme). The logic breaks.</p>
            </div>
            <p>Do not use a small, trivial example to support a massive, catastrophic conclusion.</p>
            <span class="text-xs text-gray-500 block mb-2 font-mono">[Source: Page 8]</span>
        `
    },
    {
        type: "lesson",
        title: "6.4 Reversing the Flow",
        content: `
            <p class="mb-4"><strong>Alternative Support Structures:</strong> You don't always need a separate sentence starting with "For example".</p>
            <p class="mb-4"><strong>Method: Evidence First.</strong> State the specific fact, then draw the conclusion.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-blue">
                <p class="italic">"These funds are used to pay the salaries of firefighters and police. <strong>Thus</strong>, taxes help make the community safer."</p>
            </div>
            <p class="mt-4">This helps you avoid starting every sentence with the subject.</p>
            <span class="text-xs text-gray-500 block mb-2 font-mono">[Source: Page 9]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 13: Structure Check",
        question: "Identify the structure: 'Local markets sell fresh produce. As a result, they encourage healthier eating habits.'",
        options: [
            { text: "Idea → Example", correct: false },
            { text: "Evidence → Conclusion", correct: true, feedback: "Correct. The specific fact (selling produce) leads to the general conclusion (healthier eating)." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 7: Paragraph Progression",
        content: `
            <p class="mb-4"><strong>The House Analogy:</strong> In terms of Task Response, an argument is like a physical structure.</p>
            <div class="flex justify-around items-end mb-6 h-32">
                <div class="flex flex-col items-center">
                    <div class="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[40px] border-b-neon-primary opacity-50"></div>
                    <div class="w-20 h-20 border-2 border-neon-primary border-t-0 bg-neon-primary/10 flex items-center justify-center text-center text-[10px]">
                        Band 6<br/>(Incomplete)
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[40px] border-b-neon-secondary"></div>
                    <div class="w-20 h-20 border-2 border-neon-secondary border-t-0 bg-neon-secondary/10 flex items-center justify-center text-center text-[10px]">
                        Band 9<br/>(Solid)
                    </div>
                </div>
            </div>
            <p class="mb-2"><strong>Progression:</strong> Individual arguments must be logically connected. If the connection is missing, the "house" (your essay) is unstable.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary">
                <p class="font-bold text-sm">The "If This Is The Case" Trap:</p>
                <p class="italic text-xs mt-1">"On the societal level, the results may be catastrophic <span class="text-red-400">if this is the case</span>."</p>
                <p class="text-xs mt-2 opacity-80">Problem: We don't know what "this" is. The progression stops.</p>
            </div>
            <span class="text-xs text-gray-500 block mt-4 font-mono">[Source: Lesson 8, Page 1]</span>
        `
    },
    {
        type: "lesson",
        title: "Lesson 8: Cohesion & Referencing",
        content: `
            <p class="mb-4"><strong>The Pronoun Problem:</strong> A major cause of Band 6 Coherence scores is unclear referencing (they, them, it).</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-red-500 mb-4">
                <p class="font-bold text-red-400">Ambiguous Example:</p>
                <p class="italic opacity-80">"Children spend the day at school... <strong class="text-red-400">They</strong> can mentor <strong class="text-red-400">them</strong> in many different ways."</p>
            </div>
            <p><strong>Analysis:</strong> Who is "They"? The children? The teachers? The schools? <br/>When you have multiple plural nouns (children, schools, teachers), you must use specific nouns, not pronouns.</p>
            <span class="text-xs text-gray-500 block mt-4 font-mono">[Source: Lesson 8, Page 3]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 14: Referencing Check",
        question: "Select the clearer version of this sentence: 'Teachers help students. They act as role models.'",
        options: [
            { text: "Teachers help students. They act as role models.", correct: false, feedback: "Still vague. 'They' could technically refer to students (the closest noun)." },
            { text: "Teachers help students. While doing so, these educators act as role models.", correct: true, feedback: "Correct. 'These educators' explicitly refers back to teachers, bridging the two sentences." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 9: The PEEL Method",
        content: `
            <p class="mb-4">To ensure your "House" is solid, use the PEEL frame for every body paragraph.</p>
            <div class="space-y-3">
                <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded bg-neon-primary flex items-center justify-center font-bold text-black shrink-0">P</div>
                    <div>
                        <strong class="block text-neon-primary">Point</strong>
                        <span class="text-sm opacity-70">The Topic Sentence. Must be clear and simple.</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded bg-neon-blue flex items-center justify-center font-bold text-black shrink-0">E</div>
                    <div>
                        <strong class="block text-neon-blue">Explain</strong>
                        <span class="text-sm opacity-70">Expand the idea. Why is this true?</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded bg-neon-secondary flex items-center justify-center font-bold text-black shrink-0">E</div>
                    <div>
                        <strong class="block text-neon-secondary">Example</strong>
                        <span class="text-sm opacity-70">Specific evidence (not invented stats).</span>
                    </div>
                </div>
                <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded bg-neon-yellow flex items-center justify-center font-bold text-black shrink-0">L</div>
                    <div>
                        <strong class="block text-neon-yellow">Link</strong>
                        <span class="text-sm opacity-70">Connect back to the essay question.</span>
                    </div>
                </div>
            </div>
            <span class="text-xs text-gray-500 block mt-4 font-mono">[Source: Lesson 8, Page 6 & 11]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 15: PEEL Structure",
        question: "In the PEEL method, what is the primary function of the 'Link' (last sentence)?",
        options: [
            { text: "To start a new topic for the next paragraph.", correct: false, feedback: "No, that belongs in the next paragraph's Point." },
            { text: "To ensure the paragraph answers the specific question asked.", correct: true, feedback: "Correct. It frames the paragraph and confirms relevance. [Source: Page 6]" }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 10: Task Response & Relevance",
        content: `
            <p class="mb-4"><strong>The "Tangent" Trap:</strong> Even with good grammar, you will score Band 6 if your ideas stray from the topic.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-red-500 mb-4">
                <p class="font-bold text-red-400">Example Failure:</p>
                <p class="italic opacity-80 mb-2">Topic: Schools teaching behaviour.</p>
                <p class="italic opacity-80">Student writes: "...children dress up like great leaders. They become curious about these people..."</p>
            </div>
            <p><strong>Analysis:</strong> The writer started discussing "copying famous leaders", which is not relevant to "teaching right from wrong". They moved further and further away from the question.</p>
            <p class="mt-2 text-neon-primary font-bold">Rule: Every sentence must support the Main Idea (Point).</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 8, Page 9]</span>
        `
    },
    {
        type: "lesson",
        title: "Course Complete",
        content: `
            <p class="mb-4"><strong>Summary:</strong> You have completed the Logic & Structure module.</p>
            <p class="mb-6"><strong>Toolkit Acquired:</strong></p>
            <ul class="list-disc list-inside space-y-2 mb-8 opacity-80">
                <li>Valid vs Invalid Arguments</li>
                <li>Argument Structures (Contrast, Domino)</li>
                <li>Referencing & Cohesion</li>
                <li>The PEEL Method</li>
                <li>Relevance Checking</li>
            </ul>
            <div class="text-center">
                <p class="font-display font-bold text-2xl text-neon-secondary">MISSION ACCOMPLISHED</p>
            </div>
        `
    }
];
