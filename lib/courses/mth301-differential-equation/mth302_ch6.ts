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
      "One arbitrary function, one for each order of the equation",
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
  },
  {
    id: "mth302_ch6_013",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "In $a(x,y)u_x + b(x,y)u_y + c(x,y)u = f(x,y)$, what condition is imposed on $a$ and $b$?",
    options: [
      "They are not both zero at the same point, so a first-order term always survives",
      "They are both strictly positive throughout the region considered",
      "They are equal to one another everywhere in the region",
      "They depend on $u$ as well as on $x$ and $y$"
    ],
    correctAnswer: 0,
    explanation: "If $a$ and $b$ vanished together at a point the equation would carry no first-order derivative there, so the standing assumption is that they never vanish simultaneously.\n\nRequiring both to be positive is far stronger than the equation needs.\n\nRequiring them to be equal would collapse the family of characteristics to a single direction.\n\nDependence on $u$ would make the equation quasilinear rather than linear."
  },
  {
    id: "mth302_ch6_014",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "Which Jacobian must be nonzero for the change of variables $\\xi = \\phi(x,y)$, $\\eta = \\psi(x,y)$?",
    options: [
      "$\\phi_x\\psi_y - \\phi_y\\psi_x$",
      "$\\phi_x\\psi_y + \\phi_y\\psi_x$",
      "$\\phi_x\\phi_y - \\psi_x\\psi_y$, pairing each function with itself",
      "$\\phi_x + \\psi_y$, the sum of the two leading derivatives"
    ],
    correctAnswer: 0,
    explanation: "The Jacobian is the determinant of the matrix of partial derivatives, giving $\\phi_x\\psi_y - \\phi_y\\psi_x$, and it must not vanish for the transformation to be one-to-one.\n\nAdding rather than subtracting discards the determinant's alternating sign.\n\nPairing each function with its own derivatives is not the determinant of that matrix.\n\nA sum of two derivatives is not a determinant at all."
  },
  {
    id: "mth302_ch6_015",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "In the change-of-variables derivation, $\\eta$ is chosen so that which coefficient vanishes?",
    options: [
      "The coefficient of $w_\\eta$",
      "The coefficient of $w_\\xi$",
      "The coefficient of $w$ itself, removing the undifferentiated term",
      "The forcing term $F(\\xi,\\eta)$ on the right-hand side"
    ],
    correctAnswer: 0,
    explanation: "Imposing $a\\eta_x + b\\eta_y = 0$ kills the $w_\\eta$ term, leaving an equation involving only $w_\\xi$ and $w$, which is the desired simplified shape.\n\nRemoving the $w_\\xi$ term instead would destroy the derivative that carries the equation.\n\nThe coefficient of $w$ is not what the choice of $\\eta$ targets.\n\nThe forcing term cannot be removed by a change of variables."
  },
  {
    id: "mth302_ch6_016",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "The requirement $a\\eta_x + b\\eta_y = 0$ leads to which ratio when $\\eta_y \\neq 0$?",
    options: [
      "$\\dfrac{\\eta_x}{\\eta_y} = -\\dfrac{b}{a}$",
      "$\\dfrac{\\eta_x}{\\eta_y} = -\\dfrac{a}{b}$",
      "$\\dfrac{\\eta_x}{\\eta_y} = \\dfrac{b}{a}$, keeping a positive sign throughout",
      "$\\dfrac{\\eta_x}{\\eta_y} = ab$, formed as a product of the coefficients"
    ],
    correctAnswer: 0,
    explanation: "Rearranging $a\\eta_x + b\\eta_y = 0$ gives $\\eta_x/\\eta_y = -b/a$, which is what produces the characteristic direction.\n\nInverting the ratio of coefficients reverses the roles of $a$ and $b$.\n\nDropping the minus sign contradicts the rearrangement.\n\nA product of the coefficients does not arise from solving this linear relation."
  },
  {
    id: "mth302_ch6_017",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "Which differential form is equivalent to the characteristic equation $\\dfrac{dy}{dx} = \\dfrac{b}{a}$?",
    options: [
      "$\\dfrac{dx}{a} = \\dfrac{dy}{b}$",
      "$\\dfrac{dx}{b} = \\dfrac{dy}{a}$",
      "$a\\,dx = b\\,dy$, multiplying rather than dividing by the coefficients",
      "$\\dfrac{dx}{dy} = \\dfrac{b}{a}$, keeping the same ratio on the right"
    ],
    correctAnswer: 0,
    explanation: "Cross-multiplying $dy/dx = b/a$ gives $b\\,dx = a\\,dy$, which is the same as $\\dfrac{dx}{a} = \\dfrac{dy}{b}$, so the coefficient of $u_x$ sits under $dx$.\n\nExchanging the coefficients is precisely the reversal that this topic warns against.\n\nMultiplying by the coefficients instead of dividing inverts the relation.\n\nWriting $dx/dy$ with the same right-hand side flips only one side of the equation."
  },
  {
    id: "mth302_ch6_018",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $4u_x + 2u_y + u = 0$, what is $\\dfrac{dy}{dx}$ along a characteristic?",
    options: [
      "$\\dfrac{1}{2}$",
      "$2$",
      "$4$, using only the coefficient of the first derivative term",
      "$-\\dfrac{1}{2}$, with a sign introduced from the relation"
    ],
    correctAnswer: 0,
    explanation: "Here $a = 4$ and $b = 2$, so $dy/dx = b/a = 2/4 = 1/2$.\n\nTaking $a/b$ gives $2$ and reverses the ratio, which is the most common error in this topic.\n\nUsing $a$ alone ignores the coefficient of $u_y$ entirely.\n\nThe characteristic slope carries no extra minus sign here."
  },
  {
    id: "mth302_ch6_019",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What happens to the PDE along a characteristic curve?",
    options: [
      "It degenerates into an ODE, since only differentiation in $\\xi$ survives",
      "It becomes an algebraic equation with no derivatives remaining at all",
      "It gains an extra independent variable and rises in order",
      "It becomes homogeneous regardless of the original forcing term"
    ],
    correctAnswer: 0,
    explanation: "Choosing $\\eta$ constant along characteristics removes the $w_\\eta$ term, so only differentiation in $\\xi$ survives and the PDE reduces to an ordinary differential equation.\n\nDerivatives do not disappear entirely; one derivative remains.\n\nThe method reduces rather than increases the number of active variables.\n\nThe forcing term is unaffected by the change of variables."
  },
  {
    id: "mth302_ch6_020",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $x^2u_x + yu_y + xyu = 1$, what are $a$, $b$, $c$ and $f$?",
    options: [
      "$a = x^2$, $b = y$, $c = xy$, $f = 1$",
      "$a = y$, $b = x^2$, $c = xy$, $f = 1$",
      "$a = x^2$, $b = y$, $c = 1$, $f = xy$",
      "$a = x^2$, $b = xy$, $c = y$, $f = 1$"
    ],
    correctAnswer: 0,
    explanation: "Matching against $au_x + bu_y + cu = f$ reads $a$ from the coefficient of $u_x$, $b$ from that of $u_y$, $c$ from that of $u$, and $f$ from the right-hand side.\n\nSwapping $a$ and $b$ misassigns the two first-order coefficients.\n\nExchanging $c$ and $f$ confuses the undifferentiated coefficient with the forcing term.\n\nAssigning $xy$ to $b$ misreads which term multiplies $u_y$."
  },
  {
    id: "mth302_ch6_021",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $x^2u_x + yu_y + xyu = 1$, what is the characteristic relation obtained by integration?",
    options: [
      "$\\ln y + \\dfrac{1}{x} = K$",
      "$\\ln y - \\dfrac{1}{x} = K$",
      "$\\ln x + \\dfrac{1}{y} = K$, interchanging the roles of the two variables",
      "$\\ln y + \\ln x = K$, integrating both sides as logarithms"
    ],
    correctAnswer: 0,
    explanation: "From $dy/dx = y/x^2$ we get $dy/y = dx/x^2$, so $\\ln y = -1/x + K$, that is $\\ln y + 1/x = K$.\n\nReversing the sign of the reciprocal contradicts the integral of $x^{-2}$.\n\nInterchanging $x$ and $y$ misreads which variable is separated.\n\nIntegrating $dx/x^2$ as a logarithm ignores the square in the denominator."
  },
  {
    id: "mth302_ch6_022",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "With $\\xi = x$ and $\\eta = \\ln y + \\dfrac{1}{x}$, what is the Jacobian?",
    options: [
      "$\\dfrac{1}{y}$",
      "$y$",
      "$-\\dfrac{1}{x^2}$, taken from the derivative of the reciprocal term",
      "$1$, since $\\xi$ equals $x$ exactly"
    ],
    correctAnswer: 0,
    explanation: "With $\\xi_x = 1$, $\\xi_y = 0$, $\\eta_y = 1/y$, the determinant is $\\xi_x\\eta_y - \\xi_y\\eta_x = 1\\cdot\\dfrac{1}{y} - 0 = \\dfrac{1}{y}$.\n\nTaking $y$ inverts the computed value.\n\nThe quantity $-1/x^2$ is $\\eta_x$, which is multiplied by the vanishing $\\xi_y$.\n\nThe value $1$ ignores the factor $\\eta_y$ altogether."
  },
  {
    id: "mth302_ch6_023",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "By the chain rule, what does $u_x$ become under $\\xi = \\phi(x,y)$, $\\eta = \\psi(x,y)$?",
    options: [
      "$w_\\xi\\xi_x + w_\\eta\\eta_x$",
      "$w_\\xi\\xi_y + w_\\eta\\eta_y$",
      "$w_\\xi + w_\\eta$, omitting the derivatives of the new variables",
      "$w_\\xi\\eta_x + w_\\eta\\xi_x$, pairing each derivative with the other variable"
    ],
    correctAnswer: 0,
    explanation: "Differentiating $w(\\xi,\\eta)$ with respect to $x$ gives $w_\\xi\\xi_x + w_\\eta\\eta_x$.\n\nUsing the $y$ derivatives produces the expression for $u_y$, not $u_x$.\n\nDropping the factors $\\xi_x$ and $\\eta_x$ discards the chain rule entirely.\n\nPairing $w_\\xi$ with $\\eta_x$ crosses the two contributions."
  },
  {
    id: "mth302_ch6_024",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "After substituting the chain-rule expressions, the coefficient of $w_\\xi$ in the transformed equation is which combination?",
    options: [
      "$a\\xi_x + b\\xi_y$",
      "$a\\eta_x + b\\eta_y$",
      "$a\\xi_x - b\\xi_y$, with the two contributions subtracted",
      "$\\xi_x + \\xi_y$, omitting the coefficients of the equation"
    ],
    correctAnswer: 0,
    explanation: "Collecting terms gives $(a\\xi_x + b\\xi_y)w_\\xi + (a\\eta_x + b\\eta_y)w_\\eta + cw = f$, so the coefficient of $w_\\xi$ is $a\\xi_x + b\\xi_y$.\n\nThe combination in $\\eta$ is the one deliberately made to vanish.\n\nSubtracting the two contributions misreads the collection of terms.\n\nDropping $a$ and $b$ loses the coefficients of the original equation."
  },
  {
    id: "mth302_ch6_025",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "Why is $\\eta$ chosen to be constant along the characteristic curves?",
    options: [
      "So that the two $w_\\eta$ terms cancel exactly",
      "So that the Jacobian automatically equals one at every point of the domain",
      "So that the forcing term is removed from the transformed equation entirely",
      "So that $\\xi$ can be taken equal to $u$ rather than to $x$"
    ],
    correctAnswer: 0,
    explanation: "Constancy of $\\eta$ along characteristics is exactly the condition $a\\eta_x + b\\eta_y = 0$, which makes the $w_\\eta$ contributions cancel and leaves an ODE.\n\nThe Jacobian must merely be nonzero, and it is not forced to equal one.\n\nThe forcing term persists through the transformation.\n\nThe new variable $\\xi$ is a function of $x$ and $y$, not of the unknown $u$."
  },
  {
    id: "mth302_ch6_026",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $u_x + 3u_y = 0$?",
    options: [
      "$3x - y = \\text{const}$",
      "$x - 3y = \\text{const}$",
      "$x + 3y = \\text{const}$",
      "$3x + y = \\text{const}$, combining the coefficients additively"
    ],
    correctAnswer: 0,
    explanation: "With $a = 1$ and $b = 3$ we get $dy/dx = 3$, so $y = 3x + c$ and the characteristics are $3x - y = \\text{const}$.\n\nThe form $x - 3y$ arises from taking $dy/dx = 1/3$, which reverses the ratio.\n\nA plus sign contradicts integrating $dy = 3\\,dx$.\n\nThe combination $3x + y$ likewise carries the wrong sign."
  },
  {
    id: "mth302_ch6_027",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the quasilinear equation $fu_x + gu_y = h$, in which space do the characteristics live?",
    options: [
      "$(x, y, u)$ space, since the coefficients may involve $u$",
      "The $(x, y)$ plane alone",
      "The $(\\xi, \\eta)$ plane of the transformed variables",
      "A four-dimensional space including both $u$ and its derivatives"
    ],
    correctAnswer: 0,
    explanation: "Because the coefficients may depend on $u$, the characteristic curves are determined in $(x, y, u)$ space rather than in the plane.\n\nRestricting to the plane is valid only when the coefficients are free of $u$.\n\nThe transformed variables describe the target coordinates, not where the characteristics live.\n\nThe derivatives of $u$ are not additional coordinates for these curves."
  },
  {
    id: "mth302_ch6_028",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $fu_x + gu_y = h$, the characteristics satisfy which system?",
    options: [
      "$\\dfrac{dx}{f} = \\dfrac{dy}{g} = \\dfrac{du}{h}$",
      "$\\dfrac{dx}{g} = \\dfrac{dy}{f} = \\dfrac{du}{h}$",
      "$\\dfrac{dx}{f} = \\dfrac{dy}{g}$ only",
      "$\\dfrac{dx}{h} = \\dfrac{dy}{g} = \\dfrac{du}{f}$, with the outer denominators exchanged"
    ],
    correctAnswer: 0,
    explanation: "The coefficient of each derivative sits under the corresponding differential, and the right-hand side sits under $du$, giving the stated system.\n\nExchanging the first two denominators reverses the characteristic direction.\n\nOmitting the $du$ ratio would force $u$ to be constant, which holds only when $h = 0$.\n\nExchanging the outer denominators misassigns both $f$ and $h$."
  },
  {
    id: "mth302_ch6_029",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For the Cauchy problem, what must be true of the curve carrying the initial data?",
    options: [
      "It must not be a characteristic curve",
      "It must coincide with a characteristic curve throughout its length",
      "It must be a straight line through the origin of the plane",
      "It must be closed and bounded within the region of interest"
    ],
    correctAnswer: 0,
    explanation: "Data prescribed along a characteristic either contradicts the equation or fails to determine the solution off that curve, so the initial curve must be non-characteristic.\n\nRequiring it to be a characteristic is exactly the situation in which uniqueness fails.\n\nNothing requires the curve to be straight or to pass through the origin.\n\nNo closedness or boundedness condition is imposed on the initial curve."
  },
  {
    id: "mth302_ch6_030",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "The general solution of a first-order PDE in two variables contains what?",
    options: [
      "One arbitrary function",
      "One arbitrary constant",
      "Two arbitrary functions, one for each independent variable present",
      "No arbitrary element once the coefficients are specified"
    ],
    correctAnswer: 0,
    explanation: "A PDE carries one arbitrary function per order, so a first-order equation has exactly one.\n\nOffering a constant of integration for a PDE is the standard cross-topic distractor.\n\nTwo arbitrary functions would correspond to a second-order equation.\n\nA general solution must retain an arbitrary element."
  },
  {
    id: "mth302_ch6_031",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $u_x - u_y = 0$?",
    options: [
      "$x + y = \\text{const}$",
      "$x - y = \\text{const}$",
      "$xy = \\text{const}$",
      "$x^2 + y^2 = \\text{const}$, treating the curves as circles"
    ],
    correctAnswer: 0,
    explanation: "With $a = 1$ and $b = -1$ we get $dy/dx = -1$, so $y = -x + c$ and the characteristics are $x + y = \\text{const}$.\n\nThe combination $x - y$ would follow from a slope of $+1$.\n\nA product of the variables does not arise from a constant slope.\n\nCircles would require a slope depending on position."
  },
  {
    id: "mth302_ch6_032",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "The transformed equation takes which general shape?",
    options: [
      "$w_\\xi + h(\\xi,\\eta)w = F(\\xi,\\eta)$",
      "$w_\\eta + h(\\xi,\\eta)w = F(\\xi,\\eta)$",
      "$w_{\\xi\\eta} + h(\\xi,\\eta)w = F(\\xi,\\eta)$",
      "$w_\\xi + w_\\eta = F(\\xi,\\eta)$, keeping both first derivatives present"
    ],
    correctAnswer: 0,
    explanation: "Eliminating the $w_\\eta$ term leaves a first-order equation in $\\xi$ alone, namely $w_\\xi + h w = F$.\n\nDifferentiating in $\\eta$ contradicts the choice that removed that term.\n\nA mixed second derivative cannot appear, since the original equation is first order.\n\nRetaining both derivatives defeats the purpose of the transformation."
  },
  {
    id: "mth302_ch6_033",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "Why must the Jacobian be nonzero on the domain?",
    options: [
      "So the change of variables is one-to-one there and can therefore be inverted",
      "So the transformed equation becomes homogeneous rather than nonhomogeneous",
      "So the characteristic curves intersect at exactly one point of the region",
      "So the coefficients of the original equation remain bounded everywhere"
    ],
    correctAnswer: 0,
    explanation: "A nonvanishing Jacobian is what guarantees the map from $(x,y)$ to $(\\xi,\\eta)$ is invertible, so the transformation can be undone.\n\nHomogeneity is unaffected by a change of variables.\n\nCharacteristics of the same family do not intersect, and the Jacobian is not about intersections.\n\nBoundedness of the coefficients is a separate continuity assumption."
  },
  {
    id: "mth302_ch6_034",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $2u_x - 5u_y = 0$, what is $\\dfrac{dy}{dx}$ along a characteristic?",
    options: [
      "$-\\dfrac{5}{2}$",
      "$-\\dfrac{2}{5}$",
      "$\\dfrac{5}{2}$",
      "$\\dfrac{2}{5}$, both inverting the ratio and dropping the sign"
    ],
    correctAnswer: 0,
    explanation: "With $a = 2$ and $b = -5$ the characteristic equation gives $dy/dx = b/a = -5/2$.\n\nInverting the ratio produces $-2/5$ and reverses the roles of the coefficients.\n\nDropping the minus sign contradicts the negative coefficient of $u_y$.\n\nCombining both errors gives $2/5$."
  },
  {
    id: "mth302_ch6_035",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "In the derivation, what does $w(\\xi,\\eta)$ denote?",
    options: [
      "The unknown $u$ expressed in the new variables",
      "The Jacobian of the transformation between the two coordinate systems",
      "The forcing term rewritten in the new coordinates",
      "The characteristic curve itself, parametrised by $\\xi$"
    ],
    correctAnswer: 0,
    explanation: "By definition $w(\\xi,\\eta) = u(x(\\xi,\\eta), y(\\xi,\\eta))$, so $w$ is simply $u$ seen in the new coordinates.\n\nThe Jacobian is a determinant of derivatives, not the unknown function.\n\nThe forcing term is written as $F(\\xi,\\eta)$, a separate object.\n\nA characteristic curve is a locus in the plane, not the dependent variable."
  },
  {
    id: "mth302_ch6_036",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "For $u_x + 2u_y = 0$, what is the general solution?",
    options: [
      "$u = F(2x - y)$",
      "$u = F(x - 2y)$",
      "$u = F(2x + y)$",
      "$u = Ce^{2x - y}$, offering a constant rather than an arbitrary function"
    ],
    correctAnswer: 0,
    explanation: "The characteristics satisfy $dy/dx = 2$, giving $2x - y = \\text{const}$, and since $c = 0$ the solution is constant along them, so $u = F(2x - y)$.\n\nThe combination $x - 2y$ comes from inverting the ratio.\n\nA plus sign contradicts integrating $dy = 2\\,dx$.\n\nA PDE requires an arbitrary function, not an arbitrary constant."
  },
  {
    id: "mth302_ch6_037",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "Which term in $au_x + bu_y + cu = f$ makes the equation nonhomogeneous?",
    options: [
      "A nonzero $f$",
      "A nonzero $c$, since it multiplies the undifferentiated unknown",
      "A nonconstant $a$, because it varies across the region",
      "A nonzero $b$, since it introduces a second derivative direction"
    ],
    correctAnswer: 0,
    explanation: "Homogeneity concerns the term free of $u$, so the equation is nonhomogeneous exactly when $f \\neq 0$.\n\nThe coefficient $c$ multiplies $u$ and so belongs to the homogeneous part.\n\nVariable coefficients affect neither linearity nor homogeneity.\n\nThe coefficient $b$ multiplies a derivative of $u$ and is part of the homogeneous structure."
  },
  {
    id: "mth302_ch6_038",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "What are the characteristic curves of $yu_x + xu_y = 0$?",
    options: [
      "$x^2 - y^2 = \\text{const}$",
      "$x^2 + y^2 = \\text{const}$, which would follow from a sign change in the relation",
      "$xy = \\text{const}$, obtained by inverting the ratio of the coefficients",
      "$x - y = \\text{const}$, treating the coefficients as constants"
    ],
    correctAnswer: 0,
    explanation: "Here $dy/dx = x/y$, so $y\\,dy = x\\,dx$ and integrating gives $y^2/2 = x^2/2 + c$, that is $x^2 - y^2 = \\text{const}$.\n\nA sum of squares would require $y\\,dy = -x\\,dx$.\n\nThe product $xy$ arises from $dy/dx = -y/x$, which reverses the coefficients.\n\nA linear combination would require constant coefficients."
  },
  {
    id: "mth302_ch6_039",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "In the worked transformation of $x^2u_x + yu_y + xyu = 1$, what happens to the two $w_\\eta$ terms?",
    options: [
      "They cancel exactly",
      "They combine into a single term with a doubled coefficient",
      "They are discarded as negligible compared with the other terms",
      "They are absorbed into the forcing term on the right-hand side"
    ],
    correctAnswer: 0,
    explanation: "Choosing $\\eta$ along the characteristics guarantees $a\\eta_x + b\\eta_y = 0$, so the two contributions cancel exactly, which is the whole point of the choice.\n\nA doubled coefficient would mean they reinforced rather than cancelled.\n\nNothing is discarded as negligible; the cancellation is exact.\n\nThe forcing term is untouched by this cancellation."
  },
  {
    id: "mth302_ch6_040",
    course: "MTH 302",
    chapter: "Chapter 6",
    text: "The method of characteristics converts a first-order PDE into what, along each characteristic?",
    options: [
      "An ordinary differential equation, integrable along that curve",
      "A system of two coupled partial differential equations in the new variables",
      "An algebraic identity involving no derivatives whatsoever",
      "A second-order equation in the transformed coordinates"
    ],
    correctAnswer: 0,
    explanation: "Along a characteristic only differentiation in $\\xi$ survives, so the PDE reduces to an ODE that can be integrated directly.\n\nThe method reduces the problem rather than producing a coupled system.\n\nOne derivative remains, so the result is not purely algebraic.\n\nThe order is preserved, so no second derivative appears."
  }
];

export default mth302Chapter6;
