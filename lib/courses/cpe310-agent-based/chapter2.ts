import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter2: QuestionV2[] = [
  {
    id: "cpe310_agenttheory_001",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "According to the notes, how is an agent defined?",
    options: [
      "A static software program that executes a fixed sequence of hard-coded instructions on demand",
      "A computational entity situated in an environment, capable of perceiving and acting upon that environment",
      "A relational database system that stores, retrieves, and maintains the discrete states of an environment",
      "A mechanical hardware device that physically alters its surrounding environment without any computational perception",
    ],
    correctAnswer: 1,
    explanation:
      "The notes define an agent as a computational entity situated in an environment, capable of perceiving and acting upon that environment. Perception and action within an environment are the defining elements of the definition.",
  },
  {
    id: "cpe310_agenttheory_002",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the formal model, the environment E = {e, e′, e″, …} is described as which of the following?",
    options: [
      "A continuous stream of real-valued environment state signals",
      "A single fixed environment state that never undergoes any changes",
      "A discrete set of finite environment states",
      "A comprehensive repertoire of available agent actions",
    ],
    correctAnswer: 2,
    explanation:
      "The model specifies that the environment is a discrete set of finite states, written E = {e, e′, e″, …}. This distinguishes the environment states from the agent's actions, which form a separate set.",
  },
  {
    id: "cpe310_agenttheory_003",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What does the set Ac = {a, a′, …} represent in the agent model?",
    options: [
      "The discrete set of finite environment states",
      "The agent's internal informational beliefs",
      "The sequence of percepts the agent receives",
      "The agent's complete repertoire of actions",
    ],
    correctAnswer: 3,
    explanation:
      "Ac = {a, a′, …} denotes the agent's repertoire of actions in the formal model. Environment states are captured separately by the set E.",
  },
  {
    id: "cpe310_agenttheory_004",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the formal model, a 'run' is best described as which of the following?",
    options: [
      "A chronological sequence of interleaved environment states and actions",
      "A deterministic mapping from a single state to a specific action",
      "A continuous function that updates the agent's internal state",
      "A comprehensive listing of the agent's internal beliefs and desires",
    ],
    correctAnswer: 0,
    explanation:
      "A run is defined as a sequence of interleaved environment states and actions, shown as e0 →(a0) e1 →(a1) e2 → … The alternation of states and actions over time is what characterises a run.",
  },
  {
    id: "cpe310_agenttheory_005",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "The agent is formally modeled as the function Ag : R^E → Ac. What does this signature capture about how the agent selects an action?",
    options: [
      "It chooses an action based solely on the single current environment state",
      "It chooses an action randomly, completely independent of any prior states",
      "It chooses an action strictly based on its internal motivational desires",
      "It chooses an action based on the history of states it has witnessed",
    ],
    correctAnswer: 3,
    explanation:
      "The model Ag : R^E → Ac means the agent chooses an action based on the history of states it has witnessed. Mapping from runs (R^E) rather than single states is what makes the choice history-dependent.",
  },
  {
    id: "cpe310_agenttheory_006",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the run notation e0 →(a0) e1 →(a1) e2 → …, what do the symbols a0 and a1 represent?",
    options: [
      "Percepts the agent successfully receives from the current environment",
      "Actions the agent performs between successive environment states",
      "The specific internal states the agent holds at each discrete step",
      "The overarching beliefs the agent relies on at each given moment",
    ],
    correctAnswer: 1,
    explanation:
      "In a run, the labelled arrows a0, a1, … are the actions the agent performs that move the environment from one state to the next. The e-terms are the environment states and the a-terms are the interleaved actions.",
  },
  {
    id: "cpe310_agenttheory_007",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "On what basis does a purely reactive agent make its decisions?",
    options: [
      "The complete history of environment states it has previously witnessed",
      "Its internally committed intentions and actively maintained plan library",
      "Only the single current state, with absolutely no reference to history",
      "The successful outcomes of prior negotiations with other peer agents",
    ],
    correctAnswer: 2,
    explanation:
      "A purely reactive agent is defined as one that makes decisions based only on the current state, with no reference to history. This is what simplifies it relative to the general history-based agent.",
  },
  {
    id: "cpe310_agenttheory_008",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "A purely reactive agent selects its action with no reference to the history of states.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes describe a purely reactive agent as one that decides based only on the current state, with no reference to history, formalised as Ag : E → Ac.",
  },
  {
    id: "cpe310_agenttheory_009",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which formal signature corresponds to a purely reactive agent?",
    options: [
      "Ag : E → Ac",
      "Ag : R^E → Ac",
      "see : E → Per",
      "next : I × Per → I",
    ],
    correctAnswer: 0,
    explanation:
      "A purely reactive agent is modeled as Ag : E → Ac, mapping the current state directly to an action. The signature Ag : R^E → Ac instead maps the full history of states to an action.",
  },
  {
    id: "cpe310_agenttheory_010",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which example is given in the notes to illustrate a purely reactive agent?",
    options: [
      "A collaborative agent that negotiates resources with other peers",
      "A deliberative BDI agent that plans multi-step future actions",
      "A simple thermostat that activates based purely on current temperature",
      "A learning agent that continuously updates its internal state memory",
    ],
    correctAnswer: 2,
    explanation:
      "The notes give a thermostat as the example of a purely reactive agent, since it responds only to the current state. The other options describe agents that rely on internal state, deliberation, or social interaction.",
  },
  {
    id: "cpe310_agenttheory_011",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What primarily distinguishes an agent with state from a purely reactive agent?",
    options: [
      "It completely ignores environmental changes when choosing its next series of actions",
      "It relies on external instructions rather than perceiving changes in the environment",
      "It chooses actions randomly from a set instead of deterministically mapping states",
      "It maintains and updates internal state across percepts instead of using only the current state",
    ],
    correctAnswer: 3,
    explanation:
      "An agent with state perceives the environment and maintains internal state that is updated by percepts, making it more powerful than a purely reactive agent that decides from the current state alone.",
  },
  {
    id: "cpe310_agenttheory_012",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Compared with purely reactive agents, how are agents with state characterised in the notes?",
    options: [
      "They are considered significantly less powerful due to increased processing latency",
      "They are considered strictly more powerful because they leverage historical context",
      "They are considered entirely identical in capability but differ in implementation",
      "They are considered entirely incapable of perceiving real-time environment states",
    ],
    correctAnswer: 1,
    explanation:
      "The notes explicitly describe agents with state as more powerful than purely reactive agents. Maintaining internal state gives them greater capability than deciding from the current state alone.",
  },
  {
    id: "cpe310_agenttheory_013",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent with state is built from which three components?",
    options: [
      "The see, next, and action functions",
      "The belief, desire, and intention states",
      "The perceive, reason, and commit phases",
      "The filter, run, and repertoire modules",
    ],
    correctAnswer: 0,
    explanation:
      "The notes specify three components for an agent with state: see (maps states to percepts), next (updates internal state), and action (selects an action). Belief-desire-intention belongs instead to the BDI model.",
  },
  {
    id: "cpe310_agenttheory_014",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In an agent with state, what role does the function see : E → Per perform?",
    options: [
      "It systematically updates the agent's internal state based on a new percept",
      "It directly maps the current external environment states to internal percepts",
      "It definitively selects an action to perform based on the current internal state",
      "It formally locks in a chosen option as a persistently committed intention",
    ],
    correctAnswer: 1,
    explanation:
      "The see function has the signature E → Per and maps environment states to percepts. Updating internal state is handled by next, and choosing an action is handled by action.",
  },
  {
    id: "cpe310_agenttheory_015",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What does the function next : I × Per → I do in a stateful agent?",
    options: [
      "It maps the current external environment states directly into internal percepts",
      "It selects a specific optimal action based entirely on the current internal state",
      "It systematically updates the agent's internal state based on a newly received percept",
      "It continuously negotiates globally shared objectives with other connected agents",
    ],
    correctAnswer: 2,
    explanation:
      "The next function takes the current internal state and a percept (I × Per) and returns an updated internal state I. It is the component responsible for updating internal state based on new percepts.",
  },
  {
    id: "cpe310_agenttheory_016",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In a stateful agent, what is the responsibility of the function action : I → Ac?",
    options: [
      "Mapping the incoming external environment states directly into internal percepts",
      "Systematically updating the agent's internal state based on a newly received percept",
      "Filtering available strategic options into firmly committed deliberative intentions",
      "Selecting a specific optimal action to perform based on the current internal state",
    ],
    correctAnswer: 3,
    explanation:
      "The action function maps the internal state I to an action in Ac, selecting an action based on the agent's current internal state. Mapping states to percepts and updating state are handled by see and next respectively.",
  },
  {
    id: "cpe310_agenttheory_017",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Among the properties of intelligent agents, what does reactivity refer to?",
    options: [
      "Perceiving the environment and responding in a timely manner to sudden changes",
      "Taking the active initiative to independently satisfy its own internal objectives",
      "Interacting effectively with other agents through negotiation and cooperation",
      "Committing firmly to specific goals after an extended process of deliberation",
    ],
    correctAnswer: 0,
    explanation:
      "Reactivity is defined as perceiving the environment and responding in a timely manner to changes. Taking initiative is proactiveness, and interacting with others is social ability.",
  },
  {
    id: "cpe310_agenttheory_018",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which property of intelligent agents describes goal-directed behaviour and taking initiative to satisfy objectives?",
    options: [
      "The property of Reactivity",
      "The property of Social Ability",
      "The property of Commitment",
      "The property of Proactiveness",
    ],
    correctAnswer: 3,
    explanation:
      "Proactiveness is defined as exhibiting goal-directed behaviour and taking initiative to satisfy objectives. Reactivity concerns timely responses, while social ability concerns interaction with other agents.",
  },
  {
    id: "cpe310_agenttheory_019",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Social ability, as a property of intelligent agents, is the capacity to do what?",
    options: [
      "Respond effectively to sudden environmental changes in a highly timely manner",
      "Interact with other agents by negotiating, cooperating, and understanding goals",
      "Take independent initiative toward achieving its own internally defined objectives",
      "Lock securely into a specific chosen option to form a persistent, active intention",
    ],
    correctAnswer: 1,
    explanation:
      "Social ability is the capacity to interact with other agents to satisfy objectives through negotiating, cooperating, and understanding others' goals. The other options describe reactivity, proactiveness, and commitment.",
  },
  {
    id: "cpe310_agenttheory_020",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent, without being prompted, begins pursuing a new objective it has set for itself. Which property does this best demonstrate?",
    options: [
      "The principle of reactivity, responding to immediate environmental changes",
      "The principle of social ability, negotiating resources with peer entities",
      "The principle of proactiveness, showing autonomous goal-directed initiative",
      "The principle of internal state mapping, continuously updating belief systems",
    ],
    correctAnswer: 2,
    explanation:
      "Initiating action toward an objective without being prompted is goal-directed behaviour, which the notes define as proactiveness. Reactivity would instead be a timely response to an environmental change.",
  },
  {
    id: "cpe310_agenttheory_021",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "The concept of intentional systems is often formalized using which model?",
    options: [
      "The Belief-Desire-Intention (BDI) deliberative architecture model",
      "The purely reactive, stateless stimulus-response formal agent model",
      "The see-next-action sequential state-update structural functional model",
      "The Bratman asymmetry thesis for rational real-time intention formulation",
    ],
    correctAnswer: 0,
    explanation:
      "The notes state that the intentional systems concept is often formalized using the Belief-Desire-Intention (BDI) model. The see-next-action structure instead describes an agent with state.",
  },
  {
    id: "cpe310_agenttheory_022",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the BDI model, BDI stands for Belief-Desire-Intention.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. The notes formalize intentional systems with the Belief-Desire-Intention (BDI) model, comprising beliefs, desires, and intentions.",
  },
  {
    id: "cpe310_agenttheory_023",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the BDI model, beliefs represent which aspect of the agent?",
    options: [
      "Its underlying motivational state consisting of the various objectives it wants",
      "Its committed deliberative state representing the specific goals it will execute",
      "Its current informational state representing its knowledge about the real world",
      "Its complete physical repertoire of available actions within the environment",
    ],
    correctAnswer: 2,
    explanation:
      "In the BDI model, beliefs are the agent's informational state about the world. The motivational state corresponds to desires and the deliberative state to intentions.",
  },
  {
    id: "cpe310_agenttheory_024",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the BDI model, desires correspond to which state of the agent?",
    options: [
      "Its current informational state representing its knowledge about the real world",
      "Its committed deliberative state representing the specific goals it will execute",
      "Its continuous perception state reflecting raw sensor data from the environment",
      "Its underlying motivational state consisting of the various objectives it wants",
    ],
    correctAnswer: 3,
    explanation:
      "Desires are defined as the agent's motivational state — the objectives it wants to accomplish. Beliefs are informational and intentions are the committed, deliberative state.",
  },
  {
    id: "cpe310_agenttheory_025",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Within the BDI model, intentions are characterized as the agent's what?",
    options: [
      "Its current informational state representing its factual knowledge about the world",
      "Its committed deliberative state representing the specific goals it will actively execute",
      "Its underlying motivational state consisting of the various raw objectives it desires",
      "Its sequential operational state mapping discrete environment conditions to percepts",
    ],
    correctAnswer: 1,
    explanation:
      "Intentions are the agent's deliberative state — the specific goals it has committed to achieving and executing. This contrasts with beliefs (informational) and desires (motivational).",
  },
  {
    id: "cpe310_agenttheory_026",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent records that 'it is currently raining outside.' In BDI terms, this stored information is an example of a what?",
    options: [
      "An internally maintained informational belief",
      "An underlying motivational active desire",
      "A formally committed deliberative intention",
      "A sequentially updated system state commitment",
    ],
    correctAnswer: 0,
    explanation:
      "Information the agent holds about the world is, in BDI terms, a belief — the agent's informational state. A desire would be an objective it wants, and an intention a goal it has committed to.",
  },
  {
    id: "cpe310_agenttheory_027",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "According to the notes, a commitment arises when an agent does what?",
    options: [
      "Perceives a sudden change in the immediate environment and reactively responds to it",
      "Selects an option via the filter function and firmly locks in to pursuing it as an intention",
      "Successfully maps an observed environment state to a newly established internal percept",
      "Rationally abandons an established objective that it determines can no longer be achieved",
    ],
    correctAnswer: 1,
    explanation:
      "A commitment arises when an agent selects an option through the filter function and formally locks in to pursuing it as an intention. It marks the transition from a chosen option to a committed intention.",
  },
  {
    id: "cpe310_agenttheory_028",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Commitment is best understood as the bridge between which two things?",
    options: [
      "The initial environmental perception and the subsequent internal-state update",
      "The agent's informational belief system and its underlying motivational desires",
      "The strategic process of option selection and the final formation of an intention",
      "The agent's baseline timeline reactivity and its higher-level systemic proactiveness",
    ],
    correctAnswer: 2,
    explanation:
      "Commitment bridges option selection (via the filter function) and intention formation, since it is the act of locking in to pursue a selected option as an intention.",
  },
  {
    id: "cpe310_agenttheory_029",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How do intentions compare to mere desires, according to the notes?",
    options: [
      "Intentions are considered far weaker and only rarely lead to any concrete physical action",
      "Intentions and desires are conceptually identical and function interchangeably in the model",
      "Desires are significantly stronger and will always override any previously set intentions",
      "Intentions are considered much stronger and actively tend to initiate concrete plan execution",
    ],
    correctAnswer: 3,
    explanation:
      "The notes state that intentions tend to lead to action and are stronger than mere desires. Once adopted, an intention prompts the agent to initiate a plan to achieve it.",
  },
  {
    id: "cpe310_agenttheory_030",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Intentions are weaker than mere desires.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes state that intentions are stronger than mere desires and tend to lead to action, which is the opposite of being weaker.",
  },
  {
    id: "cpe310_agenttheory_031",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Once an intention is adopted, what does the agent do?",
    options: [
      "It immediately initiates a structured operational plan in order to successfully achieve it",
      "It quickly discards the intention if it conflicts with any previously held factual beliefs",
      "It permanently converts the intention into a static belief state for long-term storage",
      "It passively maps the intention to a sensory percept without taking any physical action",
    ],
    correctAnswer: 0,
    explanation:
      "The notes state that once an intention is adopted, the agent initiates a plan to achieve it. This action-orientation is part of why intentions are stronger than desires.",
  },
  {
    id: "cpe310_agenttheory_032",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Intentions are described as states of affairs that an agent has done what with?",
    options: [
      "Passively perceived from the environment but intentionally chosen not to be acted upon",
      "Randomly assigned by the system architecture without any internal logical deliberation",
      "Received directly as raw sensory percepts from the external surrounding environment",
      "Actively chosen and firmly committed to after a thorough process of internal deliberation",
    ],
    correctAnswer: 3,
    explanation:
      "The notes describe intentions as the states of affairs an agent has chosen and committed to after deliberation. This deliberative commitment is what separates them from mere desires.",
  },
  {
    id: "cpe310_agenttheory_033",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "The notes state that agents should not drop their intentions without good reason. If a first attempt fails, what should the agent do?",
    options: [
      "Abandon the intention permanently and clear it from the agent's active internal state",
      "Persist with the current intention and proactively attempt to execute the plan again",
      "Replace it immediately with a completely random new motivational goal or desire",
      "Stop perceiving the environment until the previous systemic failure is fully resolved",
    ],
    correctAnswer: 1,
    explanation:
      "Because intentions persist, the notes say that if the first attempt fails, the agent should try again rather than abandoning the intention. Intentions should not be dropped without a good reason.",
  },
  {
    id: "cpe310_agenttheory_034",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "According to the notes, an agent may rationally drop an intention whenever it wishes, even without any reason.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. The notes state that agents should not drop their intentions without a good reason, and they list specific conditions under which dropping is rational.",
  },
  {
    id: "cpe310_agenttheory_035",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which of the following is one of the conditions under which an agent may rationally drop an intention?",
    options: [
      "The agent has recently perceived any minor change at all within the surrounding environment",
      "Another connected collaborative agent happens to currently hold a radically different intention",
      "The specific state of affairs defining the committed intention has been successfully achieved",
      "The chosen intention is suddenly determined to be significantly stronger than a baseline desire",
    ],
    correctAnswer: 2,
    explanation:
      "One listed condition for rationally dropping an intention is that the intention has been successfully achieved. The other listed conditions are that it can no longer be achieved or its reason is no longer valid.",
  },
  {
    id: "cpe310_agenttheory_036",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent comes to believe that a committed goal is now impossible to attain. According to the notes, this justifies what?",
    options: [
      "Rationally dropping the intention since the goal can no longer be practically achieved",
      "Strengthening the intention further to continuously force additional execution attempts",
      "Converting the failed intention into a persistent belief to warn other connected agents",
      "Negotiating the impossible intention with other peer agents to divide the workload",
    ],
    correctAnswer: 0,
    explanation:
      "Believing the intention can no longer be achieved is one of the three conditions under which an agent may rationally drop it. The notes treat unattainability as a legitimate reason to abandon a committed goal.",
  },
  {
    id: "cpe310_agenttheory_037",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which situation is listed as a valid reason for an agent to drop an intention?",
    options: [
      "The agent's internal filter simply prioritizes a much newer, conflicting motivational desire",
      "The underlying computational environment is determined to have only finitely many discrete states",
      "The foundational reason or initial justification for holding the intention is no longer valid",
      "The autonomous agent temporarily lacks the social ability required to negotiate the outcome",
    ],
    correctAnswer: 2,
    explanation:
      "The notes list 'the reason for the intention is no longer valid' as one of the three conditions for rationally dropping an intention. Mere preference for another desire is not among the listed conditions.",
  },
  {
    id: "cpe310_agenttheory_038",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What is the core claim of Bratman's Asymmetry Thesis?",
    options: [
      "If an agent possesses a factual belief in φ, it must necessarily formulate an active intention for φ",
      "An agent should immediately drop the intention φ as soon as it experiences any minor doubt about φ",
      "An agent's committed intentions and its informational beliefs must always be strictly identical states",
      "If an agent explicitly intends φ, it should logically believe that, given the right conditions, φ will be achieved",
    ],
    correctAnswer: 3,
    explanation:
      "Bratman's Asymmetry Thesis holds that if an agent intends to achieve φ, it should believe that, given the right conditions, φ will be achieved. The thesis links intention to a supporting belief about achievability.",
  },
  {
    id: "cpe310_agenttheory_039",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In Bratman's thesis, intending φ while simultaneously believing you will not achieve φ is termed what?",
    options: [
      "Intention-belief incompleteness, which Bratman classifies as a fully acceptable and normal state",
      "Intention-belief inconsistency, which Bratman strictly classifies as a logically irrational state",
      "Intention-belief alignment, which occurs directly through the commitment of the filter function",
      "Intention-belief proactiveness, which successfully drives the agent toward a complex objective",
    ],
    correctAnswer: 1,
    explanation:
      "Bratman calls intending φ while believing you will not achieve φ an intention-belief inconsistency, which he classifies as irrational. It is contrasted with the acceptable case of incompleteness.",
  },
  {
    id: "cpe310_agenttheory_040",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Under Bratman's thesis, intending φ while believing φ will not be achieved is considered rational.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "This is false. Bratman labels this case intention-belief inconsistency and classifies it as irrational, not rational.",
  },
  {
    id: "cpe310_agenttheory_041",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Intending φ without fully believing φ will be the case — acknowledging the possibility of failure — is called what?",
    options: [
      "Intention-belief incompleteness, which Bratman officially classifies as an acceptable and logical state",
      "Intention-belief inconsistency, which Bratman explicitly classifies as a completely irrational state",
      "Intention-belief reactivity, which guarantees that the agent will abandon the goal upon any failure",
      "Intention-belief spontaneousness, representing a desire that was formulated without true deliberation",
    ],
    correctAnswer: 0,
    explanation:
      "Bratman calls intending φ without fully believing it will be the case intention-belief incompleteness, which is acceptable because it merely acknowledges the possibility of failure. Inconsistency, by contrast, is the irrational case.",
  },
  {
    id: "cpe310_agenttheory_042",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Bratman classifies intention-belief incompleteness as an acceptable state for a rational agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This is true. Intention-belief incompleteness — intending φ without fully believing φ will be achieved — is described as acceptable, since it only acknowledges the possibility of failure.",
  },
  {
    id: "cpe310_agenttheory_043",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent intends to finish a task but recognizes there is some chance it might fail, without believing failure is certain. According to Bratman, this state is what?",
    options: [
      "Inherently irrational — it represents a clear instance of formal intention-belief inconsistency",
      "Entirely acceptable — it represents a standard instance of intention-belief incompleteness",
      "A definitive violation — it directly compromises the agent's established social ability metrics",
      "Logically equivalent — it is treated computationally exactly as having already dropped the intention",
    ],
    correctAnswer: 1,
    explanation:
      "Acknowledging a possibility of failure without believing failure is certain is intention-belief incompleteness, which Bratman treats as acceptable. Inconsistency would require actually believing φ will not be achieved.",
  },
];

export default cpe310Chapter2;
