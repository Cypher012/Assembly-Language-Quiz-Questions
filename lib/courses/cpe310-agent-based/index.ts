import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import cpe310Chapter1 from "./chapter1";
import cpe310Chapter2 from "./chapter2";
import cpe310Chapter3 from "./chapter3";
import cpe310Chapter4 from "./chapter4";

export const cpe310AgentBasedCourse: Course = {
  id: "cpe310-agent-based",
  code: "CPE310",
  name: "Agent-Based Systems",
  description:
    "Explore the theory, architecture, and design of intelligent software agents from foundational agent theory and typology to deliberative, reactive, and layered architectures.",
  chapters: [
    {
      id: "Chapter 1",
      label: "Introduction to Agent-Based Systems",
      description:
        "Core concepts of software agents: Nwana's typology, the three pillars of agency, the Perceive-Reason-Act cycle, believable agents, collaborative agents, and agentic AI.",
    },
    {
      id: "Chapter 2",
      label: "Agent Theory",
      description:
        "Formal foundations of agent theory: environment models, action repertoires, runs, commitments, intentions, decision-theoretic agents, and Markov decision processes.",
    },
    {
      id: "Chapter 3",
      label: "Intelligent Agents",
      description:
        "Agent-environment interaction, the sense-decide-act loop, and classification of agent types based on Wooldridge's Introduction to Multiagent Systems.",
    },
    {
      id: "Chapter 4",
      label: "Agent Architecture",
      description:
        "Internal design of intelligent agents: Simple Reactive, Reactive Planners, Deliberative, and Layered architectures with their components, advantages, limitations, and applications.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...cpe310Chapter1,
      ...cpe310Chapter2,
      ...cpe310Chapter3,
      ...cpe310Chapter4,
    ];
  },
};
