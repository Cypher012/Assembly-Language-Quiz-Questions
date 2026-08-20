import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import cpe310Chapter1_1Questions from "./cpe310_ch1_1_software_agent_foundations";
import cpe310Chapter1_2Questions from "./cpe310_ch1_2_agentic_ai_architecture";
import cpe310Chapter1_3Questions from "./cpe310_ch1_3_believable_agents";
import cpe310Chapter1_4Questions from "./cpe310_ch1_4_collaborative_agents";
import cpe310Chapter2Questions from "./cpe310_ch2_agent_theory_formal_models";
import cpe310Chapter3Questions from "./cpe310_ch3_intelligent_agents_formalism";
import cpe310Chapter4Questions from "./cpe310_ch4_agent_architecture";
import cpe310Chapter5Questions from "./cpe310_ch5_intelligent_agent";
import cpe310Chapter6Questions from "./cpe310_ch6_multi_agent_systems";

export const cpe310AgentBasedSystemsCourse: Course = {
  id: "cpe310-agent-based-systems",
  code: "CPE310",
  name: "Introduction to Agent-Based Systems",
  description:
    "Software agent theory and architecture, from Nwana's foundational definitions and the Actor Model through agentic AI powered by LLMs, believable agents (personality, emotion, the Hap architecture), and collaborative multi-agent systems.",
  chapters: [
    {
      id: "Chapter 1.1",
      label: "Software Agent Foundations",
      description:
        "Nwana's definition and six defining terms, agents versus traditional software, the six core characteristics, the historical timeline from Selfridge through LLMs, Nwana's agent typology, the Three Pillars (Autonomy, Asynchronicity, Agency), the purpose of agents, the Perceive-Reason-Act cognitive cycle, and the agent's mental state (beliefs, goals, intentions, plan library).",
    },
    {
      id: "Chapter 1.2",
      label: "Agentic AI: Architecture & the Modern Era",
      description:
        "The four functional modules (Perception, Cognitive, Action, Learning) and their submodules, short-term versus long-term memory, the five learning paradigms, the agent-theory-meets-generative-AI convergence timeline, traditional symbolic versus LLM-powered reasoning, key generative AI enhancements, achieving long-term memory (RAG, Agent Store, prompt chaining), Traditional AI vs. Software Agents vs. Agentic AI, the Four Pillars of Agentic AI convergence, real-world applications, and software agent vs. agentic AI design decisions.",
    },
    {
      id: "Chapter 1.3",
      label: "Believable Agents",
      description:
        "What believable agents are and how they differ from realistic or intelligent agents, the six requirements for believability, the six Illusion of Life agent requirements, the Hap architecture (Goals, Behaviors, Primitive Actions) and its role as a unified architecture, the emotion generation and integration pipeline, natural language generation requirements and the NLG-in-Hap approach, and the six guidelines for building believable agents.",
    },
    {
      id: "Chapter 1.4",
      label: "Collaborative Agents",
      description:
        "The four traits of collaborative AI agents, distributed intelligence and division of labor, the five-step pipeline for how collaborative agents learn, the seven-agent Multi-Agent Resume & Cover Letter Optimizer case study and its workflow, healthcare and learning applications, the benefits and challenges of collaborative AI, and future directions.",
    },
    {
      id: "Chapter 2",
      label: "Agent Theory: Formal Models and Intentions",
      description:
        "The formal agent model (environment E, action repertoire Ac, runs, and the history-based agent function), purely reactive agents versus agents with state (see, next, action), the properties of intelligent agents (reactivity, proactiveness, social ability), the BDI model of agents as intentional systems, commitments, intentions and intention persistence, the conditions for rationally dropping an intention, and the Bratman Asymmetry Thesis.",
    },
    {
      id: "Chapter 3",
      label: "Intelligent Agents: The Formal Architecture",
      description:
        "Reactive, pro-active, and social behaviour (cooperation, coordination, negotiation) and other agent properties, agents versus objects and expert systems, agents and AI, the five environment dichotomies (accessible, deterministic, episodic, static, discrete), agents as intentional systems (Dennett, McCarthy, Shoham), post-declarative systems, the abstract architecture (E, Ac, runs, the state transformer function, agents with state), tasks and utility functions over states and runs, the Tileworld example, expected utility with a fully worked numeric example, optimal and bounded optimal agents, predicate task specifications, task environments, achievement and maintenance tasks, and agent synthesis soundness and completeness.",
    },
    {
      id: "Chapter 4",
      label: "Agent Architecture",
      description:
        "The basic closed-loop cycle (environment, sensors, processing unit, knowledge base, actuators) and the four types of agent architecture: Simple Reactive Agents (condition-action rules), Reactive Planners (perception module, behavior modules, action selection), Deliberative Architecture (world model, reasoning engine, planner), and Layered Architecture (deliberative, executive, and reactive layers), with the advantages, limitations, and applications of each.",
    },
    {
      id: "Chapter 5",
      label: "Intelligent Agent",
      description:
        "Named forms of cooperation (task-oriented, information-sharing, joint action), mechanisms of coordination (explicit, implicit/stigmergy) and agent communication languages, forms of negotiation (bilateral, multi-lateral, argumentation-based), expert system examples (MYCIN, DENDRAL, XCON), the four-stage perception pipeline (sensing, preprocessing, feature extraction, interpretation), the policy and transition function formalization of state-based agents, named environment-type combinations, and properties of an optimal agent, plus a revision pass over the environment/BDI/abstract-architecture/utility/task-environment core shared with Chapter 3.",
    },
    {
      id: "Chapter 6",
      label: "Multi-Agent Systems",
      description:
        "Learning agents (performance element, learning element, critic, problem generator), the definition and characteristics of Multi-Agent Systems, economically inspired MAS (auctions, market pricing, negotiation, contracts), collaborating agents, agent teams (specialized roles in a disaster response case study), agent modeling (reactive, deliberative, and hybrid agents), multi-agent learning (independent, cooperative, competitive learning; reinforcement learning, Q-learning, deep RL, evolutionary learning), robotic agents (sensors and actuators), and mobile agents (migration, advantages, applications).",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...cpe310Chapter1_1Questions,
      ...cpe310Chapter1_2Questions,
      ...cpe310Chapter1_3Questions,
      ...cpe310Chapter1_4Questions,
      ...cpe310Chapter2Questions,
      ...cpe310Chapter3Questions,
      ...cpe310Chapter4Questions,
      ...cpe310Chapter5Questions,
      ...cpe310Chapter6Questions,
    ];
  },
};
