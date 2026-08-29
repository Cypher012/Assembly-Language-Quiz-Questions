import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter4Questions: QuestionV2[] = [
  {
    id: "aee302_ch4_001",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "How is a confidence interval defined?",
    options: [
      "A single point estimate of the population mean, with no surrounding range",
      "A range of response values within which we can be reasonably certain the experimental effect being estimated will in fact lie",
      "The exact probability that the null hypothesis is true",
      "The largest and smallest individual measurements recorded in a sample"
    ],
    correctAnswer: 1,
    explanation: "The Confidence Interval for Location Effects section defines a confidence interval as a range of response values within which we can be reasonably certain that the experimental effect being estimated will in fact lie.\n\nA single point estimate with no range describes a point estimate, not a confidence interval, which is specifically a range.\n\nThe exact probability that the null hypothesis is true is not what a confidence interval expresses; it instead expresses a range for an estimated effect.\n\nThe largest and smallest individual measurements describe the sample range, an unrelated descriptive statistic from earlier units."
  },
  {
    id: "aee302_ch4_002",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "What is the general formula given for a confidence interval?",
    options: [
      "C.I. = estimate $\\times$ critical value $\\times$ measure of variability",
      "C.I. = estimate $-$ critical value $\\div$ measure of variability",
      "C.I. = estimate $\\pm$ critical value $\\times$ measure of variability",
      "C.I. = critical value $\\pm$ estimate $\\times$ measure of variability"
    ],
    correctAnswer: 2,
    explanation: "The Confidence Interval for Location Effects section gives the formula as C.I. = estimate $\\pm$ critical value $\\times$ measure of variability.\n\nMultiplying the estimate by the critical value, rather than adding or subtracting, does not match the additive structure the section describes.\n\nSubtracting and dividing rather than adding/subtracting and multiplying misstates both operations in the formula.\n\nSwapping the estimate and critical value's roles changes which term is varied by $\\pm$, which is not how the section states the formula."
  },
  {
    id: "aee302_ch4_003",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A sample has $n=16$ observations with a known population standard deviation of $\\sigma=8$. Using $SE=\\sigma/\\sqrt{n}$, what is the standard error?",
    options: [
      "8.00",
      "2.00",
      "0.50",
      "4.00"
    ],
    correctAnswer: 1,
    explanation: "Using $SE=\\sigma/\\sqrt{n} = 8/\\sqrt{16} = 8/4 = 2.00$.\n\n8.00 simply restates $\\sigma$ itself, without dividing by $\\sqrt{n}$ at all.\n\n0.50 results from mistakenly dividing $\\sigma$ by $n$ directly instead of by $\\sqrt{n}$.\n\n4.00 results from mistakenly dividing $\\sigma$ by 2 instead of by $\\sqrt{n}=4$."
  },
  {
    id: "aee302_ch4_004",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "To which kind of effects does the C.I. = estimate $\\pm$ critical value $\\times$ measure of variability formula apply?",
    options: [
      "Only to effects measured on a nominal, categorical scale",
      "Location effects, such as the mean or difference of means",
      "Only to the range of a data set",
      "Only to effects with exactly two possible outcomes"
    ],
    correctAnswer: 1,
    explanation: "The Confidence Interval for Location Effects section states that this equation is for location effects such as the mean or difference of means.\n\nNominal, categorical scales are not discussed in this section at all; the formula concerns numerical location effects.\n\nThe range is a measure of spread from earlier units, not a location effect this formula is described as applying to.\n\nEffects with exactly two outcomes describe a binary variable, unrelated to what the section calls a location effect."
  },
  {
    id: "aee302_ch4_005",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "For that same sample ($n=16$, $\\sigma=8$, mean $=100$), using a critical z-value of 1.96 and $SE=2.00$, what is the margin of error?",
    options: [
      "2.00",
      "1.96",
      "3.92",
      "0.98"
    ],
    correctAnswer: 2,
    explanation: "The margin of error is $1.96 \\times 2.00 = 3.92$.\n\n2.00 simply restates the standard error itself, without multiplying by the critical z-value.\n\n1.96 simply restates the critical z-value itself, not the computed margin of error.\n\n0.98 results from mistakenly dividing the standard error by the critical value instead of multiplying."
  },
  {
    id: "aee302_ch4_006",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "The confidence interval formula C.I. = estimate ± critical value × measure of variability applies specifically to location effects such as the mean.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Confidence Interval for Location Effects section states directly that this equation is for location effects such as the mean or difference of means, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch4_007",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Why is a confidence interval for a location effect symmetrical about a centre value?",
    options: [
      "Because the sample size is always chosen to be an even number",
      "Because the requisite critical values are based on symmetric distributions, normal or t",
      "Because the measure of variability is always exactly zero",
      "Because the estimate is always equal to the critical value"
    ],
    correctAnswer: 1,
    explanation: "The Confidence Interval for Location Effects section states that the additive, symmetrical nature of these intervals stems from the requisite critical values being based on symmetric distributions, normal or t.\n\nSample size being even is never mentioned as a reason for symmetry in the section.\n\nA measure of variability of exactly zero would collapse the interval to a single point, not explain its symmetry.\n\nThe estimate equaling the critical value is not a relationship the section describes or requires."
  },
  {
    id: "aee302_ch4_008",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using the mean of 100 and the margin of error of 3.92 for that sample, what is the resulting 95% confidence interval?",
    options: [
      "(98.04, 101.96)",
      "(96.08, 103.92)",
      "(100.00, 103.92)",
      "(94.16, 105.84)"
    ],
    correctAnswer: 1,
    explanation: "The interval is estimate minus and plus the margin of error: $100 - 3.92 = 96.08$ and $100 + 3.92 = 103.92$.\n\n(98.04, 101.96) uses a margin of error of only 1.96, forgetting to multiply by the critical value at all.\n\n(100.00, 103.92) only adds the margin of error and fails to subtract it for the lower bound.\n\n(94.16, 105.84) uses a margin roughly twice as large as the correctly computed 3.92."
  },
  {
    id: "aee302_ch4_009",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Under what condition does this unit indicate the t-distribution should be used instead of the normal distribution, for a location-effect confidence interval?",
    options: [
      "When the sample size is larger than 30",
      "When the population standard deviation is unknown",
      "When the measure of variability is exactly 1",
      "When the estimate is negative"
    ],
    correctAnswer: 1,
    explanation: "The Confidence Interval for Location Effects section states, regarding Example 4.1, that if the population standard deviation is unknown, the t-distribution will be used.\n\nA sample size larger than 30 is not the condition the section names for choosing between the two distributions.\n\nThe measure of variability being exactly 1 is not a condition discussed anywhere in the section.\n\nThe estimate being negative is not a condition discussed anywhere in the section."
  },
  {
    id: "aee302_ch4_010",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A machine's rolled sheet thickness is measured 15 times, with the following recorded values (cm): 0.00397, 0.00393, 0.00402, 0.00409, 0.00393, 0.00404, 0.00396, 0.00404, 0.00399, 0.00399, 0.00398, 0.00413, 0.00404, 0.00395, and 0.00397. What is the sample mean thickness?",
    options: [
      "0.003998 cm",
      "0.004010 cm",
      "0.004002 cm",
      "0.003990 cm"
    ],
    correctAnswer: 2,
    explanation: "Summing all 15 values gives 0.06003 cm, and dividing by 15 gives a sample mean of 0.004002 cm.\n\n0.003998 cm results from a small rounding slip in the running total before dividing.\n\n0.004010 cm results from mistakenly including an extra 0.00008 cm in the sum.\n\n0.003990 cm results from mistakenly dropping one of the larger recorded values from the sum."
  },
  {
    id: "aee302_ch4_011",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Which of the following is a confidence level explicitly given in this unit as an example matching P = 1 - $\\alpha$?",
    options: [
      "95% (with $\\alpha = 0.05$)",
      "99% (with $\\alpha = 0.01$)",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Confidence Interval for Location Effects section lists 95% with $\\alpha = 0.05$ as one of the example confidence levels matching P = 1 - $\\alpha$.\n\nThe same section also lists 99% with $\\alpha = 0.01$ as another example confidence level matching P = 1 - $\\alpha$.\n\nSince both listed pairings are genuinely given as examples in the section, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch4_012",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "For a sample of sheet-thickness measurements where the population standard deviation is known from previous measurements, which distribution supplies the critical value for the confidence interval?",
    options: [
      "The F distribution",
      "The normal (z) distribution",
      "The chi-squared distribution",
      "The binomial distribution"
    ],
    correctAnswer: 1,
    explanation: "The section notes that the t-distribution is used only when the population standard deviation is unknown, so since Example 4.1 supplies a known standard deviation from previous measurements, the normal (z) distribution supplies the critical value here.\n\nThe F distribution is used for comparing two variances, an unrelated procedure from Unit 3, not for a single-sample location confidence interval.\n\nThe chi-squared distribution is never mentioned anywhere in this unit.\n\nThe binomial distribution is never mentioned anywhere in this unit."
  },
  {
    id: "aee302_ch4_013",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using the standard error formula $SE = \\sigma/\\sqrt{n}$ for a sample mean with known population standard deviation, what is the standard error for a sample of 15 sheet-thickness measurements, given $\\sigma = 0.0005$ cm, rounded to six decimal places?",
    options: [
      "0.000500",
      "0.000129",
      "0.000033",
      "0.001936"
    ],
    correctAnswer: 1,
    explanation: "Using $SE = \\sigma/\\sqrt{n} = 0.0005/\\sqrt{15} = 0.0005/3.873 \\approx 0.000129$ cm.\n\n0.000500 simply restates $\\sigma$ itself, without dividing by $\\sqrt{n}$ at all.\n\n0.000033 results from mistakenly dividing $\\sigma$ by $n$ directly instead of by $\\sqrt{n}$.\n\n0.001936 results from mistakenly multiplying $\\sigma$ by $\\sqrt{15}$ instead of dividing by it."
  },
  {
    id: "aee302_ch4_014",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using a critical z-value of 1.96 for the 95% confidence level, and a standard error of approximately 0.000129 cm, what is the margin of error (critical value $\\times$ measure of variability), rounded to six decimal places?",
    options: [
      "0.000129",
      "0.000065",
      "0.000253",
      "0.000500"
    ],
    correctAnswer: 2,
    explanation: "The margin of error is $1.96 \\times 0.000129 \\approx 0.000253$ cm.\n\n0.000129 simply restates the standard error itself, without multiplying by the critical value.\n\n0.000065 results from mistakenly halving the standard error rather than multiplying by 1.96.\n\n0.000500 simply restates the given population standard deviation, not the computed margin of error."
  },
  {
    id: "aee302_ch4_015",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "In the relationship P = 1 - $\\alpha$, what does P represent?",
    options: [
      "The sample size used in the study",
      "The confidence level, or probability, of the confidence interval",
      "The critical value used in the C.I. formula",
      "The measure of variability in the C.I. formula"
    ],
    correctAnswer: 1,
    explanation: "The Confidence Interval for Location Effects section states that the level of a confidence interval has probability P = 1 - $\\alpha$.\n\nThe sample size is a separate quantity used in computing the measure of variability, not what P represents.\n\nThe critical value is a distinct component of the C.I. formula, looked up based on the chosen confidence level, not the confidence level itself.\n\nThe measure of variability is a distinct component of the C.I. formula, unrelated to what P represents."
  },
  {
    id: "aee302_ch4_016",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using a sample mean of 0.004002 cm and a margin of error of 0.000253 cm, what is the lower bound of the 95% confidence interval, rounded to six decimal places?",
    options: [
      "0.004255",
      "0.003749",
      "0.004002",
      "0.003876"
    ],
    correctAnswer: 1,
    explanation: "The lower bound is estimate minus margin of error: $0.004002 - 0.000253 = 0.003749$ cm.\n\n0.004255 is instead the upper bound, formed by adding the margin of error rather than subtracting it.\n\n0.004002 simply restates the sample mean, without subtracting the margin of error at all.\n\n0.003876 results from subtracting only half of the computed margin of error."
  },
  {
    id: "aee302_ch4_017",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "If the population standard deviation is unknown, this unit indicates the normal (z) distribution should be used instead of the t-distribution.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Confidence Interval for Location Effects section states the opposite: if the population standard deviation is unknown, the t-distribution will be used, not the normal distribution, contradicting the stem's claim."
  },
  {
    id: "aee302_ch4_018",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Which two confidence levels are explicitly named in this unit as examples matching P = 1 - $\\alpha$, alongside their $\\alpha$ values?",
    options: [
      "90% ($\\alpha = 0.1$) and 95% ($\\alpha = 0.05$)",
      "80% ($\\alpha = 0.2$) and 90% ($\\alpha = 0.1$)",
      "95% ($\\alpha = 0.05$) and 99% ($\\alpha = 0.01$)",
      "99% ($\\alpha = 0.01$) and 99.9% ($\\alpha = 0.001$)"
    ],
    correctAnswer: 2,
    explanation: "The Confidence Interval for Location Effects section names 95% with $\\alpha = 0.05$ and 99% with $\\alpha = 0.01$ as consistent examples of P = 1 - $\\alpha$.\n\n90% with $\\alpha = 0.1$ is consistent with P = 1 - $\\alpha$ in principle, but this pairing is not one of the two values the section names alongside a correctly matching second example.\n\n80% and 90% are not the confidence levels named in the section at all.\n\n99.9% with $\\alpha = 0.001$ is not a confidence level named anywhere in the section."
  },
  {
    id: "aee302_ch4_019",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using a sample mean of 0.004002 cm and a margin of error of 0.000253 cm, what is the upper bound of the 95% confidence interval, rounded to six decimal places?",
    options: [
      "0.003749",
      "0.004255",
      "0.004128",
      "0.000253"
    ],
    correctAnswer: 1,
    explanation: "The upper bound is estimate plus margin of error: $0.004002 + 0.000253 = 0.004255$ cm.\n\n0.003749 is instead the lower bound, formed by subtracting the margin of error rather than adding it.\n\n0.004128 results from adding only half of the computed margin of error.\n\n0.000253 simply restates the margin of error itself, not the combined upper bound."
  },
  {
    id: "aee302_ch4_020",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Which of the following determines whether the normal distribution or the t-distribution supplies the critical value for a location-effect confidence interval?",
    options: [
      "Whether the sample size is an even number",
      "Whether the population standard deviation is known",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Confidence Interval for Location Effects section states that if the population standard deviation is unknown, the t-distribution is used, implying the known/unknown status of the population standard deviation is what determines the choice.\n\nWhether the sample size is an even number is never mentioned anywhere in the section as a relevant factor.\n\nSince only the population standard deviation's known/unknown status is genuinely the deciding factor named in the section, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch4_021",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Which two distributions does this unit name as sources of the critical value for a location-effect confidence interval?",
    options: [
      "The F distribution and the chi-squared distribution",
      "The binomial distribution and the Poisson distribution",
      "The normal distribution and the t distribution",
      "The uniform distribution and the exponential distribution"
    ],
    correctAnswer: 2,
    explanation: "The Confidence Interval for Location Effects section states that the requisite critical values for location effects are based on symmetric distributions, normal or t.\n\nThe F distribution and chi-squared distribution are not named in this section, though the F distribution appears in Unit 3's variance ratio test.\n\nThe binomial and Poisson distributions are never mentioned anywhere in this unit.\n\nThe uniform and exponential distributions are never mentioned anywhere in this unit."
  },
  {
    id: "aee302_ch4_022",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Given the general formula C.I. = estimate $\\pm$ critical value $\\times$ measure of variability, how is the lower bound of the interval obtained?",
    options: [
      "By adding the estimate and the margin of error (critical value $\\times$ measure of variability)",
      "By subtracting the estimate from the margin of error",
      "By subtracting the margin of error (critical value $\\times$ measure of variability) from the estimate",
      "By dividing the estimate by the margin of error"
    ],
    correctAnswer: 2,
    explanation: "Since the formula reads estimate $\\pm$ critical value $\\times$ measure of variability, the lower bound is obtained by subtracting the margin of error, critical value times measure of variability, from the estimate.\n\nAdding the estimate and margin of error instead gives the upper bound, not the lower bound.\n\nSubtracting the estimate from the margin of error reverses the order and would only match the lower bound's magnitude by coincidence, not by the formula's actual structure.\n\nDividing the estimate by the margin of error does not appear anywhere in the additive C.I. formula."
  },
  {
    id: "aee302_ch4_023",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A machine is intended to roll sheet to a target thickness of 0.004 cm. Since this target falls within the computed 95% confidence interval of approximately 0.003749 cm to 0.004255 cm, what does this suggest about the machine?",
    options: [
      "There is no strong evidence that the machine has been maladjusted",
      "The machine is definitely rolling sheets thicker than intended",
      "The confidence interval calculation must be repeated with a larger sample",
      "The machine is definitely maladjusted and rolling sheets too thin"
    ],
    correctAnswer: 0,
    explanation: "Since the target value of 0.004 cm lies within the computed 95% confidence interval, there is no strong evidence from this sample that the machine's true average thickness differs from the intended 0.004 cm.\n\nConcluding the machine is definitely rolling sheets thicker than intended is not supported, since the target value itself lies comfortably within the interval, not below it.\n\nRepeating the calculation with a larger sample is not a conclusion implied by the interval containing the target value.\n\nConcluding the machine is definitely maladjusted and rolling sheets too thin is not supported, since the target value itself lies within the interval, not above it."
  },
  {
    id: "aee302_ch4_024",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A confidence interval for a location effect is symmetrical about a centre value because its critical values come from symmetric distributions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Confidence Interval for Location Effects section states directly that the additive, symmetrical nature of these intervals stems from the critical values being based on symmetric distributions, normal or t, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch4_025",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A machine is intended to produce rods with an average weight of 6.0 kg. A 95% confidence interval computed from a sample of rod weights is (5.2 kg, 5.6 kg), which does not contain the target value of 6.0 kg. What does this suggest?",
    options: [
      "The confidence interval formula cannot be applied to this kind of data",
      "There is evidence the machine's true average rod weight differs from the target of 6.0 kg",
      "The sample size must have been too large",
      "There is no evidence the machine's true average rod weight differs from the target"
    ],
    correctAnswer: 1,
    explanation: "Since the target value of 6.0 kg falls outside the computed 95% confidence interval, this is evidence that the machine's true average rod weight differs from the intended target.\n\nThe confidence interval formula, estimate $\\pm$ critical value $\\times$ measure of variability, applies equally well here as in any other location-effect example; nothing about this data set makes it inapplicable.\n\nA large sample size is not implied by, or a problem for, an interval failing to contain a target value.\n\nConcluding there is no evidence of a difference is the opposite of the correct interpretation; a target value falling outside the interval is exactly what would suggest evidence of a difference."
  },
  {
    id: "aee302_ch4_026",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "For a sample of rod weights where no population standard deviation is known, only the raw sample values, which distribution should be used to find the 95% confidence interval?",
    options: [
      "The normal (z) distribution",
      "The F distribution",
      "The t-distribution",
      "The chi-squared distribution"
    ],
    correctAnswer: 2,
    explanation: "Since the population standard deviation is unknown in Example 4.2, the section indicates that the t-distribution will be used.\n\nThe normal distribution is used only when the population standard deviation is known, as in Example 4.1, not here.\n\nThe F distribution is used for comparing two variances in Unit 3, not for a single-sample location confidence interval.\n\nThe chi-squared distribution is never mentioned anywhere in this unit."
  },
  {
    id: "aee302_ch4_027",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A sample of 8 rod weights (kg) is recorded as 4.9, 4.7, 5.1, 5.4, 4.7, 5.2, 4.8, and 5.1. What is the sample mean weight, rounded to two decimal places?",
    options: [
      "4.95",
      "5.03",
      "5.10",
      "4.99"
    ],
    correctAnswer: 3,
    explanation: "Summing all 8 values gives 39.9, and dividing by 8 gives a sample mean of 4.9875, which rounds to 4.99.\n\n4.95 results from a small rounding slip in the running total before dividing.\n\n5.03 results from mistakenly including an extra 0.5 in the sum before dividing.\n\n5.10 simply restates one of the individual recorded weights, not the computed mean of all eight."
  },
  {
    id: "aee302_ch4_028",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "For a t-distribution critical value needed to build a confidence interval from a single sample, how many degrees of freedom are used, given a sample of 8 observations?",
    options: [
      "9",
      "7",
      "8",
      "6"
    ],
    correctAnswer: 1,
    explanation: "As in Unit 3's t-tests, the degrees of freedom for a t-distribution built from a single sample of size n is $n-1$, so for 8 observations, df $= 8-1 = 7$.\n\n9 overstates the correct degrees of freedom by adding 1 rather than subtracting it.\n\n8 mistakenly reports the sample size itself rather than subtracting 1.\n\n6 mistakenly subtracts 2, the adjustment used for two-sample t-tests in Unit 3, rather than 1 for a single sample."
  },
  {
    id: "aee302_ch4_029",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Suppose a sample of 8 rod weights has a sample standard deviation of $s=0.24$. Using $SE = s/\\sqrt{n}$, what is the standard error, rounded to four decimal places?",
    options: [
      "0.2400",
      "0.0300",
      "0.0849",
      "0.6788"
    ],
    correctAnswer: 2,
    explanation: "Using $SE = s/\\sqrt{n} = 0.24/\\sqrt{8} = 0.24/2.828 \\approx 0.0849$.\n\n0.2400 simply restates $s$ itself, without dividing by $\\sqrt{n}$ at all.\n\n0.0300 results from mistakenly dividing $s$ by $n$ directly instead of by $\\sqrt{n}$.\n\n0.6788 results from mistakenly multiplying $s$ by $\\sqrt{8}$ instead of dividing by it."
  },
  {
    id: "aee302_ch4_030",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Regarding the two confidence-interval scenarios worked through in this unit (one for sheet thickness with a known population standard deviation, and one for rod weights using only sample data), which of the following is true?",
    options: [
      "The sheet-thickness scenario's population standard deviation is unknown",
      "The rod-weight scenario's sample size is 15",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The sheet-thickness scenario explicitly provides a known population standard deviation of 0.0005 cm, so describing it as unknown is false.\n\nThe rod-weight scenario's sample size is 8, not 15; a sample of 15 instead belongs to the sheet-thickness scenario.\n\nSince neither statement is accurate, the option affirming either or both is not correct.\n\nBecause both statements are false, the option denying both is the correct outcome."
  },
  {
    id: "aee302_ch4_031",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using a critical t-value of 2.365 (df = 7) and a standard error of approximately 0.0849, what is the margin of error, rounded to three decimal places?",
    options: [
      "0.0849",
      "0.036",
      "2.365",
      "0.201"
    ],
    correctAnswer: 3,
    explanation: "The margin of error is $2.365 \\times 0.0849 \\approx 0.201$.\n\n0.0849 simply restates the standard error itself, without multiplying by the critical t-value.\n\n0.036 results from mistakenly dividing the standard error by the critical value instead of multiplying.\n\n2.365 simply restates the critical t-value itself, not the computed margin of error."
  },
  {
    id: "aee302_ch4_032",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using a sample mean of 4.99 and a margin of error of 0.201, what is the lower bound of the 95% confidence interval, rounded to two decimal places?",
    options: [
      "5.19",
      "4.79",
      "4.99",
      "5.09"
    ],
    correctAnswer: 1,
    explanation: "The lower bound is estimate minus margin of error: $4.99 - 0.201 \\approx 4.79$.\n\n5.19 is instead the upper bound, formed by adding the margin of error rather than subtracting it.\n\n4.99 simply restates the sample mean, without subtracting the margin of error at all.\n\n5.09 results from subtracting a value roughly half the size of the actual margin of error."
  },
  {
    id: "aee302_ch4_033",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using a sample mean of 4.99 and a margin of error of 0.201, what is the upper bound of the 95% confidence interval, rounded to two decimal places?",
    options: [
      "4.79",
      "0.201",
      "5.19",
      "4.99"
    ],
    correctAnswer: 2,
    explanation: "The upper bound is estimate plus margin of error: $4.99 + 0.201 \\approx 5.19$.\n\n4.79 is instead the lower bound, formed by subtracting the margin of error rather than adding it.\n\n0.201 simply restates the margin of error itself, not the combined upper bound.\n\n4.99 simply restates the sample mean, without adding the margin of error at all."
  },
  {
    id: "aee302_ch4_034",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Increasing the confidence level, for example from 95% to 99%, while keeping the sample size fixed, produces a narrower confidence interval.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "Raising the confidence level requires a larger critical value to remain more certain the interval captures the true effect, which widens rather than narrows the interval for a fixed sample size, contradicting the stem's claim."
  },
  {
    id: "aee302_ch4_035",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A separate sample has $n=25$ observations with a known population standard deviation of $\\sigma=3$. Using $SE=\\sigma/\\sqrt{n}$, what is the standard error?",
    options: [
      "0.12",
      "3.00",
      "15.00",
      "0.60"
    ],
    correctAnswer: 3,
    explanation: "Using $SE=\\sigma/\\sqrt{n} = 3/\\sqrt{25} = 3/5 = 0.60$.\n\n0.12 results from mistakenly dividing $\\sigma$ by $n$ directly instead of by $\\sqrt{n}$.\n\n3.00 simply restates $\\sigma$ itself, without dividing by $\\sqrt{n}$ at all.\n\n15.00 results from mistakenly multiplying $\\sigma$ by $\\sqrt{25}$ instead of dividing by it."
  },
  {
    id: "aee302_ch4_036",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "For that same sample ($n=25$, $\\sigma=3$, mean $=50.2$), using a critical z-value of 1.96 and $SE=0.60$, what is the margin of error?",
    options: [
      "0.60",
      "1.18",
      "58.80",
      "0.31"
    ],
    correctAnswer: 1,
    explanation: "The margin of error is $1.96 \\times 0.60 \\approx 1.18$.\n\n0.60 simply restates the standard error itself, without multiplying by the critical z-value.\n\n58.80 results from mistakenly multiplying the mean by the critical value instead of the standard error.\n\n0.31 results from mistakenly dividing the standard error by the critical value instead of multiplying."
  },
  {
    id: "aee302_ch4_037",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using the mean of 50.2 and the margin of error of 1.18 for that sample, what is the lower bound of the 95% confidence interval?",
    options: [
      "51.38",
      "50.20",
      "49.02",
      "48.84"
    ],
    correctAnswer: 2,
    explanation: "The lower bound is estimate minus margin of error: $50.2 - 1.18 = 49.02$.\n\n51.38 is instead the upper bound, formed by adding the margin of error rather than subtracting it.\n\n50.20 simply restates the sample mean, without subtracting the margin of error at all.\n\n48.84 results from subtracting a margin roughly twice as large as the correct one."
  },
  {
    id: "aee302_ch4_038",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using the mean of 50.2 and the margin of error of 1.18 for that sample, what is the upper bound of the 95% confidence interval?",
    options: [
      "49.02",
      "1.18",
      "50.20",
      "51.38"
    ],
    correctAnswer: 3,
    explanation: "The upper bound is estimate plus margin of error: $50.2 + 1.18 = 51.38$.\n\n49.02 is instead the lower bound, formed by subtracting the margin of error rather than adding it.\n\n1.18 simply restates the margin of error itself, not the combined upper bound.\n\n50.20 simply restates the sample mean, without adding the margin of error at all."
  },
  {
    id: "aee302_ch4_039",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "In the sheet-thickness confidence interval calculation, built from 15 measurements with a known population standard deviation, which of the following values is used?",
    options: [
      "A critical z-value of 1.96 for the 95% confidence level",
      "A sample mean of 0.004002 cm",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Since the population standard deviation is known in this scenario, a critical z-value of 1.96 is used for the 95% confidence level.\n\nThe sample mean of the 15 recorded thicknesses is also computed as 0.004002 cm as part of the same calculation.\n\nSince both listed values are genuinely used in this confidence interval calculation, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch4_040",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "A different sample has $n=10$ observations, a sample mean of 20.5, and a sample standard deviation of $s=2.1$. Using $SE=s/\\sqrt{n}$, what is the standard error, rounded to four decimal places?",
    options: [
      "2.1000",
      "0.6641",
      "0.2100",
      "6.6408"
    ],
    correctAnswer: 1,
    explanation: "Using $SE=s/\\sqrt{n} = 2.1/\\sqrt{10} = 2.1/3.162 \\approx 0.6641$.\n\n2.1000 simply restates $s$ itself, without dividing by $\\sqrt{n}$ at all.\n\n0.2100 results from mistakenly dividing $s$ by $n$ directly instead of by $\\sqrt{n}$.\n\n6.6408 results from mistakenly multiplying $s$ by $\\sqrt{10}$ instead of dividing by it."
  },
  {
    id: "aee302_ch4_041",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "For that sample ($n=10$, df $=9$), using a critical t-value of 2.262 for the 95% level and $SE \\approx 0.6641$, what is the margin of error, rounded to three decimal places?",
    options: [
      "0.664",
      "2.262",
      "1.502",
      "0.294"
    ],
    correctAnswer: 2,
    explanation: "The margin of error is $2.262 \\times 0.6641 \\approx 1.502$.\n\n0.664 simply restates the standard error itself, without multiplying by the critical t-value.\n\n2.262 simply restates the critical t-value itself, not the computed margin of error.\n\n0.294 results from mistakenly dividing the standard error by the critical value instead of multiplying."
  },
  {
    id: "aee302_ch4_042",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Using the mean of 20.5 and the margin of error of 1.502 for that sample, what is the 95% confidence interval, rounded to two decimal places?",
    options: [
      "(18.34, 22.66)",
      "(20.50, 22.00)",
      "(19.50, 21.50)",
      "(19.00, 22.00)"
    ],
    correctAnswer: 3,
    explanation: "The interval is estimate minus and plus the margin of error: $20.5 - 1.502 \\approx 19.00$ and $20.5 + 1.502 \\approx 22.00$.\n\n(18.34, 22.66) is instead the wider interval produced using the 99% critical value of 3.250, not the 95% critical value of 2.262.\n\n(20.50, 22.00) only adds the margin of error and fails to subtract it for the lower bound.\n\n(19.50, 21.50) uses a margin of error of only 1.00 rather than the correctly computed 1.502."
  },
  {
    id: "aee302_ch4_043",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "For the same sample ($n=10$, df $=9$, mean $=20.5$, $SE\\approx0.6641$), using a critical t-value of 3.250 for the 99% level, what is the margin of error, rounded to three decimal places?",
    options: [
      "3.250",
      "2.158",
      "0.664",
      "1.502"
    ],
    correctAnswer: 1,
    explanation: "The margin of error is $3.250 \\times 0.6641 \\approx 2.158$.\n\n3.250 simply restates the critical t-value itself, not the computed margin of error.\n\n0.664 simply restates the standard error itself, without multiplying by the critical t-value.\n\n1.502 is instead the margin of error computed for the 95% level using the smaller critical value of 2.262."
  },
  {
    id: "aee302_ch4_044",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Comparing the 95% interval (19.00, 22.00) with margin 1.502 to the 99% interval built with margin 2.158 for the same sample, which interval is wider?",
    options: [
      "They are exactly the same width",
      "Neither interval has a well-defined width",
      "The 95% interval is wider",
      "The 99% interval is wider"
    ],
    correctAnswer: 3,
    explanation: "Since the 99% interval's margin of error, 2.158, is larger than the 95% interval's margin of error, 1.502, the 99% interval spans a wider range around the same sample mean.\n\nThe two intervals are not the same width, since their margins of error differ.\n\nBoth intervals have a clearly defined width, equal to twice their respective margins of error.\n\nThe 95% interval is narrower, not wider, since it uses the smaller critical value of 2.262 rather than 3.250."
  },
  {
    id: "aee302_ch4_045",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Why does raising the confidence level, for example from 95% to 99%, widen a confidence interval built from the same sample?",
    options: [
      "Because the sample mean automatically increases at higher confidence levels",
      "Because a higher confidence level requires a larger critical value to remain more certain the interval captures the true effect",
      "Because the standard error automatically doubles at higher confidence levels",
      "Because the sample size automatically decreases at higher confidence levels"
    ],
    correctAnswer: 1,
    explanation: "A higher confidence level requires a larger critical value from the symmetric distribution, and since the margin of error is critical value times measure of variability, a larger critical value produces a larger margin and a wider interval.\n\nThe sample mean is a fixed property of the collected data and does not change based on the chosen confidence level.\n\nThe standard error depends only on the measure of variability and sample size, not on the chosen confidence level.\n\nThe sample size is likewise a fixed property of the data collected, unaffected by the confidence level chosen afterward."
  },
  {
    id: "aee302_ch4_046",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Holding the sample standard deviation and confidence level fixed, what happens to a confidence interval's width as the sample size $n$ increases?",
    options: [
      "The width stays exactly the same regardless of $n$",
      "The width increases, since $SE=s/\\sqrt{n}$ grows with $n$",
      "The width becomes undefined once $n$ exceeds 30",
      "The width decreases, since $SE=s/\\sqrt{n}$ shrinks as $n$ grows"
    ],
    correctAnswer: 3,
    explanation: "Since $SE=s/\\sqrt{n}$ decreases as $n$ increases, and the margin of error is critical value times this standard error, a larger sample size produces a smaller margin of error and therefore a narrower interval.\n\nThe width does not stay the same; it depends directly on $n$ through the standard error term.\n\n$SE=s/\\sqrt{n}$ shrinks, not grows, as $n$ increases, since $n$ appears in the denominator.\n\nThe formula remains well defined for any sample size greater than 1; there is no special breakdown at $n=30$."
  },
  {
    id: "aee302_ch4_047",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "In the general formula C.I. = estimate $\\pm$ critical value $\\times$ measure of variability, what quantity does the \"measure of variability\" term represent for a sample mean, as used throughout this unit's examples?",
    options: [
      "The range of the sample data",
      "The standard error of the mean, $\\sigma/\\sqrt{n}$ or $s/\\sqrt{n}$",
      "The sample size itself",
      "The critical value from the normal or t table"
    ],
    correctAnswer: 1,
    explanation: "Throughout Examples 4.1 and 4.2, the measure of variability used alongside the critical value is the standard error of the mean, $\\sigma/\\sqrt{n}$ when the population standard deviation is known or $s/\\sqrt{n}$ when only a sample standard deviation is available.\n\nThe range of the sample data is a different descriptive measure from earlier units, not the term multiplied by the critical value here.\n\nThe sample size itself is used within the standard error formula, but it is not itself the \"measure of variability\" term.\n\nThe critical value is the separate multiplying factor in the formula, not the \"measure of variability\" term it multiplies."
  },
  {
    id: "aee302_ch4_048",
    course: "AEE 302",
    chapter: "Chapter 4",
    text: "Which best summarizes the overall procedure this unit teaches for building a confidence interval for a location effect?",
    options: [
      "Compute the estimate and its standard error, choose a critical value for the desired confidence level from the normal or t distribution depending on whether the population standard deviation is known, then add and subtract the resulting margin of error from the estimate",
      "Compute only the sample range and report it directly as the confidence interval, with no further calculation",
      "Compute the estimate alone and report it without any surrounding interval, since the estimate itself is sufficient",
      "Always use the t-distribution's critical value, regardless of whether the population standard deviation is known or unknown"
    ],
    correctAnswer: 0,
    explanation: "Combining the unit's general formula with both worked examples, the procedure is to compute the estimate and its standard error, select a critical value from the normal distribution (if the population standard deviation is known) or the t-distribution (if it is not), and then add and subtract the resulting margin of error from the estimate.\n\nReporting the sample range directly skips the entire critical-value and standard-error calculation the unit describes.\n\nReporting the estimate alone, without any interval, contradicts the very definition of a confidence interval as a range of values.\n\nAlways using the t-distribution ignores Example 4.1, where the population standard deviation is known and the normal distribution is used instead."
  }
];

export default aee302Chapter4Questions;
