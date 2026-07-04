import { QuestionV2 } from "@/lib/quiz-types";

const csc312Letcure12: QuestionV2[] = [
  {
    id: "csc312_ch1_001",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which phases of the Systems Development Life Cycle (SDLC) are the primary focus of System Analysis and Design (SAD)?",
    options: [
      "Analysis and Design",
      "Planning and Implementation",
      "Design and Maintenance",
      "Planning and Analysis",
    ],
    correctAnswer: 0,
    explanation:
      "According to the course content slide, SAD focuses primarily on Phase 2 (Analysis) and Phase 3 (Design) of the SDLC.\n\nPlanning and Implementation are phases 1 and 4, which are outside the central core focus of SAD.\n\nDesign and Maintenance omits the critical analysis phase which forms the core of SAD's front-end activities.\n\nPlanning and Analysis omits the design phase which is the critical transition to building the concrete system.",
  },
  {
    id: "csc312_ch1_002",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The word system is derived from which of the following terms and languages?",
    options: [
      "The Greek word Systema",
      "The Latin word Systemis",
      "The French word Systeme",
      "The German word Systemen",
    ],
    correctAnswer: 0,
    explanation:
      "According to the system definitions slide, the word system originates from the Greek word Systema, meaning an organized whole or a connected assembly.\n\nThe Latin word Systemis is a fictitious distractor not referenced in the slides.\n\nThe French word Systeme is an evolutionary derivative, not the primary ancient root.\n\nThe German word Systemen is a fictitious distractor not mentioned in the course material.",
  },
  {
    id: "csc312_ch1_003",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The word system is derived from a Latin word meaning a disjointed collection of entities.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The course slides explicitly state that the word system comes from the Greek word Systema, which means an organized whole or a connected assembly of parts, not a Latin word for a disjointed collection.",
  },
  {
    id: "csc312_ch1_004",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system element acts as the dividing line that separates the internal components of a system from the external environment?",
    options: [
      "System Boundary",
      "System Interface",
      "System Processor",
      "System Control",
    ],
    correctAnswer: 0,
    explanation:
      "Under the System Elements section, the System Boundary defines the limit of the system and separates it from its external environment.\n\nSystem Interface is the connection point or medium through which two systems or subsystems interact.\n\nSystem Processor represents the elements that perform the actual transformation of inputs into outputs.\n\nSystem Control is the monitoring component that keeps the system within acceptable operational limits.",
  },
  {
    id: "csc312_ch1_005",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "According to the course materials, which of the following is a key characteristic of a good system?",
    options: [
      "Efficiency",
      "Arbitrary Complexity",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The System Characteristics list identifies Efficiency as one of the five key traits of a good system. Arbitrary complexity is a negative design attribute and not a characteristic of a good system, making option 1 the only correct specific choice.",
  },
  {
    id: "csc312_ch1_006",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When an organization hires an external systems analyst to provide an objective, unbiased perspective on their business operations, which analyst role is being utilized?",
    options: [
      "Consultant",
      "Supporting expert",
      "Agent of change",
      "Project manager",
    ],
    correctAnswer: 0,
    explanation:
      "Under the Primary Roles of a Systems Analyst slide, the Consultant role represents an external professional hired to offer a fresh, objective view of the organization.\n\nSupporting expert is an internal technical resource that provides technical guidance and support to development teams.\n\nAgent of change is a role where the analyst acts as a catalyst to facilitate, manage, and promote organizational transition.\n\nProject manager is a leadership role focused on project scheduling and resource management, rather than an objective external consulting role.",
  },
  {
    id: "csc312_ch1_007",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "During system planning, assessing whether the development team has the necessary expertise and whether the required hardware is available represents which type of feasibility?",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "Operational Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Types of Feasibility slide defines Technical Feasibility as the assessment of whether the technology, skills, and hardware are available or can be acquired.\n\nEconomic Feasibility involves conducting a cost-benefit analysis to determine if the system is financially viable.\n\nOperational Feasibility assesses how well the proposed system will fit into the organizational culture and if users will accept it.\n\nLegal Feasibility evaluates whether the system complies with laws, regulations, and existing contracts.",
  },
  {
    id: "csc312_ch1_008",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Systems Development Life Cycle (SDLC), System Analysis is primarily concerned with determining what the system must do, while System Design focuses on how the system will do it.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "According to the SAD Differences slide, System Analysis is defined as focusing on what the system should do (requirements), whereas System Design specifies how the system will accomplish its objectives (implementation details).",
  },
  {
    id: "csc312_ch1_009",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of design describes the abstract flow of data, inputs, outputs, and relationships in a system without specifying any concrete hardware or technology details?",
    options: [
      "Logical Design",
      "Physical Design",
      "Architectural Design",
      "Structured Design",
    ],
    correctAnswer: 0,
    explanation:
      "The Logical vs Physical Design slide states that Logical Design is an abstract representation of data flows, structures, and business rules, independent of any specific hardware platform.\n\nPhysical Design is the concrete implementation that specifies the actual hardware, database schemas, and coding technology to be used.\n\nArchitectural Design refers to the broad structure of the system's software modules, which can encompass both logical and physical elements.\n\nStructured Design is a specific design methodology utilizing structured charts, not the abstract conceptual model itself.",
  },
  {
    id: "csc312_ch1_010",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "According to the lectures, which of the following is an established primary role of a systems analyst?",
    options: [
      "Financial Auditor",
      "Agent of change",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "The course slides list the three primary roles of a systems analyst as Consultant, Supporting expert, and Agent of change. Financial Auditor is an independent role in finance and not a primary role of a systems analyst.",
  },
  {
    id: "csc312_ch1_011",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following system elements monitors output and compares it to established standards to determine if corrective action is needed?",
    options: ["Control", "Input", "Processor", "Boundary"],
    correctAnswer: 0,
    explanation:
      "The slides on System Elements state that Control monitors the system's performance and initiates correction when deviation occurs.\n\nInput represents the raw materials, data, or resources introduced into the system for processing.\n\nProcessor represents the internal operations that transform inputs into finished outputs.\n\nBoundary is the line that defines the system's scope and separates it from the external environment.",
  },
  {
    id: "csc312_ch1_012",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A system that is relatively isolated from its surrounding environment and operates under highly predictable, controlled conditions is known as which of the following?",
    options: ["Closed System", "Open System", "Subsystem", "Supersystem"],
    correctAnswer: 0,
    explanation:
      "The Open vs Closed Systems section defines a Closed System as one that does not interact significantly with its environment and is relatively self-contained and predictable.\n\nOpen System refers to a system that heavily interacts with its environment, exchanging information, energy, or material.\n\nSubsystem is a smaller, nested system that functions within a larger overall system architecture.\n\nSupersystem is a high-level larger system that contains other smaller systems and subsystems.",
  },
  {
    id: "csc312_ch1_013",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Ajax is a modern object-oriented programming language that is designed to replace JavaScript in web applications.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "According to the important facts section of the slides, Ajax is not a new programming language, but rather a technique used to update parts of a web page asynchronously.",
  },
  {
    id: "csc312_ch1_014",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A requirement stating that a system must load its search results within 1.5 seconds is classified as which of the following?",
    options: [
      "Non-functional requirement",
      "Functional requirement",
      "Logical requirement",
      "Physical requirement",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Functional vs Non-functional requirements slide, a Non-functional requirement specifies performance, reliability, security, or quality constraints.\n\nFunctional requirement refers to specific behaviors, features, or direct functions the system must perform.\n\nLogical requirement is a non-standard classification, as requirements are primarily categorized into functional and non-functional.\n\nPhysical requirement is a term used to describe physical environmental needs, not software performance targets.",
  },
  {
    id: "csc312_ch1_015",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which software development methodology is characterized by a linear, sequential flow where each phase must be fully completed before the next phase begins?",
    options: [
      "Waterfall Model",
      "Agile Methodology",
      "Spiral Model",
      "Prototyping Model",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide states that the Waterfall Model is a sequential, structured approach where progress flows downward through rigid phases.\n\nAgile Methodology is an iterative, highly flexible approach focused on incremental releases and adaptability.\n\nSpiral Model is an iterative, risk-driven methodology focusing heavily on risk analysis and mitigation.\n\nPrototyping Model is a design methodology that builds simplified working versions to clarify requirements early.",
  },
  {
    id: "csc312_ch1_016",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When a systems analyst works within an organization to provide specific technical expertise, guide development teams on system tools, and support existing structures, they are fulfilling which role?",
    options: [
      "Supporting expert",
      "Consultant",
      "Agent of change",
      "Systems integrator",
    ],
    correctAnswer: 0,
    explanation:
      "The Analyst Roles slide states that the Supporting expert provides internal technical support, advice, and guidance based on their specialized system knowledge.\n\nConsultant refers to an external analyst hired to offer an objective, unbiased perspective on organizational systems.\n\nAgent of change refers to an analyst who actively advocates, drives, and manages organizational transition and technological adoption.\n\nSystems integrator is a technical position focused on connecting different software systems, not a primary analyst role from the slides.",
  },
  {
    id: "csc312_ch1_017",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Performing a cost-benefit analysis to determine whether the financial savings of a new system outweigh its developmental and operational costs falls under which feasibility type?",
    options: [
      "Economic Feasibility",
      "Technical Feasibility",
      "Operational Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "Under the Types of Feasibility slide, Economic Feasibility is defined as evaluating financial costs, benefits, return on investment, and resource budgets.\n\nTechnical Feasibility evaluates hardware capabilities, technology availability, and the development team's expertise.\n\nOperational Feasibility evaluates how well the system matches user work processes and if the organization will support it.\n\nLegal Feasibility evaluates regulatory compliance, copyright compliance, and contractual obligations.",
  },
  {
    id: "csc312_ch1_018",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following are recognized categories of feasibility assessed during system planning?",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 2,
    explanation:
      "Both Technical Feasibility and Economic Feasibility are standard feasibility types (along with Operational and Legal) required to be assessed. Therefore, 'All of the above' is the correct choice.",
  },
  {
    id: "csc312_ch1_019",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which category of systems analyst skills includes active listening, empathy, clear oral communication, and the ability to resolve conflicts among stakeholders?",
    options: [
      "Interpersonal Skills",
      "Technical Skills",
      "Analytical Skills",
      "Management Skills",
    ],
    correctAnswer: 0,
    explanation:
      "The Analyst Skills slide defines Interpersonal Skills as the ability to communicate, build relationships, manage conflict, and coordinate with users and team members.\n\nTechnical Skills relate to database administration, hardware configuration, and programming proficiency.\n\nAnalytical Skills relate to problem decomposition, systems thinking, and structural problem-solving.\n\nManagement Skills involve project planning, scheduling, resource budgeting, and risk mitigation.",
  },
  {
    id: "csc312_ch1_020",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A systems analyst is currently defining the file structures, network configurations, database tables, and programming language specifications for a new system. This analyst is working on what?",
    options: [
      "Physical Design",
      "Logical Design",
      "System Analysis",
      "Feasibility Study",
    ],
    correctAnswer: 0,
    explanation:
      "The Logical vs Physical Design slide states that Physical Design is the concrete, technology-dependent phase of mapping out specific hardware, schemas, and technical files.\n\nLogical Design focuses on abstract data flow, relationships, and conceptual schemas, independent of specific technology.\n\nSystem Analysis focuses on defining the business requirements and understanding 'what' the system must do.\n\nFeasibility Study is an early planning activity focused on determining if the project is viable, before design begins.",
  },
  {
    id: "csc312_ch1_021",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which software development methodology utilizes an iterative, risk-driven framework structured around four key quadrants to manage high-cost, complex projects?",
    options: [
      "Spiral Model",
      "Waterfall Model",
      "Rapid Application Development",
      "V-Model",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies section defines the Spiral Model as a risk-driven, iterative approach designed to handle complex systems through continuous risk assessment cycles.\n\nWaterfall Model is a linear, non-iterative approach that is highly rigid and does not focus on cyclical risk assessment.\n\nRapid Application Development focuses heavily on speed, prototyping, and JAD sessions rather than systematic quadrant risk analysis.\n\nV-Model is a sequential model emphasizing verification and validation mapping, without iterative quadrant cycles.",
  },
  {
    id: "csc312_ch1_022",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Assessing if the end-users of a proposed system will resist the new software or if the system matches the existing organizational culture is an evaluation of what?",
    options: [
      "Operational Feasibility",
      "Technical Feasibility",
      "Economic Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The Feasibility section defines Operational Feasibility as evaluating how the system will be received by users and whether it fits into the daily organizational workflows.\n\nTechnical Feasibility evaluates technological constraints, system performance possibilities, and team capability.\n\nEconomic Feasibility evaluates the project's costs and tangible/intangible benefits.\n\nLegal Feasibility evaluates copyright, liability, data protection, and other legal implications.",
  },
  {
    id: "csc312_ch1_023",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "No single systems development methodology is perfect or universally superior for all types of software projects.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The important facts and methodologies slides state clearly that no single development methodology is perfect and each has its own strengths and weaknesses depending on the project.",
  },
  {
    id: "csc312_ch1_024",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Evaluating whether a proposed medical database system complies with government health data privacy regulations and intellectual property laws falls under which feasibility category?",
    options: [
      "Legal Feasibility",
      "Economic Feasibility",
      "Technical Feasibility",
      "Operational Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "Under the Types of Feasibility slide, Legal Feasibility is concerned with ensuring compliance with national/international laws, patent laws, contracts, and regulations.\n\nEconomic Feasibility covers budgets, financial savings, and project development costs.\n\nTechnical Feasibility covers the availability of development tools, server hardware, and coding platforms.\n\nOperational Feasibility covers user training needs and organizational alignment.",
  },
  {
    id: "csc312_ch1_025",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When an analyst acts as a catalyst for innovation, coordinates user training programs, and actively guides the organization to transition to a new software system, they are playing which role?",
    options: [
      "Agent of change",
      "Consultant",
      "Supporting expert",
      "Quality assurance lead",
    ],
    correctAnswer: 0,
    explanation:
      "Under the Primary Roles of a Systems Analyst slide, the Agent of change is the catalyst who facilitates and manages organizational transitions and user adaptation.\n\nConsultant is an external hire brought in to offer an objective, independent view of the systems without necessarily leading daily organizational change.\n\nSupporting expert is an internal advisor who provides specialized technical support and tools to developers.\n\nQuality assurance lead is a testing-focused role concerned with software standards, not a primary analyst role described in the slides.",
  },
  {
    id: "csc312_ch1_026",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following categories of analyst skills includes detailed knowledge of databases, networking, programming, and hardware systems?",
    options: [
      "Technical Skills",
      "Interpersonal Skills",
      "Analytical Skills",
      "Management Skills",
    ],
    correctAnswer: 0,
    explanation:
      "The Analyst Skills slide defines Technical Skills as those relating to direct technical domains like programming, database management, networks, and hardware.\n\nInterpersonal Skills relate to stakeholder communication, active listening, and conflict management.\n\nAnalytical Skills relate to problem decomposition, identifying root causes, and systems-level logical modeling.\n\nManagement Skills relate to project scheduling, tracking, resource budgeting, and scope control.",
  },
  {
    id: "csc312_ch1_027",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Any element, department, or external factor that exists outside the system boundary but can directly influence or be influenced by the system is known as what?",
    options: ["Environment", "Interface", "Subsystem", "Processor"],
    correctAnswer: 0,
    explanation:
      "The System Elements slide defines the Environment as anything outside the system boundary that interacts with, affects, or is affected by the system.\n\nInterface represents the physical or logical link through which distinct systems connect and exchange data.\n\nSubsystem represents a smaller system that operates inside the main system boundary.\n\nProcessor represents the transforming engine that changes system inputs into system outputs.",
  },
  {
    id: "csc312_ch1_028",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a characteristic of physical design in systems development?",
    options: [
      "Hardware-independent data structures",
      "Conceptual Entity-Relationship Diagrams",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Logical design features abstract representations, conceptual models like Entity-Relationship Diagrams, and data structures independent of hardware. Since both options describe logical design rather than physical design, 'None of the above' is correct.",
  },
  {
    id: "csc312_ch1_029",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A requirement stating that 'The payroll system must automatically calculate tax deductions for all salaried employees' is classified as which of the following?",
    options: [
      "Functional requirement",
      "Non-functional requirement",
      "Constraint-based requirement",
      "Technical requirement",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Functional vs Non-functional requirements slide, a Functional requirement defines a specific service, operation, behavior, or feature that the system must provide.\n\nNon-functional requirement defines quality attributes, performance, security, and constraints of the system.\n\nConstraint-based requirement is an informal term used for general limitations, not a primary classification from the slides.\n\nTechnical requirement refers to specific implementation technologies rather than a direct business feature.",
  },
  {
    id: "csc312_ch1_030",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "What system component serves as the medium or point of connection through which two subsystems exchange data, energy, or material?",
    options: ["Interface", "Boundary", "Processor", "Control"],
    correctAnswer: 0,
    explanation:
      "The System Elements slide states that the Interface is the shared boundary or connection medium where two independent systems meet and interact.\n\nBoundary is the dividing line that isolates a system from its surrounding environment.\n\nProcessor is the processing component that transforms incoming resources into finished outputs.\n\nControl is the steering mechanism that monitors the system and keeps it in equilibrium.",
  },
  {
    id: "csc312_ch1_031",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which software development methodology values working software over comprehensive documentation and uses highly collaborative, short feedback loops called sprints?",
    options: [
      "Agile Methodology",
      "Waterfall Model",
      "Spiral Model",
      "V-Model",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide defines Agile Methodology as an iterative, collaborative process structured around rapid feedback loops, valuing functional software over excessive documentation.\n\nWaterfall Model is a document-heavy, rigid approach where working software is typically delivered only near the end of the project.\n\nSpiral Model is a risk-focused, highly structured methodology where documentation and risk analysis are highly emphasized at every cycle.\n\nV-Model is a sequential, verification-centric model where coding is heavily paired with testing phases rather than iterative agile sprints.",
  },
  {
    id: "csc312_ch1_032",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which systems development approach involves building a highly simplified, preliminary working version of a system specifically to help users clarify vague or ambiguous requirements?",
    options: [
      "Prototyping",
      "Waterfall development",
      "Structured analysis",
      "V-Model validation",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide states that Prototyping is the practice of developing a quick, interactive model of the software to help stakeholders understand, test, and refine system requirements.\n\nWaterfall development relies on exhaustive, pre-planned documentation before any coding begins, rather than rapid interactive models.\n\nStructured analysis is a formal modeling methodology using data-flow diagrams, not preliminary working models.\n\nV-Model validation is a testing methodology where verification is mapped directly to development phases, not a rapid prototyping process.",
  },
  {
    id: "csc312_ch1_033",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "As an Agent of Change, a systems analyst acts as an internal advisor providing technical guidance and software support without promoting organizational transitions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "As an Agent of Change, the analyst is a catalyst who actively advocates, drives, and manages organizational transition and user adaptation, while the internal advisor role is known as the Supporting Expert.",
  },
  {
    id: "csc312_ch1_034",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which development model achieves high speed and rapid deployment by utilizing active user participation, Computer-Aided Software Engineering (CASE) tools, and Joint Application Design (JAD) sessions?",
    options: [
      "Rapid Application Development",
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies section defines Rapid Application Development (RAD) as a methodology centered on speed and prototyping, heavily leveraging CASE tools, JAD, and automated code generation.\n\nWaterfall Model is a slow, highly structured process with minimal user interaction during development.\n\nV-Model is a sequential test-driven extension of the Waterfall model that does not prioritize rapid CASE-driven software generation.\n\nSpiral Model is a highly complex, risk-driven, iterative methodology that emphasizes systematic risk analysis over fast development cycles.",
  },
  {
    id: "csc312_ch1_035",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which software development framework is a direct extension of the Waterfall model that matches every phase of system verification with a corresponding phase of test validation?",
    options: [
      "V-Model",
      "Agile Methodology",
      "Spiral Model",
      "Prototyping Model",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide defines the V-Model as an extension of the Waterfall model where development phases (verification) are paired side-by-side with corresponding testing phases (validation).\n\nAgile Methodology is a non-linear, flexible model focused on short iterations, not a direct sequential pairing of development and testing.\n\nSpiral Model is a risk-centric, iterative model utilizing four quadrants, rather than a rigid development-to-testing V-shaped hierarchy.\n\nPrototyping Model focuses on building quick software versions for user feedback rather than formal verification-validation matching.",
  },
  {
    id: "csc312_ch1_036",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When an organization elects to have its own internal IT department design, program, test, and deploy an information system from scratch, they are opting for what?",
    options: [
      "In-house applications",
      "Software packages",
      "Outsourcing",
      "Internet-based application services",
    ],
    correctAnswer: 0,
    explanation:
      "According to the slide 'Who Develops Information Systems?', In-house applications are developed internally by the organization's own software engineers to meet custom business needs.\n\nSoftware packages refer to pre-built, off-the-shelf software purchased from an external software vendor.\n\nOutsourcing is the practice of contracting external software firms to handle system design and programming.\n\nInternet-based application services refer to cloud software and software-as-a-service (SaaS) accessed via the web.",
  },
  {
    id: "csc312_ch1_037",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An organization decides to purchase commercial, off-the-shelf software from a vendor rather than writing code internally. This strategy is referred to as using what?",
    options: [
      "Software packages",
      "In-house applications",
      "Custom solutions",
      "Outsourcing",
    ],
    correctAnswer: 0,
    explanation:
      "The 'Who Develops Information Systems?' slide states that Software packages are pre-packaged commercial applications designed to solve standard business problems.\n\nIn-house applications are custom software systems designed and developed by internal organizational staff.\n\nCustom solutions refer to software custom-built from scratch for a specific client, either internally or externally.\n\nOutsourcing involves hiring external vendors to perform custom software engineering tasks rather than buying a pre-existing package.",
  },
  {
    id: "csc312_ch1_038",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a management skill required of a systems analyst?",
    options: [
      "Project scheduling and planning",
      "Database design",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "Project scheduling and planning is a key management skill. Database design is categorized under technical skills, meaning only option 1 is correct.",
  },
  {
    id: "csc312_ch1_039",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When an organization hires an external technology vendor to assume full responsibility for developing, operating, and maintaining their database systems, this is known as what?",
    options: [
      "Outsourcing",
      "In-house applications",
      "Software packages",
      "Enterprise-wide software strategies",
    ],
    correctAnswer: 0,
    explanation:
      "The slides outline Outsourcing as the practice of hiring external third-party agencies or service providers to develop or manage systems.\n\nIn-house applications refer to systems developed entirely by the internal IT staff of the business.\n\nSoftware packages are standardized, commercial off-the-shelf software units purchased directly.\n\nEnterprise-wide software strategies involve broad, comprehensive business suites like ERPs, not necessarily external service contracting.",
  },
  {
    id: "csc312_ch1_040",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A software application that is designed, programmed, and configured specifically to meet the highly unique operational processes of a single enterprise is classified as a what?",
    options: [
      "Custom solution",
      "Software package",
      "Internet-based application service",
      "Standard template",
    ],
    correctAnswer: 0,
    explanation:
      "According to the slides, a Custom solution is tailored specifically to a single organization's unique requirements, rather than a generic mass-market system.\n\nSoftware package represents a standard, pre-packaged solution sold widely to many companies.\n\nInternet-based application service refers to cloud-based systems hosted by third parties, which may or may not be customized.\n\nStandard template represents a generic framework used for basic configurations, lacking deep customization.",
  },
  {
    id: "csc312_ch1_041",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which approach to information systems development focuses on integrating all core department functions (e.g. accounting, HR, sales) into a single, unified corporate software platform?",
    options: [
      "Enterprise-wide software strategies",
      "In-house applications",
      "Custom solutions",
      "Outsourcing",
    ],
    correctAnswer: 0,
    explanation:
      "The slides on systems development define Enterprise-wide software strategies as comprehensive approaches aimed at integrating all organizational processes into a unified architecture.\n\nIn-house applications are standalone systems developed internally by a single department, not necessarily enterprise-wide platforms.\n\nCustom solutions refer to any software tailored specifically to a customer, which could be small and departmental rather than enterprise-wide.\n\nOutsourcing is a procurement and labor strategy, not a software architectural strategy.",
  },
  {
    id: "csc312_ch1_042",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An automatic system mechanism that constantly compares server CPU temperature with safety thresholds and shuts down the server if it exceeds 90 degrees represents which element?",
    options: ["Control", "Input", "Processor", "Boundary"],
    correctAnswer: 0,
    explanation:
      "The System Elements section defines Control as the element that guides, regulates, and corrects a system by comparing actual state with a predetermined threshold.\n\nInput represents the external temperature reading entering the sensor, not the regulating mechanism itself.\n\nProcessor represents the actual electronic transformation of signals inside the system.\n\nBoundary is the casing of the server separating it from the external server room.",
  },
  {
    id: "csc312_ch1_043",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An open system is completely isolated from its environment and does not exchange energy, material, or information with external factors.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The Open vs Closed Systems section states that an open system actively interacts with its environment and exchanges material, energy, or information, while a closed system is isolated.",
  },
  {
    id: "csc312_ch1_044",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A system that actively interacts with its external environment, adapting to changes in government regulations and consumer demands, is classified as which of the following?",
    options: ["Open System", "Closed System", "Subsystem", "Supersystem"],
    correctAnswer: 0,
    explanation:
      "The slides define an Open System as one that actively exchanges information, resources, and energy with its environment and must adapt to survive.\n\nClosed System refers to a system that is self-contained and isolated from environmental forces.\n\nSubsystem is a smaller component system contained within a larger design.\n\nSupersystem is a high-level larger system of systems that does not refer specifically to environment-interaction types.",
  },
  {
    id: "csc312_ch1_045",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of feedback loop occurs when a change in the system is continuously amplified, leading to further deviations away from stable operation?",
    options: [
      "Positive Feedback",
      "Negative Feedback",
      "Closed Feedback",
      "Open Feedback",
    ],
    correctAnswer: 0,
    explanation:
      "The Feedback section states that Positive Feedback is deviation-amplifying, reinforcing a change and pushing the system further away from its initial state.\n\nNegative Feedback is deviation-correcting, acting to stabilize the system and return it to a state of equilibrium.\n\nClosed Feedback is a non-standard term, as feedback loops are classified based on their stabilizing or amplifying effects.\n\nOpen Feedback is a fictitious distractor not mentioned in the course slides.",
  },
  {
    id: "csc312_ch1_046",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In systems hierarchy, a distinct, self-contained system that performs specific tasks within a larger overall system framework is referred to as a what?",
    options: ["Subsystem", "Supersystem", "Open system", "Closed system"],
    correctAnswer: 0,
    explanation:
      "The system concepts slides state that a Subsystem is a smaller component system nested within the boundary of a larger, more complex system.\n\nSupersystem refers to the higher-level, broader system environment that encompasses multiple subsystems.\n\nOpen system refers to a system that interacts with its environment, not its hierarchical classification.\n\nClosed system refers to an isolated system, which is independent of hierarchy concepts.",
  },
  {
    id: "csc312_ch1_047",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A large enterprise contains finance, sales, and manufacturing departments. From the perspective of the individual finance department, the entire enterprise is considered a what?",
    options: ["Supersystem", "Subsystem", "Closed system", "Micro-system"],
    correctAnswer: 0,
    explanation:
      "The system hierarchy slides state that a Supersystem is the larger, higher-level system in which a smaller system (or subsystem) resides.\n\nSubsystem refers to a component system inside a larger system; the finance department is a subsystem of the enterprise.\n\nClosed system refers to an isolated system, which is not relevant to hierarchical relationships.\n\nMicro-system is a fictitious distractor not referenced in the course material.",
  },
  {
    id: "csc312_ch1_048",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a primary task associated with the Implementation phase of the Systems Development Life Cycle (SDLC)?",
    options: [
      "Detailed logical modeling",
      "Writing and testing code",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 1,
    explanation:
      "Writing and testing code is a main activity in the Implementation phase. Detailed logical modeling is part of the Analysis phase, making option 2 the only correct choice.",
  },
  {
    id: "csc312_ch1_049",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A system's ability to operate continuously and correctly under stated environmental conditions for a specific period of time represents which quality?",
    options: ["Reliability", "Efficiency", "Flexibility", "Scalability"],
    correctAnswer: 0,
    explanation:
      "The System Characteristics slide defines Reliability as the characteristic of performing consistently, correctly, and without failure under operational conditions.\n\nEfficiency refers to optimizing resources and minimizing waste during system execution.\n\nFlexibility is the system's ability to adapt easily to changing business rules or environment changes.\n\nScalability is the ability of the system to expand to handle growing transaction volumes or user loads.",
  },
  {
    id: "csc312_ch1_050",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When a system is designed so that updates to taxation rules and currency formats can be easily implemented without rewriting the core codebase, it exhibits high what?",
    options: ["Flexibility", "Efficiency", "Reliability", "Security"],
    correctAnswer: 0,
    explanation:
      "The System Characteristics slide defines Flexibility as the capability of a system to adapt to changing requirements and business environments with minimal effort.\n\nEfficiency relates to optimal resource usage and minimal processing waste.\n\nReliability relates to consistent uptime and correct calculations under pressure.\n\nSecurity relates to protecting resources and preventing unauthorized access.",
  },
  {
    id: "csc312_ch1_051",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A system that can seamlessly expand its hardware capacity to handle an increase in active users from 1,000 to 100,000 without crashing is exhibiting high what?",
    options: ["Scalability", "Flexibility", "Reliability", "Efficiency"],
    correctAnswer: 0,
    explanation:
      "According to the System Characteristics slide, Scalability is the ability of a system to accommodate growth in volume, transactions, or users without losing performance.\n\nFlexibility is the ease with which software can be modified to meet new rules or structures.\n\nReliability refers to the low frequency of system crashes and continuous stable uptime.\n\nEfficiency refers to the speed of processing and optimal utilization of system resources.",
  },
  {
    id: "csc312_ch1_052",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Protecting data files from unauthorized access, preventing malicious intrusion, and safeguarding user privacy are actions that establish which system characteristic?",
    options: ["Security", "Scalability", "Reliability", "Flexibility"],
    correctAnswer: 0,
    explanation:
      "The System Characteristics slide outlines Security as the protection of information assets, preventing unauthorized system access, and maintaining data integrity.\n\nScalability is the potential of the system to handle larger workloads.\n\nReliability is the system's capacity to maintain consistent, error-free operational uptime.\n\nFlexibility is the system's capacity to adapt to functional modifications.",
  },
  {
    id: "csc312_ch1_053",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "System Analysis and Design (SAD) primarily focuses on Phase 2 (Analysis) and Phase 3 (Design) of the Systems Development Life Cycle (SDLC).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The slides on the scope of System Analysis and Design clearly state that SAD's primary focus is on Phase 2 (Analysis) and Phase 3 (Design) of the SDLC.",
  },
  {
    id: "csc312_ch1_054",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An analyst's ability to systematically break down a complex business process into its constituent elements to identify core problems is which skill?",
    options: [
      "Analytical Skills",
      "Technical Skills",
      "Interpersonal Skills",
      "Management Skills",
    ],
    correctAnswer: 0,
    explanation:
      "The Analyst Skills slide defines Analytical Skills as problem-solving, systems thinking, and the capability to decompose complex business processes into understandable parts.\n\nTechnical Skills focus on writing code, managing databases, and setting up network infrastructure.\n\nInterpersonal Skills cover active communication, listening, team leadership, and stakeholder management.\n\nManagement Skills cover project tracking, task allocation, and budgeting.",
  },
  {
    id: "csc312_ch1_055",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When a systems analyst develops a project work breakdown structure, schedules tasks using Gantt charts, and coordinates resources, they are utilizing which skill?",
    options: [
      "Management Skills",
      "Analytical Skills",
      "Technical Skills",
      "Interpersonal Skills",
    ],
    correctAnswer: 0,
    explanation:
      "The Analyst Skills slide defines Management Skills as those relating to project planning, scheduling, resource coordination, tracking, and risk control.\n\nAnalytical Skills involve logical reasoning, decomposing processes, and diagnosing business pain points.\n\nTechnical Skills involve coding, database setup, and system engineering.\n\nInterpersonal Skills involve negotiating, training, active listening, and resolving conflicts.",
  },
  {
    id: "csc312_ch1_056",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which phase of the Systems Development Life Cycle (SDLC) is primarily concerned with identifying the core business problem, defining project scope, and conducting initial feasibility?",
    options: ["Planning", "Analysis", "Design", "Implementation"],
    correctAnswer: 0,
    explanation:
      "According to the SDLC Phases slide, the Planning phase is the first step where the project scope is defined, problems are identified, and initial feasibility is assessed.\n\nAnalysis is the phase focused on detailed requirements gathering and process modeling.\n\nDesign is the phase where logical and physical system specifications are drafted.\n\nImplementation is the phase where the system is programmed, tested, and installed.",
  },
  {
    id: "csc312_ch1_057",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Conducting user interviews, gathering system requirements, and creating logical process diagrams like Data Flow Diagrams occur during which SDLC phase?",
    options: ["Analysis", "Planning", "Design", "Implementation"],
    correctAnswer: 0,
    explanation:
      "According to the SDLC Phases slide, the Analysis phase involves fact-finding, user requirements gathering, and modeling 'what' the system should do.\n\nPlanning is the phase where the business case and project scope are initially established.\n\nDesign is the phase where structural, interface, and database diagrams are constructed.\n\nImplementation is the phase where developers convert diagrams into source code.",
  },
  {
    id: "csc312_ch1_058",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is classified as a non-functional requirement of an information system?",
    options: [
      "The system must support automatic monthly payroll calculations",
      "The database must allow users to register an account",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Functional requirements define specific behaviors and business operations, such as payroll calculations and user registration. Since both choices are functional requirements, 'None of the above' is the correct answer.",
  },
  {
    id: "csc312_ch1_059",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Translating documented business requirements into detailed logical schemas and physical technical specifications for developers is the core objective of which SDLC phase?",
    options: ["Design", "Analysis", "Planning", "Implementation"],
    correctAnswer: 0,
    explanation:
      "According to the SDLC Phases slide, the Design phase is where analysts specify 'how' the system will work by creating logical and physical architectures.\n\nAnalysis is focused on requirements elicitation and modeling what the current system does, not designing the new specifications.\n\nPlanning focuses on project initiation, scheduling, and high-level feasibility.\n\nImplementation focuses on writing code and physical system setup based on design models.",
  },
  {
    id: "csc312_ch1_060",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which phase of the Systems Development Life Cycle (SDLC) is dedicated to writing source code, performing unit testing, and conducting user training?",
    options: ["Implementation", "Design", "Analysis", "Maintenance"],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases slide states that the Implementation phase is where the system is physically built, tested, and rolled out to users.\n\nDesign is where technical diagrams and structural layouts are drawn before coding.\n\nAnalysis is where requirements are gathered and documented.\n\nMaintenance is the post-deployment phase where bugs are fixed and system updates are made.",
  },
  {
    id: "csc312_ch1_061",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Correcting software bugs discovered by users, upgrading servers, and optimizing database performance after a system is deployed occur in which SDLC phase?",
    options: ["Maintenance", "Implementation", "Design", "Analysis"],
    correctAnswer: 0,
    explanation:
      "The SDLC Phases slide outlines the Maintenance phase as the ongoing support phase focused on fixing errors and keeping the system operational after launch.\n\nImplementation is the phase where the initial software is compiled and installed.\n\nDesign is the phase where system architectures are planned.\n\nAnalysis is the phase where business logic requirements are formulated.",
  },
  {
    id: "csc312_ch1_062",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A significant drawback of the Waterfall model is that a minor change in requirements late in the development cycle can require restarting the entire sequential process. This represents high what?",
    options: ["Rigidity", "Flexibility", "Iterativeness", "Agility"],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide states that the Waterfall model is highly rigid, making it very difficult and costly to adapt to changing user requirements once a phase is complete.\n\nFlexibility is the ability to adapt easily to change, which is the opposite of the Waterfall model's nature.\n\nIterativeness refers to cyclic repetition of phases, which is a characteristic of Agile and Spiral, not Waterfall.\n\nAgility refers to fast, adaptive development cycles, which Waterfall lacks.",
  },
  {
    id: "csc312_ch1_063",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The Spiral methodology is a risk-driven, iterative development model that is highly suitable for large-scale, high-risk systems.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "According to the Methodologies comparison slides, the Spiral model is a risk-focused, iterative model designed specifically to manage high-cost, high-risk systems.",
  },
  {
    id: "csc312_ch1_064",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In Agile software development, what is the term for the short, fixed-duration development cycles that typically last between two and four weeks?",
    options: ["Sprints", "Milestones", "Phases", "Iterations"],
    correctAnswer: 0,
    explanation:
      "The Agile Methodology slide states that Agile development is organized around short, time-boxed units of work called Sprints.\n\nMilestones are distinct project checkpoints indicating key accomplishments, not active iterative work cycles.\n\nPhases are broad stages of development in sequential models like Waterfall.\n\nIterations is a general term for repetitive development loops, but Agile specifically terms its fixed-duration cycles as Sprints.",
  },
  {
    id: "csc312_ch1_065",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Each iteration loop of the Spiral methodology is structured around which of the following activities?",
    options: [
      "Four quadrants starting with objective determination and ending with planning the next phase",
      "A linear sequence of analysis, design, and physical testing with no backward loops",
      "Rapid automatic code generation using CASE tools with minimal risk analysis",
      "Continuous user prototyping until the requirements are completely finalized without risk reviews",
    ],
    correctAnswer: 0,
    explanation:
      "The Spiral methodology slide outlines that each loop is divided into four distinct quadrants: Determine objectives, Identify and resolve risks, Develop and test, and Plan the next iteration.\n\nA linear sequence describes the Waterfall model, not the Spiral model.\n\nRapid code generation using CASE tools characterizes Rapid Application Development (RAD).\n\nContinuous prototyping without risk analysis describes evolutionary prototyping, not the risk-focused Spiral model.",
  },
  {
    id: "csc312_ch1_066",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In Rapid Application Development (RAD), what is the term for the collaborative, highly structured workshops where users and analysts design system requirements together?",
    options: [
      "Joint Application Design sessions",
      "Structured brainstorming workshops",
      "Agile daily standups",
      "Sprint planning meetings",
    ],
    correctAnswer: 0,
    explanation:
      "The RAD methodology slide defines Joint Application Design (JAD) sessions as interactive workshops that bring developers and end-users together to quickly define system requirements.\n\nStructured brainstorming workshops is a generic, non-standard term not used in the RAD slides.\n\nAgile daily standups are brief status meetings used in Agile methodology, not collaborative design sessions in RAD.\n\nSprint planning meetings are Agile-specific events focused on scheduling tasks for the upcoming Sprint.",
  },
  {
    id: "csc312_ch1_067",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "To speed up code generation and automate modeling in Rapid Application Development (RAD), developers rely on which type of software tools?",
    options: [
      "Computer-Aided Software Engineering tools",
      "Integrated Development Environments",
      "Object-oriented frameworks",
      "Continuous integration pipelines",
    ],
    correctAnswer: 0,
    explanation:
      "The RAD slides state that CASE (Computer-Aided Software Engineering) tools are heavily utilized to automate diagramming, documentation, and source code generation.\n\nIntegrated Development Environments are standard text editors and compilers, lacking the broader system modeling automation of CASE tools.\n\nObject-oriented frameworks are code libraries used during manual programming, not automated modeling tools.\n\nContinuous integration pipelines are deployment automation systems, not requirements and code modeling tools.",
  },
  {
    id: "csc312_ch1_068",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the context of the V-Model, the static process of reviewing documents to ensure the system is being built correctly is known as what?",
    options: ["Verification", "Validation", "Compilation", "Integration"],
    correctAnswer: 0,
    explanation:
      "According to the V-Model slides, Verification is the static evaluation process (reviews, walkthroughs) to check if the system meets specification standards.\n\nValidation is the dynamic testing process (running code) to confirm if the system meets the actual user needs.\n\nCompilation is the process of converting human-readable code into machine code, not a review phase.\n\nIntegration is the process of combining software components, which is tested in validation, not a static document review.",
  },
  {
    id: "csc312_ch1_069",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Under the V-Model framework, the initial 'Requirements' phase of development is directly mapped to and validated by which testing phase?",
    options: [
      "Acceptance Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model mapping slides show that the high-level Requirements phase is validated during the final Acceptance Testing phase with the user.\n\nUnit Testing maps directly to the low-level Coding phase.\n\nIntegration Testing maps directly to the Detailed Design phase.\n\nSystem Testing maps directly to the System Design phase.",
  },
  {
    id: "csc312_ch1_070",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Under the V-Model framework, the 'System Design' (or High-Level Design) phase is directly validated by which testing phase?",
    options: [
      "System Testing",
      "Unit Testing",
      "Integration Testing",
      "Acceptance Testing",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model mapping slides show that System Design is validated by System Testing, which checks the entire integrated system against high-level specifications.\n\nUnit Testing validates individual code blocks written during the Coding phase.\n\nIntegration Testing validates detailed module connections drafted during the Detailed Design phase.\n\nAcceptance Testing validates the user requirements gathered during the Requirements phase.",
  },
  {
    id: "csc312_ch1_071",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the V-Model, which level of testing directly validates the individual modules of written code produced during the Coding phase?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing",
    ],
    correctAnswer: 0,
    explanation:
      "The V-Model structure maps the Coding phase directly to Unit Testing, where individual code blocks, classes, or functions are tested independently.\n\nIntegration Testing validates that multiple modules work together properly.\n\nSystem Testing validates the entire assembled application against the high-level system design.\n\nAcceptance Testing validates the application against business requirements.",
  },
  {
    id: "csc312_ch1_072",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which web development technique allows a system to exchange data with a server and update parts of a page without requiring a full page reload?",
    options: ["Ajax", "Java", "HTML5", "Python"],
    correctAnswer: 0,
    explanation:
      "The important facts section states that Ajax is an asynchronous communication technique used to update parts of a web page dynamically.\n\nJava is a compiled, object-oriented programming language, not a web page reloading technique.\n\nHTML5 is a markup language used to structure web content, which requires server actions or JavaScript to achieve asynchronous updates.\n\nPython is a general-purpose backend programming language, not a browser-side asynchronous interface technique.",
  },
  {
    id: "csc312_ch1_073",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A heating system has a temperature sensor that sends data back to a thermostat, which then adjusts the heat output to maintain a constant room temperature. This sensor loop represents what?",
    options: ["Feedback", "Processor", "Boundary", "Interface"],
    correctAnswer: 0,
    explanation:
      "According to the System Elements slides, Feedback is the system output returned as input to adjust system operations and maintain stability.\n\nProcessor represents the internal heating element that produces warmth, not the monitoring loop.\n\nBoundary is the outer physical shell of the thermostat, not the signal loop.\n\nInterface is the terminal connection where wiring meets the sensor, not the informational feedback loop itself.",
  },
  {
    id: "csc312_ch1_074",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A development project must comply with a fixed internal budget of 50,000 USD and an external government regulation on data security. These limitations are known as system what?",
    options: ["Constraints", "Processes", "Inputs", "Interfaces"],
    correctAnswer: 0,
    explanation:
      "The system slides define constraints as internal or external limits (such as budget, time, or regulations) that restrict how a system can be developed or operated.\n\nProcesses are the active steps and logic flow within the system boundary.\n\nInputs are the raw data and resources entering the system.\n\nInterfaces are the communication pathways connecting different system parts.",
  },
  {
    id: "csc312_ch1_075",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In system design, creating a high-level Entity-Relationship Diagram (ERD) to show business concepts without defining physical database keys or data types is part of what?",
    options: [
      "Logical Design",
      "Physical Design",
      "Requirements Analysis",
      "Systems Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The design slides state that creating conceptual data models like high-level ERDs independent of actual database engines belongs to Logical Design.\n\nPhysical Design involves mapping the ERD into actual SQL tables, defining data types, keys, and indexes.\n\nRequirements Analysis is the phase of gathering user needs, before structural diagrams like ERDs are established.\n\nSystems Maintenance is the post-launch phase, which does not involve drafting initial conceptual schemas.",
  },
  {
    id: "csc312_ch1_076",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Choosing PostgreSQL as the database management system and configuring the table indexes for faster queries represents a key activity of what?",
    options: [
      "Physical Design",
      "Logical Design",
      "Business Process Modeling",
      "Feasibility Study",
    ],
    correctAnswer: 0,
    explanation:
      "The Logical vs Physical Design slide states that Physical Design deals with concrete, technology-specific issues such as database engine choice, table structures, and indexing.\n\nLogical Design specifies data flows and structures abstractly, independent of specific vendors.\n\nBusiness Process Modeling involves mapping the workflow of business activities, not database engineering.\n\nFeasibility Study is an early planning assessment, occurring before database systems are physically built.",
  },
  {
    id: "csc312_ch1_077",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A requirement stating that 'The system must allow administrators to reset user passwords via an email link' is classified as which of the following?",
    options: [
      "Functional requirement",
      "Non-functional requirement",
      "Performance requirement",
      "Security requirement",
    ],
    correctAnswer: 0,
    explanation:
      "Under the Functional vs Non-functional requirements slide, a Functional requirement defines a specific system behavior, action, or service.\n\nNon-functional requirement specifies systemic properties like speed, security standard, or scalability.\n\nPerformance requirement is a type of non-functional requirement focused on response time, not user features.\n\nSecurity requirement refers to encryption or compliance standards, which are non-functional constraints.",
  },
  {
    id: "csc312_ch1_078",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A requirement stating that 'The mobile application must operate on a minimum of 2GB RAM and run on iOS 15 or higher' is classified as which of the following?",
    options: [
      "Non-functional requirement",
      "Functional requirement",
      "Process requirement",
      "Logical requirement",
    ],
    correctAnswer: 0,
    explanation:
      "The requirements slides define Non-functional requirements as technical constraints, hardware dependencies, compatibility standards, or performance targets.\n\nFunctional requirement refers to features like adding a product to a cart or processing a payment.\n\nProcess requirement is an informal term used for development methodology rules, not runtime system constraints.\n\nLogical requirement is a conceptual description of a system's business rules, not physical hardware constraints.",
  },
  {
    id: "csc312_ch1_079",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following scenarios represents the best use-case for the sequential Waterfall development methodology?",
    options: [
      "A banking system with highly stable, well-understood requirements and strict regulatory processes",
      "A fast-paced startup building an innovative social media app with highly volatile requirements",
      "A research project where the final system scope is entirely undefined and relies on discovery",
      "A game development project requiring constant, rapid prototyping and continuous user testing",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide states that Waterfall is best suited for projects with stable, pre-defined requirements that are unlikely to change during development.\n\nA fast-paced startup requires Agile methodology due to frequent changes in requirements.\n\nAn undefined research project is suited for prototyping or Spiral, not rigid linear steps.\n\nA game development project is suited for Agile or prototyping to handle continuous gameplay adjustments.",
  },
  {
    id: "csc312_ch1_080",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Agile methodologies prioritize which of the following outcomes over comprehensive, extensive documentation?",
    options: [
      "Working software",
      "Rigid planning",
      "Detailed modeling",
      "Contract negotiation",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Agile Manifesto principles described in the slides, Agile prioritizes delivering working software over creating extensive documentation.\n\nRigid planning is a hallmark of the Waterfall model, which Agile actively minimizes.\n\nDetailed modeling is emphasized in structured Waterfall and V-Model approaches, not Agile.\n\nContract negotiation is deprioritized in Agile in favor of active customer collaboration.",
  },
  {
    id: "csc312_ch1_081",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following represents a major disadvantage of using the risk-driven Spiral methodology?",
    options: [
      "It is highly complex, expensive, and requires specialized risk assessment expertise",
      "It does not support iterative development or feedback after the planning phase",
      "It fails to provide a mechanism for coding or testing the software",
      "It forces the system to be developed in a single, non-repeatable sequence",
    ],
    correctAnswer: 0,
    explanation:
      "The Methodologies slide states that the Spiral model is highly complex and costly because it requires continuous, expert risk analysis and management.\n\nIt does support iterative development, as it is structured as a repeating spiral of cycles.\n\nIt does provide development and testing, which occurs in the third quadrant of every loop.\n\nIt is iterative and cyclical, the opposite of a single, non-repeatable linear sequence.",
  },
  {
    id: "csc312_ch1_082",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In systems analysis, what is the term for a prototype that is built quickly to gather user feedback and is then completely discarded once requirements are understood?",
    options: [
      "Throwaway prototype",
      "Evolutionary prototype",
      "Production prototype",
      "In-house prototype",
    ],
    correctAnswer: 0,
    explanation:
      "The prototyping slides define a Throwaway prototype as one designed solely to clarify requirements and is discarded once the actual design begins.\n\nEvolutionary prototype is a model that is continually refined and eventually becomes part of the final production system.\n\nProduction prototype is a non-standard term, as prototypes are categorized as throwaway or evolutionary.\n\nIn-house prototype describes where the prototype was built, not its lifecycle strategy.",
  },
  {
    id: "csc312_ch1_083",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a primary benefit of using a prototyping methodology early in systems development?",
    options: [
      "It clarifies user requirements and resolves ambiguities before full-scale coding",
      "It guarantees the creation of a highly scalable, robust backend architecture",
      "It completely eliminates the need to conduct any feasibility studies",
      "It enforces a rigid, document-heavy development schedule",
    ],
    correctAnswer: 0,
    explanation:
      "The prototyping slides state that the primary benefit of prototyping is helping users clarify and refine their needs by interacting with a working model.\n\nIt does not guarantee scalable architecture, as prototypes are often built quickly with poor code structures.\n\nIt does not eliminate feasibility studies, which are still required during the planning phase.\n\nIt encourages flexible adjustments rather than enforcing a rigid, document-heavy schedule.",
  },
  {
    id: "csc312_ch1_084",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Why does the Rapid Application Development (RAD) model heavily utilize Joint Application Design (JAD) sessions?",
    options: [
      "To accelerate requirements gathering through intensive, collaborative user-developer workshops",
      "To conduct formal legal audits and ensure regulatory contract compliance",
      "To run automated unit tests on backend code modules",
      "To transition the system from logical design to physical server deployment",
    ],
    correctAnswer: 0,
    explanation:
      "The RAD slides show that JAD sessions speed up the development lifecycle by gathering users and developers in a single workshop to define system requirements dynamically.\n\nThey are not designed to conduct legal compliance audits, which fall under legal feasibility.\n\nThey do not run automated unit tests, which is a programming-level validation activity.\n\nThey do not handle server deployment, which occurs in the implementation phase.",
  },
  {
    id: "csc312_ch1_085",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A system requirement stating that 'The billing platform must generate a PDF invoice at the end of each billing cycle' is classified as which of the following?",
    options: [
      "Functional requirement",
      "Non-functional requirement",
      "Operational requirement",
      "Security requirement",
    ],
    correctAnswer: 0,
    explanation:
      "The requirements slides state that functional requirements represent specific actions, outputs, or calculations the system must perform.\n\nNon-functional requirement refers to quality constraints like encryption levels or processing speeds.\n\nOperational requirement is a general term, but the specific output of a PDF is a functional feature.\n\nSecurity requirement focuses on user authentication and access controls, not document generation.",
  },
  {
    id: "csc312_ch1_086",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A system requirement stating that 'The web interface must be easy to navigate and accessible to users with visual impairments' is classified as which of the following?",
    options: [
      "Non-functional requirement",
      "Functional requirement",
      "Input requirement",
      "Process requirement",
    ],
    correctAnswer: 0,
    explanation:
      "According to the Functional vs Non-functional requirements slide, usability, accessibility, and user-friendliness are classified as non-functional requirements.\n\nFunctional requirement refers to explicit functional features like saving a file or logging in.\n\nInput requirement refers to the specific formats of raw data entering the system.\n\nProcess requirement is an informal term, as requirements are formally categorized as functional or non-functional.",
  },
  {
    id: "csc312_ch1_087",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "When a systems analyst coordinates the patching of a security vulnerability discovered in the software post-release, they are managing which type of maintenance?",
    options: [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance slides define Corrective Maintenance as fixing software bugs, vulnerabilities, and errors that interfere with system operations.\n\nAdaptive Maintenance involves modifying software to run in a new hardware or operating system environment.\n\nPerfective Maintenance involves enhancing existing features or adding new user requests.\n\nPreventive Maintenance involves adjusting software to prevent future failures, before they occur.",
  },
  {
    id: "csc312_ch1_088",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An organization moves its database from local servers to a cloud infrastructure, requiring the application code to be modified. This maintenance type is known as what?",
    options: [
      "Adaptive Maintenance",
      "Corrective Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance slides define Adaptive Maintenance as modifying software to accommodate changes in the external environment, hardware, or platforms.\n\nCorrective Maintenance is focused on fixing bugs and existing errors.\n\nPerfective Maintenance is focused on enhancing performance or adding new features requested by users.\n\nPreventive Maintenance is focused on early actions to prevent potential future system failures.",
  },
  {
    id: "csc312_ch1_089",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A systems analyst is requested to add a new dark-mode feature to an existing application to improve user satisfaction. This represents which type of maintenance?",
    options: [
      "Perfective Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Preventive Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance slides define Perfective Maintenance as modifying the system to add new features, improve performance, or enhance user experience.\n\nCorrective Maintenance is focused purely on resolving code bugs and crashes.\n\nAdaptive Maintenance is focused on adapting the system to new platforms or operating systems.\n\nPreventive Maintenance is focused on early technical cleanup to avoid future software degradation.",
  },
  {
    id: "csc312_ch1_090",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Refactoring complex, legacy backend code to make it more readable and maintainable, thereby reducing the likelihood of future system failures, is what?",
    options: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The Maintenance slides define Preventive Maintenance as modifying a system to detect and correct latent faults before they manifest as active operational failures.\n\nCorrective Maintenance fixes active bugs that users have already encountered.\n\nAdaptive Maintenance adapts code to external environment changes, such as new servers.\n\nPerfective Maintenance adds new capabilities or improves existing execution speeds.",
  },
  {
    id: "csc312_ch1_091",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An organization deploys a new payroll system by running both the old system and the new system simultaneously for two months to verify calculation accuracy. This is known as what?",
    options: [
      "Parallel conversion",
      "Direct cutover",
      "Phased adoption",
      "Pilot operation",
    ],
    correctAnswer: 0,
    explanation:
      "The implementation and conversion slides define Parallel conversion as running both old and new systems concurrently to ensure safety and verify outputs.\n\nDirect cutover is the complete shutdown of the old system and immediate activation of the new system overnight, which is highly risky.\n\nPhased adoption is the gradual introduction of system modules or departments over time.\n\nPilot operation is introducing the entire system to only a single department or location before wider rollout.",
  },
  {
    id: "csc312_ch1_092",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An organization completely deactivates its old database on a Friday night and launches the new system on Saturday morning. This high-risk conversion method is known as what?",
    options: [
      "Direct cutover",
      "Parallel conversion",
      "Phased adoption",
      "Pilot operation",
    ],
    correctAnswer: 0,
    explanation:
      "The implementation slides define Direct cutover (or direct conversion) as immediately stopping the old system and starting the new one with no overlap.\n\nParallel conversion involves running both systems together for a trial period to prevent data loss.\n\nPhased adoption involves introducing the system in gradual increments, rather than all at once.\n\nPilot operation involves deploying the entire system to a small group first, rather than a full instant launch.",
  },
  {
    id: "csc312_ch1_093",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An organization introduces a new ERP system by launching the inventory module in Month 1, the purchasing module in Month 2, and the payroll module in Month 3. This is what?",
    options: [
      "Phased adoption",
      "Direct cutover",
      "Parallel conversion",
      "Pilot operation",
    ],
    correctAnswer: 0,
    explanation:
      "The implementation slides define Phased adoption as introducing system components or modules in sequential stages rather than a single major release.\n\nDirect cutover is the instantaneous replacement of the old system with the new system, carrying high risk.\n\nParallel conversion is running the old and new systems simultaneously for validation.\n\nPilot operation is deploying the entire software suite to one specific branch office first.",
  },
  {
    id: "csc312_ch1_094",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An enterprise deploys a new software platform to its London branch first. After it operates successfully there for a month, they deploy it to all other global branches. This is what?",
    options: [
      "Pilot operation",
      "Direct cutover",
      "Parallel conversion",
      "Phased adoption",
    ],
    correctAnswer: 0,
    explanation:
      "The conversion slides define Pilot operation as introducing the entire system to a single, localized group to verify performance before a company-wide deployment.\n\nDirect cutover is an immediate replacement of systems across the entire organization simultaneously.\n\nParallel conversion is running the old and new software side-by-side across all systems.\n\nPhased adoption is deploying the system in functional modules, rather than geographic locations.",
  },
  {
    id: "csc312_ch1_095",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In system theory, the raw data, materials, or resources that enter the system boundary from the environment to be processed are known as what?",
    options: ["Inputs", "Outputs", "Controls", "Interfaces"],
    correctAnswer: 0,
    explanation:
      "The System Elements section defines Inputs as the raw materials, data, or resources introduced into the system for subsequent processing.\n\nOutputs are the final processed results returned back into the environment.\n\nControls are the mechanisms that monitor and regulate system behaviors.\n\nInterfaces are the communication boundaries that connect distinct system parts.",
  },
  {
    id: "csc312_ch1_096",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The final reports, processed products, or information that a system returns to its environment are classified as what?",
    options: ["Outputs", "Inputs", "Processors", "Boundaries"],
    correctAnswer: 0,
    explanation:
      "The System Elements section defines Outputs as the final processed results produced by the system and returned back to the environment.\n\nInputs are the raw data and materials entered into the system.\n\nProcessors are the internal mechanisms that execute transformations on inputs.\n\nBoundaries are the dividing lines that separate systems from their environments.",
  },
  {
    id: "csc312_ch1_097",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The internal element of a system that performs the actual physical or logical transformation of inputs into outputs is known as the what?",
    options: ["Processor", "Input", "Output", "Boundary"],
    correctAnswer: 0,
    explanation:
      "The System Elements slide defines the Processor as the element that performs the transformation of raw inputs into finished outputs.\n\nInput represents the raw resources entered into the system.\n\nOutput represents the final results returned back to the environment.\n\nBoundary is the dividing line isolating the system components from environmental factors.",
  },
  {
    id: "csc312_ch1_098",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "During feasibility assessment, checking whether the development team has sufficient experience in C# programming to build the system falls under what?",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "Operational Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The feasibility slides define Technical Feasibility as assessing whether the technical team possesses the necessary programming skills and hardware assets.\n\nEconomic Feasibility focuses on the financial cost-benefit analysis and development budgets.\n\nOperational Feasibility focuses on user acceptance and compatibility with organizational culture.\n\nLegal Feasibility focuses on compliance with data regulations, intellectual property, and licensing.",
  },
  {
    id: "csc312_ch1_099",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A systems analyst interviews staff and discovers that department heads fear losing authority if a new automated system is launched. This indicates risk in which area?",
    options: [
      "Operational Feasibility",
      "Technical Feasibility",
      "Economic Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The slides define Operational Feasibility as analyzing user resistance, political issues within the organization, and how the system fits corporate culture.\n\nTechnical Feasibility analyzes compiler compatibility, hardware limits, and developer programming skills.\n\nEconomic Feasibility analyzes financial return on investment and hardware procurement costs.\n\nLegal Feasibility analyzes copyright ownership and regulatory privacy laws.",
  },
  {
    id: "csc312_ch1_100",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Ensuring that a new database application complies with international data privacy laws like GDPR and copyright licensing contracts is part of which assessment?",
    options: [
      "Legal Feasibility",
      "Economic Feasibility",
      "Technical Feasibility",
      "Operational Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "The feasibility slides state that Legal Feasibility is concerned with identifying compliance risks with state regulations, intellectual property laws, and active vendor contracts.\n\nEconomic Feasibility measures financial budgets, savings, and development cost-benefit analyses.\n\nTechnical Feasibility measures technology availability, server capacities, and programmer skills.\n\nOperational Feasibility measures organizational resistance and general user support.",
  },
];

export default csc312Letcure12;
