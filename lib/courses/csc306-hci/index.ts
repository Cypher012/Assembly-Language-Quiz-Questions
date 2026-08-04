import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc306Lecture1Questions from "./csc306_lecture1_35questions";
import csc306Chapter2Questions from "./csc306_ch2_usability_affordance";
import csc306Chapter3Questions from "./csc306_ch3_ergonomics";
import csc306Chapter4Questions from "./csc306_ch4_cognitive_physical_ergonomics";
import csc306Chapter5Questions from "./csc306_ch5_hci_full_course";

export const csc306HciCourse: Course = {
  id: "csc306-human-computer-interaction",
  code: "CSC306",
  name: "Human Computer Interaction",
  description:
    "How people interact with computing systems, and how to design effective, efficient, and satisfying experiences.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Introduction to HCI",
      description:
        "Core HCI concepts, usability goals, affordance, the human factor (cognition and perception), and HCI's broader impact on society and culture.",
    },
    {
      id: "Chapter 2",
      label: "Usability & Affordance",
      description:
        "Usability definitions and Nielsen's heuristics, the System Usability Scale, affordance theory and types, the Norman Door, signifiers, and core design principles.",
    },
    {
      id: "Chapter 3",
      label: "Human Cognitive & Physical Ergonomics",
      description:
        "Cognitive and physical ergonomics foundations, memory and cognitive load, workstation and input design, evaluation methods, and real-world case studies.",
    },
    {
      id: "Chapter 4",
      label: "Cognitive & Physical Ergonomics II",
      description:
        "Hick's Law, Fitts's Law, the Human Information Processing model, the GEMS error taxonomy, and physical ergonomics factors and health issues.",
    },
    {
      id: "Chapter 5",
      label: "Human Computer Interaction (Lectures 1-10)",
      description:
        "Cognition, ergonomics, UI/UX principles, user research, prototyping, evaluation, inclusive design, web/e-commerce UX, and AI for HCI.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc306Lecture1Questions,
      ...csc306Chapter2Questions,
      ...csc306Chapter3Questions,
      ...csc306Chapter4Questions,
      ...csc306Chapter5Questions,
    ];
  },
};
