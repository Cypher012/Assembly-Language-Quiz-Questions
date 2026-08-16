import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter1_1Questions: QuestionV2[] = [
  {
    id: "cpe310_ch1_001",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Nwana's 1996 definition describes a software agent as which of the following?",
    options: [
      "A software entity that functions continuously and autonomously in a particular environment, often inhabited by other agents and processes",
      "A physical robot that only operates when directly controlled by a human",
      "A single function call that executes once and immediately terminates",
      "A static configuration file read once at program startup",
    ],
    correctAnswer: 0,
    explanation:
      "Nwana's 1996 definition describes a software agent as a software entity that functions continuously and autonomously in a particular environment, often inhabited by other agents and processes.\n\nA physical robot requiring direct human control contradicts the defining trait of autonomy.\n\nA single function call that terminates immediately contradicts the defining trait of continuity, operating persistently over time.\n\nA static configuration file is passive and unchanging, contradicting the defining traits of autonomy and reactivity.",
  },
  {
    id: "cpe310_ch1_002",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Within Nwana's definition, which term describes an agent operating persistently over time without constant human intervention?",
    options: ["Continuity", "Autonomy", "Delegation", "Proactivity"],
    correctAnswer: 0,
    explanation:
      "Continuity is defined as operating persistently over time without constant human intervention.\n\nAutonomy instead is defined as making decisions and acting independently based on environment perception, a related but distinct trait from persistence over time.\n\nDelegation instead is defined as acting on behalf of a user, system, or organisation, not the persistence of operation.\n\nProactivity instead is defined as initiating behaviour in pursuit of goals, not the persistence of operation.",
  },
  {
    id: "cpe310_ch1_003",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Within Nwana's definition, which term describes making decisions and acting independently based on environment perception?",
    options: ["Autonomy", "Continuity", "Social Ability", "Reactivity"],
    correctAnswer: 0,
    explanation:
      "Autonomy is defined as making decisions and acting independently based on environment perception.\n\nContinuity instead is defined as operating persistently over time without constant human intervention, not independent decision-making itself.\n\nSocial Ability instead is defined as interacting with other agents or humans through communication, not independent decision-making.\n\nReactivity instead is defined as perceiving the environment and responding in a timely manner, a distinct trait from independent decision-making.",
  },
  {
    id: "cpe310_ch1_004",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Within Nwana's definition, which term describes acting on behalf of a user, system, or organisation?",
    options: ["Delegation", "Continuity", "Autonomy", "Proactivity"],
    correctAnswer: 0,
    explanation:
      "Delegation is defined as acting on behalf of a user, system, or organisation.\n\nContinuity instead is defined as operating persistently over time, not specifically acting on someone's behalf.\n\nAutonomy instead is defined as making independent decisions, a related but distinct trait from acting on behalf of another party.\n\nProactivity instead is defined as initiating behaviour toward goals, not specifically representing another party.",
  },
  {
    id: "cpe310_ch1_005",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Within Nwana's definition, which term describes initiating behaviour in pursuit of goals, not only on command?",
    options: ["Proactivity", "Reactivity", "Delegation", "Social Ability"],
    correctAnswer: 0,
    explanation:
      "Proactivity is defined as initiating behaviour in pursuit of goals, not only on command.\n\nReactivity instead is defined as perceiving the environment and responding in a timely manner, a response to stimuli rather than self-initiated behaviour.\n\nDelegation instead is defined as acting on behalf of a user, system, or organisation, not initiating goal-directed behaviour.\n\nSocial Ability instead is defined as interacting with other agents or humans through communication, not initiating goals.",
  },
  {
    id: "cpe310_ch1_006",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Within Nwana's definition, which term describes interacting with other agents or humans through communication?",
    options: ["Social Ability", "Reactivity", "Proactivity", "Continuity"],
    correctAnswer: 0,
    explanation:
      "Social Ability is defined as interacting with other agents or humans through communication.\n\nReactivity instead is defined as perceiving the environment and responding in a timely manner, not specifically communication with others.\n\nProactivity instead is defined as initiating behaviour toward goals, not specifically communication.\n\nContinuity instead is defined as operating persistently over time, not communication.",
  },
  {
    id: "cpe310_ch1_007",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Within Nwana's definition, which term describes perceiving the environment and responding in a timely manner?",
    options: ["Reactivity", "Proactivity", "Delegation", "Continuity"],
    correctAnswer: 0,
    explanation:
      "Reactivity is defined as perceiving the environment and responding in a timely manner.\n\nProactivity instead is defined as initiating behaviour in pursuit of goals, not only responding to what is perceived.\n\nDelegation instead is defined as acting on behalf of a user, system, or organisation, not perceiving and responding.\n\nContinuity instead is defined as operating persistently over time, not the act of perceiving and responding.",
  },
  {
    id: "cpe310_ch1_008",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as one of the six terms defining Nwana's software agent?",
    options: ["Continuity", "Delegation", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "Nwana's definition lists six terms: Continuity, Autonomy, Delegation, Proactivity, Social Ability, and Reactivity, so both Continuity and Delegation are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch1_009",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Comparing traditional programs and software agents, which of the following describes a traditional program or service?",
    options: [
      "Executes fixed logic on demand",
      "Pursues goals autonomously",
      "Maintains beliefs, goals, and intentions",
      "Proactively initiates actions",
    ],
    correctAnswer: 0,
    explanation:
      "A traditional program or service executes fixed logic on demand, according to the comparison table.\n\nPursuing goals autonomously is instead listed as a trait of a software agent, not a traditional program.\n\nMaintaining beliefs, goals, and intentions is instead listed as a trait of a software agent, not a traditional program.\n\nProactively initiating actions is instead listed as a trait of a software agent, not a traditional program.",
  },
  {
    id: "cpe310_ch1_010",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Comparing traditional programs and software agents, which of the following describes a software agent's execution style?",
    options: [
      "Asynchronous, event-driven execution",
      "Synchronous, blocking execution",
      "Requires exact inputs and explicit instructions",
      "Reacts only to direct calls",
    ],
    correctAnswer: 0,
    explanation:
      "A software agent uses asynchronous, event-driven execution, according to the comparison table.\n\nSynchronous, blocking execution is instead listed as the trait of a traditional program or service, not a software agent.\n\nRequiring exact inputs and explicit instructions is instead listed as the trait of a traditional program, not a software agent, which adapts to dynamic, uncertain environments.\n\nReacting only to direct calls is instead listed as the trait of a traditional program, not a software agent, which proactively initiates actions.",
  },
  {
    id: "cpe310_ch1_011",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Comparing traditional programs and software agents, who must orchestrate every step in a traditional program?",
    options: [
      "A human",
      "The agent itself, self-directing task completion",
      "Another independent software agent",
      "No orchestration is required at all",
    ],
    correctAnswer: 0,
    explanation:
      "In a traditional program, a human must orchestrate every step, according to the comparison table.\n\nAn agent self-directing task completion is instead listed as the trait of a software agent, not a traditional program.\n\nAnother independent agent orchestrating the steps is not what the comparison table describes for a traditional program.\n\nNo orchestration being required at all contradicts the table, which states a human must orchestrate every step of a traditional program.",
  },
  {
    id: "cpe310_ch1_012",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a core characteristic of a software agent that allows it to move across different system environments or networks?",
    options: ["Mobility", "Autonomy", "Reactivity", "Proactivity"],
    correctAnswer: 0,
    explanation:
      "Mobility, listed as a characteristic of some agents, allows an agent to move across different system environments or networks.\n\nAutonomy instead is defined as operating without direct intervention, making its own decisions, not the ability to move across environments.\n\nReactivity instead is defined as perceiving and responding to environmental stimuli, not the ability to move across environments.\n\nProactivity instead is defined as taking initiative toward goals, not the ability to move across environments.",
  },
  {
    id: "cpe310_ch1_013",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a core characteristic of a software agent describing improvement through experience and feedback over time?",
    options: [
      "Adaptability & Learning",
      "Mobility",
      "Social Ability",
      "Reactivity",
    ],
    correctAnswer: 0,
    explanation:
      "Adaptability & Learning is listed as a core characteristic describing improvement of performance through experience and feedback over time.\n\nMobility instead is defined as the ability to move across different system environments or networks, not improvement through experience.\n\nSocial Ability instead is defined as communicating with other agents, humans, or systems using defined protocols, not improvement through experience.\n\nReactivity instead is defined as perceiving and responding to environmental stimuli, not improvement through experience.",
  },
  {
    id: "cpe310_ch1_014",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "The six core characteristics of a software agent, including Mobility and Adaptability & Learning, are described as coming from which source?",
    options: [
      "Nwana (1996)",
      "Hewitt (1973)",
      "Selfridge (1959)",
      "Lesser (1977)",
    ],
    correctAnswer: 0,
    explanation:
      "The six core characteristics are explicitly stated to come from Nwana (1996) and remain the backbone of agent design today.\n\nHewitt (1973) is instead credited with the Actor Model, not the six core characteristics.\n\nSelfridge (1959) is instead credited with the Pandemonium Model and the birth of autonomy, not the six core characteristics.\n\nLesser (1977) is instead credited with pioneering distributed AI and multi-agent systems, not the six core characteristics.",
  },
  {
    id: "cpe310_ch1_015",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the historical timeline of software agents, which person or event is credited with 1959?",
    options: [
      "Selfridge, autonomous software entities",
      "Hewitt, the Actor Model and async messages",
      "Lesser, multi-agent systems",
      "Nwana, formal agent typology",
    ],
    correctAnswer: 0,
    explanation:
      "The timeline credits Selfridge in 1959 with autonomous software entities.\n\nHewitt is instead credited with the Actor Model and async messages in 1973, not 1959.\n\nLesser is instead credited with multi-agent systems in 1977, not 1959.\n\nNwana is instead credited with a formal agent typology in 1996, not 1959.",
  },
  {
    id: "cpe310_ch1_016",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the historical timeline of software agents, which person or event is credited with 1973?",
    options: [
      "Hewitt, the Actor Model and async messages",
      "Selfridge, autonomous software entities",
      "Wooldridge & Jennings, the agent spectrum",
      "Nwana, formal agent typology",
    ],
    correctAnswer: 0,
    explanation:
      "The timeline credits Hewitt in 1973 with the Actor Model and async messages.\n\nSelfridge is instead credited with autonomous software entities in 1959, not 1973.\n\nWooldridge & Jennings are instead credited with the agent spectrum in the 1990s, not 1973.\n\nNwana is instead credited with a formal agent typology in 1996, not 1973.",
  },
  {
    id: "cpe310_ch1_017",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the historical timeline of software agents, which person or event is credited with pioneering multi-agent systems (MAS) in 1977?",
    options: ["Lesser", "Selfridge", "Hewitt", "Nwana"],
    correctAnswer: 0,
    explanation:
      "The timeline credits Lesser in 1977 with multi-agent systems (MAS).\n\nSelfridge is instead credited with autonomous software entities in 1959, not multi-agent systems.\n\nHewitt is instead credited with the Actor Model in 1973, not multi-agent systems.\n\nNwana is instead credited with a formal agent typology in 1996, not multi-agent systems.",
  },
  {
    id: "cpe310_ch1_018",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the historical timeline of software agents, which person or event is credited with categorising an agent spectrum in the 1990s?",
    options: ["Wooldridge & Jennings", "Selfridge", "Lesser", "Nwana"],
    correctAnswer: 0,
    explanation:
      "The timeline credits Wooldridge & Jennings in the 1990s with the agent spectrum.\n\nSelfridge is instead credited with autonomous software entities in 1959, not the agent spectrum.\n\nLesser is instead credited with multi-agent systems in 1977, not the agent spectrum.\n\nNwana is instead credited with a formal agent typology in 1996, not the agent spectrum.",
  },
  {
    id: "cpe310_ch1_019",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the historical timeline of software agents, which entry is credited with 2017 and beyond, bringing transformers, ChatGPT, and MCP?",
    options: ["LLMs", "Selfridge", "Lesser", "Wooldridge & Jennings"],
    correctAnswer: 0,
    explanation:
      "The timeline credits LLMs, from 2017 onward, with transformers, ChatGPT, and MCP.\n\nSelfridge is instead credited with autonomous software entities in 1959, not 2017 onward.\n\nLesser is instead credited with multi-agent systems in 1977, not 2017 onward.\n\nWooldridge & Jennings are instead credited with the agent spectrum in the 1990s, not 2017 onward.",
  },
  {
    id: "cpe310_ch1_020",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Oliver Selfridge's Pandemonium Model introduced which concept, described as small autonomous software entities that could perceive their environment and act independently?",
    options: ["Demons", "Actors", "Agents Guilds", "Behaviour Modules"],
    correctAnswer: 0,
    explanation:
      "Selfridge's Pandemonium Model introduced 'demons', small autonomous software entities that could perceive their environment and act independently.\n\nActors are instead the term introduced by Hewitt's 1973 Actor Model, not Selfridge's Pandemonium Model.\n\nAgents Guilds is not a term used in this material.\n\nBehaviour Modules is not the term Selfridge's model introduced; it is a general architectural term used elsewhere.",
  },
  {
    id: "cpe310_ch1_021",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "What is described as Selfridge's key contribution to the history of software agents?",
    options: [
      "Establishing autonomy as a core attribute of intelligent software, where programs could decide and act, not just react or execute",
      "Inventing the transformer architecture used in modern LLMs",
      "Publishing the first comprehensive classification of agent types",
      "Coining the term 'agentic AI' for enterprise-scale systems",
    ],
    correctAnswer: 0,
    explanation:
      "Selfridge's key contribution is establishing autonomy as a core attribute of intelligent software, where programs could decide and act, not just react or execute.\n\nInventing the transformer architecture is instead credited to Vaswani et al. in 2017, not Selfridge.\n\nPublishing the first comprehensive classification of agent types is instead credited to Nwana in 1996, not Selfridge.\n\nCoining the term 'agentic AI' is not attributed to Selfridge in this material.",
  },
  {
    id: "cpe310_ch1_022",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Selfridge's 'demons' are described as a direct ancestor of which modern concept?",
    options: [
      "Microagents and serverless functions",
      "Relational databases",
      "Physical robots with no software component",
      "Paper-based filing systems",
    ],
    correctAnswer: 0,
    explanation:
      "Selfridge's 'demons' are described as a surprisingly direct ancestor of modern microagents and serverless functions.\n\nRelational databases are not the modern concept Selfridge's demons are described as an ancestor of.\n\nPhysical robots with no software component contradict the software-entity nature of Selfridge's demons.\n\nPaper-based filing systems are unrelated to the modern concept Selfridge's demons are described as an ancestor of.",
  },
  {
    id: "cpe310_ch1_023",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Carl Hewitt's Actor Model describes actors as which of the following?",
    options: [
      "Independent, concurrently executing entities, each encapsulating its own state and behaviour",
      "Passive data records with no behaviour of their own",
      "A single centralised controller managing all system state",
      "A type of physical sensor used in robotics",
    ],
    correctAnswer: 0,
    explanation:
      "In the Actor Model, actors are independent, concurrently executing entities, each encapsulating its own state and behaviour.\n\nPassive data records with no behaviour contradicts the description of actors as entities that encapsulate their own behaviour.\n\nA single centralised controller contradicts the Actor Model's emphasis on independent, concurrently executing entities, not centralisation.\n\nA physical sensor is a hardware concept, not what an actor is defined as in this formal computational model.",
  },
  {
    id: "cpe310_ch1_024",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Actor Model, how do actors interact with one another?",
    options: [
      "Solely through asynchronous messages, with no shared state",
      "Only through a shared global variable that all actors can edit",
      "Through synchronous, blocking function calls",
      "Actors are not permitted to interact with each other at all",
    ],
    correctAnswer: 0,
    explanation:
      "Actors interact solely through asynchronous messages, with no shared state, enabling scalable and fault-tolerant systems.\n\nA shared global variable contradicts the Actor Model's explicit avoidance of shared state.\n\nSynchronous, blocking function calls contradict the asynchronous nature of actor interaction described in the model.\n\nActors are explicitly described as interacting through messages, not being forbidden from interacting at all.",
  },
  {
    id: "cpe310_ch1_025",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as one of the three core attributes of the Actor Model?",
    options: [
      "Isolation of state and behaviour",
      "A single shared database for all actors",
      "Mandatory human approval before any message is sent",
      "Fixed, unchangeable numbers of actors at compile time",
    ],
    correctAnswer: 0,
    explanation:
      "Isolation of state and behaviour is listed as one of the Actor Model's three core attributes, alongside asynchronous interaction and dynamic creation and task delegation.\n\nA single shared database contradicts the model's core attribute of isolation, since actors encapsulate their own state.\n\nMandatory human approval before sending a message is not one of the three core attributes.\n\nA fixed, unchangeable number of actors contradicts the model's attribute of dynamic creation, where actors can create new actors.",
  },
  {
    id: "cpe310_ch1_026",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a modern descendant of the Actor Model?",
    options: [
      "Erlang/OTP and the Akka framework",
      "The relational database model",
      "The waterfall software development methodology",
      "The OSI seven-layer networking model",
    ],
    correctAnswer: 0,
    explanation:
      "Erlang/OTP and the Akka framework are listed as modern descendants of the Actor Model, alongside serverless functions and agentic AI orchestration.\n\nThe relational database model is not listed as a descendant of the Actor Model.\n\nThe waterfall methodology is a project management approach, not a listed descendant of the Actor Model.\n\nThe OSI networking model is a networking standard, not a listed descendant of the Actor Model.",
  },
  {
    id: "cpe310_ch1_027",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Victor Lesser's 1977 work on Distributed AI is described as pioneering which concept?",
    options: [
      "Multi-agent systems (MAS), where independent entities cooperate, coordinate, and negotiate",
      "The transformer architecture used in modern LLMs",
      "The Pandemonium Model of autonomous demons",
      "The Belief-Desire-Intention model of mental states",
    ],
    correctAnswer: 0,
    explanation:
      "Lesser's 1977 work on Distributed AI pioneered multi-agent systems (MAS), how independent entities cooperate, coordinate, and negotiate to solve complex problems collectively.\n\nThe transformer architecture is instead credited to Vaswani et al. in 2017, not Lesser.\n\nThe Pandemonium Model is instead credited to Selfridge in 1959, not Lesser.\n\nThe Belief-Desire-Intention model is a separate agent theory concept, not credited to Lesser in this timeline.",
  },
  {
    id: "cpe310_ch1_028",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Hyacinth Nwana's 1996 publication 'Software Agents: An Overview' is described as which of the following?",
    options: [
      "The first comprehensive classification of agents, defining the agent typology still used today",
      "A hardware manual for building physical robots",
      "The original paper introducing the Actor Model",
      "A paper focused exclusively on database transaction processing",
    ],
    correctAnswer: 0,
    explanation:
      "Nwana's 1996 publication is described as the first comprehensive classification of agents, defining the agent typology still used today.\n\nA hardware manual for physical robots is not what this publication is described as.\n\nThe original Actor Model paper is instead credited to Hewitt in 1973, not Nwana.\n\nA paper on database transaction processing is not what this publication is described as.",
  },
  {
    id: "cpe310_ch1_029",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "By 1996, software agents are described as having moved from theoretical constructs to real-world deployments in which domains?",
    options: [
      "Telecom, workflow automation, and intelligent assistants",
      "Only in academic research papers with no practical use",
      "Exclusively in video game enemy AI",
      "Only in agricultural equipment",
    ],
    correctAnswer: 0,
    explanation:
      "By 1996, agents had moved from theoretical constructs to real-world deployments in telecom, workflow automation, and intelligent assistants.\n\nBeing confined to academic papers with no practical use contradicts the described move to real-world deployments.\n\nVideo game enemy AI is not the domain named for this 1996 real-world deployment shift.\n\nAgricultural equipment is not the domain named for this 1996 real-world deployment shift.",
  },
  {
    id: "cpe310_ch1_030",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, which agent type is described as stimulus-response, with low cognitive load, exemplified by a thermostat agent?",
    options: ["Reactive", "Deliberative", "Learning", "Mobile"],
    correctAnswer: 0,
    explanation:
      "The Reactive agent type is described as stimulus-response, with low cognitive load, exemplified by a thermostat agent.\n\nDeliberative instead is described as plans and reasons, with high cognitive load, exemplified by a planning assistant, not a thermostat.\n\nLearning instead is described as improving over time, exemplified by an RL-based agent, not a thermostat.\n\nMobile instead is described as moving across environments, exemplified by a network crawler, not a thermostat.",
  },
  {
    id: "cpe310_ch1_031",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, which agent type is described as plans and reasons, with high cognitive load, exemplified by a planning assistant?",
    options: ["Deliberative", "Reactive", "Hybrid", "Mobile"],
    correctAnswer: 0,
    explanation:
      "The Deliberative agent type is described as plans and reasons, with high cognitive load, exemplified by a planning assistant.\n\nReactive instead is described as stimulus-response, with low cognitive load, exemplified by a thermostat, not a planning assistant.\n\nHybrid instead is described as reactive plus deliberative, with medium-high cognitive load, exemplified by most modern agents, not specifically a planning assistant.\n\nMobile instead is described as moving across environments, exemplified by a network crawler, not a planning assistant.",
  },
  {
    id: "cpe310_ch1_032",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, which agent type is described as combining reactive and deliberative behaviour, exemplified by most modern agents?",
    options: ["Hybrid", "Reactive", "Deliberative", "Collaborative"],
    correctAnswer: 0,
    explanation:
      "The Hybrid agent type is described as reactive plus deliberative, with medium-high cognitive load, exemplified by most modern agents.\n\nReactive instead is described purely as stimulus-response, exemplified by a thermostat, not combining both approaches.\n\nDeliberative instead is described purely as plans and reasons, exemplified by a planning assistant, not combining both approaches.\n\nCollaborative instead is described as coordinating with others, exemplified by a multi-agent system, not the reactive-plus-deliberative combination.",
  },
  {
    id: "cpe310_ch1_033",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, which agent type is described as improving over time, with adaptive cognitive load, exemplified by an RL-based agent?",
    options: ["Learning", "Reactive", "Mobile", "Collaborative"],
    correctAnswer: 0,
    explanation:
      "The Learning agent type is described as improving over time, with adaptive cognitive load, exemplified by an RL-based agent.\n\nReactive instead is described as stimulus-response, exemplified by a thermostat, not improving over time.\n\nMobile instead is described as moving across environments, exemplified by a network crawler, not improving over time.\n\nCollaborative instead is described as coordinating with others, exemplified by a multi-agent system, not specifically improving over time.",
  },
  {
    id: "cpe310_ch1_034",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, which agent type is described as moving across environments, with low-medium cognitive load, exemplified by a network crawler?",
    options: ["Mobile", "Learning", "Hybrid", "Collaborative"],
    correctAnswer: 0,
    explanation:
      "The Mobile agent type is described as moving across environments, with low-medium cognitive load, exemplified by a network crawler.\n\nLearning instead is described as improving over time, exemplified by an RL-based agent, not moving across environments.\n\nHybrid instead is described as reactive plus deliberative, exemplified by most modern agents, not specifically moving across environments.\n\nCollaborative instead is described as coordinating with others, exemplified by a multi-agent system, not specifically moving across environments.",
  },
  {
    id: "cpe310_ch1_035",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, which agent type is described as coordinating with others, with distributed cognitive load, exemplified by a multi-agent system?",
    options: ["Collaborative", "Reactive", "Deliberative", "Mobile"],
    correctAnswer: 0,
    explanation:
      "The Collaborative agent type is described as coordinating with others, with distributed cognitive load, exemplified by a multi-agent system.\n\nReactive instead is described as stimulus-response, exemplified by a thermostat, not coordination with others.\n\nDeliberative instead is described as plans and reasons, exemplified by a planning assistant, not specifically coordination with others.\n\nMobile instead is described as moving across environments, exemplified by a network crawler, not specifically coordination with others.",
  },
  {
    id: "cpe310_ch1_036",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, which AWS example is given for the Reactive agent type?",
    options: [
      "CloudWatch alarm",
      "Bedrock Agents planner",
      "SageMaker RL",
      "Multi-agent LLM",
    ],
    correctAnswer: 0,
    explanation:
      "CloudWatch alarm is given as the AWS example for the Reactive agent type.\n\nBedrock Agents planner is instead given as the AWS example for the Deliberative agent type, not Reactive.\n\nSageMaker RL is instead given as the AWS example for the Learning agent type, not Reactive.\n\nMulti-agent LLM is instead given as the AWS example for the Collaborative agent type, not Reactive.",
  },
  {
    id: "cpe310_ch1_037",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as one of Nwana's six agent types?",
    options: ["Mobile", "Learning", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "Nwana's typology lists six agent types: Reactive, Deliberative, Hybrid, Learning, Mobile, and Collaborative, so both Mobile and Learning are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch1_038",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Among the Three Pillars of Modern Software Agents, which pillar is described as 'the foundation', covering operating independently without human prompts?",
    options: ["Autonomy", "Asynchronicity", "Agency", "Reactivity"],
    correctAnswer: 0,
    explanation:
      "Autonomy is described as 'the foundation', operating independently without human prompts and managing its own lifecycle.\n\nAsynchronicity instead is described as 'the mechanism', covering reacting to data in real time, not the foundational pillar.\n\nAgency instead is described as 'the differentiator', covering goal-directed behaviour, not the foundational pillar.\n\nReactivity is not one of the three named pillars in this material; it is a separate agent characteristic.",
  },
  {
    id: "cpe310_ch1_039",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Among the Three Pillars of Modern Software Agents, which pillar is described as 'the mechanism', covering reacting to data in real time with no blocking calls?",
    options: ["Asynchronicity", "Autonomy", "Agency", "Delegation"],
    correctAnswer: 0,
    explanation:
      "Asynchronicity is described as 'the mechanism', reacting to data in real time with no blocking calls or linear workflows.\n\nAutonomy instead is described as 'the foundation', operating independently without human prompts, not specifically real-time reaction mechanics.\n\nAgency instead is described as 'the differentiator', covering goal-directed behaviour, not real-time reaction mechanics.\n\nDelegation is not one of the three named pillars in this material; it is a term from Nwana's definition.",
  },
  {
    id: "cpe310_ch1_040",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Among the Three Pillars of Modern Software Agents, which pillar is described as 'the differentiator', covering goal-directed behaviour and acting with intention and purpose?",
    options: ["Agency", "Autonomy", "Asynchronicity", "Continuity"],
    correctAnswer: 0,
    explanation:
      "Agency is described as 'the differentiator', covering goal-directed behaviour, decision-making, and acting with intention and purpose.\n\nAutonomy instead is described as 'the foundation', operating independently, a necessary but not sufficient trait on its own.\n\nAsynchronicity instead is described as 'the mechanism', covering real-time, non-blocking communication, not the differentiating trait.\n\nContinuity is not one of the three named pillars in this material; it is a term from Nwana's definition.",
  },
  {
    id: "cpe310_ch1_041",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "A system that is autonomous and asynchronous, but lacks agency, might still be what?",
    options: [
      "A reactive service",
      "A fully agentic AI system",
      "A physical robot with no software",
      "A deliberative planner by definition",
    ],
    correctAnswer: 0,
    explanation:
      "The quote states a system that is autonomous and asynchronous might still be a reactive service; agency, the ability to act with intention and purpose, is what makes it a true software agent.\n\nBeing a fully agentic AI system is exactly what the quote says autonomy and asynchronicity alone are insufficient to guarantee, since agency is also required.\n\nA physical robot with no software contradicts the software-focused nature of this discussion entirely.\n\nBeing a deliberative planner by definition is not what the quote states about a merely autonomous and asynchronous system.",
  },
  {
    id: "cpe310_ch1_042",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Autonomy and asynchronicity are described as which of the following for a software agent?",
    options: [
      "Necessary but not sufficient conditions",
      "Entirely unnecessary and irrelevant conditions",
      "Sufficient conditions on their own, with nothing else required",
      "Conditions that only apply to physical, embodied robots",
    ],
    correctAnswer: 0,
    explanation:
      "Autonomy and asynchronicity are described as necessary but not sufficient conditions for a software agent; agency is also required.\n\nBeing entirely unnecessary and irrelevant contradicts their description as necessary conditions.\n\nBeing sufficient on their own contradicts the explicit statement that they are not sufficient without agency.\n\nRestricting this to physical, embodied robots is not stated; the discussion applies to software agents generally.",
  },
  {
    id: "cpe310_ch1_043",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the era of generative AI, agency is described as what separates a chatbot from which of the following?",
    options: [
      "An autonomous AI assistant",
      "A physical thermostat",
      "A traditional relational database",
      "A paper-based instruction manual",
    ],
    correctAnswer: 0,
    explanation:
      "In the era of generative AI, agency is described as what separates a chatbot from an autonomous AI assistant.\n\nA physical thermostat is a simple reactive device, not the comparison point named in this key takeaway.\n\nA traditional relational database is unrelated to the chatbot-versus-assistant comparison named here.\n\nA paper-based instruction manual is unrelated to the chatbot-versus-assistant comparison named here.",
  },
  {
    id: "cpe310_ch1_044",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a core purpose explaining why software agents exist, involving acting on behalf of a user or system and carrying delegated goals?",
    options: [
      "Delegate Intent",
      "Reduce Human Cognitive Load",
      "Enable Distributed Intelligence",
      "Act with Purpose, Not Only Reaction",
    ],
    correctAnswer: 0,
    explanation:
      "Delegate Intent is listed as a core purpose, acting on behalf of a user or system and carrying delegated goals while navigating uncertainty autonomously.\n\nReduce Human Cognitive Load instead is described as continuously monitoring and automating repetitive decisions, a related but distinct purpose.\n\nEnable Distributed Intelligence instead is described as multi-agent coordination to distribute tasks, a related but distinct purpose.\n\nAct with Purpose, Not Only Reaction instead is described as pursuing goals and revising beliefs, a related but distinct purpose.",
  },
  {
    id: "cpe310_ch1_045",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a core purpose explaining why software agents exist, involving multi-agent systems coordinating to distribute tasks and solve problems no single component could handle?",
    options: [
      "Enable Distributed Intelligence",
      "Delegate Intent",
      "Operate in Dynamic Environments",
      "Reduce Human Cognitive Load",
    ],
    correctAnswer: 0,
    explanation:
      "Enable Distributed Intelligence is listed as a core purpose, where multi-agent systems coordinate across environments to distribute tasks and solve problems no single component could handle.\n\nDelegate Intent instead is described as acting on behalf of a user or system, a related but distinct purpose from distributed coordination.\n\nOperate in Dynamic Environments instead is described as adapting to constantly changing conditions, a related but distinct purpose.\n\nReduce Human Cognitive Load instead is described as automating repetitive decisions, a related but distinct purpose.",
  },
  {
    id: "cpe310_ch1_046",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a core purpose explaining why software agents exist, involving continuously monitoring, detecting conditions, and automating repetitive decisions?",
    options: [
      "Reduce Human Cognitive Load",
      "Delegate Intent",
      "Enable Distributed Intelligence",
      "Act with Purpose, Not Only Reaction",
    ],
    correctAnswer: 0,
    explanation:
      "Reduce Human Cognitive Load is listed as a core purpose, continuously monitoring, detecting conditions, automating repetitive decisions, and reacting with minimal latency.\n\nDelegate Intent instead is described as acting on behalf of a user or system, a related but distinct purpose.\n\nEnable Distributed Intelligence instead is described as multi-agent coordination, a related but distinct purpose.\n\nAct with Purpose, Not Only Reaction instead is described as pursuing goals and revising beliefs, a related but distinct purpose.",
  },
  {
    id: "cpe310_ch1_047",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the described shift in focus, what do humans focus on while agents handle micro-level decision-making at machine speed?",
    options: [
      "Strategy and creative problems",
      "Manually executing every repetitive task",
      "Nothing at all, since agents replace humans entirely",
      "Only physical hardware maintenance",
    ],
    correctAnswer: 0,
    explanation:
      "The described shift states humans focus on strategy and creative problems, while agents handle micro-level decision-making at machine speed.\n\nManually executing every repetitive task is the opposite of the described shift, which offloads repetitive decisions to agents.\n\nHumans being replaced entirely contradicts the described shift, which reassigns humans to strategy rather than eliminating their role.\n\nOnly physical hardware maintenance is not the focus described for humans in this shift.",
  },
  {
    id: "cpe310_ch1_048",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent Cognitive Cycle, which stage gathers events, sensor inputs, and API signals, updating internal state and beliefs about the environment?",
    options: ["Perceive", "Reason", "Act", "Learn"],
    correctAnswer: 0,
    explanation:
      "Perceive gathers events, sensor inputs, and API signals, updating the agent's internal state and beliefs about the environment.\n\nReason instead analyses beliefs, goals, and context to prioritise goals and select intentions, a later stage than gathering raw inputs.\n\nAct instead executes chosen actions that move toward delegated goals, a later stage than gathering raw inputs.\n\nLearn is not one of the three named stages in the Perceive-Reason-Act cycle.",
  },
  {
    id: "cpe310_ch1_049",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent Cognitive Cycle, which stage analyses beliefs, goals, and context via a plan library, prioritising goals and resolving conflicts?",
    options: ["Reason", "Perceive", "Act", "Sense"],
    correctAnswer: 0,
    explanation:
      "Reason analyses beliefs, goals, and context via a plan library, prioritising goals, resolving conflicts, and selecting intentions.\n\nPerceive instead gathers raw events, sensor inputs, and API signals, a step before reasoning occurs.\n\nAct instead executes the chosen actions, a step after reasoning has selected an intention.\n\nSense is not one of the three named stages in the Perceive-Reason-Act cycle.",
  },
  {
    id: "cpe310_ch1_050",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent Cognitive Cycle, which stage executes chosen actions that move toward delegated goals and feeds results back into the next perception cycle?",
    options: ["Act", "Perceive", "Reason", "Delegate"],
    correctAnswer: 0,
    explanation:
      "Act executes chosen actions that move toward delegated goals, feeding results back into the next perception cycle.\n\nPerceive instead gathers raw inputs, a step that precedes acting, not the execution step itself.\n\nReason instead selects the intention to pursue, a step that precedes acting, not the execution step itself.\n\nDelegate is not one of the three named stages in the Perceive-Reason-Act cycle.",
  },
  {
    id: "cpe310_ch1_051",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "The Perceive-Reason-Act cognitive cycle is described as being derived from which historical model?",
    options: [
      "The Actor Model",
      "The relational database model",
      "The waterfall development model",
      "The OSI networking model",
    ],
    correctAnswer: 0,
    explanation:
      "The Perceive-Reason-Act cycle is described as derived from the Actor Model, forming the mental framework guiding all agent behaviour.\n\nThe relational database model is not the origin described for this cognitive cycle.\n\nThe waterfall development model is not the origin described for this cognitive cycle.\n\nThe OSI networking model is not the origin described for this cognitive cycle.",
  },
  {
    id: "cpe310_ch1_052",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent's Mental State table, which concept is described as the internal representation of the environment based on perception, updated when new sensor or API data arrives?",
    options: ["Beliefs", "Goals", "Intentions", "Plan Library"],
    correctAnswer: 0,
    explanation:
      "Beliefs are described as the internal representation of the environment based on perception, updated when new sensor or API data arrives.\n\nGoals instead are described as the desired outcomes the agent is pursuing, updated when the delegator updates objectives, not perception.\n\nIntentions instead are described as chosen plans the agent commits to, updated when a plan is selected from the plan library.\n\nPlan Library instead is described as pre-stored or dynamically generated action sequences, updated when the learning module updates strategies.",
  },
  {
    id: "cpe310_ch1_053",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent's Mental State table, which concept is described as the desired outcomes the agent is pursuing, updated when the delegator updates objectives?",
    options: ["Goals", "Beliefs", "Intentions", "Plan Library"],
    correctAnswer: 0,
    explanation:
      "Goals are described as the desired outcomes the agent is pursuing, updated when the delegator updates objectives.\n\nBeliefs instead are described as the internal representation of the environment, updated when new sensor or API data arrives, not by the delegator.\n\nIntentions instead are described as chosen plans the agent commits to, updated when a plan is selected, not by the delegator directly.\n\nPlan Library instead is described as pre-stored or dynamically generated action sequences, updated by the learning module.",
  },
  {
    id: "cpe310_ch1_054",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent's Mental State table, which concept is described as chosen plans the agent commits to, updated when a plan is selected from the plan library?",
    options: ["Intentions", "Beliefs", "Goals", "Plan Library"],
    correctAnswer: 0,
    explanation:
      "Intentions are described as chosen plans the agent commits to, updated when a plan is selected from the plan library.\n\nBeliefs instead are described as the internal representation of the environment, updated by new sensor or API data, not plan selection.\n\nGoals instead are described as desired outcomes the agent is pursuing, updated when the delegator updates objectives, not plan selection.\n\nPlan Library instead is described as the pre-stored or dynamically generated action sequences themselves, not the commitment to a chosen plan.",
  },
  {
    id: "cpe310_ch1_055",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent's Mental State table's logistics agent example, which concept is illustrated by 'Package X is in Warehouse A, demand is high'?",
    options: ["Beliefs", "Goals", "Intentions", "Plan Library"],
    correctAnswer: 0,
    explanation:
      "'Package X is in Warehouse A, demand is high' illustrates Beliefs, the agent's internal representation of the environment based on perception.\n\nGoals instead are illustrated by 'Deliver all packages within SLA, minimise cost', not the warehouse and demand observation.\n\nIntentions instead are illustrated by 'Use Route B, notify recipient, dispatch truck', not the warehouse and demand observation.\n\nPlan Library instead is illustrated by 'Standard delivery routes, rerouting playbooks', not the warehouse and demand observation.",
  },
  {
    id: "cpe310_ch1_056",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent's Mental State table's logistics agent example, which concept is illustrated by 'Deliver all packages within SLA, minimise cost'?",
    options: ["Goals", "Beliefs", "Intentions", "Plan Library"],
    correctAnswer: 0,
    explanation:
      "'Deliver all packages within SLA, minimise cost' illustrates Goals, the desired outcomes the agent is pursuing.\n\nBeliefs instead are illustrated by 'Package X is in Warehouse A, demand is high', not the SLA and cost objectives.\n\nIntentions instead are illustrated by 'Use Route B, notify recipient, dispatch truck', not the SLA and cost objectives.\n\nPlan Library instead is illustrated by 'Standard delivery routes, rerouting playbooks', not the SLA and cost objectives.",
  },
  {
    id: "cpe310_ch1_057",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent's Mental State table's logistics agent example, which concept is illustrated by 'Use Route B, notify recipient, dispatch truck'?",
    options: ["Intentions", "Beliefs", "Goals", "Plan Library"],
    correctAnswer: 0,
    explanation:
      "'Use Route B, notify recipient, dispatch truck' illustrates Intentions, the chosen plans the agent commits to.\n\nBeliefs instead are illustrated by 'Package X is in Warehouse A, demand is high', not the committed route plan.\n\nGoals instead are illustrated by 'Deliver all packages within SLA, minimise cost', not the committed route plan.\n\nPlan Library instead is illustrated by 'Standard delivery routes, rerouting playbooks', the stored options rather than the specific committed choice.",
  },
  {
    id: "cpe310_ch1_058",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as one of the four concepts in the Agent's Mental State table?",
    options: ["Plan Library", "Intentions", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "The Agent's Mental State table lists four concepts: Beliefs, Goals, Intentions, and Plan Library, so both Plan Library and Intentions are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch1_059",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "The AWS Prescriptive Guidance quote closing Part 1 states the purpose of software agents is to bring which qualities to modern computing?",
    options: [
      "Autonomy, context-awareness, and intelligent delegation",
      "Lower manufacturing costs for physical hardware",
      "Slower, more deliberate batch processing only",
      "Complete elimination of all human decision-making",
    ],
    correctAnswer: 0,
    explanation:
      "The Part 1 Summary quote states the purpose of software agents is to bring autonomy, context-awareness, and intelligent delegation to modern computing.\n\nLower manufacturing costs for hardware is unrelated to this quote about software agents' purpose.\n\nSlower, more deliberate batch processing contradicts the quote's emphasis on being proactive and purposeful, not simply slow and deliberate.\n\nComplete elimination of human decision-making overstates the quote, which speaks of enabling proactive, purposeful systems, not eliminating humans.",
  },
  {
    id: "cpe310_ch1_060",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Agents are defined by autonomy, asynchronicity, and agency, as opposed to which simpler concept?",
    options: ["Automation", "Delegation", "Reactivity", "Continuity"],
    correctAnswer: 0,
    explanation:
      "The Part 1 Key Takeaways state agents are defined by autonomy, asynchronicity, and agency, not just automation.\n\nDelegation is instead one of the six terms within Nwana's definition, not the contrasting simpler concept named here.\n\nReactivity is instead one of the six terms within Nwana's definition, not the contrasting simpler concept named here.\n\nContinuity is instead one of the six terms within Nwana's definition, not the contrasting simpler concept named here.",
  },
  {
    id: "cpe310_ch1_061",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which two frameworks, from Hewitt and Nwana respectively, are named as foundational for software agents?",
    options: [
      "The Actor Model (1973) and Nwana's typology (1996)",
      "The transformer architecture (2017) and RAG (2020s)",
      "The waterfall model and the agile model",
      "TCP/IP and the OSI model",
    ],
    correctAnswer: 0,
    explanation:
      "The Part 1 Key Takeaways name the Actor Model (Hewitt 1973) and Nwana's typology (1996) as foundational frameworks.\n\nThe transformer architecture and RAG are instead discussed in Part 2, related to LLM-powered agents, not named here as the Part 1 foundational frameworks.\n\nThe waterfall and agile models are software development methodologies, not the frameworks named in this takeaway.\n\nTCP/IP and the OSI model are networking standards, not the frameworks named in this takeaway.",
  },
  {
    id: "cpe310_ch1_062",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "The Perceive-Reason-Act cycle is described as which of the following?",
    options: [
      "The universal cognitive architecture for all software agents",
      "A technique used only in physical manufacturing robots",
      "An outdated model no longer relevant to modern agents",
      "A concept exclusive to reinforcement learning systems",
    ],
    correctAnswer: 0,
    explanation:
      "The Part 1 Key Takeaways describe the Perceive-Reason-Act cycle as the universal cognitive architecture for all software agents.\n\nBeing used only in physical manufacturing robots contradicts its description as a universal architecture for all software agents, not just physical ones.\n\nBeing outdated and no longer relevant contradicts the material, which presents it as foundational and still applicable, including to LLM-based agents.\n\nBeing exclusive to reinforcement learning systems contradicts its description as universal across all software agents.",
  },
  {
    id: "cpe310_ch1_063",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "A software agent operates persistently over time without constant human intervention, requires exact inputs, and reacts only to direct calls.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. Continuity, operating persistently over time, is a trait of a software agent, but requiring exact inputs and reacting only to direct calls are listed as traits of a traditional program or service, not a software agent, which adapts to dynamic environments and proactively initiates actions.",
  },
  {
    id: "cpe310_ch1_064",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Nwana's Agent Typology lists Reactive, Deliberative, Hybrid, Learning, Mobile, and Collaborative as its six agent types.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. Nwana's Agent Typology table lists exactly these six agent types, each with its own definition, example, cognitive load, and AWS example.",
  },
  {
    id: "cpe310_ch1_065",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "The Actor Model, introduced by Carl Hewitt in 1973, allows actors to share a single global state directly, avoiding the need for any message passing between them.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The Actor Model specifically avoids shared state; actors interact solely through asynchronous message passing, which is what enables scalable and fault-tolerant systems.",
  },
  {
    id: "cpe310_ch1_066",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In the Agent Cognitive Cycle, the Reason stage comes before the Perceive stage, since an agent must decide what to do before it can gather any information.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is False. The cycle proceeds Perceive, then Reason, then Act; the agent must first gather events, sensor inputs, and API signals during Perceive before it can analyse beliefs and goals during Reason.",
  },
  {
    id: "cpe310_ch1_067",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Delegate Intent, Operate in Dynamic Environments, Reduce Human Cognitive Load, Enable Distributed Intelligence, and Act with Purpose are all listed as core purposes explaining why software agents exist.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is True. These five purposes are listed as the core reasons software agents exist, covering delegated goal execution, adaptation to dynamic conditions, cognitive load reduction, distributed coordination, and intentional action.",
  },
  {
    id: "cpe310_ch1_068",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a trait of a software agent in the traditional-versus-agent comparison table?",
    options: [
      "Adapts to dynamic, uncertain environments",
      "Self-directs task completion",
      "All of these",
      "None of these",
    ],
    correctAnswer: 2,
    explanation:
      "The comparison table lists both adapting to dynamic, uncertain environments and self-directing task completion as traits of a software agent, so both options are correct, making All of these the right choice.",
  },
  {
    id: "cpe310_ch1_069",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed among the six core characteristics of a software agent?",
    options: ["Profitability", "Portability", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The six core characteristics of a software agent are Autonomy, Social Ability, Reactivity, Proactivity, Adaptability & Learning, and Mobility. Neither Profitability nor Portability is one of these six named characteristics, making None of these the right choice.",
  },
  {
    id: "cpe310_ch1_070",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as one of the Three Pillars of Modern Software Agents?",
    options: ["Solvency", "Punctuality", "All of these", "None of these"],
    correctAnswer: 3,
    explanation:
      "The Three Pillars of Modern Software Agents are Autonomy, Asynchronicity, and Agency. Neither Solvency nor Punctuality is one of these three named pillars, making None of these the right choice.",
  },
  {
    id: "cpe310_ch1_071",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a modern descendant of the Actor Model, alongside serverless functions?",
    options: [
      "Akka framework",
      "Microsoft Excel",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "The Akka framework is directly listed as a modern descendant of the Actor Model, alongside Erlang/OTP and serverless functions. Microsoft Excel is not listed as a descendant of the Actor Model, so only the Akka framework is correct.",
  },
  {
    id: "cpe310_ch1_072",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as an entry in the historical timeline of software agents?",
    options: [
      "1996, Nwana, formal agent typology",
      "2005, invention of the personal computer",
      "All of these",
      "None of these",
    ],
    correctAnswer: 0,
    explanation:
      "1996, Nwana, formal agent typology, is directly listed in the historical timeline. The invention of the personal computer in 2005 is not listed in this timeline and is also historically inaccurate, so only the Nwana entry is correct.",
  },
  {
    id: "cpe310_ch1_073",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "In Nwana's Agent Typology, the AWS example given for the Deliberative agent type is which of the following?",
    options: [
      "Bedrock Agents planner",
      "SageMaker RL",
      "CloudWatch alarm",
      "Lambda trigger",
    ],
    correctAnswer: 0,
    explanation:
      "Bedrock Agents planner is given as the AWS example for the Deliberative agent type, which plans and reasons.\n\nSageMaker RL is instead given as the AWS example for the Learning agent type, not Deliberative.\n\nCloudWatch alarm is instead given as the AWS example for the Reactive agent type, not Deliberative.\n\nLambda trigger is instead given as the AWS example for the Mobile agent type, not Deliberative.",
  },
  {
    id: "cpe310_ch1_074",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a sub-bullet under the Asynchronicity pillar?",
    options: [
      "Loose coupling between components",
      "Manages its own lifecycle",
      "Carries delegated intent",
      "Functions without hardcoded control flows",
    ],
    correctAnswer: 0,
    explanation:
      "Loose coupling between components is listed under the Asynchronicity pillar, alongside scalable, non-blocking communication.\n\nManaging its own lifecycle is instead listed under the Autonomy pillar, not Asynchronicity.\n\nCarrying delegated intent is instead listed under the Agency pillar, not Asynchronicity.\n\nFunctioning without hardcoded control flows is instead listed under the Autonomy pillar, not Asynchronicity.",
  },
  {
    id: "cpe310_ch1_075",
    course: "CPE 310",
    chapter: "Chapter 1.1",
    text: "Which of the following is listed as a sub-bullet under the Agency pillar?",
    options: [
      "Carries delegated intent",
      "Manages its own lifecycle",
      "No blocking calls or linear workflows",
      "Coordinates fluidly with other services",
    ],
    correctAnswer: 0,
    explanation:
      "Carries delegated intent is listed under the Agency pillar, alongside goal-directed behaviour and contextual reasoning with memory.\n\nManaging its own lifecycle is instead listed under the Autonomy pillar, not Agency.\n\nNo blocking calls or linear workflows is instead listed under the Asynchronicity pillar, not Agency.\n\nCoordinates fluidly with other services is instead listed under the Asynchronicity pillar, not Agency.",
  },
];

export default cpe310Chapter1_1Questions;
