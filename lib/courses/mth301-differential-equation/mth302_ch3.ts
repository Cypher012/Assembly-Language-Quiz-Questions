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
      "$L = 3$ on that rectangle"
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
  },
  {
    id: "mth302_ch3_009",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f$ is continuous on a rectangle $R$ containing $(x_0, y_0)$, what does the existence theorem guarantee for $y' = f(x, y)$, $y(x_0) = y_0$?",
    options: [
      "At least one solution on some interval about $x_0$",
      "Exactly one solution valid on the whole of the rectangle $R$",
      "A unique solution on every interval about $x_0$",
      "No solution unless $f_y$ is also continuous"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f$ alone delivers existence, meaning at least one solution on some interval around $x_0$, but says nothing about how many.\n\nExactly one solution on the whole rectangle overstates both the uniqueness and the interval, since the conclusion is local.\n\nA unique solution requires the extra hypothesis on $f_y$ or a Lipschitz condition.\n\nContinuity is enough for a solution to exist, so denying existence without $f_y$ reverses the theorem."
  },
  {
    id: "mth302_ch3_010",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which additional hypothesis upgrades the existence theorem to a uniqueness theorem?",
    options: [
      "Continuity of $f_y$ on $R$",
      "Boundedness of $f$ on the rectangle $R$",
      "Continuity of the partial derivative $f_x$ on $R$",
      "Differentiability of $f$ in $x$"
    ],
    correctAnswer: 0,
    explanation: "Adding continuity of $f_y$ on $R$, or equivalently a Lipschitz condition in $y$, yields a unique solution on some interval about $x_0$.\n\nBoundedness of $f$ helps control the interval of existence but does not by itself force uniqueness.\n\nContinuity of $f_x$ concerns the wrong variable, since the Lipschitz condition constrains variation in $y$.\n\nDifferentiability in $x$ is likewise the wrong variable for this conclusion."
  },
  {
    id: "mth302_ch3_011",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "A convenient sufficient test for $f$ to be Lipschitz in $y$ on $R$ is which condition?",
    options: [
      "$|f_y| \\leq L$ on $R$",
      "$|f| \\leq L$ everywhere on the rectangle $R$",
      "$|f_x| \\leq L$ at every point of $R$",
      "$f$ is continuous on $R$"
    ],
    correctAnswer: 0,
    explanation: "If $f_y$ exists and satisfies $|f_y| \\leq L$ on $R$, the mean value theorem gives $|f(x, y_2) - f(x, y_1)| \\leq L|y_2 - y_1|$, which is the Lipschitz condition.\n\nBounding $f$ itself controls the size of the function, not its rate of change in $y$.\n\nBounding $f_x$ constrains variation in the wrong variable.\n\nMere continuity is strictly weaker and does not imply a Lipschitz bound, as $y^{1/3}$ near $0$ shows."
  },
  {
    id: "mth302_ch3_012",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which theorem converts a bound on $f_y$ into the Lipschitz inequality?",
    options: [
      "The mean value theorem",
      "The intermediate value theorem for continuous functions",
      "The fundamental theorem of calculus",
      "Rolle's theorem"
    ],
    correctAnswer: 0,
    explanation: "The mean value theorem writes $f(x, y_2) - f(x, y_1) = f_y(x, \\xi)(y_2 - y_1)$ for some intermediate $\\xi$, so a bound $|f_y| \\leq L$ immediately gives the Lipschitz estimate.\n\nThe intermediate value theorem concerns attained values, not difference quotients.\n\nThe fundamental theorem of calculus relates integration and differentiation rather than bounding differences.\n\nRolle's theorem is the special case where the endpoint values coincide, which is too narrow here."
  },
  {
    id: "mth302_ch3_013",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which chain of implications is correct?",
    options: [
      "Continuously differentiable implies Lipschitz implies continuous",
      "Continuous implies Lipschitz implies continuously differentiable, in that order",
      "Lipschitz implies continuously differentiable implies continuous",
      "Continuous implies continuously differentiable implies Lipschitz"
    ],
    correctAnswer: 0,
    explanation: "The correct ordering runs from the strongest condition to the weakest: continuous differentiability implies a Lipschitz condition, which in turn implies continuity, and no arrow reverses.\n\nStarting from continuity would claim every continuous function is Lipschitz, contradicted by $y^{1/3}$ near $0$.\n\nClaiming Lipschitz implies continuous differentiability is contradicted by $|y|$, which is Lipschitz but not differentiable at $0$.\n\nClaiming continuity implies continuous differentiability is false for the same reason."
  },
  {
    id: "mth302_ch3_014",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "The function $f(y) = |y|$ illustrates which situation?",
    options: [
      "Lipschitz but not differentiable at $0$",
      "Differentiable but not Lipschitz at the origin $0$",
      "Continuous but not Lipschitz in any neighbourhood of $0$",
      "Neither continuous nor Lipschitz at $0$"
    ],
    correctAnswer: 0,
    explanation: "The absolute value satisfies $||y_2| - |y_1|| \\leq |y_2 - y_1|$, so it is Lipschitz with $L = 1$, yet it has a corner at $0$ and so fails to be differentiable there.\n\nIt is not differentiable at $0$, so calling it differentiable there is wrong.\n\nIt is Lipschitz, so describing it as merely continuous understates what it satisfies.\n\nIt is certainly continuous everywhere, so denying continuity is false."
  },
  {
    id: "mth302_ch3_015",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = 5y + \\cos x$ on the whole plane?",
    options: [
      "$L = 5$",
      "$L = 1$",
      "$L = 6$",
      "No such constant exists"
    ],
    correctAnswer: 0,
    explanation: "Here $f_y = 5$, so $|f(x, y_2) - f(x, y_1)| = 5|y_2 - y_1|$ exactly, and $L = 5$ works globally.\n\n$L = 1$ comes from the bound on $\\cos x$, which involves $x$ and plays no part in the Lipschitz condition in $y$.\n\n$L = 6$ adds the two bounds together, but the $x$-dependent term cancels in the difference.\n\nA constant does exist, since $f_y$ is bounded everywhere."
  },
  {
    id: "mth302_ch3_016",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "In the Lipschitz condition $|f(x, y_2) - f(x, y_1)| \\leq L|y_2 - y_1|$, what is held fixed between the two evaluations?",
    options: [
      "The variable $x$",
      "The variable $y$ between the two evaluations",
      "The constant $L$ only",
      "Both variables simultaneously"
    ],
    correctAnswer: 0,
    explanation: "The two points share the same $x$ and differ only in $y$, which is why the condition is described as Lipschitz continuity in $y$.\n\nHolding $y$ fixed would compare different $x$ values, which is not what the inequality states.\n\nThe constant $L$ is indeed fixed, but the question asks which variable is held fixed between evaluations.\n\nHolding both fixed would make the two points identical and the inequality vacuous."
  },
  {
    id: "mth302_ch3_017",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For the initial value problem $y' = \\tfrac{3}{2}y^{1/3}$, $y(0) = 0$, which pair of functions both solve it?",
    options: [
      "$y \\equiv 0$ and $y = x^{3/2}$",
      "$y \\equiv 0$ together with the function $y = x^{2/3}$",
      "$y = x$ and $y = x^{3/2}$",
      "$y \\equiv 1$ and $y = x^{3/2}$"
    ],
    correctAnswer: 0,
    explanation: "Both the zero function and $y = x^{3/2}$ for $x \\geq 0$ satisfy the equation and the condition $y(0) = 0$, so uniqueness fails even though existence holds.\n\nThe exponent $2/3$ does not satisfy the equation on substitution.\n\nThe function $y = x$ fails to satisfy the equation.\n\nThe constant $1$ violates the initial condition $y(0) = 0$."
  },
  {
    id: "mth302_ch3_018",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "In the problem $y' = \\tfrac{3}{2}y^{1/3}$, $y(0) = 0$, why does uniqueness fail while existence still holds?",
    options: [
      "$f$ is continuous but $f_y$ is unbounded at $y = 0$",
      "$f$ is discontinuous at $y = 0$",
      "$f$ is bounded but not continuous anywhere",
      "The initial condition lies outside every rectangle"
    ],
    correctAnswer: 0,
    explanation: "The function $f(y) = \\tfrac{3}{2}y^{1/3}$ is continuous, which secures existence, but $f_y = \\tfrac{1}{2}y^{-2/3}$ blows up at $y = 0$, so no Lipschitz condition holds there and uniqueness is lost.\n\nThe function is continuous at $y = 0$, so calling it discontinuous is wrong.\n\nIt is continuous everywhere, contradicting the claim that it is nowhere continuous.\n\nThe point $(0, 0)$ lies in perfectly good rectangles, so the hypothesis is not vacuous."
  },
  {
    id: "mth302_ch3_019",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "The existence and uniqueness theorems for $y' = f(x, y)$ are best described as which kind of conditions?",
    options: [
      "Sufficient and local",
      "Necessary as well as global",
      "Necessary and sufficient for a solution to exist",
      "Sufficient and global"
    ],
    correctAnswer: 0,
    explanation: "The hypotheses guarantee a conclusion on some interval about $x_0$, so they are sufficient rather than necessary, and the conclusion is local rather than global.\n\nCalling them necessary would imply that a failure of the hypotheses rules out a solution, which is false.\n\nCalling them necessary and sufficient claims an equivalence that does not hold.\n\nCalling the conclusion global overstates the interval on which it is valid."
  },
  {
    id: "mth302_ch3_020",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "On which sets can $f(x, y) = \\dfrac{x^2 - y^2}{1 + x^2 - y^2}$ be shown Lipschitz in $y$?",
    options: [
      "Closed bounded rectangles avoiding $1 + x^2 - y^2 = 0$",
      "The whole plane without restriction",
      "Every rectangle in the plane",
      "Open unbounded regions containing the curve"
    ],
    correctAnswer: 0,
    explanation: "The function is undefined where $1 + x^2 - y^2 = 0$, so the argument requires a closed bounded rectangle clear of that curve, on which $f_y$ is continuous and hence bounded.\n\nThe whole plane fails because the function is not even defined on the excluded curve.\n\nClaiming every rectangle works ignores those that meet the curve.\n\nUnbounded regions containing the curve fail on both counts at once."
  },
  {
    id: "mth302_ch3_021",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = 7y$ on the whole plane?",
    options: [
      "$L = 7$",
      "$L = 1$",
      "$L = 0$ for every bounded $f$",
      "$L = 49$"
    ],
    correctAnswer: 0,
    explanation: "Since $f_y = 7$, the difference satisfies $|7y_2 - 7y_1| = 7|y_2 - y_1|$, so $L = 7$ is the natural constant.\n\n$L = 1$ would require the function to change no faster than its argument, which fails by a factor of seven.\n\n$L = 0$ would force $f$ to be constant in $y$.\n\n$L = 49$ squares the coefficient, which the difference does not produce."
  },
  {
    id: "mth302_ch3_022",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Why is $f(y) = y^{1/3}$ not Lipschitz near $y = 0$?",
    options: [
      "Its derivative is unbounded as $y$ approaches $0$",
      "It is discontinuous at $y = 0$",
      "It fails to be defined at $y = 0$",
      "It is bounded but changes sign at $0$"
    ],
    correctAnswer: 0,
    explanation: "The derivative $\\tfrac{1}{3}y^{-2/3}$ grows without bound as $y$ approaches $0$, so no single constant $L$ can dominate the difference quotient near the origin.\n\nThe cube root is continuous at $0$, so discontinuity is not the obstruction.\n\nIt is defined at $0$, taking the value $0$.\n\nChanging sign is irrelevant to whether a Lipschitz bound exists."
  },
  {
    id: "mth302_ch3_023",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "In the standard statement of the theorems, how is the rectangle $R$ described?",
    options: [
      "$\\{(x, y) : a \\leq x \\leq b,\\ c \\leq y \\leq d\\}$",
      "$\\{(x, y) : a < x < b,\\ c < y < d\\}$",
      "$\\{(x, y) : x^2 + y^2 \\leq r^2\\}$",
      "$\\{(x, y) : x \\geq a,\\ y \\geq c\\}$"
    ],
    correctAnswer: 0,
    explanation: "The theorems are stated on a closed rectangle with both variables confined between fixed bounds, which is what makes continuous functions on it bounded.\n\nAn open rectangle would not guarantee that a continuous $f_y$ attains a bound.\n\nA disc is a different region and is not the set used in the statement.\n\nA quadrant is unbounded, so continuity alone would not deliver the required bound."
  },
  {
    id: "mth302_ch3_024",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Continuity of $f$ on $R$ guarantees which of the following?",
    options: [
      "Existence but not uniqueness",
      "Uniqueness but not existence in general",
      "Both existence and uniqueness of the solution",
      "Neither existence nor uniqueness of the solution"
    ],
    correctAnswer: 0,
    explanation: "Continuity is exactly the hypothesis of the existence theorem, and the example $y' = \\tfrac{3}{2}y^{1/3}$ with $y(0) = 0$ shows it cannot deliver uniqueness.\n\nUniqueness without existence is impossible, since a unique solution is in particular a solution.\n\nBoth conclusions require the additional condition on $f_y$.\n\nDenying existence contradicts the existence theorem itself."
  },
  {
    id: "mth302_ch3_025",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = 3y + \\sin x$, what is $f_y$?",
    options: [
      "$3$",
      "$\\cos x$",
      "$3 + \\cos x$",
      "$3y$"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to $y$ treats $\\sin x$ as a constant, leaving $f_y = 3$.\n\n$\\cos x$ is the derivative with respect to $x$, not $y$.\n\nAdding the two derivatives mixes partial derivatives in different variables.\n\nThe expression $3y$ is part of $f$ itself rather than its derivative in $y$."
  },
  {
    id: "mth302_ch3_026",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Why must the rectangle used in a Lipschitz argument be bounded as well as closed?",
    options: [
      "So that the continuous $f_y$ attains a finite bound $L$",
      "So that the solution can be extended to all of $\\mathbb{R}$",
      "So that the initial point lies on the boundary",
      "So that $f$ becomes linear in $y$"
    ],
    correctAnswer: 0,
    explanation: "A continuous function on a closed bounded set is bounded, and that finite bound is exactly the constant $L$ the Lipschitz condition requires.\n\nExtending the solution to the whole line is a global conclusion the local theorems do not provide.\n\nThe initial point is required to lie inside the rectangle, not on its boundary.\n\nNothing about the region makes $f$ linear in $y$."
  },
  {
    id: "mth302_ch3_027",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which statement about the converse implications is correct?",
    options: [
      "None of the arrows in the chain reverses",
      "Lipschitz always implies differentiability",
      "Continuity always implies a Lipschitz bound",
      "All of the arrows reverse whenever the functions involved are bounded"
    ],
    correctAnswer: 0,
    explanation: "Each implication in the chain is strict, with $|y|$ blocking the reverse of one arrow and $y^{1/3}$ blocking the other.\n\nThe absolute value is Lipschitz yet not differentiable at the origin.\n\nThe cube root is continuous yet not Lipschitz near the origin.\n\nBoundedness does not repair either counterexample, since both functions are bounded on suitable intervals."
  },
  {
    id: "mth302_ch3_028",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f_y$ fails to be continuous at a point, what may still be concluded when $f$ itself is continuous?",
    options: [
      "A solution exists, though possibly not a unique one",
      "No solution can exist through that point",
      "The solution is unique but undefined there",
      "The problem has exactly two solutions"
    ],
    correctAnswer: 0,
    explanation: "Existence rests on continuity of $f$ alone, so a solution is still guaranteed, while the loss of the condition on $f_y$ removes only the uniqueness conclusion.\n\nDenying existence misreads which hypothesis supports which conclusion.\n\nUniqueness is precisely what is lost, so asserting it is wrong.\n\nNothing forces the number of solutions to be exactly two; the example with $y^{1/3}$ admits a whole family."
  },
  {
    id: "mth302_ch3_029",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "The Lipschitz condition constrains the behaviour of $f$ with respect to which variable?",
    options: [
      "$y$ alone",
      "$x$ alone",
      "$x$ and $y$ equally",
      "Neither variable directly"
    ],
    correctAnswer: 0,
    explanation: "The inequality compares $f$ at two points sharing the same $x$ and differing in $y$, so it controls variation in $y$ only.\n\nVariation in $x$ is not constrained by the condition at all.\n\nTreating both variables equally would require a stronger joint condition that the definition does not impose.\n\nThe condition certainly constrains $f$, so saying neither variable is involved is wrong."
  },
  {
    id: "mth302_ch3_030",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = y^2$ on the rectangle where $|y| \\leq 3$, what Lipschitz constant does the derivative bound supply?",
    options: [
      "$L = 6$",
      "$L = 3$",
      "$L = 9$",
      "$L = 2$"
    ],
    correctAnswer: 0,
    explanation: "Here $f_y = 2y$, and on $|y| \\leq 3$ this satisfies $|f_y| \\leq 6$, so $L = 6$ serves as a Lipschitz constant.\n\n$L = 3$ uses the bound on $y$ itself rather than on $2y$.\n\n$L = 9$ squares the bound instead of doubling it.\n\n$L = 2$ keeps the coefficient but drops the bound on $y$."
  },
  {
    id: "mth302_ch3_031",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Why is $f(x, y) = y^2$ not Lipschitz in $y$ on the whole plane?",
    options: [
      "$f_y = 2y$ is unbounded as $|y|$ grows",
      "$f$ is discontinuous for large $|y|$",
      "$f$ fails to be defined for negative $y$",
      "$f$ does not depend on the variable $x$ at all"
    ],
    correctAnswer: 0,
    explanation: "No single constant can dominate $|2y|$ over all of the plane, so the Lipschitz inequality fails globally even though it holds on every bounded strip.\n\nThe square is continuous everywhere, so discontinuity is not the issue.\n\nIt is perfectly well defined for negative $y$.\n\nIndependence from $x$ is irrelevant to a condition stated in terms of $y$."
  },
  {
    id: "mth302_ch3_032",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "The interval on which the existence and uniqueness theorems guarantee a solution is described how?",
    options: [
      "Some interval about $x_0$, not necessarily all of $[a, b]$",
      "Exactly the interval $[a, b]$ defining the rectangle",
      "The entire real line",
      "An interval with $x_0$ as an endpoint"
    ],
    correctAnswer: 0,
    explanation: "The conclusion is local: a solution is guaranteed on some interval containing $x_0$, which may be considerably smaller than the $x$-range of the rectangle.\n\nClaiming the full interval $[a, b]$ overstates what the theorems deliver.\n\nExtending to the whole real line is a global claim the theorems do not support.\n\nThe point $x_0$ sits inside the interval rather than at an endpoint."
  },
  {
    id: "mth302_ch3_033",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which function is continuous everywhere yet fails the Lipschitz condition near the origin?",
    options: [
      "$f(y) = y^{1/3}$",
      "$f(y) = |y|$ near the origin",
      "$f(y) = 3y$ on the whole real line",
      "$f(y) = y^2$ on any bounded interval"
    ],
    correctAnswer: 0,
    explanation: "The cube root is continuous at $0$ but its derivative blows up there, so no Lipschitz constant exists near the origin.\n\nThe absolute value is Lipschitz with constant $1$ despite its corner.\n\nA linear function is Lipschitz with constant $3$.\n\nThe square is Lipschitz on any bounded set, including neighbourhoods of the origin."
  },
  {
    id: "mth302_ch3_034",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which conclusion follows if $f$ and $f_y$ are both continuous on a rectangle containing the initial point?",
    options: [
      "A unique solution exists on some interval about $x_0$",
      "Infinitely many solutions pass through the point",
      "A solution exists on the whole real line",
      "No conclusion can be drawn without also assuming boundedness of $f$"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f$ gives existence and continuity of $f_y$ supplies the Lipschitz condition, so together they deliver a unique local solution.\n\nInfinitely many solutions would contradict the uniqueness conclusion.\n\nA solution on the whole line is a global statement beyond the theorem's reach.\n\nBoundedness follows automatically from continuity on a closed bounded rectangle, so no extra hypothesis is needed."
  },
  {
    id: "mth302_ch3_035",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = -4y$ on the whole plane?",
    options: [
      "$L = 4$",
      "$L = -4$",
      "$L = 16$",
      "$L = 0$ by boundedness of the sine"
    ],
    correctAnswer: 0,
    explanation: "Since $|f(x, y_2) - f(x, y_1)| = 4|y_2 - y_1|$, the constant $L = 4$ works, the sign being absorbed by the absolute value.\n\nA Lipschitz constant must be positive by definition, so a negative value is inadmissible.\n\nSquaring the coefficient is not what the difference produces.\n\nA zero constant would force $f$ to be independent of $y$."
  },
  {
    id: "mth302_ch3_036",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "What is a Lipschitz constant for $f(x, y) = \\sin y$ on the whole plane?",
    options: [
      "$L = 1$",
      "$L = 0$",
      "$L = \\pi$ from the period of the sine",
      "No such constant exists"
    ],
    correctAnswer: 0,
    explanation: "Here $f_y = \\cos y$ satisfies $|\\cos y| \\leq 1$ everywhere, so the mean value theorem gives the Lipschitz condition with $L = 1$.\n\nA zero constant would make $\\sin y$ independent of $y$.\n\nThe value $\\pi$ confuses the period of the function with a bound on its derivative.\n\nA constant does exist, because the derivative is bounded globally."
  },
  {
    id: "mth302_ch3_037",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f$ is continuously differentiable on a closed bounded rectangle $R$, what follows about $f$ in $y$ on $R$?",
    options: [
      "It is Lipschitz there",
      "It fails to be continuous there",
      "It is unbounded there",
      "Nothing at all follows"
    ],
    correctAnswer: 0,
    explanation: "Continuity of $f_y$ on a closed bounded set makes $f_y$ bounded, and the mean value theorem then delivers the Lipschitz condition.\n\nContinuous differentiability implies continuity rather than contradicting it.\n\nA continuous function on a closed bounded rectangle is bounded, not unbounded.\n\nA definite conclusion does follow, which is why this is the standard sufficient test."
  },
  {
    id: "mth302_ch3_038",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "Which pair of functions together shows that neither arrow in the chain of implications reverses?",
    options: [
      "$|y|$ and $y^{1/3}$",
      "$3y$ and $7y$",
      "$\\sin y$ and $\\cos y$",
      "$y^2$ and $y^3$"
    ],
    correctAnswer: 0,
    explanation: "The absolute value is Lipschitz without being differentiable at $0$, and the cube root is continuous without being Lipschitz near $0$, so together they block both converses.\n\nBoth linear functions are continuously differentiable and Lipschitz, so neither blocks anything.\n\nThe sine and cosine are smooth and globally Lipschitz.\n\nBoth powers are continuously differentiable, so they provide no counterexample."
  },
  {
    id: "mth302_ch3_039",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "For $f(x, y) = \\dfrac{x^2 - y^2}{1 + x^2 - y^2}$, where does the Lipschitz argument break down?",
    options: [
      "On the curve $1 + x^2 - y^2 = 0$",
      "At the origin only",
      "Wherever $y$ is negative",
      "On the line $y = x$"
    ],
    correctAnswer: 0,
    explanation: "The denominator vanishes on $1 + x^2 - y^2 = 0$, so $f$ is not even defined there and no bound on $f_y$ can hold near it.\n\nThe origin is a perfectly ordinary point, where the denominator equals $1$.\n\nNegative values of $y$ cause no difficulty, since only the square of $y$ enters.\n\nOn the line $y = x$ the numerator vanishes but the denominator equals $1$, so the function is well behaved."
  },
  {
    id: "mth302_ch3_040",
    course: "MTH 302",
    chapter: "Chapter 3",
    text: "If $f$ is continuous but not Lipschitz at a point, how many solutions may pass through that point?",
    options: [
      "Possibly more than one",
      "Exactly one",
      "None at all",
      "Exactly two"
    ],
    correctAnswer: 0,
    explanation: "Continuity still secures existence, but without a Lipschitz condition uniqueness can fail, so more than one solution may pass through the point.\n\nExactly one would require the uniqueness hypothesis that is precisely what has been lost.\n\nNo solution at all contradicts the existence theorem, which needs only continuity.\n\nNothing pins the count at two; the standard example admits a whole family."
  }
];

export default mth302Chapter3;
