import { QuestionV2 } from "@/lib/quiz-types";

const csc312Lecture5Questions: QuestionV2[] = [
  {
    id: "csc312_ch4_001",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "The word 'system' derives from the Greek word 'systema', which is best defined as which of the following?",
    options: [
      "An orderly grouping of interdependent components linked together according to a plan to achieve a specific goal",
      "A single computer program written to solve one specific problem",
      "A random collection of unrelated hardware devices",
      "A written report summarizing a company's finances",
    ],
    correctAnswer: 0,
    explanation:
      "The System Definition box defines a system as an orderly grouping of interdependent components linked together according to a plan to achieve a specific goal, tracing the word to the Greek 'systema'.\n\nA single computer program is too narrow a definition and is not what this box defines a system as.\n\nA random, unrelated collection is the opposite of 'orderly' and 'according to a plan', which the definition requires.\n\nA financial report is an output some systems might produce, not the definition of a system itself.",
  },
  {
    id: "csc312_ch4_002",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which system property is described as the structure and order in the arrangement of parts toward a goal?",
    options: ["Organization", "Interaction", "Interdependence", "Integration"],
    correctAnswer: 0,
    explanation:
      "The System Properties table describes Organization as structure and order, the arrangement of parts toward a goal.\n\nInteraction is described as how components operate with and depend on each other, not the structural arrangement itself.\n\nInterdependence is described as one subsystem's output being another's required input, a relationship rather than the overall structure.\n\nIntegration is described as parts working together as a whole, not the arrangement of parts.",
  },
  {
    id: "csc312_ch4_003",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which system property is described as how components operate with, and depend on, each other?",
    options: ["Interaction", "Organization", "Central Objective", "Integration"],
    correctAnswer: 0,
    explanation:
      "The System Properties table describes Interaction as how components operate with, and depend on, each other.\n\nOrganization is described as the structure and arrangement of parts, not the operational relationship between them.\n\nCentral Objective is described as the need for one clear, well-known goal, not the interplay between components.\n\nIntegration is described as parts working together as a whole despite distinct functions, a broader concept than direct interaction.",
  },
  {
    id: "csc312_ch4_004",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which system property is described as one subsystem's output being another's required input?",
    options: ["Interdependence", "Organization", "Interaction", "Central Objective"],
    correctAnswer: 0,
    explanation:
      "The System Properties table describes Interdependence as one subsystem's output being another's required input.\n\nOrganization is described as the structure and arrangement of parts, not the input-output relationship between subsystems.\n\nInteraction is described more generally as how components operate with and depend on each other, while Interdependence specifically names the output-to-input chain.\n\nCentral Objective is described as the need for one clear, well-known goal, not a subsystem input-output relationship.",
  },
  {
    id: "csc312_ch4_005",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which system property is described as parts working together as a whole despite having distinct functions?",
    options: ["Integration", "Organization", "Interaction", "Interdependence"],
    correctAnswer: 0,
    explanation:
      "The System Properties table describes Integration as parts working together as a whole despite distinct functions.\n\nOrganization is described as the structure and arrangement of parts, not their combined functioning as a whole.\n\nInteraction is described as how components operate with and depend on each other, a narrower relationship than overall integration.\n\nInterdependence is described as one subsystem's output being another's input, a specific relationship rather than whole-system unity.",
  },
  {
    id: "csc312_ch4_006",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which system property states that every system needs one clear, well-known objective?",
    options: [
      "Central Objective",
      "Organization",
      "Interaction",
      "Integration",
    ],
    correctAnswer: 0,
    explanation:
      "The System Properties table describes Central Objective as every system needing one clear, well-known objective.\n\nOrganization is described as the structure and arrangement of parts, not the need for a single shared goal.\n\nInteraction is described as how components operate with and depend on each other, not the objective itself.\n\nIntegration is described as parts working together as a whole, which supports but is distinct from having one central objective.",
  },
  {
    id: "csc312_ch4_007",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as one of the five system properties?",
    options: ["Organization", "Interdependence", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The System Properties table lists five properties: Organization, Interaction, Interdependence, Integration, and Central Objective, so both Organization and Interdependence are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch4_008",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Among the three core components that run through every system, which one is described as the transformation of input into output?",
    options: ["Processing", "Input", "Output", "Feedback"],
    correctAnswer: 0,
    explanation:
      "The Three Core Components box describes Processing as the transformation of input into output.\n\nInput is described as data or resources entering the system, not the transformation step.\n\nOutput is described as the result delivered to users, the product of processing rather than the transformation itself.\n\nFeedback is not one of the three core components listed here; only Input, Processing, and Output are named.",
  },
  {
    id: "csc312_ch4_009",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In a JAD session, which role is described as keeping the group to the agenda and clarifying technical jargon?",
    options: ["Facilitator", "Scribe", "Project Manager", "Business Analyst"],
    correctAnswer: 0,
    explanation:
      "The Key Roles in the Room table describes the Facilitator as keeping to the agenda and clarifying technical jargon for the group.\n\nThe Scribe is described as taking minutes and notes, not managing the agenda or explaining jargon.\n\nProject Manager is not one of the two JAD roles listed in this table.\n\nBusiness Analyst is not one of the two JAD roles listed in this table.",
  },
  {
    id: "csc312_ch4_010",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Information is described as an organizational resource that must be managed carefully because of which development?",
    options: [
      "Cheaper computing power producing an explosion of information",
      "A worldwide shortage of information",
      "The complete elimination of paper records",
      "A decline in the amount of data organizations generate",
    ],
    correctAnswer: 0,
    explanation:
      "The Information as an Organisational Resource box states that cheaper computing power has produced an explosion of information that organisations must cope with.\n\nA worldwide shortage of information contradicts the described explosion of information.\n\nThe elimination of paper records is not mentioned as the cause of this need for careful management.\n\nA decline in data generated is the opposite of the described explosion of information.",
  },
  {
    id: "csc312_ch4_011",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as one of the ways organizations use information as a resource?",
    options: [
      "Maintain customer loyalty",
      "Reduce the number of employees to zero",
      "Eliminate all forms of decision-making",
      "Avoid the use of computing power entirely",
    ],
    correctAnswer: 0,
    explanation:
      "The Information as an Organisational Resource box lists maintaining customer loyalty among the four uses of information, alongside increasing productivity, delivering quality products and services, and making sound decisions.\n\nReducing employees to zero is not listed as a use of information.\n\nEliminating decision-making contradicts the listed use of making sound decisions.\n\nAvoiding computing power contradicts the described reliance on computing power to manage information.",
  },
  {
    id: "csc312_ch4_012",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Information Technology (IT) is defined as which of the following?",
    options: [
      "The combination of hardware and software products and services used to manage, access, communicate, and share information",
      "A single database used only for storing employee records",
      "A methodology for testing software before release",
      "A type of network cable used to connect two computers",
    ],
    correctAnswer: 0,
    explanation:
      "The Information Technology (IT) box defines it as the combination of hardware and software products and services organisations use to manage, access, communicate, and share information.\n\nA single employee database is too narrow to match the broad hardware-and-software definition given.\n\nA testing methodology belongs to the SDLC's Testing phase, not the definition of IT.\n\nA network cable is a single piece of hardware, not the broad combination the definition describes.",
  },
  {
    id: "csc312_ch4_013",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the comparison of Systems Analysis and Systems Design, Analysis is described as specifying which of the following?",
    options: ["WHAT the system should do", "HOW the system will work", "WHEN the system will launch", "WHO will use the system"],
    correctAnswer: 0,
    explanation:
      "The Analysis vs. Design table states Analysis specifies WHAT the system should do, by collecting and interpreting facts and finding problems.\n\nHOW the system will work is assigned to Design in this table, not Analysis.\n\nWHEN the system will launch is not the focus assigned to either Analysis or Design in this table.\n\nWHO will use the system is not the focus assigned to either Analysis or Design in this table.",
  },
  {
    id: "csc312_ch4_014",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "The SDLC has seven phases, from Planning through Maintenance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The Seven Phases of the SDLC table lists exactly seven phases in order: Planning, Analysis, Design, Implementation, Testing, Deployment, and Maintenance.",
  },
  {
    id: "csc312_ch4_015",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the comparison of Systems Analysis and Systems Design, Design is described as focusing on which of the following?",
    options: [
      "HOW to achieve the system's objective",
      "WHAT the system should do",
      "Finding problems in the current system",
      "Breaking the system into components",
    ],
    correctAnswer: 0,
    explanation:
      "The Analysis vs. Design table states Design focuses on HOW to achieve that objective, planning the new system's components to satisfy requirements.\n\nWHAT the system should do is assigned to Analysis in this table, not Design.\n\nFinding problems in the current system is part of Analysis's fact-finding role, not Design.\n\nBreaking the system into components is part of Analysis's decomposition role, not Design's focus on HOW.",
  },
  {
    id: "csc312_ch4_016",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "SAD Focus Areas states that Systems Analysis and Design focuses on which three areas?",
    options: [
      "Systems, Processes, Technology",
      "Systems, Budgets, Marketing",
      "Processes, Sales, Hardware",
      "Technology, Legal, Finance",
    ],
    correctAnswer: 0,
    explanation:
      "The SAD Focus Areas box states SAD focuses on Systems, Processes, and Technology.\n\nBudgets and Marketing are not among the three focus areas named.\n\nSales and Hardware are not among the three focus areas named; only Processes appears in both.\n\nLegal and Finance are not among the three focus areas named.",
  },
  {
    id: "csc312_ch4_017",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "The systems analyst is described as which of the following?",
    options: [
      "The person thoroughly aware of the system who plans, designs, and guides it from problem to solution",
      "The person solely responsible for writing all production code",
      "The person who approves a company's annual budget",
      "The person who manufactures computer hardware",
    ],
    correctAnswer: 0,
    explanation:
      "The Who is the Systems Analyst box describes the analyst as the person thoroughly aware of the system, who plans, designs, and guides it from problem to solution.\n\nWriting all production code is a developer's task, not the analyst's defining role here.\n\nApproving a company's annual budget is a financial management task, not the analyst's role.\n\nManufacturing hardware is unrelated to the analyst's role of translating business needs into specifications.",
  },
  {
    id: "csc312_ch4_018",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which quality of a good analyst is described as listening, interviewing, and explaining technical ideas to non-technical stakeholders?",
    options: ["Communication", "Problem-Solving", "Analytical Thinking", "Interpersonal Skill"],
    correctAnswer: 0,
    explanation:
      "The Analyst Qualities table describes Communication as listening, interviewing, and explaining technical ideas to non-technical stakeholders.\n\nProblem-Solving is described as decomposing complex problems and evaluating feasible solutions, not explaining ideas to stakeholders.\n\nAnalytical Thinking is described as interpreting facts and data to find root causes, not communicating with stakeholders.\n\nInterpersonal Skill is described as managing stakeholders and building trust, a related but distinct quality from explaining technical ideas.",
  },
  {
    id: "csc312_ch4_019",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which quality of a good analyst is described as decomposing complex problems and evaluating feasible solutions?",
    options: ["Problem-Solving", "Communication", "Interpersonal Skill", "Analytical Thinking"],
    correctAnswer: 0,
    explanation:
      "The Analyst Qualities table describes Problem-Solving as decomposing complex problems and evaluating feasible solutions.\n\nCommunication is described as listening, interviewing, and explaining ideas, not decomposing problems.\n\nInterpersonal Skill is described as managing stakeholders and building trust, not decomposing problems.\n\nAnalytical Thinking is described as interpreting facts to find root causes, a related but distinct quality from evaluating solutions.",
  },
  {
    id: "csc312_ch4_020",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which quality of a good analyst is described as interpreting facts and data to find root causes, not symptoms?",
    options: ["Analytical Thinking", "Communication", "Problem-Solving", "Interpersonal Skill"],
    correctAnswer: 0,
    explanation:
      "The Analyst Qualities table describes Analytical Thinking as interpreting facts and data to find root causes, not symptoms.\n\nCommunication is described as listening, interviewing, and explaining ideas, not interpreting data for root causes.\n\nProblem-Solving is described as decomposing problems and evaluating solutions, a related but distinct quality from interpreting data.\n\nInterpersonal Skill is described as managing stakeholders and building trust, not interpreting data.",
  },
  {
    id: "csc312_ch4_021",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a quality of a good analyst?",
    options: ["Communication", "Analytical Thinking", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Analyst Qualities table lists four qualities: Communication, Problem-Solving, Analytical Thinking, and Interpersonal Skill, so both Communication and Analytical Thinking are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch4_022",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which quality of a good analyst is described as managing stakeholders and building trust for accurate requirements?",
    options: ["Interpersonal Skill", "Communication", "Problem-Solving", "Analytical Thinking"],
    correctAnswer: 0,
    explanation:
      "The Analyst Qualities table describes Interpersonal Skill as managing stakeholders and building trust for accurate requirements.\n\nCommunication is described as listening, interviewing, and explaining ideas, not specifically managing stakeholder trust.\n\nProblem-Solving is described as decomposing problems and evaluating solutions, not managing stakeholder relationships.\n\nAnalytical Thinking is described as interpreting facts to find root causes, not managing stakeholder trust.",
  },
  {
    id: "csc312_ch4_023",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "The SDLC is best described as which of the following?",
    options: [
      "A structured, sequential framework analysts use to plan and manage the development of a system",
      "A single tool used only for drawing network diagrams",
      "A legal contract signed between a company and its clients",
      "A marketing campaign for a newly released product",
    ],
    correctAnswer: 0,
    explanation:
      "The SDLC Definition box describes it as a structured, sequential framework analysts use to plan and manage the development of a new or modified information system.\n\nA network-diagramming tool is far narrower than the described planning framework.\n\nA legal contract is unrelated to the described development framework.\n\nA marketing campaign is unrelated to the described development framework.",
  },
  {
    id: "csc312_ch4_024",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which key question is described as driving the whole SDLC cycle?",
    options: [
      "What problem are we solving, and is it worth solving?",
      "Who will pay for the project?",
      "What color scheme should the interface use?",
      "How many employees work at the company?",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Question Driving the Whole Cycle box states the question is 'What problem are we solving, and is it worth solving?'\n\nWho will pay for the project is a budgeting concern, not the key question named here.\n\nInterface color scheme is a UI/UX design detail, not the key question named here.\n\nEmployee headcount is not the key question named here.",
  },
  {
    id: "csc312_ch4_025",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which deliverables are listed for the Planning phase of the SDLC?",
    options: [
      "Project Plan and Feasibility Study Report",
      "Software Requirements Specification and Use Cases",
      "Design Document and Prototypes",
      "Test reports and bug logs",
    ],
    correctAnswer: 0,
    explanation:
      "The Phase 1 (Planning) deliverables box lists Project Plan and Feasibility Study Report.\n\nSRS and Use Cases are listed as Analysis phase deliverables, not Planning.\n\nDesign Document and Prototypes are listed as Design phase deliverables, not Planning.\n\nTest reports and bug logs belong to the Testing phase, not Planning.",
  },
  {
    id: "csc312_ch4_026",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed among the key activities of the Analysis phase?",
    options: [
      "Preparing a Software Requirements Specification (SRS)",
      "Releasing the system into production",
      "Fixing bugs discovered by users",
      "Installing servers in a data center",
    ],
    correctAnswer: 0,
    explanation:
      "The Phase 2 (Analysis) key activities list stakeholder interviews, use-case modelling, DFDs, and preparing a Software Requirements Specification (SRS).\n\nReleasing into production is a Deployment phase activity, not Analysis.\n\nFixing bugs found by users is a Maintenance phase activity, not Analysis.\n\nInstalling servers in a data center is a Deployment activity, not Analysis.",
  },
  {
    id: "csc312_ch4_027",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the Design phase, which design stage comes first, before the system is converted into a Structured (Detailed) Design?",
    options: [
      "Preliminary (General) Design",
      "Physical Deployment Design",
      "Final Maintenance Design",
      "Post-Release Design",
    ],
    correctAnswer: 0,
    explanation:
      "The Design Process box states logical analysis is converted first into a Preliminary (General) Design, then a Structured (Detailed) Design.\n\nPhysical Deployment Design is not one of the two named design stages.\n\nFinal Maintenance Design is not one of the two named design stages; Maintenance is a separate SDLC phase entirely.\n\nPost-Release Design is not one of the two named design stages.",
  },
  {
    id: "csc312_ch4_028",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Corrective, Adaptive, and Preventive are the three main types of maintenance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Maintenance Types table lists Corrective, Adaptive, and Perfective as the three maintenance types, not Preventive.",
  },
  {
    id: "csc312_ch4_029",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which design area is described as covering conceptual design and Entity-Relationship (ER) modelling of stored data?",
    options: ["Database Design", "UI/UX Design", "System Architecture", "Design Quality"],
    correctAnswer: 0,
    explanation:
      "The Design Components table describes Database Design as conceptual design and Entity-Relationship (ER) modelling of stored data.\n\nUI/UX Design is described as designing how users interact with and experience the system, not data modelling.\n\nSystem Architecture is described as modules, components, DFDs, and ER diagrams as the technical blueprint, a broader scope than data modelling alone.\n\nDesign Quality is described as metrics for maintainability, performance, and reliability, not data modelling itself.",
  },
  {
    id: "csc312_ch4_030",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a popular architectural style for system design?",
    options: ["Layered", "Handwritten", "Improvised", "Unstructured"],
    correctAnswer: 0,
    explanation:
      "The Popular Architectural Styles box lists Layered, Client-Server, Microservices, Event-Driven, and MVC.\n\nHandwritten is not a software architectural style listed here.\n\nImprovised is not a software architectural style listed here.\n\nUnstructured is not a software architectural style listed here; it in fact contradicts the deliberate structure architectural styles provide.",
  },
  {
    id: "csc312_ch4_031",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a popular architectural style for system design, alongside Layered and Client-Server?",
    options: ["MVC", "Waterfall", "Scrum", "Kanban"],
    correctAnswer: 0,
    explanation:
      "The Popular Architectural Styles box lists Layered, Client-Server, Microservices, Event-Driven, and MVC as the five architectural styles.\n\nWaterfall is a development methodology, not an architectural style listed here.\n\nScrum is an Agile framework, not an architectural style listed here.\n\nKanban is an Agile framework, not an architectural style listed here.",
  },
  {
    id: "csc312_ch4_032",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the Implementation phase, PEP 8 is given as an example of which of the following?",
    options: ["A coding standard", "A deployment strategy", "A testing tool", "A database model"],
    correctAnswer: 0,
    explanation:
      "The Phase 4 (Implementation) key activities list following coding standards, giving PEP 8 as an example.\n\nA deployment strategy belongs to the Deployment phase, not the coding-standards example given here.\n\nA testing tool belongs to the Testing phase, not the coding-standards example given here.\n\nA database model belongs to the Design phase, not the coding-standards example given here.",
  },
  {
    id: "csc312_ch4_033",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the Testing phase, what does UAT stand for?",
    options: [
      "User Acceptance Testing",
      "Universal Application Transfer",
      "Unit Analysis Technique",
      "Unified Access Terminal",
    ],
    correctAnswer: 0,
    explanation:
      "The Phase 5 (Testing) testing types list Integration testing, System testing, and User Acceptance Testing (UAT).\n\nUniversal Application Transfer is not a defined term in this section.\n\nUnit Analysis Technique is not a defined term in this section.\n\nUnified Access Terminal is not a defined term in this section.",
  },
  {
    id: "csc312_ch4_034",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a testing tool for the Testing phase?",
    options: ["Selenium", "Docker", "Git", "Figma"],
    correctAnswer: 0,
    explanation:
      "The Phase 5 (Testing) tools list Selenium, JMeter, OWASP ZAP, pytest, and Postman.\n\nDocker is a containerization tool used in Deployment, not listed as a Testing tool here.\n\nGit is a version control tool, not listed as a Testing tool here.\n\nFigma is a UI/UX design tool, not listed as a Testing tool here.",
  },
  {
    id: "csc312_ch4_035",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as one of the three maintenance types?",
    options: ["Preventive", "Predictive", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The Maintenance Types table lists exactly three types: Corrective, Adaptive, and Perfective. Neither Preventive nor Predictive appears in this table, making None of these the right choice.",
  },
  {
    id: "csc312_ch4_036",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a Deployment approach?",
    options: ["Pilot", "Regression", "Unit", "Smoke"],
    correctAnswer: 0,
    explanation:
      "The Phase 6 (Deployment) approaches list Big Bang, Phased, and Pilot.\n\nRegression is a testing type from the Testing phase, not a Deployment approach listed here.\n\nUnit is a testing type from the Testing phase, not a Deployment approach listed here.\n\nSmoke is a testing type, not a Deployment approach listed here.",
  },
  {
    id: "csc312_ch4_037",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a Deployment success metric?",
    options: ["Zero downtime", "Maximum code complexity", "Highest possible cost", "Longest possible timeline"],
    correctAnswer: 0,
    explanation:
      "The Phase 6 (Deployment) success metrics list zero downtime, no data loss, and positive user feedback.\n\nMaximum code complexity is not listed as a success metric, and would generally be undesirable.\n\nHighest possible cost is not listed as a success metric, and would generally be undesirable.\n\nLongest possible timeline is not listed as a success metric, and would generally be undesirable.",
  },
  {
    id: "csc312_ch4_038",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which maintenance type is described as fixing bugs found after release?",
    options: ["Corrective", "Adaptive", "Perfective", "Preliminary"],
    correctAnswer: 0,
    explanation:
      "The Maintenance Types table describes Corrective maintenance as fixing bugs found after release.\n\nAdaptive is described as adjusting for new OS or hardware, not fixing bugs.\n\nPerfective is described as adding new features or enhancements, not fixing bugs.\n\nPreliminary is not one of the three maintenance types listed in this table.",
  },
  {
    id: "csc312_ch4_039",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which maintenance type is described as adjusting a system for new OS or hardware?",
    options: ["Adaptive", "Corrective", "Perfective", "Structured"],
    correctAnswer: 0,
    explanation:
      "The Maintenance Types table describes Adaptive maintenance as adjusting for new OS or hardware.\n\nCorrective is described as fixing bugs found after release, not adjusting to new environments.\n\nPerfective is described as adding new features or enhancements, not adjusting to new environments.\n\nStructured is not one of the three maintenance types listed in this table.",
  },
  {
    id: "csc312_ch4_040",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which maintenance type is described as adding new features or enhancements?",
    options: ["Perfective", "Corrective", "Adaptive", "Preliminary"],
    correctAnswer: 0,
    explanation:
      "The Maintenance Types table describes Perfective maintenance as adding new features or enhancements.\n\nCorrective is described as fixing bugs found after release, not adding new features.\n\nAdaptive is described as adjusting for new OS or hardware, not adding new features.\n\nPreliminary is not one of the three maintenance types listed in this table.",
  },
  {
    id: "csc312_ch4_041",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "The Maintenance phase is described as which of the following?",
    options: [
      "The longest phase of a system's life",
      "The shortest phase of a system's life",
      "A phase that only lasts one day",
      "A phase that occurs before Planning",
    ],
    correctAnswer: 0,
    explanation:
      "The Phase 7 (Maintenance) objective describes it as ensuring smooth, ongoing operation after release, calling it the longest phase of a system's life.\n\nThe shortest phase contradicts the explicit description of Maintenance as the longest phase.\n\nA one-day phase contradicts the description of Maintenance as an ongoing, long-running phase.\n\nMaintenance is explicitly the seventh and final phase, not one occurring before Planning.",
  },
  {
    id: "csc312_ch4_042",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "JAD sessions are one-on-one conversations used to elicit detailed individual requirements.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Interviews are the one-on-one conversations that elicit detailed, individual requirements. JAD (Joint Application Design) Sessions are structured group workshops with a facilitator and scribe, not one-on-one conversations.",
  },
  {
    id: "csc312_ch4_043",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "A methodology is best defined as which of the following?",
    options: [
      "A formalised approach for building a system",
      "A single line of code used to fix a bug",
      "A physical server room where hardware is stored",
      "A legal document outlining employee salaries",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodology Definition box defines a methodology as a formalised approach for building a system.\n\nA single line of code is far narrower than the broad approach a methodology describes.\n\nA physical server room is unrelated to the definition of a methodology.\n\nA salary document is unrelated to the definition of a methodology.",
  },
  {
    id: "csc312_ch4_044",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the SDLC Models comparison table, which methodology is described as a linear model with sequential phases from Requirements through Maintenance?",
    options: ["Waterfall", "RAD", "Agile", "DevOps"],
    correctAnswer: 0,
    explanation:
      "The SDLC Models table describes Waterfall as a Linear model with sequential phases: Requirements, Design, Implementation, Testing, Maintenance.\n\nRAD is described as Rapid Application Development, not a linear sequential model.\n\nAgile is described as Iterative, with short cycles, not a linear sequential model.\n\nDevOps is described as Continuous deployment, not a linear sequential model.",
  },
  {
    id: "csc312_ch4_045",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the SDLC Models comparison table, which methodology is described as using CASE tools, JAD sessions, 4GLs, and code generators to build fast?",
    options: ["RAD", "Waterfall", "Agile", "DevOps"],
    correctAnswer: 0,
    explanation:
      "The SDLC Models table describes RAD (Rapid Application Development) as using CASE tools, JAD sessions, 4GLs, and code generators to build fast.\n\nWaterfall is described as a linear, sequential model, not one built around rapid tooling.\n\nAgile is described as short iterative cycles with continuous feedback, a different mechanism from RAD's tooling focus.\n\nDevOps is described as bridging development and operations with CI/CD, a different mechanism from RAD's tooling focus.",
  },
  {
    id: "csc312_ch4_046",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the SDLC Models comparison table, which frameworks are named under the Agile methodology?",
    options: [
      "Scrum, Kanban, XP",
      "Docker, Kubernetes, Jenkins",
      "SQL, DDL, DML",
      "LAN, MAN, WAN",
    ],
    correctAnswer: 0,
    explanation:
      "The SDLC Models table describes Agile as iterative with continuous feedback, naming Scrum, Kanban, and XP as its frameworks.\n\nDocker, Kubernetes, and Jenkins are deployment and CI/CD tools, not Agile frameworks named here.\n\nSQL, DDL, and DML are database concepts, not Agile frameworks.\n\nLAN, MAN, and WAN are network types, not Agile frameworks.",
  },
  {
    id: "csc312_ch4_047",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the SDLC Models comparison table, which methodology is described as bridging development and operations with CI/CD and infrastructure as code?",
    options: ["DevOps", "Waterfall", "RAD", "Agile"],
    correctAnswer: 0,
    explanation:
      "The SDLC Models table describes DevOps as continuous deployment that bridges development and operations with CI/CD and infrastructure as code.\n\nWaterfall is described as a linear, sequential model, not one bridging development and operations.\n\nRAD is described as focused on rapid tooling, not on bridging development and operations.\n\nAgile is described as iterative with continuous feedback, a related but distinct focus from bridging development and operations.",
  },
  {
    id: "csc312_ch4_048",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "In the SDLC Models comparison table, which of the following is listed as a con of the Waterfall model?",
    options: [
      "Inflexible, testing comes late",
      "Requires disciplined teams",
      "Needs high collaboration",
      "Requires a cultural and tooling shift",
    ],
    correctAnswer: 0,
    explanation:
      "The SDLC Models table lists Waterfall's cons as inflexible, with testing coming late.\n\nRequiring disciplined teams is listed as RAD's con, not Waterfall's.\n\nNeeding high collaboration is listed as Agile's con, not Waterfall's.\n\nRequiring a cultural and tooling shift is listed as DevOps's con, not Waterfall's.",
  },
  {
    id: "csc312_ch4_049",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as one of the five requirements-gathering methods?",
    options: ["Interviews", "Observation", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Five Ways to Gather Requirements table lists Interviews, JAD Sessions, Questionnaires, Document Analysis, and Observation, so both Interviews and Observation are correct, making All of these the right choice.",
  },
  {
    id: "csc312_ch4_050",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a criterion for selecting a development methodology?",
    options: [
      "Clarity of user requirements",
      "The analyst's favorite color",
      "The number of chairs in the office",
      "The company's founding year",
    ],
    correctAnswer: 0,
    explanation:
      "The Selection Criteria box lists clarity of user requirements, familiarity with the technology, system complexity, required system reliability, and length and visibility of time schedules.\n\nAn analyst's favorite color is not listed as a selection criterion.\n\nThe number of chairs in an office is not listed as a selection criterion.\n\nA company's founding year is not listed as a selection criterion.",
  },
  {
    id: "csc312_ch4_051",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which combination of factors tends to favor a traditional model like Waterfall?",
    options: [
      "Clear, stable requirements and low complexity",
      "Evolving requirements and a need for speed",
      "Unclear requirements and high complexity",
      "Constantly changing project scope",
    ],
    correctAnswer: 0,
    explanation:
      "The Selection Guidelines box states clear, stable requirements plus low complexity tend to fit traditional models like Waterfall well.\n\nEvolving requirements and a need for speed are described as favoring adaptive models like Agile or DevOps, not Waterfall.\n\nUnclear requirements and high complexity are not the combination described as favoring traditional models.\n\nConstantly changing scope is characteristic of the evolving-requirements case favoring adaptive models, not Waterfall.",
  },
  {
    id: "csc312_ch4_052",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which combination of factors tends to favor an adaptive model like Agile or DevOps?",
    options: [
      "Evolving requirements and a need for speed",
      "Clear, stable requirements and low complexity",
      "A fixed, unchanging project scope",
      "A single developer working alone",
    ],
    correctAnswer: 0,
    explanation:
      "The Selection Guidelines box states evolving requirements plus a need for speed tend to fit adaptive models like Agile or DevOps well.\n\nClear, stable requirements and low complexity are described as favoring traditional models like Waterfall, not adaptive ones.\n\nA fixed, unchanging scope is characteristic of the stable-requirements case favoring traditional models, not adaptive ones.\n\nTeam size alone is not the factor described in these guidelines.",
  },
  {
    id: "csc312_ch4_053",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which requirements-gathering method is described as one-on-one conversations to elicit detailed, individual requirements?",
    options: ["Interviews", "JAD Sessions", "Questionnaires", "Observation"],
    correctAnswer: 0,
    explanation:
      "The Five Ways to Gather Requirements table describes Interviews as one-on-one conversations to elicit detailed, individual requirements.\n\nJAD Sessions are described as structured group workshops, not one-on-one conversations.\n\nQuestionnaires are described as a scalable alternative to interviews for reaching many stakeholders, not one-on-one conversations.\n\nObservation is described as watching users work, not conducting conversations.",
  },
  {
    id: "csc312_ch4_054",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which requirements-gathering method is described as structured group workshops with a facilitator and scribe?",
    options: ["JAD Sessions", "Interviews", "Document Analysis", "Observation"],
    correctAnswer: 0,
    explanation:
      "The Five Ways to Gather Requirements table describes JAD Sessions (Joint Application Design) as structured group workshops with a facilitator and scribe.\n\nInterviews are described as one-on-one conversations, not group workshops.\n\nDocument Analysis is described as reviewing existing forms, reports, and procedures, not running workshops.\n\nObservation is described as watching users work, not running workshops.",
  },
  {
    id: "csc312_ch4_055",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a key role in a JAD session?",
    options: ["Product Owner", "Scrum Master", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The Key Roles in the Room table lists exactly two JAD roles: Facilitator and Scribe. Product Owner and Scrum Master are Agile/Scrum roles, not JAD roles, making None of these the right choice.",
  },
  {
    id: "csc312_ch4_056",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which requirements-gathering method is described as a scalable alternative to interviews for reaching many stakeholders at once?",
    options: ["Questionnaires", "Interviews", "Observation", "JAD Sessions"],
    correctAnswer: 0,
    explanation:
      "The Five Ways to Gather Requirements table describes Questionnaires as a scalable alternative to interviews for reaching many stakeholders at once.\n\nInterviews are described as one-on-one conversations, the less scalable method being contrasted here.\n\nObservation is described as watching users work, not a scalable written method.\n\nJAD Sessions are described as group workshops, a different mechanism from a scalable written questionnaire.",
  },
  {
    id: "csc312_ch4_057",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which requirements-gathering method is described as reviewing existing forms, reports, and procedures for hidden requirements?",
    options: ["Document Analysis", "Interviews", "Observation", "JAD Sessions"],
    correctAnswer: 0,
    explanation:
      "The Five Ways to Gather Requirements table describes Document Analysis as reviewing existing forms, reports, and procedures for hidden requirements.\n\nInterviews are described as one-on-one conversations, not reviewing existing documents.\n\nObservation is described as watching users work, not reviewing documents.\n\nJAD Sessions are described as group workshops, not reviewing documents.",
  },
  {
    id: "csc312_ch4_058",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which requirements-gathering method is described as watching users work to confirm, negate, or reverse what they reported?",
    options: ["Observation", "Interviews", "Questionnaires", "Document Analysis"],
    correctAnswer: 0,
    explanation:
      "The Five Ways to Gather Requirements table describes Observation as watching users work to confirm, negate, or reverse what they reported.\n\nInterviews are described as one-on-one conversations, a different mechanism from watching users work.\n\nQuestionnaires are described as a scalable written alternative, not watching users work.\n\nDocument Analysis is described as reviewing existing records, not watching users work.",
  },
  {
    id: "csc312_ch4_059",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "The five requirements-gathering methods include Interviews, JAD Sessions, Questionnaires, Observation, and a fifth technique that involves reviewing existing forms and reports.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. The Five Ways to Gather Requirements table lists exactly five methods: Interviews, JAD Sessions, Questionnaires, Document Analysis, and Observation, where Document Analysis is described as reviewing existing forms, reports, and procedures.",
  },
  {
    id: "csc312_ch4_060",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "What is described as a key consideration when using Observation as a requirements-gathering method?",
    options: [
      "A person's behaviour can change when they know they're being observed",
      "It always produces false information",
      "It cannot be combined with any other method",
      "It requires no interaction with users at all",
    ],
    correctAnswer: 0,
    explanation:
      "The Also Part of the Toolkit box notes that Observation lets analysts watch real work, but behaviour can change when people know they're being observed.\n\nObservation is not described as always producing false information, only as being susceptible to behavioural change.\n\nObservation is explicitly listed as one of several methods meant to be combined with others like interviews and JAD.\n\nObservation inherently requires watching users at work, which is a form of interaction, not the absence of it.",
  },
  {
    id: "csc312_ch4_061",
    course: "CSC 312",
    chapter: "Chapter 4",
    text: "Which of the Five Basic Steps of an interview comes immediately after 'Designing interview questions'?",
    options: [
      "Preparing for the interview",
      "Selecting interviewees",
      "Conducting the interview",
      "Post-interview follow-up",
    ],
    correctAnswer: 0,
    explanation:
      "The Interview Process box lists the five steps in order: Selecting interviewees, Designing interview questions, Preparing for the interview, Conducting the interview, Post-interview follow-up. Preparing for the interview comes immediately after designing questions.\n\nSelecting interviewees is the first step, occurring before designing questions, not after.\n\nConducting the interview is the fourth step, two steps after designing questions, not immediately after.\n\nPost-interview follow-up is the final, fifth step, well after designing questions.",
  },
];

export default csc312Lecture5Questions;
