import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import cpe316Chapter1Questions from "./cpe316-ch1";
import cpe316Chapter2Questions from "./cpe316-ch2";
import cpe316Chapter3Questions from "./cpe316-ch3";
import cpe316Chapter4Questions from "./cpe316-ch4";
import cpe316Chapter5Questions from "./cpe316-ch5";
import cpe316Chapter6Questions from "./cpe316-ch6";
import cpe316Chapter7Questions from "./cpe316-ch7";

export const cpe316Course: Course = {
  id: "cpe316",
  code: "CPE316",
  name: "Introduction to Artificial Intelligence",
  description:
    "The Arokun framework's Yoruba-philosophy perspective on intelligence, automated intelligence, and its social implications.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Artificial Intelligence: An Introduction",
      description:
        "Conventional AI history and definitions, the six theories of intelligence, Organism vs Mechanism, the Turing Test, and the Chinese Room Problem.",
    },
    {
      id: "Chapter 2",
      label: "Ogbon (Intelligence) in Arokun",
      description:
        "Ogbon (Intelligence) in Arokun: definitions, the three kinds of intelligence, organism-computer comparisons, and social issues in AI.",
    },
    {
      id: "Chapter 3",
      label: "Ede Ahunkale (Formal Language) in AI",
      description:
        "The four-part grammar and Four-Tuple definition of a formal language, its operator tables, and the major/minor operand rules.",
    },
    {
      id: "Chapter 4",
      label: "Adase (Individual Intelligence): Kinship Narrative",
      description:
        "Applying Assertions, Relations, and Quantification to English and Yoruba kinship, including the Omo, Iyawo, and Egbon relations.",
    },
    {
      id: "Chapter 5",
      label: "Idije (Competitive Intelligence): The Ayo Game",
      description:
        "Competitive intelligence in strategic games, the full Ayo game process, its computational rendering via game trees and matrices, and Loss/Gain strategy perspectives.",
    },
    {
      id: "Chapter 6",
      label: "Planning and Spatial Rendering: Apalara the Robot",
      description:
        "The three kinds of plan, spatial rendering across regular/context-neutral/context-sensitive language, and the Apalara blocks-world robot planning language.",
    },
    {
      id: "Chapter 7",
      label: "Ajose (Cooperative Intelligence): Activity of Organisms",
      description:
        "Cooperative intelligence in insect communities, the Ikan (Termite) mound-building narrative, its body organs and antenna-driven movement rules, and the tripod-gait locomotion simulation.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...cpe316Chapter1Questions,
      ...cpe316Chapter2Questions,
      ...cpe316Chapter3Questions,
      ...cpe316Chapter4Questions,
      ...cpe316Chapter5Questions,
      ...cpe316Chapter6Questions,
      ...cpe316Chapter7Questions,
    ];
  },
};
