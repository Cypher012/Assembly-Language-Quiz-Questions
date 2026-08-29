import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter7Questions: QuestionV2[] = [
  {
    id: "aee302_ch7_001",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the completely randomized design structure, where does the experimental error associated with the response model arise from?",
    options: [
      "The difference between responses of experimental units within treatments (within-group variation)",
      "The difference between the largest and smallest treatment averages only",
      "The difference between the number of treatments and the number of blocks",
      "The difference between the significance level and the P value"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that in the completely randomized design structure, experimental error arises from the difference between responses of experimental units within treatments, the within-group variation.\n\nThe difference between the largest and smallest treatment averages describes a range calculation, not the source of experimental error described here.\n\nThe difference between the number of treatments and blocks is a design-size comparison, unrelated to the source of error.\n\nThe difference between significance level and P value is a decision-rule comparison from Unit 3, unrelated to this source of error."
  },
  {
    id: "aee302_ch7_002",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How can the influence of within-group experimental error be reduced further, beyond a completely randomized design?",
    options: [
      "By blocking the experiment and obtaining measurements on each treatment in every block",
      "By removing the null hypothesis from the analysis entirely",
      "By reducing the number of treatments being compared to exactly one",
      "By discarding every measurement above the grand mean"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that the influence of this error may be reduced further by blocking the experiment and obtaining measurements on each treatment in every block.\n\nRemoving the null hypothesis is not a variability-reduction technique; a hypothesis is still required for the analysis.\n\nReducing the number of treatments to one would eliminate the comparison being studied altogether, not reduce experimental error within it.\n\nDiscarding measurements above the grand mean would bias the data rather than reduce genuine unexplained variation."
  },
  {
    id: "aee302_ch7_003",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "What benefit does introducing a blocking factor provide for treatment effect analysis?",
    options: [
      "It eliminates the need to ever collect more than one measurement per treatment",
      "It reduces unexplained variation, improving sensitivity and increasing the likelihood of detecting true treatment differences",
      "It guarantees that the null hypothesis will always be rejected",
      "It removes the treatments from the analysis entirely, leaving only the blocks"
    ],
    correctAnswer: 1,
    explanation: "The Randomized Block Design section states that introducing a blocking factor can help reduce the level of unexplained variation, thereby improving the sensitivity of the treatment effect analysis and increasing the likelihood of detecting true treatment differences if they exist.\n\nBlocking does not eliminate the need for replication; measurements are still taken across blocks and treatments as usual.\n\nBlocking does not guarantee rejection of the null hypothesis; it only improves the ability to detect a real difference if one exists.\n\nBlocking adds a second controlled factor alongside the treatments; it does not remove the treatments from the analysis."
  },
  {
    id: "aee302_ch7_004",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Are blocking concepts restricted to one factor designs?",
    options: [
      "Yes, blocking can only ever be used with exactly one treatment factor",
      "No, blocking concepts can also be considered for higher order designs",
      "Yes, but only when the number of blocks exceeds the number of treatments",
      "No, but only if every block contains exactly one observation"
    ],
    correctAnswer: 1,
    explanation: "The Randomized Block Design section states that blocking concepts are not restricted to one factor designs but can also be considered for higher order designs.\n\nBlocking is explicitly described as extending beyond one factor designs, so it is not restricted to exactly one treatment factor.\n\nThe number of blocks exceeding the number of treatments is not a condition placed on where blocking can be used.\n\nA block containing exactly one observation would prevent it from providing a measurement for every treatment, which is required of a block in this design."
  },
  {
    id: "aee302_ch7_005",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "The randomized block design structure is described as essentially an extension of which earlier design structure?",
    options: [
      "The completely randomized design",
      "The paired sample structure",
      "The confidence interval structure",
      "The simple random sampling structure"
    ],
    correctAnswer: 1,
    explanation: "The Randomized Block Design section states that the randomized block design structure is essentially an extension of the paired sample structure, generalizing the paired-differences idea from Unit 5 to more than two treatments.\n\nThe completely randomized design is instead the design randomized block design is being contrasted against, not the structure it is said to extend.\n\nThe confidence interval structure from Unit 4 concerns estimating a range for a location effect, unrelated to this design's structural origin.\n\nSimple random sampling from Unit 2 concerns how individual units are drawn from a population, unrelated to this paired-comparison-based design structure."
  },
  {
    id: "aee302_ch7_006",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the completely randomized design structure, experimental error arises from the difference between responses of experimental units within treatments.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states this directly, describing this within-group variation as the source of experimental error in the completely randomized design, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch7_007",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In a randomized block design, what must each block provide?",
    options: [
      "A response measurement for every treatment",
      "A response measurement for only one randomly chosen treatment",
      "A separate significance level for every treatment",
      "An exact copy of every other block's measurements"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that in this structure, each block provides a response measurement for every treatment.\n\nMeasuring only one randomly chosen treatment per block would prevent each block from providing the complete paired comparison across treatments the design requires.\n\nA separate significance level for every treatment is not part of how blocks are structured; significance level is a single value chosen for the overall decision rule.\n\nBlocks are expected to be similar to one another, not identical copies with the same measurements."
  },
  {
    id: "aee302_ch7_008",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "What kind of groups do the blocks used in a randomized block design generally correspond to?",
    options: [
      "Homogeneous groups, the units of which are similar to one another",
      "Groups deliberately chosen to be as different from one another as possible",
      "Groups containing exactly one experimental unit each",
      "Groups defined only by the order in which data was recorded"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that the blocks used in this structure generally correspond to homogeneous groups, the units of which are similar to one another, giving batches of material as an example.\n\nDeliberately maximizing differences between blocks would undermine the purpose of blocking, which is to group similar units together.\n\nA block containing exactly one unit could not provide a full set of treatment comparisons within it.\n\nGroups defined only by recording order do not match the material-based blocking example, batches of raw material, given in the section."
  },
  {
    id: "aee302_ch7_009",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How is assignment of treatments carried out within a randomized block design?",
    options: [
      "Treatments are assigned completely freely across the whole experiment, ignoring block boundaries",
      "Treatments are randomized within the blocks",
      "Treatments are assigned in a fixed, non-random order chosen in advance for every block",
      "Treatments are assigned so that only the first block ever receives every treatment"
    ],
    correctAnswer: 1,
    explanation: "The Randomized Block Design section states that assignment of the treatments is randomized within the blocks.\n\nAssigning treatments freely across the whole experiment, ignoring block boundaries, describes a completely randomized design, not this blocked structure.\n\nA fixed, non-random order chosen in advance contradicts the randomization the section describes occurring within each block.\n\nEvery block, not only the first, is described as receiving a measurement for each treatment."
  },
  {
    id: "aee302_ch7_010",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "What does it mean to say that \"blocking represents a restriction on randomization\"?",
    options: [
      "That randomization of treatments occurs only within each block, rather than freely across the whole experiment",
      "That randomization is completely forbidden once blocking is introduced",
      "That only the first treatment assigned in each block is considered valid",
      "That the significance level must be restricted to below 1%"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section explains this phrase by noting that treatment assignment is randomized within the blocks, meaning randomization is confined to occurring within each block rather than being applied freely across the entire experiment.\n\nRandomization is not forbidden; it still occurs, just restricted to within each block.\n\nEvery treatment assigned within a block is a valid part of the design, not just the first one.\n\nThe significance level is a separate, user-chosen threshold for the decision rule, unrelated to this restriction on randomization."
  },
  {
    id: "aee302_ch7_011",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In a randomized block design, treatments are assigned completely at random across the whole experiment, without any restriction from blocking.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Randomized Block Design section states the opposite: assignment of treatments is randomized within the blocks, and blocking represents a restriction on randomization, contradicting the stem's claim."
  },
  {
    id: "aee302_ch7_012",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For a randomized block design with k treatments and n blocks, how many total experimental units are there?",
    options: [
      "$k+n$",
      "$k-n$",
      "$kn$",
      "$k/n$"
    ],
    correctAnswer: 2,
    explanation: "The Randomized Block Design section states that there are k experimental units in each block, providing a total of $kn$ experimental units, the same total as in a completely randomized design.\n\nAdding k and n together does not match the multiplicative total the section describes.\n\nSubtracting n from k does not match the multiplicative total the section describes.\n\nDividing k by n does not match the multiplicative total the section describes."
  },
  {
    id: "aee302_ch7_013",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Which of the following is one of the three sources of variation a randomized block design's ANOVA decomposes response variation into?",
    options: [
      "Blocks",
      "Treatments",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The Randomized Block Design section lists blocks as one of the three sources of variation the ANOVA principle decomposes response variation into.\n\nThe same section also lists treatments as another of the three sources.\n\nSince both listed sources are genuinely among the three named in the section, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch7_014",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "What is the key difference between the completely randomized design (CRD) and the randomized block design (RBD)?",
    options: [
      "The RBD includes a blocking factor thought to influence the response, but not requiring full assessment",
      "The RBD never uses replication of any kind",
      "The RBD requires every treatment to be tested exactly once in total",
      "The RBD eliminates the need for a null hypothesis"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that the difference between the CRD and the RBD lies in the inclusion of the blocking factor, which is thought to influence the response but not requiring full assessment.\n\nThe RBD still provides replication in the sense of measuring every treatment across every block, so it does not eliminate replication entirely.\n\nEach treatment is tested once per block, across all n blocks, not just once in the entire experiment.\n\nA null hypothesis is still required for the RBD's hypothesis test, just as it is for the CRD."
  },
  {
    id: "aee302_ch7_015",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How many treatment factors are being investigated in the randomized block design described in this unit?",
    options: [
      "Only one",
      "Exactly two",
      "A number equal to the number of blocks",
      "A number equal to the number of blocks minus one"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that the structure is such that only one treatment factor is being investigated, with blocking serving as the second, non-treatment factor that gives this design its \"2 way ANOVA\" name.\n\nExactly two treatment factors would describe a different, two-factor factorial design, not the single-treatment-factor RBD described here.\n\nThe number of treatment factors is fixed at one regardless of how many blocks are used.\n\nThe number of treatment factors does not depend on the number of blocks minus one; that expression instead gives the block degrees of freedom."
  },
  {
    id: "aee302_ch7_016",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the randomized block design notation, what does $x_{ij}$ represent?",
    options: [
      "The number of blocks used in the entire experiment",
      "The measurement made on the experimental unit in block i receiving treatment j",
      "The critical value used in the decision rule",
      "The total number of treatments being compared"
    ],
    correctAnswer: 1,
    explanation: "The Randomized Block Design section states that $x_{ij}$ is the measurement made on the experimental unit which block i receiving treatment j.\n\nThe number of blocks is represented by $n$, a separate symbol from $x_{ij}$.\n\nThe critical value is looked up from a reference distribution as part of the decision rule, not represented by $x_{ij}$.\n\nThe total number of treatments is represented by $k$, a separate symbol from $x_{ij}$."
  },
  {
    id: "aee302_ch7_017",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How can the hypotheses for a randomized block design experiment be specified?",
    options: [
      "In the same way as those for the CRD: Ho, no difference, versus H1, a treatment difference",
      "Only in terms of the block averages, never the treatment averages",
      "There is no null hypothesis possible for a randomized block design",
      "Only as a one-sided alternative hypothesis, never a general difference"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that hypotheses for an RBD experiment can be specified in the same way as those for the CRD: Ho, no difference, versus Hi, treatment difference, meaning one treatment mean differs in level of response.\n\nThe hypotheses concern the treatment means, not exclusively the block averages.\n\nA null hypothesis, no difference among treatment means, is explicitly stated as part of this test.\n\nThe alternative hypothesis is stated generally, at least one treatment mean differs, not restricted to a one-sided direction."
  },
  {
    id: "aee302_ch7_018",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Into which three sources does the ANOVA principle decompose response variation for a randomized block design?",
    options: [
      "Blocks, treatments, and error",
      "Mean, median, and mode",
      "Population, sample, and estimate",
      "Null hypothesis, alternative hypothesis, and significance level"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states that the ANOVA principle decomposes response variation into the sources specified in the response model: blocks, treatments, and error.\n\nMean, median, and mode are measures of location from Unit 1, not sources of variation in this ANOVA decomposition.\n\nPopulation, sample, and estimate are broader statistical concepts from Unit 2, not the three variation sources named here.\n\nNull hypothesis, alternative hypothesis, and significance level are components of the hypothesis test, not sources of response variation."
  },
  {
    id: "aee302_ch7_019",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "The ANOVA principle for a randomized block design decomposes response variation into three sources: blocks, treatments, and error.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section states this directly, matching the stem's claim exactly, in contrast to the completely randomized design's ANOVA, which decomposes response variation into only two sources: treatment and error."
  },
  {
    id: "aee302_ch7_020",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Based on the additive model, how is the total sum of squares (SST) expressed for a randomized block design?",
    options: [
      "SST = SS Blocks (SSB) $+$ SS Treatment (SSTr) $+$ SS Error (SSE)",
      "SST = SS Blocks (SSB) $\\times$ SS Treatment (SSTr) $\\times$ SS Error (SSE)",
      "SST = SS Blocks (SSB) $-$ SS Treatment (SSTr) $-$ SS Error (SSE)",
      "SST = SS Treatment (SSTr) $\\div$ SS Error (SSE)"
    ],
    correctAnswer: 0,
    explanation: "The Randomized Block Design section expresses the total sum of squares as SST = SSB + SSTr + SSE.\n\nMultiplying the three sum-of-squares terms together does not match the additive decomposition the section describes.\n\nSubtracting the treatment and error terms from the blocks term does not match the additive decomposition given.\n\nDividing the treatment term by the error term omits the blocks term entirely and does not match the additive decomposition."
  },
  {
    id: "aee302_ch7_021",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the ANOVA table for a randomized block design with n blocks, what are the degrees of freedom for the Blocks source of variation?",
    options: [
      "$n$",
      "$n-1$",
      "$n+1$",
      "$kn-1$"
    ],
    correctAnswer: 1,
    explanation: "The ANOVA table given in the Randomized Block Design section lists the Blocks degrees of freedom as $n-1$.\n\n$n$ itself overstates the degrees of freedom by not subtracting 1.\n\n$n+1$ likewise misstates the formula, adding rather than subtracting 1.\n\n$kn-1$ is instead the total degrees of freedom for the whole design, not specifically for the Blocks source."
  },
  {
    id: "aee302_ch7_022",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the ANOVA table for a randomized block design with k treatments, what are the degrees of freedom for the Treatments source of variation?",
    options: [
      "$k$",
      "$k+1$",
      "$k-1$",
      "$(k-1)(n-1)$"
    ],
    correctAnswer: 2,
    explanation: "The ANOVA table given in the Randomized Block Design section lists the Treatments degrees of freedom as $k-1$.\n\n$k$ itself overstates the degrees of freedom by not subtracting 1.\n\n$k+1$ likewise misstates the formula, adding rather than subtracting 1.\n\n$(k-1)(n-1)$ is instead the Error degrees of freedom, not the Treatments degrees of freedom."
  },
  {
    id: "aee302_ch7_023",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the ANOVA table for a randomized block design, what are the degrees of freedom for the Error source of variation?",
    options: [
      "$n-1$",
      "$k-1$",
      "$kn-1$",
      "$(k-1)(n-1)$"
    ],
    correctAnswer: 3,
    explanation: "The ANOVA table given in the Randomized Block Design section lists the Error degrees of freedom as $(k-1)(n-1)$.\n\n$n-1$ is instead the Blocks degrees of freedom, not the Error degrees of freedom.\n\n$k-1$ is instead the Treatments degrees of freedom, not the Error degrees of freedom.\n\n$kn-1$ is instead the Total degrees of freedom for the whole design, not the Error degrees of freedom."
  },
  {
    id: "aee302_ch7_024",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the ANOVA table for a randomized block design, what are the Total degrees of freedom?",
    options: [
      "$kn-1$",
      "$k-1$",
      "$n-1$",
      "$(k-1)(n-1)$"
    ],
    correctAnswer: 0,
    explanation: "The ANOVA table given in the Randomized Block Design section lists the Total degrees of freedom as $kn-1$, matching the total of $kn$ experimental units used across the design.\n\n$k-1$ is instead the Treatments degrees of freedom, not the Total.\n\n$n-1$ is instead the Blocks degrees of freedom, not the Total.\n\n$(k-1)(n-1)$ is instead the Error degrees of freedom, not the Total."
  },
  {
    id: "aee302_ch7_025",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Regarding the degrees of freedom in a randomized block design's ANOVA table, which of the following is correct?",
    options: [
      "The block degrees of freedom are $n-1$",
      "The treatment degrees of freedom are $k-1$",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The ANOVA table given in the section lists the block degrees of freedom as $n-1$.\n\nThe same table lists the treatment degrees of freedom as $k-1$.\n\nSince both listed degrees-of-freedom values are genuinely given in the section's ANOVA table, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch7_026",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Which expression gives the sum of squares for Blocks, $SSB$, in a randomized block design with $k$ treatments and $n$ blocks?",
    options: [
      "$SSB = k\\sum_{i=1}^{n}(\\bar{x}_i - \\bar{\\bar{x}})^2$",
      "$SSB = n\\sum_{j=1}^{k}(\\bar{x}_j - \\bar{\\bar{x}})^2$",
      "$SSB = \\sum_{i=1}^{n}\\sum_{j=1}^{k}(x_{ij} - \\bar{x}_i - \\bar{x}_j + \\bar{\\bar{x}})^2$",
      "$SSB = kn - 1$"
    ],
    correctAnswer: 0,
    explanation: "The ANOVA table given in the section gives $SSB = k\\sum_{i=1}^{n}(\\bar{x}_i - \\bar{\\bar{x}})^2$, summing the squared deviation of each block mean from the grand mean, weighted by $k$.\n\n$n\\sum_{j=1}^{k}(\\bar{x}_j-\\bar{\\bar{x}})^2$ is instead the formula for $SSTr$, the treatment sum of squares, not $SSB$.\n\nThe double summation over $(x_{ij}-\\bar{x}_i-\\bar{x}_j+\\bar{\\bar{x}})^2$ is instead the formula for $SSE$, the error sum of squares, not $SSB$.\n\n$kn-1$ is a degrees-of-freedom value, the Total degrees of freedom, not a sum of squares."
  },
  {
    id: "aee302_ch7_027",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Which expression gives the sum of squares for Treatments, $SSTr$, in a randomized block design with $k$ treatments and $n$ blocks?",
    options: [
      "$SSTr = k\\sum_{i=1}^{n}(\\bar{x}_i - \\bar{\\bar{x}})^2$",
      "$SSTr = n\\sum_{j=1}^{k}(\\bar{x}_j - \\bar{\\bar{x}})^2$",
      "$SSTr = \\sum_{i=1}^{n}\\sum_{j=1}^{k}(x_{ij} - \\bar{x}_i - \\bar{x}_j + \\bar{\\bar{x}})^2$",
      "$SSTr = k-1$"
    ],
    correctAnswer: 1,
    explanation: "The ANOVA table given in the section gives $SSTr = n\\sum_{j=1}^{k}(\\bar{x}_j - \\bar{\\bar{x}})^2$, summing the squared deviation of each treatment mean from the grand mean, weighted by $n$.\n\n$k\\sum_{i=1}^{n}(\\bar{x}_i-\\bar{\\bar{x}})^2$ is instead the formula for $SSB$, the blocks sum of squares, not $SSTr$.\n\nThe double summation over $(x_{ij}-\\bar{x}_i-\\bar{x}_j+\\bar{\\bar{x}})^2$ is instead the formula for $SSE$, the error sum of squares, not $SSTr$.\n\n$k-1$ is a degrees-of-freedom value, the Treatments degrees of freedom, not a sum of squares."
  },
  {
    id: "aee302_ch7_028",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Which expression gives the sum of squares for Error, $SSE$, in a randomized block design with $k$ treatments and $n$ blocks?",
    options: [
      "$SSE = k\\sum_{i=1}^{n}(\\bar{x}_i - \\bar{\\bar{x}})^2$",
      "$SSE = n\\sum_{j=1}^{k}(\\bar{x}_j - \\bar{\\bar{x}})^2$",
      "$SSE = (k-1)(n-1)$",
      "$SSE = \\sum_{i=1}^{n}\\sum_{j=1}^{k}(x_{ij} - \\bar{x}_i - \\bar{x}_j + \\bar{\\bar{x}})^2$"
    ],
    correctAnswer: 3,
    explanation: "The ANOVA table given in the section gives $SSE = \\sum_{i=1}^{n}\\sum_{j=1}^{k}(x_{ij} - \\bar{x}_i - \\bar{x}_j + \\bar{\\bar{x}})^2$, the double sum of each observation's residual after removing its block and treatment effects.\n\n$k\\sum_{i=1}^{n}(\\bar{x}_i-\\bar{\\bar{x}})^2$ is instead the formula for $SSB$, not $SSE$.\n\n$n\\sum_{j=1}^{k}(\\bar{x}_j-\\bar{\\bar{x}})^2$ is instead the formula for $SSTr$, not $SSE$.\n\n$(k-1)(n-1)$ is a degrees-of-freedom value, the Error degrees of freedom, not a sum of squares."
  },
  {
    id: "aee302_ch7_029",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How is $MSB$, the mean square for Blocks, computed?",
    options: [
      "$MSB = SSB/(n-1)$",
      "$MSB = SSB/(k-1)$",
      "$MSB = SSB \\times (n-1)$",
      "$MSB = SSB/(k-1)(n-1)$"
    ],
    correctAnswer: 0,
    explanation: "The ANOVA table given in the section gives $MSB = SSB/(n-1)$, the blocks sum of squares divided by the blocks degrees of freedom.\n\nDividing by $k-1$ instead uses the treatment degrees of freedom, not the block degrees of freedom.\n\nMultiplying rather than dividing by $n-1$ inverts the formula's structure.\n\nDividing by $(k-1)(n-1)$ instead uses the error degrees of freedom, not the block degrees of freedom."
  },
  {
    id: "aee302_ch7_030",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How is $MST_r$, the mean square for Treatments, computed?",
    options: [
      "$MST_r = SSTr/(n-1)$",
      "$MST_r = SSTr \\times (k-1)$",
      "$MST_r = SSTr/(k-1)$",
      "$MST_r = SSTr/(k-1)(n-1)$"
    ],
    correctAnswer: 2,
    explanation: "The ANOVA table given in the section gives $MST_r = SSTr/(k-1)$, the treatment sum of squares divided by the treatment degrees of freedom.\n\nDividing by $n-1$ instead uses the block degrees of freedom, not the treatment degrees of freedom.\n\nMultiplying rather than dividing by $k-1$ inverts the formula's structure.\n\nDividing by $(k-1)(n-1)$ instead uses the error degrees of freedom, not the treatment degrees of freedom."
  },
  {
    id: "aee302_ch7_031",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How is $MSE$, the mean square for Error, computed?",
    options: [
      "$MSE = SSE/(n-1)$",
      "$MSE = SSE/(k-1)$",
      "$MSE = SSE \\times (k-1)(n-1)$",
      "$MSE = SSE/(k-1)(n-1)$"
    ],
    correctAnswer: 3,
    explanation: "The ANOVA table given in the section gives $MSE = SSE/(k-1)(n-1)$, the error sum of squares divided by the error degrees of freedom.\n\nDividing by $n-1$ alone instead uses only the block degrees of freedom, not the full error degrees of freedom.\n\nDividing by $k-1$ alone instead uses only the treatment degrees of freedom, not the full error degrees of freedom.\n\nMultiplying rather than dividing by $(k-1)(n-1)$ inverts the formula's structure."
  },
  {
    id: "aee302_ch7_032",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "The Error degrees of freedom in a randomized block design's ANOVA table are $kn-1$, the same as the Total degrees of freedom.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The ANOVA table given in the section lists the Error degrees of freedom as $(k-1)(n-1)$, a distinct value from the Total degrees of freedom, $kn-1$, contradicting the stem's claim."
  },
  {
    id: "aee302_ch7_033",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Determination of a treatment effect in a randomized block design is based on the ratio of which two quantities?",
    options: [
      "Treatment mean square (between treatment variation) to error mean square (within treatment variation)",
      "Block mean square to treatment mean square",
      "Total sum of squares to error sum of squares",
      "Significance level to P value"
    ],
    correctAnswer: 0,
    explanation: "The section states that determination of a treatment effect is based on the ratio of treatment mean square, between treatment variation, to error mean square, within treatment variation.\n\nThe ratio of block mean square to treatment mean square is not a test statistic described anywhere in the section.\n\nThe ratio of total to error sum of squares is not the treatment effect test statistic; it instead mixes sum-of-squares terms rather than the mean-square ratio described.\n\nSignificance level and P value are compared directly to each other under the P-value decision rule, not combined into a treatment effect test statistic."
  },
  {
    id: "aee302_ch7_034",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Determination of a block effect in a randomized block design is based on the ratio of which two quantities?",
    options: [
      "Block mean square (between block variation) to error mean square",
      "Treatment mean square to block mean square",
      "Block sum of squares to treatment sum of squares",
      "The number of blocks to the number of treatments"
    ],
    correctAnswer: 0,
    explanation: "The section states that the block effect is based on the ratio of block mean square, between block variation, to error mean square.\n\nThe ratio of treatment mean square to block mean square is not the test statistic described for the block effect.\n\nThe ratio of block to treatment sum of squares mixes sum-of-squares terms rather than the mean-square ratio the section describes.\n\nThe ratio of the number of blocks to the number of treatments is a design-size ratio, not a test statistic."
  },
  {
    id: "aee302_ch7_035",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "What is the treatment effect test statistic, and what are its degrees of freedom?",
    options: [
      "$F = MST_r/MSE$, with $df_1 = k-1$ and $df_2 = (n-1)(k-1)$",
      "$F = MSB/MSE$, with $df_1 = n-1$ and $df_2 = (n-1)(k-1)$",
      "$F = MST_r/MSB$, with $df_1 = k-1$ and $df_2 = n-1$",
      "$F = MSE/MST_r$, with $df_1 = (n-1)(k-1)$ and $df_2 = k-1$"
    ],
    correctAnswer: 0,
    explanation: "The section gives the treatment effect test statistic as $F = MST_r/MSE$, with $df_1 = k-1$ and $df_2 = (n-1)(k-1)$, the treatment degrees of freedom and the error degrees of freedom.\n\n$F = MSB/MSE$ with $df_1=n-1$ is instead the block effect test statistic, not the treatment effect test statistic.\n\n$F = MST_r/MSB$ is not a ratio described anywhere in the section; treatment and block mean squares are each compared to error, not to each other.\n\nInverting the ratio to $MSE/MST_r$ does not match the variance ratio the section defines for the treatment effect."
  },
  {
    id: "aee302_ch7_036",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "What is the block effect test statistic, and what are its degrees of freedom?",
    options: [
      "$F = MST_r/MSE$, with $df_1 = k-1$ and $df_2 = (n-1)(k-1)$",
      "$F = MSB/MST_r$, with $df_1 = n-1$ and $df_2 = k-1$",
      "$F = MSB/MSE$, with $df_1 = n-1$ and $df_2 = (n-1)(k-1)$",
      "$F = MSE/MSB$, with $df_1 = (n-1)(k-1)$ and $df_2 = n-1$"
    ],
    correctAnswer: 2,
    explanation: "The section gives the block effect test statistic as $F = MSB/MSE$, with $df_1 = n-1$ and $df_2 = (n-1)(k-1)$.\n\n$F = MST_r/MSE$ with $df_1=k-1$ is instead the treatment effect test statistic, not the block effect test statistic.\n\n$F = MSB/MST_r$ is not a ratio described anywhere in the section; block and treatment mean squares are each compared to error, not to each other.\n\nInverting the ratio to $MSE/MSB$ does not match the variance ratio the section defines for the block effect."
  },
  {
    id: "aee302_ch7_037",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Under the test-statistic decision rule for a randomized block design, what is concluded if the test statistic is less than the critical value?",
    options: [
      "Accept Ho and conclude no treatment differences detected",
      "Reject Ho and conclude significant treatment differences were detected",
      "The test cannot be completed without a P value",
      "Automatically increase the significance level and retest"
    ],
    correctAnswer: 0,
    explanation: "The section states that the test statistic approach is based on the same form of decision rule as previously: test statistic less than critical value implies accept Ho and no treatment differences detected.\n\nRejecting Ho and concluding significant differences is the opposite conclusion, which applies when the test statistic exceeds the critical value instead.\n\nThe test-statistic approach reaches a complete conclusion on its own, without requiring a P value as well.\n\nIncreasing the significance level and retesting is not part of the stated decision rule."
  },
  {
    id: "aee302_ch7_038",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Under the P value approach for a randomized block design, what is concluded if the P value is greater than the significance level?",
    options: [
      "Accept Ho",
      "Reject Ho and accept H1",
      "The test statistic approach must be used instead",
      "The experiment must be repeated with more blocks"
    ],
    correctAnswer: 0,
    explanation: "The section states that the P value approach depends on whether the P value is greater than the significance level: if so, accept Ho.\n\nRejecting Ho and accepting H1 describes the opposite conclusion, which follows when the P value is less than the significance level instead.\n\nThe P value approach is a complete, standalone decision rule; it does not require also using the test statistic approach.\n\nRepeating the experiment with more blocks is not part of the stated decision rule."
  },
  {
    id: "aee302_ch7_039",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "The block effect test statistic is computed as $MSB$ divided by $MST_r$.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The section states that the block effect test statistic is $F = MSB/MSE$, the block mean square divided by the error mean square, not by $MST_r$, contradicting the stem's claim."
  },
  {
    id: "aee302_ch7_040",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the penicillin manufacturing study, what response is of primary interest, and how many process varieties (treatments) are studied?",
    options: [
      "Yield, with K=4 process varieties denoted A, B, C, and D",
      "Cost, with K=5 process varieties denoted A through E",
      "Purity, with K=4 process varieties denoted A, B, C, and D",
      "Yield, with K=5 process varieties denoted A through E"
    ],
    correctAnswer: 0,
    explanation: "The example states that yield was the response of primary interest, with K=4 varieties in the basic process studied, denoted as treatments A, B, C, and D.\n\nCost is not the response measured in this example.\n\nPurity is not the response measured in this example; yield is the response of primary interest.\n\nThe study uses 4 process varieties, not 5; five is instead the number of Corn Steep Liquor blends used as blocks."
  },
  {
    id: "aee302_ch7_041",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the penicillin manufacturing study, what serves as the blocking factor, and how many blocks are used?",
    options: [
      "Corn Steep Liquor, with n=5 blends serving as blocks",
      "The four process varieties, with n=4 blocks",
      "The manufacturing facility, with n=10 locations serving as blocks",
      "Corn Steep Liquor, with n=4 blends serving as blocks"
    ],
    correctAnswer: 0,
    explanation: "The example states that Corn Steep Liquor is an important material affecting yield, with n=5 blends of this material serving as the blocks.\n\nThe four process varieties are the treatments being compared, not the blocking factor.\n\nManufacturing facility location is never mentioned in this example as a blocking factor.\n\nThe example uses 5 blends, not 4; four is instead the number of treatments."
  },
  {
    id: "aee302_ch7_042",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "How was the penicillin manufacturing experiment run within each block?",
    options: [
      "In a random order",
      "In alphabetical order of treatment label",
      "In the exact same fixed order for every block",
      "In order of decreasing expected yield"
    ],
    correctAnswer: 0,
    explanation: "The example states that the experiment was run in a random order within each block, consistent with treatment assignment being randomized within blocks in a randomized block design.\n\nAlphabetical order of treatment label is not how the section describes the run order within each block.\n\nA fixed, identical order for every block would not be a randomized run order, contradicting the example's description.\n\nOrdering by decreasing expected yield is not possible before the experiment is run, since yields are the outcome being measured, not known in advance."
  },
  {
    id: "aee302_ch7_043",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "What two questions does the penicillin manufacturing example pose about the data?",
    options: [
      "Whether all four treatments are the same, and whether all five blends are the same",
      "Whether the significance level should be 5% or 1%, and nothing else",
      "Only whether all four treatments are the same",
      "Only whether all five blends are the same"
    ],
    correctAnswer: 0,
    explanation: "The example asks (i) is there evidence to show that all four treatments are the same, and (ii) is there evidence to show that the five blends of the corn steep liquor are the same, illustrating that a randomized block design lets both a treatment effect and a block effect be tested.\n\nChoosing a significance level is a general step in any hypothesis test, not one of the two specific questions this example poses.\n\nThe example poses two questions, not only the treatment question.\n\nThe example poses two questions, not only the blend question."
  },
  {
    id: "aee302_ch7_044",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Regarding the penicillin manufacturing example (K=4 treatments, n=5 blends of Corn Steep Liquor), which of the following is true?",
    options: [
      "Corn Steep Liquor blends serve as the blocks",
      "The experiment used exactly 4 blocks",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The example states that the n=5 blends of Corn Steep Liquor serve as the blocks in this randomized block design.\n\nThe experiment used 5 blocks, one for each blend, not 4; four is instead the number of treatments (process varieties).\n\nSince only the first statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly contradicted by the example, the option denying both is not correct."
  },
  {
    id: "aee302_ch7_045",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the penicillin study, the treatment averages are reported as A=84, B=85, C=89, and D=86. Which treatment shows the highest average yield?",
    options: [
      "Treatment A",
      "Treatment B",
      "Treatment C",
      "Treatment D"
    ],
    correctAnswer: 2,
    explanation: "Comparing the four reported treatment averages, 84, 85, 89, and 86, treatment C has the highest average yield at 89.\n\nTreatment A's average of 84 is the lowest of the four.\n\nTreatment B's average of 85 is higher than A but still lower than C.\n\nTreatment D's average of 86 is higher than A and B but still lower than C."
  },
  {
    id: "aee302_ch7_046",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the penicillin study, the first blend (block) gives yields of 89, 88, 97, and 94 for treatments A, B, C, and D respectively. What is the block average for this blend?",
    options: [
      "89",
      "92",
      "94",
      "97"
    ],
    correctAnswer: 1,
    explanation: "Summing the four values gives $89+88+97+94=368$, and dividing by 4 treatments gives a block average of $368/4=92$.\n\n89 simply restates one of the individual recorded values, not the computed average of all four.\n\n94 also simply restates one of the individual recorded values, not the computed average.\n\n97 also simply restates one of the individual recorded values, not the computed average."
  },
  {
    id: "aee302_ch7_047",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "In the penicillin study, the fourth blend (block) gives yields of 87, 92, 89, and 84 for treatments A, B, C, and D respectively. What is the block average for this blend?",
    options: [
      "84",
      "87",
      "88",
      "92"
    ],
    correctAnswer: 2,
    explanation: "Summing the four values gives $87+92+89+84=352$, and dividing by 4 treatments gives a block average of $352/4=88$.\n\n84 simply restates one of the individual recorded values, not the computed average of all four.\n\n87 also simply restates one of the individual recorded values, not the computed average.\n\n92 also simply restates one of the individual recorded values, not the computed average."
  },
  {
    id: "aee302_ch7_048",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Under the P-value approach for a randomized block design, if the P-value is greater than the significance level, the null hypothesis is accepted.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The section states that the P value approach depends on whether the P value is greater than the significance level: if so, Ho is accepted, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch7_049",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "A randomized block design has $k=4$ treatments and $n=5$ blocks. What are the Blocks, Treatments, Error, and Total degrees of freedom?",
    options: [
      "Blocks=5, Treatments=4, Error=20, Total=19",
      "Blocks=4, Treatments=3, Error=12, Total=19",
      "Blocks=4, Treatments=5, Error=12, Total=19",
      "Blocks=4, Treatments=3, Error=12, Total=20"
    ],
    correctAnswer: 1,
    explanation: "Using Blocks df$=n-1=5-1=4$, Treatments df$=k-1=4-1=3$, Error df$=(k-1)(n-1)=3 \\times 4=12$, and Total df$=kn-1=20-1=19$.\n\nReporting Blocks=5 and Treatments=4 mistakenly uses $n$ and $k$ directly, without subtracting 1 from either.\n\nSwapping Blocks and Treatments values reverses which degrees of freedom belongs to which source.\n\nReporting Total=20 mistakenly uses $kn$ itself, without subtracting 1."
  },
  {
    id: "aee302_ch7_050",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design ($k=4$, $n=5$, Blocks df=4, Treatments df=3, Error df=12), suppose $SSB=50$. What is $MSB$?",
    options: [
      "50",
      "12.5",
      "16.67",
      "4"
    ],
    correctAnswer: 1,
    explanation: "Using $MSB=SSB/(n-1)=50/4=12.5$.\n\n50 simply restates $SSB$ itself, without dividing by the blocks degrees of freedom.\n\n16.67 results from mistakenly dividing $SSB$ by 3 instead of 4.\n\n4 is instead the blocks degrees of freedom itself, not the computed $MSB$."
  },
  {
    id: "aee302_ch7_051",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that same design (Treatments df=3), suppose $SSTr=90$. What is $MST_r$?",
    options: [
      "90",
      "45",
      "30",
      "22.5"
    ],
    correctAnswer: 2,
    explanation: "Using $MST_r=SSTr/(k-1)=90/3=30$.\n\n90 simply restates $SSTr$ itself, without dividing by the treatment degrees of freedom.\n\n45 results from mistakenly dividing $SSTr$ by 2 instead of 3.\n\n22.5 results from mistakenly dividing $SSTr$ by 4 instead of 3."
  },
  {
    id: "aee302_ch7_052",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that same design (Error df=12), suppose $SSE=120$. What is $MSE$?",
    options: [
      "120",
      "10",
      "60",
      "24"
    ],
    correctAnswer: 1,
    explanation: "Using $MSE=SSE/[(k-1)(n-1)]=120/12=10$.\n\n120 simply restates $SSE$ itself, without dividing by the error degrees of freedom.\n\n60 results from mistakenly dividing $SSE$ by 2 instead of 12.\n\n24 results from mistakenly dividing $SSE$ by 5 instead of 12."
  },
  {
    id: "aee302_ch7_053",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design, with $MST_r=30$ and $MSE=10$, what is the treatment effect F test statistic?",
    options: [
      "300.0",
      "3.0",
      "40.0",
      "0.33"
    ],
    correctAnswer: 1,
    explanation: "Using $F=MST_r/MSE=30/10=3.0$.\n\n300.0 results from mistakenly multiplying $MST_r$ and $MSE$ together instead of dividing.\n\n40.0 results from mistakenly adding $MST_r$ and $MSE$ together instead of dividing.\n\n0.33 results from inverting the ratio, computing $MSE/MST_r$ instead of $MST_r/MSE$."
  },
  {
    id: "aee302_ch7_054",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design, the critical F value for the treatment effect at $df_1=3, df_2=12$ for a 5% significance level is 3.49. Given the computed treatment $F=3.0$, what is the decision?",
    options: [
      "Reject Ho, since F exceeds the critical value",
      "Accept Ho, since F is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho, since F is below the critical value"
    ],
    correctAnswer: 1,
    explanation: "Since the computed treatment $F=3.0$ is below the critical value of 3.49, the decision rule concludes that Ho is accepted, meaning no significant treatment differences are detected.\n\nRejecting Ho on the grounds that F exceeds the critical value misstates the comparison; 3.0 is below 3.49, not above it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value.\n\nRejecting Ho while correctly noting F is below the critical value still reaches the wrong conclusion; being below the critical value leads to accepting Ho, not rejecting it."
  },
  {
    id: "aee302_ch7_055",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that same design, with $MSB=12.5$ and $MSE=10$, what is the block effect F test statistic?",
    options: [
      "125.0",
      "22.5",
      "0.8",
      "1.25"
    ],
    correctAnswer: 3,
    explanation: "Using $F=MSB/MSE=12.5/10=1.25$.\n\n125.0 results from mistakenly multiplying $MSB$ and $MSE$ together instead of dividing.\n\n22.5 results from mistakenly adding $MSB$ and $MSE$ together instead of dividing.\n\n0.8 results from inverting the ratio, computing $MSE/MSB$ instead of $MSB/MSE$."
  },
  {
    id: "aee302_ch7_056",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design, the critical F value for the block effect at $df_1=4, df_2=12$ for a 5% significance level is 3.26. Given the computed block $F=1.25$, what is the decision?",
    options: [
      "Reject Ho, since F is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho, since F exceeds the critical value",
      "Accept Ho, since F is below the critical value"
    ],
    correctAnswer: 3,
    explanation: "Since the computed block $F=1.25$ is below the critical value of 3.26, the decision rule concludes that Ho is accepted, meaning no significant block (blend) differences are detected.\n\nRejecting Ho while correctly noting F is below the critical value still reaches the wrong conclusion; being below the critical value leads to accepting Ho, not rejecting it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value.\n\nRejecting Ho on the grounds that F exceeds the critical value misstates the comparison; 1.25 is below 3.26, not above it."
  },
  {
    id: "aee302_ch7_057",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Which of the following correctly describes a test statistic used in randomized block design analysis?",
    options: [
      "The treatment effect F-test uses $df_1=k-1$ and $df_2=(n-1)(k-1)$",
      "The block effect F-test uses $df_1=k-1$ and $df_2=(n-1)(k-1)$",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The section states that the treatment effect F-test uses $df_1=k-1$ and $df_2=(n-1)(k-1)$, matching the first statement exactly.\n\nThe block effect F-test instead uses $df_1=n-1$, not $k-1$; $k-1$ belongs to the treatment effect test, not the block effect test.\n\nSince only the first statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly contradicted by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch7_058",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "A separate randomized block design has $k=3$ treatments and $n=4$ blocks. What are the Blocks, Treatments, and Error degrees of freedom?",
    options: [
      "Blocks=4, Treatments=3, Error=12",
      "Blocks=3, Treatments=2, Error=6",
      "Blocks=3, Treatments=4, Error=6",
      "Blocks=4, Treatments=2, Error=8"
    ],
    correctAnswer: 1,
    explanation: "Using Blocks df$=n-1=4-1=3$, Treatments df$=k-1=3-1=2$, and Error df$=(k-1)(n-1)=2 \\times 3=6$.\n\nReporting Blocks=4 and Treatments=3 mistakenly uses $n$ and $k$ directly, without subtracting 1 from either.\n\nSwapping Blocks and Treatments values reverses which degrees of freedom belongs to which source.\n\nReporting Error=8 results from mistakenly computing $k \\times n - 4$ rather than $(k-1)(n-1)$."
  },
  {
    id: "aee302_ch7_059",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design (Blocks df=3), suppose $SSB=18$. What is $MSB$?",
    options: [
      "18",
      "9",
      "6",
      "4.5"
    ],
    correctAnswer: 2,
    explanation: "Using $MSB=SSB/(n-1)=18/3=6$.\n\n18 simply restates $SSB$ itself, without dividing by the blocks degrees of freedom.\n\n9 results from mistakenly dividing $SSB$ by 2 instead of 3.\n\n4.5 results from mistakenly dividing $SSB$ by 4 instead of 3."
  },
  {
    id: "aee302_ch7_060",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that same design (Treatments df=2), suppose $SSTr=80$. What is $MST_r$?",
    options: [
      "80",
      "40",
      "26.67",
      "160"
    ],
    correctAnswer: 1,
    explanation: "Using $MST_r=SSTr/(k-1)=80/2=40$.\n\n80 simply restates $SSTr$ itself, without dividing by the treatment degrees of freedom.\n\n26.67 results from mistakenly dividing $SSTr$ by 3 instead of 2.\n\n160 results from mistakenly multiplying $SSTr$ by 2 instead of dividing."
  },
  {
    id: "aee302_ch7_061",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that same design (Error df=6), suppose $SSE=24$. What is $MSE$?",
    options: [
      "24",
      "12",
      "4",
      "8"
    ],
    correctAnswer: 2,
    explanation: "Using $MSE=SSE/[(k-1)(n-1)]=24/6=4$.\n\n24 simply restates $SSE$ itself, without dividing by the error degrees of freedom.\n\n12 results from mistakenly dividing $SSE$ by 2 instead of 6.\n\n8 results from mistakenly dividing $SSE$ by 3 instead of 6."
  },
  {
    id: "aee302_ch7_062",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "The randomized block design's ANOVA table structure is completely different from the CRD's, sharing no similarities.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Randomized Block Design section states the opposite: the structure of the ANOVA table mirrors that associated with a CRD structure, with an additional controlled component, the block effect, incorporated, contradicting the stem's claim that the two share no similarities."
  },
  {
    id: "aee302_ch7_063",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design, with $MST_r=40$ and $MSE=4$, what is the treatment effect F test statistic?",
    options: [
      "0.1",
      "160.0",
      "10.0",
      "44.0"
    ],
    correctAnswer: 2,
    explanation: "Using $F=MST_r/MSE=40/4=10.0$.\n\n0.1 results from inverting the ratio, computing $MSE/MST_r$ instead of $MST_r/MSE$.\n\n160.0 results from mistakenly multiplying $MST_r$ and $MSE$ together instead of dividing.\n\n44.0 results from mistakenly adding $MST_r$ and $MSE$ together instead of dividing."
  },
  {
    id: "aee302_ch7_064",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design, the critical F value for the treatment effect at $df_1=2, df_2=6$ for a 5% significance level is 5.14. Given the computed treatment $F=10.0$, what is the decision?",
    options: [
      "Accept Ho, since F is below the critical value",
      "The test is inconclusive at this significance level",
      "Reject Ho, since F is below the critical value",
      "Reject Ho, since F exceeds the critical value"
    ],
    correctAnswer: 3,
    explanation: "Since the computed treatment $F=10.0$ exceeds the critical value of 5.14, the decision rule concludes that Ho is rejected, meaning significant treatment differences are detected in this design.\n\nAccepting Ho on the grounds that F is below the critical value misstates the comparison; 10.0 is well above 5.14, not below it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value.\n\nRejecting Ho is correct here, but justifying it with F being below the critical value misstates the comparison; F exceeds, rather than falls below, the critical value."
  },
  {
    id: "aee302_ch7_065",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that same design, with $MSB=6$ and $MSE=4$, what is the block effect F test statistic?",
    options: [
      "24.0",
      "10.0",
      "0.67",
      "1.5"
    ],
    correctAnswer: 3,
    explanation: "Using $F=MSB/MSE=6/4=1.5$.\n\n24.0 results from mistakenly multiplying $MSB$ and $MSE$ together instead of dividing.\n\n10.0 results from mistakenly adding $MSB$ and $MSE$ together instead of dividing.\n\n0.67 results from inverting the ratio, computing $MSE/MSB$ instead of $MSB/MSE$."
  },
  {
    id: "aee302_ch7_066",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "For that design, the critical F value for the block effect at $df_1=3, df_2=6$ for a 5% significance level is 4.76. Given the computed block $F=1.5$, what is the decision?",
    options: [
      "Reject Ho, since F exceeds the critical value",
      "Reject Ho, since F is below the critical value",
      "The test is inconclusive at this significance level",
      "Accept Ho, since F is below the critical value"
    ],
    correctAnswer: 3,
    explanation: "Since the computed block $F=1.5$ is below the critical value of 4.76, the decision rule concludes that Ho is accepted, meaning no significant block differences are detected in this design.\n\nRejecting Ho on the grounds that F exceeds the critical value misstates the comparison; 1.5 is below 4.76, not above it.\n\nRejecting Ho while correctly noting F is below the critical value still reaches the wrong conclusion; being below the critical value leads to accepting Ho, not rejecting it.\n\nCalling the test inconclusive contradicts the rule, which gives a definite conclusion once F is compared to the critical value."
  },
  {
    id: "aee302_ch7_067",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Regarding the two worked randomized block ANOVA scenarios in this unit (one with $k=4, n=5$ and one with $k=3, n=4$), which of the following is true?",
    options: [
      "The $k=4, n=5$ scenario showed a significant treatment effect",
      "The $k=3, n=4$ scenario showed a significant treatment effect",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The $k=3, n=4$ scenario produced a treatment $F=10.0$, which exceeded its critical value of 5.14, showing a significant treatment effect.\n\nThe $k=4, n=5$ scenario instead produced a treatment $F=3.0$, which stayed below its critical value of 3.49, showing no significant treatment effect.\n\nSince only the second statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported, the option denying both is not correct."
  },
  {
    id: "aee302_ch7_068",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Comparing the treatment effect results from the two worked randomized block scenarios, why might the $k=3, n=4$ design have detected a significant treatment effect while the $k=4, n=5$ design did not?",
    options: [
      "Because the $k=3, n=4$ design had a much larger treatment mean square relative to its error mean square, producing a bigger F ratio",
      "Because the $k=3, n=4$ design used more blocks than the $k=4, n=5$ design",
      "Because significance can only ever be detected when there are exactly three treatments",
      "Because the $k=4, n=5$ design's data was recorded incorrectly"
    ],
    correctAnswer: 0,
    explanation: "In the $k=3, n=4$ design, $MST_r=40$ against $MSE=4$ produced $F=10.0$, far exceeding its critical value, while in the $k=4, n=5$ design, $MST_r=30$ against $MSE=10$ produced only $F=3.0$; the relative size of the treatment mean square compared to the error mean square, not merely the raw sum-of-squares values, determines whether a significant effect is detected.\n\nThe $k=3, n=4$ design actually used fewer blocks, 4, than the $k=4, n=5$ design's 5 blocks, not more.\n\nSignificance depends on the computed F ratio relative to its critical value, not on always having exactly three treatments.\n\nNothing in either scenario suggests a data recording error; both are simply invented numeric examples illustrating different possible outcomes of the same test."
  },
  {
    id: "aee302_ch7_069",
    course: "AEE 302",
    chapter: "Chapter 7",
    text: "Why does a randomized block design allow both a treatment effect and a block effect to be tested, unlike a completely randomized design?",
    options: [
      "Because the RBD's ANOVA decomposes response variation into blocks, treatments, and error, giving each of blocks and treatments its own mean square to compare against the error mean square",
      "Because the RBD always uses more experimental units in total than a CRD with the same number of treatments",
      "Because the RBD replaces the error term entirely with the block term",
      "Because a block effect test is mathematically identical to a treatment effect test in every case"
    ],
    correctAnswer: 0,
    explanation: "Since the RBD's ANOVA splits response variation into three sources, blocks, treatments, and error, rather than the CRD's two sources, treatment and error, both the block mean square and the treatment mean square can each be separately compared against the error mean square, yielding two distinct F-tests.\n\nA RBD with $k$ treatments and $n$ blocks uses $kn$ experimental units, the same total a CRD would use with $n$ replicates per treatment, not more.\n\nThe error term remains a distinct source in the RBD's decomposition; it is not replaced by the block term, which is instead an additional, separate source.\n\nThe block effect test statistic, $F=MSB/MSE$, uses different degrees of freedom and a different numerator from the treatment effect test statistic, $F=MST_r/MSE$, so the two are not mathematically identical."
  }
];

export default aee302Chapter7Questions;
