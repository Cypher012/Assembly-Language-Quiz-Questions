import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter3Questions: QuestionV2[] = [
  {
    id: "cpe310_ch3_001",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an agent defined in terms of autonomous action?",
    options: [
      "A computer system capable of autonomous action in some environment, in order to achieve its delegated goals",
      "A computer system that requires constant human input before performing any action",
      "A fixed script that executes the same sequence of instructions regardless of its environment",
      "A database that stores information for later retrieval by a human operator",
    ],
    correctAnswer: 0,
    explanation:
      "The definition of an agent describes a computer system capable of autonomous action in some environment, in order to achieve its delegated goals.\n\nRequiring constant human input contradicts the defining trait of autonomy, which is independent action.\n\nA fixed script executing the same instructions regardless of environment describes a non-autonomous program, not an agent.\n\nA database for later retrieval is a passive store, not something that acts autonomously to achieve delegated goals.",
  },
  {
    id: "cpe310_ch3_002",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an agent's continual interaction with its environment characterised?",
    options: [
      "A one-time cycle of sense, decide, and act that never repeats",
      "A close-coupled, continual cycle of sense, decide, act, sense, decide, act, and so on",
      "A cycle where the agent only acts and never senses its environment",
      "A cycle where the agent only senses its environment and never acts",
    ],
    correctAnswer: 1,
    explanation:
      "An agent is described as being in close-coupled, continual interaction with its environment, following a repeating cycle of sense, decide, act, sense, decide, act, and so on.\n\nA one-time cycle that never repeats contradicts the continual nature of this interaction.\n\nAn agent that only acts and never senses would have no way to know the current environment state, contradicting the sense step of the cycle.\n\nAn agent that only senses and never acts could not achieve its delegated goals, contradicting the act step of the cycle.",
  },
  {
    id: "cpe310_ch3_003",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A thermostat is given as an example of a simple agent whose delegated goal is to maintain room temperature. What are its actions?",
    options: [
      "Negotiating with other thermostats over a shared resource",
      "Sensing outdoor humidity and reporting it to a user",
      "Heat on and heat off",
      "Generating and pursuing new goals on its own initiative",
    ],
    correctAnswer: 2,
    explanation:
      "The thermostat's actions are described simply as heat on and heat off, in service of its delegated goal of maintaining room temperature.\n\nNegotiating with other thermostats is not described anywhere for this example, and the thermostat is later used precisely as an example of a simple, non-social agent.\n\nSensing outdoor humidity and reporting it is not part of the thermostat example, which concerns room temperature only.\n\nGenerating and pursuing new goals on its own initiative describes proactive behaviour, not the trivial decision making of this simple agent.",
  },
  {
    id: "cpe310_ch3_004",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The UNIX program biff is given as an example of a simple agent. What is its delegated goal?",
    options: [
      "To maintain room temperature within a fixed range",
      "To negotiate shared resource access between two users",
      "To generate expected utility values for a set of runs",
      "To monitor for incoming email and flag it",
    ],
    correctAnswer: 3,
    explanation:
      "biff's delegated goal is described as monitoring for incoming email and flagging it, with GUI actions as its means of doing so.\n\nMaintaining room temperature describes the thermostat example, not biff.\n\nNegotiating shared resource access is not part of the biff example, which is only about monitoring and flagging email.\n\nGenerating expected utility values describes the later utility-theoretic formalism, not the simple biff example.",
  },
  {
    id: "cpe310_ch3_005",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why are the thermostat and biff described as trivial agents?",
    options: [
      "Because the decision making they do is trivial",
      "Because they operate in completely inaccessible environments",
      "Because they have no delegated goal at all",
      "Because they require social ability to function",
    ],
    correctAnswer: 0,
    explanation:
      "The thermostat and biff are described as trivial because the decision making they do is trivial.\n\nOperating in an inaccessible environment is not given as the reason for their triviality, and is a separate property discussed later for environments in general.\n\nBoth examples are explicitly given a delegated goal, maintaining temperature or monitoring email, so having no goal at all is not the reason.\n\nNeither example is described as requiring social ability, and their triviality is attributed to their decision making, not to a lack of social ability.",
  },
  {
    id: "cpe310_ch3_006",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "An intelligent agent is typically thought of as exhibiting reactive, pro-active, and social behaviour.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Intelligent agents are described as typically exhibiting three types of behaviour: reactive, pro-active, and social.",
  },
  {
    id: "cpe310_ch3_007",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a reactive system defined?",
    options: [
      "A system that executes blindly, assuming its environment is guaranteed to be fixed",
      "A system that maintains an ongoing interaction with its environment and responds to changes",
      "A system that generates and pursues goals without regard to environmental changes",
      "A system that interacts with other agents through negotiation and cooperation",
    ],
    correctAnswer: 1,
    explanation:
      "Reactivity defines a reactive system as one that maintains an ongoing interaction with its environment, and responds to changes that occur in it in time for the response to be useful.\n\nExecuting blindly under a fixed-environment assumption describes the opposite case, one where a dynamic, changing environment is not accounted for.\n\nGenerating and pursuing goals without regard to environmental changes describes proactiveness, not reactivity.\n\nInteracting with other agents through negotiation and cooperation describes social ability, not reactivity.",
  },
  {
    id: "cpe310_ch3_008",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why is software described as hard to build for dynamic domains?",
    options: [
      "Because dynamic domains never contain any percepts at all",
      "Because dynamic domains require the agent to negotiate with humans before every action",
      "Because it must account for the possibility of failure before acting",
      "Because dynamic domains eliminate the need for a decision-making process",
    ],
    correctAnswer: 2,
    explanation:
      "Reactivity explains that software is hard to build for dynamic domains because a program must take into account the possibility of failure, asking itself whether it is worth executing an action.\n\nDynamic domains are not described as lacking percepts; the whole point is that they change in ways the agent must perceive and respond to.\n\nNegotiating with humans before every action is not described as a requirement of dynamic domains.\n\nDynamic domains make decision making harder, not unnecessary, since the agent must account for possible failure.",
  },
  {
    id: "cpe310_ch3_009",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is pro-activeness defined?",
    options: [
      "Responding to environmental stimuli using fixed stimulus-response rules alone",
      "Interacting with other agents through cooperation, coordination, and negotiation",
      "Maintaining complete, accurate, up-to-date information about the environment's state",
      "Generating and attempting to achieve goals, taking the initiative",
    ],
    correctAnswer: 3,
    explanation:
      "Proactiveness defines pro-activeness as generating and attempting to achieve goals, not driven solely by events, and taking the initiative.\n\nResponding to stimuli using fixed rules alone describes simple reactive behaviour, the easy case the section contrasts pro-activeness against.\n\nInteracting with other agents through cooperation, coordination, and negotiation describes social ability, not pro-activeness.\n\nMaintaining complete, accurate, up-to-date information about the environment describes an accessible environment, not pro-activeness.",
  },
  {
    id: "cpe310_ch3_010",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Besides generating and pursuing goals, what other capability is associated with pro-activeness?",
    options: [
      "Recognising opportunities",
      "Maintaining an internal record of all past runs",
      "Negotiating agreements through offer and counter-offer",
      "Ascribing beliefs and desires to a light switch",
    ],
    correctAnswer: 0,
    explanation:
      "Proactiveness lists recognising opportunities alongside generating and pursuing goals as part of pro-active behaviour.\n\nMaintaining an internal record of all past runs describes agents with state, a separate formal concept covered later.\n\nNegotiating agreements through offer and counter-offer describes negotiation, a sub-topic of social ability, not pro-activeness itself.\n\nAscribing beliefs and desires to a light switch is Shoham's example of the intentional stance, unrelated to pro-activeness.",
  },
  {
    id: "cpe310_ch3_011",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why is social ability described as necessary for agents operating in the real world?",
    options: [
      "Because every agent in the real world must be purely reactive",
      "Because the real world is a multi-agent environment requiring interaction with others",
      "Because social ability removes the need for an agent to have any goals",
      "Because the real world guarantees complete, accurate information at all times",
    ],
    correctAnswer: 1,
    explanation:
      "Social Ability explains that the real world is a multi-agent environment, so agents cannot achieve goals without taking others into account, and some goals can only be achieved by interacting with others.\n\nBeing purely reactive is a separate, distinct classification of agent covered later in the formal architecture, not a requirement implied by social ability.\n\nSocial ability does not remove the need for goals; it is precisely about achieving goals through interaction with others.\n\nThe real world is described elsewhere as inaccessible, not as guaranteeing complete, accurate information at all times.",
  },
  {
    id: "cpe310_ch3_012",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is social ability defined?",
    options: [
      "The ability to select an action based solely on the current environment state",
      "The ability to maximise expected utility across all possible runs",
      "The ability to interact with other agents and possibly humans via cooperation, coordination, and negotiation",
      "The ability to remain unaffected by any process other than the agent's own actions",
    ],
    correctAnswer: 2,
    explanation:
      "Social Ability defines it as the ability to interact with other agents, and possibly humans, via cooperation, coordination, and negotiation, with communication as the minimum requirement.\n\nSelecting an action based solely on the current state describes a purely reactive agent, not social ability.\n\nMaximising expected utility across all runs describes the later utility-theoretic notion of an optimal agent, not social ability.\n\nRemaining unaffected by any process other than the agent's own actions describes a static environment, not social ability.",
  },
  {
    id: "cpe310_ch3_013",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which of the following is a sub-type of social ability?",
    options: ["Cooperation", "Coordination", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "Social Ability names cooperation, coordination, and negotiation as its sub-types, so both cooperation, working together toward a shared goal, and coordination, managing interdependencies between activities, are supported, making All of these correct.",
  },
  {
    id: "cpe310_ch3_014",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is cooperation defined as a form of social ability?",
    options: [
      "Managing the interdependencies between activities",
      "Reaching agreements on matters of common interest",
      "Maintaining an ongoing interaction with a changing environment",
      "Working together as a team to achieve a shared goal",
    ],
    correctAnswer: 3,
    explanation:
      "Social Ability defines cooperation as working together as a team to achieve a shared goal.\n\nManaging the interdependencies between activities is instead how the same section defines coordination, not cooperation.\n\nReaching agreements on matters of common interest is instead how the section defines negotiation, not cooperation.\n\nMaintaining an ongoing interaction with a changing environment describes reactivity, not cooperation.",
  },
  {
    id: "cpe310_ch3_015",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What typically prompts agents to cooperate with one another?",
    options: [
      "The fact that no one agent can achieve the goal alone, or that cooperation obtains a better result",
      "The fact that the environment is guaranteed to be static and unchanging",
      "The fact that the agents involved are all purely reactive",
      "The fact that the task environment assigns a utility of exactly zero to every run",
    ],
    correctAnswer: 0,
    explanation:
      "Cooperation is described as often prompted either by the fact that no one agent can achieve the goal alone, or that cooperation will obtain a better result, such as getting the result faster.\n\nA guaranteed static environment is not given as a reason for cooperation, and cooperation is discussed independently of whether the environment changes.\n\nBeing purely reactive is a separate formal classification and is not given as a reason agents cooperate.\n\nA utility of exactly zero for every run is not mentioned as a reason for cooperation.",
  },
  {
    id: "cpe310_ch3_016",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is coordination defined as a form of social ability?",
    options: [
      "Working together as a team to achieve a shared goal",
      "Managing the interdependencies between activities, such as sharing a non-shareable resource",
      "Reaching agreements through offer and counter-offer",
      "Predicting behaviour by attributing beliefs and desires",
    ],
    correctAnswer: 1,
    explanation:
      "Social Ability defines coordination as managing the interdependencies between activities, giving the example of two agents needing to coordinate over a non-sharable resource they both want to use.\n\nWorking together as a team to achieve a shared goal is instead how the section defines cooperation, not coordination.\n\nReaching agreements through offer and counter-offer is instead how the section defines negotiation, not coordination.\n\nPredicting behaviour by attributing beliefs and desires describes the intentional stance, a separate topic covered later.",
  },
  {
    id: "cpe310_ch3_017",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is negotiation defined as a form of social ability?",
    options: [
      "The ability to manage interdependencies between shared activities",
      "The ability to sense environment states and generate percepts",
      "The ability to reach agreements on matters of common interest",
      "The ability to compute the expected utility of an agent in an environment",
    ],
    correctAnswer: 2,
    explanation:
      "Social Ability defines negotiation as the ability to reach agreements on matters of common interest, illustrated with the TV example of agreeing to watch football tonight and a movie tomorrow.\n\nManaging interdependencies between shared activities is instead how the section defines coordination, not negotiation.\n\nSensing environment states and generating percepts describes the see function in the formal architecture, not negotiation.\n\nComputing expected utility describes the later utility-theoretic formalism, not negotiation.",
  },
  {
    id: "cpe310_ch3_018",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does the TV example illustrate about negotiation?",
    options: [
      "That negotiation is only possible between purely reactive agents",
      "That negotiation requires an accessible environment to succeed",
      "That negotiation eliminates the need for cooperation entirely",
      "That negotiation typically involves offer and counter-offer, with compromises made by participants",
    ],
    correctAnswer: 3,
    explanation:
      "The TV example, where one housemate wants to watch a movie and the other football, and a deal is reached to watch football tonight and a movie tomorrow, illustrates that negotiation typically involves offer and counter-offer, with compromises made by participants.\n\nNegotiation is not restricted to purely reactive agents; it is discussed as a general social ability, not tied to that specific formal classification.\n\nAn accessible environment is a separate property discussed later and is not presented as a requirement for negotiation.\n\nNegotiation is one of three sub-types of social ability alongside cooperation and coordination, not a replacement for cooperation.",
  },
  {
    id: "cpe310_ch3_019",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Besides reactivity, pro-activeness, and social ability, which of the following is listed as another property of agents?",
    options: ["Mobility", "Non-determinism", "All of these", "None of these"],
    correctAnswer: 0,
    explanation:
      "The notes list mobility, veracity, benevolence, rationality, and learning or adaptation as other properties of agents, so mobility is correct. Non-determinism is instead a property of environments, not one of the other agent properties listed here, so it is not supported and only mobility applies.",
  },
  {
    id: "cpe310_ch3_020",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Determinism is listed among the other properties of agents, alongside mobility, veracity, benevolence, and rationality.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Determinism is not one of the other properties listed for agents; that list consists of mobility, veracity, benevolence, rationality, and learning or adaptation. Determinism is instead a property used later to classify environments, not agents.",
  },
  {
    id: "cpe310_ch3_021",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the other properties of agents, alongside mobility and veracity?",
    options: ["Benevolence", "Episodicity", "Accessibility", "Discreteness"],
    correctAnswer: 0,
    explanation:
      "Benevolence is listed among the other properties of agents, alongside mobility, veracity, rationality, and learning or adaptation.\n\nEpisodicity, accessibility, and discreteness are instead properties used later to classify environments, not agents, so none of them belong to this list of agent properties.",
  },
  {
    id: "cpe310_ch3_022",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which of the following is listed as one of the other properties of agents?",
    options: [
      "Determinism",
      "Rationality",
      "Staticness",
      "Continuity of environment states",
    ],
    correctAnswer: 1,
    explanation:
      "Rationality is listed among the other properties of agents, alongside mobility, veracity, benevolence, and learning or adaptation.\n\nDeterminism, staticness, and continuity of environment states are all properties used to classify environments later in the notes, not properties listed for agents themselves.",
  },
  {
    id: "cpe310_ch3_023",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Learning, or adaptation, is listed as one of the other properties of agents.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Learning, or adaptation, is listed among the other properties of agents, alongside mobility, veracity, benevolence, and rationality.",
  },
  {
    id: "cpe310_ch3_024",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does an object do, as contrasted with an agent?",
    options: [
      "It negotiates agreements through offer and counter-offer with other objects",
      "It generates and attempts to achieve goals on its own initiative",
      "It encapsulates some state, communicates via message passing, and has methods for operations on that state",
      "It decides for itself whether to perform an action requested by another object",
    ],
    correctAnswer: 2,
    explanation:
      "Agents and Objects describes an object as encapsulating some state, communicating via message passing, and having methods corresponding to operations that may be performed on that state.\n\nNegotiating agreements through offer and counter-offer is a form of social ability associated with agents, not something ascribed to an object here.\n\nGenerating and attempting to achieve goals on its own initiative describes pro-activeness, an agent property, not the object description.\n\nDeciding for itself whether to perform a requested action is precisely the stronger autonomy attributed to agents, contrasted with objects, which simply execute requested methods.",
  },
  {
    id: "cpe310_ch3_025",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "An object, like an agent, decides for itself whether to comply with a request from another entity.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is the reverse of the actual distinction: agents embody a stronger notion of autonomy, deciding for themselves whether to perform an action on request, while an object simply executes whatever method is invoked on it.",
  },
  {
    id: "cpe310_ch3_026",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How does the notion of autonomy distinguish agents from objects?",
    options: [
      "Objects always refuse requests from other objects, while agents always comply",
      "Agents cannot encapsulate any internal state, unlike objects",
      "Objects are capable of reactive, pro-active, and social behaviour, unlike agents",
      "Agents embody a stronger autonomy, deciding for themselves whether to act on request",
    ],
    correctAnswer: 3,
    explanation:
      "Differences between Agents and Objects states that agents embody a stronger notion of autonomy than objects, deciding for themselves whether or not to perform an action on request from another agent.\n\nObjects are not described as always refusing requests; rather, they typically execute whatever method is invoked on them, unlike an agent that decides for itself.\n\nAgents are not described as lacking internal state; the distinction concerns autonomy, not the presence of state.\n\nIt is agents, not objects, that are described as capable of flexible reactive, pro-active, and social behaviour, since the object-oriented model has nothing to say about such behaviour.",
  },
  {
    id: "cpe310_ch3_027",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How does 'agents are smart' distinguish agents from objects?",
    options: [
      "Agents are capable of flexible reactive, pro-active, and social behaviour",
      "Agents can never be implemented using an object-oriented programming language",
      "Agents are always more efficient at computation than objects",
      "Agents cannot communicate via message passing, unlike objects",
    ],
    correctAnswer: 0,
    explanation:
      "Differences between Agents and Objects describes agents as smart, capable of flexible reactive, pro-active, and social behaviour, a type of behaviour the object-oriented model has nothing to say about.\n\nAgents being implementable in an object-oriented language is not addressed by this distinction, which concerns behavioural capability, not implementation language.\n\nComputational efficiency is not part of this distinction between agents and objects.\n\nAgents are not described as unable to communicate via message passing; the distinction is about the kind of behaviour agents exhibit, not about ruling out object-style communication.",
  },
  {
    id: "cpe310_ch3_028",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How does 'agents are active' distinguish agents from objects?",
    options: [
      "Agents can only be activated by a human operator",
      "Agents are not passive service providers",
      "Agents always operate more slowly than passive objects",
      "Agents cannot encapsulate state the way objects do",
    ],
    correctAnswer: 1,
    explanation:
      "Differences between Agents and Objects describes agents as active, meaning they are not passive service providers, unlike the object model where methods only run when invoked.\n\nRequiring human activation is not part of this distinction, and agents are described as acting autonomously rather than only under human control.\n\nSpeed of operation is not addressed by this distinction between agents and objects.\n\nEncapsulating state is a property shared with objects and is not the basis of the 'agents are active' distinction.",
  },
  {
    id: "cpe310_ch3_029",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Agents do things for free, while objects do them because they want to or for money.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This reverses the actual summary, which says objects do it for free, while agents do it because they want to, or agents do it for money.",
  },
  {
    id: "cpe310_ch3_030",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What kind of knowledge does MYCIN, the example expert system, have?",
    options: [
      "Complete, real-time awareness of a patient's current physical state",
      "A repertoire of physical actions it can perform on a patient",
      "A wealth of knowledge about blood diseases in humans, in the form of rules",
      "Knowledge about coordinating shared resources between multiple hospitals",
    ],
    correctAnswer: 2,
    explanation:
      "Agents and Expert Systems describes MYCIN as an expert system with a wealth of knowledge about blood diseases in humans, in the form of rules, from which a doctor can obtain advice.\n\nMYCIN is explicitly described as not aware of the world, obtaining information only by asking the user questions, not through real-time awareness of a patient's state.\n\nMYCIN does not operate on patients, and is not described as having a repertoire of physical actions.\n\nCoordinating shared resources between hospitals is not part of the MYCIN example, which concerns diagnostic advice about blood diseases.",
  },
  {
    id: "cpe310_ch3_031",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How does the property of being situated in an environment distinguish agents from an expert system like MYCIN?",
    options: [
      "MYCIN directly senses the physical state of every patient in a hospital",
      "MYCIN can act on the world by administering treatment",
      "MYCIN negotiates with doctors before offering any advice",
      "MYCIN is not aware of the world, obtaining information only by asking questions",
    ],
    correctAnswer: 3,
    explanation:
      "Differences between Agents and Expert Systems states that agents are situated in an environment, while MYCIN is not aware of the world, and the only information it obtains is by asking the user questions.\n\nMYCIN is explicitly described as lacking direct awareness of the world, so it does not sense patients directly.\n\nThe same section states that MYCIN does not operate on patients, meaning it does not act on the world.\n\nNegotiation with doctors is not part of how MYCIN is described; it answers queries and gives advice based on facts provided to it.",
  },
  {
    id: "cpe310_ch3_032",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How does the property of acting distinguish agents from an expert system like MYCIN?",
    options: [
      "MYCIN does not operate on patients, unlike agents, which act",
      "MYCIN performs surgery directly on patients based on its rules",
      "MYCIN is incapable of storing any rules about blood diseases",
      "MYCIN requires no human input of any kind to function",
    ],
    correctAnswer: 0,
    explanation:
      "Differences between Agents and Expert Systems states that agents act, while MYCIN does not operate on patients, illustrating this distinction.\n\nMYCIN is explicitly described as not operating on patients at all, so it does not perform surgery or any physical action.\n\nMYCIN's entire purpose, as described, is to store a wealth of rule-based knowledge about blood diseases.\n\nMYCIN is described as obtaining its only information by asking the user questions, meaning it depends on human input to function.",
  },
  {
    id: "cpe310_ch3_033",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why don't we need to solve all the problems of AI to build a useful agent?",
    options: [
      "Because agents are defined as never needing to make any decisions at all",
      "Because building an agent only requires choosing the right action in a limited domain",
      "Because AI has already been completely solved by existing agent architectures",
      "Because agents only operate in fully accessible, deterministic environments",
    ],
    correctAnswer: 1,
    explanation:
      "Intelligent Agents and AI explains that when building an agent, we simply want a system that can choose the right action to perform, typically in a limited domain, so we do not have to solve all the problems of AI to build a useful agent.\n\nAgents are defined by their ability to choose actions autonomously, not by an absence of decision making.\n\nThe notes explicitly contrast full AI, which aims to solve hard problems like natural language and common sense, with the more limited scope needed to build a useful agent, rather than claiming AI is already solved.\n\nAgents are not restricted to fully accessible, deterministic environments; most real environments are described as inaccessible and non-deterministic.",
  },
  {
    id: "cpe310_ch3_034",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What phrase captures the idea that a useful agent does not need to solve all of AI?",
    options: [
      "The map is not the territory",
      "Garbage in, garbage out",
      "A little intelligence goes a long way",
      "Correlation does not imply causation",
    ],
    correctAnswer: 2,
    explanation:
      "Intelligent Agents and AI captures this idea with the phrase 'a little intelligence goes a long way', reinforced by the NETBOT anecdote about making agents dumber and dumber until they made money.\n\nNone of the other listed phrases appear anywhere in the notes on agents and AI, and each belongs to unrelated commentary about data quality or statistical reasoning rather than this specific point about agent intelligence.",
  },
  {
    id: "cpe310_ch3_035",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the anecdote about NETBOT, Inc, what did Oren Etzioni describe happening to the agents as they became commercially successful?",
    options: [
      "They were given increasingly complex reasoning about natural language",
      "They were merged into a single centralised expert system",
      "They were redesigned to require constant human supervision",
      "They were made dumber and dumber until finally they made money",
    ],
    correctAnswer: 3,
    explanation:
      "Intelligent Agents and AI quotes Oren Etzioni describing NETBOT's agents as having been made dumber and dumber and dumber, until finally they made money.\n\nIncreasingly complex natural language reasoning is the opposite of what the anecdote describes, which involves simplifying the agents rather than adding sophistication.\n\nMerging the agents into a single expert system is not part of the anecdote.\n\nRequiring constant human supervision contradicts the point of the anecdote, which illustrates useful autonomous behaviour without solving all of AI.",
  },
  {
    id: "cpe310_ch3_036",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an accessible environment defined?",
    options: [
      "One in which the agent can obtain complete, accurate, up-to-date information about the environment's state",
      "One in which any action has a single guaranteed effect",
      "One where the agent's performance is judged episode by episode with no link between episodes",
      "One that remains unchanged except by the agent's own actions",
    ],
    correctAnswer: 0,
    explanation:
      "Properties of Environments defines an accessible environment as one in which the agent can obtain complete, accurate, up-to-date information about the environment's state.\n\nAn action having a single guaranteed effect describes a deterministic environment, not an accessible one.\n\nPerformance judged episode by episode with no link between episodes describes an episodic environment, not an accessible one.\n\nRemaining unchanged except by the agent's own actions describes a static environment, not an accessible one.",
  },
  {
    id: "cpe310_ch3_037",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How does the accessibility of an environment relate to the difficulty of building agents for it?",
    options: [
      "The more accessible an environment is, the harder it becomes to build agents for it",
      "The more accessible an environment is, the simpler it is to build agents to operate in it",
      "Accessibility has no bearing on how difficult it is to build an agent",
      "Only inaccessible environments allow an agent to be built at all",
    ],
    correctAnswer: 1,
    explanation:
      "Properties of Environments states that the more accessible an environment is, the simpler it is to build agents to operate in it, noting that most moderately complex environments, including the everyday physical world and the Internet, are inaccessible.\n\nThe notes state the opposite relationship, that greater accessibility makes agent building simpler, not harder.\n\nAccessibility is explicitly linked to the difficulty of building agents, so it is not treated as irrelevant.\n\nAgents can be built for inaccessible environments too, such as the everyday physical world, so accessibility is not a precondition for an agent to exist.",
  },
  {
    id: "cpe310_ch3_038",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a deterministic environment defined?",
    options: [
      "One in which the agent can obtain complete information about the environment's state",
      "One with a fixed, finite number of actions and percepts",
      "One in which any action has a single guaranteed effect, with no uncertainty about the resulting state",
      "One that has other processes operating on it beyond the agent's control",
    ],
    correctAnswer: 2,
    explanation:
      "Properties of Environments defines a deterministic environment as one in which any action has a single guaranteed effect, so there is no uncertainty about the state that will result from performing an action.\n\nObtaining complete information about the environment's state describes an accessible environment, not a deterministic one.\n\nHaving a fixed, finite number of actions and percepts describes a discrete environment, not a deterministic one.\n\nHaving other processes operating on it beyond the agent's control describes a dynamic environment, not a deterministic one.",
  },
  {
    id: "cpe310_ch3_039",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The physical world can, to all intents and purposes, be regarded as a deterministic environment.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Properties of Environments states the opposite: the physical world can to all intents and purposes be regarded as non-deterministic, and non-deterministic environments present greater problems for the agent designer.",
  },
  {
    id: "cpe310_ch3_040",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an episodic environment defined?",
    options: [
      "One in which an action always has a single guaranteed effect",
      "One in which the agent must reason about interactions between the current and future episodes",
      "One in which the environment's state is fully accessible at all times",
      "One in which the agent's performance depends on discrete episodes, with no link between performance in different episodes",
    ],
    correctAnswer: 3,
    explanation:
      "Properties of Environments defines an episodic environment as one in which the agent's performance is dependent on a number of discrete episodes, with no link between the performance of an agent in different scenarios.\n\nAn action always having a single guaranteed effect describes a deterministic environment, not an episodic one.\n\nEpisodic environments are described as simpler precisely because the agent need not reason about interactions between episodes, the opposite of this option.\n\nFull accessibility at all times describes an accessible environment, not an episodic one.",
  },
  {
    id: "cpe310_ch3_041",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why are episodic environments described as simpler from the agent developer's perspective?",
    options: [
      "Because the agent decides based only on the current episode, not future ones",
      "Because episodic environments are always fully accessible",
      "Because episodic environments never contain more than one possible action",
      "Because episodic environments guarantee deterministic outcomes for every action",
    ],
    correctAnswer: 0,
    explanation:
      "Properties of Environments explains that episodic environments are simpler because the agent can decide what action to perform based only on the current episode, without needing to reason about interactions between this and future episodes.\n\nAccessibility is a separate property from episodicity, and episodic environments are not described as automatically accessible.\n\nEpisodic environments are not described as restricted to a single possible action.\n\nDeterminism is a separate property from episodicity, and nothing in the definition ties episodic environments to guaranteed deterministic outcomes.",
  },
  {
    id: "cpe310_ch3_042",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a static environment defined?",
    options: [
      "One that has other processes operating on it, changing it in ways beyond the agent's control",
      "One that can be assumed to remain unchanged except by the performance of actions by the agent",
      "One in which any action has a single guaranteed effect",
      "One with a fixed, finite number of actions and percepts",
    ],
    correctAnswer: 1,
    explanation:
      "Properties of Environments defines a static environment as one that can be assumed to remain unchanged except by the performance of actions by the agent.\n\nHaving other processes operating on it, changing it beyond the agent's control, is instead how the same section defines a dynamic environment, the opposite of static.\n\nAn action having a single guaranteed effect describes a deterministic environment, not a static one.\n\nHaving a fixed, finite number of actions and percepts describes a discrete environment, not a static one.",
  },
  {
    id: "cpe310_ch3_043",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The physical world is described as a static environment, remaining unchanged except through the agent's own actions.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is the opposite of what is stated: the physical world is described as a highly dynamic environment, having other processes operating on it that change it in ways beyond any single agent's control.",
  },
  {
    id: "cpe310_ch3_044",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a discrete environment defined?",
    options: [
      "One in which the agent can obtain complete, accurate information at all times",
      "One in which any action has a single guaranteed effect",
      "One in which there are a fixed, finite number of actions and percepts",
      "One that remains unchanged except by the agent's own actions",
    ],
    correctAnswer: 2,
    explanation:
      "Properties of Environments defines a discrete environment as one in which there are a fixed, finite number of actions and percepts in it, giving chess as an example.\n\nObtaining complete, accurate information at all times describes an accessible environment, not a discrete one.\n\nAn action having a single guaranteed effect describes a deterministic environment, not a discrete one.\n\nRemaining unchanged except by the agent's own actions describes a static environment, not a discrete one.",
  },
  {
    id: "cpe310_ch3_045",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A chess game and taxi driving are used as which pair of examples in the discussion of environment properties?",
    options: [
      "Chess as an episodic environment, and taxi driving as a static one",
      "Chess as an accessible environment, and taxi driving as an inaccessible one",
      "Chess as a deterministic environment, and taxi driving as a discrete one",
      "Chess as a discrete environment, and taxi driving as a continuous one",
    ],
    correctAnswer: 3,
    explanation:
      "Properties of Environments gives chess as an example of a discrete environment, with its fixed, finite number of actions and percepts, and taxi driving as an example of a continuous one.\n\nEpisodic and static are separate dichotomies not paired with chess and taxi driving in the notes.\n\nAccessible and inaccessible are also a separate dichotomy not illustrated with these two examples.\n\nDeterministic and discrete are two different dichotomies, and the chess and taxi driving pairing is specifically used for the discrete versus continuous distinction.",
  },
  {
    id: "cpe310_ch3_046",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the Janine example, why did Janine take her umbrella?",
    options: [
      "Because she believed it was raining and she wanted to stay dry",
      "Because she was negotiating with another agent over shared resources",
      "Because she was following a fixed, blindly executed script",
      "Because her environment was classified as fully discrete",
    ],
    correctAnswer: 0,
    explanation:
      "Agents as Intentional Systems gives the example that Janine took her umbrella because she believed it was raining and she wanted to stay dry, illustrating folk psychology explanations of behaviour.\n\nNegotiation over shared resources is not part of the Janine example, which illustrates belief and desire attribution, not social interaction.\n\nFollowing a fixed, blindly executed script is the opposite of the belief-and-desire explanation the example is meant to illustrate.\n\nEnvironment discreteness is unrelated to the Janine example, which is about explaining behaviour through folk psychology.",
  },
  {
    id: "cpe310_ch3_047",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What is folk psychology, as used to explain the Janine example?",
    options: [
      "A formal mathematical theory for computing expected utility over runs",
      "An approach that predicts behaviour by attributing beliefs, desires, and similar attitudes",
      "A classification scheme for accessible versus inaccessible environments",
      "A protocol used to coordinate shared, non-shareable resources",
    ],
    correctAnswer: 1,
    explanation:
      "Agents as Intentional Systems describes folk psychology as the approach by which human behaviour is predicted and explained by attributing attitudes such as believing, wanting, hoping, and fearing.\n\nComputing expected utility over runs describes the later utility-theoretic formalism, not folk psychology.\n\nClassifying environments as accessible or inaccessible is a separate topic from folk psychology.\n\nCoordinating shared, non-shareable resources describes coordination, a sub-type of social ability, not folk psychology.",
  },
  {
    id: "cpe310_ch3_048",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How did Daniel Dennett define an intentional system?",
    options: [
      "An entity that can only ever hold beliefs about itself, never about other entities",
      "An entity that has no beliefs or desires of any kind",
      "An entity whose behaviour can be predicted by the method of attributing belief, desires, and rational acumen",
      "An entity defined solely by a fixed, finite number of actions and percepts",
    ],
    correctAnswer: 2,
    explanation:
      "Dennett on Intentional Systems describes Dennett as coining the term intentional system for an entity whose behaviour can be predicted by the method of attributing belief, desires, and rational acumen.\n\nAn entity restricted to beliefs about itself only would not fit Dennett's higher-order intentional systems, which involve beliefs about the beliefs and desires of others too.\n\nAn entity with no beliefs or desires at all is the opposite of what an intentional system is defined as.\n\nBeing defined by a fixed, finite number of actions and percepts describes a discrete environment, not Dennett's notion of an intentional system.",
  },
  {
    id: "cpe310_ch3_049",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What distinguishes a first-order intentional system from a second-order one?",
    options: [
      "A first-order system is always deterministic, while a second-order system is always non-deterministic",
      "A first-order system can only be an object, while a second-order system can only be an agent",
      "A first-order system can negotiate, while a second-order system cannot",
      "A first-order system has beliefs and desires but not beliefs about beliefs, while a second-order system does",
    ],
    correctAnswer: 3,
    explanation:
      "Dennett on Intentional Systems quotes Dennett distinguishing a first-order intentional system, which has beliefs and desires but no beliefs and desires about beliefs and desires, from a more sophisticated second-order system, which has beliefs and desires about beliefs and desires, both of others and its own.\n\nDeterminism and non-determinism are separate environment properties, not part of Dennett's first-order versus second-order distinction.\n\nDennett's distinction concerns the order of nested beliefs and desires, not whether the system is an object or an agent.\n\nNegotiation ability is a social ability sub-type discussed elsewhere, not part of Dennett's first-order versus second-order distinction.",
  },
  {
    id: "cpe310_ch3_050",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A first-order intentional system, in Dennett's account, has beliefs and desires about the beliefs and desires of both others and itself.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This describes a second-order intentional system, not a first-order one. Dennett states that a first-order system has beliefs and desires but no beliefs and desires about beliefs and desires, while a second-order system has beliefs and desires about beliefs and desires, both those of others and its own.",
  },
  {
    id: "cpe310_ch3_051",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "When is ascribing beliefs, intentions, or wants to a machine legitimate?",
    options: [
      "When the ascription expresses the same information about the machine as about a person",
      "Only when the machine has been proven to possess genuine consciousness",
      "Only when the machine's internal structure is completely unknown",
      "Never, since mental qualities cannot be applied to any machine",
    ],
    correctAnswer: 0,
    explanation:
      "Can We Apply the Intentional Stance to Machines quotes McCarthy stating that ascribing beliefs, free will, intentions, consciousness, abilities, or wants to a machine is legitimate when such an ascription expresses the same information about the machine that it expresses about a person.\n\nMcCarthy does not require proof of genuine consciousness for the ascription to be legitimate or useful.\n\nMcCarthy states that ascription is most straightforward for machines of known structure, such as thermostats, not that the structure must be unknown for it to be legitimate.\n\nMcCarthy explicitly argues that ascribing mental qualities to machines can be legitimate and useful, not that it is never appropriate.",
  },
  {
    id: "cpe310_ch3_052",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "For which kind of machines is ascription of mental qualities most useful?",
    options: [
      "Only machines that have never been programmed with any explicit rules",
      "Entities whose internal structure is not fully known",
      "Only machines that operate in fully deterministic environments",
      "Only machines that are incapable of any form of communication",
    ],
    correctAnswer: 1,
    explanation:
      "Can We Apply the Intentional Stance to Machines quotes McCarthy stating that ascription is most straightforward for machines of known structure, such as thermostats and computer operating systems, but is most useful when applied to entities whose structure is incompletely known.\n\nMcCarthy's point concerns how well a machine's structure is understood, not whether it has ever been explicitly programmed with rules.\n\nDeterminism of the environment is not the basis McCarthy gives for when ascription is most useful.\n\nAbility to communicate is not the basis McCarthy gives for when ascription of mental qualities is most useful.",
  },
  {
    id: "cpe310_ch3_053",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In Yoav Shoham's example, how is a light switch described using the intentional stance?",
    options: [
      "As an entity with no possible intentional description at all",
      "As a system that negotiates with the electrical grid over power allocation",
      "As a very cooperative agent that transmits current at will when it believes we want it transmitted",
      "As an agent that can only act once it has learned from past failures",
    ],
    correctAnswer: 2,
    explanation:
      "What Can Be Described With the Intentional Stance quotes Shoham describing a light switch as a very cooperative agent with the capability of transmitting current at will, who invariably transmits current when it believes we want it transmitted, with flicking the switch being our way of communicating our desires.\n\nShoham's whole point is that a coherent intentional description CAN be given to the light switch, even though most adults would find it absurd, not that no such description is possible.\n\nNegotiating with the electrical grid is not part of Shoham's light switch example.\n\nLearning from past failures is not part of Shoham's light switch example, which is about a simple, consistent on-off behaviour.",
  },
  {
    id: "cpe310_ch3_054",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why does the intentional stance description of the light switch not buy us anything, even though it is consistent?",
    options: [
      "Because light switches never actually behave consistently",
      "Because the intentional stance can never be applied consistently to any system",
      "Because a light switch has genuine beliefs and desires of its own",
      "Because we already have a simpler, mechanistic explanation for it",
    ],
    correctAnswer: 3,
    explanation:
      "What Can Be Described With the Intentional Stance states that while the intentional stance description of the light switch is consistent, it does not buy us anything, since we essentially understand the mechanism sufficiently to have a simpler, mechanistic description of its behaviour.\n\nThe light switch example is specifically chosen because it behaves very consistently and predictably.\n\nShoham's argument is that the intentional stance CAN be applied consistently here, just that doing so is not useful for something this simple, not that it can never be applied consistently anywhere.\n\nThe notes do not claim the light switch has genuine beliefs and desires; the intentional description is presented as a useful abstraction, not literal truth.",
  },
  {
    id: "cpe310_ch3_055",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why might a mechanistic explanation become impractical for very complex computer systems?",
    options: [
      "Because low-level explanations become impractical as systems grow more complex",
      "Because complex systems are always fully accessible and require no abstraction",
      "Because mechanistic explanations are illegal to use for any software system",
      "Because complex systems can never be described using the intentional stance",
    ],
    correctAnswer: 0,
    explanation:
      "What Can Be Described With the Intentional Stance explains that as computer systems become ever more complex, we need more powerful abstractions and metaphors to explain their operation, since low-level explanations become impractical, and the intentional stance is presented as such an abstraction.\n\nComplex systems are not described as fully accessible; in fact, the more complex a system, the harder a full mechanistic account becomes.\n\nThere is no suggestion in the notes that mechanistic explanations are prohibited; they simply become impractical for very complex systems.\n\nThe intentional stance is specifically proposed as a workable abstraction for describing complex systems, not something that is inapplicable to them.",
  },
  {
    id: "cpe310_ch3_056",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does treating agents as intentional systems provide?",
    options: [
      "A guarantee that every agent built this way will be fully deterministic",
      "A familiar, non-technical way of understanding and explaining agents",
      "A method for eliminating the need for any environment model",
      "A way to avoid ever needing nested representations of other systems",
    ],
    correctAnswer: 1,
    explanation:
      "Characterising Agents lists, as a point in favour of the intentional systems idea, that it provides a familiar, non-technical way of understanding and explaining agents.\n\nTreating agents as intentional systems does not guarantee determinism; determinism is a separate property of environments discussed elsewhere.\n\nThe intentional stance does not eliminate the need for an environment model, since agents are still described as situated in and acting on an environment.\n\nThe intentional stance is described as providing the potential for nested representations, not a way to avoid them.",
  },
  {
    id: "cpe310_ch3_057",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why is the ability to form nested representations widely considered important for agents?",
    options: [
      "Because they remove the need for an agent to have any beliefs of its own",
      "Because they guarantee that an environment is fully accessible",
      "Because they are widely accepted as essential for agents that must cooperate with other agents",
      "Because they replace the need for a formal task environment",
    ],
    correctAnswer: 2,
    explanation:
      "Characterising Agents states that nested representations, meaning systems that include representations of other systems, are widely accepted as essential for agents that must cooperate with other agents.\n\nNested representations are about representing other systems, not about removing an agent's own beliefs.\n\nAccessibility is a separate property of environments and is not guaranteed by having nested representations.\n\nNested representations are a conceptual capability of agents, not a substitute for the formal notion of a task environment defined later.",
  },
  {
    id: "cpe310_ch3_058",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In post-declarative systems, how does the agent-oriented approach differ from procedural programming?",
    options: [
      "Procedural programming always requires an agent to be deployed inside it",
      "Procedural programming has no notion of instructions at all",
      "Procedural programming and agent-oriented programming are described as functionally identical",
      "Procedural programming states exactly what to do; an agent is given a goal instead",
    ],
    correctAnswer: 3,
    explanation:
      "Post-Declarative Systems contrasts procedural programming, where we say exactly what a system should do, with agents, where we give a high-level description of the delegated goal and let the control mechanism figure out what to do, acting according to a built-in theory of rational agency.\n\nProcedural programming does not require an agent to be deployed inside it; it is simply the earliest of the three approaches discussed, predating agent-oriented programming.\n\nProcedural programming is defined by giving exact instructions, so it clearly does have a notion of instructions.\n\nThe notes explicitly distinguish these as three different approaches, not as functionally identical.",
  },
  {
    id: "cpe310_ch3_059",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How does declarative programming differ from procedural programming?",
    options: [
      "Declarative programming states a goal and lets a control mechanism decide what to do",
      "Declarative programming requires the programmer to specify every single step in exact order",
      "Declarative programming can only be used to build purely reactive agents",
      "Declarative programming eliminates the need for any control mechanism whatsoever",
    ],
    correctAnswer: 0,
    explanation:
      "Post-Declarative Systems describes declarative programming as stating something we want to achieve, giving the system general information about relationships between objects, and letting a built-in control mechanism, such as goal-directed theorem proving, figure out what to do.\n\nSpecifying every step in exact order describes procedural programming, the approach declarative programming is contrasted with.\n\nDeclarative programming is not described as restricted to building purely reactive agents; it is presented as a distinct programming paradigm from the agent-oriented approach discussed afterward.\n\nDeclarative programming relies on a built-in control mechanism to figure out what to do, so it does not eliminate the need for one.",
  },
  {
    id: "cpe310_ch3_060",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "The knowledge-based protocols aside gives an example reasoning pattern where process i, upon knowing process j has received message m1, resends process j that same message m1 again.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "The aside on knowledge-based protocols gives a different pattern: if process i knows process j has received message m1, then process i should send process j a new message, m2, not resend m1.",
  },
  {
    id: "cpe310_ch3_061",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the abstract architecture for agents, how is the set of environment states denoted?",
    options: [
      "Ac, a repertoire of possible actions",
      "E, a finite set of discrete, instantaneous states",
      "R, the set of all possible finite sequences",
      "I, the set of all internal states of the agent",
    ],
    correctAnswer: 1,
    explanation:
      "Abstract Architectures for Agents assumes the environment may be in any of a finite set E of discrete, instantaneous states.\n\nAc is defined in the same section as the agent's repertoire of possible actions, not the environment states.\n\nR is defined later, in the discussion of runs, as the set of all possible finite sequences over E and Ac, not the environment states themselves.\n\nI is introduced later, in the discussion of agents with state, as the set of internal states of the agent, a different formal component.",
  },
  {
    id: "cpe310_ch3_062",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the abstract architecture for agents, what does Ac denote?",
    options: [
      "A finite set of discrete environment states",
      "A sequence of interleaved environment states and actions",
      "A repertoire of possible actions available to agents",
      "A function mapping environment states to percepts",
    ],
    correctAnswer: 2,
    explanation:
      "Abstract Architectures for Agents defines Ac as the repertoire of possible actions available to agents, which transform the state of the environment.\n\nA finite set of discrete environment states describes E, not Ac.\n\nA sequence of interleaved environment states and actions describes a run, not Ac itself.\n\nA function mapping environment states to percepts describes the see function introduced later, not Ac.",
  },
  {
    id: "cpe310_ch3_063",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a run of an agent in an environment defined in the abstract architecture?",
    options: [
      "A single environment state considered on its own",
      "A function mapping percepts directly to internal states",
      "A fixed list of every possible action an agent could ever take",
      "A sequence of interleaved environment states and actions over time",
    ],
    correctAnswer: 3,
    explanation:
      "Abstract Architectures for Agents defines a run r as a sequence of interleaved environment states and actions, written as e0 through successive actions to a series of further states.\n\nA single environment state on its own is just one element of E, not the interleaved sequence a run represents.\n\nA function mapping percepts directly to internal states describes the next function introduced later, not a run.\n\nA fixed list of every possible action an agent could ever take describes Ac, not a run.",
  },
  {
    id: "cpe310_ch3_064",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "An agent's run passes through the states e0, e1, e2, and e3, connected by actions alpha0, alpha1, and alpha2 in sequence. Which formal notion does this describe?",
    options: [
      "A run",
      "A task environment",
      "A predicate task specification",
      "An expected utility",
    ],
    correctAnswer: 0,
    explanation:
      "A sequence of interleaved environment states and actions like e0 through alpha0, alpha1, and alpha2 to further states is precisely what the abstract architecture calls a run.\n\nA task environment is defined later as a pair of an environment and a predicate over runs, not the sequence of states and actions itself.\n\nA predicate task specification is defined later as a function assigning 0 or 1 to a run, not the run itself.\n\nExpected utility is a numeric value computed later from a probability distribution over runs, not the sequence of states and actions itself.",
  },
  {
    id: "cpe310_ch3_065",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the discussion of runs, what is R, the set referred to when defining subsets like R with a superscript Ac or E?",
    options: [
      "The set of all environment states the agent has ever perceived",
      "The set of all possible finite sequences over E and Ac",
      "The set of all agents that can be implemented on a given machine",
      "The set of all task environments",
    ],
    correctAnswer: 1,
    explanation:
      "Runs defines R as the set of all possible finite sequences, over E and Ac, from which the subsets ending in an action or an environment state are drawn.\n\nThe set of all environment states the agent has ever perceived is not how R is defined; R is a set of sequences, not a set of individual states.\n\nThe set of agents implementable on a machine is defined much later as AG sub m, a different formal object from R.\n\nThe set of all task environments is defined later as TE, a different formal object from R.",
  },
  {
    id: "cpe310_ch3_066",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the discussion of runs, what does R with a superscript Ac denote?",
    options: [
      "The subset of finite sequences over E and Ac that end with an environment state",
      "The set of all environment states in E",
      "The subset of finite sequences over E and Ac that end with an action",
      "The set of all possible actions in Ac",
    ],
    correctAnswer: 2,
    explanation:
      "Runs defines R with a superscript Ac as the subset of the finite sequences over E and Ac that end with an action.\n\nThe subset ending with an environment state is instead denoted R with a superscript E, the complementary subset.\n\nThe set of all environment states in E is simply E itself, not a subset of sequences.\n\nThe set of all possible actions in Ac is simply Ac itself, not a subset of sequences.",
  },
  {
    id: "cpe310_ch3_067",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the discussion of runs, what does R with a superscript E denote?",
    options: [
      "The subset of finite sequences over E and Ac that end with an action",
      "The set of all internal states of an agent with state",
      "The state transformer function of the environment",
      "The subset of finite sequences over E and Ac that end with an environment state",
    ],
    correctAnswer: 3,
    explanation:
      "Runs defines R with a superscript E as the subset of the finite sequences over E and Ac that end with an environment state.\n\nThe subset ending with an action is instead denoted R with a superscript Ac, the complementary subset.\n\nThe set of all internal states of an agent with state is denoted I, a separate formal object introduced later.\n\nThe state transformer function is denoted tau, a separate formal object introduced when defining environments.",
  },
  {
    id: "cpe310_ch3_068",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the state transformer function tau defined?",
    options: [
      "A function mapping the environment's behaviour, from an action sequence to possible resulting states",
      "A function mapping an agent's internal state and a percept to a new internal state",
      "A function mapping a run to a real number utility value",
      "A function mapping a task environment to an agent or the null value",
    ],
    correctAnswer: 0,
    explanation:
      "Environments defines tau as the state transformer function representing behaviour of the environment, mapping a sequence ending in an action, R superscript Ac, to a set of possible environment states.\n\nMapping an agent's internal state and a percept to a new internal state describes the next function, not tau.\n\nMapping a run to a real number utility value describes the utility function u, not tau.\n\nMapping a task environment to an agent or the null value describes the synthesis function syn, not tau.",
  },
  {
    id: "cpe310_ch3_069",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does it mean if tau applied to a run r returns the empty set?",
    options: [
      "The agent has achieved every goal state in the environment",
      "There are no possible successor states to r, so the run has ended",
      "The environment has become fully accessible from that point onward",
      "The agent's internal state has been reset to its initial value",
    ],
    correctAnswer: 1,
    explanation:
      "Environments states that if tau of r equals the empty set, there are no possible successor states to r, so the run has ended, described informally as 'game over'.\n\nAchieving every goal state is a separate notion, formalised later through achievement tasks and the set G of goal states, not through tau returning the empty set.\n\nAccessibility is a separate property of the environment as a whole and is not what an empty tau result indicates.\n\nResetting the agent's internal state is not what an empty tau result means; it means the run itself has no further continuation.",
  },
  {
    id: "cpe310_ch3_070",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Environments, as captured by the state transformer function tau, are described as history dependent and non-deterministic.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Environments notes that environments, as captured by the state transformer function tau, are history dependent and non-deterministic.",
  },
  {
    id: "cpe310_ch3_071",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an environment Env formally defined as a triple?",
    options: [
      "Env equals Ac, R, and u, where Ac is the action repertoire, R is the set of runs, and u is a utility function",
      "Env equals I, Per, and next, the internal states, percepts, and next-state function",
      "Env equals E, e0, and tau, where E is the set of environment states, e0 is the initial state, and tau is the state transformer function",
      "Env equals G, B, and Psi, the achievement goals, bad states, and predicate task specification",
    ],
    correctAnswer: 2,
    explanation:
      "Environments formally defines an environment as the triple Env equals E, e0, tau, where E is the set of environment states, e0 is an element of E denoting the initial state, and tau is the state transformer function.\n\nAc, R, and u are all separate formal objects used elsewhere, not the components of the environment triple.\n\nI, Per, and next belong to the formal model of agents with state, not the definition of an environment.\n\nG, B, and Psi belong to the later formal definitions of achievement tasks, maintenance tasks, and predicate task specifications, not the environment triple.",
  },
  {
    id: "cpe310_ch3_072",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the environment triple Env equals E, e0, tau, what does e0 represent?",
    options: [
      "The set of all environment states",
      "The state transformer function",
      "The agent's initial internal state",
      "The initial state of the environment",
    ],
    correctAnswer: 3,
    explanation:
      "Environments defines e0, as part of the triple Env equals E, e0, tau, as the initial state of the environment, with e0 being a member of E.\n\nThe set of all environment states is denoted E itself, not e0.\n\nThe state transformer function is denoted tau, the third component of the triple, not e0.\n\nThe agent's initial internal state is denoted i0, introduced later in the agent control loop, a different formal object from e0.",
  },
  {
    id: "cpe310_ch3_073",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an agent formally modeled as a function, Ag, in the abstract architecture?",
    options: [
      "Ag maps runs ending in an environment state, R superscript E, to an action in Ac",
      "Ag maps a single environment state to an action, with no reference to history",
      "Ag maps a percept to an internal state",
      "Ag maps a task environment to an agent or the null value",
    ],
    correctAnswer: 0,
    explanation:
      "Agents defines an agent as a function Ag that maps runs, specifically R superscript E, to actions in Ac, making a decision based on the history of the system it has witnessed to date.\n\nMapping a single environment state to an action with no reference to history describes the purely reactive agent, action from E to Ac, not the general Ag function.\n\nMapping a percept to an internal state describes the next function used by agents with state, not Ag.\n\nMapping a task environment to an agent or the null value describes the synthesis function syn, not Ag.",
  },
  {
    id: "cpe310_ch3_074",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What is AG, as introduced alongside the formal definition of an agent as a function?",
    options: [
      "The set of all environment states",
      "The set of all agents",
      "The set of all task environments",
      "The set of all runs that have ended",
    ],
    correctAnswer: 1,
    explanation:
      "Agents defines AG as the set of all agents, following the formal definition of an individual agent Ag as a function from runs to actions.\n\nThe set of all environment states is denoted E, not AG.\n\nThe set of all task environments is denoted TE, a separate formal object introduced later.\n\nThe set of runs that have ended for a specific agent-environment pair is denoted R of Ag and Env, a different formal object from AG.",
  },
  {
    id: "cpe310_ch3_075",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a system formally defined in the abstract architecture?",
    options: [
      "A pair containing a run and a utility function",
      "A triple containing an environment, a predicate, and a probability",
      "A pair containing an agent and an environment",
      "A single function mapping task environments to agents",
    ],
    correctAnswer: 2,
    explanation:
      "Systems defines a system as a pair containing an agent and an environment, with the set of possible runs of that pair denoted R of Ag and Env.\n\nA pair of a run and a utility function is not how a system is defined; utility functions are introduced separately, later, over states or runs.\n\nA triple of an environment, a predicate, and a probability is not the definition given for a system.\n\nA single function mapping task environments to agents describes agent synthesis, syn, not a system.",
  },
  {
    id: "cpe310_ch3_076",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does R of Ag and Env denote?",
    options: [
      "The expected utility of agent Ag in environment Env",
      "The probability that a run r occurs when Ag is placed in Env",
      "The set of all agents that can be implemented on a machine m",
      "The set of runs of agent Ag in environment Env",
    ],
    correctAnswer: 3,
    explanation:
      "Systems denotes the set of runs of agent Ag in environment Env by R of Ag and Env, and assumes this set contains only runs that have ended.\n\nExpected utility of Ag in Env is instead denoted EU of Ag and Env, a distinct formal object introduced later.\n\nThe probability that a run r occurs for a given agent and environment is denoted P of r given Ag and Env, a different formal object from R of Ag and Env.\n\nThe set of agents implementable on a machine m is denoted AG sub m, a different formal object introduced later for bounded optimal agents.",
  },
  {
    id: "cpe310_ch3_077",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the formal definition of a run, what must be true of alpha0, the first action in the sequence?",
    options: [
      "alpha0 equals Ag applied to e0, the agent's action on the initial state",
      "alpha0 must always equal the empty set",
      "alpha0 must be chosen independently of the agent Ag entirely",
      "alpha0 is only defined once the run has already ended",
    ],
    correctAnswer: 0,
    explanation:
      "The formal definition of a run states that alpha0 equals Ag of e0, meaning the first action is the one the agent Ag selects when it perceives the initial state e0.\n\nalpha0 is not defined as the empty set; the empty set condition instead describes tau of r when a run has ended, a different situation entirely.\n\nThe entire point of the formal definition is that alpha0 is chosen precisely by the agent Ag, not independently of it.\n\nalpha0 is defined as the very first action of the run, before the run can be said to have ended, not only once it has ended.",
  },
  {
    id: "cpe310_ch3_078",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the formal definition of a run, for u greater than 0, how is e sub u constrained?",
    options: [
      "e sub u must always equal e0, the initial state",
      "e sub u must be a member of tau applied to the sequence of prior states and actions",
      "e sub u is chosen freely by the agent Ag, with no constraint from the environment",
      "e sub u must be a member of Ac, the set of actions",
    ],
    correctAnswer: 1,
    explanation:
      "The formal definition of a run states that for u greater than 0, e sub u must be a member of tau applied to the sequence of states and actions up to that point, reflecting that the environment's state transformer function determines the possible successor states.\n\ne sub u is not constrained to always equal the initial state e0; later states in a run can differ from the initial one.\n\nEnvironment states in a run are constrained by tau, the environment's own behaviour, not chosen freely by the agent, which instead chooses the actions.\n\ne sub u is an environment state and so is a member of E, not a member of Ac, the set of actions.",
  },
  {
    id: "cpe310_ch3_079",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a purely reactive agent's action function defined?",
    options: [
      "action maps R superscript E to Ac, deciding what to do based on the full history",
      "action maps I times Per to I, updating an internal state from a percept",
      "action maps E to Ac, deciding what to do without reference to history",
      "action maps a task environment to an agent or the null value",
    ],
    correctAnswer: 2,
    explanation:
      "Purely Reactive Agents defines such an agent's action function as mapping E to Ac, deciding what to do without reference to history, basing its decision making entirely on the present.\n\nMapping R superscript E to Ac, using the full history, describes the general agent function Ag, the opposite of purely reactive behaviour.\n\nMapping I times Per to I describes the next function used by agents with state, not a purely reactive agent.\n\nMapping a task environment to an agent or the null value describes the synthesis function syn, not a purely reactive agent's action function.",
  },
  {
    id: "cpe310_ch3_080",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a thermostat formalized as a purely reactive agent?",
    options: [
      "action of e equals on if e is temperature OK, and off otherwise",
      "action of e equals a probability distribution over all possible temperatures",
      "action of e equals the full history of past temperature readings",
      "action of e equals off if e is temperature OK, and on otherwise",
    ],
    correctAnswer: 3,
    explanation:
      "Purely Reactive Agents formalizes the thermostat's action function as off if the environment state e is temperature OK, and on otherwise.\n\nSwapping which state triggers on versus off reverses the formalization given in the notes, where temperature OK triggers off, not on.\n\nA probability distribution over all possible temperatures is not how this simple, deterministic case-based function is defined.\n\nBasing the action on the full history of past readings would make it a history-dependent function, contradicting the definition of a purely reactive agent, which uses only the current state e.",
  },
  {
    id: "cpe310_ch3_081",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Some agents decide what to do without reference to their history, basing their decision making entirely on the present. This describes a purely reactive agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Purely Reactive Agents defines exactly this: some agents decide what to do without reference to their history, basing decision making entirely on the present, and calls such agents purely reactive.",
  },
  {
    id: "cpe310_ch3_082",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "When a perception system is introduced, what does the see function do?",
    options: [
      "It represents the agent's ability to observe its environment, mapping environment states to percepts",
      "It represents the agent's decision making process, mapping percepts to actions",
      "It updates the agent's internal state based on a new percept",
      "It computes the expected utility of an agent in an environment",
    ],
    correctAnswer: 0,
    explanation:
      "Perception describes the see function as the agent's ability to observe its environment, whose output is a percept, formally see maps E to Per.\n\nRepresenting the decision making process that maps percepts to actions describes the action function, not see.\n\nUpdating the agent's internal state based on a new percept describes the next function, introduced later for agents with state, not see.\n\nComputing expected utility describes the later utility-theoretic formalism, not the see function.",
  },
  {
    id: "cpe310_ch3_083",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Once perception is introduced, how is the action function redefined?",
    options: [
      "action maps a single environment state directly to an action, ignoring all percepts",
      "action maps Per star, a sequence of percepts, to an action in Ac",
      "action maps an internal state and a percept to a new internal state",
      "action maps a run to a real number utility value",
    ],
    correctAnswer: 1,
    explanation:
      "Perception redefines action, once perception is introduced, as a function mapping Per star, sequences of percepts, to actions in Ac.\n\nMapping a single environment state directly to an action, ignoring percepts, describes the earlier purely reactive formulation, before perception was introduced.\n\nMapping an internal state and a percept to a new internal state describes the next function for agents with state, not this redefined action function.\n\nMapping a run to a real number utility value describes the utility function u, not the action function.",
  },
  {
    id: "cpe310_ch3_084",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "When agents with state are introduced, what internal architecture do they add compared to a purely perceiving agent?",
    options: [
      "They remove the see function entirely",
      "They remove the action function entirely",
      "They add a next function that maintains an internal data structure",
      "They eliminate the need for any environment at all",
    ],
    correctAnswer: 2,
    explanation:
      "Agents with State describes such agents as adding a next function between see and action, maintaining an internal data structure typically used to record information about the environment state and history.\n\nAgents with state still retain the see function, described as unchanged from the earlier perception-based agent, so it is not removed.\n\nAgents with state still retain the action function, now defined over internal states, so it is not removed.\n\nAgents with state still operate within and act on an environment; the addition of internal state does not eliminate the environment.",
  },
  {
    id: "cpe310_ch3_085",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "For an agent with state, what does I denote?",
    options: [
      "The set of all environment states",
      "The set of all percepts the agent could ever receive",
      "The set of all actions the agent could ever perform",
      "The set of all internal states of the agent",
    ],
    correctAnswer: 3,
    explanation:
      "Perception, in the context of agents with state, defines I as the set of all internal states of the agent, used by the next and action functions.\n\nThe set of all environment states is denoted E, not I.\n\nThe set of all percepts is denoted Per, not I.\n\nThe set of all actions is denoted Ac, not I.",
  },
  {
    id: "cpe310_ch3_086",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "For a state-based agent, how is the see function defined?",
    options: [
      "see maps E to Per, unchanged from the earlier perception-based agent",
      "see maps I to Ac, mapping internal states to actions",
      "see maps I times Per to I, updating internal state from a percept",
      "see maps a run to a real number utility value",
    ],
    correctAnswer: 0,
    explanation:
      "Perception states that for a state-based agent, the perception function see is unchanged, still mapping E to Per.\n\nMapping I to Ac describes the action function for a state-based agent, not see.\n\nMapping I times Per to I describes the next function for a state-based agent, not see.\n\nMapping a run to a real number utility value describes the utility function u, not see.",
  },
  {
    id: "cpe310_ch3_087",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "For a state-based agent, how is the action-selection function action defined?",
    options: [
      "action maps E to Per, from environment states to percepts",
      "action maps I to Ac, from internal states to actions",
      "action maps an internal state and percept to a new internal state",
      "action maps Ac to E, from actions back to environment states",
    ],
    correctAnswer: 1,
    explanation:
      "Action defines the action-selection function for a state-based agent as a mapping from internal states to actions, action maps I to Ac.\n\nMapping E to Per describes the see function, not action.\n\nMapping I times Per to I describes the next function, not action.\n\nMapping Ac to E is not any function defined in the formal architecture.",
  },
  {
    id: "cpe310_ch3_088",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the next state function defined for a state-based agent?",
    options: [
      "next maps E to Per, mapping environment states to percepts",
      "next maps I to Ac, mapping internal states directly to actions",
      "next maps an internal state and a percept to a new internal state",
      "next maps a task environment to an agent or the null value",
    ],
    correctAnswer: 2,
    explanation:
      "Next State Function introduces next as a function mapping an internal state and a percept to a new internal state, next maps I times Per to I.\n\nMapping E to Per describes the see function, not next.\n\nMapping I to Ac describes the action function, not next.\n\nMapping a task environment to an agent or the null value describes the synthesis function syn, not next.",
  },
  {
    id: "cpe310_ch3_089",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the agent control loop, what is the very first step before the repeating cycle begins?",
    options: [
      "The agent immediately performs its final action and halts",
      "The agent computes its expected utility over all possible runs",
      "The agent negotiates with every other agent in the environment",
      "The agent starts in some initial internal state, i0",
    ],
    correctAnswer: 3,
    explanation:
      "Agent Control Loop describes the very first step as the agent starting in some initial internal state, i0, before the repeat forever loop of observing, updating, selecting, and performing an action begins.\n\nHalting after a single final action contradicts the repeat forever structure of the control loop.\n\nComputing expected utility over all possible runs is a separate, later formal notion, not a step in this basic control loop.\n\nNegotiating with every other agent is not part of the generic agent control loop, which concerns a single agent's perceive-update-select-act cycle.",
  },
  {
    id: "cpe310_ch3_090",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the repeat forever portion of the agent control loop, what is the correct order of steps?",
    options: [
      "Observe the environment and generate a percept, update the internal state, select an action, then perform the action",
      "Perform an action, then observe the environment and generate a percept",
      "Update the internal state, then observe the environment and generate a percept",
      "Select an action, then update the internal state based on that action",
    ],
    correctAnswer: 0,
    explanation:
      "Agent Control Loop specifies the repeating order as observing the environment state and generating a percept through see, updating the internal state via the next function, selecting an action via the action function, and then performing that action.\n\nPerforming the action first, before observing, reverses the actual order given in the control loop.\n\nUpdating the internal state before observing the environment reverses the order, since next depends on a percept produced by see.\n\nSelecting an action before updating the internal state reverses the order, since action depends on the internal state produced by next.",
  },
  {
    id: "cpe310_ch3_091",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the discussion of tasks for agents, what do we generally want to tell an agent, versus what we want to leave to the agent?",
    options: [
      "We want to tell the agent exactly how to do everything, step by step",
      "We want to tell the agent what to do, without telling it how to do it",
      "We want the agent to decide everything itself, goals included, with no specification",
      "We want the agent to ignore any task we specify",
    ],
    correctAnswer: 1,
    explanation:
      "Tasks for Agents states that we build agents to carry out tasks we specify, but we want to tell agents what to do without telling them how to do it.\n\nSpecifying exactly how to do everything step by step is the procedural programming approach, the opposite of what is wanted for agents in this discussion.\n\nThe task itself is described as something that must be specified by us, so the agent is not left to invent its own goals with no specification at all.\n\nThe whole discussion concerns how best to specify a task for an agent to follow, not having the agent ignore it.",
  },
  {
    id: "cpe310_ch3_092",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a task specification defined using a utility function over states?",
    options: [
      "u maps a run to a real number, associating a value with entire sequences",
      "u maps Ac to the real numbers, associating a value with every possible action",
      "u maps E to the real numbers, associating a real number with every environment state",
      "u maps a task environment to an agent",
    ],
    correctAnswer: 2,
    explanation:
      "Utility Functions over States defines a task specification as a function u mapping E to the real numbers, associating a real number, a utility, with every environment state.\n\nAssociating a value with entire runs instead describes the alternative utility over runs, u mapping R to the real numbers, a different approach discussed afterward.\n\nAssociating a value with every possible action is not how utility functions over states are defined; the utility is attached to states, not actions.\n\nMapping a task environment to an agent describes the synthesis function syn, not a utility function over states.",
  },
  {
    id: "cpe310_ch3_093",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What disadvantage is raised for assigning utilities to individual states, once we ask about the value of an entire run?",
    options: [
      "Individual states can never be assigned any numeric value at all",
      "Assigning utilities to states makes it impossible to define a task environment",
      "Assigning utilities to states requires the environment to be fully accessible",
      "It is difficult to specify a long term view when assigning utilities to individual states",
    ],
    correctAnswer: 3,
    explanation:
      "Utility Functions over States raises, as a disadvantage, that it is difficult to specify a long term view when assigning utilities to individual states, suggesting a discount for states later on as one possible fix.\n\nThe whole approach is built on assigning numeric utility values to individual states, so it is not that they cannot be assigned a value at all.\n\nUtility over states is one possible way of building a task specification, and a task environment is later defined more generally using a predicate Psi, so this disadvantage does not make defining a task environment impossible.\n\nAccessibility of the environment is a separate property and is not a stated requirement for assigning utilities to states.",
  },
  {
    id: "cpe310_ch3_094",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "When asking about the value of a run under a state-based utility approach, which of the following is listed as a possible way to combine the utilities of the states along that run?",
    options: [
      "The sum of the utilities of the states on the run",
      "The number of agents involved in the run",
      "The accessibility of the environment during the run",
      "The determinism of the environment during the run",
    ],
    correctAnswer: 0,
    explanation:
      "Utility Functions over States lists the minimum, maximum, sum, or average of the utilities of the states on a run as possible ways to value the run as a whole.\n\nThe number of agents involved in a run is not one of the listed ways to combine per-state utilities into a value for the run.\n\nAccessibility of the environment is a separate property discussed elsewhere, not one of the listed ways to combine state utilities.\n\nDeterminism of the environment is likewise a separate property, not one of the listed ways to combine state utilities.",
  },
  {
    id: "cpe310_ch3_095",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the alternative approach of utilities over runs defined?",
    options: [
      "u maps E to the real numbers, assigning a utility to individual states",
      "u maps R, the set of all runs, to the real numbers",
      "u maps Per to the real numbers, assigning a utility to individual percepts",
      "u maps I to the real numbers, assigning a utility to individual internal states",
    ],
    correctAnswer: 1,
    explanation:
      "Utilities over Runs defines this alternative as u mapping R, the set of all runs, to the real numbers, assigning a utility not to individual states but to runs themselves, taking an inherently long term view.\n\nAssigning a utility to individual states describes the earlier utility function over states, the approach this alternative is contrasted with.\n\nAssigning a utility to individual percepts is not how either utility approach is defined in the notes.\n\nAssigning a utility to individual internal states is not how either utility approach is defined in the notes.",
  },
  {
    id: "cpe310_ch3_096",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What variation is mentioned as a possible extension to utilities over runs?",
    options: [
      "Removing all reference to the environment entirely",
      "Restricting the approach to purely reactive agents only",
      "Incorporating probabilities of different states emerging",
      "Replacing runs with a single fixed environment state",
    ],
    correctAnswer: 2,
    explanation:
      "Utilities over Runs mentions incorporating probabilities of different states emerging as a variation on the run-based utility approach.\n\nThe approach still relies on runs, which are sequences of environment states and actions, so it does not remove all reference to the environment.\n\nThe utility-over-runs approach is discussed generally, not restricted to purely reactive agents specifically.\n\nThe approach is specifically about assigning utility to entire runs rather than single states, so it does not replace runs with a single fixed state.",
  },
  {
    id: "cpe310_ch3_097",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Who is quoted asking 'Where do the numbers come from?' when discussing problems with utility-based approaches?",
    options: [
      "Daniel Dennett",
      "John McCarthy",
      "Yoav Shoham",
      "Peter Cheeseman",
    ],
    correctAnswer: 3,
    explanation:
      "Problems with Utility-based Approaches quotes Peter Cheeseman asking 'Where do the numbers come from?', highlighting the difficulty of specifying tasks in terms of utilities.\n\nDennett is instead quoted earlier for the definition of an intentional system, not this quote about utility numbers.\n\nMcCarthy is instead quoted for the discussion of ascribing mental qualities to machines, not this quote.\n\nShoham is instead quoted for the light switch example of the intentional stance, not this quote.",
  },
  {
    id: "cpe310_ch3_098",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Utility-based task specifications are described as working well in certain scenarios, despite the difficulty people have thinking in terms of utilities.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Problems with Utility-based Approaches notes that people don't think in terms of utilities, making it hard to specify tasks this way, but nevertheless the approach works well in certain scenarios.",
  },
  {
    id: "cpe310_ch3_099",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the Tileworld environment, what must an agent do to score points?",
    options: [
      "Fill holes with tiles, aiming to fill as many holes as possible",
      "Negotiate with other agents over ownership of obstacles",
      "Maintain a fixed room temperature within the grid",
      "Avoid ever moving in any of the four directions",
    ],
    correctAnswer: 0,
    explanation:
      "Utility in the Tileworld describes an agent scoring points by filling holes with tiles, with the aim of filling as many holes as possible, in a simulated two dimensional grid with tiles, obstacles, and holes.\n\nNegotiating over ownership of obstacles is not part of the Tileworld description, which is a single-agent scoring scenario in the notes.\n\nMaintaining room temperature describes the earlier thermostat example, not Tileworld.\n\nThe agent is described as able to move in four directions and push tiles located next to it, not as avoiding movement.",
  },
  {
    id: "cpe310_ch3_100",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Why does Tileworld present a continually changing challenge for an agent?",
    options: [
      "Because the grid's dimensions change every time an action is performed",
      "Because it changes with the random appearance and disappearance of holes",
      "Because the agent's action repertoire changes on every turn",
      "Because tiles disappear the instant the simulation begins",
    ],
    correctAnswer: 1,
    explanation:
      "Utility in the Tileworld states that Tileworld changes with the random appearance and disappearance of holes, giving it a dynamic character the agent must respond to.\n\nThe grid's overall dimensions are not described as changing with every action; it is the holes that randomly appear and disappear.\n\nThe agent's fixed repertoire of four movement directions, plus pushing, is not described as changing turn to turn.\n\nTiles are not described as disappearing at the start of the simulation; it is holes that appear and disappear randomly over time.",
  },
  {
    id: "cpe310_ch3_101",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the Tileworld utility function u of r defined?",
    options: [
      "The number of tiles pushed in r divided by the total number of tiles in the grid",
      "The number of obstacles avoided in r divided by the number of obstacles present",
      "The number of holes filled in r divided by the number of holes that appeared in r",
      "The number of actions performed in r divided by the total possible actions in Ac",
    ],
    correctAnswer: 2,
    explanation:
      "Utility in the Tileworld defines u of r as the number of holes filled in r, divided by the number of holes that appeared in r.\n\nTiles pushed divided by total tiles in the grid is not the formula given for Tileworld utility.\n\nObstacles avoided divided by obstacles present is not the formula given for Tileworld utility, and obstacles are not scored in this way in the notes.\n\nActions performed divided by total possible actions in Ac is not the formula given for Tileworld utility.",
  },
  {
    id: "cpe310_ch3_102",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Under the Tileworld utility formula, what utility value results if the agent fills no holes at all?",
    options: ["1", "Grid size", "An undefined value", "0"],
    correctAnswer: 3,
    explanation:
      "Utility in the Tileworld states that if the agent fills no holes, the utility is 0, since the number of holes filled in r is zero in the numerator of the formula.\n\nA utility of 1 is instead the value given for the case where the agent fills every hole that appeared, the opposite extreme.\n\nGrid size is not part of the Tileworld utility formula, which depends only on holes filled and holes that appeared.\n\nThe formula is well defined as long as at least one hole appears, giving a value of 0 when none are filled, not an undefined result.",
  },
  {
    id: "cpe310_ch3_103",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Under the Tileworld utility formula, what utility value results if the agent fills every hole that appears?",
    options: ["1", "0", "Infinity", "A negative value"],
    correctAnswer: 0,
    explanation:
      "Utility in the Tileworld states that if the agent fills all holes, the utility equals 1, since the number filled equals the number that appeared.\n\nA utility of 0 is instead the value given for the case where the agent fills no holes at all, the opposite extreme.\n\nThe formula is a ratio of holes filled to holes appeared, which is bounded between 0 and 1, not unbounded.\n\nThe formula gives a ratio between 0 and 1 and does not produce negative values for unfilled holes.",
  },
  {
    id: "cpe310_ch3_104",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is P of r given Ag and Env defined?",
    options: [
      "The utility of run r when agent Ag is placed in environment Env",
      "The probability that run r occurs when agent Ag is placed in environment Env",
      "The set of possible successor states after run r has ended",
      "The number of actions taken by agent Ag during run r",
    ],
    correctAnswer: 1,
    explanation:
      "Expected Utility defines P of r given Ag and Env as the probability that run r occurs when agent Ag is placed in environment Env.\n\nThe utility of run r is instead denoted u of r, a separate quantity used together with this probability to compute expected utility.\n\nThe set of possible successor states after a run is what tau of r would give if the run had not ended, a different formal object from this probability.\n\nThe number of actions taken during a run is not what this probability notation represents.",
  },
  {
    id: "cpe310_ch3_105",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does the sum of P of r given Ag and Env, taken over all runs r in R of Ag and Env, equal?",
    options: [
      "0",
      "The total number of runs",
      "1",
      "The maximum utility value",
    ],
    correctAnswer: 2,
    explanation:
      "Expected Utility notes that the sum of P of r given Ag and Env over all runs r in R of Ag and Env equals 1, reflecting that the probabilities of all possible runs for a given agent-environment pair must sum to certainty.\n\nA sum of 0 would mean no run ever occurs, which contradicts the pair having at least the runs in R of Ag and Env.\n\nThe sum of probabilities is a fixed value of 1 by definition, not simply a count of how many runs exist.\n\nThe sum of probabilities is not the same quantity as the maximum utility value across runs, which is a separate calculation.",
  },
  {
    id: "cpe310_ch3_106",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the expected utility EU of Ag and Env defined?",
    options: [
      "The maximum single utility value u of r across all runs r",
      "The number of runs divided by the number of possible actions",
      "The probability that the agent's internal state ever changes",
      "The sum of run utility weighted by probability",
    ],
    correctAnswer: 3,
    explanation:
      "Expected Utility defines EU of Ag and Env as the sum, over all runs r in R of Ag and Env, of u of r multiplied by P of r given Ag and Env, combining each run's utility with the probability of that run occurring.\n\nSimply taking the maximum single utility value ignores the probability of each run occurring, which is central to the expected utility formula.\n\nDividing the number of runs by the number of possible actions is not how expected utility is defined.\n\nThe probability that the internal state ever changes is unrelated to the expected utility formula, which concerns utilities and probabilities of entire runs.",
  },
  {
    id: "cpe310_ch3_107",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the worked example, the environment Env1 has E equal to e0 through e5, with tau of e0 under alpha0 giving e1 or e2, and tau of e0 under alpha1 giving e3, e4, or e5. What does this tau definition represent?",
    options: [
      "The possible successor states that can result from each of the two available actions at e0",
      "The utility values assigned to each of the six environment states",
      "The probability that each agent, Ag1 or Ag2, is selected to run",
      "The set of all agents that can be implemented on this environment",
    ],
    correctAnswer: 0,
    explanation:
      "In the worked example, tau of e0 under alpha0 giving e1 or e2, and tau of e0 under alpha1 giving e3, e4, or e5, represents the possible successor states that can result from taking each of the two available actions at the initial state e0.\n\nUtility values for the states are given separately afterward, as u1 of specific state transitions, not by tau itself.\n\nThe probability of selecting Ag1 or Ag2 is not what tau represents; tau describes environment behaviour, independent of which agent is used.\n\nThe set of agents implementable on the environment, AG sub m, is a separate formal object defined later for bounded optimal agents, not what tau represents here.",
  },
  {
    id: "cpe310_ch3_108",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the worked example, Ag1 of e0 equals alpha0, and Ag2 of e0 equals alpha1. What does this represent?",
    options: [
      "The utility that each agent assigns to the initial state e0",
      "The single action each of the two agents chooses to perform at the initial state e0",
      "The probability that each agent successfully perceives the initial state e0",
      "The internal state each agent starts in before any percept is received",
    ],
    correctAnswer: 1,
    explanation:
      "In the worked example, Ag1 of e0 equals alpha0 and Ag2 of e0 equals alpha1 represent the single action each of the two agents chooses to perform when faced with the initial state e0, since each agent is a function from states to actions here.\n\nThe utility values for outcomes are given separately, as u1 applied to specific state transitions, not by the agent function itself.\n\nThe probability of perceiving e0 correctly is not represented by the agent function Ag1 or Ag2 in this example.\n\nInternal states before any percept is received belong to the agents-with-state formalism, a different, more elaborate model from the simple agent functions used in this worked example.",
  },
  {
    id: "cpe310_ch3_109",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the worked example, Ag1 chooses alpha0, which leads to e1 with probability 0.4 and e2 with probability 0.6, with utilities u1 of 8 and 11 respectively. What is the expected utility of Ag1 in Env1?",
    options: ["8", "11", "9.8", "19"],
    correctAnswer: 2,
    explanation:
      "The expected utility of Ag1 is the sum of each run's utility multiplied by its probability: 8 times 0.4 plus 11 times 0.6, which equals 3.2 plus 6.6, giving 9.8.\n\n8 is only the utility of the e1 outcome alone, not the probability-weighted expected value across both possible outcomes.\n\n11 is only the utility of the e2 outcome alone, not the probability-weighted expected value across both possible outcomes.\n\n19 is simply the sum of the two utility values, 8 plus 11, without weighting them by their respective probabilities as the expected utility formula requires.",
  },
  {
    id: "cpe310_ch3_110",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the worked example, Ag2 chooses alpha1, which leads to e3, e4, or e5 with probabilities 0.1, 0.2, and 0.7, and utilities u1 of 70, 9, and 10 respectively. What is the expected utility of Ag2 in Env1?",
    options: ["70", "9", "89", "16.8"],
    correctAnswer: 3,
    explanation:
      "The expected utility of Ag2 is the sum of each run's utility multiplied by its probability: 70 times 0.1, plus 9 times 0.2, plus 10 times 0.7, which is 7 plus 1.8 plus 7, giving 16.8.\n\n70 is only the utility of the e3 outcome alone, not the probability-weighted expected value across all three possible outcomes.\n\n9 is only the utility of the e4 outcome alone, not the probability-weighted expected value across all three possible outcomes.\n\n89 is simply the sum of the three utility values, 70 plus 9 plus 10, without weighting them by their respective probabilities as the expected utility formula requires.",
  },
  {
    id: "cpe310_ch3_111",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Given that Ag1 has an expected utility of 9.8 and Ag2 has an expected utility of 16.8 in Env1, under this utility function u1, which agent would be preferred?",
    options: [
      "Ag2, since it has the higher expected utility",
      "Ag1, since it has the higher expected utility",
      "Neither, since both have identical expected utility",
      "It cannot be determined without knowing the agents' internal states",
    ],
    correctAnswer: 0,
    explanation:
      "Since an agent's desirability under a utility function is judged by its expected utility, and Ag2's expected utility of 16.8 exceeds Ag1's 9.8, Ag2 would be preferred under u1.\n\nAg1 has the lower of the two expected utility values, so it would not be preferred over Ag2 under this comparison.\n\nThe two expected utility values, 9.8 and 16.8, are clearly different, so the agents are not tied.\n\nBoth agents in this worked example are simple functions from a single state to a single action, with no internal state involved, so expected utility alone is sufficient to compare them here.",
  },
  {
    id: "cpe310_ch3_112",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the optimal agent, Ag sub opt, defined for a given environment Env?",
    options: [
      "The agent in AG that minimizes expected utility",
      "The agent in AG that maximizes expected utility",
      "The first agent in AG that was ever implemented",
      "The agent with the smallest set of possible actions, Ac",
    ],
    correctAnswer: 1,
    explanation:
      "Optimal Agents defines the optimal agent Ag sub opt in an environment Env as the agent Ag in AG that maximizes expected utility, EU of Ag and Env.\n\nMinimizing expected utility is the opposite of what defines an optimal agent under this formalism.\n\nThe order in which agents were implemented is not part of the definition of an optimal agent, which depends only on expected utility.\n\nThe size of an agent's action set Ac is not part of the definition of an optimal agent.",
  },
  {
    id: "cpe310_ch3_113",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Does being optimal guarantee that an agent will always perform best on every single run?",
    options: [
      "Yes, an optimal agent is guaranteed to produce the single best outcome on every run",
      "Yes, but only in fully deterministic environments",
      "No, being optimal only means that on average, we can expect it to do best",
      "No, optimality has no relationship at all to expected performance",
    ],
    correctAnswer: 2,
    explanation:
      "Optimal Agents states that the fact an agent is optimal does not mean that it will be best on every occasion, only that on average, we can expect it to do best.\n\nGuaranteeing the single best outcome on every run would require certainty about which run occurs, which contradicts the probabilistic nature of expected utility.\n\nEven restricting to deterministic environments does not change the notes' explicit statement that optimality is about average, not guaranteed, performance.\n\nOptimality is directly defined in terms of maximizing expected performance, so it clearly has a relationship to expected performance, just not a guarantee on every individual run.",
  },
  {
    id: "cpe310_ch3_114",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does AG sub m denote, in the discussion of bounded optimal agents?",
    options: [
      "The set of all environment states reachable by machine m",
      "The set of all task environments solvable by machine m",
      "The utility function used specifically by machine m",
      "The set of agents in AG that can be implemented on machine m",
    ],
    correctAnswer: 3,
    explanation:
      "Bounded Optimal Agents defines AG sub m as the set of agents Ag in AG that can be implemented on machine m, acknowledging that some agents cannot be implemented on some computers.\n\nThe set of environment states reachable by a machine is not what AG sub m represents; AG sub m is a set of agents, not of states.\n\nThe set of task environments solvable by a machine is a different notion from AG sub m, which concerns implementability of agents, not solvability of task environments.\n\nA utility function specific to a machine is not what AG sub m represents; it is simply a restricted set of agents.",
  },
  {
    id: "cpe310_ch3_115",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the bounded optimal agent, Ag sub bopt, defined with respect to machine m?",
    options: [
      "The agent in AG sub m that maximizes expected utility",
      "The agent in AG, without any restriction to machine m, that maximizes expected utility",
      "The agent in AG sub m with the smallest number of internal states",
      "The agent in AG sub m that was implemented most recently",
    ],
    correctAnswer: 0,
    explanation:
      "Bounded Optimal Agents defines the bounded optimal agent Ag sub bopt with respect to m as the agent Ag in AG sub m, the restricted set implementable on m, that maximizes expected utility.\n\nMaximizing expected utility over the unrestricted set AG, without the machine restriction, instead describes the general optimal agent Ag sub opt, not the bounded optimal agent.\n\nHaving the smallest number of internal states is not part of the definition of a bounded optimal agent, which is defined purely in terms of maximizing expected utility within AG sub m.\n\nRecency of implementation is not part of the definition of a bounded optimal agent.",
  },
  {
    id: "cpe310_ch3_116",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a predicate task specification, denoted Psi, defined?",
    options: [
      "Psi maps E, the set of environment states, to the real numbers",
      "Psi maps R, the set of all runs, to the set containing 0 and 1",
      "Psi maps Ac, the set of actions, to a probability distribution",
      "Psi maps a task environment to an agent or the null value",
    ],
    correctAnswer: 1,
    explanation:
      "Predicate Task Specifications defines Psi as mapping R, the set of all runs, to the set containing 0 and 1, assigning 1 to a run the agent succeeds on and 0 otherwise.\n\nMapping environment states to real numbers instead describes the earlier utility function over states, u mapping E to the real numbers, not Psi.\n\nMapping actions to a probability distribution is not how Psi is defined; Psi is defined over entire runs, not individual actions.\n\nMapping a task environment to an agent or the null value describes the synthesis function syn, not Psi.",
  },
  {
    id: "cpe310_ch3_117",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "A predicate task specification is described as a special case of assigning utilities to histories, where only 0 or 1 is assigned to a run.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Predicate Task Specifications states that a special case of assigning utilities to histories is to assign 0, false, or 1, true, to a run, and calls these predicate task specifications.",
  },
  {
    id: "cpe310_ch3_118",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a task environment formally defined?",
    options: [
      "A triple, E, e0, and tau, describing an environment on its own",
      "A single function mapping runs to real-valued utilities",
      "A pair, Env and Psi, where Env is an environment and Psi is a predicate over runs",
      "A pair, Ag and Env, describing an agent situated in an environment",
    ],
    correctAnswer: 2,
    explanation:
      "Task Environments formally defines a task environment as a pair, Env and Psi, where Env is an environment and Psi is a predicate over runs.\n\nThe triple E, e0, tau describes an environment on its own, not a task environment, which additionally requires the predicate Psi.\n\nA single function mapping runs to real-valued utilities describes a utility function over runs, u mapping R to the real numbers, not a task environment.\n\nA pair of an agent and an environment describes a system, a different formal object from a task environment.",
  },
  {
    id: "cpe310_ch3_119",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does TE denote?",
    options: [
      "The set of all environment states",
      "The set of all agents that can be implemented on any machine",
      "The set of all predicate task specifications alone, without any environment",
      "The set of all task environments",
    ],
    correctAnswer: 3,
    explanation:
      "Task Environments defines TE as the set of all task environments, the pairs of an environment and a predicate over runs.\n\nThe set of all environment states is denoted E, not TE.\n\nThe set of all agents implementable on any machine is not what TE denotes; TE concerns task environments, not agents.\n\nTE specifically refers to the pairs of an environment together with a predicate, not the predicate Psi in isolation.",
  },
  {
    id: "cpe310_ch3_120",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "What does a task environment specify?",
    options: [
      "The properties of the system, and the criteria for success or failure",
      "Only the physical hardware on which the agent will run",
      "Only the programming language used to implement the agent",
      "Only the identity of the human user interacting with the agent",
    ],
    correctAnswer: 0,
    explanation:
      "Task Environments states that a task environment specifies the properties of the system the agent will inhabit, and the criteria by which an agent will be judged to have either failed or succeeded.\n\nThe physical hardware on which an agent runs is a separate concern, more closely related to the discussion of bounded optimal agents and AG sub m, not what a task environment specifies.\n\nThe programming language used is not what a task environment specifies; it specifies the environment and success criteria, independent of implementation language.\n\nThe identity of a human user is not part of what a task environment is defined to specify.",
  },
  {
    id: "cpe310_ch3_121",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is R sub Psi of Ag and Env defined?",
    options: [
      "The set of all runs r in R of Ag and Env such that Psi of r equals 0",
      "The set of all runs r in R of Ag and Env such that Psi of r equals 1",
      "The set of all environment states that satisfy the predicate Psi",
      "The set of all agents that satisfy the predicate Psi in every environment",
    ],
    correctAnswer: 1,
    explanation:
      "Task Environments defines R sub Psi of Ag and Env as the set of runs r that are both in R of Ag and Env and satisfy Psi of r equals 1.\n\nThe set of runs where Psi of r equals 0 would instead be the runs on which the agent fails, the complement of R sub Psi, not R sub Psi itself.\n\nR sub Psi is defined over runs, not directly over individual environment states.\n\nR sub Psi is defined relative to a specific agent and environment pair, not as a general set of agents satisfying Psi across every environment.",
  },
  {
    id: "cpe310_ch3_122",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "When does an agent Ag succeed in a task environment, Env and Psi?",
    options: [
      "When R sub Psi of Ag and Env is always the empty set",
      "When the agent's expected utility is exactly zero",
      "When R sub Psi of Ag and Env equals R of Ag and Env",
      "When the agent has no internal state whatsoever",
    ],
    correctAnswer: 2,
    explanation:
      "Task Environments states that an agent Ag succeeds in task environment Env and Psi if R sub Psi of Ag and Env equals R of Ag and Env, meaning every run of the agent satisfies Psi.\n\nR sub Psi being the empty set would mean the agent satisfies Psi on none of its runs, the opposite of success.\n\nAn expected utility of exactly zero is a separate, utility-based notion and is not the condition given for success under a predicate task specification.\n\nHaving no internal state is unrelated to the success condition, which depends on satisfying Psi on every run, not on the agent's architecture.",
  },
  {
    id: "cpe310_ch3_123",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the probability of success, P of Psi given Ag and Env, defined?",
    options: [
      "The sum, over all runs r in R of Ag and Env, of u of r",
      "The maximum utility value achieved across all runs in R sub Psi of Ag and Env",
      "The number of runs in R sub Psi of Ag and Env divided by the size of Ac",
      "The sum, over all runs r in R sub Psi of Ag and Env, of P of r given Ag and Env",
    ],
    correctAnswer: 3,
    explanation:
      "The Probability of Success defines P of Psi given Ag and Env as the sum, over all runs r in R sub Psi of Ag and Env, of the probability P of r given Ag and Env, adding up the probability of every run on which the agent succeeds.\n\nSumming u of r over all runs in R of Ag and Env describes an expected-utility-style calculation without probability weighting, not the probability of success formula.\n\nTaking the maximum utility value is not how probability of success is defined; it is a sum of probabilities, not a maximum of utilities.\n\nDividing the number of successful runs by the size of Ac is not the formula given for the probability of success.",
  },
  {
    id: "cpe310_ch3_124",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is an achievement task specified?",
    options: [
      "By a set G of goal states the agent must be guaranteed to reach",
      "By a set B of bad states, with the agent succeeding if it avoids all of them",
      "By a single real-valued utility function over environment states",
      "By a probability distribution over the agent's internal states",
    ],
    correctAnswer: 0,
    explanation:
      "Achievement and Maintenance Tasks defines an achievement task as specified by a set G of good, or goal, states, a subset of E, with the agent succeeding if it is guaranteed to bring about at least one of these states, all considered equally good.\n\nBeing specified by a set B of bad states to avoid instead describes a maintenance task, the other of the two task types, not an achievement task.\n\nA single real-valued utility function over states describes the earlier utility-based approach to task specification, a different mechanism from the set-based achievement task.\n\nA probability distribution over internal states is not how an achievement task is specified.",
  },
  {
    id: "cpe310_ch3_125",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is a maintenance task specified?",
    options: [
      "By a set G of good states, with the agent succeeding if it reaches at least one of them",
      "By a set B of bad states, with the agent succeeding if it manages to avoid all states in B",
      "By a formal run r ending with an action rather than a state",
      "By the number of internal states in the set I",
    ],
    correctAnswer: 1,
    explanation:
      "Achievement and Maintenance Tasks defines a maintenance task as specified by a set B of bad states, a subset of E, with the agent succeeding in a particular environment if it manages to avoid all states in B.\n\nBeing specified by a set G of good states to reach instead describes an achievement task, the other of the two task types, not a maintenance task.\n\nWhether a run ends with an action or a state is the distinction between R sub Ac and R sub E, unrelated to how maintenance tasks are specified.\n\nThe number of internal states in I concerns agents with state, an unrelated formal component from how maintenance tasks are specified.",
  },
  {
    id: "cpe310_ch3_126",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Achievement tasks and maintenance tasks are described as the two most common types of tasks.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Achievement and Maintenance Tasks states that achievement tasks and maintenance tasks are the two most common types of tasks, of the form 'achieve state of affairs phi' and 'maintain state of affairs psi' respectively.",
  },
  {
    id: "cpe310_ch3_127",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "Which of the following is one of the two most common types of tasks discussed for agents?",
    options: [
      "Bounded optimal tasks",
      "Predicate optimal tasks",
      "All of these",
      "None of these",
    ],
    correctAnswer: 3,
    explanation:
      "Achievement and Maintenance Tasks names achievement tasks and maintenance tasks as the two most common types of tasks, so neither of the specific options here is supported. Bounded optimality is a property applied to agents relative to a machine m, not a type of task, and predicate optimality is not a term used anywhere in the notes, so None of these is correct.",
  },
  {
    id: "cpe310_ch3_128",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is agent synthesis, syn, defined?",
    options: [
      "A function mapping an agent to its expected utility in a given environment",
      "A function mapping a run to a real-valued utility",
      "A function mapping a task environment to an agent, or to null",
      "A function mapping an environment state to a percept",
    ],
    correctAnswer: 2,
    explanation:
      "Agent Synthesis describes agent synthesis as automatic programming, defining syn as a function mapping TE to AG union the null value, taking a task environment and automatically generating an agent that succeeds in it, or returning null if none can be found.\n\nMapping an agent to its expected utility in an environment describes the EU function, not syn.\n\nMapping a run to a real-valued utility describes the utility function u, not syn.\n\nMapping an environment state to a percept describes the see function, not syn.",
  },
  {
    id: "cpe310_ch3_129",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "In the definition of agent synthesis, what is the null value, denoted by the bottom symbol, analogous to?",
    options: [
      "The empty set",
      "The number zero in arithmetic",
      "The boolean value false",
      "null in Java",
    ],
    correctAnswer: 3,
    explanation:
      "Agent Synthesis explicitly notes that the bottom symbol should be thought of as being like null in Java, representing the case where synthesis fails to find a suitable agent.\n\nWhile the bottom symbol resembles the empty set notationally in some contexts, the notes specifically draw the analogy to null in Java, not simply to unexplained set theory.\n\nThe number zero in arithmetic is not the analogy the notes draw for the bottom symbol.\n\nThe boolean value false is not the analogy the notes draw for the bottom symbol; the given comparison is specifically to null in Java.",
  },
  {
    id: "cpe310_ch3_130",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "When is a synthesis algorithm described as sound?",
    options: [
      "When, whenever it returns an agent, that agent succeeds in the task environment passed as input",
      "When it always returns an agent, even if no successful agent exists",
      "When it is guaranteed to find an agent for every possible task environment",
      "When it never returns the null value under any circumstances",
    ],
    correctAnswer: 0,
    explanation:
      "Soundness and Completeness defines a synthesis algorithm as sound if, whenever it returns an agent, that agent succeeds in the task environment that was passed as input.\n\nAlways returning an agent, even when no successful agent exists, would violate soundness, since the returned agent would not actually succeed.\n\nBeing guaranteed to find an agent for every task environment describes completeness, not soundness.\n\nNever returning the null value under any circumstances is not part of the definition of soundness, which only concerns the correctness of agents it does return.",
  },
  {
    id: "cpe310_ch3_131",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the soundness of syn expressed formally?",
    options: [
      "If an agent exists that satisfies Psi, then syn of the task environment must not equal the null value",
      "If syn of the task environment equals Ag, then R sub Psi of Ag and Env equals R of Ag and Env",
      "If syn of the task environment equals the null value, then no agent could ever satisfy Psi",
      "If syn returns an agent, that agent must have the smallest possible set of internal states",
    ],
    correctAnswer: 1,
    explanation:
      "Soundness and Completeness formally expresses soundness as: syn of the task environment Env and Psi equals Ag implies R sub Psi of Ag and Env equals R of Ag and Env, meaning any agent syn returns actually succeeds.\n\nThe condition that syn must not return null whenever a successful agent exists is instead the formal condition for completeness, not soundness.\n\nThe reverse implication, from syn returning null to no successful agent existing, is the contrapositive relevant to completeness, not the definition of soundness itself as stated.\n\nHaving the smallest possible set of internal states is not part of the formal soundness condition, which concerns whether the returned agent actually succeeds.",
  },
  {
    id: "cpe310_ch3_132",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "When is a synthesis algorithm described as complete?",
    options: [
      "When it always returns the null value for every task environment",
      "When it returns an agent only if that agent has already been tested in every possible environment",
      "When it always returns an agent whenever a successful one exists",
      "When every agent it returns has the same expected utility",
    ],
    correctAnswer: 2,
    explanation:
      "Soundness and Completeness defines a synthesis algorithm as complete if it is guaranteed to return an agent whenever there exists an agent that will succeed in the task environment given as input.\n\nAlways returning the null value would make the algorithm useless and would violate completeness whenever a successful agent actually exists.\n\nPrior testing in every possible environment is not part of the definition of completeness, which concerns whether syn finds a successful agent when one exists.\n\nEvery returned agent having the same expected utility is not part of the definition of completeness, which concerns whether syn succeeds in finding an agent at all, not the specific utility values of agents it returns.",
  },
  {
    id: "cpe310_ch3_133",
    course: "CPE 310",
    chapter: "Chapter 3",
    text: "How is the completeness of syn expressed formally?",
    options: [
      "If syn of the task environment equals Ag, then that agent must maximize expected utility",
      "If no agent can succeed in a task environment, then syn must still return some agent",
      "If syn of the task environment equals the null value, then the environment must be fully accessible",
      "If a successful agent exists in AG, then syn does not return the null value",
    ],
    correctAnswer: 3,
    explanation:
      "Soundness and Completeness formally expresses completeness as: if there exists an agent Ag in AG such that R sub Psi of Ag and Env equals R of Ag and Env, then syn of the task environment Env and Psi does not equal the null value, meaning synthesis must find a successful agent whenever one exists.\n\nRequiring the returned agent to maximize expected utility describes optimality, a separate notion from the soundness or completeness of synthesis.\n\nWhen no agent can succeed, returning the null value is the correct, sound behaviour, not a violation to be avoided.\n\nAccessibility of the environment is a separate property and is not part of the formal completeness condition for syn.",
  },
];

export default cpe310Chapter3Questions;
