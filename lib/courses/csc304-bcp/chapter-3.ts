import { QuestionV2 } from "@/lib/quiz-types";

const csc304Chapter3: QuestionV2[] = [
  {
    id: "csc304_ch3_001",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "According to the notes, how is a file defined?",
    options: [
      "A software program used for debugging",
      "A collection of records",
      "A primary key identifier",
      "An integrated development environment",
    ],
    correctAnswer: 1,
    explanation:
      "Under the 'Types of Files' section, a file is explicitly defined as the collection of records.",
  },
  {
    id: "csc304_ch3_002",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a primary use of files?",
    options: [
      "To compile assembly language",
      "To detect hardware failures",
      "To aid decision making",
      "To convert low level language into machine language",
    ],
    correctAnswer: 2,
    explanation:
      "The 'Uses of Files' section lists two main uses: 1. To aid decision making, and 2. To keep track of information.",
  },
  {
    id: "csc304_ch3_003",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of file contains relatively permanent information and requires constant maintenance?",
    options: [
      "Transaction File",
      "Reference File",
      "Movement File",
      "Master File",
    ],
    correctAnswer: 3,
    explanation:
      "The Master File is described as containing relatively permanent information. It is long-lasting and requires constant maintenance.",
  },
  {
    id: "csc304_ch3_004",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What characterizes the lifespan of a Transaction File?",
    options: [
      "It is completely permanent",
      "It has a short-life span",
      "It outlasts the master file",
      "It lasts until the computer system fails",
    ],
    correctAnswer: 1,
    explanation:
      "The notes specify that a Transaction File changes periodically and explicitly states that it has a short-life span.",
  },
  {
    id: "csc304_ch3_005",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file is explicitly used to update the master file?",
    options: [
      "Reference File",
      "Primary File",
      "Transaction File",
      "Secondary File",
    ],
    correctAnswer: 2,
    explanation:
      "A Transaction File is used to update the master file and is discarded after being used for this purpose.",
  },
  {
    id: "csc304_ch3_006",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What happens to a Transaction File after it is used to update the master file?",
    options: [
      "It becomes a Reference File",
      "It is permanently archived",
      "It is duplicated",
      "It is discarded",
    ],
    correctAnswer: 3,
    explanation:
      "The notes state directly that the Transaction File is discarded after being used to update the master file.",
  },
  {
    id: "csc304_ch3_007",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is another name for a Transaction File?",
    options: [
      "Movement File",
      "Validation File",
      "Master File",
      "Utility File",
    ],
    correctAnswer: 0,
    explanation:
      "The Transaction File section notes that it is also known as a Movement File.",
  },
  {
    id: "csc304_ch3_008",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file type is used specifically for reference and validation?",
    options: [
      "Transaction File",
      "Movement File",
      "Reference File",
      "Master File",
    ],
    correctAnswer: 2,
    explanation:
      "A Reference File is defined strictly as a file used for reference and validation.",
  },
  {
    id: "csc304_ch3_009",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A reference file is completely permanent and never changes over time.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The notes state that a Reference File is relatively permanent but changes with time.",
  },
  {
    id: "csc304_ch3_010",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which key is used as a unique identifier for each record?",
    options: ["Foreign key", "Primary key", "Secondary key", "Validation key"],
    correctAnswer: 1,
    explanation:
      "A primary key is defined in the notes as an identifier, specifically a unique identifier for each record.",
  },
  {
    id: "csc304_ch3_011",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which key acts as a reference to the primary key of another record or table?",
    options: ["Secondary key", "Primary key", "Master key", "Foreign key"],
    correctAnswer: 3,
    explanation:
      "A foreign key is explicitly defined as a reference to the primary key of another record or table.",
  },
  {
    id: "csc304_ch3_012",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What type of key is used to identify a group of records to aid searches?",
    options: ["Primary key", "Foreign key", "Secondary key", "Movement key"],
    correctAnswer: 2,
    explanation:
      "A secondary key is defined as the key used to identify a group of records which can be used to aid searches.",
  },
  {
    id: "csc304_ch3_013",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A primary key is used to identify a broad group of records to aid broad searches.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. A primary key is a unique identifier for each individual record. The secondary key is used to identify a group of records.",
  },
  {
    id: "csc304_ch3_014",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What does the term 'File Maintenance' simply mean?",
    options: [
      "To compile code smoothly",
      "To keep a file up-to-date",
      "To detect bugs in an IDE",
      "To optimize physical computer hardware",
    ],
    correctAnswer: 1,
    explanation:
      "The File Maintenance section states: 'File Maintenance simply means to keep a file up-to-date'.",
  },
  {
    id: "csc304_ch3_015",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the primary goal of ensuring a file reflects current information?",
    options: [
      "File Maintenance",
      "Code Assembly",
      "Hardware Optimization",
      "System Debugging",
    ],
    correctAnswer: 0,
    explanation:
      "File maintenance involves ensuring that the file reflects current information through operations like insertion, deletion, and updating.",
  },
  {
    id: "csc304_ch3_016",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Updating a file means making changes to the file.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. Under the secured operations of file maintenance, 'Updating' is defined as meaning to make changes to a file.",
  },
  {
    id: "csc304_ch3_017",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which secured operation of file maintenance refers to adding a new record to a file?",
    options: ["Insertion", "Deletion", "Updating", "Validation"],
    correctAnswer: 0,
    explanation:
      "Insertion is explicitly defined in the notes as meaning 'adding a new record to a file'.",
  },
  {
    id: "csc304_ch3_018",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which operation describes removing a record that is not needed from a file?",
    options: ["Updating", "Insertion", "Deletion", "Duplication"],
    correctAnswer: 2,
    explanation:
      "Deletion is defined in the file maintenance section as 'removing a record that is not needed from a file'.",
  },
  {
    id: "csc304_ch3_019",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an importance of file maintenance?",
    options: [
      "It creates duplicate records",
      "It improves accuracy",
      "It translates assembly language",
      "It recovers damaged software",
    ],
    correctAnswer: 1,
    explanation:
      "Under 'Importance of File Maintenance', the first point listed is 'It improves accuracy'.",
  },
  {
    id: "csc304_ch3_020",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "How does proper file maintenance affect data duplication?",
    options: [
      "It ensures duplication occurs",
      "It prevents duplication",
      "It relies on duplication for backups",
      "It ignores duplicated records",
    ],
    correctAnswer: 1,
    explanation:
      "The second point under the importance of file maintenance explicitly states that 'It prevents duplication'.",
  },
  {
    id: "csc304_ch3_021",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is identified as a challenge that comes with file maintenance?",
    options: [
      "Human error",
      "Improved accuracy",
      "Bug detection",
      "System optimization",
    ],
    correctAnswer: 0,
    explanation:
      "Under the 'Challenges that come with File Maintenance' section, 'Human error' is listed as the first challenge.",
  },
  {
    id: "csc304_ch3_022",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "According to the notes, hardware failure is one of the challenges of file maintenance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. 'Hardware failure' is explicitly listed as challenge number two under the file maintenance challenges section.",
  },
  {
    id: "csc304_ch3_023",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What scenario is given as an example of unauthorized access posing a challenge to file maintenance?",
    options: [
      "Compilers translating code incorrectly",
      "Fire incidents when files are not protected adequately",
      "Programmers writing flawed primary keys",
      "Secondary keys grouping wrong records",
    ],
    correctAnswer: 1,
    explanation:
      "The notes describe unauthorized access as a challenge and specifically mention 'fire incidents when files are not protected adequately'.",
  },
  {
    id: "csc304_ch3_024",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What type of software is designed to maintain and improve the computer system?",
    options: [
      "Support software",
      "IDE software",
      "Utility software",
      "Assembler software",
    ],
    correctAnswer: 2,
    explanation:
      "Utility software is defined directly as software designed to maintain and improve the computer system. They provide protection and optimization.",
  },
  {
    id: "csc304_ch3_025",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Utility software is designed to maintain and improve the computer system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. The notes define Utility software primarily by its function to maintain and improve the computer system.",
  },
  {
    id: "csc304_ch3_026",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is a direct function of Utility Software?",
    options: [
      "Converting assembly language to low level language",
      "Detecting bugs in program code",
      "Providing an environment to write programs",
      "Helping to recover or manage damaged files",
    ],
    correctAnswer: 3,
    explanation:
      "Under 'Functions of Utility Software', the third point states they 'help to recover/manage damaged files'. The other options belong to support software.",
  },
  {
    id: "csc304_ch3_027",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the primary purpose of Support Software?",
    options: [
      "To optimize the computer's physical hardware",
      "To help programmers develop computer programs efficiently",
      "To provide protection for damaged master files",
      "To prevent unauthorized access during fire incidents",
    ],
    correctAnswer: 1,
    explanation:
      "The section on Support Software explicitly states that 'They help programmers develop computer programs efficiently'.",
  },
  {
    id: "csc304_ch3_028",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Compilers and Interpreters are classified as examples of utility software.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. Compilers and Interpreters are explicitly listed under 'Types of Support Software'.",
  },
  {
    id: "csc304_ch3_029",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which specific type of support software converts from assembly language to low level language into machine language?",
    options: ["Compiler", "Interpreter", "Assembler", "Debugger"],
    correctAnswer: 2,
    explanation:
      "The Assembler is defined in the list of support software as the tool that converts from assembly language to low level language into machine language.",
  },
  {
    id: "csc304_ch3_030",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "According to the notes, what is the core function of Debuggers?",
    options: [
      "They convert low level language",
      "They detect bugs",
      "They recover damaged files",
      "They manage transaction files",
    ],
    correctAnswer: 1,
    explanation:
      "Under the Types of Support Software, 'Debuggers' are listed with the simple definition: 'They detect bugs'.",
  },
  {
    id: "csc304_ch3_031",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What does IDE stand for in the context of support software?",
    options: [
      "Internal Debugging Environment",
      "Integrated Development Environment",
      "Information Data Extractor",
      "Iterative Deployment Engine",
    ],
    correctAnswer: 1,
    explanation:
      "The acronym IDE is explicitly expanded in the notes as 'Integrated Development Environment'.",
  },
  {
    id: "csc304_ch3_032",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which software provides an environment for you to write all the programs you need?",
    options: ["Assembler", "IDE", "Compiler", "Utility System"],
    correctAnswer: 1,
    explanation:
      "The IDE (Integrated Development Environment) is described as providing 'an environment for you to write all the programs you need'.",
  },
  {
    id: "csc304_ch3_033",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A Reference File is considered relatively permanent but it changes with time.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. The notes define the Reference File as being relatively permanent but explicitly mention that it changes with time.",
  },
  {
    id: "csc304_ch3_034",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A foreign key is primarily used to serve as the unique identifier for its own distinct record.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. A primary key is used as a unique identifier for its own record, while a foreign key is a reference to the primary key of another record/table.",
  },
  {
    id: "csc304_ch3_035",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which software type is primarily focused on the protection and optimization of the system?",
    options: [
      "Utility software",
      "Support software",
      "Transaction software",
      "Compiler software",
    ],
    correctAnswer: 0,
    explanation:
      "The notes state that Utility software provides protection and optimization of the system.",
  },
  {
    id: "csc304_ch3_036",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following represents a primary function of Support Systems?",
    options: [
      "They recover damaged files",
      "They maintain computer hardware",
      "They assist programmers",
      "They update master files",
    ],
    correctAnswer: 2,
    explanation:
      "Under the 'Functions of Support System' heading, the singular listed function is 'They assist programmers'.",
  },
  {
    id: "csc304_ch3_037",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file type is relied upon to track information?",
    options: [
      "Compiler files",
      "Utility files",
      "General files",
      "Assembly files",
    ],
    correctAnswer: 2,
    explanation:
      "Under the general 'Uses of Files' section, keeping track of information is listed as one of the two core purposes of files in general.",
  },
  {
    id: "csc304_ch3_038",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which factor dictates that a transaction file must eventually be discarded?",
    options: [
      "Its role in compiling machine language",
      "Its usage in updating the master file",
      "Its requirement to act as a primary key",
      "Its ability to manage damaged files",
    ],
    correctAnswer: 1,
    explanation:
      "The transaction file is discarded specifically after being used to update the master file, which is its primary purpose.",
  },
  {
    id: "csc304_ch3_039",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which process involves secured operations such as insertion, deletion, and updating?",
    options: [
      "Code assembly",
      "File Maintenance",
      "System debugging",
      "Environment integration",
    ],
    correctAnswer: 1,
    explanation:
      "The notes on File Maintenance state that ensuring a file is up-to-date includes secured operations like insertion, deletion, and updating.",
  },
  {
    id: "csc304_ch3_040",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "How does file maintenance support an organization broadly?",
    options: [
      "By preventing the need for primary keys",
      "By converting assembly code faster",
      "By supporting business operations",
      "By turning transaction files into permanent archives",
    ],
    correctAnswer: 2,
    explanation:
      "Under the Importance of File Maintenance, the third point clearly states that it supports business operations.",
  },
];

export default csc304Chapter3;
