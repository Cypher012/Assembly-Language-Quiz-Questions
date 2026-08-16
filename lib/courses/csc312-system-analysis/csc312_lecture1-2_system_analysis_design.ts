import { QuestionV2 } from "@/lib/quiz-types";

const csc312Lecture1And2Questions: QuestionV2[] = [
  {
    id: "csc312_ch1_001",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a way through which organizations develop information systems?",
    options: [
      "Outsourcing the development to another firm",
      "Waiting for competitors to publish their source code",
      "Copying a rival company's internal database",
      "Assigning the task to the marketing department only"
    ],
    correctAnswer: 0,
    explanation: "The Who Develops Information Systems section lists outsourcing, alongside in-house applications, software packages, internet-based application services, custom solutions, and enterprise-wide software strategies, as a recognized way organizations obtain information systems.\n\nWaiting for a competitor to publish source code is not one of the listed methods and is not a realistic development strategy described in the note.\n\nCopying a rival's internal database is not among the listed methods and is not how the note describes systems being obtained.\n\nAssigning system development solely to marketing is not one of the listed methods; the note does not restrict development responsibility to a single non-technical department."
  },
  {
    id: "csc312_ch1_002",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A company builds its information system entirely using its own internal staff and resources rather than buying a package or outsourcing. Which development approach does this describe?",
    options: [
      "Internet-based application services",
      "In-house application development",
      "Outsourcing",
      "Software packages"
    ],
    correctAnswer: 1,
    explanation: "The Who Develops Information Systems section lists in-house applications as development carried out internally by the organization's own resources, matching a company building its own system with its own staff.\n\nInternet-based application services refers to obtaining functionality through internet-delivered services, not internal staff building the system.\n\nOutsourcing refers to handing development to an external firm, which is the opposite of an in-house approach.\n\nSoftware packages refers to acquiring pre-built software rather than building it internally."
  },
  {
    id: "csc312_ch1_003",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following best describes System Analysis and Design (SAD)?",
    options: [
      "A programming language used to write database queries",
      "A single tool for drawing network cabling diagrams",
      "A structured process for developing efficient and effective information systems",
      "A marketing technique for promoting new software products"
    ],
    correctAnswer: 2,
    explanation: "The What is System Analysis and Design section defines SAD as a structured process for developing efficient and effective information systems, involving studying business processes, identifying problems and opportunities, and designing solutions.\n\nSAD is not a programming language; it is a process that may precede the use of one.\n\nSAD is not a single diagramming tool; it is a broad structured process, not one artifact.\n\nSAD is not a marketing technique; it concerns building systems, not promoting them."
  },
  {
    id: "csc312_ch1_004",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "As part of the structured process of System Analysis and Design, which activity is explicitly involved?",
    options: [
      "Setting the retail price of the finished software",
      "Hiring the company's finance director",
      "Choosing the color scheme of the corporate logo",
      "Identifying problems and opportunities in business processes"
    ],
    correctAnswer: 3,
    explanation: "The What is System Analysis and Design section states that SAD involves studying business processes and identifying problems and opportunities before designing solutions that leverage technology.\n\nSetting a retail price is a business or sales decision, not part of the SAD process described in the note.\n\nHiring a finance director is a human resources matter, not a step described under SAD.\n\nChoosing a logo color scheme is a branding decision, not part of the SAD process described in the note."
  },
  {
    id: "csc312_ch1_005",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following correctly defines a system?",
    options: [
      "A collection of components that work together to realize some objectives",
      "A single component that operates independently of any other part",
      "A list of unrelated tasks assigned to different departments",
      "A document that records only the final output of a process"
    ],
    correctAnswer: 0,
    explanation: "The Key Definitions section defines a system as a collection of components that work together to realize some objectives, built around input, processing, and output.\n\nA single independently operating component does not match this definition, since a system requires components working together, not one part in isolation.\n\nA list of unrelated tasks contradicts the definition, since a system's components must work together toward shared objectives, not remain unrelated.\n\nA document recording only final output ignores the input and processing components that the definition requires."
  },
  {
    id: "csc312_ch1_006",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "What are the three major components found in every system?",
    options: [
      "Planning, Testing, and Deployment",
      "Input, Processing, and Output",
      "Hardware, Software, and Marketing",
      "Analysis, Coding, and Sales"
    ],
    correctAnswer: 1,
    explanation: "The Key Definitions section states that every system has three major components: input, processing, and output.\n\nPlanning, testing, and deployment are phases of systems development, not the three components of a system itself.\n\nHardware, software, and marketing mixes technical elements with a business function, which is not the three-component definition given.\n\nAnalysis, coding, and sales are activities and business functions, not the input-processing-output components defined for a system."
  },
  {
    id: "csc312_ch1_007",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The Key Components table describes System Analysis as the process of understanding and specifying what the system should do. How does the same table describe System Design?",
    options: [
      "The process of writing the final user manual for the system",
      "The process of billing the client for completed work",
      "The process of specifying how the system will accomplish its objectives",
      "The process of deleting outdated system requirements"
    ],
    correctAnswer: 2,
    explanation: "The Key Components table describes System Design as the process of specifying how the system will accomplish its objectives, in direct contrast to System Analysis, which specifies what the system should do.\n\nWriting a user manual is a documentation task, not the definition given for System Design in this table.\n\nBilling a client is a business administration task, not part of the System Design definition given.\n\nDeleting outdated requirements is not the activity the table assigns to System Design; that table associates design with specifying how objectives are accomplished."
  },
  {
    id: "csc312_ch1_008",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A project team is currently focused on understanding and specifying what a proposed system should do, before deciding how it will be built. Which activity is the team performing?",
    options: [
      "System Design",
      "System Maintenance",
      "System Deployment",
      "System Analysis"
    ],
    correctAnswer: 3,
    explanation: "The Key Components table defines System Analysis as the process of understanding and specifying what the system should do, which matches a team focused on requirements before deciding on implementation.\n\nSystem Design is defined as specifying how the system will accomplish its objectives, which comes after the what has been established, not during it.\n\nSystem Maintenance refers to ongoing support after the system is built, not the definition of what it should do.\n\nSystem Deployment refers to building, testing, and releasing the system, which occurs later than defining what the system should do."
  },
  {
    id: "csc312_ch1_009",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The System Development Life Cycle (SDLC) provides a structured framework for system development.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The System Development Life Cycle section explicitly states that the SDLC provides a structured framework for system development, and lists its phases in order from Planning through Maintenance."
  },
  {
    id: "csc312_ch1_010",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which phase of the SDLC comes immediately after Planning?",
    options: [
      "Analysis",
      "Design",
      "Implementation",
      "Maintenance"
    ],
    correctAnswer: 0,
    explanation: "The System Development Life Cycle section lists the phases in order as Planning, Analysis, Design, Implementation, and Maintenance, so Analysis directly follows Planning.\n\nDesign is the third phase, coming after Analysis, not immediately after Planning.\n\nImplementation is the fourth phase in the listed order, well after Planning.\n\nMaintenance is the fifth and final listed phase, not the phase that follows Planning."
  },
  {
    id: "csc312_ch1_011",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "During which SDLC phase is the scope, objectives, and feasibility of a proposed system identified?",
    options: [
      "Design",
      "Planning",
      "Implementation",
      "Maintenance"
    ],
    correctAnswer: 1,
    explanation: "The System Development Life Cycle section describes Planning as the phase for identifying scope, objectives, and feasibility of the proposed system.\n\nDesign is described as creating technical specifications, which happens after scope and feasibility have already been identified.\n\nImplementation is described as building, testing, and deploying the system, which is far later than identifying scope and feasibility.\n\nMaintenance is described as ongoing support and improvements, which occurs after the system already exists."
  },
  {
    id: "csc312_ch1_012",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which SDLC phase involves building, testing, and deploying the system?",
    options: [
      "Analysis",
      "Design",
      "Implementation",
      "Planning"
    ],
    correctAnswer: 2,
    explanation: "The System Development Life Cycle section states that Implementation covers building, testing, and deploying the system.\n\nAnalysis is described as gathering requirements and understanding current systems, not building or deploying.\n\nDesign is described as creating technical specifications, which precedes the actual building and deploying done in Implementation.\n\nPlanning is described as identifying scope, objectives, and feasibility, which comes well before building and deploying."
  },
  {
    id: "csc312_ch1_013",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Ongoing support and improvements to a system after it has been deployed fall under which SDLC phase?",
    options: [
      "Analysis",
      "Planning",
      "Design",
      "Maintenance"
    ],
    correctAnswer: 3,
    explanation: "The System Development Life Cycle section defines Maintenance as ongoing support and improvements, which occurs after the system is already in use.\n\nAnalysis is defined as gathering requirements and understanding current systems, an earlier phase than post-deployment support.\n\nPlanning is defined as identifying scope, objectives, and feasibility, the first phase, not the ongoing support phase.\n\nDesign is defined as creating technical specifications, which precedes deployment and is distinct from ongoing support afterward."
  },
  {
    id: "csc312_ch1_014",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "How many phases does the SDLC typically include?",
    options: [
      "Five phases",
      "Three phases",
      "Four phases",
      "Seven phases"
    ],
    correctAnswer: 0,
    explanation: "The System Development Life Cycle section lists exactly five phases: Planning, Analysis, Design, Implementation, and Maintenance.\n\nThree phases understates the count given in the note, which lists five distinct phases.\n\nFour phases also understates the count; one phase would be missing from the five listed.\n\nSeven phases overstates the count; the note lists five phases, not seven."
  },
  {
    id: "csc312_ch1_015",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a benefit of proper System Analysis and Design?",
    options: [
      "Guarantees the system will never need future upgrades",
      "Reduces development costs through proper planning",
      "Removes the need for any user feedback",
      "Eliminates the need for a project manager"
    ],
    correctAnswer: 1,
    explanation: "The Importance of SAD section lists reducing development costs through proper planning as one of the benefits of proper system analysis and design.\n\nThe note does not claim SAD guarantees a system will never need future upgrades; ongoing maintenance is listed as a normal SDLC phase.\n\nThe note does not state that SAD removes the need for user feedback; facilitating communication between stakeholders is listed as a benefit instead.\n\nThe note does not state that SAD eliminates the need for a project manager; project managers are listed among the roles in system analysis and design."
  },
  {
    id: "csc312_ch1_016",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Proper system analysis and design increases development costs regardless of how well the project is planned.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Importance of SAD section states that proper system analysis and design reduces development costs through proper planning, the opposite of increasing costs regardless of planning."
  },
  {
    id: "csc312_ch1_017",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is NOT listed as a benefit of proper System Analysis and Design?",
    options: [
      "Facilitates communication between stakeholders",
      "Improves system quality and reliability",
      "Automatically writes all program source code",
      "Helps manage complex projects effectively"
    ],
    correctAnswer: 2,
    explanation: "The Importance of SAD section lists ensuring systems meet business requirements, reducing costs, improving quality and reliability, facilitating communication, and helping manage complex projects as the benefits; automatically writing program source code is not among them.\n\nFacilitating communication between stakeholders is explicitly listed as a benefit of proper SAD.\n\nImproving system quality and reliability is explicitly listed as a benefit of proper SAD.\n\nHelping manage complex projects effectively is explicitly listed as a benefit of proper SAD."
  },
  {
    id: "csc312_ch1_018",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which role in system analysis and design is described as bridging business needs and technical solutions?",
    options: [
      "Business Analyst",
      "Project Manager",
      "Developer",
      "Systems Analyst"
    ],
    correctAnswer: 3,
    explanation: "The Roles in System Analysis and Design table describes the Systems Analyst as the role that bridges business needs and technical solutions.\n\nThe Business Analyst is described as focusing on business processes and requirements, a narrower focus than bridging business and technical solutions.\n\nThe Project Manager is described as overseeing the development process, not specifically bridging business needs with technical solutions.\n\nThe Developer is described as implementing the technical solution, which comes after the bridging work is done."
  },
  {
    id: "csc312_ch1_019",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which role in system analysis and design is responsible for overseeing the development process?",
    options: [
      "Project Manager",
      "End Users",
      "Business Analyst",
      "Systems Analyst"
    ],
    correctAnswer: 0,
    explanation: "The Roles in System Analysis and Design table lists the Project Manager as the role that oversees the development process.\n\nEnd Users are described as providing requirements and feedback, not overseeing development.\n\nThe Business Analyst is described as focusing on business processes and requirements, a different responsibility from overseeing the overall development process.\n\nThe Systems Analyst is described as bridging business needs and technical solutions, not specifically overseeing the whole development process."
  },
  {
    id: "csc312_ch1_020",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which role in system analysis and design is responsible for providing requirements and feedback as the people who will ultimately use the system?",
    options: [
      "Developers",
      "End Users",
      "Project Manager",
      "Business Analyst"
    ],
    correctAnswer: 1,
    explanation: "The Roles in System Analysis and Design table lists End Users as the role that provides requirements and feedback.\n\nDevelopers are described as implementing the technical solution, not the role that supplies requirements from a user's perspective.\n\nThe Project Manager is described as overseeing the development process, not providing requirements as an eventual user.\n\nThe Business Analyst is described as focusing on business processes and requirements from a business standpoint, a distinct role from the end users themselves."
  },
  {
    id: "csc312_ch1_021",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a modern approach to system analysis and design?",
    options: [
      "Manual paper filing",
      "Random guessing of requirements",
      "Agile Methodologies",
      "Ignoring stakeholder feedback"
    ],
    correctAnswer: 2,
    explanation: "The Modern Approaches section lists Agile Methodologies, alongside Object-Oriented Analysis and Design, Prototyping, and Cloud-Based Solutions, as modern approaches to SAD.\n\nManual paper filing is not listed as a modern approach; it is more characteristic of older manual systems described elsewhere in the note.\n\nRandom guessing of requirements is not a described approach anywhere in the note.\n\nIgnoring stakeholder feedback contradicts the note's emphasis on facilitating communication between stakeholders, and is not listed as an approach."
  },
  {
    id: "csc312_ch1_022",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A development team builds systems using iterative and incremental cycles, releasing small pieces of working functionality repeatedly rather than all at once. Which modern approach to SAD does this describe?",
    options: [
      "Cloud-Based Solutions",
      "Prototyping",
      "Object-Oriented Analysis and Design",
      "Agile Methodologies"
    ],
    correctAnswer: 3,
    explanation: "The Modern Approaches section describes Agile Methodologies as iterative and incremental development, matching a team releasing functionality in repeated small cycles.\n\nCloud-Based Solutions are described as designing for scalable, distributed systems, a concern about infrastructure rather than the iterative release cycle described.\n\nPrototyping is described as creating working models for feedback, which is related but distinct from full iterative and incremental delivery cycles.\n\nObject-Oriented Analysis and Design is described as modeling systems using objects, a modeling technique rather than an iterative delivery cycle."
  },
  {
    id: "csc312_ch1_023",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "System analysis and design assignments are like mathematics, where there is exactly one single correct answer.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Expectation Management section states the opposite: there is not one single correct answer for the same assignment, unlike mathematics, and the work calls on creativity and learning by doing."
  },
  {
    id: "csc312_ch1_024",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following best reflects the Expectation Management guidance for system analysis and design work?",
    options: [
      "Design calls for creativity and understanding of the problem domain, not one fixed correct answer",
      "Every assignment has exactly one correct numerical answer",
      "Domain knowledge is unnecessary for good design",
      "Learning by doing should be avoided in favor of pure theory"
    ],
    correctAnswer: 0,
    explanation: "The Expectation Management section states there is not one single correct answer for an assignment, that the work calls on creativity, and that design requires understanding of the problem domain, with learning by doing emphasized.\n\nClaiming there is exactly one correct numerical answer contradicts the note's explicit statement that SAD is not like mathematics in this respect.\n\nClaiming domain knowledge is unnecessary contradicts the note's statement that design requires understanding of the problem domain.\n\nClaiming learning by doing should be avoided contradicts the note, which lists learning by doing as a key point."
  },
  {
    id: "csc312_ch1_025",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a benefit associated with proper system analysis and design?",
    options: [
      "Reduced development costs",
      "Automatic elimination of all future maintenance",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Importance of SAD section lists reduced development costs through proper planning as a direct benefit. Automatic elimination of all future maintenance is not supported anywhere in the note; Maintenance is instead listed as a normal, ongoing SDLC phase that continues after deployment, so that claim is contradicted rather than confirmed."
  },
  {
    id: "csc312_ch1_026",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the work of Christopher Alexander referenced when introducing systems, analysis, and design, what is the main idea in architecture that influenced information systems methodologies?",
    options: [
      "All buildings must be constructed from a single identical blueprint",
      "Buildings and cities can be designed from combinations of certain basic patterns",
      "Architecture has no relationship to information systems development",
      "Patterns should never be documented or reused"
    ],
    correctAnswer: 1,
    explanation: "The Introduction section credits Christopher Alexander with the idea that buildings and cities can be designed from combinations of certain basic patterns, documented as diagrams, an idea later applied to describing and manipulating patterns in information systems.\n\nRequiring every building to use one identical blueprint contradicts the idea of combining patterns in different ways.\n\nThe note explicitly connects Alexander's architectural work to the methodologies used in information systems development, so a claim of no relationship is incorrect.\n\nThe note states such patterns can be documented as diagrams, so a claim that patterns should never be documented contradicts this."
  },
  {
    id: "csc312_ch1_027",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following best describes information within an organization?",
    options: [
      "A byproduct that has no value to the organization",
      "Something that only executives are permitted to access",
      "An organizational resource that must be managed carefully, like other resources",
      "A resource that decreases in volume as computer power becomes more affordable"
    ],
    correctAnswer: 2,
    explanation: "The Information section states that information can be viewed as an organizational resource, just as humans and other assets are, and that it must be managed carefully.\n\nThe note does not describe information as a valueless byproduct; it explicitly frames it as a resource requiring careful management.\n\nThe note does not restrict information access to executives only; it discusses information system users at multiple levels, from executives to operational employees.\n\nThe note states the opposite trend: affordable computer power has meant an explosion of information, not a decrease."
  },
  {
    id: "csc312_ch1_028",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following correctly defines Information Technology?",
    options: [
      "A single physical device used only for printing documents",
      "A department responsible only for hiring new staff",
      "A marketing term with no practical organizational use",
      "Hardware and software products and services used to manage and share information"
    ],
    correctAnswer: 3,
    explanation: "The Information Technology section defines it as the combination of hardware and software products and services that companies use to manage, access, communicate, and share information, and describes it as a vital asset.\n\nA single printing device is far narrower than the combination of hardware, software, products, and services described in the definition.\n\nA hiring department is a human resources function, unrelated to the definition of Information Technology given in the note.\n\nThe note explicitly calls Information Technology a vital asset that must be used effectively, not a term without practical use."
  },
  {
    id: "csc312_ch1_029",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The Systems Development section lists Deployment as one of its phases, while the earlier SDLC section uses a different term for a similar late-stage phase. What is that earlier term?",
    options: [
      "Implementation",
      "Analysis",
      "Planning",
      "Feedback"
    ],
    correctAnswer: 0,
    explanation: "The SDLC section lists Implementation as the phase for building, testing, and deploying the system, while the later Systems Development section lists Planning, Analysis, Design, Deployment, and Maintenance, using Deployment for a similar late-stage phase.\n\nAnalysis appears in both lists with the same name and position, so it is not the differing term.\n\nPlanning appears in both lists with the same name and position, so it is not the differing term.\n\nFeedback is an element of a system described later in the note, not a phase name used in either development phase list."
  },
  {
    id: "csc312_ch1_030",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which five phases make up the systematic process of systems development?",
    options: [
      "Coding, Testing, Marketing, Sales, and Support",
      "Planning, Analysis, Design, Deployment, and Maintenance",
      "Interviews, Surveys, Prototypes, Reviews, and Launch",
      "Hardware, Software, Network, Database, and Cloud"
    ],
    correctAnswer: 1,
    explanation: "The Systems Development section lists Planning, Analysis, Design, Deployment, and Maintenance as the phases of the systematic process of systems development.\n\nCoding, Testing, Marketing, Sales, and Support is not the phase list given in the Systems Development section.\n\nInterviews, Surveys, Prototypes, Reviews, and Launch mixes requirements-gathering methods with unrelated terms, not the phase list given.\n\nHardware, Software, Network, Database, and Cloud are technology categories, not the systems development phases listed in the note."
  },
  {
    id: "csc312_ch1_031",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The word 'System' is derived from which language's word 'Systema'?",
    options: [
      "Latin",
      "Arabic",
      "Greek",
      "French"
    ],
    correctAnswer: 2,
    explanation: "The What is a System section states that the word System is derived from the Greek word Systema, meaning an organized relationship between components to achieve some common cause.\n\nLatin is not the language identified in the note as the origin of the word System.\n\nArabic is not the language identified in the note as the origin of the word System.\n\nFrench is not the language identified in the note as the origin of the word System."
  },
  {
    id: "csc312_ch1_032",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The 'systems approach' is best described as which of the following?",
    options: [
      "A method that avoids solving any actual problem",
      "A term used only in accounting, unrelated to computing",
      "A random, unstructured way of reacting to issues",
      "An organized way of dealing with a problem"
    ],
    correctAnswer: 3,
    explanation: "The What is a System section states that systems are created to solve problems, and that the systems approach can be thought of as an organized way of dealing with a problem.\n\nThe note explicitly ties the systems approach to solving problems, so describing it as avoiding problem solving is incorrect.\n\nThe note applies the systems approach broadly to system analysis and design, including software development, not narrowly to accounting.\n\nThe note describes the approach as organized, which is the opposite of random and unstructured."
  },
  {
    id: "csc312_ch1_033",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is one of the elements of a system, alongside Input, Processor, and Output?",
    options: [
      "Control",
      "Marketing",
      "Pricing",
      "Advertising"
    ],
    correctAnswer: 0,
    explanation: "The Elements of a System section lists Control, along with Input, Processor, Output, Feedback, Environment, and Boundaries and Interface, as an element of a system.\n\nMarketing is a business function and is not listed among the elements of a system in this section.\n\nPricing is a business decision and is not listed among the elements of a system in this section.\n\nAdvertising is a promotional activity and is not listed among the elements of a system in this section."
  },
  {
    id: "csc312_ch1_034",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which element of a system is described as the operational component that involves the actual transformation of input into output?",
    options: [
      "Environment",
      "Processor",
      "Boundary",
      "Feedback"
    ],
    correctAnswer: 1,
    explanation: "The Elements of a System section describes the Processor as the element involving the actual transformation of input into output, and as the operational component of the system.\n\nEnvironment is described as the supersystem within which the organization operates, not the component that transforms input into output.\n\nBoundary is described as the limit identifying a system's components and processes, not the transforming component.\n\nFeedback is described as providing control in a dynamic system, not as the component that performs the transformation."
  },
  {
    id: "csc312_ch1_035",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which element of a system is described as the decision-making subsystem that guides the pattern of activities governing input, processing, and output?",
    options: [
      "Boundary",
      "Environment",
      "Control",
      "Processor"
    ],
    correctAnswer: 2,
    explanation: "The Elements of a System section describes Control as the decision-making subsystem that guides the pattern of activities governing input, processing, and output.\n\nBoundary is described as the limit that identifies a system's components and interrelationships, not the decision-making subsystem.\n\nEnvironment is described as the supersystem and source of external elements, not the decision-making subsystem within the system.\n\nProcessor is described as the component that transforms input into output, not the decision-making subsystem that guides that activity."
  },
  {
    id: "csc312_ch1_036",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The Elements of a System section distinguishes two types of feedback. Which type is described as routine in nature and encourages the performance of the system?",
    options: [
      "Negative feedback",
      "External feedback",
      "Delayed feedback",
      "Positive feedback"
    ],
    correctAnswer: 3,
    explanation: "The Elements of a System section states that positive feedback is routine in nature and encourages the performance of the system.\n\nNegative feedback is described as informational in nature, providing the controller with information, rather than being routine encouragement.\n\nExternal feedback is not a term used in the note; only positive and negative feedback are defined.\n\nDelayed feedback is not a term used in the note; only positive and negative feedback are defined."
  },
  {
    id: "csc312_ch1_037",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Negative feedback is described as routine in nature and encourages the performance of the system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Elements of a System section assigns that description to positive feedback; negative feedback is instead described as informational in nature, providing the controller with information for decision-making."
  },
  {
    id: "csc312_ch1_038",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of feedback is described as informational in nature, providing the controller with information for decision-making?",
    options: [
      "Negative feedback",
      "Positive feedback",
      "Routine feedback",
      "Encouraging feedback"
    ],
    correctAnswer: 0,
    explanation: "The Elements of a System section states that negative feedback is informational in nature, providing the controller with information for decision-making.\n\nPositive feedback is described as routine, encouraging performance, which is the opposite characterization given to negative feedback.\n\nRoutine feedback is not the term used for the informational type in the note; routine describes positive feedback instead.\n\nEncouraging feedback is not a defined term in the note; encouraging is the characteristic given to positive feedback, not the informational type."
  },
  {
    id: "csc312_ch1_039",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which element of a system is described as the 'supersystem' within which an organization operates, and the source of external elements affecting the system?",
    options: [
      "Control",
      "Environment",
      "Processor",
      "Feedback"
    ],
    correctAnswer: 1,
    explanation: "The Elements of a System section describes the Environment as the supersystem within which an organization operates and the source of external elements that strike on the system, such as vendors and competitors.\n\nControl is described as the decision-making subsystem, not the external supersystem.\n\nProcessor is described as the component that transforms input into output, not the external supersystem.\n\nFeedback is described as providing control in a dynamic system, not the external supersystem surrounding the organization."
  },
  {
    id: "csc312_ch1_040",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which element of a system is described as the limits that identify its components, processes, and interrelationships when it interfaces with another system?",
    options: [
      "Control",
      "Feedback",
      "Boundaries",
      "Processor"
    ],
    correctAnswer: 2,
    explanation: "The Elements of a System section describes Boundaries as the limits that identify a system's components, processes, and interrelationships when it interfaces with another system.\n\nControl is described as the decision-making subsystem guiding activities, not the limits that define the system's scope.\n\nFeedback is described as providing control in a dynamic system, not the limits defining a system's scope.\n\nProcessor is described as transforming input into output, not the limits that define a system's scope."
  },
  {
    id: "csc312_ch1_041",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A company's vendors and competitors belong to which element of a system?",
    options: [
      "Processor",
      "Feedback",
      "Boundaries",
      "Environment"
    ],
    correctAnswer: 3,
    explanation: "The Elements of a System section gives vendors and competitors as examples of an organization's environment, which may provide constraints that affect the system's performance.\n\nProcessor is the transforming component of the system, not an example category that includes vendors and competitors.\n\nFeedback provides control information within the system, and is not the category that includes vendors and competitors.\n\nBoundaries define the limits of the system's components, and are not the category that includes vendors and competitors."
  },
  {
    id: "csc312_ch1_042",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The knowledge of a system's boundaries is described as crucial for determining which of the following?",
    options: [
      "The nature of its interface with other systems",
      "The final selling price of the system",
      "The number of staff hired by the company",
      "The color scheme of the user interface"
    ],
    correctAnswer: 0,
    explanation: "The Boundaries and Interface section states that knowledge of a system's boundaries is crucial in determining the nature of its interface with other systems.\n\nThe selling price is a business decision unrelated to the discussion of boundaries and interfaces in this section.\n\nStaffing numbers are a human resources matter, not something the note ties to knowledge of system boundaries.\n\nColor scheme is a visual design detail, not something the note ties to knowledge of system boundaries."
  },
  {
    id: "csc312_ch1_043",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In a system, the different components are connected with each other and are interdependent, as illustrated by the human body example.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The System Interdependence section states that in a system, components are connected and interdependent, using the human body as an example of a complete natural system, alongside national systems such as political and economic systems."
  },
  {
    id: "csc312_ch1_044",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A paper-based record system operated entirely by people, without the use of computers, is an example of which type of system?",
    options: [
      "A computer-based system",
      "A manual system",
      "A decision support system",
      "A transaction processing system"
    ],
    correctAnswer: 1,
    explanation: "The Types of Systems section describes manual systems as operated by humans without computers, giving a paper-based record system as the example.\n\nA computer-based system is defined as using hardware and software to process data, which is the opposite of the manual, human-only operation described.\n\nA decision support system is listed as a type of computer-based system, not a manual, human-only system.\n\nA transaction processing system is also listed as a type of computer-based system, not a manual, human-only system."
  },
  {
    id: "csc312_ch1_045",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a type of computer-based system alongside Transaction Processing Systems and Decision Support Systems?",
    options: [
      "Manual filing cabinets",
      "Paper-based ledgers",
      "Management Information Systems",
      "Handwritten memos"
    ],
    correctAnswer: 2,
    explanation: "The Computer-Based Systems section lists Transaction Processing Systems, Management Information Systems, and Decision Support Systems as types of computer-based systems.\n\nManual filing cabinets are associated with manual systems, described separately as operated without computers.\n\nPaper-based ledgers are associated with manual systems, not the computer-based systems listed in this section.\n\nHandwritten memos are associated with manual, human-operated communication, not the computer-based systems listed in this section."
  },
  {
    id: "csc312_ch1_046",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "An online banking system that constantly interacts with its surrounding environment is an example of which type of system?",
    options: [
      "Closed System",
      "Manual System",
      "Knowledge Management System",
      "Open System"
    ],
    correctAnswer: 3,
    explanation: "The Open vs Closed Systems table gives an online banking system as the example of an Open System, described as one that interacts with the environment.\n\nA Closed System is described as having minimal interaction with the environment, which is the opposite of the online banking example.\n\nA Manual System is described as operated by humans without computers, unrelated to the open versus closed distinction illustrated by online banking.\n\nA Knowledge Management System is described elsewhere as a system that simulates human reasoning, not the type illustrated by the online banking example."
  },
  {
    id: "csc312_ch1_047",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following best describes a Closed System, as contrasted with an Open System?",
    options: [
      "A system with minimal interaction with its environment",
      "A system that constantly exchanges data with its environment",
      "A system that only exists on the internet",
      "A system that has no processor element"
    ],
    correctAnswer: 0,
    explanation: "The Open vs Closed Systems table describes a Closed System as having minimal interaction with the environment, in contrast to an Open System, which interacts with the environment.\n\nConstant exchange with the environment is the description given for an Open System, not a Closed System.\n\nThe note does not restrict closed systems to existing only on the internet; the open versus closed distinction is about environmental interaction, not internet presence.\n\nThe note does not state that closed systems lack a processor element; the processor is a general element of systems described separately, unrelated to the open versus closed distinction."
  },
  {
    id: "csc312_ch1_048",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which characteristic of a good system is described as using minimal resources?",
    options: [
      "Scalability",
      "Efficiency",
      "Flexibility",
      "Security"
    ],
    correctAnswer: 1,
    explanation: "The Characteristics of a Good System table describes Efficiency as using minimal resources.\n\nScalability is described as handling growth, not resource minimization.\n\nFlexibility is described as adapting to change, not resource minimization.\n\nSecurity is described as protecting data, not resource minimization."
  },
  {
    id: "csc312_ch1_049",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which characteristic of a good system is described as its ability to handle growth?",
    options: [
      "Reliability",
      "Efficiency",
      "Scalability",
      "Security"
    ],
    correctAnswer: 2,
    explanation: "The Characteristics of a Good System table describes Scalability as the ability to handle growth.\n\nReliability is described as producing consistent results, not handling growth.\n\nEfficiency is described as using minimal resources, not handling growth.\n\nSecurity is described as protecting data, not handling growth."
  },
  {
    id: "csc312_ch1_050",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which characteristic of a good system is described as producing consistent results?",
    options: [
      "Flexibility",
      "Scalability",
      "Efficiency",
      "Reliability"
    ],
    correctAnswer: 3,
    explanation: "The Characteristics of a Good System table describes Reliability as producing consistent results.\n\nFlexibility is described as adapting to change, not producing consistent results.\n\nScalability is described as handling growth, not producing consistent results.\n\nEfficiency is described as using minimal resources, not producing consistent results."
  },
  {
    id: "csc312_ch1_051",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Although System Analysis and Design studies systems, its deeper focus is on which of the following?",
    options: [
      "Understanding how the system supports processes",
      "Understanding how to sell more units of the system",
      "Understanding how to reduce staff headcount",
      "Understanding how to increase the system's selling price"
    ],
    correctAnswer: 0,
    explanation: "The Systems in the Context of SAD section states that although SAD studies systems, its deeper focus is understanding how the system supports processes, with systems as tools and processes as what the system enables.\n\nSelling more units is a sales concern, not the deeper focus the note assigns to SAD.\n\nReducing staff headcount is a business cost decision, not the deeper focus the note assigns to SAD.\n\nIncreasing the selling price is a business decision, not the deeper focus the note assigns to SAD."
  },
  {
    id: "csc312_ch1_052",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the CBT Examination System example, timer alerts and error messages are given as examples of which system component?",
    options: [
      "Input",
      "Feedback",
      "Process",
      "Output"
    ],
    correctAnswer: 1,
    explanation: "The Example: CBT Examination System table lists error messages and timer alerts under the Feedback component.\n\nInput in this example is described as student login details and answers, not error messages or timer alerts.\n\nProcess in this example is described as question display, timing, and grading, not the alert messages themselves.\n\nOutput in this example is described as scores and result reports, not error messages or timer alerts."
  },
  {
    id: "csc312_ch1_053",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the CBT Examination System example, login authentication and exam rules are given as examples of which system component?",
    options: [
      "Feedback",
      "Output",
      "Control",
      "Input"
    ],
    correctAnswer: 2,
    explanation: "The Example: CBT Examination System table lists login authentication and exam rules under the Control component.\n\nFeedback in this example is described as error messages and timer alerts, not authentication or exam rules.\n\nOutput in this example is described as scores and result reports, not authentication or exam rules.\n\nInput in this example is described as student login details and answers, which is distinct from the authentication rules that govern the exam."
  },
  {
    id: "csc312_ch1_054",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the CBT Examination System example, question display, timing, and grading are grouped under which system component?",
    options: [
      "Input",
      "Feedback",
      "Control",
      "Process"
    ],
    correctAnswer: 3,
    explanation: "The Example: CBT Examination System table lists question display, timing, and grading under the Process component.\n\nInput in this example is described as student login details and answers, not the display or grading activity itself.\n\nFeedback in this example is described as error messages and timer alerts, not the underlying display, timing, and grading activity.\n\nControl in this example is described as login authentication and exam rules, not the display, timing, and grading activity."
  },
  {
    id: "csc312_ch1_055",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is given as part of the environment of the CBT system example?",
    options: [
      "Students",
      "The internet",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Environment section for the CBT system example gives students, administrators, and the internet as external elements interacting with the system, so both students and the internet are correctly named, making All of these correct."
  },
  {
    id: "csc312_ch1_056",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the system boundary example given for a CBT system, what is described as being outside the system boundary?",
    options: [
      "An external payment gateway",
      "The exam questions displayed to students",
      "The scoring logic that grades answers",
      "The login form used by students"
    ],
    correctAnswer: 0,
    explanation: "The System Boundary section gives the example of CBT software versus an external payment gateway, placing the payment gateway outside the CBT system's own boundary.\n\nExam questions displayed to students are part of the CBT system's own process, inside the boundary, not the external example given.\n\nThe scoring logic is part of the CBT system's own process, inside the boundary, not the external example given.\n\nThe login form is part of the CBT system's own input and control mechanism, inside the boundary, not the external example given."
  },
  {
    id: "csc312_ch1_057",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "For the CBT system example, which of the following is given as part of the system's environment?",
    options: [
      "The database schema used internally by the system",
      "Students, administrators, and the internet",
      "The internal grading algorithm",
      "The system's internal control logic"
    ],
    correctAnswer: 1,
    explanation: "The Environment section gives students, administrators, and the internet as external elements interacting with the CBT system, forming its environment.\n\nThe internal database schema is part of the system itself, not an external element making up its environment.\n\nThe internal grading algorithm is part of the system's own process, not an external environmental element.\n\nThe system's internal control logic is part of the system itself, not an external environmental element."
  },
  {
    id: "csc312_ch1_058",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a reason why systems matter in system analysis and design?",
    options: [
      "They eliminate the need for any decision-making",
      "They remove the need to integrate components",
      "They help identify inputs, outputs, and processes",
      "They guarantee a system will never fail"
    ],
    correctAnswer: 2,
    explanation: "The Why Systems Matter in SAD section lists helping identify inputs, outputs, and processes as one of the reasons systems matter, alongside providing structure for analysis, ensuring integration, and supporting decision-making.\n\nThe note lists supporting decision-making as a reason systems matter, not eliminating decision-making.\n\nThe note lists ensuring integration of components as a reason systems matter, not removing the need for integration.\n\nThe note makes no claim that systems guarantee they will never fail; this is not listed as a reason systems matter."
  },
  {
    id: "csc312_ch1_059",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of information system is defined as supporting company-wide operations and data management?",
    options: [
      "Transaction processing systems",
      "Knowledge management systems",
      "User productivity systems",
      "Enterprise computing systems"
    ],
    correctAnswer: 3,
    explanation: "The Enterprise Computing Systems section defines them as information systems that support company-wide operations and data management.\n\nTransaction processing systems are defined as processing data generated by day-to-day business operations, a narrower scope than company-wide operations.\n\nKnowledge management systems are defined as simulating human reasoning, not supporting company-wide operations broadly.\n\nUser productivity systems are defined as technology that improves productivity, such as word processing, not company-wide operational support."
  },
  {
    id: "csc312_ch1_060",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of information system is defined as processing data generated by day-to-day business operations?",
    options: [
      "Transaction processing systems",
      "Knowledge management systems",
      "Enterprise computing systems",
      "User productivity systems"
    ],
    correctAnswer: 0,
    explanation: "The Transaction Processing Systems section defines them as systems that process data generated by day-to-day business operations, such as verifying customer data and adjusting inventory.\n\nKnowledge management systems are defined as simulating human reasoning, not processing routine daily transactions.\n\nEnterprise computing systems are defined as supporting company-wide operations and data management, a broader description than day-to-day transaction processing.\n\nUser productivity systems are defined as technology that improves productivity, such as word processing, not processing daily business transactions."
  },
  {
    id: "csc312_ch1_061",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of information system provides job-related information to users at all levels of a company, including Management Information Systems and what-if analysis?",
    options: [
      "Transaction processing systems",
      "Business support systems",
      "User productivity systems",
      "Knowledge management systems"
    ],
    correctAnswer: 1,
    explanation: "The Business Support Systems section defines them as systems that provide job-related information to users at all levels of a company, including Management Information Systems and what-if analysis.\n\nTransaction processing systems are defined as processing day-to-day operational data, not broadly providing job-related information at all levels.\n\nUser productivity systems are defined as technology that improves productivity, such as word processing, not providing job-related information at all levels.\n\nKnowledge management systems are defined as simulating human reasoning, not providing general job-related information at all levels."
  },
  {
    id: "csc312_ch1_062",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of information system is defined as simulating human reasoning?",
    options: [
      "Transaction processing systems",
      "Business support systems",
      "Knowledge management systems",
      "Enterprise computing systems"
    ],
    correctAnswer: 2,
    explanation: "The Knowledge Management Systems section defines them as systems that simulate human reasoning.\n\nTransaction processing systems are defined as processing day-to-day operational data, not simulating human reasoning.\n\nBusiness support systems are defined as providing job-related information to users, not simulating human reasoning.\n\nEnterprise computing systems are defined as supporting company-wide operations, not simulating human reasoning."
  },
  {
    id: "csc312_ch1_063",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Word processing is an example of which type of information system?",
    options: [
      "Transaction processing systems",
      "Knowledge management systems",
      "Enterprise computing systems",
      "User productivity systems"
    ],
    correctAnswer: 3,
    explanation: "The User Productivity Systems section describes them as technology that improves productivity, giving word processing as an example.\n\nTransaction processing systems process day-to-day operational data, and word processing is not given as their example.\n\nKnowledge management systems simulate human reasoning, and word processing is not given as their example.\n\nEnterprise computing systems support company-wide operations, and word processing is not given as their example."
  },
  {
    id: "csc312_ch1_064",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as an information system type that most large companies must integrate together?",
    options: [
      "Transaction processing",
      "Direct marketing",
      "Legal compliance filing",
      "Warehouse construction"
    ],
    correctAnswer: 0,
    explanation: "The Information Systems Integration section states that most large companies require systems that combine transaction processing, business support, knowledge management, and user productivity features.\n\nDirect marketing is not one of the four system types listed as needing integration in this section.\n\nLegal compliance filing is not one of the four system types listed as needing integration in this section.\n\nWarehouse construction is not one of the four system types listed as needing integration in this section."
  },
  {
    id: "csc312_ch1_065",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which group of information system users is described as needing information for long-range, strategic decisions?",
    options: [
      "Operational Employees",
      "Executive or Top managers",
      "Supervisors and Team Leaders",
      "Middle Managers and Knowledge Workers"
    ],
    correctAnswer: 1,
    explanation: "The Information System Users and Their Needs section lists Executive or Top managers first among the four levels of users, positioned at the highest level associated with strategic, organization-wide concerns.\n\nOperational Employees are listed as a separate, lower level focused on day-to-day operational tasks, not top-level strategic decisions.\n\nSupervisors and Team Leaders are listed as a distinct middle level, not the top executive level.\n\nMiddle Managers and Knowledge Workers are listed as a distinct level below top management, not the top executive level."
  },
  {
    id: "csc312_ch1_066",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is not a new programming language, but rather a technique that uses existing languages to make web pages function more like a desktop application?",
    options: [
      "SQL",
      "UML",
      "Ajax",
      "HTML"
    ],
    correctAnswer: 2,
    explanation: "The Need for Systems Analysis and Design section explicitly notes that Ajax is not a new programming language, but a technique that uses existing languages to make web pages function more like a traditional desktop application.\n\nSQL is not discussed in this part of the note at all; the explicit clarification is made about Ajax.\n\nUML is mentioned elsewhere in the note as a diagramming tool, not as the technique clarified in this section.\n\nHTML is not discussed in this part of the note; the explicit clarification is made about Ajax specifically."
  },
  {
    id: "csc312_ch1_067",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following correctly defines Systems Analysis?",
    options: [
      "A process of writing final training manuals for end users",
      "A process of setting the annual budget for the marketing department",
      "A process of physically installing network cables",
      "A process of collecting and interpreting facts, identifying problems, and decomposing a system into its parts"
    ],
    correctAnswer: 3,
    explanation: "The Systems Analysis section defines it as a process of collecting and interpreting facts, identifying problems, and decomposing a system into its parts, conducted to identify the system's objectives.\n\nWriting training manuals is a documentation task, not the definition of systems analysis given in the note.\n\nSetting a marketing budget is a business finance task, not the definition of systems analysis given in the note.\n\nInstalling network cables is a physical implementation task, not the definition of systems analysis given in the note."
  },
  {
    id: "csc312_ch1_068",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Analysis specifies which of the following?",
    options: [
      "What the system should do",
      "How the system will be physically wired",
      "How much the system will cost to advertise",
      "Who will be fired if the system fails"
    ],
    correctAnswer: 0,
    explanation: "The Systems Analysis section explicitly states that analysis specifies what the system should do, in contrast to design, which specifies how.\n\nPhysical wiring is a hardware implementation detail, not what the note assigns to analysis.\n\nAdvertising cost is a marketing budget concern, not what the note assigns to analysis.\n\nStaffing consequences of failure are not discussed in this section; analysis is defined in terms of specifying what the system should do."
  },
  {
    id: "csc312_ch1_069",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as an objective of System Analysis?",
    options: [
      "Print the final invoice for the client",
      "Evaluate feasibility of solutions",
      "Design the company's advertising campaign",
      "Recruit new sales staff"
    ],
    correctAnswer: 1,
    explanation: "The Objectives of System Analysis section lists evaluating the feasibility of solutions among its five objectives, alongside identifying problems, understanding user requirements, recommending improved design, and ensuring alignment with organizational goals.\n\nPrinting a client invoice is a billing task, not one of the listed objectives of system analysis.\n\nDesigning an advertising campaign is a marketing task, not one of the listed objectives of system analysis.\n\nRecruiting sales staff is a human resources task, not one of the listed objectives of system analysis."
  },
  {
    id: "csc312_ch1_070",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a key activity in system analysis, involving asking what is wrong with the current system, such as delays or errors?",
    options: [
      "System Modeling",
      "Feasibility Study",
      "Problem Identification",
      "Requirements Analysis"
    ],
    correctAnswer: 2,
    explanation: "The Key Activities in System Analysis section describes Problem Identification as asking what is wrong with the current system, giving delays, errors, and inefficiency as examples.\n\nSystem Modeling is described as using tools such as DFDs, use case diagrams, and ERDs, not identifying what is currently wrong.\n\nFeasibility Study is described as assessing whether a solution can be built, afforded, accepted, and is legal, a later activity than identifying the current problem.\n\nRequirements Analysis is described as distinguishing functional from non-functional requirements, a different activity from identifying the current problem."
  },
  {
    id: "csc312_ch1_071",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a method used for requirements gathering during system analysis?",
    options: [
      "Random sampling of unrelated documents",
      "Ignoring current users entirely",
      "Guessing based on competitor advertising",
      "Interviews"
    ],
    correctAnswer: 3,
    explanation: "The Requirements Gathering section lists interviews, questionnaires, observation, and document analysis as the methods used to gather requirements.\n\nRandom sampling of unrelated documents is not one of the four methods listed for requirements gathering in this section.\n\nIgnoring current users entirely contradicts the listed methods, which rely on engaging users through interviews, questionnaires, and observation.\n\nGuessing based on competitor advertising is not one of the four methods listed for requirements gathering in this section."
  },
  {
    id: "csc312_ch1_072",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is NOT listed as a method used for requirements gathering in system analysis?",
    options: [
      "Public social media polling",
      "Questionnaires",
      "Observation",
      "Document analysis"
    ],
    correctAnswer: 0,
    explanation: "The Requirements Gathering section lists exactly four methods: interviews, questionnaires, observation, and document analysis. Social media polling of the general public is not among them.\n\nQuestionnaires are explicitly listed as one of the four requirements gathering methods.\n\nObservation is explicitly listed as one of the four requirements gathering methods.\n\nDocument analysis is explicitly listed as one of the four requirements gathering methods."
  },
  {
    id: "csc312_ch1_073",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A requirement stating that a login page must load within two seconds describes performance, which is classified as which type of requirement?",
    options: [
      "Functional requirement",
      "Non-functional requirement",
      "Feasibility requirement",
      "Structural requirement"
    ],
    correctAnswer: 1,
    explanation: "The Requirements Analysis section classifies non-functional requirements as covering performance, security, and usability, matching a requirement about page load speed.\n\nFunctional requirements are described as what the system should do, such as specific features, not performance characteristics like load speed.\n\nFeasibility requirement is not a category used in the Requirements Analysis section; feasibility is a separate activity discussed afterward.\n\nStructural requirement is not a term used in the Requirements Analysis section of the note."
  },
  {
    id: "csc312_ch1_074",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A requirement stating that the system must allow a student to submit an exam answer describes a specific feature the system should perform. Which type of requirement is this?",
    options: [
      "Non-functional requirement",
      "Economic requirement",
      "Functional requirement",
      "Legal requirement"
    ],
    correctAnswer: 2,
    explanation: "The Requirements Analysis section describes functional requirements as covering what the system should do, matching a requirement that the system allow answer submission.\n\nNon-functional requirements cover performance, security, and usability, not a specific feature like submitting an answer.\n\nEconomic requirement is not a category used in the Requirements Analysis section; economic feasibility is a separate, later activity.\n\nLegal requirement is not a category used in the Requirements Analysis section; legal feasibility is a separate, later activity."
  },
  {
    id: "csc312_ch1_075",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of feasibility asks whether a proposed system is cost-effective?",
    options: [
      "Technical feasibility",
      "Operational feasibility",
      "Legal feasibility",
      "Economic feasibility"
    ],
    correctAnswer: 3,
    explanation: "The Feasibility Study table lists Economic feasibility as asking whether the system is cost-effective.\n\nTechnical feasibility is described as asking whether the system can be built, not whether it is cost-effective.\n\nOperational feasibility is described as asking whether users will accept the system, not whether it is cost-effective.\n\nLegal feasibility is described as asking about legal constraints, not cost-effectiveness."
  },
  {
    id: "csc312_ch1_076",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Legal feasibility asks whether a proposed system is cost-effective.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Feasibility Study table assigns the cost-effectiveness question to Economic feasibility; Legal feasibility instead asks whether there are any legal constraints on the system."
  },
  {
    id: "csc312_ch1_077",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of feasibility asks whether users will accept the proposed system?",
    options: [
      "Operational feasibility",
      "Technical feasibility",
      "Economic feasibility",
      "Legal feasibility"
    ],
    correctAnswer: 0,
    explanation: "The Feasibility Study table lists Operational feasibility as asking whether users will accept the system.\n\nTechnical feasibility asks whether the system can be built, not whether users will accept it.\n\nEconomic feasibility asks whether the system is cost-effective, not whether users will accept it.\n\nLegal feasibility asks about legal constraints, not user acceptance."
  },
  {
    id: "csc312_ch1_078",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of feasibility specifically asks whether the system can be built?",
    options: [
      "Operational feasibility",
      "Technical feasibility",
      "Economic feasibility",
      "Legal feasibility"
    ],
    correctAnswer: 1,
    explanation: "The Feasibility Study table lists Technical feasibility as asking whether the system can be built.\n\nOperational feasibility asks whether users will accept the system, not whether it can technically be built.\n\nEconomic feasibility asks whether the system is cost-effective, not whether it can technically be built.\n\nLegal feasibility asks about legal constraints, not the technical possibility of building the system."
  },
  {
    id: "csc312_ch1_079",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of feasibility specifically addresses legal constraints on a proposed system?",
    options: [
      "Technical feasibility",
      "Economic feasibility",
      "Legal feasibility",
      "Operational feasibility"
    ],
    correctAnswer: 2,
    explanation: "The Feasibility Study table lists Legal feasibility as asking whether there are any legal constraints on the system.\n\nTechnical feasibility asks whether the system can be built, not about legal constraints.\n\nEconomic feasibility asks whether the system is cost-effective, not about legal constraints.\n\nOperational feasibility asks whether users will accept the system, not about legal constraints."
  },
  {
    id: "csc312_ch1_080",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following tools is listed under System Modeling for representing entity relationships in a proposed system?",
    options: [
      "Gantt charts",
      "Balance sheets",
      "Organizational charts",
      "Entity-Relationship Diagrams (ERD)"
    ],
    correctAnswer: 3,
    explanation: "The System Modeling section lists Data Flow Diagrams, Use Case Diagrams, and Entity-Relationship Diagrams as the tools used in system modeling.\n\nGantt charts are project scheduling tools and are not listed among the system modeling tools in this section.\n\nBalance sheets are financial statements and are not listed among the system modeling tools in this section.\n\nOrganizational charts show company hierarchy and are not listed among the system modeling tools in this section."
  },
  {
    id: "csc312_ch1_081",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system analysis technique is described as focusing on processes and data flow, using DFDs and flowcharts?",
    options: [
      "Structured Analysis",
      "Object-Oriented Analysis",
      "Prototyping",
      "Feasibility Study"
    ],
    correctAnswer: 0,
    explanation: "The Tools and Techniques in System Analysis section describes Structured Analysis as focusing on processes and data flow, using DFDs and flowcharts.\n\nObject-Oriented Analysis is described as focusing on objects and classes using UML diagrams, not processes and data flow with DFDs.\n\nPrototyping is described as building a sample system to refine requirements, not analyzing processes and data flow with DFDs.\n\nFeasibility Study is an activity assessing whether a system can be built and afforded, not a technique focused on process and data flow diagrams."
  },
  {
    id: "csc312_ch1_082",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system analysis technique focuses on objects and classes, using UML diagrams?",
    options: [
      "Structured Analysis",
      "Object-Oriented Analysis (OOA)",
      "Prototyping",
      "Requirements Gathering"
    ],
    correctAnswer: 1,
    explanation: "The Tools and Techniques in System Analysis section describes Object-Oriented Analysis as focusing on objects and classes, using UML diagrams.\n\nStructured Analysis is described as focusing on processes and data flow using DFDs and flowcharts, not objects and classes.\n\nPrototyping is described as building a sample system to refine requirements, not modeling objects and classes with UML.\n\nRequirements Gathering is an activity using interviews, questionnaires, observation, and document analysis, not a modeling technique using UML."
  },
  {
    id: "csc312_ch1_083",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system analysis technique involves building a sample system to refine requirements?",
    options: [
      "Structured Analysis",
      "Object-Oriented Analysis",
      "Prototyping",
      "Feasibility Study"
    ],
    correctAnswer: 2,
    explanation: "The Tools and Techniques in System Analysis section describes Prototyping as building a sample system to refine requirements.\n\nStructured Analysis is described as focusing on processes and data flow using DFDs and flowcharts, not building a sample system.\n\nObject-Oriented Analysis is described as focusing on objects and classes using UML diagrams, not building a sample system.\n\nFeasibility Study assesses whether the system can be built, afforded, and accepted, rather than building a sample system to refine requirements."
  },
  {
    id: "csc312_ch1_084",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "The System Analyst is described as acting as what, between users and technical solutions?",
    options: [
      "A barrier",
      "A competitor",
      "A replacement",
      "A bridge"
    ],
    correctAnswer: 3,
    explanation: "The Role of a System Analyst section describes the System Analyst as acting as a bridge between users and the technical solution.\n\nDescribing the analyst as a barrier contradicts the note's description of the role as connecting, not blocking, users and technical solutions.\n\nDescribing the analyst as a competitor contradicts the collaborative bridging role given in the note.\n\nDescribing the analyst as a replacement for users contradicts the note, which lists gathering requirements from and communicating with stakeholders as a responsibility, implying users remain involved."
  },
  {
    id: "csc312_ch1_085",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a responsibility of a System Analyst?",
    options: [
      "Gather and document requirements",
      "Set the company's annual tax rate",
      "Approve employee vacation requests",
      "Manufacture the physical hardware casing"
    ],
    correctAnswer: 0,
    explanation: "The Responsibilities section under Role of a System Analyst lists gathering and documenting requirements as one of the five listed responsibilities.\n\nSetting a tax rate is a finance and government matter, not a listed responsibility of a system analyst.\n\nApproving vacation requests is a human resources task, not a listed responsibility of a system analyst.\n\nManufacturing hardware casing is a physical production task, not a listed responsibility of a system analyst."
  },
  {
    id: "csc312_ch1_086",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a characteristic of a good System Analyst?",
    options: [
      "A preference for working entirely alone with no communication",
      "Strong analytical skills",
      "Complete lack of technical knowledge",
      "Avoidance of understanding business processes"
    ],
    correctAnswer: 1,
    explanation: "The Characteristics of a Good System Analyst section lists strong analytical skills, alongside good communication skills, problem-solving ability, technical knowledge, and understanding of business processes.\n\nThe note lists good communication skills as a characteristic, which contradicts a preference for working entirely alone with no communication.\n\nThe note lists technical knowledge as a characteristic, which contradicts a complete lack of technical knowledge.\n\nThe note lists understanding of business processes as a characteristic, which contradicts avoidance of that understanding."
  },
  {
    id: "csc312_ch1_087",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a reason system analysis is important?",
    options: [
      "Increases the likelihood of unplanned system crashes",
      "Removes the need to satisfy users",
      "Reduces project failure",
      "Encourages skipping documentation entirely"
    ],
    correctAnswer: 2,
    explanation: "The Importance of System Analysis section lists reducing project failure as one of the reasons system analysis is important, alongside saving time and cost, improving quality, and ensuring user satisfaction.\n\nThe note lists reducing project failure as a benefit, which is the opposite of increasing unplanned crashes.\n\nThe note lists ensuring user satisfaction as a benefit, which contradicts removing the need to satisfy users.\n\nThe note does not encourage skipping documentation; system modeling and requirements documentation are described as key activities."
  },
  {
    id: "csc312_ch1_088",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Manual Student Registration System example, long queues and errors in records are identified as which part of the case?",
    options: [
      "The analysis outcome",
      "The feasibility study result",
      "The system boundary",
      "The problem"
    ],
    correctAnswer: 3,
    explanation: "The Example: Manual Student Registration System case labels long queues and errors in records as the problem, with the analysis outcome recommending an online registration system, secure database, and automated course allocation.\n\nThe analysis outcome in this example refers to the recommended solutions, such as an online registration system, not the original problem.\n\nA feasibility study result is not part of this worked example; only a problem and an analysis outcome are given.\n\nSystem boundary is not part of this worked example; the case only describes a problem and an analysis outcome."
  },
  {
    id: "csc312_ch1_089",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Manual Student Registration System example, which of the following is listed as part of the analysis outcome?",
    options: [
      "Need for an online registration system",
      "A decision to close the registration office permanently",
      "A decision to double student registration fees",
      "A decision to remove all record keeping"
    ],
    correctAnswer: 0,
    explanation: "The Example: Manual Student Registration System case lists the need for an online registration system, a secure database, and automated course allocation as the analysis outcome.\n\nClosing the registration office permanently is not part of the analysis outcome listed in this worked example.\n\nDoubling registration fees is not part of the analysis outcome listed in this worked example.\n\nRemoving all record keeping contradicts the analysis outcome, which calls for a secure database, not the removal of records."
  },
  {
    id: "csc312_ch1_090",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following correctly defines Systems Design?",
    options: [
      "A process of collecting and interpreting facts to identify a system's problems",
      "A process of planning a new system by defining components to satisfy requirements",
      "A process limited strictly to marketing an already finished system",
      "A process of firing employees who resist a new system"
    ],
    correctAnswer: 1,
    explanation: "The Systems Design section defines it as a process of planning a new business system, or replacing an existing system, by defining its components or modules to satisfy specific requirements.\n\nCollecting and interpreting facts to identify problems is the definition given for Systems Analysis, not Systems Design.\n\nMarketing a finished system is a business promotion activity, not the definition of Systems Design given in the note.\n\nFiring employees is a human resources action, not part of the Systems Design definition given in the note."
  },
  {
    id: "csc312_ch1_091",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Before planning a new system, a designer needs to first do which of the following?",
    options: [
      "Immediately purchase new hardware",
      "Terminate all existing staff contracts",
      "Understand the old system thoroughly",
      "Publish the system to production"
    ],
    correctAnswer: 2,
    explanation: "The Systems Design section states that before planning, one needs to understand the old system thoroughly and determine how computers can best be used to operate it.\n\nImmediately purchasing hardware is not the first step described; understanding the old system comes first.\n\nTerminating staff contracts is not described anywhere in the Systems Design section as a step in the design process.\n\nPublishing to production is a late implementation step, not the first step described before planning a new system."
  },
  {
    id: "csc312_ch1_092",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as an objective of System Design?",
    options: [
      "Increase the number of unnecessary meetings",
      "Reduce the accuracy of the final product",
      "Remove all documentation for developers",
      "Transform requirements into technical specifications"
    ],
    correctAnswer: 3,
    explanation: "The Objectives of System Design section lists transforming requirements into technical specifications as one of its four objectives, alongside defining architecture, ensuring efficiency, security, and scalability, and providing a clear guide for developers.\n\nIncreasing unnecessary meetings is not listed as an objective of system design anywhere in the note.\n\nReducing accuracy contradicts the objective of ensuring efficiency, security, and scalability.\n\nThe note lists providing a clear guide for developers as an objective, which contradicts removing documentation for developers."
  },
  {
    id: "csc312_ch1_093",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of system design describes what the system should do, independent of technology, covering data flow, inputs, outputs, and processes?",
    options: [
      "Logical Design",
      "Physical Design",
      "Modular Design",
      "Bottom-Up Design"
    ],
    correctAnswer: 0,
    explanation: "The Types of System Design table describes Logical Design as focusing on what the system should do, independent of technology, describing data flow, inputs, outputs, and processes.\n\nPhysical Design is described as focusing on how the system will be implemented, specifying hardware, software, database, and network details, which is technology-dependent.\n\nModular Design is a design approach dividing the system into independent modules, not the what-versus-how distinction described here.\n\nBottom-Up Design is a design approach starting with small components, not the what-versus-how distinction described here."
  },
  {
    id: "csc312_ch1_094",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which type of system design specifies hardware, software, database, and network details for how the system will be implemented?",
    options: [
      "Logical Design",
      "Physical Design",
      "Top-Down Design",
      "Architectural Design"
    ],
    correctAnswer: 1,
    explanation: "The Types of System Design table describes Physical Design as focusing on how the system will be implemented, specifying hardware, software, database, and network details.\n\nLogical Design is described as focusing on what the system should do, independent of technology, not the hardware and network specifics.\n\nTop-Down Design is a design approach starting from the overall system, not the what-versus-how distinction described here.\n\nArchitectural Design is a key activity in system design defining overall system structure, but the specific hardware, software, database, and network specification is attributed to Physical Design in this table."
  },
  {
    id: "csc312_ch1_095",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Physical Design describes what the system should do, independent of technology.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. The Types of System Design table assigns that description to Logical Design; Physical Design instead focuses on how the system will be implemented, specifying hardware, software, database, and network details."
  },
  {
    id: "csc312_ch1_096",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A team is documenting the data flow, inputs, outputs, and processes a proposed system must have, without yet deciding which hardware or database technology to use. Which type of design is this team performing?",
    options: [
      "Physical Design",
      "Database Design",
      "Logical Design",
      "Security Design"
    ],
    correctAnswer: 2,
    explanation: "Logical Design is defined as describing data flow, inputs, outputs, and processes independent of technology, matching a team that has not yet chosen hardware or database technology.\n\nPhysical Design specifically involves choosing hardware, software, database, and network details, which this team has explicitly not yet done.\n\nDatabase Design is a key system design activity concerned with tables, relationships, and keys, a narrower and more technology-specific activity than what is described.\n\nSecurity Design is a key system design activity concerned with authentication, authorization, and encryption, unrelated to documenting data flow independent of technology."
  },
  {
    id: "csc312_ch1_097",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which key activity in system design defines the overall system structure, such as client-server or cloud-based architecture?",
    options: [
      "Database Design",
      "Interface Design",
      "Process Design",
      "Architectural Design"
    ],
    correctAnswer: 3,
    explanation: "The Key Activities in System Design section describes Architectural Design as defining the overall system structure, with client-server architecture and cloud-based systems given as examples.\n\nDatabase Design is described as defining how data is stored and managed, including tables, relationships, and keys, not the overall system structure.\n\nInterface Design is described as the design of user interaction with the system, not the overall structural architecture.\n\nProcess Design is described as defining system workflows and logic using flowcharts and algorithms, not the overall structural architecture."
  },
  {
    id: "csc312_ch1_098",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which key activity in system design defines how data is stored and managed, including tables, relationships, and keys?",
    options: [
      "Database Design",
      "Architectural Design",
      "Process Design",
      "Output and Input Design"
    ],
    correctAnswer: 0,
    explanation: "The Key Activities in System Design section describes Database Design as defining how data is stored and managed, including tables, relationships, and keys, with the Entity-Relationship Diagram as a common tool.\n\nArchitectural Design defines the overall system structure, such as client-server architecture, not the data storage details.\n\nProcess Design defines system workflows and logic using flowcharts and algorithms, not data storage details.\n\nOutput and Input Design covers reports, dashboards, forms, and data entry screens, not the storage of data in tables and relationships."
  },
  {
    id: "csc312_ch1_099",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which key activity in system design focuses on usability, accessibility, and user experience?",
    options: [
      "Security Design",
      "Interface Design",
      "Database Design",
      "Architectural Design"
    ],
    correctAnswer: 1,
    explanation: "The Key Activities in System Design section describes Interface Design as the design of user interaction with the system, focusing on usability, accessibility, and user experience.\n\nSecurity Design focuses on protecting the system from threats through authentication, authorization, and encryption, not usability and user experience.\n\nDatabase Design focuses on how data is stored and managed, not usability and user experience.\n\nArchitectural Design focuses on the overall system structure, not usability and user experience."
  },
  {
    id: "csc312_ch1_100",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which key activity in system design defines system workflows and logic using flowcharts and algorithms?",
    options: [
      "Interface Design",
      "Security Design",
      "Process Design",
      "Output and Input Design"
    ],
    correctAnswer: 2,
    explanation: "The Key Activities in System Design section describes Process Design as defining system workflows and logic, using flowcharts and algorithms.\n\nInterface Design focuses on usability, accessibility, and user experience, not workflow logic expressed through flowcharts and algorithms.\n\nSecurity Design focuses on authentication, authorization, and encryption, not workflow logic.\n\nOutput and Input Design covers reports, dashboards, forms, and data entry screens, not workflow logic expressed as flowcharts and algorithms."
  },
  {
    id: "csc312_ch1_101",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which key activity in system design includes authentication, authorization, and data encryption?",
    options: [
      "Interface Design",
      "Process Design",
      "Database Design",
      "Security Design"
    ],
    correctAnswer: 3,
    explanation: "The Key Activities in System Design section describes Security Design as protecting the system from threats, including authentication, authorization, and data encryption.\n\nInterface Design focuses on usability, accessibility, and user experience, not authentication or encryption.\n\nProcess Design focuses on workflows and logic through flowcharts and algorithms, not authentication or encryption.\n\nDatabase Design focuses on tables, relationships, and keys for data storage, not authentication or encryption specifically."
  },
  {
    id: "csc312_ch1_102",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which design approach starts from the overall system and breaks it into smaller parts?",
    options: [
      "Top-Down Design",
      "Bottom-Up Design",
      "Modular Design",
      "Physical Design"
    ],
    correctAnswer: 0,
    explanation: "The Design Approaches section describes Top-Down Design as starting from the overall system and breaking it into smaller parts.\n\nBottom-Up Design is described as starting with small components and integrating them into a system, the reverse direction.\n\nModular Design is described as dividing the system into independent modules to improve maintainability and scalability, a different concept from starting at the overall system level.\n\nPhysical Design specifies hardware, software, database, and network details, and is a type of design rather than a top-down or bottom-up approach."
  },
  {
    id: "csc312_ch1_103",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which design approach starts with small components and integrates them into a full system?",
    options: [
      "Top-Down Design",
      "Bottom-Up Design",
      "Modular Design",
      "Logical Design"
    ],
    correctAnswer: 1,
    explanation: "The Design Approaches section describes Bottom-Up Design as starting with small components and integrating them into a system.\n\nTop-Down Design is described as starting from the overall system and breaking it into smaller parts, the reverse direction.\n\nModular Design is described as dividing the system into independent modules, a different focus from the direction of integration.\n\nLogical Design describes what the system should do independent of technology, unrelated to the bottom-up integration direction."
  },
  {
    id: "csc312_ch1_104",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which design approach divides a system into independent modules, and is noted for improving maintainability and scalability?",
    options: [
      "Top-Down Design",
      "Bottom-Up Design",
      "Modular Design",
      "Physical Design"
    ],
    correctAnswer: 2,
    explanation: "The Design Approaches section describes Modular Design as dividing a system into independent modules, and notes that it improves maintainability and scalability.\n\nTop-Down Design starts from the overall system and breaks it into smaller parts, but the note attributes maintainability and scalability improvement specifically to Modular Design.\n\nBottom-Up Design starts with small components and integrates them upward, a different concept from dividing into independent modules.\n\nPhysical Design specifies hardware, software, database, and network details, not the modular division of a system."
  },
  {
    id: "csc312_ch1_105",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a tool used in system design?",
    options: [
      "Payroll spreadsheets",
      "Marketing brochures",
      "Employee timesheets",
      "UML Diagrams"
    ],
    correctAnswer: 3,
    explanation: "The Tools Used in System Design section lists Flowcharts, UML Diagrams such as class, sequence, and use case diagrams, and Prototyping tools.\n\nPayroll spreadsheets are a finance and human resources tool, not listed among the system design tools in this section.\n\nMarketing brochures are a promotional item, not listed among the system design tools in this section.\n\nEmployee timesheets are a human resources tool, not listed among the system design tools in this section."
  },
  {
    id: "csc312_ch1_106",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a tool used in system design?",
    options: [
      "Payroll spreadsheets",
      "Employee timesheets",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Tools Used in System Design section names exactly three tool categories: Flowcharts, UML Diagrams, and Prototyping tools. Neither payroll spreadsheets nor employee timesheets appear among them, so this exhaustive list contradicts both, making None of these correct."
  },
  {
    id: "csc312_ch1_107",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which characteristic of good system design is described as being easy to use?",
    options: [
      "Usability",
      "Scalability",
      "Reliability",
      "Efficiency"
    ],
    correctAnswer: 0,
    explanation: "The Characteristics of Good System Design table describes Usability as being easy to use.\n\nScalability is described as handling growth, not being easy to use.\n\nReliability is described as performing consistently, not being easy to use.\n\nEfficiency is described as optimizing resources, not being easy to use."
  },
  {
    id: "csc312_ch1_108",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Difference Between System Analysis and Design table, which side is described as requirement-oriented, identifying problems?",
    options: [
      "System Design",
      "System Analysis",
      "Both are described identically",
      "Neither is described this way"
    ],
    correctAnswer: 1,
    explanation: "The Difference Between System Analysis and Design table describes System Analysis as requirement-oriented, focusing on what is needed and identifying problems.\n\nSystem Design is described as solution-oriented, providing solutions and focusing on how to build it, not as requirement-oriented and problem-identifying.\n\nThe table draws a clear distinction between the two, so they are not described identically.\n\nThe table explicitly assigns requirement-orientation and problem identification to Analysis, so it is incorrect to say neither is described this way."
  },
  {
    id: "csc312_ch1_109",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Difference Between System Analysis and Design table, which side is described as solution-oriented, focusing on how to build the system?",
    options: [
      "System Analysis",
      "Both are described identically",
      "System Design",
      "Neither is described this way"
    ],
    correctAnswer: 2,
    explanation: "The Difference Between System Analysis and Design table describes System Design as solution-oriented, focusing on how to build the system and providing solutions.\n\nSystem Analysis is described as requirement-oriented, focusing on what is needed, not as solution-oriented and focused on how to build.\n\nThe table draws a clear distinction between the two, so they are not described identically.\n\nThe table explicitly assigns solution-orientation to Design, so it is incorrect to say neither is described this way."
  },
  {
    id: "csc312_ch1_110",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "A team is deciding whether a proposed CBT system needs a secure login system, based on interviewing current students about the problems they face. Which activity best matches this?",
    options: [
      "System Design",
      "Physical Design",
      "Process Design",
      "System Analysis"
    ],
    correctAnswer: 3,
    explanation: "System Analysis is defined as requirement-oriented and focused on identifying problems through activities such as interviews, matching a team interviewing students to determine needed requirements.\n\nSystem Design is solution-oriented, focused on how to build the system, which comes after requirements like a secure login need have already been identified through analysis.\n\nPhysical Design specifically involves choosing hardware, software, database, and network details, a later and more technical step than interviewing users about problems.\n\nProcess Design defines workflows and logic using flowcharts and algorithms, a later design step rather than the requirement-identifying interview activity described."
  },
  {
    id: "csc312_ch1_111",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the worked CBT System example, a web-based CBT platform, database, timer-based interface, and auto-grading system are given as which part of the case?",
    options: [
      "The Design Solution",
      "The Analysis Result",
      "The Feasibility Study",
      "The System Boundary"
    ],
    correctAnswer: 0,
    explanation: "The Example: CBT System case lists a web-based CBT platform, a database for student records, a timer-based exam interface, and an auto-grading system under the Design Solution.\n\nThe Analysis Result in this example lists the need for fast exam processing, secure login, and automated scoring, which are the identified needs rather than the built solution.\n\nA feasibility study is not part of this worked example; only an Analysis Result and Design Solution are given.\n\nSystem boundary is not part of this worked example; only an Analysis Result and Design Solution are given."
  },
  {
    id: "csc312_ch1_112",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the worked CBT System example, the need for fast exam processing and secure login is given as part of which section of the case?",
    options: [
      "The Design Solution",
      "The Analysis Result",
      "The Comparison of Methodologies",
      "The Feasibility Study"
    ],
    correctAnswer: 1,
    explanation: "The Example: CBT System case lists the need for fast exam processing, a secure login system, and automated scoring under the Analysis Result.\n\nThe Design Solution in this example lists the web-based platform, database, timer interface, and auto-grading system, which are the built response rather than the identified need.\n\nThe Comparison of Methodologies is a separate table about the six development methodologies, unrelated to this worked example.\n\nA feasibility study is not part of this worked example; only an Analysis Result and Design Solution are given."
  },
  {
    id: "csc312_ch1_113",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed among the three primary roles of the systems analyst?",
    options: [
      "Financier",
      "Recruiter",
      "Consultant",
      "Advertiser"
    ],
    correctAnswer: 2,
    explanation: "The Three Primary Roles of the Systems Analyst section lists Consultant, Supporting expert, and Agent of change as the three primary roles.\n\nFinancier is not one of the three primary roles listed for the systems analyst in this section.\n\nRecruiter is not one of the three primary roles listed for the systems analyst in this section.\n\nAdvertiser is not one of the three primary roles listed for the systems analyst in this section."
  },
  {
    id: "csc312_ch1_114",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "How many primary roles are assigned to the systems analyst in the detailed role description?",
    options: [
      "Two",
      "Five",
      "Eight",
      "Three"
    ],
    correctAnswer: 3,
    explanation: "The Role of the System Analyst (Detailed) section explicitly identifies three primary roles: consultant, supporting expert, and agent of change.\n\nTwo understates the count given in the note, which explicitly lists three primary roles.\n\nFive overstates the count; the detailed section specifically names three primary roles, not five.\n\nEight is the count given elsewhere for the analyst's separate list of main roles and responsibilities, not the three primary roles described in this section."
  },
  {
    id: "csc312_ch1_115",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed among the main roles of the system analyst, involving obtaining user consensus?",
    options: [
      "Prioritizing the requirements",
      "Setting the annual corporate tax filing",
      "Approving employee promotions",
      "Designing the company's advertising slogan"
    ],
    correctAnswer: 0,
    explanation: "The Main Roles of the System Analyst section lists prioritizing the requirements by obtaining user consensus as one of the eight main roles.\n\nSetting the annual tax filing is a finance and legal task, not one of the main roles listed for the system analyst.\n\nApproving employee promotions is a human resources task, not one of the main roles listed for the system analyst.\n\nDesigning an advertising slogan is a marketing task, not one of the main roles listed for the system analyst."
  },
  {
    id: "csc312_ch1_116",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Among the main roles of the system analyst, which of the following describes the analyst suggesting flexible alternative solutions and quantifying cost and benefits?",
    options: [
      "Filing the organization's annual financial statements",
      "Suggesting flexible alternatives and quantifying their cost and benefit",
      "Personally coding the entire final system alone",
      "Handling customer complaints for unrelated products"
    ],
    correctAnswer: 1,
    explanation: "The Main Roles of the System Analyst section explicitly lists suggesting many flexible alternative solutions, picking the best solution, and quantifying cost and benefits as one of the analyst's main roles.\n\nFiling financial statements is an accounting task, not one of the analyst's main roles listed in the note.\n\nPersonally coding the entire system alone is not described as a main role; developers are listed separately as implementing the technical solution.\n\nHandling complaints about unrelated products is outside the scope of any role described for the system analyst in the note."
  },
  {
    id: "csc312_ch1_117",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which category of system analyst skills includes communication, teaching, and facilitating groups?",
    options: [
      "Technical Skills",
      "Analytical Skills",
      "Interpersonal Skills",
      "Management Skills"
    ],
    correctAnswer: 2,
    explanation: "The Skills of System Analyst section lists communication, teaching, and facilitating groups under Interpersonal Skills.\n\nTechnical Skills lists items such as computer knowledge and questioning attitude, not communication and teaching.\n\nAnalytical Skills lists items such as problem identification and sound common sense, not communication and teaching.\n\nManagement Skills lists items such as resource and project management, not communication and teaching."
  },
  {
    id: "csc312_ch1_118",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which category of system analyst skills includes creativity, computer knowledge, and keeping abreast of modern development?",
    options: [
      "Interpersonal Skills",
      "Analytical Skills",
      "Management Skills",
      "Technical Skills"
    ],
    correctAnswer: 3,
    explanation: "The Skills of System Analyst section lists creativity, computer knowledge and software, and keeping abreast of modern development under Technical Skills.\n\nInterpersonal Skills lists items such as communication and teaching, not creativity and computer knowledge.\n\nAnalytical Skills lists items such as problem analysis and sound common sense, not creativity and computer knowledge.\n\nManagement Skills lists items such as resource and project management, not creativity and computer knowledge."
  },
  {
    id: "csc312_ch1_119",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Management Skills, as a category of systems analyst skill, includes resource and project management along with change and risk management.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The Skills of System Analyst section lists resource and project management, and change and risk management, under the Management Skills category."
  },
  {
    id: "csc312_ch1_120",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which category of system analyst skills includes problem identification, problem analysis, and problem solving?",
    options: [
      "Analytical Skills",
      "Interpersonal Skills",
      "Technical Skills",
      "Management Skills"
    ],
    correctAnswer: 0,
    explanation: "The Skills of System Analyst section lists problem identification, problem analysis, and problem solving under Analytical Skills.\n\nInterpersonal Skills lists items such as communication and teaching, not problem identification and analysis.\n\nTechnical Skills lists items such as computer knowledge and creativity, not problem identification and analysis.\n\nManagement Skills lists items such as resource and project management, not problem identification and analysis."
  },
  {
    id: "csc312_ch1_121",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which category of system analyst skills includes resource and project management, and change and risk management?",
    options: [
      "Interpersonal Skills",
      "Management Skills",
      "Technical Skills",
      "Analytical Skills"
    ],
    correctAnswer: 1,
    explanation: "The Skills of System Analyst section lists resource and project management, and change and risk management under Management Skills.\n\nInterpersonal Skills lists items such as communication and teaching, not resource and project management.\n\nTechnical Skills lists items such as computer knowledge and creativity, not resource and project management.\n\nAnalytical Skills lists items such as problem identification and analysis, not resource and project management."
  },
  {
    id: "csc312_ch1_122",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following belongs under the Interpersonal Skills category of a systems analyst?",
    options: [
      "Sound common sense",
      "Resource management",
      "Communication",
      "Computer knowledge and software"
    ],
    correctAnswer: 2,
    explanation: "The Skills of System Analyst section places Communication under Interpersonal Skills, alongside understanding, teaching, and selling.\n\nSound common sense is listed under Analytical Skills, not Interpersonal Skills.\n\nResource management is listed under Management Skills, not Interpersonal Skills.\n\nComputer knowledge and software is listed under Technical Skills, not Interpersonal Skills."
  },
  {
    id: "csc312_ch1_123",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following correctly defines a methodology?",
    options: [
      "A single diagram used only for drawing network topology",
      "A synonym for a system's physical hardware",
      "A term used exclusively in accounting departments",
      "A formalized set of procedures, techniques, and tools guiding development"
    ],
    correctAnswer: 3,
    explanation: "The What is a Methodology section defines it as a formalized set of procedures, techniques, tools, and documentation aids used to guide system development.\n\nA network topology diagram is a single tool, not the broad formalized set of procedures the note defines as a methodology.\n\nPhysical hardware is a tangible component, not the formalized process definition given for a methodology.\n\nThe note does not restrict the term to accounting; methodology is discussed broadly across system development."
  },
  {
    id: "csc312_ch1_124",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a key feature of a SAD methodology?",
    options: [
      "Standardized documentation",
      "Complete absence of any deliverables",
      "No defined steps of any kind",
      "Total avoidance of quality control"
    ],
    correctAnswer: 0,
    explanation: "The Key Features section lists standardized documentation, alongside a step-by-step process, defined deliverables, and emphasis on quality and control, as features of a methodology.\n\nThe note lists defined deliverables as a key feature, which contradicts a complete absence of deliverables.\n\nThe note lists a step-by-step process as a key feature, which contradicts having no defined steps.\n\nThe note lists emphasis on quality and control as a key feature, which contradicts total avoidance of quality control."
  },
  {
    id: "csc312_ch1_125",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a reason SAD methodologies are important?",
    options: [
      "Guarantees zero project cost",
      "Reduces development risks",
      "Removes the need for user satisfaction",
      "Eliminates the need for documentation"
    ],
    correctAnswer: 1,
    explanation: "The Importance of SAD Methodologies section lists reducing development risks as one of five listed benefits, alongside ensuring quality, improving project management, enhancing user satisfaction, and facilitating communication.\n\nThe note does not claim methodologies guarantee zero project cost; no such claim appears in this section.\n\nThe note lists enhancing user satisfaction as a benefit, which contradicts removing the need for user satisfaction.\n\nStandardized documentation is listed as a key feature of methodologies elsewhere, which contradicts eliminating the need for documentation."
  },
  {
    id: "csc312_ch1_126",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system development methodology is described as a linear and sequential approach where each phase must be completed before the next begins?",
    options: [
      "Agile Methodology",
      "Spiral Model",
      "Waterfall Model",
      "RAD"
    ],
    correctAnswer: 2,
    explanation: "The Waterfall Model section describes it as a linear and sequential approach where each phase must be completed before the next.\n\nAgile Methodology is described as an iterative approach focusing on flexibility and continuous feedback, not a strict linear sequence.\n\nSpiral Model combines iterative development with risk analysis, not a strict single-pass linear sequence.\n\nRAD focuses on quick development using reusable components, not a strict linear sequence where each phase must fully complete before the next."
  },
  {
    id: "csc312_ch1_127",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which phase comes first in the Waterfall Model?",
    options: [
      "Testing",
      "Deployment",
      "Maintenance",
      "Requirements Analysis"
    ],
    correctAnswer: 3,
    explanation: "The Waterfall Model Phases list begins with Requirements Analysis, followed by System Design, Implementation, Testing, Deployment, and Maintenance.\n\nTesting is listed as the fourth phase in the Waterfall Model, not the first.\n\nDeployment is listed as the fifth phase in the Waterfall Model, not the first.\n\nMaintenance is listed as the sixth and final phase in the Waterfall Model, not the first."
  },
  {
    id: "csc312_ch1_128",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as an advantage of the Waterfall Model?",
    options: [
      "Well-structured documentation",
      "Very fast error detection at every phase",
      "High flexibility to changing requirements",
      "Minimal need for documentation"
    ],
    correctAnswer: 0,
    explanation: "The Waterfall Model Advantages list includes well-structured documentation, alongside being simple and easy to understand.\n\nThe Waterfall Model's Disadvantages list late detection of errors, which is the opposite of very fast error detection at every phase.\n\nThe Waterfall Model's Disadvantages list being inflexible to changes, which contradicts a claim of high flexibility.\n\nWell-structured documentation is listed as an advantage, which contradicts a claim of minimal documentation."
  },
  {
    id: "csc312_ch1_129",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a disadvantage of the Waterfall Model?",
    options: [
      "Excessive flexibility to changing requirements",
      "Late detection of errors",
      "Too little documentation to be useful",
      "Constant need for customer sprints"
    ],
    correctAnswer: 1,
    explanation: "The Waterfall Model Disadvantages list late detection of errors, alongside being inflexible to changes.\n\nThe Waterfall Model is described as inflexible to changes, which is the opposite of excessive flexibility.\n\nWell-structured documentation is listed as an advantage of the Waterfall Model, not too little documentation.\n\nCustomer sprints are associated with Agile, not listed as a Waterfall disadvantage."
  },
  {
    id: "csc312_ch1_130",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system development methodology is described as an iterative approach focusing on flexibility, collaboration, and customer involvement, using sprints?",
    options: [
      "Waterfall Model",
      "V-Model",
      "Agile Methodology",
      "Prototyping Model"
    ],
    correctAnswer: 2,
    explanation: "The Agile Methodology section describes it as an iterative approach focusing on flexibility, collaboration, and customer involvement, with iterations called sprints as a key concept.\n\nThe Waterfall Model is described as a linear, sequential approach, the opposite of Agile's iterative sprints.\n\nThe V-Model is described as an extension of Waterfall emphasizing testing at each phase, not iterative sprints.\n\nThe Prototyping Model focuses on building a working model to understand requirements, a different mechanism from Agile's sprint-based iterations."
  },
  {
    id: "csc312_ch1_131",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a disadvantage of Agile Methodology?",
    options: [
      "Produces documentation that is too extensive",
      "Cannot deliver functional components early",
      "Is completely inflexible to any change",
      "Requires active user involvement"
    ],
    correctAnswer: 3,
    explanation: "The Agile Methodology Disadvantages list requires active user involvement, alongside less documentation.\n\nThe Agile Disadvantages list less documentation, which is the opposite of producing documentation that is too extensive.\n\nThe Agile Advantages list early delivery of functional components, which contradicts a claim that it cannot deliver components early.\n\nThe Agile Advantages list high flexibility, which contradicts a claim that it is completely inflexible."
  },
  {
    id: "csc312_ch1_132",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system development methodology is described as combining iterative development with risk analysis, and is suitable for large, complex projects?",
    options: [
      "Spiral Model",
      "RAD",
      "Waterfall Model",
      "V-Model"
    ],
    correctAnswer: 0,
    explanation: "The Spiral Model section describes it as combining iterative development with risk analysis, with advantages listing strong focus on risk management and suitability for large, complex projects.\n\nRAD focuses on quick development using reusable components, not specifically on combining iteration with risk analysis for large complex projects.\n\nThe Waterfall Model is a linear sequential approach, not one that combines iteration with dedicated risk analysis.\n\nThe V-Model emphasizes testing at each phase as an extension of Waterfall, not iterative risk analysis for large complex projects."
  },
  {
    id: "csc312_ch1_133",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which phase is listed as part of the Spiral Model, alongside Planning, Engineering, and Evaluation?",
    options: [
      "Sprint Planning",
      "Risk Analysis",
      "Deployment",
      "Coding Sprint"
    ],
    correctAnswer: 1,
    explanation: "The Spiral Model Phases list Planning, Risk Analysis, Engineering, and Evaluation as its four phases.\n\nSprint Planning is an Agile concept, not one of the four Spiral Model phases listed in the note.\n\nDeployment is listed under the Systems Development phases and the Waterfall Model, not among the four Spiral Model phases listed.\n\nCoding Sprint is not a phase name used anywhere in the note; Agile instead uses the term sprint for its iterations generally."
  },
  {
    id: "csc312_ch1_134",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a disadvantage of the Spiral Model?",
    options: [
      "Weak focus on risk management",
      "Unsuitable for large, complex projects",
      "Expensive",
      "Cannot handle iterative development at all"
    ],
    correctAnswer: 2,
    explanation: "The Spiral Model Disadvantages list being expensive and complex to manage.\n\nThe Spiral Model Advantages list a strong focus on risk management, which contradicts a claim of weak risk management focus.\n\nThe Spiral Model Advantages list suitability for large, complex projects, which contradicts a claim that it is unsuitable for them.\n\nThe Spiral Model is explicitly described as combining iterative development with risk analysis, which contradicts a claim that it cannot handle iteration at all."
  },
  {
    id: "csc312_ch1_135",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system development methodology develops a working model to understand requirements, and includes throwaway and evolutionary types?",
    options: [
      "Waterfall Model",
      "V-Model",
      "Spiral Model",
      "Prototyping Model"
    ],
    correctAnswer: 3,
    explanation: "The Prototyping Model section describes it as developing a working model, or prototype, to understand requirements, listing throwaway and evolutionary prototypes as its two types.\n\nThe Waterfall Model is a linear sequential approach and does not use throwaway or evolutionary prototype types.\n\nThe V-Model emphasizes testing at each phase as an extension of Waterfall, and does not use throwaway or evolutionary prototype types.\n\nThe Spiral Model combines iteration with risk analysis through four phases, and does not use throwaway or evolutionary prototype types."
  },
  {
    id: "csc312_ch1_136",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a disadvantage of the Prototyping Model?",
    options: [
      "Can lead to scope creep",
      "Provides no user involvement whatsoever",
      "Cannot clarify requirements early",
      "Never results in a working model"
    ],
    correctAnswer: 0,
    explanation: "The Prototyping Model Disadvantages list scope creep and the possibility of poor design if rushed.\n\nThe Prototyping Model Advantages list better user involvement, which contradicts a claim of no user involvement whatsoever.\n\nThe Prototyping Model Advantages list clarifying requirements early, which contradicts a claim that it cannot clarify requirements early.\n\nThe Prototyping Model is defined as developing a working model, which contradicts a claim that it never results in one."
  },
  {
    id: "csc312_ch1_137",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system development methodology focuses on quick development using reusable components and tools, with short development cycles?",
    options: [
      "Waterfall Model",
      "Rapid Application Development (RAD)",
      "V-Model",
      "Spiral Model"
    ],
    correctAnswer: 1,
    explanation: "The Rapid Application Development section describes it as focusing on quick development using reusable components and tools, with short development cycles listed as a key feature.\n\nThe Waterfall Model is a linear sequential approach, not one built around short cycles and reusable components.\n\nThe V-Model emphasizes testing paired with each development phase, not quick development through reusable components.\n\nThe Spiral Model combines iteration with risk analysis across four phases, a different mechanism from RAD's short, component-based cycles."
  },
  {
    id: "csc312_ch1_138",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Rapid Application Development (RAD) focuses on quick development using reusable components and tools.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. The Rapid Application Development section defines RAD as focusing on quick development using reusable components and tools, with short development cycles as a key feature."
  },
  {
    id: "csc312_ch1_139",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a disadvantage of Rapid Application Development (RAD)?",
    options: [
      "Always takes longer than the Waterfall Model",
      "Cannot involve users in development",
      "Requires skilled developers",
      "Has no defined features at all"
    ],
    correctAnswer: 2,
    explanation: "The RAD Disadvantages list requiring skilled developers and being unsuitable for large systems.\n\nThe RAD Advantages list faster delivery and reduced development time, which contradicts a claim that it always takes longer than Waterfall.\n\nThe RAD Features list user involvement as a defining characteristic, which contradicts a claim that it cannot involve users.\n\nThe RAD Features section explicitly lists short development cycles, user involvement, and component-based construction, which contradicts a claim of no defined features."
  },
  {
    id: "csc312_ch1_140",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which system development methodology is described as an extension of the Waterfall model that emphasizes testing at each phase?",
    options: [
      "Agile Methodology",
      "RAD",
      "Prototyping Model",
      "V-Model"
    ],
    correctAnswer: 3,
    explanation: "The V-Model section describes it as an extension of the Waterfall model emphasizing testing at each phase, with the key idea that each development phase has a corresponding testing phase.\n\nAgile Methodology is an iterative approach built around sprints and continuous feedback, not an extension of Waterfall built around paired testing phases.\n\nRAD focuses on quick development using reusable components, not paired testing phases extending Waterfall.\n\nThe Prototyping Model focuses on building a working model to clarify requirements, not paired testing phases extending Waterfall."
  },
  {
    id: "csc312_ch1_141",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a disadvantage of the V-Model?",
    options: [
      "Rigid structure",
      "Poor quality assurance",
      "Late testing only after full deployment",
      "No relationship to the Waterfall model"
    ],
    correctAnswer: 0,
    explanation: "The V-Model Disadvantages list a rigid structure and being not flexible.\n\nThe V-Model Advantages list improved quality assurance, which contradicts a claim of poor quality assurance.\n\nThe V-Model Advantages list early testing, which contradicts a claim of late testing only after full deployment.\n\nThe V-Model is explicitly described as an extension of the Waterfall model, which contradicts a claim of no relationship to it."
  },
  {
    id: "csc312_ch1_142",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Comparison of Methodologies table, which methodology is rated as having High flexibility, Low risk handling, and Very Fast speed?",
    options: [
      "Waterfall",
      "RAD",
      "V-Model",
      "Spiral"
    ],
    correctAnswer: 1,
    explanation: "The Comparison of Methodologies table rates RAD as High flexibility, Low risk handling, Very Fast speed, and High user involvement.\n\nWaterfall is rated Low flexibility, Low risk handling, and Slow speed, not High flexibility and Very Fast speed.\n\nThe V-Model is rated Low flexibility and Slow speed, not High flexibility and Very Fast speed.\n\nSpiral is rated Medium flexibility, High risk handling, and Medium speed, not High flexibility, Low risk handling, and Very Fast speed."
  },
  {
    id: "csc312_ch1_143",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Comparison of Methodologies table, which methodology is rated as having Low flexibility, Low risk handling, and Slow speed, with Low user involvement?",
    options: [
      "Agile",
      "Prototyping",
      "Waterfall",
      "RAD"
    ],
    correctAnswer: 2,
    explanation: "The Comparison of Methodologies table rates Waterfall as Low flexibility, Low risk handling, Slow speed, and Low user involvement.\n\nAgile is rated High flexibility, Medium risk handling, Fast speed, and High user involvement, not the low ratings given to Waterfall.\n\nPrototyping is rated High flexibility, Medium risk handling, Medium speed, and High user involvement, not the low ratings given to Waterfall.\n\nRAD is rated High flexibility, Low risk handling, and Very Fast speed with High user involvement, not the overall low ratings given to Waterfall."
  },
  {
    id: "csc312_ch1_144",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "In the Comparison of Methodologies table, which methodology is rated with High risk handling and Medium flexibility?",
    options: [
      "V-Model",
      "RAD",
      "Waterfall",
      "Spiral"
    ],
    correctAnswer: 3,
    explanation: "The Comparison of Methodologies table rates Spiral as Medium flexibility, High risk handling, Medium speed, and Medium user involvement.\n\nThe V-Model is rated Low flexibility and Medium risk handling, not High risk handling with Medium flexibility.\n\nRAD is rated High flexibility and Low risk handling, the opposite pattern from Spiral's Medium flexibility and High risk handling.\n\nWaterfall is rated Low flexibility and Low risk handling, not the Medium flexibility and High risk handling rating given to Spiral."
  },
  {
    id: "csc312_ch1_145",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a factor influencing the choice of a system development methodology?",
    options: [
      "Team expertise",
      "The founder's astrological sign",
      "The number of holidays in the fiscal year",
      "The color of the company logo"
    ],
    correctAnswer: 0,
    explanation: "The Choosing the Right Methodology section lists team expertise, alongside project size and complexity, budget and time constraints, user involvement level, and risk level, as factors influencing methodology choice.\n\nThe founder's astrological sign is not listed anywhere in the note as a factor influencing methodology choice.\n\nThe number of holidays in the fiscal year is not listed anywhere in the note as a factor influencing methodology choice.\n\nThe color of the company logo is not listed anywhere in the note as a factor influencing methodology choice."
  },
  {
    id: "csc312_ch1_146",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a modern trend in system analysis and design?",
    options: [
      "A permanent return to only paper-based manual systems",
      "AI-assisted system design",
      "Complete elimination of user-centered design",
      "Abandonment of cloud-based development"
    ],
    correctAnswer: 1,
    explanation: "The Modern Trends in SAD section lists AI-assisted system design, alongside Agile and DevOps integration, cloud-based development, and user-centered design approaches.\n\nThe note lists cloud-based development as a modern trend, which contradicts a permanent return to only paper-based manual systems.\n\nThe note lists user-centered design approaches as a modern trend, which contradicts the complete elimination of user-centered design.\n\nThe note lists cloud-based development as a modern trend, which contradicts abandoning cloud-based development."
  },
  {
    id: "csc312_ch1_147",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Within the System Development Life Cycle, System Analysis and Design (SAD) as a discipline focuses specifically on which phases?",
    options: [
      "Only the Planning phase",
      "Only the Maintenance phase",
      "The Analysis and Design phases",
      "All five phases equally, with no particular focus"
    ],
    correctAnswer: 2,
    explanation: "The closing Summary: CBT Exam Focus Points section states that SAD focuses on Phase 2, Analysis, and Phase 3, Design, of the SDLC.\n\nThe summary specifically names Analysis and Design as the focus, not Planning alone.\n\nThe summary specifically names Analysis and Design as the focus, not Maintenance alone.\n\nThe summary explicitly names two specific phases as the focus, which contradicts a claim of equal focus across all five phases."
  },
  {
    id: "csc312_ch1_148",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "No single system development methodology is considered perfect.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Summary: CBT Exam Focus Points section and the Conclusion on Methodologies both state that no single methodology is perfect, and that the choice depends on project requirements and environment."
  },
  {
    id: "csc312_ch1_149",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following methodologies is explicitly named in the closing summary's list of major methodologies to know?",
    options: [
      "Agile",
      "Extreme Programming",
      "Lean Startup",
      "Scrum-only Model"
    ],
    correctAnswer: 0,
    explanation: "The Summary: CBT Exam Focus Points section explicitly lists Waterfall, Agile, Spiral, Prototyping, RAD, and V-Model as the methodologies to know.\n\nExtreme Programming is not named anywhere in the note's list of the six major methodologies.\n\nLean Startup is not named anywhere in the note's list of the six major methodologies.\n\nA Scrum-only Model is not named anywhere in the note; sprints are mentioned only as a concept within Agile."
  },
  {
    id: "csc312_ch1_150",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following methodologies is rated with High flexibility and High user involvement in the Comparison of Methodologies table?",
    options: [
      "Agile",
      "Prototyping",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Comparison of Methodologies table rates both Agile and Prototyping as High flexibility with High user involvement, so both named methodologies independently satisfy the claim, making All of these correct. Waterfall and the V-Model are rated Low flexibility with Low user involvement, showing that not every methodology fits this pattern, but Agile and Prototyping both do."
  },
  {
    id: "csc312_ch1_151",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a phase explicitly listed for the Waterfall Model?",
    options: [
      "Sprint retrospective",
      "Risk Analysis",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Waterfall Model Phases are explicitly listed as Requirements Analysis, System Design, Implementation, Testing, Deployment, and Maintenance. A sprint retrospective is an Agile concept and Risk Analysis is a Spiral Model phase; since the note gives an exhaustive phase list for Waterfall that excludes both terms, neither belongs to it, making None of these correct."
  },
  {
    id: "csc312_ch1_152",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a type of feasibility study?",
    options: [
      "Technical feasibility",
      "Astrological feasibility",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Feasibility Study table lists exactly four types: Technical, Economic, Operational, and Legal feasibility. Technical feasibility is explicitly one of them, while astrological feasibility does not appear anywhere in the note and is contradicted by the table's exhaustive list of four named types, so Technical feasibility alone is correct."
  },
  {
    id: "csc312_ch1_153",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is one of the elements of a system?",
    options: [
      "Environment",
      "Advertising budget",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Elements of a System section lists Environment, alongside Input and Output, Processor, Control, Feedback, and Boundaries and Interface, as an element of a system. An advertising budget does not appear among these elements anywhere in the note, so only Environment is correct."
  },
  {
    id: "csc312_ch1_154",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a skill category of a systems analyst?",
    options: [
      "Culinary Skills",
      "Management Skills",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Skills of System Analyst section names exactly four categories: Interpersonal, Technical, Analytical, and Management Skills. Management Skills is explicitly one of them, while culinary skills do not appear anywhere among these four named categories, so Management Skills alone is correct."
  },
  {
    id: "csc312_ch1_155",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is a key activity in system design?",
    options: [
      "Security Design",
      "Database Design",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Key Activities in System Design section lists exactly six activities: Architectural, Database, Interface, Process, Security, and Output and Input Design. Both Security Design and Database Design are explicitly named among these six, so All of these is correct."
  },
  {
    id: "csc312_ch1_156",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is listed as a benefit of using Structured Analysis or Object-Oriented Analysis techniques in system analysis?",
    options: [
      "Modeling systems using processes and data flow, or using objects and classes",
      "Eliminating every requirement gathered from users",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Tools and Techniques in System Analysis section describes Structured Analysis as focusing on processes and data flow using DFDs and flowcharts, and Object-Oriented Analysis as focusing on objects and classes using UML diagrams, matching the claim about modeling with processes and data flow, or objects and classes. Eliminating requirements gathered from users is not associated with either technique and is contradicted by the emphasis on requirements gathering as a separate key analysis activity, so the modeling claim alone is correct."
  },
  {
    id: "csc312_ch1_157",
    course: "CSC 312",
    chapter: "Chapter 1",
    text: "Which of the following is an advantage shared by both the Prototyping Model and Rapid Application Development (RAD)?",
    options: [
      "Complete avoidance of any risk",
      "Better or active user involvement",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Prototyping Model Advantages list better user involvement, and the RAD Features and Advantages list user involvement and faster delivery, so both methodologies are tied to strong user involvement, making that claim correct. Complete avoidance of risk is not claimed for either methodology; RAD's disadvantages note it requires skilled developers and is unsuitable for large systems, which is itself a risk, so the user involvement claim alone is correct."
  }
];

export default csc312Lecture1And2Questions;
