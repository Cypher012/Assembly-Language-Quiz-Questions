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
    text: "For a copper bar of length $L = 80$ with $\\kappa \\approx 1.158$ and $u(x, 0) = 100\\sin\\dfrac{3\\pi x}{80}$, approximately how long does it take for the maximum temperature to fall to $50$ degrees?",
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
  },
  {
    id: "mth302_ch8_009",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the heat equation $u_t = \\kappa u_{xx}$, how is the thermal diffusivity $\\kappa$ defined?",
    options: [
      "$\\kappa = \\dfrac{K}{\\rho s}$",
      "$\\kappa = \\dfrac{\\rho s}{K}$, inverting the ratio of the three quantities",
      "$\\kappa = K\\rho s$, formed as a product of all three quantities",
      "$\\kappa = \\dfrac{K\\rho}{s}$, placing the density in the numerator"
    ],
    correctAnswer: 0,
    explanation: "The diffusivity is the conductivity divided by the product of density and specific heat, $\\kappa = \\dfrac{K}{\\rho s}$.\n\nInverting the ratio would give the reciprocal of the diffusivity.\n\nA product of all three has the wrong dimensions entirely.\n\nMoving $\\rho$ to the numerator misplaces the density."
  },
  {
    id: "mth302_ch8_010",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Separating $u = X(x)T(t)$ in the heat equation with zero end temperatures gives which problem for $X$?",
    options: [
      "$X'' + \\lambda X = 0$ with $X(0) = X(L) = 0$",
      "$X'' - \\lambda X = 0$ with $X(0) = X(L) = 0$, carrying the opposite sign",
      "$X' + \\lambda X = 0$ with $X(0) = 0$, a first-order problem instead",
      "$X'' + \\lambda X = 0$ with $X'(0) = X'(L) = 0$, imposing Neumann conditions"
    ],
    correctAnswer: 0,
    explanation: "Separation produces $X'' + \\lambda X = 0$, and the vanishing end temperatures transfer directly to $X(0) = X(L) = 0$.\n\nThe opposite sign would give exponential rather than sinusoidal modes.\n\nA first-order equation cannot carry two boundary conditions.\n\nNeumann conditions correspond to insulated ends, not to prescribed zero temperature."
  },
  {
    id: "mth302_ch8_011",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What are the eigenvalues of $X'' + \\lambda X = 0$ with $X(0) = X(L) = 0$?",
    options: [
      "$\\lambda_n = \\left(\\dfrac{n\\pi}{L}\\right)^2$",
      "$\\lambda_n = \\dfrac{n^2\\pi^2}{L}$, with $L$ appearing to the first power only",
      "$\\lambda_n = \\dfrac{n\\pi}{L}$, without squaring the whole bracket",
      "$\\lambda_n = \\dfrac{n\\pi}{L^2}$, squaring only the length"
    ],
    correctAnswer: 0,
    explanation: "Non-trivial solutions require $\\lambda_n = (n\\pi/L)^2$, with the whole bracket squared.\n\nLeaving $L$ unsquared is the standard slip on this eigenvalue.\n\nOmitting the square altogether gives the wrong dimensions.\n\nSquaring only $L$ misplaces the exponent."
  },
  {
    id: "mth302_ch8_012",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What are the corresponding eigenfunctions $X_n$?",
    options: [
      "$\\sin\\dfrac{n\\pi x}{L}$",
      "$\\cos\\dfrac{n\\pi x}{L}$, which would satisfy insulated end conditions instead",
      "$e^{n\\pi x/L}$, an exponential rather than a sinusoid",
      "$\\sin\\dfrac{n\\pi x}{L^2}$, with the length squared in the argument"
    ],
    correctAnswer: 0,
    explanation: "The condition $X(0) = 0$ selects the sine, and $X(L) = 0$ quantises the frequency, giving $\\sin(n\\pi x/L)$.\n\nThe cosine fails $X(0) = 0$.\n\nAn exponential cannot vanish at both ends.\n\nSquaring $L$ in the argument would break the boundary condition at $x = L$."
  },
  {
    id: "mth302_ch8_013",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What is the time factor $T_n(t)$ for the heat equation?",
    options: [
      "$e^{-\\kappa(n\\pi/L)^2t}$",
      "$e^{-\\kappa n\\pi t/L}$, without squaring the bracket at all",
      "$e^{-\\kappa(n\\pi/L)t}$, squaring nothing in the exponent",
      "$e^{+\\kappa(n\\pi/L)^2t}$, with a positive exponent producing growth"
    ],
    correctAnswer: 0,
    explanation: "Substituting the separated form gives $T' = -\\kappa\\lambda_n T$, so $T_n = e^{-\\kappa(n\\pi/L)^2t}$ with the whole bracket squared.\n\nOmitting the square is one of the two standard distractors for this exponent.\n\nSquaring nothing is the other standard distractor.\n\nA positive exponent would make the temperature grow without bound."
  },
  {
    id: "mth302_ch8_014",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the exponent $\\kappa(n\\pi/L)^2t$, where does the mode number $n$ come from?",
    options: [
      "The initial condition",
      "The boundary conditions at the two ends of the rod",
      "The thermal diffusivity of the material being heated",
      "The length of the rod measured in centimetres"
    ],
    correctAnswer: 0,
    explanation: "The mode number is read off the initial temperature profile, so an initial condition proportional to $\\sin(3\\pi x/L)$ fixes $n = 3$ rather than $n = 1$.\n\nThe boundary conditions determine the family of admissible modes but not which one is present.\n\nThe diffusivity is a material constant and carries no mode information.\n\nThe length enters separately as $L$ in the same bracket."
  },
  {
    id: "mth302_ch8_015",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For a general initial profile, what are the coefficients $B_n$ in $u = \\sum_n B_ne^{-\\kappa(n\\pi/L)^2t}\\sin\\dfrac{n\\pi x}{L}$?",
    options: [
      "The Fourier sine coefficients of $u(x, 0)$",
      "The Fourier cosine coefficients of the initial profile instead",
      "The eigenvalues of the associated spatial problem",
      "Arbitrary constants fixed by the boundary conditions"
    ],
    correctAnswer: 0,
    explanation: "Setting $t = 0$ leaves a sine series for $u(x, 0)$, so the $B_n$ are exactly its Fourier sine coefficients.\n\nCosine coefficients would correspond to an expansion in cosines, which the zero end conditions exclude.\n\nThe eigenvalues appear in the exponent, not as the coefficients.\n\nThe boundary conditions are already satisfied by every mode and cannot fix the coefficients."
  },
  {
    id: "mth302_ch8_016",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For a copper bar with $K = 0.95$, $\\rho = 8.92$ and $s = 0.092$, what is $\\kappa$ approximately?",
    options: [
      "$1.158$",
      "$0.864$, obtained by inverting the computed ratio",
      "$0.78$",
      "$8.92$, taking the density as the diffusivity"
    ],
    correctAnswer: 0,
    explanation: "Computing $\\kappa = \\dfrac{0.95}{8.92 \\times 0.092} \\approx \\dfrac{0.95}{0.8206} \\approx 1.158$.\n\nInverting the ratio gives roughly the reciprocal.\n\nMultiplying the quantities has the wrong structure entirely.\n\nThe density alone is not the diffusivity."
  },
  {
    id: "mth302_ch8_017",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For a bar with $u(x, 0) = 100\\sin\\dfrac{3\\pi x}{80}$, what is the maximum temperature at time $t$?",
    options: [
      "The amplitude $100e^{-\\kappa(3\\pi/80)^2t}$",
      "The value $100$ at every time, since the sine attains one somewhere",
      "The value at the midpoint $x = 40$ only, wherever the sine happens to peak",
      "The integral of the profile taken across the whole bar"
    ],
    correctAnswer: 0,
    explanation: "The decay factor does not depend on $x$, so the maximum over $x$ is simply the amplitude multiplying the sine.\n\nThe amplitude decays with time, so it does not stay at $100$.\n\nFor $n = 3$ the sine does not peak at the midpoint, and in any case the amplitude is what matters.\n\nAn integral would give a total rather than a maximum."
  },
  {
    id: "mth302_ch8_018",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Setting $e^{-\\kappa(3\\pi/80)^2t} = \\tfrac{1}{2}$ gives which expression for $t$?",
    options: [
      "$t = \\dfrac{\\ln 2}{\\kappa(3\\pi/80)^2}$",
      "$t = \\dfrac{\\ln 2}{\\kappa}$",
      "$t = \\kappa(3\\pi/80)^2\\ln 2$, multiplying rather than dividing",
      "$t = \\dfrac{\\ln(1/2)}{\\kappa(3\\pi/80)^2}$, retaining a negative logarithm"
    ],
    correctAnswer: 0,
    explanation: "Taking logarithms gives $-\\kappa(3\\pi/80)^2t = -\\ln 2$, so $t = \\dfrac{\\ln 2}{\\kappa(3\\pi/80)^2}$.\n\nDropping the eigenvalue removes the mode dependence.\n\nMultiplying instead of dividing inverts the relation.\n\nRetaining $\\ln(1/2)$ leaves a negative value for a positive time."
  },
  {
    id: "mth302_ch8_019",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "If a problem supplies thermal conductivity, density and specific heat, which model applies?",
    options: [
      "The heat equation",
      "The wave equation, if the wording of the question mentions a vibrating string",
      "The Laplace equation",
      "A first-order transport equation with constant coefficients"
    ],
    correctAnswer: 0,
    explanation: "The data determine a thermal diffusivity, so the heat equation is the correct model regardless of how the question is worded.\n\nWave problems require a wave speed, not conductivity and specific heat.\n\nThe Laplace equation describes a steady state with no time evolution.\n\nA first-order transport equation would not use these material constants."
  },
  {
    id: "mth302_ch8_020",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What is D'Alembert's solution of $u_{tt} = c^2u_{xx}$ with $u(x,0) = \\phi$ and $u_t(x,0) = \\psi$?",
    options: [
      "$\\tfrac{1}{2}[\\phi(x + ct) + \\phi(x - ct)] + \\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$",
      "$\\tfrac{1}{2}[\\phi(x + ct) + \\phi(x - ct)] + \\dfrac{1}{2}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$",
      "$\\tfrac{1}{2}[\\phi(x + ct) - \\phi(x - ct)] + \\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$",
      "$\\phi(x + ct) + \\phi(x - ct) + \\dfrac{1}{2c}\\displaystyle\\int_{x-ct}^{x+ct}\\psi(s)\\,ds$"
    ],
    correctAnswer: 0,
    explanation: "The displacement contributes the average of the two travelling profiles and the velocity contributes an integral carrying the factor $\\dfrac{1}{2c}$.\n\nUsing $\\tfrac{1}{2}$ in place of $\\dfrac{1}{2c}$ drops the wave speed from the integral term.\n\nA difference of the two profiles fails the initial displacement condition.\n\nOmitting the factor $\\tfrac{1}{2}$ doubles the initial displacement."
  },
  {
    id: "mth302_ch8_021",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What factor multiplies the integral term in D'Alembert's formula?",
    options: [
      "$\\dfrac{1}{2c}$",
      "$\\dfrac{1}{2}$",
      "$\\dfrac{1}{c}$, which omits the factor of two",
      "$2c$, placing the factor in the numerator instead"
    ],
    correctAnswer: 0,
    explanation: "The velocity term carries $\\dfrac{1}{2c}$, with both the two and the wave speed in the denominator.\n\nUsing $\\dfrac{1}{2}$ alone is the standard slip on this formula.\n\nUsing $\\dfrac{1}{c}$ drops the factor of two.\n\nPlacing $2c$ in the numerator inverts the factor."
  },
  {
    id: "mth302_ch8_022",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What are the limits of the integral in D'Alembert's formula?",
    options: [
      "From $x - ct$ to $x + ct$",
      "From $0$ to $x$, integrating from the origin to the point of interest",
      "From $-\\infty$ to $\\infty$, taking the whole real line into account",
      "From $x - t$ to $x + t$"
    ],
    correctAnswer: 0,
    explanation: "The integral runs across the interval reached by signals travelling at speed $c$, namely from $x - ct$ to $x + ct$.\n\nIntegrating from the origin ignores the finite propagation speed.\n\nIntegrating over the whole line would contradict finite propagation speed.\n\nOmitting $c$ from the limits misscales the interval."
  },
  {
    id: "mth302_ch8_023",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What is the domain of dependence of the point $(x, t)$ for $u_{tt} = c^2u_{xx}$?",
    options: [
      "The interval $[x - ct,\\ x + ct]$",
      "The single point $x$ on the initial line",
      "The whole real line at the initial time",
      "The interval $[x - t,\\ x + t]$"
    ],
    correctAnswer: 0,
    explanation: "D'Alembert's formula shows the solution at $(x, t)$ uses initial data only from $[x - ct, x + ct]$.\n\nA single point cannot account for the integral term.\n\nUsing the whole line describes infinite propagation speed, which is the parabolic case.\n\nDropping $c$ misscales the interval."
  },
  {
    id: "mth302_ch8_024",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Which type of problem has finite propagation speed?",
    options: [
      "Hyperbolic",
      "Parabolic, of which the heat equation is the standard model",
      "Elliptic",
      "Every type, regardless of the classification"
    ],
    correctAnswer: 0,
    explanation: "Hyperbolic problems such as the wave equation propagate signals at the finite speed $c$, which is why the domain of dependence is a bounded interval.\n\nParabolic problems such as the heat equation have infinite propagation speed.\n\nElliptic problems describe steady states with no propagation.\n\nThe distinction is precisely between the types, so it cannot hold for all."
  },
  {
    id: "mth302_ch8_025",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Which type of problem has infinite propagation speed?",
    options: [
      "Parabolic",
      "Hyperbolic, of which the wave equation is the standard model",
      "Elliptic",
      "None"
    ],
    correctAnswer: 0,
    explanation: "The heat equation is parabolic, and a disturbance anywhere in the initial data affects the solution everywhere immediately.\n\nHyperbolic problems have the finite speed $c$.\n\nElliptic problems have no time evolution to propagate.\n\nThe heat equation does exhibit this behaviour as a property of the model."
  },
  {
    id: "mth302_ch8_026",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For the pure displacement case $\\psi = 0$, what does D'Alembert's formula reduce to?",
    options: [
      "$\\tfrac{1}{2}[\\phi(x + ct) + \\phi(x - ct)]$",
      "$\\phi(x + ct) + \\phi(x - ct)$",
      "$\\tfrac{1}{2}[\\phi(x + ct) - \\phi(x - ct)]$, taking a difference instead",
      "$\\phi(x)$, unchanged for all later times"
    ],
    correctAnswer: 0,
    explanation: "With no initial velocity the integral vanishes, leaving the average of the two travelling copies of the initial profile.\n\nOmitting the factor $\\tfrac{1}{2}$ doubles the value at $t = 0$.\n\nA difference vanishes at $t = 0$ and so fails the initial condition.\n\nA static profile would not satisfy the wave equation."
  },
  {
    id: "mth302_ch8_027",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "How are the heat, wave and Laplace equations classified, respectively?",
    options: [
      "Parabolic, hyperbolic, elliptic",
      "Hyperbolic, parabolic, elliptic",
      "Elliptic, hyperbolic, parabolic",
      "Parabolic, elliptic, hyperbolic, with the last two interchanged"
    ],
    correctAnswer: 0,
    explanation: "The diffusion equation is parabolic, the wave equation hyperbolic, and the Laplace equation elliptic.\n\nInterchanging the first two misassigns diffusion and propagation.\n\nInterchanging the outer two misassigns the steady-state model.\n\nInterchanging the last two swaps the wave and steady-state models."
  },
  {
    id: "mth302_ch8_028",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For a rod of length $50$ with zero ends and $u(x, 0) = 80\\sin\\dfrac{\\pi x}{50}$, which mode is present?",
    options: [
      "$n = 1$",
      "$n = 50$",
      "$n = 80$",
      "$n = 2$, doubling the mode read from the profile"
    ],
    correctAnswer: 0,
    explanation: "Comparing $\\sin(\\pi x/50)$ with $\\sin(n\\pi x/L)$ and $L = 50$ gives $n = 1$.\n\nThe length appears as $L$, not as the mode number.\n\nThe amplitude $80$ multiplies the profile and carries no mode information.\n\nNothing in the profile suggests doubling the mode."
  },
  {
    id: "mth302_ch8_029",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the diffusivity $\\kappa = K/(\\rho s)$, what does $K$ denote?",
    options: [
      "Thermal conductivity",
      "Specific heat capacity of the rod",
      "Density of the rod",
      "The length of the rod under consideration"
    ],
    correctAnswer: 0,
    explanation: "In $\\kappa = K/(\\rho s)$ the symbol $K$ is the thermal conductivity.\n\nSpecific heat is denoted $s$.\n\nDensity is denoted $\\rho$.\n\nThe length is denoted $L$ and does not appear in the diffusivity."
  },
  {
    id: "mth302_ch8_030",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "How does each Fourier mode of the heat equation behave as $t$ increases?",
    options: [
      "It decays exponentially",
      "It oscillates with constant amplitude for all later times",
      "It grows exponentially without any bound",
      "It remains exactly constant in time"
    ],
    correctAnswer: 0,
    explanation: "The factor $e^{-\\kappa(n\\pi/L)^2t}$ has a negative exponent, so every mode decays, and higher modes decay faster.\n\nUndamped oscillation describes the wave equation instead.\n\nGrowth would require a positive exponent.\n\nA constant mode would require a vanishing eigenvalue."
  },
  {
    id: "mth302_ch8_031",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Which modes of the heat equation decay fastest?",
    options: [
      "Those with the largest $n$",
      "Those with the smallest $n$",
      "All modes decay at exactly the same rate",
      "Those with $n$ even, regardless of their size"
    ],
    correctAnswer: 0,
    explanation: "The decay rate is $\\kappa(n\\pi/L)^2$, which grows with $n^2$, so high modes are damped most rapidly.\n\nSmall $n$ gives the slowest decay, not the fastest.\n\nThe rate depends on $n$, so the modes cannot all decay equally.\n\nParity of $n$ plays no part in the decay rate."
  },
  {
    id: "mth302_ch8_032",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the wave equation $u_{tt} = c^2u_{xx}$, what does $c$ represent?",
    options: [
      "The wave speed",
      "The thermal diffusivity of the medium carrying the wave",
      "The amplitude of the initial displacement profile",
      "The length of the spatial domain being considered"
    ],
    correctAnswer: 0,
    explanation: "The constant $c$ is the speed at which disturbances travel, which is why the domain of dependence extends a distance $ct$ either side of $x$.\n\nDiffusivity belongs to the parabolic heat equation.\n\nThe amplitude is carried by the initial data $\\phi$.\n\nThe spatial length is a separate quantity denoted $L$."
  },
  {
    id: "mth302_ch8_033",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "What boundary conditions correspond to both ends of a rod being held at zero temperature?",
    options: [
      "$u(0, t) = u(L, t) = 0$",
      "$u_x(0, t) = u_x(L, t) = 0$",
      "$u(x, 0) = 0$",
      "$u_t(0, t) = 0$, constraining the rate of change at one end"
    ],
    correctAnswer: 0,
    explanation: "Prescribing the temperature itself as zero at both ends gives the Dirichlet conditions $u(0, t) = u(L, t) = 0$.\n\nVanishing spatial derivatives describe insulated ends, a Neumann condition.\n\nA condition at $t = 0$ is initial data, not a boundary condition.\n\nConstraining a time derivative at one end is neither of the standard conditions here."
  },
  {
    id: "mth302_ch8_034",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the separated heat solution, which equation does $T(t)$ satisfy?",
    options: [
      "$T' + \\kappa\\lambda T = 0$",
      "$T'' + \\kappa\\lambda T = 0$",
      "$T' - \\kappa\\lambda T = 0$",
      "$T' + \\lambda T = 0$"
    ],
    correctAnswer: 0,
    explanation: "Because the heat equation is first order in time, separation gives $T' = -\\kappa\\lambda T$, that is $T' + \\kappa\\lambda T = 0$.\n\nA second-order equation in time belongs to the wave equation.\n\nReversing the sign would produce growth rather than decay.\n\nOmitting $\\kappa$ loses the material dependence of the decay rate."
  },
  {
    id: "mth302_ch8_035",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "For a single initial mode $u(x,0) = A\\sin\\dfrac{n\\pi x}{L}$, what is the solution?",
    options: [
      "$u = Ae^{-\\kappa(n\\pi/L)^2t}\\sin\\dfrac{n\\pi x}{L}$",
      "$u = Ae^{-\\kappa(n\\pi/L)^2t}\\cos\\dfrac{n\\pi x}{L}$, replacing the sine by a cosine",
      "$u = A\\sin\\dfrac{n\\pi x}{L}$",
      "$u = Ae^{-\\kappa n\\pi t/L}\\sin\\dfrac{n\\pi x}{L}$, with the bracket left unsquared"
    ],
    correctAnswer: 0,
    explanation: "A single mode simply acquires its own decay factor, giving $Ae^{-\\kappa(n\\pi/L)^2t}\\sin(n\\pi x/L)$.\n\nSwitching to a cosine violates the boundary condition at $x = 0$.\n\nOmitting the decay leaves a solution that does not satisfy the equation.\n\nLeaving the bracket unsquared is the standard exponent slip."
  },
  {
    id: "mth302_ch8_036",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In D'Alembert's formula, the term $\\phi(x - ct)$ represents what?",
    options: [
      "A profile travelling to the right",
      "A profile travelling to the left with speed $c$",
      "A stationary profile fixed at the origin",
      "The average of the two travelling profiles"
    ],
    correctAnswer: 0,
    explanation: "The combination $x - ct$ stays constant when $x$ increases with $t$, so the profile moves in the direction of increasing $x$.\n\nThe leftward profile corresponds to the argument $x + ct$.\n\nA stationary profile would have no dependence on $t$.\n\nThe average is formed from both terms together."
  },
  {
    id: "mth302_ch8_037",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "How many initial conditions does the wave equation require?",
    options: [
      "Two",
      "One",
      "Three, one for each of the coefficients in the equation",
      "None"
    ],
    correctAnswer: 0,
    explanation: "Being second order in time, the wave equation needs both the initial displacement $\\phi$ and the initial velocity $\\psi$.\n\nOne condition suffices only for an equation first order in time, such as the heat equation.\n\nThree conditions would over-determine the problem.\n\nBoundary conditions alone cannot fix the time evolution."
  },
  {
    id: "mth302_ch8_038",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "How many initial conditions does the heat equation require?",
    options: [
      "One",
      "Two",
      "None",
      "One for each spatial boundary of the rod"
    ],
    correctAnswer: 0,
    explanation: "Being first order in time, the heat equation needs only the initial temperature profile $u(x, 0)$.\n\nTwo conditions are required by an equation second order in time.\n\nThe diffusivity is a material constant and cannot replace initial data.\n\nConditions at the spatial boundaries are boundary conditions, not initial conditions."
  },
  {
    id: "mth302_ch8_039",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "Verifying D'Alembert's formula at $t = 0$, what does the integral term contribute?",
    options: [
      "Zero, since its limits coincide",
      "The full value $\\psi(x)$ at that instant",
      "Half the initial displacement $\\phi(x)$",
      "A constant independent of $x$"
    ],
    correctAnswer: 0,
    explanation: "At $t = 0$ the limits $x - ct$ and $x + ct$ are both $x$, so the integral vanishes and the formula returns $u(x, 0) = \\phi(x)$.\n\nThe value $\\psi(x)$ is recovered by differentiating the integral term, not by evaluating it.\n\nThe displacement contribution comes from the bracketed terms.\n\nA nonzero constant would spoil the initial condition."
  },
  {
    id: "mth302_ch8_040",
    course: "MTH 302",
    chapter: "Chapter 8",
    text: "In the heat solution, higher modes are damped more strongly because the decay rate grows how with $n$?",
    options: [
      "Quadratically",
      "Linearly",
      "Exponentially, as a power of the mode number",
      "Not at all, since the rate is independent of $n$"
    ],
    correctAnswer: 0,
    explanation: "The rate is $\\kappa(n\\pi/L)^2$, which is proportional to $n^2$, so the growth with $n$ is quadratic.\n\nLinear growth would follow from an unsquared bracket.\n\nThe rate itself is not exponential in $n$; the solution is exponential in $t$.\n\nThe rate plainly depends on $n$ through the square."
  }
];

export default mth302Chapter8;
