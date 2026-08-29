import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import aee302Chapter1Questions from "./aee302-ch1";
import aee302Chapter2Questions from "./aee302-ch2";
import aee302Chapter3Questions from "./aee302-ch3";
import aee302Chapter4Questions from "./aee302-ch4";
import aee302Chapter5Questions from "./aee302-ch5";
import aee302Chapter6Questions from "./aee302-ch6";
import aee302Chapter7Questions from "./aee302-ch7";
import aee302Chapter8Questions from "./aee302-ch8";

export const aee302StatisticsCourse: Course = {
  id: "aee302-statistics",
  code: "AEE302",
  name: "Statistics",
  description:
    "An introductory treatment of statistics covering the scope of statistical science, deductive and inductive reasoning, core definitions and terms used in experimental design and analysis, and graphical and numerical presentation of data.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Unit 1: Introduction to Statistics",
      description:
        "Scope of statistics, deductive vs inductive reasoning, core statistical definitions, and graphical/numerical data presentation.",
    },
    {
      id: "Chapter 2",
      label: "Unit 2: Normal Distribution and Sampling",
      description:
        "The normal and standard normal distributions, z-score calculations, and the elements of sampling and descriptive statistics.",
    },
    {
      id: "Chapter 3",
      label: "Unit 3: Hypothesis and Tests of Significance",
      description:
        "Null/alternative hypotheses, significance levels and P values, and the t-test and F-test procedures for comparing means and variances.",
    },
    {
      id: "Chapter 4",
      label: "Unit 4: Confidence Intervals for Location Effects",
      description:
        "Building confidence intervals for means using the normal or t distribution, with fully worked examples.",
    },
    {
      id: "Chapter 5",
      label: "Unit 5: Paired Sample Studies (Simple Blocking)",
      description:
        "Simple blocking and paired comparison testing, the paired-differences t-test, and its hypotheses and decision rule.",
    },
    {
      id: "Chapter 6",
      label: "Unit 6: One Factor Designs (ANOVA)",
      description:
        "Completely randomized design, the ANOVA framework for comparing more than two treatments, and the F-test decision rule.",
    },
    {
      id: "Chapter 7",
      label: "Unit 7: Randomized Block Design (2-Way ANOVA)",
      description:
        "Blocking to reduce experimental error, the RBD's block/treatment/error ANOVA decomposition, and its two F-test decision rules.",
    },
    {
      id: "Chapter 8",
      label: "Unit 8: Factorial Experiments (2^k Designs)",
      description:
        "Two-level factorial designs, main effects and interactions via four calculation methods, and the standard error of an effect.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...aee302Chapter1Questions,
      ...aee302Chapter2Questions,
      ...aee302Chapter3Questions,
      ...aee302Chapter4Questions,
      ...aee302Chapter5Questions,
      ...aee302Chapter6Questions,
      ...aee302Chapter7Questions,
      ...aee302Chapter8Questions,
    ];
  },
};
