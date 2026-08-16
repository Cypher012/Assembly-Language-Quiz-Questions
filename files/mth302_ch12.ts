import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter12: QuestionV2[] = [
  {
    id: "mth302_ch12_001",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "If $f$ is an odd function on $[-\\pi, \\pi]$, which Fourier coefficients vanish?",
    options: [
      "The sine coefficients $b_n$",
      "The constant term $a_0$ and all cosine coefficients $a_n$",
      "Both $a_n$ and $b_n$ for all $n$",
      "Only the constant term $a_0$"
    ],
    correctAnswer: 1,
    explanation: "An odd function multiplied by $\\cos(nx)$ is itself odd, so every cosine-related integral over the symmetric interval vanishes, including the constant term $a_0$, which is computed the same way. Only the sine coefficients survive, giving a pure sine series.\n\nThe sine coefficients $b_n$ is exactly the statement for an even function, not an odd one.\n\nBoth $a_n$ and $b_n$ vanishing for all $n$ would leave no series at all, which is too strong.\n\nOnly the constant term $a_0$ understates the result, since every cosine coefficient $a_n$ vanishes as well, not just the constant term."
  },
  {
    id: "mth302_ch12_002",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "For the square wave $f = -k$ on $(-\\pi, 0)$ and $f = k$ on $(0, \\pi)$, what is the Fourier series?",
    options: [
      "$\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$",
      "$\\dfrac{2k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 2x}{2} + \\cdots\\right)$",
      "$\\dfrac{4k}{\\pi}\\left(\\cos x + \\dfrac{\\cos 3x}{3} + \\cdots\\right)$",
      "$\\dfrac{k}{2} + \\dfrac{4k}{\\pi}\\sin x$"
    ],
    correctAnswer: 0,
    explanation: "The function is odd, so $a_0$ and all $a_n$ vanish, and $b_n = \\dfrac{2k}{n\\pi}(1 - \\cos n\\pi)$, which equals $4k/(n\\pi)$ for odd $n$ and $0$ for even $n$, giving the series $\\dfrac{4k}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$.\n\nThe version with even harmonics like $\sin(2x)/2$ includes terms that this odd square wave does not actually contain.\n\nThe cosine-based version wrongly uses cosine terms for a function that is odd and therefore has a pure sine expansion.\n\nThe version with a leading $k/2$ term wrongly includes a nonzero constant, but the mean value of this particular function over a period is zero."
  },
  {
    id: "mth302_ch12_003",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "For that same square wave, what is the value of the coefficient $b_4$?",
    options: [
      "$4k/(4\\pi)$",
      "$k/\\pi$",
      "$0$",
      "$2k/\\pi$"
    ],
    correctAnswer: 2,
    explanation: "The formula $b_n$ is proportional to $(1 - \\cos n\\pi)$, which equals $1 - (-1)^n$, giving $0$ for every even $n$ and $2$ for every odd $n$. Since $n = 4$ is even, $b_4 = 0$, a direct consequence of the half-wave symmetry this square wave possesses.\n\n$4k/(4\\pi)$ and $k/\\pi$ both wrongly assign a nonzero value to an even-indexed coefficient.\n\n$2k/\\pi$ is the value that would apply to an odd-indexed coefficient, not the even $n = 4$ case."
  },
  {
    id: "mth302_ch12_004",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "In the expansion $f(x) = \\dfrac{a_0}{2} + \\sum(a_n\\cos nx + b_n\\sin nx)$, with $a_0$ defined by the standard integral formula, what does the constant term $a_0/2$ represent?",
    options: [
      "Twice the mean value of $f$",
      "The maximum value of $f$",
      "The mean value of $f$ over a period",
      "It is always zero"
    ],
    correctAnswer: 2,
    explanation: "Since $a_0/2$ equals $\\dfrac{1}{2\\pi}\\displaystyle\\int f\\,dx$ over one period, it is precisely the average value of $f$ over that period. This gives a quick sanity check on any Fourier answer: for a function that equals $0$ on half the period and $a$ on the other half, the constant term must work out to $a/2$.\n\nTwice the mean value of $f$ is off by a factor of $2$ from the correct interpretation.\n\nThe maximum value of $f$ confuses the constant, or average, term with a completely different quantity.\n\nIt is always zero is only true for functions whose average over a period happens to be zero, such as the odd square wave, not for Fourier series in general."
  },
  {
    id: "mth302_ch12_005",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "At a point where a function $f$ has a jump discontinuity, what does its Fourier series converge to?",
    options: [
      "The left-hand limit $f(x_0^-)$",
      "The right-hand limit $f(x_0^+)$",
      "The average of the left and right limits, one half times the sum $f(x_0^-) + f(x_0^+)$",
      "The series diverges"
    ],
    correctAnswer: 2,
    explanation: "By the Dirichlet convergence theorem, at a jump discontinuity the Fourier series converges to the average of the one-sided limits, $\\dfrac{1}{2}[f(x_0^-) + f(x_0^+)]$. For the square wave at $x = 0$ this gives $0$, the midpoint between $-k$ and $k$, even though the function itself is defined to equal one of those two values at that exact point.\n\nThe left-hand limit and the right-hand limit each capture only one side of the jump rather than the correct average of both.\n\nThe series diverges is incorrect, since Dirichlet's theorem guarantees convergence to a specific value even at a jump."
  },
  {
    id: "mth302_ch12_006",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "What is the period of $y = 3\\sin(5x)$?",
    options: [
      "$2\\pi/5$",
      "$5\\pi$",
      "$2\\pi$",
      "$\\pi/5$"
    ],
    correctAnswer: 0,
    explanation: "The period of $A\\sin(nx)$ is $2\\pi/n$ regardless of the amplitude $A$, so with $n = 5$ the period is $2\\pi/5$. The amplitude $3$ has no effect on the period whatsoever.\n\n$5\\pi$ and $\\pi/5$ do not follow from the formula $2\\pi/n$ with $n = 5$.\n\n$2\\pi$ is the period of $\\sin x$ itself, ignoring the factor of $5$ multiplying $x$."
  },
  {
    id: "mth302_ch12_007",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "For $f(x) = 0$ on $(-\\pi, 0)$ and $f(x) = a$ on $(0, \\pi)$, with period $2\\pi$, what is the Fourier series?",
    options: [
      "$\\dfrac{a}{2} + \\dfrac{2a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$",
      "$a + \\dfrac{2a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$",
      "$\\dfrac{a}{2} + \\dfrac{4a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\cdots\\right)$",
      "$\\dfrac{a}{2} + \\dfrac{2a}{\\pi}\\left(\\cos x + \\dfrac{\\cos 3x}{3} + \\cdots\\right)$"
    ],
    correctAnswer: 0,
    explanation: "Here $a_0 = \\dfrac{1}{\\pi}\\displaystyle\\int_0^\\pi a\\,dx$, which equals $a$, so the constant term is $a_0/2 = a/2$, matching the mean value of the function over the period. The cosine coefficients $a_n$ vanish, and $b_n = \\dfrac{a}{n\\pi}(1 - \\cos n\\pi)$, which equals $2a/(n\\pi)$ for odd $n$, giving the series $\\dfrac{a}{2} + \\dfrac{2a}{\\pi}\\left(\\sin x + \\dfrac{\\sin 3x}{3} + \\dfrac{\\sin 5x}{5} + \\cdots\\right)$.\n\nThe version with a leading $a$ rather than $a/2$ forgets to halve $a_0$, doubling the constant term.\n\nThe version with $4a/\pi$ doubles $b_n$ by mistakenly applying the formula used for the symmetric square wave rather than this one-sided pulse.\n\nThe cosine-based version wrongly uses cosine terms, but the $a_n$ coefficients here are actually all zero."
  },
  {
    id: "mth302_ch12_008",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "For a function of period $2L$, what is the formula for the coefficient $b_n$?",
    options: [
      "$\\dfrac{1}{L}\\displaystyle\\int_{-L}^{L} f\\sin\\left(\\dfrac{n\\pi x}{L}\\right)dx$",
      "$\\dfrac{1}{2L}\\displaystyle\\int_{-L}^{L} f\\sin\\left(\\dfrac{n\\pi x}{L}\\right)dx$",
      "$\\dfrac{1}{\\pi}\\displaystyle\\int_{-L}^{L} f\\sin(nx)\\,dx$",
      "$\\dfrac{1}{L}\\displaystyle\\int_0^{L} f\\sin\\left(\\dfrac{n\\pi x}{L}\\right)dx$"
    ],
    correctAnswer: 0,
    explanation: "Rescaling $v = \\pi x/L$ so that $v$ runs over $2\\pi$ while $x$ runs over $2L$ turns every prefactor of $1/\\pi$ in the period-$2\\pi$ formulas into $1/L$, with the limits becoming $\\pm L$ and $nx$ becoming $n\\pi x/L$, giving $b_n = \\dfrac{1}{L}\\int_{-L}^{L} f\\sin(n\\pi x/L)\\,dx$.\n\nThe version with $1/(2L)$ has an extra factor of $2$ in the denominator that does not belong.\n\nThe version with $1/\\pi$ and $\\sin(nx)$ incorrectly keeps the period-$2\\pi$ prefactor and argument rather than rescaling them for period $2L$.\n\nThe version integrated from $0$ to $L$ is the half-range sine formula, which carries a different prefactor of $2/L$ and different limits, not the full-range formula asked for here."
  },
  {
    id: "mth302_ch12_009",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "For $f(x) = x^2$ on $(-\\pi, \\pi)$ extended periodically, which statement is correct?",
    options: [
      "All the $a_n$ coefficients vanish",
      "The series has only sine terms",
      "The constant term $a_0$ is zero",
      "All the $b_n$ coefficients vanish"
    ],
    correctAnswer: 3,
    explanation: "Since $x^2$ is an even function, $f(x)\\sin(nx)$ is odd, so every sine-related integral over the symmetric interval $[-\\pi, \\pi]$ vanishes, meaning all $b_n$ coefficients are zero. The resulting expansion is a pure cosine series, with $a_0$ equal to $2\\pi^2/3$ and $a_n$ equal to $4(-1)^n/n^2$.\n\nAll the $a_n$ coefficients vanish is exactly backwards, since it is the cosine coefficients that survive for this even function.\n\nThe series has only sine terms is also backwards, since an even function produces a cosine series, not a sine series.\n\nThe constant term $a_0$ is zero is false, since $a_0$ works out to the nonzero value $2\\pi^2/3$ for this function."
  },
  {
    id: "mth302_ch12_010",
    course: "MTH 302",
    chapter: "Chapter 12",
    text: "Solving $u_t = \\kappa u_{xx}$ on $0 < x < L$ with $u(0, t) = u(L, t) = 0$ and a general initial temperature profile requires expanding $u(x, 0)$ in which type of series?",
    options: [
      "A full Fourier series on the interval from $-L$ to $L$",
      "A half-range cosine series",
      "A half-range sine series",
      "A Taylor series"
    ],
    correctAnswer: 2,
    explanation: "The eigenfunctions of the associated Sturm-Liouville problem $X'' + \\lambda X = 0$ with $X(0) = X(L) = 0$ are $\\sin(n\\pi x/L)$, so the initial condition must be expanded in those functions alone, which is a half-range sine series. A half-range cosine series would instead be required for insulated ends, where the boundary condition involves $u_x = 0$ at both endpoints rather than $u = 0$.\n\nA full Fourier series on the interval from $-L$ to $L$ does not match the boundary conditions given here, which are defined only on $(0, L)$.\n\nA half-range cosine series is the companion expansion appropriate for insulated, not zero-temperature, boundary conditions.\n\nA Taylor series has no connection to satisfying the zero-boundary eigenfunction structure required by this problem."
  }
];

export default mth302Chapter12;
