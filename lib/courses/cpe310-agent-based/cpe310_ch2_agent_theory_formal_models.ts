import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter2Questions: QuestionV2[] = [
  {
    id: "cpe310_ch5_001",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How is an agent defined in the formal model of multiagent systems?",
    options: [
      "A computational entity situated in an environment, capable of perceiving and acting upon that environment",
      "A physical robot that operates without any software control",
      "A fixed set of rules stored in a database for later retrieval",
      "A human operator who manually directs a machine's every action",
    ],
    correctAnswer: 0,
    explanation:
      "The definition of an agent describes it as a computational entity situated in an environment, capable of perceiving and acting upon that environment.\n\nA physical robot without software control describes hardware alone, not the computational entity the definition specifies.\n\nA fixed set of stored rules describes a static data structure, not something that perceives and acts.\n\nA human operator directing a machine describes manual control, the opposite of an agent acting on its own within an environment.",
  },
  {
    id: "cpe310_ch5_002",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the formal model of an agent, how is the environment represented?",
    options: [
      "As a continuous, infinite range of numeric values",
      "As a discrete set of finite states, E = {e, e', e'', ...}",
      "As a single fixed state that never changes",
      "As a repertoire of actions available to the agent",
    ],
    correctAnswer: 1,
    explanation:
      "The Model section represents the environment as a discrete set of finite states, written E = {e, e', e'', ...}.\n\nA continuous infinite range of numeric values is not how the model defines the environment, which is explicitly discrete and finite.\n\nA single fixed state that never changes contradicts the environment being a set of multiple possible states.\n\nA repertoire of actions describes Ac, the agent's set of actions, not the environment.",
  },
  {
    id: "cpe310_ch5_003",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "A thermostat's environment can be described by the possible readings too-cold, comfortable, and too-hot. In the formal model of an agent, this set of possible readings corresponds to which component?",
    options: [
      "Ac, the agent's repertoire of actions",
      "A run, the sequence of interleaved states and actions",
      "E, the discrete set of finite environment states",
      "Per, the set of percepts produced by the see function",
    ],
    correctAnswer: 2,
    explanation:
      "The set of possible readings a thermostat can be in corresponds to E, the discrete set of finite environment states defined in the Model section.\n\nAc is defined as the agent's repertoire of actions, not the states of the environment.\n\nA run is defined as a sequence of interleaved states and actions over time, not the set of possible states itself.\n\nPer is the set of percepts produced by the see function in the agents-with-state model, a different formal component from the environment states.",
  },
  {
    id: "cpe310_ch5_004",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the formal model of an agent, what does Ac represent?",
    options: [
      "A discrete set of finite environment states",
      "A sequence of interleaved states and actions",
      "A function mapping percepts to internal states",
      "A repertoire of actions available to the agent",
    ],
    correctAnswer: 3,
    explanation:
      "The Model section defines Ac = {a, a', ...} as the agent's repertoire of available actions.\n\nA discrete set of finite environment states describes E, not the agent's actions.\n\nA sequence of interleaved states and actions describes a run, not the action repertoire itself.\n\nA function mapping percepts to internal states describes the next function used by agents with state, not Ac.",
  },
  {
    id: "cpe310_ch5_005",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "A robot can choose from the moves move-left, move-right, and stop. In the formal model, this set of available moves corresponds to which component?",
    options: [
      "Ac, the agent's repertoire of actions",
      "E, the discrete set of finite environment states",
      "I, the agent's internal state",
      "Per, the set of percepts produced by the see function",
    ],
    correctAnswer: 0,
    explanation:
      "The set of moves a robot can choose from corresponds to Ac, the agent's repertoire of actions, as defined in the Model section.\n\nE is defined as the discrete set of finite environment states, not the actions available to the agent.\n\nI is the internal state used in the agents-with-state model, a different formal component from the action repertoire.\n\nPer is the set of percepts produced by the see function, not the actions themselves.",
  },
  {
    id: "cpe310_ch5_006",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What does a run represent in the formal model of an agent?",
    options: [
      "A single environment state considered in isolation",
      "A sequence of interleaved environment states and actions over time",
      "A fixed list of all actions an agent could ever take",
      "The internal memory an agent uses to store past percepts",
    ],
    correctAnswer: 1,
    explanation:
      "The Model section defines a run as a sequence of interleaved environment states and actions, shown as e0 leading through a0 to e1, then a1 to e2, and so on.\n\nA single environment state considered in isolation describes one element of E, not the sequence a run represents.\n\nA fixed list of all actions an agent could ever take describes Ac, not the interleaved sequence of states and actions.\n\nThe internal memory an agent uses to store past percepts describes the internal state I used by agents with state, a separate concept from a run.",
  },
  {
    id: "cpe310_ch5_007",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent starts in state e0, takes action a0 to reach e1, then takes action a1 to reach e2. What is this interleaved sequence of states and actions called in the formal model?",
    options: ["An intention", "A commitment", "A run", "A percept"],
    correctAnswer: 2,
    explanation:
      "An interleaved sequence of states and actions like e0 through a0 to e1, then a1 to e2, is precisely what the Model section calls a run.\n\nAn intention is defined much later as a state of affairs an agent has committed to achieving, not a sequence of states and actions.\n\nA commitment is the act of locking in to pursue an option, not the resulting sequence of states and actions.\n\nA percept is a single perception produced by the see function, not an entire sequence of states and actions.",
  },
  {
    id: "cpe310_ch5_008",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How is an agent formally modeled as a function in the Model section?",
    options: [
      "Ag : E -> Ac, choosing an action from the current state alone",
      "Ag : I -> Ac, choosing an action from its internal state alone",
      "Ag : Per -> I, updating its internal state from a percept",
      "Ag : R^E -> Ac, choosing an action based on the history of states it has witnessed",
    ],
    correctAnswer: 3,
    explanation:
      "The Model section formally models an agent as a function Ag : R^E -> Ac, which chooses an action based on the history of states it has witnessed.\n\nAg : E -> Ac describes the simplified purely reactive agent, which uses only the current state, not the full history.\n\nAg : I -> Ac is not a formulation given in the notes for the general agent function.\n\nAg : Per -> I describes the next function used by agents with state to update internal state from a percept, not the general agent function.",
  },
  {
    id: "cpe310_ch5_009",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Two agents are compared: one selects its action using the full history of states it has witnessed, and the other selects its action using only the current state. Which formal notation describes the first agent?",
    options: [
      "Ag : R^E -> Ac",
      "Ag : E -> Ac",
      "see : E -> Per",
      "next : I x Per -> I",
    ],
    correctAnswer: 0,
    explanation:
      "An agent that selects its action from the full history of states it has witnessed matches Ag : R^E -> Ac, the general agent function defined in the Model section.\n\nAg : E -> Ac instead describes the purely reactive agent, which uses only the current state rather than the full history.\n\nsee : E -> Per is one of the three components of an agent with state, mapping environment states to percepts, not the general history-based function.\n\nnext : I x Per -> I is another of the three components of an agent with state, updating internal state from a percept, not the general history-based function.",
  },
  {
    id: "cpe310_ch5_010",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "A purely reactive agent selects its next action based solely on the current environment state, without reference to any history of past states.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "Purely Reactive Agents are defined as a simplified agent that makes decisions based only on the current state, with no reference to history, formally written Ag : E -> Ac, with a thermostat given as an example.",
  },
  {
    id: "cpe310_ch5_011",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "A thermostat turns the heater on or off based only on the current temperature reading, with no memory of past readings. Which type of agent does this best exemplify?",
    options: [
      "An agent with state",
      "A purely reactive agent",
      "An intentional system",
      "A socially able agent",
    ],
    correctAnswer: 1,
    explanation:
      "Purely Reactive Agents are defined as making decisions based only on the current state with no reference to history, and the notes give a thermostat as the direct example of this.\n\nAn agent with state instead uses an internal state built from past percepts through its see, next, and action components, which a memoryless thermostat does not have.\n\nAn intentional system is formalized through the BDI model of beliefs, desires, and intentions, a different framework from the purely reactive definition.\n\nA socially able agent is defined by interacting with other agents through negotiation and cooperation, not by how it uses environment state.",
  },
  {
    id: "cpe310_ch5_012",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the formal model of an agent with state, what does the see function do?",
    options: [
      "It selects an action based on the current internal state",
      "It updates the internal state based on a new percept",
      "It perceives the environment and maps environment states to percepts",
      "It compares the current state to a stored history of past runs",
    ],
    correctAnswer: 2,
    explanation:
      "Agents with state defines see : E -> Per as the component that perceives the environment, mapping environment states to percepts.\n\nSelecting an action based on the current internal state describes the action function, not see.\n\nUpdating the internal state based on a new percept describes the next function, not see.\n\nComparing the current state to a stored history of past runs is not one of the three components the notes define for agents with state.",
  },
  {
    id: "cpe310_ch5_013",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the formal model of an agent with state, what does the next function do?",
    options: [
      "It perceives the environment and maps states to percepts",
      "It selects an action based on the current internal state",
      "It initiates a plan once an intention is adopted",
      "It updates the internal state based on a new percept",
    ],
    correctAnswer: 3,
    explanation:
      "Agents with state defines next : I x Per -> I as the component that updates the internal state based on a new percept.\n\nPerceiving the environment and mapping states to percepts describes see, not next.\n\nSelecting an action based on the current internal state describes the action function, not next.\n\nInitiating a plan once an intention is adopted is described later under Intentions, a different concept from updating internal state from a percept.",
  },
  {
    id: "cpe310_ch5_014",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the formal model of an agent with state, what does the action function do?",
    options: [
      "It selects an action based on the current internal state, action : I -> Ac",
      "It perceives the environment and maps states to percepts",
      "It updates the internal state based on a new percept",
      "It formally locks the agent in to pursuing an intention",
    ],
    correctAnswer: 0,
    explanation:
      "Agents with state defines action : I -> Ac as the component that selects an action based on the current internal state.\n\nPerceiving the environment and mapping states to percepts describes see, not action.\n\nUpdating the internal state based on a new percept describes next, not action.\n\nFormally locking the agent in to pursuing an intention describes a commitment, a separate concept from the action function.",
  },
  {
    id: "cpe310_ch5_015",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Why are agents with state described as more powerful than purely reactive agents?",
    options: [
      "They can select actions without ever perceiving the environment",
      "They maintain an internal state built from percepts they have received",
      "They eliminate the need for a repertoire of actions",
      "They always select the same action regardless of the internal state",
    ],
    correctAnswer: 1,
    explanation:
      "Agents with state are described as more powerful because they perceive the environment and respond in a timely manner to changes using an internal state built through the see, next, and action components, letting them draw on more than just the bare current state.\n\nSelecting actions without ever perceiving the environment contradicts the see component, which is central to how agents with state operate.\n\nEliminating the need for a repertoire of actions is not supported, since the action function still maps internal state to Ac.\n\nAlways selecting the same action regardless of internal state would make the action function pointless, contradicting its role of selecting based on current internal state.",
  },
  {
    id: "cpe310_ch5_016",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which of the following are properties of an intelligent agent?",
    options: ["Reactivity", "Proactiveness", "All of these", "None of these"],
    correctAnswer: 2,
    explanation:
      "Properties of Intelligent Agents lists Reactivity, perceiving the environment and responding in a timely manner to changes, and Proactiveness, exhibiting goal-directed behaviour and taking initiative to satisfy objectives, as two of the three named properties, so both are correct and All of these applies.",
  },
  {
    id: "cpe310_ch5_017",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "A cleaning robot proceeds to recharge itself before its battery runs out, without being told to do so, in order to keep pursuing its cleaning goal later. Which property of intelligent agents does this best illustrate?",
    options: ["Reactivity", "Social ability", "Proactiveness", "Commitment"],
    correctAnswer: 2,
    explanation:
      "Proactiveness is defined as exhibiting goal-directed behaviour and taking initiative to satisfy objectives, which matches a robot recharging on its own initiative to keep pursuing its goal.\n\nReactivity is defined as perceiving the environment and responding in a timely manner to changes, a response to stimuli rather than self-initiated goal pursuit.\n\nSocial ability is defined as interacting with other agents through negotiating, cooperating, and understanding others' goals, not initiative taken alone.\n\nCommitment is defined as formally locking in to pursue an option as an intention, a related but distinct idea from initiating behaviour toward a goal.",
  },
  {
    id: "cpe310_ch5_018",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How is social ability defined as a property of intelligent agents?",
    options: [
      "Interacting with other agents to satisfy objectives through negotiating, cooperating, and understanding others' goals",
      "Perceiving the environment and responding in a timely manner to changes",
      "Exhibiting goal-directed behaviour and taking initiative to satisfy objectives",
      "Selecting an action based solely on the current environment state",
    ],
    correctAnswer: 0,
    explanation:
      "Properties of Intelligent Agents defines social ability as interacting with other agents to satisfy its objectives through negotiating, cooperating, and understanding others' goals.\n\nPerceiving the environment and responding in a timely manner describes reactivity, not social ability.\n\nExhibiting goal-directed behaviour and taking initiative describes proactiveness, not social ability.\n\nSelecting an action based solely on the current state describes a purely reactive agent, not social ability.",
  },
  {
    id: "cpe310_ch5_019",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Two delivery robots negotiate over which one will take a shared route, each trying to understand the other's goal before agreeing on a plan. Which property of intelligent agents does this scenario best illustrate?",
    options: [
      "Reactivity",
      "Purely reactive behaviour",
      "Intention persistence",
      "Social ability",
    ],
    correctAnswer: 3,
    explanation:
      "Social ability is defined as interacting with other agents to satisfy objectives through negotiating, cooperating, and understanding others' goals, which matches the robots negotiating a shared route.\n\nReactivity is defined as perceiving the environment and responding to changes, not negotiating with other agents.\n\nPurely reactive behaviour describes acting only on the current state with no history, unrelated to negotiating with another agent.\n\nIntention persistence is defined as not dropping an intention without good reason, a separate idea from negotiating with another agent.",
  },
  {
    id: "cpe310_ch5_020",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the BDI model used to formalize agents as intentional systems, what do Beliefs represent?",
    options: [
      "The agent's motivational state, the objectives it wants to accomplish",
      "The agent's informational state about the world",
      "The agent's deliberative state, the specific goals it has committed to achieving",
      "The agent's repertoire of available actions",
    ],
    correctAnswer: 1,
    explanation:
      "Agents as Intentional Systems defines Beliefs as the agent's informational state about the world.\n\nThe agent's motivational state, the objectives it wants to accomplish, is how the same section defines Desires, not Beliefs.\n\nThe agent's deliberative state, the specific goals it has committed to achieving, is how the section defines Intentions, not Beliefs.\n\nThe agent's repertoire of available actions describes Ac from the Model section, not a BDI component.",
  },
  {
    id: "cpe310_ch5_021",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the BDI model used to formalize agents as intentional systems, what do Desires represent?",
    options: [
      "The agent's informational state about the world",
      "The specific goals the agent has committed to achieving and executing",
      "The agent's motivational state, the objectives it wants to accomplish",
      "A sequence of interleaved environment states and actions",
    ],
    correctAnswer: 2,
    explanation:
      "Agents as Intentional Systems defines Desires as the agent's motivational state, the objectives it wants to accomplish.\n\nThe agent's informational state about the world is how the section defines Beliefs, not Desires.\n\nThe specific goals the agent has committed to achieving and executing is how the section defines Intentions, not Desires.\n\nA sequence of interleaved environment states and actions describes a run from the Model section, not a BDI component.",
  },
  {
    id: "cpe310_ch5_022",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "In the BDI model, Intentions represent the agent's informational state about the world.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Agents as Intentional Systems defines Intentions as the agent's deliberative state, the specific goals it has committed to achieving and executing, not its informational state about the world. The informational state about the world is instead how the same section defines Beliefs.",
  },
  {
    id: "cpe310_ch5_023",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent believes it is raining, wants to stay dry, and has deliberated and committed to opening its umbrella. Which BDI component does having committed to opening its umbrella represent?",
    options: ["Belief", "Desire", "Commitment", "Intention"],
    correctAnswer: 3,
    explanation:
      "Intentions are defined as the agent's deliberative state, the specific goals it has committed to achieving and executing, which matches having deliberated and committed to opening the umbrella.\n\nBelief is defined as the agent's informational state about the world, matching only the fact that it believes it is raining, not the committed goal.\n\nDesire is defined as the agent's motivational state, the objective of wanting to stay dry, not the specific committed goal itself.\n\nCommitment is the act of locking in to pursue an option as an intention, a closely related but distinct concept from the resulting BDI component of Intention itself.",
  },
  {
    id: "cpe310_ch5_024",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How does a commitment arise in an agent's deliberation process?",
    options: [
      "When the agent selects an option and locks in to pursue it",
      "When an agent perceives a new percept and updates its internal state",
      "When an agent's intention has been successfully achieved",
      "When an agent negotiates and cooperates with another agent",
    ],
    correctAnswer: 0,
    explanation:
      "Commitments defines a commitment as arising when an agent selects an option, through the filter function, and formally locks in to pursuing it as an intention.\n\nPerceiving a new percept and updating internal state describes the next function of an agent with state, not how a commitment arises.\n\nAn intention having been successfully achieved is one of the conditions for rationally dropping that intention, not how a commitment arises.\n\nNegotiating and cooperating with another agent describes social ability, not how a commitment arises.",
  },
  {
    id: "cpe310_ch5_025",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What role does the filter function play in an agent forming a commitment?",
    options: [
      "It perceives the environment and produces a percept",
      "It is the mechanism the agent uses to select an option to commit to",
      "It compares the agent's current state to its full run history",
      "It determines whether the agent's social ability is sufficient to cooperate",
    ],
    correctAnswer: 1,
    explanation:
      "Commitments describes a commitment as arising when an agent selects an option through the filter function, making the filter function the mechanism of selection that precedes locking in to an intention.\n\nPerceiving the environment and producing a percept describes the see function of an agent with state, not the filter function.\n\nComparing the current state to the full run history describes the general agent function Ag : R^E -> Ac, not the filter function.\n\nDetermining whether social ability is sufficient to cooperate is not a role described for the filter function, which concerns selecting an option to commit to.",
  },
  {
    id: "cpe310_ch5_026",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What is the key difference between a commitment and an intention?",
    options: [
      "A commitment is an informational state about the world, while an intention is a motivational state",
      "A commitment only occurs after an intention has already been successfully achieved",
      "A commitment is the act of locking in to an option, while an intention is the resulting committed state",
      "A commitment requires negotiating with other agents, while an intention never involves other agents",
    ],
    correctAnswer: 2,
    explanation:
      "Commitments describes a commitment as the act of selecting an option and locking in to pursue it, while Intentions describes the intention itself as the state of affairs the agent has chosen and committed to after deliberation, making the commitment the act and the intention the resulting state.\n\nAn informational state about the world describes Belief, not commitment, and a motivational state describes Desire, not intention.\n\nA commitment occurring only after an intention has already been achieved reverses the actual order, since a commitment is what produces an intention in the first place.\n\nRequiring negotiation with other agents describes social ability, not a distinction between commitment and intention.",
  },
  {
    id: "cpe310_ch5_027",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How is an intention defined for an agent viewed as an intentional system?",
    options: [
      "Percepts produced by the see function",
      "A discrete set of finite environment states",
      "The mechanism used to update an agent's internal state",
      "The state of affairs an agent has committed to",
    ],
    correctAnswer: 3,
    explanation:
      "Intentions defines intentions as the state of affairs an agent has chosen and committed to after deliberation.\n\nPercepts produced by the see function describe Per, a formal component of agents with state, not intentions.\n\nA discrete set of finite environment states describes E, not intentions.\n\nThe mechanism used to update an agent's internal state describes the next function, not intentions.",
  },
  {
    id: "cpe310_ch5_028",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Why are intentions described as stronger than mere desires?",
    options: [
      "Because intentions tend to lead to action, while a desire alone does not carry that same commitment",
      "Because intentions are informational states about the world, while desires are not",
      "Because intentions never require the agent to perceive its environment",
      "Because intentions are the only component evaluated by the filter function",
    ],
    correctAnswer: 0,
    explanation:
      "Intentions states that intentions tend to lead to action, since they are stronger than mere desires, distinguishing a committed intention from an unacted-upon desire.\n\nBeing an informational state about the world describes Belief, not the distinction between intentions and desires.\n\nIntentions do not bypass perception, since the agent's decisions throughout the model depend on perceiving the environment.\n\nThe filter function is described as the mechanism for selecting a commitment, not as evaluating intentions exclusively.",
  },
  {
    id: "cpe310_ch5_029",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What happens once an agent adopts an intention?",
    options: [
      "The agent immediately drops all of its beliefs about the world",
      "The agent initiates a plan to achieve it",
      "The agent's repertoire of actions Ac is permanently reduced to one action",
      "The agent stops perceiving the environment until the intention is achieved",
    ],
    correctAnswer: 1,
    explanation:
      "Intentions states that once an intention is adopted, the agent initiates a plan to achieve it.\n\nDropping all beliefs about the world is not described as a consequence of adopting an intention, and beliefs remain the agent's informational state independently of its intentions.\n\nPermanently reducing Ac to one action is not described anywhere in the notes as a consequence of adopting an intention.\n\nAn agent is not described as ceasing to perceive its environment once it adopts an intention, since agents with state continue to perceive through the see function.",
  },
  {
    id: "cpe310_ch5_030",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What is expected of an agent, in terms of intention persistence, when its first attempt to achieve an intention fails?",
    options: [
      "It should adopt a completely different intention unrelated to the original goal",
      "It should immediately drop the intention regardless of the reason for failure",
      "It should try again, since intentions should not be dropped without a good reason",
      "It should revert to being a purely reactive agent with no internal state",
    ],
    correctAnswer: 2,
    explanation:
      "Intentions persist states that agents should not drop their intentions without a good reason, and that if the first attempt fails, the agent should try again.\n\nAdopting a completely different, unrelated intention is not what persistence describes, since persistence is about continuing to pursue the same intention.\n\nImmediately dropping the intention regardless of the reason for failure directly contradicts the requirement not to drop intentions without a good reason.\n\nReverting to a purely reactive agent with no internal state is not described anywhere as a response to a failed attempt.",
  },
  {
    id: "cpe310_ch5_031",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent should abandon an intention immediately after its first attempt fails, without trying again.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation:
      "Intentions persist states the opposite: agents should not drop their intentions without a good reason, and if the first attempt fails, the agent should try again rather than abandoning it immediately.",
  },
  {
    id: "cpe310_ch5_032",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which of the following is one of the conditions under which it is rational for an agent to drop an intention?",
    options: [
      "The agent's repertoire of actions has changed",
      "The agent has negotiated a new goal with another agent",
      "The agent's internal state has been updated by the next function",
      "The agent believes the intention has been successfully achieved",
    ],
    correctAnswer: 3,
    explanation:
      "Conditions for rationally dropping an intention lists the agent believing the intention has been successfully achieved as one of three conditions for rationally dropping it.\n\nA change in the agent's repertoire of actions is not one of the three listed conditions.\n\nNegotiating a new goal with another agent describes social ability, not one of the listed conditions for dropping an intention.\n\nThe internal state being updated by the next function is a routine part of an agent with state operating, not one of the listed conditions for dropping an intention.",
  },
  {
    id: "cpe310_ch5_033",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Besides believing an intention has already been achieved, which other belief provides a rational condition for an agent to drop an intention?",
    options: [
      "The agent believes the intention can no longer be achieved",
      "The agent believes its beliefs about the world have changed in any way",
      "The agent believes another agent has adopted the same intention",
      "The agent believes its current environment state belongs to E",
    ],
    correctAnswer: 0,
    explanation:
      "Conditions for rationally dropping an intention lists the agent believing the intention can no longer be achieved as one of the three conditions.\n\nBeliefs about the world changing in any way is far broader than what the notes specify, since only the intention becoming unachievable, already achieved, or losing its reason are listed as conditions.\n\nAnother agent adopting the same intention is not one of the listed conditions.\n\nBelieving the current state belongs to E is simply a routine fact about perception, not one of the listed conditions for dropping an intention.",
  },
  {
    id: "cpe310_ch5_034",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "Which of the following is a condition under which it is rational for an agent to drop an intention?",
    options: [
      "The agent's battery has run low",
      "The reason for the intention is no longer valid",
      "All of these",
      "None of these",
    ],
    correctAnswer: 1,
    explanation:
      "Conditions for rationally dropping an intention lists the reason for the intention no longer being valid as one of the three stated conditions, so that option is correct. A battery running low is never mentioned anywhere in the notes as a condition for dropping an intention, so it is not supported, and since only one of the two specific options is supported, neither All of these nor None of these applies.",
  },
  {
    id: "cpe310_ch5_035",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "What does the Bratman Asymmetry Thesis claim about an agent that intends to achieve a goal?",
    options: [
      "That the agent must have already achieved the goal before forming the intention",
      "That the agent should believe that, given the right conditions, the goal will be achieved",
      "That the agent must abandon the goal if any risk of failure exists",
      "That the agent's beliefs about the goal are irrelevant to its intention",
    ],
    correctAnswer: 1,
    explanation:
      "The Bratman Asymmetry Thesis holds that if an agent intends to achieve a goal, it should believe that, given the right conditions, the goal will be achieved.\n\nThe thesis does not require the goal to already be achieved before the intention is formed, since intentions are formed toward goals not yet accomplished.\n\nAbandoning the goal at any risk of failure contradicts intention-belief incompleteness, which the thesis treats as acceptable rather than a reason to abandon the goal.\n\nThe thesis is specifically about the relationship between an agent's intention and its beliefs, so beliefs about the goal are central to it, not irrelevant.",
  },
  {
    id: "cpe310_ch5_036",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "The Bratman Asymmetry Thesis holds that an agent who intends to achieve a goal should believe that, under the right conditions, the goal will be achieved.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation:
      "This restates the Bratman Asymmetry Thesis exactly as defined: if an agent intends to achieve a goal, it should believe that, given the right conditions, the goal will be achieved.",
  },
  {
    id: "cpe310_ch5_037",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How does the Bratman Asymmetry Thesis describe intention-belief inconsistency?",
    options: [
      "Intending a goal while not fully believing it will happen, acknowledging possible failure",
      "Intending a goal while also believing another agent shares the same goal",
      "Intending a goal while simultaneously believing that goal will not be achieved",
      "Intending a goal that requires negotiating with other agents",
    ],
    correctAnswer: 2,
    explanation:
      "The Bratman Asymmetry Thesis describes intention-belief inconsistency as irrational: intending a goal while simultaneously believing you will not achieve it.\n\nIntending a goal while not fully believing it will be the case, while acknowledging the possibility of failure, is instead how the thesis describes intention-belief incompleteness, which it treats as acceptable rather than inconsistent.\n\nBelieving another agent shares the same goal is not part of the thesis's definition of inconsistency, which concerns the agent's own belief about its own goal.\n\nRequiring negotiation with other agents describes social ability, not intention-belief inconsistency.",
  },
  {
    id: "cpe310_ch5_038",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "An agent commits to delivering a package by 5pm while simultaneously believing it has no realistic chance of making the deadline. How does the Bratman Asymmetry Thesis classify this agent's state?",
    options: [
      "Rational, because intentions are always stronger than beliefs",
      "Intention-belief incompleteness, since some doubt about success is always acceptable",
      "A commitment, since the agent has locked in to a delivery time",
      "Intention-belief inconsistency, since intending a goal while expecting it to fail is irrational",
    ],
    correctAnswer: 3,
    explanation:
      "The Bratman Asymmetry Thesis classifies intending a goal while simultaneously believing it will not be achieved as intention-belief inconsistency, described as irrational, which matches an agent believing it has no realistic chance of meeting a deadline it has committed to.\n\nCalling this rational misstates the thesis, which specifically labels this pattern as irrational rather than a normal case of intentions overriding beliefs.\n\nIntention-belief incompleteness describes merely not being fully certain of success while still believing it is possible, not believing success is unrealistic altogether, so it does not fit this scenario.\n\nWhile the agent has indeed formed a commitment, the thesis specifically addresses the mismatch between the intention and belief here, which is classified as inconsistency, not simply relabeled as a commitment.",
  },
  {
    id: "cpe310_ch5_039",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "How does the Bratman Asymmetry Thesis describe intention-belief incompleteness?",
    options: [
      "Intending a goal while not fully believing it will happen",
      "Intending a goal while simultaneously believing that goal will not be achieved",
      "Dropping an intention as soon as the first attempt fails",
      "Refusing to form any intention unless success is fully guaranteed",
    ],
    correctAnswer: 0,
    explanation:
      "The Bratman Asymmetry Thesis describes intention-belief incompleteness as intending a goal while not fully believing the goal will be the case, acknowledging the possibility of failure, and treats this as acceptable.\n\nIntending a goal while simultaneously believing it will not be achieved instead describes intention-belief inconsistency, which the thesis treats as irrational rather than acceptable.\n\nDropping an intention as soon as the first attempt fails contradicts intention persistence, which calls for trying again rather than dropping the intention.\n\nRefusing to form any intention unless success is fully guaranteed is not described anywhere in the thesis, which explicitly accepts incomplete belief in success as normal.",
  },
  {
    id: "cpe310_ch5_040",
    course: "CPE 310",
    chapter: "Chapter 2",
    text: "A student commits to passing an upcoming exam while privately acknowledging there is some chance of failing despite their best effort. Which part of the Bratman Asymmetry Thesis does this best illustrate?",
    options: [
      "Intention-belief inconsistency, since any acknowledged chance of failure is irrational",
      "Intention-belief incompleteness, since the student believes success is possible but not guaranteed",
      "A purely reactive response to the current state of exam preparation",
      "A commitment that has already been successfully achieved",
    ],
    correctAnswer: 1,
    explanation:
      "Intention-belief incompleteness describes intending a goal while not fully believing it will be the case, acknowledging the possibility of failure, which matches a student who commits to passing while acknowledging some chance of failing.\n\nIntention-belief inconsistency instead requires believing the goal will not be achieved at all, not merely acknowledging some chance of failure, so it does not fit a student who still believes success is possible.\n\nA purely reactive response describes acting only on the current environment state with no history, unrelated to forming and holding an intention over time.\n\nCalling this an intention that has already been achieved misreads the scenario, since the exam and its outcome have not yet occurred.",
  },
];

export default cpe310Chapter2Questions;
