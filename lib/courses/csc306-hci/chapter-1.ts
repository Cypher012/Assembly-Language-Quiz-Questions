import { QuestionV2 } from "@/lib/quiz-types";

const csc306Chapter1: QuestionV2[] = [
  {
    id: "csc306_ch1_001",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The triad of Human-Computer Interaction consists of the Human, the Computer, and a third component. Which component focuses specifically on the dialogue, input, output, and feedback between the user and the system?",
    options: [
      "The Environment",
      "The Interaction",
      "The Interface",
      "The Ergonomics",
    ],
    correctAnswer: 1,
    explanation:
      "According to Lecture 1, the 'Interaction' component of the HCI triad focuses on the dialogue between humans and computers. This specifically encompasses input, output, feedback, and the experience in between.",
  },
  {
    id: "csc306_ch1_002",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "According to the historical timeline of HCI, the 1940s to 1950s was characterized by a command-line era dominated by expert operators with highly technical interactions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 1's history timeline states that the 1940s–50s represented the command-line era. During this time, interaction was minimal, highly technical, and strictly handled by expert operators.",
  },
  {
    id: "csc306_ch1_003",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In the context of the six usability dimensions defined by ISO 9241-11, which attribute measures how easily a user can figure out how to use an interface the first time they encounter it?",
    options: ["Efficiency", "Memorability", "Satisfaction", "Learnability"],
    correctAnswer: 3,
    explanation:
      "Lecture 1 outlines the six usability dimensions from ISO 9241-11, which include Learnability. Learnability specifically addresses how easily users can accomplish basic tasks the first time they encounter the design.",
  },
  {
    id: "csc306_ch1_004",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Who is credited with the invention of the computer mouse during the research breakthroughs of the 1960s to 1970s?",
    options: [
      "Ivan Sutherland",
      "Don Norman",
      "Douglas Engelbart",
      "Jakob Nielsen",
    ],
    correctAnswer: 2,
    explanation:
      "The history timeline in Lecture 1 identifies Douglas Engelbart's invention of the mouse as a major research breakthrough in the 1960s–70s era. This era also included Ivan Sutherland's Sketchpad.",
  },
  {
    id: "csc306_ch1_005",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer places a realistic-looking push button on a touch screen interface, but tapping the button does absolutely nothing. Which concept does this scenario demonstrate?",
    options: [
      "Broken affordance",
      "Hidden affordance",
      "Good affordance",
      "Cognitive affordance",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 1 defines a broken affordance as a situation where an object appears to offer an action, but the action fails to work. The realistic button visually promises functionality that it does not deliver.",
  },
  {
    id: "csc306_ch1_006",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which individual originally defined the concept of 'affordances' in the context of ecological psychology before it was adapted to digital interface design?",
    options: [
      "Don Norman",
      "James Gibson",
      "George Miller",
      "Douglas Engelbart",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 1 explicitly notes that the affordance definition was originally established by James Gibson in ecological psychology. It was later adapted for design by Don Norman.",
  },
  {
    id: "csc306_ch1_007",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The six usability dimensions defined by ISO 9241-11 include Learnability, Efficiency, Memorability, Errors, Error Recovery, and Satisfaction.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Master CBT Cheat Sheet and Lecture 1 note confirm that the six usability dimensions from ISO 9241-11 are Learnability, Efficiency, Memorability, Errors/Error Recovery, and Satisfaction.",
  },
  {
    id: "csc306_ch1_008",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A mobile app requires a user to swipe left on a list item to reveal a delete button, but there are absolutely no visual cues indicating this swipe action is possible. What type of affordance is this?",
    options: [
      "Broken affordance",
      "Good affordance",
      "Physical affordance",
      "Hidden affordance",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 1 defines a hidden affordance as an action that is possible but lacks perceptible visual cues. The swipe-to-delete function requires discovery because it does not visually prompt the user.",
  },
  {
    id: "csc306_ch1_009",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "How is Human-Computer Interaction formally defined within the discipline?",
    options: [
      "The engineering of faster computer processors and display monitors.",
      "The programming of graphical user interfaces for modern web applications.",
      "The study, design, and evaluation of how people interact with computing systems.",
      "The psychological analysis of human behavior in digital environments.",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 1 defines HCI as the study, design, and evaluation of how people interact with computing systems. The goal is to make these interactions more effective, efficient, and satisfying.",
  },
  {
    id: "csc306_ch1_010",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "When a physical door has a flat push plate but requires pulling to open, users consistently push it instead. This mismatch between perceived action and actual function is an example of what HCI concept?",
    options: [
      "Good affordance",
      "Broken affordance",
      "Systematic affordance",
      "Selective attention",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 1 categorizes mismatched expectations, such as pulling a flat plate, as a broken affordance. The physical form implies one action (pushing), but the object requires another (pulling).",
  },
  {
    id: "csc306_ch1_011",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "According to Miller's Law regarding working memory, the human brain can typically hold exactly 10 plus or minus 2 chunks of information.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 2 and the Master Cheat Sheet clarify that working memory capacity is actually 4 ± 1 chunks. Miller's Law was originally stated as 7 ± 2, but modern HCI recognizes the lower 4 ± 1 limit.",
  },
  {
    id: "csc306_ch1_012",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In Fitts's Law, the equation MT = a + b·log₂(2D/W) calculates movement time. What does the variable 'D' represent in this formula?",
    options: [
      "Difficulty of the task",
      "Distance to the target",
      "Diameter of the target",
      "Direction of the movement",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 2 outlines Fitts's Law, where 'D' stands for the Distance to the target. 'W' represents the Width of the target in the same formula.",
  },
  {
    id: "csc306_ch1_013",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer groups related menu items closely together so users perceive them as a single functional block. Which cognitive framework explains why users view close items as related?",
    options: [
      "Fitts's Law",
      "Hick's Law",
      "Gestalt principles",
      "The GOMS Model",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 2 introduces the six Gestalt principles, which explain how human perception groups visual elements. Placing items close together leverages the Gestalt principle of proximity.",
  },
  {
    id: "csc306_ch1_014",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A user is focused intensely on reading a dense report and entirely ignores a flashing notification in the corner of their screen. Which type of attention is the user exercising?",
    options: [
      "Divided attention",
      "Sustained attention",
      "Selective attention",
      "Distributed attention",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 2 describes selective attention as the ability to focus on one specific task while filtering out distracting stimuli. The user selectively ignores the flashing notification to continue reading.",
  },
  {
    id: "csc306_ch1_015",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "What is the primary purpose of Hick's Law in the context of user interface design?",
    options: [
      "Predicting the time it takes to make a decision based on the number of choices.",
      "Calculating the physical time required to move a pointer to a target area.",
      "Estimating the number of items a user can hold in their working memory.",
      "Determining the optimal contrast ratio for text readability on screens.",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 2 defines Hick's Law as a model that predicts decision time. It states that the time it takes to make a decision increases with the number and complexity of choices provided.",
  },
  {
    id: "csc306_ch1_016",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Distributed cognition suggests that human knowledge and cognitive processes are confined solely within the individual's brain.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 2 explains that Distributed Cognition argues the opposite. It posits that cognition is distributed across individuals, artifacts, and tools in the environment, rather than confined to one brain.",
  },
  {
    id: "csc306_ch1_017",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A user approaches a new software system with an existing idea of how it should work based on their past experiences with similar apps. What term describes this preexisting expectation?",
    options: [
      "System model",
      "Conceptual model",
      "Mental model",
      "Stage model",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 2 distinguishes between mental models and system models. A mental model is the user's internal expectation of how a system operates, formed by prior experience.",
  },
  {
    id: "csc306_ch1_018",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In the Stage Model of memory, information must successfully pass from sensory memory into which secondary stage before it can potentially be retained long-term?",
    options: [
      "Working memory",
      "Procedural memory",
      "Distributed memory",
      "Semantic memory",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 2's Stage Model illustrates how memory flows. Information moves from sensory memory into working memory, and only then can it be encoded into long-term memory.",
  },
  {
    id: "csc306_ch1_019",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The GOMS Model is a framework used to predict user behavior and efficiency. What do the letters in the acronym GOMS stand for?",
    options: [
      "Gestalt, Operations, Memory, Sustained attention",
      "Grouping, Organization, Mental models, System models",
      "Graphics, Output, Movement, Sensation",
      "Goals, Operators, Methods, Selection rules",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 2 introduces the GOMS Model as a predictive framework. The acronym stands directly for Goals, Operators, Methods, and Selection rules.",
  },
  {
    id: "csc306_ch1_020",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer simplifies a complex dropdown menu by categorizing 30 loose items into 5 broad, labeled groups. The designer is primarily applying which cognitive principle to reduce user decision time?",
    options: [
      "Fitts's Law",
      "Distributed Cognition",
      "Hick's Law",
      "Sustained Attention",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 2 highlights Hick's Law, which deals with decision time based on the number of choices. Categorizing choices reduces the immediate cognitive load and speeds up decision-making.",
  },
  {
    id: "csc306_ch1_021",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Anthropometrics is the study of the measurements and proportions of the human body, which directly informs physical ergonomics in design.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 3 defines anthropometrics precisely as the study of human body measurements. This data is essential for physical ergonomics to ensure devices fit the human form.",
  },
  {
    id: "csc306_ch1_022",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A user consistently experiences wrist pain after typing on a standard keyboard for eight hours a day. This condition falls under which category of ergonomic concern?",
    options: [
      "Cognitive overload",
      "RSI (Repetitive Strain Injury)",
      "Visual occlusion",
      "Fat-finger problem",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 3 discusses physical interaction risks, specifically identifying RSI (Repetitive Strain Injury). This occurs from prolonged, repetitive movements like extended keyboard use.",
  },
  {
    id: "csc306_ch1_023",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "When designing a mobile interface, if touch targets are placed too close together, users will frequently press the wrong option by mistake. What is this physical interaction issue called?",
    options: [
      "Occlusion",
      "Hidden gestures",
      "The fat-finger problem",
      "Repetitive strain",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 3 identifies the fat-finger problem as the challenge where touch targets are too small or clustered. It occurs because human fingertips are relatively large compared to tiny digital buttons.",
  },
  {
    id: "csc306_ch1_024",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The Web Content Accessibility Guidelines (WCAG) are built upon four fundamental principles represented by the acronym POUR. What do these letters signify?",
    options: [
      "Practical, Organized, Usable, Reliable",
      "Physical, Observable, Universal, Responsive",
      "Perceivable, Operable, Understandable, Robust",
      "Predictable, Optimized, Unified, Readable",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 3 states that WCAG's four principles are Perceivable, Operable, Understandable, and Robust. These form the POUR framework for accessible design.",
  },
  {
    id: "csc306_ch1_025",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A user attempts to draw a straight line on a digital tablet, but their own hand and stylus physically block their view of the canvas underneath. What is the technical term for this challenge?",
    options: [
      "The fat-finger problem",
      "Occlusion",
      "Ergonomic strain",
      "Hidden gesture",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 3 defines occlusion in the context of touch and stylus interfaces. It happens when the user's hand or fingers block part of the screen, obscuring important UI elements.",
  },
  {
    id: "csc306_ch1_026",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Cognitive ergonomics primarily focuses on how workplace policies, teamwork, and communication structures affect user interaction within an enterprise.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 3 explains that organisational ergonomics deals with workplace policies and teamwork. Cognitive ergonomics focuses on mental workload, memory, and reasoning.",
  },
  {
    id: "csc306_ch1_027",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer is comparing input modalities for a hands-free system. Which modality specifically relies on analyzing the user's pupil movements and gaze fixation?",
    options: [
      "Voice control",
      "Brain-Computer Interface",
      "Eye-tracking",
      "Touch gestures",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 3 lists various interaction modalities, noting that eye-tracking specifically monitors pupil movement and gaze to navigate or trigger actions in an interface.",
  },
  {
    id: "csc306_ch1_028",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In the context of physical input device strengths, which device is generally considered to offer the highest precision for pixel-perfect digital illustration?",
    options: ["Keyboard", "Stylus", "Game controller", "Voice command"],
    correctAnswer: 1,
    explanation:
      "Lecture 3 evaluates the strengths and weaknesses of input devices. The stylus is highlighted as the strongest tool for high precision tasks like digital drawing and illustration.",
  },
  {
    id: "csc306_ch1_029",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer implements a complex three-finger tap gesture to open a settings menu. New users struggle to discover this feature because there are no visual indicators on screen. What is this design flaw called?",
    options: [
      "Fat-finger problem",
      "Visual occlusion",
      "Hidden gestures",
      "Cognitive overload",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 3 discusses hidden gestures as a touch vocabulary issue. Because touch interfaces often lack permanent visual controls, multi-finger gestures can remain undiscoverable to users.",
  },
  {
    id: "csc306_ch1_030",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which branch of ergonomics focuses strictly on optimizing the mental workload, memory limitations, and decision-making processes of users interacting with a system?",
    options: [
      "Physical ergonomics",
      "Organisational ergonomics",
      "Anthropometric ergonomics",
      "Cognitive ergonomics",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 3 outlines the three ergonomic branches. Cognitive ergonomics is the branch dedicated to mental workload, perception, memory, and reasoning during interaction.",
  },
  {
    id: "csc306_ch1_031",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "User Interface (UI) design focuses on the overall journey, psychology, and satisfaction of the user, whereas User Experience (UX) focuses exclusively on visual layout and typography.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 4 clarifies the UI vs UX distinction. UX focuses on the overall journey and psychology, while UI focuses on the visual layout, aesthetics, and tangible interactive elements.",
  },
  {
    id: "csc306_ch1_032",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer manipulates text size and image placement on a web page so that the most critical information immediately catches the user's eye. Which specific design principle is being applied?",
    options: [
      "Internal consistency",
      "Visual hierarchy",
      "Error prevention",
      "Interface metaphor",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 4 defines visual hierarchy as the arrangement of elements to show their order of importance. Manipulating size and placement directs the user's attention deliberately.",
  },
  {
    id: "csc306_ch1_033",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "When scanning text-heavy web pages like articles or blogs, eye-tracking studies show that users typically scan the content in which specific shape?",
    options: ["Z-pattern", "X-pattern", "F-pattern", "Circular pattern"],
    correctAnswer: 2,
    explanation:
      "Lecture 4 contrasts scanning patterns, noting that the F-pattern is predominantly used by users when reading text-heavy content, scanning horizontally at the top and vertically down the left.",
  },
  {
    id: "csc306_ch1_034",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "According to Nielsen's usability heuristics, a system should always keep users informed about what is going on through appropriate feedback within a reasonable time. Which heuristic is this?",
    options: [
      "Match between system and the real world",
      "User control and freedom",
      "Consistency and standards",
      "Visibility of system status",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 4 lists the 10 Nielsen heuristics. 'Visibility of system status' dictates that the system must provide timely feedback to keep users informed about current operations.",
  },
  {
    id: "csc306_ch1_035",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "An e-commerce website uses a small cart icon to represent the area where users review items they intend to purchase. This design choice is a direct application of what HCI concept?",
    options: [
      "Error prevention hierarchy",
      "Visual hierarchy",
      "Interface metaphor",
      "Internal consistency",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 4 discusses interface metaphors. The Shopping Cart is a prime example of using a familiar real-world concept to help users understand a digital process.",
  },
  {
    id: "csc306_ch1_036",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Internal consistency means that an interface should function predictably and use uniform terminology across its own screens and modules.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 4 contrasts internal and external consistency. Internal consistency specifically demands uniformity within a single product's own screens and components.",
  },
  {
    id: "csc306_ch1_037",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A web application automatically checks a user's password strength while typing to ensure it meets security rules, thereby stopping them from submitting a weak password. Where does this fit in the error prevention hierarchy?",
    options: [
      "Providing a confirmation dialog for destructive actions",
      "Offering a clear error message after submission",
      "Providing a system-wide undo function",
      "Preventing the error from happening in the first place",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 4 covers the error prevention hierarchy. The highest and best level of the hierarchy is designing the system to prevent the error from happening in the first place.",
  },
  {
    id: "csc306_ch1_038",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A software application uses the standard keyboard shortcut Ctrl+C for copy and Ctrl+V for paste, matching the broader behavior of the user's operating system. What principle does this demonstrate?",
    options: [
      "External consistency",
      "Internal consistency",
      "Real-world consistency",
      "Visual hierarchy",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 4 defines external consistency as adhering to the broader industry standards and conventions outside the app, such as standard OS keyboard shortcuts.",
  },
  {
    id: "csc306_ch1_039",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which common interface metaphor relies on concepts like 'folders,' 'files,' and a 'trash can' to help users understand the underlying digital storage architecture?",
    options: [
      "The Desktop metaphor",
      "The Shopping Cart metaphor",
      "The App Grid metaphor",
      "The Z-pattern metaphor",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 4 lists interface metaphors, specifically noting the Desktop metaphor which maps physical office concepts (files, folders, trash) to digital file management.",
  },
  {
    id: "csc306_ch1_040",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A landing page with minimal text and a strong call-to-action button is designed so that the user's eye moves naturally from top-left, across to top-right, and down diagonally. Which visual layout pattern is this?",
    options: ["F-pattern", "Z-pattern", "Fitts's pattern", "Hick's pattern"],
    correctAnswer: 1,
    explanation:
      "Lecture 4 describes the Z-pattern as ideal for landing pages with low text density, moving the eye left-to-right, then diagonally down, ending on a call to action.",
  },
  {
    id: "csc306_ch1_041",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Qualitative user research focuses primarily on numerical data, broad surveys, and statistical metrics to answer 'how many' or 'how much.'",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 5 states that quantitative research deals with numbers and metrics. Qualitative research, on the other hand, deals with open-ended feedback and observing 'why' users behave a certain way.",
  },
  {
    id: "csc306_ch1_042",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A researcher observes how a user physically interacts with a grocery store app while sitting next to them in their actual kitchen environment. Which qualitative research method is being used?",
    options: [
      "Contextual inquiry",
      "Quantitative survey",
      "Diary study",
      "Unstructured interview",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 5 defines contextual inquiry as observing users in their natural, real-world context (like their kitchen) rather than in a sterile laboratory setting.",
  },
  {
    id: "csc306_ch1_043",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "After conducting user interviews, a design team groups various user quotes written on sticky notes into related themes to find underlying patterns. What is this specific synthesis method called?",
    options: [
      "Persona generation",
      "HMW framing",
      "Affinity mapping",
      "Contextual inquiry",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 5 outlines affinity mapping as a synthesis step where observations and quotes are placed on sticky notes and grouped by common themes to extract insights.",
  },
  {
    id: "csc306_ch1_044",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which research method asks users to self-report their daily experiences, habits, and interactions with a product over a prolonged period, typically spanning several weeks?",
    options: [
      "Contextual inquiry",
      "Structured interviews",
      "Diary studies",
      "Affinity mapping",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 5 identifies diary studies as a longitudinal method where users self-report their interactions over days or weeks to capture long-term behavior.",
  },
  {
    id: "csc306_ch1_045",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A design team frames a problem by asking, 'In what ways can we make the checkout process faster for returning users?' This specific ideation phrasing is known by what acronym?",
    options: ["GOMS", "HMW", "POUR", "SUS"],
    correctAnswer: 1,
    explanation:
      "Lecture 5 covers the HMW (How Might We) frame, which transforms problem statements into open-ended, optimistic questions designed to spark ideation.",
  },
  {
    id: "csc306_ch1_046",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Attitudinal research observes what users actually do in practice, while behavioural research listens to what users say they do or believe.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 5 explains the exact opposite. Attitudinal research looks at what people say or believe, whereas behavioural research tracks what they actually do.",
  },
  {
    id: "csc306_ch1_047",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A fictional character created to represent a primary user segment, complete with goals, frustrations, demographics, and a bio, is known as what?",
    options: [
      "An affinity map",
      "A contextual inquiry",
      "A functional requirement",
      "A persona",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 5 describes a persona as a fictionalized synthesis of user research that embodies a specific user segment with goals, needs, and frustrations.",
  },
  {
    id: "csc306_ch1_048",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A system requirement states that the web application must securely load its homepage in under 2 seconds. What category of requirement is this?",
    options: [
      "Functional requirement",
      "Non-functional requirement",
      "Organisational requirement",
      "UX requirement",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 5 categorizes system performance rules, such as loading times and security parameters, as non-functional requirements. They dictate how the system performs, not what it does.",
  },
  {
    id: "csc306_ch1_049",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "An interview format where the researcher follows a strict, unvarying list of predetermined questions without deviating or asking follow-ups is classified as what?",
    options: [
      "Semi-structured interview",
      "Unstructured interview",
      "Structured interview",
      "Contextual interview",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 5 defines a structured interview as one that follows a strict script without deviation, often used for standardized data collection.",
  },
  {
    id: "csc306_ch1_050",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A foundational document that outlines the project goals, target audience, scope, and expected deliverables before the actual design work begins is called what?",
    options: ["Persona", "Design brief", "Affinity map", "HMW frame"],
    correctAnswer: 1,
    explanation:
      "Lecture 5 lists the components of a design brief, which is the foundational document serving to align stakeholders on project scope and audience before work begins.",
  },
  {
    id: "csc306_ch1_051",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The five core stages of the Design Thinking process are Empathise, Define, Ideate, Prototype, and Test.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 6 outlines the Design Thinking process, affirming that its five stages are Empathise, Define, Ideate, Prototype, and Test.",
  },
  {
    id: "csc306_ch1_052",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer folds a piece of paper in half three times to create eight small panels, then sketches eight distinct layout ideas rapidly within eight minutes. What is this ideation technique called?",
    options: [
      "Storyboarding",
      "Thumbnail sketching",
      "Crazy 8s",
      "Affinity mapping",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 6 describes Crazy 8s as a rapid sketching exercise where a designer forces themselves to generate eight quick ideas in eight minutes using folded paper.",
  },
  {
    id: "csc306_ch1_053",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A team tests a voice assistant prototype where a human researcher secretly types responses in another room, making the user believe the AI is fully functional. What is this prototyping method called?",
    options: [
      "Click-through prototype",
      "Wizard of Oz prototype",
      "Paper prototype",
      "Functional prototype",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 6 explains the Wizard of Oz prototype, where backend functionality is faked by a human operator, allowing designers to test complex interactions without writing code.",
  },
  {
    id: "csc306_ch1_054",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which level of prototype fidelity typically involves simple grayscale boxes, minimal detail, and focuses strictly on layout and information structure?",
    options: [
      "Mid-fi wireframes",
      "Hi-fi wireframes",
      "Lo-fi wireframes",
      "Functional prototypes",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 6 defines lo-fi wireframes as basic structural representations using grayscale boxes and rough elements to establish layout before focusing on visual design.",
  },
  {
    id: "csc306_ch1_055",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "During usability testing, a user encounters a system error that prevents them entirely from completing the main checkout task. How would this issue be classified in terms of severity?",
    options: [
      "Minor problem",
      "Cosmetic problem",
      "Not a problem",
      "Catastrophic problem",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 6's testing section (and Lecture 7's Nielsen severity scale) dictates that a usability problem completely blocking task completion is classified as a catastrophic problem (Severity 4).",
  },
  {
    id: "csc306_ch1_056",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The iterative design cycle implies that a product is designed sequentially through distinct phases and is never revisited once development is officially complete.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 6 emphasizes that the design cycle is iterative, meaning it is continuously looped. Testing informs new ideation, and products are constantly revisited and refined.",
  },
  {
    id: "csc306_ch1_057",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer strings together multiple high-fidelity screens using software so that users can tap buttons to move between static pages, but there is no actual backend database. What type of prototype is this?",
    options: [
      "Wizard of Oz prototype",
      "Paper prototype",
      "Functional prototype",
      "Click-through prototype",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 6 categorizes designs linked together by clickable hotspots without real code as click-through prototypes. They simulate navigation but lack true functionality.",
  },
  {
    id: "csc306_ch1_058",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which sketching technique involves drawing sequential panels to illustrate a user's journey or scenario interacting with a product over time?",
    options: [
      "Crazy 8s",
      "Storyboarding",
      "Thumbnail sketching",
      "Wireframing",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 6 describes storyboarding as sequential sketching, similar to a comic strip, used to map out the user's emotional journey and context over time.",
  },
  {
    id: "csc306_ch1_059",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A prototype that is built using actual development code (e.g., HTML/CSS/JS) and can process real user text input is categorized as what type of prototype?",
    options: [
      "Wizard of Oz prototype",
      "Click-through prototype",
      "Functional prototype",
      "Paper prototype",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 6 defines a functional prototype as one coded in actual languages like HTML/CSS/JS, allowing it to take real inputs and simulate complex system logic.",
  },
  {
    id: "csc306_ch1_060",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "What is the primary purpose of moving from a low-fidelity wireframe to a high-fidelity prototype during the system design process?",
    options: [
      "To quickly brainstorm as many structural layouts as possible.",
      "To test visual design, branding, and detailed interactions before coding.",
      "To define the functional requirements of the backend database architecture.",
      "To conduct a cognitive walkthrough of the abstract information architecture.",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 6 indicates that hi-fi prototypes are used to lock down and test the visual design, branding, typography, and micro-interactions right before handing off to developers.",
  },
  {
    id: "csc306_ch1_061",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Formative evaluation is conducted during the design process to shape and improve the product, while summative evaluation assesses the final product against specific metrics.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 7 explicitly defines formative evaluation as shaping the design during the process, and summative evaluation as testing the finished product against benchmarks.",
  },
  {
    id: "csc306_ch1_062",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "According to Jakob Nielsen's widely cited research on usability testing, testing with how many users will typically uncover about 85% of core usability problems?",
    options: ["15 users", "5 users", "50 users", "100 users"],
    correctAnswer: 1,
    explanation:
      "Lecture 7 features Nielsen's rule of thumb that just 5 test users are generally enough to uncover 85% of a system's usability problems.",
  },
  {
    id: "csc306_ch1_063",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A usability test where a researcher is present in the room to guide the user, ask probing questions, and observe body language is known as what?",
    options: [
      "Unmoderated usability testing",
      "Expert-based heuristic evaluation",
      "Moderated usability testing",
      "Automated testing",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 7 contrasts moderated and unmoderated testing. A moderated test involves a researcher actively guiding the session and probing for deeper insights.",
  },
  {
    id: "csc306_ch1_064",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which expert-based evaluation method involves a reviewer stepping through a specific task scenario and answering four specific questions about the user's mental state at each step?",
    options: [
      "Heuristic evaluation",
      "System Usability Scale",
      "A/B testing",
      "Cognitive walkthrough",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 7 defines the cognitive walkthrough as a method where an expert steps through a task, answering four questions (know it? notice it? understand it? get feedback?).",
  },
  {
    id: "csc306_ch1_065",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "On Nielsen's severity scale for classifying usability problems discovered during evaluation, what number corresponds to a 'catastrophic' usability problem?",
    options: ["3", "5", "4", "10"],
    correctAnswer: 2,
    explanation:
      "Lecture 7 outlines Nielsen's severity scale from 0 to 4. Level 4 represents a catastrophic problem that must be fixed before the product can be released.",
  },
  {
    id: "csc306_ch1_066",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The System Usability Scale (SUS) relies on behavioral data generated from an eye-tracking camera to calculate its final score.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 7 defines SUS as a 10-item questionnaire. It relies on attitudinal survey data (user ratings), not behavioral biometric data from eye-tracking.",
  },
  {
    id: "csc306_ch1_067",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A post-test survey returns a System Usability Scale (SUS) score of 72. According to standard SUS bands provided in the note, how is this score categorized?",
    options: ["Excellent", "Good", "OK", "Poor"],
    correctAnswer: 1,
    explanation:
      "Lecture 7 and the Master Cheat Sheet list the SUS bands. A score of 68–84 falls into the 'Good' categorization.",
  },
  {
    id: "csc306_ch1_068",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In a cognitive walkthrough, the evaluator must ask four specific questions at each step. Which of the following is one of those four mandated questions?",
    options: [
      "Is the system aesthetically pleasing and minimalist?",
      "Does the system provide a 4.5:1 contrast ratio?",
      "Did the user complete the task within 2 seconds?",
      "Will the user notice that the correct action is available?",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 7's cognitive walkthrough requires four questions: 1) Will the user know what to do? 2) Will they notice the action is available? 3) Will they understand it? 4) Will they get feedback?",
  },
  {
    id: "csc306_ch1_069",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A design team plots discovered usability issues on a 2D grid based on how much value fixing the issue brings versus how hard it is for developers to implement. What is this synthesis tool called?",
    options: [
      "Nielsen severity scale",
      "UMUX matrix",
      "Impact/effort matrix",
      "Stage model",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 7 mentions the impact/effort matrix as a tool for prioritizing issues. It plots fixes based on the positive impact on UX against the development effort required.",
  },
  {
    id: "csc306_ch1_070",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "An evaluator inspects a user interface by systematically comparing it against an established list of 10 broad principles of good design. What is this evaluation method called?",
    options: [
      "Cognitive walkthrough",
      "Heuristic evaluation",
      "Summative usability testing",
      "Contextual inquiry",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 7 describes heuristic evaluation as an expert-based method where a reviewer checks an interface against established principles, typically Nielsen's 10 heuristics.",
  },
  {
    id: "csc306_ch1_071",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Data collected during evaluation takes various forms. Which of the following is considered a type of physiological data?",
    options: [
      "Think-aloud audio recordings",
      "SUS questionnaire scores",
      "Task completion times",
      "Eye-tracking heatmaps",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 7 categorizes data types. Physiological data measures bodily responses, explicitly including eye-tracking heatmaps, heart rate, and biometric stress indicators.",
  },
  {
    id: "csc306_ch1_072",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The social model of disability argues that people are disabled primarily by barriers in society and poorly designed environments, not directly by their medical impairment.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 8 contrasts the medical and social models. The social model posits that disability is caused by systemic societal barriers and non-inclusive design, rather than the impairment itself.",
  },
  {
    id: "csc306_ch1_073",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A person holding a baby in one arm is trying to navigate a smartphone app with their remaining free hand. What type of disability framework does this scenario represent?",
    options: [
      "Permanent disability",
      "Situational disability",
      "Temporary disability",
      "Cognitive disability",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 8 provides examples of the disability spectrum. Holding a baby limits physical capability based on the immediate environment, making it a situational disability.",
  },
  {
    id: "csc306_ch1_074",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A user has broken their wrist and cannot physically use a standard mouse for six weeks while wearing a cast. This is an example of what type of disability?",
    options: [
      "Situational disability",
      "Social disability",
      "Temporary disability",
      "Permanent disability",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 8 defines temporary disabilities as impairments that resolve over time, specifically using a broken arm or wrist as an example.",
  },
  {
    id: "csc306_ch1_075",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "According to the Web Content Accessibility Guidelines (WCAG) AA standard, what is the minimum contrast ratio required for normal-sized text against its background?",
    options: ["3:1", "7:1", "2.5:1", "4.5:1"],
    correctAnswer: 3,
    explanation:
      "Lecture 8 and the Master Cheat Sheet specify WCAG contrast rules. Normal text requires a 4.5:1 ratio for AA compliance.",
  },
  {
    id: "csc306_ch1_076",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "What is the recommended minimum touch target size according to Apple's inclusive design guidelines?",
    options: ["44x44pt", "48x48dp", "9mm", "24x24px"],
    correctAnswer: 0,
    explanation:
      "Lecture 8 outlines touch target guidelines, stating Apple recommends a minimum of 44x44pt, while Google recommends 48x48dp.",
  },
  {
    id: "csc306_ch1_077",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "When testing a system for accessibility, automated testing tools can typically catch 100% of all WCAG violations without ever needing human review.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 8 warns about the 30%/70% split. Automated tools only catch about 30% of accessibility issues, meaning human testing is required for the remaining 70%.",
  },
  {
    id: "csc306_ch1_078",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which design concept argues that a single environment or product should be usable by all people, to the greatest extent possible, without the need for specialized adaptation?",
    options: [
      "Accommodation",
      "Situational Design",
      "The Social Model",
      "Universal Design",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 8 defines Universal Design as a 'one size fits all' approach, where a single robust design attempts to serve everyone without needing separate accommodations.",
  },
  {
    id: "csc306_ch1_079",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer is creating an interface for users with ADHD. According to the inclusive design guidance provided, what is a primary best practice?",
    options: [
      "Use long blocks of complex text to hold attention.",
      "Minimize distractions and visual clutter.",
      "Rely entirely on audio cues without providing text.",
      "Ensure contrast ratios are exactly 3:1.",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 8 includes specific guidance for cognitive inclusion. For ADHD, the core guidance is to minimize distractions, animations, and visual clutter to aid focus.",
  },
  {
    id: "csc306_ch1_080",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "What is the highest and most rigorous conformance level outlined by the Web Content Accessibility Guidelines (WCAG)?",
    options: ["AA", "A", "AAA", "AAAA"],
    correctAnswer: 2,
    explanation:
      "Lecture 8 lists the three WCAG conformance levels. Level A is minimum, Level AA is the standard target, and Level AAA is the highest, most rigorous standard.",
  },
  {
    id: "csc306_ch1_081",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Information Architecture is composed of four main components: Organization Systems, Labeling Systems, Navigation Systems, and what else?",
    options: [
      "Search Systems",
      "Prototyping Systems",
      "Payment Systems",
      "Evaluating Systems",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 9 identifies the four components of Information Architecture: Organization, Labeling, Navigation, and Search Systems.",
  },
  {
    id: "csc306_ch1_082",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A transactional search query happens when a user navigates directly to a specific website by typing the company's exact name into the search bar.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 9 defines navigating directly to a site via a name as a 'navigational' query. A transactional query implies the intent to perform an action, like buying a product.",
  },
  {
    id: "csc306_ch1_083",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A user enters the search query 'how to fix a leaky faucet' into a search engine. What category of search query is this?",
    options: ["Navigational", "Transactional", "Informational", "Situational"],
    correctAnswer: 2,
    explanation:
      "Lecture 9 outlines three query types. Searching for instructions or knowledge, such as 'how to fix' something, is classified as an informational query.",
  },
  {
    id: "csc306_ch1_084",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In the e-commerce browse-to-buy funnel, a user is currently browsing broader product category pages. What design principle is critical for ensuring they move to the next specific stage?",
    options: [
      "A streamlined checkout process",
      "Hidden navigational menus",
      "Clear filtering and sorting options",
      "Autoplaying video advertisements",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 9 explains that during the category browsing phase of the funnel, strong Information Architecture with clear filtering and sorting is essential to help users narrow down choices.",
  },
  {
    id: "csc306_ch1_085",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "An e-commerce site displays a prominent padlock icon and security badges near the credit card input field. What are these visual elements called?",
    options: [
      "Dark patterns",
      "Trust signals",
      "Core Web Vitals",
      "Persuasion patterns",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 9 discusses checkout design and identifies padlocks and security badges as 'trust signals.' They reassure users that their financial data is secure.",
  },
  {
    id: "csc306_ch1_086",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "According to Core Web Vitals, a Largest Contentful Paint (LCP) measurement of 2.5 seconds or less is considered a 'Good' user experience.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 9 and the Master Cheat Sheet both confirm that the Core Web Vitals threshold for a 'Good' LCP is 2.5 seconds or less.",
  },
  {
    id: "csc306_ch1_087",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A website intentionally tricks a user into subscribing to a recurring newsletter by hiding the opt-out checkbox in tiny, low-contrast text. What is this deceptive design practice known as?",
    options: [
      "A persuasion pattern",
      "A trust signal",
      "A dark pattern",
      "A broken affordance",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 9 defines dark patterns as user interfaces intentionally designed to trick users into doing things they might not want to do, such as hiding opt-out mechanisms.",
  },
  {
    id: "csc306_ch1_088",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "What is the recommended target threshold for the First Input Delay (FID) Core Web Vital metric to ensure a responsive experience?",
    options: [
      "2.5 seconds or less",
      "100ms or less",
      "0.1 or less",
      "500ms or less",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 9 outlines Core Web Vitals. The target for First Input Delay (FID), which measures interaction responsiveness, is 100 milliseconds or less.",
  },
  {
    id: "csc306_ch1_089",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer begins a web project by creating layouts for smartphone screens first, before scaling the design up for tablet and desktop monitors. What is this approach called?",
    options: [
      "Universal design",
      "Responsive evaluation",
      "Mobile-first design",
      "Agile design",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 9 covers mobile-first design principles. This methodology dictates designing for the smallest, most constrained screens first, and progressively enhancing for larger displays.",
  },
  {
    id: "csc306_ch1_090",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The Core Web Vital metric known as Cumulative Layout Shift (CLS) measures which aspect of the user experience?",
    options: [
      "The time it takes for the largest image to render.",
      "Visual stability and unexpected shifting of page elements.",
      "The delay before a button responds to a click.",
      "The total size of all images on a webpage.",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 9 defines CLS (Cumulative Layout Shift) as the metric that measures visual stability, specifically tracking how much page elements jump or shift unexpectedly during loading.",
  },
  {
    id: "csc306_ch1_091",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The evolution of AI in HCI is categorized into three eras. Which of the following best represents the focus of the current third era?",
    options: [
      "Large Language Models (LLMs) and generative conversational interfaces.",
      "Strictly scripted dialogue trees with no machine learning.",
      "Command-line terminals with punch cards.",
      "The invention of the mouse and graphical user interfaces.",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 10 notes three eras of AI and HCI. The current era is defined by the integration of Large Language Models (LLMs) capable of fluid, generative conversations.",
  },
  {
    id: "csc306_ch1_092",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The first era of AI and HCI was heavily characterized by modern Large Language Models capable of fluid, open-ended conversational interfaces.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Lecture 10 notes that the first era was defined by rigid, scripted conversational interfaces, not modern LLMs. LLMs characterize the current (third) era.",
  },
  {
    id: "csc306_ch1_093",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A streaming application observes the genres of movies a user watches and automatically generates a personalized list of similar titles. This is an application of what AI technique?",
    options: [
      "Scripted conversational interfaces",
      "The five-level automation spectrum",
      "Recommendation systems",
      "Code generation AI",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 10 lists recommendation systems as a key AI implementation. They use machine learning to observe user habits and suggest personalized content.",
  },
  {
    id: "csc306_ch1_094",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A conversational interface can only respond to a strict, hard-coded list of specific keywords and fails entirely if the user deviates from the expected phrasing. What type of interface is this?",
    options: [
      "LLM interface",
      "Voice interface",
      "Adaptive UI",
      "Scripted interface",
    ],
    correctAnswer: 3,
    explanation:
      "Lecture 10 contrasts interface types. A scripted conversational interface operates on rigid rules and predetermined dialogue trees, failing if the input is unexpected.",
  },
  {
    id: "csc306_ch1_095",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In the context of AI in the design process, which of the following is an area where AI is actively being utilized by practitioners?",
    options: [
      "Conducting fully unmoderated human usability tests in physical labs.",
      "Code generation and ideation.",
      "Replacing the need for the five stages of Design Thinking entirely.",
      "Removing the requirement to follow accessibility guidelines.",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 10 highlights that AI is used in the design process to assist with rapid ideation, research synthesis, and generating functional code for prototypes.",
  },
  {
    id: "csc306_ch1_096",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "One of the five named AI UX ethics issues concerns the potential for algorithms to amplify and reflect human biases already present in their training data.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Lecture 10 outlines AI ethics issues. A prominent concern is algorithmic bias, where AI systems inherit and sometimes amplify the prejudices found in their training datasets.",
  },
  {
    id: "csc306_ch1_097",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A self-driving car system requires the human driver to keep their hands on the wheel and take over at any moment, as the AI only handles steering under specific conditions. Where does this sit conceptually?",
    options: [
      "In the domain of contextual inquiry",
      "On the five-level automation spectrum",
      "As a type of structural uncertainty",
      "Within the GOMS model",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 10 discusses the five-level automation spectrum, often applied to autonomous vehicles, which categorizes how much control the AI has versus the human.",
  },
  {
    id: "csc306_ch1_098",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "An AI system suggests a risky action to a user but includes a textual explanation showing exactly what data it used to arrive at that conclusion. What design strategy is this addressing?",
    options: [
      "Replacing the human in the loop",
      "Applying the medical model of disability",
      "Mitigating AI uncertainty by providing transparency",
      "Using a conversational voice UI",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 10 addresses AI uncertainty. Providing explanations and showing how the AI made a decision is a key strategy for transparency, helping the user trust the system.",
  },
  {
    id: "csc306_ch1_099",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Context-aware computing relies on sensors to understand the user's environment. Which of the following is the best example of a context-aware UI?",
    options: [
      "A static website rendering identically on every device.",
      "A keyboard requiring firm key presses.",
      "A smartphone screen dimming automatically when the user enters a dark room.",
      "A physical door with a push affordance.",
    ],
    correctAnswer: 2,
    explanation:
      "Lecture 10 defines context-aware computing as systems that sense their physical environment. A screen reacting to ambient room light is a classic application of this.",
  },
  {
    id: "csc306_ch1_100",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "What term describes an AI system actively building a dynamic profile of a user's preferences, habits, and skills to tailor the interface specifically to them?",
    options: [
      "Context-aware computing",
      "User modelling",
      "Natural Language Processing",
      "Heuristic evaluation",
    ],
    correctAnswer: 1,
    explanation:
      "Lecture 10 introduces user modelling. This involves the AI tracking behaviors to create a profile, which is then used to adapt the UI to the user's specific needs and skill level.",
  },
];

export default csc306Chapter1;
