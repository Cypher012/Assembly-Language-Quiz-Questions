import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter10: QuestionV2[] = [
  {
    id: "mth302_ch10_001",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\Gamma(1/2)$?",
    options: [
      "$\\pi$",
      "$\\sqrt{\\pi}$",
      "$\\sqrt{\\pi}/2$",
      "$2\\sqrt{\\pi}$"
    ],
    correctAnswer: 1,
    explanation: "Substituting $t = u^2$ gives $\\Gamma(1/2) = 2\\displaystyle\\int_0^\\infty e^{-u^2}\\,du$, which equals $2 \\cdot \\sqrt{\\pi}/2$, using the polar-coordinate evaluation of that Gaussian integral, giving $\\Gamma(1/2) = \\sqrt{\\pi}$.\n\n$\\pi$ omits the square root, mistaking the squared value for the answer itself.\n\n$\\sqrt{\\pi}/2$ is actually the value of $\\int_0^\\infty e^{-u^2}\\,du$ on its own, before the factor of $2$ supplied by the substitution is applied.\n\n$2\\sqrt{\\pi}$ applies the factor of $2$ twice instead of once."
  },
  {
    id: "mth302_ch10_002",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\Gamma(7/2)$?",
    options: [
      "$15\\sqrt{\\pi}/8$",
      "$3\\sqrt{\\pi}/4$",
      "$5\\sqrt{\\pi}/2$",
      "$105\\sqrt{\\pi}/16$"
    ],
    correctAnswer: 0,
    explanation: "Applying the recurrence $\\Gamma(x+1) = x\\Gamma(x)$ repeatedly gives $\\Gamma(7/2) = \\dfrac{5}{2}\\cdot\\dfrac{3}{2}\\cdot\\dfrac{1}{2}\\Gamma(1/2) = \\dfrac{15}{8}\\sqrt{\\pi}$.\n\n$3\\sqrt{\\pi}/4$ is actually the value of $\\Gamma(3/2)$, one recurrence step short of the target.\n\n$5\\sqrt{\\pi}/2$ does not match any correct step in the recurrence chain from $\\Gamma(1/2)$.\n\n$105\\sqrt{\\pi}/16$ is actually the value of $\\Gamma(9/2)$, one recurrence step too far."
  },
  {
    id: "mth302_ch10_003",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\Gamma(-3/2)$?",
    options: [
      "$-2\\sqrt{\\pi}$",
      "$4\\sqrt{\\pi}/3$",
      "$-8\\sqrt{\\pi}/15$",
      "Undefined"
    ],
    correctAnswer: 1,
    explanation: "Using $\\Gamma(x) = \\Gamma(x+1)/x$ downward from $\\Gamma(1/2)$, first $\\Gamma(-1/2) = \\Gamma(1/2)/(-1/2) = -2\\sqrt{\\pi}$, and then $\\Gamma(-3/2) = \\Gamma(-1/2)/(-3/2) = (-2\\sqrt{\\pi})/(-3/2) = 4\\sqrt{\\pi}/3$.\n\n$-2\\sqrt{\\pi}$ is actually the value of $\\Gamma(-1/2)$, one step earlier in the chain.\n\n$-8\\sqrt{\\pi}/15$ is actually the value of $\\Gamma(-5/2)$, one step further down the chain.\n\nUndefined is wrong here since $\\Gamma$ is undefined only at $0$ and the negative integers; $-3/2$ is a negative non-integer, where the value is perfectly well defined."
  },
  {
    id: "mth302_ch10_004",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\displaystyle\\int_0^\\infty x^7e^{-x}\\,dx$?",
    options: [
      "$7! = 5040$",
      "$8! = 40320$",
      "$6! = 720$",
      "$\\Gamma(7) = 720$"
    ],
    correctAnswer: 0,
    explanation: "Matching against $\\int_0^\\infty t^{s-1}e^{-t}\\,dt$ gives $s - 1 = 7$, so $s = 8$, and the integral equals $\\Gamma(8) = 7! = 5040$. The off-by-one relationship between the exponent in the integrand and the argument of $\\Gamma$ is exactly what this question tests.\n\n$8! = 40320$ mistakenly uses $s = 9$ rather than $s = 8$.\n\n$6! = 720$ and $\\Gamma(7) = 720$ both mistakenly use $s = 7$ rather than the correct $s = 8$."
  },
  {
    id: "mth302_ch10_005",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\displaystyle\\int_0^\\infty x^3e^{-4x}\\,dx$?",
    options: [
      "$3/128$",
      "$6/64$",
      "$3!/4$",
      "$1/64$"
    ],
    correctAnswer: 0,
    explanation: "Using the general formula $\\int_0^\\infty x^ne^{-ax}\\,dx = \\Gamma(n+1)/a^{n+1}$, with $n = 3$ and $a = 4$, gives $3!/4^4 = 6/256 = 3/128$.\n\n$6/64$ fails to raise the denominator to the fourth power correctly.\n\n$3!/4$ forgets to raise $a$ to the power $n+1$ at all, using only the first power of $a$.\n\n$1/64$ does not follow from a correct application of the formula."
  },
  {
    id: "mth302_ch10_006",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the general formula for $B(m, n)$, the Beta function, in terms of the Gamma function?",
    options: [
      "$\\dfrac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$",
      "$\\dfrac{\\Gamma(m)\\Gamma(n)}{(m+n)!}$",
      "$\\Gamma(m+n)\\Gamma(m)\\Gamma(n)$",
      "$\\Gamma(m)\\Gamma(n)\\Gamma(m+n)$"
    ],
    correctAnswer: 0,
    explanation: "For positive integers this identity reads $\\dfrac{(m-1)!(n-1)!}{(m+n-1)!}$, so the denominator is $\\Gamma(m+n)$, which equals $(m+n-1)!$, and not $(m+n)!$.\n\n$\\dfrac{\\Gamma(m)\\Gamma(n)}{(m+n)!}$ commits exactly the off-by-one error of using $(m+n)!$ instead of the correct $(m+n-1)!$ in the denominator.\n\n$\\Gamma(m+n)\\Gamma(m)\\Gamma(n)$ places $\\Gamma(m+n)$ in the numerator rather than the denominator, which is the reciprocal of the correct relationship.\n\n$\\Gamma(m)\\Gamma(n)\\Gamma(m+n)$ omits the division entirely, multiplying all three Gamma values together instead."
  },
  {
    id: "mth302_ch10_007",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $B(4, 3)$?",
    options: [
      "$1/60$",
      "$1/12$",
      "$1/120$",
      "$1/30$"
    ],
    correctAnswer: 0,
    explanation: "Using $B(4,3) = \\dfrac{\\Gamma(4)\\Gamma(3)}{\\Gamma(7)} = \\dfrac{3! \\cdot 2!}{6!} = \\dfrac{6 \\times 2}{720} = \\dfrac{1}{60}$, which agrees with computing the reduction formula step by step down to $2B(2,1) = 1/2$.\n\n$1/12$, $1/120$, and $1/30$ do not match the correct factorial computation $3! \\cdot 2!/6!$."
  },
  {
    id: "mth302_ch10_008",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the value of $\\displaystyle\\int_0^1 x^6(1-x)^4\\,dx$?",
    options: [
      "$B(6, 4)$",
      "$B(7, 5) = 1/210$",
      "$B(7, 5) = 1/420$",
      "$1/35$"
    ],
    correctAnswer: 1,
    explanation: "Matching $\\int_0^1 x^{m-1}(1-x)^{n-1}\\,dx$ against the given integrand gives $m - 1 = 6$ and $n - 1 = 4$, so $m = 7$ and $n = 5$, and $B(7,5) = \\dfrac{6! \\cdot 4!}{10!} = \\dfrac{720 \\times 24}{3628800} = \\dfrac{1}{210}$.\n\n$B(6, 4)$ commits the off-by-one error in reading the exponents as the parameters directly, instead of adding $1$ to each.\n\n$B(7, 5) = 1/420$ correctly identifies the parameters but computes the wrong numerical value.\n\n$1/35$ does not follow from the correct factorial computation."
  },
  {
    id: "mth302_ch10_009",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "What is the trigonometric form of the Beta function $B(m, n)$?",
    options: [
      "$\\displaystyle\\int_0^{\\pi/2}\\sin^m\\theta\\cos^n\\theta\\,d\\theta$",
      "$\\displaystyle\\int_0^1\\sin^{m-1}\\theta\\cos^{n-1}\\theta\\,d\\theta$",
      "$2\\displaystyle\\int_0^\\pi\\sin^{2m}\\theta\\cos^{2n}\\theta\\,d\\theta$",
      "$2\\displaystyle\\int_0^{\\pi/2}\\sin^{2m-1}\\theta\\cos^{2n-1}\\theta\\,d\\theta$"
    ],
    correctAnswer: 3,
    explanation: "Substituting $x = \\sin^2\\theta$ gives $dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$, and $x^{m-1}(1-x)^{n-1}$ becomes $\\sin^{2m-2}\\theta\\cos^{2n-2}\\theta$; combining the powers from the substitution and the integrand produces $2\\int_0^{\\pi/2}\\sin^{2m-1}\\theta\\cos^{2n-1}\\theta\\,d\\theta$. The upper limit is $\\pi/2$ because $x = 1$ corresponds to $\\theta = \\pi/2$.\n\nThe plain $\sin^m\theta\cos^n\theta$ form uses the wrong exponents and omits the leading factor of $2$.\n\nThe version integrated from $0$ to $1$ uses the wrong upper limit for a trigonometric substitution.\n\nThe version integrated from $0$ to $\pi$ with exponents $2m$ and $2n$ uses the wrong upper limit and the wrong exponents."
  },
  {
    id: "mth302_ch10_010",
    course: "MTH 302",
    chapter: "Chapter 10",
    text: "At which values is the Gamma function undefined?",
    options: [
      "Only at $x = 0$",
      "At $0$ and every negative integer",
      "At every negative non-integer",
      "Nowhere; Gamma is defined for all real numbers"
    ],
    correctAnswer: 1,
    explanation: "Gamma has poles at $0$ and at every negative integer, where its value blows up to infinity, so it is undefined at those points; negative non-integer arguments, by contrast, are perfectly well defined and can be evaluated using the recurrence relation, with signs alternating as the argument decreases through successive negative half-integers.\n\nOnly at $x = 0$ misses the poles at every negative integer as well.\n\nAt every negative non-integer is exactly backwards, since those values are well defined while the negative integers are not.\n\nNowhere is defined for all real numbers ignores the poles entirely."
  }
];

export default mth302Chapter10;
