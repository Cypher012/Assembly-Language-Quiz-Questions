import { QuestionV2 } from "@/lib/quiz-types";

const csc304Chapter3Questions: QuestionV2[] = [
  {
    id: "csc304_ch3_001",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which merging technique combines two or more files by placing one directly after the other, without changing their order?",
    options: [
      "Concatenation",
      "Sequential merging",
      "Sorted merging",
      "Indexed merging"
    ],
    correctAnswer: 0,
    explanation: "Concatenation combines two or more files by placing one directly after the other without changing their order, so File A plus File B simply becomes A followed by B.\n\nSequential merging instead reads records one after another from each file and writes them into a new file, a related but distinct process.\n\nSorted merging instead combines already sorted lists by comparing elements, not simply joining files end to end.\n\nIndexed merging is not one of the named merging techniques in this material."
  },
  {
    id: "csc304_ch3_002",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a reason concatenation is considered a simple form of merging?",
    options: [
      "No comparison is done, and no sorting is required",
      "It requires comparing every element against every other element",
      "It always produces a fully sorted output list",
      "It can only be used on numerical data, never text"
    ],
    correctAnswer: 0,
    explanation: "Concatenation is simple because no comparison is done, no sorting is required, and data is just joined end to end.\n\nComparing every element against every other element describes a far more complex process, the opposite of concatenation's simplicity.\n\nProducing a fully sorted output is not guaranteed by concatenation, since the original order of each file is preserved, not resorted.\n\nConcatenation is described as working for any type of data, including text, numbers, and files, not numerical data only."
  },
  {
    id: "csc304_ch3_003",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "File A contains the names Bola then Tunde, and File B contains Titi then Seun. After concatenation, in what order do the names appear?",
    options: [
      "Bola, Tunde, Titi, Seun",
      "Titi, Seun, Bola, Tunde",
      "Bola, Titi, Tunde, Seun",
      "Seun, Titi, Tunde, Bola"
    ],
    correctAnswer: 0,
    explanation: "After concatenation, the order is Bola, Tunde, Titi, Seun, since File A's records come first in their original order, followed by File B's records in their original order.\n\nTiti, Seun, Bola, Tunde reverses the file order, placing File B before File A, which contradicts how concatenation was applied here.\n\nBola, Titi, Tunde, Seun interleaves the two files, which concatenation does not do, since it joins files end to end rather than alternating records.\n\nSeun, Titi, Tunde, Bola reverses the order within both files entirely, which concatenation does not do, since it preserves original order."
  },
  {
    id: "csc304_ch3_004",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a characteristic of concatenation?",
    options: [
      "It preserves the original order of the data",
      "It rearranges elements into ascending order automatically",
      "It removes any duplicate records automatically",
      "It requires the input files to already be sorted"
    ],
    correctAnswer: 0,
    explanation: "Preserving the original order is listed directly as a characteristic of concatenation, alongside being simple, fast, and free of comparison or sorting.\n\nAutomatically rearranging into ascending order contradicts concatenation, which explicitly involves no sorting or checking.\n\nAutomatically removing duplicates is not a listed characteristic of concatenation, which simply joins data end to end.\n\nRequiring sorted input files is not a characteristic of concatenation; that requirement instead applies to sorted merging."
  },
  {
    id: "csc304_ch3_005",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Concatenation requires comparing every element in one file against every element in the other file before combining them.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Concatenation is characterised specifically by having no comparison of elements at all; it simply joins the files end to end without checking or rearranging."
  },
  {
    id: "csc304_ch3_006",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which merging technique combines files by reading their records one after another in sequence and writing them into a new file?",
    options: [
      "Sequential merging",
      "Concatenation",
      "Sorted merging",
      "Direct merging"
    ],
    correctAnswer: 0,
    explanation: "Sequential merging combines files by reading their records one after another in sequence and writing them into a new file, following the natural order of records as they appear.\n\nConcatenation instead simply joins one file after another without processing records step by step.\n\nSorted merging instead combines already sorted lists by comparing their smallest current elements, not simply reading records in file order.\n\nDirect merging is not one of the named merging techniques in this material."
  },
  {
    id: "csc304_ch3_007",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Sequential merging is described as possibly involving sorting under which condition?",
    options: [
      "It may or may not involve sorting, depending on the case",
      "It always requires sorting before it can begin",
      "It never involves sorting under any circumstance",
      "It requires sorting only when the files are empty"
    ],
    correctAnswer: 0,
    explanation: "Sequential merging may or may not involve sorting, depending on the case, since it primarily emphasises processing records step by step in sequence.\n\nAlways requiring sorting before it begins overstates the description, which frames sorting as conditional, not mandatory.\n\nClaiming it never involves sorting under any circumstance also overstates the description, which leaves the possibility open depending on the case.\n\nEmpty files are not mentioned anywhere as a condition affecting whether sorting is involved."
  },
  {
    id: "csc304_ch3_008",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the procedure for sequential merging, what is the first step?",
    options: [
      "Open the input files",
      "Write records into a new file",
      "Continue until all records are processed",
      "Sort the final output file"
    ],
    correctAnswer: 0,
    explanation: "The first step in sequential merging is to open the input files, File A and File B, before any records are read.\n\nWriting records into a new file is a later step, occurring after records have been opened and read.\n\nContinuing until all records are processed is the final step of the procedure, not the first.\n\nSorting the final output file is not listed as a step in the sequential merging procedure at all."
  },
  {
    id: "csc304_ch3_009",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Sequential merging can look similar to concatenation. What distinguishes sequential merging from concatenation?",
    options: [
      "Sequential merging emphasises processing records step by step",
      "Sequential merging never produces a new output file",
      "Sequential merging can only be applied to numerical data",
      "Sequential merging always requires the data to be encrypted first"
    ],
    correctAnswer: 0,
    explanation: "Sequential merging emphasises processing records step by step, reading and writing one record at a time, which distinguishes it from concatenation's simple end-to-end joining.\n\nSequential merging does produce a new output file, File C, where the processed records are written, not the absence of one.\n\nSequential merging is not restricted to numerical data; the examples include named records as well as numbers.\n\nEncryption is not mentioned anywhere as a requirement for sequential merging."
  },
  {
    id: "csc304_ch3_010",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is an accurate characteristic of sequential merging?",
    options: [
      "It can only be used when both files are completely unsorted",
      "It requires deleting one of the two files before processing can begin",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Sequential merging can be used for sorted or unsorted data, not only completely unsorted files. It also does not require deleting either input file; both are read and their records written into a new file. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc304_ch3_011",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which merging technique combines two or more already sorted lists into a single sorted list, without re-sorting the entire data again?",
    options: [
      "Sorted merging",
      "Concatenation",
      "Sequential merging",
      "Random merging"
    ],
    correctAnswer: 0,
    explanation: "Sorted merging combines two or more already sorted lists into a single sorted list, without re-sorting all the data again, and is commonly used in algorithms like merge sort.\n\nConcatenation instead simply joins files end to end without regard to whether they are sorted, and produces no guaranteed sorted result.\n\nSequential merging instead reads records in file order, which may or may not already be sorted, rather than specifically combining pre-sorted lists efficiently.\n\nRandom merging is not one of the named merging techniques in this material."
  },
  {
    id: "csc304_ch3_012",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In sorted merging, what is the key idea for efficiently combining two already sorted lists?",
    options: [
      "Compare the smallest, or current, elements of each list, and pick the smaller one first",
      "Randomly select an element from either list at each step",
      "Always take every element from the first list before touching the second",
      "Discard the smaller of the two lists entirely before starting"
    ],
    correctAnswer: 0,
    explanation: "The key idea in sorted merging is to compare the smallest, or current, elements of each list, and pick the smaller one first, repeating until all elements are exhausted.\n\nRandomly selecting an element would not guarantee a sorted output, contradicting the purpose of sorted merging.\n\nAlways taking every element from the first list before the second would not interleave correctly and would not use the comparison-based approach described.\n\nDiscarding one list entirely would lose data rather than merge it, contradicting the goal of combining both lists."
  },
  {
    id: "csc304_ch3_013",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Sorted merging is described as working only on what kind of input data?",
    options: [
      "Already sorted data",
      "Data that has never been sorted before",
      "Data containing only text values",
      "Data stored across more than ten separate files"
    ],
    correctAnswer: 0,
    explanation: "Sorted merging works only on already sorted data, comparing current elements from each list to build a single sorted result efficiently.\n\nData that has never been sorted contradicts the stated requirement, which specifically requires the input lists to already be sorted.\n\nRestricting sorted merging to text values only is not supported; the worked examples use numerical data.\n\nA minimum of ten separate files is not mentioned anywhere as a requirement for sorted merging."
  },
  {
    id: "csc304_ch3_014",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Merging sorted list A, containing 2, 5, 8, 12, with sorted list B, containing 1, 3, 7, 10, using sorted merging, what is the final output?",
    options: [
      "1, 2, 3, 5, 7, 8, 10, 12",
      "2, 5, 8, 12, 1, 3, 7, 10",
      "12, 10, 8, 7, 5, 3, 2, 1",
      "1, 3, 7, 10, 2, 5, 8, 12"
    ],
    correctAnswer: 0,
    explanation: "The final sorted output is 1, 2, 3, 5, 7, 8, 10, 12, produced by repeatedly comparing the smallest remaining elements of each list and picking the smaller one.\n\n2, 5, 8, 12, 1, 3, 7, 10 is simply list A followed by list B unmerged, which describes concatenation, not sorted merging.\n\n12, 10, 8, 7, 5, 3, 2, 1 is sorted in descending order, the reverse of the ascending order sorted merging actually produces here.\n\n1, 3, 7, 10, 2, 5, 8, 12 is simply list B followed by list A unmerged, which does not reflect the comparison-based interleaving of sorted merging."
  },
  {
    id: "csc304_ch3_015",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Merging sorted list A, containing 3, 6, 9, with sorted list B, containing 1, 2, 4, 5, 10, using sorted merging, which element is picked first for the result?",
    options: [
      "1, since it is smaller than 3",
      "3, since it is smaller than 1",
      "9, since it is the largest overall",
      "10, since it is the largest overall"
    ],
    correctAnswer: 0,
    explanation: "The first comparison is between 3, the smallest of list A, and 1, the smallest of list B, and since 1 is smaller, it is picked first for the result.\n\n3 being smaller than 1 is factually reversed; 1 is the smaller of the two values being compared at this first step.\n\n9 is the largest element of list A, not the first element picked in a process that always selects the smaller of the two current values.\n\n10 is the largest element of list B, not the first element picked in a process that always selects the smaller of the two current values."
  },
  {
    id: "csc304_ch3_016",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Sorted merging is commonly used in algorithms such as merge sort, as well as in database operations and file processing systems.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Sorted merging is explicitly described as commonly used in algorithms like merge sort, database operations, and file processing systems."
  },
  {
    id: "csc304_ch3_017",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines a file, in the context of file organisation?",
    options: [
      "An organised collection of related records, also referred to as a data set",
      "A single, isolated character with no surrounding structure",
      "A physical printer connected to a computer",
      "A temporary value stored only while a program is running"
    ],
    correctAnswer: 0,
    explanation: "A file is an organised collection of related records which are processed together, also referred to as a data set.\n\nA single isolated character is instead a building block far smaller than a file, part of a field, not a file itself.\n\nA physical printer is a hardware output device, not an organised collection of records.\n\nA temporary in-memory value is a runtime concept, not the organised, named collection of records that defines a file."
  },
  {
    id: "csc304_ch3_018",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the logical hierarchy of a file, which of the following correctly orders the components from largest to smallest?",
    options: [
      "File, record, field, character",
      "Character, field, record, file",
      "Field, character, file, record",
      "Record, file, character, field"
    ],
    correctAnswer: 0,
    explanation: "A file consists of a number of records, each record is made up of a number of fields, and each field consists of a number of characters, so the order from largest to smallest is file, record, field, character.\n\nCharacter, field, record, file reverses the order, listing it from smallest to largest instead of largest to smallest.\n\nField, character, file, record scrambles the hierarchy, placing file above record incorrectly relative to field and character.\n\nRecord, file, character, field also scrambles the hierarchy, placing record above file, which is the reverse of the actual structure."
  },
  {
    id: "csc304_ch3_019",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines a field, as the basic element of data?",
    options: [
      "An individual element with a single value, characterised by length and data type",
      "A collection of multiple records treated as a single unit",
      "An entire file referenced by a unique name",
      "A physical storage device holding several files"
    ],
    correctAnswer: 0,
    explanation: "A field is the basic element of data, containing a single value such as a last name or a date, characterised by its length and data type.\n\nA collection of multiple records treated as a unit instead describes a file, a much larger structure than a single field.\n\nAn entire file referenced by a unique name is a much larger structure than a single field.\n\nA physical storage device is hardware, not the basic single-value data element described as a field."
  },
  {
    id: "csc304_ch3_020",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines a record?",
    options: [
      "A collection of related fields treated as a unit by a program",
      "A single value such as an employee's last name",
      "A physical device used to store multiple files",
      "The name given to a file when it is first created"
    ],
    correctAnswer: 0,
    explanation: "A record is a collection of related fields that can be treated as a unit by an application program, such as an employee record containing name, ID, and job designation fields.\n\nA single value such as a last name instead describes a field, a smaller component than a record.\n\nA physical storage device is hardware, not a collection of related fields.\n\nThe name given to a file is a naming detail, not the definition of a record as a collection of fields."
  },
  {
    id: "csc304_ch3_021",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of file contains relatively permanent information, is long-lasting, and only requires constant maintenance?",
    options: [
      "Master File",
      "Transaction File",
      "Reference File",
      "Pile File"
    ],
    correctAnswer: 0,
    explanation: "A Master File contains relatively permanent information, is long-lasting, and only requires constant maintenance to stay current.\n\nA Transaction File instead changes periodically and is used to update the master file, with a short lifespan, unlike a long-lasting master file.\n\nA Reference File instead is used for reference and validation, relatively permanent but changing with time, a different role from the master file.\n\nA Pile File is not one of the three named file types in this section; pile or serial instead describes a file organisation method."
  },
  {
    id: "csc304_ch3_022",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of file changes periodically, is used to update the master file, has a short lifespan, and is also known as a Movement File?",
    options: [
      "Transaction File",
      "Master File",
      "Reference File",
      "Indexed File"
    ],
    correctAnswer: 0,
    explanation: "A Transaction File changes periodically, is used to update the master file, has a short lifespan, and is discarded after use, also known as a Movement File.\n\nA Master File instead contains relatively permanent information and is long-lasting, the opposite of a short-lived transaction file.\n\nA Reference File instead is relatively permanent, used for reference and validation, not a short-lived update file.\n\nAn Indexed File is a file organisation method, not one of the three named file types by permanence."
  },
  {
    id: "csc304_ch3_023",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of file is used for reference and validation, relatively permanent but changes with time?",
    options: [
      "Reference File",
      "Transaction File",
      "Master File",
      "Sequential File"
    ],
    correctAnswer: 0,
    explanation: "A Reference File is used for reference and validation, relatively permanent but changing with time, distinct from both the master and transaction files.\n\nA Transaction File instead has a short lifespan and is discarded after use, not relatively permanent like a reference file.\n\nA Master File instead only requires constant maintenance and is long-lasting, framed differently from a reference file used for validation.\n\nA Sequential File is a file organisation method, not one of the three named file types by permanence."
  },
  {
    id: "csc304_ch3_024",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes a type of file, classified by permanence?",
    options: [
      "A Master File contains relatively permanent information and is long-lasting",
      "A Reference File is used for reference and validation, relatively permanent but changing with time",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. A Master File contains relatively permanent information and is long-lasting. A Reference File is separately described as used for reference and validation, relatively permanent but changing with time. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc304_ch3_025",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of key serves as a unique identifier for each record in a file?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Secondary Key",
      "Master Key"
    ],
    correctAnswer: 0,
    explanation: "A Primary Key is a unique identifier for each record, distinguishing it from every other record in the file.\n\nA Foreign Key instead is a reference to the primary key of another record or table, not a unique identifier within the same record.\n\nA Secondary Key instead is used to identify a group of records and aid in searches, not to uniquely identify a single record.\n\nA Master Key is not one of the three named key types in this material."
  },
  {
    id: "csc304_ch3_026",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of key is a reference to the primary key of another record or table?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Secondary Key",
      "Index Key"
    ],
    correctAnswer: 0,
    explanation: "A Foreign Key is a reference to the primary key of another record or table, linking related data across records.\n\nA Primary Key instead is the unique identifier within its own record, not a reference to another record's key.\n\nA Secondary Key instead is used to identify a group of records for searches, not to reference another table's primary key.\n\nAn Index Key is not one of the three named key types in this material."
  },
  {
    id: "csc304_ch3_027",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of key is used to identify a group of records and aid in searches, rather than uniquely identifying a single record?",
    options: [
      "Secondary Key",
      "Primary Key",
      "Foreign Key",
      "Composite Key"
    ],
    correctAnswer: 0,
    explanation: "A Secondary Key is used to identify a group of records and aid in searches, rather than uniquely identifying one specific record.\n\nA Primary Key instead uniquely identifies a single record, the opposite role of identifying a group.\n\nA Foreign Key instead references the primary key of another record or table, not a group-identifying search aid.\n\nA Composite Key is not one of the three named key types in this material."
  },
  {
    id: "csc304_ch3_028",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following characters is listed as not allowed in a file name?",
    options: [
      "The asterisk, *",
      "The dollar sign, $",
      "The hash symbol, #",
      "The underscore, _"
    ],
    correctAnswer: 0,
    explanation: "The asterisk is listed among the characters not allowed in a file name, alongside characters like the pipe, angle brackets, and backslash.\n\nThe dollar sign is instead listed among the valid characters permitted in a file name.\n\nThe hash symbol is instead listed among the valid characters permitted in a file name.\n\nThe underscore is instead listed among the valid characters permitted in a file name."
  },
  {
    id: "csc304_ch3_029",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Regarding case sensitivity in file names, how do Windows and UNIX differ?",
    options: [
      "Windows is case-insensitive, while UNIX is case-sensitive",
      "Windows is case-sensitive, while UNIX is case-insensitive",
      "Both Windows and UNIX are always case-insensitive",
      "Both Windows and UNIX are always case-sensitive"
    ],
    correctAnswer: 0,
    explanation: "Windows is case-insensitive, treating MYFILE, myfile, and MyFile as the same file, while UNIX is case-sensitive, treating all three as different files.\n\nReversing the pairing, calling Windows case-sensitive and UNIX case-insensitive, contradicts the stated comparison directly.\n\nDescribing both as always case-insensitive ignores that UNIX is specifically described as case-sensitive.\n\nDescribing both as always case-sensitive ignores that Windows is specifically described as case-insensitive."
  },
  {
    id: "csc304_ch3_030",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the naming convention for a file such as course.doc, what does the part after the dot represent?",
    options: [
      "The extension",
      "The main name",
      "The file's protection level",
      "The file's usage count"
    ],
    correctAnswer: 0,
    explanation: "The part after the dot, such as doc in course.doc, represents the extension, indicating the file format or encoding.\n\nThe main name instead is the part to the left of the dot, such as course, not the part after it.\n\nProtection level is a separate file attribute concerning access control, not part of the name's extension.\n\nUsage count is a separate file attribute concerning how many processes are using the file, not part of the name's extension."
  },
  {
    id: "csc304_ch3_031",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In UNIX, the file extension is optional, while in DOS, the file extension is required.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. A filename extension is described as optional in UNIX, while it is required in DOS, and some systems like DOS and OS/2 limit extensions to 3 characters."
  },
  {
    id: "csc304_ch3_032",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file attribute is described as the only human-readable information kept about a file?",
    options: [
      "File Name",
      "Location",
      "Protection",
      "Usage Count"
    ],
    correctAnswer: 0,
    explanation: "File Name is the symbolic name and the only human-readable information kept about the file among its attributes.\n\nLocation instead is a pointer to the device and storage location, not human-readable text meant for identification.\n\nProtection instead is access-control information, not the human-readable identifying name.\n\nUsage Count instead is a number tracking how many processes are using the file, not human-readable identifying text."
  },
  {
    id: "csc304_ch3_033",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file attribute holds access-control information, such as who can read, write, or execute the file?",
    options: [
      "Protection",
      "File Type",
      "Size",
      "Location"
    ],
    correctAnswer: 0,
    explanation: "Protection holds access-control information, determining who can read, write, or execute the file.\n\nFile Type instead is required for systems that support different types of files, not access-control permissions.\n\nSize instead is the current size in bytes, words, or blocks, not access-control permissions.\n\nLocation instead is a pointer to where the file is stored, not access-control permissions."
  },
  {
    id: "csc304_ch3_034",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file attribute tracks the number of processes currently using the file?",
    options: [
      "Usage Count",
      "File Name",
      "File Type",
      "Time, Date and Process ID"
    ],
    correctAnswer: 0,
    explanation: "Usage Count tracks the number of processes currently using the file at a given time.\n\nFile Name instead is the human-readable symbolic name, not a count of active processes.\n\nFile Type instead is required for systems supporting different file types, not a count of active processes.\n\nTime, Date and Process ID instead track creation time, last modification, and last use, not the number of processes currently using the file."
  },
  {
    id: "csc304_ch3_035",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is an accurate description of a file attribute?",
    options: [
      "Location is a pointer to the device and location where the file is stored",
      "File Name records the number of processes currently using the file",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Location being a pointer to the device and location where the file is stored is stated directly. File Name instead is the symbolic, human-readable name of the file, not a record of active process usage, which is instead tracked by the separate Usage Count attribute. Since only the Location statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch3_036",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a use of files?",
    options: [
      "To aid decision making",
      "To increase a device's battery life",
      "To replace the need for any user accounts",
      "To automatically translate text between languages"
    ],
    correctAnswer: 0,
    explanation: "Aiding decision making is listed as one of the two uses of files, alongside keeping track of information.\n\nIncreasing battery life is a hardware power concern, not a listed use of files.\n\nReplacing user accounts is not a listed use of files in this material.\n\nAutomatic language translation is not a listed use of files in this material."
  },
  {
    id: "csc304_ch3_037",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines file organisation?",
    options: [
      "The structure of a file, defined in terms of its components and how they are mapped onto storage",
      "The algorithm used for storing and retrieving records based on a file's structure",
      "The process of physically cleaning dust out of a storage device",
      "The act of renaming a file to make it easier to find"
    ],
    correctAnswer: 0,
    explanation: "File organisation refers to the structure of a file, defined in terms of its components and how they are mapped onto storage.\n\nThe algorithm for storing and retrieving records instead describes the access method, a related but separately defined concept.\n\nPhysically cleaning a storage device is a hardware maintenance task, not a definition of file structure.\n\nRenaming a file is a naming operation, not a definition of how a file's components are structured."
  },
  {
    id: "csc304_ch3_038",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines an access method, as distinct from file organisation?",
    options: [
      "The algorithm used for storing and retrieving records based on the file's structure",
      "The structure of a file defined in terms of its components",
      "The physical brand of the hard drive storing the file",
      "The number of users allowed to open the file at once"
    ],
    correctAnswer: 0,
    explanation: "An access method is the algorithm used for storing and retrieving records based on the file's underlying structure.\n\nThe structure of a file itself, defined in terms of its components, instead describes file organisation, not the access method built on top of it.\n\nThe physical brand of a hard drive is a hardware detail unrelated to the definition of an access method.\n\nThe number of users allowed to open a file concerns concurrency or protection settings, not the definition of an access method."
  },
  {
    id: "csc304_ch3_039",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a criterion for evaluating file organisation?",
    options: [
      "Short access time",
      "Maximum possible file size",
      "Bright, colourful file icons",
      "Compatibility with only one programming language"
    ],
    correctAnswer: 0,
    explanation: "Short access time is listed as one of the file organisation criteria, alongside ease of update, economy of storage, simple maintenance, and reliability.\n\nMaximum possible file size is not one of the listed file organisation criteria.\n\nColourful file icons are a cosmetic detail, not one of the listed file organisation criteria.\n\nCompatibility with only one programming language is not one of the listed file organisation criteria."
  },
  {
    id: "csc304_ch3_040",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method is described as slow in speed, and typically used in payroll systems?",
    options: [
      "Sequential",
      "Direct / Random",
      "Indexed",
      "Hash"
    ],
    correctAnswer: 0,
    explanation: "Sequential file organisation is described as slow in speed, with a typical use in payroll systems.\n\nDirect / Random organisation instead is described as fast, typically used in reservation systems, not payroll.\n\nIndexed organisation instead is described as fast, typically used in databases, not payroll.\n\nHash organisation instead is described as very fast, typically used in real-time applications, not payroll."
  },
  {
    id: "csc304_ch3_041",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method is described as fast in speed, and typically used in reservation systems?",
    options: [
      "Direct / Random",
      "Sequential",
      "Indexed Sequential",
      "Pile"
    ],
    correctAnswer: 0,
    explanation: "Direct / Random file organisation is described as fast, with a typical use in reservation systems, using direct access as its method.\n\nSequential organisation instead is described as slow, typically used in payroll systems, not reservations.\n\nIndexed Sequential organisation instead is described as fast, but typically used in banking systems, not reservations specifically.\n\nPile organisation is not associated with reservation systems in this material; it is described as the simplest method for accumulating data with no fixed format."
  },
  {
    id: "csc304_ch3_042",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method is described as very fast, using a hash function as its access method, typically for real-time applications?",
    options: [
      "Hash",
      "Sequential",
      "Indexed Sequential",
      "Direct / Random"
    ],
    correctAnswer: 0,
    explanation: "Hash file organisation is described as very fast, using a hash function as its access method, typically used in real-time applications.\n\nSequential organisation instead is described as slow, using sequential access, typically for payroll systems.\n\nIndexed Sequential organisation instead is described as fast, using mixed access, typically for banking systems.\n\nDirect / Random organisation instead is described as fast, using direct access, typically for reservation systems, a related but distinct method from hash-based access."
  },
  {
    id: "csc304_ch3_043",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method is the simplest form, collecting data in the order it arrives with no sorting and no fixed format?",
    options: [
      "Pile / Serial",
      "Sequential File",
      "Indexed Sequential File",
      "Indexed File"
    ],
    correctAnswer: 0,
    explanation: "Pile / Serial is the simplest form of file organisation, collecting data in the order it arrives, with no sorting, no fixed format, and self-describing fields.\n\nSequential File instead requires all records to have the same fixed length and fields in the same order, stored in key sequence, unlike the unstructured pile method.\n\nIndexed Sequential File instead maintains sequential ordering by key field with an added index, a more structured method than the simple pile.\n\nIndexed File instead uses multiple indexes for unrestricted placement, a more structured method than the simple pile."
  },
  {
    id: "csc304_ch3_044",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method requires all records to have the same fixed length and fields, stored in key sequence, and is the only method that works on magnetic tape?",
    options: [
      "Sequential File",
      "Pile / Serial",
      "Indexed File",
      "Direct / Hashed File"
    ],
    correctAnswer: 0,
    explanation: "Sequential File requires all records to have the same fixed length and fields in the same order, stored in key sequence, and is the only file organisation that works on magnetic tape.\n\nPile / Serial instead has no fixed format, with self-describing fields, unlike the fixed structure of a sequential file.\n\nIndexed File instead supports variable-length records through multiple indexes, unlike the fixed-length requirement of a sequential file.\n\nDirect / Hashed File instead uses hashing to compute a location directly, not key-sequence storage on magnetic tape."
  },
  {
    id: "csc304_ch3_045",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a disadvantage of a Sequential File?",
    options: [
      "Slow searching, and difficulty updating individual records",
      "It cannot be used for large batch volumes of data",
      "It is the most complex file organisation method to implement",
      "It requires an overflow file for every new record added"
    ],
    correctAnswer: 0,
    explanation: "Slow searching and difficulty updating individual records are listed as disadvantages of a Sequential File.\n\nSequential files are instead described as suitable for large batch volumes, an advantage, not a limitation on batch size.\n\nSequential files are described as having easy maintenance, not being the most complex method to implement; that complexity concern is instead raised for Indexed Sequential Files.\n\nRequiring an overflow file for new records is instead a feature of Indexed Sequential Files, not plain Sequential Files."
  },
  {
    id: "csc304_ch3_046",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method maintains sequential ordering by key field, but adds an index for random access and an overflow file for new records?",
    options: [
      "Indexed Sequential File (ISAM)",
      "Pile / Serial",
      "Direct / Hashed File",
      "Sequential File"
    ],
    correctAnswer: 0,
    explanation: "Indexed Sequential File, or ISAM, maintains sequential ordering by key field, and adds an index for random access as well as an overflow file for new records.\n\nPile / Serial instead has no index or fixed order at all, the opposite of ISAM's structured indexing.\n\nDirect / Hashed File instead uses hashing to compute a location directly, without needing an index.\n\nSequential File instead lacks the added index and overflow file that specifically distinguish ISAM from plain sequential organisation."
  },
  {
    id: "csc304_ch3_047",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Indexed Sequential Files (ISAM) are used where sequential processing of large records is needed but occasional direct access is also required, such as in which example system?",
    options: [
      "Airline reservation systems",
      "A simple personal to-do list app",
      "A single-user offline calculator",
      "A basic digital alarm clock"
    ],
    correctAnswer: 0,
    explanation: "ISAM is used where sequential processing of large records is needed but occasional direct access is also required, such as in airline reservation systems.\n\nA simple personal to-do list app does not require the large-scale sequential processing with occasional direct access that ISAM is designed for.\n\nA single-user offline calculator has no file records to process sequentially or access directly in this sense.\n\nA basic digital alarm clock has no file records to process sequentially or access directly in this sense."
  },
  {
    id: "csc304_ch3_048",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Indexed Sequential Files (ISAM) are described as more complex than pure sequential files.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. ISAM's listed disadvantage is that it is more complex than pure sequential files, despite offering faster retrieval and efficient sequential processing."
  },
  {
    id: "csc304_ch3_049",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method abandons the single-key limitation by using multiple indexes, one per field that may be searched?",
    options: [
      "Indexed File",
      "Sequential File",
      "Pile / Serial",
      "Direct / Hashed File"
    ],
    correctAnswer: 0,
    explanation: "Indexed File abandons the single-key limitation by using multiple indexes, one per field that may be searched, supporting unrestricted placement and variable-length records.\n\nSequential File instead is restricted to a single key sequence, the opposite of the multiple-index approach of an indexed file.\n\nPile / Serial instead has no indexes at all, the opposite of the multiple-index structure of an indexed file.\n\nDirect / Hashed File instead uses hashing on a single key value to compute location directly, not multiple indexes."
  },
  {
    id: "csc304_ch3_050",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In an Indexed File, which two types of indexes are described?",
    options: [
      "Exhaustive index and partial index",
      "Primary index and foreign index",
      "Sequential index and random index",
      "Master index and transaction index"
    ],
    correctAnswer: 0,
    explanation: "An Indexed File uses an exhaustive index, with one entry per record, and a partial index, with entries only for records where the field of interest exists.\n\nPrimary index and foreign index are not the two named index types in this material; primary and foreign instead describe types of keys, a separate concept.\n\nSequential index and random index are not the two named index types in this material.\n\nMaster index and transaction index are not the two named index types in this material; master and transaction instead describe types of files."
  },
  {
    id: "csc304_ch3_051",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method uses hashing on the key value to compute a record's physical location directly, without needing an index?",
    options: [
      "Direct / Hashed File",
      "Indexed File",
      "Indexed Sequential File",
      "Sequential File"
    ],
    correctAnswer: 0,
    explanation: "Direct / Hashed File uses hashing on the key value to compute a record's physical location directly, without needing an index, offering very quick access.\n\nIndexed File instead relies on multiple indexes to locate records, not direct hash-based computation of location.\n\nIndexed Sequential File instead relies on a single index plus an overflow file, not hash-based direct computation.\n\nSequential File instead relies on key-sequence order and scanning, not hash-based direct computation of location."
  },
  {
    id: "csc304_ch3_052",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes a file organisation method?",
    options: [
      "A Pile / Serial file requires all records to be the same fixed length, stored in key sequence",
      "An Indexed File uses hashing on the key value to compute a record's location directly",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. A Pile / Serial file actually has no fixed format at all, with self-describing fields, the opposite of the fixed-length, key-sequence structure that instead describes a Sequential File. An Indexed File instead locates records through multiple indexes, not hashing, which instead describes a Direct / Hashed File. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc304_ch3_053",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines file maintenance?",
    options: [
      "Keeping a file up to date so it reflects current information",
      "Permanently deleting a file once it is no longer needed",
      "Designing the visual icon used to represent a file",
      "Compressing a file to reduce its storage size"
    ],
    correctAnswer: 0,
    explanation: "File maintenance means keeping a file up to date so it reflects current information, including insertion, deletion, and updating of records.\n\nPermanently deleting a file describes only one specific action, not the broader ongoing process of file maintenance.\n\nDesigning a visual icon is a cosmetic design task, unrelated to keeping file content current.\n\nCompressing a file to reduce size is a storage optimisation task, not the definition of file maintenance."
  },
  {
    id: "csc304_ch3_054",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file maintenance activity refers to adding a new record to a file?",
    options: [
      "Insertion",
      "Deletion",
      "Updating",
      "Truncating"
    ],
    correctAnswer: 0,
    explanation: "Insertion refers to adding a new record to a file, one of the three main file maintenance activities.\n\nDeletion instead refers to removing a record no longer needed, not adding one.\n\nUpdating instead refers to making changes to existing records, not adding a new one.\n\nTruncating instead removes file content while keeping attributes, an OS-level file operation, not the file maintenance activity of adding a record."
  },
  {
    id: "csc304_ch3_055",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file maintenance activity refers to removing a record that is no longer needed?",
    options: [
      "Deletion",
      "Insertion",
      "Updating",
      "Appending"
    ],
    correctAnswer: 0,
    explanation: "Deletion refers to removing a record no longer needed from a file.\n\nInsertion instead refers to adding a new record, the opposite of removing one.\n\nUpdating instead refers to making changes to existing records, not removing them entirely.\n\nAppending instead adds data only to the end of a file, an OS-level file operation, not the file maintenance activity of removing a record."
  },
  {
    id: "csc304_ch3_056",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file maintenance activity refers to making changes to existing records?",
    options: [
      "Updating",
      "Insertion",
      "Deletion",
      "Blocking"
    ],
    correctAnswer: 0,
    explanation: "Updating refers to making changes to existing records, keeping the information in a file current.\n\nInsertion instead refers to adding an entirely new record, not changing an existing one.\n\nDeletion instead refers to removing a record entirely, not changing its content.\n\nBlocking instead refers to logically grouping records into blocks during processing, not modifying record content."
  },
  {
    id: "csc304_ch3_057",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an importance of file maintenance?",
    options: [
      "It improves accuracy and prevents duplication",
      "It guarantees a file can never be deleted again",
      "It automatically increases a computer's processing speed",
      "It eliminates the need for any file attributes"
    ],
    correctAnswer: 0,
    explanation: "Improving accuracy and preventing duplication are listed as importances of file maintenance, alongside supporting business operations.\n\nGuaranteeing a file can never be deleted contradicts the very existence of deletion as a normal file maintenance activity.\n\nAutomatically increasing processing speed is not a listed importance of file maintenance in this material.\n\nEliminating the need for file attributes is not a listed importance of file maintenance; attributes remain necessary regardless."
  },
  {
    id: "csc304_ch3_058",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a challenge of file maintenance?",
    options: [
      "Human error",
      "Excessive file naming flexibility",
      "Too many available file organisation methods",
      "Overly fast search performance"
    ],
    correctAnswer: 0,
    explanation: "Human error is listed as a challenge of file maintenance, alongside hardware failure and unauthorised access.\n\nExcessive file naming flexibility is not listed as a challenge of file maintenance in this material.\n\nToo many available file organisation methods is not listed as a challenge of file maintenance.\n\nOverly fast search performance is not listed as a challenge of file maintenance; slow searching is instead a disadvantage of specific organisation methods."
  },
  {
    id: "csc304_ch3_059",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Unauthorised access, such as fire incidents when files are not adequately protected, is listed as a challenge of file maintenance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Unauthorised access, including examples like fire incidents when files are not adequately protected, is listed directly as a challenge of file maintenance, alongside human error and hardware failure."
  },
  {
    id: "csc304_ch3_060",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to logically grouping records into blocks that are treated as a single unit during processing?",
    options: [
      "Blocking",
      "Sorting",
      "Matching",
      "Merging"
    ],
    correctAnswer: 0,
    explanation: "Blocking refers to logically grouping records into fixed or variable blocks treated as a single unit during processing, with the gap between blocks called the inter-block gap.\n\nSorting instead refers to arranging records in a particular order, not grouping them into blocks.\n\nMatching instead refers to locating a record using one or more attributes, not grouping records into blocks.\n\nMerging instead refers to combining two or more files into a larger file, not grouping records within one file into blocks."
  },
  {
    id: "csc304_ch3_061",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to locating a record using one or more file attributes or fields?",
    options: [
      "Matching",
      "Blocking",
      "Sorting",
      "Updating"
    ],
    correctAnswer: 0,
    explanation: "Matching refers to locating a record using one or more file attributes or fields, distinguishing it from a pure key-based search.\n\nBlocking instead refers to grouping records into blocks for processing, not locating a record by attributes.\n\nSorting instead refers to arranging records into a particular order, not locating a specific record.\n\nUpdating instead refers to bringing file information up to date, not locating a record by its attributes."
  },
  {
    id: "csc304_ch3_062",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes a file processing operation?",
    options: [
      "Searching involves going through a file to locate a record using the key field",
      "Blocking involves combining two or more entirely separate files into one larger file",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Searching involving going through a file to locate a record using the key field is stated directly. Blocking instead involves logically grouping records into blocks within processing, not combining separate files together, which describes merging instead. Since only the searching statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch3_063",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation loads file attributes and disk addresses into memory for fast access?",
    options: [
      "Opening",
      "Closing",
      "Creating",
      "Truncating"
    ],
    correctAnswer: 0,
    explanation: "Opening loads file attributes and disk addresses into memory for fast access, preparing the file for subsequent operations.\n\nClosing instead frees internal table space once access to the file is done, the reverse of opening.\n\nCreating instead allocates space and creates a directory entry for a new file, a step before opening it.\n\nTruncating instead removes file content while keeping attributes except size, not loading attributes into memory."
  },
  {
    id: "csc304_ch3_064",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation removes a file's content but keeps all attributes except the file size?",
    options: [
      "Truncating",
      "Deleting",
      "Renaming",
      "Repositioning"
    ],
    correctAnswer: 0,
    explanation: "Truncating removes file content but keeps all attributes except the file size, which changes as the content is removed.\n\nDeleting instead releases allocated space and invalidates the directory entry entirely, removing the file rather than just its content.\n\nRenaming instead only changes the name of an existing file, not its content.\n\nRepositioning instead sets the current file position to a given value, not removing content."
  },
  {
    id: "csc304_ch3_065",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation adds data only to the end of a file, described as a restricted form of writing?",
    options: [
      "Appending",
      "Writing",
      "Truncating",
      "Reading"
    ],
    correctAnswer: 0,
    explanation: "Appending adds data only to the end of a file, described as a restricted form of the write operation.\n\nWriting more generally writes data to the file and updates the write pointer, without the restriction of only adding at the end.\n\nTruncating instead removes file content, the opposite of adding data at the end.\n\nReading instead reads data from the file and updates the read pointer, not adding new data at all."
  },
  {
    id: "csc304_ch3_066",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation, also called File Seek, sets the current file position to a given value?",
    options: [
      "Repositioning",
      "Opening",
      "Closing",
      "Renaming"
    ],
    correctAnswer: 0,
    explanation: "Repositioning, also called File Seek, sets the current file position to a given value, allowing access at a specific point in the file.\n\nOpening instead loads file attributes and disk addresses into memory, not setting a specific position within the file.\n\nClosing instead frees internal table space once access is done, not setting a specific position within the file.\n\nRenaming instead only changes the file's name, not its current read or write position."
  },
  {
    id: "csc304_ch3_067",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation allocates space and creates a directory entry for a new file?",
    options: [
      "Creating",
      "Opening",
      "Writing",
      "Appending"
    ],
    correctAnswer: 0,
    explanation: "Creating allocates space and creates a directory entry for a new file, the first step before the file can be used.\n\nOpening instead loads the attributes of an already-existing file into memory, a step that follows creation, not creation itself.\n\nWriting instead writes data into an already-open file, a step after creation, not the allocation of initial space.\n\nAppending instead adds data only to the end of an existing file, not the initial allocation of space for a new one."
  },
  {
    id: "csc304_ch3_068",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Opening a file, at the OS level, is described as freeing internal table space, while closing loads file attributes into memory.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. It reverses the actual definitions: opening loads file attributes and disk addresses into memory for fast access, while closing is what frees internal table space once access is done."
  },
  {
    id: "csc304_ch3_069",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation releases allocated space and invalidates the file's directory entry?",
    options: [
      "Deleting",
      "Truncating",
      "Closing",
      "Repositioning"
    ],
    correctAnswer: 0,
    explanation: "Deleting releases allocated space and invalidates the directory entry, removing the file from the system entirely.\n\nTruncating instead only removes the file's content while keeping most attributes, not invalidating the directory entry itself.\n\nClosing instead only frees internal table space after access, without invalidating the file's directory entry or deleting it.\n\nRepositioning instead sets the current file position to a value, not releasing space or invalidating the directory entry."
  },
  {
    id: "csc304_ch3_070",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation changes the name of an existing file?",
    options: [
      "Renaming",
      "Creating",
      "Truncating",
      "Appending"
    ],
    correctAnswer: 0,
    explanation: "Renaming changes the name of an existing file without altering its content or other attributes.\n\nCreating instead allocates space and a directory entry for a brand new file, not changing an existing file's name.\n\nTruncating instead removes a file's content, not changing its name.\n\nAppending instead adds data only to the end of a file, not changing its name."
  },
  {
    id: "csc304_ch3_071",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines the File Management System (FMS)?",
    options: [
      "The OS subsystem that manages data storage on secondary storage and provides file-access services to processes",
      "A physical device used exclusively to back up files onto tape",
      "A single application used only for renaming files in bulk",
      "A programming language designed specifically for writing operating systems"
    ],
    correctAnswer: 0,
    explanation: "The File Management System is the subsystem of an OS that manages data storage on secondary storage and provides file-access services to processes, freeing programmers from low-level disk I/O.\n\nA physical tape backup device is hardware, not the OS subsystem responsible for file-access services.\n\nA bulk renaming application is a narrow utility tool, not the broad OS subsystem that manages file access generally.\n\nA programming language for writing operating systems is a development tool, not the file-access subsystem itself."
  },
  {
    id: "csc304_ch3_072",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective ensures that access methods remain unchanged regardless of the storage device being used?",
    options: [
      "Generality",
      "Validity",
      "Protection",
      "Concurrency"
    ],
    correctAnswer: 0,
    explanation: "Generality ensures that access methods remain unchanged regardless of the storage device being used, keeping file access consistent across hardware.\n\nValidity instead ensures stored data always reflects the operations performed on them, not consistency across storage devices.\n\nProtection instead controls illegal or dangerous operations on data, not consistency of access methods across devices.\n\nConcurrency instead allows concurrent access in multiprogramming systems, not consistency of access methods across devices."
  },
  {
    id: "csc304_ch3_073",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective allows concurrent access to files in multiprogramming systems?",
    options: [
      "Concurrency",
      "Generality",
      "Data Management",
      "Performance"
    ],
    correctAnswer: 0,
    explanation: "Concurrency allows concurrent access to files in multiprogramming systems, letting multiple processes work with files at once.\n\nGenerality instead ensures access methods remain unchanged across storage devices, not simultaneous multi-process access.\n\nData Management instead simplifies and makes device-independent common data access and modification operations, a broader goal than simultaneous access specifically.\n\nPerformance instead concerns a good compromise between access speed and data transfer rate, not simultaneous multi-process access."
  },
  {
    id: "csc304_ch3_074",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes an objective of the File Management System?",
    options: [
      "Validity guarantees that stored data always reflects the operations performed on them",
      "Concurrency prohibits more than one process from ever accessing the system at a time",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Validity guaranteeing that stored data always reflects the operations performed on them is stated directly as an FMS objective. Concurrency instead does the opposite of prohibiting simultaneous access; it specifically allows concurrent access in multiprogramming systems. Since only the Validity statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch3_075",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which component of the I/O system architecture translates operating system commands into device-specific instructions?",
    options: [
      "Device Drivers",
      "I/O Controllers",
      "Application Programs",
      "Physical Devices"
    ],
    correctAnswer: 0,
    explanation: "Device Drivers are specialised programs that translate operating system commands into device-specific instructions.\n\nI/O Controllers instead are hardware units managing communication between the CPU and peripheral devices, not software translating commands.\n\nApplication Programs instead generate I/O requests and interact with files through OS services, not translate commands into device-specific instructions.\n\nPhysical Devices instead are the hardware itself, such as hard disks and printers, not the software translating commands to them."
  },
  {
    id: "csc304_ch3_076",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which component of the I/O system architecture is described as hardware units managing communication between the CPU and peripheral devices?",
    options: [
      "I/O Controllers",
      "Device Drivers",
      "Application Programs",
      "The Operating System"
    ],
    correctAnswer: 0,
    explanation: "I/O Controllers are hardware units that manage communication between the CPU and peripheral devices.\n\nDevice Drivers instead are software programs that translate commands into device-specific instructions, not hardware units themselves.\n\nApplication Programs instead generate I/O requests, a software layer above the hardware-level I/O controllers.\n\nThe Operating System instead manages I/O operations broadly and interfaces applications with hardware, a higher-level role than the specific hardware units that are I/O controllers."
  },
  {
    id: "csc304_ch3_077",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a function of utility software?",
    options: [
      "Helping recover or manage damaged files",
      "Translating an entire program into machine code before execution",
      "Executing code one line at a time during a debugging session",
      "Converting assembly language into machine language"
    ],
    correctAnswer: 0,
    explanation: "Helping recover or manage damaged files is listed as a function of utility software, alongside maintaining the system and improving efficiency.\n\nTranslating an entire program into machine code before execution describes a compiler, a type of support software, not utility software.\n\nExecuting code one line at a time describes an interpreter, a type of support software, not utility software.\n\nConverting assembly language into machine language describes an assembler, a type of support software, not utility software."
  },
  {
    id: "csc304_ch3_078",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software translates high-level language into machine code all at once, before the program runs?",
    options: [
      "Compiler",
      "Interpreter",
      "Assembler",
      "Debugger"
    ],
    correctAnswer: 0,
    explanation: "A compiler translates high-level language into machine code all at once, before the program is executed.\n\nAn interpreter instead translates and executes code line by line, not all at once beforehand.\n\nAn assembler instead converts assembly language specifically into machine language, not high-level language.\n\nA debugger instead detects and helps fix bugs, not translate high-level language into machine code."
  },
  {
    id: "csc304_ch3_079",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software translates and executes code line by line, rather than all at once?",
    options: [
      "Interpreter",
      "Compiler",
      "Assembler",
      "IDE"
    ],
    correctAnswer: 0,
    explanation: "An interpreter translates and executes code line by line, rather than translating the whole program at once.\n\nA compiler instead translates the entire high-level program into machine code all at once before execution, not line by line.\n\nAn assembler instead converts assembly language into machine language, not general line-by-line execution.\n\nAn IDE instead provides a complete environment for writing, running, and debugging programs, a broader tool than a line-by-line translator."
  },
  {
    id: "csc304_ch3_080",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A compiler executes code one line at a time, while an interpreter translates the entire program into machine code before running it at all.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. It reverses the actual definitions: a compiler translates the entire high-level program into machine code all at once, while an interpreter translates and executes code line by line."
  },
  {
    id: "csc304_ch3_081",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines a data structure?",
    options: [
      "A way of organising and storing data for efficient access",
      "A physical device used only to power a computer",
      "A single fixed value that never changes once created",
      "A visual chart used only for company presentations"
    ],
    correctAnswer: 0,
    explanation: "A data structure is a way of organising and storing data so it can be accessed and modified efficiently.\n\nA physical power device is hardware, unrelated to organising data for efficient access.\n\nA single fixed unchanging value describes a constant, not a structure for organising a collection of data.\n\nA presentation chart is a visual communication tool, not a way of organising stored data for a program."
  },
  {
    id: "csc304_ch3_082",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which data structure is described as a collection of elements stored in a contiguous memory location, in sequential order?",
    options: [
      "Array",
      "List",
      "Stack",
      "Dictionary"
    ],
    correctAnswer: 0,
    explanation: "An array is a collection of elements stored in a contiguous memory location, meaning the elements are stored in sequential order.\n\nA list instead is described as a dynamic version of an array without a fixed size, a related but distinct structure.\n\nA stack instead is defined by its Last In First Out operation, not by contiguous sequential memory storage.\n\nA dictionary instead is comprised of keys and values, not a sequence of elements in contiguous memory."
  },
  {
    id: "csc304_ch3_083",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which data structure is described as a dynamic version of an array, without a fixed size, allowing elements to be added or removed?",
    options: [
      "List",
      "Array",
      "Queue",
      "Stack"
    ],
    correctAnswer: 0,
    explanation: "A list is described as a dynamic version of an array, an ordered collection without a fixed size, allowing elements to be added or removed.\n\nAn array instead is stored in a contiguous memory location, generally without the same dynamic resizing described for a list.\n\nA queue instead is defined by its First In First Out behaviour, not by being a dynamic, resizable version of an array.\n\nA stack instead is defined by its Last In First Out behaviour, not by being a dynamic, resizable version of an array."
  },
  {
    id: "csc304_ch3_084",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which data structure follows a First In First Out (FIFO) implementation?",
    options: [
      "Queue",
      "Stack",
      "Array",
      "Dictionary"
    ],
    correctAnswer: 0,
    explanation: "A queue follows a First In First Out, or FIFO, implementation, where the earliest added element is the first removed.\n\nA stack instead follows a Last In First Out implementation, the reverse ordering from a queue.\n\nAn array instead is defined by contiguous sequential storage, not by a FIFO removal order.\n\nA dictionary instead is defined by key and value pairs, not by a FIFO removal order."
  },
  {
    id: "csc304_ch3_085",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In a queue, which operation adds an element, and at which end does it take place?",
    options: [
      "Enqueue, which can only take place at the back",
      "Enqueue, which can only take place at the front",
      "Dequeue, which can only take place at the back",
      "Peek, which can only take place at the front"
    ],
    correctAnswer: 0,
    explanation: "Enqueue is the operation that adds an element, and it can only take place at the back of the queue.\n\nEnqueue taking place at the front reverses the correct end; adding happens at the back, while removal happens at the front.\n\nDequeue is instead the removal operation, taking place at the head or front, not the back, and it is not the operation that adds elements.\n\nPeek is not the name given to the addition operation in a queue; it is instead associated with checking an element in a stack."
  },
  {
    id: "csc304_ch3_086",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which data structure follows a Last In First Out (LIFO) implementation?",
    options: [
      "Stack",
      "Queue",
      "List",
      "Array"
    ],
    correctAnswer: 0,
    explanation: "A stack follows a Last In First Out, or LIFO, implementation, where the most recently added element is the first removed.\n\nA queue instead follows a First In First Out implementation, the reverse ordering from a stack.\n\nA list instead is described as a dynamic, resizable version of an array, not defined by a LIFO removal order.\n\nAn array instead is defined by contiguous sequential storage, not by a LIFO removal order."
  },
  {
    id: "csc304_ch3_087",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which stack operation adds an element to the stack?",
    options: [
      "Push",
      "Pop",
      "Peek",
      "Enqueue"
    ],
    correctAnswer: 0,
    explanation: "Push is the stack operation that adds an element to the stack.\n\nPop instead removes an element from the stack, the reverse of adding one.\n\nPeek instead checks an element on the stack without removing it, not adding a new one.\n\nEnqueue is instead the operation that adds an element to a queue, not a stack."
  },
  {
    id: "csc304_ch3_088",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately pairs a data structure operation with what it does?",
    options: [
      "Pop removes an element from the stack",
      "Dequeue removes an element from the back of a queue",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Pop removing an element from the stack is stated directly. Dequeue instead removes an element from the head or front of a queue, not the back, since the back is where enqueue adds new elements. Since only the Pop statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch3_089",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which data structure is comprised of a key and its corresponding value, usually embedded in curly braces?",
    options: [
      "Dictionary",
      "Array",
      "Stack",
      "Queue"
    ],
    correctAnswer: 0,
    explanation: "A dictionary is comprised of a key and the value of that key, usually embedded in curly braces, such as a customer name serving as a key.\n\nAn array instead stores elements in contiguous sequential order, not as key-value pairs.\n\nA stack instead is defined by its Last In First Out order, not by key-value pairs.\n\nA queue instead is defined by its First In First Out order, not by key-value pairs."
  },
  {
    id: "csc304_ch3_090",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A list, unlike an array, has a fixed size and cannot have elements added or removed once it is created.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. A list is described as not having a fixed size, and elements can be added to or removed from it, unlike the more rigid contiguous structure of an array."
  },
  {
    id: "csc304_ch3_091",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which Python module is mentioned as helping to implement an array in Python?",
    options: [
      "array",
      "collections",
      "queue",
      "stack"
    ],
    correctAnswer: 0,
    explanation: "The array module is mentioned as the module that helps implement an array in Python.\n\ncollections is instead mentioned in relation to importing a deque for queue behaviour, not for implementing a basic array.\n\nqueue is not the module named for implementing an array; it is a data structure concept, not the array module itself.\n\nstack is not the module named for implementing an array; it is a data structure concept, not a Python module name given here."
  },
  {
    id: "csc304_ch3_092",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which stack operation checks an element on the stack without removing it?",
    options: [
      "Peek",
      "Push",
      "Pop",
      "Append"
    ],
    correctAnswer: 0,
    explanation: "Peek checks an element on the stack without removing it, allowing inspection of the current top value.\n\nPush instead adds a new element to the stack, not merely inspecting an existing one.\n\nPop instead removes an element from the stack, the opposite of leaving it in place to inspect.\n\nAppend is instead associated with adding to a queue or list in this material, not the stack inspection operation."
  }
];

export default csc304Chapter3Questions;
