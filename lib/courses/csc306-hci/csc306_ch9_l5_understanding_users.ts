import { QuestionV2 } from "@/lib/quiz-types";

const csc306Lecture5UsersQuestions: QuestionV2[] = [
  {
    id: "csc306_ch9_001",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_002",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_003",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_004",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_005",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_006",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_007",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_008",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_009",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_010",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_011",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_012",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_013",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_014",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_015",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_016",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_017",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_018",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_019",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_020",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_021",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_022",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_023",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_024",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_025",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_026",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_027",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_028",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_029",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_030",
    course: "CSC 306",
    chapter: "Chapter 9",
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
    id: "csc306_ch9_031",
    course: "CSC 306",
    chapter: "Chapter 9",
    text: "A single research method, used alone, is described as sufficient to capture the full picture of user behaviour.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. No single method captures the full picture, since each reveals a different layer of user behaviour, which is why methods like surveys, contextual inquiry, and diary studies are used in combination."
  }
];

export default csc306Lecture5UsersQuestions;
