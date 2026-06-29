import { QuestionV2 } from "@/lib/quiz-types";

const csc304Chapter3: QuestionV2[] = [
  {
    id: "csc304_ch3_001",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the basic element of data that contains a single value and is characterised by its length and data type?",
    options: ["File", "Record", "Field", "Character"],
    correctAnswer: 2,
    explanation:
      "A field is defined as the basic element of data containing a single value. It is characterised by its length and data type, such as ASCII or string.",
  },
  {
    id: "csc304_ch3_002",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A record is a collection of related fields that can be treated as a unit by an application program.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The text explicitly states that a record is a collection of related fields treated as a unit by an application program. An example provided is an employee record containing various related fields.",
  },
  {
    id: "csc304_ch3_003",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "How does a file most often exist in modern information systems?",
    options: [
      "As an isolated entity purely for batch processing",
      "As part of a database consisting of interrelated data",
      "As a temporary block of data discarded after execution",
      "As a standalone physical device driver",
    ],
    correctAnswer: 1,
    explanation:
      "In modern information systems, files most often exist as parts of a database. A database is defined as an organised collection of interrelated data.",
  },
  {
    id: "csc304_ch3_004",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of file contains relatively permanent information, is long-lasting, and requires constant maintenance?",
    options: [
      "Transaction File",
      "Master File",
      "Reference File",
      "Movement File",
    ],
    correctAnswer: 1,
    explanation:
      "A Master File contains relatively permanent information and is long-lasting. Its primary requirement is constant maintenance to keep the permanent records up to date.",
  },
  {
    id: "csc304_ch3_005",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A system requires a file to periodically update the master file, after which it is discarded. Which file type fits this description?",
    options: [
      "Master File",
      "Reference File",
      "Indexed File",
      "Transaction File",
    ],
    correctAnswer: 3,
    explanation:
      "A Transaction File changes periodically and is used specifically to update the master file. It has a short lifespan and is typically discarded after use.",
  },
  {
    id: "csc304_ch3_006",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "By what alternative name is a Transaction File also known?",
    options: ["Movement File", "Static File", "Archive File", "Reference File"],
    correctAnswer: 0,
    explanation:
      "The notes explicitly state that a Transaction File is also known as a Movement File. This file type has a short lifespan and is used to update the master file.",
  },
  {
    id: "csc304_ch3_007",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A master file has a short lifespan and is typically discarded immediately after it is used in a system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "A master file contains relatively permanent information and is long-lasting. It is the transaction file that has a short lifespan and is discarded after use.",
  },
  {
    id: "csc304_ch3_008",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file type is relatively permanent, changes with time, and is primarily used for validation purposes?",
    options: [
      "Reference File",
      "Master File",
      "Transaction File",
      "Movement File",
    ],
    correctAnswer: 0,
    explanation:
      "A Reference File is used for reference and validation. While it is relatively permanent, it does change over time, unlike a purely static archive.",
  },
  {
    id: "csc304_ch3_009",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which component serves as a unique identifier for each record within a file?",
    options: ["Secondary Key", "Foreign Key", "Primary Key", "Master Key"],
    correctAnswer: 2,
    explanation:
      "A Primary Key is explicitly defined as a unique identifier for each record. It ensures that every record can be distinctly identified within the file.",
  },
  {
    id: "csc304_ch3_010",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the primary purpose of a Foreign Key in a file system?",
    options: [
      "To serve as a unique identifier for its own record",
      "To act as a reference to the primary key of another record or table",
      "To aid in searching for a group of records",
      "To validate relatively permanent information",
    ],
    correctAnswer: 1,
    explanation:
      "A Foreign Key is used as a reference to the primary key of another record or table. This helps establish relationships between different data sets.",
  },
  {
    id: "csc304_ch3_011",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which key is specifically utilised to identify a group of records and aid in searches?",
    options: ["Primary Key", "Secondary Key", "Foreign Key", "Hash Key"],
    correctAnswer: 1,
    explanation:
      "A Secondary Key is used to identify a group of records rather than a unique individual record. Its main function is to aid in searches.",
  },
  {
    id: "csc304_ch3_012",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In UNIX operating systems, the file names MYFILE, myfile, and MyFile are all treated as the exact same file.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "UNIX is case-sensitive, meaning MYFILE, myfile, and MyFile are treated as three completely different files. Windows, conversely, is case-insensitive and treats them as the same.",
  },
  {
    id: "csc304_ch3_013",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Files serve as abstraction mechanisms. What happens to a file name after the process that created it terminates?",
    options: [
      "The file name is automatically deleted",
      "The file name persists and remains available",
      "The file name is temporarily hidden",
      "The file name is reassigned to the OS",
    ],
    correctAnswer: 1,
    explanation:
      "Files provide a way to store information and retrieve it later. When a process creates a file, the given name persists even after the process terminates.",
  },
  {
    id: "csc304_ch3_014",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In a standard file naming convention, what separates the main name from the file extension?",
    options: ["A hyphen (-)", "An underscore (_)", "A dot (.)", "A slash (/)"],
    correctAnswer: 2,
    explanation:
      "A standard file name usually has two parts separated by a dot. The left side is the main name and the right side is the extension.",
  },
  {
    id: "csc304_ch3_015",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In UNIX operating systems, a filename extension is strictly required for all files.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The notes specify that a filename extension is optional in UNIX. In DOS, however, a filename extension is strictly required.",
  },
  {
    id: "csc304_ch3_016",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file attribute is identified as the only human-readable information kept about the file?",
    options: ["File Type", "Location", "File Name", "Size"],
    correctAnswer: 2,
    explanation:
      "The File Name is the symbolic name of the file. It is uniquely identified as the only human-readable information kept about the file.",
  },
  {
    id: "csc304_ch3_017",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file attribute contains access-control information dictating who can read, write, or execute the file?",
    options: ["Usage Count", "Protection", "Location", "File Type"],
    correctAnswer: 1,
    explanation:
      "The Protection attribute holds access-control information. This determines specific permissions regarding who can read, write, and execute the file.",
  },
  {
    id: "csc304_ch3_018",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What does the Usage Count file attribute indicate?",
    options: [
      "The number of characters inside the file",
      "The number of times the file has been modified",
      "The number of processes currently using the file",
      "The physical size of the file in blocks",
    ],
    correctAnswer: 2,
    explanation:
      "The Usage Count attribute tracks active engagement with a file. It specifically indicates the number of processes currently using the file.",
  },
  {
    id: "csc304_ch3_019",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the primary usefulness of the Time, Date & Process ID file attributes?",
    options: [
      "They define the physical location on the disk",
      "They provide the symbolic human-readable name",
      "They are useful for protection and monitoring",
      "They translate OS commands into device instructions",
    ],
    correctAnswer: 2,
    explanation:
      "These attributes record creation time, last modification, and last use. The notes state they are primarily useful for protection and monitoring purposes.",
  },
  {
    id: "csc304_ch3_020",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "The location attribute stores a pointer to the device and the location where the file is physically stored.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Location attribute specifically functions as a pointer. It points directly to the device and the exact location where the file is stored.",
  },
  {
    id: "csc304_ch3_021",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What term refers to the structure of a file defined in terms of its components and how they are mapped onto storage?",
    options: [
      "Access method",
      "File processing",
      "File organisation",
      "File management",
    ],
    correctAnswer: 2,
    explanation:
      "File organisation is the structure of a file based on its components and storage mapping. Access method is the algorithm used for storing and retrieving based on that structure.",
  },
  {
    id: "csc304_ch3_022",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In which file organisation method are data collected in the exact order they arrive, with no sorting and each field being self-describing?",
    options: [
      "Sequential File",
      "Pile / Serial",
      "Direct File",
      "Indexed File",
    ],
    correctAnswer: 1,
    explanation:
      "The Pile or Serial organisation is the simplest form where data is collected as it arrives. There is no sorting, and each field is self-describing.",
  },
  {
    id: "csc304_ch3_023",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "How are records primarily stored in a Sequential File organisation?",
    options: [
      "In completely random order",
      "Based on a direct hashing calculation",
      "In a key sequence, either alphabetical or numerical",
      "Using an exhaustive index",
    ],
    correctAnswer: 2,
    explanation:
      "In a Sequential File, records are stored in a specific key sequence. This sequence is typically alphabetical or numerical.",
  },
  {
    id: "csc304_ch3_024",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation is the ONLY one that works effectively on magnetic tape?",
    options: [
      "Indexed Sequential File",
      "Sequential File",
      "Hash File",
      "Direct File",
    ],
    correctAnswer: 1,
    explanation:
      "The Sequential File is the most common organisation and operates strictly in order. It is explicitly noted as the only file organisation that works on magnetic tape.",
  },
  {
    id: "csc304_ch3_025",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Indexed Sequential Access Method (ISAM) uses an overflow file to properly handle new records.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "ISAM maintains sequential ordering but adds an index for random access. It also specifically uses an overflow file to handle new records.",
  },
  {
    id: "csc304_ch3_026",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A banking system requires sequential processing of large records but occasional direct access. Which organisation is most suitable?",
    options: [
      "Pile / Serial",
      "Direct / Hashed",
      "Indexed Sequential (ISAM)",
      "Pure Sequential",
    ],
    correctAnswer: 2,
    explanation:
      "Indexed Sequential (ISAM) offers a mixed access method that is fast. It is highly suited for systems like banking or airlines requiring both sequential processing and direct access.",
  },
  {
    id: "csc304_ch3_027",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation abandons the single-key limitation and allows records to be accessed through multiple indexes?",
    options: [
      "Indexed File",
      "Sequential File",
      "Pile / Serial",
      "Hashed File",
    ],
    correctAnswer: 0,
    explanation:
      "An Indexed File abandons the single-key limitation by using multiple indexes. This allows placement to be unrestricted and supports variable-length records.",
  },
  {
    id: "csc304_ch3_028",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Within an Indexed File, what describes an index that contains exactly one entry per record?",
    options: [
      "Partial index",
      "Exhaustive index",
      "Primary index",
      "Sequential index",
    ],
    correctAnswer: 1,
    explanation:
      "An exhaustive index contains one entry per record in the file. A partial index only contains entries for records where a specific field of interest exists.",
  },
  {
    id: "csc304_ch3_029",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation completely eliminates the need for an index by computing a record's physical location directly?",
    options: [
      "Indexed Sequential File",
      "Direct / Hashed File",
      "Sequential File",
      "Pile File",
    ],
    correctAnswer: 1,
    explanation:
      "A Direct or Hashed File uses hashing on the key value to directly compute a physical location. This approach entirely removes the need for an index.",
  },
  {
    id: "csc304_ch3_030",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "For which type of application is the Direct / Hashed file organisation most optimal due to its very fast access speed?",
    options: [
      "Payroll Systems",
      "Magnetic Tape Backup",
      "Real-Time Applications",
      "Batch Updating",
    ],
    correctAnswer: 2,
    explanation:
      "Direct / Hashed files use a hash function to provide very fast access. They are optimally designed for Real-Time Applications where records are accessed one at a time rapidly.",
  },
  {
    id: "csc304_ch3_031",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In file maintenance, what does the insertion operation specifically achieve?",
    options: [
      "Making changes to existing records",
      "Removing a record no longer needed",
      "Adding a new record to a file",
      "Arranging records in numerical order",
    ],
    correctAnswer: 2,
    explanation:
      "File maintenance involves keeping a file up to date. The insertion operation is explicitly defined as adding a new record to a file.",
  },
  {
    id: "csc304_ch3_032",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "File maintenance involves keeping a file up-to-date so it accurately reflects current information.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The fundamental definition of File Maintenance is keeping a file up-to-date. This ensures the system always reflects current information through insertion, deletion, and updating.",
  },
  {
    id: "csc304_ch3_033",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is a primary reason why file maintenance is important?",
    options: [
      "It prevents hardware failures",
      "It automatically writes device driver code",
      "It prevents duplication",
      "It eliminates the need for secondary storage",
    ],
    correctAnswer: 2,
    explanation:
      "File maintenance is critical for data integrity. The notes list improving accuracy, preventing duplication, and supporting business operations as its key importances.",
  },
  {
    id: "csc304_ch3_034",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following represents a significant challenge to effective file maintenance?",
    options: [
      "The use of multiple indexes",
      "Unauthorised access such as fire incidents",
      "The presence of exhaustive indexes",
      "The generation of I/O requests",
    ],
    correctAnswer: 1,
    explanation:
      "Challenges of file maintenance include human error, hardware failure, and unauthorised access. The notes specifically cite fire incidents as an example where files are inadequately protected.",
  },
  {
    id: "csc304_ch3_035",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation brings file information up to date by feeding in current data?",
    options: ["Updating", "Sorting", "Merging", "Matching"],
    correctAnswer: 0,
    explanation:
      "Updating is a direct file processing operation. It involves bringing file information completely up to date by feeding in current data.",
  },
  {
    id: "csc304_ch3_036",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What does the sorting operation achieve during file processing?",
    options: [
      "Combining two files into a larger one",
      "Arranging records in a particular alphabetical or numerical order",
      "Locating a record using one or more file attributes",
      "Grouping records into fixed blocks",
    ],
    correctAnswer: 1,
    explanation:
      "Sorting is the operation of organising data systematically. It involves arranging records in a particular order, either alphabetically or numerically.",
  },
  {
    id: "csc304_ch3_037",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which operation logically groups records into fixed or variable units that are treated as a single unit during processing?",
    options: ["Blocking", "Merging", "Searching", "Updating"],
    correctAnswer: 0,
    explanation:
      "Blocking physically and logically groups records into blocks treated as a single unit. The space between these blocks is referred to as the inter-block gap.",
  },
  {
    id: "csc304_ch3_038",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Merging involves separating a single large master file into two smaller transaction files.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Merging is the exact opposite of separating. It is explicitly defined as combining two or more files into a single larger file.",
  },
  {
    id: "csc304_ch3_039",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation involves locating a record using one or more file attributes or fields?",
    options: ["Searching", "Sorting", "Matching", "Blocking"],
    correctAnswer: 2,
    explanation:
      "Matching locates a record based on one or more specific file attributes or fields. Searching, in contrast, explicitly uses the key field to locate a record.",
  },
  {
    id: "csc304_ch3_040",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "When going through a file to locate a record specifically using the key field, which operation is being performed?",
    options: ["Sorting", "Matching", "Searching", "Appending"],
    correctAnswer: 2,
    explanation:
      "Searching is the specific operation of locating a record using the key field. This distinguishes it from matching, which uses general file attributes.",
  },
  {
    id: "csc304_ch3_041",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "At the OS level, which file operation allocates space and makes a directory entry for the file?",
    options: ["Opening", "Creating", "Writing", "Appending"],
    correctAnswer: 1,
    explanation:
      "The Creating operation fundamentally initializes a file. It allocates the required space and creates a corresponding directory entry for it.",
  },
  {
    id: "csc304_ch3_042",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the primary function of the Opening file operation at the OS level?",
    options: [
      "It frees internal table space when access is completed",
      "It loads file attributes and disk addresses into memory for fast access",
      "It removes file content while preserving attributes",
      "It changes the name of an existing file",
    ],
    correctAnswer: 1,
    explanation:
      "Opening a file prepares it for active use. It loads necessary file attributes and disk addresses into memory to ensure fast access.",
  },
  {
    id: "csc304_ch3_043",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS level file operation removes file content but keeps all attributes except file size?",
    options: ["Deleting", "Closing", "Truncating", "Renaming"],
    correctAnswer: 2,
    explanation:
      "Truncating effectively empties a file without destroying its shell. It removes content but keeps all attributes intact, updating only the file size.",
  },
  {
    id: "csc304_ch3_044",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which operation is defined as a restricted WRITE that adds data strictly to the end of the file?",
    options: ["Writing", "Appending", "Repositioning", "Truncating"],
    correctAnswer: 1,
    explanation:
      "Appending is a specific type of write operation. It ensures that data is added only to the end of the file rather than overwriting existing data.",
  },
  {
    id: "csc304_ch3_045",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "The deleting operation at the OS level removes file content but intentionally preserves the directory entry.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Deleting a file completely removes it from the system. It releases allocated space and specifically invalidates the directory entry.",
  },
  {
    id: "csc304_ch3_046",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS file operation sets the current file position to a specific given value?",
    options: ["Renaming", "Opening", "Repositioning (File Seek)", "Appending"],
    correctAnswer: 2,
    explanation:
      "Repositioning, also known as a File Seek, alters where the system is currently looking in the file. It sets the current file position to a given value.",
  },
  {
    id: "csc304_ch3_047",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the primary function of the File Management System (FMS) as a subsystem of an OS?",
    options: [
      "To physically repair damaged hard disks",
      "To manage data storage on secondary storage and provide file-access services",
      "To convert high-level languages into machine code",
      "To execute program instructions line by line",
    ],
    correctAnswer: 1,
    explanation:
      "The FMS manages data storage on secondary storage. It acts as an abstraction layer to provide file-access services to processes, freeing programmers from low-level disk I/O.",
  },
  {
    id: "csc304_ch3_048",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective focuses on simplifying common data access and modification operations to make them device-independent?",
    options: ["Protection", "Concurrency", "Data Management", "Performance"],
    correctAnswer: 2,
    explanation:
      "Data Management aims to simplify data interaction. It ensures that common data access and modification operations are device-independent.",
  },
  {
    id: "csc304_ch3_049",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which objective of the File Management System ensures that stored data always reflects the operations performed on them?",
    options: ["Generality", "Validity", "Protection", "Concurrency"],
    correctAnswer: 1,
    explanation:
      "Validity is crucial for data integrity within an FMS. It ensures that the actual stored data accurately reflects the history of operations performed on it.",
  },
  {
    id: "csc304_ch3_050",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What does the Generality objective of an FMS guarantee?",
    options: [
      "Illegal or dangerous operations on data are controlled",
      "Concurrent access is allowed in multiprogramming systems",
      "Access methods remain unchanged regardless of the storage device",
      "Access speed always matches data transfer rate perfectly",
    ],
    correctAnswer: 2,
    explanation:
      "Generality ensures consistent interaction across hardware. It means access methods remain completely unchanged regardless of the underlying storage device.",
  },
  {
    id: "csc304_ch3_051",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective enables simultaneous access in multiprogramming systems?",
    options: ["Concurrency", "Validity", "Data Management", "Performance"],
    correctAnswer: 0,
    explanation:
      "Concurrency allows multiple processes to interact safely with files. It is explicitly defined as allowing concurrent access in multiprogramming systems.",
  },
  {
    id: "csc304_ch3_052",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "The File Management System frees application programmers from dealing directly with low-level disk I/O.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The FMS provides helpful abstractions like files and records. This explicitly frees application programmers from managing low-level disk I/O operations.",
  },
  {
    id: "csc304_ch3_053",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is an explicit function or user requirement of an FMS?",
    options: [
      "Translating assembly language into machine language",
      "Providing a physical interface to a printer",
      "Backing up and recovering files in case of damage",
      "Generating hardware interrupts for I/O requests",
    ],
    correctAnswer: 2,
    explanation:
      "One of the key user requirements for an FMS is data security. It must be able to back up and recover files in case of system damage.",
  },
  {
    id: "csc304_ch3_054",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Within the I/O System Architecture, which component generates I/O requests and interacts with files through OS services?",
    options: [
      "Device Drivers",
      "I/O Controllers",
      "Operating System",
      "Application Programs",
    ],
    correctAnswer: 3,
    explanation:
      "Application Programs sit at the top of the I/O architecture. Their role is to generate I/O requests and interact with files strictly through OS services.",
  },
  {
    id: "csc304_ch3_055",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What are the specialised programs that translate OS commands into device-specific instructions?",
    options: [
      "Device Drivers",
      "Compilers",
      "I/O Controllers",
      "Application Programs",
    ],
    correctAnswer: 0,
    explanation:
      "Device Drivers act as translators in the I/O architecture. They take high-level OS commands and translate them into instructions specific hardware can understand.",
  },
  {
    id: "csc304_ch3_056",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which hardware units manage communication directly between the CPU and peripheral devices?",
    options: [
      "Physical Devices",
      "I/O Controllers",
      "Device Drivers",
      "Operating Systems",
    ],
    correctAnswer: 1,
    explanation:
      "I/O Controllers are specific hardware units. Their main function is managing the communication flow between the CPU and peripheral devices.",
  },
  {
    id: "csc304_ch3_057",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the primary function of Utility Software?",
    options: [
      "To translate high-level languages into machine code",
      "To maintain and improve the computer system through protection and optimisation",
      "To physically control the read/write head of a hard disk",
      "To create application software from scratch",
    ],
    correctAnswer: 1,
    explanation:
      "Utility Software is designed for system health. Its primary functions are to maintain the computer system, improve efficiency, and help recover damaged files.",
  },
  {
    id: "csc304_ch3_058",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Utility software is primarily designed to help programmers write assembly language code efficiently.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Utility software is designed to maintain and improve the computer system itself. It is Support Software that helps programmers develop code efficiently.",
  },
  {
    id: "csc304_ch3_059",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which category of software is specifically designed to help programmers develop computer programs efficiently?",
    options: [
      "Utility Software",
      "Support Software",
      "Operating Systems",
      "Device Drivers",
    ],
    correctAnswer: 1,
    explanation:
      "Support software provides tools for developers. Its stated function is to assist programmers in developing software efficiently.",
  },
  {
    id: "csc304_ch3_060",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software translates a high-level language into machine code all at once?",
    options: ["Interpreter", "Assembler", "Debugger", "Compiler"],
    correctAnswer: 3,
    explanation:
      "A Compiler processes code in bulk. It is defined as translating high-level language to machine code all at once.",
  },
  {
    id: "csc304_ch3_061",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "How does an Interpreter handle the execution of computer code?",
    options: [
      "It translates assembly language into machine language",
      "It translates and executes code line by line",
      "It detects and helps fix bugs after compilation",
      "It provides a complete graphic environment for writing code",
    ],
    correctAnswer: 1,
    explanation:
      "An Interpreter works sequentially during runtime. It translates and executes code line by line rather than all at once.",
  },
  {
    id: "csc304_ch3_062",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which tool specifically converts assembly language into machine language?",
    options: ["Debugger", "Compiler", "Assembler", "Interpreter"],
    correctAnswer: 2,
    explanation:
      "An Assembler is a highly specific translation tool. Its only function is converting low-level assembly language into executable machine language.",
  },
  {
    id: "csc304_ch3_063",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the specific role of a Debugger in software development?",
    options: [
      "To translate high-level code all at once",
      "To provide a complete IDE environment",
      "To detect and help fix bugs",
      "To optimize computer file maintenance",
    ],
    correctAnswer: 2,
    explanation:
      "A Debugger is an essential support software tool. Its primary stated function is to detect and help fix bugs in the code.",
  },
  {
    id: "csc304_ch3_064",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "An Integrated Development Environment (IDE) provides a complete environment for writing, running, and debugging programs.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "An IDE combines multiple support software tools. The notes define it as a complete environment for writing, running, and debugging programs.",
  },
  {
    id: "csc304_ch3_065",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective specifically controls illegal or dangerous operations on data?",
    options: ["Validity", "Protection", "Concurrency", "Performance"],
    correctAnswer: 1,
    explanation:
      "Protection ensures the security and stability of the system. It controls and prevents illegal or dangerous operations from being performed on the data.",
  },
];

export default csc304Chapter3;
