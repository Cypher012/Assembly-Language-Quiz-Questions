import { QuestionV2 } from "@/lib/quiz-types";

const cpe310Chapter5Questions: QuestionV2[] = [
  {
    id: "cpe310_ch5_001",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "An agent which displays flexible autonomy is termed an intelligent agent.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "The definition states that an agent which displays flexible autonomy is termed hereafter an intelligent agent."
  },
  {
    id: "cpe310_ch5_002",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is reactivity described as a characteristic of an intelligent agent?",
    options: [
      "The ability to react to environmental changes in a timely fashion",
      "Interacting with other agents through negotiation",
      "Generating and pursuing new goals without any external stimulus",
      "Maintaining complete, accurate information about the environment"
    ],
    correctAnswer: 0,
    explanation: "Characteristics of an Intelligent Agent describes reactivity as the ability to react to changes in the environment in a timely fashion, taking action based on those changes and the function the agent is designed to achieve.\n\nInteracting with other agents through negotiation describes social ability, not reactivity.\n\nGenerating and pursuing new goals without external stimulus describes pro-activeness, not reactivity.\n\nMaintaining complete, accurate information about the environment describes an accessible environment, not reactivity."
  },
  {
    id: "cpe310_ch5_003",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "If an agent loses communication with another agent whose services it needs, what does pro-activeness lead it to do?",
    options: [
      "Wait indefinitely until communication is restored",
      "Search for another agent that provides the same services",
      "Immediately terminate its current goal",
      "Revert to a purely reactive mode with no goals"
    ],
    correctAnswer: 1,
    explanation: "Characteristics of an Intelligent Agent describes pro-activeness as including the case where, if an agent loses communication with another agent whose services it requires, it will search for another agent that provides the same services.\n\nWaiting indefinitely contradicts pro-activeness, which is defined by taking the initiative rather than passively waiting.\n\nImmediately terminating the goal contradicts the goal-directed, adaptive nature of pro-activeness.\n\nReverting to a purely reactive mode with no goals is not described as a consequence of losing communication with another agent."
  },
  {
    id: "cpe310_ch5_004",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "What underpins an intelligent agent's ability to negotiate and interact cooperatively with other agents?",
    options: [
      "A fixed set of condition-action rules",
      "A single shared utility function used by every agent",
      "An agent communication language (ACL), enabling conversation, not just data passing",
      "A centralized controller that issues commands to all agents"
    ],
    correctAnswer: 2,
    explanation: "Characteristics of an Intelligent Agent states that social ability's negotiation and cooperative interaction is normally underpinned by an agent communication language, or ACL, which allows agents to converse rather than simply pass data.\n\nA fixed set of condition-action rules describes a simple reactive agent's decision mechanism, not what underpins social ability.\n\nA single shared utility function is not described as underpinning social ability or negotiation.\n\nA centralized controller issuing commands contradicts the autonomous, decentralized nature of agents negotiating with each other."
  },
  {
    id: "cpe310_ch5_005",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which of the following is listed among the other properties of an intelligent agent, alongside social ability, reactivity, and pro-activeness?",
    options: [
      "Mobility",
      "Veracity",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Characteristics of an Intelligent Agent lists mobility, learning/adaptation, veracity, and rationality as other properties, so both mobility and veracity are supported, making All of these correct."
  },
  {
    id: "cpe310_ch5_006",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is cooperation defined among intelligent agents?",
    options: [
      "The act of one agent issuing commands that another agent must obey",
      "A single agent solving a problem entirely on its own without any interaction",
      "A process where agents avoid all contact with each other to prevent conflict",
      "The willingness and capability of agents to work toward common or compatible goals"
    ],
    correctAnswer: 3,
    explanation: "Social Ability: Cooperation defines it as the willingness and capability of agents to work together toward common or compatible goals, even when they have their own individual objectives, occurring in a shared environment.\n\nOne agent issuing commands to another describes a controller relationship, not the mutual willingness cooperation requires.\n\nA single agent solving a problem alone is the opposite of cooperation, which requires working together.\n\nAvoiding all contact to prevent conflict is the opposite of cooperation, which is a deliberate, coordinated process of working together."
  },
  {
    id: "cpe310_ch5_007",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In a disaster response scenario, one agent handles victim localization using drones, another coordinates rescue teams, and a third manages medical resource allocation, all working toward saving lives. Which form of cooperation does this best illustrate?",
    options: [
      "Task-oriented cooperation",
      "Information-sharing cooperation",
      "Joint action cooperation",
      "Argumentation-based negotiation"
    ],
    correctAnswer: 0,
    explanation: "Forms of Cooperation describes task-oriented cooperation as agents dividing complex problems into subtasks and assigning them based on each agent's capabilities, giving this exact disaster response example.\n\nInformation-sharing cooperation instead involves agents exchanging partial observations or knowledge to build a more complete picture, not dividing subtasks among specialized agents.\n\nJoint action cooperation instead involves synchronizing physical or computational actions, such as robots jointly lifting an object, not dividing a task into separate subtasks.\n\nArgumentation-based negotiation is a form of negotiation involving offers and justifications, not a form of cooperation."
  },
  {
    id: "cpe310_ch5_008",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which form of cooperation involves agents exchanging partial observations or knowledge to build a more complete picture of the environment?",
    options: [
      "Task-oriented cooperation",
      "Information-sharing cooperation",
      "Joint action cooperation",
      "Bilateral negotiation"
    ],
    correctAnswer: 1,
    explanation: "Forms of Cooperation describes information-sharing cooperation as agents exchanging partial observations or knowledge to build a more complete picture of the environment.\n\nTask-oriented cooperation instead involves dividing complex problems into subtasks, not exchanging observations to build a shared picture.\n\nJoint action cooperation instead involves synchronizing physical or computational actions, not exchanging partial observations.\n\nBilateral negotiation is a form of negotiation between two agents bargaining directly, not a form of cooperation."
  },
  {
    id: "cpe310_ch5_009",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Multiple robots collaboratively lifting an object, and autonomous vehicles coordinating at an intersection to prevent collisions, are given as examples of joint action cooperation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Forms of Cooperation describes joint action cooperation as agents synchronizing their physical or computational actions, giving robots jointly lifting an object and vehicles coordinating at an intersection as its examples."
  },
  {
    id: "cpe310_ch5_010",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is coordination defined among intelligent agents?",
    options: [
      "The willingness of agents to work together toward a common goal",
      "The ability to reach agreements on matters of common interest",
      "A single agent's internal reasoning process, independent of other agents",
      "Managing the interdependencies between activities so individual actions contribute to a coherent collective outcome"
    ],
    correctAnswer: 3,
    explanation: "Social Ability: Coordination defines it as managing the interdependencies between activities, concerning the organized, harmonious, and efficient management of interdependent activities so individual actions contribute to a coherent collective outcome.\n\nThe willingness to work together toward a common goal describes cooperation, not coordination.\n\nThe ability to reach agreements on matters of common interest describes negotiation, not coordination.\n\nA single agent's internal reasoning process, independent of others, does not involve managing interdependencies between multiple agents' activities."
  },
  {
    id: "cpe310_ch5_011",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which mechanism of coordination relies on direct communication, negotiation protocols, and shared plans, using standardized agent communication languages and interaction protocols such as the Contract Net Protocol?",
    options: [
      "Explicit coordination",
      "Implicit coordination",
      "Argumentation-based negotiation",
      "Joint action cooperation"
    ],
    correctAnswer: 0,
    explanation: "Mechanisms of Coordination describes explicit coordination as relying on direct communication, negotiation protocols, and shared plans, using standardized agent communication languages such as FIPA ACL and protocols like the Contract Net Protocol.\n\nImplicit coordination instead emerges from local rules or stigmergy without explicit messaging, the opposite of direct communication.\n\nArgumentation-based negotiation is a form of negotiation involving justifications and critiques, not a mechanism of coordination.\n\nJoint action cooperation is a form of cooperation involving synchronized physical actions, not a coordination mechanism based on communication protocols."
  },
  {
    id: "cpe310_ch5_012",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In swarm robotics, simple local rules can lead to globally coordinated behavior such as flocking or foraging without a central commander. Which mechanism of coordination does this illustrate?",
    options: [
      "Explicit coordination",
      "Implicit coordination via stigmergy",
      "Bilateral negotiation",
      "Task-oriented cooperation"
    ],
    correctAnswer: 1,
    explanation: "Mechanisms of Coordination describes implicit coordination as emerging from local rules, stigmergy, or shared conventions without explicit messaging, giving the exact swarm robotics flocking and foraging example.\n\nExplicit coordination instead relies on direct communication and negotiation protocols, the opposite of the decentralized, ruleless approach in this example.\n\nBilateral negotiation is a form of negotiation between two agents bargaining directly, not a coordination mechanism among a swarm.\n\nTask-oriented cooperation involves dividing a problem into assigned subtasks, not emergent behavior from simple local rules."
  },
  {
    id: "cpe310_ch5_013",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is negotiation defined among intelligent agents?",
    options: [
      "The passive act of waiting for another agent to make the first move",
      "The management of interdependencies between unrelated activities",
      "The ability to reach agreements on matters of common interest",
      "A process that only occurs between agents with identical goals"
    ],
    correctAnswer: 2,
    explanation: "Social Ability: Negotiation defines it as the ability to reach agreements on matters of common interest, addressing situations where agents have conflicting interests, limited resources, or differing preferences.\n\nPassively waiting for another agent to move is the opposite of negotiation, which involves active dialogue, proposing offers, and making concessions.\n\nManaging interdependencies between activities describes coordination, not negotiation.\n\nNegotiation specifically addresses conflicting interests, so it is not restricted to agents with identical goals, which would have nothing to negotiate over."
  },
  {
    id: "cpe310_ch5_014",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which form of negotiation involves exactly two agents bargaining directly with each other?",
    options: [
      "Multi-lateral negotiation",
      "Argumentation-based negotiation",
      "Implicit coordination",
      "Bilateral negotiation"
    ],
    correctAnswer: 3,
    explanation: "Forms of Negotiation defines bilateral negotiation as two agents bargaining directly with each other.\n\nMulti-lateral negotiation instead involves three or more agents negotiating simultaneously, not exactly two.\n\nArgumentation-based negotiation is defined by the use of justifications and critiques rather than by the number of participating agents.\n\nImplicit coordination is a coordination mechanism involving stigmergy, not a form of negotiation."
  },
  {
    id: "cpe310_ch5_015",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Multi-lateral negotiation, involving three or more agents negotiating simultaneously, tends to be simpler than bilateral negotiation because fewer strategic interactions occur.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: Forms of Negotiation describes multi-lateral negotiation as significantly more complex than bilateral negotiation, due to coalition formation and strategic interactions among three or more agents."
  },
  {
    id: "cpe310_ch5_016",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which form of negotiation involves agents proposing offers while also providing justifications, critiques, or threats to persuade others?",
    options: [
      "Argumentation-based negotiation",
      "Bilateral negotiation",
      "Multi-lateral negotiation",
      "Explicit coordination"
    ],
    correctAnswer: 0,
    explanation: "Forms of Negotiation describes argumentation-based negotiation as agents proposing offers while also providing justifications, critiques, or threats to persuade others, typically involving offer and counter-offer with compromises.\n\nBilateral negotiation is defined by involving exactly two agents, not by the use of justifications or critiques.\n\nMulti-lateral negotiation is defined by involving three or more agents, not by the specific persuasive techniques used.\n\nExplicit coordination is a coordination mechanism relying on communication protocols, not a form of negotiation involving persuasion."
  },
  {
    id: "cpe310_ch5_017",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "What is warned as a possible consequence if agents do not negotiate?",
    options: [
      "Immediate and guaranteed cooperation between all agents",
      "Destructive competition, deadlock, or suboptimal outcomes",
      "Automatic formation of a shared utility function",
      "Complete elimination of resource conflicts"
    ],
    correctAnswer: 1,
    explanation: "Social Ability: Negotiation warns that without negotiation, agents might resort to destructive competition, deadlock, or suboptimal outcomes.\n\nGuaranteed cooperation is the opposite of what is warned; negotiation exists precisely because cooperation is not automatic when interests conflict.\n\nA shared utility function forming automatically is not described anywhere as a consequence of skipping negotiation.\n\nEliminating resource conflicts is not a described consequence; the notes instead warn of destructive competition and deadlock arising from unresolved conflicts."
  },
  {
    id: "cpe310_ch5_018",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is an object described, as contrasted with an agent?",
    options: [
      "An autonomous computational entity that perceives its environment and takes proactive actions to achieve goals",
      "An entity that always initiates communication with other entities on its own initiative",
      "A self-contained unit that encapsulates data and behavior, responding to messages but not initiating actions on its own unless explicitly invoked",
      "A system that reasons about its own goals and knowledge before acting"
    ],
    correctAnswer: 2,
    explanation: "Agents vs Objects describes an object as a self-contained unit encapsulating data and behavior, interacting through well-defined interfaces, responding to external messages but not initiating actions on its own unless explicitly invoked.\n\nBeing an autonomous computational entity that perceives and proactively acts describes an agent, the concept objects are being contrasted against.\n\nInitiating communication on its own initiative describes agent-like proactiveness, the opposite of an object's passive, invoked-only behavior.\n\nReasoning about its own goals and knowledge before acting describes an agent's deliberative capability, not an object's passive method invocation."
  },
  {
    id: "cpe310_ch5_019",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How does the key distinction between objects and agents get summarized?",
    options: [
      "Agents do it for free, while objects do it because they want to, or for money",
      "Objects and agents are described as functionally identical in every respect",
      "Objects always charge a fee, while agents always act for free",
      "Objects do it for free, while agents do it because they want to, or for money"
    ],
    correctAnswer: 3,
    explanation: "Agents vs Objects summarizes the key distinction as: objects do it for free, agents do it because they want to, agents do it for money.\n\nReversing the roles, with agents doing it for free and objects wanting or charging, inverts the actual summary given.\n\nThe notes explicitly draw a distinction between objects and agents through this quote, so they are not described as functionally identical.\n\nThe notes attribute charging or wanting to act to agents, not to objects, so this reversed claim about objects charging is incorrect."
  },
  {
    id: "cpe310_ch5_020",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which of the following is one of the two main components of a classic expert system?",
    options: [
      "Knowledge base",
      "Inference engine",
      "All of these",
      "None of these"
    ],
    correctAnswer: 2,
    explanation: "Agents vs Expert Systems describes an expert system as having two main components: a knowledge base of domain-specific facts and rules, and an inference engine that applies logical reasoning, so both are supported, making All of these correct."
  },
  {
    id: "cpe310_ch5_021",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "MYCIN, DENDRAL, and XCON are given as classic examples of expert systems. Which pairing correctly matches each system to its domain?",
    options: [
      "MYCIN configures computer systems, DENDRAL diagnoses bacterial infections, and XCON elucidates chemical structures",
      "MYCIN diagnoses bacterial infections, DENDRAL elucidates chemical structures, and XCON configures computer systems",
      "MYCIN elucidates chemical structures, DENDRAL configures computer systems, and XCON diagnoses bacterial infections",
      "All three systems perform the exact same function: medical diagnosis"
    ],
    correctAnswer: 1,
    explanation: "Agents vs Expert Systems lists MYCIN for medical diagnosis of bacterial infections, DENDRAL for chemical structure elucidation, and XCON for configuring computer systems.\n\nThe other reorderings swap these domains incorrectly; each system is tied to one specific, distinct domain in the notes.\n\nThe systems are explicitly listed with three different domains, not all performing the same medical diagnosis function."
  },
  {
    id: "cpe310_ch5_022",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How does being situated in an environment distinguish agents from expert systems?",
    options: [
      "Expert systems are constantly aware of their environment, more so than agents",
      "Both agents and expert systems are equally unaware of their environment",
      "Expert systems are unaware of their environment, unlike situated agents",
      "Only expert systems can be situated in an environment; agents cannot"
    ],
    correctAnswer: 2,
    explanation: "Agents vs Expert Systems states that agents are situated in an environment and make changes based on its current state, while expert systems are not aware of their environment.\n\nThe notes state the opposite: expert systems lack environmental awareness compared to agents, not the reverse.\n\nAgents are explicitly described as situated and aware, so it is not true that both are equally unaware.\n\nAgents, not expert systems, are the ones described as situated in an environment in this comparison."
  },
  {
    id: "cpe310_ch5_023",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is the relationship between intelligent agents and intelligent systems described?",
    options: [
      "Identical: every intelligent system is automatically an intelligent agent",
      "Unrelated: intelligent agents and intelligent systems share no common features",
      "Inverse: intelligent systems are a type of intelligent agent",
      "Hierarchical: an intelligent agent is a type of intelligent system"
    ],
    correctAnswer: 3,
    explanation: "Agents vs Artificial Intelligence describes the relationship as hierarchical: an intelligent agent is a type of intelligent system, but not all intelligent systems qualify as agents.\n\nTreating them as identical contradicts the hierarchical relationship, since some intelligent systems, like passive rule-based systems, do not qualify as agents.\n\nThe notes explicitly relate the two concepts hierarchically, so they are not described as unrelated.\n\nThe hierarchy runs the other direction: agents are a subset of intelligent systems, not the reverse."
  },
  {
    id: "cpe310_ch5_024",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In the interaction cycle between an agent and its environment, what happens immediately after the agent receives a percept at time t?",
    options: [
      "The agent selects an action based on its state",
      "The environment immediately resets to its initial state",
      "The cycle ends permanently",
      "The agent ignores the percept and repeats its previous action"
    ],
    correctAnswer: 0,
    explanation: "The Interaction Cycle describes the sequence as: the agent receives a percept, then based on its internal state and the percept, the agent selects an action, which is then executed.\n\nThe environment resetting to its initial state is not part of the interaction cycle, which describes a transition to a new state, not a reset.\n\nThe cycle is explicitly described as repeating, not ending permanently after one percept.\n\nSelecting an action based on the percept is precisely what happens next, so ignoring the percept and repeating the previous action contradicts the described cycle."
  },
  {
    id: "cpe310_ch5_025",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In the mathematical expression of an agent's behavior, what does the agent function f map?",
    options: [
      "Environment states directly to a single fixed action",
      "Percept sequences to actions",
      "Utility values to probability distributions",
      "Actions to the percepts that caused them"
    ],
    correctAnswer: 1,
    explanation: "Mathematical Expression defines the agent function as f mapping P, the set of percept sequences, to A star, meaning it maps percept sequences to actions.\n\nMapping environment states directly to a single fixed action describes a purely reactive agent's simplified function, not this general percept-sequence-based agent function.\n\nMapping utility values to probability distributions is not how the agent function f is defined.\n\nMapping actions back to the percepts that caused them reverses the actual direction of the agent function, which goes from percepts to actions."
  },
  {
    id: "cpe310_ch5_026",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is an accessible environment described?",
    options: [
      "One in which the next state is completely determined by the current state and action alone",
      "One in which performance depends on discrete episodes with no link between them",
      "One in which the agent can obtain complete, accurate, up-to-date information about the environment's state",
      "One that does not change while the agent is deliberating"
    ],
    correctAnswer: 2,
    explanation: "Environment Characteristics describes an accessible environment as one in which the agent can obtain complete, accurate, up-to-date information about the environment's state.\n\nThe next state being completely determined by the current state and action describes a deterministic environment, not accessibility.\n\nPerformance depending on discrete episodes describes an episodic environment, not accessibility.\n\nNot changing while the agent deliberates describes a static environment, not accessibility."
  },
  {
    id: "cpe310_ch5_027",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "A deterministic environment is one in which the next state is given by a probability distribution over possible outcomes, written P(s_t+1 | s_t, a_t).",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 1,
    explanation: "This is false: a deterministic environment is one in which the next state is completely determined by the current state and action, written s_t+1 equals delta of s_t and a_t. A probability distribution over possible next states instead describes a stochastic environment."
  },
  {
    id: "cpe310_ch5_028",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Why are episodic environments described as simpler from the developer's perspective?",
    options: [
      "Episodic environments always guarantee a deterministic outcome",
      "Episodic environments never require the agent to perceive anything",
      "Episodic environments are always fully accessible",
      "The agent decides using only the current episode"
    ],
    correctAnswer: 3,
    explanation: "Environment Characteristics explains that episodic environments are simpler because the agent decides its action based only on the current episode, without needing to reason about interactions between this and future episodes.\n\nDeterminism is a separate property from episodicity, and episodic environments are not automatically deterministic.\n\nEpisodic environments still require perception of the current episode; the simplification is about not reasoning across episodes, not about skipping perception.\n\nAccessibility is a separate property from episodicity, and episodic environments are not automatically accessible."
  },
  {
    id: "cpe310_ch5_029",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How does a dynamic environment differ from a static one?",
    options: [
      "A dynamic environment can change independently of the agent's actions, since other processes operate on it beyond the agent's control",
      "A dynamic environment never changes at all, even when the agent acts",
      "A dynamic environment only changes when the agent explicitly requests a change",
      "A dynamic environment is always simpler to design agents for than a static one"
    ],
    correctAnswer: 0,
    explanation: "Environment Characteristics describes a dynamic environment as one that can change independently of the agent's actions, since other processes operate on it, changing it beyond the agent's control, with the physical world given as a highly dynamic example.\n\nNever changing at all describes a static environment, the opposite of dynamic.\n\nOnly changing when the agent explicitly requests it describes a static environment under the agent's control, not a dynamic one that changes independently.\n\nDynamic environments are generally harder, not simpler, to design agents for, since they introduce unpredictable change beyond the agent's control."
  },
  {
    id: "cpe310_ch5_030",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Chess is given as an example of which type of environment, in contrast to the continuous environment of self-driving car control?",
    options: [
      "Inaccessible",
      "Discrete, finite states",
      "Non-episodic",
      "Dynamic"
    ],
    correctAnswer: 1,
    explanation: "Environment Characteristics gives chess as an example of a discrete environment, with a finite number of states, actions, and percepts, contrasted with continuous environments like self-driving car control.\n\nAccessibility is a separate dichotomy, and chess is not specifically named as an example of inaccessibility in this discrete versus continuous discussion.\n\nEpisodicity is a separate dichotomy from discreteness, and chess is not used as the example for that distinction here.\n\nStaticness versus dynamism is a separate dichotomy, and chess is specifically the example given for discreteness, not for being dynamic."
  },
  {
    id: "cpe310_ch5_031",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which combination of environment properties is described as the simplest for agent design, offering perfect information and predictable outcomes, as in chess or the 8-puzzle?",
    options: [
      "Inaccessible, stochastic, dynamic, and continuous",
      "Accessible, stochastic, dynamic, and discrete",
      "Accessible, deterministic, static, and discrete",
      "Inaccessible, deterministic, static, and continuous"
    ],
    correctAnswer: 2,
    explanation: "Types of Agent Environment describes accessible, deterministic, static, and discrete as the simplest combination for agent design, offering perfect information and predictable outcomes, with chess and the 8-puzzle as examples.\n\nInaccessible, stochastic, dynamic, and continuous is instead described as the extremely challenging combination, the opposite extreme.\n\nMixing stochastic and dynamic properties into an otherwise simple combination does not match the specific all-simple combination described as simplest.\n\nMixing inaccessible and continuous properties into an otherwise simple combination does not match the specific all-simple combination described as simplest."
  },
  {
    id: "cpe310_ch5_032",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "A self-driving car operating in real traffic is given as an example of which combination of environment properties?",
    options: [
      "Accessible, deterministic, static, and discrete",
      "Accessible, deterministic, dynamic, and discrete",
      "Inaccessible, deterministic, static, and continuous",
      "Inaccessible, stochastic, dynamic, and continuous"
    ],
    correctAnswer: 3,
    explanation: "Types of Agent Environment gives a self-driving car in real traffic as an example of an inaccessible, stochastic, dynamic, and continuous environment, described as extremely challenging and requiring probabilistic reasoning, prediction, and real-time adaptation.\n\nAccessible, deterministic, static, and discrete instead describes the simplest combination, exemplified by chess, the opposite of a self-driving car's real-world complexity.\n\nMixing accessible and deterministic properties into an otherwise challenging combination does not match how the self-driving car example is classified.\n\nMixing deterministic and static properties into an otherwise challenging combination does not match how the self-driving car example is classified."
  },
  {
    id: "cpe310_ch5_033",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Autonomous vehicle coordination at intersections, where agents must reason about other agents' possible actions, is given as an example of which type of environment?",
    options: [
      "A multi-agent environment with opponent modeling",
      "A purely static environment",
      "A purely episodic environment",
      "A discrete environment with a single agent"
    ],
    correctAnswer: 0,
    explanation: "Types of Agent Environment gives autonomous vehicle coordination at intersections as an example of a multi-agent environment, where agents must reason about other agents' possible actions using game theory and opponent modeling.\n\nStaticness concerns whether the environment changes independently of the agent, a separate dichotomy from the multi-agent framing of this example.\n\nEpisodicity concerns whether performance links across discrete episodes, a separate dichotomy from the multi-agent framing here.\n\nThis example specifically involves multiple agents reasoning about each other, the opposite of a single-agent environment."
  },
  {
    id: "cpe310_ch5_034",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Why is the intentional stance, attributing beliefs, desires, and intentions to an agent, considered useful?",
    options: [
      "It guarantees that the agent will always behave in a fully deterministic manner",
      "It lets complex agents be described in a natural, human-like way",
      "It removes the need for the agent to have any goals at all",
      "It is required by law for all agent-based systems"
    ],
    correctAnswer: 1,
    explanation: "Agents as Intentional System states that the intentional stance allows complex autonomous agents to be described, designed, and reasoned about in a natural, human-like way, without needing to delve into low-level implementation details.\n\nThe intentional stance is an explanatory abstraction and does not guarantee determinism in the underlying system.\n\nAttributing desires is central to the intentional stance, since desires represent the goals an agent wants to achieve, not their removal.\n\nThe intentional stance is presented as a useful explanatory tool, not a legal requirement."
  },
  {
    id: "cpe310_ch5_035",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In the BDI model, what do beliefs represent?",
    options: [
      "Goals or preferred states the agent wants to achieve",
      "Committed plans or courses of action the agent has chosen to pursue",
      "Information the agent holds about the world, what it knows",
      "The set of all actions available to the agent"
    ],
    correctAnswer: 2,
    explanation: "The Three Mental Attitudes defines beliefs as information the agent holds about the world and its current state, what it knows or thinks is true.\n\nGoals or preferred states the agent wants to achieve describe desires, not beliefs.\n\nCommitted plans or courses of action describe intentions, not beliefs.\n\nThe set of all available actions describes Ac from the formal architecture, not a BDI component."
  },
  {
    id: "cpe310_ch5_036",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In the BDI model, what do intentions represent?",
    options: [
      "Information the agent holds about the world",
      "Goals or preferred states the agent wants to achieve",
      "The percepts an agent receives from its sensors",
      "Committed plans or courses of action the agent has chosen"
    ],
    correctAnswer: 3,
    explanation: "The Three Mental Attitudes defines intentions as committed plans or courses of action the agent has chosen to pursue, what it has decided to do.\n\nInformation the agent holds about the world describes beliefs, not intentions.\n\nGoals or preferred states the agent wants to achieve describe desires, not intentions.\n\nThe percepts an agent receives from its sensors describe Per, a formal perception component, not a BDI component."
  },
  {
    id: "cpe310_ch5_037",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Why is the intentional stance said to become more necessary as computer systems grow more complex?",
    options: [
      "Because mechanistic explanations become impractical for very complex systems",
      "Because complex systems no longer have any internal mechanism to describe",
      "Because simpler systems require more powerful abstractions than complex ones",
      "Because the intentional stance eliminates the need for any explanation of behavior"
    ],
    correctAnswer: 0,
    explanation: "Why the Intentional Stance explains that with very complex systems, a mechanistic explanation of behavior may not be practicable, and as computer systems become more complex, more powerful abstractions and metaphors are needed since low-level explanations become impractical.\n\nComplex systems still have an internal mechanism; the issue is that describing it mechanistically becomes impractical, not that no mechanism exists.\n\nThe notes state the opposite relationship: it is complex systems, not simple ones, that most need powerful abstractions like the intentional stance.\n\nThe intentional stance is itself a form of explanation, an abstraction tool, not a way to eliminate explanation altogether."
  },
  {
    id: "cpe310_ch5_038",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a point in favour of treating agents as intentional systems?",
    options: [
      "Guaranteed determinism in every agent's behavior",
      "Elimination of the need for any environment model",
      "All of these",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Points in Favour of This Idea lists nested representations, characterising agents, and post-declarative systems as points in favour. Neither guaranteed determinism nor eliminating the need for an environment model is one of these listed points, so neither specific option is supported and None of these is correct."
  },
  {
    id: "cpe310_ch5_039",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "With agents, in the post-declarative systems view of programming, what do we give the system rather than exact instructions?",
    options: [
      "A complete, line-by-line procedural script covering every possible situation",
      "A high-level description of the delegated goal to figure out itself",
      "Nothing at all, since agents require no input whatsoever",
      "Only raw sensor data, with no goal description of any kind"
    ],
    correctAnswer: 1,
    explanation: "Post-Declarative Systems states that with agents, we give a high-level description of the delegated goal, letting the control mechanism figure out what to do, knowing it will act in accordance with some built-in theory of rationality.\n\nA complete, line-by-line procedural script describes procedural programming, the approach agents are contrasted against.\n\nAgents require at least a delegated goal to pursue; they are not described as requiring no input at all.\n\nAgents are given a goal description, not merely raw sensor data with no indication of what to achieve."
  },
  {
    id: "cpe310_ch5_040",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In the formal setup of abstract agent architecture, what does the set Ac represent?",
    options: [
      "A finite set of discrete environment states",
      "The set of all percepts an agent can receive",
      "A repertoire of possible actions available to agents",
      "The set of all agents that exist"
    ],
    correctAnswer: 2,
    explanation: "Formal Setup defines Ac as the repertoire of possible actions available to agents, which transform the state of the environment.\n\nA finite set of discrete environment states describes E, not Ac.\n\nThe set of all percepts describes Per, introduced later in the perception system, not Ac.\n\nThe set of all agents is denoted AG, a different formal object from Ac."
  },
  {
    id: "cpe310_ch5_041",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "What does the state transformer function tau represent in the formal architecture?",
    options: [
      "The agent's internal decision-making process",
      "The percepts produced by the see function",
      "The utility of a given run",
      "A function mapping actions to resulting states"
    ],
    correctAnswer: 3,
    explanation: "Environment (State Transformer Function) defines tau as a function representing the behaviour of the environment, mapping R superscript Ac to a set of possible environment states, and notes that this behaviour is history-dependent and non-deterministic.\n\nThe agent's internal decision-making process is represented by the agent function Ag, not by tau, which represents the environment's behavior.\n\nPercepts produced by the see function are denoted Per, a separate formal object from tau.\n\nThe utility of a run is given by a utility function u, a separate formal object from tau."
  },
  {
    id: "cpe310_ch5_042",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is an environment Env formally defined as a triple in the abstract architecture?",
    options: [
      "Env equals E, e0, and tau: the set of states, the initial state, and the state transformer function",
      "Env equals Ac, R, and u: the action set, the run set, and a utility function",
      "Env equals I, Per, and next: the internal states, percepts, and next-state function",
      "Env equals G, B, and Psi: the goal states, bad states, and a predicate task specification"
    ],
    correctAnswer: 0,
    explanation: "Environment Triple formally defines an environment as Env equals E, e0, tau, where E is the set of environment states, e0 is the initial state, and tau is the state transformer function.\n\nAc, R, and u are separate formal objects used elsewhere, not the components of the environment triple.\n\nI, Per, and next belong to the state-based agent model, not the environment triple.\n\nG, B, and Psi belong to the later achievement and maintenance task definitions, not the environment triple."
  },
  {
    id: "cpe310_ch5_043",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is an agent formally modeled as a function in the abstract architecture?",
    options: [
      "Ag maps a single environment state directly to an action, with no reference to history",
      "Ag maps runs ending in a state to an action, based on the history witnessed",
      "Ag maps a task environment to an agent or the null value",
      "Ag maps a percept sequence to a probability distribution over utility values"
    ],
    correctAnswer: 1,
    explanation: "Agent Function defines an agent Ag as a function mapping runs, R superscript E, to actions in Ac, making a decision based on the history of the system it has witnessed to date.\n\nMapping a single environment state directly to an action with no reference to history describes a purely reactive agent, not this general agent function.\n\nMapping a task environment to an agent or the null value describes the synthesis function syn, not the agent function.\n\nMapping a percept sequence to a probability distribution over utility values is not how the agent function is defined."
  },
  {
    id: "cpe310_ch5_044",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is a system defined in the formal architecture?",
    options: [
      "A single function mapping task environments to agents",
      "A triple containing beliefs, desires, and intentions",
      "A pair containing an agent and an environment",
      "A set of percepts received over time"
    ],
    correctAnswer: 2,
    explanation: "System defines a system as a pair containing an agent and an environment, with the associated set of possible runs denoted R of Ag and Env.\n\nA single function mapping task environments to agents describes agent synthesis, syn, not a system.\n\nA triple of beliefs, desires, and intentions describes the BDI model of an agent's mental attitudes, not the formal definition of a system.\n\nA set of percepts received over time describes a percept sequence, not the formal definition of a system."
  },
  {
    id: "cpe310_ch5_045",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is a purely reactive agent's decision function defined?",
    options: [
      "Action maps R superscript E to Ac, basing decisions on the full history witnessed so far",
      "Action maps I times Per to I, updating an internal state from a percept",
      "Action maps a task environment to an agent or the null value",
      "Action maps E to Ac, basing decisions entirely on the present with no reference to the past"
    ],
    correctAnswer: 3,
    explanation: "Purely Reactive Agent defines its decision function as Action mapping E to Ac, with decision making based entirely on the present, with no reference at all to the past, giving a thermostat as an example.\n\nMapping R superscript E to Ac, using the full history, describes the general agent function Ag, the opposite of purely reactive behaviour.\n\nMapping I times Per to I describes the next function used by state-based agents, not a purely reactive agent.\n\nMapping a task environment to an agent or the null value describes the synthesis function syn, not a purely reactive agent's decision function."
  },
  {
    id: "cpe310_ch5_046",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In the perception system, what is the output of the see function?",
    options: [
      "A percept, produced by mapping environment states to percepts",
      "A completed action performed in the environment",
      "A fully updated internal world model",
      "A utility value assigned to the current state"
    ],
    correctAnswer: 0,
    explanation: "Formalizing Perception describes the see function's output as a percept, formally see mapping E to Per, mapping environment states to percepts.\n\nA completed action describes the output of the action function, not see.\n\nA fully updated internal world model describes the output of the next function in a state-based agent, not see.\n\nA utility value assigned to the current state describes the output of a utility function, not see."
  },
  {
    id: "cpe310_ch5_047",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which stage of the perception system involves acquiring raw data from the environment through sensors such as cameras, microphones, or GPS?",
    options: [
      "Preprocessing",
      "Sensing",
      "Feature Extraction",
      "Interpretation"
    ],
    correctAnswer: 1,
    explanation: "Perception System Tasks describes Sensing as acquiring raw data from the environment through sensors, such as cameras, microphones, temperature sensors, and GPS.\n\nPreprocessing instead involves filtering noise, normalizing data, and fusing information from multiple sensors, a step that comes after raw data is sensed.\n\nFeature Extraction instead involves identifying relevant patterns or features from raw sensory data, a further step beyond raw acquisition.\n\nInterpretation instead involves transforming low-level data into higher-level representations, the final stage, not the raw data acquisition stage."
  },
  {
    id: "cpe310_ch5_048",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which stage of the perception system involves filtering noise, normalizing data, and fusing information from multiple sensors?",
    options: [
      "Sensing",
      "Feature Extraction",
      "Preprocessing, including sensor fusion",
      "Interpretation"
    ],
    correctAnswer: 2,
    explanation: "Perception System Tasks describes Preprocessing as filtering noise, normalizing data, and fusing information from multiple sensors, referred to as sensor fusion.\n\nSensing instead involves acquiring the raw data itself, before it is filtered or fused.\n\nFeature Extraction instead involves identifying relevant patterns from data that has already been preprocessed.\n\nInterpretation instead involves transforming data into higher-level representations, a stage that follows preprocessing and feature extraction."
  },
  {
    id: "cpe310_ch5_049",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which stage of the perception system involves identifying relevant patterns, such as detecting edges in images or recognizing speech commands?",
    options: [
      "Sensing",
      "Preprocessing",
      "Interpretation",
      "Feature Extraction"
    ],
    correctAnswer: 3,
    explanation: "Perception System Tasks describes Feature Extraction as identifying relevant patterns or features from raw sensory data, such as detecting edges in images, recognizing speech commands, or identifying obstacles.\n\nSensing instead involves acquiring the raw data before any pattern identification occurs.\n\nPreprocessing instead involves filtering noise and fusing sensor data, a step that precedes identifying specific patterns.\n\nInterpretation instead involves transforming extracted features into higher-level symbolic or probabilistic representations, a step that follows feature extraction."
  },
  {
    id: "cpe310_ch5_050",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which stage of the perception system transforms low-level sensory data into higher-level symbolic or probabilistic representations the agent's reasoning system can use?",
    options: [
      "Interpretation",
      "Sensing",
      "Preprocessing",
      "Feature Extraction"
    ],
    correctAnswer: 0,
    explanation: "Perception System Tasks describes Interpretation as transforming low-level sensory data into higher-level symbolic or probabilistic representations the agent's reasoning system can use, the final of the four stages.\n\nSensing instead involves acquiring raw data, the first stage, well before any high-level representation is formed.\n\nPreprocessing instead involves filtering and fusing raw data, an earlier stage than forming high-level representations.\n\nFeature Extraction instead involves identifying patterns within the data, a step that precedes the final interpretation into high-level representations."
  },
  {
    id: "cpe310_ch5_051",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In a state-based agent, what does the policy function pi represent?",
    options: [
      "A function mapping an action to its cause",
      "A function mapping a state to an action",
      "The set of all possible internal states",
      "The probability that a run succeeds"
    ],
    correctAnswer: 1,
    explanation: "Components of a State-based Agent describes the action-selection function as defined through a policy function, written a_t equals pi of s_t, mapping a state to an action.\n\nMapping an action back to the state that caused it reverses the actual direction of the policy function, which goes from state to action.\n\nThe set of all possible internal states is denoted I, a separate formal object from the policy function itself.\n\nThe probability that a run succeeds relates to a predicate task specification, a different formal concept from the policy function."
  },
  {
    id: "cpe310_ch5_052",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In a state-based agent, the transition function f determines the next state, written S_t+1 equals f(S_t, a_t). What does this function allow for?",
    options: [
      "Only deterministic transitions, never stochastic ones",
      "Only transitions that ignore the current action entirely",
      "Both deterministic and stochastic transitions, depending on the function",
      "Only transitions where the next state always equals the current state"
    ],
    correctAnswer: 2,
    explanation: "Next State Function states that the transition function f can be deterministic or stochastic, and for stochastic functions the probability notation P of S_t+1 given S_t and a_t is used.\n\nRestricting to only deterministic transitions contradicts the explicit statement that f can also be stochastic.\n\nThe transition function is explicitly defined in terms of the current state and the action taken, not by ignoring the action.\n\nThe transition function models a change to a new state based on the action taken, not a function that always leaves the state unchanged."
  },
  {
    id: "cpe310_ch5_053",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "What is the correct order of steps in the agent control loop for a state-based agent?",
    options: [
      "Select an action first, then observe the current state afterward",
      "The environment transitions to a new state before the agent has observed anything",
      "The process runs exactly once and then halts permanently",
      "Observe the state, select an action, transition, then repeat"
    ],
    correctAnswer: 3,
    explanation: "Agent Control Loop describes the iterative order as: the agent observes the current state, selects an action using its policy function, the environment transitions to a new state using the transition function, and the process repeats.\n\nSelecting an action before observing the state reverses the actual order, since the policy function depends on the observed state.\n\nThe environment transitioning before any observation contradicts the described loop, where observation comes first.\n\nThe loop is explicitly described as operating iteratively and repeating, not running once and halting."
  },
  {
    id: "cpe310_ch5_054",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "What is the central role of a utility function over states in an agent's decision-making?",
    options: [
      "It formally evaluates how desirable a state is for rational choice",
      "It determines the exact percept sequence an agent will receive",
      "It replaces the need for the agent to ever perceive its environment",
      "It guarantees that the agent's environment is fully accessible"
    ],
    correctAnswer: 0,
    explanation: "Utility Functions over States describes utility as playing a central role in decision-making, especially for rational agents aiming to choose actions leading to the most favourable outcomes, by assigning a real numerical value to each state.\n\nA utility function does not determine the percept sequence an agent receives; percepts come from the see function observing the environment.\n\nA utility function evaluates states but does not remove the need for the agent to perceive its environment in order to know its current state.\n\nAccessibility is a separate property of the environment itself, not something a utility function guarantees."
  },
  {
    id: "cpe310_ch5_055",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How does a utility function over runs differ from a utility function over states?",
    options: [
      "It only ever evaluates the very first state in a run, ignoring everything after",
      "It assigns a value to a complete run, taking a long-term view",
      "It is identical in every respect to a utility function over states",
      "It cannot be expressed as a function at all"
    ],
    correctAnswer: 1,
    explanation: "Utility Function over Run describes it as assigning a value to a complete history of interaction, taking an inherently long-term view, evaluating the entire run rather than individual states.\n\nEvaluating only the first state and ignoring the rest contradicts the description of evaluating the entire run as a whole.\n\nThe notes explicitly distinguish utility over runs, U mapping R to the real numbers, from utility over states, U mapping E to the real numbers, so they are not identical.\n\nA utility function over runs is explicitly given a formal notation, U of R to the real numbers, so it can be expressed as a function."
  },
  {
    id: "cpe310_ch5_056",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a problem with utility-based approaches?",
    options: [
      "Utility-based approaches always produce perfectly accurate results",
      "Utility functions eliminate all uncertainty in the environment",
      "Difficulty in defining the utility function itself",
      "Utility-based approaches require no computation whatsoever"
    ],
    correctAnswer: 2,
    explanation: "Problems with Utility-based Approaches lists difficulty in defining the utility function as one of the problems, alongside the need to evaluate many possible actions and outcomes, and dealing with uncertainty and incomplete information.\n\nAlways producing perfectly accurate results contradicts the listed problems, which highlight difficulty and uncertainty rather than guaranteed accuracy.\n\nEliminating all uncertainty is the opposite of what is listed; uncertainty and incomplete information are explicitly named as a problem.\n\nRequiring no computation contradicts the listed problem that maximizing utility requires evaluating many possible actions and outcomes."
  },
  {
    id: "cpe310_ch5_057",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "In the Tileworld simulation, how does an agent score points?",
    options: [
      "By avoiding all obstacles in the grid at all times",
      "By remaining perfectly still for the entire simulation",
      "By collecting as many obstacles as possible",
      "By filling holes with tiles, aiming to fill as many holes as possible"
    ],
    correctAnswer: 3,
    explanation: "The Tileworld Simulation describes the agent scoring points by filling holes with tiles, aiming to fill as many holes as possible, in a 2D grid with agents, tiles, obstacles, and holes.\n\nAvoiding obstacles is not described as the scoring mechanism; the grid contains obstacles, but scoring is tied to filling holes.\n\nRemaining still contradicts the agent's described ability to move in four directions and push tiles to fill holes.\n\nCollecting obstacles is not part of the Tileworld scoring mechanism, which is based on filling holes, not gathering obstacles."
  },
  {
    id: "cpe310_ch5_058",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Under the Tileworld utility formula, what utility value results if the agent fills all the holes that appeared?",
    options: [
      "1",
      "0",
      "Infinity",
      "Undetermined"
    ],
    correctAnswer: 0,
    explanation: "The Utility Function for Tileworld states that if the agent fills all holes, the utility equals 1, since the number of holes filled equals the number that appeared in the ratio.\n\nA utility of 0 is instead the value that results if the agent fills no holes at all, the opposite extreme.\n\nThe formula is a ratio bounded between 0 and 1, so it cannot produce an infinite value.\n\nThe formula is well defined whenever at least one hole appears, so the value can be determined, and equals 1 in this case."
  },
  {
    id: "cpe310_ch5_059",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is an optimal agent defined?",
    options: [
      "An agent that always achieves the single best outcome",
      "An agent that selects actions maximizing expected utility",
      "An agent that ignores its environment entirely when choosing actions",
      "An agent that never makes use of a utility function"
    ],
    correctAnswer: 1,
    explanation: "Optimal Agent defines it as an intelligent agent that selects actions that maximize its expected performance measure, or utility or reward, given its knowledge of the environment.\n\nAlways achieving the single best outcome on every run without exception contradicts the explicit note that an optimal agent is expected to be an 'average' agent, optimal in expectation, not guaranteed best every time.\n\nAn optimal agent's decisions are based on its knowledge of the environment, not on ignoring it.\n\nAn optimal agent is defined precisely in terms of maximizing a utility function, not by avoiding one."
  },
  {
    id: "cpe310_ch5_060",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Being an optimal agent does not mean the agent is always the single best agent on every occasion; it means it is optimal in expectation.",
    options: ["True", "False", "Maybe", "I don't know"],
    correctAnswer: 0,
    explanation: "Optimal Agent explicitly notes that an optimal agent does not mean it is the best agent on every occasion; it is expected to be an 'average' agent, that is, optimal in expectation."
  },
  {
    id: "cpe310_ch5_061",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a property of an optimal agent?",
    options: [
      "Always chooses the best possible action, as guided by its utility function",
      "Ignores uncertainty and probabilities entirely when deciding",
      "All of these",
      "None of these"
    ],
    correctAnswer: 0,
    explanation: "Properties of an Optimal Agent lists always choosing the best possible action guided by its utility function, considering all possible future outcomes, accounting for uncertainty and probabilities, and maximizing long-term performance. Ignoring uncertainty and probabilities directly contradicts the listed property of accounting for uncertainty and probabilities, so choosing the best possible action alone is supported here."
  },
  {
    id: "cpe310_ch5_062",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "Which of the following is listed as a property of an optimal agent?",
    options: [
      "Maximizes only immediate reward, ignoring long-term performance",
      "Considers only a single possible future outcome",
      "Maximizes long-term performance, not just immediate reward",
      "Never accounts for uncertainty or probabilities"
    ],
    correctAnswer: 2,
    explanation: "Properties of an Optimal Agent lists maximizing long-term performance, not just immediate reward, as one of its properties.\n\nMaximizing only immediate reward while ignoring long-term performance directly contradicts this listed property.\n\nConsidering only a single possible future outcome contradicts the listed property of considering all possible future outcomes.\n\nNever accounting for uncertainty or probabilities contradicts the listed property of accounting for uncertainty and probabilities."
  },
  {
    id: "cpe310_ch5_063",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is a bounded optimal agent defined?",
    options: [
      "An agent that is guaranteed to outperform any unbounded optimal agent",
      "An agent that has no limitations of any kind on its computation or memory",
      "An agent that never uses a utility function to guide its decisions",
      "An intelligent agent that behaves optimally only within its computational, memory, and time limitations"
    ],
    correctAnswer: 3,
    explanation: "Bounded Optimal Agent defines it as an intelligent agent that behaves optimally only within its computational, memory, and time limitations, formalized as maximizing expected utility over the set of agents implementable on a given machine.\n\nA bounded optimal agent is constrained by resource limits, so it is not described as guaranteed to outperform an unbounded optimal agent, which faces no such constraints.\n\nHaving no limitations at all contradicts the very definition of bounded optimality, which is specifically about operating within limitations.\n\nA bounded optimal agent is still defined in terms of maximizing expected utility, just restricted to what is achievable on a given machine."
  },
  {
    id: "cpe310_ch5_064",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "A predicate task specification assigns which values to a run to indicate success or failure?",
    options: [
      "0 for failure and 1 for success",
      "A continuous real number between negative infinity and positive infinity",
      "A percept sequence describing every observation made during the run",
      "The exact number of actions taken during the run"
    ],
    correctAnswer: 0,
    explanation: "Predicate Task Specifications describes assigning 0, false, or 1, true, to a run: if a run is assigned 1, the agent succeeds on that run, otherwise it fails.\n\nA continuous real number describes a general utility function, not the special case of a predicate task specification, which is restricted to 0 or 1.\n\nA percept sequence describes the observations received during a run, not the success or failure value assigned by a predicate task specification.\n\nThe number of actions taken is not what a predicate task specification assigns; it assigns a binary success or failure value."
  },
  {
    id: "cpe310_ch5_065",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is a task environment formally defined?",
    options: [
      "A single number representing the agent's final score",
      "A pair of an environment and a predicate over runs",
      "A triple of beliefs, desires, and intentions",
      "The set of all percepts an agent has ever received"
    ],
    correctAnswer: 1,
    explanation: "Task Environments formally defines a task environment as a pair, Env and Psi, where Env is an environment and Psi is a predicate over runs mapping to 0 or 1.\n\nA single final score describes a general utility outcome, not the formal pair structure of a task environment.\n\nA triple of beliefs, desires, and intentions describes the BDI model of an agent's mental attitudes, not a task environment.\n\nThe set of all percepts an agent has received describes a percept sequence, not the formal definition of a task environment."
  },
  {
    id: "cpe310_ch5_066",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "When does an agent Ag succeed in a task environment?",
    options: [
      "When R_Psi(Ag, Env) is always the empty set",
      "When the agent's utility function is undefined",
      "When every run of the agent satisfies Psi",
      "When the agent has no internal state whatsoever"
    ],
    correctAnswer: 2,
    explanation: "Success Criterion states that an agent Ag succeeds in task environment Env and Psi if R_Psi(Ag, Env) equals R(Ag, Env), meaning the set of runs satisfying Psi equals the full set of the agent's runs.\n\nR_Psi(Ag, Env) being the empty set would mean the agent satisfies Psi on none of its runs, the opposite of success.\n\nAn undefined utility function is not the success condition described; success is defined in terms of the predicate Psi being satisfied on every run.\n\nHaving no internal state is unrelated to the success condition, which depends on satisfying Psi, not on the agent's architecture."
  },
  {
    id: "cpe310_ch5_067",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is an achievement task specified?",
    options: [
      "By a set B of bad states, with the agent succeeding if it avoids all of them",
      "By a single real-valued utility function over runs",
      "By the total number of percepts received during a run",
      "By a set G of goal states the agent must be guaranteed to reach"
    ],
    correctAnswer: 3,
    explanation: "Achievement Task defines it as specified by a set G of good or goal states, a subset of E, with the agent succeeding if it is guaranteed to bring about at least one of these states.\n\nBeing specified by a set B of bad states to avoid instead describes a maintenance task, the other of the two task types.\n\nA single real-valued utility function over runs describes the earlier utility-based approach to task specification, a different mechanism from the set-based achievement task.\n\nThe total number of percepts received is not how an achievement task is specified."
  },
  {
    id: "cpe310_ch5_068",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How is a maintenance goal specified?",
    options: [
      "By a set B of bad states, with the agent succeeding if it manages to avoid all states in B",
      "By a set G of good states, with the agent succeeding if it reaches at least one of them",
      "By a formal run ending with an action rather than a state",
      "By the number of internal states in the set I"
    ],
    correctAnswer: 0,
    explanation: "Maintenance Goal defines it as specified by a set B of bad states, a subset of E, with the agent succeeding in a particular environment if it manages to avoid all states in B.\n\nBeing specified by a set G of good states to reach instead describes an achievement task, the other of the two task types.\n\nWhether a run ends with an action or a state is a separate distinction, unrelated to how maintenance goals are specified.\n\nThe number of internal states in I concerns state-based agents, an unrelated formal component from how maintenance goals are specified."
  },
  {
    id: "cpe310_ch5_069",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "What is agent synthesis?",
    options: [
      "The manual process of a human programmer writing every line of an agent's code by hand",
      "Automatic programming: taking a task environment and automatically generating an agent that succeeds in it",
      "The process of combining two existing agents into a single object",
      "The act of destroying an agent that fails a task environment"
    ],
    correctAnswer: 1,
    explanation: "Agent Synthesis describes it as automatic programming: the goal is to have a program that takes a task environment and automatically generates an agent that succeeds in it, formalized as syn mapping task environments to agents or the null value.\n\nManual, hand-written coding is the opposite of automatic programming, which is what agent synthesis specifically refers to.\n\nCombining two existing agents into a single object is not what agent synthesis describes; it concerns generating an agent from a task environment specification.\n\nDestroying a failed agent is not part of the described process, which concerns generating a successful agent, or returning null if none can be found."
  },
  {
    id: "cpe310_ch5_070",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "When is a synthesis algorithm described as sound?",
    options: [
      "When it is guaranteed to return an agent whenever a successful agent exists",
      "When it always returns the null value regardless of input",
      "When any agent it returns succeeds in the task environment given",
      "When it never terminates"
    ],
    correctAnswer: 2,
    explanation: "Soundness and Completeness defines a synthesis algorithm as sound if, whenever it returns an agent, that agent succeeds in the task environment passed as input.\n\nBeing guaranteed to return an agent whenever a successful agent exists instead describes completeness, not soundness.\n\nAlways returning the null value regardless of input would make the algorithm useless and would not satisfy soundness in any meaningful sense tied to correctly identifying successful agents.\n\nSoundness and completeness are properties of what the algorithm returns, not about whether it terminates."
  },
  {
    id: "cpe310_ch5_071",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "When is a synthesis algorithm described as complete?",
    options: [
      "When, whenever it returns an agent, that agent succeeds in the task environment",
      "When it only ever returns the null value",
      "When it requires no task environment as input",
      "When it always returns an agent whenever a successful one exists"
    ],
    correctAnswer: 3,
    explanation: "Soundness and Completeness defines a synthesis algorithm as complete if it is guaranteed to return an agent whenever there exists an agent that will succeed in the task environment given as input.\n\nReturning an agent that succeeds whenever it returns one describes soundness, not completeness.\n\nOnly ever returning the null value would violate completeness whenever a successful agent actually exists to be found.\n\nA synthesis algorithm is explicitly defined as taking a task environment as input, so it does require one."
  },
  {
    id: "cpe310_ch5_072",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "How does the symbol representing synthesis failure, written as the bottom symbol, relate to programming?",
    options: [
      "It should be thought of as being like null in Java",
      "It represents a syntax error that halts compilation",
      "It represents the number zero used in arithmetic",
      "It represents an infinite loop in the synthesized agent"
    ],
    correctAnswer: 0,
    explanation: "Agent Synthesis explicitly states that the bottom symbol, used when synthesis fails to find a suitable agent, should be thought of as being like null in Java.\n\nA syntax error halting compilation is not the analogy given; the bottom symbol represents a valid outcome of the synthesis function, not a compilation failure.\n\nThe number zero in arithmetic is not the analogy the notes draw for the bottom symbol.\n\nAn infinite loop is not the analogy given; the bottom symbol simply indicates that no successful agent was found."
  },
  {
    id: "cpe310_ch5_073",
    course: "CPE 310",
    chapter: "Chapter 5",
    text: "A shopkeeping agent perceives current stock levels through its sensors, updates its internal belief about what needs restocking, and selects a restocking action using a policy function, repeating this cycle continuously. Which formal model best describes this agent?",
    options: [
      "A purely reactive agent using only Action mapping E to Ac",
      "A state-based agent, using see, state, and a policy function",
      "An expert system with no awareness of its environment",
      "A predicate task specification"
    ],
    correctAnswer: 1,
    explanation: "This describes a state-based agent, which perceives through see, maintains and updates an internal state, and selects actions through a policy function pi, exactly matching the perceive-update-select cycle described.\n\nA purely reactive agent uses only the current environment state with no internal state or memory of stock levels, unlike this shopkeeping agent which maintains beliefs about stock.\n\nAn expert system is described as not aware of its environment, the opposite of this agent, which perceives and updates its state based on sensed stock levels.\n\nA predicate task specification is a function assigning 0 or 1 to a run, not a description of an agent's perceive-decide-act architecture."
  }
];

export default cpe310Chapter5Questions;
