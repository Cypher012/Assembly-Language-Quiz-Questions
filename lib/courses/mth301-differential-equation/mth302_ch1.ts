import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter1: QuestionV2[] = [
  {
    id: "mth302_ch1_001",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $y'' = \\sqrt{1 + (y')^2}$?",
    options: [
      "Order $2$, degree $2$",
      "Order $2$, degree $1$",
      "Order $1$, degree $2$",
      "Order $2$, degree undefined"
    ],
    correctAnswer: 0,
    explanation: "Degree is read only after the equation is made polynomial in the derivatives. Squaring both sides gives $(y'')^2 = 1 + (y')^2$, so the highest derivative $y''$ is order $2$ and appears to the power $2$, giving degree $2$.\n\nOrder $2$, degree $1$ is what results if the radical is never cleared before reading the degree, which is the standard slip on this type of question.\n\nOrder $1$, degree $2$ mislabels the order, since $y''$ is the highest derivative present, not $y'$.\n\nOrder $2$, degree undefined would only apply if the equation could never be made polynomial in its derivatives, which is not the case once the radical is squared away."
  },
  {
    id: "mth302_ch1_002",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What are the order and degree of $(y')^5 + y'' + y = x$?",
    options: [
      "Order $5$, degree $2$",
      "Order $2$, degree $5$",
      "Order $2$, degree $1$",
      "Order $1$, degree $5$"
    ],
    correctAnswer: 2,
    explanation: "Degree refers to the power of the highest-order derivative present, which here is $y''$, and it appears linearly, giving degree $1$. The order is $2$ since $y''$ is the highest derivative in the equation.\n\nOrder $5$, degree $2$ and order $2$, degree $5$ both mistake the power on the lower-order derivative $y'$ for the degree; that fifth power is irrelevant to degree since it does not sit on the highest-order term.\n\nOrder $1$, degree $5$ reverses order and degree entirely."
  },
  {
    id: "mth302_ch1_003",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "What is the degree of $y' + \\sin(y') = x$?",
    options: [
      "$1$",
      "$2$",
      "$0$",
      "Not defined"
    ],
    correctAnswer: 3,
    explanation: "Degree is defined only for equations that are polynomial in the derivatives. Because of $\\sin(y')$, this equation cannot be made polynomial in $y'$ by any algebraic manipulation, so its degree is not defined.\n\n$1$ assumes the derivative appears to the first power the way it would in a polynomial equation, which does not apply here.\n\n$2$ has no basis in the equation as written.\n\n$0$ would imply no derivative is present at all, which is false since $y'$ appears explicitly."
  },
  {
    id: "mth302_ch1_004",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following differential equations is nonlinear?",
    options: [
      "$y'' + xy' + y = x^2$",
      "$x^2 y'' + xy' + y = e^x$",
      "$y'' + yy' = 0$",
      "$y'' + 3y' + 2y = \\sin x$"
    ],
    correctAnswer: 2,
    explanation: "Linearity forbids products of the unknown function with its own derivatives, and $yy'$ is exactly such a product, making $y'' + yy' = 0$ nonlinear.\n\n$y'' + xy' + y = x^2$ and $x^2 y'' + xy' + y = e^x$ both have variable coefficients, which is fully compatible with linearity since linearity constrains how $y$ appears, not how $x$ appears.\n\n$y'' + 3y' + 2y = \\sin x$ has a nonzero forcing term, which likewise does not affect linearity."
  },
  {
    id: "mth302_ch1_005",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How should the first-order PDE $u_x^2 + u_y = 0$ be classified?",
    options: [
      "Order $1$, degree $2$, nonlinear",
      "Order $2$, degree $1$, linear",
      "Order $1$, degree $1$, quasilinear",
      "Order $2$, degree $2$, nonlinear"
    ],
    correctAnswer: 0,
    explanation: "The highest partial derivative present is first order; it appears squared, giving degree $2$, and a squared derivative term makes the whole equation nonlinear.\n\nOrder $2$, degree $1$, linear misstates the order, since no second derivative appears at all.\n\nOrder $1$, degree $1$, quasilinear is wrong because a quasilinear equation requires the highest derivative to appear linearly, and here it is squared.\n\nOrder $2$, degree $2$, nonlinear again wrongly assigns order $2$."
  },
  {
    id: "mth302_ch1_006",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How many arbitrary constants does the general solution of a third-order ordinary differential equation contain?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "An arbitrary function"
    ],
    correctAnswer: 2,
    explanation: "An $n$th-order ODE requires $n$ integrations to reach its general solution, so a third-order equation carries exactly $3$ arbitrary constants.\n\n$1$ and $2$ both undercount the number of integrations needed.\n\nAn arbitrary function belongs to the general solution of a partial differential equation, not an ordinary one, so it does not apply here."
  },
  {
    id: "mth302_ch1_007",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following is a boundary value problem?",
    options: [
      "$y'' + y = 0$, $y(0) = 1$, $y'(0) = 2$",
      "$y' + y = x$, $y(1) = 0$",
      "$y'' + y = 0$, $y(0) = 0$, $y(\\pi/2) = 1$",
      "$y'' = x$, $y(2) = 1$, $y'(2) = 3$"
    ],
    correctAnswer: 2,
    explanation: "A boundary value problem prescribes conditions at two or more distinct points, and $y(0) = 0$, $y(\\pi/2) = 1$ does exactly that.\n\n$y'' + y = 0$, $y(0) = 1$, $y'(0) = 2$ and $y'' = x$, $y(2) = 1$, $y'(2) = 3$ both give all their data at a single point, making them initial value problems instead.\n\n$y' + y = x$, $y(1) = 0$ is a first-order initial value problem, since only one condition at one point is needed to fix its single arbitrary constant."
  },
  {
    id: "mth302_ch1_008",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How many solutions does the boundary value problem $y'' + y = 0$, $y(0) = 0$, $y(\\pi) = 0$ have?",
    options: [
      "No solution",
      "Exactly one solution",
      "Exactly two solutions",
      "Infinitely many solutions"
    ],
    correctAnswer: 3,
    explanation: "The general solution is $y = A\\cos x + B\\sin x$. The condition $y(0) = 0$ forces $A = 0$, and then $y(\\pi) = B\\sin(\\pi) = 0$ holds automatically for every value of $B$, so $y = B\\sin x$ satisfies the problem for infinitely many choices of $B$.\n\nNo solution is wrong since a whole family of solutions exists.\n\nExactly one solution and exactly two solutions both undercount the family, which is parametrized by the free constant $B$ and is therefore infinite."
  },
  {
    id: "mth302_ch1_009",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How is the PDE $uu_x + u_y = 0$ best described?",
    options: [
      "Linear",
      "Semilinear",
      "Quasilinear and nonlinear",
      "Fully nonlinear"
    ],
    correctAnswer: 2,
    explanation: "The highest derivatives $u_x$ and $u_y$ each appear to the first power, which satisfies the quasilinear condition, but the coefficient of $u_x$ is $u$ itself, a lower-order term, which makes the equation nonlinear as well.\n\nLinear is ruled out since the coefficient of $u_x$ depends on the unknown $u$, not only on the independent variables.\n\nSemilinear requires the highest-derivative coefficients to depend only on the independent variables, which fails here.\n\nFully nonlinear would require the highest derivatives themselves to appear nonlinearly, which is not the case since $u_x$ and $u_y$ each appear to the first power."
  },
  {
    id: "mth302_ch1_010",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Which of the following PDEs is linear?",
    options: [
      "$uu_x + u_y = 0$",
      "$u_x u_y + u = 0$",
      "$xu_x + yu_y + u = e^x$",
      "$u_{xx} + u^2 = 0$"
    ],
    correctAnswer: 2,
    explanation: "In $xu_x + yu_y + u = e^x$, the unknown and its derivatives all appear to the first power, are never multiplied together, and the coefficients $x$ and $y$ involve only the independent variables, satisfying every condition for linearity; the forcing term $e^x$ does not disturb this.\n\n$uu_x + u_y = 0$ fails because $u_x$ is multiplied by $u$.\n\n$u_x u_y + u = 0$ fails because two first derivatives are multiplied together.\n\n$u_{xx} + u^2 = 0$ is semilinear rather than linear because of the $u^2$ term."
  },
  {
    id: "mth302_ch1_011",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "How should $y'' + 3y' + 2y = x^7 e^x \\sin x$ be classified?",
    options: [
      "Nonlinear",
      "Linear, homogeneous",
      "Linear, nonhomogeneous, constant coefficients",
      "Linear with variable coefficients"
    ],
    correctAnswer: 2,
    explanation: "The left-hand side has constant coefficients and $y$ enters linearly, so the equation is linear with constant coefficients, and the nonzero right-hand side makes it nonhomogeneous regardless of how complicated that forcing term looks.\n\nNonlinear is wrong since $y$ and its derivatives appear only to the first power and are never multiplied together.\n\nLinear, homogeneous is wrong because the right-hand side is not zero.\n\nLinear with variable coefficients is wrong since every coefficient on the left is a constant."
  },
  {
    id: "mth302_ch1_012",
    course: "MTH 302",
    chapter: "Chapter 1",
    text: "Separating $\\dfrac{dy}{dx} = xy^2$ gives the family $y = \\dfrac{-2}{x^2 + C}$. Which function also solves the equation but does not appear in that family for any value of $C$?",
    options: [
      "$y = x$",
      "$y = e^x$",
      "$y = 1$",
      "$y = 0$"
    ],
    correctAnswer: 3,
    explanation: "Substituting $y = 0$ into the equation gives $0 = 0$, so it is a genuine solution, yet no finite value of $C$ in $\\dfrac{-2}{x^2 + C}$ ever produces the constant function $0$; it was lost precisely when the equation was divided by $y^2$ during separation, making it a singular solution.\n\n$y = x$, $y = e^x$, and $y = 1$ do not satisfy the original equation $\\dfrac{dy}{dx} = xy^2$ at all, so none of them are solutions in the first place."
  }
];

export default mth302Chapter1;
