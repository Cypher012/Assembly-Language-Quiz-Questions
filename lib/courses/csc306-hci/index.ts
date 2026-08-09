import { Course } from "../../courses";
import { QuestionV2 } from "../../quiz-types";
import csc306Lecture1Questions from "./csc306_lecture1_35questions";
import csc306Chapter2Questions from "./csc306_ch2_usability_affordance";
import csc306Chapter3Questions from "./csc306_ch3_ergonomics";
import csc306Chapter4Questions from "./csc306_ch4_cognitive_physical_ergonomics";
import csc306Lecture1IntroQuestions from "./csc306_ch5_l1_introduction_to_hci";
import csc306Lecture2CognitionQuestions from "./csc306_ch6_l2_cognition_perception";
import csc306Lecture3ErgonomicsQuestions from "./csc306_ch7_l3_ergonomics_physical_interaction";
import csc306Lecture4UiUxQuestions from "./csc306_ch8_l4_ui_ux_design_principles";
import csc306Lecture5UsersQuestions from "./csc306_ch9_l5_understanding_users";
import csc306Lecture6PrototypingQuestions from "./csc306_ch10_l6_system_design_prototyping";
import csc306Lecture7EvaluationQuestions from "./csc306_ch11_l7_evaluation_methods";
import csc306Lecture8InclusiveQuestions from "./csc306_ch12_l8_inclusive_design";
import csc306Lecture9WebQuestions from "./csc306_ch13_l9_web_ecommerce";
import csc306Lecture10AiQuestions from "./csc306_ch14_l10_ai_for_hci";

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
      label: "Lecture 1: Introduction to HCI",
      description:
        "What is HCI, a brief history, usability and affordance core concepts, the human factor preview, HCI's broader impact, and the road ahead.",
    },
    {
      id: "Chapter 6",
      label: "Lecture 2: Human Cognition & Perception",
      description:
        "Human perception and the senses, Gestalt principles, attention, memory, information processing models, mental models, and sensory-motor interaction.",
    },
    {
      id: "Chapter 7",
      label: "Lecture 3: Ergonomics & Physical Interaction",
      description:
        "What is ergonomics, physical ergonomics, input devices, touch and gesture interfaces, voice and emerging modalities, output devices, and accessibility from the start.",
    },
    {
      id: "Chapter 8",
      label: "Lecture 4: UI/UX Design Principles",
      description:
        "UI versus UX, visual hierarchy and information architecture, Nielsen's 10 usability heuristics, feedback timing, consistency and error prevention, and interface metaphors.",
    },
    {
      id: "Chapter 9",
      label: "Lecture 5: Understanding Users & Their Needs",
      description:
        "Why user research matters, choosing a research method, interviews, surveys and diary studies, affinity mapping, personas, design requirements, and the design brief.",
    },
    {
      id: "Chapter 10",
      label: "Lecture 6: System Design & Prototyping",
      description:
        "The five stages of design thinking, iterative design, sketching, wireframes, prototyping fidelity, testing prototypes, design tools, and handoff deliverables.",
    },
    {
      id: "Chapter 11",
      label: "Lecture 7: Evaluation Methods",
      description:
        "Why evaluation matters, usability testing, heuristic evaluation, cognitive walkthroughs, SUS and UMUX questionnaires, gathering feedback, and the impact versus effort matrix.",
    },
    {
      id: "Chapter 12",
      label: "Lecture 8: Inclusive Design",
      description:
        "What inclusive design is, the disability spectrum, cognitive diversity, visual and motor accessibility, WCAG in practice, assistive technologies, and testing for accessibility.",
    },
    {
      id: "Chapter 13",
      label: "Lecture 9: HCI for the Web & E-Commerce",
      description:
        "Web HCI at scale, information architecture and navigation, web search, the e-commerce funnel, checkout design, trust and persuasion, mobile web, and measuring web UX.",
    },
    {
      id: "Chapter 14",
      label: "Lecture 10: AI for HCI (Final & Bonus)",
      description:
        "AI and HCI's changing relationship, conversational interfaces, adaptive and personalised interfaces, AI in the design process, ethics and bias, designing for AI uncertainty, the automation spectrum, and a cross-lecture cheat sheet.",
    },
  ],
  getQuestions: (): QuestionV2[] => {
    return [
      ...csc306Lecture1Questions,
      ...csc306Chapter2Questions,
      ...csc306Chapter3Questions,
      ...csc306Chapter4Questions,
      ...csc306Lecture1IntroQuestions,
      ...csc306Lecture2CognitionQuestions,
      ...csc306Lecture3ErgonomicsQuestions,
      ...csc306Lecture4UiUxQuestions,
      ...csc306Lecture5UsersQuestions,
      ...csc306Lecture6PrototypingQuestions,
      ...csc306Lecture7EvaluationQuestions,
      ...csc306Lecture8InclusiveQuestions,
      ...csc306Lecture9WebQuestions,
      ...csc306Lecture10AiQuestions,
    ];
  },
};
