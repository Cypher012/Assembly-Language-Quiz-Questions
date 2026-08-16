import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter2: QuestionV2[] = [
  {
    id: "mth302_ch2_001",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the integrating factor of $xy' + 2y = x^3$?",
    options: [
      "$e^{2x}$",
      "$x^2$",
      "$x^{-2}$",
      "$e^{x^2}$"
    ],
    correctAnswer: 1,
    explanation: "Standardizing first gives $y' + \\dfrac{2}{x}y = x^2$, so $P = \\dfrac{2}{x}$ and the integrating factor is $e^{\\int 2\\,dx/x} = e^{2\\ln x} = x^2$.\n\n$e^{2x}$ comes from using $P = 2$ straight from the unstandardized equation instead of dividing through by $x$ first, which is the most common error in this topic.\n\n$x^{-2}$ and $e^{x^2}$ do not follow from correctly integrating $P = 2/x$."
  },
  {
    id: "mth302_ch2_002",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $y' + 2y = e^{-x}$?",
    options: [
      "$y = e^{-x} + Ce^{-2x}$",
      "$y = e^x + Ce^{2x}$",
      "$y = e^{-x} + Ce^{2x}$",
      "$y = Ce^{-2x}$"
    ],
    correctAnswer: 0,
    explanation: "With integrating factor $e^{2x}$, the equation becomes $(e^{2x}y)' = e^x$, so $e^{2x}y = e^x + C$, giving $y = e^{-x} + Ce^{-2x}$.\n\n$y = e^x + Ce^{2x}$ reverses the signs throughout.\n\n$y = e^{-x} + Ce^{2x}$ gets the particular part right but the complementary part wrong.\n\n$y = Ce^{-2x}$ is only the complementary solution; a nonzero right-hand side must contribute a particular part as well."
  },
  {
    id: "mth302_ch2_003",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Which substitution reduces $\\dfrac{dy}{dx} = \\dfrac{x + y}{x}$ to a separable equation?",
    options: [
      "$v = x + y$",
      "$v = y'$",
      "$y = vx$",
      "$v = 1/y$"
    ],
    correctAnswer: 2,
    explanation: "The right-hand side equals $1 + y/x$, a function of $y/x$ alone, so the equation is homogeneous, and the standard substitution for a homogeneous equation is $y = vx$ together with $y' = v + xv'$, which turns it into a separable equation in $v$ and $x$.\n\n$v = x + y$ and $v = 1/y$ are substitutions used for other equation types, not for homogeneous first-order equations.\n\n$v = y'$ does not reduce the equation to separable form at all."
  },
  {
    id: "mth302_ch2_004",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the solution of $\\dfrac{dy}{dx} = \\dfrac{x}{y}$ with $y(0) = 2$?",
    options: [
      "$y^2 = x^2 + 2$",
      "$y^2 = x^2 + 4$",
      "$y = x^2 + 4$",
      "$y^2 = 2x^2 + 4$"
    ],
    correctAnswer: 1,
    explanation: "Separating gives $y\\,dy = x\\,dx$, so $\\dfrac{y^2}{2} = \\dfrac{x^2}{2} + C$, i.e. $y^2 = x^2 + 2C$. Applying $y(0) = 2$ gives $4 = 0 + 2C$, so $y^2 = x^2 + 4$.\n\n$y^2 = x^2 + 2$ comes from substituting the initial condition into $y$ rather than into $y^2$.\n\n$y = x^2 + 4$ forgets that the relation is quadratic in $y$, not linear.\n\n$y^2 = 2x^2 + 4$ has an extra factor of $2$ on the $x^2$ term that does not follow from the separation."
  },
  {
    id: "mth302_ch2_005",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "The equation $(2xy + 1)\\,dx + (x^2 + 6y)\\,dy = 0$ is exact. What is its solution?",
    options: [
      "$x^2y + x + 3y^2 = C$",
      "$x^2y + x + 6y^2 = C$",
      "$2xy + x + 3y^2 = C$",
      "$x^2y + y + 3y^2 = C$"
    ],
    correctAnswer: 0,
    explanation: "Checking $M_y = 2x = N_x$ confirms exactness. Integrating $M$ with respect to $x$ gives $\\psi = x^2y + x + h(y)$, and matching $\\psi_y = x^2 + h'(y)$ against $N = x^2 + 6y$ forces $h'(y) = 6y$, so $h = 3y^2$, giving $x^2y + x + 3y^2 = C$.\n\n$x^2y + x + 6y^2 = C$ forgets to integrate $6y$ down to $3y^2$.\n\n$2xy + x + 3y^2 = C$ fails to integrate the $2xy$ term with respect to $x$ into $x^2y$.\n\n$x^2y + y + 3y^2 = C$ drops the $x$ term that comes from integrating the constant part of $M$."
  },
  {
    id: "mth302_ch2_006",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the solution of $y' - \\dfrac{2}{x}y = x^2$ for $x > 0$?",
    options: [
      "$y = x^2 + Cx^3$",
      "$y = x^3 + Cx^{-2}$",
      "$y = \\dfrac{x^3}{3} + Cx^2$",
      "$y = x^3 + Cx^2$"
    ],
    correctAnswer: 3,
    explanation: "Here $P = -2/x$, so the integrating factor is $\\mu = e^{-2\\ln x} = x^{-2}$. Then $(x^{-2}y)' = x^{-2}x^2 = 1$, so $x^{-2}y = x + C$, giving $y = x^3 + Cx^2$.\n\n$y = x^2 + Cx^3$ and $y = \\dfrac{x^3}{3} + Cx^2$ do not follow from correctly multiplying through by $1/\\mu = x^2$.\n\n$y = x^3 + Cx^{-2}$ uses the wrong sign in the exponent when converting back from $\\mu$."
  },
  {
    id: "mth302_ch2_007",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Which substitution linearizes the Bernoulli equation $y' + P(x)y = Q(x)y^3$?",
    options: [
      "$v = y^2$",
      "$v = y^3$",
      "$v = y^{-2}$",
      "$v = \\ln y$"
    ],
    correctAnswer: 2,
    explanation: "For $y' + Py = Qy^n$ the linearizing substitution is $v = y^{1-n}$; with $n = 3$ this gives $v = y^{-2}$, which converts the equation into the linear equation $v' - 2Pv = -2Q$.\n\n$v = y^2$ and $v = y^3$ do not match the pattern $v = y^{1-n}$ for $n = 3$.\n\n$v = \\ln y$ is the substitution associated with a different type of nonlinear equation, not the Bernoulli form."
  },
  {
    id: "mth302_ch2_008",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What degree of homogeneity does $F(x, y) = x^3 + x^2 y$ have?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "Not homogeneous"
    ],
    correctAnswer: 2,
    explanation: "$F(\\lambda x, \\lambda y) = \\lambda^3 x^3 + \\lambda^3 x^2 y = \\lambda^3 F(x, y)$, so the function is homogeneous of degree $3$. A quick check is that every term of a homogeneous function carries the same total degree, and here both $x^3$ and $x^2y$ are degree $3$.\n\n$1$ and $2$ undercount the total degree of each term.\n\nNot homogeneous is wrong since the defining scaling relation does hold, with degree exactly $3$."
  },
  {
    id: "mth302_ch2_009",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $\\dfrac{dy}{dx} = 1 + \\dfrac{y}{x}$?",
    options: [
      "$y = x\\ln|x| + C$",
      "$y = x(\\ln|x| + C)$",
      "$y = Cx + \\ln|x|$",
      "$y = \\ln|x| + C$"
    ],
    correctAnswer: 1,
    explanation: "With $y = vx$, the equation becomes $v + xv' = 1 + v$, so $xv' = 1$, giving $v = \\ln|x| + C$, and therefore $y = vx = x(\\ln|x| + C)$.\n\n$y = x\\ln|x| + C$ drops the $x$ that should multiply the constant $C$, which produces a genuinely different family of functions since $Cx$ and $C$ are not the same function.\n\n$y = Cx + \\ln|x|$ and $y = \\ln|x| + C$ do not correctly distribute $x$ across both terms of $v$."
  },
  {
    id: "mth302_ch2_010",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "What is the general solution of $y' = y\\tan x$?",
    options: [
      "$y = C\\cos x$",
      "$y = C\\sec x$",
      "$y = C\\sin x$",
      "$y = C\\tan x$"
    ],
    correctAnswer: 1,
    explanation: "Separating gives $\\dfrac{dy}{y} = \\tan x\\,dx$, so $\\ln|y| = -\\ln|\\cos x| + C$, and exponentiating gives $y = C/\\cos x = C\\sec x$.\n\n$y = C\\cos x$ results from dropping the minus sign that arises from the integral of $\\tan x$, which equals $-\\ln|\\cos x|$.\n\n$y = C\\sin x$ and $y = C\\tan x$ do not follow from integrating $\\tan x$ correctly."
  },
  {
    id: "mth302_ch2_011",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "Which of the following equations is not exact?",
    options: [
      "$(2xy + 3)\\,dx + (x^2 + 4y)\\,dy = 0$",
      "$(y^2 + 2x)\\,dx + 2xy\\,dy = 0$",
      "$(3xy + y^2)\\,dx + (x^2 + xy)\\,dy = 0$",
      "$(y + x)\\,dx + (x - y^2)\\,dy = 0$"
    ],
    correctAnswer: 2,
    explanation: "Applying $M_y = N_x$ to $(3xy + y^2)\\,dx + (x^2 + xy)\\,dy = 0$ gives $M_y = 3x + 2y$ against $N_x = 2x + y$, which are unequal, so this equation fails to be exact, even though it does admit an integrating factor.\n\n$(2xy + 3)\\,dx + (x^2 + 4y)\\,dy = 0$ gives $M_y = 2x = N_x$, so it is exact.\n\n$(y^2 + 2x)\\,dx + 2xy\\,dy = 0$ gives $M_y = 2y = N_x$, so it is exact.\n\n$(y + x)\\,dx + (x - y^2)\\,dy = 0$ gives $M_y = 1 = N_x$, so it is exact."
  },
  {
    id: "mth302_ch2_012",
    course: "MTH 302",
    chapter: "Chapter 2",
    text: "An integrating factor depending on $x$ alone exists for $M\\,dx + N\\,dy = 0$ under which condition?",
    options: [
      "$M_y$ equals $N_x$",
      "$\\dfrac{M_y - N_x}{N}$ is a function of $x$ only",
      "$\\dfrac{M_y - N_x}{M}$ is a function of $x$ only",
      "$M$ and $N$ are both homogeneous"
    ],
    correctAnswer: 1,
    explanation: "When $\\dfrac{M_y - N_x}{N}$ depends on $x$ alone, the integrating factor $\\mu(x) = \\exp\\left(\\int \\dfrac{M_y - N_x}{N}\\,dx\\right)$ makes the equation exact.\n\n$M_y$ equals $N_x$ is the condition for the equation to already be exact, meaning no integrating factor is needed at all.\n\n$\\dfrac{M_y - N_x}{M}$ is a function of $x$ only is close in form but is actually the condition used to build the $y$-only integrating factor via $\\dfrac{N_x - M_y}{M}$ as a function of $y$.\n\n$M$ and $N$ are both homogeneous does not by itself guarantee an integrating factor depending on $x$ alone."
  }
];

export default mth302Chapter2;
