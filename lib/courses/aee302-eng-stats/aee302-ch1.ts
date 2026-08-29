import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter1Questions: QuestionV2[] = [
  {
    id: "aee302_ch1_001",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "How is statistics best defined?",
    options: [
      "A comprehensive administrative framework for certifying laboratory technicians and approving experimental research budgets",
      "The scientific study of numerical data based on natural phenomena",
      "A branch of geometric mathematics only",
      "A method for designing equipment",
    ],
    correctAnswer: 1,
    explanation:
      "The Introduction section defines statistics as the scientific study of numerical data based on natural phenomena.\n\nCertifying technicians and approving budgets are administrative tasks never mentioned in the section, unlike the correct definition.\n\nGeometric mathematics is a separate branch of mathematics not named in the section's definition.\n\nDesigning equipment is not part of the definition given for statistics in the section.",
  },
  {
    id: "aee302_ch1_002",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which activity is listed among the things the science of statistics deals with?",
    options: [
      "Certifying laboratory technicians for competence before they are permitted to run experiments",
      "Publishing detailed research funding reports for external review committees",
      "Collecting and summarizing experimental and survey data",
      "Manufacturing measurement tools",
    ],
    correctAnswer: 2,
    explanation:
      "The Introduction section lists collecting and summarizing data among the six activities that the science of statistics deals with.\n\nCertifying laboratory technicians is not among the six listed activities in the section.\n\nPublishing research funding reports is not mentioned anywhere in the section's list.\n\nManufacturing measurement tools is a physical task not named among the listed activities.",
  },
  {
    id: "aee302_ch1_003",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "A researcher is given the general formula for the area of a circle and asked to compute the area for a circle of a specific diameter. Which type of reasoning does this represent?",
    options: [
      "Randomization, which reduces bias in experimental results through unit selection and run order",
      "Deductive reasoning, moving from a general principle to a specific case",
      "Inductive reasoning",
      "Random error",
    ],
    correctAnswer: 1,
    explanation:
      "The Deductive and Inductive Reasoning section describes deductive reasoning as moving from a general principle to a particular case, using exactly this circle-area example.\n\nRandomization is an unrelated experimental design concern about selecting units and run order, not a type of reasoning.\n\nInductive reasoning instead moves from specific cases toward a general principle, the reverse of what is happening here.\n\nRandom error causes response measurements to fall either side of a target, unrelated to this reasoning task.",
  },
  {
    id: "aee302_ch1_004",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "A scientist records the areas and diameters of several circles and tries to derive a general formula relating the two. Which type of reasoning is being used?",
    options: [
      "Confounding, which sacrifices certain treatment effect information indistinguishable from block effects entirely",
      "Blocking, which groups experimental units into homogeneous sets to remove variation",
      "Inductive reasoning, moving from specific cases toward a general principle",
      "Deductive reasoning",
    ],
    correctAnswer: 2,
    explanation:
      "The Deductive and Inductive Reasoning section describes inductive reasoning as moving from specific cases to a general principle, using exactly this circle example.\n\nConfounding is an experimental design term about sacrificed treatment information, entirely unrelated to reasoning direction.\n\nBlocking is likewise a design term about grouping units into homogeneous sets, not a type of reasoning.\n\nDeductive reasoning instead applies a known general principle to a specific case, the reverse of what is described here.",
  },
  {
    id: "aee302_ch1_005",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "When experiments are repeated under the same conditions, the results are not always exactly identical because of differences beyond the control of the experiment. What term describes this variability among experimental units?",
    options: [
      "Experimental error",
      "Confounding",
      "A confidence interval",
      "Significance level",
    ],
    correctAnswer: 0,
    explanation:
      "The Deductive and Inductive Reasoning section names experimental error as the variability among experimental units arising from uncontrolled differences between replicated results.\n\nConfounding refers to sacrificing information on treatment effects because they cannot be distinguished from block effects, a different concept.\n\nA confidence interval is a range of values expected to contain an unknown parameter, unrelated to this variability.\n\nSignificance level is the probability of rejecting a true null hypothesis, not a description of experimental variability.",
  },
  {
    id: "aee302_ch1_006",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which term refers to the level of agreement between a replicate determination of a measurable property and its reference or target value?",
    options: [
      "The level of variation within collected data corresponding to how the data cluster around their centre value, the mean",
      "Accuracy",
      "The precision attainable between one individual's rapid replicate determinations",
      "Agreement between replicate measurements only",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section defines accuracy as the level of agreement between replicate determinations of a measurable property and its reference or target value.\n\nThe long description about data clustering around the centre value describes dispersion, a distinct concept from accuracy.\n\nThe description of rapid single-individual determinations describes repeatability, a related but distinct measurement-quality term.\n\nAgreement between replicate measurements alone, without any reference to a target value, describes precision rather than accuracy.",
  },
  {
    id: "aee302_ch1_007",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Reasoning that proceeds from a general principle to a particular, specific case is called inductive reasoning.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The Deductive and Inductive Reasoning section states that reasoning from the general to the particular is called deductive reasoning, not inductive reasoning. Inductive reasoning instead moves from specific cases toward a general principle, so the stem's claim reverses the two terms.",
  },
  {
    id: "aee302_ch1_008",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which term refers to the level of agreement between replicate measurements of a measurable property, without reference to a target value?",
    options: [
      "The shape measure used for assessing a lack of symmetry present in a data set",
      "A simple measure of the overall spread present across an entire data set",
      "Precision",
      "Agreement with a target value",
    ],
    correctAnswer: 2,
    explanation:
      "The Definitions and Terms section defines precision as the level of agreement between replicate measurements of a measurable property.\n\nThe shape measure for assessing a lack of symmetry describes skewness, an unrelated concept.\n\nA simple measure of overall spread describes range, a distinct measure from precision.\n\nAgreement with a target value is instead part of the definition of accuracy, which precision does not require.",
  },
  {
    id: "aee302_ch1_009",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which statement reflects a difference or change in the level of a response as a result of experimental intervention, and is denoted HA or H1?",
    options: [
      "A statement reflecting no difference between observations and a target, or between sets of observations, due to intervention",
      "A statement reflecting a difference or change in the response due to intervention",
      "A formula measuring evidence toward accepting or rejecting a hypothesis",
      "The probability a test statistic occurred purely by chance",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section defines the alternative hypothesis, denoted HA or H1, as a statement reflecting a difference or change in the level of a response due to experimental intervention.\n\nA statement of no difference describes the null hypothesis, denoted HN or Ho, the opposite of the alternative hypothesis.\n\nA formula measuring evidence for a hypothesis describes the test statistic, not a hypothesis statement itself.\n\nThe probability a test statistic occurred by chance describes the p value, not a hypothesis statement.",
  },
  {
    id: "aee302_ch1_010",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which statement reflects no difference between observations and a target, or between sets of observations, as a result of experimental intervention?",
    options: [
      "A statement reflecting no difference between observations and a target",
      "A statement of difference",
      "The technique of mathematically separating all variation into controlled and uncontrolled response components",
      "A range of values expected to contain an unknown parameter with specified probability",
    ],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines the null hypothesis, denoted HN or Ho, as a statement reflecting no difference between observations and target or between sets of observations.\n\nA statement of difference describes the alternative hypothesis, the opposite claim, not the null hypothesis.\n\nMathematically separating variation into controlled and uncontrolled components describes analysis of variance, a distinct technique.\n\nA range of values expected to contain an unknown parameter describes a confidence interval, not the null hypothesis.",
  },
  {
    id: "aee302_ch1_011",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is analysis of variance?",
    options: [
      "The technique of mathematically separating total variation within measurements into sources corresponding to controlled and uncontrolled components",
      "The grouping of experimental units into homogeneous blocks to remove extraneous variation",
      "The design technique of sacrificing information on certain treatment effects during blocking",
      "The number of independent measurements available for estimation",
    ],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines analysis of variance as the technique of mathematically separating total variation within experimental measurements into sources corresponding to controlled and uncontrolled components.\n\nGrouping experimental units into homogeneous blocks describes blocking, a related but distinct concept.\n\nSacrificing information on treatment effects during blocking describes confounding, not analysis of variance.\n\nThe number of independent measurements available for estimation describes degrees of freedom, not analysis of variance.",
  },
  {
    id: "aee302_ch1_012",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What does blocking refer to in experimental design?",
    options: [
      "The joint influence of treatment combinations on a response that cannot be explained by individual factor effects",
      "A step by step guide to experimentation and the data analysis that follows it",
      "The physical experimental material to which one application of a treatment is applied",
      "Grouping experimental units into homogeneous blocks",
    ],
    correctAnswer: 3,
    explanation:
      "The Definitions and Terms section defines blocking as the grouping of experimental units into homogeneous blocks to remove an extraneous source of response variation.\n\nThe joint influence of treatment combinations describes interaction, a different concept from blocking.\n\nA step-by-step guide to experimentation describes an experimental plan, not blocking.\n\nThe physical material receiving a treatment describes an experimental unit, not blocking.",
  },
  {
    id: "aee302_ch1_013",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which of the following is a measure of location?",
    options: ["The mean", "The median", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Numerical presentations section names the mean, or average, as a measure of location, since it is a single value specifying the centre of the data set.\n\nThe same section also names the median as a measure of location, describing it as another commonly used measure of the data's centre.\n\nSince both the mean and the median are named there as measures of location, the option covering both together is the supported outcome.",
  },
  {
    id: "aee302_ch1_014",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is a confidence interval?",
    options: [
      "The joint influence of treatment combinations on a response that cannot be explained by individual factor effects",
      "A range of values that contains an unknown parameter with a specified probability",
      "A statement reflecting no difference between observations and a target",
      "The probability of rejecting a true null hypothesis",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section defines a confidence interval as a range of values which contains an unknown parameter with a specified probability.\n\nThe joint influence of treatment combinations describes interaction, not a confidence interval.\n\nA statement reflecting no difference between observations and a target describes the null hypothesis, a different term.\n\nThe probability of rejecting a true null hypothesis describes significance level, not a confidence interval.",
  },
  {
    id: "aee302_ch1_015",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "How are degrees of freedom generally determined?",
    options: [
      "The single middle observation of a set arranged in ascending order of magnitude",
      "The probability of rejecting a null hypothesis that is actually completely true",
      "The number of measurements minus the parameters requiring estimation",
      "The sum of observations divided by their count",
    ],
    correctAnswer: 2,
    explanation:
      "The Definitions and Terms section states that degrees of freedom generally correspond to the number of measurements minus the number of parameters to estimate.\n\nThe single middle observation of an ordered set describes the median, not degrees of freedom.\n\nThe probability of rejecting a true null hypothesis describes significance level, unrelated to degrees of freedom.\n\nThe sum of observations divided by their count describes the mean, a different measure entirely.",
  },
  {
    id: "aee302_ch1_016",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What does dispersion describe about a set of data?",
    options: [
      "The joint influence of treatment combinations on a response that cannot be explained by individual factor effects",
      "The level of variation within data corresponding to how it clusters around the mean",
      "The probability a test statistic occurred purely by chance",
      "The number of independent measurements available for estimation",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section defines dispersion as the level of variation within collected data corresponding to how the data cluster around their centre value, the mean.\n\nThe joint influence of treatment combinations describes interaction, a distinct concept from dispersion.\n\nThe probability that a test statistic occurred by chance describes the p value, not dispersion.\n\nThe number of independent measurements available for estimation describes degrees of freedom, not dispersion.",
  },
  {
    id: "aee302_ch1_017",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is a dot plot?",
    options: [
      "A frequency diagram in which rectangles are constructed proportionally over several grouped measurement intervals",
      "A curve formed by joining the midpoints of the tops of histogram bars",
      "Each observation is shown as a dot relative to other measurements",
      "Rectangles built over grouped intervals",
    ],
    correctAnswer: 2,
    explanation:
      "The Definitions and Terms section defines a dot plot as a data plot in which each observation is presented as a dot to display its position relative to other measurements in the data set.\n\nRectangles constructed proportionally over grouped intervals describes a histogram, a different plot used for larger data sets.\n\nA curve joining the tops of histogram bars describes a frequency polygon, not a dot plot.\n\nRectangles built over grouped intervals is again a description of a histogram, not the dot-based plot the dot plot uses.",
  },
  {
    id: "aee302_ch1_018",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "The median of a data set is obtained by arranging the measurements in order of magnitude and finding the value that divides the ordered data into two equal halves.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Numerical presentations section states that the median is obtained by arranging measurements in order of magnitude from smallest to largest and finding the value that divides the ordered data into two equal halves, which matches the stem's claim exactly.",
  },
  {
    id: "aee302_ch1_019",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is an experiment, as defined in the Definitions and Terms section?",
    options: [
      "A planned inquiry to obtain new information on a measurable or observable outcome, or to confirm results from previous studies",
      "A step-by-step guide to experimentation and subsequent data analysis",
      "The physical material to which one application of a treatment is applied",
      "The structure used to generate practical data for interpretative purposes",
    ],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines an experiment as a planned inquiry to obtain new information on a measurable or observable outcome, or to confirm results from previous studies.\n\nA step-by-step guide to experimentation describes an experimental plan, a related but distinct term.\n\nThe physical material receiving a treatment describes an experimental unit, not an experiment itself.\n\nThe structure used to generate practical data describes experimental design, a different term defined separately.",
  },
  {
    id: "aee302_ch1_020",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is an experimental unit?",
    options: [
      "The statistical mechanism where an experimental response is explained by the factors controlled in the experiment",
      "The terms included within a response model that require estimation and significance assessment",
      "The characteristic that is measured or observed as the outcome of a study",
      "The physical material receiving one treatment application",
    ],
    correctAnswer: 3,
    explanation:
      "The Definitions and Terms section defines an experimental unit as the physical experimental material to which one application of a treatment is applied, giving examples such as a manufactured product or a food specimen.\n\nThe statistical mechanism explaining a response in terms of controlled factors describes a model, a different term.\n\nThe terms requiring estimation describe parameters, not an experimental unit.\n\nThe characteristic measured or observed in a study describes a response, not an experimental unit.",
  },
  {
    id: "aee302_ch1_021",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is interaction, as defined in the source?",
    options: [
      "The grouping of experimental units into separate homogeneous blocks specifically designed to remove an extraneous source of response variation",
      "The joint influence of treatment combinations on a response that cannot be explained by individual factor effects",
      "The level of agreement between replicate measurements of a property",
      "The number of independent measurements available for estimation",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section defines interaction as the joint influence of treatment combinations on a response which cannot be explained by the sum of the individual factor effects.\n\nGrouping experimental units into homogeneous blocks describes blocking, a distinct concept from interaction.\n\nThe level of agreement between replicate measurements describes precision, unrelated to interaction.\n\nThe number of independent measurements available for estimation describes degrees of freedom, not interaction.",
  },
  {
    id: "aee302_ch1_022",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "How is the mean of a set of experimental measurements defined?",
    options: [
      "The single middle observation of a set arranged in ascending order",
      "The difference between the largest and smallest measurement value recorded",
      "The arithmetic average of a set of experimental measurements",
      "The most frequent value",
    ],
    correctAnswer: 2,
    explanation:
      "The Definitions and Terms section defines the mean as the arithmetic average of a set of experimental measurements.\n\nThe single middle observation of an ordered set describes the median, a different measure of location.\n\nThe difference between the largest and smallest measurement describes range, a measure of spread rather than location.\n\nThe most frequent value describes a mode, which the source does not define but which differs from the mean.",
  },
  {
    id: "aee302_ch1_023",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "A dot plot is generally recommended over a histogram once the number of observations grows very large and individual dots become hard to distinguish.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The Graphical Presentations section states the opposite relationship: when a larger number of results makes dots hard to distinguish, a frequency distribution or histogram is constructed instead, not a dot plot. The dot plot is recommended for small bodies of data, so the stem's claim is reversed.",
  },
  {
    id: "aee302_ch1_024",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "A set of measurements is arranged in ascending order and the middle observation is identified. What summary measure does this middle observation represent?",
    options: [
      "The arithmetic average obtained by summing every measurement in the set and dividing by the count",
      "The median",
      "The value that appears most frequently in a set",
      "The difference between the largest and smallest measurement",
    ],
    correctAnswer: 1,
    explanation:
      "The Numerical presentations section defines the median as the middle observation of a set of measurements when arranged in ascending order of magnitude.\n\nSumming every measurement and dividing by the count describes the mean, not the single middle value.\n\nThe value appearing most frequently describes a mode, a concept the source does not define here.\n\nThe difference between the largest and smallest measurement describes range, not the middle observation.",
  },
  {
    id: "aee302_ch1_025",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "For a sample of k measurements where k is odd, which ordered observation corresponds to the median?",
    options: [
      "The average of the (k/2)th and the (k/2+1)th ordered observations combined together",
      "The first ordered observation found at the very smallest value",
      "The [(k+1)/2]th ordered observation counted from smallest to largest",
      "The kth ordered value",
    ],
    correctAnswer: 2,
    explanation:
      "The Numerical presentations section states that for k odd, the median corresponds to the [(k+1)/2]th ordered observation.\n\nAveraging the (k/2)th and (k/2+1)th ordered observations is the rule given for when k is even, not odd.\n\nThe first ordered observation is the smallest value in the data set, not the median.\n\nThe kth ordered observation would simply be the largest value, not the median.",
  },
  {
    id: "aee302_ch1_026",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which of the following is a measure of variability rather than a measure of location?",
    options: ["Range", "The median", "All of these", "None of these"],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section describes range as a simple measure of data spread, which places it among measures of variability rather than location.\n\nThe median is instead described in the Numerical presentations section as a measure of location, the middle value the data are arranged around, so it is not a measure of variability.\n\nSince only range fits the variability description while the median does not, the option naming range alone is the supported outcome.",
  },
  {
    id: "aee302_ch1_027",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "For a sample of k measurements where k is even, how is the median obtained?",
    options: [
      "As the average of the (k/2)th and (k/2+1)th ordered observations",
      "As the [(k+1)/2]th ordered observation",
      "As the largest observation minus the smallest observation",
      "As the sum of all observations divided by k",
    ],
    correctAnswer: 0,
    explanation:
      "The Numerical presentations section states that when k is even, the median is the average of the (k/2)th and (k/2+1)th ordered observations.\n\nThe [(k+1)/2]th ordered observation is the rule given for when k is odd, not even.\n\nThe largest observation minus the smallest describes range, a measure of spread rather than the median.\n\nThe sum of all observations divided by k describes the mean, a different measure of location.",
  },
  {
    id: "aee302_ch1_028",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is a model, as defined in the Definitions and Terms section?",
    options: [
      "The statistical mechanism where an experimental response is explained in terms of the factors controlled in the experiment",
      "The terms included within a response that require estimation and significance assessment",
      "The estimate of model error found as the difference between recorded observations and fitted values",
      "The characteristic measured or observed in a study",
    ],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines a model as the statistical mechanism where an experimental response is explained in terms of the factors controlled in the experiment.\n\nThe terms requiring estimation and significance assessment describe parameters, a related but distinct term.\n\nThe estimate of model error describes residuals, not the model itself.\n\nThe characteristic measured or observed describes a response, a different defined term.",
  },
  {
    id: "aee302_ch1_029",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which population distribution is described as the most commonly applied in statistics and the assumed distribution for a measured response in parametric inference?",
    options: [
      "A summary of model error found as the difference between observations and fitted values",
      "A design concept where information on treatment effects is sacrificed due to blocking",
      "A distribution formed when treatments represent a random sample drawn from a larger population",
      "The normal, or Gaussian, distribution",
    ],
    correctAnswer: 3,
    explanation:
      "The Definitions and Terms section defines the normal, or Gaussian, distribution as the most commonly applied population distribution in statistics and the assumed distribution for a measured response in parametric inference.\n\nThe estimate of model error described by observation-to-fitted-value differences describes residuals, not a named distribution.\n\nSacrificed treatment information due to blocking describes confounding, unrelated to the normal distribution.\n\nA random sample of treatments from a larger population describes a random effect, not a distribution shape.",
  },
  {
    id: "aee302_ch1_030",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is an outlier?",
    options: [
      "A measurement taken precisely at the boundary between two adjacent grouping intervals in a frequency diagram",
      "A recorded measurement that differs markedly from the majority of the data collected",
      "The average of all measurements collected in a study",
      "A treatment effect indistinguishable from a block effect",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section defines an outlier as a recorded response measurement which differs markedly from the majority of the data collected.\n\nA measurement at an interval boundary belongs to the discussion of histogram construction, not the definition of an outlier.\n\nThe average of all measurements describes the mean, a distinct concept.\n\nA treatment effect indistinguishable from a block effect describes confounding, not an outlier.",
  },
  {
    id: "aee302_ch1_031",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What does the p value represent?",
    options: [
      "The number of independent measurements that still remain available for full parameter estimation",
      "The range of values expected to contain an unknown parameter with specified probability",
      "The probability a test statistic occurred purely by chance",
      "Agreement between replicate measurements",
    ],
    correctAnswer: 2,
    explanation:
      "The Definitions and Terms section defines the p value as the probability that a calculated test statistic value could have occurred by chance alone, compared to the significance level.\n\nThe number of independent measurements available for estimation describes degrees of freedom, not the p value.\n\nThe range of values containing an unknown parameter describes a confidence interval, not the p value.\n\nAgreement between replicate measurements describes precision, a different term entirely.",
  },
  {
    id: "aee302_ch1_032",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What are parameters, as defined in the Definitions and Terms section?",
    options: [
      "The total aggregate of observations that conceptually might occur as the result of performing a particular operation in a particular way",
      "The terms included within a response model that require estimation and assessment of statistical significance",
      "The characteristic measured or observed in a study",
      "A set of representative measurements of an outcome",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section defines parameters as the terms included within a response model which require to be estimated and assessed for their statistical significance.\n\nThe total aggregate of observations from a particular operation describes a population, not parameters.\n\nThe characteristic measured or observed describes a response, a different term entirely.\n\nA set of representative measurements describes a sample, unrelated to parameters.",
  },
  {
    id: "aee302_ch1_033",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Confounding is the design technique where information on certain treatment effects is sacrificed because they are indistinguishable from block effects.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines confounding exactly this way, as the design technique for blocking a factorial experiment where information on certain treatment effects is sacrificed because they are indistinguishable from block effects, matching the stem's claim.",
  },
  {
    id: "aee302_ch1_034",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "How is a population described in the Definitions and Terms section?",
    options: [
      "A sample obtained so that every member has an equal chance of being chosen",
      "The total aggregate of observations from a particular operation",
      "The single middle observation found within an ordered set of measurements",
      "A set of representative measurements",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section describes a population as the total aggregate of observations that conceptually might occur as the result of performing a particular operation in a particular way, usually treated as finite with a large size N.\n\nA sample where each member has an equal chance of being chosen describes a random sample, a specific type of sample.\n\nThe single middle observation of an ordered set describes the median, unrelated to population.\n\nA set of representative measurements describes a sample in general, a distinct term drawn from the population.",
  },
  {
    id: "aee302_ch1_035",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is a random sample?",
    options: [
      "A sample obtained under such conditions that each member of the population has an equal chance of being chosen",
      "A set of representative measurements of a measurable or observable outcome",
      "The total aggregate of observations that might conceptually occur from a particular operation",
      "The treatments to be tested representing a random selection from a larger population",
    ],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines a random sample as a sample obtained in such a condition that each member of the population has an equal chance of being chosen.\n\nA set of representative measurements describes a sample in general, without the equal-chance requirement specific to randomness.\n\nThe total aggregate of observations from a particular operation describes a population, not a random sample.\n\nTreatments representing a random selection from a larger population describes a random effect, a related but distinct term.",
  },
  {
    id: "aee302_ch1_036",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What does random error cause in a set of measurements?",
    options: [
      "The number of independent measurements that remain available for parameter estimation within a fitted statistical model",
      "It makes certain treatment effects indistinguishable from the effects of blocking",
      "It requires experimental units to be grouped into homogeneous blocks before testing",
      "It reduces the precision of recorded data",
    ],
    correctAnswer: 3,
    explanation:
      "The Definitions and Terms section states that random error causes response measurements to fall either side of a target, affecting data precision.\n\nThe number of independent measurements available for estimation describes degrees of freedom, unrelated to random error.\n\nTreatment effects becoming indistinguishable from block effects describes confounding, a different concept.\n\nGrouping measurements into homogeneous blocks before testing describes blocking, not random error.",
  },
  {
    id: "aee302_ch1_037",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What does randomization primarily reduce in an experiment?",
    options: [
      "The number of independent measurements that still remain available for full parameter estimation",
      "Reducing the risk of bias through unit selection and run order",
      "The joint influence of treatment combinations on response",
      "The level of agreement between replicate measurements taken",
    ],
    correctAnswer: 1,
    explanation:
      "The Definitions and Terms section states that randomization reduces the risk of bias in experimental results, being concerned with selection of experimental units and run order of experiments.\n\nThe number of measurements available for full parameter estimation relates to degrees of freedom, not randomization.\n\nThe joint influence of treatment combinations describes interaction, a distinct concept.\n\nThe level of agreement between replicate measurements describes precision, unrelated to randomization.",
  },
  {
    id: "aee302_ch1_038",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "How is repeatability defined?",
    options: [
      "A design splitting material into two treatment groups",
      "The joint influence of treatment combinations on response",
      "The precision attainable between one individual's rapid replicate determinations",
      "Repeating experimentation to produce multiple measurements enabling accuracy and precision to be estimated",
    ],
    correctAnswer: 2,
    explanation:
      "The Definitions and Terms section defines repeatability as a measure of the precision of a method expressed as the agreement attainable between independent determinations performed by a single individual using the same instrument and techniques in a short period of time.\n\nSplitting material into two treatment groups describes paired sampling, a distinct design term.\n\nThe joint influence of treatment combinations describes interaction, unrelated to repeatability.\n\nRepeating experimentation to produce multiple measurements describes replication, a related but distinct term from repeatability.",
  },
  {
    id: "aee302_ch1_039",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is replication, as defined in the source?",
    options: [
      "Repeating experimentation to produce multiple measurements enabling accuracy and precision to be estimated",
      "A measure of precision expressed as agreement attainable between independent determinations made by one individual in a short time",
      "A design splitting material into two treatment groups",
      "The joint influence of treatment combinations on response",
    ],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines replication as the concept of repeating experimentation to produce multiple measurements of the same response to enable data accuracy and precision to be estimated.\n\nAgreement between determinations by one individual in a short period describes repeatability, a related but distinct term.\n\nSplitting material into two treatment groups describes paired sampling, not replication.\n\nThe joint influence of treatment combinations describes interaction, unrelated to replication.",
  },
  {
    id: "aee302_ch1_040",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which of the following terms is directly defined as a type of reasoning?",
    options: [
      "Confidence interval",
      "Test statistic",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "A confidence interval is defined in the Definitions and Terms section as a range of values containing an unknown parameter, and it belongs to inferential estimation rather than to the Deductive and Inductive Reasoning section's discussion of reasoning types.\n\nA test statistic is likewise defined in the Definitions and Terms section as a formula measuring evidence for a hypothesis test, and it too is unrelated to the deductive or inductive reasoning discussion.\n\nSince neither term is presented as a type of reasoning, the option indicating neither is supported is the correct outcome.",
  },
  {
    id: "aee302_ch1_041",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What are residuals, as defined in the Definitions and Terms section?",
    options: [
      "A set of representative measurements of a measurable observable outcome",
      "The characteristic that is measured or observed as the outcome of a study",
      "The difference between recorded observations and the model's fitted values",
      "Terms requiring estimation within models",
    ],
    correctAnswer: 2,
    explanation:
      "The Definitions and Terms section defines residuals as estimates of model error, determined as the difference between the recorded observations and the model's fitted values.\n\nA set of representative measurements describes a sample, unrelated to residuals.\n\nThe characteristic measured or observed in a study describes a response, not residuals.\n\nTerms requiring estimation within a response model describe parameters, a distinct concept from residuals.",
  },
  {
    id: "aee302_ch1_042",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What is the significance level of a statistical test?",
    options: [
      "The probability of rejecting a true null hypothesis, typically set at 5 percent or 0.05",
      "The probability that a calculated test statistic occurred by chance alone",
      "The level of agreement between replicate measurements of a property",
      "The number of independent measurements available for estimation",
    ],
    correctAnswer: 0,
    explanation:
      "The Definitions and Terms section defines significance level as the probability of rejecting a true null hypothesis, typically set at 5 percent or 0.05.\n\nThe probability that a test statistic occurred by chance alone describes the p value, which is compared against the significance level rather than being the same thing.\n\nThe level of agreement between replicate measurements describes precision, unrelated to significance level.\n\nThe number of independent measurements available for estimation describes degrees of freedom, not significance level.",
  },
  {
    id: "aee302_ch1_043",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "What does skewness measure about a data set?",
    options: [
      "The level of variation within collected data measured relative to the mean",
      "The single middle observation of a data set arranged in ascending order",
      "The level of agreement observed between replicate measurements of the same property",
      "The shape of data used to assess symmetry",
    ],
    correctAnswer: 3,
    explanation:
      "The Definitions and Terms section defines skewness as a shape measure of data used for assessing lack of symmetry.\n\nThe level of variation within collected data around the mean describes dispersion, a related but distinct measure.\n\nThe single middle observation of an ordered set describes the median, not skewness.\n\nThe agreement between replicate measurements describes precision, unrelated to skewness.",
  },
  {
    id: "aee302_ch1_044",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "A frequency diagram is being constructed for grouped experimental data where interval widths differ. What must be true of the rectangle drawn on each interval?",
    options: [
      "Its height must always equal the total number of intervals used in the entire diagram",
      "Its area must be proportional to the interval's observation frequency",
      "Its area must equal the dataset total",
      "Its width must equal ten",
    ],
    correctAnswer: 1,
    explanation:
      "The Graphical Presentations section states that when grouping intervals are of different lengths, the area of the rectangle constructed on each interval must be proportional to the frequency of observations within that interval.\n\nThe height equaling the number of intervals is not the rule given, since height is tied to frequency and interval width, not the count of intervals.\n\nThe area equaling the total number of observations across the whole data set is not the stated rule, which concerns each individual interval's proportionality rather than the whole diagram's total.\n\nThe width equaling a fixed value of ten is not a rule stated anywhere in the section.",
  },
  {
    id: "aee302_ch1_045",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which of the following statements accurately describes a design principle used in experiments?",
    options: [
      "Blocking is a step-by-step guide to experimentation and the subsequent data analysis",
      "Paired sampling splits experimental material into two equal parts, each tested on one of two treatments",
      "All of these",
      "None of these",
    ],
    correctAnswer: 1,
    explanation:
      "The statement describing blocking as a step-by-step guide to experimentation is contradicted by the Definitions and Terms section, which instead defines blocking as grouping experimental units into homogeneous blocks to remove extraneous variation; that guide description actually belongs to an experimental plan.\n\nThe statement about paired sampling matches the Definitions and Terms section exactly, which defines paired sampling as a design principle splitting experimental material to be tested into two equal parts, each tested on one of two possible treatments.\n\nSince only the paired sampling statement is accurate, the option naming it alone is the supported outcome.",
  },
  {
    id: "aee302_ch1_046",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "Which two basic approaches does the source describe for analyzing experimental data?",
    options: [
      "Deductive statistics, which reasons from general principles, and inductive statistics, which reasons from specific cases",
      "Descriptive statistics, covering graphical presentations, and inferential statistics, covering tests and estimation",
      "Paired sampling and random sampling",
      "Blocking and confounding designs",
    ],
    correctAnswer: 1,
    explanation:
      "The Interpretation of Experimental data section states that two approaches can be employed to analyze experimental data: descriptive statistics and the use of inferential statistics, which includes statistical tests and estimation.\n\nDeductive and inductive statistics are not the terms used in this section, though deductive and inductive reasoning appear earlier as a separate topic.\n\nPaired sampling and random sampling are sampling design concepts from the glossary, not the two analytical approaches described here.\n\nBlocking and confounding are experimental design concepts, not the two approaches to analyzing data described in this section.",
  },
  {
    id: "aee302_ch1_047",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "A researcher has only 10 observations and wants to display each one's position relative to the others along a horizontal axis. Which graphical form is described as particularly suited to this small a body of data?",
    options: [
      "A dot plot",
      "A frequency histogram",
      "A control chart",
      "A standard error plot",
    ],
    correctAnswer: 0,
    explanation:
      "The Graphical Presentations section states that a dot plot is a valuable device for displaying the distribution of a small body of data, up to around 20 observations, showing each measurement as a dot on a horizontal axis.\n\nA frequency histogram is described instead for larger numbers of results, where individual dots become hard to distinguish from each other.\n\nA control chart is listed among the graphical forms but is not described as suited to small bodies of data in the section.\n\nA standard error plot is also listed among the graphical forms but is not the one described for small samples of measurements.",
  },
  {
    id: "aee302_ch1_048",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "In numerical presentation, which two basic forms of measure are generally used to summarize a data set?",
    options: [
      "A measure of randomization applied and a separate measure of full replication applied",
      "A measure of accuracy achieved and a separate measure of repeatability achieved",
      "A measure of location and a measure of variability",
      "A measure of blocking design",
    ],
    correctAnswer: 2,
    explanation:
      "The Numerical presentations section states that two basic forms of measure are generally used, a measure of location and a measure of variability.\n\nRandomization and replication are design-related terms from the glossary, not the two basic numerical summary measures described here.\n\nAccuracy and repeatability are measurement-quality terms from the glossary, not the two forms of measure described in this section.\n\nBlocking design is an experimental design term, not one of the two forms of numerical measure described here.",
  },
  {
    id: "aee302_ch1_049",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "As the number of results available becomes large enough that dots become hard to distinguish from each other, what does the source recommend constructing instead?",
    options: [
      "A frequency distribution, also called a histogram",
      "A confidence interval around the sample mean",
      "A paired sampling design for the remaining data",
      "A test of significance based on the null hypothesis",
    ],
    correctAnswer: 0,
    explanation:
      "The Graphical Presentations section states that when a larger number of results is available and dots become hard to distinguish, we are better able to appreciate the data by constructing a frequency distribution, also called a frequency diagram or histogram.\n\nA confidence interval is a numerical presentation concept unrelated to this graphical recommendation.\n\nA paired sampling design is an experimental design principle, not a response to large numbers of plotted dots.\n\nA test of significance is part of inferential statistics, not the graphical remedy described for crowded dot plots.",
  },
  {
    id: "aee302_ch1_050",
    course: "AEE 302",
    chapter: "Chapter 1",
    text: "A histogram is being built from 500 recorded observations, each recorded to one decimal place, spanning values from just above 56 to just below 74. Why does the source classify these observations into 18 intervals each covering a range of one unit?",
    options: [
      "Because eighteen intervals is a fixed standard applied to every frequency distribution regardless of the data's range",
      "It conveniently spans the data's actual range",
      "Because eighteen equals the number of measures of location described in the numerical presentations section of the source",
      "Because eighteen observations is the minimum sample size required before a dot plot becomes valid to use",
    ],
    correctAnswer: 1,
    explanation:
      "The Graphical Presentations section explains that since the smallest of the 500 observations lies between 56 and 57 and the largest between 73 and 74, it is convenient to classify the observations into 18 intervals each covering a range of one unit, so the grouping matches the data's actual span.\n\nA fixed standard of 18 intervals for every frequency distribution is not stated; the source frames 18 as convenient specifically for this data's range, not a universal rule.\n\nThe number of measures of location described elsewhere in the source is two, not 18, so this is unrelated.\n\nA minimum sample size for a valid dot plot is not a rule stated in the source; the dot plot section instead mentions an upper practical limit of around 20 observations.",
  },
];

export default aee302Chapter1Questions;
