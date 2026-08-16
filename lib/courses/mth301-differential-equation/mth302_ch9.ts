import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter9: QuestionV2[] = [
  {
    id: "mth302_ch9_001",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "What are the eigenvalues of $X'' + \\lambda X = 0$ with $X(0) = X(L) = 0$?",
    options: [
      "$\\lambda_n = n\\pi/L$",
      "$\\lambda_n = n^2\\pi^2/L$",
      "$\\lambda_n = n^2\\pi^2/L^2$",
      "$\\lambda_n = n\\pi/L^2$"
    ],
    correctAnswer: 2,
    explanation: "With $X = A\\sin(\\sqrt{\\lambda}\\,x)$ after applying $X(0) = 0$, the condition $\\sin(\\sqrt{\\lambda}\\,L) = 0$ requires $\\sqrt{\\lambda}\\,L = n\\pi$, so $\\sqrt{\\lambda} = n\\pi/L$. Squaring both the numerator and the denominator gives $\\lambda_n = n^2\\pi^2/L^2$.\n\n$\\lambda_n = n\\pi/L$ fails to square the expression at all.\n\n$\\lambda_n = n^2\\pi^2/L$ squares only the numerator, leaving the denominator unsquared.\n\n$\\lambda_n = n\\pi/L^2$ squares only the denominator, leaving the numerator unsquared."
  },
  {
    id: "mth302_ch9_002",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "For $y'' + \\lambda y = 0$ on $0 \\leq x \\leq 5$ with $y(0) = y(5) = 0$, what are the eigenvalues?",
    options: [
      "$n^2\\pi^2/5$",
      "$n^2\\pi/25$",
      "$n\\pi/5$",
      "$n^2\\pi^2/25$"
    ],
    correctAnswer: 3,
    explanation: "The Dirichlet boundary condition at $x = 5$ requires $5\\sqrt{\\lambda_n} = n\\pi$, so $\\lambda_n = n^2\\pi^2/25$, with eigenfunctions $y_n = \\sin(n\\pi x/5)$ for $n = 1, 2, 3, \\dots$. The value $n = 0$ is excluded, since it produces only the trivial solution, which is never counted as an eigenfunction.\n\n$n^2\\pi^2/5$ fails to square the denominator $L = 5$ to match the squared numerator.\n\n$n^2\\pi/25$ fails to square the numerator $n\\pi$ while squaring the denominator.\n\n$n\\pi/5$ fails to square either the numerator or the denominator at all."
  },
  {
    id: "mth302_ch9_003",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "For $y'' + \\lambda y = 0$ on $0 < x < \\pi/2$ with $y'(0) = y'(\\pi/2) = 0$, what are the eigenvalues?",
    options: [
      "$\\lambda_n = 4n^2$",
      "$\\lambda_n = 2n$",
      "$\\lambda_n = n^2$",
      "$\\lambda_n = n^2\\pi^2/4$"
    ],
    correctAnswer: 0,
    explanation: "The condition $y'(0) = 0$ eliminates the sine term, leaving $y = B\\cos(\\sqrt{\\lambda}\\,x)$; then $y'(\\pi/2) = -B\\sqrt{\\lambda}\\sin(\\sqrt{\\lambda}\\,\\pi/2) = 0$ requires $\\sqrt{\\lambda}\\,\\pi/2 = n\\pi$, giving $\\sqrt{\\lambda} = 2n$ and therefore $\\lambda_n = 4n^2$, with eigenfunctions $y_n = \\cos(2nx)$. Unlike the Dirichlet case, $n = 0$ is admissible here, giving the constant eigenfunction.\n\n$\\lambda_n = 2n$ fails to square $\\sqrt{\\lambda} = 2n$ to obtain $\\lambda$ itself.\n\n$\\lambda_n = n^2$ confuses the coefficient with the value that should be squared.\n\n$\\lambda_n = n^2\\pi^2/4$ wrongly applies the Dirichlet-style formula to this Neumann boundary condition problem."
  },
  {
    id: "mth302_ch9_004",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Eigenfunctions of a Sturm-Liouville system corresponding to distinct eigenvalues satisfy which relation?",
    options: [
      "$\\displaystyle\\int_a^b y_my_n\\,dx = 1$",
      "$\\displaystyle\\int_a^b y_my_n\\,r(x)\\,dx = 0$",
      "$\\displaystyle\\int_a^b y_my_n\\,dx = \\dfrac{2}{2n+1}$",
      "$y_m = y_n$"
    ],
    correctAnswer: 1,
    explanation: "Orthogonality of Sturm-Liouville eigenfunctions is always taken with respect to the weight function $r(x)$ appearing in the equation, so the integral of $y_my_nr(x)\\,dx$ vanishes for $m \\neq n$. The weight may be omitted from the notation only when $r$ is identically $1$.\n\n$\\displaystyle\\int_a^b y_my_n\\,dx = 1$ wrongly assumes normalization to $1$ without the weight function.\n\n$\\displaystyle\\int_a^b y_my_n\\,dx = \\dfrac{2}{2n+1}$ is the special normalization used for Legendre polynomials, not a general Sturm-Liouville property.\n\n$y_m = y_n$ contradicts the premise that the eigenvalues, and hence the eigenfunctions, are distinct."
  },
  {
    id: "mth302_ch9_005",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Which statement about a regular Sturm-Liouville system is false?",
    options: [
      "The eigenvalues are real",
      "The eigenvalues form an increasing sequence tending to infinity",
      "Each eigenvalue has exactly one linearly independent eigenfunction",
      "Two different eigenvalues can share the same eigenfunction"
    ],
    correctAnswer: 3,
    explanation: "An eigenfunction determines its eigenvalue uniquely through the differential equation it satisfies, so it is impossible for two different eigenvalues to share the same eigenfunction, making this statement false.\n\nThe eigenvalues are real is one of the standard listed properties of Sturm-Liouville systems, and is true.\n\nThe eigenvalues form an increasing sequence tending to infinity is also a standard true property.\n\nEach eigenvalue has exactly one linearly independent eigenfunction is true as well, understood as unique up to a constant multiple."
  },
  {
    id: "mth302_ch9_006",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Writing the equation as $(p(x)y')' + [q(x) + \\lambda r(x)]y = 0$, what are $p$, $q$, and $r$ for $y'' + \\lambda y = 0$?",
    options: [
      "$p = x$, $q = 0$, $r = 1$",
      "$p = 0$, $q = 1$, $r = 1$",
      "$p = 1$, $q = \\lambda$, $r = 0$",
      "$p = 1$, $q = 0$, $r = 1$"
    ],
    correctAnswer: 3,
    explanation: "Expanding the standard form gives $py'' + p'y' + (q + \\lambda r)y = 0$. Matching this term by term with $y'' + \\lambda y = 0$ forces $p = 1$, so $p' = 0$, consistent with the absent $y'$ term, $q = 0$, and $r = 1$.\n\n$p = x$, $q = 0$, $r = 1$ wrongly assigns a nonconstant value to $p$ for this simple equation.\n\n$p = 0$, $q = 1$, $r = 1$ would eliminate the $y''$ term entirely, which is not the case here.\n\n$p = 1$, $q = \\lambda$, $r = 0$ confuses $\\lambda$, the eigenvalue parameter itself, with $q$, and wrongly sets the weight $r$ to zero."
  },
  {
    id: "mth302_ch9_007",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "Bessel's equation in Sturm-Liouville form is $(xy')' + [-\\nu^2/x + \\lambda x]y = 0$. What is its weight function?",
    options: [
      "$r = 1$",
      "$r = \\nu^2$",
      "$r = 1/x$",
      "$r = x$"
    ],
    correctAnswer: 3,
    explanation: "The weight function is the coefficient multiplying $\\lambda$ in the standard Sturm-Liouville form, which here is $r(x) = x$. This is why Bessel functions of different orders satisfy an orthogonality integral that includes an extra factor of $x$ inside the integrand.\n\n$r = 1$ would apply only if $\\lambda$ were multiplied by $1$, which is not the case in this equation.\n\n$r = \\nu^2$ confuses the parameter $\\nu$ appearing in $q$ with the weight function that multiplies $\\lambda$.\n\n$r = 1/x$ has the reciprocal of the correct weight."
  },
  {
    id: "mth302_ch9_008",
    course: "MTH 302",
    chapter: "Chapter 9",
    text: "If $f$ is expanded as $\\sum_n c_n\\phi_n$, where the $\\phi_n$ are orthogonal on the interval from $a$ to $b$ with weight $r$, what is the formula for the coefficient $c_n$?",
    options: [
      "$c_n = \\displaystyle\\int_a^b rf\\phi_n\\,dx$",
      "$c_n = \\dfrac{\\displaystyle\\int_a^b rf\\phi_n\\,dx}{\\displaystyle\\int_a^b r\\phi_n^2\\,dx}$",
      "$c_n = \\dfrac{\\displaystyle\\int_a^b f\\phi_n\\,dx}{\\displaystyle\\int_a^b \\phi_n\\,dx}$",
      "$c_n$ equals the average of $f$ over the interval from $a$ to $b$"
    ],
    correctAnswer: 1,
    explanation: "Multiplying the expansion by $r\\phi_m$ and integrating over the interval from $a$ to $b$ uses orthogonality to eliminate every term except the one with $n = m$, leaving $\\displaystyle\\int_a^b rf\\phi_n\\,dx$ equal to $c_n$ times $\\displaystyle\\int_a^b r\\phi_n^2\\,dx$, and dividing gives the coefficient formula.\n\n$c_n = \\displaystyle\\int_a^b rf\\phi_n\\,dx$ alone is correct only when the system is orthonormal, meaning the denominator integral happens to equal $1$, which is not assumed in general.\n\n$c_n = \\dfrac{\\int f\\phi_n\\,dx}{\\int \\phi_n\\,dx}$ omits the weight function $r$ from both integrals and uses $\\phi_n$ instead of $\\phi_n$ squared in the denominator.\n\n$c_n$ equals the average of $f$ describes only the special case of the constant term in a Fourier series, not the general Sturm-Liouville expansion coefficient."
  }
];

export default mth302Chapter9;
