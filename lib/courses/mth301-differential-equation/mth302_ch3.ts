import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter3: QuestionV2[] = [
  {
    id: "mth302_ch3_001",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f(x, y)$ is merely continuous on a rectangle containing $(x_0, y_0)$, what is guaranteed for the IVP $y' = f$, $y(x_0) = y_0$?",
    options: [
      "No solution",
      "At least one solution",
      "Exactly one solution",
      "Infinitely many solutions"
    ],
    correctAnswer: 1,
    explanation: "Continuity alone gives Peano existence, meaning at least one solution is guaranteed, but says nothing about uniqueness.\n\nNo solution contradicts the existence guarantee that continuity provides.\n\nExactly one solution would require the additional hypothesis that $f_y$ be continuous or that $f$ be Lipschitz in $y$; without that, an equation like $y' = \\dfrac{3}{2}y^{1/3}$, $y(0) = 0$ has a continuous right-hand side yet two distinct solutions.\n\nInfinitely many solutions is not guaranteed by continuity alone either, only that at least one exists."
  },
  {
    id: "mth302_ch3_002",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "$f(x, y)$ is Lipschitz continuous in $y$ on a region $R$ when which condition holds?",
    options: [
      "There exists $L > 0$ with $|f(x_2, y) - f(x_1, y)| \\leq L|x_2 - x_1|$",
      "There exists $L > 0$ with $|f(x, y_2) - f(x, y_1)| \\leq L|y_2 - y_1|$",
      "$|f(x, y)| \\leq L$ for all points in $R$",
      "$|f_y(x, y)| = L$ for all points in $R$"
    ],
    correctAnswer: 1,
    explanation: "The Lipschitz condition used in the uniqueness theorem controls how much $f$ varies in its second argument $y$, uniformly over $x$, which is exactly $|f(x, y_2) - f(x, y_1)| \\leq L|y_2 - y_1|$.\n\nThere exists $L > 0$ with $|f(x_2, y) - f(x_1, y)| \\leq L|x_2 - x_1|$ is a Lipschitz condition in $x$, which is not the hypothesis the uniqueness theorem requires.\n\n$|f(x, y)| \\leq L$ for all points in $R$ describes boundedness of $f$, a different property entirely.\n\n$|f_y(x, y)| = L$ for all points in $R$ demands an exact equality rather than the correct sufficient bound $|f_y| \\leq L$."
  },
  {
    id: "mth302_ch3_003",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Near $y = 0$, how does the function $f(y) = y^{1/3}$ behave with respect to the Lipschitz condition?",
    options: [
      "Lipschitz with $L = 1$",
      "Lipschitz with $L = 1/3$",
      "Not Lipschitz",
      "Not continuous"
    ],
    correctAnswer: 2,
    explanation: "The derivative $f'(y) = \\dfrac{1}{3}y^{-2/3}$ tends to infinity as $y$ approaches $0$, so no finite constant $L$ can bound the difference quotient on any interval containing $0$, meaning $f$ is not Lipschitz there.\n\nLipschitz with $L = 1$ and Lipschitz with $L = 1/3$ both wrongly assert a finite bound exists near the singular point.\n\nNot continuous is incorrect, since $f(y) = y^{1/3}$ is in fact continuous everywhere, including at $y = 0$, which is exactly why existence still holds even though uniqueness fails for $y' = \\dfrac{3}{2}y^{1/3}$."
  },
  {
    id: "mth302_ch3_004",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For the initial value problem $y' = \\sqrt{|y|}$, $y(0) = 0$, which statement correctly describes existence and uniqueness?",
    options: [
      "Neither existence nor uniqueness holds",
      "The equation is not defined at $y = 0$",
      "Both existence and uniqueness hold",
      "Existence holds, but uniqueness is not guaranteed"
    ],
    correctAnswer: 3,
    explanation: "$f(y) = \\sqrt{|y|}$ is continuous everywhere, so at least one solution exists by the existence theorem, but $f$ is not Lipschitz at $y = 0$, and indeed both $y = 0$ and $y = x^2/4$ for $x \\geq 0$ satisfy the same initial value problem, so uniqueness fails.\n\nNeither existence nor uniqueness holds is too strong, since existence is guaranteed by continuity.\n\nThe equation is not defined at $y = 0$ is false, since $\\sqrt{|0|} = 0$ is perfectly well defined.\n\nBoth existence and uniqueness hold is false because the failure of the Lipschitz condition at $y = 0$ allows more than one solution."
  },
  {
    id: "mth302_ch3_005",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = 3y + \\sin x$ on the whole plane?",
    options: [
      "$L = 1$",
      "No such constant exists",
      "$L = 4$",
      "$L = 3$"
    ],
    correctAnswer: 3,
    explanation: "The difference $|f(x, y_2) - f(x, y_1)|$ equals exactly $3|y_2 - y_1|$, since the $\\sin x$ term cancels, so $L = 3$ is the natural constant that satisfies the Lipschitz inequality; the Lipschitz condition concerns variation in $y$ only, so $\\sin x$ contributes nothing to the bound.\n\n$L = 1$ is too small to satisfy the inequality for all $y_1, y_2$.\n\nNo such constant exists is wrong since the exact bound of $3$ works everywhere.\n\n$L = 4$ works as a valid but unnecessarily loose bound, while $3$ is the value that follows directly from the computation."
  },
  {
    id: "mth302_ch3_006",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which implication about differentiability, the Lipschitz condition, and continuity always holds on a closed bounded rectangle?",
    options: [
      "Continuous implies Lipschitz",
      "Lipschitz implies differentiable",
      "Continuously differentiable implies Lipschitz",
      "Lipschitz implies bounded"
    ],
    correctAnswer: 2,
    explanation: "On a closed bounded rectangle, continuity of $f_y$ guarantees $|f_y| \\leq L$ for some constant $L$, and the mean value theorem then converts this bound directly into the Lipschitz inequality, so continuously differentiable implies Lipschitz.\n\nContinuous implies Lipschitz fails, since $f(y) = y^{1/3}$ is continuous but not Lipschitz near $y = 0$.\n\nLipschitz implies differentiable fails, since $f(y) = |y|$ is Lipschitz with $L = 1$ but is not differentiable at $y = 0$.\n\nLipschitz implies bounded fails, since $f(y) = y$ is Lipschitz on the whole real line yet unbounded."
  },
  {
    id: "mth302_ch3_007",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = \\dfrac{x^2 - y^2}{1 + x^2 - y^2}$, what does the partial derivative $f_y$ equal?",
    options: [
      "$\\dfrac{-2y}{(1 + x^2 - y^2)^2}$",
      "$\\dfrac{2y}{(1 + x^2 - y^2)^2}$",
      "$\\dfrac{-2y}{1 + x^2 - y^2}$",
      "$\\dfrac{-2y(x^2 - y^2)}{(1 + x^2 - y^2)^2}$"
    ],
    correctAnswer: 0,
    explanation: "Applying the quotient rule, the numerator works out to $(-2y)(1 + x^2 - y^2) - (x^2 - y^2)(-2y)$, which simplifies because the $(x^2 - y^2)$ terms cancel exactly, leaving $-2y$ over $(1 + x^2 - y^2)^2$. This cancellation is what makes $f_y$ bounded on any closed rectangle avoiding the singular curve, proving the Lipschitz property there.\n\n$\\dfrac{2y}{(1 + x^2 - y^2)^2}$ has the wrong overall sign.\n\n$\\dfrac{-2y}{1 + x^2 - y^2}$ is missing the required squaring of the denominator from the quotient rule.\n\n$\\dfrac{-2y(x^2 - y^2)}{(1 + x^2 - y^2)^2}$ fails to cancel the $(x^2 - y^2)$ terms that the correct computation removes."
  },
  {
    id: "mth302_ch3_008",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What best describes the existence and uniqueness theorem for $y' = f(x, y)$?",
    options: [
      "Global and necessary",
      "Global and sufficient",
      "Local and sufficient",
      "Local and necessary"
    ],
    correctAnswer: 2,
    explanation: "The theorem's conclusion holds only on some interval about the initial point $x_0$, making it local, and its hypotheses guarantee the conclusion without being required for it, making it sufficient rather than necessary; for instance $y' = y^{1/3}$, $y(0) = 1$ has a unique solution even though $f_y$ is not bounded everywhere in the plane.\n\nGlobal and necessary and global and sufficient both wrongly claim the conclusion extends over the whole domain rather than just a neighborhood of the initial point.\n\nLocal and necessary wrongly claims the hypotheses must hold for uniqueness to occur, when they are only one sufficient route to it."
  }
];

export default mth302Chapter3;
