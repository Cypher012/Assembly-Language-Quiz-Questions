import { QuestionV2 } from "@/lib/quiz-types";

const aee302Chapter8Questions: QuestionV2[] = [
  {
    id: "aee302_ch8_001",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In a factorial experiment, what can be investigated regarding two or more factors acting on a response?",
    options: [
      "Only whether the factors were measured on a nominal scale",
      "Both main effects and interaction effects",
      "Only the sample size needed for a future study",
      "Only the order in which the experiment should be run"
    ],
    correctAnswer: 1,
    explanation: "The Factorial Experiment section states that experiments of this type come under the domain of Factorial Design, where both main effects and interaction effects can be investigated to determine the level of influence such factors have.\n\nWhether factors are measured on a nominal scale is a measurement-type detail, not what factorial design is described as investigating.\n\nSample size for a future study is a separate design-planning concern, not the focus described here.\n\nRun order is a randomization detail from earlier units, not the main subject factorial design investigates."
  },
  {
    id: "aee302_ch8_002",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "How are experimental factors in a factorial design generally specified?",
    options: [
      "At a number of different levels reflecting likely operating settings, such as specific temperatures or flow rates",
      "At exactly one fixed level that never changes throughout the experiment",
      "Only as percentages between 0 and 100",
      "Only as randomly generated numbers with no physical meaning"
    ],
    correctAnswer: 0,
    explanation: "The Factorial Experiment section gives examples such as temperature at 40, 50, 60, and 70 degrees, cooling time at 10, 15, and 20 minutes, flow rate as slow or fast, and operators A, B, and C, describing these as the different factor settings controlled in the experiment.\n\nA single fixed level would prevent any comparison of factor levels, contradicting the purpose of a factorial design.\n\nFactor levels are not restricted to percentages; the examples given include temperatures, times, and qualitative categories.\n\nFactor levels reflect deliberately chosen, meaningful operating settings, not randomly generated numbers."
  },
  {
    id: "aee302_ch8_003",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "What is a two-level factorial design with k factors usually referred to as?",
    options: [
      "A k-factor ANOVA",
      "A $2^k$ factorial design",
      "A paired comparison design",
      "A randomized block design"
    ],
    correctAnswer: 1,
    explanation: "The Factorial Experiment section states that factorial design at two levels is usually referred to as $2^k$ factorial design, implying two levels each for k factors.\n\nA k-factor ANOVA is not the term used in the section for this specific two-level structure.\n\nA paired comparison design is the Unit 5 structure comparing two treatments in matched pairs, unrelated to this multi-factor design.\n\nA randomized block design is the Unit 7 structure incorporating a blocking factor, a different design from the two-level factorial design described here."
  },
  {
    id: "aee302_ch8_004",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Why might a full factorial design be costly to implement when many factors are involved?",
    options: [
      "Because the number of treatment combinations grows as more factors are assessed",
      "Because factorial designs can never be analyzed statistically",
      "Because every factorial design requires exactly 1000 experimental runs",
      "Because factorial designs cannot investigate interaction effects at all"
    ],
    correctAnswer: 0,
    explanation: "The Factorial Experiment section states that when many factors are required to be assessed, full factorial design can be costly to implement, since two-level designs are specifically valued for reducing the number of treatment combinations within the experimental region.\n\nFactorial designs are explicitly described as being analyzed for main effects and interaction effects, so they can certainly be analyzed statistically.\n\nThe number of runs required depends on the number of factors and levels, $2^k$ for a two-level design, not a fixed value of 1000.\n\nInvestigating interaction effects is one of the central purposes of factorial design, not something it is unable to do."
  },
  {
    id: "aee302_ch8_005",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In two-level factorial design notation, what do \"-\" and \"+\" represent for a quantitative factor?",
    options: [
      "\"-\" represents the higher level and \"+\" represents the lower level",
      "\"-\" represents the lower level and \"+\" represents the higher level",
      "\"-\" represents a missing observation and \"+\" represents a recorded observation",
      "\"-\" and \"+\" both represent the same, single level of the factor"
    ],
    correctAnswer: 1,
    explanation: "The Factorial Experiment section states that the levels of a two-level factorial design are normally represented by \"-\" for the lower level and \"+\" for the higher level, for quantitative factors.\n\nReversing the two symbols misstates which level each one represents.\n\nMissing versus recorded observations is not what these symbols indicate; both symbols denote a specific, recorded factor setting.\n\nThe two symbols represent the two distinct levels of the factor, not a single shared level."
  },
  {
    id: "aee302_ch8_006",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "A two-level factorial design with k factors requires $2^k$ experimental runs.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Factorial Experiment section states this directly for the worked example: with k=3 factors, the number of experimental runs is $2^3=8$, matching the general rule that a $2^k$ design requires $2^k$ runs."
  },
  {
    id: "aee302_ch8_007",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In the worked pilot-plant example, which three factors are studied, and what are their two levels?",
    options: [
      "Temperature (20°C, 40°C), Pressure (100 kPa, 200 kPa), and Catalyst (A, B)",
      "Temperature (20°C, 40°C), Time (10 min, 20 min), and Operator (A, B)",
      "Pressure (100 kPa, 200 kPa), Catalyst (A, B), and Flow rate (slow, fast)",
      "Temperature (40°C, 70°C), Pressure (100 kPa, 200 kPa), and Catalyst (A, B)"
    ],
    correctAnswer: 0,
    explanation: "The example states that temperature (20°C and 40°C), pressure (100 kPa and 200 kPa), and catalyst (A and B) are the three factors investigated for their effect on chemical yield.\n\nCooling time and operator are examples given earlier in the section for other kinds of experiments, not the three factors used in this specific pilot-plant example.\n\nFlow rate is likewise an example from elsewhere in the section, not one of the three factors in this pilot-plant example.\n\nThe temperature levels used in this example are 20°C and 40°C, not 40°C and 70°C."
  },
  {
    id: "aee302_ch8_008",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In the pilot-plant example, which factors are quantitative, and which is qualitative?",
    options: [
      "Temperature and pressure are quantitative; catalyst is qualitative",
      "Catalyst and pressure are quantitative; temperature is qualitative",
      "All three factors are quantitative",
      "All three factors are qualitative"
    ],
    correctAnswer: 0,
    explanation: "The example states that temperature and pressure are quantitative, but catalyst is qualitative, since catalyst A and B are categories rather than points on a numeric scale.\n\nPressure is quantitative, not qualitative, and temperature is quantitative, not qualitative, so this reverses the correct classification.\n\nCatalyst is explicitly described as qualitative, not quantitative, so not all three factors are quantitative.\n\nTemperature and pressure are explicitly described as quantitative, so not all three factors are qualitative."
  },
  {
    id: "aee302_ch8_009",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "For the pilot-plant example with k=3 factors, how many experimental runs are needed for the full $2^3$ design?",
    options: [
      "3",
      "6",
      "8",
      "9"
    ],
    correctAnswer: 2,
    explanation: "The number of experimental runs is $2^k=2^3=8$.\n\n3 mistakenly reports k itself, the number of factors, rather than $2^k$.\n\n6 results from mistakenly computing $2 \\times k$ instead of $2^k$.\n\n9 results from mistakenly computing $k^2$ instead of $2^k$."
  },
  {
    id: "aee302_ch8_010",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "For the pilot-plant example with k=3 factors, how many main effect and interaction effect determinations are possible?",
    options: [
      "3",
      "7",
      "6",
      "8"
    ],
    correctAnswer: 1,
    explanation: "The number of effect determinations is $2^k-1=2^3-1=8-1=7$.\n\n3 mistakenly reports k itself, the number of factors, rather than $2^k-1$.\n\n6 results from mistakenly computing $2k$ instead of $2^k-1$.\n\n8 mistakenly reports $2^k$, the number of runs, without subtracting 1."
  },
  {
    id: "aee302_ch8_011",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Which of the following is one of the 7 possible effects estimated in this $2^3$ factorial design?",
    options: [
      "The temperature main effect, T",
      "The $T \\times C$ two-factor interaction",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "The temperature main effect, T, is one of the three main effects among the 7 total effects estimated in this design.\n\nThe $T \\times C$ interaction is one of the three two-factor interactions among the 7 total effects estimated.\n\nSince both listed effects are genuinely among the 7 effects estimated in this design, the option covering both together is the supported outcome."
  },
  {
    id: "aee302_ch8_012",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "For the $2^3$ design, which 7 effects are estimated in total?",
    options: [
      "T, P, C (three main effects); TP, TC, PC (three two-factor interactions); and TPC (one three-factor interaction)",
      "Only the three main effects: T, P, and C",
      "Only the three two-factor interactions: TP, TC, and PC",
      "T, P, C, TP, TC, PC, TPC, and the grand mean, for a total of 8 effects"
    ],
    correctAnswer: 0,
    explanation: "With three factors, the 7 effects are the three main effects (T, P, C), the three two-factor interactions (TP, TC, PC), and the single three-factor interaction (TPC), totaling $3+3+1=7$.\n\nThe three main effects alone would total only 3 of the 7 effects, omitting all interactions.\n\nThe three two-factor interactions alone would total only 3 of the 7 effects, omitting the main effects and the three-factor interaction.\n\nIncluding the grand mean as an eighth effect overcounts; the mean is estimated separately and is not one of the $2^k-1=7$ effect determinations."
  },
  {
    id: "aee302_ch8_013",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "What is meant by \"the effect of a factor\" in this unit's Method 1 (averaging individual measures)?",
    options: [
      "The change in the response as we move from the low level to the high level of that factor",
      "The total sum of every response value recorded in the experiment",
      "The number of times that factor appears in the design table",
      "The difference between the largest and smallest factor level, regardless of the response"
    ],
    correctAnswer: 0,
    explanation: "The section states that when we talk about the effect of a factor, we mean the change in the response as we move from the low level to the high level of that factor.\n\nThe total sum of every response value is the basis for computing the grand mean, not the definition of a factor's effect.\n\nHow often a factor appears in the design table is a structural count, not a measure of its effect on the response.\n\nThe difference between factor levels themselves, ignoring the response, would not measure any effect on the response at all."
  },
  {
    id: "aee302_ch8_014",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using the yields 60, 72, 54, 68, 52, 83, 45, and 80 for runs 1 through 8 (in standard order), Method 1 computes the temperature effect from four comparisons: $(Y_2-Y_1)=12$, $(Y_4-Y_3)=14$, $(Y_6-Y_5)=31$, and $(Y_8-Y_7)=35$. What is the temperature main effect?",
    options: [
      "92",
      "18.4",
      "23",
      "46"
    ],
    correctAnswer: 2,
    explanation: "Summing the four comparisons gives $12+14+31+35=92$, and dividing by 4 gives the temperature main effect, $92/4=23$.\n\n92 is the sum of the four comparisons before dividing, not the final main effect.\n\n18.4 results from mistakenly dividing 92 by 5 instead of 4.\n\n46 results from mistakenly dividing 92 by 2 instead of 4."
  },
  {
    id: "aee302_ch8_015",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using the same yields, Method 1 computes the pressure effect from four comparisons: $(Y_3-Y_1)=-6$, $(Y_4-Y_2)=-4$, $(Y_7-Y_5)=-7$, and $(Y_8-Y_6)=-3$. What is the pressure main effect?",
    options: [
      "-20",
      "-5",
      "-4",
      "-10"
    ],
    correctAnswer: 1,
    explanation: "Summing the four comparisons gives $-6-4-7-3=-20$, and dividing by 4 gives the pressure main effect, $-20/4=-5$.\n\n-20 is the sum of the four comparisons before dividing, not the final main effect.\n\n-4 simply restates one of the individual comparisons, not the computed main effect.\n\n-10 results from mistakenly dividing -20 by 2 instead of 4."
  },
  {
    id: "aee302_ch8_016",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using the same yields, Method 1 computes the catalyst effect from four comparisons: $(Y_5-Y_1)=-8$, $(Y_6-Y_2)=11$, $(Y_7-Y_3)=-9$, and $(Y_8-Y_4)=12$. What is the catalyst main effect?",
    options: [
      "6",
      "3",
      "1.5",
      "24"
    ],
    correctAnswer: 2,
    explanation: "Summing the four comparisons gives $-8+11-9+12=6$, and dividing by 4 gives the catalyst main effect, $6/4=1.5$.\n\n6 is the sum of the four comparisons before dividing, not the final main effect.\n\n3 results from mistakenly dividing 6 by 2 instead of 4.\n\n24 results from mistakenly multiplying 6 by 4 instead of dividing."
  },
  {
    id: "aee302_ch8_017",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "When computing the temperature effect's four individual comparisons in Method 1, which two other factors are held fixed within each individual comparison?",
    options: [
      "Pressure and catalyst",
      "Only pressure",
      "Only catalyst",
      "None; all three factors vary freely in each comparison"
    ],
    correctAnswer: 0,
    explanation: "Each of the four comparisons pairs two runs that differ only in temperature, holding a specific combination of pressure and catalyst fixed, for example $Y_2-Y_1$ compares temperature levels while pressure and catalyst both stay at their low level.\n\nCatalyst is also held fixed within each comparison, not just pressure, so pressure alone is not the complete answer.\n\nPressure is also held fixed within each comparison, not just catalyst, so catalyst alone is not the complete answer.\n\nIf all three factors varied freely, the comparisons would not isolate the temperature effect at all."
  },
  {
    id: "aee302_ch8_018",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In two-level factorial design notation, \"+\" represents the lower level and \"-\" represents the higher level.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Factorial Experiment section states the opposite: \"-\" represents the lower level and \"+\" represents the higher level, contradicting the stem's claim."
  },
  {
    id: "aee302_ch8_019",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "How does Method 2 (difference between two averages) describe the main effect of a factor?",
    options: [
      "As the difference between the average response at the factor's high level and the average response at its low level",
      "As the sum of every response value recorded for that factor's high level only",
      "As the product of the high-level average and the low-level average",
      "As the ratio of the high-level average to the low-level average"
    ],
    correctAnswer: 0,
    explanation: "The section states that the main effect for each variable is the difference between two averages: the average response at the high level minus the average response at the low level.\n\nSumming only the high-level responses, without also computing and subtracting a low-level average, does not match the difference-of-averages method described.\n\nMultiplying the two averages together does not match the subtraction the method describes.\n\nDividing one average by the other does not match the subtraction the method describes."
  },
  {
    id: "aee302_ch8_020",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using Method 2, the average yield at high temperature (runs 2, 4, 6, 8: 72, 68, 83, 80) is 75.75, and the average yield at low temperature (runs 1, 3, 5, 7: 60, 54, 52, 45) is 52.75. What is the temperature main effect?",
    options: [
      "128.5",
      "23",
      "14.25",
      "1.44"
    ],
    correctAnswer: 1,
    explanation: "The temperature effect is $75.75-52.75=23$, matching the value obtained from Method 1.\n\n128.5 results from mistakenly adding the two averages instead of subtracting them.\n\n14.25 results from an unrelated arithmetic slip in the subtraction.\n\n1.44 results from mistakenly dividing the two averages instead of subtracting them."
  },
  {
    id: "aee302_ch8_021",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using Method 2, the average yield at high catalyst level B (runs 5, 6, 7, 8: 52, 83, 45, 80) is 65.0, and the average yield at low catalyst level A (runs 1, 2, 3, 4: 60, 72, 54, 68) is 63.5. What is the catalyst main effect?",
    options: [
      "128.5",
      "1.02",
      "1.5",
      "0.5"
    ],
    correctAnswer: 2,
    explanation: "The catalyst effect is $65.0-63.5=1.5$, matching the value obtained from Method 1.\n\n128.5 results from mistakenly adding the two averages instead of subtracting them.\n\n1.02 results from mistakenly dividing the two averages instead of subtracting them.\n\n0.5 is instead the value of the three-factor interaction, TPC, an unrelated quantity."
  },
  {
    id: "aee302_ch8_022",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Regarding the two methods used to compute main effects in this unit, which of the following is correct?",
    options: [
      "Method 1 averages four individual high-minus-low comparisons",
      "Method 2 computes the sum, rather than the difference, of the average response at the high and low levels",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Method 1 computes a main effect by averaging four individual comparisons, each the high-level response minus the corresponding low-level response, matching the first statement.\n\nMethod 2 instead computes the difference, not the sum, between the average response at the high level and the average response at the low level.\n\nSince only the first statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly contradicted by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch8_023",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "What does it mean for two factors to \"interact,\" as described in this unit?",
    options: [
      "Their combined effect behaves purely additively, with each factor's effect the same regardless of the other's level",
      "They do not behave additively; the effect of one factor differs depending on the level of the other",
      "One of the two factors must always be qualitative",
      "Their main effects must both equal exactly zero"
    ],
    correctAnswer: 1,
    explanation: "The section states that when the temperature effect is much greater with catalyst B than with catalyst A, the variables do not behave additively and are therefore said to interact.\n\nBehaving purely additively, with no dependence between the factors, describes the absence of interaction, not its presence.\n\nQualitative status is not a requirement for interaction; temperature and pressure, both quantitative, are also shown to interact in this unit.\n\nInteracting factors can have any main effect values; interaction concerns whether the effect of one factor depends on the other's level, not whether the main effects are zero."
  },
  {
    id: "aee302_ch8_024",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Why are temperature and catalyst said to interact in the pilot-plant example?",
    options: [
      "Because the temperature effect is much greater with catalyst B than with catalyst A",
      "Because temperature and catalyst have exactly the same main effect value",
      "Because catalyst is qualitative while temperature is quantitative",
      "Because both factors were tested at exactly two levels"
    ],
    correctAnswer: 0,
    explanation: "The section states that it is obvious from the data that the temperature effect is much greater with catalyst B than with catalyst A, so the two variables do not behave additively and are said to interact.\n\nTemperature's main effect, 23, and catalyst's main effect, 1.5, are quite different values, not equal to each other.\n\nCatalyst being qualitative and temperature being quantitative is a measurement-type distinction, not the reason given for their interaction.\n\nEvery factor in this design is tested at exactly two levels, including factor pairs that do not show a large interaction, such as pressure and catalyst."
  },
  {
    id: "aee302_ch8_025",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "How is a two-factor interaction, such as $T \\times C$, calculated?",
    options: [
      "As half the difference between the average effect of one factor at each level of the other factor",
      "As the sum of the two factors' individual main effects",
      "As the product of the two factors' individual main effects",
      "As the number of runs where both factors are simultaneously at their high level"
    ],
    correctAnswer: 0,
    explanation: "The section describes the $T \\times C$ interaction as the difference between the average temperature effect with catalyst A and the average temperature effect with catalyst B, taking half that difference.\n\nSumming the two main effects, T and C, does not match the half-difference-of-conditional-effects calculation the section describes.\n\nMultiplying the two main effects together does not match the calculation the section describes.\n\nCounting runs at both high levels is a design-structure count, not the interaction calculation described."
  },
  {
    id: "aee302_ch8_026",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "At catalyst level B, the average temperature effect is $(31+35)/2=33$. At catalyst level A, the average temperature effect is $(12+14)/2=13$. What is the $T \\times C$ interaction?",
    options: [
      "46",
      "20",
      "23",
      "10"
    ],
    correctAnswer: 3,
    explanation: "The difference between the two conditional averages is $33-13=20$, and the $T \\times C$ interaction is half that difference, $20/2=10$.\n\n46 is the sum of the two conditional averages, not the interaction value.\n\n20 is the difference between the two conditional averages before halving, not the final interaction value.\n\n23 is instead the overall temperature main effect, an unrelated value."
  },
  {
    id: "aee302_ch8_027",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "At pressure level 200 kPa, the average temperature effect is $(14+35)/2=24.5$. At pressure level 100 kPa, the average temperature effect is $(12+31)/2=21.5$. What is the $T \\times P$ interaction?",
    options: [
      "46.0",
      "1.5",
      "3.0",
      "24.5"
    ],
    correctAnswer: 1,
    explanation: "The difference between the two conditional averages is $24.5-21.5=3.0$, and the $T \\times P$ interaction is half that difference, $3.0/2=1.5$.\n\n46.0 is the sum of the two conditional averages, not the interaction value.\n\n3.0 is the difference between the two conditional averages before halving, not the final interaction value.\n\n24.5 simply restates one of the two conditional averages, not the computed interaction."
  },
  {
    id: "aee302_ch8_028",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "What value is stated for the $P \\times C$ (pressure by catalyst) interaction in this design?",
    options: [
      "10",
      "1.5",
      "0",
      "23"
    ],
    correctAnswer: 2,
    explanation: "The section states that the $P \\times C$ interaction is 0.\n\n10 is instead the value of the $T \\times C$ interaction, a different quantity.\n\n1.5 is instead the value of the $T \\times P$ interaction, a different quantity.\n\n23 is instead the overall temperature main effect, an unrelated value."
  },
  {
    id: "aee302_ch8_029",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Two factors are said to interact when their effects behave purely additively, with no dependence on each other's level.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "The Factorial Experiment section states the opposite: interacting factors do not behave additively, since the effect of one factor depends on the level of the other, contradicting the stem's claim."
  },
  {
    id: "aee302_ch8_030",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "How is the three-factor interaction, $T \\times P \\times C$, calculated?",
    options: [
      "Using two measures of the $T \\times P$ interaction, one for each level of catalyst, and taking half their difference",
      "By multiplying the three individual main effects, T, P, and C, together",
      "By adding the three two-factor interactions, TP, TC, and PC, together",
      "By dividing the temperature main effect by the number of runs"
    ],
    correctAnswer: 0,
    explanation: "The section states that two measures of the $T \\times P$ interaction are available, one for each catalyst level, and the three-factor interaction is half the difference between these two measures.\n\nMultiplying the three main effects together does not match the half-difference-of-conditional-interactions calculation the section describes.\n\nAdding the three two-factor interactions together does not match the calculation the section describes for the three-factor interaction.\n\nDividing the temperature main effect by the number of runs does not match the calculation described."
  },
  {
    id: "aee302_ch8_031",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "The $T \\times P$ interaction with catalyst at level B is $[(Y_8-Y_7)-(Y_6-Y_5)]/2 = [(80-45)-(83-52)]/2 = (35-31)/2$. What is this value?",
    options: [
      "4",
      "66",
      "1",
      "2"
    ],
    correctAnswer: 3,
    explanation: "The numerator is $35-31=4$, and dividing by 2 gives $4/2=2$.\n\n4 is the numerator before dividing by 2, not the final value.\n\n66 results from mistakenly adding 35 and 31 instead of subtracting them.\n\n1 is instead the corresponding value computed with catalyst at level A, a different quantity."
  },
  {
    id: "aee302_ch8_032",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "The $T \\times P$ interaction with catalyst at level A is $[(Y_4-Y_3)-(Y_2-Y_1)]/2 = [(68-54)-(72-60)]/2 = (14-12)/2$. What is this value?",
    options: [
      "2",
      "1",
      "26",
      "0.5"
    ],
    correctAnswer: 1,
    explanation: "The numerator is $14-12=2$, and dividing by 2 gives $2/2=1$.\n\n2 is the numerator before dividing by 2, not the final value.\n\n26 results from mistakenly adding 14 and 12 instead of subtracting them.\n\n0.5 is instead the final three-factor interaction value, computed from this result and the catalyst-B result, not this intermediate value itself."
  },
  {
    id: "aee302_ch8_033",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Given the $T \\times P$ interaction with catalyst B equal to 2, and with catalyst A equal to 1, what is the $T \\times P \\times C$ three-factor interaction?",
    options: [
      "3",
      "1",
      "0.5",
      "2"
    ],
    correctAnswer: 2,
    explanation: "The three-factor interaction is half the difference between the two conditional measures: $(2-1)/2=0.5$.\n\n3 results from mistakenly adding the two values instead of subtracting them before halving.\n\n1 is the difference between the two values before halving, not the final interaction value.\n\n2 simply restates the catalyst-B conditional value, not the final three-factor interaction."
  },
  {
    id: "aee302_ch8_034",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Regarding the divisors used in the table-of-signs method for this $2^3$ design, which of the following is true?",
    options: [
      "The divisor for the mean is 4",
      "The divisor for every main effect and interaction is 4",
      "All of these",
      "None of these"
    ],
    correctAnswer: 1,
    explanation: "The table of signs gives the mean a divisor of 8, not 4, since the mean is the average of all 8 observations.\n\nEvery main effect and interaction (T, P, C, TP, TC, PC, TPC) uses a divisor of 4, matching the second statement.\n\nSince only the second statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly supported, the option denying both is not correct."
  },
  {
    id: "aee302_ch8_035",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In the table-of-signs method, how is an effect's estimate computed?",
    options: [
      "By summing the yields with the sign given in that effect's column, then dividing by the appropriate divisor",
      "By summing the yields with no signs applied at all, then multiplying by the divisor",
      "By counting how many runs have a \"+\" sign in that effect's column",
      "By averaging the divisor values across every column in the table"
    ],
    correctAnswer: 0,
    explanation: "The table of signs method computes each effect by applying that effect's column of plus and minus signs to the corresponding yields, summing the signed values, and dividing by the divisor shown for that column.\n\nSumming yields without applying any signs would not distinguish high-level from low-level contributions, and the result is divided by the divisor, not multiplied by it.\n\nCounting \"+\" signs gives a tally, not a signed sum of the actual yield values.\n\nAveraging divisor values across columns does not describe how any individual effect's estimate is obtained."
  },
  {
    id: "aee302_ch8_036",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In the table-of-signs method, how is the sign for a two-factor interaction column, such as $T \\times P$, obtained for each run?",
    options: [
      "By multiplying the signs of the individual T and P columns for that run",
      "By adding the numeric run number to the sign of the T column",
      "By always assigning a \"+\" sign regardless of the individual factor signs",
      "By copying the sign of whichever individual factor column appears first in the table"
    ],
    correctAnswer: 0,
    explanation: "The interaction column's sign for each run is obtained by multiplying the signs of the individual factor columns involved, so a run with T\"-\" and P\"-\" gives a TP sign of \"+\", since a negative times a negative is positive.\n\nAdding the run number to a sign is not a meaningful operation and is not how interaction signs are derived.\n\nInteraction signs vary by run, alternating between \"+\" and \"-\" across the eight runs, not fixed at \"+\" throughout.\n\nSimply copying one factor's column would ignore the other factor entirely, not reflecting a true interaction between the two."
  },
  {
    id: "aee302_ch8_037",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using the table of signs, the pressure effect is computed as $(-60-72+54+68-52-83+45+80)$, divided by the divisor. What is the pressure effect?",
    options: [
      "-20",
      "-2.5",
      "-80",
      "-5"
    ],
    correctAnswer: 3,
    explanation: "The signed sum is $-60-72+54+68-52-83+45+80=-20$, and dividing by the divisor of 4 gives $-20/4=-5$.\n\n-20 is the signed sum before dividing by 4, not the final effect.\n\n-2.5 results from mistakenly dividing -20 by 8, the mean's divisor, instead of 4.\n\n-80 results from mistakenly multiplying -20 by 4 instead of dividing."
  },
  {
    id: "aee302_ch8_038",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using the table of signs, the $T \\times P \\times C$ interaction is computed as $(-60+72+54-68+52-83-45+80)$, divided by the divisor. What is this interaction?",
    options: [
      "2",
      "0.5",
      "8",
      "0.25"
    ],
    correctAnswer: 1,
    explanation: "The signed sum is $-60+72+54-68+52-83-45+80=2$, and dividing by the divisor of 4 gives $2/4=0.5$.\n\n2 is the signed sum before dividing by 4, not the final effect.\n\n8 results from mistakenly multiplying 2 by 4 instead of dividing.\n\n0.25 results from mistakenly dividing 2 by 8, the mean's divisor, instead of 4."
  },
  {
    id: "aee302_ch8_039",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In Yates' algorithm, the divisor for the mean (first row) is $2^k$, while the divisor for every other effect is $2^{k-1}$.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Yates' Algorithm section states this directly: the first element of the divisor column is $2^k$, and all others are $2^{k-1}$, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch8_040",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "What are the general steps of Yates' algorithm for computing effects?",
    options: [
      "Set up the design in standard order, then repeatedly sum and difference successive pairs of observations across k columns, then divide by the appropriate divisor",
      "Randomly reorder the runs, then compute only the grand mean of all observations",
      "Discard every observation except the first and last run",
      "Compute the standard deviation of the yields before doing anything else"
    ],
    correctAnswer: 0,
    explanation: "The section describes Yates' algorithm as setting up the design in standard form, associating observations with it, considering observations in successive pairs, entering sums then differences in each of k columns, and finally dividing column k's entries by the divisor column to obtain each estimate.\n\nRandomly reordering the runs would break the standard order the algorithm specifically requires as its first step.\n\nDiscarding all but two observations would make it impossible to estimate 7 separate effects from the design.\n\nComputing a standard deviation is a separate calculation described later in the unit, not a step of Yates' algorithm itself."
  },
  {
    id: "aee302_ch8_041",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In Yates' algorithm, how is the first column (C1) formed from the raw yields?",
    options: [
      "By first listing the sums of successive pairs of yields, then the differences of successive pairs",
      "By first listing the differences of successive pairs, then the sums of successive pairs",
      "By squaring every individual yield value",
      "By listing the yields in reverse order with no arithmetic applied"
    ],
    correctAnswer: 0,
    explanation: "The section states that in column 1, we first enter the sum of pairs and then the differences, taking the next number from the previous pair.\n\nReversing the order, differences first and then sums, does not match the sequence the section describes.\n\nSquaring the yields is not part of Yates' algorithm, which only uses addition and subtraction to build each column.\n\nSimply reversing the yield order without any arithmetic would not produce the sums and differences the algorithm requires."
  },
  {
    id: "aee302_ch8_042",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "For a $2^3$ design, how many successive columns (C1, C2, C3) are computed in Yates' algorithm before dividing by the divisor?",
    options: [
      "1",
      "2",
      "3",
      "7"
    ],
    correctAnswer: 2,
    explanation: "The section states that this process is carried on till column k is filled, and since $k=3$ for this design, three successive columns are computed.\n\n1 column would be used for a $2^1$ design with a single factor, not this $2^3$ design.\n\n2 columns would be used for a $2^2$ design with two factors, not this $2^3$ design.\n\n7 is instead the number of effect estimates produced, not the number of columns computed."
  },
  {
    id: "aee302_ch8_043",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In Yates' algorithm for this $2^3$ design, the first entry of column 1 (C1) is the sum of the first pair of yields, $Y_1+Y_2=60+72$. What is this value?",
    options: [
      "12",
      "60",
      "4320",
      "132"
    ],
    correctAnswer: 3,
    explanation: "Summing the first pair of yields gives $60+72=132$.\n\n12 is instead the difference, $72-60$, which appears later in column 1, not this first sum entry.\n\n60 simply restates the first yield value alone, not the sum of the pair.\n\n4320 results from mistakenly multiplying the two yields instead of adding them."
  },
  {
    id: "aee302_ch8_044",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In Yates' algorithm for this $2^3$ design, the fifth entry of column 1 (C1) is the difference of the first pair of yields, $Y_2-Y_1=72-60$. What is this value?",
    options: [
      "132",
      "12",
      "-12",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Subtracting gives $72-60=12$.\n\n132 is instead the sum of the same pair, which appears earlier in column 1, not this difference entry.\n\n-12 reverses the sign by subtracting in the wrong order, $60-72$, instead of $72-60$.\n\n6 results from mistakenly halving the correct difference of 12."
  },
  {
    id: "aee302_ch8_045",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In Yates' algorithm, the final column (C3) entry for the temperature row is 92, and the divisor for this row is 4. What is the temperature effect estimate?",
    options: [
      "368",
      "88",
      "23",
      "96"
    ],
    correctAnswer: 2,
    explanation: "Dividing the column 3 entry by its divisor gives $92/4=23$, matching the temperature effect obtained by both earlier methods.\n\n368 results from mistakenly multiplying 92 by 4 instead of dividing.\n\n88 results from an unrelated arithmetic slip in the division.\n\n96 results from mistakenly adding 4 to 92 instead of dividing."
  },
  {
    id: "aee302_ch8_046",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "In Yates' algorithm, the final column (C3) entry for the mean row is 514, and the divisor for this row is 8. What is the mean estimate?",
    options: [
      "4112",
      "57.11",
      "506",
      "64.25"
    ],
    correctAnswer: 3,
    explanation: "Dividing the column 3 entry by its divisor gives $514/8=64.25$, matching the grand mean of all 8 yields.\n\n4112 results from mistakenly multiplying 514 by 8 instead of dividing.\n\n57.11 results from mistakenly dividing 514 by 9 instead of 8.\n\n506 results from mistakenly subtracting 8 from 514 instead of dividing."
  },
  {
    id: "aee302_ch8_047",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Regarding the standard error calculation in this unit, which of the following is correct?",
    options: [
      "The pooled estimate of $\\sigma^2$ is computed as $\\Sigma S_i^2$ divided by the total degrees of freedom",
      "The standard error of an effect equals $\\sigma^2$ itself, with no further calculation",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "The pooled estimate of $\\sigma^2$ is computed by summing each run's $S_i^2$ and dividing by the total degrees of freedom across all runs, matching the first statement.\n\nThe standard error of an effect requires first computing $V(\\text{effect})=4\\sigma^2/N$ and then taking its square root; it is not simply $\\sigma^2$ itself.\n\nSince only the first statement is accurate, the option naming it alone is the correct outcome.\n\nBecause one of the two statements is directly contradicted by the section, the option denying both is not correct."
  },
  {
    id: "aee302_ch8_048",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Why might an experimenter replicate each run of a factorial design under the same experimental conditions?",
    options: [
      "To estimate the standard deviation of a single observation, and hence the standard deviation of the effects",
      "To guarantee that every effect estimate will turn out to be exactly zero",
      "To reduce the total number of factors being studied",
      "To avoid ever having to compute a main effect"
    ],
    correctAnswer: 0,
    explanation: "The section states that when run replicates are made under a given set of conditions, the variation between their associated observations may be used to estimate the standard deviation of a single observation, and hence the standard deviation of the effects.\n\nReplication does not guarantee any particular effect value; it instead provides information about the variability underlying whatever effects are estimated.\n\nReplication does not change the number of factors being studied; it repeats measurements at each existing treatment combination.\n\nMain effects are still computed from the replicated data, typically using the average of each run's replicates, so replication does not avoid this calculation."
  },
  {
    id: "aee302_ch8_049",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Run 1 is replicated twice, giving values 59 and 61. What is the average of these two replicates?",
    options: [
      "59",
      "60",
      "61",
      "120"
    ],
    correctAnswer: 1,
    explanation: "The average of 59 and 61 is $(59+61)/2=120/2=60$.\n\n59 and 61 each simply restate one of the two individual replicates, not their average.\n\n120 is the sum of the two replicates before dividing by 2, not the average."
  },
  {
    id: "aee302_ch8_050",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "For a run replicated twice, the sample variance between the two replicates can be computed as $S_i^2 = (\\text{difference between replicates})^2 / 2$. Run 3's two replicates are 50 and 58, a difference of 8. What is $S_i^2$ for run 3?",
    options: [
      "8",
      "16",
      "32",
      "64"
    ],
    correctAnswer: 2,
    explanation: "Using $S_i^2=(\\text{difference})^2/2=8^2/2=64/2=32$.\n\n8 simply restates the difference itself, without squaring or dividing.\n\n16 results from mistakenly dividing 32 by 2 again instead of stopping after the first division.\n\n64 is the squared difference, $8^2$, before dividing by 2, not the final $S_i^2$ value."
  },
  {
    id: "aee302_ch8_051",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Using the same formula, run 1's two replicates are 59 and 61, a difference of 2. What is $S_i^2$ for run 1?",
    options: [
      "4",
      "1",
      "0.5",
      "2"
    ],
    correctAnswer: 3,
    explanation: "Using $S_i^2=(\\text{difference})^2/2=2^2/2=4/2=2$.\n\n4 is the squared difference, $2^2$, before dividing by 2, not the final $S_i^2$ value.\n\n1 results from mistakenly dividing 2 by 2 again instead of stopping after the first division.\n\n0.5 results from an unrelated arithmetic slip in the division."
  },
  {
    id: "aee302_ch8_052",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "With each of the 8 runs replicated twice, how many degrees of freedom does each individual run's $S_i^2$ contribute?",
    options: [
      "0",
      "1",
      "2",
      "8"
    ],
    correctAnswer: 1,
    explanation: "With $n_i=2$ replicates per run, each run contributes $n_i-1=2-1=1$ degree of freedom toward the pooled variance estimate.\n\n0 degrees of freedom would mean no information is contributed at all, which is not the case with 2 replicates.\n\n2 degrees of freedom would require 3 replicates per run, $n_i-1=2$, not the 2 replicates actually used.\n\n8 is instead the total degrees of freedom summed across all 8 runs combined, not the contribution from a single run."
  },
  {
    id: "aee302_ch8_053",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "The general formula for the variance of an effect is $V(\\text{effect}) = 4\\sigma^2/N$, where N is the total number of observations.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The Factorial Experiment section states this general formula directly, where $N$ equals the number of runs multiplied by the number of replicates, matching the stem's claim exactly."
  },
  {
    id: "aee302_ch8_054",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Summing each of the 8 runs' $S_i^2$ values gives $\\Sigma S_i^2=64$, with each run contributing 1 degree of freedom, for a total of 8 degrees of freedom. What is the pooled estimate of $\\sigma^2$?",
    options: [
      "64",
      "512",
      "8",
      "0.125"
    ],
    correctAnswer: 2,
    explanation: "The pooled estimate is $\\Sigma S_i^2$ divided by the total degrees of freedom: $64/8=8$.\n\n64 simply restates $\\Sigma S_i^2$ itself, without dividing by the total degrees of freedom.\n\n512 results from mistakenly multiplying 64 by 8 instead of dividing.\n\n0.125 results from inverting the ratio, computing $8/64$ instead of $64/8$."
  },
  {
    id: "aee302_ch8_055",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "With 8 runs and 2 replicates per run, what is the total number of observations, N?",
    options: [
      "8",
      "10",
      "64",
      "16"
    ],
    correctAnswer: 3,
    explanation: "The total number of observations is $N=(\\text{number of runs}) \\times (\\text{number of replicates})=8 \\times 2=16$.\n\n8 simply restates the number of runs alone, without accounting for the replicates.\n\n10 results from mistakenly adding 8 and 2 instead of multiplying them.\n\n64 is instead the sum of the $S_i^2$ values, an unrelated quantity."
  },
  {
    id: "aee302_ch8_056",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Given the pooled estimate $\\sigma^2=8$ and $N=16$ total observations, what is $V(\\text{effect})=4\\sigma^2/N$?",
    options: [
      "0.5",
      "2",
      "32",
      "4"
    ],
    correctAnswer: 1,
    explanation: "Using $V(\\text{effect})=4\\sigma^2/N=(4 \\times 8)/16=32/16=2$.\n\n0.5 results from mistakenly dividing $\\sigma^2$ by $N$ directly, $8/16$, and forgetting to multiply by 4.\n\n32 is the numerator, $4\\sigma^2$, before dividing by $N$, not the final $V(\\text{effect})$.\n\n4 results from mistakenly dividing 16 by 4 rather than computing $4\\sigma^2/N$ correctly."
  },
  {
    id: "aee302_ch8_057",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Given $V(\\text{effect})=2$, what is the standard error of an effect (the square root of its variance)?",
    options: [
      "4",
      "1.0",
      "1.4",
      "2.0"
    ],
    correctAnswer: 2,
    explanation: "The standard error is $\\sqrt{V(\\text{effect})}=\\sqrt{2} \\approx 1.4$, matching the standard error reported for every main effect and interaction in the unit's interpretation table.\n\n4 results from mistakenly squaring 2 instead of taking its square root.\n\n1.0 is an unrelated rounding of a different quantity, not $\\sqrt{2}$.\n\n2.0 simply restates $V(\\text{effect})$ itself, without taking the square root."
  },
  {
    id: "aee302_ch8_058",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Regarding the final interpretation of results in this unit, which of the following is true?",
    options: [
      "The temperature main effect's standard error (1.4) exceeds its estimate (23.0)",
      "The $P \\times C$ interaction (0.0) is much larger than its standard error (1.4)",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "The temperature main effect's estimate, 23.0, is far larger than its standard error, 1.4, not the reverse, so the first statement is false.\n\nThe $P \\times C$ interaction's estimate, 0.0, is smaller than its standard error, 1.4, not larger, so the second statement is also false.\n\nSince neither statement is accurate, the option affirming either or both is not correct.\n\nBecause both statements are false, the option denying both is the correct outcome."
  },
  {
    id: "aee302_ch8_059",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "The final interpretation table reports the main effects with their standard errors as: temperature 23.0±1.4, pressure -5.0±1.4, and catalyst 1.5±1.4. Which main effect has the largest magnitude?",
    options: [
      "Temperature",
      "Pressure",
      "Catalyst",
      "All three have exactly the same magnitude"
    ],
    correctAnswer: 0,
    explanation: "Comparing the magnitudes 23.0, 5.0, and 1.5, temperature has by far the largest magnitude of the three main effects.\n\nPressure's magnitude, 5.0, is smaller than temperature's, 23.0.\n\nCatalyst's magnitude, 1.5, is the smallest of the three.\n\nThe three magnitudes, 23.0, 5.0, and 1.5, are clearly different from one another, not equal."
  },
  {
    id: "aee302_ch8_060",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "The final interpretation table reports the two-factor interactions as: $T \\times P$ 1.5±1.4, $T \\times C$ 10.0±1.4, and $P \\times C$ 0.0±1.4. Which two-factor interaction has the largest magnitude?",
    options: [
      "$T \\times P$",
      "$T \\times C$",
      "$P \\times C$",
      "All three have exactly the same magnitude"
    ],
    correctAnswer: 1,
    explanation: "Comparing the magnitudes 1.5, 10.0, and 0.0, $T \\times C$ has by far the largest magnitude of the three two-factor interactions.\n\n$T \\times P$'s magnitude, 1.5, is smaller than $T \\times C$'s, 10.0.\n\n$P \\times C$'s magnitude, 0.0, is the smallest of the three, indicating essentially no interaction.\n\nThe three magnitudes, 1.5, 10.0, and 0.0, are clearly different from one another, not equal."
  },
  {
    id: "aee302_ch8_061",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Comparing each effect's magnitude to the standard error of 1.4, which of the following effects appears large enough to be a real effect rather than random noise: temperature (23.0), catalyst (1.5), or $P \\times C$ (0.0)?",
    options: [
      "Temperature only",
      "Catalyst only",
      "$P \\times C$ only",
      "All three appear equally likely to be real effects"
    ],
    correctAnswer: 0,
    explanation: "Temperature's estimate, 23.0, is more than 16 times its standard error of 1.4, far too large to be explained by random variation alone, unlike catalyst (1.5) and $P \\times C$ (0.0), both of which are comparable to or smaller than their own standard error.\n\nCatalyst's estimate, 1.5, is close in size to its standard error, 1.4, so it cannot be confidently distinguished from random noise.\n\n$P \\times C$'s estimate, 0.0, is smaller than its standard error, 1.4, giving no indication of a real interaction.\n\nThe three effects have very different magnitudes relative to their shared standard error of 1.4, so they do not appear equally likely to be real."
  },
  {
    id: "aee302_ch8_062",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Why might the catalyst main effect (1.5) be considered NOT practically significant, despite being a nonzero number?",
    options: [
      "Because its magnitude, 1.5, is close to its standard error, 1.4, so it could easily be due to random variation",
      "Because catalyst is a qualitative factor, and qualitative factors can never have a real effect",
      "Because 1.5 is an odd, non-integer number",
      "Because the catalyst effect was computed using a different formula from the other main effects"
    ],
    correctAnswer: 0,
    explanation: "Since the catalyst effect's magnitude, 1.5, is close to its standard error, 1.4, the observed value is well within the range that random variation alone could produce, so it cannot be confidently distinguished from noise.\n\nQualitative factors, such as catalyst, are fully capable of having real, detectable main effects; the section places no such restriction on them.\n\nWhether a number is odd or non-integer has no bearing on whether an effect is practically significant.\n\nThe catalyst effect was computed using the exact same methods, Method 1, Method 2, table of signs, and Yates' algorithm, as every other main effect in this unit."
  },
  {
    id: "aee302_ch8_063",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Why is it important to report the $T \\times C$ interaction (10.0) separately, even though the overall temperature main effect (23.0) already seems large?",
    options: [
      "Because the temperature effect is not the same at both catalyst levels, 13 with catalyst A versus 33 with catalyst B, so the overall average effect alone would mask this dependency",
      "Because the main effect and the interaction are always numerically identical, so either one can be reported",
      "Because interactions are always more important to report than main effects, regardless of their size",
      "Because the $T \\times C$ interaction replaces the need to report the temperature main effect at all"
    ],
    correctAnswer: 0,
    explanation: "Since the temperature effect is 13 with catalyst A but 33 with catalyst B, reporting only the single overall average temperature effect, 23.0, would hide the fact that temperature's influence depends heavily on which catalyst is used, information the $T \\times C$ interaction specifically captures.\n\nThe main effect, 23.0, and the interaction, 10.0, are clearly different numbers, not identical.\n\nWhether an interaction is more important than a main effect depends on its size relative to its standard error, not a fixed rule that interactions always take priority.\n\nThe temperature main effect and the $T \\times C$ interaction describe different aspects of the data and are both reported together, not one in place of the other."
  },
  {
    id: "aee302_ch8_064",
    course: "AEE 302",
    chapter: "Chapter 8",
    text: "Comparing each effect's estimate to its standard error, the pressure by catalyst ($P \\times C$) interaction of 0.0 appears to be a strong, significant interaction.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "An estimate of 0.0 is smaller than its standard error of 1.4, giving no indication of a real interaction; a strong, significant effect would instead need to be much larger in magnitude than its standard error, contradicting the stem's claim."
  }
];

export default aee302Chapter8Questions;
