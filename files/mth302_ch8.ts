import { QuestionV2 } from "@/lib/quiz-types";

const mth302Chapter8: QuestionV2[] = [
  {
    id: "mth302_ch8_001",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For a copper bar with $K = 0.95$, $\\rho = 8.92$, and $s = 0.092$, what is the approximate thermal diffusivity $\\kappa = K/(\\rho s)$?",
    options: [
      "$0.86$",
      "$1.16$",
      "$8.92$",
      "$0.095$"
    ],
    correctAnswer: 1,
    explanation: "Computing directly, $\\kappa = \\dfrac{0.95}{8.92 \\times 0.092} = \\dfrac{0.95}{0.82064}$, which is approximately $1.158$ square centimeters per second.\n\n$0.86$ results from a reciprocal-style slip that inverts the ratio $\\rho s/K$ instead of $K/(\\rho s)$.\n\n$8.92$ mistakenly reports the density value itself rather than the computed diffusivity.\n\n$0.095$ drops a factor of ten somewhere in the arithmetic."
  },
  {
    id: "mth302_ch8_002",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "A bar of length $L = 80$ has $u(0, t) = u(80, t) = 0$ and initial temperature $u(x, 0) = 100\\sin(3\\pi x/80)$. What is the solution $u(x, t)$?",
    options: [
      "$100e^{-\\kappa(3\\pi/80)t}\\sin(3\\pi x/80)$",
      "$100e^{-\\kappa(3\\pi/80)^2t}\\sin(3\\pi x/80)$",
      "$100e^{-\\kappa(\\pi/80)^2t}\\sin(3\\pi x/80)$",
      "$100e^{-\\kappa(3\\pi/80)^2t/2}\\sin(3\\pi x/80)$"
    ],
    correctAnswer: 1,
    explanation: "Separation of variables gives $u = Ae^{-\\kappa(n\\pi/L)^2t}\\sin(n\\pi x/L)$. Since the initial profile is exactly the third spatial mode, $n = 3$, $L = 80$, and $A = 100$, giving $100e^{-\\kappa(3\\pi/80)^2t}\\sin(3\\pi x/80)$. The entire bracket $n\\pi/L$ must be squared, and $t$ appears to the first power in the exponent.\n\n$100e^{-\\kappa(3\\pi/80)t}\\sin(3\\pi x/80)$ forgets to square the bracket entirely.\n\n$100e^{-\\kappa(\\pi/80)^2t}\\sin(3\\pi x/80)$ drops the mode number $n = 3$ from the exponent while keeping it in the sine term, an inconsistency.\n\n$100e^{-\\kappa(3\\pi/80)^2t/2}\\sin(3\\pi x/80)$ introduces an extraneous factor of $2$ in the exponent that does not belong."
  },
  {
    id: "mth302_ch8_003",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For that same copper bar, approximately how long does it take for the maximum temperature to fall to $50$ degrees?",
    options: [
      "$21$ seconds",
      "$43$ seconds",
      "$86$ seconds",
      "$120$ seconds"
    ],
    correctAnswer: 1,
    explanation: "The amplitude of the solution is $100e^{-\\kappa(3\\pi/80)^2t}$. Setting this equal to $50$ gives $t = \\dfrac{\\ln 2}{\\kappa(3\\pi/80)^2} = \\dfrac{0.6931}{1.158 \\times 0.013879}$, which is approximately $43$ seconds.\n\n$21$ seconds results from using $\\ln 2$ divided by $2$ rather than solving the actual exponential equation.\n\n$86$ seconds results from forgetting to square the bracket $(3\\pi/80)$ correctly, roughly doubling the required time.\n\n$120$ seconds does not follow from correctly solving the amplitude equation."
  },
  {
    id: "mth302_ch8_004",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "A rod of length $50$ has zero end temperatures and initial temperature $u(x, 0) = 80\\sin(2\\pi x/50)$. What is the solution?",
    options: [
      "$80e^{-2\\kappa t}\\sin(2\\pi x/50)$",
      "$80e^{-\\kappa(\\pi/50)^2t}\\sin(2\\pi x/50)$",
      "$80e^{-\\kappa(2\\pi/50)t}\\sin(\\pi x/50)$",
      "$80e^{-\\kappa(2\\pi/50)^2t}\\sin(2\\pi x/50)$"
    ],
    correctAnswer: 3,
    explanation: "Reading $n = 2$ and $L = 50$ directly off the initial condition and substituting into $Ae^{-\\kappa(n\\pi/L)^2t}\\sin(n\\pi x/L)$ gives $80e^{-\\kappa(2\\pi/50)^2t}\\sin(2\\pi x/50)$. The spatial part of the solution does not change with time; only the amplitude decays.\n\n$80e^{-2\\kappa t}\\sin(2\\pi x/50)$ does not correctly incorporate the mode number and length into the exponent.\n\n$80e^{-\\kappa(\\pi/50)^2t}\\sin(2\\pi x/50)$ drops the mode number $n = 2$ from the exponent.\n\n$80e^{-\\kappa(2\\pi/50)t}\\sin(\\pi x/50)$ forgets to square the bracket and also changes the mode number in the sine term inconsistently."
  },
  {
    id: "mth302_ch8_005",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What is D'Alembert's solution of $u_{tt} = c^2u_{xx}$ with $u(x, 0) = \\phi(x)$ and $u_t(x, 0) = \\psi(x)$?",
    options: [
      "$\\dfrac{1}{2}(\\phi(x+ct) + \\phi(x-ct)) + \\dfrac{1}{2}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$",
      "$\\dfrac{1}{2}(\\phi(x+ct) + \\phi(x-ct)) + \\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$",
      "$\\phi(x+ct) + \\phi(x-ct) + \\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$",
      "$\\dfrac{1}{2}(\\phi(x+ct) - \\phi(x-ct)) + \\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$"
    ],
    correctAnswer: 1,
    explanation: "Both the factor of $1/2$ on the displacement part and the factor of $1/(2c)$ on the velocity integral are needed: at $t = 0$ the displacement part reduces to $\\phi(x)$, and differentiating the integral term with respect to $t$ and evaluating at $t = 0$ correctly returns $\\psi(x)$.\n\nThe version using $1/2$ instead of $1/(2c)$ on the integral term drops the required factor of $c$ in the denominator.\n\nThe version with no leading $1/2$ on the displacement part omits that factor, doubling it incorrectly.\n\nThe version using a minus sign between $\phi(x+ct)$ and $\phi(x-ct)$ would give $u(x, 0) = 0$, contradicting the prescribed initial displacement $\\phi(x)$."
  },
  {
    id: "mth302_ch8_006",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What is the domain of dependence of the point $(x, t)$ for the wave equation $u_{tt} = c^2u_{xx}$?",
    options: [
      "The whole real line",
      "The interval from $x - ct$ to $x + ct$",
      "The single point $x$",
      "The interval from $x - t$ to $x + t$"
    ],
    correctAnswer: 1,
    explanation: "D'Alembert's formula only involves $\\phi$ evaluated at $x \\pm ct$ and $\\psi$ integrated over the interval from $x - ct$ to $x + ct$, showing that signals travel at the finite speed $c$. This finite domain of dependence contrasts sharply with the heat equation, which has infinite propagation speed.\n\nThe whole real line wrongly implies infinite propagation speed, which applies to the heat equation, not the wave equation.\n\nThe single point $x$ ignores the spreading effect of the wave over time entirely.\n\nThe interval from $x - t$ to $x + t$ omits the wave speed $c$ from the bounds, an easy slip when $c$ is implicitly taken as $1$."
  },
  {
    id: "mth302_ch8_007",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "How are the heat equation, wave equation, and Laplace equation classified respectively?",
    options: [
      "Hyperbolic, parabolic, elliptic",
      "Parabolic, elliptic, hyperbolic",
      "Elliptic, parabolic, hyperbolic",
      "Parabolic, hyperbolic, elliptic"
    ],
    correctAnswer: 3,
    explanation: "For $u_t = \\kappa u_{xx}$, treating $x$ and $t$ as the two variables gives $A = \\kappa$, $B = 0$, $C = 0$, so the discriminant is $0$, making it parabolic. For $u_{tt} = c^2u_{xx}$, the discriminant is $4c^2$, which is positive, making it hyperbolic. For $u_{xx} + u_{yy} = 0$, the discriminant is $-4$, which is negative, making it elliptic. This gives parabolic, hyperbolic, elliptic in that order.\n\nHyperbolic, parabolic, elliptic assigns the heat equation the wrong type.\n\nParabolic, elliptic, hyperbolic swaps the wave and Laplace classifications.\n\nElliptic, parabolic, hyperbolic misclassifies all three equations relative to their correct types."
  },
  {
    id: "mth302_ch8_008",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the general heat solution $u = \\sum_n B_n e^{-\\kappa(n\\pi/L)^2t}\\sin(n\\pi x/L)$, which mode decays fastest as $t$ increases?",
    options: [
      "The mode $n = 1$",
      "The mode with the largest coefficient $B_n$",
      "All modes decay at the same rate",
      "The mode with the largest $n$ present"
    ],
    correctAnswer: 3,
    explanation: "The decay rate for each mode is $\\kappa(n\\pi/L)^2$, which increases with $n^2$, so higher-frequency components are damped fastest. This is why heat conduction smooths out a rough initial temperature profile very quickly, since the high-$n$ modes vanish first.\n\nThe mode $n = 1$ actually decays the slowest among the modes present, not the fastest.\n\nThe mode with the largest coefficient $B_n$ confuses the size of a term's contribution with its rate of decay, which are independent properties.\n\nAll modes decay at the same rate is false, since the exponent depends explicitly on $n^2$."
  }
];

export default mth302Chapter8;
