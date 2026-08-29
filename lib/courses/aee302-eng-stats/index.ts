import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import aee302Chapter1Questions from "./aee302-ch1";

export const aee302StatisticsCourse: Course = {
  id: "aee302-statistics",
  code: "AEE302",
  name: "Statistics",
  description:
    "An introductory treatment of statistics covering the scope of statistical science, deductive and inductive reasoning, core definitions and terms used in experimental design and analysis, and graphical and numerical presentation of data.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Unit 1: Introduction to Statistics",
      description:
        "Scope of statistics, deductive vs inductive reasoning, core statistical definitions, and graphical/numerical data presentation.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [...aee302Chapter1Questions];
  },
};
