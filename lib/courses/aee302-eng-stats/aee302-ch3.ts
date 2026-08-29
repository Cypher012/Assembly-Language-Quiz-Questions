import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter3Questions: QuestionV2[] = [
  {
    id: "aee302_ch3_001",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What do inferential statistics and estimation procedures help achieve?",
    options: [
      "Replacing sample data with a full population census entirely",
      "Drawing objective inferences and deriving parameter estimates from data",
      "Eliminating the need for any hypothesis to be tested",
      "Recording every measurement without any further analysis"
    ],
    correctAnswer: 1,
    explanation: "The Hypothesis and Tests of Significance section states that inferential statistics and estimation aspects cover statistical procedures used to draw objective inferences and derive parameter estimates from data.\n\nReplacing sample data with a full population census contradicts the entire premise of inferential statistics, which works from partial sample data.\n\nEliminating the need for a hypothesis contradicts the section, which centers inferential work on constructing and testing hypotheses.\n\nRecording measurements without further analysis describes raw data collection, not the inferential and estimation procedures described in the section."
  },
  {
    id: "aee302_ch3_002",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "How is the statistical significance of an experimental objective assessed?",
    options: [
      "By repeating the experiment until the results match the hypothesis exactly",
      "By comparing only the largest and smallest values recorded in the data",
      "By weighing up the evidence within the data to see whether it agrees or disagrees with a hypothesis",
      "By discarding any data that disagrees with the hypothesis being tested"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that statistical significance is assessed by weighing up the evidence within the data and using it to assess whether the data agree or disagree with a certain hypothesis.\n\nRepeating an experiment until results match the hypothesis would bias the evidence rather than weigh it objectively.\n\nComparing only the largest and smallest values ignores the bulk of the data rather than weighing the full body of evidence.\n\nDiscarding disagreeing data is the opposite of objectively weighing all the evidence within the data."
  },
  {
    id: "aee302_ch3_003",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Hypothesis or significance testing is based on modeling a response as what kind of model?",
    options: [
      "A model containing only explanatory factors, with no error term",
      "A multiplicative model of the response and the sample size alone",
      "An additive model of the explanatory factors and an error term",
      "A model containing only the error term, with no explanatory factors"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that inferential data analysis by hypothesis or significance testing is based on modeling a response as an additive model of the explanatory factors and an error term.\n\nA model with only explanatory factors and no error term omits the error component the section explicitly includes.\n\nA multiplicative model of the response and sample size is not the model described anywhere in the section.\n\nA model with only an error term and no explanatory factors omits the controlled components the section explicitly includes."
  },
  {
    id: "aee302_ch3_004",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does the testing aspect of significance testing assess?",
    options: [
      "Whether the sample size exceeds the population size",
      "How the variation explained by controlled components differs from the variation associated with error",
      "Whether the response variable is measured in whole numbers",
      "How many patients were enrolled in the experimental study"
    ],
    correctAnswer: 1,
    explanation: "The Hypothesis and Tests of Significance section states that the testing aspect assesses how the variation explained by the controlled components differs from that associated with the error.\n\nA sample size exceeding the population size is a data-collection concern, not the comparison the testing aspect makes.\n\nWhether the response is measured in whole numbers is a data-type detail never discussed in the section.\n\nThe number of patients enrolled describes a specific example's sample size, not the general purpose of the testing aspect."
  },
  {
    id: "aee302_ch3_005",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does it suggest if controlled variation exceeds error variation markedly?",
    options: [
      "The sample size was too small to draw any conclusion",
      "The null hypothesis is automatically true regardless of the data",
      "The evidence points to a particular effect of potential practical significance",
      "The experiment must be discarded and repeated from the start"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that if controlled variation exceeds error variation markedly, the evidence appears to point to a particular effect being the reason for the difference, an effect of potential practical significance.\n\nA sample size being too small is not the conclusion the section draws from controlled variation exceeding error variation.\n\nThe null hypothesis being automatically true contradicts the section, which treats markedly exceeding error variation as evidence of a real effect, not of no difference.\n\nDiscarding and repeating the experiment is not the interpretation the section gives for this situation."
  },
  {
    id: "aee302_ch3_006",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "If controlled variation does not exceed error variation, the differences observed are likely to be due to a real, identifiable cause.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Hypothesis and Tests of Significance section states the opposite: if controlled variation does not exceed error, the differences are likely to be random and not due to the cause attributed to it, contradicting the stem's claim."
  },
  {
    id: "aee302_ch3_007",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What is the null hypothesis, denoted Ho, generally used to reflect?",
    options: [
      "The specific direction in which two population means differ",
      "A definite difference between the observations and their target",
      "No difference either between the observations and their target, or between sets of observations",
      "The exact value of the population standard deviation"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that the null hypothesis, denoted Ho, is used to reflect no difference either between the observations and their target or between sets of observations.\n\nA specific direction of difference between means describes a one-sided alternative hypothesis, not the null hypothesis.\n\nA definite difference between observations and their target is the opposite of what the null hypothesis reflects.\n\nThe exact value of the population standard deviation is a parameter estimate, not what the null hypothesis states."
  },
  {
    id: "aee302_ch3_008",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does the alternative hypothesis, denoted H1, describe?",
    options: [
      "The precise sample size required for the study",
      "The complete absence of any difference between observations",
      "The specific significance level chosen for the test",
      "The difference or change being tested for"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis and Tests of Significance section states that the alternative hypothesis, denoted H1, describes the difference or change being tested for.\n\nThe precise sample size required is a design decision, not something the alternative hypothesis describes.\n\nThe complete absence of any difference instead describes the null hypothesis, the opposite of the alternative.\n\nThe specific significance level is a separate criterion for the decision rule, not something the alternative hypothesis itself describes."
  },
  {
    id: "aee302_ch3_009",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "In terms of what are the null and alternative hypotheses often expressed?",
    options: [
      "The specific software package used for the calculation",
      "The population parameter being tested, such as the mean or the variance",
      "The number of patients enrolled in the clinical study",
      "The color coding used in the results table"
    ],
    correctAnswer: 1,
    explanation: "The Hypothesis and Tests of Significance section states that these hypotheses are often expressed in terms of the population parameter being tested, the mean for location and $\\sigma^2$ for variability.\n\nThe specific software package used is never mentioned in the section as part of how hypotheses are expressed.\n\nThe number of patients enrolled is a study design detail, not the parameter a hypothesis is expressed in terms of.\n\nThe color coding of a results table is a presentation detail, unrelated to how hypotheses are formally expressed."
  },
  {
    id: "aee302_ch3_010",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What is the next step in statistical inference after statistical hypotheses have been constructed?",
    options: [
      "Discarding the null hypothesis without any further analysis",
      "Repeating the data collection process indefinitely",
      "Determining a test statistic from the study data",
      "Publishing the results immediately in a scientific paper"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that after the construction of statistical hypotheses, the next step in statistical inference is the determination of a test statistic from the study data.\n\nDiscarding the null hypothesis without analysis skips the evidence-weighing process the section requires before any decision.\n\nRepeating data collection indefinitely is not a step described anywhere in the section.\n\nPublishing results immediately skips the determination and evaluation of a test statistic that the section describes as the next step."
  },
  {
    id: "aee302_ch3_011",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which of the following is one of the three stated assumptions for two-sample hypothesis testing of equality of means?",
    options: [
      "The two samples are independent",
      "The two samples are randomly distributed",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section lists the two samples being independent as one of its three stated assumptions.\n\nThe same section also lists the two samples being randomly distributed as another of its three stated assumptions.\n\nSince both listed statements are genuinely among the assumptions given in the section, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch3_012",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which symbol appearing in the alternative hypothesis indicates a general, bi-directional difference?",
    options: [
      "The equal-to symbol, $=$",
      "The greater-than symbol, $>$, only",
      "The not-equal-to symbol, $\\neq$",
      "The less-than symbol, $<$, only"
    ],
    correctAnswer: 2,
    explanation: "The Nature of test section states that a general directional difference occurs when the not-equal-to symbol, $\\neq$, is present in the alternative hypothesis, also called a two-sided or two-tail test.\n\nThe equal-to symbol describes the null hypothesis's form, not a directional difference in the alternative hypothesis.\n\nThe greater-than symbol alone corresponds to a specific directional difference, a one-sided test, not a general bi-directional one.\n\nThe less-than symbol alone likewise corresponds to a specific directional, one-sided difference, not the general bi-directional case."
  },
  {
    id: "aee302_ch3_013",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What is a test called when the alternative hypothesis contains a less-than or greater-than symbol?",
    options: [
      "A two-sided test, or two-tail test",
      "A separate-variance test",
      "A one-sided test, or one-tail test",
      "A pooled variance test"
    ],
    correctAnswer: 2,
    explanation: "The Nature of test section states that the presence of less-than or greater-than symbols in the alternative hypothesis corresponds to a specific directional difference, called a one-sided test or one-tail test.\n\nA two-sided or two-tail test instead corresponds to the not-equal-to symbol, a general directional difference, not this case.\n\nA separate-variance test is a specific test statistic choice for comparing means, unrelated to naming a test by its tail direction.\n\nA pooled variance test is likewise a specific test statistic choice, not a name describing directional difference."
  },
  {
    id: "aee302_ch3_014",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What is significance level a measure of?",
    options: [
      "Degrees of freedom",
      "Sample size",
      "Error probability",
      "Population variance"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that significance level is a measure of error probability.\n\nDegrees of freedom is a separate quantity used in reference distributions, not what significance level measures.\n\nSample size is a study design choice, not what significance level itself measures.\n\nPopulation variance is a property of the data being studied, not what significance level measures."
  },
  {
    id: "aee302_ch3_015",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which significance levels are named as commonly used, and which is the generally accepted default?",
    options: [
      "5%, 1%, and 0.1%, with 1% the generally accepted default",
      "20%, 10%, and 5%, with 10% the generally accepted default",
      "10%, 5%, and 1%, with 5% the generally accepted default",
      "50%, 25%, and 10%, with 25% the generally accepted default"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that statistical testing is based on the use of low significance levels such as 10%, 5%, and 1%, with 5% the generally accepted default.\n\n5%, 1%, and 0.1% with 1% as default lists a different set of values and a different default than the section states.\n\n20%, 10%, and 5% with 10% as default lists values far higher than the low significance levels the section describes.\n\n50%, 25%, and 10% with 25% as default is far too high to match the low significance levels described in the section."
  },
  {
    id: "aee302_ch3_016",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does it mean to reject the null hypothesis at the 5% level?",
    options: [
      "There is a 95% probability the evidence was due to chance alone",
      "The alternative hypothesis must be rejected instead of the null",
      "The difference tested is significant at the 5% level, with only a 5% probability the evidence was due to chance alone",
      "The difference tested has no statistical meaning whatsoever"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that rejecting the null hypothesis at the 5% level specifies that the difference tested is significant at the 5% level, with only a 5% probability that the evidence for the decision was due to chance alone.\n\nA 95% probability the evidence was due to chance would mean the opposite conclusion, not a rejection at the 5% level.\n\nRejecting the null hypothesis does not require rejecting the alternative hypothesis; the two are not both rejected simultaneously.\n\nSaying the difference has no statistical meaning contradicts the point of rejecting the null hypothesis, which specifically declares the difference significant."
  },
  {
    id: "aee302_ch3_017",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What is the P value defined as?",
    options: [
      "The number of degrees of freedom used in the test",
      "The ratio of the larger sample variance to the smaller",
      "The exact value of the population mean being estimated",
      "The probability that the observed difference could have occurred by chance alone"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis and Tests of Significance section defines the P value as the probability that the observed difference could have occurred by chance alone.\n\nDegrees of freedom is a separate quantity tied to sample sizes, not the definition of the P value.\n\nThe ratio of the larger to smaller sample variance is instead used to choose between the pooled and separate-variance t-tests, unrelated to the P value's definition.\n\nThe exact value of the population mean is a parameter being estimated, not what the P value expresses."
  },
  {
    id: "aee302_ch3_018",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "A large P value indicates strong evidence against the null hypothesis.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Hypothesis and Tests of Significance section states the opposite: large P values indicate strong evidence, meaning evidence in support of accepting the null hypothesis, while small values indicate little or no evidence for accepting it. The stem's claim reverses this relationship."
  },
  {
    id: "aee302_ch3_019",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does a small P value indicate about the evidence for accepting the null hypothesis?",
    options: [
      "That the sample size was chosen incorrectly",
      "Little or no evidence supporting acceptance of the null hypothesis",
      "That the test statistic formula was misapplied",
      "Strong evidence supporting acceptance of the null hypothesis"
    ],
    correctAnswer: 1,
    explanation: "The Hypothesis and Tests of Significance section states that small P values indicate little or no evidence in accepting the null hypothesis.\n\nThe sample size being chosen incorrectly is not a conclusion drawn from a small P value in the section.\n\nA misapplied test statistic formula is not what a small P value indicates; the P value instead reflects the weight of evidence in the data.\n\nStrong evidence supporting acceptance of the null hypothesis is instead what a large P value indicates, the opposite of a small one."
  },
  {
    id: "aee302_ch3_020",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "In a report expressed as P < 0.05, what does this indicate?",
    options: [
      "The significance level has been set at 0.5%",
      "The alternative hypothesis is rejected at the 5% significance level",
      "The null hypothesis is accepted at the 5% significance level",
      "The null hypothesis is rejected at the 5% significance level"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis and Tests of Significance section states that P < 0.05 means the null hypothesis is rejected at the 5% significance level, meaning there is on average a 5% chance a difference this large was due to chance alone.\n\nThe significance level being set at 0.5% misreads the value 0.05 as a percentage ten times too small.\n\nRejecting the alternative hypothesis reverses the roles; it is the null hypothesis that gets rejected when P is small.\n\nAccepting the null hypothesis at the 5% level is the opposite conclusion to what a small P value like this supports."
  },
  {
    id: "aee302_ch3_021",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which two quantities can each be used to construct general rules for deciding whether to accept or reject the null hypothesis?",
    options: [
      "The degrees of freedom and the significance level only",
      "The sample mean and the sample range only",
      "The test statistic and the P value",
      "The sample size and the population size"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis and Tests of Significance section states that since both the test statistic and the P value provide measures of acceptance of the null hypothesis, either can be used to construct general decision rules.\n\nDegrees of freedom and significance level alone are components used within those decision rules, not the two quantities the section names as providing the measures themselves.\n\nThe sample mean and sample range are descriptive summary values, not the two decision-rule quantities named in the section.\n\nThe sample size and population size are study-design quantities, not the two decision-rule quantities the section names."
  },
  {
    id: "aee302_ch3_022",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "10 hospital patients are given a new diet, and each patient's weight gain (kg) is recorded as: 7, -2, -6, 7, 5, 6, -3, 9, 8, 9. How many of the 10 patients experienced a weight loss (a negative recorded gain)?",
    options: [
      "1",
      "4",
      "3",
      "2"
    ],
    correctAnswer: 2,
    explanation: "Three of the recorded values are negative: -2, -6, and -3, so three patients experienced a weight loss rather than a gain.\n\n1 undercounts the negative values in the list; there are more than one.\n\n4 overcounts the negative values in the list; only three of the ten values are negative.\n\n2 also undercounts the negative values in the list; a careful recount finds three, not two."
  },
  {
    id: "aee302_ch3_023",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "10 hospital patients are given a new diet, and each patient's weight gain (kg) is recorded as: 7, -2, -6, 7, 5, 6, -3, 9, 8, 9. What is the sum of the 10 recorded weight gains?",
    options: [
      "44",
      "36",
      "40",
      "50"
    ],
    correctAnswer: 2,
    explanation: "Adding the ten recorded values gives 7 + (-2) + (-6) + 7 + 5 + 6 + (-3) + 9 + 8 + 9 = 40.\n\n44 results from mis-adding one of the negative values as positive.\n\n36 results from dropping one of the positive values from the running total.\n\n50 results from treating one of the negative values as if it were ten units larger than recorded."
  },
  {
    id: "aee302_ch3_024",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which of the following describes something explicitly stated about the null hypothesis in this unit?",
    options: [
      "It reflects no difference between observations and their target, or between sets of observations",
      "It always corresponds to a variance ratio greater than 3",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Hypothesis and Tests of Significance section states that the null hypothesis is used to reflect no difference either between the observations and their target or between sets of observations, matching this option exactly.\n\nA variance ratio greater than 3 is instead the criterion the section uses to choose the separate-variance t-test over the pooled t-test, unrelated to what the null hypothesis itself states.\n\nSince only the first statement is genuinely supported by the section, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch3_025",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "10 hospital patients are given a new diet, and their total recorded weight gain across all 10 patients is 40 kg. What is the mean weight gain per patient?",
    options: [
      "4.4",
      "3.6",
      "4",
      "5"
    ],
    correctAnswer: 2,
    explanation: "The mean is the total gain divided by the number of patients, so 40 divided by 10 gives a mean weight gain of 4.\n\n4.4 results from dividing the total by 9 patients instead of the full 10.\n\n3.6 results from underestimating the total sum used in the division.\n\n5 results from dividing a total of 50, an overstated sum, by 10 patients."
  },
  {
    id: "aee302_ch3_026",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which expression is given as the general test statistic for comparing a sample estimate against a hypothetical value?",
    options: [
      "$t_s = \\dfrac{\\sqrt{\\text{Estimate}} - \\text{Hypothetical value}}{\\text{Variance of the estimate}}$",
      "$t_s = \\dfrac{\\text{Estimate} - \\text{Hypothetical value}}{\\sqrt{\\text{Variance of the estimate}}}$",
      "$t_s = \\sqrt{\\text{Estimate} - \\text{Hypothetical value}}$",
      "$t_s = \\dfrac{\\text{Estimate} \\times \\text{Hypothetical value}}{\\text{Variance of the estimate}}$"
    ],
    correctAnswer: 1,
    explanation: "Example 3.1 gives the general test statistic as $t_s = \\dfrac{\\text{Estimate} - \\text{Hypothetical value}}{\\sqrt{\\text{Variance of the estimate}}}$.\n\nTaking the square root of the estimate itself, rather than of the variance, misplaces the square root from where the formula puts it.\n\nA bare square root of the difference, with no division by any variance term, omits the denominator entirely.\n\nMultiplying the estimate by the hypothetical value, rather than subtracting, misapplies the numerator operation."
  },
  {
    id: "aee302_ch3_027",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which of the following is one of the three stated assumptions for two-sample hypothesis testing of equality of means?",
    options: [
      "The two samples must be drawn from the same population",
      "The two samples must have identical variances",
      "The two samples are also normally distributed",
      "The two samples must be of exactly equal size"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section lists the two samples also being normally distributed as one of its three stated assumptions.\n\nBeing drawn from the same population is not one of the three assumptions listed; the samples are instead assumed independent, random, and normal.\n\nHaving identical variances is not a stated assumption here; it is instead the very question the variance ratio test in a later section investigates.\n\nBeing of exactly equal size is never listed as a requirement among the three stated assumptions."
  },
  {
    id: "aee302_ch3_028",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does the null hypothesis state in a two-sample test of equality of means?",
    options: [
      "$\\mu_1 \\neq \\mu_2$",
      "$\\mu_1 = \\mu_2$",
      "$\\mu_1 > \\mu_2$",
      "$\\mu_1 < \\mu_2$"
    ],
    correctAnswer: 1,
    explanation: "The Hypothesis testing of equality of means section states that the null hypothesis always reflects no difference between the two populations, expressed as $\\mu_1 = \\mu_2$.\n\n$\\mu_1 \\neq \\mu_2$ is instead the two-sided alternative hypothesis, not the null hypothesis.\n\n$\\mu_1 > \\mu_2$ is one of the two one-sided forms the alternative hypothesis can take, not the null hypothesis.\n\n$\\mu_1 < \\mu_2$ is the other one-sided form the alternative hypothesis can take, likewise not the null hypothesis."
  },
  {
    id: "aee302_ch3_029",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does the two-sided alternative hypothesis $\\mu_1 \\neq \\mu_2$ include?",
    options: [
      "Neither $\\mu_1 < \\mu_2$ nor $\\mu_1 > \\mu_2$",
      "Only $\\mu_1 > \\mu_2$",
      "Both $\\mu_1 < \\mu_2$ and $\\mu_1 > \\mu_2$",
      "Only $\\mu_1 < \\mu_2$"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section states that the two-sided alternative hypothesis, difference between the two populations, includes both $\\mu_1 < \\mu_2$ and $\\mu_1 > \\mu_2$.\n\nIncluding neither direction would leave the alternative hypothesis empty, contradicting its purpose of capturing any difference.\n\nIncluding only $\\mu_1 > \\mu_2$ describes a one-sided alternative, not the two-sided form given here.\n\nIncluding only $\\mu_1 < \\mu_2$ likewise describes a one-sided alternative, not the full two-sided form."
  },
  {
    id: "aee302_ch3_030",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "The pooled t-test is generally used when the ratio of the larger to smaller sample variance is less than 3.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Hypothesis testing of equality of means section states that the form of two-sample t-test to use depends on this ratio, and that a ratio less than 3 corresponds to the pooled t-test, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch3_031",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What determines whether the pooled t-test or the separate-variance t-test should be used for comparing two sample means?",
    options: [
      "Whether the significance level is set above or below 5%",
      "The ratio of the larger sample mean to the smaller sample mean",
      "Whether the two sample sizes are exactly equal",
      "The ratio of the larger sample variance to the smaller sample variance"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of means section states that the form of two-sample t-test to use depends on the ratio of the larger sample variance to the smaller sample variance.\n\nThe significance level being above or below 5% affects the decision rule for accepting or rejecting a hypothesis, not the choice between test statistics.\n\nThe ratio of sample means is unrelated; the section bases the choice specifically on the variances, not the means.\n\nWhether sample sizes are exactly equal is not the criterion given; unequal sample sizes are handled by either formula regardless."
  },
  {
    id: "aee302_ch3_032",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "If the ratio of the larger sample variance to the smaller sample variance is less than 3, which test statistic should be used?",
    options: [
      "The F test",
      "The separate-variance t-test",
      "The pooled t-test",
      "The one-sample test statistic"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section states that a ratio less than 3 corresponds to the case referred to as the pooled t-test.\n\nThe F test is instead used in the separate hypothesis testing of equality of variance section, not for choosing between the two means-comparison t-tests.\n\nThe separate-variance t-test is instead used when the ratio exceeds 3, the opposite condition to the one described here.\n\nThe one-sample test statistic from Example 3.1 applies to a single sample compared against a hypothetical value, not to two-sample comparisons."
  },
  {
    id: "aee302_ch3_033",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "If the ratio of the larger sample variance to the smaller sample variance exceeds 3, which test statistic should be used?",
    options: [
      "The one-sample test statistic",
      "The pooled t-test",
      "The F test",
      "The separate-variance t-test"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of means section states that a ratio exceeding 3 corresponds to the case referred to as the separate-variance t-test.\n\nThe one-sample test statistic from Example 3.1 compares a single sample estimate to a hypothetical value, not two independent samples.\n\nThe pooled t-test is instead used when the ratio is less than 3, the opposite condition to the one described here.\n\nThe F test is used in the separate hypothesis testing of equality of variance section, not for choosing between the two means-comparison t-tests."
  },
  {
    id: "aee302_ch3_034",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which of the following correctly interprets the P-value decision rule?",
    options: [
      "If P value is less than significance level, accept Ho",
      "If P value is greater than significance level, accept Ho",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Decision rule section states that if the P value is greater than the significance level, Ho is accepted, and if the P value is less than the significance level, H1 is accepted instead.\n\nThe first statement reverses this: a P value less than the significance level leads to accepting H1, not Ho, so it is not supported.\n\nSince only the second statement matches the rule stated in the section, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly contradicted by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch3_035",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which expression correctly gives the pooled t-test statistic for comparing two sample means?",
    options: [
      "$t_s = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$",
      "$t_s = S_p\\left(\\bar{x}_1 - \\bar{x}_2\\right)\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}$",
      "$t_s = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$",
      "$t_s = \\dfrac{\\bar{x}_1 + \\bar{x}_2}{S_p\\sqrt{n_1+n_2}}$"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section gives the pooled t-test as $t_s = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$, with df $= n_1+n_2-2$.\n\nOmitting $S_p$ from the denominator leaves out the pooled standard deviation entirely, changing the formula's scale.\n\nMultiplying by $S_p$ and the square root term, rather than dividing by them, inverts the structure of the formula.\n\nAdding the two sample means instead of subtracting them, and using $n_1+n_2$ instead of the reciprocal sum, both misstate the formula."
  },
  {
    id: "aee302_ch3_036",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What are the degrees of freedom associated with the pooled t-test?",
    options: [
      "$n_1 + n_2 - 1$",
      "$n_1 - n_2$",
      "$n_1 + n_2 - 2$",
      "$n_1 + n_2$"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section states that the pooled t-test has df $= n_1+n_2-2$ degrees of freedom.\n\n$n_1+n_2-1$ subtracts only one degree of freedom instead of the two required for estimating both sample means.\n\n$n_1-n_2$ is not a degrees-of-freedom formula given anywhere in the section.\n\n$n_1+n_2$ subtracts nothing at all, overstating the degrees of freedom given in the section."
  },
  {
    id: "aee302_ch3_037",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What is $S_p$, the pooled estimate of standard deviation, described as?",
    options: [
      "The difference between the two sample standard deviations",
      "The largest of the two individual sample standard deviations",
      "A weighted average of the sample standard deviations $S_1$ and $S_2$, estimating variability using information from both samples",
      "The simple unweighted average of the two sample means"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section describes $S_p$ as a weighted average of the sample standard deviations $S_1$ and $S_2$, providing an estimate of the variability in the response based on information from both samples.\n\nThe difference between the two sample standard deviations is not the description given; $S_p$ is a weighted average, not a difference.\n\nSimply taking the larger of the two standard deviations would discard information from the other sample entirely, contrary to the description given.\n\nAn unweighted average of the two sample means describes a different, unrelated quantity, not $S_p$."
  },
  {
    id: "aee302_ch3_038",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "The source states that the separate-variance t-test uses the same degrees of freedom formula, n1 + n2 - 2, as the pooled t-test.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Hypothesis testing of equality of means section states df $= n_1 + n_2 - 2$ for the separate-variance t-test, the identical formula given for the pooled t-test, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch3_039",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which expression correctly gives $S_p$, the pooled estimate of standard deviation?",
    options: [
      "$S_p = \\dfrac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}$",
      "$S_p = \\sqrt{\\dfrac{(n_1-1)S_1 + (n_2-1)S_2}{n_1+n_2-2}}$",
      "$S_p = \\sqrt{\\dfrac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}}$",
      "$S_p = \\sqrt{\\dfrac{n_1 S_1^2 + n_2 S_2^2}{n_1+n_2}}$"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of means section defines $S_p = \\sqrt{\\dfrac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}}$.\n\nOmitting the outer square root leaves a pooled variance rather than a pooled standard deviation.\n\nUsing $S_1$ and $S_2$ rather than their squares $S_1^2$ and $S_2^2$ misstates the terms being weighted inside the square root.\n\nUsing $n_1$ and $n_2$ in place of $n_1-1$ and $n_2-1$, and $n_1+n_2$ in place of $n_1+n_2-2$, both misstate the formula's weights."
  },
  {
    id: "aee302_ch3_040",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which expression correctly gives the separate-variance t-test statistic?",
    options: [
      "$t_s = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{\\frac{S_1^2}{n_1}+\\frac{S_2^2}{n_2}}$",
      "$t_s = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$",
      "$t_s = \\sqrt{\\dfrac{S_1^2}{n_1}+\\dfrac{S_2^2}{n_2}}$",
      "$t_s = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{S_1^2}{n_1}+\\frac{S_2^2}{n_2}}}$"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of means section gives the separate-variance t-test as $t_s = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{S_1^2}{n_1}+\\frac{S_2^2}{n_2}}}$.\n\nOmitting the square root from the denominator leaves the raw sum of variance terms rather than the required standard error.\n\n$S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}$ is instead the denominator of the pooled t-test, not the separate-variance version.\n\nA bare square root of the two variance terms, with no numerator difference of means at all, omits the comparison between the two samples entirely."
  },
  {
    id: "aee302_ch3_041",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What degrees of freedom does the source give for the separate-variance t-test?",
    options: [
      "$n_2 - 1$ only",
      "$n_1 - 1$ only",
      "$n_1 + n_2 - 1$",
      "$n_1 + n_2 - 2$, the same value given for the pooled t-test"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of means section states df $= n_1 + n_2 - 2$ for the separate-variance t-test, the same formula given for the pooled t-test.\n\n$n_2-1$ alone accounts for only one sample and omits the other sample's contribution entirely.\n\n$n_1-1$ alone likewise accounts for only one sample and omits the other sample's contribution entirely.\n\n$n_1+n_2-1$ subtracts only one degree of freedom rather than the two the section states."
  },
  {
    id: "aee302_ch3_042",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What reference distribution is used for both the pooled and separate-variance t-tests?",
    options: [
      "The normal distribution with mean 0 and variance 1",
      "The t distribution at $df = n_1+n_2$",
      "The F distribution at $df = n_1+n_2-2$",
      "The t distribution at $df = n_1+n_2-2$"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of means section states that the reference distribution for both t-tests is the t distribution at df $= n_1+n_2-2$.\n\nThe standard normal distribution is the reference distribution used in Unit 2 for z-scores, not the reference distribution named for these two-sample t-tests.\n\nThe F distribution is instead the reference distribution used later for the variance ratio test, not for either t-test here.\n\nUsing $n_1+n_2$ without subtracting 2 overstates the degrees of freedom the section actually specifies."
  },
  {
    id: "aee302_ch3_043",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "The F test statistic for the variance ratio test is computed as the larger sample variance divided by the smaller sample variance.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Hypothesis testing of equality of variance section defines the F test statistic as F equal to the larger sample variance divided by the smaller sample variance, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch3_044",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Under the test-statistic decision rule for the means test, what is concluded if the test statistic is less than the reference distribution value?",
    options: [
      "Continue collecting additional sample data",
      "Reject the alternative hypothesis entirely",
      "Accept Ho",
      "Stop"
    ],
    correctAnswer: 2,
    explanation: "The Decision rule section states that if the test statistic is less than the reference distribution, Ho is accepted.\n\nContinuing to collect additional data is not part of the stated decision rule, which resolves the test using the data already collected.\n\nRejecting the alternative hypothesis is not how the rule is phrased; the rule instead states an outcome in terms of accepting Ho.\n\nSimply stopping is not the stated conclusion; the rule specifies accepting Ho as the outcome in this case."
  },
  {
    id: "aee302_ch3_045",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Under the test-statistic decision rule for the means test, what is concluded if the test statistic exceeds the reference distribution value?",
    options: [
      "Wait",
      "Accept H1",
      "Stop",
      "Reject the null hypothesis and accept the alternative instead, pending further review"
    ],
    correctAnswer: 1,
    explanation: "The Decision rule section states that if the test statistic exceeds the reference distribution, H1 is accepted.\n\nSimply waiting is not part of the stated decision rule, which resolves the test immediately using the computed statistic.\n\nSimply stopping likewise does not match the stated conclusion, which specifies accepting H1 as the outcome.\n\nDescribing the outcome as pending further review adds a qualification the section never states; the rule gives a direct conclusion, not a provisional one."
  },
  {
    id: "aee302_ch3_046",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Under the P value decision rule, what significance level is normally used as the comparison default, and what is concluded if the P value exceeds it?",
    options: [
      "0.5, or 50%; if the P value exceeds it, accept Ho",
      "0.05, or 5%; if the P value exceeds it, accept Ho",
      "0.01, or 1%; if the P value exceeds it, accept Ho",
      "0.05, or 5%; if the P value exceeds it, accept H1"
    ],
    correctAnswer: 1,
    explanation: "The Decision rule section states that if the P value exceeds the significance level, Ho is accepted, with the significance level normally taken as 0.05 or 5%.\n\n0.5 or 50% is far higher than the low significance levels the section describes as typical.\n\n0.01 or 1% is a valid low significance level in general, but not the value the section names as the normal default here.\n\nConcluding H1 is accepted when P exceeds the significance level reverses the rule; exceeding the significance level leads to accepting Ho, not H1."
  },
  {
    id: "aee302_ch3_047",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which of the following is a valid form the alternative hypothesis can take in the variance ratio test?",
    options: [
      "Variability equal in population 1 ($\\sigma_1^2 = \\sigma_2^2$)",
      "Variability lower in population 1 ($\\sigma_1^2 < \\sigma_2^2$)",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The Hypothesis testing of equality of variance section lists variability lower in population 1, $\\sigma_1^2 < \\sigma_2^2$, as one of the three valid forms the alternative hypothesis can take.\n\nVariability equal in population 1, $\\sigma_1^2 = \\sigma_2^2$, is instead the form given for the null hypothesis, not a form of the alternative hypothesis.\n\nSince only the second statement is genuinely one of the three listed alternative hypothesis forms, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch3_048",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Two independent samples have $n_1=6$ with $S_1^2=16$, and $n_2=8$ with $S_2^2=25$. What is the ratio of the larger sample variance to the smaller sample variance?",
    options: [
      "0.64",
      "1.5",
      "1.5625",
      "9"
    ],
    correctAnswer: 2,
    explanation: "The ratio of the larger to smaller sample variance is $25/16 = 1.5625$.\n\n0.64 results from inverting the ratio, computing $16/25$ instead of $25/16$.\n\n1.5 results from a rounding slip that drops the exact fractional remainder of the true ratio.\n\n9 results from subtracting the two variances instead of dividing them."
  },
  {
    id: "aee302_ch3_049",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Based on that ratio of 1.5625, which test statistic should be used to compare the two sample means?",
    options: [
      "The pooled t-test, since the ratio exceeds 3",
      "The F test, since the ratio is less than 3",
      "The separate-variance t-test, since the ratio is less than 3",
      "The pooled t-test, since the ratio is less than 3"
    ],
    correctAnswer: 3,
    explanation: "Since 1.5625 is less than 3, the Hypothesis testing of equality of means section indicates the pooled t-test should be used.\n\nStating the pooled t-test is correct but justifying it with the ratio exceeding 3 misstates the actual value, which is less than 3.\n\nThe F test is used for the separate variance ratio test in section 3.2, not for choosing between the two means-comparison t-tests.\n\nThe separate-variance t-test is instead used when the ratio exceeds 3, the opposite of this case."
  },
  {
    id: "aee302_ch3_050",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "For those same two samples ($n_1=6, S_1^2=16, n_2=8, S_2^2=25$), what is $S_p$, rounded to two decimal places?",
    options: [
      "4.50",
      "4.61",
      "21.25",
      "2.03"
    ],
    correctAnswer: 1,
    explanation: "Using $S_p = \\sqrt{\\dfrac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}}$, the numerator is $(5)(16) + (7)(25) = 80 + 175 = 255$, divided by $6+8-2=12$ gives $21.25$, and $\\sqrt{21.25} \\approx 4.61$.\n\n4.50 results from a rounding slip in the final square root step.\n\n21.25 is the value inside the square root before it is taken, not the final value of $S_p$.\n\n2.03 results from mistakenly taking the square root of $21.25/n_1n_2$ rather than $21.25$ itself."
  },
  {
    id: "aee302_ch3_051",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Two independent samples have $n_1=6$ and $n_2=8$, a pooled standard deviation of $S_p \\approx 4.61$, and sample means $\\bar{x}_1=50$ and $\\bar{x}_2=45$. What is the pooled t-test statistic $t_s$, rounded to two decimal places?",
    options: [
      "1.08",
      "4.61",
      "2.01",
      "0.54"
    ],
    correctAnswer: 2,
    explanation: "Using $t_s = \\dfrac{\\bar{x}_1-\\bar{x}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$, the numerator is $50-45=5$, and $\\sqrt{\\frac{1}{6}+\\frac{1}{8}} = \\sqrt{0.2917} \\approx 0.54$, so $t_s \\approx 5/(4.61 \\times 0.54) \\approx 5/2.49 \\approx 2.01$.\n\n1.08 results from dividing 5 by $4.61$ alone, omitting the square root term entirely.\n\n4.61 simply restates $S_p$ rather than completing the full calculation for $t_s$.\n\n0.54 simply restates the square root term $\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}$ rather than completing the full calculation for $t_s$."
  },
  {
    id: "aee302_ch3_052",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What are the degrees of freedom for the pooled t-test on those two samples ($n_1=6, n_2=8$)?",
    options: [
      "14",
      "12",
      "13",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Using df $= n_1+n_2-2$, the degrees of freedom are $6+8-2=12$.\n\n14 results from omitting the subtraction of 2 entirely.\n\n13 results from subtracting only 1 instead of 2.\n\n6 mistakenly reports only $n_1$ rather than combining both sample sizes."
  },
  {
    id: "aee302_ch3_053",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "A different pair of independent samples has $n_1=5, S_1^2=4$ and $n_2=5, S_2^2=20$, with sample means $\\bar{x}_1=30$ and $\\bar{x}_2=25$. Since the ratio of the larger to smaller sample variance is 5, which test should be applied, and what is the resulting test statistic, rounded to two decimal places?",
    options: [
      "The separate-variance t-test; $t_s \\approx 1.14$",
      "The pooled t-test; $t_s \\approx 2.28$",
      "The separate-variance t-test; $t_s \\approx 2.28$",
      "The separate-variance t-test; $t_s \\approx 5.00$"
    ],
    correctAnswer: 2,
    explanation: "Since the ratio $20/4=5$ exceeds 3, the separate-variance t-test applies: $t_s = \\dfrac{30-25}{\\sqrt{\\frac{4}{5}+\\frac{20}{5}}} = \\dfrac{5}{\\sqrt{4.8}} \\approx \\dfrac{5}{2.19} \\approx 2.28$.\n\nHalving the correct result gives 1.14, which would result from mistakenly doubling the value under the square root.\n\nThe pooled t-test is the wrong choice here, since the ratio of 5 exceeds 3, calling for the separate-variance test instead.\n\nReporting 5.00 mistakenly skips the square root and division step, leaving only the numerator difference of means."
  },
  {
    id: "aee302_ch3_054",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What is the hypothesis test for equality of variance also known as?",
    options: [
      "A one-sample t-test",
      "A pooled t-test",
      "A variance ratio test",
      "A separate-variance t-test"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of variance section states that this test can be achieved through a test of the equality of the sample variances, called a variance ratio test.\n\nA one-sample t-test refers to comparing a single sample estimate to a hypothetical value, as in Example 3.1, not to comparing two variances.\n\nA pooled t-test and a separate-variance t-test are both used to compare two sample means, not to compare two sample variances.\n\nThe separate-variance t-test likewise compares means under unequal variances, unrelated to naming the variance comparison test itself."
  },
  {
    id: "aee302_ch3_055",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What assumptions apply to the variance ratio test?",
    options: [
      "Only that the two population means are already known",
      "No assumptions are required for this test",
      "The same assumptions as the hypothesis test of equality of means",
      "Only that the two sample sizes are equal"
    ],
    correctAnswer: 2,
    explanation: "The Hypothesis testing of equality of variance section states that the assumptions for this test are the same as those for the hypothesis testing of equality of means.\n\nRequiring no assumptions at all contradicts the section, which explicitly carries over the independence, randomness, and normality assumptions.\n\nRequiring the two population means to be known in advance is not stated anywhere as a requirement for this test.\n\nRequiring the two sample sizes to be exactly equal is not listed among the assumptions carried over from the means test."
  },
  {
    id: "aee302_ch3_056",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What does the null hypothesis state in the variance ratio test?",
    options: [
      "$\\sigma_1^2 > \\sigma_2^2$",
      "$\\mu_1 = \\mu_2$",
      "$\\sigma_1^2 \\neq \\sigma_2^2$",
      "$\\sigma_1^2 = \\sigma_2^2$, no difference in variability between the two populations"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of variance section states that the null hypothesis reflects no difference in variability between the two populations, $\\sigma_1^2 = \\sigma_2^2$.\n\n$\\sigma_1^2 > \\sigma_2^2$ is instead one of the three possible forms of the alternative hypothesis, not the null hypothesis.\n\n$\\mu_1 = \\mu_2$ is the null hypothesis for the equality of means test, a different test from the variance ratio test.\n\n$\\sigma_1^2 \\neq \\sigma_2^2$ is the two-sided alternative hypothesis form, not the null hypothesis."
  },
  {
    id: "aee302_ch3_057",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which expression correctly gives the F test statistic for the variance ratio test?",
    options: [
      "$F = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{S_p}$",
      "$F = \\text{larger sample variance} - \\text{smaller sample variance}$",
      "$F = \\dfrac{\\text{smaller sample variance}}{\\text{larger sample variance}}$",
      "$F = \\dfrac{\\text{larger sample variance}}{\\text{smaller sample variance}}$"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of variance section gives the test statistic as $F = \\dfrac{\\text{larger sample variance}}{\\text{smaller sample variance}}$.\n\n$\\bar{x}_1 - \\bar{x}_2$ over $S_p$ is instead part of the pooled t-test statistic used for comparing means, not variances.\n\nSubtracting the two variances instead of dividing them does not match the ratio the section defines.\n\nInverting the ratio, placing the smaller variance on top, reverses the formula the section actually gives."
  },
  {
    id: "aee302_ch3_058",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What distribution is the F test statistic based on, and how are its two degrees of freedom defined?",
    options: [
      "A normal distribution with mean 0 and variance 1",
      "An F distribution with $df_1 = n_1$ and $df_2 = n_2$",
      "A t distribution with $df = n_1+n_2-2$",
      "An F distribution with $df_1 = n_1-1$ and $df_2 = n_2-1$, where $n_1, n_2$ are the sample sizes for the larger and smaller sample variance estimates respectively"
    ],
    correctAnswer: 3,
    explanation: "The Hypothesis testing of equality of variance section states that F is based on an F distribution with $df_1 = n_1-1$ and $df_2 = n_2-1$, where $n_1$ and $n_2$ are the sample sizes for the larger and smaller sample variance estimates respectively.\n\nThe standard normal distribution is the reference used for z-scores in Unit 2, not for this variance ratio test.\n\nUsing $n_1$ and $n_2$ directly, without subtracting 1, overstates the degrees of freedom the section actually specifies.\n\nThe t distribution at df $= n_1+n_2-2$ is instead the reference distribution for the two means-comparison t-tests, not for the F test."
  },
  {
    id: "aee302_ch3_059",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Under the test-statistic decision rule for the variance ratio test, what is concluded if F is less than the critical value?",
    options: [
      "Retest",
      "Accept Ho",
      "Undecided",
      "Reject"
    ],
    correctAnswer: 1,
    explanation: "The Decision rule section for the variance ratio test states that if F is less than the critical value, Ho is accepted.\n\nRetesting is not part of the stated rule, which resolves the decision immediately from the computed F value.\n\nCalling the outcome undecided contradicts the rule, which gives a definite accept-Ho conclusion in this case.\n\nSimply rejecting, without specifying which hypothesis, does not match the stated conclusion of accepting Ho."
  },
  {
    id: "aee302_ch3_060",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Which of the following is a stated component of the decision rule for the variance ratio test?",
    options: [
      "If F exceeds the critical value, accept H1",
      "If the P value is less than the significance level, accept H1",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Decision rule section for the variance ratio test states that if F exceeds the critical value, H1 is accepted, under its test-statistic approach.\n\nThe same section also states, under its P value approach, that if the P value is less than the significance level, H1 is accepted.\n\nSince both listed statements are genuinely stated components of the variance ratio test's decision rule, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch3_061",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Under the test-statistic decision rule for the variance ratio test, what is concluded if F exceeds the critical value?",
    options: [
      "The test remains statistically inconclusive",
      "Reject both hypotheses simultaneously",
      "Accept H1",
      "Accept the null hypothesis, Ho, instead"
    ],
    correctAnswer: 2,
    explanation: "The Decision rule section for the variance ratio test states that if F exceeds the critical value, H1 is accepted.\n\nCalling the test inconclusive contradicts the rule, which gives a definite accept-H1 conclusion when F exceeds the critical value.\n\nRejecting both hypotheses simultaneously is not an outcome the decision rule describes at all.\n\nAccepting Ho instead is the opposite conclusion, which applies when F is less than, not greater than, the critical value."
  },
  {
    id: "aee302_ch3_062",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "A test whose alternative hypothesis contains a less-than or greater-than symbol is called a two-tailed test.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Nature of test section states that a less-than or greater-than symbol in the alternative hypothesis corresponds to a one-sided test, or one-tail test, not a two-tailed test, contradicting the stem's claim."
  },
  {
    id: "aee302_ch3_063",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Two samples have variances of 36 (from a sample of size 10) and 9 (from a sample of size 8). What is the F test statistic?",
    options: [
      "0.25",
      "4",
      "27",
      "3.24"
    ],
    correctAnswer: 1,
    explanation: "Since 36 is the larger sample variance and 9 is the smaller, $F = 36/9 = 4$.\n\n0.25 results from inverting the ratio, computing $9/36$ instead of $36/9$.\n\n27 results from subtracting the two variances instead of dividing them.\n\n3.24 results from an unrelated arithmetic slip in the division."
  },
  {
    id: "aee302_ch3_064",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "For those same two samples ($n_1=10$ for the larger-variance sample, $n_2=8$ for the smaller-variance sample), what are $df_1$ and $df_2$?",
    options: [
      "$df_1=10$ and $df_2=8$",
      "$df_1=7$ and $df_2=9$",
      "$df_1=9$ and $df_2=7$",
      "$df_1=18$ and $df_2=0$"
    ],
    correctAnswer: 2,
    explanation: "Using $df_1=n_1-1$ and $df_2=n_2-1$ for the larger and smaller sample variance estimates respectively, $df_1=10-1=9$ and $df_2=8-1=7$.\n\nUsing $n_1$ and $n_2$ directly, without subtracting 1, overstates both degrees of freedom.\n\nSwapping the two values reverses which degree of freedom belongs to the larger-variance sample and which belongs to the smaller.\n\nSumming and zeroing the values does not match the subtract-one rule the section actually specifies for each sample separately."
  },
  {
    id: "aee302_ch3_065",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Under the P value approach to the variance ratio test, what is concluded if the P value is greater than the significance level?",
    options: [
      "Accept H1",
      "Accept Ho",
      "Increase the significance level and retest",
      "Reject both hypotheses"
    ],
    correctAnswer: 1,
    explanation: "The P value approach section for the variance ratio test states that if the P value is greater than the significance level, Ho is accepted.\n\nConcluding H1 is accepted reverses the rule; a P value greater than the significance level leads to accepting Ho, not H1.\n\nIncreasing the significance level and retesting is not part of the stated decision rule at all.\n\nRejecting both hypotheses simultaneously is not an outcome the decision rule describes."
  },
  {
    id: "aee302_ch3_066",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Under the P value approach to the variance ratio test, what is concluded if the P value is less than the significance level?",
    options: [
      "Accept Ho",
      "Lower the significance level and retest",
      "Accept H1",
      "Reject both hypotheses"
    ],
    correctAnswer: 2,
    explanation: "The P value approach section for the variance ratio test states that if the P value is less than the significance level, H1 is accepted.\n\nConcluding Ho is accepted reverses the rule; a P value less than the significance level leads to accepting H1, not Ho.\n\nLowering the significance level and retesting is not part of the stated decision rule at all.\n\nRejecting both hypotheses simultaneously is not an outcome the decision rule describes."
  },
  {
    id: "aee302_ch3_067",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Comparing the two hypothesis-testing procedures in this unit, what quantity plays the same decision-making role as the test statistic and P value in the equality-of-means test?",
    options: [
      "The sample size, in the equality-of-variance test",
      "The significance level, in the equality-of-variance test",
      "The F statistic and P value, in the equality-of-variance test",
      "The degrees of freedom, in the equality-of-variance test"
    ],
    correctAnswer: 2,
    explanation: "Both the Hypothesis testing of equality of means and Hypothesis testing of equality of variance sections use the same two-pronged decision approach: a test statistic compared against a reference distribution, and a P value compared against the significance level, with the F statistic filling the test-statistic role for the variance test.\n\nSample size is an input used to compute the test statistics and degrees of freedom in both procedures, not itself a decision-making quantity compared against a critical value.\n\nThe significance level is the fixed threshold the P value is compared against, not the quantity that plays the test statistic's role.\n\nDegrees of freedom determine which reference distribution to consult, but they are not themselves compared against a critical value to reach a decision."
  },
  {
    id: "aee302_ch3_068",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Two independent samples give $n_1=8, S_1^2=9$ and $n_2=10, S_2^2=16$. What is the ratio of the larger to smaller sample variance, rounded to two decimal places?",
    options: [
      "0.56",
      "1.78",
      "1.25",
      "7"
    ],
    correctAnswer: 1,
    explanation: "The ratio of the larger to smaller sample variance is $16/9 \\approx 1.78$.\n\n0.56 results from inverting the ratio, computing $9/16$ instead of $16/9$.\n\n1.25 results from an unrelated rounding slip in the division.\n\n7 results from subtracting the two variances instead of dividing them."
  },
  {
    id: "aee302_ch3_069",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Based on that ratio of 1.78, which test statistic should be used to compare the two sample means for these samples?",
    options: [
      "The separate-variance t-test, since the ratio is less than 3",
      "The pooled t-test, since the ratio exceeds 3",
      "The F test, since the ratio is less than 3",
      "The pooled t-test, since the ratio is less than 3"
    ],
    correctAnswer: 3,
    explanation: "Since 1.78 is less than 3, the Hypothesis testing of equality of means section indicates the pooled t-test should be used.\n\nThe separate-variance t-test is used when the ratio exceeds 3, the opposite of this case.\n\nStating the pooled t-test is correct, but justifying it with the ratio exceeding 3 misstates the actual value, which is less than 3.\n\nThe F test is used for the separate variance ratio test in section 3.2, not for choosing between the two means-comparison t-tests."
  },
  {
    id: "aee302_ch3_070",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "For those two samples ($n_1=8, S_1^2=9, n_2=10, S_2^2=16$), what is $S_p$, rounded to two decimal places?",
    options: [
      "12.94",
      "3.50",
      "3.60",
      "1.80"
    ],
    correctAnswer: 2,
    explanation: "Using $S_p = \\sqrt{\\dfrac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1+n_2-2}}$, the numerator is $(7)(9)+(9)(16) = 63+144 = 207$, divided by $8+10-2=16$ gives $12.9375$, and $\\sqrt{12.9375} \\approx 3.60$.\n\n12.94 is the value inside the square root before it is taken, not the final value of $S_p$.\n\n3.50 results from a rounding slip in the final square root step.\n\n1.80 results from mistakenly halving the correctly computed value of $S_p$."
  },
  {
    id: "aee302_ch3_071",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Two independent samples have $n_1=8$ and $n_2=10$, a pooled standard deviation of $S_p \\approx 3.60$, and sample means $\\bar{x}_1=62$ and $\\bar{x}_2=58$. What is the pooled t-test statistic $t_s$, rounded to two decimal places?",
    options: [
      "1.11",
      "2.34",
      "3.60",
      "0.47"
    ],
    correctAnswer: 1,
    explanation: "Using $t_s = \\dfrac{\\bar{x}_1-\\bar{x}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}$, the numerator is $62-58=4$, and $\\sqrt{\\frac{1}{8}+\\frac{1}{10}} = \\sqrt{0.225} \\approx 0.47$, so $t_s \\approx 4/(3.60 \\times 0.47) \\approx 4/1.71 \\approx 2.34$.\n\n1.11 results from dividing 4 by $3.60$ alone, omitting the square root term entirely.\n\n3.60 simply restates $S_p$ rather than completing the full calculation for $t_s$.\n\n0.47 simply restates the square root term $\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}$ rather than completing the full calculation for $t_s$."
  },
  {
    id: "aee302_ch3_072",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What are the degrees of freedom for the pooled t-test on those two samples ($n_1=8, n_2=10$)?",
    options: [
      "18",
      "17",
      "16",
      "8"
    ],
    correctAnswer: 2,
    explanation: "Using df $= n_1+n_2-2$, the degrees of freedom are $8+10-2=16$.\n\n18 results from omitting the subtraction of 2 entirely.\n\n17 results from subtracting only 1 instead of 2.\n\n8 mistakenly reports only $n_1$ rather than combining both sample sizes."
  },
  {
    id: "aee302_ch3_073",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "The critical t-value at $df=16$ for this test is 2.120. Given $t_s \\approx 2.34$ from the pooled t-test above, what is the decision under the test-statistic decision rule?",
    options: [
      "Accept Ho, since $t_s$ exceeds the critical value",
      "Reject Ho and accept H1, since $t_s$ is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho and accept H1, since $t_s$ exceeds the critical value"
    ],
    correctAnswer: 3,
    explanation: "Since the computed $t_s \\approx 2.34$ exceeds the critical value of 2.120, the Decision rule section's test-statistic approach concludes that H1 is accepted, meaning Ho is rejected.\n\nAccepting Ho is the wrong conclusion; the rule accepts H1 once the test statistic exceeds the reference value, not Ho.\n\nDescribing $t_s$ as below the critical value misstates the comparison; 2.34 is greater than 2.120, not less.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once $t_s$ is compared to the critical value."
  },
  {
    id: "aee302_ch3_074",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Two independent samples give $n_1=6, S_1^2=5$ and $n_2=6, S_2^2=45$. What is the ratio of the larger to smaller sample variance?",
    options: [
      "0.11",
      "9",
      "4.5",
      "40"
    ],
    correctAnswer: 1,
    explanation: "The ratio of the larger to smaller sample variance is $45/5 = 9$.\n\n0.11 results from inverting the ratio, computing $5/45$ instead of $45/5$.\n\n4.5 results from mistakenly dividing 45 by 10 instead of by 5.\n\n40 results from subtracting the two variances instead of dividing them."
  },
  {
    id: "aee302_ch3_075",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Based on that ratio of 9, which test statistic should be used to compare the two sample means for these samples?",
    options: [
      "The pooled t-test, since the ratio exceeds 3",
      "The F test, since the ratio exceeds 3",
      "The separate-variance t-test, since the ratio is less than 3",
      "The separate-variance t-test, since the ratio exceeds 3"
    ],
    correctAnswer: 3,
    explanation: "Since 9 exceeds 3, the Hypothesis testing of equality of means section indicates the separate-variance t-test should be used.\n\nThe pooled t-test is used when the ratio is less than 3, the opposite of this case.\n\nThe F test is used for the separate variance ratio test in section 3.2, not for choosing between the two means-comparison t-tests.\n\nStating the separate-variance t-test is correct, but justifying it with the ratio being less than 3 misstates the actual value, which exceeds 3."
  },
  {
    id: "aee302_ch3_076",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "For those two samples ($n_1=6, S_1^2=5, n_2=6, S_2^2=45$), with sample means $\\bar{x}_1=80$ and $\\bar{x}_2=70$, what is the separate-variance t-test statistic $t_s$, rounded to two decimal places?",
    options: [
      "1.73",
      "10.00",
      "3.46",
      "0.29"
    ],
    correctAnswer: 2,
    explanation: "Using $t_s = \\dfrac{\\bar{x}_1-\\bar{x}_2}{\\sqrt{\\frac{S_1^2}{n_1}+\\frac{S_2^2}{n_2}}}$, the numerator is $80-70=10$, and $\\sqrt{\\frac{5}{6}+\\frac{45}{6}} = \\sqrt{8.333} \\approx 2.887$, so $t_s \\approx 10/2.887 \\approx 3.46$.\n\n1.73 results from mistakenly doubling the value under the square root before taking it.\n\n10.00 mistakenly skips the square root and division step, leaving only the numerator difference of means.\n\n0.29 results from inverting the correct ratio, computing the denominator over the numerator instead."
  },
  {
    id: "aee302_ch3_077",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "What are the degrees of freedom for this separate-variance t-test on those two samples ($n_1=6, n_2=6$)?",
    options: [
      "12",
      "10",
      "11",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Using df $= n_1+n_2-2$, the same formula the source gives for the separate-variance test, the degrees of freedom are $6+6-2=10$.\n\n12 results from omitting the subtraction of 2 entirely.\n\n11 results from subtracting only 1 instead of 2.\n\n6 mistakenly reports only one sample size rather than combining both."
  },
  {
    id: "aee302_ch3_078",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "The critical t-value at $df=10$ for this test is 2.228. Given $t_s \\approx 3.46$ from the separate-variance t-test above, what is the decision under the test-statistic decision rule?",
    options: [
      "Reject Ho and accept H1, since $t_s$ exceeds the critical value",
      "Accept Ho, since $t_s$ exceeds the critical value",
      "Reject Ho and accept H1, since $t_s$ is below the critical value",
      "The test is inconclusive at this significance level"
    ],
    correctAnswer: 0,
    explanation: "Since the computed $t_s \\approx 3.46$ exceeds the critical value of 2.228, the Decision rule section's test-statistic approach concludes that H1 is accepted, meaning Ho is rejected.\n\nAccepting Ho is the wrong conclusion; the rule accepts H1 once the test statistic exceeds the reference value, not Ho.\n\nDescribing $t_s$ as below the critical value misstates the comparison; 3.46 is greater than 2.228, not less.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once $t_s$ is compared to the critical value."
  },
  {
    id: "aee302_ch3_079",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "Two samples have variances of 64 (from a sample of size 13) and 16 (from a sample of size 11). What is the F test statistic?",
    options: [
      "0.25",
      "48",
      "4",
      "4.27"
    ],
    correctAnswer: 2,
    explanation: "Since 64 is the larger sample variance and 16 is the smaller, $F = 64/16 = 4$.\n\n0.25 results from inverting the ratio, computing $16/64$ instead of $64/16$.\n\n48 results from subtracting the two variances instead of dividing them.\n\n4.27 results from an unrelated arithmetic slip in the division."
  },
  {
    id: "aee302_ch3_080",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "For those same two samples ($n_1=13$ for the larger-variance sample, $n_2=11$ for the smaller-variance sample), what are $df_1$ and $df_2$?",
    options: [
      "$df_1=13$ and $df_2=11$",
      "$df_1=10$ and $df_2=12$",
      "$df_1=11$ and $df_2=9$",
      "$df_1=12$ and $df_2=10$"
    ],
    correctAnswer: 3,
    explanation: "Using $df_1=n_1-1$ and $df_2=n_2-1$ for the larger and smaller sample variance estimates respectively, $df_1=13-1=12$ and $df_2=11-1=10$.\n\nUsing $n_1$ and $n_2$ directly, without subtracting 1, overstates both degrees of freedom.\n\nSwapping the two values reverses which degree of freedom belongs to the larger-variance sample and which belongs to the smaller.\n\nSubtracting 1 from the wrong pair of sample sizes shifts both computed values away from the correct ones."
  },
  {
    id: "aee302_ch3_081",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "The critical F-value for this test is 2.75. Given the computed $F=4$, what is the decision under the test-statistic decision rule?",
    options: [
      "The test is inconclusive at this significance level",
      "Accept Ho, since F exceeds the critical value",
      "Reject Ho and accept H1, since F is below the critical value",
      "Reject Ho and accept H1, since F exceeds the critical value"
    ],
    correctAnswer: 3,
    explanation: "Since the computed $F=4$ exceeds the critical value of 2.75, the Decision rule section's test-statistic approach concludes that H1 is accepted, meaning Ho is rejected.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value.\n\nAccepting Ho is the wrong conclusion; the rule accepts H1 once F exceeds the reference value, not Ho.\n\nDescribing F as below the critical value misstates the comparison; 4 is greater than 2.75, not less."
  },
  {
    id: "aee302_ch3_082",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "A hypothesis test reports P = 0.032. Comparing this to the default significance level of 5%, what is the decision under the P value decision rule?",
    options: [
      "Accept Ho, since P exceeds 0.05",
      "The test is inconclusive at this significance level",
      "Reject Ho and accept H1, since P is less than 0.05",
      "Accept H1, since P exceeds 0.05"
    ],
    correctAnswer: 2,
    explanation: "Since 0.032 is less than the default significance level of 0.05, the Decision rule section's P value approach concludes that H1 is accepted, meaning Ho is rejected.\n\nAccepting Ho on the grounds that P exceeds 0.05 misstates the comparison; 0.032 is less than 0.05, not greater.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once P is compared to the significance level.\n\nAccepting H1 is the correct conclusion here, but justifying it with P exceeding 0.05 misstates the comparison; 0.032 is less than 0.05."
  },
  {
    id: "aee302_ch3_083",
    course: "AEE 302",
    chapter: "Chapter 3",
    text: "A hypothesis test reports P = 0.084. Comparing this to the default significance level of 5%, what is the decision under the P value decision rule?",
    options: [
      "Reject Ho and accept H1, since P is less than 0.05",
      "Accept Ho, since P exceeds 0.05",
      "The test is inconclusive at this significance level",
      "Reject Ho and accept H1, since P exceeds 0.05"
    ],
    correctAnswer: 1,
    explanation: "Since 0.084 is greater than the default significance level of 0.05, the Decision rule section's P value approach concludes that Ho is accepted.\n\nAccepting H1 on the grounds that P is less than 0.05 misstates the comparison; 0.084 is greater than 0.05, not less.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once P is compared to the significance level.\n\nAccepting H1 while correctly noting P exceeds 0.05 still reaches the wrong conclusion; exceeding the significance level leads to accepting Ho, not H1."
  }
];

export default aee302Chapter3Questions;
