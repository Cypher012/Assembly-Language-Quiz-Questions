import { QuestionV2 } from "@/lib/quiz-types";

const csc312Letcure4: QuestionV2[] = [
  {
    id: "csc312_ch3_001",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "According to the Lecture 4 slides, what are the three integrated pillars that form the foundation of modern information systems?",
    options: [
      "Data Capture, Data Management, and Data Communication",
      "System Analysis, System Design, and System Implementation",
      "Input Processing, Memory Storage, and Output Distribution",
      "Technical Feasibility, Operational Feasibility, and Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "Lecture 4 defines the three integrated pillars of information systems as Data Capture, Data Management, and Data Communication.\n\nSystem Analysis, Design, and Implementation are phases of the Systems Development Life Cycle (SDLC) rather than the three pillars of data management.\n\nInput Processing, Memory Storage, and Output Distribution describe the physical hardware architecture of a basic computer system.\n\nTechnical, Operational, and Legal Feasibility represent feasibility assessment categories analyzed during the project planning phase.",
  },
  {
    id: "csc312_ch3_002",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following data quality requirements is defined as the degree to which captured data is correct, free of errors, and reflects real-world facts?",
    options: ["Accuracy", "Completeness", "Timeliness", "Consistency"],
    correctAnswer: 0,
    explanation:
      "The Data Capture section states that Accuracy is the requirement that data must be correct, precise, and free of errors.\n\nCompleteness refers to the requirement that all mandatory data elements are fully recorded without missing items.\n\nTimeliness means that data must be entered and updated quickly enough to remain useful for decision-making.\n\nConsistency means that data values must remain uniform and non-contradictory across different parts of the system.",
  },
  {
    id: "csc312_ch3_003",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A bank requires all online mortgage forms to have every mandatory field, including the applicant's name and salary, fully populated. This satisfies which data quality requirement?",
    options: ["Completeness", "Accuracy", "Timeliness", "Consistency"],
    correctAnswer: 0,
    explanation:
      "The Data Capture section defines Completeness as ensuring all required data fields are completely captured and no essential pieces are omitted.\n\nAccuracy refers to the correctness and truthfulness of the recorded data, not whether all fields are filled.\n\nTimeliness refers to how quickly data is recorded after an event occurs, ensuring it is up to date.\n\nConsistency ensures that the same data does not contradict itself across different system tables.",
  },
  {
    id: "csc312_ch3_004",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "An inventory system updates product stock levels within 5 seconds of a sale occurring at the cash register. This design addresses which data quality requirement?",
    options: ["Timeliness", "Accuracy", "Completeness", "Consistency"],
    correctAnswer: 0,
    explanation:
      "The Data Capture section defines Timeliness as ensuring data is captured and made available to the system in a prompt manner to reflect current reality.\n\nAccuracy guarantees that the stock count values are correct and free from human error.\n\nCompleteness ensures that all sales details are captured fully, rather than just the time of the transaction.\n\nConsistency ensures that the stock count matches across the physical shelf and the digital screen database.",
  },
  {
    id: "csc312_ch3_005",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "If a user's address is listed as Lagos in the customer table but listed as Ibadan in the shipping table, which data quality requirement is violated?",
    options: ["Consistency", "Accuracy", "Completeness", "Timeliness"],
    correctAnswer: 0,
    explanation:
      "Consistency requires that data remains uniform and does not conflict across different tables, files, or locations in the system.\n\nAccuracy is the correctness of the address itself, which is a different issue than having conflicting records.\n\nCompleteness means the address has all required parts like street and city, which is not what is being violated here.\n\nTimeliness relates to how recently the address was updated, not whether two concurrent fields have different values.",
  },
  {
    id: "csc312_ch3_006",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In systems design, what is the core meaning of the classic system design principle GIGO?",
    options: [
      "Garbage in, garbage out; poor data capture leads to poor business decisions",
      "Gather inputs, generate outputs; all system actions must follow a strict process flow",
      "Go-live is general operational; systems are only valuable after they are deployed",
      "Govern internal, guide external; system boundaries must control data transfers",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that the GIGO principle means 'Garbage in, garbage out', highlighting that poor data capture quality inevitably leads to poor systems and bad business decisions.\n\n'Gather inputs, generate outputs' is a plausible-sounding distractor that does not represent the GIGO acronym.\n\n'Go-live is general operational' is a fabricated term not mentioned in the slides.\n\n'Govern internal, guide external' is a fictitious design concept not present in OAU SAD course materials.",
  },
  {
    id: "csc312_ch3_007",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following data capture methods relies on structured paper forms that are later manually transcribed into a digital interface by data entry staff?",
    options: [
      "Source Document Paper-based",
      "Direct Keyboard Entry",
      "Optical Mark Recognition (OMR)",
      "Radio Frequency Identification (RFID)",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Capture methods slide describes the Source Document Paper-based method as using structured physical forms that require manual transcription by system operators.\n\nDirect Keyboard Entry bypasses physical paper by having operators type information straight into digital forms during the live event.\n\nOptical Mark Recognition is an automated scan method where machine sensors read dark pencil marks, eliminating manual transcription.\n\nRadio Frequency Identification is a fully wireless, contact-free automated capture method using radio signals.",
  },
  {
    id: "csc312_ch3_008",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A customer service representative types a caller's credit card details directly into an active database form during a telephone call. This represents which data capture method?",
    options: [
      "Direct Keyboard Entry",
      "Source Document Paper-based",
      "Magnetic Ink Character Recognition (MICR)",
      "Optical Character Recognition (OCR)",
    ],
    correctAnswer: 0,
    explanation:
      "Direct Keyboard Entry is the method where data is typed straight into the information system as the event occurs, bypassing manual paper steps.\n\nSource Document Paper-based requires writing on paper first and entering it into a computer system at a later time.\n\nMagnetic Ink Character Recognition uses magnetized ink reader devices to capture formatted numbers, commonly on bank checks.\n\nOptical Character Recognition converts physical text images into machine-encoded text through a visual scanner.",
  },
  {
    id: "csc312_ch3_009",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which automated data capture technology is specifically utilized by banks to scan the magnetized account numbers printed at the bottom of financial checks?",
    options: [
      "Magnetic Ink Character Recognition (MICR)",
      "Optical Mark Recognition (OMR)",
      "Optical Character Recognition (OCR)",
      "Radio Frequency Identification (RFID)",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that Magnetic Ink Character Recognition (MICR) is used by banking systems to read numbers printed in magnetic ink at the bottom of checks.\n\nOptical Mark Recognition detects dark marks in specific positions, such as answers on standardized exam sheets.\n\nOptical Character Recognition visually reads standard typed characters from scanned documents, not magnetic patterns.\n\nRadio Frequency Identification uses electromagnetic radio waves to track items, not printed characters.",
  },
  {
    id: "csc312_ch3_010",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "According to the GIGO principle in Lecture 4, the quality of system outputs is directly dependent on the quality of system inputs.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The GIGO (Garbage In, Garbage Out) principle states that if poor quality or incorrect data is captured as input, the resulting system output and decisions will also be of poor quality.",
  },
  {
    id: "csc312_ch3_011",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Standardized examinations like the Joint Admissions and Matriculation Board (JAMB) use scanner systems to detect dark pencil marks on answer sheets. What is this technology?",
    options: [
      "Optical Mark Recognition (OMR)",
      "Optical Character Recognition (OCR)",
      "Magnetic Ink Character Recognition (MICR)",
      "Radio Frequency Identification (RFID)",
    ],
    correctAnswer: 0,
    explanation:
      "Optical Mark Recognition (OMR) is an automated data capture method designed to detect dark marks on paper sheets in designated areas, such as exam sheets.\n\nOptical Character Recognition (OCR) converts scanned image text into editable digital text strings, rather than checking simple positional marks.\n\nMagnetic Ink Character Recognition (MICR) reads special magnetic numbers printed on checks to identify banking details.\n\nRadio Frequency Identification (RFID) uses wireless radio waves and microchips to track physical assets.",
  },
  {
    id: "csc312_ch3_012",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A logistics system uses visual scanners to read standard printed vertical black lines on shipping boxes to retrieve product details. What is this method?",
    options: [
      "Barcode Scanning",
      "Radio Frequency Identification (RFID)",
      "Optical Mark Recognition (OMR)",
      "Magnetic Ink Character Recognition (MICR)",
    ],
    correctAnswer: 0,
    explanation:
      "The slides identify Barcode Scanning as a standard optical data capture method that reads printed parallel black lines to identify products.\n\nRadio Frequency Identification uses radio transmitters and transponder chips to send product details wirelessly without optical line-of-sight.\n\nOptical Mark Recognition identifies positional marks on paper sheets rather than reading vertical bar patterns on boxes.\n\nMagnetic Ink Character Recognition reads special magnetic characters on financial checks, not barcodes.",
  },
  {
    id: "csc312_ch3_013",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which automated data capture method uses microchips and electromagnetic radio signals to identify, track, and locate physical assets without requiring direct line-of-sight visual scanning?",
    options: [
      "Radio Frequency Identification (RFID)",
      "Barcode Scanning",
      "Optical Character Recognition (OCR)",
      "Optical Mark Recognition (OMR)",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that Radio Frequency Identification (RFID) uses microchips and radio signals to track objects wirelessly without requiring optical line-of-sight.\n\nBarcode Scanning is an optical method that requires a clean, unobstructed visual line-of-sight to read parallel lines.\n\nOptical Character Recognition processes document images to extract typed text strings visually.\n\nOptical Mark Recognition scans pencil marks on formatted exam sheets visually.",
  },
  {
    id: "csc312_ch3_014",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A system validation rule checks that a student's age field only accepts numeric values and rejects letters. This represents which type of validation?",
    options: [
      "Format Check (Data Type)",
      "Range Check",
      "Presence Check",
      "Consistency Check",
    ],
    correctAnswer: 0,
    explanation:
      "Format Check (Data Type) verifies that entered data matches the expected syntax, character set, or numeric pattern, such as rejecting letters in an age field.\n\nRange Check verifies that a numeric value falls within a specified minimum and maximum boundary, such as an age between 16 and 99.\n\nPresence Check verifies that a mandatory field is not left empty, regardless of the data type entered.\n\nConsistency Check compares the entered value against other fields to ensure there are no logical contradictions.",
  },
  {
    id: "csc312_ch3_015",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is an established technique used during data capture to validate the correctness of entered data?",
    options: [
      "Range Check",
      "Binary Translation",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The slides list Range Check as one of the six standard data validation techniques (along with Format, Presence, Consistency, Length, and Check Digit). Binary Translation is a compilation process, not a validation technique, meaning option 1 is the only correct specific choice.",
  },
  {
    id: "csc312_ch3_016",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "An online booking system checks that a user's chosen appointment month is between 1 and 12, and the day is between 1 and 31. What validation technique is this?",
    options: ["Range Check", "Presence Check", "Length Check", "Check Digit"],
    correctAnswer: 0,
    explanation:
      "A Range Check ensures that a numeric value falls within acceptable minimum and maximum mathematical boundaries, such as month numbers 1 to 12.\n\nPresence Check simply verifies that the field has been filled in and is not null, without analyzing specific numeric boundaries.\n\nLength Check checks if the entered string has exactly the required number of characters, rather than checking numeric boundaries.\n\nCheck Digit is an algorithm-based character appended to an ID to detect transcription errors during data entry.",
  },
  {
    id: "csc312_ch3_017",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "An e-commerce portal prevents a user from submitting an order because the email address field is completely empty. What data validation technique is being used?",
    options: [
      "Presence Check",
      "Range Check",
      "Length Check",
      "Consistency Check",
    ],
    correctAnswer: 0,
    explanation:
      "Presence Check is a validation rule that ensures mandatory fields are populated with data before processing can continue.\n\nRange Check validates that numeric inputs stay within minimum and maximum limits, which is not applicable to verifying if an input exists.\n\nLength Check measures the character count of an input to ensure it meets constraints, whereas a presence check verifies if there is any input at all.\n\nConsistency Check verifies that two or more separate inputs do not logically contradict one another.",
  },
  {
    id: "csc312_ch3_018",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A system requires a customer password to contain between 8 and 16 characters. This validation rule is classified as which of the following?",
    options: ["Length Check", "Presence Check", "Format Check", "Range Check"],
    correctAnswer: 0,
    explanation:
      "Length Check validates that the character count of an entered string falls within specific size limits, such as a password between 8 and 16 characters.\n\nPresence Check verifies if any text is present in the field, but does not measure the specific character count.\n\nFormat Check checks for matching specific patterns, such as an email address containing an @ symbol, rather than counting characters.\n\nRange Check is used for numeric values to ensure they fall within logical minimum and maximum boundaries.",
  },
  {
    id: "csc312_ch3_019",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A validation system flags an entry because a patient is listed as Pregnant, but their gender field is recorded as Male. What type of validation technique is this?",
    options: [
      "Consistency Check",
      "Presence Check",
      "Length Check",
      "Check Digit",
    ],
    correctAnswer: 0,
    explanation:
      "Consistency Check verifies that two or more separate data fields are logically compatible and do not contradict each other.\n\nPresence Check ensures that the gender and medical fields are not left empty, but it does not check if their values make sense together.\n\nLength Check validates the number of characters in a string, which is unrelated to identifying medical contradictions.\n\nCheck Digit is an algebraic verification digit used to validate identification numbers, not logical fields.",
  },
  {
    id: "csc312_ch3_020",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In systems analysis, a Presence Check is used to ensure that a numeric value falls within a set of minimum and maximum boundaries.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "A Presence Check simply ensures that a mandatory field is not left empty. The technique used to verify that a numeric value falls within minimum and maximum boundaries is a Range Check.",
  },
  {
    id: "csc312_ch3_021",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "What is the term for the extra verification character appended to an identification number (like an ISBN or credit card) that is calculated using a mathematical algorithm to detect transcription errors?",
    options: [
      "Check Digit",
      "Format Character",
      "Consistency Value",
      "Presence Marker",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that a Check Digit is a redundant digit added to a code, calculated using an algorithm to verify data entry accuracy and detect typos.\n\nFormat Character is a general formatting term, not an algorithmic verification digit.\n\nConsistency Value is a fictitious term not used to describe mathematical identification checks.\n\nPresence Marker is a fictitious term not mentioned in course materials.",
  },
  {
    id: "csc312_ch3_022",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Under the Data Management section, what is the major drawback of the traditional file-processing approach that database management systems (DBMS) are designed to solve?",
    options: [
      "Data Redundancy and Inconsistency",
      "Lack of support for structured programming languages",
      "High storage overhead for keeping binary indexes",
      "Excessive network transmission bandwidth requirements",
    ],
    correctAnswer: 0,
    explanation:
      "The Data Management slides state that traditional file-processing systems suffer from data redundancy (duplicate files) and inconsistency (different values for the same data).\n\nTraditional files are easily accessed by structured languages, so a lack of language support is not their main drawback.\n\nDBMS systems actually require higher index storage overhead than flat file systems, making this option incorrect.\n\nNetwork bandwidth is a transmission concern, not a structural file-processing defect solved by DBMS design.",
  },
  {
    id: "csc312_ch3_023",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "When a small change to a physical file structure requires developers to rewrite all the application programs that access that file, the system exhibits high what?",
    options: [
      "Data Dependency",
      "Data Redundancy",
      "Data Inconsistency",
      "Data Security",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that file-processing systems have high Data Dependency, meaning the file structure is tightly coupled with the application code, so changing the file breaks the program.\n\nData Redundancy refers to storing the same data in multiple different files across the system.\n\nData Inconsistency refers to duplicate fields containing different, contradictory values over time.\n\nData Security refers to the protection of system files from unauthorized access, which is unrelated to structure dependency.",
  },
  {
    id: "csc312_ch3_024",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following database concepts provides a complete separation between the logical view of data and the physical storage structure, solving data dependency?",
    options: [
      "Database Management System (DBMS)",
      "Traditional File System",
      "Source Document Processing",
      "Manual Ledger System",
    ],
    correctAnswer: 0,
    explanation:
      "A Database Management System (DBMS) acts as a software interface between application programs and physical data files, providing data independence.\n\nTraditional File System suffers from tight data dependency, where applications must know the physical storage layout to access data.\n\nSource Document Processing is a data capture phase activity, not an architectural database storage system.\n\nManual Ledger System is a paper-based record-keeping system that does not feature logical database models.",
  },
  {
    id: "csc312_ch3_025",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is a recognized disadvantage of adopting a Database Management System (DBMS) compared to traditional file-processing?",
    options: [
      "Higher organizational cost and complexity",
      "Increased data redundancy",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The database slides state that DBMS implementation carries disadvantages of high initial setup cost, specialized hardware requirements, and increased structural complexity. DBMS actively reduces data redundancy, making option 2 incorrect, and therefore option 1 is the only correct choice.",
  },
  {
    id: "csc312_ch3_026",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the relational database model, a table represents a logical entity and is formally referred to as which of the following terms?",
    options: ["Relation", "Tuple", "Attribute", "Schema"],
    correctAnswer: 0,
    explanation:
      "In relational model terminology, a table is formally referred to as a Relation.\n\nTuple is the formal term used to refer to a single row in a table.\n\nAttribute is the formal term used to refer to a column in a table.\n\nSchema represents the complete structural metadata and layout of the database, not a single table.",
  },
  {
    id: "csc312_ch3_027",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In relational database design, a single horizontal row within a table represents a unique record and is formally called a what?",
    options: ["Tuple", "Relation", "Attribute", "Domain"],
    correctAnswer: 0,
    explanation:
      "The slides state that in relational terminology, a table row is formally called a Tuple.\n\nRelation is the formal term used to refer to the entire database table.\n\nAttribute is the formal term used to refer to a column or field in a table.\n\nDomain represents the set of all valid values that an attribute is permitted to contain.",
  },
  {
    id: "csc312_ch3_028",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In relational database design, a vertical column represents a specific property of an entity and is formally known as a what?",
    options: ["Attribute", "Tuple", "Relation", "Constraint"],
    correctAnswer: 0,
    explanation:
      "Relational model theory defines a vertical column as an Attribute, which represents a structural property of the relation.\n\nTuple is the formal term for a row in a database table.\n\nRelation is the formal term for the overall table structure.\n\nConstraint represents a validation rule or index enforced on the table columns.",
  },
  {
    id: "csc312_ch3_029",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "What database element consists of one or more columns that uniquely identify each row (tuple) inside a table?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Composite Index",
      "Alternative Key",
    ],
    correctAnswer: 0,
    explanation:
      "The relational database slides define a Primary Key as a column or set of columns that uniquely identifies each tuple in a relation.\n\nForeign Key is a column that references the primary key of another table to establish a logical relationship.\n\nComposite Index is a physical storage structure used to accelerate query speeds across multiple columns, not a unique row identifier.\n\nAlternative Key represents any candidate key that was not selected to be the primary key.",
  },
  {
    id: "csc312_ch3_030",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In relational database design, a vertical column is formally referred to as a Tuple.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "In the relational database model, a vertical column is formally referred to as an Attribute. A Tuple is the formal term for a horizontal row.",
  },
  {
    id: "csc312_ch3_031",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "What database field is used to link two tables together by referencing the primary key column of another table?",
    options: ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"],
    correctAnswer: 0,
    explanation:
      "The slides define a Foreign Key as an attribute in one table that references the primary key in another table to establish relational links.\n\nPrimary Key is the unique identifier for rows inside the local table, not a referencing link.\n\nCandidate Key represents any attribute that has the potential to uniquely identify rows but was not chosen as the primary key.\n\nSuper Key represents any set of attributes that uniquely identifies tuples, including extra unnecessary columns.",
  },
  {
    id: "csc312_ch3_032",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which SQL command is used to retrieve specific columns of data from one or more database tables?",
    options: ["SELECT", "INSERT", "UPDATE", "CREATE"],
    correctAnswer: 0,
    explanation:
      "The basic SQL syntax slide states that SELECT is used to query the database and retrieve records from tables.\n\nINSERT is used to add new rows of data into a table.\n\nUPDATE is used to modify existing values inside database rows.\n\nCREATE is a Data Definition Language command used to build new tables or database schemas.",
  },
  {
    id: "csc312_ch3_033",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In SQL, which clause is used to filter query results and ensure only rows meeting specific conditions are returned?",
    options: ["WHERE", "FROM", "ORDER BY", "GROUP BY"],
    correctAnswer: 0,
    explanation:
      "The basic SQL syntax section explains that the WHERE clause is used to filter query records based on specified logical conditions.\n\nFROM specifies which database table or tables the query should retrieve data from.\n\nORDER BY is used to sort the retrieved records in ascending or descending sequence.\n\nGROUP BY is used to aggregate data rows based on matching values in specified columns.",
  },
  {
    id: "csc312_ch3_034",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which type of database system is designed to handle rapid, day-to-day transaction processing with high volumes of fast read and write operations?",
    options: [
      "Online Transaction Processing (OLTP)",
      "Data Warehouse",
      "Data Mart",
      "Data Lake",
    ],
    correctAnswer: 0,
    explanation:
      "The database comparison slides define OLTP (Online Transaction Processing) as operational systems designed to process immediate transactional queries with high read-write speeds.\n\nData Warehouse is a read-only analytical database used to query large volumes of historical data for business intelligence.\n\nData Mart is a smaller subset of a data warehouse focused on a single business department.\n\nData Lake is a raw repository used to store unstructured or semi-structured big data, not structured transaction processing.",
  },
  {
    id: "csc312_ch3_035",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following describes a key characteristic of an Online Transaction Processing (OLTP) database system?",
    options: [
      "It is optimized for fast, concurrent write operations",
      "It contains highly aggregated historical data for executive reporting",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "OLTP systems are operational databases optimized for immediate, concurrent write-heavy transactions. Historical data aggregation is a characteristic of Data Warehouses, making option 2 incorrect, so option 1 is the correct choice.",
  },
  {
    id: "csc312_ch3_036",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which system type acts as a centralized repository that integrates historical, read-only data consolidated from multiple departments to support business intelligence and executive decision-making?",
    options: [
      "Data Warehouse",
      "Online Transaction Processing (OLTP)",
      "Flat File Directory",
      "Transaction Log Journal",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that a Data Warehouse is an integrated, historical, read-only database designed to support business analysis and decision-making.\n\nOnline Transaction Processing (OLTP) focuses on real-time operational writes, not historical consolidation.\n\nFlat File Directory is a traditional storage approach that lacks relational database capabilities.\n\nTransaction Log Journal is a local database recovery file used to record write operations, not an analytical system.",
  },
  {
    id: "csc312_ch3_037",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In data management, the term 'Big Data' is defined by which three core dimensions?",
    options: [
      "Volume, Variety, and Velocity",
      "Validity, Value, and Verification",
      "Vulnerability, Visibility, and Volatility",
      "Variables, Vectors, and Virtualization",
    ],
    correctAnswer: 0,
    explanation:
      "The slides state that Big Data is characterized by the three V's: Volume (scale of data), Variety (different forms of structured/unstructured data), and Velocity (speed of generation).\n\nValidity, Value, and Verification are terms in data science but are not the primary 3 V's defined in the slides.\n\nVulnerability, Visibility, and Volatility are risk and security dimensions, not Big Data characteristics.\n\nVariables, Vectors, and Virtualization are software engineering and mathematics terms, not the three V's of Big Data.",
  },
  {
    id: "csc312_ch3_038",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which dimension of Big Data refers to the massive physical scale of generated data that exceeds the storage capabilities of traditional database systems?",
    options: ["Volume", "Velocity", "Variety", "Volatility"],
    correctAnswer: 0,
    explanation:
      "The Big Data section defines Volume as the sheer physical scale and massive quantity of data being collected and stored.\n\nVelocity refers to the rapid speed and frequency at which new data is generated and must be processed.\n\nVariety refers to the diverse formats of incoming data, including structured tables, text documents, and raw video.\n\nVolatility is a non-standard Big Data dimension representing how quickly data becomes obsolete, not its physical scale.",
  },
  {
    id: "csc312_ch3_039",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A streaming application must capture and process millions of GPS location pings every single second. This represents which Big Data dimension?",
    options: ["Velocity", "Volume", "Variety", "Value"],
    correctAnswer: 0,
    explanation:
      "The slides define Velocity as the massive speed and high frequency at which data is continuously generated and must be processed in real time.\n\nVolume refers to the absolute physical size of the data storage, not the speed of the incoming stream.\n\nVariety refers to the different formats of data, not the transmission rate.\n\nValue represents the business usefulness of the data, which is not the dimension measuring processing speed.",
  },
  {
    id: "csc312_ch3_040",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In relational database design, the formal term used to refer to a single database table is a Tuple.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "In relational database design, a table is formally referred to as a Relation. A Tuple is the formal term used to describe a single row (record) within a table.",
  },
  {
    id: "csc312_ch3_041",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A database must store structured customer tables, semi-structured JSON server logs, and completely unstructured video uploads. This represents which Big Data dimension?",
    options: ["Variety", "Volume", "Velocity", "Validity"],
    correctAnswer: 0,
    explanation:
      "The slides define Variety as the capacity of Big Data to encompass many different formats, ranging from structured databases to completely unstructured media.\n\nVolume represents the massive physical storage size of the data set, not the diversity of its formats.\n\nVelocity represents the speed and real-time generation rate of the incoming data.\n\nValidity represents the correctness and cleanliness of the data, which is distinct from format diversity.",
  },
  {
    id: "csc312_ch3_042",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Under the Data Communication section, which type of network is restricted to a small geographic area, such as a single office building or school campus?",
    options: [
      "Local Area Network (LAN)",
      "Metropolitan Area Network (MAN)",
      "Wide Area Network (WAN)",
      "Personal Area Network (PAN)",
    ],
    correctAnswer: 0,
    explanation:
      "The slides define a Local Area Network (LAN) as a network that connects computers and devices within a limited, localized geographic area.\n\nMetropolitan Area Network (MAN) spans a larger geographic area, such as a city or municipality.\n\nWide Area Network (WAN) connects networks across massive distances, such as countries or continents.\n\nPersonal Area Network (PAN) is restricted to a very small personal space surrounding an individual, typically within 10 meters.",
  },
  {
    id: "csc312_ch3_043",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "A university campus network connects multiple campus offices across the city of Ife. This city-wide network is classified as what?",
    options: [
      "Metropolitan Area Network (MAN)",
      "Local Area Network (LAN)",
      "Wide Area Network (WAN)",
      "Personal Area Network (PAN)",
    ],
    correctAnswer: 0,
    explanation:
      "The slides define a Metropolitan Area Network (MAN) as a city-wide communication network spanning a larger geographic footprint than a LAN.\n\nLocal Area Network (LAN) is restricted to a single building or localized group of offices, not an entire city.\n\nWide Area Network (WAN) connects systems across massive distances, such as multiple states or countries.\n\nPersonal Area Network (PAN) connects personal devices in the immediate vicinity of a single user.",
  },
  {
    id: "csc312_ch3_044",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which category of network connects systems across national boundaries, continents, or the entire globe, using satellite links and transoceanic cables?",
    options: [
      "Wide Area Network (WAN)",
      "Local Area Network (LAN)",
      "Metropolitan Area Network (MAN)",
      "Personal Area Network (PAN)",
    ],
    correctAnswer: 0,
    explanation:
      "The slides define a Wide Area Network (WAN) as a large-scale network that connects systems across states, countries, or globally.\n\nLocal Area Network (LAN) connects devices within a limited, localized environment like an office building.\n\nMetropolitan Area Network (MAN) spans a city-wide geographic area, not global boundaries.\n\nPersonal Area Network (PAN) is restricted to personal space devices around a single user.",
  },
  {
    id: "csc312_ch3_045",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which of the following is a recognized cellular network standard mentioned in the Lecture 4 slides?",
    options: [
      "3G (supporting mobile internet)",
      "6G (supporting quantum routing)",
      "All of the above",
      "None of the above",
    ],
    correctAnswer: 0,
    explanation:
      "The cellular evolution section lists 2G, 3G, 4G, and 5G. 6G is still in developmental phases and is not listed in the slides, making option 1 the only correct specific choice.",
  },
  {
    id: "csc312_ch3_046",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the evolution of cellular networks, which generation first introduced digital voice transmission, encryption, and the capability to send SMS text messages?",
    options: ["2G", "1G", "3G", "4G"],
    correctAnswer: 0,
    explanation:
      "The cellular evolution slides outline 2G as the generation that introduced digital voice encodings, basic encryption, and short message services (SMS).\n\n1G was the original cellular generation, which relied on insecure analog voice signals and lacked data capabilities.\n\n3G introduced mobile internet browsing, packet-switching, and higher transmission speeds.\n\n4G introduced ultra-high-speed broadband, mobile video streaming, and all-IP networks.",
  },
  {
    id: "csc312_ch3_047",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which generation of cellular networks introduced packet-switching and mobile broadband, allowing users to browse websites on mobile phones?",
    options: ["3G", "2G", "4G", "5G"],
    correctAnswer: 0,
    explanation:
      "The cellular evolution slides state that 3G introduced packet-switching technology and mobile broadband, enabling web browsing and email.\n\n2G introduced digital voice and SMS, but lacked broadband packet-switching capabilities.\n\n4G introduced LTE, true mobile broadband, and high-speed IP streaming.\n\n5G introduced Gbps speeds, ultra-low latency, and massive machine-to-machine IoT.",
  },
  {
    id: "csc312_ch3_048",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which cellular generation transitioned networks to a complete All-IP (Internet Protocol) flat architecture with Long-Term Evolution (LTE) standards?",
    options: ["4G", "3G", "2G", "1G"],
    correctAnswer: 0,
    explanation:
      "The slides outline 4G as the generation that established All-IP flat network architectures with LTE standards for high-speed streaming.\n\n3G introduced packet-switching but still utilized legacy circuit-switched voice channels, unlike 4G's all-IP system.\n\n2G utilized purely digital circuit-switching channels for calls and SMS, not IP networking.\n\n1G relied entirely on analog circuit-switched voice channels with no IP elements.",
  },
  {
    id: "csc312_ch3_049",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which cellular network generation is designed to support gigabit speeds, ultra-low latency, and massive machine-type communications for the Internet of Things (IoT)?",
    options: ["5G", "4G", "3G", "2G"],
    correctAnswer: 0,
    explanation:
      "The cellular evolution section defines 5G as the generation that delivers Gbps data speeds, sub-millisecond latency, and massive IoT scaling.\n\n4G provides high-speed mobile broadband but cannot match 5G's ultra-low latency and IoT density.\n\n3G introduced packet-switching web browsing, which operates at much slower speeds than 5G.\n\n2G is restricted to basic digital voice and SMS services with no modern IoT capacity.",
  },
  {
    id: "csc312_ch3_050",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In a Local Area Network (LAN), computers are connected across multiple countries and continents using satellite links.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "A Local Area Network (LAN) is restricted to a small, localized geographic footprint like a single room, building, or campus. Connecting across countries and continents is done using a Wide Area Network (WAN).",
  },
  {
    id: "csc312_ch3_051",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Under the Wireless Technologies section, which short-range wireless standard is designed to connect personal devices like headphones or keyboards within 10 meters?",
    options: ["Bluetooth", "Wi-Fi", "RFID", "Wireless Sensor Networks (WSN)"],
    correctAnswer: 0,
    explanation:
      "The slides identify Bluetooth as a short-range wireless communication standard designed to connect personal devices within a small 10-meter range.\n\nWi-Fi connects local computers to networks over larger distances, usually up to 100 meters, with higher bandwidth.\n\nRFID uses radio signals to track passive or active tags on objects, not to connect personal devices.\n\nWireless Sensor Networks consist of distributed autonomous sensors used to monitor environmental conditions.",
  },
  {
    id: "csc312_ch3_052",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which technology consists of spatially distributed autonomous devices that cooperate to monitor physical or environmental conditions like temperature or pressure?",
    options: [
      "Wireless Sensor Networks (WSN)",
      "Radio Frequency Identification (RFID)",
      "Bluetooth Personal Networks",
      "Metropolitan Area Networks (MAN)",
    ],
    correctAnswer: 0,
    explanation:
      "The slides define Wireless Sensor Networks (WSN) as a group of spatially distributed autonomous sensors that monitor physical or environmental factors.\n\nRadio Frequency Identification (RFID) tracks physical objects using tags and readers, but does not represent a cooperative sensor network.\n\nBluetooth Personal Networks connect individual user accessories over very short ranges, not environmental sensors.\n\nMetropolitan Area Networks (MAN) are high-speed regional city networks, not distributed sensor nodes.",
  },
  {
    id: "csc312_ch3_053",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which security threat involves sending deceptive emails that mimic legitimate organizations to trick users into revealing sensitive credentials?",
    options: [
      "Phishing",
      "Malware",
      "Eavesdropping",
      "Denial of Service (DoS)",
    ],
    correctAnswer: 0,
    explanation:
      "The security section defines Phishing as a social engineering attack that uses fraudulent emails to steal user credentials or personal data.\n\nMalware is malicious software (like viruses or trojans) designed to infect and damage computers.\n\nEavesdropping is a passive interception attack where a malicious actor monitors network traffic to steal unencrypted data.\n\nDenial of Service is an active attack that attempts to crash a system by overwhelming it with fake requests.",
  },
  {
    id: "csc312_ch3_054",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "What security control acts as a software or hardware barrier that monitors incoming and outgoing network traffic based on configured security rules?",
    options: ["Firewall", "Encryption", "Digital Certificate", "Intrusion Log"],
    correctAnswer: 0,
    explanation:
      "The slides state that a Firewall is a security system that monitors and filters network traffic based on established security rules.\n\nEncryption mathematically encodes data to prevent unauthorized reading, but does not filter network traffic.\n\nDigital Certificate is an electronic document used to verify a server's identity, not a traffic filter.\n\nIntrusion Log is a record of detected security incidents, not an active traffic barrier.",
  },
  {
    id: "csc312_ch3_055",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World real-world case study, which technology was deployed to automate data capture and eliminate manual truck logging at terminal gates?",
    options: [
      "Radio Frequency Identification (RFID)",
      "Manual Source Documents",
      "Check Digit Validation",
      "Eavesdropping Traffic Controls",
    ],
    correctAnswer: 0,
    explanation:
      "The DP World case study states that RFID tags were placed on trucks to automatically capture identification data at terminal gates, eliminating manual logging.\n\nManual Source Documents represent the old system DP World was trying to replace.\n\nCheck Digit Validation is a software-level data verification technique, not a hardware gate-tracking system.\n\nEavesdropping Traffic Controls are network security monitoring tools, not logistics data capture tools.",
  },
  {
    id: "csc312_ch3_056",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the DP World case study, after automatic data capture occurs at the gate, where is the information consolidated for data management?",
    options: [
      "Centralized Database System",
      "Distributed paper journals",
      "Local client hard drives",
      "Regional flat files",
    ],
    correctAnswer: 0,
    explanation:
      "The DP World case study states that a centralized database system was used to manage, store, and integrate all incoming logistics data from various terminals.\n\nDistributed paper journals represent an outdated record system that DP World replaced with automation.\n\nLocal client hard drives would lead to isolated data silos, violating the goal of unified corporate database management.\n\nRegional flat files suffer from data redundancy and dependency issues, which DBMS solves.",
  },
  {
    id: "csc312_ch3_057",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "Which network security protocol encrypts communication between a web browser and an e-commerce server to ensure secure transactions?",
    options: [
      "HTTPS (using SSL/TLS)",
      "Simple SMTP",
      "Standard FTP",
      "Basic HTTP",
    ],
    correctAnswer: 0,
    explanation:
      "The slides explain that HTTPS uses SSL/TLS encryption to protect communication and ensure secure e-commerce transactions.\n\nSimple SMTP is an unencrypted standard mail transfer protocol used to send emails.\n\nStandard FTP is a file transfer protocol that transmits data in plain text, which is highly vulnerable.\n\nBasic HTTP transmits web pages in unencrypted plain text, allowing easy data interception.",
  },
  {
    id: "csc312_ch3_058",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In relational database design, a Primary Key is used to establish relationships by referencing another table's unique identifier.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "A Primary Key is the local unique identifier for rows within a table. The database field used to reference another table's primary key and establish relationships is a Foreign Key.",
  },
  {
    id: "csc312_ch3_059",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "An analyst is checking if a database can handle 50,000 queries per second without latency. This represents an evaluation of what?",
    options: [
      "Technical Feasibility",
      "Economic Feasibility",
      "Operational Feasibility",
      "Legal Feasibility",
    ],
    correctAnswer: 0,
    explanation:
      "Evaluating physical performance capacities, query response speeds, and hardware handling limits falls under Technical Feasibility.\n\nEconomic Feasibility covers project budgets, hardware costs, and cost-benefit analysis calculations.\n\nOperational Feasibility evaluates user support and whether the system fits the daily workflows.\n\nLegal Feasibility evaluates copyright compliance, licensing agreements, and government privacy laws.",
  },
  {
    id: "csc312_ch3_060",
    course: "CSC 312",
    chapter: "Chapter 3",
    text: "In the context of data communication networks, what does the acronym LAN stand for?",
    options: [
      "Local Area Network",
      "Logical Architecture Node",
      "Linear Access Network",
      "Large Associated Network",
    ],
    correctAnswer: 0,
    explanation:
      "The data communication slides state that LAN stands for Local Area Network, which connects systems within a limited local geographic space.\n\nLogical Architecture Node is a fabricated systems analysis term, not a network hardware acronym.\n\nLinear Access Network is a fictitious distractor not mentioned in course slides.\n\nLarge Associated Network is a fictitious distractor not present in OAU SAD materials.",
  },
];

export default csc312Letcure4;
