import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc304Chapter1Questions from "./csc304_ch1_data_and_data_processing";
import csc304Chapter2Questions from "./csc304_ch2_file_manipulation_sorting_searching";
import csc304Chapter3Questions from "./csc304_ch3_merging_file_maintenance_data_structures";

export const csc304BusinessProgrammingCourse: Course = {
  id: "csc304-business-commercial-programming",
  code: "CSC304",
  name: "Business and Commercial Programming",
  description:
    "Data and data processing, file manipulation, and the sorting and searching algorithms used in business and commercial applications.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Data and Data Processing",
      description:
        "Data versus information, characteristics of good information, classification of information, methods and stages of data processing.",
    },
    {
      id: "Chapter 2",
      label: "File Manipulation: Sorting & Searching",
      description:
        "Files and file manipulation techniques, linear and binary search, merging, and the Merge-Sort, Bubble-Sort, Selection-Sort, and Insertion-Sort algorithms.",
    },
    {
      id: "Chapter 3",
      label: "Merging, File Maintenance & Data Structures",
      description:
        "Concatenation and sorted merging, file/record/field fundamentals, file organisation methods, file maintenance and OS-level operations, the File Management System, and core data structures.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc304Chapter1Questions,
      ...csc304Chapter2Questions,
      ...csc304Chapter3Questions,
    ];
  },
};

// import { Course } from "../../courses";
// import { QuestionV2 } from "../../quiz-types";
// import csc304Chapter1 from "./chapter-1";
// import csc304Chapter2 from "./chapter-2";
// import csc304Chapter3 from "./chapter-3";
// import csc304Chapter4 from "./chapter-4";

// export const csc304BusinessProgCourse: Course = {
//   id: "csc304-business-programming",
//   code: "CSC304",
//   name: "Business and Commercial Programming",
//   description:
//     "Study the transformation of raw business data into actionable information, alongside foundational data structures and their computational operations.",
//   chapters: [
//     {
//       id: "Chapter 1",
//       label: "Data Processing & Data Structures",
//       description:
//         "Fundamental concepts of data and information processing paired with core data structures (Arrays, Lists, Queues, Stacks, and Dictionaries).",
//     },
//     {
//       id: "Chapter 2",
//       label: "File Manipulation, Sorting, Searching & Merging Techniques",
//       description:
//         "Explore the concepts of files, extensions, core algorithms for sorting and searching, and file merging techniques including concatenation and ordered merging.",
//     },
//     {
//       id: "Chapter 3",
//       label: "File Maintenance & File Systems",
//       description:
//         "Understand the fundamentals of file maintenance including file types, keys, update operations, and the roles of utility and support software.",
//     },
//     {
//       id: "Chapter 4",
//       label: "Introduction to Operating Systems",
//       description:
//         "Learn the basics of operating systems, their core functions, the kernel, and system goals.",
//     },
//   ],
//   getQuestions: (): QuestionV2[] => {
//     return [
//       ...csc304Chapter1,
//       ...csc304Chapter2,
//       ...csc304Chapter3,
//       ...csc304Chapter4,
//     ];
//   },
// };
