import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter5: QuestionV2[] = [
  {
    id: "mth302_ch5_001",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the correct trial particular solution for $y'' + y = \\cos x$?",
    options: [
      "$A\\cos x$",
      "$A\\cos x + B\\sin x$",
      "$x(A\\cos x + B\\sin x)$",
      "$x^2(A\\cos x + B\\sin x)$"
    ],
    correctAnswer: 2,
    explanation: "The complementary function is $C_1\\cos x + C_2\\sin x$, which already contains the naive trial $A\\cos x + B\\sin x$, so the whole trial must be multiplied by $x$ once to avoid duplicating a term already in the complementary solution, giving $x(A\\cos x + B\\sin x)$.\n\n$A\\cos x$ omits the sine term that undetermined coefficients always requires alongside cosine forcing.\n\n$A\\cos x + B\\sin x$ is exactly the trial that duplicates the complementary function and produces a contradiction when substituted.\n\n$x^2(A\\cos x + B\\sin x)$ over-corrects; the multiplication by $x$ is applied once per repetition, and here the root $\\pm i$ is simple, not repeated."
  },
  {
    id: "mth302_ch5_002",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the correct trial particular solution for $y'' - 3y' + 2y = e^x$?",
    options: [
      "$Ae^x$",
      "$Ae^{2x}$",
      "$Ax^2e^x$",
      "$Axe^x$"
    ],
    correctAnswer: 3,
    explanation: "The complementary function $y_c = C_1e^x + C_2e^{2x}$ already contains $e^x$, so the trial must be multiplied by $x$ once to avoid resonance, giving $Axe^x$. Using $Ae^x$ alone would yield the contradiction $0 = e^x$ when substituted, which is a quick way to detect resonance without memorizing the rule outright.\n\n$Ae^x$ duplicates a term already present in the complementary function.\n\n$Ae^{2x}$ matches the other complementary term instead of the actual forcing function $e^x$.\n\n$Ax^2e^x$ over-corrects, since the root $r = 1$ is simple, not repeated."
  },
  {
    id: "mth302_ch5_003",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is a particular solution of $y'' - y = x^2$?",
    options: [
      "$x^2$",
      "$-x^2 + 2$",
      "$-x^2 - 2$",
      "$x^2 + 2$"
    ],
    correctAnswer: 2,
    explanation: "Trying $y_p = ax^2 + bx + c$ gives $y_p'' - y_p = 2a - ax^2 - bx - c = x^2$, which requires $-a = 1$, $-b = 0$, and $2a - c = 0$, giving $a = -1$, $b = 0$, and $c = -2$, so $y_p = -x^2 - 2$. The constant term is forced by the second derivative $2a$, which is exactly why the full polynomial, not just the $ax^2$ term, must be tried.\n\n$x^2$ omits the required constant term entirely.\n\n$-x^2 + 2$ gets the sign of the constant term wrong.\n\n$x^2 + 2$ gets the sign of the leading term wrong."
  },
  {
    id: "mth302_ch5_004",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Which method is appropriate for solving $y'' + y = \\tan x$ on the interval $0 < x < \\pi/2$?",
    options: [
      "Undetermined coefficients",
      "The characteristic equation alone",
      "Separation of variables",
      "Variation of parameters"
    ],
    correctAnswer: 3,
    explanation: "$\\tan x$ is not an exponential, polynomial, sine, cosine, or a finite combination of these, so it has no finite trial family and undetermined coefficients cannot be applied. Variation of parameters works for any continuous forcing term, making it the appropriate method here.\n\nUndetermined coefficients fails precisely because $\\tan x$ falls outside the finite set of forcing functions that method can handle.\n\nThe characteristic equation alone only produces the complementary solution, not a particular solution for a nonhomogeneous equation.\n\nSeparation of variables applies to certain first-order equations, not to this linear second-order nonhomogeneous equation."
  },
  {
    id: "mth302_ch5_005",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the general solution of $y'' - y' = e^{2x}$?",
    options: [
      "$C_1 + C_2e^x + \\dfrac{1}{2}e^{2x}$",
      "$C_1 + C_2e^x + e^{2x}$",
      "$C_1e^x + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$",
      "$C_1 + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $r^2 - r = 0$ gives roots $r = 0$ and $r = 1$, so $y_c = C_1 + C_2e^x$. Trying $y_p = Ae^{2x}$ gives $4A - 2A = 1$, so $A = 1/2$, and since $r = 2$ is not a characteristic root there is no resonance to worry about.\n\n$C_1 + C_2e^x + e^{2x}$ omits the coefficient $1/2$ found from substitution.\n\n$C_1e^x + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ uses the wrong pair of roots for the complementary function.\n\n$C_1 + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ uses the wrong sign on the second exponent in the complementary function."
  },
  {
    id: "mth302_ch5_006",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the general solution of $y'' = e^x + \\sin x$?",
    options: [
      "$e^x - \\sin x + C_1x + C_2$",
      "$e^x + \\sin x + C_1x + C_2$",
      "$e^x - \\cos x + C_1x + C_2$",
      "$e^x - \\sin x + C_1$"
    ],
    correctAnswer: 0,
    explanation: "Setting $p = y'$ gives $p' = e^x + \\sin x$, so $p = e^x - \\cos x + C_1$, and integrating once more gives $y = e^x - \\sin x + C_1x + C_2$, since the integral of $-\\cos x$ is $-\\sin x$.\n\n$e^x + \\sin x + C_1x + C_2$ uses the wrong sign on the sine term.\n\n$e^x - \\cos x + C_1x + C_2$ stops one integration too early, leaving $p$ rather than the fully integrated $y$.\n\n$e^x - \\sin x + C_1$ has only one arbitrary constant, which is impossible for a second-order equation that requires two."
  },
  {
    id: "mth302_ch5_007",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "In solving the initial value problem $y'' + 3y' + 2y = \\sin 2x$, $y(0) = 1$, $y'(0) = 0$, the constants in $y_c = Ae^{-x} + Be^{-2x}$ must be found by applying the initial conditions to which expression?",
    options: [
      "$y_c$ only",
      "$y_p$ only",
      "$y = y_c + y_p$",
      "Either $y_c$ or $y$, whichever is more convenient"
    ],
    correctAnswer: 2,
    explanation: "The initial conditions constrain the actual solution to the differential equation, which is the full sum $y = y_c + y_p$, so both $y_p(0)$ and $y_p'(0)$ must be included when solving for $A$ and $B$; ignoring the particular solution's contribution at $x = 0$ gives incorrect values for the constants.\n\n$y_c$ only ignores the particular solution's own contribution at the initial point, which is the most common error in this type of problem.\n\n$y_p$ only ignores the complementary solution entirely, which cannot be correct since it carries the free constants being solved for.\n\nEither $y_c$ or $y$ wrongly suggests the choice does not matter, when only applying the conditions to the full solution $y$ gives the correct constants."
  }
];

export default mth302Chapter5;
