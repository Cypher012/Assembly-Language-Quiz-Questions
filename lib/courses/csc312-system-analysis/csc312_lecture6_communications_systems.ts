import { QuestionV2 } from "@/lib/quiz-types";

const csc312Lecture6Questions: QuestionV2[] = [
  {
    id: "csc312_ch5_001",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "What happens at the start of a system's lifecycle is said to determine what?",
    options: [
      "The workload at the end",
      "The color scheme of the interface",
      "The number of employees a company hires",
      "The price of the hardware used",
    ],
    correctAnswer: 0,
    explanation:
      "The Core Principle states that user involvement and system maintenance sit at opposite ends of the SDLC but are deeply connected: what happens at the start determines the workload at the end.\n\nInterface color scheme is a UI/UX design detail, not the connection described here.\n\nEmployee headcount is not the connection described here.\n\nHardware price is not the connection described here.",
  },
  {
    id: "csc312_ch5_002",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Weak user involvement up front tends to produce what result later?",
    options: [
      "A stream of avoidable change requests",
      "A permanent freeze on all system changes",
      "An automatic increase in the project's budget",
      "A guarantee of project success",
    ],
    correctAnswer: 0,
    explanation:
      "The After Go-Live: Maintenance & Support box states weak user involvement up front tends to produce a stream of avoidable change requests later.\n\nA permanent freeze on changes is not described as a consequence of weak involvement.\n\nAn automatic budget increase is not described as a direct consequence of weak involvement.\n\nA guarantee of success contradicts the stated consequence, which is a stream of avoidable change requests, not success.",
  },
  {
    id: "csc312_ch5_003",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the four-step requirements determination process, which step focuses on problem, root-cause, and duration analysis?",
    options: [
      "Analysis Strategies",
      "Elicitation Techniques",
      "Requirements Definition",
      "Into Design",
    ],
    correctAnswer: 0,
    explanation:
      "The Four-Step Process describes step 1, Analysis Strategies, with a focus on problem, root-cause, and duration analysis, aiming to understand the true business problems to solve.\n\nElicitation Techniques focuses on interviews, JAD, questionnaires, and observation, not analysis strategies.\n\nRequirements Definition focuses on documenting functional and non-functional requirements, not the analysis strategies themselves.\n\nInto Design focuses on process, data, and architecture models, a later step than analysis strategies.",
  },
  {
    id: "csc312_ch5_004",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the four-step requirements determination process, which step focuses on interviews, JAD, questionnaires, and observation?",
    options: [
      "Elicitation Techniques",
      "Analysis Strategies",
      "Requirements Definition",
      "Into Design",
    ],
    correctAnswer: 0,
    explanation:
      "The Four-Step Process describes step 2, Elicitation Techniques, with a focus on interviews, JAD, questionnaires, document review, and observation, aiming to gather requirements through user involvement.\n\nAnalysis Strategies focuses on problem, root-cause, and duration analysis, not gathering techniques.\n\nRequirements Definition focuses on documenting functional and non-functional requirements, a step after elicitation.\n\nInto Design focuses on process, data, and architecture models, a later step than elicitation.",
  },
  {
    id: "csc312_ch5_005",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the four-step requirements determination process, which step's goal is to clearly specify what the system must do?",
    options: [
      "Requirements Definition",
      "Analysis Strategies",
      "Elicitation Techniques",
      "Into Design",
    ],
    correctAnswer: 0,
    explanation:
      "The Four-Step Process describes step 3, Requirements Definition, with a goal of clearly specifying what the system must do, focusing on functional and non-functional requirements.\n\nAnalysis Strategies focuses on understanding the true business problem, a step before requirements are defined.\n\nElicitation Techniques focuses on gathering requirements, a step before they are formally defined.\n\nInto Design focuses on transforming requirements into system designs, a step after requirements are defined.",
  },
  {
    id: "csc312_ch5_006",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the four-step requirements determination process, which step transforms requirements into process, data, and architecture models?",
    options: [
      "Into Design",
      "Analysis Strategies",
      "Elicitation Techniques",
      "Requirements Definition",
    ],
    correctAnswer: 0,
    explanation:
      "The Four-Step Process describes step 4, Into Design, with a goal of transforming requirements into system designs using process, data, and architecture models.\n\nAnalysis Strategies focuses on understanding the true business problem, an earlier step.\n\nElicitation Techniques focuses on gathering requirements, an earlier step.\n\nRequirements Definition focuses on documenting requirements, a step before they are transformed into designs.",
  },
  {
    id: "csc312_ch5_007",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is cited as the number one reason for IT project failure?",
    options: [
      "Lack of user involvement",
      "Scope creep",
      "Technical issues",
      "Insufficient hardware budget",
    ],
    correctAnswer: 0,
    explanation:
      "Finding #1 cites a Standish Group study reporting lack of user involvement as the number one cited reason for IT project failure, explicitly noting it is not scope creep or technical issues.\n\nScope creep is explicitly named as NOT the top reason, in contrast to lack of user involvement.\n\nTechnical issues are explicitly named as NOT the top reason, in contrast to lack of user involvement.\n\nHardware budget is not mentioned as a cited reason for project failure here.",
  },
  {
    id: "csc312_ch5_008",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Without user involvement, requirements tend to become what, per the Knowledge Gap finding?",
    options: [
      "Analyst assumptions",
      "Legally binding contracts",
      "Permanent system features",
      "Marketing materials",
    ],
    correctAnswer: 0,
    explanation:
      "Finding #2, the Knowledge Gap, states the result of missing user involvement is that requirements become analyst assumptions rather than reflecting true business need.\n\nLegally binding contracts are not the described result of missing user involvement.\n\nPermanent system features are not the described result of missing user involvement.\n\nMarketing materials are not the described result of missing user involvement.",
  },
  {
    id: "csc312_ch5_009",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Finding #3, the Trade-Off Reality, describes what relationship as user involvement increases?",
    options: [
      "The chance of project success rises, but so does the time and cost burden on users",
      "The chance of project success falls sharply",
      "The system automatically becomes cheaper to build",
      "Users lose all interest in the project",
    ],
    correctAnswer: 0,
    explanation:
      "Finding #3 states as user involvement increases, the chance of project success rises, but so does the time and cost burden on users, creating a design challenge.\n\nA falling chance of success contradicts the stated positive relationship between involvement and success.\n\nAutomatically cheaper is not stated; in fact, more involvement is described as more costly for users.\n\nLosing interest is not the described relationship; the finding is about time and cost burden, not disengagement.",
  },
  {
    id: "csc312_ch5_010",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Finding #4, the Assumption Trap, states that effective user involvement requires what?",
    options: [
      "Deliberate planning and technique selection",
      "Assuming every user has equal time to contribute",
      "Ignoring differences in user willingness",
      "Involving only senior management",
    ],
    correctAnswer: 0,
    explanation:
      "Finding #4 states involvement must be planned, not assumed, and that effective involvement requires deliberate planning and technique selection because willingness and capacity vary among users.\n\nAssuming equal time contradicts the finding's warning that not every user can or will contribute significant time.\n\nIgnoring differences in willingness contradicts the finding, which explicitly notes willingness varies.\n\nInvolving only senior management is not the guidance given by this finding.",
  },
  {
    id: "csc312_ch5_011",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a factor each elicitation technique trades off, alongside depth and breadth?",
    options: [
      "Cost of conducting",
      "The color of the office walls",
      "The number of holidays in a year",
      "The brand of computer used",
    ],
    correctAnswer: 0,
    explanation:
      "The Five Requirements Elicitation Techniques overview lists depth, breadth, integration, user involvement time burden, and cost of conducting as the five trade-off factors.\n\nOffice wall color is not one of the trade-off factors listed.\n\nNumber of holidays is not one of the trade-off factors listed.\n\nComputer brand is not one of the trade-off factors listed.",
  },
  {
    id: "csc312_ch5_012",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique's profile is rated High depth, Low breadth, Medium involvement, and Medium cost?",
    options: ["Interviews", "JAD Sessions", "Questionnaires", "Observation"],
    correctAnswer: 0,
    explanation:
      "Technique 1's profile lists Interviews as High depth, Low breadth, Medium involvement, and Medium cost.\n\nJAD Sessions is rated High depth, Medium breadth, Highest involvement, and Medium-Low cost, a different profile.\n\nQuestionnaires is rated Medium depth, High breadth, Low involvement, and Low cost, a different profile.\n\nObservation is rated Low depth, Low breadth, Low involvement, and Low-Medium cost, a different profile.",
  },
  {
    id: "csc312_ch5_013",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique is described as a structured conversation that surfaces facts, opinions, and the reasoning behind them?",
    options: ["Interviews", "Questionnaires", "Observation", "JAD Sessions"],
    correctAnswer: 0,
    explanation:
      "Technique 1's overview describes Interviews as a structured conversation that surfaces facts, opinions, and the reasoning behind them, the most flexible and widely used elicitation technique.\n\nQuestionnaires are described as surveys distributed to many users, not a conversation.\n\nObservation is described as watching the as-is process in action, not a conversation.\n\nJAD Sessions are described as workshops bringing many stakeholders together, a group format rather than a one-on-one conversation.",
  },
  {
    id: "csc312_ch5_014",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The main trade-off of using Interviews as an elicitation technique is described as which of the following?",
    options: [
      "Time-consuming, since the analyst must visit each source individually",
      "Extremely expensive facility rental costs",
      "Inability to capture any depth of information",
      "Complete inability to reach individual users",
    ],
    correctAnswer: 0,
    explanation:
      "Technique 1's trade-off is described as time-consuming, since the analyst must visit each information source individually, meaning it doesn't scale to large user populations.\n\nFacility rental cost is described as a trade-off of JAD Sessions, not Interviews.\n\nInterviews are explicitly described as having high depth, not an inability to capture depth.\n\nInterviews are explicitly a technique for reaching individual users; the trade-off is that it doesn't scale, not that it can't reach individuals.",
  },
  {
    id: "csc312_ch5_015",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique's profile is rated High depth, Medium breadth, Highest involvement, and Medium-Low cost?",
    options: ["JAD Sessions", "Interviews", "Questionnaires", "Observation"],
    correctAnswer: 0,
    explanation:
      "Technique 2's profile lists JAD Sessions as High depth, Medium breadth, Highest involvement, and Medium-Low cost (high upfront, saves later).\n\nInterviews is rated High depth, Low breadth, Medium involvement, and Medium cost, a different breadth and involvement rating.\n\nQuestionnaires is rated Medium depth, High breadth, Low involvement, and Low cost, a different profile.\n\nObservation is rated Low depth, Low breadth, Low involvement, and Low-Medium cost, a different profile.",
  },
  {
    id: "csc312_ch5_016",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique is best for important projects where conflicting viewpoints must be reconciled quickly, such as mergers requiring integrated systems?",
    options: ["JAD Sessions", "Questionnaires", "Observation", "Interviews"],
    correctAnswer: 0,
    explanation:
      "Technique 2's Best For section names JAD Sessions as best for important projects where conflicting viewpoints must be reconciled quickly, such as mergers and cross-functional process redesigns.\n\nQuestionnaires are best for broad input when reaching many users matters, not resolving conflicts in real time.\n\nObservation is best for understanding real workflow, not resolving conflicting viewpoints.\n\nInterviews are best for as-is understanding and shaping the to-be system, not real-time conflict resolution among many stakeholders at once.",
  },
  {
    id: "csc312_ch5_017",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The strength of JAD Sessions is described as which of the following?",
    options: [
      "Information is integrated immediately, with conflicts resolved in the room",
      "It costs nothing to organize",
      "It requires no facilitator at all",
      "It never pulls users away from their jobs",
    ],
    correctAnswer: 0,
    explanation:
      "Technique 2's strength is described as information being integrated immediately, with conflicts surfacing and getting resolved in the room rather than in endless email chains later.\n\nJAD Sessions are explicitly described as expensive up front, not costing nothing.\n\nJAD Sessions are explicitly described as requiring a skilled facilitator, often a paid consultant.\n\nJAD Sessions are explicitly described as pulling many users away from their jobs simultaneously, the opposite of this option.",
  },
  {
    id: "csc312_ch5_018",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The Pay-Off of JAD Sessions, despite its expensive upfront cost, is described as which of the following?",
    options: [
      "It reduces costly back-and-forth integration work later, lowering total cost over time",
      "It eliminates the need for any further requirements gathering",
      "It guarantees the system will never need maintenance",
      "It removes the need for a project manager",
    ],
    correctAnswer: 0,
    explanation:
      "Technique 2's Pay-Off section states JAD reduces costly back-and-forth integration work later, so the front-loaded cost saves money in the long run.\n\nEliminating further requirements gathering is not the described pay-off; other techniques and analysis strategies are still used.\n\nGuaranteeing no future maintenance is not the described pay-off of JAD Sessions.\n\nRemoving the need for a project manager is not the described pay-off of JAD Sessions.",
  },
  {
    id: "csc312_ch5_019",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique's profile is rated Medium depth, High breadth, Low involvement, and Low cost?",
    options: ["Questionnaires", "Interviews", "JAD Sessions", "Observation"],
    correctAnswer: 0,
    explanation:
      "Technique 3's profile lists Questionnaires as Medium depth, High breadth, Low involvement, and Low cost.\n\nInterviews is rated High depth, Low breadth, Medium involvement, and Medium cost, a different profile.\n\nJAD Sessions is rated High depth, Medium breadth, Highest involvement, and Medium-Low cost, a different profile.\n\nObservation is rated Low depth, Low breadth, Low involvement, and Low-Medium cost, a different depth and breadth.",
  },
  {
    id: "csc312_ch5_020",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The main limitation of Questionnaires as an elicitation technique is described as which of the following?",
    options: [
      "They offer little insight into the 'why' behind answers",
      "They cannot reach more than one user at a time",
      "They are the most expensive elicitation technique",
      "They require a skilled facilitator to administer",
    ],
    correctAnswer: 0,
    explanation:
      "Technique 3's limitation is described as medium depth, offering little insight into the 'why' behind answers, meaning you learn what users think but not why.\n\nQuestionnaires are explicitly described as reaching many users at once, the opposite of reaching only one user at a time.\n\nQuestionnaires are explicitly described as low cost, not the most expensive technique.\n\nA skilled facilitator is described as a requirement for JAD Sessions, not Questionnaires.",
  },
  {
    id: "csc312_ch5_021",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique is best used for validating assumptions with a large user base or guiding more in-depth interviews?",
    options: ["Questionnaires", "JAD Sessions", "Observation", "Interviews"],
    correctAnswer: 0,
    explanation:
      "Technique 3's When to Use section lists validating assumptions with a large user base and running quick surveys to guide more in-depth interviews.\n\nJAD Sessions are used for reconciling conflicting viewpoints in important projects, not broad low-cost validation.\n\nObservation is used for watching real workflow, not broad surveys.\n\nInterviews are used for deep, individual understanding, not for reaching a large user base quickly.",
  },
  {
    id: "csc312_ch5_022",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique involves reviewing forms, reports, and manuals from the current system without asking users directly?",
    options: ["Document Analysis", "Interviews", "JAD Sessions", "Observation"],
    correctAnswer: 0,
    explanation:
      "Technique 4's overview describes reviewing forms, reports, and manuals from the current system to understand as-is processes without asking users directly.\n\nInterviews involve directly asking users through conversation, the opposite of this technique.\n\nJAD Sessions involve directly engaging users in a workshop, the opposite of this technique.\n\nObservation involves watching users work directly, not reviewing existing records.",
  },
  {
    id: "csc312_ch5_023",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The main limitation of reviewing existing forms, reports, and manuals as an elicitation technique is which of the following?",
    options: [
      "It is easy to overlook unwritten practices and workarounds",
      "It is the most expensive elicitation technique",
      "It interrupts users constantly",
      "It cannot be combined with any other technique",
    ],
    correctAnswer: 0,
    explanation:
      "Technique 4's limitation states it is easy to overlook unwritten practices, since documentation shows the official process while actual work often differs, and workarounds won't appear in manuals.\n\nThis technique is explicitly described as low cost, not the most expensive.\n\nThis technique is explicitly described as not interrupting users, since analysts review records on their own time.\n\nThe technique's own tip recommends combining it with observation or interviews to validate against actual practice.",
  },
  {
    id: "csc312_ch5_024",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique's profile is rated Low depth, Low breadth, Low involvement, and Low-Medium cost?",
    options: ["Observation", "Interviews", "JAD Sessions", "Questionnaires"],
    correctAnswer: 0,
    explanation:
      "Technique 5's profile lists Observation as Low depth, Low breadth, Low involvement, and Low-Medium cost.\n\nInterviews is rated High depth, Low breadth, Medium involvement, and Medium cost, a different profile.\n\nJAD Sessions is rated High depth, Medium breadth, Highest involvement, and Medium-Low cost, a different profile.\n\nQuestionnaires is rated Medium depth, High breadth, Low involvement, and Low cost, a different depth and cost.",
  },
  {
    id: "csc312_ch5_025",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique reveals what people actually do rather than just what they say they do?",
    options: ["Observation", "Questionnaires", "Interviews", "JAD Sessions"],
    correctAnswer: 0,
    explanation:
      "Technique 5's strength states it reveals what people actually do, not just what they say, since real work is often more complex than formal descriptions.\n\nQuestionnaires capture what users report about themselves in a survey, not direct observation of actual behavior.\n\nInterviews capture what users say in conversation, not direct observation of behavior.\n\nJAD Sessions capture what stakeholders say and agree on in a workshop, not direct observation of behavior.",
  },
  {
    id: "csc312_ch5_026",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The limitation of Observation is described as time-consuming and susceptible to which effect, where people behave differently when watched?",
    options: ["The Hawthorne effect", "The Domino effect", "The Butterfly effect", "The Placebo effect"],
    correctAnswer: 0,
    explanation:
      "Technique 5's limitation names the Hawthorne effect, where people may behave differently when watched because they know they're being observed.\n\nThe Domino effect is not the term used to describe this behavioral change.\n\nThe Butterfly effect is not the term used to describe this behavioral change.\n\nThe Placebo effect is not the term used to describe this behavioral change.",
  },
  {
    id: "csc312_ch5_027",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the side-by-side comparison table, which technique has the highest 'Integration' rating?",
    options: ["JAD", "Interviews", "Questionnaires", "Observation"],
    correctAnswer: 0,
    explanation:
      "The Comparison table rates JAD as High on Integration, while Interviews, Questionnaires, reviewing existing records, and Observation are all rated Low on Integration.\n\nInterviews is rated Low on Integration in this table, not High.\n\nQuestionnaires is rated Low on Integration in this table, not High.\n\nObservation is rated Low on Integration in this table, not High.",
  },
  {
    id: "csc312_ch5_028",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the side-by-side comparison table, which two techniques are rated 'High' on Breadth?",
    options: [
      "Questionnaires and reviewing existing records",
      "Interviews and Observation",
      "JAD and Interviews",
      "JAD and Observation",
    ],
    correctAnswer: 0,
    explanation:
      "The Comparison table rates both Questionnaires and reviewing existing forms, reports, and manuals as High on Breadth, while Interviews and Observation are rated Low, and JAD is rated Medium.\n\nInterviews and Observation are both rated Low on Breadth in this table, not High.\n\nJAD is rated Medium on Breadth, and Interviews is rated Low, so neither is High here.\n\nJAD is rated Medium on Breadth, and Observation is rated Low, so neither is High here.",
  },
  {
    id: "csc312_ch5_029",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the side-by-side comparison table, which techniques are rated 'High' on Depth?",
    options: [
      "Interviews and JAD",
      "Questionnaires and Observation",
      "Observation and reviewing existing records",
      "JAD and Questionnaires",
    ],
    correctAnswer: 0,
    explanation:
      "The Comparison table rates both Interviews and JAD as High on Depth, while Questionnaires is rated Medium, and reviewing existing records and Observation are both rated Low.\n\nQuestionnaires is rated Medium on Depth, and Observation is rated Low, so neither is High here.\n\nObservation and reviewing existing records are both rated Low on Depth in this table, not High.\n\nJAD is rated High, but Questionnaires is rated Medium, not High, so this pairing is incorrect.",
  },
  {
    id: "csc312_ch5_030",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a criterion compared in the side-by-side elicitation technique table?",
    options: ["User involvement", "Office temperature", "Number of printers", "Employee birthdays"],
    correctAnswer: 0,
    explanation:
      "The Comparison table lists type of info, depth, breadth, integration, user involvement, and cost as its six criteria.\n\nOffice temperature is not one of the six criteria listed in this table.\n\nNumber of printers is not one of the six criteria listed in this table.\n\nEmployee birthdays is not one of the six criteria listed in this table.",
  },
  {
    id: "csc312_ch5_031",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following elicitation techniques is rated 'Low' on Integration in the comparison table?",
    options: ["Interviews", "Questionnaires", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Comparison table rates Integration as Low for Interviews, Questionnaires, reviewing existing records, and Observation, and High only for JAD, so both Interviews and Questionnaires are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch5_032",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the User Involvement Ranking, which technique demands the highest involvement, with users in workshops for days?",
    options: ["JAD Sessions", "Interviews", "Questionnaires", "Observation"],
    correctAnswer: 0,
    explanation:
      "The User Involvement Ranking lists JAD Sessions as the highest involvement, since users participate in workshops for days.\n\nInterviews is ranked second, medium involvement, below JAD.\n\nQuestionnaires is ranked low involvement, well below JAD.\n\nObservation is ranked low involvement, well below JAD.",
  },
  {
    id: "csc312_ch5_033",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the User Involvement Ranking, which technique ranks second, requiring medium involvement through individual time with each user?",
    options: ["Interviews", "JAD Sessions", "Questionnaires", "Observation"],
    correctAnswer: 0,
    explanation:
      "The User Involvement Ranking lists Interviews second, at medium involvement, requiring individual time with each user.\n\nJAD Sessions ranks first, the highest involvement, above Interviews.\n\nQuestionnaires ranks lower than Interviews, at low involvement.\n\nObservation ranks lower than Interviews, at low involvement.",
  },
  {
    id: "csc312_ch5_034",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "User involvement is defined in this ranking as which of the following?",
    options: [
      "The amount of time and energy the intended users must devote to the analysis process",
      "The number of features a system has",
      "The total budget assigned to a project",
      "The number of servers a system runs on",
    ],
    correctAnswer: 0,
    explanation:
      "The User Involvement Ranking section defines user involvement as the amount of time and energy the intended users of the new system must devote to the analysis process.\n\nNumber of features is not the definition given for user involvement.\n\nProject budget is not the definition given for user involvement.\n\nNumber of servers is not the definition given for user involvement.",
  },
  {
    id: "csc312_ch5_035",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a benefit of user involvement?",
    options: [
      "Greater user buy-in and acceptance once the system launches",
      "Guaranteed elimination of all project costs",
      "Complete removal of the need for testing",
      "Automatic approval from senior management",
    ],
    correctAnswer: 0,
    explanation:
      "The Benefits section lists greater user buy-in and acceptance once the system launches, alongside a higher chance of success and requirements that better reflect true business needs.\n\nEliminating all project costs is not listed as a benefit; costs are in fact listed separately as a trade-off.\n\nRemoving the need for testing is not listed as a benefit of user involvement.\n\nAutomatic management approval is not listed as a benefit of user involvement.",
  },
  {
    id: "csc312_ch5_036",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a cost of user involvement?",
    options: [
      "Productivity loss during peak analysis periods",
      "A permanent reduction in system quality",
      "The complete elimination of user feedback",
      "A mandatory increase in hardware purchases",
    ],
    correctAnswer: 0,
    explanation:
      "The Costs section lists productivity loss during peak analysis periods, alongside significant time and energy demanded from users and the high upfront expense of high-involvement techniques like JAD.\n\nA permanent reduction in system quality is not listed as a cost; involvement is in fact linked to better requirements and quality.\n\nEliminating user feedback contradicts the entire premise of user involvement, which is about gathering feedback.\n\nA mandatory hardware increase is not listed as a cost of user involvement.",
  },
  {
    id: "csc312_ch5_037",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The Balance section reframes the key question about user involvement as which of the following?",
    options: [
      "How much involvement is appropriate, given our constraints and risks?",
      "Should we ever involve users at all?",
      "Can we avoid user involvement entirely?",
      "Is user involvement legally required?",
    ],
    correctAnswer: 0,
    explanation:
      "The Balance section states the real question is not 'How much involvement?' but 'How much involvement is appropriate, given our constraints and risks?'\n\nWhether to involve users at all is not the reframed question; involvement is treated as necessary, just needing calibration.\n\nAvoiding involvement entirely contradicts the section's premise that involvement is valuable and should be calibrated, not avoided.\n\nLegal requirement is not the framing used in this section.",
  },
  {
    id: "csc312_ch5_038",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which two techniques are described as needing the least analyst training to run?",
    options: [
      "Reviewing existing records and Observation",
      "JAD Sessions and Interviews",
      "JAD Sessions and Questionnaires",
      "Interviews and Observation",
    ],
    correctAnswer: 0,
    explanation:
      "The Analyst Experience section states reviewing existing forms and manuals, plus observation, need the least training among the techniques.\n\nJAD Sessions is explicitly described as the most demanding technique to run well, the opposite of least training.\n\nJAD Sessions requires the most training, so pairing it with Questionnaires does not match the least-training pairing described.\n\nInterviews is not listed among the least-training techniques in this section; reviewing existing records is.",
  },
  {
    id: "csc312_ch5_039",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which elicitation technique is described as the most demanding to run well, such that inexperienced analysts should avoid it until trained?",
    options: ["JAD Sessions", "Observation", "Questionnaires", "Interviews"],
    correctAnswer: 0,
    explanation:
      "The Analyst Experience section states JAD Sessions are the most demanding to run well, and inexperienced analysts should avoid JAD until trained.\n\nObservation is described as needing the least training, not the most demanding.\n\nQuestionnaires are not described as demanding to run.\n\nInterviews are not described as the most demanding technique in this section.",
  },
  {
    id: "csc312_ch5_040",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which techniques suit the as-is stage of analysis best?",
    options: [
      "Reviewing existing records and Observation",
      "Interviews and JAD",
      "JAD and Questionnaires",
      "Interviews and Questionnaires",
    ],
    correctAnswer: 0,
    explanation:
      "The Stage of Analysis section states reviewing existing forms and manuals, plus observation, suit the as-is stage best, while Interviews and JAD work across all stages.\n\nInterviews and JAD are described as working across all stages (as-is, improvements, to-be), not specifically suited to as-is alone.\n\nJAD works across all stages, and Questionnaires is not singled out as best for the as-is stage specifically in this pairing.\n\nInterviews works across all stages, and Questionnaires is not the technique singled out as best for as-is in this section.",
  },
  {
    id: "csc312_ch5_041",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Most real projects are described as combining several elicitation techniques to balance which of the following?",
    options: [
      "Depth, breadth, integration, involvement burden, and cost",
      "Only the analyst's personal preference",
      "Only the company's marketing goals",
      "Only the number of available office rooms",
    ],
    correctAnswer: 0,
    explanation:
      "The No Single 'Best' Technique section states most projects combine several techniques to balance depth, breadth, integration, user involvement burden, and cost constraints.\n\nPersonal preference alone is not the described balancing factor.\n\nMarketing goals are not the described balancing factor.\n\nOffice room availability is not the described balancing factor.",
  },
  {
    id: "csc312_ch5_042",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The example combined workflow suggests starting with which low-cost technique before moving to broader and then deeper methods?",
    options: [
      "Reviewing existing records",
      "JAD Sessions",
      "Interviews with key users",
      "Observation of complex processes",
    ],
    correctAnswer: 0,
    explanation:
      "The example workflow suggests starting with reviewing existing forms and manuals (low cost), followed by a questionnaire (broad input), then interviews with key users (deep understanding), then a JAD session (resolve conflicts).\n\nJAD Sessions is described as the final step in this example sequence, not the starting point.\n\nInterviews with key users is described as the third step in this example sequence, not the starting point.\n\nObservation is not part of this specific example sequence at all.",
  },
  {
    id: "csc312_ch5_043",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which requirements analysis strategy asks users and managers to identify problems with the as-is system and how to solve them?",
    options: [
      "Problem Analysis",
      "Root Cause Analysis",
      "Duration Analysis",
      "Comparison Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "Strategy 1, Problem Analysis, asks users and managers to identify problems with the as-is system and how to solve them.\n\nRoot Cause Analysis starts from problems and drills down through causes, not directly asking users how to solve them.\n\nDuration Analysis times each step of a process to find hidden delay, a different method entirely.\n\nComparison Analysis is not one of the three strategies named in this section.",
  },
  {
    id: "csc312_ch5_044",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Problem Analysis is described as fast, but its outcome tends to be which of the following?",
    options: [
      "Small and incremental, addressing symptoms rather than root causes",
      "Large and transformational, always fixing root causes",
      "Impossible to complete within any budget",
      "Guaranteed to eliminate all future problems",
    ],
    correctAnswer: 0,
    explanation:
      "Strategy 1's Outcome section states improvements tend to be small and incremental, addressing symptoms rather than root causes.\n\nLarge, transformational, root-cause fixes are the outcome more associated with Root Cause Analysis, not Problem Analysis.\n\nProblem Analysis is described as fast and usable under limited time and budget, not impossible to complete.\n\nProblem Analysis's own limitation notes it often improves the surface without addressing underlying issues, not eliminating all future problems.",
  },
  {
    id: "csc312_ch5_045",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which requirements analysis strategy starts from problems, not solutions, and drills down through potential causes until the true root cause is found?",
    options: [
      "Root Cause Analysis",
      "Problem Analysis",
      "Duration Analysis",
      "Priority Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "Strategy 2, Root Cause Analysis, starts from problems, not solutions, and drills down through potential causes in a tree until the true root cause is found.\n\nProblem Analysis directly asks users to identify problems and solutions, without the structured drill-down described here.\n\nDuration Analysis times process steps to find hidden delay, a different method entirely.\n\nPriority Analysis is not one of the three strategies named in this section.",
  },
  {
    id: "csc312_ch5_046",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Root Cause Analysis process, what question is repeatedly asked for each identified cause?",
    options: [
      "Why does this happen?",
      "Who is to blame for this?",
      "How much does this cost?",
      "When did this first occur?",
    ],
    correctAnswer: 0,
    explanation:
      "The How It Works section for Root Cause Analysis describes repeatedly asking 'Why does this happen?' for each cause, continuing until reaching causes that can actually be addressed.\n\n'Who is to blame' contradicts the improvement-focused, not blame-focused, approach of root cause analysis.\n\nCost is not the repeated question in this drill-down process.\n\nTiming of first occurrence is not the repeated question in this drill-down process.",
  },
  {
    id: "csc312_ch5_047",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Inventory Stock-Outs example of Root Cause Analysis, which of the following is listed as a branch of the root cause tree, alongside Incorrect Reorder Quantities?",
    options: [
      "Inaccurate On-Hand Counts",
      "Excessive Warehouse Space",
      "Overqualified Staff",
      "Too Many Suppliers",
    ],
    correctAnswer: 0,
    explanation:
      "The root cause tree for Frequent Stock-Outs lists three branches: Inaccurate On-Hand Counts, Incorrect Reorder Quantities, and Supplier Order Lag.\n\nExcessive warehouse space is not one of the three branches shown in the root cause tree.\n\nOverqualified staff is not one of the three branches shown in the root cause tree.\n\nToo many suppliers is not one of the three branches shown in the root cause tree; Supplier Order Lag is the related branch.",
  },
  {
    id: "csc312_ch5_048",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The lesson from the Inventory Stock-Outs example is to avoid fixing the symptom, such as 'just order more stock', and instead do what?",
    options: [
      "Trace causes down to the level you can actually act on",
      "Immediately fire the warehouse manager",
      "Stop selling the affected products entirely",
      "Ignore the problem until it resolves itself",
    ],
    correctAnswer: 0,
    explanation:
      "The Lesson states don't fix the symptom ('just order more stock'), but trace causes down to the level you can actually act on.\n\nFiring the manager is not the lesson drawn from this example.\n\nDiscontinuing the product is not the lesson drawn from this example.\n\nIgnoring the problem contradicts the entire purpose of root cause analysis, which is to actively trace and fix causes.",
  },
  {
    id: "csc312_ch5_049",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which requirements analysis strategy times each step of an as-is process and compares the sum to the total elapsed time?",
    options: [
      "Duration Analysis",
      "Problem Analysis",
      "Root Cause Analysis",
      "Feasibility Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "Strategy 3, Duration Analysis, times each step of an as-is process and compares the sum to the total elapsed time, with the gap often revealing hidden delay.\n\nProblem Analysis asks users to identify problems directly, without timing individual steps.\n\nRoot Cause Analysis drills down through causes in a tree, a different method from timing process steps.\n\nFeasibility Analysis is not one of the three strategies named in this section.",
  },
  {
    id: "csc312_ch5_050",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Duration Analysis example, active processing time is 2 hours and total elapsed time is 20 hours. What is the hidden delay?",
    options: ["18 hours", "2 hours", "20 hours", "22 hours"],
    correctAnswer: 0,
    explanation:
      "The Duration Analysis example states active processing time is 2 hours and total elapsed time is 20 hours, so the hidden delay is 18 hours, 90% of the total time.\n\n2 hours is the active processing time itself, not the hidden delay.\n\n20 hours is the total elapsed time itself, not the hidden delay (the difference between the two).\n\n22 hours would be the sum of the two figures, not their difference, and does not match the stated hidden delay.",
  },
  {
    id: "csc312_ch5_051",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Duration Analysis example, what percentage of the total time is described as waiting rather than working?",
    options: ["90%", "10%", "50%", "100%"],
    correctAnswer: 0,
    explanation:
      "The Duration Analysis example states 18 hours of hidden delay out of 20 total hours is 90% of the time spent waiting, not working.\n\n10% would represent the active working time in this example, not the waiting time.\n\n50% does not match the stated proportion in this specific example.\n\n100% would mean no active work occurred at all, which contradicts the 2 hours of active processing time stated.",
  },
  {
    id: "csc312_ch5_052",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as something hidden delays often reveal?",
    options: [
      "Bottlenecks, where someone is overloaded",
      "A need to hire more marketing staff",
      "A requirement to change the company's logo",
      "A need to relocate the office building",
    ],
    correctAnswer: 0,
    explanation:
      "The Insight section lists bottlenecks, sequential handoffs, rework, and waiting as things hidden delays often reveal.\n\nHiring marketing staff is not listed as something hidden delays reveal.\n\nChanging the company logo is not listed as something hidden delays reveal.\n\nRelocating the office is not listed as something hidden delays reveal.",
  },
  {
    id: "csc312_ch5_053",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Problem Analysis, Root Cause Analysis, and Duration Analysis are the three requirements analysis strategies covered.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. Three strategies are described: Problem Analysis, Root Cause Analysis, and Duration Analysis.",
  },
  {
    id: "csc312_ch5_054",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In Lewin's model of organizational change, which stage involves analysis and design activities loosening attachment to the as-is system?",
    options: ["Unfreeze", "Move", "Refreeze", "Restart"],
    correctAnswer: 0,
    explanation:
      "Lewin's model describes Unfreeze as the stage where analysis and design activities loosen attachment to the as-is system, as users begin to question current processes.\n\nMove is described as the stage where the migration plan guides conversion from as-is to to-be, a later stage.\n\nRefreeze is described as the stage where support and maintenance lock the new system into everyday use, the final stage.\n\nRestart is not one of the three stages in Lewin's model.",
  },
  {
    id: "csc312_ch5_055",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In Lewin's model, which stage involves the migration plan guiding conversion from as-is to to-be, as the system goes live?",
    options: ["Move", "Unfreeze", "Refreeze", "Restart"],
    correctAnswer: 0,
    explanation:
      "Lewin's model describes Move as the stage where the migration plan guides conversion from as-is to to-be, the system goes live, and users learn new processes.\n\nUnfreeze is described as the stage where attachment to the as-is system loosens, occurring before Move.\n\nRefreeze is described as the stage where the new system becomes normal and routine, occurring after Move.\n\nRestart is not one of the three stages in Lewin's model.",
  },
  {
    id: "csc312_ch5_056",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In Lewin's model, which stage involves support and maintenance locking the new system into everyday use?",
    options: ["Refreeze", "Unfreeze", "Move", "Restart"],
    correctAnswer: 0,
    explanation:
      "Lewin's model describes Refreeze as the stage where support and maintenance lock the new system into everyday use, so it becomes the normal, accepted, routine way of performing business processes.\n\nUnfreeze is described as loosening attachment to the as-is system, occurring before Refreeze.\n\nMove is described as guiding conversion from as-is to to-be, occurring before Refreeze.\n\nRestart is not one of the three stages in Lewin's model.",
  },
  {
    id: "csc312_ch5_057",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Unfreeze, Move, and Restart are the three stages of Lewin's model of organizational change.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Lewin's model of organizational change describes exactly three stages: Unfreeze, Move, and Refreeze, not Restart.",
  },
  {
    id: "csc312_ch5_058",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The goal of postimplementation activities is described as which of the following?",
    options: [
      "To institutionalize the use of the new system, making it the normal, routine way of performing business processes",
      "To permanently prevent any future changes to the system",
      "To delete all historical data once a system launches",
      "To transfer full ownership of the system to end users",
    ],
    correctAnswer: 0,
    explanation:
      "The Postimplementation Activities goal states it is to institutionalize the use of the new system, making it the normal, accepted, routine way of performing business processes.\n\nPreventing all future changes contradicts the ongoing role of maintenance, one of the three pillars.\n\nDeleting historical data is not the stated goal of postimplementation activities.\n\nTransferring ownership to end users is not the stated goal; support, maintenance, and assessment remain owned by staff and project managers.",
  },
  {
    id: "csc312_ch5_059",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the Three Pillars of postimplementation activities is described as providing on-demand assistance when users get stuck, owned by the help desk?",
    options: ["Support", "Maintenance", "Project Assessment", "Deployment"],
    correctAnswer: 0,
    explanation:
      "The Three Pillars describe Support as providing assistance in the use of the system, on-demand help when users get stuck, owned by the help desk or operations team.\n\nMaintenance is described as continuing to refine and improve the system, owned by the project manager and maintenance team, not the help desk.\n\nProject Assessment is described as analyzing the project to repeat what worked, owned by the project manager and team members.\n\nDeployment is not one of the three pillars named here; it is a separate SDLC phase.",
  },
  {
    id: "csc312_ch5_060",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the Three Pillars starts immediately after launch and continues for the system's entire lifetime, owned by the project manager and maintenance team?",
    options: ["Maintenance", "Support", "Project Assessment", "Planning"],
    correctAnswer: 0,
    explanation:
      "The Three Pillars describe Maintenance as continuing to refine and improve the system, starting immediately after launch and continuing for the system's lifetime, owned by the project manager and maintenance team.\n\nSupport is owned by the help desk or operations team, not the maintenance team, though it also starts on day 1.\n\nProject Assessment happens as a team review right after and a system review months later, not a continuous ongoing activity like maintenance.\n\nPlanning is not one of the three pillars named here; it is an earlier SDLC phase.",
  },
  {
    id: "csc312_ch5_061",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the Three Pillars involves a team review right after installation and a system review months later?",
    options: ["Project Assessment", "Support", "Maintenance", "Analysis"],
    correctAnswer: 0,
    explanation:
      "The Three Pillars describe Project Assessment's timing as a team review immediately after installation and a system review months later.\n\nSupport is described as starting day 1 and tapering over months, not structured as two separate reviews.\n\nMaintenance is described as continuous from launch through the system's lifetime, not structured as two separate reviews.\n\nAnalysis is not one of the three pillars named here; it is an earlier SDLC phase.",
  },
  {
    id: "csc312_ch5_062",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Support, Maintenance, and Project Assessment are the Three Pillars of postimplementation activities.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The Three Pillars of postimplementation activities are Support, Maintenance, and Project Assessment.",
  },
  {
    id: "csc312_ch5_063",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Support is defined as which of the following?",
    options: [
      "On-demand training that helps users perform a function right when they need it",
      "A one-time training session held only before launch",
      "A mandatory annual certification exam for all users",
      "A hardware upgrade program",
    ],
    correctAnswer: 0,
    explanation:
      "The What Support Is section defines support as on-demand training, helping users perform a function right when they need it, through online resources or a help desk.\n\nA one-time pre-launch session contradicts the on-demand, ongoing nature of support described.\n\nAn annual certification exam is not the definition given for support.\n\nA hardware upgrade program is not the definition given for support.",
  },
  {
    id: "csc312_ch5_064",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which support method is described as the most common, including help screens, documentation, and FAQ sites?",
    options: [
      "Online Support",
      "Level 1 Support",
      "Level 2 Support",
      "In-person consulting",
    ],
    correctAnswer: 0,
    explanation:
      "The Primary Support Methods section describes Online Support as the most common method, including help screens, documentation, and FAQ sites, cheaper than a live person.\n\nLevel 1 Support is described as broad-skilled help-desk staff resolving requests by phone or ticket, not the online-resource method.\n\nLevel 2 Support is described as expert staff resolving harder issues, not the online-resource method.\n\nIn-person consulting is not the method named as most common here.",
  },
  {
    id: "csc312_ch5_065",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The advantage of Online Support is described as which of the following?",
    options: [
      "It scales to unlimited users and is available 24/7",
      "It can resolve every complex issue immediately",
      "It requires no user effort to articulate the problem",
      "It replaces the need for Level 1 and Level 2 support entirely",
    ],
    correctAnswer: 0,
    explanation:
      "Online Support's advantage is described as scaling to unlimited users and being available 24/7.\n\nOnline Support's own limitation states it can't handle complex issues, contradicting this option.\n\nOnline Support's limitation notes users must articulate their problem well, contradicting a claim of requiring no user effort.\n\nOnline Support is one of several methods alongside Level 1 and Level 2, not a replacement for them.",
  },
  {
    id: "csc312_ch5_066",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Level 1 Support is staffed by which of the following?",
    options: [
      "Broad-skilled help-desk generalists",
      "Only the original software developers",
      "Senior executives of the company",
      "External auditors",
    ],
    correctAnswer: 0,
    explanation:
      "Level 1 Support's Who section describes broad-skilled help-desk staff, generalists with knowledge of networks, hardware, commercial software, and in-house systems.\n\nOriginal software developers are more closely aligned with Level 2 Support's access to the development team, not Level 1 staff.\n\nSenior executives are not described as staffing Level 1 Support.\n\nExternal auditors are not described as staffing Level 1 Support.",
  },
  {
    id: "csc312_ch5_067",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The goal of Level 1 Support is described as which of the following?",
    options: [
      "Resolve 80% of requests on the first call",
      "Resolve 0% of requests, escalating everything",
      "Resolve exactly 50% of requests within a week",
      "Resolve 100% of requests, including all bugs",
    ],
    correctAnswer: 0,
    explanation:
      "Level 1 Support's Goal section states the goal is to resolve 80% of requests on the first call.\n\nEscalating everything with a 0% resolution rate contradicts the stated 80% first-call resolution goal.\n\n50% within a week is not the stated goal or timeframe.\n\n100% resolution including all bugs is not the stated goal; complex issues and confirmed bugs are explicitly escalated to Level 2.",
  },
  {
    id: "csc312_ch5_068",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "If Level 1 Support cannot resolve an issue, what happens next?",
    options: [
      "A problem report is created and escalated to Level 2",
      "The issue is permanently ignored",
      "The user is charged a penalty fee",
      "The system is immediately shut down",
    ],
    correctAnswer: 0,
    explanation:
      "The If They Can't Resolve section states a problem report is created and the issue is escalated to Level 2.\n\nPermanently ignoring the issue is not the described process when Level 1 cannot resolve it.\n\nCharging a penalty fee is not the described process.\n\nImmediately shutting down the system is not the described process.",
  },
  {
    id: "csc312_ch5_069",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Level 2 Support staff are typically selected during implementation based on which of the following?",
    options: [
      "Strong performance and technical aptitude",
      "Seniority alone, regardless of skill",
      "Being the newest hire in the company",
      "Random assignment from any department",
    ],
    correctAnswer: 0,
    explanation:
      "Level 2 Support's Who section describes staff who know the application deeply, often selected during implementation based on strong performance and technical aptitude.\n\nSeniority alone is not the described selection criterion.\n\nBeing the newest hire is not the described selection criterion.\n\nRandom assignment is not the described selection criterion.",
  },
  {
    id: "csc312_ch5_070",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a type of issue handled by Level 2 Support?",
    options: [
      "Confirmed bugs",
      "Requests for a new office chair",
      "Payroll disputes between employees",
      "Building maintenance requests",
    ],
    correctAnswer: 0,
    explanation:
      "Level 2 Support's Types of Issues section lists complex feature interactions, data integrity problems, system performance issues, and confirmed bugs.\n\nOffice chair requests are unrelated to the application-focused issues Level 2 handles.\n\nPayroll disputes between employees are unrelated to the application-focused issues Level 2 handles.\n\nBuilding maintenance requests are unrelated to the application-focused issues Level 2 handles.",
  },
  {
    id: "csc312_ch5_071",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a field included in a problem report?",
    options: [
      "Time and date",
      "The user's favorite color",
      "The company's stock price",
      "The weather forecast",
    ],
    correctAnswer: 0,
    explanation:
      "The Problem Reports table lists time and date, support person's info, reporter's info, software/hardware, location, problem description, action taken, and disposition as its eight fields.\n\nFavorite color is not one of the eight fields listed in a problem report.\n\nStock price is not one of the eight fields listed in a problem report.\n\nWeather forecast is not one of the eight fields listed in a problem report.",
  },
  {
    id: "csc312_ch5_072",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which field of a problem report captures whether the issue was fixed by Level 1 or forwarded to maintenance?",
    options: ["Disposition", "Location", "Action taken", "Time and date"],
    correctAnswer: 0,
    explanation:
      "The Problem Reports table describes the Disposition field as capturing whether the issue was fixed by Level 1 or forwarded to maintenance.\n\nLocation captures where the problem occurred, not the resolution outcome.\n\nAction taken captures what was already tried, not the final resolution outcome.\n\nTime and date tracks the issue and response time, not the resolution outcome.",
  },
  {
    id: "csc312_ch5_073",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "If a confirmed bug is discovered, a problem report is routed to system maintenance and becomes which of the following?",
    options: [
      "A change request",
      "A marketing proposal",
      "A hiring request",
      "A budget cut",
    ],
    correctAnswer: 0,
    explanation:
      "The From Problem to Change Request section states a problem report for a confirmed bug is routed to system maintenance and becomes a change request.\n\nA marketing proposal is not what a confirmed bug's problem report becomes.\n\nA hiring request is not what a confirmed bug's problem report becomes.\n\nA budget cut is not what a confirmed bug's problem report becomes.",
  },
  {
    id: "csc312_ch5_074",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is a key fact about system maintenance costs over a system's lifetime?",
    options: [
      "More money and effort go to maintenance than to initial development",
      "Maintenance always costs less than initial development",
      "Maintenance costs are fixed and never change",
      "Maintenance is entirely free once a system launches",
    ],
    correctAnswer: 0,
    explanation:
      "The MORE Money Goes to Maintenance section states more money and effort over a system's lifetime go to maintenance than to its initial development, because the system continues to evolve.\n\nMaintenance costing less than development contradicts the stated fact that more money goes to maintenance.\n\nFixed, unchanging costs contradict the description of continuous evolution driving maintenance spending.\n\nMaintenance being entirely free contradicts the explicit statement about money and effort going toward it.",
  },
  {
    id: "csc312_ch5_075",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Junior analysts and programmers are described as often starting their careers on which type of project?",
    options: [
      "Maintenance projects",
      "Brand-new system development only",
      "Executive strategy projects",
      "Marketing campaigns",
    ],
    correctAnswer: 0,
    explanation:
      "The Where New Analysts Start section states junior analysts and programmers often work maintenance projects first, before new development, to understand existing systems and build relationships.\n\nBrand-new development is described as something junior staff work on after maintenance experience, not first.\n\nExecutive strategy projects are not described as where new analysts start.\n\nMarketing campaigns are not described as where new analysts start.",
  },
  {
    id: "csc312_ch5_076",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Per the Scope of Changes fact, significant maintenance changes follow which kind of process?",
    options: [
      "A full SDLC-style process, including requirements, design, development, and testing",
      "No process at all",
      "A process that skips testing entirely",
      "A process managed only by end users",
    ],
    correctAnswer: 0,
    explanation:
      "The Scope of Changes section states significant changes follow a full SDLC-style process (requirements, design, development, testing), while minor changes follow a lighter version.\n\nNo process at all contradicts the described structured approach to significant changes.\n\nSkipping testing entirely contradicts the explicit inclusion of testing in the full SDLC-style process.\n\nBeing managed only by end users contradicts the process being owned by a project manager.",
  },
  {
    id: "csc312_ch5_077",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Who is described as owning system maintenance efforts?",
    options: [
      "A project manager",
      "Only the original system users",
      "The company's board of directors",
      "External government regulators",
    ],
    correctAnswer: 0,
    explanation:
      "The Ownership section states maintenance is owned by a project manager, who coordinates maintenance efforts, since every system has one.\n\nOriginal system users are not described as the owner of maintenance efforts.\n\nThe board of directors is not described as the owner of maintenance efforts.\n\nExternal government regulators are not described as the owner of maintenance efforts.",
  },
  {
    id: "csc312_ch5_078",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Six-Step Change Request Lifecycle, which step involves users, support staff, or other sources recognizing a need for improvement or a bug fix?",
    options: [
      "Step 1: Potential Change Identified",
      "Step 3: Priority Set",
      "Step 5: Programming",
      "Step 6: Changed System",
    ],
    correctAnswer: 0,
    explanation:
      "Step 1, Potential Change Identified, describes users, support staff, or other sources recognizing a need for improvement or bug fix.\n\nStep 3, Priority Set, involves the change committee prioritizing changes, occurring after identification.\n\nStep 5, Programming, involves developers implementing and testing the change, occurring later.\n\nStep 6, Changed System, involves the production team deploying the verified change, the final step.",
  },
  {
    id: "csc312_ch5_079",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Six-Step Change Request Lifecycle, which step involves an analyst or project manager documenting a feasibility study, costs, and benefits?",
    options: [
      "Step 2: Change Request Prepared",
      "Step 1: Potential Change Identified",
      "Step 4: Analysis & Design",
      "Step 6: Changed System",
    ],
    correctAnswer: 0,
    explanation:
      "Step 2, Change Request Prepared, describes an analyst or project manager documenting a feasibility study, costs, and benefits, output as a formal change request.\n\nStep 1, Potential Change Identified, is the earlier step of simply recognizing a need, before documentation begins.\n\nStep 4, Analysis & Design, involves investigating the change in detail, a later step than initial preparation.\n\nStep 6, Changed System, involves final deployment, the last step, not initial documentation.",
  },
  {
    id: "csc312_ch5_080",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Six-Step Change Request Lifecycle, which step results in the change going into a development queue based on business impact, resources, and risk?",
    options: [
      "Step 3: Priority Set",
      "Step 2: Change Request Prepared",
      "Step 5: Programming",
      "Step 6: Changed System",
    ],
    correctAnswer: 0,
    explanation:
      "Step 3, Priority Set, describes the change committee or project manager prioritizing changes based on business impact, resource availability, risk, and dependencies, resulting in the change entering a development queue.\n\nStep 2, Change Request Prepared, is the earlier documentation step, before prioritization.\n\nStep 5, Programming, involves implementing the change, occurring after priority is set.\n\nStep 6, Changed System, involves final deployment, the last step.",
  },
  {
    id: "csc312_ch5_081",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Six-Step Change Request Lifecycle, which step involves the analyst and project manager investigating the change and may include interviewing affected users?",
    options: [
      "Step 4: Analysis & Design",
      "Step 1: Potential Change Identified",
      "Step 3: Priority Set",
      "Step 6: Changed System",
    ],
    correctAnswer: 0,
    explanation:
      "Step 4, Analysis & Design, describes the analyst and project manager investigating the change, possibly interviewing affected users, producing a detailed design.\n\nStep 1, Potential Change Identified, is the earlier step of simply recognizing a need.\n\nStep 3, Priority Set, involves prioritizing changes, before detailed analysis and design begins.\n\nStep 6, Changed System, involves final deployment, the last step, after analysis and design.",
  },
  {
    id: "csc312_ch5_082",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Six-Step Change Request Lifecycle, which step involves a developer implementing and unit testing the change?",
    options: [
      "Step 5: Programming",
      "Step 2: Change Request Prepared",
      "Step 4: Analysis & Design",
      "Step 6: Changed System",
    ],
    correctAnswer: 0,
    explanation:
      "Step 5, Programming, describes a developer implementing and testing the change, producing code changes ready for production.\n\nStep 2, Change Request Prepared, involves documenting the feasibility of the change, before programming begins.\n\nStep 4, Analysis & Design, involves designing the implementation approach, before actual programming occurs.\n\nStep 6, Changed System, involves the production team deploying the already-programmed change.",
  },
  {
    id: "csc312_ch5_083",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Six-Step Change Request Lifecycle, which step involves the production team deploying the verified change and monitoring for issues?",
    options: [
      "Step 6: Changed System",
      "Step 1: Potential Change Identified",
      "Step 3: Priority Set",
      "Step 5: Programming",
    ],
    correctAnswer: 0,
    explanation:
      "Step 6, Changed System, describes the production team performing final verification testing and deploying the updated system to users, monitoring for issues afterward.\n\nStep 1, Potential Change Identified, is the earliest step, before any deployment occurs.\n\nStep 3, Priority Set, involves prioritizing changes, long before deployment.\n\nStep 5, Programming, involves writing and unit testing code, before it is deployed in Step 6.",
  },
  {
    id: "csc312_ch5_084",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Every system is described as having an owner who coordinates the change-request flow from request to production. Who is this owner?",
    options: [
      "A project manager",
      "The original system vendor",
      "A random end user",
      "The national government",
    ],
    correctAnswer: 0,
    explanation:
      "The Six-Step Lifecycle Overview states every system has an owner, a project manager who coordinates this flow from request to production.\n\nThe original system vendor is not described as the owner of this flow.\n\nA random end user is not described as the owner of this flow.\n\nThe national government is not described as the owner of this flow.",
  },
  {
    id: "csc312_ch5_085",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which source of change requests is described as the most common, given immediate priority because even minor issues erode user confidence?",
    options: [
      "Problem Reports (Bugs)",
      "User Enhancements",
      "Senior Management",
      "Other Development Projects",
    ],
    correctAnswer: 0,
    explanation:
      "Source 1, Problem Reports (Bugs), is described as the most common source, given immediate priority because even minor bugs erode user confidence.\n\nUser Enhancements is described as the second most common source, not the most common.\n\nSenior Management is described as having strategic, highest priority but is not described as the most common source.\n\nOther Development Projects is described as varying priority, not the most common source.",
  },
  {
    id: "csc312_ch5_086",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which source of change requests is described as the second most common, consisting of minor design changes or new functions?",
    options: [
      "User Enhancements",
      "Problem Reports (Bugs)",
      "Senior Management",
      "Underlying Software/Network Changes",
    ],
    correctAnswer: 0,
    explanation:
      "Source 2, User Enhancements, is described as the second most common source, consisting of minor design changes or new functions that make the system easier to use.\n\nProblem Reports (Bugs) is described as the most common source, ranked above User Enhancements.\n\nSenior Management is described as strategic, not the second most common source.\n\nUnderlying Software/Network Changes is described as often invisible to users, not the second most common source.",
  },
  {
    id: "csc312_ch5_087",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which source of change requests is described as changes needed so two systems can work together, becoming more common with integration?",
    options: [
      "Other Development Projects",
      "Problem Reports (Bugs)",
      "User Enhancements",
      "Senior Management",
    ],
    correctAnswer: 0,
    explanation:
      "Source 3, Other Development Projects, is described as changes needed so two systems can work together, becoming more common with integration, such as an HR system feeding data into payroll.\n\nProblem Reports (Bugs) are about fixing defects, not integration between two systems.\n\nUser Enhancements are about minor design changes, not integration between two systems.\n\nSenior Management changes are described as strategic shifts, not specifically about integration between two systems.",
  },
  {
    id: "csc312_ch5_088",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which source of change requests is described as often invisible to users but hard for developers, such as a new OS version forcing updates?",
    options: [
      "Underlying Software/Network Changes",
      "Problem Reports (Bugs)",
      "User Enhancements",
      "Other Development Projects",
    ],
    correctAnswer: 0,
    explanation:
      "Source 4, Underlying Software/Network Changes, is described as often invisible to users but hard for developers, with a new OS version forcing updates as its example.\n\nProblem Reports (Bugs) are visible to users, who report them, unlike the invisible changes described here.\n\nUser Enhancements are explicitly requested by users, unlike the invisible changes described here.\n\nOther Development Projects involve visible integration work, not the invisible infrastructure changes described here.",
  },
  {
    id: "csc312_ch5_089",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which source of change requests is described as driven by major strategic or operational shifts and usually treated as a separate project?",
    options: [
      "Senior Management",
      "Problem Reports (Bugs)",
      "User Enhancements",
      "Underlying Software/Network Changes",
    ],
    correctAnswer: 0,
    explanation:
      "Source 5, Senior Management, is described as driven by major strategic or operational shifts, such as entering a new market or a merger, usually treated as a separate project.\n\nProblem Reports (Bugs) are driven by defects, not strategic shifts.\n\nUser Enhancements are driven by usability improvements, not strategic shifts.\n\nUnderlying Software/Network Changes are driven by external technical requirements, not strategic business shifts.",
  },
  {
    id: "csc312_ch5_090",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "For the Underlying Software/Network Changes source, what is described as the key challenge?",
    options: [
      "Users don't see the benefit, while developers bear the cost",
      "Users demand these changes constantly",
      "These changes are always free to implement",
      "These changes never require testing",
    ],
    correctAnswer: 0,
    explanation:
      "Source 4's Challenge states users don't see the benefit of underlying software or network changes, while developers bear the cost of implementing them.\n\nUsers are described as not seeing the benefit, contradicting a claim that they constantly demand these changes.\n\nThese changes are not described as free; developers bear a cost implementing them.\n\nThe example of a new OS version forcing application testing contradicts a claim that no testing is required.",
  },
  {
    id: "csc312_ch5_091",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Problem Reports (Bugs), User Enhancements, and Marketing Campaign Requests are all listed as sources of change requests.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Five Sources of Change Requests are Problem Reports, User Enhancements, Other Development Projects, Underlying Software/Network Changes, and Senior Management. Marketing Campaign Requests is not one of the five sources.",
  },
  {
    id: "csc312_ch5_092",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as one of the five sources of change requests?",
    options: ["Other Development Projects", "Weather changes", "All of these", "None of these"],
    correctAnswer: 0,
    explanation:
      "The Five Sources of Change Requests list Problem Reports, User Enhancements, Other Development Projects, Underlying Software/Network Changes, and Senior Management, so Other Development Projects is correct, while Weather changes is not one of the five sources, making the single correct option the right choice rather than All or None.",
  },
  {
    id: "csc312_ch5_093",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Project Assessment is described as an investment in what?",
    options: [
      "Organizational learning",
      "Real estate acquisition",
      "Stock market speculation",
      "Advertising campaigns",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Assessment What It Is section describes it as understanding what worked and what needs improvement, an investment in organizational learning.\n\nReal estate acquisition is not described as what project assessment invests in.\n\nStock market speculation is not described as what project assessment invests in.\n\nAdvertising campaigns are not described as what project assessment invests in.",
  },
  {
    id: "csc312_ch5_094",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which type of project assessment happens right after installation, within one to two weeks, involving everyone who worked on the project?",
    options: [
      "Project Team Review",
      "System Review",
      "Level 1 Review",
      "Vendor Review",
    ],
    correctAnswer: 0,
    explanation:
      "Assessment 1, Project Team Review, happens right after installation, within one to two weeks, involving everyone who worked on the project.\n\nSystem Review happens months after installation, typically 3-6 months, not right after.\n\nLevel 1 Review is not one of the two types of project assessment named.\n\nVendor Review is not one of the two types of project assessment named.",
  },
  {
    id: "csc312_ch5_095",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The Project Team Review's tone is described as focused on which of the following?",
    options: [
      "Improvement, not blame",
      "Assigning blame to individual team members",
      "Firing underperforming staff",
      "Publicly shaming the project manager",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Team Review's Tone section states it is focused on improvement, not blame, asking 'What can we learn to do better next time?' rather than 'Who messed up?'\n\nAssigning blame is explicitly contrasted against the improvement-focused tone described.\n\nFiring staff is not described as part of the Project Team Review's tone or purpose.\n\nPublicly shaming the project manager is not described as part of the Project Team Review's tone or purpose.",
  },
  {
    id: "csc312_ch5_096",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which type of project assessment happens months after installation and compares anticipated versus actual costs and benefits?",
    options: [
      "System Review",
      "Project Team Review",
      "Level 1 Review",
      "Vendor Review",
    ],
    correctAnswer: 0,
    explanation:
      "Assessment 2, System Review, happens months after installation (typically 3-6 months) and compares anticipated versus actual costs and benefits from the original system request and feasibility analysis.\n\nProject Team Review happens within one to two weeks, not months, and does not focus on comparing costs versus benefits.\n\nLevel 1 Review is not one of the two types of project assessment named.\n\nVendor Review is not one of the two types of project assessment named.",
  },
  {
    id: "csc312_ch5_097",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Who is described as participating in a System Review, alongside the project manager and stakeholders?",
    options: ["Finance", "External regulators", "Competitors", "The general public"],
    correctAnswer: 0,
    explanation:
      "Assessment 2's Participants section lists the project manager, stakeholders, and finance as participants in the System Review.\n\nExternal regulators are not listed as participants in the System Review.\n\nCompetitors are not listed as participants in the System Review.\n\nThe general public is not listed as participants in the System Review.",
  },
  {
    id: "csc312_ch5_098",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Project Assessment is described as feeding directly back into what?",
    options: [
      "The next project's user involvement and requirements determination",
      "A permanent shutdown of the current system",
      "The termination of the project manager's contract",
      "A one-time bonus payment with no further use",
    ],
    correctAnswer: 0,
    explanation:
      "The Closing the Loop section states project assessment feeds directly back into the next project's user involvement and requirements determination, since lessons learned become better requirements next time.\n\nShutting down the current system is not described as the result of project assessment.\n\nTerminating the project manager's contract is not described as the result of project assessment.\n\nA one-time bonus with no further use contradicts the described ongoing feedback loop into future projects.",
  },
  {
    id: "csc312_ch5_099",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Tune Source case study, what action did the Operations group take in response to a surge in support needs?",
    options: [
      "Hired 4 additional support staff with networking and Web expertise",
      "Shut down the help desk entirely",
      "Outsourced all support to a foreign call center",
      "Removed online support resources",
    ],
    correctAnswer: 0,
    explanation:
      "The Support section of the Tune Source case study states Operations hired 4 additional support staff with networking and Web expertise to handle the surge in new user questions.\n\nShutting down the help desk contradicts the case study's described action of hiring more staff.\n\nOutsourcing to a foreign call center is not mentioned in this case study.\n\nRemoving online support resources is not mentioned in this case study.",
  },
  {
    id: "csc312_ch5_100",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Tune Source case study's Maintenance section, which of the following is listed as an early change made?",
    options: [
      "Optimized download speeds",
      "Deleted the entire product catalog",
      "Removed all payment options",
      "Disabled the search feature entirely",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance section of the Tune Source case study lists fixing usability issues, optimizing download speeds, adding payment method options, and improving search functionality as early changes.\n\nDeleting the product catalog is not listed as an early change in this case study.\n\nRemoving payment options contradicts the case study, which states payment method options were added, not removed.\n\nDisabling search contradicts the case study, which states search functionality was improved, not disabled.",
  },
  {
    id: "csc312_ch5_101",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Tune Source case study, what lesson is drawn from the Maintenance section?",
    options: [
      "The first version inevitably has issues, which the maintenance team absorbs",
      "Maintenance is never needed for a well-built first version",
      "Only the original developers should ever touch the system",
      "Maintenance should be delayed for at least a year after launch",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance section's Lesson states the first version inevitably has issues, and the maintenance team absorbs them, since maintenance began almost immediately.\n\nMaintenance being unneeded contradicts the lesson that the first version inevitably has issues requiring maintenance.\n\nRestricting work to only the original developers is not the lesson drawn from this case study.\n\nDelaying maintenance for a year contradicts the case study, which states maintenance began almost immediately.",
  },
  {
    id: "csc312_ch5_102",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Tune Source case study's Project Team Review, which of the following is listed as a key learning?",
    options: [
      "Fast, flawless file-transfer protocols are essential for user satisfaction",
      "Web programming skills are unimportant",
      "Team collaboration was consistently weak",
      "Documentation needs no improvement",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Team Review's Key Learnings list fast, flawless file-transfer protocols as essential for user satisfaction, alongside web programming skills being critical and strong team collaboration.\n\nWeb programming skills are explicitly listed as critical, not unimportant.\n\nTeam collaboration is explicitly listed as strong, not consistently weak.\n\nDocumentation is explicitly listed as needing improvement, not needing none.",
  },
  {
    id: "csc312_ch5_103",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Tune Source case study's System Review after 2 months, what were the Month 1 and Month 2 sales figures trending toward?",
    options: [
      "A $2.6M annual goal",
      "A complete company shutdown",
      "A $500K annual goal",
      "No measurable sales at all",
    ],
    correctAnswer: 0,
    explanation:
      "The System Review section states Month 1 had $120K and Month 2 had $162K in sales, trending toward a $2.6M annual goal.\n\nA company shutdown contradicts the positive sales trend described in this section.\n\n$500K is not the annual goal figure stated in this section.\n\nNo measurable sales contradicts the explicit monthly sales figures given.",
  },
  {
    id: "csc312_ch5_104",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Tune Source case study's System Review, how did actual operating costs compare to the original projection?",
    options: [
      "Slightly above projection, due to startup costs",
      "Exactly matching the projection to the dollar",
      "Far below projection, saving significant money",
      "Ten times higher than projected",
    ],
    correctAnswer: 0,
    explanation:
      "The System Review's Cost Analysis states operating costs were $47K/month, slightly above the $44K predicted, with startup costs accounting for the overage.\n\nExactly matching the projection contradicts the stated $47K actual versus $44K predicted figures.\n\nFar below projection contradicts the stated overage, not a savings.\n\nTen times higher grossly overstates the modest overage described ($47K vs $44K).",
  },
  {
    id: "csc312_ch5_105",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Based on the Tune Source case study's System Review, what decision did leadership make?",
    options: [
      "Approved the next version based on strong performance",
      "Cancelled the project entirely",
      "Demanded a full refund from the development team",
      "Sold the platform to a competitor",
    ],
    correctAnswer: 0,
    explanation:
      "The System Review's Decision states leadership approved the next version based on strong performance.\n\nCancelling the project contradicts the described approval based on strong performance.\n\nDemanding a refund is not mentioned in this case study.\n\nSelling the platform to a competitor is not mentioned in this case study.",
  },
  {
    id: "csc312_ch5_106",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Full Lifecycle Loop, which stage comes immediately after 'Involve Users Early'?",
    options: [
      "Build the Right System",
      "Support Smooths Adoption",
      "Maintenance Keeps It Current",
      "Assessment Feeds the Next Project",
    ],
    correctAnswer: 0,
    explanation:
      "The Full Lifecycle Loop lists the order as Involve Users Early, Build the Right System, Support Smooths Adoption, Maintenance Keeps It Current, then Assessment Feeds the Next Project.\n\nSupport Smooths Adoption is the third stage, not immediately after the first.\n\nMaintenance Keeps It Current is the fourth stage, not immediately after the first.\n\nAssessment Feeds the Next Project is the fifth stage, not immediately after the first.",
  },
  {
    id: "csc312_ch5_107",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Full Lifecycle Loop, which stage is described as Level 1 and Level 2 support resolving day-to-day friction so users become comfortable and productive?",
    options: [
      "Support Smooths Adoption",
      "Involve Users Early",
      "Build the Right System",
      "Assessment Feeds the Next Project",
    ],
    correctAnswer: 0,
    explanation:
      "Stage 3, Support Smooths Adoption, describes Level 1 and Level 2 support resolving day-to-day friction so users become comfortable and productive quickly.\n\nInvolve Users Early describes techniques like JAD and interviews surfacing requirements, an earlier stage.\n\nBuild the Right System describes translating requirements into design and implementation, an earlier stage.\n\nAssessment Feeds the Next Project describes lessons learned improving future requirements, a later stage.",
  },
  {
    id: "csc312_ch5_108",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Full Lifecycle Loop, which stage is described as change requests refining the system as needs evolve, keeping it relevant over time?",
    options: [
      "Maintenance Keeps It Current",
      "Involve Users Early",
      "Support Smooths Adoption",
      "Build the Right System",
    ],
    correctAnswer: 0,
    explanation:
      "Stage 4, Maintenance Keeps It Current, describes change requests refining the system as needs evolve, so it stays relevant and useful over time.\n\nInvolve Users Early describes gathering initial requirements, an earlier stage.\n\nSupport Smooths Adoption describes resolving day-to-day friction after launch, a different focus from ongoing refinement.\n\nBuild the Right System describes translating requirements into a working system, an earlier stage than ongoing maintenance.",
  },
  {
    id: "csc312_ch5_109",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the Full Lifecycle Loop, which stage describes lessons learned becoming better requirements for the next project?",
    options: [
      "Assessment Feeds the Next Project",
      "Involve Users Early",
      "Build the Right System",
      "Maintenance Keeps It Current",
    ],
    correctAnswer: 0,
    explanation:
      "Stage 5, Assessment Feeds the Next Project, describes lessons learned becoming better requirements for the next project, asking what design patterns worked and what caused problems.\n\nInvolve Users Early describes the first project's initial requirements gathering, not feeding lessons into a future one.\n\nBuild the Right System describes translating requirements into a system, an earlier stage.\n\nMaintenance Keeps It Current describes ongoing refinement of the current system, a different stage from closing the loop into the next project.",
  },
  {
    id: "csc312_ch5_110",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "In the virtuous cycle described at the end of the lifecycle loop, better requirements are said to lead to which of the following?",
    options: [
      "Better systems",
      "Higher employee turnover",
      "Fewer available resources for future projects",
      "A permanent halt to all new projects",
    ],
    correctAnswer: 0,
    explanation:
      "The virtuous cycle states strong user involvement leads to better requirements, better requirements lead to better systems, and better systems lead to less rework and maintenance.\n\nHigher employee turnover is not part of the described virtuous cycle.\n\nThe cycle states better systems free up resources for new projects, the opposite of fewer available resources.\n\nA permanent halt to new projects contradicts the cycle, which describes resources becoming available for new projects.",
  },
  {
    id: "csc312_ch5_111",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which key vocabulary term is defined as a formal ask to modify a system already in production?",
    options: [
      "Change Request",
      "Problem Report",
      "Postimplementation",
      "Elicitation Technique",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Vocabulary section defines a Change Request as a formal ask to modify a system already in production.\n\nA Problem Report is defined as a documented issue escalated when Level 1 can't resolve it, a step that may lead to a change request but is not itself the formal modification ask.\n\nPostimplementation is defined as the phase after go-live focused on support, maintenance, and assessment, not a specific formal ask.\n\nAn Elicitation Technique is defined as a method for gathering requirements, unrelated to modifying a live system.",
  },
  {
    id: "csc312_ch5_112",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which key vocabulary term is defined as the phase after go-live focused on support, maintenance, and assessment?",
    options: [
      "Postimplementation",
      "Elicitation Technique",
      "Change Request",
      "Root Cause Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Vocabulary section defines Postimplementation as the phase after go-live focused on support, maintenance, and assessment.\n\nAn Elicitation Technique is defined as a method for gathering requirements, a pre-implementation activity, not the post-go-live phase.\n\nA Change Request is defined as a formal ask to modify a live system, one activity within postimplementation, not the phase itself.\n\nRoot Cause Analysis is defined as tracing problems to their true underlying cause, an analysis strategy, not the postimplementation phase.",
  },
  {
    id: "csc312_ch5_113",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which key vocabulary term is defined as tracing problems to their true underlying cause, not just symptoms?",
    options: [
      "Root Cause Analysis",
      "Problem Report",
      "Change Request",
      "Postimplementation",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Vocabulary section defines Root Cause Analysis as tracing problems to their true underlying cause, not just symptoms.\n\nA Problem Report is defined as a documented issue escalated when Level 1 can't resolve it, not an analysis method.\n\nA Change Request is defined as a formal ask to modify a live system, not an analysis method.\n\nPostimplementation is defined as the phase after go-live, not an analysis method.",
  },
  {
    id: "csc312_ch5_114",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which key vocabulary term is defined as first-line support staff who resolve approximately 80% of issues on first contact?",
    options: [
      "Help Desk / Level 1 Support",
      "Level 2 Support",
      "Problem Report",
      "Project Assessment",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Vocabulary section defines Help Desk / Level 1 Support as first-line support staff who resolve approximately 80% of issues on first contact.\n\nLevel 2 Support is defined as expert staff who handle complex issues escalated from Level 1, not the first-line resolvers.\n\nA Problem Report is defined as a documented issue, not the staff who resolve it.\n\nProject Assessment is defined as team review plus system review conducted after implementation, unrelated to first-line support.",
  },
  {
    id: "csc312_ch5_115",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which key vocabulary term is defined as expert support staff who handle complex issues escalated from Level 1?",
    options: [
      "Level 2 Support",
      "Help Desk / Level 1 Support",
      "Problem Report",
      "Change Request",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Vocabulary section defines Level 2 Support as expert support staff who handle complex issues escalated from Level 1.\n\nHelp Desk / Level 1 Support is defined as first-line staff resolving about 80% of issues on first contact, not the escalation-handling experts.\n\nA Problem Report is defined as a documented issue, not the staff who resolve escalated issues.\n\nA Change Request is defined as a formal ask to modify a live system, not the staff who resolve escalated issues.",
  },
  {
    id: "csc312_ch5_116",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which key vocabulary term is defined as team review plus system review conducted after implementation?",
    options: [
      "Project Assessment",
      "System Maintenance",
      "Postimplementation",
      "Elicitation Technique",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Vocabulary section defines Project Assessment as team review plus system review conducted after implementation.\n\nSystem Maintenance is defined as ongoing refinement of a system to meet evolving business needs, a different pillar from assessment.\n\nPostimplementation is defined more broadly as the whole phase after go-live, encompassing support, maintenance, and assessment together, not assessment alone.\n\nAn Elicitation Technique is defined as a method for gathering requirements, unrelated to post-implementation review.",
  },
  {
    id: "csc312_ch5_117",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "System Maintenance is defined in the Key Vocabulary as which of the following?",
    options: [
      "Ongoing refinement of a system to meet evolving business needs",
      "A one-time fix applied only at launch",
      "The initial design phase of a new system",
      "A marketing strategy for retaining customers",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Vocabulary section defines System Maintenance as ongoing refinement of a system to meet evolving business needs.\n\nA one-time fix at launch contradicts the ongoing, continuous nature of the definition given.\n\nThe initial design phase describes an earlier SDLC activity, not maintenance.\n\nA marketing strategy is not the definition given for System Maintenance.",
  },
  {
    id: "csc312_ch5_118",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Involve Users Early, Build the Right System, Support Smooths Adoption, Maintenance Keeps It Current, and Assessment Feeds the Next Project are the five stages of the Full Lifecycle Loop.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The Full Lifecycle Loop lists exactly these five stages in this order, closing back into the next system request.",
  },
  {
    id: "csc312_ch5_119",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as one of the three pillars of postimplementation activities?",
    options: ["Support", "Maintenance", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Three Pillars of postimplementation activities are Support, Maintenance, and Project Assessment, so both Support and Maintenance are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch5_120",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a field in a problem report?",
    options: ["Employee vacation days", "Company logo design", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The Problem Reports table lists eight fields: time and date, support person's info, reporter's info, software/hardware, location, problem description, action taken, and disposition. Neither employee vacation days nor company logo design appears among these eight fields, making None of these the right choice.",
  },
  {
    id: "csc312_ch5_121",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Level 1 Support aims to resolve 80% of requests on the first call.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. Level 1 Support's Goal section states the goal is to resolve 80% of requests on the first call.",
  },
  {
    id: "csc312_ch5_122",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Level 2 Support staff typically have no access to the development team.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Level 2 Support's Role section explicitly lists access to the development team as one of its characteristics, alongside deep application knowledge and the authority to escalate or create bug fixes.",
  },
  {
    id: "csc312_ch5_123",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The Trade-Off Reality finding states that as user involvement increases, both the chance of project success and the time/cost burden on users tend to rise.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. Finding #3, the Trade-Off Reality, states as user involvement increases, the chance of project success rises, but so does the time and cost burden on users.",
  },
  {
    id: "csc312_ch5_124",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Reviewing existing forms and manuals, plus interviews, are described as needing the least analyst training to run well.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Analyst Experience section states reviewing existing forms and manuals, plus observation, need the least training, not interviews. JAD Sessions are described as the most demanding technique to run well.",
  },
  {
    id: "csc312_ch5_125",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "The Six-Step Change Request Lifecycle begins with 'Potential Change Identified' and ends with 'Changed System'.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The six steps in order are: Potential Change Identified, Change Request Prepared, Priority Set, Analysis & Design, Programming, and Changed System.",
  },
  {
    id: "csc312_ch5_126",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Root Cause Analysis fixes the symptom directly without investigating why a problem occurs.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Root Cause Analysis starts from problems, not solutions, and drills down by repeatedly asking 'Why does this happen?' until the true root cause is found, explicitly rejecting fixing symptoms alone.",
  },
  {
    id: "csc312_ch5_127",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as one of the four findings for why user involvement matters?",
    options: ["The Knowledge Gap", "The Assumption Trap", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Why User Involvement Matters section lists four findings: Top Reason for IT Project Failure, The Knowledge Gap, The Trade-Off Reality, and The Assumption Trap, so both named findings are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch5_128",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a source of change requests?",
    options: ["Problem Reports (Bugs)", "Senior Management", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Five Sources of Change Requests list Problem Reports, User Enhancements, Other Development Projects, Underlying Software/Network Changes, and Senior Management, so both named sources are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch5_129",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a type of issue handled by Level 2 Support?",
    options: ["Employee timesheets", "Marketing surveys", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "Level 2 Support's Types of Issues are complex feature interactions, data integrity problems, system performance issues, and confirmed bugs. Neither employee timesheets nor marketing surveys appears among these, making None of these the right choice.",
  },
  {
    id: "csc312_ch5_130",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as one of the six steps in the Change Request Lifecycle?",
    options: ["Weather forecasting", "Employee birthday tracking", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The Six-Step Change Request Lifecycle consists of Potential Change Identified, Change Request Prepared, Priority Set, Analysis & Design, Programming, and Changed System. Neither weather forecasting nor employee birthday tracking appears among these steps, making None of these the right choice.",
  },
  {
    id: "csc312_ch5_131",
    course: "CSC 312",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a benefit of user involvement?",
    options: [
      "Requirements better reflecting true business needs",
      "Complete elimination of testing",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "The Benefits section lists requirements better reflecting true business needs among its benefits, alongside higher chance of success and greater user buy-in. Complete elimination of testing is never listed as a benefit of user involvement, since testing remains a distinct, necessary activity of its own.",
  },
];

export default csc312Lecture6Questions;
