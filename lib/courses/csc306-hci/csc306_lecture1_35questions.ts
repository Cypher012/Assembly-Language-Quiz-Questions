import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture1Questions: QuestionV2[] = [
  {
    id: "csc306_ch1_001",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which definition of Human-Computer Interaction, given by ACM SIGCHI in 1992, best captures the discipline?",
    options: [
      "A discipline concerned with designing, evaluating, and implementing interactive systems for human use",
      "A discipline focused solely on writing code that contains no software bugs",
      "A discipline concerned only with making computer screens look visually attractive",
      "A discipline that studies how separate computer systems exchange data with each other",
    ],
    correctAnswer: 0,
    explanation:
      "The ACM SIGCHI 1992 definition describes HCI as a discipline concerned with the design, evaluation, and implementation of interactive systems for human use, together with the study of the major phenomena surrounding them.\n\nWriting bug-free code relates instead to the traditional development approach's concern with testing and specification, not to this definition of HCI itself.\n\nThe lecture explicitly states that HCI is not about making the interface look pretty, so visual attractiveness alone does not capture the discipline.\n\nStudying how separate computer systems exchange data describes computer networking rather than the interaction between people and computers that HCI is concerned with.",
  },
  {
    id: "csc306_ch1_002",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Within the human, computer, and interaction breakdown of HCI, which of the following best defines interaction?",
    options: [
      "The physical hardware ranging from a desktop computer to a large-scale system",
      "Any direct or indirect communication between a human and a computer",
      "An individual user or a group of users operating a system",
      "The physical and cognitive ergonomics involved in operating a device",
    ],
    correctAnswer: 1,
    explanation:
      "Interaction is defined as any direct or indirect communication between a human and a computer, making it the third of the three parts of HCI alongside human and computer.\n\nThe description of hardware ranging from a desktop computer to a large-scale system is instead how the computer part of HCI is defined, not interaction.\n\nAn individual user or group of users describes the human part of HCI, the first of the three components.\n\nPhysical and cognitive ergonomics is listed in the course syllabus as a later topic and is not how interaction is defined here.",
  },
  {
    id: "csc306_ch1_003",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A pilot under pressure shuts down the wrong engine, and the plane crashes as a result. Which importance of HCI does this real example primarily illustrate?",
    options: [
      "Direct correlation between HCI and sales",
      "Reducing the cost of customer training and support",
      "Health and safety concerns",
      "HCI can provide a person with a job",
    ],
    correctAnswer: 2,
    explanation:
      "The pilot shutting down the wrong engine and crashing is presented as a real example under health and safety concerns, showing how poor interface design in a cockpit can have fatal consequences.\n\nDirect correlation between HCI and sales is instead illustrated by the separate NYNEX example, where improving an interface reduced call time and produced a financial benefit, not a safety outcome.\n\nReducing the cost of customer training and support is a different listed reason for HCI's importance and is not what the pilot example demonstrates.\n\nHCI providing a person with a job is also a separate listed reason and has no connection to the pilot and engine scenario.",
  },
  {
    id: "csc306_ch1_004",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Fletcher Buckley states that a large share of software projects are either delivered late or fail to satisfy the specification. What is that percentage?",
    options: ["20%", "35%", "55%", "85%"],
    correctAnswer: 3,
    explanation:
      "Fletcher Buckley is quoted as stating that 85% of software projects are either late or delivered without satisfying the specification, a figure used to introduce the question of why projects fail.\n\n20% is far too low to match the figure attributed to Fletcher Buckley.\n\n35% likewise understates the stated figure.\n\n55% is closer but still does not match the 85% figure given.",
  },
  {
    id: "csc306_ch1_005",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following is a reason why HCI is important?",
    options: [
      "It can reduce the cost of customer training and support",
      "It guarantees that software will never contain bugs",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "Reducing the cost of customer training and support is one of the five reasons listed for the importance of HCI, alongside preventing accidents, health and safety concerns, sales, and job opportunities. The claim that HCI guarantees bug-free software is not among the reasons listed and is not supported anywhere, so only the training and support cost claim is correct.",
  },
  {
    id: "csc306_ch1_006",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "An interface uses ctrl+C for copy, ctrl+S for save, and ctrl+O for open, following the same ctrl-plus-first-initial pattern throughout. What is the main benefit of this kind of consistency?",
    options: [
      "Consistent interfaces are easier to learn and use",
      "It removes the need for the interface to ever be updated again",
      "It automatically translates the interface into other languages",
      "It guarantees every user will use the exact same features",
    ],
    correctAnswer: 0,
    explanation:
      "The main benefit of designing interfaces with similar operations and elements for similar tasks, such as the ctrl-plus-initial pattern, is stated to be that consistent interfaces are easier to learn and use.\n\nConsistency does not remove the need for future updates, since consistency can break down and need adjustment as new commands are added.\n\nAutomatic translation into other languages is not mentioned anywhere in the discussion of consistency.\n\nConsistency concerns how operations behave and look, not a guarantee that every user will use identical features.",
  },
  {
    id: "csc306_ch1_007",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "The traditional approach to systems development generally treats the user interface as just another software component, separate from its main focus on specification, maintainability, and testing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. The traditional approach to system development is described as concerned with producing software, software specification, maintainability, and testing, while generally considering the interface to be just another software component rather than a central design concern.",
  },
  {
    id: "csc306_ch1_008",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In the waterfall model of the traditional systems development approach, which stage comes immediately after Design?",
    options: [
      "Analysis",
      "Implementation",
      "Testing",
      "Operation and maintenance",
    ],
    correctAnswer: 1,
    explanation:
      "The waterfall model runs Requirements specification, Analysis, Design, Implementation, Testing, then Operation and maintenance in sequence, placing Implementation directly after Design.\n\nAnalysis comes before Design in this sequence, not after it.\n\nTesting follows Implementation rather than Design directly.\n\nOperation and maintenance is the final stage of the model, occurring well after Design and several other stages.",
  },
  {
    id: "csc306_ch1_009",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which set of qualities does the 1989 definition, from Interacting with Computers, identify as the goal of HCI to develop or improve?",
    options: [
      "Speed, complexity, novelty, and cost",
      "Portability, scalability, security, and modularity",
      "Safety, utility, effectiveness, efficiency, and usability",
      "Popularity, profitability, branding, marketing, and virality",
    ],
    correctAnswer: 2,
    explanation:
      "The 1989 definition states that the goal of HCI is to develop or improve the safety, utility, effectiveness, efficiency, and usability of systems that include computers.\n\nSpeed, complexity, novelty, and cost are not the qualities named in this definition.\n\nPortability, scalability, security, and modularity are software engineering qualities not mentioned in this particular definition.\n\nPopularity, profitability, branding, and marketing are business concerns not listed as the goal of HCI in this definition.",
  },
  {
    id: "csc306_ch1_010",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "What does User-Centered Design focus on understanding throughout development?",
    options: [
      "Only the visual layout and color scheme of the interface",
      "Only the technical constraints of the underlying hardware platform",
      "Only the marketing strategy planned for the finished product",
      "Users, their goals and tasks, and their surrounding environment",
    ],
    correctAnswer: 3,
    explanation:
      "User-Centered Design is described as an approach that focuses on understanding users, their goals and tasks, and the environment, including physical, organizational, and social aspects, paying attention to these throughout development.\n\nFocusing only on visual layout and color scheme ignores the goals, tasks, and environment central to the definition.\n\nFocusing only on hardware constraints also leaves out the user, goal, task, and environment focus central to the definition.\n\nFocusing only on marketing strategy is unrelated to the understanding of users and their context that defines this approach.",
  },
  {
    id: "csc306_ch1_011",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Consider two statements about definitions of interaction design. Statement 1: Sharp, Rogers and Preece (2002) define interaction design as designing interactive products to support people in their everyday and working lives. Statement 2: Winograd (1997) defines interaction design as the design of spaces for human communication and interaction. Which is accurate?",
    options: [
      "Statement 1 only",
      "Statement 2 only",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "Both statements are accurate. Sharp, Rogers and Preece (2002) define interaction design as designing interactive products to support people in their everyday and working lives, and Winograd (1997) defines it as the design of spaces for human communication and interaction. Since both definitions are correctly stated, both apply.",
  },
  {
    id: "csc306_ch1_012",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which combination best captures the goals of interaction design?",
    options: [
      "Usable products that are easy to learn and involve users",
      "Developing the cheapest possible product regardless of the user's experience",
      "Developing products exclusively through automated testing without any user input",
      "Developing products that prioritize visual complexity over ease of use",
    ],
    correctAnswer: 0,
    explanation:
      "The goals of interaction design are to develop usable products, meaning products that are easy to learn, effective to use, and provide an enjoyable experience, and to involve users in the design process.\n\nPrioritizing the cheapest possible product regardless of user experience contradicts the emphasis on usability and enjoyment in this goal.\n\nRelying exclusively on automated testing without user input contradicts the explicit goal of involving users in the design process.\n\nPrioritizing visual complexity over ease of use runs against the stated goal of developing products that are easy to learn and effective to use.",
  },
  {
    id: "csc306_ch1_013",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Why is HCI generally preferred over CHI (Computer-Human Interaction) by researchers, even though both terms refer broadly to the same field?",
    options: [
      "Because CHI is a newer term that no research group has adopted",
      "Because HCI emphasizes the importance of the human in the interaction",
      "Because HCI and CHI refer to two completely unrelated fields",
      "Because CHI is associated exclusively with hardware design",
    ],
    correctAnswer: 1,
    explanation:
      "HCI is generally preferred by researchers because it emphasizes the importance of the human, even though HCI and CHI broadly refer to the same field.\n\nCHI is not described as a newer, unadopted term; the most prominent research group, SIGCHI, in fact uses the CHI ordering in its name.\n\nHCI and CHI are explicitly described as referring broadly to the same field, not to unrelated fields.\n\nNeither term is described as being associated exclusively with hardware design.",
  },
  {
    id: "csc306_ch1_014",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "HCI relies heavily on certain fields beyond computing and works closely with other fields within computing. Which of the following belongs to the fields HCI works closely with in computing, rather than the fields it relies on beyond computing?",
    options: [
      "Psychology and cognitive sciences",
      "Design",
      "Artificial intelligence",
      "Human factors and ergonomics",
    ],
    correctAnswer: 2,
    explanation:
      "Artificial intelligence is grouped among the fields in computing that HCI works closely with, alongside information science, visualization and graphics, and vision, rather than among the fields HCI relies on beyond computing.\n\nPsychology and cognitive sciences are grouped among the fields HCI relies on heavily beyond computing, not among the computing fields it works closely with.\n\nDesign is likewise grouped among the fields HCI relies on beyond computing.\n\nHuman factors, described in terms of ergonomics and kinesthesiology, is also grouped among the fields HCI relies on beyond computing rather than the computing fields it works closely with.",
  },
  {
    id: "csc306_ch1_015",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A designer can directly design a user experience that every person who uses their product will feel.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. It is explicitly stated that you cannot design a user experience, only design for a user experience, since how a person actually feels when using a product is shaped by the individual and cannot be directly controlled by the designer.",
  },
  {
    id: "csc306_ch1_016",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Garrett (2010) states that every product used by someone has a user experience, citing examples like newspapers and ketchup bottles. What does this best illustrate about the scope of user experience?",
    options: [
      "User experience only applies to products with a graphical screen",
      "User experience is limited to products designed after 2010",
      "User experience only matters for products sold internationally",
      "User experience applies broadly to any product a person uses",
    ],
    correctAnswer: 3,
    explanation:
      "The quote uses everyday physical objects like newspapers and ketchup bottles to show that any product used by someone has a user experience, meaning the concept applies well beyond software or digital interfaces.\n\nRestricting user experience to products with a graphical screen contradicts the examples given, since ketchup bottles and newspapers have no screen at all.\n\nThe quote is not about when a product was designed, so limiting user experience to products designed after 2010 misreads the point being illustrated.\n\nThe quote does not restrict user experience to internationally sold products; it uses everyday objects as examples of the concept's broad scope.",
  },
  {
    id: "csc306_ch1_017",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which combination of qualities is credited for the iPod's user experience success?",
    options: [
      "Simple, elegant, a distinct brand, and pleasurable",
      "Complex, feature-heavy, low-cost, and purely utilitarian",
      "Loud, colorful, fully customizable, and open-source",
      "Minimal branding, generic design, and bulk pricing",
    ],
    correctAnswer: 0,
    explanation:
      "The iPod's user experience success is credited to being simple, elegant, having a distinct brand, being pleasurable, and becoming a must-have fashion item with catchy names.\n\nComplex and feature-heavy is the opposite of the simple, elegant quality credited, and low-cost or purely utilitarian framing does not match the fashion-item, pleasurable framing given.\n\nLoud, colorful, fully customizable, and open-source are not qualities credited for the iPod's success.\n\nMinimal branding and generic design directly contradict the description of the iPod as having a distinct brand.",
  },
  {
    id: "csc306_ch1_018",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following best defines accessibility in interaction design?",
    options: [
      "The degree to which a product's source code is made publicly available",
      "How usable and accessible a product is for as many people",
      "The degree to which a product is affordable for low-income users",
      "The degree to which a product functions without an internet connection",
    ],
    correctAnswer: 1,
    explanation:
      "Accessibility is defined as the degree to which a product is usable and accessible by as many people as possible, with a focus on disability described as a mental or physical impairment that has an adverse effect on everyday life and is long term.\n\nPublicly available source code is not part of this definition and concerns software licensing rather than accessibility.\n\nAffordability for low-income users is an economic concern not connected to this definition of accessibility.\n\nFunctioning without an internet connection is a technical capability unrelated to the disability-focused definition of accessibility.",
  },
  {
    id: "csc306_ch1_019",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following best describes an affordance?",
    options: [
      "A fixed set of legal requirements every interface must satisfy",
      "A written manual explaining every feature of a product",
      "An attribute of an object that signals its use",
      "A marketing technique used to advertise a product's features",
    ],
    correctAnswer: 2,
    explanation:
      "An affordance is an attribute of an object that allows people to know how to use it, with the examples given of a mouse button inviting pushing and a door handle affording pulling.\n\nA fixed set of legal requirements is not how an affordance is defined, and no such requirement is mentioned in this context.\n\nA written manual explaining features is a separate form of documentation, not the perceptual cue that defines an affordance.\n\nA marketing technique is unrelated to the perceptual, how-to-use-it cue that defines an affordance.",
  },
  {
    id: "csc306_ch1_020",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following best defines design principles?",
    options: [
      "Strict mathematical formulas that guarantee a correct interface design",
      "Legal requirements that all software interfaces must satisfy",
      "A fixed checklist that must be completed before any product can launch",
      "Generalizable abstractions for design, drawn from theory, experience, and common sense",
    ],
    correctAnswer: 3,
    explanation:
      "Design principles are generalizable abstractions for thinking about different aspects of design, described as the do's and don'ts of interaction design, derived from a mix of theory-based knowledge, experience, and common sense.\n\nDesign principles are not described as strict mathematical formulas, since they are described as abstractions rather than formulas.\n\nDesign principles are not framed as legal requirements.\n\nDesign principles are not presented as a fixed checklist for product launch.",
  },
  {
    id: "csc306_ch1_021",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "In the designer, user, and system model, what does the system image represent?",
    options: [
      "What the system actually presents to the user directly",
      "The designer's original sketch made before development begins",
      "The marketing image used to advertise the finished product",
      "The user's personal preferences before they have used the product",
    ],
    correctAnswer: 0,
    explanation:
      "The designer, user, and system model shows a design model held by the designer, a user's model held by the user, and a system image, which is what the system actually presents and is the basis from which the user forms their own model.\n\nThe designer's original sketch corresponds more closely to the design model, not the system image, which concerns what the finished system presents.\n\nA marketing image is not one of the three elements named in this model.\n\nThe user's preferences before using the product are not part of the system image, which concerns what the system itself presents rather than prior user preferences.",
  },
  {
    id: "csc306_ch1_022",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A settings screen lets users customize the layout in unconventional ways that are slightly less efficient than the default arrangement, and the designer allows this instead of locking the layout down. Which AskTOG interaction design principle does this best reflect?",
    options: ["Fitts's Law", "Autonomy", "Metaphors", "Explorable interfaces"],
    correctAnswer: 1,
    explanation:
      "Autonomy is enabling users to make their own decisions, even if those decisions are less efficient or aesthetically poor, which matches a designer allowing a less efficient custom layout rather than locking it down.\n\nFitts's Law concerns the time needed to acquire a target based on its distance and size, not a user's freedom to customize a layout.\n\nMetaphors concerns choosing familiar real-world concepts to represent interface actions, which is unrelated to allowing customization choices.\n\nExplorable interfaces concerns giving users landmarks and the ability to undo actions safely, a different principle from allowing less efficient customization.",
  },
  {
    id: "csc306_ch1_023",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A settings menu buries an important feature five layers deep, specifically to make the interface look cleaner and simpler at first glance. Which AskTOG interaction design principle warns against this kind of design choice?",
    options: ["Autonomy", "Metaphors", "Discoverability", "Fitts's Law"],
    correctAnswer: 2,
    explanation:
      "Discoverability rests on the statement that any attempt to hide complexity will serve to increase it, which is exactly the risk created by burying an important feature five layers deep to appear simpler.\n\nAutonomy concerns letting users make their own decisions rather than concealing features from them.\n\nMetaphors concerns using familiar real-world concepts to represent actions, not the depth at which a feature is buried in a menu.\n\nFitts's Law concerns the time to acquire a target based on distance and size, not how deeply a feature is hidden in a menu structure.",
  },
  {
    id: "csc306_ch1_024",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following reflects the explorable interfaces principle?",
    options: [
      "Hiding all navigation options until the user completes a tutorial",
      "Removing the ability to undo actions so users learn to be careful",
      "Forcing users through a fixed sequence of screens with no way to explore",
      "Giving users well-marked landmarks, allowing undo, and reasons to stay in the interface",
    ],
    correctAnswer: 3,
    explanation:
      "Explorable interfaces give users well-marked roads and landmarks, allow undo as a way out, and make it attractive to stay in the interface through a clear, visible workflow.\n\nHiding navigation until a tutorial is completed contradicts the idea of giving users landmarks to explore with from the start.\n\nRemoving the ability to undo directly contradicts the explicit instruction to allow undo as a way out.\n\nForcing a fixed sequence with no way to explore is the opposite of an explorable interface, which is meant to mimic the safety and predictability of a landscape users can navigate freely.",
  },
  {
    id: "csc306_ch1_025",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A file-transfer app uses a folder icon and a trash-can icon so that users instantly understand how to organize and delete files, based on objects they already recognize. Which interaction design principle does this best demonstrate?",
    options: ["Metaphors", "Fitts's Law", "Discoverability", "Autonomy"],
    correctAnswer: 0,
    explanation:
      "Metaphors involve choosing concepts that enable users to instantly grasp the interface by appealing to familiar real-world objects, which matches using a folder icon and a trash-can icon to represent organizing and deleting files.\n\nFitts's Law concerns the time to acquire a target based on its distance and size, not the use of familiar real-world imagery.\n\nDiscoverability concerns whether hidden complexity is exposed rather than concealed, which is not what icon choice addresses here.\n\nAutonomy concerns letting users make their own decisions, which is unrelated to using recognizable icons to convey meaning.",
  },
  {
    id: "csc306_ch1_026",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Based on Fitts's Law, which of the following targets would take the least time for a user to acquire?",
    options: [
      "A small target far from the cursor",
      "A large target close to the cursor",
      "A large target far from the cursor",
      "A small target close to the cursor",
    ],
    correctAnswer: 1,
    explanation:
      "Fitts's Law states that the time to acquire a target is a function of the distance to and the size of the target, so a large target placed close to the cursor combines the fastest conditions on both factors.\n\nA small target far from the cursor combines the slowest conditions on both distance and size, making it the hardest to acquire quickly.\n\nA large target far from the cursor benefits from size but is still slowed by the added distance, making it slower than a large, close target.\n\nA small target close to the cursor benefits from short distance but is slowed by its small size, so it remains slower to acquire than a large target at the same close distance.",
  },
  {
    id: "csc306_ch1_027",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Hotel guests repeatedly press elevator floor buttons with no response, because nothing on the panel indicates that a room card must be inserted into a nearby slot first. Which design problem does this scenario best illustrate?",
    options: [
      "Poor visibility of what action is required",
      "A missing metaphor for the required action",
      "A lack of constraints on user actions",
      "Poor internal consistency between screens",
    ],
    correctAnswer: 0,
    explanation:
      "This mirrors the elevator example used to illustrate poor visibility, where it is not visible as to what to do, since nothing on the panel signals that a room card must be inserted before the buttons will work.\n\nA missing metaphor would mean the panel used no recognizable real-world concept at all, which is a different problem from simply failing to show the needed action.\n\nA lack of constraints would mean users could press an unlimited or incorrect range of options, not that a necessary first step is invisible.\n\nInternal consistency concerns whether operations behave the same way within an application, not whether a required action is visible to the user in the first place.",
  },
  {
    id: "csc306_ch1_028",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following best matches the definition of feedback in interaction design?",
    options: [
      "Restricting the possible actions a user can perform at any given moment",
      "Designing interfaces to use similar operations and elements for similar tasks",
      "Allowing users to make their own decisions even if less efficient",
      "Sending information back to the user about what action has been done",
    ],
    correctAnswer: 3,
    explanation:
      "Feedback is sending information back to the user about what has been done, including sound, highlighting, animation, and combinations of these, such as a highlight or sound when a screen button is clicked.\n\nRestricting possible actions describes constraints, a separate principle from informing the user about what has already happened.\n\nUsing similar operations and elements for similar tasks describes consistency, not feedback.\n\nAllowing users to make their own decisions describes autonomy, a different principle from reporting back on completed actions.",
  },
  {
    id: "csc306_ch1_029",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following best describes the purpose of constraints in interaction design?",
    options: [
      "Restricting the actions a user can perform, to prevent errors",
      "Expanding the number of actions available so users have maximum freedom",
      "Recording a full history of every action a user has ever performed",
      "Translating an interface automatically into multiple spoken languages",
    ],
    correctAnswer: 0,
    explanation:
      "Constraints are defined as restricting the possible actions that can be performed, which helps prevent a user from selecting an incorrect option, illustrated by the example that a key can only be inserted into a lock in one way.\n\nExpanding the number of available actions is the opposite of constraining them, and does not match how constraints are defined.\n\nRecording a full history of user actions describes a logging or undo mechanism, not the restriction of available actions.\n\nAutomatic translation into multiple languages is unrelated to restricting the actions a user can perform.",
  },
  {
    id: "csc306_ch1_030",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A company builds a mobile app where every screen within the app behaves the same way, but the app's shortcuts do not match the shortcuts used by the company's desktop software. Which pair of concepts does this best illustrate?",
    options: [
      "External consistency achieved without internal consistency",
      "Internal consistency achieved without external consistency",
      "Neither internal nor external consistency",
      "Both internal and external consistency",
    ],
    correctAnswer: 1,
    explanation:
      "Internal consistency refers to designing operations to behave the same way within a single application, which is achieved here since every screen behaves the same. External consistency refers to designing operations to be the same across different applications and devices, which is not achieved here since the app's shortcuts do not match the desktop software. This scenario is therefore internal consistency without external consistency.\n\nExternal consistency without internal consistency would require the opposite pattern, matching the desktop software's shortcuts while behaving differently from screen to screen within the app, which is not what is described.\n\nNeither internal nor external consistency would require the app to also behave inconsistently within itself, contradicting every screen behaving the same way.\n\nBoth internal and external consistency would require the app's shortcuts to match the desktop software as well, which the scenario explicitly says does not happen.",
  },
  {
    id: "csc306_ch1_031",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Telephones and remote controls place 1, 2, and 3 along the top row of their keypad, while calculators and computer keypads place 7, 8, and 9 along the top row. Which concept does this difference best illustrate?",
    options: [
      "Internal consistency",
      "Discoverability",
      "External inconsistency",
      "Constraints",
    ],
    correctAnswer: 2,
    explanation:
      "Phones and remote controls placing 1, 2, 3 on top while calculators and computer keypads place 7, 8, 9 on top is a case of external inconsistency, since the same kind of numeric keypad is laid out differently across different categories of device.\n\nInternal consistency concerns behavior within a single application or device, not a layout difference between two different categories of device.\n\nDiscoverability concerns whether a hidden action is revealed to the user, not how two devices are laid out relative to each other.\n\nConstraints concern restricting the actions a user can perform, not the arrangement of numbers on a keypad.",
  },
  {
    id: "csc306_ch1_032",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "A desktop tower has two identical-looking ports for a mouse and a keyboard, and users often plug each device into the wrong port. Which solution addresses this kind of ambiguous design?",
    options: [
      "Removing one of the two ports entirely",
      "Requiring users to memorize the correct port from a manual",
      "Making both ports the exact same shape and color",
      "Using direct adjacent mapping or color coding for each connector",
    ],
    correctAnswer: 3,
    explanation:
      "The proposed solutions for this kind of ambiguous port design are direct adjacent mapping between an icon and its connector, and color coding to associate each connector with its label, both intended to make the correct port more logical to identify.\n\nRemoving one of the two ports entirely would eliminate a needed device connection rather than clarify which port is which.\n\nRequiring users to memorize the correct port from a manual places the burden on the user's memory instead of fixing the design itself.\n\nMaking both ports the exact same shape and color would make the ambiguity worse, not better, since it removes any visual distinction between them.",
  },
  {
    id: "csc306_ch1_033",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which pairing correctly matches an interface element with the affordance it provides?",
    options: [
      "A scrollbar, which affords moving up and down",
      "A scrollbar, which affords deleting a file",
      "An icon, which affords resizing the entire window",
      "A mouse button, which affords pulling like a door handle",
    ],
    correctAnswer: 0,
    explanation:
      "A scrollbar is given as an example of an affordance, since it affords moving up and down, matching how its shape and position signal that kind of action to the user.\n\nA scrollbar does not afford deleting a file; that action is not associated with a scrollbar's shape or position.\n\nAn icon is a real interface element that affords clicking, but resizing an entire window is not the affordance associated with an icon.\n\nA mouse button affords pushing, not pulling; pulling is instead the affordance associated with a door handle, so this option swaps the two examples.",
  },
  {
    id: "csc306_ch1_034",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Norman argues that interfaces should not be described as having 'real' affordances the way physical objects do. Which idea does he propose instead?",
    options: [
      "Interfaces should abandon the concept of affordance entirely",
      "Interfaces are better understood as having perceived affordances from learned conventions",
      "Interfaces should mimic the exact physical weight and texture of real objects",
      "Interfaces cannot be designed by anyone who has not studied ecological psychology",
    ],
    correctAnswer: 1,
    explanation:
      "Norman argues that because interfaces are virtual and do not have affordances the way physical objects do, they are better conceptualized as having perceived affordances: learned conventions of arbitrary mappings between an action and its effect at the interface.\n\nNorman's argument reframes affordance for interfaces rather than abandoning the concept entirely.\n\nHis argument concerns learned conventions between action and effect, not the physical weight or texture of objects.\n\nNothing in this argument restricts interface design to people who have studied ecological psychology; that field is only mentioned as the origin of the term affordance itself.",
  },
  {
    id: "csc306_ch1_035",
    course: "CSC 306",
    chapter: "Chapter 1",
    text: "Which of the following accurately describes a required first step in the vending machine or elevator examples of bad design?",
    options: [
      "The vending machine requires users to insert their bill before pushing any button to activate the card reader",
      "The hotel elevator panel clearly labels the card slot with a bright arrow pointing to it",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "Neither statement is accurate. The vending machine actually requires users to push a button to activate the card reader before inserting the bill, the reverse of what this option claims. The hotel elevator panel does not clearly label the card slot; instead, nothing on the panel indicates that a card must be inserted before the buttons will work. Since both specific statements are inaccurate, none of these applies.",
  },
];

export default csc306Lecture1Questions;
