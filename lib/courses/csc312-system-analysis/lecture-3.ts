import { QuestionV2 } from "@/lib/quiz-types";

const csc312Letcure3: QuestionV2[] = [
  {
    id: "csc312_ch2_001",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following describes the appropriate balance that the CSC 312 course seeks to establish as a basis for further study in Information Systems?",
    options: [
      "An appropriate balance of technical and organizational perspectives",
      "An exclusive focus on advanced programming languages and code execution",
      "A balance between database administration and network hardware security",
      "A primary emphasis on financial accounting and corporate management",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Recap on Learning Objectives slide, this course is designed to provide an appropriate balance of technical and organizational perspectives.\n\nAdvanced programming and code execution represent a purely technical focus that ignores the organizational side of information systems.\n\nDatabase administration and network security focus on specific operational IT domains rather than the systemic SAD balance.\n\nFinancial accounting and corporate management represent a purely organizational focus that lacks the technical system analysis component.",
  },
  {
    id: "csc312_ch2_002",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the context of the course learning objectives, a UML model is defined as which of the following?",
    options: [
      "An abstract representation of the source code",
      "A physical compilation of executable binary code",
      "A user interface prototype designed for client testing",
      "A legal document outlining project delivery schedules",
    ],
    correctAnswer: 0,
    explanation:
      "The learning objectives section states that a key skill is to create a UML model that is an abstract representation of the source code.\n\nExecutable binary code represents the compiled physical software, not a conceptual UML model.\n\nA user interface prototype is an interactive mock-up of screens, not a UML representation of system classes or flows.\n\nA legal document outlining delivery schedules represents a project charter or contract, not a UML model.",
  },
  {
    id: "csc312_ch2_003",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the course focus on the Software Development Cycle, which two phases are the central focus of this course?",
    options: [
      "Analysis and Design",
      "Planning and Implementation",
      "Testing and Maintenance",
      "Planning and Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "The Software Development Cycle slide explicitly lists Phase 2 (Analysis) and Phase 3 (Design) as the core focus of the course.\n\nPlanning and Implementation are Phases 1 and 4, which are outside the central core focus of this course.\n\nTesting and Maintenance represent Phases 5 and 6, which are critical post-design activities but not the primary course focus.\n\nPlanning and Analysis omits the crucial Design phase, which is the primary transition to building systems.",
  },
  {
    id: "csc312_ch2_004",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What does the course slide identify as the primary reason why many failed information systems were ultimately abandoned?",
    options: [
      "Analysts tried to build wonderful systems without understanding the business",
      "Developers used outdated programming languages and slow compilers",
      "Organizations lacked the financial resources to purchase high-end servers",
      "Users refused to undergo the required software training programs",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Ideas section states that many failed systems were abandoned because analysts tried to build wonderful systems without understanding the business.\n\nOutdated programming languages and slow compilers represent technical development challenges, not the main reason for system abandonment stated in the slides.\n\nLack of financial resources for servers is an economic constraint, not the analytical business-understanding failure highlighted in the slides.\n\nUser training resistance represents an operational risk, but the slides focus on the analyst's lack of business understanding as the primary failure point.",
  },
  {
    id: "csc312_ch2_005",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is classified as a Knowledge Level system in the system hierarchy?",
    options: [
      "Office Automation System (OAS)",
      "Executive Support System (ESS)",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels section of the slides classifies the Office Automation System (OAS) and the Knowledge Work System (KWS) under the Knowledge Level. The Executive Support System (ESS) is classified under the Strategic Level, meaning only Option 1 is a valid choice.",
  },
  {
    id: "csc312_ch2_006",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is defined as the primary, overriding goal of a systems analyst when developing a new information system?",
    options: [
      "To create value for the organization",
      "To write the maximum volume of clean source code",
      "To replace all human employees with automated software",
      "To implement the most expensive hardware available",
    ],
    correctAnswer: 0,
    explanation:
      "Under Key Ideas, the slides state that the primary goal of systems development is to create value for the organization.\n\nWriting a high volume of clean source code is a developer's productivity metric, not the overall business value-driven goal of SAD.\n\nReplacing human employees with automation is not a stated primary goal of SAD; systems are built to support business processes.\n\nImplementing expensive hardware is a physical implementation choice, which does not guarantee value creation.",
  },
  {
    id: "csc312_ch2_007",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the systems analysis principles in Lecture 3, how is quality defined in systems development?",
    options: [
      "Quality is the satisfaction of requirements",
      "Quality is an abstract standard of aesthetic goodness",
      "Quality is the execution speed of database queries",
      "Quality is the absolute minimization of development costs",
    ],
    correctAnswer: 0,
    explanation:
      "The Key Ideas section states explicitly that quality is satisfaction of requirements, not abstract goodness.\n\nAesthetic goodness is a subjective design quality, which the slides state is not how system quality is defined.\n\nDatabase query speed represents a performance technical metric, which falls under non-functional requirements rather than the broad definition of quality.\n\nCost minimization represents financial efficiency, which is a project constraint rather than the definition of quality.",
  },
  {
    id: "csc312_ch2_008",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following best describes the role of a systems analyst as outlined in Module 1 Lecture 3?",
    options: [
      "A key person who analyzes the business, identifies opportunities for improvement, and designs information systems",
      "A professional responsible for writing unit tests and debugging syntax errors in source code",
      "An executive who makes final investment decisions and authorizes company budgets",
      "A technician who physical constructs local area network cabling and configures routers",
    ],
    correctAnswer: 0,
    explanation:
      "Under Key Ideas, the systems analyst is defined as a key person analyzing the business, identifying opportunities for improvement, and designing information systems.\n\nWriting unit tests and debugging syntax errors describes the primary role of a Software Engineer or QA Tester.\n\nAuthorizing company budgets and making final investment decisions describes a Strategic Sponsor or Executive Executive, not a systems analyst.\n\nConstructing local area network cabling and configuring hardware describes a Network Technician.",
  },
  {
    id: "csc312_ch2_009",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A systems development team is currently defining the project scope, conducting feasibility studies, and establishing a project charter. Which SDLC phase is this team executing?",
    options: ["Planning", "Analysis", "Design", "Implementation"],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases slide defines Phase 1 (Planning) as the stage where the business case is established, project scope is defined, and feasibility is analyzed.\n\nAnalysis is Phase 2, which focuses on detailed requirements gathering and business process modeling.\n\nDesign is Phase 3, which focuses on logical structures and physical technical blueprints.\n\nImplementation is Phase 4, which focuses on coding and configuring the physical system.",
  },
  {
    id: "csc312_ch2_010",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which document represents the primary deliverable produced at the end of the Planning phase of the SDLC?",
    options: [
      "Feasibility Study and Project Plan",
      "System Requirements Document",
      "Logical Entity Relationship Diagrams",
      "Source Code and Test Scripts",
    ],
    correctAnswer: 0,
    explanation:
      "According to the SDLC Phases deliverables section, the Feasibility Study, Project Charter, and Project Plan are the deliverables of the Planning phase.\n\nSystem Requirements Document is the primary deliverable of Phase 2 (Analysis).\n\nLogical Entity Relationship Diagrams are deliverables of Phase 3 (Design).\n\nSource Code and Test Scripts are deliverables of Phase 4 (Implementation) and Phase 5 (Testing).",
  },
  {
    id: "csc312_ch2_011",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Quality in systems development is defined as the satisfaction of requirements rather than some abstract concept of goodness.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "According to the Key Ideas slide, 'Quality is satisfaction of requirements, not \"goodness\".' This means a system is of high quality if it does exactly what the stakeholders required of it.",
  },
  {
    id: "csc312_ch2_012",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A systems analyst is currently conducting stakeholder interviews, modeling data flows, and drafting Use Cases. What phase of the SDLC does this represent?",
    options: ["Analysis", "Planning", "Design", "Testing"],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases section states that Phase 2 (Analysis) is where the analyst gathers detailed user requirements and models business processes.\n\nPlanning is Phase 1, which focuses on high-level feasibility and project scheduling, not detailed process modeling.\n\nDesign is Phase 3, which translates those modeled processes into technical architectures and physical database schemas.\n\nTesting is Phase 5, which executes validation scripts against completed software.",
  },
  {
    id: "csc312_ch2_013",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is the key deliverable generated at the conclusion of the Analysis phase of the SDLC?",
    options: [
      "System Requirements Document",
      "Project Charter",
      "Design Specification Document",
      "Working Software Prototype",
    ],
    correctAnswer: 0,
    explanation:
      "The SDLC deliverables slide specifies that the main deliverable of Phase 2 (Analysis) is the System Requirements Document (also known as SRD or SRS).\n\nProject Charter is generated during Phase 1 (Planning) to officially authorize the project.\n\nDesign Specification Document is the primary deliverable of Phase 3 (Design).\n\nWorking Software Prototype is a deliverable of prototyping iterations or the beginning of Phase 4 (Implementation).",
  },
  {
    id: "csc312_ch2_014",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "During which SDLC phase does the systems analyst create the high-level system architecture, design user interfaces, and outline database schemas?",
    options: ["Design", "Analysis", "Planning", "Implementation"],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases slide outlines Phase 3 (Design) as the stage where high-level architectural models, low-level module specifications, and physical schemas are created.\n\nAnalysis is Phase 2, which documents requirements without detailing the technical implementation designs.\n\nPlanning is Phase 1, which establishes viability and project plans prior to any architectural design.\n\nImplementation is Phase 4, which involves developers programming and building the database based on the design diagrams.",
  },
  {
    id: "csc312_ch2_015",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The Design Specification Document is the primary deliverable of which phase of the Systems Development Life Cycle?",
    options: ["Design", "Analysis", "Planning", "Implementation"],
    correctAnswer: 0,
    explanation:
      "The SDLC deliverables slide lists the Design Specification Document as the direct output of Phase 3 (Design).\n\nAnalysis yields the System Requirements Document, which outlines what the system must do.\n\nPlanning yields the Feasibility Study, Project Plan, and Charter to initiate the project.\n\nImplementation yields the compiled source code, physical database, and technical logs.",
  },
  {
    id: "csc312_ch2_016",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In which SDLC phase do programmers write the actual application code, construct database tables, and configure server instances?",
    options: ["Implementation", "Design", "Testing", "Maintenance"],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases slide defines Phase 4 (Implementation) as the stage where programming, database construction, and initial system installation occur.\n\nDesign is Phase 3, where specifications and mock-ups are drawn but no actual production code is written.\n\nTesting is Phase 5, where code is run and evaluated to identify defects and bugs.\n\nMaintenance is Phase 6, where deployed systems are patched, updated, and supported in production.",
  },
  {
    id: "csc312_ch2_017",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is classified as a Strategic Level system in system hierarchy?",
    options: [
      "Transaction Processing System (TPS)",
      "Executive Support System (ESS)",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "According to the System Levels section of the slides, the Executive Support System (ESS) is positioned at the top of the hierarchy under the Strategic Level. The Transaction Processing System (TPS) is located at the very bottom under the Operational Level.",
  },
  {
    id: "csc312_ch2_018",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is the primary objective of Phase 5 (Testing & Integration) of the Systems Development Life Cycle (SDLC)?",
    options: [
      "To verify and validate that the system is free of bugs and meets the required specifications",
      "To write the core source code modules and construct the initial SQL database",
      "To gather initial requirements from stakeholders and define the project scope boundaries",
      "To deploy the fully completed system to production and conduct ongoing user support",
    ],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases section outlines Phase 5 (Testing & Integration) as the stage dedicated to ensuring system reliability, correcting defects, and performing verification and validation.\n\nWriting core source code and constructing databases are activities of Phase 4 (Implementation).\n\nGathering requirements and defining scope boundaries are activities of Phase 2 (Analysis) and Phase 1 (Planning).\n\nDeploying the system and conducting ongoing user support are activities of Phase 6 (Deployment) and Phase 7 (Maintenance).",
  },
  {
    id: "csc312_ch2_019",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A software application is currently deployed in production. Users report a critical database calculation error, and a developer is assigned to fix it. What SDLC phase does this represent?",
    options: ["Maintenance", "Implementation", "Design", "Testing"],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases slide states that Phase 6 (Maintenance) is concerned with keeping the system operational, fixing bugs post-deployment, and making ongoing enhancements.\n\nImplementation is Phase 4, which involves the initial construction and coding of the system prior to release.\n\nDesign is Phase 3, which focuses on drafting blueprints, long before the system is operational in production.\n\nTesting is Phase 5, which involves finding and correcting bugs in a pre-production testing environment, not on live software already in daily use.",
  },
  {
    id: "csc312_ch2_020",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which type of feasibility assessment asks the fundamental question: 'Is it technically possible to build this system with our available resources?'",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "Operational Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility section outlines Technical Feasibility as the assessment of whether the technology, skills, and resources exist to physically build the system.\n\nEconomic Feasibility asks if the system is financially viable and cost-effective.\n\nOperational Feasibility asks if the organization will accept the system and if it will be used.\n\nLegal Feasibility evaluates whether the system complies with laws, regulations, and existing contracts.",
  },
  {
    id: "csc312_ch2_021",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "An analyst is conducting a cost-benefit analysis to determine if the financial return of a proposed database system justifies its setup cost. What feasibility type is this?",
    options: [
      "Economic Feasibility",
      "Technical Feasibility",
      "Operational Feasibility",
      "Schedule Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility section defines Economic Feasibility as evaluating financial costs, benefits, return on investment, and budget viability (asking 'Is it financially viable?').\n\nTechnical Feasibility evaluates hardware capabilities, developer skills, and technological constraints.\n\nOperational Feasibility evaluates how well the system matches user workflows and if staff will use it.\n\nSchedule Feasibility evaluates whether the system can be completed within required deadlines.",
  },
  {
    id: "csc312_ch2_022",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Assessing whether a proposed registration system will be rejected by university staff due to changes in their daily workflows represents which feasibility category?",
    options: [
      "Operational Feasibility",
      "Technical Feasibility",
      "Economic Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility section states that Operational Feasibility is concerned with user acceptance and organizational fit (asking the key question: 'Will it be used?').\n\nTechnical Feasibility evaluates hardware requirements, software limitations, and developer expertise.\n\nEconomic Feasibility evaluates the costs, savings, and general financial budgets of the project.\n\nLegal Feasibility evaluates regulatory compliance, software licensing, and legal contracts.",
  },
  {
    id: "csc312_ch2_023",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A primary goal of systems analysis is to build the most technically advanced and complex system possible, regardless of business value.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The slides state that 'The primary goal is to create value for the organization,' not to build complexity for its own sake. Building unnecessary complexity without understanding the business leads to failed and abandoned systems.",
  },
  {
    id: "csc312_ch2_024",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Under the Feasibility section of Module 1 Lecture 3, what are the three key questions that an analyst must answer during system planning?",
    options: [
      "Is it technically possible? Is it financially viable? Will it be used?",
      "Which coding language is best? How many tables do we need? Who will write the unit tests?",
      "What is the system boundary? What are the inputs? What are the outputs?",
      "Is the system open? Is there a feedback loop? What are the system constraints?",
    ],
    correctAnswer: 0,
    explanation:
      "According to the study tips and feasibility slides, the three key questions are: 'Is it technically possible? Is it financially viable? Will it be used?'\n\nCoding language, tables, and unit tests are low-level implementation details, not high-level feasibility questions.\n\nBoundary, inputs, and outputs are system elements analyzed during Phase 2 (Analysis), not feasibility checks.\n\nOpenness, feedback loops, and constraints are system concepts used to define environments, not the three core feasibility questions.",
  },
  {
    id: "csc312_ch2_025",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which systems development approach is described as a sequential, highly structured methodology where progress flows linearly downward through rigid phases?",
    options: [
      "Waterfall Model",
      "Agile Methodology",
      "Spiral Model",
      "Prototyping Model",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies section defines the Waterfall Model as a sequential, structured approach where progress flows linearly downward.\n\nAgile Methodology is an iterative, flexible approach centered around continuous feedback and rapid sprints.\n\nSpiral Model is a risk-driven, iterative methodology utilizing repeating quadrant cycles.\n\nPrototyping Model is a design methodology that builds simplified working models to clarify user requirements.",
  },
  {
    id: "csc312_ch2_026",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which development framework is characterized by a parallel, testing-centric structure that maps development phases directly to corresponding testing phases?",
    options: [
      "V-Model",
      "Waterfall Model",
      "Agile Methodology",
      "Spiral Model",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies section outlines the V-Model as an extension of the Waterfall model that maps development (verification) directly to testing (validation) in a parallel structure.\n\nWaterfall Model is a linear model that does not feature a parallel, side-by-side mapping of testing to development.\n\nAgile Methodology is an iterative framework focusing on sprints and customer collaboration rather than parallel validation phases.\n\nSpiral Model is an iterative, risk-driven model utilizing four quadrants, not a parallel testing V-shaped structure.",
  },
  {
    id: "csc312_ch2_027",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is an established core value of the Agile Manifesto as detailed in the course slides?",
    options: [
      "Individuals and interactions over processes and tools",
      "Comprehensive documentation over working software",
      "Following a rigid project plan over responding to change",
      "Contract negotiation over active customer collaboration",
    ],
    correctAnswer: 0,
    explanation:
      "The Agile Core Values slide list 'Individuals and interactions over processes and tools' as one of the four core values of Agile.\n\n'Comprehensive documentation over working software' is the opposite of the Agile value, which prioritizes working software.\n\n'Following a rigid project plan over responding to change' is incorrect; Agile prioritizes responding to change.\n\n'Contract negotiation over active customer collaboration' is incorrect; Agile prioritizes customer collaboration.",
  },
  {
    id: "csc312_ch2_028",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the Agile Manifesto core values, systems development teams should place a higher priority on working software than on what?",
    options: [
      "Comprehensive documentation",
      "Processes and tools",
      "Contract negotiation",
      "Following a rigid plan",
    ],
    correctAnswer: 0,
    explanation:
      "The Agile Core Values slide states that Agile values 'Working software over comprehensive documentation.'\n\nProcesses and tools are valued less than individuals and interactions, not working software.\n\nContract negotiation is valued less than customer collaboration.\n\nFollowing a rigid plan is valued less than responding to change.",
  },
  {
    id: "csc312_ch2_029",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The Agile core values state that customer collaboration should be valued more highly than which of the following?",
    options: [
      "Contract negotiation",
      "Processes and tools",
      "Comprehensive documentation",
      "Following a plan",
    ],
    correctAnswer: 0,
    explanation:
      "The Agile Core Values slide specifies 'Customer collaboration over contract negotiation' as a primary tenet.\n\nProcesses and tools are paired with individuals and interactions in Agile core values.\n\nComprehensive documentation is paired with working software.\n\nFollowing a plan is paired with responding to change.",
  },
  {
    id: "csc312_ch2_030",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the Agile framework, responding to change is prioritized over which of the following activities?",
    options: [
      "Following a plan",
      "Processes and tools",
      "Comprehensive documentation",
      "Contract negotiation",
    ],
    correctAnswer: 0,
    explanation:
      "The Agile Core Values slide states that Agile prioritizes 'Responding to change over following a plan.'\n\nProcesses and tools are less valued than individuals and interactions in Agile philosophy.\n\nComprehensive documentation is less valued than working software.\n\nContract negotiation is less valued than customer collaboration.",
  },
  {
    id: "csc312_ch2_031",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following are core deliverables of the Planning phase in the SDLC?",
    options: [
      "Feasibility Study",
      "Project Charter",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "According to the SDLC Phases deliverables section, both the Feasibility Study and the Project Charter (along with the Project Plan) are core deliverables generated during Phase 1 (Planning). Thus, 'All of the above' is correct.",
  },
  {
    id: "csc312_ch2_032",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team role is primarily responsible for scheduling tasks, managing the budget, and allocating resources across the team?",
    options: [
      "Project Manager (PM)",
      "Systems Analyst (SA)",
      "Business Analyst (BA)",
      "Software Engineer / Developer",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Team Roles slide states that the Project Manager is responsible for project planning, scheduling, budgeting, and overall resource allocation.\n\nSystems Analyst is responsible for bridging the gap between business requirements and technical design.\n\nBusiness Analyst is responsible for analyzing business workflows and documenting requirements.\n\nSoftware Engineer is responsible for physically writing the application code and building database schemas.",
  },
  {
    id: "csc312_ch2_033",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team role serves as the central bridge connecting the business stakeholders with the technical development team?",
    options: [
      "Systems Analyst (SA)",
      "Project Manager (PM)",
      "Software Engineer / Developer",
      "QA Engineer / Tester",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Team Roles slide identifies the Systems Analyst as the key person who bridges the gap between business users and technical programmers.\n\nProject Manager focuses on administrative tasks like scheduling, budgets, and project tracking.\n\nSoftware Engineer focuses strictly on writing source code and physical implementation.\n\nQA Engineer focuses on checking software quality and running test scripts.",
  },
  {
    id: "csc312_ch2_034",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which team role focuses primarily on analyzing existing business processes, workflows, and documenting detailed user requirements?",
    options: [
      "Business Analyst (BA)",
      "Software Engineer / Developer",
      "QA Engineer / Tester",
      "Project Manager (PM)",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Team Roles slide states that the Business Analyst focuses heavily on analyzing current business processes and eliciting requirements.\n\nSoftware Engineer converts those documented requirements into working code.\n\nQA Engineer tests the code to identify bugs and compliance issues.\n\nProject Manager manages the administrative schedule, resources, and budget limits.",
  },
  {
    id: "csc312_ch2_035",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team role is responsible for translating the physical system design specifications into running program code?",
    options: [
      "Software Engineer / Developer",
      "Systems Analyst (SA)",
      "Business Analyst (BA)",
      "QA Engineer / Tester",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Team Roles slide defines the Software Engineer as the team member who builds the actual system, writes the code, and creates the databases.\n\nSystems Analyst designs the specifications and models that the developer uses as a guide.\n\nBusiness Analyst gathers the initial business workflow requirements, prior to system design.\n\nQA Engineer tests the completed system to ensure it aligns with requirements and is free of bugs.",
  },
  {
    id: "csc312_ch2_036",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which team role has the primary responsibility of running test scripts, verifying requirements, and validating system quality before release?",
    options: [
      "QA Engineer / Tester",
      "Software Engineer / Developer",
      "Systems Analyst (SA)",
      "Project Manager (PM)",
    ],
    correctAnswer: 0,
    explanation:
      "The Project Team Roles slide defines the QA Engineer as the role responsible for testing, verifying quality, and validating that system requirements are satisfied.\n\nSoftware Engineer writes the code but is not the primary independent tester of system quality.\n\nSystems Analyst designs the system specifications but does not focus on execution of test scripts.\n\nProject Manager manages the overall project schedule and budget constraints.",
  },
  {
    id: "csc312_ch2_037",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Coupling refers to the degree of interdependence between software modules, and designers should aim for low coupling.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "According to the Design Quality Metrics slide, coupling is the measure of interdependence between modules, and design best practices dictate that systems should have low coupling for better maintainability.",
  },
  {
    id: "csc312_ch2_038",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the software maintenance cost breakdown in Lecture 3, which category of maintenance is the most expensive, taking up 50% of total costs?",
    options: [
      "Perfective Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Preventive Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance Cost Breakdown slide states that Perfective Maintenance represents the largest percentage of maintenance costs at 50%.\n\nCorrective Maintenance represents 20% of the overall maintenance cost budget.\n\nAdaptive Maintenance represents 25% of the maintenance cost budget.\n\nPreventive Maintenance represents the smallest portion of the cost budget at 5%.",
  },
  {
    id: "csc312_ch2_039",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What percentage of software maintenance costs is typically allocated to Adaptive Maintenance according to the course statistics?",
    options: ["25%", "20%", "50%", "5%"],
    correctAnswer: 0,
    explanation:
      "The maintenance cost breakdown slide lists Adaptive Maintenance at exactly 25%.\n\n20% is the cost breakdown allocated to Corrective Maintenance (bug fixing).\n\n50% is the cost breakdown allocated to Perfective Maintenance (enhancements).\n\n5% is the cost breakdown allocated to Preventive Maintenance (early cleanup).",
  },
  {
    id: "csc312_ch2_040",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the course slides, what percentage of the total software maintenance cost is spent on Corrective Maintenance?",
    options: ["20%", "25%", "50%", "5%"],
    correctAnswer: 0,
    explanation:
      "The Maintenance Cost Breakdown section states that Corrective Maintenance accounts for exactly 20% of the maintenance budget.\n\n25% is the budget percentage spent on Adaptive Maintenance (modifying for environment changes).\n\n50% is the budget percentage spent on Perfective Maintenance (adding new requested features).\n\n5% is the budget percentage spent on Preventive Maintenance (preventing future defects).",
  },
  {
    id: "csc312_ch2_041",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which software maintenance category has the lowest cost allocation of exactly 5% in systems development?",
    options: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance Cost Breakdown slide indicates that Preventive Maintenance is the least expensive category, taking up only 5% of total costs.\n\nCorrective Maintenance represents 20% of the total software maintenance budget.\n\nAdaptive Maintenance represents 25% of the total software maintenance budget.\n\nPerfective Maintenance represents the absolute majority of costs at 50%.",
  },
  {
    id: "csc312_ch2_042",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In system hierarchy, Transaction Processing Systems (TPS) are positioned at which organizational level?",
    options: [
      "Operational Level",
      "Knowledge Level",
      "Management/Higher Level",
      "Strategic Level",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels slide classifies the Transaction Processing System (TPS) under the Operational Level at the bottom of the hierarchy.\n\nKnowledge Level contains the Office Automation System (OAS) and Knowledge Work System (KWS).\n\nManagement/Higher Level contains Management Information Systems (MIS), Decision Support Systems (DSS), and Expert Systems (ES).\n\nStrategic Level contains Executive Support Systems (ESS) and Group Decision Support Systems (GDSS).",
  },
  {
    id: "csc312_ch2_043",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following represents a high-risk deployment strategy that involves running two identical active production servers simultaneously to balance user loads?",
    options: [
      "Canary Deployment",
      "Phased Rollout",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Deployment Strategies section of the slides, Canary Deployment is a very low-risk strategy of rolling out to a small subset first, Phased Rollout is a medium-risk gradual process, and Big Bang is the high-risk direct cutover strategy. Neither of the options represents a high-risk load-balancing deployment strategy, making 'None of the above' the correct choice.",
  },
  {
    id: "csc312_ch2_044",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Office Automation Systems (OAS) and Knowledge Work Systems (KWS) are classified under which level of system hierarchy?",
    options: [
      "Knowledge Level",
      "Operational Level",
      "Management/Higher Level",
      "Strategic Level",
    ],
    correctAnswer: 0,
    explanation:
      "According to the System Levels slide, both OAS and KWS are located at the Knowledge Level.\n\nOperational Level contains Transaction Processing Systems (TPS).\n\nManagement/Higher Level contains Management Information Systems (MIS) and Decision Support Systems (DSS).\n\nStrategic Level contains Executive Support Systems (ESS) and Group Decision Support Systems (GDSS).",
  },
  {
    id: "csc312_ch2_045",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Management Information Systems (MIS), Decision Support Systems (DSS), and Expert Systems (ES) are positioned at which system level?",
    options: [
      "Management/Higher Level",
      "Operational Level",
      "Knowledge Level",
      "Strategic Level",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels slide outlines the Management/Higher Level as containing MIS, DSS, and ES.\n\nOperational Level is the bottom tier containing Transaction Processing Systems (TPS).\n\nKnowledge Level is the second tier containing OAS and KWS.\n\nStrategic Level is the top tier containing Executive Support Systems (ESS).",
  },
  {
    id: "csc312_ch2_046",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Executive Support Systems (ESS) and Group Decision Support Systems (GDSS) are classified under which level of system hierarchy?",
    options: [
      "Strategic Level",
      "Operational Level",
      "Knowledge Level",
      "Management/Higher Level",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels slide places ESS and GDSS (and CSCWS) at the top under the Strategic Level.\n\nOperational Level holds Transaction Processing Systems (TPS).\n\nKnowledge Level holds Office Automation Systems (OAS) and Knowledge Work Systems (KWS).\n\nManagement/Higher Level holds Management Information Systems (MIS) and Decision Support Systems (DSS).",
  },
  {
    id: "csc312_ch2_047",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In system design, what term describes the measure of the degree of interdependence between different software modules?",
    options: ["Coupling", "Cohesion", "Encapsulation", "Abstraction"],
    correctAnswer: 0,
    explanation:
      "The Design Quality Metrics slide defines Coupling as the measure of interdependence between modules (ideally low/loose).\n\nCohesion is the measure of the strength of association within a single module (ideally high/strong).\n\nEncapsulation is an object-oriented programming concept of bundling data and methods, not a module-to-module interdependence metric from the slides.\n\nAbstraction is the practice of hiding complex background details, not the metric measuring module interdependence.",
  },
  {
    id: "csc312_ch2_048",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What term describes the measure of the strength of functional association and focus of elements within a single software module?",
    options: ["Cohesion", "Coupling", "Modularity", "Inheritance"],
    correctAnswer: 0,
    explanation:
      "The Design Quality Metrics slide defines Cohesion as the measure of the strength of functional association within a single module (which should be high).\n\nCoupling measures how dependent different modules are on each other.\n\nModularity is the broad concept of dividing a system into independent modules, not the specific metric for internal focus.\n\nInheritance is an object-oriented code reuse mechanism, not a module design quality metric.",
  },
  {
    id: "csc312_ch2_049",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Cohesion measures the strength of association within a single module, and design best practices state that cohesion should be kept as low as possible.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The Design Quality Metrics slide states that cohesive modules represent high strength of functional association, and designers should aim for high cohesion, not low cohesion.",
  },
  {
    id: "csc312_ch2_050",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to software design principles, what is the ideal combination of coupling and cohesion metrics that developers should aim to achieve?",
    options: [
      "Low Coupling and High Cohesion",
      "High Coupling and Low Cohesion",
      "Low Coupling and Low Cohesion",
      "High Coupling and High Cohesion",
    ],
    correctAnswer: 0,
    explanation:
      "The Design Quality Metrics slide states that the goal is Low Coupling (loose interdependence) and High Cohesion (strong internal module focus).\n\nHigh Coupling and Low Cohesion describes a poorly designed, highly fragile system where changing one module breaks another.\n\nLow Coupling and Low Cohesion is incorrect because cohesion must be kept high to ensure modules are focused and single-purpose.\n\nHigh Coupling and High Cohesion is incorrect because high coupling makes systems extremely difficult to modify or maintain.",
  },
  {
    id: "csc312_ch2_051",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In systems development, the overall system structure, major database schemas, and modular relationships are planned during which design level?",
    options: [
      "High-Level Design (Architectural)",
      "Low-Level Design (Detailed)",
      "Logical Analysis Level",
      "Physical Compilation Level",
    ],
    correctAnswer: 0,
    explanation:
      "The Two Levels of Design slide states that High-Level Design (Architectural) handles the broad system structures, overall modules, and high-level database layouts.\n\nLow-Level Design (Detailed) handles the concrete algorithms, individual module logic, and user interface details.\n\nLogical Analysis Level is a non-standard term, as analysis and logical design are distinct phases before detailed physical architecture.\n\nPhysical Compilation Level is a compiler-level concept, not a level of system design defined in the slides.",
  },
  {
    id: "csc312_ch2_052",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Designing the specific logic inside a module, detailed code algorithms, and precise user interface forms represents which level of system design?",
    options: [
      "Low-Level Design (Detailed)",
      "High-Level Design (Architectural)",
      "Logical Modeling Level",
      "Structured Planning Level",
    ],
    correctAnswer: 0,
    explanation:
      "The Two Levels of Design slide outlines Low-Level Design (Detailed) as focusing on detailed logic, specific algorithms, and exact interface field specifications.\n\nHigh-Level Design (Architectural) is concerned with broad overall structures and module interfaces, not detailed internal logic.\n\nLogical Modeling Level is part of analysis (Phase 2), not a physical level of design.\n\nStructured Planning Level is a planning phase concept (Phase 1), not a level of architectural or detailed design.",
  },
  {
    id: "csc312_ch2_053",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which category of documentation includes user manuals, quick-start setup guides, installation instructions, and browser-based help files?",
    options: [
      "User/Operator Documentation",
      "System Documentation",
      "Analytical Requirements Documentation",
      "Logical Architecture Documentation",
    ],
    correctAnswer: 0,
    explanation:
      "The Two Types of Documentation slide defines User/Operator Documentation as including user manuals, help files, quick reference guides, and installation manuals.\n\nSystem Documentation refers to class diagrams, source code comments, and UML models designed for programmers.\n\nAnalytical Requirements Documentation represents the System Requirements Document produced during Analysis.\n\nLogical Architecture Documentation refers to high-level system blueprints and data-flow designs.",
  },
  {
    id: "csc312_ch2_054",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Source code comments, UML class models, design specifications, and database data dictionaries are classified under which documentation category?",
    options: [
      "System Documentation",
      "User/Operator Documentation",
      "Operational Support Documentation",
      "Administrative Budget Documentation",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Two Types of Documentation slide, System Documentation contains technical artifacts like source code comments, UML models, database structures, and design logs.\n\nUser/Operator Documentation contains manuals and help files for the actual non-technical users.\n\nOperational Support Documentation is an informal term for administrative runbooks, not a primary category in the slides.\n\nAdministrative Budget Documentation represents project management financial records, not technical system documentation.",
  },
  {
    id: "csc312_ch2_055",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which deployment strategy carries the absolute highest operational risk by shutting down the old system and immediately launching the new system overnight?",
    options: [
      "Big Bang (Direct Cutover)",
      "Phased Rollout",
      "Blue-Green Deployment",
      "Canary Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies section ranks Big Bang (Direct Cutover) as the highest risk strategy because it involves an instant, complete switch with no parallel operations.\n\nPhased Rollout is a medium-risk approach where components or departments are moved gradually.\n\nBlue-Green Deployment is a low-risk strategy using two identical production environments to swap active loads.\n\nCanary Deployment is a very low-risk approach of releasing to a tiny fraction of users first.",
  },
  {
    id: "csc312_ch2_056",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A project team is introducing a new system by rolling it out module-by-module or department-by-department. What risk-level deployment strategy does this represent?",
    options: [
      "Phased Rollout",
      "Big Bang (Direct Cutover)",
      "Blue-Green Deployment",
      "Canary Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide defines Phased Rollout as a medium-risk progressive strategy of gradual deployment across departments or components.\n\nBig Bang is the high-risk instant direct cutover strategy.\n\nBlue-Green Deployment is a low-risk active/passive server duplication strategy.\n\nCanary Deployment is a very low-risk approach of releasing to a tiny subset of production users to test stability.",
  },
  {
    id: "csc312_ch2_057",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to Agile core values, what is valued over processes and tools?",
    options: [
      "Individuals and interactions",
      "Comprehensive documentation",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The Agile Core Values slide states: 'Individuals and interactions over processes and tools.' Comprehensive documentation is paired with working software, not processes and tools, making Option 1 the correct specific choice.",
  },
  {
    id: "csc312_ch2_058",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which deployment strategy utilizes two identical active/passive production environments to allow instantaneous switching of users with low risk?",
    options: [
      "Blue-Green Deployment",
      "Big Bang (Direct Cutover)",
      "Phased Rollout",
      "Canary Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide outlines Blue-Green Deployment as a low-risk strategy featuring two identical environments, where the new version is tested on the passive server and then traffic is switched.\n\nBig Bang is a high-risk instant replacement strategy with no redundant active server setup.\n\nPhased Rollout is a medium-risk strategy involving progressive, departmental launches.\n\nCanary Deployment is a very low-risk strategy of releasing to a very small subset of users first.",
  },
  {
    id: "csc312_ch2_059",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A software firm deploys a new update to exactly 1% of its active users to monitor server logs and check for errors before a full release. What is this strategy?",
    options: [
      "Canary Deployment",
      "Big Bang (Direct Cutover)",
      "Phased Rollout",
      "Blue-Green Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide outlines Canary Deployment as a very low-risk deployment where software is progressive launched to a minor subset of users to verify safety.\n\nBig Bang represents the instant full switchover carry high-risk.\n\nPhased Rollout represents gradual modular or regional launches.\n\nBlue-Green Deployment represents routing active traffic between two identical production environments.",
  },
  {
    id: "csc312_ch2_060",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Arrange the four deployment strategies from Lecture 3 in order of operational risk, from the highest risk to the lowest risk.",
    options: [
      "Big Bang → Phased Rollout → Blue-Green → Canary",
      "Canary → Blue-Green → Phased Rollout → Big Bang",
      "Big Bang → Canary → Blue-Green → Phased Rollout",
      "Phased Rollout → Big Bang → Blue-Green → Canary",
    ],
    correctAnswer: 0,
    explanation:
      "According to the deployment strategy hierarchy slide, the risk order from highest to lowest is: Big Bang (High) → Phased Rollout (Medium) → Blue-Green (Low) → Canary (Very Low).\n\nCanary to Big Bang lists the strategies from lowest risk to highest risk.\n\nBig Bang to Phased Rollout in option 3 incorrectly positions Canary as higher risk than Blue-Green.\n\nOption 4 incorrectly lists Phased Rollout as higher risk than Big Bang.",
  },
  {
    id: "csc312_ch2_061",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A software engineer is documenting the classes, method definitions, database keys, and technical system schemas for a new app. This represents what?",
    options: [
      "System Documentation",
      "User/Operator Documentation",
      "Project Plan",
      "Business Requirements Document",
    ],
    correctAnswer: 0,
    explanation:
      "The documentation slides specify that System Documentation contains design documents, UML diagrams, source code comments, and database dictionaries.\n\nUser/Operator Documentation contains user-facing files like installation manuals and online help systems.\n\nProject Plan is an administrative scheduling document generated in Phase 1 (Planning).\n\nBusiness Requirements Document represents the business processes mapped during Phase 2 (Analysis).",
  },
  {
    id: "csc312_ch2_062",
    course: "CSC 212",
    chapter: "Chapter 2",
    text: "Which of the following is a key deliverable of the Testing & Integration phase of the Systems Development Life Cycle?",
    options: [
      "Test Plan, Test Scripts, and Bug Reports",
      "Project Charter and Feasibility Study",
      "UML Design Specification Document",
      "User Requirements Specification",
    ],
    correctAnswer: 0,
    explanation:
      "According to the SDLC Phase Deliverables, Testing & Integration yields test plans, execution scripts, bug lists, and verification logs.\n\nProject Charter and Feasibility Study are key deliverables of Phase 1 (Planning).\n\nUML Design Specification Document is a key deliverable of Phase 3 (Design).\n\nUser Requirements Specification is a key deliverable of Phase 2 (Analysis).",
  },
  {
    id: "csc312_ch2_063",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the maintenance cost breakdown, perfective maintenance is the most expensive type of maintenance, accounting for approximately 50% of the total cost.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Maintenance Cost Breakdown slide outlines that Perfective Maintenance (adding features, enhancing code, optimizing database) takes up exactly 50% of the total maintenance budget.",
  },
  {
    id: "csc312_ch2_064",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "During system development, checking whether the hardware servers can handle 10,000 concurrent requests within 1 second represents an assessment of what?",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "Operational Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility section defines Technical Feasibility as checking whether the existing hardware, technologies, and system performance capabilities can support the requirements.\n\nEconomic Feasibility covers budgets, software licenses, and cost justification.\n\nOperational Feasibility covers user training, workflow fit, and corporate acceptance.\n\nLegal Feasibility covers regulatory compliance and intellectual property issues.",
  },
  {
    id: "csc312_ch2_065",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A systems analyst is verifying if there are any conflicts with software licensing laws or vendor contracts before acquiring a third-party framework. This is what?",
    options: [
      "Legal Feasibility",
      "Technical Feasibility",
      "Economic Feasibility",
      "Schedule Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility slides define Legal Feasibility as checking for compliance with government laws, copyright patents, software licensing terms, and contractual bounds.\n\nTechnical Feasibility evaluates hardware capabilities and developer coding skills.\n\nEconomic Feasibility evaluates setup costs, budgets, and operational savings.\n\nSchedule Feasibility evaluates project delivery timelines and deadliness.",
  },
  {
    id: "csc312_ch2_066",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A project team is checking whether a database integration can be realistically coded, tested, and deployed before the university portal opens in 6 weeks. This is what?",
    options: [
      "Schedule Feasibility",
      "Technical Feasibility",
      "Operational Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility section outlines Schedule Feasibility as assessing whether the project can be realistically developed and launched within the stated timeline limits.\n\nTechnical Feasibility evaluates developer programming experience and technology compatibility.\n\nOperational Feasibility evaluates user support and department workflow integration.\n\nLegal Feasibility evaluates law compliance, regulatory rules, and copyrights.",
  },
  {
    id: "csc312_ch2_067",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the V-Model of systems development, the process of static verification is primarily concerned with answering which of the following questions?",
    options: [
      "Are we building the system right?",
      "Are we building the right system?",
      "Who will write the code?",
      "How much will the system cost?",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model and testing slides state that Verification is concerned with checking whether the system is being built according to design specifications ('Are we building the system right?').\n\nValidation is concerned with checking whether the system meets the actual user needs ('Are we building the right system?').\n\n'Who will write the code?' is a project staffing question, not a verification objective.\n\n'How much will the system cost?' is an economic feasibility question.",
  },
  {
    id: "csc312_ch2_068",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the V-Model of systems development, the process of dynamic validation is primarily concerned with answering which of the following questions?",
    options: [
      "Are we building the right system?",
      "Are we building the system right?",
      "Can we finish the project on time?",
      "Do we have the correct database engine?",
    ],
    correctAnswer: 0,
    explanation:
      "The testing slides state that Validation answers: 'Are we building the right system?' by confirming that the application matches user expectations.\n\nVerification answers: 'Are we building the system right?' by checking specifications compliance.\n\n'Can we finish the project on time?' is a schedule feasibility question.\n\n'Do we have the correct database engine?' is a technical feasibility design question.",
  },
  {
    id: "csc312_ch2_069",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the course slides, which type of document review activity is associated with static verification in systems development?",
    options: [
      "Code walkthroughs and specification reviews",
      "Running functional automated tests on compiled code",
      "Performing load and stress testing on production servers",
      "Conducting user acceptance trials with live data",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model section defines verification as static review of models, specifications, code walkthroughs, and designs, which does not involve running executable code.\n\nRunning functional tests on compiled code is dynamic validation.\n\nPerforming load testing on production servers is dynamic validation of performance constraints.\n\nConducting user acceptance trials is dynamic validation against business requirements.",
  },
  {
    id: "csc312_ch2_070",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following activities represents an example of dynamic validation in the systems development lifecycle?",
    options: [
      "Executing automated test scripts against running software",
      "Reviewing logical data flow diagrams with other analysts",
      "Inspecting database table schemas for key constraints",
      "Auditing a project charter document for scope boundaries",
    ],
    correctAnswer: 0,
    explanation:
      "Validation involves executing software dynamically to verify requirements, which includes running automated test scripts against the active system.\n\nReviewing data flow diagrams is a static verification process.\n\nInspecting database table schemas is a static verification review.\n\nAuditing a project charter document is a static verification review of a planning deliverable.",
  },
  {
    id: "csc312_ch2_071",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to Agile core values, what is valued over following a plan?",
    options: [
      "Contract negotiation",
      "Responding to change",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "The Agile Core Values slide states: 'Responding to change over following a plan.' Contract negotiation is valued less than customer collaboration, making Option 2 the correct specific choice.",
  },
  {
    id: "csc312_ch2_072",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A system element has low cohesion when its constituent code statements perform a wide variety of completely unrelated business functions. This violates which metric?",
    options: ["Cohesion", "Coupling", "Modularity", "Encapsulation"],
    correctAnswer: 0,
    explanation:
      "Cohesion measures the strength of functional association within a single module. If a module performs multiple unrelated functions, it has poor (low) cohesion.\n\nCoupling measures the degree of interdependence between separate modules, not internal functional association.\n\nModularity is the overall architectural style of dividing systems, not the specific internal functional strength metric.\n\nEncapsulation is the bundling of data and methods in OOP, which does not directly represent the functional cohesion metric.",
  },
  {
    id: "csc312_ch2_073",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A developer modifies a billing module, which unexpectedly breaks the checkout module because they share a global variable. This problem indicates a failure in what?",
    options: ["Coupling", "Cohesion", "Modularity", "Polymorphism"],
    correctAnswer: 0,
    explanation:
      "This scenario shows a high level of interdependence between modules, which represents high (bad) coupling. The design failed because coupling was not kept low.\n\nCohesion describes the internal focus of a single module, not how changes in one module affect another.\n\nModularity is the broad concept of splitting a system, not the specific metric for module interdependence.\n\nPolymorphism is an object-oriented programming concept (many forms), not a module coupling metric.",
  },
  {
    id: "csc312_ch2_074",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What level of system design focuses on the physical integration of systems, network topologies, and high-level database architecture?",
    options: [
      "High-Level Design (Architectural)",
      "Low-Level Design (Detailed)",
      "Logical Requirements Level",
      "Analytical Modeling Level",
    ],
    correctAnswer: 0,
    explanation:
      "According to the design slides, High-Level Design (Architectural) handles the macro-level structure including network topologies, module integration, and database systems.\n\nLow-Level Design (Detailed) handles detailed algorithms, class variables, and screen formats.\n\nLogical Requirements Level is a requirements mapping phase, not a level of physical system design.\n\nAnalytical Modeling Level occurs during Phase 2 (Analysis) to model current business flows, not to specify architecture.",
  },
  {
    id: "csc312_ch2_075",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "User documentation includes source code comments, database schemas, and UML models designed primarily for developers and maintainers.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "User documentation consists of user manuals, quick-start guides, and help files for end-users, whereas source code comments, database schemas, and UML models belong to System Documentation.",
  },
  {
    id: "csc312_ch2_076",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A software development team writes unit test scripts for every class and runs a linter tool to verify variable naming conventions. What category of documentation is being updated?",
    options: [
      "System Documentation",
      "User/Operator Documentation",
      "Operational Quick-Start Documentation",
      "Corporate Feasibility Documentation",
    ],
    correctAnswer: 0,
    explanation:
      "The documentation slides specify that System Documentation includes source code comments, class details, tests, and database schemas intended for technical maintainers.\n\nUser/Operator Documentation includes manuals, installation instructions, and help menus for end-users.\n\nOperational Quick-Start Documentation is a subset of User Documentation, not technical development logs.\n\nCorporate Feasibility Documentation consists of project charters and viability studies generated in Phase 1 (Planning).",
  },
  {
    id: "csc312_ch2_077",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is an example of an artifact that would be classified under User/Operator Documentation in systems development?",
    options: [
      "An installation manual and quick reference guide",
      "A UML class diagram detailing inheritance hierarchies",
      "A database schema definition file containing SQL scripts",
      "A source code file with extensive comments explaining an algorithm",
    ],
    correctAnswer: 0,
    explanation:
      "Installation manuals, online help files, and quick reference guides are designed for end-users, classifying them under User/Operator Documentation.\n\nUML class diagrams are intended for developers and belong to System Documentation.\n\nDatabase schema definitions are technical artifacts that belong to System Documentation.\n\nSource code files and code comments belong to System Documentation.",
  },
  {
    id: "csc312_ch2_078",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A systems development team is preparing a user manual and an online FAQ page for a newly built e-learning portal. What type of documentation are they producing?",
    options: [
      "User/Operator Documentation",
      "System Documentation",
      "Logical Structural Documentation",
      "Analytical Requirements Documentation",
    ],
    correctAnswer: 0,
    explanation:
      "The course slides define User/Operator Documentation as manuals, online help pages, and quick-start sheets designed for the end-user.\n\nSystem Documentation refers to class blueprints, database schemas, and developer source code comments.\n\nLogical Structural Documentation represents design-phase logical architectures, not user-facing materials.\n\nAnalytical Requirements Documentation represents user requirements specifications gathered in Phase 2 (Analysis).",
  },
  {
    id: "csc312_ch2_079",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which deployment strategy has the lowest operational risk because it limits initial release to a tiny, isolated subset of live users?",
    options: [
      "Canary Deployment",
      "Blue-Green Deployment",
      "Phased Rollout",
      "Big Bang (Direct Cutover)",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Deployment Strategies slide, Canary Deployment has the absolute lowest operational risk because the update is pushed to only a minor percentage of users first.\n\nBlue-Green Deployment has low risk, but exposes the entire traffic swap at once rather than a progressive minor percentage.\n\nPhased Rollout has medium risk, involving wider department-by-department or module-by-module rollouts.\n\nBig Bang has the highest risk, instantly switching all users to the new system.",
  },
  {
    id: "csc312_ch2_080",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A systems analyst is assessing operational feasibility and wants to know: 'Will it be used?' Which of the following activities directly helps answer this question?",
    options: [
      "Reviewing user workflow compatibility and stakeholder support",
      "Conducting database performance benchmarks on the server",
      "Calculating the return on investment and setup budget limits",
      "Auditing legal license agreements for third-party software",
    ],
    correctAnswer: 0,
    explanation:
      "Operational feasibility evaluates if the organization will support the system and if staff will integrate it into their work (asking 'Will it be used?').\n\nDatabase benchmarks on the server evaluate technical feasibility.\n\nCalculating return on investment and setup budgets evaluates economic feasibility.\n\nAuditing license agreements and contract compliance evaluates legal feasibility.",
  },
  {
    id: "csc312_ch2_081",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A development team is assessing technical feasibility. Which question is the team trying to answer?",
    options: [
      "Is it technically possible to build the system with our resources?",
      "Is the system financially viable for our current budget?",
      "Will the system actually be used by the department staff?",
      "Does the system comply with all national security regulations?",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility section states that Technical Feasibility answers the question: 'Is it technically possible?' by evaluating technical assets, code skills, and resources.\n\nEconomic Feasibility answers: 'Is it financially viable?' by evaluating budget limits.\n\nOperational Feasibility answers: 'Will it be used?' by evaluating user workflow adoption.\n\nLegal Feasibility answers if the system complies with laws and licensing regulations.",
  },
  {
    id: "csc312_ch2_082",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the context of the SDLC, which of the following is a primary task of Phase 2 (Analysis)?",
    options: [
      "Conducting domain and requirements analysis to model system features",
      "Designing physical database schemas and server networking setups",
      "Writing clean program code and setting up production databases",
      "Executing verification test scripts to find calculation errors",
    ],
    correctAnswer: 0,
    explanation:
      "The course slides state that Phase 2 (Analysis) focuses on requirements analysis, data gathering, and business process modeling.\n\nDesigning database schemas and networking setups is the primary task of Phase 3 (Design).\n\nWriting clean program code and database setup is the primary task of Phase 4 (Implementation).\n\nExecuting test scripts to find errors is the primary task of Phase 5 (Testing & Integration).",
  },
  {
    id: "csc312_ch2_083",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following are classified as Management/Higher Level systems?",
    options: [
      "Decision Support System (DSS)",
      "Management Information System (MIS)",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "The System Levels slide groups Management Information Systems (MIS), Decision Support Systems (DSS), and Expert Systems (ES) under the Management/Higher Level category. Thus, 'All of the above' is the correct choice.",
  },
  {
    id: "csc312_ch2_084",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following describes the core characteristic of the Waterfall model as detailed in the course slides?",
    options: [
      "A sequential, highly structured approach where progress flows linearly downward",
      "An iterative, highly collaborative approach that values individuals over plans",
      "A risk-driven, iterative framework utilizing four quadrant cycles",
      "An evolutionary prototyping approach that builds quick discardable models",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Methodologies section, the Waterfall model is a sequential, highly structured approach with linear phases.\n\nAgile is iterative and collaborative, valuing individuals and active customer feedback over plans.\n\nSpiral is risk-driven and iterative, utilizing repeating quadrant cycles.\n\nPrototyping involves building quick models to clarify user needs.",
  },
  {
    id: "csc312_ch2_085",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What major limitation of the traditional Waterfall approach is highlighted in Module 1 Lecture 3?",
    options: [
      "High rigidity makes it difficult and costly to adapt to changing requirements",
      "It completely lacks any formal testing or validation phases",
      "It requires automated code-generation tools that are extremely expensive",
      "It prevents developers from writing documentation or tracking budgets",
    ],
    correctAnswer: 0,
    explanation:
      "The Waterfall model slide states that its high rigidity is a significant disadvantage, making it very difficult and costly to make changes once a phase is complete.\n\nWaterfall does feature testing phases, typically occurring after implementation is complete.\n\nWaterfall does not require automated code-generation tools; that describes Rapid Application Development (RAD).\n\nWaterfall is a highly document-heavy approach, meaning it does not prevent documentation or budgeting.",
  },
  {
    id: "csc312_ch2_086",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which systems development methodology is structured around short, iterative sprints to allow maximum flexibility and continuous customer feedback?",
    options: [
      "Agile Methodology",
      "Waterfall Model",
      "V-Model",
      "Structured Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies section defines Agile as an iterative, flexible approach centered around short sprints and highly collaborative user feedback loops.\n\nWaterfall is a linear, sequential model that lacks short iterative sprints.\n\nV-Model is a sequential, verification-centric model that pairs development and testing sequentially, not in agile sprints.\n\nStructured Analysis is a formal process-modeling approach, not an iterative project framework.",
  },
  {
    id: "csc312_ch2_087",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A university IT department is building a student portal and wants parallel testing to run concurrently with development. Which methodology is designed for this?",
    options: [
      "V-Model",
      "Waterfall Model",
      "Structured Design",
      "Big Bang Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide defines the V-Model as featuring parallel development and testing phases, where verification is mapped directly to validation.\n\nWaterfall Model runs testing only after coding is complete, not in parallel phases.\n\nStructured Design is a process-modeling approach using structure charts, not a parallel testing framework.\n\nBig Bang Deployment is a high-risk installation strategy, not a software development methodology.",
  },
  {
    id: "csc312_ch2_088",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Under the V-Model parallel testing structure, which testing phase is mapped directly to the coding phase?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing",
    ],
    correctAnswer: 0,
    explanation:
      "According to the V-Model mapping slides, Unit Testing is mapped directly to the coding phase to validate individual code modules.\n\nIntegration Testing is mapped to detailed system design to validate module connections.\n\nSystem Testing is mapped to high-level architectural design to validate full system interactions.\n\nAcceptance Testing is mapped to requirements analysis to validate user expectations.",
  },
  {
    id: "csc312_ch2_089",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Blue-Green deployment is a low-risk strategy that involves maintaining two identical production environments, only one of which is active at any time.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide states that Blue-Green is a low-risk strategy featuring two identical active/passive production environments. Traffic is switched instantly to the passive server once updates are verified.",
  },
  {
    id: "csc312_ch2_090",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Under the V-Model parallel testing structure, the High-Level (Architectural) Design phase is validated by which testing phase?",
    options: [
      "System Testing",
      "Unit Testing",
      "Integration Testing",
      "Acceptance Testing",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model mapping slides state that High-Level (Architectural) Design is validated by System Testing, which checks the entire integrated system against high-level specs.\n\nUnit Testing validates individual code blocks written during the low-level coding phase.\n\nIntegration Testing validates detailed module connections drafted during the Detailed Design phase.\n\nAcceptance Testing validates the user requirements gathered during the Requirements phase.",
  },
  {
    id: "csc312_ch2_091",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Under the V-Model parallel testing structure, the Low-Level (Detailed) Design phase is validated by which testing phase?",
    options: [
      "Integration Testing",
      "Unit Testing",
      "System Testing",
      "Acceptance Testing",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model mapping slides outline that the Low-Level (Detailed) Design phase is directly validated by Integration Testing.\n\nUnit Testing validates individual modules coded during the Coding phase.\n\nSystem Testing validates the entire integrated application against high-level architecture specifications.\n\nAcceptance Testing validates the application against business requirements.",
  },
  {
    id: "csc312_ch2_092",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Under the V-Model parallel testing structure, the initial Requirements phase is validated by which testing phase?",
    options: [
      "Acceptance Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: 0,
    explanation:
      "According to the V-Model mapping, the Requirements phase is validated during the final Acceptance Testing phase with the end-users.\n\nUnit Testing maps directly to the low-level coding phase.\n\nIntegration Testing maps directly to the Detailed Design phase.\n\nSystem Testing maps directly to the High-Level (Architectural) Design phase.",
  },
  {
    id: "csc312_ch2_093",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "An organization is updating its system to run on a new version of the Linux operating system. This update is classified as what?",
    options: [
      "Adaptive Maintenance",
      "Corrective Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance section defines Adaptive Maintenance as modifying the system to operate in a changing technical environment, such as a new OS or server platform.\n\nCorrective Maintenance is focused on fixing active bugs, defects, and code errors reported by users.\n\nPerfective Maintenance is focused on enhancing existing features or adding new user-requested features.\n\nPreventive Maintenance is focused on refactoring code or cleanup to prevent potential future failures.",
  },
  {
    id: "csc312_ch2_094",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A software developer refactors a complex, hard-to-read function to improve maintainability and prevent future software bugs. What type of maintenance is this?",
    options: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance slides define Preventive Maintenance as making changes to prevent future system failures, improve code structures, or refactor complex algorithms before bugs manifest.\n\nCorrective Maintenance is fixing existing active bugs that users have already encountered.\n\nAdaptive Maintenance is modifying software to run on a new server or OS platform.\n\nPerfective Maintenance is adding new user features or optimizing calculation speed.",
  },
  {
    id: "csc312_ch2_095",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A systems analyst is requested by university management to add a GPA calculation feature to the existing portal. What maintenance type does this represent?",
    options: [
      "Perfective Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Preventive Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance slides define Perfective Maintenance as adding new features, improving system performance, or enhancing existing services to increase user satisfaction.\n\nCorrective Maintenance is focused on fixing software bugs and error crashes.\n\nAdaptive Maintenance is focused on adapting systems to run in new external environments (new OS, new servers).\n\nPreventive Maintenance is focused on early technical refactoring to prevent future bugs.",
  },
  {
    id: "csc312_ch2_096",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In system design, what metric measures how single-purpose, focused, and functionally unified the statements inside a single module are?",
    options: ["Cohesion", "Coupling", "Modularity", "Encapsulation"],
    correctAnswer: 0,
    explanation:
      "Cohesion is the measure of the strength of functional association of elements within a single module (should be high).\n\nCoupling measures the degree of interdependence between different software modules (should be low).\n\nModularity is the broad concept of partitioning a system, not the specific functional focus metric.\n\nEncapsulation is an object-oriented programming concept, not a module-level design cohesion metric.",
  },
  {
    id: "csc312_ch2_097",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following maintenance categories has a cost allocation of exactly 75% according to the maintenance cost breakdown?",
    options: [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 3,
    explanation:
      "According to the Maintenance Cost Breakdown slide, Perfective is 50%, Adaptive is 25%, Corrective is 20%, and Preventive is 5%. None of these categories have a cost allocation of exactly 75%, making 'None of the above' the correct choice.",
  },
  {
    id: "csc312_ch2_098",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "If a systems development team aims to build a robust, maintainable, and easily modifiable system, which combination of design metrics should they prioritize?",
    options: [
      "Low coupling and high cohesion",
      "High coupling and low cohesion",
      "Low coupling and low cohesion",
      "High coupling and high cohesion",
    ],
    correctAnswer: 0,
    explanation:
      "The Design Quality Metrics slide states that highly maintainable systems must have low coupling (minimal module interdependence) and high cohesion (highly focused modules).\n\nHigh coupling and low cohesion describes a fragile system where changing one module breaks many others.\n\nLow coupling and low cohesion is incorrect because cohesion must be kept high to ensure modules are focused and single-purpose.\n\nHigh coupling and high cohesion is incorrect because high coupling makes systems extremely difficult to modify.",
  },
  {
    id: "csc312_ch2_099",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What term is used in systems development to describe the overall architectural layout, database structures, and module integration pathways?",
    options: [
      "High-Level Design (Architectural)",
      "Low-Level Design (Detailed)",
      "Logical Requirements Model",
      "Analytical Workflow Design",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Levels of Design section, High-Level Design (Architectural) focuses on the broad architectural layout, module integration, and database choices.\n\nLow-Level Design (Detailed) focuses on the detailed algorithms, precise user interface fields, and logic inside modules.\n\nLogical Requirements Model represents process modeling in Phase 2 (Analysis), not design layouts.\n\nAnalytical Workflow Design is an analysis-phase term, not a level of physical system design.",
  },
  {
    id: "csc312_ch2_100",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "An analyst is detailing the precise algorithms, database field types, and user form fields for a registration system. This work is part of what?",
    options: [
      "Low-Level Design (Detailed)",
      "High-Level Design (Architectural)",
      "Feasibility Assessment",
      "Logical Requirements Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "The design levels slides outline Low-Level Design (Detailed) as focusing on detailed logic, specific algorithms, and exact field specifications.\n\nHigh-Level Design (Architectural) handles the macro overall structure, major modules, and high-level database choices.\n\nFeasibility Assessment is a planning activity (Phase 1) focused on determining project viability.\n\nLogical Requirements Analysis is an analysis activity (Phase 2) focused on understanding requirements.",
  },
  {
    id: "csc312_ch2_101",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In Agile software development, contract negotiation is highly prioritized over customer collaboration throughout the project life cycle.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The Agile Core Values slide states that Agile values 'Customer collaboration over contract negotiation,' meaning contract negotiation is deprioritized in favor of active, ongoing client relationships.",
  },
  {
    id: "csc312_ch2_102",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following describes the key characteristic of Big Bang deployment as detailed in Module 1 Lecture 3?",
    options: [
      "High-risk strategy where the old system is shut down and the new system is immediately activated",
      "Medium-risk strategy where the new system is deployed progressive module-by-module",
      "Low-risk strategy where two identical active/passive production environments are maintained",
      "Very low-risk strategy where the new update is launched to only a minor percentage of users",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide states that Big Bang (Direct Cutover) is a high-risk strategy that involves shutting down the old system and instantly starting the new one.\n\nPhased Rollout is the medium-risk strategy involving progressive, departmental or modular releases.\n\nBlue-Green is the low-risk strategy involving two identical active/passive production servers.\n\nCanary is the very low-risk strategy involving releasing the update to a minor percentage of users first.",
  },
  {
    id: "csc312_ch2_103",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which deployment strategy has medium operational risk because it introduces the new system progressive across different departments or branches over time?",
    options: [
      "Phased Rollout",
      "Big Bang (Direct Cutover)",
      "Blue-Green Deployment",
      "Canary Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies section outlines Phased Rollout as a medium-risk strategy where the launch occurs in gradual phases (regional or modular).\n\nBig Bang is a high-risk instant direct cutover strategy.\n\nBlue-Green Deployment is a low-risk strategy of routing traffic between two identical production environments.\n\nCanary Deployment is a very low-risk strategy of releasing to a tiny fraction of active users first.",
  },
  {
    id: "csc312_ch2_104",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "An organization is deploying a portal update by routing active user traffic between two identical production servers to ensure zero downtime. This is what?",
    options: [
      "Blue-Green Deployment",
      "Big Bang (Direct Cutover)",
      "Phased Rollout",
      "Canary Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide outlines Blue-Green Deployment as a low-risk approach that utilizes two identical active/passive production environments to switch traffic.\n\nBig Bang is a high-risk strategy where the old system is completely replaced with no redundancy.\n\nPhased Rollout is a medium-risk strategy where software is launched progressive by department.\n\nCanary Deployment is a very low-risk strategy where software is launched to only a tiny subset of users first.",
  },
  {
    id: "csc312_ch2_105",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A web company rolls out a new interface to exactly 5% of its user base to verify stability before releasing it to the general public. What is this?",
    options: [
      "Canary Deployment",
      "Big Bang (Direct Cutover)",
      "Phased Rollout",
      "Blue-Green Deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide states that Canary Deployment is a very low-risk strategy where the update is pushed to a small subset of users to test for errors.\n\nBig Bang is a high-risk strategy where all users are switched to the new system simultaneously.\n\nPhased Rollout is a medium-risk strategy involving progressive, departmental or regional launches.\n\nBlue-Green Deployment is a low-risk strategy of routing active traffic between two identical production environments.",
  },
  {
    id: "csc312_ch2_106",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In system hierarchy, Office Automation Systems (OAS) and Knowledge Work Systems (KWS) are positioned at which level?",
    options: [
      "Knowledge Level",
      "Operational Level",
      "Management/Higher Level",
      "Strategic Level",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels slide outlines the Knowledge Level as containing OAS and KWS.\n\nOperational Level is the bottom tier containing Transaction Processing Systems (TPS).\n\nManagement/Higher Level is the third tier containing MIS, DSS, and ES.\n\nStrategic Level is the top tier containing Executive Support Systems (ESS).",
  },
  {
    id: "csc312_ch2_107",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the system hierarchy classifications, which of the following is positioned at the top-most Strategic Level?",
    options: [
      "Executive Support System (ESS)",
      "Transaction Processing System (TPS)",
      "Office Automation System (OAS)",
      "Decision Support System (DSS)",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels slide outlines the Strategic Level at the top, containing Executive Support Systems (ESS) and GDSS.\n\nTransaction Processing System (TPS) is at the Operational Level at the bottom.\n\nOffice Automation System (OAS) is at the Knowledge Level.\n\nDecision Support System (DSS) is at the Management/Higher Level.",
  },
  {
    id: "csc312_ch2_108",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What type of system is grouped under the Management/Higher Level in system hierarchy, alongside Decision Support Systems (DSS)?",
    options: [
      "Management Information System (MIS)",
      "Transaction Processing System (TPS)",
      "Knowledge Work System (KWS)",
      "Executive Support System (ESS)",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels slide groups Management Information Systems (MIS) and Expert Systems (ES) with DSS under the Management/Higher Level.\n\nTransaction Processing System (TPS) is at the bottom Operational Level.\n\nKnowledge Work System (KWS) is at the Knowledge Level.\n\nExecutive Support System (ESS) is at the Strategic Level.",
  },
  {
    id: "csc312_ch2_109",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the system hierarchy slides, where does the Group Decision Support System (GDSS) reside?",
    options: [
      "Strategic Level",
      "Operational Level",
      "Knowledge Level",
      "Management/Higher Level",
    ],
    correctAnswer: 0,
    explanation:
      "The System Levels slide places GDSS and Executive Support Systems (ESS) at the top-most Strategic Level.\n\nOperational Level contains Transaction Processing Systems (TPS).\n\nKnowledge Level contains Office Automation Systems (OAS) and Knowledge Work Systems (KWS).\n\nManagement/Higher Level contains Management Information Systems (MIS) and Decision Support Systems (DSS).",
  },
  {
    id: "csc312_ch2_110",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A development team is checking if a system complies with government regulations on security. This represents which feasibility check?",
    options: [
      "Legal Feasibility",
      "Technical Feasibility",
      "Economic Feasibility",
      "Operational Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The feasibility slides state that Legal Feasibility is concerned with identifying compliance risks with state regulations, intellectual property laws, and contracts.\n\nTechnical Feasibility measures technology availability, server capacities, and programmer skills.\n\nEconomic Feasibility measures financial budgets, savings, and cost-benefit analyses.\n\nOperational Feasibility measures organizational resistance and user support.",
  },
];

export default csc312Letcure3;
