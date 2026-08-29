import { QuestionV2 } from "@/lib/quiz-types";

const csc308Chapter3Questions: QuestionV2[] = [
  {
    id: "csc308_ch3_001",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Non-linear equations are generally represented in which form?",
    options: ["$f(x) = 1.0$", "$f(x) = 0.0$", "$f(x) = x$", "$f'(x) = 0.0$"],
    correctAnswer: 1,
    explanation:
      "Non-linear equations are represented as $f(x) = 0.0$.\n\n$f(x) = 1.0$ is not the general form used to represent a non-linear equation.\n\n$f(x) = x$ describes a specific identity relationship, not the general non-linear equation form.\n\n$f'(x) = 0.0$ involves the derivative of the function, which is used later in the Newton-Raphson method, not the general representation of a non-linear equation itself.",
  },
  {
    id: "csc308_ch3_002",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "An approximate Polynomial representation $P_n(x)$ is used in place of a function $f(x)$ under which circumstance?",
    options: [
      "When the process for a problem cannot be directly observed and/or represented explicitly",
      "Only when the function $f(x)$ is already known to be linear",
      "Only when the degree $n$ is exactly zero",
      "Whenever the machine epsilon is larger than the admissible error",
    ],
    correctAnswer: 0,
    explanation:
      "When the process for a problem cannot be directly observed and/or represented explicitly, the function $f(x)$ is used to render instances of $x$ of interest, and an approximate Polynomial representation $P_n(x)$ is used in the stead of the direct observation, refined until it is as near to $f(x)$ as possible.\n\n$P_n(x)$ is specifically introduced for the case where direct representation is not possible, not restricted to cases where $f(x)$ is already known to be linear.\n\nA degree of exactly zero would make $P_n(x)$ a single constant, unrelated to the general circumstance under which $P_n(x)$ substitutes for $f(x)$.\n\nThe machine epsilon and admissible error relate to a separate later concern, the vagueness of Zero in computation, not to why $P_n(x)$ is used in place of $f(x)$.",
  },
  {
    id: "csc308_ch3_003",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "A function $f(x)$ is approximately represented by a polynomial $p_n(x)$ of degree $n$. If $n = 1$, what is the polynomial called?",
    options: ["Non-linear", "Quadratic", "Linear", "Undefined"],
    correctAnswer: 2,
    explanation:
      "If $n = 1$, the polynomial is Linear.\n\nNon-linear instead describes the case where $n > 1$, not $n = 1$.\n\nQuadratic is a specific degree-2 case, which would fall under Non-linear here, not the degree-1 Linear case.\n\nThe polynomial is well defined at $n = 1$, so 'Undefined' does not describe this case.",
  },
  {
    id: "csc308_ch3_004",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "If a polynomial $p_n(x)$ of degree $n$ satisfies $n > 1$, what is it called?",
    options: ["Linear", "Constant", "Fractional", "Non-linear"],
    correctAnswer: 3,
    explanation:
      "If $n > 1$, the polynomial is Non-linear, which is the subject of this laboratory manual.\n\nLinear instead describes the degree $n = 1$ case, not $n > 1$.\n\nA Constant polynomial would have degree $n = 0$, not $n > 1$.\n\n'Fractional' is not a degree classification used for polynomials in this material; polynomials are classified as Linear or Non-linear by degree.",
  },
  {
    id: "csc308_ch3_005",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The root of $p(x)$ is the instance $x_r$ that, when substituted into $p(x)$, results in which value?",
    options: ["Zero (0)", "One (1)", "The machine epsilon", "The degree $n$"],
    correctAnswer: 0,
    explanation:
      "The root of $p(x)$ is the instance $x_r$ which, when substituted into $p(x)$, results in Zero (0); at this point the system described by $p(x)$ is said to be stable or at equilibrium.\n\nOne (1) is not the value a root produces when substituted into $p(x)$; that would not satisfy the definition of a root.\n\nThe machine epsilon is a separate precision-related quantity, not the result of substituting a root into $p(x)$.\n\nThe degree $n$ is a property of the polynomial itself, not the value produced by substituting the root $x_r$ into $p(x)$.",
  },
  {
    id: "csc308_ch3_006",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "At the root $x_r$ of $p(x)$, the system described by $p(x)$ is said to be in which state?",
    options: [
      "Stable, or at equilibrium",
      "Unstable, or diverging",
      "Oscillating, with no fixed state",
      "Undefined, since $p(x_r) = 0$ is an error condition",
    ],
    correctAnswer: 0,
    explanation:
      "At the point $x_r$, the system described by $p(x)$ is said to be stable or at equilibrium.\n\nUnstable or diverging describes a failure mode of the iterative computation process, not the state of the system at its actual root.\n\nOscillating with no fixed state also describes a failure mode of iteration, not the system's state at the true root.\n\n$p(x_r) = 0$ is precisely the defining condition of a root, not an error condition; the system is well-defined and at equilibrium there.",
  },
  {
    id: "csc308_ch3_007",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Why is the idea of Zero described as vague and not well defined in conventional computing?",
    options: [
      "Because what counts as Zero is influenced by the number of bits in the Mantissa of the machine and representation scheme used",
      "Because Zero is not admissible in any numbering scheme",
      "Because Zero can only be represented using Regula Falsi",
      "Because every computer uses a different symbol to represent Zero",
    ],
    correctAnswer: 0,
    explanation:
      "What constitutes Zero depends on the representation of a Floating-point number in a computation process, and what counts as Zero is influenced by the number of bits in the Mantissa of the machine and representation scheme used, with Zero expressed and represented in the content of the machine epsilon.\n\nZero's vagueness here concerns floating-point representation precision, not a claim that Zero is inadmissible in every numbering scheme.\n\nRegula Falsi is one specific root-finding method discussed later, unrelated to why the idea of Zero itself is vague in computing.\n\nThe vagueness of Zero concerns machine precision and Mantissa bit-count, not differing symbols used to represent it across computers.",
  },
  {
    id: "csc308_ch3_008",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For the purpose of convenience in this laboratory, what assumption is made about $f(x)$ and $p_n(x)$?",
    options: [
      "That $f(x) = p_n(x)$",
      "That $f(x)$ is always Linear",
      "That $p_n(x)$ is always of degree zero",
      "That $f(x)$ and $p_n(x)$ are never equal",
    ],
    correctAnswer: 0,
    explanation:
      "For the purpose of convenience, it is assumed that $f(x) = p_n(x)$ throughout the laboratory.\n\n$f(x)$ is not assumed to always be Linear; the laboratory's entire focus is on Non-linear equations, where $n > 1$.\n\n$p_n(x)$ is not assumed to always be of degree zero; a degree-zero polynomial would be a constant, not a general approximation of $f(x)$.\n\nThe convenience assumption is precisely that $f(x)$ and $p_n(x)$ ARE equal, the opposite of never being equal.",
  },
  {
    id: "csc308_ch3_009",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the solution of a non-linear function, the computed approximation $x_e$ is always in what condition, relative to the true root $x_r$?",
    options: [
      "In error, since the exact computation of $x_r$ is impossible",
      "Exactly equal to $x_r$, since $x_e$ is always exact",
      "Undefined, until the machine epsilon is specified",
      "Equal to the degree $n$ of the polynomial",
    ],
    correctAnswer: 0,
    explanation:
      "In many Engineering and Scientific computing applications, the exact computation of the root $x_r$ is impossible; an approximation $x_e$ is usually computed instead, and the $x_e$ computed is always in error.\n\n$x_e$ is not exactly equal to $x_r$; it is explicitly described as always being in error, the opposite of exact equality.\n\n$x_e$ is a computed, defined quantity even before the machine epsilon is specified; its error, not its definedness, is the point being made.\n\n$x_e$ is an approximate root value, not the degree $n$ of the polynomial, which is a separate, unrelated quantity.",
  },
  {
    id: "csc308_ch3_010",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Given the absolute error relationship $|x_r - x_e| = x_a$, what does $x_a$ represent?",
    options: [
      "The absolute error in the computation",
      "The desirable, true root",
      "The obtained or computed root",
      "The degree of the polynomial being solved",
    ],
    correctAnswer: 0,
    explanation:
      "$x_a$ is the absolute error in the computation, given as $|x_r - x_e| = x_a$.\n\n$x_r$, not $x_a$, is the desirable root.\n\n$x_e$, not $x_a$, is the obtained or computed root.\n\nThe degree of the polynomial is a separate quantity, unrelated to $x_a$, which specifically denotes the absolute error between the true and computed roots.",
  },
  {
    id: "csc308_ch3_011",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the aim of a non-linear equation solution, what property should the absolute error $x_a$ have?",
    options: [
      "As small as possible",
      "As large as possible",
      "Exactly equal to the machine epsilon at all times",
      "Exactly equal to the degree $n$",
    ],
    correctAnswer: 0,
    explanation:
      "The aim in the implementation of a solution is to obtain $x_e$ such that $x_a$ is as small as possible.\n\nAn absolute error that is as large as possible is the opposite of the stated aim.\n\n$x_a$ is not required to exactly equal the machine epsilon at all times; the machine epsilon is instead an important factor in determining what counts as an acceptable $x_e$, a related but distinct role.\n\n$x_a$ is an error magnitude, not the degree $n$ of the polynomial, which is an unrelated quantity.",
  },
  {
    id: "csc308_ch3_012",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In Engineering, what makes a computed approximation $x_e$ acceptable?",
    options: [
      "That it will not compromise the usefulness of the solution",
      "That it is computed using the Regula Falsi method exclusively",
      "That it is an integer value with no fractional part",
      "That it exactly equals the initial guess supplied by the engineer",
    ],
    correctAnswer: 0,
    explanation:
      "In Engineering, an acceptable $x_e$ is that which will not compromise the usefulness of the solution, with the machine epsilon being an important factor in determining $x_e$.\n\nAcceptability is not tied to any one specific method such as Regula Falsi; multiple computational methods are discussed, and any could in principle yield an acceptable $x_e$.\n\nThere is no requirement that $x_e$ be an integer with no fractional part; non-linear equation roots are frequently non-integer values.\n\nAn acceptable $x_e$ is not required to exactly equal the initial guess; the initial guess is merely a starting point that the iterative process refines away from.",
  },
  {
    id: "csc308_ch3_013",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "How many approaches are given for obtaining the root of a non-linear equation?",
    options: ["One (1)", "Two (2)", "Three (3)", "Four (4)"],
    correctAnswer: 1,
    explanation:
      "There are Two (2) approaches to obtaining the root of a non-linear equation: the Analytical approach and the Computational approach.\n\nOne (1) undercounts the approaches; both Analytical and Computational are given as distinct approaches.\n\nThree (3) overcounts the approaches given; only Analytical and Computational are named as approaches (though the Computational approach is further split into two types of methods).\n\nFour (4) also overcounts; four is instead closer to the number of technique types or specific methods discussed, not the number of top-level approaches.",
  },
  {
    id: "csc308_ch3_014",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Analytical approach to solving a non-linear equation uses which kind of process?",
    options: [
      "Direct Algebraic manipulation of the equation, using an Algorithm and inductive process",
      "An Iterative and Inductive process starting with an initial guess",
      "A purely graphical process with no manipulation of the equation",
      "A heuristic and default process requiring infinite instances",
    ],
    correctAnswer: 0,
    explanation:
      "The Analytical approach uses direct Algebraic manipulation of the equation to obtain its solution; the equation is manipulated using an Algorithm and inductive process, and this approach is applicable when the function can be factorised.\n\nAn Iterative and Inductive process starting with an initial guess instead describes the Computational approach, not the Analytical one.\n\nThe Analytical approach involves direct manipulation of the equation itself, not a purely graphical process with no manipulation.\n\nA heuristic and default process requiring infinite instances is not how either approach in this material is described.",
  },
  {
    id: "csc308_ch3_015",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Analytical approach to solving a non-linear equation is applicable under which condition?",
    options: [
      "When the function can be factorised",
      "When the function has degree greater than 4",
      "Only when a digital computer is unavailable",
      "Only when the initial guess is exactly Zero",
    ],
    correctAnswer: 0,
    explanation:
      "The Analytical approach is applicable when the function can be factorised.\n\nDegree greater than 4 is instead a caution mentioned in the context of high-degree polynomial instability, not the condition for the Analytical approach's applicability.\n\nAvailability of a digital computer is not the stated condition for using the Analytical approach; factorisability of the function is.\n\nThe Analytical approach does not require an initial guess at all, since it uses direct algebraic manipulation rather than iteration, so an initial guess of Zero is not its applicability condition.",
  },
  {
    id: "csc308_ch3_016",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For the quadratic equation $ax^2 + bx + c = 0.0$, which formula is given as an example of the Analytical approach?",
    options: [
      "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
      "$x = \\frac{a + b}{2.0}$",
      "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$",
      "$x = g(x)$",
    ],
    correctAnswer: 0,
    explanation:
      "The Almighty formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, for $ax^2 + bx + c = 0.0$, is given as an example of the Analytical technique.\n\n$x = \\frac{a+b}{2.0}$ is instead the midpoint formula used in the Bisection method, a Computational technique, not an Analytical one.\n\n$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ is the Newton-Raphson formula, a Computational technique, not the quadratic Almighty formula.\n\n$x = g(x)$ is the Fixed-Point iteration form, a Computational technique, not the Analytical quadratic formula.",
  },
  {
    id: "csc308_ch3_017",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Factorisation technique for solving $x^2 + bx + c = 0.0$, what are the two numbers sought used for?",
    options: [
      "They are the roots, found such that they multiply to give $b$ and add to give $c$",
      "They are used only to compute the machine epsilon",
      "They are the roots, found such that they multiply to give $c$ and add to give $b$",
      "They are substituted directly into the Bisection midpoint formula",
    ],
    correctAnswer: 2,
    explanation:
      "In Factorisation, two numbers are sought which, when multiplied, give $c$, and when added, give $b$; these numbers are the roots.\n\nSwapping the roles of $b$ and $c$ reverses the actual factorisation condition; it is multiplication that gives $c$ and addition that gives $b$, not the other way around.\n\nThe machine epsilon is a floating-point precision concept, unrelated to the two numbers sought in Factorisation.\n\nThe Bisection midpoint formula belongs to a separate, Computational technique, not the Analytical Factorisation technique.",
  },
  {
    id: "csc308_ch3_018",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the three example techniques of the Analytical approach?",
    options: [
      "Completing the square",
      "The bisection or half-interval method",
      "The Regula Falsi method",
      "Fixed-Point iteration",
    ],
    correctAnswer: 0,
    explanation:
      "Completing the square is listed as one of the three example techniques of the Analytical approach, alongside the Almighty formula and Factorisation.\n\nThe bisection or half-interval method is instead a Computational, Two Initial Points technique, not an Analytical one.\n\nThe Regula Falsi method is also a Computational, Two Initial Points technique, not an Analytical one.\n\nFixed-Point iteration is a Computational, Single Initial Point technique, not an Analytical one.",
  },
  {
    id: "csc308_ch3_019",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Computational approach to solving a non-linear equation begins with which of the following?",
    options: [
      "Some initial guess",
      "A fully factorised form of the equation",
      "A completed-square form of the equation",
      "The final root value $x_r$ itself",
    ],
    correctAnswer: 0,
    explanation:
      "In the Computational approach, an Iterative and Inductive process is used to obtain a solution, and such technique starts with some initial guess, applying a simple and stepwise process repeatedly, moving closer, until the desired root is obtained.\n\nA fully factorised form of the equation is instead the Analytical Factorisation technique's requirement, not how the Computational approach begins.\n\nA completed-square form is also an Analytical technique's requirement, not the Computational approach's starting point.\n\nThe final root value $x_r$ is what the Computational approach seeks to find, not what it begins with; beginning with the answer itself would make the process unnecessary.",
  },
  {
    id: "csc308_ch3_020",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Computational methods for solving non-linear equations are grouped into which two types?",
    options: [
      "Two Initial Points (or Interval), and Single Initial Point",
      "Analytical, and Computational",
      "Convergent, and Divergent",
      "Regular, and Context-neutral",
    ],
    correctAnswer: 0,
    explanation:
      "Computational methods are grouped into Two (2) types: Two Initial Points (or Interval) methods, and Single Initial Point methods.\n\nAnalytical and Computational are the two top-level approaches to solving a non-linear equation, not the two types within the Computational approach specifically.\n\nConvergent and Divergent describe behaviours an iteration process may exhibit, not the two named types of Computational method.\n\nRegular and Context-neutral are language-instrument terms from an earlier note, unrelated to the classification of Computational methods here.",
  },
  {
    id: "csc308_ch3_021",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following methods is classified under the Two Initial Points (or Interval) type?",
    options: [
      "The Secant method",
      "The Newton-Raphson method",
      "The Fixed Point Iteration method",
      "Completing the square",
    ],
    correctAnswer: 0,
    explanation:
      "The Secant method is listed under the Two Initial Points (or Interval) type, alongside Bisection, Regula Falsi, and Modified Regula Falsi.\n\nThe Newton-Raphson method is instead classified under the Single Initial Point type, not Two Initial Points.\n\nFixed Point Iteration is also classified under the Single Initial Point type, not Two Initial Points.\n\nCompleting the square is an Analytical technique, not one of the Computational Two Initial Points methods.",
  },
  {
    id: "csc308_ch3_022",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following methods is classified under the Single Initial Point type?",
    options: [
      "Newton-Raphson (Gradient)",
      "Bisection (Half interval)",
      "Modified Regula Falsi",
      "The Secant method",
    ],
    correctAnswer: 0,
    explanation:
      "Newton-Raphson (Gradient) is listed under the Single Initial Point type, alongside Fixed Point Iteration.\n\nBisection (Half interval) is instead classified under the Two Initial Points type, not Single Initial Point.\n\nModified Regula Falsi is also classified under the Two Initial Points type, not Single Initial Point.\n\nThe Secant method is likewise classified under the Two Initial Points type, not Single Initial Point.",
  },
  {
    id: "csc308_ch3_023",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "If the successive computation of $x_{a_i}$ approaches $x_r$, what is the iteration process said to be doing?",
    options: [
      "Diverging from the root",
      "Oscillating about the root",
      "Remaining stationary",
      "Converging to the root",
    ],
    correctAnswer: 3,
    explanation:
      "If the successive computation of $x_{a_i}$ approaches $x_r$, the process is said to be converging to the root.\n\nDiverging describes the opposite behaviour, where the computation moves away from the root, not toward it.\n\nOscillating describes the process moving about, probably around a root, without reaching it, not a steady approach toward $x_r$.\n\nRemaining stationary describes the process staying at its initial position, not progressively approaching $x_r$.",
  },
  {
    id: "csc308_ch3_024",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "If $x_i, x_{i+1}, x_{i+2}$ are the values computed for three successive iterations, which inequality indicates that the process is converging?",
    options: [
      "$|x_i - x_{i+1}| > |x_{i+1} - x_{i+2}|$",
      "$|x_i - x_{i+1}| < |x_{i+1} - x_{i+2}|$",
      "$|x_i - x_{i+1}| = |x_{i+1} - x_{i+2}|$ at every step, with neither ever changing",
      "$x_i \\times x_{i+1} \\times x_{i+2} = 0.0$",
    ],
    correctAnswer: 0,
    explanation:
      "A way to know that a process is converging to the root is that the error will be getting smaller as the computation progresses, that is, $|x_i - x_{i+1}| > |x_{i+1} - x_{i+2}|$.\n\n$|x_i - x_{i+1}| < |x_{i+1} - x_{i+2}|$ is instead the inequality that indicates diverging, where subsequent computations incur greater absolute errors than preceding ones, the opposite of converging.\n\nAn equality holding unchanged at every step does not indicate the shrinking error characteristic of convergence; convergence requires the gap to keep getting smaller.\n\nThe product of three successive iterates equalling zero is not the criterion used to recognise convergence in this material.",
  },
  {
    id: "csc308_ch3_025",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "If a process has converged to a root at the iterative computation $x_j$, what is true of the subsequent computed values?",
    options: [
      "$x_j = x_{j+1} = \\ldots = x_n$",
      "$x_j < x_{j+1} < \\ldots < x_n$, strictly increasing forever",
      "$x_j, x_{j+1}, \\ldots, x_n$ alternate in sign indefinitely",
      "$x_{j+1}$ is undefined once convergence occurs",
    ],
    correctAnswer: 0,
    explanation:
      "If the process has converged to a root at $x_j$, then $x_j = x_{j+1} = \\ldots = x_n$; successive computation from iterative step $j$ onward yields the same results, and the process is said to have converged to the root at the $j$th iterative step.\n\nA strictly increasing sequence forever is inconsistent with convergence, which instead settles to a constant, unchanging value once the root is reached.\n\nIndefinite sign alternation describes oscillation, not the settled, unchanging behaviour of a converged process.\n\n$x_{j+1}$ remains defined and simply equals $x_j$ once convergence occurs; convergence does not make later iterates undefined.",
  },
  {
    id: "csc308_ch3_026",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "When an iteration process diverges from the root, what happens to subsequent computations of $x_a$?",
    options: [
      "They incur greater absolute errors than the preceding ones",
      "They incur smaller absolute errors than the preceding ones",
      "They remain fixed at the initial guess indefinitely",
      "They alternate around the root without ever moving further away",
    ],
    correctAnswer: 0,
    explanation:
      "When diverging, the iteration process goes away from the root being computed in a run-away manner, so subsequent computations of $x_a$ incur greater absolute errors than the preceding ones, that is $|x_i - x_{i+1}| < |x_{i+1} - x_{i+2}|$.\n\nIncurring smaller absolute errors than preceding computations instead describes converging, not diverging.\n\nRemaining fixed at the initial guess indefinitely describes the Stationary behaviour, not Divergence.\n\nAlternating around the root without moving further away describes Oscillation, not the run-away Divergence behaviour.",
  },
  {
    id: "csc308_ch3_027",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What does 'Convergence to a wrong root' describe as an iteration behaviour?",
    options: [
      "The process is actually converging, but not to the intended root",
      "The process moves away from every root in a run-away manner",
      "The process moves about, probably around a root, but never reaches it",
      "The process remains fixed at the initial guess with no progression",
    ],
    correctAnswer: 0,
    explanation:
      "Convergence to a wrong root describes the case where the process is actually converging, but not to the intended root.\n\nMoving away from every root in a run-away manner instead describes Divergence, not convergence to a wrong root.\n\nMoving about, probably around a root, but never reaches it describes Oscillation, not convergence to a wrong root.\n\nRemaining fixed at the initial guess with no progression describes the Stationary behaviour, not convergence to a wrong root.",
  },
  {
    id: "csc308_ch3_028",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which iteration behaviour is described as the process 'moving about, probably around a root, but not reaching the root'?",
    options: [
      "Oscillation",
      "Divergence",
      "Convergence to a wrong root",
      "Stationary behaviour",
    ],
    correctAnswer: 0,
    explanation:
      "Oscillation is described as the process moving about, probably around a root, but not reaching the root.\n\nDivergence instead describes the process going away from the root in a run-away manner, not moving about a root.\n\nConvergence to a wrong root describes actually reaching a root, just not the intended one, unlike Oscillation, which never reaches a root at all.\n\nStationary behaviour describes the process remaining in its initial position, not moving about a root.",
  },
  {
    id: "csc308_ch3_029",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the Stationary iteration behaviour, and under what circumstance can it occur?",
    options: [
      "The process remains in its initial position, which can occur when the initial guess is actually the root",
      "The process oscillates forever, which can occur when the initial guess is far from the root",
      "The process diverges permanently, which can occur only when the function is Linear",
      "The process converges instantly, which can occur only for degree-zero polynomials",
    ],
    correctAnswer: 0,
    explanation:
      "In the Stationary behaviour, the process remains in its initial position; the value does not progress away from the initial guess given, and this situation can occur when the initial value suggested is actually the root of the equation.\n\nOscillating forever describes Oscillation, a distinct behaviour, not Stationary, and is not the circumstance described for Stationary behaviour.\n\nPermanent divergence describes Divergence, a distinct behaviour, and this material does not restrict any of the four behaviours to Linear functions specifically, since the whole chapter concerns Non-linear equations.\n\nInstant convergence is not how Stationary behaviour is described, and the material does not restrict Stationary behaviour to degree-zero polynomials.",
  },
  {
    id: "csc308_ch3_030",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Besides normal convergence, how many other kinds of iteration behaviour are listed for computational techniques?",
    options: ["Two (2)", "Four (4)", "Three (3)", "Five (5)"],
    correctAnswer: 1,
    explanation:
      "Four (4) other behaviours are listed besides normal convergence: Diverge from the root, Convergence to a wrong root, Oscillation, and Stationary.\n\nTwo (2) undercounts the listed behaviours; four distinct 'other' behaviours are named.\n\nThree (3) also undercounts; one of the four named behaviours would be missing.\n\nFive (5) overcounts the other behaviours; only four are named beyond normal convergence.",
  },
  {
    id: "csc308_ch3_031",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Under what circumstances may an iteration process show behaviours other than normal convergence?",
    options: [
      "When the initial guess is not properly selected, or the function is ill-defined or unstable",
      "Only when the function is Linear rather than Non-linear",
      "Only when the machine epsilon is set to exactly Zero",
      "Only when the Analytical, not Computational, approach is used",
    ],
    correctAnswer: 0,
    explanation:
      "Particularly when the initial guess is not properly selected, or when the function is ill-defined or unstable, the iteration process may show behaviours other than normal convergence.\n\nThe material's entire focus is Non-linear equations; abnormal behaviours are not restricted to a hypothetical Linear case.\n\nThe machine epsilon being exactly Zero is not the stated circumstance under which abnormal iteration behaviours occur.\n\nThe Analytical approach does not iterate at all, so abnormal iteration behaviours, which are specific to the Computational approach, cannot be conditioned on using the Analytical approach.",
  },
  {
    id: "csc308_ch3_032",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "A converging iteration process satisfies $|x_i - x_{i+1}| > |x_{i+1} - x_{i+2}|$.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: a way to know that a process is converging to the root is that the error is getting smaller as the computation progresses, that is $|x_i - x_{i+1}| > |x_{i+1} - x_{i+2}|$; the reverse inequality instead describes a diverging process.",
  },
  {
    id: "csc308_ch3_033",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "A diverging iteration process moves toward the root in a run-away manner, with each computation getting closer to $x_r$.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: a diverging process moves AWAY from the root in a run-away manner, with subsequent computations incurring greater absolute errors than preceding ones, the opposite of getting closer to $x_r$.",
  },
  {
    id: "csc308_ch3_034",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Oscillation and Stationary behaviour both involve the iteration process never moving at all from its initial guess.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: only Stationary behaviour involves the process remaining fixed at its initial position; Oscillation instead involves the process moving about, probably around a root, without reaching it, which is movement, just not convergent movement.",
  },
  {
    id: "csc308_ch3_035",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Convergence to a wrong root means the iteration process fails to converge to any root at all.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: convergence to a wrong root means the process IS actually converging, and does reach a root, just not the intended one; failing to reach any root at all instead describes Divergence or Oscillation.",
  },
  {
    id: "csc308_ch3_036",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "A student runs an iterative method and observes that the value stays fixed at the initial guess with no progression whatsoever across iterations. Which behaviour does this most likely indicate, and why?",
    options: [
      "Divergence, since a fixed value always indicates the process is running away from the root",
      "Oscillation, since a fixed value indicates the process is circling the root repeatedly",
      "Stationary behaviour, since the initial value supplied may actually already be the root of the equation",
      "Convergence to a wrong root, since any unchanging value must be a root, correct or not",
    ],
    correctAnswer: 2,
    explanation:
      "A value that stays fixed at the initial guess with no progression matches the Stationary behaviour, which can occur when the initial value suggested is actually the root of the equation.\n\nDivergence is characterised by the value moving away in a run-away manner, not by staying fixed; a fixed value does not indicate divergence.\n\nOscillation is characterised by the value moving about a root, not by remaining completely fixed with no movement at all.\n\nAn unchanging value only indicates a root if it satisfies $f(x) = 0.0$; the Stationary case specifically arises because the initial guess already IS the root, not because any unchanging value is automatically a root.",
  },
  {
    id: "csc308_ch3_037",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Given a function $f(x)$ continuous on the interval $[a, b]$, which precondition on $f(a)$ and $f(b)$ guarantees a root lies between $a$ and $b$?",
    options: [
      "$f(a)f(b) \\leq 0.0$",
      "$f(a)f(b) \\geq 0.0$",
      "$f(a) = f(b)$ exactly",
      "$f(a) + f(b) = 0.0$",
    ],
    correctAnswer: 0,
    explanation:
      "Given a function $f(x)$ continuous on $[a, b]$ such that $f(a)f(b) \\leq 0.0$, a root of $f(x)$ lies between $a$ and $b$.\n\n$f(a)f(b) \\geq 0.0$ does not guarantee a sign change across the interval, and is in fact the condition under which the bisection pseudocode reports 'No Root in This Interval'.\n\n$f(a) = f(b)$ exactly does not by itself indicate a sign change between the endpoints, which is what the bisection precondition requires.\n\n$f(a) + f(b) = 0.0$ is a sum condition, not the product-sign condition that the bisection method's precondition actually relies on.",
  },
  {
    id: "csc308_ch3_038",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Bisection method, at each step of the process, where is the root assumed to be?",
    options: [
      "At the centre of $[a, b]$, that is $m = (a+b)/2.0$",
      "At the point $a$ itself, unchanged throughout",
      "At the point $b$ itself, unchanged throughout",
      "At a randomly selected point within $[a, b]$",
    ],
    correctAnswer: 0,
    explanation:
      "At each step of the Bisection process, the root is assumed to be at the centre of $[a, b]$, that is, $m = (a+b)/2.0$.\n\nAssuming the root is fixed at $a$ itself, unchanged, would make the iterative process pointless, since $a$ and $b$ are updated across steps, not the assumed root location.\n\nAssuming the root is fixed at $b$ itself is likewise inconsistent with the method's iterative midpoint-based search.\n\nThe Bisection method computes a deterministic centre point $m$, not a randomly selected point, at each step.",
  },
  {
    id: "csc308_ch3_039",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Bisection method, if $f(a)$ and $f(m)$ have different signs, where does the root lie?",
    options: [
      "Between $m$ and $b$",
      "Exactly at $b$",
      "Nowhere in $[a, b]$",
      "Between $a$ and $m$",
    ],
    correctAnswer: 3,
    explanation:
      "If the values obtained by evaluating the function at $a$ and $m$ have different signs, then there is a root between $a$ and $m$.\n\nBetween $m$ and $b$ is instead where the root is assumed to lie when $f(a)$ and $f(m)$ do NOT have different signs.\n\n$f(a)$ and $f(m)$ having different signs says nothing about $b$ specifically containing the root exactly.\n\nA sign change between $f(a)$ and $f(m)$ indicates a root IS present in $[a, m]$, not that no root exists in $[a, b]$ at all.",
  },
  {
    id: "csc308_ch3_040",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Bisection method, if $f(a)$ and $f(m)$ do NOT have different signs, where is the root instead assumed to lie?",
    options: [
      "Between the interval $[m, b]$",
      "Between the interval $[a, m]$",
      "At the point $a$ exactly",
      "Outside the original interval $[a, b]$ entirely",
    ],
    correctAnswer: 0,
    explanation:
      "If $f(a)$ and $f(m)$ do not have different signs, the root is instead between the interval $[m, b]$.\n\n$[a, m]$ is instead where the root lies when $f(a)$ and $f(m)$ DO have different signs, the opposite case.\n\nThe method does not conclude the root is exactly at $a$ simply because $f(a)$ and $f(m)$ share a sign; it narrows the search to $[m, b]$ instead.\n\nThe Bisection method's core assumption is that the root remains within the original interval throughout, narrowing $[a,b]$ down rather than concluding the root lies outside it.",
  },
  {
    id: "csc308_ch3_041",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "At the point of convergence of the Bisection method, what is true of $m$?",
    options: [
      "$f(m) = 0.0$, and $m$ is taken to be a root of $f(x)$",
      "$f(m) = 1.0$, and $m$ is discarded as invalid",
      "$m$ equals the original point $a$ exactly, regardless of $f$",
      "$f(m)$ is undefined at convergence",
    ],
    correctAnswer: 0,
    explanation:
      "At the point of convergence, $f(m) = 0.0$, and $m$ is then taken to be a root of $f(x)$.\n\n$f(m) = 1.0$ does not describe convergence; convergence is specifically characterised by $f(m)$ reaching Zero, not One.\n\n$m$ is computed as the evolving midpoint of a shrinking interval, not fixed at the original $a$ regardless of the function.\n\n$f(m)$ remains a well-defined, computable value at convergence; it is precisely its value, Zero, that signals convergence, not undefinedness.",
  },
  {
    id: "csc308_ch3_042",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Bisection algorithm's pseudocode, if the initial check $R = F(a) \\times F(b)$ evaluates to $R > 0.0$, what does the program do?",
    options: [
      "Writes 'No Root in This Interval' and terminates that path",
      "Immediately writes the root and terminates successfully",
      "Sets $b = m$ and proceeds to the next iteration as normal",
      "Sets $a = m$ and proceeds to the next iteration as normal",
    ],
    correctAnswer: 0,
    explanation:
      "In the pseudocode, $R$ is first computed as $F(a) \\times F(b)$; if $R > 0.0$, the program writes 'No Root in This Interval' and proceeds to END, rather than continuing the iteration.\n\nThe program does not write the root at this initial check; $R > 0.0$ specifically signals the absence of a guaranteed sign change, not success.\n\nSetting $b = m$ is instead what happens inside the iterative loop when $R = F(a) \\times F(m) < 0.0$, a separate, later check from the initial guard clause.\n\nSetting $a = m$ is likewise a step from inside the iterative loop, not the response to the initial $R > 0.0$ guard-clause check.",
  },
  {
    id: "csc308_ch3_043",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Inside the Bisection algorithm's iterative loop, after computing $m$ and $R = F(a) \\times F(m)$, what happens if $R < 0.0$?",
    options: [
      "$b$ is set to $m$",
      "$a$ is set to $m$",
      "The program immediately terminates with an error",
      "Both $a$ and $b$ remain unchanged for the next iteration",
    ],
    correctAnswer: 0,
    explanation:
      "Inside the loop, if $R = F(a) \\times F(m) < 0.0$, then $b$ is set to $m$, narrowing the search interval to $[a, m]$.\n\n$a$ is set to $m$ instead in the ELSE branch, when $R$ is NOT less than $0.0$, the opposite condition.\n\nThe program does not terminate with an error when $R < 0.0$; this is the normal narrowing step of a successful iteration, not a failure condition.\n\nLeaving both $a$ and $b$ unchanged would prevent the interval from ever narrowing, which contradicts the algorithm's iterative design; exactly one of $a$ or $b$ is updated to $m$ each pass.",
  },
  {
    id: "csc308_ch3_044",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a strength of the Bisection method?",
    options: [
      "It is easy to understand, as the computation process underlying it is intuitive",
      "It converges faster than any other method discussed in this material",
      "It requires only a single initial point to begin",
      "It automatically avoids all problems with multiple roots in an interval",
    ],
    correctAnswer: 0,
    explanation:
      "One strength of the Bisection method is that it is easy to understand, as the computation process underlying it is intuitive.\n\nThe Bisection method is explicitly noted to converge slowly (linearly); faster convergence is instead a strength claimed for the Single Initial Point methods, particularly Newton-Raphson.\n\nThe Bisection method is a Two Initial Points method, requiring at least two points, not a single initial point, to begin.\n\nThe Bisection method may encounter serious problems if there is more than one root in the initial interval selected; this is listed as a weakness, not something it automatically avoids.",
  },
  {
    id: "csc308_ch3_045",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a strength of the Bisection method regarding its implementation?",
    options: [
      "It is easy to implement, since the algorithm is straightforward",
      "It requires extensive manipulation of the function, such as finding its derivative",
      "It is the only method that can be implemented without a computer",
      "It guarantees convergence within exactly two iterations",
    ],
    correctAnswer: 0,
    explanation:
      "A strength of the Bisection method is that it is easy to implement, since the algorithm is straightforward.\n\nThe Bisection method does NOT involve further manipulation of the function, such as finding its derivative; this absence of derivative manipulation is itself listed as a strength, the opposite of this option's claim.\n\nThe material does not describe the Bisection method as uniquely implementable without a computer; all the computational methods discussed are intended for computer implementation.\n\nThe Bisection method converges slowly and is not guaranteed to finish within exactly two iterations; the number of iterations needed depends on the desired precision.",
  },
  {
    id: "csc308_ch3_046",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "If a root exists in a given interval, what strength does the Bisection method have regarding finding it?",
    options: [
      "It has a better chance of finding it, compared to methods that may fail to locate a root that exists",
      "It is mathematically guaranteed to find every root in the interval simultaneously",
      "It can only find the root if the function is a polynomial of degree less than 2",
      "It requires the function's second derivative to locate the root",
    ],
    correctAnswer: 0,
    explanation:
      "If there is a root in an interval, the Bisection method has a better chance of finding it, one of its stated strengths.\n\nThe Bisection method locates one root per run of the algorithm as described, not a simultaneous guarantee of finding every root at once, especially given its stated weakness with multiple roots in one interval.\n\nThe Bisection method is applicable to non-linear functions generally, not restricted to polynomials of degree less than 2; the whole chapter concerns Non-linear ($n>1$) equations.\n\nThe Bisection method does not involve derivatives at all, let alone a second derivative; this is one of its defining strengths relative to derivative-based methods.",
  },
  {
    id: "csc308_ch3_047",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Why is not needing to find the function's derivative listed as a strength of the Bisection method?",
    options: [
      "Because the method does not involve further manipulation of the function, such as finding its derivatives",
      "Because derivatives are mathematically undefined for all non-linear functions",
      "Because the Bisection method instead requires the function's second derivative, a simpler computation",
      "Because finding a derivative would make the method converge instantly",
    ],
    correctAnswer: 0,
    explanation:
      "The Bisection method does not involve further manipulation of the function, such as finding its derivatives, unlike methods such as Newton-Raphson.\n\nDerivatives are well defined for many non-linear functions and are in fact used directly by the Newton-Raphson method discussed later; they are not undefined for non-linear functions in general.\n\nThe Bisection method requires no derivative at all, first or second, not a simpler second-derivative requirement.\n\nAvoiding derivative computation relates to implementation simplicity, not to instant convergence; the Bisection method is in fact noted to converge slowly.",
  },
  {
    id: "csc308_ch3_048",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a weakness of the Bisection method regarding its speed?",
    options: [
      "It converges slowly (converges linearly), taking a longer time to execute when implemented on a computer",
      "It converges too quickly, making the results unreliable",
      "Its speed is identical to the Newton-Raphson method in every case",
      "Its speed cannot be affected by how the initial interval is chosen",
    ],
    correctAnswer: 0,
    explanation:
      "A weakness of the Bisection method is that it converges slowly (converges linearly), hence its computation takes a longer time to execute when implemented on a computer.\n\nConverging too quickly is not a weakness attributed to the Bisection method; slow, linear convergence is the actual concern raised.\n\nThe Bisection method's linear convergence is explicitly contrasted with the faster, quadratic convergence of Single Initial Point methods like Newton-Raphson, so their speeds are not described as identical.\n\nThe material does not claim the Bisection method's speed is unaffected by interval choice; a poorly or well selected interval still governs how many halvings are needed.",
  },
  {
    id: "csc308_ch3_049",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a weakness of the Bisection method regarding its starting requirements?",
    options: [
      "At least two points within which the interval lies must be provided before the process can begin",
      "It requires exactly one initial point, unlike any other method",
      "It requires the function's derivative to be supplied before starting",
      "It requires the root to already be known before starting",
    ],
    correctAnswer: 0,
    explanation:
      "A weakness of the Bisection method is that at least two points within which the interval lies must be provided before the process can begin.\n\nRequiring exactly one initial point instead describes the Single Initial Point methods, not the two-point Bisection method.\n\nThe Bisection method does not use derivatives at all, so a derivative is not among its starting requirements.\n\nRequiring the root to already be known before starting would make the method pointless; the method's actual starting requirement is two points bounding an assumed root, not the root itself.",
  },
  {
    id: "csc308_ch3_050",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a weakness of the Bisection method regarding multiple roots?",
    options: [
      "It may encounter serious problems if there is more than one root in the initial interval selected",
      "It is completely unaffected by how many roots lie within the initial interval",
      "It can only be used when there are no roots at all in the interval",
      "It automatically returns all roots present in the interval in a single run",
    ],
    correctAnswer: 0,
    explanation:
      "A weakness of the Bisection method is that it may encounter serious problems if there is more than one root in the initial interval selected.\n\nThe method is explicitly noted to have problems with multiple roots, so it is not unaffected by how many roots lie within the interval.\n\nThe Bisection method is applied specifically when a root is believed to exist, per the $f(a)f(b) \\leq 0.0$ precondition, not restricted to intervals with no roots.\n\nThe method as described locates one root per run and can have problems when several are present, not automatically return all of them in a single run.",
  },
  {
    id: "csc308_ch3_051",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Bisection method relies only on evaluating $f(x)$ itself, without computing any derivative.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: the Bisection method does not involve further manipulation of the function, such as finding its derivatives; it relies only on evaluating $f(x)$ itself at $a$, $b$, and $m$, unlike derivative-based methods such as Newton-Raphson.",
  },
  {
    id: "csc308_ch3_052",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Given $f(x)$ continuous on $[a, b]$ with $f(a) < 0.0$ and $f(b) > 0.0$, and a computed midpoint $m$ with $f(m) > 0.0$, the Bisection method next narrows the interval to which sub-interval?",
    options: [
      "$[a, m]$, since $f(a)$ and $f(m)$ have different signs",
      "$[m, b]$, since $f(a)$ and $f(m)$ have different signs",
      "$[a, m]$, since $f(a)$ and $f(m)$ have the same sign",
      "The interval cannot be narrowed further without additional information",
    ],
    correctAnswer: 0,
    explanation:
      "With $f(a) < 0.0$ (negative) and $f(m) > 0.0$ (positive), $f(a)$ and $f(m)$ have different signs, so the root lies between $a$ and $m$, and the interval narrows to $[a, m]$.\n\n$[m, b]$ would instead be the correct narrowing if $f(a)$ and $f(m)$ shared the same sign, which is not the case here.\n\n$f(a)$ and $f(m)$ do NOT have the same sign in this scenario, since one is negative and the other positive, so this reasoning is incorrect even though it names the correct sub-interval.\n\nThe sign comparison of $f(a)$ and $f(m)$ is precisely the information the Bisection method uses to narrow the interval, so the interval can indeed be narrowed with the information given.",
  },
  {
    id: "csc308_ch3_053",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Regula Falsi method was developed to address which weakness of the Bisection method?",
    options: [
      "Its slow rate of convergence",
      "Its requirement for a continuous function",
      "Its inability to handle any Non-linear equation",
      "Its need for the function's second derivative",
    ],
    correctAnswer: 0,
    explanation:
      "To address the first weakness of the Bisection method, its slow, linear convergence, the method for computing the next value can be improved, giving rise to the Regula Falsi method, which increases the rate of convergence.\n\nBoth Bisection and Regula Falsi still require $f(x)$ to be continuous on the interval; this requirement is not what Regula Falsi was developed to remove.\n\nBisection is applicable to Non-linear equations generally; inability to handle them at all is not the weakness Regula Falsi addresses.\n\nNeither Bisection nor Regula Falsi uses any derivative; a second-derivative requirement is not a Bisection weakness that Regula Falsi was developed to fix.",
  },
  {
    id: "csc308_ch3_054",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Regula Falsi method computes its new estimate of the root using which idea, instead of the plain midpoint of $[a, b]$?",
    options: [
      "A random point selected uniformly within $[a, b]$",
      "A weighted average, assuming the function is linear locally",
      "The exact same midpoint formula used in Bisection, unchanged",
      "The second derivative of the function evaluated at $a$",
    ],
    correctAnswer: 1,
    explanation:
      "The Regula Falsi method uses the idea that it often makes sense to assume the function being evaluated is linear locally; therefore, instead of using the midpoint of $[a, b]$, a weighted average is used to compute the new estimate of the root.\n\nThe new estimate is deterministically computed from $a$, $b$, $f(a)$, and $f(b)$ via a formula, not randomly selected.\n\nRegula Falsi specifically replaces the plain midpoint formula used in Bisection with a weighted-average formula; it does not reuse the unchanged midpoint formula.\n\nRegula Falsi, like Bisection, uses no derivative of any order; it relies only on function values at the interval endpoints.",
  },
  {
    id: "csc308_ch3_055",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Regula Falsi method, the computation of the midpoint $m$ is replaced by the computation of which quantity?",
    options: [
      "$w$",
      "$m$ itself, unchanged",
      "$x_r$ directly",
      "The machine epsilon",
    ],
    correctAnswer: 0,
    explanation:
      "In the Regula Falsi method, the computation of $m$ is replaced by the computation of $w$.\n\n$m$ itself remains the Bisection method's quantity; Regula Falsi specifically substitutes a different quantity, $w$, in its place.\n\n$w$ is a new estimate of the root, refined iteratively; it is not $x_r$, the true root, computed directly in one step.\n\nThe machine epsilon is a separate floating-point precision concept, not the quantity that replaces $m$ in Regula Falsi.",
  },
  {
    id: "csc308_ch3_056",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which formula correctly gives $w$ in the Regula Falsi method?",
    options: [
      "$w = \\frac{f(b) \\times a - f(a) \\times b}{f(b) - f(a)}$",
      "$w = \\frac{f(a) \\times b - f(b) \\times a}{f(a) - f(b)}$, using $a$ and $b$ reversed in both numerator and denominator terms",
      "$w = \\frac{a + b}{2.0}$",
      "$w = \\frac{f(a) + f(b)}{2.0}$",
    ],
    correctAnswer: 0,
    explanation:
      "The Regula Falsi formula is $w = \\frac{f(b) \\times a - f(a) \\times b}{f(b) - f(a)}$.\n\nSwapping $a$ and $b$ throughout, as well as $f(a)$ and $f(b)$, changes the sign of both numerator and denominator in a way that does not correctly preserve the formula's original structure.\n\n$w = \\frac{a+b}{2.0}$ is instead the Bisection midpoint formula, not the Regula Falsi weighted-average formula.\n\n$w = \\frac{f(a)+f(b)}{2.0}$ averages the function values themselves, not the endpoints weighted by function value, and does not match the actual Regula Falsi formula.",
  },
  {
    id: "csc308_ch3_057",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Regula Falsi formula for $w$, what is the denominator?",
    options: [
      "$f(b) - f(a)$",
      "$b - a$",
      "$f(a) - f(b)$, with the numerator left as originally stated",
      "$2.0$",
    ],
    correctAnswer: 0,
    explanation:
      "The denominator of the Regula Falsi formula is $f(b) - f(a)$, giving $w = \\frac{f(b) \\times a - f(a) \\times b}{f(b) - f(a)}$.\n\n$b - a$ is the width of the interval itself, not the denominator used in the Regula Falsi weighted-average formula.\n\nUsing $f(a) - f(b)$ as the denominator while keeping the numerator as originally stated would not match the formula actually given, since the numerator and denominator must be consistently ordered.\n\n$2.0$ is the constant divisor used in the Bisection midpoint formula, not in the Regula Falsi formula for $w$.",
  },
  {
    id: "csc308_ch3_058",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the major weakness of the Regula Falsi method?",
    options: [
      "It has a high tendency of converging to the wrong root",
      "It cannot be applied to any continuous function",
      "It requires more initial points than the Bisection method",
      "It always converges more slowly than the Bisection method",
    ],
    correctAnswer: 0,
    explanation:
      "A major weakness of the Regula Falsi method is that it has a high tendency of converging to the wrong root.\n\nRegula Falsi, like Bisection, is applied to functions continuous on the interval of interest; this is not the weakness singled out for it.\n\nRegula Falsi is, like Bisection, a Two Initial Points method, requiring the same two points $a$ and $b$, not more.\n\nRegula Falsi was specifically developed to increase the rate of convergence over Bisection, so it is not described as always converging more slowly.",
  },
  {
    id: "csc308_ch3_059",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What development was motivated by the weaknesses of the Regula Falsi method and other Two Initial Point limitations?",
    options: [
      "The Single Initial Point methods were found to be useful",
      "The Analytical approach was found to be useful",
      "The use of Zero as an admissible regular term",
      "The abandonment of all computational methods entirely",
    ],
    correctAnswer: 0,
    explanation:
      "To address the Regula Falsi method's high tendency of converging to the wrong root, and other limitations of the Two Initial Point methods, the Single Initial Point methods have been found to be useful.\n\nThe Analytical approach is a separate, pre-existing approach discussed earlier, not something newly motivated by Regula Falsi's specific weaknesses.\n\nZero's admissibility as a regular term is a concept from an earlier, unrelated note on numbering schemes, not a response to Regula Falsi's weaknesses.\n\nComputational methods were not abandoned; rather, a different sub-type, Single Initial Point methods, was adopted to address the specific weaknesses of the Two Initial Point methods.",
  },
  {
    id: "csc308_ch3_060",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is true of both the Bisection and Regula Falsi methods?",
    options: [
      "Both are Two Initial Points methods that require an interval $[a, b]$ believed to contain the root",
      "Both compute the new estimate using the plain midpoint formula $m = (a+b)/2.0$",
      "Both require the function's derivative to be computed at every step",
      "Both are Single Initial Point methods requiring only one starting value",
    ],
    correctAnswer: 0,
    explanation:
      "Both Bisection and Regula Falsi are Two Initial Points methods that require an interval $[a, b]$ believed to contain the root, differing only in how the new estimate within that interval is computed.\n\nOnly Bisection uses the plain midpoint formula; Regula Falsi instead replaces it with the weighted-average formula for $w$.\n\nNeither method uses any derivative; both rely only on evaluating $f(x)$ at the interval's endpoints and the current estimate.\n\nBoth methods require two initial points, $a$ and $b$; Single Initial Point status instead describes Newton-Raphson and Fixed-Point iteration.",
  },
  {
    id: "csc308_ch3_061",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Regula Falsi method replaces the Bisection method's plain midpoint with a weighted average because it assumes the function is linear locally.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: the Regula Falsi method uses the idea that it often makes sense to assume the function being evaluated is linear locally, and therefore uses a weighted average, $w$, instead of the plain midpoint used in Bisection.",
  },
  {
    id: "csc308_ch3_062",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Regula Falsi method is guaranteed to never converge to an incorrect root under any circumstance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: a major weakness of the Regula Falsi method is that it has a high tendency of converging to the wrong root, the opposite of a guarantee against ever doing so.",
  },
  {
    id: "csc308_ch3_063",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "How many initial points does a Single Initial Point method require?",
    options: [
      "Only one",
      "Exactly two",
      "Exactly three",
      "It varies method by method, with no fixed count",
    ],
    correctAnswer: 0,
    explanation:
      "Single Initial Point methods require the selection of only one initial point, say $x_0$, from which successive values $x_i$ at points $i > 0$ are then computed.\n\nExactly two initial points instead describes the Two Initial Points (or Interval) methods, such as Bisection and Regula Falsi, not Single Initial Point methods.\n\nExactly three initial points is not the requirement of any method discussed in this material.\n\nSingle Initial Point methods are specifically named for their shared property of requiring just one starting value, not a varying count.",
  },
  {
    id: "csc308_ch3_064",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Compared to the Two Initial Points methods, what is the convergence rate of Single Initial Point methods?",
    options: [
      "Faster, converging quadratically",
      "Slower, converging linearly",
      "Identical in every case",
      "Undefined, since convergence rate cannot be compared across method types",
    ],
    correctAnswer: 0,
    explanation:
      "One advantage of Single Initial Point methods is that the convergence rate is faster, converging quadratically.\n\nConverging slowly, linearly, is instead the weakness attributed to the Bisection method, a Two Initial Points method, not to Single Initial Point methods.\n\nThe two types are explicitly contrasted on convergence speed, quadratic versus linear, so their rates are not described as identical.\n\nConvergence rate is precisely one of the properties compared between the two method types in this material, so it is not undefined or incomparable.",
  },
  {
    id: "csc308_ch3_065",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as an advantage of Single Initial Point methods regarding computer resources?",
    options: [
      "They utilise less computer memory",
      "They utilise more computer memory than Two Initial Points methods",
      "They require no computer memory whatsoever",
      "Their memory usage is unrelated to which method type is chosen",
    ],
    correctAnswer: 0,
    explanation:
      "One advantage of Single Initial Point methods is that they utilise less computer memory.\n\nUtilising MORE computer memory is the opposite of the stated advantage; Single Initial Point methods are described as using less, not more.\n\nComputational methods still require some computer memory to execute; 'no memory whatsoever' is not how this advantage is described.\n\nMemory usage is explicitly one of the four listed reasons Single Initial Point methods are more frequently used, so it is not described as unrelated to the choice of method type.",
  },
  {
    id: "csc308_ch3_066",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Which of the following is listed as a reason Single Initial Point methods are more frequently used in engineering problems?",
    options: [
      "The techniques are easy to implement",
      "They are the only methods capable of solving Non-linear equations",
      "They never require an initial guess of any kind",
      "They eliminate the need for a continuous function entirely",
    ],
    correctAnswer: 0,
    explanation:
      "Among the four reasons given for the more frequent engineering use of Single Initial Point methods is that the techniques are easy to implement, alongside requiring only one initial point, faster convergence, and less memory use.\n\nTwo Initial Points methods, such as Bisection and Regula Falsi, are also capable of solving Non-linear equations, so Single Initial Point methods are not the only capable methods.\n\nSingle Initial Point methods still require an initial guess, $x_0$, just only one of them, not none at all.\n\nContinuity of the function remains relevant across the computational methods discussed; it is not a requirement that Single Initial Point methods eliminate.",
  },
  {
    id: "csc308_ch3_067",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "How many advantages of Single Initial Point methods, over the Two Initial Points methods, are given?",
    options: ["Two (2)", "Three (3)", "Four (4)", "Six (6)"],
    correctAnswer: 2,
    explanation:
      "Four (4) advantages are listed: only one initial point is required, the convergence rate is faster (quadratic), less computer memory is utilised, and the techniques are easy to implement.\n\nTwo (2) undercounts the listed advantages; four distinct reasons are given.\n\nThree (3) also undercounts; one of the four named advantages would be missing.\n\nSix (6) overcounts the advantages; only four are named in this material.",
  },
  {
    id: "csc308_ch3_068",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Single Initial Point methods converge quadratically, while the Bisection method converges linearly.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: Single Initial Point methods converge quadratically (faster), while the Bisection method, a Two Initial Points method, converges linearly (slower).",
  },
  {
    id: "csc308_ch3_069",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "A single initial point, such as $x_0$, is required to begin a Newton-Raphson or Fixed-Point iteration, with successive values $x_i$ at $i > 0$ then computed by the chosen technique.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: Single Initial Point methods, including Newton-Raphson and Fixed-Point iteration, require the selection of an initial point such as $x_0$, with the successive values of $x_i$ at points $i > 0$ then computed using the selected technique.",
  },
  {
    id: "csc308_ch3_070",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Newton-Raphson method moves closer to the root by exploiting information about which property of the function?",
    options: [
      "Its gradient",
      "Its degree $n$ only",
      "Its constant term $a_0$ only",
      "Its interval midpoint",
    ],
    correctAnswer: 0,
    explanation:
      "The Newton-Raphson method exploits information about the gradient of the function, whose root is being computed, to move closer to the root.\n\nThe method uses the function's derivative at each point, not merely its degree $n$, to compute successive estimates.\n\nThe constant term $a_0$ alone does not capture the gradient information Newton-Raphson relies on at each iterate.\n\nAn interval midpoint is a Two Initial Points concept, from Bisection; Newton-Raphson is a Single Initial Point method and does not use an interval midpoint.",
  },
  {
    id: "csc308_ch3_071",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For the Newton-Raphson method to be applicable, what property must $f(x)$ have?",
    options: [
      "It must be continuously differentiable",
      "It must be a polynomial of degree exactly 2",
      "It must have no real roots at all",
      "It must be evaluated only at $x = 0.0$",
    ],
    correctAnswer: 0,
    explanation:
      "If $f(x)$ is continuously differentiable and given an initial guess $x_n$, it is possible to obtain an approximate root to $f(x)$ iteratively using Newton-Raphson.\n\nNewton-Raphson is applicable to non-linear functions generally, not restricted to polynomials of exactly degree 2.\n\nNewton-Raphson is used specifically to find a root, so it is applied to functions that DO have a root of interest, not ones with no real roots at all.\n\nThe method evaluates $f(x)$ and $f'(x)$ at the current iterate $x_n$, which changes at each step, not fixed permanently at $x = 0.0$.",
  },
  {
    id: "csc308_ch3_072",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The tangent of the angle at point $x_1$ in the Newton-Raphson derivation is equivalent to which quantity?",
    options: [
      "The first derivative of the equation $f(x)$, that is $f'(x)$, or the slope of $f(x)$ at $x_1$",
      "The value of $f(x)$ at $x_1$ itself, with no reference to any derivative",
      "The interval width $b - a$",
      "The machine epsilon at $x_1$",
    ],
    correctAnswer: 0,
    explanation:
      "The tangent of the angle at point $x_1$ is equivalent to the first derivative of the equation $f(x)$, that is $f'(x)$, or the slope of the function $f(x)$, at $x_1$.\n\nThe plain value $f(x_1)$ is used together with the derivative in the Newton-Raphson formula, but the tangent itself is equated to the derivative (slope), not to $f(x_1)$ alone.\n\nThe interval width $b - a$ is a Two Initial Points concept; Newton-Raphson's tangent relationship instead concerns the derivative at a single point.\n\nThe machine epsilon is a separate floating-point precision concept, unrelated to what the tangent at $x_1$ is equivalent to.",
  },
  {
    id: "csc308_ch3_073",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Using the general algebra formula $\\text{Tangent} = \\frac{\\text{Opposite}}{\\text{Adjacent}}$, the Newton-Raphson derivation expresses $f'(x_1)$ as which ratio?",
    options: [
      "$f'(x_1) = \\frac{f(x_0)}{x_0 - x_1}$",
      "$f'(x_1) = \\frac{x_0 - x_1}{f(x_0)}$",
      "$f'(x_1) = \\frac{f(x_1)}{x_1 - x_0}$",
      "$f'(x_1) = f(x_0) \\times (x_0 - x_1)$",
    ],
    correctAnswer: 0,
    explanation:
      "Using the Tangent = Opposite/Adjacent formula, the derivation determines $f'(x_1) = \\frac{f(x_0)}{x_0 - x_1}$.\n\nInverting the fraction, placing $x_0 - x_1$ over $f(x_0)$, does not match the ratio actually derived for $f'(x_1)$.\n\nUsing $f(x_1)$ and $x_1 - x_0$ swaps in the wrong point's function value and reverses the subtraction order used in the actual derivation.\n\nMultiplying $f(x_0)$ by $(x_0 - x_1)$, rather than dividing, does not match the Tangent = Opposite/Adjacent ratio structure the derivation is built on.",
  },
  {
    id: "csc308_ch3_074",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Rearranging the tangent relationship to make $x_1$ the subject gives which expression?",
    options: [
      "$x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$",
      "$x_1 = x_0 + \\frac{f(x_0)}{f'(x_0)}$",
      "$x_1 = f(x_0) - \\frac{x_0}{f'(x_0)}$",
      "$x_1 = x_0 - f(x_0) \\times f'(x_0)$",
    ],
    correctAnswer: 0,
    explanation:
      "Rearranging the terms by making $x_1$ the subject of the equation gives $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$.\n\nAdding instead of subtracting the fraction reverses the direction of the correction step and does not match the derived formula.\n\nSwapping $f(x_0)$ and $x_0$ in the expression does not match the actual rearrangement, which keeps $x_0$ as the base term being corrected.\n\nMultiplying $f(x_0)$ and $f'(x_0)$, rather than dividing one by the other, does not match the derived correction term.",
  },
  {
    id: "csc308_ch3_075",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the general iterative formula of the Newton-Raphson method, for successive values $x_{n+1}$?",
    options: [
      "$x_{n+1} = x_n + \\frac{f(x_n)}{f'(x_n)}$",
      "$x_{n+1} = \\frac{x_n}{f'(x_n)} - f(x_n)$",
      "$x_{n+1} = g(x_n)$",
      "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$",
    ],
    correctAnswer: 3,
    explanation:
      "The general formula for the Newton-Raphson process is $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$.\n\nAdding, rather than subtracting, the correction term reverses the direction of the Newton-Raphson update and does not match the actual formula.\n\nRearranging the terms into $\\frac{x_n}{f'(x_n)} - f(x_n)$ does not match the structure of the actual Newton-Raphson formula.\n\n$x_{n+1} = g(x_n)$ is instead the Fixed-Point iteration formula, not the derivative-based Newton-Raphson formula.",
  },
  {
    id: "csc308_ch3_076",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Newton-Raphson formula, what does $f'(x_n)$ represent?",
    options: [
      "The first derivative of $f(x)$, that is $\\frac{df(x)}{dx}$, at the point $x = x_n$",
      "The second derivative of $f(x)$ at the point $x = x_n$",
      "The value of $f(x)$ itself at the point $x = x_n$",
      "The weighted average used in the Regula Falsi method",
    ],
    correctAnswer: 0,
    explanation:
      "$f'(x_n)$ is the first derivative of $f(x)$, that is $\\frac{df(x)}{dx}$, at the point $x = x_n$.\n\nThe second derivative is a distinct, higher-order quantity that Newton-Raphson as described here does not use; only the first derivative appears in its formula.\n\n$f(x_n)$ itself, without the prime, is the plain function value at $x_n$, a separate quantity from its derivative $f'(x_n)$.\n\nThe weighted average is the Regula Falsi quantity $w$, an entirely different formula from the Newton-Raphson derivative term $f'(x_n)$.",
  },
  {
    id: "csc308_ch3_077",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "If $n = 0$ and $x_0$ is given, substituting $n = 0$ into the general Newton-Raphson formula gives which expression for $x_1$?",
    options: [
      "$x_1 = x_0 - \\frac{f(x_1)}{f'(x_1)}$",
      "$x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$",
      "$x_1 = x_0 - \\frac{f'(x_0)}{f(x_0)}$",
      "$x_1 = x_1 - \\frac{f(x_0)}{f'(x_0)}$",
    ],
    correctAnswer: 1,
    explanation:
      "If $n = 0$, substituting into $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ gives $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}$.\n\nUsing $f(x_1)$ and $f'(x_1)$ instead of $f(x_0)$ and $f'(x_0)$ incorrectly evaluates the function and derivative at the value being solved for, rather than at the known starting point $x_0$.\n\nInverting the fraction to $\\frac{f'(x_0)}{f(x_0)}$ does not match the correctly substituted formula.\n\nWriting $x_1$ on both sides of the equation does not match the substitution, which produces $x_0$, the known starting value, on the right-hand side.",
  },
  {
    id: "csc308_ch3_078",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Newton-Raphson pseudocode, the update step is written as xi+1 = xi - (f(xi)/(fprime(xi)). What must be supplied, alongside $f(x)$, for this pseudocode to run?",
    options: [
      "A function fprime(x), the derivative of $f(x)$",
      "A second function g(x), unrelated to $f(x)$",
      "A pre-computed table of every root of $f(x)$",
      "The weighted-average formula from Regula Falsi",
    ],
    correctAnswer: 0,
    explanation:
      "The Newton-Raphson pseudocode explicitly declares a function fprime(x), the derivative of $f(x)$, alongside f(x) itself, since the update step xi+1 = xi - (f(xi)/(fprime(xi)) requires both.\n\nA separate function g(x) is instead declared in the Fixed-Point pseudocode, not the Newton-Raphson pseudocode, which uses fprime(x) instead.\n\nThe pseudocode computes the root iteratively; it does not require a pre-computed table of every root supplied in advance, since finding the root is the point of running it.\n\nThe Regula Falsi weighted-average formula belongs to a separate, Two Initial Points method; the Newton-Raphson pseudocode instead relies on f(x) and fprime(x).",
  },
  {
    id: "csc308_ch3_079",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "How many major weaknesses of the Newton-Raphson method are given?",
    options: ["One (1)", "Three (3)", "Two (2)", "Four (4)"],
    correctAnswer: 2,
    explanation:
      "There are two major weaknesses of the Newton-Raphson method listed: it can only be applied to continuously differentiable functions, and its iteration process is susceptible to serious instability.\n\nOne (1) undercounts the weaknesses; two distinct weaknesses are named.\n\nThree (3) overcounts; the instability weakness has three named sub-problems (oscillation, divergence, wrong root), but these fall under a single second weakness, not three separate top-level weaknesses.\n\nFour (4) also overcounts the top-level weaknesses listed.",
  },
  {
    id: "csc308_ch3_080",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the first listed weakness of the Newton-Raphson method?",
    options: [
      "It can only be applied to functions that are continuously differentiable in the interval within which the root is being sought",
      "It requires two initial points instead of one",
      "It always converges more slowly than the Bisection method",
      "It cannot be implemented using a computer program",
    ],
    correctAnswer: 0,
    explanation:
      "The first weakness of the Newton-Raphson method is that it can only be applied to functions that are continuously differentiable in the interval within which the root is being sought.\n\nNewton-Raphson is a Single Initial Point method, requiring only one initial point, not two; this is not among its weaknesses.\n\nNewton-Raphson is described as converging quadratically, faster than Bisection's linear convergence, not always more slowly.\n\nTable 3.3 gives explicit pseudocode for implementing Newton-Raphson as a computer program, so implementability is not among its listed weaknesses.",
  },
  {
    id: "csc308_ch3_081",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The second weakness of the Newton-Raphson method is that its iteration process is susceptible to serious instability. Which three problems are named as rampant under this weakness?",
    options: [
      "Stationary behaviour, Slow linear convergence, and Multiple roots",
      "Underflow, Overflow, and Rounding error only",
      "Missing initial guess, Missing derivative, and Missing interval",
      "Oscillation, Divergence, and Convergence to the wrong root",
    ],
    correctAnswer: 3,
    explanation:
      "Newton-Raphson's iteration process is susceptible to serious instability, with the problems of Oscillation, Divergence, and Convergence to the wrong root named as rampant.\n\nStationary behaviour and slow linear convergence are discussed elsewhere (Stationary as a general iteration behaviour, slow convergence as a Bisection weakness), and multiple roots is a Bisection weakness, not the three problems named for Newton-Raphson's instability specifically.\n\nUnderflow, overflow, and rounding error are floating-point precision concerns from an earlier note, not the three named instability problems here.\n\nNewton-Raphson does require an initial guess, a derivative, and no interval at all (being a Single Initial Point method); these are not the three instability problems named.",
  },
  {
    id: "csc308_ch3_082",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Newton-Raphson method requires $f(x)$ to be continuously differentiable in the interval within which the root is being sought.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true: the Newton-Raphson method can only be applied to functions that are continuously differentiable in the interval within which the root is being sought; supplying an initial guess $x_0$ alone does not remove this requirement.",
  },
  {
    id: "csc308_ch3_083",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Newton-Raphson's faster, quadratic convergence rate means its iteration process is never susceptible to oscillation, divergence, or converging to the wrong root.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: despite its faster, quadratic convergence rate, Newton-Raphson's iteration process is explicitly described as susceptible to serious instability, with oscillation, divergence, and convergence to the wrong root all named as rampant problems; faster convergence does not immunise the method against these issues.",
  },
  {
    id: "csc308_ch3_084",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Given $f(x) = x^2 - 2.0$, so that $f'(x) = 2x$, and an initial guess $x_0 = 1.0$, what is $x_1$ under the Newton-Raphson formula?",
    options: ["$0.5$", "$1.5$", "$2.0$", "$1.0$"],
    correctAnswer: 1,
    explanation:
      "$x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)} = 1.0 - \\frac{(1.0^2 - 2.0)}{2 \\times 1.0} = 1.0 - \\frac{-1.0}{2.0} = 1.0 + 0.5 = 1.5$.\n\n$0.5$ would result from subtracting rather than correctly adding the negative correction term, mishandling the sign of $f(x_0) = -1.0$.\n\n$2.0$ does not match the correctly computed value and does not follow from applying the formula to these inputs.\n\n$1.0$ would mean no update occurred at all, which does not match the non-zero correction term $\\frac{f(x_0)}{f'(x_0)} = -0.5$ produced by these inputs.",
  },
  {
    id: "csc308_ch3_085",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Given $f(x) = x^3 - 2.0$, so that $f'(x) = 3x^2$, and an initial guess $x_0 = 1.0$, what is $x_1$ under the Newton-Raphson formula?",
    options: [
      "Approximately $1.333$",
      "Approximately $0.667$",
      "Exactly $2.0$",
      "Exactly $1.0$, unchanged from $x_0$",
    ],
    correctAnswer: 0,
    explanation:
      "$x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)} = 1.0 - \\frac{(1.0^3 - 2.0)}{3 \\times 1.0^2} = 1.0 - \\frac{-1.0}{3.0} = 1.0 + 0.333\\ldots \\approx 1.333$.\n\nApproximately $0.667$ would result from subtracting the correction term with the wrong sign, rather than correctly accounting for $f(x_0) = -1.0$ being negative.\n\nExactly $2.0$ does not match the correctly computed value from applying the formula to these inputs.\n\nExactly $1.0$ would mean no correction was applied at all, which does not match the non-zero correction term of approximately $0.333$ produced by these inputs.",
  },
  {
    id: "csc308_ch3_086",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Fixed-Point iteration process is primarily meant to address which weakness of the Newton-Raphson method?",
    options: [
      "The second weakness, its susceptibility to serious instability",
      "The first weakness, its requirement for continuous differentiability",
      "Both weaknesses of Newton-Raphson equally, with no priority given to either",
      "A weakness of the Bisection method, not of Newton-Raphson",
    ],
    correctAnswer: 0,
    explanation:
      "The Fixed-Point iteration process is primarily meant to address the second weakness of the Newton-Raphson method, its susceptibility to serious instability (oscillation, divergence, and convergence to the wrong root).\n\nThe first weakness, requiring continuous differentiability, is not the one Fixed-Point iteration is described as primarily addressing.\n\nThe material specifically singles out the second weakness as the primary target, not an equal address of both weaknesses.\n\nThe Fixed-Point method is introduced directly after, and in relation to, Newton-Raphson's own weaknesses, not as a response to a Bisection weakness.",
  },
  {
    id: "csc308_ch3_087",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Given a non-linear function $f(x) = 0.0$, the Fixed-Point method expresses $f(x)$ in which form?",
    options: ["$x = f'(x)$", "$x = \\frac{a+b}{2.0}$", "$x = g(x)$", "$x = w$"],
    correctAnswer: 2,
    explanation:
      "Given a non-linear function $f(x) = 0.0$, it is possible to express $f(x)$ in the form $x = g(x)$.\n\n$x = f'(x)$ incorrectly substitutes the derivative of $f$ for the newly introduced iteration function $g(x)$.\n\n$x = \\frac{a+b}{2.0}$ is instead the Bisection midpoint formula, an entirely different, Two Initial Points concept.\n\n$x = w$ refers to the Regula Falsi weighted-average quantity, not the Fixed-Point form of $f(x)$.",
  },
  {
    id: "csc308_ch3_088",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Fixed-Point form $x = g(x)$, what is $g(x)$ called?",
    options: [
      "The absolute error",
      "The machine epsilon",
      "The weighted average",
      "An iteration function",
    ],
    correctAnswer: 3,
    explanation:
      "The function $g(x)$ is called an iteration function.\n\nThe absolute error is instead the quantity $x_a$ from $|x_r - x_e| = x_a$, a separate concept from the iteration function $g(x)$.\n\nThe machine epsilon is a floating-point precision quantity, not the name given to $g(x)$.\n\nThe weighted average is the Regula Falsi quantity $w$, not the Fixed-Point iteration function $g(x)$.",
  },
  {
    id: "csc308_ch3_089",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In expressing $f(x) = 0.0$ as $x = g(x)$, what is said to be made the subject of the function, in place of $0.0$?",
    options: ["$x$", "$g(x)$ itself", "The machine epsilon", "The degree $n$"],
    correctAnswer: 0,
    explanation:
      "In this case, $x$ is said to be made the subject of the function $f(x)$ instead of $0.0$.\n\n$g(x)$ is the newly introduced iteration function that results from this rearrangement, not itself the quantity being made the subject.\n\nThe machine epsilon is unrelated to which variable is made the subject of the rearranged equation.\n\nThe degree $n$ is a separate property of the original polynomial, not the quantity made the subject in the Fixed-Point rearrangement.",
  },
  {
    id: "csc308_ch3_090",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For a function to converge to a root under Fixed-Point iteration, two conditions on $g(x)$ must be satisfied. What is the first condition?",
    options: [
      "The first derivative of $g(x)$, that is $g'(x)$, must be computable",
      "The second derivative of $g(x)$ must equal exactly Zero",
      "$g(x)$ must be a polynomial of degree exactly 1",
      "$g(x)$ must equal $f(x)$ exactly at every point",
    ],
    correctAnswer: 0,
    explanation:
      "The first condition is that the first derivative of $g(x)$, that is $g'(x)$, must be computable.\n\nA requirement on the second derivative equalling exactly Zero is not one of the two stated convergence conditions for Fixed-Point iteration.\n\n$g(x)$ is not required to be a degree-1 polynomial specifically; the condition concerns the computability and magnitude of its derivative, not its polynomial degree.\n\n$g(x)$ is a rearranged form derived from $f(x)$, related to it algebraically, but the convergence condition does not require them to be identical at every point.",
  },
  {
    id: "csc308_ch3_091",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the second condition, on the magnitude of $g'(x)$ at the initial point, for Fixed-Point iteration to converge to a root?",
    options: [
      "The absolute value of $g'(x)$ must be greater than or equal to $1.0$",
      "The absolute value of $g'(x)$ must be less than or equal to $1.0$",
      "$g'(x)$ must be exactly equal to $0.0$",
      "$g'(x)$ must be exactly equal to $2.0$",
    ],
    correctAnswer: 1,
    explanation:
      "The second condition is that the absolute value of $g'(x)$, that is $|g'(x)|$, at the initial point must be less than or equal to $1.0$; the farther this value is from $1.0$, the better.\n\nRequiring $|g'(x)|$ to be greater than or equal to $1.0$ is the reverse of the actual condition, which requires it to be less than or equal to $1.0$.\n\nRequiring $g'(x)$ to be exactly $0.0$ is stricter than, and not the same as, the stated condition of being less than or equal to $1.0$ in absolute value.\n\nRequiring $g'(x)$ to be exactly $2.0$ would violate, not satisfy, the stated condition, since $2.0$ exceeds $1.0$.",
  },
  {
    id: "csc308_ch3_092",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Regarding the second convergence condition, $|g'(x_k)| \\leq 1.0$ at the initial point, how is the quality of convergence described as this value moves relative to $1.0$?",
    options: [
      "The farther this value is from $1.0$, the better",
      "The closer this value is to $1.0$, the better",
      "The value's distance from $1.0$ has no effect on convergence quality",
      "Convergence quality depends only on the value being negative",
    ],
    correctAnswer: 0,
    explanation:
      "The farther the value of $|g'(x_k)|$ is from $1.0$ (while still satisfying $|g'(x_k)| \\leq 1.0$), the better the convergence.\n\nThe material states the opposite of being closer to $1.0$ being better; farther from $1.0$ is described as better, not closer.\n\nThe material explicitly ties convergence quality to this value's distance from $1.0$, so it is not described as having no effect.\n\nThe condition concerns the absolute value $|g'(x_k)|$, and its distance from $1.0$, not the raw sign of $g'(x_k)$.",
  },
  {
    id: "csc308_ch3_093",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the general iterative formula of the Fixed-Point method, for successive values $x_{n+1}$?",
    options: [
      "$x_{n+1} = g(x_n)$",
      "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$",
      "$x_{n+1} = \\frac{a+b}{2.0}$",
      "$x_{n+1} = \\frac{f(b) \\times a - f(a) \\times b}{f(b) - f(a)}$",
    ],
    correctAnswer: 0,
    explanation:
      "Given an iteration function $g(x)$ satisfying the convergence conditions and an initial value $x_0$, the subsequent approximate values are computed as $x_{n+1} = g(x_n)$.\n\n$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ is instead the Newton-Raphson formula, not the Fixed-Point formula.\n\n$x_{n+1} = \\frac{a+b}{2.0}$ is the Bisection midpoint formula, unrelated to the Fixed-Point iteration function $g$.\n\n$x_{n+1} = \\frac{f(b) \\times a - f(a) \\times b}{f(b)-f(a)}$ is the Regula Falsi formula for $w$, not the Fixed-Point formula.",
  },
  {
    id: "csc308_ch3_094",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the Fixed-Point pseudocode, the update step is written as xi+1 = g(xi). Alongside READ x0, n, what function must be declared for this pseudocode to run, in place of fprime(x) from the Newton-Raphson pseudocode?",
    options: [
      "A function g(x)",
      "A second function fprime(x), identical to Newton-Raphson's",
      "A function m(x), returning the interval midpoint",
      "A function w(x), returning the Regula Falsi weighted average",
    ],
    correctAnswer: 0,
    explanation:
      "The Fixed-Point pseudocode declares a function g(x), used directly in the update step xi+1 = g(xi), in place of the fprime(x) declared in the Newton-Raphson pseudocode.\n\nThe Fixed-Point method does not use fprime(x) in its update step at all; that derivative function is specific to the Newton-Raphson pseudocode, not the Fixed-Point one.\n\nA midpoint function m(x) belongs to the Bisection method's logic, not the Fixed-Point pseudocode, which uses g(x).\n\nA function returning the Regula Falsi weighted average belongs to that separate, Two Initial Points method, not the Fixed-Point pseudocode.",
  },
  {
    id: "csc308_ch3_095",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the stated limitation of the Fixed-Point iteration method?",
    options: [
      "It will fail in situations where $g'(x)$ cannot be computed or estimated accurately",
      "It will fail whenever the initial guess $x_0$ is a positive number",
      "It requires two initial points, unlike Newton-Raphson",
      "It cannot be represented using any pseudocode",
    ],
    correctAnswer: 0,
    explanation:
      "The Fixed-Point iteration method will fail in situations where $g'(x)$ cannot be computed or estimated accurately.\n\nThe sign of the initial guess $x_0$, whether positive or negative, is not the stated cause of failure for this method.\n\nFixed-Point iteration, like Newton-Raphson, is a Single Initial Point method, requiring one initial point, not two.\n\nTable 3.4 gives explicit pseudocode for the Fixed-Point method, so representability in pseudocode is not among its limitations.",
  },
  {
    id: "csc308_ch3_096",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Mathematically, the iteration function $g(x)$ can be obtained by constructing a linear function $y = mx + c$ with which properties?",
    options: [
      "Gradient $m = 1.0$, intercepting $f(x)$ at a point such as $0.0$, running through the origin",
      "Gradient $m = 0.0$, never intersecting $f(x)$ at any point",
      "Gradient $m = -1.0$, intercepting $f(x)$ only at its maximum value",
      "Gradient equal to the machine epsilon, intercepting $f(x)$ at $x_r$ only",
    ],
    correctAnswer: 0,
    explanation:
      "$g(x)$ can be obtained by constructing a linear function $y = mx + c$ of gradient $m = 1.0$ that intercepts $f(x)$ at a point, say $0.0$, running through the origin of the $xy$ plane; since the linear function is of gradient $1$ and the intercept is $0.0$, $x$ meets $f(x)$ at one of its roots.\n\nA gradient of $0.0$ that never intersects $f(x)$ would not produce a usable iteration function, and contradicts the construction, which specifically does intercept $f(x)$.\n\nA gradient of $-1.0$ intercepting only at the maximum value does not match the stated construction, which uses gradient $1.0$ and an intercept at $0.0$.\n\nThe gradient used is a fixed value of $1.0$, not the machine epsilon, and the construction's intercept is described at $0.0$, not restricted to intercepting exactly at $x_r$.",
  },
  {
    id: "csc308_ch3_097",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "The Fixed-Point method requires computing the first derivative of $f(x)$ directly, exactly as Newton-Raphson does.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: the Fixed-Point method requires the derivative $g'(x)$ of the iteration function $g(x)$, obtained after rewriting $f(x) = 0.0$ as $x = g(x)$, to check the convergence conditions, not a direct derivative of $f(x)$ itself as Newton-Raphson uses.",
  },
  {
    id: "csc308_ch3_098",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "If $|g'(x)| > 1.0$ at the initial point, the Fixed-Point convergence conditions are satisfied.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: the second convergence condition explicitly requires $|g'(x)| \\leq 1.0$ at the initial point; a value greater than $1.0$ violates, rather than satisfies, this condition.",
  },
  {
    id: "csc308_ch3_099",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Given the iteration function $g(x) = \\cos(x)$ and an initial value $x_0 = 0.0$, what is $x_1$ under the Fixed-Point formula $x_{n+1} = g(x_n)$?",
    options: [
      "$1.0$",
      "$0.0$",
      "$-1.0$",
      "Undefined, since $\\cos(0.0)$ cannot be computed",
    ],
    correctAnswer: 0,
    explanation:
      "$x_1 = g(x_0) = \\cos(0.0) = 1.0$, applying the Fixed-Point formula directly with the given $g(x)$ and $x_0$.\n\n$0.0$ would only result if $x_1$ were left unchanged from $x_0$, which does not match the formula's substitution.\n\n$-1.0$ does not match $\\cos(0.0)$, which evaluates to $1.0$, not $-1.0$.\n\n$\\cos(0.0)$ is a perfectly well-defined, computable value equal to $1.0$; it is not undefined.",
  },
  {
    id: "csc308_ch3_100",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Why does the exclusive use of a single method make it impractical for Engineering problem-solving?",
    options: [
      "Because each approach to the solution of a Non-linear model has one or more shortcomings",
      "Because only one computational method has ever been formally described",
      "Because Engineering problems never require any numerical computation at all",
      "Because non-linear equations always have exactly one solution method available",
    ],
    correctAnswer: 0,
    explanation:
      "It is clear that each of the approaches to the solution of a Non-linear model has one or more shortcomings, making the exclusive use of a method impractical for Engineering problem-solving.\n\nSeveral computational methods (Bisection, Regula Falsi, Newton-Raphson, Fixed-Point, and others) are described, not just one.\n\nEngineering and Scientific problems are precisely the motivating context for the numerical computation techniques discussed throughout this material.\n\nMultiple solution methods, with differing strengths and weaknesses, are available for non-linear equations; this variety is exactly why relying on only one is impractical.",
  },
  {
    id: "csc308_ch3_101",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "In the practical Engineering problem-solving strategy, what is the first recommended step?",
    options: [
      "Plot graphs for the data recorded, to have a more informed guess at the possible location of the roots",
      "Immediately apply the Newton-Raphson method without any prior analysis",
      "Immediately apply the Bisection method without any prior analysis",
      "Skip straight to monitoring convergence and error",
    ],
    correctAnswer: 0,
    explanation:
      "The first step of the practical strategy is to plot graphs for the data recorded, so as to have a more informed guess at the possible location of the roots of the system.\n\nApplying Newton-Raphson immediately, without first plotting and gaining an informed guess, skips the recommended first step.\n\nApplying Bisection immediately, without first plotting, likewise skips the recommended first step, even though a two-point method does come next in the strategy.\n\nMonitoring convergence and error is the strategy's last step, not its first; it presumes a method has already been applied.",
  },
  {
    id: "csc308_ch3_102",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "After plotting graphs, which kind of method does the practical strategy recommend using to compute the first few approximations to the root?",
    options: [
      "A two-point (interval) method",
      "A single-point iteration method",
      "The Analytical Factorisation technique exclusively",
      "No method at all; graphing alone is considered sufficient",
    ],
    correctAnswer: 0,
    explanation:
      "The second step of the strategy is to use one of the two-point (interval) methods to compute the first few approximations to the root.\n\nA single-point iteration method is instead recommended as the third step, applied afterward, not immediately after plotting.\n\nFactorisation is an Analytical technique requiring the function to be factorisable; the practical strategy's second step specifically recommends a Computational two-point method instead.\n\nThe strategy explicitly recommends applying a numerical method after graphing, so graphing alone is not considered sufficient.",
  },
  {
    id: "csc308_ch3_103",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Based on the numerical data obtained from a two-point method, what does the practical strategy recommend applying next, and why?",
    options: [
      "A single-point iteration method, for faster computation",
      "A second, different two-point method, for additional confirmation only",
      "The quadratic Almighty formula, regardless of whether the function can be factorised",
      "Nothing further; the two-point method's result is treated as final",
    ],
    correctAnswer: 0,
    explanation:
      "Based on the numerical data obtained from the two-point method, the third step is to apply a single-point iteration method, for faster computation.\n\nThe strategy recommends moving to a single-point method for speed, not simply repeating with a second two-point method for confirmation alone.\n\nThe Almighty formula requires the function to be factorisable; the practical strategy's third step is not conditioned on, or restricted to, that Analytical technique.\n\nThe strategy explicitly continues past the two-point method's result with a faster single-point method, so the two-point result is not treated as the final step.",
  },
  {
    id: "csc308_ch3_104",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What is the fourth and final step of the practical Engineering problem-solving strategy?",
    options: [
      "Monitor the convergence and error in the iteration process, being careful not to confuse the onset of oscillation for global convergence",
      "Discard all numerical results and rely solely on the Analytical approach",
      "Immediately publish the results without any further checking",
      "Restart the entire process from a two-point method every single time",
    ],
    correctAnswer: 0,
    explanation:
      "The fourth step is to monitor the convergence and error in the iteration process, and be careful not to confuse the onset of oscillation for global convergence.\n\nThe strategy builds on, rather than discards, the numerical results from the two-point and single-point methods already applied.\n\nMonitoring convergence and error is precisely a further checking step, the opposite of publishing results without any further checking.\n\nThe four-step strategy is described as a sequence ending in monitoring, not as a loop that restarts from the two-point method every time.",
  },
  {
    id: "csc308_ch3_105",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Why must a student be careful not to confuse the onset of oscillation for global convergence, when monitoring an iteration process?",
    options: [
      "Because oscillation is a distinct failure behaviour where the process moves about a root without reaching it, unlike genuine convergence",
      "Because oscillation and convergence are defined as exactly the same behaviour in this material",
      "Because oscillation only occurs when using the Analytical approach",
      "Because oscillation guarantees a faster, more accurate result than genuine convergence",
    ],
    correctAnswer: 0,
    explanation:
      "Oscillation is a distinct iteration behaviour where the process moves about, probably around a root, but does not reach it, unlike genuine convergence, where successive values settle to the same result; confusing the two could lead to prematurely treating an unconverged process as finished.\n\nOscillation and convergence are explicitly listed as separate, distinct behaviours, not the same behaviour under different names.\n\nOscillation is described as a behaviour of iterative, Computational methods; the Analytical approach does not iterate at all, so oscillation is not restricted to, or caused by, the Analytical approach.\n\nOscillation means the root is not actually being reached, so it does not guarantee a faster or more accurate result than genuine convergence; it is a failure mode, not an advantage.",
  },
  {
    id: "csc308_ch3_106",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "What does solving Engineering problems require, beyond simply knowing the available solution methods?",
    options: [
      "Insight that comes with experience",
      "Access to an infinitely precise machine with no epsilon at all",
      "A guarantee that every method will always converge on the first attempt",
      "Avoiding graphing the data entirely",
    ],
    correctAnswer: 0,
    explanation:
      "Solving Engineering problems requires insight that comes with experience, since every Engineering problem-solving effort has a unique context determined by the environment and/or user preferences.\n\nNo machine with infinite precision and no epsilon at all is available or assumed in this material; machine epsilon is treated as an inherent, unavoidable factor in computation.\n\nNo method is guaranteed to always converge on the first attempt; this is precisely why multiple methods, monitoring, and experience-based insight are all needed.\n\nThe practical strategy's first step explicitly recommends plotting the data, the opposite of avoiding graphing entirely.",
  },
  {
    id: "csc308_ch3_107",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "Every Engineering problem-solving effort has a context that is determined by which factors?",
    options: [
      "The environment and/or user preferences",
      "Only the degree $n$ of the polynomial involved",
      "Only whether a computer is available",
      "Only the specific programming language used",
    ],
    correctAnswer: 0,
    explanation:
      "Every Engineering problem-solving effort has a unique context determined by the environment and/or user preferences.\n\nThe polynomial's degree $n$ is one technical detail of a given problem, not, by itself, the source of a problem's unique context as described here.\n\nComputer availability is not singled out as the determining factor of a problem's unique context in this material.\n\nThe programming language used is an implementation detail, not the factor this material identifies as determining a problem's unique context.",
  },
  {
    id: "csc308_ch3_108",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - x - 1.0 = 0.0$ on $[1.0, 2.0]$, evaluating $f(1.0) = -1.0$ and $f(2.0) = 5.0$ confirms the Bisection precondition. After computing the first midpoint $m$ and finding $f(m) = 0.875$, in which sub-interval does the root lie?",
    options: [
      "$[1.0, m]$",
      "$[m, 2.0]$",
      "Exactly at $m$ itself",
      "The precondition fails, so no conclusion can be drawn",
    ],
    correctAnswer: 0,
    explanation:
      "$f(1.0) = -1.0$ is negative and $f(m) = 0.875$ is positive, so $f(1.0)$ and $f(m)$ have different signs, meaning the root lies between $1.0$ and $m$, that is, in $[1.0, m]$.\n\n$[m, 2.0]$ would instead be correct only if $f(1.0)$ and $f(m)$ shared the same sign, which is not the case here.\n\n$f(m) = 0.875 \\neq 0.0$, so $m$ itself is not yet the exact root; further iteration is still required.\n\n$f(1.0) \\times f(2.0) = -5.0 \\leq 0.0$, so the precondition is satisfied, not failed.",
  },
  {
    id: "csc308_ch3_109",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - x - 1.0 = 0.0$ on $[1.0, 2.0]$, what is the midpoint $m$ computed in the first Bisection step?",
    options: ["$0.5$", "$3.0$", "$1.5$", "$1.0$"],
    correctAnswer: 2,
    explanation:
      "$m = \\frac{a+b}{2.0} = \\frac{1.0 + 2.0}{2.0} = 1.5$.\n\n$0.5$ results from computing $\\frac{b-a}{2.0}$, the half-width of the interval, instead of the midpoint $\\frac{a+b}{2.0}$.\n\n$3.0$ results from computing $a + b$ without dividing by $2.0$.\n\n$1.0$ is simply the left endpoint $a$ itself, not the computed midpoint.",
  },
  {
    id: "csc308_ch3_110",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0x^3 + x^2 - 20.0x + 12.0 = 0.0$ on $[0.0, 1.0]$, with $f(0.0) = 12.0$ and the first midpoint $m = 0.5$ giving $f(m) = 2.5$, in which sub-interval does the Bisection method place the root next?",
    options: [
      "$[m, 1.0]$",
      "$[0.0, m]$",
      "Exactly at $m$ itself",
      "$[0.0, 1.0]$, unchanged from the original interval",
    ],
    correctAnswer: 0,
    explanation:
      "Both $f(0.0) = 12.0$ and $f(m) = 2.5$ are positive, the same sign, so the root does NOT lie in $[0.0, m]$; the Bisection method instead narrows the interval to $[m, 1.0]$.\n\n$[0.0, m]$ would be correct only if $f(0.0)$ and $f(m)$ had different signs, which is not the case here, since both are positive.\n\n$f(m) = 2.5 \\neq 0.0$, so $m$ is not yet the exact root.\n\nThe Bisection method always narrows the interval at each step when a root is present; it does not leave the interval unchanged after a successful sign test.",
  },
  {
    id: "csc308_ch3_111",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0x^3 + x^2 - 20.0x + 12.0 = 0.0$ on $[0.0, 1.0]$, what is the midpoint $m$ computed in the first Bisection step?",
    options: ["$1.0$", "$0.0$", "$2.0$", "$0.5$"],
    correctAnswer: 3,
    explanation:
      "$m = \\frac{a+b}{2.0} = \\frac{0.0 + 1.0}{2.0} = 0.5$.\n\n$1.0$ is simply the right endpoint $b$ itself, not the computed midpoint.\n\n$0.0$ is simply the left endpoint $a$ itself, not the computed midpoint.\n\n$2.0$ results from computing $a + b \\times 2.0$ or a similar miscalculation, not the correct midpoint formula.",
  },
  {
    id: "csc308_ch3_112",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0\\sin x - x = 0.0$ on $[1.0, 2.5]$, with $f(1.0) \\approx 0.6829$ and the first midpoint giving $f(m) \\approx 0.2180$, in which sub-interval does the Bisection method place the root next?",
    options: [
      "$[m, 2.5]$",
      "$[1.0, m]$",
      "Exactly at $m$ itself",
      "The root cannot lie in $[1.0, 2.5]$ at all",
    ],
    correctAnswer: 0,
    explanation:
      "Both $f(1.0) \\approx 0.6829$ and $f(m) \\approx 0.2180$ are positive, the same sign, so the root does not lie in $[1.0, m]$; the method narrows the interval to $[m, 2.5]$ instead.\n\n$[1.0, m]$ would be correct only if $f(1.0)$ and $f(m)$ had different signs, which is not the case here.\n\n$f(m) \\approx 0.2180 \\neq 0.0$, so $m$ is not yet the exact root.\n\n$f(1.0) \\times f(2.5) < 0.0$ (a positive value times a negative value), so a root is confirmed to lie somewhere in $[1.0, 2.5]$.",
  },
  {
    id: "csc308_ch3_113",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0\\sin x - x = 0.0$ on $[1.0, 2.5]$, what is the midpoint $m$ computed in the first Bisection step?",
    options: ["$1.25$", "$1.75$", "$3.5$", "$0.75$"],
    correctAnswer: 1,
    explanation:
      "$m = \\frac{a+b}{2.0} = \\frac{1.0 + 2.5}{2.0} = 1.75$.\n\n$1.25$ does not match either the correct midpoint formula or a common alternative miscalculation of these particular endpoints.\n\n$3.5$ results from computing $a + b$ without dividing by $2.0$.\n\n$0.75$ results from computing $\\frac{b-a}{2.0} = \\frac{2.5-1.0}{2.0}$, the half-width, instead of the midpoint.",
  },
  {
    id: "csc308_ch3_114",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 3.0x - (1.0 - \\sin x)^{1/2} = 0.0$ on $[0.0, 1.0]$, with $f(0.0) = -1.0$ and the first midpoint giving $f(m) \\approx 0.7785$, in which sub-interval does the Bisection method place the root next?",
    options: [
      "$[0.0, m]$",
      "$[m, 1.0]$",
      "Exactly at $m$ itself",
      "Both sub-intervals equally",
    ],
    correctAnswer: 0,
    explanation:
      "$f(0.0) = -1.0$ is negative and $f(m) \\approx 0.7785$ is positive, different signs, so the root lies between $0.0$ and $m$, that is, in $[0.0, m]$.\n\n$[m, 1.0]$ would instead be correct if $f(0.0)$ and $f(m)$ shared the same sign, which is not the case here.\n\n$f(m) \\approx 0.7785 \\neq 0.0$, so $m$ is not yet the exact root.\n\nThe Bisection method's sign test always selects exactly one of the two sub-intervals to continue with, never both equally.",
  },
  {
    id: "csc308_ch3_115",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 3.0x - (1.0 - \\sin x)^{1/2} = 0.0$ on $[0.0, 1.0]$, what is the midpoint $m$ computed in the first Bisection step?",
    options: ["$0.0$", "$1.0$", "$0.5$", "$1.5$"],
    correctAnswer: 2,
    explanation:
      "$m = \\frac{a+b}{2.0} = \\frac{0.0+1.0}{2.0} = 0.5$.\n\n$0.0$ is simply the left endpoint $a$ itself, not the computed midpoint.\n\n$1.0$ is simply the right endpoint $b$ itself, not the computed midpoint.\n\n$1.5$ does not correspond to any correct or common miscalculation of the midpoint for this particular interval.",
  },
  {
    id: "csc308_ch3_116",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = \\cos x - xe^x = 0.0$ on $[0.0, \\pi/2.0]$, with $f(0.0) = 1.0$ and the first midpoint giving $f(m) \\approx -1.0155$, in which sub-interval does the Bisection method place the root next?",
    options: [
      "$[0.0, m]$",
      "$[m, \\pi/2.0]$",
      "Exactly at $m$ itself",
      "The precondition fails, so no conclusion can be drawn",
    ],
    correctAnswer: 0,
    explanation:
      "$f(0.0) = 1.0$ is positive and $f(m) \\approx -1.0155$ is negative, different signs, so the root lies between $0.0$ and $m$, that is, in $[0.0, m]$.\n\n$[m, \\pi/2.0]$ would instead be correct if $f(0.0)$ and $f(m)$ shared the same sign, which is not the case here.\n\n$f(m) \\approx -1.0155 \\neq 0.0$, so $m$ is not yet the exact root.\n\n$f(0.0) \\times f(\\pi/2.0) < 0.0$ (a positive value times a negative value), so the precondition is satisfied, not failed.",
  },
  {
    id: "csc308_ch3_117",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = \\cos x - xe^x = 0.0$ on the interval from $a = 0.0$ to $b = 1.5708$ (that is, $\\pi/2.0$), what is the midpoint $m$ computed in the first Bisection step, to four decimal places?",
    options: ["$1.5708$", "$0.3927$", "$0.0$", "$0.7854$"],
    correctAnswer: 3,
    explanation:
      "$m = \\frac{a+b}{2.0} = \\frac{0.0 + 1.5708}{2.0} \\approx 0.7854$.\n\n$1.5708$ is simply $b$ itself, not the midpoint.\n\n$0.3927$ is half of $0.7854$, not the correctly computed midpoint itself.\n\n$0.0$ is simply the left endpoint $a$ itself, not the computed midpoint.",
  },
  {
    id: "csc308_ch3_118",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - 3.0x^2 + 4.0x - 2.0 = 0.0$ on $[0.8, 1.5]$, with $f(0.8) \\approx -0.208$ and the first midpoint giving $f(m) \\approx 0.1534$, in which sub-interval does the Bisection method place the root next?",
    options: [
      "$[0.8, m]$",
      "$[m, 1.5]$",
      "Exactly at $m$ itself",
      "Neither sub-interval contains the root",
    ],
    correctAnswer: 0,
    explanation:
      "$f(0.8) \\approx -0.208$ is negative and $f(m) \\approx 0.1534$ is positive, different signs, so the root lies between $0.8$ and $m$, that is, in $[0.8, m]$.\n\n$[m, 1.5]$ would instead be correct if $f(0.8)$ and $f(m)$ shared the same sign, which is not the case here.\n\n$f(m) \\approx 0.1534 \\neq 0.0$, so $m$ is not yet the exact root.\n\nSince $f(0.8) \\times f(1.5) \\leq 0.0$, a root is confirmed to lie somewhere within $[0.8, 1.5]$, so one of the two sub-intervals does contain it.",
  },
  {
    id: "csc308_ch3_119",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - 3.0x^2 + 4.0x - 2.0 = 0.0$ on $[0.8, 1.5]$, what is the midpoint $m$ computed in the first Bisection step?",
    options: ["$0.35$", "$1.15$", "$2.3$", "$0.7$"],
    correctAnswer: 1,
    explanation:
      "$m = \\frac{a+b}{2.0} = \\frac{0.8 + 1.5}{2.0} = 1.15$.\n\n$0.35$ results from computing $\\frac{b-a}{2.0} = \\frac{1.5-0.8}{2.0}$, the half-width, instead of the midpoint.\n\n$2.3$ results from computing $a+b$ without dividing by $2.0$.\n\n$0.7$ results from computing $b - a$, the interval width, rather than the midpoint.",
  },
  {
    id: "csc308_ch3_120",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0x^2 - x = 0.0$ on $[0.0, 0.5]$, what is the midpoint $m$ computed in the first Bisection step?",
    options: ["$0.5$", "$0.0$", "$0.25$", "$1.0$"],
    correctAnswer: 2,
    explanation:
      "$m = \\frac{a+b}{2.0} = \\frac{0.0+0.5}{2.0} = 0.25$, regardless of the fact that both $f(0.0) = 0.0$ and $f(0.5) = 0.0$ happen to be roots themselves at the endpoints in this particular row of Table 3.5.\n\n$0.5$ is simply the right endpoint $b$ itself, not the computed midpoint.\n\n$0.0$ is simply the left endpoint $a$ itself, not the computed midpoint.\n\n$1.0$ results from computing $a+b$ without dividing by $2.0$, using $b=0.5$ doubled incorrectly.",
  },
  {
    id: "csc308_ch3_121",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - x - 1.0 = 0.0$ on $[1.0, 2.0]$, with $f(1.0) = -1.0$ and $f(2.0) = 5.0$, what is $w$ under the Regula Falsi formula $w = \\frac{f(b) \\times a - f(a) \\times b}{f(b) - f(a)}$, to four decimal places?",
    options: ["$1.8333$", "$1.5$", "$0.6$", "$1.1667$"],
    correctAnswer: 3,
    explanation:
      "$w = \\frac{f(2.0) \\times 1.0 - f(1.0) \\times 2.0}{f(2.0) - f(1.0)} = \\frac{5.0 \\times 1.0 - (-1.0) \\times 2.0}{5.0 - (-1.0)} = \\frac{5.0 + 2.0}{6.0} = \\frac{7.0}{6.0} \\approx 1.1667$.\n\n$1.8333$ results from incorrectly pairing $f(a)$ with $a$ and $f(b)$ with $b$ in both terms of the numerator, rather than the correct cross-multiplication.\n\n$1.5$ is instead the Bisection midpoint $m$ for this same interval, not the Regula Falsi value $w$.\n\n$0.6$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.",
  },
  {
    id: "csc308_ch3_122",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0x^3 + x^2 - 20.0x + 12.0 = 0.0$ on $[0.0, 1.0]$, with $f(0.0) = 12.0$ and $f(1.0) = -5.0$, what is $w$ under the Regula Falsi formula, to four decimal places?",
    options: ["$0.5$", "$0.7059$", "$0.2941$", "$1.7$"],
    correctAnswer: 1,
    explanation:
      "$w = \\frac{f(1.0) \\times 0.0 - f(0.0) \\times 1.0}{f(1.0) - f(0.0)} = \\frac{-5.0 \\times 0.0 - 12.0 \\times 1.0}{-5.0 - 12.0} = \\frac{-12.0}{-17.0} \\approx 0.7059$.\n\n$0.5$ is instead the Bisection midpoint $m$ for this same interval, not the Regula Falsi value $w$.\n\n$0.2941$ is $1.0 - 0.7059$, the complement of the correct value, resulting from a sign or ordering slip in the formula.\n\n$1.7$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.",
  },
  {
    id: "csc308_ch3_123",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0\\sin x - x = 0.0$ on $[1.0, 2.5]$, with $f(1.0) \\approx 0.6829$ and $f(2.5) \\approx -1.3031$, what is $w$ under the Regula Falsi formula, to four decimal places?",
    options: ["$1.75$", "$2.1$", "$1.5158$", "$0.9$"],
    correctAnswer: 2,
    explanation:
      "$w = \\frac{f(2.5) \\times 1.0 - f(1.0) \\times 2.5}{f(2.5) - f(1.0)} = \\frac{-1.3031 \\times 1.0 - 0.6829 \\times 2.5}{-1.3031 - 0.6829} \\approx \\frac{-1.3031 - 1.7072}{-1.9860} \\approx 1.5158$.\n\n$1.75$ is instead the Bisection midpoint $m$ for this same interval, not the Regula Falsi value $w$, illustrating the weighted average pulling the estimate away from the plain midpoint.\n\n$2.1$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.\n\n$0.9$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.",
  },
  {
    id: "csc308_ch3_124",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 3.0x - (1.0 - \\sin x)^{1/2} = 0.0$ on $[0.0, 1.0]$, with $f(0.0) = -1.0$ and $f(1.0) \\approx 2.6018$, what is $w$ under the Regula Falsi formula, to four decimal places?",
    options: ["$0.5$", "$0.7224$", "$1.0$", "$0.2776$"],
    correctAnswer: 3,
    explanation:
      "$w = \\frac{f(1.0) \\times 0.0 - f(0.0) \\times 1.0}{f(1.0) - f(0.0)} = \\frac{2.6018 \\times 0.0 - (-1.0) \\times 1.0}{2.6018 - (-1.0)} = \\frac{1.0}{3.6018} \\approx 0.2776$.\n\n$0.5$ is instead the Bisection midpoint $m$ for this same interval, not the Regula Falsi value $w$.\n\n$0.7224$ is $1.0 - 0.2776$, the complement of the correct value, resulting from a sign or ordering slip in the formula.\n\n$1.0$ is simply the right endpoint $b$ itself, not the computed Regula Falsi estimate.",
  },
  {
    id: "csc308_ch3_125",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = \\cos x - xe^x = 0.0$ on the interval from $a = 0.0$ to $b = 1.5708$ (that is, $\\pi/2.0$), with $f(a) = 1.0$ and $f(b) \\approx -7.5563$, what is $w$ under the Regula Falsi formula, to four decimal places?",
    options: ["$0.7854$", "$0.1836$", "$1.2$", "$0.5$"],
    correctAnswer: 1,
    explanation:
      "$w = \\frac{f(\\pi/2.0) \\times 0.0 - f(0.0) \\times \\pi/2.0}{f(\\pi/2.0) - f(0.0)} = \\frac{-7.5563 \\times 0.0 - 1.0 \\times 1.5708}{-7.5563 - 1.0} \\approx \\frac{-1.5708}{-8.5563} \\approx 0.1836$.\n\n$0.7854$ is instead the Bisection midpoint $m$ for this same interval, not the Regula Falsi value $w$.\n\n$1.2$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.\n\n$0.5$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.",
  },
  {
    id: "csc308_ch3_126",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - 3.0x^2 + 4.0x - 2.0 = 0.0$ on $[0.8, 1.5]$, with $f(0.8) \\approx -0.208$ and $f(1.5) = 0.625$, what is $w$ under the Regula Falsi formula, to four decimal places?",
    options: ["$1.15$", "$1.325$", "$0.9748$", "$0.675$"],
    correctAnswer: 2,
    explanation:
      "$w = \\frac{f(1.5) \\times 0.8 - f(0.8) \\times 1.5}{f(1.5) - f(0.8)} = \\frac{0.625 \\times 0.8 - (-0.208) \\times 1.5}{0.625 - (-0.208)} = \\frac{0.5 + 0.312}{0.833} \\approx 0.9748$.\n\n$1.15$ is instead the Bisection midpoint $m$ for this same interval, not the Regula Falsi value $w$.\n\n$1.325$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.\n\n$0.675$ does not match either the correct Regula Falsi computation or a common miscalculation of it for these values.",
  },
  {
    id: "csc308_ch3_127",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - x - 1.0 = 0.0$, using the Bisection midpoint $x_0 = 1.5$ as the Newton-Raphson starting point, with $f(1.5) = 0.875$ and $f'(x) = 3x^2 - 1$, what is $x_1$ under the Newton-Raphson formula, to four decimal places?",
    options: ["$1.6522$", "$1.5$", "$0.875$", "$1.3478$"],
    correctAnswer: 3,
    explanation:
      "$f'(1.5) = 3(1.5)^2 - 1 = 6.75 - 1 = 5.75$. $x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)} = 1.5 - \\frac{0.875}{5.75} \\approx 1.5 - 0.1522 \\approx 1.3478$.\n\n$1.6522$ results from adding the correction term instead of subtracting it, reversing the direction of the Newton-Raphson update.\n\n$1.5$ would mean no update was applied at all, which does not match the non-zero correction term of approximately $0.1522$.\n\n$0.875$ is simply $f(x_0)$ itself, not the updated iterate $x_1$.",
  },
  {
    id: "csc308_ch3_128",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0x^3 + x^2 - 20.0x + 12.0 = 0.0$, using the Bisection midpoint $x_0 = 0.5$ as the Newton-Raphson starting point, with $f(0.5) = 2.5$ and $f'(x) = 6x^2 + 2x - 20$, what is $x_1$ under the Newton-Raphson formula, to four decimal places?",
    options: ["$0.3571$", "$0.6429$", "$0.5$", "$2.5$"],
    correctAnswer: 1,
    explanation:
      "$f'(0.5) = 6(0.5)^2 + 2(0.5) - 20 = 1.5 + 1.0 - 20.0 = -17.5$. $x_1 = 0.5 - \\frac{2.5}{-17.5} = 0.5 + 0.1429 \\approx 0.6429$.\n\n$0.3571$ results from subtracting the correction term with the wrong sign, mishandling the negative value of $f'(0.5)$.\n\n$0.5$ would mean no update was applied at all, which does not match the non-zero correction term.\n\n$2.5$ is simply $f(x_0)$ itself, not the updated iterate $x_1$.",
  },
  {
    id: "csc308_ch3_129",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = 2.0\\sin x - x = 0.0$, using the Bisection midpoint $x_0 = 1.75$ as the Newton-Raphson starting point, with $f(1.75) \\approx 0.2180$ and $f'(1.75) \\approx -1.3565$ (from $f'(x) = 2\\cos x - 1$), what is $x_1$ under the Newton-Raphson formula, to four decimal places?",
    options: ["$1.5893$", "$1.75$", "$1.9107$", "$0.2180$"],
    correctAnswer: 2,
    explanation:
      "$f'(1.75) = 2\\cos(1.75) - 1 \\approx 2(-0.1782) - 1 \\approx -1.3565$. $x_1 = 1.75 - \\frac{0.2180}{-1.3565} \\approx 1.75 + 0.1607 \\approx 1.9107$.\n\n$1.5893$ results from subtracting the correction term with the wrong sign, mishandling the negative value of $f'(1.75)$.\n\n$1.75$ would mean no update was applied at all, which does not match the non-zero correction term.\n\n$0.2180$ is simply $f(x_0)$ itself, not the updated iterate $x_1$.",
  },
  {
    id: "csc308_ch3_130",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = \\cos x - xe^x = 0.0$, using the Bisection midpoint $x_0 \\approx 0.7854$ as the Newton-Raphson starting point, with $f(0.7854) \\approx -1.0155$ and $f'(0.7854) \\approx -4.6229$ (from $f'(x) = -\\sin x - e^x - xe^x$), what is $x_1$ under the Newton-Raphson formula, to four decimal places?",
    options: ["$1.0051$", "$0.7854$", "$-1.0155$", "$0.5657$"],
    correctAnswer: 3,
    explanation:
      "$f'(0.7854) \\approx -0.7071 - 2.1933 - 1.7224 \\approx -4.6229$. $x_1 = 0.7854 - \\frac{-1.0155}{-4.6229} \\approx 0.7854 - 0.2197 \\approx 0.5657$.\n\n$1.0051$ results from adding the correction term instead of subtracting it, reversing the direction of the Newton-Raphson update.\n\n$0.7854$ would mean no update was applied at all, which does not match the non-zero correction term.\n\n$-1.0155$ is simply $f(x_0)$ itself, not the updated iterate $x_1$.",
  },
  {
    id: "csc308_ch3_131",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = x^3 - 3.0x^2 + 4.0x - 2.0 = 0.0$, using the Bisection midpoint $x_0 = 1.15$ as the Newton-Raphson starting point, with $f(1.15) \\approx 0.1534$ and $f'(x) = 3x^2 - 6x + 4$, what is $x_1$ under the Newton-Raphson formula, to four decimal places?",
    options: ["$1.2937$", "$1.0063$", "$1.15$", "$0.1534$"],
    correctAnswer: 1,
    explanation:
      "$f'(1.15) = 3(1.15)^2 - 6(1.15) + 4 = 3.9675 - 6.9 + 4 = 1.0675$. $x_1 = 1.15 - \\frac{0.1534}{1.0675} \\approx 1.15 - 0.1437 \\approx 1.0063$.\n\n$1.2937$ results from adding the correction term instead of subtracting it, reversing the direction of the Newton-Raphson update.\n\n$1.15$ would mean no update was applied at all, which does not match the non-zero correction term.\n\n$0.1534$ is simply $f(x_0)$ itself, not the updated iterate $x_1$.",
  },
  {
    id: "csc308_ch3_132",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = e^x - x = 0.0$ on $[0.0, 1.0]$, with $f(0.0) = 1.0$ and $f(1.0) \\approx 2.7183 - 1.0 = 1.7183$, what would the Bisection pseudocode's initial check $R = F(a) \\times F(b)$ output?",
    options: [
      "'No Root in This Interval', since $R \\approx 1.7183 > 0.0$",
      "The computed root $m$, since $R \\approx 1.7183 > 0.0$ confirms a root",
      "'No Root in This Interval', since $R \\approx 1.7183 < 0.0$",
      "The computed root $m$, since $R \\approx 1.7183 < 0.0$ confirms a root",
    ],
    correctAnswer: 0,
    explanation:
      "$R = F(0.0) \\times F(1.0) \\approx 1.0 \\times 1.7183 \\approx 1.7183$, which is greater than $0.0$; per the pseudocode, when $R > 0.0$, the program writes 'No Root in This Interval' and terminates that path, since $e^x - x$ is positive at both endpoints here and never actually crosses zero on the real line.\n\n$R > 0.0$ is precisely the guard-clause condition that causes the program to report no root, not to proceed and compute $m$.\n\n$R \\approx 1.7183$ is a positive value, not negative; the sign of the product, not merely its label, is what the pseudocode checks.\n\nSince $R > 0.0$, not $R < 0.0$, this option's stated condition does not match the actual computed value, even though it also incorrectly claims the root would be computed.",
  },
  {
    id: "csc308_ch3_133",
    course: "CSC 308",
    chapter: "Chapter 3",
    text: "For $f(x) = e^x - x = 0.0$, starting Newton-Raphson from $x_0 = 0.5$, with $f(0.5) \\approx 1.1487$ and $f'(0.5) \\approx 0.6487$ (from $f'(x) = e^x - 1$), what is $x_1$, and what does this result illustrate about Newton-Raphson?",
    options: [
      "$x_1 \\approx -1.2707$, illustrating the divergence instability the method is susceptible to",
      "$x_1 \\approx 0.5$, illustrating perfectly stable convergence with no movement needed",
      "$x_1 \\approx 1.1487$, illustrating steady, well-behaved convergence toward a root",
      "$x_1$ is undefined, illustrating that Newton-Raphson can never be applied to $e^x - x$",
    ],
    correctAnswer: 0,
    explanation:
      "$f'(0.5) = e^{0.5} - 1 \\approx 0.6487$. $x_1 = 0.5 - \\frac{1.1487}{0.6487} \\approx 0.5 - 1.7707 \\approx -1.2707$, a value far outside the original interval $[0.0, 1.0]$, illustrating the serious instability, specifically divergence, that Newton-Raphson's iteration process is susceptible to.\n\n$x_1 \\approx 0.5$ would mean no movement occurred, which does not match the large computed correction term.\n\n$x_1 \\approx 1.1487$ is simply $f(x_0)$ itself, not the updated iterate, and the actual result is far from steady, well-behaved convergence.\n\n$f'(0.5) \\approx 0.6487 \\neq 0.0$, so $x_1$ is well defined and computable; it is Newton-Raphson's divergent behaviour here, not undefinedness, that this example illustrates.",
  },
];

export default csc308Chapter3Questions;
