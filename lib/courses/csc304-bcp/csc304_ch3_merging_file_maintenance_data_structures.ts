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
    text: "Which of the following is listed as a purpose that files provide?",
    options: [
      "Data persistence, so information survives beyond a single program execution",
      "Automatic language translation for stored text",
      "Guaranteed unlimited free storage space",
      "Automatic conversion of all data into images"
    ],
    correctAnswer: 0,
    explanation: "Data persistence, meaning information survives beyond a single program execution, is listed as a purpose files provide, alongside data organisation and data retrieval.\n\nAutomatic language translation is not listed as a purpose files provide.\n\nUnlimited free storage space is not listed as a purpose files provide, and contradicts the reality that storage is a finite resource.\n\nAutomatic conversion of data into images is not listed as a purpose files provide."
  },
  {
    id: "csc304_ch3_020",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In modern information systems, files most often exist as parts of which broader structure?",
    options: [
      "A database, an organised collection of interrelated data",
      "A single printed document with no digital form",
      "A standalone spreadsheet disconnected from all other files",
      "A physical filing cabinet with no computer involvement"
    ],
    correctAnswer: 0,
    explanation: "In modern information systems, files most often exist as parts of a database, an organised collection of interrelated data.\n\nA single printed document with no digital form contradicts the description of files existing within digital databases.\n\nA standalone spreadsheet disconnected from all other files contradicts the described interrelated nature of files within a database.\n\nA physical filing cabinet describes a manual paper system, not the digital database context described here."
  },
  {
    id: "csc304_ch3_021",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Files are described as abstraction mechanisms because they provide a way to do which of the following?",
    options: [
      "Store information, retrieve it later, reference it by name, and control access to it",
      "Physically weld metal components together",
      "Guarantee a computer never crashes",
      "Automatically design a company's logo"
    ],
    correctAnswer: 0,
    explanation: "Files are described as abstraction mechanisms because they let users store information, retrieve it later, reference it by name, and control access to it.\n\nWelding metal components is a physical manufacturing task, unrelated to the abstraction role files provide.\n\nGuaranteeing a computer never crashes is not a listed benefit of the file abstraction.\n\nDesigning a logo is a graphic design task, unrelated to the abstraction role files provide."
  },
  {
    id: "csc304_ch3_022",
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
    id: "csc304_ch3_023",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Regarding field length, which of the following gives an example of a fixed-length field?",
    options: [
      "A Social Security Number, which always takes the same number of digits",
      "A person's name, which can range from 5 to 50 characters",
      "A product description, which varies freely in length",
      "A comment field with no defined maximum length"
    ],
    correctAnswer: 0,
    explanation: "A Social Security Number is given as an example of a fixed-length field, always taking the same number of bytes, such as always being 9 digits.\n\nA person's name ranging from 5 to 50 characters is instead the given example of a variable-length field, whose size varies based on content.\n\nA product description varying freely is closer to a variable-length field, not the fixed-length example given.\n\nA comment field with no defined maximum is also closer to a variable-length field, not the fixed-length example given."
  },
  {
    id: "csc304_ch3_024",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a data type a field can be represented as?",
    options: [
      "Boolean",
      "Kilometre",
      "Currency exchange rate",
      "Font style"
    ],
    correctAnswer: 0,
    explanation: "Boolean is listed among the field data types, alongside ASCII text, String, Decimal, and Date/Time.\n\nKilometre is a unit of measurement, not one of the listed field data types.\n\nA currency exchange rate is a value a field might hold, not one of the listed data type categories itself.\n\nFont style is a text formatting concept, not one of the listed field data types."
  },
  {
    id: "csc304_ch3_025",
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
    id: "csc304_ch3_026",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Regarding record properties, what does 'uniformity' mean for records of the same type?",
    options: [
      "All records of the same type have the same fields in the same order",
      "Every record must contain a completely different set of fields",
      "Records are only ever processed one field at a time",
      "Records can never be grouped into a single file"
    ],
    correctAnswer: 0,
    explanation: "Uniformity means all records of the same type have the same fields in the same order, allowing them to be processed consistently.\n\nEvery record containing a completely different set of fields contradicts uniformity, which requires a consistent structure across records of the same type.\n\nProcessing only one field at a time contradicts the described record property of being treated as a single unit in applications.\n\nRecords being grouped into a single file is exactly what happens; a file is a collection of related records, not a contradiction of uniformity."
  },
  {
    id: "csc304_ch3_027",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Comparing fixed-length and variable-length records, which of the following is an accurate trade-off?",
    options: [
      "Fixed-length records are easier to locate but waste space for variable data",
      "Variable-length records are always larger in total file size than fixed-length ones",
      "Fixed-length records can never be used in a sequential file",
      "Variable-length records are always easier to locate than fixed-length ones"
    ],
    correctAnswer: 0,
    explanation: "Fixed-length records are easier to locate, since each record occupies the same amount of space, but they waste space when data is naturally variable.\n\nVariable-length records are not stated to always be larger in total file size; rather, they are described as efficient in storage, since they avoid wasted space.\n\nFixed-length records are in fact the requirement for a Sequential File, not something excluded from it.\n\nVariable-length records are described as harder to locate, not easier, which is the reverse of the correct trade-off."
  },
  {
    id: "csc304_ch3_028",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a characteristic of a file, as the third level of the logical hierarchy?",
    options: [
      "It is a named entity, referenced by name",
      "It can only ever contain a single record",
      "It disappears the moment the creating process terminates",
      "It cannot be accessed by more than one application"
    ],
    correctAnswer: 0,
    explanation: "Being a named entity, referenced by name, is listed as a file characteristic, alongside being persistent, accessible, managed, and containing related records.\n\nContaining only a single record contradicts the definition of a file as a collection of related records, generally more than one.\n\nDisappearing when the creating process terminates contradicts the listed characteristic that a file is persistent, continuing to exist after a process ends.\n\nBeing restricted to one application contradicts the listed characteristic that a file is accessible to users and applications generally."
  },
  {
    id: "csc304_ch3_029",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the database context, how are files within a database typically linked to one another?",
    options: [
      "Through common key fields",
      "Through matching file extensions only",
      "Through identical file names",
      "Through being stored on the same physical disk"
    ],
    correctAnswer: 0,
    explanation: "Within a database, files are described as linked through common key fields, with the database management system controlling access and consistency.\n\nMatching file extensions is not described as the mechanism linking files within a database.\n\nIdentical file names is not described as the mechanism linking files within a database, and would in fact cause naming conflicts.\n\nBeing stored on the same physical disk is a storage detail, not the relational linking mechanism described for files within a database."
  },
  {
    id: "csc304_ch3_030",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately pairs a level of the file hierarchy with its description?",
    options: [
      "A field is the basic element of data, containing a single value",
      "A character is a collection of multiple related records",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "A field being the basic element of data, containing a single value, is stated directly. A character is instead the smallest unit within a field, not a collection of multiple related records, which describes a file instead. Since only the field statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch3_031",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of file contains relatively permanent information, is long-lasting, and requires constant maintenance?",
    options: [
      "Master File",
      "Transaction File",
      "Reference File",
      "Pile File"
    ],
    correctAnswer: 0,
    explanation: "A Master File contains relatively permanent information, is long-lasting, and requires constant maintenance to stay current, serving as the main reference for the system.\n\nA Transaction File instead changes periodically and is used to update the master file, with a short lifespan, unlike a long-lasting master file.\n\nA Reference File instead is used for reference and validation, relatively permanent but changing with time, a different role from the master file.\n\nA Pile File is not one of the three named file types in this section; pile or serial instead describes a file organisation method."
  },
  {
    id: "csc304_ch3_032",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is given as an example of a Master File?",
    options: [
      "An employee master file, containing names, IDs, positions, and salaries",
      "A daily sales transaction record",
      "A postal code directory",
      "A tax rate table"
    ],
    correctAnswer: 0,
    explanation: "An employee master file, containing names, IDs, positions, and salaries, is given as an example of a Master File, alongside customer and inventory master files.\n\nA daily sales transaction record is instead given as an example of a Transaction File, not a Master File.\n\nA postal code directory is instead given as an example of a Reference File, not a Master File.\n\nA tax rate table is instead given as an example of a Reference File, not a Master File."
  },
  {
    id: "csc304_ch3_033",
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
    id: "csc304_ch3_034",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the workflow of a Transaction File, what happens immediately after transactions are batch processed and grouped with others?",
    options: [
      "The master file is updated",
      "The transaction file is created for the first time",
      "The reference file is validated",
      "A new employee is hired"
    ],
    correctAnswer: 0,
    explanation: "In the Transaction File workflow, batch processing groups transactions together, and the master file is updated immediately afterward, before the transaction file is archived or deleted.\n\nCreating the transaction file for the first time happens earlier in the workflow, before batch processing, not immediately after it.\n\nValidating a reference file is not a step in this transaction file workflow at all.\n\nHiring a new employee is a business event, not a step in the described transaction file processing workflow."
  },
  {
    id: "csc304_ch3_035",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of file is used for reference and validation, relatively permanent but changes with time as new reference values emerge?",
    options: [
      "Reference File",
      "Transaction File",
      "Master File",
      "Sequential File"
    ],
    correctAnswer: 0,
    explanation: "A Reference File is used for reference and validation, relatively permanent but changing with time as new reference values emerge, and is not affected by business transactions directly.\n\nA Transaction File instead has a short lifespan and is discarded after use, not relatively permanent like a reference file.\n\nA Master File instead requires constant maintenance and is long-lasting, framed differently from a reference file used for validation.\n\nA Sequential File is a file organisation method, not one of the three named file types by permanence."
  },
  {
    id: "csc304_ch3_036",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is a listed use case for a Reference File?",
    options: [
      "Validating whether a state code entered in a transaction is valid",
      "Recording the exact hours an employee worked this week",
      "Storing the salary history of a single employee",
      "Tracking which processes are currently using a file"
    ],
    correctAnswer: 0,
    explanation: "Validating a transaction, such as checking whether an entered state code is valid, is a listed use case for a Reference File.\n\nRecording hours worked this week is closer to transaction data, feeding into payroll transaction files, not a reference file's validation role.\n\nStoring a salary history describes ongoing master file data, not the lookup and validation role of a reference file.\n\nTracking which processes are using a file describes the Usage Count file attribute, unrelated to a reference file's purpose."
  },
  {
    id: "csc304_ch3_037",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a use of files within organisations?",
    options: [
      "To keep track of information, such as an audit trail",
      "To physically cool down computer hardware",
      "To generate electricity for the building",
      "To replace all forms of human decision making"
    ],
    correctAnswer: 0,
    explanation: "Keeping track of information, such as maintaining an audit trail of what happened when, is listed as a use of files within organisations, alongside aiding decision making.\n\nCooling down hardware is a physical function unrelated to the described organisational uses of files.\n\nGenerating electricity is unrelated to the described organisational uses of files.\n\nReplacing all human decision making overstates the described use, which is instead to aid decision making through reports and historical analysis, not eliminate it."
  },
  {
    id: "csc304_ch3_038",
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
    id: "csc304_ch3_039",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a challenge specific to Master File maintenance?",
    options: [
      "It requires constant maintenance despite being relatively permanent",
      "It is discarded immediately after every single use",
      "It changes so frequently that it cannot ever be relied upon",
      "It is never used to verify or validate transaction data"
    ],
    correctAnswer: 0,
    explanation: "A Master File requires constant maintenance despite its relative permanence, since it serves as the ongoing central reference for the system.\n\nBeing discarded immediately after every use describes a Transaction File, not a Master File.\n\nChanging so frequently it cannot be relied upon contradicts the described longevity and infrequent change of a Master File.\n\nMaster files are explicitly used to verify or validate transaction data, not excluded from that role."
  },
  {
    id: "csc304_ch3_040",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Payroll transactions used to update employee files, and purchase orders used to update inventory and supplier files, are both given as examples of which type of file?",
    options: [
      "Transaction File",
      "Master File",
      "Reference File",
      "Indexed File"
    ],
    correctAnswer: 0,
    explanation: "Payroll transactions and purchase orders are both given as examples of a Transaction File, since both are used to update master files rather than serving as the permanent record themselves.\n\nA Master File is instead the file being updated by these transactions, such as the employee or inventory master file, not the transaction examples themselves.\n\nA Reference File instead holds lookup and validation data, such as tax rate tables, not transactional updates like payroll or purchase orders.\n\nAn Indexed File is a file organisation method, not one of the three named file types by permanence."
  },
  {
    id: "csc304_ch3_041",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines a key, in the context of files?",
    options: [
      "One or more fields whose value uniquely or non-uniquely identifies records",
      "A physical device used to unlock a locked computer",
      "The password required to open any file",
      "A symbol placed at the very end of every record"
    ],
    correctAnswer: 0,
    explanation: "A key is one or more fields whose value uniquely or non-uniquely identifies records, enabling efficient searching, sorting, and linking.\n\nA physical unlocking device is a hardware security concept, not the file-organisation definition of a key.\n\nA universal file password is a security detail, not the definition of a key as an identifying field.\n\nA symbol placed at the end of every record is not the definition of a key given in this material."
  },
  {
    id: "csc304_ch3_042",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of key serves as a unique identifier for each record in a file, and must be non-null and immutable?",
    options: [
      "Primary Key",
      "Foreign Key",
      "Secondary Key",
      "Master Key"
    ],
    correctAnswer: 0,
    explanation: "A Primary Key is a unique identifier for each record, and is described as non-null and generally immutable, not changing after creation.\n\nA Foreign Key instead is a reference to the primary key of another record or table, not a unique identifier within the same record.\n\nA Secondary Key instead is used to identify a group of records and aid in searches, not to uniquely identify a single record.\n\nA Master Key is not one of the three named key types in this material."
  },
  {
    id: "csc304_ch3_043",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a selection criterion for choosing a good primary key?",
    options: [
      "It should be simple, with a single field preferred",
      "It should change frequently to reflect new information",
      "It should be shared by as many records as possible",
      "It should never be used for random access"
    ],
    correctAnswer: 0,
    explanation: "Being simple, with a single field preferred, is listed as a selection criterion for a primary key, alongside not changing and being meaningful or automatically generated.\n\nChanging frequently contradicts the listed criterion that a primary key should not change once assigned.\n\nBeing shared by many records contradicts the fundamental uniqueness requirement of a primary key.\n\nA primary key is explicitly described as enabling random access, not being excluded from it."
  },
  {
    id: "csc304_ch3_044",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of key is a reference to the primary key of another record or table, creating a logical relationship between files?",
    options: [
      "Foreign Key",
      "Primary Key",
      "Secondary Key",
      "Index Key"
    ],
    correctAnswer: 0,
    explanation: "A Foreign Key is a reference to the primary key of another record or table, linking related data across records and creating a logical relationship between files.\n\nA Primary Key instead is the unique identifier within its own record, not a reference to another record's key.\n\nA Secondary Key instead is used to identify a group of records for searches, not to reference another table's primary key.\n\nAn Index Key is not one of the three named key types in this material."
  },
  {
    id: "csc304_ch3_045",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the Employee and Department table example, which field in the Employee table is described as a foreign key?",
    options: [
      "Department_ID, referencing the Department table",
      "Employee_ID, referencing the Employee table itself",
      "Name, referencing the Department table",
      "Manager_ID, referencing the Employee table"
    ],
    correctAnswer: 0,
    explanation: "In the example, Department_ID within the Employee table is the foreign key, referencing the Department table's primary key.\n\nEmployee_ID is instead described as the Employee table's own primary key, not a foreign key referencing another table.\n\nName is a plain descriptive field in the Employee table, not the foreign key linking to the Department table.\n\nManager_ID referencing the Employee table is instead the foreign key listed within the Department table, not the Employee table."
  },
  {
    id: "csc304_ch3_046",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a purpose of a foreign key?",
    options: [
      "Referential integrity, ensuring data consistency between related files",
      "Guaranteeing that a record can never be updated",
      "Preventing a file from ever being deleted",
      "Automatically generating a file's name"
    ],
    correctAnswer: 0,
    explanation: "Referential integrity, ensuring data consistency between related files, is listed as a purpose of a foreign key, alongside enabling relationships and joining queries.\n\nGuaranteeing a record can never be updated is not a listed purpose of a foreign key.\n\nPreventing a file from ever being deleted is not a listed purpose of a foreign key.\n\nAutomatically generating a file's name is not a listed purpose of a foreign key."
  },
  {
    id: "csc304_ch3_047",
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
    id: "csc304_ch3_048",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Comparing a search on a primary key versus a search on a secondary key, which of the following is accurate?",
    options: [
      "A primary key search is very fast and returns one record; a secondary key search is slower and can return many",
      "A secondary key search is always faster than a primary key search",
      "Both types of search always return exactly one record",
      "Neither type of key can ever be used for searching"
    ],
    correctAnswer: 0,
    explanation: "A primary key search, such as finding the employee with a specific ID, is very fast and returns one record, while a secondary key search, such as finding all employees with a given last name, is slower and can return multiple records.\n\nA secondary key search being always faster reverses the described comparison, since primary key search is the fast, single-record lookup.\n\nBoth always returning exactly one record ignores that a secondary key search is described as returning multiple records.\n\nKeys are explicitly described as enabling efficient searching, not excluded from search use entirely."
  },
  {
    id: "csc304_ch3_049",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is given as an example of a secondary key?",
    options: [
      "Department, which groups all employees in that department",
      "Employee_ID, which identifies exactly one employee",
      "Product SKU, which identifies exactly one product",
      "ISBN, which identifies exactly one book"
    ],
    correctAnswer: 0,
    explanation: "Department is given as an example of a secondary key, since it groups all employees within that department rather than identifying a single one.\n\nEmployee_ID identifying exactly one employee is instead the given example of a primary key, not a secondary key.\n\nProduct SKU identifying exactly one product is instead the given example of a primary key, not a secondary key.\n\nISBN identifying exactly one book is instead the given example of a primary key, not a secondary key."
  },
  {
    id: "csc304_ch3_050",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes a type of key used in files?",
    options: [
      "A primary key ensures no two records share the same value",
      "A secondary key can be shared by multiple records to group them",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. A primary key ensures no two records share the same value, uniquely identifying each record. A secondary key is separately described as non-unique, able to be shared by multiple records to identify a group and aid searches. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc304_ch3_051",
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
    id: "csc304_ch3_052",
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
    id: "csc304_ch3_053",
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
    id: "csc304_ch3_054",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In UNIX, the file extension is optional, while in DOS and Windows, the file extension is required.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. A filename extension is described as optional in UNIX, while it is required in DOS and Windows, and some systems like DOS and OS/2 limit extensions to 3 characters."
  },
  {
    id: "csc304_ch3_055",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Regarding extension length limits, which system is described as limiting extensions to 3 characters?",
    options: [
      "DOS and OS/2",
      "UNIX",
      "Modern Windows",
      "Every operating system, without exception"
    ],
    correctAnswer: 0,
    explanation: "DOS and OS/2 are described as limiting extensions to 3 characters, such as exe, txt, or doc.\n\nUNIX instead has no length limit on extensions, unlike DOS and OS/2.\n\nModern Windows is described as having no practical limit on extension length, unlike the older DOS/OS/2 restriction.\n\nEvery operating system without exception overstates the rule, since UNIX and modern Windows are both described as unrestricted."
  },
  {
    id: "csc304_ch3_056",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file extension is associated with an Excel spreadsheet in the listed common extensions?",
    options: [
      ".xlsx",
      ".docx",
      ".exe",
      ".zip"
    ],
    correctAnswer: 0,
    explanation: ".xlsx (or .xls) is listed as the extension for an Excel spreadsheet among the common extensions given.\n\n.docx is instead listed as the extension for a Word document, not a spreadsheet.\n\n.exe is instead listed as the extension for an executable program, not a spreadsheet.\n\n.zip is instead listed as the extension for a compressed archive, not a spreadsheet."
  },
  {
    id: "csc304_ch3_057",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a purpose that a file name extension serves?",
    options: [
      "Helping the operating system choose the correct program to open the file",
      "Physically increasing the storage capacity of the disk",
      "Guaranteeing the file can never be deleted",
      "Automatically encrypting the file's contents"
    ],
    correctAnswer: 0,
    explanation: "Helping the operating system choose the correct program to open the file is listed as a purpose of a file name extension, alongside helping the user identify file type and enabling filtering by type.\n\nIncreasing disk storage capacity is a hardware concern, not a listed purpose of a file extension.\n\nGuaranteeing a file can never be deleted is not a listed purpose of a file extension.\n\nAutomatically encrypting file contents is not a listed purpose of a file extension."
  },
  {
    id: "csc304_ch3_058",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A file name usually has two parts separated by a dot, but the extension itself is entirely optional and never affects how the operating system treats the file.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. While a file name does usually have a main name and extension separated by a dot, the extension is not universally optional, since DOS and Windows require it, and the extension does affect OS behaviour by helping choose which program opens the file."
  },
  {
    id: "csc304_ch3_059",
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
    id: "csc304_ch3_060",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Regarding the File Type attribute, how does traditional DOS differ from modern UNIX/Linux systems?",
    options: [
      "DOS derives file type from the extension, while UNIX/Linux stores it as a separate attribute from the name",
      "DOS stores file type as a separate attribute, while UNIX/Linux derives it from the extension",
      "Neither DOS nor UNIX/Linux track file type in any way",
      "Both DOS and UNIX/Linux require a file type to be entered manually by the user every time"
    ],
    correctAnswer: 0,
    explanation: "In traditional DOS, file type is derived from the extension, while in modern UNIX/Linux, file type is stored as an attribute separate from the name.\n\nReversing the pairing, saying DOS stores it separately while UNIX/Linux derives it from the extension, contradicts the stated comparison directly.\n\nBoth systems are described as tracking file type in some form, contradicting a claim that neither tracks it at all.\n\nManual entry every time is not described as how either DOS or UNIX/Linux determines file type."
  },
  {
    id: "csc304_ch3_061",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file attribute is a pointer to the device and location where the file is stored, including the disk, partition, and sector?",
    options: [
      "Location",
      "File Type",
      "Size",
      "Usage Count"
    ],
    correctAnswer: 0,
    explanation: "Location is the pointer to the device and location where the file is stored, including which disk, partition, and sector.\n\nFile Type instead identifies the kind of file, not where it is physically stored.\n\nSize instead is the current size in bytes, words, or blocks, not the storage location.\n\nUsage Count instead tracks how many processes are using the file, not the storage location."
  },
  {
    id: "csc304_ch3_062",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which unit of file size is described as equal to 1,024 bytes?",
    options: [
      "A Kilobyte (KB)",
      "A Megabyte (MB)",
      "A Gigabyte (GB)",
      "A single bit"
    ],
    correctAnswer: 0,
    explanation: "A Kilobyte (KB) is described as equal to 1,024 bytes, the standard unit above a plain byte.\n\nA Megabyte (MB) is instead described as equal to 1,024 kilobytes, a larger unit than a kilobyte.\n\nA Gigabyte (GB) is instead described as equal to 1,024 megabytes, an even larger unit.\n\nA single bit is a much smaller unit; 1 byte is described as equal to 8 bits, not 1,024 bytes."
  },
  {
    id: "csc304_ch3_063",
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
    id: "csc304_ch3_064",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the UNIX permission string -rw-r--r--, what access does the file's owner have?",
    options: [
      "Read and write, but not execute",
      "Read, write, and execute",
      "No access at all",
      "Execute only"
    ],
    correctAnswer: 0,
    explanation: "In -rw-r--r--, the owner's three characters are rw-, meaning read and write access, but not execute.\n\nRead, write, and execute would require rwx for the owner, not the rw- shown here.\n\nNo access at all would be shown as ---, not rw-.\n\nExecute only would be shown as --x, not rw-."
  },
  {
    id: "csc304_ch3_065",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file attribute tracks the number of processes currently using the file, incrementing when a process opens it and decrementing when a process closes it?",
    options: [
      "Usage Count",
      "File Name",
      "File Type",
      "Time, Date and Process ID"
    ],
    correctAnswer: 0,
    explanation: "Usage Count tracks the number of processes currently using the file, incrementing on open and decrementing on close, helping prevent deletion while in use.\n\nFile Name instead is the human-readable symbolic name, not a count of active processes.\n\nFile Type instead is required for systems supporting different file types, not a count of active processes.\n\nTime, Date and Process ID instead track creation time, last modification, and last use, not the number of processes currently using the file."
  },
  {
    id: "csc304_ch3_066",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Within the Time, Date & Process ID attribute, which sub-attribute records when the file's content was last changed?",
    options: [
      "Last Modification Time",
      "Creation Time",
      "Last Access Time",
      "Process ID"
    ],
    correctAnswer: 0,
    explanation: "Last Modification Time records when the file's contents were last changed, which can differ from the creation time if the file has been edited.\n\nCreation Time instead records when the file was first created, not when it was last changed.\n\nLast Access Time instead records when the file was last read, which may be disabled for performance reasons, not specifically when content was changed.\n\nProcess ID instead identifies the process that created or last modified the file, not the timestamp of the change itself."
  },
  {
    id: "csc304_ch3_067",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a use case for tracking a file's time and date attributes?",
    options: [
      "Backup scheduling, backing up files modified since the last backup",
      "Automatically translating the file's contents",
      "Automatically compressing the file to save space",
      "Preventing the file from ever being renamed"
    ],
    correctAnswer: 0,
    explanation: "Backup scheduling, backing up files modified since the last backup, is listed as a use case for tracking time and date attributes, alongside finding recent files and audit trails.\n\nAutomatically translating file contents is not a listed use case for time and date attributes.\n\nAutomatically compressing a file is not a listed use case for time and date attributes.\n\nPreventing renaming is not a listed use case for time and date attributes; renaming is instead a separate OS-level operation."
  },
  {
    id: "csc304_ch3_068",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes a file attribute?",
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
    id: "csc304_ch3_069",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "File attributes are best described as which of the following?",
    options: [
      "Metadata, information about a file stored by the operating system",
      "The actual content typed into the body of the file",
      "A backup copy of the file kept on a separate disk",
      "A password required before the file can be opened"
    ],
    correctAnswer: 0,
    explanation: "File attributes are described as metadata, information about a file stored by the operating system, such as its name, type, size, and permissions.\n\nThe actual content typed into the file's body is the file's data itself, not the metadata describing it.\n\nA backup copy on a separate disk is a data protection measure, not the definition of file attributes.\n\nA required password is a specific security mechanism, not the general definition of metadata attributes."
  },
  {
    id: "csc304_ch3_070",
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
    id: "csc304_ch3_071",
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
    id: "csc304_ch3_072",
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
    id: "csc304_ch3_073",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method is described as slow in speed, and typically used in batch processing systems such as payroll?",
    options: [
      "Sequential",
      "Direct / Random",
      "Indexed",
      "Hash"
    ],
    correctAnswer: 0,
    explanation: "Sequential file organisation is described as slow, with a typical use in batch processing such as payroll systems.\n\nDirect / Random organisation instead is described as very fast, typically used in real-time reservation systems, not payroll.\n\nIndexed organisation instead is described as fast, typically used in databases, not payroll.\n\nHash organisation instead is described as very fast, typically used in real-time applications, not payroll."
  },
  {
    id: "csc304_ch3_074",
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
    id: "csc304_ch3_075",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In a Pile / Serial file, what is meant by 'self-describing fields'?",
    options: [
      "Each field includes both its name and its value together",
      "Each field automatically corrects any spelling errors",
      "Each field is permanently locked from editing",
      "Each field must always be exactly the same length"
    ],
    correctAnswer: 0,
    explanation: "Self-describing fields means each field includes its name plus its value, such as Name='John', since a Pile / Serial file has no fixed format shared across records.\n\nAutomatic spelling correction is not what self-describing fields refers to in this context.\n\nBeing permanently locked from editing is not what self-describing fields refers to; a pile file is instead described as simple to add data to.\n\nEvery field being exactly the same length contradicts the pile file's defining lack of a fixed format."
  },
  {
    id: "csc304_ch3_076",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a disadvantage of a Pile / Serial file?",
    options: [
      "Slow searching, since the entire file must be scanned",
      "It cannot be used to accumulate any new data at all",
      "It requires a specialised index for every field",
      "It is the most complex file organisation method to set up"
    ],
    correctAnswer: 0,
    explanation: "Slow searching, since the entire file must be scanned, is listed as a disadvantage of a Pile / Serial file, alongside no logical ordering and wasted storage.\n\nA pile file is instead specifically described as good for initial data collection and accumulation, not incapable of accumulating data.\n\nRequiring a specialised index for every field describes an Indexed File, not the simple, index-free Pile / Serial file.\n\nA pile file is described as very simple to implement, the opposite of being the most complex method."
  },
  {
    id: "csc304_ch3_077",
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
    id: "csc304_ch3_078",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an advantage of a Sequential File?",
    options: [
      "Efficient for batch processing, since all records can be processed at once",
      "Instant random access to any single record",
      "No wasted storage even when many fields vary in length",
      "It never needs to be rewritten when a record is updated"
    ],
    correctAnswer: 0,
    explanation: "Being efficient for batch processing, since all records can be processed at once, is listed as an advantage of a Sequential File.\n\nInstant random access is explicitly listed as something a Sequential File cannot do; it must be read from the start.\n\nSequential files store fixed-length records regardless of variation, so the storage-efficiency advantage relates to having no wasted space in that fixed structure, not to varying field lengths without waste.\n\nSequential files are explicitly described as needing to be rewritten to update a record, not being exempt from it."
  },
  {
    id: "csc304_ch3_079",
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
    id: "csc304_ch3_080",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In a Sequential File storing employee IDs 101, 102, 103, and 104 in order, how many records must be read to find employee 103?",
    options: [
      "Three records, reading 101, then 102, then 103",
      "One record, jumping directly to 103",
      "Four records, reading all of them regardless of the target",
      "Zero records, since the file uses a hash function"
    ],
    correctAnswer: 0,
    explanation: "In the worked example, finding employee 103 requires reading three records in sequence, 101, then 102, then 103, matching on the third read.\n\nJumping directly to a record in one read describes random or indexed access, not the sequential scanning a Sequential File requires.\n\nReading all four records regardless of the target describes worst-case behaviour only if the target were the last or absent record, not the specific three-record example given for record 103.\n\nA hash function is not used in a Sequential File; that describes a Direct / Hashed File instead."
  },
  {
    id: "csc304_ch3_081",
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
    id: "csc304_ch3_082",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the three components of an Indexed Sequential File?",
    options: [
      "The Overflow File, temporary storage for newly inserted records",
      "A dedicated hash table for every field",
      "A permanent lock preventing any record from being deleted",
      "A built-in compiler for translating source code"
    ],
    correctAnswer: 0,
    explanation: "The Overflow File, temporary storage for newly inserted records, is listed as one of the three ISAM components, alongside the sequential ordered file and the index.\n\nA dedicated hash table for every field describes a hashing approach, not one of ISAM's three named components.\n\nA permanent record-deletion lock is not one of ISAM's three named components.\n\nA built-in compiler is unrelated to file organisation and is not one of ISAM's three named components."
  },
  {
    id: "csc304_ch3_083",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the ISAM worked example, how is employee 103 located using the index, compared to a plain Sequential File?",
    options: [
      "The index points directly to Block 2, Position 1, avoiding any scanning",
      "The file must still be scanned from the very first record",
      "The record can only be found by rebuilding the entire index first",
      "The record is permanently stored in the overflow file only"
    ],
    correctAnswer: 0,
    explanation: "In the ISAM example, the index shows employee 103 is at Block 2, Position 1, so the system goes directly there and retrieves the record with no scanning needed.\n\nScanning from the very first record describes the plain Sequential File approach, which ISAM's index is specifically designed to avoid.\n\nRebuilding the entire index first is not part of the lookup process described in this example.\n\nThe overflow file in the example instead holds a newly inserted record, employee 104, not employee 103, which is found via the index into the main file."
  },
  {
    id: "csc304_ch3_084",
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
    explanation: "ISAM is used where sequential processing of large records is needed but occasional direct access is also required, such as in airline reservation systems and banking systems.\n\nA simple personal to-do list app does not require the large-scale sequential processing with occasional direct access that ISAM is designed for.\n\nA single-user offline calculator has no file records to process sequentially or access directly in this sense.\n\nA basic digital alarm clock has no file records to process sequentially or access directly in this sense."
  },
  {
    id: "csc304_ch3_085",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Indexed Sequential Files (ISAM) are described as more complex than pure sequential files, and their performance degrades over time as the overflow file grows.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. ISAM's listed disadvantages include being more complex than pure sequential files, requiring storage overhead for the index, and performance degrading over time as the overflow file grows, requiring periodic reorganisation."
  },
  {
    id: "csc304_ch3_086",
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
    id: "csc304_ch3_087",
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
    id: "csc304_ch3_088",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of index in an Indexed File is described as having one entry per record, giving complete coverage of a field?",
    options: [
      "Exhaustive index",
      "Partial index",
      "Overflow index",
      "Master index"
    ],
    correctAnswer: 0,
    explanation: "An exhaustive index has one entry per record, giving complete coverage of the indexed field across all records.\n\nA partial index instead has entries only for records where the field exists, saving space for sparse data, not covering every record.\n\nAn overflow index is not one of the two named index types in this material.\n\nA master index is not one of the two named index types in this material."
  },
  {
    id: "csc304_ch3_089",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the Indexed File worked example, which index would be used to answer the query 'Find all Smiths'?",
    options: [
      "The Last_Name index",
      "The Employee_ID index",
      "The Department index",
      "No index; the file must be scanned in full"
    ],
    correctAnswer: 0,
    explanation: "In the worked example, finding all Smiths uses the Last_Name index, which returns all records sharing that name.\n\nThe Employee_ID index is instead used for finding a single employee by ID, such as 'Find employee 103,' not searching by surname.\n\nThe Department index is instead used for finding all employees in a given department, such as Sales, not searching by surname.\n\nAn index is specifically available for this search, so a full scan is not required for this particular query."
  },
  {
    id: "csc304_ch3_090",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a disadvantage of an Indexed File?",
    options: [
      "Update complexity, since all affected indexes must be updated",
      "It can only ever be searched using one single field",
      "It cannot support variable-length records",
      "It is the only file organisation method usable on magnetic tape"
    ],
    correctAnswer: 0,
    explanation: "Update complexity, since all affected indexes must be updated, is listed as a disadvantage of an Indexed File, alongside storage overhead and slower inserts or deletes.\n\nAn Indexed File is instead specifically praised for allowing searches on multiple fields, not restricted to one single field.\n\nAn Indexed File explicitly supports variable-length records, rather than being unable to support them.\n\nSequential File, not Indexed File, is described as the only method that works on magnetic tape."
  },
  {
    id: "csc304_ch3_091",
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
    id: "csc304_ch3_092",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the hashing example given, using the formula Hash(key) = key mod 100, where is Employee 203 stored?",
    options: [
      "Bucket 3",
      "Bucket 1",
      "Bucket 2",
      "Bucket 100"
    ],
    correctAnswer: 0,
    explanation: "Using Hash(203) = 203 mod 100 = 3, Employee 203 is stored in Bucket 3, exactly as shown in the worked hashing example.\n\nBucket 1 is instead where Employee 101 is stored, since 101 mod 100 equals 1, not 3.\n\nBucket 2 is instead where Employee 102 is stored, since 102 mod 100 equals 2, not 3.\n\nBucket 100 is not a result produced by this hash formula for Employee 203; the modulus operation always yields a remainder from 0 to 99."
  },
  {
    id: "csc304_ch3_093",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the hashing example given, Employee 101 and Employee 301 both hash to Bucket 1 using Hash(key) = key mod 100. What is this situation called?",
    options: [
      "A collision",
      "An overflow file",
      "A partial index",
      "A foreign key conflict"
    ],
    correctAnswer: 0,
    explanation: "When two records, such as Employee 101 and Employee 301, hash to the same location, this is called a collision, which must then be handled through chaining, probing, or an overflow area.\n\nAn overflow file is instead one of the possible ways to handle a collision once it occurs, not the name for the collision event itself.\n\nA partial index is instead a type of index used in an Indexed File, unrelated to hashing collisions.\n\nA foreign key conflict is a database relationship issue, not the term used for two keys hashing to the same location."
  },
  {
    id: "csc304_ch3_094",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a method for handling a hashing collision?",
    options: [
      "Chaining, linking to the next available location",
      "Ignoring the second record entirely and deleting it",
      "Automatically renaming the file",
      "Converting the file to a Pile / Serial organisation"
    ],
    correctAnswer: 0,
    explanation: "Chaining, linking to the next available location, is listed as a way to handle a hashing collision, alongside probing and using an overflow file.\n\nIgnoring and deleting the second record is not a listed collision-handling method; both records need to be stored and retrievable.\n\nAutomatically renaming the file is not a listed collision-handling method.\n\nConverting to a Pile / Serial organisation is not a listed collision-handling method for a hashed file."
  },
  {
    id: "csc304_ch3_095",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a disadvantage of a Direct / Hashed File?",
    options: [
      "No sequential access, making it difficult to process all records in order",
      "It is the slowest file organisation method available",
      "It always requires a separate index file to be maintained",
      "It cannot be used in any online or real-time system"
    ],
    correctAnswer: 0,
    explanation: "No sequential access, making it difficult to process all records in order, is listed as a disadvantage of a Direct / Hashed File, alongside collision handling and load factor sensitivity.\n\nA Direct / Hashed File is instead described as offering very fast access, the opposite of being the slowest method.\n\nA Direct / Hashed File specifically avoids needing a separate index, computing location directly through hashing instead.\n\nDirect / Hashed File is explicitly listed as well suited to online, real-time systems such as hotel reservations, not excluded from them."
  },
  {
    id: "csc304_ch3_096",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the speed comparison of file organisation methods, which ordering, from slowest to fastest, is given?",
    options: [
      "Sequential, then ISAM, then Indexed, then Hashed",
      "Hashed, then Indexed, then ISAM, then Sequential",
      "ISAM, then Sequential, then Hashed, then Indexed",
      "Indexed, then Hashed, then Sequential, then ISAM"
    ],
    correctAnswer: 0,
    explanation: "The speed comparison orders the methods from slowest to fastest as Sequential, then ISAM, then Indexed, then Hashed.\n\nListing Hashed first and Sequential last reverses the given order, from fastest to slowest instead of slowest to fastest.\n\nISAM, Sequential, Hashed, Indexed scrambles the given order incorrectly.\n\nIndexed, Hashed, Sequential, ISAM also scrambles the given order incorrectly."
  },
  {
    id: "csc304_ch3_097",
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
    id: "csc304_ch3_098",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method is described as the standard for most modern databases, supporting complex searches across multiple fields?",
    options: [
      "Indexed File",
      "Pile / Serial",
      "Sequential File",
      "Direct / Hashed File"
    ],
    correctAnswer: 0,
    explanation: "The Indexed File is described as the method used by most modern databases, supporting complex searches and multiple query types across multiple fields.\n\nPile / Serial instead is described as suited to archive files and initial data collection, not the modern database standard.\n\nSequential File instead is described as suited to batch processing such as payroll, not the flexible multi-field searching of most databases.\n\nDirect / Hashed File instead is described as suited to online lookups and caching, not general multi-field database queries specifically."
  },
  {
    id: "csc304_ch3_099",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file organisation method is best matched to an online hotel reservation system needing instant lookups by a single key?",
    options: [
      "Direct / Hashed File",
      "Pile / Serial",
      "Sequential File",
      "Indexed File"
    ],
    correctAnswer: 0,
    explanation: "Direct / Hashed File is given as the use case example for online hotel reservation systems, offering very fast, direct-access lookups by key.\n\nPile / Serial instead is suited to archive and accumulation tasks, not instant single-key lookups for a live reservation system.\n\nSequential File instead is suited to batch processing, not the instant lookups a live reservation system needs.\n\nIndexed File instead is suited to complex multi-field database queries, a heavier-weight solution than the single-key direct lookups this scenario calls for."
  },
  {
    id: "csc304_ch3_100",
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
    id: "csc304_ch3_101",
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
    id: "csc304_ch3_102",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "When considering insertion into a file, which of the following is listed as a factor to consider?",
    options: [
      "Whether the primary key is already present, to maintain uniqueness",
      "Whether the file's icon needs to be redesigned",
      "Whether the file should be renamed after insertion",
      "Whether the printer is currently connected"
    ],
    correctAnswer: 0,
    explanation: "Whether the primary key is already present, to maintain uniqueness, is listed as a consideration for insertion, alongside where the new record goes and whether there is room.\n\nRedesigning the file's icon is not a listed consideration for inserting a record.\n\nRenaming the file after insertion is not a listed consideration for inserting a record.\n\nWhether a printer is connected is unrelated to the listed considerations for inserting a record into a file."
  },
  {
    id: "csc304_ch3_103",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "How is insertion typically implemented in an Indexed Sequential File (ISAM)?",
    options: [
      "The new record is added to the overflow file, and integrated later",
      "The entire file must always be deleted and recreated from scratch",
      "The record is hashed to compute its bucket location",
      "The record is simply appended with no structure at all"
    ],
    correctAnswer: 0,
    explanation: "In an ISAM file, insertion is implemented by adding the new record to the overflow file, to be integrated into the main file later during reorganisation.\n\nDeleting and recreating the entire file is not how ISAM handles insertion; that would defeat the purpose of the overflow file's efficiency.\n\nHashing to compute a bucket location describes insertion in a Direct / Hashed File, not an ISAM file.\n\nSimply appending with no structure describes a Pile / Serial file, not the indexed, ordered structure of ISAM."
  },
  {
    id: "csc304_ch3_104",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a challenge of insertion?",
    options: [
      "Re-sorting sequential files is expensive",
      "Insertion is always instantaneous with zero cost",
      "Uniqueness is never a concern during insertion",
      "Insertion is impossible in any file organisation method"
    ],
    correctAnswer: 0,
    explanation: "Re-sorting sequential files being expensive is listed as a challenge of insertion, alongside maintaining uniqueness and managing overflow in ISAM files.\n\nInsertion being always instantaneous with zero cost contradicts the listed challenge that re-sorting sequential files is expensive.\n\nMaintaining uniqueness is explicitly listed as something that must be managed during insertion, not something that can be ignored.\n\nInsertion is described as implemented across every file organisation method discussed, not impossible in any of them."
  },
  {
    id: "csc304_ch3_105",
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
    id: "csc304_ch3_106",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the two deletion approaches marks a record as deleted with a flag, while leaving it physically in place?",
    options: [
      "Logical deletion",
      "Physical deletion",
      "Overflow deletion",
      "Indexed deletion"
    ],
    correctAnswer: 0,
    explanation: "Logical deletion marks a record as deleted with a flag while leaving it physically in place in the file.\n\nPhysical deletion instead removes the record completely from the file, rather than just flagging it.\n\nOverflow deletion is not one of the two named deletion approaches in this material.\n\nIndexed deletion is not one of the two named deletion approaches in this material."
  },
  {
    id: "csc304_ch3_107",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an advantage of logical deletion?",
    options: [
      "It is fast, since it only requires setting a flag, and it is reversible",
      "It permanently reclaims all disk space immediately",
      "It never requires any later cleanup",
      "It makes the file impossible to undelete"
    ],
    correctAnswer: 0,
    explanation: "Being fast, since it only requires setting a flag, and being reversible so the record can be undeleted, are listed as advantages of logical deletion.\n\nImmediately reclaiming all disk space is instead listed as an advantage of physical deletion, not logical deletion, which leaves the record's space occupied.\n\nLogical deletion is listed as needing periodic cleanup through physical deletion later, not as never requiring cleanup.\n\nLogical deletion is specifically described as reversible, allowing undeleting, the opposite of making the record impossible to undelete."
  },
  {
    id: "csc304_ch3_108",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a disadvantage of physical deletion, compared to logical deletion?",
    options: [
      "It is expensive, since the file must be rewritten, and it is irreversible",
      "It wastes space by keeping deleted records stored",
      "It requires setting a simple flag on the record",
      "It is always faster than logical deletion"
    ],
    correctAnswer: 0,
    explanation: "Physical deletion is listed as expensive, since the file must be rewritten, and irreversible, unlike the flag-based logical deletion approach.\n\nWasting space by keeping deleted records stored is instead a disadvantage of logical deletion, not physical deletion, which reclaims that space.\n\nSetting a simple flag describes logical deletion, not physical deletion, which removes the record completely.\n\nPhysical deletion is described as expensive precisely because it requires rewriting the file, not as being always faster than logical deletion."
  },
  {
    id: "csc304_ch3_109",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a challenge of deletion that applies across file organisation methods?",
    options: [
      "Sequential files must be rewritten to maintain ordering after deletion",
      "Deletion always increases the total size of the file",
      "Deletion is never affected by how a file is indexed",
      "Deletion can only ever be performed by the file's original creator"
    ],
    correctAnswer: 0,
    explanation: "Sequential files needing to be rewritten to maintain ordering after deletion is listed as a challenge of deletion, alongside indexing overhead and performance during deletion.\n\nDeletion removing a record would generally reduce or maintain size rather than increase it, especially under physical deletion, contradicting this option.\n\nIndexing overhead, updating indexes after a deletion, is explicitly listed as a challenge, not something deletion is unaffected by.\n\nRestricting deletion to only the file's original creator is not a listed challenge of deletion in this material."
  },
  {
    id: "csc304_ch3_110",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file maintenance activity refers to making changes to existing records, such as a field update or a full record replacement?",
    options: [
      "Updating",
      "Insertion",
      "Deletion",
      "Blocking"
    ],
    correctAnswer: 0,
    explanation: "Updating refers to making changes to existing records, including a field update, a full record replacement, or a bulk update to many records.\n\nInsertion instead refers to adding an entirely new record, not changing an existing one.\n\nDeletion instead refers to removing a record entirely, not changing its content.\n\nBlocking instead refers to logically grouping records into blocks during processing, not modifying record content."
  },
  {
    id: "csc304_ch3_111",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the salary update example, how does updating a Sequential File compare to updating an Indexed File?",
    options: [
      "The Sequential File requires rewriting the entire file, while the Indexed File can update in place using the index",
      "Both file types update in exactly the same way, with no difference at all",
      "The Sequential File updates instantly, while the Indexed File must rewrite the entire file",
      "Neither file type can ever have a salary field updated"
    ],
    correctAnswer: 0,
    explanation: "In the salary update example, the Sequential File requires reading the old record and rewriting the entire file, an expensive process, while the Indexed File can use its index to locate the record and update it in place.\n\nClaiming both update in exactly the same way ignores the explicit contrast drawn between rewriting the whole sequential file versus updating in place using an index.\n\nThe example reverses this comparison if it claims Sequential updates instantly while Indexed rewrites everything; it is the Sequential File that requires the expensive full rewrite.\n\nBoth file types are shown being successfully updated in the example, not excluded from having their salary field changed."
  },
  {
    id: "csc304_ch3_112",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a challenge of updating a record?",
    options: [
      "If a record's size changes, it may need to be relocated",
      "Updating a record is always instantaneous and risk-free",
      "Bulk updates are impossible to perform on any file",
      "Transaction consistency is never a concern during updates"
    ],
    correctAnswer: 0,
    explanation: "If a record's size changes, it may need to be relocated, which is listed as a challenge of updating, alongside partial versus full updates and transaction consistency during a crash mid-update.\n\nUpdating being always instantaneous and risk-free contradicts the listed challenges, such as the risk of a crash occurring mid-update.\n\nBulk updates are explicitly listed as one of the types of updates possible, not something impossible to perform.\n\nTransaction consistency, what happens if a crash occurs mid-update, is explicitly listed as a challenge, not something that is never a concern."
  },
  {
    id: "csc304_ch3_113",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the importances of file maintenance?",
    options: [
      "It improves accuracy by catching and correcting errors",
      "It guarantees a file can never be deleted again",
      "It automatically increases a computer's processing speed",
      "It eliminates the need for any file attributes"
    ],
    correctAnswer: 0,
    explanation: "Improving accuracy, catching and correcting errors and removing outdated information, is listed as an importance of file maintenance, alongside preventing duplication and supporting business operations.\n\nGuaranteeing a file can never be deleted contradicts the very existence of deletion as a normal file maintenance activity.\n\nAutomatically increasing processing speed is not a listed importance of file maintenance in this material.\n\nEliminating the need for file attributes is not a listed importance of file maintenance; attributes remain necessary regardless."
  },
  {
    id: "csc304_ch3_114",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which importance of file maintenance ensures primary key uniqueness and maintains data integrity?",
    options: [
      "Preventing duplication",
      "Improving accuracy",
      "Supporting business operations",
      "Enabling random access"
    ],
    correctAnswer: 0,
    explanation: "Preventing duplication is the importance of file maintenance that maintains data integrity and ensures primary key uniqueness.\n\nImproving accuracy instead focuses on catching errors and removing outdated information, a related but distinct importance.\n\nSupporting business operations instead focuses on employees working with current data and maintaining legal compliance.\n\nEnabling random access is a property of certain file organisation methods, not one of the three listed importances of file maintenance."
  },
  {
    id: "csc304_ch3_115",
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
    explanation: "Human error is listed as a challenge of file maintenance, alongside hardware failure, unauthorised access, and fire incidents and disaster.\n\nExcessive file naming flexibility is not listed as a challenge of file maintenance in this material.\n\nToo many available file organisation methods is not listed as a challenge of file maintenance.\n\nOverly fast search performance is not listed as a challenge of file maintenance; slow searching is instead a disadvantage of specific organisation methods."
  },
  {
    id: "csc304_ch3_116",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a mitigation for the human error challenge in file maintenance?",
    options: [
      "Validation rules and review or approval processes",
      "Disabling all data entry forms permanently",
      "Removing every backup of the file",
      "Turning off all access control permissions"
    ],
    correctAnswer: 0,
    explanation: "Validation rules and review or approval processes are listed as mitigations for human error, alongside data entry forms with constraints.\n\nDisabling data entry forms permanently would prevent legitimate use, not the listed mitigation of adding constraints to those forms.\n\nRemoving backups is the opposite of a listed mitigation for hardware failure, not a mitigation for human error.\n\nTurning off access control permissions is the opposite of a listed mitigation for unauthorised access, not a mitigation for human error."
  },
  {
    id: "csc304_ch3_117",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file maintenance challenge is mitigated by backups, transaction logs, and RAID systems?",
    options: [
      "Hardware failure",
      "Human error",
      "Unauthorised access",
      "Fire incidents and disaster"
    ],
    correctAnswer: 0,
    explanation: "Hardware failure, such as a disk crash or power loss during an update, is mitigated by backups, transaction logs, RAID systems, and redundancy.\n\nHuman error is instead mitigated by validation rules and review processes, not specifically by RAID systems.\n\nUnauthorised access is instead mitigated by access control, audit trails, and encryption, not specifically by RAID systems.\n\nFire incidents and disaster is instead mitigated by off-site backups and disaster recovery plans, a related but distinct set of mitigations from RAID."
  },
  {
    id: "csc304_ch3_118",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Unauthorised access, such as fire incidents when files are not adequately protected, is listed as a challenge of file maintenance requiring off-site backups and disaster recovery plans.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Fire incidents and disaster is its own separate challenge, mitigated by off-site backups and disaster recovery plans, while unauthorised access is a distinct challenge, mitigated instead by access control, audit trails, encryption, and monitoring."
  },
  {
    id: "csc304_ch3_119",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following best defines file processing operations?",
    options: [
      "Higher-level actions performed on files to reorganise, combine, or search them",
      "The physical act of formatting a hard disk",
      "The process of designing a database schema from scratch",
      "A single command that deletes every file on a system at once"
    ],
    correctAnswer: 0,
    explanation: "File processing operations are described as higher-level actions performed on files to reorganise, combine, or search them.\n\nPhysically formatting a hard disk is a low-level storage operation, not the higher-level file processing described here.\n\nDesigning a database schema from scratch is a design activity, not one of the named higher-level file processing operations.\n\nDeleting every file on a system at once is not one of the named file processing operations."
  },
  {
    id: "csc304_ch3_120",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to bringing file information up to date by feeding in current data, such as combining an old master file with a transaction file?",
    options: [
      "Updating",
      "Sorting",
      "Blocking",
      "Matching"
    ],
    correctAnswer: 0,
    explanation: "Updating refers to bringing file information up to date by feeding in current data, such as processing a transaction file against an old master file to produce an updated master file.\n\nSorting instead refers to arranging records in a particular order, not bringing information up to date.\n\nBlocking instead refers to grouping records into blocks for processing efficiency, not updating content.\n\nMatching instead refers to locating a record using one or more attributes, not bringing information up to date."
  },
  {
    id: "csc304_ch3_121",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the payroll updating example, what does the process calculate using the old employee file and the transaction file of new hours worked?",
    options: [
      "New year-to-date pay and deductions",
      "A brand new employee ID for every worker",
      "The company's total annual revenue",
      "The physical location of the payroll office"
    ],
    correctAnswer: 0,
    explanation: "In the payroll updating example, the process calculates new year-to-date pay, updates hours, and calculates deductions using the old employee file and the transaction file.\n\nGenerating a brand new employee ID for every worker is not part of this updating example.\n\nCalculating total annual company revenue is not part of this updating example, which focuses on individual employee pay records.\n\nDetermining the physical office location is not part of this updating example."
  },
  {
    id: "csc304_ch3_122",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to arranging records in a particular order, such as alphabetical or numerical?",
    options: [
      "Sorting",
      "Blocking",
      "Merging",
      "Searching"
    ],
    correctAnswer: 0,
    explanation: "Sorting refers to arranging records in a particular order, alphabetical or numerical, using a primary key with secondary and tertiary keys as tiebreakers.\n\nBlocking instead refers to grouping records into blocks for I/O efficiency, not arranging their order.\n\nMerging instead refers to combining two or more files into a larger file, not arranging the order within one file.\n\nSearching instead refers to locating a specific record, not arranging the order of all records."
  },
  {
    id: "csc304_ch3_123",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In sorting, if two records share the same primary sort key, which key is used as a tiebreaker?",
    options: [
      "The secondary key",
      "The primary key again",
      "A randomly chosen key",
      "No tiebreaker is ever used"
    ],
    correctAnswer: 0,
    explanation: "The secondary key is used as a tiebreaker when two records share the same primary sort key, and a tertiary key can be used for further tiebreaking.\n\nUsing the primary key again would not resolve a tie, since it is the field the two records already share.\n\nA randomly chosen key is not the described tiebreaking mechanism; sorting instead uses a defined secondary key.\n\nA tiebreaker is explicitly used, in the form of a secondary key, contradicting a claim that none is ever used."
  },
  {
    id: "csc304_ch3_124",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which sorting approach is used when a file is too large to fit in memory, requiring disk access such as Merge Sort?",
    options: [
      "External sort",
      "Internal sort",
      "Direct sort",
      "Hash sort"
    ],
    correctAnswer: 0,
    explanation: "External sort is used when a file is too large to fit in memory, requiring disk access, commonly using Merge Sort for this purpose.\n\nInternal sort instead is used when the file fits entirely in memory, such as with Quick Sort or Merge Sort applied in memory.\n\nDirect sort is not one of the two named sorting approaches in this material.\n\nHash sort is not one of the two named sorting approaches in this material; hashing instead relates to a file organisation method."
  },
  {
    id: "csc304_ch3_125",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a use of sorting?",
    options: [
      "Finding duplicates, since identical records become adjacent",
      "Permanently deleting every record in a file",
      "Encrypting a file's contents before storage",
      "Physically relocating a hard disk to a new server room"
    ],
    correctAnswer: 0,
    explanation: "Finding duplicates, since identical records become adjacent once sorted, is listed as a use of sorting, alongside preparing data for sequential processing and performance optimisation.\n\nPermanently deleting every record describes a deletion operation, not a listed use of sorting.\n\nEncrypting a file's contents is a security operation, not a listed use of sorting.\n\nPhysically relocating a hard disk is a hardware logistics task, not a listed use of sorting."
  },
  {
    id: "csc304_ch3_126",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to combining two or more files into a larger file, usually requiring the input files to be pre-sorted for efficiency?",
    options: [
      "Merging",
      "Blocking",
      "Sorting",
      "Matching"
    ],
    correctAnswer: 0,
    explanation: "Merging refers to combining two or more files into a larger file, usually requiring the input files to be pre-sorted for efficiency.\n\nBlocking instead refers to grouping records into blocks for I/O efficiency within one file, not combining separate files.\n\nSorting instead refers to arranging the order of records within a file, a step that often precedes merging but is a distinct operation.\n\nMatching instead refers to locating a record using one or more attributes, not combining files together."
  },
  {
    id: "csc304_ch3_127",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the merging algorithm for sorted files, after opening both files and comparing their first records, what happens next?",
    options: [
      "The smaller record is copied to the output, and that file's position is advanced",
      "Both files are immediately closed without further action",
      "The larger record is always discarded permanently",
      "The two files are concatenated without any comparison"
    ],
    correctAnswer: 0,
    explanation: "After comparing the first records, the smaller record is copied to the output, and the position in that file is advanced, repeating until all records are processed.\n\nImmediately closing both files without further action contradicts the described repeating comparison process needed to merge all records.\n\nDiscarding the larger record permanently would lose data, contradicting the goal of merging, which preserves all records from both files.\n\nConcatenating without comparison describes a different, simpler technique, not the comparison-based merging algorithm described here."
  },
  {
    id: "csc304_ch3_128",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What time complexity is given for the merging algorithm on sorted files?",
    options: [
      "O(n + m), linear time",
      "O(n squared), quadratic time",
      "O(log n), logarithmic time",
      "O(1), constant time"
    ],
    correctAnswer: 0,
    explanation: "The merging algorithm on sorted files is described as O(n + m), a linear time complexity relative to the sizes of the two input files.\n\nO(n squared), quadratic time, is not the complexity given for this merging algorithm; that would describe a much less efficient process.\n\nO(log n), logarithmic time, is not the complexity given for this merging algorithm; that instead describes binary search or indexed lookups.\n\nO(1), constant time, is not the complexity given for this merging algorithm; that instead describes hash-based direct access."
  },
  {
    id: "csc304_ch3_129",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to logically grouping records into fixed or variable blocks treated as a single unit during processing?",
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
    id: "csc304_ch3_130",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Why is blocking used, given that disk input/output is slow?",
    options: [
      "It is efficient to read many records at once, reducing the number of disk seeks",
      "It permanently increases the total capacity of the disk",
      "It removes the need for any file attributes",
      "It automatically encrypts every record in the block"
    ],
    correctAnswer: 0,
    explanation: "Blocking is used because it is efficient to read many records at once, reducing the number of disk seeks needed, since disk I/O is slow.\n\nIncreasing total disk capacity is not the purpose of blocking; blocking instead is an I/O efficiency technique, not a capacity-expansion one.\n\nRemoving the need for file attributes is not the purpose of blocking.\n\nAutomatically encrypting records is not the purpose of blocking; blocking concerns I/O grouping, not security."
  },
  {
    id: "csc304_ch3_131",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "What is the Inter-Block Gap (IBG) described as?",
    options: [
      "Space between blocks, needed for disk hardware, which is wasted space",
      "The total number of records inside a single block",
      "A security feature that encrypts data between blocks",
      "The name of the algorithm used to sort blocks"
    ],
    correctAnswer: 0,
    explanation: "The Inter-Block Gap is the space between blocks, needed for disk hardware, and is described as wasted space that reduces efficiency.\n\nThe total number of records inside a block is a separate concept from the gap between blocks, not the definition of the IBG.\n\nAn encryption feature is not what the Inter-Block Gap refers to; it is a physical spacing concept, not a security one.\n\nA sorting algorithm name is not what the Inter-Block Gap refers to."
  },
  {
    id: "csc304_ch3_132",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Regarding block size tradeoffs, what happens when blocks are made larger?",
    options: [
      "I/O becomes more efficient, but more space may be wasted",
      "Disk seeks always increase in number",
      "No wasted space of any kind ever occurs",
      "Records can no longer be grouped together at all"
    ],
    correctAnswer: 0,
    explanation: "Larger blocks make I/O more efficient, since fewer blocks need to be read, but more space may be wasted within each block.\n\nDisk seeks are described as decreasing, not increasing, as blocks get larger, since fewer, bigger blocks are read.\n\nWasted space is explicitly part of the described tradeoff, such as space lost to the inter-block gap, not something that never occurs.\n\nGrouping records together is exactly what a larger block still does; it does not prevent grouping."
  },
  {
    id: "csc304_ch3_133",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the blocking example, with a 100-byte record size and a 1000-byte block including a 50-byte Inter-Block Gap, how many records fit per block?",
    options: [
      "9 records, using 950 bytes of usable space",
      "10 records, using all 1000 bytes with no gap",
      "5 records, using only half the block",
      "100 records, filling the block completely"
    ],
    correctAnswer: 0,
    explanation: "With a 50-byte Inter-Block Gap, the usable space is 950 bytes, fitting 9 records of 100 bytes each, leaving 50 bytes wasted to the gap.\n\n10 records using all 1000 bytes describes the scenario without any Inter-Block Gap, a separate case from the one with a 50-byte gap.\n\n5 records using only half the block understates the usable space, which fits 9 records, not 5.\n\n100 records filling the block completely is far more than the block's 1000-byte capacity could hold at 100 bytes per record."
  },
  {
    id: "csc304_ch3_134",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to going through a file to locate a record using the key field?",
    options: [
      "Searching",
      "Blocking",
      "Sorting",
      "Merging"
    ],
    correctAnswer: 0,
    explanation: "Searching refers to going through a file to locate a record using the key field, employing strategies such as linear, binary, index, or hash search.\n\nBlocking instead refers to grouping records into blocks for processing, not locating a specific record.\n\nSorting instead refers to arranging the order of all records, not locating one specific record.\n\nMerging instead refers to combining two or more files into a larger file, not locating a specific record."
  },
  {
    id: "csc304_ch3_135",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which search strategy starts in the middle of a sorted file and repeatedly halves the remaining range, running in O(log n) time?",
    options: [
      "Binary Search",
      "Linear Search",
      "Hash Search",
      "Index Search"
    ],
    correctAnswer: 0,
    explanation: "Binary Search starts in the middle of a sorted file and repeatedly halves the remaining range, comparing against the midpoint, running in O(log n) time.\n\nLinear Search instead starts at the beginning and compares each record in turn, running in O(n) time, not the halving approach of binary search.\n\nHash Search instead applies a hash function to the key to go directly to a bucket, running in O(1) average time, not halving a range.\n\nIndex Search instead consults an index to go directly to a record's location, a different mechanism from halving a sorted range."
  },
  {
    id: "csc304_ch3_136",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which search strategy is described as starting at the beginning of a file and comparing each record's key to the search key in turn, running in O(n) time?",
    options: [
      "Linear Search",
      "Binary Search",
      "Hash Search",
      "Index Search"
    ],
    correctAnswer: 0,
    explanation: "Linear Search starts at the beginning of a file and compares each record's key to the search key in turn, stopping when found, running in O(n) time proportional to file size.\n\nBinary Search instead starts in the middle of a sorted file and halves the range each step, running in O(log n) time, not a straight linear scan.\n\nHash Search instead applies a hash function to jump directly to a bucket, running in O(1) average time.\n\nIndex Search instead consults an index to jump directly to a location, not a sequential scan from the beginning."
  },
  {
    id: "csc304_ch3_137",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which search strategy applies a hash function to the key and goes directly to the resulting bucket, running in O(1) average time?",
    options: [
      "Hash Search",
      "Linear Search",
      "Binary Search",
      "Index Search"
    ],
    correctAnswer: 0,
    explanation: "Hash Search applies a hash function to the key to go directly to the resulting bucket, handling collisions as needed, running in O(1) average time, the fastest of the described strategies.\n\nLinear Search instead scans from the beginning, running in the slower O(n) time.\n\nBinary Search instead halves a sorted range repeatedly, running in O(log n) time, slower than hash search's average case.\n\nIndex Search instead consults an index first, running in O(1) to O(log n) time depending on the index structure, a related but distinct mechanism from direct hashing."
  },
  {
    id: "csc304_ch3_138",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the efficiency-by-file-type comparison for searching, which time complexity is given for a Sequential file?",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n squared)"
    ],
    correctAnswer: 0,
    explanation: "A Sequential file is given O(n) search efficiency, described as slow because it requires a linear scan.\n\nO(log n) is instead given for ISAM and Indexed files, moderate to fast, not the plain sequential scan of a Sequential file.\n\nO(1) is instead given for a Hashed file, the fastest, offering direct access, not a Sequential file.\n\nO(n squared) is not one of the search efficiencies given for any of the file types in this comparison."
  },
  {
    id: "csc304_ch3_139",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which file processing operation refers to locating a record using one or more file attributes, rather than the key field alone, and may return multiple records?",
    options: [
      "Matching",
      "Searching",
      "Sorting",
      "Blocking"
    ],
    correctAnswer: 0,
    explanation: "Matching refers to locating a record using one or more file attributes or fields, not just the key field, and may return zero or more records, unlike a key-based search.\n\nSearching instead specifically uses the key field, typically returning at most one record, not attribute-based matching.\n\nSorting instead refers to arranging the order of all records, not locating specific ones by attribute.\n\nBlocking instead refers to grouping records into blocks for processing, not locating records by attribute."
  },
  {
    id: "csc304_ch3_140",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Comparing search and match, which of the following is an accurate distinction?",
    options: [
      "Search uses the key field, while match can use any field",
      "Match always returns at most one record, exactly like search",
      "Search is described as less efficient than match in every case",
      "Search and match are simply two different names for the same operation"
    ],
    correctAnswer: 0,
    explanation: "Search uses the key field, while match can use any field, according to the comparison table distinguishing the two operations.\n\nMatch is described as returning zero or more records, not always at most one record like a key-based search.\n\nSearch is described as highly optimised and index-friendly, generally more efficient than match, not less efficient in every case.\n\nSearch and match are explicitly compared as distinct operations with different characteristics, not simply two names for the same thing."
  },
  {
    id: "csc304_ch3_141",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In a complex match, such as finding all employees in Sales hired after 2020 with a salary above 60000, how are the multiple conditions combined?",
    options: [
      "Using AND logic across all conditions",
      "Only the first condition listed is actually checked",
      "The conditions cancel each other out entirely",
      "Each condition is checked by a different, unrelated file"
    ],
    correctAnswer: 0,
    explanation: "In a complex match, multiple conditions, such as department, hire date, and salary, are combined using AND logic, requiring all conditions to be true.\n\nChecking only the first condition would ignore the other stated criteria, contradicting the description of multiple combined conditions.\n\nThe conditions do not cancel out; they are combined to narrow the results, not eliminate them.\n\nAll conditions are checked against the same file's records, not split across different, unrelated files."
  },
  {
    id: "csc304_ch3_142",
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
    id: "csc304_ch3_143",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "When a file is created, which of the following is listed as part of the OS's actions?",
    options: [
      "Verifying the filename doesn't already exist",
      "Immediately deleting any file with a similar name",
      "Automatically compressing the file to zero bytes forever",
      "Assigning the file to a random, undocumented owner"
    ],
    correctAnswer: 0,
    explanation: "Verifying the filename doesn't already exist is listed as one of the OS's actions when creating a file, alongside finding free disk space and initialising metadata.\n\nImmediately deleting similarly named files is not a listed OS action during file creation.\n\nCompressing the file to zero bytes forever is not a listed OS action; the file's initial size is simply set to 0, not permanently fixed there.\n\nAssigning a random, undocumented owner is not a listed OS action; the owner is instead set to the current user."
  },
  {
    id: "csc304_ch3_144",
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
    id: "csc304_ch3_145",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation frees internal table space once a process is done accessing the file?",
    options: [
      "Closing",
      "Opening",
      "Creating",
      "Reading"
    ],
    correctAnswer: 0,
    explanation: "Closing frees internal table space once a process is done accessing the file, also flushing any pending buffered data to disk.\n\nOpening instead loads file attributes and disk addresses into memory, the opposite step from freeing that space.\n\nCreating instead allocates initial space and a directory entry for a brand new file, not freeing space at the end of access.\n\nReading instead retrieves data from the file, not freeing table space when access is finished."
  },
  {
    id: "csc304_ch3_146",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation writes data to a file and moves the write pointer forward?",
    options: [
      "Writing",
      "Reading",
      "Repositioning",
      "Truncating"
    ],
    correctAnswer: 0,
    explanation: "Writing writes data to the file at the current position and moves the write pointer forward, updating the file's size metadata.\n\nReading instead retrieves data from the file and moves the read pointer, not writing new data.\n\nRepositioning instead sets the current file position to a given value, not writing new data itself.\n\nTruncating instead removes file content, the opposite of adding new data through writing."
  },
  {
    id: "csc304_ch3_147",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation reads data from a file at the current position and moves the read pointer forward?",
    options: [
      "Reading",
      "Writing",
      "Deleting",
      "Renaming"
    ],
    correctAnswer: 0,
    explanation: "Reading reads data from the file at the current position and moves the read pointer forward, returning the data to the application.\n\nWriting instead writes new data to the file and moves the write pointer, not retrieving existing data.\n\nDeleting instead releases allocated space and invalidates the directory entry, not reading data from the file.\n\nRenaming instead only changes the file's name, not reading its content."
  },
  {
    id: "csc304_ch3_148",
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
    explanation: "Repositioning, also called File Seek, sets the current file position to a given value, allowing access at a specific point in the file, referenced from the start, current position, or end.\n\nOpening instead loads file attributes and disk addresses into memory, not setting a specific position within the file.\n\nClosing instead frees internal table space once access is done, not setting a specific position within the file.\n\nRenaming instead only changes the file's name, not its current read or write position."
  },
  {
    id: "csc304_ch3_149",
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
    explanation: "Truncating removes file content but keeps all attributes except the file size, which changes as the content is removed, and causes data loss beyond the new length.\n\nDeleting instead releases allocated space and invalidates the directory entry entirely, removing the file rather than just its content.\n\nRenaming instead only changes the name of an existing file, not its content.\n\nRepositioning instead sets the current file position to a given value, not removing content."
  },
  {
    id: "csc304_ch3_150",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation releases allocated space and invalidates the file's directory entry, and is usually permanent with no recycle bin?",
    options: [
      "Deleting",
      "Truncating",
      "Closing",
      "Repositioning"
    ],
    correctAnswer: 0,
    explanation: "Deleting releases allocated space and invalidates the directory entry, removing the file from the system entirely, and is usually permanent with no recycle bin at this level.\n\nTruncating instead only removes the file's content while keeping most attributes, not invalidating the directory entry itself.\n\nClosing instead only frees internal table space after access, without invalidating the file's directory entry or deleting it.\n\nRepositioning instead sets the current file position to a value, not releasing space or invalidating the directory entry."
  },
  {
    id: "csc304_ch3_151",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a precondition for deleting a file?",
    options: [
      "The file must not currently be open",
      "The file must have been created more than a year ago",
      "The file must already be renamed first",
      "The file must contain no fewer than 1000 records"
    ],
    correctAnswer: 0,
    explanation: "The file must not be open is listed as a precondition for deleting a file, alongside the user needing write permission on the directory.\n\nA one-year age requirement is not a listed precondition for deleting a file.\n\nBeing renamed first is not a listed precondition for deleting a file.\n\nA minimum record count of 1000 is not a listed precondition for deleting a file."
  },
  {
    id: "csc304_ch3_152",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which OS-level file operation changes the name of an existing file, while keeping all other attributes except timestamps unchanged?",
    options: [
      "Renaming",
      "Creating",
      "Truncating",
      "Appending"
    ],
    correctAnswer: 0,
    explanation: "Renaming changes the name of an existing file without altering its content or other attributes, aside from timestamps.\n\nCreating instead allocates space and a directory entry for a brand new file, not changing an existing file's name.\n\nTruncating instead removes a file's content, not changing its name.\n\nAppending instead adds data only to the end of a file, not changing its name."
  },
  {
    id: "csc304_ch3_153",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which bonus OS-level file operation adds data only to the end of a file, and is equivalent to seeking to the end and then writing?",
    options: [
      "Appending",
      "Truncating",
      "Repositioning",
      "Creating"
    ],
    correctAnswer: 0,
    explanation: "Appending adds data only to the end of a file, described as equivalent to seeking to the end of the file and then writing, though some systems optimise this directly.\n\nTruncating instead removes file content, the opposite of adding data at the end.\n\nRepositioning is one of the two steps appending is equivalent to, but by itself it does not add data; it only moves the position.\n\nCreating instead allocates space for a brand new file, not adding data to the end of an existing one."
  },
  {
    id: "csc304_ch3_154",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Opening a file, at the OS level, is described as freeing internal table space, while closing loads file attributes into memory.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. It reverses the actual definitions: opening loads file attributes and disk addresses into memory for fast access, while closing is what frees internal table space once access is done."
  },
  {
    id: "csc304_ch3_155",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately pairs an OS-level file operation with its description?",
    options: [
      "Reading updates the read pointer as data is retrieved from the file",
      "Writing updates the write pointer as data is written to the file",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Reading updates the read pointer as data is retrieved from the file. Writing is separately described as updating the write pointer as data is written to the file. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc304_ch3_156",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In Python, opening a file with the mode 'w' does which of the following?",
    options: [
      "Creates a new file or overwrites an existing one for writing",
      "Opens a file that must already exist, for reading only",
      "Adds new data only to the end of an existing file",
      "Opens a file for both reading and writing without ever creating it"
    ],
    correctAnswer: 0,
    explanation: "The 'w' mode creates a new file or overwrites an existing one, opening it for writing.\n\nA file that must already exist, opened for reading only, describes the 'r' mode, not 'w'.\n\nAdding new data only to the end of an existing file describes the 'a', or append, mode, not 'w'.\n\nOpening for both reading and writing describes the 'r+' mode, not 'w', and 'r+' still requires the file to already exist."
  },
  {
    id: "csc304_ch3_157",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is described as the better way to open and read a file in Python, since it automatically closes the file afterward?",
    options: [
      "Using a context manager, with the 'with' statement",
      "Never calling close() under any circumstances",
      "Opening the file twice at the same time",
      "Deleting the file immediately after reading"
    ],
    correctAnswer: 0,
    explanation: "Using a context manager, the 'with' statement, is described as the better way to open a file in Python, since it automatically closes the file once the block finishes.\n\nNever calling close() is the opposite of good practice described here; a context manager exists specifically to ensure the file gets closed.\n\nOpening the file twice at the same time is not the described technique; a context manager wraps a single open call.\n\nDeleting the file immediately after reading is not what a context manager does; it closes the file, it does not delete it."
  },
  {
    id: "csc304_ch3_158",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the Python file positioning example, what does f.seek(0, 2) do?",
    options: [
      "Moves the file position to the end of the file",
      "Moves the file position to the very start of the file",
      "Moves the file position to byte 100",
      "Returns the current file position without moving it"
    ],
    correctAnswer: 0,
    explanation: "f.seek(0, 2) moves the file position to the end of the file, using 2 as the reference point for the end.\n\nMoving to the very start of the file is instead what f.seek(0) does, without the second argument of 2.\n\nMoving to byte 100 is instead what f.seek(100) does, a different call from f.seek(0, 2).\n\nReturning the current position without moving it is instead what f.tell() does, not f.seek()."
  },
  {
    id: "csc304_ch3_159",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the Python record management example, employee records are written to a file separated by which character?",
    options: [
      "A pipe character, |",
      "A comma, ,",
      "A tab character",
      "A semicolon, ;"
    ],
    correctAnswer: 0,
    explanation: "In the record management example, employee records such as 101|John|50000 are written using a pipe character, |, to separate the ID, name, and salary fields.\n\nA comma is not the separator character used in this specific example, though it is a common separator in other formats.\n\nA tab character is not the separator character used in this specific example.\n\nA semicolon is not the separator character used in this specific example."
  },
  {
    id: "csc304_ch3_160",
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
    id: "csc304_ch3_161",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "The File Management System is described as bridging the gap between which two levels?",
    options: [
      "Low-level disk I/O and high-level file operations",
      "The keyboard and the monitor",
      "The programmer's salary and the project budget",
      "Two entirely unrelated operating systems"
    ],
    correctAnswer: 0,
    explanation: "The FMS is described as bridging the gap between low-level disk I/O and high-level file operations, so programmers can work with abstractions like files, records, and fields.\n\nThe keyboard and the monitor are input and output hardware devices, not the two levels the FMS is described as bridging.\n\nA programmer's salary and a project budget are unrelated business concerns, not the two levels the FMS bridges.\n\nBridging two unrelated operating systems is not the described role of the FMS, which operates within a single OS."
  },
  {
    id: "csc304_ch3_162",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective simplifies and makes device-independent the common data access and modification operations?",
    options: [
      "Data Management",
      "Generality",
      "Validity",
      "Concurrency"
    ],
    correctAnswer: 0,
    explanation: "Data Management simplifies and makes device-independent the common data access and modification operations, so programmers write file operations once regardless of the storage device.\n\nGenerality instead ensures access methods remain unchanged regardless of the storage device, a related but distinct objective focused on consistent access methods.\n\nValidity instead ensures stored data always reflects the operations performed on them, not device independence specifically.\n\nConcurrency instead allows concurrent access in multiprogramming systems, not device-independent operations."
  },
  {
    id: "csc304_ch3_163",
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
    id: "csc304_ch3_164",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective guarantees that stored data always reflects the operations actually performed on it, with no lost updates?",
    options: [
      "Validity",
      "Generality",
      "Protection",
      "Performance"
    ],
    correctAnswer: 0,
    explanation: "Validity guarantees that stored data always reflects the operations performed on them, ensuring writes actually reach disk and deletions actually free space, with no lost updates.\n\nGenerality instead ensures access methods remain unchanged across storage devices, not the correctness of the stored data itself.\n\nProtection instead controls illegal or dangerous operations, not specifically the correctness of applied operations.\n\nPerformance instead concerns a good compromise between access speed and data transfer rate, not the correctness of the data itself."
  },
  {
    id: "csc304_ch3_165",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective controls illegal or dangerous operations on data, using access permissions to prevent unauthorised access?",
    options: [
      "Protection",
      "Data Management",
      "Validity",
      "Performance"
    ],
    correctAnswer: 0,
    explanation: "Protection controls illegal or dangerous operations on data, using access permissions to prevent unauthorised access and accidental deletion.\n\nData Management instead simplifies and makes device-independent common data operations, not specifically access control.\n\nValidity instead ensures data reflects the operations performed on it, not specifically controlling illegal operations.\n\nPerformance instead concerns the compromise between access speed and data transfer rate, not access control."
  },
  {
    id: "csc304_ch3_166",
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
    explanation: "Concurrency allows concurrent access to files in multiprogramming systems, letting multiple processes work with files at once while handling locks and shared access.\n\nGenerality instead ensures access methods remain unchanged across storage devices, not simultaneous multi-process access.\n\nData Management instead simplifies and makes device-independent common data access and modification operations, a broader goal than simultaneous access specifically.\n\nPerformance instead concerns a good compromise between access speed and data transfer rate, not simultaneous multi-process access."
  },
  {
    id: "csc304_ch3_167",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which FMS objective provides a good compromise between access speed and data transfer rate, minimising disk seeks and caching frequently used data?",
    options: [
      "Performance",
      "Validity",
      "Protection",
      "Data Management"
    ],
    correctAnswer: 0,
    explanation: "Performance provides a good compromise between access speed and data transfer rate, minimising disk seeks, caching frequently used data, and batching I/O operations.\n\nValidity instead ensures data reflects the operations performed on it, not the speed-versus-transfer-rate tradeoff.\n\nProtection instead controls illegal or dangerous operations, not performance tuning.\n\nData Management instead simplifies device-independent data operations, a broader goal than the specific speed compromise Performance addresses."
  },
  {
    id: "csc304_ch3_168",
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
    id: "csc304_ch3_169",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Among the listed FMS functions, or user requirements, which one allows a file's owner to grant permission to a colleague while denying access to others?",
    options: [
      "Controlled access to other users' files",
      "Access files by name rather than a numeric identifier",
      "Move data between files",
      "Back up and recover files in case of damage"
    ],
    correctAnswer: 0,
    explanation: "Controlled access to other users' files allows a file's owner to grant permission to a colleague while denying access to others, sharing files securely.\n\nAccess by name rather than a numeric identifier is instead about user-friendly naming, such as opening 'resume.doc' instead of an inode number, not controlling who can access another user's file.\n\nMoving data between files is instead about transferring, copying, or archiving data, not controlling access permissions between users.\n\nBacking up and recovering files is instead about protecting against loss, not controlling access permissions between users."
  },
  {
    id: "csc304_ch3_170",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Among the listed FMS functions, which one lets a file's owner control what types of access, such as read-only, are allowed on their own files?",
    options: [
      "Control what types of access are allowed on own files",
      "Create, delete, read, write, modify files",
      "Restructure files as needed",
      "Access files by name rather than a numeric identifier"
    ],
    correctAnswer: 0,
    explanation: "Controlling what types of access are allowed on one's own files lets an owner make a file read-only, restrict it to a group, or require a password.\n\nCreate, delete, read, write, modify files instead describes the fundamental operations users expect, not specifically setting access-type restrictions.\n\nRestructuring files as needed instead describes adapting storage, such as changing file size or reindexing, not setting access-type restrictions.\n\nAccessing files by name rather than a numeric identifier instead describes a user-friendly naming interface, not setting access-type restrictions."
  },
  {
    id: "csc304_ch3_171",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which listed FMS function specifically addresses accessing files by name, such as opening 'resume.doc', rather than by a numeric identifier like an inode number?",
    options: [
      "Access files by name rather than a numeric identifier",
      "Restructure files as needed",
      "Move data between files",
      "Controlled access to other users' files"
    ],
    correctAnswer: 0,
    explanation: "Accessing files by name rather than a numeric identifier is the FMS function that lets users open 'resume.doc' instead of an inode number, using hierarchical directories and meaningful names.\n\nRestructuring files as needed instead concerns adapting storage size or reindexing, not the naming interface itself.\n\nMoving data between files instead concerns copying, archiving, or consolidating data, not the naming interface.\n\nControlled access to other users' files instead concerns permission sharing between users, not naming files for access."
  },
  {
    id: "csc304_ch3_172",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the fundamental FMS functions users expect?",
    options: [
      "Create, delete, read, write, and modify files",
      "Automatically write an entire application for the user",
      "Guarantee unlimited processing speed at all times",
      "Physically manufacture new storage hardware"
    ],
    correctAnswer: 0,
    explanation: "Create, delete, read, write, and modify files are listed as the fundamental operations users expect from the FMS.\n\nAutomatically writing an entire application is not a listed FMS function; the FMS manages files, not application development.\n\nGuaranteeing unlimited processing speed is not a listed FMS function.\n\nManufacturing storage hardware is a physical production task, not a listed FMS function."
  },
  {
    id: "csc304_ch3_173",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the layered I/O system architecture, which component sits at the top layer, generating I/O requests such as open, read, write, and close?",
    options: [
      "Application Programs",
      "The Operating System",
      "Device Drivers",
      "I/O Controllers"
    ],
    correctAnswer: 0,
    explanation: "Application Programs sit at the top layer, generating I/O requests such as open, read, write, and close, working with files rather than raw disks.\n\nThe Operating System instead sits in the middle layer, managing I/O operations and interfacing applications with hardware, below the application layer.\n\nDevice Drivers instead sit at the hardware interface layer, translating OS commands into device-specific instructions, below the OS layer.\n\nI/O Controllers instead sit at the hardware control layer, closer to the physical devices, not the top application layer."
  },
  {
    id: "csc304_ch3_174",
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
    explanation: "Device Drivers are specialised programs that translate operating system commands into device-specific instructions, understanding the particular device's command language.\n\nI/O Controllers instead are hardware units managing communication between the CPU and peripheral devices, not software translating commands.\n\nApplication Programs instead generate I/O requests and interact with files through OS services, not translate commands into device-specific instructions.\n\nPhysical Devices instead are the hardware itself, such as hard disks and printers, not the software translating commands to them."
  },
  {
    id: "csc304_ch3_175",
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
    explanation: "I/O Controllers are hardware units that manage communication between the CPU and peripheral devices, positioning read/write heads and signalling interrupts when done.\n\nDevice Drivers instead are software programs that translate commands into device-specific instructions, not hardware units themselves.\n\nApplication Programs instead generate I/O requests, a software layer above the hardware-level I/O controllers.\n\nThe Operating System instead manages I/O operations broadly and interfaces applications with hardware, a higher-level role than the specific hardware units that are I/O controllers."
  },
  {
    id: "csc304_ch3_176",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which component of the I/O system architecture sits at the bottom layer, actually storing and retrieving data, such as hard disks and printers?",
    options: [
      "Physical Devices",
      "Application Programs",
      "The Operating System",
      "Device Drivers"
    ],
    correctAnswer: 0,
    explanation: "Physical Devices sit at the bottom layer, the actual hardware that stores or retrieves data, such as hard disks, SSDs, keyboards, and printers.\n\nApplication Programs instead sit at the top layer, generating requests rather than being the hardware itself.\n\nThe Operating System instead sits in the middle layer, managing I/O rather than being the physical hardware.\n\nDevice Drivers instead sit at the hardware interface layer, translating commands, not the physical hardware itself."
  },
  {
    id: "csc304_ch3_177",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "In the full I/O stack example of pressing a key on a keyboard, which layer is described as formatting the command for that specific keyboard type?",
    options: [
      "The Keyboard Driver",
      "The Operating System",
      "The Application",
      "The Physical Keyboard"
    ],
    correctAnswer: 0,
    explanation: "In the full I/O stack example, the Keyboard Driver is described as formatting the command for that specific keyboard type, sitting between the OS and the keyboard controller.\n\nThe Operating System instead translates the application's request into a general command, before it reaches the driver, not formatting it for the specific keyboard model.\n\nThe Application instead simply requests to read a character, without formatting device-specific commands.\n\nThe Physical Keyboard instead is where the user actually presses a key, not where command formatting happens."
  },
  {
    id: "csc304_ch3_178",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed among the components of an I/O Controller?",
    options: [
      "A microprocessor, described as a mini-CPU on the controller",
      "A full copy of the operating system's source code",
      "A dedicated printer built into every controller",
      "A permanent internet connection"
    ],
    correctAnswer: 0,
    explanation: "A microprocessor, described as a mini-CPU on the controller, is listed among the I/O Controller's components, alongside memory for buffering and control logic.\n\nA full copy of the OS source code is not listed as a component of an I/O Controller.\n\nA dedicated built-in printer is not listed as a component of an I/O Controller.\n\nA permanent internet connection is not listed as a component of an I/O Controller."
  },
  {
    id: "csc304_ch3_179",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "The I/O system architecture is organised in layers, with each layer building on the one below it, from Application Programs down to Physical Devices.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. The I/O system architecture is explicitly described as organised in layers, with Application Programs at the top, the Operating System, Device Drivers, and I/O Controllers in between, and Physical Devices at the bottom."
  },
  {
    id: "csc304_ch3_180",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes a component of the I/O system architecture?",
    options: [
      "Application Programs work with files, not raw disks",
      "I/O Controllers are software programs, not hardware",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Application Programs working with files, not raw disks, is stated directly, describing their abstraction level. I/O Controllers are instead explicitly described as hardware units, not software programs, which describes Device Drivers instead. Since only the Application Programs statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch3_181",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the two categories of software is described as designed to maintain and improve the computer system, including file, disk, and backup utilities?",
    options: [
      "Utility Software",
      "Support Software",
      "Application Software",
      "Firmware"
    ],
    correctAnswer: 0,
    explanation: "Utility Software is designed to maintain and improve the computer system, including file utilities, disk utilities, backup utilities, antivirus, and system monitors.\n\nSupport Software instead is designed to help programmers develop computer programs efficiently, a different purpose from system maintenance.\n\nApplication Software is not one of the two categories named in this material.\n\nFirmware is not one of the two categories named in this material."
  },
  {
    id: "csc304_ch3_182",
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
    id: "csc304_ch3_183",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software translates high-level language into machine code all at once, before the program runs, such as gcc or javac?",
    options: [
      "Compiler",
      "Interpreter",
      "Assembler",
      "Debugger"
    ],
    correctAnswer: 0,
    explanation: "A compiler translates high-level language into machine code all at once, before the program is executed, with examples including gcc, javac, and rustc.\n\nAn interpreter instead translates and executes code line by line, not all at once beforehand.\n\nAn assembler instead converts assembly language specifically into machine language, not high-level language.\n\nA debugger instead detects and helps fix bugs, not translate high-level language into machine code."
  },
  {
    id: "csc304_ch3_184",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software translates and executes code line by line, rather than all at once, such as Python or Ruby?",
    options: [
      "Interpreter",
      "Compiler",
      "Assembler",
      "IDE"
    ],
    correctAnswer: 0,
    explanation: "An interpreter translates and executes code line by line, rather than translating the whole program at once, with examples including Python and Ruby.\n\nA compiler instead translates the entire high-level program into machine code all at once before execution, not line by line.\n\nAn assembler instead converts assembly language into machine language, not general line-by-line execution.\n\nAn IDE instead provides a complete environment for writing, running, and debugging programs, a broader tool than a line-by-line translator."
  },
  {
    id: "csc304_ch3_185",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software converts assembly language into machine language, offering direct hardware access and very fast code?",
    options: [
      "Assembler",
      "Compiler",
      "Interpreter",
      "Debugger"
    ],
    correctAnswer: 0,
    explanation: "An assembler converts assembly language into machine language, offering direct hardware access and very fast code, though it is difficult to write, using tools such as NASM or MASM.\n\nA compiler instead translates a high-level language into machine code, not assembly language specifically.\n\nAn interpreter instead translates and executes high-level code line by line, not assembly-to-machine conversion.\n\nA debugger instead detects and helps fix bugs, not translate assembly language into machine language."
  },
  {
    id: "csc304_ch3_186",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software is used to set breakpoints, step through code, and watch variables in order to find and fix bugs?",
    options: [
      "Debugger",
      "Compiler",
      "Assembler",
      "Interpreter"
    ],
    correctAnswer: 0,
    explanation: "A debugger is used to set breakpoints, step through code, and watch variables changing, helping detect and fix bugs, using tools such as GDB or pdb.\n\nA compiler instead translates high-level code into machine code all at once, not a bug-finding tool.\n\nAn assembler instead converts assembly language into machine language, not a bug-finding tool.\n\nAn interpreter instead translates and executes code line by line, not specifically a bug-finding tool, though debuggers may be used alongside it."
  },
  {
    id: "csc304_ch3_187",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which type of support software provides a complete environment for writing, running, and debugging programs, combining an editor, compiler or interpreter, and debugger?",
    options: [
      "IDE (Integrated Development Environment)",
      "Compiler",
      "Assembler",
      "Utility Software"
    ],
    correctAnswer: 0,
    explanation: "An IDE, or Integrated Development Environment, provides a complete environment for writing, running, and debugging programs, combining an editor, compiler or interpreter, debugger, and project manager, such as Visual Studio Code or PyCharm.\n\nA compiler instead is only the translation component, not the complete combined environment an IDE provides.\n\nAn assembler instead is only the assembly-to-machine translation component, not a complete environment.\n\nUtility Software instead is designed to maintain and improve the system, a different category from the programming environment an IDE provides."
  },
  {
    id: "csc304_ch3_188",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A compiler executes code one line at a time, while an interpreter translates the entire program into machine code before running it at all.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. It reverses the actual definitions: a compiler translates the entire high-level program into machine code all at once, while an interpreter translates and executes code line by line."
  },
  {
    id: "csc304_ch3_189",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the five named types of support software?",
    options: [
      "Compiler",
      "Antivirus",
      "Disk Cleanup",
      "System Monitor"
    ],
    correctAnswer: 0,
    explanation: "Compiler is listed as one of the five named types of support software, alongside interpreter, assembler, debugger, and IDE.\n\nAntivirus is instead listed as an example of utility software, protecting against malware, not one of the five support software types.\n\nDisk Cleanup is instead listed as an example of a disk utility, a form of utility software, not one of the five support software types.\n\nSystem Monitor is instead listed as an example of utility software, tracking performance, not one of the five support software types."
  },
  {
    id: "csc304_ch3_190",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "Which of the following accurately describes a category of software?",
    options: [
      "Utility software includes backup utilities that create backups and restore files",
      "Support software's five named types include a compiler, an interpreter, and a debugger",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. Utility software includes backup utilities that create backups and restore files. Support software's five named types are separately confirmed as Compiler, Interpreter, Assembler, Debugger, and IDE, which include a compiler, an interpreter, and a debugger. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc304_ch3_191",
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
    id: "csc304_ch3_192",
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
    id: "csc304_ch3_193",
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
    id: "csc304_ch3_194",
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
    id: "csc304_ch3_195",
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
    id: "csc304_ch3_196",
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
    id: "csc304_ch3_197",
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
    id: "csc304_ch3_198",
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
    id: "csc304_ch3_199",
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
    id: "csc304_ch3_200",
    course: "CSC 304",
    chapter: "Chapter 3",
    text: "A list, unlike an array, has a fixed size and cannot have elements added or removed once it is created.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. A list is described as not having a fixed size, and elements can be added to or removed from it, unlike the more rigid contiguous structure of an array."
  },
  {
    id: "csc304_ch3_201",
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
    id: "csc304_ch3_202",
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
