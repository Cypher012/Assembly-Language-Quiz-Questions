import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter6Questions: QuestionV2[] = [
  {
    id: "aee302_ch6_001",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What can a one factor design investigate?",
    options: [
      "Only whether a single fixed measurement equals a hypothesized constant",
      "The effect of different levels of a controllable factor, or treatment, on a measured response",
      "Only the correlation between two entirely unrelated response variables",
      "Only whether a sample was drawn using a probability sampling method"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that in a one factor design, the effect of different levels of a controllable factor, or treatment, on a measured response can be investigated.\n\nComparing a single measurement to a hypothesized constant describes the one-sample test statistic from Unit 3, not a one factor design.\n\nCorrelation between unrelated variables is not a concept introduced anywhere in this unit.\n\nWhether a sample was drawn using probability sampling is a sampling-method question from Unit 2, unrelated to comparing treatment levels."
  },
  {
    id: "aee302_ch6_002",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In a completely randomized design, how are experimental units assigned to treatment groups?",
    options: [
      "They are assigned by the researcher's personal judgment about which unit suits which treatment",
      "They are assigned randomly",
      "They are assigned in the exact order the units were collected",
      "They are assigned so that every treatment receives exactly one unit"
    ],
    correctAnswer: 1,
    explanation: "The Completely Randomized Design section states that experimental units are randomly assigned to treatment groups, often referring to different levels of a factor.\n\nAssignment by personal judgment describes a non-random selection method, the opposite of what a completely randomized design uses.\n\nAssigning units in collection order is not random assignment and is never described in this section.\n\nGiving every treatment exactly one unit would prevent any replication at all, contradicting the section's emphasis on replicate measurements for each treatment."
  },
  {
    id: "aee302_ch6_003",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In the completely randomized design layout, how would unequal replication across treatments be represented in the table?",
    options: [
      "By columns of different length",
      "By rows of different width",
      "By using a completely separate table for each treatment",
      "By recording only the treatment with the most replicates"
    ],
    correctAnswer: 0,
    explanation: "The Completely Randomized Design section states that unequal replication would be represented by columns of different length.\n\nRows of different width is not the description given; each treatment forms a column in the layout, so unequal replication affects column length, not row width.\n\nUsing a completely separate table for each treatment is not how the section describes representing unequal replication within a single design layout.\n\nRecording only the treatment with the most replicates would discard data from every other treatment, which the section does not describe."
  },
  {
    id: "aee302_ch6_004",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What does the completely randomized design structure fail to account for?",
    options: [
      "The specific treatments chosen for comparison in this study",
      "Any factors other than the treatments themselves",
      "The precise response variable being measured throughout the experiment",
      "The total number of individual experimental units used overall"
    ],
    correctAnswer: 1,
    explanation: "The Completely Randomized Design section states that this form of study structure is such that no other factors other than the treatments are accounted for.\n\nThe treatments themselves are exactly what this design does account for; they are the entire focus of the comparison.\n\nThe measured response variable is what is recorded for every unit in the design, not something left unaccounted for.\n\nThe total number of experimental units is simply the sum of the replicates used, not a factor the design fails to account for."
  },
  {
    id: "aee302_ch6_005",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What does the null hypothesis state for the completely randomized design's hypothesis test?",
    options: [
      "At least one treatment mean differs from the others",
      "No difference among the means of the treatments tested (treatment has no effect)",
      "Every treatment mean is different from every other treatment mean",
      "The measured response is always exactly zero"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that the null hypothesis, Ho, states no difference among the means of the treatments tested, that is, treatment does not have an effect.\n\nAt least one treatment mean differing from the others describes the alternative hypothesis, not the null hypothesis.\n\nEvery treatment mean differing from every other is a much stronger claim than the alternative hypothesis actually makes, which only requires at least one to differ.\n\nThe response always equaling exactly zero is not what either hypothesis states; the hypotheses concern the equality of treatment means, not the value of the response itself."
  },
  {
    id: "aee302_ch6_006",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What does the alternative hypothesis state for the completely randomized design's hypothesis test?",
    options: [
      "No difference among the means of the treatments tested",
      "Every treatment mean is exactly equal to every other treatment mean",
      "Difference among the means of the treatments tested (at least one mean is different from the others)",
      "The measured response is always exactly zero"
    ],
    correctAnswer: 2,
    explanation: "The One Factor Designs section states that the alternative hypothesis, Hi, states a difference among the means of the treatments tested, meaning at least one mean is different from the others.\n\nNo difference among the treatment means describes the null hypothesis, not the alternative.\n\nEvery treatment mean being exactly equal to every other restates the null hypothesis in different words, not the alternative.\n\nThe response always equaling exactly zero is not what either hypothesis states."
  },
  {
    id: "aee302_ch6_007",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What do the null and alternative hypotheses for a completely randomized design fail to indicate?",
    options: [
      "Whether more than two treatments are being compared",
      "How a detected treatment difference, if any, is reflected within the response data",
      "Whether the design uses random assignment of units",
      "The total number of treatments included in the study"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that these hypotheses are general hypotheses regarding treatment differences and do not provide any information as to how a treatment difference, if detected, is reflected within the response data.\n\nWhether more than two treatments are compared is evident from the number of treatment levels in the design itself, not something the hypotheses are described as failing to indicate.\n\nWhether random assignment is used is a feature of the completely randomized design itself, not something the hypotheses are meant to convey.\n\nThe total number of treatments is fixed by the study's design, not information the hypotheses fail to provide."
  },
  {
    id: "aee302_ch6_008",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In a completely randomized design, experimental units are randomly assigned to treatment groups.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Completely Randomized Design section states directly that experimental units are randomly assigned to treatment groups, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch6_009",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "How is analysis of variance (ANOVA) defined?",
    options: [
      "The technique of separating, mathematically, the total variation within experimental measurements into sources corresponding to controlled and uncontrolled components",
      "The technique of eliminating all variability from a set of experimental measurements entirely",
      "The technique of ranking treatments from highest to lowest average response",
      "The technique of estimating a single population mean from one sample only"
    ],
    correctAnswer: 0,
    explanation: "The One Factor Designs section defines analysis of variance as the technique of separating, mathematically, the total variation within experimental measurements into sources corresponding to controlled and uncontrolled components.\n\nEliminating all variability entirely is not possible and is not what ANOVA does; ANOVA instead partitions variability into identifiable sources.\n\nSimply ranking treatments by average response ignores the variability analysis that defines ANOVA.\n\nEstimating a single population mean from one sample describes basic point estimation, not the variance-partitioning technique that defines ANOVA."
  },
  {
    id: "aee302_ch6_010",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Within a completely randomized design, into what two parts does the ANOVA principle split response variation?",
    options: [
      "Population and sample",
      "Treatment and error",
      "Mean and median",
      "Null hypothesis and alternative hypothesis"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that the ANOVA principle involves splitting response variation into two parts, treatment and error, with error sometimes referred to as the within-treatment variation, or the residual.\n\nPopulation and sample are broader statistical concepts from Unit 2, not the two variation components ANOVA splits response variation into.\n\nMean and median are measures of location from Unit 1, unrelated to how ANOVA partitions variation.\n\nThe null and alternative hypotheses are the two competing claims being tested, not the two variation components the response is split into."
  },
  {
    id: "aee302_ch6_011",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Based on the additive model, how does the total sum of squares (SST) relate to the treatment and error sums of squares?",
    options: [
      "SST = SS Treatment $\\times$ SS Error",
      "SST = SS Treatment $+$ SS Error",
      "SST = SS Treatment $-$ SS Error",
      "SST = SS Treatment $\\div$ SS Error"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that, based on the additive model, the total sum of squares can be split into two parts: SST = SS Treatment (SSTr) + SS Error (SSE).\n\nMultiplying the two sum-of-squares terms does not match the additive decomposition the section describes.\n\nSubtracting the error sum of squares from the treatment sum of squares does not match the additive decomposition given.\n\nDividing the treatment sum of squares by the error sum of squares does not match the additive decomposition given; the two terms are added, not divided."
  },
  {
    id: "aee302_ch6_012",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What do the mean square (MS) terms in an ANOVA table represent?",
    options: [
      "The total number of replicates used in the experiment",
      "Variance components that are part of the statistical theory associated with experimental designs",
      "The exact critical value used in the decision rule",
      "The raw, unsquared differences between individual observations"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that the mean square (MS) terms represent variance components which are part of the statistical theory associated with experimental designs.\n\nThe total number of replicates is a design quantity used to compute degrees of freedom, not what the MS terms themselves represent.\n\nThe critical value is looked up from a reference distribution as part of the decision rule, a separate quantity from the MS terms.\n\nRaw, unsquared differences between observations are the building blocks of sum-of-squares terms, but the MS terms themselves are variance components, not raw differences."
  },
  {
    id: "aee302_ch6_013",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In the ANOVA table for a balanced completely randomized design with K treatments, what are the treatment degrees of freedom?",
    options: [
      "K",
      "K-1",
      "K+1",
      "N-1"
    ],
    correctAnswer: 1,
    explanation: "The ANOVA table given in the One Factor Designs section lists the treatment degrees of freedom as K-1.\n\nK itself overstates the treatment degrees of freedom by not subtracting 1.\n\nK+1 likewise misstates the formula, adding rather than subtracting 1.\n\nN-1 is instead the total degrees of freedom for the whole design, not specifically the treatment degrees of freedom."
  },
  {
    id: "aee302_ch6_014",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For an unbalanced completely randomized design with $n_j$ replicates for treatment j, what replaces $n$ and $kn$ in the calculation formulae?",
    options: [
      "$n$ is replaced by $k$, and $kn$ is replaced by $n^2$",
      "$n$ is replaced by $n_j$, and $kn$ is replaced by $\\Sigma n_j$",
      "$n$ is replaced by $N$, and $kn$ is replaced by $k^2$",
      "$n$ and $kn$ remain unchanged for an unbalanced design"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that for an unbalanced design, this involves replacing $n$ by $n_j$ and $kn$ by $\\Sigma n_j$.\n\nReplacing $n$ by $k$ and $kn$ by $n^2$ does not match the substitutions the section describes.\n\nReplacing $n$ by $N$ and $kn$ by $k^2$ does not match the substitutions the section describes.\n\nThe formulae are explicitly described as needing modification for an unbalanced design, so they do not remain unchanged."
  },
  {
    id: "aee302_ch6_015",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For an unbalanced completely randomized design, what do the error degrees of freedom become?",
    options: [
      "$K-1$, which is instead the treatment degrees of freedom",
      "$\\Sigma n_j - k$",
      "$k(n-1)$, the formula used only for a balanced design",
      "$N+K$, a combination that does not appear anywhere in this formula"
    ],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that for an unbalanced design, the error degrees of freedom become $\\Sigma n_j - k$.\n\n$K-1$ is instead the treatment degrees of freedom, not the error degrees of freedom.\n\n$k(n-1)$ is the error degrees of freedom formula for a balanced design specifically, which assumes equal replication $n$ across all treatments.\n\n$N+K$ does not match the subtraction the section describes for the unbalanced error degrees of freedom."
  },
  {
    id: "aee302_ch6_016",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Which of the following is one of the two components that response variation is split into within a completely randomized design's ANOVA?",
    options: [
      "Treatment",
      "Error (or residual)",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The One Factor Designs section lists treatment as one of the two components response variation is split into.\n\nThe same section also lists error, also called the residual, as the other of the two components.\n\nSince both listed components are genuinely the two parts named in the section, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch6_017",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Before generalizing to K treatments, this unit recaps a two-sample t-test comparing $\\mu_1$ and $\\mu_2$. What reference distribution does it cite for this recap?",
    options: [
      "The F distribution at $df = K-1$",
      "The standard normal distribution",
      "The t distribution at $df = n+m-2$",
      "The chi-squared distribution"
    ],
    correctAnswer: 2,
    explanation: "The section recaps the two-sample case with sample sizes $n$ and $m$, citing the t distribution at $df = n+m-2$ as the reference distribution, matching the pooled t-test reference distribution from Unit 3.\n\nThe F distribution at $df=K-1$ belongs to the later, generalized K-treatment test statistic, not this two-sample recap.\n\nThe standard normal distribution is the reference used for z-scores in Unit 2, not for this t-test recap.\n\nThe chi-squared distribution is never mentioned anywhere in this unit."
  },
  {
    id: "aee302_ch6_018",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In the two-sample recap, which formula is given for the pooled estimate of population variance from samples 1 and 2?",
    options: [
      "$S_p^2 = \\dfrac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{(n_1-1)+(n_2-1)}$",
      "$S_p^2 = (n_1-1)s_1^2 \\times (n_2-1)s_2^2$",
      "$S_p^2 = \\dfrac{n_1 + n_2}{s_1^2 + s_2^2}$",
      "$S_p^2 = s_1^2 - s_2^2$"
    ],
    correctAnswer: 0,
    explanation: "The section recaps the pooled estimate of population variance for two samples as $S_p^2 = \\dfrac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{(n_1-1)+(n_2-1)}$, matching the pooled variance formula underlying Unit 3's pooled t-test.\n\nMultiplying the two weighted variance terms together does not match the additive, divided structure the section actually gives.\n\nDividing the sum of sample sizes by the sum of variances inverts the formula's structure entirely.\n\nSimply subtracting the two sample variances discards the weighting by sample size that the pooled formula requires."
  },
  {
    id: "aee302_ch6_019",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "How does the pooled variance formula generalize from 2 samples to k samples?",
    options: [
      "$S_R^2 = \\dfrac{\\Sigma(n_i-1)s_i^2}{N-K}$, summing the weighted variances across all k samples",
      "$S_R^2 = \\dfrac{n_1 \\times n_2 \\times ... \\times n_k}{K}$",
      "$S_R^2 = s_1^2 + s_2^2 + ... + s_k^2$, with no weighting by sample size at all",
      "$S_R^2 = \\dfrac{K}{N}$"
    ],
    correctAnswer: 0,
    explanation: "The section generalizes the pooled variance formula to k samples as $S_R^2 = \\dfrac{\\Sigma(n_i-1)s_i^2}{N-K}$, where $N=\\Sigma n_i$ is the total number of observations.\n\nMultiplying all the sample sizes together and dividing by K does not match the weighted-sum structure the section gives.\n\nSimply adding the k sample variances without weighting by each sample's size ignores the $(n_i-1)$ weighting the formula requires.\n\n$K/N$ is not related to the pooled variance formula at all; it would instead be the reciprocal of an average sample size."
  },
  {
    id: "aee302_ch6_020",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "A completely randomized design accounts for extraneous factors beyond the treatments themselves, in the same way that blocking does.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Completely Randomized Design section states the opposite: this form of study structure is such that no other factors other than the treatments are accounted for. Accounting for an extraneous factor is instead the purpose of blocking, described in Unit 5, so the stem's claim is false."
  },
  {
    id: "aee302_ch6_021",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What is $S_R^2$, the pooled estimate of population variance across k samples, also called?",
    options: [
      "The between-treatment mean square",
      "The within-treatment mean square",
      "The grand mean of all observations",
      "The total sum of squares"
    ],
    correctAnswer: 1,
    explanation: "The section states that $S_R^2$ is the within-the-treatment mean square, or residual mean square.\n\nThe between-treatment mean square is instead $S_T^2$, a separate quantity computed from the treatment means.\n\nThe grand mean is a single average value across all observations, not a mean square or variance estimate.\n\nThe total sum of squares is the unpartitioned overall variation, not the pooled within-treatment variance estimate."
  },
  {
    id: "aee302_ch6_022",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What are the degrees of freedom associated with $S_R^2$, the pooled within-treatment variance estimate?",
    options: [
      "K-1",
      "N-K",
      "N-1",
      "K"
    ],
    correctAnswer: 1,
    explanation: "The section states that N-K is the degree of freedom associated with $S_R^2$.\n\nK-1 is instead the degrees of freedom associated with the treatment (between-sample) variation, $S_T^2$, not $S_R^2$.\n\nN-1 is the total degrees of freedom for the entire design, not specifically for $S_R^2$.\n\nK alone is not a degrees-of-freedom value used anywhere in this unit's ANOVA framework."
  },
  {
    id: "aee302_ch6_023",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Why does $S_R^2$ provide a valid estimate of the population variance $\\sigma^2$ regardless of whether the null hypothesis is true or not?",
    options: [
      "Because it is computed only from within-treatment deviations, which are unaffected by differences between treatment means",
      "Because it is always numerically equal to zero regardless of the data",
      "Because it is computed directly from the grand mean of all observations",
      "Because it ignores every individual observation and uses only the sample sizes"
    ],
    correctAnswer: 0,
    explanation: "The section states that the pooled estimate $S_R^2$ is an estimate of the population variance $\\sigma^2$ which is unknown whether Ho is true or not, because it is built from deviations of observations around their own treatment mean, deviations unaffected by whether the treatment means themselves happen to differ.\n\n$S_R^2$ is not always zero; it reflects genuine within-treatment variability present in the data.\n\n$S_R^2$ is computed from within-treatment deviations around each treatment's own mean, not from the single overall grand mean.\n\n$S_R^2$ is computed from the individual observations within each treatment, not merely from the sample sizes."
  },
  {
    id: "aee302_ch6_024",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "How is the grand mean, $\\bar{\\bar{x}}$, defined across all k treatment groups?",
    options: [
      "The sum of all observations across all groups, divided by the total number of observations, N",
      "The largest individual observation recorded across all groups",
      "The average of just the two most extreme treatment means",
      "The number of treatments, k, divided by the total number of observations, N"
    ],
    correctAnswer: 0,
    explanation: "The section defines the grand mean as $\\bar{\\bar{x}} = \\Sigma\\Sigma x_{ij}/N$, equivalently $\\Sigma n_i \\bar{x}_i / N$, the sum of all observations divided by the total number of observations N.\n\nThe largest individual observation is a single extreme value, not an average across all the data.\n\nAveraging only the two most extreme treatment means would discard information from every other treatment.\n\nDividing k by N produces a ratio of counts, not an average of the response values themselves."
  },
  {
    id: "aee302_ch6_025",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "How is the between-sample variation, $S_T$, defined?",
    options: [
      "$S_T = \\Sigma n_i (\\bar{x}_i - \\bar{\\bar{x}})^2$, summed across all k treatments",
      "$S_T = \\bar{\\bar{x}} - \\bar{x}_i$, for a single treatment only",
      "$S_T = \\Sigma (x_{ij} - \\bar{x}_i)^2$, summed within a single treatment only",
      "$S_T = N - K$"
    ],
    correctAnswer: 0,
    explanation: "The section defines between-sample variation as $S_T = \\Sigma n_i (\\bar{x}_i - \\bar{\\bar{x}})^2$, summed across all k treatment groups.\n\nA single difference between the grand mean and one treatment mean, without squaring or summing across treatments, does not match the sum-of-squares definition given.\n\nSumming squared deviations of individual observations from their own treatment mean, within a single treatment, describes within-treatment variation, not between-sample variation.\n\n$N-K$ is a degrees-of-freedom value, not the between-sample variation itself."
  },
  {
    id: "aee302_ch6_026",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "How is $S_T^2$, the between-sample mean square, computed from $S_T$?",
    options: [
      "$S_T^2 = S_T \\times (K-1)$",
      "$S_T^2 = S_T / N$",
      "$S_T^2 = S_T / (K-1)$",
      "$S_T^2 = S_T + (K-1)$"
    ],
    correctAnswer: 2,
    explanation: "The section defines the between-sample mean square as $S_T^2 = \\Sigma n_i(\\bar{x}_i-\\bar{\\bar{x}})^2 / (K-1) = S_T/(K-1)$.\n\nMultiplying $S_T$ by $K-1$, rather than dividing, inverts the formula's structure.\n\nDividing $S_T$ by $N$, the total number of observations, does not match the treatment degrees of freedom, $K-1$, used in the formula.\n\nAdding $K-1$ to $S_T$ does not match the division the formula actually performs."
  },
  {
    id: "aee302_ch6_027",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Under what condition does $S_T^2$ (the between-sample mean square) also provide a valid estimate of the population variance $\\sigma^2$?",
    options: [
      "Only when the sample sizes across all treatments are exactly equal",
      "Only when the null hypothesis, Ho, is true",
      "Only when the number of treatments, K, exceeds ten",
      "Always, regardless of whether Ho is true or not"
    ],
    correctAnswer: 1,
    explanation: "The section states that if the null hypothesis, Ho, is true, both $S_T^2$ and $S_R^2$ will be estimates of the population variance $\\sigma^2$, but if Ho is not true, only $S_R^2$ remains a valid estimate.\n\nEqual sample sizes across treatments affects whether the design is balanced, not whether $S_T^2$ validly estimates $\\sigma^2$.\n\nThe number of treatments exceeding ten is not a condition mentioned anywhere in the section.\n\n$S_T^2$ is explicitly described as failing to estimate $\\sigma^2$ when Ho is false, so it is not always a valid estimate regardless of Ho."
  },
  {
    id: "aee302_ch6_028",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What does the section say we would expect of the treatment averages if the null hypothesis, Ho, is NOT true?",
    options: [
      "All treatment averages would become exactly equal to the grand mean",
      "Some of the treatment averages would be quite different from the grand mean",
      "Every treatment average would equal zero",
      "The treatment averages would no longer be numerically defined"
    ],
    correctAnswer: 1,
    explanation: "The section states that if Ho is not true, we will expect some of the averages to be quite different from the grand mean.\n\nAll treatment averages becoming exactly equal to the grand mean would instead be the expected pattern if Ho were true, not if it were false.\n\nEvery treatment average equaling zero is not a claim made anywhere in the section.\n\nThe treatment averages remain perfectly well defined regardless of whether Ho is true; the section only discusses how close they are to the grand mean, not whether they exist."
  },
  {
    id: "aee302_ch6_029",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Regarding the degrees of freedom in a balanced completely randomized design's ANOVA table, which of the following is correct?",
    options: [
      "The treatment degrees of freedom are K-1",
      "The total degrees of freedom are N-1",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The ANOVA table given in the section lists the treatment degrees of freedom as K-1.\n\nThe same table lists the total degrees of freedom as N-1.\n\nSince both listed degrees-of-freedom values are genuinely given in the section's ANOVA table, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch6_030",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What is the treatment-effect test statistic specified as in this unit?",
    options: [
      "The variance ratio $F = MST_r / MSE$",
      "The mean difference $\\bar{D} = MST_r - MSE$",
      "The product $MST_r \\times MSE$",
      "The sum $MST_r + MSE$"
    ],
    correctAnswer: 0,
    explanation: "The section states that the treatment effect test statistic is specified as the variance ratio $F = MST_r/MSE$.\n\nA mean difference between $MST_r$ and $MSE$ does not match the ratio structure the section describes.\n\nMultiplying the two mean squares together does not match the division the section specifies.\n\nAdding the two mean squares together does not match the division the section specifies."
  },
  {
    id: "aee302_ch6_031",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "What are the degrees of freedom associated with the treatment-effect test statistic F?",
    options: [
      "$df_1 = N$ and $df_2 = K$",
      "$df_1 = K-1$ and $df_2 = K(n-1)$",
      "$df_1 = K(n-1)$ and $df_2 = K-1$",
      "$df_1 = N-1$ and $df_2 = N-1$"
    ],
    correctAnswer: 1,
    explanation: "The section states that F has degrees of freedom $df_1 = K-1$ and $df_2 = K(n-1)$, the treatment degree of freedom and the error degree of freedom respectively.\n\nUsing $N$ and $K$ directly does not match the degrees-of-freedom formulas the section gives.\n\nSwapping the two degrees of freedom reverses which one corresponds to treatment and which corresponds to error.\n\nUsing $N-1$ for both degrees of freedom does not match the section, which gives two distinct values rather than repeating the total degrees of freedom twice."
  },
  {
    id: "aee302_ch6_032",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Under the test-statistic decision rule for this ANOVA F-test, what conclusion follows if the test statistic is less than the critical F value at the 100$\\alpha$ percent significance level?",
    options: [
      "Accept Ho and conclude no significant treatment differences were detected",
      "Reject Ho and conclude significant treatment differences were detected",
      "The test cannot be completed without collecting additional data",
      "Automatically switch to the P value approach instead"
    ],
    correctAnswer: 0,
    explanation: "The section states that if the test statistic is less than the critical value, we accept the null hypothesis of no difference between the treatments and conclude no significant treatment differences detected.\n\nRejecting Ho and concluding significant differences is the opposite conclusion, which applies when the test statistic exceeds the critical value instead.\n\nThe decision rule reaches a definite conclusion directly from the computed test statistic and critical value, without requiring additional data.\n\nSwitching approaches is not required; the test statistic approach alone yields a complete conclusion here."
  },
  {
    id: "aee302_ch6_033",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "How does the P value approach for this ANOVA F-test operate?",
    options: [
      "If the P value is less than the significance level, accept Ho",
      "If the P value is greater than the significance level, accept Ho",
      "The P value approach cannot be used for comparisons of more than two treatments",
      "If the P value equals exactly zero, accept Ho"
    ],
    correctAnswer: 1,
    explanation: "The section states that the P value approach operates as in previous illustrations: if the P value is greater than the significance level, accept Ho.\n\nAccepting Ho when the P value is less than the significance level reverses the rule; a small P value instead leads to rejecting Ho.\n\nThe section explicitly extends the P value approach to this K-treatment ANOVA setting, so it is not restricted to only two treatments.\n\nA P value of exactly zero would represent the strongest possible evidence against Ho, not a condition for accepting it."
  },
  {
    id: "aee302_ch6_034",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "The residual mean square, $S_R^2$ (MSE), is only a valid estimate of the population variance when the null hypothesis is true.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The section states that $S_R^2$ is an estimate of the population variance $\\sigma^2$ regardless of whether Ho is true or not; it is instead $S_T^2$ that only validly estimates $\\sigma^2$ when Ho is true, contradicting the stem's claim."
  },
  {
    id: "aee302_ch6_035",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "A study measures the coagulation time of blood samples drawn from 24 animals, each randomly assigned to receive one of four diets, A, B, C, or D. What is the experimental unit in this study?",
    options: [
      "Each individual diet, A, B, C, or D",
      "Each individual animal receiving a diet",
      "The entire group of 24 animals treated as one unit",
      "The laboratory where the blood samples were analyzed"
    ],
    correctAnswer: 1,
    explanation: "Recalling the Unit 1 definition, an experimental unit is the physical material to which one application of a treatment is applied; here, each individual animal receives one diet, making the animal the experimental unit.\n\nEach diet is the treatment being applied, not the unit receiving it.\n\nThe entire group of 24 animals is the full set of experimental units collectively, not a single experimental unit itself.\n\nThe laboratory is where analysis takes place, not the unit to which a diet treatment is applied."
  },
  {
    id: "aee302_ch6_036",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In a completely randomized design, each recorded response value in the data table is written with a bracketed number beside it, such as 62(20). What does that bracketed number represent?",
    options: [
      "The unit's body weight in kilograms",
      "The randomized sequence, or order, in which that measurement was taken",
      "The exact response value rounded to the nearest whole number",
      "The treatment group's total number of replicates"
    ],
    correctAnswer: 1,
    explanation: "In the coagulation-time study, the bracketed number beside each recorded value gives the sequence of the experiment, reflecting the randomized order in which each animal's measurement was taken, consistent with the random assignment used in a completely randomized design.\n\nBody weight is not what is recorded in this kind of table; the bracketed number is a run-order label, not a separate measurement.\n\nThe bracketed number is a sequence label running across the whole experiment, not a rounded version of the response value it sits beside.\n\nThe bracketed number is specific to each individual measurement, not a count of its treatment group's total replicates."
  },
  {
    id: "aee302_ch6_037",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In the coagulation-time study, diet A has 4 recorded measurements, diets B and C each have 6, and diet D has 8, totaling 24 animals. What does this unequal replication across diets indicate about the design?",
    options: [
      "The design is unbalanced",
      "The design is balanced",
      "The design is invalid and cannot be analyzed",
      "The design must use exactly equal significance levels for each diet"
    ],
    correctAnswer: 0,
    explanation: "Since the number of replicates differs across the four diets, 4, 6, 6, and 8, this is an unbalanced completely randomized design, requiring the modified formulae described for unequal replication.\n\nA balanced design specifically requires each treatment to be tested the same number of times, which is not the case here.\n\nAn unbalanced design remains analyzable using the modified formulae the section provides; it is not invalid.\n\nSignificance level is a single value chosen for the overall test, not something set separately, equally or otherwise, for each diet."
  },
  {
    id: "aee302_ch6_038",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In the coagulation-time study, diet A's four recorded coagulation times are 62, 60, 63, and 59. What is the mean coagulation time for diet A?",
    options: [
      "60",
      "62",
      "61",
      "63"
    ],
    correctAnswer: 2,
    explanation: "Summing the four values gives $62+60+63+59=244$, and dividing by 4 gives a mean of $244/4=61$.\n\n60 results from mistakenly dividing the sum by a slightly larger divisor than 4.\n\n62 simply restates one of the individual recorded values, not the computed mean of all four.\n\n63 also simply restates one of the individual recorded values, not the computed mean."
  },
  {
    id: "aee302_ch6_039",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In the coagulation-time study, diet A has 4 replicate animals, diets B and C each have 6, and diet D has 8, totaling 24 animals across four diets. Which of the following is true?",
    options: [
      "Diet A had 4 replicate animals",
      "Diet D had 4 replicate animals",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The coagulation-time study's data table shows diet A with 4 recorded coagulation times, matching the first statement.\n\nDiet D has 8 recorded coagulation times, not 4; a diet with only 4 replicates is diet A, not diet D.\n\nSince only the first statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported, the option denying both is not correct."
  },
  {
    id: "aee302_ch6_040",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "In the coagulation-time study, diet C's six recorded coagulation times are 68, 64, 71, 67, 68, and 68. What is the mean coagulation time for diet C, rounded to two decimal places?",
    options: [
      "66.67",
      "67.67",
      "67.00",
      "68.00"
    ],
    correctAnswer: 1,
    explanation: "Summing the six values gives $68+64+71+67+68+68=406$, and dividing by 6 gives a mean of $406/6 \\approx 67.67$.\n\n66.67 results from mistakenly including one fewer unit in the running total before dividing.\n\n67.00 results from a small rounding slip that drops the exact fractional remainder of the true mean.\n\n68.00 simply restates the most frequently recorded individual value, not the computed mean of all six."
  },
  {
    id: "aee302_ch6_041",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Given the diet means in the coagulation-time study (A=61, B=66, C$\\approx$67.67, D=61) and diet totals (A: 244 over 4 animals, B: 396 over 6, C: 406 over 6, D: 488 over 8), what is the grand mean coagulation time across all 24 animals, rounded to two decimal places?",
    options: [
      "63.83",
      "65.00",
      "63.92",
      "64.50"
    ],
    correctAnswer: 2,
    explanation: "Summing all four diet totals gives $244+396+406+488=1534$, and dividing by the total of 24 animals gives a grand mean of $1534/24 \\approx 63.92$.\n\n63.83 results from a small rounding slip in the final division.\n\n65.00 results from mistakenly averaging the four diet means themselves without weighting by each diet's number of animals.\n\n64.50 results from mistakenly dividing the total by 24 after adding an extra measurement that was not actually recorded."
  },
  {
    id: "aee302_ch6_042",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Given the diet means computed for the coagulation-time study (A=61, B=66, C$\\approx$67.67, D=61), which diet shows the highest average coagulation time?",
    options: [
      "Diet A",
      "Diet C",
      "Diet B",
      "Diet D"
    ],
    correctAnswer: 1,
    explanation: "Comparing the four computed diet means, 61, 66, 67.67, and 61, diet C has the highest average coagulation time at approximately 67.67.\n\nDiet A's mean of 61 is the lowest of the four, tied with diet D.\n\nDiet B's mean of 66 is higher than diets A and D but still lower than diet C's mean.\n\nDiet D's mean of 61 is tied for the lowest of the four, not the highest."
  },
  {
    id: "aee302_ch6_043",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For the coagulation-time study's unbalanced design (K=4 diets, N=24 animals), what are the treatment and error degrees of freedom?",
    options: [
      "Treatment df = 4, error df = 24",
      "Treatment df = 3, error df = 23",
      "Treatment df = 3, error df = 20",
      "Treatment df = 4, error df = 20"
    ],
    correctAnswer: 2,
    explanation: "Using treatment df $=K-1=4-1=3$ and, since this design is unbalanced, error df $=N-K=24-4=20$.\n\nTreatment df of 4 mistakenly reports K itself, without subtracting 1, and error df of 24 mistakenly reports N itself, without subtracting K.\n\nError df of 23 mistakenly uses $N-1$, the total degrees of freedom, rather than $N-K$, the error degrees of freedom.\n\nTreatment df of 4 again mistakenly reports K itself, without subtracting 1."
  },
  {
    id: "aee302_ch6_044",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For an unbalanced completely randomized design, the error degrees of freedom become N minus K, the total number of observations minus the number of treatments.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The One Factor Designs section states that for an unbalanced design, the error degrees of freedom become $\\Sigma n_j - k$, equivalent to N minus K, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch6_045",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Suppose the coagulation-time study's design (K=4, N=24, treatment df=3, error df=20) produces a treatment sum of squares $SS_{Tr}=90$ and an error sum of squares $SSE=200$. What is $MST_r$?",
    options: [
      "90",
      "30",
      "10",
      "20"
    ],
    correctAnswer: 1,
    explanation: "Using $MST_r = SS_{Tr}/(K-1) = 90/3 = 30$.\n\n90 simply restates $SS_{Tr}$ itself, without dividing by the treatment degrees of freedom.\n\n10 is instead the value of MSE, computed by dividing SSE by the error degrees of freedom, not $MST_r$.\n\n20 results from mistakenly dividing $SS_{Tr}$ by a divisor of 4.5 rather than the correct treatment degrees of freedom of 3."
  },
  {
    id: "aee302_ch6_046",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design ($SSE=200$, error df=20), what is MSE?",
    options: [
      "200",
      "30",
      "10",
      "4"
    ],
    correctAnswer: 2,
    explanation: "Using $MSE = SSE/(N-K) = 200/20 = 10$.\n\n200 simply restates $SSE$ itself, without dividing by the error degrees of freedom.\n\n30 is instead the value of $MST_r$ computed from $SS_{Tr}$, not MSE.\n\n4 results from mistakenly dividing $SSE$ by a divisor of 50 rather than the correct error degrees of freedom of 20."
  },
  {
    id: "aee302_ch6_047",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design, with $MST_r=30$ and $MSE=10$, what is the F test statistic?",
    options: [
      "300.0",
      "3.0",
      "40.0",
      "0.33"
    ],
    correctAnswer: 1,
    explanation: "Using $F = MST_r/MSE = 30/10 = 3.0$.\n\n300.0 results from mistakenly multiplying $MST_r$ and $MSE$ together instead of dividing.\n\n40.0 results from mistakenly adding $MST_r$ and $MSE$ together instead of dividing.\n\n0.33 results from inverting the ratio, computing $MSE/MST_r$ instead of $MST_r/MSE$."
  },
  {
    id: "aee302_ch6_048",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Regarding the F-test decision rule for a completely randomized design's ANOVA, which of the following is correct?",
    options: [
      "If the test statistic is less than the critical F value, we accept the null hypothesis",
      "If the test statistic is less than the critical F value, we conclude significant treatment differences were detected",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The section states that if the test statistic is less than the critical value, we accept the null hypothesis of no difference between the treatments.\n\nConcluding that significant treatment differences were detected in this case reverses the rule; a test statistic below the critical value leads to accepting Ho, meaning no significant differences were detected.\n\nSince only the first statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly contradicted by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch6_049",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design, the critical F value at $df_1=3, df_2=20$ for a 5% significance level is 3.10. Given the computed $F=3.0$, what is the decision?",
    options: [
      "Reject Ho, since F exceeds the critical value",
      "Accept Ho, since F is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho, since F is below the critical value"
    ],
    correctAnswer: 1,
    explanation: "Since the computed $F=3.0$ is below the critical value of 3.10, the test-statistic decision rule concludes that Ho is accepted, meaning no significant treatment (diet) differences are detected in this design.\n\nRejecting Ho on the grounds that F exceeds the critical value misstates the comparison; 3.0 is slightly below 3.10, not above it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value.\n\nRejecting Ho while correctly noting F is below the critical value still reaches the wrong conclusion; being below the critical value leads to accepting Ho, not rejecting it."
  },
  {
    id: "aee302_ch6_050",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "A separate, balanced one-factor design has $k=3$ treatments with $n=5$ replicates each. What are the treatment and error degrees of freedom?",
    options: [
      "Treatment df = 3, error df = 15",
      "Treatment df = 2, error df = 15",
      "Treatment df = 2, error df = 12",
      "Treatment df = 3, error df = 12"
    ],
    correctAnswer: 2,
    explanation: "Using treatment df $=k-1=3-1=2$ and, since this design is balanced, error df $=k(n-1)=3(5-1)=12$.\n\nTreatment df of 3 mistakenly reports k itself, without subtracting 1, and error df of 15 mistakenly reports $kn$, the total sample size, rather than $k(n-1)$.\n\nTreatment df of 3 again mistakenly reports k itself, without subtracting 1.\n\nError df of 15 again mistakenly reports $kn$, the total sample size, rather than $k(n-1)$."
  },
  {
    id: "aee302_ch6_051",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that design ($k=3$, $n=5$, treatment df=2, error df=12), suppose $SS_{Tr}=60$ and $SSE=96$. What is $MST_r$?",
    options: [
      "60",
      "30",
      "20",
      "8"
    ],
    correctAnswer: 1,
    explanation: "Using $MST_r = SS_{Tr}/(k-1) = 60/2 = 30$.\n\n60 simply restates $SS_{Tr}$ itself, without dividing by the treatment degrees of freedom.\n\n20 results from mistakenly dividing $SS_{Tr}$ by 3 instead of 2.\n\n8 is instead the value of MSE, computed by dividing SSE by the error degrees of freedom, not $MST_r$."
  },
  {
    id: "aee302_ch6_052",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design ($SSE=96$, error df=12), what is MSE?",
    options: [
      "96",
      "48",
      "8",
      "30"
    ],
    correctAnswer: 2,
    explanation: "Using $MSE = SSE/[k(n-1)] = 96/12 = 8$.\n\n96 simply restates $SSE$ itself, without dividing by the error degrees of freedom.\n\n48 results from mistakenly dividing $SSE$ by 2 instead of 12.\n\n30 is instead the value of $MST_r$ computed from $SS_{Tr}$, not MSE."
  },
  {
    id: "aee302_ch6_053",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design, with $MST_r=30$ and $MSE=8$, what is the F test statistic, rounded to two decimal places?",
    options: [
      "240.00",
      "3.75",
      "0.27",
      "38.00"
    ],
    correctAnswer: 1,
    explanation: "Using $F = MST_r/MSE = 30/8 = 3.75$.\n\n240.00 results from mistakenly multiplying $MST_r$ and $MSE$ together instead of dividing.\n\n0.27 results from inverting the ratio, computing $MSE/MST_r$ instead of $MST_r/MSE$.\n\n38.00 results from mistakenly adding $MST_r$ and $MSE$ together instead of dividing."
  },
  {
    id: "aee302_ch6_054",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "The treatment-effect test statistic F is computed as MSE divided by $MST_r$.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The One Factor Designs section states that the treatment effect test statistic is $F = MST_r/MSE$, the treatment mean square divided by the error mean square, not the reverse, contradicting the stem's claim."
  },
  {
    id: "aee302_ch6_055",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design, the critical F value at $df_1=2, df_2=12$ for a 5% significance level is 3.89. Given the computed $F=3.75$, what is the decision?",
    options: [
      "Reject Ho, since F exceeds the critical value",
      "The test is inconclusive at this significance level",
      "Accept Ho, since F is below the critical value",
      "Reject Ho, since F is below the critical value"
    ],
    correctAnswer: 2,
    explanation: "Since the computed $F=3.75$ is below the critical value of 3.89, the decision rule concludes that Ho is accepted, meaning no significant treatment differences are detected.\n\nRejecting Ho on the grounds that F exceeds the critical value misstates the comparison; 3.75 is below 3.89, not above it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value.\n\nRejecting Ho while correctly noting F is below the critical value still reaches the wrong conclusion; being below the critical value leads to accepting Ho, not rejecting it."
  },
  {
    id: "aee302_ch6_056",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "A third one-factor design has $k=3$ treatments with $n=4$ replicates each, and treatment means $\\bar{x}_1=10$, $\\bar{x}_2=14$, and $\\bar{x}_3=18$. What is the grand mean?",
    options: [
      "12",
      "16",
      "14",
      "42"
    ],
    correctAnswer: 2,
    explanation: "Since each treatment has the same number of replicates, the grand mean is the simple average of the treatment means: $(10+14+18)/3=42/3=14$.\n\n12 results from mistakenly averaging only the first two treatment means, 10 and 14.\n\n16 results from mistakenly averaging only the last two treatment means, 14 and 18.\n\n42 simply restates the sum of the three treatment means, without dividing by 3."
  },
  {
    id: "aee302_ch6_057",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that design (grand mean=14, $n=4$ each), using $SS_{Tr}=n\\Sigma(\\bar{x}_i-\\bar{\\bar{x}})^2$, what is $SS_{Tr}$?",
    options: [
      "32",
      "128",
      "64",
      "8"
    ],
    correctAnswer: 1,
    explanation: "The squared deviations from the grand mean are $(10-14)^2=16$, $(14-14)^2=0$, and $(18-14)^2=16$, summing to 32; multiplying by $n=4$ gives $SS_{Tr}=4 \\times 32=128$.\n\n32 is the sum of squared deviations before multiplying by $n$, not the final value of $SS_{Tr}$.\n\n64 results from mistakenly multiplying the sum of squared deviations by 2 instead of 4.\n\n8 results from mistakenly dividing the sum of squared deviations by 4 instead of multiplying."
  },
  {
    id: "aee302_ch6_058",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that design ($SS_{Tr}=128$, $k=3$), what is $MST_r$?",
    options: [
      "128",
      "42.67",
      "64",
      "32"
    ],
    correctAnswer: 2,
    explanation: "Using $MST_r=SS_{Tr}/(k-1)=128/2=64$.\n\n128 simply restates $SS_{Tr}$ itself, without dividing by the treatment degrees of freedom.\n\n42.67 results from mistakenly dividing $SS_{Tr}$ by 3 instead of 2.\n\n32 is the sum of squared deviations before multiplying by $n$, an intermediate value, not $MST_r$."
  },
  {
    id: "aee302_ch6_059",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Which of the following correctly matches a symbol used in this unit's ANOVA framework to what it represents?",
    options: [
      "$S_R^2$ represents the number of treatments in the study",
      "$S_T^2$ represents the within-treatment (residual) mean square",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "$S_R^2$ represents the within-treatment, or residual, mean square, not the number of treatments in the study.\n\n$S_T^2$ represents the between-treatment mean square, not the within-treatment mean square, which is instead represented by $S_R^2$.\n\nSince neither statement correctly describes the quantity it names, the option affirming either or both is not correct.\n\nBecause both statements are incorrect, the option denying both is the correct outcome."
  },
  {
    id: "aee302_ch6_060",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that design ($k=3$, $n=4$ each, error df$=k(n-1)=9$), suppose $SSE=48$. What is MSE, rounded to two decimal places?",
    options: [
      "48.00",
      "5.33",
      "16.00",
      "12.00"
    ],
    correctAnswer: 1,
    explanation: "Using $MSE=SSE/[k(n-1)]=48/9 \\approx 5.33$.\n\n48.00 simply restates $SSE$ itself, without dividing by the error degrees of freedom.\n\n16.00 results from mistakenly dividing $SSE$ by 3 instead of 9.\n\n12.00 results from mistakenly dividing $SSE$ by 4 instead of 9."
  },
  {
    id: "aee302_ch6_061",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design, with $MST_r=64$ and $MSE\\approx5.33$, what is the F test statistic, rounded to one decimal place?",
    options: [
      "0.1",
      "341.3",
      "12.0",
      "58.7"
    ],
    correctAnswer: 2,
    explanation: "Using $F=MST_r/MSE=64/5.33 \\approx 12.0$.\n\n0.1 results from inverting the ratio, computing $MSE/MST_r$ instead of $MST_r/MSE$.\n\n341.3 results from mistakenly multiplying $MST_r$ and $MSE$ together instead of dividing.\n\n58.7 results from mistakenly subtracting $MSE$ from $MST_r$ instead of dividing."
  },
  {
    id: "aee302_ch6_062",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "For that same design, the critical F value at $df_1=2, df_2=9$ for a 5% significance level is 4.26. Given the computed $F\\approx12.0$, what is the decision?",
    options: [
      "Accept Ho, since F is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho, since F is below the critical value",
      "Reject Ho, since F exceeds the critical value"
    ],
    correctAnswer: 3,
    explanation: "Since the computed $F\\approx12.0$ exceeds the critical value of 4.26, the decision rule concludes that Ho is rejected, meaning significant treatment differences are detected in this design.\n\nAccepting Ho on the grounds that F is below the critical value misstates the comparison; 12.0 is well above 4.26, not below it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value.\n\nRejecting Ho is correct here, but justifying it with F being below the critical value misstates the comparison; F exceeds, rather than falls below, the critical value."
  },
  {
    id: "aee302_ch6_063",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Under the P-value approach, if the P-value is greater than the significance level, the null hypothesis of no treatment differences is accepted.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The section states that the P value approach operates as in previous illustrations: if the P value is greater than the significance level, Ho is accepted, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch6_064",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Comparing the three worked ANOVA F-tests, with $F=3.0$ (critical 3.10), $F=3.75$ (critical 3.89), and $F\\approx12.0$ (critical 4.26), which one provides evidence of a real treatment effect?",
    options: [
      "Only the test with $F=3.0$",
      "Only the test with $F=3.75$",
      "Only the test with $F\\approx12.0$",
      "All three tests provide evidence of a real treatment effect"
    ],
    correctAnswer: 2,
    explanation: "Only $F\\approx12.0$ exceeds its corresponding critical value of 4.26, leading to rejecting Ho in that design alone; the other two computed F values, 3.0 and 3.75, both remain below their respective critical values of 3.10 and 3.89.\n\nThe test with $F=3.0$ falls below its critical value of 3.10, so Ho is accepted there, not rejected.\n\nThe test with $F=3.75$ also falls below its critical value of 3.89, so Ho is accepted there as well.\n\nNot all three tests show evidence of a difference; two of the three computed F values fail to exceed their critical values."
  },
  {
    id: "aee302_ch6_065",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "Why does a large F value (MSTr much greater than MSE) suggest that real treatment differences exist?",
    options: [
      "Because MSE always increases sharply whenever treatment differences are present",
      "Because MSTr becomes inflated beyond $\\sigma^2$ only when real treatment mean differences add extra variation, while MSE remains an unbiased estimate of $\\sigma^2$ regardless",
      "Because a large F value always indicates a mistake was made in the data collection",
      "Because F has no meaningful relationship to whether the treatment means actually differ"
    ],
    correctAnswer: 1,
    explanation: "Since MSE is built only from within-treatment deviations and remains an unbiased estimate of $\\sigma^2$ whether or not Ho is true, while MSTr only stays at the level of $\\sigma^2$ when Ho is true and grows larger when real treatment differences exist, a large ratio of MSTr to MSE signals that the between-treatment variation exceeds what random error alone would produce.\n\nMSE does not increase because of treatment differences; it is computed from within-treatment deviations, which are unaffected by how far apart the treatment means are.\n\nA large F value reflects a statistical pattern in the data, not evidence of a data collection mistake.\n\nF is directly built from the same logic used to test for treatment differences, so it has a clear, deliberate relationship to whether the treatment means differ."
  },
  {
    id: "aee302_ch6_066",
    course: "AEE 302",
    chapter: "Chapter 6",
    text: "How does this unit's K-treatment ANOVA F-test (F=MSTr/MSE) differ in purpose from the two-sample F-test for equality of variance introduced in Unit 3?",
    options: [
      "This unit's F-test compares between-treatment variation to within-treatment error variation to test for differences in means, while Unit 3's F-test compares two sample variances directly to test for a difference in variability",
      "The two tests are identical in every respect, including which hypotheses they test",
      "This unit's F-test can only be used with exactly two treatments, exactly like Unit 3's F-test",
      "Unit 3's F-test tests for differences in means, while this unit's F-test tests for differences in variability"
    ],
    correctAnswer: 0,
    explanation: "This unit's ANOVA F-test compares MSTr (between-treatment variation) to MSE (within-treatment error variation) to test whether treatment means differ, while Unit 3's variance ratio F-test instead compares the larger to the smaller of two sample variances directly, to test whether two populations have equal variability, a different hypothesis entirely.\n\nThe two tests share the same F distribution machinery for their decision rule but test fundamentally different hypotheses, so they are not identical in every respect.\n\nThis unit's F-test is specifically built to generalize beyond two treatments to any number K, unlike the description given here.\n\nThe roles are reversed in this option; it is this unit's F-test that concerns differences in treatment means, while Unit 3's F-test concerns differences in variability."
  }
];

export default aee302Chapter6Questions;
