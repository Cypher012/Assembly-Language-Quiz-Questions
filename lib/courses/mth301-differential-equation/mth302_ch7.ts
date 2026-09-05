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
    text: "Integrating the parabolic normal form $u_{\\eta\\eta} = 0$ gives which general solution?",
    options: [
      "$u = \\eta f(\\xi) + g(\\xi)$",
      "$u = f(\\xi) + g(\\eta)$",
      "$u = \\xi f(\\eta) + g(\\eta)$",
      "$u = f(\\xi)g(\\eta)$"
    ],
    correctAnswer: 0,
    explanation: "Integrating $u_{\\eta\\eta} = 0$ twice with respect to $\\eta$ treats $\\xi$ as a parameter, so the two constants of integration are arbitrary functions of $\\xi$, giving $u = \\eta f(\\xi) + g(\\xi)$.\n\nA plain sum of functions of each variable does not satisfy the equation, since differentiating twice in $\\eta$ would not annihilate $g(\\eta)$.\n\nInterchanging the roles of the variables integrates in the wrong direction.\n\nA product of two arbitrary functions does not arise from repeated integration."
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
  },
  {
    id: "mth302_ch7_013",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $Au_{xx} + Bu_{xy} + Cu_{yy} + \\cdots = G$, what is the discriminant used in this course?",
    options: [
      "$B^2 - 4AC$",
      "$B^2 - AC$",
      "$4AC - B^2$, with the sign of the whole expression reversed",
      "$A^2 - 4BC$"
    ],
    correctAnswer: 0,
    explanation: "With $B$ read as the full coefficient of $u_{xy}$, the discriminant is $B^2 - 4AC$.\n\nThe form $B^2 - AC$ belongs to the alternative convention in which the mixed term is written as $2Bu_{xy}$.\n\nReversing the sign would invert the elliptic and hyperbolic cases.\n\nSquaring $A$ instead of $B$ misidentifies which coefficient plays the middle role."
  },
  {
    id: "mth302_ch7_014",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "A second-order PDE with $\\Delta < 0$ is of which type?",
    options: [
      "Elliptic",
      "Hyperbolic",
      "Parabolic, which occurs only when the discriminant vanishes exactly",
      "Undetermined without knowing the lower-order coefficients as well"
    ],
    correctAnswer: 0,
    explanation: "A negative discriminant corresponds to the elliptic case, modelled by the Laplace equation.\n\nA positive discriminant gives the hyperbolic case.\n\nA vanishing discriminant gives the parabolic case.\n\nThe lower-order coefficients play no part in classification."
  },
  {
    id: "mth302_ch7_015",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Which coefficients decide the classification of a second-order PDE?",
    options: [
      "$A$, $B$ and $C$ only, the coefficients of the second-order derivatives",
      "$A$, $B$, $C$, $D$ and $E$ together",
      "$D$, $E$ and $F$",
      "All the coefficients including the forcing term $G$"
    ],
    correctAnswer: 0,
    explanation: "Only the coefficients of the second-order derivatives enter the discriminant, so $D$, $E$, $F$ and $G$ are irrelevant to the type.\n\nIncluding $D$ and $E$ brings in first-order terms that do not affect the classification.\n\nThe lower-order coefficients alone determine nothing about the type.\n\nThe forcing term never affects classification."
  },
  {
    id: "mth302_ch7_016",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Which model equation is parabolic?",
    options: [
      "$u_t = K^2u_{xx}$",
      "$u_{xx} + u_{yy} = f(x, y)$",
      "$u_{tt} = a^2u_{xx}$",
      "$u_{xx} - u_{yy} = 0$"
    ],
    correctAnswer: 0,
    explanation: "The diffusion equation $u_t = K^2u_{xx}$ has no $u_{tt}$ term, so $A = K^2$, $B = 0$, $C = 0$ and $\\Delta = 0$, making it parabolic.\n\nThe Poisson equation is the elliptic model.\n\nThe wave equation is the hyperbolic model.\n\nA difference of second derivatives gives $\\Delta > 0$ and is hyperbolic."
  },
  {
    id: "mth302_ch7_017",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Why must an equation with variable coefficients be classified pointwise?",
    options: [
      "Its discriminant can change sign from one point of the region to another",
      "Its order changes as the point moves across the region under consideration",
      "Its lower-order terms vary with position and so alter the type",
      "Its solutions cease to exist outside a bounded region of the plane"
    ],
    correctAnswer: 0,
    explanation: "Because $A$, $B$ and $C$ may depend on $x$ and $y$, the sign of $B^2 - 4AC$ can differ at different points, so the type is assigned point by point.\n\nThe order of the equation is fixed and does not vary with position.\n\nLower-order terms never affect classification.\n\nExistence of solutions is a separate matter from the classification."
  },
  {
    id: "mth302_ch7_018",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $y^2u_{xx} - 2xyu_{xy} + x^2u_{yy} = \\dfrac{y^2}{x}u_x + \\dfrac{x^2}{y}u_y$ classified?",
    options: [
      "Parabolic everywhere, since the discriminant vanishes identically",
      "Hyperbolic everywhere",
      "Elliptic everywhere, because both outer coefficients are squares",
      "Elliptic for $xy > 0$ and hyperbolic for $xy < 0$"
    ],
    correctAnswer: 0,
    explanation: "With $A = y^2$, $B = -2xy$, $C = x^2$ we get $\\Delta = 4x^2y^2 - 4x^2y^2 = 0$, so it is parabolic at every point.\n\nThe sign of $B$ is irrelevant, since $B$ is squared in the discriminant.\n\nBeing squares does not by itself force an elliptic classification.\n\nThe discriminant vanishes identically, so the type never changes."
  },
  {
    id: "mth302_ch7_019",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $2u_{xx} - 2u_{xy} + 5u_{yy} = 0$ classified?",
    options: [
      "Elliptic",
      "Hyperbolic",
      "Parabolic, because the discriminant vanishes for these coefficients",
      "Elliptic only where $y > 0$ and hyperbolic elsewhere"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-2)^2 - 4(2)(5) = 4 - 40 = -36 < 0$, so the equation is elliptic.\n\nA positive discriminant would be needed for the hyperbolic case.\n\nA vanishing discriminant would be needed for the parabolic case.\n\nThe coefficients are constants, so the type cannot vary with position."
  },
  {
    id: "mth302_ch7_020",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $4u_{xx} - 4u_{xy} + u_{yy} = 0$ classified?",
    options: [
      "Parabolic",
      "Hyperbolic, because the mixed coefficient exceeds the other two in magnitude",
      "Elliptic",
      "Hyperbolic except along a single line where it is parabolic"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-4)^2 - 4(4)(1) = 16 - 16 = 0$, so the equation is parabolic.\n\nA positive discriminant would be required for the hyperbolic case.\n\nThe discriminant is zero rather than negative.\n\nWith constant coefficients the type is the same at every point."
  },
  {
    id: "mth302_ch7_021",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} + 2\\sin x\\,u_{xy} - \\cos^2 x\\,u_{yy} - \\cos x\\,u_y = 0$ classified?",
    options: [
      "Hyperbolic everywhere",
      "Parabolic wherever $\\sin x$ vanishes and hyperbolic elsewhere",
      "Elliptic everywhere",
      "Hyperbolic only where $\\cos x$ is positive"
    ],
    correctAnswer: 0,
    explanation: "With $A = 1$, $B = 2\\sin x$, $C = -\\cos^2 x$ we get $\\Delta = 4\\sin^2 x + 4\\cos^2 x = 4 > 0$ for every $x$, so it is hyperbolic everywhere.\n\nThe identity $\\sin^2 x + \\cos^2 x = 1$ prevents the discriminant from ever vanishing.\n\nA negative $C$ with positive $A$ pushes the discriminant up, not down.\n\nThe term $-\\cos x\\,u_y$ is a first-order term and cannot affect the type."
  },
  {
    id: "mth302_ch7_022",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $(x^2 - 1)u_{xx} + 2yu_{xy} - u_{yy} = 0$, where is the equation hyperbolic?",
    options: [
      "Outside the unit circle",
      "Inside the unit circle, where the discriminant becomes positive",
      "Only on the unit circle itself, where the discriminant vanishes",
      "Everywhere in the plane, regardless of position"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = 4y^2 + 4(x^2 - 1) = 4(x^2 + y^2 - 1)$, which is positive precisely when $x^2 + y^2 > 1$.\n\nInside the circle the discriminant is negative, giving the elliptic case.\n\nOn the circle the discriminant vanishes, giving the parabolic case.\n\nThe sign genuinely changes, so no single type covers the plane."
  },
  {
    id: "mth302_ch7_023",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For the Tricomi equation $yu_{xx} + u_{yy} = 0$, what is the discriminant?",
    options: [
      "$-4y$",
      "$4y$",
      "$-y$",
      "$y^2$"
    ],
    correctAnswer: 0,
    explanation: "With $A = y$, $B = 0$, $C = 1$ we get $\\Delta = 0 - 4(y)(1) = -4y$.\n\nDropping the minus sign inverts the elliptic and hyperbolic regions.\n\nOmitting the factor four changes the numerical value.\n\nSquaring $y$ misreads which coefficient is squared in the formula."
  },
  {
    id: "mth302_ch7_024",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "When $B = 0$, the sign of the discriminant is decided by what?",
    options: [
      "The sign of $AC$, since the discriminant reduces to $-4AC$",
      "The sign of $A$ alone",
      "The sign of $A + C$",
      "The sign of $D$"
    ],
    correctAnswer: 0,
    explanation: "With $B = 0$ the discriminant reduces to $-4AC$, so like signs give an elliptic equation, opposite signs a hyperbolic one, and either coefficient vanishing a parabolic one.\n\nThe coefficient $A$ alone cannot determine the product's sign.\n\nThe sum of the coefficients does not appear in the discriminant.\n\nFirst-order coefficients never affect the type."
  },
  {
    id: "mth302_ch7_025",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "If $C = 0$ and $B \\neq 0$, what type is the equation automatically?",
    options: [
      "Hyperbolic",
      "Parabolic, because one of the outer coefficients has vanished",
      "Elliptic",
      "Indeterminate without knowing the value of $A$ as well"
    ],
    correctAnswer: 0,
    explanation: "With $C = 0$ the discriminant is $B^2 > 0$, so the equation is hyperbolic regardless of $A$.\n\nA vanishing $C$ does not make the discriminant zero unless $B$ also vanishes.\n\nThe discriminant is a square and so cannot be negative here.\n\nThe value of $A$ is irrelevant once $C = 0$ and $B \\neq 0$."
  },
  {
    id: "mth302_ch7_026",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "An equation whose second-order part is a perfect square, such as $u_{xx} + 2xu_{xy} + x^2u_{yy}$, is of which type?",
    options: [
      "Parabolic",
      "Hyperbolic",
      "Elliptic, because the coefficient of $u_{yy}$ is a square",
      "Hyperbolic away from the origin and parabolic at the origin"
    ],
    correctAnswer: 0,
    explanation: "A perfect square gives $\\Delta = (2x)^2 - 4(1)(x^2) = 0$ identically, so the equation is parabolic everywhere.\n\nA variable coefficient does not by itself create a positive discriminant.\n\nThe square on $C$ does not force an elliptic classification.\n\nThe discriminant vanishes identically, so the type does not change with position."
  },
  {
    id: "mth302_ch7_027",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How many real characteristic families does a hyperbolic equation have?",
    options: [
      "Two",
      "One",
      "None, which is the count belonging to the elliptic case",
      "Three, one for each type of classification"
    ],
    correctAnswer: 0,
    explanation: "A positive discriminant gives two distinct real roots for $dy/dx$, hence two real characteristic families.\n\nOne family corresponds to the parabolic case, where the two roots coincide.\n\nNo real families corresponds to the elliptic case.\n\nThree families do not arise for a second-order equation in two variables."
  },
  {
    id: "mth302_ch7_028",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How many real characteristic families does a parabolic equation have?",
    options: [
      "One",
      "Two",
      "None, which is the count belonging to the elliptic case",
      "Infinitely many, one through each point of the region"
    ],
    correctAnswer: 0,
    explanation: "A vanishing discriminant makes the two roots of the characteristic equation coincide, leaving a single real family.\n\nTwo distinct families require a positive discriminant.\n\nNo real families requires a negative discriminant.\n\nThe count refers to families of curves, not to individual curves."
  },
  {
    id: "mth302_ch7_029",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "What are the characteristic directions for a hyperbolic equation?",
    options: [
      "$\\dfrac{dy}{dx} = \\dfrac{B \\pm \\sqrt{B^2 - 4AC}}{2A}$",
      "$\\dfrac{dy}{dx} = \\dfrac{B \\pm \\sqrt{B^2 - 4AC}}{2C}$",
      "$\\dfrac{dy}{dx} = \\dfrac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}$, carrying a leading minus sign",
      "$\\dfrac{dy}{dx} = B^2 - 4AC$"
    ],
    correctAnswer: 0,
    explanation: "The two real directions come from the quadratic in $dy/dx$, giving $\\dfrac{B \\pm \\sqrt{B^2 - 4AC}}{2A}$.\n\nDividing by $2C$ misplaces the leading coefficient.\n\nThe leading minus sign belongs to the ordinary quadratic formula, not to this arrangement.\n\nThe discriminant measures the type and is not itself a slope."
  },
  {
    id: "mth302_ch7_030",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For a parabolic equation, what is the single characteristic direction?",
    options: [
      "$\\dfrac{dy}{dx} = \\dfrac{B}{2A}$",
      "$\\dfrac{dy}{dx} = \\dfrac{B}{A}$",
      "$\\dfrac{dy}{dx} = \\dfrac{2A}{B}$",
      "$\\dfrac{dy}{dx} = \\dfrac{C}{2A}$"
    ],
    correctAnswer: 0,
    explanation: "With $\\Delta = 0$ the square root vanishes and the two directions collapse to the single value $\\dfrac{B}{2A}$.\n\nOmitting the factor of two contradicts the quadratic formula.\n\nInverting the ratio reverses the direction.\n\nUsing $C$ in the numerator misreads which coefficient survives."
  },
  {
    id: "mth302_ch7_031",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "What is the normal form of a hyperbolic equation?",
    options: [
      "$u_{\\xi\\eta} = \\phi$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$",
      "$u_{\\eta\\eta} = \\phi$, which is the parabolic normal form instead",
      "$u_{\\xi} + u_{\\eta} = \\phi$, containing only first-order derivatives"
    ],
    correctAnswer: 0,
    explanation: "In characteristic coordinates a hyperbolic equation reduces to the mixed-derivative form $u_{\\xi\\eta} = \\phi$, equivalently $u_{\\xi\\xi} - u_{\\eta\\eta} = \\phi$.\n\nThe sum of two pure second derivatives is the elliptic normal form.\n\nA single pure second derivative is the parabolic normal form.\n\nThe order is preserved, so first derivatives alone cannot be the normal form."
  },
  {
    id: "mth302_ch7_032",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "What is the normal form of an elliptic equation?",
    options: [
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$",
      "$u_{\\xi\\eta} = \\phi$",
      "$u_{\\xi\\xi} - u_{\\eta\\eta} = \\phi$",
      "$u_{\\eta\\eta} = \\phi$, which is the parabolic normal form instead"
    ],
    correctAnswer: 0,
    explanation: "An elliptic equation reduces to the Laplace-like form $u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$, reflecting the absence of real characteristics.\n\nThe mixed derivative is the hyperbolic form.\n\nA minus sign between the terms is the alternative hyperbolic form.\n\nA single second derivative is the parabolic form."
  },
  {
    id: "mth302_ch7_033",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $(1 - M^2)u_{xx} + u_{yy} = 0$, for which $M$ is the equation elliptic?",
    options: [
      "$|M| < 1$",
      "$|M| > 1$",
      "$M = \\pm 1$ exactly, where the leading coefficient vanishes",
      "Every real $M$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = -4(1 - M^2) = 4(M^2 - 1)$, which is negative precisely when $M^2 < 1$, that is $|M| < 1$.\n\nFor $|M| > 1$ the discriminant is positive, giving the hyperbolic case.\n\nAt $M = \\pm 1$ the discriminant vanishes, giving the parabolic case.\n\nThe sign genuinely changes with $M$, so no single type covers all values."
  },
  {
    id: "mth302_ch7_034",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $u_{xx} + xu_{xy} + yu_{yy} = 0$, on which curve is the equation parabolic?",
    options: [
      "$y = \\dfrac{x^2}{4}$",
      "$y = x^2$",
      "$y = 4x^2$",
      "$x = \\dfrac{y^2}{4}$, interchanging the roles of the two variables"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = x^2 - 4y$, which vanishes exactly when $y = \\dfrac{x^2}{4}$.\n\nOmitting the division by four misreads the discriminant.\n\nMultiplying by four moves in the wrong direction.\n\nInterchanging the variables solves the wrong equation."
  },
  {
    id: "mth302_ch7_035",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "When choosing new coordinates to reach normal form, what must be true of $\\xi$ and $\\eta$?",
    options: [
      "Their Jacobian must not vanish, so the transformation stays invertible",
      "They must be chosen parallel to one another so the algebra simplifies",
      "They must both be constant along the same characteristic family",
      "They must be linear functions of $x$ and $y$ in every case"
    ],
    correctAnswer: 0,
    explanation: "A nonvanishing Jacobian keeps the change of variables invertible, which is why $\\eta$ must not be chosen parallel to $\\xi$ in the parabolic case.\n\nParallel choices make the Jacobian vanish and destroy the transformation.\n\nUsing the same family for both would again collapse the Jacobian.\n\nCharacteristic coordinates are frequently nonlinear, as the Tricomi equation shows."
  },
  {
    id: "mth302_ch7_036",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} - 2u_{xy} + u_{yy} = 0$ classified?",
    options: [
      "Parabolic",
      "Hyperbolic",
      "Elliptic",
      "Parabolic only along the line $y = x$"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = (-2)^2 - 4(1)(1) = 0$, so the equation is parabolic at every point.\n\nThe sign of $B$ is irrelevant because $B$ is squared.\n\nPositive outer coefficients do not by themselves force the elliptic case.\n\nThe coefficients are constants, so the type cannot vary."
  },
  {
    id: "mth302_ch7_037",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "Under the alternative convention writing the equation as $Au_{xx} + 2Bu_{xy} + Cu_{yy}$, what changes?",
    options: [
      "The numerical value of the discriminant changes, but the classification is unaffected",
      "The classification itself, since the sign of the discriminant reverses",
      "Both the value and the resulting type assigned to the equation",
      "Neither the value nor the type, since the conventions agree exactly"
    ],
    correctAnswer: 0,
    explanation: "The two conventions differ by a positive factor, so the sign, and hence the classification, is unchanged while the numerical value differs.\n\nA positive factor cannot reverse a sign.\n\nSince the sign is preserved, the type cannot change.\n\nThe values do differ, so the conventions do not agree numerically."
  },
  {
    id: "mth302_ch7_038",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "For $xu_{xx} + yu_{yy} + xu_x + yu_y = 0$, where is the equation elliptic?",
    options: [
      "Where $xy > 0$",
      "Where $xy < 0$",
      "On the coordinate axes",
      "Everywhere"
    ],
    correctAnswer: 0,
    explanation: "With $A = x$, $B = 0$, $C = y$ the discriminant is $-4xy$, which is negative exactly when $xy > 0$, that is in the first and third quadrants.\n\nWhere $xy < 0$ the discriminant is positive and the equation is hyperbolic.\n\nOn the axes the discriminant vanishes, giving the parabolic case.\n\nThe sign of $xy$ varies, so the type is not constant."
  },
  {
    id: "mth302_ch7_039",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "What is the normal form of a parabolic equation?",
    options: [
      "$u_{\\eta\\eta} = \\phi$",
      "$u_{\\xi\\eta} = \\phi$",
      "$u_{\\xi\\xi} + u_{\\eta\\eta} = \\phi$",
      "$u_{\\xi\\xi} - u_{\\eta\\eta} = \\phi$, a difference of two pure second derivatives"
    ],
    correctAnswer: 0,
    explanation: "With only one real characteristic direction, a parabolic equation reduces to a single pure second derivative, $u_{\\eta\\eta} = \\phi$ or equivalently $u_{\\xi\\xi} = \\phi$.\n\nThe mixed derivative characterises the hyperbolic case.\n\nThe sum of two pure second derivatives characterises the elliptic case.\n\nThe difference of two pure second derivatives is the alternative hyperbolic form."
  },
  {
    id: "mth302_ch7_040",
    course: "MTH 302",
    chapter: "Chapter 7",
    text: "How is $u_{xx} + 6u_{xy} + 9u_{yy} = 0$ classified, and what is its discriminant?",
    options: [
      "Parabolic, with $\\Delta = 0$",
      "Hyperbolic",
      "Elliptic",
      "Parabolic"
    ],
    correctAnswer: 0,
    explanation: "Here $\\Delta = 6^2 - 4(1)(9) = 36 - 36 = 0$, so the equation is parabolic.\n\nTaking $\\Delta = 36$ omits the subtraction of $4AC$ entirely.\n\nA negative value would require $4AC$ to exceed $B^2$.\n\nUsing $36 - 9$ forgets the factor of four multiplying $AC$."
  }
];

export default mth302Chapter7;
