import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc302Chapter1_1Questions from "./csc302-ch1_1";
import csc302Chapter1_2Questions from "./csc302-ch1_2";
import csc302Chapter1_3Questions from "./csc302-ch1_3";
import csc302Chapter1_4Questions from "./csc302-ch1_4";
import csc302Chapter2Questions from "./csc302-ch2";
import csc302Chapter3Questions from "./csc302-ch3";

export const csc302JavaProgrammingCourse: Course = {
  id: "csc302-java-programming",
  code: "CSC302",
  name: "Object-Oriented Programming",
  description:
    "Java syntax and control structures alongside core object-oriented programming concepts.",
  chapters: [
    {
      id: "Chapter 1.1",
      label: "Introduction, Java Basics, and Operators",
      description:
        "Java history and setup, data types and variables, and all six operator categories.",
    },
    {
      id: "Chapter 1.2",
      label: "Control Flow, Arrays, and Methods",
      description:
        "If-else, switch, loops, arrays, method overloading, and recursion.",
    },
    {
      id: "Chapter 1.3",
      label: "Exceptions, I/O, Collections, and Lambdas",
      description:
        "Exception handling, console I/O, the Collections Framework, and lambda expressions.",
    },
    {
      id: "Chapter 1.4",
      label: "Strings and File Handling",
      description:
        "String methods, StringBuilder, and file I/O with java.io and java.nio.file.",
    },
    {
      id: "Chapter 2",
      label: "Handout OOP-Thursday_compressed",
      description:
        "Computing history and paradigms, and core OOP concepts, classes, inheritance, and exception handling.",
    },
    {
      id: "Chapter 3",
      label: "L01-Programming Paradigms Presentation",
      description:
        "The history, philosophy, and code anecdotes behind imperative, OOP, functional, declarative, concurrent, esoteric, and multi-paradigm languages.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc302Chapter1_1Questions,
      ...csc302Chapter1_2Questions,
      ...csc302Chapter1_3Questions,
      ...csc302Chapter1_4Questions,
      ...csc302Chapter2Questions,
      ...csc302Chapter3Questions,
    ];
  },
};
