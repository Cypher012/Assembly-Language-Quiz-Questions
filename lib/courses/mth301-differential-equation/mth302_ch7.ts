import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter7: QuestionV2[] = [
  {
    id: "mth302_ch7_001",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} + 6u_{xy} + 9u_{yy} = 0$ classified?",
    options: [
      "Elliptic",
      "Parabolic",
      "Hyperbolic",
      "Its type depends on $x$"
    ],
    correctAnswer: 1,
    explanation: "With $A = 1$, $B = 6$, $C = 9$, the discriminant $B^2 - 4AC = 36 - 36 = 0$, so the equation is parabolic. A perfect square in the second-order terms, since the operator is $(\\partial_x + 3\\partial_y)^2$ applied to $u$, is always parabolic.\n\nElliptic would require a negative discriminant, which is not the case here.\n\nHyperbolic would require a positive discriminant.\n\nIts type depends on $x$ is wrong since the coefficients here are constants, so the discriminant is the same at every point."
  },
  {
    id: "mth302_ch7_002",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is the Tricomi equation $yu_{xx} + u_{yy} = 0$ classified?",
    options: [
      "Elliptic everywhere",
      "Hyperbolic everywhere",
      "Hyperbolic for $y < 0$ and elliptic for $y > 0$",
      "Elliptic for $y < 0$ and hyperbolic for $y > 0$"
    ],
    correctAnswer: 2,
    explanation: "With $A = y$, $B = 0$, $C = 1$, the discriminant is $B^2 - 4AC = -4y$, which is positive, giving hyperbolic type, when $y < 0$, and negative, giving elliptic type, when $y > 0$; on $y = 0$ the equation is parabolic. Classification is a pointwise property, so no single global label applies to this equation.\n\nElliptic everywhere and hyperbolic everywhere both wrongly assign one type across the entire plane, ignoring the dependence on the sign of $y$.\n\nElliptic for $y < 0$ and hyperbolic for $y > 0$ has the two regions reversed."
  },
  {
    id: "mth302_ch7_003",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $(1 + x^2)u_{xx} + (1 + y^2)u_{yy} + xu_x + yu_y = 0$ classified?",
    options: [
      "Elliptic everywhere",
      "Parabolic on the coordinate axes",
      "Hyperbolic wherever $xy < 0$",
      "Elliptic only in the first quadrant"
    ],
    correctAnswer: 0,
    explanation: "Here $B = 0$, so the discriminant is $-4(1 + x^2)(1 + y^2)$, which is strictly negative for every real $x$ and $y$ since both factors are always at least $1$. The lower-order terms $xu_x + yu_y$ have no effect on the classification at all, since only $A$, $B$, and $C$ determine the type.\n\nParabolic on the coordinate axes and hyperbolic wherever $xy < 0$ both wrongly assume the discriminant can vanish or turn positive, which never happens for this equation.\n\nElliptic only in the first quadrant wrongly restricts a classification that in fact holds everywhere."
  },
  {
    id: "mth302_ch7_004",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $u_{xx} + xu_{xy} + yu_{yy} = 0$, in which region is the equation hyperbolic?",
    options: [
      "$y > x^2/4$",
      "$y > x^2$",
      "$y < x^2/4$",
      "$x > y^2$"
    ],
    correctAnswer: 2,
    explanation: "The discriminant is $B^2 - 4AC = x^2 - 4y$, which is positive, giving hyperbolic type, exactly when $y < x^2/4$, that is, below the parabola $y = x^2/4$. On that curve the equation is parabolic, and above it the equation is elliptic.\n\n$y > x^2/4$ is the elliptic region, the opposite of hyperbolic.\n\n$y > x^2$ and $x > y^2$ do not match the correct discriminant expression $x^2 - 4y$."
  },
  {
    id: "mth302_ch7_005",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} - 2u_{xy} = 0$ classified?",
    options: [
      "Parabolic",
      "Elliptic",
      "Hyperbolic",
      "Not classifiable"
    ],
    correctAnswer: 2,
    explanation: "With $A = 1$, $B = -2$, $C = 0$, the discriminant is $B^2 - 4AC = 4$, which is positive, so the equation is hyperbolic. Whenever $C$ equals $0$ with $B$ nonzero, the discriminant reduces to $B^2$, which is automatically positive, giving a hyperbolic classification.\n\nParabolic would require the discriminant to equal zero, which it does not here.\n\nElliptic would require a negative discriminant, the opposite of what is found.\n\nNot classifiable is wrong since $A$, $B$, and $C$ are well defined constants here, giving a definite discriminant value."
  },
  {
    id: "mth302_ch7_006",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $xu_{xx} + yu_{yy} + xu_x + yu_y = 0$, in which region is the equation hyperbolic?",
    options: [
      "The first and third quadrants",
      "Nowhere in the plane",
      "The whole plane",
      "The second and fourth quadrants"
    ],
    correctAnswer: 3,
    explanation: "The discriminant is $B^2 - 4AC = -4xy$, which is positive precisely when $xy < 0$, describing the second and fourth quadrants. In the first and third quadrants $xy > 0$ and the equation is elliptic instead, and on either coordinate axis it is parabolic.\n\nThe first and third quadrants is actually where the equation is elliptic, not hyperbolic.\n\nNowhere in the plane and the whole plane both ignore the sign dependence of the discriminant on $xy$."
  },
  {
    id: "mth302_ch7_007",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $u_{xx} + (2x + 3)u_{xy} + 6xu_{yy} = 0$, at what value of $x$ is the equation parabolic?",
    options: [
      "$x = 0$",
      "$x = 3$",
      "$x = -3/2$",
      "$x = 3/2$"
    ],
    correctAnswer: 3,
    explanation: "The discriminant is $B^2 - 4AC = (2x + 3)^2 - 24x = 4x^2 - 12x + 9 = (2x - 3)^2$, which vanishes only when $x = 3/2$ and is positive everywhere else, so the equation is hyperbolic except on the single line $x = 3/2$, where it is parabolic.\n\n$x = 0$, $x = 3$, and $x = -3/2$ are not roots of the expanded discriminant $(2x - 3)^2$."
  },
  {
    id: "mth302_ch7_008",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How many real characteristic families does an elliptic second-order PDE have?",
    options: [
      "$0$",
      "$1$",
      "$2$",
      "Infinitely many"
    ],
    correctAnswer: 0,
    explanation: "Since $B^2 - 4AC < 0$ for an elliptic equation, the roots of the characteristic direction formula are complex conjugates, so no real characteristic curves exist. By contrast, hyperbolic equations have two real characteristic families and parabolic equations have exactly one.\n\n$1$ is the count for a parabolic equation, not an elliptic one.\n\n$2$ is the count for a hyperbolic equation.\n\nInfinitely many does not match any of the three classification types."
  },
  {
    id: "mth302_ch7_009",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Using $\\xi = y - 3x$ and $\\eta = x$, what is the normal form of $u_{xx} + 6u_{xy} + 9u_{yy} = 0$?",
    options: [
      "$u_{\\xi\\xi} = 0$",
      "$u_{\\eta\\eta} = 0$",
      "$u_{\\xi\\eta} = 0$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$"
    ],
    correctAnswer: 1,
    explanation: "Substituting the transformed derivatives, the $u_{\\xi\\xi}$ terms cancel exactly, since $9 - 18 + 9 = 0$, and so do the $u_{\\xi\\eta}$ terms, since $-6 + 6 = 0$, leaving only $u_{\\eta\\eta} = 0$. Parabolic equations always reduce to a single pure second derivative in the normal form, never to the mixed derivative $u_{\\xi\\eta}$, which is the hyperbolic pattern.\n\n$u_{\\xi\\xi} = 0$ wrongly keeps the term that actually cancels in this parabolic reduction.\n\n$u_{\\xi\\eta} = 0$ is the correct pattern for a hyperbolic equation, not a parabolic one.\n\n$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$ is the elliptic normal form pattern, which does not apply here."
  },
  {
    id: "mth302_ch7_010",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Integrating the normal form $u_{\\eta\\eta} = 0$ from the previous transformation gives which general solution?",
    options: [
      "$u = f(y - 3x) + g(y - 3x)$",
      "$u = xf(y - 3x) + g(y - 3x)$",
      "$u = f(y - 3x) + g(y + 3x)$",
      "$u = f(x) + g(y)$"
    ],
    correctAnswer: 1,
    explanation: "From $u_{\\eta\\eta} = 0$, integrating once gives $u_\\eta = f(\\xi)$, and integrating again gives $u = \\eta f(\\xi) + g(\\xi)$; restoring $\\eta = x$ and $\\xi = y - 3x$ gives $u = xf(y - 3x) + g(y - 3x)$.\n\n$u = f(y - 3x) + g(y - 3x)$ collapses into a single arbitrary function in effect, since both terms depend on the same argument without the necessary factor of $x$, so it cannot serve as a general solution.\n\n$u = f(y - 3x) + g(y + 3x)$ follows the two-family hyperbolic pattern, which does not apply to this parabolic equation.\n\n$u = f(x) + g(y)$ does not follow from the actual normal form transformation used here."
  },
  {
    id: "mth302_ch7_011",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Transforming the wave equation $u_{tt} = a^2u_{xx}$ using $\\xi = x + at$ and $\\eta = x - at$ gives which normal form?",
    options: [
      "$u_{\\xi\\xi} = 0$",
      "$u_{\\xi\\eta} = 0$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$",
      "$u_{\\xi\\xi} - u_{\\eta\\eta} = 0$"
    ],
    correctAnswer: 1,
    explanation: "Since $u_{xx} = u_{\\xi\\xi} + 2u_{\\xi\\eta} + u_{\\eta\\eta}$ and $u_{tt} = a^2(u_{\\xi\\xi} - 2u_{\\xi\\eta} + u_{\\eta\\eta})$, subtracting $a^2u_{xx}$ from $u_{tt}$ leaves $-4a^2u_{\\xi\\eta} = 0$. Integrating twice gives $u = f(x + at) + g(x - at)$, the two traveling waves of D'Alembert's solution.\n\n$u_{\\xi\\xi} = 0$ is the parabolic pattern, not the hyperbolic pattern that applies to the wave equation.\n\n$u_{\\xi\\xi} + u_{\\eta\\eta} = 0$ is the elliptic pattern.\n\n$u_{\\xi\\xi} - u_{\\eta\\eta} = 0$ does not match the cancellation that actually occurs during the substitution."
  },
  {
    id: "mth302_ch7_012",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $Au_{xx} + Bu_{xy} + Cu_{yy} + Du_x + Eu_y + Fu = G$, which coefficients determine the classification of the equation?",
    options: [
      "$A$ and $G$ only",
      "$D$, $E$, and $F$ only",
      "All of $A$ through $F$",
      "$A$, $B$, and $C$ only"
    ],
    correctAnswer: 3,
    explanation: "Only the second-order, or principal, part of the equation decides the classification, through the discriminant $B^2 - 4AC$. Lower-order terms affect the solution but never the type, which is why $u_t = \\kappa u_{xx}$ and $u_t = \\kappa u_{xx} + u$ are both classified as parabolic despite differing in their lower-order terms.\n\n$A$ and $G$ only omits $B$ and $C$, both of which are essential to computing the discriminant.\n\n$D$, $E$, and $F$ only wrongly focuses on the lower-order coefficients that have no bearing on classification.\n\nAll of $A$ through $F$ wrongly includes the lower-order coefficients $D$, $E$, and $F$, which play no role in determining the type."
  }
];

export default mth302Chapter7;
