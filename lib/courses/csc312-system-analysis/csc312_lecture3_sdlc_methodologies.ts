import { QuestionV2 } from "@/lib/quiz-types";

const csc312Lecture3Questions: QuestionV2[] = [
  {
    id: "csc312_ch2_001",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed among the skills and abilities emphasized for this course?",
    options: [
      "Creating a UML model that is an abstract representation of the source code",
      "Manually drawing circuit diagrams for hardware",
      "Filing corporate tax returns",
      "Negotiating vendor contracts"
    ],
    correctAnswer: 0,
    explanation: "The Skills and Abilities section lists creating a UML model that is an abstract representation of the source code as one of the course's emphasized skills, alongside analyzing and designing software using object-oriented techniques.\n\nDrawing circuit diagrams for hardware is not listed anywhere in this section.\n\nFiling corporate tax returns is a finance function, not one of the listed skills.\n\nNegotiating vendor contracts is a procurement function, not one of the listed skills."
  },
  {
    id: "csc312_ch2_002",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Within the software development cycle recap, this course's focus is on which two phases?",
    options: [
      "Planning and Implementation",
      "Analysis and Design",
      "Testing and Maintenance",
      "Implementation and Testing"
    ],
    correctAnswer: 1,
    explanation: "The Software Development Cycle recap explicitly marks Phase 2 (Analysis) and Phase 3 (Design) as the course's focus among the six listed phases.\n\nPlanning and Implementation are listed as phases one and four, neither of which is marked as the focus.\n\nTesting and Maintenance are listed as later phases, not the ones marked as the focus.\n\nImplementation and Testing are both listed elsewhere in the six phases, but neither is marked as the focus."
  },
  {
    id: "csc312_ch2_003",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Quality, as described in the Key Ideas section, is best defined as which of the following?",
    options: [
      "The most expensive option available",
      "A subjective sense of goodness",
      "Satisfaction of requirements",
      "The newest technology used"
    ],
    correctAnswer: 2,
    explanation: "The Key Ideas section explicitly states that quality is satisfaction of requirements, not goodness.\n\nCost is not used anywhere in the Key Ideas section to define quality.\n\nThe section explicitly states quality is not a subjective sense of goodness, the opposite of this option.\n\nUsing the newest technology is not how quality is defined in this section."
  },
  {
    id: "csc312_ch2_004",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following correctly defines a system?",
    options: [
      "A single hardware device performing one task",
      "A group of unrelated files stored on a server",
      "A team of employees without any procedures",
      "A set of methods and procedures for carrying out an activity or solving a problem"
    ],
    correctAnswer: 3,
    explanation: "The Definitions section defines a system as a set of detailed methods, procedures, and routines established or formulated to carry out a specific activity, perform a duty, or solve a problem.\n\nA single hardware device performing one task does not match this definition, which centers on methods, procedures, and routines rather than a single device.\n\nA group of unrelated files contradicts the definition, since a system's parts are established and formulated together, not unrelated.\n\nA team without procedures contradicts the definition, which explicitly requires established methods, procedures, and routines."
  },
  {
    id: "csc312_ch2_005",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following correctly defines System Analysis?",
    options: [
      "The dissection of a system into pieces to study how they interact",
      "The process of writing final code for a system",
      "The process of training end users on a finished system",
      "The process of billing clients for system maintenance"
    ],
    correctAnswer: 0,
    explanation: "The Definitions section defines System Analysis as the dissection of a system into its component pieces to study how those pieces interact and work.\n\nWriting final code is an Implementation activity, not the definition of System Analysis given here.\n\nTraining end users is a post-deployment activity, not the definition of System Analysis given here.\n\nBilling clients for maintenance is an administrative task, not the definition of System Analysis given here."
  },
  {
    id: "csc312_ch2_006",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following correctly defines System Design?",
    options: [
      "The process of writing a marketing plan for the system",
      "The process of defining the architecture, components, and data for a system's requirements",
      "The process of hiring the development team",
      "The process of collecting facts about current system problems"
    ],
    correctAnswer: 1,
    explanation: "The Definitions section defines System Design as the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.\n\nWriting a marketing plan is a business promotion activity, not the definition of System Design given here.\n\nHiring the development team is a staffing task, not the definition of System Design given here.\n\nCollecting facts about current system problems is the definition given for System Analysis, not System Design."
  },
  {
    id: "csc312_ch2_007",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Airline Reservation System data flow diagram example, which of the following is listed as an external entity?",
    options: [
      "Database server",
      "Ticketing algorithm",
      "Travel Agent",
      "Process 0"
    ],
    correctAnswer: 2,
    explanation: "The Data Flow Diagrams example lists Passenger, Travel Agent, and Airline as the external entities in the Airline Reservation System diagram.\n\nA database server is not listed as one of the external entities in this example.\n\nA ticketing algorithm is not listed as one of the external entities in this example.\n\nProcess 0 is the label given to the Airline Reservation System process itself, not an external entity."
  },
  {
    id: "csc312_ch2_008",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Entity-Relationship example, which relationship connects Travel Destination and Passenger?",
    options: [
      "Assigned to",
      "Reports to",
      "Manages",
      "Can be Booked by"
    ],
    correctAnswer: 3,
    explanation: "The Entity-Relationships example shows Travel Destination connected to Passenger through the relationship Can be Booked by.\n\nAssigned to is the relationship shown between Employee and Phone Extension in the same example, not Travel Destination and Passenger.\n\nReports to is not a relationship used anywhere in this example.\n\nManages is not a relationship used anywhere in this example."
  },
  {
    id: "csc312_ch2_009",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Entity-Relationship example, the relationship between Employee and Phone Extension is a one-to-many relationship.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The example shows Employee (1) connected through Assigned to to Phone Extension (1), a one-to-one relationship, not one-to-many."
  },
  {
    id: "csc312_ch2_010",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Installing a system without proper planning is described in the Need for System Analysis and Design section as leading to which outcome?",
    options: [
      "Great user dissatisfaction, often causing the system to fall into disuse",
      "Immediate cost savings for the organization",
      "Automatic regulatory compliance",
      "Guaranteed user adoption"
    ],
    correctAnswer: 0,
    explanation: "The Need for System Analysis and Design section states that installing a system without proper planning leads to great user dissatisfaction and frequently causes the system to fall into disuse.\n\nCost savings is not the outcome described in this section for poor planning.\n\nRegulatory compliance is not discussed anywhere in this section.\n\nGuaranteed adoption contradicts the section, which describes dissatisfaction and disuse as the outcome, not adoption."
  },
  {
    id: "csc312_ch2_011",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a quality of a good system analyst?",
    options: [
      "Indifference to ethics",
      "Strong personal and professional ethics",
      "Reluctance to communicate",
      "Dependence on others for motivation"
    ],
    correctAnswer: 1,
    explanation: "The Qualities of the System Analyst section lists strong personal and professional ethics among the four listed qualities, alongside being a problem solver, a communicator, and self-disciplined and self-motivated.\n\nIndifference to ethics contradicts the listed quality of strong ethics.\n\nReluctance to communicate contradicts the listed quality of being a communicator.\n\nDependence on others for motivation contradicts the listed quality of being self-motivated."
  },
  {
    id: "csc312_ch2_012",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed among the primary roles of the systems analyst in the Overall, the Systems Analyst section?",
    options: [
      "Financier",
      "Recruiter",
      "Change agent",
      "Auditor"
    ],
    correctAnswer: 2,
    explanation: "The Overall, the Systems Analyst section lists the primary roles as consultant, supporting expert, and change agent.\n\nFinancier is not one of the three primary roles listed in this section.\n\nRecruiter is not one of the three primary roles listed in this section.\n\nAuditor is not one of the three primary roles listed in this section."
  },
  {
    id: "csc312_ch2_013",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a workplace competency of a systems analyst in the Guide - Workplace Competencies section?",
    options: [
      "Culinary arts",
      "Athletic performance",
      "Fashion design",
      "Analytical Thinking and Problem Solving"
    ],
    correctAnswer: 3,
    explanation: "The Guide - Workplace Competencies section lists Analytical Thinking and Problem Solving among the six listed competencies, alongside behavioral characteristics, business knowledge, communication skills, interaction skills, and software applications.\n\nCulinary arts is not one of the six listed competencies.\n\nAthletic performance is not one of the six listed competencies.\n\nFashion design is not one of the six listed competencies."
  },
  {
    id: "csc312_ch2_014",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "At which organizational level is the Transaction Processing System (TPS) placed?",
    options: [
      "Operational Level",
      "Knowledge Level",
      "Higher Level",
      "Strategic Level"
    ],
    correctAnswer: 0,
    explanation: "The System Analyst Recommend, Design, and Maintain Many Types of Systems table places the Transaction Processing System at the Operational Level.\n\nThe Knowledge Level is where Knowledge Work Systems and Office Automation Systems are placed, not TPS.\n\nThe Higher Level is where Expert Systems, Decision Support Systems, and Management Information Systems are placed, not TPS.\n\nThe Strategic Level is where ESS, GDSS, and CSCWS are placed, not TPS."
  },
  {
    id: "csc312_ch2_015",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is given as an example of a Transaction Processing System?",
    options: [
      "Executive dashboard reporting",
      "Payroll Processing",
      "Group video conferencing",
      "Expert medical diagnosis"
    ],
    correctAnswer: 1,
    explanation: "The Transaction Processing System section gives Payroll Processing and Inventory Management as examples supporting day-to-day company operations.\n\nExecutive dashboard reporting is more characteristic of an Executive Support System, not a TPS.\n\nGroup video conferencing is given as an example of CSCWS, not a TPS.\n\nExpert medical diagnosis is characteristic of an Expert System, not a TPS."
  },
  {
    id: "csc312_ch2_016",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is a main source of information for a Transaction Processing System?",
    options: [
      "Business intelligence",
      "Competitive information",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Transaction Processing System section lists business intelligence and competitive information as its two main sources of information, so both named options are correct, making All of these the right choice."
  },
  {
    id: "csc312_ch2_017",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Office Automation Systems (OAS) are described as supporting which type of worker?",
    options: [
      "Executives making strategic decisions",
      "Professional workers such as engineers",
      "Data workers who share information",
      "External customers"
    ],
    correctAnswer: 2,
    explanation: "The Office Automation System section describes it as supporting data workers who share information but do not usually create new knowledge, with word processing and spreadsheets as examples.\n\nExecutives making strategic decisions are supported by Executive Support Systems, not OAS.\n\nProfessional workers such as engineers are supported by Knowledge Work Systems, not OAS.\n\nExternal customers are not the described audience for OAS in this section."
  },
  {
    id: "csc312_ch2_018",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of system supports professional workers such as scientists, engineers, and doctors?",
    options: [
      "Office Automation System",
      "Transaction Processing System",
      "Executive Support System",
      "Knowledge Work System"
    ],
    correctAnswer: 3,
    explanation: "The Knowledge Work System section describes it as supporting professional workers such as scientists, engineers, and doctors, with examples like computer-aided design systems and investment workstations.\n\nThe Office Automation System supports data workers who share information, not professional workers specifically.\n\nThe Transaction Processing System supports day-to-day operations, not specifically professional workers.\n\nThe Executive Support System supports top executives, not professional workers such as scientists and engineers."
  },
  {
    id: "csc312_ch2_019",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Management Information Systems (MIS) are described as providing which of the following?",
    options: [
      "Job-related information to users at all levels of a company",
      "Only strategic information to top executives",
      "Only entry-level clerical instructions",
      "Only data storage with no analysis"
    ],
    correctAnswer: 0,
    explanation: "The Management Information System section describes it as providing job-related information to users at all levels of a company, with examples like word processing, spreadsheets, and email.\n\nProviding only strategic information to top executives is the description given for Executive Support Systems, not MIS.\n\nMIS is described as serving users at all levels, not restricted to entry-level clerical instructions.\n\nMIS provides job-related information broadly, not merely raw data storage without analysis."
  },
  {
    id: "csc312_ch2_020",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of system is illustrated by the example of financial planning with what-if analysis?",
    options: [
      "Expert System",
      "Decision Support System",
      "Office Automation System",
      "Group Decision Support System"
    ],
    correctAnswer: 1,
    explanation: "The Decision Support System section gives financial planning with what-if analysis, and budgeting with modeling, as its examples.\n\nExpert Systems are illustrated with examples like MYCIN and XCON, not what-if financial analysis.\n\nOffice Automation Systems are illustrated with word processing and spreadsheets, not what-if analysis specifically.\n\nGroup Decision Support Systems are illustrated with email and Lotus Notes, not what-if financial analysis."
  }
  ,
  {
    id: "csc312_ch2_021",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "MYCIN and XCON are given as examples of which type of system?",
    options: [
      "Transaction Processing System",
      "Knowledge Work System",
      "Expert System",
      "Executive Support System"
    ],
    correctAnswer: 2,
    explanation: "The Expert System section gives MYCIN and XCON as examples of systems that capture and use the knowledge of an expert to reach a conclusion or recommendation.\n\nTransaction Processing Systems are illustrated with payroll and inventory examples, not MYCIN or XCON.\n\nKnowledge Work Systems are illustrated with CAD and investment workstation examples, not MYCIN or XCON.\n\nExecutive Support Systems are illustrated with status access examples, not MYCIN or XCON."
  },
  {
    id: "csc312_ch2_022",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which system is described as providing strategic information for top executives?",
    options: [
      "Decision Support System",
      "Knowledge Work System",
      "Group Decision Support System",
      "Executive Support System"
    ],
    correctAnswer: 3,
    explanation: "The Executive Support System section describes it as providing strategic information for top executives, with status access as its example.\n\nDecision Support Systems aid decision makers with what-if analysis, not strategic information specifically for top executives.\n\nKnowledge Work Systems support professional workers, not top executives specifically.\n\nGroup Decision Support Systems permit group members to interact electronically, not specifically deliver strategic information to top executives."
  },
  {
    id: "csc312_ch2_023",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Group Decision Support Systems (GDSS) permit group members to interact with electronic support.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The Group Decision Support System section explicitly states that GDSS permits group members to interact with electronic support, giving email and Lotus Notes as examples."
  },
  {
    id: "csc312_ch2_024",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Computer-Supported Collaborative Work System (CSCWS) is described as which of the following?",
    options: [
      "A more general term of GDSS, which may include groupware for team collaboration",
      "A narrower, more specific version of an Expert System",
      "A synonym for Transaction Processing System",
      "A system exclusive to operational-level tasks"
    ],
    correctAnswer: 0,
    explanation: "The Computer-Supported Collaborative Work System section describes CSCWS as a more general term of GDSS, which may include software support called groupware for team collaboration via network computers.\n\nCSCWS is not described as a version of an Expert System anywhere in this section.\n\nCSCWS is not described as a synonym for Transaction Processing System; those are entirely separate system types in the pyramid.\n\nCSCWS is placed at the Strategic Level, not the Operational Level, so it is not exclusive to operational tasks."
  },
  {
    id: "csc312_ch2_025",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following systems is placed at the Strategic Level in the organizational pyramid?",
    options: [
      "Transaction Processing System",
      "Group Decision Support System",
      "Office Automation System",
      "Knowledge Work System"
    ],
    correctAnswer: 1,
    explanation: "The organizational pyramid table places the Group Decision Support System at the Strategic Level, alongside ESS and CSCWS.\n\nThe Transaction Processing System is placed at the Operational Level, not the Strategic Level.\n\nThe Office Automation System is placed at the Knowledge Level, not the Strategic Level.\n\nThe Knowledge Work System is placed at the Knowledge Level, not the Strategic Level."
  },
  {
    id: "csc312_ch2_026",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following systems is placed at the Higher Level in the organizational pyramid?",
    options: [
      "Transaction Processing System",
      "Office Automation System",
      "Decision Support System",
      "Group Decision Support System"
    ],
    correctAnswer: 2,
    explanation: "The organizational pyramid table places the Decision Support System at the Higher Level, alongside Expert Systems and Management Information Systems.\n\nThe Transaction Processing System is placed at the Operational Level, not the Higher Level.\n\nThe Office Automation System is placed at the Knowledge Level, not the Higher Level.\n\nThe Group Decision Support System is placed at the Strategic Level, not the Higher Level."
  },
  {
    id: "csc312_ch2_027",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is placed at the Knowledge Level in the organizational pyramid?",
    options: [
      "Office Automation Systems",
      "Executive Support Systems",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The organizational pyramid table places Office Automation Systems at the Knowledge Level. Executive Support Systems are placed at the Strategic Level instead, so only Office Automation Systems is correct."
  },
  {
    id: "csc312_ch2_028",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In System Analysis and Design terminology, the systems development life cycle is also known by which other name?",
    options: [
      "The Requirements Traceability Matrix",
      "The Business Process Model",
      "The Enterprise Architecture Framework",
      "The Software Development Life Cycle"
    ],
    correctAnswer: 3,
    explanation: "The System Development Life Cycle section states that in System Analysis and Design terminology, the systems development life cycle also means the software development life cycle.\n\nA Requirements Traceability Matrix is a project artifact, not an alternate name for the SDLC given in this section.\n\nA Business Process Model is a distinct modeling artifact, not an alternate name for the SDLC given in this section.\n\nAn Enterprise Architecture Framework is a distinct concept, not the alternate name given for the SDLC in this section."
  },
  {
    id: "csc312_ch2_029",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Into how many sequential phases is the systems development life cycle divided?",
    options: [
      "Seven",
      "Five",
      "Four",
      "Ten"
    ],
    correctAnswer: 0,
    explanation: "The Systems Development Life Cycle section states this life cycle can be divided into seven sequential phases, and The Seven Phases subsection lists all seven by name.\n\nFive is the phase count used in the earlier Lecture 1-2 note, not the seven-phase breakdown used in this lecture.\n\nFour is not the count given anywhere in this lecture's SDLC breakdown.\n\nTen overstates the count; exactly seven phases are listed."
  },
  {
    id: "csc312_ch2_030",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which phase comes immediately after Systems Analysis in the seven-phase SDLC listed?",
    options: [
      "Systems Planning",
      "Systems Design",
      "Systems Testing",
      "Systems Maintenance"
    ],
    correctAnswer: 1,
    explanation: "The Seven Phases list order is Systems Planning, Systems Analysis, Systems Design, Systems Implementation, Systems Testing, Systems Deployment, and Systems Maintenance, so Systems Design directly follows Systems Analysis.\n\nSystems Planning is listed before Systems Analysis, not after it.\n\nSystems Testing is listed two positions after Systems Analysis, following Systems Design and Systems Implementation.\n\nSystems Maintenance is the final listed phase, well after Systems Analysis."
  },
  {
    id: "csc312_ch2_031",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which phase comes immediately after Systems Testing in the seven-phase SDLC listed?",
    options: [
      "Systems Implementation",
      "Systems Analysis",
      "Systems Deployment",
      "Systems Maintenance"
    ],
    correctAnswer: 2,
    explanation: "The Seven Phases list order places Systems Deployment directly after Systems Testing, followed finally by Systems Maintenance.\n\nSystems Implementation is listed before Systems Testing, not after it.\n\nSystems Analysis is listed near the start of the sequence, well before Systems Testing.\n\nSystems Maintenance is the final phase, coming after Systems Deployment rather than directly after Systems Testing."
  },
  {
    id: "csc312_ch2_032",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as part of the importance of the SDLC?",
    options: [
      "Increases risks and costs",
      "Discourages collaboration between stakeholders",
      "Removes the need for progress tracking",
      "Minimizes risks and costs"
    ],
    correctAnswer: 3,
    explanation: "The Importance of SDLC section lists minimizing risks and costs among its listed benefits, alongside enhancing collaboration and ensuring systematic progress tracking.\n\nThe section states the SDLC minimizes risks and costs, the opposite of increasing them.\n\nThe section states the SDLC enhances collaboration, the opposite of discouraging it.\n\nThe section states the SDLC ensures systematic progress tracking, the opposite of removing the need for it."
  },
  {
    id: "csc312_ch2_033",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The key question associated with the Planning phase is 'What problem are we solving, and is it worth solving?'",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The Objectives of the Planning Phase section explicitly poses this as the key question guiding the Planning phase."
  },
  {
    id: "csc312_ch2_034",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is the objective of the Planning phase?",
    options: [
      "Define project scope, goals, and feasibility",
      "Write the final production code",
      "Deploy the system to end users",
      "Conduct post-release bug fixes"
    ],
    correctAnswer: 0,
    explanation: "The Phase 1 - Planning section states the objective is to define project scope, goals, and feasibility, including technical and economic considerations.\n\nWriting final production code is an Implementation objective, not the Planning phase objective.\n\nDeploying the system to end users is a Deployment phase objective, not the Planning phase objective.\n\nConducting post-release bug fixes is a Maintenance activity, not the Planning phase objective."
  },
  {
    id: "csc312_ch2_035",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a deliverable of the Planning phase?",
    options: [
      "Source code repository",
      "Feasibility Study",
      "User training manual",
      "Rollback plan"
    ],
    correctAnswer: 1,
    explanation: "The Phase 1 - Planning section lists the Feasibility Study, alongside the Project Plan, as a deliverable of the Planning phase.\n\nA source code repository is an Implementation output, not a Planning phase deliverable.\n\nA user training manual is associated with Documentation and Deployment, not the Planning phase.\n\nA rollback plan is associated with Deployment, not the Planning phase."
  },
  {
    id: "csc312_ch2_036",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed among the objectives of the Planning phase?",
    options: [
      "Finalize the user interface color palette",
      "Sign off on User Acceptance Testing",
      "Identify stakeholders and their needs",
      "Deploy the system to a production server"
    ],
    correctAnswer: 2,
    explanation: "The Objectives of the Planning Phase section lists identifying stakeholders and their needs among its five objectives, alongside defining scope, assessing feasibility, estimating resources, and mitigating risks.\n\nFinalizing a color palette is a UI/UX design detail, not one of the five listed Planning phase objectives.\n\nSigning off on User Acceptance Testing belongs to the Testing phase, not Planning.\n\nDeploying to a production server belongs to the Deployment phase, not Planning."
  },
  {
    id: "csc312_ch2_037",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which key activity of the Planning phase involves defining the problem or opportunity and securing approval to proceed?",
    options: [
      "Resource Planning",
      "Risk Assessment",
      "Feasibility Study",
      "Project Initiation"
    ],
    correctAnswer: 3,
    explanation: "The Key Activities in Planning Phase section describes Project Initiation as defining the problem or opportunity and securing approval to move forward.\n\nResource Planning covers team roles and tools, not defining the problem and securing approval.\n\nRisk Assessment covers identifying potential risks, not defining the problem and securing approval.\n\nFeasibility Study examines technical, economic, legal, and operational questions, not the initial problem definition and approval step."
  },
  {
    id: "csc312_ch2_038",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which key activity of the Planning phase involves determining team roles and the tools or technologies to be used?",
    options: [
      "Resource Planning",
      "Risk Assessment",
      "Project Initiation",
      "Feasibility Study"
    ],
    correctAnswer: 0,
    explanation: "The Key Activities in Planning Phase section describes Resource Planning as covering team roles, such as developers, analysts, and testers, and the tools or technologies to be used.\n\nRisk Assessment covers identifying potential risks such as scope creep, not team roles and tools.\n\nProject Initiation covers defining the problem and securing approval, not team roles and tools.\n\nFeasibility Study covers technical, economic, legal, and operational questions, not team roles and tools."
  },
  {
    id: "csc312_ch2_039",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which key activity of the Planning phase involves identifying potential risks such as scope creep and budget overruns?",
    options: [
      "Resource Planning",
      "Risk Assessment",
      "Project Initiation",
      "Feasibility Study"
    ],
    correctAnswer: 1,
    explanation: "The Key Activities in Planning Phase section describes Risk Assessment as identifying potential risks, such as scope creep and budget overruns, and developing mitigation plans.\n\nResource Planning covers team roles and tools, not risk identification.\n\nProject Initiation covers defining the problem and securing approval, not risk identification.\n\nFeasibility Study examines technical, economic, legal, and operational questions, not risk identification specifically."
  },
  {
    id: "csc312_ch2_040",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is one of the four feasibility questions listed under the Feasibility Study activity of the Planning phase?",
    options: [
      "Technical: Can we build it?",
      "Legal: Are we compliant with regulations such as GDPR or HIPAA?",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Key Activities in Planning Phase section lists Technical (Can we build it?) and Legal (compliance, e.g. GDPR, HIPAA) as two of the four feasibility questions, alongside Economic and Operational, so both named options are correct, making All of these the right choice."
  }
  ,
  {
    id: "csc312_ch2_041",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following correctly describes a Preliminary System Study?",
    options: [
      "The final acceptance testing of a completed system",
      "The process of writing final user documentation",
      "An early investigation into a business problem's cause and solution",
      "The process of deploying a system into production"
    ],
    correctAnswer: 2,
    explanation: "The Preliminary System Study section defines it as an early investigation conducted to understand a business problem, evaluate the viability of a proposed solution, and provide management with sufficient information to decide whether to proceed.\n\nFinal acceptance testing occurs late in the Testing phase, not during this early investigation.\n\nWriting final user documentation occurs near deployment, not during this early investigation.\n\nDeploying a system into production is a much later Deployment phase activity, not this early investigation."
  },
  {
    id: "csc312_ch2_042",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as an objective of a Preliminary System Study?",
    options: [
      "Finalize the production deployment schedule",
      "Sign the final maintenance contract",
      "Train end users on the finished system",
      "Recommend whether to proceed, modify, or abandon the project"
    ],
    correctAnswer: 3,
    explanation: "The Objectives of a Preliminary System Study section lists recommending a course of action, deciding whether to proceed, modify, or abandon the project, among its five objectives.\n\nFinalizing a production deployment schedule belongs to the Deployment phase, not this early study.\n\nSigning a maintenance contract belongs to the Maintenance phase, not this early study.\n\nTraining end users on a finished system happens much later, near deployment, not during this early study."
  },
  {
    id: "csc312_ch2_043",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which activity in a Preliminary System Study involves identifying existing system weaknesses and examining user complaints?",
    options: [
      "Problem Identification",
      "Information Gathering",
      "Definition of System Scope",
      "Feasibility Analysis"
    ],
    correctAnswer: 0,
    explanation: "The Activities in a Preliminary System Study section describes Problem Identification as identifying existing system weaknesses and examining user complaints and operational challenges.\n\nInformation Gathering covers interviews, questionnaires, observation, and document review, not weakness identification specifically.\n\nDefinition of System Scope covers determining system boundaries, not weakness identification.\n\nFeasibility Analysis examines technical, economic, operational, schedule, and legal feasibility, not weakness identification."
  },
  {
    id: "csc312_ch2_044",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a method of information gathering in a Preliminary System Study?",
    options: [
      "Random guessing",
      "Document review",
      "Ignoring user complaints",
      "Deleting historical records"
    ],
    correctAnswer: 1,
    explanation: "The Information Gathering activity lists interviews, questionnaires, observation, and document review as its four methods.\n\nRandom guessing is not one of the four listed information gathering methods.\n\nIgnoring user complaints contradicts the broader Preliminary System Study, which relies on examining user complaints during Problem Identification.\n\nDeleting historical records is not one of the four listed information gathering methods and contradicts the goal of gathering information."
  },
  {
    id: "csc312_ch2_045",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which activity in a Preliminary System Study involves determining system boundaries and what will and will not be included?",
    options: [
      "Problem Identification",
      "Information Gathering",
      "Definition of System Scope",
      "Preparation of Preliminary Report"
    ],
    correctAnswer: 2,
    explanation: "The Definition of System Scope activity is described as determining system boundaries and identifying what will and will not be included in the new system.\n\nProblem Identification focuses on weaknesses and complaints, not boundaries.\n\nInformation Gathering focuses on interviews and document review, not boundaries.\n\nPreparation of Preliminary Report focuses on documenting findings for management, not defining boundaries."
  },
  {
    id: "csc312_ch2_046",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The feasibility analysis within a Preliminary System Study examines exactly five types of feasibility: technical, economic, operational, schedule, and motivational.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Feasibility Analysis activity within the Preliminary System Study section lists Technical, Economic, Operational, Schedule, and Legal Feasibility; Motivational feasibility belongs to the separate, later Feasibility Analysis section, not this list."
  },
  {
    id: "csc312_ch2_047",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of feasibility, within the Preliminary System Study, concerns the ability to complete the project within the required time frame?",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "Operational Feasibility",
      "Schedule Feasibility"
    ],
    correctAnswer: 3,
    explanation: "The Feasibility Analysis activity describes Schedule Feasibility as the ability to complete the project within the required time frame.\n\nTechnical Feasibility concerns availability of technology and expertise, not timing.\n\nEconomic Feasibility concerns cost-benefit analysis and return on investment, not timing.\n\nOperational Feasibility concerns user acceptance and organizational compatibility, not timing."
  },
  {
    id: "csc312_ch2_048",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of feasibility, within the Preliminary System Study, concerns compliance with laws and regulations?",
    options: [
      "Legal Feasibility",
      "Technical Feasibility",
      "Schedule Feasibility",
      "Operational Feasibility"
    ],
    correctAnswer: 0,
    explanation: "The Feasibility Analysis activity describes Legal Feasibility as concerning compliance with laws, regulations, and related requirements.\n\nTechnical Feasibility concerns available technology and expertise, not legal compliance.\n\nSchedule Feasibility concerns completing the project within a required time frame, not legal compliance.\n\nOperational Feasibility concerns user acceptance and organizational compatibility, not legal compliance."
  },
  {
    id: "csc312_ch2_049",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a deliverable of a Preliminary System Study?",
    options: [
      "Final production code",
      "Scope definition",
      "User training certificates",
      "Signed employment contracts"
    ],
    correctAnswer: 1,
    explanation: "The Outputs of a Preliminary System Study section lists scope definition among its major deliverables, alongside the statement of the problem, system objectives, feasibility study report, preliminary project plan, and recommendations.\n\nFinal production code is an Implementation output, not a deliverable of this early study.\n\nUser training certificates are associated with deployment and training, not this early study.\n\nSigned employment contracts are a human resources matter, not a deliverable of this study."
  },
  {
    id: "csc312_ch2_050",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a benefit of conducting a Preliminary System Study?",
    options: [
      "Guarantees zero project cost",
      "Eliminates the need for any feasibility study",
      "Prevents investment in unworkable projects",
      "Removes the need for management decision-making"
    ],
    correctAnswer: 2,
    explanation: "The Benefits of a Preliminary System Study section lists preventing investment in unworkable projects among its six listed benefits.\n\nThe study reduces project risk but does not guarantee zero project cost anywhere in this section.\n\nA feasibility study report is itself one of the deliverables of this process, so the study does not eliminate the need for feasibility assessment.\n\nThe study enhances management decision-making, according to this section, rather than removing the need for it."
  },
  {
    id: "csc312_ch2_051",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a challenge of conducting a Preliminary System Study?",
    options: [
      "Excessive availability of information",
      "Complete cooperation from all users",
      "Unlimited time for investigation",
      "Resistance from users"
    ],
    correctAnswer: 3,
    explanation: "The Challenges of a Preliminary System Study section lists resistance from users among its five listed challenges, alongside limited availability of information, time constraints, and inaccurate cost estimates.\n\nThe section lists limited availability of information as a challenge, the opposite of excessive availability.\n\nResistance from users is listed as a challenge, the opposite of complete cooperation.\n\nThe section lists time constraints as a challenge, the opposite of unlimited time."
  },
  {
    id: "csc312_ch2_052",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the University Course Registration System example, which of the following is identified as a Preliminary System Study finding?",
    options: [
      "Long registration queues",
      "A shortage of qualified lecturers",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Example: University Course Registration System section lists long registration queues as the identified problem finding. A shortage of qualified lecturers is not mentioned anywhere in this worked example, so only the registration queues finding is correct."
  },
  {
    id: "csc312_ch2_053",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the University Course Registration System example, the Preliminary System Study is described as which phase of the SDLC?",
    options: [
      "The first phase",
      "The final phase",
      "The fourth phase",
      "It is not part of the SDLC at all"
    ],
    correctAnswer: 0,
    explanation: "The Relationship to the Systems Development Life Cycle subsection states that the Preliminary System Study is usually the first phase of the SDLC, listing it before Feasibility Study, Systems Analysis, and the rest.\n\nThe final phase in this example's list is Maintenance, not the Preliminary System Study.\n\nThe fourth phase in this example's list is Systems Design, not the Preliminary System Study.\n\nThe example explicitly places it as the first of eight listed phases, so it is part of the SDLC."
  },
  {
    id: "csc312_ch2_054",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The main goal of a feasibility study is which of the following?",
    options: [
      "To solve the problem outright",
      "To achieve the scope",
      "To immediately deploy the new system",
      "To terminate the project regardless of findings"
    ],
    correctAnswer: 1,
    explanation: "The Feasibility Study section explicitly states that the main goal of a feasibility study is not to solve the problem but to achieve the scope.\n\nThe section explicitly denies that solving the problem outright is the goal.\n\nImmediate deployment is not discussed as the goal of a feasibility study anywhere in this section.\n\nTermination regardless of findings contradicts the section, which describes the feasibility report as potentially being accepted, accepted with modifications, or rejected based on findings."
  },
  {
    id: "csc312_ch2_055",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In feasibility study terminology, a cost or benefit that cannot be quantified is called which of the following?",
    options: [
      "A tangible cost",
      "A sunk cost",
      "An intangible cost",
      "A fixed cost"
    ],
    correctAnswer: 2,
    explanation: "The Feasibility Study section states that if cost and benefit can be quantified they are tangible, and if not, they are called intangible cost.\n\nA tangible cost is explicitly defined as one that can be quantified, the opposite of this question's description.\n\nA sunk cost is not a term used anywhere in this section.\n\nA fixed cost is not a term used anywhere in this section."
  },
  {
    id: "csc312_ch2_056",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a possible outcome of a feasibility report submitted to management?",
    options: [
      "Postponed indefinitely without a decision",
      "Automatically approved without review",
      "Sent directly to end users for a vote",
      "Accepted with modifications"
    ],
    correctAnswer: 3,
    explanation: "The Feasibility Study section states the report may be accepted, accepted with modifications, or rejected.\n\nIndefinite postponement without a decision is not one of the three listed outcomes.\n\nAutomatic approval without review contradicts the section, which describes the report as being submitted to management for a decision, not rubber-stamped.\n\nA vote by end users is not one of the three listed outcomes."
  },
  {
    id: "csc312_ch2_057",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The system development cycle proceeds regardless of whether management accepts the feasibility report.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Feasibility Study section states the system cycle proceeds only if the management accepts the proposal, not regardless of the decision."
  },
  {
    id: "csc312_ch2_058",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the five types of feasibility in the Feasibility Analysis section?",
    options: [
      "Motivational feasibility",
      "Cultural feasibility",
      "Environmental feasibility",
      "Political feasibility"
    ],
    correctAnswer: 0,
    explanation: "The Feasibility Analysis section lists Technical, Economic, Motivational, Schedule, and Operational feasibility as its five types.\n\nCultural feasibility is not one of the five types listed in this section.\n\nEnvironmental feasibility is not one of the five types listed in this section.\n\nPolitical feasibility is not one of the five types listed in this section."
  },
  {
    id: "csc312_ch2_059",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which feasibility type answers the key question 'Can we build it?'",
    options: [
      "Economic Feasibility",
      "Technical Feasibility",
      "Organizational Feasibility",
      "Schedule Feasibility"
    ],
    correctAnswer: 1,
    explanation: "The Three Key Questions table pairs 'Can we build it?' with Technical Feasibility.\n\nEconomic Feasibility is paired with 'Should we build it?', not 'Can we build it?'.\n\nOrganizational Feasibility is paired with 'If we build it, will they come?', not 'Can we build it?'.\n\nSchedule Feasibility is not one of the three key questions listed in this table."
  },
  {
    id: "csc312_ch2_060",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which feasibility type answers the key question 'Should we build it?'",
    options: [
      "Technical Feasibility",
      "Organizational Feasibility",
      "Economic Feasibility",
      "Schedule Feasibility"
    ],
    correctAnswer: 2,
    explanation: "The Three Key Questions table pairs 'Should we build it?' with Economic Feasibility.\n\nTechnical Feasibility is paired with 'Can we build it?', not 'Should we build it?'.\n\nOrganizational Feasibility is paired with 'If we build it, will they come?', not 'Should we build it?'.\n\nSchedule Feasibility is not one of the three key questions listed in this table."
  },
  {
    id: "csc312_ch2_061",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which feasibility type answers the key question 'If we build it, will they come?'",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "Schedule Feasibility",
      "Organizational Feasibility"
    ],
    correctAnswer: 3,
    explanation: "The Three Key Questions table pairs 'If we build it, will they come?' with Organizational Feasibility.\n\nTechnical Feasibility is paired with 'Can we build it?', not this question.\n\nEconomic Feasibility is paired with 'Should we build it?', not this question.\n\nSchedule Feasibility is not one of the three key questions listed in this table."
  },
  {
    id: "csc312_ch2_062",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a factor affecting technical feasibility?",
    options: [
      "Annual operating costs",
      "Project size",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Technical Feasibility section lists project size among its four listed factors. Annual operating costs is instead listed as an Economic Feasibility factor, so only project size is correct."
  },
  {
    id: "csc312_ch2_063",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a factor considered in economic feasibility?",
    options: [
      "Annual operating costs",
      "User familiarity with the application",
      "Project champion support",
      "Compliance with GDPR"
    ],
    correctAnswer: 0,
    explanation: "The Economic Feasibility section lists annual operating costs among its four listed factors, alongside development costs, annual benefits, and intangible costs and benefits.\n\nUser familiarity with the application is a Technical Feasibility factor, not Economic.\n\nProject champion support is an Organizational Feasibility factor, not Economic.\n\nGDPR compliance is a Legal Feasibility concern discussed elsewhere, not an Economic Feasibility factor in this section."
  },
  {
    id: "csc312_ch2_064",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a factor affecting organizational feasibility?",
    options: [
      "Annual operating costs",
      "Project champion(s)",
      "Development costs",
      "Familiarity with technology"
    ],
    correctAnswer: 1,
    explanation: "The Organizational Feasibility section lists project champions among its listed factors, alongside senior management, users, other stakeholders, and strategic alignment.\n\nAnnual operating costs is an Economic Feasibility factor, not Organizational.\n\nDevelopment costs is an Economic Feasibility factor, not Organizational.\n\nFamiliarity with technology is a Technical Feasibility factor, not Organizational."
  },
  {
    id: "csc312_ch2_065",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a tool used for detailed system study?",
    options: [
      "Automated code generation",
      "Financial auditing",
      "On-site observation",
      "Marketing surveys of competitors"
    ],
    correctAnswer: 2,
    explanation: "The Detailed System Study section lists interviews, on-site observation, and questionnaires as the tools used for detailed system study.\n\nAutomated code generation is an Implementation-era tool, not listed here.\n\nFinancial auditing is not listed as a tool for detailed system study in this section.\n\nMarketing surveys of competitors are not listed as a tool for detailed system study in this section."
  },
  {
    id: "csc312_ch2_066",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following must be documented as part of a detailed system study?",
    options: [
      "The company's marketing budget",
      "Employee vacation schedules",
      "Shareholder dividend history",
      "Detailed data flow diagrams"
    ],
    correctAnswer: 3,
    explanation: "The Documentation in Detailed System Study section lists detailed data flow diagrams, alongside a data dictionary and logical data structures, as required documentation.\n\nThe company's marketing budget is not listed as required documentation in this section.\n\nEmployee vacation schedules are not listed as required documentation in this section.\n\nShareholder dividend history is not listed as required documentation in this section."
  },
  {
    id: "csc312_ch2_067",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a key activity of the Analysis phase?",
    options: [
      "Use case modeling",
      "Blue-green deployment",
      "Rollback execution",
      "Code refactoring"
    ],
    correctAnswer: 0,
    explanation: "The Phase 2 - Analysis section lists use case modeling among its key activities, alongside stakeholder interviews and producing a Software Requirements Specification.\n\nBlue-green deployment is a Deployment phase strategy, not an Analysis activity.\n\nRollback execution is a Deployment-related activity, not an Analysis activity.\n\nCode refactoring is an Implementation or Maintenance activity, not an Analysis activity."
  },
  {
    id: "csc312_ch2_068",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Systems analysis is described as a process of collecting factual data, understanding processes, identifying problems, and doing what else?",
    options: [
      "Writing the final user manual",
      "Recommending feasible suggestions for improving the system",
      "Approving the final budget",
      "Training the maintenance team"
    ],
    correctAnswer: 1,
    explanation: "The System Analysis section defines it as collecting factual data, understanding processes involved, identifying problems, and recommending feasible suggestions for improving the system functioning.\n\nWriting the final user manual belongs to Documentation, not this definition of systems analysis.\n\nApproving the final budget is a Planning phase concern, not part of this definition.\n\nTraining the maintenance team belongs to Deployment and Maintenance, not this definition."
  },
  {
    id: "csc312_ch2_069",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A Software Requirement Specification (SRS) is prepared at the end of the Analysis and Specification activity.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The Analysis and Specification section states that a Software Requirement Specification document, specifying software, hardware, functional, and network requirements, is prepared at the end of this phase."
  },
  {
    id: "csc312_ch2_070",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is listed as the input to the Design phase?",
    options: [
      "The final test report",
      "The deployment checklist",
      "The Requirements Specification (SRS)",
      "The maintenance contract"
    ],
    correctAnswer: 2,
    explanation: "The Phase 3 - Design section explicitly lists the Requirements Specification (SRS) as the input to the Design phase.\n\nThe final test report is produced during Testing, not used as input to Design.\n\nThe deployment checklist is used during Deployment, not as input to Design.\n\nThe maintenance contract is relevant to the Maintenance phase, not as input to Design."
  }
  ,
  {
    id: "csc312_ch2_071",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is listed as the deliverable of the Design phase?",
    options: [
      "Feasibility Study",
      "Test reports",
      "Rollback plan",
      "Design Document (Technical blueprint)"
    ],
    correctAnswer: 3,
    explanation: "The Phase 3 - Design section explicitly lists the Design Document, described as a technical blueprint, as the deliverable of the Design phase.\n\nA Feasibility Study is a Planning phase deliverable, not a Design phase deliverable.\n\nTest reports are produced during Testing, not the Design phase.\n\nA rollback plan is associated with Deployment, not the Design phase."
  },
  {
    id: "csc312_ch2_072",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed among the major objectives of systems analysis?",
    options: [
      "How is it being done?",
      "How much profit will it generate?",
      "Who owns the company?",
      "Where is the server physically located?"
    ],
    correctAnswer: 0,
    explanation: "The System Analysis (Continued) section lists 'How is it being done?' among the six questions that form the major objectives of systems analysis.\n\nProfit generation is not one of the six listed questions.\n\nCompany ownership is not one of the six listed questions.\n\nPhysical server location is not one of the six listed questions."
  },
  {
    id: "csc312_ch2_073",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which question is explicitly listed among the major objectives of systems analysis?",
    options: [
      "What color should the interface be?",
      "Why is it being done?",
      "How much does the CEO earn?",
      "What time zone does the company operate in?"
    ],
    correctAnswer: 1,
    explanation: "The System Analysis (Continued) section lists 'Why is it being done?' among the six questions that form the major objectives of systems analysis.\n\nInterface color is a UI/UX design detail, not one of the six listed questions.\n\nExecutive compensation is not one of the six listed questions.\n\nCompany time zone is not one of the six listed questions."
  },
  {
    id: "csc312_ch2_074",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is one of the major objectives of systems analysis listed?",
    options: [
      "What is being done?",
      "Who is doing it?",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The System Analysis (Continued) section lists both 'What is being done?' and 'Who is doing it?' among the six questions forming the major objectives of systems analysis, so both named options are correct, making All of these the right choice."
  },
  {
    id: "csc312_ch2_075",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which level of design is concerned with system components and communication protocols?",
    options: [
      "Low-Level (Detailed) Design",
      "Physical Design",
      "High-Level (Architectural) Design",
      "Conceptual Design"
    ],
    correctAnswer: 2,
    explanation: "The Two Levels of Design section describes High-Level (Architectural) Design as covering system components and communication protocols.\n\nLow-Level (Detailed) Design covers class diagrams, algorithm pseudocode, and database tables, not system components and protocols.\n\nPhysical Design is a database design stage discussed elsewhere, not this two-level design distinction.\n\nConceptual Design is a database design stage discussed elsewhere, not this two-level design distinction."
  },
  {
    id: "csc312_ch2_076",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which level of design is concerned with class diagrams, algorithm pseudocode, and database tables?",
    options: [
      "High-Level (Architectural) Design",
      "Conceptual Design",
      "Physical System Design overview",
      "Low-Level (Detailed) Design"
    ],
    correctAnswer: 3,
    explanation: "The Two Levels of Design section describes Low-Level (Detailed) Design as covering class diagrams, algorithm pseudocode, and database tables.\n\nHigh-Level (Architectural) Design covers system components and communication protocols, not this level of detail.\n\nConceptual Design is a separate database design stage, not this two-level design distinction.\n\nA general physical system design overview is not the term used for this level in the Two Levels of Design section."
  },
  {
    id: "csc312_ch2_077",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In which stage of system design are the features of the new system specified, along with estimated costs and benefits?",
    options: [
      "Preliminary or General Design",
      "Structured or Detailed Design",
      "Post-deployment stage",
      "Maintenance stage"
    ],
    correctAnswer: 0,
    explanation: "The System Design section describes the Preliminary or General Design stage as specifying the features of the new system and estimating the costs of implementing them and the benefits to be derived.\n\nStructured or Detailed Design is the later stage where computer-oriented work begins, not this feature-and-estimate stage.\n\nA post-deployment stage is not one of the two stages of system design described in this section.\n\nThe Maintenance stage occurs after deployment, not during this early design work."
  },
  {
    id: "csc312_ch2_078",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Structure design is described as which of the following?",
    options: [
      "A rough sketch with no technical detail",
      "A blueprint of a computer solution sharing the original problem's components",
      "A marketing document for investors",
      "A legal contract between developer and client"
    ],
    correctAnswer: 1,
    explanation: "The Structured or Detailed Design section defines structure design as a blueprint of a computer system solution to a given problem, having the same components and inter-relationships as the original problem.\n\nA rough sketch with no technical detail contradicts the section, which states computer-oriented, structured work begins in earnest at this stage.\n\nA marketing document for investors is not described anywhere in this section.\n\nA legal contract is not described anywhere in this section."
  },
  {
    id: "csc312_ch2_079",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a tool or technique used in system design?",
    options: [
      "Gantt chart",
      "Balance sheet",
      "Decision table",
      "Employee handbook"
    ],
    correctAnswer: 2,
    explanation: "The System Design (Continued) section lists decision table among its six listed tools and techniques, alongside flowchart, DFD, data dictionary, structured English, and decision tree.\n\nA Gantt chart is a project scheduling tool, not one of the six listed system design tools.\n\nA balance sheet is a financial statement, not one of the six listed system design tools.\n\nAn employee handbook is a human resources document, not one of the six listed system design tools."
  },
  {
    id: "csc312_ch2_080",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Structured English and Gantt charts are both listed as tools and techniques used in system design.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The System Design (Continued) section lists Structured English among its six tools and techniques, but a Gantt chart is not one of them; the six listed are flowchart, DFD, data dictionary, structured English, decision table, and decision tree."
  },
  {
    id: "csc312_ch2_081",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which architectural style is described as having a single codebase and being best for simple applications?",
    options: [
      "Microservices",
      "Client-Server",
      "Event-Driven",
      "Monolithic"
    ],
    correctAnswer: 3,
    explanation: "The Popular Architectural Styles table describes Monolithic as a single codebase, best suited for simple applications.\n\nMicroservices is described as loosely coupled services, best for cloud-native systems, not a single codebase for simple applications.\n\nClient-Server is described as having separated presentation, best for web applications, not a single codebase.\n\nEvent-Driven is described as message-based communication, best for real-time systems, not a single codebase."
  },
  {
    id: "csc312_ch2_082",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which architectural style is described as loosely coupled services, best for cloud-native systems?",
    options: [
      "Microservices",
      "Monolithic",
      "Client-Server",
      "Event-Driven"
    ],
    correctAnswer: 0,
    explanation: "The Popular Architectural Styles table describes Microservices as loosely coupled services, best suited for cloud-native systems.\n\nMonolithic is described as a single codebase, best for simple applications, not loosely coupled services.\n\nClient-Server is described as having separated presentation, best for web applications, not loosely coupled services.\n\nEvent-Driven is described as message-based communication, best for real-time systems, not loosely coupled services."
  },
  {
    id: "csc312_ch2_083",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which architectural style is described as message-based communication, best for real-time systems?",
    options: [
      "Client-Server",
      "Event-Driven",
      "Monolithic",
      "Microservices"
    ],
    correctAnswer: 1,
    explanation: "The Popular Architectural Styles table describes Event-Driven as message-based communication, best suited for real-time systems.\n\nClient-Server is described as having separated presentation, best for web applications, not message-based communication.\n\nMonolithic is described as a single codebase, best for simple applications, not message-based communication.\n\nMicroservices is described as loosely coupled services, best for cloud-native systems, not specifically message-based communication for real-time systems."
  },
  {
    id: "csc312_ch2_084",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the essential design artifacts section, Level 0 of a Data Flow Diagram is described as which of the following?",
    options: [
      "Process decomposition",
      "Entity relationships",
      "Context",
      "Class diagram"
    ],
    correctAnswer: 2,
    explanation: "The Essential Design Artifacts section lists Level 0 as the Context level of a Data Flow Diagram, with Level 1 as process decomposition.\n\nProcess decomposition is described as Level 1, not Level 0.\n\nEntity relationships belong to Entity-Relationship Diagrams, a separate artifact from DFD levels.\n\nA class diagram belongs to UML Diagrams, a separate artifact from DFD levels."
  },
  {
    id: "csc312_ch2_085",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a type of UML diagram in the essential design artifacts section?",
    options: [
      "Gantt diagram",
      "Fishbone diagram",
      "Pareto diagram",
      "Sequence diagram"
    ],
    correctAnswer: 3,
    explanation: "The Essential Design Artifacts section lists Class, Sequence, and Use Case diagrams as the UML diagram types.\n\nA Gantt diagram is a scheduling tool, not one of the listed UML diagram types.\n\nA fishbone diagram is a root-cause analysis tool, not one of the listed UML diagram types.\n\nA Pareto diagram is a statistical prioritization tool, not one of the listed UML diagram types."
  },
  {
    id: "csc312_ch2_086",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a Golden Rule of UI/UX design?",
    options: [
      "User control and freedom",
      "Aggressive marketing pop-ups",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The UI/UX Design Principles section lists user control and freedom among its three Golden Rules, alongside consistency and standards, and error prevention. Aggressive marketing pop-ups is not one of the three Golden Rules, so only user control and freedom is correct."
  },
  {
    id: "csc312_ch2_087",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a UI/UX design tool?",
    options: [
      "Figma",
      "Jenkins",
      "JUnit",
      "Docker"
    ],
    correctAnswer: 0,
    explanation: "The UI/UX Design Principles section lists Figma among its three listed tools, alongside Adobe XD and Balsamiq.\n\nJenkins is listed elsewhere as a CI/CD tool, not a UI/UX design tool.\n\nJUnit is listed elsewhere as a unit testing tool, not a UI/UX design tool.\n\nDocker is listed elsewhere as a containerization tool, not a UI/UX design tool."
  },
  {
    id: "csc312_ch2_088",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a UI/UX design deliverable?",
    options: [
      "Rollback plan",
      "Wireframes",
      "Feasibility report",
      "Maintenance contract"
    ],
    correctAnswer: 1,
    explanation: "The UI/UX Design Principles section lists wireframes among its three deliverables, alongside interactive prototypes and style guides.\n\nA rollback plan is a Deployment-related deliverable, not a UI/UX deliverable.\n\nA feasibility report is a Planning phase deliverable, not a UI/UX deliverable.\n\nA maintenance contract belongs to the Maintenance phase, not UI/UX design."
  },
  {
    id: "csc312_ch2_089",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which stage of the database design process involves normalization to third normal form (3NF)?",
    options: [
      "Conceptual Design",
      "Physical Design",
      "Logical Design",
      "Structured Design"
    ],
    correctAnswer: 2,
    explanation: "The Database Design Process section describes Logical Design as normalization to 3NF, the second of its three stages.\n\nConceptual Design is described as covering entities and relationships, not normalization specifically.\n\nPhysical Design is described as covering indexes and partitioning, not normalization.\n\nStructured Design is a broader methodology category discussed elsewhere, not one of the three database design stages."
  },
  {
    id: "csc312_ch2_090",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the database design example, splitting a denormalized Student table into Students, Courses, and an Enrollment junction table illustrates which of the following?",
    options: [
      "Physical Design",
      "Conceptual Design",
      "Preliminary Design",
      "Normalization during Logical Design"
    ],
    correctAnswer: 3,
    explanation: "The Database Design Process Example shows a denormalized Student table being split into Students, Courses, and an Enrollment junction table, matching the normalization to 3NF described for the Logical Design stage.\n\nPhysical Design concerns indexes and partitioning, not table normalization.\n\nConceptual Design concerns entities and relationships at a high level, not the detailed normalization shown in this example.\n\nPreliminary Design is not one of the three named database design stages."
  }
  ,
  {
    id: "csc312_ch2_091",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a key characteristic of conceptual design?",
    options: [
      "Technology-independent",
      "Focused entirely on hardware specifications",
      "Focused entirely on programming language syntax",
      "Dependent on a specific database vendor"
    ],
    correctAnswer: 0,
    explanation: "The What is Conceptual Design section lists technology-independent as a key characteristic, alongside focusing on what rather than how and using natural business language.\n\nHardware specifications belong to Physical Design, not the technology-independent conceptual stage.\n\nProgramming language syntax belongs to Implementation, not conceptual design.\n\nBeing dependent on a specific database vendor contradicts the technology-independent characteristic given for conceptual design."
  },
  {
    id: "csc312_ch2_092",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a key deliverable of conceptual design?",
    options: [
      "Compiled binary executable",
      "Glossary of Terms",
      "Server rack configuration",
      "Final invoice for the client"
    ],
    correctAnswer: 1,
    explanation: "The What is Conceptual Design section lists a Glossary of Terms among its key deliverables, alongside Entity-Relationship Diagrams, Data Flow Diagrams, and Business Process Models.\n\nA compiled binary executable is an Implementation output, not a conceptual design deliverable.\n\nA server rack configuration belongs to Physical Design or Deployment, not conceptual design.\n\nA final invoice is a billing document, not a conceptual design deliverable."
  },
  {
    id: "csc312_ch2_093",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Conceptual design focuses on how the system will be technically implemented rather than what it should do.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The What is Conceptual Design section states it is technology-independent and focuses on what the system should do, not how it will be implemented."
  },
  {
    id: "csc312_ch2_094",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In Entity-Relationship modeling, which core component is described as corresponding to a noun, such as Customer or Product?",
    options: [
      "Attributes",
      "Relationships",
      "Entities",
      "Constraints"
    ],
    correctAnswer: 2,
    explanation: "The Entity-Relationship Modeling table describes Entities as nouns, giving Customer and Product as examples.\n\nAttributes are described as properties, such as CustomerID, not nouns like Customer itself.\n\nRelationships are described as verbs, such as Purchases, not nouns.\n\nConstraints is not one of the three core components listed in this table."
  },
  {
    id: "csc312_ch2_095",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In Entity-Relationship modeling, which core component is described as corresponding to a verb, such as Purchases or Supplies?",
    options: [
      "Entities",
      "Attributes",
      "Constraints",
      "Relationships"
    ],
    correctAnswer: 3,
    explanation: "The Entity-Relationship Modeling table describes Relationships as verbs, giving Purchases and Supplies as examples.\n\nEntities are described as nouns, such as Customer or Product, not verbs.\n\nAttributes are described as properties, such as CustomerID, not verbs.\n\nConstraints is not one of the three core components listed in this table."
  },
  {
    id: "csc312_ch2_096",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the design quality metrics table, what is the ideal value for coupling between modules?",
    options: [
      "Low, meaning modules are independent",
      "High, meaning modules are tightly linked",
      "Irrelevant to design quality",
      "Undefined until deployment"
    ],
    correctAnswer: 0,
    explanation: "The Design Quality Metrics table lists Low as the ideal value for coupling, meaning modules are independent.\n\nHigh coupling is the opposite of the ideal value given in the table.\n\nThe table treats coupling as a named design quality metric, not something irrelevant to design quality.\n\nThe table gives an ideal value for coupling at the design stage, not something left undefined until deployment."
  },
  {
    id: "csc312_ch2_097",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the design quality metrics table, what is the ideal value for cohesion within a module?",
    options: [
      "Low, meaning a module does many unrelated things",
      "High, meaning a module does one thing well",
      "Zero, meaning the module has no responsibilities",
      "Undefined until testing"
    ],
    correctAnswer: 1,
    explanation: "The Design Quality Metrics table lists High as the ideal value for cohesion, meaning a module does one thing well.\n\nLow cohesion is the opposite of the ideal value given in the table.\n\nA module having zero responsibilities is not the ideal described for cohesion; the ideal is doing one thing well, not nothing.\n\nThe table gives an ideal value for cohesion at the design stage, not something left undefined until testing."
  },
  {
    id: "csc312_ch2_098",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "System design can be viewed as the design of user interface, data, process, and which other component?",
    options: [
      "Marketing strategy",
      "Employee benefits",
      "System specification",
      "Sales projections"
    ],
    correctAnswer: 2,
    explanation: "The System Design Components section states system design can be viewed as the design of user interface, data, process, and system specification.\n\nMarketing strategy is not one of the four listed components.\n\nEmployee benefits is not one of the four listed components.\n\nSales projections is not one of the four listed components."
  },
  {
    id: "csc312_ch2_099",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the activities involved in system design?",
    options: [
      "Designing input forms",
      "Designing codification schemes",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The System Design Activities section lists both designing input forms and designing codification schemes among its nine listed activities, so both named options are correct, making All of these the right choice."
  },
  {
    id: "csc312_ch2_100",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The Implementation phase is described as which of the following?",
    options: [
      "The phase where user requirements are first gathered",
      "The phase where the feasibility report is written",
      "The phase where the system is retired",
      "The stage where the system is built based on design specifications"
    ],
    correctAnswer: 3,
    explanation: "The What is Implementation section defines it as the stage where the system is built based on design specifications.\n\nGathering user requirements first happens in the Analysis phase, not Implementation.\n\nWriting the feasibility report happens in the Planning phase, not Implementation.\n\nRetiring the system is not described in this section; Implementation is about building the system, not ending its use."
  },
  {
    id: "csc312_ch2_101",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which key activity of Implementation involves translating design into executable code while following coding standards?",
    options: [
      "Coding",
      "Unit Testing",
      "Integration",
      "Rollback"
    ],
    correctAnswer: 0,
    explanation: "The Key Activities of Implementation section describes Coding as translating design into executable code while following coding standards, such as PEP 8 for Python.\n\nUnit Testing is described as testing individual components or modules, not translating design into code.\n\nIntegration is described as combining modules into a cohesive whole, not writing the initial code.\n\nRollback is a Deployment-related activity, not an Implementation key activity."
  },
  {
    id: "csc312_ch2_102",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which key activity of Implementation involves testing individual components or modules?",
    options: [
      "Coding",
      "Unit Testing",
      "Integration",
      "Deployment"
    ],
    correctAnswer: 1,
    explanation: "The Key Activities of Implementation section describes Unit Testing as testing individual components or modules.\n\nCoding is described as translating design into executable code, not testing individual components.\n\nIntegration is described as combining modules into a cohesive whole, not testing them individually.\n\nDeployment is a separate, later phase, not one of the three key Implementation activities listed."
  },
  {
    id: "csc312_ch2_103",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which key activity of Implementation involves combining modules into a cohesive system?",
    options: [
      "Coding",
      "Unit Testing",
      "Integration",
      "Rollback"
    ],
    correctAnswer: 2,
    explanation: "The Key Activities of Implementation section describes Integration as combining modules into a cohesive system.\n\nCoding is described as translating design into executable code, not combining modules.\n\nUnit Testing is described as testing individual components, not combining them.\n\nRollback is a Deployment-related activity, not an Implementation key activity."
  },
  {
    id: "csc312_ch2_104",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which coding best practice involves breaking code into small, reusable pieces?",
    options: [
      "Naming Conventions",
      "Security",
      "Comments",
      "Modularity"
    ],
    correctAnswer: 3,
    explanation: "The Coding Best Practices section describes Modularity as breaking code into reusable pieces.\n\nNaming Conventions covers styles such as camelCase and PascalCase, not breaking code into pieces.\n\nSecurity covers input validation and encryption, not breaking code into pieces.\n\nComments covers documenting logic for future readers, not breaking code into pieces."
  },
  {
    id: "csc312_ch2_105",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Containerization tools such as Docker are listed among the tools and technologies used in coding best practices.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Coding Best Practices section lists Git as its Version Control tool; Docker is instead listed later among the Critical Deployment Tools for containerization, not the Coding Best Practices tools."
  },
  {
    id: "csc312_ch2_106",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a solution to scope creep during implementation?",
    options: [
      "Strict change control",
      "Ignoring all change requests permanently",
      "Removing all documentation",
      "Skipping integration testing"
    ],
    correctAnswer: 0,
    explanation: "The Common Challenges in Implementation table pairs the scope creep challenge with strict change control as its solution.\n\nIgnoring all change requests permanently is not the listed solution; strict control, not blanket refusal, is given.\n\nThe table pairs poor documentation with enforcing commenting rules, the opposite of removing documentation.\n\nSkipping integration testing is not listed as a solution to any challenge in this table; integration bugs are instead paired with mocking APIs."
  },
  {
    id: "csc312_ch2_107",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Implementation versus Deployment comparison, Implementation is defined as which of the following?",
    options: [
      "Releasing the system to users",
      "Building and testing the system",
      "Monitoring the system after release",
      "Rolling back a failed release"
    ],
    correctAnswer: 1,
    explanation: "The Implementation vs. Deployment table defines Implementation as building and testing the system, contrasted with Deployment, which releases the system to users.\n\nReleasing the system to users is the definition given for Deployment, not Implementation.\n\nMonitoring after release is a post-deployment activity, not the definition of Implementation.\n\nRolling back a failed release is a Deployment-related procedure, not the definition of Implementation."
  },
  {
    id: "csc312_ch2_108",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Implementation versus Deployment comparison, Deployment is defined as which of the following?",
    options: [
      "Building and testing the system",
      "Writing the initial source code",
      "Releasing the system to users",
      "Gathering initial requirements"
    ],
    correctAnswer: 2,
    explanation: "The Implementation vs. Deployment table defines Deployment as releasing the system to users, contrasted with Implementation, which builds and tests the system.\n\nBuilding and testing the system is the definition given for Implementation, not Deployment.\n\nWriting the initial source code belongs to Implementation's coding activity, not Deployment.\n\nGathering initial requirements belongs to the Analysis phase, not Deployment."
  },
  {
    id: "csc312_ch2_109",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is the objective of the Testing phase?",
    options: [
      "Deploy the system to production",
      "Gather initial requirements",
      "Train end users",
      "Identify and fix defects"
    ],
    correctAnswer: 3,
    explanation: "The Phase 5 - Testing section states the objective is to identify and fix defects.\n\nDeploying the system to production is a Deployment phase objective, not a Testing objective.\n\nGathering initial requirements is an Analysis phase objective, not a Testing objective.\n\nTraining end users is a Deployment or post-deployment activity, not the Testing phase objective."
  },
  {
    id: "csc312_ch2_110",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a type of testing under the Testing phase?",
    options: [
      "User Acceptance Testing (UAT)",
      "Blue-Green deployment",
      "Rollback execution",
      "Change request approval"
    ],
    correctAnswer: 0,
    explanation: "The Phase 5 - Testing section lists User Acceptance Testing among its listed types of testing, alongside integration testing and system testing.\n\nBlue-Green deployment is a Deployment strategy, not a type of testing.\n\nRollback execution is a Deployment-related procedure, not a type of testing.\n\nChange request approval is part of the Maintenance process flow, not a type of testing."
  }
  ,
  {
    id: "csc312_ch2_111",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which statistic is cited as a reason testing matters?",
    options: [
      "56% of bugs arise from poor requirements",
      "99% of bugs arise from poor requirements",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Why Testing Matters section cites the statistic that 56% of bugs arise from poor requirements, an IBM figure. A claim of 99% contradicts this specific cited figure, so only the 56% statistic is correct."
  },
  {
    id: "csc312_ch2_112",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the V-Model testing levels listed, which level comes immediately after Unit Testing?",
    options: [
      "System Testing",
      "Integration Testing",
      "User Acceptance Testing",
      "Regression Testing"
    ],
    correctAnswer: 1,
    explanation: "The Testing Levels (V-Model) section lists the order as Unit Testing, Integration Testing, System Testing, and User Acceptance Testing, so Integration Testing comes directly after Unit Testing.\n\nSystem Testing is listed as the third level, after Integration Testing, not directly after Unit Testing.\n\nUser Acceptance Testing is listed as the fourth and final level, not directly after Unit Testing.\n\nRegression Testing is not one of the four levels listed in this V-Model breakdown."
  },
  {
    id: "csc312_ch2_113",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which testing type is described as a basic functionality check, such as asking 'Does the app launch?'",
    options: [
      "Regression",
      "Non-Functional",
      "Smoke",
      "Functional"
    ],
    correctAnswer: 2,
    explanation: "The Key Testing Types table describes Smoke testing as a basic functionality check, with 'Does the app launch?' as its example.\n\nRegression testing is described as post-change verification, not a basic launch check.\n\nNon-Functional testing is described as covering performance and security, not a basic launch check.\n\nFunctional testing is described as requirements compliance, such as login validation, not a basic launch check."
  },
  {
    id: "csc312_ch2_114",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which testing type is described as post-change verification, such as retesting after bug fixes?",
    options: [
      "Smoke",
      "Functional",
      "Non-Functional",
      "Regression"
    ],
    correctAnswer: 3,
    explanation: "The Key Testing Types table describes Regression testing as post-change verification, with retesting after bug fixes as its example.\n\nSmoke testing is described as a basic functionality check, not post-change verification.\n\nFunctional testing is described as requirements compliance, not specifically post-change verification.\n\nNon-Functional testing is described as covering performance and security, not post-change verification."
  },
  {
    id: "csc312_ch2_115",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Black-box testing is described as being performed from which perspective?",
    options: [
      "The end-user perspective, without code access",
      "The developer perspective, with full code access",
      "The database administrator's perspective",
      "The network engineer's perspective"
    ],
    correctAnswer: 0,
    explanation: "The Black-Box vs. White-Box Testing table describes Black-Box testing as having no code access and being performed from the end-user perspective.\n\nThe developer perspective with full code access is the description given for White-Box testing, not Black-Box.\n\nA database administrator's perspective is not one of the two roles described in this table.\n\nA network engineer's perspective is not one of the two roles described in this table."
  },
  {
    id: "csc312_ch2_116",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "White-box testing is described as relying on which technique?",
    options: [
      "Equivalence partitioning without code access",
      "Path coverage and loop testing with internal logic known",
      "Random guessing with no test plan",
      "User surveys only"
    ],
    correctAnswer: 1,
    explanation: "The Black-Box vs. White-Box Testing table describes White-Box testing as using path coverage and loop testing techniques, with code and internal logic known.\n\nEquivalence partitioning without code access is the technique described for Black-Box testing, not White-Box.\n\nRandom guessing with no test plan is not a technique described for either testing type in this table.\n\nUser surveys are not a technique described for either testing type in this table."
  },
  {
    id: "csc312_ch2_117",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Automated testing, as compared, has a lower initial cost than manual testing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Automated vs. Manual Testing table states automated testing has a high initial investment, while manual testing has a low initial cost, the opposite of this claim."
  },
  {
    id: "csc312_ch2_118",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Automated testing is described as best suited for which purpose?",
    options: [
      "Usability and ad-hoc tests",
      "One-time exploratory testing",
      "Regression and load testing",
      "Interviewing end users"
    ],
    correctAnswer: 2,
    explanation: "The Automated vs. Manual Testing table lists regression and load testing as what automated testing is best for.\n\nUsability and ad-hoc tests are listed as what manual testing is best for, not automated testing.\n\nOne-time exploratory testing is more characteristic of manual, human-dependent testing, not automated testing.\n\nInterviewing end users is not a testing activity described in this table at all."
  },
  {
    id: "csc312_ch2_119",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a solution to incomplete requirements as a testing challenge?",
    options: [
      "Skip testing entirely",
      "Delay all testing until after deployment",
      "Remove testers from the project",
      "Involve testers early, known as Shift-Left Testing"
    ],
    correctAnswer: 3,
    explanation: "The Challenges & Mitigations in Testing table pairs incomplete requirements with involving testers early, known as Shift-Left Testing, as its solution.\n\nSkipping testing entirely is not a listed solution and contradicts the purpose of this mitigation table.\n\nDelaying all testing until after deployment contradicts the Shift-Left philosophy of involving testers early.\n\nRemoving testers from the project is not a listed solution and contradicts the table's goal of mitigating testing challenges."
  },
  {
    id: "csc312_ch2_120",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The Deployment phase is defined as which of the following?",
    options: [
      "The process of releasing a tested system into the production environment",
      "The process of writing the initial source code",
      "The process of gathering user requirements",
      "The process of fixing bugs discovered by end users"
    ],
    correctAnswer: 0,
    explanation: "The Phase 6 - Deployment section defines it as the process of releasing a tested system into the production environment.\n\nWriting initial source code belongs to Implementation, not the Deployment definition.\n\nGathering user requirements belongs to Analysis, not the Deployment definition.\n\nFixing bugs discovered by end users belongs to Maintenance, not the Deployment definition."
  },
  {
    id: "csc312_ch2_121",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a success metric for deployment?",
    options: [
      "Maximum downtime",
      "Zero downtime",
      "Negative user feedback",
      "Significant data loss"
    ],
    correctAnswer: 1,
    explanation: "The Phase 6 - Deployment section lists zero downtime among its three success metrics, alongside no data loss and positive user feedback.\n\nMaximum downtime is the opposite of the zero downtime metric listed.\n\nNegative user feedback is the opposite of the positive user feedback metric listed.\n\nSignificant data loss is the opposite of the no data loss metric listed."
  },
  {
    id: "csc312_ch2_122",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed on the pre-deployment checklist?",
    options: [
      "Marketing campaign launch",
      "Final UAT sign-off",
      "Vendor contract renewal",
      "Office relocation plan"
    ],
    correctAnswer: 1,
    explanation: "The Pre-Deployment Checklist section lists final UAT sign-off among its five checklist items, alongside data backup, rollback plan documentation, stakeholder notification, and support team training.\n\nA marketing campaign launch is not one of the five checklist items listed.\n\nVendor contract renewal is not one of the five checklist items listed.\n\nAn office relocation plan is not one of the five checklist items listed."
  },
  {
    id: "csc312_ch2_123",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed on the pre-deployment checklist?",
    options: [
      "Data backup completed",
      "Marketing campaign launched",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Pre-Deployment Checklist section lists data backup completed among its five listed items. A marketing campaign launch is not one of the five checklist items, so only data backup completed is correct."
  },
  {
    id: "csc312_ch2_124",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which deployment strategy releases the entire system at once and carries high risk?",
    options: [
      "Phased Rollout",
      "Blue-Green",
      "Canary Release",
      "Big Bang"
    ],
    correctAnswer: 3,
    explanation: "The Deployment Strategies table describes Big Bang as releasing the system all at once, best for small systems, with a High risk rating.\n\nPhased Rollout is described as module-by-module, with a Medium risk rating, not all at once.\n\nBlue-Green is described as using two parallel environments, with a Low risk rating, not all at once.\n\nCanary Release is described as gradual user exposure, with a Very Low risk rating, not all at once."
  },
  {
    id: "csc312_ch2_125",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which deployment strategy gradually exposes the new version to users and carries very low risk?",
    options: [
      "Canary Release",
      "Big Bang",
      "Phased Rollout",
      "Blue-Green"
    ],
    correctAnswer: 0,
    explanation: "The Deployment Strategies table describes Canary Release as gradual user exposure, best for web applications, with a Very Low risk rating.\n\nBig Bang is described as releasing all at once, with a High risk rating, not gradual exposure.\n\nPhased Rollout is described as module-by-module, with a Medium risk rating, not gradual user exposure.\n\nBlue-Green is described as two parallel environments, with a Low risk rating, not specifically gradual user exposure."
  },
  {
    id: "csc312_ch2_126",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which deployment strategy releases the system module-by-module and is best suited for enterprise systems?",
    options: [
      "Big Bang",
      "Phased Rollout",
      "Blue-Green",
      "Canary Release"
    ],
    correctAnswer: 1,
    explanation: "The Deployment Strategies table describes Phased Rollout as module-by-module, best for enterprise systems, with a Medium risk rating.\n\nBig Bang is described as releasing all at once, best for small systems, not module-by-module.\n\nBlue-Green is described as two parallel environments, best for critical systems, not specifically module-by-module.\n\nCanary Release is described as gradual user exposure, best for web applications, not module-by-module."
  },
  {
    id: "csc312_ch2_127",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In Blue-Green deployment, what does the Blue environment represent?",
    options: [
      "The new version deployed in parallel",
      "The rollback plan",
      "The current version running live",
      "The staging test environment"
    ],
    correctAnswer: 2,
    explanation: "The Blue-Green Deployment Deep Dive section states that Blue, the current version, runs live, while Green, the new version, deploys in parallel.\n\nThe new version deployed in parallel is the description given for Green, not Blue.\n\nA rollback plan is a separate deployment artifact, not what Blue represents.\n\nA staging test environment is not the term used for Blue in this section; Blue is specifically the current live version."
  },
  {
    id: "csc312_ch2_128",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a benefit of Blue-Green deployment?",
    options: [
      "Guaranteed permanent downtime",
      "Elimination of all testing",
      "Increased manual rollback complexity",
      "Instant rollback capability"
    ],
    correctAnswer: 3,
    explanation: "The Blue-Green Deployment Deep Dive section lists instant rollback capability among its two listed benefits, alongside near-zero downtime.\n\nThe section lists near-zero downtime as a benefit, the opposite of guaranteed permanent downtime.\n\nElimination of all testing is not discussed anywhere in this section.\n\nThe section describes rollback as instant, the opposite of increased manual rollback complexity."
  },
  {
    id: "csc312_ch2_129",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Blue-Green deployment is described as offering near-zero downtime.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The Blue-Green Deployment Deep Dive section lists near-zero downtime among its benefits, alongside instant rollback capability."
  },
  {
    id: "csc312_ch2_130",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a post-deployment activity?",
    options: [
      "Monitoring system health checks such as CPU, memory, and errors",
      "Writing the original feasibility study",
      "Conducting the initial stakeholder interviews",
      "Drafting the original project charter"
    ],
    correctAnswer: 0,
    explanation: "The Post-Deployment Activities section lists monitoring system health checks, such as CPU, memory, and errors, among its four listed activities.\n\nWriting the original feasibility study belongs to the Planning phase, long before deployment.\n\nConducting initial stakeholder interviews belongs to the Analysis phase, not post-deployment.\n\nDrafting the original project charter belongs to Project Initiation in Planning, not post-deployment."
  }
  ,
  {
    id: "csc312_ch2_131",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a reason to roll back a deployment?",
    options: [
      "Positive user feedback",
      "Critical functionality failure",
      "Improved performance",
      "Successful UAT sign-off"
    ],
    correctAnswer: 1,
    explanation: "The Rollback Procedures section lists critical functionality failure among its three listed reasons to roll back, alongside security vulnerabilities and performance degradation.\n\nPositive user feedback is not a listed reason to roll back; it is instead a deployment success metric.\n\nImproved performance is the opposite of the performance degradation reason listed for rolling back.\n\nSuccessful UAT sign-off is a pre-deployment checklist item, not a reason to roll back."
  },
  {
    id: "csc312_ch2_132",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which step in the rollback procedure comes immediately after identifying the failure point?",
    options: [
      "Document lessons learned",
      "Execute rollback plan",
      "Notify stakeholders",
      "Deploy the new version again"
    ],
    correctAnswer: 2,
    explanation: "The Rollback Procedures Steps list the order as identify failure point, notify stakeholders, execute rollback plan, and document lessons learned, so notifying stakeholders comes directly after identifying the failure point.\n\nDocumenting lessons learned is listed as the fourth and final step, not the second.\n\nExecuting the rollback plan is listed as the third step, after notifying stakeholders, not immediately after identifying the failure.\n\nRedeploying the new version is not one of the four listed rollback steps."
  },
  {
    id: "csc312_ch2_133",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which changeover strategy is described as less risky but more expensive because the operational work is doubled?",
    options: [
      "Direct Changeover",
      "Pilot Run",
      "Big Bang",
      "Parallel Run"
    ],
    correctAnswer: 3,
    explanation: "The Parallel Run section describes this strategy as less risky but more expensive because the operational work is doubled, since manual and computerized systems run side by side.\n\nDirect Changeover is a separate, simpler strategy listed without this description.\n\nPilot Run is a separate strategy listed without this description.\n\nBig Bang is a deployment strategy discussed elsewhere, not one of the three changeover strategies in this section."
  },
  {
    id: "csc312_ch2_134",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is described as a benefit of Parallel Run as a changeover strategy?",
    options: [
      "Manual results can be compared with the computerized system's results",
      "The operational work is reduced by half",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Parallel Run section states that manual results can be compared with the computerized system's results, listing this as a benefit. The section also states operational work is doubled, not reduced by half, so only the comparison benefit is correct."
  },
  {
    id: "csc312_ch2_135",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is one of the two types of documentation prepared for a system?",
    options: [
      "System Documentation",
      "Marketing Documentation",
      "Shareholder Documentation",
      "Legal Litigation Documentation"
    ],
    correctAnswer: 0,
    explanation: "The Documentation section states there are generally two types of documentation: User or Operator Documentation, and System Documentation.\n\nMarketing Documentation is not one of the two types listed in this section.\n\nShareholder Documentation is not one of the two types listed in this section.\n\nLegal Litigation Documentation is not one of the two types listed in this section."
  },
  {
    id: "csc312_ch2_136",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "User Documentation includes which of the following?",
    options: [
      "The internal source code comments only",
      "Major error messages likely to be encountered by users",
      "The database's physical indexing scheme",
      "The system's internal network topology"
    ],
    correctAnswer: 1,
    explanation: "The User Documentation section states it includes the major error messages likely to be encountered by users, alongside a complete description of the system from the user's point of view.\n\nInternal source code comments are part of System Documentation, not User Documentation.\n\nThe database's physical indexing scheme is a System Documentation detail, not User Documentation.\n\nThe system's internal network topology is a System Documentation detail, not User Documentation."
  },
  {
    id: "csc312_ch2_137",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of maintenance is described as fixing bugs?",
    options: [
      "Adaptive",
      "Perfective",
      "Corrective",
      "Preventive"
    ],
    correctAnswer: 2,
    explanation: "The Four Maintenance Types table describes Corrective maintenance as fixing defects and errors, with patching a login bug as its example.\n\nAdaptive maintenance is described as adjusting to environment changes, not fixing bugs.\n\nPerfective maintenance is described as enhancing functionality or performance, not fixing bugs.\n\nPreventive maintenance is described as avoiding future problems, not fixing existing bugs."
  },
  {
    id: "csc312_ch2_138",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of maintenance is described as adjusting the system to a new operating system or hardware?",
    options: [
      "Corrective",
      "Perfective",
      "Preventive",
      "Adaptive"
    ],
    correctAnswer: 3,
    explanation: "The Four Maintenance Types table describes Adaptive maintenance as adjusting to environment changes, with an OS compatibility update as its example.\n\nCorrective maintenance is described as fixing defects and errors, not adjusting to environment changes.\n\nPerfective maintenance is described as enhancing functionality or performance, not adjusting to environment changes.\n\nPreventive maintenance is described as avoiding future problems, not adjusting to a new operating system."
  },
  {
    id: "csc312_ch2_139",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of maintenance is described as enhancing functionality or performance, such as adding a dark mode feature?",
    options: [
      "Perfective",
      "Corrective",
      "Adaptive",
      "Preventive"
    ],
    correctAnswer: 0,
    explanation: "The Four Maintenance Types table describes Perfective maintenance as enhancing functionality or performance, with adding a dark mode feature as its example.\n\nCorrective maintenance is described as fixing defects and errors, not adding new features.\n\nAdaptive maintenance is described as adjusting to environment changes, not enhancing functionality.\n\nPreventive maintenance is described as avoiding future problems, not adding new features."
  },
  {
    id: "csc312_ch2_140",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of maintenance is described as avoiding future problems, such as refactoring legacy code?",
    options: [
      "Corrective",
      "Preventive",
      "Adaptive",
      "Perfective"
    ],
    correctAnswer: 1,
    explanation: "The Four Maintenance Types table describes Preventive maintenance as avoiding future problems, with refactoring legacy code as its example.\n\nCorrective maintenance is described as fixing defects and errors, not avoiding future problems.\n\nAdaptive maintenance is described as adjusting to environment changes, not avoiding future problems generally.\n\nPerfective maintenance is described as enhancing functionality or performance, not avoiding future problems."
  },
  {
    id: "csc312_ch2_141",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the maintenance cost breakdown given, Corrective maintenance accounts for the highest percentage of maintenance cost.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Maintenance Cost Breakdown table lists Corrective maintenance at only 20%; Perfective maintenance is the highest at 40%, described as the highest business value."
  },
  {
    id: "csc312_ch2_142",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the maintenance cost breakdown, which maintenance type is described as the most underfunded, at 15%?",
    options: [
      "Corrective",
      "Adaptive",
      "Preventive",
      "Perfective"
    ],
    correctAnswer: 2,
    explanation: "The Maintenance Cost Breakdown table lists Preventive maintenance at 15%, noted as the most underfunded.\n\nCorrective maintenance is listed at 20%, noted as most urgent but least strategic, not the most underfunded.\n\nAdaptive maintenance is listed at 25%, driven by external changes, not the most underfunded.\n\nPerfective maintenance is listed at 40%, the highest business value, not the most underfunded."
  },
  {
    id: "csc312_ch2_143",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the maintenance process flow described, which step comes immediately after Impact Analysis?",
    options: [
      "Change Request",
      "Approval",
      "Testing",
      "Documentation"
    ],
    correctAnswer: 1,
    explanation: "The Maintenance Process Flow lists the order as Change Request, Impact Analysis, Approval, Implementation, Testing, and Documentation, so Approval comes directly after Impact Analysis.\n\nChange Request is the first step, listed before Impact Analysis, not after it.\n\nTesting is listed as the fifth step, after Implementation, not directly after Impact Analysis.\n\nDocumentation is listed as the sixth and final step, not directly after Impact Analysis."
  },
  {
    id: "csc312_ch2_144",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What percentage of total SDLC effort is stated to occur post-deployment?",
    options: [
      "60 to 75 percent",
      "5 to 10 percent",
      "90 to 95 percent",
      "Less than 1 percent"
    ],
    correctAnswer: 0,
    explanation: "The Why Maintenance Matters section cites an IEEE statistic that 60-75% of total SDLC effort occurs post-deployment.\n\n5 to 10 percent understates the cited figure significantly.\n\n90 to 95 percent overstates the cited figure.\n\nLess than 1 percent contradicts the section's emphasis that most SDLC effort happens after deployment, not almost none of it."
  },
  {
    id: "csc312_ch2_145",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a solution to legacy system documentation gaps?",
    options: [
      "Ignoring the legacy system entirely",
      "Reverse engineering tools",
      "Immediate full system replacement",
      "Removing all monitoring"
    ],
    correctAnswer: 1,
    explanation: "The Maintenance Key Challenges table pairs legacy system documentation gaps with reverse engineering tools as the solution.\n\nIgnoring the legacy system entirely is not the listed solution and contradicts the goal of addressing the challenge.\n\nImmediate full system replacement is not the listed solution for this specific challenge.\n\nRemoving all monitoring is not listed as a solution to any challenge in this table; monitoring tools such as New Relic and Prometheus are listed as maintenance techniques instead."
  },
  {
    id: "csc312_ch2_146",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a systems development guideline?",
    options: [
      "Ignore user feedback entirely",
      "Involve users",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Systems Development Guidelines section lists involving users among its six listed guidelines. Ignoring user feedback entirely directly contradicts this guideline, so only involving users is correct."
  },
  {
    id: "csc312_ch2_147",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Summary: SDLC Methodology section, the deliverable of the Systems Analysis Phase is described as specifications of which of the following?",
    options: [
      "The proposed system only",
      "The final deployed system",
      "The present system",
      "The rollback plan"
    ],
    correctAnswer: 2,
    explanation: "The Summary: SDLC Methodology section states the Systems Analysis Phase investigates the present system and documents its specifications, describing how it works and what it does.\n\nSpecifications of the proposed system only are the deliverable of the Systems Design Phase, not Systems Analysis.\n\nThe final deployed system is not the deliverable described for this phase; the phase produces specifications, not the system itself.\n\nA rollback plan is a Deployment-related artifact, not the Systems Analysis Phase deliverable."
  },
  {
    id: "csc312_ch2_148",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Summary: SDLC Methodology section, the deliverable of the Systems Design Phase must describe both what the proposed system will do and which of the following?",
    options: [
      "How much it will cost to advertise",
      "Who will be hired to sell it",
      "What color scheme it will use",
      "How it will work"
    ],
    correctAnswer: 3,
    explanation: "The Summary: SDLC Methodology section states the Systems Design Phase output must describe both WHAT the proposed system will do and HOW it will work.\n\nAdvertising cost is not part of the WHAT/HOW description given for this phase's deliverable.\n\nSales staffing is not part of the WHAT/HOW description given for this phase's deliverable.\n\nColor scheme is a UI/UX detail, not part of the WHAT/HOW description given for this phase's deliverable."
  },
  {
    id: "csc312_ch2_149",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A methodology is defined as which of the following?",
    options: [
      "A formalized approach or series of steps",
      "A single programming language",
      "A type of hardware architecture",
      "A category of database index"
    ],
    correctAnswer: 0,
    explanation: "The What is a Methodology section defines it as a formalized approach or series of steps.\n\nA single programming language is a much narrower concept than the formalized approach described.\n\nA type of hardware architecture is not the definition given for a methodology in this section.\n\nA category of database index is not the definition given for a methodology in this section."
  },
  {
    id: "csc312_ch2_150",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the methodology spectrum described, which methodology is placed on the Agile (Adaptive) end, alongside Kanban and DevOps/CI/CD?",
    options: [
      "Waterfall",
      "Scrum",
      "V-Model",
      "Structured Design"
    ],
    correctAnswer: 1,
    explanation: "The Methodology Spectrum table places Scrum on the Agile (Adaptive) end, alongside Kanban and DevOps/CI/CD.\n\nWaterfall is placed on the Traditional (Predictive) end of the spectrum, not the Agile end.\n\nThe V-Model is placed on the Traditional (Predictive) end of the spectrum, not the Agile end.\n\nStructured Design is described elsewhere as a category where projects move methodically step by step, aligning with the Traditional end, not the Agile end."
  }
  ,
  {
    id: "csc312_ch2_151",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the three main categories of system development methodologies?",
    options: [
      "Rapid Application Development",
      "Marketing-Driven Development",
      "Sales-Oriented Development",
      "Finance-Led Development"
    ],
    correctAnswer: 0,
    explanation: "The System Development Methodologies Categories section lists Structured Design, Rapid Application Development, and Agile Development as the three main categories.\n\nMarketing-Driven Development is not one of the three listed categories.\n\nSales-Oriented Development is not one of the three listed categories.\n\nFinance-Led Development is not one of the three listed categories."
  },
  {
    id: "csc312_ch2_152",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The V-Model is described as having which key feature?",
    options: [
      "Late test planning only after deployment",
      "No testing phases at all",
      "Random, unstructured testing",
      "Early test planning, with parallel development and testing phases"
    ],
    correctAnswer: 3,
    explanation: "The V-Model (Verification & Validation) section lists early test planning as its key feature, with a structure of parallel development and testing phases.\n\nLate test planning only after deployment contradicts the key feature of early test planning.\n\nThe V-Model's entire structure is built around testing phases paired with development, so it does not have no testing phases at all.\n\nThe V-Model's symmetrical structure, pairing each development phase with a testing phase, contradicts random, unstructured testing."
  },
  {
    id: "csc312_ch2_153",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the V-Model diagram described, the Design phase pairs with System Testing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The V-Model Visual section shows Design paired with System Testing, alongside Requirements paired with Acceptance Testing, and Coding paired with Unit Testing."
  },
  {
    id: "csc312_ch2_154",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed among the SDLC models in the SDLC Models overview?",
    options: [
      "Spiral (Risk-focused)",
      "Marketing Model",
      "Sales Funnel Model",
      "Customer Loyalty Model"
    ],
    correctAnswer: 0,
    explanation: "The SDLC Models section lists Waterfall, RAD, Agile, Spiral (Risk-focused), V-Model, and DevOps as the SDLC models.\n\nA Marketing Model is not one of the six listed SDLC models.\n\nA Sales Funnel Model is not one of the six listed SDLC models.\n\nA Customer Loyalty Model is not one of the six listed SDLC models."
  },
  {
    id: "csc312_ch2_155",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Waterfall Model phases listed, which phase comes immediately after Design?",
    options: [
      "Requirements",
      "Implementation",
      "Testing",
      "Maintenance"
    ],
    correctAnswer: 1,
    explanation: "The Waterfall Model Phases list the sequential order as Requirements, Design, Implementation, Testing, and Maintenance, so Implementation directly follows Design.\n\nRequirements is listed before Design, not after it.\n\nTesting is listed after Implementation, not directly after Design.\n\nMaintenance is the final listed phase, not directly after Design."
  },
  {
    id: "csc312_ch2_156",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a pro of the Waterfall method?",
    options: [
      "Design must be specified on paper before programming begins",
      "Long time between proposal and delivery",
      "Identifies systems requirements long before programming begins",
      "High risk of requirement changes mid-project"
    ],
    correctAnswer: 2,
    explanation: "The Pros and Cons of the Waterfall Method table lists identifying systems requirements long before programming begins as a pro.\n\nDesign being specified on paper before programming begins is listed as a con, not a pro.\n\nA long time between proposal and delivery is listed as a con, not a pro.\n\nHigh risk of mid-project requirement changes is not listed in this table; Waterfall's inflexibility to change is instead listed as a con elsewhere."
  },
  {
    id: "csc312_ch2_157",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a critical element of Rapid Application Development (RAD)?",
    options: [
      "Waterfall documentation",
      "Manual paper filing",
      "Six Sigma certification",
      "CASE tools"
    ],
    correctAnswer: 3,
    explanation: "The Rapid Application Development section lists CASE tools among its four critical elements, alongside JAD sessions, fourth generation programming languages, and code generators.\n\nWaterfall documentation is associated with the Waterfall Model, not listed as a RAD critical element.\n\nManual paper filing is not listed as a RAD critical element.\n\nSix Sigma certification is not listed as a RAD critical element."
  },
  {
    id: "csc312_ch2_158",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a category of Rapid Application Development?",
    options: [
      "Phased development",
      "Direct changeover",
      "Blue-Green deployment",
      "Canary release"
    ],
    correctAnswer: 0,
    explanation: "The Rapid Application Development Categories section lists phased development and prototyping as the two RAD categories.\n\nDirect changeover is a changeover strategy discussed elsewhere, not a RAD category.\n\nBlue-Green deployment is a deployment strategy discussed elsewhere, not a RAD category.\n\nCanary release is a deployment strategy discussed elsewhere, not a RAD category."
  },
  {
    id: "csc312_ch2_159",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a type of prototyping under RAD's Prototyping category?",
    options: [
      "Waterfall prototyping",
      "Big Bang prototyping",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Rapid Application Development Categories section lists exactly three types under Prototyping: system prototyping, throw-away prototyping, and design prototyping. Neither Waterfall prototyping nor Big Bang prototyping appears among them, so this exhaustive list contradicts both, making None of these correct."
  },
  {
    id: "csc312_ch2_160",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Agile development is defined as which of the following?",
    options: [
      "A strictly linear, sequential process",
      "Simple iterative and incremental application development",
      "A process with no customer involvement",
      "A process requiring extensive upfront documentation only"
    ],
    correctAnswer: 1,
    explanation: "The Agile Development section defines it as simple iterative and incremental application development.\n\nA strictly linear, sequential process describes Waterfall, not Agile.\n\nAgile's pros list customer involvement as a strength, contradicting a claim of no customer involvement.\n\nAgile's cons list requiring high engagement rather than extensive upfront documentation, and its core values favor working software over comprehensive documentation."
  },
  {
    id: "csc312_ch2_161",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed among the Agile Manifesto's four core values?",
    options: [
      "Comprehensive documentation over working software",
      "Contract negotiation over customer collaboration",
      "Responding to change over following a plan",
      "Following a plan over responding to change"
    ],
    correctAnswer: 2,
    explanation: "The 4 Core Values section lists responding to change over following a plan as one of the four Agile Manifesto values.\n\nThe listed value is working software over comprehensive documentation, the reverse of this option.\n\nThe listed value is customer collaboration over contract negotiation, the reverse of this option.\n\nThe listed value favors responding to change over following a plan, the reverse of this option."
  },
  {
    id: "csc312_ch2_162",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which Agile framework is described as using a visual workflow with WIP limits and continuous flow?",
    options: [
      "Scrum",
      "Extreme Programming",
      "DevOps",
      "Kanban"
    ],
    correctAnswer: 3,
    explanation: "The Popular Agile Frameworks table describes Kanban as using a visual workflow with WIP limits, with continuous flow as its cadence.\n\nScrum is described as using sprints and a product backlog, with a 2-4 week cadence, not a continuous visual workflow.\n\nExtreme Programming is described as using pair programming and TDD, with a 1-2 week cadence, not a visual workflow.\n\nDevOps is a separate methodology focused on bridging development and operations, not listed in this Agile frameworks table."
  },
  {
    id: "csc312_ch2_163",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which Agile framework is described as using sprints and a product backlog with a 2-4 week cadence?",
    options: [
      "Scrum",
      "Kanban",
      "Extreme Programming",
      "DevOps"
    ],
    correctAnswer: 0,
    explanation: "The Popular Agile Frameworks table describes Scrum as using sprints and a product backlog, with a 2-4 week cadence.\n\nKanban is described as a visual workflow with continuous flow, not sprints and a backlog.\n\nExtreme Programming is described as pair programming and TDD, with a 1-2 week cadence, not sprints and a backlog.\n\nDevOps is not listed in this Agile frameworks table at all."
  },
  {
    id: "csc312_ch2_164",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a key principle of Extreme Programming (XP)?",
    options: [
      "Working entirely alone with no pairing",
      "Simple coding by pairs of developers",
      "Avoiding all testing until release",
      "Large teams of over 50 developers"
    ],
    correctAnswer: 1,
    explanation: "The Extreme Programming (XP) Key Principles section lists simple coding by pairs of developers among its three key principles, alongside continuous testing and close interaction with end users.\n\nWorking entirely alone contradicts the key principle of coding by pairs.\n\nAvoiding all testing until release contradicts the key principle of continuous testing.\n\nXP is later described as requiring small groups of developers, no more than ten, contradicting large teams of over 50."
  },
  {
    id: "csc312_ch2_165",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Extreme Programming is described as requiring which of the following?",
    options: [
      "Large, inexperienced teams",
      "No direct interaction with end users",
      "Small groups of developers, no more than ten",
      "A strictly sequential, non-iterative process"
    ],
    correctAnswer: 2,
    explanation: "The Extreme Programming (XP) Requires section states it requires stable and experienced teams, and small groups of developers, no more than ten.\n\nThe section requires stable and experienced teams, contradicting large, inexperienced teams.\n\nXP's key principles list close interactions with end users, contradicting no direct interaction.\n\nXP is an Agile framework built around iteration, not a strictly sequential, non-iterative process."
  },
  {
    id: "csc312_ch2_166",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "DevOps aims to bridge development and operations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The DevOps Methodology section explicitly states its goal is to bridge development and operations."
  },
  {
    id: "csc312_ch2_167",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a DevOps metric?",
    options: [
      "Number of office holidays",
      "Employee satisfaction survey score",
      "Annual marketing spend",
      "Mean Time To Recovery (MTTR)"
    ],
    correctAnswer: 3,
    explanation: "The DevOps Methodology section lists Mean Time To Recovery among its two listed metrics, alongside deployment frequency.\n\nThe number of office holidays is not a DevOps metric listed in this section.\n\nAn employee satisfaction survey score is not a DevOps metric listed in this section.\n\nAnnual marketing spend is not a DevOps metric listed in this section."
  },
  {
    id: "csc312_ch2_168",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Water-Scrum-Fall is described as combining which of the following?",
    options: [
      "Waterfall planning with Agile execution",
      "Two separate Agile teams working independently",
      "Pure Waterfall with no Agile elements",
      "Pure Agile with no Waterfall elements"
    ],
    correctAnswer: 0,
    explanation: "The Hybrid Approaches section describes Water-Scrum-Fall as combining Waterfall planning with Agile execution.\n\nTwo separate Agile teams working independently is not the description given for this hybrid approach.\n\nThe hybrid nature of Water-Scrum-Fall contradicts a description of pure Waterfall with no Agile elements.\n\nThe hybrid nature of Water-Scrum-Fall contradicts a description of pure Agile with no Waterfall elements."
  },
  {
    id: "csc312_ch2_169",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Agilefall is described as combining approximately which proportions?",
    options: [
      "50% Agile and 50% Waterfall documentation",
      "80% Agile and 20% Waterfall documentation",
      "20% Agile and 80% Waterfall documentation",
      "100% Agile with no Waterfall documentation"
    ],
    correctAnswer: 1,
    explanation: "The Hybrid Approaches section describes Agilefall as 80% Agile plus 20% Waterfall documentation.\n\nA 50/50 split is not the proportion given for Agilefall in this section.\n\nA 20% Agile and 80% Waterfall split reverses the actual proportions given.\n\n100% Agile with no Waterfall documentation contradicts the description of Agilefall as a hybrid that still includes some Waterfall documentation."
  },
  {
    id: "csc312_ch2_170",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a factor to consider when selecting a hybrid approach?",
    options: [
      "Employee birthday calendar",
      "Office parking availability",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Hybrid Approaches Selection Criteria section lists exactly four factors: Requirements Stability, Team Size, Risk Tolerance, and Regulatory Needs. Neither an employee birthday calendar nor office parking availability appears among them, so this exhaustive list contradicts both, making None of these correct."
  },
  {
    id: "csc312_ch2_171",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a factor influencing methodology selection in the Selecting the Appropriate Methodology section?",
    options: [
      "Company logo color",
      "CEO's favorite programming language",
      "Clarity of User Requirements",
      "Office building location"
    ],
    correctAnswer: 2,
    explanation: "The Selecting the Appropriate Methodology section lists Clarity of User Requirements among its six listed factors, alongside familiarity with technology, system complexity, system reliability, and time schedules.\n\nCompany logo color is not one of the six listed factors.\n\nThe CEO's favorite programming language is not one of the six listed factors.\n\nOffice building location is not one of the six listed factors."
  },
  {
    id: "csc312_ch2_172",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as an SDLC alternative?",
    options: [
      "Direct Changeover",
      "Blue-Green Deployment",
      "Canary Release",
      "Incremental Development"
    ],
    correctAnswer: 3,
    explanation: "The SDLC Alternatives section lists Prototyping, Incremental Development, Agile, and Scrum as the four SDLC alternatives.\n\nDirect Changeover is a changeover strategy discussed elsewhere, not one of the four listed SDLC alternatives.\n\nBlue-Green Deployment is a deployment strategy discussed elsewhere, not one of the four listed SDLC alternatives.\n\nCanary Release is a deployment strategy discussed elsewhere, not one of the four listed SDLC alternatives."
  },
  {
    id: "csc312_ch2_173",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team role is described as responsible for business value?",
    options: [
      "Business analyst",
      "Infrastructure analyst",
      "Change management analyst",
      "Project manager"
    ],
    correctAnswer: 0,
    explanation: "The Project Team Roles table describes the Business analyst as responsible for business value.\n\nThe Infrastructure analyst is described as handling technical issues, not business value specifically.\n\nThe Change management analyst is described as handling people and management issues, not business value.\n\nThe Project manager is described as handling budget, time, planning, and managing, not business value specifically."
  },
  {
    id: "csc312_ch2_174",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team role handles technical issues, such as how the system interacts with the organization's hardware, software, networks, and databases?",
    options: [
      "Business analyst",
      "Infrastructure analyst",
      "Change management analyst",
      "Systems analyst"
    ],
    correctAnswer: 1,
    explanation: "The Project Team Roles table describes the Infrastructure analyst as responsible for technical issues, specifically how the system interacts with hardware, software, networks, and databases.\n\nThe Business analyst is described as responsible for business value, not technical infrastructure issues.\n\nThe Change management analyst is described as handling people and management issues, not technical infrastructure.\n\nThe Systems analyst is described as handling IS issues generally, a distinct role from the specifically technical Infrastructure analyst."
  },
  {
    id: "csc312_ch2_175",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team role is described as handling people and management issues?",
    options: [
      "Business analyst",
      "Infrastructure analyst",
      "Change management analyst",
      "Project manager"
    ],
    correctAnswer: 2,
    explanation: "The Project Team Roles table describes the Change management analyst as responsible for people and management issues.\n\nThe Business analyst is described as responsible for business value, not people and management issues.\n\nThe Infrastructure analyst is described as handling technical issues, not people and management issues.\n\nThe Project manager is described as handling budget, time, planning, and managing, a distinct focus from people and management issues specifically."
  },
  {
    id: "csc312_ch2_176",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team role is described as responsible for budget, time, planning, and managing the project?",
    options: [
      "Business analyst",
      "Systems analyst",
      "Infrastructure analyst",
      "Project manager"
    ],
    correctAnswer: 3,
    explanation: "The Project Team Roles table describes the Project manager as responsible for budget, time, planning, and managing.\n\nThe Business analyst is described as responsible for business value, not budget and project management.\n\nThe Systems analyst is described as handling IS issues, not budget and project management specifically.\n\nThe Infrastructure analyst is described as handling technical issues, not budget and project management."
  },
  {
    id: "csc312_ch2_177",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "There are exactly five major project team roles.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The Project Team Roles section explicitly states there are five major roles: business analyst, systems analyst, infrastructure analyst, change management analyst, and project manager."
  },
  {
    id: "csc312_ch2_178",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is listed as a best practice in the Best Practices section?",
    options: [
      "Involve stakeholders early",
      "Delay documentation indefinitely",
      "Test only once at the very end",
      "Deprioritize security until after launch"
    ],
    correctAnswer: 0,
    explanation: "The Best Practices section lists involving stakeholders early among its four listed best practices, alongside documenting thoroughly, testing continuously, and prioritizing security.\n\nThe section recommends documenting thoroughly, the opposite of delaying documentation indefinitely.\n\nThe section recommends testing continuously, the opposite of testing only once at the very end.\n\nThe section recommends prioritizing security, the opposite of deprioritizing it until after launch."
  },
  {
    id: "csc312_ch2_179",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The Summary states the SDLC consists of which four stages?",
    options: [
      "Planning, Coding, Testing, Retirement",
      "Planning, Analysis, Design, and Implementation",
      "Design, Coding, Deployment, Support",
      "Analysis, Testing, Deployment, Sales"
    ],
    correctAnswer: 1,
    explanation: "The Summary section states the SDLC consists of four stages: Planning, Analysis, Design, and Implementation.\n\nCoding and Retirement are not the terms used in this four-stage summary.\n\nDesign, Coding, Deployment, and Support do not match the four stages named in this summary.\n\nAnalysis, Testing, Deployment, and Sales do not match the four stages named in this summary."
  },
  {
    id: "csc312_ch2_180",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is stated in the Summary as a methodology suited for a particular kind of project?",
    options: [
      "Waterfall for startups",
      "Waterfall for regulated projects",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Summary section states the model should be chosen based on project needs, pairing Waterfall with regulated projects and Agile with startups. Pairing Waterfall with startups reverses this stated pairing, so only Waterfall for regulated projects is correct."
  }
];

export default csc312Lecture3Questions;
