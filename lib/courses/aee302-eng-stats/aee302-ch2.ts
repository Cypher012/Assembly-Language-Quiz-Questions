import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter2Questions: QuestionV2[] = [
  {
    id: "aee302_ch2_001",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What is another name for the normal distribution?",
    options: [
      "A probability sample selected according to a chance mechanism",
      "The Gaussian distribution",
      "A stratified random sample",
      "Bell shape"
    ],
    correctAnswer: 1,
    explanation: "The Normal Distribution section states that the normal distribution is also called the Gaussian distribution.\n\nA probability sample selected according to a chance mechanism describes a sampling concept from the Elements of Sampling section, not a name for the normal distribution.\n\nA stratified random sample is a specific sampling technique, unrelated to naming the normal distribution.\n\nBell shape describes the visual appearance of the curve when graphed, but the specific alternate name given in the section is Gaussian distribution."
  },
  {
    id: "aee302_ch2_002",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "To which kind of variable is the normal distribution applied?",
    options: [
      "Variables recorded only as counts of discrete categories",
      "Continuous variables",
      "Variables that can only take the values 0 or 1",
      "Variables representing a fixed population size"
    ],
    correctAnswer: 1,
    explanation: "The Normal Distribution section states that the normal distribution is applied to continuous variables.\n\nVariables recorded only as counts of discrete categories describe discrete data, the kind of data the normal distribution is not built to model.\n\nVariables restricted to exactly 0 or 1 describe a binary outcome, a different kind of variable from the continuous ones the section describes.\n\nA fixed population size is a single number, not a type of variable that a distribution is applied to."
  },
  {
    id: "aee302_ch2_003",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which property describes the shape of the normal distribution in relation to its mean?",
    options: [
      "It always has a point of inflection located exactly at the mean itself",
      "It requires numerical integration techniques to find exact probabilities",
      "It is symmetric about the mean",
      "It has zero variance"
    ],
    correctAnswer: 2,
    explanation: "The Normal Distribution section states that the distribution is symmetric about the mean, appearing as a bell curve when graphed.\n\nThe point of inflection is located at the mean plus the standard deviation, not at the mean itself, so this option misstates that fact.\n\nNumerical integration is required because the density function cannot be integrated analytically, a separate fact from the distribution's shape.\n\nZero variance is never stated in the section and would contradict the idea of a spread-out bell curve."
  },
  {
    id: "aee302_ch2_004",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "How does the frequency of data relate to distance from the mean in a normal distribution?",
    options: [
      "Data occur with a frequency that does not depend on the mean at all",
      "Data near the mean are more frequent in occurrence than data far from the mean",
      "Data far from the mean occur exactly as often as data near the mean",
      "Data far from the mean are more frequent in occurrence than data near the mean"
    ],
    correctAnswer: 1,
    explanation: "The Normal Distribution section states that the normal distribution shows data near the mean being more frequent in occurrence than data far from the mean.\n\nEqual frequency at every distance from the mean would produce a flat distribution, not the bell-shaped curve the section describes.\n\nFrequency being unrelated to the mean would contradict the section's description of a curve centred and peaked at the mean.\n\nData far from the mean being more frequent than data near it would invert the bell shape into something the section never describes."
  },
  {
    id: "aee302_ch2_005",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which expression is given as the probability density function of a normal random variable $x$?",
    options: [
      "$f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$",
      "$f(x) = \\dfrac{N}{n}$",
      "$f(x) = \\mu + \\sigma$",
      "$f(x) = \\dfrac{x-\\mu}{\\sigma}$"
    ],
    correctAnswer: 0,
    explanation: "The Normal Distribution section gives the p.d.f. of $x \\sim N(\\mu, \\sigma^2)$ as $f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$, with $\\mu$ the population mean and $\\sigma$ the population standard deviation.\n\n$\\dfrac{N}{n}$ is instead the formula for the systematic sampling constant $K$, unrelated to the density function.\n\n$\\mu + \\sigma$ is the point of inflection of the curve, not the density function itself.\n\n$\\dfrac{x-\\mu}{\\sigma}$ is the standardizing formula used to convert $x$ into a $z$ score, not the probability density function."
  },
  {
    id: "aee302_ch2_006",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Not all symmetrical distributions are necessarily normal distributions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Normal Distribution section states directly that normal distributions are known for being symmetrical, though not all symmetrical distributions are necessarily normal, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch2_007",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In the density function $f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$, what does $\\sigma$ represent?",
    options: [
      "The number of subpopulations a stratified sample is divided into",
      "The population standard deviation",
      "The population mean",
      "The desired sample size"
    ],
    correctAnswer: 1,
    explanation: "The Normal Distribution section states that in this p.d.f., $\\sigma$ represents the population standard deviation.\n\nThe number of subpopulations in a stratified sample is an unrelated concept from the Elements of Sampling section.\n\nThe population mean is instead represented by $\\mu$ in the same formula, a distinct symbol from $\\sigma$.\n\nThe desired sample size is not represented by any symbol in this density function at all."
  },
  {
    id: "aee302_ch2_008",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In the density function $f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$, what does $\\mu$ represent?",
    options: [
      "The value obtained by dividing the population size by the sample size",
      "The point where the curve changes from concave to convex shape",
      "The population mean",
      "The desired sample size only"
    ],
    correctAnswer: 2,
    explanation: "The Normal Distribution section states that in this p.d.f., $\\mu$ represents the population mean.\n\nDividing the population size by the sample size describes the systematic sampling constant $K$, an unrelated calculation.\n\nThe point where the curve changes concavity describes the point of inflection, located at $\\mu + \\sigma$, not the mean symbol itself.\n\nThe desired sample size only is not what $\\mu$ represents in this formula at all."
  },
  {
    id: "aee302_ch2_009",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Among the distributions used in classical statistics, how is the normal distribution described?",
    options: [
      "As a minor distribution rarely used outside of sampling theory",
      "As the single most important distribution",
      "As a distribution restricted only to discrete variables",
      "As a distribution that cannot be graphed"
    ],
    correctAnswer: 1,
    explanation: "The Normal Distribution section states that among all the distributions used in classical statistics, the single most important is the normal distribution.\n\nCalling it minor or rarely used directly contradicts the section's description of it as the single most important distribution.\n\nThe normal distribution is applied to continuous variables, not restricted to discrete ones.\n\nThe section describes the normal distribution as appearing as a bell curve when graphed, so it clearly can be graphed."
  },
  {
    id: "aee302_ch2_010",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "For a normal distribution, which point is identified as a point of inflection on the curve?",
    options: [
      "The point where $x$ equals $\\mu + \\sigma$",
      "The value found by dividing the population by the sample size",
      "The point where the standardized variable $z$ equals zero",
      "The point located exactly at $\\mu$"
    ],
    correctAnswer: 0,
    explanation: "The Normal Distribution section states that for a normal distribution, $\\mu + \\sigma$ represents the point of inflection for the curve.\n\nDividing the population by the sample size describes the systematic sampling constant $K$, unrelated to the shape of the normal curve.\n\nThe point where $z$ equals zero corresponds to $x = \\mu$, the curve's peak, not its point of inflection.\n\nThe point located exactly at $\\mu$ is the peak of the bell curve, not the point of inflection described in the section."
  },
  {
    id: "aee302_ch2_011",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Why is the standard normal distribution considered the most important of all normal distributions?",
    options: [
      "Because it removes the need to compute any standard deviation at all",
      "Because it requires numerical integration techniques to evaluate its exact probabilities directly",
      "Because its curve always passes exactly through the population mean value",
      "Any normal random variable can be converted into it"
    ],
    correctAnswer: 3,
    explanation: "The Standard Normal Distribution section states that the standard normal distribution is the single most important because any normal random variable can be converted into a standard normal.\n\nNumerical integration is required for evaluating normal probabilities in general, a separate fact rather than the reason the standard normal is singled out as most important.\n\nEvery normal curve, not just the standard one, passes through its own population mean, so this is not a distinguishing reason.\n\nRemoving the need to compute a standard deviation is not stated as the reason in the section; the standard normal still has its own standard deviation value of $1$."
  },
  {
    id: "aee302_ch2_012",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What are the mean and variance of the standard normal distribution?",
    options: [
      "A mean equal to the population mean and a variance equal to the population variance",
      "$\\mu = 0$ and $\\sigma^2 = 1$",
      "$\\sigma^2 = 0$ only",
      "$\\mu = 1$ only"
    ],
    correctAnswer: 1,
    explanation: "The Standard Normal Distribution section states that the standard normal distribution has $\\mu = 0$ and $\\sigma^2 = 1$.\n\nA mean and variance equal to the original population's values describes a general normal distribution before standardization, not the standard normal distribution itself.\n\n$\\sigma^2 = 0$ only is not stated anywhere and would mean the distribution has no spread at all.\n\n$\\mu = 1$ only misstates the value given in the section, which is a mean of $0$, not $1$."
  },
  {
    id: "aee302_ch2_013",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which of the following is given as a reason it may be impossible to observe an entire population?",
    options: [
      "Limitations of time, money, or personnel",
      "The population as defined does not physically exist",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Elements of Sampling section lists limitations of time, money, or personnel as one of the three causes for relying on a sample rather than the entire population.\n\nThe same section also lists the population as defined not physically existing as another of the three stated causes.\n\nSince both listed reasons are genuinely given in the section as causes for sampling, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch2_014",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Why must numerical integration techniques be used to find probabilities for a normal random variable?",
    options: [
      "Because every observation must first be converted into a standardized $z$ score",
      "Because the population size is always assumed to be unknown in advance",
      "Its probability density function cannot be integrated analytically",
      "It has no defined mean"
    ],
    correctAnswer: 2,
    explanation: "The Standard Normal Distribution section states that the equation for the normal distribution cannot be integrated analytically, so numerical integration techniques must be used to find associated probabilities.\n\nConverting an observation to a standardized $z$ score is the method used once probabilities are being calculated, not the reason numerical integration is needed in the first place.\n\nThe population size being unknown is not the stated reason numerical integration is required.\n\nEvery normal distribution has a defined mean, $\\mu$, so this option contradicts the definition given earlier in the section."
  },
  {
    id: "aee302_ch2_015",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "On the standard normal curve, what does $P(Z < Z_o)$ represent?",
    options: [
      "The shaded area found on both sides of the mean combined",
      "The shaded area to the left of $Z_o$",
      "The population standard deviation value",
      "The value of $Z_o$ itself"
    ],
    correctAnswer: 1,
    explanation: "The Standard Normal Distribution section states that for a specific value $Z_o$, the table gives $P(Z < Z_o)$ as the shaded area under the standard normal curve to the left of $Z_o$.\n\nThe shaded area on both sides of the mean combined is not what $P(Z < Z_o)$ represents, since the table treats left-tail and right-tail areas separately.\n\nThe population standard deviation is a fixed property of the distribution, not a probability read from the table.\n\nThe value of $Z_o$ itself is simply the point on the axis, not the shaded probability associated with it."
  },
  {
    id: "aee302_ch2_016",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "On the standard normal curve, what does $P(Z > Z_o)$ represent?",
    options: [
      "The combined shaded area found on both sides of the mean point",
      "The probability that an observation falls exactly at $Z_o$",
      "The shaded area to the right of $Z_o$",
      "The population mean value"
    ],
    correctAnswer: 2,
    explanation: "The Standard Normal Distribution section states that for a specific value $Z_o$, the table also gives $P(Z > Z_o)$ as the shaded area under the standard normal curve to the right of $Z_o$.\n\nThe combined shaded area on both sides of the mean is not what $P(Z > Z_o)$ represents, since the two tail probabilities are given separately.\n\nA continuous distribution assigns zero probability to any single exact point, so the probability of falling exactly at $Z_o$ is not what this notation represents.\n\nThe population mean value is a fixed property of the distribution, not the probability associated with $Z_o$."
  },
  {
    id: "aee302_ch2_017",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "We can find exact probabilities for a normal random variable by integrating its probability density function analytically.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Standard Normal Distribution section states the opposite: the equation for the normal distribution cannot be integrated analytically, so numerical integration techniques must be used instead, contradicting the stem's claim."
  },
  {
    id: "aee302_ch2_018",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which formula converts an observation $x$ into a standardized value?",
    options: [
      "$z = \\dfrac{\\mu}{x}$",
      "$z = \\dfrac{x - \\mu}{\\sigma}$",
      "$z = x \\times \\sigma$",
      "$z = \\sigma - x$"
    ],
    correctAnswer: 1,
    explanation: "The Standard Normal Distribution section gives the standardizing formula as $z = \\dfrac{x - \\mu}{\\sigma}$, with zero mean and unit variance once standardized.\n\n$z = \\dfrac{\\mu}{x}$ reverses and misapplies the terms of the actual formula.\n\n$z = x \\times \\sigma$ is not the operation described in the formula, which instead involves subtraction and division.\n\n$z = \\sigma - x$ both reverses the subtraction and omits the mean entirely."
  },
  {
    id: "aee302_ch2_019",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In the worked example, a variate $x$ is normally distributed with $\\mu = 10$ and $\\sigma = \\tfrac{1}{2}$. The phrase \"not less than 11\" is translated into which inequality?",
    options: [
      "$x = 11$",
      "$x \\geq 11$",
      "$x \\leq 11$",
      "$x < 11$"
    ],
    correctAnswer: 1,
    explanation: "The worked example states that \"not less than 11\" translates to $x \\geq 11$, the region to the right of $11$ that the shaded portion of the graph represents.\n\n$x = 11$ restricts the region to a single point rather than the entire tail described by \"not less than\".\n\n$x \\leq 11$ describes \"not greater than 11\", the opposite tail from the one the phrase actually specifies.\n\n$x < 11$ omits the boundary value of $11$ itself, which \"not less than\" includes."
  },
  {
    id: "aee302_ch2_020",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In the same worked example, how is the phrase \"between $10\\tfrac{1}{2}$ and $11$\" translated into an inequality on $x$?",
    options: [
      "$x \\geq 11$",
      "$10.5 \\leq x \\leq 11$",
      "$x \\leq 9.5$",
      "$9.5 \\leq x \\leq 11$"
    ],
    correctAnswer: 1,
    explanation: "The worked example lists \"between $10\\tfrac{1}{2}$ and $11$\" as one of the four probability statements to translate, which corresponds to the interval $10.5 \\leq x \\leq 11$.\n\n$x \\geq 11$ corresponds instead to the phrase \"not less than 11\", a different part of the worked example.\n\n$x \\leq 9.5$ corresponds to \"not greater than $9\\tfrac{1}{2}$\", a separate part of the example.\n\n$9.5 \\leq x \\leq 11$ corresponds to \"between $9\\tfrac{1}{2}$ and $11$\", a wider interval than the one named in this stem."
  },
  {
    id: "aee302_ch2_021",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In the same worked example, how is the phrase \"not greater than $9\\tfrac{1}{2}$\" translated into an inequality on $x$?",
    options: [
      "$x \\geq 11$",
      "$10.5 \\leq x \\leq 11$",
      "$x \\leq 9.5$",
      "$9.5 \\leq x \\leq 11$"
    ],
    correctAnswer: 2,
    explanation: "The worked example lists \"not greater than $9\\tfrac{1}{2}$\" as one of the four probability statements to translate, which corresponds to $x \\leq 9.5$.\n\n$x \\geq 11$ corresponds instead to \"not less than 11\", the opposite tail from the one named in this stem.\n\n$10.5 \\leq x \\leq 11$ corresponds to \"between $10\\tfrac{1}{2}$ and $11$\", a different part of the example.\n\n$9.5 \\leq x \\leq 11$ corresponds to \"between $9\\tfrac{1}{2}$ and $11$\", an interval rather than the single-tailed statement this stem describes."
  },
  {
    id: "aee302_ch2_022",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In the same worked example, how is the phrase \"between $9\\tfrac{1}{2}$ and $11$\" translated into an inequality on $x$?",
    options: [
      "$9.5 \\leq x \\leq 11$",
      "$x \\geq 11$",
      "$10.5 \\leq x \\leq 11$",
      "$x \\leq 9.5$"
    ],
    correctAnswer: 0,
    explanation: "The worked example lists \"between $9\\tfrac{1}{2}$ and $11$\" as one of the four probability statements to translate, which corresponds to $9.5 \\leq x \\leq 11$.\n\n$x \\geq 11$ corresponds instead to \"not less than 11\", a single-tailed statement rather than this interval.\n\n$10.5 \\leq x \\leq 11$ corresponds to the narrower interval \"between $10\\tfrac{1}{2}$ and $11$\", not this wider one.\n\n$x \\leq 9.5$ corresponds to \"not greater than $9\\tfrac{1}{2}$\", a single-tailed statement rather than this interval."
  },
  {
    id: "aee302_ch2_023",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "A variate $x$ is normally distributed with $\\mu = 10$ and $\\sigma = 0.5$. What is the $z$-score corresponding to $x = 11$?",
    options: [
      "$1$",
      "$-2$",
      "$0.5$",
      "$2$"
    ],
    correctAnswer: 3,
    explanation: "Using $z = \\dfrac{x - \\mu}{\\sigma}$, $z = \\dfrac{11 - 10}{0.5} = \\dfrac{1}{0.5} = 2$, matching the worked example in the Standard Normal Distribution section exactly.\n\n$z = 1$ results from forgetting to divide the difference by the standard deviation.\n\n$z = -2$ results from reversing the subtraction order, computing $\\mu - x$ instead of $x - \\mu$.\n\n$z = 0.5$ results from mistakenly reporting the standard deviation itself rather than completing the division."
  },
  {
    id: "aee302_ch2_024",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Using the same distribution, $\\mu = 10$ and $\\sigma = 0.5$, what is the $z$-score corresponding to $x = 10.5$?",
    options: [
      "$2$",
      "$1$",
      "$-1$",
      "$0.25$"
    ],
    correctAnswer: 1,
    explanation: "Using $z = \\dfrac{x - \\mu}{\\sigma}$, $z = \\dfrac{10.5 - 10}{0.5} = \\dfrac{0.5}{0.5} = 1$.\n\n$z = 2$ is the result for $x = 11$ in the worked example, not for $x = 10.5$.\n\n$z = -1$ results from reversing the subtraction order, computing $\\mu - x$ instead of $x - \\mu$.\n\n$z = 0.25$ results from mistakenly dividing the difference by twice the standard deviation."
  },
  {
    id: "aee302_ch2_025",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Using the same distribution, $\\mu = 10$ and $\\sigma = 0.5$, what is the $z$-score corresponding to $x = 9.5$?",
    options: [
      "$1$",
      "$-2$",
      "$-1$",
      "$0.5$"
    ],
    correctAnswer: 2,
    explanation: "Using $z = \\dfrac{x - \\mu}{\\sigma}$, $z = \\dfrac{9.5 - 10}{0.5} = \\dfrac{-0.5}{0.5} = -1$.\n\n$z = 1$ results from reversing the subtraction order, computing $\\mu - x$ instead of $x - \\mu$.\n\n$z = -2$ results from mistakenly dividing the difference by half the standard deviation instead of the full value.\n\n$z = 0.5$ simply restates the standard deviation value rather than completing the standardizing calculation."
  },
  {
    id: "aee302_ch2_026",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In the worked example, what is the value of $P(Z \\geq 2)$?",
    options: [
      "$0.5000$, or $50.00\\%$",
      "$0.0228$, or $2.28\\%$",
      "$0.9772$, or $97.72\\%$",
      "$1.0228$, or $102.28\\%$"
    ],
    correctAnswer: 1,
    explanation: "The worked example in the Standard Normal Distribution section computes $P(Z \\geq 2) = 0.0228$, reported as $2.28\\%$.\n\n$0.5000$, or $50.00\\%$, would only apply if $x = 11$ sat exactly at the mean, which it does not, since the mean is $10$.\n\n$0.9772$, or $97.72\\%$, is the complementary probability, $P(Z < 2)$, not $P(Z \\geq 2)$ itself.\n\n$1.0228$, or $102.28\\%$, is not a valid probability, since it exceeds $1$."
  },
  {
    id: "aee302_ch2_027",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Given that $P(Z \\geq 2) = 0.0228$ for this distribution, what is $P(Z < 2)$?",
    options: [
      "$0.0228$, or $2.28\\%$",
      "$0.9772$, or $97.72\\%$",
      "$0.5000$, or $50.00\\%$",
      "$1.0228$, or $102.28\\%$"
    ],
    correctAnswer: 1,
    explanation: "Since the total probability under the curve equals $1$, $P(Z < 2) = 1 - P(Z \\geq 2) = 1 - 0.0228 = 0.9772$, or $97.72\\%$.\n\n$0.0228$, or $2.28\\%$, is the given value of $P(Z \\geq 2)$ itself, the complement of the value asked for.\n\n$0.5000$, or $50.00\\%$, would only be correct if $2$ were the exact centre of the distribution, which it is not, since $2$ is two standard deviations above the mean.\n\n$1.0228$, or $102.28\\%$, results from adding the two probabilities instead of subtracting, which cannot be a valid probability."
  },
  {
    id: "aee302_ch2_028",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Rearranging the formula $z = \\dfrac{x - \\mu}{\\sigma}$ to make $x$ the subject, which expression is correct?",
    options: [
      "$x = \\mu + z\\sigma$",
      "$x = z\\mu$",
      "$x = \\mu - z$",
      "$x = \\dfrac{z}{\\mu}$"
    ],
    correctAnswer: 0,
    explanation: "Multiplying both sides of $z = \\dfrac{x - \\mu}{\\sigma}$ by $\\sigma$ and then adding $\\mu$ gives $x = \\mu + z\\sigma$.\n\n$x = z\\mu$ multiplies $z$ by the mean only, omitting the standard deviation from the rearrangement entirely.\n\n$x = \\mu - z$ omits the standard deviation and reverses the required addition.\n\n$x = \\dfrac{z}{\\mu}$ does not correctly undo the original division by $\\sigma$."
  },
  {
    id: "aee302_ch2_029",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "A different variate has $\\mu = 20$ and $\\sigma = 4$. What is the $z$-score corresponding to $x = 28$?",
    options: [
      "$1$",
      "$2$",
      "$-2$",
      "$8$"
    ],
    correctAnswer: 1,
    explanation: "Using $z = \\dfrac{x - \\mu}{\\sigma}$, $z = \\dfrac{28 - 20}{4} = \\dfrac{8}{4} = 2$.\n\n$z = 1$ results from dividing the difference by twice the standard deviation instead of the correct value.\n\n$z = -2$ results from reversing the subtraction order, computing $\\mu - x$ instead of $x - \\mu$.\n\n$z = 8$ results from forgetting to divide by the standard deviation at all, leaving only the raw difference."
  },
  {
    id: "aee302_ch2_030",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In systematic random sampling, the value of $K$ is calculated as the population size divided by the desired sample size.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Elements of Sampling section states that for systematic random sampling, $K = \\dfrac{N}{n}$, where $N$ is the population size and $n$ is the desired sample size, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch2_031",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Another variate has $\\mu = 50$ and $\\sigma = 5$. What value of $x$ corresponds to a $z$-score of $-2$?",
    options: [
      "$60$",
      "$45$",
      "$55$",
      "$40$"
    ],
    correctAnswer: 3,
    explanation: "Using $x = \\mu + z\\sigma$, $x = 50 + (-2)(5) = 50 - 10 = 40$.\n\n$x = 60$ results from adding instead of subtracting, treating the $z$-score as $+2$ rather than $-2$.\n\n$x = 45$ results from applying only a single standard deviation of adjustment instead of two.\n\n$x = 55$ results from adding one standard deviation instead of subtracting two, mixing up both the sign and the magnitude."
  },
  {
    id: "aee302_ch2_032",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Using the original distribution, $\\mu = 10$ and $\\sigma = 0.5$, what value of $x$ corresponds to a $z$-score of $-1$?",
    options: [
      "$10.5$",
      "$11$",
      "$9.5$",
      "$0.5$"
    ],
    correctAnswer: 2,
    explanation: "Using $x = \\mu + z\\sigma$, $x = 10 + (-1)(0.5) = 10 - 0.5 = 9.5$.\n\n$x = 10.5$ results from adding instead of subtracting, treating the $z$-score as $+1$ rather than $-1$.\n\n$x = 11$ is the value corresponding to a $z$-score of $2$ from the original worked example, not a $z$-score of $-1$.\n\n$x = 0.5$ simply restates the standard deviation value rather than completing the calculation for $x$."
  },
  {
    id: "aee302_ch2_033",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In many experimental situations, what is described as one of the primary objectives of an investigation?",
    options: [
      "Selecting a probability sample where every item has a known chance of inclusion",
      "Subdividing the population into homogeneous strata before sampling begins entirely",
      "Calculating the standard normal value for every recorded observation collected",
      "Determining a model that describes the experimental results"
    ],
    correctAnswer: 3,
    explanation: "The Elements of Sampling and Descriptive Statistics section states that one of the primary objectives of an investigation is the determination of a model that describes the experimental results.\n\nSelecting a probability sample is one method used in sampling, not the primary objective stated for the investigation itself.\n\nSubdividing a population into strata describes stratified sampling, a specific sampling technique rather than the investigation's overall objective.\n\nCalculating a standard normal value is a computational step from an earlier section, not the primary objective described here."
  },
  {
    id: "aee302_ch2_034",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "The section gives an expression for the \"true\" value of an observation taken at time $t$. Which expression is given?",
    options: [
      "$\\mu + \\sigma$",
      "$\\alpha + Bt$",
      "$\\dfrac{N}{n}$",
      "$\\dfrac{x - \\mu}{\\sigma}$"
    ],
    correctAnswer: 1,
    explanation: "The Elements of Sampling and Descriptive Statistics section gives $\\alpha + Bt$ as an example expression for the \"true\" value of an observation taken at time $t$, illustrating a form the underlying model might take.\n\n$\\mu + \\sigma$ is instead the point of inflection of the normal curve, an unrelated expression from an earlier section.\n\n$\\dfrac{N}{n}$ is the formula for the systematic sampling constant $K$, not a model of an observation over time.\n\n$\\dfrac{x - \\mu}{\\sigma}$ is the standardizing formula for converting $x$ into a $z$ score, not the time-based model expression."
  },
  {
    id: "aee302_ch2_035",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Even when the form of a model is known, such as knowing the observed variable has a normal distribution, which of the following may still remain unknown?",
    options: [
      "The value of $\\mu$",
      "The value of $\\sigma^2$",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Elements of Sampling and Descriptive Statistics section states that even in the case of a normal population, we may not know the value of $\\mu$.\n\nThe same section states we may also not know the value of $\\sigma^2$, even when the general form of the model is known.\n\nSince both quantities are named in the section as potentially unknown, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch2_036",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Why is it important to distinguish between the relevant population and the sample in a statistical analysis?",
    options: [
      "Because a sample always has a larger standard deviation than its population",
      "Because you must know if the data is a complete population or a sample, and if a sample, which population it came from",
      "Because populations can only be analyzed using systematic sampling techniques",
      "Because samples are never allowed to describe the population they were drawn from"
    ],
    correctAnswer: 1,
    explanation: "The Elements of Sampling section states that it is important to distinguish the relevant population from the sample because you must know whether the data for the analysis is a complete population or a sample, and if a sample is used, you must be aware of the population it was taken from.\n\nA sample having a larger standard deviation than its population is never claimed anywhere in the section.\n\nSystematic sampling is only one of several sampling techniques described, not a requirement for analyzing populations.\n\nThe section states the opposite: when a sample is analyzed, the work should also provide information about the sampled population."
  },
  {
    id: "aee302_ch2_037",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What is a population, as used in the Elements of Sampling section?",
    options: [
      "A part of a population selected according to some specific rule or plan",
      "The totality of all possible values of a particular characteristic",
      "A single random observation only",
      "The mean of a data set"
    ],
    correctAnswer: 1,
    explanation: "The Elements of Sampling section defines a population as the totality of all possible values, measurements, or counts of a particular characteristic for a specific group of objects.\n\nA part of a population selected according to some rule or plan is instead the definition given for a sample, the concept a population is drawn from.\n\nA single random observation only describes one data point, not the entire totality of possible values that defines a population.\n\nThe mean of a data set is a summary measure, not the definition of a population."
  },
  {
    id: "aee302_ch2_038",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What is a sample, as used in the Elements of Sampling section?",
    options: [
      "The totality of all possible values of a particular characteristic for a specific group of objects",
      "A value obtained by dividing the entire population size by the desired sample size",
      "A part of a population selected according to some rule or plan",
      "A single fixed constant value"
    ],
    correctAnswer: 2,
    explanation: "The Elements of Sampling section defines a sample as a part of a population selected according to some rule or plan.\n\nThe totality of all possible values for a specific group of objects is instead the definition given for a population, the larger group a sample is drawn from.\n\nDividing the entire population size by the desired sample size describes the systematic sampling constant $K$, an unrelated calculation.\n\nA single fixed constant value describes neither a sample nor a population as defined in the section."
  },
  {
    id: "aee302_ch2_039",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "If we are dealing with the entire population rather than a sample, what will our statistical work primarily be?",
    options: [
      "Inferential",
      "Descriptive",
      "Standardized",
      "Stratified"
    ],
    correctAnswer: 1,
    explanation: "The Elements of Sampling section states that if we are dealing with the entire population, our statistical work will be primarily descriptive.\n\nInferential work instead becomes necessary once we are dealing with a sample and must draw conclusions about the sampled population.\n\nStandardized describes converting values into $z$ scores, an unrelated concept to whether the work is descriptive or not.\n\nStratified describes a type of sample division, not a description of the nature of the statistical work itself."
  },
  {
    id: "aee302_ch2_040",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "If a sample, rather than the entire population, is being analyzed, what must the statistical work do in addition to describing the sample itself?",
    options: [
      "It must also provide information about the population from which the sample was drawn",
      "It must ignore the sampled population entirely",
      "It must convert every value into a $z$ score",
      "It must remain purely descriptive"
    ],
    correctAnswer: 0,
    explanation: "The Elements of Sampling section states that when dealing with a sample, the statistical work will not only describe the sample but also provide information about the sampled population.\n\nIgnoring the sampled population entirely directly contradicts the stated requirement to provide information about it.\n\nConverting every value into a $z$ score is a standardizing technique from an earlier section, not a requirement described here.\n\nRemaining purely descriptive is instead what the section says applies when dealing with the entire population, not a sample."
  },
  {
    id: "aee302_ch2_041",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "A sample is the totality of all possible values of a particular characteristic for a specific group of objects.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Elements of Sampling section assigns this exact description, the totality of all possible values of a particular characteristic for a specific group of objects, to a population, not a sample. A sample is instead defined as a part of a population selected according to some rule or plan, so the stem's claim is false."
  },
  {
    id: "aee302_ch2_042",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Into which two broad classes are samples grouped when their method of selection is considered?",
    options: [
      "Those selected by judgment and those selected according to some chance mechanism",
      "Those selected from a normal population and those selected from a non-normal population",
      "Those recorded to one decimal place and those recorded as whole numbers",
      "Those drawn before standardization and those drawn after standardization"
    ],
    correctAnswer: 0,
    explanation: "The Elements of Sampling section states that samples may be grouped into two broad classes when their method of selection is considered, namely those selected by judgment and those selected according to some chance mechanism.\n\nWhether the source population is normal or non-normal is a property of the distribution being sampled, not the classification of selection methods described here.\n\nDecimal precision of recorded values is an unrelated detail from the graphical presentation topic, not a classification of sample selection.\n\nStandardization concerns converting values into $z$ scores, entirely unrelated to how samples are selected."
  },
  {
    id: "aee302_ch2_043",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What is a probability sample?",
    options: [
      "A sample obtained by subdividing the population into strata before selection begins",
      "A sample where every item is guaranteed to be selected exactly once",
      "A sample where every item has a known probability of being included",
      "A sample chosen by judgment"
    ],
    correctAnswer: 2,
    explanation: "The Elements of Sampling section defines a probability sample as one obtained through a chance mechanism in which every item in the population has a known probability of being included.\n\nSubdividing the population into strata before selection describes stratified random sampling, a specific type of probability sample rather than the general definition.\n\nEvery item being guaranteed selection exactly once is not what defines a probability sample, since inclusion is governed by a known probability, not a guarantee.\n\nA sample chosen by judgment is explicitly contrasted in the section with samples selected according to a chance mechanism, making it the opposite of a probability sample."
  },
  {
    id: "aee302_ch2_044",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What is a simple random sample?",
    options: [
      "Each value is selected only after the population is divided into separate strata",
      "Each value has an equal and independent chance of being included",
      "Every tenth unit produced is chosen",
      "Every value is chosen by judgment"
    ],
    correctAnswer: 1,
    explanation: "The Elements of Sampling section defines a simple random sample as one where each value in the population has an equal and independent chance of being included in the sample.\n\nDividing the population into strata before selection describes stratified random sampling, a distinct specialized type of random sample.\n\nChoosing every tenth unit produced describes systematic random sampling, which follows a fixed interval rather than equal independent chances.\n\nChoosing every value by judgment is the opposite selection method described in the section, contrasted with chance-based probability samples like the simple random sample."
  },
  {
    id: "aee302_ch2_045",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which of the following is stated as a required condition of the standard normal distribution?",
    options: [
      "A mean of $1$",
      "A variance of $2$",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The Standard Normal Distribution section states that the standard normal distribution has $\\mu = 0$, directly contradicting a stated mean of $1$.\n\nThe same section states that the standard normal distribution has $\\sigma^2 = 1$, directly contradicting a stated variance of $2$.\n\nSince both specific claims are contradicted by the values actually given in the section, the option indicating neither is supported is the correct outcome."
  },
  {
    id: "aee302_ch2_046",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which of the following is one of the three characteristics that distinguish one type of sample from another?",
    options: [
      "The total number of transistors manufactured during an entire day shift",
      "The exact geographic location where the population data was originally collected",
      "The specific value of the population mean and standard deviation",
      "The manner in which the sample was obtained"
    ],
    correctAnswer: 3,
    explanation: "The Elements of Sampling section lists the manner in which the sample was obtained as one of the three characteristics that distinguish one type of sample from another.\n\nThe total number of transistors manufactured during a day shift is part of an illustrative example of a sample, not one of the three named distinguishing characteristics.\n\nThe exact geographic location of data collection is never named among the three characteristics listed in the section.\n\nThe specific value of the population mean and standard deviation belongs to the Normal Distribution section, not to the criteria distinguishing sample types."
  },
  {
    id: "aee302_ch2_047",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Along with the manner in which a sample was obtained and the purpose for which it was drawn, which third factor distinguishes one type of sample from another?",
    options: [
      "The number of variables recorded",
      "The total population size from which every sample must originate",
      "The exact date of collection",
      "The color of the container used to store the data"
    ],
    correctAnswer: 0,
    explanation: "The Elements of Sampling section lists the number of variables recorded as the third of three characteristics that distinguish one type of sample from another, alongside the manner of obtaining it and the purpose it was drawn for.\n\nThe total population size from which a sample originates is not listed among the three distinguishing characteristics named in the section.\n\nThe exact date of collection is never named among the three characteristics listed in the section.\n\nThe color of the container used to store data is not a criterion the section uses to classify sample types at all."
  },
  {
    id: "aee302_ch2_048",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What is a stratified random sample?",
    options: [
      "A unit is chosen at random from the first $K$ units, then every $K$th unit thereafter",
      "Each value has an equal and completely independent chance of being included in the final selected sample",
      "The population is subdivided into strata, then a simple random sample is drawn from each",
      "Every value is chosen by judgment"
    ],
    correctAnswer: 2,
    explanation: "The Elements of Sampling section defines a stratified random sample as one where the population is first subdivided into subpopulations or strata, and then a simple random sample is drawn from each stratum.\n\nChoosing a unit at random from the first $K$ units and then every $K$th unit thereafter describes systematic random sampling, a different specialized type.\n\nEach value having an equal and independent chance of inclusion describes a simple random sample, the type drawn within each stratum rather than the stratification process itself.\n\nChoosing every value by judgment is the non-chance selection method the section contrasts with all forms of random sampling."
  },
  {
    id: "aee302_ch2_049",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which of the following is given in the section as an example of a population rather than a sample?",
    options: [
      "Lengths of life of 50 randomly selected transistors of the specified type",
      "The population of blood types",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The lengths of life of 50 randomly selected transistors is explicitly given in the section as an example of a sample, since it names a specific selection rule applied to a subset of transistors, not a population.\n\nThe population of blood types is explicitly given in the section as an example of a population, the totality of all possible values of that characteristic.\n\nSince only the population of blood types is actually offered as a population example, the option naming it alone is the supported outcome."
  },
  {
    id: "aee302_ch2_050",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "What is a systematic random sample?",
    options: [
      "Each value has an equal and independent chance of being included, without any fixed interval",
      "The population is subdivided into strata before a simple random sample is drawn from each",
      "A unit is chosen at random from the first $K$ units, then every $K$th unit is taken thereafter",
      "Every value in the population is chosen by judgment"
    ],
    correctAnswer: 2,
    explanation: "The Elements of Sampling section defines a systematic random sample by arranging the $N$ units of the population in order, taking a unit at random from the first $K$ units, then taking every $K$th unit thereafter.\n\nEqual and independent chance of inclusion without a fixed interval describes a simple random sample, not the interval-based systematic method.\n\nSubdividing the population into strata before sampling describes stratified random sampling, a different specialized type.\n\nChoosing every value by judgment is the non-chance selection method the section contrasts with all forms of random sampling."
  },
  {
    id: "aee302_ch2_051",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "In systematic random sampling, if the population size $N = 500$ and the desired sample size $n = 25$, what is the value of $K$?",
    options: [
      "$20$",
      "$25$",
      "$500$",
      "$0.05$"
    ],
    correctAnswer: 0,
    explanation: "The Elements of Sampling section defines $K = \\dfrac{N}{n}$ for systematic random sampling, so $K = \\dfrac{500}{25} = 20$.\n\n$25$ is the desired sample size itself, $n$, not the computed value of $K$.\n\n$500$ is the population size itself, $N$, not the computed value of $K$.\n\n$0.05$ results from inverting the formula and computing $\\dfrac{n}{N}$ instead of $\\dfrac{N}{n}$."
  },
  {
    id: "aee302_ch2_052",
    course: "AEE 302",
    chapter: "Chapter 2",
    text: "Which example from the section illustrates a sample chosen using a fixed-interval rule similar to systematic random sampling?",
    options: [
      "Lengths of life of every 100th transistor produced",
      "Lengths of life of 50 randomly selected transistors of the specified type",
      "The population of heights of all the students at a university",
      "The population of weights"
    ],
    correctAnswer: 0,
    explanation: "The section gives lengths of life of every 100th transistor produced as an example of a sample, illustrating the same fixed-interval logic that defines systematic random sampling, where a unit is taken at every $K$th position.\n\nLengths of life of 50 randomly selected transistors is also given as a sample example, but it illustrates chance-based selection rather than a fixed interval rule.\n\nThe population of heights of all students at a university is given in the section as an example of a population, not a sample chosen by any rule.\n\nThe population of weights is likewise given as an example of a population, not a sample selected at a fixed interval."
  }
];

export default aee302Chapter2Questions;
