import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture6PrototypingQuestions: QuestionV2[] = [
  {
    id: "csc306_ch10_001",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "In the Design Thinking process, which stage involves understanding users and their context through research, while suspending your own assumptions?",
    options: [
      "Empathise",
      "Define",
      "Ideate",
      "Prototype"
    ],
    correctAnswer: 0,
    explanation: "Empathise involves understanding users and their context through research, interviews, observation, and immersion, while suspending your own assumptions.\n\nDefine instead synthesises research into a clear problem statement, a later stage than initial understanding.\n\nIdeate instead generates as many ideas as possible without judgement, a later stage than initial understanding.\n\nPrototype instead builds rapid, low-cost representations of ideas, a much later stage than initial understanding."
  },
  {
    id: "csc306_ch10_002",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "In the Design Thinking process, which stage synthesises research into a clear problem statement, articulating who you are designing for and why?",
    options: [
      "Define",
      "Empathise",
      "Ideate",
      "Test"
    ],
    correctAnswer: 0,
    explanation: "Define synthesises research into a clear problem statement, articulating who you are designing for, what they need, and why.\n\nEmpathise instead gathers the initial research through interviews and observation, before it is synthesised into a problem statement.\n\nIdeate instead generates ideas after the problem has already been defined, not the synthesis step itself.\n\nTest instead puts prototypes in front of real users, a much later stage than defining the problem."
  },
  {
    id: "csc306_ch10_003",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "In the Design Thinking process, which stage generates as many ideas as possible without judgement, prioritising quantity before quality?",
    options: [
      "Ideate",
      "Empathise",
      "Define",
      "Prototype"
    ],
    correctAnswer: 0,
    explanation: "Ideate generates as many ideas as possible without judgement, since quantity comes before quality and the best ideas rarely come first.\n\nEmpathise instead gathers research and understanding, before any ideas are generated.\n\nDefine instead synthesises research into a problem statement, before ideas are generated in response to it.\n\nPrototype instead builds representations of the best ideas, a step that follows idea generation, not the generation itself."
  },
  {
    id: "csc306_ch10_004",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "In the Design Thinking process, testing is described not as validation, but as what?",
    options: [
      "Discovery",
      "A formality with no real purpose",
      "The final, unchangeable step",
      "A purely financial audit"
    ],
    correctAnswer: 0,
    explanation: "Testing is described as not validation, but discovery: putting prototypes in front of real users to observe, listen, and learn.\n\nDescribing it as a formality with no real purpose contradicts the framing of testing as an active discovery process.\n\nDescribing it as the final, unchangeable step contradicts the iterative nature of design thinking, where teams return to earlier stages.\n\nDescribing it as a financial audit misrepresents testing, which concerns learning from users, not financial review."
  },
  {
    id: "csc306_ch10_005",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Design thinking is described as iterative rather than linear. What does this mean for teams using the five-stage process?",
    options: [
      "Teams regularly return to earlier stages as they learn",
      "Teams must complete every stage exactly once, in strict order",
      "Teams skip the Empathise stage after their first project",
      "Teams are forbidden from revisiting the Define stage"
    ],
    correctAnswer: 0,
    explanation: "Being iterative rather than linear means teams regularly return to earlier stages as they learn, rather than moving through the five stages only once.\n\nRequiring each stage exactly once in strict order describes a linear process, the opposite of the iterative nature described.\n\nSkipping Empathise after the first project contradicts the iterative, repeatable nature of the process.\n\nForbidding revisits to Define contradicts the iterative nature of the process, which allows returning to any earlier stage."
  },
  {
    id: "csc306_ch10_006",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "In the iterative Design Cycle, which stage involves documenting what the system needs to do, based on user research and stakeholder constraints?",
    options: [
      "Requirements",
      "Design",
      "Prototype",
      "Evaluate"
    ],
    correctAnswer: 0,
    explanation: "Requirements involves documenting what the system needs to do, based on user research and stakeholder constraints.\n\nDesign instead develops solutions in response to requirements, a later stage than documenting the requirements themselves.\n\nPrototype instead builds a testable version of the design, a stage that follows requirements and design.\n\nEvaluate instead tests the prototype with users or experts, the final stage of this cycle, not the initial documentation step."
  },
  {
    id: "csc306_ch10_007",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which reason for iterating states that a deployed feature that fails costs months, while a sketch that fails costs minutes?",
    options: [
      "Failure is cheap on paper",
      "Design is discovery",
      "Requirements change",
      "Cheaper to fix early"
    ],
    correctAnswer: 0,
    explanation: "Failure is cheap on paper states that a sketch that fails costs minutes, while a deployed feature that fails costs months, encouraging early and frequent testing.\n\nDesign is discovery instead concerns learning what the problem actually is by trying to solve it, a related but distinct reason.\n\nRequirements change instead concerns users, technology, and business contexts shifting over time, a different reason to iterate.\n\nCheaper to fix early instead concerns the general cost curve of errors, a related but more general reason than the specific sketch-versus-deployed-feature comparison."
  },
  {
    id: "csc306_ch10_008",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which benefit of sketching states that it lets you explore 10 ideas in the time a wireframe tool takes to explore 1, favouring breadth before depth?",
    options: [
      "Speed",
      "Thinking out loud",
      "Communication tool",
      "Encourages divergence"
    ],
    correctAnswer: 0,
    explanation: "Speed states that a sketch takes seconds, letting you explore 10 ideas in the time a wireframe tool requires to explore 1, favouring breadth before depth.\n\nThinking out loud instead concerns drawing forcing clarity, revealing when vague ideas collapse on paper, a different benefit.\n\nCommunication tool instead concerns sketches being disposable and inviting free annotation from teammates, a different benefit.\n\nEncourages divergence instead concerns nothing being committed, making radical alternatives feel safe to explore, a different benefit."
  },
  {
    id: "csc306_ch10_009",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which sketching technique involves generating 8 ideas in 8 minutes, forcing quantity and breaking cognitive blocks?",
    options: [
      "Crazy 8s",
      "Storyboarding",
      "Thumbnail sketching",
      "Affinity mapping"
    ],
    correctAnswer: 0,
    explanation: "Crazy 8s involves generating 8 ideas in 8 minutes, forcing quantity and breaking cognitive blocks.\n\nStoryboarding instead sketches a sequence of frames showing the user journey through a scenario, not a rapid quantity exercise.\n\nThumbnail sketching instead produces tiny, fast layouts, 6 to 8 per page, to explore structure options, a related but distinct technique.\n\nAffinity mapping is a research synthesis technique, not a sketching technique, for grouping observations into themes."
  },
  {
    id: "csc306_ch10_010",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which sketching technique sketches a sequence of frames showing the user journey through a scenario?",
    options: [
      "Storyboarding",
      "Crazy 8s",
      "Thumbnail sketching",
      "Wireframing"
    ],
    correctAnswer: 0,
    explanation: "Storyboarding sketches a sequence of frames showing the user journey through a scenario, illustrating how a user moves through an experience.\n\nCrazy 8s instead generates 8 rapid, independent ideas in 8 minutes, not a sequential journey.\n\nThumbnail sketching instead produces many tiny, fast layout options per page, not a sequential story.\n\nWireframing is a structural design activity for layout and hierarchy, not a technique for sketching a sequential journey."
  },
  {
    id: "csc306_ch10_011",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which fidelity of wireframe is sketched on paper or whiteboard, quick and disposable, and best for early layout decisions?",
    options: [
      "Lo-fi wireframe",
      "Mid-fi wireframe",
      "Hi-fi wireframe",
      "Functional prototype"
    ],
    correctAnswer: 0,
    explanation: "Lo-fi wireframes are sketched on paper or whiteboard, quick and disposable, best for early layout decisions and team alignment.\n\nMid-fi wireframes instead are digital and greyscale with real content areas, a step up from paper sketches.\n\nHi-fi wireframes instead are pixel-accurate with spacing, typography, and component states, the most detailed wireframe stage.\n\nFunctional prototype is a prototyping fidelity level, not a wireframe fidelity level, involving working code."
  },
  {
    id: "csc306_ch10_012",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which fidelity of wireframe is pixel-accurate, with spacing, typography, and component states, bridging the wireframe and prototype stages?",
    options: [
      "Hi-fi wireframe",
      "Lo-fi wireframe",
      "Mid-fi wireframe",
      "Paper prototype"
    ],
    correctAnswer: 0,
    explanation: "Hi-fi wireframes are pixel-accurate, with spacing, typography, and component states, bridging the wireframe and prototype stages.\n\nLo-fi wireframes instead are sketched on paper, quick and disposable, far less detailed than pixel-accurate wireframes.\n\nMid-fi wireframes instead are digital greyscale with real content areas, less detailed than pixel-accurate hi-fi wireframes.\n\nPaper prototype is a low-fidelity prototyping method, not a wireframe fidelity level."
  },
  {
    id: "csc306_ch10_013",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which low-fidelity prototype type involves hand-drawn screens where a facilitator swaps pages as the user 'taps' on areas, costing minutes to make?",
    options: [
      "Paper Prototype",
      "Click-through Mockup",
      "Functional Prototype",
      "Wizard of Oz"
    ],
    correctAnswer: 0,
    explanation: "Paper Prototype involves hand-drawn screens on paper, with a facilitator swapping pages as the user taps on areas, costing minutes and allowing rapid iteration.\n\nClick-through Mockup instead uses static screen images linked with hotspots in tools like Figma, costing hours, not paper sketches.\n\nFunctional Prototype instead uses working code scoped to the tested feature, costing days, a much higher fidelity than paper.\n\nWizard of Oz instead has a human secretly simulating system behaviour, a different technique from hand-drawn paper screens."
  },
  {
    id: "csc306_ch10_014",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which prototype type has a human simulate system behaviour behind the scenes while the user believes they are interacting with a real system?",
    options: [
      "Wizard of Oz",
      "Paper Prototype",
      "Click-through Mockup",
      "Functional Prototype"
    ],
    correctAnswer: 0,
    explanation: "Wizard of Oz has a human secretly simulate system behaviour while the user believes they are interacting with a real system, powerful for testing intent before building.\n\nPaper Prototype instead uses hand-drawn screens with an openly visible facilitator swapping pages, not a hidden simulated system.\n\nClick-through Mockup instead uses static linked images with no hidden human simulation involved.\n\nFunctional Prototype instead uses genuinely working code, not a human secretly simulating behaviour."
  },
  {
    id: "csc306_ch10_015",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "When testing prototypes, giving users a specific, realistic goal like 'find the return policy for an order you placed last week' rather than 'explore the app' describes which step?",
    options: [
      "Set a task",
      "Observe silently",
      "Think aloud protocol",
      "Debrief after"
    ],
    correctAnswer: 0,
    explanation: "Set a task involves giving users specific, realistic goals, such as finding a return policy, rather than an open-ended instruction like 'explore the app.'\n\nObserve silently instead concerns watching what users do without helping, a later step after the task has been set.\n\nThink aloud protocol instead concerns asking users to narrate their thinking, a related but distinct step from setting the initial task.\n\nDebrief after instead concerns asking open questions once the task is complete, the final step, not the initial task-setting step."
  },
  {
    id: "csc306_ch10_016",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "When testing prototypes, resisting the urge to help and treating every moment of confusion as a data point describes which step?",
    options: [
      "Observe silently",
      "Set a task",
      "Think aloud protocol",
      "Debrief after"
    ],
    correctAnswer: 0,
    explanation: "Observe silently involves watching what users do, resisting the urge to help, since every moment of confusion is a data point.\n\nSet a task instead concerns giving the user their initial specific goal, a step that precedes silent observation.\n\nThink aloud protocol instead concerns asking users to narrate their thinking aloud, which involves active prompting, not silent observation.\n\nDebrief after instead concerns asking open questions once the task is complete, a step after the observation itself."
  },
  {
    id: "csc306_ch10_017",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which issue severity level, when found during testing, means users cannot complete the primary task and must be fixed before any further testing?",
    options: [
      "Critical",
      "Serious",
      "Minor",
      "Positive"
    ],
    correctAnswer: 0,
    explanation: "Critical means users cannot complete the primary task, and it must be fixed before any further testing, since everything else is secondary.\n\nSerious instead means users complete the task with significant difficulty or error, a less severe outcome than total failure.\n\nMinor instead means users succeed but express confusion or frustration, a less severe outcome than being unable to complete the task.\n\nPositive instead documents things that worked well, not a problem at all."
  },
  {
    id: "csc306_ch10_018",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which issue severity level means users succeed at the task but express confusion or frustration, to be addressed once critical and serious issues are resolved?",
    options: [
      "Minor",
      "Critical",
      "Serious",
      "Positive"
    ],
    correctAnswer: 0,
    explanation: "Minor means users succeed but express confusion or frustration, addressed only after critical and serious issues are resolved.\n\nCritical instead means users cannot complete the task at all, a far more severe outcome than expressing confusion while still succeeding.\n\nSerious instead means users complete the task with significant difficulty or error, more severe than expressing mere confusion.\n\nPositive instead documents things that worked well, not a problem of any severity."
  },
  {
    id: "csc306_ch10_019",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Why is it recommended to explicitly record positive findings from a usability test, not just problems?",
    options: [
      "They are as important as problems, and easy to accidentally break in the next iteration",
      "Positive findings are legally required to be reported to regulators",
      "Positive findings automatically fix any negative findings nearby",
      "Positive findings should replace all further testing sessions"
    ],
    correctAnswer: 0,
    explanation: "Positive findings should be documented explicitly because they are as important as problems, and easy to accidentally break when making changes in the next iteration.\n\nRegulatory reporting requirements are not the reasoning given for documenting positive findings in this material.\n\nPositive findings do not automatically fix nearby negative findings; each finding is addressed on its own basis.\n\nDocumenting positive findings does not replace the need for further testing; both are part of an ongoing process."
  },
  {
    id: "csc306_ch10_020",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which deliverable at handoff explains interactions and states that are not obvious from visual inspection alone?",
    options: [
      "Annotated wireframes",
      "Component specifications",
      "Content and copy",
      "Usability test report"
    ],
    correctAnswer: 0,
    explanation: "Annotated wireframes explain interactions and states that are not obvious from visual inspection alone.\n\nComponent specifications instead give exact sizes, spacing, colour values, and behaviour for every component, not interaction annotations.\n\nContent and copy instead provides final text for buttons and labels, not interaction explanations.\n\nUsability test report instead summarises findings from prototype testing, not interaction annotations on the wireframes themselves."
  },
  {
    id: "csc306_ch10_021",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which handoff deliverable provides focus order, ARIA roles, colour contrast ratios, and touch target sizes?",
    options: [
      "Accessibility annotations",
      "Interaction flows",
      "Component specifications",
      "Content and copy"
    ],
    correctAnswer: 0,
    explanation: "Accessibility annotations provide focus order, ARIA roles, colour contrast ratios, and touch target sizes for the development team.\n\nInteraction flows instead diagram every screen and the triggers that move users between them, not accessibility specifics.\n\nComponent specifications instead give exact sizes, spacing, and colour values for components generally, not accessibility-specific detail.\n\nContent and copy instead provides final text for buttons and labels, not accessibility annotations."
  },
  {
    id: "csc306_ch10_022",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which design tool is described as the industry standard, browser-based and collaborative, combining components and prototyping in one?",
    options: [
      "Figma",
      "Balsamiq",
      "Miro / FigJam",
      "HTML/CSS/JS"
    ],
    correctAnswer: 0,
    explanation: "Figma is described as the industry standard for wireframing and UI design, browser-based, collaborative, with components and prototyping all in one.\n\nBalsamiq instead is described as intentionally rough wireframing that keeps focus on structure, not the industry standard all-in-one tool.\n\nMiro / FigJam instead is described as a digital whiteboard for collaborative sketching and affinity mapping, not UI design and prototyping specifically.\n\nHTML/CSS/JS instead is used for functional prototypes needing real interactions or data, not general wireframing and UI design."
  },
  {
    id: "csc306_ch10_023",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which design tool is described as intentionally rough wireframing that keeps focus on structure, not aesthetics?",
    options: [
      "Balsamiq",
      "Figma",
      "Adobe XD",
      "Maze / UserTesting"
    ],
    correctAnswer: 0,
    explanation: "Balsamiq is described as intentionally rough wireframing that keeps focus on structure, not aesthetics.\n\nFigma is instead described as the industry standard for full UI design and prototyping, a much higher-fidelity tool than intentionally rough wireframing.\n\nAdobe XD is instead described in terms of Adobe ecosystem integration for teams using Creative Cloud, not intentionally rough wireframing.\n\nMaze / UserTesting is instead described as unmoderated remote usability testing at scale, not a wireframing tool."
  },
  {
    id: "csc306_ch10_024",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which of the following accurately describes a fidelity level in the prototyping spectrum?",
    options: [
      "A Functional Prototype costs minutes and uses hand-drawn screens with a facilitator swapping pages",
      "A Click-through Mockup costs days and uses working code scoped to the tested feature",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. A Functional Prototype actually costs days and uses working code, not hand-drawn screens, which instead describes the Paper Prototype. A Click-through Mockup instead costs hours and uses static linked images with no functional code, not working code scoped to a feature, which describes the Functional Prototype. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch10_025",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "A prototype is described as a question made physical, meaning what should match the question being asked?",
    options: [
      "The fidelity of the prototype",
      "The exact color palette used",
      "The total number of screens designed",
      "The seniority of the designer who built it"
    ],
    correctAnswer: 0,
    explanation: "A prototype is a question made physical, and the fidelity should match the question being asked, from quick paper sketches to fully functional code.\n\nColor palette is a visual design detail unrelated to matching a prototype's fidelity to its underlying question.\n\nTotal screen count is a scope detail unrelated to matching a prototype's fidelity to its underlying question.\n\nDesigner seniority is unrelated to the described relationship between fidelity and the question being tested."
  },
  {
    id: "csc306_ch10_026",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "A prototype tested with five users is described as revealing more issues than a prototype tested with how many users?",
    options: [
      "Fifty",
      "Two",
      "Five",
      "Five hundred"
    ],
    correctAnswer: 0,
    explanation: "A prototype tested with five users is described as revealing more issues than one tested with fifty, illustrating diminishing returns from larger sample sizes in qualitative testing.\n\nTwo users would be a smaller comparison group than the stated example, not matching the specific number given.\n\nFive users is the smaller group in the comparison, not the larger number being contrasted against it.\n\nFive hundred substantially overstates the specific number given in the comparison."
  },
  {
    id: "csc306_ch10_027",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "The end of prototyping is described as not the beginning of building, but the beginning of what?",
    options: [
      "Informed building",
      "The marketing campaign",
      "The legal review process",
      "The hardware procurement process"
    ],
    correctAnswer: 0,
    explanation: "The end of prototyping is described as the beginning of informed building, not simply the beginning of building itself.\n\nA marketing campaign is not what prototyping is described as leading into in this material.\n\nA legal review process is not what prototyping is described as leading into in this material.\n\nHardware procurement is not what prototyping is described as leading into in this material."
  },
  {
    id: "csc306_ch10_028",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which sketch vocabulary element is used to represent flows and navigation in a rough sketch?",
    options: [
      "Arrows",
      "Boxes",
      "Lines",
      "X-boxes"
    ],
    correctAnswer: 0,
    explanation: "Arrows are used for flows and navigation in sketch vocabulary, showing how a user moves between elements.\n\nBoxes instead represent images and containers, not directional flow.\n\nLines instead represent placeholder text, not directional flow.\n\nX-boxes instead represent unfilled images, not directional flow."
  },
  {
    id: "csc306_ch10_029",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "A sketch is described as a thinking tool, not an artistic one. What is the goal of sketching, under this framing?",
    options: [
      "To externalise ideas fast enough to evaluate them",
      "To produce a final, polished visual artefact",
      "To demonstrate the designer's drawing talent",
      "To replace the need for any further design tools"
    ],
    correctAnswer: 0,
    explanation: "The goal of sketching is to externalise ideas fast enough to evaluate them, treating the sketch as a thinking tool rather than an artistic product.\n\nProducing a final, polished artefact contradicts the framing of a sketch as disposable and rough, not a finished product.\n\nDemonstrating drawing talent contradicts the framing of sketching as a thinking tool, not an artistic showcase.\n\nReplacing all further design tools contradicts the described design process, which moves from sketches to wireframes and prototypes using other tools."
  },
  {
    id: "csc306_ch10_030",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which system design and prototyping activity is described using the analogy that its result is 'a question made physical'?",
    options: [
      "Prototyping",
      "Requirements gathering",
      "Affinity mapping",
      "Persona creation"
    ],
    correctAnswer: 0,
    explanation: "Prototyping is described using the analogy that a prototype is 'a question made physical,' with fidelity matched to the question being asked.\n\nRequirements gathering instead documents what a system needs to do, not physically embodying a question.\n\nAffinity mapping instead synthesises research notes into themes, not physically embodying a question.\n\nPersona creation instead builds a composite user portrait, not physically embodying a design question."
  },
  {
    id: "csc306_ch10_031",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Good design is described as never finished, but instead what?",
    options: [
      "Repeatedly improved through use",
      "Legally certified after a single review",
      "Fixed permanently after the first launch",
      "Entirely dependent on the designer's initial instinct"
    ],
    correctAnswer: 0,
    explanation: "Good design is described as never finished, but repeatedly improved through use, reflecting the iterative nature of the design cycle.\n\nLegal certification after a single review is not how design improvement is described in this material.\n\nBeing fixed permanently after launch directly contradicts the described iterative, ongoing nature of good design.\n\nRelying entirely on initial instinct contradicts the emphasis on iteration, testing, and evidence throughout the design cycle."
  },
  {
    id: "csc306_ch10_032",
    course: "CSC 306",
    chapter: "Chapter 10",
    text: "Which of the following is a recommended step when testing a prototype with users?",
    options: [
      "Ask open questions during the debrief, such as 'What was surprising?'",
      "Guide the user through every step to prevent any mistakes",
      "Avoid recording any notes until after the entire study concludes",
      "Skip the warm-up and go directly into the hardest task first"
    ],
    correctAnswer: 0,
    explanation: "Asking open questions during the debrief, such as 'What was surprising?', is a recommended step, while avoiding leading the participant.\n\nGuiding the user through every step to prevent mistakes contradicts the instruction to observe silently and resist the urge to help.\n\nAvoiding notes until the study concludes is not a recommended practice; observing and recording moments of confusion as they happen is emphasized.\n\nSkipping straight to the hardest task is not the recommended structure; usability testing structures typically build up from warm-up and task presentation."
  }
];

export default csc306Lecture6PrototypingQuestions;
