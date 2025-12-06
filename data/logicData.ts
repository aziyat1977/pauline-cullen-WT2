
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
            <p class="mb-4">A major coherence killer (Band 6) is the unclear use of "It" or "This". A pronoun must refer to the last noun mentioned.</p>
            
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
        title: "Lesson 11: Essay Structure - The Introduction",
        content: `
            <p class="mb-4"><strong>The Frame:</strong> Your introduction and conclusion work together to frame your argument. The introduction tells the reader what they need to know <em>before</em> reading.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-blue mb-4">
                <p class="font-bold text-neon-blue">The Danger of Skimming:</p>
                <p class="mb-2">Many students rush to write and miss the specific issue.</p>
                <p class="italic text-sm">Question: "Should schools teach behaviour?"</p>
                <p class="italic text-sm text-red-400">Student writes about: "Education generally" or "Strict discipline".</p>
            </div>
            <p><strong>Rule:</strong> Identify the specific <em>issue</em> (e.g., Responsibility), not just the broad <em>topic</em> (Education).</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 9, Page 1-2]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 16: Topic vs Issue",
        question: "Prompt: 'Some people think that parents should teach children right from wrong. Others think schools should help.' What is the specific issue?",
        options: [
            { text: "The importance of education.", correct: false, feedback: "Too broad. This is the general topic, not the issue." },
            { text: "Who is responsible for teaching behaviour?", correct: true, feedback: "Correct. The debate is about the *source* of the teaching (Parents vs Schools)." }
        ]
    },
    {
        type: "lesson",
        title: "11.2 The 'General Statement' Trap",
        content: `
            <p class="mb-4"><strong>Avoid 'Rehearsed' Openings:</strong> Examiners hate memorized templates like <em>"It is an undeniable fact that..."</em> or <em>"Since the dawn of time..."</em>.</p>
            <p class="mb-4">Your first sentence must set the context for <strong>this specific essay</strong>.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-red-500 mb-4">
                <p class="font-bold text-red-400">Bad Example:</p>
                <p class="italic opacity-80">"It is an undeniable fact that eminent personalities are followed by almost everyone since the days bygone."</p>
                <p class="text-xs mt-2">Why? It's unnatural, archaic ("days bygone"), and clearly memorized filler.</p>
            </div>
             <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 9, Page 3]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 17: Opening Sentences",
        question: "Which is the most effective opening sentence for an essay about 'Celebrity Role Models'?",
        options: [
            { text: "It is true that when ambitious people follow their dreams, they achieve goals.", correct: true, feedback: "Correct. It sets a context relevant to the prompt without using a cliché template." },
            { text: "This is a controversial topic that is often debated.", correct: false, feedback: "Incorrect. This is a generic filler sentence that tells the reader nothing." }
        ]
    },
    {
        type: "lesson",
        title: "11.3 The Synonym Trap",
        content: `
            <p class="mb-4"><strong>Do Not Just 'Translate':</strong> Trying to paraphrase by swapping every word with a synonym often changes the meaning.</p>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="bg-red-500/10 p-3 rounded border border-red-500/30">
                    <p class="text-red-400 font-bold">The Error:</p>
                    <p class="italic text-sm">"Teenagers" instead of "Children"</p>
                    <p class="italic text-sm">"Educational Scholars" instead of "Teachers"</p>
                </div>
                <div class="bg-green-500/10 p-3 rounded border border-green-500/30">
                    <p class="text-green-400 font-bold">The Fix:</p>
                    <p class="italic text-sm">Interpret the meaning. Change the grammar (active to passive) or structure, not just the vocabulary.</p>
                </div>
            </div>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 9, Page 4]</span>
        `
    },
     {
        type: "lesson",
        title: "11.4 The Conclusion",
        content: `
            <p class="mb-4"><strong>The Final Frame:</strong> The conclusion should summarize your main arguments and clearly state your position.</p>
            <p class="font-bold text-neon-yellow mb-2">Major Error: Introducing New Ideas</p>
            <p class="mb-4">Do not finish with a "future prediction" or "suggestion" that you never discussed in the body paragraphs. This is a Band 6 Coherence error.</p>
            <p><strong>Check:</strong> Look at your first and last sentences of body paragraphs. Your conclusion should just be a summary of these.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 9, Page 8]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 18: Conclusion Logic",
        question: "Is it acceptable to write: 'In conclusion... the government should therefore introduce new laws next year' if you haven't discussed laws in your essay?",
        options: [
            { text: "Yes, it shows critical thinking.", correct: false },
            { text: "No, this is a 'New Idea'.", correct: true, feedback: "Correct. Conclusions must validly conclude the arguments made, not start new ones." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 12: The Thinking Phase",
        content: `
            <p class="mb-4"><strong>Developing Ideas:</strong> Many students' minds go blank because they panic. The solution is to use what you know to deal with the unknown.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-secondary mb-4">
                <p class="font-bold text-neon-secondary">The 'Imagine' Strategy</p>
                <p class="mb-2 text-sm">Task: "Problems of living abroad."</p>
                <p class="italic opacity-80">Method: Visualize yourself there. What would you miss? Your friends? Family? The culture? This turns abstract concepts into concrete ideas.</p>
            </div>
            <p><strong>Brainstorming vs Planning:</strong> Brainstorming is messy (getting ideas out). Planning is selecting the best ones and organizing them.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 10, Page 1]</span>
        `
    },
    {
        type: "lesson",
        title: "12.2 Selection & Rejection",
        content: `
            <p class="mb-4">"The best way to have good ideas is to have lots of ideas and throw away the bad ones." - Linus Pauling</p>
            <p class="mb-4">You must ruthlessly <strong>Reject</strong> ideas that are irrelevant or too personal to be explained clearly.</p>
            <div class="bg-red-500/10 p-4 rounded-xl border-l-4 border-red-500 mb-4">
                <p class="font-bold text-red-400">The 'Dog' Example:</p>
                <p class="italic opacity-80">"I would have to leave my children and my dog."</p>
                <p class="text-xs mt-2 text-red-300">Too specific/personal. Better to generalize this into "Missing family" or "Loneliness".</p>
            </div>
             <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 10, Page 6]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 19: Selecting Ideas",
        question: "For an essay on 'The disadvantages of tourism', which idea should you REJECT?",
        options: [
            { text: "Increased pollution and littering.", correct: false, feedback: "Keep this. It is a clear, relevant, major disadvantage." },
            { text: "I once lost my wallet in Paris.", correct: true, feedback: "Correct. Reject this. It is a personal anecdote, not a general argument." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 13: Advanced Planning - 'Yes, BUT'",
        content: `
            <p class="mb-4">When planning your 'Side B' (Advantages), use concession to show critical thinking.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-yellow mb-4">
                <p class="font-bold text-neon-yellow">The 'Yes, BUT' Method:</p>
                <p class="italic opacity-80">"Yes, living abroad is expensive..." (Concession)</p>
                <p class="font-bold mt-1 text-neon-primary">"...BUT you can get a job to pay for it." (Refutation)</p>
            </div>
            <p>This structure helps you build a strong argument that acknowledges the other side while maintaining your position.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 10, Page 12]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 20: Connection Logic",
        question: "What is the best way to connect these two ideas in a plan? (1) Learning a language is hard. (2) It leads to better career prospects.",
        options: [
            { text: "Idea 1 AND Idea 2 (Adding)", correct: false, feedback: "No, they are contrasting ideas (Difficulty vs Reward)." },
            { text: "Idea 1 BUT Idea 2 (Concession)", correct: true, feedback: "Correct. 'It is hard, BUT it is worth it.' This is a stronger argument structure." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 14: The Final Stages (Write & Check)",
        content: `
            <p class="mb-4"><strong>Step 3: Write.</strong> If you have planned well (TPWC), writing is just translating your plan into sentences. Planning IS writing.</p>
            <p class="mb-4"><strong>Step 4: Check.</strong> You must reserve time to check. The best method?</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-blue mb-4">
                <p class="font-bold text-neon-blue">The 'Read Aloud' Technique:</p>
                <p class="italic opacity-80">"Read your essay in a whisper. Your inner ear will hear 'clunky' grammar and repetition that your eyes might miss."</p>
            </div>
            <p>If you have to pause for breath in the middle of a sentence, it is probably too long.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Step 4 Check, Page 3]</span>
        `
    },
    {
        type: "lesson",
        title: "Lesson 15: The Psychology of Performance",
        content: `
            <p class="mb-4"><strong>Test Anxiety:</strong> Fear interferes with clear thinking. You cannot control the question, but you can control your mindset.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white/5 p-4 rounded-xl">
                    <p class="font-bold text-neon-primary">Sensory Anchors</p>
                    <p class="text-sm mt-2">Use a specific scent (like peppermint or lavender) while studying. Use it again in the exam to trigger "Focus Mode".</p>
                </div>
                <div class="bg-white/5 p-4 rounded-xl">
                    <p class="font-bold text-neon-secondary">Routine</p>
                    <p class="text-sm mt-2">Treat practice like a rehearsal. Clear your desk. No phone. Train your brain for the specific conditions of the test.</p>
                </div>
            </div>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Section Two, Page 9-10]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 21: Performance Strategy",
        question: "You see the exam question and your mind goes blank with panic. What should you do?",
        options: [
            { text: "Start writing immediately to stop wasting time.", correct: false, feedback: "This leads to rambling and Band 5/6 Task Response." },
            { text: "Stop. Breathe. Use the 'Imagine' strategy (Lesson 12) to generate ideas.", correct: true, feedback: "Correct. Anxiety blocks logic. You must calm the mind to access your planning skills." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 16: The 'Who' Distraction",
        content: `
            <p class="mb-4"><strong>The Trap:</strong> Task prompts often mention 'Some experts believe...' or 'Some people think...'.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary mb-4">
                <p class="font-bold text-red-400">The Mistake:</p>
                <p class="italic opacity-80">"Proponents of this contention point out that..." or "Those who opine that..."</p>
            </div>
            <p class="mb-4"><strong>The Truth:</strong> You are not being asked <em>why</em> experts believe it. You are asked <em>if it is true</em>. Do not discuss the "anonymous people". Discuss the <strong>argument</strong> itself.</p>
            <p class="text-sm opacity-80">Ignore the "experts" in the prompt. They are just a vehicle for the argument.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 14, Page 1]</span>
        `
    },
    {
        type: "lesson",
        title: "Lesson 17: The Expert Trap",
        content: `
            <p class="mb-4"><strong>Too Much Knowledge?</strong> If you are an expert on the topic (e.g., a language teacher writing about language learning), you might have <em>too many</em> ideas.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-yellow mb-4">
                <p class="font-bold text-neon-yellow">The Risk:</p>
                <p class="italic opacity-80">Writing a complex, discursive essay that tries to share all your professional knowledge, instead of a structured IELTS argument.</p>
            </div>
            <p><strong>Strategy:</strong> If you find yourself writing from personal expertise rather than planning a balanced argument, STOP. Restart. Cut irrelevant ideas.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 14, Page 2]</span>
        `
    },
    {
        type: "lesson",
        title: "Lesson 18: Introduction Anatomy",
        content: `
            <p class="mb-4">An Introduction must begin with the <strong>General Topic</strong>, then narrow to the <strong>Focus</strong>.</p>
            <div class="space-y-4">
                <div class="bg-white/5 p-3 rounded-lg">
                    <p class="text-xs uppercase tracking-widest opacity-50">The Question</p>
                    <p class="italic font-bold">"Better to learn a language at Primary School vs Secondary School?"</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    <div class="bg-neon-blue/10 p-2 rounded border border-neon-blue/30">
                        <span class="block font-bold text-neon-blue">General Topic</span>
                        Education / Languages
                    </div>
                    <div class="bg-neon-primary/10 p-2 rounded border border-neon-primary/30">
                        <span class="block font-bold text-neon-primary">Issue</span>
                        Best time to start?
                    </div>
                    <div class="bg-neon-yellow/10 p-2 rounded border border-neon-yellow/30">
                        <span class="block font-bold text-neon-yellow">Focus</span>
                        Children / Schools
                    </div>
                </div>
            </div>
            <p class="mt-4 text-sm"><strong>Common Error:</strong> Writing an introduction about "The importance of English in the world" (Too general) or "Teaching children at home" (Wrong focus).</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 14, Page 3]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 22: Identifying Focus",
        question: "Prompt: 'Some people believe parents should teach strict discipline.' What is the wrong focus?",
        options: [
            { text: "The role of parents in upbringing.", correct: false, feedback: "This is relevant." },
            { text: "The history of school punishments.", correct: true, feedback: "Correct. This focuses on schools/history, whereas the prompt asks about *parents*." }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 19: Thesis Statements",
        content: `
            <p class="mb-4">Your thesis statement (your opinion) must be precise. Avoid vague "scope" sentences that say nothing.</p>
            <div class="bg-red-500/10 p-4 rounded-xl border-l-4 border-red-500 mb-4">
                <p class="font-bold text-red-400">Weak Thesis:</p>
                <p class="italic">"This essay will analyse the advantages and disadvantages and show my opinion."</p>
                <p class="text-xs mt-1">Too formulaic. Band 6.</p>
            </div>
            <div class="bg-green-500/10 p-4 rounded-xl border-l-4 border-green-500 mb-4">
                <p class="font-bold text-green-400">Strong Thesis:</p>
                <p class="italic">"While I think there are drawbacks to learning a language too early, I believe the advantages of this outweigh the disadvantages."</p>
                <p class="text-xs mt-1">Clear position + Outline of argument structure (Concession).</p>
            </div>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 14, Page 6]</span>
        `
    },
    {
        type: "lesson",
        title: "Lesson 20: The 'High-Level' Vocabulary Trap",
        content: `
            <p class="mb-4"><strong>The Spade Analogy:</strong> Band 6 students often try to "boost" their score by using complex words they don't fully control.</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-primary mb-4">
                <p class="font-bold text-neon-primary">Band 9 (Natural/Sophisticated):</p>
                <p class="italic">"This is a common or garden spade."</p>
            </div>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-red-500 mb-4">
                <p class="font-bold text-red-400">Band 6 (Forced/Inaccurate):</p>
                <p class="italic">"The excavation digging implement is lying in the adjacent space."</p>
            </div>
            <p><strong>Rule:</strong> Precision is better than complexity. "Digging implement" is vague. "Spade" is precise. Don't hide your meaning under big words.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 15, Page 4]</span>
        `
    },
    {
        type: "quiz",
        title: "Drill 23: Natural Phrasing",
        question: "Which sentence shows better Lexical Resource?",
        options: [
            { text: "Students encounter formidable tribulations with the curriculum.", correct: false, feedback: "Too forced. 'Formidable tribulations' is unnatural here." },
            { text: "Students find the curriculum difficult to cope with.", correct: true, feedback: "Correct. 'Cope with' is a precise, natural collocation. [Source: Page 5]" }
        ]
    },
    {
        type: "lesson",
        title: "Lesson 21: Grammar - Active vs Passive",
        content: `
            <p class="mb-4"><strong>The Passive Trap:</strong> Students often use passive voice to sound 'academic', but it often just adds clutter.</p>
            <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="bg-red-500/10 p-3 rounded border border-red-500/30">
                    <p class="text-red-400 font-bold">Wordy (Band 6):</p>
                    <p class="italic text-sm">"It is argued by researchers that..."</p>
                </div>
                <div class="bg-green-500/10 p-3 rounded border border-green-500/30">
                    <p class="text-green-400 font-bold">Direct (Band 8+):</p>
                    <p class="italic text-sm">"Researchers argue that..."</p>
                </div>
            </div>
            <p><strong>Correction:</strong> "The advantages that <span class='text-red-400 line-through'>lies beneath it</span>" → "The <span class='text-green-400'>underlying</span> advantages."</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 15, Page 3]</span>
        `
    },
    {
        type: "lesson",
        title: "Lesson 22: Cohesion - 'Namely' vs 'In Fact'",
        content: `
            <p class="mb-4"><strong>Wrong Connector:</strong> Many students use "Namely" incorrectly.</p>
            <p class="mb-2"><strong>Namely:</strong> Used to name a specific list. <br/><em class="opacity-50">"Two students, namely John and Sarah..."</em></p>
            <p class="mb-4"><strong>In Fact:</strong> Used to provide evidence or emphasize a truth.<br/><em class="opacity-50">"The brain shrinks. In fact, research shows..."</em></p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-neon-yellow">
                <p class="font-bold text-neon-yellow">Fixing the Essay:</p>
                <p class="italic text-sm">"<span class='text-red-400 line-through'>Namely</span>, recent research revealed..." → "<strong>In fact</strong>, recent research revealed..."</p>
            </div>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 15, Page 3 & 10]</span>
        `
    },
    {
        type: "lesson",
        title: "Lesson 23: Task Response Audit",
        content: `
            <p class="mb-4"><strong>Relevance Check:</strong> In the sample essay, the writer used this example:</p>
            <div class="bg-white/5 p-4 rounded-xl border-l-4 border-red-500 mb-4">
                <p class="italic opacity-80">"Take the example of overseas students who tend to come and study in the United Kingdom..."</p>
            </div>
            <p><strong>Critique:</strong> The essay question is about <strong>Age</strong> (Primary vs Secondary). This example is about <strong>Location</strong> (Study Abroad). It is largely irrelevant to the core debate and weakens the argument.</p>
            <p class="font-bold text-neon-secondary">Key: Examples must support the specific variable in the question.</p>
            <span class="text-xs text-gray-500 block mt-2 font-mono">[Source: Lesson 15, Page 12]</span>
        `
    },
    {
        type: "lesson",
        title: "Course Complete",
        content: `
            <p class="mb-4"><strong>Summary:</strong> You have completed the Logic & Structure module.</p>
            <p class="mb-6"><strong>Toolkit Acquired:</strong></p>
            <ul class="list-disc list-inside space-y-2 mb-8 opacity-80 text-sm">
                <li>Valid vs Invalid Arguments</li>
                <li>Argument Structures (Contrast, Domino)</li>
                <li>The PEEL Method & Paragraph Progression</li>
                <li>The TPWC Process (Think, Plan, Write, Check)</li>
                <li>Idea Selection & Refutation (Yes, BUT)</li>
                <li>Intro/Conclusion Traps & Thesis Statements</li>
                <li>Band 6 Traps (Vocabulary, Grammar, Cohesion)</li>
            </ul>
            <div class="text-center">
                <p class="font-display font-bold text-2xl text-neon-secondary">MISSION ACCOMPLISHED</p>
            </div>
        `
    }
];
