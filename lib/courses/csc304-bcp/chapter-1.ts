import { QuestionV2 } from "@/lib/quiz-types";

const csc304Chapter1: QuestionV2[] = [
  {
    id: "csc304_ch1_001",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "What term describes the basic facts about activities of a business that have not yet been processed?",
    options: ["Data", "Information", "Records", "Analysis"],
    correctAnswer: 0,
    explanation:
      "Under the Basic Concepts section, data is defined as the term used to describe basic facts about business activities. These are explicitly facts that have not been processed.",
  },
  {
    id: "csc304_ch1_002",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "What does data become when it is assembled and processed into a meaningful and useful form?",
    options: [
      "Sensory input",
      "Information",
      "Historical data",
      "Unorganized facts",
    ],
    correctAnswer: 1,
    explanation:
      "According to the notes on Basic Concepts, information is data that has been assembled into a useful form. It is processed in such a way as to be meaningful to the person receiving it.",
  },
  {
    id: "csc304_ch1_003",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Data processing is synonymous with data manipulation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The section on Data Processing explicitly states that data processing is synonymous with data manipulation. Both involve collecting and performing operations on data.",
  },
  {
    id: "csc304_ch1_004",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following operations is explicitly part of producing meaningful information in data processing?",
    options: ["Predicting", "Visualizing", "Sorting", "Sensing"],
    correctAnswer: 2,
    explanation:
      "In the Data Processing section, the operations performed on items of data to extract information include classification, calculations, sorting, and summarization. Predicting and sensing are not listed as internal operations.",
  },
  {
    id: "csc304_ch1_005",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following serves as an example of information rather than raw data?",
    options: [
      "The number of hours worked by an employee",
      "The rate of pay for a single employee",
      "The amount of materials in a particular process",
      "An efficiency report",
    ],
    correctAnswer: 3,
    explanation:
      "The Basic Concepts section provides payroll, invoices, financial statements, and efficiency reports as examples of information. The other options are listed as examples of raw data.",
  },
  {
    id: "csc304_ch1_006",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "According to the differences between data and information, data is considered active while information is inactive.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The table detailing the differences between data and information shows the opposite relationship. Data is classified as inactive, whereas information is classified as active.",
  },
  {
    id: "csc304_ch1_007",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Based on the comparison table, how is the nature of data described?",
    options: [
      "Technology based",
      "Business based",
      "Observation based",
      "Decision based",
    ],
    correctAnswer: 0,
    explanation:
      "According to the 'Differences Between Data and Information' table, the nature of data is technology based. In contrast, the nature of information is business based.",
  },
  {
    id: "csc304_ch1_008",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "According to the comparison table, in what form does data exist before it is processed?",
    options: ["Organized", "Specific", "Unorganized", "Refined"],
    correctAnswer: 2,
    explanation:
      "The differences table states that the forms of data are unorganized. Information, on the other hand, is organized.",
  },
  {
    id: "csc304_ch1_009",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "What dependency exists between data and information?",
    options: [
      "Data depends heavily on future information",
      "Without data, information cannot be processed",
      "Information operates entirely independently of data",
      "Data relies on information to remain inactive",
    ],
    correctAnswer: 1,
    explanation:
      "The 'Dependency' row in the comparison table clarifies this relationship. It notes that without data, information cannot be processed, while data itself does not depend on information.",
  },
  {
    id: "csc304_ch1_010",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is a direct capability of information that data lacks on its own?",
    options: [
      "Recording transactions",
      "Making routine observations",
      "Decision making",
      "Gathering raw facts",
    ],
    correctAnswer: 2,
    explanation:
      "The differences table specifies under 'Decision Making' that information can be used for decision making. Data cannot be directly used for this purpose.",
  },
  {
    id: "csc304_ch1_011",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Information is always considered useful, whereas data may or may not be useful.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The comparison table explicitly states under the 'Usefulness' basis that information is always useful. Data, conversely, may or may not be useful.",
  },
  {
    id: "csc304_ch1_012",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "According to the characteristics of good information, what happens when information is not complete?",
    options: [
      "It becomes cost-effective",
      "It turns into historical information",
      "It becomes falsehood or a half-truth",
      "It reverts back into unorganized data",
    ],
    correctAnswer: 2,
    explanation:
      "The section on 'Characteristics of Good Information' lists completeness as a key trait. It notes that if information is not complete, it becomes a falsehood or a half-truth.",
  },
  {
    id: "csc304_ch1_013",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is explicitly listed as a characteristic of good information?",
    options: [
      "Unorganized structure",
      "Technology based dependency",
      "Timeliness",
      "Sensory origin",
    ],
    correctAnswer: 2,
    explanation:
      "Timeliness is listed as the fourth point under the 'Characteristics of Good Information'. The other options refer to classifications of data or different types of information.",
  },
  {
    id: "csc304_ch1_014",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which characteristic implies that the value gained from information should justify the expense of producing it?",
    options: [
      "It must be comprehensiveness",
      "It must be cost effective",
      "It must be reliable",
      "It must be complete",
    ],
    correctAnswer: 1,
    explanation:
      "Cost effectiveness is explicitly listed as characteristic number 7 of good information. This ensures the financial viability of information systems.",
  },
  {
    id: "csc304_ch1_015",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Oral information is documented information made up of numbers and words.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false because the definition provided applies to written information. Oral information is defined as verbal communication between two or more people.",
  },
  {
    id: "csc304_ch1_016",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Information that is gotten from documents and printed materials such as encyclopedias and books is classified as what?",
    options: [
      "Sensory Information",
      "Written Information",
      "Visual Information",
      "Historical Information",
    ],
    correctAnswer: 1,
    explanation:
      "Under the classification based on form, written information is described as being documented. It is usually gathered from printed materials like textbooks and encyclopedias.",
  },
  {
    id: "csc304_ch1_017",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Verbal communication between two or more people, such as discussions and seminars, produces what kind of information?",
    options: [
      "Visual Information",
      "Oral Information",
      "Continuous Information",
      "Present Information",
    ],
    correctAnswer: 1,
    explanation:
      "The notes define oral information as verbal communication between people. It is derived from discussions, seminars, meetings, and interviews.",
  },
  {
    id: "csc304_ch1_018",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Information communicated graphically or pictorially belongs to which classification based on form?",
    options: [
      "Sensory Information",
      "Written Information",
      "Visual Information",
      "Hourly Information",
    ],
    correctAnswer: 2,
    explanation:
      "Visual information is explicitly defined as information communicated graphically, pictorially, or by means of some representation. It is information that can be seen and is gathered from images.",
  },
  {
    id: "csc304_ch1_019",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which type of information is perceived from learning, seeing, feeling, touching, and smelling?",
    options: [
      "Sensory Information",
      "Historical Information",
      "Visual Information",
      "Oral Information",
    ],
    correctAnswer: 0,
    explanation:
      "Sensory information is communicated and perceived by the five sensory organs. The notes specifically list hearing, sight, touch, smell, and feelings as the sources.",
  },
  {
    id: "csc304_ch1_020",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Future information, which refers to predictions and projections, is usually deduced from current and historical information.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The section on 'Future Information' confirms this directly. It states that information about the future is usually obtained or deduced from current and historical information.",
  },
  {
    id: "csc304_ch1_021",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "A person's Date of Birth is given as an example of which kind of information?",
    options: [
      "Present Information",
      "Continuous Information",
      "Historical Information",
      "Sensory Information",
    ],
    correctAnswer: 2,
    explanation:
      "Historical information refers to events that happened in the past that can be recorded. The notes explicitly use Date of Birth and where someone is born as examples.",
  },
  {
    id: "csc304_ch1_022",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Weather forecasting is explicitly cited in the notes as an example of what type of information?",
    options: [
      "Historical Information",
      "Present Information",
      "Future Information",
      "Continuous Information",
    ],
    correctAnswer: 2,
    explanation:
      "Future information refers to predictions and projections about likely future activities. Weather forecasting is the specific example provided in the text for this category.",
  },
  {
    id: "csc304_ch1_023",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Information on current issues and day-to-day activities falls under which classification?",
    options: [
      "Present Information",
      "Continuous Information",
      "Daily Information",
      "Historical Information",
    ],
    correctAnswer: 0,
    explanation:
      "Present Information is categorized based on the time of occurrence. It strictly refers to information on current issues, day-to-day activities, and transactions.",
  },
  {
    id: "csc304_ch1_024",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Television and radio are provided as examples of hourly information.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false according to the text. Television and radio are explicitly given as examples of Continuous Information, not Hourly Information.",
  },
  {
    id: "csc304_ch1_025",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Information received per month falls under which frequency classification?",
    options: [
      "Annually Information",
      "Continuous Information",
      "Monthly Information",
      "Hourly Information",
    ],
    correctAnswer: 2,
    explanation:
      "The classification based on Frequency of Occurrence lists Monthly Information. This is simply defined as information received per month.",
  },
  {
    id: "csc304_ch1_026",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which method of data processing combines mechanical and electronic units with some machines?",
    options: [
      "Manual Data Processing",
      "Electromechanical Data Processing",
      "Electronic Data Processing",
      "Sensory Data Processing",
    ],
    correctAnswer: 1,
    explanation:
      "The notes define four methods of data processing. Electromechanical Data Processing is specifically described as combining the unit of mechanical and electronic with some machines.",
  },
  {
    id: "csc304_ch1_027",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which method of data processing is characterized as making use of machines without explicitly mentioning electronic components?",
    options: [
      "Manual Data Processing",
      "Mechanical Data Processing",
      "Electromechanical Data Processing",
      "Continuous Data Processing",
    ],
    correctAnswer: 1,
    explanation:
      "Mechanical Data Processing is listed as the second method of data processing. It is defined simply as the type of process that makes use of machines.",
  },
  {
    id: "csc304_ch1_028",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which factor determines the method of data processing based on how time-critical the information requirements are?",
    options: [
      "Size and Type of Business",
      "Link Between Applications",
      "Timing Aspect",
      "Stages of Processing",
    ],
    correctAnswer: 2,
    explanation:
      "Under the factors determining the processing method, the Timing Aspect plays a critical role. The text notes that some information requirements are more or less time critical, bearing heavily on the equipment needed.",
  },
  {
    id: "csc304_ch1_029",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which of the following is considered a factor that determines the method of data processing to be used?",
    options: [
      "Origination of Data",
      "Size and Type of Business",
      "Frequency of Occurrence",
      "Preparation of Data",
    ],
    correctAnswer: 1,
    explanation:
      "The notes list three specific factors that determine the method of data processing. 'Size and Type of Business' is the first factor, as larger companies require larger computers.",
  },
  {
    id: "csc304_ch1_030",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "If data is needed for more than one information requirement, which factor suggests a different method of processing may be needed?",
    options: [
      "Link Between Applications",
      "Timing Aspect",
      "Size and Type of Business",
      "Origination of Data",
    ],
    correctAnswer: 0,
    explanation:
      "The 'Link Between Applications' is one of the three factors determining the processing method. It states that shared data across applications may suggest a different processing approach.",
  },
  {
    id: "csc304_ch1_031",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In the stages of data processing, what is another name for the Origination of Data?",
    options: [
      "Data Processing",
      "Data Collection",
      "Data Rearranging",
      "Data Output",
    ],
    correctAnswer: 1,
    explanation:
      "The first stage of data processing is the Origination of Data. The notes state that this stage is also known as Data Collection, where data are obtained from various resources.",
  },
  {
    id: "csc304_ch1_032",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "During which stage of data processing are data classified, folded, and rearranged?",
    options: [
      "Origination of Data",
      "Preparation of Data for Input",
      "Input of Data",
      "Processing of Data",
    ],
    correctAnswer: 1,
    explanation:
      "The 'Preparation of Data for Input' is the second stage of data processing. At this stage, data are made ready for further use by classifying, folding, and rearranging.",
  },
  {
    id: "csc304_ch1_033",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In which stage of data processing are the results given out in the form of reports, analysis, or invoices?",
    options: [
      "Origination of Data",
      "Input",
      "Processing of Data",
      "Output of Information",
    ],
    correctAnswer: 3,
    explanation:
      "The final stage of the process is the Output of Information. This is when the results of the processing are given out as information, including documents and payrolls.",
  },
  {
    id: "csc304_ch1_034",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In the differences between data and information, what is stated about their specification?",
    options: [
      "Data is specific, information is not specific",
      "Data is not specific, information is specific",
      "Both are highly specific",
      "Neither are specific",
    ],
    correctAnswer: 1,
    explanation:
      "The table differentiating data and information covers specification. It clearly labels data as 'Not specific' and information as 'Specific'.",
  },
  {
    id: "csc304_ch1_035",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "If a computer is used during the Input stage of data processing, the data is inputted directly into the computer system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The section detailing the Input stage explicitly confirms this. It states that if a computer is used, the data is inputted directly into the system by the responsible department.",
  },
  {
    id: "csc304_ch1_036",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "How is a data structure defined in the provided notes?",
    options: [
      "A method for creating user interfaces",
      "A way of organizing and storing data so it can be accessed efficiently",
      "A tool for generating continuous information",
      "A database used exclusively for financial statements",
    ],
    correctAnswer: 1,
    explanation:
      "Chapter 2 defines a Data Structure directly at the beginning. It is a way of organizing and storing data so it can be accessed and modified efficiently.",
  },
  {
    id: "csc304_ch1_037",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which data structure is described as a collection of elements stored in a contiguous memory location?",
    options: ["List", "Dictionary", "Array", "Queue"],
    correctAnswer: 2,
    explanation:
      "An Array is defined as a collection of elements stored in a contiguous memory location. This means the elements are stored in sequential order.",
  },
  {
    id: "csc304_ch1_038",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In Python, what symbol is used to represent an array according to the notes?",
    options: ["{ }", "( )", "[ ]", "< >"],
    correctAnswer: 2,
    explanation:
      "The notes indicate that an array in Python can be accessed using an index. It uses the square brackets `[ ]` symbol.",
  },
  {
    id: "csc304_ch1_039",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "What statement is used in Python to help implement an array according to the module section?",
    options: [
      "import structure",
      "import list",
      "import array",
      "import queue",
    ],
    correctAnswer: 2,
    explanation:
      "The notes specify that Python has a module to help implement an array. The provided syntax for this is `import array`.",
  },
  {
    id: "csc304_ch1_040",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "A list is an exact replica of an array because it always has a fixed size.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The notes state that a list is a dynamic version of an array. It explicitly mentions that a list does *not* have a fixed size.",
  },
  {
    id: "csc304_ch1_041",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which data structure is described as a dynamic version of an array that does not have a fixed size?",
    options: ["Stack", "List", "Queue", "Dictionary"],
    correctAnswer: 1,
    explanation:
      "A List is described as being like an array but as an ordered collection of an element. Its primary distinction is being a dynamic version of an array without a fixed size.",
  },
  {
    id: "csc304_ch1_042",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which two operations are specifically mentioned in the notes as being used to modify a List?",
    options: [
      "Push and Pop",
      "Enqueue and Dequeue",
      "Append and Remove",
      "Peek and Pop",
    ],
    correctAnswer: 2,
    explanation:
      "When discussing lists, the notes state you can add and remove items. The specific Python examples provided are `customer.append` and `customer.remove`.",
  },
  {
    id: "csc304_ch1_043",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which data structure is based on a First In First Out (FIFO) arrangement?",
    options: ["Dictionary", "List", "Stack", "Queue"],
    correctAnswer: 3,
    explanation:
      "The Queue is explicitly defined as an arrangement of First In First Out (FIFO) implementation. Elements enter one way and exit the other.",
  },
  {
    id: "csc304_ch1_044",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "In a Queue, where does the Enqueue operation take place?",
    options: [
      "Only at the head",
      "Only at the front",
      "Only at the back",
      "Anywhere in the middle",
    ],
    correctAnswer: 2,
    explanation:
      "The notes break down queue operations specifically. For Enqueue, it states that it can only take place at the back.",
  },
  {
    id: "csc304_ch1_045",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "The Dequeue operation involves removing an element from the head or front of the queue.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is explicitly true based on the Queue section. The notes define Dequeue as 'Remove from the head/front'.",
  },
  {
    id: "csc304_ch1_046",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which data structure is based on a Last In First Out (LIFO) arrangement?",
    options: ["Queue", "Stack", "List", "Array"],
    correctAnswer: 1,
    explanation:
      "A Stack is defined by the operations that take place on it. It is explicitly labeled as a Last In First Out (LIFO) implementation.",
  },
  {
    id: "csc304_ch1_047",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which operation is used to add an element to a Stack?",
    options: ["Pop", "Push", "Peek", "Append"],
    correctAnswer: 1,
    explanation:
      "Under the Stack section, three specific operations are listed. Push is defined as the operation used to add an element to the stack.",
  },
  {
    id: "csc304_ch1_048",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which operation is used to check an element from a Stack without necessarily removing it?",
    options: ["Peek", "Pop", "Push", "Dequeue"],
    correctAnswer: 0,
    explanation:
      "The Peek operation is associated with a Stack. The notes describe it as the operation used to check an element from the stack.",
  },
  {
    id: "csc304_ch1_049",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "Which data structure consists of a Key and the value of the Key?",
    options: ["Array", "Dictionary", "Stack", "Queue"],
    correctAnswer: 1,
    explanation:
      "A Dictionary is defined in the final section. It is described as comprising a Key and the value of the Key.",
  },
  {
    id: "csc304_ch1_050",
    course: "CSC 304",
    chapter: "Chapter 1",
    text: "A dictionary is usually embedded in square brackets.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The notes specify that a dictionary is usually embedded in curly braces, not square brackets.",
  },
];

export default csc304Chapter1;
