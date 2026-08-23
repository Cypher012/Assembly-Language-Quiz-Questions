import { QuestionV2 } from "@/lib/quiz-types";

const csc308Chapter2Questions: QuestionV2[] = [
  {
    id: "csc308_ch2_001",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The Greek word Polynomial translates into English as which of the following?",
    options: [
      "Many terms, or multiple terms",
      "One term",
      "No terms",
      "A constant, single, unchanging term throughout",
    ],
    correctAnswer: 0,
    explanation:
      "Polynomial, from Poly-nomial, translates into English as 'many terms' or 'multiple terms'.\n\nOne term instead describes a Monomial, the opposite case, not a Polynomial.\n\nAn expression must comprise at least one term to exist at all, so 'no terms' does not describe any expression, polynomial or otherwise.\n\nA constant, single, unchanging term throughout describes a Monomial, not the many-term Polynomial.",
  },
  {
    id: "csc308_ch2_002",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "An expression with exactly one term is called which of the following?",
    options: ["A Polynomial", "A Monomial", "A Binomial", "An Operator"],
    correctAnswer: 1,
    explanation:
      "An expression with one term is a Monomial.\n\nA Polynomial instead comprises many, or multiple, terms, not just one.\n\nA Binomial, meaning two terms, is not the term used in the notes for a one-term expression.\n\nAn Operator is a symbol such as plus or times used to combine terms, not a category of expression by term count.",
  },
  {
    id: "csc308_ch2_003",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A term can be used to identify which two kinds of instances in a numerical computation process?",
    options: [
      "Digit and Letter",
      "Operand and Operator",
      "Constant and Variable",
      "Precise and Imprecise",
    ],
    correctAnswer: 2,
    explanation:
      "A term can be used to identify two kinds of instances: Constant, a regular temporal instance, and Variable, a context-neutral temporal instance.\n\nDigit and Letter are alphabets for numbering and writing schemes respectively, not the two kinds of instances a term identifies.\n\nOperand and Operator are roles symbols play in constructing an expression, the nouns and verbs of computation, not the two kinds of instances a term identifies.\n\nPrecise and Imprecise are classifications of a measurement recording, introduced much later, not the two kinds of instances a term identifies.",
  },
  {
    id: "csc308_ch2_004",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In a computing expression, the operand, described as the noun, is cued with which of the following?",
    options: [
      "Special symbols such as + and times",
      "The Mantissa of a floating-point number",
      "The criterion Kikun (Coherence)",
      "The strings ascribed to numbers",
    ],
    correctAnswer: 3,
    explanation:
      "The operand, the noun in a computing expression, is cued with the strings ascribed to numbers.\n\nSpecial symbols such as plus and times instead cue the operator, the verb in a computing expression, not the operand.\n\nThe Mantissa of a floating-point number is a much later concept related to precision, not what cues an operand in general.\n\nKikun (Coherence) is an assessment criterion from the earlier note on language instruments, not what cues an operand.",
  },
  {
    id: "csc308_ch2_005",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following symbols is used to cue the operator for Subtraction in a computing expression?",
    options: ["the minus sign", "the plus sign, used for addition", "times (times sign)", "the equal sign, used for equality"],
    correctAnswer: 0,
    explanation:
      "The minus sign is the special symbol used to cue Subtraction as an operator.\n\nThe plus sign instead cues Addition, not Subtraction.\n\nThe times sign instead cues Multiplication, not Subtraction.\n\nThe equal sign instead cues Equal, not Subtraction.",
  },
  {
    id: "csc308_ch2_006",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A polynomial is described as the Algebraic formulation of the relationship between which of the following?",
    options: [
      "Unscaled constants that never change",
      "Scaled variables, where each variable comprises finite instances of terms",
      "Nominal-terms and their letters",
      "Infinite instances of context-sensitive quality",
    ],
    correctAnswer: 1,
    explanation:
      "A polynomial is the Algebraic formulation of the relationship between scaled variables, with each variable comprising finite instances of terms.\n\nUnscaled, unchanging constants describe a Regular-language concept, not the variable-based Algebraic formulation a polynomial represents.\n\nNominal-terms and letters belong to the Spatial aspect of a process, not to the numerical, Temporal-aspect concept of a polynomial.\n\nInfinite instances of context-sensitive quality describe Orin, not a polynomial, which is explicitly a finite, Algebraic formulation.",
  },
  {
    id: "csc308_ch2_007",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is a listed use of Polynomials?",
    options: [
      "Constructing the alphabet of a writing scheme",
      "Ascribing pattern to nominal-terms",
      "Constructing the string for cueing Numerical-terms for Constant and Fraction",
      "Separating binary opposite locations with a Gap",
    ],
    correctAnswer: 2,
    explanation:
      "Polynomials are used for representing numbers in a numbering scheme, constructing the string for cueing Numerical-terms for Constant and Fraction, as explained earlier for Eyo and Iwon.\n\nConstructing the alphabet of a writing scheme relates to Ite (Letters) for Names, a Spatial-aspect concept, not a use of polynomials.\n\nAscribing pattern to nominal-terms is unrelated; pattern, as discussed later, is ascribed to numerical-term representation through regular language, not to nominal-terms via polynomials.\n\nSeparating binary opposite locations with a Gap is a Spatial-aspect concept from the earlier note, not a listed use of polynomials.",
  },
  {
    id: "csc308_ch2_008",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Besides representing numbers and models such as Linear, Quadratic, Cubic, and Quartic, which of the following is also listed as a use of polynomials?",
    options: [
      "Formulation of the Spatial aspect of a process",
      "Construction of the alphabet of a numbering scheme",
      "Definition of the criterion Ijokan (Constancy)",
      "Formulation of functions such as Trigonometric, Hyperbolic, and Exponential functions",
    ],
    correctAnswer: 3,
    explanation:
      "Polynomials are used for the formulation of functions, for example Trigonometric, Hyperbolic, and Exponential functions such as e to the x, cos(x), and sin(x), which have a polynomial representation.\n\nThe Spatial aspect of a process is explicitly outside this course's purview and is not a listed use of polynomials.\n\nConstruction of a numbering scheme's alphabet describes Ika (Digits), the primitive symbols themselves, not a use of polynomials, which instead use those digits.\n\nIjokan (Constancy) is the assessment criterion for Regular language from the earlier note, not something polynomials are used to formulate.",
  },
  {
    id: "csc308_ch2_009",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Why are Polynomials described as easy to store and manipulate on a digital computer?",
    options: [
      "Because we only need to store the coefficients and the variable, and Addition and Multiplication suffice, with Subtraction and Division realised through complementation and shifting",
      "Because polynomials never require any operations to be performed on them at all",
      "Because polynomials can only represent a single fixed constant value",
      "Because a computer can only store polynomials of degree greater than four",
    ],
    correctAnswer: 0,
    explanation:
      "Polynomials are easy to store and manipulate because we only need to store the coefficients (the scales a_i) and the variable x, and the operations of Addition and Multiplication are sufficient to manipulate the representation, with Subtraction and Division realised through complementation and shifting.\n\nPolynomials do require operations, specifically Addition and Multiplication as the sufficient core operations, so it is not true that no operations are required at all.\n\nA polynomial can represent much more than a single fixed constant; it represents a relationship between scaled variables across many terms.\n\nDegree greater than four polynomials are explicitly described elsewhere as unstable and requiring care, not as the only degree a computer can store.",
  },
  {
    id: "csc308_ch2_010",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The root, or solution, of a polynomial can never be computed iteratively using an algorithm.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: one listed reason polynomials are frequently used in Scientific and Engineering problem-solving is precisely that the root, or solution, of a polynomial CAN be computed iteratively using an algorithm.",
  },
  {
    id: "csc308_ch2_011",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "What caution is given regarding polynomials with degree greater than 4?",
    options: [
      "They can never be stored on a digital computer",
      "They are unstable and must be used with care in Engineering problem-solving",
      "They no longer have coefficients or an independent variable",
      "They are the only degree considered suitable for Scientific and Engineering problems generally",
    ],
    correctAnswer: 1,
    explanation:
      "Polynomials with degree greater than 4 are explicitly noted to be unstable and must be used with care in Engineering problem-solving.\n\nStorage on a digital computer is not described as impossible for high-degree polynomials; the caution is about instability, not storability.\n\nHigh-degree polynomials still have coefficients (the a_i scales) and an independent variable x, following the same general form as any polynomial.\n\nMost engineering and scientific problems are represented using a polynomial of suitable degree generally, and it is specifically degree greater than 4 that carries the instability caution, not that such degrees are the only suitable ones.",
  },
  {
    id: "csc308_ch2_012",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the general polynomial of degree n, $P_n(x) = \\sum_{i=0}^{n} a_i \\times x^i$, what does 'Algebra' represent, as noted in this section?",
    options: [
      "The Mathematics of the creation and manipulation of constants",
      "The Mathematics of Measurement",
      "The Mathematics of the creation and manipulation of variable-terms",
      "The Mathematics of nominal-terms and letters",
    ],
    correctAnswer: 2,
    explanation:
      "The note explicitly states that Algebra is the Mathematics of the creation and manipulation of variable-terms, tying it to the general polynomial formulation.\n\nThe Mathematics of the creation and manipulation of constants instead describes Arithmetic, not Algebra.\n\nThe Mathematics of Measurement is not a phrase used for Algebra; Measurement is instead a separate, later concept subsuming Calculation.\n\nNominal-terms and letters belong to the Spatial aspect of a process, unrelated to what Algebra is described as here.",
  },
  {
    id: "csc308_ch2_013",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "If n = 0 in the general polynomial equation, what is the resulting expression?",
    options: [
      "$a_0 + a_1x$",
      "$\\sum_{i=0}^{\\infty} a_i \\times x^i$",
      "$a_0 + x(a_1)$",
      "$a_0 \\times x^0$, which simplifies to $a_0$",
    ],
    correctAnswer: 3,
    explanation:
      "If n = 0, Equation 2.2 gives $\\sum_{i=0}^{0} a_i \\times x^i$, which is simply $a_0 \\times x^0$, equal to $a_0$.\n\n$a_0 + a_1x$ is instead the Linear (n=1) case, not the n=0 Monomial case.\n\n$\\sum_{i=0}^{\\infty}$ is instead Equation 2.3, the Context-sensitive polynomial with n equal to infinity, not the n=0 case.\n\n$a_0 + x(a_1)$ is the Horner's form of the Linear case, not the n=0 Monomial case.",
  },
  {
    id: "csc308_ch2_014",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Why is a Monomial described as NOT a variable-term?",
    options: [
      "Because $a_{0}$ is the only term in the expression, which is the basis of it being identified as a monomial",
      "Because a monomial always has an infinite number of terms",
      "Because a monomial can never be formulated using constants at all",
      "Because a monomial always represents a context-sensitive instance",
    ],
    correctAnswer: 0,
    explanation:
      "$a_{0}$ is the only term in the expression of Equation 2.2, which is the basis of its being identified as a monomial, and hence a monomial is NOT a variable-term.\n\nA monomial has exactly one term, the opposite of an infinite number of terms; infinite terms instead describe the inexpressible context-sensitive polynomial.\n\nThe notes explicitly state that if each of the a_i and x are constants, Equation 2.2 is used to formulate the logic in a Numerical-constant, so a monomial can indeed be formulated using constants.\n\nA context-sensitive instance requires infinite terms, the opposite of a monomial's single term, so a monomial does not represent a context-sensitive instance.",
  },
  {
    id: "csc308_ch2_015",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "If each of the $a_{i}$ and x in the monomial equation are constants, what does Equation 2.2 formulate?",
    options: [
      "An inexpressible context-sensitive instance",
      "The logic in a Numerical-constant",
      "The Horner's form of a Quadratic polynomial",
      "The Computation Process Tree for a Cubic polynomial",
    ],
    correctAnswer: 1,
    explanation:
      "If each of the a_i and x are constants, then Equation 2.2 is used to formulate the logic in a Numerical-constant, as discussed in the earlier note's Section 1.2.\n\nAn inexpressible context-sensitive instance instead describes the case where n equals infinity in Equation 2.3, not the constant-valued monomial case.\n\nThe Horner's form of a Quadratic polynomial is a separate, later concept with two terms, not the single-term monomial equation.\n\nA Computation Process Tree is a diagrammatic tool discussed later for analysing computation steps, not what the constant-valued monomial equation formulates.",
  },
  {
    id: "csc308_ch2_016",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "If n = infinity in the general polynomial equation, giving Equation 2.3, why is this equation described as inexpressible?",
    options: [
      "Because a beginning term can never be fixed at i=0 or i=1 under any circumstances",
      "Because Equation 2.3 requires the use of the digit Zero, which is inadmissible",
      "Because no matter the number of terms accounted for, there will always be another Next term, and an infinite instance has no end term",
      "Because infinite polynomials can only be used to represent Constant, never Fraction",
    ],
    correctAnswer: 2,
    explanation:
      "Equation 2.3 is inexpressible because no matter the number of terms accounted for, there will always be another Next term; Ailopin, an Infinite instance, is inexpressible because it has no end term.\n\nA beginning term CAN be fixed by setting i to 0 or a constant i=1; it is the end of the expression, not the beginning, that cannot be fixed.\n\nThe inexpressibility of Equation 2.3 is explained through the absence of an end term for an infinite instance, not through any requirement involving the digit Zero.\n\nEquation 2.3's inexpressibility is a general property of representing infinite terms, unrelated to whether the represented instance would be a Constant or a Fraction.",
  },
  {
    id: "csc308_ch2_017",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "What is used as the computational solution to Engineering and Scientific problem-solving, in place of the inexpressible context-sensitive polynomial?",
    options: [
      "The regular version of Equation 2.3, using only a single constant term",
      "Equation 2.3 itself, computed with infinite precision",
      "The Computation Process Tree, used without any polynomial equation at all",
      "The context-neutral version of Equation 2.3",
    ],
    correctAnswer: 3,
    explanation:
      "The computational solution to Engineering and Scientific problem-solving is explicitly stated to be the context-neutral version of Equation 2.3, since a context-neutral instance uses finite terms, unlike the inexpressible infinite context-sensitive version.\n\nA regular version using only a single constant term would be a monomial, the n=0 case, not the general solution used in place of the infinite polynomial.\n\nEquation 2.3 itself remains inexpressible regardless of precision, since an infinite instance has no end term to compute up to.\n\nThe Computation Process Tree is a separate analytical tool for computation steps, not itself the substitute equation for the inexpressible infinite polynomial.",
  },
  {
    id: "csc308_ch2_018",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "When n is a constant greater than or equal to One, how many terms does the resulting polynomial, Equation 2.4, have?",
    options: [
      "More than one, but a finite, or totally countable, number of terms",
      "Exactly one term",
      "An infinite number of terms, with no end term",
      "Exactly zero terms",
    ],
    correctAnswer: 0,
    explanation:
      "When n is a constant greater than or equal to One, Equation 2.1 has more than one but finite, or totally countable, number of terms, giving Equation 2.4.\n\nExactly one term instead describes the Monomial, the n=0 case, not the n greater than or equal to 1 case.\n\nAn infinite number of terms with no end term instead describes the inexpressible n=infinity case of Equation 2.3, not this finite case.\n\nExactly zero terms would not constitute a meaningful expression at all, and is not how any of the polynomial cases are described.",
  },
  {
    id: "csc308_ch2_019",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "$x^{0}$ is a simplification of x divided by x. What is the result of this simplification described as?",
    options: [
      "The digit 1, NOT the unit constant 1",
      "The unit constant 1, NOT the digit 1",
      "The number-neutral digit Zero",
      "An inadmissible regular term",
    ],
    correctAnswer: 1,
    explanation:
      "$x^{0}$ is a simplification of x over x, equal to $x^1 \\times x^{-1}$, equal to $x^{(1-1)}$, equal to $x^0$, equal to 1; this result is the unit constant 1, NOT the digit 1.\n\nThe notes explicitly distinguish this result as the unit constant, not the digit, reversing this option's claim.\n\nZero is a separate, number-neutral digit discussed in the earlier note, not the result of the $x^{0}$ simplification.\n\nThe unit constant 1 resulting from this simplification is not described as an inadmissible regular term; Unit (One) is in fact the simplest admissible constant.",
  },
  {
    id: "csc308_ch2_020",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The general polynomial $P_n(x) = \\sum_{i=0}^{n} a_i \\times x^i$ can equivalently be written out term by term as $P_n(x) = a_0 \\times x^0 + a_1 \\times x^1 + a_2 \\times x^2 + \\ldots + a_n \\times x^n$, since $x^0$ equals 1. What is this pair of equivalent forms together called?",
    options: [
      "The Horner's or nested form of polynomial expression",
      "The Computation Process Tree representation",
      "The Canonical, Naive, Series, or Sequential Polynomial representation",
      "The Organic, or Atoledole, formulation",
    ],
    correctAnswer: 2,
    explanation:
      "Equations 2.1 and 2.5 are called the Canonical, Naive, Series, or Sequential Polynomial representation.\n\nThe Horner's or nested form is instead the alternative representation given in Equation 2.6, not Equations 2.1 and 2.5.\n\nThe Computation Process Tree is a diagrammatic analysis tool, not a name for Equations 2.1 and 2.5.\n\nThe Organic, or Atoledole, formulation describes the y0, y1, y2, y3 subsumption chain presented later, not Equations 2.1 and 2.5.",
  },
  {
    id: "csc308_ch2_021",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the Canonical polynomial representation, what role do the variables $a_{i}$ play?",
    options: [
      "They are the exponents applied to the independent variable x",
      "They are the digits used to construct the alphabet of a numbering scheme",
      "They represent the Mantissa of a floating-point number exclusively",
      "They are the parameters, or coefficient/scale, used to tune x, the independent variable",
    ],
    correctAnswer: 3,
    explanation:
      "The variables a_i, for i = 1, 2, ..., n, are the parameters, or coefficient/scale, used to tune x, the independent variable of the polynomial.\n\nThe exponents applied to x are the powers i themselves in $x^{i}$, a separate role from the coefficients a_i.\n\nDigits constituting a numbering scheme's alphabet are Ika, a distinct, earlier concept from the coefficients of a polynomial.\n\nThe Mantissa is a specific, later floating-point concept, not a general description of the role of a_i in a Canonical polynomial.",
  },
  {
    id: "csc308_ch2_022",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A polynomial of degree one (n=1) is called Linear, and it describes a line or regular range.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "A polynomial of degree one, n=1, is called Linear, and it describes a line or regular range, while polynomials with degree two or more are called Non-linear.",
  },
  {
    id: "csc308_ch2_023",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Polynomials with degree two or more are called which of the following?",
    options: [
      "Non-linear",
      "Linear",
      "Monomial",
      "Canonical exclusively, never Horner's",
    ],
    correctAnswer: 0,
    explanation:
      "Polynomials with degree two or more, n greater than or equal to 2, are called Non-linear.\n\nLinear instead describes only the degree-one case, not degree two or more.\n\nMonomial describes the degree-zero, single-term case, not polynomials of degree two or more.\n\nBoth Non-linear polynomials can be expressed in either Canonical or Horner's form; being Non-linear does not restrict a polynomial to only the Canonical representation.",
  },
  {
    id: "csc308_ch2_024",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the Canonical representation, the number of Addition operations in a polynomial is equal to what?",
    options: [
      "Always exactly one, regardless of degree",
      "The order of logic formulated into the polynomial representation, matching its degree",
      "Always exactly ten, regardless of degree",
      "The number of digits in the Mantissa",
    ],
    correctAnswer: 1,
    explanation:
      "In Table 2.1, the number of Addition operations is equal to the order of logic formulated into the polynomial representation, matching its degree; for example, a first degree polynomial has one Addition, and a second degree polynomial has two.\n\nThe number of Additions is not always exactly one; it scales with degree, so a Quadratic has two, a Cubic has three, and so on.\n\nThe number of Additions is not fixed at ten; the table shows it scaling from one up to four across the Linear through Quartic cases.\n\nThe Mantissa is a separate, later floating-point precision concept, unrelated to the number of Addition operations in a Canonical polynomial.",
  },
  {
    id: "csc308_ch2_025",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Under the Canonical representation, how many Addition and Multiplication operations, respectively, does a Quadratic polynomial require?",
    options: [
      "1 Addition and 1 Multiplication",
      "3 Additions and 6 Multiplications",
      "2 Additions and 3 Multiplications",
      "4 Additions and 10 Multiplications",
    ],
    correctAnswer: 2,
    explanation:
      "Table 2.1 lists the Canonical Quadratic representation, $a_0 + a_1x + a_2x^2$, as requiring 2 Additions and 3 Multiplications.\n\n1 Addition and 1 Multiplication instead describes the Linear (degree 1) case, not Quadratic.\n\n3 Additions and 6 Multiplications instead describes the Cubic (degree 3) case, not Quadratic.\n\n4 Additions and 10 Multiplications instead describes the Quartic (degree 4) case, not Quadratic.",
  },
  {
    id: "csc308_ch2_026",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Under the Canonical representation, how many Addition and Multiplication operations, respectively, does a Cubic polynomial require?",
    options: [
      "2 Additions and 3 Multiplications",
      "4 Additions and 10 Multiplications",
      "3 Additions and 3 Multiplications",
      "3 Additions and 6 Multiplications",
    ],
    correctAnswer: 3,
    explanation:
      "Table 2.1 lists the Canonical Cubic representation as requiring 3 Additions and 6 Multiplications.\n\n2 Additions and 3 Multiplications instead describes the Quadratic (degree 2) case, not Cubic.\n\n4 Additions and 10 Multiplications instead describes the Quartic (degree 4) case, not Cubic.\n\n3 Additions and 3 Multiplications mismatches the Canonical Cubic's Multiplication count; the Canonical form requires 6 Multiplications for a Cubic, not 3, since it lacks the efficiency of the Horner's form.",
  },
  {
    id: "csc308_ch2_027",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Under the Canonical representation, how many Addition and Multiplication operations, respectively, does a Quartic polynomial require?",
    options: [
      "4 Additions and 10 Multiplications",
      "4 Additions and 4 Multiplications",
      "3 Additions and 6 Multiplications",
      "2 Additions and 3 Multiplications",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.1 lists the Canonical Quartic representation as requiring 4 Additions and 10 Multiplications.\n\n4 Additions and 4 Multiplications instead describes the Horner's form Quartic, from Table 2.2, not the Canonical form.\n\n3 Additions and 6 Multiplications instead describes the Canonical Cubic (degree 3) case, not Quartic.\n\n2 Additions and 3 Multiplications instead describes the Canonical Quadratic (degree 2) case, not Quartic.",
  },
  {
    id: "csc308_ch2_028",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Equation 2.6, written as a0 + x(a1 + x(a2 + ... + x(a_(n-1) + x(a_n)))), is called which form of polynomial expression?",
    options: [
      "Canonical, or Naive, form",
      "Horner's, or nested, form",
      "Organic, or Atoledole, form",
      "Predicate task specification form",
    ],
    correctAnswer: 1,
    explanation:
      "Equation 2.6 is called the Horner's, or nested, form of polynomial expression.\n\nThe Canonical, or Naive, form instead describes Equations 2.1 and 2.5, the sequential sum-of-terms representation, not Equation 2.6.\n\nThe Organic, or Atoledole, form instead describes the y0, y1, y2, y3 subsumption chain, a different representation from the nested Horner's form.\n\nPredicate task specification is a formal concept from the earlier note on agent architectures and task environments, entirely unrelated to polynomial representation.",
  },
  {
    id: "csc308_ch2_029",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Under the Horner's, or Nested, representation, how many Addition and Multiplication operations, respectively, does a Linear polynomial require?",
    options: [
      "2 Additions and 2 Multiplications",
      "1 Addition and 1 Multiplication for Canonical only, never Horner's",
      "1 Addition and 1 Multiplication",
      "0 Additions and 0 Multiplications",
    ],
    correctAnswer: 2,
    explanation:
      "The Horner's form Linear representation, a0 + x(a1), requires 1 Addition and 1 Multiplication.\n\n2 Additions and 2 Multiplications instead describes the Horner's form Quadratic, not Linear.\n\nThe Canonical Linear form also requires 1 Addition and 1 Multiplication, matching the Horner's Linear form exactly at this lowest degree, so it is not true that this count is exclusive to Canonical and never occurs in Horner's form.\n\nA Linear polynomial genuinely requires at least one Addition and one Multiplication to combine a0 and a1x, not zero of either.",
  },
  {
    id: "csc308_ch2_030",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Under the Horner's, or Nested, representation, the number of Multiplication and Addition operations are equal to what, for a given degree n?",
    options: [
      "Always double the degree n for Multiplications, and equal to n for Additions",
      "A fixed value of 10 Multiplications regardless of degree",
      "The number of digits in the Mantissa of the coefficients",
      "The order of logic formulated into the expression, matching the degree n exactly for both operations",
    ],
    correctAnswer: 3,
    explanation:
      "In Table 2.2, the number of Multiplication and Addition operations are both equal to the order of logic formulated into the expression, matching the degree n; for example, a first degree polynomial has one Multiplication and one Addition.\n\nMultiplications are not double the degree in Horner's form; they equal n exactly, the same as Additions, which is precisely what makes Horner's form more efficient than the Canonical form.\n\nThe Multiplication count is not fixed at 10 regardless of degree; it scales directly with n, reaching 4 for the Quartic case, not 10.\n\nThe Mantissa is an unrelated, later floating-point precision concept, not what determines the operation counts in Table 2.2.",
  },
  {
    id: "csc308_ch2_031",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Comparing the Canonical and Horner's representations of a Quartic polynomial, how do their Multiplication counts differ?",
    options: [
      "Canonical requires 10 Multiplications, while Horner's requires only 4",
      "Canonical requires 4 Multiplications, while Horner's requires 10",
      "Both forms require exactly 4 Multiplications for a Quartic polynomial",
      "Both forms require exactly 10 Multiplications for a Quartic polynomial",
    ],
    correctAnswer: 0,
    explanation:
      "For a Quartic polynomial, the Canonical form in Table 2.1 requires 10 Multiplications, while the Horner's, nested form in Table 2.2 requires only 4, illustrating the efficiency advantage of Horner's method.\n\nReversing these counts, with Canonical at 4 and Horner's at 10, inverts the actual comparison; it is Horner's form that is more efficient, requiring fewer multiplications.\n\nBoth forms do not require the same count of 4; the Canonical form's Quartic requires 10 Multiplications, not 4.\n\nBoth forms do not require the same count of 10; the Horner's form's Quartic requires only 4 Multiplications, not 10, which is exactly the efficiency gain being illustrated.",
  },
  {
    id: "csc308_ch2_032",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The Horner's form of a Quartic polynomial requires exactly 4 Multiplications, while the Canonical form of the same Quartic polynomial requires 10 Multiplications.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Table 2.2 confirms the Horner's form Quartic requires 4 Multiplications, while Table 2.1 confirms the Canonical form Quartic requires 10 Multiplications, illustrating why Horner's method is more efficient for higher-degree polynomials.",
  },
  {
    id: "csc308_ch2_033",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In estimating the error in a polynomial expression, which term is taken as the estimated error?",
    options: [
      "The last term included in the expression",
      "The first neglected term",
      "The coefficient $a_{0}$ exclusively",
      "The independent variable $x^{n-1}$",
    ],
    correctAnswer: 1,
    explanation:
      "The first neglected term is taken as the estimated error in a polynomial expression.\n\nThe last term included in the expression is the opposite of the neglected term; it is the term that is included, not omitted, that would be used for this purpose.\n\n$a_0$ is the constant term, always included, not the neglected term used for error estimation.\n\n$x^{n-1}$ is a general variable expression, not specifically identified as the error term in the given examples.",
  },
  {
    id: "csc308_ch2_034",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "For the Linear polynomial P1(x) = a0 + a1x, what is the estimated error term?",
    options: ["$a_3x^3$", "$a_1x$", "$a_2x^2$", "a0"],
    correctAnswer: 2,
    explanation:
      "For $P_1(x) = a_0 + a_1x$, the estimated error is the first neglected term, $a_2x^2$, the next term that would appear if the polynomial were extended to degree 2.\n\n$a_3x^3$ is instead the error term for P2(x), the Quadratic case, not for the Linear P1(x).\n\n$a_1x$ is a term already included in $P_1(x)$, not a neglected term, so it cannot be the error estimate.\n\n$a_0$ is also a term already included in $P_1(x)$, not a neglected term.",
  },
  {
    id: "csc308_ch2_035",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "For the Quadratic polynomial $P_2(x) = a_0 + a_1x + a_2x^2$, what is the estimated error term?",
    options: ["$a_2x^2$", "$a_4x^4$", "$a_1x$", "$a_3x^3$"],
    correctAnswer: 3,
    explanation:
      "For $P_2(x) = a_0 + a_1x + a_2x^2$, the estimated error is the first neglected term, $a_3x^3$.\n\n$a_2x^2$ is a term already included in $P_2(x)$, not the neglected term.\n\n$a_4x^4$ is instead the error term for $P_3(x)$, the Cubic case, not for the Quadratic P2(x).\n\n$a_1x$ is also a term already included in $P_2(x)$, not a neglected term.",
  },
  {
    id: "csc308_ch2_036",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "For the Cubic polynomial $P_3(x) = a_0 + a_1x + a_2x^2 + a_3x^3$, what is the estimated error term?",
    options: ["$a_4x^4$", "$a_3x^3$", "$a_2x^2$", "$a_5x^5$"],
    correctAnswer: 0,
    explanation:
      "For $P_3(x) = a_0 + a_1x + a_2x^2 + a_3x^3$, the estimated error is the first neglected term, $a_4x^4$.\n\n$a_3x^3$ is a term already included in $P_3(x)$, not the neglected term.\n\n$a_2x^2$ is also a term already included in $P_3(x)$, not a neglected term.\n\n$a_5x^5$ would be the error term for a degree-4 polynomial $P_4(x)$, not for the Cubic $P_3(x)$, whose error term is $a_4x^4$.",
  },
  {
    id: "csc308_ch2_037",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A Computation Process Tree is described as a Binary Tree, in which the leaves are the output data and the root is the input data.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: in a Computation Process Tree, the leaves are the input data to the process, and the root is the output data from the process, the reverse of this statement's claim.",
  },
  {
    id: "csc308_ch2_038",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In a Computation Process Tree, what do the leaves represent?",
    options: [
      "The operations that manipulate two instances of data",
      "The input data to the process",
      "The output data from the process",
      "The Mantissa of a floating-point number",
    ],
    correctAnswer: 1,
    explanation:
      "In a Computation Process Tree, the leaves are the input data to the process.\n\nThe operations that manipulate two instances of data are instead represented by the nodes, not the leaves.\n\nThe output data from the process is instead represented by the root, not the leaves.\n\nThe Mantissa is an unrelated, later floating-point precision concept, not what the leaves of a Computation Process Tree represent.",
  },
  {
    id: "csc308_ch2_039",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In a Computation Process Tree, what do the nodes represent?",
    options: [
      "The input data to the process",
      "The output data from the process",
      "The operations that manipulate two instances of data connected to it",
      "The independent variable x exclusively",
    ],
    correctAnswer: 2,
    explanation:
      "In a Computation Process Tree, the nodes are the operations that manipulate two instances of data connected to it.\n\nThe input data to the process is instead represented by the leaves, not the nodes.\n\nThe output data from the process is instead represented by the root, not the nodes.\n\nThe independent variable x is one specific piece of input data, which would be represented among the leaves, not by a node representing an operation.",
  },
  {
    id: "csc308_ch2_040",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In a Computation Process Tree, what does the root represent?",
    options: [
      "The input data to the process",
      "The operations that manipulate two instances of data",
      "A single admissible regular term with no computation involved",
      "The output data from the process",
    ],
    correctAnswer: 3,
    explanation:
      "In a Computation Process Tree, the root of the tree is the output data from the process.\n\nThe input data to the process is instead represented by the leaves, not the root.\n\nThe operations that manipulate data are instead represented by the nodes, not the root.\n\nThe root represents the final output of a full computation process, not a single term with no computation involved.",
  },
  {
    id: "csc308_ch2_041",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The Computation Process Tree for a degree-2 (Quadratic) polynomial uses which method to structure its operations?",
    options: [
      "The Horner's method",
      "The Canonical method exclusively",
      "The predicate task specification method",
      "The organic, Atoledole, metaphor exclusively",
    ],
    correctAnswer: 0,
    explanation:
      "Figure 2.2, the Computation Process Tree for the Quadratic (degree 2) polynomial, is depicted using the Horner's method.\n\nThe Canonical method is a separate representation, and the tree is specifically built using the nested Horner's structure, not the Canonical sum-of-terms form.\n\nThe predicate task specification method is a formal concept from an entirely different, earlier note on agent architectures, unrelated to the Computation Process Tree.\n\nThe Organic, Atoledole, metaphor is a separate subsumption-based formulation, presented afterward as its own figure, not the structuring method used for the Computation Process Tree itself.",
  },
  {
    id: "csc308_ch2_042",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the Organic, Atoledole, formulation of polynomials, what is y0 defined as?",
    options: ["$y_1 + a_1x$", "a0", "$y_2 + a_2x^2$", "$y_3 + a_3x^3$"],
    correctAnswer: 1,
    explanation:
      "In the Organic formulation, y0 is defined as a0, the innermost, nominal constant or fractional number.\n\n$y_1 + a_1x$ is instead the formula for y2, not y0.\n\n$y_2 + a_2x^2$ is instead the formula for y3, not y0.\n\n$y_3 + a_3x^3$ is not one of the four defining equations given; the chain stops at y3, which is instead defined as $y_2 + a_3x^3$.",
  },
  {
    id: "csc308_ch2_043",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the Organic, Atoledole, formulation of polynomials, how is y2 defined?",
    options: ["a0", "$y_0 + a_1x$", "$y_1 + a_2x^2$", "$y_2 + a_3x^3$"],
    correctAnswer: 2,
    explanation:
      "In the Organic formulation, y2 is defined as $y_1 + a_2x^2$, the Quadratic polynomial subsuming the Linear one.\n\na0 is instead the definition of y0, not y2.\n\n$y_0 + a_1x$ is instead the definition of y1, not y2.\n\n$y_2 + a_3x^3$ is instead the definition of y3, using y2 as an input, not the definition of y2 itself.",
  },
  {
    id: "csc308_ch2_044",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the Organic, Atoledole, formulation, which of the following correctly describes the subsumption relationship?",
    options: [
      "The cubic polynomial y3 is subsumed in the quadratic y2, reversing the actual order",
      "All four, y0 through y3, are entirely independent, with no subsumption relationship",
      "y1 is subsumed in y0, which is subsumed in y2",
      "A nominal constant y0 is subsumed in the linear polynomial y1, which is subsumed in the quadratic y2, which is subsumed in the cubic y3",
    ],
    correctAnswer: 3,
    explanation:
      "In the Organic formulation, a nominal, a constant or fractional number, is y0, subsumed in a regular or linear polynomial y1, which is subsumed in the Quadratic polynomial y2, which is, in turn, subsumed in the Cubic polynomial y3.\n\nReversing the order, with y3 subsumed in y2, inverts the actual direction; y3, the Cubic, is the outermost, most general term, not the innermost.\n\nEach $y_k$ is explicitly built from the previous $y_{k-1}$ plus a new term, so they are not entirely independent of one another.\n\nPlacing y1 as subsumed in y0 misorders the chain; y0 is the innermost, most basic term, with y1 subsuming it, not the reverse.",
  },
  {
    id: "csc308_ch2_045",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Onka (Number) is for the purpose of which of the following?",
    options: [
      "Kika (Counting)",
      "Wiwon (Measurement)",
      "Calculation exclusively",
      "The Spatial aspect of a process",
    ],
    correctAnswer: 0,
    explanation:
      "Onka (Number) is for the purpose of Kika (Counting).\n\nWiwon (Measurement) is a later, broader concept that subsumes Calculation, which in turn subsumes Counting; Number's direct purpose is Counting, not Measurement itself.\n\nCalculation is described as a separate, context-neutral process built on variables, distinct from Counting, which Number directly serves.\n\nThe Spatial aspect of a process is expressed through Names, not Numbers, and is outside this course's purview entirely.",
  },
  {
    id: "csc308_ch2_046",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Counting is described as which kind of process?",
    options: [
      "A context-neutral process, expressible with variable-terms through a deductive and algorithmic process, following strict logical rules",
      "A regular computing process, expressible with numerical-terms through an inductive and iterative process",
      "A context-sensitive process, requiring infinite instances and heuristic approximation",
      "A purely spatial process, expressed through names and letters",
    ],
    correctAnswer: 1,
    explanation:
      "Counting is a regular computing process expressible with numerical-terms through an inductive and iterative process, used to accumulate or simplify constants.\n\nA context-neutral process, expressible with variable-terms through a deductive and algorithmic process, instead describes Calculation, not Counting.\n\nA context-sensitive process requiring infinite instances and heuristic approximation describes Orin (Quality) from the earlier note, not Counting.\n\nA purely spatial process, expressed through names and letters, describes the Spatial aspect, outside this course's purview, not Counting.",
  },
  {
    id: "csc308_ch2_047",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Counting is described as which kind of Mathematical operation, and by which agency is it effected?",
    options: [
      "An Algebraic operation, effected by an agency of instrument of context-neutral language",
      "A Measurement operation, effected by an agency of instrument of context-sensitive language",
      "An Arithmetic operation, effected by an agency of instrument of regular language",
      "A Spatial operation, effected through nominal-terms",
    ],
    correctAnswer: 2,
    explanation:
      "Counting is an Arithmetic operation, and Arithmetic is the Mathematics of the creation and manipulation of constants, effected by an agency of instrument of regular language.\n\nAn Algebraic operation, effected by context-neutral language, instead describes Calculation, not Counting.\n\nA Measurement operation, effected by context-sensitive language, instead describes Wiwon (Measurement), a later, broader concept, not Counting itself.\n\nA Spatial operation through nominal-terms is unrelated to Counting, which concerns numerical-terms and the Temporal aspect.",
  },
  {
    id: "csc308_ch2_048",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Calculation is described as a process for which purpose, effected through which kind of process?",
    options: [
      "The purpose of counting, a regular process effected with constant-terms through an iterative and inductive process",
      "The purpose of measurement, a context-sensitive process effected with infinite variable-terms",
      "The purpose of naming, a spatial process effected with letters",
      "The purpose of explanation, a context-neutral process effected with variable-terms through a deductive and algorithmic process",
    ],
    correctAnswer: 3,
    explanation:
      "Calculation is for the purpose of explanation, a context-neutral process effected with variable-terms through a deductive and algorithmic process.\n\nThe purpose of counting, effected with constant-terms through an iterative and inductive process, instead describes Counting itself, not Calculation.\n\nThe purpose of measurement, described as context-sensitive, instead describes Wiwon (Measurement), a broader concept that Calculation is necessary but not sufficient for, not Calculation itself.\n\nThe purpose of naming, through letters, describes the Spatial aspect, outside this course's purview, not Calculation.",
  },
  {
    id: "csc308_ch2_049",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Calculation is described as which kind of Mathematical operation, effected by which agency?",
    options: [
      "An Algebraic process, effected by an agency of instrument of context-neutral language",
      "An Arithmetic process, effected by an agency of instrument of regular language, exclusively for constants",
      "A Heuristic process, effected by an agency of instrument of context-sensitive language, approximating infinite ranges",
      "A Spatial process, effected by an agency of nominal-terms",
    ],
    correctAnswer: 0,
    explanation:
      "Calculation is an Algebraic process, and Algebra is the Mathematics of the creation and manipulation of variables, effected by an agency of instrument of context-neutral language.\n\nAn Arithmetic process, effected by regular language, instead describes Counting, not Calculation.\n\nA Heuristic process, effected by context-sensitive language, instead describes the approximation process associated with Orin (Quality), not Calculation.\n\nA Spatial process through nominal-terms is unrelated to Calculation, which concerns numerical variable-terms and the Temporal aspect.",
  },
  {
    id: "csc308_ch2_050",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "How are Correct and Incorrect ascribed to a Calculation involving Constant or Fraction?",
    options: [
      "Through an instrument of regular language exclusively",
      "Through an instrument of context-neutral language",
      "Through an instrument of context-sensitive language exclusively",
      "Correct and Incorrect cannot be ascribed to a Calculation at all",
    ],
    correctAnswer: 1,
    explanation:
      "Correct and Incorrect are ascribed to Calculation with Constant or Fraction through an instrument of context-neutral language.\n\nRegular language deals only with an isolated Constant and does not admit the binary opposite pairing of Correct and Incorrect, so it is not the instrument through which this ascription is made.\n\nContext-sensitive language treats binary opposites as mutually inclusive, not as the mutually exclusive Correct-versus-Incorrect distinction being described here.\n\nCorrect and Incorrect are explicitly ascribed to Calculation through context-neutral language, so it is not true that this ascription cannot be made at all.",
  },
  {
    id: "csc308_ch2_051",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Representation is necessary, though insufficient, for the computation of counting and calculation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Representation is necessary, though insufficient, for the computation of counting and calculation; an instance that cannot be represented with symbols is outside the ambit of this computation.",
  },
  {
    id: "csc308_ch2_052",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is given as an example of something that is uncountable but can be calculated?",
    options: [
      "The digits {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} of the Decimal scheme",
      "The number of Addition operations in a Cubic polynomial",
      "Length, Perimeter, Area, and Volume",
      "The number of leaves in a Computation Process Tree",
    ],
    correctAnswer: 2,
    explanation:
      "Length, Perimeter, Area, and Volume are given as examples of quantities that are uncountable but can be calculated, alongside Speed, Velocity, Acceleration, and Mass, Temperature, Pressure.\n\nThe digits of the Decimal scheme are a finite, discrete, countable set used to construct numbers, the opposite of an uncountable-but-calculable quantity.\n\nThe number of Addition operations in a Cubic polynomial is a specific, countable integer, three, not an example of an uncountable quantity.\n\nThe number of leaves in a Computation Process Tree is a specific, countable integer for any given tree, not an example of an uncountable quantity.",
  },
  {
    id: "csc308_ch2_053",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Speed, Velocity, and Acceleration are given as examples of quantities that are countable but cannot be calculated.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: Speed, Velocity, and Acceleration are given as examples of quantities that are uncountable, meaning they cannot be counted, but that CAN be calculated, the reverse of this statement's claim.",
  },
  {
    id: "csc308_ch2_054",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is given as an example of a quantity that is uncountable but can be calculated?",
    options: [
      "The finite set of digits in a Binary numbering scheme",
      "The number of terms in a Monomial",
      "The Yoruba word for 'Digit', Ika",
      "Mass, Temperature, and Pressure",
    ],
    correctAnswer: 3,
    explanation:
      "Mass, Temperature, and Pressure are given as examples of quantities that are uncountable but can be calculated.\n\nThe finite set of Binary digits, {0,1}, is countable by definition, the opposite of the uncountable-but-calculable examples being discussed.\n\nA Monomial has exactly one, countable, term by definition, not an example of an uncountable quantity.\n\nIka is a vocabulary term for Digit, not a physical quantity that is uncountable but calculable.",
  },
  {
    id: "csc308_ch2_055",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In a calculation, binary opposites are treated as which of the following?",
    options: [
      "Mutually exclusive and contradictory",
      "Mutually inclusive and complementary",
      "Number-neutral and logic-neutral",
      "Entirely inadmissible in every circumstance",
    ],
    correctAnswer: 0,
    explanation:
      "Binary opposites are treated as mutually exclusive and contradictory in a calculation, matching Calculation's context-neutral nature.\n\nBeing mutually inclusive and complementary instead describes how binary opposites are treated in a range, a context-sensitive instance, not in a calculation.\n\nBeing number-neutral and logic-neutral describes the digit Zero specifically, not the general treatment of binary opposites in a calculation.\n\nBinary opposites are admissible, just treated as mutually exclusive, in a calculation; they are not entirely inadmissible, which instead describes their treatment in Regular language.",
  },
  {
    id: "csc308_ch2_056",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A range is described as which kind of instance, and how are binary opposites treated within it?",
    options: [
      "A regular instance, in which binary opposite is entirely inadmissible",
      "A context-sensitive instance, in which binary opposite is treated as mutually inclusive and complementary",
      "A context-neutral instance, in which binary opposite is always treated strictly as mutually exclusive and contradictory",
      "A nominal instance, expressed only through letters",
    ],
    correctAnswer: 1,
    explanation:
      "A range is a context-sensitive instance, in which binary opposite is treated as mutually inclusive and complementary.\n\nBeing a regular instance with inadmissible binary opposites instead describes Eyo (Constant), not a range.\n\nBeing a context-neutral instance with mutually exclusive binary opposites instead describes a calculation, or Iwon (Quantity), not a range.\n\nA nominal instance expressed through letters describes the Spatial aspect, outside this course's purview, not a numerical range.",
  },
  {
    id: "csc308_ch2_057",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Wiwon (Measurement) is used for which purpose?",
    options: [
      "To construct the alphabet of a numbering scheme",
      "To simplify a monomial into a single digit",
      "To quantify a range",
      "To formulate the Spatial aspect exclusively",
    ],
    correctAnswer: 2,
    explanation:
      "Wiwon (Measurement) is used to quantify a range, with the quantification of the range reduced into number through specialised and calibrated equipment formulated and ascribed using calculation.\n\nConstructing a numbering scheme's alphabet describes the origin of Ika (Digits), a separate, earlier concept, not the purpose of Measurement.\n\nA monomial already has a single term by definition; Measurement's purpose is quantifying a range, not simplifying an already-single-term expression.\n\nMeasurement is explicitly described as ascribing numerical identity, a Temporal-aspect concern, to the spatial aspect of a range, not as formulating the Spatial aspect exclusively on its own.",
  },
  {
    id: "csc308_ch2_058",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Measurement treats which kind of instance or experience as though it were countable?",
    options: [
      "An already fully countable and quantifiable instance",
      "Only instances that have already been fully calculated with no remaining error",
      "Only spatial instances expressed with letters",
      "An uncountable and unquantifiable instance or experience",
    ],
    correctAnswer: 3,
    explanation:
      "Measurement is used to treat an uncountable and unquantifiable instance or experience as though it were countable.\n\nAn already fully countable and quantifiable instance would not require Measurement's specific function of treating the uncountable as though countable.\n\nMeasurement is not restricted to instances that have already been fully calculated with no remaining error; it is the process, involving calculation among other things, that produces a numerical rendering, error included.\n\nMeasurement concerns numerical rendering of the Temporal aspect of a range, not exclusively spatial instances expressed with letters.",
  },
  {
    id: "csc308_ch2_059",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the four things Measurement is grounded in?",
    options: [
      "Standard, a prescription to guarantee consensus, agreement, or conformity",
      "Ijokan (Constancy), the criterion for Regular language",
      "The Computation Process Tree",
      "The organic, Atoledole, subsumption chain of y0 through y3 stages",
    ],
    correctAnswer: 0,
    explanation:
      "Measurement is grounded in Calculation, Standard, Apparatus, and Precaution; Standard is described as a prescription to guarantee consensus, agreement, or conformity for using calculation.\n\nIjokan (Constancy) is the assessment criterion for Regular language from the earlier note, not one of the four things Measurement is grounded in.\n\nThe Computation Process Tree is a diagrammatic tool for polynomial computation, not one of the four groundings of Measurement.\n\nThe y0 through y3 subsumption is the Organic formulation of polynomials, not one of the four groundings of Measurement.",
  },
  {
    id: "csc308_ch2_060",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the four things Measurement is grounded in?",
    options: [
      "The Horner's or nested form of polynomial expression",
      "Apparatus, a device or mechanism for reducing the Standard into number",
      "The digit Zero exclusively",
      "The subsumption of Regular into Context-neutral language alone",
    ],
    correctAnswer: 1,
    explanation:
      "Measurement is grounded in Calculation, Standard, Apparatus, and Precaution; Apparatus is described as a device or mechanism for reducing the Standard into number.\n\nThe Horner's or nested form is a polynomial representation technique, not one of the four groundings of Measurement.\n\nThe digit Zero, while important elsewhere, is not itself listed as one of the four groundings of Measurement.\n\nThe subsumption of Regular into Context-neutral language alone is an incomplete chain; Measurement's grounding instead spans Calculation, Standard, Apparatus, and Precaution as four distinct items.",
  },
  {
    id: "csc308_ch2_061",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the four things Measurement is grounded in?",
    options: [
      "Ijokan (Constancy), the criterion for Regular language",
      "The Computation Process Tree",
      "Standard, a prescription to guarantee consensus, agreement, or conformity",
      "The organic, Atoledole, subsumption chain of y0 through y3 stages",
    ],
    correctAnswer: 2,
    explanation:
      "Measurement is grounded in Calculation, Standard, Apparatus, and Precaution; Standard is described as a prescription to guarantee consensus, agreement, or conformity for using calculation.\n\nIjokan (Constancy) is the assessment criterion for Regular language from the earlier note, not one of the four things Measurement is grounded in.\n\nThe Computation Process Tree is a diagrammatic tool for polynomial computation, not one of the four groundings of Measurement.\n\nThe y0 through y3 subsumption is the Organic formulation of polynomials, not one of the four groundings of Measurement.",
  },
  {
    id: "csc308_ch2_062",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the four things Measurement is grounded in?",
    options: [
      "The Horner's or nested form of polynomial expression",
      "The digit Zero exclusively",
      "The subsumption of Regular into Context-neutral language alone",
      "Apparatus, a device or mechanism for reducing the Standard into number",
    ],
    correctAnswer: 3,
    explanation:
      "Measurement is grounded in Calculation, Standard, Apparatus, and Precaution; Apparatus is described as a device or mechanism for reducing the Standard into number.\n\nThe Horner's or nested form is a polynomial representation technique, not one of the four groundings of Measurement.\n\nThe digit Zero, while important elsewhere, is not itself listed as one of the four groundings of Measurement.\n\nThe subsumption of Regular into Context-neutral language alone is an incomplete chain; Measurement's grounding instead spans Calculation, Standard, Apparatus, and Precaution as four distinct items.",
  },
  {
    id: "csc308_ch2_063",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Temperature'?",
    options: [
      "Thermometer, and kelvin",
      "Ruler, and the metre standard",
      "Clock, and Seconds as the standard",
      "Barometer, and Pascal",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.3 lists Temperature as measured with a Thermometer, with kelvin as its standard of measure.\n\nRuler and metre instead describe the measuring device and standard for Length, not Temperature.\n\nClock and Seconds instead describe the measuring device and standard for Time, not Temperature.\n\nBarometer and Pascal instead describe the measuring device and standard for Atmospheric pressure, not Temperature.",
  },
  {
    id: "csc308_ch2_064",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Length'?",
    options: [
      "Balance, and kilogram",
      "Ruler, and metre",
      "Voltmeter, and volts",
      "Ohmmeter, and ohms",
    ],
    correctAnswer: 1,
    explanation:
      "Table 2.3 lists Length as measured with a Ruler, with metre as its standard of measure.\n\nBalance and kilogram instead describe the measuring device and standard for Mass, not Length.\n\nVoltmeter and volts instead describe the measuring device and standard for Electric potential, not Length.\n\nOhmmeter and ohms instead describe the measuring device and standard for Electric resistance, not Length.",
  },
  {
    id: "csc308_ch2_065",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Electric current'?",
    options: [
      "Voltmeter, and volts",
      "Ohmmeter, and ohms",
      "Electricity meter, and ampere",
      "Speedometer, and metre per second",
    ],
    correctAnswer: 2,
    explanation:
      "Table 2.3 lists Electric current as measured with an Electricity meter, with ampere as its standard of measure.\n\nVoltmeter and volts instead describe the measuring device and standard for Electric potential, not Electric current.\n\nOhmmeter and ohms instead describe the measuring device and standard for Electric resistance, not Electric current.\n\nSpeedometer and metre per second instead describe the measuring device and standard for Speed, not Electric current.",
  },
  {
    id: "csc308_ch2_066",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The range 'Energy' is associated with which standard of measure, and what measuring device?",
    options: [
      "Pascal as the standard, measured with a Barometer",
      "Joule as the standard, measured with a Speedometer",
      "Kelvin as the standard, measured with a Thermometer",
      "Joule as the standard, with no specific measuring device listed",
    ],
    correctAnswer: 3,
    explanation:
      "Table 2.3 lists Energy with Joule as its standard of measure, with a dash indicating no specific measuring device is listed for it in the table.\n\nPascal, measured with a Barometer, instead describes Atmospheric pressure, not Energy.\n\nA Speedometer is instead the measuring device for Speed, not Energy, and Energy's standard is Joule, not Speed's standard.\n\nKelvin, measured with a Thermometer, instead describes Temperature, not Energy.",
  },
  {
    id: "csc308_ch2_067",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Okun (Energy) is described as which of the following?",
    options: [
      "The extent of strength within an agency with which to effect a process",
      "The context-neutral language rendering of Power",
      "The regular language rendering of Force",
      "The Yoruba word for Digit",
    ],
    correctAnswer: 0,
    explanation:
      "Okun (Energy) is the extent of strength within an agency with which to effect a process; energy is self-recursive in its agency, and hence inextricable from its agency.\n\nThe context-neutral language rendering of Energy is instead Agbara (Power), not a description of Energy itself.\n\nThe regular language rendering of Power is instead Ipa (Force), not a description of Energy itself.\n\nThe Yoruba word for Digit is Ika, an entirely different concept from Okun (Energy).",
  },
  {
    id: "csc308_ch2_068",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Agbara ('Power') is described as which of the following?",
    options: [
      "The regular language rendering of Power itself",
      "The context-neutral language rendering of Energy",
      "The extent of strength within an agency, the definition of Energy itself",
      "The Yoruba word for a numbering scheme's alphabet",
    ],
    correctAnswer: 1,
    explanation:
      "Agbara (Power) is the context-neutral language rendering of Energy.\n\nDescribing Power as its own regular-language rendering is circular and does not match the chain; it is Ipa (Force) that is the regular-language rendering of Power, not Power rendering itself.\n\nThe extent of strength within an agency is the definition of Okun (Energy) itself, not of Agbara (Power), which is instead Energy's context-neutral rendering.\n\nThe Yoruba word for a numbering scheme's alphabet is Ika (Digits), an entirely different concept from Agbara (Power).",
  },
  {
    id: "csc308_ch2_069",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Ipa ('Force') is described as which of the following?",
    options: [
      "The context-neutral language rendering of Energy",
      "The context-sensitive language rendering of Energy",
      "The regular language rendering of Power",
      "The extent of strength within an agency, the definition of Energy itself",
    ],
    correctAnswer: 2,
    explanation:
      "Ipa (Force) is the regular language rendering of Power (Agbara).\n\nThe context-neutral language rendering of Energy is instead Agbara (Power) itself, not Ipa (Force).\n\nThe context-sensitive language rendering is not the term used for Ipa; the chain moves from Energy to Power (context-neutral) to Force (regular), not through a context-sensitive stage.\n\nThe extent of strength within an agency is the definition of Okun (Energy) itself, not of Ipa (Force), which is instead the regular rendering of Power.",
  },
  {
    id: "csc308_ch2_070",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the chain from Energy to Power to Force, the quality ascribed to energy is quantified as power and regularised and expressed as constant through which term?",
    options: [
      "Measurement",
      "The Mantissa",
      "The Computation Process Tree",
      "Force",
    ],
    correctAnswer: 3,
    explanation:
      "The quality ascribed to energy is quantified as power and regularised and expressed as constant through Force, completing the chain from context-sensitive Quality, through context-neutral Quantity, to regular Constant.\n\nMeasurement is the broader process used to render Energy into number through various calculations, scales, and standards, not the specific final term in this Quality-Power-Force chain.\n\nThe Mantissa is an unrelated, later floating-point precision concept, not the final regularised term in the Energy-Power-Force chain.\n\nThe Computation Process Tree is a diagrammatic polynomial computation tool, unrelated to the Energy-Power-Force chain.",
  },
  {
    id: "csc308_ch2_071",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the subsumption chain for counting and calculation, which of the following correctly orders the relationship?",
    options: [
      "Numbering is subsumed in Counting, which is subsumed in Calculation, which is subsumed in Measurement",
      "Measurement is subsumed in Calculation, which is subsumed in Counting, which is in turn subsumed in Numbering",
      "Counting is subsumed in Numbering, which is subsumed in Measurement, which is subsumed in Calculation",
      "Numbering, Counting, Calculation, and Measurement are entirely independent, with no subsumption at all",
    ],
    correctAnswer: 0,
    explanation:
      "Numbering is subsumed in Counting, which is subsumed in Calculation, which is, in turn, subsumed in Measurement.\n\nReversing this order, with Measurement subsumed in Calculation subsumed in Counting subsumed in Numbering, inverts the actual chain; Measurement is the outermost, most general concept, not the innermost.\n\nPlacing Numbering as subsumed in Measurement misorders the chain; Numbering is the innermost concept, and Measurement is the outermost.\n\nThe notes explicitly describe a subsumption relationship between these four concepts, so they are not entirely independent of one another.",
  },
  {
    id: "csc308_ch2_072",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Every instance of counting is described as a constant, while every instance of calculation is described as what?",
    options: [
      "Also a constant, identical to counting",
      "A variable",
      "A range",
      "A nominal-term",
    ],
    correctAnswer: 1,
    explanation:
      "Every instance of counting is a constant, and every instance of calculation is a variable, matching Counting's regular-language basis and Calculation's context-neutral-language basis.\n\nCalculation being identical to counting as also a constant contradicts the explicit distinction; calculation is specifically a variable, distinguishing it from counting's constant basis.\n\nA range is instead an instance of Measurement, a context-sensitive concept, not a description of what a calculation instance is.\n\nA nominal-term belongs to the Spatial aspect, unrelated to the numerical, Temporal-aspect basis of a calculation instance.",
  },
  {
    id: "csc308_ch2_073",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Measurement is described as the numerical rendering of a context-sensitive instance to the extent that which language permits?",
    options: [
      "Regular language",
      "No language permits any rendering of a context-sensitive instance at all",
      "Context-neutral language",
      "Only the Spatial-aspect instrument of Names permits this rendering",
    ],
    correctAnswer: 2,
    explanation:
      "Measurement is the numerical rendering of a context-sensitive instance to the extent that context-neutral language permits, since a context-sensitive range must be approximated through context-neutral means.\n\nRegular language deals only with a single, isolated constant and cannot render a context-sensitive range at all, so it is not the language referenced here.\n\nThe notes explicitly describe context-neutral language as permitting this rendering to some extent, so it is not true that no language permits any rendering at all.\n\nNames belong to the Spatial aspect, outside this course's purview, and are not the instrument through which Measurement's numerical rendering is permitted.",
  },
  {
    id: "csc308_ch2_074",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Popo ('A Range') has which two aspects?",
    options: [
      "Only a temporal aspect, with no spatial aspect at all",
      "Only a spatial aspect, with no temporal aspect at all",
      "Regular and context-neutral aspects exclusively, with no context-sensitive aspect",
      "Temporal and spatial aspects",
    ],
    correctAnswer: 3,
    explanation:
      "Popo (a Range) has temporal and spatial aspects, and Wiwon (Measurement) is used to ascribe numerical identity to the instance of location on the spatial aspect of a range.\n\nA range having only a temporal aspect, with no spatial aspect, contradicts the explicit statement that it has both.\n\nA range having only a spatial aspect, with no temporal aspect, also contradicts the explicit statement that it has both.\n\nA range is explicitly described as a context-sensitive instance, so it is not limited to regular and context-neutral aspects with no context-sensitive aspect at all.",
  },
  {
    id: "csc308_ch2_075",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Since temporal and spatial instances are treated as mutually inclusive and complementary in the formulation of the measurement of a range, what does this imply about measurement?",
    options: [
      "Measurement is a context-sensitive process",
      "Measurement is a purely regular process",
      "Measurement is a purely spatial process, with no temporal component",
      "Measurement cannot be formulated at all",
    ],
    correctAnswer: 0,
    explanation:
      "Since temporal and spatial instances are treated as mutually inclusive and complementary in the formulation of the measurement of a range, this implies that Measurement is a context-sensitive process.\n\nA purely regular process treats binary opposites as neutral and inadmissible, the opposite of the mutually inclusive treatment described here.\n\nMeasurement explicitly numerically renders the location on the spatial aspect, but this rendering itself is tied to the temporal aspect through numbers, so it is not a purely spatial process with no temporal component.\n\nThe notes explicitly describe how measurement of a range is formulated, so it is not true that it cannot be formulated at all.",
  },
  {
    id: "csc308_ch2_076",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A range X is prescribed with a mutually inclusive and complementary binary opposite formulation, represented as which of the following?",
    options: [
      "$X^2$ exclusively",
      "$\\pm X$",
      "The digit Zero exclusively",
      "The Mantissa of X",
    ],
    correctAnswer: 1,
    explanation:
      "A range X is prescribed with a mutually inclusive and complementary binary opposite formulation represented as $\\pm X$, depicted in Figure 2.5 with $-X$ and $+X$ on either side of the Middle, M.\n\n$X^2$ relates to the later discussion of the squaring of regular scale for a context-neutral range like Area, not the basic representation of a range itself.\n\nThe digit Zero is used within this formulation, to mark the Middle, but the range itself is represented as $\\pm X$, not by Zero alone.\n\nThe Mantissa is a separate, later floating-point precision concept, not the representation of a range.",
  },
  {
    id: "csc308_ch2_077",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the context-neutral simplification of plus-or-minus X into -X and +X, what does the location marked M ('Middle') get reckoned as?",
    options: ["Infinity", "The Mantissa", "Zero (0)", "The largest constant"],
    correctAnswer: 2,
    explanation:
      "In the context-neutral simplification, the location marked as M (Middle) is reckoned as Zero (0), used to indicate the location at which -X and +X are separated into mutually exclusive and contradictory instances in a range.\n\nInfinity is inherent in the range as a whole, a context-sensitive property, but it is Zero, not Infinity, that M is reckoned as in this context-neutral simplification.\n\nThe Mantissa is a separate, later floating-point precision concept, not what M is reckoned as here.\n\nThere is no largest constant, as established in the earlier note, and this concept is unrelated to what M is reckoned as in a range.",
  },
  {
    id: "csc308_ch2_078",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The Middle (M) of a balanced range plus-or-minus X, its equilibrium, is reckoned as which of the following in the numerical rendering of the range?",
    options: [
      "The Mantissa",
      "The Exponent",
      "The largest recorded value",
      "The AVERAGE",
    ],
    correctAnswer: 3,
    explanation:
      "The Middle is reckoned as the AVERAGE in the numerical rendering of the range; if several instances of measurement of the range are recorded with the same scale, the desirable numerical rendering of the range is the AVERAGE of the recordings.\n\nThe Mantissa is a separate, later floating-point precision concept, not what the Middle of a range is reckoned as.\n\nThe Exponent is also a separate, later floating-point precision concept, not what the Middle of a range is reckoned as.\n\nThe largest recorded value is not described as the desirable numerical rendering; it is specifically the AVERAGE that is described as desirable and consensual.",
  },
  {
    id: "csc308_ch2_079",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the Hot and Cold temperature example, the state +X of the range is described as being to the extent that the state of -X is what?",
    options: [
      "NOT reckoned",
      "Simultaneously and fully reckoned alongside +X",
      "Reckoned only when Zero is present",
      "Reckoned only in a regular language formulation",
    ],
    correctAnswer: 0,
    explanation:
      "The state +X of the range is to the extent that the state of -X is NOT reckoned; for example, if X is Heat, reckoned in the range Hot (+X) and Cold (-X), the numerical rendering for a measurement of temperature is Hot to the extent that it is NOT Cold.\n\nSimultaneous and full reckoning of both -X and +X together would describe the mutually inclusive nature of the range as a whole, a context-sensitive concept, not this specific implication about the degree to which one state is reckoned relative to the other.\n\nZero marks the Middle of the range in the context-neutral simplification, but the implication about +X being to the extent -X is not reckoned is a separate statement, not conditioned on Zero's presence.\n\nRegular language deals only with a single isolated constant, unrelated to this implication about a range's binary opposite states.",
  },
  {
    id: "csc308_ch2_080",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Regular range is subsumed in context-neutral and context-sensitive range. What does this imply is inherent in every range?",
    options: [
      "Zero, as an admissible regular term",
      "Infinity",
      "A finite, single, isolated instance only",
      "The Mantissa and Exponent",
    ],
    correctAnswer: 1,
    explanation:
      "Regular range is subsumed in context-neutral and context-sensitive range; therefore, infinity is inherent in every range, since context-sensitive range, the outermost, subsuming level, is itself infinite.\n\nZero is explicitly not an admissible regular term, so it is not what is implied to be inherent in every range through this subsumption.\n\nA finite, single, isolated instance describes a Regular-language Constant specifically, not the general property implied to be inherent in every range through this broader subsumption.\n\nThe Mantissa and Exponent are later, specific floating-point precision concepts, not what is implied to be inherent in every range here.",
  },
  {
    id: "csc308_ch2_081",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A scale is used to ascribe number to an isolated instance on which kind of range?",
    options: [
      "A context-neutral range exclusively",
      "A context-sensitive range exclusively",
      "A regular language range",
      "No range; scales are used only for nominal-terms",
    ],
    correctAnswer: 2,
    explanation:
      "A scale is used to ascribe number to an isolated instance on a regular language range; for example, numerical data calibrated with scales such as Feet, Inch, and Metre are for the numerical rendering of the range 'Length'.\n\nA context-neutral range instead uses the squaring of the regular scale to ascribe number to a pair of instances, not a plain scale for an isolated instance.\n\nA context-sensitive range instead uses the cube of the regular scale to ascribe number to three pairs of instances, not a plain scale for an isolated instance.\n\nScales such as Feet, Inch, and Metre are explicitly used for numerical rendering of a range like Length, not for nominal-terms, which belong to the Spatial aspect.",
  },
  {
    id: "csc308_ch2_082",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The squaring of a regular scale, such as Feet squared, Inch squared, or Metre squared, is used to ascribe number to which kind of range?",
    options: [
      "A single, isolated instance in a regular range, such as 'Length'",
      "Three pairs of instances in a context-sensitive range, such as 'Volume'",
      "No range at all; squared scales are purely theoretical",
      "A pair of instances in a context-neutral range, such as 'Area'",
    ],
    correctAnswer: 3,
    explanation:
      "The squaring of a regular scale is used to ascribe number to a pair of instances in a context-neutral range; numerical data scaled with the square, such as Feet squared, Inch squared, or Metre squared, are the numerical rendering of the range 'Area'.\n\nA single, isolated instance on a regular range, like 'Length', instead uses an unsquared scale such as Feet or Metre directly, not a squared one.\n\nThree pairs of instances in a context-sensitive range, like 'Volume', instead use the cube of the regular scale, not the square.\n\nSquared scales are explicitly given practical examples, such as Feet squared for Area, so they are not purely theoretical.",
  },
  {
    id: "csc308_ch2_083",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The cube of a regular scale, such as Feet cubed, Inch cubed, or Metre cubed, is used to ascribe number to which kind of range?",
    options: [
      "Three pairs of instances in a context-sensitive range, such as 'Volume'",
      "A pair of instances found in a context-neutral range, such as 'Area' typically",
      "A single, isolated instance in a regular range, such as 'Length'",
      "No range; cubed scales are used only for measuring Time",
    ],
    correctAnswer: 0,
    explanation:
      "The cube of a regular scale is used to ascribe number to three pairs of instances in a context-sensitive range; numerical data scaled with the cube, such as Feet cubed, Inch cubed, or Metre cubed, are the numerical rendering of the range 'Volume', with infinity inherent in this context-sensitive rendering.\n\nA pair of instances in a context-neutral range, like 'Area', instead uses the square of the regular scale, not the cube.\n\nA single, isolated instance in a regular range, like 'Length', instead uses an unsquared, uncubed scale directly, not the cube.\n\nTime is measured with a Clock, standardised in Seconds, and is not described as using a cubed scale.",
  },
  {
    id: "csc308_ch2_084",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Change, computed as the difference between Location divided by the difference between State, is described as the ratio of which two terms?",
    options: [
      "Transition divided by Displacement",
      "Displacement divided by Transition",
      "Gap divided by Interval",
      "Interval divided by Gap",
    ],
    correctAnswer: 1,
    explanation:
      "Change is computed as the numerical rendering of the difference between Location, $L_2 - L_1$, divided by the numerical rendering of the difference between State, $S_2 - S_1$, that is, Displacement divided by Transition.\n\nReversing the ratio to Transition divided by Displacement inverts the formula given, which places Displacement, the Location difference, in the numerator, and Transition, the State difference, in the denominator.\n\nGap divided by Interval swaps in the earlier note's terms for the difference between two locations (Gap) and two states (Interval) individually, rather than the Displacement-over-Transition ratio specifically named for Change here.\n\nInterval divided by Gap is also a mismatched, reversed combination of the earlier note's individual difference terms, not the Displacement-over-Transition ratio given for Change.",
  },
  {
    id: "csc308_ch2_085",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Calculation is described as necessary but NOT sufficient for what?",
    options: [
      "Counting",
      "Numbering",
      "Measurement",
      "Constructing a numbering scheme's alphabet",
    ],
    correctAnswer: 2,
    explanation:
      "Calculation is necessary but NOT sufficient for Measurement; in addition to calculation, Standard and Calibration, or scale, are used to render the calculation for a measurement into number.\n\nCounting is a separate, regular-language process built on constants, not something Calculation is described as necessary but insufficient for.\n\nNumbering is the innermost concept in the subsumption chain, preceding even Counting, not something Calculation is described as necessary but insufficient for.\n\nConstructing a numbering scheme's alphabet describes the origin of Ika (Digits), an earlier, separate concept, not something Calculation is described as necessary but insufficient for.",
  },
  {
    id: "csc308_ch2_086",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A measurement process is effected through which three kinds of agency?",
    options: [
      "Regular agency, Context-neutral agency, and Context-sensitive agency exclusively, with no other named agencies",
      "Digit agency, Number agency, and Constant agency",
      "Canonical agency, Horner's agency, and Organic agency",
      "Acceptor agency, Emitter agency, and Transducer agency",
    ],
    correctAnswer: 3,
    explanation:
      "A measurement process is effected through either an Acceptor agency, for example a scale for measuring weight, an Emitter agency, for example the clock for measuring time, or a Transducer agency, for example a thermometer for measuring Temperature.\n\nRegular, Context-neutral, and Context-sensitive are language instruments, a separate classification scheme from the physical agencies, Acceptor, Emitter, and Transducer, used to effect measurement.\n\nDigit, Number, and Constant are hierarchy terms from the earlier note, not the three physical agencies through which a measurement process is effected.\n\nCanonical, Horner's, and Organic are polynomial representation forms, not the three physical agencies through which a measurement process is effected.",
  },
  {
    id: "csc308_ch2_087",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A scale for measuring weight is given as an example of which kind of agency?",
    options: [
      "Acceptor agency",
      "Emitter agency, for a clock",
      "Transducer agency, for a thermometer",
      "Regular agency",
    ],
    correctAnswer: 0,
    explanation:
      "A scale for measuring weight is given as an example of an Acceptor agency.\n\nAn Emitter agency is instead exemplified by the clock for measuring time, not a weight scale.\n\nA Transducer agency is instead exemplified by a thermometer for measuring Temperature, not a weight scale.\n\nRegular agency is not one of the three named measurement agencies; the three are Acceptor, Emitter, and Transducer.",
  },
  {
    id: "csc308_ch2_088",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The clock used for measuring time is given as an example of which kind of agency?",
    options: [
      "Acceptor agency",
      "Emitter agency",
      "Transducer agency",
      "Context-sensitive agency",
    ],
    correctAnswer: 1,
    explanation:
      "The clock for measuring time is given as an example of an Emitter agency.\n\nAn Acceptor agency is instead exemplified by a scale for measuring weight, not the clock.\n\nA Transducer agency is instead exemplified by a thermometer for measuring Temperature, not the clock.\n\nContext-sensitive agency is not one of the three named measurement agencies; the three are Acceptor, Emitter, and Transducer.",
  },
  {
    id: "csc308_ch2_089",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A thermometer for measuring Temperature is given as an example of which kind of agency?",
    options: [
      "Acceptor agency",
      "Emitter agency",
      "Transducer agency",
      "Regular agency",
    ],
    correctAnswer: 2,
    explanation:
      "A thermometer for measuring Temperature is given as an example of a Transducer agency.\n\nAn Acceptor agency is instead exemplified by a scale for measuring weight, not a thermometer.\n\nAn Emitter agency is instead exemplified by the clock for measuring time, not a thermometer.\n\nRegular agency is not one of the three named measurement agencies; the three are Acceptor, Emitter, and Transducer.",
  },
  {
    id: "csc308_ch2_090",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the assessment of a recording $\\bar{X}$ for a measurement of range X, what does e represent?",
    options: [
      "The exact value of $\\bar{X}$ itself",
      "The Mantissa of the floating-point representation of X",
      "The number of digits in the alphabet of the numbering scheme used",
      "The admissible, or tolerable, discrepancy between $\\bar{X}$ and X",
    ],
    correctAnswer: 3,
    explanation:
      "e is the admissible, or tolerable, discrepancy between $\\bar{X}$ and X, that is, the admissible error.\n\n$\\bar{X}$ itself is the recording for an instance of the measurement of X, a separate quantity from e, the tolerable discrepancy allowed between them.\n\nThe Mantissa is a separate, later floating-point precision concept, not what e represents in this measurement assessment.\n\nThe number of digits in a numbering scheme's alphabet is an unrelated, earlier concept, not what e represents here.",
  },
  {
    id: "csc308_ch2_091",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "When is a recording $\\bar{X}$ described as Exact?",
    options: [
      "When $|X - \\bar{X}| = 0.0$",
      "When $|X - \\bar{X}| < e$",
      "When $|X - \\bar{X}| > e$",
      "When $|X - \\bar{X}| \\neq 0.0$",
    ],
    correctAnswer: 0,
    explanation:
      "According to Equation 2.7, $\\bar{X}$ is Exact if $|X - \\bar{X}| = 0.0$.\n\nBeing less than e instead describes the Precise case, a sub-case of Inexact, not Exact.\n\nBeing greater than e instead describes the Imprecise case, another sub-case of Inexact, not Exact.\n\nNot equaling 0.0 instead describes the Inexact case in general, the opposite of Exact.",
  },
  {
    id: "csc308_ch2_092",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "When is a recording $\\bar{X}$ described as Precise?",
    options: [
      "When $|X - \\bar{X}| = 0.0$",
      "When $|X - \\bar{X}| < e$",
      "When $|X - \\bar{X}| > e$",
      "Precise is not defined anywhere in Equation 2.7",
    ],
    correctAnswer: 1,
    explanation:
      "According to Equation 2.7, $\\bar{X}$ is Precise if $|X - \\bar{X}| < e$, as a sub-case under Inexact.\n\nEquating to 0.0 instead describes the Exact case, a separate top-level case from the Precise sub-case of Inexact.\n\nBeing greater than e instead describes the Imprecise case, the other sub-case of Inexact, not Precise.\n\nEquation 2.7 explicitly defines Precise as one of its four cases, so it is not true that Precise is undefined.",
  },
  {
    id: "csc308_ch2_093",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "When is a recording $\\bar{X}$ described as Imprecise?",
    options: [
      "When $|X - \\bar{X}| < e$",
      "When $|X - \\bar{X}| = 0.0$",
      "When $|X - \\bar{X}| > e$",
      "When the recording has more digits in its Mantissa than X itself",
    ],
    correctAnswer: 2,
    explanation:
      "According to Equation 2.7, $\\bar{X}$ is Imprecise if $|X - \\bar{X}| > e$, as a sub-case under Inexact.\n\nBeing less than e instead describes the Precise case, the other sub-case of Inexact, not Imprecise.\n\nEquating to 0.0 instead describes the Exact case, a separate top-level case, not Imprecise.\n\nThe number of Mantissa digits relates to a separate, later precision concept for floating-point representation, not the Exact/Inexact/Precise/Imprecise classification of Equation 2.7.",
  },
  {
    id: "csc308_ch2_094",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Can a measurement be simultaneously both Exact and Inexact, or both Precise and Imprecise?",
    options: [
      "Yes, a measurement is always both Exact and Inexact at the same time",
      "Yes, but only when the digit Zero is involved",
      "Yes, but only for measurements of a context-sensitive range",
      "No, these binary opposites are ascribed through context-neutral language, so a measurement cannot be both simultaneously",
    ],
    correctAnswer: 3,
    explanation:
      "The binary opposites of 'Exact or Inexact' and 'Precise or Imprecise' are ascribed to a measurement through an instrument of context-neutral language; therefore, a measurement cannot be Exact and Inexact, or Precise and Imprecise, simultaneously.\n\nA measurement being always both Exact and Inexact at once contradicts the explicit statement that these are mutually exclusive under context-neutral language, not a simultaneous pairing.\n\nThe presence of Zero is unrelated to this simultaneity question; the exclusivity comes from context-neutral language's treatment of binary opposites, not from Zero specifically.\n\nA context-sensitive range does treat binary opposites as mutually inclusive, but the Exact/Inexact and Precise/Imprecise classification is specifically ascribed through context-neutral language, not context-sensitive, so this exception does not apply here.",
  },
  {
    id: "csc308_ch2_095",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "$\\bar{X}$ is described as Asiku (the Approximation) of X, based on what?",
    options: [
      "The admissible error e",
      "The Mantissa of X exclusively",
      "The number of digits in a numbering scheme's alphabet",
      "The criterion Kikun (Coherence)",
    ],
    correctAnswer: 0,
    explanation:
      "$\\bar{X}$ is Asiku (the Approximation) of X, based on the admissible error e; $\\bar{X}$ is accurate to the extent of its proximity or nearness to X, so the smaller the e in $\\bar{X}$, the more accurate is its logical content.\n\nThe Mantissa is a separate, later floating-point precision concept, not what $\\bar{X}$'s approximation status is based on here.\n\nThe number of digits in a numbering scheme's alphabet is an unrelated, earlier concept, not what Asiku is based on.\n\nKikun (Coherence) is the assessment criterion for Context-sensitive language from the earlier note, not what Asiku is based on here.",
  },
  {
    id: "csc308_ch2_096",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The smaller the admissible error e in a recording $\\bar{X}$, what does this imply about its accuracy?",
    options: [
      "The recording is less accurate",
      "The recording is more accurate",
      "Accuracy is entirely unrelated to the size of e",
      "The recording automatically becomes Exact",
    ],
    correctAnswer: 1,
    explanation:
      "The smaller the e in $\\bar{X}$, the more accurate is its logical content, since $\\bar{X}$ is accurate to the extent of its proximity or nearness to X.\n\nThe recording being less accurate with a smaller e is the reverse of the stated relationship, where smaller e implies greater, not lesser, accuracy.\n\nThe notes explicitly tie the size of e to accuracy, so it is not true that accuracy is entirely unrelated to e.\n\nA smaller e does not automatically make a recording Exact; Exact specifically requires the absolute difference between X and $\\bar{X}$ to equal 0.0, a stricter condition than merely having a small admissible error.",
  },
  {
    id: "csc308_ch2_097",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "How does a regular-language instrument treat Constant and Fraction, as combined in the representation of a measurement?",
    options: [
      "As mutually exclusive and contradictory instances",
      "As mutually inclusive and complementary aspects",
      "As unrelated instances",
      "As identical, interchangeable instances",
    ],
    correctAnswer: 2,
    explanation:
      "An instrument of regular language is used to treat constant and fraction as unrelated instances.\n\nBeing mutually exclusive and contradictory instead describes how an instrument of context-neutral language treats constant and fraction, not regular language.\n\nBeing mutually inclusive and complementary instead describes how an instrument of context-sensitive language treats constant and fraction, not regular language.\n\nConstant and Fraction are distinguished on the grounds of scale and are not treated as identical, interchangeable instances by any of the three language instruments.",
  },
  {
    id: "csc308_ch2_098",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "How does a context-sensitive-language agency treat Fraction and Constant, as aspects of an instance?",
    options: [
      "As mutually exclusive and contradictory instances",
      "As entirely unrelated instances",
      "Fraction and Constant cannot be combined by any language instrument",
      "As the mutually inclusive and complementary aspects of an instance",
    ],
    correctAnswer: 3,
    explanation:
      "Fraction and constant are treated as the mutually inclusive and complementary aspects of an instance by an agency of context-sensitive language.\n\nBeing mutually exclusive and contradictory instead describes the treatment by an agency of context-neutral language, not context-sensitive.\n\nBeing entirely unrelated instead describes the treatment by an agency of regular language, not context-sensitive.\n\nAll three language instruments are explicitly described as treating Fraction and Constant in some combined way, whether unrelated, mutually exclusive, or mutually inclusive, so it is not true that no instrument can combine them.",
  },
  {
    id: "csc308_ch2_099",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The Precision of a fraction is based on what?",
    options: [
      "The number of digits used in its representation",
      "The admissible error e exclusively, with digit count playing no role",
      "The criterion Ijokan (Constancy)",
      "The Spatial aspect of a process",
    ],
    correctAnswer: 0,
    explanation:
      "The Precision of a fraction is based on the number of digits used in its representation, which is why a fraction like 0.10000000 in binary has higher precision than 0.10 in binary despite representing an equal logical content.\n\nThe admissible error e is a related, separate concept for assessing a measurement recording, but Precision of a fraction is specifically tied to its digit count, not e alone with no role for digits.\n\nIjokan (Constancy) is the assessment criterion for Regular language, unrelated to what determines a fraction's precision.\n\nThe Spatial aspect of a process is outside this course's purview and unrelated to a fraction's precision.",
  },
  {
    id: "csc308_ch2_100",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Onan ('Pattern') is described as inherent in which of the following?",
    options: [
      "The term of an expression itself, always inherent regardless of representation",
      "Not the term of an expression; pattern is instead ascribed to the representation of an expression through an instrument of regular language",
      "Only the Mantissa of a floating-point number",
      "Only the exponent of a floating-point number",
    ],
    correctAnswer: 1,
    explanation:
      "Onan (Pattern) is NOT inherent in the term of an expression; pattern is ascribed to the representation of an expression through an instrument of regular language, with the language tool of structure used to ascribe pattern, and strings of symbols used to cue that pattern.\n\nSaying pattern is inherent in the term itself, always regardless of representation, is exactly the opposite of what is stated; pattern is explicitly ascribed to representation, not inherent in the term.\n\nThe Mantissa is one specific later application involving digit patterns, but Pattern in general is not restricted only to the Mantissa; it is a broader concept ascribed to representation generally.\n\nThe exponent is likewise one specific later application, not the sole locus of Pattern in general.",
  },
  {
    id: "csc308_ch2_101",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The pattern used to reckon a representation is either which of the following?",
    options: [
      "Exact or Inexact",
      "Precise or Imprecise",
      "Valid or Invalid",
      "Regular or Context-sensitive",
    ],
    correctAnswer: 2,
    explanation:
      "According to Equation 2.8, the pattern used to reckon a representation, a string of symbols, is either Valid or Invalid.\n\nExact or Inexact is instead the classification from Equation 2.7, for assessing a measurement recording, not the classification of a pattern's validity.\n\nPrecise or Imprecise is also from Equation 2.7, a sub-classification of Inexact, not the Valid/Invalid pattern classification of Equation 2.8.\n\nRegular or Context-sensitive describes language instruments, not the Valid/Invalid classification of a pattern's validity.",
  },
  {
    id: "csc308_ch2_102",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Can an Invalid pattern be used to represent a numerical-term?",
    options: [
      "Yes, an Invalid pattern always represents a numerical-term more precisely than a Valid one",
      "Yes, but only if the digit Zero is entirely absent from the pattern",
      "Yes, an Invalid pattern is simply another name for a Valid pattern",
      "No, an Invalid pattern cannot be used to cue Logic, so it cannot represent a numerical-term",
    ],
    correctAnswer: 3,
    explanation:
      "An Invalid pattern cannot be used to cue Logic; therefore, an Invalid Pattern or String cannot be used to represent a numerical-term.\n\nAn Invalid pattern representing a numerical-term more precisely than a Valid one contradicts the explicit statement that an Invalid pattern cannot represent a numerical-term at all.\n\nThe presence or absence of Zero is unrelated to whether a pattern is Valid or Invalid; validity concerns whether the pattern can cue Logic at all.\n\nValid and Invalid are explicitly presented as the two opposite outcomes in Equation 2.8, not synonyms for each other.",
  },
  {
    id: "csc308_ch2_103",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In numerical computation, precision is specified through the number and arrangement of digits in which component of a floating-point data?",
    options: [
      "The Mantissa",
      "The Sign digit exclusively",
      "The Base of the numbering scheme",
      "The Computation Process Tree",
    ],
    correctAnswer: 0,
    explanation:
      "In numerical computation, precision is specified through the number and arrangement of digits in the Mantissa of a floating-point data.\n\nThe Sign digit indicates polarity, positive or negative, but it is the Mantissa's digit count, not the Sign digit alone, that specifies precision.\n\nThe Base of the numbering scheme is a separate, earlier concept from the polynomial representation of Constants, not the specific component that specifies floating-point precision.\n\nThe Computation Process Tree is a diagrammatic tool for analysing polynomial computation steps, unrelated to floating-point precision.",
  },
  {
    id: "csc308_ch2_104",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the normalised floating-point representation $N = \\pm M \\times 2^{\\pm E}$, what do M and E represent, respectively?",
    options: [
      "M is the Exponent, and E is the Mantissa",
      "M is the Mantissa, and E is the Exponent",
      "M is the Base, and E is the number of digits",
      "M is the data N itself, and E is the Sign",
    ],
    correctAnswer: 1,
    explanation:
      "In $N = \\pm M \\times 2^{\\pm E}$, N is the data representing the floating-point number, M is the Mantissa, and E is its Exponent.\n\nReversing the roles, with M as Exponent and E as Mantissa, swaps the two components' actual identities.\n\nM is not the Base, and E is not simply the number of digits; M is specifically the Mantissa, and E is specifically the Exponent, distinct roles from a numbering scheme's Base.\n\nN itself is the overall data representing the floating-point number, not M specifically, and E is the Exponent, not the Sign, which is a separate component of the representation.",
  },
  {
    id: "csc308_ch2_105",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following is listed as one of the four components of the string used to represent the pattern for N, a normalised floating-point number?",
    options: [
      "The criterion Tito (Consistency)",
      "The Computation Process Tree",
      "A digit for representing the Sign, or Polarity, of the number",
      "The subsumption chain of y0 through y3",
    ],
    correctAnswer: 2,
    explanation:
      "A string used to represent the pattern for N comprises a digit for representing its Sign, or Polarity, of the number, followed by the Mantissa string, the Sign of the Exponent, and the Exponent string.\n\nTito (Consistency) is the assessment criterion for Context-neutral language from the earlier note, not one of the four components of the floating-point string.\n\nThe Computation Process Tree is a diagrammatic polynomial computation tool, not one of the four components of the floating-point string.\n\nThe y0 through y3 subsumption is the Organic polynomial formulation, not one of the four components of the floating-point string.",
  },
  {
    id: "csc308_ch2_106",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the string representing a floating-point number N, in what order do the four components appear?",
    options: [
      "The Mantissa string, then the Sign of the number, then the Exponent string, then the Sign of the Exponent",
      "The Exponent string, then the Sign of the Exponent, then the Mantissa string, then the Sign of the number",
      "The Sign of the Exponent, then the Sign of the number, then the Exponent string, then the Mantissa string",
      "Sign of the number, then the Mantissa string, then the Sign of the Exponent, then the Exponent string",
    ],
    correctAnswer: 3,
    explanation:
      "The string comprises, in order: a digit for the Sign of the number, followed by the string of digits for the Mantissa (M), followed by a digit for the Sign of the Exponent, followed by the string of digits for the Exponent (E).\n\nStarting with the Mantissa string before the number's Sign reverses the first two components of the stated order.\n\nStarting with the Exponent string before the Mantissa reverses the overall order; the Mantissa components come before the Exponent components in the stated arrangement.\n\nStarting with the Exponent's Sign before the number's Sign reverses the first component; the number's own Sign is listed first, not the Exponent's Sign.",
  },
  {
    id: "csc308_ch2_107",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the arrangement for a valid binary floating-point pattern, which bit value indicates positive polarity at the most significant bit position?",
    options: [
      "0",
      "1",
      "Either 0 or 1, chosen arbitrarily",
      "Neither; polarity is not indicated at the most significant bit",
    ],
    correctAnswer: 0,
    explanation:
      "The polarity of the number is indicated with the most significant bit position; 0 is used to indicate positive (+) polarity, and 1 is used to indicate negative (-) polarity.\n\n1 is instead used to indicate negative polarity, not positive.\n\nThe assignment is fixed, not arbitrary; 0 specifically and consistently indicates positive polarity in this arrangement.\n\nThe most significant bit position is explicitly where polarity is indicated, not a position where polarity is absent.",
  },
  {
    id: "csc308_ch2_108",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Why can plus-or-minus not be ascribed to the representation of one numerical-term in a computing process?",
    options: [
      "Because plus-or-minus requires the digit Zero, which is inadmissible in floating-point representation entirely",
      "Because plus-or-minus is used to prescribe a range, and a single numerical-term requires a single, definite polarity",
      "Because plus-or-minus can only be used for Constants, never for Fractions",
      "Because plus-or-minus is reserved exclusively for representing the Mantissa",
    ],
    correctAnswer: 1,
    explanation:
      "Plus-or-minus cannot be ascribed to the representation of one numerical-term in a computing process; of course, plus-or-minus is used to prescribe a range, which is a distinct, mutually inclusive binary-opposite concept from a single, definitely-polarised numerical-term.\n\nThe reasoning given concerns the mutually inclusive nature of a range versus the definite polarity of a single term, not a requirement or inadmissibility involving the digit Zero specifically.\n\nThis restriction on plus-or-minus is about single numerical-terms in general, not a distinction specifically between Constants and Fractions.\n\nPlus-or-minus is not reserved for the Mantissa; the restriction concerns the overall polarity of a numerical-term, a role played by the Sign digit, not the Mantissa substring specifically.",
  },
  {
    id: "csc308_ch2_109",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "The number of digits allocated to the Mantissa of a normalised floating-point number determines what?",
    options: [
      "The polarity of the number exclusively",
      "The base of the numbering scheme in use",
      "The precision of the numerical data, to that many significant digits or bits",
      "Whether the number is a Constant or a Fraction",
    ],
    correctAnswer: 2,
    explanation:
      "If P bits are allocated to the Mantissa of a normalised floating-point number, then its numerical data are said to be precise to P significant digits or P significant bits; the more digits used to represent M, the higher the precision.\n\nPolarity is indicated by separate Sign digits for the number and the Exponent, not determined by the Mantissa's digit count.\n\nThe base of the numbering scheme, such as 2 for binary floating-point representation, is a separate, fixed choice, not determined by the Mantissa's digit count.\n\nWhether a number is a Constant or a Fraction is a distinction made on the grounds of scale from the earlier note, not determined by the Mantissa's digit count.",
  },
  {
    id: "csc308_ch2_110",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the precision example, 0.10000000 in binary, 0.1000 in binary, and 0.10 in binary are compared. Which of the following is true of these three representations?",
    options: [
      "0.10 in binary has higher precision than 0.10000000 in binary, since it uses fewer digits",
      "All three representations have identical precision as well as identical logical content",
      "0.10000000 in binary has a different logical content from 0.10 in binary",
      "0.10000000 in binary has higher precision than 0.1000 in binary, which in turn has higher precision than 0.10 in binary, though their logical content is equal",
    ],
    correctAnswer: 3,
    explanation:
      "0.10000000 in binary has a higher precision than 0.1000 in binary, which in turn has a higher precision than 0.10 in binary, though the logical content of these fractions are equal.\n\nSaying 0.10 in binary has higher precision because it uses fewer digits reverses the actual relationship; more digits, not fewer, is what gives higher precision.\n\nThe three representations do NOT have identical precision; they differ specifically in precision due to differing digit counts, even though their logical content is equal.\n\nThe logical content of these fractions is explicitly stated to be equal across all three representations; it is precision, not logical content, that differs.",
  },
  {
    id: "csc308_ch2_111",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "What happens to a number smaller than the machine epsilon in a computing machine?",
    options: [
      "It will be stored as Zero (0)",
      "It will be stored with infinite precision automatically",
      "It will cause the computing machine to make a mistake",
      "It will be automatically converted into a Fraction",
    ],
    correctAnswer: 0,
    explanation:
      "A number smaller than the machine epsilon will be stored as Zero (0); that is, all zero bits, for a machine with a byte Mantissa.\n\nA number smaller than the machine epsilon is precisely the case where precision breaks down, resulting in storage as Zero, not infinite precision.\n\nA machine is explicitly described as unable to make a mistake; storing a number smaller than epsilon as Zero is a mechanical consequence of limited precision, not a mistake.\n\nThe number is stored as Zero, not automatically converted into a Fraction; Zero itself is described as distinct from both Fraction and Constant.",
  },
  {
    id: "csc308_ch2_112",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "What is raised when the result of a computation is less than the machine epsilon?",
    options: [
      "The overflow flag",
      "The underflow flag",
      "The Sign flag for negative polarity",
      "No flag at all is raised in this circumstance",
    ],
    correctAnswer: 1,
    explanation:
      "Zero (0) is stored in a computer memory or register, and the underflow flag is raised, when the result of a computation is less than its machine epsilon.\n\nAn overflow flag is not the flag named for this circumstance; underflow, not overflow, is specifically associated with a result smaller than the machine epsilon.\n\nThe Sign flag for negative polarity is a separate concept from the underflow flag, and is not what is described as being raised in this specific circumstance.\n\nThe notes explicitly state the underflow flag is raised in this circumstance, so it is not true that no flag is raised at all.",
  },
  {
    id: "csc308_ch2_113",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the precision example, item (i), the 8-bit register representation, is described as the Double-precision for item (ii), the 4-bit register representation. What does Double-precision imply about the number of digits?",
    options: [
      "Exactly the same number of digits as single precision, with no increase",
      "One-half the number of digits prescribed for the Mantissa",
      "Twice the number of digits prescribed for the Mantissa",
      "Precision unrelated to digit count entirely",
    ],
    correctAnswer: 2,
    explanation:
      "Double-precision implies twice the number of digits prescribed for the Mantissa of numerical data of a computing machine; item (i), the 8-bit register, is the Double-precision for item (ii), the 4-bit register, since 8 is twice 4.\n\nDouble-precision explicitly implies an increase, twice the digits, not the same number of digits as a lower-precision baseline.\n\nDouble-precision implies twice, not half, the number of digits; halving the digits would decrease, not increase, precision.\n\nThe notes explicitly tie precision directly to the number of digits prescribed for the Mantissa, so precision is not unrelated to digit count.",
  },
  {
    id: "csc308_ch2_114",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the precision example, item (i), the 8-bit register representation, is described as the Triple-precision for which item?",
    options: [
      "Item (ii), the 4-bit register representation",
      "Itself; item (i) is its own Triple-precision",
      "None of the other items; Triple-precision is not discussed in this example",
      "Item (iii), the 2-bit register representation",
    ],
    correctAnswer: 3,
    explanation:
      "Item (i), the 8-bit register representation, is described as a Triple-precision for item (iii), the 2-bit register representation.\n\nItem (i) is instead described as the Double-precision for item (ii), the 4-bit register representation, a separate relationship from the Triple-precision one involving item (iii).\n\nAn item cannot be its own Triple-precision relative to itself; the Triple-precision relationship is specifically between item (i) and item (iii), two distinct representations.\n\nThe notes explicitly discuss Triple-precision in relation to items (i) and (iii) in this same example, so it is not true that Triple-precision is absent from the discussion.",
  },
  {
    id: "csc308_ch2_115",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Can Ero, a physical agency, machine, or computer, make a mistake?",
    options: [
      "No, Ero cannot make a mistake, though it can suffer wear and tear",
      "Yes, Ero makes mistakes constantly, just like a biological agency",
      "Yes, but only when its Mantissa has fewer than 8 bits",
      "Yes, whenever the underflow flag is raised, this counts as a mistake, regardless of cause",
    ],
    correctAnswer: 0,
    explanation:
      "Ero, a Material agency, Machine, or Computer, CANNOT make a mistake (se asise); whereas Ero can suffer 'wear' and 'tear', its mechanism cannot suffer oversight, distraction, and/or fatigue, the characteristics inherent in biological agency that give rise to mistakes.\n\nMaking mistakes constantly, like a biological agency, directly contradicts the explicit statement that Ero cannot make a mistake at all.\n\nThe Mantissa's bit count relates to precision, a separate concept from whether a machine, in principle, can make a mistake; the inability to make mistakes is not conditioned on Mantissa size.\n\nRaising the underflow flag is a mechanical consequence of representing a number smaller than machine epsilon, not a mistake in the sense of an inadvertently executed inadmissible step due to oversight or fatigue.",
  },
  {
    id: "csc308_ch2_116",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Asise ('Mistake') is defined as what?",
    options: [
      "Deliberately executing an inadmissible step in a problem-solving process",
      "Inadvertently executing an inadmissible step in a problem-solving process due to oversight, distraction, fatigue, etc.",
      "Any result that is Inexact, regardless of cause",
      "The wear and tear suffered by a Material agency over time",
    ],
    correctAnswer: 1,
    explanation:
      "Asise (Mistake) is inadvertently executing an inadmissible step in a problem-solving process due to oversight, distraction, fatigue, etc, characteristics inherent in biological agency.\n\nA mistake is specifically described as inadvertent, not deliberate; deliberate execution of a step would not match this definition of a mistake.\n\nAn Inexact result, per Equation 2.7, can arise from admissible imprecision within an admissible error, not necessarily from an inadvertent, inadmissible step; Inexact and Mistake are not defined as the same thing.\n\nWear and tear is explicitly distinguished as something a Material agency CAN suffer, unlike oversight, distraction, or fatigue, which give rise to mistakes and are inherent in biological agency, not material agency.",
  },
  {
    id: "csc308_ch2_117",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following can a physical agency, Ero, suffer, unlike oversight, distraction, or fatigue?",
    options: [
      "Asise (Mistake) in the full biological sense",
      "Boredom during a lengthy computation",
      "Wear and tear",
      "Confusion when interpreting a valid pattern",
    ],
    correctAnswer: 2,
    explanation:
      "Ero, a Material agency, CAN suffer 'wear' and 'tear', even though its mechanism cannot suffer oversight, distraction, or fatigue.\n\nAsise (Mistake), as defined, arises from oversight, distraction, or fatigue, characteristics inherent in biological, not material, agency, so Ero does not suffer Mistake in this sense.\n\nBoredom is not a characteristic attributed to Ero anywhere in the notes; the characteristics discussed are oversight, distraction, and fatigue for biological agency, and wear and tear for material agency.\n\nConfusion when interpreting a valid pattern is not attributed to Ero; a valid pattern, by definition, can be used to cue Logic without such confusion.",
  },
  {
    id: "csc308_ch2_118",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "When error is incurred in a computation process, the source of such error can be traced to which of the following?",
    options: [
      "Only the machine's hardware wear and tear, with no other possible source",
      "Only the biological agency's oversight, with no other possible source",
      "The error can never be traced to any source at all",
      "The prescription, formulation, implementation, and/or interpretation of its results",
    ],
    correctAnswer: 3,
    explanation:
      "When error is incurred in a computation process, the source of such error can be traced to the prescription, formulation, implementation, and/or interpretation of its results.\n\nHardware wear and tear is one possible physical consequence for a machine, but the notes describe a broader set of possible sources, prescription, formulation, implementation, and interpretation, not hardware wear and tear alone.\n\nBiological oversight is one possible human factor, but again the notes describe a broader set of possible sources beyond oversight alone.\n\nThe notes explicitly describe specific traceable sources for computational error, so it is not true that error can never be traced to any source.",
  },
  {
    id: "csc308_ch2_119",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Can a machine make an incorrect logic become correct, or an imprecise data become precise?",
    options: [
      "No, a machine cannot make an imprecise data become precise, and cannot make an incorrect logic become correct, and vice versa",
      "Yes, a machine can always correct any imprecise data or incorrect logic automatically",
      "Yes, but only if the Mantissa has at least 8 bits",
      "Yes, but only by raising the underflow flag",
    ],
    correctAnswer: 0,
    explanation:
      "A machine cannot make an imprecise data become precise, and vice versa; a machine cannot make an incorrect logic become correct, and vice versa; the efficiency of the automation of a computation process is to the extent that technology permits.\n\nThis directly contradicts the explicit statement; a machine cannot always automatically correct imprecise data or incorrect logic.\n\nMantissa bit count relates to the precision a machine can represent, not to whether a machine can transform imprecise data into precise data or incorrect logic into correct logic.\n\nRaising the underflow flag is a mechanical consequence of representing a very small number, unrelated to correcting imprecision or incorrect logic.",
  },
  {
    id: "csc308_ch2_120",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Can Zero (0) be counted, calculated, or measured?",
    options: [
      "Yes, Zero can be counted, calculated, and measured, just like any other digit",
      "No, Zero can neither be counted nor calculated nor measured",
      "Zero can only be measured, but never counted or calculated",
      "Zero can only be counted, but never calculated or measured",
    ],
    correctAnswer: 1,
    explanation:
      "Zero (0) can neither be counted nor calculated nor measured.\n\nThis directly contradicts the explicit statement that Zero cannot be counted, calculated, or measured at all, unlike other digits which combine to form countable, calculable, or measurable numerical-terms.\n\nZero is excluded from all three, counting, calculation, and measurement, not permitted for measurement alone while excluded from the other two.\n\nZero is excluded from all three, counting, calculation, and measurement, not permitted for counting alone while excluded from the other two.",
  },
  {
    id: "csc308_ch2_121",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Zero (0) is used in context-neutral numerical computation to distinguish which two pairs of binary opposites?",
    options: [
      "Valid from Invalid patterns exclusively",
      "Exact from Inexact recordings exclusively",
      "Fraction from Constant, and Positive from Negative",
      "Acceptor agency from Emitter agency",
    ],
    correctAnswer: 2,
    explanation:
      "Zero (0) is used in context-neutral numerical computation to distinguish fraction from constant and positive from negative.\n\nValid versus Invalid pattern is a separate classification from Equation 2.8, not what Zero is described as distinguishing here.\n\nExact versus Inexact is a separate classification from Equation 2.7, not what Zero is described as distinguishing in this specific statement.\n\nAcceptor and Emitter are two of the three physical agencies for effecting measurement, unrelated to what Zero is described as distinguishing here.",
  },
  {
    id: "csc308_ch2_122",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "What does it imply when the manipulation of numerical-terms culminates in Zero (0)?",
    options: [
      "That the expression has just begun, with more terms yet to follow",
      "That the number is now more precise than before",
      "That the machine has made a mistake",
      "That the expression has terminated, or its explanation had ceased",
    ],
    correctAnswer: 3,
    explanation:
      "When the manipulation of numerical-terms culminates in Zero (0), it implies that the expression has terminated, or its explanation had ceased.\n\nZero culminating an expression signals its termination or the cessation of explanation, not that the expression has just begun with more terms to follow.\n\nReaching Zero is not described as an indicator of increased precision; the notes tie precision instead to Mantissa digit count and the admissible error e.\n\nA machine cannot make a mistake, as established, so culminating in Zero is not itself described as a mistake.",
  },
  {
    id: "csc308_ch2_123",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "What happens if one attempts to treat Zero (0) as though it were a numerical-term?",
    options: [
      "It will culminate in inconsistent explanation, like treating the Ground wire in an electrical circuit as though it were a Positive or Negative wire",
      "It will always produce the most precise result possible",
      "It will automatically convert Zero into the Unit constant, One",
      "Nothing unusual happens; Zero behaves exactly like any other numerical-term",
    ],
    correctAnswer: 0,
    explanation:
      "Attempting to treat Zero (0) as though it were a numerical-term will culminate in inconsistent explanation; it is like treating the Ground wire in an electrical circuit as though it were a Positive or Negative wire.\n\nThis is the opposite of what is stated; treating Zero as a numerical-term is described as causing inconsistency, not producing the most precise result possible.\n\nZero is described as number-neutral, not automatically convertible into the Unit constant, One, which is a distinct, admissible regular term.\n\nZero is explicitly described as number-neutral and distinct from a numerical-term, so treating it as one is described as causing a specific inconsistency, not behaving identically to any other numerical-term.",
  },
  {
    id: "csc308_ch2_124",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Zero (0) is to numerical-term what Blank is to which of the following?",
    options: [
      "The Mantissa",
      "Nominal-term",
      "The Computation Process Tree",
      "The criterion Kikun (Coherence)",
    ],
    correctAnswer: 1,
    explanation:
      "The note closes with the statement: Zero (0) is to numerical-term what Blank is to nominal-term, drawing a parallel between Zero's number-neutral role in the Temporal aspect and Blank's presumably analogous, neutral role in the Spatial aspect's nominal-terms.\n\nThe Mantissa is a specific floating-point precision concept, not the analogy's target, which is specifically nominal-term.\n\nThe Computation Process Tree is a diagrammatic polynomial computation tool, not the analogy's target.\n\nKikun (Coherence) is the assessment criterion for Context-sensitive language, not the analogy's target, which is specifically nominal-term.",
  },
  {
    id: "csc308_ch2_125",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A student needs to evaluate a Quartic polynomial with as few multiplications as possible on a slow embedded processor. Which representation should they use, and how many multiplications does it require?",
    options: [
      "The Canonical, sequential form, requiring 10 multiplications",
      "The Canonical, sequential form, requiring 4 multiplications",
      "The Horner's, nested form, requiring 4 multiplications",
      "The Horner's, nested form, requiring 10 multiplications",
    ],
    correctAnswer: 2,
    explanation:
      "The student should use the Horner's, nested form, which requires only 4 multiplications for a Quartic polynomial, compared to the Canonical, sequential form's 10 multiplications, making Horner's form the efficient choice for a slow processor.\n\nThe Canonical, sequential form requires 10 multiplications for a Quartic polynomial, not 4, which is precisely why it is the less efficient choice here.\n\nThe Canonical form's Quartic multiplication count is 10, not 4; 4 is instead the Horner's form count, so this option mismatches the form and its correct count.\n\nThe Horner's form's Quartic multiplication count is 4, not 10; 10 is instead the Canonical form count, so this option mismatches the form and its correct count.",
  },
  {
    id: "csc308_ch2_126",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A researcher records a length as 12.003 metres, with a true value of 12.000 metres and an admissible error e of 0.01 metres. Is this recording Exact, Precise, or Imprecise?",
    options: [
      "Exact, since the absolute difference, 0.003, is not exactly zero",
      "Imprecise, since the absolute difference, 0.003, is greater than e, 0.01",
      "Inexact but neither Precise nor Imprecise, since 0.003 falls outside both defined cases",
      "Precise, since the absolute difference, 0.003, is less than e, 0.01",
    ],
    correctAnswer: 3,
    explanation:
      "$|X - \\bar{X}| = |12.000 - 12.003| = 0.003$, which is less than e (0.01); by Equation 2.7, this makes the recording Precise.\n\nExact requires $|X - \\bar{X}|$ to equal exactly 0.0; since 0.003 does not equal 0.0, the recording is Inexact, not Exact, though it can still be the Precise sub-case of Inexact.\n\nImprecise requires $|X - \\bar{X}|$ to be greater than e; since 0.003 is less than 0.01, not greater, the recording is Precise, not Imprecise.\n\nEquation 2.7 defines Precise and Imprecise as the two sub-cases that together cover every Inexact recording, so 0.003 being less than e places it squarely in the Precise case, not outside both defined cases.",
  },
  {
    id: "csc308_ch2_127",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Time'?",
    options: [
      "Clock, and Seconds",
      "Ruler, and metre",
      "Speedometer, and metre per second",
      "Balance, and kilogram",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.3 lists Time as measured with a Clock, with Seconds as its standard of measure.\n\nRuler and metre instead describe the measuring device and standard for Length, not Time.\n\nSpeedometer and metre per second instead describe the measuring device and standard for Speed, not Time.\n\nBalance and kilogram instead describe the measuring device and standard for Mass, not Time.",
  },
  {
    id: "csc308_ch2_128",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Speed'?",
    options: [
      "Speedometer, and metre per second",
      "Electricity meter, and ampere",
      "Clock, and Seconds",
      "Ohmmeter, and ohms",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.3 lists Speed as measured with a Speedometer, with metre per second as its standard of measure.\n\nElectricity meter and ampere instead describe the measuring device and standard for Electric current, not Speed.\n\nClock and Seconds instead describe the measuring device and standard for Time, not Speed.\n\nOhmmeter and ohms instead describe the measuring device and standard for Electric resistance, not Speed.",
  },
  {
    id: "csc308_ch2_129",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Electric resistance'?",
    options: [
      "Ohmmeter, and ohms",
      "Voltmeter, and volts",
      "Electricity meter, and ampere",
      "Barometer, and Pascal",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.3 lists Electric resistance as measured with an Ohmmeter, with ohms as its standard of measure.\n\nVoltmeter and volts instead describe the measuring device and standard for Electric potential, not Electric resistance.\n\nElectricity meter and ampere instead describe the measuring device and standard for Electric current, not Electric resistance.\n\nBarometer and Pascal instead describe the measuring device and standard for Atmospheric pressure, not Electric resistance.",
  },
  {
    id: "csc308_ch2_130",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Electric potential'?",
    options: [
      "Voltmeter, and volts",
      "Ohmmeter, and ohms as the unit",
      "Thermometer, and kelvin as the unit",
      "Ruler, and metre",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.3 lists Electric potential as measured with a Voltmeter, with volts as its standard of measure.\n\nOhmmeter and ohms instead describe the measuring device and standard for Electric resistance, not Electric potential.\n\nThermometer and kelvin instead describe the measuring device and standard for Temperature, not Electric potential.\n\nRuler and metre instead describe the measuring device and standard for Length, not Electric potential.",
  },
  {
    id: "csc308_ch2_131",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Mass'?",
    options: [
      "Balance, and kilogram",
      "Barometer, and Pascal",
      "Clock, and Seconds",
      "Speedometer, and metre per second",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.3 lists Mass as measured with a Balance, with kilogram as its standard of measure.\n\nBarometer and Pascal instead describe the measuring device and standard for Atmospheric pressure, not Mass.\n\nClock and Seconds instead describe the measuring device and standard for Time, not Mass.\n\nSpeedometer and metre per second instead describe the measuring device and standard for Speed, not Mass.",
  },
  {
    id: "csc308_ch2_132",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which measuring device and standard of measure are associated with the range 'Atmospheric pressure'?",
    options: [
      "Barometer, and Pascal",
      "Voltmeter, and volts as the unit",
      "Balance, and kilogram as the unit",
      "Ohmmeter, and ohms",
    ],
    correctAnswer: 0,
    explanation:
      "Table 2.3 lists Atmospheric pressure as measured with a Barometer, with Pascal as its standard of measure.\n\nVoltmeter and volts instead describe the measuring device and standard for Electric potential, not Atmospheric pressure.\n\nBalance and kilogram instead describe the measuring device and standard for Mass, not Atmospheric pressure.\n\nOhmmeter and ohms instead describe the measuring device and standard for Electric resistance, not Atmospheric pressure.",
  },
  {
    id: "csc308_ch2_133",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A polynomial is defined as P(x) = 7, with no x term present at all. What is the correct classification and reasoning for this expression?",
    options: [
      "It is a Monomial, since $a_{0}$ is its only term, and if $a_{0}$ and x are constants, it formulates the logic of a Numerical-constant",
      "It is a Cubic polynomial, since degree is unrelated to the number of terms present",
      "It is inexpressible, since every polynomial must contain at least one instance of x raised to a positive power",
      "It is a Context-sensitive polynomial, since it comprises a single, infinite term",
    ],
    correctAnswer: 0,
    explanation:
      "P(x) = 7 has only one term, $a_{0}$ equal to 7, matching the n=0 Monomial case of Equation 2.2; since $a_{0}$ and $x^0$ are constants here, this formulates the logic of a Numerical-constant.\n\nA Cubic polynomial is specifically the n=3 case with four terms, $a_0$ through $a_3x^3$, not a single-term expression like this one.\n\nA single constant term is a perfectly valid, expressible Monomial; there is no requirement that every polynomial contain a positive power of x.\n\nA Context-sensitive polynomial requires n equal to infinity, an inexpressible case with infinitely many terms, not a single finite constant term.",
  },
  {
    id: "csc308_ch2_134",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A student expands a Cubic polynomial $P_3(x) = a_0 + a_1x + a_2x^2 + a_3x^3$ into its Horner's, nested form. Which of the following is the correct Horner's expansion?",
    options: [
      "$a_0 + x(a_1 + x(a_2 + x(a_3)))$",
      "$a_0 + x(a_1) + x(a_2) + x(a_3)$",
      "$a_3 + x(a_2 + x(a_1 + x(a_0)))$",
      "$a_0 \\times x(a_1) \\times x(a_2) \\times x(a_3)$",
    ],
    correctAnswer: 0,
    explanation:
      "Following Equation 2.6's pattern, $a_0 + x(a_1 + x(a_2 + \\ldots + x(a_n)))$, the Horner's form of a Cubic polynomial is $a_0 + x(a_1 + x(a_2 + x(a_3)))$, nesting each successive coefficient inside the previous one.\n\n$a_0 + x(a_1) + x(a_2) + x(a_3)$ fails to nest the terms inside one another; it merely repeats the multiplication pattern additively, not matching the true nested structure of Horner's form.\n\nReversing the coefficient order, starting from $a_3$ and nesting down to $a_0$, does not match the correct Horner's expansion, which begins from a0 and nests outward through increasing coefficient indices.\n\nMultiplying the nested groups together, rather than adding them, does not match Horner's form, which uses addition to combine $a_0$ with the nested product terms.",
  },
  {
    id: "csc308_ch2_135",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A researcher records a temperature as 99.90 degrees, with a true value of 100.00 degrees and an admissible error e of 0.05 degrees. Is this recording Precise or Imprecise?",
    options: [
      "Imprecise, since the absolute difference, 0.10, is greater than e, 0.05",
      "Precise, since the absolute difference, 0.10, is less than e, 0.05",
      "Exact, since the absolute difference rounds to approximately zero",
      "Neither Precise nor Imprecise, since only whole-number errors are admissible",
    ],
    correctAnswer: 0,
    explanation:
      "$|X - \\bar{X}| = |100.00 - 99.90| = 0.10$, which is greater than e (0.05); by Equation 2.7, this makes the recording Imprecise.\n\n0.10 is greater than, not less than, e of 0.05, so the recording is Imprecise, not Precise.\n\nExact requires $|X - \\bar{X}|$ to equal exactly 0.0; 0.10 does not equal 0.0, however closely it might seem to round, so the recording is Inexact, not Exact.\n\nEquation 2.7 does not restrict admissible error to whole numbers; e is given here as 0.05, a non-whole-number value, and the Precise/Imprecise classification applies regardless.",
  },
  {
    id: "csc308_ch2_136",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A pressure gauge converts physical atmospheric pressure into a dial reading or electrical signal that can be recorded as a number. Which kind of measurement agency does this best illustrate?",
    options: [
      "Transducer agency, converting one form of physical quantity into a readable numerical signal, like a thermometer",
      "Acceptor agency, like a scale for measuring weight",
      "Emitter agency, like a clock for measuring time",
      "None of these; pressure cannot be measured by any agency",
    ],
    correctAnswer: 0,
    explanation:
      "A pressure gauge, like a thermometer converting temperature into a reading, best matches a Transducer agency, converting one form of physical quantity, pressure, into a readable numerical signal.\n\nAn Acceptor agency is exemplified by a scale for measuring weight, a device that directly accepts a physical load, not one that converts pressure into a signal.\n\nAn Emitter agency is exemplified by a clock for measuring time, not a device converting a physical quantity like pressure into a signal.\n\nAtmospheric pressure is explicitly listed in Table 2.3 as measured with a Barometer, so it is not true that no agency can measure it.",
  },
  {
    id: "csc308_ch2_137",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the chain Number, Counting, Calculation, Measurement, and the chain Regular, Context-neutral, Context-sensitive rendering of a range, which pairing correctly matches the innermost and outermost concepts?",
    options: [
      "Number is innermost, and Measurement is outermost, paralleling Regular as innermost and Context-sensitive as outermost",
      "Measurement is innermost, and Number is outermost, paralleling Context-sensitive as innermost and Regular as outermost overall",
      "Number and Measurement are equally innermost, with no outermost concept in either chain",
      "Calculation is innermost in both chains, with Counting as outermost in both",
    ],
    correctAnswer: 0,
    explanation:
      "Number is subsumed in Counting, which is subsumed in Calculation, which is subsumed in Measurement, making Number the innermost and Measurement the outermost; this parallels Regular rendering being subsumed in Context-neutral, which is subsumed in Context-sensitive rendering of a range, making Regular the innermost and Context-sensitive the outermost.\n\nReversing the order in both chains inverts the actual subsumption direction; Measurement and Context-sensitive are the outermost, most general concepts, not the innermost.\n\nBoth chains explicitly describe a subsumption order from innermost to outermost, so it is not true that there is no outermost concept in either chain.\n\nCalculation and Counting are each specific, intermediate links in the Number-Counting-Calculation-Measurement chain, not the innermost or outermost concepts of either chain.",
  },
  {
    id: "csc308_ch2_138",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "In the chain Okun (Energy), Agbara (Power), Ipa (Force), which term is rendered through an instrument of regular language, and which is rendered through an instrument of context-neutral language?",
    options: [
      "Ipa (Force) is the regular rendering, and Agbara (Power) is the context-neutral rendering",
      "Agbara (Power) is the regular rendering, and Ipa (Force) is the context-neutral rendering",
      "Okun (Energy) is the regular rendering, and Ipa (Force) is the context-neutral rendering",
      "Both Ipa (Force) and Agbara (Power) are context-sensitive renderings, with no regular rendering in this chain",
    ],
    correctAnswer: 0,
    explanation:
      "Ipa (Force) is the regular language rendering of Power, and Agbara (Power) is the context-neutral language rendering of Energy, completing the chain from context-sensitive Quality through context-neutral Quantity to regular Constant.\n\nReversing the roles, with Power as regular and Force as context-neutral, swaps the two terms' actual rendering levels.\n\nOkun (Energy) itself is the innermost, context-sensitive-associated source of the chain, not the regular rendering; it is Ipa (Force), not Energy directly, that is the regular rendering.\n\nIpa (Force) is specifically identified as the regular language rendering, not a context-sensitive one, so it is not true that no regular rendering exists in this chain.",
  },
  {
    id: "csc308_ch2_139",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Why is Onan (Pattern) ascribed to the representation of an expression specifically through an instrument of regular language, rather than context-neutral or context-sensitive language?",
    options: [
      "Because the language tool of structure, used to ascribe pattern, and the strings of symbols that cue that pattern, are described as working through regular language",
      "Because pattern can only exist in expressions with an infinite number of terms",
      "Because context-neutral language explicitly forbids the use of any pattern whatsoever",
      "Because Zero is required to ascribe any pattern, and Zero is admissible only in context-sensitive language",
    ],
    correctAnswer: 0,
    explanation:
      "Pattern is ascribed to the representation of an expression through an instrument of regular language, with the language tool of structure used to ascribe pattern, and strings of symbols used to cue that pattern.\n\nPattern is discussed in relation to finite, representable strings, such as the arrangement of digits in a Mantissa, not expressions with an infinite, unrepresentable number of terms.\n\nContext-neutral language is not described as forbidding pattern; pattern's ascription is specifically tied to regular language's structural tool, a separate point from what context-neutral language permits or forbids.\n\nZero is admissible in context-neutral language, not context-sensitive language, where it is explicitly inadmissible in temporal-state formulation; this is also unrelated to why pattern is tied to regular language.",
  },
  {
    id: "csc308_ch2_140",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A computer program executes a sequence of steps and, due to a hardware component degrading after years of continuous use, produces a slightly incorrect result. Is this best classified as Asise (a Mistake)?",
    options: [
      "No, this is wear and tear, which a Material agency can suffer, unlike oversight, distraction, or fatigue, which give rise to a Mistake",
      "Yes, this is a textbook example of a Mistake, since any incorrect result qualifies",
      "Yes, because all incorrect computer results are classified as Mistakes by definition",
      "No, because a computer can never produce an incorrect result under any circumstances",
    ],
    correctAnswer: 0,
    explanation:
      "This is best classified as wear and tear, which Ero, a Material agency, can suffer, unlike oversight, distraction, or fatigue, the biological-agency characteristics that specifically give rise to Asise, a Mistake.\n\nNot every incorrect result qualifies as a Mistake; Mistake is specifically defined as inadvertently executing an inadmissible step due to oversight, distraction, or fatigue, characteristics inherent in biological, not material, agency.\n\nThe notes explicitly distinguish wear and tear, suffered by material agency, from Mistake, arising from biological-agency characteristics, so not all incorrect computer results are classified as Mistakes by definition.\n\nA computer can produce imprecise or incorrect results, for instance due to wear and tear or the limits of its machine epsilon, without this constituting a Mistake, but it is not true that a computer can never produce an incorrect result.",
  },
  {
    id: "csc308_ch2_141",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following pairs correctly matches a polynomial representation form with the reason it is preferred for digital computation?",
    options: [
      "Horner's, nested form, preferred because it reduces the number of Multiplication operations needed for higher-degree polynomials",
      "Canonical, sequential form, preferred because it always requires fewer Multiplications than Horner's form",
      "Both forms require an identical number of Multiplications at every degree, so neither is preferred over the other",
      "Neither form is ever used in digital computation; only the Organic, Atoledole, form is used",
    ],
    correctAnswer: 0,
    explanation:
      "The Horner's, nested form is preferred because it reduces the number of Multiplication operations needed for higher-degree polynomials, for example requiring only 4 Multiplications for a Quartic polynomial compared to the Canonical form's 10.\n\nThe Canonical, sequential form requires MORE Multiplications than Horner's form at higher degrees, not fewer, which is precisely why Horner's form is preferred.\n\nThe two forms only require an identical number of Multiplications at the lowest, Linear degree; at Quadratic degree and above, Horner's form requires fewer Multiplications than the Canonical form.\n\nBoth the Canonical and Horner's forms are explicitly discussed and used for representing polynomials in digital computation; the Organic, Atoledole, form is a separate, subsumption-based formulation, not the exclusive form used.",
  },
  {
    id: "csc308_ch2_142",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "A recording $\\bar{X}$ for a measurement of range X satisfies $|X - \\bar{X}| = 0.0$ exactly. Can this recording also be classified as Precise or Imprecise?",
    options: [
      "No, since Exact and the Precise/Imprecise sub-cases are alternatives under the Exact/Inexact classification, and this recording is Exact, not Inexact",
      "Yes, it is both Exact and Precise simultaneously, since Precise always includes the Exact case",
      "Yes, it is both Exact and Imprecise simultaneously, since any recording can hold multiple classifications at once",
      "It cannot be determined without knowing the admissible error e",
    ],
    correctAnswer: 0,
    explanation:
      "Equation 2.7 presents Exact and Inexact as the top-level, mutually exclusive classification, with Precise and Imprecise as sub-cases specifically under Inexact; since this recording is Exact, with $|X - \\bar{X}|$ equal to exactly 0.0, it cannot also be Precise or Imprecise, which apply only to the Inexact branch.\n\nPrecise does not include the Exact case; Precise specifically requires $|X - \\bar{X}|$ to be less than e while still being non-zero, that is, Inexact, so an Exact recording cannot simultaneously be Precise.\n\nA measurement cannot be Exact and Imprecise simultaneously, since the binary opposites of Exact/Inexact and Precise/Imprecise are ascribed through context-neutral language, which treats them as mutually exclusive, not as multiple simultaneous classifications.\n\nThe classification as Exact is fully determined by the absolute difference equalling 0.0 alone, without needing to know e at all; e only becomes relevant for distinguishing Precise from Imprecise within the Inexact branch.",
  },
  {
    id: "csc308_ch2_143",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "For the polynomial $P_0(x) = a_0$, a monomial, what would be the first neglected term if this expression were extended by one more degree?",
    options: [
      "$a_1x$",
      "$a_2x^2$",
      "$a_0x^2$",
      "There is no possible next term, since a monomial cannot be extended",
    ],
    correctAnswer: 0,
    explanation:
      "Following the pattern where the estimated error is the first neglected term, extending $P_0(x) = a_0$ by one more degree would introduce the term $a_1x$, matching the pattern where $P_1(x) = a_0 + a_1x$ is the next polynomial in the sequence.\n\n$a_2x^2$ is instead the term that would follow after extending $P_1(x)$ to $P_2(x)$, two degrees beyond the monomial, not the immediate next term.\n\n$a_0x^2$ misapplies the coefficient index; the coefficient paired with a given power of x should match that power's index, such as $a_1$ with $x^1$, not $a_0$.\n\nA monomial can be extended, as illustrated by the entire sequence of $P_1(x)$, $P_2(x)$, and $P_3(x)$ building on the single-term $P_0(x) = a_0$ case.",
  },
  {
    id: "csc308_ch2_144",
    course: "CSC 308",
    chapter: "Chapter 2",
    text: "Which of the following correctly identifies the Yoruba term and its rendering level for 'Power', in the chain from Energy to Power to Force?",
    options: [
      "Agbara, the context-neutral rendering, situated between Okun (Energy) and Ipa (Force)",
      "Ipa, the context-neutral rendering, situated between Okun (Energy) and Agbara (Force) directly",
      "Okun, the context-neutral rendering, situated between Agbara (Energy) and Ipa (Force) instead",
      "Agbara, the regular rendering, situated between Ipa (Energy) and Okun (Force)",
    ],
    correctAnswer: 0,
    explanation:
      "Agbara is the Yoruba term for Power, the context-neutral language rendering of energy, situated between Okun (Energy), the context-sensitive source, and Ipa (Force), the regular rendering.\n\nIpa is the Yoruba term for Force, the regular rendering, not Power, so this option mismatches the term with its rendering level and chain position.\n\nOkun is the Yoruba term for Energy itself, not a context-neutral rendering, and it is not situated between Agbara and Ipa in the way described here.\n\nAgbara (Power) is specifically the context-neutral rendering, not the regular rendering, which is instead Ipa (Force); this option also misassigns Energy and Force to the wrong terms.",
  },
];

export default csc308Chapter2Questions;
