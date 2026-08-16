import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter4Questions: QuestionV2[] = [
  {
    id: "cpe310_ch4_001",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "How is agent architecture defined?",
    options: [
      "A fixed script that never adapts to new percepts",
      "The internal design defining how it perceives, decides, and acts",
      "The physical hardware casing that houses an agent's sensors",
      "The external appearance of a robot used to attract users",
    ],
    correctAnswer: 1,
    explanation:
      "Agent Architecture defines it as the internal design of an intelligent agent that defines how it perceives its environment, makes decisions, and performs actions to achieve goals.\n\nA fixed, non-adapting script describes a rigid program, not the general internal design concept the term refers to.\n\nPhysical hardware casing is not what agent architecture refers to; it concerns internal design, not the housing of sensors.\n\nExternal appearance meant to attract users is not part of the definition of agent architecture, which concerns internal decision-making design.",
  },
  {
    id: "cpe310_ch4_002",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the basic closed-loop cycle, what does the ENVIRONMENT component represent?",
    options: [
      "The module that stores knowledge, rules, facts, and experience",
      "The component that executes actions",
      "Everything outside the agent that can affect it",
      "The component that detects changes and captures data",
    ],
    correctAnswer: 2,
    explanation:
      "The closed-loop cycle table describes the ENVIRONMENT as everything outside the agent that can affect or be affected by it.\n\nStoring knowledge, rules, facts, and experience describes the KNOWLEDGE BASE, not the ENVIRONMENT.\n\nExecuting actions describes the ACTUATORS, not the ENVIRONMENT.\n\nDetecting changes and capturing data describes the SENSORS, not the ENVIRONMENT.",
  },
  {
    id: "cpe310_ch4_003",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the basic closed-loop cycle, what role do SENSORS play?",
    options: [
      "They detect changes in the environment and capture data",
      "They interpret percepts, reason, and decide what to do",
      "They store knowledge, rules, facts, and experience",
      "They execute actions in the environment",
    ],
    correctAnswer: 0,
    explanation:
      "The closed-loop cycle table describes SENSORS as detecting changes in the environment and capturing data.\n\nInterpreting percepts and deciding what to do describes the PROCESSING UNIT, not SENSORS.\n\nStoring knowledge, rules, facts, and experience describes the KNOWLEDGE BASE, not SENSORS.\n\nExecuting actions describes the ACTUATORS, not SENSORS.",
  },
  {
    id: "cpe310_ch4_004",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the basic closed-loop cycle, what role does the PROCESSING UNIT play?",
    options: [
      "It executes actions in the environment",
      "It detects changes in the environment and captures data",
      "It interprets percepts, reasons, and decides what to do",
      "It stores knowledge, rules, facts, and experience",
    ],
    correctAnswer: 2,
    explanation:
      "The closed-loop cycle table describes the PROCESSING UNIT as interpreting percepts, reasoning, and deciding what to do.\n\nExecuting actions describes the ACTUATORS, not the PROCESSING UNIT.\n\nDetecting changes and capturing data describes the SENSORS, not the PROCESSING UNIT.\n\nStoring knowledge, rules, facts, and experience describes the KNOWLEDGE BASE, not the PROCESSING UNIT.",
  },
  {
    id: "cpe310_ch4_005",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the basic closed-loop cycle, what role does the KNOWLEDGE BASE play?",
    options: [
      "It executes actions in the environment",
      "It detects changes in the environment and captures data",
      "It interprets percepts and decides what to do",
      "It stores knowledge, rules, facts, and experience",
    ],
    correctAnswer: 3,
    explanation:
      "The closed-loop cycle table describes the KNOWLEDGE BASE as storing knowledge, rules, facts, and experience.\n\nExecuting actions describes the ACTUATORS, not the KNOWLEDGE BASE.\n\nDetecting changes and capturing data describes the SENSORS, not the KNOWLEDGE BASE.\n\nInterpreting percepts and deciding what to do describes the PROCESSING UNIT, not the KNOWLEDGE BASE.",
  },
  {
    id: "cpe310_ch4_006",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the basic closed-loop cycle, what role do ACTUATORS play?",
    options: [
      "They execute actions in the environment",
      "They store knowledge, rules, facts, and experience",
      "They interpret percepts and decide what to do",
      "They detect changes in the environment and capture data",
    ],
    correctAnswer: 0,
    explanation:
      "The closed-loop cycle table describes ACTUATORS as executing actions in the environment.\n\nStoring knowledge, rules, facts, and experience describes the KNOWLEDGE BASE, not ACTUATORS.\n\nInterpreting percepts and deciding what to do describes the PROCESSING UNIT, not ACTUATORS.\n\nDetecting changes and capturing data describes the SENSORS, not ACTUATORS.",
  },
  {
    id: "cpe310_ch4_007",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "The feedback loop in the closed-loop cycle begins again once actuators detect environmental changes caused by the sensors' actions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This reverses the actual roles: the feedback loop is described as actuators affecting the environment, the environment changing, and sensors, not actuators, detecting those changes to start the cycle again.",
  },
  {
    id: "cpe310_ch4_008",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is one of the four types of agent architecture discussed?",
    options: [
      "Simple Reactive Agents",
      "Probabilistic Graphical Agents",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "The four types of agent architecture listed are Simple Reactive Agents, Reactive Planners, Deliberative Architectures, and Layered Architectures. 'Probabilistic Graphical Agents' is not one of these four named types, so only Simple Reactive Agents is supported here.",
  },
  {
    id: "cpe310_ch4_009",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is one of the four types of agent architecture discussed?",
    options: [
      "Deliberative Architectures",
      "Layered Architectures",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "The four types of agent architecture listed are Simple Reactive Agents, Reactive Planners, Deliberative Architectures, and Layered Architectures, so both Deliberative Architectures and Layered Architectures are correct, making All of these the right answer.",
  },
  {
    id: "cpe310_ch4_010",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "How does a Simple Reactive Agent decide what action to take?",
    options: [
      "It reacts directly to percepts using condition-action rules",
      "It builds a long-term plan using an internal world model before acting",
      "It coordinates decisions across multiple layers of control",
      "It negotiates with other agents to reach a shared decision",
    ],
    correctAnswer: 0,
    explanation:
      "Simple Reactive Agent describes it as reacting directly to percepts using condition-action rules.\n\nBuilding a long-term plan using an internal world model describes a deliberative architecture, not a simple reactive agent.\n\nCoordinating decisions across multiple layers describes a layered architecture, not a simple reactive agent.\n\nNegotiating with other agents is not part of any architecture described in these notes, which concern single-agent internal design.",
  },
  {
    id: "cpe310_ch4_011",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a Simple Reactive Agent's architecture flow, what is the role of the CONDITION-ACTION RULES component?",
    options: [
      "It captures information from the environment",
      "It executes the selected action in the environment",
      "It matches percepts to rules and determines the corresponding action",
      "It stores a long-term plan for future execution",
    ],
    correctAnswer: 2,
    explanation:
      "The Simple Reactive Agent architecture flow describes CONDITION-ACTION RULES as matching percepts to rules and determining the corresponding action.\n\nCapturing information from the environment describes the SENSORS component, not CONDITION-ACTION RULES.\n\nExecuting the selected action describes the ACTUATORS component, not CONDITION-ACTION RULES.\n\nStoring a long-term plan is not part of a simple reactive agent's architecture, which has no planning component.",
  },
  {
    id: "cpe310_ch4_012",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What is the working principle of a Simple Reactive Agent?",
    options: [
      "Sense, then perceive, then react, then act",
      "Sense, then plan, then reason, then act",
      "Sense, match rule, act, in a continuous cycle",
      "Sense, then coordinate across layers, then act",
    ],
    correctAnswer: 2,
    explanation:
      "Simple Reactive Agent describes its working principle as sense, match rule, act, forming a continuous cycle of stimulus-response.\n\nSense, perceive, react, act is instead the working principle given for reactive planners, not simple reactive agents.\n\nSense, plan, reason, act describes deliberative architectures, which explicitly involve planning and reasoning, unlike a simple reactive agent.\n\nCoordinating across layers describes a layered architecture, not a simple reactive agent.",
  },
  {
    id: "cpe310_ch4_013",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of Simple Reactive Agents?",
    options: [
      "Fast response time",
      "Strong long-term planning capability",
      "Deep understanding of complex environments",
      "Ability to learn from past experiences",
    ],
    correctAnswer: 0,
    explanation:
      "Simple Reactive Agent lists fast response time as one of its advantages, alongside being easy to design, computationally inexpensive, and suitable for real-time systems.\n\nStrong long-term planning capability is not listed as an advantage; in fact, the agent's disadvantages explicitly state it cannot plan ahead.\n\nDeep understanding of complex environments contradicts the listed disadvantage of poor performance in complex environments.\n\nLearning from past experience is not listed as an advantage; the disadvantages instead note the agent has no memory.",
  },
  {
    id: "cpe310_ch4_014",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of Simple Reactive Agents?",
    options: [
      "Rich internal world modeling",
      "Computationally inexpensive",
      "Robust in complex environments",
      "Multi-step strategic reasoning",
    ],
    correctAnswer: 1,
    explanation:
      "Simple Reactive Agent lists computationally inexpensive as one of its advantages, alongside fast response time, ease of design, and suitability for real-time systems.\n\nA rich internal world model is not part of a simple reactive agent, which reacts directly to percepts without maintaining such a model.\n\nRobust handling of complex environments contradicts the listed disadvantage of poor performance in complex environments.\n\nMulti-step strategic reasoning is not a feature of simple reactive agents, which lack planning ability.",
  },
  {
    id: "cpe310_ch4_015",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a disadvantage of Simple Reactive Agents?",
    options: [
      "Fast response time",
      "Easy to design",
      "No memory",
      "Suitable for real-time systems",
    ],
    correctAnswer: 2,
    explanation:
      "Simple Reactive Agent lists no memory as one of its disadvantages, alongside being unable to plan ahead, having poor performance in complex environments, and limited intelligence.\n\nFast response time, ease of design, and suitability for real-time systems are all listed as advantages of simple reactive agents, not disadvantages.",
  },
  {
    id: "cpe310_ch4_016",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a disadvantage of Simple Reactive Agents?",
    options: [
      "Computationally inexpensive",
      "Cannot plan ahead",
      "Fast response time",
      "Easy to design",
    ],
    correctAnswer: 1,
    explanation:
      "Simple Reactive Agent lists cannot plan ahead as one of its disadvantages, alongside having no memory, poor performance in complex environments, and limited intelligence.\n\nComputationally inexpensive, fast response time, and ease of design are all listed as advantages of simple reactive agents, not disadvantages.",
  },
  {
    id: "cpe310_ch4_017",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Automatic doors that open immediately when sensors detect a human presence are given as an application of which architecture type?",
    options: [
      "Layered Architecture",
      "Deliberative Architecture",
      "Reactive Planners",
      "Simple Reactive Agents",
    ],
    correctAnswer: 3,
    explanation:
      "Automatic doors are given as a Simple Reactive Agent application, where sensors detect human presence and the doors open immediately.\n\nLayered architecture applications listed instead include robotics, autonomous vehicles, game AI, drones, and smart systems, not automatic doors.\n\nDeliberative architecture applications listed instead include robotics and automation, decision support systems, healthcare, finance, and intelligent assistants, not automatic doors.\n\nReactive planner applications listed instead include robotics, autonomous vehicles, UAVs, cybersecurity, disaster response, and industrial automation, not automatic doors specifically.",
  },
  {
    id: "cpe310_ch4_018",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A thermostat that triggers heating or cooling in response to temperature changes is given as an application of which architecture type?",
    options: [
      "Simple Reactive Agents",
      "Layered Architecture",
      "Deliberative Architecture",
      "Reactive Planners",
    ],
    correctAnswer: 0,
    explanation:
      "The thermostat is given as a Simple Reactive Agent application, where temperature changes trigger heating or cooling directly.\n\nLayered architecture applications listed instead include robotics, autonomous vehicles, game AI, drones, and smart systems, not the thermostat example.\n\nDeliberative architecture applications listed instead include robotics and automation, decision support systems, healthcare, finance, and intelligent assistants, not the thermostat example.\n\nReactive planner applications listed instead include robotics, autonomous vehicles, UAVs, cybersecurity, disaster response, and industrial automation, not the thermostat example.",
  },
  {
    id: "cpe310_ch4_019",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an application of Simple Reactive Agents?",
    options: [
      "Line-following robots",
      "Portfolio management",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "Simple Reactive Agent applications include automatic doors, thermostats, traffic light controllers, line-following robots, and basic game AI. Portfolio management is instead listed as a deliberative architecture application under finance, not a simple reactive agent application, so only line-following robots is supported here.",
  },
  {
    id: "cpe310_ch4_020",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Reactive planners rely solely on a rigid, fixed set of condition-action rules, with no planning capability at all.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This describes a simple reactive agent, not a reactive planner. Reactive planners are defined as agents that combine immediate reactions with basic planning capabilities, adapting dynamically to changing environments.",
  },
  {
    id: "cpe310_ch4_021",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the reactive planner architecture flow, what does the PERCEPTION MODULE do?",
    options: [
      "It captures information from the environment directly",
      "It interprets sensor data and detects relevant conditions",
      "It selects the most appropriate action using priority-based arbitration",
      "It executes the selected action in the environment",
    ],
    correctAnswer: 1,
    explanation:
      "Reactive Planners describes the PERCEPTION MODULE as interpreting sensor data and detecting relevant conditions.\n\nCapturing information from the environment directly describes the SENSORS component, which feeds into the perception module, not the perception module itself.\n\nSelecting the most appropriate action using priority-based arbitration describes the ACTION SELECTION component, not the PERCEPTION MODULE.\n\nExecuting the selected action describes the ACTUATORS component, not the PERCEPTION MODULE.",
  },
  {
    id: "cpe310_ch4_022",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the reactive planner architecture flow, what do REACTIVE RULES / BEHAVIOR MODULES do?",
    options: [
      "They execute the selected action in the environment",
      "They interpret sensor data and detect relevant conditions",
      "They select the most appropriate action using priority-based arbitration",
      "They are condition-action rules that map situations to behaviors",
    ],
    correctAnswer: 3,
    explanation:
      "Reactive Planners describes REACTIVE RULES / BEHAVIOR MODULES as condition-action rules that map situations to behaviors.\n\nExecuting the selected action describes the ACTUATORS component, not the REACTIVE RULES / BEHAVIOR MODULES.\n\nInterpreting sensor data and detecting relevant conditions describes the PERCEPTION MODULE, not the REACTIVE RULES / BEHAVIOR MODULES.\n\nSelecting the most appropriate action using priority-based arbitration describes the ACTION SELECTION component, not the REACTIVE RULES / BEHAVIOR MODULES.",
  },
  {
    id: "cpe310_ch4_023",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the reactive planner architecture flow, what does the ACTION SELECTION component do?",
    options: [
      "It captures information from the environment",
      "It selects the most appropriate action, for example through priority-based arbitration",
      "It interprets sensor data and detects relevant conditions",
      "It maps situations to behaviors using condition-action rules",
    ],
    correctAnswer: 1,
    explanation:
      "Reactive Planners describes ACTION SELECTION as selecting the most appropriate action, for example through priority-based arbitration.\n\nCapturing information from the environment describes the SENSORS component, not ACTION SELECTION.\n\nInterpreting sensor data and detecting relevant conditions describes the PERCEPTION MODULE, not ACTION SELECTION.\n\nMapping situations to behaviors using condition-action rules describes the REACTIVE RULES / BEHAVIOR MODULES, not ACTION SELECTION.",
  },
  {
    id: "cpe310_ch4_024",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "What is the working principle of a Reactive Planner?",
    options: [
      "Sense, then match rule, then act",
      "Sense, then plan, then reason, then act",
      "Sense, perceive, react, act, in a feedback loop",
      "Sense, then coordinate across layers, then act",
    ],
    correctAnswer: 2,
    explanation:
      "Reactive Planners describes its working principle as sense, perceive, react, act, forming a continuous feedback loop.\n\nSense, match rule, act describes the working principle of a simple reactive agent, not a reactive planner.\n\nSense, plan, reason, act more closely resembles a deliberative architecture, which explicitly reasons and plans before acting.\n\nCoordinating across layers describes a layered architecture, not a reactive planner.",
  },
  {
    id: "cpe310_ch4_025",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of Reactive Planners?",
    options: [
      "Works well in dynamic, changing environments",
      "Builds a complete world model before acting",
      "Guarantees globally optimal decisions",
      "Excels at long-term strategic reasoning",
    ],
    correctAnswer: 0,
    explanation:
      "Reactive Planners lists working well in dynamic environments, adapting quickly when conditions change unexpectedly, as one of its advantages.\n\nBuilding a complete world model contradicts the listed limitation that reactive planners often lack deep understanding of the environment.\n\nGuaranteeing globally optimal decisions contradicts the listed limitation that reactive planners may produce suboptimal decisions.\n\nExcelling at long-term strategic reasoning contradicts the listed limitation of limited long-term planning.",
  },
  {
    id: "cpe310_ch4_026",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of Reactive Planners?",
    options: [
      "Requires heavy search and complex global planning",
      "Cannot function with incomplete information",
      "Low computational cost, avoiding heavy search",
      "Learns extensively from past experiences",
    ],
    correctAnswer: 2,
    explanation:
      "Reactive Planners lists low computational cost as an advantage, noting it does not require heavy search or complex global planning.\n\nRequiring heavy search and complex global planning is the opposite of this advantage, and would instead describe a more deliberative approach.\n\nBeing unable to function with incomplete information contradicts the listed advantage that reactive planners remain robust and reliable, continuing to function even with incomplete information.\n\nExtensive learning from past experience contradicts the listed limitation that traditional reactive planners do not learn from past experiences.",
  },
  {
    id: "cpe310_ch4_027",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of Reactive Planners?",
    options: [
      "Requires a fully accurate, complete world model to function at all",
      "Cannot support more than one behavior at a time",
      "Always finds the globally optimal plan",
      "Supports parallel behaviors, such as obstacle avoidance and goal seeking operating simultaneously",
    ],
    correctAnswer: 3,
    explanation:
      "Reactive Planners lists supporting parallel behaviors, such as obstacle avoidance and goal seeking operating simultaneously, as one of its advantages.\n\nRequiring a fully accurate, complete world model contradicts the listed limitation that reactive planners often lack a complete world model.\n\nBeing unable to support more than one behavior contradicts the explicit advantage of supporting parallel behaviors.\n\nAlways finding the globally optimal plan contradicts the listed limitation that reactive planners may produce suboptimal decisions.",
  },
  {
    id: "cpe310_ch4_028",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of Reactive Planners?",
    options: [
      "Fast response time",
      "Limited long-term planning ability",
      "Low computational cost",
      "Simple implementation",
    ],
    correctAnswer: 1,
    explanation:
      "Reactive Planners lists limited long-term planning as one of its limitations, noting the inability to effectively reason about future consequences.\n\nFast response time, low computational cost, and simple implementation are all listed as advantages of reactive planners, not limitations.",
  },
  {
    id: "cpe310_ch4_029",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of Reactive Planners?",
    options: [
      "Robust and reliable operation",
      "Behavior conflicts between rules",
      "Works well in dynamic environments",
      "Supports parallel behaviors",
    ],
    correctAnswer: 1,
    explanation:
      "Reactive Planners lists behavior conflicts as one of its limitations, noting that multiple reactive rules may compete with each other.\n\nRobust and reliable operation, working well in dynamic environments, and supporting parallel behaviors are all listed as advantages of reactive planners, not limitations.",
  },
  {
    id: "cpe310_ch4_030",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of Reactive Planners?",
    options: [
      "Simple implementation",
      "Low computational cost",
      "Limited learning from past experiences",
      "Robust and reliable operation",
    ],
    correctAnswer: 2,
    explanation:
      "Reactive Planners lists limited learning capability as one of its limitations, noting that traditional reactive planners do not learn from past experiences.\n\nSimple implementation, low computational cost, and robust and reliable operation are all listed as advantages of reactive planners, not limitations.",
  },
  {
    id: "cpe310_ch4_031",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Real-time path re-planning due to traffic, obstacles, or weather changes is given as an application of which architecture type?",
    options: [
      "Simple Reactive Agents, under traffic light controllers",
      "Reactive Planners, under autonomous vehicles",
      "Deliberative Architecture, under finance",
      "Layered Architecture, under smart systems",
    ],
    correctAnswer: 1,
    explanation:
      "Real-time path re-planning due to traffic, obstacles, or weather changes is listed as a Reactive Planners application under autonomous vehicles.\n\nSimple reactive agent applications instead include automatic doors, thermostats, traffic light controllers, line-following robots, and basic game AI, none of which involve real-time path re-planning.\n\nDeliberative architecture applications instead include robotics and automation, decision support systems, healthcare, finance, and intelligent assistants, not real-time path re-planning for vehicles.\n\nLayered architecture applications instead include robotics, autonomous vehicles at a general level, game AI, drones, and smart systems, but this specific traffic and weather re-planning example is given under reactive planners.",
  },
  {
    id: "cpe310_ch4_032",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an application of Reactive Planners?",
    options: [
      "Portfolio management",
      "Healthcare treatment planning",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "Reactive Planner applications include robotics, autonomous vehicles, UAVs, cybersecurity, disaster response, and industrial automation. Both portfolio management and healthcare treatment planning are instead listed as deliberative architecture applications, under finance and healthcare respectively, so neither is supported here and None of these is correct.",
  },
  {
    id: "cpe310_ch4_033",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Adapting to wind, no-fly zones, obstacles, and mission changes is given as a reactive planner application for which technology?",
    options: [
      "Unmanned Aerial Vehicles (UAVs)",
      "Traffic light controllers",
      "Portfolio management systems",
      "Line-following robots",
    ],
    correctAnswer: 0,
    explanation:
      "Reactive Planners lists Unmanned Aerial Vehicles as adapting to wind, no-fly zones, obstacles, and mission changes.\n\nTraffic light controllers are instead listed as a simple reactive agent application, not a reactive planner application involving UAV-style adaptation.\n\nPortfolio management systems are instead listed as a deliberative architecture application under finance.\n\nLine-following robots are instead listed as a simple reactive agent application, not this UAV example.",
  },
  {
    id: "cpe310_ch4_034",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A deliberative architecture uses an internal model of the environment to reason, plan, and make logical decisions before acting.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Deliberative Architecture defines it as an intelligent agent architecture that uses an internal model of the environment to reason, plan, and make logical decisions before performing actions to achieve specific goals.",
  },
  {
    id: "cpe310_ch4_035",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a deliberative architecture, what is the role of the WORLD MODEL / KNOWLEDGE BASE component?",
    options: [
      "It applies logical inference, deduction, and domain rules",
      "It represents the agent's knowledge, updated from percepts",
      "It considers goals and possible action sequences to select the best plan",
      "It executes the actions chosen by the agent",
    ],
    correctAnswer: 1,
    explanation:
      "Deliberative Architecture describes the WORLD MODEL / KNOWLEDGE BASE as representing the agent's knowledge about the world, such as facts, rules, objects, relations, and beliefs, updated using incoming percepts.\n\nApplying logical inference, deduction, and domain rules describes the REASONING ENGINE / INFERENCE component, not the world model.\n\nConsidering goals and possible action sequences describes the PLANNER / GOAL SELECTION MODULE, not the world model.\n\nExecuting chosen actions describes the ACTUATORS, not the world model.",
  },
  {
    id: "cpe310_ch4_036",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a deliberative architecture, what is the role of the REASONING ENGINE / INFERENCE component?",
    options: [
      "It represents the agent's knowledge about the world",
      "It executes the actions chosen by the agent",
      "It applies logical inference to derive new facts",
      "It considers goals and searches for the best plan",
    ],
    correctAnswer: 2,
    explanation:
      "Deliberative Architecture describes the REASONING ENGINE / INFERENCE as applying logical inference, deduction, and domain rules, deriving new facts and evaluating the consequences of possible actions.\n\nRepresenting the agent's knowledge about the world describes the WORLD MODEL / KNOWLEDGE BASE, not the reasoning engine.\n\nExecuting chosen actions describes the ACTUATORS, not the reasoning engine.\n\nConsidering goals and searching for the best plan describes the PLANNER / GOAL SELECTION MODULE, not the reasoning engine.",
  },
  {
    id: "cpe310_ch4_037",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a deliberative architecture, what is the role of the PLANNER / GOAL SELECTION MODULE?",
    options: [
      "It represents the agent's knowledge about the world",
      "It applies logical inference and deduction",
      "It executes the actions chosen by the agent",
      "It selects the best action or plan to achieve goals",
    ],
    correctAnswer: 3,
    explanation:
      "Deliberative Architecture describes the PLANNER / GOAL SELECTION MODULE as considering goals and possible action sequences, searching and planning to select the best action or plan to achieve goals.\n\nRepresenting the agent's knowledge about the world describes the WORLD MODEL / KNOWLEDGE BASE, not the planner.\n\nApplying logical inference and deduction describes the REASONING ENGINE, not the planner.\n\nExecuting chosen actions describes the ACTUATORS, not the planner itself.",
  },
  {
    id: "cpe310_ch4_038",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a deliberative agent system, in what order do the world model, reasoning engine, and planner typically process information?",
    options: [
      "Planner, then reasoning engine, then world model",
      "World model, then reasoning engine, then planner",
      "Reasoning engine, then world model, then planner",
      "All three operate with no defined order at all",
    ],
    correctAnswer: 1,
    explanation:
      "Deliberative Architecture presents the flow as the world model or knowledge base first, followed by the reasoning engine or inference, followed by the planner or goal selection module, which then hands off to the actuators.\n\nPlacing the planner before the reasoning engine reverses this order, since planning depends on facts the reasoning engine derives.\n\nPlacing the reasoning engine before the world model reverses this order, since reasoning depends on knowledge the world model represents.\n\nThe notes present a specific sequential flow between these three components, so it is not the case that no order is defined.",
  },
  {
    id: "cpe310_ch4_039",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of deliberative architecture?",
    options: [
      "Slow response time",
      "Goal-oriented behavior toward explicit goals",
      "High computational cost",
      "Dependence on accurate internal models",
    ],
    correctAnswer: 1,
    explanation:
      "Deliberative Architecture lists goal-oriented behavior as an advantage, since actions are selected based on achieving explicit goals.\n\nSlow response time, high computational cost, and dependence on accurate internal models are all listed as limitations of deliberative architecture, not advantages.",
  },
  {
    id: "cpe310_ch4_040",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of deliberative architecture?",
    options: [
      "Explainability through traceable reasoning steps",
      "Scalability issues as problem complexity increases",
      "Complex implementation of knowledge bases and planners",
      "Slow response time",
    ],
    correctAnswer: 0,
    explanation:
      "Deliberative Architecture lists explainability as an advantage, since decisions can be traced through reasoning and planning steps.\n\nScalability issues, complex implementation, and slow response time are all listed as limitations of deliberative architecture, not advantages.",
  },
  {
    id: "cpe310_ch4_041",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of deliberative architecture?",
    options: [
      "Dependence on accurate models",
      "Better long-term, multi-step planning",
      "High computational cost",
      "Complex implementation",
    ],
    correctAnswer: 1,
    explanation:
      "Deliberative Architecture lists better long-term planning as an advantage, describing it as suitable for complex tasks requiring multi-step decisions.\n\nDependence on accurate models, high computational cost, and complex implementation are all listed as limitations of deliberative architecture, not advantages.",
  },
  {
    id: "cpe310_ch4_042",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of deliberative architecture?",
    options: [
      "Goal-oriented behavior",
      "Logical reasoning using internal models",
      "High computational cost",
      "Explainability",
    ],
    correctAnswer: 2,
    explanation:
      "Deliberative Architecture lists high computational cost as a limitation, noting that planning and reasoning require significant processing power.\n\nGoal-oriented behavior, logical reasoning, and explainability are all listed as advantages of deliberative architecture, not limitations.",
  },
  {
    id: "cpe310_ch4_043",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of deliberative architecture?",
    options: [
      "Better long-term planning",
      "Flexibility in structured environments",
      "Slow, unsuitable for real-time use",
      "Logical reasoning",
    ],
    correctAnswer: 2,
    explanation:
      "Deliberative Architecture lists slow response time as a limitation, noting it is not suitable for real-time or rapidly changing environments.\n\nBetter long-term planning, flexibility in structured environments, and logical reasoning are all listed as advantages of deliberative architecture, not limitations.",
  },
  {
    id: "cpe310_ch4_044",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Why is dependence on accurate models listed as a limitation of deliberative architecture?",
    options: [
      "Because performance drops if the internal world model is incorrect or outdated",
      "Because accurate models make the agent respond more slowly than usual",
      "Because accurate models eliminate the need for a reasoning engine",
      "Because accurate models are only needed in layered architectures, not deliberative ones",
    ],
    correctAnswer: 0,
    explanation:
      "Deliberative Architecture explains that dependence on accurate models is a limitation because performance drops if the internal world model is incorrect or outdated.\n\nModel accuracy is not described as a cause of slower response time; the separately listed limitation of slow response time concerns the cost of planning and reasoning itself.\n\nAccurate models do not eliminate the need for a reasoning engine; the reasoning engine operates on the world model regardless of its accuracy.\n\nDependence on accurate models is listed specifically as a deliberative architecture limitation, not something restricted to layered architectures.",
  },
  {
    id: "cpe310_ch4_045",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an application of deliberative architecture?",
    options: [
      "Decision support systems",
      "Automatic doors",
      "Line-following robots",
      "Basic game AI",
    ],
    correctAnswer: 0,
    explanation:
      "Deliberative Architecture lists decision support systems as an application, assisting in strategic planning, risk assessment, and policy analysis.\n\nAutomatic doors, line-following robots, and basic game AI are all listed instead as simple reactive agent applications, not deliberative architecture applications.",
  },
  {
    id: "cpe310_ch4_046",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Treatment planning, diagnosis support, and patient management are given as deliberative architecture applications in which domain?",
    options: [
      "Healthcare",
      "Cybersecurity",
      "Disaster response",
      "Industrial automation",
    ],
    correctAnswer: 0,
    explanation:
      "Deliberative Architecture lists healthcare as an application domain, covering treatment planning, diagnosis support, and patient management.\n\nCybersecurity, disaster response, and industrial automation are instead listed as reactive planner applications, not deliberative architecture applications.",
  },
  {
    id: "cpe310_ch4_047",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Portfolio management, fraud detection, and investment planning are given as deliberative architecture applications in which domain?",
    options: [
      "Finance",
      "Robotics and Automation",
      "Intelligent Agents and Assistants",
      "Decision Support Systems",
    ],
    correctAnswer: 0,
    explanation:
      "Deliberative Architecture lists finance as an application domain, covering portfolio management, fraud detection, and investment planning.\n\nRobotics and automation is a separate listed deliberative architecture application, covering task planning, navigation, and manipulation, not the finance-specific tasks.\n\nIntelligent agents and assistants is a separate listed application, covering personal assistants, scheduling, and goal management, not the finance-specific tasks.\n\nDecision support systems is a separate listed application, covering strategic planning, risk assessment, and policy analysis, not the finance-specific tasks.",
  },
  {
    id: "cpe310_ch4_048",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a deliberative architecture application?",
    options: [
      "Personal assistants, scheduling, and goal management",
      "Decision support systems assisting in risk assessment",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "Deliberative Architecture lists both intelligent agents and assistants, covering personal assistants, scheduling, and goal management, and decision support systems, assisting in strategic planning, risk assessment, and policy analysis, as applications, so both specific options are supported and All of these is correct.",
  },
  {
    id: "cpe310_ch4_049",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A layered architecture divides control into multiple layers, each performing a specific function and cooperating with the others for efficient decision-making.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Layered Architecture defines it as an intelligent system design in which control is divided into multiple layers, with each layer performing a specific function and cooperating with the others to achieve efficient decision-making and action execution.",
  },
  {
    id: "cpe310_ch4_050",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a layered architecture, which layer handles planning and reasoning?",
    options: [
      "The middle layer",
      "The lower layer",
      "The upper layer",
      "No layer handles it",
    ],
    correctAnswer: 2,
    explanation:
      "Layered Architecture states that upper layers handle planning and reasoning.\n\nThe middle layer instead coordinates tasks and decisions, not planning and reasoning at the strategic level.\n\nThe lower layer instead handles real-time reactions and interaction with the environment, not planning and reasoning.\n\nPlanning and reasoning are explicitly assigned to the upper layer within the architecture, not handled outside it.",
  },
  {
    id: "cpe310_ch4_051",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a layered architecture, which layer coordinates tasks and decisions?",
    options: [
      "The upper layer",
      "The middle layer",
      "The lower layer",
      "The environment itself",
    ],
    correctAnswer: 1,
    explanation:
      "Layered Architecture states that middle layers coordinate tasks and decisions.\n\nThe upper layer instead handles planning and reasoning, not task coordination.\n\nThe lower layer instead handles real-time reactions and interaction with the environment, not task coordination.\n\nThe environment is external to the agent and is not itself a coordinating layer.",
  },
  {
    id: "cpe310_ch4_052",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In a layered architecture, which layer handles real-time reactions and interaction with the environment?",
    options: [
      "The upper layer",
      "The middle layer",
      "The lower layer",
      "No layer handles real-time reactions",
    ],
    correctAnswer: 2,
    explanation:
      "Layered Architecture states that lower layers handle real-time reactions and interaction with the environment.\n\nThe upper layer instead handles planning and reasoning, not real-time reactions.\n\nThe middle layer instead coordinates tasks and decisions, not real-time reactions.\n\nReal-time reactions are explicitly assigned to the lower layer within the architecture.",
  },
  {
    id: "cpe310_ch4_053",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the layered architecture flow, what does the upper, deliberative layer handle?",
    options: [
      "Sensor processing and reflex actions",
      "Task coordination and conflict resolution",
      "Goal formulation, long-term planning, and world model reasoning",
      "Direct execution of control signals",
    ],
    correctAnswer: 2,
    explanation:
      "Layered Architecture describes the upper, deliberative layer as handling goal formulation, long-term planning, and world model reasoning.\n\nSensor processing and reflex actions describe the lower, reactive layer, not the upper layer.\n\nTask coordination and conflict resolution describe the middle, executive layer, not the upper layer.\n\nDirect execution of control signals describes the lower layer's actuation role, not the upper layer.",
  },
  {
    id: "cpe310_ch4_054",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the layered architecture flow, what does the middle, executive or coordination layer handle?",
    options: [
      "Goal formulation and long-term planning",
      "Task coordination and conflict resolution",
      "Real-time responses and sensor processing",
      "World model reasoning",
    ],
    correctAnswer: 1,
    explanation:
      "Layered Architecture describes the middle, executive or coordination layer as handling task coordination, conflict resolution, and behavior selection.\n\nGoal formulation and long-term planning describe the upper, deliberative layer, not the middle layer.\n\nReal-time responses and sensor processing describe the lower, reactive layer, not the middle layer.\n\nWorld model reasoning describes the upper layer, not the middle layer.",
  },
  {
    id: "cpe310_ch4_055",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the layered architecture flow, what does the lower, reactive layer handle?",
    options: [
      "Long-term planning using the world model",
      "Conflict resolution between competing tasks",
      "Goal formulation",
      "Sensor processing and reflex actions",
    ],
    correctAnswer: 3,
    explanation:
      "Layered Architecture describes the lower, reactive layer as handling sensor processing, reflex actions, and real-time responses.\n\nLong-term planning using the world model describes the upper layer, not the lower layer.\n\nConflict resolution between competing tasks describes the middle layer, not the lower layer.\n\nGoal formulation describes the upper layer, not the lower layer.",
  },
  {
    id: "cpe310_ch4_056",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the layered architecture, what passes downward from the upper layer to the middle layer?",
    options: [
      "Raw percepts directly from the environment",
      "Plans and goals, such as high-level plans, intentions, and strategies",
      "Control signals sent directly to actuators",
      "Execution status summaries only, with no other content",
    ],
    correctAnswer: 1,
    explanation:
      "Layered Architecture shows plans and goals, described as high-level plans, intentions, and strategies, passing down from the upper layer to the middle layer, with status and feedback passing back up.\n\nRaw percepts from the environment flow into the lower layer first, not directly from the upper layer to the middle layer.\n\nControl signals sent directly to actuators are produced by the lower layer, not passed down from the upper to the middle layer.\n\nStatus and feedback do pass upward from the middle to the upper layer, but the downward flow itself consists of plans and goals, not merely status summaries.",
  },
  {
    id: "cpe310_ch4_057",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In the layered architecture, what passes downward from the middle layer to the lower layer?",
    options: [
      "High-level plans and strategies",
      "World model reasoning results only",
      "Commands: actions, parameters, priorities",
      "Nothing passes downward at all",
    ],
    correctAnswer: 2,
    explanation:
      "Layered Architecture shows commands, described as chosen actions, parameters, and priorities, passing down from the middle layer to the lower layer, with percepts, events, and local status passing back up.\n\nHigh-level plans and strategies pass down from the upper layer to the middle layer, not from the middle layer to the lower layer.\n\nWorld model reasoning is associated with the upper layer, not something passed down from the middle to the lower layer.\n\nThe architecture explicitly shows commands flowing down from the middle to the lower layer, so it is not the case that nothing passes down.",
  },
  {
    id: "cpe310_ch4_058",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In how the layers cooperate, what does the upper layer do?",
    options: [
      "It executes selected behaviors and reacts immediately to changes",
      "It sets long-term goals and plans using reasoning and the world model",
      "It receives actions from the agent and returns percepts",
      "It resolves conflicts between competing tasks",
    ],
    correctAnswer: 1,
    explanation:
      "The description of how layers work together states that the upper layer sets long-term goals and plans using reasoning and the world model.\n\nExecuting selected behaviors and reacting immediately to changes describes the lower layer, not the upper layer.\n\nReceiving actions and returning percepts describes the environment's role, not the upper layer's.\n\nResolving conflicts between competing tasks describes the middle layer, not the upper layer.",
  },
  {
    id: "cpe310_ch4_059",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In how the layers cooperate, what does the middle layer do?",
    options: [
      "It sets long-term goals using the world model",
      "It gathers percepts and reacts immediately to changes",
      "It takes plans from above, coordinates tasks, resolves conflicts, and selects appropriate behaviors",
      "It receives actions from the agent and returns feedback through sensors",
    ],
    correctAnswer: 2,
    explanation:
      "The description of how layers work together states that the middle layer takes plans from above, coordinates tasks, resolves conflicts, and selects appropriate behaviors.\n\nSetting long-term goals using the world model describes the upper layer, not the middle layer.\n\nGathering percepts and reacting immediately to changes describes the lower layer, not the middle layer.\n\nReceiving actions and returning feedback through sensors describes the environment's role, not the middle layer's.",
  },
  {
    id: "cpe310_ch4_060",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "In how the layers cooperate with the environment, what does the environment do?",
    options: [
      "It coordinates tasks and resolves conflicts between layers",
      "It sets long-term goals and plans",
      "It executes selected behaviors directly",
      "It returns percepts, or feedback, through sensors",
    ],
    correctAnswer: 3,
    explanation:
      "The description of how layers work together states that the environment receives actions from the agent and returns percepts, or feedback, through sensors.\n\nCoordinating tasks and resolving conflicts describes the middle layer, not the environment.\n\nSetting long-term goals and plans describes the upper layer, not the environment.\n\nExecuting selected behaviors describes the lower layer, not the environment itself.",
  },
  {
    id: "cpe310_ch4_061",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of layered architecture?",
    options: [
      "Increased complexity of designing and coordinating multiple layers",
      "Communication overhead between layers",
      "Modularity, separating concerns into distinct layers",
      "Difficulty optimizing globally across layers",
    ],
    correctAnswer: 2,
    explanation:
      "Layered Architecture lists modularity as an advantage, describing it as separating concerns into distinct layers.\n\nIncreased complexity, communication overhead, and difficulty optimizing globally are all listed as limitations of layered architecture, not advantages.",
  },
  {
    id: "cpe310_ch4_062",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of layered architecture?",
    options: [
      "Dependency on lower layers",
      "Difficult debugging across multiple layers",
      "Increased complexity of coordination",
      "Scalability, easy to expand capabilities",
    ],
    correctAnswer: 3,
    explanation:
      "Layered Architecture lists scalability as an advantage, describing it as making it easy to expand or add new capabilities.\n\nDependency on lower layers, difficult debugging, and increased complexity are all listed as limitations of layered architecture, not advantages.",
  },
  {
    id: "cpe310_ch4_063",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of layered architecture?",
    options: [
      "Communication overhead adding latency",
      "Maintainability, minimal impact across layers",
      "Hard to optimize globally",
      "Increased complexity",
    ],
    correctAnswer: 1,
    explanation:
      "Layered Architecture lists maintainability as an advantage, since changes in one layer have minimal impact on others.\n\nCommunication overhead, difficulty optimizing globally, and increased complexity are all listed as limitations of layered architecture, not advantages.",
  },
  {
    id: "cpe310_ch4_064",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an advantage of layered architecture?",
    options: [
      "Robustness via reliable real-time responses",
      "Increased design complexity",
      "Difficult debugging",
      "Dependency on lower layers",
    ],
    correctAnswer: 0,
    explanation:
      "Layered Architecture lists robustness as an advantage, since the reactive layer ensures reliable real-time responses.\n\nIncreased complexity, difficult debugging, and dependency on lower layers are all listed as limitations of layered architecture, not advantages.",
  },
  {
    id: "cpe310_ch4_065",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of layered architecture?",
    options: [
      "Modularity",
      "Scalability",
      "Increased complexity",
      "Robustness",
    ],
    correctAnswer: 2,
    explanation:
      "Layered Architecture lists increased complexity as a limitation, since designing and coordinating multiple layers is complex.\n\nModularity, scalability, and robustness are all listed as advantages of layered architecture, not limitations.",
  },
  {
    id: "cpe310_ch4_066",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Why is communication overhead listed as a limitation of layered architecture?",
    options: [
      "Because information must pass between layers, adding latency",
      "Because layers are physically located far apart in every deployment",
      "Because communication between layers is entirely prohibited",
      "Because only the lower layer is allowed to communicate at all",
    ],
    correctAnswer: 0,
    explanation:
      "Layered Architecture explains that communication overhead is a limitation because information must pass between layers, adding latency.\n\nPhysical distance between layers is not what the notes describe; the overhead comes from the act of passing information between layers, regardless of physical placement.\n\nCommunication between layers is not prohibited; the architecture relies on layers passing plans, commands, and feedback to each other.\n\nAll three layers are described as exchanging information with each other, not only the lower layer.",
  },
  {
    id: "cpe310_ch4_067",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a limitation of layered architecture?",
    options: [
      "Layer dependency",
      "Flexibility",
      "Maintainability",
      "Modularity",
    ],
    correctAnswer: 0,
    explanation:
      "Layered Architecture lists dependency on lower layers as a limitation, since higher layers rely on the proper functioning of lower layers.\n\nFlexibility, maintainability, and modularity are all listed as advantages of layered architecture, not limitations.",
  },
  {
    id: "cpe310_ch4_068",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an application of layered architecture?",
    options: [
      "Drones and mission planning",
      "Treatment planning in healthcare",
      "Portfolio management",
      "Automatic doors",
    ],
    correctAnswer: 0,
    explanation:
      "Layered Architecture lists drones as an application, supporting stable control, obstacle avoidance, and mission planning.\n\nTreatment planning in healthcare and portfolio management are instead listed as deliberative architecture applications, not layered architecture applications.\n\nAutomatic doors are instead listed as a simple reactive agent application, not a layered architecture application.",
  },
  {
    id: "cpe310_ch4_069",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Managing reflex actions, tactics, and long-term strategies together is given as a layered architecture application in which domain?",
    options: [
      "Game AI",
      "Cybersecurity",
      "Decision Support Systems",
      "Finance",
    ],
    correctAnswer: 0,
    explanation:
      "Layered Architecture lists Game AI as an application, managing reflex actions, tactics, and long-term strategies together.\n\nCybersecurity is instead listed as a reactive planner application, not a layered architecture application.\n\nDecision Support Systems and Finance are instead listed as deliberative architecture applications, not layered architecture applications.",
  },
  {
    id: "cpe310_ch4_070",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as an application of layered architecture?",
    options: [
      "Smart homes and IoT systems under layered control",
      "Line-following robots",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "Layered Architecture lists smart systems as an application, used in layered control of smart homes and IoT systems. Line-following robots are instead listed as a simple reactive agent application, so only smart homes and IoT systems is supported here.",
  },
  {
    id: "cpe310_ch4_071",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A traffic light controller reacting to traffic density or timers, and a UAV adapting its route mid-flight to a new no-fly zone, are examples of which two architecture types respectively?",
    options: [
      "Simple Reactive Agent, then Reactive Planner",
      "Deliberative Architecture, then Layered Architecture",
      "Reactive Planner, then Deliberative Architecture",
      "Layered Architecture, then Simple Reactive Agent",
    ],
    correctAnswer: 0,
    explanation:
      "Traffic light controllers reacting to density or timers are listed as a Simple Reactive Agent application, while UAVs adapting to no-fly zones and mission changes are listed as a Reactive Planner application.\n\nNeither example is drawn from the deliberative or layered architecture application lists in the notes, ruling out the other pairings.\n\nReversing the order would incorrectly assign the traffic light example to reactive planners and the UAV example to simple reactive agents, the opposite of how the notes classify them.\n\nLayered architecture and simple reactive agents are not the pairing used for these two specific examples.",
  },
  {
    id: "cpe310_ch4_072",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which architecture type is best suited for an environment demanding instant response with minimal computation, at the cost of having no memory of past events?",
    options: [
      "Deliberative Architecture",
      "Layered Architecture",
      "Reactive Planner",
      "Simple Reactive Agent",
    ],
    correctAnswer: 3,
    explanation:
      "A Simple Reactive Agent fits this description best, since its advantages include fast response time and low computational cost, while its disadvantages explicitly include having no memory.\n\nDeliberative architecture instead trades response speed for reasoning and planning, making it unsuitable for instant response with minimal computation.\n\nLayered architecture combines multiple layers and therefore introduces communication overhead, not the pure minimal-computation profile described here.\n\nA reactive planner retains some basic planning capability and behavior arbitration, going beyond the bare condition-action matching of a simple reactive agent.",
  },
  {
    id: "cpe310_ch4_073",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which architecture type would be most appropriate for a system that must justify its decisions through a traceable chain of reasoning before acting, even at the cost of slower response time?",
    options: [
      "Simple Reactive Agent",
      "Deliberative Architecture",
      "Reactive Planner",
      "None support traceable reasoning",
    ],
    correctAnswer: 1,
    explanation:
      "Deliberative architecture is the best fit, since its listed advantages include explainability, where decisions can be traced through reasoning and planning steps, and its limitations explicitly include slower response time as a tradeoff.\n\nA simple reactive agent has no reasoning engine at all, since it reacts directly to percepts using condition-action rules.\n\nA reactive planner emphasizes fast, adaptive responses over deep reasoning, and its limitations explicitly note it cannot effectively reason about future consequences.\n\nDeliberative architecture explicitly supports traceable reasoning through its reasoning engine and planner, so it is not true that none of the architecture types support it.",
  },
  {
    id: "cpe310_ch4_074",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A drone control system uses an upper layer for mission planning, a middle layer for coordinating between planning and obstacle avoidance, and a lower layer for immediate collision avoidance. Which architecture type does this best illustrate?",
    options: [
      "Simple Reactive Agent",
      "Deliberative Architecture",
      "Layered Architecture",
      "None of these match",
    ],
    correctAnswer: 2,
    explanation:
      "This describes a Layered Architecture, where upper layers handle planning and reasoning, middle layers coordinate tasks and decisions, and lower layers handle real-time reactions, matching the mission planning, coordination, and collision avoidance roles described.\n\nA simple reactive agent has only a single condition-action rule layer, not the three-tier structure described here.\n\nDeliberative architecture uses a world model, reasoning engine, and planner, but does not divide control into layers with a dedicated reactive layer for immediate collision avoidance the way this example describes.\n\nThe three-tier structure of planning, coordination, and reaction described here directly matches layered architecture, so it is not true that none of the types match.",
  },
  {
    id: "cpe310_ch4_075",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Behavior conflicts, where multiple reactive rules compete with each other, are listed as a limitation of which architecture type?",
    options: [
      "Deliberative Architecture",
      "Layered Architecture",
      "Simple Reactive Agent",
      "Reactive Planner",
    ],
    correctAnswer: 3,
    explanation:
      "Behavior conflicts, where multiple reactive rules compete with each other, are listed as a limitation of Reactive Planners.\n\nDeliberative architecture's listed limitations instead concern computational cost, response time, model dependence, implementation complexity, and scalability, not competing reactive rules.\n\nLayered architecture's listed limitations instead concern coordination complexity, communication overhead, global optimization, dependency on lower layers, and debugging difficulty, not competing reactive rules.\n\nSimple reactive agents have only a single set of condition-action rules and no separate behavior modules, so behavior conflicts between multiple modules are not listed as one of their disadvantages.",
  },
  {
    id: "cpe310_ch4_076",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Scalability issues, where a system becomes inefficient as problem complexity increases, are listed as a limitation of which architecture type?",
    options: [
      "Deliberative Architecture",
      "Simple Reactive Agent",
      "Reactive Planner",
      "None list scalability issues",
    ],
    correctAnswer: 0,
    explanation:
      "Scalability issues, where a system becomes inefficient as problem complexity increases, are listed as a limitation of Deliberative Architecture.\n\nSimple Reactive Agent's listed disadvantages instead concern memory, planning ahead, complex environments, and limited intelligence, not scalability as complexity increases.\n\nReactive Planner's listed limitations instead concern long-term planning, world modeling, suboptimal decisions, behavior conflicts, complex tasks, and learning, not scalability as complexity increases specifically.\n\nDeliberative architecture explicitly lists scalability issues as a limitation, so it is not true that none of the types list it.",
  },
  {
    id: "cpe310_ch4_077",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Increased complexity from designing and coordinating multiple layers is listed as a limitation of which architecture type?",
    options: [
      "Layered Architecture",
      "Simple Reactive Agent",
      "Reactive Planner",
      "Deliberative Architecture",
    ],
    correctAnswer: 0,
    explanation:
      "Increased complexity from designing and coordinating multiple layers is listed as a limitation of Layered Architecture.\n\nSimple Reactive Agent's listed disadvantages instead concern memory, planning ahead, complex environments, and limited intelligence, not coordinating multiple layers, since it has only a single rule layer.\n\nReactive Planner's listed limitations instead concern long-term planning, world modeling, suboptimal decisions, behavior conflicts, complex tasks, and learning, not multi-layer coordination.\n\nDeliberative Architecture's listed limitations instead concern computational cost, response time, model dependence, implementation complexity, and scalability, not multi-layer coordination specifically.",
  },
  {
    id: "cpe310_ch4_078",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Poor performance in complex environments is listed as a disadvantage of which architecture type?",
    options: [
      "Layered Architecture",
      "Deliberative Architecture",
      "Simple Reactive Agent",
      "Reactive Planner",
    ],
    correctAnswer: 2,
    explanation:
      "Poor performance in complex environments is listed as a disadvantage of Simple Reactive Agents.\n\nLayered Architecture's listed limitations instead concern coordination complexity, communication overhead, global optimization, dependency on lower layers, and debugging difficulty.\n\nDeliberative Architecture's listed limitations instead concern computational cost, response time, model dependence, implementation complexity, and scalability.\n\nReactive Planner's listed limitations instead concern long-term planning, world modeling, suboptimal decisions, behavior conflicts, complex tasks, and learning, and its advantages explicitly claim it works well in dynamic environments, unlike this disadvantage.",
  },
  {
    id: "cpe310_ch4_079",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Robots reacting instantly using line sensors are given as a simple reactive agent application, while robotics involving navigation in dynamic environments and human-robot interaction is given as an application of which other architecture type?",
    options: [
      "Deliberative Architecture only",
      "Layered Architecture only",
      "Reactive Planner",
      "No other type lists robotics",
    ],
    correctAnswer: 2,
    explanation:
      "Reactive Planners list robotics as an application, covering navigation in dynamic environments, manipulation with moving objects, and human-robot interaction.\n\nDeliberative architecture does separately list robotics and automation as an application too, but focused on task planning, navigation, and manipulation in known environments, which is not the specific dynamic, human-robot interaction framing used here.\n\nLayered architecture also separately lists robotics as an application, combining reactive behaviors with planning and reasoning, but again this is not the specific framing used in this question.\n\nRobotics is listed as an application under more than one architecture type in these notes, so it is not true that no other type lists it.",
  },
  {
    id: "cpe310_ch4_080",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Robotics and automation, focused on task planning, navigation, and manipulation in known environments, is listed as an application of which architecture type?",
    options: [
      "Reactive Planner",
      "Deliberative Architecture",
      "Simple Reactive Agent",
      "Layered Architecture",
    ],
    correctAnswer: 1,
    explanation:
      "Deliberative Architecture lists robotics and automation as an application, focused on task planning, navigation, and manipulation in known environments.\n\nReactive Planner's robotics application instead emphasizes navigation in dynamic environments and human-robot interaction, a different framing from the known-environment task planning described here.\n\nSimple Reactive Agent applications instead include automatic doors, thermostats, traffic light controllers, line-following robots, and basic game AI, none framed as robotics and automation broadly.\n\nLayered Architecture's robotics application instead combines reactive behaviors with planning and reasoning, a different framing from this known-environment task planning description.",
  },
  {
    id: "cpe310_ch4_081",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "An agent designer must choose between a simple reactive agent and a deliberative architecture for a system that must operate in a well-understood, static warehouse and plan efficient multi-step routes. Which is the better fit, and why?",
    options: [
      "Deliberative architecture, since it offers better long-term planning suited to complex, multi-step tasks",
      "Simple reactive agent, since it has no memory and cannot plan ahead",
      "Deliberative architecture, since it always responds faster than a simple reactive agent",
      "Simple reactive agent, since it maintains a rich internal world model",
    ],
    correctAnswer: 0,
    explanation:
      "Deliberative architecture is the better fit, since its listed advantage of better long-term planning makes it suitable for complex tasks requiring multi-step decisions, matching the multi-step route planning requirement.\n\nA simple reactive agent having no memory and being unable to plan ahead is accurate, but this is precisely why it would be a poor fit for multi-step route planning, not a reason to choose it.\n\nDeliberative architecture does not always respond faster; its listed limitations explicitly include slow response time, the opposite of this claim.\n\nA simple reactive agent does not maintain a rich internal world model; that capability belongs to deliberative architecture.",
  },
  {
    id: "cpe310_ch4_082",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A cybersecurity system must adapt quickly to new attack patterns while still exhibiting some short-term planning, without the heavy computational cost of full deliberative reasoning. Which architecture type best matches this requirement?",
    options: [
      "Simple Reactive Agent",
      "Deliberative Architecture",
      "Reactive Planner",
      "None of these fit",
    ],
    correctAnswer: 2,
    explanation:
      "A Reactive Planner best matches this requirement, since it combines immediate reactions with basic planning capabilities, adapts dynamically to changing environments, and offers low computational cost, and cybersecurity is explicitly listed as one of its applications.\n\nA Simple Reactive Agent lacks any planning capability at all, falling short of the short-term planning requirement described here.\n\nDeliberative Architecture involves the heavy computational cost of full reasoning and planning, which this requirement explicitly seeks to avoid.\n\nReactive Planner explicitly fits this requirement, so it is not true that none of the architecture types match.",
  },
  {
    id: "cpe310_ch4_083",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is a shared advantage claimed for both Reactive Planners and Simple Reactive Agents?",
    options: [
      "Fast response time",
      "Deep long-term planning ability",
      "Slow, careful reasoning",
      "Complete world modeling",
    ],
    correctAnswer: 0,
    explanation:
      "Fast response time is listed as an advantage of both Simple Reactive Agents and Reactive Planners, since both prioritize quick reactions to the environment.\n\nDeep long-term planning ability contradicts the limitations of both types, since simple reactive agents cannot plan ahead and reactive planners have limited long-term planning.\n\nSlow, careful reasoning before every action describes deliberative architecture, the opposite of the fast-reacting design of both these types.\n\nComplete world modeling contradicts the limitations of both types, since simple reactive agents have no memory and reactive planners often lack a complete world model.",
  },
  {
    id: "cpe310_ch4_084",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is a shared limitation claimed for both Deliberative Architecture and Layered Architecture?",
    options: [
      "Fast response time in all situations",
      "Complexity, whether in implementation or in coordinating multiple layers",
      "Complete inability to reason about goals",
      "No memory of past percepts",
    ],
    correctAnswer: 1,
    explanation:
      "Complexity is a shared theme in the limitations of both types: deliberative architecture lists complex implementation of knowledge bases and planners, while layered architecture lists increased complexity in designing and coordinating multiple layers.\n\nFast response time in all situations contradicts the limitations of both types, since deliberative architecture has slow response time and layered architecture has communication overhead adding latency.\n\nComplete inability to reason about goals contradicts the advantages of both types, since deliberative architecture is explicitly goal-oriented and layered architecture supports complex reasoning in its upper layer.\n\nNo memory of past percepts is a disadvantage listed for simple reactive agents, not for deliberative or layered architecture, both of which maintain internal models or state across layers.",
  },
  {
    id: "cpe310_ch4_085",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Suitability for real-time systems is listed as an advantage of which architecture type in the applications and advantages given for simple designs?",
    options: [
      "Deliberative Architecture",
      "Layered Architecture only",
      "Simple Reactive Agent",
      "None suited to real-time systems",
    ],
    correctAnswer: 2,
    explanation:
      "Simple Reactive Agent lists suitability for real-time systems as one of its advantages, alongside fast response time, ease of design, and low computational cost.\n\nDeliberative Architecture's limitations explicitly include slow response time, making it unsuitable for real-time or rapidly changing environments, the opposite of this claim.\n\nLayered Architecture is not the type this specific 'suitable for real-time systems' phrasing is attached to; that exact advantage is listed for simple reactive agents.\n\nSimple Reactive Agent explicitly lists this advantage, so it is not true that none of the types are suited to real-time systems.",
  },
  {
    id: "cpe310_ch4_086",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Flexibility in structured environments, allowing plans to be adjusted when the environment is well-defined, is listed as an advantage of which architecture type?",
    options: [
      "Simple Reactive Agent",
      "Reactive Planner",
      "Deliberative Architecture",
      "Layered Architecture",
    ],
    correctAnswer: 2,
    explanation:
      "Flexibility in structured environments, allowing plans to be adjusted when the environment is well-defined, is listed as an advantage of Deliberative Architecture.\n\nSimple Reactive Agent's listed advantages instead concern response time, design simplicity, computational cost, and real-time suitability, not adjusting plans in structured environments.\n\nReactive Planner's listed advantages instead concern dynamic environments, computational cost, robustness, simplicity, and parallel behaviors, not this specific structured-environment flexibility.\n\nLayered Architecture's listed advantages instead concern modularity, scalability, maintainability, robustness, and flexibility between reactive and reasoning behavior, a related but distinct kind of flexibility from this deliberative-architecture advantage.",
  },
  {
    id: "cpe310_ch4_087",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Robustness, described as supporting reliable real-time responses through a dedicated reactive layer, is listed as an advantage of which architecture type?",
    options: [
      "Deliberative Architecture",
      "Simple Reactive Agent",
      "Reactive Planner",
      "Layered Architecture",
    ],
    correctAnswer: 3,
    explanation:
      "Robustness, described as the reactive layer ensuring reliable real-time responses, is listed as an advantage of Layered Architecture.\n\nDeliberative Architecture's listed advantages instead concern goal orientation, logical reasoning, explainability, long-term planning, and structured-environment flexibility, not a dedicated reactive layer.\n\nSimple Reactive Agent has only a single condition-action rule layer, not a distinct reactive layer within a larger structure, so this specific phrasing of robustness does not apply to it.\n\nReactive Planner does list robust and reliable operation as an advantage, but the specific phrasing tied to a dedicated reactive layer within a multi-layer structure belongs to layered architecture.",
  },
  {
    id: "cpe310_ch4_088",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Which of the following is listed as a shared application domain for both Reactive Planners and Layered Architecture?",
    options: ["Healthcare", "Finance", "Robotics", "Decision Support Systems"],
    correctAnswer: 2,
    explanation:
      "Robotics is listed as an application for both Reactive Planners, covering navigation in dynamic environments and human-robot interaction, and Layered Architecture, combining reactive behaviors with planning and reasoning.\n\nHealthcare and Finance are instead listed only as Deliberative Architecture applications, not as Reactive Planner or Layered Architecture applications.\n\nDecision Support Systems is instead listed only as a Deliberative Architecture application, not as a Reactive Planner or Layered Architecture application.",
  },
  {
    id: "cpe310_ch4_089",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Autonomous vehicles are listed as an application for which architecture types?",
    options: [
      "Simple Reactive Agent only",
      "Deliberative Architecture only",
      "Reactive Planner and Layered Architecture",
      "None of these types",
    ],
    correctAnswer: 2,
    explanation:
      "Autonomous vehicles are listed as an application for both Reactive Planners, covering real-time path re-planning due to traffic, obstacles, or weather, and Layered Architecture, covering perception, decision making, and control.\n\nSimple Reactive Agent applications instead include automatic doors, thermostats, traffic light controllers, line-following robots, and basic game AI, not autonomous vehicles.\n\nDeliberative Architecture's listed applications do not name autonomous vehicles specifically, focusing instead on robotics and automation, decision support, healthcare, finance, and assistants.\n\nAutonomous vehicles are explicitly listed for two of the architecture types, so it is not true that none of them apply.",
  },
  {
    id: "cpe310_ch4_090",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Game AI is listed as an application for which architecture types?",
    options: [
      "Simple Reactive and Layered",
      "Deliberative Architecture only",
      "Reactive Planner only",
      "None of these types",
    ],
    correctAnswer: 0,
    explanation:
      "Game AI is listed as an application for both Simple Reactive Agents, covering simple enemy movement in early video games, and Layered Architecture, managing reflex actions, tactics, and long-term strategies together.\n\nDeliberative Architecture's listed applications instead focus on robotics and automation, decision support, healthcare, finance, and assistants, without naming game AI specifically.\n\nReactive Planner's listed applications instead focus on robotics, autonomous vehicles, UAVs, cybersecurity, disaster response, and industrial automation, without naming game AI specifically.\n\nGame AI is explicitly listed for two of the architecture types, so it is not true that none of them apply.",
  },
  {
    id: "cpe310_ch4_091",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Industrial automation, involving real-time control and adaptation to system or environment changes, is listed as an application of which architecture type?",
    options: [
      "Reactive Planner",
      "Deliberative Architecture",
      "Simple Reactive Agent",
      "Layered Architecture",
    ],
    correctAnswer: 0,
    explanation:
      "Industrial automation, involving real-time control and adaptation to system or environment changes, is listed as an application of Reactive Planners.\n\nDeliberative Architecture's listed applications instead focus on robotics and automation, decision support, healthcare, finance, and assistants, not this specific real-time industrial automation framing.\n\nSimple Reactive Agent applications instead include automatic doors, thermostats, traffic light controllers, line-following robots, and basic game AI, not industrial automation.\n\nLayered Architecture's listed applications instead include robotics, autonomous vehicles, game AI, drones, and smart systems, not industrial automation specifically.",
  },
  {
    id: "cpe310_ch4_092",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Disaster response, adapting search and rescue plans based on evolving situations, is listed as an application of which architecture type?",
    options: [
      "Layered Architecture",
      "Deliberative Architecture",
      "Reactive Planner",
      "Simple Reactive Agent",
    ],
    correctAnswer: 2,
    explanation:
      "Disaster response, adapting search and rescue plans based on evolving situations, is listed as an application of Reactive Planners.\n\nLayered Architecture's listed applications instead include robotics, autonomous vehicles, game AI, drones, and smart systems, not disaster response specifically.\n\nDeliberative Architecture's listed applications instead focus on robotics and automation, decision support, healthcare, finance, and assistants, not disaster response.\n\nSimple Reactive Agent applications instead include automatic doors, thermostats, traffic light controllers, line-following robots, and basic game AI, not disaster response.",
  },
  {
    id: "cpe310_ch4_093",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Comparing the four architecture types, which one is described as requiring the most significant processing power for its core operation?",
    options: [
      "Simple Reactive Agent",
      "Deliberative Architecture",
      "Reactive Planner",
      "All require equal processing power",
    ],
    correctAnswer: 1,
    explanation:
      "Deliberative Architecture is described as having high computational cost, since planning and reasoning require significant processing power, more than the lighter-weight designs of the other types.\n\nSimple Reactive Agent is explicitly described as computationally inexpensive, the opposite of requiring significant processing power.\n\nReactive Planner is explicitly described as having low computational cost, not requiring heavy search or complex global planning.\n\nThe notes describe clearly different computational costs across the architecture types, so it is not true that all four require the same amount.",
  },
  {
    id: "cpe310_ch4_094",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A basic enemy in an early video game that always moves toward the player in a straight line, with no memory of past positions, illustrates which architecture type?",
    options: [
      "Deliberative Architecture",
      "Layered Architecture",
      "Reactive Planner",
      "Simple Reactive Agent",
    ],
    correctAnswer: 3,
    explanation:
      "This describes a Simple Reactive Agent, matching the basic game AI application listed for simple enemy movement in early video games, and matching its disadvantage of having no memory.\n\nDeliberative architecture would involve reasoning and planning before moving, not a fixed, memoryless reaction to the player's position.\n\nLayered architecture would involve multiple coordinating layers, more than this single, simple reactive behavior requires.\n\nA reactive planner would involve some adaptive planning and behavior arbitration, beyond the fixed, straight-line reaction described here.",
  },
  {
    id: "cpe310_ch4_095",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Modularity is listed as an advantage only of layered architecture, and not of any of the other three architecture types.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Modularity, separating concerns into distinct layers, is listed specifically as a layered architecture advantage. None of the other three architecture types, simple reactive agents, reactive planners, or deliberative architecture, list modularity among their advantages.",
  },
  {
    id: "cpe310_ch4_096",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A reasoning engine that applies logical inference and a knowledge base that stores facts and rules are both explicitly named components of a layered architecture's lower layer.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: the reasoning engine and knowledge base are components of a deliberative architecture, not the lower layer of a layered architecture. The layered architecture's lower layer instead handles sensor processing, reflex actions, and real-time responses.",
  },
  {
    id: "cpe310_ch4_097",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "A simple reactive agent is described as capable of effective long-term planning across many future states.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: simple reactive agents are described as unable to plan ahead, which is explicitly listed as one of their disadvantages, alongside having no memory.",
  },
  {
    id: "cpe310_ch4_098",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Reactive planners are described as having limited long-term planning ability, since they cannot effectively reason about future consequences.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Reactive Planners explicitly lists limited long-term planning as a limitation, noting that reactive planners cannot effectively reason about future consequences.",
  },
  {
    id: "cpe310_ch4_099",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Layered architecture is described as having no dependency at all between its layers, with each layer operating in complete isolation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false: layered architecture is described as having dependency on lower layers, since higher layers rely on the proper functioning of lower layers, and layers cooperate by exchanging plans, commands, and feedback rather than operating in complete isolation.",
  },
  {
    id: "cpe310_ch4_100",
    course: "CPE 310",
    chapter: "Chapter 4",
    text: "Deliberative architecture performance is described as dropping when the internal world model is incorrect or outdated.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Deliberative Architecture explicitly lists dependence on accurate models as a limitation, stating that performance drops if the internal world model is incorrect or outdated.",
  },
];

export default cpe310Chapter4Questions;
