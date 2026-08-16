import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter11: QuestionV2[] = [
  {
    id: "mth302_ch11_001",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the Legendre polynomial $P_2(x)$?",
    options: [
      "$(3x^2 - 1)/2$",
      "$(3x^2 + 1)/2$",
      "$(5x^2 - 3)/2$",
      "$3x^2 - 1$"
    ],
    correctAnswer: 0,
    explanation: "By Rodrigues' formula, $P_2 = \\dfrac{1}{8}\\dfrac{d^2}{dx^2}(x^2-1)^2$, which works out to $\\dfrac{12x^2-4}{8} = \\dfrac{3x^2-1}{2}$. An instant check is that $P_2(1)$ must equal $1$, and $\\dfrac{3-1}{2} = 1$ confirms this while immediately ruling out the options with a plus sign or a different leading coefficient.\n\n$(3x^2+1)/2$ has the wrong sign on the constant term and fails the check $P_2(1) = 1$.\n\n$(5x^2-3)/2$ uses coefficients that belong to $P_3$ rather than $P_2$.\n\n$3x^2 - 1$ omits the necessary division by $2$, so it fails the normalization check $P_2(1) = 1$."
  },
  {
    id: "mth302_ch11_002",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the Legendre polynomial $P_3(x)$?",
    options: [
      "$(5x^2 - 3x)/2$",
      "$(5x^3 - 3x)/2$",
      "$(5x^3 - 3)/2$",
      "$(35x^3 - 30x)/8$"
    ],
    correctAnswer: 1,
    explanation: "From the recurrence $3P_3 = 5xP_2 - 2P_1 = 5x\\cdot\\dfrac{3x^2-1}{2} - 2x$, which simplifies to $\\dfrac{15x^3-9x}{2}$, giving $P_3 = \\dfrac{5x^3-3x}{2}$. Two instant checks confirm this: the degree of $P_n$ must equal $n$ exactly, ruling out the quadratic option, and $P_3(1)$ must equal $1$, which $\\dfrac{5-3}{2} = 1$ satisfies.\n\n$(5x^2-3x)/2$ has the wrong power on the leading term, since $P_3$ must be cubic, not quadratic.\n\n$(5x^3-3)/2$ fails the check $P_3(1) = 1$, since $\\dfrac{5-3}{2} = 1$ works only with the $x$ multiplying the second term.\n\n$(35x^3-30x)/8$ uses coefficients that belong to a different Legendre polynomial, not $P_3$."
  },
  {
    id: "mth302_ch11_003",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What are the values of $P_n(1)$ and $P_n(-1)$ respectively?",
    options: [
      "$1$ and $1$",
      "$n$ and $-n$",
      "$(-1)^n$ and $1$",
      "$1$ and $(-1)^n$"
    ],
    correctAnswer: 3,
    explanation: "Setting $x = 1$ in the generating function reduces it to $1/(1-t)$, whose power series is $\\sum t^n$, so $P_n(1) = 1$ for every $n$. Setting $x = -1$ reduces it to $1/(1+t)$, whose power series is $\\sum(-1)^nt^n$, so $P_n(-1) = (-1)^n$. This normalization $P_n(1) = 1$ is exactly what fixes the constants in each Legendre polynomial.\n\n$1$ and $1$ wrongly gives the same value at both endpoints, ignoring the alternating sign at $x = -1$.\n\n$n$ and $-n$ do not match the actual constant values $1$ and $(-1)^n$ obtained from the generating function.\n\n$(-1)^n$ and $1$ has the two values swapped."
  },
  {
    id: "mth302_ch11_004",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the value of $\\displaystyle\\int_{-1}^1 P_3(x)^2\\,dx$?",
    options: [
      "$0$",
      "$2/7$",
      "$2/3$",
      "$2$"
    ],
    correctAnswer: 1,
    explanation: "The normalization formula for Legendre polynomials states that $\\int_{-1}^1 P_n^2\\,dx = \\dfrac{2}{2n+1}$, so with $n = 3$ the value is $2/7$.\n\n$0$ is the value that would apply to the integral of $P_m$ times $P_n$ for two different indices $m$ and $n$, not to the integral of $P_n$ squared with itself.\n\n$2/3$ and $2$ do not match the correct substitution $n = 3$ into the formula $2/(2n+1)$."
  },
  {
    id: "mth302_ch11_005",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is Rodrigues' formula for the Legendre polynomials?",
    options: [
      "$P_n = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(x^2-1)^n$",
      "$P_n = \\dfrac{1}{n!}\\dfrac{d^n}{dx^n}(x^2-1)^n$",
      "$P_n = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(1-x^2)^n$",
      "$P_n = \\dfrac{1}{2^n}\\dfrac{d^n}{dx^n}(x^2-1)$"
    ],
    correctAnswer: 0,
    explanation: "The correct normalizing factor is $\\dfrac{1}{2^nn!}$, and the expression differentiated $n$ times is $(x^2-1)$ raised to the same power $n$ as the order of differentiation.\n\n$P_n = \\dfrac{1}{n!}\\dfrac{d^n}{dx^n}(x^2-1)^n$ omits the necessary factor of $2^n$ in the denominator.\n\n$P_n = \\dfrac{1}{2^nn!}\\dfrac{d^n}{dx^n}(1-x^2)^n$ differs by a sign inside the parentheses, which would violate the normalization $P_n(1) = 1$ for odd values of $n$.\n\n$P_n = \\dfrac{1}{2^n}\\dfrac{d^n}{dx^n}(x^2-1)$ both omits the $n!$ factor and fails to raise the bracket to the power $n$."
  },
  {
    id: "mth302_ch11_006",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the recurrence relation for the Legendre polynomials?",
    options: [
      "$(n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}$",
      "$nP_{n+1} = (2n+1)xP_n - (n+1)P_{n-1}$",
      "$P_{n+1} = xP_n - P_{n-1}$",
      "$(2n+1)P_{n+1} = (n+1)xP_n - nP_{n-1}$"
    ],
    correctAnswer: 0,
    explanation: "Testing this recurrence with $n = 1$ gives $2P_2 = 3xP_1 - P_0 = 3x^2 - 1$, so $P_2 = (3x^2-1)/2$, which matches the known correct polynomial, confirming that $(n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}$ is the correct form. Testing a low case against a known polynomial is the fastest way to verify the recurrence quickly.\n\n$nP_{n+1} = (2n+1)xP_n - (n+1)P_{n-1}$ has the coefficients $n$ and $n+1$ swapped relative to the correct recurrence.\n\n$P_{n+1} = xP_n - P_{n-1}$ omits the necessary coefficients $(2n+1)$ and $n$ entirely.\n\n$(2n+1)P_{n+1} = (n+1)xP_n - nP_{n-1}$ misplaces the coefficient $(2n+1)$, which should multiply $xP_n$, not $P_{n+1}$."
  },
  {
    id: "mth302_ch11_007",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "For integer $n$, how does $J_{-n}(x)$ relate to $J_n(x)$?",
    options: [
      "$J_{-n}(x) = J_n(x)$",
      "$J_{-n}(x) = -J_n(x)$",
      "$J_{-n}(x) = (-1)^nJ_n(x)$",
      "$J_{-n}(x) = Y_n(x)$"
    ],
    correctAnswer: 2,
    explanation: "Because $\\Gamma$ is infinite at every non-positive integer, the first $n$ terms of the series for $J_{-n}$ vanish, and re-indexing the remaining series with $k = p + n$ produces the overall factor $(-1)^n$, giving $J_{-n}(x) = (-1)^nJ_n(x)$. The practical consequence is that $J_n$ and $J_{-n}$ are linearly dependent for integer order, which is exactly why the second solution $Y_n$ must be introduced.\n\n$J_{-n}(x) = J_n(x)$ is correct only when $n$ is even, but the general relation includes the sign factor $(-1)^n$ for all integers.\n\n$J_{-n}(x) = -J_n(x)$ is correct only when $n$ is odd, again missing the general $(-1)^n$ pattern.\n\n$J_{-n}(x) = Y_n(x)$ confuses the negative-order Bessel function of the first kind with the entirely separate Bessel function of the second kind."
  },
  {
    id: "mth302_ch11_008",
    course: "MTH 302",
    chapter: "Chapter 11",
    text: "What is the general solution of $x^2y'' + xy' + (x^2-4)y = 0$?",
    options: [
      "$AJ_4(x) + BY_4(x)$",
      "$AJ_2(x) + BY_2(x)$",
      "$AJ_2(x) + BJ_{-2}(x)$",
      "$AP_2(x) + BQ_2(x)$"
    ],
    correctAnswer: 1,
    explanation: "Comparing with the standard Bessel equation $x^2y'' + xy' + (x^2-\\nu^2)y = 0$ gives $\\nu^2 = 4$, so the order is $\\nu = 2$, not $4$, and the general solution is $AJ_2(x) + BY_2(x)$.\n\n$AJ_4(x) + BY_4(x)$ commits the standard slip of reading the order as $4$ directly from the constant term instead of taking its square root.\n\n$AJ_2(x) + BJ_{-2}(x)$ fails because $J_{-2} = (-1)^2J_2 = J_2$, meaning it is not independent of $J_2$ and cannot serve as the second solution.\n\n$AP_2(x) + BQ_2(x)$ wrongly applies the Legendre function solutions, which belong to a different differential equation entirely."
  }
];

export default mth302Chapter11;
