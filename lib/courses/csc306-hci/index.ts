import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc306Chapter1 from "./chapter-1";

export const csc306HciCourse: Course = {
  id: "csc306-human-computer-interaction",
  code: "CSC306",
  name: "Human Computer Interaction",
  description:
    "How people interact with computing systems, and how to design effective, efficient, and satisfying experiences.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Human Computer Interaction (Lectures 1-10)",
      description:
        "Cognition, ergonomics, UI/UX principles, user research, prototyping, evaluation, inclusive design, web/e-commerce UX, and AI for HCI.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [...csc306Chapter1];
  },
};
