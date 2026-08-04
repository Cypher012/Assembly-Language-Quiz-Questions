import { QuestionV2 } from "@/lib/quiz-types";

const csc306Chapter5Questions: QuestionV2[] = [
  {
    id: "csc306_ch5_001",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following best captures the definition of HCI as the study, design, and evaluation of how people interact with computing systems?",
    options: [
      "How to make interactions more effective, efficient, and satisfying",
      "How to reduce the manufacturing cost of computer hardware",
      "How to increase a company's advertising reach online",
      "How to compress files for faster network transfer"
    ],
    correctAnswer: 0,
    explanation: "HCI is defined as the study, design, and evaluation of how people interact with computing systems, and how to make those interactions more effective, efficient, and satisfying.\n\nManufacturing cost reduction is a hardware production concern, not part of this definition of HCI.\n\nAdvertising reach is a marketing concern unrelated to this definition of HCI.\n\nFile compression is a technical networking concern unrelated to this definition of HCI."
  },
  {
    id: "csc306_ch5_002",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Within the Human, Computer, and Interaction breakdown, which part is described as ranging from desktops to wearables to embedded systems?",
    options: [
      "Computer",
      "Human",
      "Interaction",
      "Organisation"
    ],
    correctAnswer: 0,
    explanation: "Computer is described as hardware, software, and interfaces ranging from desktops to wearables to embedded systems.\n\nHuman is instead described as users, groups, and organisations with cognitive, physical, and emotional needs.\n\nInteraction is instead described as the dialogue between both, covering input, output, feedback, and the experience in between.\n\nOrganisation is not one of the three named parts of this breakdown."
  },
  {
    id: "csc306_ch5_003",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which era of HCI history is associated with Douglas Engelbart's mouse and Ivan Sutherland's Sketchpad?",
    options: [
      "1960s-70s, research breakthroughs",
      "1940s-50s, the command-line era",
      "1980s, the GUI revolution",
      "1990s-2000s, web and mobile"
    ],
    correctAnswer: 0,
    explanation: "The 1960s-70s research breakthroughs era is associated with Engelbart's mouse and Sutherland's Sketchpad, where the vision of interactive computing took shape.\n\nThe 1940s-50s command-line era instead involved expert operators and minimal, highly technical interaction, before these inventions.\n\nThe 1980s GUI revolution instead brought windows, icons, and menus via Xerox PARC, Apple Macintosh, and Microsoft Windows.\n\nThe 1990s-2000s web and mobile era instead concerned the internet's explosion and designing at scale."
  },
  {
    id: "csc306_ch5_004",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Xerox PARC, Apple Macintosh, and Microsoft Windows bringing windows, icons, and menus to everyday users describes which era of HCI history?",
    options: [
      "1980s, the GUI revolution",
      "1960s-70s, research breakthroughs",
      "1990s-2000s, web and mobile",
      "2010s-now, AI and beyond"
    ],
    correctAnswer: 0,
    explanation: "The 1980s GUI revolution is when Xerox PARC, Apple Macintosh, and Microsoft Windows brought windows, icons, and menus to everyday users.\n\nThe 1960s-70s research breakthroughs era instead involved the mouse and Sketchpad, foundational research before the GUI reached everyday users.\n\nThe 1990s-2000s web and mobile era instead concerned the internet's explosion and scale, after GUIs were already established.\n\nThe 2010s-now era instead concerns voice assistants, gesture interfaces, and AI-driven UX, much later than the GUI revolution."
  },
  {
    id: "csc306_ch5_005",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of Nielsen's five usability components asks whether users can figure out an interface the first time they encounter it?",
    options: [
      "Learnability",
      "Error Recovery",
      "Efficiency",
      "Memorability"
    ],
    correctAnswer: 0,
    explanation: "Learnability asks whether users can figure out an interface the first time they encounter it.\n\nError Recovery instead asks how many errors occur and whether users can recover easily, not first-time understanding.\n\nEfficiency instead asks how quickly users perform tasks once they have already learned the system.\n\nMemorability instead asks whether users can return after a break and still use the system."
  },
  {
    id: "csc306_ch5_006",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which usability component asks whether users can return to a system after a break and still know how to use it?",
    options: [
      "Memorability",
      "Learnability",
      "Efficiency",
      "Satisfaction"
    ],
    correctAnswer: 0,
    explanation: "Memorability asks whether users can return after a break and still use the system.\n\nLearnability instead concerns first-time understanding, not returning after a break.\n\nEfficiency instead concerns how quickly a task is performed once already learned, not recall after time away.\n\nSatisfaction instead concerns whether the experience is pleasant or enjoyable, not memory of how to use it."
  },
  {
    id: "csc306_ch5_007",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "A raised button that looks clickable, where the shape itself tells the user what to do, is an example of which concept?",
    options: [
      "Good affordance",
      "Broken affordance",
      "Hidden affordance",
      "Organisational ergonomics"
    ],
    correctAnswer: 0,
    explanation: "A raised button that looks clickable is an example of good affordance, where the shape itself tells the user what to do.\n\nBroken affordance is instead illustrated by clickable-looking text that does nothing, where the signal and function are misaligned.\n\nHidden affordance is instead illustrated by swipe gestures that exist but reveal nothing visually.\n\nOrganisational ergonomics is an unrelated branch of ergonomics concerned with work systems and policies, not affordance."
  },
  {
    id: "csc306_ch5_008",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Clickable-looking text that does nothing, where the signal and function are misaligned, is an example of which concept?",
    options: [
      "Broken affordance",
      "Good affordance",
      "Hidden affordance",
      "Physical ergonomics"
    ],
    correctAnswer: 0,
    explanation: "Broken affordance is illustrated by clickable-looking text that does nothing, since the signal and the function are misaligned.\n\nGood affordance is instead illustrated by a raised button whose shape tells the user what to do, the opposite of a misaligned signal.\n\nHidden affordance is instead illustrated by swipe gestures that exist but are not revealed, a different mismatch than a false signal.\n\nPhysical ergonomics is an unrelated branch of ergonomics concerned with the body, not affordance signals."
  },
  {
    id: "csc306_ch5_009",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Swipe gestures on a touchscreen, where the action exists but nothing reveals it, describe which concept?",
    options: [
      "Hidden affordance",
      "Broken affordance",
      "Good affordance",
      "Cognitive ergonomics"
    ],
    correctAnswer: 0,
    explanation: "Hidden affordance describes swipe gestures on a touchscreen, where the action genuinely exists but nothing reveals it to the user.\n\nBroken affordance is instead illustrated by a signal that promises an action that fails to work, not a genuine action with no signal.\n\nGood affordance is instead illustrated by a shape that correctly signals its function, the opposite of a hidden gesture.\n\nCognitive ergonomics is an unrelated branch of ergonomics concerned with mental workload, not affordance signals."
  },
  {
    id: "csc306_ch5_010",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Working memory holding 4 to 7 items at once, requiring interfaces to minimise what users must recall, falls under which of the Human Factor topics?",
    options: [
      "Memory",
      "Perception",
      "Attention",
      "Emotion"
    ],
    correctAnswer: 0,
    explanation: "Memory is the Human Factor topic stating that working memory holds 4 to 7 items at once, so interfaces should minimise what users must recall.\n\nPerception instead concerns noticing contrast, colour, shape, and motion, not memory capacity.\n\nAttention instead concerns limited cognitive bandwidth and how complexity and distraction degrade performance.\n\nEmotion instead concerns how aesthetics influence perceived usability and problem-solving tolerance."
  },
  {
    id: "csc306_ch5_011",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Human Factor topic states that larger, closer targets are easier to click, citing Fitts's Law?",
    options: [
      "Motor Skills",
      "Mental Models",
      "Memory",
      "Emotion"
    ],
    correctAnswer: 0,
    explanation: "Motor Skills cites Fitts's Law, stating that larger, closer targets are easier to click, since physical constraints shape interaction.\n\nMental Models instead concerns users building internal maps of how systems work, not physical target acquisition.\n\nMemory instead concerns the limited capacity of working memory, not physical movement to a target.\n\nEmotion instead concerns how aesthetics influence perceived usability, not physical target acquisition."
  },
  {
    id: "csc306_ch5_012",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Human Factor topic states that users build internal maps of how systems work, and that design should match or gently correct those maps?",
    options: [
      "Mental Models",
      "Attention",
      "Motor Skills",
      "Perception"
    ],
    correctAnswer: 0,
    explanation: "Mental Models states that users build internal maps of how systems work, and design should match or gently correct those maps.\n\nAttention instead concerns limited cognitive bandwidth and directed focus, not internal maps of system logic.\n\nMotor Skills instead concerns physical target acquisition under Fitts's Law, not internal maps of system logic.\n\nPerception instead concerns noticing contrast, colour, shape, and motion, not internal maps of system logic."
  },
  {
    id: "csc306_ch5_013",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under HCI's Broader Impact, which area is illustrated by e-commerce design directly driving revenue?",
    options: [
      "Economy",
      "Society",
      "Culture",
      "Ergonomics"
    ],
    correctAnswer: 0,
    explanation: "Economy is illustrated by e-commerce design directly driving revenue, alongside poor UX costing businesses millions annually.\n\nSociety is instead illustrated by digital literacy gaps and accessibility for elderly and disabled users, not revenue.\n\nCulture is instead illustrated by design choices influencing norms and behaviour, not revenue.\n\nErgonomics is not one of the three named areas of HCI's Broader Impact."
  },
  {
    id: "csc306_ch5_014",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under HCI's Broader Impact, which area is illustrated by social media interfaces shaping how people connect?",
    options: [
      "Culture",
      "Economy",
      "Society",
      "Physical Ergonomics"
    ],
    correctAnswer: 0,
    explanation: "Culture is illustrated by social media interfaces shaping how people connect, and design choices influencing norms and behaviour.\n\nEconomy is instead illustrated by e-commerce revenue and the cost of poor UX, not social connection norms.\n\nSociety is instead illustrated by digital literacy gaps and civic tech, a related but distinct impact area from cultural norms.\n\nPhysical Ergonomics is not one of the three named areas of HCI's Broader Impact."
  },
  {
    id: "csc306_ch5_015",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which real-world domain is described as a classic case study in both good and bad HCI?",
    options: [
      "ATM Interface",
      "Smartphone UI",
      "Video Games",
      "AI Assistants"
    ],
    correctAnswer: 0,
    explanation: "The ATM Interface is described as a classic case study in both good and bad HCI, reflecting decades of both effective and poor cash machine design.\n\nSmartphone UI is instead described in terms of touch gestures, icon grids, and notifications, without this classic-case-study label.\n\nVideo Games are instead described in terms of mastery through progressive disclosure and feedback loops.\n\nAI Assistants are instead described in terms of conversational interfaces and the challenge of intent."
  },
  {
    id: "csc306_ch5_016",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which real-world domain is described as involving interface errors that can have life-or-death consequences?",
    options: [
      "Medical Devices",
      "E-Commerce Sites",
      "Video Games",
      "Car Dashboards"
    ],
    correctAnswer: 0,
    explanation: "Medical Devices are described as a domain where interface errors can have life-or-death consequences.\n\nE-Commerce Sites are instead described in terms of search, cart, and checkout being carefully designed, not life-or-death stakes.\n\nVideo Games are instead described in terms of mastery through progressive disclosure and feedback loops, not medical stakes.\n\nCar Dashboards are instead described as safety-critical interaction under real-world constraints, a related but separately named domain."
  },
  {
    id: "csc306_ch5_017",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which real-world domain is described in terms of achieving mastery through progressive disclosure and feedback loops?",
    options: [
      "Video Games",
      "Assistive Tech",
      "AI Assistants",
      "ATM Interface"
    ],
    correctAnswer: 0,
    explanation: "Video Games are described in terms of achieving mastery through progressive disclosure and feedback loops as players improve.\n\nAssistive Tech is instead described in terms of screen readers, switch controls, and eye-tracking systems, not mastery through play.\n\nAI Assistants are instead described in terms of conversational interfaces and the challenge of intent, not mastery through play.\n\nATM Interface is instead described as a classic case study in good and bad HCI, not mastery through progressive disclosure."
  },
  {
    id: "csc306_ch5_018",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which domain is described in terms of screen readers, switch controls, and eye-tracking systems?",
    options: [
      "Assistive Tech",
      "Video Games",
      "Car Dashboards",
      "E-Commerce Sites"
    ],
    correctAnswer: 0,
    explanation: "Assistive Tech is described in terms of screen readers, switch controls, and eye-tracking systems that support users with disabilities.\n\nVideo Games are instead described in terms of progressive disclosure and feedback loops, not assistive input devices.\n\nCar Dashboards are instead described as safety-critical interaction under real-world constraints, not assistive technologies.\n\nE-Commerce Sites are instead described in terms of search, cart, and checkout, not assistive technologies."
  },
  {
    id: "csc306_ch5_019",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Roughly what proportion of the body's sensory receptors are located in the eye, making vision the dominant sense?",
    options: [
      "About 70%",
      "About 10%",
      "About 30%",
      "About 50%"
    ],
    correctAnswer: 0,
    explanation: "Roughly 70% of the body's sensory receptors are located in the eye, making vision the dominant sense for interface design.\n\nAbout 10% substantially understates the proportion given for the eye's share of sensory receptors.\n\nAbout 30% also understates the proportion given for the eye's share of sensory receptors.\n\nAbout 50% understates the proportion given, which is closer to 70% than to half."
  },
  {
    id: "csc306_ch5_020",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The fovea, the part of the eye responsible for sharp focus, captures roughly how much of the visual field in sharp focus?",
    options: [
      "About 2 degrees",
      "About 45 degrees",
      "About 90 degrees",
      "About 180 degrees"
    ],
    correctAnswer: 0,
    explanation: "The fovea captures only about 2 degrees of the visual field in sharp focus, meaning most of what we see is processed with far less detail.\n\nAbout 45 degrees substantially overstates the narrow field of sharp foveal focus.\n\nAbout 90 degrees also substantially overstates the narrow field of sharp foveal focus.\n\nAbout 180 degrees vastly overstates the narrow field of sharp foveal focus, closer to a full field of view."
  },
  {
    id: "csc306_ch5_021",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which sense is described as allowing sounds to be localised in 3D space naturally, and as effective for alerts and state feedback?",
    options: [
      "Sound",
      "Vision",
      "Touch",
      "Smell"
    ],
    correctAnswer: 0,
    explanation: "Sound is described as highly effective for alerts and state feedback, and humans can localise sounds in 3D space naturally.\n\nVision is instead described as the dominant sense processing colour, contrast, depth, and motion in parallel, not 3D sound localisation.\n\nTouch is instead described as varying in sensitivity across the body, such as fingertips versus the back, not sound localisation.\n\nSmell is not one of the three senses discussed as central to HCI in this material."
  },
  {
    id: "csc306_ch5_022",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which sense is described as varying in sensitivity across the body, such as fingertips compared to the back, and as critical in touchscreen and wearable design?",
    options: [
      "Touch",
      "Sound",
      "Vision",
      "Taste"
    ],
    correctAnswer: 0,
    explanation: "Touch is described as varying in sensitivity across the body, such as fingertips versus the back, and as critical in touchscreen and wearable device design.\n\nSound is instead described as effective for alerts and 3D localisation, not variable skin sensitivity.\n\nVision is instead described as the dominant sense processing colour and depth, not variable skin sensitivity.\n\nTaste is not one of the three senses discussed as central to HCI in this material."
  },
  {
    id: "csc306_ch5_023",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "For haptic feedback, overuse is warned to cause what effect, where users stop noticing the signal?",
    options: [
      "Habituation",
      "Hallucination",
      "Occlusion",
      "Divergence"
    ],
    correctAnswer: 0,
    explanation: "The design note for haptics warns that overuse causes habituation, where users stop noticing the signal.\n\nHallucination is instead a concern raised elsewhere about AI systems generating false information, unrelated to haptic overuse.\n\nOcclusion is instead a touch-interface concern about a finger covering what it touches, not haptic habituation.\n\nDivergence is not the term used for this haptic effect in this material."
  },
  {
    id: "csc306_ch5_024",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Gestalt principle states that elements close together are seen as a group, and that spacing can create logical clusters in a UI?",
    options: [
      "Proximity",
      "Similarity",
      "Continuity",
      "Closure"
    ],
    correctAnswer: 0,
    explanation: "Proximity states that elements close together are seen as a group, and spacing can be used to create logical clusters in a UI.\n\nSimilarity instead states that similar shapes or colours are grouped together, a different visual cue than closeness.\n\nContinuity instead states that the eye follows smooth paths, a different principle than grouping by closeness.\n\nClosure instead states that incomplete shapes are mentally completed, a different principle than grouping by closeness."
  },
  {
    id: "csc306_ch5_025",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Gestalt principle states that similar shapes or colours are grouped together, so consistent styling communicates shared function?",
    options: [
      "Similarity",
      "Proximity",
      "Figure/Ground",
      "Common Fate"
    ],
    correctAnswer: 0,
    explanation: "Similarity states that similar shapes or colours are grouped together, so consistent styling communicates shared function.\n\nProximity instead states that elements close together are seen as a group, a different visual cue than shared appearance.\n\nFigure/Ground instead concerns distinguishing objects from backgrounds, a different principle than grouping by appearance.\n\nCommon Fate instead concerns elements moving together being seen as related, a different principle than shared appearance."
  },
  {
    id: "csc306_ch5_026",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Gestalt principle states that the eye follows smooth paths, so users expect flows and sequences to continue predictably?",
    options: [
      "Continuity",
      "Closure",
      "Figure/Ground",
      "Proximity"
    ],
    correctAnswer: 0,
    explanation: "Continuity states that the eye follows smooth paths, so users expect flows, lines, and sequences to continue predictably.\n\nClosure instead concerns mentally completing incomplete shapes, a different principle than following a path.\n\nFigure/Ground instead concerns distinguishing objects from backgrounds, a different principle than following a path.\n\nProximity instead concerns grouping by closeness, a different principle than following a smooth path."
  },
  {
    id: "csc306_ch5_027",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Gestalt principle states that we mentally complete incomplete shapes, which logos and icons exploit to reduce visual clutter?",
    options: [
      "Closure",
      "Continuity",
      "Common Fate",
      "Similarity"
    ],
    correctAnswer: 0,
    explanation: "Closure states that we complete incomplete shapes mentally, which logos, icons, and UI outlines exploit to reduce visual clutter.\n\nContinuity instead concerns following smooth paths, a different principle than mentally completing a shape.\n\nCommon Fate instead concerns elements moving together being seen as related, a different principle than completing shapes.\n\nSimilarity instead concerns grouping by shared appearance, a different principle than completing shapes."
  },
  {
    id: "csc306_ch5_028",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Gestalt principle concerns distinguishing objects from backgrounds, requiring contrast and layering to be deliberate to avoid confusion?",
    options: [
      "Figure/Ground",
      "Closure",
      "Proximity",
      "Common Fate"
    ],
    correctAnswer: 0,
    explanation: "Figure/Ground concerns distinguishing objects from backgrounds, requiring contrast and layering to be deliberate to avoid confusion.\n\nClosure instead concerns mentally completing incomplete shapes, a different principle than object-background distinction.\n\nProximity instead concerns grouping by closeness, a different principle than object-background distinction.\n\nCommon Fate instead concerns elements moving together being seen as related, a different principle than object-background distinction."
  },
  {
    id: "csc306_ch5_029",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Gestalt principle states that elements moving together are seen as related, so animation can indicate grouping?",
    options: [
      "Common Fate",
      "Figure/Ground",
      "Similarity",
      "Closure"
    ],
    correctAnswer: 0,
    explanation: "Common Fate states that elements moving together are seen as related, so animation and motion can indicate grouping or relationship.\n\nFigure/Ground instead concerns object-background distinction, a different principle than shared motion.\n\nSimilarity instead concerns grouping by shared appearance, a different principle than shared motion.\n\nClosure instead concerns mentally completing incomplete shapes, a different principle than shared motion."
  },
  {
    id: "csc306_ch5_030",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is an accurate pairing of a Gestalt principle with its description?",
    options: [
      "Proximity states that elements placed close together are seen as a related group",
      "Common Fate states that elements placed close together are seen as a related group",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Proximity stating that elements placed close together are seen as a related group is stated directly. Common Fate instead states that elements moving together are seen as related, not elements placed close together, which is Proximity's definition. Since only the Proximity statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_031",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Gestalt psychology explains how the brain groups visual elements automatically, before any conscious thought takes place.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Gestalt psychology is described as explaining how the brain groups visual elements automatically, before conscious thought, through principles like proximity and similarity."
  },
  {
    id: "csc306_ch5_032",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The cocktail party effect, where a person can tune in to their name across a noisy room, is an example of which attention type?",
    options: [
      "Selective Attention",
      "Divided Attention",
      "Sustained Attention",
      "Peripheral Attention"
    ],
    correctAnswer: 0,
    explanation: "Selective Attention is illustrated by the cocktail party effect, focusing on one stimulus while ignoring others, such as tuning in to one's name in a noisy room.\n\nDivided Attention instead concerns processing multiple inputs simultaneously, not focusing selectively on one stimulus.\n\nSustained Attention instead concerns maintaining focus over time, not selectively tuning in to a single stimulus.\n\nPeripheral Attention is not one of the three named attention types in this material."
  },
  {
    id: "csc306_ch5_033",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Attempting to process multiple inputs simultaneously, where performance degrades sharply when tasks compete for the same cognitive resource, describes which attention type?",
    options: [
      "Divided Attention",
      "Selective Attention",
      "Sustained Attention",
      "Situational Attention"
    ],
    correctAnswer: 0,
    explanation: "Divided Attention is attempting to process multiple inputs simultaneously, with performance degrading sharply when tasks compete for the same cognitive resource.\n\nSelective Attention instead concerns focusing on one stimulus while filtering others, not processing multiple inputs at once.\n\nSustained Attention instead concerns maintaining focus over time, not processing multiple simultaneous inputs.\n\nSituational Attention is not one of the three named attention types in this material."
  },
  {
    id: "csc306_ch5_034",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Maintaining focus over time, where vigilance tasks like monitoring dashboards suffer from attention drift after 20 to 30 minutes, describes which attention type?",
    options: [
      "Sustained Attention",
      "Selective Attention",
      "Divided Attention",
      "Peripheral Attention"
    ],
    correctAnswer: 0,
    explanation: "Sustained Attention is maintaining focus over time, and vigilance tasks such as monitoring dashboards suffer from attention drift after 20 to 30 minutes.\n\nSelective Attention instead concerns focusing on one stimulus among many, not maintaining focus over an extended duration.\n\nDivided Attention instead concerns processing multiple inputs at once, not maintaining focus over an extended duration.\n\nPeripheral Attention is not one of the three named attention types in this material."
  },
  {
    id: "csc306_ch5_035",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Per the Harvard 2010 statistic cited, roughly what percentage of waking time do people's minds spend not on the task at hand?",
    options: [
      "About 47%",
      "About 10%",
      "About 25%",
      "About 70%"
    ],
    correctAnswer: 0,
    explanation: "The Harvard 2010 statistic cited states that roughly 47% of waking time, minds are not on the task at hand.\n\nAbout 10% substantially understates the cited figure.\n\nAbout 25% also understates the cited figure.\n\nAbout 70% substantially overstates the cited figure."
  },
  {
    id: "csc306_ch5_036",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which memory type is described as a brief buffer for raw sensory data, lasting less than one second?",
    options: [
      "Sensory Memory",
      "Working Memory",
      "Long-Term Memory",
      "Procedural Memory"
    ],
    correctAnswer: 0,
    explanation: "Sensory Memory is a brief buffer for raw sensory data, lasting less than one second, holding iconic and echoic information just long enough to be processed.\n\nWorking Memory instead lasts 15 to 30 seconds and holds a small number of chunks, not raw sensory data for under a second.\n\nLong-Term Memory instead lasts a lifetime with effectively unlimited capacity, not a brief sensory buffer.\n\nProcedural Memory is a category within long-term memory concerning how to do things, not a brief sensory buffer."
  },
  {
    id: "csc306_ch5_037",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Working memory is described as lasting 15 to 30 seconds and holding roughly how many chunks, per modern research cited here?",
    options: [
      "4 plus or minus 1 chunks",
      "7 plus or minus 2 chunks",
      "12 plus or minus 3 chunks",
      "1 plus or minus 1 chunk"
    ],
    correctAnswer: 0,
    explanation: "Working memory is described as lasting 15 to 30 seconds, and while Miller's Law originally suggested 7 plus or minus 2, modern research cited here points to 4 plus or minus 1 chunks.\n\n7 plus or minus 2 chunks is instead the original Miller's Law figure, which this material notes has been revised by modern research.\n\n12 plus or minus 3 chunks overstates the capacity given for working memory in this material.\n\n1 plus or minus 1 chunk understates the capacity given for working memory in this material."
  },
  {
    id: "csc306_ch5_038",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "First impressions being formed here, with visual noise and cluttered UIs causing information to be lost before it is processed, is the HCI implication for which memory type?",
    options: [
      "Sensory Memory",
      "Working Memory",
      "Long-Term Memory",
      "Episodic Memory"
    ],
    correctAnswer: 0,
    explanation: "Sensory Memory's HCI implication is that first impressions are formed here, and visual noise and cluttered UIs cause information to be lost before it is processed.\n\nWorking Memory's implication instead concerns minimising what users must hold in mind through chunking and progressive disclosure, not first impressions.\n\nLong-Term Memory's implication instead concerns leveraging familiar patterns and conventions, not first impressions.\n\nEpisodic Memory is not one of the three named memory types in this material."
  },
  {
    id: "csc306_ch5_039",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which memory type's HCI implication is to minimise the number of things users must hold in mind at once, using chunking and progressive disclosure?",
    options: [
      "Working Memory",
      "Sensory Memory",
      "Long-Term Memory",
      "Procedural Memory"
    ],
    correctAnswer: 0,
    explanation: "Working Memory's HCI implication is to minimise the number of things users must hold in mind at once, using chunking, progressive disclosure, and persistent context.\n\nSensory Memory's implication instead concerns first impressions and visual noise, not ongoing mental juggling of items.\n\nLong-Term Memory's implication instead concerns leveraging familiar patterns and conventions, not minimising items held in mind.\n\nProcedural Memory is a category within long-term memory, not one of the three primary memory types discussed."
  },
  {
    id: "csc306_ch5_040",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which memory type's HCI implication is that familiar patterns and conventions leverage existing memory, and unexpected departures force re-learning?",
    options: [
      "Long-Term Memory",
      "Sensory Memory",
      "Working Memory",
      "Iconic Memory"
    ],
    correctAnswer: 0,
    explanation: "Long-Term Memory's HCI implication is that familiar patterns and conventions leverage existing long-term memory, and unexpected departures from convention force re-learning.\n\nSensory Memory's implication instead concerns first impressions and visual noise, not long-term convention learning.\n\nWorking Memory's implication instead concerns minimising items held in mind, not long-term convention learning.\n\nIconic Memory is a component of sensory memory specifically for vision, not one of the three primary memory types discussed."
  },
  {
    id: "csc306_ch5_041",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Long-term memory is composed of procedural memory, for how to do things, and which other named type, for facts and events?",
    options: [
      "Declarative memory",
      "Sensory memory",
      "Working memory",
      "Iconic memory"
    ],
    correctAnswer: 0,
    explanation: "Long-term memory is composed of procedural memory, for how to do things, and declarative memory, for facts and events, with retrieval depending on encoding strength and cues.\n\nSensory memory is instead a separate, much shorter-lived memory type for raw sensory data, not a subtype of long-term memory.\n\nWorking memory is instead a separate, short-duration memory type for active mental manipulation, not a subtype of long-term memory.\n\nIconic memory is instead a component of sensory memory specifically for vision, not a subtype of long-term memory."
  },
  {
    id: "csc306_ch5_042",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which information processing model describes information flowing through discrete stages, from sensory register to working memory to long-term memory, attributed to Atkinson and Shiffrin in 1968?",
    options: [
      "The Stage Model",
      "Distributed Cognition",
      "The GOMS Model",
      "The HIP Model"
    ],
    correctAnswer: 0,
    explanation: "The Stage Model, attributed to Atkinson and Shiffrin in 1968, describes information flowing through discrete stages: sensory register, working memory, and long-term memory.\n\nDistributed Cognition is instead attributed to Hutchins in 1995, describing cognition as distributed across people, tools, and artefacts, not discrete internal stages.\n\nThe GOMS Model is instead attributed to Card, Moran, and Newell in 1983, predicting task completion times, not discrete memory stages.\n\nThe HIP Model is a general label used elsewhere for information processing generally, not the specific 1968 stage-based model."
  },
  {
    id: "csc306_ch5_043",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which limitation is cited for the Stage Model of information processing?",
    options: [
      "It is too linear, and real cognition involves parallel processing and top-down influence from prior knowledge",
      "It cannot be applied to any digital interface whatsoever",
      "It has never been tested or cited in any research",
      "It applies only to auditory information, never visual"
    ],
    correctAnswer: 0,
    explanation: "The Stage Model's cited limitation is that it is too linear, since real cognition involves parallel processing and top-down influence from prior knowledge.\n\nClaiming it cannot be applied to any digital interface contradicts the material, which calls it hugely influential and still a useful simplification for designers.\n\nClaiming it has never been tested or cited contradicts its description as hugely influential in the field.\n\nRestricting it to auditory information only is not a described limitation; the model concerns general information flow, not a single sensory channel."
  },
  {
    id: "csc306_ch5_044",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which information processing model, attributed to Hutchins in 1995, states that cognition is distributed across people, tools, and artefacts, not just in an individual's head?",
    options: [
      "Distributed Cognition",
      "The Stage Model",
      "The GOMS Model",
      "The Mental Model framework"
    ],
    correctAnswer: 0,
    explanation: "Distributed Cognition, attributed to Hutchins in 1995, states that cognition is not just in the head but distributed across people, tools, and artefacts, such as a pilot navigating with instruments.\n\nThe Stage Model is instead attributed to Atkinson and Shiffrin in 1968, describing discrete internal memory stages, not distribution across tools and people.\n\nThe GOMS Model is instead attributed to Card, Moran, and Newell in 1983, predicting task completion times, not distributed cognition.\n\nThe Mental Model framework concerns a user's internal representation of a system, a related but distinct concept from distributed cognition."
  },
  {
    id: "csc306_ch5_045",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which information processing model, attributed to Card, Moran, and Newell in 1983, predicts task completion times using Goals, Operators, Methods, and Selection rules?",
    options: [
      "The GOMS Model",
      "The Stage Model",
      "Distributed Cognition",
      "The Automation Spectrum"
    ],
    correctAnswer: 0,
    explanation: "The GOMS Model, attributed to Card, Moran, and Newell in 1983, uses Goals, Operators, Methods, and Selection rules to predict task completion times and identify unnecessary cognitive steps.\n\nThe Stage Model is instead attributed to Atkinson and Shiffrin in 1968, describing discrete memory stages, not task-time prediction via GOMS.\n\nDistributed Cognition is instead attributed to Hutchins in 1995, describing cognition spread across tools and people, not GOMS-based prediction.\n\nThe Automation Spectrum is an unrelated framework describing levels of AI involvement, not an information processing model."
  },
  {
    id: "csc306_ch5_046",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The GOMS Model is described as useful for comparing interface designs quantitatively, but less suited to which kind of interaction?",
    options: [
      "Exploratory or emotional interactions",
      "Highly repetitive keyboard shortcuts",
      "Any interaction involving a mouse",
      "Interactions lasting under one second"
    ],
    correctAnswer: 0,
    explanation: "The GOMS Model is described as useful for comparing interface designs quantitatively, but less suited to exploratory or emotional interactions.\n\nRepetitive keyboard shortcuts are exactly the kind of structured, predictable task GOMS is well suited to model, not a stated weakness.\n\nMouse-based interactions in general are not described as a weakness of GOMS; the stated weakness concerns exploratory and emotional interaction, not input device.\n\nInteraction duration under one second is not the described weakness of GOMS in this material."
  },
  {
    id: "csc306_ch5_047",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the Mental Models framework, which term describes how the system actually works, its real logic and architecture, known fully by the developer?",
    options: [
      "System Model",
      "Mental Model",
      "Design Gap",
      "Conceptual Model"
    ],
    correctAnswer: 0,
    explanation: "The System Model is how the system actually works, its real logic, architecture, and state, known fully by the developer and partially, if at all, by the user.\n\nMental Model instead describes what the user believes the system does, formed through experience and instruction, not the system's real internal logic.\n\nDesign Gap instead describes the divergence between the system model and the user's mental model, not either model itself.\n\nConceptual Model is not the specific term used for the developer's full internal knowledge in this material."
  },
  {
    id: "csc306_ch5_048",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "A user believing that deleting a file removes it immediately and permanently, when the system actually moves it to a temporary buffer first, illustrates what?",
    options: [
      "The Design Gap between the system model and the user's mental model",
      "The GOMS Model's prediction of task completion time",
      "Common Fate, a Gestalt grouping principle",
      "Sustained Attention drifting after 20 to 30 minutes"
    ],
    correctAnswer: 0,
    explanation: "This illustrates the Design Gap, where the system model, a temporary buffer before removal, diverges from the user's mental model, immediate permanent deletion, and the Recycle Bin metaphor is used to bridge this gap.\n\nThe GOMS Model instead predicts task completion times using goals and operators, not the divergence between system and user beliefs.\n\nCommon Fate is a Gestalt principle about grouping by shared motion, unrelated to beliefs about file deletion.\n\nSustained Attention concerns focus drifting over long vigilance tasks, unrelated to a mismatched belief about deletion behaviour."
  },
  {
    id: "csc306_ch5_049",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "A mental model may be incomplete, inaccurate, or contradictory, yet it is always described as being what to the user?",
    options: [
      "The user's reality",
      "Completely irrelevant to design",
      "Identical to the developer's system model",
      "A fixed property that never changes"
    ],
    correctAnswer: 0,
    explanation: "A mental model may be incomplete, inaccurate, or contradictory, but it is always the user's reality, meaning designers must work with it rather than dismiss it.\n\nDescribing it as completely irrelevant to design contradicts the entire premise that designers must bridge the gap between the mental model and the system model.\n\nDescribing it as identical to the developer's system model contradicts the explicit distinction drawn between the two.\n\nDescribing it as fixed and unchanging contradicts the fact that it is formed and revised through experience, analogy, and instruction."
  },
  {
    id: "csc306_ch5_050",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the version of Fitts's Law expressed as MT = a + b log2(2D / W), which variable represents the target width?",
    options: [
      "W", "D", "MT", "a"
    ],
    correctAnswer: 0,
    explanation: "In this formulation of Fitts's Law, W represents the target width, alongside D for distance and MT for the predicted movement time.\n\nD instead represents the distance to the target, not the target's width.\n\nMT instead represents the movement time being predicted, the outcome of the formula, not a width variable.\n\na is instead an empirical constant in the formula, not the target width."
  },
  {
    id: "csc306_ch5_051",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which law states that decision time increases logarithmically with the number of choices presented, meaning every option added to a menu slows the user down?",
    options: [
      "Hick's Law",
      "Fitts's Law",
      "Miller's Law",
      "GOMS"
    ],
    correctAnswer: 0,
    explanation: "Hick's Law states that decision time increases with the number of choices, and every option added to a menu slows the user down logarithmically, favouring simplicity and progressive disclosure.\n\nFitts's Law instead concerns the time to physically reach a target based on its size and distance, not decision time from choice count.\n\nMiller's Law instead concerns the capacity of working memory, not decision time from choice count.\n\nGOMS instead predicts task completion times using goals and operators, not specifically the logarithmic effect of choice count."
  },
  {
    id: "csc306_ch5_052",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Placing menu options at corner or edge positions is a design implication of Fitts's Law because these positions create what effect?",
    options: [
      "An infinite effective width, making the target easier to acquire",
      "A guaranteed increase in the menu's color saturation",
      "An automatic reduction in the number of menu items shown",
      "A requirement for the user to zoom in before clicking"
    ],
    correctAnswer: 0,
    explanation: "Corner and edge positions create an infinite effective width under Fitts's Law, since the screen boundary stops the cursor, making the target easier to acquire.\n\nColor saturation is a visual design detail unrelated to the effective width created by edge positioning.\n\nReducing the number of menu items is a content decision unrelated to the geometric effect of edge positioning.\n\nRequiring users to zoom in is not a described implication of Fitts's Law or edge positioning."
  },
  {
    id: "csc306_ch5_053",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Repeated physical interactions, such as keyboard shortcuts and gestures, becoming automatic over time and shifting from deliberate to procedural memory describes which concept?",
    options: [
      "Motor Learning",
      "Sensory Memory",
      "Hick's Law",
      "The Design Gap"
    ],
    correctAnswer: 0,
    explanation: "Motor Learning describes repeated physical interactions, such as keyboard shortcuts and gestures, becoming automatic over time, shifting from deliberate to procedural memory.\n\nSensory Memory instead concerns a brief raw sensory buffer lasting under a second, not skill automation over time.\n\nHick's Law instead concerns decision time increasing with choice count, not physical skill automation.\n\nThe Design Gap instead concerns divergence between system and mental models, not physical skill automation."
  },
  {
    id: "csc306_ch5_054",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Why does changing a familiar gesture or control layout force users to re-learn it, per the discussion of muscle memory and consistency?",
    options: [
      "It disrupts the motor patterns users have already built, which consistency across versions respects",
      "It has no measurable effect on user performance at all",
      "It only affects users under the age of eighteen",
      "It exclusively affects voice-based interfaces, never touch or mouse input"
    ],
    correctAnswer: 0,
    explanation: "Changing a familiar gesture or layout disrupts the motor patterns users have already built through repetition, which is why consistency across versions and contexts respects those established patterns.\n\nClaiming no measurable effect contradicts the entire point of this section, which is that changes force costly re-learning.\n\nRestricting the effect to users under eighteen is not supported; motor learning and muscle memory apply broadly across users.\n\nRestricting the effect to voice interfaces only contradicts the examples given, which include keyboard shortcuts and touchscreen gestures."
  },
  {
    id: "csc306_ch5_055",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes an information processing model discussed in relation to cognition and HCI?",
    options: [
      "GOMS predicts task completion times using Goals, Operators, Methods, and Selection rules",
      "The Stage Model, attributed to Atkinson and Shiffrin in 1968, describes information flowing through discrete memory stages",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. GOMS, attributed to Card, Moran, and Newell in 1983, predicts task completion times using Goals, Operators, Methods, and Selection rules. The Stage Model, attributed to Atkinson and Shiffrin in 1968, separately describes information flowing through discrete memory stages. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch5_056",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Every design decision either works with human cognition or against it, since humans do not process information linearly or without error.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The material states directly that every design decision either works with human cognition or against it, and that humans skip steps, misread labels, and rely on context rather than processing information linearly or without error."
  },
  {
    id: "csc306_ch5_057",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which definition of ergonomics describes it as the science of designing work and environments to fit the people who use them, rather than forcing people to adapt?",
    options: [
      "The definition given at the start of the ergonomics discussion",
      "A definition limited exclusively to office chair design",
      "A definition limited exclusively to keyboard shortcut layouts",
      "A definition limited exclusively to smartphone screen sizes"
    ],
    correctAnswer: 0,
    explanation: "Ergonomics is defined as the science of designing work and environments to fit the people who use them, rather than forcing people to adapt to the design, the definition opening the discussion.\n\nLimiting the definition to office chairs describes one narrow application, not the general definition given.\n\nLimiting the definition to keyboard layouts describes one narrow application, not the general definition given.\n\nLimiting the definition to smartphone screen sizes describes one narrow application, not the general definition given."
  },
  {
    id: "csc306_ch5_058",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which branch of ergonomics is described as covering posture, repetitive strain, workspace layout, and the design of physical controls?",
    options: [
      "Physical Ergonomics",
      "Cognitive Ergonomics",
      "Organisational Ergonomics",
      "Perceptual Ergonomics"
    ],
    correctAnswer: 0,
    explanation: "Physical Ergonomics covers how the body moves, sits, reaches, and fatigues, including posture, repetitive strain, workspace layout, and physical control design.\n\nCognitive Ergonomics instead covers mental workload, decision-making, and stress affecting performance, not physical posture.\n\nOrganisational Ergonomics instead covers work systems, policies, and team structures, not physical posture.\n\nPerceptual Ergonomics is not one of the three named branches in this material."
  },
  {
    id: "csc306_ch5_059",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which branch of ergonomics is described as covering shift patterns, communication flows, and collaborative tool design?",
    options: [
      "Organisational Ergonomics",
      "Physical Ergonomics",
      "Cognitive Ergonomics",
      "Sensory Ergonomics"
    ],
    correctAnswer: 0,
    explanation: "Organisational Ergonomics covers how work systems, policies, and team structures affect people, including shift patterns, communication flows, and collaborative tool design.\n\nPhysical Ergonomics instead covers posture, reach, and repetitive strain, not shift patterns or collaboration.\n\nCognitive Ergonomics instead covers mental workload and decision-making, not shift patterns or collaboration.\n\nSensory Ergonomics is not one of the three named branches in this material."
  },
  {
    id: "csc306_ch5_060",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Anthropometrics is described as the study of human body measurements, requiring interfaces to accommodate the full range of users rather than what?",
    options: [
      "The mythical 'average' person",
      "Only professional athletes",
      "Only users under the age of thirty",
      "Only left-handed users"
    ],
    correctAnswer: 0,
    explanation: "Anthropometrics requires interfaces and workspaces to accommodate the full range of users, hand size, reach, height, and grip strength, rather than the mythical 'average' person.\n\nRestricting accommodation to professional athletes is not the described goal; the goal is broad accommodation of real variability.\n\nRestricting accommodation to users under thirty is not the described goal; anthropometrics concerns the full range of body types.\n\nRestricting accommodation to left-handed users only is not the described goal; anthropometrics concerns the full range of body types."
  },
  {
    id: "csc306_ch5_061",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under design considerations for physical ergonomics, what is the minimum tap target size recommended for fingers, per the WHO recommendation cited?",
    options: [
      "9mm",
      "1mm",
      "20mm",
      "50mm"
    ],
    correctAnswer: 0,
    explanation: "The WHO recommendation cited for minimum tap targets for fingers is 9mm, with smaller targets acceptable for stylus input.\n\n1mm would be far too small for reliable finger interaction and understates the cited recommendation.\n\n20mm substantially overstates the cited minimum recommendation.\n\n50mm vastly overstates the cited minimum recommendation."
  },
  {
    id: "csc306_ch5_062",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Handheld devices held for more than roughly how long are described as causing fatigue, requiring balanced rather than merely minimised weight?",
    options: [
      "15 minutes",
      "1 minute",
      "2 hours",
      "24 hours"
    ],
    correctAnswer: 0,
    explanation: "Handheld devices held for more than 15 minutes are described as causing fatigue, meaning weight must be balanced, not just minimised.\n\n1 minute is far too short a duration to match the cited fatigue threshold.\n\n2 hours substantially overstates the cited fatigue threshold.\n\n24 hours vastly overstates the cited fatigue threshold."
  },
  {
    id: "csc306_ch5_063",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which design consideration for physical ergonomics is illustrated by asking whether a device will be used in bright sunlight, with gloves, or one-handed on a bus?",
    options: [
      "Environmental context",
      "Reach zones",
      "Weight distribution",
      "Target sizes"
    ],
    correctAnswer: 0,
    explanation: "Environmental context is illustrated by asking whether a device will be used in bright sunlight, with gloves, or one-handed on a bus, designing for the real context of use.\n\nReach zones instead concern placing controls within the natural reach envelope, not environmental conditions.\n\nWeight distribution instead concerns balancing a handheld device's weight, not environmental conditions.\n\nTarget sizes instead concern minimum tap target dimensions, not environmental conditions."
  },
  {
    id: "csc306_ch5_064",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which input device is described as offering precise text entry with high expert throughput, but having a steep learning curve and a QWERTY layout not optimised for speed or health?",
    options: [
      "Keyboard",
      "Mouse / Trackpad",
      "Stylus / Pen",
      "Game Controller"
    ],
    correctAnswer: 0,
    explanation: "The Keyboard offers precise text entry with high expert throughput, but has a steep learning curve, and its QWERTY layout is not optimised for speed or health.\n\nMouse / Trackpad instead offers precise pointing that maps naturally to cursor position, not text entry throughput.\n\nStylus / Pen instead offers fine motor precision for drawing, not general text entry throughput.\n\nGame Controller instead offers ergonomic multi-axis control for extended use, not text entry."
  },
  {
    id: "csc306_ch5_065",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which input device is described as fine for drawing and annotation with pressure-sensitive input, but requiring dedicated hardware and being poor for rapid text entry?",
    options: [
      "Stylus / Pen",
      "Keyboard",
      "Mouse / Trackpad",
      "Game Controller"
    ],
    correctAnswer: 0,
    explanation: "The Stylus / Pen offers fine motor precision for drawing and annotation with pressure-sensitive input, but requires dedicated hardware and is poor for rapid text entry.\n\nKeyboard instead offers strong text entry throughput, the opposite of the stylus's weakness.\n\nMouse / Trackpad instead offers precise pointing, not fine drawing precision with pressure sensitivity.\n\nGame Controller instead offers ergonomic multi-axis control, not fine drawing precision."
  },
  {
    id: "csc306_ch5_066",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Fingertips being roughly 10mm wide and obscuring small targets describes which design challenge with touch interfaces?",
    options: [
      "The fat-finger problem",
      "Occlusion",
      "Hidden gestures",
      "Motor accessibility"
    ],
    correctAnswer: 0,
    explanation: "The fat-finger problem describes fingertips being roughly 10mm wide, obscuring small targets, which is why a minimum touch target of 44x44pt is recommended.\n\nOcclusion instead concerns the finger covering what it touches during interaction, a related but distinct challenge from target size.\n\nHidden gestures instead concern gestures being invisible and needing discovery, not finger width.\n\nMotor accessibility instead concerns complex gestures excluding users with tremors or limited dexterity, not finger width."
  },
  {
    id: "csc306_ch5_067",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The design challenge where the finger covers what it touches, requiring design to account for what is hidden during interaction, is called what?",
    options: [
      "Occlusion",
      "The fat-finger problem",
      "Hidden gestures",
      "Motor accessibility"
    ],
    correctAnswer: 0,
    explanation: "Occlusion is the challenge where the finger covers what it touches, requiring design to account for what is hidden during interaction.\n\nThe fat-finger problem instead concerns fingertip width obscuring small targets, a related but distinct challenge from what is covered during a touch.\n\nHidden gestures instead concern gestures being invisible and undiscoverable, not the finger covering the touched area.\n\nMotor accessibility instead concerns complex gestures excluding users with limited dexterity, not the finger covering the touched area."
  },
  {
    id: "csc306_ch5_068",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Unlike physical buttons, gestures are invisible, meaning users must discover or be taught them. Which design challenge does this describe?",
    options: [
      "Hidden gestures",
      "Occlusion",
      "The fat-finger problem",
      "Motor accessibility"
    ],
    correctAnswer: 0,
    explanation: "Hidden gestures describes how, unlike physical buttons, gestures are invisible, meaning users must discover or be taught them.\n\nOcclusion instead concerns the finger covering the touched area, not the invisibility of a gesture's existence.\n\nThe fat-finger problem instead concerns fingertip width obscuring targets, not gesture invisibility.\n\nMotor accessibility instead concerns complex gestures excluding users with tremors, a related but distinct issue from a gesture simply being undiscoverable."
  },
  {
    id: "csc306_ch5_069",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Complex gestures excluding users with tremors, limited dexterity, or single-limb access needs describes which design challenge with touch?",
    options: [
      "Motor accessibility",
      "Occlusion",
      "Hidden gestures",
      "The fat-finger problem"
    ],
    correctAnswer: 0,
    explanation: "Motor accessibility describes complex gestures excluding users with tremors, limited dexterity, or single-limb access needs.\n\nOcclusion instead concerns the finger covering the touched area, not exclusion of users with motor impairments.\n\nHidden gestures instead concerns gestures being undiscoverable, a related but distinct issue from exclusion by complexity.\n\nThe fat-finger problem instead concerns fingertip width obscuring small targets, not exclusion by gesture complexity."
  },
  {
    id: "csc306_ch5_070",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The 'gorilla arm effect,' where raised arms fatigue quickly, is cited as a weakness of which input modality?",
    options: [
      "Gesture (Camera)",
      "Voice / Speech",
      "Eye Tracking",
      "Brain-Computer Interface"
    ],
    correctAnswer: 0,
    explanation: "The gorilla arm effect, where raised arms fatigue quickly, is cited as a weakness of Gesture (Camera) input, alongside limited precision and camera dependency.\n\nVoice / Speech's weaknesses instead include poor performance in noisy environments and privacy concerns, not arm fatigue.\n\nEye Tracking's weaknesses instead include the Midas Touch problem and high hardware cost, not arm fatigue.\n\nBrain-Computer Interface's weaknesses instead include invasive surgery requirements and imprecision, not arm fatigue."
  },
  {
    id: "csc306_ch5_071",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The 'Midas Touch problem,' where looking at something shouldn't always select it, is cited as a weakness of which input modality?",
    options: [
      "Eye Tracking",
      "Voice / Speech",
      "Gesture (Camera)",
      "Brain-Computer Interface"
    ],
    correctAnswer: 0,
    explanation: "The Midas Touch problem, where looking at something shouldn't always select it, is a weakness of Eye Tracking, addressed by combining gaze with dwell time or a blink to confirm selection.\n\nVoice / Speech's weaknesses instead include poor performance in noisy environments and accent recognition failures, not gaze-triggered selection.\n\nGesture (Camera)'s weaknesses instead include the gorilla arm effect and limited precision, not gaze-triggered selection.\n\nBrain-Computer Interface's weaknesses instead include invasive surgery requirements, not gaze-triggered selection."
  },
  {
    id: "csc306_ch5_072",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which input modality is described as offering direct neural control that bypasses motor limitations entirely, while raising significant ethical questions?",
    options: [
      "Brain-Computer Interface",
      "Voice / Speech",
      "Gesture (Camera)",
      "Eye Tracking"
    ],
    correctAnswer: 0,
    explanation: "Brain-Computer Interface offers direct neural control that bypasses motor limitations entirely, though invasive options require surgery and raise significant ethical questions.\n\nVoice / Speech instead offers hands-free interaction through spoken commands, not direct neural signals.\n\nGesture (Camera) instead offers contactless interaction through a camera, not direct neural signals.\n\nEye Tracking instead offers hands-free interaction through gaze, not direct neural signals."
  },
  {
    id: "csc306_ch5_073",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG principle requires information and UI components to be presentable in ways all users can perceive, such as text alternatives for images?",
    options: [
      "Perceivable",
      "Operable",
      "Understandable",
      "Robust"
    ],
    correctAnswer: 0,
    explanation: "Perceivable requires information and UI components to be presentable in ways all users can perceive, such as text alternatives for images and captions for video.\n\nOperable instead requires all functionality to be available via keyboard and free of seizure-inducing content, not perceivability.\n\nUnderstandable instead requires readable language and predictable behaviour, not perceivability.\n\nRobust instead requires content to be interpretable by a wide variety of current and future agents, not perceivability."
  },
  {
    id: "csc306_ch5_074",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG principle requires all functionality to be available via keyboard, with no time limits that cannot be extended and no seizure-inducing content?",
    options: [
      "Operable",
      "Perceivable",
      "Understandable",
      "Robust"
    ],
    correctAnswer: 0,
    explanation: "Operable requires UI components to be operable by all, with all functionality available via keyboard, no unextendable time limits, and no seizure-inducing content.\n\nPerceivable instead requires information to be presentable in perceivable ways, such as text alternatives, not operability.\n\nUnderstandable instead requires readable, predictable behaviour, not operability.\n\nRobust instead requires interpretability by many kinds of agents, not operability."
  },
  {
    id: "csc306_ch5_075",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG principle requires content to be interpretable by a wide variety of agents, including current and future browsers and assistive technologies?",
    options: [
      "Robust",
      "Perceivable",
      "Operable",
      "Understandable"
    ],
    correctAnswer: 0,
    explanation: "Robust requires content to be interpretable by a wide variety of agents, current and future browsers, assistive technologies, and devices not yet invented.\n\nPerceivable instead requires perceivable presentation such as text alternatives, not broad technical interpretability.\n\nOperable instead requires keyboard operability, not broad technical interpretability.\n\nUnderstandable instead requires readable, predictable behaviour, not broad technical interpretability."
  },
  {
    id: "csc306_ch5_076",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The Curb Cut Effect describes how features designed for people with disabilities also benefit whom?",
    options: [
      "Everyone, such as cyclists and parents with pushchairs benefiting from kerb cuts",
      "Only the original disabled users, with no benefit to anyone else",
      "Only government infrastructure planners, not everyday users",
      "Only users who purchase premium assistive technology products"
    ],
    correctAnswer: 0,
    explanation: "The Curb Cut Effect describes how features designed for people with disabilities benefit everyone, such as kerb cuts helping wheelchair users as well as cyclists, delivery workers, and parents with pushchairs.\n\nRestricting the benefit to only the original disabled users directly contradicts the effect, which is specifically about broader benefit.\n\nRestricting the benefit to infrastructure planners misrepresents the effect, which concerns benefit to everyday users of a feature.\n\nRestricting the benefit to premium product purchasers misrepresents the effect, which applies to freely accessible features like kerb cuts and captions."
  },
  {
    id: "csc306_ch5_077",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Before committing to an input or output modality, which of the following questions is recommended to ask first?",
    options: [
      "Who is the user?",
      "What is the exact retail price of the device?",
      "How many colors does the company logo use?",
      "What font does the marketing team prefer?"
    ],
    correctAnswer: 0,
    explanation: "Who is the user is the first recommended question, considering age, ability, familiarity with technology, and physical context before choosing a modality.\n\nDevice retail price is a business detail, not one of the four recommended questions for choosing a modality.\n\nLogo color count is a branding detail, not one of the four recommended questions for choosing a modality.\n\nMarketing font preference is a branding detail, not one of the four recommended questions for choosing a modality."
  },
  {
    id: "csc306_ch5_078",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a design challenge specific to touch interfaces?",
    options: [
      "The fat-finger problem arises because fingertips are roughly 10mm wide",
      "Occlusion refers to gestures being entirely invisible and undiscoverable",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The fat-finger problem arising because fingertips are roughly 10mm wide is stated directly. Occlusion instead refers to the finger covering what it touches during interaction, not gesture invisibility, which is the separate challenge of hidden gestures. Since only the fat-finger statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_079",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Voice assistants and gesture-based cameras are both described as requiring which safeguard, in case the system misinterprets the user's input?",
    options: [
      "A visual fallback, or a design that handles recognition failure gracefully",
      "A mandatory account creation step before first use",
      "A minimum session length of ten minutes",
      "A requirement that the user memorize every supported command"
    ],
    correctAnswer: 0,
    explanation: "Voice input is advised to always provide a visual fallback and design for recognition failure gracefully, and gesture input has its own precision limitations, both requiring graceful handling of failure.\n\nMandatory account creation is unrelated to handling voice or gesture recognition failure.\n\nA minimum session length is unrelated to handling voice or gesture recognition failure.\n\nRequiring users to memorize every command contradicts the goal of natural, low-effort interaction that voice and gesture modalities aim for."
  },
  {
    id: "csc306_ch5_080",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Screen glare in outdoor contexts is described as a major ergonomic challenge for which type of output device?",
    options: [
      "Visual Displays",
      "Audio Output",
      "Haptic Feedback",
      "Voice Output"
    ],
    correctAnswer: 0,
    explanation: "Visual Displays face screen glare in outdoor contexts as a major ergonomic challenge, alongside resolution, brightness, and refresh rate affecting usability.\n\nAudio Output instead faces challenges like calibrating volume and frequency for diverse hearing ability, not screen glare.\n\nHaptic Feedback instead faces challenges like habituation from overuse, not screen glare.\n\nVoice Output is not one of the three named output categories in this material; audio output covers spoken and non-spoken sound."
  },
  {
    id: "csc306_ch5_081",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Braille displays and tactile navigation are increasingly used in accessibility under which output category?",
    options: [
      "Haptic Feedback",
      "Visual Displays",
      "Audio Output",
      "Voice Output"
    ],
    correctAnswer: 0,
    explanation: "Haptic Feedback is increasingly used in accessibility through Braille displays and tactile navigation, alongside vibration motors confirming touch actions.\n\nVisual Displays instead concern resolution, brightness, and glare, not tactile Braille output.\n\nAudio Output instead concerns earcons and spatial audio, not tactile Braille output.\n\nVoice Output is not one of the three named output categories in this material."
  },
  {
    id: "csc306_ch5_082",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In HCI, ergonomics is described as asking whether an interface fits real human bodies in real contexts, over what?",
    options: [
      "Real time",
      "A fixed one-hour session only",
      "A single predetermined device only",
      "A laboratory setting exclusively"
    ],
    correctAnswer: 0,
    explanation: "In HCI, ergonomics asks whether an interface fits real human bodies, in real contexts, over real time, capturing sustained, real-world use rather than a single moment.\n\nRestricting the question to a fixed one-hour session contradicts the open-ended framing of 'real time' used in this material.\n\nRestricting the question to one predetermined device contradicts the broad, context-spanning framing of the question.\n\nRestricting the question to a laboratory setting contradicts the emphasis on real contexts, not controlled test environments."
  },
  {
    id: "csc306_ch5_083",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "One single input or output device is described as universally best across every context, task, and user.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. No input or output device is described as universally best, since context decides everything, which is why four questions about the user, task, environment, and session length are recommended before committing to a modality."
  },
  {
    id: "csc306_ch5_084",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is an accurate pairing of a WCAG principle with its requirement?",
    options: [
      "Perceivable requires all functionality to be operable via keyboard alone",
      "Robust requires content to be interpretable only by browsers released before 2020",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither pairing is accurate. Keyboard operability is instead required by the separate Operable principle, not Perceivable, which requires perceivable presentation such as text alternatives. Robust instead requires interpretability by a wide variety of current and future agents, the opposite of being limited only to older browsers. Since both pairings are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch5_085",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Using the car analogy, UI is compared to the instrument panel, dials, wheel, and pedals. What is UX compared to?",
    options: [
      "The entire journey of driving the car",
      "The engine's internal combustion process",
      "The factory where the car was manufactured",
      "The advertisement used to sell the car"
    ],
    correctAnswer: 0,
    explanation: "UX is compared to the entire journey of driving the car, covering comfort, confidence, and arrival, while UI is the instrument panel, dials, wheel, and pedals.\n\nThe engine's combustion process is a mechanical detail not used in this analogy for either UI or UX.\n\nThe manufacturing factory is unrelated to this analogy, which contrasts the panel with the journey, not production.\n\nThe advertisement is unrelated to this analogy, which contrasts the panel with the journey, not marketing."
  },
  {
    id: "csc306_ch5_086",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is listed under UI concerns rather than UX concerns?",
    options: [
      "Typography and colour",
      "User research",
      "Task flows",
      "Emotional response"
    ],
    correctAnswer: 0,
    explanation: "Typography and colour are listed under UI concerns, alongside visual design, component layout, and responsive behaviour.\n\nUser research is instead listed under UX concerns, not UI.\n\nTask flows are instead listed under UX concerns, not UI.\n\nEmotional response is instead listed under UX concerns, not UI."
  },
  {
    id: "csc306_ch5_087",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Good UX is said to require good UI, but what is said about the reverse relationship?",
    options: [
      "Perfect UI cannot compensate for broken UX",
      "Perfect UI always guarantees a great UX automatically",
      "UI and UX are completely unrelated disciplines",
      "UX is a subset of UI with no independent value"
    ],
    correctAnswer: 0,
    explanation: "The material states that good UX requires good UI, but perfect UI cannot compensate for broken UX, meaning the relationship is not symmetrical.\n\nClaiming perfect UI automatically guarantees great UX contradicts the explicit statement that UI alone cannot compensate for broken UX.\n\nDescribing UI and UX as completely unrelated contradicts the framing that they are always related, though never the same thing.\n\nDescribing UX as a mere subset of UI misrepresents the relationship; UX is the broader experience, not a subset of UI."
  },
  {
    id: "csc306_ch5_088",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under visual hierarchy, which element states that larger elements demand attention first, so headlines dominate body copy?",
    options: [
      "Size & Scale",
      "Whitespace",
      "Typography",
      "Proximity & Grouping"
    ],
    correctAnswer: 0,
    explanation: "Size & Scale states that larger elements demand attention first, so headlines dominate body copy and primary calls to action dwarf secondary links.\n\nWhitespace instead concerns empty space separating elements and creating breathing room, not element size.\n\nTypography instead concerns weight, size, and style communicating importance through text styling, a related but distinct principle from overall element scale.\n\nProximity & Grouping instead concerns elements placed close together being read as related, not overall size."
  },
  {
    id: "csc306_ch5_089",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under visual hierarchy, which element states that empty space is not wasted space, since it separates elements and focuses attention?",
    options: [
      "Whitespace",
      "Colour & Contrast",
      "Size & Scale",
      "Typography"
    ],
    correctAnswer: 0,
    explanation: "Whitespace states that empty space is not wasted space, since it separates elements, creates breathing room, and focuses attention on what remains.\n\nColour & Contrast instead concerns high-contrast elements popping while muted tones recede, not empty space itself.\n\nSize & Scale instead concerns larger elements demanding attention, not the use of empty space.\n\nTypography instead concerns weight, size, and style of text, not empty space."
  },
  {
    id: "csc306_ch5_090",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under visual hierarchy, the Typography element recommends never using more than how many typefaces?",
    options: [
      "2", "5", "10", "1"
    ],
    correctAnswer: 0,
    explanation: "Typography recommends never using more than 2 typefaces, since weight, size, and style already communicate importance without adding more fonts.\n\n5 typefaces substantially exceeds the recommended limit stated in this material.\n\n10 typefaces vastly exceeds the recommended limit stated in this material.\n\n1 typeface understates the recommended limit, which allows up to 2."
  },
  {
    id: "csc306_ch5_091",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Eye-tracking studies showing users scan content across the top, down the left side, with shorter horizontal sweeps below describes which scanning pattern?",
    options: [
      "The F-Pattern",
      "The Z-Pattern",
      "The Common Fate pattern",
      "The Closure pattern"
    ],
    correctAnswer: 0,
    explanation: "The F-Pattern describes users scanning content across the top, down the left side, with shorter horizontal sweeps below, informing where critical information should be placed.\n\nThe Z-Pattern instead describes a diagonal top-left to bottom-right path for sparse layouts, not the F-shaped scan.\n\nCommon Fate is a Gestalt grouping principle about shared motion, not an eye-tracking scanning pattern.\n\nClosure is a Gestalt principle about completing incomplete shapes, not an eye-tracking scanning pattern."
  },
  {
    id: "csc306_ch5_092",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "For sparse layouts such as landing pages, the eye is described as following which path: top-left, top-right, diagonal, bottom-left, bottom-right?",
    options: [
      "The Z-Pattern",
      "The F-Pattern",
      "The Proximity pattern",
      "The Continuity pattern"
    ],
    correctAnswer: 0,
    explanation: "The Z-Pattern describes the eye following a top-left to top-right, diagonal, bottom-left, bottom-right path for sparse layouts like landing pages and posters.\n\nThe F-Pattern instead describes a top-and-left-heavy scan for denser, content-rich pages, not sparse layouts.\n\nProximity is a Gestalt grouping principle about closeness, not an eye-tracking scanning pattern.\n\nContinuity is a Gestalt principle about following smooth paths generally, not this specific named Z-shaped pattern."
  },
  {
    id: "csc306_ch5_093",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the feedback timing thresholds, a delay of about 1.0 second is described as the threshold for what kind of experience?",
    options: [
      "Continuous flow, where the user notices a pause and a spinner prevents anxiety",
      "Instantaneous, where no feedback is needed at all",
      "The attention limit, requiring a progress bar with an estimate",
      "A background task, requiring notification on completion"
    ],
    correctAnswer: 0,
    explanation: "About 1.0 second is the continuous flow threshold, where the user notices a pause and a spinner or highlight prevents anxiety.\n\nInstantaneous instead applies at about 0.1 seconds, where the user feels in direct control and no feedback is needed.\n\nThe attention limit instead applies at about 10 seconds, requiring a progress bar with an estimate.\n\nA background task instead applies beyond 10 seconds, requiring notification on completion so users can keep working."
  },
  {
    id: "csc306_ch5_094",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "At roughly 10 seconds of waiting, described as the attention limit, what does the interface need to provide?",
    options: [
      "A progress bar with an estimate, since attention drifts",
      "Nothing at all, since users are assumed to have left",
      "A button highlight only, with no numeric estimate",
      "A cursor change only, with no further explanation"
    ],
    correctAnswer: 0,
    explanation: "At roughly 10 seconds, the attention limit, attention drifts, so a progress bar with an estimate is essential to keep the user informed.\n\nProviding nothing at all contradicts the described need for a progress bar at this threshold.\n\nA button highlight alone is the feedback appropriate for the much shorter, roughly 0.1 second, instantaneous threshold, not 10 seconds.\n\nA cursor change alone is also feedback appropriate for the shortest threshold, not the 10 second attention limit."
  },
  {
    id: "csc306_ch5_095",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of feedback message is illustrated by 'You have unsaved changes. Leave anyway?', interrupting the user to prevent data loss?",
    options: [
      "Warning", "Confirmation", "Error", "Progress"
    ],
    correctAnswer: 0,
    explanation: "Warning is illustrated by 'You have unsaved changes. Leave anyway?', which interrupts the user to prevent data loss.\n\nConfirmation is instead illustrated by 'Your file has been saved,' closing the loop on a completed action, not interrupting to prevent loss.\n\nError is instead illustrated by a precise, solution-oriented message like a password requirement, not an interruption before an action.\n\nProgress is instead illustrated by an upload percentage and time remaining, not an interruption before an action."
  },
  {
    id: "csc306_ch5_096",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of feedback message is illustrated by 'Password must contain at least 8 characters,' described as precise, non-blaming, and solution-oriented?",
    options: [
      "Error", "Confirmation", "Warning", "Progress"
    ],
    correctAnswer: 0,
    explanation: "Error is illustrated by 'Password must contain at least 8 characters,' described as precise, non-blaming, and solution-oriented.\n\nConfirmation is instead illustrated by a short, specific, actionable message closing the loop on a successful action, not identifying a problem.\n\nWarning is instead illustrated by an interruption before a destructive action, not a validation message.\n\nProgress is instead illustrated by an upload percentage and time remaining, not a validation message."
  },
  {
    id: "csc306_ch5_097",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which level of consistency is illustrated by a left-swipe to delete feeling natural on iOS because every other app does it?",
    options: [
      "External consistency",
      "Internal consistency",
      "Real-world consistency",
      "Organisational consistency"
    ],
    correctAnswer: 0,
    explanation: "External consistency is illustrated by a left-swipe to delete feeling natural on iOS because every other app follows the same broader platform convention.\n\nInternal consistency instead concerns elements behaving the same throughout one's own product, not matching other apps on the platform.\n\nReal-world consistency instead concerns matching established conventions from the physical world, such as a shopping cart icon, not platform-wide app conventions.\n\nOrganisational consistency is not one of the three named levels of consistency in this material."
  },
  {
    id: "csc306_ch5_098",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which level of consistency is illustrated by a shopping cart icon meaning what it does in a supermarket?",
    options: [
      "Real-world consistency",
      "Internal consistency",
      "External consistency",
      "Platform consistency"
    ],
    correctAnswer: 0,
    explanation: "Real-world consistency is illustrated by a shopping cart icon matching established conventions from the physical world, such as a supermarket cart.\n\nInternal consistency instead concerns behaving the same throughout one's own product, not matching physical-world conventions.\n\nExternal consistency instead concerns following broader platform conventions among other apps, not physical-world objects.\n\nPlatform consistency is not the specific named term used for this physical-world example in this material."
  },
  {
    id: "csc306_ch5_099",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the Error Prevention Hierarchy, which level is described as the best option: removing the action or condition that causes the error entirely?",
    options: [
      "Eliminate the possibility",
      "Make errors impossible",
      "Detect and warn before action",
      "Enable recovery after error"
    ],
    correctAnswer: 0,
    explanation: "Eliminate the possibility is the best option in the hierarchy, removing the action or condition that causes the error entirely.\n\nMake errors impossible instead constrains input and uses smart defaults, a strong but secondary option to full elimination.\n\nDetect and warn before action instead confirms destructive actions before they happen, a later stage than eliminating the error's cause.\n\nEnable recovery after error instead offers undo and version history after a mistake, the last resort in the hierarchy."
  },
  {
    id: "csc306_ch5_100",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the Error Prevention Hierarchy, confirming a destructive action with a message like 'Are you sure you want to delete 47 files?' belongs to which level?",
    options: [
      "Detect and warn before action",
      "Eliminate the possibility",
      "Make errors impossible",
      "Enable recovery after error"
    ],
    correctAnswer: 0,
    explanation: "Detect and warn before action is illustrated by confirming a destructive action, such as 'Are you sure you want to delete 47 files?', before it is carried out.\n\nEliminate the possibility instead removes the error-causing action entirely, a stronger measure than a warning.\n\nMake errors impossible instead constrains input so the error cannot occur at all, a stronger measure than a warning.\n\nEnable recovery after error instead offers undo or version history after the action has already happened, a later stage than a pre-action warning."
  },
  {
    id: "csc306_ch5_101",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the Error Prevention Hierarchy, undo, version history, and recycle bins that reduce the cost of getting it wrong belong to which level?",
    options: [
      "Enable recovery after error",
      "Eliminate the possibility",
      "Make errors impossible",
      "Detect and warn before action"
    ],
    correctAnswer: 0,
    explanation: "Enable recovery after error is illustrated by undo, version history, and recycle bins, which reduce the cost of getting it wrong after the fact.\n\nEliminate the possibility instead removes the error-causing action before it can ever occur, an earlier stage than after-the-fact recovery.\n\nMake errors impossible instead constrains input to prevent the error entirely, an earlier stage than after-the-fact recovery.\n\nDetect and warn before action instead confirms before the action is taken, an earlier stage than after-the-fact recovery."
  },
  {
    id: "csc306_ch5_102",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Per the key insight on errors, if multiple users make the same mistake using an interface, who or what is at fault?",
    options: [
      "The interface is wrong, not the user",
      "The user is always at fault for not reading instructions",
      "It is impossible to determine fault in such cases",
      "The company's marketing department is at fault"
    ],
    correctAnswer: 0,
    explanation: "The key insight states that if multiple users make the same mistake, the interface is wrong, not the user, and designers should never blame the user for errors caused by bad design.\n\nBlaming the user for not reading instructions directly contradicts this key insight.\n\nClaiming fault cannot be determined contradicts the direct, clear guidance given: the interface is wrong.\n\nBlaming the marketing department is not discussed anywhere in this material as a source of interface errors."
  },
  {
    id: "csc306_ch5_103",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which interface metaphor, originating at Xerox PARC in the 1970s, is noted to strain under modern computing realities since files don't crumple and folders don't weigh anything?",
    options: [
      "The Desktop",
      "The Shopping Cart",
      "The App Grid",
      "Files & Folders"
    ],
    correctAnswer: 0,
    explanation: "The Desktop metaphor, originating at Xerox PARC in the 1970s, is noted to strain under modern realities, since files don't crumple and folders don't weigh anything.\n\nThe Shopping Cart metaphor instead originated in 1990s e-commerce and breaks down for subscriptions and digital goods, a different limitation.\n\nThe App Grid metaphor instead originated with the iPhone in 2007 and struggles with discoverability at scale, a different limitation.\n\nFiles & Folders is a related, universal metaphor inherited from the desktop, but the specific 1970s Xerox PARC origin and crumple/weight limitation is attributed to the Desktop metaphor itself."
  },
  {
    id: "csc306_ch5_104",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which interface metaphor, originating in 1990s e-commerce, captures the concept of collecting items before committing to purchase, but breaks down for subscriptions and digital goods?",
    options: [
      "The Shopping Cart",
      "The Desktop",
      "The App Grid",
      "Files & Folders"
    ],
    correctAnswer: 0,
    explanation: "The Shopping Cart metaphor, originating in 1990s e-commerce, captures collecting items before committing to purchase, but breaks down for subscriptions and digital goods.\n\nThe Desktop metaphor instead originated at Xerox PARC in the 1970s and strains because files don't crumple, a different limitation.\n\nThe App Grid metaphor instead originated with the iPhone in 2007 and struggles with discoverability, a different limitation.\n\nFiles & Folders is a related metaphor inherited from the desktop, not the 1990s e-commerce shopping cart concept."
  },
  {
    id: "csc306_ch5_105",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which interface metaphor, originating with the iPhone in 2007, maps icons as launchers to the physical act of picking up a tool, but offers no inherent organisation at scale?",
    options: [
      "The App Grid",
      "The Desktop",
      "The Shopping Cart",
      "Files & Folders"
    ],
    correctAnswer: 0,
    explanation: "The App Grid metaphor, originating with the iPhone in 2007, maps icons as launchers to the physical act of picking up a tool, but offers no inherent organisation, hurting discoverability at scale.\n\nThe Desktop metaphor instead originated at Xerox PARC in the 1970s, a different origin and limitation.\n\nThe Shopping Cart metaphor instead originated in 1990s e-commerce, a different origin and limitation.\n\nFiles & Folders is a related, universal metaphor inherited from the desktop, not the 2007 iPhone app grid."
  },
  {
    id: "csc306_ch5_106",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The framework for critiquing any interface begins by identifying the user's primary goal. What is the second step?",
    options: [
      "Map the critical path from entry to success",
      "Apply the heuristics as a checklist",
      "Ask what happens when it goes wrong",
      "Redesign the interface from scratch immediately"
    ],
    correctAnswer: 0,
    explanation: "The second step is to map the critical path, tracing the sequence of steps from entry to success and counting clicks, decisions, and moments of uncertainty.\n\nApplying the heuristics as a checklist is instead the third step, following the critical path mapping.\n\nAsking what happens when it goes wrong is instead the fourth and final step in this framework.\n\nImmediately redesigning from scratch is not part of this critique framework, which starts with analysis before any redesign."
  },
  {
    id: "csc306_ch5_107",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The final step of the interface critique framework asks what happens when it goes wrong. What does this step involve?",
    options: [
      "Trying to make errors, and observing whether the system says what went wrong and allows easy recovery",
      "Immediately shipping the product without further testing",
      "Asking only the design team for their opinion, with no hands-on testing",
      "Skipping error scenarios entirely to save time"
    ],
    correctAnswer: 0,
    explanation: "The final step involves trying to make errors and stress-testing the unhappy paths, observing what the system says and whether recovery is easy, since this reveals a design's true character.\n\nImmediately shipping without testing contradicts the entire purpose of this critique framework, which is to test before shipping.\n\nAsking only the design team, without hands-on testing, contradicts the framework's emphasis on directly trying to make errors.\n\nSkipping error scenarios entirely contradicts the explicit final step, which is built around deliberately testing failure paths."
  },
  {
    id: "csc306_ch5_108",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a level of consistency or an error prevention level discussed in interface design principles?",
    options: [
      "Internal consistency means elements behave the same throughout one's own product",
      "The 'eliminate the possibility' level is the last resort in the error prevention hierarchy",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Internal consistency meaning elements behave the same throughout one's own product is stated directly. 'Eliminate the possibility' is instead described as the best, earliest level in the error prevention hierarchy, not the last resort, which is 'enable recovery after error'. Since only the internal consistency statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_109",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "UI and UX are described as often conflated, always related, but never the same thing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The material opens the UI versus UX discussion with exactly this framing: often conflated, always related, never the same thing."
  },
  {
    id: "csc306_ch5_110",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Never showing a wireframe with colour or fonts is a rule given to prevent what outcome?",
    options: [
      "Stakeholders critiquing the aesthetics instead of the structure",
      "The wireframe file becoming too large to share by email",
      "The designer forgetting the product's brand guidelines",
      "The development team beginning to write code prematurely"
    ],
    correctAnswer: 0,
    explanation: "This rule exists because stakeholders will critique the aesthetics instead of the structure if color or fonts are shown in a wireframe, distracting from the layout decisions being tested.\n\nFile size is a technical detail unrelated to the reasoning given for this rule.\n\nForgetting brand guidelines is not the reasoning given for this rule, which concerns stakeholder attention, not the designer's memory.\n\nPremature code writing is not the reasoning given for this rule, which concerns stakeholder feedback during design review."
  },
  {
    id: "csc306_ch5_111",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Nielsen's heuristic calling for clearly marked emergency exits, such as undo, redo, and cancel, so users can leave unwanted states without penalty, is best known as which heuristic?",
    options: [
      "User Control & Freedom",
      "Visibility of System Status",
      "Consistency & Standards",
      "Error Prevention"
    ],
    correctAnswer: 0,
    explanation: "User Control & Freedom calls for clearly marked emergency exits, such as undo, redo, and cancel, so users can leave unwanted states without penalty.\n\nVisibility of System Status instead calls for keeping users informed via timely feedback like loading bars, not an exit from an unwanted state.\n\nConsistency & Standards instead calls for following platform conventions so words and actions mean the same thing, not providing an exit.\n\nError Prevention instead calls for eliminating error-prone conditions before they occur, not offering an exit after entering a state."
  },
  {
    id: "csc306_ch5_112",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Nielsen's heuristic stating that every extra unit of information competes with relevant information, and that irrelevant content reduces the visibility of what matters, is best known as which heuristic?",
    options: [
      "Aesthetic & Minimalist Design",
      "Flexibility & Efficiency",
      "Recognition Over Recall",
      "Help & Documentation"
    ],
    correctAnswer: 0,
    explanation: "Aesthetic & Minimalist Design states that every extra unit of information competes with relevant information, and irrelevant content reduces the visibility of what matters.\n\nFlexibility & Efficiency instead concerns shortcuts letting expert users accelerate, not the competition between relevant and irrelevant content.\n\nRecognition Over Recall instead concerns minimising memory load by keeping options visible, not competing units of information.\n\nHelp & Documentation instead concerns providing searchable, task-focused help, not the competition between relevant and irrelevant content."
  },
  {
    id: "csc306_ch5_113",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Nielsen's heuristic that shortcuts let expert users accelerate, while the interface must still serve novice users, is best known as which heuristic?",
    options: [
      "Flexibility & Efficiency",
      "Aesthetic & Minimalist Design",
      "Match Between System & Real World",
      "Help Recognise & Recover from Errors"
    ],
    correctAnswer: 0,
    explanation: "Flexibility & Efficiency states that shortcuts let expert users accelerate, and the interface must serve both novice and expert users, adapting to both.\n\nAesthetic & Minimalist Design instead concerns removing irrelevant information, not accommodating different expertise levels.\n\nMatch Between System & Real World instead concerns using familiar words and real-world conventions, not accommodating expertise levels.\n\nHelp Recognise & Recover from Errors instead concerns plain-language error messages, not accommodating expertise levels."
  },
  {
    id: "csc306_ch5_114",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Nielsen's heuristic requiring error messages to be in plain language, precisely indicate the problem, and suggest a constructive solution, never using error codes, is best known as which heuristic?",
    options: [
      "Help Recognise & Recover from Errors",
      "Error Prevention",
      "Visibility of System Status",
      "User Control & Freedom"
    ],
    correctAnswer: 0,
    explanation: "Help Recognise & Recover from Errors requires error messages in plain language that precisely indicate the problem and suggest a constructive solution, never using error codes.\n\nError Prevention instead concerns eliminating error-prone conditions before a problem occurs, not wording a message after an error happens.\n\nVisibility of System Status instead concerns ongoing feedback about what is happening, not the wording of an error message specifically.\n\nUser Control & Freedom instead concerns providing an exit from an unwanted state, not the wording of an error message."
  },
  {
    id: "csc306_ch5_115",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "What cost ratio is cited for fixing a usability problem in design compared to fixing it after release?",
    options: [
      "$1 to $100",
      "$1 to $2",
      "$1 to $10,000",
      "$100 to $1"
    ],
    correctAnswer: 0,
    explanation: "The cited cost ratio is $1 to $100, meaning fixing a usability problem in design costs a fraction of what fixing it after release costs.\n\n$1 to $2 substantially understates the cited cost multiplier.\n\n$1 to $10,000 substantially overstates the cited cost multiplier.\n\n$100 to $1 reverses the direction of the ratio; design-stage fixes are the cheaper side, not the more expensive side."
  },
  {
    id: "csc306_ch5_116",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which reason for user research states that features built without research solve problems no one has?",
    options: [
      "Requirements come from reality",
      "You are not the user",
      "Assumptions are expensive",
      "Users change the brief"
    ],
    correctAnswer: 0,
    explanation: "Requirements come from reality states that features built without research solve problems no one has, since research reveals what people actually need.\n\nYou are not the user instead concerns designers bringing expertise and assumptions that most users do not share, a different reason.\n\nAssumptions are expensive instead concerns the rising cost of fixing problems found later in development, a different reason.\n\nUsers change the brief instead concerns research revealing that the wrong question is being solved, a different reason."
  },
  {
    id: "csc306_ch5_117",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which reason for user research states that the later in development a problem is found, the more expensive it is to fix, so research front-loads the cost of understanding?",
    options: [
      "Assumptions are expensive",
      "You are not the user",
      "Requirements come from reality",
      "Users change the brief"
    ],
    correctAnswer: 0,
    explanation: "Assumptions are expensive states that the later a problem is found in development, the more expensive it is to fix, so research front-loads the cost of understanding where it is cheapest.\n\nYou are not the user instead concerns the gap between designer assumptions and real user context, a different reason.\n\nRequirements come from reality instead concerns features solving problems no one has without research, a different reason.\n\nUsers change the brief instead concerns research revealing the wrong question was being solved, a different reason."
  },
  {
    id: "csc306_ch5_118",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the research method matrix, which category includes in-depth interviews, focus groups, diary studies, and contextual inquiry, describing what people say and think?",
    options: [
      "Qualitative and attitudinal methods",
      "Quantitative and behavioural methods",
      "Only methods used in software engineering",
      "Only methods requiring expensive lab equipment"
    ],
    correctAnswer: 0,
    explanation: "In-depth interviews, focus groups, diary studies, and contextual inquiry fall under qualitative and attitudinal methods, capturing what people say.\n\nQuantitative and behavioural methods instead include surveys, analytics, A/B testing, and click heatmaps, capturing what people do at scale.\n\nRestricting these methods to software engineering misrepresents the matrix, which is a general HCI research framework.\n\nRequiring expensive lab equipment is not a defining feature of this category, which includes low-cost methods like diary studies."
  },
  {
    id: "csc306_ch5_119",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the research method matrix, which category includes surveys, analytics, A/B testing, and click heatmaps, describing what people actually do?",
    options: [
      "Quantitative and behavioural methods",
      "Qualitative and attitudinal methods",
      "Only methods used in accessibility audits",
      "Only methods requiring a signed legal contract"
    ],
    correctAnswer: 0,
    explanation: "Surveys, analytics, A/B testing, and click heatmaps fall under quantitative and behavioural methods, describing what people actually do.\n\nQualitative and attitudinal methods instead include interviews and diary studies, describing what people say, not measured behaviour.\n\nRestricting these methods to accessibility audits misrepresents the matrix, which is a general HCI research framework.\n\nA signed legal contract is not a defining feature of this method category in this material."
  },
  {
    id: "csc306_ch5_120",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which interview type uses fixed questions asked in the same order to all participants, best for comparability but with the least room for surprise?",
    options: [
      "Structured",
      "Semi-structured",
      "Unstructured",
      "Contextual"
    ],
    correctAnswer: 0,
    explanation: "Structured interviews use fixed questions asked in the same order to all participants, best for comparability with the least room for surprise.\n\nSemi-structured interviews instead use a question guide with room to follow interesting threads, balancing consistency with depth.\n\nUnstructured interviews instead are conversation-based, following the participant wherever they go, the opposite of a fixed order.\n\nContextual is not one of the three named interview structures in this material; it instead refers to a separate research method, contextual inquiry."
  },
  {
    id: "csc306_ch5_121",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which interview type uses a question guide with room to follow interesting threads, described as the most common approach in HCI research?",
    options: [
      "Semi-structured",
      "Structured",
      "Unstructured",
      "Diary-based"
    ],
    correctAnswer: 0,
    explanation: "Semi-structured interviews use a question guide with room to follow interesting threads, described as the most common approach in HCI research, balancing consistency with depth.\n\nStructured interviews instead use fixed questions in a fixed order, the opposite of following unplanned threads.\n\nUnstructured interviews instead are fully conversation-based with no guide at all, a looser approach than a semi-structured guide.\n\nDiary-based is not one of the three named interview structures in this material; diary studies are a separate research method."
  },
  {
    id: "csc306_ch5_122",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is listed as good interview craft under the 'Do' recommendations?",
    options: [
      "Ask about past behaviour, not hypothetical futures",
      "Lead the witness with questions like 'Don't you find X annoying?'",
      "Ask only binary yes or no questions",
      "Defend the design when a participant criticises it"
    ],
    correctAnswer: 0,
    explanation: "Asking about past behaviour, not hypothetical futures, is listed as a 'Do' recommendation for good interview craft, alongside using silence and asking 'why'.\n\nLeading the witness with loaded questions is instead listed as a 'Don't', since it biases the participant's response.\n\nAsking only binary yes or no questions is instead listed as a 'Don't', since it limits the depth of a response.\n\nDefending the design when criticised is instead listed as a 'Don't', since it discourages honest feedback."
  },
  {
    id: "csc306_ch5_123",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which research method is best suited when you need breadth, many respondents, and a quick turnaround, but risks self-report bias?",
    options: [
      "Surveys & Questionnaires",
      "Contextual Inquiry",
      "Diary Studies",
      "Cognitive Walkthrough"
    ],
    correctAnswer: 0,
    explanation: "Surveys & Questionnaires are best when breadth, many respondents, and quick turnaround are needed, though they risk self-report bias, where people describe ideal rather than actual behaviour.\n\nContextual Inquiry instead is best for depth, observing real behaviour in the actual environment, not scalable breadth.\n\nDiary Studies instead are best for longitudinal data over days or weeks, not quick, scalable breadth.\n\nCognitive Walkthrough is an expert-based evaluation method, not a user research method for gathering breadth of opinion."
  },
  {
    id: "csc306_ch5_124",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which research method observes real behaviour in the user's actual environment, revealing workarounds, but risks an observer effect where presence changes behaviour?",
    options: [
      "Contextual Inquiry",
      "Surveys & Questionnaires",
      "Diary Studies",
      "A/B Testing"
    ],
    correctAnswer: 0,
    explanation: "Contextual Inquiry observes real behaviour in the user's actual environment, revealing workarounds and informal practices, but risks an observer effect where presence changes behaviour.\n\nSurveys & Questionnaires instead risk self-report bias from stated rather than observed behaviour, not an observer effect from physical presence.\n\nDiary Studies instead risk high drop-out rates and participant burden, not an in-the-moment observer effect.\n\nA/B Testing instead compares two design variants using behavioural metrics, not in-person observation with an observer effect."
  },
  {
    id: "csc306_ch5_125",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which research method captures behaviour and experiences across time and varied contexts, with participants recording in the moment, but suffers from high drop-out rates?",
    options: [
      "Diary Studies",
      "Contextual Inquiry",
      "Surveys & Questionnaires",
      "Heuristic Evaluation"
    ],
    correctAnswer: 0,
    explanation: "Diary Studies capture behaviour across time and varied contexts, with participants recording in the moment for less recall bias, but suffer from high drop-out rates and participant burden.\n\nContextual Inquiry instead captures a single session of real behaviour observation, not longitudinal in-the-moment recording.\n\nSurveys & Questionnaires instead capture a single point-in-time response, not sustained recording over days or weeks.\n\nHeuristic Evaluation is an expert-based method with no user participants at all, not a longitudinal user research method."
  },
  {
    id: "csc306_ch5_126",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In affinity mapping, converting every data point into a single sticky idea is which step?",
    options: [
      "Capture everything",
      "Look for clusters",
      "Name the clusters",
      "Find the hierarchy"
    ],
    correctAnswer: 0,
    explanation: "Capture everything is the first step, transcribing interviews and converting every data point into a single note, one idea per sticky note.\n\nLook for clusters is instead the second step, grouping related notes after they have all been captured.\n\nName the clusters is instead the third step, giving each group a descriptive label after clusters have formed.\n\nFind the hierarchy is instead the fourth step, revealing structure after clusters have been named."
  },
  {
    id: "csc306_ch5_127",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In affinity mapping, giving each group a descriptive, insight-oriented label, such as 'Users feel judged when they make mistakes' rather than 'Login problems,' describes which step?",
    options: [
      "Name the clusters",
      "Capture everything",
      "Look for clusters",
      "Translate to implications"
    ],
    correctAnswer: 0,
    explanation: "Name the clusters is the step of giving each group a descriptive, insight-oriented label, such as 'Users feel judged' rather than a generic category like 'Login problems.'\n\nCapture everything is instead the first step, converting raw data into individual notes, before any grouping happens.\n\nLook for clusters is instead the second step, grouping related notes, before they are given insight-oriented labels.\n\nTranslate to implications is instead the final step, generating design implications after the clusters have already been named."
  },
  {
    id: "csc306_ch5_128",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In affinity mapping, generating a design implication such as designing forgiving error states from the theme 'Users feel judged' describes which step?",
    options: [
      "Translate to implications",
      "Capture everything",
      "Name the clusters",
      "Look for clusters"
    ],
    correctAnswer: 0,
    explanation: "Translate to implications is the final step, where each theme generates a design implication, such as 'Users feel judged' leading to forgiving error states.\n\nCapture everything is instead the first step, converting raw data into notes, well before design implications are drawn.\n\nName the clusters is instead the third step, labelling groups, before implications are translated from them.\n\nLook for clusters is instead the second step, grouping notes, before implications are translated from them."
  },
  {
    id: "csc306_ch5_129",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which component of a persona captures a real or composite phrase representing the person's voice and perspective?",
    options: [
      "A quote",
      "Demographics",
      "Tech literacy",
      "Behaviours"
    ],
    correctAnswer: 0,
    explanation: "A quote is a real or composite phrase that captures the persona's voice and perspective.\n\nDemographics instead captures grounding details like age, occupation, and context, not a voiced phrase.\n\nTech literacy instead captures comfort level with technology, not a voiced phrase.\n\nBehaviours instead captures how the person currently solves the problem, not a voiced phrase."
  },
  {
    id: "csc306_ch5_130",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which persona component captures existing pain points that a design has the opportunity to address?",
    options: [
      "Frustrations",
      "Goals",
      "Tech literacy",
      "A quote"
    ],
    correctAnswer: 0,
    explanation: "Frustrations captures existing pain points that a design has the opportunity to address.\n\nGoals instead captures what the person is trying to achieve in their life and work, not existing pain points.\n\nTech literacy instead captures comfort level with technology, not pain points.\n\nA quote instead captures the person's voice, not their specific pain points."
  },
  {
    id: "csc306_ch5_131",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the example persona Adaeze Okafor, what workaround does her 'Behaviour' entry describe her keeping alongside the official system?",
    options: [
      "A personal spreadsheet as a backup",
      "A second smartphone dedicated to work",
      "A printed paper logbook updated hourly",
      "A team of assistants who manage the system for her"
    ],
    correctAnswer: 0,
    explanation: "Adaeze's Behaviour entry describes her keeping a personal spreadsheet alongside the official system as a backup, since the official system requires separate logins per device.\n\nA second dedicated smartphone is not mentioned in her persona description.\n\nA printed paper logbook is not mentioned in her persona description; the workaround described is a spreadsheet.\n\nA team of assistants is not mentioned in her persona description."
  },
  {
    id: "csc306_ch5_132",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of design requirement describes what the system must do, derived directly from user tasks and goals?",
    options: [
      "Functional Requirements",
      "Non-Functional Requirements",
      "Organisational Requirements",
      "User Experience Requirements"
    ],
    correctAnswer: 0,
    explanation: "Functional Requirements describe what the system must do, derived directly from user tasks and goals, such as filtering orders by date and location.\n\nNon-Functional Requirements instead describe how well the system must do it, such as performance and security.\n\nOrganisational Requirements instead describe business or technical constraints like budgets and legal compliance, not what the system does.\n\nUser Experience Requirements instead describe qualities of the interaction itself, such as learnability, not what the system does."
  },
  {
    id: "csc306_ch5_133",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of design requirement describes how well the system must perform, such as loading an order list within 2 seconds on a 3G connection?",
    options: [
      "Non-Functional Requirements",
      "Functional Requirements",
      "Organisational Requirements",
      "User Experience Requirements"
    ],
    correctAnswer: 0,
    explanation: "Non-Functional Requirements describe how well the system must perform, such as loading an order list within 2 seconds on a standard 3G connection.\n\nFunctional Requirements instead describe what the system must do, such as filtering orders, not performance thresholds.\n\nOrganisational Requirements instead describe business or legal constraints, not performance thresholds.\n\nUser Experience Requirements instead describe qualities like learnability and emotional tone, not measurable performance thresholds."
  },
  {
    id: "csc306_ch5_134",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of design requirement describes constraints from the business or technical environment, such as complying with NDPR data protection requirements?",
    options: [
      "Organisational Requirements",
      "Functional Requirements",
      "Non-Functional Requirements",
      "User Experience Requirements"
    ],
    correctAnswer: 0,
    explanation: "Organisational Requirements describe constraints from the business or technical environment, such as complying with NDPR data protection requirements and running on existing infrastructure.\n\nFunctional Requirements instead describe what the system must do, not legal or business constraints.\n\nNon-Functional Requirements instead describe performance and reliability qualities, not legal or business constraints.\n\nUser Experience Requirements instead describe qualities of the interaction itself, not legal or business constraints."
  },
  {
    id: "csc306_ch5_135",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of design requirement describes qualities of the interaction itself, such as learnability, aesthetic standards, and emotional tone?",
    options: [
      "User Experience Requirements",
      "Functional Requirements",
      "Organisational Requirements",
      "Non-Functional Requirements"
    ],
    correctAnswer: 0,
    explanation: "User Experience Requirements describe qualities of the interaction itself, such as learnability, aesthetic standards, and emotional tone.\n\nFunctional Requirements instead describe what the system must do, not the emotional or aesthetic quality of interacting with it.\n\nOrganisational Requirements instead describe business or legal constraints, not the emotional or aesthetic quality of interaction.\n\nNon-Functional Requirements instead describe measurable performance and reliability, not qualities like emotional tone specifically."
  },
  {
    id: "csc306_ch5_136",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The 'How Might We' frame reframes user problems as what?",
    options: [
      "Design opportunities",
      "Legal liabilities",
      "Marketing campaigns",
      "Hardware specifications"
    ],
    correctAnswer: 0,
    explanation: "The How Might We frame reframes user problems as design opportunities, broad enough to allow creativity, specific enough to be actionable, and inviting collaboration.\n\nLegal liabilities is not how HMW questions are framed; they concern design opportunity, not legal risk framing.\n\nMarketing campaigns is not how HMW questions are framed; they concern design opportunity, not promotional planning.\n\nHardware specifications is not how HMW questions are framed; they concern design opportunity, not technical specification."
  },
  {
    id: "csc306_ch5_137",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which component of a good design brief asks 'why does this problem exist,' referring to the underlying cause uncovered by research?",
    options: [
      "The insight",
      "The user",
      "The need",
      "The constraints"
    ],
    correctAnswer: 0,
    explanation: "The insight asks why the problem exists, the 'because' behind the underlying cause that research uncovered.\n\nThe user instead asks who specifically the design is for, referencing a persona by name, not the cause of the problem.\n\nThe need instead asks what the person is trying to accomplish, framed as a goal, not the cause of the problem.\n\nThe constraints instead asks what the solution must work within, not the cause of the problem."
  },
  {
    id: "csc306_ch5_138",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which component of a good design brief asks what technical, business, legal, or user capability limits the solution must work within?",
    options: [
      "The constraints",
      "The insight",
      "The problem",
      "The need"
    ],
    correctAnswer: 0,
    explanation: "The constraints component asks what the solution must work within, technical, business, legal, or user capability limits.\n\nThe insight instead asks why the problem exists, not what limits the solution.\n\nThe problem instead asks what currently gets in the way, not what limits a proposed solution.\n\nThe need instead asks what the person is trying to accomplish, not what limits a proposed solution."
  },
  {
    id: "csc306_ch5_139",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a component of a design brief?",
    options: [
      "The user component references a specific persona by name, designing for someone, not everyone",
      "The constraints component asks what currently gets in the way of the user achieving their goal",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The user component referencing a specific persona by name, designing for someone rather than everyone, is stated directly. Asking what currently gets in the way of the goal is instead the definition of the problem component, not the constraints component, which asks what technical, business, or legal limits apply. Since only the user statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_140",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is an accurate description of a user research method?",
    options: [
      "Diary Studies capture behaviour across time with less recall bias, since participants record in the moment",
      "Contextual Inquiry observes real behaviour in a user's actual environment, revealing workarounds",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Diary Studies capture behaviour across time with less recall bias, since participants record in the moment. Contextual Inquiry separately observes real behaviour in a user's actual environment, revealing workarounds and informal practices. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch5_141",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Designers are not users. This fact is described as both obvious and consistently what?",
    options: [
      "Forgotten",
      "Celebrated",
      "Legislated",
      "Automated"
    ],
    correctAnswer: 0,
    explanation: "The material states that designers are not users, and this fact is both obvious and consistently forgotten, which is why research is necessary.\n\nCelebrated is not the term used; the material frames this fact as a recurring oversight, not something to be celebrated.\n\nLegislated is not the term used; the material frames this as a cognitive and process failure, not a legal matter.\n\nAutomated is not the term used; the fact concerns a human tendency to forget, not a process that gets automated."
  },
  {
    id: "csc306_ch5_142",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Good research regularly reveals that the question being solved is the wrong one. Finding this in a research session is described as being how much less costly than finding it post-launch?",
    options: [
      "Far less costly",
      "Exactly the same cost",
      "Ten times more costly",
      "It has no cost implication either way"
    ],
    correctAnswer: 0,
    explanation: "Finding that the wrong question is being solved during a research session is described as far less costly than finding this out post-launch.\n\nClaiming exactly the same cost contradicts the entire premise of front-loading research to reduce cost, described throughout this material.\n\nClaiming it is ten times more costly reverses the direction of the stated cost relationship; research-stage discovery is cheaper, not more expensive.\n\nClaiming no cost implication at all contradicts the explicit framing of research as reducing costly late-stage surprises."
  },
  {
    id: "csc306_ch5_143",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Personas are described as not being a made-up character, but what instead?",
    options: [
      "A composite portrait built from real research data",
      "A purely fictional character created for entertainment",
      "A legal document required for product compliance",
      "A random selection of one single real user's exact profile"
    ],
    correctAnswer: 0,
    explanation: "A persona is described as a composite portrait built from real research data, not a made-up character invented without basis.\n\nA purely fictional entertainment character directly contradicts the description of a persona as grounded in real research data.\n\nA legal compliance document is not how a persona is described in this material.\n\nA random selection of one exact real user's profile misrepresents a persona, which is a composite built from patterns across research, not one individual's literal profile."
  },
  {
    id: "csc306_ch5_144",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "A design brief is described as not being a specification, but instead what kind of statement?",
    options: [
      "A problem statement that liberates the designer",
      "A binding legal contract between client and designer",
      "A finished visual mockup of the final product",
      "A line-by-line list of required code functions"
    ],
    correctAnswer: 0,
    explanation: "A design brief is described as not a specification, but a problem statement that liberates the designer to explore solutions.\n\nA binding legal contract is not how a design brief is described in this material.\n\nA finished visual mockup contradicts the description of a brief as a problem statement, not a completed design artefact.\n\nA line-by-line list of code functions describes a technical specification, the opposite of what a design brief is described as being."
  },
  {
    id: "csc306_ch5_145",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "A well-conducted interview, described as the qualitative core of research, reveals what no survey can?",
    options: [
      "How people actually think",
      "The exact market price of a product",
      "The precise number of competitors in a market",
      "The legal ownership structure of a company"
    ],
    correctAnswer: 0,
    explanation: "A well-conducted interview reveals how people actually think, something no survey can capture in the same depth.\n\nMarket pricing is a business detail unrelated to what interviews are described as uniquely revealing.\n\nCompetitor counts are a business detail unrelated to what interviews are described as uniquely revealing.\n\nLegal ownership structure is a business detail unrelated to what interviews are described as uniquely revealing."
  },
  {
    id: "csc306_ch5_146",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "A single research method, used alone, is described as sufficient to capture the full picture of user behaviour.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. No single method captures the full picture, since each reveals a different layer of user behaviour, which is why methods like surveys, contextual inquiry, and diary studies are used in combination."
  },
  {
    id: "csc306_ch5_147",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_148",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_149",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_150",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_151",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_152",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_153",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_154",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_155",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_156",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_157",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_158",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_159",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_160",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_161",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_162",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_163",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_164",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_165",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_166",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_167",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_168",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_169",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_170",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_171",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_172",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_173",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_174",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_175",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_176",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_177",
    course: "CSC 306",
    chapter: "Chapter 5",
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
    id: "csc306_ch5_178",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is a recommended step when testing a prototype with users?",
    options: [
      "Ask open questions during the debrief, such as 'What was surprising?'",
      "Guide the user through every step to prevent any mistakes",
      "Avoid recording any notes until after the entire study concludes",
      "Skip the warm-up and go directly into the hardest task first"
    ],
    correctAnswer: 0,
    explanation: "Asking open questions during the debrief, such as 'What was surprising?', is a recommended step, while avoiding leading the participant.\n\nGuiding the user through every step to prevent mistakes contradicts the instruction to observe silently and resist the urge to help.\n\nAvoiding notes until the study concludes is not a recommended practice; observing and recording moments of confusion as they happen is emphasized.\n\nSkipping straight to the hardest task is not the recommended structure; usability testing structures typically build up from warm-up and task presentation."
  },
  {
    id: "csc306_ch5_179",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Per the Nielsen 2000 statistic cited, roughly what percentage of usability problems are found by testing with just 5 users?",
    options: [
      "85%", "25%", "50%", "99%"
    ],
    correctAnswer: 0,
    explanation: "The Nielsen 2000 statistic cited states that 85% of usability problems are found by testing with just 5 users.\n\n25% substantially understates the cited figure for this usability testing statistic.\n\n50% also understates the cited figure for this usability testing statistic.\n\n99% overstates the cited figure for this usability testing statistic."
  },
  {
    id: "csc306_ch5_180",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which reason evaluation matters states that data from testing gives you something to show stakeholders who want to change something that already works?",
    options: [
      "Evaluation protects the design decision",
      "Design assumptions fail on contact with users",
      "Usability problems compound",
      "It drives the iteration cycle"
    ],
    correctAnswer: 0,
    explanation: "Evaluation protects the design decision, since data from testing gives you something to show stakeholders who want to change something that works, with evidence beating opinion.\n\nDesign assumptions fail on contact with users instead concerns discovering what seems obvious to a designer is not obvious to a user, a different reason.\n\nUsability problems compound instead concerns how confused users create errors that breed workarounds, a different reason.\n\nIt drives the iteration cycle instead concerns evaluation being the engine of improvement, a different reason from defending a decision to stakeholders."
  },
  {
    id: "csc306_ch5_181",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which evaluation method is described as user-based and formative, where real users attempt real tasks, called the gold standard for discovering usability problems?",
    options: [
      "Usability Testing",
      "Heuristic Evaluation",
      "Cognitive Walkthrough",
      "A/B Testing"
    ],
    correctAnswer: 0,
    explanation: "Usability Testing is user-based and formative, where real users attempt real tasks, described as the gold standard for discovering usability problems.\n\nHeuristic Evaluation instead is expert-based and formative, with trained evaluators inspecting against principles, not real users attempting tasks.\n\nCognitive Walkthrough instead is expert-based and formative, simulating a user's thought process, not real users performing tasks.\n\nA/B Testing instead is user-based but summative, comparing two versions rather than discovering problems through direct task attempts."
  },
  {
    id: "csc306_ch5_182",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which evaluation method is expert-based and formative, involving trained evaluators inspecting an interface against a set of usability principles?",
    options: [
      "Heuristic Evaluation",
      "Usability Testing",
      "A/B Testing",
      "SUS / UMUX"
    ],
    correctAnswer: 0,
    explanation: "Heuristic Evaluation is expert-based and formative, with trained evaluators inspecting an interface against a set of usability principles.\n\nUsability Testing instead is user-based, with real users attempting tasks, not experts inspecting against principles.\n\nA/B Testing instead is user-based and summative, comparing two versions, not expert inspection.\n\nSUS / UMUX instead is user-based and summative, a standardised questionnaire, not expert inspection."
  },
  {
    id: "csc306_ch5_183",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which evaluation method is user-based and summative, comparing two versions shown to different users simultaneously by comparing performance metrics?",
    options: [
      "A/B Testing",
      "Heuristic Evaluation",
      "Cognitive Walkthrough",
      "Think-Aloud Protocol"
    ],
    correctAnswer: 0,
    explanation: "A/B Testing is user-based and summative, showing two versions to different users simultaneously and comparing performance metrics.\n\nHeuristic Evaluation instead is expert-based and formative, not a comparison of two live versions with users.\n\nCognitive Walkthrough instead is expert-based and formative, simulating a user's thought process, not a live comparison test.\n\nThink-Aloud Protocol instead is user-based but formative, having users narrate their thoughts, not comparing two versions."
  },
  {
    id: "csc306_ch5_184",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the usability testing process, which step involves briefing the participant, obtaining informed consent, and reassuring them they are testing the system, not themselves?",
    options: [
      "Welcome & consent",
      "Warm-up questions",
      "Task completion",
      "Post-session debrief"
    ],
    correctAnswer: 0,
    explanation: "Welcome & consent involves briefing the participant, obtaining informed consent for recording, and reassuring them they are testing the system, not themselves.\n\nWarm-up questions instead asks about background and technology habits, a step after the initial welcome and consent.\n\nTask completion instead presents realistic tasks one at a time, a later step than the initial welcome.\n\nPost-session debrief instead asks open questions and completes questionnaires, the final step, not the opening one."
  },
  {
    id: "csc306_ch5_185",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the usability testing process, which step prompts participants to verbalise their thinking and expectations as they interact?",
    options: [
      "Think-aloud narration",
      "Welcome & consent",
      "Warm-up questions",
      "Post-session debrief"
    ],
    correctAnswer: 0,
    explanation: "Think-aloud narration prompts participants to verbalise their thinking and expectations as they interact, revealing assumptions and mental models in real time.\n\nWelcome & consent instead is the opening step of briefing and obtaining consent, not narration during a task.\n\nWarm-up questions instead asks about background and habits, a step before tasks begin, not narration during them.\n\nPost-session debrief instead asks open questions after the task is complete, not narration during the task itself."
  },
  {
    id: "csc306_ch5_186",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which mode of usability testing is scalable to hundreds of participants and lower cost per session, but offers no ability to probe or clarify?",
    options: [
      "Unmoderated",
      "Moderated",
      "Contextual",
      "Longitudinal"
    ],
    correctAnswer: 0,
    explanation: "Unmoderated testing is scalable to hundreds of participants and lower cost per session, but offers no ability to probe or clarify responses.\n\nModerated testing instead allows real-time clarification and rich qualitative data, but is time-intensive with typically smaller sample sizes.\n\nContextual is not one of the two named usability testing modes in this material; it instead describes a separate research method.\n\nLongitudinal is not one of the two named usability testing modes in this material; it instead describes diary study research."
  },
  {
    id: "csc306_ch5_187",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which mode of usability testing offers rich qualitative data and real-time clarification, but is time-intensive and may be biased by facilitator presence?",
    options: [
      "Moderated",
      "Unmoderated",
      "Automated",
      "Remote-only"
    ],
    correctAnswer: 0,
    explanation: "Moderated testing offers rich qualitative data and real-time clarification, but is time-intensive to run and analyse, and facilitator presence may bias results.\n\nUnmoderated testing instead scales to hundreds of participants at lower cost, but with no ability to probe or clarify, the opposite tradeoff.\n\nAutomated is not one of the two named usability testing modes in this material.\n\nRemote-only is not one of the two named usability testing modes in this material; unmoderated testing is the closer match but not the exact term used."
  },
  {
    id: "csc306_ch5_188",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the heuristic evaluation process, why does each evaluator inspect the interface alone, typically for 1 to 2 hours?",
    options: [
      "Independence prevents anchoring bias",
      "It is a legal requirement in most jurisdictions",
      "Group inspection is technically impossible to arrange",
      "Solo inspection is always faster than group inspection"
    ],
    correctAnswer: 0,
    explanation: "Each evaluator inspects the interface alone because independence prevents anchoring bias, ensuring findings are not skewed by hearing another evaluator's opinion first.\n\nLegal requirement is not the reasoning given for independent evaluation in this material.\n\nGroup inspection being technically impossible is not the reasoning given; the debrief stage explicitly involves a group session later.\n\nSpeed alone is not the stated reasoning; the explicit reason given is avoiding anchoring bias."
  },
  {
    id: "csc306_ch5_189",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "On Nielsen's Severity Scale for heuristic evaluation, which rating represents a catastrophic problem where users cannot complete the primary task, a release-blocker?",
    options: [
      "4", "1", "2", "0"
    ],
    correctAnswer: 0,
    explanation: "A rating of 4 on Nielsen's Severity Scale represents a catastrophic problem, where users cannot complete the primary task, making it a release-blocker.\n\nA rating of 1 instead represents a cosmetic-only problem, fixed if time allows, far less severe than catastrophic.\n\nA rating of 2 instead represents a minor problem causing friction that users can recover from unaided.\n\nA rating of 0 instead means evaluators disagree that this is a usability problem at all."
  },
  {
    id: "csc306_ch5_190",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "On Nielsen's Severity Scale, a rating of 3 represents which level of problem?",
    options: [
      "Major problem, impeding task completion, which must be fixed before release",
      "Cosmetic only, fixed if time allows",
      "Not a problem at all, disagreed upon by evaluators",
      "Catastrophic, a release-blocker"
    ],
    correctAnswer: 0,
    explanation: "A rating of 3 represents a major problem that impedes task completion and must be fixed before release, one step below catastrophic.\n\nCosmetic only, fixed if time allows, is instead a rating of 1, a much less severe level than 3.\n\nNot a problem at all is instead a rating of 0, the lowest level on the scale.\n\nCatastrophic, a release-blocker, is instead a rating of 4, one level more severe than 3."
  },
  {
    id: "csc306_ch5_191",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "A cognitive walkthrough evaluates which specific usability quality: how easily a new user can figure out an interface without training?",
    options: [
      "Learnability",
      "Efficiency",
      "Memorability",
      "Error Recovery"
    ],
    correctAnswer: 0,
    explanation: "A cognitive walkthrough evaluates learnability, how easily a new user can figure out an interface without training, by asking whether a typical user would know what to do next at each step.\n\nEfficiency instead concerns how quickly an already-learned task can be performed, not first-time figuring-out.\n\nMemorability instead concerns returning after a break, not a first-time new user's understanding.\n\nError Recovery instead concerns recovering from mistakes, not first-time understanding of what to do."
  },
  {
    id: "csc306_ch5_192",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In a cognitive walkthrough, which of the four questions asks whether the button, link, or affordance is visible, and whether visual hierarchy directs attention to it?",
    options: [
      "Will the user notice the correct control?",
      "Will the user know they need to perform this action?",
      "Will the user understand that the control does what they need?",
      "Will the user get feedback that the action succeeded?"
    ],
    correctAnswer: 0,
    explanation: "Will the user notice the correct control asks whether the button, link, or affordance is visible, and whether visual hierarchy directs attention to it.\n\nWill the user know they need to perform this action instead asks whether the action is discoverable at all, a step before noticing the specific control.\n\nWill the user understand that the control does what they need instead asks whether the label communicates function clearly, a step after noticing the control.\n\nWill the user get feedback that the action succeeded instead asks whether the system confirms the outcome, a step after the control is used."
  },
  {
    id: "csc306_ch5_193",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In a cognitive walkthrough, which of the four questions asks whether the system confirms an action in a way the user will notice and correctly interpret?",
    options: [
      "Will the user get feedback that the action succeeded?",
      "Will the user know they need to perform this action?",
      "Will the user notice the correct control?",
      "Will the user understand that the control does what they need?"
    ],
    correctAnswer: 0,
    explanation: "Will the user get feedback that the action succeeded asks whether the system confirms the action in a way the user will notice and correctly interpret, the final question in the sequence.\n\nWill the user know they need to perform this action instead asks about discoverability of the action itself, the first question in the sequence.\n\nWill the user notice the correct control instead asks about visibility of the specific control, the second question in the sequence.\n\nWill the user understand that the control does what they need instead asks about label clarity, the third question in the sequence."
  },
  {
    id: "csc306_ch5_194",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "What is the strength of a cognitive walkthrough, compared to expert-based heuristic evaluation?",
    options: [
      "It reveals learnability gaps that heuristic evaluation misses",
      "It always requires zero time or resources to conduct",
      "It replaces the need for any user testing forever",
      "It only applies to systems with more than 1 million users"
    ],
    correctAnswer: 0,
    explanation: "A cognitive walkthrough's strength is that it reveals learnability gaps that expert-based heuristic evaluation misses, though its limit is validity only for new users on well-defined tasks.\n\nRequiring zero time or resources contradicts the described process, which still requires evaluators stepping through tasks methodically.\n\nReplacing all future user testing contradicts the stated limitation that it is only valid for new users on well-defined tasks, not a full substitute.\n\nA user-count threshold of one million is not mentioned anywhere as a condition for using this method."
  },
  {
    id: "csc306_ch5_195",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The System Usability Scale, developed by John Brooke, uses ten alternating-polarity items on what kind of scale?",
    options: [
      "A 5-point Likert scale",
      "A 3-point Likert scale",
      "A 10-point Likert scale",
      "A pass/fail binary scale"
    ],
    correctAnswer: 0,
    explanation: "SUS uses ten alternating-polarity items on a 5-point Likert scale, with scores combined to produce a final result on a 0 to 100 scale.\n\nA 3-point Likert scale understates the granularity of the scale actually used for each SUS item.\n\nA 10-point Likert scale overstates the granularity of the scale actually used for each SUS item.\n\nA pass/fail binary scale contradicts the graded, multi-point nature of SUS items."
  },
  {
    id: "csc306_ch5_196",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under the SUS score interpretation given here, a score in which range is rated 'Good'?",
    options: [
      "68-84",
      "0-50",
      "51-67",
      "85-100"
    ],
    correctAnswer: 0,
    explanation: "A score of 68 to 84 is rated Good in this SUS interpretation scale.\n\n0 to 50 is instead rated Poor, a much lower range than Good.\n\n51 to 67 is instead rated OK or Marginal, one band below Good.\n\n85 to 100 is instead rated Excellent, one band above Good."
  },
  {
    id: "csc306_ch5_197",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The UMUX questionnaire uses four items on what kind of scale, and is described as better suited to which context than SUS?",
    options: [
      "A 7-point Likert scale, better suited to mobile contexts",
      "A 3-point Likert scale, better suited to desktop-only contexts",
      "A 100-point scale, better suited to enterprise software only",
      "A pass/fail scale, better suited to games only"
    ],
    correctAnswer: 0,
    explanation: "UMUX uses four items, two positive and two negative, on a 7-point Likert scale, and is described as faster to complete and better suited to mobile contexts than SUS.\n\nA 3-point scale understates the actual scale granularity used by UMUX items.\n\nA 100-point scale overstates the actual per-item scale used; the combined SUS score uses a 0-100 range, not each individual item.\n\nA pass/fail scale contradicts the graded, multi-point nature of UMUX items."
  },
  {
    id: "csc306_ch5_198",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the four UMUX items is phrased as a negative statement?",
    options: [
      "Using this system is a frustrating experience",
      "This system's capabilities meet my requirements",
      "This system is easy to use",
      "I would recommend this system to a friend"
    ],
    correctAnswer: 0,
    explanation: "'Using this system is a frustrating experience' is one of the two negatively phrased UMUX items, alongside a statement about time spent correcting errors.\n\n'This system's capabilities meet my requirements' is instead one of the two positively phrased UMUX items.\n\n'This system is easy to use' is instead one of the two positively phrased UMUX items.\n\n'I would recommend this system to a friend' is not one of the four UMUX items listed in this material."
  },
  {
    id: "csc306_ch5_199",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of user feedback data is described as the most reliable, since it is observed rather than reported, including clicks, paths, and errors?",
    options: [
      "Behavioural data",
      "Verbal data",
      "Physiological data",
      "Quantitative data"
    ],
    correctAnswer: 0,
    explanation: "Behavioural data, such as clicks, paths, time on task, and errors, is described as the most reliable because it is observed, not reported.\n\nVerbal data instead is described as rich but filtered through self-perception, less reliable than direct observation.\n\nPhysiological data instead is described as objective but expensive and requiring careful interpretation, a different category from general behavioural observation.\n\nQuantitative data instead is described as comparable and trackable, but able to hide the 'why' behind a number, a different concern than reliability."
  },
  {
    id: "csc306_ch5_200",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of user feedback data includes eye tracking, pupil dilation, and heart rate, described as objective but expensive and requiring careful interpretation?",
    options: [
      "Physiological data",
      "Behavioural data",
      "Verbal data",
      "Quantitative data"
    ],
    correctAnswer: 0,
    explanation: "Physiological data includes eye tracking, pupil dilation, heart rate variability, and galvanic skin response, objective but expensive and requiring careful interpretation.\n\nBehavioural data instead includes clicks, paths, and errors, a more commonly accessible and less costly category than physiological sensors.\n\nVerbal data instead includes think-aloud narration and interview responses, not sensor-based physiological measurement.\n\nQuantitative data instead includes SUS scores and completion rates, not raw physiological sensor readings."
  },
  {
    id: "csc306_ch5_201",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which analysis pitfall is illustrated by a user saying 'I don't like the button colour' when the real problem is that the button is invisible?",
    options: [
      "Fixing symptoms",
      "Confirmation bias",
      "Anecdote as evidence",
      "Ignoring positive findings"
    ],
    correctAnswer: 0,
    explanation: "Fixing symptoms is illustrated by a user complaining about button colour when the real problem is that the button is invisible, meaning the cause, not the complaint, should be solved.\n\nConfirmation bias instead concerns noticing data that confirms existing decisions and discounting what contradicts them, a different pitfall.\n\nAnecdote as evidence instead concerns treating one user's strong opinion as a finding, a different pitfall than misdiagnosing a cause.\n\nIgnoring positive findings instead concerns discounting evidence of what works, a different pitfall than misdiagnosing a complaint's cause."
  },
  {
    id: "csc306_ch5_202",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which analysis pitfall is described as noticing data that confirms your existing design decisions while discounting what contradicts them?",
    options: [
      "Confirmation bias",
      "Fixing symptoms",
      "Collecting without acting",
      "Anecdote as evidence"
    ],
    correctAnswer: 0,
    explanation: "Confirmation bias is noticing data that confirms your existing design decisions while discounting what contradicts them.\n\nFixing symptoms instead concerns solving a surface complaint rather than its underlying cause, a different pitfall.\n\nCollecting without acting instead concerns evaluation that never feeds back into design, a different pitfall than biased interpretation.\n\nAnecdote as evidence instead concerns treating one user's opinion as a general finding, a different pitfall than favoring confirming data."
  },
  {
    id: "csc306_ch5_203",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the Impact versus Effort prioritisation framework, which quadrant represents high-impact, low-effort changes that should be prioritised immediately?",
    options: [
      "Fix now",
      "Plan carefully",
      "Easy but low-value",
      "Avoid or park"
    ],
    correctAnswer: 0,
    explanation: "Fix now represents high-impact, low-effort changes, which should be prioritised immediately.\n\nPlan carefully instead represents high-impact but high-effort changes, requiring proper resourcing rather than immediate action.\n\nEasy but low-value instead represents low-effort, low-impact changes, addressed only in quiet periods, not prioritised immediately.\n\nAvoid or park instead represents high-effort, low-impact changes, which should be deprioritised or dropped, not fixed immediately."
  },
  {
    id: "csc306_ch5_204",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the Impact versus Effort framework, which quadrant represents high-effort, low-impact changes that should be avoided or dropped?",
    options: [
      "Avoid or park",
      "Fix now",
      "Plan carefully",
      "Easy but low-value"
    ],
    correctAnswer: 0,
    explanation: "Avoid or park represents high-effort, low-impact changes, which should be deprioritised or dropped entirely.\n\nFix now instead represents high-impact, low-effort changes, prioritised immediately, the opposite quadrant.\n\nPlan carefully instead represents high-impact, high-effort changes, requiring scheduling with proper resourcing, not simple avoidance.\n\nEasy but low-value instead represents low-effort, low-impact changes, addressed in quiet periods, not avoided or dropped outright."
  },
  {
    id: "csc306_ch5_205",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In closing the loop on iterative improvement, why must re-testing specifically target the changed interactions in the next round?",
    options: [
      "Fixes sometimes introduce new problems",
      "It is required by international law in every jurisdiction",
      "Changed interactions never need to be tested again",
      "Only the original untouched areas need retesting"
    ],
    correctAnswer: 0,
    explanation: "Re-testing must specifically target the changed interactions because fixes sometimes introduce new problems, and the changed areas are where this is most likely to appear.\n\nInternational legal requirement is not the reasoning given for this practice in this material.\n\nClaiming changed interactions never need retesting directly contradicts the explicit instruction to re-test them.\n\nClaiming only untouched areas need retesting reverses the actual guidance, which specifically targets the changed areas."
  },
  {
    id: "csc306_ch5_206",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes an evaluation method or a related concept?",
    options: [
      "A heuristic evaluation involves ten alternating-polarity items on a 5-point scale",
      "A/B testing is expert-based and formative, simulating a new user's thought process",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Ten alternating-polarity items on a 5-point scale instead describes the SUS questionnaire, not heuristic evaluation, which has trained evaluators inspect against usability principles. A/B testing is instead user-based and summative, comparing two versions with real users, not an expert simulation of a new user's thought process, which describes a cognitive walkthrough. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch5_207",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Building something and evaluating it are described as the same discipline, so mastering one automatically means mastering the other.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Building something and evaluating it are described as not the same discipline, and a team needs both, since being skilled at construction does not guarantee skill at evaluation."
  },
  {
    id: "csc306_ch5_208",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Evaluation that never feeds back into design is described as wasted effort, since every session must end with what?",
    options: [
      "Prioritised next steps",
      "A signed non-disclosure agreement",
      "A public press release",
      "An entirely new research team"
    ],
    correctAnswer: 0,
    explanation: "Collecting without acting describes evaluation that never feeds back into design as wasted effort, and every session must end with prioritised next steps.\n\nA signed non-disclosure agreement is not the described requirement for closing an evaluation session.\n\nA public press release is not the described requirement for closing an evaluation session.\n\nAn entirely new research team is not the described requirement for closing an evaluation session."
  },
  {
    id: "csc306_ch5_209",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the accessible-to-inclusive progression, which term is described as one design that works for everyone, often a theoretical ideal that flattens real diversity?",
    options: [
      "Universal Design",
      "Accessible",
      "Inclusive Design",
      "Accommodation"
    ],
    correctAnswer: 0,
    explanation: "Universal Design is one design that works for everyone, often a theoretical ideal that flattens real diversity.\n\nAccessible instead describes something usable by people with disabilities, often via workarounds or separate interfaces, not one universal design.\n\nInclusive Design instead describes multiple designs for multiple needs, recognising that no single solution fits all variation, the opposite of one universal design.\n\nAccommodation instead describes retrofitting accessibility after the fact, not a single upfront universal design."
  },
  {
    id: "csc306_ch5_210",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which term describes retrofitting accessibility after the fact, adding cost and creating separate experiences that signal otherness?",
    options: [
      "Accommodation",
      "Inclusion",
      "Universal Design",
      "Inclusive Design"
    ],
    correctAnswer: 0,
    explanation: "Accommodation describes retrofitting accessibility after the fact, which adds cost, creates separate experiences, and signals otherness.\n\nInclusion instead describes building for diversity from the first decision, cheaper and better for everyone, the opposite of a late retrofit.\n\nUniversal Design instead describes one design working for everyone, a different concept from a late add-on fix.\n\nInclusive Design instead describes multiple designs for multiple needs from the start, not a late retrofit."
  },
  {
    id: "csc306_ch5_211",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which model of disability holds that disability is created by barriers in the environment, illustrated by a wheelchair user being disabled by stairs, not by their chair?",
    options: [
      "The social model",
      "The medical model",
      "The universal model",
      "The organisational model"
    ],
    correctAnswer: 0,
    explanation: "The social model holds that disability is created by barriers in the environment, illustrated by a wheelchair user being disabled by stairs, not by their chair.\n\nThe medical model instead holds that disability is a problem located with the person, the opposite framing from environmental barriers.\n\nThe universal model is not one of the two named disability models in this material.\n\nThe organisational model is not one of the two named disability models in this material."
  },
  {
    id: "csc306_ch5_212",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which category of disability is illustrated by a broken arm preventing conventional keyboard or mouse use, or an eye infection causing light sensitivity?",
    options: [
      "Temporary",
      "Permanent",
      "Situational",
      "Cognitive"
    ],
    correctAnswer: 0,
    explanation: "Temporary disability is illustrated by a broken arm preventing conventional keyboard or mouse use, or an eye infection causing light sensitivity, conditions expected to resolve.\n\nPermanent disability instead is illustrated by conditions like blindness or paralysis, not conditions expected to resolve.\n\nSituational disability instead is illustrated by conditions like bright sunlight or a noisy environment, not a bodily injury.\n\nCognitive is not one of the three named disability duration categories in this material; it instead names a type of impairment."
  },
  {
    id: "csc306_ch5_213",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which category of disability is illustrated by having one hand occupied carrying a child, or being in a noisy environment where audio cues are inaudible?",
    options: [
      "Situational",
      "Permanent",
      "Temporary",
      "Sensory"
    ],
    correctAnswer: 0,
    explanation: "Situational disability is illustrated by having one hand occupied, such as carrying a child, or being in a noisy environment where audio cues are inaudible.\n\nPermanent disability instead is illustrated by conditions like blindness or deafness, not a passing situational constraint.\n\nTemporary disability instead is illustrated by conditions like a broken arm or post-surgery recovery, not an ongoing situational constraint.\n\nSensory is not one of the three named disability duration categories in this material; it instead names a type of impairment."
  },
  {
    id: "csc306_ch5_214",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Per the figure cited, roughly what percentage of the population is estimated to have dyslexia?",
    options: [
      "About 15-20%",
      "About 1-2%",
      "About 40-50%",
      "About 90%"
    ],
    correctAnswer: 0,
    explanation: "Dyslexia is estimated to affect roughly 15-20% of the population, according to the figure cited in this material.\n\nAbout 1-2% is instead the figure cited for diagnosed autism spectrum conditions, not dyslexia.\n\nAbout 40-50% substantially overstates the cited figure for dyslexia.\n\nAbout 90% vastly overstates the cited figure for dyslexia."
  },
  {
    id: "csc306_ch5_215",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which cognitive diversity condition is associated with sustained attention, task-switching, and working memory under distraction, affecting roughly 5-7% of adults?",
    options: [
      "ADHD",
      "Dyslexia",
      "Autism Spectrum",
      "Anxiety"
    ],
    correctAnswer: 0,
    explanation: "ADHD is associated with sustained attention, task-switching, and working memory under distraction, affecting roughly 5-7% of adults, with minimising notifications recommended as a design response.\n\nDyslexia instead concerns reading, spelling, and processing written text at speed, affecting roughly 15-20% of the population.\n\nAutism Spectrum instead concerns sensory sensitivity and social inference, affecting roughly 1-2% diagnosed.\n\nAnxiety instead concerns decision-making under uncertainty and fear of irreversible actions, affecting roughly 18% of adults at any point."
  },
  {
    id: "csc306_ch5_216",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which cognitive diversity condition is associated with sensory sensitivity, social inference, change management, and literal interpretation?",
    options: [
      "Autism Spectrum",
      "ADHD",
      "Dyslexia",
      "Anxiety"
    ],
    correctAnswer: 0,
    explanation: "Autism Spectrum is associated with sensory sensitivity, social inference, change management, and literal interpretation, with avoiding flashing animations recommended as a design response.\n\nADHD instead concerns sustained attention and task-switching, not sensory sensitivity to flashing or literal interpretation.\n\nDyslexia instead concerns reading and spelling speed, not sensory sensitivity or literal interpretation.\n\nAnxiety instead concerns decision-making under uncertainty, not sensory sensitivity or literal interpretation."
  },
  {
    id: "csc306_ch5_217",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which cognitive diversity condition is associated with decision-making under uncertainty, error recovery, and fear of irreversible actions, affecting roughly 18% of adults at any point in time?",
    options: [
      "Anxiety",
      "Autism Spectrum",
      "ADHD",
      "Dyslexia"
    ],
    correctAnswer: 0,
    explanation: "Anxiety is associated with decision-making under uncertainty, error recovery, and fear of irreversible actions, affecting roughly 18% of adults at any point in time.\n\nAutism Spectrum instead concerns sensory sensitivity and literal interpretation, not fear of irreversible actions specifically.\n\nADHD instead concerns sustained attention and task-switching, not fear of irreversible actions specifically.\n\nDyslexia instead concerns reading and spelling speed, not fear of irreversible actions."
  },
  {
    id: "csc306_ch5_218",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which design recommendation is given specifically for dyslexia, concerning justified text and font choice?",
    options: [
      "Avoid justified text, since uneven spacing worsens tracking, and use dyslexia-friendly fonts",
      "Use only fully justified text to create a cleaner visual block",
      "Avoid all sans-serif fonts under every circumstance",
      "Use the smallest possible font size to fit more content"
    ],
    correctAnswer: 0,
    explanation: "For dyslexia, the recommendation is to avoid justified text, since uneven spacing worsens tracking, and to use dyslexia-friendly fonts such as Open Sans or Lexie Readable.\n\nUsing only fully justified text is the opposite of the recommendation, which specifically warns against justified text.\n\nAvoiding all sans-serif fonts under every circumstance is not the recommendation given; specific dyslexia-friendly fonts are recommended instead of a blanket ban.\n\nUsing the smallest possible font size contradicts general accessibility guidance and is not the dyslexia-specific recommendation given here."
  },
  {
    id: "csc306_ch5_219",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which design recommendation is given specifically for anxiety, concerning error messages?",
    options: [
      "Error messages must be reassuring, not alarming",
      "Error messages should always use bold red text with an alarm sound",
      "Error messages should be removed from the interface entirely",
      "Error messages should always require a phone call to support"
    ],
    correctAnswer: 0,
    explanation: "For anxiety, the recommendation is that error messages must be reassuring, not alarming, alongside confirming irreversible actions without over-confirming.\n\nBold red text with an alarm sound is the opposite of the reassuring tone recommended for users with anxiety.\n\nRemoving error messages entirely is not the recommendation; the guidance concerns tone, not removing necessary information.\n\nRequiring a phone call to support is not a recommendation given anywhere in this material."
  },
  {
    id: "csc306_ch5_220",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "WCAG AA requires what minimum colour contrast ratio for normal text?",
    options: [
      "4.5:1",
      "1:1",
      "10:1",
      "2:1"
    ],
    correctAnswer: 0,
    explanation: "WCAG AA requires a minimum colour contrast ratio of 4.5:1 for normal text, with 3:1 permitted for large text.\n\n1:1 would mean no contrast at all, far below the required minimum.\n\n10:1 substantially exceeds the AA minimum requirement, closer to exceeding AAA's 7:1 target.\n\n2:1 understates the AA minimum requirement given for normal text."
  },
  {
    id: "csc306_ch5_221",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "WCAG AAA, described as the ideal contrast level, requires what minimum ratio?",
    options: [
      "7:1",
      "1:1",
      "3:1",
      "4.5:1"
    ],
    correctAnswer: 0,
    explanation: "WCAG AAA is described as ideal with a minimum contrast ratio of 7:1, exceeding the AA minimum of 4.5:1.\n\n1:1 would mean no contrast at all, far below any WCAG requirement.\n\n3:1 is instead the AA minimum for large text specifically, lower than the AAA ideal.\n\n4.5:1 is instead the AA minimum for normal text, lower than the AAA ideal of 7:1."
  },
  {
    id: "csc306_ch5_222",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which visual accessibility guideline states that decorative images should get an empty alt attribute, while meaningful images need a descriptive one?",
    options: [
      "Text alternatives (alt text)",
      "Colour contrast",
      "Scalable text",
      "Colour as sole signal"
    ],
    correctAnswer: 0,
    explanation: "Text alternatives requires every meaningful image to have a descriptive alt attribute, while decorative images get an empty alt attribute, which screen readers skip automatically.\n\nColour contrast instead concerns ratio requirements like 4.5:1, not alt text for images.\n\nScalable text instead concerns users zooming to 200% or more without losing function, not alt text for images.\n\nColour as sole signal instead concerns never relying on colour alone to convey meaning, not alt text for images."
  },
  {
    id: "csc306_ch5_223",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which visual accessibility guideline recommends using relative units like rem or em instead of fixed pixels for font sizes?",
    options: [
      "Scalable text",
      "Colour contrast",
      "Text alternatives",
      "Colour as sole signal"
    ],
    correctAnswer: 0,
    explanation: "Scalable text recommends using relative units like rem or em instead of fixed pixels, so users can zoom to 200% or more without losing content or function.\n\nColour contrast instead concerns ratio requirements between text and background, not unit choice for font sizing.\n\nText alternatives instead concerns descriptive alt attributes for images, not font sizing units.\n\nColour as sole signal instead concerns not relying on colour alone to convey meaning, not font sizing units."
  },
  {
    id: "csc306_ch5_224",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which motor accessibility guideline requires visible keyboard focus outlines, warning never to suppress them without a better visual replacement?",
    options: [
      "Focus indicators",
      "Touch target size",
      "Timing and motion",
      "Single-switch access"
    ],
    correctAnswer: 0,
    explanation: "Focus indicators requires visible keyboard focus outlines for keyboard-only users, warning never to suppress them without providing a better visual replacement.\n\nTouch target size instead concerns minimum dimensions like 44x44pt, not the visibility of a focus outline.\n\nTiming and motion instead concerns avoiding precise timing requirements for actions, not focus outline visibility.\n\nSingle-switch access instead concerns navigating via a single switch that cycles through elements, not focus outline visibility."
  },
  {
    id: "csc306_ch5_225",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which motor accessibility guideline specifies a minimum touch target size of 44x44pt on Apple platforms and 48x48dp on Google platforms?",
    options: [
      "Touch target size",
      "Focus indicators",
      "Keyboard navigation",
      "Pointer target tolerance"
    ],
    correctAnswer: 0,
    explanation: "Touch target size specifies a minimum of 44x44pt on Apple and 48x48dp on Google, with larger always better and adequate spacing between adjacent targets.\n\nFocus indicators instead concerns visible keyboard focus outlines, not touch target dimensions.\n\nKeyboard navigation instead concerns reaching all elements via Tab order, not touch target dimensions.\n\nPointer target tolerance instead specifies a separate WCAG 2.5.8 minimum of 24x24 CSS pixels, a distinct, smaller requirement from the platform-specific touch target guidance."
  },
  {
    id: "csc306_ch5_226",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "WCAG 2.5.8 requires pointer targets to be at least what size in CSS pixels?",
    options: [
      "24x24",
      "1x1",
      "100x100",
      "48x48"
    ],
    correctAnswer: 0,
    explanation: "WCAG 2.5.8 requires pointer targets to be at least 24x24 CSS pixels, with drag-and-drop alternatives recommended for tasks needing precise pointer control.\n\n1x1 would be far too small to satisfy this WCAG requirement.\n\n100x100 substantially overstates the specific WCAG 2.5.8 minimum given.\n\n48x48 is instead the Google touch target guideline in device-independent pixels, a separate and larger figure from the WCAG 2.5.8 minimum."
  },
  {
    id: "csc306_ch5_227",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which motor accessibility guideline describes users who navigate via a single switch that cycles through elements, operated by chin, eye, or breath?",
    options: [
      "Single-switch access",
      "Touch target size",
      "Focus indicators",
      "Timing and motion"
    ],
    correctAnswer: 0,
    explanation: "Single-switch access describes users who navigate via a single switch cycling through interface elements, operated by chin, eye, or breath, requiring all functionality reachable in a logical sequential order.\n\nTouch target size instead concerns minimum tap dimensions, not single-switch scanning navigation.\n\nFocus indicators instead concerns visible keyboard focus outlines, not single-switch scanning navigation.\n\nTiming and motion instead concerns avoiding required precise timing, not single-switch scanning navigation."
  },
  {
    id: "csc306_ch5_228",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG conformance level is described as the minimum, removing the most severe barriers, and required for legal compliance in many jurisdictions?",
    options: [
      "Level A",
      "Level AA",
      "Level AAA",
      "Level AAAA"
    ],
    correctAnswer: 0,
    explanation: "Level A is the minimum WCAG conformance level, removing the most severe barriers and required for legal compliance in many jurisdictions.\n\nLevel AA is instead the standard target, covering the vast majority of users with disabilities, a higher bar than the minimum.\n\nLevel AAA is instead the highest level, not required universally, since some criteria cannot be met for all content types.\n\nLevel AAAA is not a real WCAG conformance level; WCAG defines only A, AA, and AAA."
  },
  {
    id: "csc306_ch5_229",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG conformance level is described as the standard target, covering the vast majority of users with disabilities, and required by most accessibility laws worldwide?",
    options: [
      "Level AA",
      "Level A",
      "Level AAA",
      "Level B"
    ],
    correctAnswer: 0,
    explanation: "Level AA is the standard target, covering the vast majority of users with disabilities and required by most accessibility laws worldwide.\n\nLevel A is instead the minimum level, removing only the most severe barriers, a lower bar than the standard target.\n\nLevel AAA is instead the highest level, not required universally, a higher bar than the standard target.\n\nLevel B is not a real WCAG conformance level; WCAG defines only A, AA, and AAA."
  },
  {
    id: "csc306_ch5_230",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG success criterion, 1.4.3 at level AA, requires a 4.5:1 ratio for body text and 3:1 for UI components and large text?",
    options: [
      "Contrast (minimum)",
      "Non-text content",
      "Keyboard",
      "Focus visible"
    ],
    correctAnswer: 0,
    explanation: "Contrast (minimum), success criterion 1.4.3 at level AA, requires a 4.5:1 ratio for body text and 3:1 for UI components and large text.\n\nNon-text content is instead success criterion 1.1.1 at level A, requiring alt text for images, not contrast ratios.\n\nKeyboard is instead success criterion 2.1.1 at level A, requiring operability without a mouse, not contrast ratios.\n\nFocus visible is instead success criterion 2.4.7 at level AA, requiring visible focus indicators, not contrast ratios."
  },
  {
    id: "csc306_ch5_231",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG success criterion requires every interactive element to be operable without a mouse, tested with Tab, Enter, and Space?",
    options: [
      "Keyboard (2.1.1)",
      "Contrast (minimum) (1.4.3)",
      "Non-text content (1.1.1)",
      "Name, role, value (4.1.2)"
    ],
    correctAnswer: 0,
    explanation: "Keyboard, success criterion 2.1.1 at level A, requires every interactive element to be operable without a mouse, tested with Tab, Enter, and Space.\n\nContrast (minimum) instead requires specific colour contrast ratios, not keyboard operability.\n\nNon-text content instead requires alt text for images, not keyboard operability.\n\nName, role, value instead requires accessible names, roles, and states via HTML or ARIA, not keyboard operability specifically."
  },
  {
    id: "csc306_ch5_232",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which assistive technology converts on-screen content to synthesised speech or Braille output, navigating by headings, landmarks, and links?",
    options: [
      "Screen Readers",
      "Switch Access",
      "Voice Control",
      "Eye Tracking"
    ],
    correctAnswer: 0,
    explanation: "Screen Readers convert on-screen content to synthesised speech or Braille output, navigating by headings, landmarks, and links, used by blind, low vision, and dyslexic users.\n\nSwitch Access instead is used by users with severe motor impairments who scan through elements with one or two inputs, not converting content to speech.\n\nVoice Control instead lets users speak commands or dictate text, not convert screen content to speech output.\n\nEye Tracking is not one of the three named assistive technologies discussed in this material's dedicated assistive technology section."
  },
  {
    id: "csc306_ch5_233",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which assistive technology requires visible, unique labels for all interactive elements, such as 'Submit' rather than 'Click here', since duplicate labels are indistinguishable by the system?",
    options: [
      "Voice Control",
      "Screen Readers",
      "Switch Access",
      "Eye Tracking"
    ],
    correctAnswer: 0,
    explanation: "Voice Control requires visible, unique labels for all interactive elements, such as 'Submit' rather than 'Click here', since two 'Learn more' links would be indistinguishable by voice.\n\nScreen Readers instead require semantic HTML and logical reading order, not specifically unique spoken labels for command matching.\n\nSwitch Access instead requires all functionality reachable in a logical sequential order, not unique spoken labels.\n\nEye Tracking is not one of the three named assistive technologies discussed in this material's dedicated assistive technology section."
  },
  {
    id: "csc306_ch5_234",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Roughly what percentage of accessibility issues are caught by automated audit tools, leaving the rest requiring human testing?",
    options: [
      "About 30%",
      "About 5%",
      "About 60%",
      "About 95%"
    ],
    correctAnswer: 0,
    explanation: "Automated tools are described as catching about 30% of accessibility issues, with the other 70% requiring human testing and judgement.\n\nAbout 5% substantially understates the cited figure for automated tool coverage.\n\nAbout 60% substantially overstates the cited figure for automated tool coverage.\n\nAbout 95% vastly overstates the cited figure for automated tool coverage."
  },
  {
    id: "csc306_ch5_235",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which accessibility testing method takes about 30 minutes per key flow, and involves unplugging the mouse to navigate with Tab, Shift+Tab, Enter, Space, and arrow keys?",
    options: [
      "Keyboard-only testing",
      "Automated audit tools",
      "Screen reader testing",
      "Testing with disabled users"
    ],
    correctAnswer: 0,
    explanation: "Keyboard-only testing takes about 30 minutes per key flow, unplugging the mouse and navigating with Tab, Shift+Tab, Enter, Space, and arrow keys.\n\nAutomated audit tools instead scan HTML quickly using software like Axe or WAVE, not a manual 30-minute keyboard walkthrough.\n\nScreen reader testing instead uses tools like NVDA and VoiceOver to test the auditory experience, not keyboard-only navigation testing.\n\nTesting with disabled users instead recruits participants with real impairments for standard usability sessions, a different method from a self-conducted keyboard walkthrough."
  },
  {
    id: "csc306_ch5_236",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which accessibility testing method is described as the most important and most underused, recruiting participants with visual, motor, cognitive, and hearing impairments?",
    options: [
      "Testing with disabled users",
      "Automated audit tools",
      "Keyboard-only testing",
      "Screen reader testing"
    ],
    correctAnswer: 0,
    explanation: "Testing with disabled users is described as the most important and most underused method, recruiting participants with real impairments to run standard usability sessions.\n\nAutomated audit tools instead only catch about 30% of issues and cannot capture the full picture that real user testing reveals.\n\nKeyboard-only testing instead is a useful developer self-check, but is described separately from recruiting actual disabled participants.\n\nScreen reader testing instead is a useful developer self-check using tools like NVDA, but is described separately from recruiting actual disabled participants."
  },
  {
    id: "csc306_ch5_237",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Per the WHO 2023 figure, roughly how many people are cited as living with disability globally?",
    options: [
      "1.3 billion",
      "13 million",
      "130 million",
      "13 billion"
    ],
    correctAnswer: 0,
    explanation: "The WHO 2023 figure cited is 1.3 billion people living with disability globally.\n\n13 million substantially understates the cited global figure.\n\n130 million also substantially understates the cited global figure.\n\n13 billion vastly overstates the cited global figure, exceeding the world's total population."
  },
  {
    id: "csc306_ch5_238",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The 'Purple Pound' figure of 274 billion pounds cited in the UK refers to what?",
    options: [
      "The annual spending power of disabled people in the UK",
      "The annual government budget for accessibility legislation",
      "The total revenue of assistive technology manufacturers worldwide",
      "The fine issued for accessibility law violations in the UK"
    ],
    correctAnswer: 0,
    explanation: "The Purple Pound figure of 274 billion pounds refers to the annual spending power of disabled people in the UK alone.\n\nGovernment accessibility legislation budget is not what this figure represents in this material.\n\nAssistive technology manufacturer revenue is not what this figure represents in this material.\n\nFines for legal violations are not what this figure represents in this material."
  },
  {
    id: "csc306_ch5_239",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which case-for-inclusive-design reason cites examples like voice control, closed captions, autocomplete, SMS, and email as originating in accessibility research?",
    options: [
      "Innovation driver",
      "Legal obligation",
      "Market expansion",
      "Future-proofing"
    ],
    correctAnswer: 0,
    explanation: "Innovation driver cites voice control, closed captions, autocomplete, SMS, and email as innovations that historically originated in accessibility research and now benefit everyone.\n\nLegal obligation instead cites laws like the ADA, Equality Act, and EN 301 549, not specific product innovations.\n\nMarket expansion instead concerns reaching a larger market by working for everyone, not the historical origin of specific technologies.\n\nFuture-proofing instead concerns aging populations and long-term durability, not the historical origin of specific technologies."
  },
  {
    id: "csc306_ch5_240",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which case-for-inclusive-design reason states that a product failing older users today will fail the majority of users in 20 years, as populations age?",
    options: [
      "Future-proofing",
      "Innovation driver",
      "Legal obligation",
      "Market expansion"
    ],
    correctAnswer: 0,
    explanation: "Future-proofing states that populations age, and a product failing older users today will fail the majority of users in 20 years, making inclusive design strategically durable.\n\nInnovation driver instead concerns accessibility constraints historically producing broadly useful innovations, not population aging over time.\n\nLegal obligation instead concerns laws like the ADA and Equality Act, not the demographic aging argument.\n\nMarket expansion instead concerns reaching a larger market today, not the specific long-term demographic aging argument."
  },
  {
    id: "csc306_ch5_241",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is an accurate pairing of a WCAG success criterion with its requirement?",
    options: [
      "2.4.7, Focus visible, requires that focus outlines are never removed",
      "1.1.1, Non-text content, requires a 4.5:1 colour contrast ratio for text",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "2.4.7, Focus visible, requiring that focus outlines are never removed and remain clearly visible, is stated directly. 1.1.1, Non-text content, instead requires alt text for images, not a colour contrast ratio, which is the separate criterion 1.4.3. Since only the Focus visible statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_242",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Inclusive design is described as an act of charity, separate from good engineering and business considerations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Inclusive design is described as not charity, but good engineering, good ethics, and good business, framing accessibility as a strategic and technical priority rather than a charitable gesture."
  },
  {
    id: "csc306_ch5_243",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Roughly how many internet users worldwide are cited for 2024?",
    options: [
      "5.4 billion",
      "540 million",
      "54 million",
      "54 billion"
    ],
    correctAnswer: 0,
    explanation: "The 2024 figure cited is 5.4 billion internet users worldwide.\n\n540 million substantially understates the cited global figure.\n\n54 million also substantially understates the cited global figure.\n\n54 billion vastly overstates the cited figure, exceeding the world's total population many times over."
  },
  {
    id: "csc306_ch5_244",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Roughly what proportion of web traffic is cited as now coming from mobile devices?",
    options: [
      "60%+",
      "5%",
      "20%",
      "99%"
    ],
    correctAnswer: 0,
    explanation: "The figure cited is 60%+ of web traffic now coming from mobile devices.\n\n5% vastly understates the cited proportion.\n\n20% substantially understates the cited proportion.\n\n99% overstates the cited proportion."
  },
  {
    id: "csc306_ch5_245",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which web HCI factor is illustrated by users arriving via search, social media, QR codes, and links, meaning they may land anywhere, not just the homepage?",
    options: [
      "Entry points are unpredictable",
      "No single user",
      "Competition is one click away",
      "Context is unknown"
    ],
    correctAnswer: 0,
    explanation: "Entry points are unpredictable is illustrated by users arriving via search, social media, QR codes, and links, meaning they may land anywhere, not just the homepage.\n\nNo single user instead concerns audiences spanning every age, ability, and device, not the point of entry to a site.\n\nCompetition is one click away instead concerns users abandoning without warning when friction appears, not the entry point.\n\nContext is unknown instead concerns not knowing the user's device or environment, not the specific page they land on."
  },
  {
    id: "csc306_ch5_246",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the Four Components of Information Architecture concerns how content is categorised and structured, mirroring the user's mental model?",
    options: [
      "Organisation systems",
      "Labelling systems",
      "Navigation systems",
      "Search systems"
    ],
    correctAnswer: 0,
    explanation: "Organisation systems concern how content is categorised and structured, hierarchical, faceted, or sequential, mirroring the user's mental model, not the organisation's internal logic.\n\nLabelling systems instead concern the words used for categories and links, not the underlying categorisation structure.\n\nNavigation systems instead concern how users move through content, not the categorisation structure itself.\n\nSearch systems instead concern how users find content when browsing fails, not the categorisation structure itself."
  },
  {
    id: "csc306_ch5_247",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the Four Components of Information Architecture concerns the words used for categories and links, which must match the user's vocabulary, not the team's?",
    options: [
      "Labelling systems",
      "Organisation systems",
      "Navigation systems",
      "Search systems"
    ],
    correctAnswer: 0,
    explanation: "Labelling systems concern the words used for categories, navigation items, and links, which must match the vocabulary of the user, not the vocabulary of the team that built the site.\n\nOrganisation systems instead concern how content is categorised and structured, a different layer than word choice.\n\nNavigation systems instead concern how users physically move through content, not label wording.\n\nSearch systems instead concern query formulation and result display, not label wording for navigation."
  },
  {
    id: "csc306_ch5_248",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which navigation pattern is described as good for showing breadth on large content-heavy sites, but cognitively demanding since every option is visible at once?",
    options: [
      "Mega menu",
      "Hamburger menu",
      "Tab bar",
      "Breadcrumbs"
    ],
    correctAnswer: 0,
    explanation: "Mega menu is good for showing breadth on large content-heavy sites, but cognitively demanding since every option is visible at once.\n\nHamburger menu instead reduces visual noise on mobile but hides navigation, reducing discoverability, a different tradeoff.\n\nTab bar instead is always visible but limited to 3 to 5 primary destinations, a different tradeoff than showing full breadth.\n\nBreadcrumbs instead help users understand hierarchy position, not showing the full breadth of a site's content."
  },
  {
    id: "csc306_ch5_249",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which navigation pattern is mobile-first and reduces visual noise, but hides navigation and reduces discoverability of content?",
    options: [
      "Hamburger menu",
      "Mega menu",
      "Tab bar",
      "Faceted filters"
    ],
    correctAnswer: 0,
    explanation: "Hamburger menu is mobile-first and reduces visual noise, but hides navigation and reduces discoverability of content.\n\nMega menu instead shows breadth on large sites with every option visible, the opposite tradeoff of hiding navigation.\n\nTab bar instead is always visible and limited to a few destinations, not a hidden menu.\n\nFaceted filters instead let users narrow results by multiple attributes, a different navigation function than a collapsible menu."
  },
  {
    id: "csc306_ch5_250",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which navigation pattern is always visible and best suited for only 3 to 5 primary destinations in mobile apps and simple websites?",
    options: [
      "Tab bar",
      "Mega menu",
      "Hamburger menu",
      "Breadcrumbs"
    ],
    correctAnswer: 0,
    explanation: "Tab bar is always visible and best for only 3 to 5 primary destinations in mobile apps and simple websites.\n\nMega menu instead is suited for large content-heavy sites showing full breadth, not a limited set of primary destinations.\n\nHamburger menu instead hides navigation behind an icon, unlike a tab bar's constant visibility.\n\nBreadcrumbs instead show hierarchy position for deep content structures, not a fixed set of primary destinations."
  },
  {
    id: "csc306_ch5_251",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which navigation pattern helps users understand where they are in a hierarchy, essential for deep content structures like catalogues?",
    options: [
      "Breadcrumbs",
      "Tab bar",
      "Hamburger menu",
      "Mega menu"
    ],
    correctAnswer: 0,
    explanation: "Breadcrumbs help users understand where they are in a hierarchy, essential for deep content structures like catalogues.\n\nTab bar instead offers constant access to a few primary destinations, not hierarchy position awareness.\n\nHamburger menu instead hides navigation behind an icon, not showing hierarchy position.\n\nMega menu instead shows full site breadth at once, not a trail of hierarchy position."
  },
  {
    id: "csc306_ch5_252",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of search query is illustrated by 'Facebook login' or 'BBC sport', where the user wants to reach a specific site or page?",
    options: [
      "Navigational",
      "Informational",
      "Transactional",
      "Organisational"
    ],
    correctAnswer: 0,
    explanation: "Navigational queries are illustrated by 'Facebook login' or 'BBC sport', where the user wants to reach a specific site or page directly.\n\nInformational queries instead are illustrated by 'What is HCI?', where the user wants to learn something, not reach a specific site.\n\nTransactional queries instead are illustrated by 'Buy iPhone 15 Nigeria', where the user wants to complete an action, not just navigate.\n\nOrganisational is not one of the three named query types in this material."
  },
  {
    id: "csc306_ch5_253",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of search query is illustrated by 'What is HCI?' or 'How to fix a PDF error', where the user wants to learn something or answer a question?",
    options: [
      "Informational",
      "Navigational",
      "Transactional",
      "Behavioural"
    ],
    correctAnswer: 0,
    explanation: "Informational queries are illustrated by 'What is HCI?' or 'How to fix a PDF error', where the user wants to learn something or answer a question.\n\nNavigational queries instead are illustrated by wanting to reach a specific site, not learn general information.\n\nTransactional queries instead are illustrated by wanting to complete an action like a purchase, not learn information.\n\nBehavioural is not one of the three named query types in this material; it instead describes a category of research method elsewhere."
  },
  {
    id: "csc306_ch5_254",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of search query is illustrated by 'Buy iPhone 15 Nigeria' or 'Book flight Lagos Abuja', where the user wants to complete an action?",
    options: [
      "Transactional",
      "Navigational",
      "Informational",
      "Attitudinal"
    ],
    correctAnswer: 0,
    explanation: "Transactional queries are illustrated by 'Buy iPhone 15 Nigeria' or 'Book flight Lagos Abuja', where the user wants to complete an action such as buying or booking.\n\nNavigational queries instead are illustrated by wanting to reach a specific site, not complete a transaction.\n\nInformational queries instead are illustrated by wanting to learn something, not complete a transaction.\n\nAttitudinal is not one of the three named query types in this material; it instead describes a category of research method elsewhere."
  },
  {
    id: "csc306_ch5_255",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is recommended for designing good search results?",
    options: [
      "Design for zero results, since empty states need guidance, not a dead end",
      "Hide the total number of results to keep the interface uncluttered",
      "Never allow sorting or filtering of results",
      "Avoid highlighting query terms within the results"
    ],
    correctAnswer: 0,
    explanation: "Designing for zero results, since empty states need guidance rather than a dead end, is recommended for good search results.\n\nHiding the total result count contradicts the recommendation to show the number of results so users can calibrate expectations.\n\nNever allowing sorting or filtering contradicts the recommendation to allow sorting and filtering, since results are only a starting point.\n\nAvoiding term highlighting contradicts the recommendation to highlight query terms in results to confirm relevance."
  },
  {
    id: "csc306_ch5_256",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the e-commerce funnel, roughly what percentage of users are estimated to reach the Add to Cart stage, described as a commitment signal rather than a purchase decision?",
    options: [
      "About 15%",
      "About 100%",
      "About 60%",
      "About 3-5%"
    ],
    correctAnswer: 0,
    explanation: "Roughly 15% of users are estimated to reach Add to Cart, described as a commitment signal, not yet a purchase decision.\n\nAbout 100% instead represents the Awareness stage, the very top of the funnel where every user starts.\n\nAbout 60% instead represents the Browse stage, earlier in the funnel than Add to Cart.\n\nAbout 3-5% instead represents the final Purchase stage, later in the funnel than Add to Cart."
  },
  {
    id: "csc306_ch5_257",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the e-commerce funnel, the Checkout stage, at roughly 8%, is described as what?",
    options: [
      "The highest-stakes UX step in the entire journey",
      "An entirely optional, low-priority stage to design",
      "A stage that occurs before Add to Cart",
      "The stage with the highest percentage of all users remaining"
    ],
    correctAnswer: 0,
    explanation: "Checkout, at roughly 8%, is described as the highest-stakes UX step in the entire journey, since improving its conversion often delivers more revenue than increasing traffic.\n\nDescribing it as optional and low-priority directly contradicts its description as the highest-stakes step.\n\nCheckout occurs after Add to Cart in the funnel sequence, not before it.\n\nCheckout retains a smaller percentage of users than earlier stages like Awareness or Browse, not the highest percentage."
  },
  {
    id: "csc306_ch5_258",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The key insight about checkout conversion states that improving it by 1% often delivers more revenue than what?",
    options: [
      "Increasing traffic by 20%",
      "Doubling the marketing budget",
      "Hiring ten additional customer service staff",
      "Reducing the number of products listed"
    ],
    correctAnswer: 0,
    explanation: "The key insight states that improving checkout conversion by 1% often delivers more revenue than increasing traffic by 20%, showing the outsized value of the final step's UX.\n\nDoubling the marketing budget is not the specific comparison made in this material.\n\nHiring additional customer service staff is not the specific comparison made in this material.\n\nReducing the number of listed products is not the specific comparison made in this material."
  },
  {
    id: "csc306_ch5_259",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which product page essential warns that unexpected price revelation is the leading cause of cart abandonment?",
    options: [
      "Price, immediately visible",
      "Multiple high-quality images",
      "Social proof",
      "Availability & shipping"
    ],
    correctAnswer: 0,
    explanation: "Price, immediately visible, warns that unexpected price revelation is the leading cause of cart abandonment, so price should never be hidden below the fold.\n\nMultiple high-quality images instead concerns showing zoom and 360-degree views since users cannot touch the product, not pricing.\n\nSocial proof instead concerns reviews and ratings building trust, not pricing visibility.\n\nAvailability & shipping instead concerns stock level and delivery estimates reducing uncertainty, not pricing visibility specifically."
  },
  {
    id: "csc306_ch5_260",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which checkout design principle states that mandatory account creation is the single biggest cause of checkout abandonment?",
    options: [
      "Guest checkout",
      "Progress indicator",
      "Minimal form fields",
      "Persistent order summary"
    ],
    correctAnswer: 0,
    explanation: "Guest checkout states that mandatory account creation is the single biggest cause of checkout abandonment, so a guest option should always be offered.\n\nProgress indicator instead concerns showing how many steps remain, not account creation requirements.\n\nMinimal form fields instead concerns asking only what is needed, since every extra field increases abandonment, a related but distinct principle.\n\nPersistent order summary instead concerns keeping the order visible throughout checkout, not account creation requirements."
  },
  {
    id: "csc306_ch5_261",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which trust signal is illustrated by users distrusting products with only 5-star ratings, since imperfection is believable?",
    options: [
      "Reviews and ratings",
      "HTTPS & security badges",
      "Visible contact info",
      "Clear returns policy"
    ],
    correctAnswer: 0,
    explanation: "Reviews and ratings is illustrated by users distrusting products with only 5-star ratings, since imperfection is believable and independently verified reviews build trust.\n\nHTTPS & security badges instead concerns SSL padlocks and payment logos reducing anxiety at card entry, not review authenticity.\n\nVisible contact info instead concerns a phone number or address signalling real presence, not review authenticity.\n\nClear returns policy instead concerns easy, visible return processes reducing perceived risk, not review authenticity."
  },
  {
    id: "csc306_ch5_262",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which persuasion pattern is described as Cialdini's most powerful persuasion principle, illustrated by free samples or trials creating a sense of obligation?",
    options: [
      "Reciprocity",
      "Scarcity & urgency",
      "Social proof",
      "Dark patterns"
    ],
    correctAnswer: 0,
    explanation: "Reciprocity is described as Cialdini's most powerful persuasion principle, illustrated by free samples, trials, or content creating a sense of obligation to return the favour.\n\nScarcity & urgency instead is illustrated by messages like 'Only 3 left', legitimate if true but manipulative if fabricated, a different principle.\n\nSocial proof instead is illustrated by '1,200 people bought this today', anchoring to others' choices, a different principle from reciprocity.\n\nDark patterns instead describes manipulative practices like pre-ticked boxes, always harmful, not a persuasion principle to use ethically."
  },
  {
    id: "csc306_ch5_263",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Pre-ticked boxes, hidden fees, confusing unsubscribes, and roach motels are examples of what, described as increasingly regulated and always harmful to long-term trust?",
    options: [
      "Dark patterns",
      "Reciprocity",
      "Scarcity & urgency",
      "Trust signals"
    ],
    correctAnswer: 0,
    explanation: "Dark patterns include pre-ticked boxes, hidden fees, confusing unsubscribes, and roach motels, increasingly regulated and always harmful to long-term trust and brand.\n\nReciprocity instead is an ethical persuasion principle based on obligation from free samples, not a manipulative pattern.\n\nScarcity & urgency instead can be legitimate if true, unlike dark patterns which are always described as harmful.\n\nTrust signals instead are positive elements like security badges and reviews, the opposite of manipulative dark patterns."
  },
  {
    id: "csc306_ch5_264",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Under mobile-first design, primary actions should be placed within the bottom two-thirds of the screen because of what principle?",
    options: [
      "Thumb-first layout",
      "Performance is UX",
      "Content priority",
      "Context of use"
    ],
    correctAnswer: 0,
    explanation: "Thumb-first layout places primary actions in the bottom two-thirds of the screen, within thumb reach, since the top corners of a phone are hardest to reach.\n\nPerformance is UX instead concerns load time affecting conversions, not the physical placement of buttons for thumb reach.\n\nContent priority instead concerns cutting content that doesn't earn its place on a small screen, not physical button placement.\n\nContext of use instead concerns designing for motion and distraction, not physical button placement for thumb reach."
  },
  {
    id: "csc306_ch5_265",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Every additional second of load time is cited as reducing conversions by roughly what percentage?",
    options: [
      "About 7%",
      "About 0.1%",
      "About 50%",
      "About 1%"
    ],
    correctAnswer: 0,
    explanation: "Every additional second of load time is cited as reducing conversions by roughly 7%, making performance a core UX concern, not just a technical one.\n\nAbout 0.1% substantially understates the cited figure for this performance effect.\n\nAbout 50% substantially overstates the cited figure for this performance effect.\n\nAbout 1% understates the cited figure for this performance effect."
  },
  {
    id: "csc306_ch5_266",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which mobile web principle states that mobile users are often in motion, distracted, or in variable lighting, requiring design for glanceable interaction, not focus?",
    options: [
      "Context of use",
      "Thumb-first layout",
      "Performance is UX",
      "Adaptive patterns"
    ],
    correctAnswer: 0,
    explanation: "Context of use states that mobile users are often in motion, distracted, or in variable lighting, requiring design for one-handed, interrupted, glanceable interaction, not sustained focus.\n\nThumb-first layout instead concerns physical button placement within thumb reach, not the surrounding environment.\n\nPerformance is UX instead concerns load time affecting conversions, not the user's surrounding environment.\n\nAdaptive patterns instead concerns using mobile-native components like bottom sheets, not the surrounding environment."
  },
  {
    id: "csc306_ch5_267",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which mobile web principle recommends hamburger menus, bottom sheets, cards, and accordions rather than porting desktop navigation directly?",
    options: [
      "Adaptive patterns",
      "Thumb-first layout",
      "Content priority",
      "Offline & low-connectivity"
    ],
    correctAnswer: 0,
    explanation: "Adaptive patterns recommends mobile-native components like hamburger menus, bottom sheets, cards, and accordions, rather than porting desktop navigation directly.\n\nThumb-first layout instead concerns placing actions within thumb reach, not the choice of navigation component style.\n\nContent priority instead concerns cutting content that doesn't earn its place, not the choice of navigation component style.\n\nOffline & low-connectivity instead concerns Progressive Web Apps and offline states, not the choice of navigation component style."
  },
  {
    id: "csc306_ch5_268",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Core Web Vital measures how quickly the main content of a page loads, with a target of 2.5 seconds or less?",
    options: [
      "LCP (Largest Contentful Paint)",
      "FID (First Input Delay)",
      "CLS (Cumulative Layout Shift)",
      "Bounce Rate"
    ],
    correctAnswer: 0,
    explanation: "LCP, Largest Contentful Paint, measures how quickly the main content loads, with a target of 2.5 seconds or less.\n\nFID instead measures how quickly the page responds to the first interaction, with a target of 100 milliseconds or less, not content load time.\n\nCLS instead measures how much content moves unexpectedly during load, with a target of 0.1 or less, not load speed.\n\nBounce Rate is a behavioural UX metric, not one of the three Core Web Vitals."
  },
  {
    id: "csc306_ch5_269",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which Core Web Vital measures how much content moves unexpectedly during load, with a target of 0.1 or less?",
    options: [
      "CLS (Cumulative Layout Shift)",
      "LCP (Largest Contentful Paint)",
      "FID (First Input Delay)",
      "Conversion Rate"
    ],
    correctAnswer: 0,
    explanation: "CLS, Cumulative Layout Shift, measures how much content moves unexpectedly during load, with a target of 0.1 or less.\n\nLCP instead measures how quickly the main content loads, with a target of 2.5 seconds, not layout movement.\n\nFID instead measures response time to first interaction, with a target of 100 milliseconds, not layout movement.\n\nConversion Rate is a behavioural UX metric, not one of the three Core Web Vitals."
  },
  {
    id: "csc306_ch5_270",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which behavioural UX metric measures the percentage of users who leave after viewing only one page, with a target of under 40%?",
    options: [
      "Bounce Rate",
      "Task Completion Rate",
      "Conversion Rate",
      "Time on Task"
    ],
    correctAnswer: 0,
    explanation: "Bounce Rate measures the percentage of users who leave after viewing one page, with a target of under 40%, and high bounce on landing pages suggests a content mismatch.\n\nTask Completion Rate instead measures the percentage of users who successfully complete a defined goal, with a target above 80%, not single-page exits.\n\nConversion Rate instead measures the percentage completing the primary business goal, with a target around 2-5%, not single-page exits.\n\nTime on Task instead measures duration spent, context-dependent, not single-page exits."
  },
  {
    id: "csc306_ch5_271",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which behavioural UX metric has a target above 80%, and is described as the most direct measure of whether the UX works?",
    options: [
      "Task Completion Rate",
      "Bounce Rate",
      "Conversion Rate",
      "Time on Task"
    ],
    correctAnswer: 0,
    explanation: "Task Completion Rate, with a target above 80%, is described as the most direct measure of whether the UX works, since it tracks whether users achieve their defined goal.\n\nBounce Rate instead targets under 40%, measuring single-page exits, not goal completion.\n\nConversion Rate instead targets around 2-5%, measuring business goal completion specifically, a narrower metric than general task completion.\n\nTime on Task instead is context-dependent, not a direct pass/fail measure of whether the UX works."
  },
  {
    id: "csc306_ch5_272",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a Core Web Vital or a behavioural UX metric?",
    options: [
      "FID targets a response of 100 milliseconds or less to the first user interaction",
      "Conversion Rate targets under 40% of visitors completing the primary business goal",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "FID targeting a response of 100 milliseconds or less to the first interaction is stated directly. Conversion Rate instead targets around 2-5% of visitors completing the primary business goal, not under 40%, which is instead the Bounce Rate target. Since only the FID statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_273",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The web is used by billions of people in thousands of contexts, meaning there is no single 'typical' web user.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The material states directly that web audiences span every age, ability, culture, device, language, and bandwidth, and there is no 'typical' web user."
  },
  {
    id: "csc306_ch5_274",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Mobile-first design is described as starting with the most constrained context and progressively enhancing for larger screens, never starting with desktop and shrinking down.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Mobile-first design is described as starting with the most constrained context, small screen, slow connection, one-thumb interaction, and progressively enhancing for larger screens, never starting with desktop and shrinking down."
  },
  {
    id: "csc306_ch5_275",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which era of the AI-HCI relationship, spanning the 1990s-2010s, involved AI working invisibly through spam filters and recommendation engines, with users unaware AI was involved?",
    options: [
      "AI behind the interface",
      "AI as the interface",
      "AI as co-designer",
      "AI as the sole designer"
    ],
    correctAnswer: 0,
    explanation: "AI behind the interface, spanning the 1990s-2010s, involved AI working invisibly through spam filters and recommendation engines, with users experiencing outputs without knowing AI was involved.\n\nAI as the interface instead spans the 2010s-2020s, with voice assistants and chatbots moving AI into direct interaction, not invisible operation.\n\nAI as co-designer instead spans the 2020s onward, with generative AI creating content and interfaces directly, not working invisibly.\n\nAI as the sole designer is not one of the three named eras in this material."
  },
  {
    id: "csc306_ch5_276",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which era of the AI-HCI relationship, spanning the 2010s-2020s, involved voice assistants and chatbots moving AI into direct interaction that users talked to and trusted or distrusted explicitly?",
    options: [
      "AI as the interface",
      "AI behind the interface",
      "AI as co-designer",
      "AI as arbiter"
    ],
    correctAnswer: 0,
    explanation: "AI as the interface, spanning the 2010s-2020s, involved voice assistants like Siri and Alexa, and chatbots, moving AI into direct interaction that users talked to and trusted or distrusted explicitly.\n\nAI behind the interface instead spans the 1990s-2010s, with AI working invisibly, not through direct conversational interaction.\n\nAI as co-designer instead spans the 2020s onward, with generative AI creating content directly, a later era than voice assistants becoming mainstream.\n\nAI as arbiter is not one of the three named eras in this material."
  },
  {
    id: "csc306_ch5_277",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The central HCI challenge of the 2020s is described as designing the experience of interacting with a system that cannot be fully what?",
    options: [
      "Predicted or controlled",
      "Purchased or licensed",
      "Advertised or marketed",
      "Patented or copyrighted"
    ],
    correctAnswer: 0,
    explanation: "The central HCI challenge of the 2020s is designing the experience of interacting with a system that cannot be fully predicted or controlled, given generative AI's unpredictable outputs.\n\nPurchasing or licensing is a business concern unrelated to this stated central design challenge.\n\nAdvertising or marketing is a business concern unrelated to this stated central design challenge.\n\nPatenting or copyrighting is a legal concern unrelated to this stated central design challenge."
  },
  {
    id: "csc306_ch5_278",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of conversational interface uses rule-based decision trees, predictable but brittle, best for narrow, repetitive tasks like FAQ handling?",
    options: [
      "Scripted chatbots",
      "NLP chatbots",
      "LLM assistants",
      "Voice agents"
    ],
    correctAnswer: 0,
    explanation: "Scripted chatbots use rule-based decision trees, predictable but brittle, failing outside their defined paths, best for narrow tasks like FAQ handling.\n\nNLP chatbots instead are trained on language to understand intent and entities, more flexible than a fixed decision tree.\n\nLLM assistants instead are open-ended and general-purpose, the opposite of a narrow, rule-based decision tree.\n\nVoice agents instead combine speech recognition, NLP, and synthesis, a different modality than a text-based decision tree."
  },
  {
    id: "csc306_ch5_279",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of conversational interface is trained on language to understand intent and entities, more flexible than scripted chatbots but still bounded by training data?",
    options: [
      "NLP chatbots",
      "Scripted chatbots",
      "LLM assistants",
      "Voice agents"
    ],
    correctAnswer: 0,
    explanation: "NLP chatbots are trained on language to understand intent and entities, more flexible than scripted chatbots, but still bounded by training data and requiring intent taxonomy design.\n\nScripted chatbots instead use rigid, rule-based decision trees, less flexible than NLP-based understanding.\n\nLLM assistants instead are open-ended and general-purpose, less bounded than a defined intent taxonomy.\n\nVoice agents instead combine speech recognition, NLP, and synthesis together, a broader category than text-based NLP chatbots alone."
  },
  {
    id: "csc306_ch5_280",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of conversational interface, such as GPT, Claude, and Gemini, is open-ended and general-purpose, but introduces challenges like hallucination and prompt injection?",
    options: [
      "LLM assistants",
      "Scripted chatbots",
      "NLP chatbots",
      "Voice agents"
    ],
    correctAnswer: 0,
    explanation: "LLM assistants, such as GPT, Claude, and Gemini, are open-ended and general-purpose, but introduce challenges like hallucination, inconsistency, and prompt injection.\n\nScripted chatbots instead use narrow, rule-based decision trees, the opposite of open-ended, general-purpose capability.\n\nNLP chatbots instead are bounded by a defined intent taxonomy, more limited than a general-purpose LLM.\n\nVoice agents instead focus on speech recognition and synthesis specifically, a different combination of challenges than hallucination and prompt injection."
  },
  {
    id: "csc306_ch5_281",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which recommendation for designing conversational UIs states that error recovery in conversation must feel human, not robotic?",
    options: [
      "A recommendation listed under Designing Conversational UIs",
      "A recommendation that applies only to typed chat interfaces",
      "A recommendation that applies only to voice interfaces",
      "A recommendation that contradicts all other guidance in this section"
    ],
    correctAnswer: 0,
    explanation: "This is one of the recommendations listed under Designing Conversational UIs, alongside designing for failure and providing clear affordances.\n\nRestricting it to typed chat only is not supported; the guidance applies broadly to conversational interfaces, spoken or typed.\n\nRestricting it to voice interfaces only is not supported; the guidance applies broadly to conversational interfaces generally.\n\nDescribing it as contradicting other guidance misrepresents it; it complements the other listed recommendations rather than conflicting with them."
  },
  {
    id: "csc306_ch5_282",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which adaptive or personalised interface type suggests content or products based on past behaviour, with the core challenge of balancing relevance with serendipity and avoiding filter bubbles?",
    options: [
      "Recommendation Systems",
      "Adaptive UI",
      "User Modelling",
      "Context-Aware Computing"
    ],
    correctAnswer: 0,
    explanation: "Recommendation Systems suggest content, products, or actions based on past behaviour, with the core challenge of balancing relevance with serendipity and avoiding filter bubbles, as with Netflix or Spotify.\n\nAdaptive UI instead reconfigures the interface itself based on observed usage, not suggesting external content.\n\nUser Modelling instead builds an internal model of the user's expertise and goals, a broader concept than content suggestions specifically.\n\nContext-Aware Computing instead uses sensor data like location and time, not past behaviour patterns for content suggestions."
  },
  {
    id: "csc306_ch5_283",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which adaptive interface type reconfigures itself based on observed usage, surfacing frequently used features while rarely used ones recede, such as Microsoft Office's adaptive menus?",
    options: [
      "Adaptive UI",
      "Recommendation Systems",
      "User Modelling",
      "Context-Aware Computing"
    ],
    correctAnswer: 0,
    explanation: "Adaptive UI reconfigures itself based on observed usage, surfacing frequently used features while rarely used ones recede, illustrated by Microsoft Office's adaptive menus and Gmail's Smart Reply.\n\nRecommendation Systems instead suggest external content or products, not reconfigure the interface's own layout.\n\nUser Modelling instead builds an internal model of user expertise and goals, a broader concept than surfacing frequently used features.\n\nContext-Aware Computing instead uses sensor data to infer context, not observed feature usage frequency."
  },
  {
    id: "csc306_ch5_284",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which adaptive interface type builds an internal model of the user's expertise level, preferences, and goals, with the risk that an incorrect, invisible model cannot be corrected by the user?",
    options: [
      "User Modelling",
      "Recommendation Systems",
      "Adaptive UI",
      "Context-Aware Computing"
    ],
    correctAnswer: 0,
    explanation: "User Modelling builds an internal model of the user's expertise level, preferences, and goals, with the risk that an incorrect, invisible model cannot be corrected by the user.\n\nRecommendation Systems instead suggest content based on past behaviour, a narrower application than a general user model.\n\nAdaptive UI instead reconfigures the interface layout based on usage, a specific application rather than a general internal model.\n\nContext-Aware Computing instead uses sensor data like location, a different input than an internal model of expertise and goals."
  },
  {
    id: "csc306_ch5_285",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which adaptive interface type uses sensor data such as location, time, and device to infer context, such as Maps suggesting nearby lunch spots?",
    options: [
      "Context-Aware Computing",
      "Recommendation Systems",
      "Adaptive UI",
      "User Modelling"
    ],
    correctAnswer: 0,
    explanation: "Context-Aware Computing uses sensor data such as location, time, device, and activity to infer context and adapt accordingly, illustrated by Maps suggesting nearby lunch spots.\n\nRecommendation Systems instead suggest content based on past behaviour patterns, not real-time sensor data.\n\nAdaptive UI instead reconfigures layout based on feature usage frequency, not sensor-inferred context.\n\nUser Modelling instead builds a model of expertise and preferences, a different input than real-time sensor data."
  },
  {
    id: "csc306_ch5_286",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which way that AI is changing the design process itself involves generating hundreds of concept variations and layouts, shifting the designer's role toward curation and critique?",
    options: [
      "Ideation partner",
      "Code generation",
      "User research synthesis",
      "Usability prediction"
    ],
    correctAnswer: 0,
    explanation: "Ideation partner involves AI generating hundreds of concept variations, layouts, and copy options, shifting the designer's role toward curation and critique.\n\nCode generation instead involves AI writing functional UI code from descriptions, a different stage of the process than early ideation.\n\nUser research synthesis instead involves AI transcribing interviews and clustering findings, a research stage rather than idea generation.\n\nUsability prediction instead involves AI predicting where users will look before testing, a validation stage rather than idea generation."
  },
  {
    id: "csc306_ch5_287",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which way that AI is changing the design process involves transcribing interviews, identifying themes, and generating personas from raw qualitative data?",
    options: [
      "User research synthesis",
      "Ideation partner",
      "Code generation",
      "Usability prediction"
    ],
    correctAnswer: 0,
    explanation: "User research synthesis involves AI transcribing interviews, identifying themes, clustering findings, and generating personas from raw qualitative data, though it can miss nuance.\n\nIdeation partner instead generates concept variations and layouts, not synthesis of research data.\n\nCode generation instead writes functional UI code, not synthesis of qualitative research.\n\nUsability prediction instead predicts where users will look and click, not synthesis of interview data."
  },
  {
    id: "csc306_ch5_288",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which way that AI is changing the design process trains models on eye-tracking and click data to predict where users will look before any users are tested?",
    options: [
      "Usability prediction",
      "Ideation partner",
      "Code generation",
      "User research synthesis"
    ],
    correctAnswer: 0,
    explanation: "Usability prediction trains models on eye-tracking and click data to predict where users will look and click before any users are tested, useful for early validation but not a replacement for real testing.\n\nIdeation partner instead generates concept variations, not predictions about where users will look.\n\nCode generation instead writes functional UI code, not predictions about visual attention.\n\nUser research synthesis instead processes qualitative interview data, not predictive eye-tracking modelling."
  },
  {
    id: "csc306_ch5_289",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which AI ethics issue is illustrated by a hiring algorithm trained on past hires rejecting future applicants who resemble past rejections?",
    options: [
      "Algorithmic bias",
      "Opacity & explainability",
      "Manipulation at scale",
      "Consent & data use"
    ],
    correctAnswer: 0,
    explanation: "Algorithmic bias is illustrated by a hiring algorithm trained on past hires rejecting future applicants who resemble past rejections, replicating historical inequities while presenting the outcome as neutral.\n\nOpacity & explainability instead concerns users being unable to understand why a decision was made, not the biased pattern itself.\n\nManipulation at scale instead concerns engagement-optimised systems exploiting emotional vulnerabilities, a different concern than biased hiring outcomes.\n\nConsent & data use instead concerns whether users meaningfully agree to data collection, not biased algorithmic outcomes."
  },
  {
    id: "csc306_ch5_290",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which AI ethics issue states that most users cannot understand why an AI made a decision, such as a rejected loan, and cannot challenge what they cannot see?",
    options: [
      "Opacity & explainability",
      "Algorithmic bias",
      "Manipulation at scale",
      "Accountability gaps"
    ],
    correctAnswer: 0,
    explanation: "Opacity & explainability states that most users cannot understand why an AI made a decision, such as a rejected loan, and cannot challenge what they cannot see, making explainable AI a UX problem.\n\nAlgorithmic bias instead concerns models replicating historical inequities, a related but distinct issue from a user's inability to see the reasoning.\n\nManipulation at scale instead concerns engagement-optimised systems exploiting emotional vulnerabilities, not the transparency of a single decision.\n\nAccountability gaps instead concerns diffuse responsibility when harm occurs, a related but distinct issue from explaining a specific decision."
  },
  {
    id: "csc306_ch5_291",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which AI ethics issue states that the interface design maximising watch time is not the same as the design that promotes wellbeing, since outrage spreads faster than calm?",
    options: [
      "Manipulation at scale",
      "Algorithmic bias",
      "Opacity & explainability",
      "Consent & data use"
    ],
    correctAnswer: 0,
    explanation: "Manipulation at scale states that the interface design maximising watch time is not the same as the design promoting wellbeing, since recommendation systems optimised for engagement exploit emotional vulnerabilities and outrage spreads faster than calm.\n\nAlgorithmic bias instead concerns replicating historical inequities in decisions, a different issue than engagement-driven emotional exploitation.\n\nOpacity & explainability instead concerns users being unable to understand a decision, not engagement optimisation.\n\nConsent & data use instead concerns whether consent is meaningfully informed, not engagement-driven emotional exploitation."
  },
  {
    id: "csc306_ch5_292",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which AI ethics issue states that the UI collecting consent is often designed to manufacture agreement rather than inform it, making dark patterns the norm?",
    options: [
      "Consent & data use",
      "Algorithmic bias",
      "Manipulation at scale",
      "Accountability gaps"
    ],
    correctAnswer: 0,
    explanation: "Consent & data use states that the UI collecting consent is often designed to manufacture agreement rather than inform it, making dark patterns the norm in consent flows.\n\nAlgorithmic bias instead concerns replicating historical inequities in model outputs, not the design of a consent interface.\n\nManipulation at scale instead concerns engagement optimisation exploiting emotional vulnerabilities, not consent interface design specifically.\n\nAccountability gaps instead concerns diffuse responsibility for harm, not the design of a consent interface."
  },
  {
    id: "csc306_ch5_293",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which AI ethics issue states that when an AI system causes harm, responsibility is diffuse across training data, model developers, the product team, and the deploying organisation?",
    options: [
      "Accountability gaps",
      "Algorithmic bias",
      "Opacity & explainability",
      "Manipulation at scale"
    ],
    correctAnswer: 0,
    explanation: "Accountability gaps states that when an AI system causes harm, responsibility is diffuse across training data, model developers, the product team, and the deploying organisation, and HCI practitioners are not neutral in this chain.\n\nAlgorithmic bias instead concerns the model replicating historical inequities, a distinct issue from who is responsible after harm occurs.\n\nOpacity & explainability instead concerns users being unable to see the reasoning behind a decision, a distinct issue from diffuse responsibility.\n\nManipulation at scale instead concerns engagement-driven exploitation, a distinct issue from diffuse responsibility for harm."
  },
  {
    id: "csc306_ch5_294",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of AI uncertainty describes large language models generating plausible but false information confidently?",
    options: [
      "Hallucination",
      "Confidence calibration",
      "Non-determinism",
      "Scope creep"
    ],
    correctAnswer: 0,
    explanation: "Hallucination describes large language models generating plausible but false information confidently, which is dangerous when the interface presents AI output as authoritative.\n\nConfidence calibration instead concerns a model expressing the same certainty for a confident answer and a mere guess, a related but distinct problem from false content itself.\n\nNon-determinism instead concerns the same prompt producing different outputs at different times, not false but confident content.\n\nScope creep instead concerns a system responding to inputs it is not appropriate for, a different problem than generating false information."
  },
  {
    id: "csc306_ch5_295",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of AI uncertainty describes a model expressing the same certainty about a 99% confident answer and a 55% guess, requiring the interface to communicate epistemic state?",
    options: [
      "Confidence calibration",
      "Hallucination",
      "Non-determinism",
      "Scope creep"
    ],
    correctAnswer: 0,
    explanation: "Confidence calibration describes a model expressing the same certainty about a 99% confident answer and a 55% guess, requiring the interface to communicate epistemic state, not just the answer.\n\nHallucination instead concerns generating plausible but false information, a distinct problem from mismatched confidence signalling.\n\nNon-determinism instead concerns the same prompt producing different outputs over time, a distinct problem from confidence signalling.\n\nScope creep instead concerns a system responding to inappropriate inputs, a distinct problem from confidence signalling."
  },
  {
    id: "csc306_ch5_296",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of AI uncertainty describes the same prompt producing different outputs at different times, surprising users who rely on software reproducibility?",
    options: [
      "Non-determinism",
      "Hallucination",
      "Confidence calibration",
      "Scope creep"
    ],
    correctAnswer: 0,
    explanation: "Non-determinism describes the same prompt producing different outputs at different times, surprising users who rely on the reproducibility they expect from traditional software.\n\nHallucination instead concerns generating plausible but false information, a distinct problem from output variability across runs.\n\nConfidence calibration instead concerns mismatched certainty signalling, a distinct problem from output variability across runs.\n\nScope creep instead concerns responding to inappropriate inputs, a distinct problem from output variability across runs."
  },
  {
    id: "csc306_ch5_297",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which type of AI uncertainty describes general-purpose systems responding to every input, including ones they are not appropriate for, requiring clear scope signalling?",
    options: [
      "Scope creep",
      "Hallucination",
      "Non-determinism",
      "Confidence calibration"
    ],
    correctAnswer: 0,
    explanation: "Scope creep describes general-purpose AI systems responding to every input, including ones they are not appropriate for, requiring clear scope signalling to prevent inappropriate questions.\n\nHallucination instead concerns generating plausible but false information, a distinct problem from responding outside an appropriate scope.\n\nNon-determinism instead concerns inconsistent outputs across runs, a distinct problem from responding outside an appropriate scope.\n\nConfidence calibration instead concerns mismatched certainty signalling, a distinct problem from responding outside an appropriate scope."
  },
  {
    id: "csc306_ch5_298",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which design strategy for AI uncertainty requires that if AI makes a suggestion, correction must be one action away, with zero friction to override, edit, or reject?",
    options: [
      "Always-visible correction path",
      "Disclose confidence levels",
      "Human-in-the-loop for high stakes",
      "Transparent sourcing"
    ],
    correctAnswer: 0,
    explanation: "Always-visible correction path requires that if AI makes a suggestion, correction must be one action away, with zero friction for the user to override, edit, or reject it.\n\nDisclose confidence levels instead concerns showing uncertainty visually through hedged language or probability ranges, not the correction mechanism itself.\n\nHuman-in-the-loop for high stakes instead concerns requiring human review before action in domains like medical diagnosis, a different strategy.\n\nTransparent sourcing instead concerns linking AI outputs to their sources, not the correction mechanism itself."
  },
  {
    id: "csc306_ch5_299",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which design strategy for AI uncertainty requires human review of AI output before action in domains like medical diagnosis, legal advice, and financial decisions?",
    options: [
      "Human-in-the-loop for high stakes",
      "Disclose confidence levels",
      "Always-visible correction path",
      "Graceful degradation"
    ],
    correctAnswer: 0,
    explanation: "Human-in-the-loop for high stakes requires human review of AI output before action in domains like medical diagnosis, legal advice, and financial decisions, enforced by the interface, not just suggested.\n\nDisclose confidence levels instead concerns showing uncertainty visually, a different strategy than mandatory human review.\n\nAlways-visible correction path instead concerns making correction one action away, a different strategy than mandatory review before any action.\n\nGraceful degradation instead concerns offering alternatives when confidence is low, a different strategy than mandatory human review."
  },
  {
    id: "csc306_ch5_300",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which design strategy for AI uncertainty states that when confidence is below a threshold, the system should offer alternatives like search or human help rather than guessing confidently?",
    options: [
      "Graceful degradation",
      "Transparent sourcing",
      "Disclose confidence levels",
      "Human-in-the-loop for high stakes"
    ],
    correctAnswer: 0,
    explanation: "Graceful degradation states that when confidence is below a threshold, the system should say so and offer alternatives, such as search or human help, rather than guessing confidently.\n\nTransparent sourcing instead concerns linking outputs to their sources so users can verify them, a different strategy than offering fallback alternatives.\n\nDisclose confidence levels instead concerns showing uncertainty visually through hedged language, a related but distinct strategy from offering fallback alternatives.\n\nHuman-in-the-loop for high stakes instead concerns mandatory review in high-stakes domains, a different strategy than offering fallback alternatives generally."
  },
  {
    id: "csc306_ch5_301",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "On the Automation Spectrum, which point is illustrated by autocomplete, spell-check, and recommendation carousels, where AI recommends but the human decides?",
    options: [
      "AI suggests",
      "Full human control",
      "AI acts, human confirms",
      "Full AI control"
    ],
    correctAnswer: 0,
    explanation: "AI suggests is illustrated by autocomplete, spell-check, and recommendation carousels, where AI recommends but the human decides.\n\nFull human control instead means AI provides no assistance at all, the opposite end of the spectrum from AI-generated suggestions.\n\nAI acts, human confirms instead means AI executes but waits for approval, such as a drafted email before sending, a step further than mere suggestion.\n\nFull AI control instead means AI acts without human involvement at all, the opposite end of the spectrum from human-decided suggestions."
  },
  {
    id: "csc306_ch5_302",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "On the Automation Spectrum, which point is illustrated by smart reply drafts and AI-written emails that wait for approval before sending?",
    options: [
      "AI acts, human confirms",
      "AI suggests",
      "AI acts, human monitors",
      "Full AI control"
    ],
    correctAnswer: 0,
    explanation: "AI acts, human confirms is illustrated by smart reply drafts and AI-written emails that execute but wait for approval before sending.\n\nAI suggests instead means AI only recommends, such as autocomplete, without pre-drafting a full action awaiting approval.\n\nAI acts, human monitors instead means AI executes automatically, with the human only able to override afterward, such as autopilot, not waiting for upfront approval.\n\nFull AI control instead means AI acts entirely without human involvement, not waiting for any approval step."
  },
  {
    id: "csc306_ch5_303",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "On the Automation Spectrum, which point is illustrated by autopilot, spam filters, and fraud detection, where AI executes automatically but the human can override?",
    options: [
      "AI acts, human monitors",
      "AI suggests",
      "AI acts, human confirms",
      "Full human control"
    ],
    correctAnswer: 0,
    explanation: "AI acts, human monitors is illustrated by autopilot, spam filters, and fraud detection, where AI executes automatically and the human can override rather than pre-approve.\n\nAI suggests instead means AI only recommends without acting, a lower level of automation than automatic execution.\n\nAI acts, human confirms instead means AI waits for approval before acting, the opposite order from acting first and allowing monitoring.\n\nFull human control instead means AI provides no assistance at all, the opposite end of the spectrum from automatic AI execution."
  },
  {
    id: "csc306_ch5_304",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which key design decision in human-AI systems concerns defining triggers carefully, since uninvited AI intervention during focus states degrades performance and trust?",
    options: [
      "When should AI intervene?",
      "How visible is the AI's role?",
      "Who is responsible for AI errors?",
      "How much does the AI system cost to run?"
    ],
    correctAnswer: 0,
    explanation: "When should AI intervene concerns defining triggers carefully, since uninvited AI intervention during a user's focus states degrades performance and trust.\n\nHow visible is the AI's role instead concerns whether users know AI is involved, which changes how they calibrate trust, a related but distinct decision.\n\nWho is responsible for AI errors instead concerns making the accountability chain legible, a related but distinct decision from timing of intervention.\n\nRunning cost is a technical and business concern, not one of the three key design decisions listed in this material."
  },
  {
    id: "csc306_ch5_305",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which emerging area in the Road Ahead is illustrated by Neuralink and others moving from research to clinical deployment, bypassing motor constraints entirely?",
    options: [
      "Brain-Computer Interfaces",
      "Spatial Computing",
      "Ambient Intelligence",
      "Multimodal AI"
    ],
    correctAnswer: 0,
    explanation: "Brain-Computer Interfaces are illustrated by Neuralink and others moving from research to clinical deployment, bypassing motor constraints entirely and raising profound ethical questions.\n\nSpatial Computing instead is illustrated by AR/VR/MR dissolving the boundary between digital and physical space, not direct neural interfaces.\n\nAmbient Intelligence instead is illustrated by computing embedded in the environment, such as smart cities, not direct neural interfaces.\n\nMultimodal AI instead is illustrated by interfaces understanding voice, gesture, gaze, and expression together, not direct neural interfaces."
  },
  {
    id: "csc306_ch5_306",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which emerging area in the Road Ahead observes that the majority of future internet users are in Africa, South Asia, and Southeast Asia, representing an enormous design opportunity?",
    options: [
      "Global South Contexts",
      "Ambient Intelligence",
      "Spatial Computing",
      "Personalised Medicine UX"
    ],
    correctAnswer: 0,
    explanation: "Global South Contexts notes that the majority of future internet users are in Africa, South Asia, and Southeast Asia, whose devices, connectivity, and needs are not the template used by most HCI research, representing an enormous design opportunity.\n\nAmbient Intelligence instead concerns computing embedded in the environment like smart cities, not global user demographics.\n\nSpatial Computing instead concerns AR/VR/MR dissolving digital and physical boundaries, not global user demographics.\n\nPersonalised Medicine UX instead concerns wearables, genomics, and health AI, not global user demographics."
  },
  {
    id: "csc306_ch5_307",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "GOMS stands for Goals, Operators, Methods, and Selection rules, used to predict task completion times.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. GOMS stands for Goals, Operators, Methods, and Selection rules, and is attributed to Card, Moran, and Newell in 1983 to predict task completion times."
  },
  {
    id: "csc306_ch5_308",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of Nielsen's 10 heuristics calls for using words, phrases, and concepts familiar to the user, following real-world conventions?",
    options: [
      "Match Between System & Real World",
      "Visibility of System Status",
      "Consistency & Standards",
      "Help & Documentation"
    ],
    correctAnswer: 0,
    explanation: "Match Between System & Real World calls for using words, phrases, and concepts familiar to the user, following real-world conventions and presenting information in a natural logical order.\n\nVisibility of System Status instead calls for keeping users informed via timely feedback, not familiar wording.\n\nConsistency & Standards instead calls for following platform and industry conventions so words mean the same thing, a related but distinct heuristic from real-world familiarity.\n\nHelp & Documentation instead calls for searchable, task-focused help, not familiar wording."
  },
  {
    id: "csc306_ch5_309",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a design implication of a law discussed in cognitive ergonomics?",
    options: [
      "Hick's Law favours progressive disclosure to reduce the number of choices shown at once",
      "Fitts's Law recommends making critical targets as small as possible to save space",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Hick's Law favouring progressive disclosure to reduce the number of choices shown at once is stated directly, since decision time rises with choice count. Fitts's Law instead recommends making critical targets large, not small, since larger targets are faster and easier to acquire. Since only the Hick's Law statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_310",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which physical ergonomics design consideration recommends placing frequently used controls within the natural reach envelope, not at the arm's extremes?",
    options: [
      "Reach zones",
      "Target sizes",
      "Weight distribution",
      "Environmental context"
    ],
    correctAnswer: 0,
    explanation: "Reach zones recommends placing frequently used controls within the natural reach envelope, not at the arm's extremes, reducing strain from overreaching.\n\nTarget sizes instead concerns minimum tap dimensions like 9mm, not the spatial placement of controls.\n\nWeight distribution instead concerns balancing a handheld device's weight, not control placement.\n\nEnvironmental context instead concerns conditions like sunlight or gloves, not control placement within reach."
  },
  {
    id: "csc306_ch5_311",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Sensory memory is described as lasting longer than working memory before information fades.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Sensory memory lasts less than one second, while working memory lasts 15 to 30 seconds, meaning sensory memory is actually much shorter-lived, not longer."
  },
  {
    id: "csc306_ch5_312",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Before committing to an input or output modality, asking how long the session will be helps designers account for what factor?",
    options: [
      "Fatigue, posture, and cognitive load tolerance over short bursts versus extended use",
      "The exact retail price the hardware manufacturer will charge",
      "The number of employees the company has hired that year",
      "The specific font used in the company's promotional materials"
    ],
    correctAnswer: 0,
    explanation: "Asking how long the session will be helps account for fatigue, posture, and cognitive load tolerance, since short bursts versus extended use changes everything about these factors.\n\nHardware retail price is a business detail unrelated to session length considerations.\n\nEmployee headcount is a business detail unrelated to session length considerations.\n\nPromotional material fonts are a branding detail unrelated to session length considerations."
  },
  {
    id: "csc306_ch5_313",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is an accurate description of WCAG conformance levels?",
    options: [
      "Level A removes the most severe barriers and is required for legal compliance in many jurisdictions",
      "Level AA is the standard target covering the vast majority of users with disabilities",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Level A removes the most severe barriers and is required for legal compliance in many jurisdictions. Level AA is separately described as the standard target, covering the vast majority of users with disabilities and required by most accessibility laws worldwide. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch5_314",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The F-Pattern eye-tracking finding suggests that critical information should be placed where on a page, and avoided where?",
    options: [
      "Along the top and left, avoiding the bottom-right corner",
      "Exclusively in the exact center of the page, avoiding all edges",
      "Only inside the page footer, avoiding the header entirely",
      "Randomly distributed, since scan patterns cannot be predicted"
    ],
    correctAnswer: 0,
    explanation: "The F-Pattern suggests placing critical information along the top and down the left side, since users scan in an F-shape, avoiding the bottom-right corner where attention is weakest.\n\nRestricting placement to the exact center avoiding all edges misrepresents the F-shaped scan, which follows top and left edges specifically.\n\nRestricting placement to the footer only avoiding the header contradicts the F-Pattern, which emphasizes the top of the page first.\n\nRandom distribution contradicts the entire premise of the F-Pattern, which is a predictable, studied scanning behaviour."
  },
  {
    id: "csc306_ch5_315",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The Z-Pattern eye-tracking pattern is recommended for dense, content-heavy pages rather than sparse layouts like landing pages.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. The Z-Pattern is recommended for sparse layouts, such as landing pages and posters, while the F-Pattern is the one associated with denser, content-heavy pages."
  },
  {
    id: "csc306_ch5_316",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Requiring first-time users to complete their first order without consulting documentation is an example of which type of design requirement?",
    options: [
      "User Experience Requirements",
      "Functional Requirements",
      "Organisational Requirements",
      "Non-Functional Requirements"
    ],
    correctAnswer: 0,
    explanation: "This is an example of User Experience Requirements, which describe qualities of the interaction itself, such as learnability, illustrated by first-time users completing an order without documentation.\n\nFunctional Requirements instead describe what the system must do, such as filtering orders, not the learnability quality of the experience.\n\nOrganisational Requirements instead describe legal or business constraints, not learnability.\n\nNon-Functional Requirements instead describe measurable performance like load time, not learnability specifically."
  },
  {
    id: "csc306_ch5_317",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a component of a persona?",
    options: [
      "Tech literacy records the user's exact home postal address",
      "A quote records the user's blood type for medical purposes",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Tech literacy instead records comfort level with technology, not a postal address. A quote instead captures a real or composite phrase representing the user's voice, not medical information like blood type. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch5_318",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which reason for iterating states that users, technology, and business contexts shift, so an iterative process accommodates change rather than resisting it?",
    options: [
      "Requirements change",
      "Cheaper to fix early",
      "Design is discovery",
      "Failure is cheap on paper"
    ],
    correctAnswer: 0,
    explanation: "Requirements change states that users, technology, and business contexts shift, and iterative design accommodates this change rather than resisting it.\n\nCheaper to fix early instead concerns the rising cost of errors found later, a different reason than shifting context.\n\nDesign is discovery instead concerns learning the actual problem by trying to solve it, a different reason than shifting context.\n\nFailure is cheap on paper instead concerns the low cost of a failed sketch versus a failed deployed feature, a different reason than shifting context."
  },
  {
    id: "csc306_ch5_319",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "User Modelling risks producing a bad experience specifically because an incorrect, invisible model cannot be corrected by the user.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. User Modelling's risk is stated directly: incorrect models produce a bad experience, and invisible models cannot be corrected by the user since they do not know the model exists."
  },
  {
    id: "csc306_ch5_320",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which issue severity level from prototype testing means users complete the task, but only with significant difficulty or error, prioritised in the next iteration?",
    options: [
      "Serious",
      "Critical",
      "Minor",
      "Positive"
    ],
    correctAnswer: 0,
    explanation: "Serious means users complete the task with significant difficulty or error, prioritised in the next iteration, one level below Critical.\n\nCritical instead means users cannot complete the primary task at all, a more severe outcome than completing it with difficulty.\n\nMinor instead means users succeed but express confusion or frustration, a less severe outcome than significant difficulty or error.\n\nPositive instead documents things that worked well, not a problem of any severity."
  },
  {
    id: "csc306_ch5_321",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a point on the Automation Spectrum?",
    options: [
      "Full human control means AI provides no assistance at all",
      "Full AI control is described as common in the majority of everyday consumer products today",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Full human control meaning AI provides no assistance at all is stated directly, representing total human control with high cognitive load. Full AI control is instead described as rare and high-risk outside very narrow, tested domains, the opposite of being common in everyday products. Since only the Full human control statement is accurate, that is the correct answer."
  },
  {
    id: "csc306_ch5_322",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is an example of a positively worded SUS statement?",
    options: [
      "I thought the various functions in this system were well integrated",
      "I found the system unnecessarily complex",
      "I would need support to use this system",
      "I found the system very cumbersome to use"
    ],
    correctAnswer: 0,
    explanation: "'I found the various functions in this system were well integrated' is one of the five positively worded, odd-numbered SUS statements.\n\n'I found the system unnecessarily complex' is instead one of the five negatively worded, even-numbered statements.\n\n'I would need support to use this system' is instead one of the five negatively worded, even-numbered statements.\n\n'I found the system very cumbersome to use' is instead one of the five negatively worded, even-numbered statements."
  },
  {
    id: "csc306_ch5_323",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Automated accessibility audit tools alone are sufficient to fully certify that a product is accessible, with no further testing required.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Automated tools catch only about 30% of accessibility issues, and cannot detect poor alt text quality, logical reading order problems, or cognitive complexity, meaning human testing is still required."
  },
  {
    id: "csc306_ch5_324",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG success criterion, 3.3.1 at level A, requires errors to be identified in text, stating which field is wrong and why?",
    options: [
      "Error identification",
      "Contrast (minimum)",
      "Focus visible",
      "Keyboard"
    ],
    correctAnswer: 0,
    explanation: "Error identification, success criterion 3.3.1 at level A, requires errors to be identified in text, not colour alone, stating which field is wrong and why.\n\nContrast (minimum) instead requires specific colour contrast ratios, not error message wording.\n\nFocus visible instead requires visible keyboard focus outlines, not error message wording.\n\nKeyboard instead requires operability without a mouse, not error message wording."
  },
  {
    id: "csc306_ch5_325",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following is a recommended checkout design principle?",
    options: [
      "Multiple payment options should be offered, since fewer options mean fewer completed purchases",
      "A persistent order summary should let users see what they are buying throughout checkout",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Multiple payment options should be offered, since fewer payment options mean fewer completed purchases. A persistent order summary should separately let users see what they are buying throughout checkout, removed only on the final confirmation step. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc306_ch5_326",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which WCAG success criterion, 4.1.2 at level A, requires all UI components to have an accessible name, role, and state via HTML or ARIA?",
    options: [
      "Name, role, value",
      "Non-text content",
      "Contrast (minimum)",
      "Error identification"
    ],
    correctAnswer: 0,
    explanation: "Name, role, value, success criterion 4.1.2 at level A, requires all UI components to have an accessible name, role, and state via HTML or ARIA.\n\nNon-text content instead requires alt text for images, not component name, role, and state.\n\nContrast (minimum) instead requires specific colour contrast ratios, not component name, role, and state.\n\nError identification instead requires text-based error identification, not component name, role, and state."
  },
  {
    id: "csc306_ch5_327",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "The Purple Pound figure of 274 billion pounds is described as representing disabled people's annual spending power in the UK alone.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The Purple Pound is explicitly described as the annual spending power of disabled people in the UK alone, cited as part of the market expansion case for inclusive design."
  },
  {
    id: "csc306_ch5_328",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which category of disability is illustrated by blindness, deafness, or paralysis, conditions that are ongoing rather than expected to resolve?",
    options: [
      "Permanent",
      "Temporary",
      "Situational",
      "Organisational"
    ],
    correctAnswer: 0,
    explanation: "Permanent disability is illustrated by conditions like blindness, deafness, or paralysis, which are ongoing rather than expected to resolve.\n\nTemporary disability instead is illustrated by conditions like a broken arm or post-surgery recovery, expected to resolve over time.\n\nSituational disability instead is illustrated by conditions like bright sunlight or one hand occupied, arising from context rather than the body.\n\nOrganisational is not one of the three named disability duration categories in this material."
  },
  {
    id: "csc306_ch5_329",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes a Core Web Vital metric?",
    options: [
      "LCP measures how much content shifts unexpectedly during page load",
      "FID targets a response time of 2.5 seconds or less to the first interaction",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. LCP actually measures how quickly the main content loads, not layout shift, which is instead measured by CLS. FID instead targets a response of 100 milliseconds or less, not 2.5 seconds, which is instead the LCP target. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc306_ch5_330",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the Four Components of Information Architecture concerns how users find specific content when browsing fails, including query formulation and filter design?",
    options: [
      "Search systems",
      "Organisation systems",
      "Labelling systems",
      "Navigation systems"
    ],
    correctAnswer: 0,
    explanation: "Search systems concern how users find specific content when browsing fails, with query formulation, result display, and filter design determining whether search works in practice.\n\nOrganisation systems instead concern how content is categorised and structured, not the act of searching.\n\nLabelling systems instead concern the words used for categories and links, not the act of searching.\n\nNavigation systems instead concern how users move through content via menus and breadcrumbs, not the act of searching directly."
  },
  {
    id: "csc306_ch5_331",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Voice agents combine speech recognition, natural language processing, and synthesis, and introduce acoustic design challenges suited to ambient and hands-free contexts.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Voice agents combine speech recognition, NLP, and synthesis, adding acoustic design challenges, with ambient computing and hands-free contexts defining their use cases."
  },
  {
    id: "csc306_ch5_332",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "In the e-commerce funnel, roughly what percentage of users reach the Browse stage, covering product listings, search, filters, and categories?",
    options: [
      "About 60%",
      "About 100%",
      "About 30%",
      "About 8%"
    ],
    correctAnswer: 0,
    explanation: "Roughly 60% of users are estimated to reach the Browse stage, covering product listings, search, filters, and categories.\n\nAbout 100% instead represents the Awareness stage at the very top of the funnel, before any browsing occurs.\n\nAbout 30% instead represents the Product View stage, later in the funnel than Browse.\n\nAbout 8% instead represents the Checkout stage, much later in the funnel than Browse."
  },
  {
    id: "csc306_ch5_333",
    course: "CSC 306",
    chapter: "Chapter 5",
    text: "Which of the following accurately describes an AI ethics issue discussed in relation to HCI?",
    options: [
      "Algorithmic bias occurs when models trained on historical data replicate historical inequities",
      "Opacity and explainability means AI decisions are always fully transparent to users by default",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Algorithmic bias occurring when models trained on historical data replicate historical inequities is stated directly, illustrated by a hiring algorithm rejecting applicants like past rejections. Opacity and explainability instead states that most users cannot understand why an AI made a decision, the opposite of decisions being fully transparent by default. Since only the algorithmic bias statement is accurate, that is the correct answer."
  }
];

export default csc306Chapter5Questions;
