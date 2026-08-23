import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc308Chapter1Questions from "./csc308_ch1_recap_numerical_computation";
import csc308Chapter2Questions from "./csc308_ch2_polynomials";
import csc308Chapter3Questions from "./csc308_ch3_nonlinear_equations";

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
    {
      id: "Chapter 2",
      label: "Polynomials for Representing Numerical Computation Process",
      description:
        "Polynomial representations (Canonical, Horner's, Organic), degree classification, error estimation, and measurement precision (Exact/Precise/Imprecise).",
    },
    {
      id: "Chapter 3",
      label: "Numerical Solution of Non-Linear Equations",
      description:
        "Root-finding methods (Bisection, Regula Falsi, Newton-Raphson, Fixed-Point), convergence behaviour, and practical problem-solving strategy.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc308Chapter1Questions,
      ...csc308Chapter2Questions,
      ...csc308Chapter3Questions,
    ];
  },
};
