import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture4UiUxQuestions: QuestionV2[] = [
  {
    id: "csc306_ch8_001",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_002",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_003",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_004",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_005",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_006",
    course: "CSC 306",
    chapter: "Chapter 8",
    text: "Under visual hierarchy, the Typography element recommends never using more than how many typefaces?",
    options: [
      "2", "5", "10", "1"
    ],
    correctAnswer: 0,
    explanation: "Typography recommends never using more than 2 typefaces, since weight, size, and style already communicate importance without adding more fonts.\n\n5 typefaces substantially exceeds the recommended limit stated in this material.\n\n10 typefaces vastly exceeds the recommended limit stated in this material.\n\n1 typeface understates the recommended limit, which allows up to 2."
  },
  {
    id: "csc306_ch8_007",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_008",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_009",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_010",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_011",
    course: "CSC 306",
    chapter: "Chapter 8",
    text: "Which type of feedback message is illustrated by 'You have unsaved changes. Leave anyway?', interrupting the user to prevent data loss?",
    options: [
      "Warning", "Confirmation", "Error", "Progress"
    ],
    correctAnswer: 0,
    explanation: "Warning is illustrated by 'You have unsaved changes. Leave anyway?', which interrupts the user to prevent data loss.\n\nConfirmation is instead illustrated by 'Your file has been saved,' closing the loop on a completed action, not interrupting to prevent loss.\n\nError is instead illustrated by a precise, solution-oriented message like a password requirement, not an interruption before an action.\n\nProgress is instead illustrated by an upload percentage and time remaining, not an interruption before an action."
  },
  {
    id: "csc306_ch8_012",
    course: "CSC 306",
    chapter: "Chapter 8",
    text: "Which type of feedback message is illustrated by 'Password must contain at least 8 characters,' described as precise, non-blaming, and solution-oriented?",
    options: [
      "Error", "Confirmation", "Warning", "Progress"
    ],
    correctAnswer: 0,
    explanation: "Error is illustrated by 'Password must contain at least 8 characters,' described as precise, non-blaming, and solution-oriented.\n\nConfirmation is instead illustrated by a short, specific, actionable message closing the loop on a successful action, not identifying a problem.\n\nWarning is instead illustrated by an interruption before a destructive action, not a validation message.\n\nProgress is instead illustrated by an upload percentage and time remaining, not a validation message."
  },
  {
    id: "csc306_ch8_013",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_014",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_015",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_016",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_017",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_018",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_019",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_020",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_021",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_022",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_023",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_024",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_025",
    course: "CSC 306",
    chapter: "Chapter 8",
    text: "UI and UX are described as often conflated, always related, but never the same thing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The material opens the UI versus UX discussion with exactly this framing: often conflated, always related, never the same thing."
  },
  {
    id: "csc306_ch8_026",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_027",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_028",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_029",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_030",
    course: "CSC 306",
    chapter: "Chapter 8",
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
    id: "csc306_ch8_031",
    course: "CSC 306",
    chapter: "Chapter 8",
    text: "What cost ratio is cited for fixing a usability problem in design compared to fixing it after release?",
    options: [
      "$1 to $100",
      "$1 to $2",
      "$1 to $10,000",
      "$100 to $1"
    ],
    correctAnswer: 0,
    explanation: "The cited cost ratio is $1 to $100, meaning fixing a usability problem in design costs a fraction of what fixing it after release costs.\n\n$1 to $2 substantially understates the cited cost multiplier.\n\n$1 to $10,000 substantially overstates the cited cost multiplier.\n\n$100 to $1 reverses the direction of the ratio; design-stage fixes are the cheaper side, not the more expensive side."
  }
];

export default csc306Lecture4UiUxQuestions;
