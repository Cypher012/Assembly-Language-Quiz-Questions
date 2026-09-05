import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter5: QuestionV2[] = [
  {
    id: "mth302_ch5_001",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the correct trial particular solution for $y'' + y = \\cos x$?",
    options: [
      "$A\\cos x$",
      "$A\\cos x + B\\sin x$ with no factor of $x$",
      "$x(A\\cos x + B\\sin x)$",
      "$x^2(A\\cos x + B\\sin x)$ using a squared factor"
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
      "Undetermined coefficients, which needs a closed family",
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
      "$C_1 + C_2e^x + e^{2x}$ without the factor one half",
      "$C_1e^x + C_2e^{-x} + \\dfrac{1}{2}e^{2x}$ with the wrong complementary function",
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
  },
  {
    id: "mth302_ch5_008",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "The general solution of a nonhomogeneous linear equation has which structure?",
    options: [
      "$y = y_c + y_p$, the complementary function plus any one particular solution",
      "$y = y_cy_p$",
      "$y = y_c - y_p$",
      "$y = y_p$ alone"
    ],
    correctAnswer: 0,
    explanation: "The general solution is the complementary function $y_c$, carrying both arbitrary constants, added to any single particular solution $y_p$ of the full equation.\n\nMultiplying the two pieces does not satisfy a linear equation.\n\nSubtracting $y_p$ would leave the forcing term unmatched.\n\nTaking $y_p$ alone drops the arbitrary constants and so is not a general solution."
  },
  {
    id: "mth302_ch5_009",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For forcing term $G(x) = e^{ax}$ with $e^{ax}$ not in $y_c$, what is the trial particular solution?",
    options: [
      "$Ae^{ax}$",
      "$Axe^{ax}$ with the extra factor included from the start",
      "$Ae^{ax} + B$ with a constant added alongside",
      "$Aa e^{x}$ using the exponent as a coefficient"
    ],
    correctAnswer: 0,
    explanation: "An exponential forcing term calls for an exponential trial of the same rate, so $Ae^{ax}$ is used when it does not duplicate anything in $y_c$.\n\nThe extra factor $x$ is introduced only when resonance occurs.\n\nAdding a constant is unnecessary unless the forcing term itself contains one.\n\nMoving $a$ out of the exponent changes the function entirely."
  },
  {
    id: "mth302_ch5_010",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For a polynomial forcing term of degree $n$, what trial form is used?",
    options: [
      "A complete polynomial $A_nx^n + \\cdots + A_1x + A_0$ with no missing powers",
      "Only the single term $A_nx^n$",
      "A polynomial of degree $n + 1$",
      "The term $A_nx^n$ together with a constant"
    ],
    correctAnswer: 0,
    explanation: "Every power from $x^n$ down to the constant must be included, because differentiation mixes the powers and the lower coefficients are generally nonzero.\n\nKeeping only the leading term leaves too few coefficients to match the equation.\n\nRaising the degree adds an unnecessary coefficient that will vanish.\n\nIncluding only the top term and a constant leaves gaps in the intermediate powers."
  },
  {
    id: "mth302_ch5_011",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For forcing term $\\sin bx$, what is the correct trial form?",
    options: [
      "$A\\cos bx + B\\sin bx$",
      "$B\\sin bx$ only, matching the forcing term exactly",
      "$A\\cos bx$ only, using the derivative of the forcing term",
      "$Ae^{bx}$, converting the sine to an exponential"
    ],
    correctAnswer: 0,
    explanation: "Differentiating a sine produces a cosine, so both trigonometric terms must be present even when only one appears in the forcing term.\n\nUsing only the sine leaves no term to match the cosine generated by differentiation.\n\nUsing only the cosine has the same defect in reverse.\n\nAn exponential trial cannot reproduce an oscillating forcing term."
  },
  {
    id: "mth302_ch5_012",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is done when a term in the trial solution already appears in $y_c$?",
    options: [
      "Multiply the whole trial by $x$, repeating if necessary",
      "Discard that term from the trial",
      "Replace the trial with a constant",
      "Add a constant to the trial"
    ],
    correctAnswer: 0,
    explanation: "Duplication with $y_c$ makes the trial collapse to zero in the equation, and multiplying the entire trial by $x$, repeated if the duplication persists, restores a usable form.\n\nDiscarding the term leaves nothing to match the forcing.\n\nA constant trial cannot reproduce the forcing term in general.\n\nAdding a constant does not remove the duplication."
  },
  {
    id: "mth302_ch5_013",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Why does the naive trial $A\\cos x + B\\sin x$ fail for $y'' + y = \\cos x$?",
    options: [
      "It already lies in $y_c$, so substituting gives $0 = \\cos x$",
      "It has too few undetermined coefficients",
      "It is not differentiable twice",
      "It produces a polynomial instead"
    ],
    correctAnswer: 0,
    explanation: "The complementary function is exactly $C_1\\cos x + C_2\\sin x$, so the naive trial is annihilated by the operator and yields the impossible identity $0 = \\cos x$.\n\nThe count of coefficients is not the problem; both are present.\n\nTrigonometric functions are infinitely differentiable.\n\nNo polynomial arises from a trigonometric trial."
  },
  {
    id: "mth302_ch5_014",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + y = \\cos x$, what is the correct trial particular solution?",
    options: [
      "$x(A\\cos x + B\\sin x)$",
      "$A\\cos x + B\\sin x$",
      "$x^2(A\\cos x + B\\sin x)$",
      "$Ax\\cos x$ omitting the sine term entirely"
    ],
    correctAnswer: 0,
    explanation: "Because the naive trial duplicates $y_c$, the whole trial is multiplied by $x$, giving $x(A\\cos x + B\\sin x)$.\n\nThe unmodified trial is precisely the one that fails.\n\nA factor $x^2$ would be needed only for a double duplication, which does not occur here.\n\nDropping the sine term leaves the trial unable to match the equation."
  },
  {
    id: "mth302_ch5_015",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For a double characteristic root $r$ with forcing $e^{rx}$, what trial is required?",
    options: [
      "$Ax^2e^{rx}$",
      "$Ae^{rx}$ with no correcting factor",
      "$Axe^{rx}$",
      "$Ax^3e^{rx}$"
    ],
    correctAnswer: 0,
    explanation: "Both $e^{rx}$ and $xe^{rx}$ already lie in $y_c$ for a double root, so the trial must be multiplied by $x$ twice, giving $Ax^2e^{rx}$.\n\nThe bare exponential duplicates $y_c$ immediately.\n\nOne factor of $x$ still duplicates the second member of $y_c$.\n\nThree factors overshoot, introducing an unnecessary power."
  },
  {
    id: "mth302_ch5_016",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "In variation of parameters, $y_p = C_1(x)y_1 + C_2(x)y_2$ is used with which imposed conditions?",
    options: [
      "$C_1'y_1 + C_2'y_2 = 0$ and $C_1'y_1' + C_2'y_2' = g$",
      "$C_1'y_1 + C_2'y_2 = g$ and $C_1'y_1' + C_2'y_2' = 0$",
      "$C_1' = C_2'$ and $y_1 = y_2$",
      "$C_1'y_1' + C_2'y_2' = 0$ only"
    ],
    correctAnswer: 0,
    explanation: "The first condition removes the second derivatives of the coefficient functions, and the second matches the forcing term, giving a solvable pair.\n\nSwapping the right-hand sides destroys the cancellation the method relies on.\n\nForcing the coefficients or the solutions to be equal contradicts independence.\n\nA single condition cannot determine two unknown functions."
  },
  {
    id: "mth302_ch5_017",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the variation-of-parameters formula for $y_p$?",
    options: [
      "$-y_1\\displaystyle\\int \\dfrac{y_2g}{W}\\,dx + y_2\\displaystyle\\int \\dfrac{y_1g}{W}\\,dx$",
      "$y_1\\displaystyle\\int \\dfrac{y_2g}{W}\\,dx + y_2\\displaystyle\\int \\dfrac{y_1g}{W}\\,dx$",
      "$-y_1\\displaystyle\\int \\dfrac{y_2g}{W}\\,dx - y_2\\displaystyle\\int \\dfrac{y_1g}{W}\\,dx$",
      "$\\displaystyle\\int \\dfrac{y_1y_2g}{W}\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "Solving the two imposed conditions by Cramer's rule gives the stated formula, with the minus sign attached to the first integral only.\n\nDropping the minus sign reverses one of the two contributions.\n\nAttaching minus signs to both terms overcorrects.\n\nA single combined integral does not arise from the two-condition system."
  },
  {
    id: "mth302_ch5_018",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "In the variation-of-parameters formula, what is $W$?",
    options: [
      "$y_1y_2' - y_1'y_2$",
      "$y_1y_2' + y_1'y_2$",
      "$y_1y_2$, the plain product of the solutions",
      "$y_1' y_2'$"
    ],
    correctAnswer: 0,
    explanation: "The denominator is the Wronskian of the fundamental set, namely $y_1y_2' - y_1'y_2$.\n\nA sum rather than a difference is not the determinant.\n\nThe plain product of the solutions is not the Wronskian.\n\nThe product of the derivatives alone omits the functions themselves."
  },
  {
    id: "mth302_ch5_019",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $2y'' + y = \\tan x$, which forcing function $g$ is used in variation of parameters?",
    options: [
      "$\\tfrac{1}{2}\\tan x$",
      "$\\tan x$ read before standardising",
      "$2\\tan x$",
      "$\\tfrac{1}{2}\\sec^2 x$"
    ],
    correctAnswer: 0,
    explanation: "The formula assumes standard form $y'' + Py' + Qy = g$, so dividing by $2$ first gives $g = \\tfrac{1}{2}\\tan x$.\n\nUsing $\\tan x$ unchanged reads the forcing term before standardising.\n\nMultiplying by $2$ moves in the wrong direction.\n\nThe secant squared is the derivative of the tangent and does not appear here."
  },
  {
    id: "mth302_ch5_020",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Which advantage does variation of parameters have over undetermined coefficients?",
    options: [
      "It works for any continuous $g$ and for variable coefficients",
      "It requires no integration at all",
      "It avoids the need for a fundamental set",
      "It applies only to constant coefficients"
    ],
    correctAnswer: 0,
    explanation: "Undetermined coefficients needs constant coefficients and a forcing term from a restricted family, whereas variation of parameters handles any continuous $g$, which is why it is the method for $\\tan x$, $\\sec x$, $\\ln x$, and $1/x$.\n\nThe method is built on integrals, so it certainly requires integration.\n\nA fundamental set is exactly what the formula needs as input.\n\nRestricting to constant coefficients describes the weaker method, not this one."
  },
  {
    id: "mth302_ch5_021",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Which forcing term makes undetermined coefficients inapplicable?",
    options: [
      "$\\tan x$",
      "$x^3$",
      "$e^{2x}$",
      "$\\sin 4x$"
    ],
    correctAnswer: 0,
    explanation: "The trial families cover exponentials, polynomials, sines and cosines and their products, but repeated differentiation of $\\tan x$ never closes into a finite family.\n\nA polynomial is squarely within the admissible family.\n\nAn exponential is the simplest admissible case.\n\nA sine is admissible using the paired trigonometric trial."
  },
  {
    id: "mth302_ch5_022",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - 3y' + 2y = e^{x}$, why is $Ae^{x}$ an unsuitable trial?",
    options: [
      "$e^{x}$ already appears in $y_c$",
      "The forcing term is not exponential",
      "The equation has complex roots",
      "The trial has too many coefficients"
    ],
    correctAnswer: 0,
    explanation: "The characteristic roots are $1$ and $2$, so $y_c = C_1e^{x} + C_2e^{2x}$ already contains $e^{x}$ and the naive trial is annihilated.\n\nThe forcing term is plainly exponential.\n\nThe roots are real and distinct, not complex.\n\nA single coefficient is the minimum, not an excess."
  },
  {
    id: "mth302_ch5_023",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the corrected trial for $y'' - 3y' + 2y = e^{x}$?",
    options: [
      "$Axe^{x}$",
      "$Ae^{x}$ with no correcting factor applied",
      "$Ax^2e^{x}$",
      "$Ae^{2x}$"
    ],
    correctAnswer: 0,
    explanation: "Since $e^{x}$ duplicates one member of $y_c$ and the root is simple, one factor of $x$ suffices, giving $Axe^{x}$.\n\nThe unmodified exponential is the trial that fails.\n\nA squared factor would be needed only for a repeated root.\n\nChanging the exponent to $2x$ no longer matches the forcing term."
  },
  {
    id: "mth302_ch5_024",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "When applying initial conditions to a nonhomogeneous problem, to what are they applied?",
    options: [
      "The full solution $y_c + y_p$",
      "The complementary function $y_c$ alone",
      "The particular solution $y_p$ alone",
      "The forcing term $g$"
    ],
    correctAnswer: 0,
    explanation: "The arbitrary constants live in $y_c$, but the conditions constrain the actual solution, so they must be imposed on the complete expression $y_c + y_p$.\n\nUsing $y_c$ alone ignores the contribution of $y_p$ at the initial point and is the standard slip.\n\nThe particular solution carries no arbitrary constants to determine.\n\nThe forcing term is data, not something conditions are applied to."
  },
  {
    id: "mth302_ch5_025",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - y = x^2$, what is the trial particular solution?",
    options: [
      "$ax^2 + bx + c$",
      "$ax^2$",
      "$ax^2 + b$",
      "$ax^3 + bx^2 + cx + d$"
    ],
    correctAnswer: 0,
    explanation: "A degree-two forcing term requires the full quadratic trial with all three coefficients present.\n\nKeeping only the square leaves no way to match the constant produced by differentiation.\n\nOmitting the linear term leaves a gap in the polynomial.\n\nRaising the degree introduces a coefficient that must vanish."
  },
  {
    id: "mth302_ch5_026",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' - y = x^2$, the trial gives $2a - ax^2 - bx - c = x^2$. What are the coefficients?",
    options: [
      "$a = -1$, $b = 0$, $c = -2$",
      "$a = 1$, $b = 0$, $c = 2$ with both signs reversed",
      "$a = -1$, $b = 1$, $c = -2$ with a nonzero linear term",
      "$a = -1$, $b = 0$, $c = 2$"
    ],
    correctAnswer: 0,
    explanation: "Matching $x^2$ gives $-a = 1$ so $a = -1$; matching $x$ gives $b = 0$; matching constants gives $2a - c = 0$, so $c = 2a = -2$.\n\nPositive values of $a$ and $c$ reverse both signs.\n\nA nonzero $b$ contradicts the absence of a linear term on the right.\n\nA positive $c$ mismatches the constant equation $2a - c = 0$."
  },
  {
    id: "mth302_ch5_027",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the general solution of $y'' - y = x^2$?",
    options: [
      "$y = Ae^{x} + Be^{-x} - x^2 - 2$",
      "$y = Ae^{x} + Be^{-x} + x^2 + 2$",
      "$y = A\\cos x + B\\sin x - x^2 - 2$",
      "$y = Ae^{x} + Be^{-x} - x^2$"
    ],
    correctAnswer: 0,
    explanation: "The complementary function is $Ae^{x} + Be^{-x}$ and the particular solution is $-x^2 - 2$, giving the stated sum.\n\nPositive signs on the polynomial part contradict the computed coefficients.\n\nTrigonometric terms would arise from $y'' + y = 0$, not $y'' - y = 0$.\n\nDropping the constant $-2$ leaves the constant terms unmatched."
  },
  {
    id: "mth302_ch5_028",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "If $y$ is missing from a second-order equation, which substitution is used?",
    options: [
      "$p = y'$ treated as a function of $x$",
      "$p = y'$ treated as a function of $y$",
      "$p = y$ treated as a function of $x$",
      "$p = y''$ treated as a constant"
    ],
    correctAnswer: 0,
    explanation: "With $y$ absent the equation involves only $y'$ and $y''$, so setting $p = y'$ as a function of $x$ reduces it directly to first order.\n\nTreating $p$ as a function of $y$ is the device used when $x$ is missing instead.\n\nSetting $p = y$ achieves no reduction.\n\nTreating the second derivative as constant discards the equation."
  },
  {
    id: "mth302_ch5_029",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "If $x$ is missing from a second-order equation, what does $y''$ become under $p = y'$?",
    options: [
      "$p\\dfrac{dp}{dy}$",
      "$\\dfrac{dp}{dx}$ as used when $y$ is missing",
      "$\\dfrac{dp}{dy}$",
      "$p\\dfrac{dp}{dx}$"
    ],
    correctAnswer: 0,
    explanation: "Treating $p$ as a function of $y$ and applying the chain rule gives $y'' = \\dfrac{dp}{dx} = \\dfrac{dp}{dy}\\dfrac{dy}{dx} = p\\dfrac{dp}{dy}$.\n\nThe plain derivative in $x$ is the form used when $y$ is missing.\n\nOmitting the factor $p$ drops the chain-rule contribution.\n\nCombining $p$ with a derivative in $x$ mixes the two cases."
  },
  {
    id: "mth302_ch5_030",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Reducing $y'' = e^{x} + \\sin x$ with $p = y'$ gives $p$ equal to what?",
    options: [
      "$e^{x} - \\cos x + C_1$",
      "$e^{x} + \\cos x + C_1$ with the cosine sign reversed",
      "$e^{x} - \\sin x + C_1$ obtained by differentiating",
      "$e^{x} + \\sin x + C_1$"
    ],
    correctAnswer: 0,
    explanation: "Integrating once gives $p = e^{x} - \\cos x + C_1$, since the integral of $\\sin x$ is $-\\cos x$.\n\nA positive cosine reverses the sign produced by integration.\n\nIntegrating $\\sin x$ to $-\\sin x$ confuses integration with differentiation.\n\nLeaving $\\sin x$ unchanged skips the integration of that term."
  },
  {
    id: "mth302_ch5_031",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + 2y(y')^2 = 0$ with $p = y'$, which equation results?",
    options: [
      "$p\\dfrac{dp}{dy} + 2yp^2 = 0$",
      "$\\dfrac{dp}{dx} + 2yp^2 = 0$ using a derivative in $x$",
      "$p\\dfrac{dp}{dy} + 2y = 0$ dropping the square on $p$",
      "$\\dfrac{dp}{dy} + 2yp = 0$"
    ],
    correctAnswer: 0,
    explanation: "Since $x$ is missing, $y'' = p\\dfrac{dp}{dy}$, and substituting into the equation gives $p\\dfrac{dp}{dy} + 2yp^2 = 0$.\n\nUsing a derivative in $x$ ignores that $x$ is the missing variable here.\n\nDropping $p^2$ discards the square on $y'$ in the original equation.\n\nRemoving the leading factor $p$ misapplies the chain rule."
  },
  {
    id: "mth302_ch5_032",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Separating $\\dfrac{1}{p}\\dfrac{dp}{dy} = -2y$ gives which expression for $p$?",
    options: [
      "$p = Ke^{-y^2}$",
      "$p = Ke^{y^2}$",
      "$p = Ke^{-2y}$",
      "$p = -y^2 + K$"
    ],
    correctAnswer: 0,
    explanation: "Integrating gives $\\ln|p| = -y^2 + C$, and exponentiating yields $p = Ke^{-y^2}$.\n\nA positive exponent reverses the sign obtained on integration.\n\nThe exponent $-2y$ omits the integration of $-2y$ with respect to $y$.\n\nStopping at $-y^2 + K$ forgets that the left side integrated to a logarithm."
  },
  {
    id: "mth302_ch5_033",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For forcing term $e^{ax}\\sin bx$, what trial form is used?",
    options: [
      "$e^{ax}(A\\cos bx + B\\sin bx)$",
      "$Ae^{ax}\\sin bx$",
      "$e^{ax} + A\\cos bx + B\\sin bx$",
      "$A\\cos bx + B\\sin bx$"
    ],
    correctAnswer: 0,
    explanation: "A product forcing term takes the product of the corresponding trial forms, so the exponential multiplies the full paired trigonometric trial.\n\nKeeping only the sine omits the cosine that differentiation generates.\n\nAdding rather than multiplying the exponential misreads the structure of the forcing term.\n\nDropping the exponential leaves the trial unable to match the growth factor."
  },
  {
    id: "mth302_ch5_034",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Which condition must hold for undetermined coefficients to apply at all?",
    options: [
      "The equation has constant coefficients",
      "The equation is homogeneous",
      "The equation is first order",
      "The forcing term vanishes"
    ],
    correctAnswer: 0,
    explanation: "The method assumes constant coefficients together with a forcing term built from exponentials, polynomials, sines and cosines.\n\nA homogeneous equation has no forcing term and so needs no particular solution.\n\nThe method is stated for second-order equations here, not restricted to first order.\n\nA vanishing forcing term would again make the problem homogeneous."
  },
  {
    id: "mth302_ch5_035",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "What is the complementary function of $y'' - y' = e^{2x}$?",
    options: [
      "$C_1 + C_2e^{x}$",
      "$C_1e^{x} + C_2e^{-x}$",
      "$C_1e^{2x} + C_2$",
      "$C_1\\cos x + C_2\\sin x$"
    ],
    correctAnswer: 0,
    explanation: "The characteristic equation $r^2 - r = r(r - 1) = 0$ has roots $0$ and $1$, giving $C_1 + C_2e^{x}$.\n\nRoots $\\pm 1$ would require the equation $y'' - y = 0$.\n\nA root of $2$ does not satisfy $r^2 - r = 0$.\n\nTrigonometric terms require complex roots, which do not arise here."
  },
  {
    id: "mth302_ch5_036",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For forcing term $G(x) = 5$, a nonzero constant, what is the trial form?",
    options: [
      "$A$",
      "$Ax$",
      "$A\\cos x$",
      "$Ae^{x}$"
    ],
    correctAnswer: 0,
    explanation: "A constant is a polynomial of degree zero, so the trial is a single undetermined constant $A$, provided a constant does not already lie in $y_c$.\n\nThe factor $x$ is introduced only under resonance.\n\nA trigonometric trial does not match a constant forcing term.\n\nAn exponential trial likewise does not match a constant."
  },
  {
    id: "mth302_ch5_037",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "Which method should be used for $y'' + y = \\sec x$?",
    options: [
      "Variation of parameters",
      "Undetermined coefficients",
      "Separation of variables",
      "An integrating factor"
    ],
    correctAnswer: 0,
    explanation: "The secant lies outside the exponential, polynomial and trigonometric family, so only variation of parameters applies.\n\nUndetermined coefficients cannot handle a forcing term whose derivatives never close into a finite family.\n\nSeparation of variables is a first-order technique.\n\nIntegrating factors belong to first-order linear equations."
  },
  {
    id: "mth302_ch5_038",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "How many arbitrary constants does the general solution of a nonhomogeneous second-order equation contain?",
    options: [
      "$2$",
      "$1$",
      "$3$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "The constants come entirely from the complementary function of a second-order equation, so there are exactly two.\n\nOne constant would correspond to a first-order equation.\n\nThree constants would require a third-order equation.\n\nA general solution must carry arbitrary constants, so zero is impossible."
  },
  {
    id: "mth302_ch5_039",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "For $y'' + 4y = \\sin 2x$, why must the trial be multiplied by $x$?",
    options: [
      "Because $\\sin 2x$ already lies in $y_c$",
      "Because the equation has a repeated root",
      "Because the forcing term is a product",
      "Because the coefficients are variable"
    ],
    correctAnswer: 0,
    explanation: "The roots are $\\pm 2i$, so $y_c = C_1\\cos 2x + C_2\\sin 2x$ already contains the forcing term and resonance occurs.\n\nThe roots are complex and distinct rather than repeated.\n\nThe forcing term is a single sine, not a product.\n\nThe coefficients here are constants."
  },
  {
    id: "mth302_ch5_040",
    course: "MTH 302",
    chapter: "Chapter 5",
    text: "In $y = y_c + y_p$, which part carries the arbitrary constants?",
    options: [
      "$y_c$",
      "$y_p$",
      "Both equally",
      "Neither"
    ],
    correctAnswer: 0,
    explanation: "The complementary function is the general solution of the homogeneous equation and so contains the arbitrary constants.\n\nThe particular solution is one fixed function with no free constants.\n\nSplitting the constants between the two misdescribes the structure.\n\nA general solution must contain arbitrary constants somewhere."
  }
];

export default mth302Chapter5;
