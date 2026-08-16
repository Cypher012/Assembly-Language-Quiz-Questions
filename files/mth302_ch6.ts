import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter6: QuestionV2[] = [
  {
    id: "mth302_ch6_001",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $a(x, y)u_x + b(x, y)u_y + c(x, y)u = f(x, y)$, what is the characteristic equation?",
    options: [
      "$\\dfrac{dy}{dx} = \\dfrac{a}{b}$",
      "$\\dfrac{dy}{dx} = \\dfrac{b}{a}$",
      "$\\dfrac{dy}{dx} = -\\dfrac{b}{a}$",
      "$\\dfrac{dy}{dx} = \\dfrac{c}{a}$"
    ],
    correctAnswer: 1,
    explanation: "Choosing $\\eta$ so that $a\\eta_x + b\\eta_y = 0$ and setting $d\\eta = \\eta_x\\,dx + \\eta_y\\,dy = 0$ leads directly to $\\dfrac{dy}{dx} = -\\dfrac{\\eta_x}{\\eta_y} = \\dfrac{b}{a}$, equivalently $\\dfrac{dx}{a} = \\dfrac{dy}{b}$, where the coefficient of $u_x$ sits under $dx$. Inverting this ratio is the single most common error in the topic.\n\n$\\dfrac{dy}{dx} = \\dfrac{a}{b}$ inverts the correct ratio.\n\n$\\dfrac{dy}{dx} = -\\dfrac{b}{a}$ introduces a sign that does not belong in the standard characteristic equation.\n\n$\\dfrac{dy}{dx} = \\dfrac{c}{a}$ confuses the zeroth-order coefficient $c$ with the coefficient $b$ that actually belongs in the ratio."
  },
  {
    id: "mth302_ch6_002",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $4u_x + 2u_y + u = 0$?",
    options: [
      "$2x - y = $ constant",
      "$x - 2y = $ constant",
      "$x + 2y = $ constant",
      "$4x - 2y = $ constant"
    ],
    correctAnswer: 1,
    explanation: "Using $\\dfrac{dy}{dx} = \\dfrac{b}{a} = \\dfrac{2}{4} = \\dfrac{1}{2}$ gives $y = x/2 + c$, which rearranges to $x - 2y = $ constant.\n\n$2x - y = $ constant results from using $a/b$ instead of the correct ratio $b/a$.\n\n$x + 2y = $ constant and $4x - 2y = $ constant do not follow from correctly solving $\\dfrac{dy}{dx} = \\dfrac{1}{2}$."
  },
  {
    id: "mth302_ch6_003",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $4u_x + 2u_y + u = 0$?",
    options: [
      "$u = e^{-x/4}F(x - 2y)$",
      "$u = e^{-x/2}F(x - 2y)$",
      "$u = e^{-x/4}F(2x - y)$",
      "$u = e^{-x/4} + F(x - 2y)$"
    ],
    correctAnswer: 0,
    explanation: "Along the characteristics $x - 2y = $ constant, the equation reduces to $\\dfrac{du}{dx} = -\\dfrac{u}{4}$, giving $u = e^{-x/4}F(x - 2y)$ with $F$ an arbitrary function, which can be checked directly by substitution since the $F'$ terms cancel exactly.\n\n$e^{-x/2}F(x - 2y)$ has the wrong constant in the exponent.\n\n$e^{-x/4}F(2x - y)$ has the correct exponential factor but the wrong characteristic variable.\n\n$e^{-x/4} + F(x - 2y)$ is structurally wrong: since the equation is homogeneous and linear, the arbitrary function must multiply the exponential factor, not be added to it."
  },
  {
    id: "mth302_ch6_004",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $2u_x - 5u_y = 0$?",
    options: [
      "$u = F(5x + 2y)$",
      "$u = F(2x + 5y)$",
      "$u = F(5x - 2y)$",
      "$u = F(2x - 5y)$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\dfrac{dy}{dx} = -\\dfrac{5}{2}$, so $2y = -5x + c$, which rearranges to $5x + 2y = $ constant, giving $u = F(5x + 2y)$. Verification: $u_x = 5F'$, $u_y = 2F'$, so $2(5F') - 5(2F') = 0$ as required. In general, for $au_x + bu_y = 0$ the solution is $u = F(bx - ay)$.\n\n$F(2x + 5y)$ swaps the coefficients incorrectly.\n\n$F(5x - 2y)$ and $F(2x - 5y)$ have the wrong sign between the terms."
  },
  {
    id: "mth302_ch6_005",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $3u_x + u_y + 2u = 0$?",
    options: [
      "$u = e^{-2x/3}F(x - 3y)$",
      "$u = e^{-2x}F(x - 3y)$",
      "$u = e^{-2x/3}F(3x - y)$",
      "$u = e^{-2y}F(x + 3y)$"
    ],
    correctAnswer: 0,
    explanation: "The characteristics satisfy $\\dfrac{dy}{dx} = \\dfrac{1}{3}$, so $x - 3y = $ constant. Along them, $3\\dfrac{du}{dx} = -2u$, giving $u = e^{-2x/3}F(x - 3y)$.\n\n$e^{-2x}F(x - 3y)$ forgets to divide the exponent by the coefficient $a = 3$ when integrating along the characteristic.\n\n$e^{-2x/3}F(3x - y)$ has the correct exponential factor but the wrong characteristic variable.\n\n$e^{-2y}F(x + 3y)$ uses the wrong variable in the exponential decay and the wrong sign in the characteristic argument."
  },
  {
    id: "mth302_ch6_006",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $u_{xy} + u_x = 0$?",
    options: [
      "$u = e^{-y}A(x) + B(y)$",
      "$u = e^{-x}A(y) + B(x)$",
      "$u = e^{-y}A(x)$",
      "$u = A(x) + B(y)$"
    ],
    correctAnswer: 0,
    explanation: "Setting $p = u_x$ turns the equation into $p_y + p = 0$, giving $p = F(x)e^{-y}$; integrating in $x$ then gives $u = e^{-y}A(x) + B(y)$, where $A' = F$. Every second-order PDE requires two arbitrary functions in its general solution.\n\n$e^{-x}A(y) + B(x)$ mismatches which variable the exponential decay applies to.\n\n$e^{-y}A(x)$ contains only one arbitrary function, which is insufficient for a second-order PDE.\n\n$A(x) + B(y)$ omits the exponential factor entirely, ignoring the $u_x$ term in the original equation."
  },
  {
    id: "mth302_ch6_007",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $u_{xx} - 4u = 0$, treating $u$ as a function of $x$ and $y$?",
    options: [
      "$P(y)e^{2x} + Q(y)e^{-2x}$",
      "$P(x)e^{2y} + Q(x)e^{-2y}$",
      "$C_1e^{2x} + C_2e^{-2x}$",
      "$P(y)\\cos 2x + Q(y)\\sin 2x$"
    ],
    correctAnswer: 0,
    explanation: "Since only $x$-derivatives appear, $y$ acts as a parameter, and the auxiliary equation $r^2 - 4 = 0$ gives $r = \\pm 2$. The constants of integration then become arbitrary functions of the parameter $y$, giving $P(y)e^{2x} + Q(y)e^{-2x}$.\n\n$P(x)e^{2y} + Q(x)e^{-2y}$ mismatches which variable carries the arbitrary function.\n\n$C_1e^{2x} + C_2e^{-2x}$ is the correct form for an ODE but misses the necessary dependence on $y$.\n\n$P(y)\\cos 2x + Q(y)\\sin 2x$ would be correct only for the equation $u_{xx} + 4u = 0$, since the roots here are real, not imaginary."
  },
  {
    id: "mth302_ch6_008",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What is the general solution of $u_{xy} - 2u_x = 0$?",
    options: [
      "$u = e^{2y}A(x) + B(y)$",
      "$u = e^{-2y}A(x) + B(y)$",
      "$u = e^{2x}A(y) + B(x)$",
      "$u = 2yA(x) + B(y)$"
    ],
    correctAnswer: 0,
    explanation: "With $p = u_x$, the equation $p_y - 2p = 0$ gives $p = F(x)e^{2y}$, so $u = e^{2y}A(x) + B(y)$. The sign of the exponent follows the sign in the equation: $p_y = 2p$ means growth in $y$, not decay.\n\n$e^{-2y}A(x) + B(y)$ has the wrong sign in the exponent.\n\n$e^{2x}A(y) + B(x)$ mismatches which variable the exponential applies to.\n\n$2yA(x) + B(y)$ fails to exponentiate at all, treating the equation as if it were linear in $y$ rather than exponential."
  },
  {
    id: "mth302_ch6_009",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For a change of variables $\\xi = \\phi(x, y)$, $\\eta = \\psi(x, y)$ to be admissible in transforming a first-order PDE, what condition must hold?",
    options: [
      "$\\phi$ equals $\\psi$",
      "The Jacobian $J = \\phi_x\\psi_y - \\phi_y\\psi_x$ is nonzero",
      "The Jacobian $J$ equals zero",
      "$\\phi$ and $\\psi$ are both constant"
    ],
    correctAnswer: 1,
    explanation: "A nonvanishing Jacobian is exactly the condition for the transformation to be locally one-to-one, allowing it to be inverted so the solution can be transported back to the original variables $x$ and $y$.\n\n$\\phi$ equals $\\psi$ would make the two new coordinates identical, collapsing the transformation entirely.\n\nThe Jacobian $J$ equals zero is the opposite of what is required; a zero Jacobian means the transformation fails.\n\n$\\phi$ and $\\psi$ both constant would not define a valid coordinate change at all."
  },
  {
    id: "mth302_ch6_010",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "How many arbitrary functions appear in the general solution of a first-order PDE in two independent variables?",
    options: [
      "One arbitrary constant",
      "Two arbitrary constants",
      "One arbitrary function",
      "Two arbitrary functions"
    ],
    correctAnswer: 2,
    explanation: "Integrating along the characteristics replaces the constant of integration familiar from ODEs with a function that is constant along each characteristic curve, so a first-order PDE carries one arbitrary function in its general solution; a second-order PDE would require two.\n\nOne arbitrary constant and two arbitrary constants both wrongly apply the ODE pattern of constants rather than functions.\n\nTwo arbitrary functions is the count that applies to a second-order PDE, not a first-order one."
  },
  {
    id: "mth302_ch6_011",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the quasilinear equation $f(x, y, u)u_x + g(x, y, u)u_y = h(x, y, u)$, how are the characteristics determined?",
    options: [
      "$\\dfrac{du}{dt} = 0$",
      "$\\dfrac{dx}{dt} = h$, $\\dfrac{dy}{dt} = g$, $\\dfrac{du}{dt} = f$",
      "$\\dfrac{dy}{dx} = \\dfrac{f}{g}$ only",
      "$\\dfrac{dx}{dt} = f$, $\\dfrac{dy}{dt} = g$, $\\dfrac{du}{dt} = h$"
    ],
    correctAnswer: 3,
    explanation: "For quasilinear equations, the characteristics are curves in the three-dimensional $(x, y, u)$ space rather than just the $xy$-plane, because the coefficients depend on $u$; they satisfy $\\dfrac{dx}{dt} = f$, $\\dfrac{dy}{dt} = g$, $\\dfrac{du}{dt} = h$, and the solution surface is a union of such characteristic curves.\n\n$\\dfrac{du}{dt} = 0$ wrongly claims $u$ is constant along characteristics, which fails whenever $h$ is nonzero.\n\n$\\dfrac{dx}{dt} = h$, $\\dfrac{dy}{dt} = g$, $\\dfrac{du}{dt} = f$ mismatches which function governs which derivative.\n\n$\\dfrac{dy}{dx} = \\dfrac{f}{g}$ only reduces the problem back to a planar curve, missing the essential role of $u$ in the characteristics of a quasilinear equation."
  },
  {
    id: "mth302_ch6_012",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "Under what condition does the Cauchy problem for a first-order PDE have a unique solution?",
    options: [
      "When data are prescribed along a characteristic curve",
      "When data are prescribed nowhere",
      "When data are prescribed at a single point",
      "When data are prescribed along a non-characteristic curve"
    ],
    correctAnswer: 3,
    explanation: "Along a characteristic curve the PDE reduces to an ordinary differential equation, so data prescribed there are either inconsistent with that ODE, giving no solution, or already fully determined by it, giving infinitely many extensions. Data given on a curve that crosses the characteristics transversally propagate uniquely along them, giving a unique solution.\n\nWhen data are prescribed along a characteristic curve is exactly the problematic case that produces either no solution or infinitely many.\n\nWhen data are prescribed nowhere gives no information from which to construct a solution at all.\n\nWhen data are prescribed at a single point is insufficient information for a first-order PDE, which needs data along an entire curve."
  }
];

export default mth302Chapter6;
