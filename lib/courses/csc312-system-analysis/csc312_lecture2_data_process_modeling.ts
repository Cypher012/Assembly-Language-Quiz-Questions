import { QuestionV2 } from "@/lib/quiz-types";

const csc312Lecture2DataProcessModelingQuestions: QuestionV2[] = [
  {
    id: "csc312_ch3_001",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data and Process Modeling and Data Design are described as together bridging which two things?",
    options: [
      "Analysis and design",
      "Testing and deployment",
      "Marketing and sales",
      "Hardware and firmware"
    ],
    correctAnswer: 0,
    explanation: "Data and Process Modeling and Data Design are introduced as together bridging analysis and design, showing how data moves and then how it is structured and stored.\n\nTesting and deployment are separate SDLC phases, not the two areas these modeling and design techniques are described as bridging.\n\nMarketing and sales are business functions unrelated to the analysis-design bridge described here.\n\nHardware and firmware are unrelated to the analysis-design bridge described here."
  },
  {
    id: "csc312_ch3_002",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the two main areas covers data flow diagrams, context diagrams, Diagram 0, and Structured English?",
    options: [
      "Data and Process Modeling",
      "Data Design",
      "Data Coding",
      "Data Control"
    ],
    correctAnswer: 0,
    explanation: "Data and Process Modeling covers logical versus physical models, DFDs and their symbols, context diagrams, Diagram 0, leveling and balancing, and Structured English, showing how data moves through the system.\n\nData Design instead covers DBMS components, key fields, referential integrity, entity-relationship diagrams, and normalization, not DFDs or Structured English.\n\nData Coding is a narrower topic about encoding and compression schemes, not DFDs.\n\nData Control is a narrower topic about access permissions and audit trails, not DFDs."
  },
  {
    id: "csc312_ch3_003",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the two main areas covers DBMS components, key fields, referential integrity, and relationship cardinality?",
    options: [
      "Data Design",
      "Data and Process Modeling",
      "Structured English",
      "Diagram 0"
    ],
    correctAnswer: 0,
    explanation: "Data Design covers data design concepts, DBMS components, key fields and referential integrity, entity-relationship diagrams, relationship types and cardinality, and normalization, showing how data is structured and stored.\n\nData and Process Modeling instead covers DFDs, context diagrams, and process description tools, not DBMS components or cardinality.\n\nStructured English is one specific process description tool within Data and Process Modeling, not the name of the broader area covering DBMS components.\n\nDiagram 0 is one specific DFD artifact within Data and Process Modeling, not the broader area covering DBMS components."
  },
  {
    id: "csc312_ch3_004",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A logical model is best described as which of the following?",
    options: [
      "A description of WHAT a system does, independent of any physical implementation",
      "A description of HOW a system will be implemented, using specific hardware and software",
      "A list of every employee's salary in a company",
      "A diagram showing only the building layout of an office"
    ],
    correctAnswer: 0,
    explanation: "A logical model describes WHAT a system does, the underlying business processes and data, independent of any physical implementation, and is technology-independent.\n\nDescribing HOW a system will be implemented, using specific hardware and software, instead describes a physical model, not a logical one.\n\nA list of employee salaries is a piece of business data, not the definition of a logical model.\n\nA building layout diagram is a physical facilities concern, unrelated to the logical model's focus on business processes and data."
  },
  {
    id: "csc312_ch3_005",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A physical model is best described as which of the following?",
    options: [
      "A description of HOW a system will be implemented, using specific hardware, software, files, and procedures",
      "A description of WHAT a system does, independent of any implementation",
      "A model that is always created before the logical model",
      "A model used only for marketing presentations"
    ],
    correctAnswer: 0,
    explanation: "A physical model describes HOW a system will be implemented, using specific hardware, software, files, and procedures, and is technology-specific.\n\nDescribing WHAT a system does, independent of any implementation, instead describes a logical model, not a physical one.\n\nThe physical model is described as coming after the logical model, not before it, since the logical model is built first.\n\nA marketing presentation tool is unrelated to the physical model's focus on actual implementation components."
  },
  {
    id: "csc312_ch3_006",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which example is given to illustrate a logical model?",
    options: [
      "Verify customer credit",
      "Call the CreditCheck() API on Server B",
      "Install a new hard drive in Server B",
      "Print a physical invoice on a laser printer"
    ],
    correctAnswer: 0,
    explanation: "'Verify customer credit' is given as the example of a logical model, describing WHAT the system does without naming any specific technology.\n\n'Call the CreditCheck() API on Server B' is instead given as the example of a physical model, naming a specific technical implementation.\n\nInstalling a hard drive is a hardware task, not the logical model example given.\n\nPrinting on a specific printer names physical implementation detail, closer to a physical model than the logical example given."
  },
  {
    id: "csc312_ch3_007",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which example is given to illustrate a physical model?",
    options: [
      "Call the CreditCheck() API on Server B",
      "Verify customer credit",
      "Understand what customers need",
      "Increase overall business productivity"
    ],
    correctAnswer: 0,
    explanation: "'Call the CreditCheck() API on Server B' is given as the example of a physical model, naming a specific technology and server.\n\n'Verify customer credit' is instead given as the example of a logical model, describing what the system does without naming technology.\n\nUnderstanding what customers need is a general business goal, not the physical model example given.\n\nIncreasing business productivity is a general business goal, not the physical model example given."
  },
  {
    id: "csc312_ch3_008",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Why do analysts build the logical model first, before the physical model?",
    options: [
      "So the system is designed around business needs, not locked into one technology",
      "Because physical models are always cheaper to build",
      "Because the logical model requires no analysis at all",
      "Because regulations require logical models to be built last"
    ],
    correctAnswer: 0,
    explanation: "Analysts build the logical model first so the system is designed around business needs, not locked into one technology, with the physical model emerging later during systems design.\n\nCost is not the stated reason for building the logical model first.\n\nThe logical model still requires analysis of business processes and data, not an absence of analysis.\n\nNo regulation is mentioned as the reason for this ordering; the reason given is keeping the design focused on business needs first."
  },
  {
    id: "csc312_ch3_009",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which DFD symbol is shaped as an oval or ellipse, and transforms incoming data flows into outgoing data flows?",
    options: [
      "Process",
      "Data Flow",
      "Data Store",
      "Entity"
    ],
    correctAnswer: 0,
    explanation: "The Process symbol, shaped as an oval or ellipse, transforms incoming data flows into outgoing data flows, representing an activity or function that changes data.\n\nData Flow instead is shaped as an arrow, showing data moving between processes, stores, or entities, not the transformation itself.\n\nData Store instead is shaped as two horizontal lines, representing a repository where data is held, not a transformation.\n\nEntity instead is shaped as a rectangle, representing a source or destination outside the system boundary, not a transformation."
  },
  {
    id: "csc312_ch3_010",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which DFD symbol is shaped as an arrow, showing data moving between processes, stores, or entities?",
    options: [
      "Data Flow",
      "Process",
      "Data Store",
      "Entity"
    ],
    correctAnswer: 0,
    explanation: "The Data Flow symbol, shaped as an arrow, shows data moving between processes, stores, or entities, and is labeled to show what data is being transferred.\n\nProcess instead is shaped as an oval, transforming data rather than showing its movement.\n\nData Store instead is shaped as two horizontal lines, representing data at rest, not data in motion.\n\nEntity instead is shaped as a rectangle, representing a source or destination, not the movement between them."
  },
  {
    id: "csc312_ch3_011",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which DFD symbol is shaped as two horizontal lines, like a file folder, and represents a repository where data is held for later use?",
    options: [
      "Data Store",
      "Process",
      "Data Flow",
      "Entity"
    ],
    correctAnswer: 0,
    explanation: "The Data Store symbol, shaped as two horizontal lines like a file folder, represents a repository where data is held for later use, such as a file or database table.\n\nProcess instead is shaped as an oval, representing a transforming activity, not a resting repository.\n\nData Flow instead is shaped as an arrow, representing movement, not a place data is held.\n\nEntity instead is shaped as a rectangle, representing an external source or destination, not an internal repository."
  },
  {
    id: "csc312_ch3_012",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which DFD symbol is shaped as a rectangle, and represents a source or destination of data outside the system boundary?",
    options: [
      "Entity",
      "Process",
      "Data Flow",
      "Data Store"
    ],
    correctAnswer: 0,
    explanation: "The Entity symbol, shaped as a rectangle, represents a source or destination of data outside the system boundary, such as an external person, department, or system.\n\nProcess instead is shaped as an oval, representing an internal activity, not an external source or destination.\n\nData Flow instead is shaped as an arrow, representing movement of data, not an external party.\n\nData Store instead is shaped as two horizontal lines, representing an internal repository, not an external source or destination."
  },
  {
    id: "csc312_ch3_013",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the four standard DFD symbols in Gane & Sarson notation?",
    options: [
      "Process",
      "Entity",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The four standard DFD symbols in Gane & Sarson notation are Process, Data Flow, Data Store, and Entity, so both Process and Entity are correct, making All of these the right choice."
  },
  {
    id: "csc312_ch3_014",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A context diagram represents the entire system as which of the following?",
    options: [
      "A single process, Process 0, showing every entity that sends or receives data",
      "A collection of every possible lower-level DFD combined into one diagram",
      "A table listing every field in every database table",
      "A written report with no diagrams at all"
    ],
    correctAnswer: 0,
    explanation: "A context diagram represents the entire system as a single process, Process 0, and shows every entity that sends data into or receives data out of the system, providing the highest-level overview.\n\nCombining every lower-level DFD into one diagram overstates a context diagram's purpose, which specifically collapses the system into one single process, not many.\n\nA table of every database field describes a data dictionary or schema, not a context diagram.\n\nA context diagram is specifically a diagram, not a written report with no diagrams."
  },
  {
    id: "csc312_ch3_015",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Order Entry System context diagram example, which entity sends Order Data into the system?",
    options: [
      "Customer",
      "Credit Bureau",
      "Warehouse",
      "Accounting"
    ],
    correctAnswer: 0,
    explanation: "In the Order Entry System context diagram, the Customer entity sends Order Data into the system.\n\nCredit Bureau instead exchanges a Credit Status Request and Reply with the system, not Order Data.\n\nWarehouse instead receives a Pick List from the system, not Order Data.\n\nAccounting instead receives Invoice Data from the system, not Order Data."
  },
  {
    id: "csc312_ch3_016",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Order Entry System context diagram example, which entity receives a Pick List from the system?",
    options: [
      "Warehouse",
      "Customer",
      "Credit Bureau",
      "Accounting"
    ],
    correctAnswer: 0,
    explanation: "In the Order Entry System context diagram, the Warehouse entity receives a Pick List from the Order Entry System.\n\nCustomer instead sends Order Data into the system, not receiving a Pick List.\n\nCredit Bureau instead exchanges a Credit Status Request and Reply, not a Pick List.\n\nAccounting instead receives Invoice Data, not a Pick List."
  },
  {
    id: "csc312_ch3_017",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Order Entry System context diagram example, which entity receives Invoice Data from the system?",
    options: [
      "Accounting",
      "Customer",
      "Warehouse",
      "Credit Bureau"
    ],
    correctAnswer: 0,
    explanation: "In the Order Entry System context diagram, the Accounting entity receives Invoice Data from the Order Entry System.\n\nCustomer instead sends Order Data into the system, not receiving Invoice Data.\n\nWarehouse instead receives a Pick List, not Invoice Data.\n\nCredit Bureau instead exchanges a Credit Status Request and Reply, not Invoice Data."
  },
  {
    id: "csc312_ch3_018",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In a context diagram, what does the system boundary define?",
    options: [
      "What is IN the system, Process 0, versus what is OUT, the entities",
      "The physical walls of the building housing the servers",
      "The maximum number of employees allowed to use the system",
      "The exact programming language the system must be written in"
    ],
    correctAnswer: 0,
    explanation: "The system boundary defines what is IN the system, represented as Process 0, and what is OUT, represented by the surrounding entities.\n\nA physical building wall is a facilities concept, not what the system boundary in a context diagram defines.\n\nAn employee headcount limit is not what the system boundary defines.\n\nA required programming language is a physical implementation detail, not what the system boundary in a context diagram defines."
  },
  {
    id: "csc312_ch3_019",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Diagram 0 is best described as doing which of the following to the context diagram's Process 0?",
    options: [
      "Exploding it into its main numbered sub-processes and introducing needed data stores",
      "Deleting it entirely and starting over with a blank page",
      "Merging it with every entity into a single combined box",
      "Converting it directly into working program code"
    ],
    correctAnswer: 0,
    explanation: "Diagram 0 explodes Process 0 into its main sub-processes, numbered 1, 2, 3, and so on, and introduces the data stores needed to support them, providing the first level of detail after the context diagram.\n\nDeleting Process 0 entirely contradicts the described exploding process, which builds on Process 0 rather than discarding it.\n\nMerging Process 0 with every entity into one box contradicts the system boundary distinction context diagrams establish.\n\nConverting directly into code skips the leveling process described for reaching primitive processes first."
  },
  {
    id: "csc312_ch3_020",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Diagram 0 example for the Order Entry System, which sub-process is associated with Data Store D1, Customers?",
    options: [
      "Check Customer Status",
      "Verify Credit",
      "Enter Order Data",
      "Update Inventory"
    ],
    correctAnswer: 0,
    explanation: "In the Diagram 0 example, Check Customer Status is associated with Data Store D1, Customers, as the first sub-process in the sequence.\n\nVerify Credit instead is associated with Data Store D2, Credit Log, not D1.\n\nEnter Order Data instead is associated with Data Store D3, Orders, not D1.\n\nUpdate Inventory instead is associated with Data Store D4, Inventory, not D1."
  },
  {
    id: "csc312_ch3_021",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Diagram 0 example for the Order Entry System, which sub-process is associated with Data Store D2, Credit Log?",
    options: [
      "Verify Credit",
      "Check Customer Status",
      "Enter Order Data",
      "Update Inventory"
    ],
    correctAnswer: 0,
    explanation: "In the Diagram 0 example, Verify Credit is associated with Data Store D2, Credit Log, as the second sub-process in the sequence.\n\nCheck Customer Status instead is associated with Data Store D1, Customers, not D2.\n\nEnter Order Data instead is associated with Data Store D3, Orders, not D2.\n\nUpdate Inventory instead is associated with Data Store D4, Inventory, not D2."
  },
  {
    id: "csc312_ch3_022",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Diagram 0 example for the Order Entry System, which sub-process comes fourth in the sequence, updating Data Store D4?",
    options: [
      "Update Inventory",
      "Check Customer Status",
      "Verify Credit",
      "Enter Order Data"
    ],
    correctAnswer: 0,
    explanation: "In the Diagram 0 example, Update Inventory is the fourth sub-process, associated with Data Store D4, Inventory, completing the sequence.\n\nCheck Customer Status instead is the first sub-process, associated with D1, not the fourth.\n\nVerify Credit instead is the second sub-process, associated with D2, not the fourth.\n\nEnter Order Data instead is the third sub-process, associated with D3, not the fourth."
  },
  {
    id: "csc312_ch3_023",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Leveling, in the context of DFDs, is best described as which of the following?",
    options: [
      "Breaking a process into greater detail by creating lower-level diagrams",
      "Ensuring inputs and outputs of a child diagram match its parent process exactly",
      "Deleting all lower-level diagrams once a system is complete",
      "Renaming every process to use the same generic label"
    ],
    correctAnswer: 0,
    explanation: "Leveling is breaking a process into greater detail by creating lower-level diagrams, a functional decomposition where a child diagram inherits a number from its parent process.\n\nEnsuring inputs and outputs of a child diagram match its parent exactly instead describes balancing, a related but distinct concept from leveling.\n\nDeleting lower-level diagrams once complete is not what leveling refers to; leveling is about creating those diagrams, not removing them.\n\nRenaming processes to a generic label is not what leveling refers to."
  },
  {
    id: "csc312_ch3_024",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "If Process 3 is exploded further through leveling, what numbering would its child sub-processes typically receive?",
    options: [
      "3.1, 3.2, 3.3, and so on",
      "1, 2, 3, restarting from the very beginning",
      "A, B, C, using letters instead of numbers",
      "100, 200, 300, jumping by hundreds"
    ],
    correctAnswer: 0,
    explanation: "When Process 3 is exploded further, its child sub-processes inherit its number, becoming 3.1, 3.2, 3.3, and so on.\n\nRestarting numbering from 1, 2, 3 would lose the connection to the parent Process 3, contradicting the described inheritance of the parent's number.\n\nUsing letters instead of numbers is not the numbering scheme described for leveling DFDs.\n\nJumping by hundreds is not the numbering scheme described for leveling DFDs."
  },
  {
    id: "csc312_ch3_025",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Balancing, in the context of DFDs, requires which of the following?",
    options: [
      "The inputs and outputs of a child diagram must exactly match those of its parent process",
      "Every diagram must contain exactly the same number of processes",
      "Every data store must be renamed after each level of explosion",
      "Every entity must appear in every single lower-level diagram"
    ],
    correctAnswer: 0,
    explanation: "Balancing requires that the inputs and outputs of a child diagram exactly match the inputs and outputs of its parent process, so nothing is lost or invented when a process is exploded.\n\nRequiring the same number of processes at every level is not what balancing refers to; the number of sub-processes can vary.\n\nRenaming data stores after each explosion is not a rule described for balancing.\n\nRequiring every entity to appear in every lower-level diagram is not a rule described for balancing."
  },
  {
    id: "csc312_ch3_026",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A primitive process is best described as which of the following?",
    options: [
      "A process not exploded further, detailed enough to describe directly",
      "The very first process drawn in any context diagram",
      "A process that always represents an external entity",
      "A process that must always be numbered zero"
    ],
    correctAnswer: 0,
    explanation: "A primitive process is a process not exploded further, the lowest level shown, detailed enough for a programmer to code directly.\n\nBeing the very first process in a context diagram describes Process 0 specifically, not the general concept of a primitive process, which can occur at any branch of the decomposition.\n\nRepresenting an external entity describes the Entity symbol, not a primitive process, which is an internal activity.\n\nBeing numbered zero specifically describes Process 0 in the context diagram, not the general concept of a primitive process."
  },
  {
    id: "csc312_ch3_027",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a characteristic of a primitive process?",
    options: [
      "It is described in detail and not decomposed further",
      "It must always contain at least ten sub-processes",
      "It can only ever appear in a context diagram, never Diagram 0",
      "It represents an external entity rather than an internal activity"
    ],
    correctAnswer: 0,
    explanation: "Being described in detail and not decomposed further is listed as a characteristic of a primitive process, since it is detailed enough for a programmer to code directly.\n\nRequiring at least ten sub-processes contradicts the definition of a primitive process, which by definition has no further sub-processes at all.\n\nA primitive process can appear at any level of a leveled DFD, not restricted only to the context diagram.\n\nRepresenting an external entity describes the separate Entity symbol, not a primitive process, which represents an internal activity."
  },
  {
    id: "csc312_ch3_028",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Following the best practice for building DFDs top-down, which diagram is drawn first?",
    options: [
      "The context diagram, the entire system as one process",
      "The most detailed exploded diagram at the lowest level",
      "A primitive process diagram with no data stores",
      "A relational database schema diagram"
    ],
    correctAnswer: 0,
    explanation: "Good DFDs are built top-down, starting with the context diagram, showing the entire system as a single process, before moving to Diagram 0 and exploded diagrams.\n\nStarting with the most detailed exploded diagram reverses the described top-down order, which begins broad and narrows down, not the other way around.\n\nA primitive process diagram is reached only at the end of the leveling process, not drawn first.\n\nA relational database schema is part of Data Design, not the first step in the top-down DFD building process."
  },
  {
    id: "csc312_ch3_029",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "What is the key rule given for how deep DFD explosion should go?",
    options: [
      "Only explode when necessary for understanding; don't create unnecessary levels",
      "Every process must be exploded exactly five times, no more and no less",
      "Explosion should continue until every process has exactly one sub-process",
      "Explosion should never happen more than once for any system"
    ],
    correctAnswer: 0,
    explanation: "The key rule given is to only explode when necessary for understanding, and not to create unnecessary levels, continuing only as deep as needed for clarity.\n\nRequiring exactly five explosions for every process is not the rule given; depth is instead determined by clarity, not a fixed count.\n\nRequiring exactly one sub-process per exploded process is not the rule given.\n\nLimiting explosion to happen only once contradicts the described leveling process, which allows repeated explosion as needed for clarity."
  },
  {
    id: "csc312_ch3_030",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "The inputs and outputs of a child diagram must exactly match the inputs and outputs of its parent process, and this rule is called balancing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. Balancing is defined as the requirement that the inputs and outputs of a child diagram exactly match the inputs and outputs of its parent process."
  },
  {
    id: "csc312_ch3_031",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Structured English is best described as which of the following?",
    options: [
      "A limited set of action verbs and sentence structures, like simplified pseudocode, used to describe process logic",
      "A programming language used to build production-ready applications directly",
      "A form of marketing copy used to advertise a finished system",
      "A style of English used only in legal contracts"
    ],
    correctAnswer: 0,
    explanation: "Structured English uses a limited set of action verbs and sentence structures, like simplified pseudocode, to describe a process's logic clearly to both users and programmers.\n\nA production-ready programming language overstates Structured English's role; it bridges the gap toward code but is not itself a language used to build applications directly.\n\nMarketing copy is unrelated to Structured English's purpose of describing process logic.\n\nLegal contract language is unrelated to Structured English's purpose of describing process logic."
  },
  {
    id: "csc312_ch3_032",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a standard construct used in Structured English?",
    options: [
      "Selection, using IF/THEN/ELSE",
      "A musical rhythm pattern",
      "A color palette for a user interface",
      "A currency exchange rate table"
    ],
    correctAnswer: 0,
    explanation: "Selection, using IF/THEN/ELSE, is listed as one of the standard constructs in Structured English, alongside sequence and iteration using REPEAT/WHILE.\n\nA musical rhythm pattern is not one of the listed Structured English constructs.\n\nA color palette is a UI/UX design detail, not one of the listed Structured English constructs.\n\nA currency exchange rate table is business data, not one of the listed Structured English constructs."
  },
  {
    id: "csc312_ch3_033",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Structured English example for Verify Credit, what happens if the order amount exceeds the credit limit?",
    options: [
      "Credit status is set to HOLD, and a notice is sent to the sales rep",
      "Credit status is set to APPROVED, and the order is written to the Orders store",
      "The order is automatically cancelled and deleted",
      "The customer's account is permanently closed"
    ],
    correctAnswer: 0,
    explanation: "In the Verify Credit example, if the order amount exceeds the credit limit, the credit status is set to HOLD, and a notice is sent to the sales rep.\n\nSetting the status to APPROVED and writing to the Orders store instead happens in the ELSE branch, when the order amount does not exceed the credit limit.\n\nAutomatically cancelling and deleting the order is not part of the described logic; the order is instead placed on hold.\n\nPermanently closing the customer's account is not part of the described logic."
  },
  {
    id: "csc312_ch3_034",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an advantage of Structured English?",
    options: [
      "It is directly translatable to code",
      "It requires no logical structure whatsoever",
      "It can only be understood by professional programmers",
      "It replaces the need for any DFDs entirely"
    ],
    correctAnswer: 0,
    explanation: "Being directly translatable to code is listed as an advantage of Structured English, alongside being clear to both business users and programmers and avoiding ambiguous English.\n\nRequiring no logical structure contradicts Structured English's defining use of sequence, selection, and iteration constructs.\n\nStructured English is explicitly described as clear to both business users and programmers, not understandable only by programmers.\n\nStructured English is a process description tool used alongside DFDs, not a replacement for them."
  },
  {
    id: "csc312_ch3_035",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A decision tree is best described as which of the following?",
    options: [
      "The same logic as a decision table, shown in a graphical, branching format",
      "A physical tree diagram used to plant trees around a data center",
      "A type of DFD symbol shaped like a rectangle",
      "A programming language used to write database queries"
    ],
    correctAnswer: 0,
    explanation: "A decision tree shows the same logic as a decision table but in a graphical, branching format, starting with a decision node and ending in action nodes.\n\nA physical tree-planting diagram is unrelated to the decision tree concept described here.\n\nA rectangle-shaped DFD symbol instead describes the Entity symbol, not a decision tree.\n\nA database query language is unrelated to the decision tree concept described here."
  },
  {
    id: "csc312_ch3_036",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Order Approval decision tree example, what is the root decision node?",
    options: [
      "Over credit limit?",
      "Item in stock?",
      "Approve and ship immediately",
      "Back-order the item"
    ],
    correctAnswer: 0,
    explanation: "In the Order Approval decision tree, the root decision node is 'Over credit limit?', the first branching question asked.\n\n'Item in stock?' instead is a secondary decision node, reached only after the credit limit question is answered NO.\n\n'Approve and ship immediately' instead is an action node, an outcome, not the root decision node.\n\n'Back-order the item' instead is an action node, an outcome, not the root decision node."
  },
  {
    id: "csc312_ch3_037",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Order Approval decision tree example, what happens if the answer to 'Over credit limit?' is YES?",
    options: [
      "The order is placed on credit hold",
      "The system checks whether the item is in stock",
      "The order is approved and shipped immediately",
      "The item is automatically back-ordered"
    ],
    correctAnswer: 0,
    explanation: "If the answer to 'Over credit limit?' is YES, the order is placed on credit hold, ending that branch of the tree.\n\nChecking whether the item is in stock instead happens along the NO branch, not the YES branch.\n\nApproving and shipping immediately instead happens only after both the credit limit and stock checks resolve favorably.\n\nBack-ordering the item instead happens along the NO-then-NO branch, when the item is out of stock, not directly from the credit limit YES answer."
  },
  {
    id: "csc312_ch3_038",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Order Approval decision tree example, if the order is not over the credit limit and the item is in stock, what is the outcome?",
    options: [
      "Approve and ship immediately",
      "Place order on credit hold",
      "Back-order the item",
      "Cancel the order permanently"
    ],
    correctAnswer: 0,
    explanation: "If the order is not over the credit limit and the item is in stock, the outcome is to approve and ship immediately.\n\nPlacing the order on credit hold instead happens when the order is over the credit limit, not in this favorable scenario.\n\nBack-ordering the item instead happens when the item is not in stock, not in this scenario where it is in stock.\n\nCancelling the order permanently is not one of the outcomes shown in this decision tree at all."
  },
  {
    id: "csc312_ch3_039",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an advantage of a decision tree over a decision table?",
    options: [
      "It is visual and intuitive, making decision paths easy to trace",
      "It requires far more storage space on disk",
      "It cannot represent any conditional logic at all",
      "It is only usable by database administrators"
    ],
    correctAnswer: 0,
    explanation: "Being visual and intuitive, making decision paths easy to trace, is listed as an advantage of a decision tree, often easier for users to follow than a decision table.\n\nRequiring more disk storage is not a listed advantage of a decision tree.\n\nA decision tree specifically represents conditional, branching logic, the opposite of being unable to represent it.\n\nRestricting use to database administrators is not stated; decision trees are described as easier for general users to follow."
  },
  {
    id: "csc312_ch3_040",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A decision tree uses IF/THEN/ELSE and REPEAT/WHILE text constructs, while Structured English shows the same logic as a graphical, branching diagram.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. It reverses the two tools: Structured English is the one using IF/THEN/ELSE and REPEAT/WHILE text constructs, while a decision tree is the one that presents that logic as a graphical, branching diagram."
  },
  {
    id: "csc312_ch3_041",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data design is best described as translating what into a physical structure a DBMS can store, retrieve, and protect?",
    options: [
      "The logical data requirements identified during analysis",
      "The marketing budget for the next fiscal year",
      "The physical location of the company's headquarters",
      "The personal preferences of individual employees"
    ],
    correctAnswer: 0,
    explanation: "Data design translates the logical data requirements identified during analysis into a physical structure that a DBMS can store, retrieve, and protect.\n\nA marketing budget is unrelated to the data requirements data design translates.\n\nA headquarters location is unrelated to the data requirements data design translates.\n\nIndividual employee preferences are unrelated to the data requirements data design translates."
  },
  {
    id: "csc312_ch3_042",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the four-step journey from logical data to a physical database, which step comes first?",
    options: [
      "Raw Data, unorganized business requirements and transaction records",
      "Data Structure, a framework for organizing and storing data",
      "DBMS, the software that manages the database",
      "Database, the physical implementation of the data structure"
    ],
    correctAnswer: 0,
    explanation: "Raw Data, unorganized business requirements, user needs, and transaction records, is the first step in the journey from logical data to a physical database.\n\nData Structure instead is the second step, organizing the raw data into a framework, not the first step.\n\nDBMS instead is the third step, the software managing the organized data, not the first step.\n\nDatabase instead is the fourth and final step, the physical implementation, not the first step."
  },
  {
    id: "csc312_ch3_043",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the four-step journey from logical data to a physical database, which step is described as the software that creates, manages, and controls access to a database?",
    options: [
      "DBMS",
      "Raw Data",
      "Data Structure",
      "Database"
    ],
    correctAnswer: 0,
    explanation: "DBMS is the third step, the software that creates, manages, and controls access to a database, handling storage, retrieval, and enforcement of business rules.\n\nRaw Data instead is the first step, unorganized requirements and records, not software.\n\nData Structure instead is the second step, a framework for organizing data, not the software managing it.\n\nDatabase instead is the fourth step, the physical implementation itself, not the software that manages it."
  },
  {
    id: "csc312_ch3_044",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the four-step journey from logical data to a physical database, which step is the actual storage location on disk or in the cloud, where data physically resides?",
    options: [
      "Database",
      "Raw Data",
      "Data Structure",
      "DBMS"
    ],
    correctAnswer: 0,
    explanation: "Database is the fourth and final step, the physical implementation of the data structure, the actual storage location on disk or in the cloud where data physically resides.\n\nRaw Data instead is the first step, unorganized information, not the physical storage location itself.\n\nData Structure instead is the second step, the organizing framework, not the physical storage location.\n\nDBMS instead is the third step, the software managing access, not the physical storage location itself."
  },
  {
    id: "csc312_ch3_045",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which key definition describes a framework for organizing and storing data, with files, tables, lists, and trees given as examples?",
    options: [
      "Data Structure",
      "Database",
      "DBMS",
      "Relational Database"
    ],
    correctAnswer: 0,
    explanation: "Data Structure is defined as a framework for organizing and storing data, with files, tables, lists, and trees given as examples.\n\nDatabase instead is defined as a self-describing collection of related data, stored to minimize duplication, not the organizing framework itself.\n\nDBMS instead is defined as the software that creates, manages, and controls access to a database, not the organizing framework.\n\nRelational Database instead is defined as a database organizing data into linked tables, a specific type, not the general framework definition."
  },
  {
    id: "csc312_ch3_046",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which key definition describes a self-describing collection of related data, stored to minimize duplication?",
    options: [
      "Database",
      "Data Structure",
      "DBMS",
      "Relational Database"
    ],
    correctAnswer: 0,
    explanation: "Database is defined as a self-describing collection of related data, stored to minimize duplication.\n\nData Structure instead is defined as a framework for organizing and storing data, a more general concept than the specific database definition.\n\nDBMS instead is defined as the software that creates, manages, and controls access to a database, not the data collection itself.\n\nRelational Database instead is defined as a specific type of database where data is organized into linked tables, a narrower category than the general database definition."
  },
  {
    id: "csc312_ch3_047",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Most modern systems use which type of database, where data is organized into linked tables?",
    options: [
      "Relational Database",
      "Hierarchical Database",
      "Network Database",
      "Flat File Database"
    ],
    correctAnswer: 0,
    explanation: "Most modern systems use a Relational Database, where data is organized into linked tables.\n\nHierarchical Database is not the type named as what most modern systems use in this material.\n\nNetwork Database is not the type named as what most modern systems use in this material.\n\nFlat File Database is not the type named as what most modern systems use in this material."
  },
  {
    id: "csc312_ch3_048",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a component of the journey from logical data to a physical database?",
    options: [
      "Raw Data",
      "DBMS",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The four-step journey lists Raw Data, Data Structure, DBMS, and Database, so both Raw Data and DBMS are correct, making All of these the right choice."
  },
  {
    id: "csc312_ch3_049",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the three core DBMS components provides access for users, database administrators, programmers, and related information systems?",
    options: [
      "Interfaces",
      "Schema",
      "Physical Data Repository",
      "Referential Integrity"
    ],
    correctAnswer: 0,
    explanation: "Interfaces provide access for users, database administrators, programmers, and related information systems to interact with the data.\n\nSchema instead describes the database's logical and physical structure, not the access points for different user types.\n\nPhysical Data Repository instead is the actual storage location on disk or cloud, not the interaction interface for users.\n\nReferential Integrity is a rule about foreign keys, not one of the three core DBMS components."
  },
  {
    id: "csc312_ch3_050",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the three core DBMS components describes the database's logical and physical structure, including tables, fields, relationships, and constraints?",
    options: [
      "Schema",
      "Interfaces",
      "Physical Data Repository",
      "Candidate Key"
    ],
    correctAnswer: 0,
    explanation: "Schema describes the database's logical and physical structure, tables, fields, relationships, and constraints, acting as the blueprint of the entire database structure.\n\nInterfaces instead provide access for different types of users, not the structural blueprint itself.\n\nPhysical Data Repository instead is the actual storage location, not the structural blueprint describing that storage.\n\nCandidate Key is a key-fields concept, not one of the three core DBMS components."
  },
  {
    id: "csc312_ch3_051",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the three core DBMS components is the actual storage location on disk or in the cloud, managed by the DBMS?",
    options: [
      "Physical Data Repository",
      "Interfaces",
      "Schema",
      "Primary Key"
    ],
    correctAnswer: 0,
    explanation: "Physical Data Repository is the actual storage location on disk or in the cloud where data physically resides, managed by the DBMS and able to be distributed across cloud storage.\n\nInterfaces instead provide access for different types of users, not the physical storage location itself.\n\nSchema instead is the structural blueprint describing tables and relationships, not the physical storage location itself.\n\nPrimary Key is a key-fields concept, not one of the three core DBMS components."
  },
  {
    id: "csc312_ch3_052",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as part of what the Schema component contains?",
    options: [
      "Integrity constraints",
      "The company's annual revenue figures",
      "Employee vacation schedules",
      "Marketing campaign performance metrics"
    ],
    correctAnswer: 0,
    explanation: "Integrity constraints are listed as part of what the Schema contains, alongside table definitions, field specifications, relationship definitions, and access rules.\n\nAnnual revenue figures are business data that might be stored in a database, not part of the Schema's structural definition itself.\n\nEmployee vacation schedules are business data, not part of the Schema's structural definition.\n\nMarketing campaign metrics are business data, not part of the Schema's structural definition."
  },
  {
    id: "csc312_ch3_053",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a characteristic of the Physical Data Repository?",
    options: [
      "It can be distributed, such as cloud-based storage",
      "It is always limited to exactly one single hard drive",
      "It never requires management by the DBMS",
      "It only exists for databases smaller than one megabyte"
    ],
    correctAnswer: 0,
    explanation: "Being able to be distributed, such as cloud-based storage, is listed as a characteristic of the Physical Data Repository.\n\nBeing limited to exactly one hard drive contradicts the described ability to be distributed across cloud storage.\n\nThe Physical Data Repository is explicitly described as managed by the DBMS, not exempt from that management.\n\nNo size limit of one megabyte is mentioned as a characteristic of the Physical Data Repository."
  },
  {
    id: "csc312_ch3_054",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A candidate key is best described as which of the following?",
    options: [
      "Any field, or combination of fields, that could uniquely identify a record",
      "The one field that has already been chosen to uniquely identify a record",
      "A field that always references another table's primary key",
      "A field that is guaranteed to contain duplicate values"
    ],
    correctAnswer: 0,
    explanation: "A candidate key is any field, or combination of fields, that could uniquely identify a record, and multiple candidates may exist for one table.\n\nThe field already chosen to uniquely identify a record instead describes a primary key, the one candidate key that was selected.\n\nA field that references another table's primary key instead describes a foreign key, not a candidate key.\n\nA field guaranteed to contain duplicates is the opposite of a candidate key, which must be capable of unique identification."
  },
  {
    id: "csc312_ch3_055",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is given as an example of a candidate key?",
    options: [
      "Employee SSN",
      "A company's marketing slogan",
      "The current date and time only",
      "A randomly generated color code"
    ],
    correctAnswer: 0,
    explanation: "Employee SSN is given as an example of a candidate key, alongside Employee ID number and a unique email address.\n\nA marketing slogan is not given as an example of a candidate key.\n\nThe current date and time alone is not given as an example of a candidate key.\n\nA randomly generated color code is not given as an example of a candidate key."
  },
  {
    id: "csc312_ch3_056",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A primary key is best described as which of the following?",
    options: [
      "The candidate key actually chosen to uniquely identify each record in a table",
      "Any field that could potentially, but does not yet, identify a record",
      "A field that links to a primary key in a different table",
      "A field that changes value every time a record is updated"
    ],
    correctAnswer: 0,
    explanation: "A primary key is the candidate key actually chosen to uniquely identify each record in a table, and there is one primary key per table.\n\nA field that could potentially identify a record without yet being chosen instead describes a candidate key in general, not specifically the primary key.\n\nA field linking to a primary key in a different table instead describes a foreign key, not a primary key.\n\nA primary key should not change after creation, ideally being immutable, not a field that changes with every update."
  },
  {
    id: "csc312_ch3_057",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a characteristic of a primary key?",
    options: [
      "It must be non-null, meaning every record must have a value",
      "It is allowed to be duplicated across multiple records",
      "It should change frequently to reflect the latest information",
      "Every table must have at least three primary keys"
    ],
    correctAnswer: 0,
    explanation: "Being non-null, meaning every record must have a value, is listed as a characteristic of a primary key, alongside being unique and one per table.\n\nAllowing duplication contradicts the primary key's defining requirement of uniqueness.\n\nChanging frequently contradicts the listed characteristic that a primary key should not change after creation.\n\nRequiring at least three primary keys contradicts the stated rule of one primary key per table."
  },
  {
    id: "csc312_ch3_058",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a selection criterion for choosing a primary key?",
    options: [
      "It should be simple, with a single field preferred",
      "It must always be exactly twenty characters long",
      "It should be shared by as many records as possible",
      "It should be selected at random each time a query runs"
    ],
    correctAnswer: 0,
    explanation: "Being simple, with a single field preferred, is listed as a selection criterion for a primary key, alongside not changing over time and being meaningful or systematically generated.\n\nA fixed twenty-character length is not a listed selection criterion for a primary key.\n\nBeing shared by many records contradicts the fundamental uniqueness requirement of a primary key.\n\nBeing selected at random each query run contradicts the primary key's requirement to remain stable and identify one specific record consistently."
  },
  {
    id: "csc312_ch3_059",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A foreign key is best described as which of the following?",
    options: [
      "A field in one table that matches the primary key of another table, creating a relationship",
      "A field that is always left blank in every record",
      "The very first field listed in any database table",
      "A field used only to store a table's creation date"
    ],
    correctAnswer: 0,
    explanation: "A foreign key is a field in one table that matches the primary key of another table, creating a relationship and enabling data linkage across tables.\n\nBeing always left blank contradicts the described role of a foreign key, which holds a value matching a related table's primary key, or is null when there is no related record.\n\nBeing the first field listed is a positional detail, not the definition of a foreign key.\n\nStoring a table's creation date describes a timestamp field, not the relational role of a foreign key."
  },
  {
    id: "csc312_ch3_060",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the given foreign key example, what does the CustomerID field in the Orders table do?",
    options: [
      "Links each order to its customer in the Customers table",
      "Stores the total dollar value of the order",
      "Records the exact time the order was shipped",
      "Lists the warehouse location of the ordered item"
    ],
    correctAnswer: 0,
    explanation: "In the example, the Orders table has a CustomerID foreign key that links each order to its customer in the Customers table.\n\nStoring the order's total dollar value is not what CustomerID is described as doing in this example.\n\nRecording the shipping time is not what CustomerID is described as doing in this example.\n\nListing a warehouse location is not what CustomerID is described as doing in this example."
  },
  {
    id: "csc312_ch3_061",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a characteristic of a foreign key?",
    options: [
      "Multiple foreign keys are allowed per table",
      "A table can have at most one foreign key, ever",
      "It must always be identical to the table's own primary key",
      "It can never reference more than one other table across a whole database"
    ],
    correctAnswer: 0,
    explanation: "Multiple foreign keys being allowed per table is listed as a characteristic of a foreign key, since a table can reference several other tables.\n\nLimiting a table to at most one foreign key contradicts the listed characteristic that multiple foreign keys are allowed.\n\nA foreign key referencing another table's primary key is a different field from the table's own primary key, not required to be identical to it.\n\nDifferent foreign keys in the same table can reference different related tables, contradicting a claim that only one table can ever be referenced database-wide."
  },
  {
    id: "csc312_ch3_062",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Referential integrity is best described as which of the following?",
    options: [
      "A rule that a foreign key value must match a primary key value in the related table, or be null",
      "A rule that every table must contain exactly the same number of fields",
      "A rule requiring all data to be deleted at the end of every fiscal year",
      "A rule that primary keys must always be numeric values"
    ],
    correctAnswer: 0,
    explanation: "Referential integrity is a rule stating that a foreign key value must either match a primary key value in the related table, or be null, preventing orphan records.\n\nRequiring every table to have the same number of fields is not what referential integrity refers to.\n\nRequiring annual data deletion is not what referential integrity refers to.\n\nRequiring primary keys to always be numeric is not what referential integrity refers to; primary keys can take other forms as long as they are unique."
  },
  {
    id: "csc312_ch3_063",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "What does referential integrity specifically prevent, in the order-and-customer example given?",
    options: [
      "Creating an order referencing a customer ID that doesn't exist in the Customers table",
      "A customer from placing more than one order in a single day",
      "An employee from being assigned to more than one department",
      "A product from being listed in more than one category"
    ],
    correctAnswer: 0,
    explanation: "Referential integrity specifically prevents creating an order referencing a customer ID that doesn't exist in the Customers table, an example of preventing an orphan record.\n\nLimiting a customer to one order per day is not the example given for what referential integrity prevents.\n\nLimiting an employee to one department is not the example given for what referential integrity prevents.\n\nLimiting a product to one category is not the example given for what referential integrity prevents."
  },
  {
    id: "csc312_ch3_064",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a benefit of referential integrity?",
    options: [
      "It maintains database consistency and prevents data anomalies",
      "It guarantees a database will never need to be backed up",
      "It automatically increases the speed of every query tenfold",
      "It removes the need for any primary keys in the database"
    ],
    correctAnswer: 0,
    explanation: "Maintaining database consistency and preventing data anomalies is listed as the benefit of referential integrity, ensuring data consistency and preventing invalid references.\n\nEliminating the need for backups is not a listed benefit of referential integrity.\n\nA tenfold query speed increase is not a listed benefit of referential integrity.\n\nReferential integrity depends on primary keys existing in related tables, not removing the need for them."
  },
  {
    id: "csc312_ch3_065",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A candidate key could uniquely identify a record, while a primary key is the specific candidate key that was actually chosen for that purpose.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. A candidate key is any field or combination of fields that could uniquely identify a record, while a primary key is the candidate key actually chosen to uniquely identify each record in a table."
  },
  {
    id: "csc312_ch3_066",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a key-fields concept, alongside Primary Key?",
    options: [
      "Master Key",
      "Index Key",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The key-fields concepts covered are Candidate Key, Primary Key, and Foreign Key. Neither Master Key nor Index Key is one of these three named concepts, making None of these the right choice."
  },
  {
    id: "csc312_ch3_067",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A one-to-one (1:1) relationship is best described as which of the following?",
    options: [
      "One record in Table A relates to exactly one record in Table B, and vice versa",
      "One record in Table A can relate to many records in Table B",
      "Many records in Table A can relate to many records in Table B",
      "No records in Table A ever relate to any record in Table B"
    ],
    correctAnswer: 0,
    explanation: "A one-to-one (1:1) relationship means one record in Table A relates to exactly one record in Table B, and vice versa.\n\nOne record relating to many describes a one-to-many relationship, not one-to-one.\n\nMany records relating to many describes a many-to-many relationship, not one-to-one.\n\nNo relation at all contradicts the definition of a relationship existing between the tables."
  },
  {
    id: "csc312_ch3_068",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which example is given to illustrate a one-to-one (1:1) relationship?",
    options: [
      "EMPLOYEE-PARKING SPACE",
      "CUSTOMER-ORDER",
      "STUDENT-COURSE",
      "PRODUCT-SUPPLIER"
    ],
    correctAnswer: 0,
    explanation: "EMPLOYEE-PARKING SPACE is given as the example of a one-to-one relationship, since one employee is assigned exactly one parking space, and vice versa.\n\nCUSTOMER-ORDER is instead given as the example of a one-to-many relationship, not one-to-one.\n\nSTUDENT-COURSE is instead given as the example of a many-to-many relationship, not one-to-one.\n\nPRODUCT-SUPPLIER is not one of the three named relationship examples in this material."
  },
  {
    id: "csc312_ch3_069",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "One-to-one (1:1) relationships are described as being how common in database design?",
    options: [
      "Rare, often indicating attributes that could belong in the same table",
      "The single most common relationship type by far",
      "Impossible to represent in any relational database",
      "Required in every single table in every database"
    ],
    correctAnswer: 0,
    explanation: "One-to-one relationships are described as rare in database design, often indicating attributes that could just as easily be combined into the same table.\n\nOne-to-many is instead described as the most common relationship type, not one-to-one.\n\nOne-to-one relationships are shown as representable, using the EMPLOYEE-PARKING SPACE example, not impossible to represent.\n\nRequiring a one-to-one relationship in every table is not stated anywhere in this material."
  },
  {
    id: "csc312_ch3_070",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A one-to-many (1:M) relationship is best described as which of the following?",
    options: [
      "One record in Table A can relate to many records in Table B, but each record in Table B belongs to only one record in Table A",
      "One record in Table A relates to exactly one record in Table B, and vice versa",
      "Many records in Table A can relate to many records in Table B, and vice versa",
      "Records in Table A and Table B never share any relationship at all"
    ],
    correctAnswer: 0,
    explanation: "A one-to-many (1:M) relationship means one record in Table A can relate to many records in Table B, but each record in Table B belongs to only one record in Table A.\n\nExactly one record relating to exactly one describes a one-to-one relationship, not one-to-many.\n\nMany relating to many describes a many-to-many relationship, not one-to-many.\n\nNo relationship at all contradicts the definition of a relationship existing between the tables."
  },
  {
    id: "csc312_ch3_071",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which example is given to illustrate a one-to-many (1:M) relationship?",
    options: [
      "CUSTOMER-ORDER",
      "EMPLOYEE-PARKING SPACE",
      "STUDENT-COURSE",
      "None of the relationship types have a given example"
    ],
    correctAnswer: 0,
    explanation: "CUSTOMER-ORDER is given as the example of a one-to-many relationship, since one customer can place many orders, but each order belongs to only one customer.\n\nEMPLOYEE-PARKING SPACE is instead given as the example of a one-to-one relationship, not one-to-many.\n\nSTUDENT-COURSE is instead given as the example of a many-to-many relationship, not one-to-many.\n\nEach relationship type is in fact given its own specific example in this material."
  },
  {
    id: "csc312_ch3_072",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which relationship type is described as the most common relationship type in database design?",
    options: [
      "One-to-Many (1:M)",
      "One-to-One (1:1)",
      "Many-to-Many (M:N)",
      "Zero-to-Many (0:M)"
    ],
    correctAnswer: 0,
    explanation: "One-to-Many (1:M) is described as the most common relationship type, illustrated by the CUSTOMER-ORDER example.\n\nOne-to-One (1:1) is instead described as rare in database design, not the most common.\n\nMany-to-Many (M:N) is described as creating complex relationships requiring a junction table, not called the most common type.\n\nZero-to-Many is not one of the three relationship types named in this material at all."
  },
  {
    id: "csc312_ch3_073",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A many-to-many (M:N) relationship is best described as which of the following?",
    options: [
      "One record in Table A can relate to many records in Table B, and vice versa",
      "One record in Table A can relate to many records in Table B, but not the reverse",
      "Exactly one record in Table A relates to exactly one record in Table B",
      "No record in either table can ever relate to more than one other record"
    ],
    correctAnswer: 0,
    explanation: "A many-to-many (M:N) relationship means one record in Table A can relate to many records in Table B, and vice versa, creating complex relationships.\n\nOne relating to many but not the reverse describes a one-to-many relationship, not many-to-many.\n\nExactly one relating to exactly one describes a one-to-one relationship, not many-to-many.\n\nRestricting every record to only one relationship contradicts the defining 'many on both sides' nature of a many-to-many relationship."
  },
  {
    id: "csc312_ch3_074",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which example is given to illustrate a many-to-many (M:N) relationship?",
    options: [
      "STUDENT-COURSE",
      "EMPLOYEE-PARKING SPACE",
      "CUSTOMER-ORDER",
      "ACCOUNTING-WAREHOUSE"
    ],
    correctAnswer: 0,
    explanation: "STUDENT-COURSE is given as the example of a many-to-many relationship, since one student can enroll in many courses, and one course can have many students.\n\nEMPLOYEE-PARKING SPACE is instead given as the example of a one-to-one relationship, not many-to-many.\n\nCUSTOMER-ORDER is instead given as the example of a one-to-many relationship, not many-to-many.\n\nACCOUNTING-WAREHOUSE is not one of the three named relationship examples in this material; those are entities from the earlier context diagram example, not a relationship type example."
  },
  {
    id: "csc312_ch3_075",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Implementing a many-to-many (M:N) relationship in a relational database requires which of the following?",
    options: [
      "A junction, or bridge, table",
      "Deleting one of the two original tables entirely",
      "Storing every record twice, once in each table",
      "Converting the relationship into a one-to-one relationship first"
    ],
    correctAnswer: 0,
    explanation: "Implementing a many-to-many relationship requires a junction, or bridge, table, such as an ENROLLMENT table connecting STUDENT and COURSE.\n\nDeleting one of the original tables would eliminate the relationship entirely, not implement it.\n\nStoring every record twice is not the described implementation technique; a junction table instead references both original tables' keys.\n\nConverting to a one-to-one relationship first is not the described implementation technique for many-to-many relationships."
  },
  {
    id: "csc312_ch3_076",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the many-to-many example, what is the name given to the junction table connecting STUDENT and COURSE?",
    options: [
      "ENROLLMENT",
      "REGISTRATION_LOG",
      "STUDENT_RECORD",
      "COURSE_CATALOG"
    ],
    correctAnswer: 0,
    explanation: "ENROLLMENT is the name given to the junction table connecting STUDENT and COURSE in the many-to-many example.\n\nREGISTRATION_LOG is not the name given to this junction table in the example.\n\nSTUDENT_RECORD is not the name given to this junction table in the example.\n\nCOURSE_CATALOG is not the name given to this junction table in the example."
  },
  {
    id: "csc312_ch3_077",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following accurately pairs a relationship type with its example?",
    options: [
      "One-to-Many (1:M) is illustrated by CUSTOMER-ORDER",
      "Many-to-Many (M:N) is illustrated by EMPLOYEE-PARKING SPACE",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "One-to-Many being illustrated by CUSTOMER-ORDER is stated directly. Many-to-Many is instead illustrated by STUDENT-COURSE, not EMPLOYEE-PARKING SPACE, which illustrates a One-to-One relationship. Since only the CUSTOMER-ORDER pairing is accurate, that is the correct answer."
  },
  {
    id: "csc312_ch3_078",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Regarding data storage, what is the distinction between logical and physical storage?",
    options: [
      "Logical storage is how users see data, such as tables and fields, while physical storage is how data actually sits on a device",
      "Logical storage is only used for backups, while physical storage is used for daily operations",
      "Logical storage refers only to cloud storage, while physical storage refers only to local disks",
      "There is no meaningful distinction between logical and physical storage"
    ],
    correctAnswer: 0,
    explanation: "Logical storage is how users see data, in tables, records, and fields, while physical storage is how data actually sits on a device, in sectors, blocks, and cylinders.\n\nRestricting logical storage to backups only is not the described distinction between logical and physical storage.\n\nRestricting logical storage to the cloud and physical storage to local disks is not the described distinction; the distinction is about user perspective versus actual device layout, not location.\n\nA meaningful distinction is explicitly drawn between the two, contradicting a claim that none exists."
  },
  {
    id: "csc312_ch3_079",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a tool for efficient data storage and access?",
    options: [
      "Indexes, which speed up retrieval without duplicating data",
      "Deleting all keys from every table",
      "Removing every organization method currently in use",
      "Randomly shuffling record order after every write"
    ],
    correctAnswer: 0,
    explanation: "Indexes, which speed up retrieval without duplicating data, are listed as a tool for efficient data storage and access, alongside keys and organization methods.\n\nDeleting all keys would remove a listed efficiency tool rather than being one itself, since keys enable fast lookups and joining tables.\n\nRemoving organization methods would remove a listed efficiency tool rather than being one itself.\n\nRandomly shuffling record order is not a listed tool for efficient data storage and access."
  },
  {
    id: "csc312_ch3_080",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data Coding refers to which of the following?",
    options: [
      "Encoding and decoding schemes, such as compression and character sets, affecting how data is stored and transmitted",
      "The process of writing application source code from scratch",
      "A method for assigning employee ID numbers to new hires",
      "A legal requirement to encrypt every email sent by a company"
    ],
    correctAnswer: 0,
    explanation: "Data Coding refers to encoding and decoding schemes, such as compression and character sets, affecting how efficiently data is stored and transmitted.\n\nWriting application source code is a software development activity, not the definition of Data Coding given here.\n\nAssigning employee ID numbers is an HR process, not the definition of Data Coding given here.\n\nA legal email encryption requirement is a compliance concern, not the definition of Data Coding given here."
  },
  {
    id: "csc312_ch3_081",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is given as an example related to Data Coding?",
    options: [
      "UTF-8 encoding for international characters",
      "A company's annual sales report",
      "A customer's home mailing address",
      "An employee's job title"
    ],
    correctAnswer: 0,
    explanation: "UTF-8 encoding for international characters is given as an example under Data Coding, alongside JPEG compression for images and ZIP compression for file size reduction.\n\nAn annual sales report is business data, not one of the Data Coding examples given.\n\nA customer's mailing address is business data, not one of the Data Coding examples given.\n\nAn employee's job title is business data, not one of the Data Coding examples given."
  },
  {
    id: "csc312_ch3_082",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data Control refers to which of the following?",
    options: [
      "Access permissions, audit trails, and validation rules that protect data integrity and confidentiality",
      "The physical control panel used to power servers on and off",
      "A remote control used to operate a projector during presentations",
      "The steering mechanism used in an autonomous vehicle"
    ],
    correctAnswer: 0,
    explanation: "Data Control refers to access permissions, audit trails, and validation rules that protect data integrity and confidentiality throughout its life cycle.\n\nA server power control panel is a piece of hardware, not the definition of Data Control given here.\n\nA projector remote control is unrelated to data protection, not the definition of Data Control.\n\nAn autonomous vehicle's steering mechanism is unrelated to data protection, not the definition of Data Control."
  },
  {
    id: "csc312_ch3_083",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a component of Data Control?",
    options: [
      "Audit trails, a log of who accessed what and when",
      "The company's annual marketing calendar",
      "A list of every printer connected to the network",
      "A schedule of upcoming public holidays"
    ],
    correctAnswer: 0,
    explanation: "Audit trails, a log of who accessed what and when, are listed as a component of Data Control, alongside access permissions, validation rules, encryption, and backups.\n\nA marketing calendar is unrelated to Data Control's listed components.\n\nA list of network printers is unrelated to Data Control's listed components.\n\nA public holiday schedule is unrelated to Data Control's listed components."
  },
  {
    id: "csc312_ch3_084",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a component of Data Control that protects sensitive data specifically?",
    options: [
      "Encryption",
      "Data Coding",
      "Leveling",
      "Balancing"
    ],
    correctAnswer: 0,
    explanation: "Encryption is listed among the Data Control components, specifically described as protecting sensitive data.\n\nData Coding is a separate, related topic about compression and character sets, not one of the Data Control components listed for protecting sensitive data.\n\nLeveling is a DFD concept about exploding processes, unrelated to Data Control.\n\nBalancing is a DFD concept about matching inputs and outputs, unrelated to Data Control."
  },
  {
    id: "csc312_ch3_085",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data and Process Modeling focuses on data flow diagrams that tell you what?",
    options: [
      "What data needs to exist and how it moves",
      "How to encrypt every field in a database",
      "How much a new server will cost to purchase",
      "Which employees are eligible for promotion"
    ],
    correctAnswer: 0,
    explanation: "Data and Process Modeling focuses on data flow diagrams which tell you what data needs to exist and how it moves through the system.\n\nEncrypting every field is a Data Control concern, not what DFDs are described as telling you.\n\nServer purchase cost is a budgeting concern, unrelated to what DFDs are described as telling you.\n\nEmployee promotion eligibility is an HR concern, unrelated to what DFDs are described as telling you."
  },
  {
    id: "csc312_ch3_086",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data Design focuses on entity-relationship diagrams and normalization rules that tell you what?",
    options: [
      "How to structure data so it can be stored reliably, without redundancy, and retrieved efficiently",
      "How to hire new database administrators",
      "How to schedule employee work shifts",
      "How to design a company's marketing logo"
    ],
    correctAnswer: 0,
    explanation: "Data Design focuses on entity-relationship diagrams and normalization rules that tell you how to structure data so it can be stored reliably, without redundancy, and retrieved efficiently.\n\nHiring database administrators is an HR task, not what Data Design is described as telling you.\n\nScheduling employee shifts is an HR task, unrelated to what Data Design is described as telling you.\n\nDesigning a marketing logo is a graphic design task, unrelated to what Data Design is described as telling you."
  },
  {
    id: "csc312_ch3_087",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the five-step bridge connecting analysis and design, which step comes immediately after DFDs identify what data flows through the system?",
    options: [
      "The data dictionary describes each data element",
      "The DBMS implements the physical design",
      "Normalization ensures efficient storage",
      "ERDs show how data entities relate"
    ],
    correctAnswer: 0,
    explanation: "In the five-step bridge, after DFDs identify what data flows through the system, the data dictionary describes each data element, the second step listed.\n\nThe DBMS implementing the physical design is instead the fifth and final step in the sequence, not the second.\n\nNormalization ensuring efficient storage is instead the fourth step in the sequence, not the second.\n\nERDs showing how data entities relate is instead the third step in the sequence, not the second."
  },
  {
    id: "csc312_ch3_088",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the five-step bridge connecting analysis and design, which step is listed last, implementing the physical design?",
    options: [
      "DBMS implements the physical design",
      "DFDs identify what data flows through the system",
      "The data dictionary describes each data element",
      "ERDs show how data entities relate"
    ],
    correctAnswer: 0,
    explanation: "The DBMS implementing the physical design is the fifth and final step in the five-step bridge connecting analysis and design.\n\nDFDs identifying data flows is instead the first step in the sequence, not the last.\n\nThe data dictionary describing each data element is instead the second step in the sequence, not the last.\n\nERDs showing entity relationships is instead the third step in the sequence, not the last."
  },
  {
    id: "csc312_ch3_089",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Data Design shows WHAT the system needs to do, while Data and Process Modeling shows HOW the system will store and retrieve data.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. It reverses the two areas: Data and Process Modeling is the one that shows WHAT the system needs to do, while Data Design is the one that shows HOW the system will store and retrieve that data."
  },
  {
    id: "csc312_ch3_090",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Modeling identifies requirements during which phase, while design implements those requirements during which phase?",
    options: [
      "Analysis; design",
      "Design; analysis",
      "Testing; deployment",
      "Deployment; testing"
    ],
    correctAnswer: 0,
    explanation: "The Why Both Matter summary states modeling identifies requirements during analysis, while design implements those requirements during design, together creating systems that are business-focused yet technically sound.\n\nReversing the pairing, analysis for design and design for analysis, contradicts the stated order directly.\n\nTesting and deployment are separate SDLC phases, not the two phases named in this specific summary pairing.\n\nDeployment and testing are separate SDLC phases, not the two phases named in this specific summary pairing, and are also given in the wrong order relative to the actual pairing."
  },
  {
    id: "csc312_ch3_091",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Most modern systems use a Relational Database, where data is organized into linked tables.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This is True. Most modern systems are described as using a Relational Database, where data is organized into linked tables."
  },
  {
    id: "csc312_ch3_092",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "The Interfaces component of a DBMS is the actual storage location on disk, while the Physical Data Repository provides access for users, DBAs, and programmers.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is False. It reverses the two components: Interfaces are what provide access for users, database administrators, programmers, and related information systems, while the Physical Data Repository is the actual storage location on disk or in the cloud."
  },
  {
    id: "csc312_ch3_093",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the Order Entry System context diagram, which of the following is a correct entity and data flow pairing?",
    options: [
      "Customer sends Order Data into the system",
      "Accounting receives Invoice Data from the system",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both pairings are accurate. The Customer entity sends Order Data into the Order Entry System. The Accounting entity separately receives Invoice Data from the Order Entry System. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc312_ch3_094",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is named as one of the three core components of a DBMS?",
    options: [
      "Query Optimizer",
      "Transaction Log",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The three core DBMS components are Interfaces, Schema, and Physical Data Repository. Neither a Query Optimizer nor a Transaction Log is one of these three named components, making None of these the right choice."
  }
];

export default csc312Lecture2DataProcessModelingQuestions;
