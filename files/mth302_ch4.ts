import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter4: QuestionV2[] = [
  {
    id: "mth302_ch4_001",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the Wronskian of $y_1 = e^{-x}$ and $y_2 = e^{-2x}$?",
    options: [
      "$e^{-3x}$",
      "$-e^{-3x}$",
      "$-3e^{-3x}$",
      "$0$"
    ],
    correctAnswer: 1,
    explanation: "$W = y_1y_2' - y_1'y_2 = e^{-x}(-2e^{-2x}) - (-e^{-x})(e^{-2x}) = -2e^{-3x} + e^{-3x} = -e^{-3x}$. Since this is never zero, $y_1$ and $y_2$ are linearly independent.\n\n$e^{-3x}$ has the correct magnitude but the wrong sign, a common slip when combining the two terms.\n\n$-3e^{-3x}$ results from mishandling the coefficients during combination.\n\n$0$ would only occur if $y_1$ and $y_2$ were linearly dependent, which they are not."
  },
  {
    id: "mth302_ch4_002",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Using Abel's theorem, what is the Wronskian of any two solutions of $x^4y'' - 2x^3y' - x^8y = 0$ for $x \\neq 0$?",
    options: [
      "$Cx^{-2}$",
      "$Cx^2$",
      "$Ce^{-2x}$",
      "$Cx^4$"
    ],
    correctAnswer: 1,
    explanation: "Standardizing by dividing through by $x^4$ gives $y'' - \\dfrac{2}{x}y' - x^4y = 0$, so $P = -2/x$, and Abel's formula gives $W = Ce^{-\\int P\\,dx} = Ce^{2\\ln|x|} = Cx^2$. The term $-x^8y$ never enters the calculation since Abel's theorem depends only on $P$.\n\n$Cx^{-2}$ results from the sign error of using $+\\int P$ instead of $-\\int P$.\n\n$Ce^{-2x}$ comes from using the unstandardized leading coefficient $x^4$ instead of dividing through first.\n\n$Cx^4$ does not follow from correctly integrating $P = -2/x$."
  },
  {
    id: "mth302_ch4_003",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $y'' - \\dfrac{4}{x}y' + \\dfrac{6}{x^2}y = 0$ with $x > 0$, what is the Wronskian of two independent solutions?",
    options: [
      "$Ce^{4x}$",
      "$Cx^{-4}$",
      "$Cx^6$",
      "$Cx^4$"
    ],
    correctAnswer: 3,
    explanation: "Here $P = -4/x$, so $W = Ce^{-\\int(-4/x)\\,dx} = Ce^{4\\ln x} = Cx^4$. The coefficient $6/x^2$ in front of $y$ plays no role in Abel's theorem, which is exactly the point of using it instead of solving the equation directly.\n\n$Ce^{4x}$ wrongly treats $P$ as a constant rather than $-4/x$.\n\n$Cx^{-4}$ has the sign of the exponent reversed.\n\n$Cx^6$ confuses the coefficient of $y$ with the coefficient of $y'$ that Abel's theorem actually uses."
  },
  {
    id: "mth302_ch4_004",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "For $x^2y'' + xy' + (x^2 - 4)y = 0$ with $x > 0$, what does Abel's theorem give for the Wronskian?",
    options: [
      "$W = C/x$",
      "$W = Cx$",
      "$W = Cx^2$",
      "$W = Ce^{-x}$"
    ],
    correctAnswer: 0,
    explanation: "Dividing through by $x^2$ gives $y'' + \\dfrac{1}{x}y' + \\left(1 - \\dfrac{4}{x^2}\\right)y = 0$, so $P = 1/x$, and $W = Ce^{-\\ln x} = C/x$. This is Bessel's equation of order $2$, so the two independent solutions are $J_2$ and $Y_2$.\n\n$W = Cx$ has the sign of the exponent reversed.\n\n$W = Cx^2$ and $W = Ce^{-x}$ do not follow from correctly integrating $P = 1/x$."
  },
  {
    id: "mth302_ch4_005",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the general solution of $y'' + 4y' + 4y = 0$?",
    options: [
      "$C_1e^{-2x} + C_2e^{2x}$",
      "$(C_1 + C_2x)e^{-2x}$",
      "$e^{-2x}(C_1\\cos 2x + C_2\\sin 2x)$",
      "$C_1e^{-2x} + C_2e^{-2x}$"
    ],
    correctAnswer: 1,
    explanation: "The characteristic equation $r^2 + 4r + 4 = (r + 2)^2 = 0$ has the repeated root $r = -2$, and a repeated root always requires the extra factor of $x$ on the second term, giving $(C_1 + C_2x)e^{-2x}$.\n\n$C_1e^{-2x} + C_2e^{2x}$ uses two distinct real roots, which does not match this repeated-root case.\n\n$e^{-2x}(C_1\\cos 2x + C_2\\sin 2x)$ is the form for complex conjugate roots, not a repeated real root.\n\n$C_1e^{-2x} + C_2e^{-2x}$ is not even a valid general solution, since both terms are the same function and collapse into a single constant times $e^{-2x}$."
  },
  {
    id: "mth302_ch4_006",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the general solution of $y'' + 2y' + 5y = 0$?",
    options: [
      "$e^{2x}(C_1\\cos x + C_2\\sin x)$",
      "$e^{-x}(C_1\\cos 2x + C_2\\sin 2x)$",
      "$e^{-2x}(C_1\\cos x + C_2\\sin x)$",
      "$C_1e^{-x} + C_2e^{5x}$"
    ],
    correctAnswer: 1,
    explanation: "The characteristic roots are $r = \\dfrac{-2 \\pm \\sqrt{4 - 20}}{2} = -1 \\pm 2i$, so the real part $-1$ gives the exponential decay factor $e^{-x}$ and the imaginary part $2$ gives the oscillation frequency, producing $e^{-x}(C_1\\cos 2x + C_2\\sin 2x)$.\n\n$e^{2x}(C_1\\cos x + C_2\\sin x)$ and $e^{-2x}(C_1\\cos x + C_2\\sin x)$ both swap the roles of the real part and imaginary part, a very common error.\n\n$C_1e^{-x} + C_2e^{5x}$ wrongly assumes two distinct real roots, but the roots here are complex."
  },
  {
    id: "mth302_ch4_007",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "Given that $y_1 = x$ solves $x^2y'' - xy' + y = 0$ for $x > 0$, what is a second independent solution?",
    options: [
      "$x^2$",
      "$1/x$",
      "$\\ln x$",
      "$x\\ln x$"
    ],
    correctAnswer: 3,
    explanation: "Standard form $y'' - \\dfrac{1}{x}y' + \\dfrac{1}{x^2}y = 0$ gives $P = -1/x$, so the reduction of order formula gives $y_2 = x\\int \\dfrac{e^{\\ln x}}{x^2}\\,dx = x\\int \\dfrac{dx}{x} = x\\ln x$. The factor of $y_1 = x$ must be kept; $\\ln x$ alone does not satisfy the equation on its own.\n\n$x^2$ and $1/x$ do not satisfy the reduction of order construction for this equation.\n\n$\\ln x$ alone omits the essential multiplication by $y_1 = x$."
  },
  {
    id: "mth302_ch4_008",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "If $y_1$ and $y_2$ are solutions of $y'' + P(x)y' + Q(x)y = 0$ on an interval $I$, and the Wronskian $W(x_0) = 0$ at one point $x_0$ in $I$, what follows?",
    options: [
      "$W$ may be nonzero elsewhere on $I$",
      "No conclusion is possible",
      "$y_1$ and $y_2$ are independent",
      "$W$ is identically zero on $I$, and $y_1$, $y_2$ are dependent"
    ],
    correctAnswer: 3,
    explanation: "Abel's formula $W = Ce^{-\\int P}$ has an exponential factor that is never zero, so the Wronskian can vanish at one point only if $C = 0$, meaning $W$ is identically zero throughout $I$; for two solutions of the same linear equation, this forces linear dependence.\n\n$W$ may be nonzero elsewhere on $I$ contradicts the all-or-nothing behavior forced by Abel's formula.\n\nNo conclusion is possible understates what Abel's theorem actually guarantees.\n\n$y_1$ and $y_2$ are independent is the opposite of the correct conclusion."
  },
  {
    id: "mth302_ch4_009",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the Wronskian of $y_1 = x$ and $y_2 = x\\ln x$?",
    options: [
      "$x\\ln x$",
      "$\\ln x$",
      "$1$",
      "$x$"
    ],
    correctAnswer: 3,
    explanation: "Direct computation gives $W = x(\\ln x + 1) - 1 \\cdot x\\ln x = x$. This is consistent with applying Abel's theorem to $y'' - \\dfrac{1}{x}y' + \\dfrac{1}{x^2}y = 0$, which gives $W = Ce^{\\ln x} = Cx$.\n\n$x\\ln x$ and $\\ln x$ do not match either the direct computation or the Abel's theorem result.\n\n$1$ omits the factor of $x$ that both methods produce."
  },
  {
    id: "mth302_ch4_010",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "In Abel's theorem, $W = Ce^{-\\int P\\,dx}$, what does $P$ represent?",
    options: [
      "The coefficient of $y''$",
      "The forcing term",
      "The coefficient of $y$",
      "The coefficient of $y'$ once the coefficient of $y''$ has been made $1$"
    ],
    correctAnswer: 3,
    explanation: "Abel's theorem applies to the standard form $y'' + Py' + Qy = 0$, where the leading coefficient has already been divided out to equal $1$, and $P$ is the coefficient of $y'$ in that standardized equation. Forgetting to divide through by the leading coefficient of $y''$ before reading off $P$ is the most common way to lose marks on this topic, and $Q$ never enters Abel's formula at all.\n\nThe coefficient of $y''$ is wrong since that coefficient must already be normalized to $1$ before $P$ is read off.\n\nThe forcing term is irrelevant to Abel's theorem, which applies to homogeneous equations.\n\nThe coefficient of $y$ is $Q$, which plays no role in the Wronskian formula."
  },
  {
    id: "mth302_ch4_011",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "What is the reduction-of-order formula for a second solution of $y'' + Py' + Qy = 0$, given one solution $y_1$?",
    options: [
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{-\\int P\\,dx}}{y_1^2}\\,dx$",
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{\\int P\\,dx}}{y_1^2}\\,dx$",
      "$y_2 = \\displaystyle\\int \\dfrac{e^{-\\int P\\,dx}}{y_1}\\,dx$",
      "$y_2 = y_1\\displaystyle\\int \\dfrac{e^{-\\int Q\\,dx}}{y_1^2}\\,dx$"
    ],
    correctAnswer: 0,
    explanation: "Substituting $y = vy_1$ and $z = v'$ into the equation produces $z' + \\left(\\dfrac{2y_1'}{y_1} + P\\right)z = 0$, whose solution is $z = e^{-\\int P\\,dx}/y_1^2$; integrating $z$ to recover $v$ and multiplying back by $y_1$ gives $y_2 = y_1\\int \\dfrac{e^{-\\int P\\,dx}}{y_1^2}\\,dx$. The exponent carries a minus sign and the denominator is $y_1$ squared.\n\n$y_2 = y_1\\int \\dfrac{e^{\\int P\\,dx}}{y_1^2}\\,dx$ has the wrong sign on the exponent.\n\n$y_2 = \\int \\dfrac{e^{-\\int P\\,dx}}{y_1}\\,dx$ omits the multiplication by $y_1$ in front and uses only $y_1$ to the first power inside the integral.\n\n$y_2 = y_1\\int \\dfrac{e^{-\\int Q\\,dx}}{y_1^2}\\,dx$ wrongly uses $Q$ in place of $P$."
  },
  {
    id: "mth302_ch4_012",
    course: "MTH 302",
    chapter: "Chapter 4",
    text: "If $y_1$ and $y_2$ both solve $y'' + y = \\sin x$, what equation does $y_1 - y_2$ solve?",
    options: [
      "$y'' + y = \\sin x$",
      "$y'' + y = 2\\sin x$",
      "$y'' + y = 0$",
      "$y'' - y = 0$"
    ],
    correctAnswer: 2,
    explanation: "Subtracting the two equations satisfied by $y_1$ and $y_2$ cancels the common forcing term $\\sin x$, leaving $y'' + y = 0$ as the equation solved by their difference. This is the correct form of superposition for nonhomogeneous problems: differences of solutions solve the homogeneous equation, while sums do not solve the original nonhomogeneous equation.\n\n$y'' + y = \\sin x$ wrongly assumes the difference still carries the forcing term.\n\n$y'' + y = 2\\sin x$ is actually the equation solved by the sum $y_1 + y_2$, not the difference.\n\n$y'' - y = 0$ changes the sign of $y$ incorrectly; only the forcing term is affected by the subtraction."
  }
];

export default mth302Chapter4;
