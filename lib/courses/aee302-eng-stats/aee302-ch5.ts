import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter5Questions: QuestionV2[] = [
  {
    id: "aee302_ch5_001",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "When comparing two methods for determining the protein content of two soya bean varieties using two independent samples, why might a detected difference in results be misleading?",
    options: [
      "Because protein content cannot be measured numerically at all",
      "Because independent samples always produce identical results regardless of method",
      "Because the difference could be due to method differences, variety differences, or a mixture of both",
      "Because only one method can ever be tested at a time"
    ],
    correctAnswer: 2,
    explanation: "The Paired Sample Studies section explains that a detected difference in protein content determination may be due to methods tested, varieties tested, or a mixture of both, so results based on two independent samples may be influenced by variation in the experimental material.\n\nProtein content is treated throughout the section as a numerically measured response, not something unmeasurable.\n\nIndependent samples do not always produce identical results; the entire concern raised in the section is that they might differ for confounded reasons.\n\nTesting only one method at a time is not the issue being described; the concern is comparing two methods, not a limitation on how many can be tested."
  },
  {
    id: "aee302_ch5_002",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "How does the section suggest accounting for variety differences when comparing two methods on two soya bean varieties?",
    options: [
      "By testing only one variety and ignoring the other entirely",
      "By splitting each variety in half and allocating a separate half to each method",
      "By averaging the two varieties together before any testing begins",
      "By repeating the experiment on a completely different crop instead"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states that variety differences can be accounted for by splitting them in half and allocating a separate half of each to each method, enabling detected differences to be more likely attributed to method or treatment differences.\n\nTesting only one variety would discard exactly the information needed to separate variety effects from method effects.\n\nAveraging the two varieties together before testing would erase the very distinction the design is meant to preserve and control for.\n\nSwitching to a completely different crop does not address the variety-versus-method confounding described in the section at all."
  },
  {
    id: "aee302_ch5_003",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What is the procedure of splitting each variety in half and allocating a separate half to each method called?",
    options: [
      "Random sampling",
      "Simple blocking",
      "Stratified sampling",
      "Systematic sampling"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section names this procedure simple blocking.\n\nRandom sampling, stratified sampling, and systematic sampling are all sampling techniques from the Elements of Sampling section in Unit 2, unrelated to this experimental design procedure for controlling extraneous variability.\n\nStratified sampling specifically concerns subdividing a population into strata before drawing a sample, a different concept from allocating halves of experimental material to treatments.\n\nSystematic sampling concerns selecting every Kth unit from an ordered population, likewise unrelated to this design procedure."
  },
  {
    id: "aee302_ch5_004",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What is the purpose of blocking, as described in this unit?",
    options: [
      "To increase the total number of treatments being compared",
      "To eliminate an extraneous form of variability by using prior knowledge of factors that cause variability",
      "To guarantee that every treatment produces an identical result",
      "To remove the need for a null hypothesis in the analysis"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states that the purpose of blocking is to eliminate an extraneous form of variability, achieved by taking advantage of prior knowledge of factors which can cause variability in the data.\n\nIncreasing the number of treatments compared is not the purpose described; blocking concerns controlling variability, not adding treatments.\n\nGuaranteeing identical results across treatments is not a realistic or stated goal; blocking instead aims to make real treatment differences easier to detect.\n\nA null hypothesis is still required for the resulting analysis; blocking does not remove the need for one."
  },
  {
    id: "aee302_ch5_005",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What is this form of study design, involving simple blocking, also referred to as?",
    options: [
      "Factorial design",
      "Completely randomized design",
      "Paired comparison testing",
      "Latin square design"
    ],
    correctAnswer: 2,
    explanation: "The Paired Sample Studies section states that this form of study design is also referred to as paired comparison testing.\n\nFactorial design, completely randomized design, and Latin square design are all experimental design terms not named anywhere in this section.\n\nA completely randomized design specifically avoids blocking altogether, the opposite of the paired approach described here.\n\nA Latin square design is a more elaborate blocking arrangement using two blocking factors, not the term used for this simpler paired design."
  },
  {
    id: "aee302_ch5_006",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Simple blocking works by discarding the affected varieties entirely rather than splitting them between treatments.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states that simple blocking works by splitting each variety in half and allocating a separate half to each method, not by discarding the varieties, contradicting the stem's claim."
  },
  {
    id: "aee302_ch5_007",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "How does a paired comparison design eliminate a source of extraneous variation?",
    options: [
      "By making the pairing chosen as similar as possible with respect to a confounding variable",
      "By deliberately maximizing the differences between paired units",
      "By discarding half of all collected observations before analysis",
      "By always assigning both treatments to the same physical unit at the same time"
    ],
    correctAnswer: 0,
    explanation: "The Paired Sample Studies section states that the design eliminates a source of extraneous variation by making the pairing chosen as similar as possible with respect to a confounding variable.\n\nDeliberately maximizing differences between paired units is the opposite of the goal; pairs should be as similar as possible, not as different as possible.\n\nDiscarding half of all observations before analysis is not part of the design; every paired observation contributes to the difference calculation.\n\nAssigning both treatments to the same unit at the same time is not how paired comparisons are formed; a matched pair of similar but distinct units or occasions is used instead."
  },
  {
    id: "aee302_ch5_008",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "In the illustrative paired-design table showing \"Treatment 1\" and \"Treatment 2\" rows marked with x's across several date pairings, what does each x represent?",
    options: [
      "A missing or unrecorded data point",
      "The name of a treatment being studied",
      "An observation",
      "A confounding variable"
    ],
    correctAnswer: 2,
    explanation: "The Paired Sample Studies section states directly beneath the table that x is an observation.\n\nA missing or unrecorded data point is the opposite of what a filled table cell containing an x represents; each x marks a value that was actually recorded.\n\nThe treatment names are given by the row labels, Treatment 1 and Treatment 2, not by the individual x symbols within the table.\n\nA confounding variable is the extraneous factor the pairing is designed to control for, not the individual recorded values shown in the table."
  },
  {
    id: "aee302_ch5_009",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Under what kind of conditions are observations on two treatments collected in a paired comparison study, and what example does this unit give?",
    options: [
      "Under widely varying conditions, for example testing on unrelated individuals selected at random",
      "Under conditions as near identical as possible, for example using identical twins in a biological or psychological experiment",
      "Under conditions chosen to maximize differences, for example testing at opposite extremes of temperature",
      "Under conditions that are never repeated, for example a one-time historical event"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states that paired comparison studies involve observations on two treatments collected in pairs under conditions as near identical as possible, giving the use of identical twins in biological and psychological experiments as an example.\n\nWidely varying conditions would work against the entire purpose of pairing, which is to keep paired units as similar as possible.\n\nMaximizing differences between conditions is the opposite of what pairing aims to achieve.\n\nA one-time, never-repeated event is not the kind of condition described; paired studies rely on multiple matched pairs or blocks."
  },
  {
    id: "aee302_ch5_010",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What must first be specified in the analysis of a paired comparison study?",
    options: [
      "The total number of treatments available across the entire experiment",
      "The difference, D, between the two treatments for each pair",
      "The exact population size the sample was drawn from",
      "The name of the laboratory where testing occurred"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states that as paired comparison studies are based on measurement of a response from like samples, we require to first specify the difference, D.\n\nThe total number of treatments is fixed at two throughout this design, not a quantity requiring separate specification.\n\nThe exact population size is a concern from Unit 2's sampling material, not something specified as part of this paired-difference analysis.\n\nThe name of the laboratory is an administrative detail never discussed as part of specifying the analysis."
  },
  {
    id: "aee302_ch5_011",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "How is the difference D most often expressed in a paired comparison study, and does the order of subtraction matter?",
    options: [
      "D = treatment 1 $\\times$ treatment 2, and the order of multiplication is important",
      "D = treatment 1 $-$ treatment 2, and the order of determination is not important",
      "D = treatment 1 $+$ treatment 2, and the order of addition is important",
      "D = treatment 1 $\\div$ treatment 2, and the order of division is not important"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states that D is most often expressed as treatment 1 minus treatment 2, and that the order of determination is not important.\n\nMultiplying the two treatments together is not how D is defined; the section specifies subtraction, not multiplication.\n\nAdding the two treatments together does not produce a difference at all, and addition is commutative so an order requirement would not even make sense for it.\n\nDividing one treatment by the other is not how D is defined in the section; subtraction is used instead."
  },
  {
    id: "aee302_ch5_012",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What assumption is made about the differences D in this test procedure?",
    options: [
      "The differences are assumed to always equal exactly zero",
      "The differences are assumed to be approximately normally distributed",
      "The differences are assumed to follow an F distribution",
      "The differences are assumed to be measured without any error"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states the assumption that differences are approximately normally distributed.\n\nAssuming the differences always equal exactly zero would make the entire hypothesis test pointless, since there would be nothing left to test.\n\nAn F distribution assumption belongs to the variance ratio test from Unit 3, not to this paired-differences procedure.\n\nAssuming no measurement error at all is an unrealistic assumption never stated in the section; only the distributional shape of the differences is assumed."
  },
  {
    id: "aee302_ch5_013",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What does the null hypothesis state in a paired comparison test?",
    options: [
      "No difference between the two treatments (mean difference = 0)",
      "A definite difference between the two treatments (mean difference $\\neq$ 0)",
      "Treatment 1 is definitely lower (mean difference < 0)",
      "Treatment 1 is definitely higher (mean difference > 0)"
    ],
    correctAnswer: 0,
    explanation: "The Paired Sample Studies section states that the null hypothesis corresponds to no difference between the treatments, that is, a mean difference of 0.\n\nA definite difference, mean difference not equal to 0, describes the two-sided alternative hypothesis, not the null hypothesis.\n\nTreatment 1 being definitely lower describes one of the one-sided alternative hypothesis forms, not the null hypothesis.\n\nTreatment 1 being definitely higher describes the other one-sided alternative hypothesis form, likewise not the null hypothesis."
  },
  {
    id: "aee302_ch5_014",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Which of the three alternative hypothesis forms in a paired comparison test corresponds to a general, two-sided difference between treatments?",
    options: [
      "Mean difference < 0 (treatment 1 lower)",
      "Mean difference = 0 (no difference)",
      "Mean difference > 0 (treatment 1 higher)",
      "Mean difference $\\neq$ 0 (a difference between treatments)"
    ],
    correctAnswer: 3,
    explanation: "The Paired Sample Studies section lists mean difference not equal to 0, a general difference between treatments, as one of the three forms the alternative hypothesis can take.\n\nMean difference less than 0 is instead the one-sided form corresponding to treatment 1 being lower, not the general two-sided case.\n\nMean difference equal to 0 is the null hypothesis, not a form of the alternative hypothesis.\n\nMean difference greater than 0 is the other one-sided form, corresponding to treatment 1 being higher, not the general two-sided case."
  },
  {
    id: "aee302_ch5_015",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Which of the three alternative hypothesis forms in a paired comparison test corresponds to treatment 1 being lower than treatment 2?",
    options: [
      "Mean difference $\\neq$ 0",
      "Mean difference > 0",
      "Mean difference = 0",
      "Mean difference < 0"
    ],
    correctAnswer: 3,
    explanation: "The Paired Sample Studies section lists mean difference less than 0, treatment 1 lower, as one of the three forms the alternative hypothesis can take.\n\nMean difference not equal to 0 is instead the general two-sided form, not the specific one-sided case of treatment 1 being lower.\n\nMean difference greater than 0 is the opposite one-sided form, corresponding to treatment 1 being higher, not lower.\n\nMean difference equal to 0 is the null hypothesis, not a form of the alternative hypothesis."
  },
  {
    id: "aee302_ch5_016",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "The order in which the two treatments are subtracted when computing the difference D (treatment 1 minus treatment 2, or the reverse) is not important.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Paired Sample Studies section states directly that D = treatment 1 - treatment 2, and that the order of determination is not important, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch5_017",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Which of the three alternative hypothesis forms in a paired comparison test corresponds to treatment 1 being higher than treatment 2?",
    options: [
      "Mean difference > 0",
      "Mean difference < 0",
      "Mean difference $\\neq$ 0",
      "Mean difference = 0"
    ],
    correctAnswer: 0,
    explanation: "The Paired Sample Studies section lists mean difference greater than 0, treatment 1 higher, as one of the three forms the alternative hypothesis can take.\n\nMean difference less than 0 is the opposite one-sided form, corresponding to treatment 1 being lower, not higher.\n\nMean difference not equal to 0 is the general two-sided form, not the specific one-sided case of treatment 1 being higher.\n\nMean difference equal to 0 is the null hypothesis, not a form of the alternative hypothesis."
  },
  {
    id: "aee302_ch5_018",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What is the test statistic given for a paired comparison test, based on the student's t-distribution?",
    options: [
      "$t = \\bar{D} \\times S_D \\times \\sqrt{n}$",
      "$t = \\dfrac{\\bar{D}}{S_D/\\sqrt{n}}$",
      "$t = \\dfrac{S_D}{\\bar{D}/\\sqrt{n}}$",
      "$t = \\dfrac{\\bar{D} - S_D}{\\sqrt{n}}$"
    ],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section gives the test statistic as $t = \\bar{D}/(S_D/\\sqrt{n})$.\n\nMultiplying $\\bar{D}$, $S_D$, and $\\sqrt{n}$ together does not match the division structure the section actually gives.\n\nSwapping $\\bar{D}$ and $S_D$'s roles inverts which quantity is divided by which, not matching the formula given.\n\nSubtracting $S_D$ from $\\bar{D}$ before dividing by $\\sqrt{n}$ misapplies the operations; the formula instead divides $\\bar{D}$ by the standard error $S_D/\\sqrt{n}$."
  },
  {
    id: "aee302_ch5_019",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "In the paired-comparison test statistic $t = \\bar{D}/(S_D/\\sqrt{n})$, what does $\\bar{D}$ represent?",
    options: [
      "The number of data pairings or blocks",
      "The standard deviation of the differences",
      "The mean difference",
      "The degrees of freedom for the test"
    ],
    correctAnswer: 2,
    explanation: "The Paired Sample Studies section states that $\\bar{D}$ is the mean difference.\n\nThe number of data pairings or blocks is represented by $n$ in the formula, a distinct symbol from $\\bar{D}$.\n\nThe standard deviation of the differences is represented by $S_D$, not $\\bar{D}$.\n\nThe degrees of freedom, $n-1$, is a separate quantity derived from $n$, not represented by $\\bar{D}$."
  },
  {
    id: "aee302_ch5_020",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "In the paired-comparison test statistic $t = \\bar{D}/(S_D/\\sqrt{n})$, what does $S_D$ represent?",
    options: [
      "The standard deviation of the differences",
      "The mean difference",
      "The number of data pairings or blocks",
      "The significance level of the test"
    ],
    correctAnswer: 0,
    explanation: "The Paired Sample Studies section states that $S_D$ is the standard deviation of the differences.\n\nThe mean difference is represented by $\\bar{D}$, a distinct symbol from $S_D$.\n\nThe number of data pairings or blocks is represented by $n$, not $S_D$.\n\nThe significance level is a separate, user-chosen threshold from Unit 3, not represented by $S_D$."
  },
  {
    id: "aee302_ch5_021",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "In the paired-comparison test statistic, what does $n$ represent, and what are the associated degrees of freedom?",
    options: [
      "$n$ is the standard deviation of the differences, with $n$ degrees of freedom",
      "$n$ is the mean difference, with $n+1$ degrees of freedom",
      "$n$ is the number of data pairings or blocks, with $n-1$ degrees of freedom",
      "$n$ is the significance level, with $2n$ degrees of freedom"
    ],
    correctAnswer: 2,
    explanation: "The Paired Sample Studies section states that $n$ is the number of data pairings or blocks, and that $n-1$ is the associated degrees of freedom.\n\n$n$ is not the standard deviation of the differences; that quantity is represented separately by $S_D$.\n\n$n$ is not the mean difference; that quantity is represented separately by $\\bar{D}$, and the degrees of freedom are $n-1$, not $n+1$.\n\n$n$ is not the significance level, a separate user-chosen threshold, and the degrees of freedom are $n-1$, not $2n$."
  },
  {
    id: "aee302_ch5_022",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Which of the following is one of the three forms the alternative hypothesis can take in a paired comparison test?",
    options: [
      "Mean difference $\\neq$ 0 (a difference between treatments)",
      "Mean difference < 0 (treatment 1 lower)",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Paired Sample Studies section lists mean difference not equal to 0, a general difference between treatments, as one of the three forms of the alternative hypothesis.\n\nThe same section also lists mean difference less than 0, treatment 1 lower, as another of the three forms.\n\nSince both listed forms are genuinely among the three alternative hypothesis forms given in the section, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch5_023",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "What is stated about the decision rule for a paired comparison test?",
    options: [
      "It is the same as for the F test used in the variance ratio test",
      "It cannot be determined using either a test statistic or a P value",
      "It is entirely unique to paired studies and shares nothing with other tests",
      "It is the same as for hypothesis testing of equality of means"
    ],
    correctAnswer: 3,
    explanation: "The Paired Sample Studies section states that the decision rule is the same as for hypothesis testing of equality of means.\n\nThe F test decision rule belongs to the variance ratio test from Unit 3, a different procedure from this paired-differences t-test.\n\nThe decision rule can be determined using either a test statistic or a P value, exactly as in the equality-of-means test it mirrors.\n\nDescribing the rule as entirely unique contradicts the section, which explicitly ties it back to the equality-of-means decision rule."
  },
  {
    id: "aee302_ch5_024",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Two potato plant types, A and B, are studied on six pairs of plots positioned along a river, with one plot of each type per pair to control for a soil-fertility gradient near the water. Why are the plots paired this way rather than treated as two independent, unpaired samples?",
    options: [
      "To make proximity to the river as similar as possible within each pair, treating it as a confounding variable",
      "To ensure that plant type A is always planted closer to the river than plant type B",
      "To guarantee that every pair produces exactly the same yield for both plant types",
      "To reduce the total number of plots required to below six"
    ],
    correctAnswer: 0,
    explanation: "Pairing plots by position along the river follows the section's description of paired design: making the pairing as similar as possible with respect to a confounding variable, here the soil-fertility gradient associated with river proximity.\n\nThe pairing does not fix which plant type sits closer to the river within each pair; it only keeps river proximity similar within a pair, not identical in ordering across pairs.\n\nPairing does not guarantee identical yields; real treatment differences and random variation can still produce different observed yields within a pair.\n\nThe number of plots is set by the six pairs needed for the comparison, not reduced by the act of pairing itself."
  },
  {
    id: "aee302_ch5_025",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Six paired plots give the following yields for plant types A and B: (A=1, B=3), (A=5, B=3), (A=6, B=8), (A=7, B=10), (A=12, B=8), (A=10, B=13). Defining $D = B - A$ for each pair, what is the mean difference $\\bar{D}$?",
    options: [
      "0.50",
      "0.67",
      "1.00",
      "-0.67"
    ],
    correctAnswer: 1,
    explanation: "The six differences are $3-1=2$, $3-5=-2$, $8-6=2$, $10-7=3$, $8-12=-4$, and $13-10=3$, summing to 4. Dividing by 6 pairs gives $\\bar{D} = 4/6 \\approx 0.67$.\n\n0.50 results from mistakenly dividing the sum of differences by 8 instead of 6.\n\n1.00 results from mistakenly dividing the sum of differences by 4 instead of 6.\n\n-0.67 results from reversing the sign, as would happen if $D$ were computed as $A-B$ instead of $B-A$ but the original positive mean were kept."
  },
  {
    id: "aee302_ch5_026",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the potato-yield study, which alternative hypothesis form matches the question \"is there evidence that plant B produces higher yield than A,\" using $D=B-A$?",
    options: [
      "Mean difference = 0",
      "Mean difference $\\neq$ 0",
      "Mean difference > 0",
      "Mean difference < 0"
    ],
    correctAnswer: 2,
    explanation: "Since $D=B-A$ and the question asks whether B's yield is higher than A's, this corresponds to the one-sided alternative hypothesis form mean difference greater than 0.\n\nMean difference equal to 0 is the null hypothesis, representing no difference, not the directional claim being tested.\n\nMean difference not equal to 0 is the general two-sided form, which would not specifically capture the directional claim that B is higher.\n\nMean difference less than 0 would instead correspond to asking whether A is higher than B, the opposite direction from the question asked."
  },
  {
    id: "aee302_ch5_027",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the potato-yield study, suppose the standard deviation of the six differences is $S_D \\approx 2.94$ and the mean difference is $\\bar{D} \\approx 0.67$. Using $t = \\bar{D}/(S_D/\\sqrt{n})$ with $n=6$, what is the test statistic $t$, rounded to two decimal places?",
    options: [
      "0.28",
      "1.12",
      "0.56",
      "2.94"
    ],
    correctAnswer: 2,
    explanation: "Using $t = \\bar{D}/(S_D/\\sqrt{n})$, $S_D/\\sqrt{n} = 2.94/\\sqrt{6} \\approx 2.94/2.449 \\approx 1.20$, so $t \\approx 0.67/1.20 \\approx 0.56$.\n\n0.28 results from mistakenly halving the correctly computed value of $t$.\n\n1.12 results from mistakenly doubling the correctly computed value of $t$.\n\n2.94 simply restates $S_D$ itself, without completing the full calculation for $t$."
  },
  {
    id: "aee302_ch5_028",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the potato-yield study with six paired plots, the degrees of freedom for the paired t-test are 6, the number of pairs, rather than 5.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Paired Sample Studies section states that the degrees of freedom are $n-1$, so for six pairs the degrees of freedom are $6-1=5$, not 6, contradicting the stem's claim."
  },
  {
    id: "aee302_ch5_029",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the potato-yield study, what are the degrees of freedom for the paired t-test with 6 pairs of plots?",
    options: [
      "6",
      "4",
      "5",
      "7"
    ],
    correctAnswer: 2,
    explanation: "Using df $= n-1$, the degrees of freedom for 6 pairs are $6-1=5$.\n\n6 mistakenly reports the number of pairs itself, without subtracting 1.\n\n4 results from subtracting 2 instead of 1.\n\n7 results from adding 1 instead of subtracting it."
  },
  {
    id: "aee302_ch5_030",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the potato-yield study, the critical t-value at $df=5$ for a one-tailed 5% test is 2.015. Given the computed $t \\approx 0.56$, what is the decision under the test-statistic decision rule?",
    options: [
      "Reject Ho and accept H1, since $t$ exceeds the critical value",
      "Accept Ho, since $t$ is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho and accept H1, since $t$ is below the critical value"
    ],
    correctAnswer: 1,
    explanation: "Since the computed $t \\approx 0.56$ is below the critical value of 2.015, the decision rule (the same as for hypothesis testing of equality of means) concludes that Ho is accepted, meaning there is no evidence that plant B's yield exceeds plant A's.\n\nRejecting Ho and accepting H1 on the grounds that $t$ exceeds the critical value misstates the comparison; 0.56 is well below 2.015, not above it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once $t$ is compared to the critical value.\n\nRejecting Ho and accepting H1 while correctly noting $t$ is below the critical value still reaches the wrong conclusion; being below the critical value leads to accepting Ho, not H1."
  },
  {
    id: "aee302_ch5_031",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "If a researcher instead chose to define the difference as $D = A - B$ rather than $D = B - A$ for a paired comparison study, what would the null hypothesis still state?",
    options: [
      "No difference between the two treatments (mean difference = 0)",
      "Treatment A is definitely higher than treatment B",
      "Treatment B is definitely higher than treatment A",
      "The null hypothesis could no longer be tested at all"
    ],
    correctAnswer: 0,
    explanation: "Since the order of determination is not important, reversing the definition of $D$ only flips the sign of $\\bar{D}$ and the direction associated with each one-sided alternative; the null hypothesis itself still states no difference between the two treatments, mean difference equal to 0, regardless of the order chosen.\n\nDeclaring treatment A definitely higher describes a specific alternative hypothesis, not the null hypothesis, and is not implied merely by choosing this order for $D$.\n\nDeclaring treatment B definitely higher likewise describes a specific alternative hypothesis, not a consequence of the order chosen for $D$.\n\nThe null hypothesis remains fully testable regardless of which order is chosen for $D$, since the section states the order does not matter."
  },
  {
    id: "aee302_ch5_032",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "The wear of shoe soles made from materials A and B is measured for 10 boys, with the differences $D=B-A$ recorded as: 0.8, 0.6, 0.3, -0.1, 1.1, -0.2, 0.3, 0.5, 0.5, 0.3. What is the mean difference $\\bar{D}$?",
    options: [
      "0.35",
      "0.45",
      "0.41",
      "0.50"
    ],
    correctAnswer: 2,
    explanation: "Summing the 10 differences gives $0.8+0.6+0.3-0.1+1.1-0.2+0.3+0.5+0.5+0.3=4.1$, and dividing by 10 pairs gives $\\bar{D}=4.1/10=0.41$.\n\n0.35 results from a small rounding slip in the running total before dividing.\n\n0.45 results from mistakenly including an extra 0.4 in the sum before dividing.\n\n0.50 results from mistakenly dividing a sum of 5.0, an overstated total, by 10."
  },
  {
    id: "aee302_ch5_033",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the shoe-sole wear study, which alternative hypothesis form matches the question \"is there evidence to show that the two materials are NOT the same\"?",
    options: [
      "Mean difference > 0",
      "Mean difference < 0",
      "Mean difference $\\neq$ 0",
      "Mean difference = 0"
    ],
    correctAnswer: 2,
    explanation: "Asking whether the two materials are the same or not, without specifying a direction, corresponds to the general two-sided alternative hypothesis form, mean difference not equal to 0.\n\nMean difference greater than 0 is a one-sided form specifically claiming material B wears more, a narrower claim than simply asking if the materials differ at all.\n\nMean difference less than 0 is the opposite one-sided form, likewise narrower than the general question of whether the materials are the same.\n\nMean difference equal to 0 is the null hypothesis, representing no difference, the hypothesis being tested against, not the alternative."
  },
  {
    id: "aee302_ch5_034",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Which of the following is explicitly named in this unit as a purpose or alternate name associated with simple blocking?",
    options: [
      "Eliminating an extraneous form of variability",
      "Increasing the total sample size required for a study",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The Paired Sample Studies section states that the purpose of blocking is to eliminate an extraneous form of variability.\n\nIncreasing the total sample size required is never mentioned as a purpose of blocking; blocking instead concerns how existing experimental material is allocated to treatments.\n\nSince only the first statement is genuinely supported by the section, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch5_035",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the shoe-sole wear study, suppose the standard deviation of the 10 differences is $S_D \\approx 0.39$ and the mean difference is $\\bar{D} = 0.41$. Using $t = \\bar{D}/(S_D/\\sqrt{n})$ with $n=10$, what is the test statistic $t$, rounded to two decimal places?",
    options: [
      "1.66",
      "6.64",
      "3.32",
      "0.39"
    ],
    correctAnswer: 2,
    explanation: "Using $t = \\bar{D}/(S_D/\\sqrt{n})$, $S_D/\\sqrt{n} = 0.39/\\sqrt{10} \\approx 0.39/3.162 \\approx 0.123$, so $t \\approx 0.41/0.123 \\approx 3.32$.\n\n1.66 results from mistakenly halving the correctly computed value of $t$.\n\n6.64 results from mistakenly doubling the correctly computed value of $t$.\n\n0.39 simply restates $S_D$ itself, without completing the full calculation for $t$."
  },
  {
    id: "aee302_ch5_036",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the shoe-sole wear study, what are the degrees of freedom for the paired t-test with 10 boys?",
    options: [
      "10",
      "8",
      "9",
      "11"
    ],
    correctAnswer: 2,
    explanation: "Using df $= n-1$, the degrees of freedom for 10 pairs are $10-1=9$.\n\n10 mistakenly reports the number of pairs itself, without subtracting 1.\n\n8 results from subtracting 2 instead of 1.\n\n11 results from adding 1 instead of subtracting it."
  },
  {
    id: "aee302_ch5_037",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For the shoe-sole wear study, the critical t-value at $df=9$ for a two-tailed 5% test is 2.262. Given the computed $t \\approx 3.32$, what is the decision under the test-statistic decision rule?",
    options: [
      "Accept Ho, since $t$ exceeds the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho and accept H1, since $t$ exceeds the critical value",
      "Reject Ho and accept H1, since $t$ is below the critical value"
    ],
    correctAnswer: 2,
    explanation: "Since the computed $t \\approx 3.32$ exceeds the critical value of 2.262, the decision rule concludes that H1 is accepted, meaning there is evidence the two materials are not the same.\n\nAccepting Ho on the grounds that $t$ exceeds the critical value reverses the rule; exceeding the critical value leads to accepting H1, not Ho.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once $t$ is compared to the critical value.\n\nDescribing $t$ as below the critical value misstates the comparison; 3.32 is greater than 2.262, not less."
  },
  {
    id: "aee302_ch5_038",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Regarding the quantities in the test statistic $t=\\bar{D}/(S_D/\\sqrt{n})$, which of the following is correctly described?",
    options: [
      "$S_D$ represents the number of data pairings or blocks",
      "$n$ represents the mean difference",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "$S_D$ represents the standard deviation of the differences, not the number of data pairings or blocks, which is instead represented by $n$.\n\n$n$ represents the number of data pairings or blocks, not the mean difference, which is instead represented by $\\bar{D}$.\n\nSince neither statement correctly describes the quantity it names, the option affirming either or both is not correct.\n\nBecause both statements are incorrect, the option denying both is the correct outcome."
  },
  {
    id: "aee302_ch5_039",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "A separate paired study with 8 blocks gives differences $D$ of: 4, -1, 3, 2, -2, 5, 1, 0. What is the mean difference $\\bar{D}$?",
    options: [
      "1.20",
      "1.50",
      "1.75",
      "2.00"
    ],
    correctAnswer: 1,
    explanation: "Summing the 8 differences gives $4-1+3+2-2+5+1+0=12$, and dividing by 8 pairs gives $\\bar{D}=12/8=1.50$.\n\n1.20 results from mistakenly dividing the sum of differences by 10 instead of 8.\n\n1.75 results from mistakenly including an extra 2 in the sum before dividing.\n\n2.00 results from mistakenly dividing the sum of differences by 6 instead of 8."
  },
  {
    id: "aee302_ch5_040",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For that 8-block study, suppose the standard deviation of the differences is $S_D \\approx 2.45$ and the mean difference is $\\bar{D} = 1.50$. Using $t = \\bar{D}/(S_D/\\sqrt{n})$ with $n=8$, what is the test statistic $t$, rounded to two decimal places?",
    options: [
      "0.87",
      "3.46",
      "1.73",
      "0.61"
    ],
    correctAnswer: 2,
    explanation: "Using $t = \\bar{D}/(S_D/\\sqrt{n})$, $S_D/\\sqrt{n} = 2.45/\\sqrt{8} \\approx 2.45/2.828 \\approx 0.866$, so $t \\approx 1.50/0.866 \\approx 1.73$.\n\n0.87 results from mistakenly halving the correctly computed value of $t$.\n\n3.46 results from mistakenly doubling the correctly computed value of $t$.\n\n0.61 results from inverting the calculation, dividing the standard error by $\\bar{D}$ instead of the reverse."
  },
  {
    id: "aee302_ch5_041",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Paired comparison testing involves observations on two treatments being collected in pairs under conditions as close to identical as possible, such as using identical twins in an experiment.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Paired Sample Studies section states directly that these studies involve observations on two treatments collected in pairs under as near identical conditions as possible, giving identical twins in biological and psychological experiments as an example, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch5_042",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For that 8-block study, what are the degrees of freedom for the paired t-test?",
    options: [
      "8",
      "6",
      "7",
      "9"
    ],
    correctAnswer: 2,
    explanation: "Using df $= n-1$, the degrees of freedom for 8 blocks are $8-1=7$.\n\n8 mistakenly reports the number of blocks itself, without subtracting 1.\n\n6 results from subtracting 2 instead of 1.\n\n9 results from adding 1 instead of subtracting it."
  },
  {
    id: "aee302_ch5_043",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "For that 8-block study, the critical t-value at $df=7$ for a two-tailed 5% test is 2.365. Given the computed $t \\approx 1.73$, what is the decision under the test-statistic decision rule?",
    options: [
      "Reject Ho and accept H1, since $t$ exceeds the critical value",
      "Accept Ho, since $t$ is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho and accept H1, since $t$ is below the critical value"
    ],
    correctAnswer: 1,
    explanation: "Since the computed $t \\approx 1.73$ is below the critical value of 2.365, the decision rule concludes that Ho is accepted, meaning there is no evidence of a real difference between the two treatments in this study.\n\nRejecting Ho and accepting H1 on the grounds that $t$ exceeds the critical value misstates the comparison; 1.73 is below 2.365, not above it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once $t$ is compared to the critical value.\n\nRejecting Ho and accepting H1 while correctly noting $t$ is below the critical value still reaches the wrong conclusion; being below the critical value leads to accepting Ho, not H1."
  },
  {
    id: "aee302_ch5_044",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Comparing the three worked paired t-tests, with computed statistics of $t \\approx 0.56$ (critical 2.015), $t \\approx 3.32$ (critical 2.262), and $t \\approx 1.73$ (critical 2.365), which one shows evidence of a real treatment difference?",
    options: [
      "Only the study with $t \\approx 0.56$",
      "Only the study with $t \\approx 3.32$",
      "Only the study with $t \\approx 1.73$",
      "All three studies show evidence of a real difference"
    ],
    correctAnswer: 1,
    explanation: "Only $t \\approx 3.32$ exceeds its corresponding critical value of 2.262, leading to rejecting Ho in that study alone; the other two computed statistics, 0.56 and 1.73, both remain below their respective critical values of 2.015 and 2.365.\n\nThe study with $t \\approx 0.56$ falls well below its critical value of 2.015, so Ho is accepted there, not rejected.\n\nThe study with $t \\approx 1.73$ also falls below its critical value of 2.365, so Ho is accepted there as well.\n\nNot all three studies show evidence of a difference; two of the three computed statistics fail to exceed their critical values."
  },
  {
    id: "aee302_ch5_045",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Why is a paired, blocked design generally better able to detect a real treatment effect than treating the same two sets of data as independent, unpaired samples?",
    options: [
      "Because pairing automatically doubles the number of observations collected",
      "Because pairing removes variability from a known confounding source, letting the treatment effect stand out more clearly",
      "Because pairing eliminates the need for any assumption about the data's distribution",
      "Because pairing guarantees the null hypothesis will always be rejected"
    ],
    correctAnswer: 1,
    explanation: "By pairing on a known confounding source of variability, such as variety, field position, or the individual being tested, that extraneous variability is removed from the comparison, making it more likely that any remaining variation in the differences reflects a genuine treatment effect rather than noise from the confounding factor.\n\nPairing does not double the number of observations collected; it changes how the same number of observations are structured and analyzed.\n\nPairing does not eliminate distributional assumptions; the section still assumes the resulting differences are approximately normally distributed.\n\nPairing does not guarantee rejection of the null hypothesis; the potato-yield example above showed a case where Ho was accepted even with a paired design."
  },
  {
    id: "aee302_ch5_046",
    course: "AEE 302",
    chapter: "Chapter 5",
    text: "Regarding the two worked paired-comparison examples in this unit (one comparing potato yields paired by field position, and one comparing shoe-sole wear paired by boy), which of the following is true?",
    options: [
      "The potato-yield example tests a one-sided alternative hypothesis",
      "The shoe-sole example uses a sample of 6 pairs",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The potato-yield example asks whether plant B produces higher yield than plant A, a directional claim corresponding to a one-sided alternative hypothesis, mean difference greater than 0.\n\nThe shoe-sole example uses a sample of 10 boys, not 6 pairs; a sample of 6 pairs instead belongs to the potato-yield example.\n\nSince only the first statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported, the option denying both is not correct."
  }
];

export default aee302Chapter5Questions;
