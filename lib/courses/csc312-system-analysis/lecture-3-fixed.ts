import { QuestionV2 } from "@/lib/quiz-types";

const csc312Lecture3Combined: QuestionV2[] = [
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
    text: "According to the software maintenance cost breakdown in Lecture 3, which category of maintenance is the most expensive, taking up 40% of total costs?",
    options: [
      "Perfective Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Preventive Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance Cost Breakdown slide states that Perfective Maintenance represents the largest percentage of maintenance costs at 40%.\n\nCorrective Maintenance represents 20% of the overall maintenance cost budget.\n\nAdaptive Maintenance represents 25% of the maintenance cost budget.\n\nPreventive Maintenance represents 15% of the total maintenance cost budget.",
  },
  {
    id: "csc312_ch2_039",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What percentage of software maintenance costs is typically allocated to Adaptive Maintenance according to the course statistics?",
    options: ["25%", "20%", "40%", "15%"],
    correctAnswer: 0,
    explanation:
      "The maintenance cost breakdown slide lists Adaptive Maintenance at exactly 25%.\n\n20% is the cost breakdown allocated to Corrective Maintenance (bug fixing).\n\n40% is the cost breakdown allocated to Perfective Maintenance (enhancements).\n\n15% is the cost breakdown allocated to Preventive Maintenance (early cleanup).",
  },
  {
    id: "csc312_ch2_040",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "According to the course slides, what percentage of the total software maintenance cost is spent on Corrective Maintenance?",
    options: ["20%", "25%", "40%", "15%"],
    correctAnswer: 0,
    explanation:
      "The Maintenance Cost Breakdown section states that Corrective Maintenance accounts for exactly 20% of the maintenance budget.\n\n25% is the budget percentage spent on Adaptive Maintenance (modifying for environment changes).\n\n50% is the budget percentage spent on Perfective Maintenance (adding new requested features).\n\n5% is the budget percentage spent on Preventive Maintenance (preventing future defects).",
  },
  {
    id: "csc312_ch2_041",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which software maintenance category has the lowest cost allocation in systems development according to the lecture slides?",
    options: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance Cost Breakdown slide indicates that Preventive Maintenance is the least expensive category, taking up 15% of total costs.\n\nCorrective Maintenance represents 20% of the total software maintenance budget.\n\nAdaptive Maintenance represents 25% of the total software maintenance budget.\n\nPerfective Maintenance represents the absolute majority of costs at 40%.",
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
    id: "csc312_ch2_059",
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
    id: "csc312_ch2_060",
    course: "CSC 312",
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
    id: "csc312_ch2_061",
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
    id: "csc312_ch2_062",
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
    id: "csc312_ch2_063",
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
    id: "csc312_ch2_064",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In the V-Model described in the course slides, which testing phase is mapped directly to the Requirements phase?",
    options: [
      "Acceptance Testing",
      "System Testing",
      "Unit Testing",
      "Integration Testing",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model diagram in the slides shows a symmetrical structure where the Requirements phase is mapped directly to Acceptance Testing.\n\nSystem Testing is mapped to the Design phase in the V-Model.\n\nUnit Testing is mapped to the Coding phase in the V-Model.\n\nIntegration Testing is not mentioned in the V-Model section of the slides.",
  },
  {
    id: "csc312_ch2_065",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "How does the V-Model differ from the traditional Waterfall model according to the course slides?",
    options: [
      "It features parallel development and testing phases",
      "It uses iterative sprints instead of sequential phases",
      "It eliminates the design phase entirely",
      "It focuses exclusively on building quick prototypes",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies section defines the V-Model as an extension of the Waterfall model that maps development directly to testing in a parallel structure, unlike the purely sequential Waterfall approach.\n\nIterative sprints describe the Agile methodology.\n\nThe V-Model does not eliminate the design phase; it retains it and maps it to system testing.\n\nPrototyping is a separate RAD category, not the focus of the V-Model.",
  },
  {
    id: "csc312_ch2_066",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A system element has low cohesion when its constituent code statements perform a wide variety of completely unrelated business functions. This violates which metric?",
    options: ["Cohesion", "Coupling", "Modularity", "Encapsulation"],
    correctAnswer: 0,
    explanation:
      "Cohesion measures the strength of functional association within a single module. If a module performs multiple unrelated functions, it has poor (low) cohesion.\n\nCoupling measures the degree of interdependence between separate modules, not internal functional association.\n\nModularity is the overall architectural style of dividing systems, not the specific internal functional strength metric.\n\nEncapsulation is the bundling of data and methods in OOP, which does not directly represent the functional cohesion metric.",
  },
  {
    id: "csc312_ch2_067",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A developer modifies a billing module, which unexpectedly breaks the checkout module because they share a global variable. This problem indicates a failure in what?",
    options: ["Coupling", "Cohesion", "Modularity", "Polymorphism"],
    correctAnswer: 0,
    explanation:
      "This scenario shows a high level of interdependence between modules, which represents high (bad) coupling. The design failed because coupling was not kept low.\n\nCohesion describes the internal focus of a single module, not how changes in one module affect another.\n\nModularity is the broad concept of splitting a system, not the specific metric for module interdependence.\n\nPolymorphism is an object-oriented programming concept (many forms), not a module coupling metric.",
  },
  {
    id: "csc312_ch2_068",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "User documentation includes source code comments, database schemas, and UML models designed primarily for developers and maintainers.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "User documentation consists of user manuals, quick-start guides, and help files for end-users, whereas source code comments, database schemas, and UML models belong to System Documentation.",
  },
  {
    id: "csc312_ch2_069",
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
    id: "csc312_ch2_070",
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
    id: "csc312_ch2_071",
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
    id: "csc312_ch2_072",
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
    id: "csc312_ch2_073",
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
    id: "csc312_ch2_074",
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
    id: "csc312_ch2_075",
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
    id: "csc312_ch2_076",
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
    id: "csc312_ch2_077",
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
    id: "csc312_ch2_078",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Blue-Green deployment is a low-risk strategy that involves maintaining two identical production environments, only one of which is active at any time.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Deployment Strategies slide states that Blue-Green is a low-risk strategy featuring two identical active/passive production environments. Traffic is switched instantly to the passive server once updates are verified.",
  },
  {
    id: "csc312_ch2_079",
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
    id: "csc312_ch2_080",
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
    id: "csc312_ch2_081",
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
    id: "csc312_ch2_082",
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
    id: "csc312_ch2_083",
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
    id: "csc312_ch2_084",
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
    id: "csc312_ch2_085",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which project team member is primarily responsible for identifying the business value that a new information system will accumulate?",
    options: [
      "Business analyst",
      "Systems analyst",
      "Infrastructure analyst",
      "Project manager",
    ],
    correctAnswer: 0,
    explanation:
      "According to the team roles, the business analyst focuses on the business issues surrounding the system, which includes identifying its business value.\n\nThe systems analyst focuses on information systems issues, looking at how the system interacts with the business and detailing the system design.\n\nThe infrastructure analyst focuses on technical issues, including hardware, software, networks, and integration.\n\nThe project manager focus is on project management issues such as budget, time, and team coordination.",
  },
  {
    id: "csc312_ch2_086",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which analyst role focuses on technical issues such as databases, networks, hardware, and system integration?",
    options: [
      "Business analyst",
      "Systems analyst",
      "Infrastructure analyst",
      "Change management analyst",
    ],
    correctAnswer: 2,
    explanation:
      "The infrastructure analyst is responsible for the technical infrastructure of the project, ensuring the database, hardware, and networks operate seamlessly together.\n\nThe business analyst focuses on the business processes and organizational value.\n\nThe systems analyst translates business needs into specific system designs and interfaces.\n\nThe change management analyst focuses on the human element, user training, and adoption policies.",
  },
  {
    id: "csc312_ch2_087",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A system deployment requires user training, resistance management, and alignment with organizational policy. Which role handles these tasks?",
    options: [
      "Business analyst",
      "Infrastructure analyst",
      "Change management analyst",
      "Project manager",
    ],
    correctAnswer: 2,
    explanation:
      "The change management analyst is responsible for the people and management issues surrounding system installation, ensuring user adoption and training run smoothly.\n\nThe business analyst deals with identifying business value and modeling organizational workflows.\n\nThe infrastructure analyst deals with networks, physical servers, and databases.\n\nThe project manager oversees overall planning, budgeting, and project execution.",
  },
  {
    id: "csc312_ch2_088",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What skill category allows a systems analyst to solve complex problems and analyze requirements effectively?",
    options: [
      "Ethical skills",
      "Analytical skills",
      "Interpersonal skills",
      "Management skills",
    ],
    correctAnswer: 1,
    explanation:
      "Analytical skills enable the analyst to understand organizational problems, decompose processes, and correctly design logical software requirements.\n\nEthical skills ensure honesty, professional integrity, and respect for intellectual property.\n\nInterpersonal skills are needed for active communication, presentation, and written documentation with stakeholders.\n\nManagement skills are required to control resources, assess risk, and direct project tasks.",
  },
  {
    id: "csc312_ch2_089",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which phase of the Systems Development Life Cycle is primarily concerned with answering why a system should be built?",
    options: ["Planning", "Analysis", "Design", "Implementation"],
    correctAnswer: 0,
    explanation:
      "The Planning phase determines why the system should be built, defining the initial business value and project boundaries.\n\nThe Analysis phase answers who will use the system, what it will do, and where and when it will be used.\n\nThe Design phase answers how the system will operate in terms of hardware, software, and network infrastructure.\n\nThe Implementation phase is when the system is actually constructed and installed.",
  },
  {
    id: "csc312_ch2_090",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is a key step within the Analysis phase of the SDLC?",
    options: [
      "Developing the installation strategy",
      "Gathering the functional and non-functional requirements",
      "Designing the database and file specifications",
      "Drafting the program design documents",
    ],
    correctAnswer: 1,
    explanation:
      "Requirements gathering is a core step in the Analysis phase, where the team uses techniques like interviews or surveys to understand the system needs.\n\nInstallation strategy development is part of the Implementation phase.\n\nDatabase and file specifications design is part of the Design phase.\n\nProgram design is also a step within the Design phase.",
  },
  {
    id: "csc312_ch2_091",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is the purpose of analyzing the current system, often referred to as the as-is system?",
    options: [
      "To configure the development servers and production databases",
      "To identify problems and establish a baseline for the new to-be system",
      "To train users before the final implementation phase",
      "To calculate the final salvage value of decommissioned hardware",
    ],
    correctAnswer: 1,
    explanation:
      "The analysis strategy begins by studying the as-is system to identify its flaws and guide the design of the improved to-be system.\n\nConfiguring servers belongs to the Implementation phase.\n\nTraining users occurs during the conversion and installation stage of the Implementation phase.\n\nCalculating salvage value is an accounting process and not the primary driver of studying the as-is system.",
  },
  {
    id: "csc312_ch2_092",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What document compiles the analysis strategy, requirements statements, and system models into a single package for approval?",
    options: [
      "System request",
      "System proposal",
      "System specification",
      "Project plan",
    ],
    correctAnswer: 1,
    explanation:
      "The system proposal is the primary deliverable of the Analysis phase, presenting findings and recommendations to the steering committee.\n\nThe system request is the initial proposal document submitted to start a project.\n\nThe system specification details how the system will be built and is produced in the Design phase.\n\nThe project plan dictates the schedules, tasks, and resources allocated during Planning.",
  },
  {
    id: "csc312_ch2_093",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following decisions is typically made during the Design Strategy step of the Design phase?",
    options: [
      "Determining the project budget and staffing levels",
      "Deciding whether to build, buy, or outsource the system",
      "Selecting the direct or parallel installation cutover style",
      "Establishing the post-implementation support plan",
    ],
    correctAnswer: 1,
    explanation:
      "The design strategy step determines whether the software will be developed in-house, purchased as a packaged solution, or outsourced.\n\nDetermining budget and staffing occurs in the Planning phase.\n\nSelecting installation style is part of the Implementation phase.\n\nEstablishing the support plan is also handled during the Implementation phase.",
  },
  {
    id: "csc312_ch2_094",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What SDLC phase produces the System Specification deliverable?",
    options: ["Planning", "Analysis", "Design", "Implementation"],
    correctAnswer: 2,
    explanation:
      "The Design phase outputs the system specification, which contains the database designs, physical models, interface layouts, and program specifications.\n\nThe Planning phase outputs the project plan.\n\nThe Analysis phase outputs the system proposal.\n\nThe Implementation phase outputs the fully installed system and support guidelines.",
  },
  {
    id: "csc312_ch2_095",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which step of the Implementation phase involves coding, unit testing, and integration testing of software components?",
    options: [
      "System construction",
      "System installation",
      "Support plan design",
      "Feasibility analysis",
    ],
    correctAnswer: 0,
    explanation:
      "System construction is the step where programmers write the actual code and perform the necessary tests to ensure the components operate correctly.\n\nSystem installation deals with the deployment, data migration, and conversion to the new platform.\n\nSupport plan design establishes the mechanisms for post-deployment review and maintenance.\n\nFeasibility analysis is performed during project initiation in the Planning phase.",
  },
  {
    id: "csc312_ch2_096",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What does a technical feasibility analysis primarily attempt to answer?",
    options: [
      "Should we build the system?",
      "Can we build the system?",
      "If we build it, will they come?",
      "How much profit will the system generate?",
    ],
    correctAnswer: 1,
    explanation:
      "Technical feasibility focuses on the technological constraints and capabilities, asking whether the organization can actually construct the system.\n\n'Should we build it?' is the core question of economic feasibility.\n\n'If we build it, will they come?' is the primary concern of organizational feasibility.\n\nProfit generation is a purely economic financial metric studied during cost-benefit analysis.",
  },
  {
    id: "csc312_ch2_097",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is a primary risk factor evaluated during a technical feasibility assessment?",
    options: [
      "The net present value of the expected project cash flows",
      "Familiarity with the technology or software development platform",
      "The level of support from senior executive stakeholders",
      "The alignment of the project with the corporate strategy",
    ],
    correctAnswer: 1,
    explanation:
      "Familiarity with technology is a major technical feasibility risk; using unfamiliar platforms increases the likelihood of delay or project failure.\n\nNet present value is an economic feasibility metric.\n\nStakeholder support is an organizational feasibility factor.\n\nCorporate strategy alignment is also evaluated under organizational feasibility.",
  },
  {
    id: "csc312_ch2_098",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "How does project size impact the risk profile of technical feasibility?",
    options: [
      "Larger projects are inherently less risky because they receive more funding",
      "Larger projects have higher risk because they are harder to manage and coordinate",
      "Project size has no relationship with technical risk parameters",
      "Smaller projects are riskier because they lack executive-level visibility",
    ],
    correctAnswer: 1,
    explanation:
      "Larger projects carry significantly higher technical risk due to the sheer complexity of coordinating more people, integration points, and resources.\n\nFunding does not automatically mitigate the coordination and technical integration risks of massive systems.\n\nSize is a critical technical feasibility risk factor directly listed in system development theory.\n\nSmaller projects are typically easier to track, adapt, and complete, making them less technically risky.",
  },
  {
    id: "csc312_ch2_099",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What question does economic feasibility seek to answer?",
    options: [
      "Can we build this system with our current engineers?",
      "Should we build this system?",
      "Are the end-users capable of using this interface?",
      "Will the system fit into our current server racks?",
    ],
    correctAnswer: 1,
    explanation:
      "Economic feasibility determines if the financial benefits justify the development costs, answering whether the organization should invest in it.\n\nEngineering capability is a technical feasibility issue.\n\nEnd-user capability and training are organizational feasibility issues.\n\nServer rack compatibility is a technical/infrastructure feasibility issue.",
  },
  {
    id: "csc312_ch2_100",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is classified as a development cost in an economic feasibility study?",
    options: [
      "Annual software licensing and renewal fees",
      "One-time programmer salaries and training costs",
      "Monthly hardware hosting and electricity expenses",
      "Ongoing system maintenance and technical support",
    ],
    correctAnswer: 1,
    explanation:
      "Development costs are one-time expenses occurred during the creation of the system, which includes the salaries of the team and initial training.\n\nAnnual licensing fees are operational, recurring costs.\n\nMonthly hosting expenses are recurring operational costs.\n\nOngoing maintenance is a recurring operational expense.",
  },
  {
    id: "csc312_ch2_101",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is classified as an operational cost in a cost-benefit analysis?",
    options: [
      "Purchase price of the server hardware at project launch",
      "System installation and data conversion consultant fees",
      "Ongoing software licensing fees and web hosting costs",
      "Initial training courses for the system development team",
    ],
    correctAnswer: 2,
    explanation:
      "Operational costs are recurring expenses required to keep the system running after it is deployed, such as hosting and licensing.\n\nHardware purchase at launch is a one-time development cost.\n\nConsultant fees for initial data conversion are a one-time development cost.\n\nInitial team training is a one-time development cost.",
  },
  {
    id: "csc312_ch2_102",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is an example of a tangible benefit in economic feasibility?",
    options: [
      "An increase in overall customer satisfaction ratings",
      "A twenty percent reduction in order processing times",
      "Enhanced brand recognition within the target market",
      "Better strategic decision-making capabilities for executives",
    ],
    correctAnswer: 1,
    explanation:
      "Tangible benefits can be directly measured and quantified in terms of money or time, such as a concrete percentage reduction in processing times.\n\nCustomer satisfaction is an intangible benefit because it is hard to measure with precise financial metrics.\n\nBrand recognition is an intangible benefit.\n\nBetter executive decision-making is valuable but hard to quantify financially, making it intangible.",
  },
  {
    id: "csc312_ch2_103",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is an example of an intangible benefit in a cost-benefit analysis?",
    options: [
      "A reduction in the number of operational staff required",
      "Improved prestige and corporate image among customers",
      "An annual savings of fifty thousand dollars on licensing",
      "An increase of five percent in raw product sales",
    ],
    correctAnswer: 1,
    explanation:
      "Corporate image and prestige are qualitative, intangible benefits that cannot be easily measured in raw dollar values.\n\nStaff reduction can be directly quantified by multiplying the cut headcount by salary, making it tangible.\n\nAnnual savings of fifty thousand dollars is a direct, quantifiable tangible benefit.\n\nAn increase in sales is a quantifiable tangible benefit.",
  },
  {
    id: "csc312_ch2_104",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What financial metric represents the point in time where the cumulative benefits of a system equal the cumulative costs?",
    options: [
      "Net Present Value",
      "Break-even point",
      "Return on Investment",
      "Internal Rate of Return",
    ],
    correctAnswer: 1,
    explanation:
      "The break-even point (or payback period) represents the exact time when the system has paid for its development and operational costs through its benefits.\n\nNet Present Value measures the present-day value of all cash inflows and outflows over time.\n\nReturn on Investment calculates the ratio of net benefits to total costs.\n\nInternal Rate of Return is the discount rate that makes the net present value of all cash flows equal to zero.",
  },
  {
    id: "csc312_ch2_105",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which key stakeholder in organizational feasibility is described as the high-level executive who sponsors the project, provides resources, and advocates for its success?",
    options: [
      "System user",
      "Organizational manager",
      "Project champion",
      "Systems analyst",
    ],
    correctAnswer: 2,
    explanation:
      "The champion is an executive-level sponsor who initiates the project, secures the funding, and actively promotes the project within the organization.\n\nSystem users are the individuals who will interact with the system on a daily operational level.\n\nOrganizational managers allocate operational budgets and encourage their subordinates to adopt the system.\n\nThe systems analyst is a technical team member who designs the software specifications.",
  },
  {
    id: "csc312_ch2_106",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What risk is introduced if system users are not included or considered in the organizational feasibility analysis?",
    options: [
      "The database query execution plans will fail",
      "The software might face severe user resistance and eventual abandonment",
      "The project will immediately violate technical network security protocols",
      "The cash flow calculations will become mathematically invalid",
    ],
    correctAnswer: 1,
    explanation:
      "If end-users are ignored, the system may not match their daily workflow, leading to widespread resistance, workarounds, or total abandonment of the system.\n\nDatabase query compilation is unaffected by organizational behavior.\n\nNetwork security protocols are technical matters independent of user feedback.\n\nCash flow calculations are mathematical tools and are not invalidated by user opinions.",
  },
  {
    id: "csc312_ch2_107",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is a methodology in the context of system development?",
    options: [
      "A specific programming language compiler or interpreter",
      "A formalized approach to implementing the System Development Life Cycle",
      "A hardware testing tool used to measure database response times",
      "An organizational policy handbook detailing employee benefits",
    ],
    correctAnswer: 1,
    explanation:
      "A methodology is a structured, formalized approach to executing the SDLC, consisting of distinct steps, deliverables, and standard techniques.\n\nMethodologies are abstract frameworks, not software tools like compilers.\n\nHardware testing tools are physical or digital utility programs.\n\nEmployee benefit manuals are HR policy documents unrelated to software engineering lifecycles.",
  },
  {
    id: "csc312_ch2_108",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which major design methodology family is characterized by a highly sequential, document-centric approach where one phase must finish before the next begins?",
    options: [
      "Agile Development",
      "Structured Design",
      "Rapid Application Development",
      "Extreme Programming",
    ],
    correctAnswer: 1,
    explanation:
      "Structured Design methodologies, such as Waterfall, emphasize step-by-step progress with high documentation levels before proceeding sequentially.\n\nAgile Development focuses on rapid iterations, working software, and minimized up-front documentation.\n\nRapid Application Development emphasizes speed and continuous prototyping over strict sequential phases.\n\nExtreme Programming is a subset of Agile that relies on continuous user feedback and fast release cycles.",
  },
  {
    id: "csc312_ch2_109",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is a major disadvantage of the classic Waterfall methodology?",
    options: [
      "It completely lacks any formal planning or architectural design phases",
      "A long time elapses between the initial analysis and the delivery of working software",
      "It requires a highly self-organizing team that rejects documentation",
      "It can only be used on very small, low-budget software projects",
    ],
    correctAnswer: 1,
    explanation:
      "In Waterfall, the system is not delivered until the final implementation phase. This means users may wait months or years before seeing any functional software.\n\nWaterfall has extensive and highly formal planning and design phases.\n\nWaterfall is a document-heavy, management-led approach, the opposite of self-organizing team dynamics.\n\nWaterfall is historically applied to very large, complex, and highly regulated projects.",
  },
  {
    id: "csc312_ch2_110",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which methodology attempts to address the long timelines of Waterfall by performing the design and implementation phases concurrently across multiple subprojects?",
    options: [
      "Waterfall method",
      "Parallel development",
      "System prototyping",
      "Scrum",
    ],
    correctAnswer: 1,
    explanation:
      "Parallel development splits the overall project into separate subprojects that are designed and implemented simultaneously, shortening the total schedule.\n\nThe Waterfall method performs all activities in a single, sequential line.\n\nSystem prototyping builds a single, working mockup that is continuously refined.\n\nScrum organizes development into uniform 2 to 4 week sprints.",
  },
  {
    id: "csc312_ch2_111",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which RAD methodology breaks down the system requirements into a series of versions, where each version is sequentially analyzed, designed, and implemented?",
    options: [
      "Parallel development",
      "Phased development",
      "Throwaway prototyping",
      "Extreme programming",
    ],
    correctAnswer: 1,
    explanation:
      "Phased development delivers the system in a series of versions. Version 1 contains the core features, and successive versions add more features as they are completed.\n\nParallel development works on subprojects concurrently, but delivers a single unified system at the end.\n\nThrowaway prototyping builds mockups purely to explore ideas and then discards them.\n\nExtreme programming uses continuous iterations of unit testing and pair programming.",
  },
  {
    id: "csc312_ch2_112",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is a key benefit of using the Phased Development methodology?",
    options: [
      "The system is built perfectly the first time, preventing future modification",
      "Users get a functional, basic version of the system quickly",
      "It requires no user training or documentation whatsoever",
      "It completely eliminates the risk of technical architectural errors",
    ],
    correctAnswer: 1,
    explanation:
      "Phased development delivers Version 1 of the system rapidly, allowing users to interact with and benefit from core features while subsequent versions are being coded.\n\nPhased development expects the system to change and grow over time, so it is not 'built once and never touched'.\n\nUsers still require training and documentation for each released version.\n\nArchitectural risks can still occur if the foundational design cannot support the features added in later phases.",
  },
  {
    id: "csc312_ch2_113",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which methodology merges analysis, design, and implementation into a single concurrent cycle to build a working, interactive mockup that is repeatedly refined?",
    options: [
      "Waterfall development",
      "System prototyping",
      "Throwaway prototyping",
      "Parallel development",
    ],
    correctAnswer: 1,
    explanation:
      "System prototyping involves a rapid, continuous cycle of analysis, design, and coding to build a simple working version of the system that is refined based on user feedback.\n\nWaterfall keeps these phases completely separate and sequential.\n\nThrowaway prototyping builds mockups to answer questions but discards them rather than evolving them into the final product.\n\nParallel development splits the system into subprojects without continuous circular prototyping.",
  },
  {
    id: "csc312_ch2_114",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What risk is highly associated with System Prototyping?",
    options: [
      "The project will take twice as long to show any working model to stakeholders",
      "The project may suffer from feature creep as users continually ask for new additions",
      "The development team will spend too much time writing formal design documents",
      "The prototype will be discarded entirely, wasting all coding effort",
    ],
    correctAnswer: 1,
    explanation:
      "Since users can see and interact with the prototype, they often suggest a constant stream of new features, which can lead to uncontrolled project expansion.\n\nSystem prototyping shows working models to stakeholders very quickly.\n\nSystem prototyping is criticized for lack of documentation and analytical discipline, not too much of it.\n\nDiscarding the prototype is a feature of Throwaway Prototyping, not System Prototyping.",
  },
  {
    id: "csc312_ch2_115",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which methodology utilizes design prototypes to explore user interface options or technical challenges, only to discard them once the requirements are understood?",
    options: [
      "Waterfall method",
      "System prototyping",
      "Throwaway prototyping",
      "Phased development",
    ],
    correctAnswer: 2,
    explanation:
      "Throwaway prototyping builds mockups solely to gather requirements and test ideas. Once the needs are clarified, the prototype is discarded, and the real system is built from scratch.\n\nWaterfall does not use iterative prototyping mockups.\n\nSystem prototyping refines and builds upon the prototype until it becomes the final operational system.\n\nPhased development deploys stable, working versions directly into production.",
  },
  {
    id: "csc312_ch2_116",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is an advantage of Throwaway Prototyping over System Prototyping?",
    options: [
      "It is much faster because the team does not have to rebuild the system from scratch",
      "It produces a highly stable and well-architected final system",
      "It requires zero documentation or analysis phases",
      "It allows developers to skip testing during the implementation phase",
    ],
    correctAnswer: 1,
    explanation:
      "Because the final system is built from scratch using clean, well-thought-out architectural patterns, it is typically much more stable and robust than an evolved prototype.\n\nThrowaway prototyping is slower than system prototyping because the code must be rewritten for the final product.\n\nIt still requires analysis to synthesize the lessons learned from the discarded prototype.\n\nTesting is still highly critical during the construction of the final product.",
  },
  {
    id: "csc312_ch2_117",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which core philosophy drives Agile Development methodologies?",
    options: [
      "Maximizing the amount of up-front documentation before writing any code",
      "Focusing on rapid delivery of working software through iterative cycles",
      "Enforcing strict hierarchical management and eliminating analyst roles",
      "Restricting software changes once the design phase is completed",
    ],
    correctAnswer: 1,
    explanation:
      "Agile values working software, collaborative partnerships, and responding to change over comprehensive up-front documentation.\n\nAgile minimizes up-front documentation in favor of continuous iterative delivery.\n\nAgile values self-organizing teams, but still relies on analysts to understand user stories and requirements.\n\nAgile actively welcomes requirements changes, even late in the development cycle.",
  },
  {
    id: "csc312_ch2_118",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which environment is most suitable for the Extreme Programming methodology?",
    options: [
      "A large-scale project with hundreds of developers and highly stable requirements",
      "A small-scale project with a tight-knit team and highly volatile requirements",
      "A multi-year, highly regulated defense contract requiring complete up-front documentation",
      "An outsource model where developers have zero contact with business stakeholders",
    ],
    correctAnswer: 1,
    explanation:
      "XP shines on small-scale projects with small, co-located teams and requirements that change rapidly, as its practices are designed for quick feedback.\n\nXP does not scale easily to massive, multi-team projects with hundreds of developers.\n\nHighly regulated projects with fixed up-front documentation are better suited to Waterfall or structured approaches.\n\nXP requires continuous stakeholder and customer involvement to succeed.",
  },
  {
    id: "csc312_ch2_119",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "If a project has unclear user requirements, which methodology is the most appropriate choice?",
    options: [
      "Waterfall method",
      "System prototyping",
      "Parallel development",
      "Structured Design",
    ],
    correctAnswer: 1,
    explanation:
      "System prototyping allows users to interact with a working model of the system, helping them define and clarify their requirements as they see the system evolve.\n\nWaterfall requires highly stable and clear requirements at the start because changing them later is costly.\n\nParallel development also requires clear initial requirements so the system can be partitioned into subprojects.\n\nStructured design models generally struggle with highly volatile or unclear requirements.",
  },
  {
    id: "csc312_ch2_120",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which methodology is best suited if a project has clear requirements, familiar technology, and a need for high reliability, but schedule time is not critical?",
    options: [
      "Waterfall method",
      "System prototyping",
      "Extreme programming",
      "Agile Development",
    ],
    correctAnswer: 0,
    explanation:
      "Waterfall works well when requirements are well understood, technology is familiar, and reliability is key, as the extensive documentation ensures a systematic design.\n\nSystem prototyping is designed for unclear requirements and is less focused on formal, reliable architecture.\n\nExtreme programming is designed for rapidly changing requirements and short timelines.\n\nAgile development is built to handle change, which is unnecessary if the requirements are completely stable.",
  },
  {
    id: "csc312_ch2_121",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "A systems analyst must respect intellectual property and be honest and trustworthy. Which skill category does this represent?",
    options: [
      "Technical skills",
      "Business skills",
      "Ethical skills",
      "Interpersonal skills",
    ],
    correctAnswer: 2,
    explanation:
      "Ethical skills are essential for maintaining professional integrity, respecting copyrights/patents, and being a trustworthy partner to stakeholders.\n\nTechnical skills involve understanding computing infrastructure, networks, and coding concepts.\n\nBusiness skills involve understanding how organizations function and generate revenue.\n\nInterpersonal skills cover communication, presentation, and team collaboration.",
  },
  {
    id: "csc312_ch2_122",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is the primary purpose of the System Request document?",
    options: [
      "To document the complete source code and database schemas",
      "To initiate a system project by outlining the business need and expected value",
      "To summarize the post-implementation review and user feedback",
      "To list the test cases and bugs found during system construction",
    ],
    correctAnswer: 1,
    explanation:
      "A system request is a formal document that initiates a project, summarizing the business reason for the system and the expected benefits.\n\nDatabase schemas are documented in the system specification during the Design phase.\n\nPost-implementation review is summarized in the support plan or system summary at the end of the lifecycle.\n\nTest cases are documented during the system construction step of the Implementation phase.",
  },
  {
    id: "csc312_ch2_123",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is a key element typically included in a System Request?",
    options: [
      "The physical SQL database schema creation scripts",
      "The project sponsor, business need, and system requirements",
      "The names and salaries of the programmers on the team",
      "The complete sequence of unit test cases",
    ],
    correctAnswer: 1,
    explanation:
      "The system request contains key high-level information, including the project sponsor, the business need, business requirements, and the business value.\n\nSQL scripts are created much later during the Design phase.\n\nTeam salaries and staffing assignments are detailed in the project plan, not the initial system request.\n\nUnit test cases are written during the construction step of the Implementation phase.",
  },
  {
    id: "csc312_ch2_124",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is the role of the Steering Committee regarding a System Request?",
    options: [
      "To write the source code for the requested software features",
      "To review the request and decide whether to approve the project",
      "To conduct individual interviews with every single system user",
      "To install the database servers in the server room",
    ],
    correctAnswer: 1,
    explanation:
      "The steering committee or approval committee reviews the system request and the feasibility analysis to decide whether to fund and initiate the project.\n\nSteering committees do not write code; that is the task of the programmers.\n\nConducting interviews is the job of the systems analyst during the Analysis phase.\n\nInstalling database servers is performed by infrastructure analysts or systems administrators.",
  },
  {
    id: "csc312_ch2_125",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What is the main difference between System Prototyping and Throwaway Prototyping?",
    options: [
      "System prototyping uses visual designs, while throwaway uses command-line interfaces",
      "System prototyping evolves the mockup into the final system, while throwaway discards it",
      "System prototyping is only used for databases, while throwaway is only used for networks",
      "System prototyping takes much longer to show a mockup to the users",
    ],
    correctAnswer: 1,
    explanation:
      "In system prototyping, the prototype is continuously refined and eventually deployed as the final system. In throwaway prototyping, the prototype is built to learn requirements and then discarded.\n\nBoth use whatever UI style is appropriate for the system being modeled.\n\nBoth can model any aspect of a system, not just databases or networks.\n\nSystem prototyping and throwaway prototyping both present mockups to users very quickly.",
  },
  {
    id: "csc312_ch2_126",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In systems development, what is the 'to-be' system?",
    options: [
      "The old legacy system that needs to be retired",
      "The newly designed information system that will be implemented",
      "The system prototype that was discarded during the analysis phase",
      "The documentation standard used by the systems analyst",
    ],
    correctAnswer: 1,
    explanation:
      "The 'to-be' system is the proposed new system designed to resolve the issues identified in the 'as-is' system.\n\nThe legacy system to be retired is the 'as-is' system.\n\nA discarded prototype is a throwaway design asset.\n\nDocumentation standards are rules for writing reports, not a target system design.",
  },
  {
    id: "csc312_ch2_127",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "What does a compatibility risk assessment evaluate under technical feasibility?",
    options: [
      "Whether the project champion will approve the final financial budget",
      "How well the new system will integrate with the existing technology stack",
      "Whether the users will resist using the new software interface",
      "How many monthly licenses the organization must purchase",
    ],
    correctAnswer: 1,
    explanation:
      "Compatibility risk looks at how easily the new software will communicate and exchange data with the organization's existing systems.\n\nProject champion approvals are part of organizational feasibility.\n\nUser resistance is an organizational feasibility risk.\n\nLicense purchasing calculations are part of economic feasibility.",
  },
  {
    id: "csc312_ch2_128",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which role is primarily responsible for ensuring that a newly deployed system is adopted by its intended users?",
    options: [
      "Infrastructure analyst",
      "Change management analyst",
      "Database administrator",
      "Lead software developer",
    ],
    correctAnswer: 1,
    explanation:
      "The change management analyst focuses on user adoption, managing training, and helping the organization adapt to the changes introduced by the new system.\n\nThe infrastructure analyst focuses on databases, hardware, and network integration.\n\nThe database administrator is responsible for database design, security, and optimization.\n\nThe lead software developer focuses on writing clean, functional code according to the system specifications.",
  },
  {
    id: "csc312_ch2_129",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In system development methodologies, what is 'feature creep'?",
    options: [
      "A security bug that allows unauthorized access to the database",
      "The uncontrolled growth of system requirements as the project progresses",
      "The gradual physical degradation of server hardware components",
      "A technique used to optimize the speed of SQL queries",
    ],
    correctAnswer: 1,
    explanation:
      "Feature creep occurs when new requirements are continuously added to a project without proper control, extending the schedule and budget.\n\nFeature creep is a scope management issue, not a software security bug.\n\nPhysical degradation of hardware is a hardware maintenance concern.\n\nQuery optimization is a database performance technique.",
  },
  {
    id: "csc312_ch2_130",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The change management analyst focuses primarily on the hardware, networks, and database integration issues of a system project.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The change management analyst focuses on the people and management issues, while the infrastructure analyst focuses on the technical hardware, database, and network issues.",
  },
  {
    id: "csc312_ch2_131",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Economic feasibility uses financial metrics like Net Present Value and Return on Investment to determine if a system should be built.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Economic feasibility conducts a cost-benefit analysis, utilizing NPV, ROI, and break-even points to evaluate the financial viability of the system.",
  },
  {
    id: "csc312_ch2_132",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "An intangible benefit is a gain that can be easily measured and given a precise financial value in a cost-benefit analysis.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "A tangible benefit is easily measured and given a financial value. An intangible benefit is qualitative and difficult to quantify, such as improved company prestige.",
  },
  {
    id: "csc312_ch2_133",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Under organizational feasibility, the champion is a high-level executive who sponsors the project, secures resources, and promotes its success.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The champion provides crucial leadership, high-level advocacy, and financial sponsorship to overcome organizational resistance and ensure project alignment.",
  },
  {
    id: "csc312_ch2_134",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "The Waterfall methodology is highly flexible and makes it easy to add or modify system requirements in the late stages of development.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The Waterfall methodology is sequential and rigid. Making changes late in the lifecycle is extremely difficult and expensive because earlier phases must be reopened.",
  },
  {
    id: "csc312_ch2_135",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "In Extreme Programming, pair programming is a core practice where two developers work together at the same computer to write and review code.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Pair programming is a fundamental XP practice designed to improve software quality, catch errors early, and facilitate knowledge sharing among developers.",
  },
  {
    id: "csc312_ch2_136",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is an input or activity handled during the Planning phase of the SDLC?",
    options: [
      "Developing the initial system request document",
      "Writing physical SQL database creation scripts",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The system request is developed during project initiation in the Planning phase to outline the business need and value. Writing SQL scripts is a detailed activity in the Design phase, so All of the above is incorrect.",
  },
  {
    id: "csc312_ch2_137",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is a primary risk factor evaluated during a technical feasibility analysis?",
    options: [
      "The development team's familiarity with the proposed technology stack",
      "The physical size and resource requirements of the project",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "Technical feasibility evaluates risk factors including familiarity with the application, familiarity with the technology, project size, and compatibility with existing infrastructure. Both options are correct, making All of the above the right choice.",
  },
  {
    id: "csc312_ch2_138",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which stakeholder group is evaluated during an organizational feasibility study to ensure system adoption?",
    options: [
      "The external competitors operating within the same market segment",
      "The system users who will interact with the software daily",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "System users are critical internal stakeholders whose daily interaction dictates the system's success. External competitors are not internal stakeholders evaluated under organizational feasibility.",
  },
  {
    id: "csc312_ch2_139",
    course: "CSC 312",
    chapter: "Chapter 2",
    text: "Which of the following is a core step during the Analysis phase of the SDLC?",
    options: [
      "Designing physical user interface layouts and database schemas",
      "Writing and executing unit test cases during system construction",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Designing interface layouts and database schemas belongs to the Design phase. Writing and executing unit tests belongs to the Implementation phase. Since neither is an Analysis phase step, None of the above is correct.",
  },
];

export default csc312Lecture3Combined;
