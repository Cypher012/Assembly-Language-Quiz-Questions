import { QuestionV2 } from "@/lib/quiz-types";

const csc308Chapter1Questions: QuestionV2[] = [
  {
    id: "csc308_ch1_001",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A process comprises which two aspects?",
    options: [
      "Akoko (Temporal) and Aye (Spatial)",
      "Digital and analog",
      "Constant and variable",
      "Regular and irregular",
    ],
    correctAnswer: 0,
    explanation:
      "A process comprises two aspects: Akoko (Temporal) and Aye (Spatial).\n\nDigital and analog is not a distinction the source draws for the aspects of a process.\n\nConstant and variable are numerical-term classifications introduced later, not the two aspects of a process itself.\n\nRegular and irregular describe the state of Constant versus Quantity/Quality later in the note, not the two aspects of a process.",
  },
  {
    id: "csc308_ch1_002",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The Temporal aspect of a process is simplified through instances of which pair?",
    options: [
      "Location and Displacement",
      "Ipo (State) and Isipo (Transition)",
      "Digit and Number",
      "Constant and Fraction",
    ],
    correctAnswer: 1,
    explanation:
      "The Temporal aspect is simplified through instances of Ipo (State) and Isipo (Transition).\n\nLocation and Displacement instead simplify the Spatial aspect, not the Temporal aspect.\n\nDigit and Number are terms from the later hierarchy section, not the two instances the Temporal aspect is directly simplified into.\n\nConstant and Fraction are numerical-term classifications, not the State/Transition pair used to simplify the Temporal aspect.",
  },
  {
    id: "csc308_ch1_003",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The Spatial aspect of a process is simplified through instances of which pair?",
    options: [
      "Ipo (State) and Isipo (Transition)",
      "Digit and Letter",
      "Ido (Location) and Itapo (Displacement)",
      "Positive and Negative",
    ],
    correctAnswer: 2,
    explanation:
      "The Spatial aspect is simplified through instances of Ido (Location) and Itapo (Displacement).\n\nIpo (State) and Isipo (Transition) instead simplify the Temporal aspect, not the Spatial aspect.\n\nDigit and Letter are alphabets used to construct Numbers and Names respectively, not the pair the Spatial aspect is directly simplified into.\n\nPositive and Negative are a binary opposite pair discussed later for Quantity, not the Location/Displacement pair for the Spatial aspect.",
  },
  {
    id: "csc308_ch1_004",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A pair of Ipo (States) is distinguished by which term?",
    options: [
      "Alafo, a Gap",
      "Isipo, a Transition",
      "Itapo, a Displacement",
      "Isi, an Interval",
    ],
    correctAnswer: 3,
    explanation:
      "A pair of Ipo (States) is distinguished by Isi, an Interval.\n\nAlafo, a Gap, is instead what distinguishes a pair of Locations, the spatial analog of Interval, not the temporal one.\n\nIsipo, a Transition, is the movement between states itself, not the term that distinguishes a pair of states.\n\nItapo, a Displacement, is the spatial analog of Transition, not the term distinguishing a pair of states.",
  },
  {
    id: "csc308_ch1_005",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A pair of Ido (Locations) is separated by which term?",
    options: [
      "Alafo, a Gap",
      "Isi, an Interval",
      "Isipo, a Transition",
      "Ipo, a State",
    ],
    correctAnswer: 0,
    explanation:
      "A pair of Ido (Locations) is separated by Alafo, a Gap.\n\nIsi, an Interval, is instead what distinguishes a pair of States, the temporal analog of Gap, not the spatial one.\n\nIsipo, a Transition, is the temporal movement itself, not the term separating a pair of locations.\n\nIpo, a State, is a single temporal instance, not the term separating a pair of locations.",
  },
  {
    id: "csc308_ch1_006",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The Temporal aspect of a process is expressed through which kind of term?",
    options: [
      "Oruko (Nominal-terms or Names)",
      "Onka (Numerical-terms or Numbers)",
      "Ite (Letters)",
      "Idi (Variable) exclusively",
    ],
    correctAnswer: 1,
    explanation:
      "The Temporal aspect is expressed through Onka (Numerical-terms or Numbers), which reckon the logic ascribed to the recursion formulated for temporal state instances.\n\nOruko (Nominal-terms or Names) instead expresses the Spatial aspect, ascribing identity to the structure of location, not the temporal aspect.\n\nIte (Letters) are the alphabet used to construct Names, a component of the spatial rendering, not the term expressing the temporal aspect directly.\n\nIdi (Variable) is a later, more specific concept introduced under Quantity, not the general term for what expresses the temporal aspect.",
  },
  {
    id: "csc308_ch1_007",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The string for cueing a Number is constructed with which term, drawn from a numbering scheme's alphabet?",
    options: [
      "Ite (Letters)",
      "Oruko (Names)",
      "Ika (Digits)",
      "Idi (Variable)",
    ],
    correctAnswer: 2,
    explanation:
      "The string for cueing a Number is constructed with Ika (Digits), drawn from a numbering scheme's alphabet.\n\nIte (Letters) are instead drawn from a writing scheme's orthography to construct the string for a Name, not a Number.\n\nOruko (Names) is the nominal-term itself, expressed through the spatial aspect, not the alphabet used to build a Number string.\n\nIdi (Variable) is a numerical concept introduced later under Quantity, not the alphabet used to construct a Number string.",
  },
  {
    id: "csc308_ch1_008",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The string for cueing a Name is constructed with which term, drawn from a writing scheme's orthography?",
    options: [
      "Ika (Digits)",
      "Onka (Numbers)",
      "Eyo (Constant)",
      "Ite (Letters)",
    ],
    correctAnswer: 3,
    explanation:
      "The string for cueing a Name is constructed with Ite (Letters), drawn from a writing scheme's orthography.\n\nIka (Digits) are instead drawn from a numbering scheme's alphabet to construct a Number, not a Name.\n\nOnka (Numbers) is the numerical-term itself, expressed through the temporal aspect, not the alphabet used to build a Name string.\n\nEyo (Constant) is a numerical concept introduced later, not the alphabet used to construct a Name string.",
  },
  {
    id: "csc308_ch1_009",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which aspect of a process is described as the focus of Scientific and Engineering problem-solving in this course?",
    options: [
      "The Temporal aspect",
      "The Spatial aspect",
      "Both aspects equally",
      "Neither aspect; focus is on Nominal-terms",
    ],
    correctAnswer: 0,
    explanation:
      "The Temporal aspect of a process is explicitly stated to be the focus in Scientific and Engineering problem-solving for this course.\n\nThe Spatial aspect is explicitly stated to be outside the purview of this course, the opposite of being the focus.\n\nThe two aspects are not treated equally; the course explicitly narrows its focus to the Temporal aspect alone.\n\nThe course focuses on Onka (Numerical-terms), which express the Temporal aspect, not on Oruko (Nominal-terms), which express the Spatial aspect.",
  },
  {
    id: "csc308_ch1_010",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which equation correctly expresses the Temporal aspect of a process?",
    options: [
      "Temporal aspect = Location + Displacement",
      "Temporal aspect = State + Transition",
      "Temporal aspect = Digit + Number",
      "Temporal aspect = Constant + Fraction",
    ],
    correctAnswer: 1,
    explanation:
      "Equation 1.1 defines the Temporal aspect of a process as State plus Transition.\n\nLocation plus Displacement is instead Equation 1.4, the definition of the Spatial aspect, not the Temporal one.\n\nDigit plus Number is not a foundational equation given for either aspect of a process.\n\nConstant plus Fraction is not a foundational equation given for either aspect of a process.",
  },
  {
    id: "csc308_ch1_011",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which equation correctly expresses a Transition?",
    options: [
      "Transition = Location + Gap",
      "Transition = Digit times Base",
      "Transition = State + Interval",
      "Transition = State(i+1) minus State(i)",
    ],
    correctAnswer: 2,
    explanation:
      "Equation 1.2 defines Transition as State plus Interval.\n\nLocation plus Gap is instead Equation 1.5, the definition of Displacement, the spatial analog of Transition, not Transition itself.\n\nDigit times Base relates to the later polynomial representation of a Constant, not the definition of Transition.\n\nState(i+1) minus State(i) is instead Equation 1.3, the definition of Interval, not Transition.",
  },
  {
    id: "csc308_ch1_012",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which equation correctly defines an Interval?",
    options: [
      "Interval = Location(i+1) minus Location(i)",
      "Interval = State plus Transition",
      "Interval = Digit(i) times Base(i)",
      "Interval = State(i+1) minus State(i)",
    ],
    correctAnswer: 3,
    explanation:
      "Equation 1.3 defines an Interval as State(i+1) minus State(i).\n\nLocation(i+1) minus Location(i) is instead Equation 1.6, the definition of a Gap, the spatial analog of Interval, not Interval itself.\n\nState plus Transition is instead Equation 1.1, the definition of the Temporal aspect, not an Interval.\n\nDigit(i) times Base(i) relates to the later polynomial representation of a Constant, not the definition of an Interval.",
  },
  {
    id: "csc308_ch1_013",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which equation correctly expresses a Displacement?",
    options: [
      "Displacement = Location + Gap",
      "Displacement = State + Interval",
      "Displacement = Location(i+1) minus Location(i)",
      "Displacement = Digit + Base",
    ],
    correctAnswer: 0,
    explanation:
      "Equation 1.5 defines Displacement as Location plus Gap.\n\nState plus Interval is instead Equation 1.2, the definition of Transition, the temporal analog of Displacement, not Displacement itself.\n\nLocation(i+1) minus Location(i) is instead Equation 1.6, the definition of a Gap, not Displacement.\n\nDigit plus Base is not a foundational equation given in the source.",
  },
  {
    id: "csc308_ch1_014",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which equation correctly defines a Gap?",
    options: [
      "Gap = State(i+1) minus State(i)",
      "Gap = Location(i+1) minus Location(i)",
      "Gap = Location + Displacement",
      "Gap = Digit(i) times Base(i)",
    ],
    correctAnswer: 1,
    explanation:
      "Equation 1.6 defines a Gap as Location(i+1) minus Location(i).\n\nState(i+1) minus State(i) is instead Equation 1.3, the definition of an Interval, the temporal analog of Gap, not Gap itself.\n\nLocation plus Displacement is instead Equation 1.4, the definition of the Spatial aspect, not a Gap.\n\nDigit(i) times Base(i) relates to the later polynomial representation of a Constant, not the definition of a Gap.",
  },
  {
    id: "csc308_ch1_015",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is the correct spatial-aspect analog of the temporal equation 'Transition = State + Interval'?",
    options: [
      "Gap = Location + Displacement",
      "Location = Displacement + Gap",
      "Displacement = Location + Gap",
      "Transition = Location + Gap",
    ],
    correctAnswer: 2,
    explanation:
      "Displacement = Location + Gap is the spatial-aspect analog of Transition = State + Interval, following the parallel structure between Equations 1.1-1.3 for the temporal aspect and Equations 1.4-1.6 for the spatial aspect.\n\nGap = Location + Displacement reverses the actual roles of Gap and Displacement in the equation, since Gap is instead defined as the difference between two locations, not their sum.\n\nLocation = Displacement + Gap is not one of the six foundational equations given.\n\nTransition = Location + Gap incorrectly mixes a temporal term, Transition, with spatial terms, Location and Gap.",
  },
  {
    id: "csc308_ch1_016",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Equations 1.1 through 1.3 formalize the Temporal aspect, while Equations 1.4 through 1.6 formalize the Spatial aspect, which the course explicitly places outside its purview.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Equations 1.1-1.3 formalize the Temporal aspect (Temporal aspect = State + Transition; Transition = State + Interval; Interval = State(i+1) - State(i)), and Equations 1.4-1.6 formalize the Spatial aspect, which is explicitly stated to be not in the purview of this course.",
  },
  {
    id: "csc308_ch1_017",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following pairs is correctly matched: a term from the Temporal aspect with its Spatial-aspect analog?",
    options: [
      "Ipo (State) with Itapo (Displacement)",
      "Isipo (Transition) with Ido (Location)",
      "Isi (Interval) with Isipo (Transition)",
      "Isi (Interval) with Alafo (Gap)",
    ],
    correctAnswer: 3,
    explanation:
      "Isi (Interval), which distinguishes a pair of States, is the direct temporal analog of Alafo (Gap), which separates a pair of Locations, making this the correctly matched pair.\n\nIpo (State) is the temporal analog of Ido (Location), not Itapo (Displacement), which is instead the analog of Isipo (Transition).\n\nIsipo (Transition) is the temporal analog of Itapo (Displacement), not Ido (Location), which is instead the analog of Ipo (State).\n\nIsi (Interval) and Isipo (Transition) are both temporal terms; Isi does not have Isipo as its spatial analog, since Isi's analog is the spatial term Alafo (Gap).",
  },
  {
    id: "csc308_ch1_018",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The instrument determining the dimension prescribed for the Spatial aspect of a process is described as which of the following?",
    options: [
      "The instrument of language used to formulate that dimension",
      "The base of the numbering scheme in use",
      "The criterion Tito (Consistency)",
      "The polynomial representation of a Constant",
    ],
    correctAnswer: 0,
    explanation:
      "The Spatial aspect, though outside this course's purview, is described as rendering Location and Displacement, determined by the instrument of language used to formulate the dimension prescribed for its spatial aspect.\n\nThe base of a numbering scheme relates to the later polynomial representation of numbers, not to what determines the spatial dimension.\n\nThe criterion Tito (Consistency) is specifically the assessment criterion for Context-neutral language, not a general description of what determines spatial dimension.\n\nThe polynomial representation of a Constant is a Temporal-aspect concept introduced much later, unrelated to what determines the spatial dimension.",
  },
  {
    id: "csc308_ch1_019",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a foundational equation given for the Spatial aspect of a process?",
    options: [
      "Gap = Location(i+1) minus Location(i)",
      "Constant Number = sum of Digit(i) times Base to the power i",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "Gap = Location(i+1) minus Location(i) is Equation 1.6, one of the three foundational equations given for the Spatial aspect. The Constant Number polynomial equation is instead introduced much later, under the Temporal-aspect hierarchy for Eyo (Constant), not among the Spatial-aspect equations, so only the Gap equation is supported here.",
  },
  {
    id: "csc308_ch1_020",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Three kinds of instrument of language are used in formulating a computing process. Which of the following is one of them?",
    options: ["Irrational", "Regular", "Nominal", "Positional"],
    correctAnswer: 1,
    explanation:
      "The three kinds of instrument of language in formulating a computing process are Regular, Context-neutral, and Context-sensitive, so Regular is correct.\n\nIrrational is instead a property later ascribed to Orin (Quality), not one of the three named language instruments.\n\nNominal describes Oruko (Names), the spatial-aspect term, not a language instrument for computing process formulation.\n\nPositional describes the type of numbering scheme used in the polynomial representation, not one of the three language instruments.",
  },
  {
    id: "csc308_ch1_021",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How do the three instruments of language relate to one another?",
    options: [
      "Context-sensitive is subsumed in Context-neutral, which is in turn subsumed in Regular",
      "All three instruments are entirely independent, with no subsumption relationship",
      "Regular is subsumed in Context-neutral, which is in turn subsumed in Context-sensitive",
      "Context-neutral is subsumed in Regular, which is in turn subsumed in Context-sensitive",
    ],
    correctAnswer: 2,
    explanation:
      "The organic formulation tip states that Regular is subsumed in Context-neutral, which is in turn subsumed in Context-sensitive.\n\nReversing this order, with Context-sensitive subsumed in Context-neutral subsumed in Regular, inverts the actual subsumption direction.\n\nThe explicit subsumption relationship stated in the notes contradicts a claim that the three are entirely independent.\n\nPlacing Context-neutral inside Regular misorders the chain; Regular is the innermost, most basic instrument, not contained within Context-neutral.",
  },
  {
    id: "csc308_ch1_022",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In Regular language rendering of numerical computation, State and Transition are described as which of the following?",
    options: [
      "Variable, comprising finite instances of constants",
      "Various and infinite",
      "Nominal, expressed through Letters",
      "Constant, with only one, unique instance",
    ],
    correctAnswer: 3,
    explanation:
      "In Regular language rendering, State and Transition are constant, with only one, unique instance for a constant state or transition.\n\nBeing variable, comprising finite instances of constants, instead describes State and Transition in Context-neutral language, not Regular.\n\nBeing various and infinite instead describes State and Transition in Context-sensitive language, not Regular.\n\nBeing nominal and expressed through Letters describes the Spatial aspect's Names, not the Temporal-aspect State and Transition of Regular language.",
  },
  {
    id: "csc308_ch1_023",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Regular language rendering of numerical computation is formulated with Third-order logic.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: Regular language is formulated with First-order logic. Third-order logic is instead used to formulate Context-sensitive language, not Regular.",
  },
  {
    id: "csc308_ch1_024",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a property of Regular language rendering of numerical computation?",
    options: [
      "First-order logic",
      "One-dimensional structure",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "Regular language is formulated with First-order logic and expressed through a One-dimensional structure, so both properties are supported, making All of these correct.",
  },
  {
    id: "csc308_ch1_025",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "What is the criterion for assessing Regular language computing?",
    options: [
      "Ijokan (Constancy)",
      "Tito (Consistency)",
      "Kikun (Coherence)",
      "Aabo (Fraction)",
    ],
    correctAnswer: 0,
    explanation:
      "The criterion for Regular computing is Ijokan (Constancy).\n\nTito (Consistency) is instead the criterion for Context-neutral computing, not Regular.\n\nKikun (Coherence) is instead the criterion for Context-sensitive computing, not Regular.\n\nAabo (Fraction) is a numerical-term concept discussed later under Quantity, not an assessment criterion for a language instrument.",
  },
  {
    id: "csc308_ch1_026",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Regular computing is effected through an iterative and inductive process.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Regular computing is effected through an iterative and inductive process. Algorithmic and deductive instead describes the process type of Context-neutral computing, and Heuristic and default describes Context-sensitive computing, neither of which is Regular.",
  },
  {
    id: "csc308_ch1_027",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How does Regular language treat binary opposites such as Positive and Negative, or Fraction and Constant?",
    options: [
      "As mutually exclusive and contradictory instances",
      "As neutral instances that are not admissible",
      "As mutually inclusive and complementary aspects",
      "As instances that are separated by Zero",
    ],
    correctAnswer: 1,
    explanation:
      "A regular-language formulation is binary opposite neutral, meaning binary opposites such as Positive and Negative, or Fraction and Constant, are NOT admissible.\n\nTreating binary opposites as mutually exclusive and contradictory instead describes Context-neutral language, not Regular.\n\nTreating binary opposites as mutually inclusive and complementary instead describes Context-sensitive language, not Regular.\n\nBeing separated by Zero describes how Context-neutral language treats binary opposite temporal instances, not how Regular language treats them, since Regular admits no binary opposites at all.",
  },
  {
    id: "csc308_ch1_028",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which operations are the only ones admissible in Regular language rendering of numerical computation?",
    options: [
      "Subtraction and Division",
      "Addition, Subtraction, Multiplication, and Division",
      "Addition and Multiplication",
      "Approximation and Heuristic estimation",
    ],
    correctAnswer: 2,
    explanation:
      "In Regular language, Addition and Multiplication are the only admissible operations.\n\nSubtraction and Division are instead within the ambit of Context-neutral language, not Regular.\n\nAll four operations together are admissible in Context-neutral language, but Regular language admits only Addition and Multiplication, not the full set.\n\nApproximation and heuristic estimation relate to Context-sensitive language's treatment of Quality, not to Regular language's admissible operations.",
  },
  {
    id: "csc308_ch1_029",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why is Zero (0) NOT an admissible regular term?",
    options: [
      "Because Zero is admissible only in Context-sensitive language, never in Regular language",
      "Because Zero is inherently a binary opposite of One, which context-neutral language forbids",
      "Because Zero requires third-order logic to be formulated correctly",
      "Because Zero is number-neutral and cannot reckon a constant's logic",
    ],
    correctAnswer: 3,
    explanation:
      "Zero is not admissible as a regular term because first-order logic grounds Number ascription to a constant, and Zero is a number-neutral digit; a string of only zeros cannot reckon a constant's logic, so Zero is not admissible in regular language rendering.\n\nZero is not described as admissible in Context-sensitive language either; it is explicitly not admissible there as well, for a different reason tied to the absence of an interval in a range.\n\nZero is not described as a binary opposite of One in the source; the exclusion of Zero from Regular language is tied to it being number-neutral under first-order logic, not to binary opposition.\n\nZero's inadmissibility in Regular language is explained through first-order logic grounding, not through any requirement for third-order logic.",
  },
  {
    id: "csc308_ch1_030",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why is a Fraction (Aabo) NOT admissible in Regular language rendering?",
    options: [
      "Because binary opposite is inherent in a Fraction, and Regular language is binary-opposite-neutral",
      "Because a Fraction requires Second-order logic, and Regular language uses only First-order logic for unrelated reasons",
      "Because a Fraction can only be expressed using infinite digits",
      "Because a Fraction is a nominal-term, not a numerical-term",
    ],
    correctAnswer: 0,
    explanation:
      "Binary opposite is inherent in Aabo (a Fraction), and since Regular language is binary-opposite-neutral, Fraction is NOT admissible in regular language rendering.\n\nWhile it is true a Fraction is associated with Second-order logic under Context-neutral language, the stated reason for its exclusion from Regular language is specifically its inherent binary opposition, not merely a logic-order mismatch stated in isolation.\n\nRequiring infinite digits describes the fractions ascribed to Orin (Quality), not the finite-digit fractions ascribed to Iwon (Quantity) that are excluded from Regular language.\n\nA Fraction is still a numerical-term, expressing the Temporal aspect, not a nominal-term; its exclusion from Regular language is due to binary opposition, not its category as numerical versus nominal.",
  },
  {
    id: "csc308_ch1_031",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is given as a lecturer's example of Regular language rendering (Equation 1.7 or 1.8)?",
    options: [
      "Y = A + B",
      "5 = 3 + 2",
      "205 = 2 times 10 squared + 0 times 10 + 5",
      "The polynomial expansion of the fraction 0.205",
    ],
    correctAnswer: 1,
    explanation:
      "5 = 3 + 2 is given as Equation 1.7, a lecturer's example of Regular language rendering, alongside 6 = 3 times 2 as Equation 1.8.\n\nY = A + B is instead given as Equation 1.9, an example of Context-neutral language rendering with variable-terms, not Regular.\n\n205 = 2 times 10 squared + 0 times 10 + 5 is the polynomial expansion of the constant 205, introduced later in the hierarchy section, not one of the Regular language examples 1.7 or 1.8.\n\nThe expansion of 0.205 is the polynomial expansion of a fraction, introduced later under Quantity, not one of the Regular language examples 1.7 or 1.8.",
  },
  {
    id: "csc308_ch1_032",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The Mathematics of Arithmetic is described as sitting in which activity?",
    options: [
      "Creation, representation, and manipulation of variables",
      "Approximation of infinite ranges",
      "Creation, representation, and manipulation of constants",
      "Formulation of nominal-terms",
    ],
    correctAnswer: 2,
    explanation:
      "The Mathematics of Arithmetic sits in the creation, representation, and manipulation of constants, matching Regular language's exclusive focus on constant numerical-terms.\n\nCreation, representation, and manipulation of variables instead describes where the Mathematics of Algebra sits, associated with Context-neutral language, not Arithmetic.\n\nApproximation of infinite ranges relates to Context-sensitive language's treatment of Quality, not to Arithmetic.\n\nFormulation of nominal-terms relates to the Spatial aspect of a process, not to Arithmetic, which concerns numerical-terms.",
  },
  {
    id: "csc308_ch1_033",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In Context-neutral language rendering, State and Transition are described as which of the following?",
    options: [
      "Constant, with only one unique instance",
      "Various and infinite instances",
      "Nominal-terms expressed through Letters",
      "Variables, comprising finite instances of constants",
    ],
    correctAnswer: 3,
    explanation:
      "In Context-neutral language, State and Transition are variables: a variable-state comprises finite instances of constant states, and a variable-transition comprises finite instances of constant transitions.\n\nBeing constant, with only one unique instance, instead describes State and Transition in Regular language, not Context-neutral.\n\nBeing various and infinite instead describes State and Transition in Context-sensitive language, not Context-neutral.\n\nBeing nominal-terms expressed through Letters describes the Spatial aspect's Names, not the Temporal-aspect State and Transition of Context-neutral language.",
  },
  {
    id: "csc308_ch1_034",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How does Context-neutral language treat binary opposite instances such as Previous and Next states?",
    options: [
      "As mutually exclusive and contradictory instances",
      "As neutral instances that are not admissible at all",
      "As mutually inclusive and complementary aspects",
      "As always identical, with no distinction between them",
    ],
    correctAnswer: 0,
    explanation:
      "Context-neutral language treats binary opposite as mutually exclusive and contradictory instances; Previous and Next, ascribed as binary opposite states, are mutually exclusive and contradictory.\n\nTreating binary opposites as neutral and inadmissible instead describes Regular language, not Context-neutral.\n\nTreating binary opposites as mutually inclusive and complementary instead describes Context-sensitive language, not Context-neutral.\n\nPrevious and Next are explicitly treated as a binary opposite pair, not as always identical with no distinction.",
  },
  {
    id: "csc308_ch1_035",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A finite transition has mutually exclusive, contradictory binary opposite terminal states. What are these two terminal states called?",
    options: [
      "Constant and Fraction states",
      "Begin and End temporal states",
      "Positive and Negative states",
      "Regular and Sensitive states",
    ],
    correctAnswer: 1,
    explanation:
      "A finite transition in Context-neutral language has mutually exclusive, contradictory binary opposite terminal states: Begin and End temporal states, where a Begin state is a Previous State with no Previous temporal state, and an End state is a Next State with no Next temporal state.\n\nConstant and Fraction are numerical-term classifications discussed under Quantity, not the named terminal states of a finite transition.\n\nPositive and Negative are a separate binary opposite pair discussed for numerical polarity, not the specific terminal states of a finite transition.\n\nRegular and Sensitive are language instruments, not the terminal states of a finite transition.",
  },
  {
    id: "csc308_ch1_036",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How is a 'Begin state' defined in Context-neutral language?",
    options: [
      "A Next State that has no Next temporal state",
      "A state that occurs exactly halfway through a finite transition",
      "A Previous State that has no Previous temporal state",
      "Any state ascribed to a Regular language constant",
    ],
    correctAnswer: 2,
    explanation:
      "A Begin state is defined as a Previous State that has no Previous temporal state.\n\nA Next State that has no Next temporal state is instead the definition of an End state, not a Begin state.\n\nOccurring exactly halfway through a finite transition is not how a Begin state is defined; it is defined by the absence of any prior state, not by its position at a midpoint.\n\nRegular language deals only with constant, isolated states with no Previous/Next structure, so a Begin state, which is defined relative to Previous/Next states, is a Context-neutral concept, not a Regular language one.",
  },
  {
    id: "csc308_ch1_037",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The criterion for assessing Context-neutral language computing is Kikun (Coherence).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: the criterion for assessing Context-neutral computing is Tito (Consistency). Kikun (Coherence) is instead the criterion for Context-sensitive computing, not Context-neutral.",
  },
  {
    id: "csc308_ch1_038",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Context-neutral computing is effected through an algorithmic and deductive process.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Context-neutral computing is effected through an algorithmic and deductive process. Iterative and inductive instead describes Regular computing, and Heuristic and default describes Context-sensitive computing, neither of which is Context-neutral.",
  },
  {
    id: "csc308_ch1_039",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a property of Context-neutral language rendering of numerical computation?",
    options: [
      "Third-order logic",
      "One-dimensional structure",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "Context-neutral language is formulated with Second-order logic in a Two-dimensional structure. Third-order logic instead belongs to Context-sensitive language, and One-dimensional structure instead belongs to Regular language, so neither option is supported and None of these is correct.",
  },
  {
    id: "csc308_ch1_040",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is given as a lecturer's example of Context-neutral language rendering (Equation 1.9 or 1.10)?",
    options: [
      "5 = 3 + 2",
      "6 = 3 times 2",
      "The polynomial expansion of the constant 205",
      "Y = A + B",
    ],
    correctAnswer: 3,
    explanation:
      "Y = A + B is given as Equation 1.9, alongside Y = A times B as Equation 1.10, both lecturer's examples of Context-neutral language rendering using variable-terms Y, A, and B.\n\n5 = 3 + 2 is instead Equation 1.7, an example of Regular language rendering with constant terms, not Context-neutral.\n\n6 = 3 times 2 is instead Equation 1.8, an example of Regular language rendering, not Context-neutral.\n\nThe expansion of 205 is the polynomial expansion of a constant, introduced later in the hierarchy section, not one of the Context-neutral examples 1.9 or 1.10.",
  },
  {
    id: "csc308_ch1_041",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How does an agency of context-neutral language relate to a regular process?",
    options: [
      "Regular is subsumed in context-neutral, which can effect regular process",
      "Context-neutral language is entirely incapable of effecting a regular process",
      "Regular process can only be effected by context-sensitive language, never by context-neutral language",
      "Context-neutral language replaces regular language entirely, making regular language obsolete",
    ],
    correctAnswer: 0,
    explanation:
      "Regular language is subsumed in context-neutral language; an agency of context-neutral language effects a regular process via its regular-language instrument, matching the general subsumption chain Regular subset Context-neutral subset Context-sensitive.\n\nSince Regular language is subsumed within Context-neutral language, an agency of context-neutral language is explicitly capable of effecting a regular process, not incapable of it.\n\nThe source does not state that regular process can only be effected by context-sensitive language; it is context-neutral language, via its subsumed regular-language instrument, that is described as effecting it.\n\nRegular language is not made obsolete; it remains the instrument used within the subsuming context-neutral agency, rather than being replaced.",
  },
  {
    id: "csc308_ch1_042",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The Mathematics of Algebra is described as sitting in which activity?",
    options: [
      "Creation, representation, and manipulation of constants",
      "Creation, representation, and manipulation of variables",
      "Approximation of infinite ranges through heuristics",
      "Formulation of names and letters",
    ],
    correctAnswer: 1,
    explanation:
      "The Mathematics of Algebra sits in the creation, representation, and manipulation of variables, matching Context-neutral language's focus on variable-terms.\n\nCreation, representation, and manipulation of constants instead describes where the Mathematics of Arithmetic sits, associated with Regular language, not Algebra.\n\nApproximation of infinite ranges through heuristics relates to Context-sensitive language's treatment of Quality, not to Algebra.\n\nFormulation of names and letters relates to the Spatial aspect of a process, not to Algebra, which concerns numerical variable-terms.",
  },
  {
    id: "csc308_ch1_043",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Context-neutral language renders, formulates, and explains which term ascribed to instances in the universe of human mental abstraction?",
    options: [
      "Orin (the Quality)",
      "Ika (the Digit)",
      "Iwon (the Quantity)",
      "Oruko (the Name)",
    ],
    correctAnswer: 2,
    explanation:
      "Context-neutral language renders, formulates, and explains Iwon (the quantity) ascribed to instances in the universe of human mental abstraction.\n\nOrin (the Quality) is instead rendered, formulated, and interpreted by Context-sensitive language, ascribed to instances in the universe of human mental conception, not Context-neutral.\n\nIka (the Digit) is a primitive symbol of a numbering scheme's alphabet, not the term Context-neutral language renders as a whole.\n\nOruko (the Name) is expressed through the Spatial aspect, not by Context-neutral language, which concerns the Temporal aspect.",
  },
  {
    id: "csc308_ch1_044",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why can Positive (+ve) and Negative (-ve) states not be simultaneously ascribed to a number reckoning Iwon (Quantity)?",
    options: [
      "Because Positive and Negative numbers are both banned entirely from Context-neutral language",
      "Because only Context-sensitive language permits numbers to have any sign at all",
      "Because Zero is the only admissible sign in Context-neutral language",
      "Because Context-neutral treats binary opposites as mutually exclusive, so +5 and -5 are separate",
    ],
    correctAnswer: 3,
    explanation:
      "Positive and Negative states cannot be simultaneously ascribed to a number reckoning quantity because context-neutral language treats binary opposites as mutually exclusive; +5 and -5 each reckon a content-neutral instance separately, while +/-5 instead reckons a temporal-range, since there is no interval within a temporal-range.\n\nPositive and Negative numbers are not banned from Context-neutral language; they are explicitly admissible, just never simultaneously as a single instance.\n\nContext-neutral language does permit signed numbers, such as +5 and -5 individually; it is the simultaneous +/-5 range that instead belongs to Context-sensitive language.\n\nZero is used in Context-neutral language to separate binary opposite instances, but it is not described as the only admissible sign; Positive and Negative individually are also admissible.",
  },
  {
    id: "csc308_ch1_045",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In Context-neutral language, what role does Zero (0) play with respect to a pair of binary opposite temporal instances?",
    options: [
      "It reckons the interval separating the binary opposite pair",
      "It is not admissible at all",
      "It is used only to reckon infinite instances",
      "It reckons the criterion Kikun (Coherence)",
    ],
    correctAnswer: 0,
    explanation:
      "The numerical-representation of a pair of binary opposite temporal instances is separated by an interval, reckoned with the number-neutral Digit Zero (0), in Context-neutral language.\n\nZero being not admissible at all instead describes its status in Regular language and in Context-sensitive language's temporal-state formulation, not Context-neutral language, where it is present as a separator.\n\nZero is not described as used only to reckon infinite instances; infinite instances are in fact NOT admissible in Context-neutral formulation.\n\nKikun (Coherence) is the assessment criterion for Context-sensitive language, unrelated to the role of Zero in Context-neutral language.",
  },
  {
    id: "csc308_ch1_046",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Is Infinity admissible in Context-neutral formulation or prescription of a process?",
    options: [
      "Yes, Infinity is fully admissible and central to Context-neutral formulation",
      "No, Infinity is NOT admissible in Context-neutral formulation",
      "Infinity is admissible only when Zero is also present",
      "Infinity is admissible only in the Regular language instrument",
    ],
    correctAnswer: 1,
    explanation:
      "The key point explicitly stated is that Infinity is NOT admissible in Context-neutral formulation or prescription of a process, since a context-neutral temporal instance is represented with a number comprising finite instances of digits.\n\nInfinity being fully admissible is the opposite of the explicit key point stated for Context-neutral language.\n\nThe presence of Zero does not make Infinity admissible; Context-neutral instances remain finite regardless of Zero's role as a separator.\n\nInfinity is not admissible in Regular language either, since Regular language deals only with a single, isolated constant instance, not infinite instances; infinity instead becomes relevant only in Context-sensitive language, where it is inherent but still not representable.",
  },
  {
    id: "csc308_ch1_047",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "All of the following are true of Context-neutral language rendering EXCEPT:",
    options: [
      "It is formulated with Second-order logic",
      "Binary opposites are treated as mutually exclusive and contradictory",
      "Its assessment criterion is Kikun (Coherence)",
      "Subtraction and Division are within its ambit",
    ],
    correctAnswer: 2,
    explanation:
      "Context-neutral language's assessment criterion is Tito (Consistency), not Kikun (Coherence), which is instead the criterion for Context-sensitive language, making this the exception.\n\nContext-neutral language is indeed formulated with Second-order logic, a true statement about it, not the exception.\n\nBinary opposites indeed are treated as mutually exclusive and contradictory in Context-neutral language, a true statement about it, not the exception.\n\nSubtraction and Division are indeed within the ambit of Context-neutral language, a true statement about it, not the exception.",
  },
  {
    id: "csc308_ch1_048",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In Context-sensitive language rendering, State and Transition are described as which of the following?",
    options: [
      "Constant, with only one unique instance",
      "Variables, comprising finite instances of constants",
      "Nominal, expressed through Letters",
      "Various and infinite",
    ],
    correctAnswer: 3,
    explanation:
      "In Context-sensitive language, State and Transition are various and infinite: a various state comprises infinite instances of variable states, and a various transition comprises infinite instances of variable transitions.\n\nBeing constant, with only one unique instance, instead describes State and Transition in Regular language, not Context-sensitive.\n\nBeing variable, comprising finite instances of constants, instead describes State and Transition in Context-neutral language, not Context-sensitive.\n\nBeing nominal and expressed through Letters describes the Spatial aspect's Names, not the Temporal-aspect State and Transition of Context-sensitive language.",
  },
  {
    id: "csc308_ch1_049",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How does Context-sensitive language treat binary opposite instances such as Previous and Next?",
    options: [
      "As mutually inclusive and complementary aspects of an instance",
      "As neutral instances that are not admissible at all",
      "As mutually exclusive and contradictory instances",
      "As instances requiring a Begin and End terminal state",
    ],
    correctAnswer: 0,
    explanation:
      "Context-sensitive language treats binary opposite as mutually inclusive and complementary aspects of an instance; Previous and Next are mutually inclusive and complementary aspects of a state.\n\nTreating binary opposites as neutral and inadmissible instead describes Regular language, not Context-sensitive.\n\nTreating binary opposites as mutually exclusive and contradictory instead describes Context-neutral language, not Context-sensitive.\n\nRequiring a Begin and End terminal state describes a finite transition in Context-neutral language; Context-sensitive language instead has no terminal state at all, since every Previous State has another unique Previous, and every Next State has another unique Next.",
  },
  {
    id: "csc308_ch1_050",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why is there no Terminal state in an infinite transition, under Context-sensitive language?",
    options: [
      "Because Context-sensitive language forbids the use of the terms Previous and Next entirely",
      "Every Previous and Next State has another unique one",
      "Because a Terminal state can only exist in Regular language",
      "Because Zero marks every Terminal state in Context-sensitive language",
    ],
    correctAnswer: 1,
    explanation:
      "There is no Terminal state in an infinite transition because every Previous State has another unique Previous temporal state, and every Next State has another unique Next temporal state, so no state can be isolated as a Begin or End.\n\nContext-sensitive language does use the terms Previous and Next; they are explicitly described as mutually inclusive and complementary aspects of a state, not forbidden terms.\n\nA Terminal state, in the form of Begin and End states, is instead a feature of finite transitions in Context-neutral language, not Regular language, which deals only with a single isolated constant instance with no Previous/Next structure at all.\n\nZero is explicitly not admissible in Context-sensitive language's formulation of temporal state, so it cannot be marking Terminal states there.",
  },
  {
    id: "csc308_ch1_051",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The criterion for assessing Context-sensitive language computing is Ijokan (Constancy).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: the criterion for assessing Context-sensitive computing is Kikun (Coherence). Ijokan (Constancy) is instead the criterion for Regular computing, not Context-sensitive.",
  },
  {
    id: "csc308_ch1_052",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Context-sensitive computing is effected through which type of process?",
    options: [
      "Iterative and inductive",
      "Algorithmic and deductive",
      "Heuristic and default",
      "Purely arithmetic and constant",
    ],
    correctAnswer: 2,
    explanation:
      "Context-sensitive computing is effected through a Heuristic (Rule of the Thumb) and default process.\n\nIterative and inductive instead describes the process type of Regular computing, not Context-sensitive.\n\nAlgorithmic and deductive instead describes the process type of Context-neutral computing, not Context-sensitive.\n\nPurely arithmetic and constant is not a process type named for any of the three language instruments; it more closely echoes Regular language's exclusive dealing in constants.",
  },
  {
    id: "csc308_ch1_053",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a property of Context-sensitive language rendering of numerical computation?",
    options: [
      "Second-order logic",
      "Third-order logic",
      "All of these",
      "None of these",
    ],
    correctAnswer: 1,
    explanation:
      "Context-sensitive language is formulated with Third-order logic, so that option is supported. Second-order logic instead belongs to Context-neutral language, not Context-sensitive, so it is not supported, and since only one of the two specific options is correct, neither All of these nor None of these applies.",
  },
  {
    id: "csc308_ch1_054",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Context-sensitive language renders, formulates, and interprets which term, ascribed to instances in the universe of human mental conception?",
    options: [
      "Eyo (the Constant)",
      "Iwon (the Quantity)",
      "Ika (the Digit)",
      "Orin (the Quality)",
    ],
    correctAnswer: 3,
    explanation:
      "Context-sensitive language renders, formulates, and interprets Orin (the quality), ascribed to instances in the universe of human mental conception.\n\nEyo (the Constant) is instead rendered by Regular language, ascribed to a regular temporal state, not by Context-sensitive language.\n\nIwon (the Quantity) is instead rendered by Context-neutral language, ascribed to instances in the universe of human mental abstraction, not by Context-sensitive language.\n\nIka (the Digit) is a primitive symbol of a numbering scheme's alphabet, not the term Context-sensitive language renders as a whole.",
  },
  {
    id: "csc308_ch1_055",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How are Positive (+ve) and Negative (-ve) treated in the number reckoning Orin (Quality)?",
    options: [
      "As mutually inclusive and complementary, coexisting simultaneously in a temporal-range such as +/-5",
      "As mutually exclusive, so a quality is either positive or negative, but never both",
      "As entirely inadmissible, since Quality has no polarity at all",
      "As requiring Zero to separate them",
    ],
    correctAnswer: 0,
    explanation:
      "In the number reckoning Orin (Quality), Positive and Negative are mutually inclusive and complementary, coexisting simultaneously; the state of a context-sensitive instance is situated in a temporal-range, with binary opposite aspects expressed as +/-5, since there is no interval within a temporal-range.\n\nTreating Positive and Negative as mutually exclusive, so a number is either one or the other but never both, instead describes Iwon (Quantity) under Context-neutral language, not Orin (Quality).\n\nPositive and Negative are not entirely inadmissible in Quality; they are admissible simultaneously, as a range, rather than excluded outright.\n\nZero is explicitly not admissible in the formulation of a context-sensitive temporal state, so it cannot be the separator for Positive and Negative there; Zero instead separates binary opposites specifically in Context-neutral language.",
  },
  {
    id: "csc308_ch1_056",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why is the number-neutral instance, reckoned with Digit Zero, NOT admissible in Context-sensitive formulation of a temporal state?",
    options: [
      "Because Context-sensitive language forbids the use of any digit whatsoever, including Zero",
      "Because a temporal-range has no interval for Zero to separate",
      "Because Zero can only be used in Regular language, which is unrelated to Context-sensitive language",
      "Because Context-sensitive language uses only Second-order logic, which excludes Zero by definition",
    ],
    correctAnswer: 1,
    explanation:
      "Zero is not admissible in Context-sensitive formulation because the state of a context-sensitive instance is situated in a temporal-range, and there is no interval within a temporal-range, so there is nothing for the number-neutral digit Zero to reckon as a separator.\n\nContext-sensitive language does not forbid all digits; a context-sensitive instance in fact comprises infinite instances of digits, just not the number-neutral digit Zero as a separator.\n\nZero's inadmissibility in Regular language is a separate fact with a separate reason, tied to first-order logic and constancy, not something that explains its inadmissibility in Context-sensitive language, which is tied instead to the absence of an interval in a range.\n\nContext-sensitive language uses Third-order logic, not Second-order logic, and the exclusion of Zero is explained through the absence of an interval in a temporal-range, not through the logic order itself.",
  },
  {
    id: "csc308_ch1_057",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which chain of reasoning explains why a context-sensitive rendering of a temporal instance is outside the ambit of Numerical computation?",
    options: [
      "A context-sensitive instance always contains finite digits, and finite digits are never computable",
      "Context-sensitive instances are always negative, and negative numbers cannot be computed",
      "An infinite instance cannot be represented, and representation is necessary for computation",
      "Context-sensitive instances require Zero, which is inadmissible, so no computation can begin",
    ],
    correctAnswer: 2,
    explanation:
      "The chain of reasoning is: a context-sensitive instance comprises infinite instances of digits; an infinite instance cannot be represented; representation is necessary for computation; therefore context-sensitive rendering of a temporal instance is outside the ambit of Numerical computation.\n\nA context-sensitive instance is explicitly described as comprising infinite instances of digits, not finite ones; it is the infinitude, not finiteness, that drives the reasoning.\n\nContext-sensitive instances are described through ranges like +/-5, which are simultaneously positive and negative, not always negative; the reasoning about computability concerns representability of infinite digits, not sign.\n\nWhile Zero is indeed inadmissible in Context-sensitive temporal-state formulation, the stated reasoning for why it falls outside numerical computation is the infinite-representation-computation chain, not the inadmissibility of Zero directly causing this.",
  },
  {
    id: "csc308_ch1_058",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How is a context-sensitive temporal-range simplified for computation?",
    options: [
      "A context-sensitive temporal-range is simplified using approximation rendered with a Regular process only, bypassing Context-neutral entirely",
      "A context-sensitive temporal-range cannot be simplified under any circumstances",
      "Context-sensitive language is subsumed in context-neutral language, reversing the general subsumption chain",
      "Context-neutral is subsumed in context-sensitive, enabling approximation",
    ],
    correctAnswer: 3,
    explanation:
      "Context-neutral language is subsumed in context-sensitive language; an agency of context-sensitive language effects a context-neutral process via its context-neutral instrument, which is the basis on which a context-sensitive temporal-range is simplified using approximation rendered with a context-neutral process.\n\nThe simplification is explicitly rendered through a context-neutral process, not a Regular process, since it is Context-neutral language that is subsumed within, and thus accessible to, Context-sensitive language for this purpose.\n\nThe source explicitly describes a basis for simplifying a context-sensitive temporal-range, through context-neutral approximation, contradicting a claim that it cannot be simplified at all.\n\nThe general subsumption chain places Context-sensitive as the outermost, subsuming instrument, not the reverse; Context-sensitive is not subsumed in Context-neutral.",
  },
  {
    id: "csc308_ch1_059",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In Context-sensitive language, is Infinity admissible?",
    options: [
      "Infinity is inherent in the mental state of Quality, though the resulting infinite instance cannot be represented",
      "Infinity is entirely absent from Context-sensitive language, just as it is from Regular and Context-neutral language",
      "Infinity is admissible and fully representable in Context-sensitive language",
      "Infinity is admissible only when reckoned with the digit Zero",
    ],
    correctAnswer: 0,
    explanation:
      "An interpretation is inextricable from its human agency because infinity is inherent in the mental state of Orin (Quality); however, infinite instances of terms are required to express an infinite instance, and since expression is necessary for representation, and representation is necessary for computation, an infinite instance cannot ultimately be represented.\n\nInfinity is explicitly inherent in Context-sensitive language's treatment of Quality, unlike Regular language, which deals only in a single constant, or Context-neutral language, where infinity is explicitly not admissible; so it is not equally absent from all three.\n\nWhile infinity is inherent in Context-sensitive language, it is explicitly described as unable to be represented, so it is not fully representable.\n\nZero is explicitly not admissible in Context-sensitive language's formulation of temporal state, so infinity's presence there has nothing to do with the digit Zero.",
  },
  {
    id: "csc308_ch1_060",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "All of the following are true of Context-sensitive language rendering EXCEPT:",
    options: [
      "It is formulated with Third-order logic in a Three-dimensional structure",
      "Its assessment criterion is Ijokan (Constancy)",
      "Binary opposites are treated as mutually inclusive and complementary",
      "Zero (0) is not admissible in its formulation of temporal state",
    ],
    correctAnswer: 1,
    explanation:
      "The assessment criterion for Context-sensitive language is Kikun (Coherence), not Ijokan (Constancy), which is instead the criterion for Regular language, making this the exception.\n\nContext-sensitive language is indeed formulated with Third-order logic in a Three-dimensional structure, a true statement about it, not the exception.\n\nBinary opposites indeed are treated as mutually inclusive and complementary in Context-sensitive language, a true statement about it, not the exception.\n\nZero (0) is indeed not admissible in Context-sensitive language's formulation of temporal state, a true statement about it, not the exception.",
  },
  {
    id: "csc308_ch1_061",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which language instrument matches the criterion Ijokan (Constancy) with First-order logic and a One-dimensional structure?",
    options: [
      "Context-neutral",
      "Context-sensitive",
      "Regular",
      "None; Ijokan applies to all three",
    ],
    correctAnswer: 2,
    explanation:
      "Regular language uniquely matches Ijokan (Constancy) as its criterion, First-order logic, and a One-dimensional structure.\n\nContext-neutral language instead pairs Tito (Consistency), Second-order logic, and a Two-dimensional structure, not this combination.\n\nContext-sensitive language instead pairs Kikun (Coherence), Third-order logic, and a Three-dimensional structure, not this combination.\n\nEach of the three language instruments has its own distinct criterion, logic order, and dimension; Ijokan specifically and uniquely belongs to Regular language, not to all three equally.",
  },
  {
    id: "csc308_ch1_062",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which language instrument treats binary opposites as mutually exclusive and contradictory, uses Second-order logic, and assesses computing with the criterion Tito (Consistency)?",
    options: [
      "Regular",
      "Context-sensitive",
      "All three share this combination",
      "Context-neutral",
    ],
    correctAnswer: 3,
    explanation:
      "Context-neutral language uniquely combines the mutually exclusive and contradictory treatment of binary opposites, Second-order logic, and the criterion Tito (Consistency).\n\nRegular language instead treats binary opposites as neutral and inadmissible, uses First-order logic, and assesses with Ijokan (Constancy), not this combination.\n\nContext-sensitive language instead treats binary opposites as mutually inclusive and complementary, uses Third-order logic, and assesses with Kikun (Coherence), not this combination.\n\nEach language instrument has a distinct, non-overlapping combination of these features; they do not share this exact combination across all three.",
  },
  {
    id: "csc308_ch1_063",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which language instrument treats binary opposites as mutually inclusive and complementary aspects of an instance?",
    options: [
      "Context-sensitive",
      "Regular",
      "Context-neutral",
      "None; all three treat opposites identically",
    ],
    correctAnswer: 0,
    explanation:
      "Context-sensitive language uniquely treats binary opposites as mutually inclusive and complementary aspects of an instance.\n\nRegular language instead treats binary opposites as neutral, meaning they are not admissible at all, not as mutually inclusive.\n\nContext-neutral language instead treats binary opposites as mutually exclusive and contradictory, the opposite treatment from mutually inclusive.\n\nEach of the three instruments treats binary opposites differently, neutral, mutually exclusive, or mutually inclusive, so they do not treat binary opposites identically.",
  },
  {
    id: "csc308_ch1_064",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Zero (0) is described as NOT admissible in which of the three language instruments?",
    options: [
      "Regular only",
      "Regular and Context-sensitive, for different reasons",
      "Context-neutral only",
      "Regular, Context-neutral, and Context-sensitive equally",
    ],
    correctAnswer: 1,
    explanation:
      "Zero is not admissible as a regular term in Regular language because it is a number-neutral digit that cannot reckon first-order logic ascribed to a constant, and Zero is also not admissible in Context-sensitive language's formulation of temporal state because a temporal-range has no interval for it to separate; these are two different reasons for exclusion in two different instruments.\n\nRegular language alone does exclude Zero, but so does Context-sensitive language, for a distinct reason, so exclusion is not limited to Regular only.\n\nContext-neutral language does not exclude Zero; instead, Zero is present there as the separator of binary opposite instances, so exclusion is not limited to Context-neutral only, and in fact Context-neutral is the one instrument where Zero is admissible.\n\nZero is explicitly admissible, as a separator, in Context-neutral language, so it is not excluded equally across all three instruments.",
  },
  {
    id: "csc308_ch1_065",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following correctly matches a language instrument to its process type?",
    options: [
      "Regular with Algorithmic and deductive",
      "Context-neutral with Iterative and inductive",
      "Context-sensitive with Heuristic and default",
      "Context-neutral with Heuristic and default",
    ],
    correctAnswer: 2,
    explanation:
      "Context-sensitive language is correctly matched with a Heuristic (Rule of the Thumb) and default process type.\n\nRegular language is instead matched with an Iterative and inductive process, not Algorithmic and deductive, which belongs to Context-neutral.\n\nContext-neutral language is instead matched with an Algorithmic and deductive process, not Iterative and inductive, which belongs to Regular.\n\nContext-neutral language is matched with Algorithmic and deductive, not Heuristic and default, which belongs specifically to Context-sensitive.",
  },
  {
    id: "csc308_ch1_066",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following statements about the subsumption chain of the three language instruments is correct?",
    options: [
      "Context-sensitive is subsumed in Regular, which is subsumed in Context-neutral",
      "Context-neutral is subsumed in Context-sensitive, which is subsumed in Regular",
      "The three instruments form a cycle, with each subsumed in the next in a loop",
      "Regular is subsumed in Context-neutral, which is subsumed in Context-sensitive",
    ],
    correctAnswer: 3,
    explanation:
      "The correct subsumption chain is Regular subsumed in Context-neutral, which is in turn subsumed in Context-sensitive, moving from the most restrictive to the most general instrument.\n\nPlacing Context-sensitive as subsumed in Regular reverses the chain entirely and misorders it, since Context-sensitive is the outermost, most general instrument, not the innermost.\n\nPlacing Context-neutral as subsumed in Context-sensitive, which is subsumed in Regular, scrambles the order; Regular is the innermost, not the outermost, instrument.\n\nThe subsumption relationship is described as a linear chain from Regular through Context-neutral to Context-sensitive, not a cyclical loop.",
  },
  {
    id: "csc308_ch1_067",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a true statement that applies to Regular language but NOT to Context-neutral language?",
    options: [
      "Its assessment criterion is Ijokan (Constancy)",
      "Subtraction and Division are within its ambit",
      "It admits binary opposites as mutually exclusive",
      "Its temporal instances are represented using finite instances of digits",
    ],
    correctAnswer: 0,
    explanation:
      "Ijokan (Constancy) is the assessment criterion unique to Regular language; Context-neutral language instead uses Tito (Consistency), so this statement applies to Regular but not Context-neutral.\n\nSubtraction and Division are within the ambit of Context-neutral language, not Regular language, which admits only Addition and Multiplication, so this statement does not apply to Regular at all.\n\nRegular language is binary-opposite-neutral and does not admit binary opposites in any form; it is Context-neutral language that admits them as mutually exclusive instances, so this statement applies to Context-neutral, not Regular.\n\nBoth Regular and Context-neutral instances are finite, so representing temporal instances with finite digits is not a distinguishing feature unique to Regular alone; it is Context-sensitive instances that instead comprise infinite digits.",
  },
  {
    id: "csc308_ch1_068",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following properties correctly applies to Context-sensitive language but NOT to Context-neutral language?",
    options: [
      "Binary opposites are treated as mutually exclusive and contradictory",
      "Its assessment criterion is Kikun (Coherence)",
      "Zero is used as a separator between binary opposite instances",
      "Its temporal instances are represented using finite instances of digits",
    ],
    correctAnswer: 1,
    explanation:
      "Kikun (Coherence) is the assessment criterion unique to Context-sensitive language; Context-neutral language instead uses Tito (Consistency), so this property applies to Context-sensitive but not Context-neutral.\n\nBinary opposites being mutually exclusive and contradictory is instead the defining property of Context-neutral language, not Context-sensitive, which treats them as mutually inclusive and complementary.\n\nZero being used as a separator is instead a defining property of Context-neutral language, not Context-sensitive, where Zero is not admissible in temporal-state formulation at all.\n\nFinite digit representation is instead a defining property of Context-neutral language, not Context-sensitive, whose instances comprise infinite instances of digits.",
  },
  {
    id: "csc308_ch1_069",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following criteria is correctly associated with a language instrument?",
    options: [
      "Kikun (Coherence) with Regular language",
      "Tito (Consistency) with Context-sensitive language",
      "Ijokan (Constancy) with Regular language",
      "Ijokan (Constancy) with Context-neutral language",
    ],
    correctAnswer: 2,
    explanation:
      "Ijokan (Constancy) is correctly associated with Regular language as its assessment criterion.\n\nKikun (Coherence) is instead associated with Context-sensitive language, not Regular language.\n\nTito (Consistency) is instead associated with Context-neutral language, not Context-sensitive language.\n\nIjokan (Constancy) is associated with Regular language, not Context-neutral language, which instead uses Tito (Consistency).",
  },
  {
    id: "csc308_ch1_070",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is true of Ika (Digits)?",
    options: [
      "They are primitive, logic-neutral symbols",
      "There is only one instance of every digit in a numbering scheme's alphabet",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "Ika (Digits) are described as primitive, logic-neutral symbols, and there is only one instance of every digit in a numbering scheme's alphabet, so both properties are supported, making All of these correct.",
  },
  {
    id: "csc308_ch1_071",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Digits are described as 'Primitive instances' that are neutral to which properties?",
    options: [
      "Temporal and Spatial aspects only",
      "Criterion and Process type only",
      "Base and Position only",
      "Structure, Logic, and Polarity",
    ],
    correctAnswer: 3,
    explanation:
      "Digits are Primitive instances, neutral to Structure, Logic, and Polarity: a primitive neither influences, obstructs, nor enhances the Structure, Polarity, or Logic ascribed to it.\n\nTemporal and Spatial aspects are the two aspects of a process, not the three properties Digits are described as neutral to.\n\nCriterion and Process type are properties of a language instrument, not the three properties named for a digit's neutrality.\n\nBase and Position are components of the later polynomial representation of a Constant, not the three properties named for a digit's neutrality.",
  },
  {
    id: "csc308_ch1_072",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How many instances of every digit exist in a numbering scheme?",
    options: [
      "Only one instance of every digit",
      "Exactly two instances of every digit",
      "An infinite number of instances of every digit",
      "A number of instances equal to the scheme's Base",
    ],
    correctAnswer: 0,
    explanation:
      "There is only one instance of every digit in a numbering scheme's alphabet.\n\nTwo instances is not the stated count; the notes are explicit that there is only one instance of every digit.\n\nAn infinite number of instances contradicts the explicit statement that there is only one instance of every digit.\n\nThe number of instances is not tied to the scheme's Base; regardless of the base, each digit still appears only once in the alphabet.",
  },
  {
    id: "csc308_ch1_073",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why is Zero (0) described as a number-neutral digit?",
    options: [
      "Because it is the only digit that can express infinity",
      "Because it neither influences, obstructs, nor enhances the computation of logic at its position in a number",
      "Because it is the only digit admissible in all three language instruments equally",
      "Because it always occupies the highest-order position in a number",
    ],
    correctAnswer: 1,
    explanation:
      "Zero (0) is a number neutral digit because it neither influences, obstructs, nor enhances the computation of logic at its position in a number.\n\nExpressing infinity is not a property attributed to Zero; infinity relates instead to Context-sensitive language's infinite digits generally, not specifically to Zero.\n\nZero is not admissible in all three language instruments equally; it is inadmissible in Regular language, present as a separator in Context-neutral language, and inadmissible in Context-sensitive language, for differing reasons.\n\nZero's position within a number is not fixed to the highest order; it can occupy any position, and its number-neutrality applies regardless of position.",
  },
  {
    id: "csc308_ch1_074",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which digit is described as neither in the alphabet nor part of a Tally (Base one) numbering scheme?",
    options: ["One (1)", "Two (2)", "Zero (0)", "Ten (10)"],
    correctAnswer: 2,
    explanation:
      "Zero (0) is NOT admissible in the alphabet of a Tally (Base one) numbering scheme, which comprises only one digit.\n\nOne (1) is instead the single digit that IS in the alphabet of a Tally (Base one) numbering scheme, the opposite of being excluded.\n\nTwo (2) is not discussed as part of the Tally scheme's alphabet at all; the Tally scheme comprises only the digit One.\n\nTen (10) is not a digit but a two-digit number in the decimal scheme, and it is also not discussed in relation to the Tally scheme's alphabet.",
  },
  {
    id: "csc308_ch1_075",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Onka (Number) is rendered with which metaphor, associated with Ika (Digits)?",
    options: [
      "The metaphor of 'rivers', that which flows continuously without end",
      "The metaphor of 'mountains', that which is immovable and constant",
      "The metaphor of 'shadows', that which has no independent substance",
      "The metaphor of 'fingers', that which can be used to point or individually reckoned",
    ],
    correctAnswer: 3,
    explanation:
      "Ika is rendered with the metaphor of 'fingers', that which can be used to point, or that which can be individually reckoned, giving rise to Onka (Number) as a string built from these Ika.\n\nA 'rivers' metaphor, suggesting continuous unending flow, is not the metaphor used; it more closely echoes the infinite instances of Context-sensitive language, but is not the stated metaphor for Ika.\n\nA 'mountains' metaphor, suggesting immovability, is not the stated metaphor for Ika, though it echoes the isolated, unchanging nature of a Regular-language Constant.\n\nA 'shadows' metaphor, suggesting no independent substance, is not the stated metaphor for Ika, and in fact digits do have independent, if logic-neutral, symbolic substance.",
  },
  {
    id: "csc308_ch1_076",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How does the Yoruba word Onka (Number) transcribe into English?",
    options: [
      "'That which is used to count', or 'that in which recourse is taken during a counting process'",
      "'That which never changes', or 'that in which a single instance is fixed'",
      "'That which separates opposites', or 'that in which Zero plays a central role'",
      "'That which cannot be represented', or 'that in which infinity is inherent'",
    ],
    correctAnswer: 0,
    explanation:
      "Yoruba Onka (Number) transcribes into English as 'that which is used to count', or 'that in which recourse is taken during a counting process'.\n\n'That which never changes' echoes the isolated, unchanging nature of a Regular-language Constant, not the stated transcription of Onka.\n\n'That which separates opposites' echoes Zero's role in Context-neutral language, not the stated transcription of Onka.\n\n'That which cannot be represented' echoes the infinite instances of Context-sensitive language's Quality, not the stated transcription of Onka.",
  },
  {
    id: "csc308_ch1_077",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Onka is a string constructed by concatenating which elements, drawn from the alphabet of a numbering scheme?",
    options: [
      "Ite (Letters)",
      "Ika (Digits)",
      "Idi (Variables)",
      "Oruko (Names)",
    ],
    correctAnswer: 1,
    explanation:
      "Onka (a number) is a string constructed by concatenating digits (Ika) drawn from the alphabet of a numbering scheme.\n\nIte (Letters) are drawn from a writing scheme's orthography to construct a Name, not a Number.\n\nIdi (Variables) are a numerical concept introduced later under Quantity, comprising instances of constant, not the primitive symbols a number is directly concatenated from.\n\nOruko (Names) is the nominal-term itself, constructed from Letters, not the alphabet a Number is drawn from.",
  },
  {
    id: "csc308_ch1_078",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is given as a valid Number in the Binary numbering scheme, which has two digits {0, 1}?",
    options: ["765", "91785", "1010", "205"],
    correctAnswer: 2,
    explanation:
      "1010 is given as a valid Binary number, alongside 0101, 0010, and 1111, all constructed only from the two Binary digits {0, 1}.\n\n765 contains the digit 7 and 6, which are not part of the Binary alphabet {0, 1}, making it an invalid Binary number; it is instead a valid Decimal number example.\n\n91785 contains digits like 9, 1, 7, 8, and 5, most of which are not part of the Binary alphabet {0, 1}; it is instead a valid Decimal number example.\n\n205 contains the digit 2, which is not part of the Binary alphabet {0, 1}; it is used elsewhere in the notes as a Decimal constant example, not a Binary number.",
  },
  {
    id: "csc308_ch1_079",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The Decimal numbering scheme's digit alphabet, {0,1,2,3,4,5,6,7,8,9}, and the Binary numbering scheme's digit alphabet, {0,1}, are both used to construct valid Onka (Numbers) by concatenating digits.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Decimal scheme has ten digits {0,1,2,3,4,5,6,7,8,9} used to form numbers like 5, 10, 400, 765, and 91785, and the Binary scheme has two digits {0,1} used to form numbers like 0101, 0010, 1010, and 1111, both illustrating Onka as strings of concatenated digits.",
  },
  {
    id: "csc308_ch1_080",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Eyo (a Constant) is ascribed to a temporal state through an instrument of Context-sensitive language.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: Eyo (a Constant) is ascribed to temporal state through an instrument of Regular language. Context-sensitive language instead ascribes Orin (Quality), not Eyo (Constant), to a temporal state.",
  },
  {
    id: "csc308_ch1_081",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Since a regular universe of discourse is binary opposite neutral, and binary opposite is inherent in Fraction, which instance is the only one admissible in a regular computation process?",
    options: [
      "Fraction",
      "Both Constant and Fraction equally",
      "Neither Constant nor Fraction",
      "Constant",
    ],
    correctAnswer: 3,
    explanation:
      "Since binary opposite is inherent in Fraction and the regular universe is binary opposite neutral, Constant is the only admissible instance in a regular computation process.\n\nFraction is explicitly excluded, not admissible, in a regular computation process, precisely because binary opposite is inherent in it.\n\nBoth cannot be admissible equally, since Fraction's inherent binary opposition specifically disqualifies it from a binary-opposite-neutral regular universe.\n\nConstant is explicitly the admissible instance; it is not the case that neither is admissible, since Regular language does admit and indeed exclusively deals with Constant.",
  },
  {
    id: "csc308_ch1_082",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A regular state is constant, and its transition is described as which of the following?",
    options: [
      "Stepwise, effected through iterative and inductive process",
      "Algorithmic, effected through deductive process",
      "Heuristic, effected through a default process",
      "Random, with no discernible pattern",
    ],
    correctAnswer: 0,
    explanation:
      "A regular state is constant; its transition is Stepwise, effected through an iterative and inductive process.\n\nAlgorithmic transition, effected through a deductive process, instead describes Context-neutral transitions, not Regular ones.\n\nHeuristic transition, effected through a default process, instead describes Context-sensitive transitions, not Regular ones.\n\nA transition being random with no discernible pattern contradicts the stepwise, iterative, and inductive nature explicitly described for Regular transitions.",
  },
  {
    id: "csc308_ch1_083",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In the positional numbering scheme polynomial for a Constant Number, what does the symbol B represent?",
    options: [
      "The Begin state of a finite transition",
      "The Base of the numbering scheme",
      "The Binary opposite of the number",
      "The number of digits in the string",
    ],
    correctAnswer: 1,
    explanation:
      "In Equation 1.11, B represents the Base of the numbering scheme, such as Two for Binary or Ten for Decimal.\n\nThe Begin state of a finite transition is a Context-neutral concept relating to terminal states of a transition, unrelated to the symbol B in the Constant polynomial.\n\nBinary opposite is a property Regular language explicitly excludes, and it is unrelated to what the symbol B represents in the polynomial.\n\nThe number of digits in the string relates to the exponent range (from n down to 0), not to what the symbol B itself represents.",
  },
  {
    id: "csc308_ch1_084",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why can a digit not be used to reckon the base of a consistent numbering scheme, such as using the digit 2 in a base-Two numbering scheme?",
    options: [
      "Because digits are always larger in value than any possible base",
      "Because only Zero can ever represent a base",
      "Because Base is an Axiom while digits are Terms, which cannot mix",
      "Because bases are spatial concepts, not temporal ones",
    ],
    correctAnswer: 2,
    explanation:
      "A digit cannot be used to reckon a base in a consistent numbering scheme because Base is an instance of the scheme's Axiom, while digits are its terms, and Term and Axiom cannot be mixed in a consistent numbering scheme; for example, 2 cannot be in the alphabet of a base-Two numbering scheme.\n\nDigit value relative to the base is not the stated reason; in fact digits are always less than the base, but this is a consequence, not the explanation given for why a digit cannot reckon the base itself.\n\nZero is not described as uniquely capable of representing a base; the explanation instead concerns the distinct roles of Axiom (Base) versus Term (digit).\n\nBase relates to a numbering scheme used to express the Temporal aspect through numbers, not to the Spatial aspect at all.",
  },
  {
    id: "csc308_ch1_085",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In the positional numbering scheme polynomial, what does Position (i) determine about a digit?",
    options: [
      "Whether the digit is admissible in Regular language at all",
      "Whether the digit is treated as a binary opposite",
      "The criterion used to assess the numbering scheme",
      "The scale of the digit, based on its position and the base",
    ],
    correctAnswer: 3,
    explanation:
      "Position (i) is the position a digit occupies in the number string, used to reckon scale; digits are scaled by the base from Zero, so Position 0 (i=0) is NOT scaled, Position 1 (i=1) is scaled by the first power of the base, Position 2 by the second power, and so on.\n\nWhether a digit is admissible in Regular language is a separate question tied to whether the digit itself is Zero (excluded) or not, not to the Position it occupies.\n\nBinary opposite treatment is a property of language instruments as a whole, not something determined by a digit's position within a number.\n\nAn assessment criterion, such as Ijokan or Tito, belongs to a language instrument, not to the position of a digit within a number.",
  },
  {
    id: "csc308_ch1_086",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In the lecturer's example 205 base 10 = 2 times 10 squared + 0 times 10 to the first + 5 times 10 to the zero, how is this interpreted?",
    options: [
      "Taking two instances of Hundred, ignoring the instance of Ten, and taking five instances of Units",
      "Taking two instances of Ten, ignoring the instance of Hundred, and taking five instances of Units",
      "Taking two instances of Units, ignoring the instance of Ten, and taking five instances of Hundred",
      "Taking two instances of Hundred, five instances of Ten, and ignoring Units entirely",
    ],
    correctAnswer: 0,
    explanation:
      "The interpretation given is: taking two instances of Hundred, ignoring the instance of Ten, and taking five instances of Units, matching the positional values 2 (Hundred), 0 (Ten), 5 (Unit).\n\nSwapping Ten and Hundred reverses their positional roles; the digit 2 occupies the Hundred position, not the Ten position, in this example.\n\nSwapping Units and Hundred reverses their positional roles; the digit 5 occupies the Unit position, not the Hundred position, in this example.\n\nThe Ten position is explicitly ignored, since its digit is 0, not taken as five instances; it is the Unit position that has five instances, not Ten.",
  },
  {
    id: "csc308_ch1_087",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is stated as the simplest constant in all numbering schemes?",
    options: ["Zero", "Unit (One)", "The scheme's base", "The largest digit"],
    correctAnswer: 1,
    explanation:
      "Unit (One) is the simplest constant in all numbering schemes; every constant's logical content can be totally reduced or simplified into instances of Unit (One) constant, for example 5 = 2 + 3 = 1+1+1+1+1.\n\nZero is explicitly not an admissible regular term at all, so it cannot be the simplest constant; Regular language deals only in Constants, from which Zero is excluded.\n\nThe base of the scheme is an Axiom-level instance used for scaling digits, not itself described as the simplest constant.\n\nThe largest digit in the alphabet is not described as the simplest constant; simplicity is tied to Unit (One), regardless of which digit is largest in a given scheme's alphabet.",
  },
  {
    id: "csc308_ch1_088",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why is there NO Largest constant?",
    options: [
      "Because constants can only ever take the value of Unit (One)",
      "Because Regular language admits infinite instances of every constant",
      "Because 'Large' is the binary opposite of 'Small', which Regular language excludes",
      "Because the largest constant changes depending on the numbering scheme's base",
    ],
    correctAnswer: 2,
    explanation:
      "There is no Largest constant because 'Large' is the binary opposite of 'Small', and Constant ascribes logic to a regular temporal state, which is binary opposite neutral, so a designation like 'largest' cannot be consistently ascribed.\n\nConstants are not restricted to only the value of Unit (One); Unit is described as the simplest constant, not the only one, since other constants like 5 or 205 are also valid.\n\nRegular language deals with a single, isolated constant instance, not infinite instances; it is Context-sensitive language, not Regular, that involves infinite instances.\n\nThe reasoning given for the absence of a largest constant is about binary opposite neutrality, not about the base of the numbering scheme in use.",
  },
  {
    id: "csc308_ch1_089",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "All of the following are true of Eyo (Constant) EXCEPT:",
    options: [
      "It is the number ascribed to a regular state's logic",
      "Its structure is one-dimensional, formulated with First-order logic",
      "It is binary opposite neutral",
      "It comprises infinite instances of digits, requiring approximation",
    ],
    correctAnswer: 3,
    explanation:
      "Comprising infinite instances of digits requiring approximation describes Orin (Quality) under Context-sensitive language, not Eyo (Constant), which is a single, isolated, finite instance, making this the exception.\n\nEyo (Constant) is indeed the number ascribed to the logic of instances in a regular universe of discourse, a true statement about it, not the exception.\n\nEyo's structure is indeed one-dimensional, formulated with First-order logic, a true statement about it, not the exception.\n\nEyo is indeed binary opposite neutral, a true statement about it, not the exception.",
  },
  {
    id: "csc308_ch1_090",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Iwon (Quantity) is ascribed to a temporal state through an instrument of Regular language.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: Iwon (Quantity) is ascribed to temporal state through an instrument of Context-neutral language. Regular language instead ascribes Eyo (Constant), not Iwon (Quantity), to a temporal state.",
  },
  {
    id: "csc308_ch1_091",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "How is Idi ('a Variable') described, in relation to Iwon (Quantity)?",
    options: [
      "It comprises instances of constant, with or without scaling and/or polarity",
      "It is a single, isolated instance with exactly one logical content",
      "It is inadmissible in the context-neutral universe of discourse",
      "It comprises infinite instances of interrelated and interconnected terms",
    ],
    correctAnswer: 0,
    explanation:
      "A context-neutral instance finds expression through Idi ('a Variable'), a variable that comprises instances of constant, with or without scaling and/or polarity.\n\nBeing a single, isolated instance with exactly one logical content instead describes Eyo (Constant), not Idi (Variable).\n\nIdi is explicitly the term through which a context-neutral instance finds expression, so it is admissible in, not excluded from, the context-neutral universe of discourse.\n\nComprising infinite instances of interrelated and interconnected terms instead describes how partial aspects of Orin (Quality) can be expressed, a Context-sensitive concept, not Idi under Context-neutral Quantity.",
  },
  {
    id: "csc308_ch1_092",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A number ascribed to Iwon (Quantity) can either be a Fraction or a Constant. What is the rule governing this choice?",
    options: [
      "It must be both a Fraction and a Constant simultaneously",
      "It can be either a Fraction or a Constant, but never both",
      "It can only ever be a Fraction, never a Constant",
      "It can only ever be a Constant, never a Fraction",
    ],
    correctAnswer: 1,
    explanation:
      "Context-neutral language ascribes mutually exclusive and contradictory binary opposite to numerical-terms; a number ascribed to Iwon (Quantity) can either be a Fraction or Constant, but NEVER both.\n\nBeing both simultaneously contradicts the mutually exclusive treatment of binary opposites in Context-neutral language, where a quantity is either/or, never both/and.\n\nBeing only ever a Fraction, never a Constant, is incorrect; a quantity can be either a Fraction or a Constant, so Constant remains a possible ascription too.\n\nBeing only ever a Constant, never a Fraction, is incorrect; a quantity can be either a Fraction or a Constant, so Fraction remains a possible ascription too.",
  },
  {
    id: "csc308_ch1_093",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "What role does Zero (0) play with respect to binary opposite instances of Iwon (Quantity)?",
    options: [
      "It is entirely inadmissible in Quantity",
      "It represents the largest possible quantity",
      "It distinguishes binary opposite instances from each other",
      "It is used exclusively to represent infinite fractions",
    ],
    correctAnswer: 2,
    explanation:
      "Zero (0) distinguishes binary opposite instances from each other, in the context of Iwon (Quantity).\n\nZero being entirely inadmissible describes Regular language and Context-sensitive temporal-state formulation, not Iwon (Quantity) under Context-neutral language, where it plays an active distinguishing role.\n\nZero is not described as representing the largest possible quantity; no largest quantity or constant is described, and Zero's role is specifically as a distinguisher, not a maximum value.\n\nInfinite fractions belong to Orin (Quality) under Context-sensitive language, where Zero is explicitly not admissible, so Zero is not used there to represent infinite fractions.",
  },
  {
    id: "csc308_ch1_094",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A variable-term comprises how many instances, and how is it manipulated?",
    options: [
      "Exactly one instance, manipulated through an iterative and inductive process",
      "Infinite instances, manipulated through heuristic and default process",
      "Zero instances, since a variable-term is purely abstract",
      "One or more, but finite, instances, manipulated through Algorithm and deductive process",
    ],
    correctAnswer: 3,
    explanation:
      "A variable-term comprises one or more, but finite, instances, manipulated through Algorithm and deductive process, matching Context-neutral language's overall process type.\n\nExactly one instance, manipulated through an iterative and inductive process, instead describes a Regular-language constant, not a Context-neutral variable-term.\n\nInfinite instances, manipulated through heuristic and default process, instead describes a Context-sensitive instance, not a Context-neutral variable-term.\n\nA variable-term is not described as having zero instances; it comprises one or more finite instances, not none at all.",
  },
  {
    id: "csc308_ch1_095",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Aabo (Fraction) is defined as a numerical-term with what property?",
    options: [
      "Logical content less than Unit (One)",
      "Logical content greater than Unit (One)",
      "Logical content exactly equal to Unit (One)",
      "Logical content that is always negative",
    ],
    correctAnswer: 0,
    explanation:
      "Unit (One) is the simplest constant; a Numerical-term with logical content less than a Unit (One) is Aabo (Fraction), matching the Yoruba saying that there is no two instances of One, and every instance less than One is a fraction.\n\nLogical content greater than Unit (One) does not define a Fraction; larger values remain within the domain of Constants, not Fractions.\n\nLogical content exactly equal to Unit (One) describes Unit itself, the simplest constant, not a Fraction, which is specifically less than One.\n\nA Fraction is not defined by being negative; its defining property is having logical content less than Unit (One), independent of sign.",
  },
  {
    id: "csc308_ch1_096",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Since binary opposite is inherent in the computation of Aabo (Fraction), Fraction is classified as which kind of instance or state?",
    options: [
      "A regular instance, not a context-neutral one",
      "A context-neutral instance, not a regular one",
      "A context-sensitive instance, not a context-neutral one",
      "Neither a regular, context-neutral, nor context-sensitive instance",
    ],
    correctAnswer: 1,
    explanation:
      "Binary opposite is inherent in the computation of Aabo (Fraction), so Aabo is a context-neutral, NOT a regular, instance or state.\n\nBeing regular, not context-neutral, is the reverse of the stated classification; Fraction is explicitly excluded from Regular language due to its inherent binary opposition.\n\nWhile finite fractions ascribed to Quantity are context-neutral, the notes do not classify Fraction generally as context-sensitive rather than context-neutral; the finite-digit fraction discussed here is specifically the context-neutral instance.\n\nAabo is explicitly classified as a context-neutral instance, so it is not the case that it belongs to none of the three classifications.",
  },
  {
    id: "csc308_ch1_097",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In the positional numbering scheme polynomial for a Fraction (Equation 1.13), over what range of exponents (i) does the summation run?",
    options: [
      "From i = n down to i = 0",
      "From i = 0 to i = infinity",
      "From i = -1 down to i = -n",
      "From i = -n up to i = n",
    ],
    correctAnswer: 2,
    explanation:
      "Equation 1.13 defines the Fraction polynomial as a summation from i = -1 down to i = -n, using negative exponents of the base.\n\nFrom i = n down to i = 0 is instead the range for Equation 1.11, the Constant polynomial, which uses non-negative exponents, not the Fraction polynomial.\n\nFrom i = 0 to i = infinity is not the range given for either the Constant or Fraction polynomial; both are finite ranges bounded by n.\n\nFrom i = -n up to i = n would mix both positive and negative exponents in one sum, which does not match either the Constant polynomial, using only non-negative exponents, or the Fraction polynomial, using only negative exponents.",
  },
  {
    id: "csc308_ch1_098",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "In the lecturer's example 0.205 base 10 = 2 times 10 to the power negative 1 + 0 times 10 to the power negative 2 + 5 times 10 to the power negative 3, how is this interpreted?",
    options: [
      "Taking two instances of the Hundredth of a Unit Fraction, ignoring the Tenth, and taking five instances of a Thousandth",
      "Taking two instances of Hundred, ignoring Ten, and taking five instances of Units",
      "Taking five instances of the Tenth, ignoring the Hundredth, and taking two instances of a Thousandth",
      "Taking two instances of the Tenth of a Unit Fraction, ignoring the Hundredth, and taking five instances of a Thousandth",
    ],
    correctAnswer: 3,
    explanation:
      "The interpretation given is: taking two instances of the Tenth of a Unit Fraction, ignoring the Hundredth of a unit Fraction, and taking five instances of a Thousandth unit Fraction, matching the positional values 2 (Tenth), 0 (Hundredth), 5 (Thousandth).\n\nSwapping Tenth and Hundredth reverses their positional roles; the digit 2 occupies the Tenth position, not the Hundredth position, in this example.\n\nHundred, Ten, and Units describe the positional interpretation of the Constant 205, not the Fraction 0.205, which uses Tenth, Hundredth, and Thousandth instead.\n\nSwapping the digit values for Tenth and Thousandth reverses the actual digits; it is 2 at the Tenth position and 5 at the Thousandth position, not the other way around.",
  },
  {
    id: "csc308_ch1_099",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The Yoruba saying 'Kosi meji nnkan. Gbogbo ohun ti o to Okan ni a n pe n'i aabo' is used to define a numerical concept. What does this saying mean?",
    options: [
      "There is no two instances of One (1); every instance less than One (1) is a fraction",
      "There are always two instances of Zero; every instance is therefore a constant",
      "There is no such thing as a fraction; every number is a whole constant",
      "Every instance greater than One (1) is called a fraction",
    ],
    correctAnswer: 0,
    explanation:
      "The Yoruba saying translates to: 'There is no two instances of One (1). Every instance less than One (1) is a fraction,' directly supporting the definition of Aabo (Fraction) as having logical content less than Unit (One).\n\nThe saying does not mention Zero having two instances; it specifically addresses the uniqueness of One and the definition of what counts as a fraction relative to it.\n\nThe saying does not deny the existence of fractions; it is precisely used to define what a fraction is, in relation to the Unit One.\n\nThe saying defines a fraction as an instance less than One, not greater than One; greater-than-One instances remain within the domain of Constants.",
  },
  {
    id: "csc308_ch1_100",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is one of the two critical rules about fractions?",
    options: [
      "The logical content of a Fraction is always transmutable across number bases, exactly like a Constant",
      "The logical content of a Fraction is NOT transmutable across number bases",
      "Fractions can never be expressed with finite digits, only infinite ones",
      "Scaling operations always produce results consistent with those of a Constant",
    ],
    correctAnswer: 1,
    explanation:
      "One critical rule is that the logical content of a Fraction is NOT transmutable across number bases; for example, 1/10 = 0.1 in Base 10 has finite digits, but the same fraction has infinite digits, 0.000110011..., in Base 2.\n\nSaying a Fraction's content is always transmutable, exactly like a Constant, is the opposite of the stated rule; it is specifically Constants whose logical content IS transmutable across bases, unlike Fractions.\n\nFractions ascribed to Quantity are explicitly described as comprising finite instances of digits, such as 1/2 = 0.5; it is fractions ascribed to Quality that instead comprise infinite digits.\n\nScaling operations are explicitly described as producing logical contradictions with fractions, not results consistent with those of a Constant.",
  },
  {
    id: "csc308_ch1_101",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which pair of computations illustrates the scaling contradiction that fractions produce, compared to constants?",
    options: [
      "5 plus 5 = 10 (larger than the addends), but 0.5 plus 0.5 = 1.0 (also larger than the addends)",
      "5 minus 5 = 0, and 0.5 minus 0.5 = 0, showing perfect consistency",
      "5 times 5 = 25 (larger than the multiplicands), but 0.5 times 0.5 = 0.25 (smaller than the multiplicands)",
      "The square root of 25 is 5, and the square root of 0.25 is 0.05, showing consistent scaling",
    ],
    correctAnswer: 2,
    explanation:
      "The scaling contradiction is illustrated by 5 times 5 = 25, a result larger than the multiplicands, contrasted with 0.5 times 0.5 = 0.25, a result smaller than the multiplicands; similarly the square root of 25 is 5 but the square root of 0.25 is 0.5, a result larger than the radicand.\n\nAddition, a non-scaling operation, is explicitly described as not producing these contradictions; 5+5 and 0.5+0.5 both behave consistently as expected, unlike the scaling operations of multiplication and division.\n\nSubtraction, also a non-scaling operation, is explicitly described as not producing these contradictions; this example does not illustrate the scaling contradiction discussed in the notes.\n\nThe square root of 0.25 is 0.5, not 0.05; this incorrect value does not represent the actual contradiction described, where the true result, 0.5, is larger than the radicand 0.25.",
  },
  {
    id: "csc308_ch1_102",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why are the logical contradictions produced by scaling operations on fractions considered inadmissible in regular computation?",
    options: [
      "Because Regular language explicitly permits fractions, so no contradiction can arise there",
      "Because scaling operations are entirely forbidden in every language instrument",
      "Because Zero is required for every scaling operation to succeed",
      "Because these contradictions never occur in non-scaling operations like Addition",
    ],
    correctAnswer: 3,
    explanation:
      "These logical contradictions are not possible in non-scaling operations, such as Addition and Subtraction; admitting these binary opposites in context-neutral computation would cause inconsistency, which is NOT admissible in a context-neutral explanation, which is precisely why fractions are excluded from Regular (constant-only) computation altogether.\n\nRegular language explicitly does NOT permit fractions at all, due to the binary opposition inherent in fractions, so this cannot be the reason contradictions are considered inadmissible there.\n\nScaling operations, Multiplication and Division, are explicitly within the ambit of Context-neutral language, so they are not forbidden entirely; it is only the specific contradictions they produce with fractions that are discussed.\n\nZero is not described as a requirement for scaling operations to succeed; the discussion concerns contradictions in results, such as 0.5 times 0.5, not the presence or absence of Zero.",
  },
  {
    id: "csc308_ch1_103",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "All of the following are true of Iwon (Quantity) EXCEPT:",
    options: [
      "A number ascribed to it can be simultaneously both a Fraction and a Constant",
      "It is ascribed to temporal state through an instrument of context-neutral language",
      "Zero (0) is used to distinguish its binary opposite instances",
      "Infinity is not admissible in its formulation",
    ],
    correctAnswer: 0,
    explanation:
      "A number ascribed to Iwon can be EITHER a Fraction OR a Constant, but never simultaneously both, since context-neutral language treats binary opposites as mutually exclusive and contradictory, making this the exception.\n\nIwon (Quantity) is indeed ascribed to temporal state through an instrument of context-neutral language, a true statement about it, not the exception.\n\nZero (0) is indeed used to distinguish binary opposite instances of Iwon from each other, a true statement about it, not the exception.\n\nInfinity is indeed not admissible in the formulation of Iwon (Quantity), a true statement about it, not the exception.",
  },
  {
    id: "csc308_ch1_104",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Orin (Quality) is ascribed to a temporal state through an instrument of Context-neutral language.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: Orin (Quality) is ascribed to temporal state through an instrument of Context-sensitive language. Context-neutral language instead ascribes Iwon (Quantity), not Orin (Quality), to a temporal state.",
  },
  {
    id: "csc308_ch1_105",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Why is an interpretation of Orin (Quality) described as inextricable from its human agency?",
    options: [
      "Because Orin is a purely mechanical, agency-independent computation",
      "Because infinity is inherent in the mental state of Orin (Quality)",
      "Because Orin can be fully computed without any human involvement whatsoever",
      "Because Orin is identical in every respect to Eyo (Constant)",
    ],
    correctAnswer: 1,
    explanation:
      "An interpretation is inextricable from its human agency because infinity is inherent in the mental state of Orin (Quality), requiring infinite instances of terms to express an infinite instance.\n\nOrin being purely mechanical and agency-independent contradicts the explicit statement that its interpretation is inextricable from human agency.\n\nOrin cannot be fully computed at all, whether by human or machine, since infinite instances cannot be represented, and representation is necessary for computation.\n\nOrin is explicitly the innermost, most complex term in the hierarchy, subsuming and dependent on Iwon and Eyo, and is not identical to Eyo (Constant), which is a single, isolated, finite instance.",
  },
  {
    id: "csc308_ch1_106",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The number for ascribing Aabo (Fraction) to Orin (Quality) comprises how many instances of digits?",
    options: [
      "Exactly one digit",
      "Finite instances, like Iwon",
      "Infinite instances of digits",
      "Zero digits, since Zero is inadmissible",
    ],
    correctAnswer: 2,
    explanation:
      "The number for ascribing Aabo (Fraction) to Orin (Quality) comprises infinite instances of digits, distinguishing it from the finite-digit fraction ascribed to Iwon (Quantity).\n\nExactly one digit does not match the infinite-digit description given for a fraction ascribed to Quality.\n\nFinite instances of digits, matching Iwon, is the opposite distinction; it is specifically the Quality-ascribed fraction that is infinite, unlike the Quantity-ascribed one, which is finite.\n\nZero digits is not the stated count; the fraction ascribed to Quality comprises infinite digits, not zero digits, though the specific digit Zero is separately noted as inadmissible in Context-sensitive temporal-state formulation.",
  },
  {
    id: "csc308_ch1_107",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which category of infinite fraction includes 1/3 = 0.333333..., 1/6 = 0.166666..., and 1/9 = 0.111111...?",
    options: [
      "Infinite and cyclic repeating digits",
      "Infinite and random digits",
      "Finite and terminating digits",
      "Infinite and constantly repeating digits",
    ],
    correctAnswer: 3,
    explanation:
      "1/3, 1/6, and 1/9 are given as examples of the category infinite and constantly repeating digits, where constancy and linearity are inherent in the pattern.\n\nInfinite and cyclic repeating digits instead includes examples such as 1/7 and pi, with a longer repeating cycle showing consistent, perfect symmetry, not the simple single-digit repetition of 1/3, 1/6, and 1/9.\n\nInfinite and random digits instead includes examples such as the Golden ratio and the fine structure constant, not the constantly repeating pattern of 1/3, 1/6, and 1/9.\n\nFinite and terminating digits describes fractions ascribed to Iwon (Quantity), such as 1/2 = 0.5, not the infinite fractions ascribed to Orin (Quality) discussed here.",
  },
  {
    id: "csc308_ch1_108",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which category of infinite fraction includes 1/7 = 0.142857142857... and pi = 22/7 = 3.142857142857...?",
    options: [
      "Infinite and cyclic repeating digits",
      "Infinite and constantly repeating digits",
      "Infinite and random digits",
      "Finite and terminating digits",
    ],
    correctAnswer: 0,
    explanation:
      "1/7 and pi are given as examples of the category infinite and cyclic repeating digits, where consistent and perfect symmetry is inherent in the pattern of the repeating cycle.\n\nInfinite and constantly repeating digits instead includes examples such as 1/3, 1/6, and 1/9, with linearity and constancy in a simple single-digit pattern, not the longer repeating cycle of 1/7 and pi.\n\nInfinite and random digits instead includes examples such as the Golden ratio and the fine structure constant, not the cyclic repeating pattern of 1/7 and pi.\n\nFinite and terminating digits describes fractions ascribed to Iwon (Quantity), not the infinite fractions ascribed to Orin (Quality) discussed here.",
  },
  {
    id: "csc308_ch1_109",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which category of infinite fraction includes the Golden ratio phi and the fine structure constant alpha?",
    options: [
      "Infinite and constantly repeating digits",
      "Infinite and random digits",
      "Infinite and cyclic repeating digits",
      "Finite and terminating digits",
    ],
    correctAnswer: 1,
    explanation:
      "The Golden ratio phi and the fine structure constant alpha are given as examples of the category infinite and random digits, where quasi-symmetric coherence is inherent in the pattern.\n\nInfinite and constantly repeating digits instead includes examples such as 1/3, 1/6, and 1/9, not the seemingly non-repeating digits of phi and alpha.\n\nInfinite and cyclic repeating digits instead includes examples such as 1/7 and pi, which have a clear repeating cycle, unlike the random-appearing digits of phi and alpha.\n\nFinite and terminating digits describes fractions ascribed to Iwon (Quantity), not the infinite fractions ascribed to Orin (Quality) discussed here.",
  },
  {
    id: "csc308_ch1_110",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The random infinite digit fraction, such as the Golden ratio, is explained through which metaphor?",
    options: [
      "The metaphor of a numbering scheme's alphabet",
      "The metaphor of fingers used for pointing and counting",
      "The metaphor of Iseda, natural phenomena like spirals",
      "The metaphor of Begin and End terminal states",
    ],
    correctAnswer: 2,
    explanation:
      "The metaphor of sensory accounts of pattern manifesting in Iseda (the phenomenon of nature), such as a spiral in a flower or a snail shell, explains the infinite random digit fraction.\n\nThe metaphor of a numbering scheme's alphabet relates to Ika (Digits), not to the specific explanation given for random infinite fractions.\n\nThe metaphor of fingers used for pointing relates to Ika and Onka, the Digit and Number concepts, not to the explanation of random infinite fractions.\n\nBegin and End terminal states are a Context-neutral concept relating to finite transitions, unrelated to the metaphor used for random infinite fractions in Context-sensitive Quality.",
  },
  {
    id: "csc308_ch1_111",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is one of the three categories of infinite fraction ascribed to Orin (Quality)?",
    options: [
      "Constantly repeating digits",
      "Randomly repeating variables",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "The three categories of infinite fraction ascribed to Orin (Quality) are: infinite and constantly repeating digits, infinite and cyclic repeating digits, and infinite and random digits, so constantly repeating digits is correct. 'Randomly repeating variables' is not one of the three named categories, which specifically concern digits, not variables, and does not match any of the three category names, so only constantly repeating digits is supported here.",
  },
  {
    id: "csc308_ch1_112",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The state of Eyo ('a Constant') is described as regular, meaning it has one, and only one, isolated instance, not related to another instance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The temporal state of Eyo (a Constant) is regular, meaning it has one, and only one, isolated instance, not related to another instance, unlike Iwon (Quantity), which has multiple related instances, or Orin (Quality), which has infinite interconnected instances.",
  },
  {
    id: "csc308_ch1_113",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is true regarding the temporal states of Iwon (Quantity) and Orin (Quality)?",
    options: [
      "Both are described as regular, isolated instances, just like Eyo (Constant)",
      "Both are described as irregular, though Iwon is rational and Orin is irrational",
      "All of these",
      "None of these",
    ],
    correctAnswer: 1,
    explanation:
      "Both Iwon and Orin are described as irregular, though Iwon is rational, simplified through related and connected instances, while Orin is irrational, simplified through interrelated and interconnected instances, so only that option is supported. Being regular, isolated instances instead describes Eyo (Constant), not Iwon or Orin, so that option is not supported here.",
  },
  {
    id: "csc308_ch1_114",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The relationship between Ika, Onka, Eyo, Iwon, and Orin is formulated with which metaphor?",
    options: [
      "Ijokan (Constancy) metaphor",
      "Kikun (Coherence) metaphor",
      "Tally (Base one) metaphor",
      "Atoledole (Organic) metaphor",
    ],
    correctAnswer: 3,
    explanation:
      "The relationship between Ika, Onka, Eyo, Iwon, and Orin is formulated with the Atoledole (Organic) metaphor, per Figure 1.1, where each term has unique features, but the instances they express are intertwined.\n\nIjokan (Constancy) is instead the assessment criterion for Regular language, not the metaphor for the five-term hierarchy.\n\nKikun (Coherence) is instead the assessment criterion for Context-sensitive language, not the metaphor for the five-term hierarchy.\n\nTally (Base one) is a specific numbering scheme example used to illustrate Ika (Digits), not the metaphor used for the five-term hierarchy.",
  },
  {
    id: "csc308_ch1_115",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following correctly represents the subsumption chain, from outermost to innermost, of the five-term hierarchy?",
    options: [
      "Ika (Digit) contains Onka (Number) contains Eyo (Constant) contains Iwon (Quantity) contains Orin (Quality)",
      "Orin (Quality) contains Iwon (Quantity) contains Eyo (Constant) contains Onka (Number) contains Ika (Digit)",
      "Eyo (Constant) contains Ika (Digit) contains Onka (Number) contains Iwon (Quantity) contains Orin (Quality)",
      "Onka (Number) contains Ika (Digit) contains Eyo (Constant) contains Orin (Quality) contains Iwon (Quantity)",
    ],
    correctAnswer: 0,
    explanation:
      "The hierarchy, from outermost to innermost, is Ika (Digit) contains Onka (Number) contains Eyo (Constant) contains Iwon (Quantity) contains Orin (Quality), per Figure 1.1's organic metaphor.\n\nThe reversed order, Orin containing Iwon containing Eyo containing Onka containing Ika, inverts the actual direction; Orin (Quality) is the innermost term, not the outermost.\n\nPlacing Eyo as the outermost misorders the chain; Ika (Digit) is the true outermost layer, with Eyo positioned in the middle.\n\nPlacing Onka as the outermost, with Orin and Iwon out of their correct relative order, misorders the chain in multiple ways at once.",
  },
  {
    id: "csc308_ch1_116",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "By subsumption, Eyo (Constant) is subsumed in Iwon (Quantity), which is in turn subsumed in Orin (Quality).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "By subsumption, Eyo (Constant) is subsumed in Iwon (Quantity), which is in turn subsumed in Orin (Quality), directly paralleling the subsumption chain Regular subset Context-neutral subset Context-sensitive.",
  },
  {
    id: "csc308_ch1_117",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "The statement 'Orin is inexplicable in the absence of Iwon, which is in turn inexpressible in the absence of Eyo' reflects which relationship?",
    options: [
      "A statement that the three terms are entirely unrelated to one another",
      "The subsumption chain, where each inner term depends on the terms that subsume it",
      "A claim that Orin, Iwon, and Eyo are interchangeable synonyms",
      "A claim that Eyo depends on Orin, reversing the actual dependency",
    ],
    correctAnswer: 1,
    explanation:
      "This statement reflects the subsumption chain: since Eyo is subsumed in Iwon, which is subsumed in Orin, each inner term's explicability or expressibility depends on the terms that subsume and precede it in the chain.\n\nThe statement explicitly ties the three terms together through dependency, contradicting a claim that they are entirely unrelated.\n\nEach term has unique, distinguishing features, so they are not interchangeable synonyms, even though the instances they express are intertwined.\n\nThe dependency runs from Orin depending on Iwon, which depends on Eyo, not the reverse; Eyo does not depend on Orin.",
  },
  {
    id: "csc308_ch1_118",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Consider a numerical-term with the property that it is binary-opposite-neutral, formulated with First-order logic in a One-dimensional structure, with only one isolated instance. Which term in the five-term hierarchy does this describe?",
    options: [
      "Iwon (Quantity)",
      "Orin (Quality)",
      "Eyo (Constant)",
      "Oruko (Name)",
    ],
    correctAnswer: 2,
    explanation:
      "This description, binary-opposite-neutral, First-order logic, One-dimensional, single isolated instance, matches Eyo (Constant), which is ascribed to a regular temporal state through Regular language.\n\nIwon (Quantity) instead is Second-order logic, Two-dimensional, and treats binary opposites as mutually exclusive, not neutral, so it does not match this description.\n\nOrin (Quality) instead is Third-order logic, Three-dimensional, and treats binary opposites as mutually inclusive, not neutral, so it does not match this description.\n\nOruko (Name) is a Spatial-aspect, nominal-term concept, entirely outside the Temporal-aspect hierarchy of Ika, Onka, Eyo, Iwon, and Orin.",
  },
  {
    id: "csc308_ch1_119",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Consider a numerical-term that treats a Fraction and a Constant as mutually exclusive, is formulated with Second-order logic in a Two-dimensional structure, and uses Zero as a separator. Which term does this describe?",
    options: [
      "Eyo (Constant)",
      "Orin (Quality)",
      "Ika (Digit)",
      "Iwon (Quantity)",
    ],
    correctAnswer: 3,
    explanation:
      "This description, mutually exclusive Fraction/Constant treatment, Second-order logic, Two-dimensional, Zero as separator, matches Iwon (Quantity), ascribed through Context-neutral language.\n\nEyo (Constant) instead is First-order logic, One-dimensional, binary-opposite-neutral (admitting neither Fraction nor Constant as an opposed pair, since only Constant is admissible at all), so it does not match this description.\n\nOrin (Quality) instead is Third-order logic, Three-dimensional, treats binary opposites as mutually inclusive, and excludes Zero entirely, so it does not match this description.\n\nIka (Digit) is a primitive symbol, not a numerical-term with a logic order, dimension, or binary-opposite treatment at all, so it does not match this description.",
  },
  {
    id: "csc308_ch1_120",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Consider a numerical-term that treats Positive and Negative as mutually inclusive and complementary, expressed as a range like +/-5, formulated with Third-order logic in a Three-dimensional structure. Which term does this describe?",
    options: [
      "Orin (Quality)",
      "Eyo (Constant)",
      "Iwon (Quantity)",
      "Onka (Number)",
    ],
    correctAnswer: 0,
    explanation:
      "This description, mutually inclusive Positive/Negative treated as a range, Third-order logic, Three-dimensional, matches Orin (Quality), ascribed through Context-sensitive language.\n\nEyo (Constant) instead is binary-opposite-neutral and admits no Positive/Negative treatment at all, formulated with First-order logic in a One-dimensional structure, so it does not match this description.\n\nIwon (Quantity) instead treats Positive and Negative as mutually exclusive, either one or the other but never both, formulated with Second-order logic in a Two-dimensional structure, so it does not match this description.\n\nOnka (Number) is simply a string of digits used to count, with no logic order, dimension, or binary-opposite treatment of its own, so it does not match this description.",
  },
  {
    id: "csc308_ch1_121",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a valid distinction between Eyo (Constant) and Aabo (Fraction, as ascribed to Quantity)?",
    options: [
      "Constant's logical content is never transmutable across number bases, while Fraction's always is",
      "Constant's logical content is transmutable across number bases; Fraction's is not",
      "Both Constant and Fraction have logical content that is equally transmutable across every base",
      "Neither Constant nor Fraction has any logical content that can be reduced to Unit (One)",
    ],
    correctAnswer: 1,
    explanation:
      "Constant's logical content is transmutable across bases; Fraction's is NOT, since a fraction with finite digits in one base, such as 1/10 = 0.1 in Base 10, may have infinite digits in another base, such as 0.000110011... in Base 2.\n\nThis statement reverses the actual distinction; it is Constant's content that IS transmutable across bases, and Fraction's that is NOT, not the other way around.\n\nThe notes explicitly distinguish the two: Constant's content is transmutable, while Fraction's is not, so they are not equally transmutable across every base.\n\nEvery Constant's logical content can be reduced to instances of Unit (One), such as 5 = 1+1+1+1+1; this reducibility to Unit is a property of Constant, not something absent from both terms.",
  },
  {
    id: "csc308_ch1_122",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a valid distinction between Eyo (Constant) and Aabo (Fraction)?",
    options: [
      "Zero (0) is admissible for Constant but never appears anywhere in the representation of a Fraction",
      "Both Constant and Fraction equally exclude Zero (0) from their numerical representation",
      "Zero excludes Constant but appears as a digit in a Fraction like 0.205",
      "Zero (0) is required to compute both Constant and Fraction, with no distinction between them",
    ],
    correctAnswer: 2,
    explanation:
      "Zero (0) is NOT an admissible regular term for Eyo (Constant), since it is a number-neutral digit that cannot reckon the first-order logic of a constant; yet Zero does appear, for example, as the Hundredth-position digit in the fraction 0.205, since fractions ascribed to Quantity are context-neutral, where Zero is admissible as a digit and separator.\n\nThis reverses the actual distinction; Zero is inadmissible for Constant, not admissible, while it does appear within the digit-string of a Fraction like 0.205.\n\nZero does appear in fraction representations, such as the 0 at the Hundredth position in 0.205, so it is not equally excluded from both Constant and Fraction.\n\nZero's role differs meaningfully between the two: it is entirely excluded from Constant, while being an admissible digit within a Fraction's representation, so there is a clear distinction, not an equal requirement.",
  },
  {
    id: "csc308_ch1_123",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following is a valid distinction between the Fraction ascribed to Iwon (Quantity) and the Fraction ascribed to Orin (Quality)?",
    options: [
      "The Quantity-ascribed fraction comprises infinite instances of digits, while the Quality-ascribed fraction comprises finite instances of digits",
      "Both fractions comprise exactly the same finite number of digits, with no distinction between them",
      "Neither fraction can ever be expressed using digits at all",
      "The Quantity-ascribed fraction comprises finite instances of digits, while the Quality-ascribed fraction comprises infinite instances of digits",
    ],
    correctAnswer: 3,
    explanation:
      "The number for ascribing Fraction to Iwon (Quantity) comprises finite instances of digits, such as 1/2 = 0.5, while the number for ascribing Fraction to Orin (Quality) comprises infinite instances of digits, such as 1/3 = 0.333333....\n\nThis reverses the actual distinction; it is the Quantity-ascribed fraction that is finite, and the Quality-ascribed fraction that is infinite, not the other way around.\n\nThe notes explicitly distinguish the two by digit count, finite versus infinite, so they do not comprise exactly the same finite number of digits.\n\nBoth fractions are explicitly expressed using digits, whether finite (Quantity) or infinite (Quality); neither is described as inexpressible through digits.",
  },
  {
    id: "csc308_ch1_124",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "A student writes: 'A fraction is just a small constant.' Why is this statement incorrect?",
    options: [
      "A constant is regular and excludes Zero; a fraction is context-neutral and admits Zero",
      "A constant and a fraction are in fact fully identical in every property, so the statement is correct, not incorrect",
      "A fraction is regular and a constant is context-neutral, the reverse of what the student implies",
      "The only difference between a constant and a fraction is their numerical value, with no structural distinction at all",
    ],
    correctAnswer: 0,
    explanation:
      "The statement is incorrect because a constant is regular, binary-opposite-neutral, formulated with First-order logic, and excludes Zero entirely, while a fraction is context-neutral, has binary opposition inherently, is formulated with Second-order logic, and admits Zero as a digit or separator; these are structurally distinct categories, not merely different sizes of the same thing.\n\nThe notes explicitly draw multiple structural distinctions between Constant and Fraction, so they are not fully identical, making the student's statement genuinely incorrect rather than correct.\n\nThis reverses the actual classification; it is the Constant that is regular, and the Fraction that is context-neutral, not the other way around.\n\nThe distinction goes well beyond numerical value alone; it spans language instrument, logic order, dimension, binary-opposite treatment, Zero admissibility, base transmutability, and behavior under scaling operations.",
  },
  {
    id: "csc308_ch1_125",
    course: "CSC 308",
    chapter: "Chapter 1",
    text: "Which of the following correctly pairs a hierarchy term with its associated language instrument?",
    options: [
      "Eyo (Constant) with Context-sensitive language, and Orin (Quality) with Regular language",
      "Eyo (Constant) with Regular language, and Orin (Quality) with Context-sensitive language",
      "Iwon (Quantity) with Regular language, and Eyo (Constant) with Context-neutral language",
      "Orin (Quality) with Context-neutral language, and Iwon (Quantity) with Context-sensitive language",
    ],
    correctAnswer: 1,
    explanation:
      "Eyo (Constant) is correctly paired with Regular language, and Orin (Quality) is correctly paired with Context-sensitive language, matching the note's explicit ascriptions.\n\nSwapping the pairings, Eyo with Context-sensitive and Orin with Regular, reverses both correct associations at once.\n\nIwon (Quantity) is paired with Context-neutral language, not Regular language, and Eyo (Constant) is paired with Regular language, not Context-neutral language, so both pairings here are incorrect.\n\nOrin (Quality) is paired with Context-sensitive language, not Context-neutral language, and Iwon (Quantity) is paired with Context-neutral language, not Context-sensitive language, so both pairings here are incorrect.",
  },
];

export default csc308Chapter1Questions;
