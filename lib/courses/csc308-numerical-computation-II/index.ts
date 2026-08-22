import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc308Chapter1Questions from "./csc308_ch1_recap_numerical_computation";

export const csc308NumericalComputationIICourse: Course = {
  id: "csc308-numerical-computation-ii",
  code: "CSC308",
  name: "Numerical Computation II",
  description:
    "Continuation of CSC307: numerical computation via the Temporal/Spatial aspects of a process, the three language instruments, and the Digit-Number-Constant-Quantity-Quality hierarchy.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Recap on CSC 307: Numerical Computation I",
      description:
        "Temporal/Spatial aspects and equations, the three language instruments (Regular, Context-neutral, Context-sensitive), and the Digit-Number-Constant-Quantity-Quality hierarchy.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [...csc308Chapter1Questions];
  },
};
