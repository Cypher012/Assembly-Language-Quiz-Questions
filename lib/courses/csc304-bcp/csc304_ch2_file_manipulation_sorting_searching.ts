import { QuestionV2 } from "@/lib/quiz-types";

const csc304Chapter2Questions: QuestionV2[] = [
  {
    id: "csc304_ch2_001",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following best defines a file?",
    options: [
      "A digital container that holds data such as text, images, or programs",
      "A single instruction executed by a processor",
      "A physical cabinet used to store paper documents only",
      "A network cable connecting two computers"
    ],
    correctAnswer: 0,
    explanation: "A file is defined as a digital document or container that holds data, which can be text, images, videos, programs, or anything else a computer can store; it is also described as a group of related records.\n\nA single processor instruction is a computing execution unit, not a stored container of data.\n\nA physical paper cabinet is a real-world storage furniture item, not a digital data container.\n\nA network cable is a physical hardware connector, not a digital data container."
  },
  {
    id: "csc304_ch2_002",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following best defines file manipulation?",
    options: [
      "The process of performing operations on a file to change its contents",
      "The process of physically repairing a damaged hard drive",
      "The process of designing a company's marketing logo",
      "The process of installing an operating system for the first time"
    ],
    correctAnswer: 0,
    explanation: "File manipulation is the process of performing operations on a file to manage or change its contents or properties, meaning working with files on a computer.\n\nRepairing a damaged hard drive is a hardware maintenance activity, not manipulating a file's contents or properties.\n\nDesigning a marketing logo is a creative design task, not manipulating a file's contents or properties.\n\nInstalling an operating system is a setup activity, not manipulating an existing file's contents."
  },
  {
    id: "csc304_ch2_003",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is given as an example of a file?",
    options: [
      "A field report saved as text",
      "The electricity powering a computer",
      "The plastic casing of a laptop",
      "The physical desk a computer sits on"
    ],
    correctAnswer: 0,
    explanation: "A field report saved as text is given directly as an example of a file, alongside a photo, a song, a video, and a program.\n\nElectricity powering a computer is a physical utility, not a stored digital file.\n\nA laptop's plastic casing is a physical hardware component, not a stored digital file.\n\nA physical desk is furniture, not a stored digital file."
  },
  {
    id: "csc304_ch2_004",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which file extension is associated with a song, or audio file?",
    options: [
      ".mp3",
      ".jpg",
      ".mp4",
      ".exe"
    ],
    correctAnswer: 0,
    explanation: ".mp3 is listed as an extension associated with a song or audio file, alongside .wav and .aac.\n\n.jpg is instead listed as an extension for a photo, not an audio file.\n\n.mp4 is instead listed as an extension for a video, not an audio file.\n\n.exe is instead listed as an extension for a program or application on Windows, not an audio file."
  },
  {
    id: "csc304_ch2_005",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which file extension is associated with a program or application on the Windows operating system?",
    options: [
      ".exe",
      ".apk",
      ".app",
      ".mkv"
    ],
    correctAnswer: 0,
    explanation: ".exe is listed as the extension for a program or application on Windows.\n\n.apk is instead listed as the extension for a program or application on Android, not Windows.\n\n.app is instead listed as the extension for a program or application on Mac, not Windows.\n\n.mkv is instead listed as an extension for a video file, not a program."
  },
  {
    id: "csc304_ch2_006",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is one of the three file manipulation techniques listed?",
    options: [
      "Merging",
      "Formatting",
      "Compressing",
      "Encrypting"
    ],
    correctAnswer: 0,
    explanation: "Merging is one of the three file manipulation techniques listed, alongside sorting and searching.\n\nFormatting is not one of the three named file manipulation techniques in this material.\n\nCompressing is not one of the three named file manipulation techniques in this material.\n\nEncrypting is not one of the three named file manipulation techniques in this material."
  },
  {
    id: "csc304_ch2_007",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "A file can only ever contain text data, and can never store images, videos, or programs.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. A file is described as a container that can hold text, images, videos, programs, or anything else a computer can store, not text alone."
  },
  {
    id: "csc304_ch2_008",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following best defines sorting?",
    options: [
      "The operation of arranging data in some given order, such as increasing or decreasing",
      "The operation of finding the location of a given item in a collection",
      "The operation of combining two sorted files into a single sorted file",
      "The operation of permanently deleting unwanted records"
    ],
    correctAnswer: 0,
    explanation: "Sorting refers to the operation of arranging data in some given order, such as increasing or decreasing numerically, or alphabetically for character data.\n\nFinding the location of a given item describes searching, not sorting.\n\nCombining two sorted files into one describes merging, not sorting.\n\nPermanently deleting records is not one of the three named file manipulation techniques."
  },
  {
    id: "csc304_ch2_009",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Arranging a list of customer records by their account numbers is an example of sorting based on what kind of key?",
    options: [
      "A number key",
      "A name key",
      "A colour key",
      "A password key"
    ],
    correctAnswer: 0,
    explanation: "Sorting by account number is an example of sorting numerically according to a number key, as given directly in the material.\n\nA name key instead is used for alphabetical sorting, not sorting by an account number.\n\nA colour key is not one of the two named sorting key types in this material.\n\nA password key is not one of the two named sorting key types in this material."
  },
  {
    id: "csc304_ch2_010",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following best defines searching, as a file manipulation technique?",
    options: [
      "The operation of finding the location of a given item in a collection of items",
      "The operation of arranging data into increasing or decreasing order",
      "The operation of combining two sorted files into one file",
      "The operation of renaming a file to a new title"
    ],
    correctAnswer: 0,
    explanation: "Searching refers to the operation of finding the location of a given item in a collection of items, including finding all records that satisfy one or more conditions.\n\nArranging data into increasing or decreasing order describes sorting, not searching.\n\nCombining two sorted files into one describes merging, not searching.\n\nRenaming a file is not one of the three named file manipulation techniques."
  },
  {
    id: "csc304_ch2_011",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which two techniques are listed under searching?",
    options: [
      "Linear search and binary search",
      "Bubble search and selection search",
      "Merge search and insertion search",
      "Numeric search and alphabetic search"
    ],
    correctAnswer: 0,
    explanation: "Linear search and binary search are the two searching techniques listed in this material.\n\nBubble search and selection search are not real named searching techniques here; bubble and selection instead name sorting algorithms.\n\nMerge search and insertion search are not real named searching techniques here; merge and insertion instead name sorting-related operations.\n\nNumeric search and alphabetic search are not the two named searching techniques; they instead describe sorting key types."
  },
  {
    id: "csc304_ch2_012",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following is one of the three named file manipulation techniques?",
    options: [
      "Searching, which finds the location of a given item in a collection",
      "Streaming, which plays audio or video files without downloading them",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Searching, which finds the location of a given item in a collection, is stated directly as one of the three file manipulation techniques. Streaming is not one of the three named file manipulation techniques anywhere in this material. Since only the searching statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch2_013",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following best describes linear search?",
    options: [
      "Checking each element one by one, from beginning to end",
      "Repeatedly dividing a sorted list into halves to locate an item",
      "Comparing the target only with the very last element of the list",
      "Randomly selecting elements until the target happens to be chosen"
    ],
    correctAnswer: 0,
    explanation: "Linear search is a simple searching technique that finds a specific item by checking each element one by one, sequentially, from the beginning to the end until it is found or the list ends.\n\nRepeatedly dividing a sorted list into halves instead describes binary search, not linear search.\n\nComparing only the last element contradicts linear search, which examines elements sequentially from the start.\n\nRandom selection contradicts linear search, which proceeds in a fixed sequential order, not randomly."
  },
  {
    id: "csc304_ch2_014",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the list [10, 25, 7, 30, 18], searching linearly for 30, how many elements are checked before 30 is found?",
    options: [
      "4", "1", "2", "5"
    ],
    correctAnswer: 0,
    explanation: "Searching linearly, the algorithm checks 10, then 25, then 7, then 30, so 4 elements are checked before the target 30 is found.\n\nChecking only 1 element would mean 30 was the very first element, which it is not in this list.\n\nChecking 2 elements would mean 30 appeared second, which it does not in this list.\n\nChecking 5 elements would mean every element including the last, 18, was checked before finding 30, but 30 appears fourth, before 18."
  },
  {
    id: "csc304_ch2_015",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the linear search scenario over the list [10, 25, 7, 30, 18] searching for 30, which elements are checked and found not to match before the target is found?",
    options: [
      "10, 25, and 7",
      "25, 30, and 18",
      "7, 30, and 18",
      "10, 30, and 18"
    ],
    correctAnswer: 0,
    explanation: "The elements 10, 25, and 7 are each checked and found not to match before 30 is checked and found.\n\n25, 30, and 18 incorrectly includes the target itself, 30, among the non-matching checks.\n\n7, 30, and 18 also incorrectly includes the target itself and skips 10 and 25, which are checked first.\n\n10, 30, and 18 incorrectly includes the target 30 and omits 25 and 7, which are checked before it."
  },
  {
    id: "csc304_ch2_016",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Linear search checks each element of a list sequentially, from the beginning to the end, regardless of whether the list is sorted.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Linear search examines each element one by one, from the beginning to the end, and works regardless of whether the list is sorted, unlike binary search which requires sorted data."
  },
  {
    id: "csc304_ch2_017",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following best describes binary search?",
    options: [
      "A faster search technique that repeatedly divides a sorted list's search space into halves",
      "A technique that checks every element in a list one at a time, regardless of order",
      "A technique that only works on lists containing exactly two elements",
      "A technique that searches two separate unsorted lists at the same time"
    ],
    correctAnswer: 0,
    explanation: "Binary search is a faster search technique used to find an item in a sorted list by repeatedly dividing the search space into halves.\n\nChecking every element one at a time regardless of order instead describes linear search, not binary search.\n\nRequiring exactly two elements misrepresents binary search, which works on lists of any size, so long as they are sorted.\n\nSearching two separate unsorted lists simultaneously misrepresents binary search, which works on one sorted list."
  },
  {
    id: "csc304_ch2_018",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What must be true about the data before binary search can be applied?",
    options: [
      "The data must already be sorted",
      "The data must contain no duplicate values",
      "The data must be stored only as text",
      "The data must contain fewer than ten elements"
    ],
    correctAnswer: 0,
    explanation: "The data must be sorted, such as in ascending order, before binary search can be applied.\n\nA prohibition on duplicate values is not a stated requirement for binary search in this material.\n\nA restriction to text-only data is not a stated requirement for binary search in this material.\n\nA restriction to fewer than ten elements is not a stated requirement for binary search in this material."
  },
  {
    id: "csc304_ch2_019",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In binary search, after confirming the list is sorted, what is the first step in locating the target value?",
    options: [
      "Find the middle element of the list",
      "Compare the target with the very last element",
      "Divide the list into three equal parts",
      "Reverse the entire order of the list"
    ],
    correctAnswer: 0,
    explanation: "The first step in binary search is to find the middle element of the list, which is then compared against the target value.\n\nComparing with the last element is not how binary search begins; it compares against the middle element first.\n\nDividing into three equal parts misrepresents binary search, which divides the list into two halves, not three parts.\n\nReversing the list order is not a step in binary search at all."
  },
  {
    id: "csc304_ch2_020",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In binary search, if the target value is larger than the middle element, which half of the list is searched next?",
    options: [
      "The right half",
      "The left half",
      "Both halves are searched simultaneously",
      "The search stops immediately with no result"
    ],
    correctAnswer: 0,
    explanation: "If the target is larger than the middle element, the right half of the list is searched next, since the target must lie among the larger values.\n\nThe left half would instead be searched if the target were smaller than the middle element, not larger.\n\nSearching both halves simultaneously contradicts binary search's core method of eliminating one half at each step.\n\nStopping immediately with no result is incorrect; the search continues into the appropriate half until the target is found or no elements remain."
  },
  {
    id: "csc304_ch2_021",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following accurately describes a step in the binary search process?",
    options: [
      "If the target is smaller than the middle element, the left half is searched next",
      "Binary search repeats the process on the remaining half until the target is found or no element remains",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Both statements are accurate. If the target is smaller than the middle element, the left half is searched next, since the target must lie among the smaller values. Binary search separately repeats this halving process on the remaining half until the target is found or no element remains. Since both are correct, the answer is that both apply."
  },
  {
    id: "csc304_ch2_022",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the binary search worked example, the list [5, 15, 25, 10, 35, 30, 20] is first rearranged in ascending order to [5, 10, 15, 20, 25, 30, 35]. What is the middle element of this sorted list?",
    options: [
      "20", "5", "35", "25"
    ],
    correctAnswer: 0,
    explanation: "The middle element of the seven-element sorted list [5, 10, 15, 20, 25, 30, 35] is 20, the fourth value, with three elements on each side.\n\n5 is instead the first element of the sorted list, not the middle.\n\n35 is instead the last element of the sorted list, not the middle.\n\n25 is the actual target being searched for in this example, not the initial middle element."
  },
  {
    id: "csc304_ch2_023",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the binary search worked example searching for 25, after comparing the middle element 20 with the target 25, which half of the list is searched next?",
    options: [
      "The right half, since 25 is greater than 20",
      "The left half, since 25 is greater than 20",
      "Neither half, since the search ends immediately",
      "Both halves, checked one after the other"
    ],
    correctAnswer: 0,
    explanation: "Since the target 25 is greater than the middle element 20, the right half of the list is searched next, matching the rule that a larger target sends the search rightward.\n\nSearching the left half would be the correct move only if the target were smaller than the middle element, which it is not here.\n\nThe search does not end immediately, since 20 does not equal the target 25, so the process continues into the appropriate half.\n\nBoth halves are not checked one after the other; binary search eliminates one half entirely at each step."
  },
  {
    id: "csc304_ch2_024",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the binary search worked example, after narrowing to the sublist [25, 30, 35], what is the new middle element compared against the target 25?",
    options: [
      "30", "25", "35", "20"
    ],
    correctAnswer: 0,
    explanation: "The new middle element of the sublist [25, 30, 35] is 30, which is then compared against the target 25.\n\n25 is the target value itself, not the middle element being compared against it at this step.\n\n35 is instead the last element of this sublist, not its middle.\n\n20 was the middle element of the previous, larger sublist, not this narrower one."
  },
  {
    id: "csc304_ch2_025",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the second binary search worked example, searching the sorted list [2, 4, 6, 8, 10, 12, 14] for 10, what is the initial middle element?",
    options: [
      "8", "2", "14", "10"
    ],
    correctAnswer: 0,
    explanation: "The initial middle element of the seven-element sorted list [2, 4, 6, 8, 10, 12, 14] is 8, the fourth value.\n\n2 is instead the first element of the list, not the middle.\n\n14 is instead the last element of the list, not the middle.\n\n10 is the target value being searched for, not the initial middle element."
  },
  {
    id: "csc304_ch2_026",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the second binary search worked example, after finding that the target 10 is larger than the middle element 8, what is the new middle element examined next?",
    options: [
      "12", "8", "14", "10"
    ],
    correctAnswer: 0,
    explanation: "Since 10 is larger than 8, the search moves to the right half, and the new middle element examined next is 12.\n\n8 was the previous middle element already compared and eliminated, not the next one examined.\n\n14 is the last element of the right half, not its middle.\n\n10 is the target value itself, the value being searched for, not the label of the next middle element to check before it is found."
  },
  {
    id: "csc304_ch2_027",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Binary search compares the target value with the middle element of a sorted list, eliminating half of the list at each step.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "This statement is true. Binary search works by comparing the target value with the middle element of a sorted list, and eliminating half of the list at each step until the target is found."
  },
  {
    id: "csc304_ch2_028",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following best defines merging?",
    options: [
      "Combining the records in two different sorted files into a single sorted file",
      "Dividing a single large file into two smaller unsorted files",
      "Permanently deleting duplicate records from one file",
      "Renaming two files so they share an identical name"
    ],
    correctAnswer: 0,
    explanation: "Merging is combining the records in two different sorted files into a single sorted file.\n\nDividing a large file into two smaller unsorted files is the reverse operation, not merging as defined here.\n\nDeleting duplicate records is a separate cleanup operation, not the combination of two sorted files.\n\nRenaming files to share a name is a labelling change, not the combination of two sorted files' records."
  },
  {
    id: "csc304_ch2_029",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "If sorted list A has r elements and sorted list B has s elements, and they are merged into a single sorted list C, how many elements does C have?",
    options: [
      "n = r + s",
      "n = r minus s",
      "n = r multiplied by s",
      "n = the larger of r or s only"
    ],
    correctAnswer: 0,
    explanation: "When lists A, with r elements, and B, with s elements, are merged into list C, the resulting number of elements is n = r + s, the sum of both.\n\nSubtracting s from r would not account for all elements from both lists, since none are discarded during merging.\n\nMultiplying r by s does not match how merging combines the total count of elements from both lists.\n\nTaking only the larger of r or s would discard elements from the smaller list, which merging does not do."
  },
  {
    id: "csc304_ch2_030",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is one simple way described to merge two sorted lists?",
    options: [
      "Place the elements of B after A, then sort the entire combined list",
      "Delete list B entirely and keep only list A",
      "Interleave elements randomly with no further processing",
      "Convert both lists into a single unsorted stack with no order"
    ],
    correctAnswer: 0,
    explanation: "One simple way to merge is to place the elements of B after the elements of A, then use a sorting algorithm on the entire combined list.\n\nDeleting list B entirely would lose its elements rather than merge them, contradicting the goal of combining both lists.\n\nRandom interleaving with no further processing would not guarantee a sorted result, contrary to the goal of merging into a sorted list.\n\nConverting both lists into an unsorted stack contradicts the entire purpose of merging, which produces a sorted combined list."
  },
  {
    id: "csc304_ch2_031",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sorting algorithm is described as being based on the divide and conquer technique?",
    options: [
      "Merge-Sort",
      "Bubble-Sort",
      "Selection-Sort",
      "Insertion-Sort"
    ],
    correctAnswer: 0,
    explanation: "Merge-Sort is described as an effective sorting algorithm based on the divide and conquer technique.\n\nBubble-Sort instead works by repeatedly comparing and swapping adjacent elements, not dividing the list into sublists.\n\nSelection-Sort instead works by repeatedly finding the smallest remaining element, not dividing the list into sublists.\n\nInsertion-Sort instead works by inserting each element into its correct position one at a time, not dividing the list into sublists."
  },
  {
    id: "csc304_ch2_032",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sequence correctly describes how Merge-Sort works?",
    options: [
      "Dividing the list into sublists, sorting them, then merging them back together",
      "Comparing adjacent elements and swapping them until the largest bubbles to the end",
      "Finding the smallest remaining element and placing it into its correct position",
      "Inserting each new element into its correct position within an already sorted portion"
    ],
    correctAnswer: 0,
    explanation: "Merge-Sort works by dividing the list into smaller sublists, sorting the sublists, and then merging them back together in order.\n\nComparing adjacent elements and swapping them describes Bubble-Sort, not Merge-Sort.\n\nFinding the smallest remaining element and placing it correctly describes Selection-Sort, not Merge-Sort.\n\nInserting each new element into its correct position describes Insertion-Sort, not Merge-Sort."
  },
  {
    id: "csc304_ch2_033",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the Merge-Sort worked example on the 14-element array starting with 66, 33, 40, 22, ..., what does Pass 1 produce?",
    options: [
      "A list of sorted pairs, such as 33, 66 and 22, 40",
      "The single fully sorted array in one step",
      "The original array with no changes made at all",
      "A list of sorted quadruplets of four elements each"
    ],
    correctAnswer: 0,
    explanation: "Pass 1 of Merge-Sort merges each pair of elements to obtain a list of sorted pairs, such as 33, 66 and 22, 40, from the original unsorted values.\n\nProducing the single fully sorted array in one step misrepresents Merge-Sort, which requires multiple passes to fully sort a 14-element array.\n\nLeaving the array unchanged contradicts the purpose of Pass 1, which does merge and sort adjacent pairs.\n\nSorted quadruplets of four elements are instead the result of Pass 2, not Pass 1, which produces pairs of two."
  },
  {
    id: "csc304_ch2_034",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following accurately describes a pass in the Merge-Sort worked example on the 14-element array?",
    options: [
      "Pass 2 merges pairs of pairs into sorted quadruplets of four elements",
      "Pass 1 produces the single, fully sorted 14-element array",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Pass 2 merging pairs of pairs into sorted quadruplets of four elements is stated directly in the worked example. Pass 1 instead produces only sorted pairs, not the single fully sorted array, which is reached only after Pass 4. Since only the Pass 2 statement is accurate, that is the correct answer."
  },
  {
    id: "csc304_ch2_035",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the Merge-Sort worked example, how many passes are required to fully sort the 14-element array?",
    options: [
      "4", "1", "14", "7"
    ],
    correctAnswer: 0,
    explanation: "The worked example shows 4 passes, Pass 1 through Pass 4, are required to fully sort the 14-element array, ending with a single sorted list.\n\n1 pass is far too few, since Pass 1 alone only produces sorted pairs, not a fully sorted array.\n\n14 passes vastly overstates the number actually required, since the array reaches full sorted order after only 4 passes.\n\n7 passes does not match the worked example, which completes full sorting in 4 passes."
  },
  {
    id: "csc304_ch2_036",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is the final, fully sorted result of the Merge-Sort worked example on the 14-element array?",
    options: [
      "11, 20, 22, 30, 33, 40, 44, 50, 55, 60, 66, 77, 80, 88",
      "66, 33, 40, 22, 55, 88, 60, 11, 80, 20, 50, 44, 77, 30",
      "88, 80, 77, 66, 60, 55, 50, 44, 40, 33, 30, 22, 20, 11",
      "33, 66, 22, 40, 55, 88, 11, 60, 20, 80, 44, 50, 30, 77"
    ],
    correctAnswer: 0,
    explanation: "The final sorted array from Pass 4 is 11, 20, 22, 30, 33, 40, 44, 50, 55, 60, 66, 77, 80, 88, in ascending order.\n\n66, 33, 40, 22... is instead the original, unsorted starting array, before any passes were applied.\n\n88, 80, 77, 66... is sorted in descending order, the reverse of the ascending order Merge-Sort actually produces here.\n\n33, 66, 22, 40... is instead the result after only Pass 1, not the fully sorted final result."
  },
  {
    id: "csc304_ch2_037",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sorting algorithm works by repeatedly comparing adjacent elements and swapping them if they are in the wrong order?",
    options: [
      "Bubble-Sort",
      "Merge-Sort",
      "Selection-Sort",
      "Insertion-Sort"
    ],
    correctAnswer: 0,
    explanation: "Bubble-Sort works by repeatedly comparing adjacent elements and swapping them if they are in the wrong order.\n\nMerge-Sort instead works by dividing the list into sublists and merging them back together, not comparing adjacent pairs.\n\nSelection-Sort instead works by finding the smallest remaining element, not comparing adjacent pairs.\n\nInsertion-Sort instead works by inserting each element into its correct position, not comparing adjacent pairs."
  },
  {
    id: "csc304_ch2_038",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which short description is given as the summary for Bubble Sort?",
    options: [
      "Compare neighbours and swap until sorted",
      "Take one element and insert it where it belongs",
      "Divide the list and merge the sorted parts",
      "Find the smallest and place it first"
    ],
    correctAnswer: 0,
    explanation: "'Compare neighbours and swap until sorted' is the short description given as the summary for Bubble Sort.\n\n'Take one element and insert it where it belongs' is instead the summary given for Insertion Sort, not Bubble Sort.\n\n'Divide the list and merge the sorted parts' is instead a description of Merge-Sort's divide and conquer approach, not Bubble Sort.\n\n'Find the smallest and place it first' is instead a description of Selection-Sort's approach, not Bubble Sort."
  },
  {
    id: "csc304_ch2_039",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In Bubble Sort, what happens if the first of two compared adjacent elements is greater than the second?",
    options: [
      "The two elements are swapped",
      "The entire list is immediately discarded",
      "Both elements are deleted from the list",
      "The algorithm terminates without finishing"
    ],
    correctAnswer: 0,
    explanation: "If the first of two adjacent elements is greater than the second, the two elements are swapped, moving the larger one further along the list.\n\nDiscarding the entire list is not part of Bubble Sort's process; the list is repeatedly compared and swapped, not discarded.\n\nDeleting both elements contradicts the goal of sorting, which rearranges elements rather than removing them.\n\nTerminating without finishing contradicts Bubble Sort's process, which continues comparing and swapping across multiple passes until sorted."
  },
  {
    id: "csc304_ch2_040",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Why is Bubble Sort given that name?",
    options: [
      "Because the largest value bubbles to the end after each pass",
      "Because it was invented by a scientist named Bubble",
      "Because it only works on data related to soap and water",
      "Because it sorts elements into circular, bubble-shaped groups"
    ],
    correctAnswer: 0,
    explanation: "Bubble Sort is named for how the largest value moves, or bubbles, to the top or end of the list after each pass through the data.\n\nAn inventor named Bubble is not the reason given for the algorithm's name in this material.\n\nA connection to soap and water data is not the reason given for the algorithm's name.\n\nSorting into circular, bubble-shaped groups is not how Bubble Sort actually organises data; it produces a linear ordered list."
  },
  {
    id: "csc304_ch2_041",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Sorting the list [5, 3, 8, 4] using Bubble Sort, what does the list look like after Pass 1 is complete?",
    options: [
      "3, 5, 4, 8",
      "5, 3, 8, 4",
      "3, 4, 5, 8",
      "8, 5, 4, 3"
    ],
    correctAnswer: 0,
    explanation: "After Pass 1, the list becomes [3, 5, 4, 8]: 5 and 3 swap since 5 is greater, 5 and 8 do not swap, and 8 and 4 swap, leaving 8 at the end.\n\n[5, 3, 8, 4] is instead the original, unsorted starting list, before Pass 1 has been applied.\n\n[3, 4, 5, 8] is instead the fully sorted final result, reached only after Pass 2, not after Pass 1 alone.\n\n[8, 5, 4, 3] describes a descending arrangement that does not match any pass of this worked example."
  },
  {
    id: "csc304_ch2_042",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the Bubble Sort worked example on [5, 3, 8, 4], what is the very first comparison made, and what is its result?",
    options: [
      "5 and 3 are compared, and they are swapped since 5 is greater than 3",
      "5 and 8 are compared, and they are swapped since 5 is greater than 8",
      "8 and 4 are compared first, and they are left unswapped",
      "3 and 4 are compared first, and they are swapped"
    ],
    correctAnswer: 0,
    explanation: "The very first comparison is between 5 and 3, and since 5 is greater than 3, they are swapped, producing [3, 5, 8, 4].\n\n5 and 8 are compared second, not first, and since 5 is less than 8, no swap occurs at that step.\n\n8 and 4 are compared third in Pass 1, not first, and they are swapped since 8 is greater than 4.\n\n3 and 4 are never directly compared as the first step of this example; the first comparison is between 5 and 3."
  },
  {
    id: "csc304_ch2_043",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Bubble Sort requires the input list to already be sorted before the algorithm can begin.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This statement is false. Bubble Sort is designed to sort an unsorted list by repeatedly comparing and swapping adjacent elements; it does not require the list to already be sorted, unlike binary search."
  },
  {
    id: "csc304_ch2_044",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the second Bubble Sort worked example on [29, 10, 14, 37, 13, 5, 8, 21, 2, 18], which value ends Pass 1 in its correct final position?",
    options: [
      "37", "29", "10", "18"
    ],
    correctAnswer: 0,
    explanation: "37, the largest value in the list, is repeatedly swapped forward during Pass 1 and ends the pass in its correct final position at the end of the list.\n\n29 is the first element compared in Pass 1, but it is not the value that reaches its correct final position by the end of the pass.\n\n10 is swapped forward early in Pass 1, but it is not the value that ends the pass in its correct final position.\n\n18 is the last element in the list, but it is not the value described as reaching its correct final position after Pass 1."
  },
  {
    id: "csc304_ch2_045",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sorting algorithm works by repeatedly finding the smallest element in the unsorted portion and placing it in its correct position?",
    options: [
      "Selection-Sort",
      "Bubble-Sort",
      "Merge-Sort",
      "Insertion-Sort"
    ],
    correctAnswer: 0,
    explanation: "Selection-Sort works by repeatedly finding the smallest element in the unsorted portion of the list and placing it in its correct position.\n\nBubble-Sort instead works by repeatedly comparing and swapping adjacent elements, not searching for the smallest remaining value.\n\nMerge-Sort instead works by dividing the list and merging sorted sublists, not searching for the smallest remaining value.\n\nInsertion-Sort instead works by inserting each new element into its correct position within an already sorted portion, not searching the whole unsorted portion for a minimum."
  },
  {
    id: "csc304_ch2_046",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In Selection-Sort, after the smallest element in the entire list is found and placed in the first position, what happens next?",
    options: [
      "The second smallest element is found and placed in the second position",
      "The entire list is immediately declared sorted with no further steps",
      "The largest element is found and placed in the first position instead",
      "The list is divided into two separate unsorted halves"
    ],
    correctAnswer: 0,
    explanation: "After the smallest element is placed in the first position, the second smallest element is found and placed in the second position, and this continues until the list is sorted.\n\nDeclaring the list sorted after only the first step is incorrect, since only the first element's correct position has been fixed, not the rest.\n\nFinding the largest element next contradicts Selection-Sort's process, which continues finding progressively smallest remaining elements, not the largest.\n\nDividing the list into two unsorted halves is not part of Selection-Sort's process; it instead works through the list sequentially by repeated selection."
  },
  {
    id: "csc304_ch2_047",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which of the following accurately describes the Selection-Sort algorithm?",
    options: [
      "Selection-Sort divides the list into sublists before merging them back together",
      "Selection-Sort builds a sorted list by inserting each new element into its correct position",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Neither statement is accurate. Dividing the list into sublists before merging describes Merge-Sort, not Selection-Sort, which repeatedly finds the smallest remaining element instead. Inserting each new element into its correct position describes Insertion-Sort, not Selection-Sort. Since both statements are inaccurate, none of these applies."
  },
  {
    id: "csc304_ch2_048",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Sorting the list [64, 25, 12, 22, 11] using Selection-Sort, what does the list look like after Pass 1?",
    options: [
      "11, 25, 12, 22, 64",
      "64, 25, 12, 22, 11",
      "11, 12, 22, 25, 64",
      "64, 11, 12, 22, 25"
    ],
    correctAnswer: 0,
    explanation: "In Pass 1, the smallest value, 11, is found and swapped with the first element, 64, producing [11, 25, 12, 22, 64].\n\n[64, 25, 12, 22, 11] is instead the original, unsorted starting list, before Pass 1 has been applied.\n\n[11, 12, 22, 25, 64] is instead the fully sorted final result, reached only after all passes are complete, not after Pass 1 alone.\n\n[64, 11, 12, 22, 25] incorrectly leaves 64 in the first position, when Pass 1 specifically swaps 11 into that position."
  },
  {
    id: "csc304_ch2_049",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is the final, fully sorted result of applying Selection-Sort to the list [64, 25, 12, 22, 11]?",
    options: [
      "11, 12, 22, 25, 64",
      "64, 25, 22, 12, 11",
      "11, 25, 12, 22, 64",
      "64, 11, 12, 22, 25"
    ],
    correctAnswer: 0,
    explanation: "The final sorted result is [11, 12, 22, 25, 64], reached after all passes of Selection-Sort are complete.\n\n[64, 25, 22, 12, 11] is sorted in descending order, the reverse of the ascending order Selection-Sort actually produces here.\n\n[11, 25, 12, 22, 64] is instead the result after only Pass 1, not the fully sorted final result.\n\n[64, 11, 12, 22, 25] does not match any correctly completed pass of this worked example."
  },
  {
    id: "csc304_ch2_050",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the Selection-Sort worked example on the 8-element array 77, 33, 44, 11, 88, 22, 66, 55, how many passes, labelled K, are shown before the array is fully sorted?",
    options: [
      "7", "8", "1", "4"
    ],
    correctAnswer: 0,
    explanation: "The worked example shows 7 passes, K = 1 through K = 7, before the 8-element array is fully sorted, matching the rule that an array of N elements sorts in N minus 1 passes.\n\n8 passes overstates the number shown; the table lists K = 1 through K = 7, not K = 1 through K = 8.\n\n1 pass is far too few, since the table clearly shows multiple passes required to fully sort the 8-element array.\n\n4 passes understates the number shown in the worked table, which continues through K = 7."
  },
  {
    id: "csc304_ch2_051",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which sorting algorithm builds a sorted list one element at a time by inserting each new element into its correct position?",
    options: [
      "Insertion-Sort",
      "Bubble-Sort",
      "Selection-Sort",
      "Merge-Sort"
    ],
    correctAnswer: 0,
    explanation: "Insertion-Sort builds a sorted list one element at a time by inserting each new element into its correct position relative to the elements already sorted.\n\nBubble-Sort instead works by repeatedly comparing and swapping adjacent elements, not inserting one element at a time into a growing sorted section.\n\nSelection-Sort instead works by repeatedly finding the smallest remaining element, not inserting a new element into an already sorted section.\n\nMerge-Sort instead works by dividing the list and merging sorted sublists, not inserting one element at a time."
  },
  {
    id: "csc304_ch2_052",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Which short description is given as the summary for Insertion Sort?",
    options: [
      "Take one element and insert it where it belongs",
      "Compare neighbours and swap until sorted",
      "Find the smallest and place it first",
      "Divide the list and merge the sorted parts"
    ],
    correctAnswer: 0,
    explanation: "'Take one element and insert it where it belongs' is the short description given as the summary for Insertion Sort.\n\n'Compare neighbours and swap until sorted' is instead the summary given for Bubble Sort, not Insertion Sort.\n\n'Find the smallest and place it first' is instead a description of Selection-Sort's approach, not Insertion Sort.\n\n'Divide the list and merge the sorted parts' is instead a description of Merge-Sort's approach, not Insertion Sort."
  },
  {
    id: "csc304_ch2_053",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "Sorting the list [8, 3, 5, 2] using Insertion Sort, what does the list look like after Pass 2, when 3 is inserted?",
    options: [
      "3, 8, 5, 2",
      "8, 3, 5, 2",
      "2, 3, 5, 8",
      "3, 5, 8, 2"
    ],
    correctAnswer: 0,
    explanation: "After Pass 2, inserting 3 into the previously sorted [8] produces [3, 8, 5, 2], since 3 belongs before 8.\n\n[8, 3, 5, 2] is instead the original, unsorted starting list, before Pass 2 has been applied.\n\n[2, 3, 5, 8] is instead the fully sorted final result, reached only after Pass 4, not after Pass 2 alone.\n\n[3, 5, 8, 2] incorrectly places 5 before 2 has even been considered, which does not match the Pass 2 step of inserting only 3."
  },
  {
    id: "csc304_ch2_054",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "What is the final, fully sorted result of applying Insertion Sort to the list [8, 3, 5, 2]?",
    options: [
      "2, 3, 5, 8",
      "8, 3, 5, 2",
      "8, 5, 3, 2",
      "3, 8, 5, 2"
    ],
    correctAnswer: 0,
    explanation: "The final sorted result is [2, 3, 5, 8], reached after all four passes of Insertion Sort insert each element into its correct position.\n\n[8, 3, 5, 2] is instead the original, unsorted starting list, before any passes were applied.\n\n[8, 5, 3, 2] is sorted in descending order, the reverse of the ascending order Insertion Sort actually produces here.\n\n[3, 8, 5, 2] is instead the result after only Pass 2, not the fully sorted final result."
  },
  {
    id: "csc304_ch2_055",
    course: "CSC 304",
    chapter: "Chapter 2",
    text: "In the Insertion Sort algorithm applied to an array A with N elements, element A(K) is inserted into its proper position within which portion of the array?",
    options: [
      "The previously sorted subarray A(1) through A(K-1)",
      "A completely separate, unrelated array B",
      "Only the very last position of the array, A(N)",
      "A randomly chosen position anywhere in the array"
    ],
    correctAnswer: 0,
    explanation: "Element A(K) is inserted into its proper position within the previously sorted subarray A(1) through A(K-1), extending the sorted portion by one element.\n\nA separate, unrelated array B is not involved in Insertion Sort, which works within the single array A being sorted.\n\nAlways inserting only at the very last position, A(N), contradicts the algorithm, which finds the correct position within the sorted subarray, not a fixed final slot.\n\nInserting at a randomly chosen position contradicts Insertion Sort's defining feature of placing each element into its specific correct position, not a random one."
  }
];

export default csc304Chapter2Questions;
