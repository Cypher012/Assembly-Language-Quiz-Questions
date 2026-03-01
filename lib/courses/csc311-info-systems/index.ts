import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import chapter1 from "./chapter-1";
import chapter2 from "./chapter-2";
import chapter3 from "./chapter-3";
import { csc311Chapter4_1 } from "./chapter-41";
import { csc311Chapter4_2 } from "./chapter-42";
import csc311Chapter5 from "./chapter-5";
import csc311Chapter6 from "./chapter-6";

export const csc311InfoSystemsCourse: Course = {
  id: "csc311-info-systems",
  code: "CSC311",
  name: "Introduction to Information Systems",
  description:
    "Learn the fundamentals of information systems, their components, types, and role in modern organizations.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Module 1 Lecture 2",
      description:
        "Introduction to Information Systems, data vs information vs knowledge, system concepts and classifications.",
    },
    {
      id: "Chapter 2",
      label: "Module 2 Lecture 2-2",
      description:
        "Organizing data and information, database models, SQL categories, data warehousing and mining.",
    },
    {
      id: "Chapter 3",
      label: "Module 3 Lecture 3",
      description:
        "Organizations and IS, organizational features, levels, and their relationship with information systems.",
    },
    {
      id: "Chapter 4_1",
      label: "Module 4 Lecture 4-1",
      description:
        "IS fundamentals, history, six core components, perspectives, principles, and real-world applications.",
    },
    {
      id: "Chapter 4_2",
      label: "Module 4 Lecture 4-2",
      description:
        "System Development Life Cycle (SDLC), phases, models, deployment strategies, and testing types.",
    },
    {
      id: "Chapter 5",
      label: "Lecture 5",
      description:
        "Strategic IS, Porter's Five Forces, competitive strategies, Value Chain analysis, and IS metrics.",
    },
    {
      id: "Chapter 6",
      label: "Lecture 6",
      description:
        "The Internet and web services, TCP/IP, client-server architecture, and HTTP fundamentals.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...chapter1,
      ...chapter2,
      ...chapter3,
      ...csc311Chapter4_1,
      ...csc311Chapter4_2,
      ...csc311Chapter5,
      ...csc311Chapter6,
    ];
  },
};
