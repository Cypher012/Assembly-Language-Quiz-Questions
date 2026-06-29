import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc304Chapter1 from "./chapter-1";
import csc304Chapter2 from "./chapter-2";
import csc304Chapter3 from "./chapter-3";
import csc304Chapter4 from "./chapter-4";

export const csc304BusinessProgCourse: Course = {
  id: "csc304-business-programming",
  code: "CSC304",
  name: "Business and Commercial Programming",
  description:
    "Study the transformation of raw business data into actionable information, alongside foundational data structures and their computational operations.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Data Processing & Data Structures",
      description:
        "Fundamental concepts of data and information processing paired with core data structures (Arrays, Lists, Queues, Stacks, and Dictionaries).",
    },
    {
      id: "Chapter 2",
      label: "File Manipulation, Sorting, Searching & Merging Techniques",
      description:
        "Explore the concepts of files, extensions, core algorithms for sorting and searching, and file merging techniques including concatenation and ordered merging.",
    },
    {
      id: "Chapter 3",
      label: "File Maintenance",
      description:
        "Understand the fundamentals of file maintenance including file types, keys, update operations, and the roles of utility and support software.",
    },
    {
      id: "Chapter 4",
      label: "Introduction to Operating Systems",
      description:
        "Learn the basics of operating systems, their core functions, the kernel, and system goals.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc304Chapter1,
      ...csc304Chapter2,
      ...csc304Chapter3,
      ...csc304Chapter4,
    ];
  },
};
