import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture1IntroQuestions: QuestionV2[] = [
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
  }
];

export default csc306Lecture1IntroQuestions;
