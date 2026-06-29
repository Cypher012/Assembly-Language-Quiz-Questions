import { QuestionV2 } from "@/lib/quiz-types";

const csc304Chapter2: QuestionV2[] = [
  {
    id: "csc304_ch2_001",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following describes the definition of a File as stated in the notes?",
    options: [
      "A collection of stored data consisting of related records",
      "A database management system that automates operations",
      "An unorganized sequence of binary characters",
      "A mechanism used to convert raw information into data",
    ],
    correctAnswer: 0,
    explanation:
      "Under the FILE section, a file is defined as a group/collection of related records. The notes also describe it as a collection of stored data.",
  },
  {
    id: "csc304_ch2_002",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which file extension is explicitly listed in the notes as an example of a text file?",
    options: [".png", ".exe", ".pdf", ".wav"],
    correctAnswer: 2,
    explanation:
      "Under the examples of file extensions table, a text file is associated with extensions like `.txt`, `.doc`, `.docx`, and `.pdf`.",
  },
  {
    id: "csc304_ch2_003",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "According to the file extension guidelines, what operating system is associated with the .exe extension?",
    options: ["Android", "Mac", "Windows", "Linux"],
    correctAnswer: 2,
    explanation:
      "In the file types and extensions table, the `.exe` extension is explicitly matched with the Windows operating system.",
  },
  {
    id: "csc304_ch2_004",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What term describes the process of performing operations on a file to manage or change its contents or properties?",
    options: [
      "File Manipulation",
      "File Restructuring",
      "Database Optimization",
      "System Concatenation",
    ],
    correctAnswer: 0,
    explanation:
      "Under the File Manipulation section, it is defined as the process of performing operations on a file to manage or change its contents or properties.",
  },
  {
    id: "csc304_ch2_005",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Sorting refers to the operation of arranging data in some given orders, such as increasing or decreasing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. Under the section for Sorting, it is described as the operation of arranging data in given orders, such as increasing or decreasing.",
  },
  {
    id: "csc304_ch2_006",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is explicitly listed as a primary importance of sorting?",
    options: [
      "It minimizes the physical storage space on a hard drive",
      "It helps in quick and efficient retrieval of data",
      "It translates program files into machine language executables",
      "It converts files from text format to media files automatically",
    ],
    correctAnswer: 1,
    explanation:
      "Under the Importance of Sorting section, the notes specify that sorting is important because it helps in quick and efficient retrieval of data.",
  },
  {
    id: "csc304_ch2_007",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sorting algorithm repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order?",
    options: ["Selection-Sort", "Insertion-Sort", "Bubble-Sort", "Merge-Sort"],
    correctAnswer: 2,
    explanation:
      "Under the Bubble-Sort section, the notes state that it is a simple algorithm that compares adjacent elements and swaps them if they are in the wrong order.",
  },
  {
    id: "csc304_ch2_008",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sorting algorithm works by finding the smallest (or largest) element in the list and moving it to its correct position?",
    options: ["Bubble-Sort", "Selection-Sort", "Insertion-Sort", "Merge-Sort"],
    correctAnswer: 1,
    explanation:
      "Under the Selection-Sort section, the algorithm is defined by its process of finding the smallest (or largest) element and moving it to its correct position.",
  },
  {
    id: "csc304_ch2_009",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Selection-sort is characterized by comparing adjacent elements and swapping them if they are out of order.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The description matches Bubble-Sort, whereas Selection-Sort is defined by finding the smallest or largest element and moving it to the correct position.",
  },
  {
    id: "csc304_ch2_010",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the sorted list example `[8, 3, 5, 2]` using Insertion-Sort, what is the result of Pass 2?",
    options: ["[3, 8, 5, 2]", "[3, 5, 8, 2]", "[2, 3, 5, 8]", "[8, 3, 5, 2]"],
    correctAnswer: 0,
    explanation:
      "In Example 1 of Insertion-Sort, Pass 1 starts with `[8]`, and Pass 2 inserts 3 into `[8]`, resulting in the list `[3, 8, 5, 2]`.",
  },
  {
    id: "csc304_ch2_011",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sorting algorithm is defined in the notes as a 'Divide and Conquer' algorithm?",
    options: ["Selection-Sort", "Merge-Sort", "Insertion-Sort", "Bubble-Sort"],
    correctAnswer: 1,
    explanation:
      "Under the Merge-Sort section, the notes explicitly state that Merge-Sort is a divide and conquer algorithm.",
  },
  {
    id: "csc304_ch2_012",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What action does Merge-Sort perform first in its divide-and-conquer strategy?",
    options: [
      "It compares adjacent elements in pairs",
      "It splits the array into two halves",
      "It finds the largest value and moves it to the end",
      "It concatenates elements directly together",
    ],
    correctAnswer: 1,
    explanation:
      "The Merge-Sort section states that the algorithm splits the array into two halves, sorts them, and then merges them back together.",
  },
  {
    id: "csc304_ch2_013",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which term describes the process of finding the location of a given element in a list or file?",
    options: ["Sorting", "Merging", "Searching", "Concatenation"],
    correctAnswer: 2,
    explanation:
      "Under the Searching section, searching is defined as the process of finding the location of a given element in a list or file.",
  },
  {
    id: "csc304_ch2_014",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Linear search starts comparing target elements from the end of the list and moves backward.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The notes on Linear Search state that it compares the target element with each element in the list starting from the beginning of the list.",
  },
  {
    id: "csc304_ch2_015",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In what scenario is Linear Search most appropriate or commonly used?",
    options: [
      "For very large, pre-sorted lists",
      "For small or unsorted lists",
      "For multi-way merging systems",
      "For binary tree index structures",
    ],
    correctAnswer: 1,
    explanation:
      "Under the Linear Search section, the notes specify that this method is used for small or unsorted lists.",
  },
  {
    id: "csc304_ch2_016",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is a mandatory requirement for performing a Binary Search on a list?",
    options: [
      "The list must be unsorted",
      "The list must be sorted",
      "The list must contain only string variables",
      "The list must have an odd number of elements",
    ],
    correctAnswer: 1,
    explanation:
      "Under the Binary Search section, the text explicitly states that Binary Search is a fast search algorithm that works on a sorted list.",
  },
  {
    id: "csc304_ch2_017",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "How does the Binary Search algorithm locate an item within a list?",
    options: [
      "By comparing the target with every item starting from index 0",
      "By repeatedly dividing the list in half",
      "By sorting the list using Bubble-Sort first",
      "By picking elements at random until the target is found",
    ],
    correctAnswer: 1,
    explanation:
      "The Binary Search section states that the algorithm works by repeatedly dividing the list in half to narrow down the search location.",
  },
  {
    id: "csc304_ch2_018",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "If the target element in a binary search is smaller than the middle element, the search continues in the left half.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. The notes state: 'If the target is smaller than the middle element, then search the left half, else right'.",
  },
  {
    id: "csc304_ch2_019",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What are the three primary file manipulation techniques listed in the week 3 notes?",
    options: [
      "Sorting, Searching, and Merging",
      "Input, Processing, and Output",
      "Concatenation, Insertion, and Deletion",
      "Dividing, Conquering, and Swapping",
    ],
    correctAnswer: 0,
    explanation:
      "Under File Manipulation Techniques, the notes list three operations: 1. Sorting, 2. Searching, 3. Merging.",
  },
  {
    id: "csc304_ch2_020",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In searching terminology, what is the specific element being searched for called?",
    options: [
      "Middle element",
      "Index locator",
      "Key or Target element",
      "Pivot record",
    ],
    correctAnswer: 2,
    explanation:
      "The Searching section states that in searching, a specific 'Key' or 'Target' element is searched for within a list or file.",
  },
  {
    id: "csc304_ch2_021",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Suppose an array B contains 19 elements. During Insertion-Sort, how many passes are described to sort this array?",
    options: ["18 passes", "19 passes", "20 passes", "9 passes"],
    correctAnswer: 1,
    explanation:
      "In Example 2 for Insertion-Sort, the text says 'Suppose an array B contains 19 elements... we need 19 passes to sort this array.'.",
  },
  {
    id: "csc304_ch2_022",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following represents an image file extension listed in the notes?",
    options: [".docx", ".png", ".apk", ".wav"],
    correctAnswer: 1,
    explanation:
      "In the file types table, `.png` is listed under the photo category along with `.jpg`, `.jpeg`, and `.gif`.",
  },
  {
    id: "csc304_ch2_023",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "A song or audio file can be associated with extensions like .wav and .aac.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The table under the FILE section lists `.mp3`, `.wav`, and `.aac` under the song category.",
  },
  {
    id: "csc304_ch2_024",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is listed under application or program extensions for Android systems?",
    options: [".exe", ".app", ".apk", ".avi"],
    correctAnswer: 2,
    explanation:
      "The file types table pairs Android applications directly with the `.apk` file extension.",
  },
  {
    id: "csc304_ch2_025",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "When comparing Sorting and Searching, which statement is true according to the notes?",
    options: [
      "Searching requires the list to be unsorted first",
      "Sorting arranges data while searching finds an element's location",
      "Both sorting and searching must use merge-sort to operate",
      "Searching can only be completed if the list has a fixed size",
    ],
    correctAnswer: 1,
    explanation:
      "According to the definitions of sorting and searching in the notes, sorting organizes data into a specific order, whereas searching aims to locate a key element.",
  },
  {
    id: "csc304_ch2_026",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "How is the Merging Technique defined in the provided Week 4 notes?",
    options: [
      "A process of splitting files into binary sub-components",
      "A technique used to combine two or more files into a single file",
      "A method of searching for elements in a database sequence",
      "A dynamic array sorting algorithm that utilizes pivot values",
    ],
    correctAnswer: 1,
    explanation:
      "The beginning of Week 4 notes defines Merging Technique as a process of combining two or more files (or lists) into a single file.",
  },
  {
    id: "csc304_ch2_027",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following describes Concatenation?",
    options: [
      "Combining files by placing one directly after another without changing order",
      "Alternating elements from two files based on sequence logic",
      "Sorting elements while merging them using binary trees",
      "Extracting unique identifiers from multiple database tables",
    ],
    correctAnswer: 0,
    explanation:
      "Concatenation (Simple Merge) is defined as a technique used to combine two or more files (or lists) by placing one directly after the other without changing their order.",
  },
  {
    id: "csc304_ch2_028",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In Concatenation, sorting and comparisons must be performed before the files are combined.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The notes highlight that concatenation is a simple merge because no comparison is done and no sorting is required.",
  },
  {
    id: "csc304_ch2_029",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "If List A is `[3, 4, 2]` and List B is `[5, 7, 6]`, what is the result after Concatenation?",
    options: [
      "[2, 3, 4, 5, 6, 7]",
      "[3, 4, 2, 5, 7, 6]",
      "[5, 7, 6, 3, 4, 2]",
      "[3, 5, 4, 7, 2, 6]",
    ],
    correctAnswer: 1,
    explanation:
      "In Example 2 under Concatenation, joining List A `[3, 4, 2]` and List B `[5, 7, 6]` yields `[3, 4, 2, 5, 7, 6]` because data is simply joined end-to-end.",
  },
  {
    id: "csc304_ch2_030",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is a key characteristic of Concatenation?",
    options: [
      "It requires matching index elements",
      "Data is just joined end-to-end",
      "It only works on already sorted lists",
      "It organizes elements in descending sequence",
    ],
    correctAnswer: 1,
    explanation:
      "The notes explicitly list three reasons why Concatenation is simple, one of which is that data is just joined end-to-end.",
  },
  {
    id: "csc304_ch2_031",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "The concatenation of Lagos branch staff `[Bola, Tunde]` and Osun branch staff `[Titi, Seun]` results in what sequence?",
    options: [
      "Bola, Titi, Tunde, Seun",
      "Bola, Tunde, Titi, Seun",
      "Titi, Seun, Bola, Tunde",
      "Seun, Titi, Tunde, Bola",
    ],
    correctAnswer: 1,
    explanation:
      "Based on Example 3 in the notes, the staff are simply joined together resulting in: Bola, Tunde, Titi, Seun. The order remains exactly the same.",
  },
  {
    id: "csc304_ch2_032",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which specific sequence of operations is shown to transform Data into Information?",
    options: [
      "summarization / aggregation / calculation / rearrangement",
      "folding / appending / dequeuing / sorting",
      "origination / input / processing / concatenation",
      "searching / sorting / matching / storing",
    ],
    correctAnswer: 0,
    explanation:
      "In the Data Processing equation provided in the notes, Data becomes Information through summarization, aggregation, calculation, and rearrangement.",
  },
  {
    id: "csc304_ch2_033",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Information can range from simple reports about routine operations up to what type of reports by top management?",
    options: [
      "Initial classification reports",
      "Strategy decision reports",
      "Raw data collection summaries",
      "Employee weekly schedules",
    ],
    correctAnswer: 1,
    explanation:
      "The notes explicitly state that information can range from a simple report about routine operations up to a report by top management to support strategy decisions.",
  },
  {
    id: "csc304_ch2_034",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Activities that convert or transform data to information are specifically called Data Processing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. The notes directly define Data Processing as the activities that convert or transform data into information.",
  },
  {
    id: "csc304_ch2_035",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following represents an example of unprocessed data?",
    options: [
      "Efficiency reports",
      "Financial statements",
      "Number of tons of finished products",
      "An invoice",
    ],
    correctAnswer: 2,
    explanation:
      "Under the definition of Data, the number of tons of finished products is listed as an example of basic facts that have not been processed. The other options are examples of information.",
  },
  {
    id: "csc304_ch2_036",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "According to the notes on 'Size and Type of Business', what might be required as the volume of data and information increases?",
    options: [
      "Calculators and computers",
      "Manual data entry clerks",
      "Smaller memory units",
      "Oral information systems",
    ],
    correctAnswer: 0,
    explanation:
      "The notes state that as a company increases and large volumes of data and information are required, calculators and computers may be required to process them.",
  },
  {
    id: "csc304_ch2_037",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which activities are part of the 'Preparation of Data for Input' stage?",
    options: [
      "Outputting, analyzing and reporting",
      "Classifying, folding and rearranging",
      "Searching, sorting and merging",
      "Summarizing, calculating and sorting",
    ],
    correctAnswer: 1,
    explanation:
      "During the 'Preparation of Data for Input' stage, data are made ready for further use. This specifically includes classifying, folding, and rearranging.",
  },
  {
    id: "csc304_ch2_038",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "If a computer is not explicitly being used, to whom is data passed during the Input stage?",
    options: [
      "The top management for strategy decisions",
      "The customers who generated the data",
      "The data collection agents",
      "The department or person responsible for processing data",
    ],
    correctAnswer: 3,
    explanation:
      "Under the Input stage, it states that data are passed to the department/person responsible for processing data. If a computer is used, it goes directly into the system.",
  },
  {
    id: "csc304_ch2_039",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "According to the diagram note, storage is only used at the final output stage of data processing.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The note beneath the Stages of Data Processing diagram states that storage will be used at the various stages, not just the final one.",
  },
  {
    id: "csc304_ch2_040",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is established where necessary during the transmission of data from one stage to another?",
    options: [
      "Controls",
      "Sorting algorithms",
      "Binary searches",
      "Dictionaries",
    ],
    correctAnswer: 0,
    explanation:
      "The note attached to the Stages diagram explicitly mentions that 'Controls will be established where necessary' as data is transmitted between stages.",
  },
  {
    id: "csc304_ch2_041",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is explicitly listed as a form of Output Information?",
    options: ["Calculations", "Analysis", "Folding", "Aggregation"],
    correctAnswer: 1,
    explanation:
      "In the final stage, Output of Information, the results of data processing are given out. This includes reports, analysis, invoices, documents, and payroll.",
  },
  {
    id: "csc304_ch2_042",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "A dictionary data structure comprises a Key and what else?",
    options: [
      "The value of the Key",
      "The index of the array",
      "The head of the queue",
      "The stack pointer",
    ],
    correctAnswer: 0,
    explanation:
      "The section defining a Dictionary states that it comprises a Key and the value of the Key.",
  },
  {
    id: "csc304_ch2_043",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which command is used to import the queue functionality from collections in Python?",
    options: [
      "Import dequeue",
      "Import array",
      "Import stack",
      "Import sorting",
    ],
    correctAnswer: 0,
    explanation:
      "Under the Queue section, one of the bullet points instructs to 'Import dequeue from your collection' to utilize queue operations.",
  },
  {
    id: "csc304_ch2_044",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "To add an element to a queue, the 'append' operation is used.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. The notes list 'Append' directly under Queue operations and define it as 'Add to a queue'.",
  },
  {
    id: "csc304_ch2_045",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What does 'contiguous memory location' mean in the context of an array?",
    options: [
      "Elements are stored randomly",
      "Elements are stored in sequential order",
      "Elements have a dynamic size",
      "Elements are processed First In First Out",
    ],
    correctAnswer: 1,
    explanation:
      "The definition of an Array states it is a collection of elements stored in a contiguous memory location, and the parentheses explicitly define this as 'means elements stored in sequential order'.",
  },
  {
    id: "csc304_ch2_046",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "How is a file physically described in relation to its contents?",
    options: [
      "An active program that manipulates records",
      "A temporary storage for arithmetic operations",
      "A digital document or container that holds data",
      "A memory location for contiguous arrays",
    ],
    correctAnswer: 2,
    explanation:
      "The FILE section defines a file as a digital document or container that holds data, which can include text, images, videos, and programs.",
  },
  {
    id: "csc304_ch2_047",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "A field report is given as an example of which type of file?",
    options: ["A text file", "A photo file", "A program file", "An audio file"],
    correctAnswer: 0,
    explanation:
      "Under 'Examples of Files', the notes list 'A text: like a field report' as the very first example.",
  },
  {
    id: "csc304_ch2_048",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following extensions are explicitly associated with Video files?",
    options: [
      ".exe, .apk, .app",
      ".mp3, .wav, .aac",
      ".mp4, .mkv, .avi",
      ".jpg, .jpeg, .png",
    ],
    correctAnswer: 2,
    explanation:
      "In the file types table, a video file is strictly associated with the extensions `.mp4`, `.mkv`, and `.avi`.",
  },
  {
    id: "csc304_ch2_049",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Working with files on a computer is a simplified way to describe File Manipulation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The File Manipulation definition concludes by stating 'It means working with files on a computer'.",
  },
  {
    id: "csc304_ch2_050",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Sorting data can only be done in increasing numerical order.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The notes define sorting as arranging data in given orders 'such as increasing or decreasing'.",
  },
  {
    id: "csc304_ch2_051",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the generic Insertion-Sort algorithm, what occurs during Pass 4?",
    options: [
      "A[4] is swapped with A[5]",
      "A[4] is inserted into its proper place in A[1], A[2], A[3]",
      "A[1] to A[4] are removed from the array",
      "The smallest element is placed at A[4]",
    ],
    correctAnswer: 1,
    explanation:
      "The generic outline for Insertion-Sort explicitly states that in Pass 4: A[4] is inserted into its proper place in A[1], A[2], A[3] so that A[1] to A[4] is sorted.",
  },
  {
    id: "csc304_ch2_052",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "During Pass N of an Insertion-Sort, A[N] is inserted into its proper place among which elements?",
    options: [
      "A[N+1] to the end",
      "Only A[1]",
      "A[1], A[2], ..., A[N-1]",
      "It remains in A[N]",
    ],
    correctAnswer: 2,
    explanation:
      "The final step of the algorithm outline states: Pass N: A[N] is inserted into its proper place in A[1], A[2], ..., A[N-1].",
  },
  {
    id: "csc304_ch2_053",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In Example 1 of sorting `[8, 3, 5, 2]`, what is the state of the list after Pass 3?",
    options: ["[2, 3, 5, 8]", "[8, 3, 5, 2]", "[3, 8, 5, 2]", "[3, 5, 8, 2]"],
    correctAnswer: 3,
    explanation:
      "In Example 1, Pass 3 inserts 5 into `[3, 8]`. The resulting array after this pass is `[3, 5, 8, 2]`.",
  },
  {
    id: "csc304_ch2_054",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is a key characteristic of Sequential Merging?",
    options: [
      "It processes data record by record",
      "It randomly accesses records",
      "It requires files to be completely unsorted",
      "It splits files into binary halves",
    ],
    correctAnswer: 0,
    explanation:
      "Under the characteristics of Sequential Merging, the very first point listed is 'Process data record by record'.",
  },
  {
    id: "csc304_ch2_055",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Sequential Merging can be used for both sorted and unsorted data.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This statement is true. The notes list 'Can be used for sorted or unsorted data' as characteristic number three of Sequential Merging.",
  },
  {
    id: "csc304_ch2_056",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "How does Sequential Merging compare to simple concatenation in terms of structure?",
    options: [
      "It is exactly the same",
      "It is much less structured",
      "It is slightly more structured",
      "It does not maintain any sequence",
    ],
    correctAnswer: 2,
    explanation:
      "The final characteristic listed for Sequential Merging explicitly states that it is 'Slightly more structured than simple concatenation'.",
  },
  {
    id: "csc304_ch2_057",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is the primary purpose of Sorted (Ordered) Merging?",
    options: [
      "To randomly shuffle two sorted lists into one array",
      "To concatenate two files end-to-end regardless of order",
      "To combine two or more already sorted lists into a single sorted list without re-sorting",
      "To find a specific key element in a combined file",
    ],
    correctAnswer: 2,
    explanation:
      "The definition provided states that Sorted Merging is a technique used to combine two or more already sorted lists into a single sorted list without re-sorting the entire data again.",
  },
  {
    id: "csc304_ch2_058",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In which of the following is Sorted Merging commonly used?",
    options: [
      "Outputting sensory information",
      "Gathering oral information",
      "Database operations and file processing systems",
      "Processing unstructured audio files",
    ],
    correctAnswer: 2,
    explanation:
      "The notes specify that Sorted Merging is commonly used in algorithms like merge sort, database operations, and file processing systems.",
  },
  {
    id: "csc304_ch2_059",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Sorted Merging works interchangeably on both sorted and unsorted data sets.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The characteristics for Sorted Merging explicitly state that it 'Works only on already sorted data'.",
  },
  {
    id: "csc304_ch2_060",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is the key idea behind merging two already sorted lists efficiently?",
    options: [
      "Comparing the smallest or current elements of each list and picking the smaller one first",
      "Appending the second list to the first and using bubble sort",
      "Selecting the largest element from both lists and placing it at the front",
      "Re-sorting the entire dataset from scratch",
    ],
    correctAnswer: 0,
    explanation:
      "The 'Key Idea' section for Sorted Merging states that we merge efficiently by comparing the smallest (or current) elements of each list, picking the smaller one first, and repeating.",
  },
  {
    id: "csc304_ch2_061",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the step-by-step table for Sorted Merging A `[2, 5, 8, 12]` and B `[1, 3, 7, 10]`, what is the comparison taking place in Step 1?",
    options: ["5 VS 3", "8 VS 7", "2 VS 1", "12 VS 10"],
    correctAnswer: 2,
    explanation:
      "Based on the table in Example 2 (which illustrates the concept), the very first step compares the first elements of each list, which are 2 (from A) and 1 (from B).",
  },
  {
    id: "csc304_ch2_062",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "If A = `[3, 6, 9]` and B = `[1, 2, 4, 5, 10]`, what is the final merged result according to Sorted Merging?",
    options: [
      "[3, 6, 9, 1, 2, 4, 5, 10]",
      "[1, 2, 3, 6, 9, 4, 5, 10]",
      "[10, 9, 6, 5, 4, 3, 2, 1]",
      "[1, 2, 3, 4, 5, 6, 9, 10]",
    ],
    correctAnswer: 3,
    explanation:
      "In Example 2 for Sorted Merging, the two sorted arrays A and B are merged sequentially to preserve order. The result is `[1, 2, 3, 4, 5, 6, 9, 10]`.",
  },
  {
    id: "csc304_ch2_063",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "When concatenating File A and File B, what is the sequence of steps?",
    options: [
      "Sort first file, sort second file, merge",
      "Compare first elements, pick smallest, repeat",
      "Take all data from first file, copy to new file, take data from second file, append after first",
      "Read second file first, append first file",
    ],
    correctAnswer: 2,
    explanation:
      "Under 'How it works' for Concatenation, the steps are: 1. Take all data from first file, 2. Copy to new file, 3. Take data from second file, 4. Append it after the first file.",
  },
  {
    id: "csc304_ch2_064",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In a dictionary data structure, what does a key represent?",
    options: [
      "A unique identifier used to access a value",
      "The position of an element in an array",
      "A duplicate copy of a value",
      "The size of the dictionary",
    ],
    correctAnswer: 0,
    explanation:
      "A key is a unique identifier used to retrieve its corresponding value in a dictionary. Each key maps to a specific value.",
  },
  {
    id: "csc304_ch2_065",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "The number of hours worked by an employee is an example of meaningful, processed information.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This statement is false. The notes list the number of hours worked by an employee specifically as an example of Data (facts that have not been processed).",
  },
  {
    id: "csc304_ch2_066",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is an example of data assembled into a useful form?",
    options: [
      "Number of hours worked",
      "Rate of pay",
      "Efficiency reports",
      "Amount of materials",
    ],
    correctAnswer: 2,
    explanation:
      "Efficiency reports are listed as an example of Information, which is defined as data assembled into a useful form. The other options are examples of raw data.",
  },
  {
    id: "csc304_ch2_067",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "If a computer is used during the Input stage, the data must be inputted directly into the computer system.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes specifically outline that if a computer is used during the Input phase, the data is inputted directly into the computer system.",
  },
  {
    id: "csc304_ch2_068",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "When data is needed for more than one information requirement, the notes suggest this might require what?",
    options: [
      "An immediate switch to manual processing",
      "Deleting the duplicated data",
      "A different method of processing",
      "Separating the data into isolated silos",
    ],
    correctAnswer: 2,
    explanation:
      "Under the 'Link Between Applications' factor, the text states that where data is needed for more than one information requirement, a different method of processing may be suggested.",
  },
];

export default csc304Chapter2;
